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

The first option starts RZP as a standalone .NET application. The second starts it under the shared launcher. The launcher is a shell that displays individual Fenix modules as tabs within a single window, so the system as a whole feels unified. That second scenario matters for gradual migration: users stay in the familiar environment while individual modules are replaced by new .NET implementations.

Dual launching is not exclusive to the new modules, either. The same choice — standalone or under the launcher — is available for the original legacy versions as well. Users can always decide which way to go.

## What Was Verified

The first path uses `scripts/modules-start/rzp.ps1`. The script performs a clean build of the module and starts `Fenix.RZP.WinForms.exe` as a standalone application. The result is straightforward: the main RZP window opens, the application runs on the new .NET stack, and it can be closed normally.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-standalone-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>Standalone RZP launch: the script builds and starts the module as a regular desktop application.</figcaption>
</figure>

The second path uses the shared launcher. The launcher is not Fenix itself — it is a shared shell that wraps individual system modules. Thanks to the launcher, modules appear as tabs in a single window, making Fenix look like one cohesive system rather than a set of separate applications. Once the launcher is running, the left menu contains `NEO Rozpouštění nákladů a výnosů`. Clicking that item starts RZP as a standalone process, but its window is immediately reparented into the launcher and displayed as a tab.

Behind the scenes, an important detail is handled: when a module starts under the launcher, a named-pipe communication channel is established. This allows the launcher to know whether the module is running and to shut it down in a controlled manner. Getting this integration right was one of the key technical challenges.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-launcher-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>Launch through the shared launcher: the NEO RZP menu item opens the module as a tab inside the launcher.</figcaption>
</figure>

## Why It Matters

Being able to launch the application may look like a simple step, but in a desktop ERP migration it is a critical integration point. Rewritten forms are not enough. The new module must build, receive the correct startup context, fit into the launcher, and behave in a way that keeps the user transition gradual.

Dual launching — standalone and through the launcher — is a property of all modules, including their original legacy versions. The team does not need to maintain two different deployment paths; it only has to ensure that the new module honours the same contract as the old one. RZP now has its first visible runtime shape and demonstrates the target path for replacing legacy modules with new .NET applications without a big-bang cutover.

[Home]({{ '/en/' | url }})
