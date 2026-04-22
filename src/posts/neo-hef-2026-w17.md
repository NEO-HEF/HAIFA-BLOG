---
title: "Týden sedmý - implementace prvního modulu začala"
date: 2026-04-21
week: "Týden sedmý"
period: "20. 04. 2026 - 26. 04. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
summary: "Projekt už nevypadá jen jako analýza a plány: přibývají konkrétní implementační kroky, opravy, testy i první vrstvy kompatibility."
---
## Shrnutí pro netechnické čtenáře

Tady už je vidět první skutečně silnější implementační tempo. Nejen že existují plány a analýzy, ale do repozitáře se propisují konkrétní technické kroky, opravy, testy a průběžné code review.

Pro vedení je to dobrý signál: projekt se posouvá směrem k provozovatelné kostře aplikace a začíná být vidět, že práce má návaznost i disciplínu.

## Co se stalo

Poslední zatím viditelný týden je první silnější implementační vlna. Historie je plná kroků kolem koexistence `SPOL`/`SPK`/`RZP`, sekvenční implementace a revizí plánu. Objevují se hotové nebo reviewované kroky `SPK-S04`, `SPK-S05`, `SPK-S06`, `SPOL/SPK step 00`, `step 01/08` a navazující úpravy implementační posloupnosti.

Velký technický posun je `fork launcher to src`, nové skripty pro spouštění launcheru a `RZP`, přesun `SPOL` testů z `RZP`, opravy startu proti `MDB`, opravy diakritiky a titulků ve WinForms, fixy testů `RZP/SPOL`, UI úpravy jako status bar a ikona a také první `fenCRep compatibility facade`.

Po týdnech importu, dokumentace, analýz a PoCů se tady repo nejvíc přibližuje reálné migraci a provozovatelné kostře aplikace.

[Domů]({{ '/' | url }}) · [Souhrnný článek]({{ '/posts/neo-hef-tydenni-souhrn/' | url }})
