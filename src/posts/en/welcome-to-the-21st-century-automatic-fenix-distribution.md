---
title: "Welcome to the 21st Century: Automatic Fenix Distribution Without Manual Work"
date: 2026-06-01
tags:
  - post
  - haifa
  - neo-hef
  - release-management
  - msix
  - distribution
layout: layouts/post.njk
lang: en
translationKey: jak-budeme-distribuovat-migrovane-moduly-fenixu
permalink: /en/posts/welcome-to-the-21st-century-automatic-fenix-distribution/
summary: "NEO_HEF is preparing release management based on MSIX packages, GitHub Releases, and Windows App Installer. The goal is to install finished modules from alpha, beta, and production channels and deliver new versions to clients automatically."
---
## Summary for Non-Technical Readers

The Fenix migration does not end when a form is converted or a piece of business logic starts working. It is just as important to deliver new versions safely and repeatedly to consultants, testers, and eventually clients.

That is why the HAIFA team is preparing a new release-management model for migrated NEO_HEF modules. It is based on signed MSIX packages, GitHub Releases, and Windows App Installer. In practical terms, users should not have to wait for manual file copying, special consultant intervention, or local installation improvisation. A module is installed through a standard Windows mechanism, and on later launches it can update itself to a newer version.

A web installation interface for consultants and clients is already available at <a href="https://neo-hef.github.io/fenix-releases/" target="_blank" rel="noopener">neo-hef.github.io/fenix-releases</a>. The page offers `alpha`, `beta`, and `prod` channels, representing testing, pilot, and broad-distribution levels. Depending on their role and situation, users can install a version intended for quick verification, pilot use, or normal operation.

The main benefit is straightforward: less manual deployment work, a faster path for fixes to reach clients, and better control over which version is intended for which type of use.

## Why Sending an EXE File Is Not Enough

Desktop-application distribution can look simple: compile the program, put it somewhere, and have someone copy it to the client. That can work in a small project. In an ERP system made of multiple modules, shared libraries, and long-lived versions, it quickly becomes a path to chaos.

Every manual installation costs consultant time. Every unclear version on a client machine complicates support. Every hotfix that has to reach a specific customer group creates more coordination work. And the more migrated modules are added, the worse such a model would become.

The new release management therefore treats a migrated module as an installable Windows application. A module with its own executable entry point, such as RZP and later UCV, receives its own MSIX package. Shared SPOL libraries are bundled with it as ordinary application dependencies. The shared launcher is not part of this distribution step yet and will be handled later.

## How Distribution Will Work

The technical flow has several parts. First, a module is built, packaged into an MSIX package, and signed with an Asseco Solutions certificate. The signed package is published as an immutable version in the release repository. Only after that is a specific version promoted into a channel through the manifest.

There are three channels:

- `alpha` for the newest versions intended for testers and developers,
- `beta` for pilot validation before wider deployment,
- `prod` for broad distribution to regular users.

This model matters because it separates creating a package from deciding who should receive that version. One specific version can first pass through `alpha`, then through `beta`, and only after validation move to `prod`. Promotion between channels is controlled by a manifest and can go through a normal review process.

For users, the visible part is mainly the installation page. At <a href="https://neo-hef.github.io/fenix-releases/" target="_blank" rel="noopener">neo-hef.github.io/fenix-releases</a>, they select a channel and a module. Installation can be started through Windows App Installer, by downloading an `.appinstaller` file, or by using a prepared PowerShell command. After installation, the application appears in the Start menu, and on later launches Windows can check whether a newer version is available.

## What It Brings to Consultants and Clients

The biggest practical benefit is time saved. A consultant does not have to manually determine where to get the right files, where to copy them, and how to verify that the client is using the current package. Installation and update handling move into standard Windows infrastructure.

Another benefit is speed. When the team fixes a bug or adds a feature, it does not have to wait for a large installation action. The version is published into the right channel, and the client receives it automatically when launching the application or through a simple reinstall from the installation page.

The third benefit is control. `Alpha` can move quickly and be more experimental because it is intended for testers. `Beta` can be used for pilot validation in a real environment. `Prod` remains reserved for stable versions that are ready for broad use. This allows new things to reach people earlier without unnecessarily risking normal operation.

There is also the benefit of installation trust. Packages are signed with an Asseco Solutions certificate, so users are not installing an anonymous binary copied from somewhere on disk. Windows sees the application publisher and can handle the package in a standard way.

## Why This Matters for HAIFA

HAIFA is not only an experiment in converting VB6 code to .NET WinForms. If the Fenix migration is to have a real impact, its results must get into the hands of people who will work with them. And that has to happen repeatedly, safely, and without unnecessary manual steps.

The release-management layer therefore complements the migration itself. Alongside form conversion, business logic, testing, and comparison with the legacy version, the project is also creating a path for releasing a module. For the pilot RZP module, this is the first concrete model. Once it proves itself, the same principle can be used for other migrated modules.

We are not yet at the point where the whole Fenix system is distributed this way. Some steps remain in POC mode or are waiting for more infrastructure, such as a self-hosted build agent inside the Asseco network. What matters is that the basic direction is already clear: build, sign, publish, promote into a channel, and let Windows handle installation and updates.

This can save many hours of consultant work in the future. More importantly, fixes and new features will reach clients faster, more predictably, and with better control over who is using which version.

[Home]({{ '/en/' | url }})
