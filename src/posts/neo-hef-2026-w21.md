---
title: "Týden jedenáctý - RZP dostává rozpouštěcí předpisy, reporty a automatizované testy"
date: 2026-05-24
week: "Týden jedenáctý"
period: "18. 05. 2026 - 24. 05. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w21
summary: "Jedenáctý týden přinesl další praktický posun RZP: rozpouštěcí předpisy ODKUD/KAM, formuláře pro rozpouštění, reportingové obrazovky, E2E testovací orchestraci a experimentální start UCV."
---

## Shrnutí pro netechnické čtenáře

Jedenáctý týden projektu HAIFA znamenal další posun od izolovaných obrazovek k reálně použitelným částem modulu RZP. Tým se věnoval rozpouštěcím předpisům, funkcím rozpouštění, reportům a automatizovanému testování. Nejde tedy jen o to, že přibyly nové formuláře. Důležité je, že se začínají propojovat s daty, nabídkami, vyhledáváním, tiskem, testovací infrastrukturou a kontrolami shody s původním Fenixem.

Výrazně se posunula oblast rozpouštěcích předpisů ODKUD/KAM. Nové formuláře už umí pracovat s dynamickými rozměry podle definice rozpouštěcí věty, načítat a ukládat záznamy, vyhledávat, řadit a otevírat navazující číselníky. Vedle toho pokračovala práce na formulářích pro rozpouštění a reportech, kde se už řeší nejen vzhled, ale také napojení na společnou infrastrukturu pro dočasné databáze a generování sestav.

Velkou roli sehrálo také automatizované testování. Vznikla jednotnější orchestrace testů, katalog E2E scénářů, podklady pro porovnávání s původní aplikací a HTML reporty. To je důležité hlavně proto, že převod takto rozsáhlého systému nejde dlouhodobě kontrolovat jen ručně. Automatické testy začínají vytvářet opakovatelnou bezpečnostní síť pro další vývoj.

Současně se pracovalo na sdílených základech mimo samotné RZP. Ve společné vrstvě SPOL vzniká podpora pro historický dialog CommonDialog, který se ve starých VB6 modulech používá na mnoha místech. Vedle toho se rozběhl experimentální start migrace modulu UCV, tedy modulu pro výkaznictví. V legacy verzi má UCV 212 595 řádků kódu a 44 formulářů, zatímco pilotní RZP má pro srovnání 55 943 řádků kódu a 25 formulářů. Tým zde zkouší využití `a5c babysitter` orchestrátoru, který umí řídit dlouhodobé a složitější procesy s více AI agenty. Cílem je ověřit, jestli lze část migračních procesů automatizovat ještě víc než dosud.

## Co se stalo

Týden od 18. do 24. května 2026 byl v historii větve `develop` výrazně zaměřený na RZP. Do větve bylo začleněno 23 změn a většina z nich rozšiřovala buď samotné funkce modulu, nebo nástroje, které umožňují převod bezpečněji kontrolovat.

### RZP rozpouštěcí předpisy ODKUD/KAM

Největší funkční posun nastal u oblasti rozpouštěcích předpisů. Formulář `RecipeSourceForm`, který odpovídá původnímu formuláři `RZP_PREO.FRM`, se stal součástí řetězce formulářů pro práci s předpisy. Uživatel se může pohybovat od číselníku rozpouštěcích předpisů přes úroveň předpisu až k definici zdrojové a cílové strany.

Implementace se nezastavila u vizuální kostry. Přibylo načítání, zakládání, ukládání i mazání záznamů, kontrola duplicit, ochrana proti mazání navázaných dat, práce s účty a čtrnácti dimenzemi, vyhledávání, dynamické řazení i nabídky číselníků. Formulář zároveň reaguje na aktuální definici rozpouštěcí věty a podle ní skládá viditelné sloupce a pole.

Zůstávají i otevřené body. Některé funkce, například tisk nebo kopírování detailu rozpouštěcího předpisu, čekají na další části převodu. Důležité ale je, že už existuje konkrétní funkční základ a také testovací pokrytí. Tým navíc doplnil audit plánovaných testů: většina povinných scénářů už prochází a poslední paritní test čeká hlavně na referenční data zachycená z původní VB6 aplikace.

### Formuláře pro rozpouštění v RZP

Pokračovala také práce na části RZP, která obsluhuje samotné rozpouštění. Do nové aplikace byly převedeny tři navazující obrazovky: výběr rozpouštění, přehled výsledků a vlastní spuštění rozpouštění. Důležité je, že zůstaly rozdělené podobně jako v původní aplikaci, místo aby byly sloučené do jedné nové obrazovky.

Tým doplnil presenterovou vrstvu, předávání kontextu mezi formuláři, registraci služeb a napojení do menu. Následně se řešilo také zarovnání rozložení vůči původní aplikaci. To navazuje na předchozí práci na vizuální věrnosti převodu: nové formuláře jsou blíž původnímu Fenixu, ale pořád se průběžně odděluje hotový vzhled od ještě nedokončené obchodní logiky.

### Reporting a tiskové formuláře

Reporting v RZP se posunul ve dvou směrech. První část se týkala technického základu pro generování sestav. Byla dokončena migrace životního cyklu pomocné databáze `NeoFenixpom.mdb` na sdílenou infrastrukturu, vznikl mechanismus pro přípravu dat sestav, zápis do dočasné databáze a volání reportovacího satelitu.

Na to navázala paritní brána pro jednu z prvních sestav. Ta má umožnit porovnávat výstup nové implementace s původním chováním. První běhy proti vývojové databázi zůstávají jako samostatný krok, ale infrastruktura pro takovou kontrolu už je připravená.

Druhá část se týkala samotných obrazovek. Přibyly čisté převody formulářů pro konfiguraci sestavy a nastavení tiskového formátu. Záměrně šlo nejdřív o UI kostry bez plné obchodní logiky. Tým zároveň připravil validační poznámky pro vizuální kontrolu, aby testeři měli jasný podklad, podle čeho porovnávat novou obrazovku s originálem.

### Automatizované testování a QA infrastruktura

Výraznou událostí týdne bylo sjednocení testovací orchestrace pro RZP. Přibyly skripty pro různé režimy spouštění testů, katalog E2E scénářů, vstupy pro paritní ověřování, podklady z obrazovek a generování čitelných HTML reportů.

V praxi to znamená, že testování začíná mít jednotnější proces: některé testy se dají spouštět jako rychlé smoke kontroly, jiné jako plnější regresní sada nebo jako izolované E2E scénáře. To je důležité zejména u legacy migrace, kde se chyba často neprojeví jen v jedné třídě, ale v kombinaci formuláře, databáze, menu, vyhledávání a očekávaného chování uživatele.

Vznikl také samostatný E2E testovací projekt pro RZP. Ten pokrývá například výběr vlastníka, číselníky, vyhledávání, nastavení, ročníky a další uživatelské scénáře. Automatizace tím přestává být jen doplňkem vývoje a začíná být jedním z hlavních nástrojů, jak držet kvalitu převodu pod kontrolou.

### Sdílené dialogy ve vrstvě SPOL

Ve společné vrstvě SPOL pokračovala práce na náhradě historického VB6 `CommonDialog`. První dokončená kapitola se týká nastavení tiskárny a stránky, které se v legacy aplikaci používalo přes akci `Action = 5`.

Na první pohled jde o technický detail, ale význam je širší. Starý `CommonDialog` se ve Fenixu používá napříč moduly a nelze ho jen mechanicky nahradit jedním moderním dialogem. Nový přístup proto zavádí sdílené rozhraní, službu a testovatelnou hranici, kterou budou moci postupně využívat konkrétní moduly.

### Experimentální start UCV

Vedle RZP se začalo pracovat také na přípravě modulu UCV, tedy Výkaznictví. Zatím nejde o plnou implementaci, ale o AS-IS specifikaci, inventuru a plán převodu. Podle `modules.json` má UCV v legacy verzi 212 595 řádků kódu a 44 formulářů. Pro srovnání: pilotní modul RZP má v legacy verzi 55 943 řádků kódu a 25 formulářů. UCV je tedy v počtu řádků kódu zhruba čtyřikrát větší než RZP, i když počet formulářů není tak dramaticky odlišný. Stav migrace UCV je vedený jako experimentální start od 13. května 2026.

Zajímavé je, že UCV se používá i jako experiment s vyšší mírou automatizace. Migraci zde pomáhá řídit `a5c babysitter` orchestrátor, který je určený pro dlouhodobější a složitější procesy s více AI agenty. Tým tak zkouší, kam až lze posunout automatizaci migrační práce, aniž by se ztratila kontrola nad výsledkem.

Zatím nejnáročnější částí celé migrace ale zůstává lidská kontrola výstupů vytvořených AI agenty a jejich následné dolaďování. U převodu legacy aplikace nestačí, aby agent vyrobil funkčně vypadající kód nebo obrazovku. Je potřeba odstraňovat nevyžádanou kreativitu LLM, hlídat věrnost originálu a průběžně korigovat místa, kde se nový výstup od původního Fenixu odchyluje víc, než je pro migraci přijatelné.

Příprava UCV má smysl dělat paralelně, ale samotný převod musí respektovat stav sdílených komponent a zkušenosti získané na RZP. Jinými slovy: RZP dál slouží jako pilotní modul, zatímco UCV se začíná připravovat tak, aby další fáze projektu nezačínala od nuly.

## Význam týdne

Jedenáctý týden ukázal, že projekt se posouvá z fáze jednotlivých převodů do fáze systémové migrace. RZP už není jen soubor obrazovek, ale postupně získává funkční rozpouštěcí předpisy, scénáře rozpouštění, reportingové vazby a automatizované kontroly. Současně vznikají sdílené komponenty, které budou potřeba i v dalších modulech.

Ne všechno je hotové. Některé funkce čekají na další části převodu, některé paritní testy potřebují referenční data z původní aplikace a část formulářů má zatím hlavně vizuální podobu bez kompletní logiky. Přesto jde o důležitý týden: začíná být vidět nejen rychlost převodu, ale i technická disciplína, která bude nutná pro udržení kvality v dalších etapách.
