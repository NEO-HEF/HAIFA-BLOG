---
title: "Week Fourteen - RZP Moves Toward Pilot and UCV Gets a Hard Review"
date: 2026-06-14
week: "Week Fourteen"
period: "June 8, 2026 - June 14, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w24
permalink: /en/posts/neo-hef-2026-w24/
summary: "Week fourteen formally closed RZP reporting for pilot use, added allocation-recipe checking and copy parity evidence, expanded E2E and golden-master testing, adopted shared progress dialogs, and turned RZP and UCV lessons into broader migration guardrails."
---

## Summary for Non-Technical Readers

Week fourteen of the HAIFA project moved RZP from “most things work” toward the stricter question: can the new application be defended against the original Fenix? The clearest result is the formal closure of the RZP reporting and output step. Report overviews, codebook printouts, Excel exports, previews, direct printing, and file output are now documented as usable for a supervised pilot.

This was not only about adding more screens. The team worked on behavioral precision: validation order, grid selection, preselecting the current owner, Czech decimal commas, message icons, dropdown behavior, relayout after display changes, and whether a form opens as an MDI child or a modal dialog. These are exactly the details that decide whether users recognize the migrated application as their original working tool.

RZP also gained allocation-recipe checking. This is a read-only diagnostic that does not change data, but it can inspect allocation coefficients and produce a report when it finds inconsistencies. In parallel, the team captured a legacy golden-master baseline for recipe copying and used it to close a parity test. That capture also exposed another subtle difference around account remapping, which has been moved into the follow-up S10 step.

Testing grew significantly. The RZP E2E catalog now contains 153 scenarios, with 63 marked as implemented. Test suites were added for areas S00 through S05, and text golden-master baselines were added for report families 21 through 29. This does not mean everything is finished, but it does mean the project has a stronger evidence network and a clearer view of what is covered and what remains open.

UCV also became part of this week’s public story. The new Reporting module went through a hard six-lens review that exposed the difference between formal “DONE” and real usability. After five remediation waves, UCV has a clean build and 894 passing tests, but it still has clearly named deferred areas: Dapper persistence, SPOL/RUV/UCA dependencies, and live parity capture against the original UCV. That is a useful lesson for the next modules.

## What Happened

During the week from June 8 to June 14, 2026, `39` changes were merged into `develop`. This was not a week of one large new beginning. It was a week of closure, precision, and turning discovered issues into rules that can help later module migrations.

### RZP Reporting Was Formally Closed for Pilot Use

The most important operational result was the closure of RZP-S04, the reporting and output step. According to the current management summary, all 19 implementation tasks in this step are complete and the reporting pipeline works end to end.

For users, this means RZP can generate overview reports 21a/b, 22a/b, 23a/b, 24a-e, and 29a/b. The same area also covers codebook printouts for owners, recipes, sources and targets, received-data lists, Crystal preview, direct printing, file output, and Excel CSV. Even small details such as separators, two-line headers, decimal commas, and dimension columns are part of the work.

For the pilot, the important point is that the remaining items are not blocking. The only explicitly noted difference is cosmetic: some confirmation and information messages in RZP remain inline Czech text instead of being read from a shared catalog. That has no effect on pilot functionality or data.

### Allocation Recipes Got Real Checking and Stronger Parity

Another major stream was allocation recipes. RZP now has recipe checking: a read-only diagnostic for allocation coefficients. Users can launch it from the main menu and from several places inside the recipe workflow. It walks the hierarchy of definition, recipe, level, and from-to accounts, then prepares a report when it finds invalid coefficient sums.

This area shows how fine-grained a 1:1 migration can be. Writing a new calculation was not enough. The team verified header order, pagination by recipe, binding to the selected definition, error behavior, permissions, progress UI, and cancellation. The result is not a new interpretation of the feature, but a port of the original logic into .NET.

The team also closed part of the parity evidence for recipe copying. A legacy “Copy recipe” run was captured as a golden baseline, and the .NET copy result is compared against that logical tree. That test exposed that legacy remaps some account identifiers according to the active component mask. This became a follow-up parity item for S10, not a detail to hide.

### Testing Expanded From Scenarios to Evidence

QA work was substantial this week. RZP gained a new E2E test-suite structure for S00 through S05, including a scenario catalog, templates, and report golden-master materials. The catalog now contains 153 scenarios: 63 implemented, 5 scaffolded, 2 in progress, 1 planned, and 82 still missing.

That number needs a sober reading. It does not say the entire RZP module is automatically tested. It does say testing is becoming an inventory of concrete work paths, with clear visibility into what is covered, what is prepared, and what still needs work.

Reports also gained text golden-master baselines for variants 21 through 29. For reports like these, opening a window is not enough. The team needs to check text, headers, groups, totals, separators, and repeatability. That is essential if reporting is to be maintained without manual visual comparison every time.

### Shared Progress Dialogs Started Being Used for Real

RZP also adopted more shared SPOL progress and waiting dialogs. Codebook printing, allocation execution, recipe copy, and accounting-data import were connected to shared `SPHZPR` and `SPHZTL` behavior.

The practical meaning is straightforward: users should see the same type of progress window as in the original Fenix, long operations should not freeze the UI, and cancellation must have a clear data impact. For accounting-data import, for example, the team handled what happens when processing is cancelled in the middle of a write path.

This work also separates two things that are easy to mix up in a migration. Calculation logic should not change just because the progress window changes. Progress and cancellation are the user-facing and operational surface around the same computation.

### Parity Bugs Became Migration Rules

The week brought several small but important behavior fixes in RZP and UCV. In RZP, the team fixed accounting-period validation order, current-owner preselection, owner-dialog behavior, grid selection during account edit/delete, range validation before confirmation, KAM target-value validation, and message icons based on legacy `bf_msg`.

In UCV, some definition forms were corrected to open as MDI children rather than modal dialogs. Guardrails were also added for AutoSize and DPI-sensitive labels, dropdown behavior, form modality, message-icon mapping, and byte-accurate Czech legacy strings in CP1250.

This may be the least flashy but most important part of the week. Each discovered bug was treated not only as a local fix, but also as a lesson for future migration runs. The project is gradually building its method: how to port forms, when not to change modality, how to protect layout, how to preserve Czech text, and how to keep WinForms defaults from breaking VB6 parity.

### DPI Policy Became an Architectural Decision

Experience from RZP and UCV led to ADR-010: migrated VB6 WinForms modules should default to a DPI-unaware runtime. The reason is practical. Legacy VB6 forms use fixed coordinates, and DPI or display-metric changes can silently distort layout.

The decision does not say that modern DPI-aware UI is generally wrong. It says that for 1:1 legacy form migration, it is safer to keep a stable 96 DPI baseline, disable automatic scaling, and handle specific resize behavior deliberately. This matters especially under the shared launcher, where modules are embedded into one hosted environment and cannot each define their own DPI mode independently.

### UCV Clarified What “Done” Means

UCV also moved forward this week. The complete NEO version of the UCV Reporting module, including critical-review remediation, reached `develop`. The interesting part of that review is that it did not only ask whether the build passed or whether forms existed. It asked whether the menu was reachable, whether permissions behaved like legacy, and whether screens were doing real work rather than acting as inert shells.

Six review lenses produced 62 consolidated findings. Selected low-risk, UCV-local fixes were delivered in five waves: dynamic menu visibility, menu reachability, permission gating, form functionality, and UI content data. The result is a clean build and 894 passing tests.

It is equally important to say what this does not finish. UCV still has deferred areas tied to Dapper persistence, SPOL/RUV/UCA module dependencies, and live capture parity against the original UCV. The review moved the project from a feeling of completion to a sharper list of what is truly functional, what is covered by tests, and what still waits on external dependencies.

## Why This Week Matters

Week fourteen was less about visible novelty and more about credibility. RZP reporting reached a state that can be defended for pilot use. Allocation recipes gained another real check. The test catalog and golden-master baselines give the team a stronger way to catch regressions. Shared progress dialogs and the DPI policy show that lessons from one module are becoming rules for the whole Fenix migration.

The key message is twofold. RZP is moving closer to pilot usability, but the project is not pretending that every green item in a plan means full parity. The UCV review showed that real “done” must include reachability, permissions, data, form behavior, and live evidence against the legacy system.

[Home]({{ '/en/' | url }})
