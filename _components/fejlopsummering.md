---
permalink: "/komponenter/fejlopsummering/"
redirect_from:
- "/kode/komponenter/fejlopsummering/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Fejlopsummering
lead: Fejlopsummeringer bruges til at give overblik over fejl eller mangler, der skal rettes på en side eller et trin, før brugeren kan komme videre.
description: 
tags: 
tabs: "Retningslinjer, kode, custom"
---

{% include tabs.html guidelines=true code=true custom=true %}

{% include code/preview-box.html component="error-summary" title="Eksempel på fejlopsummering" classes="intro-example" %}

{% include anchorlinks.html guidelines="Fejlopsummering" code="Fejlopsummering_Kode" custom="Fejlopsummering_Custom" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Vis en fejlopsummering når der er fejl i noget af det brugeren har indtastet, også hvis der kun er én fejl på siden.

### Vejledning

Opsummeringen vises øverst på siden/trinnet under headeren, men over sidens/trinnets øverste overskrift. Fejlopsummeringen indeholder alle de {% include links/component-guideline-link.html linktext="fejlmeddelelser" %}, der måtte være på siden/trinnet, således at brugeren kan navigere direkte til de fejl og mangler, der skal rettes.

Der skal være links i fejlopsummeringen til de steder på siden, hvor fejlene er. Når der trykkes på et link i opsummeringen, skal fokus flyttes til det felt fejlmeddelelsen knytter sig til.

Sørg for at linkene i fejlopsummeringen er identiske med fejlmeddelelsen de linker til.

For fejl i et enkeltstående felt, skal du linke direkte til feltet.

Når en bruger skal indtaste svar i flere felter, fx dag-, måned- og årsfelterne i {% include links/component-guideline-link.html linktext="datofelter" %}, skal du linke til det første felt, der indeholder en fejl.

Hvis du ikke ved, hvilket felt der indeholder en fejl, skal du linke til det første felt i gruppen af felter.

For fejl, der kræver, at en bruger skal vælge en eller flere ting på en liste ved hjælp af en radioknap eller en tjekboks, skal du linke til den første radioknap eller tjekboks på listen.

#### Placering {#{% include create-id.html heading="Placering" %}}

Sæt fejlopsummeringen øverst på siden. Hvis din side indeholder en brødkrumme eller et tilbage-link, skal du placere den under disse, men over titlen (den øverste overskrift) på siden.

{% include code/preview-image.html component="error-summary-page" code="/komponenter/fejlopsummering/#placering-kode" %}

{% include dos-donts-box.html component="error-message-dos-donts" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Fejl i vedhæftede filer" %}
- {% include links/demo-link.html linktext="Formular med fejl" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="error-summary" copybutton=true %}

Indsættes over formularen, men under `h1` overskriften.

Hver fejl tilføjes til `<ul>` listen med et anchor link til feltet der er omtalt således at fokus flyttes til pågældende felt.

#### Placering {#{% include create-id.html heading="Placering" append="-kode" %}}

{% include code/syntax.html component="error-summary-page" link=true copybutton=true guidelines="/komponenter/fejlopsummering/#placering" %}

### Javascript

Fejlopsummering kræver JavaScript samt attributten `data-module="error-summary"` for at fungere korrekt. Dermed vil et klik på et link i opsummeringen betyde, at brugeren scroller ned til feltet med fejl uden at scrolle forbi feltets label. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ErrorSummary(document.getElementById('ALERT-ID')).init();
{% endhighlight %}

<!--split-->

## Om custom elements {#{% include create-id.html heading="Om custom elements" append="-custom" %}}

`fds-error-summary` kan anvendes på to måder:

- uden attributten `auto`, hvor udvikleren selv er ansvarlig for at tilføje fejl til oversigten og styre, hvornår komponenten skal vises
- med attributten `auto`, hvor komponenten automatisk samler alle synlige fejlmeddelelser på siden, som ligger i et understøttet inputelement, og selv viser eller skjuler oversigten afhængigt af, om der er fejl

### HTML-muligheder

Som udgangspunkt bør man anvende custom element-koden, da denne kommer med JavaScript, der genererer både den nødvendige HTML og funktionalitet.

Hvis man ikke ønsker at benytte custom elements, kan man tage den genererede HTML i stedet.

## Eksempler {#{% include create-id.html heading="Eksempler" append="-custom" %}}

### Fejlopsummering med custom element

{% include code/show-example-with-tabs.html example="fds-error-summary" tabId="example-1-errorsum" %}

## Varianter {#{% include create-id.html heading="Varianter" append="-custom" %}}

### Auto

Med attributten `auto` opdateres fejloversigten automatisk ud fra synlige `fds-error-message` i understøttede wrappers. Hvis en fejl er standalone eller befinder sig i en ikke-understøttet parent wrapper, bliver den ikke automatisk føjet til fejloversigten.

{% include code/show-example-with-tabs.html example="fds-error-summary-auto" tabId="example-2-errorsum" %}

### Understøttede wrappers

`fds-error-summary` understøtter fejlmeddelelser i følgende wrappers:

- `fds-input-wrapper`
- `fds-checkbox`
- `fds-checkbox-group`
- `fds-radio-button-group`
- `fds-date-input`
- `fds-textarea`
- `fds-select`
- `fds-upload-file`
- `fds-date-picker`

Fejlmeddelelsen skal være angivet som et `fds-error-message` inde i wrapperen.

Når der klikkes på et link i fejloversigten, flyttes fokus til det første fokusbare element i den wrapper, som fejlmeddelelsen tilhører, fx et `input`, `select`, `textarea` eller `button`.

Komponenten viser kun fejl fra wrappers, som ikke er skjulte, og hvor den tilhørende fejlmeddelelse heller ikke er skjult.

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-custom" %}}

### Attributter

{:.table .table--responsive-headers}
| Attribut      | Beskrivelse                                                                                                          |
|---------------|----------------------------------------------------------------------------------------------------------------------|
| heading       | Sæt en anden overskrift end standardoverskriften `"Der er problemer"`.                                               |
| heading-id    | Sætter id på overskriftselementet, så fejlopsummeringen kan referere til overskriften via aria-labelledby.           |
| heading-level | Angiver hvilket overskriftsniveau der anvendes til overskriften. Gyldige værdier er `h1` til `h6`. Standard er `h2`. |
| auto          | Gør komponenten automatisk og holder fejloversigten synkroniseret med `fds-error-message` i understøttede wrappers.  |