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

První varianta spustí RZP samostatně jako novou .NET aplikaci. Druhá varianta ho spustí pod společným launcherem. Launcher je obal, díky kterému se jednotlivé moduly Fenixu zobrazují v jednom okně jako záložky, takže systém jako celek působí uceleně. Právě druhý scénář je důležitý pro plynulou migraci: uživatelé zůstávají ve známém prostředí, zatímco jednotlivé moduly se postupně nahrazují novým .NET řešením.

Duální spouštění přitom není výsadou nových modulů. Stejnou volbu — samostatně, nebo pod launcherem — mají i původní legacy verze. Uživatel si tak vždy může vybrat.

## Co se podařilo ověřit

První cesta používá skript `scripts/modules-start/rzp.ps1`. Ten udělá čistý build modulu a spustí `Fenix.RZP.WinForms.exe` jako samostatnou aplikaci. Výsledek je přímočarý: otevře se hlavní okno RZP, aplikace běží v novém .NETu a dá se standardně ukončit.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-standalone-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Samostatný start RZP: skript přeloží a spustí modul jako běžnou desktopovou aplikaci.</figcaption>
</figure>

Druhá cesta používá společný launcher. Launcher není Fenix — je to společný spouštěč, který slouží jako obal pro jednotlivé moduly systému. Díky němu se moduly zobrazují na záložkách v jednom okně a Fenix tak vypadá jako jeden ucelený systém, ne jako sada samostatných aplikací. Po spuštění launcheru je v levém menu dostupná položka `NEO Rozpouštění nákladů a výnosů`. Kliknutí na ni spustí RZP jako samostatný proces, ale jeho okno se ihned reparentuje do launcheru a zobrazí se na záložce.

Za technickou kulisou se přitom řeší důležitá věc: při startu pod launcherem se nastaví komunikace přes named pipes. Díky ní launcher ví, zda je modul spuštěn, a umí ho také řízeně vypnout. Právě zvládnutí této integrace bylo jednou z klíčových technických výzev.

<figure class="post-media">
  <video class="post-video" controls preload="metadata">
    <source src="{{ '/assets/videos/rzp-launcher-start-demo-20260427.mp4' | url }}" type="video/mp4">
    Váš prohlížeč neumí přehrát vložené MP4 video.
  </video>
  <figcaption>Start přes společný launcher: položka NEO RZP otevře modul jako záložku uvnitř launcheru.</figcaption>
</figure>

## Proč je to důležité

Možnost spustit aplikaci je zdánlivě jednoduchý krok, ale v migraci desktopového ERP systému je to zásadní integrační bod. Nestačí mít přepsané formuláře; nový modul musí projít buildem, dostat správný startovací kontext, zapadnout do launcheru a chovat se tak, aby uživatelský přechod nebyl skok do neznáma.

Duální spouštění — samostatně i přes launcher — je přitom vlastnost všech modulů, včetně jejich původních legacy verzí. Tým tak nemusí řešit dvě odlišné cesty nasazení; stačí zajistit, aby nový modul splňoval stejný kontrakt jako starý. RZP tím získává první viditelnou provozní podobu a ukazuje cílovou cestu pro postupnou výměnu legacy modulů za nové .NET aplikace bez velkého třesku.

[Domů]({{ '/' | url }})
