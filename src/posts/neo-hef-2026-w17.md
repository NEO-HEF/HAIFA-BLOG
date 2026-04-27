---
title: "Týden sedmý - první implementační vlna nabírá tvar"
date: 2026-04-26
week: "Týden sedmý"
period: "20. 04. 2026 - 26. 04. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
lang: cs
translationKey: neo-hef-2026-w17
summary: "Projekt už nevypadá jen jako analýza a plány: přibývá sdílená infrastruktura, první části SPOL/SPK, RZP integrace, přihlašování, audit i reportovací vrstva."
---
## Shrnutí pro netechnické čtenáře

Sedmý týden je první opravdu výrazná implementační vlna. Projekt se posouvá od plánů a PoCů k tomu, aby nová aplikace měla společné stavební bloky: spuštění, přihlášení, práci s databází, zamykání, audit a první obrys sdíleného reportingu.

Pro vedení je podstatné hlavně to, že nejde o izolované pokusy. Jednotlivé části začínají zapadat do společné kostry, na kterou mohou navazovat konkrétní moduly.

## Co se stalo

Historie týdne ukazuje hlavně zrychlení kolem společných vrstev `SPOL` a `SPK` a jejich napojení na `RZP`. Dokončují se nebo revidují kroky `SPOL/SPK step 00`, `step 01/08`, `SPK-S04`, `SPK-S05`, `SPK-S06` a navazující části implementační posloupnosti. K tomu přibývá formální sign-off některých kroků, průběžné code review a zpřesňování dokumentace.

Vedle toho se pracuje na praktické spustitelnosti. Do zdrojového stromu se přesouvá launcher, vznikají skripty pro spuštění launcheru a `RZP`, opravuje se start aplikace proti `MDB`, přesouvají se `SPOL` testy z `RZP` do správné vrstvy a ladí se uživatelské detaily ve WinForms, například titulky, diakritika, status bar a ikona.

Významný je také posun ve společné infrastruktuře. Přibývá login panel a odpovědnosti přihlašovacího formuláře, odstraňuje se starý Oracle provider, vzniká infrastruktura pro DB autentizaci, transakční zamykání, registry-only konfiguraci s lazy write-back a audit lifecycle službu. Současně se do `SPOL` přesouvá práce na `fenCRep` kompatibilitě, tedy na budoucí společné vrstvě pro Crystal Reports.

Týden sedmý proto není jen „začali jsme psát kód“. Je to týden, kdy se začíná formovat společný základ nové aplikace: aby šla spustit, přihlásit, pracovala s databází, měla auditovatelné chování a dokázala postupně převzít i problematické oblasti typu tiskových sestav.

[Domů]({{ '/' | url }}) · [Souhrnný článek]({{ '/posts/neo-hef-tydenni-souhrn/' | url }})
