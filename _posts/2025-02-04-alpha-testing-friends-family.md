---
layout: post
title: "Alpha Testing with Friends and Family"
date: 2025-02-04
crosspost: true
categories: [development, rightnow, startup-life]
tags: [alpha-testing, web-app, flutter-web, user-feedback, indie-dev]
featured: false
---

Last week, I did something terrifying. I sent a link to my half-baked, barely-functional app to my friends and family. "Hey, want to try RightNow?" I typed, my finger hovering over the send button for a solid minute.

The app wasn't ready. Hell, it's still not ready. But my Android-only beta was excluding half the people I wanted feedback from—the iPhone users. So I deployed a web version, held my breath, and hit send.

## The Web App Compromise

Flutter's promise of "write once, run anywhere" made deploying to web seem easy. And technically, it was:

```bash
flutter build web
firebase deploy
```

Done. RightNow was live on the web. But here's what they don't tell you about Flutter web apps:

- Touch interactions feel... off. Swipe gestures that feel natural on mobile translate poorly to mouse clicks
- Performance isn't quite there, especially on mobile browsers
- iOS Safari has its own special quirks that'll make you question your life choices

But you know what? It worked. iPhone users could finally try the app.

## The Feedback Flood

Within hours, the messages started rolling in:

"The login screen is confusing"  
"I can't figure out how to add a task"  
"Why does swiping not work?"  
"The font is too small on my phone"  
"Love the concept but..."

That "but" hits different when it's from your sister.

## Learning Not to Take It Personally (Spoiler: I Failed)

Here's the thing about feedback from friends and family—it's unfiltered. They're not worried about hurting your feelings because they assume you want honesty. And you do. In theory.

In practice, every piece of criticism felt like a personal attack. This wasn't just an app; it was my baby. I'd spent months crafting every interaction, and here was my best friend telling me the onboarding "made no sense."

My first instinct was to defend every decision:
- "The swipe gesture is intuitive once you learn it!"
- "The capacity bar is the whole point!"
- "You're just not the target user!"

But here's what I learned: **If you have to explain it, you've already failed.**

## The Gold in the Rough

Once I got over my bruised ego (okay, I'm still working on it), I realized something: this brutal, unfiltered feedback was gold. My friends and family were doing me a massive favor. They were telling me what paying customers would think but would never say.

Some gems that emerged:
- Three people independently mentioned the same confusing button
- Everyone on iPhone tried to swipe back and got frustrated when it didn't work
- The "innovative" capacity visualization I was so proud of? Nobody understood it without explanation

## What I Changed

Based on the feedback, I made some immediate improvements:

```dart
// Before: Clever but confusing
IconButton(
  icon: Icon(Icons.schedule),
  onPressed: () => setCapacity(),
)

// After: Obvious
ElevatedButton.icon(
  icon: Icon(Icons.access_time),
  label: Text('Set Today\'s Hours'),
  onPressed: () => setCapacity(),
)
```

Small changes, huge impact.

## The Unexpected Benefits

Shipping early to friends and family did more than improve the app:

1. **It made it real**: Suddenly, this wasn't just my side project. Real people were using it.
2. **It forced prioritization**: With limited time, I had to fix the most critical issues first.
3. **It built accountability**: Now people ask me, "How's the app going?" I better have an answer.

## Tips for Your Own Alpha Test

If you're thinking about sharing your work-in-progress:

### Do:
- Set expectations: "This is very early alpha, things will break"
- Ask specific questions: "Can you successfully create and complete a task?"
- Thank people profusely: They're giving you their time
- Fix the critical bugs before sharing (learned this the hard way)

### Don't:
- Defend your decisions in the moment
- Take feedback as personal criticism (easier said than done)
- Wait for perfection—you'll never ship
- Forget to follow up with updates

## The Reality Check

Here's the truth: Your friends and family are not your target market. They're using your app as a favor to you, not because they need it. But that's exactly why their feedback is valuable. If they can't figure it out, neither will strangers who have no reason to persist.

RightNow Tasks is inherently niche. It's for a specific type of person—someone who:
- Gets genuinely excited about productivity systems
- Has tried multiple task apps and found them lacking
- Actually enjoys the process of planning their day
- Feels physical discomfort from over-committed todo lists

Let's be honest: that's not most people. My brother uses sticky notes and he's doing just fine. My best friend doesn't even make lists. And that's okay.

When my cousin said "I don't really do the whole productivity thing," it was a good reminder that not every app needs to be for everyone. In fact, trying to please everyone is a great way to build something nobody loves.

## The Hidden Cost of "Free"

Here's something they don't tell you about building an app on a shoestring budget: even "free" isn't really free.

This month, I hit a wall. GitHub Actions minutes? Gone. Exceeded the free tier limit from all those automated builds and deployments. Firebase informed me that I can't upload executables on the Spark (free) plan. Suddenly, my "free" side project needs a credit card.

The irony isn't lost on me—I'm building a productivity app to help people work within their capacity, while I'm struggling to work within the capacity of free tiers:

- **GitHub Actions**: 2,000 minutes/month sounds like a lot until you realize each build takes 10-15 minutes
- **Firebase Hosting**: Great for web, but want to distribute APKs? That'll require an upgrade
- **Vercel/Netlify**: Generous, until you need those advanced features

So now I'm doing builds locally, manually uploading to Firebase, and wondering if this is sustainable. It's like being a chef who can't afford ingredients—technically possible, but exhausting.

## Moving Forward

The web app is still up, still janky, still very much alpha. But it's getting better every day. Each piece of feedback, no matter how much it stings initially, makes RightNow more intuitive, more useful, more real.

And yes, I still get defensive sometimes. When my mom said "I don't get the point of limiting my tasks," I had to physically restrain myself from launching into a 20-minute explanation of capacity-first planning.

Instead, I said, "Thanks Mom, that's really helpful feedback."

And you know what? It was.

---

*RightNow is still in alpha, still broken in places, and still improving daily. If you want to try it (and you're okay with rough edges), check out the [web version](/rightnow/). Just... be gentle.*