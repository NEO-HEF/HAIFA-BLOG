---
title: "Cloudová databáze pro Fenix: proof of concept potvrdil cestu k pilotu"
date: 2026-09-01
tags:
  - post
  - haifa
  - cloud
  - proof-of-concept
  - helios-fenix
layout: layouts/post.njk
lang: cs
translationKey: cloudova-databaze-pro-fenix-poc
summary: "Proof of concept cloudové databáze pro Helios Fenix proběhl podle plánu a prošel technickou, platformní, legislativní i ekonomickou branou. Výsledek otevírá cestu k pilotu, nikoli ještě k okamžitému produkčnímu nasazení."
---

## Shrnutí pro netechnické čtenáře

Proof of concept cloudové databáze pro Helios Fenix jsme dokončili podle plánu. Závěrečná zpráva dává projektu verdikt **GO — s nutnými úpravami kódu** a doporučuje pokračovat pilotem přibližně pro 50 klientů.

Ověřili jsme čtyři oblasti, které mohly celý záměr zastavit: připojení a odezvu aplikace, vhodnost zvolené platformy, legislativní cestu i základní ekonomiku. Ve všech čtyřech případech se ukázalo, že řešení je proveditelné a má smysl v něm pokračovat.

To ale neznamená, že lze databáze Fenixu zítra přesunout do cloudu. PoC odstranil zásadní nejistoty a otevřel dveře k pilotu. Před reálným provozem je potřeba upravit některé dávkové operace, připravit provozní automatizaci, bezpečnostní a legislativní podklady a ověřit plánované parametry na skutečných klientech.

## Co proof of concept potvrdil

Legacy Fenix i nové moduly z repozitáře NEO_HEF se dokážou připojit ke cloudové databázi a běžná interaktivní práce zůstává použitelná. Zvolená platforma — MS SQL Server Express na Linuxu v AWS — zvládá databázový profil Fenixu včetně českých dat, triggerů a souběhu původních a migrovaných modulů.

Technické ověření doplnilo posouzení provozního modelu, nákladů a legislativy. Základní ekonomika vychází slibně a cesta k zápisu cloudové nabídky do katalogu DIA je známá.

Na ověření spolupracovaly týmy HAIFA, Krypton, AVA DevOps a product owner pro veřejnou správu. Důležité je, že nešlo jen o teoretický návrh architektury. Připojení, kompatibilita, latence i vybrané zátěžové a end-to-end scénáře se skutečně měřily.

## Jaký potenciál se otevírá

Cloudová databáze může do budoucna změnit způsob, jakým se Fenix provozuje. Otevírá cestu k centrálně spravované službě, předvídatelnějšímu provozu a novým obchodním modelům včetně postupného přechodu od licencí ke službě typu SaaS.

Zajímavý je i potenciál společné infrastruktury pro větší počet menších klientů. Pokud pilot potvrdí předpoklady PoC, může jedna řízená platforma obsloužit desítky databází a sjednotit dohled, údržbu i další rozvoj. Pro zákazníka by to mohlo znamenat méně starostí s vlastním databázovým serverem; pro nás lepší kontrolu nad prostředím, ve kterém Fenix běží.

Největší přínos PoC proto není jen v tom, že se aplikace k databázi v cloudu připojila. Podstatné je, že se z obecné možnosti stal konkrétní směr s vybranou platformou, změřenými vlastnostmi a popsaným dalším krokem.

## Co je nutné udělat před reálným provozem

Největší technickou překážkou jsou dávkové operace, které dnes posílají velké množství jednotlivých dotazů. V místní síti je tento způsob ještě snesitelný, přes internet ale síťová latence násobí dobu každého kroku. Například operace trvající lokálně minuty mohou bez úpravy běžet celé hodiny. Tyto části bude nutné převést na množinové zpracování.

Připravit se musí také zálohování a obnova bez SQL Agenta, monitoring, aktualizace, dostupnost služby a bezpečný způsob přístupu z klientských lokalit. Ověření čeká cross-database integrace s dalšími databázemi a reálná hustota klientů na jedné infrastruktuře. Dnes jde o plánovací model; spolehlivá čísla poskytne až telemetrie a provoz plně obsazeného pilotního prostředí.

Práci vyžaduje i legislativní a bezpečnostní část. Zápis poskytovatele a certifikaci ISO 27001 už máme, pro konkrétní cloudovou nabídku ale zbývá připravit mimo jiné penetrační test, nezávislé posouzení kontinuity a obnovy a zhodnocení rizik.

## PoC splnil svůj účel

Úkolem proof of concept nebylo postavit hotovou produkční službu. Měl zjistit, zda záměr nenarazí na zásadní technickou, platformní, legislativní nebo ekonomickou překážku. Tento úkol splnil: žádná z plánovaných bran další postup nezastavila.

Dalším rozumným krokem je pilot přibližně pro 50 klientů. Ten musí potvrdit chování v reálném provozu, zpřesnit náklady a sizing a ukázat skutečný rozsah potřebných úprav. Výsledek PoC nám dovoluje do této práce vstoupit s podstatně menší nejistotou — a s potenciálem, který stojí za to ověřit.

[Domů]({{ '/' | url }})
