---
title: "Proč se všechno točí kolem SPOL, SPK a RZP"
date: 2026-04-20
tags:
  - post
  - haifa
  - neo-hef
  - moduly
layout: layouts/post.njk
lang: cs
translationKey: proc-se-vsechno-toci-kolem-spol-spk-a-rzp
summary: "Kdo sleduje dokumentaci NEO_HEF, naráží stále na SPOL, SPK a RZP. Není to náhoda: právě tady se rozhoduje, jestli se migrace rozjede bezpečně a v dobrém pořadí."
---
## Shrnutí pro netechnické čtenáře

Když se člověk podívá do dokumentace NEO_HEF, velmi rychle zjistí, že se stále opakují tři zkratky: `SPOL`, `SPK` a `RZP`. To není interní hra se zkratkami, ale obraz skutečné priority projektu.

Právě na těchto třech oblastech se ukazuje, jestli tým umí správně oddělit sdílený technický základ od konkrétního byznysového modulu. A to je pro migraci klíčové.

## Co která vrstva znamená

`SPOL` představuje sdílenou platformní vrstvu a množství schopností, které používají různé části systému. `SPK`, tedy `Asseco.Fenix.SpolecneKlient`, je naopak technický baseline pro novou shared foundation v `.NET`. `RZP` je konkrétní business modul, na kterém se dá ověřovat, že shared vrstva opravdu funguje jako základ pro reálnou migraci.

Proto dokumentace neříká „udělejme nejdřív celý SPOL“ a stejně tak neříká „skočme rovnou do RZP“. Doporučená sekvence je jemnější: nejprve uzavřít planning readiness a shared boundary, potom vést první fyzickou implementaci přes `SPK`, část sdílené práce adopčně řešit ve `SPOL` a teprve po stabilizaci otevřít další kroky v `RZP`.

## Proč je to důležité

Když se v podobném programu špatně zvolí pořadí, tým snadno postaví velkou část nové architektury na neuzavřených předpokladech. To vede k přepisům, ztrátě času a rozpliznutí odpovědností. V NEO_HEF je naopak vidět snaha držet disciplínu: nejdřív potvrdit shared foundation, pak na ni teprve věšet první business consumer.

To je možná méně efektní než rychlé demo hotového formuláře, ale z dlouhodobého hlediska je to mnohem důležitější. Správné pořadí implementace je totiž jedna z věcí, která rozhoduje, jestli se migrace bude zrychlovat, nebo naopak sama sebe brzdit.

[Domů]({{ '/' | url }})
