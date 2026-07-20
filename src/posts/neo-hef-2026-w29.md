---
title: "Týden devatenáctý - UCV vstoupilo do developu a distribuce se připravuje na 10.11"
date: 2026-07-19
week: "Týden devatenáctý"
period: "13. 07. 2026 - 19. 07. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w29
summary: "Devatenáctý týden přinesl výrazné sloučení UCV do developu, potvrzenou 10.11 auth/vault deltu ve SPK/SPOL, první společný instalátor a klidnou údržbovou linii RZP 10.1."
---

## Shrnutí pro netechnické čtenáře

Devatenáctý týden projektu NEO_HEF byl po červencovém volnějším tempu výrazně aktivnější. Největší změna je jednoduchá: práce na UCV, tedy na modulu účetního výkaznictví, se už nepohybuje jen v samostatné pracovní větvi. Velká část se sloučila do hlavní větve `develop`, kde se projekt připravuje na verzi Fenixu 10.11.

To je důležité, protože HAIFA se tím posouvá za první předaný modul RZP. RZP ukázalo, že jde migrovaný modul dotáhnout do předávacího stavu. UCV je jiný test: je větší, má složitější výkazové rodiny, více vazeb na živá data a pro 10.11 má skutečné změny v modulem vlastněném kódu. Právě proto je jeho vstup do `develop` silný signál, že projekt začíná ověřovat opakovatelnost migrace na dalším velkém modulu.

Vedle UCV se dokončovalo i to, co běžný uživatel moc nevidí, ale bez čeho by nové moduly nemohly bezpečně fungovat: přihlašování, práce s hesly a předávání session přes vault. Dokumentace týdne už tuto 10.11 změnu ve SPK a SPOL shrnuje jako implementovanou, používanou a živě ověřenou. Některé části zůstávají záměrně zmrazené, například plné obrazovky pro speciální scénáře změny hesla, ale nejde o zapomenutý nedodělek v hlavním běhu RZP a UCV.

Třetí důležitá linka týdne je distribuce. Vedle samotných modulů vznikl společný hromadný instalátor a v repozitáři `fenix-releases` se potvrzuje rozdělení na aktivní linii 10.11 a údržbovou linii 10.1. To je praktický krok od jednorázového předání k modelu, kde mohou existovat různé verze Fenixu, různé instalační kanály a jasná pravidla, co je aktivní vývoj a co údržba.

`release/10.01` v samotném repozitáři NEO_HEF zůstala tento týden klidná. To je v pořádku: její úkol není nést nový vývoj, ale držet stabilizovaný stav RZP 10.1. Hlavní energie se přesunula do `developu`, kde vzniká další verze a další modul.

## Co se stalo

V týdnu od 13. do 19. července 2026 je po aktualizaci vzdálených větví v repozitáři `NEO_HEF` vidět 134 commitů na větvi `origin/develop`, z toho 38 merge commitů. Větev `origin/release/10.01` v tomto období nepřibrala žádný commit.

Repozitář `fenix-releases` měl ve stejném období 7 commitů na `origin/main`. Nešlo o zdrojový kód modulů, ale o distribuční vrstvu: manifest releasů, instalační stránku, dokumentaci stavů 10.11 a 10.1 a podporu společného instalátoru.

### UCV se dostalo do hlavní vývojové linie

Největší zpráva týdne je sloučení rozsáhlé práce na UCV do `developu`. V předchozím týdnu bylo UCV ještě popisované opatrně jako výrazná, ale samostatná pracovní větev. Tento týden se z ní stala součást hlavní vývojové linie.

Obsahově nejde o kosmetický merge. UCV v tomto týdnu dostalo běhové opravy, výběr vlastníka a období při startu, napojení reálných práv, nápovědu, GDPR/OOU menu a několik oprav kolem toho, aby se modul choval použitelněji v běžném spuštění. Důležité jsou i malé technické opravy typu převodu `smallint` na `int` v Dapper readerech: samy o sobě nejsou vidět, ale bez nich se živá databáze chová jinak než testovací model.

Významné bylo také doplnění rodinných Dapper readerů pro výkazové rodiny F40, F60, F61, F62, F67, F69, F70 a F97. To posouvá UCV blíž k ověřování proti reálné databázi, ne jen proti izolovaným testům. Do testů přibyly live-DB smoke scénáře i další paritní kontroly.

### UCV začalo dostávat konkrétní uživatelské cesty

Vedle backendu se posouvaly i formuláře a přehledy. Do `developu` se dostaly práce kolem přehledových gridů, řazení, barev řádků, indikátorů, načítání přehledu výkazů 10 a dispatch cest pro akce jako Pořídit, SÚZ a kontrola.

Zvlášť viditelná byla série změn kolem editoru ukazatelů výkazu 10. Postupně přibýval render model, projekce řádků, živý formulář, mazání, ukládání, rušení změn, úprava hodnot, nový řádek, přepočet mezisoučtů, textové přílohy, pravidla přípustnosti a další validační části. To je přesně typ práce, který z "máme portovanou logiku" dělá modul, s nímž lze reálně pracovat.

UCV ale tímto týdnem ještě nelze popsat jako hotový předaný modul. Jeho status je lepší formulovat takto: výrazná část se integrovala do `developu`, modul má stále konkrétní dokončovací a paritní kroky, ale už běží jako hlavní vývojový proud projektu, ne jako izolovaný experiment.

### SPK a SPOL uzavřely 10.11 auth/vault základ

Druhá technicky důležitá linka týdne se týkala společných částí SPK a SPOL. Dokumentace k 17. červenci shrnuje, že změna 10.01 -> 10.11 kolem hesel, autentizace a vault transportu je v NEO implementovaná, používaná a živě ověřená proti `fenix_1011`.

Konkrétně se v týdnu doplňovaly a zpřesňovaly části jako explicitní provázání login key, autorizační policy, vyhodnocení expirace hesla, parita hlášek pro resetované nebo expirované heslo a CP1250 kódování session payloadu. To jsou drobně znějící položky, ale dohromady rozhodují o tom, jestli se nové moduly chovají stejně jako legacy Fenix v citlivých přihlašovacích situacích.

Současně se jasně oddělilo, co je hotové a co je záměrně odložené. Hlavní auth/vault mechanismus je připravený pro běžné scénáře. Některé obrazovky a okrajové scénáře změny hesla zůstávají zmrazené do chvíle, kdy je bude konkrétní release skutečně vyžadovat. To je zdravější stav než slepě implementovat vše najednou bez reálného konzumenta.

### Launcher 10.11 je důležitý, ale není Fenix

V historii týdne se objevila i práce kolem `SpolecnySpoustec` pro 10.11. Je dobré připomenout přesnou terminologii: Launcher není Fenix jako celek. Launcher je společný spouštěč, tedy shell, do kterého se moduly vkládají a který umožňuje, aby uživateli běžely v jednom okně na záložkách.

Pro NEO_HEF je Launcher důležitý hlavně kvůli duálnímu spouštění modulů. RZP i UCV se mají umět spustit samostatně i pod Launcherem. Při spuštění pod Launcherem vstupuje do hry předání session a named pipes komunikace, aby Launcher věděl, že modul běží, a uměl ho korektně ukončit.

Tento týden proto nebyl jen o modulech samotných, ale i o okolí, ve kterém budou v praxi žít. Z veřejného pohledu je podstatné, že projekt hlídá hranici mezi migrovanými moduly a společným spouštěčem, místo aby tyto role směšoval.

### Distribuce se posunula od balíku k instalačnímu modelu

V NEO_HEF přibyl společný hromadný instalátor `Asseco.Fenix.Installer`. Jeho úkolem není nahradit Launcher. Instalátor je distribuční nástroj: pomáhá uživateli vybrat a instalovat migrované moduly podle verzí Fenixu a kanálů.

To zapadá do změn v `fenix-releases`. Manifest nově popisuje instalátor a zároveň drží dvě linie Fenixu: 10.1 ve stavu `maintenance` a 10.11 jako `active`. U RZP je 10.1 dostupná v alpha a beta kanálu, zatímco 10.11 má vlastní oddělenou identitu a alpha kanál. Instalační stránka se upravovala tak, aby hromadný instalátor byl doporučená cesta a aby uživatelé lépe viděli návod.

Pro projekt je to důležité z procesního hlediska. Migrace nebude jednou velkou instalací všeho. Bude potřebovat souběh verzí, jasné kanály, možnost údržby starší linie a postupné přidávání dalších modulů.

### Release 10.01 zůstává údržbová linie

Větev `release/10.01` v NEO_HEF tento týden nepřibrala žádné nové commity. V článku o předchozím období to mohlo působit jako prázdné místo, ale tady je to spíš potvrzení správného rozdělení práce.

`release/10.01` drží předaný RZP pro linii 10.1. Nový vývoj UCV, 10.11 delta a společné instalační mechanismy patří do `developu` a do distribučního repozitáře. Pokud by se nová práce začala míchat do release větve, ztratil by projekt jasnou hranici mezi údržbou předaného modulu a dalším vývojem.

### Význam týdne

Devatenáctý týden ukazuje, že NEO_HEF se překlápí z režimu "dokončili jsme první modul" do režimu "stavíme opakovatelnou továrnu". RZP 10.1 má klidnou release linii. `develop` nese 10.11 základ a nově i velký kus UCV. Distribuční vrstva začíná počítat s více verzemi Fenixu a se společným instalátorem.

To je pro HAIFA podstatné. Úspěch projektu nebude stát jen na tom, že se podařilo jednou předat RZP. Bude stát na schopnosti udržovat vydanou linii, rozvíjet další verzi, připojit další modul a dostat ho k uživateli řízeným distribučním procesem.

[Domů]({{ '/' | url }})
