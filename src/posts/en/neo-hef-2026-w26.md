---
title: "Week Sixteen - RZP Closes and the Next Modules Start Moving"
date: 2026-06-28
week: "Week Sixteen"
period: "June 22, 2026 - June 28, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w26
permalink: /en/posts/neo-hef-2026-w26/
summary: "Week sixteen was the final push for RZP before the official June 30 handoff: parity details, reports, E2E tests, and release work were polished, while UCV moved into more concrete implementation and the roadmap opened further streams around 10.11, SPOL, and UPD."
---

## Summary for Non-Technical Readers

Week sixteen of the HAIFA project was the last week before the official handoff of the first completed RZP module. It was not a week of large new features. It was a week of aligning details that decide whether the migrated module behaves like the original Fenix even in less visible situations.

In RZP, the team fixed messages, search behavior, empty codebooks, ODKUD/KAM field behavior, closing forms with Escape, locks around recipe work, and the last visible report differences. This kind of work often looks small, but it matters to users. If the original system showed a message for an empty list, the new version must not silently show an empty table.

It is also important to say what changes with this week: RZP is no longer being treated as an ordinary open development module. On June 30, 2026, the completed RZP module migrated from legacy version 10.1 was officially handed over. Further work in this line should be hotfixes and a controlled move toward the 10.11 legacy baseline, not an expansion of the original scope.

At the same time, the project began shifting toward other streams. The 10.11 legacy baseline was added to the repository, release management gained rules for distributing 10.1 and 10.11 side by side, and UCV moved from experimental work into more concrete implementation over live data services. The roadmap also now includes UPD, the database upgrade module.

In other words: RZP reached its handoff milestone, and HAIFA is starting to look less like a one-module project and more like a migration factory that must handle additional modules as well as ongoing changes in the original product.

## What Happened

During the week from June 22 to June 28, 2026, the updated local mirror of the `NEO_HEF` repository shows 109 commits across branches. On the main `develop` branch, 64 commits and 38 significant merge points landed. The active days were mainly Monday through Friday, June 22 to June 26.

### RZP Was Polished as a Handoff Module

The most visible part of the week still focused on RZP, but the nature of the work changed. The team was not opening new scope. It was aligning final behavior with legacy.

In codebooks and recipes, the team handled situations users notice immediately: a duplicate recipe sequence number must no longer fail silently, an empty codebook must show the expected message, the error message when saving an account must have the right icon and title, and forms must close with Escape where the original application allowed it.

ODKUD/KAM fields were also made more precise. The team aligned Su/Au field widths, values containing `X`, zero padding, and the coupling between synthetic and analytical accounts. These are exactly the details where the new application could otherwise look almost the same, but users would hit a difference during real work.

RZP also gained changes around locking and E2E testability. For an ERP module, that is practical. It is not enough for a function to work for one user in a clean scenario. The module must also respond reasonably to concurrent work, blocking, and test environments where some scenarios should be skipped correctly rather than fail falsely.

### Reports Received the Last Visible Fixes

Another major stream was reporting. The team adjusted placement of year and level on the same line, report headers, overly long percentages, totals in report 21, pages containing only a bottom-line overflow, and cosmetic details in overviews.

That may sound like layout work, but in Fenix reports are part of the working result. Users often do not only take a number from the screen; they work with printed or exported output. If a change affects a header, totals, or pagination, it is as real a difference as a dialog bug.

That is why these changes were also backed by tests. Report tests were added for subtotals, empty sections, headers, and print configuration navigation. RZP continued moving from "the report is generated" toward "the report matches what users expect from legacy."

### Test Suites Stabilized Before Handoff

E2E testing was also stabilized during the week. Fixes landed for owner preconditions, dead or replaced E2E skeletons were removed, and test warnings were cleaned up. The RZP test suites were completed to 165/165, covering the planned catalog of test scenarios for the handoff scope.

For a public summary, the important point is that testing is no longer an add-on to development. In RZP, it became part of the handoff logic. The module is not judged only by how many screens were rewritten, but by which workflows, reports, codebooks, imports, and edge cases are covered by tests or consciously classified.

### Release Management Prepared for Both 10.1 and 10.11

Multi-version distribution was added to release-management documentation. In practice, the project now expects Fenix 10.1 and Fenix 10.11 lines to exist side by side. Packages for different lines should have different identities, so they do not become a silent automatic upgrade where a controlled transition is actually required, including database and module changes.

This is important for RZP. The first handed-over module is based on legacy version 10.1. Meanwhile, the 10.11 baseline has been added to the repository, and the project must be able to clearly distinguish what belongs to a hotfix in the delivered 10.1 line and what belongs to the controlled move toward 10.11.

### UCV Moved From Experiment Toward Production Work

Alongside the RZP finish, work continued on UCV, the Reporting module. In the working branch, the team added financial reporting for municipalities, Dapper writes and reads for statements, File2Db work with SUZ attachments, saving SUZ statements, UI wiring for attachments, and more production-like Dapper providers for validation rules.

The current UCV handoff records a green baseline of 2,201 passing tests, 0 failures, and 6 skips. At the same time, it honestly states that some areas are not yet closed for parity: subtotal relationships, for example, still need the recompute approach based on legacy behavior, and part of live parity requires a running legacy `Ucv.exe`.

That is a healthy state. UCV is no longer just the name of the next module in the roadmap, but the team is also avoiding the mistake of calling something complete when it is still only in progress. After RZP, the difference between implementation, wiring, tests, and parity evidence is much more visible.

### The Roadmap Now Shows Additional Streams

This week, the migration roadmap marks not only RZP and UCV as active, but also SPOL and UPD. SPOL represents the shared libraries and components that future modules will stand on. UPD is the database upgrade module, an area required for controlled transitions between versions.

This shift matters. Once the project has its first delivered module, it is not enough to keep rewriting the next screen. The team must maintain shared libraries, absorb a new legacy baseline, prepare database upgrades, and start the next module in a way that does not rediscover the same patterns from scratch.

## Why This Week Matters

Week sixteen was a transition week. During it, RZP was effectively being closed for the handoff that followed on June 30, 2026. Further work around RZP should now run in a different mode: hotfixes for the delivered 10.1 line and a controlled move toward 10.11, not continued open development of the first module.

At the same time, the week showed how the project will need to behave next. UCV is already running as the next large module, UPD enters the picture because of database upgrades, and SPOL/SPK must be raised so the shared layer matches the newer legacy world.

So this week was not only the RZP finish. It was the first sign of HAIFA's next phase: turning one successful migration into a repeatable process that can handle additional modules and the continuing evolution of the original Fenix.

[Home]({{ '/en/' | url }})
