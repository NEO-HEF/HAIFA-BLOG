---
title: "Týden třiatřicátý - ROB má spustitelný základ, SAU spravuje uživatele a Matrika má plán"
date: 2026-10-25
week: "Týden třiatřicátý"
period: "19. 10. 2026 - 25. 10. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w43
summary: "Registr obyvatel přešel od přípravy k implementaci spustitelného základu. SAU dokončilo operace správy uživatelů a oprávnění, Matrika dostala implementační plán a první testovací sady podle původní aplikace. UIR pokračuje v závěrečném ověřování jednotlivých částí."
---

## Shrnutí pro netechnické čtenáře

Ve třiatřicátém týdnu projektu NEO_HEF se příprava dalších agend Helios Fenix promítla do nové aplikace. **Registr obyvatel, ROB, má spustitelný základ s přihlášením, hlavní nabídkou a připojením k databázi.** Na něj budou navazovat vlastní evidenční funkce. Tým HAIFA zároveň rozšířil společné služby pro práci se základními registry, které využijí i další agendy.

**Správa aplikací a uživatelů, SAU, pokročila k vlastní správě účtů a oprávnění.** Dokončené operace zahrnují založení, úpravu a smazání uživatele i přiřazování aplikací a skupin. To je podstatný posun od základního prostředí, o kterém jsme psali minulý týden.

Matrika dostala podrobný implementační plán. Současně pro ni vznikají testovací scénáře ověřené v původním programu, aby bylo předem jasné, jak se mají převáděné funkce chovat. Územní identifikační registr, UIR, pokračoval v závěrečných kontrolách; u adresních objektů zůstává otevřená práce na propojení s geografickým informačním systémem, GIS.

## Co se stalo

Týden od 19. do 25. října 2026 přinesl souběh implementace ROB a SAU, plánování Matriky a ověřování UIR. Vedle samotného převodu funkcí nabývá na významu příprava konkrétních podmínek, podle kterých lze výsledek přijmout.

### ROB staví na připraveném zadání

Po předchozích týdnech rozboru a měření původní aplikace se do vývojové větve dostal základ nového Registru obyvatel. Obsahuje hlavní okno, přihlášení, práci s právy a licencí, inicializaci databázového připojení a hlavní nabídku. Počítá se samostatným spuštěním i s provozem pod Launcherem, společným spouštěčem modulů Fenixu.

Souběžně přibylo rozšíření společné vrstvy SPOL pro dotazy do registrů, zadávání vyhledávacích kritérií a výběr adres. ROB tak navazuje na služby připravené při migraci UIR a rozšiřuje je o své potřeby. Tento postup umožňuje sdílet stejnou funkčnost mezi agendami.

Implementováno je také přihlášení ke konektoru základních registrů a další okna pro zobrazení údajů o osobách. Tyto části na konci týdne ještě čekaly na závěrečné přijetí. Hlavním dosaženým milníkem ROB je proto spustitelná aplikace a rozšířený společný základ pro pokračování migrace.

### SAU převádí správu účtů a přístupů

SAU dokončilo blok zápisových operací správy. Nová verze umí zakládat, upravovat a mazat uživatele, přiřazovat jim aplikace a spravovat členství ve skupinách i funkce skupin. Vybrané postupy tým porovnal robotickým ovládáním s původní aplikací, včetně výsledků zápisu do databáze.

Další postup se týkal hesel a přístupových údajů. Přijaty byly části pro politiku hesel, parametry zvýšeného zabezpečení, nastavení e-mailů a obnovení přístupu uživatele. Celý blok hesel však zůstává rozpracovaný: změnu vlastního hesla ještě podmiňuje audit společné bezpečnostní vrstvy SPOL.

Pro správce systému jsou účty, skupiny a oprávnění každodenní pracovní nástroje. Jejich převod proto posouvá SAU od připraveného rámce k funkcím, které určují, kdo se do jednotlivých agend dostane a co v nich smí dělat.

### Matrika má plán a testy vznikají předem

Do vývojové větve byl začleněn implementační plán MAT. Pokrývá Matriku i Vidimaci a legalizaci, dvě agendy v jedné aplikaci. Postup začíná společným základem, pokračuje Vidimací a legalizací a poté Matrikou, integracemi a závěrečným ověřováním. Během týdne se plán promítl také do pracovních úloh a zpřesnily se jejich závislosti a podmínky ověření.

Současně vznikl projekt automatických testů Matriky a první sady scénářů ověřené procházením původního programu. Zahrnují například start a licence, výběr majitele, aktivní plochu, nápovědu a nastavení. Tyto sady zachycují očekávané chování pro budoucí porovnání s novou verzí.

Příprava testů před implementací pomáhá oddělit zadání od výsledku práce AI agenta. U konkrétní funkce lze předem určit, co má uživatel vidět a jak má aplikace reagovat, a podle toho následně posoudit převod.

### UIR zpřesňuje hranici dokončené práce

UIR rozšířilo automatické ověřování uživatelských cest a doplnilo závěrečná posouzení číselníků a dalších částí. Kontrola vazeb byla uzavřena s výhradami. U adresních objektů ověření potvrdilo zapojení ostatních formulářů, ale zároveň ukázalo nedokončené funkce GIS.

Tato část proto zůstává otevřená. Je třeba rozhodnout, zda se propojení s GIS dokončí, nebo bude výslovně vyňato z rozsahu migrace. Závěrečné kontroly tak dávají konkrétní obraz toho, co už funguje a jaká práce ještě brání převzetí celku.

Pro HAIFA se v tomto týdnu spojily tři důležité výsledky: nové implementované funkce, podrobné zadání další agendy a ověřování podle chování původního Fenixu. Právě jejich propojení umožňuje řídit několik migrací současně a průběžně posuzovat skutečný stav každé z nich.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
