---
title: "Week Seventeen - RZP Has a Release Branch and Develop Moves Toward 10.11"
date: 2026-07-05
week: "Week Seventeen"
period: "June 29, 2026 - July 5, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w27
permalink: /en/posts/neo-hef-2026-w27/
summary: "Week seventeen separated the delivered RZP 10.1 line from the next wave of work: the release branch keeps the stabilized module, while develop moves toward 10.11, SPOL/SPK, UCV, and UPD."
---

## Summary for Non-Technical Readers

Week seventeen of the HAIFA project was the first week after the official RZP handoff. On June 30, 2026, the first completed module was delivered, migrated from legacy version 10.1. The repository structure now reflects that as well: RZP 10.1 has its own release branch, preserving the stabilized handoff state and serving as the line for possible hotfixes.

This matters because the work now runs in a different mode than the final RZP push. RZP is not being reopened as a regular development module. For version 10.11, it has no functional difference in module-owned source code, so this is not a second RZP migration. It is primarily a revalidation against the new shared infrastructure, the new database baseline, and the upgraded SPOL and SPK functions.

The main attention has therefore moved to shared libraries and the 10.11 security foundation. This is where login, password handling, vault integration, and startup rules change. These changes do not show up as a new RZP screen, but without them future modules could not keep pace with version 10.11 and with every later Fenix version that will continue to arrive regularly.

At the same time, the next modules are being prepared. Unlike RZP, UCV has a real 10.11 change in module-owned code, especially because of budget-reporting changes for accounting year 2026. UPD is also not just a hidden technical utility: it has its own screens, operating modes, and operator workflow for database upgrades.

In other words: after the RZP handoff, the project did not move into "more RZP development". It moved into a new phase. One line protects the delivered 10.1 module, while the other prepares the shared 10.11 foundation and the next modules that will build on it.

## What Happened

During the week from June 29 to July 5, 2026, the updated remote branches of the `NEO_HEF` repository show 21 merge commits on `develop`. The new `release/10.01` branch contains 10 merge commits from this period and ends at the same point from which `develop` then continued toward 10.11.

### RZP 10.1 Got Its Own Release Branch

At the beginning of the week, the last RZP fixes for the 10.1 handoff state were still landing. They focused mainly on visible parity details: report formatting, overly long percentages, definition search behavior, empty results, saving and loading report settings, Tab focus order, and several hotfixes around recipes and owner selection in a non-current year.

These changes form the end of the RZP 10.1 stabilization line. The resulting `release/10.01` branch is therefore not another development branch for new features. It is the maintenance line for the delivered module. Hotfixes and preservation of the handoff state belong there, not expansion of the RZP scope.

### Develop Switched Toward 10.11 After Handoff

After the RZP 10.1 line was cut, changes appeared on `develop` that already target the next baseline. The documentation gained a versioning methodology: `develop` follows the newest migrated baseline, while release branches hold delivered lines from which corrective releases are built.

At the same time, the repository is being moved to the 10.11 legacy baseline. The database overview was updated to 10.11, and delta packages started appearing for RZP, UCV, UPD, and the shared SPOL/SPK parts. This is the kind of work that separates a one-off success from a long-term migration process after the first delivered module.

### RZP 10.11 Means Revalidation, Not a New Migration

For RZP, the key result of the delta analysis is that no module-owned source-code change was found between legacy versions 10.1 and 10.11. From a functional point of view, the RZP module code remains the same. What changes are mainly references to shared libraries, the environment version, and the infrastructure the module runs against.

The RZP 10.11 work is therefore not another expansion of the module. It will be controlled revalidation: checking launch under the Launcher and standalone, login against the new database, behavior with available and unavailable vault, guards against the wrong database version, and smoke tests against upgraded SPOL/SPK libraries.

For readers, the practical conclusion is simple: RZP 10.1 is a delivered module. RZP 10.11 will be a smaller adaptation and verification step so the same functionality runs against the new shared foundation.

### SPOL and SPK Carry the Main 10.11 Change

The largest technical shift of the week is in the shared libraries. Version 10.11 changes the security and login foundation: passwords move from the original mechanism into the new `uziv_pwd` structure, vault handling is introduced, and modules must connect to the new way of passing the login session.

This week, the vault wire protocol specification for SPK was closed. It describes communication with the vault, operations for creating, reading, and destroying a session, error states, and the rules for how a client should behave when the vault is not available. This becomes the basis for the client implementation and for connecting modules to the new flow.

A spike around `uziv_param` was also completed. Its result matters precisely because it avoids unnecessary implementation: the analysis showed that the table has no real consumer in the current code, so its migration will not be opened until a concrete need appears.

### UCV Has Real 10.11 Delta Work

UCV is different from RZP. Its delta analysis shows real changes in module-owned code. They mainly relate to the budget-statement reform for accounting year 2026: new class variants, calculations, validations, and seed data.

That means UCV cannot simply be attached to the newer shared foundation. The already started scope must first be migrated, and the 10.11 differences must then be applied correctly. The UCV plan therefore combines the original migration steps with a 10.11 delta layer.

### UPD Entered as a Module With Screens

The documentation also gained a dissection and implementation plan for UPD, the database upgrade module. UPD is not only an invisible internal component. It has its own screens, operator modes, and several launch paths: empty database bootstrap, unattended automatic run, and interactive operator mode.

At its core, UPD deterministically executes database changes from a change file and must be able to continue or rerun an upgrade safely after interruption. For the HAIFA project, UPD is strategic because the 10.1 -> 10.11 move will not be the last one. The same problem will return with every later Fenix version arriving in half-year cycles.

### Why This Week Matters

Week seventeen showed the new organization of work. RZP now has a maintenance release line for 10.1, while `develop` has moved toward 10.11. One part of the project protects the delivered state, while the other prepares the next technology and database foundation.

This moves HAIFA from the first successfully delivered module toward a repeatable model. It is not enough to migrate one application. The factory must be able to maintain a released version, respond with hotfixes, upgrade shared libraries, connect modules to a new database baseline, and at the same time start UCV, UPD, and other parts of Fenix.

[Home]({{ '/en/' | url }})
