---
layout: post
title: "Widgets: Build Them All, Keep the Good Ones"
date: 2026-10-24 10:00:00 +0000
description: "I've been having a go at Android home-screen widgets for RightNow. There are twenty in the picker right now, and most of them won't survive."
---

I've been playing with home-screen widgets for the Android app. This is a bit of an odd post, because I genuinely don't know which of them will make it into a proper release, or when. There's no date. So treat this as a look at the workbench rather than an announcement.

The idea behind all of them is the same as the app. RightNow is about what you can do today with the hours you've got left, and a widget is the one bit of the app you see without opening it. If it can tell you "you've got 2h free and this is the next thing", that's most of the app's job done from the home screen.

## The approach: too many, on purpose

Normally I'd design one widget carefully and ship it. This time I went the other way. Building a widget is cheap now (I'm using AI for a lot of the typing, as I've said before), and the expensive part is finding out whether it's any good on a real phone, in a real day. You can't really work that out from a mock-up.

So I built as many as I could think of, put them all on my own phone, and I'm letting use decide. Testing is what removes the duds.

It has already removed one. There was a widget called "Does it fit?" that was meant to answer exactly that, for whatever you were thinking of adding. In practice it just wasn't any good, so it's gone. On the other hand the Today widget, which is just today's list with ticks under the capacity bar, I liked straight away.

## What's on the bench

At the time of writing the picker has twenty RightNow widgets in it. Roughly:

- **The day at a glance.** Today (the list), a Capacity bar strip with free time and when your day ends, Over by, and Day ends in, which is a live countdown to the end of your work day.
- **The one thing.** Right now shows a single task, the way focus mode does. Right now + day adds how many others are pending and the capacity bar underneath.
- **Around your calendar.** Next gap tells you how long you've got before your next meeting and suggests a task that fits in it.
- **Looking back.** Done today, and Streaks, which shows your repeating tasks as a row of squares, one per day.
- **Cleanup.** Tidy up tells you how many tasks have gone untouched for a month. There's a Games widget with a shortcut to each of the refinement games, and a small one-tap widget for each game on its own.
- **Add a task**, which does what it says.

## The one I'm most curious about

The last one is called Right now, smart. It's my take on the stacks of widgets Apple does, where it tries to show the right widget at the right time of day. Mine is a single widget that changes what it shows depending on what seems most useful at that moment.

If you're in a meeting, it shows the meeting and what to do after it. If a meeting starts in the next quarter of an hour, it tells you. If you're over capacity, it says so. Near the end of the work day it suggests a quick tidy-up of stale tasks. If there's a short gap before your next meeting and your main task won't fit in it, it offers something smaller that will. Otherwise it just shows your most important task.

Each card says why it's showing ("Up next", "Easy win", "Wind down") so the switching doesn't feel random. Whether the rules are actually right is exactly what I need to live with for a while to find out.

## A few smaller bits

The widgets now have proper preview images in the widget picker, which they didn't at first (it was a row of blank boxes, which isn't a great way to choose).

I've also marked them as allowed on Samsung's cover screen, because I've got a Flip and the little outside screen seems like the ideal place for "what's next". I haven't confirmed it works yet, so don't hold me to that one.

## When can you have them?

If you're on the Android testing track, they're in the test builds already, and I'd love to hear which ones you actually keep on your home screen and which you delete after a day. That's the most useful feedback for this.

For everyone else, there's no release date. Some of these will be cut, some will change, and iOS widgets are a separate job I haven't started. I'll write again when the list has been whittled down to the ones worth keeping.
