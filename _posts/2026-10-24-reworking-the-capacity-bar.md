---
layout: post
title: "Reworking the Capacity Bar"
date: 2026-10-24 11:00:00 +0000
description: "The capacity bar is the heart of RightNow, and I'm changing how it looks: a block for every task, and the overflow in red."
---

The capacity bar is the most important thing in RightNow. It's the bar at the top of Today that fills up as you add tasks, and when it's full, the day is full. Pretty much everything else in the app exists to make that bar honest.

And I'm changing it. Not what it measures, just how it shows it.

## What's wrong with the current one

Right now the bar is a smooth fill that goes from green to orange as your day fills up, and turns red when you go over. It does the job. It tells you how full the day is.

What it doesn't tell you is *what* is filling it. Six hours planned looks the same whether that's one huge task or twelve little ones. And when you're over, a full red bar says "too much" but not how much too much, or which bit doesn't fit.

## Where the idea came from

I was mocking up an Instagram post, "my capacity bar, looking at my plans for today", and in it I drew the bar as a row of blocks, one per task, with the ones that didn't fit spilling past a dashed line in red. Looking at it, I think that's what the capacity bar should actually look like. So it's becoming the real one.

## How the new bar works

- **A block for every task.** Each task on Today is its own block, sized by how long it takes, in alternating shades of green so you can tell where one ends and the next begins. Calendar time that counts against your day goes in as one block at the start.
- **While everything fits**, the bar is your capacity and the blocks fill part of it, same as now. The empty bit is what's left.
- **When you go over**, the whole lot gets squeezed in to fit, a dashed line marks where your capacity runs out, and everything past that line is red. A task that straddles the line is split in two, the part that fits in green and the part that doesn't in red.

So "10h planned, 6h of capacity" stops being a red bar and becomes four hours of red blocks you can actually point at. Usually there's one obvious big one, and that's the one to move to tomorrow.

The bar is also a bit taller than before, because blocks need a bit of height to read.

The same bar will be on the home-screen widgets I've been experimenting with on Android, so the widget and the app match.

## When

It's built, and it's in the Android test builds now, so if you're testing on Android you'll see it on your next update. For everyone else there's no release date. I want to live with it for a while first, because this is the one bit of the app where getting the feel wrong would matter most.

If you've got opinions on it, I'd honestly like to hear them.
