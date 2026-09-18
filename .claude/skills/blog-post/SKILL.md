---
name: blog-post
description: Write, edit or publish a post on blog.rtnw.app in Alex's voice — British, understated, honest, no AI-isms and no invented facts. Handles the Jekyll front matter, the FEATURES.md truth check, crossposting to the personal blog, and the publish-from-issue pipeline. Use for any blog post, release note or announcement on the RightNow site.
---

# blog-post

The hard part is not the file, it's the voice and the truth check. Both have
been got wrong before: a 2026-07 sweep had to delete a batch of AI-generated
fabrications from this site.

## Two rules that outrank everything

**1. Never invent a fact.** No statistics, user counts, download numbers,
testimonials, ratings or feature claims that can't be verified. If a number
can't be sourced, it doesn't go in. This includes inventing Alex's feelings —
write what he said, not an enthusiastic version of it.

**2. Claims match the shipped app.** Check `FEATURES.md` before describing
anything the app does. Current truths: **dark theme only**, web **live** at
rtnw.app, Android **in testing**, iOS **planned**, **no** desktop apps. Say
"refinement" or "cleanup" for the backlog games — never "grooming".

## The voice

Alex, British, solo developer with a full-time job, writing to a friend about
his project. Full guidance in this repo's `CLAUDE.md`; the working summary:

- **British English.** UK spelling, "having a go at", "get to grips with".
- **Contractions, short paragraphs.** Sentences starting with "And" or "So"
  are in character.
- **Honest and self-aware.** He admits being torn, being wrong, not knowing.
  Understated enthusiasm — "pretty cool", not "incredible".
- **"I", never "we".** There is no team.
- Parenthetical asides, the occasional trailing ellipsis, the occasional "lol".

**Banned — these read as machine-written:**

- Hype: revolutionary, cutting-edge, game-changer, seamlessly, blazing-fast,
  unleash, supercharge.
- Formulas: "It's not just X, it's Y", "Let's dive in", "The best part?",
  three-word marketing triplets, a grand close with a rocket emoji.
- Exclamation marks in any quantity.

Best models to read before writing: `_posts/2026-08-17-what-rightnow-is-and-isnt.md`
and `_posts/2026-08-11-why-my-phone-never-buzzed.md`. Read one. The rhythm does
not survive being described.

## Writing the file

`_posts/YYYY-MM-DD-slug.md`, front matter exactly:

```yaml
---
layout: post
title: "Title In Title Case"
date: 2026-09-18 10:00:00 +0000
description: "One sentence for the listing and social preview."
---
```

- `title` quoted; `date` with the time and `+0000`; `description` optional but
  worth having.
- No `# Title` heading in the body — the layout renders the title.
- A post not ready to publish goes in `_drafts/` instead, no date in the name.
- Permalinks are `/blog/<slug>/`. **Changing a filename changes the URL** — to
  fix a published post, edit the body and leave the name alone.

Preview locally with `bundle exec jekyll serve` if the layout matters.

## Crossposting

Add `crosspost: true` to the front matter to syndicate to the personal blog,
then from this repo:

```bash
node sync-crossposts.js          # --force to overwrite an existing copy's body
```

It writes the copy to `../aeropher.github.io/_posts`, strips the flag and
stamps `canonical_url` back at blog.rtnw.app. Existing copies keep their body
and header image; only the canonical URL is reconciled unless `--force`.
blog.rtnw.app is the canonical home — the personal blog is the copy.

## Publishing

Two routes:

- **From here** — write the file, then let Alex commit and push. Publishing is
  his call, so show him the draft first, don't push a post because it's
  finished.
- **From his phone** — a GitHub issue on the 📝 Blog post template, title =
  post title, body = Markdown. Adding the **`publish`** label runs
  `.github/workflows/publish-post.yml`, which writes the file, commits,
  comments the live URL and closes the issue. Re-adding the label after an edit
  republishes to the same URL and date. Only OWNER/MEMBER/COLLABORATOR issues
  publish.

GitHub Pages takes a minute or two to rebuild after the push.

## Report

Give Alex the file path, the resulting URL, whether it's crossposted, and a
flat list of every factual claim in the post with where it was checked. If a
claim couldn't be verified, say so rather than softening it.
