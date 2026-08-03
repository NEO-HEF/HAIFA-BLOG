---
title: "RZP Passed with Flying Colors"
date: 2026-08-03
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - feedback
  - pilot
layout: layouts/post.njk
lang: en
translationKey: rzp-proslo-bojem-na-jednicku
permalink: /en/posts/rzp-passed-with-flying-colors/
summary: "RZP went through an important validation by consultants who deploy and support Fenix for clients. The key feedback is that the module feels like the original Fenix, so customers will not notice they are using a new technology."
---

## Summary for Non-Technical Readers

RZP, the first migrated module in the NEO_HEF project, has passed an important test outside the development team. This time, it was not only verified by automated tests. It was taken up by consultants who help clients deploy and operate Fenix.

That is a very valuable type of feedback for the project. Consultants know how Fenix behaves in practice, they know user habits, and they can tell when a new module looks similar but actually behaves differently. This kind of review is essential for a 1:1 migration.

The result matters for the HAIFA team: according to the consultants' validation, RZP functionality is correct against the set of test scenarios for Fenix 10.11. The second part of the feedback is even more important: the module has been migrated from Fenix 1:1, including its small historical imperfections, so a customer will practically not notice that they are using something new.

At first glance, that may sound like modest praise. In reality, it is exactly the goal of the entire NEO_HEF project. The task is not to impress customers with a new RZP. The task is to move the module to a new technology without breaking the established working world users rely on.

## What Happened

RZP had already passed automated E2E tests and was ready for broader validation. The next step was to get the module into the hands of people who know Fenix from operations, not only from source code or a test report.

The consultants installed the NEO version of RZP together and went through it using the test-scenario set for Fenix 10.11. Their feedback had two essential messages.

First: the functionality is correct according to the test scenarios.

Second: the module feels like the original Fenix. The feedback said that RZP has been migrated 1:1 "including all imperfections," so a customer will not notice that they have something new.

That sentence is critical for NEO_HEF.

## Why Client Testing Is Not Simple for RZP

For every new or migrated module, it is right to push for validation in real operations. Internal tests and consultant review can never fully replace a client using the module in their everyday environment, over their own data and with their own work habits.

For RZP, however, the situation is specific. The group of clients for whom this module is relevant is very narrow. It is also not a module with broad, everyday, easily available usage across the customer base. That objectively limits the possibility of building a classic client pilot in the way that would make sense for more common parts of Fenix.

That is why consultant validation is especially important for RZP. Consultants are not a replacement for clients in the sense of representing each client's internal processes. But they are a very strong filter for the question that matters at this stage: does the migrated module behave like the Fenix they know from practice?

In this case, the answer is yes.

## Why "The Customer Will Not Notice" Matters

In ordinary development, the sentence "the user will not notice that anything is new" might sound unusual. In the NEO_HEF project, it is one of the best possible messages.

The goal is not to design a new ERP system according to current UX trends. The goal is to migrate an old, live, operationally proven system to a new technology while preserving the behavior clients rely on. That includes things that may not be ideal from the perspective of a modern application, but are part of the reality of Fenix.

When consultants say that the module has been migrated 1:1, imperfections included, it is a crucial signal for product migration. It does not mean those imperfections must remain forever. It means the NEO version is not adding unexpected changes where users do not expect them.

That is the core discipline of 1:1 migration: preserve the client's working world first, modernize later if appropriate.

## What This Says About RZP

With this validation, RZP has proven itself on a different level than automated tests. Automated tests say that concrete scenarios pass and that known behavior does not break during repeated runs. Consultant feedback says the module also holds up in the eyes of people who know Fenix as a working tool.

That is a strong combination. RZP now has a technical testing trail and an operations-oriented review. Neither is enough on its own for a confident handoff, but together they provide evidence that the first migrated module stands on solid ground.

It is fair to add that the work does not end here. Every deployment into another environment can reveal an operational detail that did not appear in internal testing or consultant walkthroughs. That is normal. What matters is that the current findings do not undermine the RZP migration itself.

On the contrary: the most important feedback confirms that the migration strategy works.

## What This Means for NEO_HEF

For NEO_HEF, RZP is the first major proof that the target state is not only technically possible, but also understandable as a product. The module can run on a new technology while still behaving like the original Fenix for the user.

That is exactly the boundary the project is built around. If users had to learn a new module because the migration changed screens, messages, help, or workflows, it would not be a 1:1 migration. It would be a hidden redesign.

RZP has now received feedback that this was avoided.

That is good news not only for RZP, but also for the next modules. UCV, UPD, UIR, and other parts of Fenix will be much more complex in scope and risk. But the principle remains the same: new technology under the hood, familiar behavior for users.

And that is exactly why the sentence "the customer will not notice they have something new" is not faint praise. It is one of the most important validations the first migrated module could receive.

The HAIFA team deserves recognition for RZP. Not only for technically migrating the module, but especially for fulfilling the hardest part of the assignment: changing the technology without surprising users. May the team do just as well with the next Fenix modules.

[Home]({{ '/en/' | url }})
