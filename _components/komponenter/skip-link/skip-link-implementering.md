---
permalink: "/komponenter/skip-link/implementering/"
guidelinelink: "/komponenter/skip-link/guidelines/"
redirect_from:
- "/kode/komponenter/skip-link/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Gå til sidens indhold (Skip-link)
lead: "Skip-links anvendes til at give brugere, der navigerer med tastatur, en bedre oplevelse. Brugerens første tryk på tab-tasten vil få et skjult link til at komme frem, der lader brugeren skippe menuen og gå direkte til sidens indhold."
previewimage: "skip-link-eksempel"
previewimageTitle: "Eksempel på skip-link"
previewimageImage: "skiplink"
anchor: false
description: "Dokumentation på implementering af skip-link."
tags: 
---

## Installation

### HTML Struktur

{% include code/syntax.html component="skiplink" copybutton=true %}

Skip-link `<a>` elementet indsættes som første element i `<header>`. Elementet skal være det første element, der kommer i fokus på siden ved brug af tastaturet.

Skip-link gør brug af anchor link `#main-content`, man skal derfor huske at sætte `id="main-content"` på det element, der omkranser indholdet på siden.