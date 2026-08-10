---
title: "Week Twenty-Two - UCV Moves Toward Final Testing, UPD Proves the Upgrade, and UIR Gets Orchestration"
date: 2026-08-09
week: "Week Twenty-Two"
period: "August 3, 2026 - August 9, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w32
permalink: /en/posts/neo-hef-2026-w32/
summary: "Week twenty-two moved UCV closer to final testing, brought a real live proof of the full UPD upgrade including password conversion, moved the UPD UI toward usable feedback, prepared UIR orchestration, and tightened safe handling of test data."
---

## Summary for Non-Technical Readers

Week twenty-two of the NEO_HEF project was not about one big visible switch. It was mainly about several important areas moving from "we have an implementation" toward "we can show what really works, where the boundaries are, and what still remains."

The largest amount of work happened in the UCV module. This was another August round of work on reports, event history, user-defined reports, control-report printing, and shared technical pieces for working with owner accounts. UCV is moving toward final testing, but it is not there yet. The important point is that the team was not merely ticking items off a list. A detailed check against the original application uncovered several older assumptions that were no longer true or were too simplified. The result is a more accurate risk map and less false confidence.

The UPD module, which handles database upgrades, passed a real full upgrade for the first time on a disposable live database. The upgrade reached the expected target state, converted user passwords to the new form, and after the run the team could verify login through the normal authentication path. Just as importantly, the team clearly described what this proof does not cover yet. That is healthy for the project: instead of a broad "done" claim, there is a precise proof with precise boundaries.

UPD also moved forward in the user interface. The first set of forms is no longer only connected to the technical engine behind the scenes; after a click, it shows the operator a result. This is a practical step from internal functionality toward a usable working tool.

UIR, the territorial identification area, moved from a completed implementation plan to controlled work orchestration. The plan is no longer only a long task list. It has dependencies, checks, run grouping, and a machine-verifiable structure that allows agents to work more predictably.

The project also strengthened its operational layer. The installer gained a non-interactive mode mainly so that installation of NEO modules can become part of the legacy Fenix installation flow and simplify client distribution from version 10.21 onward. Database anonymization, after several iterations, reached a state where an independent audit skill judged it acceptable.

## What Happened

During the week from August 3 to August 9, 2026, the `origin/develop` branch gained 191 commits, including 49 merge commits. The `origin/release/10.01` branch did not receive any new commits. The main movement therefore continued on the development branch, while the release branch remained stable.

The week had several strong themes: another UCV step toward final testing, real verification of the full UPD upgrade, the first wave of operator-facing UPD UI, conversion of the UIR plan into orchestration, silent installer mode, and tighter anonymization of test data.

### UCV Moves Toward Final Testing and Sharpens Its Risk Map

UCV was the largest source of change this week. In another August round, 18 pull requests reached the development branch. After that round, the main `Fenix.UCV.Tests` suite reported 5483 passing tests, no failures, and 19 skipped tests. After adding tests around control-report printing, the suite grew to 5566 passing tests, again with no failures.

A visible step happened in the event history viewer. A shared event-log viewer was created and is used by both UCV and UIR. For users, this means that the path to historical events is no longer only technically present in the code; it has a concrete form-based shape and was verified over a test database.

Another important area was the port of the `cUcrKonto` component. The idea that "one component will solve all remaining cases" turned out to be too optimistic. Moving owner accounts was important, but it also revealed that part of the backlog depends on finer differences in conditions, codebooks, owner axes, and form reachability. The practical result is better than quick closure: the project now has a more precise view of what has evidence, what is reachable, and what is still blocked.

Several concrete report-related steps were added. The `Output` path in the reports form gained more wiring for selected reports, including sum options, layout behavior, and automatic preselection where that matches legacy behavior. This does not mean the whole reporting area is definitively done. Reports often reveal additional data, period, or setting combinations only during later testing. In user-defined reports, the team fixed a quiet but significant data defect: inserting rows and columns had to correctly shift and renumber references. Without that, a report could produce wrong results without necessarily crashing the application.

Control-report printing through `cUCV_KontSest` also moved forward. This is the type of work that is not especially attractive from the outside, but it is essential for parity with the original system: the print path has to use the right data, the right branching, and the existing print infrastructure correctly.

The audit of dead and blocked paths was also valuable. The team found cases where backlog items were marked as blocked even though changes from previous weeks had removed the block. Conversely, it confirmed areas that really do require an owner decision, destructive legacy verification, or a live parity environment. This kind of cleanup matters for migration because it separates real risk from historical notes that no longer match reality.

UCV therefore cannot be described in one sentence as "done." It is more accurate to say that the remaining surface became clearer: some user paths now have stronger evidence, some technical assumptions were corrected, and some remaining items are better named. The module is moving closer to final testing, but it still has further verification rounds ahead.

### UPD Passed a Real Full Upgrade for the First Time

UPD made a qualitatively important step this week. The full upgrade was run against the disposable `fenix_upd_final_scratch` database and finished with a `PASS` result. The database moved from version 1001000 to 1011000, the upgrade wrote an audit trail of successful completion, and login for the `admin` user after the run passed through the normal production authentication path.

The verification also included bulk conversion of user passwords. The database gained 58 records in the new password target area: 57 users and one configuration item. One non-converted user did not have a source record in the old table, so this was not a conversion failure. That distinction is exactly what matters in a migration project: not only knowing that the result matches, but also distinguishing a real error from an expected missing input.

The team also clearly described the limits of the proof. The verification was not a byte-for-byte comparison of the whole protocol, did not cover the temporary-password branch, did not test login for every user, and did not prove idempotence of repeated execution over the same database. That does not weaken the result. It makes it a usable technical proof, because it is clear what it confirms and what still needs further verification.

For the project, this is a major difference from a dry-run test or a partial check of one migration step. UPD now has evidence of a full upgrade run over a real database shape, including the security-sensitive password area.

### UPD UI Starts Showing Results to the Operator

Alongside the upgrade itself, the UPD user interface also moved forward. The first wave of the fourth UI phase connected four forms to the live engine so that, after a click, the operator sees a result. This changes the nature of the work: it is no longer only an engine and background tests. A tool is starting to appear that a person can use in the normal application flow.

Part of the work was safer handling of execution mode. The UI must not accidentally launch a real operation where only preview or validation is intended. A safer way of passing the so-called posture, meaning the run intent, was therefore added. In practice, this means the form and the engine better agree on whether something should really be executed or only evaluated and shown.

This step is less visible than a final screen, but it is essential for operational usability. A database upgrade is a destructive operation. Every step that lowers the risk of unintended execution while giving the operator readable feedback makes the whole module more trustworthy.

### UIR Got Executable Orchestration

UIR had a completed implementation plan in the previous week. This week, orchestration was built on top of it. The plan contains 34 steps and 159 tasks. The orchestration created a dependency graph with 2812 edges and 16 layers, split implementation work into 11 controlled runs, and verified that tasks are neither duplicated nor lost.

For HAIFA, this is an important shift. The team's goal is not only to manually migrate one module, but to create a controlled way of working with AI agents. UIR now has something close to a production procedure: clear inputs, ordering, gates, validation policy, and dependency checks.

More general documentation and tooling for creating orchestration outside UIR also appeared. Verification found and fixed issues in the orchestration approach itself, including configuration handling, detection of stuck runs, and waiting for validation signals. This is a good example of work that improves not only one module, but the HAIFA factory method.

### Release, Installer, and Safe Test Data

Silent installer mode was created mainly so that installation of NEO modules can be added as a step in the legacy Fenix installer. From version 10.21 onward, this should simplify distribution to clients: the legacy installation starts the installation of new-technology modules as well, and neither the user nor the consultant needs to handle a separate manual step.

The installer can therefore run without an interactive UI in `install`, `uninstall`, and `list` modes, returns stable exit codes, and can output a machine-readable JSON summary. It is also important that install and uninstall operations are intended to be repeatable and safe for automated scripts. Clicking through an installer is acceptable for development verification. Product distribution through the Fenix installation flow needs a command form with clear results.

Another supporting but important topic was database anonymization. The new changes reacted to the GDPR audit and moved masking from a simple "by column name" rule closer to a "by content" rule. This is a fundamental difference. A sensitive value may be stored in a column whose name does not look suspicious. Conversely, not every suspicious-looking name is a real finding.

After several iterations, the anonymization skill for the Fenix database is now in a state where its output passed an independent audit skill without critical or high-severity findings. A deeper explanation is in the separate article <a href="{{ '/en/posts/current-state-of-the-database-anonymization-skill/' | url }}">Current State of the Database Anonymization Skill</a>. For the weekly overview, the main point is that a test database must be realistic enough to reveal migration defects, while not unnecessarily carrying personal data.

A smaller but useful step also happened in RZP. If report printing fails because the Crystal Reports runtime libraries are not installed, the application should not crash; it should show a harmless dialog. These changes do not look dramatic, but they improve stability around reports and printing, which are everyday operations in an ERP system.

### Release 10.01 Remains Stable

The `release/10.01` branch did not receive any commits this week. Development focused on `develop`, where changes for the next migration steps were completed and verified. The stability of the release branch is good news in this context: experiments, verification, and larger movement remain separated from the branch intended for release.

### Why the Week Matters

Week twenty-two shows HAIFA moving from output toward control. It was not only about the number of commits or the number of backlog items. More important was that the team repeatedly turned claims into evidence: UCV through live verification and parity tests, UPD through a real full upgrade, UIR through machine-verified orchestration, the installer through non-interactive mode, and anonymization through an audit of sensitive data.

That is exactly the direction NEO_HEF needs. Migrating a large ERP system cannot rest on the impression that "it looks done." It has to be clear what was verified, how, on what data, and with what limitations. This week brought fewer impressive slogans and more of that kind of evidence.
