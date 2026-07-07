---
title: "Týden sedmnáctý - RZP má release větev a develop míří na 10.11"
date: 2026-07-05
week: "Týden sedmnáctý"
period: "29. 06. 2026 - 05. 07. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w27
summary: "Sedmnáctý týden oddělil předanou linii RZP 10.1 od dalšího vývoje: release větev drží stabilizovaný modul, zatímco develop se překlápí na 10.11, SPOL/SPK, UCV a UPD."
---

## Shrnutí pro netechnické čtenáře

Sedmnáctý týden projektu HAIFA byl první týden po oficiálním předání RZP. Dne 30. 6. 2026 byl odevzdán první hotový modul, zmigrovaný z legacy verze 10.1. V repozitáři je tomu nově přizpůsobená i struktura větví: pro RZP 10.1 vznikla release větev, která drží stabilizovaný předávací stav a slouží pro případné hotfixy.

To je důležité hlavně proto, že další práce už neběží ve stejném režimu jako finiš RZP. RZP se nebude znovu otevírat jako běžný vývojový modul. Pro verzi 10.11 nemá vlastní funkční rozdíl v modulem vlastněném kódu, takže nepůjde o druhou migraci RZP. Půjde hlavně o revalidaci proti nové společné infrastruktuře, nové databázové baseline a novým funkcím SPOL a SPK.

Hlavní pozornost se proto přesunula na společné knihovny a bezpečnostní základ 10.11. Právě tam se mění přihlášení, práce s hesly, vazba na vault a pravidla spouštění. Tyto změny nejsou vidět jako nová obrazovka v RZP, ale bez nich by další moduly nemohly dlouhodobě držet krok s verzí 10.11 a s každou další verzí Fenixu, které budou pravidelně přicházet.

Vedle toho se začaly připravovat další moduly. UCV má na rozdíl od RZP skutečnou 10.11 změnu v modulem vlastněném kódu, zejména kvůli úpravám výkaznictví pro účetní rok 2026. UPD pak není jen technická utilita v pozadí: má vlastní obrazovky, provozní režimy a operátorské workflow pro upgrade databáze.

Jinými slovy: po předání RZP se projekt neposunul k "dalším úpravám RZP", ale k nové fázi. Jedna linie drží odevzdaný modul 10.1, druhá připravuje společný základ 10.11 a další moduly, které na něm budou stavět.

## Co se stalo

V týdnu od 29. června do 5. července 2026 je po aktualizaci vzdálených větví v repozitáři `NEO_HEF` vidět 21 merge commitů na větvi `develop`. Nová větev `release/10.01` obsahuje v tomto období 10 merge commitů a končí stejným bodem, ze kterého se pak `develop` vydal dál směrem k 10.11.

### RZP 10.1 dostalo vlastní release větev

Na začátku týdne dobíhaly poslední opravy RZP pro předávací stav 10.1. Týkaly se hlavně viditelných paritních detailů: formátování reportů, příliš dlouhých procent, chování vyhledávání definic, prázdných výsledků, ukládání a načítání nastavení reportů, focus order přes Tab a několika hotfixů kolem předpisů a vlastníka v neaktuálním roce.

Tyto změny tvoří konec stabilizační linky RZP 10.1. Vzniklá release větev `release/10.01` proto není další vývojová větev pro nové vlastnosti. Je to údržbová linie předaného modulu. Patří do ní hotfixy a udržení předávacího stavu, ne rozšiřování rozsahu RZP.

### Develop se po předání přepnul na 10.11

Po odstřižení RZP 10.1 se na `develop` objevily změny, které už míří do další baseline. Do dokumentace přibyla metodika verzování: `develop` sleduje nejnovější migrovaný základ a release větve drží vydané linie, ze kterých se dělají opravné releasy.

Současně se repozitář překlápí na legacy vzor 10.11. Aktualizoval se databázový přehled na baseline 10.11 a začaly vznikat delta balíčky pro RZP, UCV, UPD a společné části SPOL/SPK. To je přesně ten typ práce, který po prvním předaném modulu odděluje jednorázový úspěch od dlouhodobě použitelného migračního procesu.

### RZP 10.11 znamená revalidaci, ne novou migraci

U RZP je důležitý výsledek delta analýzy: mezi legacy verzemi 10.1 a 10.11 nebyla nalezena vlastní změna v modulem vlastněném zdrojovém kódu. Modulový kód RZP zůstává z pohledu funkčnosti stejný; mění se hlavně odkazy na společné knihovny, verze prostředí a infrastruktura, proti které modul běží.

Práce pro RZP 10.11 proto není další rozšiřování modulu. Bude to řízená revalidace: ověřit spuštění pod Launcherem i samostatně, přihlášení proti nové databázi, chování při dostupném i nedostupném vaultu, guard proti špatné databázové verzi a smoke testy proti povýšeným knihovnám SPOL/SPK.

Pro čtenáře je praktický závěr jednoduchý: RZP 10.1 je předaný modul. RZP 10.11 bude menší adaptační a ověřovací krok, aby stejná funkčnost běžela proti novému společnému základu.

### SPOL a SPK nesou hlavní změnu 10.11

Největší technický posun týdne je ve společných knihovnách. Verze 10.11 mění bezpečnostní a přihlašovací základ: hesla se přesouvají z původního mechanismu do nové struktury `uziv_pwd`, přibývá práce s vaultem a moduly se musí napojit na nový způsob předávání přihlašovací relace.

V tomto týdnu se uzavřela specifikace vault wire protokolu pro SPK. Popisuje komunikaci s vaultem, operace pro vytvoření, čtení a zrušení relace, chybové stavy i pravidla, jak se má klient chovat, když vault není dostupný. To je základ pro další implementaci klientské části a pro napojení modulů.

Současně proběhl spike kolem `uziv_param`. Výsledek je důležitý právě tím, že se nic zbytečně neimplementuje: analýza ukázala, že tabulka nemá v aktuálním kódu reálného konzumenta, takže se její migrace nebude otevírat, dokud se neobjeví konkrétní potřeba.

### UCV má skutečnou 10.11 delta práci

U UCV je situace jiná než u RZP. Delta analýza ukazuje reálné změny v modulem vlastněném kódu. Souvisí především s reformou rozpočtových výkazů pro účetní rok 2026: nové varianty tříd, výpočtů, validací a seed dat.

To znamená, že UCV nepůjde jen připojit na novější společný základ. Bude se muset odmigrovat už rozpracovaný rozsah a zároveň do něj správně promítnout rozdíly verze 10.11. Plán UCV proto kombinuje původní migrační kroky s delta vrstvou pro 10.11.

### UPD vstoupilo do hry jako modul s obrazovkami

Do dokumentace přibyla také pitva a implementační plán UPD, tedy modulu pro upgrade databáze. UPD není jen neviditelná interní komponenta. Má vlastní obrazovky, operátorské režimy a několik způsobů spuštění: prázdný databázový bootstrap, automatický unattended běh a interaktivní režim pro obsluhu.

Jeho jádrem je deterministické provádění databázových změn podle change souboru a schopnost bezpečně pokračovat nebo znovu spustit upgrade po přerušení. Pro projekt HAIFA je UPD strategické hlavně proto, že přechod 10.1 -> 10.11 nebude poslední. Stejný problém se bude vracet s každou další verzí Fenixu, která bude v půlročních cyklech přicházet.

### Význam týdne

Sedmnáctý týden ukázal novou organizaci práce. RZP už má údržbovou release linii pro 10.1, zatímco `develop` se posunul k 10.11. V jedné části projektu se tedy chrání předaný stav, v druhé části se připravuje další technologický a databázový základ.

Tím se HAIFA posouvá od prvního úspěšně předaného modulu k opakovatelnému modelu. Nestačí umět zmigrovat jednu aplikaci. Továrna musí umět držet vydanou verzi, reagovat na hotfixy, povyšovat společné knihovny, připojit moduly na novou databázovou baseline a současně rozbíhat UCV, UPD a další části Fenixu.

[Domů]({{ '/' | url }})
