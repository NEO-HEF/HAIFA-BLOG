---
title: "Week Twenty-Four - UCV Matches a 74-Page Printout, UPD Automates E2E, and UIR Builds Its Settings Foundation"
date: 2026-08-23
week: "Week Twenty-Four"
period: "August 17, 2026 - August 23, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w34
permalink: /en/posts/neo-hef-2026-w34/
summary: "Week twenty-four brought character-for-character parity for a 74-page UCV statement batch, broad UPD E2E automation, the first parts of UIR settings, and a fix for Windows account login."
---

## Summary for Non-Technical Readers

Week twenty-four of the NEO_HEF project made substantial progress in verifying how the applications actually behave. This was not merely another increase in test counts. The team compared large print outputs character by character, had automated tests click through real user interfaces, and began rigorously recording what the test report still cannot verify.

The most visible result came from UCV. The new application assembled a captured batch of five accounting statements spanning 74 pages, with its textual content matching the original Fenix from the first character to the last. This is much stronger evidence than comparing a handful of values or a single page. At the same time, it does not mean that the entire printing area or all of UCV is finished. The statement half of one specific 2026 batch has been verified; other print variants and the text sections of the Notes still await review, and final live verification also remains.

UPD, the database upgrade module, gained automated E2E coverage for all 16 prepared test suites. A total of 69 click-driven tests interact with the application from the outside much like a user would: they log in, open menus and dialogs, inspect states, and even verify a real upgrade against a designated test database. The temporary safeguard that allowed production paths to work only with a database whose name contained `scratch` was removed after these preparations. Safety therefore no longer rests on a database name, but on a controlled test environment, backups, and explicit QA instructions.

UPD also moved forward in database backup and restore. The menu items are no longer informational placeholders. They launch the standalone `Zalohovani.NET` tool in the same way as legacy Fenix. For backup, opening its graphical interface was also verified live; for safety, the restore E2E test goes only as far as the first confirmation dialog.

UIR continued building a repeatable foundation for later parts of the migration. The frozen pattern for codebook list and edit behavior was extended, and the first two parts of the settings area were created: global preferences and a probe for finding an available PCD, the system identifier assigned to a building. These are not yet finished dialogs available to users. They are tested contracts that concrete screens and later steps will build upon.

The Windows account login path was fixed as well. The login dialog now correctly passes an account in the form `DOMAIN\user`, the shared layer strips the domain before searching the database, and the application remembers the selected login mode. The administrator flag still needs to be confirmed live after a real domain login, so this area has not received complete sign-off either.

## What Happened

During the week from August 17 to August 23, 2026, the `origin/develop` branch gained 111 commits, including 45 merge commits. The `origin/release/10.01` branch remained unchanged. Development focused mainly on UCV, UPD, UIR, shared login, and QA automation.

### UCV Assembles a Captured 74-Page Batch

In the previous week, work on the so-called block H had already shown that the values could match while the resulting printout still differed substantially from legacy in structure. This week, the typesetting for the complete captured 2026 statement batch was ported and connected.

The reference batch contains five statements: FIN 2-12 M, the Balance Sheet, the Income Statement, the Notes, and the Auxiliary Analytical Overview. Together they span 74 pages. Each part has its own rules for headings, pagination, column widths, value mapping, and blank rows. The most complex was the Auxiliary Analytical Overview, which occupies 51 pages and includes rows that are not produced directly from the definition, but by grouping accounting indicators using several data points.

The result is a character-level golden reference against which the entire generated text is compared automatically. The captured batch matches from the first page to the last. The typesetting is also connected to UCV's production print path, so this is not an isolated test experiment.

The limits of the result matter just as much as the match itself. The verified batch was produced for specific data and the year 2026. The reference run did not enable the text sections of the Notes, so no comparison fingerprint exists for them yet. Other annual and historical variants also need separate verification, as does the report half of block H, including user reports and validation-protocol outputs. This moves UCV substantially closer to final testing, but final parity sign-off and the release gate remain open.

Beyond block H, UCV's functional surface expanded as well. Historical statement families, total calculations, classic HO/NO/PO printing, consolidation rows, and other active user paths were added. After this round, the status document records that no reachable `Assemble` path remains without a calculation engine. That is still not the same as full release readiness: the remaining work is shifting mainly toward live verification, golden-reference capture, and manual testing over suitable data.

### E2E Tests Are Becoming a Real Gate, Not Just a Report

UPD gained automation for all 16 prepared test suites. The new project contains 69 click-driven E2E tests. They cover application startup and the administrator gate, menu structure and visibility, confirmation dialogs, structure testing, database-script operations, password conversion, and controlled runs against a test database.

The important point is that these tests do not call internal form methods. The automation launches the real application, logs in, and controls it through the user interface. This is the kind of test that can reveal a case where a handler is correct in code but the user cannot actually reach it through a menu or dialog.

The same principle was tightened for UCV. Its catalog was reconciled to 173 rows covering all 165 scenarios from 26 suites, plus eight separately tracked sub-scenarios. Previously, 33 scenarios were entirely absent from the report. A new gap ledger now requires every non-green scenario to have a classification and a reason, such as missing migration, a product defect, test debt, a dependency on another module, or a technically non-automatable step.

The practical meaning is simple: the report can no longer claim full coverage merely because it silently omitted a difficult scenario. An unrecorded gap receives the `NEKLASIFIKOVANO` (`UNCLASSIFIED`) status and lowers the overall verdict. UCV automation also produced concrete product findings, including issues in loading saved settings and previously dead actions in overview screens. Some received implementations during the week; others remain tracked as open defects.

### UPD Leaves the Temporary Scratch Gate Behind

Until now, the live upgrade path was protected by a simple condition: the target database name had to contain `_scratch`. This safeguard was useful during the first live runs, but it was not a suitable long-term rule. A database name alone does not say whether destroying it is safe, and production code should not make that decision based on a test naming convention.

This week, the scratch gate was removed from all three production paths that can launch an upgrade. The QA assignment was updated at the same time so that testers no longer assume any such automatic protection. They must work with a designated restorable database and keep a separate backup outside the application before the run.

This is not a reduction in safety, but a change in where safety lives. The temporary technical safeguard gave way to a process that reflects real operations. It also removes the false confidence that a database is safe merely because it has the right name.

### Backup and Restore Now Lead to a Real Tool

Database backup and restore in the UPD menu had previously been deferred actions. They now launch the standalone `Zalohovani.NET` application used by legacy Fenix. UPD does not pass its own parameter set or credentials; following the original behavior, it simply locates the tool in the Fenix installation and starts it without arguments in interactive mode.

For backup, an automated test verifies that the actual tool process starts. After the required 32-bit SQL Server libraries were installed, opening the `Fenix - Záloha a obnova databáze 10.01.001` window was also confirmed live on the test machine.

Restore has a stricter boundary. The E2E test checks the first confirmation and declines it. Full confirmation would disconnect the database, launch the tool, and terminate UPD, deliberately destroying the shared test session. Unit tests therefore guard the subsequent sequence. Distribution of the tool itself also remains open: UPD neither supplies nor installs it, but expects it to be present in the Fenix installation.

### UIR Freezes the Codebook Pattern and Opens the Settings Area

This week, UIR completed more parts of the shared pattern that individual codebooks will use during migration. A base for the detail editing window, action-availability rules, and a repository contract were created. The purpose is to solve shared behavior once and then apply it to concrete codebooks, instead of treating each one as a new standalone interpretation of the legacy application.

These are not yet codebooks that users can open. The shared classes are abstract, and the first concrete screens will arrive in follow-up steps. Those steps will need live verification of behavior including merging child menus into the main window, correct MDI child behavior, and the individual differences between codebooks.

The settings area started at the same time. The first part can read and save global UIR preferences in a shared database table. The second handles PCD availability, the system identifier assigned to a building, and preserves some surprising rules from the original system, such as the significance of leading zeros and the different ways of finding the next available value.

Both parts have extensive test coverage, but still await sign-off. They do not yet have a concrete dialog or wiring into the running application; those belong to subsequent tasks. The precise statement is therefore that UIR has prepared and verified settings building blocks, not that settings are finished as a user-facing feature.

### Windows Login Passes the Correct Identity

A defect in the shared login layer was fixed for Windows account mode. The login form knew the domain account, but passed the value from a different field, which is empty in this mode, into the successful login result. Consumers then searched for a user with an empty login.

The new path preserves the account in the form `DOMAIN\user` through the dialog result. The shared database consumer then removes the domain, normalizes the login for a case-insensitive comparison, and finds the corresponding Fenix user. The login form also remembers whether the user last selected standard or Windows mode, so that choice no longer has to be repeated on every launch.

The change is backed by tests in both the shared layer and the UPD consumer. One final live gate remains open: a real domain login must still confirm that the administrator flag is propagated correctly. The functional identity-passing defect is fixed, but full production verification is still outstanding.

### Why the Week Matters

Week twenty-four showed two forms of progress. The first is visible in the result: 74 UCV pages matching character for character, a backup and restore tool that can actually be launched, and a correctly propagated domain identity. The second is procedural: test reports are beginning to record what they cannot verify as rigorously as what has passed.

The second change is particularly important for HAIFA. Predictable AI-driven development does not come from writing code quickly alone. It requires evidence that cannot be bypassed by omitting a scenario, using language that is too broad, or running a green test over a path different from the one a person uses. This week, the project strengthened that evidence in several areas without turning partial results into a premature claim that an entire module is finished.
