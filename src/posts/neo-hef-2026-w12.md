---
title: "Týden druhý - systém se skládá do jednoho obrazu"
date: 2026-03-22
week: "Týden druhý"
period: "16. 03. 2026 - 22. 03. 2026"
tags:
  - post
  - neo-hef
  - historie
  - tyden
layout: layouts/post.njk
summary: "Tým výrazně rozšířil pokrytí systému v repozitáři a založil i referenční stopu původního stavu, takže další práce má pevnější oporu."
---
## Shrnutí pro netechnické čtenáře

V tomhle týdnu se projekt výrazně nadechl. Do repozitáře přibylo velké množství dalších částí systému a zároveň vznikla i oddělená referenční kopie původního stavu. Prakticky to znamená, že tým už nepracuje jen s výřezem aplikace, ale s mnohem úplnějším obrazem reality.

Pro další směr je to pozitivní posun. Čím přesněji je zachycen výchozí stav, tím menší je riziko, že se při migraci něco důležitého přehlédne.

## Co se stalo

Týden druhý projektu přináší největší vlnu importu legacy kódu. Do repa jdou další moduly `POK`, `CES`, `Konto`, `RUV`, `RZP`, `REN`, `UIR`, `VOL`, `SAU`, `UPD`, `Spouštěč`, `IRE`, `OOU`, `USP`, `ROR`, `Adresa` a také sada sdílených komponent jako `fenCRep`, `fenGrid`, `fenODBC`, `fenSystem`, `fenTools` nebo `flexText`.

Současně se zakládá druhá velká stopa původního stavu pod `legacy_original`. V historii jsou velké importy podsložek, binárek a testovacích částí, plus dokument `architektura-soubeh-vb6-dotnet.md`, interní pokyny pro agenty a úpravy `VBP` referencí.

Tohle je týden, kdy si tým vytváří jak pracovní kopii legacy stromu, tak referenční otisk původního stavu. Bez toho by pozdější analýza a migrace neměla pevný bod srovnání.

[Domů]({{ '/' | url }}) · [Souhrnný článek]({{ '/posts/neo-hef-tydenni-souhrn/' | url }})
