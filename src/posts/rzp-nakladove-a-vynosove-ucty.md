---
title: "Funguje číselník nákladových a výnosových účtů"
date: 2026-05-12
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - ciselniky
  - migrace
layout: layouts/post.njk
lang: cs
translationKey: rzp-nakladove-a-vynosove-ucty
summary: "RZP má další funkční část: číselník nákladových a výnosových účtů s editací definic, detailem záznamu, vyhledáváním a kontextovou nápovědou."
---
## Shrnutí pro netechnické čtenáře

RZP má zprovozněný další konkrétní číselník: nákladové a výnosové účty. Nejde jen o zobrazení seznamu hodnot, ale o pracovní obrazovku, ve které uživatel může definice upravovat, přecházet do detailu záznamu, vyhledávat a otevřít nápovědu ke správnému místu aplikace.

Takové číselníky patří v ERP systému k běžné každodenní práci. Právě proto jsou pro migraci důležité. Nová aplikace musí zvládnout nejen přenést data, ale také zachovat způsob, jakým s nimi uživatelé pracují.

Aktuální ukázka potvrzuje, že převod RZP se posouvá dál od statického zobrazení formulářů k reálně použitelným funkcím. Stále platí, že detaily se budou ladit, ale už je vidět celý praktický tok práce s číselníkem.

## Co je vidět v ukázce

Video ukazuje fungující číselník definic nákladových a výnosových účtů. Uživatel pracuje se seznamem záznamů, může v něm upravovat hodnoty a přecházet do detailu konkrétní položky. Detail záznamu není jen pasivní náhled, ale další místo, kde lze data editovat.

Součástí ukázky je také vyhledávání. To je u číselníků zásadní, protože uživatel obvykle nepotřebuje procházet celý seznam, ale rychle najít konkrétní definici a ověřit nebo upravit její nastavení.

Dalším důležitým prvkem je kontextová nápověda. Aplikace otevře help soubor přímo na odpovídající stránce, takže uživatel nedostane jen obecnou dokumentaci, ale nápovědu vztaženou ke konkrétní části RZP, ve které právě pracuje.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/RZP-Nakladove-a-vynosove-ucty.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Číselník nákladových a výnosových účtů v RZP: editace definic, detail záznamu, vyhledávání a kontextová nápověda.</figcaption>
</figure>

## Proč je to důležité

Číselníky často vypadají jako jednoduchá část systému, ale ve skutečnosti v sobě spojují několik typů chování najednou: práci se seznamem, editaci, validaci, detail záznamu, vyhledávání a napojení na nápovědu. Pokud mají být migrované moduly použitelné v praxi, musí tyto drobné každodenní scénáře fungovat spolehlivě.

Pro RZP je to další potvrzení, že nová verze nezačíná být jen vizuální kopií původní aplikace. Přibývají v ní části, které už plní konkrétní úlohy a přibližují se běžné práci uživatele v původním systému.

[Domů]({{ '/' | url }})
