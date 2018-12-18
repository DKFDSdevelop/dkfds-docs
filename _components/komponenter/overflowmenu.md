---
permalink: /komponenter/overflowmenu/
layout: styleguide
type: component
title: Overflow menu
category: Komponenter_category
subcategory: Design og kode
lead: Toggle overlay with lists of links or buttons.
---

{% include code/preview.html component="overflow-menu" %}
{% include code/accordion.html component="overflow-menu" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="overflow-docs">
    Implementering
  </button>
  <div id="overflow-docs" aria-hidden="false" class="accordion-content">
    <p>Følgende aria tags styrer hvorvidt menuen er foldet ud:</p>
    <ul>
      <li>Button: <code>aria-expanded="false"</code></li>
      <li>Overflow menu: <code>aria-hidden="true"</code></li>
    </ul>
    <p>Følgende klasser styrer i hvilken retning menuen skal folde ud:</p>
    <ul>
      <li>Venstre: <code>.overflow-menu--open-left</code></li>
      <li>Højre: <code>.overflow-menu--open-right</code></li>
    </ul>
    <p>Der er lavet et specifikt liste element til overflow-menuen (se <code>.overflow-list</code>) som kan indeholder links eller buttons. Det er dog ikke nødvendigt at benytte denne liste. Overflow-menuen er bare en container hvor man kan placere det indhold man nu har lyst til. I eksemplet ovenfor er en trin-guide indsat i overflow-menuen.</p>
    <h5>Javascript</h5>
    <p>Initializer collapse/expand javascript med at placere følgende på button elementet: <code>class="js-dropdown" data-js-target="#overflow1"</code>
    Elementet som skal collapses/expandes skal have et matchende id <code>id="overflow1"</code> (placeres på <code>.overflow-menu-inner</code>)</p>
  </div>
</div>


<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="overflow-docs">
    Retningslinjer
  </button>
  <div id="overflow-docs" class="accordion-content">
    <article>
      <section>
          <h4>Tilgængelighed</h4>
          <ul>
              <li>Overflow menuer skal kunne aktiveres og håndteres fra tastatur.</li>
              <li>Overflow menuer skjuler indhold for brugeren og bør anvendes i begrænset omfang. </li>
              <li>Overflow menuer skal kunne aktiveres og håndteres fra tastatur og brugeren skal kunne anvende tab-tasten til navigation. </li>
          </ul>
      </section>
      <section>
          <h4>Brugervenlighed</h4>
          <h5>Anvendes til</h5>
          <ul>
              <li>Overflow menuer anvendes i tilfælde, hvor brugeren skal tilbydes ekstra funktionalitet på begrænset plads.</li>
              <li>Overflow menuer er velegnede til funktioner som fx profilhåndtering o.l.</li>
          </ul>
          <h5>Anvendes ikke til</h5>
          <ul>
              <li>Overflow menu anvendes ikke til primær navigation.</li>
              <li>Overflow menu bør ikke have mindre end 3 punkter og mere end 7-10 punkter.</li>
          </ul>
          <h5>Vejledning</h5>                
          <ul>
              <li>Indholdet af en dropdown menu bør være handlingsanvisende i et klart sprog.</li>
              <li>Brugerspecifikke handlinger som fx ”Slet” bør placeres til sidst i menuen for at undgå utilsigtede valg.</li>
              <li>Overvej om det er nødvendigt med dette ekstra navigationselement.</li>
          </ul>
      </section>
    </article>
  </div>
</div>


