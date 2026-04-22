---
title: "Tisk v RZP: detail, na kterém se láme realita migrace"
date: 2026-04-21
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - tisk
layout: layouts/post.njk
summary: "Migrace tiskových výstupů v RZP ukazuje, proč NEO_HEF není jen mechanický přepis formulářů. I jeden reportovací tok může být samostatný technický projekt."
---
## Shrnutí pro netechnické čtenáře

Na první pohled může tisk vypadat jako detail. V projektech typu NEO_HEF ale právě takové detaily rozhodují o tom, jestli je migrace opravdu použitelná v praxi. Uživatelům nestačí, že se aplikace otevře; potřebují, aby stejně spolehlivě fungovaly i výstupy, exporty a reporty.

RZP tisk je ukázkový případ. Tým tady neřeší jen vzhled jedné sestavy, ale celý technický řetězec od přípravy dat až po finální PDF výstup.

## Proč je to složité

Dokumentace popisuje, že původní VB6 řešení stojí na kombinaci SQL dat, Access MDB mezivrstvy a Crystal Reports. Nová implementace proto nemůže jednoduše „překreslit“ tisk do nového formuláře. Musí zachovat kompatibilitu s existujícími reporty a zároveň najít způsob, jak to celé rozumně provozovat v novém světě.

Z toho vzniklo architektonické rozhodnutí použít **satelitní proces** pro Crystal Reports. Jinými slovy: reportovací engine běží odděleně od hlavní aplikace, aby se snížilo riziko a zachovala technická proveditelnost.

## Co je na tom povzbudivé

V případě `RZP` už nejde jen o teorii. Projekt má za sebou technický research, formální ADR, PoC, smoke testy i vizuálně ověřený PDF výstup. To je přesně ten typ důkazu, který ukazuje, že tým zvládá převádět komplikované legacy chování do modernější architektury bez ztráty parity.

Pro veřejnost je to možná „jen tisk“. Pro migraci je to ale jeden z momentů, kdy se opravdu pozná, jestli strategie funguje i v tvrdé realitě.

[Domů]({{ '/' | url }})
