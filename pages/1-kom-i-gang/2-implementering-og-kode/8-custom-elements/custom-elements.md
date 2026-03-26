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

### 1. Simpel brug – konfiguration via attributter

Du kan styre komponentens opførsel via HTML-attributter. Custom elementet sørger for at synkronisere attributterne med DOM.
Hvis en attribut ændres efterfølgende, vil komponenten automatisk opdatere sig. Du kan finde hvilke attributter hvert custom element har på dets respektive komponent-side.

{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="ce-example-accordion-simple" %}

### 2. Brug med eksisterende markup (hydrering)

Du kan også selv levere hele HTML-strukturen på forhånd. I dette tilfælde overtager custom elementet ikke opbygningen af DOM’en, men tilføjer i stedet funktionalitet ovenpå den eksisterende markup.

Når custom elementet initialiseres, gennemgår det den eksisterende struktur og forventer, at den følger det aftalte markup-mønster (fx korrekt placering af heading, button og content).

Hvis strukturen er gyldig, vil komponenten:

- tilføje nødvendig funktionalitet (fx event listeners)
- sikre at relevante attributter (fx aria-expanded, aria-controls) er sat korrekt
- tilføje eller normalisere nødvendige klasser
- synkronisere med eventuelle attributter på custom elementet

Komponenten ændrer altså ikke strukturen, men forbedrer (hydrerer) den, så den opfører sig som en fuldt funktionel komponent.

Dette er især nyttigt når:

- markup genereres på serveren (SSR)
- du bruger et framework, der allerede renderer HTML
- du ønsker fuld kontrol over markup (fx til SEO eller performance)

Hvis den forventede struktur ikke er til stede, kan komponenten ikke initialiseres korrekt.

{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="ce-example-accordion-full" %}