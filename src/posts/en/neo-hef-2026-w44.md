---
title: "Week Thirty-Four - MAT Enters Implementation, ROB Saves Citizen Data, and SAU Adds Reports"
date: 2026-11-01
week: "Week Thirty-Four"
period: "October 26, 2026 - November 1, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w44
permalink: /en/posts/neo-hef-2026-w44/
summary: "The Civil Registry moved from planning to implementing its shared application foundation. ROB extended its data layer to save citizen data, related records, and history. SAU completed its reporting and printing block and continued migrating organization details."
---

## Summary for Non-Technical Readers

In week thirty-four of the NEO_HEF project, the HAIFA team began turning the Civil Registry plan into a new application. **Components for startup, database connectivity, permission handling, and the main menu are taking shape.** They form a shared foundation for the Civil Registry and document copy and signature certification, two services running in a single program. Their individual functions will gradually build on it.

**ROB, the Population Register, advanced in saving citizen data and its history.** This is a less visible but essential part of the migration: a change to one person's details can affect several related records. The new application must save them in the correct order and preserve their relationships.

SAU, Application and User Administration, added reports and print outputs to its tools for administrators. This block was accepted during the week, with a specific follow-up task for report previews in the shared layer. Work also continued on migrating the detailed information of an organization recorded in Fenix as an “owner.”

## What Happened

The week of October 26 to November 1, 2026 advanced three concurrent migrations in different areas. The Civil Registry is building its application foundation, ROB is migrating data persistence rules, and SAU is adding administration tools. For each, it remains essential to distinguish completed code, verification against the original program, and acceptance of an entire functional block.

### The Civil Registry Turns Its Plan into the First Application Components

Last week's implementation plan was followed by work on MAT's shared foundation. New components cover license checks, user sessions and permissions, database connectivity, database version checks, user settings, and application activity logs. The main menu implementation accounts for both the Civil Registry and certification modes, distinguishing available functions from those still unfinished.

Alongside the shared foundation, work also began on the data layer for civil registrars and their login names. This is an initial step toward the module's specific functions. The existence of these components does not yet mean that the Civil Registry is complete or that its startup has been fully verified as a whole.

Test scenarios continued to be prepared based on the original application's observed behavior. New suites covered areas such as the registers, books and volumes, registrars and certifying officers, form numbering sequences, and citizenship. These provide concrete guidance for further implementation: what data users should see, what they may change, and how the program should respond.

### ROB Advances Toward Safely Saving Citizen Records

ROB built on its runnable foundation with work on the citizen data layer. During the week, it gained loading and saving of core records, locking and transaction mechanisms, writes for related data, and history recording. Tests accompany the individual components, and project documentation links them to the corresponding migration tasks.

The significance of this step lies in the relationships between records. A citizen's data is more than a single database row: it includes related family records and a history of changes, for example. The migration plan therefore addresses saving data across multiple tables in one transaction. If an error occurs, the application must not save only part of a change while leaving the rest in its previous state.

Running the original and new programs concurrently against a shared database requires particular care. Locking and write rules are therefore part of the migration from the outset. This progress concerns the data foundation; completing and accepting the full citizen detail workflow are subsequent steps.

### SAU Adds Reports and Organization Details

SAU closed the selection list and general reference data form blocks. Work then continued on the owner detail screen: organization information, registered office address, commercial register entries, and history. Selected workflows were also compared in the original and new applications, including saving changes.

Acceptance of the reporting and printing block at the end of the week was a significant milestone. It includes data preparation for thirteen reports, exports, and connections to print templates. Data outputs were compared against fresh results from the original program. Administrators thus gain another set of tools for checking the system's configuration.

The scope of acceptance is explicitly defined. Fixing the modal report preview in the shared SPOL layer and verifying it remain part of SAU's final checks. For Excel and text editor outputs, automated tests cover the logic, but this block has not yet undergone live verification of the complete path through to opening the target program.

The week showed migration progressing from a shared foundation through data handling rules to user-facing outputs. For the HAIFA team, each of these results has its own verification criteria. These make it possible to plan further work around the demonstrated state of each module.

[Back to the homepage]({{ lang | homeUrl | url }})
