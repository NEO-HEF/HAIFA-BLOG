---
title: "První modul odevzdán, co dál?"
date: 2026-07-01
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - release
  - ucv
layout: layouts/post.njk
lang: cs
translationKey: prvni-modul-odevzdan-co-dal
summary: "Dne 30. 6. 2026 byl oficiálně odevzdán první hotový modul RZP zmigrovaný z legacy verze 10.1. Projekt se teď přesouvá do hotfix režimu pro RZP, povýšení SPOL/SPK na 10.11, adaptačních úprav RZP a pokračování UCV a UPD."
---

## Shrnutí pro netechnické čtenáře

Dne 30. 6. 2026 byl oficiálně odevzdán první hotový modul v projektu NEO_HEF: RZP, tedy Rozpouštění nákladů a výnosů. Jde o modul zmigrovaný z legacy verze Fenixu 10.1 do nové technologické podoby.

Je to důležitý milník. Neznamená, že je hotový celý Fenix. Znamená to ale, že HAIFA tým poprvé dotáhl konkrétní modul přes analýzu, migraci, sdílené knihovny, testování, reporty, distribuci a předávací režim.

Tím se zároveň mění povaha práce na RZP. Modul už není otevřený jako běžný vývojový cíl. Odteď se v předané 10.1 linii počítá hlavně s hotfixy a provozní stabilizací. Povýšení na 10.11 bude u RZP hlavně adaptační práce kvůli nové verzi databáze a společných služeb.

Další kroky povedou přes společné knihovny SPOL a SPK, potom přes přizpůsobení RZP na 10.11 a současně přes pokračování výroby UCV. Rozběhl se také modul UPD, který souvisí s upgradem databáze.

## Co bylo odevzdáno

Odevzdané RZP je první reálný důkaz, že HAIFA továrna dokáže převést legacy modul Fenixu do nové technologie a dovést ho až do použitelné předávací verze. Odevzdaná verze RZP odpovídá funkčnosti legacy verze 10.1 a stojí na stejném základním modelu práce: přihlášení, společné služby, práce s databází, reporty, testy a řízené vydávání nové verze.

Za tímto výsledkem není jen přepis obrazovek. RZP prošlo prací na master datech, rozpouštěcích předpisech, importu, samotném rozpouštění, reportech, tiskových a exportních výstupech, oprávněních, uživatelských hláškách a automatizovaných testech.

Oficiální release 30. 6. 2026 proto bereme jako uzavření první migrační etapy. Ne jako konec péče o modul, ale jako změnu režimu.

## Co se teď nebude dít

Na RZP se teď nebude pokračovat tak, jako by šlo pořád o otevřený vývojový modul. Předaná 10.1 linie má zůstat stabilní. Zásahy do ní mají být hotfixy, opravy nalezené při ověřování a nezbytná provozní stabilizace.

Povýšení na 10.11 v případě RZP neznamená nový velký funkční rozsah modulu. Verze 10.11 je důležitá hlavně kvůli sdílené infrastruktuře, na kterou se moduly napojují. V RZP proto očekáváme menší adaptační úpravy, aby modul správně fungoval proti nové verzi databáze a novým SPOL funkcím.

## Nejbližší technický krok: SPOL a SPK

Nejdřív se musí povýšit společné knihovny SPOL a SPK. SPOL je společná platformní vrstva a SPK je společný klient. Stojí na nich přihlášení, sdílené služby, nastavení, runtime chování, část komunikace s databází a další společné schopnosti, které nepatří jen jednomu modulu.

Proto dává smysl začít právě tam. Kdyby se nejdřív povyšoval jen RZP, riskovali bychom, že se změny z legacy verze 10.11 promítnou do jednoho modulu lokálně a později se budou znovu řešit ve společné vrstvě. Správný směr je opačný: nejdřív stabilní společný základ, potom modul.

Jakmile bude SPOL/SPK sladěné s 10.11, přijde na řadu přizpůsobení RZP na stejný legacy vzor. U RZP nepůjde o zásadní funkční změny, ale hlavně o ověření a drobné úpravy napojení na novou databázi a nové SPOL funkce.

## Další modul: UCV

Po RZP pokračuje UCV, tedy Výkaznictví. Na UCV už vznikla významná část práce, ale teď je potřeba ji dát do stejného rámce jako zbytek projektu.

První praktický krok bude přenést a zkontrolovat to, co je v UCV už hotové, proti verzi 10.11. Teprve potom má smysl pokračovat v další výrobě modulu. Tím se sníží riziko, že tým bude dokončovat další části proti starší baseline a následně je bude znovu přepisovat.

UCV je zároveň dobrý test opakovatelnosti. RZP ukázalo, že jeden modul lze dovést k předání. UCV má ukázat, jestli se stejný postup dá použít systematičtěji a rychleji.

## Do hry vstupuje UPD

Vedle UCV začaly práce také na UPD, tedy modulu pro upgrade databáze. I UPD bude mít vlastní obrazovky a uživatelskou část, ale jeho hlavní význam je v řízení databázových změn mezi verzemi Fenixu.

Migrace živého ERP systému není jen přepis aplikace. Je potřeba řídit i přechody databázových struktur, verzí a společných komponent. UPD proto patří k části systému, která bude důležitá nejen pro přechod z 10.1 na 10.11, ale i pro každou další verzi, u kterých je jisté, že budou přicházet přibližně jednou za půl roku.

## Proč je to důležité

Předáním RZP se projekt dostal přes první zásadní otázku: umíme opravdu dodat migrovaný modul? Odpověď po 30. 6. 2026 zní ano.

Teď začíná druhá otázka: umíme z toho udělat opakovatelný proces pro další moduly a zároveň držet krok s tím, že původní Fenix se dál vyvíjí?

Právě proto další práce nepovede jen k UCV, ale také ke SPOL/SPK, RZP 10.11 a UPD. První modul je odevzdaný. Teď se ukáže, jak dobře na něm dokážeme postavit další fázi migrace.

[Domů]({{ '/' | url }})
