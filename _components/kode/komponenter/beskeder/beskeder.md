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

{% include code/preview-box.html component="custom-element-alert" title="Eksempel på besked som custom element" %}

{% include code/syntax.html component="custom-element-alert" copybutton=true %}

### Init

Kald funktionen `DKFDS.initCustomElements();` i din JavaScript-kode. For eksempel:

{% highlight javascript %}
document.addEventListener("DOMContentLoaded", function() {
    DKFDS.initCustomElements();
});
{% endhighlight %}

### Attributter

<div class="table--responsive-scroll">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Attribut</th>
        <th scope="col">Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>variant</td>
        <td>Afgør beskedens farve og ikon. Skal enten være 'info' (blå), 'success' (grøn), 'warning' (gul) eller 'error' (rød).</td>
      </tr>
    </tbody>
  </table>
</div>

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
        <td>show()</td>
        <td>Sørg for at beskeden er synlig for brugeren.</td>
      </tr>
    </tbody>
  </table>
</div>

Eksempel på anvendelse i JavaScript:
{% highlight javascript %}
document.body.querySelector("fds-alert").show();
{% endhighlight %}