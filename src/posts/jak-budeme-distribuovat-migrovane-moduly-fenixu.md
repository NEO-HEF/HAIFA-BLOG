---
title: "Vítejte v 21. století: automatická distribuce Fenixu bez ruční práce"
date: 2026-06-01
tags:
  - post
  - haifa
  - neo-hef
  - release-management
  - msix
  - distribuce
layout: layouts/post.njk
lang: cs
translationKey: jak-budeme-distribuovat-migrovane-moduly-fenixu
summary: "NEO_HEF připravuje release management postavený na MSIX balíčcích, GitHub Releases a Windows App Installeru. Cílem je, aby se hotové moduly daly instalovat z kanálů alpha, beta a prod a aby se nové verze dostávaly ke klientům automaticky."
---
## Shrnutí pro netechnické čtenáře

Migrace Fenixu nekončí tím, že se podaří přepsat formulář nebo zprovoznit část business logiky. Stejně důležité je dostat nové verze bezpečně a opakovaně ke konzultantům, testerům a nakonec i klientům.

Proto tým HAIFA připravuje nový release-management model pro migrované moduly NEO_HEF. Základem jsou podepsané MSIX balíčky, GitHub Releases a Windows App Installer. Prakticky to znamená, že uživatel nebude čekat na ruční kopírování souborů, speciální zásah konzultanta nebo lokální instalační improvizaci. Modul se nainstaluje standardním mechanismem Windows a při dalších spuštěních se umí sám aktualizovat na novější verzi.

Pro konzultanty a klienty už vzniklo i webové instalační rozhraní: <a href="https://neo-hef.github.io/fenix-releases/" target="_blank" rel="noopener">neo-hef.github.io/fenix-releases</a>. Stránka nabízí kanály `alpha`, `beta` a `prod`, tedy testovací, pilotní a produkční úroveň distribuce. Podle role a situace si uživatel může nainstalovat verzi určenou pro rychlé ověření, pilotní provoz nebo běžné použití.

Hlavní přínos je jednoduchý: méně ruční práce při nasazování, rychlejší cesta oprav ke klientům a lepší kontrola nad tím, která verze je určena pro jaký typ použití.

## Proč nestačí poslat EXE soubor

U desktopové aplikace může vypadat distribuce jednoduše: zkompiluje se program, někam se uloží a někdo ho klientovi zkopíruje. V malém projektu to může fungovat. U ERP systému, který se skládá z více modulů, sdílených knihoven a dlouhodobě udržovaných verzí, je to ale cesta k chaosu.

Každá ruční instalace stojí čas konzultanta. Každá nejasná verze na klientském počítači komplikuje podporu. Každý hotfix, který se musí dostat ke konkrétní skupině zákazníků, vytváří další organizační práci. A čím víc migrovaných modulů bude přibývat, tím horší by takový model byl.

Nový release management proto pracuje s migrovaným modulem jako s instalovatelnou Windows aplikací. Modul, který má vlastní spustitelný vstup, například RZP a později UCV, dostane vlastní MSIX balíček. Sdílené knihovny SPOL se do něj přibalí stejně jako běžné závislosti aplikace. Společný spouštěč zatím není součástí tohoto distribučního kroku a bude se řešit později.

## Jak bude distribuce fungovat

Technický tok má několik částí. Nejprve se modul sestaví, zabalí do MSIX balíčku a podepíše certifikátem Asseco Solutions. Podepsaný balíček se publikuje jako neměnná verze do release repozitáře. Teprve potom se konkrétní verze přes manifest posune do některého kanálu.

Kanály jsou tři:

- `alpha` pro nejnovější verze určené testerům a vývojářům,
- `beta` pro pilotní ověření před širším nasazením,
- `prod` pro širokou distribuci běžným uživatelům.

Tento model je důležitý, protože odděluje samotné vytvoření balíčku od rozhodnutí, komu se má daná verze nabídnout. Jedna konkrétní verze může nejdřív projít přes `alpha`, potom přes `beta` a teprve po ověření se dostat do `prod`. Posun mezi kanály je řízený manifestem a lze ho schvalovat běžným review procesem.

Pro uživatele je viditelná hlavně instalační stránka. Na <a href="https://neo-hef.github.io/fenix-releases/" target="_blank" rel="noopener">neo-hef.github.io/fenix-releases</a> si vybere kanál a modul. Instalaci může spustit přes Windows App Installer, stáhnout soubor `.appinstaller`, nebo použít připravený PowerShell příkaz. Po instalaci se aplikace objeví v nabídce Start a při dalších spuštěních si Windows umí zkontrolovat, zda není k dispozici novější verze.

## Co to přinese konzultantům a klientům

Největší praktický přínos je úspora času. Konzultant nemusí pro každou novou verzi ručně řešit, odkud vzít správné soubory, kam je zkopírovat a jak ověřit, že klient skutečně používá aktuální balíček. Instalační a aktualizační proces se přesouvá do standardní infrastruktury Windows.

Další přínos je rychlost. Když tým opraví chybu nebo doplní funkci, nemusí čekat na velkou instalační akci. Verze se publikuje do odpovídajícího kanálu a klient ji dostane automaticky při spuštění aplikace nebo jednoduchou reinstalací z instalační stránky.

Třetí přínos je kontrola. `Alpha` může být rychlá a odvážnější, protože je určená pro testery. `Beta` může sloužit pro pilotní ověření v reálném prostředí. `Prod` zůstane pro stabilní verze, které jsou připravené pro široké použití. Díky tomu se nové věci mohou dostat k lidem dřív, aniž by se tím zbytečně riskoval běžný provoz.

Výhodou je také důvěryhodnost instalace. Balíčky jsou podepsané certifikátem Asseco Solutions, takže uživatel neinstaluje anonymní binárku staženou odněkud z disku. Windows vidí vydavatele aplikace a umí s balíčkem pracovat standardním způsobem.

## Proč je to důležité pro HAIFA

HAIFA není jen experiment s převodem VB6 kódu do .NET WinForms. Pokud má mít migrace Fenixu reálný dopad, musí se výsledky dostat do rukou lidí, kteří s nimi budou pracovat. A to opakovaně, bezpečně a bez zbytečných ručních kroků.

Release-management vrstva proto doplňuje samotnou migraci. Vedle převodu formulářů, business logiky, testování a porovnávání s legacy verzí vzniká i cesta, jak modul vydat. Pro pilotní RZP je to první konkrétní model. Jakmile se osvědčí, stejný princip půjde použít i pro další migrované moduly.

Ještě nejsme ve stavu, kdy je takto distribuovaný celý Fenix. Některé kroky zůstávají ve fázi POC nebo čekají na další infrastrukturu, například self-hosted build agenta v síti Asseco. Důležité ale je, že základní směr už je jasný: sestavit, podepsat, publikovat, posunout do kanálu a nechat Windows, aby se postaraly o instalaci a aktualizace.

Tohle může v budoucnu ušetřit spoustu hodin práce konzultantů. Ještě důležitější ale je, že opravy a nové funkce se budou ke klientům dostávat rychleji, předvídatelněji a s lepší kontrolou nad tím, kdo používá jakou verzi.

[Domů]({{ '/' | url }})
