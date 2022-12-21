---
permalink: /design/typografi/links/
title: Links
description: ""
parentlink: /design/typografi/
category: Design_category
subcategory: Design
type: component
layout: styleguide
anchor: true
tags:
- "ekstern"
- "ekstern link"
- "footer link"
- "footerlink"
subnav:
- text: Eksternt link
  href: "#eksternt-link"
- text: Sekundære link
  href: "#sekundaere-links"
- text: Billeder som links
  href: "#billeder-som-links"
---

Se også vores <a href="/komponenter/skip-link/">Skip-link</a>, <a href="/komponenter/funktionslink/">Funktionslink</a> og <a href="/komponenter/tilbage-link/">Tilbage link</a>.

{% include code/preview-box.html component="links" link="false" %}

{:.h3}
## Designværdier

{:.table .table--borderless .table--responsive-headers}
| Tekst                 | Tekstfarve | Understreget | Ramme                           |
|-----------------------|------------|--------------|---------------------------------|
| Standard link         | #004D99    | Ja           |                                 |
| Standard link, hover  | #000040    | Ja           |                                 |
| Standard link, besøgt | #800080    | Ja           |                                 |
| Standard link, fokus  | #004D99    | Ja           | Tykkelse: 4px<br>Farve: #747474 |

## Retningslinjer

### Tilgængelighed

- Linkteksten skal give mening for brugeren og angive, hvad linket fører hen til.
- Links skal enten være understreget eller markeret på anden vis. Et link må ikke kun være angivet med en farve.
- Brugerne skal kunne sætte fokus på links og aktivere dem ved brug af tastaturet.
- Links skal have en defineret `href` attribut i koden.
- Har linket en “hover” skal denne kunne aktiveres både med tastatur og mus.

### Anvendes til

- Brug links til at lade brugeren navigere til andre sider i din løsning.
- Brug links til at linke til sider uden for din løsning. Husk at markere dette med et ikon som beskrevet under implementeringsafsnittet under <a href="#eksternt-link">eksternt link</a>.

### Brugervenlighed

Hvis et link fører væk fra den aktuelle side og brugeren kan miste data eller risikere at skulle udfylde samme del igen ved at følge linket, så advisér brugeren om dette i en modal. Bed også brugeren om at be- eller afkræfte ønsket om at forlade siden.

Brug links med omtanke i en selvbetjeningsløsning. Linker du for meget ud til eksterne websites, kan det virke forstyrrende for flowet og få brugeren ud af kontekst. Omvendt kan det give stor værdi for brugeren, hvis du linker ud til relevante informationer. Fx informationer, som understøtter brugerens vej gennem selvbetjeningsløsningen og/eller giver væsentlige input til, hvad brugeren skal indtaste i løsningen.

Gør gerne brugeren opmærksom på, hvor det eksterne link fører hen, fx i en parentes som en del af linket, hvis det ikke fremgår af linkteksten.

Vær dog opmærksom på, at det kan virke forstyrrende for flowet og få brugeren ud af kontekst, hvis du linker for meget ud til eksterne websites.

{:#eksternt-link}
## Eksternt link

{% include code/preview-box.html component="external-link" title="Eksempel på eksternt link" link=false code="/kode/typografi/links/#eksternt-link" %}

{:#sekundaere-links}
## Sekundære links

<p class="font-lead">Sekundære links bruges til at skabe en visuel forskel på links til funktioner og særlige typer af navigation.</p>

{% include code/preview-box.html component="secondary-links" title="Eksempel på sekundære links" link=false code="/kode/typografi/links/#sekundaere-links" %}

### Designværdier

{:.table .table--borderless .table--responsive-headers}
| Tekstfarve | Understreget |
|------------|--------------|
| #1a1a1a    | Ja           |

### Anvendes til

- <a href="/komponenter/funktionslink/">Funktionslink</a>
- <a href="/komponenter/broedkrumme/">Brødkrumme</a>
- <a href="/komponenter/footer/">Footer</a> links

### Anvendes ikke til

Brug ikke sekundære links i eller imellem afsnit af tekst eller til generel navigation mellem sider, brug da et standard link.

### Vejledning

Vær ikke kreativ med brugen af sekundære links, da de giver mindre fært end standard-links. Alternativ anvendelse af sekundære links kan tillige skabe tvivl og forvirring hos brugerne omkring, hvad der er klikbart. 

{:#billeder-som-links}
## Billeder som links

Links har som standard stylingen `display: inline`. Hvis du vil anvende et billede som link, er du nødt til at vælge en anden display-værdi ved at tilføje en <a href="/kode/utilities/#display">hjælpeklasse</a>, fx `d-inline-block` eller `d-block`, ellers vises der ikke nogen <a href="/design/farver/#fokusfarve">fokusramme</a> omkring billedet, når linket har fokus. 

Bemærk, at når du ændrer `display`, vil bredden på dit billede blive begrænset. Du kan forhindre dette ved også at tilføje klassen `full-width-image` til linket udover hjælpeklassen.