---
permalink: "/design/farver/farveberegner/"
redirect_from:
- "/farver/"
layout: styleguide
title: Farveberegner
parentlink: "/design/farver/"
category: Design_category
subcategory: Design
tags:
description: 
lead: 'Farveberegneren er bygget til designsystemet, hvorfor den muligvis ikke er det rette værktøj for dig, men du er velkommen til at bruge den, hvis det giver mening for dig.'
---

Brug farveberegneren til at definere et farveforløb for en given farve.

<a href="/farveberegner/" class="button button-primary">Start farveforløbsberegneren</a>

## Designsystemets farveberegner

{:.h4}
### Farveberegneren fungerer ikke med alle farver  
Meget lyse og meget mørke farver vil ikke fungere optimalt med denne farveberegner.

Beregneren virker bedst til farver, der ikke er blandet for meget hvid (tint) eller meget sort (shade) i, altså farver med en renere farvemætning. 

Farvens tone eller valør (saturation) skal således også helst være afstemt, for at give et bedre resultat. Farvetonen beskriver, hvor meget farven er påvirket af gråtoner. Dette er dog ikke helt så vigtigt som farvemætningen.

Farveberegneren laver sine egne justeringer på farven
Farven du indtaster udgør “midten” for farveberegneren, der derpå vil udregne et antal mørkere og et antal lysere farver.

De mørkere og de lysere farvers kulørvinkel (hue angle) ændres en smule. Dette gøres for at tilføre lidt dynamik i farveforløbet, der ellers kun ville gå fra lyst til mørkt.

De mørkeste farver i farveforløbet sorteres fra ved ikke at lade beregneren lade farven beregne farven helt til sort. Det gør vi, da de mørkeste nuancer bliver svære at skelne i mellem, både i selve farveforløbet og i forhold til de mørkeste grå nuancer i det grå farveforløb.  

{:.h4}
### Farveberegneren udvælger flere lyse farver end mørke til farveskemaet
Farverne i farveskemaet vælges ikke linært, men eksponentielt. Det gør vi, fordi en linær udvælgelse af farver som oftest giver en stor koncentration af farver omkring farven i midten, og disse kan være svære at finde anvendelse til.

Det betyder også, at der er flere lyse nauncer i skemaet end mørke. Dette gøres ud fra den betragtning, at der som oftest er mere behov for flere variationer af lyse nuancer til tekst, baggrundsfarver, linjer, grafik, mm. end tilfældet er med variationer over de mørkere nuancer. Den betragtning står for egen regning, men det mener vi er tilfældet, og det er bygget ind i beregneren.  

{:.h4}
### Farveskemaet indeholder ekstrafarver
Farveskemaet indeholder som udgangspunkt 9 farver, fra helt lys, næsten hvid, til en meget mørk, men stadig gennemskuelig farvetone (den ser ikke bare mørk grå eller sort ud).

De 9 farver skulle dække de fleste behov, men der opstår nogle gange et behov for flere farver, og i sådanne tilfælde har farver det med at knubskyde i vilkårlige retninger, da logikken bag farveudvælgelsen er gået tabt. Derfor er det muligt også at få 9 ekstrafarver som giver 18 farvenuancer at arbejde med. Dette burde sikre at fremtidige behov for farver er dækket. 

Mangler du stadig farver, så fortvivl ej. Beregneren laver 90 farver, som der vælges fra. Det kan du læse mere om på vores GitHub side. ???