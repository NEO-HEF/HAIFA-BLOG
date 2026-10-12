---
title: "Week Thirty-One - The Completed ROB Plan Shows Why Coordination Between Modules Matters"
date: 2026-10-11
week: "Week Thirty-One"
period: "October 5, 2026 - October 11, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w41
permalink: /en/posts/neo-hef-2026-w41/
summary: "Migration expanded to the Population Register and Civil Registry. Completing the ROB plan required coordination with SPOL, UIR, and MAT. The cross module ledger helps track work across module boundaries, while UIR continues to develop shared register services."
---

## Summary for Non-Technical Readers

Week thirty-one of the NEO_HEF project opened another stage in the migration of Helios Fenix. **Work began on October 5 on ROB, the Population Register, and MAT, the Civil Registry including certification of copies and signatures. The ROB implementation plan is complete.** Preparing it required coordination with the shared SPOL layer, UIR, the Territorial Identification Register, and MAT.

The individual areas of Fenix are interconnected. Migrating one may therefore require preparing part of another whose own migration has yet to begin. The **cross module ledger** helps keep track of these changes: a shared record of what one module is planning or has already built for another, and what subsequent work should build on.

UIR expanded its user-facing functionality and moved shared parts of its communication with the basic registers into the shared layer.

## What Happened

The week of October 5–11, 2026 combined the start of ROB and MAT migration with further UIR development. For the HAIFA team, this means preparing new functional areas while building the shared services that subsequent modules will rely on.

### ROB and MAT Enter Migration

The project records now list ROB and MAT as in progress, with an October 5 start date. ROB has a completed source code analysis and implementation plan, covering startup and the main menu, resident records, changes of residence and other life events, electoral rolls, printing, and data exchange.

Planning included coordination with SPOL, UIR, and MAT. The Population Register needs services such as communication with the basic registers, reporting, and safe writes to a database shared with the original application. The plan therefore has to establish which services to reuse, what needs to be added, and where shared functionality belongs. Some of these services are already being built as part of UIR migration.

### The Cross Module Ledger Tracks Work Across Functional Areas

The team encountered a similar situation during UCV migration. The reporting module needed coordination with accounting and budgeting, whose own migrations had not yet begun. Functionality needed by the module being migrated could therefore be built ahead of time in a part of the system scheduled for later work.

The cross module ledger serves exactly this purpose. It records which module performed the work, what capability it delivered, where the code lives, how it is used, and who should take it over or extend it during a later migration. It also includes planned changes to other modules. Entries are organized by the target part of the system, so a team starting its migration can find what already exists and which dependencies it must preserve.

This is an important coordination tool for development driven by AI agents. An agent preparing the next module can build on existing work and account for the modules already using it. This reduces the risk of implementing the same function twice or breaking an existing workflow when changing it. The completed ROB plan shows that this coordination belongs in migration planning from the outset.

### UIR Expands Its Controls and Shares Register Communication

UIR completed final verification of settings, help, and browsing of objects and their history. The review also found and fixed a specific error in apostrophe handling in historical searches. Verification covered both the forms themselves and their actual connection to menus and the saving of user preferences.

Another result was the move of forms for the basic registers and the core of the KZR connector into the shared SPOL layer. This prepares register communication for reuse by other modules. Live verification after the move covered login, RÚIAN queries, and writing nine matched addresses to a database copy. This demonstrates working integration along the verified UIR path.

At the end of the week, letter case conversion in code lists and the active desktop displaying municipality information and a chart also reached the main development branch. Their final assessment included explicitly accepted qualifications. The active desktop, for example, still has temporary visual differences in its chart labels and title. Progress in these areas therefore does not yet mean full parity between all of UIR and the original application.

### Why This Week Matters

HAIFA started migration of two more functional areas, completed the ROB plan, and advanced reusable services in UIR. Preparing the Population Register once again showed that progress in one module depends on work elsewhere in the system. The cross module ledger helps preserve these dependencies and communicate them across migration steps and between AI agents.

[Back to the homepage]({{ lang | homeUrl | url }})
