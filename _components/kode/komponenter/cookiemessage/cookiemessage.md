---
permalink: "/kode/komponenter/cookiemeddelelse/"
parentlink: "/kode/komponenter/"
layout: styleguide
type: component
title: Cookiemeddelelse
category: Kode_category
description: Dokumentation på implementering af cookiemeddelelse.
subcategory: Kode

---
{% include code/preview-image.html component="cookie-message" alt="Billedet viser en cookiemeddelelse" title="Eksempel på cookiemeddelelse" %}

## Installation

### HTML Struktur

{% include code/syntax.html component="cookie-message" %}

Koden indsættes under body og før header. Gør man brug af <a href="/komponenter/skip-link/">skip link</a>, skal skip-link indsættes efter cookiemeddelelsen.

Bemærk at DKFDS på nuværende tidspunkt kun leverer HTML og CSS til denne komponent. Funktionaliteten skal man derfor selv håndtere.

Cookies brugt til statistik må ikke sættes før man aktivt har accepteret dette.