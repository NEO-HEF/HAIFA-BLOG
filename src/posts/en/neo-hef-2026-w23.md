---
title: "Week Thirteen - RZP Reports Move Closer to a Pilot"
date: 2026-06-07
week: "Week Thirteen"
period: "June 1, 2026 - June 7, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w23
permalink: /en/posts/neo-hef-2026-w23/
summary: "Week thirteen moved RZP forward mainly in printing and reports: more print routines were added, report-content parity was improved, E2E testing grew, menu permissions became more precise, and SPOL added shared dialogs for progress and errors."
---
## Summary for Non-Technical Readers

Week thirteen of the HAIFA project focused heavily on RZP, especially printing, reports, and verification against the original application. This is an area where opening a window and showing some data is not enough. Accounting reports must match in content, totals, pagination, headers, footers, exports, and also in what happens when printing on a clean machine or from an installed version.

According to the current management summary, the RZP printing and reports step is roughly 90% complete. It is already sufficient for a supervised pilot, but before full deployment the team still needs to verify less common variants, narrow report layouts, part of the Excel exports, and one special codebook for the allocation recipe “from-to”.

QA also moved forward significantly. More robust E2E test suites were added, together with a scenario catalog and guidance for running and extending tests. The RZP catalog now contains 86 E2E scenarios, 48 of them marked as implemented. This matters because a legacy ERP migration cannot be controlled over the long term by manual clicking alone.

In the shared SPOL layer, the team added common dialogs for progress, waiting, unexpected errors, and opening Helpdesk. These are not as visible as a new functional screen, but they are important for consistent behavior across Fenix modules.

The week also brought practical usability fixes: global Cut/Copy/Paste in RZP and UCV, Enter without an unnecessary beep, better form relayout after resolution changes, and more precise menu behavior based on the selected owner and permissions.

## What Happened

During the week from June 1 to June 7, 2026, `45` changes were merged into `develop`. Unlike some earlier weeks, this was not mainly about starting a new area. It was more about bringing several ongoing streams into a more practical state.

### RZP Printing and Reports Got Real Content

The biggest topic of the week was RZP-S04, printing and reports. The module can now work with report families 21, 22, 23, 24, and 29: the user sets criteria, period, level, dimensions, and output mode, and the application prepares a preview, print, file output, or Excel export.

The important point is that the work went beyond simply calling a report. The team entered the layer of real content parity. Fixes covered aggregation across multiple periods, grouping rows by dimensions, cost and revenue totals, sections such as `Uz`, pagination, footers, and report width. Some fixes appeared only after visual comparison between the new and legacy applications showed that a technically working output was still not good enough.

Next to overview reports, print routines were added for more RZP screens: the cost and revenue accounts codebook including detail, owner codebook, definition sentence codebook, received-data list, and allocation selection and results. This moves RZP from individual working forms toward more usable work scenarios.

Practical defects in allocation itself were also fixed: calculations in the allocation recipe KAM, rollover logic in allocation execution, and other details around reading data and results. These are exactly the places where the migrated application has to behave like a working tool, not a demo.

### Report Distribution Got Closer to Real Installation

The work also reflected experience from the prepared MSIX distribution. Reporting can no longer assume that a client machine has the original legacy MSI installation or manually copied helper files.

That is why the team addressed bundling the report worker, deploying `NeoFenixpom.mdb` as content, and finding templates even on a clean machine. The installation-prerequisites documentation now explicitly says that `NeoFenixpom.mdb` should no longer be copied manually. This is a small but important step toward modules that can really be installed and updated in a standard way.

### Permissions and Owner Context Became More Precise

RZP also improved permission handling. The Reports menu and other top-level menu items now follow the legacy rule more closely: having permission is not enough; an owner must also be selected when the original application required it. The same principle applies to GDPR items.

This is less visible than a new report, but it is essential for ERP operation. The application should not offer actions that do not make sense in the current context or that the legacy version would not have allowed. The team is again returning to the main migration rule: avoid creative extra behavior and stay close to the original Fenix.

### QA Is Turning Into a Systematic Scenario Library

The QA team expanded RZP E2E testing. New test suites were added for allocation recipes, levels, source accounts ODKUD, target accounts KAM, recipe copy, search, and other scenarios. Some suites now have XLSX source materials, machine-readable JSON definitions, E2E catalog entries, and corresponding C# tests.

A clearer guide for running QA was also added: smoke, unit, E2E, filtered runs by epic or suite, isolated builds, and reports. The practical value is straightforward: when a specific form or workflow changes, the team does not have to test blindly. It can run the relevant part of the catalog and gradually build evidence that the new version still works.

The current RZP E2E catalog contains 86 scenarios. This is not yet a complete testing network, but it is already a foundation that can grow with the migration and provide firmer support than manual checks after every change.

### SPOL Added Shared Dialogs and Error Flow

Work continued in the shared SPOL layer on user dialogs that other modules will also need. A shared progress dialog based on legacy `SPHZPR`, a detail waiting/throbber dialog based on `SPHZTL` and `SPHZBT`, and a shared unexpected-error dialog were added.

The error flow can now show error details, offer copying, handle application termination or restart, and in the newer version of the `Helpdesk...` button open a web Helpdesk. What matters is that SPOL builds these things as shared components. RZP and later modules will not have to recreate them and can follow the same behavior.

### Everyday Interaction Was Polished Further

Alongside the larger topics, the team fixed things users notice immediately. Global Cut/Copy/Paste now works more consistently in RZP and UCV. Enter is no longer unnecessarily tied to a beep. Forms with dimensions relayout better after resolution changes.

The Settings form also came to life, including effects on active-field colors, dimension labels, and report behavior. In allocation recipes, messages and validation were corrected so the application behaves closer to the original Fenix when errors occur.

## Why This Week Matters

Week thirteen showed how demanding the phase after “it runs” really is. RZP already has many functional parts, but reports and printing make it clear that real migration means precise totals, the same sections, the same pagination, the same outputs, and the same operational assumptions.

The good news is that the project moved closer to pilot usability. More importantly, the infrastructure around implementation is also becoming stronger: the E2E catalog, QA workflow, shared SPOL dialogs, and installation assumptions for the MSIX world.

Open points remain. Not every report variant has been verified one by one, some Excel exports need more checking, and some special screens are not yet as faithful as the more common scenarios. The direction is clear, though: the team is moving from form conversion toward an application that is verifiable, installable, and usable in a supervised pilot.

[Home]({{ '/en/' | url }})
