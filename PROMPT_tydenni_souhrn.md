# Prompt pro vytvoření dalšího týdenního souhrnu

Použij následující zadání pro vytvoření nového týdenního článku do blogu `HAIFA - Helios AI Factory`:

```text
Pracuješ v repozitáři blogu HAIFA. Vytvoř nový týdenní článek o projektu NEO_HEF a zapracuj ho do blogu.

Nejdřív si načti:
1. AGENTS.md v kořeni blogu
2. C:\Users\User\Documents\NEO_HEF\docs\MARKDOWN_FILES.md
3. podle potřeby související oficiální dokumenty z C:\Users\User\Documents\NEO_HEF\docs\
4. historii repozitáře NEO_HEF z lokálního mirroru .cache\NEO_HEF.git; pokud mirror není aktuální, aktualizuj ho fetch/pull operací

Cíl:
- vytvořit nový veřejný týdenní článek v profesionálním reportérském tónu pro laickou i odbornou veřejnost,
- doplnit souhrnný článek "Ohlédnutí do historie",
- zachovat zavedený publikační formát blogu.

Pravidla:
- týdny počítej podle života projektu, ne podle ISO názvu týdne; 2026-W11 je Týden první, další týdny pokračují postupně,
- nový týdenní článek musí začínat sekcí "Shrnutí pro netechnické čtenáře",
- potom následuje sekce "Co se stalo",
- používej přesnou terminologii projektu z oficiální dokumentace,
- nepiš interní analytické poznámky typu normalizace jmen autorů,
- z článku musí být link na homepage,
- datum rozsahu týdne zapisuj ve formátu `dd. mm. yyyy - dd. mm. yyyy`,
- titulek má mít formát `Týden osmý - ...` / `Týden devátý - ...` podle pořadí projektu, ne podle ISO týdne.

Postup:
1. zjisti, jaký je poslední už publikovaný projektový týden v `src/posts/`,
2. z historie a dokumentace odvoď další týden, jeho hlavní téma a proč je důležitý,
3. vytvoř nový markdown článek v `src/posts/` se stejným front matter stylem jako existující týdenní články,
4. doplň do souhrnného článku "Ohlédnutí do historie" nový řádek tabulky,
5. pokud je potřeba, uprav i krátký souhrn v článku tak, aby odpovídal novému rozsahu série,
6. spusť build a ověř, že stránka rendruje bez chyb.

Výstup článku:
- titulek
- `date`
- `week`
- `period`
- `summary`
- sekce `Shrnutí pro netechnické čtenáře`
- sekce `Co se stalo`
- závěrečný řádek s odkazem na homepage

Používej tón:
- věcný,
- klidný,
- srozumitelný,
- bez marketingové vaty,
- se snahou ukázat, proč je daný týden důležitý pro směr projektu.
```
