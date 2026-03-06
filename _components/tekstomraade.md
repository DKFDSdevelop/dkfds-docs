---
permalink: "/komponenter/tekstomraade/"
redirect_from:
- "/komponenter/textarea/"
- "/kode/komponenter/textarea/"
- "/kode/komponenter/tekstomraade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tekstområde (Textarea)
lead: Tekstområder lader brugeren indtaste en længere tekst på flere linjer.
description: "Felt til indtastning af information på flere linjer i form af bogstaver, tal og en kombination af begge."
tags:
- tekstområde
- tekstomraade
- textarea
- karakterbegrænsning
- karakterbegraensning
tabs: "Retningslinjer, kode, custom"
---

{% include tabs.html guidelines=true code=true custom=true %}

{% include code/preview-box.html component="text-area" title="Eksempel på tekstområde" classes="intro-example" %}

{% include anchorlinks.html guidelines="Tekstomraade" code="Tekstomraade_Kode" custom="Tekstomraade_Custom"%}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til

Brug tekstområder til sammenhængende (mere end 2 linjer) men ustruktureret tekst og sætninger, der har karakter af prosa. Fx en baggrundsfortælling.

Anvendes når der er behov for yderligere sammenhængende information, hvis karakter brugeren ikke kan vælge ud fra et prædefineret sæt værdier.

Anvendes når løsningen stiller et spørgsmål, der ikke kan besvares i et felt.

### Anvendes ikke til

Brug ikke tekstområder til struktureret information, hvor datakonsistens har betydning.

### Vejledning

Angiv tekstområdets højde, så det modsvarer den tekstmængde, du forventer, at brugeren skal indtaste.

Overvej at begrænse antallet af tegn, hvis det giver mening.

Vis kun fejlmeddelelser, når brugeren har indtastet en ugyldig værdi.

Fejlmeddelelser skal være meningsfulde og hjælpsomme.

Placér fejlmeddelelser mellem label og felt, og markér feltet med rødt.

{% include dos-donts-box.html component="textarea-dos-donts" %}

#### Fejlmeddelelse

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og deres formuleringer.

Når der vises en fejlmeddelelse, vis da også {% include links/component-guideline-link.html linktext="fejlopsummering" %}.

{% include code/preview-box.html component="text-area-error" title="Eksempel på tekstområde med fejlmeddelelse" %}

## Varianter {#{% include create-id.html heading="Varianter" %}}

{:#karakterbegraensning}
### Karakterbegrænsning

Karakterbegrænsning sætter et maksimalt antal af tegn, som brugeren kan indtaste i et tekstområde. Karakterbegrænsning indikerer løbende overfor brugeren, hvor mange tegn der er tilbage, og hvor mange tegn de evt. har overskredet med.

Vis altid antallet af tegn, der er til rådighed i tekstområdet, inden brugeren begynder at skrive.

Stop ikke indtastningen, når brugeren overskrider antallet af tegn. Vis i stedet løbende med rød tekst under feltet, hvor mange tegn der er overskredet med.

{% include code/preview-box.html component="text-area-character-limit" title="Eksempel på tekstområde med karakterbegrænsning" code="/komponenter/tekstomraade/#karakterbegraensning-kode" %}

### Deaktiveret {#{% include create-id.html heading="Deaktiveret" %}}

{% include code/preview-box.html component="text-area-disabled" title="Eksempel på deaktiveret tekstområde" code="/komponenter/tekstomraade/#deaktiveret-kode" %}

Bemærk, at deaktiverede tekstområder hverken har kontrastkrav eller kan få fokus og dermed kan være svære at opdage, fx når man anvender en skærmlæser. Det anbefales derfor, at man helt undlader tekstområdet i stedet for at deaktivere det.

## Se komponenten i eksempelløsninger {#{% include create-id.html heading="Se komponenten i eksempelløsninger" %}}

{% include links/demo-link.html linktext="Trinformular til ansøgning: Ansøgningens type" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

ISO 9241-143: Forms (2012)

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="text-area" copybutton=true %}
  
Sørg for at rette værdierne i følgende attributter, så de svarer til din løsning:

- `for`
- `id`
- `name`
- `rows`

Sæt højden på et tekstområde ved brug af `rows` attributten. Sæt højden, så det svarer til den mængde tekst, der forventes indtastet.

## Fejlmeddelelse {#{% include create-id.html heading="Fejlmeddelelse" append="-kode" %}}

Læs mere om korrekt brug af {% include links/component-guideline-link.html linktext="fejlmeddelelser" %} og {% include links/component-code-link.html linktext="fejlmeddelelser's implementering med tekstområde." %}

Når der vises en fejlmeddelelse, vis da også {% include links/component-code-link.html linktext="en fejlopsummering" %}.

## Karakterbegrænsning {#{% include create-id.html heading="Karakterbegrænsning" append="-kode" %}}

{% include code/syntax.html component="text-area-character-limit" link=true copybutton=true guidelines="/komponenter/tekstomraade/#karakterbegraensning" %}

### Javascript

Karakterbegrænsning kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med `init()`.

#### Funktioner

<div class="table--responsive-scroll">
  <table class="table table--responsive-headers">
    <thead>
      <tr>
        <th scope="col">Funktion</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>init()</td>
        <td>Sørger for at beskederne med antal tegn tilbage opdateres.</td>
      </tr>
      <tr>
        <td>charactersLeft()</td>
        <td>Returnerer det antal tegn, der lige nu kan indtastes i inputfeltet. Tallet er negativt, hvis antallet af tegn er overskredet.</td>
      </tr>
      <tr>
        <td>updateMessages()</td>
        <td>Fremtvinger en opdatering af beskederne med antal tegn tilbage. Dette kan være nyttigt, hvis eksempelvis værdien i inputfeltet ændres programmatisk.</td>
      </tr>
      <tr>
        <td>silentUpdateMessages()</td>
        <td>Fungerer på samme måde som <code>updateMessages()</code>, bortset fra at ændringen ikke læses højt i skærmlæsere. Anvend kun, når ændringer i feltet er meningsforstyrrende for skærmlæserbrugere.</td>
      </tr>
    </tbody>
  </table>
</div>

Eksempel på anvendelse:

{% highlight javascript %}
const form_limit = new DKFDS.CharacterLimit(document.getElementsByClassName('form-limit')[0]);
form_limit.init();
form_limit.charactersLeft();
{% endhighlight %}

#### Sprog

Hvis du ønsker at anvende et andet sprog end dansk i JavaScript-koden til karakterbegrænsning, skal du selv give din oversættelse med og derefter initiere komponenten manuelt. Husk at opdatere værdien i attributten "lang" i din sides html-tag. Indholdet i krøllede parenteser `{...}` nedenunder skal ikke oversættes eller ændres.

{% highlight javascript %}
new DKFDS.CharacterLimit(document.getElementById('FORM-LIMIT-ID'), {
  "character_remaining": "Du har {value} tegn tilbage",
  "characters_remaining": "Du har {value} tegn tilbage",
  "character_too_many": "Du har {value} tegn for meget",
  "characters_too_many": "Du har {value} tegn for meget"
}).init();
{% endhighlight %}

## Deaktiveret {#{% include create-id.html heading="Deaktiveret" append="-kode" %}}

{% include code/syntax.html component="text-area-disabled" link=true copybutton=true guidelines="/komponenter/tekstomraade/#deaktiveret" %}

Husk at medtage de to beskeder skjult med klassen `sr-only`. Disse anvendes af skærmlæsere til at give info og status på indtastningen til brugeren.

<!--split-->

## Om custom elements {#{% include create-id.html heading="Om custom elements" append="-custom" %}}

### HTML-muligheder

Som udgangspunkt bør man anvende custom element-koden, da denne kommer med JavaScript, der genererer både den nødvendige HTML og funktionalitet.

Hvis man ikke ønsker at benytte custom elements, kan man tage den genererede HTML i stedet. Erstat evt. `<fds-textarea>` med `<div class="fds-textarea">`. Bemærk, at man i så fald selv er ansvarlig for HTML og funktionalitet.

## Eksempler {#{% include create-id.html heading="Eksempler" append="-custom" %}}

{% include code/show-example-with-tabs.html example="fds-textarea-example" tabId="example-1-sel" %}

## Varianter {#{% include create-id.html heading="Varianter" append="-custom" %}}

### Fejl

{% include custom-element-shared-text/fds-error-intro-text.html %}

{% include code/show-example-with-tabs.html example="fds-textarea-error" tabId="example-2-sel" %}

{% include custom-element-shared-text/fds-error-tables.html %}

### Hjælpetekst

{% include custom-element-shared-text/fds-helptext-intro-text.html %}

{% include code/show-example-with-tabs.html example="fds-textarea-helptext" tabId="example-3-sel" %}

{% include custom-element-shared-text/fds-help-text-tables.html %}

### Karakterbegrænsning

{% include custom-element-shared-text/fds-character-limit-intro-text.html %}

{% include code/show-example-with-tabs.html example="fds-textarea-limit" tabId="example-input-limit" %}

{% include custom-element-shared-text/fds-character-limit-tables.html %}

### Obligatoriske og frivillige inputfelter

{% include code/show-example-with-tabs.html example="fds-textarea-required" tabId="example-4-sel" %}

### Deaktiveret

{% include code/show-example-with-tabs.html example="fds-textarea-disabled" tabId="example-5-sel" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-custom" %}}

### Attributter

{:.table .table--responsive-headers}
| Attribut             | Beskrivelse                                                                                                                      |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------|
| show-required-status | Viser om inputfeltet er obligatorisk eller frivilligt. Indsæt en tekst i attributten for at overskrive default-teksten.          |