---
title: "Do RZP se už dá přihlásit"
date: 2026-04-29
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - prihlaseni
  - profily
layout: layouts/post.njk
lang: cs
translationKey: do-rzp-se-uz-da-prihlasit
summary: "RZP má další praktickou část společné infrastruktury: při samostatném spuštění se zobrazí přihlašovací dialog s profily databázových připojení."
---
## Shrnutí pro netechnické čtenáře

RZP už se nejen spustí, ale už se do něj dá také přihlásit. Tým dokončil další sdílenou komponentu, která řeší přihlašování a výběr databázového připojení při samostatném spuštění aplikace.

To je důležité proto, že stejný mechanismus nemá sloužit jen RZP. Pokud se kterákoli aplikace Fenixu, například `RZP`, `MTZ` nebo `UCO`, spustí ve stand-alone režimu, uživatele přivítá jednotný přihlašovací dialog. Aplikace se tak nechová jako izolovaný experiment, ale jako další modul připravovaný pro reálný provoz.

Součástí řešení jsou i profily připojení. Uživatel může mít uložených více konfigurací databáze a při startu aplikace si vybrat, kterou chce použít. To se hodí například při práci s různými prostředími nebo databázemi bez nutnosti pokaždé znovu vyplňovat technické údaje.

## Co je hotové

Při samostatném spuštění RZP se nejprve zobrazí přihlašovací formulář. Ten je předvyplněný základními údaji pro přihlášení do aplikace. Pokud uživatel potřebuje zkontrolovat nebo změnit detaily databázového připojení, může použít tlačítko `Upřesnit`, které zobrazí další panel s technickými údaji.

Druhou částí je práce s profily. Tlačítko `Profily...` otevře dialog s tabulkou všech definovaných přihlašovacích údajů. Uživatel si může vybrat konkrétní profil a nejprve ověřit, že spojení s databází opravdu funguje. K tomu slouží akce `Otestovat profil`, která zkusí navázat připojení podle vybrané konfigurace.

Pokud je profil funkční, lze ho převzít tlačítkem `Použít profil`. Potom už stačí doplnit uživatelské heslo a kliknout na `Přihlásit`. Aplikace následně pokračuje do samotného RZP.

## Ukázka

Na videu je vidět celý tok ve stand-alone režimu: uživatel otevře profily, vybere připravené připojení, otestuje, že databáze odpovídá, profil použije a následně se přihlásí do RZP.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/profiles.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Přihlášení do RZP ve stand-alone režimu: výběr profilu, test databázového připojení a vstup do aplikace.</figcaption>
</figure>

## Proč je to důležité

Přihlašování je jeden z těch kroků, které uživatelé berou jako samozřejmost, ale pro migraci ERP systému jsou zásadní. Aplikace se musí umět připojit ke správné databázi, pracovat s uživatelskou identitou a zároveň nabídnout srozumitelný postup bez ručního přepisování konfiguračních hodnot.

Sdílená komponenta navíc snižuje riziko, že si každý modul Fenixu vyřeší start a přihlášení trochu jinak. `RZP`, `MTZ` i `UCO` mohou používat stejný přihlašovací základ, stejnou práci s profily a stejné ověření databázového spojení. Pro uživatele to znamená konzistentní chování, pro tým jednodušší údržbu a pro projekt další krok od technického prototypu k použitelné aplikaci.

[Domů]({{ '/' | url }})
