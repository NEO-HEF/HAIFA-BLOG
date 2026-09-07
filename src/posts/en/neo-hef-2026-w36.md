---
title: "Week Twenty-Six - UCV Removes Its Last Placeholder Paths, UPD Connects to Automatic Updates, and UIR Builds Address Objects"
date: 2026-09-06
week: "Week Twenty-Six"
period: "August 31, 2026 - September 6, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w36
permalink: /en/posts/neo-hef-2026-w36/
summary: "Week twenty-six removed the last known placeholder paths in UCV, connected UPD to the unattended Automatic Updates flow, and brought a substantial address-object area into UIR."
---

## Summary for Non-Technical Readers

Week twenty-six of the NEO_HEF project brought substantial progress in three different areas. UCV continued closing its last known implementation gaps, UPD connected to Automatic Updates, and UIR gained an extensive foundation for working with address objects. Each module is at a different stage, so what can be considered a demonstrated result after this week differs for each of them.

UCV advanced furthest in this respect. The team reviewed the remaining active places where the application could still tell users that part of the original behavior had not yet been ported. The additions included the import of historical statements, opening-balance checks for the Balance Sheet and Notes, JASÚ output, report R63, overview prints, total-row validation, and other handlers. As a result, no normally available option in the pre-2010 statement overview now ends merely with a notice that its original function has not yet been ported.

This is not yet the same as approving UCV for release. The standard test suite completed three consecutive runs with 11,117 passing tests, no failures, and 21 skipped cases. Further work is shifting mainly toward live comparison with the original application and closing the remaining release conditions.

UPD connected to Automatic Updates. In unattended mode, the module can now accept session details, connect to the database, report progress back to the service, and automatically start the same upgrade that had previously been available only interactively. Errors in this mode no longer stop at a dialog that nobody on a server could confirm; instead, they are written to the log and the process returns an exit code. A full live run against the designated restorable database is still pending, so the integration is complete while an operational gate remains open.

UIR brought over a substantial address-object area: data layers, search, object creation and editing, history, bulk operations, and an overview of other addresses belonging to the same building. The individual parts have their own tests and together form a foundation for subsequent integration, user-facing wiring, and final sign-off. This reflects how UIR is being migrated: in coherent layers that are gradually assembled into the complete module.

The shared login flow improved as well. The port now handles one-time passwords, mandatory password changes, and warnings about approaching password expiry more faithfully. Alongside the week's main themes, there was also a smaller addition: SPOL learned to read mail passwords stored by the original Fenix, and the less frequently used “Electronic Mail” option was connected to RZP's print paths.

## What Happened

During the week from August 31 to September 6, 2026, the `origin/develop` branch gained 309 commits, including 82 merge commits. The `origin/release/10.01` branch received two targeted changes: cleanup following an earlier backport and a packaging fix for supporting Crystal libraries. The main development effort continued in UCV, UPD, UIR, the shared login layer, RZP, and distribution-process documentation.

### UCV Removes the Last Known Missing-Port Notices

Last week completed the basic implementation of historical statements from before 2010. A subsequent inventory corrected the overly optimistic assumption that only JASÚ output remained in this area. Fourteen active handlers still contained placeholder notices about unfinished migration. Rather than treating them as one anonymous remainder, the team traced the original routine, reachability, and actual scope of each one.

JASÚ output reached `develop` during the week, including data reading, family-specific emitters, organization files, a manifest, printing, and sending. The team also added total-row checks, ARIS and JASÚ statement import, opening-balance checks for the Balance Sheet and Notes, the Ministry of Education check, the section X summary for statement 40U, report R63, and the accounting-statement recap print. Further corrections covered the selection of mandatory statements that had not yet been submitted, historical dialogs, relationship tolerances, relationships between statements, server time for stored flags, and exact message captions.

This marks a significant implementation boundary: all eight items identified by the final review of active gaps are now in `develop`, and the helper notice about a missing port no longer has a production path from the historical overview. This does not mean that UCV has no open items. It means that known active functions are no longer replaced by a simple “the port is missing here” notice, allowing further work to focus on parity, live verification, and defects found during use.

### Live JASÚ Verification Finds Problems Beyond the Emitter

The historical JASÚ output also received a live test using available data. The emitters themselves behaved correctly against the reference snapshots, but the run uncovered three defects on the reading side. This distinction matters: correctly converting data into an output format does not help if the application first reads the wrong value variant or retrieves it through an unsuitable database conversion.

Verification of the text sections of the Notes was strengthened in a similar way. A consuming test that follows the actual production path for a specific historical slot was added to the earlier reference snapshots. QA also stored a broader set of reference artifacts for statements, year-specific reports, and relationship definitions. A reference image or text is therefore not merely a documentation attachment; it becomes an input for repeatable comparison between the new and original applications.

After the changes were merged, the main UCV unit-test suite was run three times in succession. Every run discovered 11,138 cases: 11,117 passed, none failed, and 21 were skipped.

### UPD Can Accept an Unattended Upgrade from Automatic Updates

Previous live verification of UPD began directly in its user interface. Real operation also has another path: the Automatic Updates service must launch the module without a person present, pass it a session, and receive ongoing progress information.

This chain was assembled link by link during the week. UPD can accept a session descriptor from the shared layer's secure storage, load the supplied connection, and open the required database context. It sends frames containing comments and completion percentages back to the service through a named pipe. It then invokes the same confirmation form and upgrade engine used by the interactive path, but does so invisibly and without confirmation dialogs that would block an unattended run.

The error paths received particular attention. Interactive mode retains the dialog familiar from the original application. In auto-run mode, the reason is written to the log and the process ends with an exit code. Validation found several places where the original implementation could merely appear to provide truthful evidence: a log write could fail while the test-facing surface still reported success, for example, or the same error sentence could be written twice. The corrections preserve fail-silent behavior for older callers while giving the new error channel a real answer about whether the write succeeded.

The automatic chain is connected and covered by tests. A manual full run by the owner against the designated restorable database remains open.

### UIR Builds a Substantial Address-Object Foundation

Step S16 brought a major part of address-object functionality into UIR. It added repositories and mappings for current and historical data, search and edit forms, history browsing, bulk changes, further bulk operations, and a dialog showing other addresses belonging to the same building. Live schema checks confirmed the expected structures of three key tables, including a difference in the width of one historical field that could easily have been lost through mechanical unification.

The individual parts already have a fairly extensive set of tests, and the aggregate UIR suite finished with 1,561 passing tests. Mutation verification deliberately introduced ten different errors, all of which were caught by the corresponding tests. The step is recorded as implemented and awaiting sign-off; further integration into complete user workflows will continue in subsequent migration stages.

The week's scope should therefore be understood as a substantial implementation foundation, not as completion of the entire UIR area. The data operations, forms, and address-object rules now have concrete implementations and verification. Their integration into other parts of the application will continue as the related module steps are developed.

Two further boundaries are deliberate. GIS transfer ended with an investigation and awaits an owner decision on whether the feature should be retained or dropped. Address selection from the RÚIAN register depends on later steps for the connector and related forms. Address-object print reports belong to the separate S26 step.

### The Login Layer Catches Up on One-Time Passwords and Expiry

The shared client layer added several linked branches of password-policy behavior. A one-time password is now recognized even in a configuration where the general temporary-password policy is disabled. When the state requires a password change, the application opens the actual password-change dialog and correctly invalidates the one-time flag after success. The same rules now apply in the simplified login branch as well.

Users whose regular passwords are approaching expiry are offered a direct path to change them. Tests also ensure that this warning is not shown for a one-time password state and that the port does not invent behavior absent from the original application. These may look like small screens, but they form a state machine that directly affects the ability to log in. Its individual branches are therefore ported and verified separately.

### A Smaller Addition: Electronic Mail from RZP

Away from the main workstreams, the team also completed the less frequently used “Electronic Mail” option in RZP's print dialog. This is not a core module capability, but a practical completion of one of its secondary output options.

SPOL gained a compatibility layer for decrypting the password from the original Fenix mail configuration. RZP then received the required connection of the shared sending service to its print paths. With both parts in place, version 10.11 successfully sent mail from both the report configuration form and codebook printing.

### Distribution Gets a More Precise Diagnosis of Server Behavior

Investigation of MSIX installation on Windows Server corrected an earlier assumption that the system could not activate the application. An experimental Launcher successfully started the module when the `PackageStatus.VerifyIsOK` check was disabled. On the tested Windows Server 2022 system, this check returned failure even though the package had been found and the application could be activated.

The production state has not changed. The check is part of the Launcher, and the decision about its behavior belongs to the Launcher's owner. The result does narrow the problem: it is not a general inability of the server to launch an MSIX application. The path for unattended installer startup remains open separately. The documentation also confirmed that the installer can already save a machine-readable JSON summary to a specified path, which is more suitable for a server run than relying on standard output.

### Why the Week Matters

Week twenty-six showed several forms of gradual migration. After a broad round of feature completion, UCV is moving increasingly toward live comparison and closing parity evidence. UIR is assembling another major domain area from data layers, forms, and rules. UPD is connecting its existing upgrade engine to the operational world of Automatic Updates.

The week continued HAIFA's established way of working: individual layers are built gradually, and each is verified in a way appropriate to its stage. The most important developments this time were the completion of UCV's known implementation paths, the creation of a large part of UIR's address-object area, and the connection of UPD to Automatic Updates.

[Back to the home page]({{ lang | homeUrl | url }})
