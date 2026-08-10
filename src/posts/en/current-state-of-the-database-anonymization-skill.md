---
title: "Current State of the Database Anonymization Skill"
date: 2026-08-10
tags:
  - post
  - haifa
  - neo-hef
  - gdpr
  - anonymization
  - ai-agents
layout: layouts/post.njk
lang: en
translationKey: aktualni-stav-skillu-pro-anonymizaci-databaze
permalink: /en/posts/current-state-of-the-database-anonymization-skill/
summary: "HAIFA now has two separate skills for working with anonymized databases: one masks the database, the other audits it independently. The current anonymized Fenix database passed a strict audit with no critical or high-severity findings."
---
## Summary for Non-Technical Readers

For the Fenix migration, we need test databases that behave like the real system. They must contain enough varied data to reveal defects in reports, conversions, checks, and forms. At the same time, they must not unnecessarily carry personal data of real people.

That is why HAIFA has built a pair of specialized AI skills. The first skill anonymizes the database. The second skill independently audits the result and looks for remaining personal data using a different method than the one used for masking. This matters: it is not enough for an anonymization process to confirm that it did what its own rule list told it to do. We also need an independent check that looks beyond that list.

After several iterations, the anonymization skill for the Fenix database is now in a state where its output passed the strict audit skill as acceptable. The audit went through 1301 tables and 16,528 columns. It found no critical or high-severity findings.

This does not mean the anonymization skill is a universal button for any database. The anonymization skill is currently tuned for the Fenix database. For another database, it would have to be adjusted and tuned over several iterations. The audit skill, on the other hand, is transferable without modification: it can be run over another database and help identify what the anonymization rules still missed.

## Two Skills, Two Different Roles

Anonymization and audit are two different activities.

The anonymization skill knows the Fenix database and its masking rules. It knows where names, personal identification numbers, addresses, accounts, dates of birth, technical attachments, and other sensitive values appear. Its goal is to create a database copy that keeps its shape and remains usable for development and testing, but no longer contains the original personal data.

The audit skill has a different role. It does not repeat the same rule list. It looks at the result as an independent control: it walks through tables and columns, searches for suspicious values, and checks k-anonymity. K-anonymity means that a specific person should not be identifiable in the database even from a combination of indirect attributes, such as year of birth, gender, and municipality. Each record should blend into a sufficiently large group of similar records. The audit skill therefore also checks columns that may not look risky by name and tries to find remaining personal data using its own method.

This separation is essential. If anonymization and audit were driven by the same list of column names, both parts could easily miss the same defect. Sensitive data can hide in a column with an innocent name, in change history, in an error table, in a staging table, or in a binary attachment. The audit must also look where the anonymization rules originally expected nothing.

## What the Current Audit Showed

The current audit checked the anonymized Fenix database across 1301 tables and 16,528 columns. It did not search only by a dictionary of names. It used an independent sweep of distinct values, k-anonymity, and checks of columns that are not visible to a simple name dictionary.

The result is substantially better than in July 2026. At that time, an audit of a database labeled as anonymized found 91 findings, including 21 critical ones. The current database passed the check. The audit found no remaining direct identifier: names, personal identification numbers, addresses, identity card numbers, data-box IDs, AIFO (an agenda-specific identifier of a natural person used in Czech public administration), bank account details, or IBAN. These values are masked across modules.

The audit also confirmed coverage of places that are often missed in anonymization. These include history tables such as `robobcanhis` with 77,051 rows, error tables `mat_*_chyba`, staging tables `mat_*_priprava_*`, split dates of birth in payroll data through `nar_den`, `nar_mes`, and `nar_rok`, and binary contract attachments. For attachments, the audit records 5220 files zeroed to 0 bytes.

In the current result, date of birth is generalized to year in all 47 columns where it appears. The audit found not a single exact date of birth. Special categories of data under Article 9 GDPR, such as diagnoses, causes of death, limitation of legal capacity, or registered partnership, are masked without exception.

## What Remained as Findings

The audit left eight findings of low to medium severity. The important point is that none of them is a leak of personal data from this anonymized copy.

Some findings are not about the anonymization itself, but about the design of the source system. Typical examples are password storage or a missing retention policy. These are legitimate security and process questions, but they do not mean this anonymized copy contains original personal data.

Other small remnants concern things the masking missed, such as dog names in records or file paths. They are worth recording and possibly tuning, but they do not change the audit's main conclusion: the database passed.

The recommendation is therefore not "anonymize the database again." The main recommendation points outside the data itself: address password storage in the production system and add documentation of technical and organizational measures to the processing register under Article 30 GDPR (which concerns mandatory records of personal-data processing activities).

## Why the Audit Skill Is More Transferable

The Fenix anonymization skill is targeted. It knows the specific database model, history tables, module-specific quirks, and places where previous audits failed. That is exactly why it can be effective for Fenix.

For another database, however, it would be wrong to expect the same anonymization skill to simply run and produce a finished result. A different database has different naming, different history tables, different attachment storage, different codebooks, and different blind spots. The anonymization skill would need several iterations to adapt to the specific domain.

The audit skill is more general in this respect. It is designed to walk through a database and look for remaining personal data even without knowing all of its internal specifics in advance. It can therefore be transferred to another database without modification and used as feedback for tuning the anonymization skill.

The practical process is iterative: the anonymization skill creates a copy, the audit skill finds weak spots, anonymization rules are adjusted, and the audit runs again. Once the strict audit stops finding critical and high-severity remnants of personal data, the team has reason to trust that the result is usable for testing work.

## What This Means for NEO_HEF

For NEO_HEF, high-quality anonymization is a practical requirement. The migration team needs to test over data that is close enough to real operation. Without that, some defects in reports, filters, upgrades, or historical data would never appear.

The current state is therefore an important step forward. HAIFA no longer has only a script that masks known columns. It has a process with two separate roles: anonymization and independent audit. For the Fenix database, several rounds brought the result to a state that strict checking judged sufficiently anonymized.

This is exactly the kind of evidence the project needs. Not for a flashy claim that the problem is solved once and for all, but for repeatable work: create a test database, check it independently, fix weak spots, and only then use it as a safe basis for further migration.
