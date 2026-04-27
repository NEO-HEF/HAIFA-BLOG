---
title: "RZP už se dá spustit!"
date: 2026-04-27
tags:
  - post
  - haifa
  - neo-hef
  - rzp
  - launcher
layout: layouts/post.njk
lang: cs
translationKey: rzp-uz-se-da-spustit
summary: "Migrovaný modul RZP už se dá spustit dvěma způsoby: samostatně jako nová .NET aplikace i ze společného launcheru jako vložené okno."
---
## Shrnutí pro netechnické čtenáře

RZP, tedy modul pro rozpouštění nákladů a výnosů, má za sebou důležitý praktický milník. Už nejde jen o přepsané části kódu nebo izolované technické ověření. Modul se dá opravdu spustit a tým má ověřené dva způsoby, jak ho dostat před uživatele.

První varianta spustí RZP samostatně jako novou aplikaci. Druhá varianta ho spustí ze společného launcheru, kde se nové okno RZP vloží přímo dovnitř prostředí Fenixu. Právě druhý scénář je důležitý pro plynulou migraci: uživatelé mohou zůstávat ve známém spouštěči, zatímco jednotlivé moduly se postupně nahrazují novým .NET řešením.

## Co se podařilo ověřit

První cesta používá skript `scripts/modules-start/rzp.ps1`. Ten udělá čistý build modulu a spustí `Fenix.RZP.WinForms.exe` jako samostatnou aplikaci. Výsledek je přímočarý: otevře se hlavní okno RZP, aplikace běží v novém .NETu a dá se standardně ukončit.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-standalone-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Samostatný start RZP: skript přeloží a spustí modul jako běžnou desktopovou aplikaci.</figcaption>
</figure>

Druhá cesta používá společný launcher. Po spuštění launcheru je v levém menu dostupná položka `NEO Rozpouštění nákladů a výnosů`. Po jejím otevření se RZP nespustí jako úplně oddělené okno, ale jako reparented okno vložené do hlavního launcheru. Uživatel tak vidí nový modul v prostředí, které odpovídá dosavadní práci s Fenixem.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-launcher-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Start přes společný launcher: položka NEO RZP otevře modul jako vložené okno uvnitř launcheru.</figcaption>
</figure>

## Proč je to důležité

Možnost spustit aplikaci je zdánlivě jednoduchý krok, ale v migraci desktopového ERP systému je to zásadní integrační bod. Nestačí mít přepsané formuláře; nový modul musí projít buildem, dostat správný startovací kontext, zapadnout do launcheru a chovat se tak, aby uživatelský přechod nebyl skok do neznáma.

RZP tím získává první viditelnou provozní podobu. Samostatný start pomáhá vývoji a testování. Start přes launcher ukazuje cílovou cestu pro postupnou výměnu legacy modulů za nové .NET aplikace bez velkého třesku.

[Domů]({{ '/' | url }})
