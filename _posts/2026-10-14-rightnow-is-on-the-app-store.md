---
layout: post
title: "RightNow Is on the App Store"
date: 2026-10-14 10:00:00 +0000
description: "RightNow 1.1.1 passed App Review and is now on the App Store for iPhone and iPad, in every region except China mainland."
---

RightNow is on the App Store. Version 1.1.1 passed App Review, and as of yesterday you can download it on iPhone and iPad.

**[Get RightNow on the App Store](https://apps.apple.com/gb/app/id6747011987)**

Or point your phone's camera at this:

<img src="{{ '/images/app-store-qr.svg' | relative_url }}" alt="QR code linking to RightNow on the App Store" width="200" height="200">

## How it got here

The iOS version has been in TestFlight since the summer, built on a Mac mini because my dev machine runs Windows. A handful of people tested it through TestFlight from August, and their feedback fixed a crash when connecting a calendar, among other things.

Approval wasn't quite the end. The app had been sitting as "removed from sale" in App Store Connect, so once it was approved nothing happened until I went into Pricing and Availability and switched every region back on. If you ever ship an iOS app, approved doesn't mean available. You have to check that as well.

It's available everywhere except China mainland. Selling there needs a government licence (an ICP filing) that I don't have, and the Google services RightNow uses for sign-in and sync are blocked there anyway.

## What you get

The same app as on the web and Android. It's free and works without an account. Premium adds cloud sync across your devices, so your iPhone and the web app stay in step. It's £2.99 a month, £14.99 for six months or £27.99 a year, and the App Store shows you the price in your own currency.

Apple also lists it for Apple silicon Macs and Vision Pro. That's the iPad version running as it is; I haven't built anything specific for either.

## Where to find RightNow

- **iPhone and iPad:** [App Store](https://apps.apple.com/gb/app/id6747011987)
- **Web:** [rtnw.app](https://rtnw.app), nothing to install
- **Android:** in a closed test on Google Play, which needs twelve people in it before I can release it properly. [Join the test]({{ '/test.html' | relative_url }}).

If you try it on iPhone, I'd like to hear what breaks. You can send feedback from inside the app, or use [GitHub Issues](https://github.com/aeropher/rtnwapp/issues). And a rating on the App Store helps a new app get found, if you're feeling kind :-)
222