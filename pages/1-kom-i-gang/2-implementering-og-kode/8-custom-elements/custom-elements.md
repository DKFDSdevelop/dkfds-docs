---
permalink: "/kom-i-gang/implementering-kode/custom-elements/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
title: Custom elements
description: I denne sektion findes al dokumentation henvendt specifikt til udvikling.
tags:
- JavaScript
- customelements
---

{% include anchorlinks.html headings="Custom_elements" %}

## Om custom elements {#{% include create-id.html heading="Om custome elements" %}}

Custom elements er en browserstandard, som gør det muligt at definere nye HTML-elementer med egen funktionalitet.
Når browseren møder elementet, kører den tilknyttede JavaScript-logik, som sørger for at:

- opbygge den nødvendige HTML-struktur
- håndtere interaktion (f.eks. klik)
- synkronisere attributter og DOM
- sikre korrekt tilgængelighed (ARIA-attributter)

Resultatet er, at udviklere kan bruge design systemets komponenter som almindelige HTML-tags.

## Forskellen på custom elements og web components

Begreberne bliver ofte brugt i flæng, men de betyder ikke helt det samme.
Web Components er en samling af flere browserteknologier:

- Custom Elements
- Shadow DOM
- HTML Templates
- ES Modules

Et custom element er kun én del af Web Components.I Fælles Design System anvender vi primært custom elements uden Shadow DOM.

Det betyder:

- komponenterne fungerer som almindelig HTML
- eksisterende CSS kan stadig styles direkte
- markup er synlig i DOM
- komponenterne er kompatible med frameworks som React, Vue og Blazor

Kort sagt:
Custom elements giver os komponenter i HTML uden at skjule markup eller styling bag Shadow DOM.

## Sådan kan du bruge custom elements {#{% include create-id.html heading="Sådan kan du bruge custom elements" %}}

Komponenterne i design systemet kan bruges på tre forskellige måder afhængigt af behov.

### 1. Simpel brug – kun komponenttag

Den enkleste måde er blot at bruge komponentens tag.

{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="ce-example-accordion-simple" %}

### 2. Konfiguration via attributter

Du kan også styre komponentens opførsel via HTML-attributter. Custom elementet sørger for at synkronisere attributterne med DOM.
Hvis en attribut ændres efterfølgende, vil komponenten automatisk opdatere sig. Du kan finde hvilke attributter hvert custom element har på dets respektive komponent-side.

{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="ce-example-accordion-attr" %}

### 3. Hydrering af eksisterende markup

Hydrering af eksisterende markup

{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="ce-example-accordion-markup" %}

I dette tilfælde genererer komponenten ikke markup, men "hydrerer" i stedet den eksisterende struktur.

Det betyder at den:

- tilføjer event listeners
- synkroniserer attributter
- sikrer korrekt ARIA-tilstand

Dette er nyttigt hvis markup genereres fra en server eller et framework.