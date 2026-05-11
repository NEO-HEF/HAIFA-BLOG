---
title: "RZP Has More Working Functionality"
date: 2026-05-11
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - migration
  - ui
layout: layouts/post.njk
lang: en
translationKey: rzp-dalsi-zprovoznene-funkcnosti
permalink: /en/posts/rzp-more-working-functionality/
summary: "RZP continues to move from converted screens toward working scenarios: owner-dependent codebooks, allocation sentence definition, and GDPR integration."
---
## Summary for Non-Technical Readers

RZP is no longer just a set of converted forms. The new version is gaining more concrete work scenarios in which the application reacts to data, opens related dialogs, and calls follow-up functionality.

This does not mean the work is finished. Some parts still need refinement in appearance, behavior, and control details. The important shift is that the team is no longer dealing only with what the screens look like, but also with whether real application logic is starting to work inside them.

The three new demos cover codebooks, allocation sentence definition, and integration with GDPR-related functions. Each of them represents a different kind of problem that has to be solved when converting an old ERP system.

## Codebooks by Selected Owner

The first demo shows work with codebooks in RZP. The important point is not only that the list of codebooks and their contents are displayed. What matters is that both the menu and the data change dynamically according to the currently selected owner.

This is a typical property of enterprise systems: the same screen often does not mean the same content in every situation. The application has to respect the context in which the user is working and offer the right set of items together with the corresponding data.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP_ciselniky.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>Codebooks in RZP: the list of available codebooks and their contents change according to the selected owner.</figcaption>
</figure>

## Allocation Sentence Definition

The second demo belongs among the more extensive functions in the first version. Allocation sentence definition is not just a simple form with a few fields. It also includes a search dialog and links between several parts of the user interface.

Scenarios like this show well where the migration is most demanding. It is not enough to mechanically redraw the original VB6 window in .NET WinForms. The new application has to behave similarly to the original, preserve the work process, and also carry over the logic hidden behind the screen.

The current result is not perfect yet, but it is much closer to the original application than the first attempts at converting the user interface. For the team, this is an important signal that the chosen approach is starting to improve even for more complex forms.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP_definice_vety.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>Allocation sentence definition in RZP, including the search dialog and follow-up work with the form.</figcaption>
</figure>

## GDPR Integration

The third demo shows integration with external GDPR-related functions. From the user's point of view, it may be a short scenario, but technically it is important that the new version of RZP is not starting to live in isolation from the surrounding system.

Migrating an ERP application is not only about converting screens and database queries. A module must also be able to use shared or external functions that belong to the wider environment. GDPR is a good example: it is an area where displaying a local form is not enough. The application must also connect correctly to additional system logic.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP_GDPR.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>RZP calls external GDPR-related functions and shows a working connection to the surrounding application environment.</figcaption>
</figure>

## Why It Matters

Together, these demos show that the project is moving into a phase where whole work situations need to be verified. Users do not judge only whether a similar form appears on the screen. They need the content to change correctly according to context, related data to be searchable and selectable, and the application to call functions outside the current form.

These details will decide whether the new version of RZP behaves like a real replacement for the original application. The newly working scenarios are not the final state yet, but they are concrete steps from static conversion toward a usable module.

[Home]({{ '/en/' | url }})
