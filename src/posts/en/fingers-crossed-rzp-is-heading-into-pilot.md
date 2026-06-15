---
title: "Fingers Crossed: RZP Is Heading Into Pilot"
date: 2026-06-15
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - pilot
  - qa
layout: layouts/post.njk
lang: en
translationKey: drzme-si-palce-rzp-miri-do-pilotu
permalink: /en/posts/fingers-crossed-rzp-is-heading-into-pilot/
summary: "The HAIFA team is preparing to hand the first migrated RZP module over to consultants for client pilot deployment by the end of June 2026. This is not the end of the work, but an important move from internal migration toward real-world validation."
---

## Summary for Non-Technical Readers

RZP, the Cost and Revenue Allocation module, is approaching the most important milestone in the HAIFA team’s work so far. By the end of June 2026, it should be ready and handed over to consultants so they can deploy it for selected clients and start collecting feedback from pilot testing.

That deadline still holds. The commitment the HAIFA team made for the first migrated module will be met.

That does not mean the work is easy, or that an approaching date automatically means the module is finished. We are now in the hardest phase: intensive testing, polishing details, comparing behavior with the original Fenix, and catching things that may have been lost or changed during the VB6-to-.NET migration.

The pilot handoff matters because RZP will move from the development and QA team to people who know the module from real operation and can test it under practical conditions. Consultants and clients will see what works well, what needs further adjustment, and where the new version still differs from expectations shaped by the original system.

After the handoff, two large workstreams follow. The first is pilot support and resolving findings that come back from the field. The second is absorbing the new Fenix 10.11 legacy baseline, which the legacy team has just completed. The migration work so far is based mainly on Fenix 10.01, so the team will need to understand what changed and bring the new .NET version into line with the current legacy product.

## Why RZP Matters So Much

RZP is the first module on which the NEO_HEF project is proving the full migration approach. This is not only about converting a few screens. RZP tests whether the team can migrate a real Fenix module so it can be launched, used, tested, installed, handed over to consultants, and gradually brought to clients.

That is a different kind of result from an internal proof of concept. A pilot RZP must hold up as a working tool. Users need to recognize menus, forms, validation behavior, reports, printouts, exports, messages, and permissions. And when something does not work, the team must be able to reproduce the issue, fix it quickly, and deliver a new version.

That is why there is so much work around RZP right now. Recent weeks have not only been about “big” features. They have also been about details: validation order, message icons, dropdowns, grid behavior, progress dialogs, report pagination, decimal commas, and whether a window opens as an MDI child or as a modal dialog.

In an ordinary new application, some of these things might be a matter of taste. In a 1:1 legacy ERP migration, they are a matter of parity. The goal is not to invent a new RZP. The goal is to deliver an RZP that behaves like the original module while running on new technology.

## What Pilot Handoff Means

A pilot is not a ceremonial full stop after development. It is a controlled exposure of the module to the real world.

Consultants will receive a version they can use with selected clients. They will watch whether the module covers ordinary work scenarios, whether outputs are understandable, whether installation and updates work reasonably, and whether users get stuck on differences from the original Fenix.

Feedback from the pilot will be essential for the HAIFA team. Automated tests, code review, and comparison with legacy sources are necessary, but they do not replace everything. Real operation can reveal combinations of data, habits, and workflows that may not appear during internal testing.

That is why it makes sense to talk about a consultant handoff, not a final release to all clients. The pilot is a quality-protecting step. It allows the team to collect findings quickly, fix them, and confirm that the migrated module works outside the safe environment of the development team.

## This Is the Phase Where Details Count

The closer the pilot gets, the less glamorous the work looks from the outside. More tests appear, more fixes land, more small parity findings are discussed, and the team has to decide what blocks the pilot and what can remain as a documented cosmetic difference.

That is a normal and healthy phase of migration. The first version of a form can often open a window and load data. Real readiness means edge cases, error states, permissions, exports, reports, cancellation of long operations, and behavior in different user environments also hold up.

RZP has already covered a large part of this path. Reporting and outputs are ready for pilot use. Golden-master tests, E2E scenarios, and more precise checks around allocation recipes are growing. At the same time, the team is still catching things that may have slipped through the migration. That is not a sign of weakness. It is exactly the work that should happen before handoff.

## Fenix 10.11 Enters the Picture

Another important development is the new Fenix 10.11 legacy version. The HAIFA team’s work so far is based mostly on the Fenix 10.01 baseline. Meanwhile, the legacy team has completed a newer version, so the migrated world has to absorb that shift.

In practice, this means two things.

First, the current migration branch based on 10.01 needs to be frozen as a stable baseline. Only defects and pilot-related findings should be fixed there.

Second, the move to 10.11 has to be controlled. The team cannot silently mix changes from the new legacy tree into the .NET version. It will need impact analysis, comparison of differences, and clear decisions about what must change in RZP, SPOL, UCV, and shared layers.

SPOL and UCV will probably feel this most. SPOL is the shared layer behind login, error dialogs, progress dialogs, shared services, and many other behaviors. UCV is the next large module in line, and some of its existing work will need to be checked again against the newer baseline.

This is the reality of migrating a live product. Legacy Fenix did not stop while NEO_HEF was being built. New versions continue to appear, and the project has to handle not only the old baseline, but also changes that keep arriving.

## What Comes Next

After RZP moves into pilot, work will not run in just one direction. Several streams will continue in parallel.

The first stream is pilot support: installation, consultant validation, collecting findings, reproducing defects, fixing them, and releasing updated versions. This will test not only RZP itself, but also the whole delivery path for fixes.

The second stream is the transition to Fenix 10.11. The team must preserve the stability of the pilot RZP while preparing a controlled way to bring new legacy changes into NEO_HEF.

The third stream is UCV, the Reporting module. Work on UCV has already been under way for some time, but honestly only at half speed. The main goal of this quarter has been to deliver RZP. Once RZP moves into pilot, UCV naturally becomes the next candidate for an intensive migration run.

That matters for the HAIFA method as well. RZP shows what it takes to bring the first module to pilot. UCV will show whether the same approach can be repeated faster, more accurately, and with fewer dead ends.

## Fingers Crossed

Handing RZP over for pilot use by the end of June 2026 is a major moment for the HAIFA team. It is not the end of the Fenix migration. It is not even the end of work on RZP. But it is the first real proof that NEO_HEF can move a concrete module from internal development toward real deployment.

Now the focus is quality. Patient testing. Fixing even small differences. Cooperation between development, QA, consultants, and people who know the original Fenix from production use.

Fingers crossed. The first module is heading into pilot.

[Home]({{ '/en/' | url }})
