---
title: "Týden jednatřicátý - Hotový plán ROB ukazuje význam koordinace mezi moduly"
date: 2026-10-11
week: "Týden jednatřicátý"
period: "05. 10. 2026 - 11. 10. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w41
summary: "Migrace se rozšířila o Registr obyvatel a Matriku. Dokončený plán ROB vyžadoval koordinaci se SPOL, UIR i MAT. Cross module ledger pomáhá zachovat přehled o práci přes hranice modulů a UIR dál rozvíjí společné služby registrů."
---

## Shrnutí pro netechnické čtenáře

Jednatřicátý týden projektu NEO_HEF otevřel další etapu migrace Helios Fenix. **Dne 5. října začaly práce na modulech ROB, Registr obyvatel, a MAT, Matrika včetně vidimace a legalizace. Implementační plán ROB je hotový.** Při jeho tvorbě bylo nutné sladit práci se společnou vrstvou SPOL, Územním identifikačním registrem UIR i Matrikou.

Jednotlivé agendy Fenixu jsou vzájemně provázané. Při převodu jedné z nich proto může být potřeba připravit část jiné, jejíž vlastní migrace ještě nezačala. Přehled o těchto zásazích pomáhá udržovat **cross module ledger**: společná evidence toho, co jeden modul připravuje nebo už vytvořil pro jiný a na co mají další práce navázat.

UIR, Územní identifikační registr, rozšířilo uživatelské funkce a přesunulo společné části komunikace se základními registry do sdílené vrstvy.

## Co se stalo

Týden od 5. do 11. října 2026 spojil zahájení migrace ROB a MAT s rozvojem UIR. Pro tým HAIFA to znamená souběžně připravovat nové agendy a budovat společné služby, na kterých budou další moduly stavět.

### ROB a MAT vstupují do migrace

Projektová evidence nově vede ROB a MAT jako rozpracované s datem zahájení 5. října. U ROB je dokončený rozbor zdrojového kódu i implementační plán, který postupuje od spuštění a hlavní nabídky přes evidenci občanů, stěhování a další životní události až k volebním seznamům, tiskům a výměně dat.

Součástí plánování byla koordinace se SPOL, UIR a MAT. Registr obyvatel potřebuje například komunikaci se základními registry, práci se sestavami i bezpečný zápis do databáze sdílené s původní aplikací. Plán proto musí určit, které služby převezme, co je potřeba doplnit a kam společná funkčnost patří. Část těchto služeb už vzniká při migraci UIR.

### Cross module ledger drží přehled přes hranice agend

Podobnou situaci už tým řešil při migraci UCV. Výkaznictví potřebovalo koordinaci s účetnictvím a rozpočtem, jejichž vlastní migrace tehdy ještě nezačaly. Funkce potřebná pro právě převáděnou agendu tak mohla vzniknout předem v části systému, na kterou teprve měla přijít řada.

Právě pro takové případy slouží cross module ledger. Zaznamenává, který modul práci provedl, jakou schopnost dodal, kde je kód umístěný, jak se používá a kdo jej má při další migraci převzít nebo rozšířit. Obsahuje také plánované zásahy do jiných modulů. Evidence je uspořádaná podle cílové části systému, takže tým při zahájení její migrace najde, co už pro ni vzniklo a jaké vazby musí zachovat.

Pro vývoj řízený AI agenty je to důležitý koordinační nástroj. Agent připravující další modul může navázat na existující práci a zohlednit její uživatele. Snižuje se tím riziko, že stejná funkce vznikne dvakrát nebo že její úprava naruší agendu, která ji už používá. Hotový plán ROB ukazuje, že tato koordinace patří už do přípravy migrace.

### UIR rozšiřuje ovládání a sdílí komunikaci s registry

UIR získalo závěrečné ověření nastavení, nápovědy a listování v objektech včetně historie. Kontrola přitom našla i konkrétní chybu v práci s apostrofem v historickém vyhledávání, která byla opravena. Vedle samotných formulářů se prověřovalo jejich skutečné zapojení do nabídky a ukládání uživatelských předvoleb.

Dalším výsledkem byl přesun formulářů pro základní registry a jádra konektoru KZR do společné vrstvy SPOL. Komunikace s registry se tím připravuje k využití dalšími moduly. Živé ověření po přesunu prošlo přihlášením, dotazy do RÚIAN a zápisem devíti nalezených adres do kopie databáze. To dokládá funkční propojení v ověřené cestě UIR.

Na konci týdne se do hlavní větve dostaly také změny velikosti písmen v číselnících a aktivní plocha s informacemi o obci a grafem. Jejich závěrečné posouzení pracovalo s výslovně přijatými výhradami. U aktivní plochy například zůstávají dočasné vizuální odchylky popisků a titulku grafu. Pokrok v těchto částech proto ještě neznamená úplnou shodu celého UIR s původní aplikací.

### Význam týdne

HAIFA zahájila migraci dalších dvou agend, dokončila plán ROB a v UIR posunula služby využitelné napříč Fenixem. Příprava Registru obyvatel znovu ukázala, že postup jednoho modulu závisí i na práci v dalších částech systému. Cross module ledger pomáhá tyto vazby zachovat a předávat mezi jednotlivými migračními kroky i AI agenty.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
