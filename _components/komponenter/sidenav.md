---
permalink: /components/komponenter/sidenav/
layout: styleguide
type: component
title: Sidenavigation
category: UI components
subcategory: Komponenter
lead: "Hierarchical, vertical navigation to place at the side of a page."
---
<h2>Sidebar</h2>
{% include code/preview.html component="sidenav" %}
{% include code/accordion.html component="sidenav" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="sidenav-docs">
    Documentation
  </button>
  <div id="sidenav-docs" aria-hidden="false" class="accordion-content">
    <h4 class="heading">Implementation</h4>
    <ul class="content-list">
      <li>Alle aktive menupunkter skal være semibold og sættes med variablen <code>$font-weight-semibold</code></li>
      <li>Teksten i det aktive menupunkt skal være primærfarven, som og sættes med variablen <code>$color-primary</code></li>
      <li>Aktive menupunkter skal have en <code>.current</code> class, som gør teksten semibold</li>
      <li>Kun det sidste aktive menupunkt skal i stedet have en <code>.active</code> class, der udover at være semibold, har en border i venstre side, som bliver sat med variablen <code>$sidenav-active-border-width</code></li>
      <li>På hover skal baggrundsfarven og teksten på trinene skifte, her skal variablen <code>$color-gray-pale</code>bruges til baggrunden og variablen<code>$color-link-hover</code> bruges til teksten</li> 
    </ul>
  </div>
</div>


<h2>Simpel sidenavigation</h2>
{% include code/preview.html component="sidebar" %}
{% include code/accordion.html component="sidebar" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="sidenav-docs">
    Documentation
  </button>
  <div id="sidenav-docs" aria-hidden="false" class="accordion-content">
    <h4 class="heading">Accessibility</h4>
    <ul class="content-list">
      <li>Ensure the side navigational system is keyboard accessible. Users should be able to tab through each link.</li>
    </ul>
    <h4 class="heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="content-list">
      <li>To display a navigational hierarchy with one to three levels.</li>
      <li>To display the “sub-navigation” within a section of the website.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="content-list">
      <li>If the site has fewer than five pages, consider organizing the page without a navigational hierarchy.</li>
      <li>If your page already has a horizontal and vertical navigation bar, consider ways to simplify your navigation system.</li>
      <li>If your content is within a frame or sub-area of a page, consider ways to simplify your navigation system.</li>
    </ul>
    <h5>Guidance</h5>
    <ul class="content-list">
      <li>Indicate where a user is within the navigational hierarchy. Use the “active” state to show users which page they have navigated to.</li>
      <li>Keep the navigation links short. They can be shorter derivatives of page titles themselves.</li>
      <li>If the navigation hierarchy is too long, users may miss items at the bottom. If it’s too deep, users may miss items that require too many clicks. Usability test to find the right balance between breadth and depth.</li>
    </ul>
  </div>
</div>
