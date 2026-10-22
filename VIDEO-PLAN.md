# YouTube Video Plan

Working list of videos to film for RightNow, long and short form. Not part of the site (excluded in `_config.yml`), but this repo is public, so anything written here is readable on GitHub.

## Ground rules

- **Same truth rules as the blog.** Every claim on camera has to match `FEATURES.md` and the shipped app. No user numbers, no "thousands of people", no ratings unless they're real and current.
- **Same voice.** I am Alex, solo dev, full-time job, British. "I", never "we". No "smash that like button" energy.
- **Demo data, not my real life.** Use a demo account with made-up tasks and a demo Google Calendar. My real calendar has my wife's events in it, and she hasn't signed up to be on YouTube.
- **Film once, cut many.** Every long-form video should give two to four shorts. Plan the short-sized moments while filming the long one so they work standalone (no "as I said earlier").
- **Check before filming.** Any feature shown should be tried on the current release build first. The calendar saga is proof that "it's in the code" doesn't mean it works.

## Formats

| Format | What it is | Effort | Good for |
|---|---|---|---|
| **Screen capture + talk** | Me using the app live, explaining as I go. Face cam optional. | Low: one take, light edit | How-tos, "how I use it" |
| **Devlog** | A story from development: a bug, a decision, a release. Screen + face or voice. | Medium: needs a rough script | Indie dev audience, honesty, personality |
| **Voiceover** | Scripted narration recorded separately over app footage, logs, screenshots. | Medium: script first, then capture to fit | Tighter explainers, shorts |

Kit, minimal version: OBS for the web app at rtnw.app; the built-in screen recorder on iPhone (Control Centre); `scrcpy` to mirror and record the Android phone on Windows. A decent USB mic matters more than the camera.

---

## Long form (8–15 minutes)

### 1. How I actually plan my day with RightNow
**Format:** screen capture + talk. **Film this first.**
The evergreen one. It's the video to link from the App Store listing, the blog and the Android tester page.

1. **Cold open (20s):** the capacity bar going orange as I add one task too many. "This is the bit where most to-do apps would just let me carry on."
2. **Who I am, in one breath:** I am Alex, I built this on my own alongside a full-time job, and this is how I use it.
3. **Morning:** open Today. Set capacity for the day (how much time I really have, not how many hours I'm at my desk).
4. **Calendar:** events showing alongside tasks. Tick the ones that genuinely cost me time; leave the rest as information.
5. **Adding tasks:** quick entry with a duration, priority and a tag typed in one line. Show the parsing happening as I type.
6. **Hitting the limit:** the over-capacity warning. Talk about choosing what doesn't happen today, and when I deliberately override.
7. **Doing the work:** Focus Mode on one task. Mention that actual time feeds back into estimates.
8. **End of day / next morning:** the "yesterday" check-in banner and what I do with leftovers.
9. **Close:** free on your own device, sync is the paid bit and why. Where to get it: web, iOS, Android testing. Ask for feedback, not subscribers.

**Shorts to cut from it:** cold open, capacity warning, Focus Mode, the morning check-in.

### 2. Why I built a to-do app that tells you no
**Format:** devlog, mostly talking with screen inserts. Source: `2025-01-14-capacity-first-productivity.md`, `2026-08-17-what-rightnow-is-and-isnt.md`, `2025-07-27-ideas-behind-rightnow.md`.

1. The problem: lists that only grow, and the guilt of a list you'll never finish.
2. GTD influence, and my years of mostly failing to practise it.
3. The idea: plan around hours you have, not tasks you want.
4. What RightNow deliberately doesn't do (from the "is and isn't" post).
5. Honest bit: who it's probably not for.
6. Close: try it free, tell me where the idea falls down.

### 3. Four bugs that looked like one (the calendar that never worked)
**Format:** devlog, voiceover suits it well. Source: `2026-08-03-the-week-a-bug-report-became-a-feature.md`.

1. Hook: "My first tester found a bug in a feature I didn't know I'd shipped."
2. Wife connects Google Calendar on TestFlight: "no calendars found".
3. Assumed iOS. Found the missing OAuth client ID. Then wondered how the other platforms worked. They didn't.
4. The four gaps, one per platform, with a simple on-screen list (iOS client ID, Android Play signing cert, Calendar API never enabled, web origin not authorised).
5. Why nobody noticed: errors swallowed into one bland message.
6. The week of feature work that followed: tap for details, swipe to complete, past events auto-done, per-event capacity.
7. Lessons: a feature you've never used end-to-end doesn't exist; 7,500+ green tests and still broken for everyone.

**Shorts:** "7,500 tests, all green, feature broken for everyone"; "the Calendar API was never even switched on".

### 4. One dinner, three events
**Format:** devlog + screen capture of the fix. Source: `2026-08-09-one-dinner-three-events.md`.

1. Hook: over capacity with 35 minutes of actual work planned.
2. The six-hour "day in town" and a dinner after work, both charged in full.
3. My wife's version: restaurant invite, duplicated to the shared calendar, same dinner three times.
4. The wrong assumption: a calendar event is not automatically a claim on your capacity.
5. Demo the changes: capacity checkbox per event (off by default), duplicates collapsed with the ×3 marker.
6. The other direction: pushing tasks to a "RightNow" calendar, and the fingerprint that stops them coming back round.
7. Close: the capacity bar is the one thing that has to be honest.

**Shorts:** "the same dinner, three times"; "not every hour-long meeting costs you an hour".

### 5. Why my phone never buzzed (Android notifications)
**Format:** devlog, screen capture of logs plus voiceover. Source: `2026-08-11-why-my-phone-never-buzzed.md`.

1. Hook: reminders worked on iPhone, never once on my Samsung.
2. Phone plugged into the laptop, reading logs.
3. Gotcha one: battery management freezing the app; the "deferred" reminder.
4. Why WhatsApp still works: server push vs reminders scheduled on the device.
5. Gotcha two: nothing registered to receive the alarm. One line of config.
6. Three, four, five quickly: release build compression, toggle defaulting to off, reminders from other tools (be honest about whether that one's fixed yet; check first).
7. Practical close: the Unrestricted battery setting, for any reminder app.

**Shorts:** "If your reminders never arrive on a Samsung, do this" (useful to people who'll never use RightNow, which is the point).

### 6. Approved doesn't mean available: shipping an iOS app from a Windows PC
**Format:** devlog, talking + screenshots. Source: `2026-10-14-rightnow-is-on-the-app-store.md`.

1. Hook: App Review passed, and nothing happened.
2. Building iOS on a Mac mini because my dev machine is Windows.
3. TestFlight since the summer; the calendar crash testers found.
4. The "removed from sale" state and switching every region back on in Pricing and Availability.
5. Why not China mainland (ICP licence, Google services blocked).
6. Close: it's live, rating helps a new app get found.

**Shorts:** the Pricing and Availability gotcha as a 40-second tip for other indie devs.

### 7. Where do unfinished tasks go?
**Format:** screen capture + talk. Source: `2026-08-07-where-do-unfinished-tasks-go.md`.

1. Hook: a tester asked for auto-rollover and I really didn't want to build it.
2. Monday-to-Friday leftovers piling up: what auto-rollover does to a list.
3. The real need underneath: visibility, not rollover.
4. Demo: "yesterday" chip, morning check-in banner, the three choices per task, capacity check on adding.
5. Repeat offenders: tasks that slipped three times get dealt first in Keep or Delete.
6. The test I use: does a feature make Today more honest, or less?

### 8. Cleaning up a messy backlog with the refinement games
**Format:** screen capture, played live on a deliberately messy demo backlog.

1. Hook: a backlog of 60 vague tasks (demo data) and ten minutes.
2. Play each game for a round: priorities, durations, clarify vague tasks, keep or delete, duplicates.
3. Show backlog health before and after.
4. Why the games exist: tasks need honest sizes or the day can't add up.

Say "refinement" or "cleanup", not "grooming".

### 9. Setting up RightNow from scratch
**Format:** voiceover, tight and practical. Short-ish (5–6 minutes).
No account, set capacity and work-day hours, first tasks, connect Google Calendar, notifications, and what Premium sync adds. The one to point new users at.

### Later, when it's true
- **Android launch** once the closed test has its twelve people and it's released properly.
- **Building a solo app with AI and a full-time job.** Source: `2025-07-27-on-using-ai.md`. Worth doing, but script it carefully: only describe what I actually do.

---

## Short form (under 60s, vertical)

Each needs a first line that works with the sound off (on-screen text) and ends without "link in bio" begging.

| # | Hook (first 2 seconds) | What's on screen | Payoff | From |
|---|---|---|---|---|
| S1 | "My to-do app told me no." | Adding one task too many; bar goes orange; warning | Today is a choice | Long 1 |
| S2 | "Most to-do lists only ever get longer." | Setting capacity, filling the bar green to orange | Plan the hours you have | Long 2 |
| S3 | Typing a task in one line | Quick entry parsing date, duration, priority, tag live | One line, done | Long 1 |
| S4 | "The same dinner. Three times." | Three identical events collapsing to one with ×3 | Calendars duplicate, the app shouldn't | Long 4 |
| S5 | "Not every hour-long meeting costs you an hour." | Ticking/unticking an event's capacity checkbox | You decide what costs you | Long 4 |
| S6 | "What happens to yesterday's unfinished tasks?" | Morning check-in banner, three choices | Nothing lands on today unless you say so | Long 7 |
| S7 | "This task has slipped three times." | Keep or Delete dealing it first, swipe | Let it go | Long 7/8 |
| S8 | "Samsung reminders not arriving?" | Battery settings, Unrestricted, never-sleeping list | Works for any reminder app | Long 5 |
| S9 | "7,500 tests. All green. Feature broken for everyone." | Test run, then "no calendars found" | Use the thing for real | Long 3 |
| S10 | "Apple approved my app and nothing happened." | App Store Connect, Pricing and Availability | Approved isn't available | Long 6 |
| S11 | Focus Mode timer running | Full-screen timer, then estimated vs actual | Get better at guessing | Long 1 |
| S12 | "Why I charge for sync and nothing else." | Free app working offline, then sync across devices | Sync costs money to run | Long 1 close |
| S13 | "I need twelve people to release my app on Android." | Play closed test page / tester signup | Join the test | Standalone |

S13 is the one with a real job to do right now. It's also the cheapest to film: phone, face, 40 seconds.

---

## Suggested first batch

One sitting, one evening:

1. Set up the demo account and demo calendar (do this once, reuse forever).
2. Film **Long 1** as a single screen-capture take. Don't aim for perfect.
3. Film **S13** (tester call) straight to camera.
4. Cut S1, S3, S6 and S11 out of Long 1.

That's one long and five shorts from one session. Then judge the cadence on how it felt, not on what the plan says.

## Open questions (mine to decide)

- Channel name and handle: RightNow, or me personally?
- Face on camera, or voice only?
- Cadence I'll actually keep: weekly, fortnightly?
- Do shorts also go to Instagram/TikTok, or YouTube only?
- Where these get linked: blog post per long-form video, App Store listing, Discord?
