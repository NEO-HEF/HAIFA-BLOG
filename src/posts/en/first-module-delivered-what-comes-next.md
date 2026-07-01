---
title: "First Module Delivered. What Comes Next?"
date: 2026-07-01
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - release
  - ucv
layout: layouts/post.njk
lang: en
translationKey: prvni-modul-odevzdan-co-dal
permalink: /en/posts/first-module-delivered-what-comes-next/
summary: "On June 30, 2026, the first completed RZP module migrated from legacy version 10.1 was officially delivered. The project now moves into hotfix mode for RZP, SPOL/SPK upgrade work for 10.11, smaller RZP adaptation work, and continued work on UCV and UPD."
---

## Summary for Non-Technical Readers

On June 30, 2026, the first completed module in the NEO_HEF project was officially delivered: RZP, the Cost and Revenue Allocation module. It is a module migrated from the Fenix 10.1 legacy version into a new technology stack.

This is an important milestone. It does not mean the whole Fenix system is finished. It does mean that the HAIFA team has, for the first time, taken a concrete module through analysis, migration, shared libraries, testing, reporting, distribution, and handoff.

This also changes the nature of work on RZP. The module is no longer open as a regular development target. From now on, the delivered 10.1 line is mainly expected to receive hotfixes and operational stabilization. The move to 10.11 for RZP will mostly be adaptation work caused by the new database version and shared services.

The next steps go through the shared SPOL and SPK libraries, then through adapting RZP to 10.11, while UCV production continues. Work has also started on UPD, which is related to database upgrades.

## What Was Delivered

The delivered RZP is the first real proof that the HAIFA factory can move a legacy Fenix module into new technology and bring it all the way to a usable handoff version. The delivered RZP version matches the functionality of legacy version 10.1 and stands on the same basic working model: login, shared services, database work, reports, tests, and controlled release of a new version.

This result is not just a rewrite of screens. RZP went through work on master data, allocation recipes, import, allocation itself, reports, print and export outputs, permissions, user messages, and automated tests.

We therefore treat the official June 30, 2026 release as the closure of the first migration stage. Not as the end of care for the module, but as a change of mode.

## What Will Not Happen Now

Work on RZP will not continue as if it were still an open development module. The delivered 10.1 line should remain stable. Changes there should be hotfixes, fixes found during validation, and necessary operational stabilization.

For RZP, the move to 10.11 does not mean a large new functional scope. Version 10.11 matters mainly because of the shared infrastructure that modules connect to. In RZP, we therefore expect smaller adaptation changes so the module works correctly against the new database version and new SPOL functions.

## The Nearest Technical Step: SPOL and SPK

The shared SPOL and SPK libraries must be upgraded first. SPOL is the shared platform layer, and SPK is the shared client. Login, shared services, settings, runtime behavior, part of database communication, and other shared capabilities that do not belong to a single module depend on them.

That is why it makes sense to start there. If RZP were upgraded first in isolation, changes from legacy version 10.11 could be pushed locally into one module and then solved again later in the shared layer. The right direction is the opposite: first a stable shared foundation, then the module.

Once SPOL/SPK is aligned with 10.11, RZP can be adapted to the same legacy baseline. For RZP, this is not about major functional changes, but mainly about verifying and making small adjustments to its connection to the new database and new SPOL functions.

## The Next Module: UCV

After RZP, work continues on UCV, the Reporting module. A significant amount of work already exists in UCV, but it now needs to be put into the same frame as the rest of the project.

The first practical step will be to move and check the work already completed in UCV against version 10.11. Only then does it make sense to continue producing the next parts of the module. This lowers the risk that the team would finish more work against an older baseline and then rewrite it again.

UCV is also a good test of repeatability. RZP showed that one module can be brought to handoff. UCV should show whether the same approach can be repeated more systematically and faster.

## UPD Enters the Picture

Alongside UCV, work has also started on UPD, the database upgrade module. UPD will also have its own screens and user-facing part, but its main importance lies in controlling database changes between Fenix versions.

Migration of a live ERP system is not only an application rewrite. Transitions between database structures, versions, and shared components must also be managed. UPD therefore belongs to the part of the system that will matter not only for the transition from 10.1 to 10.11, but also for every later version, which we know will arrive roughly every six months.

## Why This Matters

By delivering RZP, the project has answered the first fundamental question: can we really deliver a migrated module? After June 30, 2026, the answer is yes.

Now the second question begins: can we turn this into a repeatable process for more modules while also keeping pace with the original Fenix continuing to evolve?

That is why the next work does not lead only to UCV, but also to SPOL/SPK, RZP 10.11, and UPD. The first module has been delivered. Now we will see how well the next phase of migration can be built on top of it.

[Home]({{ '/en/' | url }})
