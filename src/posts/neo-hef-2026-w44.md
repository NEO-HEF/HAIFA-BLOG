---
title: "Týden čtyřiatřicátý - Matrika vstupuje do implementace, ROB ukládá údaje a SAU přidává přehledy"
date: 2026-11-01
week: "Týden čtyřiatřicátý"
period: "26. 10. 2026 - 01. 11. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w44
summary: "Matrika přešla od plánování k implementaci společného základu aplikace. ROB rozšířil datovou vrstvu o ukládání údajů občana, související záznamy a historii. SAU dokončilo blok přehledů a tisků a pokračovalo v převodu detailu majitele."
---

## Shrnutí pro netechnické čtenáře

Ve čtyřiatřicátém týdnu projektu NEO_HEF začal tým HAIFA převádět připravený plán Matriky do nové aplikace. **Vznikají části pro start, připojení k databázi, práci s oprávněními a hlavní nabídku.** Jde o společný základ pro Matriku i Vidimaci a legalizaci, dvě agendy provozované v jednom programu. Vlastní agendové funkce na něj budou postupně navazovat.

**Registr obyvatel, ROB, pokročil v ukládání údajů občana a jeho historie.** Je to méně viditelná, ale podstatná část migrace: změna jednoho člověka může zasáhnout více souvisejících záznamů. Nová aplikace je musí ukládat ve správném pořadí a zachovat jejich vzájemné vazby.

Správa aplikací a uživatelů, SAU, rozšířila funkce pro správce o přehledy a tiskové výstupy. Tento blok byl během týdne převzat, s konkrétním navazujícím úkolem pro náhled sestav ve společné vrstvě. Pokračoval také převod detailních údajů organizace vedené ve Fenixu jako majitel.

## Co se stalo

Týden od 26. října do 1. listopadu 2026 posunul tři souběžné migrace do různých částí práce. Matrika buduje základ aplikace, ROB převádí pravidla ukládání dat a SAU doplňuje další nástroje správy. U každé z nich přitom zůstává důležité rozlišovat hotový kód, ověření proti původnímu programu a převzetí celého funkčního bloku.

### Matrika převádí plán do prvních částí aplikace

Na implementační plán z minulého týdne navázala práce na společném základu MAT. Přibyly části pro kontrolu licence, uživatelskou relaci a oprávnění, připojení k databázi, kontrolu její verze, uživatelská nastavení a záznamy o běhu aplikace. Implementace hlavní nabídky počítá s režimy Matriky a Vidimace a legalizace i s rozlišením dostupných a dosud nedokončených funkcí.

Vedle společného základu se rozběhla také datová část evidence matrikářů a jejich přihlašovacích jmen. To je první návaznost na konkrétní obsah agendy. Samotný vznik těchto částí však ještě neznamená dokončenou Matriku ani uzavřené ověření jejího startu jako celku.

Pokračovala také příprava testovacích scénářů podle skutečného chování původní aplikace. Nové sady se týkaly například číselníku matrik, knih a svazků, matrikářů a ověřovatelů, číselných řad tiskopisů nebo občanství. Pro další implementaci tak vzniká konkrétní podklad: jaká data má uživatel vidět, co smí změnit a jak má program reagovat.

### ROB postupuje k bezpečnému ukládání občana

ROB navázal na spustitelný základ prací na datové vrstvě občana. Během týdne přibylo načítání a ukládání hlavních záznamů, mechanismus zámků a transakcí, zápisy souvisejících údajů a ukládání historie. Implementaci doprovázejí testy jednotlivých částí, které projektová dokumentace propojuje s příslušnými úlohami migrace.

Význam tohoto kroku je v provázanosti evidence. Údaje občana netvoří jediný řádek v databázi: patří k nim například související rodinné záznamy a historie změn. Migrační plán proto řeší společné uložení do více tabulek v jedné transakci. Při chybě se nesmí uložit jen část změny a zbytek ponechat v původním stavu.

Zvláštní pozornost vyžaduje souběžný provoz původního a nového programu nad společnou databází. Pravidla zamykání a zápisu jsou proto součástí převodu od začátku. Dosažený posun se týká datového základu; dokončení celé práce s kartou občana a její převzetí jsou další kroky.

### SAU přidává přehledy a detail majitele

V SAU byly uzavřeny bloky výběrového seznamu a obecného číselníkového formuláře. Na ně navázal převod detailu majitele: údajů organizace, adresy sídla, záznamů obchodního rejstříku a historie. U této části vzniklo také porovnání vybraných postupů v původní a nové aplikaci, včetně ukládání změn.

Výrazným milníkem bylo převzetí bloku přehledů a tisků na konci týdne. Zahrnuje přípravu dat pro třináct přehledů, jejich export a návaznost na tiskové sestavy. Datové výstupy byly porovnány s čerstvě pořízenými výsledky původního programu. Správci tak získávají další část nástrojů, kterými mohou kontrolovat nastavení systému.

Převzetí má přesně popsané hranice. Oprava modálního náhledu sestav ve společné vrstvě SPOL a její ověření zůstávají součástí závěrečných kontrol SAU. U výstupů do Excelu a textového editoru je logika pokryta automatickými testy, ale v tomto bloku ještě neproběhlo živé ověření celé cesty až do otevření cílového programu.

Týden tak ukázal postup migrace od společného základu přes pravidla práce s daty až po výstupy pro uživatele. Pro tým HAIFA je podstatné, že každý z těchto výsledků má vlastní podmínky ověření. Ty umožňují plánovat další práci podle skutečně doloženého stavu jednotlivých agend.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
