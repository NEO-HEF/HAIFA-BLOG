---
title: "RZP Can Now Be Launched!"
date: 2026-04-27
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - launcher
layout: layouts/post.njk
lang: en
translationKey: rzp-uz-se-da-spustit
permalink: /en/posts/rzp-can-now-be-launched/
summary: "The migrated RZP module can now be launched in two ways: as a standalone .NET application and from the shared launcher as an embedded window."
---
## Summary for Non-Technical Readers

RZP, the module for cost and revenue allocation, has reached an important practical milestone. This is no longer only about rewritten code or isolated technical validation. The module can actually be launched, and the team has verified two ways to put it in front of users.

The first option starts RZP as a standalone application. The second starts it from the shared launcher, where the new RZP window is embedded directly inside the Fenix environment. That second scenario matters for gradual migration: users can stay in the familiar launcher while individual modules are replaced by new .NET implementations.

## What Was Verified

The first path uses `scripts/modules-start/rzp.ps1`. The script performs a clean build of the module and starts `Fenix.RZP.WinForms.exe` as a standalone application. The result is straightforward: the main RZP window opens, the application runs on the new .NET stack, and it can be closed normally.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-standalone-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>Standalone RZP launch: the script builds and starts the module as a regular desktop application.</figcaption>
</figure>

The second path uses the shared launcher. Once the launcher is running, the left menu contains `NEO Rozpouštění nákladů a výnosů`. Opening that item does not start RZP as a completely separate window. Instead, RZP appears as a reparented window embedded inside the main launcher. From the user's point of view, the new module appears inside the same environment they already use for Fenix.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-launcher-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>Launch through the shared launcher: the NEO RZP menu item opens the module as an embedded window inside the launcher.</figcaption>
</figure>

## Why It Matters

Being able to launch the application may look like a simple step, but in a desktop ERP migration it is a critical integration point. Rewritten forms are not enough. The new module must build, receive the correct startup context, fit into the launcher, and behave in a way that keeps the user transition gradual.

RZP now has its first visible runtime shape. Standalone launch supports development and testing. Launch through the shared launcher demonstrates the target path for replacing legacy modules with new .NET applications without a big-bang cutover.

[Home]({{ '/' | homeUrl('en') | url }})
