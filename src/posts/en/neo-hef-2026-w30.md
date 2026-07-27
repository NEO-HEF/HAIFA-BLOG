---
title: "Week Twenty - UCV Catches Up on User Paths, and UPD and UIR Are in Motion"
date: 2026-07-26
week: "Week Twenty"
period: "July 20, 2026 - July 26, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w30
permalink: /en/posts/neo-hef-2026-w30/
summary: "Week twenty moved UCV from integrated code toward usable screens, verified vault-based module startup under the Launcher, and expanded the preparation of UPD and UIR."
---

## Summary for Non-Technical Readers

Week twenty of the NEO_HEF project was not about one large handoff. It was more about several important parts starting to behave like a real system: the UCV module gained concrete user screens and workflows, the shared Launcher was verified together with the vault, and the 10.11 line moved from preparation into more practical verification.

For UCV, the most important shift is the character of the work. In the previous week, the module entered the main `develop` branch. This week followed up with changes to forms, grids, menus, editors, checks, and outputs. These are the things ordinary users notice more than the merge itself: a screen opens correctly, a menu does not overlap the content, records can be edited, checks make sense, and outputs move closer to legacy behavior.

At the same time, startup under the Launcher was verified in practice. The Launcher is not Fenix as a whole; it is the shared shell into which individual modules are embedded. This week advanced the handoff of session data through the vault, so a module started under the Launcher can receive login context more safely and without depending on a file-based session. It also matters that standalone module startup remains intact.

The older 10.1 line remains a maintenance line, and the `release/10.01` branch in NEO_HEF did not receive new development this week. That is the right division of roles: the stabilized branch preserves the delivered state, while new work continues in `develop`.

Two other important preparations also moved forward. UPD now has a safe runtime foundation for dry-run and read-only scenarios, and UIR went through a broad dissection of the legacy code. Neither is a finished migrated module yet, but both show that HAIFA is gradually extending the factory-style way of working to more parts of Fenix.

## What Happened

During the week from July 20 to July 26, 2026, after updating the remote branches, the `NEO_HEF` repository shows 114 commits on `origin/develop`, including 32 merge commits. The `origin/release/10.01` branch did not receive any commits during the same period.

### UCV Moved from Integration Toward Usage

For UCV, this week was no longer mainly about whether the code had been merged into `develop`. The focus moved to whether the module can be used in concrete screens and scenarios.

The week's history contains many small but user-relevant fixes: menu overlap, grid layouts, SOR mode, period and company-number pickers, the indicator editor, subtotal rows, saving multiple changes at once, and displaying action columns in checks. None of these items looks like a major milestone on its own. Together, they form exactly the layer that decides whether a ported module feels like a usable application.

There was also significant work on the statement 10 editor. Multi-column scenarios, admissibility rules, text rows, recomputations, and verification against more realistic user paths were added. This is a shift from a mechanical port toward real behavior parity.

UCV still should not be described as a finished delivered module. The reconciled status documentation as of July 22 shows a very strong test base, but it also names the remaining parity and verification steps: byte-golden outputs, selected live-DB round trips, report-worker deployment, MSIX verification, and several owner decisions.

### UCV Checks and Outputs Became More Concrete

An important part of the UCV work concerned checks, reports, and exports. The `VazbyRule` rule was wired into the live check engine, so it is no longer only a separately tested model outside the running application. The S147 and T147 report feeds, check protocols, Crystal report handling, and print-buffer routing also moved forward.

For exports, the completed IRES output for CSUIS in the 545-character format is significant. By contrast, the JASU export was removed from UCV as dead code for 10.11. That is an important kind of decision: migration should not blindly carry over everything that existed in the legacy code. It should distinguish live behavior from historical residue.

Work also continued on charts through ScottPlot. Here again, the important distinction is not "we can draw something" but "we can draw it in the context of real data and a user scenario." That is why the documentation still keeps follow-up work around live sources and parity.

### Launcher and Vault Passed Practical Verification

Alongside the modules themselves, work continued on shared startup. The Launcher, `SpolecnySpoustec`, gained support for vault-based session handoff into NEO modules. A module started under the Launcher can receive a short descriptor instead of a classic file-based session, and the actual session data is retrieved through the vault path.

On the module side, the solution was implemented in the shared layer, not separately in each module. That is the right direction: RZP, UCV, and future modules should share the same mechanism instead of each carrying its own variant of integration code.

Practical verification also covered the related OOU scenario. A module started under the Launcher and through the vault could open OOU with silent login and data. At the same time, the older path for standalone startup remained preserved, without using VaultServer. From a public perspective, the main point is that the project does not break dual startup: a module must work both standalone and under the Launcher.

### RZP 10.11 Moved Forward in Tests

RZP now has a different role in the project than UCV. It is not the main new migration focus of the week, but a reference module used to verify the release process and automation.

In `develop`, RZP E2E tests moved forward for 10.11. Two previously manual scenarios were moved into automation, and owner selection became more robust. Such changes are not visible in a marketing sense, but they are essential for controlled releases: the more repeated checks are handled by automation, the less the release depends on the team's manual memory.

RZP therefore continues to help maintain the boundary between the stabilized 10.1 line and new work for 10.11. The project is not relying only on functional changes in the module, but also on the ability to verify those changes repeatedly.

### UPD Is No Longer Just an Item in the Plan

UPD moved this week into the phase of a safe runtime foundation. A new module tree was added, along with startup-mode routing, `DryRun` and `InventoryOnly` support, a login path into a connected MDI shell, and read-only scenarios over live data.

This must be read carefully. UPD is not a production-ready update module yet. On the contrary, the documentation repeatedly emphasizes safety limits: no production DDL/DML, no actual database mutations, and a strong separation between dry run and future live execution.

That caution is good news. The update module is a sensitive part of the system because it deals with database structure and versions. The team is therefore first building an observable and testable foundation: shell, login, read-only inventory, golden capture of statement order, and a disposable-DB harness. Only on top of that does it make sense to address actual execution.

### UIR Has a Completed Dissection Before Migration

For UIR, this week was not about implementing a new NEO module, but about completing the analysis of the legacy code. UIR is the territorial identification register, and according to the validation report its code dissection passed as a usable input for further work.

The scope is large: 208 live files, 3,908 behavior-bearing handlers and procedures, seven shards, and complete indexing of the main parts. The number itself is not the main point. What matters is that future implementation does not have to start from a guess. It has a structured basis for planning, risks, and migration order.

This is another example of HAIFA's factory approach. One module is being finished in user-facing details, another holds the release process, another receives a safe runtime skeleton, and another is being prepared through deep analysis.

### Why This Week Matters

Week twenty shows NEO_HEF as a project that no longer runs on a single track. RZP holds the role of a stabilized reference module. UCV is changing from integrated code into a usable module with concrete screens, checks, and outputs. The Launcher and vault address the environment in which modules will run in practice. UPD and UIR expand preparation into further areas of Fenix.

For HAIFA, this is more important than the commit count itself. The goal is not only to rewrite another piece of code. The goal is to build a way of working in which an old ERP system can be migrated piece by piece, with evidence, safety guards, and automation.

[Home]({{ '/en/' | url }})
