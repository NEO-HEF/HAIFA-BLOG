---
title: "Week Eight - RZP Becomes a Real Consumer of the Shared Layer"
date: 2026-05-03
week: "Week Eight"
period: "April 27, 2026 - May 3, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w18
permalink: /en/posts/neo-hef-2026-w18/
summary: "The project moved from a launchable RZP toward the first real consumer of shared layers: login, profiles, master-data forms, user settings, help, and integration boundaries are starting to fit together."
---
## Summary for Non-Technical Readers

Week eight moved the project from "the application can be launched" into a much more practical phase: `RZP` is beginning to use shared building blocks that are intended to serve other Fenix modules later as well.

The most visible area is login. When launched standalone, RZP now uses the shared login dialog and the related database connection profile flow. A user can choose a prepared connection, test it, and enter the application without manually assembling technical connection details at every startup.

In parallel, the first large part of RZP itself started taking shape: master-data forms, menus, codelists, settings, repositories, application use cases, and tests. Shared services around user settings, audit, licensing, help, documentation, launcher lifecycle, and the OOU boundary were also added or refined. In other words, RZP is no longer just an isolated window. It is starting to behave like a module connected to the shared architecture.

## What Happened

The week's history is concentrated mainly between `April 27, 2026` and `April 30, 2026`; there are no major new commits in the available history at the end of the week. Even so, it was a dense week because three important lines met: shared login, the first RZP business layer, and completion of shared SPOL/SPK boundaries.

In the login area, the shared interactive login for standalone module startup was completed. `RZP` is the first consumer of this path. The basic login quickly expanded with profiles: the dialog can work with prepared database configurations, load them into the login form, and verify that the selected connection can actually be established. This matters not only for RZP, but also for later new modules that will need the same startup comfort.

There was also a major move inside `RZP-S01`. The new implementation received the first master-data areas: owners, definitions, accounts, account details, year and company-number selection, search, codelists, settings, and shell/menu structure. This was not only about screens. The work also included domain entities, value objects, validation rules, Dapper repositories, application use cases, presenters, an INI adapter, codelist reload, and tests. The first verification reported a clean build and `59/59` passing tests.

At the same time, shared infrastructure kept growing. `SPK-S07` added persistence services for shared settings, audit writes, and licensing data, covering tables such as `sau_uziv_nast`, `sau_logfenix`, `sau_license_record`, and `sau_license`. `SPOL-S15` then clarified what should remain a shared responsibility for RZP: user settings, help and documentation, help topics, the About dialog, lifecycle when running under the launcher, window titles, and the OOU/module launch boundary.

The week was also about stabilizing details. The team fixed behavior of the RZP menu embedded in the launcher, made login react to Enter after the password is filled in, adjusted the owner-maintenance layout, handled SQL parameter differences for Dapper/OleDb, and enabled items such as release notes and help. These changes may look small, but together they decide whether the new module behaves like a usable application.

The coordination layer is important as well. Documentation and sign-off artifacts continued to clarify what belongs to `RZP`, what belongs to `SPOL`, and what belongs to `SPK`. Week eight shows why the earlier work on boundaries and implementation plans mattered: once RZP starts using shared services, ownership of each part must be clear, otherwise duplicate or conflicting implementations would appear.

Week eight is therefore not just another batch of commits. It is the week when RZP becomes the first clearly visible consumer of the new shared architecture. The project is moving from technical foundations toward the practical question of whether new modules can be used in workflows familiar from the original Fenix.

[Home]({{ '/en/' | url }})
