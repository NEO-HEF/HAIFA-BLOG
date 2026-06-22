---
title: "Týden patnáctý - RZP prochází paritními branami"
date: 2026-06-21
week: "Týden patnáctý"
period: "15. 06. 2026 - 21. 06. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w25
summary: "Patnáctý týden posunul RZP od pilotní použitelnosti k doložené paritě: import, rozpouštění, kopie předpisů, reporty, menu a start aplikace dostaly zelené testovací brány; zároveň se uzavřely SPOL/SPK brány pro RZP full-path scope a E2E katalog narostl na 164 scénářů."
---

## Shrnutí pro netechnické čtenáře

Patnáctý týden projektu HAIFA nebyl hlavně o tom, že by přibylo jedno nové velké okno. Byl o něčem důležitějším: tým začal tvrdě dokládat, že už hotové části RZP se opravdu chovají jako původní Fenix.

Největší posun se týkal importu účetních dat a vlastního rozpouštění nákladů a výnosů. Ještě na začátku týdne byly některé části uzavřené jen administrativně, protože čekaly na paritní důkazy proti legacy chování. V průběhu týdne ale vznikly golden baseline podklady, paritní testy a živé E2E běhy, takže krok RZP pro import a rozpouštění mohl přejít do stavu skutečně dokončeno.

Podobně se dotahovalo kopírování rozpouštěcích předpisů. To je na první pohled nenápadná funkce, ale v praxi sahá do dimenzí, účtů, období, stupňů a pravidel, kdy se má něco jen přesně zkopírovat a kdy se má účet přemapovat podle aktuální definice. Právě takové rozdíly rozhodují o tom, jestli uživatel po migraci dostane stejný výsledek.

Výrazně posílilo také testování. E2E katalog RZP má nově 164 scénářů, z toho 86 implementovaných. Přibyly datově řízené testy tiskových sestav, testy importu, rozpouštění, číselníků i nastavení a také stabilnější robotický tester pro ovládání legacy i nové aplikace.

Důležitá byla i společná vrstva. SPOL a SPK uzavřely finální testovací a kompatibilitní brány pro rozsah potřebný pro RZP. Prakticky to znamená, že RZP nestojí jen na vlastním kódu, ale i na ověřeném přihlášení, databázovém runtime, sdílených dialogách, kompatibilitních kontraktech a testech okolo společných služeb.

Celkově byl týden o přechodu od „funguje nám to" k „umíme doložit, proč tomu věříme". To je pro migraci ERP systému zásadní rozdíl.

## Co se stalo

V týdnu od 15. do 21. června 2026 přibylo do větve `develop` celkem 37 změn. Většina z nich se točila kolem RZP, ale dopad týdne je širší: vedle funkcí samotného modulu se uzavíraly i testovací a kompatibilitní brány ve sdílených vrstvách.

### Import a rozpouštění RZP prošly přes paritní důkazy

Krok RZP-S03, tedy import účetních dat a rozpouštění, se nejdřív uzavíral opatrně jako `DONE_PENDING_PARITY`. To byl poctivý stav: implementace a unit testy byly hotové, ale chyběl ještě důkaz proti legacy baseline.

Tento týden se právě tenhle dluh dohnal v RZP-S06. Tým připravil golden fixtures pro import a distribuci, doplnil katalog paritních baseline, napsal paritní testy pro import, kontrolu a rozpouštění a rozběhl živé E2E scénáře nad aplikací. Přitom se odhalil konkrétní problém: importní obrazovka defaultně vybírala jinou definici než legacy pravidlo podle aktuálního roku. Po opravě se importní E2E sada dostala na zelený stav.

Výsledkem je, že S03 už není „hotovo s poznámkou". Import, kontrola, rozpouštění, mazací guardy a UI řetězec mají explicitní testovací krytí a dokumentované uzavření. Finální konsolidovaný běh pro RZP oblasti parity, startup, recepty, distribuci, import, reporty, master-data a číselníky uvádí 761 úspěšných testů, 3 záměrné skipy a žádné selhání.

### Kopírování rozpouštěcích předpisů dostalo přesnější logiku

Velká část práce navazovala na kopírování rozpouštěcích předpisů v RZP-S10. Tady se ukázalo, že slovo „kopie" neznamená vždy totéž. Kopie stupně předpisu je strukturální klon: zachovat děti, koeficienty a účty přesně. Kopie celého předpisu v rámci stejného roku naopak musí některá konta znovu promítnout podle aktivní masky definice.

Do implementace se proto dostalo sdílené jádro pro klonování dětí předpisu a dvě strategie práce s účty: verbatim kopie a re-projekce účtů. Vedle toho byla napojena kopie předpisu z předchozího roku. Uživatel může vybrat zdrojový předpis z roku `rok - 1` a aplikace řeší, jestli je cílová definiční věta kratší, delší nebo stejná. Pokud hrozí ztráta části dimenzí, chování odpovídá legacy varování.

Pro veřejný pohled je důležité hlavně to, že tým nebral kopírování jako obyčejné duplikování řádků. Ověřoval, kdy má být kopie doslovná, kdy má respektovat novou definici a kdy má uživatele zastavit nebo varovat.

### Reporty a E2E testy dostaly více skutečných dat

Reportovací oblast RZP se dál posouvala od technického generování sestav k ověřování nad konkrétními daty. Přibyly datově řízené E2E sady pro sestavy S04, včetně podkladů pro reporty 21a/b, 22a, 23a/b, 24a-e a 29a/b. Součástí jsou i očekávané exporty a textové výstupy, které pomáhají odlišit skutečný výpočetní problém od zastaralého golden masteru.

Tým zároveň opravoval konkrétní odchylky: jednotky částek v reportovací konfiguraci, viditelnost všech dimenzí u definičních vět, ořezané popisky ve formulářích předpisů a chování některých ovládacích prvků, například šipek pro numerická kritéria. Vedle toho se rozšířily E2E testy číselníků, definičních vět, nastavení, importu a kompletního procesu rozpouštění.

Aktuální E2E katalog má 164 scénářů: 86 implementovaných, 68 chybějících, 5 připravených jako scaffold, 3 plánované a 2 rozpracované. To pořád není kompletní síť, ale je to už dost konkrétní mapa toho, co je v RZP ověřené a co ještě čeká.

### Uživatelské detaily se dál zarovnávají s legacy chováním

Týden přinesl i řadu drobných změn, které jsou pro uživatele viditelnější než většina architektury. RZP dostalo kontextovou nápovědu přes F1, focus-help a hlášky. Hlášky se začaly víc opírat o sdílený `SpolHelpMessageBox` a po jejich zavření se centrálně uklízí stavový řádek.

V číselnících a předpisech se zpřesnily validace: pořadí NS/AK podle reálně umístěných komponent, povolené znaky, kontrola proti číselníkům, blokace opravy předpisu s pořízenými stupni nebo perzistence konstant po příjmu dat. V menu se doplnilo živé přepínání kontroly podle číselníků a oprávnění.

Tyto změny nevypadají efektně, ale jsou přesně tím typem práce, který dělí demo od použitelného migrovaného modulu. Uživatel v ERP systému nehodnotí jen to, zda výpočet nakonec doběhne. Všímá si i toho, kdy je tlačítko aktivní, jaká hláška se objeví, kam skočí fokus a jestli se obrazovka chová stejně jako původní nástroj.

### SPOL a SPK uzavřely brány pro RZP full-path scope

Vedle RZP se uzavíraly i sdílené vrstvy. SPOL-S14 byl uzavřen jako finální testovací a kompatibilitní brána pro rozsah potřebný pro RZP full-path. Evidence stojí na reálném běhu `Fenix.Spol.Tests`: 534 testů prošlo, jedno selhání bylo označeno jako známý nestabilní clipboard test mimo věcný rozsah.

SPK-S09, tedy final parity gate pro společného klienta, se uzavřel podobně: ne jako výjimka, ale na základě reálné evidence. Runtime a compatibility část vykazuje 86 z 86 testů úspěšných. Pro RZP to znamená, že sdílené přihlášení, runtime kontrakty, databázové hranice, quiet session a kompatibilita konzumentů nejsou jen předpoklad, ale mají vlastní testovací stopu.

To je pro projekt důležité i strategicky. Pokud má Fenix postupně růst z migrovaných modulů, společné vrstvy nesmí být neviditelné riziko. Musí být samy ověřené a použitelné opakovaně.

### Robotické testování se stabilizuje

Do týdne patří i posun v nástrojích. Robotický tester dostal persistentní FlaUI daemon a nový způsob ovládání přes akce, které dokážou pracovat s legacy i vloženým režimem bez křehkého externího klikání přes Win32. Cílem není dělat testování atraktivnější na pohled, ale snížit množství falešných selhání a lépe řídit dlouhé UI scénáře.

To se dobře doplňuje s růstem E2E katalogu. Migrace RZP se stále více opírá o kombinaci unit testů, paritních fixtures, reportových baseline, živých UI běhů a dokumentovaných odchylek. Každý z těchto důkazů pokrývá jiný typ rizika.

## Význam týdne

Patnáctý týden byl týdnem důvěryhodnosti. RZP už mělo řadu funkčních částí i předtím, ale tento týden se projekt výrazně posunul v tom, jak jejich správnost dokládá. Import, rozpouštění, kopie předpisů, reporty, menu, start aplikace i sdílené vrstvy dostaly konkrétnější paritní a testovací oporu.

To neznamená, že celý NEO_HEF je hotový. Znamená to ale, že RZP se přestává posuzovat jen podle seznamu implementovaných funkcí. Začíná se posuzovat podle důkazů: co prošlo proti legacy, co má golden baseline, co běží v E2E, co je vědomě odložené a co je jen kosmetická odchylka.

Právě takový posun je pro pilotní a následně produkční nasazení důležitější než další viditelná novinka v menu. ERP migrace se nevyhrává počtem přepsaných obrazovek, ale tím, že se uživatel může spolehnout na stejné chování a tým umí ukázat, proč je to pravda.

[Domů]({{ '/' | url }})
