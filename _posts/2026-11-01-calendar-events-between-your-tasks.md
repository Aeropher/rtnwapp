---
layout: post
title: "Putting Your Calendar Between Your Tasks"
date: 2026-11-01 12:00:00 +0000
description: "Calendar events on Today now sit among your tasks, where the day actually reaches them, and every task gets a rough start and end time."
---

If you've connected Google Calendar to RightNow, today's events show up on the Today screen. Until now they've lived in their own little box at the top, above your tasks, a bit like a sticky note on the front of the list.

So a 3pm meeting sat above the task you'd be doing at 9am, which is the wrong way round.

## Where the idea came from

Same place as the [new capacity bar](/blog/reworking-the-capacity-bar/), funnily enough. I was making an Instagram post about meetings eating your day, and I drew it as a timeline: times down the left, meetings in blue, tasks in green, all in one list in the order they'd happen. I wanted Today to look like that. So now it does.

## How it works

RightNow doesn't ask you what time you'll do a task. You put tasks in the order you want and give them a rough duration, and that's it. So the times are worked out, not scheduled.

- **It starts from now.** The first task starts at the current time, and each one after it starts when the one before it would finish.
- **Meetings slot in where the day reaches them.** When the next task would start after a meeting has begun, the meeting goes in first, and the task after it starts when the meeting ends.
- **Every task gets a start and end time** down the left, the same as events, so you can see roughly when you'll get to something. Roughly being the important word. They move when you reorder, finish things early, or run over.
- **Your order never changes.**

## Only the meetings you're actually in

This one took me two goes to get right. Calendar events in RightNow don't count against your day unless you switch them on, because plenty of what's in a calendar isn't you being busy (birthdays, a market you might wander past, a colleague's leave).

So only the events you've switched on take time out of the day. The rest still show up at their time, so you know they're there, but they don't push your tasks back. My first go at this let a four-hour market in my calendar, switched off, push my whole afternoon back to 3pm.

## A capacity bar fix

While I was in there I fixed a bug in the capacity bar. All your calendar time was lumped into one block at the start of the bar, however many events you had and whenever they were. Now each event that counts gets its own block, in the same order as the list.

## If you don't want the times

Some days you just want the list. There's a **Hide times** option in the ⋮ menu on Today. Pick it and the list goes back to full width and events show their time inside the card instead.

## When

It's live on the web at [rtnw.app](https://rtnw.app) now, and in the [Android test]({{ '/test.html' | relative_url }}) (which still needs a few more people before it can go on the Play Store properly). The iPhone app is a version behind, and gets it in the next App Store update.

If you've got opinions on it, I'd like to hear them.
