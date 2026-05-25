---
title: "Week Eleven - RZP Gets Allocation Recipes, Reports, and Automated Tests"
date: 2026-05-24
week: "Week Eleven"
period: "May 18, 2026 - May 24, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w21
permalink: /en/posts/neo-hef-2026-w21/
summary: "Week eleven brought another practical step for RZP: allocation recipes ODKUD/KAM, allocation run forms, reporting screens, E2E test orchestration, and the experimental start of UCV."
---
## Summary for Non-Technical Readers

Week eleven of the HAIFA project brought another move from isolated screens toward usable parts of the RZP module. The team worked on allocation recipes, allocation functions, reports, and automated testing. This is no longer only about adding new forms. The important part is that the forms are starting to connect to data, menus, search, printing, test infrastructure, and checks against the original Fenix behavior.

The area of RZP allocation recipes ODKUD/KAM moved forward significantly. The new forms can already work with dynamic dimensions derived from the allocation sentence definition, load and save records, search, sort, and open related codebooks. In parallel, work continued on forms for running allocation and on reports, where the team is now dealing not only with appearance, but also with shared infrastructure for temporary databases and report generation.

Automated testing also played a major role. A more unified test orchestration was added, together with an E2E scenario catalog, inputs for comparison with the original application, and HTML reports. This matters because a system of this size cannot be controlled only by manual checks over the long term. Automated tests are starting to create a repeatable safety net for further development.

At the same time, shared foundations outside RZP continued to grow. The SPOL shared layer is gaining support for the legacy `CommonDialog`, which is used in many places across the old VB6 modules. Next to that, the experimental migration start of UCV, the reporting module, began. In the legacy version, UCV has 212,595 lines of code and 44 forms; for comparison, the pilot RZP module has 55,943 lines of code and 25 forms. The team is using the `a5c babysitter` orchestrator here to test whether long-running, more complex migration processes involving multiple AI agents can be automated further.

## What Happened

The week's history covers `May 18, 2026` to `May 24, 2026`. In `origin/develop`, `23` changes were merged during this period, and most of them either expanded RZP functionality directly or improved the tools used to control the migration safely.

### RZP Allocation Recipes ODKUD/KAM

The largest functional move happened in allocation recipes. `RecipeSourceForm`, corresponding to the original `RZP_PREO.FRM`, became part of the form chain used for working with recipes. The user can move from the recipe codebook through recipe level to the source and target side definition.

The implementation did not stop at a visual shell. It added loading, creating, saving, and deleting records, duplicate checks, protection against deleting linked data, account handling across fourteen dimensions, search, dynamic sorting, and codebook menus. The form also reacts to the current allocation sentence definition and uses it to build the visible columns and fields.

Some items remain open. Functions such as printing or copying recipe detail still depend on later parts of the migration. The important point is that there is now a concrete functional base and matching test coverage. The team also completed an audit of planned tests: most mandatory scenarios are passing, and the last parity test mainly needs reference data captured from the original VB6 application.

### Allocation Forms in RZP

Work also continued on the part of RZP that handles the allocation run itself. Three connected screens were converted into the new application: allocation selection, results overview, and allocation execution. Importantly, they remain separated in a way that follows the original application, instead of being merged into one new screen.

The team added the presenter layer, context passing between forms, service registration, and menu integration. Layout alignment against the original application followed. This continues the earlier work on visual fidelity: the new forms are closer to the original Fenix, while the team still keeps a clear distinction between completed appearance and business logic that is not fully finished yet.

### Reporting and Print Forms

RZP reporting moved forward in two directions. The first one was the technical foundation for report generation. The lifecycle of the helper database `NeoFenixpom.mdb` was moved to shared infrastructure, and the team added mechanisms for preparing report data, writing it into a temporary database, and calling the report-generation satellite.

This was followed by a parity gate for one of the first reports. Its purpose is to compare the output of the new implementation with the original behavior. The first runs against the development database remain a separate step, but the infrastructure for that kind of check is already prepared.

The second direction was the user interface itself. Pure conversions were added for report configuration and print-format settings forms. This was intentionally done first as UI scaffolding without complete business logic. The team also prepared validation notes for visual review, so testers have a clear reference when comparing the new screen with the original.

### Automated Testing and QA Infrastructure

A major event of the week was unified test orchestration for RZP. Scripts were added for different test-running modes, along with an E2E scenario catalog, parity inputs, screen-based test materials, and readable HTML reports.

In practice, testing is starting to have a more unified process. Some tests can run as quick smoke checks, others as a fuller regression suite or as isolated E2E scenarios. This matters especially in legacy migration, where a defect often does not appear in one class alone, but in a combination of a form, database, menu, search, and expected user behavior.

A separate E2E test project for RZP was also added. It covers scenarios such as owner selection, codebooks, search, settings, years, and other user-facing flows. Automation is therefore no longer just an add-on to development. It is becoming one of the main tools for keeping migration quality under control.

### Shared Dialogs in SPOL

In the shared SPOL layer, work continued on replacing the legacy VB6 `CommonDialog`. The first completed chapter covers printer and page setup, which the legacy application used through `Action = 5`.

This may look like a technical detail, but its meaning is broader. The old `CommonDialog` is used across Fenix modules, and it cannot simply be replaced by one generic modern dialog. The new approach therefore introduces a shared interface, service, and testable boundary that concrete modules will be able to use gradually.

### Experimental Start of UCV

Alongside RZP, the team also started preparing UCV, the reporting module. This is not a full implementation yet, but rather an AS-IS specification, inventory, and migration plan. According to `modules.json`, UCV has 212,595 lines of code and 44 forms in the legacy version. For comparison, the pilot RZP module has 55,943 lines of code and 25 forms. In terms of code size, UCV is therefore roughly four times larger than RZP, although the number of forms is not as dramatically different. UCV migration status is recorded as an experimental start from May 13, 2026.

What makes UCV especially interesting is that it is also being used as an experiment in a higher degree of automation. The migration is helped by the `a5c babysitter` orchestrator, which is designed for longer-running and more complex processes involving multiple AI agents. The team is testing how far migration automation can be pushed without losing control over the output.

The hardest part of the overall migration still remains human review of AI-agent outputs and the follow-up refinement work. In a legacy application conversion, it is not enough for an agent to produce code or a screen that merely looks functional. The team has to remove unrequested LLM creativity, guard fidelity to the original, and continuously correct places where the new output diverges from the original Fenix more than the migration can accept.

Preparing UCV in parallel makes sense, but the actual conversion must respect the state of shared components and the experience gained on RZP. In other words, RZP remains the pilot module, while UCV is being prepared so the next phase of the project does not start from zero.

## Why This Week Matters

Week eleven showed that the project is moving from individual conversions into system-level migration. RZP is no longer just a set of screens. It is gradually gaining working allocation recipes, allocation scenarios, reporting links, and automated checks. At the same time, shared components are being created for later modules as well.

Not everything is finished. Some functions depend on later migration steps, some parity tests still need reference data from the original application, and some forms currently have mainly a visual shape without complete logic. Even so, this was an important week: the project is beginning to show not only migration speed, but also the technical discipline needed to keep quality under control in later stages.

[Home]({{ '/en/' | url }})
