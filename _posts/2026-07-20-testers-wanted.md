---
layout: post
title: "Testers Wanted: Helping RightNow Launch For Real"
date: 2026-07-20 10:00:00 +0000
---

RightNow has been my side project for a long time, and it's finally close to a proper public release on Google Play. There's one thing standing between here and there that I cannot do alone: Google requires testers.

## Why I need you

Google Play has a rule for individual developers like me: before an app can go live to the public, it needs **at least 12 testers using it for 14 continuous days**. Not just installed and forgotten: Google checks that testers actually open and use the app. Dormant installs don't count.

So I need a dozen people willing to put RightNow on their phone and use it for two weeks. If you've ever wanted to nudge this project over the line, this is the single most useful thing you can do.

## What being a tester involves (Android)

1. **Email me your Google account address** at [aeropherhq@gmail.com](mailto:aeropherhq@gmail.com), the one your phone's Play Store uses. I'll add you to the testing list.
2. **Opt in and install.** Once you're on the list, you accept the invite and install RightNow from the Play Store like any normal app.
3. **Use it for two weeks.** Add your real tasks, set your daily capacity, see if planning around the time you actually have changes anything for you. A few minutes a day is plenty.
4. **Tell me what's broken or confusing.** There's a feedback form in the app (Settings → Send feedback) that comes straight to me. Blunt is good.

That's it. It's free, there are no ads, and you don't even need to create an account. The app works without one.

## iPhone users

There's no iOS build yet. Android came first simply because it's the platform I knew how to build and ship. iOS is planned to follow, and since writing this post the first iOS builds are working: I've written up how in [Building RightNow for iOS With a Mac Mini in the Corner](/blog/ios-builds-and-local-ci/). If you'd like to test on iPhone when a TestFlight build exists, email me at the same address and I'll keep a list.

## What's left

It's in good shape: the current build is stable, the test suite is over 7,600 tests, and the last few weeks fixed a long tail of bugs. But "launchable" and "finished" aren't the same thing. Here's a sample of what's still open on my ship checklist:

- **Terms of service**: drafted, but the placeholders (jurisdiction, effective date) need filling and it needs a proper legal review.
- **Accessibility**: the code has screen-reader labels throughout, but I still need to verify the full experience with VoiceOver and TalkBack on real devices, and check nothing breaks at 200% text size.
- **Account deletion**: the code wipes everything, and it's covered by tests, but I want to verify end to end on a real account that nothing is left behind.
- **Push notifications**: built and deployed server-side, still needs a real-device shakedown.
- **Payments**: deliberately last. Everything premium is currently either free or in sandbox mode. No tester will ever be asked to pay anything.

None of these block testing. They're the polish between a beta and something I'd feel good charging for one day.

## What RightNow actually is

For anyone landing here fresh: RightNow is a to-do app built around one idea: your day has a fixed amount of time in it, and your plan should respect that. You set a daily capacity, tasks fill it up, and when the bar is full, the day is full. There's also a set of quick refinement drills for keeping your backlog honest: re-estimating durations, cutting stale tasks, sharpening vague ones.

If that sounds like your kind of thing, [email me](mailto:aeropherhq@gmail.com) and help me get this over the line. Twelve people, two weeks. That's the whole ask.
