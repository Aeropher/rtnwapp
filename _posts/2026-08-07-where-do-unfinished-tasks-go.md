---
layout: post
title: "Where Do Unfinished Tasks Go?"
date: 2026-08-07 10:00:00 +0000
---

One of my testers asked for something this week that sounds completely reasonable: mark overdue tasks as overdue, and move anything unfinished onto tomorrow's Today view automatically.

Nearly every to-do app does exactly this. And I really didn't want to build it.

## The problem with auto-rollover

Here's what happens in practice with automatic rollover. Monday you plan eight tasks and do six. Tuesday starts with two leftovers plus whatever Tuesday brings. By Friday your "today" list is carrying the whole week's leftovers, and the app has quietly stopped telling you what you chose to do and started reminding you what you didn't.

The entire point of RightNow is that Today is a choice. You have a certain amount of capacity, you decide what deserves it, and the app pushes back when you overcommit. An auto-rolling backlog takes that choice away: it spends your capacity for you, on yesterday's decisions, before you've had any say in it.

But the request was pointing at a real problem, just not the one it asked me to solve. RightNow is heavily influenced by GTD (Getting Things Done), and by my own years of trying, and mostly failing, to practise it properly. The one job a GTD system absolutely has to do is keep your tasks out of your brain: hold them safely, and show them to you when they're relevant. That's the deal. You stop carrying the list in your head precisely because the system promises to remember it for you.

Which is exactly where the old behaviour fell short. A task you planned for yesterday was important enough to make yesterday's list, and it doesn't stop being important just because the day ended before you got to it. But by the next morning you won't reliably remember what it was. That's the whole reason you wrote it down. Unfinished tasks do go back into the inbox with a temporary priority bump, so they float near the top for a few hours, but nothing actually *said* "these are the ones that slipped". Yesterday's important things deserve to be highlighted at the moment they're relevant (the start of today) without using up today's capacity unless you agree to it.

So the need underneath the feature request was visibility, not rollover. Now that is a change I was happy to build.

## What I built instead

Three things, none of which touch your capacity without asking.

**A "yesterday" marker.** Tasks that rolled over now carry a small chip in the inbox saying exactly that. It fades as the day goes on, the same way the priority bump does, and both are gone by early evening.

**A morning check-in.** When you open the app after a day with leftovers, Today shows a small banner: "3 tasks from yesterday didn't get done". Tap it and you get the list, and each task offers three choices: add it to today, push it to tomorrow, or leave it in the inbox. Adding it to today goes through the normal capacity check, so if it doesn't fit, the app tells you. You can still overrule it, but it's your call, made with your eyes open. Nothing gets added anywhere unless you choose it. The banner also waits for you all day: even if you don't open the app until the evening, the check-in is still there. And if you'd rather ignore the whole thing, dismiss it and it stays gone until tomorrow.

**Tracking repeat offenders.** The app now counts how many times a task has rolled over. Once something has slipped three times, it stops being "overdue" and starts being a task you're probably not going to do. Rather than letting it keep climbing in priority forever, the Keep or Delete refinement game now deals those chronic tasks first, so the next time you play a round the app nudges you to make a decision: keep it or let it go.

## The principle

I keep coming back to the same test: does a feature make Today more honest, or less? Automatic rollover makes it less honest. The list stops reflecting what you chose and starts reflecting what you failed to do. A morning triage makes it more honest: same information, but you stay the one deciding.

There is a version of this app that rolls everything forward and marks it all red. It would demo well. I think it would also make people feel worse every single morning, and there are plenty of apps already doing that.

This lot will reach testers in the next build. If you're on the testing list and the banner annoys you, or the chip isn't obvious enough, tell me. This whole feature exists because of feedback from someone like you!
