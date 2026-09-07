---
title: "Týden šestadvacátý - UCV odstraňuje poslední zástupné cesty, UPD se napojuje na automatické aktualizace a UIR staví adresní objekty"
date: 2026-09-06
week: "Týden šestadvacátý"
period: "31. 08. 2026 - 06. 09. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w36
summary: "Šestadvacátý týden odstranil poslední známé zástupné cesty UCV, napojil UPD na neobsluhovaný běh Automatických aktualizací a přenesl do UIR rozsáhlou oblast adresních objektů."
---

## Shrnutí pro netechnické čtenáře

Šestadvacátý týden projektu NEO_HEF přinesl výrazný posun ve třech různých oblastech. UCV pokračovalo v uzavírání posledních známých implementačních mezer, UPD se napojilo na Automatické aktualizace a UIR dostalo rozsáhlý základ pro práci s adresními objekty. Každý z modulů je v jiné fázi, a proto se u každého liší i to, co lze po tomto týdnu považovat za doložený výsledek.

Nejdál se v tomto směru posunulo UCV. Tým prošel zbývající aktivní místa, kde aplikace ještě mohla uživateli oznámit, že část původního chování není převedená. Doplnil mimo jiné příjem historických výkazů, kontroly počátečních stavů Rozvahy a Přílohy, výstup JASÚ, sestavu R63, přehledové tisky, kontrolu součtových řádků a další obsluhy. V přehledu výkazů před rokem 2010 už proto žádná běžně dostupná volba nekončí pouze oznámením, že její původní funkce ještě nebyla převedena.

To ale ještě není totéž co schválení UCV k vydání. Běžná testovací sada se třikrát za sebou uzavřela s 11 117 úspěšnými testy, žádným selháním a 21 přeskočenými případy. Další práce se přesouvá hlavně k živému porovnávání s původní aplikací a k uzavírání zbývajících podmínek pro vydání.

UPD se napojilo na Automatické aktualizace. Modul už umí v neobsluhovaném režimu převzít údaje o relaci, připojit se, průběžně posílat stav zpět službě a automaticky spustit stejný upgrade, který byl dosud dostupný jen interaktivně. Chyby se v tomto režimu nezastaví na dialogu, který by na serveru neměl kdo potvrdit, ale zapíší se do protokolu a proces vrátí návratový kód. Plný živý běh proti určené obnovitelné databázi však ještě zbývá, takže jde o dokončené propojení s otevřenou provozní bránou.

UIR přeneslo rozsáhlou oblast adresních objektů: datové vrstvy, hledání, pořízení a změny objektu, historii, hromadné operace i přehled dalších adres stejného domu. Jednotlivé části mají vlastní testy a společně vytvářejí základ, na který budou navazovat další kroky integrace, uživatelského zapojení a výsledného sign-offu. Odpovídá to způsobu, jakým migrace UIR vzniká: po ucelených vrstvách, které se postupně skládají do celého modulu.

Zlepšilo se také společné přihlašování. Port nově věrněji zachází s jednorázovým heslem, vynucenou změnou hesla a upozorněním na blížící se konec jeho platnosti. Vedle hlavních témat týdne přibylo i drobnější doplnění: SPOL se naučilo číst poštovní heslo uložené původním Fenixem a méně používaná volba „Elektronická pošta“ se zapojila do tiskových cest RZP.

## Co se stalo

V týdnu od 31. srpna do 6. září 2026 přibylo na větvi `origin/develop` 309 commitů, z toho 82 merge commitů. Větev `origin/release/10.01` dostala dvě cílené změny: úklid po dřívějším backportu a opravu balení doprovodných Crystal knihoven. Hlavní vývoj pokračoval v UCV, UPD, UIR, společné přihlašovací vrstvě, RZP a dokumentaci distribučního procesu.

### UCV odstraňuje poslední známé hlášky o chybějícím portu

Minulý týden uzavřel základní implementaci historických výkazů před rokem 2010. Následná inventura ale opravila příliš optimistický předpoklad, že v této části zbývá už jen výstup JASÚ. V aktivních obsluhách se našlo čtrnáct míst se zástupnou hláškou o nedokončeném převodu. Tým je proto nebral jako jeden anonymní zbytek, ale dohledal ke každému původní rutinu, dosažitelnost a skutečný rozsah.

Během týdne přistál výstup JASÚ včetně čtení dat, rodinových emitorů, souborů organizací, manifestu, tisku a odeslání. Doplnily se kontroly součtových řádků, příjem výkazů ARIS a JASÚ, kontroly počátečních stavů Rozvahy a Přílohy, kontrola podle MŠMT, sumář části X výkazu 40U, sestava R63 a tisk rekapitulace účetních výkazů. Další opravy se týkaly například výběru povinných nepředaných výkazů, historických dialogů, tolerancí vazeb, vazeb mezi výkazy, serverového času ukládaných příznaků a přesných titulků hlášek.

Výsledkem je implementačně významná hranice: všech osm položek, na které se rozpadl poslední rozbor aktivních mezer, je v `develop` a pomocná hláška o chybějícím portu už na historickém přehledu nemá produkční cestu. Neznamená to, že UCV nemá žádný otevřený bod. Znamená to, že známé aktivní funkce už nejsou nahrazené pouhým oznámením „tady port chybí“ a další práce se může soustředit na paritu, živé ověření a vady odhalené při používání.

### Živé ověření JASÚ našlo vady tam, kde samotný emitor nestačí

Historický výstup JASÚ dostal i živý test nad dostupnými daty. Samotné emitory se proti referenčním otiskům chovaly správně, ale běh odhalil tři vady na čtecí straně. To je důležitý rozdíl: správný převod dat do výstupního formátu nepomůže, pokud aplikace předtím načte nesprávnou variantu hodnot nebo ji získá nevhodným databázovým převodem.

Podobně se zpřesnilo ověření textových částí Přílohy. K dřívějším referenčním otiskům přibyl konzumující test, který skutečně projde produkční cestou pro konkrétní historický slot. QA zároveň uložilo širší sadu referenčních artefaktů pro výkazy, roční sestavy a definice vazeb. Referenční obrázek nebo text tak není jen přílohou dokumentace; stává se vstupem opakovatelného srovnání nové a původní aplikace.

Hlavní jednotková sada UCV byla po sloučení změn spuštěna třikrát za sebou. Ve všech třech bězích našla 11 138 případů: 11 117 prošlo, žádný neselhal a 21 bylo přeskočeno.

### UPD umí přijmout neobsluhovaný upgrade z Automatických aktualizací

Dosavadní živé ověřování UPD začínalo přímo v jeho uživatelském rozhraní. Pro reálný provoz ale existuje ještě jiná cesta: služba Automatických aktualizací musí modul spustit bez člověka, předat mu relaci a průběžně získávat informaci o postupu.

Tento řetězec se během týdne skládal po jednotlivých článcích. UPD umí převzít popis relace z bezpečného úložiště společné vrstvy, načíst předané připojení a otevřít potřebný databázový kontext. Přes pojmenovanou rouru posílá službě rámce s komentářem a procentem dokončení. Následně skrytě vyvolá stejnou potvrzovací formu a stejný upgrade engine jako interaktivní cesta, ale bez potvrzovacích dialogů, které by neobsluhovaný běh zablokovaly.

Zvláštní pozornost dostaly chybové větve. V interaktivním režimu zůstává dialog, jak ho zná původní aplikace. V auto-run režimu se důvod zapisuje do protokolu a proces končí s návratovým kódem. Validace přitom našla několik míst, kde původní implementace mohla pravdivost důkazu jen předstírat: například zápis do protokolu mohl selhat, ale testovací povrch přesto tvrdil úspěch, nebo se stejná chybová věta zapisovala dvakrát. Opravy zachovaly tiché chování starších volajících, ale novému chybovému kanálu dávají skutečnou odpověď, zda zápis proběhl.

Automatický řetězec je zapojený a pokrytý testy, otevřený však zůstává ruční plný běh vlastníka proti určené obnovitelné databázi.

### UIR staví rozsáhlý základ adresních objektů

Krok S16 přinesl do UIR podstatnou část práce s adresními objekty. Vznikly repozitáře a mapování pro současná i historická data, vyhledávací a editační formuláře, prohlížení historie, hromadné změny, další hromadné operace a dialog dalších adres stejného domu. Živé schéma potvrdilo očekávané struktury tří klíčových tabulek včetně rozdílu šířky jednoho historického pole, který by se při mechanickém sjednocení snadno ztratil.

Jednotlivé části už mají celkem rozsáhlé testy a agregační sada UIR skončila na 1 561 úspěšných testech. Mutační ověření navíc záměrně vneslo deset různých chyb a všechny byly odpovídajícími testy zachyceny. Krok je vedený jako implementovaný a čekající na sign-off; další integrace do kompletních uživatelských cest bude pokračovat v navazujících etapách migrace.

Rozsah týdne je proto potřeba číst jako významný implementační základ, nikoli jako dokončení celé oblasti UIR. Datové operace, formuláře a pravidla adresních objektů už mají konkrétní podobu a ověření. Jejich zapojování do dalších částí aplikace bude pokračovat spolu s tím, jak budou vznikat související kroky modulu.

Dvě další hranice jsou záměrné. Přenos do GIS skončil průzkumem a čeká na rozhodnutí vlastníka, zda funkci zachovat, nebo vyřadit. Výběr adres z registru RÚIAN závisí na pozdějších krocích pro konektor a související formuláře. Tiskové reporty adresních objektů patří do samostatného kroku S26.

### Přihlašovací vrstva dorovnává jednorázová hesla a expiraci

Společná klientská vrstva doplnila několik navazujících větví heslové politiky. Jednorázové heslo se rozpozná i v konfiguraci, kde je obecná politika dočasných hesel vypnutá. Pokud stav vyžaduje změnu, aplikace otevře skutečný dialog změny hesla a po úspěchu správně zneplatní jednorázový příznak. Stejná pravidla se nově uplatní i ve zjednodušené přihlašovací větvi.

Uživatel, jehož běžnému heslu se blíží konec platnosti, dostane možnost přejít rovnou ke změně. Testy zároveň hlídají, aby se toto upozornění nezobrazovalo ve stavu jednorázového hesla a aby port nevymyslel chování, které původní aplikace nemá. Jde o zdánlivě malé obrazovky, ale ve skutečnosti o stavový automat s dopadem na možnost přihlášení. Proto se jednotlivé větve převádějí a ověřují odděleně.

### Drobnější doplnění: elektronická pošta z RZP

Na okraji hlavních prací se podařilo dokončit také méně používanou volbu „Elektronická pošta“ v tiskovém dialogu RZP. Nejde o klíčovou funkci modulu, ale o praktické dorovnání jedné z vedlejších možností výstupu.

Ve SPOL přibyla kompatibilní vrstva pro dešifrování hesla z poštovní konfigurace původního Fenixu. RZP pak dostalo potřebné zapojení společné odesílací služby do tiskových cest. Po doplnění obou částí dorazila z verze 10.11 pošta jak z konfiguračního formuláře sestavy, tak z tisku číselníku.

### Distribuce získává přesnější diagnózu chování na serveru

Průzkum instalace MSIX na Windows Serveru opravil dřívější předpoklad, že systém neumí aplikaci aktivovat. Pokusný Launcher dokázal modul spustit, když byla vyřazena kontrola `PackageStatus.VerifyIsOK`. Právě tato kontrola na ověřovaném Windows Serveru 2022 vrátila neúspěch, ačkoli balíček byl nalezen a aplikaci bylo možné aktivovat.

Produkční stav se tím nezměnil. Kontrola je součástí Launcheru a rozhodnutí o jejím chování patří jeho vlastníkovi. Výsledek ale zužuje problém: nejde obecně o neschopnost serveru spustit MSIX aplikaci. Samostatně zůstává otevřená cesta pro neinteraktivní spuštění instalátoru. Dokumentace zároveň potvrdila, že instalátor už umí uložit strojově čitelný JSON souhrn na zadanou cestu, což je pro serverový běh vhodnější než spoléhání na standardní výstup.

### Význam týdne

Šestadvacátý týden ukázal několik podob postupné migrace. UCV se po rozsáhlém doplňování funkcí přesouvá stále více k živému porovnávání a uzavírání paritních důkazů. UIR skládá další velkou doménovou oblast z datových vrstev, formulářů a pravidel. UPD propojuje již vytvořený upgrade engine s provozním světem Automatických aktualizací.

Týden tak pokračoval v dlouhodobém způsobu práce HAIFA: jednotlivé vrstvy vznikají postupně a každá se ověřuje způsobem odpovídajícím její fázi. Důležité tentokrát bylo hlavně dokončení známých implementačních cest UCV, vznik velké části adresních objektů UIR a propojení UPD s Automatickými aktualizacemi.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
