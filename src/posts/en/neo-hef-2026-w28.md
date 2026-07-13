---
title: "Week Eighteen - The 10.11 Foundation Is Confirmed and UCV Advances in a Working Branch"
date: 2026-07-12
week: "Week Eighteen"
period: "July 6, 2026 - July 12, 2026"
tags:
  - post
  - neo-hef
  - history
  - week
layout: layouts/post.njk
lang: en
translationKey: neo-hef-2026-w28
permalink: /en/posts/neo-hef-2026-w28/
summary: "Week eighteen had a quieter rhythm because of vacations, but it was not empty: the 10.11 auth/vault foundation moved through SPOL, SPK, and RZP, while UCV advanced significantly in a separate working branch."
---

## Summary for Non-Technical Readers

Week eighteen of the NEO_HEF project ran at a calmer pace for the HAIFA team. It is early July, part of the team is on vacation, and after the June RZP push the work no longer has the same burst pattern as it did just before the first module was handed over. That does not mean the project stopped. The type of work changed: fewer large public milestones, more verification, foundation work, and activity in side branches.

On the main development line, the most important movement was the shift to Fenix 10.11. The team completed parts of the new login flow, password handling, and session handoff through the vault. These are not usually visible to users as a new screen, but without them the new .NET modules could not reliably run against the 10.11 database and environment.

RZP was revalidated against 10.11 this week. The important result is positive: the module did not need to be functionally rewritten. It mainly needed the correct assembly version stamp so the database guard could recognize it as a 10.11 line build, and then it passed startup and login checks against the new database. From the project point of view, this confirms the previous conclusion: RZP 10.11 is a revalidation of the delivered module, not a second RZP migration.

Apart from `develop`, a lot of interesting work happened in a separate working branch for UCV. That branch has not yet been merged into the main development line, but it is being prepared as one of the next integration steps. For that reason, it should not be presented as a finished integrated result, but it is still important: UCV made significant progress there in checks, statement families, 10.11 delta changes, live database wiring, and additional screen wireup.

In short: the project is moving at a more relaxed vacation-season pace, but the direction is clear. The stable RZP line remains separate, `develop` confirms the shared 10.11 foundation, and UCV is being prepared in a separate working branch that can become the next major integration step.

## What Happened

During the week from July 6 to July 12, 2026, after updating the remote branches, the `NEO_HEF` repository shows 25 commits in the history of `origin/develop`. The `release/10.01` branch did not receive new commits during this period, which matches its purpose: to preserve the stabilized RZP 10.1 handoff line and keep 10.11 development out of it.

Outside `develop`, the most interesting line was the separate working branch for UCV. In this week alone it contains 72 commits that are not in the current `origin/develop`. This is therefore substantial parallel work, but still work outside the main branch. It is also a branch being prepared for an upcoming merge back into `develop`. Some short-lived working branches that appear in the week's log are no longer present on the remote after `fetch --prune`: their results were merged into `develop`, and the branches themselves were cleaned up.

### Vacation Pace and a Less Linear History

Compared with the June RZP finish, the pace is visibly lighter. That makes sense: vacations have started, and the project is also past its first major handoff. Instead of one linear sprint line, several streams are visible now: the stable release branch for RZP 10.1, the main development branch for the 10.11 foundation, and a separate working branch for UCV.

For readers, the practical point is simple: commit counts no longer tell the whole story by themselves. Some changes are small but strategic, such as changing an assembly version or adding a parity test. Others are large but remain outside `develop` until they pass integration and review.

### SPOL and SPK Completed an Important Part of the 10.11 Foundation

The main branch closed important work around authentication and vault support for 10.11. In practice, this means moving from the older password storage mechanism to the new `uziv_pwd` model, porting the security core, wiring the login screen to the new authentication outcomes, and adding the client for communication with VaultServer.

The important part is that this is not being implemented as a separate local copy next to the system. SPOL and SPK carry the shared foundation: a module must be able to find and use the vault, speak the same wire protocol as the legacy side, and fall back correctly when the vault is unavailable. The documented tests this week verified communication with the real `VaultServer.exe` binary, not only a test double.

The work also included wiring the consumer of the vault descriptor into the normal quiet-login path. This is where the module learns to receive the session from a Launcher start safely and with parity.

### RZP Passed Revalidation Against 10.11

Once the 10.11 auth/vault foundation was complete, RZP revalidation followed. The result is good for the project: on 10.11, RZP behaves like the module already validated in the 10.1 line, with no changes to module business logic. The only significant finding was versioning. The build was still stamped as 10.1, so the database guard correctly rejected the 10.11 database as too new. After changing `VersionPrefix` to 10.11, the guard accepted the database.

This is a small technical detail with real meaning. It shows that protection against running on the wrong database is working, while also reminding the team that every module and host must carry the right build version for a new version line. That finding therefore became a broader follow-up for repository-wide versioning in the 10.11 line.

RZP was checked in standalone mode and under the Launcher, against the `fenix_1011` database and the new login foundation. The documentation summarizes the outcome as RZP being ready for a 10.11 pilot, while noting that some production paths around the Launcher-side producer of the vault descriptor remain outside this specific revalidation scope.

### RZP Strengthened Its Parity Evidence

Alongside the revalidation itself, the team continued adding parity evidence for RZP. The most visible item was the capture of golden fixtures for copying allocation recipes. This week, all six planned inputs `I1` through `I6` were captured, including cases that could not be triggered in the current database without preparing test data.

This is not a new user-facing feature, but it is an important safety net for the project. Copying recipes includes edge cases around cross-year copying, shorter and longer definition masks, dimension merging, and account deduplication. Once these cases are captured as golden data, the .NET port can be checked against concrete legacy behavior, not only against a general description.

RZP also gained the second HZTL progress-dialog consumer for level copy. The first part already existed for the catalog-level recipe copy; the same parity pattern is now applied to copying an individual level. It is a typical migration detail: the user only sees a short progress window, but for module fidelity it matters that it behaves like the original Fenix.

### UCV Advanced in a Branch, but Is Not Yet in Develop

The most interesting work outside `develop` is the separate working branch for UCV. In that branch, UCV is moving from "a lot of code exists" toward "the module can realistically be finished and verified." The branch documentation itself says this is not yet a completed merge into `develop` or a closed PR, but this work is expected to become a candidate for integration into the main development line soon. That is why it needs to be described carefully: it is an important development stream, but not yet the publicly integrated state of the main line.

Substantively, the work is significant. UCV now has a large part of its check and linkage logic in place, including the `VazbyRule` core, family rulesets, Dapper providers, and live-DB smoke tests. The documented test status is in the thousands of passing tests with no failures. It also matters that normal unit tests are separated from live integration tests, so the fast suite remains green without database access and live verification can be run intentionally.

In the 10.11 delta area, UCV moved mainly around statements and checks. Changes were added for F69 and the 2026 reform, the new F70 family, 2026-specific checking rules, switching the live test harness to `fenix_1011`, the UNL seed version, and other steps around item masks and statement variants. This is exactly the difference from RZP: for RZP, 10.11 is a revalidation; for UCV, it is a real delta implementation in module-owned code.

The branch also covers the more practical side of usability: form wireup, overview grids, responsible persons, ARES, File2Db for SUZ attachments, a shared mail sender, and shared session bootstrap work. Some of these already have completed steps and tests in the branch, while others are recorded as part of the remaining finish plan. The main message is clear: UCV is no longer only a theoretical next module on the list. It has its own active working branch with concrete content and real integration questions.

### Why This Week Matters

Week eighteen does not look like a large public turning point. That is partly because of vacations and partly because the project entered a different phase after the RZP handoff. Less effort is spent finishing one module; more effort is spent proving that the factory can carry several lines at once.

That is an important test for the HAIFA team. `release/10.01` remains quiet and protects the delivered RZP. `develop` confirms the 10.11 auth/vault foundation and revalidates RZP against the new database. Alongside that, the separate working branch for UCV shows what the next larger module with real 10.11 delta work looks like.

If these streams can be brought together safely, the project will not depend only on having once managed to deliver RZP. It will have a model for maintaining a released line, upgrading the shared foundation, and preparing the next module without turning everything into one large jump.

[Home]({{ '/en/' | url }})
