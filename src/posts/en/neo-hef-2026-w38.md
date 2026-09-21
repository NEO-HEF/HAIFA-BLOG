---
title: "Week Twenty-Eight - UPD Builds a Database Through Admin Creation, UCV Opens Older Prints, and QA Expands Live Testing"
date: 2026-09-20
week: "Week Twenty-Eight"
period: "September 14, 2026 - September 20, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w38
permalink: /en/posts/neo-hef-2026-w38/
summary: "Week twenty-eight connected all five phases of UPD database creation through administrator setup, substantially expanded real UCV statement typesetting, and turned new E2E suites into concrete fixes for Launcher startup and other operational paths."
---

## Summary for Non-Technical Readers

Week twenty-eight of the NEO_HEF project showed how several separate technical components become a usable operational path. This was clearest in UPD, the database upgrade and maintenance module. At the beginning of the week, its `/reg` registration mode could offer empty-database creation, but the process itself was not connected. During the week, all five main phases were wired up: dropping old objects, creating tables, creating views, registering application tasks, and creating the administrator account.

This is not yet confirmation that UPD is ready for release without further conditions. A live run proved the creation of 1,128 tables and 57 views; subsequent work executed all 22 registration commands, and the final phase created an administrator account for the first time. Maintenance branches not used by the shipped change file remain open, as does a complete comparison of the result with the original Fenix. The team therefore closed specific blockers rather than applying an optimistic completion label to the entire module.

UCV, the accounting statements module, focused on printing parity and live verification. Detailed measurement revealed that the new typesetting path had been used for only 8 of 3,084 assembled statements in real data. The rest ended in a visible placeholder output. A new capability gate no longer decides solely by year. For each statement type, year, and period, it checks whether the new engine supports every required row type. That change alone opened real typesetting for 1,183 statements, or 38.4 percent of the measured sample, while the team also completed all previously missing text-row emitters.

Other UCV work targeted what users actually see. The active desktop stopped displaying design-time placeholder values and now loads real data. Live verification of the statement editor covered statement creation, displayed text, admissible-row validation, and saving a multi-column value back to the database. It found eight defects—from opening the wrong form through a broken exit path to covered buttons—and all eight were fixed in the same run.

Automated E2E testing, which exercises complete user scenarios in a running application, also expanded substantially. A shared batch delivered 41 new E2E suites for UCV, UPD, and the shared SPOL layer. The UCV catalog alone now describes 394 scenarios. A much larger foundation of unit and integration tests runs alongside this layer: during the week, the main module suites reported, for example, 12,679 UCV tests, 2,521 passing UPD tests, and 3,395 passing UIR tests. The E2E suites were not passive documentation: they produced ten concrete findings for the issue tracker. Some led during the same week to fixes for silent startup under the Launcher, password verification, and completion of the startup handshake. At the same time, two earlier findings turned out not to be product defects at all, but measurements against a host binary that was two weeks old. The test infrastructure now checks the freshness of the application it launches.

The week therefore delivered more than a large number of changes. It connected implementation, live measurement, and feedback: first the true scope of a problem was clarified, then a correction was made, and finally evidence was added that can catch the same deviation in the future.

## What Happened

During the week from September 14 to September 20, 2026, the `origin/develop` branch gained 388 commits, including 162 merge commits. UCV accounted for the largest volume of work, but UPD, the shared SPOL layer, automated testing, UIR, and distribution packaging also made substantial, coherent progress. The `origin/release/10.01` branch received no changes this week.

### UPD Completes the Full Database-Creation Path for the First Time

Creating an empty database in `/reg` mode is a sequence of five dependent phases. At the start of the week, the first three were in different states: object removal already existed, but table and view creation were only described, while the user-facing command ended with a notice about missing implementation. The team first connected the existing database executors to the real user startup path.

A live run against an approved recoverable database removed objects from the `fenix` schema and created 1,128 tables, including their indexes, and 57 views. The second and third runs ended with the same object counts, demonstrating a repeatable result. Four objects could not be dropped because their names contained special characters, matching the behavior of the original application. The boundary of the evidence matters as well: the UPD source file contains fewer tables than the initial copy of the live schema, so this step does not claim that the newly assembled database is a complete copy of the current production structure.

The fourth phase initially stopped at the `SAU_fullreg` command. Two subsequent waves added live implementations for five registration arms and the bridge that divides the command among them. As a result, all 22 `SAU_fullreg` commands in the input file now execute. Repeating the run against the same database made no further changes, an essential property for registration operations.

The fifth phase added administrator creation and the initial password. The live test passed three scenarios, while the full UPD unit suite finished with 2,521 passing tests, no failures, and 13 skipped cases. This closed a specific release blocker: `/reg` now has a live path from database login through construction and registration to an administrator account.

This does not mean that the entire UPD backlog has disappeared. Five special functions and the file-store path were deliberately deferred because the shipped change file does not call them during a normal upgrade, and implementing them would have significantly expanded the pre-release change surface. Four additional security methods, user write operations, and a complete comparison of the seeded administrator with legacy output also remain open. The decision was intentionally narrow: complete the shortest required path to release and track the remaining domains as separate work.

### UPD Also Receives Its Real Distribution Payload

Functional code alone would not be enough after installation. UPD needs hundreds of input files containing table and view definitions, registrations, data, and change scripts. The distribution wave therefore connected the entire `Deploy` tree to the publish output and then to the MSIX package.

The check found 266 distribution files, including 123 UNL data files. Every one was located both in the publish directory and after unpacking the resulting package. The process also ensures that exactly one change file matching `fenix*.txt` remains in the package root. The registration file must stay in its own subdirectory; otherwise, the original lookup rule could mistake it for an upgrade file.

### UCV Replaces a Coarse Year Gate with a Real Capability Check

Until now, block H printing used a simple cutoff at the year 2026. That rule was easy to understand but factually imprecise: some older statements use the same print rows as current statements, while others require special emitters. Database measurement found 96 print layouts, 28 distinct sets of row types, and 31 statement types in the era beginning in 2010.

The new gate therefore reads the specific layout for a combination of statement type, year, and period. It allows printing only when the engine supports every row type required by that layout. When uncertain, it keeps a visible placeholder instead of silently omitting part of a report. The change opened Balance Sheet and Income Statement printing for older years, selected years of the Notes, and PAP from 2022 onward. In the measured data, actual coverage rose from 8 to 1,183 assembled statements.

At the same time, emitters were added for ten previously unsupported text-row types, together with related branches that blocked older printing for some statement types. This progress must not be confused with complete byte-level parity for every combination. The gate can now determine more accurately which layout the engine can handle, but older years still need their own captured reference outputs. Some parts of the Notes and PAP also retain deliberate lower year limits because their earlier algorithms have not yet been ported.

This capability-based breakdown also changed planning. The original idea of “adding twenty statement types” did not reflect the real structure of the work. Dozens of types share the same emitters and layout, making a specific row type plus a live golden a more useful unit of delivery. Entire groups of statements can then be unlocked without copying similar solutions.

### Live UCV Runs Correct What Static Inspection Could Not See

The UCV active desktop had still been showing values embedded in the form designer, such as sample amounts and generic labels. The new implementation loads real accounting balances, the number of unposted documents, organization details, and chart data. It also aligns the chart dimensions and font size with the original application. One documented graphical difference remains: the selected chart library cannot place slice labels outside the ring in the same way as the legacy solution.

The statement editor went through live verification against a recoverable database. The test actually created a SÚZ statement, opened the Balance Sheet and Notes editors, checked text and row admissibility, and saved a multi-column value all the way to the database. This path found eight product defects. Among them, creating a SÚZ statement opened the wrong generic editor, the header inherited the abbreviation from another grid row, a clean form could not be closed through the menu, and the floating editor covered its own buttons. All eight findings were fixed within the same ticket.

Another review examined six branches described as “inert with today's data.” Remeasurement showed that two of those premises no longer held and that several items had in fact been completed before the aggregate ticket was created. Five live read-only tests now guard those data assumptions directly. If database contents change and a previously inert branch begins affecting the result, a test will report it instead of requiring another manual audit.

The historical IRES output path was corrected as well. For types 69 and 62/68, the original Fenix does not recalculate values from the ledger; it reads the already stored statement. The new application had used a different source, and type 69 even produced an all-zero matrix as a result. The port now reads stored data like the legacy application and preserves the correct matrix shape. Byte-level comparison of the output file and a live pass through this particular change are still outstanding, so the result is accurately described as a corrected data path rather than complete parity for the entire export.

### The E2E Batch Delivers 41 Suites and Ten Concrete Findings

A shared QA wave expanded E2E coverage for UCV, UPD, and SPOL. UCV gained eleven new machine-readable suite definitions with 73 scenarios and 426 steps, additional E2E classes, and new fixtures. Its catalog grew to 394 scenarios and its gap ledger to 101 entries. UPD now has step coverage for all seventeen E2E suites, 59 percent of which are automated. SPOL moved from isolated experiments to live scenarios covering silent startup, passwords, the print dialog, progress windows, user settings, help, and other shared capabilities.

This layer complements the much larger body of unit and integration tests that quickly verify individual rules, database adapters, and component boundaries. At one measured milestone during the week, the UCV suite contained 12,679 tests; UPD reported 2,521 passing tests after administrator creation, and UIR reported 3,395 after completing message captions. E2E scenarios have a different role: they verify from the outside that these parts actually connect into user-reachable behavior in the assembled application.

The result was more than a collection of green reports. The batch created ten tracked findings. In UCV, it identified issues including an empty audit view, a placeholder path in PKZ overview printing, report rows that were not typeset, and SICO-selection behavior. In the shared layer, it detected incorrect storage of active-desktop settings and a missing audit event at startup.

The tests also corrected their own methodology. Five password-policy scenarios initially looked like a product regression. Repeating them against a freshly built application showed that the tests had been launching a host binary from two weeks earlier. Two incorrect findings were withdrawn, and a new guard now compares the host binary's timestamp with the source files before execution. If the application is stale, the scenario is skipped with clear instructions instead of producing a convincing but false result.

### Silent Startup Under the Launcher Returns to the Original Contract

The live SPOL scenarios uncovered several related problems in startup under the Launcher. An invalid or missing session file did not cancel the silent path; instead, the module continued with a placeholder connection. The user then received a misleading database-version error rather than returning to normal login. The correction now recognizes the invalid session and switches to interactive startup, matching the original Fenix.

Further changes added password verification to the silent path and corrected completion of the startup handshake. A module running under the Launcher must report through a named pipe that its main window has loaded. Without that message, the Launcher can consider startup incomplete even though the process is running. The week also closed a collision in a shared registry key that disrupted legacy behavior when the old and new applications ran side by side, and corrected the transfer of print options across module boundaries.

These corrections illustrate the difference between standalone and Launcher-hosted execution. Opening the main window alone is not sufficient evidence. The session, password, communication with the Launcher, and fallback behavior for invalid input all need verification.

### UIR Aligns Message Captions Without a Blanket Rewrite

UIR completed a step focused on user-message captions. The analysis distinguished 39 real calls: twenty ordinary `MsgBox` messages without their own caption, fourteen messages with an explicitly supplied caption, two catalog messages, and three cases without a legacy counterpart. Only the first group was changed.

The UIR shell now uses the verified legacy caption “Územně identifikační registr” (“Territorial Identification Register”). Catalog messages remained unchanged because they already carry the correct caption. The regression suite guards not only the new shared-layer call but also several ways in which a future change could bypass the check. After sign-off, the complete UIR suite finished with 3,395 passing tests and no failures.

### Why the Week Matters

Week twenty-eight mattered above all because it assembled complete flows. UPD moved from separate executors to a live five-phase `/reg` path. UCV replaced a coarse estimate with real measurement of layouts and engine capabilities. QA turned documented scenarios into runs that found both product defects and an incorrect assumption about the binary under test. SPOL then closed several of those findings with concrete fixes for startup under the Launcher.

For HAIFA, the essential point is that the speed of agent-driven development was accompanied by increasingly precise evidence. This week repeatedly showed that a green test, a completed emitter, or a successful build is not enough on its own. Only when the result is connected to a real database, the original application, the distribution package, and the actual startup path can the project say precisely what is complete and what still remains before release.

[Back to the home page]({{ lang | homeUrl | url }})
