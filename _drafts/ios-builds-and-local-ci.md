---
layout: post
title: "Building RightNow for iOS With a Mac Mini in the Corner"
---

RightNow's Android builds have shipped from my dev machine for months. A
script runs the tests, builds the bundle and pushes it to Google Play. No
cloud CI, no build minutes, no YAML. When it came time to build for iOS I
had a decision to make, because iOS builds need a Mac and my dev machine
runs Windows.

The obvious answers are in the cloud: GitHub Actions has macOS runners, and
Apple has Xcode Cloud. They work, but they meter you by the minute for
something I'd be doing several times a week, on infrastructure I can't get
at when it misbehaves. And I already owned a Mac mini that spends most of
its life doing nothing.

So the mini became the build box.

## What "local CI" means here

It works like this:

- My Windows machine stays the source of truth. All code changes and all
  git commits happen there, same as always.
- The mini has a read-only clone of the repo. It can pull; it can never
  push. A deploy key with write access unchecked enforces that, so the
  build box cannot commit to the project even if it wanted to.
- Everything on the mini is driven over SSH: pull, build, sign, upload,
  even booting the iOS simulator and tapping through the app to smoke-test
  it. Nobody sits at the mini.
- The Flutter version on the mini is pinned to exactly match my dev
  machine, so there's no gap between what I test and what gets built.

Releasing to TestFlight is now: pull, build, archive, sign, upload. Five
commands in a row, and the plan is to fold them into one script like the
Android side.

## The honest cost: one long day of Apple

Getting there took a day, and nearly all of that day was signing. A short
list of the gotchas, in case you're about to do this yourself:

- **macOS keychains don't open over SSH.** Any credential that lives in a
  keychain, like the ones GitHub Desktop stores, is useless to a headless
  session. Deploy keys and dedicated keychains with their own passwords are
  the way through.
- **Xcode's "cloud signing" didn't work for me headless**, even with an
  Admin API key. It kept failing with errors about invalid certificates
  while the account quietly had no distribution certificate at all. What
  worked was doing it the old way: generate a key and certificate signing
  request with openssl, have the App Store Connect API issue a real
  distribution certificate, and keep it in a dedicated build keychain. It
  worked on the first try, and I understand every part of it.
- **Archive unsigned, sign at export.** A signed archive wants a
  development identity you don't need. Disable signing for the archive step
  entirely and let the export do the signing. Every CI system does this;
  now I know why.
- **Apple will reject your build after upload for missing purpose
  strings** if any dependency so much as references the photo library. The
  fix is a couple of honest sentences in Info.plist, but you only find out
  after processing, with a new build number required for the retry.
- One that surprised me: my upload kept dying with "network connection
  lost" for hours. The line wasn't down. The uploader's parallel streams
  were flooding my modest home upload and timing each other out. A
  single-stream upload via Apple's Transporter tool moved the same file in
  about a minute.

## Was it worth it?

For me, yes. The mini builds are free, the hardware was already paid for,
and when something breaks I can read every log on a machine I control. The
trade-offs: my home internet is now part of my release pipeline, and
maintenance is mine. Nobody else is patching this runner.

I didn't type most of those SSH commands myself. Claude Code has come on
leaps and bounds since I started this project, and honestly I was able to
just ask it to run them: the Flutter install, the certificate dance, the
simulator smoke tests, working out why the upload kept dying. And now that
it can open a browser, I used Cowork to help me fill in the super
confusing forms on the Apple developer website. My jobs were the ones that
need a human with an Apple ID: agreeing to agreements, and plugging in an
ethernet cable when asked.

I've been pretty hooked on Claude Code since I started using it. In
programming I think it's an absolute game changer, and it feels less prone
to the ethical dilemmas that come with AI in more creative spaces. The
environmental costs are something that weigh on me, but I see them as
systemic issues that should be regulated at governmental level. Remember
how they put a "carbon footprint" on you as an individual rather than on
the corporations and systems at large? I'd rather not repeat that trick by
guilting individual developers over their tooling.

RightNow for iOS is now uploaded and working through TestFlight review. If
you offered to test on iPhone, you're up soon.
