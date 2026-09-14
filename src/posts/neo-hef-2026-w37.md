---
title: "Týden sedmadvacátý - UIR dokončuje základ jedenácti číselníků, UPD otevírá režim /reg a UCV zpřesňuje důkazy parity"
date: 2026-09-13
week: "Týden sedmadvacátý"
period: "07. 09. 2026 - 13. 09. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w37
summary: "Sedmadvacátý týden dokončil číselníkový základ UIR včetně auditní stopy, otevřel registrační režim UPD přes databázový účet a doplnil UCV o živé důkazy shody i dříve chybějící provozní cesty."
---

## Shrnutí pro netechnické čtenáře

Sedmadvacátý týden projektu NEO_HEF přinesl nejviditelnější posun v modulu UIR, který spravuje územní identifikaci a adresní data. Tým během několika navazujících vln dokončil základ jedenácti vzájemně propojených číselníků: od států, okresů a obcí přes části obcí, městské části a katastrální území až po ulice, volební okrsky a poštovní směrovací čísla. Nejde jen o tabulky na obrazovce. Každá oblast zahrnuje načtení dat, vyhledávání, detail, ukládání, kontroly, oprávnění a zapojení do skutečné nabídky aplikace.

Po dokončení číselníků následovala ještě samostatná kontrolní vlna. Ta odhalila, že formuláře sice skládaly správné texty pro evidenci změn, ale zápis nikam nevedl. Nová auditní vrstva proto propojila deset uživatelsky dostupných číselníků se společnou evidencí událostí Fenixu. U každého založení, opravy nebo smazání se nyní uchovává nejen popis, ale také vazba na konkrétní záznam a tabulku. Živý pokus potvrdil zápis do skutečné auditní tabulky; souhrnná sada UIR po dokončení skončila na 3386 úspěšných testech bez selhání.

UPD, tedy modul pro upgrade a servis databáze, doplnil třetí způsob připojení. Vedle běžného interaktivního startu a neobsluhovaného spuštění z Automatických aktualizací nyní umí také registrační režim `/reg`, který se přihlašuje přímo databázovým účtem. Po úspěšném připojení se otevře zvláštní servisní okno se správným titulkem a omezenou nabídkou. Pět dosavadních testovacích pojistek, které jen oznamovaly chybějící implementaci, bylo nahrazeno skutečnými scénáři. Samotné vytváření prázdné databáze však ještě implementované není a aplikace to dál otevřeně hlásí.

UCV se posunulo hlavně v kvalitě důkazů. Historický výstup JASÚ byl poprvé spuštěn stejným způsobem v původní i nové aplikaci nad daty roku 2008. Pět souborů, manifest, 660 řádků opisu a závěrečná hláška se po jediné evidované normalizaci času shodly znak po znaku. Živý běh zároveň odhalil jednu skutečnou vadu formátování a dvě chyby v testovacím aparátu. Právě to je smyslem porovnání se starým systémem: nestačí, aby test prošel; musí také měřit správnou věc.

Týden přinesl i širší korekci UCV. Úplný průchod původním kódem našel 63 živých zápisů do evidence událostí, zatímco původní úkol počítal jen s 31. Všechny byly převedeny, včetně 28 míst v automatických úpravách databázového schématu, které byly nejprve chybně vyřazeny. Projekt tím zpřesnil důležité pravidlo: nová aplikace nesmí vymýšlet vlastní změny databáze, ale musí věrně provést změny, které při startu dělá původní Fenix.

## Co se stalo

V týdnu od 7. do 13. září 2026 přibylo na větvi `origin/develop` 203 commitů, z toho 80 merge commitů. Největší souvislý celek vznikl v UIR, kde se do hlavní větve postupně sloučily čtyři migrační vlny. Významná práce pokračovala také v UCV, UPD, společné vrstvě SPOL, automatizovaném testování a balení aplikací. Větev `origin/release/10.01` tento týden změnu nedostala.

### UIR dokončuje číselníkovou fázi ve čtyřech řízených vlnách

Číselníky v UIR tvoří hierarchii. Obec patří do okresu, část obce a městská část se vážou na obec, katastrální území a základní sídelní jednotky používají další společné klíče a ulice, názvy ulic, volební okrsky či PSČ na tuto strukturu navazují. Proto je nebylo možné převádět jako jeden seznam nezávislých oken.

První tři vlny rozdělily 34 implementačních úloh podle závislostí. První přinesla státy, okresy, části obcí a městské části. Druhá navázala katastrálními územími, základními sídelními jednotkami, názvy ulic a veřejných prostranství a volebními okrsky. Třetí doplnila obce, ulice a veřejná prostranství a PSČ, které už mohly stavět na dříve hotových vrstvách.

Každý krok zahrnoval více než samotný vzhled formuláře. Vznikly datové modely a repozitáře, seznamové a detailní obrazovky, filtrování, pravidla pro nový záznam, opravu a smazání, vazby na oprávnění i otevření ze skutečné nabídky modulu. Živé brány ověřovaly vybrané formuláře proti dostupné databázi a porovnávaly chování s původní aplikací. Kontroly přitom zachytily i jemné rozdíly, například kdy se má po chybě zachovat původní obsah seznamu, která pole smějí být při opravě změněna nebo jak přesně se mají skládat klíče navazujících záznamů.

Výsledkem není hotový celý modul UIR. Je ale dokončený důležitý opakovatelný vzor pro číselníky a jedenáct konkrétních oblastí už má svou aplikační, databázovou i uživatelskou vrstvu. Další části UIR na ně mohou přímo navazovat místo toho, aby si znovu vytvářely vlastní způsob práce se stejnými daty.

### Samostatná kontrola našla chybějící auditní stopu

Po třech číselníkových vlnách se ukázala typická integrační mezera. Devět formulářů už při změnách vytvářelo správné texty evidence, ale jejich auditní výstup zůstával nezapojený. U okresů chyběl i samotný port tří živých volání. Uživatelská operace tedy mohla být funkční, ale společný přehled událostí by o ní nevěděl.

Čtvrtá vlna vytvořila modulové rozhraní nad společným zapisovačem SPOL a připojila k němu všech deset uživatelsky dosažitelných číselníků. Zápis zachovává původní význam: nese popis akce, závažnost, přihlášeného uživatele, identifikátor měněného záznamu a typ vazby. Stejně jako v legacy aplikaci nesmí selhání pomocného auditu změnit výsledek hlavní uživatelské operace.

Souhrnná kontrola porovnala 34 volání v původním kódu s novou aplikací. Třicet jedna má přímý protějšek a u tří zbývajících je doloženo, že leží v mrtvé, uživatelsky nedosažitelné obsluze. Jeden zápis byl navíc ověřen produkční cestou až do tabulky `sau_logfenix`. Celá sada UIR po této vlně prošla s 3386 testy, žádným selháním a žádným přeskočeným případem.

### UPD se v režimu `/reg` připojí databázovým účtem

Servisní režim `/reg` nepoužívá běžné přihlášení uživatele Fenixu. Stejně jako původní aplikace zobrazí zvláštní dialog pro databázový účet, vytvoří odpovídající databázový kontext a teprve potom otevře registrační okno. Tato cesta byla dosud přerušená po upozornění na nutnost databázového přihlášení.

Společná vrstva SPOL nejprve dodala dialog, připojení a runtime stav databázového účtu. UPD na ni následně napojilo svůj start. Po úspěchu používá předané DSN a login v titulku okna, nastaví správný omezený stav nabídky a zachová dostupnou dokumentaci, nápovědu a ukončení aplikace. Po neúspěšném připojení se servisní okno vůbec neotevře, takže nevznikne napůl připojený stav.

Pět scénářů, které dosud záměrně selhávaly jako upozornění na chybějící cestu, nyní ověřuje skutečné chování: titulek, podobu nabídky, dostupné pomocné volby, stále nezapojené vytvoření prázdné databáze a bezpečné ukončení po neúspěšném přihlášení. Databázi při tom nemění. Jde o dokončený předpoklad pro budoucí servisní práci, nikoli o dokončení celého generátoru prázdné databáze.

### Automatické aktualizace dostaly věrnější zkoušku startu UPD

Napojení UPD na Automatické aktualizace z předchozího týdne prošlo dalším kolem ověřování. Tým vytvořil emulátor, který spouští modul ve stejném tvaru příkazové řádky a se stejným typem pojmenované roury, jaký používá původní aktualizační služba. Test potvrdil, že se proces správně přepne do neobsluhovaného režimu, nezobrazí přihlašovací dialog a vrátí protokol i návratový kód.

Tento důkaz má záměrně omezený rozsah. Ověřuje kontrakt spuštění a komunikace, nikoli plný upgrade přes skutečnou binárku Automatických aktualizací. Dokumentace proto dál jmenovitě vede neověřené části, například běh z instalačního adresáře a chování při zaplnění komunikační roury. Důležitým výsledkem je vedle funkčního emulátoru právě to, že dílčí test nebyl vydáván za širší provozní důkaz.

### UCV převádí kompletní evidenci událostí a opravuje pravidlo pro schéma

Původní zadání pro audit UCV uvádělo 31 zápisů ve dvanácti souborech. Strojový průchod celým legacy modulem ale našel 63 živých volání v patnácti souborech. Chybějící soubory přitom skutečně patřily do projektu UCV a některé jejich operace už v nové aplikaci existovaly. Přidržet se jen původního seznamu by proto znamenalo vytvořit neúplný port.

Nová společná obálka UCV nyní zapisuje všech 63 událostí přes existující auditní infrastrukturu SPOL. Pokrývá sestavení, uložení, smazání a předání výkazů, příjem historických dat, změnu období, práci s přílohami, odpovědnými osobami, ARES i další provozní akce. U událostí, které původní Fenix váže ke konkrétnímu výkazu nebo organizaci, se zachovává také identifikátor a typ vazby.

Zvláštní pozornost si vyžádalo 28 volání v osmi rutinách automatické úpravy databázového schématu. Ta byla během prvního posouzení vyřazena s odkazem na zákaz změn schématu. Následná revize ukázala, že šlo o nesprávný výklad: zákaz míří na nové změny vymyšlené portem, nikoli na změny, které při startu skutečně provádí původní Fenix. Všechny příslušné rutiny proto byly věrně doplněny včetně původních kontrol existence a pořadí volání.

Tato korekce je důležitější než samotný počet opravených míst. Ukazuje, proč se pravidla migrace musí vykládat proti pozorovatelnému chování původního systému. Bez této kontroly by formálně opatrné rozhodnutí vytvořilo funkční rozdíl právě tam, kde mají stará a nová aplikace dál sdílet jednu databázi.

### Živý golden JASÚ se shoduje znak po znaku

Historický výstup JASÚ prošel porovnáním nad účetním rokem 2008 a obdobím 12. Původní UCV vytvořilo pět výstupních souborů pro pět organizací, celkem 376 vět, pětiřádkový manifest a 660 řádků opisu na jedenácti stranách. Nový use case nad stejnými daty vytvořil po normalizaci časové patičky totožný obsah ve všech čtyřech porovnávaných částech.

Živé měření našlo tři problémy. Produkční opis v novém UCV chybně doplňoval každý řádek na 80 znaků, ačkoli původní proměnná měla ve skutečnosti proměnlivou délku. Dvě další chyby byly v testovacím aparátu: jedna větev používala nesprávný příznak dostupných sloupců a druhá řadila výkazy podle jejich čísla místo podle pořadí v uživatelské mřížce. Všechny tři byly opraveny a opakovatelný golden je uložený jako regresní pojistka.

Ověření má i přesně popsanou hranici. Dostupná data pokryla hlavní rodiny emitorů, ale neobsahovala výkaz typu 20, takže jeho nabídnutí v dialogu je doložené, jeho skutečný výstup však zatím živý golden nepokrývá.

### Tiskové sestavy UCV prošly celým řetězcem

Vedle výkazového tisku se uzavřela také sestavová polovina bloku H. Šest různých sestav — od definice vazeb s více než 72 tisíci řádky přes protokol kontrol až po sestavy S147 a S148 — reprodukuje zachycený výstup původní aplikace na bajt. Čtyři výstupy byly následně vyrenderovány skutečným procesem `ReportGenerator.exe`.

Právě tento plný průchod našel v obecné reportovací vrstvě problém s uloženými daty uvnitř Crystal šablony. Při exportu mimo náhled se zdroj neobnovil a sestava mohla vrátit historický obsah z roku 2000 bez ohledu na právě připravená data. Oprava v SPOL nyní před exportem vynutí obnovení dat; pokud zdroj není dostupný, render raději selže, než aby tiše vytiskl starý obsah.

### Testování dostává širší společný katalog

Do UCV přibylo dvanáct robustních testovacích sad. Pokrývají mimo jiné číselníky a skryté volby, import a export definic, ukládání sestav, vytváření a mazání výkazů, méně používané rodiny i protokol schválení účetní závěrky. Testovací scénáře tím postupně přecházejí od obecných seznamů k přesným, opakovatelným postupům s očekávanými výsledky.

Samostatný katalog vznikl také pro společnou vrstvu SPOL. Devatenáct sad popisuje přihlášení, licence, oprávnění, souběžnou editaci, uživatelská nastavení, tisk, dlouhé operace, nápovědu, práci s chybami i nesoulad verze aplikace a databáze. Tyto schopnosti používá více modulů, takže jejich samostatné ověřování omezuje riziko, že stejná chyba bude v každém modulu hledána jiným způsobem.

GUI testy se zároveň přesunuly na skrytou pracovní plochu Windows. Jednotlivé sady se tak nepřetahují o aktivní okno s uživatelem ani mezi sebou. Pro paralelní běh je stále nutné oddělit databáze a sestavené soubory, ale izolace pracovní plochy odstraňuje jednu z hlavních příčin nestability klikacích testů.

### Drobnější opravy dorovnávají provozní detaily

RZP zpřesnilo titulky a ikony uživatelských hlášek podle původního Fenixu a doplnilo startovní větev pro situaci, kdy uživatel ještě nemá k dispozici žádného majitele. Balení RZP, UCV a instalátoru dostalo deklaraci pro nevirtualizovaný přístup do registru, aby nastavení zapisované aplikací nebylo přesměrováno do odděleného prostoru balíčku.

U UCV se opravily i jednotlivé paritní detaily: rozměry úzkých sestav, stránkování sestavy peněžních toků, výběr období při příjmu ARIS a JASÚ, titulky hlášek, orientace papíru a další okrajové větve. Samostatně vypadají malé, ale právě jejich součet rozhoduje, zda může nový modul dlouhodobě nahradit původní aplikaci bez překvapení pro uživatele.

### Význam týdne

Sedmadvacátý týden spojil rychlost s důslednou kontrolou hranic. UIR během několika dnů dokončilo velkou, vzájemně provázanou číselníkovou oblast a vzápětí nad ní provedlo průřezovou kontrolu auditu. UPD uzavřelo další startovní cestu, ale neskrývá, že vlastní tvorba prázdné databáze teprve čeká na implementaci. UCV získalo silné živé důkazy, a současně opravilo vlastní testy i dřívější rozhodnutí, která se ukázala jako příliš úzká.

Pro směr HAIFA je podstatný právě tento způsob práce. AI agenti mohou převádět rozsáhlé celky rychle, řiditelnost ale vzniká až kombinací závislostí, průběžných bran, živého porovnání a ochoty vrátit se k předpokladu, který data vyvrátila. Tento týden přinesl konkrétní pokrok ve třech modulech a zároveň několik použitelných pravidel pro další migrační vlny.

[Zpět na hlavní stránku]({{ lang | homeUrl | url }})
