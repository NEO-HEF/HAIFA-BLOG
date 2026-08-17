---
title: "Week Twenty-Three - UCV Reduces Active Gaps, UPD Runs an Upgrade from the UI, and UIR Gets Its First Shell"
date: 2026-08-16
week: "Week Twenty-Three"
period: "August 10, 2026 - August 16, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w33
permalink: /en/posts/neo-hef-2026-w33/
summary: "Week twenty-three moved UCV forward in active user paths, brought the UPD UI to a real upgrade run over a test copy, started the first UIR shell, and confirmed that release 10.01 stayed outside development changes."
---

## Summary for Non-Technical Readers

Week twenty-three of the NEO_HEF project was practical. It was not about a big public milestone, but about gradually removing places where a user could already see a button or menu item in the new application, while the behavior behind it still did not match the original Fenix.

The largest part of that work happened in the UCV module. The week added submission of a statement to USP, printer setup in three overviews, statement printing from the post-2010 overview, and several smaller but important parity fixes. This moves UCV closer to final testing, but it is not there yet. Some areas still require more verification rounds, live comparison over suitable data, or an owner decision.

UPD, the database upgrade module, made a visible step toward usability. The database upgrade was no longer verified only through tests and technical seams; it also ran from the logged-in user interface. The run used a disposable test copy, moved the database from version 1001000 to 1011000, and the application session remained usable after the upgrade. That matters because a database upgrade is a destructive operation, so it must be clear when it runs for real and which database it targets.

UIR, the territorial identification area, moved from orchestration to the first real startup part of the module. The team created the application shell, basic login and runtime context, database startup, base menu, and live evidence that the menu in the main window reacts to a real click. This is not a finished UIR module, but it is no longer only a work plan.

The project also tightened HAIFA working rules. A cross-module ledger now records cases where migration of one module creates code in another module. Guardrails were also added for dead buttons and form behavior, including the correct distinction between a modal dialog and an MDI child window. These changes are not flashy, but they help keep the migration in a state where agents do not repeat work, do not break someone else's code, and do not leave active UI elements without behavior.

## What Happened

During the week from August 10 to August 16, 2026, the `origin/develop` branch gained 127 commits, including 50 merge commits. The `origin/release/10.01` branch did not receive any commits. Development therefore continued on `develop`, while the release branch remained stable.

The week had four main themes: continued reduction of active gaps in UCV, moving the UPD UI all the way to a real upgrade run from the screen, the first startup part of UIR, and tighter HAIFA factory rules.

### UCV Reduces Active Gaps

In UCV, work continued on places where the port was technically present, but the user flow still did not match the original Fenix. A typical example is `Submit to USP`. In the new application, the button and menu item were active because permissions allowed them, but their handler was an empty codegen stub. This week, real behavior was added behind them: reading the statement state, confirming resubmission of an already submitted statement, running the submission logic, and refreshing the overview.

A similar gap was removed in printer setup. Three UCV overviews had an active path for printer setup, but the new application did not wire it correctly. The solution did not add a new dialog; it reused the existing SPOL service for legacy printer setup. That is exactly the kind of reuse that matters in a migration project: when shared infrastructure already exists, a module should consume it instead of building another local copy.

Another step happened in the statement overview from 2010 onward. The `Statement -> Print statements` path is no longer an empty button. The port now opens the matching print dialog and passes data into it so that the print buffer does not receive an empty indicator list. This is not a claim that the whole reporting area is definitively complete. It does mean another visible user path now has concrete implementation and tests.

There were also smaller parity fixes that are less visible to users, but important for data correctness. When assembling statements for multiple owners, the organization type is now resolved for each owner separately instead of using the one selected owner in the shell. Bond-definition saving now shows more precise error detail. And one numeric bond path was aligned with legacy behavior where calculation is based on already formatted values, not the original decimal numbers.

This moves UCV toward final testing. A more accurate formulation is that the remaining surface is getting smaller and better defined. Open areas still remain around consolidation rows, some print and action paths from the overview, and additional live golden verification over a suitable database.

### Block-H Has Stronger Evidence and a More Precise Problem

The work around the block-H statement deserves its own note. The team created a legacy reference for a large print output: for the selected case, the original application produced 4514 rows across 74 pages. A subsequent live NEO verification showed an important correction to an older assumption.

The issue is not missing deployment of a Crystal worker. Here, Crystal only prints already prepared text. The original application builds the fixed-width rows itself in VB6, while NEO currently produces only 27 rows on one page for this family. The values match, but the output structure does not.

This is a useful negative proof. Instead of a broad "the report does not match," the remaining work is now clearer: port the print class for family F40, which builds the textual statement content.

### UPD Reached a Real Run from the UI

UPD continued the fourth phase of work on the user interface. Previous waves had aligned forms with legacy behavior, added missing inputs, corrected geometry, menus, micro-help, window-position persistence, and dead buttons. This week, that line of work reached the key question: can the operator launch the database upgrade from the UI?

For a test copy, the answer is yes. The upgrade was launched from a logged-in UI over the `fenix_upd_c_scratch` database, a disposable copy allowed by the safety gate. The database moved from version 1001000 to 1011000, the run result was `AllOk`, and the application did not lose its session after completion.

The boundary of the proof is just as important. This result does not say that the upgrade should be launched over a production database. On the contrary, it confirms that the port distinguishes run posture, checks the target database name, and refuses unsafe targets. The temporary scratch gate remains part of the protection precisely because an upgrade is irreversible.

The practical meaning is significant. UPD is no longer only an engine that can be launched from a test. The operator path in the application now really leads to engine work while still carrying protections against unintended execution.

### UIR Gets Its First Startup Part

This week, UIR moved from planning and control work into the first real runnable basis of the module. An MDI shell was created with the correct title, dimensions, status bar, clock, and distinction between standalone launch and launch under the Shared Launcher.

The session, login, permissions, and runtime context layer followed. One important detail is that the team did not take the path of "give someone some permission so that the application opens." In UIR, permission code `1` is a real permission, so fabricating it as a fallback would silently open parts of the menu to users who should not have them. The port therefore degrades more strictly, not more loosely, when state is unclear.

Another part was database startup and helper structures. At startup, UIR prepares helper tables for printing in a local MDB session and also deals with GIS/KZR links. The new implementation added the relevant bootstrap classes and tests, while some points deliberately remain fail-closed because they require an owner decision or later modules.

The visible result is the base menu. The port transferred the menu tree from the legacy `frmLogo`, including role and permission gating, and used a live menu-click gate to prove that the menu in the main window reacts to a real Windows click message, not just a test call into a handler. One part remains uncovered because it needs the first real MDI child with its own menu; that is planned for a later phase. Here too, the reading should stay careful: the startup shell is real, but UIR as a whole is still at the beginning of migration.

### Release 10.01 Stayed Outside the Changes

A formal sign-off reached `develop` stating that the `release/10.01` branch remained without regression changes. The release branch is frozen at the state from June 30, 2026, and did not receive any own commit this week.

Despite the cautious wording in the sign-off itself, the full E2E tests were in fact run and passed 100%. That is a stronger conclusion than merely saying that the release branch did not change source code: release 10.01 stayed outside development changes and also passed full end-to-end verification.

### HAIFA Tightens Working Rules

This week also brought several rules that are not visible in the application, but improve the way migration work is done. The cross-module ledger handles situations where migration of one module has to write code into another module's tree, because that is where the capability belongs in the legacy domain. A typical case is UCV creating parts in RUV and UCA before migration of those modules had started, because UCV itself depends on them. When implementation planning and migration of RUV and UCA begin, those pre-built parts must be absorbed, built upon, and not broken. The ledger now says who created the code, where it lives, which contract later migration must not break, and what the target module should build on.

Guardrails were also added for dead buttons and form behavior. The first rule says an active UI element must not silently do nothing. If it is active in legacy and performs an action, the port must implement that behavior or explicitly record why it is not there yet. The second rule prevents migrated forms from looking finished while opening differently: in a different position, with broken geometry, or in the wrong window mode. For a form, it matters whether legacy treats it as a modal dialog or as an MDI child embedded in the main window.

This is as important for HAIFA as the code itself. The project is learning how to capture knowledge from one module so that it remains useful for the next one, and how to prevent agents from repeating the same mistake under a different name.

### Why the Week Matters

Week twenty-three showed a move from "we have another piece of the port" to "we know how that piece behaves when clicked, over a live test database, and against legacy evidence." UCV reduced several active gaps, UPD passed a real upgrade from the user interface, UIR got its first running shell, and HAIFA added rules that help keep work across modules consistent.

The most important point is caution in conclusions. UCV is not finished, UPD is not an invitation to run over production, and UIR is not a complete module. But all three areas have stronger evidence after this week than they had before. For migration of a large ERP system, that matters more than quickly ticking items off a list.
