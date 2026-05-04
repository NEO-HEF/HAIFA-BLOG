---
title: "Převod uživatelského rozhraní - první velké selhání AI"
date: 2026-05-04
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - ui
  - ai
layout: layouts/post.njk
lang: cs
translationKey: prevod-uzivatelskeho-rozhrani-prvni-velke-selhani-ai
summary: "Při převodu formulářů a nabídek RZP narazil tým na první výrazné selhání AI agenta: výstupy se nedržely původního VB6 rozhraní a nebyly prakticky použitelné."
---
## Shrnutí pro netechnické čtenáře

Projekt NEO_HEF se posunul k další viditelné části migrace: převodu formulářů a nabídek modulu `RZP` z původního VB6 světa do nového `.NET WinForms` řešení. Právě tady ale tým narazil na první opravdu výrazné selhání AI agenta.

První výstupy byly zcela neuspokojivé. Nešlo jen o to, že nové WinForms mají jiné vlastnosti než historické VB6 rozhraní a výsledná obrazovka by proto mohla vypadat méně elegantně. Hlavní problém byl hlubší: agent se nedokázal držet originálu. Vymýšlel si vlastní úpravy, slučoval formuláře, nahrazoval ovládací prvky jinými a vytvořené obrazovky většinou ani reálně nic nedělaly.

Je to důležité zjištění. V předchozích fázích, kdy se dělaly analýzy původního systému, implementační plány a nevizuální části kódu, byly výstupy AI agenta dobře srovnatelné s lidskou prací. Převod uživatelského rozhraní ale ukázal jiný typ problému.

## Co se stalo

Cílem převodu není navrhnout nové RZP podle současných designových trendů. Cílem je převést existující formuláře a nabídky tak, aby nová aplikace odpovídala původnímu chování a uživatelé se v ní dokázali orientovat podle známých pracovních postupů.

První pokusy AI agenta tento požadavek nesplnily. Místo věrného převodu vznikaly obrazovky, které se originálu ani zdaleka neblížily. Agent doplňoval domnělá vylepšení, měnil strukturu formulářů, slučoval samostatné obrazovky do jedné a nahrazoval původní ovládací prvky jinými. Výsledkem nebyla migrovaná aplikace, ale spíš volná interpretace toho, jak by podle agenta mohla vypadat.

Ještě závažnější bylo, že takto vytvořené rozhraní většinou nemělo funkční chování. Nestačí totiž nakreslit podobné okno. Formulář musí mít správné ovládací prvky, vazby, události, menu a chování, které odpovídá původní aplikaci. Právě v tom první výstupy selhaly.

## Proč je to jiný problém než dosud

Dosavadní práce s AI agentem byla převážně analytická nebo technicky implementační. Agent dobře pomáhal při čtení původního systému, při přípravě implementačních plánů a při tvorbě nevizuálního kódu. Tam se dalo postupovat poměrně přesně: popsat pravidla, rozhraní, datové toky a očekávané výsledky.

Uživatelské rozhraní je ale citlivější na detaily. Poloha prvků, jejich typ, názvy, návaznosti, pořadí akcí i struktura menu nejsou kosmetika. V ERP systému jsou to součásti pracovního postupu. Když agent nahradí prvek jiným nebo sloučí dvě obrazovky, nemusí tím jen změnit vzhled. Může tím změnit způsob práce uživatele.

Tento rozdíl je pro projekt důležitý. Ukazuje, že převod UI nelze brát jako běžné generování nových formulářů podle stručného zadání. Je potřeba mnohem přísnější kontrola věrnosti originálu a pravděpodobně i jiný pracovní postup než u nevizuálních částí systému.

## Co tým zkouší dál

HAIFA tým teď pracuje na tom, jak tuto technologickou překážku překonat. Ve hře jsou lepší prompty, přesnější zadávání, menší a lépe kontrolované kroky převodu i alternativní postupy, které by agentovi méně dovolily odchýlit se od původního VB6 rozhraní.

Tým zároveň požádal o konzultaci Jakuba Karabinoše, našeho AI guru. Cílem je zjistit, jestli se dá najít účinnější způsob, jak agenta při převodu vizuální vrstvy ukotvit v originálu a přimět ho k věrnější a funkčnější migraci.

Nezbývá než držet HAIFA týmu palce. Převod uživatelského rozhraní je pro migraci zásadní krok a současné selhání je potřeba brát vážně. O dalším vývoji budeme informovat zde na blogu.

[Domů]({{ '/' | url }})
