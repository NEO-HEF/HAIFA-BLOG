---
title: "Co je NEO_HEF a proč na něm záleží"
date: 2026-04-18
tags:
  - post
  - haifa
  - neo-hef
  - vysvetleni
layout: layouts/post.njk
summary: "NEO_HEF není vývoj nové aplikace, ale technologická obnova kritického ERP systému, který dnes používají zhruba dva tisíce organizací veřejné správy."
---
## Shrnutí pro netechnické čtenáře

NEO_HEF je projekt, který má zajistit, aby systém Fenix mohl bezpečně žít dál. Nejde o kosmetickou modernizaci ani o přepis „protože je to hezčí“. Jde o to, že původní technologie Visual Basic 6 je dávno za hranou životnosti a bez řízené migrace by se z produktu postupně stával provozní problém.

To dává projektu mimořádnou váhu. Fenix používají přibližně dva tisíce subjektů veřejné správy, takže technologické rozhodnutí v zákulisí má přímý dopad na stabilitu velmi široké části reálného provozu.

## Co to znamená v praxi

Podle produktového briefu je cílem projektu **1:1 migrace** Fenixu z VB6 do moderního `.NET` prostředí. To znamená bez nové funkcionality, bez redesignu uživatelského rozhraní a bez velkého třesku pro koncové uživatele. Pro ně se ideálně nemá změnit nic viditelného; změnit se má technologický základ pod povrchem.

To je zároveň důvod, proč je projekt tak náročný. Nejde o greenfield. Tým nepíše nový produkt podle čistého zadání, ale převádí rozsáhlý a historicky vrstvený ERP systém, který má miliony řádků kódu, desítky modulů a mnoho let nashromážděných kompromisů.

## Proč o tom píšeme

HAIFA není v tomhle příběhu vedlejší servisní jednotka. Je to tým, který se snaží z migrace udělat opakovatelný, řízený a průběžně zrychlující proces. Pokud se to podaří, nevznikne jen novější Fenix. Vznikne i způsob práce, který umožní převádět další moduly rychleji, přesněji a s menším rizikem.

[Domů]({{ '/' | url }})
