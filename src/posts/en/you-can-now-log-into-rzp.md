---
title: "You Can Now Log Into RZP"
date: 2026-04-29
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - login
  - profiles
layout: layouts/post.njk
lang: en
translationKey: do-rzp-se-uz-da-prihlasit
permalink: /en/posts/you-can-now-log-into-rzp/
summary: "RZP now has another practical part of the shared infrastructure: when launched standalone, it shows a login dialog with database connection profiles."
---
## Summary for Non-Technical Readers

RZP can now not only be launched; users can also log into it. The team has completed another shared component that handles login and database connection selection when an application is started in standalone mode.

This matters because the same mechanism is not meant only for RZP. When any Fenix application, such as `RZP`, `MTZ`, or `UCO`, is launched in standalone mode, the user is greeted by a unified login dialog. The application therefore does not behave like an isolated experiment, but like another module being prepared for real operation.

The solution also includes connection profiles. A user can store multiple database configurations and choose which one to use when the application starts. This is useful, for example, when working with different environments or databases without having to re-enter technical connection details each time.

## What Is Done

When RZP is launched standalone, the login form appears first. It is pre-filled with the basic information needed to log into the application. If the user needs to check or change the details of the database connection, the `Advanced` button opens an additional panel with the technical connection fields.

The second part is profile management. The `Profiles...` button opens a dialog with a table of all defined login and connection details. The user can choose a concrete profile and first verify that the database connection really works. The `Test profile` action attempts to establish a connection using the selected configuration.

If the profile works, it can be applied with `Use profile`. After that, the user only needs to enter the password and click `Log in`. The application then continues into RZP itself.

## Demo

The video shows the whole standalone-mode flow: the user opens profiles, selects a prepared connection, tests that the database responds, applies the profile, and then logs into RZP.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/profiles.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>Logging into RZP in standalone mode: selecting a profile, testing the database connection, and entering the application.</figcaption>
</figure>

## Why It Matters

Login is one of those steps users treat as obvious, but in an ERP migration it is essential. The application must connect to the right database, work with user identity, and offer a clear flow without requiring people to manually rewrite configuration values.

The shared component also reduces the risk that each Fenix module solves startup and login slightly differently. `RZP`, `MTZ`, and `UCO` can use the same login base, the same profile handling, and the same database connection test. For users, that means consistent behavior. For the team, it means simpler maintenance. And for the project, it is another step from a technical prototype toward a usable application.

[Home]({{ '/en/' | url }})
