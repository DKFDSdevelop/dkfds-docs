---
permalink: "/komponenter/datofelter/"
redirect_from:
- "/komponenter/dato-felt/"
- "/kode/komponenter/dato-felt/"
- "/kode/komponenter/datofelter/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Datofelter
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
description: Brug datofelter for datoer, der er velkendte for brugeren (fx fødselsdato).
tags: 
tabs: "Retningslinjer, kode, custom"
---

{% include tabs.html guidelines=true code=true custom=true %}

{% include code/preview-box.html component="date-input" title="Eksempel på datofelter" classes="intro-example" %}

{% include anchorlinks.html guidelines="Datofelter" code="Datofelter_Kode" custom="Datofelter_Custom" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Sætter brugeren i stand til at tilføje struktureret datoinformation.

### Anvendes ikke til

Når der er specifikt udvalgte datoer at vælge imellem som fx ved bookninger og planlægning med specifikke åbne og lukkede datoer.

### Vejledning

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, det vil sige dag, måned og år.

Tilføj hjælpetekst, der viser formatet af datoen man efterspørger.

Ofte kan datofelter til indtastning være nemmere at anvende - og gøre tilgængeligt - end en {% include links/component-guideline-link.html linktext="datovælger" %} (date picker) funktion.

{% include dos-donts-box.html component="date-dos-donts" %}

#### Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-date" title="Eksempel på datofelter med fejlmeddelelse" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{% include links/demo-link.html linktext="Trinformular til registrering: Tidligere registrering (vælg 'Ja')" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Adam Silver: Form Design Patterns (2018)
- {% include links/external-link.html linktext="Nick Babich: Date Picker Design Best Practices (2019)" %}
- Jessica Enders: Designing UX: Forms (2016)
- {% include links/external-link.html linktext="Angie Li: Date-Input Form Fields: UX Design Guidelines (2017)" %}
- {% include links/external-link.html linktext="GovUKs anbefalinger til datovælgeren, samt for fejlmeddelelser til datoer" %}
- {% include links/external-link.html linktext="GovUK om at spørge brugeren om datoer" %}
- {% include links/external-link.html linktext="GovUK om fejlmeddelelser generelt" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="date-input" copybutton=true %}

- Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.
- Datofelter-komponenten består af 3 inputfelter.

## Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" append="-kode" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og {% include links/component-code-link.html linktext="fejlmeddelelser's implementering med datofelter." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-code-link.html linktext="en fejlopsummering" %}.

<!--split-->

## Om custom elements {#{% include create-id.html heading="Om custom elements" append="-custom" %}}

### HTML-muligheder

Som udgangspunkt bør man anvende custom element-koden, da denne kommer med JavaScript, der genererer både den nødvendige HTML og funktionalitet.

Hvis man ikke ønsker at benytte custom elements, kan man tage den genererede HTML i stedet. Erstat evt. `<fds-date-input>` med `<div class="fds-date-input">`. Bemærk, at man i så fald selv er ansvarlig for HTML og funktionalitet.

## Eksempler {#{% include create-id.html heading="Eksempler" append="-custom" %}}

{% include code/show-example-with-tabs.html example="fds-date-input" tabId="example-1-dat" %}

## Varianter {#{% include create-id.html heading="Varianter" append="-custom" %}}

### Fejl

{% include custom-element-shared-text/fds-error-intro-text.html %}

{% include code/show-example-with-tabs.html example="fds-date-input-error" tabId="example-2-dat" %}

{% include custom-element-shared-text/fds-error-tables.html %}

### Hjælpetekst

{% include custom-element-shared-text/fds-helptext-intro-text.html %}

{% include code/show-example-with-tabs.html example="fds-date-input-help" tabId="example-3-dat" %}

{% include custom-element-shared-text/fds-help-text-tables.html %}

### Obligatoriske og frivillige inputfelter

{% include code/show-example-with-tabs.html example="fds-date-input-required" tabId="example-4-dat" %}

### Deaktiveret

{% include code/show-example-with-tabs.html example="fds-date-input-disabled" tabId="example-5-dat" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-custom" %}}

### Attributter

{:.table .table--responsive-headers}
| Attribut             | Beskrivelse                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| input-disabled  | Deaktiverer datofelterne. Sæt til en anden værdi end `false`.                                                             |
| input-required  | Sætter alle datofelter til 'påkrævet'.                                                                                    |
| input-indicator | Viser om datofelterne er obligatoriske eller frivillige. Indsæt en tekst i attributten for at overskrive default-teksten. |