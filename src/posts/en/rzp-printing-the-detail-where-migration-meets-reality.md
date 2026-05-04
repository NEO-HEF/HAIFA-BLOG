---
title: "Printing in RZP: The Detail Where Migration Meets Reality"
date: 2026-04-21
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - printing
layout: layouts/post.njk
lang: en
translationKey: tisk-v-rzp-detail-na-kterem-se-lame-realita-migrace
permalink: /en/posts/rzp-printing-the-detail-where-migration-meets-reality/
summary: "The migration of print outputs in RZP shows why NEO_HEF is not just a mechanical rewrite of forms. Even one reporting flow can become a technical project of its own."
---
## Summary for Non-Technical Readers

At first glance, printing can look like a detail. In projects such as NEO_HEF, exactly these details decide whether the migration is actually usable in practice. It is not enough for users that the application opens; they also need outputs, exports, and reports to work just as reliably.

RZP printing is a representative case. The team is not only solving the look of one report. It is dealing with the whole technical chain from data preparation to the final PDF output.

## Why It Is Complicated

The documentation describes that the original VB6 solution is built on a combination of SQL data, an Access MDB intermediate layer, and Crystal Reports. The new implementation therefore cannot simply "redraw" printing into a new form. It must preserve compatibility with existing reports while finding a reasonable way to run the whole flow in the new world.

This led to an architectural decision to use a **satellite process** for Crystal Reports. In other words, the reporting engine runs separately from the main application, reducing risk and preserving technical feasibility.

## What Is Encouraging

In the case of `RZP`, this is no longer only theory. The project already has technical research, a formal ADR, a PoC, smoke tests, and a visually verified PDF output. That is exactly the kind of evidence showing that the team can move complex legacy behavior into a more modern architecture without losing parity.

For the public, this may be "just printing." For the migration, it is one of the moments where we can tell whether the strategy works in hard reality.

[Home]({{ '/en/' | url }})
