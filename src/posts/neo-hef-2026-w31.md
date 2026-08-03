---
title: "Týden jednadvacátý - UCV zavírá parity, UPD ožívá a UIR má kompletní plán"
date: 2026-08-02
week: "Týden jednadvacátý"
period: "27. 07. 2026 - 02. 08. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w31
summary: "Jednadvacátý týden přinesl silný posun UCV v paritě a E2E testech, bezpečné ověření UPD na zahoditelné databázi, kompletní implementační plán UIR a zpřesnění práce s testovacími daty."
---

## Shrnutí pro netechnické čtenáře

Jednadvacátý týden projektu NEO_HEF byl jeden z těch, kdy se dobře ukazuje rozdíl mezi prostým přepisem kódu a skutečnou migrací ERP systému. UCV se dál posouvalo od "modul už běží" k "modul se chová stejně jako původní Fenix v konkrétních výkazech, tiscích a uživatelských situacích". UPD poprvé prokázalo, že umí bezpečně projít živý upgrade scénář na obnovitelné kopii databáze. UIR má po rozsáhlé pitvě kódu kompletní implementační plán.

Pro netechnického čtenáře je podstatné hlavně tohle: projekt už neřeší pouze to, jestli se jednotlivé migrované moduly spustí. Fenix je sada modulů a každý z nich má vlastní odpovědnost. UCV musí správně pracovat s výkazy a sestavami, UPD musí bezpečně zvládnout databázový upgrade a UIR musí mít před implementací jasně popsané obrazovky, vazby a testovací povinnosti.

U UCV se tento týden zavíraly důležité paritní mezery. Tým ověřoval výstupy proti legacy Fenixu na úrovni konkrétních buněk a bytů, tedy ne jen "vypadá to podobně". To je důležité zejména u účetního výkaznictví, kde i malá odchylka v zaokrouhlení, součtu nebo filtrování majitelů může znamenat jiný výsledek.

UPD se posunulo v jiné citlivé oblasti: v aktualizaci databáze. Update modul nesmí být testovaný stylem pokus-omyl nad produkční databází. Proto se ověřoval na zahoditelné kopii a se silnými pojistkami, které mají zabránit spuštění proti ostrému prostředí. Výsledek týdne je významný: upgrade engine dokázal strukturálně zopakovat celý golden průchod 10.01 -> 10.11 v 13 z 13 kroků.

UIR zatím není implementovaný modul. Ale jeho implementační plán je dokončený a ověřený jako proveditelný. To znamená, že před zahájením portu jsou popsány obrazovky, menu, tiskové cesty, nastavení, sdílené komponenty, rizika i testovací povinnosti. HAIFA tím potvrzuje přístup, že další migrace nemají začínat improvizací.

Větev `release/10.01` zůstala i tento týden beze změn. To zapadá do role této větve: držet stabilizovaný stav starší linie, zatímco hlavní práce pokračuje v `developu`.

## Co se stalo

V týdnu od 27. července do 2. srpna 2026 je po aktualizaci vzdálených větví v repozitáři `NEO_HEF` vidět 184 commitů na větvi `origin/develop`, z toho 71 merge commitů. Větev `origin/release/10.01` ve stejném období nepřibrala žádný commit.

Největší objem práce se soustředil do čtyř oblastí: UCV, UPD, implementační plán UIR a podpůrné nástroje pro testování a bezpečnou práci s databázemi.

### UCV přešlo do fáze tvrdého ověřování

UCV bylo v předchozích týdnech hlavně o integraci a postupném rozhýbání uživatelských cest. Tento týden se těžiště přesunulo k tvrdému ověřování výsledků. To znamená porovnání konkrétních výstupů nové implementace s legacy Fenixem, často na úrovni jednotlivých buněk nebo přesného textového výstupu.

Dokumentace UCV popisuje dokončený finish-run z 27. července: všech 12 tehdy implementovatelných položek bylo dodáno a sloučeno do `developu`. Navázal na něj golden-capture běh z 28. července, který uzavřel dalších 11 položek. Prakticky šlo o ověřování reportů, exportů, grafů, výkazových rodin a chování na živějších datech.

Velký význam má IRES export v 545znakovém formátu pro CSÚIS, u kterého dokumentace uvádí plný byte-golden match. To je silnější důkaz než běžná funkční kontrola: nový výstup se porovnává s očekávaným výsledkem přesně, ne jen orientačně.

Podobně se posunuly výkazové rodiny F69 a F70 pro 10.11 reformu. U F70 se opravily odchylky v přepočtu na tisíce, v práci se součtovými řádky a v rozdílu mezi rokem algoritmu a rokem dat. U F69 se podařilo zachytit legacy golden na obnovitelné kopii databáze a následně ověřit plnou shodu nové implementace proti legacy výstupu.

Vedle úspěšných shod se našly i důležité chyby. Například PAP-66 odkrylo sdílený problém ve vyplňování hodnot pro vazby, kvůli kterému mohla kontrola tiše procházet. To je přesně důvod, proč má smysl dělat migraci přes důkazní sady a ne přes pouhý dojem, že modul "vypadá hotově".

### UCV dostalo širší E2E pokrytí

Druhá část UCV práce mířila na E2E testy. Do testovací dokumentace a automatizace přibyly scénáře pro životní cyklus výkazu, sestavení rozvahy, texty a přílohy, DPH výkaz a přehled výkazů. Později v týdnu přibyly i negativní scénáře: validace vstupů a speciální znaky v textech přílohy včetně SQL injection testu.

Tím se UCV posouvá ze stavu "máme jednotkové a paritní testy" do stavu, kdy se začíná systematicky ověřovat reálné používání modulu přes obrazovky. To je pro veřejné předání důležité, protože uživatel nebude volat jednotlivé služby v kódu; bude klikat ve formulářích, sestavovat výkazy, opravovat texty a pouštět kontroly.

Testovací aparát se zároveň sjednocoval napříč moduly. Nové E2E pokrytí přibylo v UCV a testovací sady se přesouvaly do přehlednější struktury. RZP v tomto týdnu nové testy nedostalo, ale dál slouží jako referenční modul procesně: co se na něm naučilo, se postupně převádí do obecnějších QA nástrojů.

### UPD poprvé bezpečně prošlo živým upgrade scénářem

UPD je citlivý modul, protože řeší změny databázové struktury a dat mezi verzemi Fenixu. Tady by bylo nebezpečné prezentovat "funguje to" bez přesného dodatku, kde a jak to bylo ověřeno. Tento týden je důležitý právě tím, že ověření proběhlo bezpečně: proti zahoditelné databázi obnovené z kopie 10.01, ne proti produkčnímu prostředí.

Nejdřív se doplnil live upgrade engine v režimu, který byl stále bezpečný pro suchý běh a bez živého provedení. Potom se přidaly spouštěcí části, živé čtení definic tabulek, provádění table morph kroků a práce s indexy. Následně přišel ověřený běh: UPD reprodukovalo golden upgrade 10.01 -> 10.11 strukturálně ve všech 13 z 13 statementů.

To neznamená, že UPD je hotový produkční update modul. Dokumentace si drží hranice poctivě: běh byl na disposable databázi, některé části protokolu zůstávají byte-paritně otevřené a hromadná konverze hesel patří do sdílené SPOL/SPK vrstvy, ne do lokální duplikace v UPD. Ale posun je zásadní: už nejde jen o model, parser nebo dry-run. Existuje ověřený průchod proti skutečné databázové kopii.

Pro projekt NEO_HEF je to významný milník i mimo UPD. Ukazuje se zde obecný vzor pro bezpečné ověřování destruktivních operací: obnovitelná kopie, explicitní pojistky proti produkci, porovnání s legacy golden protokolem a nezávislá validace.

### UIR má kompletní a ověřený implementační plán

UIR, tedy územní identifikační registr, se tento týden posunul z rozboru legacy kódu do kompletního implementačního plánu. V předchozím týdnu byla podstatná samotná pitva kódu. Tento týden se z ní stal proveditelný plán migrace.

Plán je rozsáhlý: pokrývá 34 kroků, menu, formuláře, tiskové cesty, nastavení, aktivní plochu, nápovědu, sdílené komponenty, rizika i testovací povinnosti. Důležitý je hlavně závěr validace: plán byl po opravách označen jako executable, tedy proveditelný. Při kontrole se doplnila chybějící pole úloh, sjednotily se odpovědnosti a ověřilo se, že plán není jen seznam přání, ale skutečný pracovní podklad.

UIR se tím dostává do stavu, kdy může začít samotná implementace. U takto velkého legacy modulu je to důležitý rozdíl: místo přímého skoku do kódu má tým nejdřív pracovní mapu, která snižuje riziko pozdějších překvapení.

Zajímavé je i to, že UIR plán aktivně hledá, co má být sdílené a co modulové. Například nápověda, reporty, aktivní plocha nebo práce s nastavením mají vazby na SPOL a na zkušenosti z RZP, UCV a UPD. To je tovární přístup v praxi: každý další modul nemá znovu vynalézat věci, které už byly vyřešeny jinde.

### Bezpečná data se stala samostatným tématem

Vedle modulů se tento týden hodně pracovalo na bezpečné práci s databázemi. Přibyl a zpřesnil se aparát pro anonymizaci databáze, včetně samostatného auditu, jestli je výsledná kopie opravdu anonymizovaná. Starší explorativní skripty se z dokumentace odstranily, protože mohly působit použitelně, ale po GDPR auditu bylo jasné, že některé osobní údaje nechávaly v datech.

To je pro migraci ERP důležitější, než se může zdát. AI-driven vývoj potřebuje realistická data, jinak neodhalí chyby ve výkazech, právech, číselnících ani reportech. Současně ale nesmí pracovat s osobními údaji bez kontroly. Projekt proto postupně buduje cestu, kde lze získat použitelnou testovací kopii a zároveň ověřit, že citlivá data nezůstala zachovaná.

Do stejné kategorie patří i práce na nástrojích pro přenos databází a benchmark výkonu. Nejde o funkce pro koncového uživatele, ale o infrastrukturu, bez které se nedá spolehlivě ověřovat chování migrovaných modulů na různých prostředích.

### Release 10.01 zůstává stabilní

Větev `release/10.01` v NEO_HEF tento týden nepřibrala žádné commity. V kontextu týdne je to důležité hlavně jako potvrzení, že nový vývoj se nemíchá do stabilizované linie.

`release/10.01` má držet předaný stav starší verze. Nové parity UCV, UPD ověření, UIR plán a obecné QA nástroje patří do `developu`. Tím si projekt udržuje jasnou hranici mezi údržbou a dalším vývojem.

### Význam týdne

Jednadvacátý týden ukazuje NEO_HEF jako projekt, který už zřetelně stojí na několika paralelních kolejích. UCV se blíží k předávací kvalitě přes konkrétní parity a E2E scénáře. UPD ukazuje, že i destruktivní databázové operace lze ověřovat řízeně a bezpečně. UIR má hotový plán dřív, než se začne masivně psát kód. RZP dál pomáhá jako zdroj testovacích a procesních vzorů.

Pro HAIFA je to podstatný posun. Nejde jen o další sadu commitů v jednom modulu. Jde o schopnost migrovat starý ERP systém opakovatelným způsobem: s živými důkazy, bezpečnou prací s daty, oddělením stabilních release větví od vývoje a s plánem, který je dost konkrétní na to, aby podle něj mohli pracovat další agenti i lidé.

[Domů]({{ '/' | url }})
