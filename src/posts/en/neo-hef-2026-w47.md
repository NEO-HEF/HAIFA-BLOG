---
title: "Week Thirty-Seven - SAU Completes Its Final Report, ROB Expands Election Administration"
date: 2026-11-22
week: "Week Thirty-Seven"
period: "November 16, 2026 - November 22, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w47
permalink: /en/posts/neo-hef-2026-w47/
summary: "SAU's final report comparing the new and original applications has been approved, with remaining QA checks identified. ROB expanded election administration and imports, the Civil Registry connected register book details and certification saving, and REN made territorial directories accessible and laid the groundwork for owner records."
---

## Summary for Non-Technical Readers

In week thirty-seven of the NEO_HEF project, **SAU, Application and User Administration, reached approval of its final report comparing the new application with the original program**. The report summarizes migrated functions, known differences, and remaining verification work. It provides an important basis for accepting the module, while some quality checks and follow-up fixes continue.

**ROB, the Population Register, expanded election administration with operations on individual voters** and advanced the migration of imports from population records. The Civil Registry connected register book lists to birth and marriage record details and added saving of certification records. Individual migrated components are thus coming together into longer workflows.

REN, the Property Register, built on the first application components from last week. Additions included reference lists, cadastral area selection, and territorial directories accessible from the menu. Work also began on the foundation for owner records, which the actual property records will build on.

## What Happened

The week of November 16–22, 2026 highlighted different stages of the concurrent migrations. SAU brought its results together in a final assessment, ROB and the Civil Registry expanded administrative workflows, and REN progressed from its basic application environment to its first usable directories.

### SAU Has a Final Report and Defined Follow-Up Work

On November 18, SAU's final report comparing its behavior with the original application was approved, closing the corresponding implementation plan step. The license record block was also accepted during the week. The report connects the results of checks performed so far to specific requirements, including user and permission management, passwords, imports and exports, and printed reports.

The final comparison included previews of twelve reports. On the first pages compared, the content matched except for one line wrap; differences in the viewer window were recorded separately. Concurrent use of the original and new applications was also checked. The scenarios tested showed no additional data loss compared with running two instances of the original application.

**Approval of the report does not mean that every check has passed.** Gaps remain in test coverage, verification of complete user workflows, and follow-up fixes. The value of this milestone is a precisely documented status: the team knows which results are supported by evidence and what QA, the quality assurance team, still needs to verify.

### ROB Expands Elections and Population Data Imports

Following the life events covered in previous weeks, election administration made substantial progress. The voter form gained creation, editing, deletion, and update operations, along with connections to citizen details and printing. Changes to an electoral roll combine data updates with duplicate checks and renumbering. Selected error scenarios were checked to ensure that a failed operation leaves no partially saved change.

Migration continued on bulk verification of people in the basic registers, subscriptions to change notifications, and electoral roll comparisons. These functions are particularly important for officials when checking citizens individually would take too long.

Another area of work was imports from ISEO, the population records information system. Logic was implemented for initial and update imports, change listings, and data comparisons, followed by the corresponding windows and settings. Configurable reports, address labels, and demographic outputs were also added. Individual implementations still undergo acceptance and follow-up verification; completing them does not by itself complete ROB as a whole.

### The Civil Registry Connects Books to Details and Saving

The birth record detail form was integrated into the application so that it can be opened from the birth register list and from the duplicate certificate menu option. Similar progress connected marriage record details to the marriage register. Previously prepared forms and services are thus gaining actual entry points from the places where users need to open them.

The Copy and Signature Certification agenda gained certification saving: mapping entered data, checking the address type, writing the record, and refreshing the list after a successful save. This adds another essential part of the workflow to last week's fee calculation and payment details. Work also continued on selecting certifications for printing and defining print outputs.

Lists, details, and their data connections were added for death and registered partnership records. The scope of verification differs between components: for example, the new birth record detail integration was checked through automated tests and against a real test database, while live interaction with the form remained assigned to QA. Function migration is therefore accompanied by separate verification of behavior within the complete application.

### REN Makes Territorial Directories Accessible

REN expanded application startup, settings, and cadastral area selection. These were followed by cadastral reference lists and directories of cadastral areas, municipalities, and their subdivisions. The directories are now connected to the new application's menu.

The territorial directories underwent live comparison between the original and new programs using a database copy. Checks covered opening them from the menu, content, sorting, information windows, and text report outputs. Twelve text outputs matched except for the print time. This provides concrete evidence that the first parts of the new application preserve both the data and the way users work with the original REN.

By the end of the week, the owner data layer and a shared owner list window had been added. The window still awaits integration with subsequent workflows, particularly land parcel records. REN is therefore preparing the foundation for its core property operations, with migration of those records continuing in subsequent steps.

[Back to the homepage]({{ lang | homeUrl | url }})
