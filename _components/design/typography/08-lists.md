---
type: component
title: Lister
parent: typography
order: 07
---

<p class="font-lead">Lister bruges til at organisere information, så det giver brugeren overblik.</p>

{% include code/preview.html component="lists" classes="preview-lists" %}
{% include code/accordion.html component="lists" %}

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="lists-docs-tech">
    Implementering
  </button>
  <div id="lists-docs-tech" aria-hidden="true" class="accordion-content">
    <p>For at lave en liste uden styling kan enten klassen <code>.unstyled-list</code> benyttes eller et mixin <code>@include unstyled-list;</code>.</p>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="typolists-docs">
    Retningslinjer
  </button>
  <div id="typolists-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>   
        <h4>Anvendes til</h4>
        <ul>
            <li>Brug lister, når du skal liste ord eller sætninger op.</li>
            <li>Brug lister til at give brugeren et hurtigt overblik.</li>
        </ul>
        <h4>Anvendes ikke til</h4>
        <ul>
            <li>Lister af lange afsnit med forklarende tekst. Brug mellemrum i stedet.</li>
        </ul>
        <h4>Vejledning</h4>
        <ul>
            <li>Hold listerne så korte og faktuelle som muligt.</li>
            <li>Brug tal i listerne, når der er et hierarki i det der præsentere.</li>
            <li>Brug punkter, når der ikke er et hierarki i informationerne.</li>
        </ul>
      </section>
    </article>
  </div>
</div>