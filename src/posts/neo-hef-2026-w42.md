---
title: "Týden dvaatřicátý - UIR ověřuje sestavy, ROB zpřesňuje migraci a SAU má první základ"
date: 2026-10-18
week: "Týden dvaatřicátý"
period: "12. 10. 2026 - 18. 10. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w42
summary: "UIR posunulo generátor sestav až k ověření skutečných výstupů. Registr obyvatel doplnil plán o poznatky z běhu původní aplikace, Matrika uzavřela rozbor kódu a Správa aplikací a uživatelů zahájila migraci prvními implementovanými kroky."
---

## Shrnutí pro netechnické čtenáře

Ve dvaatřicátém týdnu projektu NEO_HEF pokračoval tým HAIFA v několika agendách současně. **UIR, Územní identifikační registr, postoupilo v tvorbě sestav a ověřilo jejich cestu od uživatelské nabídky až ke skutečnému výstupnímu souboru.** To je důležitý rozdíl proti kontrole samotného formuláře: uživatel potřebuje získat použitelný výsledek se správnými údaji.

Registr obyvatel, ROB, navázal na hotový migrační plán ověřováním původní aplikace. Získané vzorové výstupy a záznamy chování budou sloužit k porovnání s novou verzí. Matrika dokončila podrobný rozbor svého kódu a vazeb na ostatní části systému.

**Dne 12. října začala migrace SAU, Správy aplikací a uživatelů.** Během týdne vznikl první základ nové aplikace včetně spuštění, hlavní nabídky a společného ovládání formulářů. Jde o začátek převodu této agendy; vlastní správní funkce budou na tento základ postupně navazovat.

## Co se stalo

Týden od 12. do 18. října 2026 ukázal různé fáze migrace vedle sebe: UIR ověřuje propojené funkce, ROB zpřesňuje zadání podle skutečného běhu, MAT uzavírá analýzu a SAU přechází k implementaci. Společným tématem je přesnost podkladů, podle kterých AI agenti pracují a jejichž pomocí se posuzuje výsledek.

### UIR propojuje návrh sestavy se skutečným výstupem

Do hlavní vývojové větve se dostala další etapa UIR a navazující opravy. Významnou součástí je generátor sestav: cesta od výběru údajů přes návrh sestavy a přípravu dat až po zpracování společnou tiskovou komponentou.

Ověřování pokrylo vstupy z nabídek Objekty, Historie a Volební okrsky. Nové testy prošly skutečnou tiskovou komponentou až k vytvoření souboru a kontrole jeho obsahu. Samostatně se ověřovaly i varianty sestav s údaji připravenými produkčním převodem do pomocné databáze.

Smysl tohoto ověření dobře ukázalo srovnání se starší verzí tiskové komponenty. Rychlé testy, které její výstup nahrazovaly testovací náhradou, dřívější chybu neodhalily. Při zapojení skutečné starší komponenty stejné cesty selhaly. Nové ověření tak dokáže rozlišit funkční propojení od situace, kdy jednotlivé části vypadají správně, ale sestava nakonec nevznikne.

Generátor byl v průběhu týdne označen za dokončený s výhradami a dostal další doplnění ověřování. To ještě neznamená úplnou shodu celého UIR s původní aplikací. Podstatným výsledkem je doložený průchod konkrétních cest až k výstupu, na kterém záleží uživateli.

### ROB mění nejasnosti v konkrétní zadání

Registr obyvatel navázal na plán z minulého týdne sérií živých ověření původního Fenixu. Týkala se například seznamu a detailu občanů, datových schránek, stěhování, úmrtí, sňatků a rozvodů, komunikace se základními registry i volebních agend.

U volebních seznamů vzniklo 39 vzorových PDF z původní aplikace, doplněných o adresní štítky a výstupy do Wordu. Tyto podklady zachycují konkrétní podobu výsledků, se kterou se bude nová implementace porovnávat. Ověřování zároveň odhalilo chyby původního řešení, například u některých zahraničních PSČ na štítcích, a promítlo jejich řešení do zadání migrace.

Výsledkem této práce jsou přesnější požadavky a srovnávací podklady pro převod ROB. Uzavřené ověření původního programu samo o sobě neříká, že už je příslušná funkce hotová v nové aplikaci. Pomáhá ale předejít tomu, aby se při implementaci domýšlelo chování, které lze předem změřit.

### Matrika uzavírá rozbor, SAU začíná stavět

U MAT byl 12. října uzavřen podrobný rozbor původního kódu včetně nezávislého ověření a zapracování rozhodnutí vlastníka. Analýza rozlišuje Matriku a Vidimaci a legalizaci, které sdílejí jednu aplikaci, a popisuje jejich vazby na společné služby i další moduly. Pro následný implementační plán tak vznikl ucelený podklad s vymezeným rozsahem převodu.

Ve stejný den projektová evidence zaznamenala začátek migrace SAU. Během týdne se do hlavní větve dostal základ aplikace: spuštění a přihlášení přes společnou vrstvu SPOL, hlavní nabídka a rámec uživatelského rozhraní. Základ počítá se samostatným spuštěním i s provozem pod Launcherem, společným spouštěčem modulů Fenixu.

Část práce SAU zároveň rozšiřuje společné služby, například uspořádání formulářů. Přínos tak přesahuje jedinou agendu. Zatím jde především o prostředí, do kterého se budou doplňovat vlastní funkce správy aplikací a uživatelů.

### Co tento týden znamená pro HAIFA

Souběh několika migrací zvyšuje význam dobře popsaného zadání a průkazného ověřování. ROB dodává podklady o původním chování, MAT uzavřelo analytickou přípravu, SAU má první implementovaný základ a UIR dokládá funkčnost propojené cesty až k výsledku. Pro HAIFA je to další krok k řízenému vývoji s AI agenty, v němž má každý dosažený milník jasně vymezený obsah.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
