---
title: "Týden třiadvacátý - UCV zmenšuje aktivní mezery, UPD spouští upgrade z UI a UIR dostává první shell"
date: 2026-08-16
week: "Týden třiadvacátý"
period: "10. 08. 2026 - 16. 08. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w33
summary: "Třiadvacátý týden posunul UCV v aktivních uživatelských cestách, dotáhl UPD UI až k ostrému upgradu testovací kopie, rozběhl startovací část UIR a potvrdil, že release 10.01 zůstal mimo vývojové změny."
---

## Shrnutí pro netechnické čtenáře

Třiadvacátý týden projektu NEO_HEF byl praktický. Nešlo v něm o velký veřejný milník, ale o postupné odstraňování míst, kde uživatel v nové aplikaci viděl tlačítko nebo menu, ale za ním ještě nebylo odpovídající chování z původního Fenixu.

Nejvíc takové práce proběhlo v modulu UCV. Přibylo předání výkazu do USP, nastavení tiskárny ve třech přehledech, tisk výkazů z přehledu od roku 2010 a několik drobnějších, ale důležitých paritních oprav. UCV se tím znovu posunulo blíž k finálnímu testování, ale ještě v něm není. Zůstávají části, které vyžadují další kola ověřování, živé porovnání nad vhodnými daty nebo rozhodnutí vlastníka.

UPD, tedy modul pro upgrade databáze, udělalo viditelný krok směrem k použitelnosti. Upgrade databáze už nebyl ověřený jen přes testy a technické švy, ale prošel také z přihlášeného uživatelského rozhraní. Běh proběhl nad zahoditelnou testovací kopií, databáze se posunula z verze 1001000 na 1011000 a relace aplikace po upgradu zůstala použitelná. To je důležité hlavně proto, že upgrade databáze je destruktivní operace a musí být jasné, kdy se spouští doopravdy a nad jakou databází.

UIR, oblast územní identifikace, se posunula od orchestrace k první skutečné startovací části modulu. Vznikl shell aplikace, základní přihlášení a runtime kontext, start databáze, základní menu a živý důkaz, že menu v hlavním okně reaguje na skutečný klik. Není to hotový UIR modul, ale už to není jen plán práce.

Vedle samotných modulů se zpřesnila i pravidla práce HAIFA. Vznikl cross-module ledger, který eviduje případy, kdy migrace jednoho modulu vytvoří kód v jiném modulu. Přibyly také guardraily pro slepá tlačítka a chování formulářů, včetně správného rozlišení, jestli má být okno modální dialog, nebo MDI child. To jsou nenápadné změny, ale pomáhají držet migraci ve stavu, kde se agenti neopakují, nerozbíjejí cizí práci a nenechávají v UI aktivní prvky bez funkce.

## Co se stalo

V týdnu od 10. do 16. srpna 2026 přibylo na větvi `origin/develop` 127 commitů, z toho 50 merge commitů. Větev `origin/release/10.01` nepřibrala žádný commit. Vývoj tedy dál běžel v `develop`, zatímco release větev zůstala stabilní.

Hlavní témata týdne byla čtyři: pokračující zmenšování aktivních mezer v UCV, posun UPD UI až k ostrému běhu z obrazovky, první startovací část UIR a zpřesnění továrních pravidel HAIFA.

### UCV zmenšuje aktivní mezery

V UCV pokračovala práce na místech, kde byl port technicky přítomný, ale uživatelský tok ještě neodpovídal původnímu Fenixu. Typický příklad je `Předání do USP`. V nové aplikaci bylo tlačítko i položka menu aktivní, protože oprávnění je povolovalo, ale obsluha byla prázdný stub z codegenu. Tento týden se za ně doplnil skutečný tok: načtení stavu výkazu, potvrzení opětovného předání už předaného výkazu, spuštění předávací logiky a obnovení přehledu.

Podobný typ mezery se odstranil u nastavení tiskárny. Tři UCV přehledy měly aktivní cestu pro nastavení tiskárny, ale nová aplikace ji neměla zapojenou správně. Řešení nepřidalo nový dialog, ale znovu použilo existující SPOL službu pro legacy printer setup. To je přesně ten druh reuse, který má v migračním projektu cenu: když už společná infrastruktura existuje, modul ji má konzumovat místo další lokální kopie.

Další posun nastal v přehledu výkazů od roku 2010. Cesta `Výkaz -> Tisk výkazů` už nezůstává prázdným tlačítkem. Port nově otevírá odpovídající dialog pro tisk a předává do něj data tak, aby tiskový buffer nedostal prázdný seznam ukazatelů. Není to tvrzení, že celá oblast reportů je definitivně dopracovaná. Znamená to ale, že další viditelná uživatelská cesta má konkrétní implementaci a testy.

Vedle toho se opravily i menší paritní vady, které jsou pro uživatele méně nápadné, ale pro správnost dat důležité. Při sestavení za více vlastníků se druh organizace nově řeší pro každého vlastníka zvlášť, ne podle jednoho vybraného vlastníka v shellu. U definice vazeb se doplnilo přesnější hlášení chyb při uložení. A u jedné číselné vazby se dorovnávalo chování, kde legacy počítá z už naformátovaných hodnot, ne z původních desetinných čísel.

UCV se tím posouvá k finálnímu testování. Je ale přesnější říct, že se zmenšuje a zpřesňuje zbytková plocha. Pořád zůstávají otevřené části kolem konsolidačních řádků, některých tiskových a akčních cest z přehledu a dalších live golden ověření nad vhodnou databází.

### Block-H má tvrdší důkaz a přesnější problém

Samostatně stojí za zmínku práce kolem výkazu block-H. Tým vytvořil legacy referenci pro velký tiskový výstup: původní aplikace pro daný případ vyrobila 4514 řádků na 74 stranách. Následné živé ověření v NEO ukázalo důležitou korekci staršího předpokladu.

Problém není v tom, že by chybělo nasazení Crystal workeru. Crystal zde slouží jen k tisku hotového textu. Původní aplikace skládá pevně formátované řádky sama ve VB6 a NEO zatím pro tuto rodinu vytváří jen 27 řádků na jednu stránku. Hodnoty sedí, ale struktura výstupu ne.

To je dobrý příklad užitečného negativního důkazu. Místo obecného tvrzení "report nesedí" je teď jasnější, co přesně chybí: port tiskové třídy pro rodinu F40, která skládá textový obsah výkazu.

### UPD se dostalo k ostrému běhu z UI

UPD pokračovalo ve čtvrté fázi práce na uživatelském rozhraní. V předchozích vlnách se formuláře postupně srovnávaly s legacy chováním, doplňovaly se chybějící vstupy, opravovala se geometrie, menu, mikronápověda, ukládání pozice okna a slepá tlačítka. Tento týden se tento proud práce dostal k nejdůležitější otázce: umí operátor spustit upgrade databáze z UI?

Odpověď je pro testovací kopii ano. Upgrade byl spuštěn z přihlášeného UI nad databází `fenix_upd_c_scratch`, tedy nad zahoditelnou kopií, kterou bezpečnostní brána povoluje. Databáze se posunula z verze 1001000 na 1011000, výsledek běhu byl `AllOk` a aplikace po doběhu neztratila relaci.

Zároveň zůstává důležitá hranice důkazu. Tento výsledek neříká, že se má upgrade pouštět nad produkční databází. Naopak potvrzuje, že port rozlišuje posturu běhu, kontroluje název cílové databáze a odmítá nebezpečné cíle. Dočasná scratch brána zůstává součástí ochrany právě proto, že upgrade je nevratná operace.

Praktický význam je velký. UPD už není jen engine, který se dá spustit z testu. Operátorská cesta v aplikaci skutečně vede k práci enginu a přitom si nese pojistky proti nechtěnému spuštění.

### UIR dostává první startovací část

UIR se v tomto týdnu posunulo z plánovací a řídicí roviny do prvního skutečného běžícího základu modulu. Vznikl MDI shell se správným titulkem `Územně identifikační registr`, rozměry, stavovým řádkem, hodinami a odlišením samostatného spuštění od spuštění pod Společným spouštěčem.

Navázala vrstva pro session, přihlášení, oprávnění a runtime kontext. Důležitý detail je, že se nešlo cestou "raději někomu nějaké právo dáme, aby se aplikace otevřela". U UIR je právo s kódem `1` reálné oprávnění, takže by jeho vyrobení jako fallbacku tiše otevřelo části menu i uživatelům, kteří je mít nemají. Port proto v nejasném stavu degraduje přísněji, ne volněji.

Další částí byl start databáze a pomocných struktur. UIR si při startu připravuje pomocné tabulky pro tisk v lokální MDB relaci a řeší také GIS/KZR vazby. V nové implementaci vznikly příslušné bootstrap třídy a testy, ale některé body zůstávají záměrně fail-closed, protože vyžadují rozhodnutí vlastníka nebo pozdější moduly.

Viditelným výsledkem je základní menu. Port přenesl strom menu z legacy `frmLogo`, včetně gatingu podle rolí a práv, a doložil živým menu-click gate, že menu v hlavním okně reaguje na skutečný klik Windows zprávou, ne jen na testové volání handleru. Zůstává nepokrytá část, která potřebuje první skutečný MDI child s vlastním menu; ten má přijít až v další fázi. I tady tedy platí opatrné čtení: startovací shell je reálný, ale UIR jako celek je teprve na začátku migrace.

### Release 10.01 zůstal mimo změny

Do `develop` se dostal formální sign-off, že větev `release/10.01` zůstala bez regresních změn. Release větev je zamrzlá na stavu z 30. června 2026 a v tomto týdnu nepřibrala žádný vlastní commit.

Navzdory opatrné formulaci v samotném sign-offu plné E2E testy nakonec spuštěné byly a prošly na 100 %. To je silnější závěr než pouhé konstatování, že se v release větvi nezměnil zdrojový kód: release 10.01 zůstal mimo vývojové zásahy a zároveň prošel plným koncovým ověřením.

### HAIFA zpřesňuje pravidla práce

Tento týden přinesl i několik pravidel, která nejsou vidět v aplikaci, ale zlepšují způsob migrace. Cross-module ledger řeší situaci, kdy migrace jednoho modulu musí napsat kód do stromu jiného modulu, protože tam podle legacy domény patří. Typicky UCV vytvořilo části v RUV a UCA ještě před tím, než začala migrace těchto modulů, protože na nich samo závisí. Až se bude připravovat implementační plán a samotná migrace RUV a UCA, musí tyto předem připravené části absorbovat, navázat na ně a nerozbít je. Ledger teď říká, kdo kód vytvořil, kde leží, jaký kontrakt nesmí pozdější migrace rozbít a na co má cílový modul navázat.

Přibyly také guardraily pro slepá tlačítka a chování formulářů. První pravidlo říká, že aktivní UI prvek nesmí jen tiše nic nedělat. Pokud je v legacy aktivní a něco provádí, musí mít v portu implementaci, nebo musí být jmenovitě zaevidovaný důvod, proč ještě ne. Druhé pravidlo brání tomu, aby se formuláře po migraci tvářily hotově, ale otevíraly se jinak: na jiné pozici, s rozbitou geometrií nebo ve špatném režimu okna. U formuláře je totiž důležité i to, jestli má být podle legacy modální dialog, nebo MDI child vložený do hlavního okna.

Tohle je pro HAIFA stejně důležité jako samotný kód. Projekt se učí, jak zachytit znalost z jednoho modulu tak, aby byla použitelná v dalším, a jak zabránit tomu, aby agenti opakovali stejnou chybu pod jiným názvem.

### Význam týdne

Třiadvacátý týden ukázal posun od "máme další kus portu" k "víme, jak se ten kus chová při kliknutí, nad živou testovací databází a proti legacy důkazu". UCV zmenšilo několik aktivních mezer, UPD prošlo ostrým upgradem z uživatelského rozhraní, UIR dostalo první běžící shell a HAIFA přidala pravidla, která pomáhají udržet práci napříč moduly konzistentní.

Nejdůležitější je opatrnost v závěrech. UCV není hotové, UPD není pozvánka k běhu nad produkcí a UIR není kompletní modul. Ale všechny tři oblasti mají po tomto týdnu silnější důkaz než před týdnem. To je u migrace velkého ERP systému podstatnější než rychlé odškrtávání položek.
