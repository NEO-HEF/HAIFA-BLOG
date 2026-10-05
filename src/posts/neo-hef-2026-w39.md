---
title: "Týden devětadvacátý - UCV ověřuje celé výstupy, UPD se připravuje k pilotu a UIR rozšiřuje práci s adresami"
date: 2026-09-27
week: "Týden devětadvacátý"
period: "21. 09. 2026 - 27. 09. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w39
summary: "Před plánovaným pilotem UCV a UPD tým rozšířil skutečné tiskové cesty, porovnal celé sumáře s původním Fenixem a opravil provozní i vizuální vady. UIR mezitím dokončilo další nástroje pro práci s územními a adresními údaji."
---

## Shrnutí pro netechnické čtenáře

Devětadvacátý týden projektu NEO_HEF byl ve znamení přípravy modulů UCV a UPD k pilotnímu testování. UCV, modul účetních výkazů, rozšířilo podporu současných i historických tisků. UPD, které zajišťuje upgrade a servisní správu databáze, procházelo opravami potřebnými před předáním i dolaďováním ovládání.

Nejcennější výsledky přineslo porovnání celých výstupů nové aplikace s původním Fenixem. U historických výkazů se ukázalo, že některé databázové dotazy tisk vůbec nepustily. U sumářů za více organizací důkladnější kontrola našla chybějící konsolidaci a nesprávné pořadí organizací ve sloupcích. Tyto vady se podařilo opravit ještě před plánovaným pilotem.

Současně pokračovalo UIR, tedy Územní identifikační registr. Přibyly dokončené nástroje pro doplnění čísla parcely, informace o obci, orientační systém a identifikaci instalace. Migrace tak postupovala zároveň k nejbližšímu předání i k dalšímu modulu.

## Co se stalo

V týdnu od 21. do 27. září 2026 se práce soustředila na skutečné uživatelské cesty: sestavit výkaz, vytisknout jej, uložit správná data, otevřít servisní formulář a ověřit, že výsledek odpovídá původní aplikaci. Zvláštní pozornost dostaly starší roky a dávkové operace, kde se jednoduchý test jedné sestavy snadno mine s reálným používáním.

### UCV rozšiřuje tisk napříč roky a typy výkazů

Tiskový blok H, který připravuje obsah výkazů pro tisk, dostal další konkrétní zapojení. Rozvaha, Výsledovka a Pomocný analytický přehled získaly sazbu pro období 2010–2025. Rozšířila se také Příloha, u níž však zůstala vynechaná léta 2014–2017. Navazující práce doplnila další účetní a finanční typy i jejich hlavičky.

Tým přitom zpřesnil způsob, jakým o pokrytí mluví. Hotová funkce pro sazbu řádku ještě nedokládá, že ji používá konkrétní výkaz. Rozhodující je zapojení celé cesty a porovnání jejího výsledku s výstupem původního Fenixu. Proto vedle implementace přibývaly referenční otisky skutečných tisků pro různé typy a hranice historických období.

Živé ověření tisků z let 2001–2009 našlo chyby v osmi čtečkách tiskové kostry. Dotazy připisovaly některé sloupce nesprávné tabulce a tisk končil už při první položce dávky. Opravy zahrnuly také zdroj obce v hlavičce, zapojení oficiální hlavičky finančního výkazu a formát data. Vznikl referenční otisk s 6512 řádky, který umožňuje tyto výstupy znovu kontrolovat.

### Celý sumář odhalil chyby, které kontrola hlaviček neviděla

Sumář spojuje výkazy několika organizací. Dosavadní porovnávání jeho referenčních otisků kontrolovalo jen několik hlavičkových řádků na stránce. Nový test prošel produkční cestou od formuláře a porovnal celý tiskový obsah včetně datových řádků.

Tím se odkryly tři konkrétní vady. Popisné číselníky se načítaly podle nesprávného klíče, organizace ve sloupcích dostávaly jiné pořadí než v původním dialogu a přepočet konsolidace za okres nebo kraj dosud nebyl převedený. Všechny tři chyby byly opraveny. Doplněné otisky pro okres a kraj pomáhají ověřit i rozdíl mezi oběma režimy.

Dávkové tisky zároveň dostaly správné členění podle jednotlivých výkazů a stránkování klasických sestav podle výšky stránky. U starších dialogů přibylo okno průběhu a možnost přerušení dávky. Jsou to změny, které se projeví právě při běžné práci s větším objemem dat.

### Databáze, oprávnění a procesní okna se ověřují společně

Kontrola SQL proti skutečnému schématu opravila například dotaz grafu nákladů a výnosů na aktivní ploše. Rozšířila také ověřování větví, které dosavadní testy nepoužívaly, včetně licenčního omezení seznamu organizací.

Další audit srovnal přehled výkazů s původními filtry, opravil pořadí kopírování textů Přílohy vůči uložení a chování sestavení se samými nulovými řádky. Ve společné vrstvě SPOL se upravil zápis času událostí podle databázového serveru a opakování neúspěšného zápisu do evidence.

Živé běhy odhalily také procesní okna příjmu výkazů a druhé okno kontrolní sestavy vytvářená mimo vlákno uživatelského rozhraní. Opravy odstranily konkrétní příčiny nestabilního chování těchto cest. Tým současně zpřesnil testovací nástroje, aby po zachytávání výstupů nezůstávaly běžet pomocné procesy a jednotlivá měření si nepřepisovala společná nastavení.

### UPD dokončuje opravy před předáním a dolaďuje ovládání

Vlna oprav nutných před vydáním řešila mimo jiné chování při selhání tvorby indexu a načítání dat. Evidence rozpracovaných položek se zároveň porovnávala s dnešním kódem: některé body vyžadovaly opravu, jiné už byly hotové nebo měly výslovně rozhodnutý další postup. Uzavření položky v seznamu proto samo o sobě neznamená nově dodanou funkci.

V uživatelském rozhraní se upravoval výchozí fokus, pořadí ovládání, tlačítka výběru, okraje a pozadí polí, centrování formulářů, okna průběhu a dialog rozdílů. Opravovaly se také překryvy popisků a nabídka tabulek. Závěrečná testovací brána druhé vlny těchto úprav doložila 2678 úspěšných testů, žádné selhání a 13 přeskočených případů; tento běh nezahrnoval E2E testy celé aplikace.

### UIR postupuje od číselníků k práci s adresními údaji

Ve dnech 24. a 25. září se do hlavní vývojové větve dostaly fáze C1 a C2. Práce rozvíjela oblast adresních objektů a souvisejících nástrojů. Samostatný sign-off získalo doplnění čísla parcely, informace o obci, orientační systém obce a číselník identifikace.

Rozsah jednotlivých výsledků je důležitý: u adresních objektů zůstává závislost na ověřování vůči základním registrům, takže dokončení okolních nástrojů ještě neuzavírá celou tuto oblast. UIR však už skládá širší pracovní celek, který navazuje na dříve převedené číselníky.

### Význam týdne

Příprava k pilotu přinesla opravy viditelné pro uživatele i zpřesnění důkazů o kvalitě. Pro HAIFA, Helios AI Factory, je podstatné hlavně to, že řízení práce AI agentů zahrnuje ověření skutečného výsledku. Celý tisk, skutečný databázový dotaz a průchod formulářem dokázaly tento týden odhalit chyby, které užší kontrola přehlédla.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
