---
title: "Week Thirty-Three - ROB Has a Runnable Foundation, SAU Manages Users, and MAT Has a Plan"
date: 2026-10-25
week: "Week Thirty-Three"
period: "October 19, 2026 - October 25, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w43
permalink: /en/posts/neo-hef-2026-w43/
summary: "The Population Register moved from preparation to a runnable application foundation. SAU completed user and permission management operations, while the Civil Registry gained an implementation plan and its first test suites based on the original application. UIR continues final verification of individual components."
---

## Summary for Non-Technical Readers

In week thirty-three of the NEO_HEF project, preparation for further Helios Fenix modules took shape in the new application. **ROB, the Population Register, now has a runnable foundation with login, a main menu, and a database connection.** Its registry functions will build on this foundation. The HAIFA team also extended shared services for working with the basic registers, which other modules will use as well.

**SAU, Application and User Administration, advanced to managing accounts and permissions.** Completed operations include creating, editing, and deleting users, as well as assigning applications and groups. This is a significant step beyond the basic environment described last week.

The Civil Registry gained a detailed implementation plan. Test scenarios are also being prepared and verified in the original program to establish how the migrated functions should behave. UIR, the Territorial Identification Register, continued its final checks; work on connecting address objects to the geographic information system, GIS, remains open.

## What Happened

The week of October 19–25, 2026 combined implementation in ROB and SAU, planning for the Civil Registry, and verification in UIR. Alongside the migration of individual functions, defining concrete acceptance criteria is becoming increasingly important.

### ROB Builds on the Prepared Requirements

Following the previous weeks of analysis and observation of the original application, the foundation of the new Population Register reached the development branch. It includes the main window, login, permission and license handling, database connection initialization, and the main menu. It supports both standalone operation and operation under the Launcher, the shared launcher for Fenix modules.

In parallel, the shared SPOL layer gained extensions for registry queries, search criteria, and address selection. ROB builds on services prepared during the UIR migration and extends them to meet its own needs. This approach allows modules to share the same functionality.

Login to the basic registers connector and additional windows for displaying personal records have also been implemented. These components were still awaiting final acceptance at the end of the week. ROB's main milestone is therefore a runnable application and an expanded shared foundation for the next migration steps.

### SAU Migrates Account and Access Management

SAU completed its block of administration operations that write changes to the database. The new version can create, edit, and delete users, assign applications to them, and manage group membership and group functions. The team used robotic UI interaction to compare selected workflows with the original application, including the resulting database changes.

Further progress covered passwords and credentials. Components for password policy, enhanced security settings, email configuration, and restoring user access were accepted. The password block as a whole remains in progress: changing one's own password still depends on an audit of the shared SPOL security layer.

For system administrators, accounts, groups, and permissions are everyday tools. Their migration moves SAU from its initial framework toward the functions that determine who can access each module and what they are allowed to do there.

### The Civil Registry Has a Plan, with Tests Prepared in Advance

The MAT implementation plan was incorporated into the development branch. It covers the Civil Registry and certification of copies and signatures, two functional areas within a single application. The sequence starts with a shared foundation, continues with certification, and then moves on to the Civil Registry, integrations, and final verification. During the week, the plan was also translated into work items, with their dependencies and verification conditions refined.

At the same time, an automated test project was created for the Civil Registry, along with the first scenario suites verified by working through the original program. These cover areas such as startup and licensing, owner selection, the active desktop, help, and settings. The suites capture expected behavior for later comparison with the new version.

Preparing tests before implementation helps separate the requirements from an AI agent's output. For a given function, the team can establish in advance what the user should see and how the application should respond, then assess the migration against those expectations.

### UIR Clarifies Which Work Is Complete

UIR expanded automated verification of user workflows and added final assessments of codebooks and other components. Referential integrity checking was closed with reservations. For address objects, verification confirmed that the other forms were connected, while also identifying unfinished GIS functionality.

This area therefore remains open. A decision is needed on whether to complete the GIS integration or explicitly exclude it from the migration scope. The final checks provide a concrete picture of what already works and what still prevents acceptance of the whole component.

For HAIFA, this week brought together three significant results: newly implemented functions, detailed requirements for another module, and verification against the behavior of the original Fenix. Connecting these activities makes it possible to manage several migrations at once and continually assess the actual state of each one.

[Back to the homepage]({{ lang | homeUrl | url }})
