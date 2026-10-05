---
permalink: "/komponenter/fil-upload/"
redirect_from:
- "/kode/komponenter/fil-upload/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Vedhæft fil
lead: Komponenten lader brugeren tilføje og indsende en fil.
description: "Brug fil upload til at lade brugeren vælge en fil fra sin egen computer, tablet eller mobil."
tags:
tabs: "Retningslinjer, kode, web component"
custom_element: "Ready"
difference_warning: true
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="file-input" title="Eksempel på vedhæft fil" classes="intro-example" %}

{% include anchorlinks.html guidelines="VedhaeftFil" code="VedhaeftFil_Kode" custom="VedhaeftFil_Web_Component" classes="hide-code" %}

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

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-upload-file-example" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-custom" %}}

{% include web-component-shared-text/intro-light-dom.html %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-custom" %}}

### fds-upload-file

#### Attributter

{:.table .table--responsive-headers}
| Attribut             | Beskrivelse                                                                                                                                                                   |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dropzone-prefix       | Definerer den indledende tekst i dropzone-området før linkteksten. Default er `Træk dine filer herhen eller`.                                                              |
| dropzone-link         | Definerer teksten for det klikbare link i dropzone-området. Default er `vælg filer`.                                                                                       |
| dropzone-suffix       | Definerer teksten der vises efter linkteksten i dropzone-området. Attributten er tom som standard, men kan bruges til at tilføje yderligere instruktioner eller information. |
| file-list-header      | Definerer overskriften der vises over listen af valgte filer. Default er `Valgte filer`.                                                                                    |
| file-list-more        | Definerer teksten på knappen til at vælge flere filer. Denne knap vises kun, når det native `multiple`-attribut er sat på `input`-elementet. Default er `Vælg flere filer`. |
| remove-text           | Definerer teksten på fjern-knappen for hver fil i listen. Default er `Fjern`.                                                                                                |
| heading-level         | Angiv overskriftsniveauet for filliste-overskriften. Gyldige værdier er `h1`, `h2`, `h3`, `h4`, `h5` og `h6`. Default er `h5`.                                              |
| show-required-status  | Viser om feltet er obligatorisk eller frivilligt baseret på `required`-attributten. Indsæt en tekst i attributten for at overskrive default-teksten.                       |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion                   | Beskrivelse                                                                                                                           |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| getFiles()                 | Returnerer et array med alle valgte filer og deres tilknyttede ID'er. Hver fil returneres som et objekt med egenskaberne `id` og `file`. |
| addError(message, fileId)  | Tilføjer en fejlbesked til komponenten. `fileId` er valgfri. Angives den, knyttes fejlen til den specifikke fil. Returnerer fejlelementet. |
| removeError(errorElement)  | Fjerner det angivne fejlelement fra komponenten.                                                                                     |

#### Events

{:.table .table--responsive-headers}
| Event        | Beskrivelse                                                                                   |
|---------------|---------------------------------------------------------------------------------------------------|
| files-added   | Udløses når en eller flere filer tilføjes. `event.detail` indeholder et array af de tilføjede filer. |
| files-removed | Udløses når en fil fjernes. `event.detail` indeholder den fjernede fil.                          |

### fds-file-item

`fds-file-item` oprettes automatisk af `fds-upload-file` for hver valgt fil og er ikke tiltænkt at blive oprettet manuelt.

#### Attributter

{:.table .table--responsive-headers}
| Attribut    | Beskrivelse                                                                                                                                 |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| remove-text | Definerer teksten på fjern-knappen for den enkelte fil. Sættes automatisk af `fds-upload-file`, når dennes `remove-text`-attribut ændres.  |

### fds-help-text

{% include web-component-shared-text/fds-help-text.html %}

### fds-error-message

{% include web-component-shared-text/fds-error.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-custom" %}}

### Hjælpetekst

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-upload-file-helptext" heading_tag="h4" subheading_tag="h5" %}

### Fejl

For at tilknytte en fejlbesked til en specifik fil skal du angive filens ID som anden parameter i `addError()`. Når en fejl knyttes til en fil, vises fejlbeskeden direkte under den pågældende fil i fillisten, og filen markeres visuelt som ugyldig. Hvis fil-ID'et ikke angives, vises fejlen som en generel fejl for hele komponenten.

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-upload-file-error" heading_tag="h4" subheading_tag="h5" %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-upload-file-file-error" heading_tag="h4" subheading_tag="h5" %}

### Deaktiveret

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-upload-file-disabled" heading_tag="h4" subheading_tag="h5" %}
