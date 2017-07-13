---
permalink: /page-templates/eksemplariske-eksempler/
layout: styleguide
title: Eksemplariske eksempler
category: Page templates
lead: Vi opererer med 4 typer af løsninger - lille, mellem, stor og hyper. I den endelige guide skal der på denne side vises eksempler for hvordan styleguiden er anvendt til at bygge alt lige fra den simpleste blanket til store offentlige portaler. Nedenfor ser i hvordan US Web Design Standards har vist en Landing page og en Documentation page.
subnav:
- text: Den lille blanket
  href: '#lille-blanket'
- text: Den store blanket
  href: '#stor-blanket'
- text: Landing page
  href: '#landing-page'
- text: Documentation page
  href: '#documentation-page'
---

<h2 class="usa-heading" id="lille-blanket">Template: Den lille blanket</h2>
<p>Se en eksemplarisk løsning, som demonstrerer hvordan en blanket kan opbygges med en klikbar tringuide</p>
<img src="/img/lille.PNG" style="max-width: 1000%; width: 1018px">

{% include code/accordion.html component="template-landing" %}

<h2 class="usa-heading" id="stor-blanket">Template: Den store blanket</h2>
<img src="/img/stor.png" style="max-width: 1000%; width: 1018px">

{% include code/accordion.html component="template-landing" %}



<h2 class="usa-heading" id="landing-page">Template 1: Landing page</h2>
<p>A landing page is intended to provide someone’s first impression of your agency or program. Often, they’ll arrive from somewhere else without much context, like a search result or a colleague’s email. So a landing page needs to be clear, engaging, and contextualizing.</p>
<div class="preview">
  <a class="media_link" href="{{ site.baseurl }}/page-templates/landing/">
    <img src="{{ site.baseurl }}/assets/img/templates/template-landing.png" alt="Basic header">
  </a>
  <a class="usa-button" href="{{ site.baseurl }}/page-templates/landing/">Demo landing page template</a>
</div>
{% include code/accordion.html component="template-landing" %}
<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
    aria-expanded="false" aria-controls="docs-page-template-landing">
    Documentation
  </button>
  <div id="docs-page-template-landing" class="usa-accordion-content">
    <h4 class="usa-heading">When to use</h4>
    <ul class="usa-content-list">
      <li>If you are introducing a new program to the public through a marketing or publicity campaign, a landing page is a good place to point links at. It can build on the minimal copy of a campaign without overwhelming readers.</li>
      <li>The landing page can be a good model for a homepage. But do some research first. What do you have to say? What do your users need to know? Figure these things out. It’s important to know what you have to say about your organization before you settle on a homepage design.</li>
    </ul>
    <h4 class="usa-heading">When to avoid</h4>
    <ul class="usa-content-list">
      <li>Don’t use a landing page for standard internal page content. The same things that help people understand basics quickly can become distracting for people who are looking for more depth.</li>
      <li>Don’t try to include forms or side navigation in a page like this. Those are visually complex components, and a landing page works best without too much complexity.</li>
    </ul>
    <h4 class="usa-heading">Guidance</h4>
    <ul class="usa-content-list">
      <li>If you are using the landing page to encourage users to follow a primary call to action, consider getting rid of the header. The less there is to distract people from the most important task, the more often they will do it.</li>
      <li>For guidance on specific components, see the pages for the individual components.</li>
      <li>Do not create extra content just to fill the template. You can remove individual components (such as the media block) or sub-components (such as individual menu items in the header) from the template as you implement it. This version gives you a broad idea of the number of things your landing page could include. But never make a page more complex than you need to. If you’re unsure, interview users to find out what they need to know.</li>
    </ul>
    <h4 class="usa-heading">Components used in this template</h4>
    <ul class="usa-content-list">
      <li>Extended header</li>
      <li>Hero feature</li>
      <li>Typography — Merriweather headings and Source Sans Pro body</li>
      <li>Graphic list</li>
      <li>Media block</li>
      <li>Grid</li>
      <li>Headings</li>
      <li>Buttons</li>
      <li>Medium footer</li>
    </ul>
    <h4 class="usa-heading">Component definitions</h4>
    <ul class="usa-content-list">
      <li><strong>Hero feature</strong>: Hero features are used at the top of your landing page to help set the tone for the content of your site and to help users understand what your brand is all about. The Hero feature offers a callout which provides a high-level overview of the content on the site and will often reference the Hero image that sits behind it.</li>
      <li><strong>Graphic list</strong>: The Graphic list is used to showcase a number of related items and their respective images in a grid pattern.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="documentation-page">Template 2: Documentation page</h2>
<p>A documentation page presents information on a certain theme, topic, or idea. People often arrive here after visiting the landing page or after searching for a specific piece of information, so documentation pages don’t need to provide as much contextualizing information as more introductory pages would. The copy should be clear, focused, and concise.</p>
<div class="preview">
  <a class="media_link" href="{{ site.baseurl }}/page-templates/docs/">
    <img src="{{ site.baseurl }}/assets/img/templates/template-documentation.png" alt="Basic header">
  </a>
  <a class="usa-button" href="{{ site.baseurl }}/page-templates/docs/">Demo documentation template</a>
</div>
{% include code/accordion.html component="template-docs" %}
<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
    aria-expanded="true" aria-controls="docs-page-template-docs">
    Documentation
  </button>
  <div id="docs-page-template-docs" class="usa-accordion-content">
    <h4 class="usa-heading">When to use</h4>
    <ul class="usa-content-list">
      <li>If you’re presenting detailed information on a specific topic or theme that has already been contextualized by a landing page. Some topics that can be nicely represented on this type of page include guides or how-tos, technical documentation, and program descriptions — in short, any subject that requires in-depth explanation.</li>
    </ul>
    <h4 class="usa-heading">When to avoid</h4>
    <ul class="usa-content-list">
      <li>Don’t use a documentation page to introduce your users to your agency or organization — the landing page is better suited to that purpose. The level of detail present on documentation pages can overwhelm users who are just becoming acquainted with your organization.</li>
    </ul>
    <h4 class="usa-heading">Guidance</h4>
    <ul class="usa-content-list">
      <li>Use a precise headline to quickly communicate your page’s purpose. If the page content is especially complex, you may consider using a subheadline to further clarify its meaning.</li>
      <li>Write concise copy. Favor short sentences (and paragraphs) over longer ones, and use straightforward language, avoiding jargon. Remember, copy blocks don’t need to be long to be comprehensive.</li>
      <li>For guidance on specific components, see the page for the individual components.</li>
    </ul>
    <h4 class="usa-heading">Components used in this template</h4>
    <ul class="usa-content-list">
      <li>Basic header</li>
      <li>Typography — Merriweather headings and Source Sans Pro body</li>
      <li>Grid</li>
      <li>Headings</li>
      <li>Side navigation</li>
      <li>Documentation layout</li>
      <li>Medium footer</li>
    </ul>
  </div>
</div>