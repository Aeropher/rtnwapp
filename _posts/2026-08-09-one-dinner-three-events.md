---
layout: post
title: "One Dinner, Three Events"
date: 2026-08-09 10:00:00 +0000
---

Two calendar bug reports arrived this week, and between them they changed my mind about how calendar events and capacity should work.

The first was mine. I opened the app with two tasks planned (35 minutes of actual work) and it told me I was over capacity for the day. The culprit was my calendar: a six-hour "day in town" event and a dinner reservation, counted in full against my day. Which sounds right until you think about it. The six hours were already half spent by the time I looked, and the dinner is after my work day ends. My wife had booked the restaurant, marked the event as free, and Google itself knew it shouldn't block my time. The app counted it anyway.

The second report was my wife's, and it's a better story. She booked that same restaurant. The restaurant sent her a calendar invite, which she can't edit. So she duplicated it into the calendar we share, because I'm going too. Result: the same dinner, at the same time, at the same place, three times in her Today view. And each copy charged its full hour against her capacity.

## What was wrong

Both reports come from the same wrong assumption, which I had built in without ever saying it out loud: that a calendar event is a claim on your capacity.

It isn't. A calendar is a record of when things happen. Some events cost you: a six-hour work session absolutely does. Some don't: a dinner after work, a reminder-shaped event, a birthday. And some are the same event duplicated across calendars, because that's how invites and shared calendars work. The app treated every event as a real, separate cost, and none of that holds up in ordinary use.

## What changes

Two things, in the next build.

**Calendar events no longer affect your capacity unless you say so.** Each event on the Today view now has a checkbox on its right-hand side. Tick it and the event's duration counts against your day; leave it and the event is just information. The same switch is in the event's detail screen. Before, events counted by default and you could opt individual ones out. That was backwards: your plan should come from you, not from your calendar.

**Identical events collapse into one.** If the same event (same title, same start, same end) appears in several calendars, the Today view now shows it once, with a small ×3 marker so you can tell it's been collapsed. Open it and you can see exactly which calendars hold a copy. Tick its capacity checkbox and the whole group counts once, whichever copy it came from. And to be clear, this changes nothing in Google: all the copies still exist in your actual calendars, untouched. RightNow just stops repeating itself when it shows them to you.

## The lesson

The capacity bar is the one thing in RightNow that has to be honest, because every decision the app nudges you toward flows from it. This week it was lying in both directions at once: charging me for hours that were already gone and charging my wife three times for one dinner.

Both testers who found this were using the app on a completely ordinary day. No edge cases, no unusual setup, just a booked restaurant and a shared calendar. That's the recurring lesson of this testing period: the bugs that matter turn up in ordinary use, not in edge cases.

## And in the other direction

While I'm on the subject of calendars: another tester asked for the opposite flow, and it's also in this build. Your tasks can now push *to* Google Calendar.

It's deliberately modest. It's off by default, with a toggle in settings. Only tasks with an actual due time go across, because an event needs a time, and it's one-way: the app writes events, it doesn't read them back. Pushed tasks land in a dedicated "RightNow" calendar that the app manages, so you can show or hide them in Google like any other calendar, and colour them however you like. Edits made to those events in Google get overwritten on the next sync; the task in the app is the source, the event just mirrors it.

Given everything above, you can probably guess what I was most careful about: the app's own events coming back around. A pushed task that re-imported as a calendar event would show up twice and could count against capacity twice, which is exactly the disease this post is about. So pushed events carry a fingerprint, and the app refuses to re-import them or count them, even if the other safeguards fail. The RightNow calendar can never inflate your day.

If you're on the testing list, all of this is in the next build. Tick the events that really cost you something, push your tasks the other way if that's useful, and tell me if the maths still looks wrong.
