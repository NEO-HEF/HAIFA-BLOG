---
title: "Týden osmý - RZP se stává skutečným konzumentem sdílené vrstvy"
date: 2026-05-03
week: "Týden osmý"
period: "27. 04. 2026 - 03. 05. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w18
summary: "Projekt se posunul od spustitelného RZP k prvnímu skutečnému konzumentovi sdílených vrstev: přihlášení, profily, master-data formuláře, uživatelská nastavení, help a integrační hranice začínají zapadat dohromady."
---
## Shrnutí pro netechnické čtenáře

Osmý týden posunul projekt z fáze „aplikace se dá spustit“ do mnohem praktičtější roviny: `RZP` začíná používat společné stavební bloky, které mají později sloužit i dalším modulům Fenixu.

Nejviditelnější je přihlášení. RZP už při samostatném spuštění používá sdílený přihlašovací dialog a navazující práci s profily databázových připojení. Uživatel si tedy může vybrat připravené připojení, otestovat ho a vstoupit do aplikace bez ručního skládání technických údajů při každém startu.

Vedle toho se rozběhl první velký kus samotného RZP: master-data formuláře, nabídky, číselníky, nastavení, repozitáře, aplikační use-casy a testy. Současně se doplňovaly sdílené služby kolem uživatelských nastavení, auditu, licencování, nápovědy, dokumentace, launcher lifecycle a OOU hranice. Jinými slovy: RZP už není jen izolované okno. Začíná se chovat jako modul napojený na společnou architekturu.

## Co se stalo

Historie týdne je soustředěná hlavně do dnů `27. 04. 2026` až `30. 04. 2026`; v závěru týdne už v dostupné historii nejsou podstatné nové commity. Přesto jde o velmi hustý týden, protože se potkaly tři důležité linky: sdílené přihlašování, první business vrstva RZP a doplňování společných SPOL/SPK hranic.

V oblasti přihlášení byl dokončen sdílený interaktivní login pro standalone spuštění modulů. `RZP` je první consumer této cesty. Základní přihlášení se rychle rozšířilo o profily: dialog umí pracovat s připravenými databázovými konfiguracemi, načítat je do login formuláře a ověřit, že se k vybranému připojení dá skutečně připojit. To je důležité nejen pro RZP, ale i pro další nové moduly, které budou potřebovat stejný startovací komfort.

Velký posun nastal přímo v `RZP-S01`. Do nové implementace se dostaly první master-data oblasti: vlastníci, definice, účty, detaily účtů, výběr roku a IČO, hledání, číselníky, nastavení a shell/menu struktura. Nešlo jen o obrazovky. Součástí byly doménové entity, value objecty, validační pravidla, Dapper repozitáře, aplikační use-casy, presentery, INI adaptér, reload číselníků a testy. První ověření hlásilo build bez chyb a `59/59` testů úspěšně.

Současně se doplňovala společná infrastruktura. `SPK-S07` přinesl persistence služby pro shared settings, auditní zápis a licenční data, tedy vrstvy nad tabulkami typu `sau_uziv_nast`, `sau_logfenix`, `sau_license_record` a `sau_license`. `SPOL-S15` pak zpřesnil, co má pro RZP zůstat společnou odpovědností: uživatelská nastavení, help a dokumentace, nápovědní témata, dialog „O aplikaci“, lifecycle při běhu pod launcherem, titulky a OOU/module launch hranice.

Týden byl také o stabilizaci detailů. Opravovalo se chování menu RZP vloženého do launcheru, login začal reagovat na Enter po vyplnění hesla, upravoval se layout správy vlastníků, řešily se rozdíly SQL parametrů pro Dapper/OleDb a zprovozňovaly se položky typu „Novinky ve verzi“ a nápověda. Tyhle změny vypadají drobně, ale dohromady rozhodují o tom, jestli se nový modul bude chovat jako použitelná aplikace.

Důležitá je i koordinační rovina. Dokumentace a sign-off artefakty se dál zpřesňovaly tak, aby bylo jasné, co patří do `RZP`, co do `SPOL` a co do `SPK`. Právě v osmém týdnu se ukazuje, proč byla předchozí práce na hranicích a implementačních plánech nutná: jakmile RZP začne používat sdílené služby, musí být vlastnictví každé části jasné, jinak by vznikaly duplicitní nebo rozporné implementace.

Osmý týden tak není jen další sada commitů. Je to týden, kdy se z RZP stává první opravdu viditelný konzument nové sdílené architektury. Projekt tím přechází od technického základu k otázce, jestli se nové moduly budou dát používat v pracovních scénářích, které uživatelé znají z původního Fenixu.

[Domů]({{ '/' | url }})
