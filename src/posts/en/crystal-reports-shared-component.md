---
title: "Crystal Reports: The Problem Has Its First Usable Solution"
date: 2026-04-27
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - printing
  - crystal-reports
layout: layouts/post.njk
lang: en
translationKey: crystal-reports-spolecna-komponenta
permalink: /en/posts/crystal-reports-shared-component/
summary: "NEO_HEF has a shared component ready for Crystal Reports. The first supported mode handles reports over a local MDB database and shows a working path through a separate ReportGenerator."
---
## Summary for Non-Technical Readers

One of the riskiest parts of the migration now has its first practical solution. Old Crystal Reports cannot simply be moved directly into the new application, because their runtime belongs to an older technology world. The team therefore chose a safer path: the new application remains in modern .NET, while the actual report generation runs in a separate compatible component.

The important point is that this is no longer only a proposal. There is a shared component ready for individual applications to use, currently for the first report-generation mode: through a local MDB database. From the new .NET application's point of view, the solution also includes a Report Viewer and subsequent export to PDF.

## What Is Done

The new solution separates two things that would otherwise be hard to combine. The application runs in the new .NET and prepares the report inputs. `ReportGenerator.exe` itself is written in .NET Framework 4.8 because of Crystal Reports compatibility. Communication between them happens through a clear request and result, so the application does not need to embed the old Crystal runtime directly.

The first supported mode works with a local `MDB` database. This is key for `RZP`, because it matches an important part of the legacy printing approach: the application prepares data in a helper database, and Crystal Reports runs it through a defined `.rpt` report.

Two more report usage modes have also been identified in the legacy system. The second mode is a direct SQL query instead of an intermediate `MDB` database. That mode is not used in the first migrated module, `RZP`. The third mode is export to Excel. Both remain expected in the target architecture, but they will be implemented when the team reaches them during the migration of later modules.

## Demo

The video shows the whole flow: starting the application in the new .NET, calling `ReportGenerator.exe`, generating the report, opening it in the Report Viewer, saving it to PDF, and then opening the resulting PDF.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/crystal-reports-rzp-demo-20260427.mp4' | url }}" type="video/mp4">
    Your browser cannot play the embedded MP4 video.
  </video>
  <figcaption>End-to-end demo: the .NET application calls a compatible Crystal Reports worker and the user saves the result to PDF.</figcaption>
</figure>

## Why It Matters

Print reports are the kind of detail that decides whether a migration is usable. Users do not only need to open a new application window; they need to get the same outputs, print them, and save them to PDF without changing their workflow.

The current solution is therefore not the final replacement for all output branches. It is the first production-usable part of the shared component: the mode in which the application prepares data in a local `MDB` database and `ReportGenerator.exe` creates a report from it using the existing `.rpt` definition. Direct SQL reports and Excel exports will be added when they are needed for a concrete later migrated module. For `RZP`, however, the mode the module actually uses is now solved.

[Home]({{ '/en/' | url }})
