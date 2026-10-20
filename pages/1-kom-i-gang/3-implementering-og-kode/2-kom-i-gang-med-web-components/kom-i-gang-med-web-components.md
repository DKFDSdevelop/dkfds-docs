---
permalink: "/kom-i-gang/implementering-kode/kom-i-gang-med-web-components/"
parentlink: "/kom-i-gang/implementering-kode/"
redirect_from:
layout: styleguide
category: kom_i_gang_menu
subcategory: Kom i gang
title: Kom i gang med Web Components
description: "Kom hurtigt i gang med Web Components."
lead: "Følg guiden herunder, og kom hurtigt i gang med Web Components"
tags:
- JavaScript
- custom
- web
- component
- components
---

{% include anchorlinks.html headings="Kom_i_gang_med_Web_Components" %}

## Sådan anvender du komponenterne {#{% include create-id.html heading="Sådan anvender du komponenterne" %}}

TO DO

## Baggrund for opbygning af Web Components {#{% include create-id.html heading="Baggrund for opbygning af Web Components" %}}

Da designsystemet bruges forskelligt fra projekt til projekt, har vi lagt vægt på, at komponenterne skal være fleksible at arbejde med. Derfor er de fleste af vores Web Components i første beta-version bygget uden Shadow DOM. Shadow DOM er en teknik, der isolerer en komponents interne HTML og styling fra resten af siden og beskytter den mod at blive påvirket af for eksempel scripts eller frameworks' opdateringer af siden. Dog giver det også mindre fleksibilitet for udviklere, fordi det ikke er muligt at få kontrol over al HTML. Det står i modsætning til Light DOM, hvor komponentens HTML indgår direkte i sidens almindelige DOM-struktur.

Brugen af Shadow DOM eller Light DOM i FDS er blevet vurderet fra komponent til komponent, og valget fremgår af hver komponents dokumentation. Denne vurdering kan ændre sig, i takt med at vi bliver klogere på behov og udfordringer. Vi er samtidig opmærksomme på, at Shadow DOM i visse situationer kan give tilgængelighedsudfordringer, hvorfor vi er forsigtige med, hvor og hvordan vi anvender det. Omvendt kan Shadow DOM gøre en komponent mere robust at bruge i frameworks. Både fleksibilitet, tilgængelighed og robusthed spiller derfor ind, når vi vurderer, hvilken tilgang der giver mest mening for den enkelte komponent.

Læs mere om {% include links/external-link.html linktext="Shadow DOM og tilgængelighed" %}.

## Vi har brug for din feedback {#{% include create-id.html heading="Vi har brug for din feedback" %}}

Overgangen vil lykkes bedst, hvis den er testet af de teams, der rent faktisk bruger designsystemet i hverdagen. Derfor vil vi meget gerne høre fra dig, hvis du:
- støder på fejl eller uventet adfærd i en eller flere af komponenterne
- oplever udfordringer med at integrere komponenterne i jeres framework
- har ønsker til valget mellem Light DOM og Shadow DOM for den enkelte komponent, fx om afvejningen mellem fleksibilitet og stabilitet i jeres framework fungerer godt for jer
- generelt har erfaringer, positive som negative, som I har lyst til at dele

Du kan {% include links/external-link.html linktext='dele din feedback via GitHub' %} eller {% include links/internal-link.html linktext="sende en e-mail" %}.