// ABOUTME: Syndicates rtnw posts flagged `crosspost: true` to the personal blog, stamping
// ABOUTME: each with a canonical_url back to blog.rtnw.app. Non-destructive by default.
//
// Usage (from this repo):  node sync-crossposts.js
// The personal blog repo is assumed to sit beside this one (../aeropher.github.io).
// Override with:  PERSONAL_BLOG_POSTS="C:/path/to/aeropher.github.io/_posts" node sync-crossposts.js
//
// Behaviour:
//   - Only posts with `crosspost: true` in their front matter are syndicated.
//   - New crossposts are created on the personal blog (rtnw-only `# Title` already stripped,
//     `crosspost` flag removed, `canonical_url` injected).
//   - Existing personal-blog copies are LEFT INTACT (keeps their header image etc.) — only
//     their `canonical_url` is reconciled. Pass --force to overwrite their body from rtnw.
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '_posts');
const DEST = process.env.PERSONAL_BLOG_POSTS
  || path.resolve(__dirname, '..', 'aeropher.github.io', '_posts');
const CANONICAL_BASE = 'https://blog.rtnw.app/blog';
const FORCE = process.argv.includes('--force');

function split(content) {
  const norm = content.replace(/^﻿/, '').replace(/\r\n/g, '\n');
  const m = norm.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : null;
}
const hasFlag = (fm) => /^crosspost:\s*true\s*$/m.test(fm);
const stripFlag = (fm) => fm.split('\n').filter((l) => !/^crosspost:\s*true\s*$/.test(l)).join('\n');
const getCanonical = (fm) => { const m = fm.match(/^canonical_url:\s*(.+)$/m); return m ? m[1].trim() : null; };
const setCanonical = (fm, url) => /^canonical_url:/m.test(fm)
  ? fm.replace(/^canonical_url:.*$/m, `canonical_url: ${url}`)
  : `${fm}\ncanonical_url: ${url}`;
const slugOf = (file) => file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

if (!fs.existsSync(DEST)) {
  console.error(`Personal blog _posts not found: ${DEST}\nSet PERSONAL_BLOG_POSTS, or place the repos side by side.`);
  process.exit(1);
}

let created = 0, reconciled = 0, forced = 0, inSync = 0;
for (const file of fs.readdirSync(SRC).filter((f) => f.endsWith('.md'))) {
  const parts = split(fs.readFileSync(path.join(SRC, file), 'utf8'));
  if (!parts || !hasFlag(parts.fm)) continue;

  const url = `${CANONICAL_BASE}/${slugOf(file)}/`;
  const destPath = path.join(DEST, file);
  const srcCopy = `---\n${setCanonical(stripFlag(parts.fm), url)}\n---\n\n${parts.body.trimStart()}\n`;

  if (!fs.existsSync(destPath)) {
    fs.writeFileSync(destPath, srcCopy, 'utf8');
    created++; console.log(`created   ${file}`);
  } else if (FORCE) {
    fs.writeFileSync(destPath, srcCopy, 'utf8');
    forced++; console.log(`forced    ${file}`);
  } else {
    const dparts = split(fs.readFileSync(destPath, 'utf8'));
    if (!dparts) { console.warn(`skip (dest has no front matter): ${file}`); continue; }
    if (getCanonical(dparts.fm) === url) { inSync++; continue; }
    fs.writeFileSync(destPath, `---\n${setCanonical(dparts.fm, url)}\n---\n${dparts.body}`, 'utf8');
    reconciled++; console.log(`reconciled ${file}`);
  }
}
console.log(`\nDone. created=${created}, reconciled=${reconciled}, forced=${forced}, already in sync=${inSync}.`);
console.log(`Next: review + commit the changes in ${DEST}`);
