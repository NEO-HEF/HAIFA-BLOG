---
title: "Week Nineteen - UCV Entered Develop and Distribution Is Preparing for 10.11"
date: 2026-07-19
week: "Week Nineteen"
period: "July 13, 2026 - July 19, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w29
permalink: /en/posts/neo-hef-2026-w29/
summary: "Week nineteen brought a major UCV merge into develop, a confirmed 10.11 auth/vault delta in SPK/SPOL, the first shared installer, and a quiet RZP 10.1 maintenance line."
---

## Summary for Non-Technical Readers

Week nineteen of the NEO_HEF project was much more active after the calmer early-July rhythm. The biggest change is straightforward: work on UCV, the accounting statements module, is no longer only in a separate working branch. A large part of it was merged into the main `develop` branch, where the project is preparing for Fenix 10.11.

That matters because HAIFA is moving beyond the first delivered module, RZP. RZP proved that a migrated module can be brought to a handoff-ready state. UCV is a different test: it is larger, has more complex statement families, more links to live data, and real 10.11 changes in module-owned code. Its entry into `develop` is therefore a strong signal that the project is starting to test repeatability on the next large module.

Alongside UCV, the team was finishing work that ordinary users do not usually see, but without which the new modules could not run safely: login, password handling, and session handoff through the vault. This week's documentation already summarizes the 10.11 change in SPK and SPOL as implemented, used, and verified live. Some parts remain intentionally frozen, such as full screens for special password-change scenarios, but this is not a forgotten unfinished part of the main RZP and UCV path.

The third important line this week is distribution. In addition to the modules themselves, the team added a shared bulk installer, and the `fenix-releases` repository now confirms the split between the active 10.11 line and the maintenance 10.1 line. This is a practical step from a one-time handoff toward a model with multiple Fenix versions, multiple installation channels, and clear rules for what is active development and what is maintenance.

The `release/10.01` branch in the NEO_HEF repository remained quiet this week. That is fine: its job is not to carry new development, but to preserve the stabilized RZP 10.1 state. The main energy moved to `develop`, where the next version and the next module are taking shape.

## What Happened

During the week from July 13 to July 19, 2026, after updating the remote branches, the `NEO_HEF` repository shows 134 commits on `origin/develop`, including 38 merge commits. The `origin/release/10.01` branch did not receive any commits during this period.

The `fenix-releases` repository had 7 commits on `origin/main` in the same period. These were not module source-code changes, but distribution-layer updates: the release manifest, the installation page, documentation of the 10.11 and 10.1 states, and support for the shared installer.

### UCV Reached the Main Development Line

The largest news of the week is that substantial UCV work was merged into `develop`. In the previous week, UCV still had to be described carefully as a major but separate working branch. This week it became part of the main development line.

This was not a cosmetic merge. UCV received runtime fixes, owner and period selection at startup, real-rights loading, help wiring, the GDPR/OOU menu, and several changes that make the module behave more usefully during normal startup. Small technical fixes also mattered, such as converting `smallint` to `int` in Dapper readers: users do not see that directly, but without it a live database behaves differently from the test model.

Another important area was the addition of family Dapper readers for statement families F40, F60, F61, F62, F67, F69, F70, and F97. That brings UCV closer to verification against a real database, not only isolated tests. Live-DB smoke scenarios and additional parity checks were added to the tests as well.

### UCV Started Getting Concrete User Paths

In addition to backend work, forms and overviews also moved forward. Work landed in `develop` around overview grids, sorting, row colors, indicators, loading the statement 10 overview, and dispatch paths for actions such as Create, SUZ, and check.

The series of changes around the statement 10 indicator editor was especially visible. Step by step, the team added the render model, row projection, live form, delete, save, cancel, value editing, new row, subtotal recomputation, text attachments, admissibility rules, and other validation parts. This is exactly the type of work that turns "the logic has been ported" into a module that can actually be used.

UCV still should not be described as a finished delivered module after this week. Its status is better phrased this way: a significant part has been integrated into `develop`, the module still has specific finishing and parity steps ahead, but it is now running as a main project stream, not as an isolated experiment.

### SPK and SPOL Closed the 10.11 Auth/Vault Foundation

The second technically important line of the week concerned the shared SPK and SPOL parts. Documentation as of July 17 summarizes the 10.01 -> 10.11 change around passwords, authentication, and vault transport as implemented in NEO, used, and verified live against `fenix_1011`.

This week added and refined items such as explicit login-key linking, authorization policy, password expiration evaluation, message parity for reset or expired passwords, and CP1250 encoding of the session payload. These sound like small details, but together they determine whether new modules behave like legacy Fenix in sensitive login situations.

The team also clearly separated what is complete from what is intentionally deferred. The main auth/vault mechanism is ready for ordinary scenarios. Some screens and edge password-change scenarios remain frozen until a specific release actually needs them. That is healthier than building everything at once without a real consumer.

### Launcher 10.11 Matters, but It Is Not Fenix

The week's history also includes work around `SpolecnySpoustec` for 10.11. It is worth repeating the precise terminology: the Launcher is not Fenix as a whole. The Launcher is the shared shell into which modules are embedded, allowing users to work with them in one window on tabs.

For NEO_HEF, the Launcher matters mainly because modules support dual startup. RZP and UCV should both be able to run standalone and under the Launcher. When started under the Launcher, session handoff and named-pipe communication come into play so the Launcher knows that the module is running and can shut it down correctly.

This week was therefore not only about the modules themselves, but also about the environment in which they will run in practice. From a public perspective, the important point is that the project keeps the boundary between migrated modules and the shared Launcher clear instead of mixing their roles.

### Distribution Moved from Package to Installation Model

NEO_HEF gained the shared bulk installer `Asseco.Fenix.Installer`. Its job is not to replace the Launcher. The installer is a distribution tool: it helps users choose and install migrated modules by Fenix version and channel.

This fits the changes in `fenix-releases`. The manifest now describes the installer and also keeps two Fenix lines: 10.1 in `maintenance` status and 10.11 as `active`. For RZP, 10.1 is available in the alpha and beta channels, while 10.11 has its own separate identity and alpha channel. The installation page was adjusted so the bulk installer becomes the recommended path and users can see the guide more clearly.

For the project, this is important from a process point of view. Migration will not be one large installation of everything. It will need parallel versions, clear channels, maintenance of an older line, and gradual addition of further modules.

### Release 10.01 Remains a Maintenance Line

The `release/10.01` branch in NEO_HEF did not receive new commits this week. In an article about a previous period that might sound like an empty space, but here it mostly confirms the right division of work.

`release/10.01` preserves the delivered RZP for the 10.1 line. New UCV development, the 10.11 delta, and shared installation mechanisms belong in `develop` and in the distribution repository. If new work started mixing into the release branch, the project would lose the clear boundary between maintenance of a delivered module and further development.

### Why This Week Matters

Week nineteen shows that NEO_HEF is moving from "we completed the first module" to "we are building a repeatable factory." RZP 10.1 has a quiet release line. `develop` carries the 10.11 foundation and now also a large part of UCV. The distribution layer is starting to account for multiple Fenix versions and a shared installer.

That is important for HAIFA. The success of the project will not rest only on having delivered RZP once. It will rest on the ability to maintain a released line, develop the next version, connect the next module, and get it to users through a controlled distribution process.

[Home]({{ '/en/' | url }})
