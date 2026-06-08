---
title: "Týden třináctý - RZP reporty se blíží pilotu"
date: 2026-06-07
week: "Týden třináctý"
period: "01. 06. 2026 - 07. 06. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w23
summary: "Třináctý týden posunul RZP hlavně v tisku a sestavách: vznikly další tiskové rutiny, opravovala se obsahová parita přehledů, posílily E2E testy, zpřesnilo se oprávnění menu a SPOL přidal sdílené dialogy pro průběh a chyby."
---

## Shrnutí pro netechnické čtenáře

Třináctý týden projektu HAIFA byl výrazně zaměřený na RZP, hlavně na tisky, sestavy a ověřování proti původní aplikaci. To je oblast, kde nestačí, aby se otevřelo okno a něco se zobrazilo. U účetních přehledů musí sedět obsah, součty, stránkování, hlavičky, patičky, exporty a také to, co se stane při tisku na čistém počítači nebo v instalované verzi.

Podle aktuálního manažerského shrnutí je krok RZP pro tisk a sestavy hotový zhruba z 90 %. Pro pilotní provoz s dohledem je už dostatečný, ale před plným nasazením zbývá doověřit méně časté varianty, úzké sestavy, část Excel exportů a jeden speciální číselník rozpouštěcího předpisu „odkud-kam“.

Velký posun nastal i v QA. Přibyly další robustní E2E testovací sady, katalog scénářů a návod, jak testování spouštět a rozšiřovat. Katalog RZP už obsahuje 86 E2E scénářů, z toho 48 označených jako implementované. To je důležité, protože migrace legacy ERP systému se nedá dlouhodobě uhlídat jen ručním proklikáváním.

Ve společné vrstvě SPOL vznikaly sdílené dialogy pro průběh práce, čekání, neočekávané chyby a otevření Helpdesku. Takové prvky nejsou atraktivní jako nové funkční okno, ale jsou důležité pro konzistentní chování všech modulů Fenixu.

Týden také přinesl několik praktických oprav použitelnosti: globální Vyjmout/Kopírovat/Vložit v RZP a UCV, Enter bez zbytečného pípnutí, lepší přepočet rozložení formulářů po změně rozlišení a přesnější chování menu podle vybraného majitele a oprávnění.

## Co se stalo

V týdnu od 1. do 7. června 2026 přibylo do větve `develop` celkem 45 změn. Na rozdíl od některých předchozích týdnů nešlo o rozjezd nové oblasti, ale spíš o dotažení několika rozpracovaných proudů do praktičtějšího stavu.

### RZP tisk a sestavy dostaly reálný obsah

Největší téma týdne bylo RZP-S04, tedy tisk a sestavy. Modul už umí pracovat s přehledy řad 21, 22, 23, 24 a 29: uživatel nastaví kritéria, období, stupeň, dimenze a výstupní volbu a aplikace připraví náhled, tisk, výstup do souboru nebo export do Excelu.

Důležité je, že se neřešilo jen samotné volání reportu. Tým se dostal do vrstvy skutečné obsahové parity. Opravovala se agregace přes více období, slučování řádků podle dimenzí, součty nákladů a výnosů, sekce typu `Uz`, stránkování, patičky a šířka sestav. Některé opravy vznikaly až po vizuálním porovnání nové a legacy aplikace, kdy se ukázalo, že první technicky funkční výstup ještě nestačí.

Vedle přehledů přibyly tiskové rutiny pro další obrazovky RZP: číselník nákladových a výnosových účtů včetně detailu, číselník majitelů, číselník definičních vět, seznam přijatých dat a také výběr a výsledky rozpouštění. Tím se RZP posunulo od jednotlivých funkčních formulářů k použitelnějším pracovním scénářům.

Současně se opravovaly praktické chyby vlastního rozpouštění: výpočty v rozpouštěcím předpisu KAM, rollover logika v běhu rozpouštění a další detaily kolem čtení dat a výsledků. To jsou přesně místa, kde se migrovaná aplikace musí chovat jako pracovní nástroj, ne jako demo.

### Distribuce reportů se přiblížila reálné instalaci

Do vývoje se promítly i zkušenosti s připravovanou MSIX distribucí. Reportovací část už nemůže spoléhat na to, že na počítači existuje původní legacy MSI instalace a ručně nakopírované pomocné soubory.

Proto se řešilo přibalení reportovacího workeru, umístění `NeoFenixpom.mdb` jako nasazovaného obsahu a hledání šablon i na čistém stroji. Dokumentace instalačních předpokladů teď výslovně říká, že `NeoFenixpom.mdb` se už nemá kopírovat ručně. To je malý, ale důležitý krok k tomu, aby nové moduly šly opravdu instalovat a aktualizovat standardním způsobem.

### Oprávnění a kontext majitele jsou přesnější

RZP také zpřesnilo práci s oprávněními. Menu Přehledy i další horní položky menu se teď víc drží legacy pravidla: nestačí mít jen oprávnění, musí být vybraný i majitel, pokud to původní aplikace vyžadovala. Stejný princip se týká i GDPR položek.

Tohle je pro uživatele méně viditelné než nová sestava, ale pro provoz ERP systému je to zásadní. Aplikace nemá nabízet akce, které v daném kontextu nedávají smysl, nebo které by legacy verze také nepovolila. Tým se tím znovu vrací k hlavnímu pravidlu migrace: nepřidávat kreativní chování navíc, ale držet se původního Fenixu.

### QA se mění na systematickou knihovnu scénářů

QA tým rozšířil E2E testování RZP. Přibyly nové testovací sady pro rozpouštěcí předpisy, stupně, zdrojové účty ODKUD, cílové účty KAM, kopírování předpisu, hledání a další scénáře. U části sad existují XLSX podklady, strojově čitelné JSON definice, záznam v E2E katalogu a odpovídající C# testy.

K tomu přibyl přehledný návod pro spouštění QA: smoke, unit, E2E, filtrované běhy podle epiku nebo sady, izolované buildy a reporty. Praktický význam je jasný: když se změní konkrétní formulář nebo workflow, nemusí se testovat naslepo. Dá se pustit odpovídající část katalogu a postupně budovat důkaz, že nová verze pořád funguje.

Aktuální E2E katalog RZP obsahuje 86 scénářů. Není to hotová kompletní testovací síť, ale už je to základ, který může růst spolu s migrací a dávat týmu pevnější oporu než ruční kontrola po každé změně.

### SPOL přidal sdílené dialogy a chybový tok

Ve společné vrstvě SPOL pokračovala práce na uživatelských dialozích, které budou potřebovat i další moduly. Vznikl sdílený progress dialog podle legacy `SPHZPR`, detailní čekací/throbber dialog podle `SPHZTL` a `SPHZBT` a sdílený dialog pro neočekávané chyby.

Chybový tok už umí zobrazit detail chyby, nabídnout kopírování, řešit ukončení nebo restart aplikace a v nové verzi tlačítka `Helpdesk...` otevřít webový Helpdesk. Důležité je, že SPOL tyto věci staví jako společné komponenty. RZP ani další moduly je pak nemusí vytvářet znovu a mohou se držet stejného chování.

### Každodenní ovládání se dál leští

Vedle velkých témat se opravovaly i věci, které uživatelé vnímají okamžitě. Globální Vyjmout/Kopírovat/Vložit teď funguje konzistentněji v RZP i UCV. Enter už není zbytečně svázaný s pípnutím. Formuláře s dimenzemi se lépe přepočítají po změně rozlišení.

Ožil také formulář Nastavení, včetně vlivu na barvy aktivních polí, popisy dimenzí a chování sestav. U rozpouštěcích předpisů se opravovaly hlášky a validace, aby se aplikace při chybách chovala blíž původnímu Fenixu.

## Význam týdne

Třináctý týden ukázal, jak náročná je fáze po prvním „ono to běží“. RZP už má řadu funkčních částí, ale právě reporty a tisky ukazují, že skutečná migrace znamená přesné součty, stejné sekce, stejné stránkování, stejné výstupy a stejné provozní předpoklady.

Dobrá zpráva je, že projekt se posunul blíž pilotní použitelnosti. Ještě důležitější ale je, že se vedle implementace posiluje i infrastruktura kolem ní: E2E katalog, QA workflow, sdílené SPOL dialogy a instalační předpoklady pro MSIX svět.

Zbývají otevřené body. Ne všechny varianty sestav jsou ověřené kus po kuse, část Excel exportů bude potřebovat další kontrolu a některé speciální obrazovky ještě nejsou hotové ve stejné věrnosti jako běžnější scénáře. Směr je ale zřetelný: tým se dostává od převodu formulářů k ověřitelné, instalovatelné a pilotně použitelné aplikaci.
