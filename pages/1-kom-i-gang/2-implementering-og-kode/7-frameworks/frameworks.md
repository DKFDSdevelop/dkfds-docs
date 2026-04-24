---
permalink: "/kom-i-gang/implementering-kode/frameworks/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
- /omdesignsystemet/anbefalingerudvikling/
- /omdesignsystemet/anbefalinger-vaerktoejer/
- /komigang/tiludviklere/anbefalinger-vaerktoejer/
- /kode/anbefalinger-vaerktoejer/
- /kode/eksempler-implementering/
layout: styleguide
category: Kom_i_gang_category
subcategory: Kom i gang
title: Frameworks
description: I denne sektion findes al dokumentation henvendt specifikt til udvikling.
tags:
- JavaScript
- framework
- frameworks
- Vanilla
---

{% include anchorlinks.html headings="Frameworks" %}

## JavaScript {#{% include create-id.html heading="JavaScript" %}}

Det Fælles Designsystem anvender Vanilla JavaScript (også kendt som VanillaJS eller Plain JS) uden JavaScript-biblioteker, som fx jQuery, for at undgå afhængighed til tredjepartsleverandører og deres eventuelle tekniske gæld.

## Kodefrihed under ansvar {#{% include create-id.html heading="Kodefrihed under ansvar" %}}

Vi har bestræbt os på at lave et designsystem, der er let at anvende og kode med, men vi vil ikke tvinge nogen væk fra deres favorit (JavaScript) framework. Så længe det visuelle design (CSS) er som beskrevet i designsystemet, er du velkommen til at udnytte de teknologier, du finder bedst, men giv vores kode et kig, den er lige til at gå til.

Du skal altid kode selvbetjeningsløsningens brugergrænseflade i valid HTML5, som det er defineret i {% include links/external-link.html linktext="WHATWG" %}. Hvis du afviger fra koden i designsystemet anbefaler vi, at du sikrer din kodes validitet, fx med {% include links/external-link.html linktext="W3C Markup Validation Service (HTML)" %} eller {% include links/external-link.html linktext="W3C CSS Validation Service (CSS)" %}.

## Eksempler på anvendelse {#{% include create-id.html heading="Eksempler på anvendelse" %}}

Nedenstående eksempler viser, hvordan man kan anvende koden i udvalgte frameworks.

### React

#### Registrering

FDS custom elements kan bruges direkte i React, når Designsystemets JavaScript er indlæst. dkfds.js registrerer alle custom elements globalt, så React-udviklere behøver ikke at registrere hvert enkelt element manuelt.
{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="react-script" %}

Derefter kan elementerne bruges direkte i JSX:
{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="fds-upload-file-example" %}

Hvis du bruger FDS via npm-pakken, skal du sikre dig, at pakkens JavaScript bliver importeret, så de custom elements er registreret, før de bruges.

#### Attributer, funktioner og custom events 

Brug FDS custom elements direkte i React via JSX-attributter. Hvis en komponent eksponerer funktioner eller custom events, skal du tilgå elementet via en ref.
{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="react-ref" %}

#### Server-side rendering

FDS custom elements kan bruges med server-renderet HTML, hvor den fulde markup gengives på serveren og hydreres på klienten. Komponenternes funktionalitet initialiseres, når Designsystemets JavaScript indlæses i browseren.

#### React wrappers

En wrapper giver især mening i React, når du har brug for ref, offentlige metoder eller custom event listeners. Hvis en komponent allerede fungerer enkelt og naturligt direkte i JSX, vil en wrapper ofte ikke tilføre nok værdi.
{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="react-wrapper" %}

### Blazor

Opdatér den fil, hvor du definerer dit HTML-layout og anvender scripts (fx App.razor i nyrere versioner af .NET).
{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="blazor-app" %}

Hvis du anvender Blazor-komponenter inde i custom elements, skal du selv sørge for at HTML'en ikke initialiserer for tidligt. Du kan styre dette ved at bruge `ready`-attributten, som er skrevet ind i alle FDS' custom elements.
{% include code/show-example-in-box.html path="output-files-from-build/highlighted-examples/" example="blazor-component" %}