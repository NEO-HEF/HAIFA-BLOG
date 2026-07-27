---
title: "Týden dvacátý - UCV dobíhá uživatelské cesty a UPD s UIR jsou v běhu"
date: 2026-07-26
week: "Týden dvacátý"
period: "20. 07. 2026 - 26. 07. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w30
summary: "Dvacátý týden posunul UCV od integrovaného kódu k použitelným obrazovkám, ověřil vaultové spouštění modulů pod Launcherem a rozšířil přípravu UPD a UIR."
---

## Shrnutí pro netechnické čtenáře

Dvacátý týden projektu NEO_HEF nebyl o jednom velkém předání. Byl spíš o tom, že se několik důležitých částí začalo chovat jako reálný systém: modul UCV dostával konkrétní uživatelské obrazovky a pracovní cesty, společný Launcher se ověřoval v kombinaci s vaultem a linie 10.11 se posunula z přípravy do praktičtějšího ověřování.

U UCV je nejdůležitější změna v charakteru práce. V předchozím týdnu se modul dostal do hlavní vývojové větve `develop`. Tento týden se na něj navázalo úpravami formulářů, gridů, menu, editorů, kontrol a výstupů. To jsou věci, které běžný uživatel pozná víc než samotný merge: obrazovka se otevře správně, nabídka nepřekrývá obsah, záznamy se dají upravit, kontroly dávají smysl a výstupy se blíží legacy chování.

Současně se prakticky ověřovalo spouštění modulů pod Launcherem. Launcher není Fenix jako celek; je to společný spouštěč, do kterého se jednotlivé moduly vkládají. Tento týden se posunulo předávání session přes vault tak, aby modul spuštěný pod Launcherem dostal přihlášení bezpečněji a bez závislosti na souborové session. Důležité je i to, že samostatné spuštění modulů zůstává zachované.

Starší linie 10.1 zůstává údržbová a větev `release/10.01` v NEO_HEF tento týden nepřibrala nový vývoj. To je správné rozdělení rolí: stabilizovaná větev drží předaný stav, zatímco nová práce pokračuje v `developu`.

Vedle UCV a RZP se otevřely další dvě důležité přípravy. UPD už má bezpečný běhový základ pro suché a read-only scénáře a UIR prošlo rozsáhlou pitvou legacy kódu. Ani jedno ještě není hotový migrovaný modul, ale obojí ukazuje, že HAIFA postupně rozšiřuje tovární způsob práce na další části Fenixu.

## Co se stalo

V týdnu od 20. do 26. července 2026 je po aktualizaci vzdálených větví v repozitáři `NEO_HEF` vidět 114 commitů na větvi `origin/develop`, z toho 32 merge commitů. Větev `origin/release/10.01` ve stejném období nepřibrala žádný commit.

### UCV se posunulo od integrace k používání

U UCV už tento týden nešlo hlavně o to, jestli je kód sloučený do `developu`. Těžiště se přesunulo k tomu, jestli se modul dá používat v konkrétních obrazovkách a scénářích.

V historii týdne je vidět hodně drobných, ale uživatelsky důležitých oprav: překrývání menu, rozložení gridů, režim SOR, výběry období a IČO, editor ukazatelů, práce se součtovými řádky, ukládání více změn najednou nebo zobrazování akčních sloupců v kontrolách. Samostatně žádná z těchto položek nevypadá jako velký milník. Dohromady ale tvoří přesně tu vrstvu, která rozhoduje, jestli portovaný modul působí jako použitelná aplikace.

Výrazně se pracovalo také na editoru výkazu 10. Přibývaly multi-column scénáře, pravidla přípustnosti, textové řádky, přepočty a ověřování proti živějším uživatelským cestám. To je posun od mechanického portu ke skutečné paritě chování.

UCV ale stále není vhodné popisovat jako hotově předané. Dokumentace stavu po reconcile k 22. červenci ukazuje velmi silnou testovací bázi, ale zároveň pojmenovává zbylé paritní a ověřovací kroky: byte-golden výstupy, některé live-DB round-tripy, nasazení report workerů, MSIX ověření a několik vlastníkových rozhodnutí.

### Kontroly a výstupy UCV dostaly konkrétnější tvar

Důležitá část práce na UCV se týkala kontrol, reportů a exportů. Do živého kontrolního enginu se zapojilo pravidlo `VazbyRule`, takže nejde jen o samostatně otestovaný model mimo běh aplikace. Posouvaly se také reportní feedy S147 a T147, kontrolní protokoly, práce s Crystal reporty a směrování print bufferů.

U exportů je významný dokončený IRES výstup pro CSÚIS v délce 545 znaků. Naopak export JASÚ byl z UCV odstraněn jako mrtvý kód pro 10.11. To je podstatný typ rozhodnutí: migrace nemá bezmyšlenkovitě přenést všechno, co v legacy kódu existovalo, ale má rozlišit živé chování od historických zbytků.

Přibyla také práce kolem grafů přes ScottPlot. I tady je důležitý rozdíl mezi "něco vykreslíme" a "vykreslíme to v kontextu skutečných dat a uživatelského scénáře". Proto v dokumentaci zůstávají navazující kroky na živé zdroje a paritu.

### Launcher a vault prošly praktickým ověřením

Vedle modulů samotných pokračovala práce na společném spouštění. Launcher, tedy `SpolecnySpoustec`, dostal podporu pro vaultový způsob předání session do NEO modulů. Modul spuštěný pod Launcherem může místo klasické souborové session dostat krátký descriptor a skutečná session data se vyzvednou přes vaultovou cestu.

Na straně modulů se řešení udělalo ve společné vrstvě, ne v každém modulu zvlášť. To je správný směr: RZP, UCV i další moduly mají sdílet stejný mechanismus, místo aby každý nesl vlastní variantu integračního kódu.

Praktické ověření proběhlo i na navazujícím OOU scénáři. Modul spuštěný pod Launcherem a přes vault uměl otevřít OOU se silent loginem a daty. Současně zůstala zachovaná starší cesta pro samostatné spuštění, kde se nepoužívá VaultServer. Z veřejného pohledu je to důležité hlavně proto, že projekt nepřerušuje duální spouštění: modul má fungovat samostatně i pod Launcherem.

### RZP 10.11 se posunulo v testech

RZP už v projektu plní jinou roli než UCV. Není to hlavní nové migrační těžiště týdne, ale referenční modul, na kterém se ověřuje release proces a automatizace.

V developu se pro RZP posunuly E2E testy pro 10.11. Dva dříve manuální scénáře se přesunuly do automatizace a zpřesnila se robustnost výběru vlastníka. Takové změny nejsou viditelné v uživatelském marketingovém smyslu, ale pro řízené vydávání jsou zásadní: čím víc opakovaných kontrol přebírá automatizace, tím menší je riziko, že se release bude opírat o ruční paměť týmu.

RZP tím dál pomáhá držet hranici mezi stabilizovanou linií 10.1 a novou prací pro 10.11. Vývoj se neopírá jen o funkční změny v modulu, ale i o schopnost tyto změny opakovaně ověřovat.

### UPD přestalo být jen položka v plánu

UPD se tento týden posunulo do fáze bezpečného běhového základu. Vznikl strom nového modulu, routování režimů spuštění, podpora `DryRun` a `InventoryOnly`, přihlašovací cesta do connected MDI a read-only scénáře pro živá data.

To je potřeba číst opatrně. UPD tím není produkčně nasazený update modul. Naopak, dokumentace opakovaně zdůrazňuje bezpečnostní omezení: žádné produkční DDL/DML, žádné skutečné zásahy do databáze a silné oddělení suchého běhu od budoucího live provedení.

Právě tato opatrnost je dobrá zpráva. Update modul je citlivá část systému, protože pracuje s databázovou strukturou a verzemi. Tým proto nejdřív buduje pozorovatelný a testovatelný základ: shell, přihlášení, read-only inventuru, golden zachycení pořadí příkazů a disposable-DB harness. Teprve nad tím dává smysl řešit skutečné provádění změn.

### UIR má hotovou pitvu před migrací

U modulu UIR tento týden nešlo o implementaci nového NEO modulu, ale o dokončení rozboru legacy kódu. UIR je územní identifikační registr a podle validační zprávy prošla jeho code dissection kontrolou jako použitelný vstup pro další práci.

Rozsah je velký: 208 živých souborů, 3 908 handlerů a procedur s chováním, sedm shardů a kompletní indexace hlavních částí. Důležité není samotné číslo, ale to, že budoucí implementace nemusí začínat pocitovým odhadem. Má strukturovaný podklad, na kterém lze stavět plán, rizika i pořadí migrace.

To je další příklad továrního přístupu HAIFA. Jeden modul se dokončuje v uživatelských detailech, jiný drží release proces, další dostává bezpečný běhový skeleton a další se připravuje hlubokou analýzou.

### Význam týdne

Dvacátý týden ukazuje NEO_HEF jako projekt, který už neběží jednou linkou. RZP drží roli stabilizovaného a distribuovaného referenčního modulu. UCV se mění z integrovaného kódu v použitelný modul s konkrétními obrazovkami, kontrolami a výstupy. Launcher a vault řeší prostředí, ve kterém moduly poběží v praxi. UPD a UIR rozšiřují přípravu na další oblasti Fenixu.

Pro HAIFA je to důležitější než samotný počet commitů. Smyslem není pouze přepsat další část kódu. Smyslem je vybudovat způsob práce, ve kterém se dá starý ERP systém migrovat po částech, s důkazy, bezpečnostními pojistkami a automatizací.

[Domů]({{ '/' | url }})
