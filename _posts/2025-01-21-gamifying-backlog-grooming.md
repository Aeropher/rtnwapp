---
layout: post
title: "Turning Backlog Cleanup into a Game"
date: 2025-01-21
crosspost: true
categories: [productivity, rightnow, gamification]
tags: [gamification, ux-design, flutter, mobile-development]
featured: false
---

Tidying up your task backlog is about as exciting as cleaning the garage. It's necessary, but nobody actually wants to do it. That's why most backlogs become digital junkyards, full of outdated tasks, vague ideas, and that "learn Spanish" task from 2019.

So I asked myself: what if sorting out your backlog could actually be... fun?

## Three Little Games

Instead of a daunting list to manually sort through, RightNow has focused mini-games. Each takes a couple of minutes and targets one specific aspect of task quality.

### 1. The Priority Game: "What Matters More?"

The game presents two tasks at a time and asks a simple question: "Which would you rather complete?" Behind the scenes, we're running an ELO-style ranking algorithm:

```dart
void updatePriorities(Task winner, Task loser) {
  const K = 32; // ELO K-factor
  
  final expectedWin = 1 / (1 + pow(10, (loser.priority - winner.priority) / 400));
  final expectedLose = 1 - expectedWin;
  
  winner.priority += K * (1 - expectedWin);
  loser.priority += K * (0 - expectedLose);
}
```

After 20-30 comparisons, your entire backlog is sorted by what actually matters to you, not what you thought mattered when you created the task.

### 2. The Duration Game: "Beat the Clock"

A task appears with its estimated duration. You have 5 seconds to decide: is this estimate still accurate? Swipe right for yes, left for no. If no, quickly tap a new duration from our preset options (15m, 30m, 1h).

The time pressure is the point: it prevents overthinking. My gut-reaction estimates have turned out more honest than my carefully considered ones.

### 3. The Clarity Game: "Crystal Clear or Fuzzy?"

Tasks flash by one at a time. Is this task clear enough to start immediately? Swipe right for clear, left for fuzzy. Fuzzy tasks get flagged for quick editing later.

Playing this on my own backlog was humbling: a surprising share of my tasks were too vague to actually start. No wonder they'd been sitting there.

## The Psychology Behind the Design

### Immediate Feedback
Each swipe gives instant visual and haptic feedback. Small, satisfying, keeps you going.

### Bounded Time Investment
Each game has a clear end point: a couple of minutes. Easy to fit into a small break, and it never turns into a chore session.

### Progress Visualization
You can watch your backlog health improve as you play, which is more motivating than I expected.

## Implementation Challenges

Building smooth, responsive games in Flutter required careful attention to performance:

```dart
class SwipeableTaskCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Dismissible(
      key: ValueKey(task.id),
      onDismissed: (direction) {
        HapticFeedback.lightImpact();
        handleSwipe(direction);
      },
      background: Container(color: Colors.green),
      secondaryBackground: Container(color: Colors.red),
      child: TaskCard(task: task),
    );
  }
}
```

The key was pre-loading the next several tasks and keeping animations under 16ms for that crucial 60fps feel.

## An Unexpected Side Effect

Since I know I'll meet every task again in the games, I've started writing clearer, better-scoped tasks in the first place. I didn't plan for that, but I'll take it.

## Try It Yourself

The games are in the free tier, no subscription required. [Give RightNow a go](https://rtnw.app) and see what state your backlog is really in.