---
title: "Cloud Database for Fenix: Proof of Concept Confirms the Path to a Pilot"
date: 2026-09-01
tags:
  - post
  - haifa
  - cloud
  - proof-of-concept
  - helios-fenix
layout: layouts/post.njk
lang: en
translationKey: cloudova-databaze-pro-fenix-poc
permalink: /en/posts/cloud-database-for-fenix-poc/
summary: "The Helios Fenix cloud database proof of concept ran according to plan and passed the technical, platform, legal, and economic gates. The result opens the path to a pilot, not yet to immediate production deployment."
---

## Summary for Non-Technical Readers

We completed the Helios Fenix cloud database proof of concept according to plan. The final verdict is **GO — with necessary code changes**, with a recommendation to continue with a pilot involving approximately 50 clients.

We examined four areas that could have stopped the initiative altogether: application connectivity and responsiveness, the suitability of the selected platform, the legal path, and the basic economics. In all four cases, the solution proved feasible and worth pursuing.

This does not mean that Fenix databases can be moved to the cloud tomorrow. The proof of concept removed fundamental uncertainties and opened the door to a pilot. Before real operation can begin, some batch operations must be changed, operational automation must be prepared, security and legal documentation must be completed, and the planned parameters must be verified with actual clients.

## What the Proof of Concept Confirmed

Both legacy Fenix and the new modules from the NEO_HEF repository can connect to the cloud database, while normal interactive work remains usable. The selected platform — MS SQL Server Express on Linux in AWS — can handle the Fenix database profile, including Czech data, triggers, and concurrent access from original and migrated modules.

The technical verification was complemented by an assessment of the operating model, costs, and legal requirements. The basic economics look promising, and the path to registering the cloud offering in the Czech Digital and Information Agency's cloud catalogue is known.

The HAIFA, Krypton, and AVA DevOps teams worked on the verification together with the product manager. Importantly, this was not merely a theoretical architecture proposal. Connectivity, compatibility, latency, and selected load and end-to-end scenarios were measured in practice.

## The Potential This Opens Up

In the future, a cloud database could change how Fenix is operated. It opens a path toward a centrally managed service, more predictable operations, and new commercial models, including a gradual move from licences to a SaaS-style service.

There is also significant potential in shared infrastructure for a larger number of smaller clients. If the pilot confirms the proof-of-concept assumptions, a single managed platform could serve dozens of databases while unifying monitoring, maintenance, and further development. For customers, this could mean fewer concerns about running their own database server; for us, it could provide better control over the environment in which Fenix operates.

The most important outcome is therefore not simply that the application connected to a database in the cloud. A general possibility has become a concrete direction with a selected platform, measured characteristics, and a defined next step.

## What Must Be Done Before Real Operation

The largest technical obstacle is batch processing that currently sends large numbers of individual queries. This approach is still tolerable on a local network, but over the internet, network latency multiplies the duration of every step. Operations that take minutes locally can run for hours without changes. These areas will need to be converted to set-based processing.

Backup and recovery without SQL Agent, monitoring, updates, service availability, and secure access from client locations must also be prepared. Cross-database integrations with other databases and the real client density of the infrastructure still need verification. Today, this is a planning model; reliable figures will only come from telemetry and a fully loaded pilot environment.

The legal and security areas require work as well. We already have the provider registration and ISO 27001 certification, but the specific cloud offering will still require materials including a penetration test, an independent assessment of continuity and recovery, and a risk evaluation.

## The Proof of Concept Did Its Job

The purpose of the proof of concept was not to build a finished production service. It was to determine whether the initiative would encounter a fundamental technical, platform, legal, or economic obstacle. It fulfilled that purpose: none of the planned gates stopped further progress.

The next sensible step is a pilot involving approximately 50 clients. It must confirm behavior in real operation, refine costs and sizing, and reveal the actual scope of the necessary changes. The proof-of-concept result allows us to enter this work with substantially less uncertainty — and with potential that is worth validating.

[Home]({{ '/en/' | url }})
