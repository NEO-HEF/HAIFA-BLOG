---
title: "Týden sedmatřicátý - SAU uzavírá závěrečný report, ROB rozšiřuje volební agendu"
date: 2026-11-22
week: "Týden sedmatřicátý"
period: "16. 11. 2026 - 22. 11. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w47
summary: "SAU má schválený závěrečný report shody s původní aplikací a pojmenované zbývající kontroly QA. ROB rozšířil volební agendu a importy, Matrika propojila detaily knih a ukládání ověřovací doložky. REN zpřístupnil územní rejstříky a připravil základ práce s vlastníky."
---

## Shrnutí pro netechnické čtenáře

V sedmatřicátém týdnu projektu NEO_HEF dospěla **Správa aplikací a uživatelů, SAU, ke schválení závěrečného reportu porovnání s původním programem**. Report shrnuje převedené funkce, známé rozdíly i zbývající ověřování. Je to důležitý podklad pro převzetí modulu; část kontrol kvality a navazujících oprav však dál pokračuje.

**Registr obyvatel, ROB, rozšířil volební agendu o práci s jednotlivými voliči** a pokročil v převodu importů z evidence obyvatel. Matrika propojila seznamy knih s detaily rodných a oddacích listů a doplnila ukládání ověřovací doložky. Jednotlivé převedené části se tak spojují do delších pracovních postupů.

Registr nemovitostí, REN, navázal na první části aplikace z minulého týdne. Přibyly číselníky, výběr katastrálního území a územní rejstříky přístupné z nabídky. Začal také vznikat základ pro práci s vlastníky, na který budou navazovat vlastní evidence nemovitostí.

## Co se stalo

Týden od 16. do 22. listopadu 2026 ukázal různé fáze souběžných migrací. SAU soustředilo výsledky do závěrečného vyhodnocení, ROB a Matrika rozšiřovaly agendové postupy a REN postupoval od základního prostředí k prvním použitelným evidencím.

### SAU má závěrečný report a vymezenou navazující práci

Dne 18. listopadu byl schválen závěrečný report shody SAU s původní aplikací a uzavřen příslušný krok implementačního plánu. Ve stejném týdnu byl převzat také blok licenčního záznamu. Report propojuje výsledky dosavadních kontrol s konkrétními požadavky: například správou uživatelů a práv, hesly, importem a exportem či tiskovými přehledy.

Součástí závěrečného porovnání byly náhledy dvanácti přehledů. Na porovnávaných prvních stranách se obsah shodoval s výjimkou zalomení jednoho řádku; samostatně byly zaznamenány rozdíly v okně prohlížeče. Ověřoval se také souběh původní a nové aplikace. Ve zkoušených scénářích se neprojevila dodatečná ztráta dat oproti souběhu dvou původních aplikací.

**Schválení reportu neznamená, že jsou všechny kontroly zelené.** Zůstávají mezery v pokrytí testy, ověřování celých uživatelských postupů i navazující opravy. Přínosem tohoto milníku je přesně popsaný stav: tým ví, které výsledky už má doložené a co musí ještě prověřit QA, tedy tým zajištění kvality.

### ROB rozšiřuje volby a převod údajů z evidence obyvatel

Po životních událostech z předchozích týdnů výrazně pokročila volební agenda. Ve formuláři voličů přibylo pořízení, oprava, vymazání, aktualizace a návaznosti na detail občana i tisk. Zápisy do volebního seznamu propojují změnu údajů s kontrolou duplicit a přečíslováním pořadí. U vybraných chybových scénářů se ověřovalo, že neúspěšná operace nezanechá částečně uloženou změnu.

Pokračoval převod hromadného ověřování osob v základních registrech, odběru oznámení o změnách a porovnání volebních seznamů. Pro úředníka jsou tyto funkce podstatné zejména tam, kde by kontrola jednotlivých občanů byla příliš zdlouhavá.

Další část práce se týkala importů z informačního systému evidence obyvatel, ISEO. Vznikla logika základního a aktualizačního importu, výpisu změn a porovnání údajů, na kterou navázala příslušná okna a nastavení. Přibývaly také volitelné sestavy, adresní štítky a demografické výstupy. Jednotlivé implementace ještě procházejí převzetím a navazujícím ověřováním; jejich dokončení samo o sobě neuzavírá celý ROB.

### Matrika propojuje knihy s detaily a ukládáním

Detail rodného listu byl zapojen do aplikace tak, aby se otevíral ze seznamu knihy narození i z nabídky pro duplikát. Obdobně pokročilo propojení detailu oddacího listu s knihou manželství. Dříve připravené formuláře a služby tak získávají skutečné vstupy z míst, odkud je uživatel potřebuje otevřít.

Ve Vidimaci a legalizaci bylo doplněno ukládání ověřovací doložky: převod vyplněných údajů, kontrola typu adresy, zápis a obnova seznamu po úspěšném uložení. Na výpočet poplatku a údaje o úhradě z minulého týdne tak navazuje další zásadní část pracovního postupu. Pokračovala také příprava výběru doložek pro tisk a definic tiskových výstupů.

U knihy úmrtí a registrovaného partnerství přibývaly seznamy, detaily a jejich datové návaznosti. Rozsah ověření se mezi částmi liší: například nové propojení detailu rodného listu bylo prověřeno automatickými testy a nad skutečnou testovací databází, zatímco živé ovládání formuláře zůstalo předané QA. Převod funkcí proto doprovází samostatné ověřování jejich chování v celé aplikaci.

### REN zpřístupňuje územní rejstříky

REN rozšířil start aplikace, nastavení a volbu katastrálního území. Na ně navázaly číselníky katastrálních údajů a rejstříky katastrů, obcí a jejich částí. Ty už jsou napojené na nabídku nové aplikace.

U územních rejstříků proběhlo živé porovnání původního a nového programu nad kopií databáze. Kontrolovalo se otevření z menu, obsah, třídění, informační okna i textové tiskové výstupy. Dvanáct porovnaných textových výstupů se shodovalo s výjimkou času tisku. Jde o konkrétní doklad, že první části nové aplikace zachovávají údaje i způsob práce původního REN.

Na konci týdne přibyla datová vrstva vlastníků a společné okno jejich seznamu. To zatím čeká na napojení z navazujících agend, zejména evidence parcel. REN tak připravuje podklady pro hlavní práci s nemovitostmi; samotný převod těchto evidencí pokračuje v dalších krocích.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
