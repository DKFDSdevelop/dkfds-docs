---
permalink: "/styleguide/typografi/links/"
parentlink: "/styleguide/typografi/"
redirect_from:
- "/kode/typografi/links/"
- "/design/typografi/links/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Links
description: Se hvordan du skal anvende links i Det Fælles Designsystem
tags:
- "ekstern"
- "ekstern link"
- "footer link"
- "footerlink"
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="links" title="Eksempel på links" classes="intro-example" %}

{% include anchorlinks.html guidelines="Links" code="Links_Kode" %}

<!--split-->

## Designværdier {#{% include create-id.html heading="Designværdier" %}}

<div class="table--responsive-scroll" tabindex="0">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Tekstdekoration</th>
        <th scope="col">Tekstfarve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><a href="#">Link</a></th>
        <td>16px</td>
        <td>24px</td>
        <td>Understreget</td>
        <td>
          <ul class="nobullet-list mt-0 mb-0">
            <li class="mt-0 mb-0">#004D99</li>
            <li>#1A1A1A (hover)</li>
            <li>#800080 (besøgt)</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Sådan bruges links {#{% include create-id.html heading="Sådan bruges links" %}}

### Tilgængelighed

Linkteksten skal give mening for brugeren og angive, hvad linket fører hen til.

Links skal enten være understreget eller markeret på anden vis. Et link må ikke kun være angivet med en farve.

Brugerne skal kunne sætte fokus på links og aktivere dem ved brug af tastaturet.

Links skal have en defineret `href` attribut i koden.

Har linket en “hover” skal denne kunne aktiveres både med tastatur og mus.

### Anvendes til

Brug links til at lade brugeren navigere til andre sider i din løsning.

Brug links til at linke til sider uden for din løsning. Husk at markere dette med et ikon som beskrevet under implementeringsafsnittet under {% include links/internal-link.html linktext="eksternt link" %}.

Se også {% include links/component-guideline-link.html linktext="Gå til sidens indhold" %}, {% include links/component-guideline-link.html linktext="Funktionslink" %} og {% include links/component-guideline-link.html linktext="Tilbage link" %}.

### Brugervenlighed

Hvis et link fører væk fra den aktuelle side og brugeren kan miste data eller risikere at skulle udfylde samme del igen ved at følge linket, så advisér brugeren om dette i en browseradvarsel. Bed også brugeren om at be- eller afkræfte ønsket om at forlade siden.

Brug links med omtanke i en selvbetjeningsløsning. Linker du for meget ud til eksterne websites, kan det virke forstyrrende for flowet og få brugeren ud af kontekst. Omvendt kan det give stor værdi for brugeren, hvis du linker ud til relevante informationer. Fx informationer, som understøtter brugerens vej gennem selvbetjeningsløsningen og/eller giver væsentlige input til, hvad brugeren skal indtaste i løsningen.

## Eksternt link {#{% include create-id.html heading="Eksternt link" %}}

Eksterne links skal altid åbne i en ny fane og markeres med et eksternt link-ikon. Links til filer, fx pdf-filer, skal altid bruge eksternt link-ikonet. Hvis formålet med linket er at downloade en fil, skal det markeres med et download-ikon.

Hvis et link fører til en fil, så gør brugeren opmærksom på dette ved at skrive det i en parentes, hvis det ikke allerede fremgår af linkteksten (McCloskey, 2014). Linker du fx til en pdf-fil, skal du skrive (pdf) efter linkteksten.

{% include code/preview-box.html component="external-link" title="Eksempel på eksternt link" link=false code="/styleguide/typografi/links/#eksternt-link-kode" %}

## Sekundære links {#{% include create-id.html heading="Sekundære links" %}}

<p class="font-lead">Sekundære links bruges til at skabe en visuel forskel på links til funktioner og særlige typer af navigation.</p>

### Designværdier

<div class="table--responsive-scroll" tabindex="0">
  <table class="table table--borderless">
    <thead>
      <tr>
        <td></td>
        <th scope="col">Skriftstørrelse</th>
        <th scope="col">Linjehøjde</th>
        <th scope="col">Tekstdekoration</th>
        <th scope="col">Tekstfarve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><a href="#" class="function-link">Sekundært link</a></th>
        <td>16px</td>
        <td>24px</td>
        <td>Understreget</td>
        <td>#1A1A1A</td>
      </tr>
    </tbody>
  </table>
</div>

### Anvendes til

- {% include links/component-guideline-link.html linktext="Funktionslink" %}
- {% include links/component-guideline-link.html linktext="Brødkrumme" %}
- {% include links/component-guideline-link.html linktext="Footer" %} links

### Anvendes ikke til

Brug ikke sekundære links i eller imellem afsnit af tekst eller til generel navigation mellem sider, brug da et standard link.

### Vejledning

Vær ikke kreativ med brugen af sekundære links, da de giver mindre fært end standard-links. Alternativ anvendelse af sekundære links kan tillige skabe tvivl og forvirring hos brugerne omkring, hvad der er klikbart. 

## Billeder som links {#{% include create-id.html heading="Billeder som links" %}}

Links har som standard stylingen `display: inline`. Hvis du vil anvende et billede som link, er du nødt til at vælge en anden display-værdi ved at tilføje en hjælpeklasse, fx `d-inline-block` eller `d-block`, ellers vises der ikke nogen fokusramme omkring billedet, når linket har fokus. Se alle muligheder under {% include links/internal-link.html linktext="hjælpeklasser for display" %}.

Bemærk, at når du ændrer `display`, vil bredden på dit billede blive begrænset. Du kan forhindre dette ved også at tilføje klassen `full-width-image` til linket udover hjælpeklassen.

## Referencer {#{% include create-id.html heading="Referencer" %}}

<ul class="nobullet-list">
  <li>{% include links/external-link.html linktext="Marieke McCloskey: Writing Hyperlinks: Salient, Descriptive, Start with Keyword (2014)" %}</li>
</ul>

<!--split-->

## Eksternt link {#{% include create-id.html heading="Eksternt link" append="-kode" %}}

{% include code/preview-box.html component="external-link" title="Eksempel på eksternt link" %}

### HTML Struktur

{% include code/syntax.html component="external-link" copybutton=true guidelines="/styleguide/typografi/links/#eksternt-link" %}

Eksternt link gør brug af ikoner. Se dokumentationen for {% include links/internal-link.html linktext="implementering af ikoner" %}. 

Bemærk at eksterne links er stylet med `display: inline-block`, hvilket betyder, at lange links i nogle tilfælde kan give uhensigtsmæssige linjeskift. Anvend evt. en {% include links/internal-link.html linktext="hjælpeklasse for display" %}, fx `d-inline`, i disse tilfælde.

## Sekundære links {#{% include create-id.html heading="Sekundære links" append="-kode" %}}

{% include code/preview-box.html component="secondary-links" title="Eksempel på sekundære links" %}

### HTML Struktur

{% include code/syntax.html component="secondary-links" copybutton=true guidelines="/styleguide/typografi/links/#sekundaere-links" %}

## Billeder som links {#{% include create-id.html heading="Billeder som links" append="-kode" %}}

Brug en {% include links/internal-link.html linktext="hjælpeklasse for display" %} til at vælge en anden værdi end `inline`.

Tilføj yderligere klassen `full-width-image`, hvis billedets bredde ikke skal begrænses.

Nedenstående kode viser et eksempel på, hvordan klasserne kan anvendes:
{% highlight html %}
<a href="#" class="d-block full-width-image">
  <img src="..." alt="...">
</a>
{% endhighlight %}