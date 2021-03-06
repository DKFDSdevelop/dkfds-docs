---
permalink: "/komponenter/fejlmeddelelser/"
layout: styleguide
type: component
title: Fejlmeddelelser
category: Komponenter_category
subcategory: Komponenter
description:
tags:
- fejlbesked
- fejlmeddelelse
- meddelelser
- fejl
- fejlmeddelelser
- fejlbeskeder
- fejlnotifikationer
- medelelser
- meddellelser
- medellelser
- fejlmedelelser
- fejlmeddellelser
- fejlmedellelser
lead:
anchor: true
subnav:
- text: Eksempler på fejlmeddelelser
  href: "#eksempler"

---
{% include code/preview-box.html component="error-message" title="Eksempel på fejlmeddelelse" link="true" code="/kode/komponenter/fejlmeddelelser/" %}

{:.h3 #retningslinjer}
## Anvendes til

Brug fejlmeddelelser til at hjælpe brugeren korrekt igennem selvbetjeningsløsningen. Fortæl brugeren, hvad der skal til for at rette problemet og komme videre i et simpelt og venligt sprog.

Brug også fejlmeddelelser til at vise, hvor fejlen eller manglen er, så brugeren ikke skal lede, ved at sætte fejlmeddelelsen umiddelbart over det, der skal rettes eller mangler.

{:.h3}
## Anvendes ikke til

Brug ikke fejlmeddelelser til at fortælle brugerne, at de ikke er berettigede eller ikke har tilladelse til at gøre noget. I stedet for vis dem en side, der fortæller dem, at de ikke er berettigede, og giver dem nyttige oplysninger om, hvad de skal gøre som det næste.

Brug ikke fejlmeddelelser til at give brugeren beskeder om fejl, der ikke har med brugerens indtastninger og input at gøre, som fx systemfejl. Brug da en <a href="/komponenter/beskeder/">besked</a>.

{:.h3}
## Vejledning

Fejlmeddelelsen skal også vises som et link til fejlen i <a href="/komponenter/fejlopsummering/">fejlopsummeringen</a>. Derfor skal fejlmeddelelsen give mening for brugeren, når den læses for sig selv i fejlopsummeringen.

Vis fejlmeddelelsen i rød umiddelbart over, der hvor fejlen er.

Vis en rød streg i venstre side af området, ud for fejlen for at fremhæve fejlen.

Marker også selve feltet der er fejl i med rødt.

For at hjælpe skærmlæsere tilføjes en skjult tekst med ordet "Fejl:" foran fejlmeddelelsen. Brugere af skærmlæser vil da fx høre "Fejl: Dette er ikke en gyldig mailadresse."

{:.h4}
### Skriv klart og præcist

Beskriv for brugeren, hvad der er sket og hvordan det kan rettes.

Meddelelsen skal være skrevet i lægmandssprog, være imødekommende og så kortfattet som muligt.

Kom ikke med et eksempel i fejlmeddelelsen, hvis der allerede er et eksempel som hjælpetekst. Hvis du fx beder om et cpr-nummer og der allerede under labelen står "ddmmååå-nnnn" eller "22091908-1856" som hjælpetekst, så skal det ikke også stå i fejlmeddelelsen.

{:.h4}
### Vær konsistent

Brug den samme fejlmeddelelse ved feltet og i fejlopsummeringen så de ser ens ud, lyder ens, og betyder det samme, og så de giver mening ude af kontekst.

Gør det nemt for brugeren at forstå, hvad der er sket og hvad der skal til for at komme videre. Brug således den label (spørgsmålet), der er knyttet til feltet, til at gøre fejlmeddelelsen forståelig. Fx, hvis et felt har en label, hvor der står "Hvor mange timer arbejder du om ugen?", så kan fejlmeddelelsen være "Indtast hvor mange timer du arbejder om ugen".

{:.h4}
### Vær præcis

Generelle fejlmeddelelser er ikke hjælpsomme og de giver ikke mening uden for kontekst. Undgå derfor fejlmeddelelser som:

* "En fejl opstod"
* "Svar på spørgsmålet"
* "Vælg et et svar fra listen"
* "Udfyld feltet"
* "Dette felt er påkrævet"

Undgå også fejlmeddelelser, der taler ned til eller skælder brugeren ud som fx:

* "Skriv adressen korrekt"
* "Du har lavet en fejl"
* "Ikke godkendt"

Forskellige fejl har brug for forskellige fejlmeddelelser.

Fx kan der opstå forskellige fejl på tekstfelter, felter kan være: tomme, for lange, for korte, indeholde ugyldige tegn, være i et forkert format, m.fl.

En fejlmeddelelse, der forklarer den specifikke situation er mere hjælpsom end den generiske fejlmeddelelse.

Den gode fejlmeddelelse vil fortælle brugeren, hvad der er sket og hvordan det kan løses.

{:.h4}
### Brug instruktioner og beskrivelser

Visse fejlmeddelelser fungerer bedst som instrukser og andre som beskrivelser. Fx:

* "Indtast dit fornavn" er tydeligere og mere direkte end "Fornavn skal være udfyldt"
* "Indtast et fornavn, der indeholder 35 bogstaver eller færre" bruger flere ord og er  mindre direkte og naturligt end "Fornavnet må højst være på 35 bogstaver".
* "Indtast en dato efter den 31. august 2020, der viser hvornår du startede på det pågældende kursus" bruger flere ord og er mindre direkte og naturligt end "Startdatoen for det valgte kursus skal være efter den 31. august 2020".

Brug både instrukser og beskrivelser, men brug dem konsekvent. Fx brug en instruktion til tomme felter som "Indtast dit navn" men brug en beskrivelse som "Navnet bør højst være 35 bogstaver" til felter som er for lange.


{% include dos-donts-box.html component="error-message-dos-donts" title="Fejlmeddelelser do's and don'ts" %}

### Referencer

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)

{:.h3}
## Eksempler på brug i løsning

{:.nobullet-list}
- <a href="/pages/eksempler/vedhaeft-fil/fil-1/" target="_blank" title="Eksempelløsning Dokumenter til sagen åbnes i nyt vindue">Dokumenter til sagen</a>

{:#eksempler}
## Eksempler på fejlmeddelelser

{:.h4}
### Navn

{% include code/preview-box.html component="error-message-name" title="Eksempel på tekstfelt med fejlmeddelelse" link="true" %}

{:.h4}
### Personnummer

{% include code/preview-box.html component="error-message-personnummer" title="Eksempel på tekstfelt med tal og fejlmeddelelse" link="true" %}

{:.h4}
### Postnummer

{% include code/preview-box.html component="error-message-postnummer" title="Eksempel på talfelt med fejlmeddelelse" link="true" %}

{:.h4}
### Tjekbokse

{% include code/preview-box.html component="error-message-checkbox" title="Eksempel på tjekbokse med fejlmeddelelse" link="true" %}

{:.h4}
### Radioknapper

{% include code/preview-box.html component="error-message-radio" title="Eksempel på radioknapper med fejlmeddelelse" link="true" %}

{:.h4}
### Dato

{% include code/preview-box.html component="error-message-date" title="Eksempel på datoangivelse med fejlmeddelelse" link="true" %}

{:.h4}
### Vedhæft fil

{% include code/preview-box.html component="error-message-file-input" title="Eksempel på felt til vedhæftning af fil med fejlmeddelelse" %}
