---
layout: post
title: "What the testers asked for"
date: 2026-08-11 10:00:00 +0000
---

A handful of people have been using RightNow for real over the last couple of weeks, and they have started sending feedback. This is a running note of what they raised and what we decided to do about each thing. Some of it is already done, some is still being worked out, and at least one request we turned down on purpose.

## Show subtasks on the Today screen

Someone asked whether a task's subtasks could be visible on the Today screen, under the task itself, instead of hidden away.

**Decision: yes.** Tapping a task on Today will expand it to show its subtasks inline, and tap again to collapse. You get to see the smaller steps without leaving the screen. The expanded view also brings back a Focus button, so once you can see the steps you can drop into a focused view and work through them one at a time.

## The achievement we removed

One tester went looking at the achievements and found "Marathon Session", which asked you to track four hours on a single task. Fair question: how do you even do that?

**Decision: we removed it.** RightNow is built around the opposite idea. If a task is big enough to take four hours, the right move is to break it into smaller pieces, not to sit on it for half a day. An achievement that rewards a four-hour slog is rewarding the exact habit the app is trying to help you drop. It also turned out the achievement was left over from an older version and could not actually be earned any more. So it is gone.

## A quicker way to move a task from the inbox to today

Asked for a shortcut to move a task straight from the inbox into today, rather than opening it and picking a date.

This one is already covered, in two ways. The editor has one-tap "Today" and "Tomorrow" buttons, and in the inbox you can swipe a task sideways to reveal a "Today" action without opening it at all. So the shortcut exists. The catch is that swiping is not obvious, which brings us to the next point.

## Making the swipe and drag gestures easier to find

Two separate bits of feedback came back to the same thing. One person asked for a quick way to move a task to today (there is one, by swiping). Another asked whether you can drag tasks up and down to set your own order (you can, on Today). Both features already exist, and both went unnoticed, which is our problem, not theirs.

Decision: a one-time hint. The first time you land on your list, RightNow will point out that you can swipe a task for quick actions and drag to reorder, and then it stays out of your way for good. No new features, just a nudge towards the ones that are already there.

## Sorting by priority

One suggestion was to have tasks organise themselves by priority, and to go further by greying out the lower-priority ones until the "now" tasks are done.

The sorting part you can already do. There is a sort option that orders your list by priority, so that is covered. The greying-out and locking part we are going to leave. RightNow keeps you in control of your own order on purpose, and forcing an order or hiding tasks goes against how the app is meant to feel. We have noted the idea down in case enough people ask for it later.

## A pause when adding a task

One note said a new task took a couple of seconds to show up. It should feel instant, and in the current build it does. A new task appears the moment you add it, drawn from a local copy, while the save to the cloud happens quietly in the background. The pause was most likely a one-off on that device, or an older build before this was sorted.

---

More to come as people keep using it. Thank you to everyone testing.
