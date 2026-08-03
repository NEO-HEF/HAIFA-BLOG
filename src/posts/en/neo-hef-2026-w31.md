---
title: "Week Twenty-One - UCV Closes Parity Gaps, UPD Comes Alive, and UIR Has a Complete Plan"
date: 2026-08-02
week: "Week Twenty-One"
period: "July 27, 2026 - August 2, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w31
permalink: /en/posts/neo-hef-2026-w31/
summary: "Week twenty-one brought major UCV parity and E2E progress, safe UPD verification on a disposable database, a complete UIR implementation plan, and more precise handling of test data."
---

## Summary for Non-Technical Readers

Week twenty-one of the NEO_HEF project shows the difference between simply rewriting code and actually migrating an ERP system. UCV continued moving from "the module runs" toward "the module behaves like legacy Fenix in concrete statements, reports, and user situations." UPD proved for the first time that it can safely go through a live upgrade scenario on a restorable database copy. UIR now has a complete implementation plan after a broad dissection of the legacy code.

For non-technical readers, the main point is this: the project is no longer only asking whether individual migrated modules start. Fenix is a suite of modules, and each module owns a different responsibility. UCV must handle statements and reports correctly, UPD must safely handle database upgrades, and UIR must have its screens, integrations, and testing obligations clearly described before implementation starts.

For UCV, the week closed important parity gaps. The team verified outputs against legacy Fenix at the level of individual cells and bytes, not only by checking that the result "looks similar." This matters especially in accounting statements, where even a small difference in rounding, totals, or owner filtering can produce a different result.

UPD moved forward in another sensitive area: database upgrades. An update module must not be tested by trial and error on a production database. It was therefore verified on a disposable copy, with strong guardrails designed to prevent execution against a live environment. The result is significant: the upgrade engine structurally reproduced the full 10.01 -> 10.11 golden run in 13 out of 13 statements.

UIR is not an implemented module yet. But its implementation plan is complete and validated as executable. That means screens, menus, print paths, settings, shared components, risks, and testing obligations are described before the actual port begins. HAIFA is confirming the principle that future migrations should not start with improvisation.

The `release/10.01` branch remained unchanged this week as well. That fits its role: preserving the stabilized older line while the main work continues in `develop`.

## What Happened

During the week from July 27 to August 2, 2026, after updating the remote branches, the `NEO_HEF` repository shows 184 commits on `origin/develop`, including 71 merge commits. The `origin/release/10.01` branch did not receive any commits in the same period.

Most of the work concentrated in four areas: UCV, UPD, the UIR implementation plan, and supporting tools for testing and safe database handling.

### UCV Entered Hard Verification

In previous weeks, UCV was mainly about integration and gradually making user paths work. This week the focus moved to hard verification of results. That means comparing concrete outputs from the new implementation with legacy Fenix, often at individual-cell level or exact text-output level.

The UCV documentation describes a completed finish run from July 27: all 12 then-implementable items were delivered and merged into `develop`. It was followed by a golden-capture run on July 28 that closed 11 more items. In practice, this covered reports, exports, charts, statement families, and behavior over more realistic data.

The IRES export in the 545-character CSUIS format is especially important, with the documentation recording a full byte-golden match. That is stronger evidence than an ordinary functional check: the new output is compared exactly, not only approximately.

Statement families F69 and F70 also moved forward for the 10.11 reform. F70 received fixes around thousands conversion, subtotal rows, and the distinction between algorithm year and data year. For F69, the team captured a legacy golden on a restorable database copy and then verified full agreement of the new implementation against the legacy output.

The successful matches were not the only useful result. The work also uncovered important defects. PAP-66, for example, exposed a shared value-fill issue in bindings that could allow a check to pass silently. This is exactly why migration should be driven through evidence sets rather than a general impression that the module "looks done."

### UCV Gained Broader E2E Coverage

Another part of the UCV work focused on E2E tests. Test documentation and automation gained scenarios for the statement lifecycle, balance-sheet assembly, texts and attachments, the VAT statement, and the statement overview. Later in the week, negative scenarios were added as well: input validation and special characters in attachment texts, including an SQL-injection test.

This moves UCV from "we have unit and parity tests" toward systematic verification of real module usage through screens. That matters for public handoff, because users will not call individual services in code; they will click through forms, assemble statements, edit texts, and run checks.

The testing apparatus was also being unified across modules. The new E2E coverage landed in UCV, and test sets moved into a clearer structure. RZP did not gain new tests this week, but it still acts as a process reference: what the team learned there is gradually moving into more general QA tools.

### UPD Safely Passed a Live Upgrade Scenario

UPD is sensitive because it handles database structure and data changes between Fenix versions. Here, saying "it works" would be unsafe without specifying where and how it was verified. This week matters because the verification was done safely: against a disposable database restored from a 10.01 copy, not against production.

First, the team added a live upgrade engine in a mode that was still safe for dry-run work and did not perform live execution. Then came the run starter, live table-definition reads, table morph execution, and index handling. The next step was the verified run: UPD structurally reproduced the 10.01 -> 10.11 golden upgrade in all 13 out of 13 statements.

This does not mean UPD is now a production-ready update module. The documentation keeps the boundaries explicit: the run was on a disposable database, parts of the protocol still have open byte-parity work, and bulk password conversion belongs in the shared SPOL/SPK layer rather than in a local UPD duplicate. But the progress is substantial: this is no longer only a model, parser, or dry-run. There is a verified path against a real database copy.

For NEO_HEF, this is a milestone beyond UPD itself. It demonstrates a general pattern for safely verifying destructive operations: a restorable copy, explicit production guardrails, comparison against a legacy golden protocol, and independent validation.

### UIR Has a Complete and Validated Implementation Plan

UIR, the territorial identification register, moved this week from legacy code analysis into a complete implementation plan. The previous week was mainly about the dissection itself. This week turned it into an executable migration plan.

The plan is broad: it covers 34 steps, menus, forms, print paths, settings, the active desktop, help, shared components, risks, and testing obligations. The key conclusion is validation: after corrections, the plan was marked executable. The review added missing task fields, aligned responsibilities, and verified that the plan is not only a wishlist, but a practical work basis.

UIR is therefore now in a state where implementation can begin. For a legacy module this large, that distinction matters: instead of jumping directly into code, the team now has a working map that reduces the risk of surprises later in the project.

It is also notable that the UIR plan actively separates what should be shared from what should remain module-specific. Help, reports, active desktop behavior, and settings all connect to SPOL and to lessons from RZP, UCV, and UPD. That is the factory approach in practice: every next module should not reinvent capabilities that have already been solved elsewhere.

### Safe Data Became Its Own Topic

Alongside module work, the team spent significant effort on safe database handling. The database anonymization apparatus was added and refined, including a separate audit that checks whether a resulting copy is truly anonymized. Older exploratory scripts were removed from the documentation because, after the GDPR audit, it was clear they could leave personal data behind while still looking usable.

This matters more for ERP migration than it might seem. AI-driven development needs realistic data; otherwise it will not reveal defects in statements, rights, codebooks, or reports. At the same time, it must not work with personal data without control. The project is therefore building a path where teams can get useful test copies and also verify that sensitive data did not remain intact.

The same category includes work on database-transfer tooling and performance benchmarking. These are not end-user features, but they are infrastructure needed to verify migrated modules reliably across environments.

### Release 10.01 Remains Stable

The `release/10.01` branch in NEO_HEF did not receive any commits this week. In context, that mainly confirms that new development is not being mixed into the stabilized line.

`release/10.01` is meant to preserve the delivered state of the older version. New UCV parity work, UPD verification, the UIR plan, and general QA tooling belong in `develop`. That keeps a clear boundary between maintenance and further development.

### Why This Week Matters

Week twenty-one shows NEO_HEF as a project now clearly running on several parallel tracks. UCV is moving closer to handoff quality through concrete parity and E2E scenarios. UPD shows that even destructive database operations can be verified in a controlled and safe way. UIR has a plan before large-scale coding begins. RZP continues to provide testing and process patterns.

For HAIFA, this is a meaningful shift. This is not just another set of commits in one module. It is the ability to migrate an old ERP system repeatably: with live evidence, safe data handling, separation of stable release branches from development, and a plan concrete enough for both agents and people to execute.

[Home]({{ '/en/' | url }})
