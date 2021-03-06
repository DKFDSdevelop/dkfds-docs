---
permalink: /kode/komponenter/cards/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Cards
description: "Dokumentation på implementering af cards."
tags:
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Samme højde
  href: '#samme-hoejde'
---

{% include code/preview-box.html component="card" title="Eksempel på card komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/cards/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/cards/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="card" %}

Cards kan bestå af en header, et tekstområde, et indholdsområde og et aktionsområde, som i øvrigt kan ligge i en footer. Du kan frit sammensætte cards efter dit eget behov, men der er regler for, hvad du kan placere i de forskellige områder.

Sæt card til fuld højde ved at tilføje klassen `card-align-height` til elementet med klassen `card`.

### Områder

#### Header

Headeren defineres med klassen `card-header`, og indeholder en titel og en understøttende tekst.

Husk, at cards er en del af sidestrukturen, hvorfor overskrifter fortsat skal være semantisk korrekt. Hvis overskriften før cards er en h2, så bør `header-title` være h3.

- `header-titel` defineres som en semantisk korrekt overskrift.
- `subheader`

#### Tekstområde

Tekstområdet defineres med klassen `card-text`, og indeholder brødtekst, som er defineret som et `<p>` element.

#### Indholdsområde

Indholdsområdet er defineret med klassen `card-content`, og kan indeholde både brødtekst og illustrationer, som har hver deres `<div>` med hver deres class. 
- `content-text` indeholder brødtekst.
- `content` kan indeholde lige det du ønsker - fx illustrationer som billeder eller SVG.

#### Aktionsområde

Aktionsområdet er defineret med klassen `card-action` og kan indeholde knapper og links som har hver deres `<div>` med hver deres klasse.

- `action-buttons` kan indeholde knapper, og vil vise knapperne sidestillet.
- `action-links` kan indeholde en liste af links.

#### Footer
Footer bruges gerne i forbindelse med flere cards, som skal have samme højde, og hvor man har knapper eller links, der gerne skal flugte på tværs af cards.

Footer defineres med klassen `card-footer`.

## Varianter

{:#samme-hoejde}
### Samme højde

{% include code/syntax.html component="cards-same-height" link="true" %}
