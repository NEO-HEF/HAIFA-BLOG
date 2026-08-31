---
title: "Week Twenty-Five - UCV Completes Its Historical Era, UPD Passes Live Gates, and the Login Fix Reaches 10.01"
date: 2026-08-30
week: "Week Twenty-Five"
period: "August 24, 2026 - August 30, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w35
permalink: /en/posts/neo-hef-2026-w35/
summary: "Week twenty-five completed implementation coverage for pre-2010 UCV, brought live verification of key UPD paths, and confirmed domain login in RZP, UCV, and UIR, including a backport to version 10.01."
---

## Summary for Non-Technical Readers

Week twenty-five of the NEO_HEF project settled a major question that had only opened a few days earlier: what should happen to accounting statements from before 2010? The answer is that they belong in the migration. The original Fenix can display and print them, so the new application must do the same. During the week, the team completed implementation coverage for this entire historical era, including the different procedures used for 2001–2009 and for even older data.

This is not marginal or cosmetic work. Historical statements use different tables, different print paths, and partly different output formats from current reporting. The available database actually contains 258 statements from 2006–2009. The new UCV can now open their overview, work with the period-specific dialogs, assemble supported families, and produce prints as well as ARIS and IRES outputs. The path for data up to the year 2000 is implemented and covered by tests, but it could not yet be compared live because none of the available databases contains data that old.

UPD, the database upgrade module, underwent exceptionally thorough live verification. From the user interface, the team successfully cancelled an upgrade in progress, completed a normal upgrade, repeated it, and verified the warning shown before a repeated run. The structure test could be interrupted without a crash and with a clear message for the user. Eight of nine selected live gates therefore gained direct evidence. One remains open: logging in against a database that is genuinely only partially upgraded. The attempts did not produce such a state safely and reliably.

The Windows account login fix from the previous week gained real operational evidence. A domain account successfully logged in to RZP, UCV, and UIR against a version 10.11 database. The selected login mode was also shown to persist. This revealed a different, pre-existing gap in UIR: login itself works, but unlike RZP and UCV, the module cannot yet resolve the signed-in user to the actual database ID and load permissions through the standard path. This area remains open for a decision and a fix; it is not a regression in domain login.

The same login fix was also transferred to the maintained `release/10.01` branch as the first recorded backport. In doing so, the team put a new versioning rule into practice: fixes may flow both ways between the development and released lines, while new features stay in the newer version. The shared fix was therefore brought into 10.01, but parts intended for modules that the branch does not contain were left out.

The week also demonstrated again why HAIFA tracks more than the number of completed features. New guard tests found forms and event handlers that automated code conversion had missed because of differences in letter case within their names. More precise evidence can briefly make report figures look worse, but it gives the project a more truthful view.

## What Happened

During the week from August 24 to August 30, 2026, the `origin/develop` branch gained 199 commits, including 77 merge commits. Development was most intensive in UCV, but significant results also emerged in UPD, the shared login layer, QA automation, and versioning rules.

The `origin/release/10.01` branch did not remain unchanged this time. It received one controlled backport of the domain login fix. This was not a merge of the entire development branch, but a targeted transfer of a specific fix, accompanied by a record of what was deliberately excluded.

### UCV Completes the Pre-2010 Implementation

At the start of the week, it was still unclear whether statements from before 2010 should remain in the new application at all. The deciding factor was the reality of the original Fenix: its list of years is built from data stored in the database, not from a fixed range. If a database contains a historical year, the user can reach it. The sample in use offered the years 2006 through 2026 and contained 258 stored statements for 2006–2009.

This disproved the assumption that the older area was unreachable and could remain outside the migration. The scope was divided into four linked parts: the statement overview, two period-specific processing dialogs, printing for 2001–2009, and a separate print path for the year 2000 and earlier. Altogether, this meant porting behavior from more than 21,000 lines of legacy source code.

All four parts reached `develop` during the week. The overview gained 81 missing handlers and the correct availability of actions based on the selected year. The processing dialogs can save results into the classic `uc_vykaz` and `uc_uk_vyk` tables rather than the newer schema used for modern statements. Missing calculation families, both historical print streams, ARIS and IRES outputs, and the progress window with cancellation were added as well.

The split into two print eras was not a technical indulgence. The original Fenix uses different emitters for 2001–2009 than for data up to the year 2000. The older path includes further variants for years through 1996 and from 1997 onward. Trying to fold all of them into the modern block H print path might have produced a similar output, but not faithful behavior matching the original system.

The result needs to be read precisely. The pre-2010 era now has implementation coverage, and automated tests verify its engines, persistence, and action routing. The path up to the year 2000 has not been run live against an archival database because none of the available databases offers data that old. This is not evidence that customers do not use it; the data-driven year selection means that a customer database containing records from the 1990s can expose the path normally.

### The Text Sections of the Notes Pass Live Comparison

Last week, a batch of five accounting statements spanning 74 pages achieved character-for-character parity. That evidence did not include the text sections of the Notes because they had not been enabled during the reference run.

This week added their emitter and four live golden references. The comparison uncovered two details that unit tests alone could not reveal: the distinction between removing trailing spaces and removing trailing tab characters, and the need to truncate the definition to a fixed width of 132 characters. After these corrections, the text sections matched live output from the original application, allowing their previous gate to be opened.

This gives the statement half of block H much stronger coverage, but it does not close the entire UCV printing area. User-defined reports and validation-protocol outputs form a separate area that shares neither the basic structure nor the emitters used for statement printing.

### Guard Tests Measure the Blind Spots of Conversion

UCV gained an automated reachability gate. It checks two things: whether a ported form has a production caller, and whether reachable forms accumulate active controls with no implemented handler. After several forms were completed, the monitored surface fell to 283 such signals across 43 forms.

Even this gate is not all-seeing. The week revealed that the generator matched control names and original events with case sensitivity. An event named `cmdNove_click`, for example, might not be connected to a control named `cmdnove`. In that situation, not even an empty placeholder was generated for the scanner to find. Nine handlers disappeared in this way from a single editor, including actions for creating a new row and cancelling changes.

New behavioral tests caught the gap. After the editor was completed, UCV reported 9,604 passing tests, no failures, and 21 skipped golden tests. Another trap was found in the way the suite itself was run: if the test process crashed, concise output could still display a green summary for only those tests that had completed before the crash. The new rule therefore compares the number of discovered and actually executed tests and also checks for premature process termination.

After this week, the UCV status register contains 51 open rows. Some await a suitable environment or live data, some require an owner decision, and some represent concrete remaining work. A completed historical era is therefore not the same as a completed module. It does mean that one large and previously uncertain area now has an implementation, tests, and clearly named boundaries.

### QA Adds Click-Driven UCV Scenarios

After several product blockers were removed, seven previously missing E2E scenarios could be implemented. The tests now verify from outside the application, among other things, saving, overwriting, and deleting selection-condition definitions; validating PKZ rows; creating an operational record; recalculating manually entered data; and the behavior of the historical overview when the year changes.

After this wave, only one scenario in the UCV catalog remains marked `Missing`: updating print texts using an intentionally damaged input file. This does not mean that everything else is fully automated or that every scenario passes. The catalog continues to distinguish automated, manual, skipped, and known-defect cases honestly. The meaning is narrower: almost every planned scenario now has an assigned verification method and cannot disappear from the report simply because it is difficult.

### UPD Gains Live Evidence for Eight of Nine Gates

UPD went through a series of live runs against controlled test databases. The purpose was not to prove the internal algorithm again through unit tests, but to verify what an operator actually sees and does in the application.

During the first run, the team managed to cancel an upgrade while definitions were being read. The application displayed a confirmation prompt, information about the user cancellation, an instruction to restore the database, and an offer to open the log. In this case, the database remained untouched because the cancellation occurred before the first change.

Another upgrade completed fully through the user interface. UPD read the actual change file, executed 13 commands, and inserted a version 10.11 record with a successful result. A repeated run then displayed the expected warning, completed after confirmation, and incremented the upgrade counter without inserting a duplicate version row. This verified both completion and the distinct path for a permitted repeated upgrade.

The `Structure Test` cancellation was also verified live. Unlike the legacy application, the port did not fall into a generic unexpected error. Instead, it displayed a clear message stating that the database test had been cancelled by the user and that the database had not been tested. This is an explicitly sanctioned deviation: the new application preserves the meaning of the original behavior while presenting the user with a safer outcome.

Eight of the nine selected gates therefore passed. Verification of login against a partially upgraded database remains open. The first attempt stopped before any database changes, while another upgrade finished too quickly and again left the database consistent. The documentation therefore marks this point as neither a success nor a defect; it provides an exact recipe for a further manual attempt.

The verification work also produced secondary findings. The default log can contain older sensitive connection information, and appending to the same file complicates safe log sharing. Logs may also contain lists of user names. These facts were outside the original gates, but they were recorded so that unsuitable files are not sent for diagnostics or committed to the repository.

### Domain Login Works in Three Modules

The shared Windows login fix received live verification in RZP, UCV, and UIR. Testing took place on an actual domain-joined machine against version 10.11 databases. In all three modules, an account in the form `DOMAIN\user` was correctly resolved to the login stored without the domain in the database, and the application opened its main window.

RZP and UCV loaded the expected permissions after login and presented their full menus. UIR successfully verified the identity, but its own startup layer still uses a fallback user ID and does not load database permissions through the same path as its sibling modules. Its first run therefore showed a restricted menu. Repeating the test with the same account and an explicitly supplied permission set opened the full menu, separating the cause from domain login.

This deviation was reframed more precisely. The problem is not the user type, nor does UIR carry a user name including the domain. It lacks the standard resolution to the actual `id_uziv` stored in the database. In the available data, the gap has not yet caused corrupted user settings, but the code-level deficiency is documented and awaits a decision from the UIR owner.

Persistence of the selected login mode was verified as well. After Windows account login was used for the first time, RZP, UCV, and UIR opened directly in the correct mode on subsequent starts, matching the original Fenix behavior.

### The Login Fix Returns to Version 10.01

Domain login is a correction to shared behavior rather than a new feature specific to 10.11. The relevant part of the shared layer was therefore transferred deliberately to the maintained `release/10.01` branch as well.

The backport did not contain the entire development stream. The UPD portion, for example, was omitted because the new UPD module effectively does not exist on the 10.01 branch, and a separate follow-up parity fix remains on its own lifecycle. The transfer has its own documentation, tests, and record of deliberately excluded parts.

This example helped refine the general NEO_HEF versioning method. A fix discovered in a released version is carried forward into `develop`; a fix created on the trunk may be brought back selectively into a release branch that is still supported. In both directions, a specific commit or an equivalent implementation is transferred, never the entire other branch. New features do not flow back into an older version.

### Shared Licensing Recognizes the New Financial Control Module

The shared licensing layer gained the `FIK` entry for the Financial Control module. The change was made on both sides of the coexisting system: in the new port and in the legacy component for version 10.11. The team verified a real signed license record supplied by the original system, its signature against the embedded public key, and the presence of the new entry in the resulting legacy library.

The Financial Control module itself is being prepared in parallel by the Krypton legacy team. They are using the HAIFA methodology and shared components from the NEO_HEF repository, such as the SPOL module. To give FIK a prepared place in this infrastructure and allow it to build on shared license verification, the HAIFA team added its license record. Both teams now understand the same code and can build directly on it during further integration.

### Why the Week Matters

Week twenty-five brought three different forms of certainty. UCV closed an implementation scope that was still in doubt at the start of the week. UPD replaced a series of assumptions with live interaction against an actual test database. And shared login moved from corrected code to verification in three modules and the first controlled backport into an older released version.

The results that remain yellow or red are equally valuable. UIR has a documented identity-resolution gap, one UPD gate needs a specifically prepared database, and pre-2001 printing awaits archival data. This gives HAIFA a more accurate map of reality. The ability to distinguish implemented, live-verified, and release-ready is precisely what allows AI-driven development to become not only fast, but also manageable and predictable.
