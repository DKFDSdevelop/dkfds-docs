---
permalink: /kode/komponenter/beskeder/
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Beskeder (Alerts)
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af besked."
tags:
anchor: true
subnav:
- text: Farver
  href: '#farver'
- text: Beskeder med ikon
  href: '#beskeder-med-ikon'
- text: Paragrafbredde
  href: '#paragrafbredde'
- text: Luk knap
  href: '#luk-knap'
- text: Custom Element
  href: "#custom-element"
---

{% include code/preview-box.html component="alert" title="Eksempel på besked komponent" %}


## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/beskeder/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/beskeder/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur
{% include code/syntax.html component="alert" copybutton=true %}

Anvend `role="alert"` til beskeder, der skal læses højt af en skærmlæser med det samme, hvis indholdet ændrer sig. Dette kan for eksempel være en besked, der bliver synlig efter at have været skjult eller hvor indholdet ændrer sig. Advarsler og fejlbeskeder bør altid være markeret med `role="alert"`.

Hvis beskeden indeholder en `alert-heading`, sørg da for at benytte et html-element, der passer ind i konteksten på siden. Dette vil som regel være en overskrift, for eksempel `<h3>`, eller et `<strong>`-element.

### Javascript
Man kan bruge nedenstående JavaScript for at sætte events på luk-knappen i beskederne. Det er kun nødvendigt, hvis man gør brug af luk-knappen.
Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Alert(document.getElementById('ALERT-ID')).init();
{% endhighlight %}

#### Events

<div class="table--responsive-scroll">
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
        <td>fds.alert.show</td>
        <td><code>div.alert</code></td>
        <td>Når en besked bliver vist med <code>DKFDS.Alert(document.getElementById('ALERT-ID')).show();</code> bliver <code>fds.alert.show</code> udløst på beskedelementet</td>
      </tr>
      <tr>
        <td>fds.alert.hide</td>
        <td><code>div.alert</code></td>
        <td>Når en besked bliver skjult med <code>DKFDS.Alert(document.getElementById('ALERT-ID')).hide();</code> eller der trykkes på luk bliver <code>fds.alert.hide</code> udløst på beskedelementet</td>
      </tr>
    </tbody>
  </table>
</div>

## Varianter

{:#farver}
### Farver

#### Informativ
Informativ er blå, og defineres med klassen `alert-info`.

{% include code/syntax.html component="alert" link=true copybutton=true %}

#### Succes
Succesbesked er grøn, og defineres med klassen `alert-success`.

{% include code/syntax.html component="alert-success" link=true copybutton=true %}

#### Advarsel
Besked med advarsel er gul, og defineres med klassen `alert-warning`.

{% include code/syntax.html component="alert-warning" link=true copybutton=true %}

#### Fejl
Besked med fejl er rød, og defineres med klassen `alert-error`.

{% include code/syntax.html component="alert-error" link=true copybutton=true %}

{:#beskeder-med-ikon}
### Ikon
Defineres med klassen `alert--show-icon`.

{% include code/syntax.html component="alerts-icons" link=true copybutton=true %}

{:#paragrafbredde}
### Paragrafbredde
Defineres med klassen `alert--paragraph`.

{% include code/syntax.html component="alert-paragraph" link=true copybutton=true %}

{:#luk-knap}
### Luk knap
{% include code/syntax.html component="alert-close" link=true copybutton=true %}

{:#custom-element}
## Custom Element

Du kan oprette beskeder ved hjælp af custom elements i stedet for den ovenstående HTML. 

Når du anvender et custom element, vil det meste HTML blive autogenereret. Din kode bliver derfor mere overskuelig og du kan lettere fokusere på indhold frem for HTML-struktur.

Et custom element opdateres automatisk, hvis du ændrer dets attributter og du kan nøjes med at initialisere én gang, hvorefter JavaScripten fungerer i alle komponenter, selvom de tilføjes efter initialisering.

Bemærk, at et custom element dog <em>ikke</em> registrerer ændringer i indhold. For at sikre at indhold opdateres korrekt i forhold til den autogenererede HTML, kan du anvende <a href="#custom-funktioner">funktionen setContent()</a>.

{% include code/preview-box.html component="custom-element-alert" title="Eksempel på besked som custom element" %}

{% include code/syntax.html component="custom-element-alert" copybutton=true %}

### Init

Kald funktionen `DKFDS.initCustomElements();` i din JavaScript-kode. For eksempel:

{% highlight javascript %}
document.addEventListener("DOMContentLoaded", function() {
    DKFDS.initCustomElements();
});
{% endhighlight %}

### Indhold

Indholdet i beskeden angives mellem `<fds-alert>` og `</fds-alert>`. Du kan angive indhold med enten tekst eller HTML. Hvis du ønsker at ændre beskedens indhold efter den autogenererede HTML er oprettet, bør du dog anvende <a href="#custom-funktioner">funktionen setContent()</a> i stedet.

Du bør altid angive indhold for en besked, medmindre du både har en `heading`-attribut samt en `headingtype`-attribut, hvor sidstnævnte skal være sat til værdien `strong`.

### Attributter

Attributter markeret som 'påkrævet' bør altid medtages. Hvis beskeden skal læses højt at skærmlæsere, kan standardattributter som `role="alert"` anvendes.

<div class="table--responsive-scroll">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Attribut</th>
        <th scope="col">Beskrivelse</th>
        <th scope="col">Påkrævet</th>
        <th scope="col">Gyldige værdier</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>variant</td>
        <td>Afgør beskedens farve og ikon.</td>
        <td>Ja</td>
        <td><ul class="mt-0 mb-0"><li class="mt-0">'info' (blå)</li><li>'success' (grøn)</li><li>'warning' (gul)</li><li>'error' (rød)</li></ul></td>
      </tr>
      <tr>
        <td>heading</td>
        <td>Beskedens titel.</td>
        <td>Nej</td>
        <td>Vilkårlig string</td>
      </tr>
      <tr>
        <td>headingtype</td>
        <td>Afgør hvilket HTML-element der skal bruges til beskedens titel.</td>
        <td>Ja, såfremt <code>heading</code> anvendes.</td>
        <td><ul class="mt-0 mb-0"><li class="mt-0">'h1'</li><li>'h2'</li><li>'h3'</li><li>'h4'</li><li>'h5'</li><li>'h6'</li><li>'strong'</li></ul></td>
      </tr>
      <tr>
        <td>closeable</td>
        <td>Afgør om der skal være en luk-knap i beskeden.</td>
        <td>Nej</td>
        <td>Undlad at angive en værdi. Såfremt attributten er til stede, svarer dette til 'true' og udelades attributten svarer dette til 'false'.</td>
      </tr>
      <tr>
        <td>hasicon</td>
        <td>Afgør om der skal være et ikon, som passer til beskedens variant.</td>
        <td>Nej</td>
        <td>Undlad at angive en værdi. Såfremt attributten er til stede, svarer dette til 'true' og udelades attributten svarer dette til 'false'.</td>
      </tr>
      <tr>
        <td>limitwidth</td>
        <td>Begræns beskedens bredde, så dens maksimale bredde svarer til bredden på en paragraf.</td>
        <td>Nej</td>
        <td>Undlad at angive en værdi. Såfremt attributten er til stede, svarer dette til 'true' og udelades attributten svarer dette til 'false'.</td>
      </tr>
    </tbody>
  </table>
</div>

Bemærk at ovenstående attributter afspejles i elementets properties. Følgende eksempel viser, hvordan en attribut kan opdateres ved hjælp af JavaScript:

{% highlight javascript %}
document.body.querySelector("fds-alert").variant = "info";
{% endhighlight %}

{:#custom-funktioner}
### Funktioner

<div class="table--responsive-scroll">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Funktion</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>hide()</td>
        <td>Skjul beskeden.</td>
      </tr>
      <tr>
        <td>show()</td>
        <td>Vis beskeden.</td>
      </tr>
      <tr>
        <td>getContent()</td>
        <td>Få beskedens indhold som en string uden elementets autogenererede HTML.</td>
      </tr>
      <tr>
        <td>setContent(content)</td>
        <td>Sæt beskedens indhold. Den autogenererede HTML tilpasses automatisk.</td>
      </tr>
      <tr>
        <td>updateGlossary(glossary)</td>
        <td>
          <p class="mt-0 mb-0">Opdater ord og termer anvendt i den autogenererede HTML. Input skal være en string i JSON-format. Nedenstående eksempel viser format og standardtermer:</p>
          {% highlight javascript %}
          alert.updateGlossary('{ "close": "Luk" }');
          {% endhighlight %}</td>
      </tr>
    </tbody>
  </table>
</div>

Eksempel på anvendelse i JavaScript:
{% highlight javascript %}
document.body.querySelector("fds-alert").hide();
{% endhighlight %}

### Events

Følgende events kan udløses på elementet `<fds-alert>`:

<div class="table--responsive-scroll">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Event</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fdsalerthide</td>
        <td>Udløses når beskeden skjules, dvs. når brugeren trykker på luk-knappen eller hvis funktionen <code>hide()</code> bliver kaldt.</td>
      </tr>
      <tr>
        <td>fdsalertshow</td>
        <td>Udløses når beskeden vises, dvs. når funktionen <code>show()</code> bliver kaldt.</td>
      </tr>
    </tbody>
  </table>
</div>