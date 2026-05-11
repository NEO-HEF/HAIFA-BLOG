---
title: "Týden devátý - RZP naráží na realitu uživatelského rozhraní"
date: 2026-05-10
week: "Týden devátý"
period: "04. 05. 2026 - 10. 05. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w19
summary: "Nový VB6 → .NET WinForms skill zlepšil vizuální věrnost nově převáděných formulářů RZP, hlavně vzhled a rozložení. Funkčnost takto vytvořených prvků je ale potřeba dál dotáhnout."
---
## Shrnutí pro netechnické čtenáře

Devátý týden byl pro projekt důležitý hlavně tím, že odhalil tvrdší část migrace: převod uživatelského rozhraní. Dokud se řešily analýzy, plány, sdílené služby a nevizuální kód, šla práce s AI agentem poměrně dobře řídit. Jakmile ale přišly na řadu konkrétní formuláře RZP, ukázalo se, že nestačí „nějak“ vytvořit podobné okno.

Nově připravený VB6 → .NET WinForms migrační skill už přinesl viditelné zlepšení. Nově převáděné formuláře jsou věrnější původnímu systému hlavně vzhledem a rozložením ovládacích prvků než první pokusy. Zároveň ale platí, že vizuální věrnost sama o sobě nestačí: funkčnost takto vytvořených prvků, jejich napojení na chování aplikace a skutečná použitelnost workflow se musí dál zlepšovat.

Uživatelé ve Fenixu nepracují s abstraktní architekturou. Pracují s konkrétními obrazovkami, nabídkami, tlačítky, dialogy a zvyklostmi. Pokud se formulář sloučí s jiným, přeskupí se ovládací prvky nebo změní typ pole, nejde jen o vzhled. Mění se pracovní postup. Devátý týden proto přinesl zpřísnění pravidel: přesnější tasky, status audit, validační poznámky, specializovaný VB6 → .NET WinForms migrační skill a více testů zaměřených na paritu.

Současně pokračovala praktická integrace RZP. Řešilo se GDPR/OOU menu ve standalone spuštění, napojení na launcher lifecycle, vyhledávání, účty, definiční věty, číselníky, help, about dialog, licence a sdílený reporting wrapper ve `SPOL`. Projekt se tím dostal do fáze, kde se technická architektura potkává s uživatelskou realitou.

## Co se stalo

Historie týdne pokrývá období `04. 05. 2026` až `10. 05. 2026`; v dostupné historii je za něj `63` commitů, soustředěných hlavně do dnů `04. 05.` až `07. 05.`. Hlavní linka je zřetelná: `RZP-S01` už nešlo dál brát jako jeden široký blok „master data and navigation“. Tým ho rozdělil na menší větve pro owner, search, account, definition, settings a codelisty a znovu zkontroloval skutečný stav proti repozitáři.

Tohle rozdělení je důležitější, než může na první pohled vypadat. Původní široký krok už nedokázal přesně říct, co je hotové a co je jen částečně přítomné v kódu. Některé části měly formulář, ale neměly dotažené chování. Jiné měly backend, ale ne plnou UI paritu. Nový status audit proto rozlišil mezi tím, že „kód existuje“, a tím, že „task contract je opravdu splněný“. To je zdravý posun směrem k ověřitelné migraci, ne jen k rychlé produkci souborů.

Největší pozornost patřila uživatelskému rozhraní RZP. Pracovalo se na formulářích pro vlastníka, hledání, účty a definiční věty. Přibývaly parity testy pro rozměry, layout, aktivní komponenty a chování formulářů. U definičních vět se řešily dynamické dimenze, filtrování, vyhledávání, event handling i legacy kompatibilita. U účtů vznikaly nově generované formy a následné doplnění legacy logiky. U vlastníka se přidávalo hledání a nápověda.

Zároveň vznikl specializovaný skill pro migraci VB6 formulářů do .NET WinForms. Jeho smysl je přesně omezit chyby, na které tým narazil: slučování formulářů, vymýšlení nových ovládacích prvků, záměny typů polí, drift layoutu nebo chybějící vizuální důkaz. Skill zavádí determinističtější postup: nejdřív parsovat původní `.frm`, potom generovat cílový formulář, ověřit strukturální paritu a teprve pak napojovat chování. To je praktická reakce na zjištění, že běžné AI generování UI není pro takovou migraci dostatečně spolehlivé.

Druhá velká linka byla runtime integrace RZP. Ve standalone režimu se řešilo, proč se po přihlášení nezobrazuje root menu `GDPR` uživatelům, kteří mají příslušná legacy práva. Postupně se opravovalo předávání loginu, načítání oprávnění, práce s DSN-only connection stringem i OleDb parametrizace ve SPOL permission cache. Nakonec se potvrdilo, že `GDPR` menu funguje a že OOU akce mají běžet přes instalované `OOU.exe` v prostředí Fenixu, ne přes lokálně vymyšlenou zkratku.

Pokračovala také práce na společných službách. `SPOL-S06` přinesl reporting wrapper pro legacy `frmsp_cr`: jasnější oddělení report requestu od režimu výstupu, podporu preview/print/modal flow a ochranu nastavení preferovaného tiskového dialogu. V oblasti nápovědy a informací o aplikaci se doplňovaly detaily pro about dialog, informace o instalaci, stanici a licenčních záznamech. Vedle toho vznikaly nové QA podklady, scénáře a skripty pro jednotnější spouštění testů.

Devátý týden tak ukazuje posun od „máme funkční základ“ k mnohem přísnější otázce: odpovídá nové RZP skutečně tomu, co uživatel zná z původního systému? Odpověď zatím není hotová, ale projekt udělal důležitou věc: přestal se spokojovat s hrubým přepisem a začal systematicky měřit paritu, vlastnictví a skutečnou použitelnost.

[Domů]({{ '/' | url }})
