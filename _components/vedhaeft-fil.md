---
permalink: "/komponenter/fil-upload/"
redirect_from:
- "/kode/komponenter/fil-upload/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Vedhæft fil
lead: Komponenten lader brugeren tilføje og indsende en fil.
description: "Brug fil upload til at lade brugeren vælge en fil fra sin egen computer, tablet eller mobil."
tags:
tabs: "Retningslinjer, kode, custom"
---

{% include tabs.html guidelines=true code=true custom=true %}

{% include code/preview-box.html component="file-input" title="Eksempel på vedhæft fil" classes="intro-example" %}

{% include anchorlinks.html guidelines="VedhaeftFil" code="VedhaeftFil_Kode" custom="VedhaeftFil_Custom" classes="hide-code" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Brug komponenten til at lade brugeren vælge og overføre en fil fra sin egen computer, tablet eller mobil.

Du bør kun bruge vedhæftet fil, hvis det er strengt nødvendigt for din løsning.

### Vejledning

Sørg for at brugeren får en positiv respons, når filen er overført.

Gør tydeligt brugeren opmærksom på, hvilke formater og størrelser, der vil blive accepteret.

Tjek filformatet før overførslen går i gang, så brugeren ikke spilder tid.

#### Fejlmeddelelse

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vedhæft dokumenter" %}
- {% include links/demo-link.html linktext="Trinformular til ansøgning: Tilføj dokumentation" %}
- {% include links/demo-link.html linktext="Vedhæft fil" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="file-input" copybutton=true %}

Vi anbefaler at bruge det indbyggede input felt til filer `type="file"` frem for en skræddersyet løsning.

Årsagen til dette er:

- at feltet får fokus, når man navigerer ved brug af tastaturet
- at feltet fungerer ved brug af tastatur
- at feltet fungerer ved brug af hjælpemidler
- at feltet fungerer, selv når JavaScript er utilgængeligt.

Du bør anvende ovenstående kriterier til en skræddersyet løsning for denne type felt.

<!--split-->

## Om custom elements {#{% include create-id.html heading="Om custom elements" append="-custom" %}}

Vedhæft fil er en tilgængelig filupload-komponent, der understøtter både drag-and-drop og traditionel filvalg. 

Komponenten viser valgte filer i en liste med mulighed for at fjerne individuelle filer og tilføje flere. Den følger accessibility-standarder med korrekt tastaturnavigation og skærmlæserunderstøttelse.

### HTML-muligheder

Som udgangspunkt bør man anvende custom element-koden, da denne kommer med JavaScript, der genererer både den nødvendige HTML og funktionalitet.

Hvis man ikke ønsker at benytte custom elements, kan man tage den genererede HTML i stedet. Erstat evt. `<fds-upload-file>` med `<div class="fds-upload-file">`. Bemærk, at man i så fald selv er ansvarlig for HTML og funktionalitet.

## Eksempler {#{% include create-id.html heading="Eksempler" append="-custom" %}}

### Vedhæft fil lavet med custom element

{% include code/show-example-with-tabs.html example="fds-upload-file-example" tabId="example-1" %}

## Varianter {#{% include create-id.html heading="Varianter" append="-custom" %}}

### Hjælpetekst

{% include custom-element-shared-text/fds-helptext-intro-text.html %}

{% include code/show-example-with-tabs.html example="fds-upload-file-helptext" tabId="example-2" %}

{% include custom-element-shared-text/fds-help-text-tables.html%}

### Fejl

{% include custom-element-shared-text/fds-error-intro-text.html %}

For at tilknytte en fejlbesked til en specifik fil skal du angive filens ID som anden parameter i addError() metoden. Når en fejl knyttes til en fil, vises fejlbeskeden direkte under den pågældende fil i fillisten, og filen markeres visuelt som ugyldig. Hvis fil-ID'et ikke angives, vises fejlen som en generel fejl for hele upload-komponenten.

{% include code/show-example-with-tabs.html example="fds-upload-file-error" tabId="example-3" %}

{% include custom-element-shared-text/fds-error-tables.html %}

### Deaktiveret

{% include code/show-example-with-tabs.html example="fds-upload-file-disabled" tabId="example-4" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-custom" %}}

### fds-upload-file

#### Attributter

{:.table .table--responsive-headers}
| Attribut        | Beskrivelse                                                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------------------------------|
| dropzone-prefix | Definerer den indledende tekst i dropzone-området før linkteksten. Indsæt en tekst i attributten for at overskrive default-teksten "Træk dine filer herhen eller".|
| dropzone-suffix | Definerer teksten der vises efter linkteksten i dropzone-området. Attributten er tom som standard, men kan bruges til at tilføje yderligere instruktioner eller information. |
| dropzone-link   | Definerer teksten for det klikkable link i dropzone-området. Indsæt en tekst i attributten for at overskrive default-teksten "vælg filer". |
| file-list-header| Definerer overskriften der vises over listen af valgte filer. Indsæt en tekst i attributten for at overskrive default-teksten "Valgte filer". |
| file-list-more  | Definerer teksten på knappen til at vælge flere filer. Indsæt en tekst i attributten for at overskrive default-teksten "Vælg flere filer". |
| remove-text     | Definerer teksten på fjern-knappen for hver fil i listen. Indsæt en tekst i attributten for at overskrive default-teksten "Fjern". |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion                         | Beskrivelse                                                                                                                             |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| getFiles()                       | Returnerer et array med alle valgte filer og deres tilknyttede ID'er. Hver fil returneres som et objekt med egenskaberne 'id' og 'file'.|
| addError(message, fileId = null) | Tilføjer en fejlbesked til upload-komponenten. Hvis fileId angives, knyttes fejlen til den specifikke fil. Returnerer fejlelementet.    |
| removeError(errorElement)        | Fjerner det angivne fejlelement fra upload-komponenten .                                                                                |

### fds-file-item

`fds-file-item` er en hjælpekomponent der bruges internt af fds-upload-file til at vise individuelle filer i fillisten. Hver gang en bruger vælger filer, opretter `fds-upload-file` automatisk `fds-file-item` elementer for hver fil.

Selvom `fds-file-item` kan bruges selvstændigt, er den primært designet til at fungere som en del af `fds-upload-file` økosystemet.

{:.table .table--responsive-headers}
| Attribut        | Beskrivelse                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| remove-text     | Definerer teksten på fjern-knappen for den enkelte fil. Indsæt en tekst i attributten for at overskrive default-teksten "Fjern". |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion       | Beskrivelse                                                                                                     |
|----------------|-----------------------------------------------------------------------------------------------------------------|
| setFileData()  | Indstiller fildata og unikt ID for fil-elementet. Funktionen tager en fil-objekt og et ID som parametre og initialiserer komponenten med disse data.                                      |
