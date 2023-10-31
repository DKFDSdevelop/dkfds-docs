---
permalink: "/komponenter/sprogvaelger/implementering/"
guidelinelink: "/komponenter/sprogvaelger/guidelines/"
redirect_from:
- "/kode/komponenter/sprogvaegler/"
- "/kode/komponenter/sprogvaelger/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Sprogvælger
lead: En sprogvælger bruges hvis løsningen udbydes på mere end et sprog. Den giver
  brugeren mulighed for at vælge et andet sprog end løsningens standardsprog.
previewimage: "language-switcher"
previewimageTitle: "Eksempel på sprogvælger"
anchor: true
subnav:
- text: Tooltip
  href: '#sprogvaelger-med-tooltip'
description: "Dokumentation på implementering af sprogvælger."
tags: 
---

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/sprogvaelger/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/sprogvaelger/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="language-switcher" copybutton=true %}

<div class="alert alert-warning" role="alert">
    <div class="alert-body">
        <p class="alert-text">Bemærk, at man i løsningen selv står for funktionaliteten i denne komponent.</p>
    </div>
</div>

Sprogvælgeren indsættes nederst i footeren. Se <a href="/eksempler/selvbetjeningsloesninger/#sagsoversigt">eksempelløsningen "Sagsoversigt"</a> for placering i koden.

Hvert sprog tilføjes i listen på original sproget og med den tilsvarende landekode i `lang` attributten.

Bemærk aria-labels i koden, hvor der vil være tekst og formuleringer der skal tilpasses for hvert sprog man kan vælge.

## Varianter

{:#sprogvaelger-med-tooltip}
### Sprogvælger med tooltip

{% include code/syntax.html component="language-switcher-tooltip" link=true copybutton=true %}

{% include links/component-links.html linktext="For mere info om implementering se tooltip komponenten" %}