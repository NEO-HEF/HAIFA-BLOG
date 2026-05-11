---
title: "RZP má další zprovozněné funkčnosti"
date: 2026-05-11
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - migrace
  - ui
layout: layouts/post.njk
lang: cs
translationKey: rzp-dalsi-zprovoznene-funkcnosti
summary: "RZP se dál posouvá od převedených obrazovek k funkčním scénářům: číselníkům závislým na majiteli, definici rozpouštěcí věty a napojení na GDPR funkce."
---
## Shrnutí pro netechnické čtenáře

RZP už není jen sadou převedených formulářů. V nové verzi přibývají další konkrétní pracovní scénáře, ve kterých aplikace reaguje na data, otevírá související dialogy a volá navazující funkce.

Neznamená to, že je hotovo. Některé části ještě potřebují doladit vzhled, chování i detaily ovládání. Důležitý posun je ale v tom, že tým už neřeší jen to, jak obrazovky vypadají, ale také to, jestli v nich začíná fungovat skutečná aplikační logika.

Tři nové ukázky se týkají číselníků, definice rozpouštěcí věty a napojení na GDPR funkce. Každá z nich reprezentuje trochu jiný typ problému, který je při převodu starého ERP systému potřeba zvládnout.

## Číselníky podle vybraného majitele

První ukázka zachycuje práci s číselníky v RZP. Důležité není jen to, že se zobrazí seznam číselníků a jejich obsah. Podstatné je, že se menu i data dynamicky mění podle toho, který majitel je právě vybraný.

To je typická vlastnost podnikových systémů: stejná obrazovka často neznamená stejný obsah pro všechny situace. Aplikace musí respektovat kontext, ve kterém uživatel pracuje, a nabídnout mu správnou sadu položek i odpovídající data.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP_ciselniky.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Číselníky v RZP: seznam dostupných číselníků i jejich obsah se mění podle vybraného majitele.</figcaption>
</figure>

## Definice rozpouštěcí věty

Druhá ukázka patří k rozsáhlejším funkčnostem v první verzi. Definice rozpouštěcí věty není jen jednoduchý formulář s několika poli. Součástí práce je i vyhledávací dialog a vazby mezi více částmi uživatelského rozhraní.

Právě takové scénáře dobře ukazují, kde je migrace nejnáročnější. Nestačí mechanicky překreslit původní okno z VB6 do .NET WinForms. Nová aplikace se musí chovat podobně jako originál, zachovat pracovní postup a zároveň přenést logiku, která je za obrazovkou schovaná.

Aktuální výsledek ještě není dokonalý, ale je výrazně blíž původní aplikaci než první pokusy o převod uživatelského rozhraní. Pro tým je to důležitý signál, že zvolený postup se začíná zlepšovat i u složitějších formulářů.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP_definice_vety.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Definice rozpouštěcí věty v RZP včetně vyhledávacího dialogu a navazující práce s formulářem.</figcaption>
</figure>

## Napojení na GDPR funkce

Třetí ukázka se týká napojení na externí funkce související s GDPR. Z pohledu uživatele může jít o krátký scénář, technicky je ale důležité, že nová verze RZP nezačíná žít izolovaně od okolního systému.

Migrace ERP aplikace není jen převod obrazovek a databázových dotazů. Modul musí umět používat společné nebo externí funkce, které jsou součástí širšího prostředí. GDPR je dobrý příklad: jde o oblast, kde nestačí zobrazit vlastní formulář, ale je potřeba správně navázat na další logiku systému.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP_GDPR.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>RZP volá externí funkce související s GDPR a ukazuje funkční propojení s okolním aplikačním prostředím.</figcaption>
</figure>

## Proč je to důležité

Tyto ukázky společně ukazují, že projekt se posouvá do fáze, ve které je potřeba ověřovat celé pracovní situace. Uživatel nehodnotí jen to, jestli je na obrazovce podobný formulář. Potřebuje, aby se správně měnil obsah podle kontextu, aby šly najít a vybrat související údaje a aby aplikace dokázala zavolat funkce mimo vlastní formulář.

Právě na takových detailech se ukáže, jestli se nová verze RZP bude chovat jako skutečná náhrada původní aplikace. Nově zprovozněné scénáře zatím nejsou cílový stav, ale jsou to konkrétní kroky od statického převodu směrem k použitelnému modulu.

[Domů]({{ '/' | url }})
