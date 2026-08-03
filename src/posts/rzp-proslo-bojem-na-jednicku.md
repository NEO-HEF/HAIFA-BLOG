---
title: "RZP prošlo bojem na jedničku"
date: 2026-08-03
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - zpetna-vazba
  - pilot
layout: layouts/post.njk
lang: cs
translationKey: rzp-proslo-bojem-na-jednicku
summary: "RZP prošlo důležitým ověřením konzultanty, kteří Fenix nasazují a provozně podporují u klientů. Nejpodstatnější zpětná vazba zní: modul působí jako původní Fenix, takže zákazník si nevšimne, že používá novou technologii."
---

## Shrnutí pro netechnické čtenáře

RZP, první migrovaný modul projektu NEO_HEF, má za sebou důležitou zkoušku mimo vývojový tým. Tentokrát ho neověřovaly jen automatické testy. Do ruky si ho vzali konzultanti, kteří Fenix pomáhají klientům nasazovat a provozovat.

To je pro projekt velmi cenný typ zpětné vazby. Konzultanti znají reálné chování Fenixu, znají návyky uživatelů a poznají, když se nový modul tváří podobně, ale ve skutečnosti se chová jinak. Právě taková kontrola je u 1:1 migrace zásadní.

Výsledek je pro HAIFA tým důležitý: podle konzultantského ověření je funkcionalita RZP podle sady testovacích scénářů pro Fenix 10.11 v pořádku. Ještě důležitější je ale druhá část zpětné vazby: modul je převedený z Fenixu 1:1, včetně jeho drobných historických nedokonalostí, takže zákazník si prakticky nevšimne, že používá něco nového.

Na první pohled to může znít skoro jako skromná pochvala. Ve skutečnosti je to přesně cíl celého projektu NEO_HEF. Úkolem není zákazníka ohromit novým RZP. Úkolem je převést modul na novou technologii tak, aby se uživatelům nerozbil jejich zavedený pracovní svět.

## Co se stalo

RZP už dříve prošlo automatizovanými E2E testy a bylo připravené pro širší ověřování. Dalším krokem bylo dostat modul k lidem, kteří Fenix znají z provozu, ne jen ze zdrojového kódu nebo testovacího reportu.

Konzultanti společně nainstalovali NEO verzi RZP a prošli ji podle sady testovacích scénářů pro Fenix 10.11. Zpětná vazba měla dvě podstatná sdělení.

První: funkcionalita je podle testovacích scénářů v pořádku.

Druhé: modul působí jako původní Fenix. Ve zpětné vazbě zaznělo, že RZP je převedené 1:1 "i se všemi nedokonalostmi", takže zákazník si vůbec nevšimne, že má něco nového.

Právě tahle věta je pro NEO_HEF klíčová.

## Proč klientské testování u RZP není jednoduché

U každého nového nebo migrovaného modulu je správné tlačit na ověření v reálném provozu. Interní testy a konzultantská kontrola nikdy úplně nenahradí klienta, který modul používá ve svém každodenním prostředí, nad vlastními daty a se svými pracovními návyky.

U RZP je ale situace specifická. Okruh klientů, pro které je tento modul relevantní, je velmi úzký. Navíc nejde o modul, který by měl široké, každodenní a snadno dostupné používání napříč zákaznickou základnou. To objektivně omezuje možnost postavit klasický klientský pilot tak, jak by dával smysl u běžnějších částí Fenixu.

Proto je konzultantské ověření u RZP obzvlášť důležité. Konzultanti nejsou náhrada klienta v tom smyslu, že by reprezentovali jeho interní procesy. Jsou ale velmi silný filtr pro otázku, která je v této fázi podstatná: chová se migrovaný modul jako Fenix, který znají z praxe?

V tomto případě odpověď zní: ano.

## Proč je "zákazník si nevšimne" tak důležité

U běžného vývoje by věta "uživatel si nevšimne, že je něco nové" mohla působit zvláštně. U projektu NEO_HEF je to jedna z nejlepších možných zpráv.

Cílem totiž není navrhnout nový ERP systém podle současných UX trendů. Cílem je migrovat starý, živý a provozně ověřený systém na novou technologii tak, aby klient nepřišel o chování, na které spoléhá. To zahrnuje i věci, které nejsou ideální z pohledu moderní aplikace, ale jsou součástí reality Fenixu.

Když konzultanti řeknou, že modul je převedený 1:1 i s nedokonalostmi, je to pro produktovou migraci zásadní signál. Neznamená to, že by nedokonalosti byly cílový stav navždy. Znamená to, že NEO verze nepřidává nečekané změny tam, kde je uživatel nečeká.

To je hlavní disciplína 1:1 migrace: nejdřív zachovat pracovní svět klienta, teprve potom případně modernizovat.

## Co to říká o RZP

RZP tímto ověřením obstálo v jiné rovině než automatické testy. Automatické testy říkají, že konkrétní scénáře procházejí a že se při opakovaném běhu nerozbíjí známé chování. Konzultantská zpětná vazba říká, že modul obstál i v očích lidí, kteří mají Fenix zažitý jako pracovní nástroj.

To je silná kombinace. RZP má za sebou technickou testovací stopu a zároveň provozně orientovanou kontrolu. Ani jedno samo o sobě nestačí pro sebevědomé předání, ale dohromady vytvářejí důkaz, že první migrovaný modul stojí na pevném základě.

Je fér dodat, že tím práce nekončí. Každé nasazení do dalšího prostředí může otevřít provozní detail, který se v interním testování ani konzultantském průchodu neobjevil. To je normální. Důležité je, že dosavadní nálezy nevypadají jako zpochybnění samotné migrace RZP.

Naopak: nejdůležitější zpětná vazba potvrzuje, že migrační strategie funguje.

## Význam pro NEO_HEF

Pro NEO_HEF je RZP první velký důkaz, že cílový stav není jen technicky možný, ale i produktově srozumitelný. Modul může běžet na nové technologii a přitom se k uživateli chovat jako původní Fenix.

To je přesně hranice, na které projekt stojí. Pokud by se uživatelé museli učit nový modul, protože jsme při migraci změnili chování obrazovek, hlášek, nápovědy nebo pracovních postupů, nebyla by to 1:1 migrace. Byla by to skrytá redesignová změna.

RZP teď dostalo zpětnou vazbu, že se tomu podařilo vyhnout.

To je dobrá zpráva nejen pro RZP, ale i pro další moduly. UCV, UPD, UIR a další části Fenixu budou mnohem složitější v rozsahu i rizicích. Ale princip zůstává stejný: nová technologie pod kapotou, známé chování pro uživatele.

A přesně to je důvod, proč věta "zákazník si nevšimne, že má něco nového" není slabá pochvala. Je to jedna z nejdůležitějších validací, které mohl první migrovaný modul dostat.

HAIFA tým si za RZP zaslouží uznání. Nejen za to, že modul technicky převedl, ale hlavně za to, že se mu podařilo naplnit nejtěžší část zadání: změnit technologii a nepřekvapit uživatele. Ať se mu stejně dobře daří i u dalších modulů Fenixu.

[Domů]({{ '/' | url }})
