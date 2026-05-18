---
title: "Týden desátý - RZP přechází od formulářů k pracovním tokům"
date: 2026-05-17
week: "Týden desátý"
period: "11. 05. 2026 - 17. 05. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w20
summary: "Desátý týden posunul RZP od převodu jednotlivých obrazovek k ověřovaným pracovním tokům: importu účetních dat, rozpouštění, sjednocenému vyhledávání, testům a sdílenému lifecycle pomocných MDB pro reporty."
---
## Shrnutí pro netechnické čtenáře

Desátý týden ukázal, že RZP se začíná posouvat z fáze „máme obrazovky“ do fáze „za obrazovkami běží skutečná práce“. V předchozích týdnech se hodně řešila věrnost formulářů, menu a chování uživatelského rozhraní. Teď k tomu přibyly další části, které jsou pro uživatele ještě důležitější: import účetních dat, základ rozpouštění, vyhledávání, nastavování, číselníky a testování.

Nejde jen o další sadu technických commitů. RZP je modul, ve kterém uživatelé potřebují pracovat s daty, spouštět kontroly, mazat jen to, co se mazat smí, a postupně dojít až k výstupům a reportům. Tým proto začal pevněji propojovat tři vrstvy: vzhled formulářů, aplikační logiku a automatické ověření, že se nové chování drží původního Fenixu.

Velký posun nastal i v kvalitě a infrastruktuře. Přibývají cílené testy pro formuláře, presentery, vyhledávání, import a rozpouštění. Reportingová vrstva ve `SPOL` dostala sdílenou službu pro lifecycle pomocné databáze `NeoFenixpom.mdb`, aby si moduly nevyráběly vlastní lokální náhrady. To je důležité pro RZP, ale také pro budoucí moduly, které budou potřebovat stejný typ výstupní infrastruktury.

Týden tak navazuje na předchozí poučení o uživatelském rozhraní. Vizuální parita zůstává nutná, ale sama nestačí. Desátý týden přidal důraz na to, aby formuláře byly součástí skutečných pracovních scénářů, měly správné napojení na data a byly průběžně ověřitelné testy.

## Co se stalo

Historie týdne pokrývá období `11. 05. 2026` až `17. 05. 2026`; v `origin/develop` je za něj `29` merge commitů. Aktivita byla soustředěná hlavně do dnů `11. 05.` až `15. 05.`. Největší objem práce zůstal v `RZP`, ale důležitý dopad měl i nový krok ve sdílené vrstvě `SPOL`.

První velkou linkou bylo dotažení master-data části `RZP-S01`. Pokračovala práce na formulářích pro definiční věty, nákladové a výnosové účty, vlastníky, nastavení a číselníky. U účtů a definičních vět se řešila kombinace vizuální parity, aplikační logiky a datové vrstvy: Dapper repozitáře, use-casy, presentery, testy a detailní UI parity kontroly. U vlastníků se opravoval detail údržby, duplicitní sloupce ve vyhledávání, DPI chování a položky horního menu.

Důležitý posun nastal u vyhledávání. Samostatný `SearchDialog` byl sjednocen do jedné produkční MDI-child cesty přes `RzpSearchDialogRunner`. To znamená, že aktuální volající formuláře už nemají každý vlastní modalní způsob vyhledávání, ale používají jednotný mechanismus. Pro uživatele je podstatné, že hledání se má chovat stejně napříč vlastníky, účty, definicemi i číselníky. Pro tým je podstatné, že takový mechanismus lze lépe testovat a udržovat.

Současně pokračovalo zlepšování samotného UI převodu. Migrační skill pro VB6 → .NET WinForms dostával další pravidla pro rozložení, DPI, chování minimalizace a maximalizace, dynamické menu, MDI režim a napojování business logiky. Opravy typu „číselníky se mají načíst při startu“, „menu se má chovat podle vybraného majitele“ nebo „vyhledávání má být subform, ne modalní dialog“ vypadají dílčím dojmem, ale dohromady snižují riziko, že nová aplikace bude jen podobně vypadat, ale pracovně se bude chovat jinak.

Druhou velkou linkou byl krok `RZP-S03`, tedy import a rozpouštění. V backendu vznikly nebo se rozšířily use-casy a repozitáře pro import účetních dat, čtení z UCR, práci s importovanými obdobími a víceúrovňové rozpouštění. Distribuční část už počítá s kopírováním úrovně 0 do úrovně 1, aplikací KAM rozpouštěcího algoritmu, nulováním zdrojových řádků a pravidlem, že mazat lze jen poslední stupeň rozpouštění.

Tohle je pro RZP podstatný milník. Formulářová parita je vidět na první pohled, ale skutečná hodnota modulu leží právě v těchto pravidlech: co se smí importovat, kdy se období uzavírá, jak se rozpočítávají částky a jak se zabrání nebezpečnému smazání mezistavu. Součástí implementace jsou strukturované výsledky operací, mapování stavů typu `Success`, `LockTimeout`, `Deadlock` a `ValidationFailed` a strukturovaný log s korelačním identifikátorem.

Na UI straně `S03` začal převod řetězce importu a rozpouštění. První částí je `ImportCodebookForm`, tedy formulář pro seznam přijatých účetních dat. Z legacy `rzp_pric.frm` vznikla nová WinForms obrazovka s MDI menu shellem, napojením na `ImportPresenter`, klávesovým chováním, help topicem, tiskovým menu a testy, které hlídají, že nevznikl nový dashboard nebo sloučený wizard. Důležité je, že tým nepřepsal původní pětiformulářový tok do jedné nové obrazovky, ale drží původní rozdělení pracovních situací.

Třetí velkou linkou byla reportingová infrastruktura ve `SPOL-S16`. Tým uzavřel sdílený lifecycle pomocné databáze `NeoFenixpom.mdb`: šablona se bere z instalačního `DataPath`, runtime kopie vzniká per session v `%TEMP%\Fenix\`, služba umí reconnect na stejný soubor a cleanup při ukončení. `SPOL` vlastní lifecycle souboru, zatímco schema a data uvnitř MDB zůstávají odpovědností konkrétního modulu. To je přesně ten typ hranice, který musí být u migrace jasný, jinak si každý modul začne podobný problém řešit po svém.

Tento krok také opravil směr proti první .NET implementaci, která si v RZP bootstrapovala vlastní lokální `blank.mdb`. Nový kontrakt říká, že downstream modul má používat `IReportPomMdbSessionManager`, ne vlastní proměnnou prostředí nebo lokální kopii pomocné databáze. `SPOL-S16` je v dokumentaci evidován jako hotový krok, s cílenými testy nad lifecycle, parity a kompatibilitou a s regresí `391/391` ve `SPOL`.

Výrazně přibylo i ověřování. U `RZP-S01` jsou evidované cílené testy pro search dialog, unified MDI-child search flow a full RZP běh se skipy tam, kde ještě chybí parity baseline. U `RZP-S03` běžely cílené testy pro `ImportCodebookForm` a plná RZP sada hlásila `480/484` s `4` skipy a bez selhání. Distribuční část má unit testy pro výpočet, mazací guard, save-state mapping a logování; parity test zůstává zatím přeskočený, protože čeká na golden baseline z legacy dat.

Desátý týden tedy posunul projekt do praktičtější fáze. RZP už není jen sbírka přepsaných formulářů a sdílených stavebních bloků. Začíná v něm vznikat ověřitelný řetězec práce: uživatel otevře formulář, vybere data, spustí akci, aplikace provede pravidla nad databází, vrátí konkrétní stav a testy kontrolují, že se chování nerozpadlo. Do cíle je pořád daleko, ale tahle změna je pro migraci zásadní.

[Domů]({{ '/' | url }})
