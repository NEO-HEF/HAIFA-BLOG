---
title: "Week Thirty-Five - ROB Migrates Life Events, SAU Adds Administration Tools, and REN Has Its Analysis"
date: 2026-11-08
week: "Week Thirty-Five"
period: "November 2, 2026 - November 8, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w45
permalink: /en/posts/neo-hef-2026-w45/
summary: "ROB built on its data foundation with the citizen list and the migration of arrivals, changes of address, and deaths. The Civil Registry expanded its reference lists and prepared the foundation of the certification detail form. SAU accepted further administration blocks, including import, export, and reindexing. An approved analysis of the Property Register prepares another migration."
---

## Summary for Non-Technical Readers

In week thirty-five of the NEO_HEF project, the migration of ROB, the Population Register, advanced to the tasks officials perform when a citizen's circumstances change. **New components handle arrivals, changes of address, and recording deaths, including related changes affecting family members.** They build on last week's work on saving data and history, and on the newly migrated citizen list.

The Civil Registry continued migrating forms and shared controls for working with people and civil registry records. SAU, Application and User Administration, accepted further functional blocks, including transferring data to and from text files, maintaining database indexes, and configuring integration with external user administration.

**REN, the Property Register, joined the preparations for another migration.** The HAIFA team completed and approved an analysis of the original application, which handles land parcels, buildings, owners, and other cadastral data. The analysis provides a foundation for planning its migration.

## What Happened

The week of November 2–8, 2026 brought together three ongoing migrations and preparation for another substantial module. ROB and the Civil Registry are adding concrete user workflows, SAU is completing further administration blocks, and REN now has a map of the original program's behavior.

### ROB Connects the Citizen List to Life Events

ROB's data foundation was extended with reading and displaying the citizen list, sorting it, selecting columns, and offering related actions. The list accounts for different record modes and user permissions. Work also continued on migrating selection criteria that allow users to find the required group of people within a large register.

By the end of the week, dialogs and logic had been added for arrivals, changes of address, and deaths. A change of address includes a follow-up workflow for the citizen's partner and children. Recording a death also handles changes to the partner's marital status. A single user action must therefore correctly update several related pieces of information.

For selected scenarios, database writes were compared with the original application on a database copy, including history and operation logs. Implementing these actions represents significant progress, but it does not yet constitute acceptance of ROB as a whole: individual components await final approval, and integration of further functions, such as interaction with the basic registers, continues.

### The Civil Registry Expands Its Functional Foundation

The Civil Registry gained management and selection of register books and volumes. These determine where a civil registry record belongs and will support the individual record forms. Migration of settings and reusable texts also advanced.

Shared controls for a person and a civil registry record were created. These are used in several parts of the application, so migrating them prepares the foundation for further forms without repeating the same work.

For document copy and signature certification, a nine-tab foundation for the certification detail form was created, followed by work on keyboard navigation. This is currently a prepared interface; saving the certification record and completing the full workflow belong to subsequent tasks. Test scenarios based on the original application were developed alongside it, for example for official form inventory and module settings.

### SAU Accepts More Tools for Administrators

SAU completed several functional blocks this week. These include blocking access to the system, configuring connections to the basic registers, integrating with external identity management and domain groups, and assigning organizations through organization groups.

Exporting and importing data in text format marked a significant step forward. Selected outputs from the new application were compared with the original program, and an export–import–export cycle was verified. When replacing a table's contents, checks also confirmed that an import error preserves the original data. For administrators, predictable behavior on failure is as essential as a successful transfer.

The reindexing block—rebuilding database structures used to look up data—was also completed, along with the active desktop block and a special SQL query export to Excel for administrators. Acceptance of these components includes recorded follow-up tasks in the shared layer and SAU's final checks. Migration of the module as a whole therefore continues.

### REN Has a Foundation for Migration Planning

The Property Register analysis was approved on November 6. It covers land parcels, buildings, units, ownership, cadastral data imports, and print outputs. It also distinguishes functions that are actually accessible in the original program from historical code that users cannot reach.

The analysis underwent independent reviews and corrections of the discrepancies found. This matters for planning: the scope of migration must reflect the application's actual behavior and its connections to other parts of Fenix. The approved analysis prepares another module to be divided into concrete migration steps.

[Back to the homepage]({{ lang | homeUrl | url }})
