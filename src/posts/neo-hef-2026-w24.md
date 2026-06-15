---
title: "Týden čtrnáctý - RZP míří do pilotu a UCV prošlo tvrdou revizí"
date: 2026-06-14
week: "Týden čtrnáctý"
period: "08. 06. 2026 - 14. 06. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w24
summary: "Čtrnáctý týden formálně uzavřel RZP reporting pro pilot, doplnil kontrolu a kopírování rozpouštěcích předpisů, rozšířil E2E a golden-master testování, sjednotil progress dialogy a přenesl zkušenosti z RZP i UCV do globálních migračních pravidel."
---

## Shrnutí pro netechnické čtenáře

Čtrnáctý týden projektu HAIFA byl týdnem, kdy se RZP posunulo z fáze „většina věcí funguje" do mnohem přísnější fáze „můžeme to obhájit proti původnímu Fenixu". Nejviditelnější výsledek je uzavření kroku RZP pro reporting a výstupy. Tiskové přehledy, číselníkové tisky, exporty do Excelu, náhledy, přímý tisk i výstup do souboru jsou podle aktuálního manažerského shrnutí uzavřené jako použitelné pro pilotní provoz.

Důležité je, že nešlo jen o další obrazovky. Tým řešil přesnost chování: pořadí validací, výběry v tabulkách, předvyplnění aktuálního majitele, české desetinné čárky, ikony hlášek, rozbalovací seznamy, reakce na změnu rozlišení a to, zda se formulář otevírá jako MDI okno nebo jako modální dialog. Právě takové detaily rozhodují, jestli uživatel pozná migrovanou aplikaci jako svůj původní pracovní nástroj.

V RZP přibyla také kontrola rozpouštěcího předpisu. Je to diagnostika, která sama nic nemění, ale umí projít koeficienty rozpouštění a ukázat chyby v sestavě. Vedle toho vznikl golden-master důkaz pro kopírování předpisu: tým zachytil chování legacy aplikace a podle něj uzavřel paritní test. Zároveň tím objevil další jemnou odchylku kolem přemapování kont, která se přesunula do navazujícího kroku.

Výrazně narostlo i testování. E2E katalog RZP má nyní 153 scénářů, z toho 63 označených jako implementované. Přibyly testovací sady pro oblasti S00 až S05 a textové golden-master baseline pro reporty řad 21 až 29. To neznamená, že je všechno hotové, ale znamená to, že projekt má lepší síť důkazů a odchylky se dají chytat systematičtěji.

Vedle RZP se do veřejného obrazu týdne promítlo i UCV. Nový modul Výkaznictví prošel tvrdou šestibodovou revizí, která našla rozdíl mezi formálním „DONE" a skutečnou použitelností. Po pěti vlnách oprav má UCV čistý build a 894 úspěšných testů, ale pořád má jasně pojmenované odložené oblasti: Dapper persistence, vazby na SPOL/RUV/UCA a živou paritu proti původnímu UCV. To je cenná lekce pro další moduly.

## Co se stalo

V týdnu od 8. do 14. června 2026 přibylo do větve `develop` celkem 39 změn. Týden nebyl o jednom velkém novém začátku, ale o uzavírání, zpřesňování a převádění zjištěných problémů do pravidel, která pomohou i dalším modulům.

### RZP reporting byl formálně uzavřen pro pilot

Nejdůležitější provozní zpráva týdne je uzavření kroku RZP-S04, tedy reportingu a výstupů. Podle aktuálního shrnutí je hotových všech 19 implementačních úkolů tohoto kroku a reporting pipeline je funkční end-to-end.

Pro uživatele to znamená, že RZP umí generovat přehledové sestavy 21a/b, 22a/b, 23a/b, 24a-e a 29a/b. Stejná oblast zahrnuje číselníkové tisky majitelů, předpisů, zdrojů a cílů, seznam přijatých dat, Crystal náhled, přímý tisk, export do souboru a Excel CSV. Excel exporty řeší i zdánlivé maličkosti, jako je oddělovač, dvouřádková hlavička, desetinná čárka a sloupce pro dimenze.

Z pohledu pilotu je podstatné, že otevřené body už nejsou blokující. Jediná výslovně uvedená odchylka je kosmetická: část potvrzovacích a informačních hlášek v RZP zůstává jako inline český text místo čtení ze sdíleného katalogu. Pro pilotní funkci a data to nemá dopad.

### Rozpouštěcí předpisy dostaly kontrolu a tvrdší paritu

Další velký proud se týkal rozpouštěcích předpisů. Přibyla kontrola předpisu, tedy read-only diagnostika koeficientů. Uživatel ji může spustit z hlavního menu i z několika míst uvnitř práce s předpisem. Kontrola projde hierarchii definice, předpisu, stupně a účtů „odkud-kam" a při problému připraví sestavu chybných řádků.

Tady je dobře vidět, jak jemná je 1:1 migrace. Nestačilo napsat nový výpočet. Tým ověřoval pořadí hlaviček, stránkování podle předpisu, vazbu na vybranou definici, chování při chybě, oprávnění, progress dialog i možnost přerušení. Výsledkem je funkce, která se nechová jako nová interpretace problému, ale jako přepis původní logiky do .NET.

Současně se uzavřela část paritního důkazu pro kopírování předpisu. Tým zachytil legacy běh „Kopie předpisu" do golden baseline a podle něj porovnal logický obsah zkopírovaného stromu. Právě tento test ukázal, že legacy při kopii přemapovává některá konta podle aktivních komponent. To už je samostatná paritní stopa pro navazující krok S10, ne detail, který by se měl zamést pod koberec.

### Testování se rozšířilo od scénářů k důkazům

QA část týdne byla výrazná. Do RZP přibyla nová struktura E2E testovacích sad pro S00 až S05, včetně katalogu scénářů, šablon a reportových golden-master podkladů. Katalog nyní obsahuje 153 scénářů: 63 implementovaných, 5 scaffoldovaných, 2 rozpracované, 1 plánovaný a 82 zatím chybějících.

Tohle číslo je potřeba číst střízlivě. Neříká, že je RZP celé automaticky otestované. Říká ale, že se testování mění na inventář konkrétních pracovních cest, kde je vidět, co je pokryté, co je jen připravené a co ještě chybí.

Reporty navíc dostaly textové golden-master baseline pro varianty 21 až 29. U takových sestav nejde jen o to, že se otevře okno. Ověřuje se text, hlavičky, skupiny, součty, oddělovače a opakovatelnost výstupu. To je nezbytné, pokud má být reporting dlouhodobě udržitelný a ne pokaždé ručně porovnávaný podle dojmu.

### Sdílené progress dialogy se začaly opravdu používat

V RZP se také rozšířila adopce sdílených dialogů SPOL pro průběh práce a čekání. Číselníkové tisky, rozpouštění, kopie předpisu a příjem účetních dat se postupně napojovaly na sdílené `SPHZPR` a `SPHZTL` chování.

Praktický význam je jednoduchý: uživatel má vidět stejný typ průběhového okna jako v původním Fenixu, dlouhé operace nemají blokovat uživatelské rozhraní a přerušení práce musí mít jasně definovaný dopad na data. Například u příjmu účetních dat se řešilo, aby zrušení uprostřed zpracování neskončilo napůl zapsanými řádky bez kontroly.

Tato práce zároveň odděluje dvě věci, které se v migraci snadno pletou. Výpočetní logika se nemá měnit jen proto, že se mění progress okno. Progress a cancel jsou uživatelský a provozní povrch nad stejným výpočtem.

### Paritní chyby se měnily na migrační pravidla

Týden přinesl několik malých, ale důležitých oprav chování RZP a UCV. V RZP se opravovalo pořadí validací účetního období, předvýběr aktuálního majitele, chování dialogu majitele, držení výběru v gridu při opravě nebo smazání účtu, validace rozsahu období a stupně před potvrzením, validace hodnoty cíle KAM a ikony hlášek podle legacy `bf_msg`.

V UCV se opravovalo otevírání některých definic jako MDI child místo modálního dialogu. Přidaly se také guardraily pro AutoSize a DPI labely, rozbalovací seznamy, modalitu formulářů, mapování ikon hlášek a přesnost českých legacy stringů v kódování CP1250.

To je možná nejméně atraktivní, ale nejdůležitější část týdne. Každá nalezená chyba se nebrala jen jako lokální oprava, ale jako poučení pro další migrační běhy. Projekt si tím postupně staví metodiku: jak převádět formuláře, kdy nesahat na modalitu, jak hlídat layout, jak pracovat s českými texty a jak nenechat WinForms defaulty rozbít VB6 paritu.

### DPI politika dostala vlastní architektonické rozhodnutí

Zkušenosti z RZP i UCV vedly k přijetí ADR-010: migrované VB6 WinForms moduly mají být výchozím způsobem DPI-unaware. Důvod je praktický. Původní VB6 formuláře stojí na pevných souřadnicích a chování při změně DPI nebo velikosti může snadno vyrobit tiché odchylky v rozložení.

Rozhodnutí neříká, že moderní DPI-aware UI je obecně špatně. Říká, že pro 1:1 migraci legacy formulářů je bezpečnější držet stabilní 96 DPI baseline, vypnout automatické škálování a konkrétní resize chování řešit cíleně. Zvlášť důležité je to při spuštění pod společným spouštěčem, kde se moduly vkládají do jednoho hostovaného prostředí a nemohou si každý samostatně diktovat vlastní DPI režim.

### UCV prošlo revizí, která zpřesnila význam slova hotovo

Do týdne patří i velký posun v UCV. Do `develop` se dostala migrace kompletního NEO modulu UCV včetně kritické revize. Ta revize je zajímavá hlavně tím, že se neptala jen „projde build?" nebo „existují formuláře?", ale také „dá se menu skutečně používat?", „fungují oprávnění jako v legacy?" a „nejsou obrazovky jen nečinné kulisy?".

Šest kontrolních čoček našlo 62 konsolidovaných zjištění. Vybrané, nízkorizikové a čistě UCV-local opravy proběhly v pěti vlnách: dynamická viditelnost menu, dosažitelnost položek, permission gating, funkčnost několika formulářů a obsahová data v UI. Výsledkem je čistý build a 894 úspěšných testů.

Současně je důležité říct, co tím hotové není. UCV má pořád odložené oblasti závislé na Dapper persistence, dalších modulech SPOL/RUV/UCA a živé capture paritě proti původnímu UCV. Revize ale posunula projekt od pocitu hotového modulu k přesnějšímu seznamu toho, co je opravdu funkční, co je hlídané testy a co zatím čeká na další závislosti.

## Význam týdne

Čtrnáctý týden byl méně o efektních novinkách a víc o důvěryhodnosti. RZP reporting se dostal do stavu, který lze obhájit pro pilot. Rozpouštěcí předpisy dostaly další reálnou kontrolu. Testovací katalog a golden-master baseline dávají týmu lepší možnost odhalovat regresi. Sdílené progress dialogy a DPI politika zase ukazují, že zkušenosti z jednoho modulu se začínají přelévat do pravidel pro celý Fenix.

Nejdůležitější zpráva je proto dvojí. RZP se přibližuje pilotní použitelnosti, ale zároveň projekt nepředstírá, že každá zelená položka v plánu znamená plnou paritu. UCV revize ukázala, že skutečné „hotovo" musí zahrnovat dosažitelnost, oprávnění, data, chování formulářů a živé důkazy proti legacy systému.

[Domů]({{ '/' | url }})
