---
title: "Jak se migruje ERP bez velkého třesku"
date: 2026-04-19
tags:
  - post
  - haifa
  - neo-hef
  - architektura
layout: layouts/post.njk
summary: "NEO_HEF nestaví nový systém vedle starého. Sází na řízenou migraci po modulech, souběžný provoz a přísně opakovatelný pětifázový postup."
---
## Shrnutí pro netechnické čtenáře

Jedna z nejdůležitějších věcí na NEO_HEF je, že se nemigruje stylem „jednou vypneme staré a zapneme nové“. Projekt je postavený tak, aby stará a nová část systému mohly po určitou dobu existovat vedle sebe a přechod byl řízený.

To je pro podobný ERP systém zásadní. U kritického provozu je mnohem cennější předvídatelnost a kontrola než rychlé, ale riskantní gesto.

## Jaký model tým používá

Architektura projektu stojí na přístupu **strangler fig**. Prakticky to znamená, že se Fenix převádí **modul po modulu**, přičemž stará a nová verze sdílejí databázový svět a migrace probíhá v kontrolované koexistenci.

Každý modul má projít stejným pětifázovým postupem:

1. `Code Dissection` – přesný rozbor skutečného chování modulu.
2. extrakce business logiky a unit testy,
3. migrace formulářů do `.NET WinForms`,
4. automatické testování parity,
5. postupná distribuce od pilotu po širší rollout.

To zní procesně, ale právě v tom je síla celého programu. Tým se nespoléhá na improvizaci po modulech, ale snaží se z migrace udělat výrobní linku s opakovatelnými kroky, kontrolními body a měřitelnými výstupy.

## Co z toho plyne

Pokud tenhle model vydrží, každá další migrace by měla být rychlejší než ta předchozí. Ne proto, že by další moduly byly jednodušší, ale proto, že tým průběžně buduje znalostní bázi, rozhodnutí, testovací vzory a implementační pravidla, která se dají přenášet dál.

Přesně tady se z technického projektu stává strategická investice. Největší hodnota nemusí být jen v tom, že jeden modul poběží nově v `.NET`, ale že se firma naučí opakovat migraci ve větším měřítku.

[Domů]({{ '/' | url }})
