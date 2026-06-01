---
title: "Week Twelve - UCV Starts Moving and RZP Gets Tuned Against Reality"
date: 2026-05-31
week: "Week Twelve"
period: "May 25, 2026 - May 31, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w22
permalink: /en/posts/neo-hef-2026-w22/
summary: "Week twelve brought the first larger implementation wave for UCV, practical stabilization in RZP, new SPOL startup guards for database compatibility and error messages, robotic UI testing, and the first release-management foundation for MSIX distribution."
---
## Summary for Non-Technical Readers

Week twelve of the HAIFA project showed that the Fenix migration is starting to move from one pilot module toward a wider ecosystem. Alongside RZP, the cost and revenue allocation module, work also moved forward on UCV, the reporting module.

UCV is not yet a finished application that can be delivered to users. It now has an important first skeleton: its own startup, login, main MDI window, base menu structure, and connections to part of the shared services. This matters because the team is testing on another large module whether the migration practices built around RZP can be reused.

RZP was tuned in practical details. The team fixed filtering in the cost and revenue accounts codebook according to the selected owner, improved grid appearance, adjusted import screens, connected printer setup, and corrected behavior when RZP runs under the shared launcher.

Important work also happened in the shared SPOL layer. Applications can now check database-version compatibility before startup, show clearer errors when a database connection fails, and use a shared message catalog taken from the original Fenix. These are things users usually do not notice until they break. That is exactly why it is useful to solve them early.

The team also strengthened automated verification. A new robotic tester can start both legacy and NEO versions of modules, click through their user interface, collect proof, and compare behavior. Next to that, the first foundation for distributing new modules through MSIX packages and GitHub Releases was created.

## What Happened

During the week from May 25 to May 31, 2026, `29` changes were merged into `develop`. At first glance, the history looks like a mix of implementation, fixes, documentation, and infrastructure. In practice, it reads as one connected move: the project is no longer dealing only with converting screens and logic, but also with startup, testing, distribution, reference legacy sources, and long-term migration maintainability.

### UCV Has Its First Larger Implementation Base

The largest new item of the week is the first bigger implementation wave for UCV, the reporting module. The project now contains an application skeleton with standalone startup, login, an MDI window titled Výkaznictví, a status bar, and a base menu structure taken from the legacy forms.

The work covered three areas. The first one focused on the application shell, login, and main window. The second added foundations for codebooks, settings, owner and year handling, and connections to shared services. The third checked risk points between UCV, SPOL, RUV, and UCA, which are the boundaries where UCV has to rely on shared components and data from surrounding parts of Fenix.

It is important that UCV now has concrete interface contracts for providing owner and year context, reading settings, and working with a codebook cache. The documentation also lists dozens of codebooks and the first wired menu items. Some of the menu is intentionally disabled with information that it is waiting for later implementation steps. That is the right state: users and testers are not led into dead ends, while the future structure of the module is already visible.

This work follows the experimental start of UCV migration using the babysitter orchestrator for longer-running processes involving multiple AI agents. Week twelve showed the first tangible outputs, but it also confirmed that UCV is still at the beginning. The foundation exists; full functionality will be built gradually.

### RZP Is Being Tuned Against Real Behavior

In RZP, work continued on details that have a large impact on everyday usability. The most visible fix was filtering the cost and revenue accounts codebook according to the regulation type of the currently selected owner. This was not a one-off change: after the initial fix, the runtime path was completed, and then a regression caused by printer-setup changes was corrected. The result is more stable behavior in an area that is central to RZP work.

Other changes focused on appearance and layout. Grids in forms moved closer to the legacy MSFlexGrid, allocation recipe screens were aligned, and the layout of import functions was improved. These changes may not look dramatic on their own, but they matter in a migrated application. The goal is not to design a new product, but to convert an existing work tool in a way that does not confuse its users.

Printer setup was also wired into multiple RZP forms. In addition, the team fixed status-bar behavior when RZP runs under the shared launcher. The status bar no longer disappears when the launcher window is resized, and the size grip is hidden in launcher mode where it does not belong.

### SPOL Strengthened Application Startup and Messages

The shared SPOL layer gained a database-version compatibility check. During startup, the application verifies whether the database is within the range the module can work with. If it is not, the application does not fail with an unreadable error, but stops in a controlled way and shows a comprehensible message to the user. The same mechanism started to be used in RZP as well.

Another step improved behavior when the database connection fails. The application should show one clear error and avoid continuing into session startup. As part of this work, the login screen was cleaned up so that wrong credentials do not expose internal database details to the user, such as technical messages around `sp_getapplock`.

The third important point is the shared message catalog. The message table from the original `fenixmsg.mdb` database was converted into an embedded JSON catalog. The new application can therefore use the same texts as legacy Fenix without having a runtime dependency on an Access database.

### Robotic Testing Opens the Door to Better Proof

A new robotic tester based on Python and `pywinauto` was added to the project. It can launch legacy and NEO versions of modules both standalone and under the shared launcher, execute user-interface scenarios, collect screenshots and UI tree summaries, and compare results.

This is significant for the HAIFA project. Migrating an old desktop system is not only about whether the code compiles. The team needs to repeatedly verify that forms open, menus work, the application reacts similarly to the original version, and fixes can be proven. The robotic tester gives both AI agents and people a better tool for reproducing defects and demonstrating results.

This week, the team verified a launch matrix for RZP and UCV in legacy and NEO variants, both standalone and through the shared launcher. This kind of technical infrastructure is not visible in one specific form, but over time it has a major impact on the quality of the whole migration.

### Release Management Started to Take Shape

In addition to development itself, the team also worked on distribution. RZP received the first foundation for MSIX distribution through GitHub Releases, including signed packages, manifests, beta and production channels, automatic updates, and an installation page.

This is not yet the final distribution process for the whole Fenix system. For now, the focus is mainly on RZP, and some steps remain deferred. Still, it is an important move: the project is preparing for a world where new modules are not only launched from a development environment, but installed, updated, and released in a controlled way.

### More Reference Legacy Sources Were Added

Additional parts of the original legacy sources and schemas were added to the repository. This includes the shared launcher, security and shared libraries, and other module areas.

For the public, this may be less attractive than a video of a working screen, but it is very practical for the migration. The more exact references the team has available, the better it can verify what the original system actually did, how forms were named, how menus worked, and where module boundaries are.

## Why This Week Matters

Week twelve mattered because the project expanded in several directions at once. UCV received its first real foundation, RZP moved closer to real legacy behavior, SPOL strengthened shared startup and error-handling mechanisms, and tools around testing and distribution started to appear.

At the same time, the hardest part of the migration remains the same: getting automated tools and AI agents to follow the original Fenix as closely as possible, and making sure their outputs are not only formally complete, but functionally correct. This week brought several steps that make that work more measurable and easier to verify.

[Home]({{ '/en/' | url }})
