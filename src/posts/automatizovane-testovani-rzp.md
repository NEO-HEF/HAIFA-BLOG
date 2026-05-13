---
title: "Velký úspěch: funguje automatizované testování"
date: 2026-05-13
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - qa
  - testovani
layout: layouts/post.njk
lang: cs
translationKey: automatizovane-testovani-rzp
summary: "RZP má funkční automatizované testování: automat otevírá formuláře, vyplňuje testovací data, ověřuje výsledky a generuje přehledný report."
---
## Shrnutí pro netechnické čtenáře

HAIFA tým má za sebou velký úspěch: v RZP funguje automatizované testování. Automat dokáže spouštět scénáře, otevírat formuláře, vyplňovat do nich testovací data a následně ověřovat, jestli aplikace reaguje správně.

To je pro migraci ERP systému zásadní posun. Čím víc funkčností v nové verzi RZP přibývá, tím důležitější je umět rychle ověřit, že se něco nerozbilo. Ruční testování zůstává důležité, ale u rozsáhlého systému samo o sobě nestačí. Automatické testy dávají týmu možnost opakovaně kontrolovat stejné scénáře a rychleji zachytit chyby.

Zvláštní uznání patří oběma členkám QA týmu HAIFA, Michaele Žočkové a Ivě Holečkové. Právě jejich práce ukazuje, že kvalita v projektu nestojí jen na závěrečné kontrole, ale stává se součástí samotného vývoje.

## Co automat umí

Automatizované testování v RZP už neověřuje jen izolované technické části. V ukázce je vidět práce na úrovni uživatelského rozhraní: automat otevírá formuláře, prochází aplikační scénáře, vyplňuje testovací hodnoty a kontroluje výsledky.

To je u migrované aplikace velmi důležité. Nestačí vědět, že existuje třída nebo metoda, která projde jednotkovým testem. Uživatel pracuje s formuláři, dialogy, tlačítky a daty. Automatické testování proto musí postupně pokrývat i to, co se děje přímo v aplikaci.

Součástí řešení je také report z testovacího běhu. Ten přehledně ukazuje katalog scénářů, stav jejich implementace a výsledky konkrétních testů. Tým tak má nejen samotné testy, ale i srozumitelný výstup, podle kterého se dá sledovat stav kvality.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP-testing.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Automatizovaný testovací běh v RZP: otevírání formulářů, vyplňování testovacích dat a ověřování výsledků.</figcaption>
</figure>

<figure class="post-media">
  <a href="{{ '/assets/html/rzp-testing.html' | url }}" target="_blank" rel="noopener">
    <img class="post-video" src="{{ '/assets/images/rzp-testing-report-preview.png' | url }}" alt="Náhled reportu automatizovaného testování RZP">
  </a>
  <figcaption>Report vygenerovaný automatizovaným testováním RZP. Kliknutím na náhled se otevře celý HTML report v nové kartě.</figcaption>
</figure>

## Proč je to důležité

Automatizované testování otevírá možnost stavět migraci na mnohem pevnějším základě. Každá nová funkčnost v RZP bude znamenat další riziko regresí: něco začne fungovat, ale při další změně se může pokazit část, která už jednou fungovala.

Automatické testy toto riziko snižují. Umožňují pravidelně opakovat stejné kontroly, porovnávat výsledky a postupně rozšiřovat pokrytí o další scénáře. U projektu, který převádí starý ERP systém do nového technologického prostředí, je to jeden z klíčových předpokladů pro dlouhodobě udržitelný postup.

## Přesah mimo HAIFA tým

Úspěch je důležitý i za hranicemi samotného NEO_HEF. Know-how, které teď vzniká v QA týmu HAIFA, může být použitelné i v dalších projektech. Přirozeným kandidátem je například Krypton tým, který vyvíjí, udržuje a provozuje legacy Fenix.

Pokud se podaří postupy z RZP zobecnit a přenést dál, nepůjde jen o jeden vydařený testovací scénář. Může vzniknout praktický způsob, jak automatizovaně ověřovat části systému, které byly dlouho závislé hlavně na manuálním testování a znalostech konkrétních lidí.

[Domů]({{ '/' | url }})
