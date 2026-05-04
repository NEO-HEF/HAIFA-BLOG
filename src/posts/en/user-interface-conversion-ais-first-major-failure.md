---
title: "User Interface Conversion: AI's First Major Failure"
date: 2026-05-04
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - ui
  - ai
layout: layouts/post.njk
lang: en
translationKey: prevod-uzivatelskeho-rozhrani-prvni-velke-selhani-ai
permalink: /en/posts/user-interface-conversion-ais-first-major-failure/
summary: "During the conversion of RZP forms and menus, the team hit the first major failure of the AI agent: the outputs did not follow the original VB6 interface and were not practically usable."
---
## Summary for Non-Technical Readers

The NEO_HEF project has moved to another visible part of the migration: converting the forms and menus of the `RZP` module from the original VB6 world into the new `.NET WinForms` solution. This is where the team encountered the first truly significant failure of the AI agent.

The first outputs were completely unsatisfactory. The issue was not only that modern WinForms have different properties from the historic VB6 interface, which could by itself make the resulting screens look less elegant. The deeper problem was that the agent failed to stay close to the original. It invented its own changes, merged forms, replaced controls with different ones, and the screens it produced mostly did not actually do anything.

This is an important finding. In the previous phases, when the team was analyzing the original system, preparing implementation plans, and building non-visual code, the AI agent's outputs were well comparable with human work. User interface conversion exposed a different kind of problem.

## What Happened

The goal of the conversion is not to redesign RZP according to current design trends. The goal is to convert existing forms and menus so that the new application matches the original behavior and users can keep relying on familiar workflows.

The first attempts by the AI agent did not meet that requirement. Instead of a faithful conversion, the team got screens that were nowhere near the original. The agent added supposed improvements, changed form structure, merged separate screens into one, and replaced original controls with different ones. The result was not a migrated application, but rather a loose interpretation of what the agent thought the application could look like.

Even more seriously, the generated interface mostly did not have working behavior. Drawing a similar-looking window is not enough. A form must have the correct controls, bindings, events, menu structure, and behavior matching the original application. That is exactly where the first outputs failed.

## Why This Is Different

So far, work with the AI agent has mostly been analytical or technical implementation work. The agent has been useful when reading the original system, preparing implementation plans, and producing non-visual code. In those areas, the work can be specified fairly precisely: rules, interfaces, data flows, and expected results can be described in a controlled way.

The user interface is much more sensitive to detail. The position of controls, their type, names, relationships, action order, and menu structure are not cosmetics. In an ERP system, they are part of the workflow. When the agent replaces one control with another or merges two screens, it may change not only the appearance but also the way users work.

That distinction matters for the project. It shows that UI conversion cannot be treated as ordinary generation of new forms from a short prompt. It needs much stricter control of fidelity to the original and probably a different workflow than the one used for non-visual parts of the system.

## What The Team Is Trying Next

The HAIFA team is now working on how to overcome this technical obstacle. Better prompts, more precise instructions, smaller and more tightly controlled conversion steps, and alternative workflows are all on the table. The common goal is to give the agent less room to drift away from the original VB6 interface.

The team has also asked Jakub Karabinoš, our AI guru, for a consultation. The aim is to see whether he can suggest a more effective way to anchor the agent in the original visual layer and push it toward a more faithful and functional migration.

All we can do now is keep our fingers crossed for the HAIFA team. User interface conversion is a critical step for the migration, and the current failure needs to be taken seriously. We will report further developments here on the blog.

[Home]({{ '/en/' | url }})
