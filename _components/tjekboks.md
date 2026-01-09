---
permalink: "/komponenter/tjekboks/"
redirect_from:
- "/kode/komponenter/tjekboks/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tjekboks (Checkbox)
lead: Tjekbokse lader brugeren vælge en eller flere muligheder.
description: "Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste."
tags:
tabs: "Retningslinjer, kode, custom"
---

{% include tabs.html guidelines=true code=true custom=true %}

{% include code/preview-box.html component="checkbox-large" title="Eksempel på tjekbokse" classes="intro-example" %}

{% include anchorlinks.html guidelines="Tjekboks" code="Tjekboks_Kode" custom="Tjekboks_Custom" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Tjekbokse giver brugeren mulighed for at vælge en eller flere værdier ud fra en synlig liste.

Når brugeren skal have overblik over sine mulige valg.

Når brugeren skal be- eller afkræfte et valg, fx ”Ja/Nej” (i det tilfælde en enkelt tjekboks), eller slå noget til eller fra (toggle).

Når listen over mulige valg kan være på en mobilvisning.

### Anvendes ikke til

Når der er for mange valg til at give mening på en mobilvisning.

Når brugeren kun kan vælge én værdi. Her skal du i stedet anvende radioknapper.

### Vejledning

Brugeren skal kunne tappe eller klikke på tjekboksen eller dens label for at vælge eller fravælge dens værdi.

Du bør opstille lister med tjekbokse i lodret linje af hensyn til brugerens læseretning.

Anvend et positivt sprog til værdierne. I stedet for fx ”Jeg vil ikke modtage bekræftelse på email” bør du skrive ”Jeg vil gerne modtage bekræftelse på email”.

Sørg for at der er tilstrækkelig luft omkring den enkelte tjekboks, så den er brugbar på touchskærme.

Hvis du giver brugeren en liste med tjekbokse, så gør det tydeligt gennem enten label eller hjælpetekst, hvor mange tjekbokse det forventes, at de vælger.

{% include dos-donts-box.html component="checkbox-dos-donts" %}

#### Fejlmeddelelse

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="error-message-checkbox" title="Eksempel på tjekbokse med fejlmeddelelse" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

### Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" %}}

#### Tjekboksgruppe med hjælpetekst {#{% include create-id.html heading="Tjekboksgruppe med hjælpetekst" %}}

{% include code/preview-box.html component="checkbox-group-helptext" title="Eksempel på tjekboksgruppe med hjælpetekst" code="/komponenter/tjekboks/#tjekboksgruppe-med-hjaelpetekst-kode" %}

#### Hjælpetekst til enkelte tjekbokse {#{% include create-id.html heading="Hjælpetekst til enkelte tjekbokse" %}}

{% include code/preview-box.html component="checkbox-helptext" title="Eksempel på tjekbokse med hjælpetekst" code="/komponenter/tjekboks/#hjaelpetekst-til-enkelte-tjekbokse-kode" %}

{:#skjult-indhold-collapse}
### Skjult indhold (Collapse)

{% include code/preview-box.html component="checkbox-collapse" title="Eksempel på tjekboks med skjult indhold" code="/komponenter/tjekboks/#skjult-indhold-collapse-kode" %}

{:#collapse-retningslinjer}
#### Anvendes til

Anvendes til at vise et ekstra felt, der er relevant afhængigt af den valgte tjekboks. Fx kan du vise et e-mailfelt, når brugeren vælger at ville kontaktes pr. e-mail.

#### Anvendes ikke til

Anvendes ikke til at vise ekstra beskrivende/oplysende tekst eller billeder.

#### Vejledning

Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet, bør du overveje at fordele det ud over flere sider i stedet.

{% include dos-donts-box.html component="checkbox-hidden-content-do-dont" %}

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{:.nobullet-list}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg personer" %}
- {% include links/demo-link.html linktext="Trinformular til registrering: Vælg noget mere" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- ISO 9241-143: Forms (2012)
- {% include links/external-link.html linktext="Jakob Nielsen: Checkboxes vs. Radio Buttons (2004)" %}

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="checkbox-large" copybutton=true %}

- Indsæt altid to eller flere tjekbokse i et fieldset inklusive legend. En enkelt tjekboks skal ikke sidde i et fieldset.
- Giv hver tjekboks sit eget id og angiv samme værdi til det tilhørende label.
- Tjekboksenes design er ændret ift. standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.
- Tjekboksene er gjort tilgængelige for skærmlæsere på trods af deres visuelle design, ved at selve tagget for tjekboksen er placeret uden for det synlige skærmområde.

### JavaScript

Tjekboks med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.CheckboxToggleContent(document.getElementById('CHECKBOX-INPUT-ID')).init();
{% endhighlight %}

#### Events

<div class="table--responsive-scroll" tabindex="0">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Event key</th>
        <th scope="col">Element</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fds.collapse.expanded</td>
        <td><code>input.js-checkbox-toggle-content</code></td>
        <td>Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet</td>
      </tr>
      <tr>
        <td>fds.collapse.collapsed</td>
        <td><code>input.js-checkbox-toggle-content</code></td>
        <td>Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet</td>
      </tr>
    </tbody>
  </table>
</div>

## Hjælpetekst {#{% include create-id.html heading="Hjælpetekst" append="-kode" %}}

### Tjekboksgruppe med hjælpetekst {#{% include create-id.html heading="Tjekboksgruppe med hjælpetekst" append="-kode" %}}

{% include code/syntax.html component="checkbox-group-helptext" link=true copybutton=true guidelines="/komponenter/tjekboks/#tjekboksgruppe-med-hjaelpetekst" %}

### Hjælpetekst til enkelte tjekbokse {#{% include create-id.html heading="Hjælpetekst til enkelte tjekbokse" append="-kode" %}}

{% include code/syntax.html component="checkbox-helptext" link=true copybutton=true guidelines="/komponenter/tjekboks/#hjaelpetekst-til-enkelte-tjekbokse" %}

## Skjult indhold (collapse) {#{% include create-id.html heading="Skjult indhold (collapse)" append="-kode" %}}

{% include code/syntax.html component="checkbox-collapse" link=true copybutton=true guidelines="/komponenter/tjekboks/#skjult-indhold-collapse" %}

For at initialisere collapse funktionaliteten på en checkbox skal `input[type=checkbox]` have følgende:

- Klassen `'js-checkbox-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-js-target="id-of-target-to-collapse"`: denne attribute skal have samme værdi som i id attributten på det element som skal vises på tjekboksen er aktiveret. 
- Hvis man ønsker at tjekboksen skal være valgt fra starten af, skal den have attributten `'checked'`.
- `aria-controls="id-of-target-to-collapse" `

Det element som skal collapses/expandes skal have følgende:

- `id="id-of-target-to-collapse"`
- `aria-hidden="true/false"`

<!--split-->

## Om custom elements {#{% include create-id.html heading="Om custom elements" append="-custom" %}}

Tjekbokse har to custom elementer tilknyttet: fds-checkbox og fds-checkbox-group. 

Brug attributten "group-label" på fds-checkbox-group til at sætte en label for hele gruppen.

### HTML-muligheder

Som udgangspunkt bør man anvende custom element-koden, da denne kommer med JavaScript, der genererer både den nødvendige HTML og funktionalitet.

Hvis man ikke ønsker at benytte custom elements, kan man tage den genererede HTML i stedet. Erstat evt. `<fds-checkbox>` med `<div class="fds-checkbox">`. Bemærk, at man i så fald selv er ansvarlig for HTML og funktionalitet.

## Eksempler {#{% include create-id.html heading="Eksempler" append="-custom" %}}

### Tjekbox med label lavet med custom element

{% include code/show-example-with-tabs.html example="fds-checkbox-example" tabId="example-1-acc" %}

Både ID og klasser kan undlades, hvormed elementet selv indsætter disse. Elementet kan derfor simplificeres til:
{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="fds-checkbox-simple" %}

## Varianter {#{% include create-id.html heading="Varianter" append="-custom" %}}

### Fejl

{% include code-examples/fds-error-intro-text.html%}

{% include code/show-example-with-tabs.html example="fds-checkbox-error" tabId="example-input-error" %}

{% include code-examples/fds-error-tables.html%}

### Hjælpetekst

{% include code-examples/fds-helptext-intro-text.html%}

#### Hjælpetekst til enkelte tjekbokse

{% include code/show-example-with-tabs.html example="fds-checkbox-help-text" tabId="example-checkbox-helptext" %}

#### Tjekboksgruppe med hjælpetekst

{% include code/show-example-with-tabs.html example="fds-checkbox-group-help-text" tabId="example-checkbox-group-helptext" %}

{% include code-examples/fds-help-text-tables.html%}

### Obligatoriske og frivillige tjekbokse

{% include code/show-example-with-tabs.html example="fds-checkbox-required" tabId="example-3-acc" %}

### Skjult indhold (Collapse)

{% include code/show-example-with-tabs.html example="fds-checkbox-collapse" tabId="example-4-acc" %}

### Deaktiveret

#### Deaktiveret enkelte tjekbokse

{% include code/show-example-with-tabs.html example="fds-checkbox-disabled" tabId="example-5-acc" %}

#### Deaktiveret tjekboksgruppe

{% include code/show-example-with-tabs.html example="fds-checkbox-group-disabled" tabId="example-6-acc" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-custom" %}}

### fds-checkbox

#### Attributter

{:.table .table--responsive-headers}
| Attribut        | Beskrivelse                                                                                                                        |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------|
| input-indicator | Viser om tjekbox er obligatorisk eller frivilligt. For at gøre en checkbox obligatorisk tilføj required attributten på input html elementet. Indsæt en tekst i attributten for at overskrive default-teksten. default-teksten.|

#### Funktioner

{:.table .table--responsive-headers}
| Funktion              | Beskrivelse                                                                                                     |
|-----------------------|-----------------------------------------------------------------------------------------------------------------|
| updateIdReferences()  | Funktionen sikrer korrekt kobling mellem label, input og øvrige elementer.                                      |
| setClasses()          | Sætter de nødvendige klasser på inputfelt og label.                                                             |

### fds-checkbox-group

#### Attributter

{:.table .table--responsive-headers}
| Attribut        | Beskrivelse                                                                                                                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| group-label | Brug attributten "group-label" til at sætte en label for hele gruppen.                                      |
| group-disabled | Deaktiverer tjekbokskgruppen. Hvis værdien er sat til andet end false, tilføjes disabled-attributten til fieldsetet.               |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion              | Beskrivelse                                                                                                     |
|-----------------------|-----------------------------------------------------------------------------------------------------------------|
| handleIdReferences()  | Funktionen sikrer korrekt kobling mellem label, input og øvrige elementer.                                      |