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

## Implemented in this repo (uncommitted at time of writing)

- `CNAME` → `blog.rtnw.app`
- `_config.yml` → `url: https://blog.rtnw.app`, `baseurl: ""`, Jekyll plugins
  (`jekyll-feed`, `jekyll-seo-tag`, `jekyll-sitemap`), `permalink: /blog/:title/`,
  feed served at `rss.xml`.
- `Gemfile` → mirrors the GitHub Pages build for local previews
  (`bundle install` then `bundle exec jekyll serve`).
- `_layouts/default.html`, `_layouts/post.html` → shared chrome + single-post template.
- `blog.html` → rewritten as a Jekyll post list, pinned to `/blog.html` (explicit
  `permalink`) so existing inbound links keep working; posts live at `/blog/<slug>/`.
- `_posts/*.md` → all 15 diary posts migrated from `blog-posts.json` (titles/slugs
  assigned, redundant title paragraphs stripped).
- `terms-of-service.html` → new, styled to match `privacy-policy.html`, placeholders
  (`[DATE_TO_FILL]`, `[JURISDICTION_TO_FILL]`, `[SUPPORT_EMAIL_TO_FILL]`) left intact.
- Removed: `blog-posts.json`, `generate-rss.js`, `rss.xml` (superseded by Jekyll).

## Still to do

- [ ] **DNS (Hover):** add `CNAME` record `blog` → `aeropher.github.io` on `rtnw.app`.
- [ ] **Commit + push** this repo; confirm GitHub Pages picks up the custom domain and
      enable "Enforce HTTPS".
- [ ] **Fill ToS placeholders** (date, jurisdiction, support email) + lawyer review.
- [ ] **Repoint the app** (`rightnow` repo, `lib/utils/legal_urls.dart`):
      `privacyPolicy` → `https://blog.rtnw.app/privacy-policy.html`,
      `termsOfService` → `https://blog.rtnw.app/terms-of-service.html`. Land in the same
      release as the subdomain going live so links don't 404.
- [ ] **Clean the personal blog** (`aeropher.github.io`): remove the 11 RightNow posts,
      the 3 `rightnow-*` pages, and loose product `.md` files — *after* the app no longer
      links to the personal-site privacy page.
- [ ] **Cross-post mechanism:** script to copy rtnw `_posts` into the personal blog with
      a canonical link injected (and a "RightNow" category/tag).
- [ ] **Open IA question:** at `blog.rtnw.app` the root (`index.html`) is still the
      Issues & Feedback hub, not the blog. Decide whether the blog should be the landing.
