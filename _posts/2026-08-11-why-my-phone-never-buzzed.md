---
layout: post
title: "Why My Phone Never Buzzed"
date: 2026-08-11 10:00:00 +0000
---

RightNow can remind you when a task is due. It puts a notification on your phone at the time you picked. On iPhone this has worked for a while. On my own Android phone, a Samsung, it had never worked once.

Today we solved it, with the phone plugged into my laptop and a debugger reading the phone's logs. It turned out to be five gotchas stacked on top of each other.

## Gotcha one: Battery management

If you own a Samsung phone and an app's notifications don't arrive, the usual culprit is battery management. Samsung, and a few other manufacturers, will "sleep" an app that you haven't opened in a while. A sleeping app can't do the thing RightNow does to remind you, which is ask the phone to wake it at a set time. The reminder is queued, the phone decides the app is dormant, and the reminder nixed.

You can see it happen in the logs. A few minutes after I closed the app, the phone froze it, and my test reminder was marked "deferred". No error. Every permission still showing as granted. The app looked perfectly healthy and was simply not allowed to speak.

The fix for this one is on the phone, not in the app: set RightNow to Unrestricted in battery settings, and add it to the never-sleeping list. RightNow has a help screen that explains exactly this, because it bites a lot of people. Worth knowing about whatever to-do or reminder app you use.

Other apps notify jsut fine on the same phone so why not my app? WhatsApp, email, all of them. That is because most notifications are pushed from a server through Google's system, which the phone never freezes. RightNow's reminders are set locally on the device, by the app itself, and that is the exact kind the freezer holds back.

## Gotcha two: nothing was listening

Fixing the freezer got me a reminder that fired but still no notification.

The reminder was being handed to a part of the app that was never switched on. To receive a scheduled alarm, an Android app has to register a specific component in its settings file. The notification library I use ships without registering it, on the assumption that each app will do so. I never had. So for the entire life of the Android app, every reminder that ever fired had nothing listening for it, and vanished. This was the real reason it had never worked, and it was one line of configuration.

## Gotchas three, four and five

The release build was compressing the app in a way that scrambled the notification library's internals, so even a reminder that made it through would have arrived garbled. The toggle for task reminders defaulted to off, so a brand new user got nothing until they went looking for a setting. And reminders on tasks created from my other tools, rather than in the app itself, were never being scheduled at all. That last one I have just not finished yet.

## Silver lining

If you are on the Android testing list, an update is on the way with four of the five fixed. Set a task with a due time, and your phone should finally buzz. If it doesn't, check the battery setting first, and then tell me, because apparently I am not done.
