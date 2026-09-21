---
title: "Týden osmadvacátý - UPD staví databázi až k administrátorovi, UCV otevírá starší tisky a QA rozšiřuje živé testy"
date: 2026-09-20
week: "Týden osmadvacátý"
period: "14. 09. 2026 - 20. 09. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w38
summary: "Osmadvacátý týden propojil pět fází tvorby databáze UPD až k administrátorovi, výrazně rozšířil skutečnou sazbu výkazů UCV a proměnil nové E2E sady v konkrétní opravy startu pod Launcherem i dalších provozních cest."
---

## Shrnutí pro netechnické čtenáře

Osmadvacátý týden projektu NEO_HEF ukázal, jak se z několika samostatných technických dílů skládá použitelná provozní cesta. Nejzřetelnější je to u modulu UPD, který slouží k upgradu a servisní správě databáze. Ještě na začátku týdne uměl registrační režim `/reg` vytvoření prázdné databáze pouze nabídnout, ale vlastní proces nebyl propojený. Během týdne se podařilo zapojit všech pět hlavních fází: zrušení starých objektů, vytvoření tabulek, vytvoření pohledů, registraci úloh a založení administrátora.

Nejde zatím o potvrzení, že je UPD připravené k vydání bez dalších podmínek. Živý běh prokázal vytvoření 1128 tabulek a 57 pohledů, následná práce rozběhla všech 22 registračních příkazů a poslední fáze poprvé založila účet administrátora. Zároveň ale zůstávají otevřené servisní větve, které vydávaný změnový soubor nepoužívá, a také úplné porovnání výsledku s původním Fenixem. Tým proto uzavřel konkrétní blokátory, nikoli celý modul jedním optimistickým razítkem.

UCV, tedy modul účetních výkazů, se soustředilo na tiskovou paritu a živé ověřování. Detailní měření odhalilo, že dosavadní nová sazba se nad reálnými daty používala jen pro 8 z 3084 sestavených výkazů. Zbytek končil ve viditelném zástupném výstupu. Nová schopnostní brána už nerozhoduje pouze podle roku. Pro každý typ výkazu, rok a období ověří, zda nový motor umí všechny potřebné druhy řádků. Už samotná tato změna otevřela skutečnou sazbu pro 1183 výkazů, tedy 38,4 procenta měřeného vzorku, a tým současně doplnil všechny dříve chybějící emitory textových řádků.

Další práce v UCV mířila přímo do míst, která uživatel skutečně vidí. Aktivní plocha přestala ukazovat návrhové zástupné hodnoty a načítá skutečná data. Živé ověření editoru výkazů prošlo pořízením, zobrazením textů, kontrolou přípustných řádků i uložením vícesloupcové hodnoty zpět do databáze. Přitom našlo osm závad — od špatně otevřeného formuláře přes nefunkční ukončení až po překrytá tlačítka — a všechny byly opraveny v témže běhu.

Výrazně se rozšířilo také automatizované E2E testování, které ověřuje celé uživatelské scénáře v běžící aplikaci. Společná dávka přinesla 41 nových E2E sad pro UCV, UPD a společnou vrstvu SPOL. Jen katalog UCV nyní popisuje 394 scénářů. Vedle této vrstvy běží podstatně rozsáhlejší základna jednotkových a integračních testů: hlavní modulové sady během týdne hlásily například 12 679 testů UCV, 2521 úspěšných testů UPD a 3395 úspěšných testů UIR. E2E testy přitom nesloužily jako pasivní dokumentace: přinesly deset konkrétních nálezů do evidence. Některé z nich vedly ještě během týdne k opravám tichého startu pod Launcherem, ověřování hesla a dokončení startovního handshake. Současně se ukázalo, že dva dřívější nálezy nebyly vadou produktu, ale měřením dva týdny staré binárky. Testovací aparát proto nově kontroluje i čerstvost aplikace, kterou spouští.

Týden tak nepřinesl jen velké množství změn. Propojil implementaci, živé měření a zpětnou vazbu: nejprve se zpřesnil skutečný rozsah problému, potom vznikla oprava a nakonec důkaz, který umí příští odchylku znovu zachytit.

## Co se stalo

V týdnu od 14. do 20. září 2026 přibylo na větvi `origin/develop` 388 commitů, z toho 162 merge commitů. Největší objem práce připadl na UCV, výrazný souvislý postup ale proběhl také v UPD, společné vrstvě SPOL, automatizovaném testování, UIR a distribučním balení. Větev `origin/release/10.01` tento týden změnu nedostala.

### UPD poprvé prochází celou cestu vytvoření databáze

Tvorba prázdné databáze v režimu `/reg` je posloupnost pěti závislých fází. Na začátku týdne byly první tři části v různém stavu: rušení objektů už existovalo, vytvoření tabulek a pohledů ale zůstávalo jen popsané a uživatelská volba končila oznámením o chybějící implementaci. Tým proto nejprve propojil existující databázové vykonavatele s reálným uživatelským startem.

Živý běh nad schválenou obnovitelnou databází zrušil objekty schématu `fenix`, vytvořil 1128 tabulek včetně indexů a 57 pohledů. Druhý a třetí běh skončily stejným počtem objektů, takže se doložila opakovatelnost výsledku. Čtyři objekty se stejně jako v původní aplikaci nepodařilo zrušit kvůli zvláštním znakům v názvu. Důležitá je i hranice důkazu: zdrojový soubor UPD obsahuje méně tabulek než výchozí kopie živého schématu, takže tento krok neprohlašuje nově sestavenou databázi za úplnou kopii aktuální produkční struktury.

Čtvrtá fáze zpočátku končila na příkazu `SAU_fullreg`. Následující dvě vlny doplnily živá těla pěti registračních ramen a most, který do nich tento příkaz rozděluje. Výsledkem je průchod všech 22 příkazů `SAU_fullreg` ze vstupního souboru. Opakovaný běh nad stejnou databází už nic nezměnil, což je pro registrační operace zásadní vlastnost.

Pátá fáze doplnila založení administrátora a prvotní heslo. Živý test prošel třemi scénáři a plná jednotková sada UPD po této změně skončila s 2521 úspěšnými testy, žádným selháním a 13 přeskočenými případy. Tím se uzavřel konkrétní release blokátor: `/reg` už má živou cestu od databázového přihlášení přes stavbu a registraci až k administrátorovi.

Neznamená to, že zmizel celý backlog UPD. Pět speciálních funkcí a větev souborového úložiště byly vědomě odloženy, protože je dodávaný změnový soubor při běžném upgradu nevolá a jejich doplnění by před vydáním výrazně rozšířilo rozsah změny. Otevřené zůstávají také čtyři další bezpečnostní metody, uživatelské zápisové operace a úplné porovnání založeného administrátora s legacy výstupem. Rozhodnutí bylo záměrně úzké: dokončit nejkratší potřebnou cestu k vydání a zbylé domény vést jako samostatnou práci.

### UPD dostává i skutečný distribuční obsah

Samotný funkční kód by při instalaci nestačil. UPD potřebuje stovky vstupních souborů s definicemi tabulek, pohledů, registrací, dat a změnových skriptů. Distribuční vlna proto zapojila celý strom `Deploy` do publish výstupu a následně do MSIX balíčku.

Kontrola našla 266 distribučních souborů, z toho 123 datových souborů UNL. Všechny byly dohledány jak v publish adresáři, tak po rozbalení výsledného balíčku. Současně se hlídá, aby v kořeni zůstal jediný změnový soubor odpovídající masce `fenix*.txt`; registrační soubor musí zůstat ve vlastním podadresáři, jinak by ho původní vyhledávací pravidlo mohlo zaměnit za upgrade.

### UCV nahrazuje hrubou rokovou bránu skutečnou kontrolou schopností

Dosavadní tisk bloku H rozhodoval podle jednoduché hranice roku 2026. To bylo snadno pochopitelné, ale věcně nepřesné: některé starší výkazy používají stejné tiskové řádky jako současné a jiné naopak potřebují zvláštní emitory. Měření nad databází našlo 96 tiskových koster, 28 různých sad typů řádků a 31 typů výkazů v éře od roku 2010.

Nová brána proto čte konkrétní kostru pro kombinaci typu, roku a období. Tisk pustí jen tehdy, když motor umí každý druh řádku, který kostra vyžaduje. Když si není jistá, ponechá viditelný zástupný výstup místo toho, aby tiše vynechala část sestavy. Změna otevřela Rozvahu a Výsledovku i pro starší roky, vybrané roky Přílohy a PAP od roku 2022. Na měřených datech tím vzrostlo skutečné pokrytí z 8 na 1183 sestavených výkazů.

Současně byly doplněny emitory pro deset dříve nepodporovaných druhů textových řádků a navazující větve, které u některých typů blokovaly starší tisk. Přínos se nesmí zaměnit s hotovou bajtovou paritou všech kombinací. Brána nyní umí přesněji říci, kterou kostru motor zvládne, ale starší roky stále potřebují vlastní zachycené referenční výstupy. U některých částí Přílohy a PAP navíc zůstávají vědomé spodní hranice, protože jejich starší algoritmy dosud portované nejsou.

Právě rozpad podle schopností změnil i plánování. Původní představa „doplnit dvacet typů výkazů“ nevystihovala skutečnou strukturu práce. Desítky typů sdílejí stejné emitory a stejnou kostru, takže vhodnější jednotkou je konkrétní druh řádku doplněný živým goldenem. Tím lze odemykat celé skupiny výkazů bez kopírování podobných řešení.

### Živé běhy UCV opravují to, co statická kontrola neviděla

Aktivní plocha UCV dosud zobrazovala hodnoty vložené při návrhu formuláře — například ukázkové částky a obecné popisky. Nová implementace načítá skutečné údaje z účetních stavů, počet nezaúčtovaných dokladů, hlavičku organizace i data pro graf. Zároveň upravila rozměry grafu a velikost písma podle chování původní aplikace. Zůstává jedna popsaná grafická odchylka: použitá knihovna neumí umístit popisky výsečí vně prstence stejně jako legacy řešení.

Editor výkazů prošel živým ověřením nad obnovitelnou databází. Test skutečně pořídil výkaz SÚZ, otevřel editory Rozvahy a Přílohy, zkontroloval texty a přípustnost řádků a uložil vícesloupcovou hodnotu až do databáze. Takto vedený průchod našel osm produktových vad. Mimo jiné se při pořízení SÚZ otevíral nesprávný obecný editor, hlavička přebírala zkratku jiného řádku, čistý formulář nešel ukončit přes menu a plovoucí editor překrýval vlastní tlačítka. Všech osm nálezů bylo opraveno v rámci stejného tiketu.

Další kontrola se zaměřila na šest větví, které byly vedené jako „na dnešních datech inertní“. Přeměření ukázalo, že dvě z těchto premis už neplatí a několik položek bylo ve skutečnosti hotových dříve, než vznikl souhrnný tiket. Pět živých read-only testů nyní datové předpoklady hlídá přímo. Pokud se obsah databáze změní a dříve inertní větev začne ovlivňovat výsledek, test to oznámí místo dalšího ručního auditu.

Opravena byla také historická cesta výstupu IRES. Pro typy 69 a 62/68 původní Fenix nepřepočítává hodnoty z účetnictví, ale čte již uložený výkaz. Nová aplikace dosud používala jiný zdroj; u typu 69 tím dokonce vznikala nulová matice. Port nyní stejně jako legacy čte uložená data a zachovává správný tvar matice. Bajtové porovnání výsledného souboru a živý průchod této konkrétní změny ještě zbývají, takže výsledek je přesně označený jako opravená datová cesta, ne jako uzavřená parita celého exportu.

### E2E dávka přináší 41 sad a deset konkrétních nálezů

Společná QA vlna rozšířila E2E pokrytí UCV, UPD a SPOL. Pro UCV přibylo jedenáct nových strojově čitelných definic sad se 73 scénáři a 426 kroky, další E2E třídy a nové fixtury. Katalog UCV se rozrostl na 394 scénářů a jeho evidence mezer na 101 řádků. UPD má nyní krokové pokrytí všech sedmnácti E2E sad; automatizovaných je 59 procent. SPOL se posunul od dílčích pokusů k živým scénářům pro tichý start, hesla, tiskový dialog, průběhová okna, uživatelská nastavení, nápovědu a další společné schopnosti.

Tato vrstva doplňuje mnohem početnější jednotkové a integrační testy, které rychle ověřují jednotlivá pravidla, databázové adaptéry a vazby mezi komponentami. V průběhu týdne měla samotná sada UCV v jednom z měřených milníků 12 679 testů, UPD po doplnění administrátora vykázalo 2521 úspěšných testů a UIR po uzavření titulků hlášek 3395. E2E scénáře mají jinou roli: zvenku ověřují, že se tyto díly v sestavené aplikaci skutečně propojí do uživatelsky dosažitelného chování.

Výsledkem nebyly jen zelené reporty. Dávka založila deset nálezů do evidence. U UCV upozornila například na prázdný auditní výpis, zástupnou cestu tisku přehledu PKZ, nesázené řádky některých sestav a chování výběru SICO. U společné vrstvy zachytila nesprávné uložení aktivní plochy a chybějící auditní událost při startu.

Testy zároveň opravily vlastní metodiku. Pět scénářů heslové politiky nejprve vypadalo jako regrese produktu. Opakování nad čerstvě sestavenou aplikací ukázalo, že test spouštěl dva týdny starou binárku hostitele. Dva chybné nálezy byly staženy a nová pojistka před během porovná stáří hostitelské binárky se zdrojovými soubory. Pokud je aplikace zastaralá, test se přeskočí s jasným návodem místo toho, aby vytvořil přesvědčivý, ale falešný výsledek.

### Tichý start pod Launcherem se vrací k původnímu kontraktu

Živé scénáře SPOL odhalily několik souvisejících problémů startu pod Launcherem. Neplatný nebo chybějící session soubor nezrušil tichou cestu, ale nechal modul pokračovat se zástupným připojením. Uživatel pak dostal zavádějící chybu o ověření verze databáze místo návratu k běžnému přihlášení. Oprava nyní neplatnou relaci rozpozná a přepne se na interaktivní start stejně jako původní Fenix.

Další změny doplnily ověření hesla i na tiché cestě a opravily dokončení startovního handshake. Modul spuštěný pod Launcherem musí přes pojmenovanou rouru oznámit, že je jeho hlavní okno načtené; bez této zprávy může Launcher považovat start za nedokončený, přestože proces běží. Týden uzavřel také kolizi sdíleného registrového klíče, která při souběhu nové a původní aplikace narušovala legacy chování, a přenos voleb tisku přes hranici modulů.

Tyto opravy dobře ukazují rozdíl mezi samostatným a launcher-hosted během. Samotné otevření hlavního okna není dostatečný důkaz. Je potřeba ověřit relaci, heslo, komunikaci s Launcherem i návratovou cestu při neplatném vstupu.

### UIR sjednocuje titulky hlášek bez plošného přepisu

UIR dokončilo krok zaměřený na titulky uživatelských hlášek. Analýza rozlišila 39 skutečných volání: dvacet běžných `MsgBox` hlášek bez vlastního titulku, čtrnáct hlášek s titulkem předaným explicitně, dvě katalogová hlášení a tři případy bez legacy protějšku. Přepnuta byla pouze první skupina.

Shell UIR nyní používá ověřený legacy titulek „Územně identifikační registr“. Katalogové hlášky zůstaly beze změny, protože si správný titulek nesou samy. Regresní sada hlídá nejen nové volání společné vrstvy, ale i několik způsobů, kterými by budoucí změna mohla kontrolu obejít. Celá sada UIR po sign-offu skončila s 3395 úspěšnými testy bez selhání.

### Význam týdne

Osmadvacátý týden byl důležitý především skládáním celých toků. UPD přešlo od samostatných vykonavatelů k živé pětifázové cestě `/reg`. UCV nahradilo hrubý odhad skutečným měřením koster a schopností motoru. QA proměnila dokumentované scénáře v běhy, které našly vady produktu i vlastní chybný předpoklad o testované binárce. SPOL pak několik těchto nálezů uzavřel konkrétními opravami startu pod Launcherem.

Pro HAIFA je podstatné, že rychlost agentního vývoje byla doprovázena zpřesňováním důkazů. Tento týden několikrát ukázal, že zelený test, hotový emitor ani úspěšný build samy o sobě nestačí. Teprve když se výsledek propojí se skutečnou databází, původní aplikací, distribučním balíčkem a reálnou startovní cestou, lze přesně říci, co je hotové a co ještě zůstává před vydáním.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
