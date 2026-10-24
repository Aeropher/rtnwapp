# Instagram posts

One folder per post: the slides as `1.jpg`, `2.jpg`… and `caption.txt`. `day-NN-name/`
folders are the queue, posted in order; `on-YYYY-MM-DD-name/` folders are seasonal posts
that go out on that date instead, and the queue slips a day.
They're made by `marketing/instagram/Build-Posts.ps1` in the private app repo
(`-PublishTo C:\Repos\rtnwapp\instagram` copies them here). The site serves them at
`https://blog.rtnw.app/instagram/...`, which is where Instagram fetches them from.

`.github/workflows/instagram.yml` runs `post-next.js` daily at 18:00 UTC. It posts the
lowest-numbered day not yet in `posted.json`, then commits `posted.json`. A missed day
isn't skipped; the queue just moves on a day later.

## Turning it on

1. Create the Instagram account and switch it to a professional account
   (Settings → Account type and tools → Switch to professional account; Creator or Business).
2. At developers.facebook.com, create an app with the Instagram use case
   ("API setup with Instagram login"), add the account, and generate an access token.
   The same page shows the account's Instagram user ID. The app can stay in development
   mode, because it only posts to an account that has a role on it.
3. Create a fine-grained GitHub token (Settings → Developer settings → Fine-grained
   tokens) for this repo only, with the permission "Secrets: Read and write".
4. In this repo's Settings → Secrets and variables → Actions, add the secrets
   `IG_USER_ID`, `IG_ACCESS_TOKEN` and `SECRETS_PAT` (the GitHub token), and the variable
   `INSTAGRAM_ENABLED` = `true`.
5. Actions → Post to Instagram → Run workflow, to post day 1 now and prove it works.

The Instagram token lasts 60 days. `instagram-token.yml` refreshes it every Monday and
stores the new one, so it never runs out while that works. It stops working when the
GitHub token expires, so renew that before its expiry date.

Dry run locally: `DRY_RUN=1 node instagram/post-next.js`
