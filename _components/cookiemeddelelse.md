---
permalink: "/komponenter/cookiemeddelelse/"
redirect_from:
- "/kode/komponenter/cookiemeddelelse/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Cookiemeddelelse
lead: Anvender din selvbetjeningsløsning cookies til andet end teknisk nødvendige
  formål, skal brugeren vises en cookiemeddelelse.
description: Cookiemeddelelsen vises midt på siden, og blokerer indhold indtil man
  har taget stilling til brug af cookies.
tags:
tabs: "Retningslinjer, kode, custom"
custom_element: "Ready"
---

{% include tabs.html guidelines=true code=true custom=true %}

{% include code/preview-image.html component="cookie-message" title="Eksempel på cookiemeddelelse" classes="intro-example" %}

{% include anchorlinks.html guidelines="Cookiemeddelelse" code="Cookiemeddelelse_Kode" classes="hide-code" custom="Cookiemeddelelse_Custom" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Brug cookiemeddelelsen til at få brugerens accept af de cookies du sætter i din løsning ud over de funktionelt nødvendige.

### Anvendes ikke til

Du behøver ikke vise en cookiemeddelelse, hvis din løsning kun sætter funktionelt nødvendige cookies.

### Vejledning

Det Fælles Designsystem anviser kun styling for cookiemeddelelsen, ikke den tekniske implementering af cookiemeddelelsen.

Du skal selv tilpasse indholdet i meddelelsen, så den overholder gældende lovgivning og stemmer overens med din løsnings specifikke anvendelse af cookies.

{% include dos-donts-box.html component="cookie-message-dos-donts" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Vitaly Friedman: Privacy UX: Better Cookie Consent Experiences (2019)" %}
- {% include links/external-link.html linktext="Therese Fessenden: Modal & Nonmodal Dialogs: When (& When Not) to Use Them (2017)" %}
- {% include links/external-link.html linktext="Læs om cookies på Digitaliseringsstyrelsens hjemmeside" %}
- {% include links/external-link.html linktext="Cookiebekendtgørelsen" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="cookie-message" copybutton=true %}

Koden indsættes under body og før header. Gør man brug af {% include links/component-guideline-link.html linktext="Gå til sidens indhold" %}, skal denne indsættes efter cookiemeddelelsen.

Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.

Cookies brugt til statistik må ikke sættes, før man aktivt har accepteret dette.

<!--split-->

## Om custom elements {#{% include create-id.html heading="Om custom elements" append="-custom" %}}

## Eksempler {#{% include create-id.html heading="Eksempler" append="-custom" %}}

Hvis cookiemeddelelsen indeholder et logo, er det op til løsningen selv at sætte en passende højde og bredde for dette. Giv logoet en passende alt-tekst, så det også er muligt for skærmlæserbrugere at vide, hvem der står bag selvbetjeningsløsningen.

{% include code/show-example-with-tabs.html example="cookie-default" tabId="example-1-cookie" %}

## Varianter {#{% include create-id.html heading="Varianter" append="-custom" %}}

### Flere end to typer cookies

{% include code/show-example-with-tabs.html example="cookie-many-options" tabId="example-2-cookie" %}