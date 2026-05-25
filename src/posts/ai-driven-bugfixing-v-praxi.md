---
title: "AI-driven bugfixing v praxi"
date: 2026-05-25
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - ai
  - bugfixing
layout: layouts/post.njk
lang: cs
translationKey: ai-driven-bugfixing-v-praxi
summary: "Dobře zadaná oprava chyby může s AI agentem vypadat jinak: agent si chybu sám zreprodukuje v aplikaci, opraví ji a předloží důkaz, že se chování změnilo."
---
## Shrnutí pro netechnické čtenáře

Jedna z příjemnějších stránek práce s AI agentem je chvíle, kdy dostane přesné zadání a může uzavřít celý cyklus opravy chyby: chybu si sám najde v aplikaci, zreprodukuje ji, opraví a nakonec předloží důkaz, že se chování skutečně změnilo.

Právě takový případ se odehrál v RZP. Jeden z členů týmu si všiml, že nový modul v číselníku nákladových a výnosových účtů ukazuje pro vybraného majitele více záznamů než původní legacy aplikace, a rovnou zadal AI agentovi, aby chybu opravil. Zadání nebylo jen „oprav filtr“. Agent měl aplikaci sám spustit, proklikat se k problému, porovnat chování s očekáváním, najít příčinu, upravit kód a dodat ověřitelný důkaz.

Celá seance trvala přibližně dvě hodiny. Výsledek je zachycený v přiloženém HTML reportu: obsahuje popis zjištěné chyby, databázové ověření, příčinu, provedenou opravu, screenshoty před a po opravě, testy i seznam změněných souborů.

<figure class="post-media">
  <a href="{{ '/assets/html/rzp-typpred-filter-fix-proof.html' | url }}" target="_blank" rel="noopener">
    <img class="post-video" src="{{ '/assets/images/rzp-typpred-filter-fix-proof-preview.png' | url }}" alt="Náhled důkazu opravy filtru typ_pred v RZP">
  </a>
  <figcaption>Důkaz opravy filtru v číselníku nákladových a výnosových účtů RZP. Kliknutím na náhled se otevře celý HTML report v nové kartě.</figcaption>
</figure>

## Co bylo špatně

Chyba se týkala číselníku nákladových a výnosových účtů. Ten se má v RZP řídit aktuálně vybraným majitelem a jeho typem předpisu. V legacy aplikaci se proto pro konkrétního majitele zobrazil jen odpovídající výběr účtů.

V nové verzi se ale pro stejnou situaci zobrazovalo více záznamů, než mělo. Report uvádí příklad majitele s IČO `70106975`, který měl vidět dva účty, ale nová aplikace ukazovala širší sadu. Bez správného filtru by uživatel mohl pracovat s účty, které do daného kontextu vůbec nepatří.

AI agent postupoval od týmového pozorování k technickému důkazu. Nejdřív si ověřil očekávaný stav v databázi, potom chybu reprodukoval v běžící aplikaci a teprve potom hledal příčinu v kódu.

## Co oprava ukázala

Technická příčina byla kombinovaná. Jedna část problému souvisela s tím, jak se vytvářel formulář `AccountCodebookForm` a jak si dependency injection vybírala konstruktor. Druhá část se týkala vazby SQL parametrů přes OleDb. Výsledkem bylo, že filtr podle `typ_pred` nebyl v runtime cestě použitý tak, jak měl.

Oprava sjednotila vytváření formuláře, upravila práci s dotazem a doplnila testy. Report dokládá i konkrétní runtime výsledek: po opravě se pro různé majitele zobrazují jen jejich odpovídající záznamy. Součástí ověření je také cílená testovací sada, která v reportu uvádí `68 / 68 PASS`.

Tohle je přesně typ práce, kde AI agent může být užitečný. Ne proto, že by magicky „uhádl“ správnou opravu, ale proto, že při dobrém zadání dokáže projít delší technickou smyčku: spustit aplikaci, sbírat stopy, číst kód, upravit implementaci a vrátit výsledek v podobě důkazu.

## Vedlejší zisk

Během opravy se podařilo najít a vyřešit ještě jednu drobnou nedokonalost. Při změně majitele v modulu RZP se automaticky nezavíraly všechny otevřené formuláře.

Na první pohled to může vypadat jako detail, ale v legacy Fenixu jde o záměrné chování. Když uživatel změní majitele, otevřené formuláře se zavřou, aby se nemusel řešit živý reload všech rozpracovaných obrazovek do nového kontextu. Takový reload by byl u podobného ERP systému příliš komplexní a náchylný k chybám.

Nová verze RZP se tím přiblížila původnímu chování. A to je u migrace důležité: nejde jen o opravu jedné viditelné chyby, ale i o zachytávání podobných drobných pravidel, která v legacy aplikaci vznikla z praktických důvodů.

## Proč je to důležité

Tento příklad dobře ukazuje, že AI-driven bugfixing není jen rychlé generování patchů. Hodnota vzniká až ve chvíli, kdy je agent vedený k ověřitelnému výsledku. Nestačí, aby napsal, že chybu opravil. Musí ukázat, jak ji reprodukoval, co změnil, jaké testy prošly a jak vypadá aplikace po opravě.

Pro HAIFA tým je to důležitý vzor práce. U migrace legacy systému bude podobných chyb hodně: některé budou vidět ve formuláři, jiné v datech, další až v rozdílu mezi novou a původní aplikací. Pokud se podaří udržet tento způsob zadávání a dokazování oprav, může být fixování chyb s AI agentem nejen rychlejší, ale i překvapivě příjemné.

[Domů]({{ '/' | url }})
