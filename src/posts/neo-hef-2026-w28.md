---
title: "Týden osmnáctý - 10.11 základ se potvrzuje a UCV roste v pracovní větvi"
date: 2026-07-12
week: "Týden osmnáctý"
period: "06. 07. 2026 - 12. 07. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w28
summary: "Osmnáctý týden měl kvůli dovoleným klidnější rytmus, ale nebyl prázdný: 10.11 auth/vault základ prošel přes SPOL, SPK a RZP, zatímco v samostatné pracovní větvi výrazně pokročilo UCV."
---

## Shrnutí pro netechnické čtenáře

Osmnáctý týden projektu NEO_HEF probíhal pro tým HAIFA v klidnějším tempu. Je začátek července, část týmu je na dovolených a po červnovém finiši RZP už práce nemá stejný nárazový rytmus jako těsně před předáním prvního modulu. To ale neznamená, že se projekt zastavil. Spíš se změnil typ práce: méně veřejně viditelných velkých milníků, víc ověřování, dotažení základů a práce ve vedlejších větvích.

Na hlavní vývojové linii se nejvíc posunul přechod na Fenix 10.11. Dokončily se části kolem nového přihlašování, práce s hesly a předávání relace přes vault. To jsou věci, které běžný uživatel většinou nevnímá jako novou obrazovku, ale bez nich by nové .NET moduly nemohly spolehlivě běžet proti databázi a prostředí verze 10.11.

RZP se v tomto týdnu ověřovalo proti 10.11. Důležitý výsledek je pozitivní: modul se nemusel znovu funkčně přepisovat. Potřeboval hlavně správně označit verzi sestavení, aby databázový guard poznal, že jde o řadu 10.11, a potom prošel ověřením spuštění i přihlášení proti nové databázi. Z pohledu projektu to potvrzuje předchozí závěr: RZP 10.11 je revalidace předaného modulu, ne druhá migrace RZP.

Vedle `develop` se tentokrát stalo hodně zajímavého v samostatné pracovní větvi pro UCV. Ta ještě není sloučená do hlavní vývojové větve, ale právě k tomu se připravuje jako jeden z nejbližších integračních kroků. Proto ji nejde prezentovat jako hotový integrovaný výsledek, ale zároveň je důležitá: UCV tam výrazně pokročilo v kontrolách, výkazových rodinách, 10.11 delta změnách, napojení na živou databázi a v dalším wireupu obrazovek.

Stručně: projekt jede v dovolenkově volnějším režimu, ale směr je jasný. Stabilní RZP linie zůstává oddělená, `develop` potvrzuje společný základ 10.11 a UCV se připravuje v samostatné pracovní větvi, která může být dalším velkým integračním krokem.

## Co se stalo

V týdnu od 6. do 12. července 2026 je po aktualizaci vzdálených větví v repozitáři `NEO_HEF` vidět 25 commitů v historii `origin/develop`. Větev `release/10.01` v tomto období nepřibrala nové commity, což odpovídá jejímu účelu: držet stabilizovanou předávací linii RZP 10.1 a neplést do ní vývoj 10.11.

Mimo `develop` byla nejzajímavější samostatná pracovní větev pro UCV. Jen v rozsahu tohoto týdne obsahuje 72 commitů, které nejsou v aktuálním `origin/develop`. Je to tedy výrazná paralelní práce, ale pořád práce mimo hlavní větev; zároveň jde o větev, která se připravuje na brzké sloučení zpět do `develop`. Některé krátkodobé pracovní větve, které se v logu týdne objevují, už po `fetch --prune` na remote nejsou: jejich výsledek byl sloučen do `develop` a samotné větve byly uklizené.

### Dovolenkové tempo a méně přímočará historie

Oproti červnovému finiši RZP je tempo viditelně volnější. Dává to smysl: začaly dovolené a projekt je zároveň po prvním velkém předání. Místo jedné lineární sprintové linky je teď vidět víc proudů: stabilní release větev pro RZP 10.1, hlavní vývojová větev pro 10.11 základ a samostatná pracovní větev pro UCV.

Pro čtenáře to znamená hlavně jednu věc: počet commitů už sám o sobě neříká celý příběh. Některé změny jsou malé, ale strategické, například přepnutí verze sestavení nebo doplnění paritního testu. Jiné jsou velké, ale zatím zůstávají mimo `develop`, protože musí projít integrací a review.

### SPOL a SPK dokončily důležitý kus 10.11 základu

Hlavní větev v tomto týdnu uzavírala práci kolem autentizace a vaultu pro 10.11. V praxi jde o přechod od staršího ukládání hesel k novému modelu přes `uziv_pwd`, o port bezpečnostního jádra, o přihlašovací obrazovku napojenou na nové výsledky ověřování a o klienta pro komunikaci s VaultServerem.

Podstatné je, že se nejde cestou nové izolované implementace vedle systému. SPOL a SPK zde nesou společný základ: modul má umět najít a použít vault, mluvit s ním stejným wire protokolem jako legacy část a při nedostupnosti se korektně vrátit k fallback cestě. Doložené testy v tomto týdnu ověřily i komunikaci s reálnou binárkou `VaultServer.exe`, nejen s testovací náhradou.

Součástí posunu bylo také zapojení konzumenta vault descriptoru do běžné tiché přihlašovací cesty. Tady se řeší právě to, aby modul uměl převzít relaci ze spuštění pod Launcherem bezpečně a paritně.

### RZP prošlo revalidací proti 10.11

Po dokončení 10.11 auth/vault základu přišla na řadu revalidace RZP. Výsledek je pro projekt dobrý: RZP se na 10.11 chová jako modul ověřený v linii 10.1, bez změn v obchodní logice modulu. Jediný významný nález byl verzovací. Sestavení bylo pořád označené jako 10.1, takže databázový guard správně odmítl databázi 10.11 jako příliš novou. Po přepnutí `VersionPrefix` na 10.11 guard databázi přijal.

To je malý technický detail s velkým významem. Ukazuje, že ochrany proti spuštění nad špatnou databází fungují, ale zároveň připomíná, že každý modul a host musí mít pro novou verzi správně nastavenou vlastní verzi sestavení. Proto se z nálezu stal i obecnější follow-up pro repo-wide versioning v linii 10.11.

RZP se ověřovalo ve standalone režimu i pod Launcherem, proti databázi `fenix_1011` a s novým přihlašovacím základem. Dokumentace výsledek shrnuje jako připravenost RZP pro 10.11 pilot, s tím, že některé produkční cesty kolem launcherového producenta vault descriptoru zůstávají mimo scope této konkrétní revalidace.

### RZP si dál zpevňuje paritní důkazy

Vedle samotné revalidace pokračovalo i doplňování důkazů pro paritu RZP. Nejviditelnější byl sběr golden fixtures pro kopírování rozpouštěcích předpisů. V tomto týdnu se podařilo zachytit všech šest plánovaných vstupů `I1` až `I6`, včetně případů, které se bez přípravy testovacích dat nedaly v aktuální databázi vyvolat.

To není nová funkce pro uživatele, ale pojistka pro projekt. Kopírování předpisů obsahuje okrajové případy kolem převodu mezi roky, kratší a delší definiční věty, slučování dimenzí a deduplikaci účtů. Když jsou tyto situace zachycené jako golden data, .NET port se dá kontrolovat proti konkrétní legacy realitě, ne jen proti obecnému popisu.

Do RZP se doplnil také druhý konzument HZTL progress dialogu pro kopii stupně. První část už existovala u katalogové kopie předpisu; nyní se stejný paritní vzor promítl i do kopie samotného stupně. Je to typická drobná migrační práce: uživatel vidí jen krátké okno průběhu, ale pro věrnost modulu je důležité, aby se chovalo stejně jako v původním Fenixu.

### UCV se ve větvi výrazně posunulo, ale zatím mimo develop

Největší zajímavost mimo `develop` je samostatná pracovní větev pro UCV. V této větvi UCV pokračuje směrem od "hodně kódu existuje" k "modul se dá reálně dokončit a ověřit". Dokumentace větve sama říká, že nejde o hotový merge do `develop` ani o uzavřený PR, ale právě tato práce se má brzy stát kandidátem na integraci do hlavní vývojové linie. Právě proto je potřeba o ní psát opatrně: je to významný vývojový proud, ne ještě veřejně integrovaný stav hlavní linie.

Obsahově je ale práce zásadní. UCV tam má za sebou velký kus kontrolních pravidel a vazeb, včetně jádra `VazbyRule`, rodinných rulesetů, Dapper providerů a live-DB smoke testů. Testovací stav se v dokumentaci pohybuje v řádu tisíců procházejících testů bez selhání. Důležité je i oddělení běžných unit testů od live integračních testů, aby rychlá sada zůstala zelená bez přístupu k databázi a živé ověření se spouštělo cíleně.

V části 10.11 delta se UCV posunulo hlavně kolem výkazů a kontrol. Přibyly úpravy pro F69 pro reformu roku 2026, nová rodina F70, pravidla pro rok 2026 v kontrolách, přepnutí živého testovacího harnessu na `fenix_1011`, seed verze UNL a další kroky kolem masky položek a výkazových variant. To je přesně rozdíl proti RZP: u RZP je 10.11 revalidace, u UCV jde o skutečnou delta implementaci v modulem vlastněném kódu.

Vedle toho se řeší praktičtější část použitelnosti: wireup formulářů, přehledové gridy, zodpovědné osoby, ARES, File2Db pro SÚZ přílohy, sdílený mail sender a společný session bootstrap. Něco z toho už má ve větvi dokončené kroky a testy, něco je zapsané jako další finish-plan. Hlavní zpráva je ale jasná: UCV už není jen teoretický další modul na seznamu. Má vlastní aktivní pracovní větev s konkrétním obsahem a s reálnými integračními otázkami.

### Význam týdne

Osmnáctý týden nepůsobí jako velký veřejný zlom. Je to částečně dané dovolenkami a částečně tím, že projekt po předání RZP vstoupil do jiné fáze. Méně se finišuje jeden modul, víc se ověřuje schopnost továrny držet několik linií najednou.

To je ale pro tým HAIFA důležitý test. `release/10.01` zůstává klidná a chrání předaný RZP. `develop` potvrzuje 10.11 auth/vault základ a revaliduje RZP proti nové databázi. Vedle toho samostatná pracovní větev pro UCV ukazuje, jak vypadá další větší modul s reálnou 10.11 delta prací.

Pokud se tyto proudy podaří bezpečně spojit, projekt nebude stát jen na tom, že se jednou povedlo předat RZP. Bude mít model pro udržení vydané linie, povýšení společného základu a přípravu dalšího modulu bez toho, aby se všechno muselo dělat jedním velkým skokem.

[Domů]({{ '/' | url }})
