---
layout: post
title: "The Week a Bug Report Became a Feature"
date: 2026-08-03 10:00:00 +0000
---

RightNow got its first external tester recently. It's my wife, so "external" is a stretch, but she counts: she didn't build the app, she uses to-do apps hard, and she has no reason to be polite about mine.

She installed the iOS TestFlight build, went to connect her Google Calendar, and it didn't work. No error, just "no calendars found".

The embarrassing bit: I hadn't planned to launch with calendar integration at all. I forgot to take the settings for it away. I had not even tested it myself. So the first bug report from my first tester was about a feature I didn't know was in the build.

## The bug

I assumed it was an iOS problem. New platform, new build pipeline, plenty of fresh ways to break things. So I started digging into the iOS side, and found the first issue quickly enough: the app bundle was missing its Google OAuth client ID. Fine. Fixed. That would have been the end of it, except by then I'd started to wonder how the other platforms could possibly be working.

They weren't. None of them. It turned out the Google Calendar integration had never worked for anyone, on any platform, ever. Four separate configuration gaps, one per platform, each independently fatal:

- **iOS** was missing its OAuth client ID in the app bundle.
- **Android** signs release builds with a Play Store certificate that had never been registered with Google, so Google refused to talk to it.
- The **Google Calendar API itself was never enabled** on the cloud project. This one is my favourite, because it means even a perfectly configured client would have got nowhere.
- The **web app's domain** wasn't registered as an authorised JavaScript origin, so the browser flow was dead too.

Every one of these produced a real, specific error. And every one of them was being silently swallowed by the app and flattened into the same bland "no calendars found" message. From the outside, four different configuration problems looked like one vague mystery bug.

The reason nobody noticed sooner is simple: the feature was never meant to ship, so nobody ever tried it. Not even me. It existed in the code, it existed in the test suite, it just didn't exist in the world.

## The feature

Here's the part I didn't expect. Once the connection actually worked, my wife started using it properly, and the feedback turned into a week of the fastest feature work this project has seen. Not because I suddenly got faster, but because the requests were concrete. I have my attention on so many aspects of the app that are useful for me. It's great to know what is useful for other people, other real users.

By the end of the week:

- You can tap a calendar event to see its details.
- You can swipe an event to mark it complete, the same as a task.
- Events that have already happened show as done automatically, because a meeting that's over is over.
- Each event has its own capacity control, so you can decide how much of your day a meeting really costs you. Not every hour-long meeting takes an hour out of you, and some take considerably more.
- And the error handling got rebuilt so that when something fails, the app now tells you what actually failed, instead of pretending nothing happened.

That last one is the bug report becoming a feature. The silent-swallowing that hid four configuration problems for months is gone, replaced with honest error messages. If I'd had those from the start, this whole saga would have been four small fixes instead of one archaeology dig.

## What I'm taking from it

A few things, none of them revolutionary, all of them apparently things I needed to learn by doing:

**A feature you've never exercised end-to-end doesn't exist.** It doesn't matter that the code is there and the unit tests pass. Until someone has done the real thing, on a real device, through the real build, you have a hypothesis, not a feature.

**Silently swallowed errors turn configuration problems into mystery bugs.** Every one of those four gaps would have been a five-minute fix if the app had just repeated what Google told it. Catching an error and replacing it with a shrug isn't defensive programming, it's hiding the evidence.

**One real tester beats thousands of unit tests.** The suite was over 7,500 tests and green the entire time this feature was broken for every user on every platform. I'm not knocking the tests (they catch plenty) but they can only check the things I thought to check. My wife checked the thing I'd never done: actually using it.

If you're on the Android testing list, the calendar connection now works there too, for the first time. Which is a strange sentence to write about a feature that's been "in the app" for months. Give it a go, and if something fails, the app should now at least have the decency to tell you what.
