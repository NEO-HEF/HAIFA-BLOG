---
title: "Týden dvaadvacátý - UCV míří k finálnímu testování, UPD prokazuje upgrade a UIR dostává orchestraci"
date: 2026-08-09
week: "Týden dvaadvacátý"
period: "03. 08. 2026 - 09. 08. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w32
summary: "Dvaadvacátý týden posunul UCV směrem k finálnímu testování, přinesl skutečný live důkaz plného UPD upgradu včetně převodu hesel, posunul UPD UI do použitelné zpětné vazby, připravil orchestraci UIR a zpřesnil bezpečnou práci s testovacími daty."
---

## Shrnutí pro netechnické čtenáře

Dvaadvacátý týden projektu NEO_HEF nebyl o jednom velkém viditelném přepnutí. Byl hlavně o tom, že se několik důležitých částí posunulo z fáze "máme implementaci" do fáze "umíme doložit, co opravdu funguje, kde jsou hranice a co ještě zbývá".

Největší objem práce proběhl v modulu UCV. Bylo to další srpnové kolo práce na reportech, výpisu událostí, uživatelských sestavách, tisku kontrolní sestavy a sdílených technických částech pro práci s účty vlastníka. UCV se tím posouvá směrem k finálnímu testování, ale ještě v něm není. Důležité je, že se přitom nešlo jen po odškrtávání položek. Podrobná kontrola proti původní aplikaci objevila několik starších předpokladů, které už neplatily nebo byly příliš zjednodušené. Výsledkem je přesnější mapa rizik a méně falešného pocitu hotovosti.

Modul UPD, který řeší upgrade databáze, poprvé prošel skutečným plným upgradem na zahoditelné živé databázi. Upgrade doběhl do očekávaného cílového stavu, převedl hesla uživatelů do nové podoby a po doběhu šlo ověřit přihlášení přes běžnou autentizační cestu. Stejně důležité je, že tým jasně popsal, co tento důkaz ještě nepokrývá. To je pro projekt zdravé: místo obecného tvrzení "hotovo" vznikl přesný důkaz s přesnými hranicemi.

UPD se zároveň posunulo i v uživatelském rozhraní. První sada formulářů už není jen napojená na technický engine na pozadí, ale po kliknutí operátorovi ukazuje výsledek. To je praktický krok od interní funkčnosti směrem k použitelnému pracovnímu nástroji.

UIR, tedy oblast územní identifikace, se posunulo z hotového implementačního plánu k řízené orchestraci práce. Plán už není jen dlouhý seznam úkolů. Má návaznosti, kontroly, rozdělení do běhů a strojově ověřitelnou strukturu, podle které mohou agenti postupovat predikovatelněji.

Vedle hlavních modulů se posílila i provozní vrstva projektu. Instalátor dostal neinteraktivní režim hlavně proto, aby se instalace NEO modulů mohla stát součástí instalace legacy Fenixu a od verze 10.21 se tím zjednodušila distribuce klientům. Anonymizace databází se po několika iteracích dostala do stavu, kdy ji nezávislý auditní skill vyhodnotil jako přijatelnou.

## Co se stalo

V týdnu od 3. do 9. srpna 2026 přibylo na větvi `origin/develop` 191 commitů, z toho 49 merge commitů. Větev `origin/release/10.01` nepřibrala žádný nový commit. Hlavní pohyb tedy dál probíhal ve vývojové větvi, zatímco release větev zůstala stabilní.

Týden měl několik silných témat: další posun UCV směrem k finálnímu testování, reálné ověření plného upgradu UPD, první vlna operátorského UI pro UPD, převod plánu UIR do orchestrace, tichý režim instalátoru a zpřísnění anonymizace testovacích dat.

### UCV se posouvá k finálnímu testování a zpřesňuje mapu rizik

UCV bylo největším zdrojem změn tohoto týdne. V dalším srpnovém kole prošlo do vývojové větve 18 pull requestů. Testovací bilance hlavní sady `Fenix.UCV.Tests` po tomto kole ukazovala 5483 úspěšných testů, žádné selhání a 19 přeskočených testů. Po přidání testů kolem tisku kontrolní sestavy se sada rozrostla na 5566 úspěšných testů, opět bez selhání.

Viditelný posun nastal ve "Výpisu událostí". Vznikl sdílený prohlížeč událostí, který používají UCV i UIR. Pro uživatele to znamená, že cesta k historickým událostem už není jen technicky přítomná v kódu, ale má konkrétní formulářovou podobu a byla ověřena nad testovací databází.

Další důležitou oblastí byl port komponenty `cUcrKonto`. Ukázalo se, že představa "jedna komponenta vyřeší všechny zbylé případy" byla příliš optimistická. Přenos účtů vlastníka byl důležitý, ale zároveň odhalil, že část backlogu stojí na jemnějších rozdílech v podmínkách, číselnících, vlastnických osách a dostupnosti formulářů. Praktický výsledek je lepší než rychlé odškrtnutí: projekt má přesnější seznam toho, co už má důkaz, co je dosažitelné a co je ještě blokované.

V reportech přibylo několik konkrétních posunů. Cesta `Výstup` ve formuláři reportů získala další napojení pro vybrané sestavy, včetně voleb součtů, rozvržení a automatického předvýběru v případech, kde to odpovídá legacy chování. To ale neznamená, že je celá oblast reportů definitivně hotová. Právě u reportů se často až pozdější testování ukáže, že ještě vyplula na povrch další kombinace dat, období nebo nastavení. U uživatelských sestav se opravila nenápadná, ale významná datová chyba: při vkládání řádků a sloupců se musely správně posouvat a přečíslovávat odkazy. Bez toho by sestava mohla dávat chybné výsledky, aniž by aplikace nutně spadla.

Samostatně se posunul také tisk kontrolní sestavy `cUCV_KontSest`. Tady šlo o typ práce, která nebývá navenek atraktivní, ale pro paritu s původním systémem je zásadní: tisková cesta musí používat správná data, správné větvení a správnou existující tiskovou infrastrukturu.

Důležitou hodnotu měl audit slepých a blokovaných cest. Tým našel případy, kdy byl backlog označený jako blokovaný, ale po změnách z předchozích týdnů už blokace neplatila. Naopak se potvrdily oblasti, které opravdu vyžadují rozhodnutí vlastníka, destruktivní legacy ověření nebo živé paritní prostředí. Tento typ úklidu je pro migraci důležitý, protože odděluje skutečné riziko od historických poznámek, které už přestaly odpovídat realitě.

UCV tedy není možné popsat jednou větou jako "hotové". Přesnější je říct, že se zpřesnila zbytková plocha: část uživatelských cest má silnější důkaz, část technických předpokladů byla opravena a část zbývajících bodů je lépe pojmenovaná. Modul se tím přibližuje k finálnímu testování, ale ještě před sebou má další kola ověřování.

### UPD poprvé prošlo skutečným plným upgradem

UPD v tomto týdnu udělalo kvalitativně důležitý krok. Plný upgrade byl spuštěn proti zahoditelné databázi `fenix_upd_final_scratch` a doběhl s výsledkem `PASS`. Databáze se posunula z verze 1001000 na 1011000, upgrade zapsal auditní stopu úspěšného dokončení a přihlášení uživatele `admin` po doběhu prošlo běžnou produkční autentizační cestou.

Součástí ověření byl i hromadný převod uživatelských hesel. V databázi se objevilo 58 záznamů v nové cílové oblasti hesel: 57 uživatelů a jedna konfigurační položka. Jeden nepřevedený uživatel neměl zdrojový záznam ve staré tabulce, takže nešlo o selhání převodu. To je přesně ten rozdíl, který má u migračního projektu cenu: nejen vědět, že výsledek sedí, ale rozlišit opravdovou chybu od očekávané absence vstupu.

Tým současně jasně popsal hranice důkazu. Ověření nebylo byte-to-byte porovnáním celého protokolu, nepokrývalo větev s dočasnými hesly, nezkoušelo přihlášení všech uživatelů a neprokazovalo idempotenci opakovaného běhu nad stejnou databází. To neoslabuje výsledek. Naopak to z něj dělá použitelný technický důkaz, protože je zřejmé, co už potvrzuje a co musí přijít v dalších ověřeních.

Pro projekt je to velký rozdíl proti suchému testu nebo dílčímu ověření jedné migrace. UPD teď má doložený běh celého upgradu na reálném tvaru databáze, včetně bezpečnostně citlivé části kolem hesel.

### UPD UI začíná ukazovat výsledky operátorovi

Vedle upgradu samotného se posunulo také uživatelské rozhraní UPD. První vlna čtvrté fáze UI napojila čtyři formuláře na živý engine tak, aby operátor po kliknutí viděl výsledek. Tím se mění charakter práce: už nejde jen o to, že existuje engine a testy na pozadí. Začíná vznikat nástroj, se kterým může pracovat člověk v běžném toku aplikace.

Součástí práce bylo i bezpečnější zacházení s režimem spuštění. UI nesmí omylem spustit skutečnou operaci tam, kde má být jen náhled nebo kontrola. Proto vznikl bezpečnější způsob předávání takzvané "posture", tedy záměru běhu. Prakticky to znamená, že formulář a engine si lépe rozumějí v tom, jestli se má něco skutečně provést, nebo jen vyhodnotit a ukázat.

Tento posun je méně viditelný než finální obrazovka, ale pro provozní použitelnost je zásadní. Upgrade databáze je destruktivní operace. Každý krok, který snižuje riziko nechtěného spuštění a současně dává operátorovi čitelnou zpětnou vazbu, zvyšuje důvěryhodnost celého modulu.

### UIR dostalo proveditelnou orchestraci

UIR mělo v předchozím týdnu dokončený implementační plán. Tento týden se nad ním postavila orchestrace. Plán obsahuje 34 kroků a 159 úkolů. Orchestrace nad nimi vytvořila graf závislostí s 2812 hranami a 16 vrstvami, rozdělila implementační práci do 11 řízených běhů a ověřila, že se úkoly neduplikují ani neztrácejí.

To je pro HAIFA důležitý posun. Cílem týmu není jen ručně migrovat jeden modul, ale vytvořit řízený způsob práce s AI agenty. UIR tím získalo něco jako výrobní postup: jasně dané vstupy, pořadí, brány, validační politiku a kontrolu návazností.

Zároveň vznikla obecnější dokumentace a aparát pro tvorbu orchestrace i mimo UIR. V ověření se našly a opravily chyby v samotném orchesračním přístupu, například kolem konfigurace, detekce zaseknutých běhů a čekání na validační signály. To je dobrý příklad práce, která zlepšuje nejen jeden modul, ale i tovární metodu HAIFA.

### Release, instalátor a bezpečná testovací data

Tichý režim instalátoru vznikl hlavně proto, aby se instalace NEO modulů mohla přidat jako krok do instalace legacy Fenixu. Od verze 10.21 se tím má zjednodušit distribuce klientům: legacy instalace spustí i instalaci nových technologických modulů a uživatel ani konzultant nemusí řešit samostatný ruční krok.

Instalátor proto umí běžet bez interaktivního UI v režimech `install`, `uninstall` a `list`, vrací stabilní exit kódy a umí vypsat strojově čitelný JSON souhrn. Důležité je i to, že instalace a odinstalace mají být opakovatelné a bezpečné pro automatizované skripty. Ruční klikání v instalátoru je přijatelné pro vývojové ověření. Pro produktovou distribuci přes instalační tok Fenixu je potřeba příkazová forma s jasnými výsledky.

Dalším podpůrným, ale důležitým tématem byla anonymizace databází. Nové úpravy reagovaly na GDPR audit a posunuly maskování z jednoduchého pravidla "podle názvu sloupce" více k pravidlu "podle obsahu". To je zásadní rozdíl. Citlivý údaj může být uložený i ve sloupci, který se nejmenuje podezřele. Naopak ne každý podezřele vypadající název znamená skutečný nález.

Po několika iteracích je anonymizační skill pro databázi Fenixu ve stavu, kdy jeho výstup prošel nezávislým auditním skillem bez kritických a vysoce závažných nálezů. Detailnější rozbor je v samostatném článku <a href="{{ '/posts/aktualni-stav-skillu-pro-anonymizaci-databaze/' | url }}">Aktuální stav skillu pro anonymizaci databáze</a>. Pro týdenní přehled je důležité hlavně to, že testovací databáze má být dost realistická, aby odhalila chyby migrace, ale zároveň nesmí zbytečně nést osobní údaje.

Menší, ale užitečný posun nastal i v RZP. Při selhání tisku sestavy kvůli nenainstalovaným runtime knihovnám Crystal Reports se aplikace nemá zhroutit, ale ukázat neškodný dialog. Takové změny nevypadají dramaticky, ale zvyšují stabilitu při práci s reporty a tiskem, což je v ERP systému běžná denní operace.

### Release 10.01 zůstává stabilní

Větev `release/10.01` v tomto týdnu nepřibrala žádný commit. Vývoj se soustředil do `develop`, kde se dokončovaly a ověřovaly změny pro další migrační postup. Stabilita release větve je v tomto kontextu dobrá zpráva: experimenty, ověřování a rozsáhlejší posuny zůstávají oddělené od větve určené pro vydání.

### Význam týdne

Dvaadvacátý týden ukazuje posun HAIFA od výkonu k řízení. Nešlo jen o počet commitů nebo počet položek v backlogu. Důležitější bylo, že tým opakovaně převáděl tvrzení do důkazů: UCV přes live ověření a paritní testy, UPD přes skutečný plný upgrade, UIR přes strojově ověřenou orchestraci, instalátor přes neinteraktivní režim a anonymizaci přes audit citlivých dat.

To je přesně směr, který NEO_HEF potřebuje. Migrace velkého ERP systému nemůže stát na dojmu, že "to vypadá hotově". Musí být vidět, co bylo ověřeno, jakým způsobem, na jakých datech a s jakými omezeními. Tento týden přinesl méně efektních sloganů a více takových důkazů.
