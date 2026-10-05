---
title: "Week Twenty-Nine - UCV Verifies Complete Outputs, UPD Prepares for the Pilot, and UIR Expands Address Tools"
date: 2026-09-27
week: "Week Twenty-Nine"
period: "September 21, 2026 - September 27, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w39
permalink: /en/posts/neo-hef-2026-w39/
summary: "Ahead of the planned UCV and UPD pilot, the team expanded actual printing paths, compared complete summaries with the original Fenix, and fixed functional and visual defects. UIR meanwhile completed more tools for territorial and address data."
---

## Summary for Non-Technical Readers

Week twenty-nine of the NEO_HEF project focused on preparing UCV and UPD for pilot testing. UCV, the accounting statements module, expanded support for current and historical print outputs. UPD, which handles database upgrades and maintenance, received fixes needed before handover and improvements to its controls.

The most valuable results came from comparing complete outputs of the new application with the original Fenix. For historical statements, some database queries turned out to prevent printing altogether. For summaries covering multiple organizations, closer inspection found missing consolidation and an incorrect order of organizations in the columns. These defects were fixed before the planned pilot.

Work also continued on UIR, the Territorial Identification Register. Completed tools now cover adding parcel numbers, municipality information, the municipality orientation system, and installation identification. Migration advanced toward both the next handover and the next module.

## What Happened

During September 21–27, 2026, work concentrated on actual user workflows: assemble a statement, print it, save the correct data, open a maintenance form, and verify that the result matches the original application. Older years and batch operations received particular attention, because a simple test of one report can easily miss real usage.

### UCV Expands Printing Across Years and Statement Types

Printing block H, which prepares statement content for printing, gained further concrete integrations. The Balance Sheet, Income Statement, and Auxiliary Analytical Overview gained typesetting for 2010–2025. Support for the Notes to the Financial Statements also expanded, although 2014–2017 remained excluded. Subsequent work added more accounting and financial statement types and their headers.

The team also refined how it describes coverage. A completed row typesetting function does not establish that a particular statement uses it. What matters is connecting the entire path and comparing its result with the original Fenix output. Alongside implementation, the team therefore added reference captures of actual prints for different types and historical period boundaries.

Live verification of prints from 2001–2009 found defects in eight print-template readers. Queries attributed some columns to the wrong table, causing printing to fail on the first batch item. Fixes also covered the municipality source in the header, integration of the official financial statement header, and date formatting. A reference capture containing 6,512 rows now allows these outputs to be checked again.

### Comparing the Whole Summary Found Defects That Header Checks Missed

A summary combines statements from several organizations. Previous comparisons against its reference captures checked only a few header rows per page. A new test followed the production path from the form and compared the entire print content, including data rows.

This revealed three specific defects. Descriptive codebooks were loaded using the wrong key, organizations appeared in a different column order from the original dialog, and the district or region consolidation recalculation had not yet been ported. All three were fixed. Additional district and region captures help verify the differences between the two modes.

Batch printing also gained correct separation by individual statement and pagination of classic reports based on page height. Older dialogs gained a progress window and the option to interrupt a batch. These changes matter in everyday work with larger volumes of data.

### Database Queries, Permissions, and Progress Windows Are Verified Together

Checking SQL against the actual schema fixed, among other things, the query for the costs and revenues chart on the active desktop. It also expanded verification of branches that previous tests had not exercised, including license restrictions on the organization list.

A further audit aligned the statement overview with the original filters, corrected when Notes text is copied relative to saving, and fixed assembly behavior for statements containing only zero rows. In the shared SPOL layer, event timestamps were aligned with the database server, and retries for failed event-log writes were corrected.

Live runs also found statement-import progress windows and a second control-report window being created outside the UI thread. Fixes addressed specific causes of instability in those paths. The team also refined capture tools so that helper processes would not remain running and individual measurements would not overwrite shared settings.

### UPD Completes Pre-Handover Fixes and Refines Its Controls

The pre-release fixes addressed behavior when index creation or data loading fails, among other issues. The backlog was also checked against the current code: some items required a fix, others were already complete, and others had an explicit decision on how to proceed. Closing a backlog entry therefore does not by itself mean a new feature was delivered.

UI work covered initial focus, navigation order, selection buttons, field borders and backgrounds, form centering, progress windows, and the differences dialog. Overlapping labels and the table list were also corrected. The final test gate for the second wave of these changes recorded 2,678 passing tests, no failures, and 13 skipped cases; that run did not include application-wide E2E tests.

### UIR Advances from Codebooks to Address Data Workflows

On September 24 and 25, phases C1 and C2 reached the main development branch. Work expanded address objects and related tools. Adding parcel numbers, municipality information, the municipality orientation system, and the identification codebook each received separate sign-off.

The scope of each result matters: address objects still depend on verification against the basic registers, so completing the surrounding tools does not close the whole area. UIR is nevertheless forming a broader workflow that builds on the previously migrated codebooks.

### Why the Week Matters

Pilot preparation delivered user-visible fixes and stronger evidence of quality. For HAIFA, Helios AI Factory, the key point is that directing AI agents includes verifying the actual result. Complete prints, real database queries, and form workflows revealed defects this week that narrower checks had missed.

[Back to the homepage]({{ lang | homeUrl | url }})
