---
permalink: "/komponenter/faneblad/"
redirect_from:
- "/komponenter/tabnav/"
layout: styleguide
type: component
title: Faneblade
category: Komponenter_category
subcategory: Komponenter
description: Faneblade gør det muligt for brugerne at bladre i mellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen.
tags:
lead: Faneblade gør det muligt for brugerne at bladre i mellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere
  ser de skjulte sektioner, når du anvender faneblade.

---
<div class="alert alert-warning">
    <div class="alert-body">
        <p class="alert-heading">Eksperimentel</p>
        <p>Denne komponent er for nuværende eksperimentel, da der afventes yderligere undersøgelser.</p>
        <p>Komponenten lægger sig op af <a href="https://design-system.service.gov.uk/components/tabs/" class="icon-link">GOV.UK Design Systems tab komponent<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a> og <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html" class="icon-link">W3s practice eksempler<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>, hvor der afventes yderligere info.</p>
        <p>Brugerundersøgelser er efterspurgt for at bekræfte:</p>
        <ul>
            <li>at denne tilgang til faneblade er den bedste løsning for skærmlæsere og brugere af tastatur</li>
            <li>hvordan denne komponent skal opføre sig på små skærme</li>
        </ul>
    </div>
</div>

{% include code/preview-box.html component="tabnav" title="Eksempel på faneblad" link="true" code="/kode/komponenter/faneblad/" %}

{:.h3 #retningslinjer}
## Anvendes til

Faneblade anvendes til at skifte mellem forskellige visninger af indhold indenfor samme kontekst.

Faneblade egner sig bedst som en avanceret funktionalitet for afgrænsede målgrupper.

{:.h3}
## Anvendes ikke til

Faneblade kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Faneblade anvendes ikke til at opdele et logisk flow eller en sekvens af handlinger.

{:.h3}
## Vejledning

Vi anbefaler ikke, at du anvender faneblade i en generel løsning, da en stor del af brugerne ikke opdager indholdet på fanerne udover den aktive.

Hvis du ønsker at anvende faner, bør det testes på din målgruppe før din løsning går i produktion.


{% include dos-donts-box.html component="faneblad-dos-donts" title="Faneblade do's and don'ts" %}

{:.h4}
### Referencer

{:.nobullet-list}
- <a href="https://www.smashingmagazine.com/2009/06/module-tabs-in-web-design-best-practices-and-solutions/" class="icon-link">Jacob Gube: Module Tabs in Web Design: Best Practices and Solutions (2009)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/tabs-used-right/" class="icon-link">Jakob Nielsen: Tabs, Used Right (2016)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>

{% include child-components.html parent='Faneblade' %}
