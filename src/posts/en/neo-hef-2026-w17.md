---
title: "Week Seven - The First Implementation Wave Takes Shape"
date: 2026-04-26
week: "Week Seven"
period: "April 20, 2026 - April 26, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w17
permalink: /en/posts/neo-hef-2026-w17/
summary: "The project no longer looks like only analysis and plans: shared infrastructure, first SPOL/SPK parts, RZP integration, login, audit, and reporting layers are being added."
---
## Summary for Non-Technical Readers

Week seven is the first truly visible implementation wave. The project moves from plans and PoCs toward giving the new application shared building blocks: startup, login, database work, locking, audit, and the first outline of shared reporting.

For management, the important point is that these are not isolated experiments. Individual parts are starting to fit into a common skeleton that specific modules can build on.

## What Happened

The week's history mainly shows acceleration around the shared `SPOL` and `SPK` layers and their connection to `RZP`. Steps such as `SPOL/SPK step 00`, `step 01/08`, `SPK-S04`, `SPK-S05`, `SPK-S06`, and related parts of the implementation sequence are completed or reviewed. Formal sign-off of some steps, ongoing code review, and documentation refinement are added as well.

In parallel, the team works on practical runnability. The launcher moves into the source tree, scripts for launching the launcher and `RZP` are created, startup against `MDB` is fixed, `SPOL` tests are moved from `RZP` into the proper layer, and user-facing WinForms details such as titles, diacritics, status bar, and icon are tuned.

There is also a significant shift in shared infrastructure. The login panel and login-form responsibilities appear, the old Oracle provider is removed, and infrastructure emerges for DB authentication, transactional locking, registry-only configuration with lazy write-back, and the audit lifecycle service. At the same time, `fenCRep` compatibility work moves into `SPOL`, forming the future shared layer for Crystal Reports.

Week seven is therefore not just "we started writing code." It is the week when the common foundation of the new application starts to take shape: it can start, log in, work with the database, behave auditable, and gradually take over problematic areas such as print reports.

[Home]({{ '/en/' | url }}) · [Summary Article]({{ '/en/posts/neo-hef-history-recap/' | url }})
