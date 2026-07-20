# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is the **public web home of RightNow** — a capacity-first productivity app. It serves three jobs:

1. **Marketing/landing site + blog** — a Jekyll site published via GitHub Pages at **https://blog.rtnw.app** (see `CNAME`)
2. **Legal/support pages** — privacy policy, terms of service, account deletion instructions
3. **Community issue tracking** — bug reports, feature requests, and questions via GitHub issue templates

- **The app itself**: https://rtnw.app (web, live) · Android (in testing) · iOS (planned)
- **Private development**: all app development happens in a separate private repository

## Repository Structure

```
rtnwapp/
├── index.html                   # Landing page (hero + live app-preview mockup)
├── blog.html                    # Blog index (lists _posts)
├── style.css                    # Single site-wide stylesheet
├── _config.yml                  # Jekyll config (permalink /blog/:title/, feed at /rss.xml)
├── _layouts/                    # default.html, post.html
├── _posts/                      # Blog posts (YYYY-MM-DD-slug.md, front matter: layout/title/date)
├── privacy-policy.html          # Legal pages, linked from the app
├── terms-of-service.html
├── delete-account.html
├── CNAME                        # blog.rtnw.app
├── FEATURES.md                  # Honest feature list — best single source of truth for app claims
├── DECISIONS.md                 # Architecture/decision log for the site
├── sync-crossposts.js           # Crossposting helper (posts with crosspost: true)
├── info/                        # Old copies, excluded from the Jekyll build — not user-visible
└── .github/
    ├── ISSUE_TEMPLATE/          # bug_report, feature_request, question, blog-post
    └── workflows/publish-post.yml  # Publish-from-issue pipeline (see below)
```

## Publishing a blog post from a phone

Alex can post without a computer:

1. Open a new issue using the **📝 Blog post** template (GitHub mobile app works well)
2. Issue title = post title; issue body = post body in Markdown
3. Leave it unlabeled to keep drafting; add the **`publish`** label when ready
4. `publish-post.yml` writes `_posts/<date>-<slug>.md`, commits, comments the live URL, and closes the issue
5. To fix a typo after publishing: edit the issue and re-add the `publish` label — same URL, same date

## Common Tasks

- Writing/editing blog posts in `_posts/` (front matter: `layout: post`, quoted `title`, `date: YYYY-MM-DD HH:MM:SS +0000`)
- Updating the landing page — keep the `.glass.preview` mockup faithful to the shipped app's Today screen
- Updating issue templates, legal pages, `FEATURES.md`

## Important Notes

- **Never invent facts for content.** No fabricated statistics, user counts, testimonials, ratings, or feature claims. If a number can't be verified, don't publish it. (A 2026-07 sweep removed a batch of AI-generated fabrications — don't reintroduce the disease.)
- Feature claims should match `FEATURES.md` and the shipped app. Current truths: dark theme only, web live at rtnw.app, Android in testing, iOS planned, **no** desktop apps.
- Use "refinement" / "cleanup" for the backlog games in user-facing copy — not "grooming".
- Security issues go through GitHub's private vulnerability reporting, not public issues.

## Design Philosophy

### Website Design
The site mirrors the app's brand: **dark, glassy, calm**.

- Background `#0E120E` (green-tinted near-black) with soft green/orange radial glows
- Brand colours: green `#66BB6A`, orange `#FFB74D`/`#FF8F00` — the capacity bar fills green → orange
- Translucent "glass" cards (`.glass`): subtle fill, 1px border, blur, rounded corners
- The landing page's app-preview card is a faithful miniature of the real Today screen (priority-coloured squircle checkboxes, green-bordered active task, pill capacity bar, add-a-task pill)

### Blog Design
- Jekyll posts with individual pages at `/blog/<slug>/`, listed on `blog.html`
- Minimal metadata, chronological, content first
- RSS feed at `/rss.xml`

## Writing Style and Voice

### Alex's Writing Tone
When writing blog posts or content as Alex, maintain these characteristics:

**Voice Qualities:**
- **British English**: Alex is British and uses UK spelling and expressions
- **Conversational and informal**: Uses contractions freely ("I'm", "don't", "it's")
- **Self-aware and honest**: Openly discusses being torn about issues, admits uncertainties
- **Humble**: Acknowledges limitations ("I know there is simply no such thing as perfect")
- **Enthusiastic but grounded**: Excited about the project but realistic about challenges
- **Personal**: Shares motivations and feelings openly

**Writing Patterns:**
- Often starts sentences with conjunctions ("And", "So")
- Uses humor and casual expressions ("lol", emoticons like ":-)")
- Employs parenthetical asides for additional thoughts
- Sometimes trails off with ellipses for effect ("Somehow... I'm not sure how")
- Prefers shorter paragraphs for online readability

**Content Approach:**
- Transparent about being a solo developer with a full-time job
- Open about using AI and other technologies
- Focuses on personal learning and growth
- Acknowledges the community and asks for patience
- Balances technical topics with personal perspective
- Speaks as "I", not "we" — there is no team

**Key Phrases and Style:**
- "I am Alex" (not "I'm Alex" in introductions)
- "pretty cool" for expressing enthusiasm
- "having a go at" instead of more formal "attempting" (British expression)
- "get to grips with" rather than "get a handle on"
- Direct address to readers ("So I hope you don't mind...")

**British Language Notes:**
- Uses UK spelling: "fulfils" (though accepts US spelling in code/tech contexts)
- British expressions: "having a go", "full-time" (hyphenated), "at the end of the day"
- Understated enthusiasm typical of British communication style
- Polite self-deprecation and asking for patience

**What to avoid (AI-isms):**
- Hype vocabulary: "revolutionary", "cutting-edge", "game-changer", "seamlessly", "blazing-fast", "unleash"
- Formulaic constructions: "It's not just X, it's Y", "Let's dive in!", "The best part?", staccato marketing triplets
- Breathless exclamation marks and grand closes ("Here's to the next chapter! 🚀")
- Any statistic, quote, or claim that isn't verifiably true

Remember: Alex writes like someone talking to a friend about their passion project - genuine, slightly nerdy, and refreshingly honest, with a distinctly British voice.
