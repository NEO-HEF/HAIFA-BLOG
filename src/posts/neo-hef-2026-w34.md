---
title: "Týden čtyřiadvacátý - UCV dorovnává 74stránkový tisk, UPD automatizuje E2E a UIR staví základ nastavení"
date: 2026-08-23
week: "Týden čtyřiadvacátý"
period: "17. 08. 2026 - 23. 08. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w34
summary: "Čtyřiadvacátý týden přinesl znakovou shodu 74stránkové výkazové dávky UCV, rozsáhlou E2E automatizaci UPD, první části nastavení UIR a opravu cesty pro přihlášení Windows účtem."
---

## Shrnutí pro netechnické čtenáře

Čtyřiadvacátý týden projektu NEO_HEF přinesl výrazný posun v ověřování skutečného chování aplikací. Nešlo jen o další růst počtu testů. Tým porovnával rozsáhlé tiskové výstupy znak po znaku, nechal automatické testy klikat v reálných uživatelských rozhraních a začal důsledně evidovat i to, co testovací report zatím nedokáže ověřit.

Nejviditelnější výsledek vznikl v UCV. Nová aplikace dokázala sestavit zachycenou dávku pěti účetních výkazů o 74 stranách tak, že se její textový obsah shoduje s původním Fenixem od prvního do posledního znaku. Je to podstatně silnější důkaz než porovnání několika čísel nebo jedné stránky. Zároveň to ale neznamená, že je celá oblast tisku nebo celé UCV hotové. Ověřená je výkazová část konkrétní dávky pro rok 2026; další tiskové varianty a textové části přílohy stále čekají na kontrolu a zbývá také finální živé ověření.

UPD, tedy modul pro upgrade databáze, dostalo automatizované E2E pokrytí všech 16 připravených testovacích sad. Celkem 69 klikacích testů pracuje s aplikací zvenku podobně jako uživatel: přihlašuje se, otevírá nabídky a dialogy, kontroluje stavy a na určené testovací databázi ověřuje i skutečný upgrade. Dočasná pojistka, která dovolovala produkčním cestám pracovat jen s databází obsahující v názvu slovo `scratch`, byla po těchto přípravách odstraněna. Bezpečnost už tak nestojí na názvu databáze, ale na řízeném testovacím prostředí, záloze a jasném zadání pro QA.

UPD se posunulo také v záloze a obnově databáze. Položky nabídky už nejsou pouze informační zástupné akce. Spouštějí samostatný nástroj `Zalohovani.NET` stejným způsobem jako legacy Fenix. U archivace bylo živě ověřeno i otevření jeho grafického rozhraní; obnova se v E2E testu z bezpečnostních důvodů ověřuje jen po první potvrzovací dialog.

UIR pokračovalo ve stavbě opakovatelného základu pro další části migrace. Doplnil se zmrazený vzor seznamových a editačních částí číselníků a vznikly první dvě části oblasti nastavení: práce s globálními předvolbami a sonda pro hledání volného PCD, tedy počítačového čísla domu. Nejde ještě o hotové dialogy dostupné uživateli. Jde o otestované kontrakty, na které budou navazovat konkrétní obrazovky a další kroky.

Opravila se také cesta přihlášení Windows účtem. Přihlašovací dialog nově správně předá účet ve tvaru `DOMÉNA\uživatel`, společná vrstva před databázovým hledáním oddělí doménu a aplikace si zapamatuje zvolený režim přihlášení. Zbývá živě potvrdit administrátorský příznak po skutečném doménovém přihlášení, takže ani zde ještě nejde o úplný sign-off.

## Co se stalo

V týdnu od 17. do 23. srpna 2026 přibylo na větvi `origin/develop` 111 commitů, z toho 45 merge commitů. Větev `origin/release/10.01` zůstala beze změny. Vývoj se soustředil hlavně na UCV, UPD, UIR, společné přihlášení a automatizaci QA.

### UCV skládá zachycenou dávku o 74 stranách

Ještě v předchozím týdnu bylo u takzvaného bloku H jasné, že hodnoty mohou sedět, ale výsledný tisk má proti legacy výrazně jinou strukturu. Tento týden se podařilo přenést a zapojit sazbu celé zachycené výkazové dávky pro rok 2026.

Referenční dávka obsahuje pět výkazů: FIN 2-12 M, Rozvahu, Výkaz zisku a ztráty, Přílohu a Pomocný analytický přehled. Dohromady jde o 74 stran. Každá část má vlastní pravidla pro hlavičky, stránkování, šířky sloupců, mapování hodnot i prázdné řádky. Nejsložitější byl Pomocný analytický přehled, který zabírá 51 stran a jehož některé řádky nevznikají přímo z definice, ale seskupováním účetních ukazatelů podle několika údajů.

Výsledkem je znakový golden, tedy referenční otisk, proti kterému se automaticky porovnává celý vytvořený text. Zachycená dávka sedí od první do poslední strany. Sazba je navíc zapojená do produkční tiskové cesty UCV, nejde tedy jen o oddělený experiment v testu.

Hranice výsledku jsou stejně důležité jako samotná shoda. Ověřená dávka vznikla pro konkrétní data a rok 2026. Při referenčním běhu nebyly zapnuté textové části Přílohy, takže pro ně zatím srovnávací otisk neexistuje. Samostatné ověření potřebují i další roční a historické varianty a sestavová část bloku H, například uživatelské sestavy a protokoly vazeb. UCV se tím výrazně posouvá k finálnímu testování, ale finální paritní sign-off a release gate zůstávají otevřené.

Vedle bloku H se rozšířila i samotná funkční plocha UCV. Přibyly historické rodiny výkazů, výpočty součtů, klasický tisk HO/NO/PO, konsolidační řádky a další aktivní uživatelské cesty. Stavový dokument po tomto kole eviduje, že žádná dosažitelná cesta `Sestavit` už není bez výpočetního enginu. To však není totéž co úplná připravenost k vydání: zbývající práce se přesouvá hlavně do živého ověřování, golden capture a ručního testování nad vhodnými daty.

### E2E testy se mění z reportu na skutečnou bránu

UPD dostalo automatizaci všech 16 připravených testovacích sad. Nový projekt obsahuje 69 klikacích E2E testů. Ty pokrývají start aplikace a administrátorskou bránu, strukturu a viditelnost menu, potvrzovací dialogy, test struktur, práci s databázovými skripty, převod hesel i řízené běhy nad testovací databází.

Podstatné je, že nejde o volání interních metod formulářů. Automatizace spouští skutečnou aplikaci, přihlásí ji a ovládá ji přes uživatelské rozhraní. Právě takový test dokáže odhalit situaci, kdy je obsluha v kódu správně, ale uživatel se k ní přes menu nebo dialog ve skutečnosti nedostane.

Stejný princip se zpřísnil u UCV. Katalog byl dorovnán na 173 řádků, které pokrývají všech 165 scénářů z 26 sad a osm samostatně evidovaných podscénářů. Dříve v reportu úplně chybělo 33 scénářů. Nový registr mezer nyní vyžaduje, aby každý nezelený scénář měl uvedenou třídu a důvod: například chybějící migraci, produktovou chybu, testovací dluh, závislost na jiném modulu nebo technicky neautomatizovatelný krok.

Praktický význam je jednoduchý: report už nemůže ukázat plné pokrytí jen proto, že obtížný scénář tiše vynechal. Nezaevidovaná mezera dostane stav `NEKLASIFIKOVÁNO` a zhorší celkový verdikt. Automatizace UCV zároveň přinesla konkrétní produktové nálezy, mimo jiné u načítání uloženého nastavení a dříve mrtvých akcí v přehledech. Některé z nich už během týdne dostaly implementaci, jiné jsou dál vedené jako otevřené chyby.

### UPD opouští dočasnou scratch bránu

Dosavadní ostrá cesta upgradu byla chráněná jednoduchou podmínkou: cílová databáze musela mít v názvu `_scratch`. Tato pojistka byla užitečná při prvních živých bězích, ale nebyla vhodným dlouhodobým pravidlem. Název databáze sám o sobě neříká, zda je možné ji bezpečně zničit, a produkční kód nemá rozhodovat podle testovací pojmenovávací konvence.

Tento týden byla scratch brána odstraněna ze všech tří produkčních cest, které mohou upgrade spustit. Zároveň bylo upraveno zadání pro QA tak, aby už s žádnou takovou automatickou ochranou nepočítalo. Testující musí pracovat s určenou obnovitelnou databází a před během mít samostatnou zálohu mimo aplikaci.

To není snížení bezpečnosti, ale změna jejího umístění. Dočasná technická pojistka ustoupila procesu, který odpovídá skutečnému provozu. Zároveň tím odpadla falešná jistota, že databáze je bezpečná jen proto, že se vhodně jmenuje.

### Záloha a obnova už vedou ke skutečnému nástroji

V nabídce UPD byly archivace a obnova databáze dosud odložené akce. Nově vedou ke spuštění samostatné aplikace `Zalohovani.NET`, kterou používá i legacy Fenix. UPD jí neposílá vlastní sadu parametrů ani přihlašovací údaje; podle původního chování ji pouze vyhledá v instalaci Fenixu a spustí bez argumentů do interaktivního režimu.

U archivace automatický test ověřuje vznik skutečného procesu nástroje. Po doinstalování potřebných 32bitových knihoven SQL Serveru bylo na testovací stanici živě potvrzeno i otevření okna `Fenix - Záloha a obnova databáze 10.01.001`.

Obnova má přísnější hranici. E2E test ověří první potvrzení a zvolí odmítnutí. Plný souhlas by odpojil databázi, spustil nástroj a ukončil UPD, čímž by záměrně zničil sdílenou testovací relaci. Následující sekvenci proto hlídají jednotkové testy. Otevřená zůstává také distribuce samotného nástroje: UPD ho nesežene ani neinstaluje, očekává jeho přítomnost v instalaci Fenixu.

### UIR zmrazuje vzor číselníků a otevírá oblast nastavení

UIR tento týden dokončilo další části společného vzoru, podle kterého se budou migrovat jednotlivé číselníky. Vznikl základ detailního editačního okna, pravidla přístupnosti akcí a repozitářový kontrakt. Smyslem je vyřešit společné chování jednou a následně ho použít pro konkrétní číselníky, místo aby každý z nich vznikal jako nový samostatný výklad legacy aplikace.

Zatím ale nejde o uživatelsky otevřitelné číselníky. Společné třídy jsou abstraktní a první konkrétní obrazovky přijdou v navazujících krocích. Právě tam bude potřeba živě ověřit mimo jiné slučování nabídky do hlavního okna, správné chování MDI child formulářů a jednotlivé odchylky mezi číselníky.

Současně začala oblast nastavení. První část umí číst a ukládat globální předvolby UIR ve sdílené databázové tabulce. Druhá část řeší dostupnost PCD, tedy počítačového čísla domu, a zachovává i některá překvapivá pravidla původního systému, například význam vedoucích nul nebo rozdílné způsoby hledání další volné hodnoty.

Obě části mají rozsáhlé testové pokrytí, ale stále čekají na sign-off. Nemají ještě konkrétní dialog ani zapojení do běhu aplikace; to patří až následujícím úlohám. Přesná formulace tedy je, že UIR má připravené a ověřené stavební části nastavení, ne že je nastavení jako uživatelská funkce hotové.

### Windows přihlášení předává správnou identitu

Ve společné přihlašovací vrstvě se opravila chyba, která se projevovala při volbě Windows účtu. Přihlašovací formulář sice doménový účet znal, ale do výsledku úspěšného přihlášení předával hodnotu z jiného, v tomto režimu prázdného pole. Konzumenti pak hledali uživatele s prázdným loginem.

Nová cesta zachová účet ve tvaru `DOMÉNA\uživatel` až k výsledku dialogu. Sdílený databázový konzument následně doménu oddělí, převede login pro porovnání bez ohledu na velikost písmen a najde odpovídajícího uživatele Fenixu. Přihlašovací formulář si navíc ukládá, zda uživatel naposledy použil standardní, nebo Windows režim, takže tuto volbu není nutné při každém spuštění opakovat.

Změna je doložená testy společné vrstvy i konzumenta UPD. Otevřená zůstává poslední živá brána: na skutečném doménovém přihlášení je ještě potřeba potvrdit, že se správně propíše administrátorský příznak. Funkční chyba v předání identity je opravena, úplné produkční ověření ale ještě chybí.

### Význam týdne

Čtyřiadvacátý týden ukázal dvě podoby pokroku. První je viditelná ve výsledku: 74 stran UCV shodných znak po znaku, skutečně spustitelný nástroj pro zálohu a obnovu a správně předaná doménová identita. Druhá je procesní: testovací reporty začínají stejně přísně evidovat to, co ověřit neumějí, jako to, co prošlo.

Právě druhá změna je pro HAIFA podstatná. Predikovatelný AI-driven vývoj nevzniká jen rychlým psaním kódu. Potřebuje důkazy, které nelze obejít vynechaným scénářem, příliš obecnou formulací nebo zeleným testem nad jinou cestou, než kterou používá člověk. Tento týden projekt v několika oblastech takový důkaz zesílil, aniž by z dílčích výsledků dělal předčasný závěr o hotovosti celého modulu.
