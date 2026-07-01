---
title: "Týden šestnáctý - RZP se uzavírá a další moduly se rozbíhají"
date: 2026-06-28
week: "Týden šestnáctý"
period: "22. 06. 2026 - 28. 06. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w26
summary: "Šestnáctý týden byl posledním finišem RZP před oficiálním předáním 30. 6.: ladily se paritní detaily, reporty, E2E testy a release proces, zatímco UCV přešlo do živější implementace a roadmapa otevřela další proudy kolem 10.11, SPOL a UPD."
---

## Shrnutí pro netechnické čtenáře

Šestnáctý týden projektu HAIFA byl posledním týdnem před oficiálním předáním prvního hotového modulu RZP. Nebyl to týden velkých nových funkcí. Byl to týden dorovnávání detailů, které rozhodují o tom, jestli se migrovaný modul chová jako původní Fenix i v méně nápadných situacích.

V RZP se opravovaly hlášky, vyhledávání, prázdné číselníky, chování polí ODKUD/KAM, zavírání formulářů přes Escape, zámky při práci s předpisy a poslední viditelné odchylky v reportech. Právě taková práce často vypadá drobně, ale pro uživatele je zásadní. Pokud původní systém při prázdném seznamu ukázal hlášku, nová verze nemá potichu zobrazit prázdnou tabulku.

Důležité je říct i to, co se tímto týdnem mění: RZP už se neotevírá jako běžný vývojový modul. Dne 30. 6. 2026 následovalo oficiální předání hotového RZP zmigrovaného z legacy verze 10.1. Další zásahy do této linie mají být hotfixy a řízené povýšení na legacy vzor 10.11, ne rozšiřování původního scope.

Současně se projekt začal překlápět k dalším proudům. Do repozitáře přibyla legacy baseline 10.11, release management dostal pravidla pro souběžnou distribuci verzí 10.1 a 10.11 a UCV se posunulo z experimentální práce do konkrétnější implementace nad živými datovými službami. V roadmapě se také objevuje UPD, tedy modul pro upgrade databáze.

Jinými slovy: RZP doběhlo do předávacího milníku a HAIFA se začíná chovat méně jako projekt jednoho modulu a více jako migrační továrna, která musí zvládnout další moduly i průběžné změny původního produktu.

## Co se stalo

V týdnu od 22. do 28. června 2026 je v aktualizovaném zrcadle repozitáře `NEO_HEF` vidět 109 commitů napříč větvemi. Na hlavní větvi `develop` přibylo 64 commitů a 38 výrazných merge bodů. Aktivní dny byly hlavně pondělí až pátek, tedy 22. až 26. června.

### RZP se ladilo jako předávací modul

Největší viditelná část týdne se pořád týkala RZP, ale charakter práce se změnil. Nešlo o otevírání nového rozsahu, spíš o závěrečné dorovnání chování proti legacy.

V číselnících a předpisech se řešily situace, které uživatel pozná okamžitě: duplicitní pořadové číslo předpisu už nesmí selhat potichu, prázdný číselník má zobrazit odpovídající hlášku, chybová hláška při ukládání účtu má mít správnou ikonu a titulek a formuláře mají jít zavřít klávesou Escape tam, kde to původní aplikace umožňovala.

Podobně se zpřesňovala pole ODKUD/KAM. Tým dorovnával šířky polí Su/Au, práci s hodnotami typu `X`, doplňování nul a vazbu mezi syntetickým a analytickým účtem. To jsou přesně ty detaily, kde by se jinak nová aplikace tvářila skoro stejně, ale při reálné práci by uživatel narazil na rozdíl.

Do RZP přibyly také úpravy kolem zámků a E2E testovatelnosti. Pro ERP modul je to prakticky důležité: nejde jen o to, že funkce funguje jednomu uživateli v čistém scénáři. Modul musí rozumně reagovat i na souběžnou práci, blokace a testovací prostředí, ve kterém se některé scénáře mají korektně přeskočit místo falešného selhání.

### Reporty dostaly poslední viditelné opravy

Další velká linka týdne byly reporty. Upravovalo se umístění roku a stupně na řádku, hlavičky sestav, příliš dlouhá procenta, součty v reportu 21, spodní prázdné přetokové stránky i kosmetika přehledů.

To zní jako sazba a formátování, ale v prostředí Fenixu jsou sestavy součástí pracovního výsledku. Uživatel často nepřebírá jen číslo z obrazovky, ale tiskový nebo exportovaný výstup. Pokud se změna projeví v hlavičce, v součtech nebo ve stránkování, je to pro něj stejně reálná odchylka jako chyba v dialogu.

Právě proto se i tyto úpravy opíraly o testy. Přibývaly reportové testy pro subtotaly, prázdné sekce, hlavičky a navigaci v konfiguraci tisku. RZP se tím dál posouvalo od stavu „sestava se vygeneruje" ke stavu „sestava odpovídá tomu, co uživatel čeká z legacy".

### Testovací sady se stabilizovaly před předáním

V týdnu se stabilizovalo také E2E testování. Přibyly opravy owner precondition, úklid mrtvých nebo nahrazených E2E skeletonů a odstranění testovacích warningů. Testovací sady RZP byly dotaženy na stav 165/165, tedy pokrytí plánovaného katalogu testovacích scénářů pro daný předávací rozsah.

Pro veřejný pohled je důležité, že testování už není jen doplněk k vývoji. U RZP se stalo součástí předávací logiky. Modul se nehodnotí jen podle toho, kolik obrazovek bylo přepsáno, ale podle toho, jaké workflow, reporty, číselníky, importy a okrajové situace jsou doložené testem nebo vědomě klasifikované.

### Release management se připravil na 10.1 i 10.11

Do release-management dokumentace přibyla multi-version distribuce. Prakticky to znamená, že projekt počítá se souběžnou existencí linie Fenixu 10.1 a linie 10.11. Balíky pro různé linie mají mít odlišnou identitu, aby se z nich nestal tichý automatický upgrade tam, kde je ve skutečnosti potřeba řízený přechod včetně databáze a všech modulů.

To je pro RZP klíčové. První předaný modul stojí na legacy verzi 10.1. Mezitím ale do repozitáře přibyla baseline 10.11 a projekt musí umět řízeně říct, co patří do hotfixu předané 10.1 linie a co patří do samostatného povýšení na 10.11.

### UCV se posunulo z experimentu do produkčnějšího směru

Vedle finiše RZP pokračovalo UCV, tedy Výkaznictví. V pracovní větvi se doplňovalo finanční výkaznictví ÚSC, Dapper zápisy a čtení pro výkazy, File2Db práce se SÚZ přílohami, ukládání SÚZ výkazu, UI napojení příloh a produkčnější Dapper providery pro kontrolní pravidla.

Aktuální handoff UCV uvádí zelenou testovací baseline 2201 prošlých testů, 0 selhání a 6 skipů. Současně ale férově říká, že některé věci ještě nejsou paritně uzavřené: například součtové vztahy čekají na re-compute přístup podle legacy chování a část live parity vyžaduje běžící legacy `Ucv.exe`.

To je zdravý stav. UCV už není jen název dalšího modulu v roadmapě, ale zároveň se u něj neopakuje chyba „prohlásit za hotové to, co je zatím jen rozpracované". Po zkušenosti z RZP je rozdíl mezi implementací, zapojením, testem a paritním důkazem viditelnější.

### Roadmapa už ukazuje další proudy

Roadmapa migrace v tomto týdnu označuje jako aktivní nejen RZP a UCV, ale také SPOL a UPD. SPOL představuje společné knihovny a komponenty, na kterých budou stát další moduly. UPD je modul pro upgrade databáze, tedy oblast nutná pro řízené přechody mezi verzemi.

Tento posun je významný. Jakmile má projekt první předaný modul, nestačí jen pokračovat v přepisování další obrazovky. Je potřeba udržet společné knihovny, umět přejít na novou legacy baseline, připravit databázové upgrady a současně rozjet další modul tak, aby nemusel znovu objevovat stejné postupy.

## Význam týdne

Šestnáctý týden byl přechodový. RZP se během něj prakticky uzavíralo pro předání, které následovalo 30. 6. 2026. Další práce kolem RZP už má mít jiný režim: hotfixy pro předanou 10.1 linii a řízené povýšení na 10.11, ne pokračování otevřeného vývoje prvního modulu.

Zároveň se ukázalo, jak se projekt bude muset chovat dál. UCV už běží jako další velký modul, UPD vstupuje do hry kvůli databázovým upgradům a SPOL/SPK se musí povýšit tak, aby společná vrstva odpovídala aktuálnějšímu legacy světu.

Týden tak nebyl jen finišem RZP. Byl prvním náznakem další fáze HAIFA: z jedné úspěšné migrace udělat opakovatelný proces, který zvládne další moduly i živý vývoj původního Fenixu.

[Domů]({{ '/' | url }})
