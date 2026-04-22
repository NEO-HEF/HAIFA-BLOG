---
title: "Ohlédnutí do historie"
date: 2026-04-22
tags:
  - post
  - neo-hef
  - historie
layout: layouts/post.njk
summary: "Přehled prvních sedmi týdnů projektu: od založení pracovního základu až po začátek první silnější implementační vlny."
---
## Shrnutí pro netechnické čtenáře

Projekt se v dostupné historii vyvíjí správným směrem. Nejprve se podařilo bezpečně dostat původní systém do repozitáře, potom se uklidila dokumentace a znalosti, následně vznikly první konkrétní analytické podklady a proof-of-concepty a nakonec se práce překlopila do prvních silnějších implementačních kroků.

Jinými slovy: není to jen sběr starých souborů. Je vidět postup od inventury přes porozumění až k první realizaci.

## Základ souhrnu

Tenhle souhrn je postavený nad lokálním zrcadlem repozitáře `NEO_HEF` a nad výstupem `git log --all`. V dostupné historii je `245` commitů v intervalu `2026-03-12` až `2026-04-22`. Statistiky jsou nad všemi refy, takže zahrnují i merge commity a branchovou práci, ne jen čistý příběh větve `develop`.

## Rychlá čísla

- Rozsah historie: prvních `7` týdnů projektu
- Sledované období: `12. 03. 2026` až `22. 04. 2026`
- Nejaktivnější autoři: `Holý Petr (136)`, `Jan Krejčí (60)`, `Kupec Alexandr (34)`, `Michaela Žočková (7)`

## Týdny

| Týden | Datum | Commity | Hlavní linie | Detail |
| --- | --- | ---: | --- | --- |
| `Týden první` | `09. 03. 2026 - 15. 03. 2026` | 21 | vzniká pracovní základ migrace | [detail týdne]({{ '/posts/neo-hef-2026-w11/' | url }}) |
| `Týden druhý` | `16. 03. 2026 - 22. 03. 2026` | 49 | systém se skládá do jednoho obrazu | [detail týdne]({{ '/posts/neo-hef-2026-w12/' | url }}) |
| `Týden třetí` | `23. 03. 2026 - 29. 03. 2026` | 17 | v dokumentaci se začíná dělat pořádek | [detail týdne]({{ '/posts/neo-hef-2026-w13/' | url }}) |
| `Týden čtvrtý` | `30. 03. 2026 - 05. 04. 2026` | 25 | z archivu vzniká migrační laboratoř | [detail týdne]({{ '/posts/neo-hef-2026-w14/' | url }}) |
| `Týden pátý` | `06. 04. 2026 - 12. 04. 2026` | 44 | přibývají hlubší rozbory a první PoC | [detail týdne]({{ '/posts/neo-hef-2026-w15/' | url }}) |
| `Týden šestý` | `13. 04. 2026 - 19. 04. 2026` | 47 | plán se mění v první spustitelné kroky | [detail týdne]({{ '/posts/neo-hef-2026-w16/' | url }}) |
| `Týden sedmý` | `20. 04. 2026 - 26. 04. 2026` | 42 | implementace prvního modulu začala | [detail týdne]({{ '/posts/neo-hef-2026-w17/' | url }}) |

## Hlavní vývojová linka

NEO_HEF se zatím vyvíjí ve čtyřech jasných vlnách. Nejdřív import legacy zdrojů a referenčních stromů. Potom úklid a vybudování dokumentační a BMAD vrstvy. Následně detailnější code dissection, prompt engineering a tiskové PoCy. A nakonec přechod do prvních implementačních kroků kolem `RZP`, `SPOL`, `SPK`, launcheru a kompatibility kolem `fenCRep`.

Detail po týdnech je rozdělený do samostatných postů, aby šel blog dál rozšiřovat bez toho, aby jeden článek přerostl do nečitelné délky.

[Domů]({{ '/' | url }})
