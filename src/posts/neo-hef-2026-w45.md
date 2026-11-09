---
title: "Týden pětatřicátý - ROB převádí životní události, SAU správní nástroje a REN má rozbor"
date: 2026-11-08
week: "Týden pětatřicátý"
period: "02. 11. 2026 - 08. 11. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w45
summary: "ROB navázal na datový základ seznamem občanů a převodem přistěhování, přestěhování a úmrtí. Matrika rozšířila číselníky a připravila základ detailu ověřovací doložky. SAU převzalo další správní bloky včetně importu, exportu a reindexace. Schválený rozbor Registru nemovitostí připravuje další migraci."
---

## Shrnutí pro netechnické čtenáře

V pětatřicátém týdnu projektu NEO_HEF se převod Registru obyvatel, ROB, posunul k úkonům, které úředníci provádějí při změnách v životě občana. **Přibyly části pro přistěhování, přestěhování a záznam úmrtí, včetně souvisejících změn u rodiny.** Navazují na ukládání údajů a historie z minulého týdne a na nově převedený seznam občanů.

Matrika pokračovala v převodu agendových formulářů a společných prvků pro práci s osobami a matričními záznamy. Správa aplikací a uživatelů, SAU, převzala další funkční bloky: mimo jiné přenos dat do textových souborů a zpět, údržbu databázových indexů a nastavení spolupráce s externí správou uživatelů.

**Do přípravy další migrace přibyl Registr nemovitostí, REN.** Tým HAIFA dokončil a schválil rozbor původní aplikace, která pracuje s parcelami, budovami, vlastníky a dalšími údaji katastru. Rozbor poskytuje podklad pro plánování jejího převodu.

## Co se stalo

Týden od 2. do 8. listopadu 2026 propojil tři probíhající migrace s přípravou další rozsáhlé agendy. U ROB a Matriky přibývají konkrétní uživatelské postupy, SAU uzavírá další správní bloky a u REN vznikla mapa chování původního programu.

### ROB propojuje seznam občanů se životními událostmi

Na datový základ ROB navázalo čtení a zobrazení seznamu občanů, jeho třídění, volba sloupců a nabídka navazujících úkonů. Seznam počítá s různými režimy evidence a s oprávněními uživatele. Současně pokračoval převod podmínek pro výběr záznamů, které umožňují z rozsáhlé evidence vybrat potřebnou skupinu lidí.

Na konci týdne přibyly dialogy a logika přistěhování, přestěhování a úmrtí. Přestěhování zahrnuje i navazující postup pro partnera a děti. Zápis úmrtí řeší také změnu rodinného stavu partnera. Jediná uživatelská akce tak musí správně promítnout změnu do více souvisejících údajů.

U vybraných scénářů byly výsledky zápisů porovnány s původní aplikací na kopii databáze, včetně historie a záznamů o provedené operaci. Implementace těchto úkonů představuje výrazný postup, jejich stav však ještě není převzetím celého ROB: jednotlivé části čekají na závěrečné schválení a pokračuje napojování dalších funkcí, například spolupráce se základními registry.

### Matrika rozšiřuje agendový základ

V Matrice přibyla správa a výběr knih a svazků. Jde o údaje, které určují, kam matriční záznam patří, a na které budou navazovat vlastní evidenční formuláře. Pokročil také převod nastavení a opakovaně používaných textů.

Vznikly společné ovládací prvky pro osobu a matriční záznam. Ty se využívají na více místech aplikace, takže jejich převod připravuje základ pro další formuláře bez opakování stejné práce.

Ve Vidimaci a legalizaci vznikla kostra detailu ověřovací doložky s devíti záložkami a navázala na ni práce na ovládání klávesnicí. Jde zatím o připravené rozhraní; ukládání doložky a dokončení celého pracovního postupu patří do dalších úloh. Souběžně vznikaly testovací scénáře podle původní aplikace, například pro evidenci tiskopisů a nastavení agendy.

### SAU přebírá další nástroje pro správce

SAU v tomto týdnu uzavřelo několik funkčních bloků. Patří mezi ně zákaz přístupu do systému, nastavení připojení k základním registrům, spolupráce s externí správou identit a doménovými skupinami i přiřazování organizací prostřednictvím jejich skupin.

Významný posun přinesl export a import dat v textovém formátu. Vybrané výstupy nové aplikace byly porovnány s původním programem a ověřen byl i cyklus exportu, importu a opětovného exportu. Při nahrazování obsahu tabulky se navíc ověřovalo, že chyba importu zachová její původní data. Pro správce je právě předvídatelný výsledek při chybě stejně podstatný jako úspěšný přenos.

Dokončen byl také blok reindexace, tedy obnovy databázových struktur používaných pro vyhledávání dat, a blok aktivní plochy se zvláštním exportem výsledků SQL dotazu do Excelu pro správce. Převzetí těchto částí má zaznamenané návazné úkoly ve společné vrstvě a v závěrečných kontrolách SAU. Celková migrace modulu proto dál pokračuje.

### REN má podklad pro plánování migrace

Dne 6. listopadu byl schválen rozbor Registru nemovitostí. Pokrývá práci s parcelami, budovami, jednotkami, vlastnictvím, importy katastrálních dat i tiskovými výstupy. Součástí je také rozlišení funkcí, které jsou v původním programu skutečně dostupné, od historického kódu, k němuž se uživatel nedostane.

Rozbor prošel nezávislými kontrolami a opravami zjištěných nesrovnalostí. Pro plánování je to důležité: rozsah převodu musí vycházet z reálného chování aplikace a jejích vazeb na ostatní části Fenixu. Schválená analýza tak připravuje další agendu k rozdělení do konkrétních migračních kroků.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
