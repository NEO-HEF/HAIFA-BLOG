---
title: "How to Migrate an ERP Without a Big Bang"
date: 2026-04-19
tags:
  - post
  - haifa
  - neo-hef
  - architecture
layout: layouts/post.njk
lang: en
translationKey: jak-se-migruje-erp-bez-velkeho-tresku
permalink: /en/posts/migrating-erp-without-a-big-bang/
summary: "NEO_HEF is not building a new system next to the old one. It relies on controlled module-by-module migration, parallel operation, and a strict repeatable five-phase process."
---
## Summary for Non-Technical Readers

One of the most important things about NEO_HEF is that it is not being migrated in the style of "one day we turn the old system off and turn the new one on." The project is designed so that old and new parts of the system can exist side by side for a period of time and the transition can be controlled.

For this kind of ERP system, that is essential. In critical operations, predictability and control are much more valuable than a quick but risky gesture.

## The Model the Team Uses

The project architecture is based on the **strangler fig** approach. In practice, this means Fenix is migrated **module by module**, while the old and new versions share the database world and the migration runs in controlled coexistence.

Each module is expected to go through the same five-phase process:

1. `Code Dissection` - a precise analysis of the module's real behavior.
2. extraction of business logic and unit tests,
3. migration of forms to `.NET WinForms`,
4. automated parity testing,
5. gradual distribution from pilot to broader rollout.

That may sound process-heavy, but this is exactly where the program's strength lies. The team is not relying on module-by-module improvisation. It is trying to turn migration into a production line with repeatable steps, checkpoints, and measurable outputs.

## What Follows From This

If this model holds, each later migration should be faster than the previous one. Not because later modules will necessarily be simpler, but because the team is continuously building a knowledge base, decisions, testing patterns, and implementation rules that can be reused.

This is where a technical project becomes a strategic investment. The greatest value may not be only that one module will run newly in `.NET`, but that the company learns how to repeat migration at a larger scale.

[Home]({{ '/en/' | url }})
