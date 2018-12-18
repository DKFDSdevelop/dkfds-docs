---
permalink: /komponenter/sidenav/
layout: styleguide
type: component
title: Sidenavigation
category: Komponenter_category
subcategory: Design og kode
lead: 
---

{% include code/preview.html component="sidenav--compare" %}
{% include code/accordion.html component="sidenav--compare" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="sidenav-tech-docs">
    Implementering
  </button>
  <div id="sidenav-tech-docs" aria-hidden="false" class="accordion-content">
    <h4>Sidenavigation</h4>
    <h5>Aktivte menupunkter</h5>
    <ul>
      <li>Teksten i det aktive menupunkt bliver styret af primærfarven, som og sættes med variablen <code>$color-primary</code></li>
      <li>Aktive menupunkter skal have <code>.current</code> klassen.</li>
      <li>Kun det sidste aktive menupunkt skal i stedet have <code>.active</code> klassen.</li>
    </ul>
    <h5>Tilføj ikon og information i sidenavigation</h5>
    <ul>
      <li>For at tilføje et ikon til et punkt i sidenavigationen bruges klassen <code>.sidenav-icon-before</code>.</li>
      <li>For at tilføje information til et punkt i sidenavigationen bruges klassen <code>.sidenav-information</code>.</li>
      <li>Ikoner og informationer kan også sammensættes i én sidenavigation</li>
    </ul>
  </div>
</div>
<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="sidenav-docs">
    Retningslinjer
  </button>
  <div id="sidenav-docs" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <p>Sidenavigationen skal kunne aktiveres og håndteres fra tastatur og brugeren skal kunne anvende tab-tasten til navigation.</p>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <ul>
              <li>Sidenavigation anvendes til at afspejle et navigations-hierarki i op til tre niveauer.</li>
              <li>Sidenavigation anvendes til den sekundære navigation/undermenu på en side i en større løsning.</li>
          </ul>
          <h5>Anvendes ikke til</h5>
          <ul>
              <li>Sidenavigation bør ikke anvendes på mindre løsninger (mindre end 5 sider).</li>
              <li>Hvis din løsning allerede har topmenu og evt. tilknyttet dropdown menu, bør du overveje at forenkle din navigation før du vælger en sidenavigation.</li>
          </ul>
          <h5>Vejledning</h5>                
          <ul>
              <li>Marker det aktive punkt (”der hvor brugeren er”) i sidenavigationen.</li>
              <li>Brug korte og præcise ord og begreber. De må eksempelvis gerne være kortere varianter af selve sidernes indholdstitler.</li>
              <li>Undgå at lave for mange punkter.</li>
              <li>Undgå at lave menuen for dyb – forsøg at undgå mere end 1-2 niveauer.</li>
          </ul>
      </section>
    </article>
  </div>
</div>