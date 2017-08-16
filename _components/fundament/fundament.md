---
permalink: /components/fundament/
layout: styleguide
title: Retningslinjer
category: UI components
subcategory: Designsystem
lead: Accessibility tips to help you deliver delightful experiences to all users.
subnav:
- text: Grid
  href: '/components/fundament/grids/'
- text: Interaktionsdesign
  href: '/components/fundament/interaktionsdesign/'
- text: Layout
  href: '/components/fundament/layout/'
- text: Principper
  href: '/components/fundament/principper/'
- text: Stil og tone
  href: '/components/fundament/stilogtone/'
- text: Tilgængelighed
  href: '/components/fundament/accessibility/'
- text: Touch
  href: '/components/fundament/touch/'
---

## Hiding and showing content

There will be cases in which you will need to selectively "show" and "hide"
content by either removing it from the visual flow or preventing screen
readers from reading it. We have settled on the following conventions for each
use case:

{% capture show %}**show**{% endcapture %}
{% capture hide %}_hide_{% endcapture %}

Visual<br>browsers | Screen<br>readers | Solution
:--- | :--- | :---
{{ hide }} | {{ hide }} | Add the boolean [`hidden` attribute][hidden] attribute to dynamically hide content from all users. [Remove the attribute][remove-attr] to show it again.
{{ show }} | {{ hide }} | Use the [`aria-hidden="true"`][aria-hidden] attribute to "hide" content from screen readers while keeping it visually perceivable.
{{ hide }} | {{ show }} | Use the `usa-sr-only` class to show content to screen readers only. This removes the content from the visual flow of the document but retains its legibility by screen readers.

[hidden]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
[remove-attr]: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
[aria-hidden]: https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden
