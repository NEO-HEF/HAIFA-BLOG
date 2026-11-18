---
title: "Týden šestatřicátý - REN vstupuje do implementace, ROB rozšiřuje životní události"
date: 2026-11-15
week: "Týden šestatřicátý"
period: "09. 11. 2026 - 15. 11. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w46
summary: "Registr nemovitostí přešel od rozboru k prvním částem nové aplikace a ověřil propojení s testovací službou ČÚZK. ROB rozšířil životní události a práci se základními registry. Matrika převádí knihy a ověřovací doložky, SAU převzalo nastavení aktualizací a další správní nástroje."
---

## Shrnutí pro netechnické čtenáře

V šestatřicátém týdnu projektu NEO_HEF začala vznikat nová aplikace **Registru nemovitostí, REN**. Na rozbor původního programu navázal implementační plán a první části startu a hlavní nabídky. Tým také ověřil cestu, kterou může nová aplikace využívat stávající knihovnu pro komunikaci s Českým úřadem zeměměřickým a katastrálním. Ve zkušebním prostředí se podařilo načíst údaje vlastníka a zapsat je do testovací databáze.

**Registr obyvatel, ROB, doplnil další změny v životě občana:** sňatek a partnerství, rozvod a ukončení partnerství i odstěhování s návazností na rodinu. Pokračoval rovněž převod karty občana a funkcí pro spolupráci se základními registry.

Matrika rozšířila základ pro práci s matričními knihami a rozpracovala ověřovací doložky, včetně výpočtu správního poplatku a údajů o úhradě. Správa aplikací a uživatelů, SAU, převzala blok nastavení automatických aktualizací a záloh a další nástroje pro správce. U všech těchto agend pokračuje dokončování a ověřování celých uživatelských postupů.

## Co se stalo

Týden od 9. do 15. listopadu 2026 posunul čtyři souběžné migrace. REN překročil hranici mezi analýzou a implementací, ROB rozšiřoval konkrétní agendové úkony, Matrika propojovala společný základ s jednotlivými knihami a SAU uzavíralo další správní bloky.

### REN začíná převádět plán do aplikace

Po schváleném rozboru z minulého týdne byl do projektu začleněn implementační plán Registru nemovitostí. Následovaly první části startu aplikace, strom hlavního menu a pravidla dostupnosti jeho položek podle role uživatele, struktury databáze a přítomných dat. Část těchto pravidel už je zapojena do aplikace, další čekají na navazující kroky startu.

Významným výsledkem bylo ověření spolupráce s knihovnou pro webové služby dálkového přístupu ČÚZK. Nová aplikace ji spouští prostřednictvím samostatného pomocného procesu, který zachovává prostředí potřebné pro původní komponentu. Na testovací databázi a zkušební službě bylo doloženo úspěšné načtení údajů vlastníka i odpovídající zápis výsledku. Ověřovaly se také chybové odpovědi.

Tento výsledek potvrzuje použitelnou cestu k jedné z důležitých vnějších vazeb REN. Převod vlastních evidencí parcel, budov a dalších agend tím ale teprve získává potřebný základ. Pokračovalo také živé ověřování původního programu, jeho mřížek, tiskových sestav a vstupních dat pro import, aby se další implementace opírala o doložené chování.

### ROB rozšiřuje práci s občanem a jeho rodinou

Na přistěhování, přestěhování a úmrtí z předchozího týdne navázaly další životní události. U sňatku a partnerství se ověřovaly nejen formuláře a vstupní kontroly, ale také výsledné zápisy u obou osob. Vybrané scénáře byly porovnány s původní aplikací na kopii databáze, včetně rozdílného zacházení s partnerstvím podle data jeho vzniku.

Přibylo odstěhování občana s novou adresou i bez ní a navazující postup pro manžela, partnera a děti. Součástí převodu jsou historie změn, záznamy o provedené operaci a návaznost na odběr oznámení ze základních registrů. Pro uživatele jde o jeden úkon, v databázi však musí zůstat v souladu několik souvisejících evidencí.

Pokračovala také implementace karty občana, ověřování adresy v základních registrech a převzetí údajů z agendového informačního systému evidence obyvatel, AISEO. Zde mají výsledky ověřování konkrétní hranici: živé převzetí z AISEO nebylo možné kvůli chybějícímu certifikátu v testovacím prostředí. Část chování proto dokládají automatické testy a připravené odpovědi služby; úplné živé ověření tím není nahrazeno.

### Matrika převádí knihy a rozpracovává ověřovací doložku

V Matrice vznikl společný základ seznamu knihy a detailu matričního listu. Na něj navázaly datové části a kontroly pro rodné, oddací a úmrtní listy i evidenci registrovaného partnerství. Společné řešení umožňuje převádět opakující se chování jednou a současně zachovat odlišnosti jednotlivých knih.

Ve Vidimaci a legalizaci přibyl seznam knihy s filtrováním a navazujícími akcemi nad záznamem. Detail ověřovací doložky pokročil od kostry formuláře k načítání údajů, režimu historie, výpočtu správního poplatku, údajům o úhradě a doplňování čísla a variabilního symbolu. Jde o části pracovního postupu, na které navazuje dokončení ukládání a závěrečné porovnání s původním programem.

Připravené jsou také prvky zobrazující stav ověření osoby a adresy v základních registrech. Vlastní volání registrů z tohoto detailu však ještě čeká na napojení dalších částí. Souběžně pokračovala příprava a ověřování automatizovaných uživatelských scénářů podle původní aplikace.

### SAU uzavírá další nástroje pro správce

V SAU byl převzat blok nastavení automatických aktualizací a záloh. Zahrnuje práci s konfigurací, souvisejícími přihlašovacími údaji, záznamy o aktualizacích a nastavením zálohy uživatele. Převzetí navázalo na porovnání vybraných stavů původní a nové aplikace.

Další dokončené části se týkají správy souborového úložiště, exportu a importu uložených souborů a návazností na externí správní nástroje. Současně vznikla kontrola, která propojuje požadavky a evidované odchylky s jejich testy. Jejím účelem je ukázat i chybějící pokrytí, aby závěrečné rozhodnutí o modulu vycházelo z konkrétních důkazů.

Převzetí těchto bloků ještě neuzavírá celou migraci SAU. Zůstávají navazující kontroly a otevřené části, včetně další práce na licenčním záznamu. Tým HAIFA tak postupně rozšiřuje rozsah převedených funkcí a současně zpřesňuje, co je připravené k převzetí a co ještě vyžaduje ověření.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
