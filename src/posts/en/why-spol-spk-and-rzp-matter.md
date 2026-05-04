---
title: "Why Everything Revolves Around SPOL, SPK, and RZP"
date: 2026-04-20
tags:
  - post
  - haifa
  - neo-hef
  - modules
layout: layouts/post.njk
lang: en
translationKey: proc-se-vsechno-toci-kolem-spol-spk-a-rzp
permalink: /en/posts/why-spol-spk-and-rzp-matter/
summary: "Anyone following the NEO_HEF documentation keeps running into SPOL, SPK, and RZP. That is not accidental: this is where the project proves whether the migration can start safely and in the right order."
---
## Summary for Non-Technical Readers

When you look at the NEO_HEF documentation, three abbreviations appear again and again: `SPOL`, `SPK`, and `RZP`. This is not an internal acronym game. It reflects the project's real priorities.

These three areas show whether the team can correctly separate the shared technical foundation from a concrete business module. That separation is critical for the migration.

## What Each Layer Means

`SPOL` represents the shared platform layer and many capabilities used by different parts of the system. `SPK`, or `Asseco.Fenix.SpolecneKlient`, is the technical baseline for the new shared foundation in `.NET`. `RZP` is a concrete business module where the team can verify that the shared layer really works as a foundation for a real migration.

That is why the documentation does not say "let us first rebuild all of SPOL," and it also does not say "let us jump straight into RZP." The recommended sequence is more precise: first close planning readiness and the shared boundary, then lead the first physical implementation through `SPK`, handle part of the shared work through adoption in `SPOL`, and only after stabilization open the next steps in `RZP`.

## Why It Matters

If a program like this chooses the wrong order, the team can easily build a large part of the new architecture on assumptions that are not yet closed. That leads to rewrites, wasted time, and blurred responsibilities. In NEO_HEF, the opposite effort is visible: confirm the shared foundation first, then attach the first business consumer to it.

That may be less flashy than a quick demo of a finished form, but it matters much more in the long run. The correct implementation order is one of the factors that determines whether the migration will accelerate or slow itself down.

[Home]({{ '/en/' | url }})
