---
title: "Week One - The Working Foundation for Migration Is Created"
date: 2026-03-15
week: "Week One"
period: "March 9, 2026 - March 15, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w11
permalink: /en/posts/neo-hef-2026-w11/
summary: "The project truly started: the team brought the first major parts of the original system into the repository and prepared the technical base for further migration."
---
## Summary for Non-Technical Readers

This week, the project genuinely came into existence as a working base for migration. There is no visible new functionality yet, but there is an essential first step: get the original system into the repository so it can be safely worked with, analyzed, and used for planning the migration.

That is a good signal. It means the work did not start with improvisation, but with building a firm foundation. Without that, the later migration would be unclear and risky.

## What Happened

The first project week, calendar-wise `2026-W11`, is the actual beginning of the repository. The original VB6 foundation enters the history, along with the first large modules: `SPOL`, `KDF`, `UCA`, `UCV`, `SCH`, `BAN`, `KPP`, `OBJ`, `MAT`, `ROB`, `POH`, and `MTZ`.

Alongside the sources, the environment for the migration is prepared as well. `lib`, migration libraries, OCX/TLB artifacts, path updates for shared modules, and a database schema document are added.

The main reading of this week is simple: the team first needed to capture the basic image of the original system in the repository and lock down technical dependencies so later work could build on it.

[Home]({{ '/en/' | url }}) · [Summary Article]({{ '/en/posts/neo-hef-history-recap/' | url }})
