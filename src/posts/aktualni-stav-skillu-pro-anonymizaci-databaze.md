---
title: "Aktuální stav skillu pro anonymizaci databáze"
date: 2026-08-10
tags:
  - post
  - haifa
  - neo-hef
  - gdpr
  - anonymizace
  - ai-agenti
layout: layouts/post.njk
lang: cs
translationKey: aktualni-stav-skillu-pro-anonymizaci-databaze
summary: "HAIFA má dnes dva oddělené skilly pro práci s anonymizovanými databázemi: jeden databázi maskuje, druhý ji nezávisle audituje. Aktuální anonymizovaná databáze Fenixu prošla přísným auditem bez kritických a vysoce závažných nálezů."
---
## Shrnutí pro netechnické čtenáře

Pro migraci Fenixu potřebujeme testovací databáze, které se chovají jako skutečný systém. Musí obsahovat dost různorodá data, aby se na nich daly hledat chyby v reportech, převodech, kontrolách a formulářích. Zároveň ale nesmí zbytečně nést osobní údaje skutečných lidí.

Proto v HAIFA vznikla dvojice specializovaných AI skillů. První skill databázi anonymizuje. Druhý skill výsledek nezávisle audituje a hledá zbytkové osobní údaje jinou metodou, než podle které se maskovalo. To je důležité: nestačí, aby si anonymizační proces sám potvrdil, že udělal to, co měl v seznamu pravidel. Potřebujeme i nezávislou kontrolu, která hledá věci mimo tento seznam.

Po několika iteracích je anonymizační skill pro databázi Fenixu ve stavu, kdy jeho výstup prošel přísným auditním skillem jako přijatelný. Audit prošel 1301 tabulek a 16 528 sloupců. Nenašel žádný kritický ani vysoce závažný nález.

To neznamená, že je anonymizační skill univerzální tlačítko pro libovolnou databázi. Anonymizační skill je dnes vyladěný pro databázi Fenixu. Na jiné databázi by bylo potřeba ho upravit a několik kol ladit. Auditní skill je naopak přenositelný bez úprav: může se pustit nad jinou databází a pomoci najít, co anonymizační pravidla ještě nepokryla.

## Dva skilly, dvě různé role

Anonymizace a audit jsou dvě odlišné činnosti.

Anonymizační skill zná databázi Fenixu a pravidla pro její maskování. Ví, kde se objevují jména, rodná čísla, adresy, účty, data narození, technické přílohy a další citlivé údaje. Jeho cílem je vytvořit kopii databáze, která si zachová tvar a použitelnost pro vývoj a testování, ale neobsahuje původní osobní údaje.

Auditní skill má jinou úlohu. Neopakuje stejný seznam pravidel. Dívá se na výsledek jako nezávislá kontrola: prochází tabulky a sloupce, hledá podezřelé hodnoty a ověřuje k-anonymitu. Ta říká, že konkrétní člověk nemá být v databázi rozpoznatelný ani podle kombinace nepřímých znaků, například roku narození, pohlaví a obce. Každý záznam by měl splynout s dostatečně velkou skupinou podobných záznamů. Auditní skill proto kontroluje i sloupce, které by podle názvu nemusely vypadat rizikově, a zkouší najít zbytky osobních údajů vlastní metodou.

Právě toto oddělení je podstatné. Kdyby anonymizaci i audit řídil stejný seznam názvů sloupců, snadno by obě části minuly stejnou chybu. Citlivý údaj se ale může schovat i ve sloupci s nevinným názvem, v historii změn, v chybové tabulce, v přípravné tabulce nebo v binární příloze. Audit musí hledat i tam, kde anonymizační pravidla původně nic nečekala.

## Co ukázal aktuální audit

Aktuální audit prošel anonymizovanou databázi Fenixu proti 1301 tabulkám a 16 528 sloupcům. Kontrola nehledala jen podle slovníku názvů. Použila nezávislý průchod odlišnými hodnotami, k-anonymitu a kontrolu sloupců, které nejsou pro jednoduchý slovník názvů viditelné.

Výsledek je zásadně lepší než v červenci 2026. Tehdejší audit databáze označené jako anonymizovaná našel 91 nálezů, z toho 21 kritických. Aktuální databáze kontrolou prošla. Audit nenašel žádný zbytkový přímý identifikátor: jména, rodná čísla, adresy, čísla občanských průkazů, ID datových schránek, AIFO (agendový identifikátor fyzické osoby používaný ve veřejné správě), bankovní spojení ani IBAN. Tyto hodnoty jsou zamaskované napříč moduly.

Audit potvrdil i pokrytí míst, která se v anonymizacích často vynechávají. Patří sem historické tabulky, například `robobcanhis` se 77 051 řádky, chybové tabulky `mat_*_chyba`, přípravné tabulky `mat_*_priprava_*`, rozložené datum narození ve mzdových údajích přes `nar_den`, `nar_mes` a `nar_rok` i binární přílohy smluv. U příloh audit eviduje 5220 souborů vynulovaných na 0 bajtů.

Datum narození je v aktuálním výsledku generalizované na rok ve všech 47 sloupcích, kde se vyskytuje. Audit nenašel jediné přesné datum narození. Zvláštní kategorie údajů podle článku 9 GDPR, například diagnózy, příčiny smrti, omezení svéprávnosti nebo registrované partnerství, jsou zamaskované bez výjimky.

## Co zůstalo jako nález

Audit ponechal osm nálezů nízké až střední závažnosti. Důležité je, že žádný z nich není únikem osobních údajů z této anonymizované kopie.

Část nálezů se netýká anonymizace samotné, ale návrhu zdrojového systému. Typicky jde o způsob ukládání hesel nebo chybějící retenční politiku. To jsou legitimní bezpečnostní a procesní otázky, ale neznamenají, že by tato anonymizovaná kopie obsahovala původní osobní údaje.

Další drobné zbytky se týkají věcí, které maskování minulo, například jmen psů v evidenci nebo cest k souborům. Jsou to nálezy, které stojí za evidenci a případné doladění, ale nemění hlavní závěr auditu: databáze prošla.

Doporučení proto nezní "přeanonymizovat databázi". Hlavní doporučení míří mimo vlastní data: řešit způsob ukládání hesel v produkčním systému a doplnit dokumentaci technických a organizačních opatření v registru zpracování podle článku 30 GDPR (ten se týká povinných záznamů o činnostech zpracování osobních údajů).

## Proč je auditní skill přenositelnější

Anonymizační skill pro Fenix je cílený. Zná konkrétní databázový model, historické tabulky, modulové zvláštnosti a místa, která už v minulých auditech selhala. Právě proto může být pro Fenix účinný.

U jiné databáze by ale nebylo správné očekávat, že se stejný anonymizační skill prostě spustí a výsledek bude hotový. Jiná databáze má jiné pojmenování, jiné historické tabulky, jiné ukládání příloh, jiné číselníky a jiné slepé cesty. Anonymizační skill by se musel v několika iteracích přizpůsobit konkrétní doméně.

Auditní skill je v tomto směru obecnější. Je navržený tak, aby dokázal projít databázi a hledat zbytkové osobní údaje i bez toho, že by dopředu znal všechny její interní zvláštnosti. Proto se dá přenést na jinou databázi bez úprav a použít jako zpětná vazba pro ladění anonymizačního skillu.

Praktický postup je tedy iterativní: anonymizační skill vytvoří kopii, auditní skill najde slabá místa, anonymizační pravidla se upraví a audit se pustí znovu. Až přísný audit přestane nacházet kritické a vysoce závažné zbytky osobních údajů, má tým důvod věřit, že výsledek je pro testovací práci použitelný.

## Co to znamená pro NEO_HEF

Pro NEO_HEF je kvalitní anonymizace praktická podmínka práce. Migrační tým potřebuje testovat nad daty, která jsou dost podobná skutečnému provozu. Bez toho se některé chyby v reportech, filtrech, upgradech nebo historických datech vůbec neukážou.

Současný stav je proto důležitý posun. HAIFA už nemá jen skript, který maskuje známé sloupce. Má proces se dvěma oddělenými rolemi: anonymizaci a nezávislý audit. U Fenix databáze se po několika kolech podařilo dostat výsledek do stavu, který přísná kontrola vyhodnotila jako dostatečně anonymizovaný.

To je přesně typ důkazu, který projekt potřebuje. Ne pro efektní tvrzení, že je problém jednou provždy vyřešený, ale pro opakovatelnou práci: vytvořit testovací databázi, nezávisle ji zkontrolovat, opravit slabá místa a teprve potom ji použít jako bezpečný základ pro další migraci.
