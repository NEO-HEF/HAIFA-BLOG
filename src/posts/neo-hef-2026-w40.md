---
title: "Týden třicátý - UCV a UPD vstupují do pilotu v termínu, UIR propojuje registry a výměnu dat"
date: 2026-10-04
week: "Týden třicátý"
period: "28. 09. 2026 - 04. 10. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
  - pilot
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w40
summary: "UCV a UPD byly 30. září uvolněny k pilotnímu testování přesně podle plánu. Týden přinesl také další opravy pořizování a kontroly výkazů, protokolování UPD a významný postup UIR v propojení s registry a importu i exportu PSČ."
---

## Shrnutí pro netechnické čtenáře

Hlavní zprávou třicátého týdne projektu NEO_HEF je splněný termín: **moduly UCV a UPD byly 30. září 2026 uvolněny k pilotnímu testování přesně tak, jak bylo naplánováno**. Účetní výkazy a nástroj pro upgrade a servisní správu databáze tím dosáhly dalšího důležitého milníku migrace Helios Fenix.

Pilot otevírá prostor pro ověřování v praktických podmínkách. Vývoj přitom pokračoval po celý týden. UCV dostalo další opravy ukládání, kontrol a ovládání formulářů. UPD zpřesnilo protokoly i reakce na chyby, aby správce dokázal poznat, co upgrade provedl a proč případně skončil.

Současně postoupilo UIR, Územní identifikační registr. Dokončilo konektor pro komunikaci s registry a oblast importu a exportu PSČ. U části ověřování vůči základním registrům zůstává další práce, ale propojení důležitých provozních cest už má konkrétní výsledky.

## Co se stalo

Týden od 28. září do 4. října 2026 spojil plánované předání dvou modulů s pokračujícím dolaďováním a další migrační vlnou. Význam uvolnění UCV a UPD popisujeme také v [samostatném článku o zahájení pilotního testování]({{ '/posts/ucv-a-upd-uvolneny-k-pilotnimu-testovani/' | url }}).

### UCV a UPD dosáhly plánovaného milníku

Datum 30. září se podařilo dodržet pro oba moduly. UCV pokrývá práci s účetními výkazy a jejich výstupy, UPD zajišťuje upgrade a servisní operace nad databází. Předání proto prověřuje migrační postup ve dvou odlišných oblastech Fenixu.

Uvolnění k pilotnímu testování je přesně vymezený výsledek. Úspěšnost jednotlivých pilotních scénářů bude potřeba doložit jejich průběhem a zpětnou vazbou. Opravy zaznamenané ve vývoji během tohoto týdne zde uvádíme jako pokračující práci týmu; bez dalšího dokladu je nelze připsat nálezům z pilotu.

### UCV zpřesňuje pořizování, ukládání a kontrolu výkazů

Při pořízení výkazu se hlavička nově zakládá až při uložení, stejně jako v původní aplikaci. Výběr typů výkazů se srovnal s původní nabídkou a startovní výběr organizace zahrnuje i další legacy povolenou kategorii. Tyto úpravy ovlivňují první kroky uživatele i to, jaká data po nich v databázi zůstanou.

Další opravy oddělily kontrolu od sestavení. Kontrola nemá měnit razítko sestavení ani zapisovat do tabulky platnosti výkazů; upravené cesty respektují tento rozdíl. Protokol kontroly současně vypisuje i nesestavené výkazy a hlášení o nepřípustném řádku obsahuje důvod odpovídající původnímu Fenixu.

Příjem výkazů doplňuje součtové řádky před zápisem, vícesloupcový editor zachovává i nulové ukazatele a ukládání zapisuje doplňkovou hlavičku. U historických dávkových operací z let 2001–2009 přibylo závěrečné hlášení. Opravovala se také nefunkční tlačítka, oříznuté texty a ikony formulářů.

Tyto změny mají společný smysl: uživatel má dostat správný výsledek a srozumitelnou informaci o tom, co aplikace právě udělala. V migraci se musí shodovat i zdánlivě malé rozdíly mezi kontrolou, sestavením a uložením.

### UPD dává přesnější zprávu o průběhu a chybách upgradu

Po úpravách tabulek a servisních formulářů následovala souvislá práce na výkonném jádru UPD. Protokol dostal úvodní informace o změnovém souboru a volbách zpracování, doplnil se audit upgradu a chybové ukončení automatického běhu. Pokud nelze přečíst počet připojených uživatelů, automatická cesta končí před upgradem.

Zpřesnila se také pojistka pro nepodporované varianty příkazů `warning:` a `verify:`. Jejich stav musí být viditelný v protokolu; automatický běh přitom nesmí čekat na modální okno. Navazující opravy řešily protokol tvorby prázdné databáze, oznamování chyb databázových sond, interaktivní start a zápisy výsledků příkazů pro tabulky.

Zvláštní pozornost dostalo i pořadí operací v testu tvorby prázdné databáze. Test se upravil tak, aby otevíral protokol před vlastní stavbou stejně jako produkční cesta. Doklad této změny výslovně uvádí, že živá tvorba databáze v daném kroku spuštěná nebyla. To je důležitá hranice: opravený testovací postup ještě není nový výsledek živého běhu.

### Společná vrstva sjednocuje nastavení a odesílání sestav

SPOL doplnilo čtení časového limitu SQL příkazů z registru a UCV i RZP jej zapojily po připojení. Nastavení tak prochází sdílenou cestou do obou modulů.

Další práce se týkala odesílání sestav e-mailem. Konfigurace SMTP se srovnala s nastavením původní aplikace v registru, přibyl konfigurační dialog a upravila se volba kopie odesílateli. Samostatná oprava srovnala kontrolu heslového e-mailu se skutečnou adresou uživatele. Jde o společné služby, jejichž správné chování je důležité i pro další převáděné moduly.

### UIR dokončuje konektor a výměnu dat PSČ

Dne 2. října se do hlavní vývojové větve dostala fáze D UIR. Konektor KZR/RÚIAN získal dokončený stav a stejně tak oblast importu a exportu PSČ. Ta zahrnuje formuláře, dávkové cesty, historii i audit operací.

U exportů se doložila také živá shoda s původní aplikací: ověřený výstup PSČ obsahoval 16 232 řádků, export adres 1830 řádků. Kontroly sledovaly obsah a formát souborů i související zápisy do evidence, takže výsledek přesahuje samotnou existenci exportního tlačítka.

Oblast živých cest RÚIAN a základních registrů zůstává rozpracovaná. Úlohy S24-T001 až S24-T008 jsou dokončené, další úloha pro kriteriální formulář a dokončení ověřování v ZR teprve čeká na realizaci. Tento postup otevírá další části UIR, aniž by se stav celého modulu předčasně označil za hotový.

### Význam týdne

Pro HAIFA tento týden přinesl konkrétní důkaz dodržení plánu: dva další moduly byly uvolněny k pilotnímu testování v dohodnutém termínu. Současně pokračovala práce na přesnosti chování a na dalším modulu. Vedle schopnosti převádět kód se tak ověřuje i schopnost řídit předání, navazující opravy a další postup migrace.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
