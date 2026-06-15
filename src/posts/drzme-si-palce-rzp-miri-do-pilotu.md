---
title: "Držme si palce: RZP míří do pilotu"
date: 2026-06-15
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - pilot
  - qa
layout: layouts/post.njk
lang: cs
translationKey: drzme-si-palce-rzp-miri-do-pilotu
summary: "HAIFA tým míří k předání prvního migrovaného modulu RZP konzultantům pro pilotní nasazení u klientů do konce června 2026. Není to konec práce, ale důležitý přechod z interní migrace do ověřování v reálném prostředí."
---

## Shrnutí pro netechnické čtenáře

RZP, tedy modul pro rozpouštění nákladů a výnosů, se blíží k nejdůležitějšímu milníku dosavadní práce HAIFA týmu. Do konce června 2026 má být připravený a předaný konzultantům tak, aby ho mohli nasadit u vybraných klientů a začít sbírat zpětnou vazbu z pilotního testování.

Tenhle termín platí. Cíl, který si HAIFA tým pro první migrovaný modul slíbil, bude splněn.

Neznamená to ale, že práce je jednoduchá nebo že je hotovo jen proto, že se blíží datum. Právě teď jsme v nejnáročnější fázi: intenzivní testování, dolaďování detailů, porovnávání s původním Fenixem a odchytávání věcí, které se v migraci z VB6 do .NET mohly ztratit nebo změnit.

Pilotní předání je důležité právě tím, že se RZP dostane z rukou vývojového a QA týmu k lidem, kteří ho znají z provozu a budou ho umět vyzkoušet v reálných podmínkách. Konzultanti a klienti uvidí, co funguje dobře, co je potřeba doladit a kde se nová verze ještě liší od očekávání z původního systému.

Po předání nás zároveň čekají dvě další velké linie práce. První je podpora pilotu a řešení nálezů, které z něj přijdou. Druhá je vstřebání nové legacy baseline Fenixu 10.11, kterou legacy tým v těchto dnech dokončil. Dosavadní migrační práce vychází hlavně z Fenixu 10.01, takže bude potřeba přesně zjistit, co se změnilo, a sladit novou .NET verzi s aktuálním stavem původního produktu.

## Proč je RZP tak důležitý milník

RZP je první modul, na kterém se v projektu NEO_HEF ověřuje celý migrační postup. Nejde jen o to, že se podaří přepsat konkrétní obrazovky. Na RZP se testuje, jestli umíme převést reálný modul Fenixu tak, aby se dal spustit, používat, testovat, instalovat, předat konzultantům a postupně dostat až ke klientům.

To je jiný typ výsledku než interní proof-of-concept. Pilotní RZP musí obstát jako pracovní nástroj. Uživatel musí poznat nabídky, formuláře, chování validací, sestavy, tisky, exporty, hlášky i oprávnění. A když něco nefunguje, tým musí umět chybu rychle reprodukovat, opravit a poslat novou verzi.

Proto je teď kolem RZP tolik práce. V posledních týdnech se neřeší jen „velké" funkce, ale i zdánlivé detaily: pořadí kontrol, ikony hlášek, rozbalovací seznamy, přesné chování tabulek, progress dialogy, stránkování sestav, desetinné čárky nebo to, jestli se okno otevře jako MDI child nebo jako modální dialog.

U běžné nové aplikace by část takových věcí mohla být otázkou vkusu. U 1:1 migrace legacy ERP systému je to otázka parity. Cílem není vymyslet nový RZP. Cílem je dodat RZP, které se chová jako původní modul, ale běží na nové technologii.

## Co znamená pilotní předání

Pilot není slavnostní tečka za vývojem. Je to řízené vystavení modulu reálnému světu.

Konzultanti dostanou verzi, se kterou mohou pracovat u vybraných klientů. Budou sledovat, jestli modul pokrývá běžné pracovní scénáře, jestli jsou výstupy srozumitelné, jestli instalace a aktualizace fungují rozumně a jestli se uživatelé nezasekávají na odlišnostech proti původnímu Fenixu.

Zpětná vazba z pilotu bude pro HAIFA tým zásadní. Automatické testy, code review a porovnávání s legacy zdroji jsou nezbytné, ale nenahradí všechno. Reálný provoz umí ukázat kombinace dat, návyků a pracovních postupů, které se v interním testování nemusí objevit.

Proto má smysl mluvit o předání konzultantům, ne o definitivním vydání všem klientům. Pilot je mezikrok, který chrání kvalitu. Umožní rychle sbírat nálezy, opravovat je a potvrdit, že migrovaný modul obstojí mimo bezpečné prostředí vývojového týmu.

## Teď jsme ve fázi, kdy se počítají detaily

Čím blíž je pilot, tím méně práce vypadá navenek efektně. Přibývá testů, oprav, drobných paritních nálezů a rozhodnutí, co je blokující a co může zůstat jako dokumentovaná kosmetická odchylka.

To je normální a zdravá fáze migrace. První verze formuláře často dokáže otevřít okno a načíst data. Skutečná připravenost ale znamená, že sedí i hraniční scénáře, chybové stavy, oprávnění, exporty, sestavy, reakce na přerušení dlouhé operace nebo chování na různých uživatelských prostředích.

RZP už má za sebou velký kus této cesty. Reporting a výstupy jsou připravené pro pilot. Přibývají golden-master testy, E2E scénáře a přesnější kontroly nad rozpouštěcími předpisy. Zároveň se stále loví věci, které v migraci mohly utéct. To není známka slabosti. Je to přesně ta práce, která má před předáním proběhnout.

## Do hry vstupuje Fenix 10.11

Další důležitá zpráva je nová verze legacy Fenixu 10.11. Dosavadní práce HAIFA týmu stojí převážně na baseline Fenixu 10.01. Mezitím ale původní legacy tým dokončil novou verzi, takže migrovaný svět se musí s tímto posunem vyrovnat.

Prakticky to znamená dvě věci.

První: současnou migrační větev vycházející z 10.01 bude potřeba zamrazit jako stabilní výchozí stav. V ní se budou řešit jen chyby a nálezy, které souvisejí s pilotním RZP.

Druhá: tým musí udělat přechod na 10.11 řízeně. Nestačí do nové .NET verze potichu promítnout změny z nového legacy stromu. Bude potřeba dopadová analýza, porovnání rozdílů a rozhodnutí, co se musí upravit v RZP, SPOL, UCV a sdílených částech.

Nejvíc se to pravděpodobně dotkne SPOL a UCV. SPOL je společná vrstva, na které stojí přihlášení, chybové dialogy, progress dialogy, sdílené služby a mnoho dalších věcí. UCV je další velký modul v pořadí a část jeho dosavadní práce bude potřeba znovu zkontrolovat proti aktuálnější baseline.

Tohle je realita migrace živého produktu. Legacy Fenix se během projektu nezastavil. Nové verze vznikají dál a NEO_HEF musí umět nejen převést starý stav, ale také vstřebávat změny, které do produktu přicházejí průběžně.

## Co bude dál

Po předání RZP do pilotu se práce nerozpadne do jednoho směru. Poběží několik proudů najednou.

První proud bude podpora pilotu: instalace, konzultantské ověření, sběr nálezů, reprodukce chyb, opravy a vydávání nových verzí. Tady se ukáže, jak dobře funguje nejen samotný RZP, ale i celý způsob doručování oprav.

Druhý proud bude přechod na Fenix 10.11. Bude potřeba udržet stabilitu pilotního RZP a zároveň připravit cestu, jak nové změny z legacy světa dostat do NEO_HEF bez chaosu.

Třetí proud bude UCV, tedy Výkaznictví. Na UCV už se nějakou dobu pracuje, ale upřímně řečeno jen na půl plynu. Hlavním cílem tohoto čtvrtletí bylo odevzdat RZP. Jakmile RZP projde do pilotu, UCV se přirozeně stane hlavním kandidátem na další intenzivní migrační běh.

To je důležitý posun i pro samotnou metodiku HAIFA. RZP ukazuje, jak vypadá první modul dotažený k pilotu. UCV ukáže, jestli se stejný postup dá zopakovat rychleji, přesněji a s menším množstvím slepých uliček.

## Držme si palce

Předání RZP do pilotu do konce června 2026 je pro HAIFA tým velký okamžik. Není to konec migrace Fenixu. Není to ani konec práce na RZP. Je to ale první skutečné ověření, že projekt NEO_HEF dokáže převést konkrétní modul z interního vývoje směrem k reálnému nasazení.

Teď jde o kvalitu. O trpělivé testování. O schopnost opravovat i malé odchylky. O spolupráci vývoje, QA, konzultantů a lidí, kteří znají původní Fenix z provozu.

Držme si palce. První modul míří do pilotu.

[Domů]({{ '/' | url }})
