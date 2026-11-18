---
title: "Week Thirty-Six - REN Enters Implementation, ROB Expands Life Events"
date: 2026-11-15
week: "Week Thirty-Six"
period: "November 9, 2026 - November 15, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w46
permalink: /en/posts/neo-hef-2026-w46/
summary: "The Property Register moved from analysis to the first parts of its new application and verified integration with a ČÚZK test service. ROB expanded life events and integration with the basic registers. The Civil Registry is migrating register books and certifications, while SAU accepted update settings and further administration tools."
---

## Summary for Non-Technical Readers

In week thirty-six of the NEO_HEF project, work began on the new **Property Register application, REN**. The analysis of the original program was followed by an implementation plan and the first parts of application startup and the main menu. The team also verified a way for the new application to use the existing library for communication with the Czech Office for Surveying, Mapping and Cadastre, ČÚZK. In a test environment, owner details were successfully retrieved and saved to a test database.

**ROB, the Population Register, added further changes in a citizen's life:** marriage and partnership, divorce and the termination of a partnership, and moving away, including related changes affecting family members. Work also continued on migrating the citizen detail form and functions for integration with the basic registers.

The Civil Registry expanded its foundation for working with register books and advanced the certification workflow, including administrative fee calculations and payment details. SAU, Application and User Administration, accepted the block for configuring automatic updates and backups, along with further tools for administrators. Work continues on completing and verifying entire user workflows across these modules.

## What Happened

The week of November 9–15, 2026 advanced four concurrent migrations. REN moved from analysis into implementation, ROB expanded specific administrative tasks, the Civil Registry connected its shared foundation to individual register books, and SAU completed further administration blocks.

### REN Begins Turning Its Plan into an Application

Following last week's approved analysis, the Property Register's implementation plan was incorporated into the project. This was followed by the first parts of application startup, the main menu tree, and rules governing menu availability according to the user's role, database structure, and available data. Some of these rules are already connected to the application; others await subsequent startup steps.

A significant result was the verification of integration with the library for ČÚZK remote-access web services. The new application runs this library through a separate helper process that preserves the environment required by the original component. Tests using a test database and trial service demonstrated successful retrieval of owner details and the corresponding database writes. Error responses were also checked.

This result establishes a viable path for one of REN's important external integrations. It provides a foundation for the migration of the actual land parcel, building, and other records. Live verification of the original program, its grids, report templates, and import input data also continued, so that subsequent implementation can build on documented behavior.

### ROB Expands Work with Citizens and Their Families

Further life events followed last week's arrivals, changes of address, and deaths. For marriage and partnership, verification covered both forms and input checks, as well as the resulting records for both people. Selected scenarios were compared with the original application on a database copy, including differences in how partnerships are handled depending on when they began.

The migration added moving a citizen away, with or without a new address, and the follow-up workflow for a spouse, partner, and children. This includes change history, operation logs, and integration with subscriptions to notifications from the basic registers. For the user, this is a single action; in the database, several related records must remain consistent.

Implementation also continued on the citizen detail form, address verification in the basic registers, and importing details from AISEO, the population records information system. Verification here has a specific limitation: live retrieval from AISEO was not possible because the test environment lacked the required certificate. Some behavior is therefore supported by automated tests and prepared service responses; these do not replace full live verification.

### The Civil Registry Migrates Books and Advances Certification Details

The Civil Registry gained a shared foundation for register book lists and civil registry entry details. Data components and checks followed for birth, marriage, and death records, as well as registered partnerships. This shared implementation allows recurring behavior to be migrated once while preserving the differences between individual books.

The Copy and Signature Certification agenda gained a register book list with filtering and related record actions. The certification detail form advanced from its initial structure to loading data, displaying history, calculating administrative fees, handling payment details, and filling in the record number and payment reference. These are parts of a workflow that still requires completion of saving and a final comparison with the original program.

Controls displaying the verification status of a person and address in the basic registers are also prepared. Actual register calls from this detail form still await integration with other components. In parallel, work continued on preparing and verifying automated user scenarios against the original application.

### SAU Completes Further Tools for Administrators

SAU's block for configuring automatic updates and backups was accepted. It covers configuration, related credentials, update logs, and user backup settings. Acceptance followed comparisons of selected states in the original and new applications.

Other completed components cover file storage administration, exporting and importing stored files, and connections to external administration tools. A check was also added that links requirements and recorded deviations to their tests. Its purpose includes identifying gaps in coverage, so that the final decision on the module can be based on concrete evidence.

Acceptance of these blocks does not yet complete the SAU migration. Follow-up checks and unfinished components remain, including further work on the license record. The HAIFA team is gradually expanding the range of migrated functions while clarifying which parts are ready for acceptance and which still require verification.

[Back to the homepage]({{ lang | homeUrl | url }})
