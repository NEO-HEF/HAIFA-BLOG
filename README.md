# HAIFA - Helios AI Factory

HAIFA - Helios AI Factory je jednoduchý statický blog postavený na `Eleventy (11ty)`. Obsah se píše jako markdown soubory a build generuje hotový statický web do `_site/`.

## Proč tahle platforma

Vybral jsem `Eleventy`, protože:

- je markdown-first a nepotřebuje CMS,
- nevynucuje složitou strukturu blogu,
- běží lokálně přes `node` a `npm`, které už jsou na stroji,
- build je rychlý a výstup je čistě statický.

## Kde co je

- `src/posts/` obsahuje blogové články v markdownu
- `src/_includes/layouts/` obsahuje layouty
- `src/assets/site.css` obsahuje styly
- `_site/` je vygenerovaný výstup
- `.cache/NEO_HEF.git` je lokální mirror analyzovaného repozitáře
- `AGENTS.md` obsahuje lokální pravidla a poznámky pro další práci s historií repozitáře
- `PROMPT_tydenni_souhrn.md` je připravený prompt pro vytvoření dalšího týdenního článku

## Práce s blogem

```powershell
npm install
npm run build
npm run serve
```

Po spuštění `npm run serve` Eleventy lokálně vystaví web a sleduje změny ve zdrojích.

## Jak přidat další článek

Přidej další markdown soubor do `src/posts/` s front matter blokem, např.:

```md
---
title: "Název článku"
date: 2026-04-22
tags:
  - post
layout: layouts/post.njk
summary: "Krátký perex."
---
Text článku.
```

## Aktuální obsah

Blog teď obsahuje:

- souhrnný článek `Ohlédnutí do historie`, který odkazuje na samostatné týdenní rozpadové posty,
- samostatné posty pro prvních sedm týdnů projektu,
- několik vysvětlujících článků o kontextu, architektuře a směru projektu `NEO_HEF`,
- jednoduchou strukturu vhodnou pro další AI-generované články.
