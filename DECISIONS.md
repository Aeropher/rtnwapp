# Web & Blog Architecture Decisions

Decisions about where RightNow's marketing site, blog, and legal pages live, and how
they relate to Alex's personal blog. Newest context at the top of each section.

## The problem we're solving

RightNow content had leaked across three places, duplicated and drifting:

- **`aeropher.github.io`** (Alex's *personal* Jekyll blog, "AeropherHQ") was hosting
  RightNow material: 11 of 21 published posts were RightNow, plus `rightnow.md`,
  `rightnow-delete-account.md`, and `rightnow-privacy-policy.md` pages, plus loose
  product files in the repo root (`rightnow_feature_backlog.md`, `PRD.md`, etc.).
- The **app's live privacy policy** was being served *from the personal blog*
  (`https://aeropher.github.io/rightnow-privacy-policy/`), making the personal site
  load-bearing for the shipping app. The ToS link
  (`https://aeropher.github.io/rightnow-terms-of-service/`) 404'd — no such page existed.
- **`rtnwapp`** (this repo) had its own separate blog (`blog-posts.json` + `blog.html`)
  and mirrored marketing content under `info/`.

## Decisions

1. **`blog.rtnw.app` is the single canonical home** for the RightNow blog and legal
   pages. It's served by *this* repo (`rtnwapp`) via GitHub Pages on the `blog`
   subdomain of the owned domain `rtnw.app`. This keeps RightNow **independent** of
   Alex's personal site — important if RightNow becomes a paid product.

2. **Personal blog syndicates, doesn't duplicate.** Alex's personal blog/CV should
   still showcase the RightNow work, so RightNow posts will be **cross-posted** to
   `aeropher.github.io` with a `<link rel="canonical">` pointing back to the
   `blog.rtnw.app` original. Google attributes the content to rtnw; the personal site
   shows it off without competing for ranking or re-creating the drift. If rtnw spins
   off commercially, syndication simply stops — the canonical home is untouched.

3. **The rtnw blog is unified on Jekyll** (was a homegrown `blog-posts.json` + JS
   renderer with *no per-post URLs*). Now standard Jekyll `_posts`, giving every post a
   real shareable permalink (`/blog/<slug>/`), proper `<title>`/canonical via
   `jekyll-seo-tag`, and an Atom feed via `jekyll-feed` at `/rss.xml`. Jekyll matches
   the personal blog's engine, so cross-posting later is a near-trivial file copy.

4. **Legal pages move to `blog.rtnw.app` and the app repoints there.** Privacy +
   Terms are hosted in this repo (`privacy-policy.html`, `terms-of-service.html`) and
   the Flutter app's `LegalUrls` will point at `blog.rtnw.app/...` — removing the app's
   dependency on the personal site.

## Outcome (as of 2026-07-23 — everything below is live)

All four decisions are implemented, committed, and verified:

- **`blog.rtnw.app` is live** on GitHub Pages with the custom domain + HTTPS (Hover
  CNAME in place). The Jekyll unification shipped: every post has a real permalink at
  `/blog/<slug>/`, `blog.html` remains a pinned post index, and the Atom feed serves
  at `/rss.xml`. The old `blog-posts.json` renderer is gone.
- **Legal pages are canonical here**: `privacy-policy.html` + `terms-of-service.html`
  (ToS finalized 2026-07-20 — effective date 20 July 2026, England and Wales,
  aeropherhq@gmail.com; Alex opted out of a lawyer pass). The Flutter app's
  `LegalUrls` and its 5 general blog links point at `blog.rtnw.app` — the personal
  site is no longer load-bearing for the shipping app.
- **Syndication works as designed**: `sync-crossposts.js` copies opted-in posts
  (`crosspost: true` front matter) to `aeropher.github.io` with `rel=canonical`
  pointing back here; the 11 migrated RightNow articles are cross-posted and verified.
  The personal blog's `rightnow-*` pages are removed.
- **IA resolved**: the marketing landing is the site root; the old Issues & Feedback
  hub is a footer "Issues" link.

### Remaining scrap

- [ ] `aeropher.github.io` still carries one loose product file,
      `rightnow_feature_backlog.md` — delete it (it predates the split and its
      contents belong to the app repo's docs).
