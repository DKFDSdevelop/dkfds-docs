---
permalink: /
layout: landing
title: POC version 1.0 - Frontend styleguide
hero:
  callout: Frontend styleguide 1.0 POC
  content: Frontend styleguiden er et design system der facilitere hurtig prototyping og konsistent design på tvær af offentlige myndigheder.
graphic_list:
  list_item:
    - topic: Kom godt i gang 
      description: Learn how to get started using the Frontend styleguide 1.0 POC for your project, regardless of your technical stack.
      image:
        src: img/home/get-started.svg
        alt:
    - topic: Tilpas designssystemet
      description: Discover all the different components that the Standards provide as both design and development assets.
      image:
        src: img/home/ui-component.svg
        alt:
    - topic: Hvad er nyt?
      description: Keep up to date with the current news and product development updates for the Frontend styleguide.
      image:
        src: img/home/new.svg
        alt:
    - topic: De gode eksempler
      description: Explore the different page templates that have been created to jump start your product development.
      image:
        src: img/home/page-templates.svg
        alt:
---

## Nye services og træningstilbud

{% capture training %}
### Lad os hjælpe dig

We offer a customized training program to fit your team’s needs. The
product team will provide guidance for getting up and running with
the Frontend Styleguide and kick-start your design and
development.

<a href="mailto:uswebdesignstandards@gsa.gov" class="usa-button cta" onclick="ga('send', 'event', 'Clicked Training CTA', 'Clicked training call to action');">
  <img src="{{ site.baseurl }}/img/logo-email.png" alt="">
  Email us about training
</a>
{% endcapture %}

{% capture customization %}
### Tilpas designsystemet 

The product team will partner with you to determine the appropriate
level of help and customization to make adopting the Standards a
piece of cake. You can also read about customization in our
[developer guide](getting-started/developers/#customization-and-theming).

<a href="mailto:uswebdesignstandards@gsa.gov" class="usa-button cta" onclick="ga('send', 'event', 'Clicked Customization CTA', 'Clicked customization call to action');">
  <img src="{{ site.baseurl }}/img/logo-email.png" alt="">
  Ask us about customization
</a>
{% endcapture %}

<div class="usa-grid-full">
  <div class="usa-width-one-half">
    {{ training | markdownify }}
  </div>
  <div class="usa-width-one-half">
    {{ customization | markdownify }}
  </div>
</div>
