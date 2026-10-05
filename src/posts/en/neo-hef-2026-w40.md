---
title: "Week Thirty - UCV and UPD Enter the Pilot on Schedule, UIR Connects Registers and Data Exchange"
date: 2026-10-04
week: "Week Thirty"
period: "September 28, 2026 - October 4, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
  - pilot
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w40
permalink: /en/posts/neo-hef-2026-w40/
summary: "UCV and UPD were released for pilot testing on September 30, exactly as planned. The week also brought further fixes to statement creation and validation, UPD logging, and significant UIR progress in register integration and postal code import and export."
---

## Summary for Non-Technical Readers

The main news of week thirty of the NEO_HEF project is a deadline met: **UCV and UPD were released for pilot testing on September 30, 2026, exactly as planned**. The accounting statements module and the database upgrade and maintenance tool reached another important milestone in the migration of Helios Fenix.

The pilot opens the way to verification in practical conditions. Development continued throughout the week. UCV received further fixes to saving, validation, and form controls. UPD improved its logs and error responses so that administrators can understand what an upgrade did and why it may have stopped.

UIR, the Territorial Identification Register, also advanced. It completed its connector for communication with registers and its postal code import and export area. Some verification against the basic registers still requires work, but important operational paths now have concrete results.

## What Happened

September 28–October 4, 2026, combined the planned handover of two modules with continuing refinements and another migration wave. We also explain the significance of the UCV and UPD release in a [separate article about the start of pilot testing]({{ '/en/posts/ucv-and-upd-released-for-pilot-testing/' | url }}).

### UCV and UPD Reached Their Planned Milestone

The September 30 deadline was met for both modules. UCV covers accounting statements and their outputs, while UPD handles database upgrades and maintenance operations. The handover therefore tests the migration process in two different areas of Fenix.

Release for pilot testing is a precisely defined result. The success of individual pilot scenarios will need to be demonstrated by their execution and feedback. Development fixes recorded this week are described here as the team's continuing work; without further evidence, they cannot be attributed to pilot findings.

### UCV Refines Statement Creation, Saving, and Validation

When creating a statement, its header is now created only on saving, as in the original application. The selection of statement types was aligned with the original menu, and the initial organization selection includes another category allowed by the legacy system. These changes affect the user's first steps and the data left in the database afterward.

Further fixes separated validation from assembly. Validation must not change the assembly timestamp or write to the statement-validity table; the updated paths respect this distinction. The validation log also lists statements that have not been assembled, and messages about inadmissible rows include the reason used by the original Fenix.

Statement import calculates total rows before writing, the multi-column editor retains zero-valued indicators, and saving writes the supplementary header. Historical batch operations for 2001–2009 gained a final message. Broken buttons, clipped text, and form icons were also corrected.

These changes share one purpose: users should receive the correct result and a clear explanation of what the application has done. The migration must preserve even small differences between validation, assembly, and saving.

### UPD Reports Upgrade Progress and Errors More Precisely

Following changes to grids and maintenance forms, work continued on UPD's execution engine. The log gained introductory information about the change file and processing options, upgrade auditing was added, and error termination of automatic runs was refined. If the number of connected users cannot be read, the automatic path stops before the upgrade.

The safeguards for unsupported variants of `warning:` and `verify:` commands were also refined. Their status must be visible in the log, while an automatic run must not wait for a modal window. Subsequent fixes covered logging for empty-database creation, reporting database-probe errors, interactive startup, and recording table-command results.

The operation order in the empty-database creation test received particular attention. The test was changed to open the log before building, just like the production path. The evidence for this change explicitly states that live database creation was not run in that step. This is an important boundary: correcting the test procedure does not constitute a new live-run result.

### The Shared Layer Aligns Settings and Report Emailing

SPOL added a reader for the SQL command timeout stored in the registry, and UCV and RZP connected it after database login. The setting now reaches both modules through a shared path.

Other work addressed emailing reports. SMTP configuration was aligned with the original application's registry settings, a configuration dialog was added, and the option to send a copy to the sender was corrected. A separate fix aligned the password-email check with the user's actual email address. These shared services also matter to modules migrated later.

### UIR Completes Its Connector and Postal Code Data Exchange

On October 2, UIR phase D reached the main development branch. The KZR/RÚIAN connector was marked complete, as was the postal code import and export area. That area includes forms, batch paths, history, and operation auditing.

Live parity with the original application was also demonstrated for exports: the verified postal code output contained 16,232 rows, and the address export contained 1,830 rows. Checks covered file content and format as well as the associated audit entries, so the result goes beyond the existence of an export button.

Live RÚIAN and basic-register paths remain in progress. Tasks S24-T001 through S24-T008 are complete; another task covering the criteria form and completion of basic-register verification still awaits implementation. This progress opens more of UIR without prematurely declaring the entire module complete.

### Why the Week Matters

For HAIFA, the week provided concrete evidence of a plan fulfilled: two more modules were released for pilot testing on the agreed date. Work on behavioral accuracy and another module continued alongside that milestone. The project is therefore testing its ability to manage handover, subsequent fixes, and further migration progress as well as its ability to port code.

[Back to the homepage]({{ lang | homeUrl | url }})
