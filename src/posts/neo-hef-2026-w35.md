---
title: "Týden pětadvacátý - UCV dokončuje historickou éru, UPD prochází živými branami a oprava přihlášení míří do 10.01"
date: 2026-08-30
week: "Týden pětadvacátý"
period: "24. 08. 2026 - 30. 08. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w35
summary: "Pětadvacátý týden dokončil implementační pokrytí UCV před rokem 2010, přinesl živé ověření klíčových cest UPD a potvrdil doménové přihlášení v RZP, UCV i UIR včetně backportu do verze 10.01."
---

## Shrnutí pro netechnické čtenáře

Pětadvacátý týden projektu NEO_HEF uzavřel jednu velkou otázku, která se otevřela teprve před několika dny: co se starými účetními výkazy z doby před rokem 2010? Odpověď zní, že do migrace patří. Původní Fenix je umí zobrazit a tisknout, a proto je musí umět i nová aplikace. Tým během týdne doplnil celé implementační pokrytí této historické éry, včetně různých postupů pro roky 2001 až 2009 a pro ještě starší data.

Nejde přitom o okrajovou kosmetiku. Historické výkazy používají jiné tabulky, jiné tiskové cesty a částečně i jiné výstupní formáty než současné výkaznictví. V dostupné databázi se navíc skutečně nachází 258 výkazů z let 2006 až 2009. Nové UCV už dokáže otevřít jejich přehled, pracovat s dobovými dialogy, sestavit podporované rodiny a vytvářet tisky i výstupy ARIS a IRES. Cesta pro data do roku 2000 je implementovaná a krytá testy, ale na dostupných databázích ji zatím nebylo možné živě porovnat, protože v nich tak stará data nejsou.

UPD, tedy modul pro upgrade databáze, prošel mimořádně důkladným živým ověřováním. Z uživatelského rozhraní se podařilo přerušit rozběhnutý upgrade, dokončit běžný upgrade, zopakovat ho a ověřit varování před opakováním. Test struktur bylo možné přerušit bez havárie a s čistou zprávou pro uživatele. Z devíti vybraných živých bran tak osm získalo přímý důkaz. Jedna zůstala otevřená: přihlášení nad databází, která je skutečně jen částečně upgradovaná. Takový stav se během pokusů nepodařilo bezpečně a spolehlivě vyrobit.

Oprava přihlášení Windows účtem z předchozího týdne dostala tentokrát skutečný provozní důkaz. Doménový účet se úspěšně přihlásil do RZP, UCV i UIR proti databázi verze 10.11. Ověřilo se také zapamatování zvoleného režimu přihlášení. UIR při tom odhalilo jinou, již existující mezeru: samo přihlášení funguje, ale modul ještě neumí stejně jako RZP a UCV převést přihlášeného uživatele na jeho skutečné databázové ID a načíst práva standardní cestou. Tato oblast zůstává k rozhodnutí a opravě; není to regrese doménového přihlášení.

Stejná oprava přihlášení byla jako první evidovaný backport přenesena také do udržované větve `release/10.01`. Tým tím prakticky ověřil nové pravidlo verzování: opravy mohou proudit mezi vývojovou a vydanou linií oběma směry, zatímco nové funkce zůstávají jen v novější verzi. Do 10.01 se proto přenesla společná oprava, ale ne části určené modulům, které tato větev vůbec neobsahuje.

Týden zároveň znovu ukázal, proč HAIFA nesleduje jen počet hotových funkcí. Nové ochranné testy našly formuláře a obsluhy, které automatický převod kódu minul kvůli rozdílu velikosti písmen v názvu. Přesnější důkaz někdy krátkodobě zhorší čísla v reportu, ale projektu dává pravdivější obraz.

## Co se stalo

V týdnu od 24. do 30. srpna 2026 přibylo na větvi `origin/develop` 199 commitů, z toho 77 merge commitů. Vývoj byl nejintenzivnější v UCV, ale významné výsledky vznikly také v UPD, společné přihlašovací vrstvě, QA automatizaci a pravidlech verzování.

Větev `origin/release/10.01` tentokrát nezůstala beze změny. Přibyl do ní jeden řízený backport opravy doménového přihlášení. Nešlo o sloučení celé vývojové větve, ale o cílený přenos konkrétní opravy s popisem toho, co se na starší linii záměrně nepřenáší.

### UCV dokončuje implementaci éry před rokem 2010

Ještě na začátku týdne nebylo jisté, zda mají výkazy před rokem 2010 v nové aplikaci vůbec zůstat. Rozhodla skutečnost v původním Fenixu: nabídka let se nestaví z pevně nastaveného rozsahu, ale z dat uložených v databázi. Pokud databáze historický rok obsahuje, uživatel se k němu dostane. V použitém vzorku byly dostupné roky 2006 až 2026 a pro období 2006 až 2009 se našlo 258 uložených výkazů.

Tím padl předpoklad, že starší část je nedosažitelná a může zůstat mimo migraci. Rozsah se rozdělil do čtyř navazujících částí: přehled výkazů, dva dobové dialogy zpracování, tisk pro roky 2001 až 2009 a samostatná tisková cesta pro rok 2000 a starší. Celkem šlo o přenos chování z více než 21 tisíc řádků legacy zdrojů.

Všechny čtyři části během týdne přistály do `develop`. Přehled dostal 81 chybějících obsluh a správné přepínání dostupných akcí podle zvoleného roku. Dialogy zpracování umějí ukládat výsledky do klasických tabulek `uc_vykaz` a `uc_uk_vyk`, nikoli do novějšího schématu určeného pro moderní výkazy. Doplnily se chybějící výpočetní rodiny, oba historické tiskové proudy, výstupy ARIS a IRES i okno průběhu s možností přerušení.

Rozdělení na dvě tiskové éry nebyla technická libůstka. Původní Fenix používá pro roky 2001 až 2009 jiné emitory než pro data do roku 2000. Starší cesta má i další varianty pro roky do 1996 a pro období od roku 1997. Pokus sjednotit je pod moderní tisk bloku H by mohl vytvořit podobný výstup, ale ne věrné chování původního systému.

Výsledek je potřeba číst přesně. Pre-2010 éra je implementačně pokrytá a automatické testy ověřují její enginy, zápis i směrování akcí. Cesta do roku 2000 ale nebyla živě spuštěna proti archivní databázi, protože žádná dostupná databáze tak stará data nenabízí. Nejde o důkaz, že ji zákazníci nepoužívají; právě datově řízená nabídka znamená, že se u zákazníka s archivem z devadesátých let může normálně otevřít.

### Textové části Přílohy prošly živým porovnáním

Minulý týden se podařilo dosáhnout znakové shody 74stránkové dávky pěti účetních výkazů. Tehdejší důkaz ale nezahrnoval textové části Přílohy, protože při referenčním běhu nebyly zapnuté.

Tento týden přibyl jejich emitor a čtyři živé referenční otisky. Porovnání odhalilo dvě drobnosti, které samotné jednotkové testy nemohly zachytit: rozdíl mezi odstraňováním mezer a tabulátorů na konci řádku a nutnost zkrátit definici na pevnou délku 132 znaků. Po opravě prošly textové části proti živému výstupu původní aplikace a hradlo, které je dosud blokovalo, se mohlo otevřít.

Tím je výkazová polovina bloku H pokrytá výrazně lépe, ale celý tiskový svět UCV uzavřený není. Samostatnou oblast tvoří uživatelské sestavy a protokoly kontrolních vazeb, které s tiskem výkazů nesdílejí ani základní strukturu, ani emitory.

### Ochranné testy měří i slepá místa převodu

UCV dostalo automatickou bránu dosažitelnosti. Ta hlídá dvě věci: zda portovaný formulář má produkčního volajícího a zda na dosažitelných formulářích nepřibývají aktivní prvky bez implementované obsluhy. Po doplnění několika formulářů klesla sledovaná plocha takových signálů na 283 na 43 formulářích.

Ani tato brána ale není vševědoucí. Týden odhalil, že generátor při párování názvů prvků a původních událostí rozlišoval velikost písmen. Událost `cmdNove_click` tak nemusela být spojena s prvkem `cmdnove`. V takovém případě nevznikl ani prázdný zástupný kód, který by skener mohl najít. Na jediném editoru se takto ztratilo devět obsluh včetně akcí pro nový řádek a zrušení změn.

Nové behaviorální testy tuto mezeru zachytily. UCV po doplnění editoru vykázalo 9604 úspěšných testů, žádné selhání a 21 přeskočených golden testů. Současně se našla další past v samotném spouštění sady: při pádu testovacího procesu mohl stručný výpis ukázat zelený souhrn jen za testy, které stihly proběhnout. Nové pravidlo proto porovnává počet nalezených a skutečně spuštěných testů a kontroluje i informaci o předčasně ukončeném procesu.

Stavový registr UCV po tomto týdnu eviduje 51 otevřených řádků. Část čeká na vhodné prostředí nebo živá data, část na rozhodnutí vlastníka a část představuje konkrétní zbytkovou práci. Hotová historická éra tedy není totéž co hotový modul. Znamená ale, že jedna rozsáhlá a dříve nejasná oblast má implementaci, testy a pojmenované hranice.

### QA doplňuje klikací scénáře UCV

Po odstranění několika produktových blokací bylo možné doplnit sedm dříve chybějících E2E scénářů. Testy nově zvenku ověřují například uložení, přepsání a smazání definice výběrových podmínek, validaci řádků PKZ, pořízení operativního záznamu, přepočet ručně pořízených dat a chování historického přehledu při změně roku.

V katalogu UCV po této vlně zůstává jediný scénář označený jako `Missing`: test aktualizace textů nad záměrně poškozeným vstupním souborem. To neznamená, že je všechno ostatní plně automatizované nebo že všechny scénáře procházejí. Katalog dál poctivě rozlišuje automatické, ruční, přeskočené a známými vadami ovlivněné případy. Význam čísla je užší: téměř každý plánovaný scénář už má určený způsob ověření a nezmizí z reportu jen proto, že je obtížný.

### UPD získává živý důkaz pro osm z devíti bran

UPD prošlo sérií živých pokusů nad řízenými testovacími databázemi. Cílem nebylo znovu dokazovat vnitřní algoritmus jednotkovými testy, ale ověřit, co skutečně uvidí a udělá operátor v aplikaci.

Při prvním běhu se podařilo rozběhnutý upgrade přerušit během čtení definic. Aplikace zobrazila potvrzovací dotaz, informaci o uživatelském přerušení, pokyn k obnově databáze a nabídku protokolu. Databáze v tomto případě zůstala ještě před prvními změnami.

Další upgrade doběhl celý z uživatelského rozhraní. UPD načetlo skutečný změnový soubor, provedlo 13 příkazů a vložilo záznam verze 10.11 s výsledkem v pořádku. Opakovaný běh následně zobrazil očekávané varování, po potvrzení proběhl znovu a zvýšil počítadlo upgradu bez vložení duplicitního verzního řádku. Tím se ověřilo nejen dokončení, ale i samostatná cesta pro povolené opakování upgradu.

Živě se ověřilo také přerušení funkce `Test struktur`. Na rozdíl od legacy aplikace port nespadl do obecné neočekávané chyby, ale zobrazil čistou zprávu, že test databáze byl uživatelsky přerušen a databáze nebyla otestována. Jde o vědomě schválenou odchylku, kdy nová aplikace zachovává význam původního chování, ale uživateli podá bezpečnější výsledek.

Z devíti vybraných bran jich tak osm prošlo. Otevřené zůstalo ověření přihlášení nad částečně upgradovanou databází. První pokus skončil ještě před databázovými změnami, další upgrade doběhl příliš rychle a zanechal databázi opět konzistentní. Dokumentace proto tento bod neoznačuje ani jako úspěch, ani jako chybu; popisuje přesný recept pro další ruční pokus.

Ověřování přineslo i vedlejší nálezy. Výchozí protokol může obsahovat starší citlivé údaje o připojení a režim přidávání do stejného souboru komplikuje bezpečné sdílení logů. Protokoly mohou obsahovat také seznam uživatelských jmen. Tyto skutečnosti nepatřily k původním branám, ale byly zaznamenány, aby se při diagnostice neposílaly nebo necommitovaly nevhodné soubory.

### Doménové přihlášení funguje ve třech modulech

Společná oprava Windows přihlášení dostala živé ověření v RZP, UCV i UIR. Test proběhl na skutečném doménovém stroji a proti databázím verze 10.11. Ve všech třech modulech se účet ve tvaru `DOMÉNA\uživatel` správně převedl na login uložený v databázi bez domény a aplikace otevřela hlavní okno.

RZP a UCV po přihlášení načetly očekávaná práva a nabídly plné menu. UIR úspěšně ověřilo identitu, ale jeho vlastní startovací vrstva zatím používá náhradní ID uživatele a bez zvláštního nastavení nenačte databázová práva stejnou cestou jako sesterské moduly. První běh proto ukázal omezené menu. Opakování se stejným účtem a explicitně předanou množinou práv otevřelo menu celé, čímž se příčina oddělila od doménového přihlášení.

Tato odchylka byla přerámována přesněji. Problém není v typu uživatele ani v tom, že by UIR přenášelo jméno s doménou. Chybí mu standardní převod na skutečné `id_uziv` z databáze. V dostupných datech se chyba zatím neprojevila poškozením uživatelského nastavení, ale kódová mezera je doložená a čeká na rozhodnutí vlastníka UIR.

Ověřilo se také zapamatování volby přihlášení. Po prvním použití Windows účtu se RZP, UCV i UIR při dalších startech otevřely rovnou ve správném režimu, jak to dělá původní Fenix.

### Oprava přihlášení se vrací i do verze 10.01

Doménové přihlášení je oprava sdíleného chování, nikoli nová funkce specifická pro 10.11. Proto byla odpovídající část společné vrstvy cíleně přenesena také do udržované větve `release/10.01`.

Backport neobsahoval celý vývojový proud. Nepřenášela se například část pro UPD, protože ve větvi 10.01 nový modul UPD prakticky neexistuje, ani samostatná navazující paritní oprava, která má vlastní životní cyklus. Přenos má vlastní dokumentaci, testy a záznam o vědomě vynechaných částech.

Na tomto příkladu se zpřesnila obecná metodika verzování NEO_HEF. Oprava nalezená ve vydané verzi se přenáší směrem do `develop`; oprava vzniklá na trunku se může cíleně vrátit do stále podporované release větve. V obou směrech se přenáší konkrétní commit nebo ekvivalentní implementace, nikoli celá cizí větev. Nové funkce se zpět do starší verze nepřenášejí.

### Společné licence znají nový modul Finanční kontrola

Ve společné licenční vrstvě přibyla položka `FIK` pro modul Finanční kontrola. Změna se provedla na obou stranách souběžného světa: v novém portu i v legacy komponentě pro verzi 10.11. Tým ověřil skutečný podepsaný licenční záznam dodaný původním systémem, jeho podpis proti zabudovanému veřejnému klíči i přítomnost nové položky ve výsledné legacy knihovně.

Samotný modul Finanční kontrola připravuje souběžně legacy tým Krypton. Využívá při tom metodiku HAIFA i společné části v repozitáři NEO_HEF, například modul SPOL. Aby měl FIK v této infrastruktuře připravené místo a mohl navázat na společné ověřování licencí, doplnil tým HAIFA jeho licenční záznam. Obě strany tak už rozumějí stejnému kódu a mohou na něj při další integraci přímo navázat.

### Význam týdne

Pětadvacátý týden přinesl tři různé druhy jistoty. UCV uzavřelo implementační rozsah, o kterém se ještě na začátku týdne nevědělo, zda do migrace patří. UPD nahradilo řadu předpokladů živým klikáním nad skutečnou testovací databází. A společné přihlášení přešlo od opraveného kódu k ověření ve třech modulech a k prvnímu řízenému backportu do starší vydané verze.

Stejně cenné jsou ale i výsledky, které zůstaly žluté nebo červené. UIR má doloženou mezeru v převodu identity, jedna brána UPD potřebuje specificky připravenou databázi a pre-2001 tisk čeká na archivní data. HAIFA tím získává přesnější mapu reality. Právě schopnost rozlišit implementováno, živě ověřeno a připraveno k vydání je podmínkou toho, aby AI-driven vývoj nebyl jen rychlý, ale také řiditelný a predikovatelný.
