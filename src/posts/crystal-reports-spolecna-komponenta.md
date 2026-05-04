---
title: "Crystal Reports: problém má první použitelné řešení"
date: 2026-04-27
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - tisk
  - crystal-reports
layout: layouts/post.njk
lang: cs
translationKey: crystal-reports-spolecna-komponenta
summary: "NEO_HEF má připravenou společnou komponentu pro Crystal Reports. První podporovaný režim řeší sestavy nad lokální MDB databází a ukazuje funkční cestu přes oddělený ReportGenerator."
---
## Shrnutí pro netechnické čtenáře

Jedna z nejrizikovějších částí migrace má první praktické řešení. Staré Crystal Reports nejde jednoduše přenést přímo do nové aplikace, protože jejich runtime patří do staršího technologického světa. Tým proto zvolil bezpečnější cestu: nová aplikace zůstává v moderním .NETu, ale samotné generování sestavy běží v oddělené kompatibilní komponentě.

Důležité je, že to už není jen návrh. Existuje společná komponenta připravená k použití jednotlivými aplikacemi, zatím pro první režim generování sestav: přes lokální MDB databázi. Z pohledu nové .NET aplikace je součástí řešení i Report Viewer a následné uložení do PDF.

## Co je hotové

Nové řešení odděluje dvě věci, které by se jinak těžko slučovaly. Aplikace běží v novém .NETu a připraví vstupy pro sestavu. Samotný `ReportGenerator.exe` je kvůli kompatibilitě Crystal Reports napsaný v .NET Framework 4.8. Komunikace mezi nimi probíhá přes jasný request a výsledek, takže aplikace nemusí do sebe přímo vkládat starý Crystal runtime.

První podporovaný režim pracuje s lokální `MDB` databází. To je pro `RZP` klíčové, protože odpovídá důležité části legacy způsobu tisku: aplikace připraví data do pomocné databáze a Crystal Reports je prožene definovanou `.rpt` sestavou.

Vedle toho jsou v legacy systému identifikované ještě dva další režimy. Druhý režim je přímé volání SQL dotazu místo mezilehlé `MDB` databáze. Ten se ale v prvním migrovaném modulu `RZP` nepoužívá. Třetí režim je export do Excelu. Oba zůstávají v cílové architektuře počítané, ale budou implementovány ve chvíli, kdy na ně tým narazí při migraci dalších modulů.

## Ukázka

Na videu je vidět celý tok: spuštění aplikace v novém .NETu, zavolání `ReportGenerator.exe`, vygenerování reportu, otevření v Report Vieweru, uložení do PDF a následné otevření výsledného PDF.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/crystal-reports-rzp-demo-20260427.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>End-to-end ukázka: .NET aplikace zavolá kompatibilní Crystal Reports worker a uživatel uloží výsledek do PDF.</figcaption>
</figure>

## Proč je to důležité

Tiskové sestavy jsou typický detail, který rozhoduje o použitelnosti celé migrace. Uživatelé nepotřebují jen otevřít nové okno aplikace; potřebují dostat stejné výstupy, tisknout je a ukládat do PDF bez toho, aby se změnil jejich pracovní postup.

Současné řešení tedy není konečná náhrada všech výstupních větví. Je to první produkčně použitelná část společné komponenty: režim, ve kterém aplikace nachystá data do lokální `MDB` databáze a `ReportGenerator.exe` z nich vytvoří sestavu podle existující `.rpt` definice. Přímé SQL reporty a Excel exporty se doplní až tehdy, kdy budou potřeba pro konkrétní další migrovaný modul. Pro `RZP` je ale vyřešen právě ten režim, který modul reálně používá.

[Domů]({{ '/' | url }})
