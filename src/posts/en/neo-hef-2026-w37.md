---
title: "Week Twenty-Seven - UIR Completes the Foundation for Eleven Codebooks, UPD Opens /reg Mode, and UCV Strengthens Its Parity Evidence"
date: 2026-09-13
week: "Week Twenty-Seven"
period: "September 7, 2026 - September 13, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w37
permalink: /en/posts/neo-hef-2026-w37/
summary: "Week twenty-seven completed UIR's codebook foundation and audit trail, opened UPD's registration mode through a database account, and added live parity evidence and previously missing operational paths to UCV."
---

## Summary for Non-Technical Readers

Week twenty-seven of the NEO_HEF project brought its most visible progress in UIR, the module responsible for territorial identification and address data. Across several successive waves, the team completed the foundation for eleven interconnected codebooks: from countries, districts, and municipalities through municipality sections, city districts, and cadastral areas to streets, electoral districts, and postal codes. These are more than tables on a screen. Each area includes data loading, search, detail views, saving, validation, permissions, and integration into the application's real menu.

The codebook work was followed by a separate verification wave. It revealed that the forms assembled the correct event-log messages, but those messages were not being written anywhere. A new audit layer therefore connected ten user-accessible codebooks to Fenix's shared event log. Each create, edit, or delete operation now records not only a description but also a reference to the specific record and table. A live check confirmed a write to the real audit table, and the complete UIR suite finished with 3,386 passing tests and no failures.

UPD, the database upgrade and maintenance module, added a third connection mode. Alongside normal interactive startup and unattended startup from Automatic Updates, it can now use the `/reg` registration mode, which logs in directly with a database account. After a successful connection, a dedicated maintenance window opens with the correct caption and restricted menu. Five previous test tripwires, which merely reported the missing implementation, were replaced with real scenarios. Creation of an empty database is still not implemented, however, and the application continues to say so explicitly.

UCV advanced primarily in the quality of its evidence. The historical JASÚ output was run for the first time in both the original and new applications against data from 2008. Five files, a manifest, 660 print-detail rows, and the completion message matched character for character after one documented normalization of the timestamp. The live run also found one real formatting defect and two errors in the test harness. That is exactly why comparison with the old system matters: it is not enough for a test to pass; it must also measure the right thing.

The week also brought a broader UCV correction. A complete scan of the original code found 63 live event-log writes, while the original task counted only 31. All were ported, including 28 calls in automatic database-schema upgrades that had initially been excluded by mistake. The project consequently clarified an important rule: the new application must not invent database changes, but it must faithfully perform the changes that the original Fenix carries out during startup.

## What Happened

During the week from September 7 to September 13, 2026, the `origin/develop` branch gained 203 commits, including 80 merge commits. The largest coherent body of work was in UIR, where four migration waves were successively merged into the main branch. Substantial work also continued in UCV, UPD, the shared SPOL layer, automated testing, and application packaging. The `origin/release/10.01` branch received no changes this week.

### UIR Completes Its Codebook Phase in Four Controlled Waves

UIR's codebooks form a hierarchy. A municipality belongs to a district; municipality sections and city districts are linked to a municipality; cadastral areas and basic settlement units use further shared keys; and streets, street names, electoral districts, and postal codes build on this structure. They therefore could not be migrated as a collection of independent windows.

The first three waves divided 34 implementation tasks according to their dependencies. The first delivered countries, districts, municipality sections, and city districts. The second added cadastral areas, basic settlement units, street and public-space names, and electoral districts. The third completed municipalities, streets and public spaces, and postal codes, which could now build on the earlier layers.

Each step covered more than the appearance of a form. The work added data models and repositories, list and detail screens, filtering, rules for creating, editing, and deleting records, permission checks, and opening the screens from the module's real menu. Live gates verified selected forms against an available database and compared their behavior with the original application. The checks caught subtle differences as well, such as when existing list contents must remain after an error, which fields may change during an edit, and exactly how keys for related records must be assembled.

This does not mean that the entire UIR module is complete. It does mean that an important repeatable codebook pattern is complete and that eleven specific areas now have their application, database, and user-interface layers. Subsequent UIR work can build directly on them instead of creating another way to work with the same data.

### A Separate Review Finds the Missing Audit Trail

After the three codebook waves, a typical integration gap emerged. Nine forms already produced the correct event-log messages when data changed, but their audit output remained disconnected. For districts, the three live calls themselves had not been ported. A user operation could therefore work while remaining invisible to the shared event overview.

The fourth wave created a module interface over SPOL's shared writer and connected all ten user-accessible codebooks to it. Each entry retains the original meaning: the action description, severity, logged-in user, identifier of the changed record, and reference type. As in the legacy application, failure of the auxiliary audit write must not change the result of the main user operation.

An aggregate check compared 34 calls in the original code with the new application. Thirty-one have direct counterparts, while the remaining three are demonstrably located in a dead handler that users cannot reach. One entry was additionally verified through the production path all the way to the `sau_logfenix` table. After this wave, the full UIR suite passed 3,386 tests with no failures and no skipped cases.

### UPD Connects with a Database Account in `/reg` Mode

The `/reg` maintenance mode does not use the normal Fenix user login. Like the original application, it displays a dedicated database-account dialog, creates the corresponding database context, and only then opens the registration window. Until this week, that path stopped after telling the user that a database login was required.

The shared SPOL layer first delivered the dialog, connection, and runtime state for a database account. UPD then connected its startup path to those services. On success, it uses the supplied DSN and login in the window caption, applies the correct restricted menu state, and keeps documentation, help, and application exit available. After a failed connection, the maintenance window does not open at all, preventing a partially connected state.

Five scenarios that had deliberately failed to highlight the missing path now verify real behavior: the caption, menu layout, available supporting options, the still-unwired empty-database creation function, and safe termination after a failed login. They do not modify the database. This is a completed prerequisite for future maintenance work, not completion of the empty-database generator itself.

### Automatic Updates Gets a More Faithful UPD Startup Test

UPD's connection to Automatic Updates from the previous week went through another verification round. The team created an emulator that launches the module with the same command-line shape and named-pipe type used by the original update service. The test confirmed that the process correctly switches into unattended mode, does not display a login dialog, and returns both a protocol and an exit code.

This evidence has a deliberately limited scope. It verifies the startup and communication contract, not a full upgrade through the real Automatic Updates binary. The documentation therefore continues to list the unverified parts explicitly, including startup from the installation directory and behavior when the communication pipe fills up. Alongside the working emulator, an important result is that a partial test was not presented as broader operational proof.

### UCV Ports the Complete Event Log and Corrects Its Schema Rule

The original UCV audit task listed 31 writes across twelve files. A machine-assisted scan of the entire legacy module found 63 live calls across fifteen files instead. The omitted files genuinely belonged to the UCV project, and some of their operations already existed in the new application. Following only the original list would therefore have produced an incomplete port.

A new shared UCV wrapper now records all 63 events through SPOL's existing audit infrastructure. It covers statement assembly, saving, deletion, and submission; historical-data import; period changes; attachments; responsible persons; ARES; and other operational actions. Where the original Fenix links an event to a specific statement or organization, the identifier and reference type are preserved as well.

Particular attention was required for 28 calls in eight automatic schema-upgrade routines. During the initial assessment, they had been excluded under the rule prohibiting schema changes. A subsequent review showed that this interpretation was wrong: the prohibition applies to new changes invented by the port, not to changes actually performed by the original Fenix at startup. All relevant routines were therefore added faithfully, including the original existence checks and call order.

This correction matters more than the number of restored calls. It shows why migration rules must be interpreted against the observable behavior of the original system. Without that check, a formally cautious decision would have created a behavioral difference precisely where the old and new applications must continue sharing one database.

### The Live JASÚ Golden Matches Character for Character

The historical JASÚ output was compared using accounting year 2008 and period 12. The original UCV created five output files for five organizations, containing 376 records in total, a five-line manifest, and 660 print-detail rows across eleven pages. The new use case produced identical content in all four compared parts after normalization of the timestamp footer.

The live measurement found three problems. The new UCV's print detail incorrectly padded every row to 80 characters, even though the original variable was actually variable-length. Two further defects were in the test harness: one path used the wrong flag for available columns, while another sorted statements by their numeric type rather than by their order in the user grid. All three were corrected, and the repeatable golden is now stored as a regression guard.

The verification also has a precisely documented boundary. The available data covered the main emitter families but contained no type 20 statement. Its presence in the selection dialog is proven, but its actual output is not yet covered by the live golden.

### UCV Report Output Passes Through the Entire Chain

Alongside statement printing, the report half of block H was also completed. Six different reports—from a relationship definition containing more than 72,000 rows through the validation protocol to reports S147 and S148—reproduce the captured output of the original application byte for byte. Four outputs were subsequently rendered through the real `ReportGenerator.exe` process.

This full pass uncovered a problem with saved data inside a Crystal template in the shared reporting layer. During export outside preview mode, the data source was not refreshed, allowing a report to return historical content from the year 2000 regardless of the data just prepared. The SPOL correction now forces a refresh before export. If the source is unavailable, rendering fails instead of silently printing stale content.

### Testing Gains a Broader Shared Catalog

Twelve robust test suites were added for UCV. They cover areas including codebooks and permanently hidden options, definition import and export, report-definition saving, statement creation and deletion, less common statement families, and the accounting-close approval protocol. Test scenarios are thus gradually moving from general lists toward precise, repeatable procedures with expected outcomes.

A separate catalog was also created for the shared SPOL layer. Nineteen suites describe login, licensing, permissions, concurrent editing, user settings, printing, long-running operations, help, error handling, and application/database version mismatches. Because these capabilities are used by several modules, verifying them separately reduces the risk that each module will search for the same defect in a different way.

GUI tests also moved to a hidden Windows desktop. Individual suites no longer compete for the active window with the user or with one another. Parallel execution still requires separate databases and build outputs, but desktop isolation removes one of the primary causes of instability in click-driven tests.

### Smaller Corrections Close Operational Details

RZP aligned user-message captions and icons more closely with the original Fenix and added a startup branch for a user who does not yet have an available owner. The RZP, UCV, and installer packages gained a declaration for unvirtualized registry access so that application settings are not redirected into an isolated package-specific location.

UCV also received several individual parity fixes: narrow-report dimensions, Cash Flow report pagination, period selection during ARIS and JASÚ import, message captions, paper orientation, and other edge paths. Each looks small in isolation, but together they determine whether the new module can replace the original application over the long term without surprising users.

### Why the Week Matters

Week twenty-seven combined speed with disciplined boundary checking. UIR completed a large, interconnected codebook area in a matter of days and immediately followed it with a cross-cutting audit review. UPD closed another startup path while making clear that empty-database creation still awaits implementation. UCV gained strong live evidence while also correcting its own tests and earlier decisions that proved too narrow.

For HAIFA's direction, this way of working is the essential point. AI agents can migrate large areas quickly, but control comes from combining dependencies, incremental gates, live comparison, and a willingness to revisit an assumption disproven by evidence. This week delivered concrete progress in three modules and several reusable rules for the migration waves ahead.

[Back to the home page]({{ lang | homeUrl | url }})
