# AGENTS.md

## Lokální poznámky pro analýzu historie

- Při souhrnech historie repozitáře `NEO_HEF` ber `Jan Krejčí` a `Jan B. Krejčí` jako stejnou osobu.
- V raw logu se může objevit i varianta `Krejčí Jan`; při souhrnech ji normalizuj na `Jan Krejčí`.
- Pokud se budou znovu počítat statistiky autorů, nejdřív normalizuj varianty jmen a teprve potom dělej součty nebo pořadí autorů.

## Kontext pro HAIFA / NEO_HEF

- Pokud se chceš rychle zorientovat v tom, co tým HAIFA na projektu `NEO_HEF` opravdu dělá, začni v `C:\Users\User\Documents\NEO_HEF\docs\MARKDOWN_FILES.md`.
- Tenhle soubor je hlavní rozcestník do projektové dokumentace a dává přesnou terminologii, scope, architekturu, implementační plány i hotové výsledky.
- Pro veřejné články o `HAIFA` a `NEO_HEF` stavěj texty primárně na oficiálních artefaktech z `docs/`, ne jen na názvech commitů.

## Terminologie: Launcher vs. Fenix

- **Launcher** (Společný spouštěč / `SpolecnySpoustec`) **není** totéž co Fenix. Launcher je obal (shell), do kterého se Fenix moduly vkládají. Díky launcheru se moduly zobrazují v jednom okně na záložkách a Fenix pak vypadá jako jeden systém, ne jako sada samostatných aplikací.
- **Duální spouštění** je vlastnost všech modulů i jejich původních legacy verzí: uživatel si může vybrat, jestli spustí modul samostatně, nebo pod launcherem.
- Při spuštění pod launcherem se mimo jiné nastaví **named pipes** komunikace, aby launcher věděl, jestli je modul spuštěn, a uměl ho také vypnout.
- Ve článcích nikdy nezaměňuj Launcher za Fenix. Fenix = celý ERP systém; Launcher = jeho společný spouštěč.

## Redakční pravidla blogu

- Blog je o `HAIFA` a `NEO_HEF`; tón má být věcný, profesionální a srozumitelný pro laickou i odbornou veřejnost.
- U týdenních článků počítej týdny podle života projektu, ne podle ISO kalendáře: `2026-W11 = Týden první`, `2026-W12 = Týden druhý` atd.
- Každý týdenní článek má nahoře blok `Shrnutí pro netechnické čtenáře`.
- Pak teprve následuje věcná část typu `Co se stalo`.
- Ve veřejných článcích nezmiňuj interní techniku normalizace autorů ani podobné pomocné poznámky pro analytickou práci.
- Když vytváříš nové public-facing články, chovej se spíš jako reportér vysvětlující význam dění než jako archivář commitů.

## Git remotes

- Tento blog se udržuje synchronně na dvou remotech:
  - `origin` = Azure DevOps
  - `github` = GitHub
- Pokud uživatel řekne jen `pushni to`, znamená to pushnout na oba remotes.
- Pokud má jít push jen na jeden remote, musí to být řečeno explicitně.
