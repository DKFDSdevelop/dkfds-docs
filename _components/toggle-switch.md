---
permalink: "/komponenter/toggle/"
redirect_from:
- "/kode/komponenter/toggle/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Toggle switch
lead: "En toggle switch er en digital tænd/sluk-knap. Til forskel fra en radioknap eller tjekboks træder valget i kraft i det øjeblik brugerne interagerer med komponenten."
description:
tags:
- "switch"
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

<div id="kode" hidden></div>

{% include code/preview-box.html component="toggle" title="Eksempel på toggle" classes="intro-example" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

En toggle switch bruges til at slå en enkelt mulighed til eller fra med det samme. Brugerens valg træder altid i kraft, så snart der trykkes på switchen.

### Anvendes ikke til

En toggle switch anvendes ikke, hvis valget først træder i kraft efter klik på fx en gem-knap. Vælg i stedet radioknapper eller tjekbokse i de tilfælde.

### Vejledning

Sørg for at brugen af toggle switch implementeres konsekvent i en løsning.

Giv switchen en kort og præcis label, som placeres til venstre for toggle switchen. Afstanden mellem label og knap vurderes i den enkelte løsning afhængigt af kontekst, enhed og længden på teksten. Hvis samme side har mere end én toggle switch, placeres toggle switchene dog altid lige under hinanden, så knapperne visuelt står i en lige linje.

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="toggle" copybutton=true %}

Bredden på toggle switches skal tilpasses til ens løsning fx med {% include links/internal-link.html linktext="hjælpeklasser (utilities)" %}. 

Brug `role="group"` for grupper af toggle switches og angiv en passende `aria-labelledby` (APG, Switch Pattern).

### Javascript

Der medfølger ikke funktionalitet med denne komponent. Når der trykkes på switchen, skal man derfor selv - udover at implementere den ønskede funktionalitet - sørge for at skifte værdien i attributten `aria-checked` til `true`/`false`.

## Referencer {#{% include create-id.html heading="Referencer" append="-kode" %}}

{% include links/external-link.html linktext="ARIA Authoring Practices Guide (APG): Switch Pattern" %}