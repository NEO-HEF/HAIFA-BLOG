---
title: "Week Fifteen - RZP Passes Through Parity Gates"
date: 2026-06-21
week: "Week Fifteen"
period: "June 15, 2026 - June 21, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w25
permalink: /en/posts/neo-hef-2026-w25/
summary: "Week fifteen moved RZP from pilot usability toward documented parity: import, allocation, recipe copying, reports, menus, and startup passed stronger test gates; SPOL/SPK gates for the RZP full-path scope were closed, and the E2E catalog grew to 164 scenarios."
---

## Summary for Non-Technical Readers

Week fifteen of the HAIFA project was not mainly about adding one large new window. It was about something more important: the team began proving that already implemented parts of RZP really behave like the original Fenix.

The biggest shift was in accounting-data import and cost and revenue allocation. At the start of the week, some areas were closed only administratively because they still needed parity evidence against legacy behavior. During the week, golden baseline materials, parity tests, and live E2E runs were added, so the RZP import and allocation step could move into a genuinely complete state.

Recipe copying was also tightened. At first glance it is a small feature, but in practice it touches dimensions, accounts, periods, levels, and rules for when data should be copied verbatim and when accounts must be remapped according to the active definition. These are exactly the differences that decide whether users get the same result after migration.

Testing also became stronger. The RZP E2E catalog now contains 164 scenarios, 86 of them implemented. Data-driven report tests were added, along with tests for import, allocation, codebooks, settings, and a more stable robotic tester for driving both legacy and new applications.

The shared layer also mattered. SPOL and SPK closed final test and compatibility gates for the scope needed by RZP. In practical terms, RZP is not standing only on its own code. It is also standing on verified login, database runtime, shared dialogs, compatibility contracts, and tests around shared services.

Overall, the week was about moving from "it works for us" to "we can show why we trust it." For ERP migration, that is a major difference.

## What Happened

During the week from June 15 to June 21, 2026, `37` changes were merged into `develop`. Most of them focused on RZP, but the impact was broader: alongside module functionality, the team closed test and compatibility gates in shared layers.

### RZP Import and Allocation Passed Parity Evidence

RZP-S03, the import and allocation step, was first closed cautiously as `DONE_PENDING_PARITY`. That was an honest state: implementation and unit tests were complete, but evidence against the legacy baseline was still missing.

This week, RZP-S06 closed that gap. The team prepared golden fixtures for import and distribution, extended the parity baseline catalog, wrote parity tests for import, validation, and allocation, and ran live E2E scenarios against the application. This work exposed a concrete issue: the import screen defaulted to a different definition than the legacy rule based on the current year. After the fix, the import E2E suite turned green.

The result is that S03 is no longer "done with a note." Import, validation, allocation, delete guards, and the UI chain now have explicit test coverage and documented closure. The final consolidated run across RZP parity, startup, recipes, allocation, import, reports, master data, and codebooks records 761 passing tests, 3 intentional skips, and no failures.

### Recipe Copying Got More Precise Logic

Much of the work also continued in RZP-S10, around allocation recipe copying. This area showed that the word "copy" does not always mean the same thing. Copying a recipe level is a structural clone: children, coefficients, and accounts must be preserved exactly. Copying an entire recipe within the same year, however, must re-project some accounts according to the active definition mask.

The implementation therefore gained a shared core for cloning recipe children and two account-handling strategies: verbatim copy and account re-projection. Copying a recipe from the previous year was also connected. Users can choose a source recipe from `year - 1`, and the application handles whether the target definition is shorter, longer, or the same. When part of the dimensions could be lost, the behavior follows the legacy warning flow.

For a public summary, the important point is that the team did not treat copying as plain row duplication. It verified when a copy must be literal, when it must respect a new definition, and when the user must be stopped or warned.

### Reports and E2E Tests Got More Real Data

The RZP reporting area continued moving from technical report generation toward verification over concrete data. Data-driven E2E suites were added for S04 reports, including materials for reports 21a/b, 22a, 23a/b, 24a-e, and 29a/b. Expected exports and text outputs are part of that evidence, helping separate real calculation problems from stale golden masters.

The team also fixed concrete differences: amount units in report configuration, visibility of all dimensions in definition screens, clipped labels in recipe forms, and behavior of some controls such as arrows-only numeric criteria. E2E tests for codebooks, definition sentences, settings, import, and the full allocation process were also expanded.

The current E2E catalog has 164 scenarios: 86 implemented, 68 missing, 5 scaffolded, 3 planned, and 2 in progress. That is still not a complete network, but it is now a concrete map of what is verified in RZP and what remains open.

### User-Facing Details Kept Moving Toward Legacy Behavior

The week also brought many small changes that users are more likely to notice than most architecture. RZP gained context help through F1, focus help, and message boxes. Messages started relying more on the shared `SpolHelpMessageBox`, and the status bar is now centrally cleaned up after messages close.

Validations became more precise in codebooks and recipes: NS/AK order according to actually placed components, allowed characters, checks against codebooks, blocking recipe edits when levels already exist, and persistence of constants after data import. Menu behavior also gained live toggling for checks based on codebooks and permissions.

These changes are not flashy, but they are exactly the kind of work that separates a demo from a usable migrated module. In an ERP system, users do not only care whether a calculation eventually completes. They also notice when a button is enabled, which message appears, where focus moves, and whether the screen behaves like the tool they already know.

### SPOL and SPK Closed Gates for the RZP Full-Path Scope

Shared layers were also closed. SPOL-S14 was completed as the final test and compatibility gate for the scope required by RZP full-path work. The evidence is based on a real `Fenix.Spol.Tests` run: 534 tests passed, and the single failure was classified as a known flaky clipboard test outside the substantive scope.

SPK-S09, the final parity gate for the shared client layer, was closed in the same spirit: not as a waiver, but based on real evidence. Its runtime and compatibility slice reports 86 of 86 tests passing. For RZP, this means shared login, runtime contracts, database boundaries, quiet sessions, and consumer compatibility are not merely assumptions. They have their own test trail.

This matters strategically as well. If Fenix is to grow through migrated modules, shared layers cannot remain an invisible risk. They must be verified and reusable in their own right.

### Robotic Testing Became More Stable

Tooling also moved forward. The robotic tester gained a persistent FlaUI daemon and a new action-based way to drive both legacy and embedded application modes without fragile external Win32 clicking. The goal is not to make testing look more impressive. It is to reduce false failures and control longer UI scenarios more reliably.

This complements the growing E2E catalog. RZP migration increasingly relies on a combination of unit tests, parity fixtures, report baselines, live UI runs, and documented differences. Each type of evidence covers a different kind of risk.

## Why This Week Matters

Week fifteen was a week of credibility. RZP already had many working parts, but this week the project made a significant step in how it proves their correctness. Import, allocation, recipe copying, reports, menus, startup, and shared layers all gained stronger parity and test support.

This does not mean the whole NEO_HEF project is finished. It means RZP is no longer being judged only by a list of implemented features. It is increasingly being judged by evidence: what passed against legacy behavior, what has a golden baseline, what runs in E2E, what is deliberately deferred, and what is only a cosmetic difference.

That shift matters more for pilot and later production use than another visible item in the menu. ERP migration is not won by the number of rewritten screens. It is won when users can rely on the same behavior, and the team can show why that trust is justified.

[Home]({{ '/en/' | url }})
