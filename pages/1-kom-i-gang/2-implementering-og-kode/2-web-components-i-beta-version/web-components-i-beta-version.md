---
permalink: "/kom-i-gang/implementering-kode/web-components-i-beta-version/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
layout: styleguide
category: kom_i_gang_menu
subcategory: Kom i gang
title: Web Components i beta-version
description: "Vi omskriver designsystemets kode til Web Components. Det gør komponenterne mere robuste, lettere at vedligeholde og nemmere at bruge på tværs af forskellige frameworks."
lead: "Vi er i gang med en større teknisk ændring af designsystemet: Vi skifter den underliggende kodebase fra en ældre JavaScript-arkitektur baseret på constructor functions til Web Components. Læs mere i de følgende afsnit om, hvad ændringen betyder i praksis, og hvordan du kan hjælpe os med at gøre koden bedre."
tags:
- JavaScript
- custom
- web
- component
- components
---

{% include anchorlinks.html headings="Web_Components_i_beta_version" %}

## Hvorfor skifter vi til Web Components? {#{% include create-id.html heading="Hvorfor skifter vi til Web Components?" %}}

Designsystemet bliver i dag brugt på tværs af mange forskellige projekter og teams og dermed også på tværs af forskellige frontend-frameworks. Med den tidligere JavaScript-arkitektur har det krævet ekstra arbejde at integrere komponenterne korrekt i frameworks, uanset om det er Vue, Angular, React eller noget helt fjerde. Web Components er stadig ren Vanilla JS ligesom den tidligere kode, men bruger en mere moderne tilgang, hvor formålet er at gøre det lettere at bruge komponenterne as-is, også i frameworks, og lettere at opgradere til nye versioner, da mere af HTML'en ligger i selve elementet.

## Om Web Components {#{% include create-id.html heading="Om Web Components" %}}

Da designsystemet bruges forskelligt fra projekt til projekt, har vi lagt vægt på, at komponenterne skal være fleksible at arbejde med. Derfor er de fleste af vores Web Components i første beta-version bygget uden Shadow DOM. Shadow DOM er en teknik, der isolerer en komponents interne HTML og styling fra resten af siden og beskytter den mod at blive påvirket af for eksempel scripts eller frameworks' opdateringer af siden. Dog giver det også mindre fleksibilitet for udviklere, fordi det ikke er muligt at få kontrol over al HTML. Det står i modsætning til Light DOM, hvor komponentens HTML indgår direkte i sidens almindelige DOM-struktur.

Brugen af Shadow DOM eller Light DOM i FDS er blevet vurderet fra komponent til komponent, og valget fremgår af hver komponents dokumentation. Denne vurdering kan ændre sig, i takt med at vi bliver klogere på behov og udfordringer. Vi er samtidig opmærksomme på, at Shadow DOM i visse situationer kan give tilgængelighedsudfordringer, hvorfor vi er forsigtige med, hvor og hvordan vi anvender det. Omvendt kan Shadow DOM gøre en komponent mere robust at bruge i frameworks. Både fleksibilitet, tilgængelighed og robusthed spiller derfor ind, når vi vurderer, hvilken tilgang der giver mest mening for den enkelte komponent.

Læs mere om {% include links/external-link.html linktext="Shadow DOM og tilgængelighed" %}.

## Web Components som beta-version {#{% include create-id.html heading="Web Components som beta-version" %}}

Vi udgiver i første omgang en række udvalgte komponenter som Web Components. Det er bevidst et begrænset udvalg, fordi vi er i en betafase, hvor formålet er at teste tilgangen i praksis, samle erfaringer og rette eventuelle problemer, inden vi udruller det til resten af designsystemet.
Betakomponenterne kan bruges side om side med den tidligere kode. Vær dog opmærksom på, at koden til Web Components ligger i nye stylesheets og scripts, som skal tilføjes særskilt.

Det betyder også, at:
- De udvalgte komponenter, der nu er tilgængelige, kan ændre sig, efterhånden som vi justerer dem baseret på feedback. Der kan forekomme breaking changes i denne periode, så vi anbefaler, at du holder øje med versionsnumre og release notes, hvis du tager komponenterne i brug allerede nu.
- Dokumentationen bliver løbende opdateret i takt med, at vi lærer mere.
- Der udvides løbende med flere komponenter.

Vær også opmærksom på, om dit framework kræver særlig konfiguration eller andre ændringer, når du tager Web Components i brug.

Du kan {% include links/internal-link.html linktext="hente kodepakken" %} via NPM.

## Vi har brug for din feedback {#{% include create-id.html heading="Vi har brug for din feedback" %}}

Overgangen vil lykkes bedst, hvis den er testet af de teams, der rent faktisk bruger designsystemet i hverdagen. Derfor vil vi meget gerne høre fra dig, hvis du:
- støder på fejl eller uventet adfærd i en eller flere af komponenterne
- oplever udfordringer med at integrere komponenterne i jeres framework
- har ønsker til valget mellem Light DOM og Shadow DOM for den enkelte komponent, fx om afvejningen mellem fleksibilitet og stabilitet i jeres framework fungerer godt for jer
- generelt har erfaringer, positive som negative, som I har lyst til at dele

Du kan {% include links/external-link.html linktext='dele din feedback via GitHub' %} eller {% include links/internal-link.html linktext="sende en e-mail" %}.