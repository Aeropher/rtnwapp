// ABOUTME: Posts today's seasonal post (instagram/on-YYYY-MM-DD-*/) or else the next unposted day
// ABOUTME: (instagram/day-NN-*/) to Instagram, then records it
// ABOUTME: in posted.json. Run daily by .github/workflows/instagram.yml.
//
// The images are fetched by Instagram from blog.rtnw.app, so a day's folder must be live
// on the site before it is posted. Slides and captions are made by
// marketing/instagram/Build-Posts.ps1 in the private app repo.
//
// Env: IG_USER_ID, IG_ACCESS_TOKEN (Instagram API with Instagram Login).
//      DRY_RUN=1 prints what would be posted without calling Instagram.
//      TODAY=YYYY-MM-DD pretends it's that date (for trying seasonal posts with DRY_RUN).
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const STATE = path.join(DIR, 'posted.json');
const SITE = 'https://blog.rtnw.app/instagram';
const API = 'https://graph.instagram.com';
const { IG_USER_ID, IG_ACCESS_TOKEN, DRY_RUN } = process.env;

const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : { posted: [] };
const done = new Set(state.posted.map((p) => p.folder));
const folders = fs.readdirSync(DIR);

// A seasonal post (on-YYYY-MM-DD-id) goes out on its date, ahead of the queue; the queue
// (day-NN-id) then slips by a day. A seasonal post whose day was missed is never posted late.
const today = process.env.TODAY || new Date().toISOString().slice(0, 10);
const pinned = folders.find((f) => f.startsWith(`on-${today}-`) && !done.has(f));
const next = pinned || folders.filter((f) => /^day-\d{2}-/.test(f)).sort().find((f) => !done.has(f));

if (!next) {
  console.log('Nothing pinned to today and every day has been posted. Nothing to do.');
  process.exit(0);
}

const slides = fs.readdirSync(path.join(DIR, next)).filter((f) => /^\d+\.jpg$/.test(f))
  .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
const caption = fs.readFileSync(path.join(DIR, next, 'caption.txt'), 'utf8').replace(/^﻿/, '').trim();
const urls = slides.map((f) => `${SITE}/${next}/${f}`);

async function api(method, route, params) {
  const body = new URLSearchParams({ ...params, access_token: IG_ACCESS_TOKEN });
  const res = method === 'GET'
    ? await fetch(`${API}/${route}?${body}`)
    : await fetch(`${API}/${route}`, { method, body });
  const json = await res.json();
  if (!res.ok || json.error) throw new Error(`${route}: ${JSON.stringify(json.error || json)}`);
  return json;
}

// Instagram processes each container before it can be used; wait for FINISHED.
async function ready(id) {
  for (let i = 0; i < 30; i++) {
    const { status_code } = await api('GET', id, { fields: 'status_code' });
    if (status_code === 'FINISHED') return id;
    if (status_code === 'ERROR' || status_code === 'EXPIRED') throw new Error(`Container ${id} is ${status_code}`);
    await new Promise((r) => setTimeout(r, 5000));
  }
  throw new Error(`Container ${id} never finished processing`);
}

async function main() {
  console.log(`Next: ${next} (${slides.length} slide${slides.length > 1 ? 's' : ''})`);
  urls.forEach((u) => console.log(`  ${u}`));
  if (DRY_RUN) { console.log(`Caption:\n${caption}`); return; }
  if (!IG_USER_ID || !IG_ACCESS_TOKEN) throw new Error('IG_USER_ID and IG_ACCESS_TOKEN must be set');

  // Instagram fetches the images itself, so make sure the site is serving them
  for (const u of urls) {
    const res = await fetch(u, { method: 'HEAD' });
    if (!res.ok) throw new Error(`${u} returned ${res.status}; is the site deployed?`);
  }

  let container;
  if (urls.length === 1) {
    container = await api('POST', `${IG_USER_ID}/media`, { image_url: urls[0], caption });
  } else {
    const children = [];
    for (const u of urls) {
      const item = await api('POST', `${IG_USER_ID}/media`, { image_url: u, is_carousel_item: 'true' });
      children.push(await ready(item.id));
    }
    container = await api('POST', `${IG_USER_ID}/media`, { media_type: 'CAROUSEL', children: children.join(','), caption });
  }
  await ready(container.id);
  const media = await api('POST', `${IG_USER_ID}/media_publish`, { creation_id: container.id });

  state.posted.push({ folder: next, media: media.id, at: new Date().toISOString() });
  fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + '\n');
  console.log(`Posted ${next} as media ${media.id}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
