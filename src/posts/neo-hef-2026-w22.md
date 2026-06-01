---
title: "Týden dvanáctý - UCV se rozbíhá a RZP se ladí podle reality"
date: 2026-05-31
week: "Týden dvanáctý"
period: "25. 05. 2026 - 31. 05. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w22
summary: "Dvanáctý týden přinesl první větší implementační vlnu UCV, stabilizaci RZP v detailech, nové SPOL brány pro kompatibilitu databáze a chybové hlášky, robotické UI testování a první release-management základ pro MSIX distribuci."
---

## Shrnutí pro netechnické čtenáře

Dvanáctý týden projektu HAIFA ukázal, že migrace Fenixu se začíná posouvat od převodu jednoho modulu k širšímu ekosystému. Vedle RZP, tedy modulu pro rozpouštění nákladů a výnosů, se výrazněji rozběhla také práce na UCV, modulu pro Výkaznictví.

UCV zatím není hotová aplikace, kterou by bylo možné nasadit uživatelům. Má ale první důležitou kostru: vlastní start, přihlášení, hlavní MDI okno, základ nabídky a napojení na část společných služeb. To je důležité, protože tým si na dalším velkém modulu ověřuje, že postupy vytvořené při migraci RZP nejsou jednorázové.

RZP se mezitím ladilo v praktických detailech. Přibyly opravy filtrování číselníku nákladových a výnosových účtů podle vybraného majitele, přesnější vzhled tabulek, úpravy importních obrazovek, napojení nastavení tiskárny a opravy chování při spuštění pod společným spouštěčem.

Důležitá byla i práce ve společné vrstvě SPOL. Aplikace teď umí před startem ověřit kompatibilitu databáze, lépe zobrazit chybu při neúspěšném připojení a využívat společný katalog hlášek převzatý z původního Fenixu. To jsou věci, které uživatel většinou nevnímá, dokud se nepokazí. Právě proto je dobré je řešit brzy.

Tým také posílil automatizované ověřování. Nový robotický tester umí spouštět legacy i novou verzi modulů, klikat v jejich rozhraní, sbírat důkazy a porovnávat chování. Vedle toho vznikl první základ pro distribuci nových modulů pomocí MSIX balíčků a GitHub Releases.

## Co se stalo

V týdnu od 25. do 31. května 2026 přibylo do větve `develop` celkem 29 změn. Na první pohled šlo o směs implementace, oprav, dokumentace a infrastrukturních kroků. Ve skutečnosti se ale dají číst jako jeden souvislý posun: projekt začíná řešit nejen převod obrazovek a logiky, ale také spouštění, testování, distribuci, referenční legacy zdroje a dlouhodobou udržitelnost migrace.

### UCV má první větší implementační základ

Největší novinkou týdne je první větší implementační vlna modulu UCV, tedy Výkaznictví. Do projektu se dostala kostra aplikace se samostatným startem, přihlášením, MDI oknem s titulkem Výkaznictví, stavovým řádkem a základní strukturou nabídek převzatou z legacy formulářů.

Součástí práce byly tři oblasti. První řešila aplikační shell, přihlášení a hlavní okno. Druhá přidala základy pro číselníky, nastavení, práci s vlastníkem a rokem a napojení na sdílené služby. Třetí oblast ověřovala riziková místa mezi UCV, SPOL, RUV a UCA, tedy hranice, na kterých se modul musí opírat o společné komponenty i data z okolních částí Fenixu.

Významné je, že v UCV už existují konkrétní smlouvy rozhraní pro poskytování vlastníka a roku, čtení nastavení a práci s číselníkovou cache. V dokumentaci se objevují také desítky číselníků a první napojené položky menu. Část nabídky je zatím záměrně vypnutá s informací, že čeká na další implementační kroky. To je správný stav: uživatel ani tester se nedostane do slepé uličky, ale zároveň je vidět budoucí struktura modulu.

Tahle práce navazuje na experimentální rozjezd migrace UCV pomocí babysitter orchestrátoru pro dlouhodobější procesy s více AI agenty. Dvanáctý týden ukázal první hmatatelné výsledky, ale také připomněl, že UCV je pořád na začátku. Základ existuje, plná funkčnost bude vznikat postupně.

### RZP se zpřesňuje podle reálného chování

V RZP pokračovalo ladění detailů, které mají velký dopad na každodenní použitelnost. Nejviditelnější opravou bylo filtrování číselníku nákladových a výnosových účtů podle typu předpisu aktuálně vybraného majitele. Nešlo jen o jednorázový zásah: po prvotní opravě následovalo doplnění runtime cesty a potom ještě regresní oprava po změnách v nastavení tiskárny. Výsledkem je stabilnější chování v situaci, která je pro práci v RZP podstatná.

Další změny se týkaly vzhledu a rozložení. Tabulky ve formulářích se přiblížily legacy MSFlexGridu, upravily se obrazovky rozpouštěcích předpisů a lépe se srovnalo rozložení importních funkcí. Takové změny samy o sobě nevypadají dramaticky, ale u migrované aplikace jsou důležité: cílem není navrhnout nový produkt, ale převést existující pracovní nástroj tak, aby se v něm uživatelé neztratili.

Praktický posun přineslo také napojení nastavení tiskárny do více RZP formulářů. Vedle toho se opravovalo chování stavového řádku při spuštění RZP pod společným spouštěčem. Stavový řádek už nemizí při změně velikosti okna a v režimu pod spouštěčem se schová velikostní úchyt, který tam nepatří.

### SPOL posílil start aplikací a práci s hláškami

Ve společné vrstvě SPOL vznikla kontrola kompatibility verze databáze. Při startu aplikace se ověří, zda je databáze v rozsahu, se kterým modul umí pracovat. Pokud není, aplikace neskončí nečitelnou chybou, ale zastaví se řízeně a zobrazí uživateli srozumitelnou informaci. Stejný mechanismus se začal používat i v RZP.

Dalším krokem bylo zpřesnění chování při neúspěšném připojení k databázi. Aplikace má zobrazit jednu jasnou chybu a nepokračovat dál do startu relace. Součástí této práce bylo také vyčištění přihlašovací obrazovky tak, aby při špatných přihlašovacích údajích nevytékaly na uživatele interní databázové detaily, například technické hlášení kolem `sp_getapplock`.

Třetím významným bodem je sdílený katalog hlášek. Z původní databáze `fenixmsg.mdb` byla převzata tabulka hlášení a převedena do vestavěného JSON katalogu. Pro novou aplikaci to znamená, že může používat stejné texty jako legacy Fenix, ale bez runtime závislosti na Access databázi.

### Robotický tester otevírá cestu k lepším důkazům

Do projektu přibyl nový robotický tester postavený nad Pythonem a `pywinauto`. Umí spouštět legacy i novou verzi modulů samostatně i pod společným spouštěčem, provádět scénáře v uživatelském rozhraní, sbírat snímky obrazovek a výpisy UI stromu a porovnávat výsledky.

To je pro projekt HAIFA zásadní. Migrace starého desktopového systému není jen o tom, jestli se kód zkompiluje. Je nutné opakovaně ověřovat, že se formuláře otevírají, nabídky fungují, aplikace reaguje podobně jako původní verze a případné opravy lze doložit. Robotický tester dává AI agentům i lidem lepší nástroj pro reprodukci chyb a prokazování výsledků.

V tomto týdnu se ověřovala matice spuštění RZP a UCV v legacy i NEO variantě, samostatně i přes společný spouštěč. To je přesně typ technické infrastruktury, která není vidět v jednom konkrétním formuláři, ale dlouhodobě rozhoduje o kvalitě celé migrace.

### Začal vznikat release-management základ

Vedle samotného vývoje se řešila i distribuce výsledků. Pro RZP vznikl základ MSIX distribuce přes GitHub Releases, včetně podepisování balíčků, manifestů, beta a produkčního kanálu, automatické aktualizace a instalační stránky.

To ještě neznamená finální distribuční proces pro celý Fenix. Prozatím jde hlavně o RZP a část dalších kroků zůstává odložená. Přesto je to důležitý posun: projekt se začíná připravovat na svět, ve kterém se nové moduly nebudou jen spouštět z vývojového prostředí, ale budou se také instalovat, aktualizovat a řízeně vydávat.

### Přibyly další referenční legacy zdroje

Do repozitáře byly doplněny další části původních legacy zdrojů a schémat. Týká se to mimo jiné společného spouštěče, bezpečnostních a společných knihoven a dalších modulových oblastí.

Pro veřejnost je to možná méně atraktivní než video funkční obrazovky, ale pro migraci je to velmi praktické. Čím víc přesných referencí má tým po ruce, tím lépe může ověřovat, co původní systém skutečně dělal, jak se jmenovaly formuláře, jak fungovaly nabídky a kde jsou hranice mezi moduly.

## Význam týdne

Dvanáctý týden byl důležitý tím, že se projekt rozšířil do několika směrů najednou. UCV dostalo první skutečný základ, RZP se dál přibližovalo reálnému chování legacy aplikace, SPOL posílil společné startovací a chybové mechanismy a kolem toho vznikaly nástroje pro testování a distribuci.

Zároveň je vidět, že nejtěžší část migrace zůstává stejná: přimět automatizované nástroje a AI agenty, aby se co nejvíc drželi původního Fenixu a aby jejich výstupy byly nejen formálně hotové, ale i funkčně správné. Tento týden ale přinesl několik kroků, které tuto práci dělají měřitelnější a lépe ověřitelnou.
