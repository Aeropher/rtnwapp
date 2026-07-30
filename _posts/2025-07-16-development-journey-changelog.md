---
layout: post
title: "Building RightNow: How It's Gone So Far"
date: 2025-07-16 02:00:00 +0000
crosspost: true
categories: development
tags: [changelog, milestones, development, journey, progress]
---

This is a look back at how RightNow has come together so far: what got built in what order, what fought back, and what I'd do differently. No grand claims; it's one person building an app around a full-time job, with a lot of help from AI tooling.

## Why another to-do app?

The idea came from a familiar sort of day: I'd planned about twelve hours of work into an eight-hour day, again. Every productivity app I tried was happy to let me do that. The list just grew, and the guilt grew with it.

The core thought behind RightNow: what if the app actively stopped you overcommitting, instead of just organising the overcommitment?

## The rough order things got built

**Tasks with durations.** From day one, every task in RightNow carries a time estimate. That's the foundation everything else stands on: you can't budget a day out of tasks that don't cost anything.

**The capacity system.** The heart of the app: you set the hours you actually have, and a bar fills as you commit them. When the day is full, the app says so. Adding the "over capacity" warning was the moment the concept clicked: you *feel* the day being full.

**Scheduling and the Today screen.** Moving tasks from the backlog into a day, with the capacity check standing guard. Then making Today a place you actually work from: reordering, marking things done, seeing what's next.

**Search, filters, and tags.** Once my own backlog got big enough to be embarrassing, finding things mattered. Fuzzy search, filters, colour-coded tags.

**Estimation feedback.** Comparing what you guessed against what actually happened. Humbling, and useful. I had no idea how consistently optimistic I was about certain kinds of task until the app showed me.

**The refinement games.** Backlog cleanup as quick swipe games instead of a chore. I went through a lot of concepts before landing on games that felt natural on a phone; this part has been rebuilt more than once since.

**Cloud sync.** Moving from local-only storage to Firebase with offline-first sync. Easily the most complex part of the codebase, and the source of most of my hardest bugs. I also lost an embarrassing amount of time to Android build tooling along the way.

**Accounts.** Sign-in came late on purpose: the app works without an account, and I wanted to keep it that way. An account is for keeping your tasks safe across devices, not a toll booth.

## Lessons so far

**What I'd do differently:**

1. Start testing properly from day one. I paid for that later in regressions.
2. Don't over-engineer early. I built clever patterns before I needed them and then deleted half of them.
3. Feature creep is real. Several features went in and came back out because they didn't serve the core idea.

**What's worked:**

1. Solving my own problem. When I'm the user, bad decisions surface fast.
2. Offline-first architecture: the app feels instant because nothing waits on a network.
3. Building in public. Writing these posts keeps me honest about progress.

## Where things stand

As I write this, the web app works, and an Android release is getting close. iOS is on the list but not started. There are no user counts or satisfaction scores to report because it hasn't properly launched yet. The only heavy user so far is me, plus some very patient friends and family.

The mission hasn't changed since the first commit: help people work more sustainably by being honest about time.

---

*Want to follow along? Try the app at [rtnw.app](https://rtnw.app) or keep an eye on this blog.*
