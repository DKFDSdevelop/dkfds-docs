---
permalink: "/styleguide/ikoner/"
redirect_from:
- "/design/ikoner/ikoner-og-deres-betydning/"
- "/kode/ikoner/"
- "/design/ikoner/"
layout: styleguide
category: Styleguide_category
subcategory: Styleguide
title: Ikoner
lead: Ikoner benyttes til visuelt at understrege en handling eller en information. Ikoner kan underbygge et budskab og gøre det lettere at afkode en side. Ikoner kan dog sjældent erstatte tekst.
description: Ikoner benyttes til visuelt at understrege en handling eller en information. Ikoner kan underbygge et budskab og gøre det lettere at afkode en side. Ikoner kan dog sjældent erstatte tekst.
tags:
- icon
- svg
- svg use
- inline svg
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview.html component="icons--svg" classes="intro-example" %}

{% include anchorlinks.html guidelines="Ikoner" code="Ikoner_Kode" %}

<!--split-->

## Sådan bruges ikoner {#{% include create-id.html heading="Sådan bruges ikoner" %}}

### Anvendes til  

Brug ikoner som supplement til tekst for visuelt at understøtte brugerens forståelse af sidens indhold.

### Anvendes ikke til  

Brug ikke dekorative ikoner til at “pynte” med, da de let udgør en visuel støj. Dette øger den kognitive belastning og mindsker dermed brugervenligheden og brugerens effektivitet.

### Vejledning

Følg gængse konventioner for brug af ikoner, når de findes, og brug kun designsystemets ikoner til den betydning, der er angivet i {% include links/internal-link.html linktext="ikonoversigten" %}. Fx anvendes Hus-ikonet altid til “hjem”, som går til en forside. Lup-ikonet bruges til at indikere en søgemulighed, osv.

Brug så vidt muligt altid tekst sammen med ikonet (Harley, 2014).

Tilføj kun ikoner, hvis det understøtter kommunikationen. Er du i tvivl, så vælg tekst alene. Hvorvidt du skal anvende et ikon eller ej afhænger i høj grad af konteksten. En brugertest kan afgøre, om ikonerne giver værdi i den enkelte løsning (Harley, 2016).

#### Hvis du mangler et ikon

Det Fælles Designsystem bruger ikoner fra Material Design. Hvis du har brug for ikoner, der ikke allerede findes i {% include links/internal-link.html linktext="ikonoversigten" %}, henviser vi til {% include links/external-link.html linktext="Material Symbols" %}, som er Material Designs ikonbibliotek. Hent ikonerne i weight 400, grade 100, optical size 24dp og style outline. Vi anbefaler, at du implementerer de nye ikoner på samme måde som de øvrige ikoner i designsystemet.

Hvis du heller ikke finder det ønskede ikon der, kan du lave dit eget ikon. Nye ikoner skal passe ind visuelt og følge {% include links/external-link.html linktext="Material Designs vejledning til design af ikoner" %}. Det er vigtigt at brugerteste nye ikoner for at være sikker på, at brugerne forstår dem.

## Ikonoversigt {#{% include create-id.html heading="Ikonoversigt" %}}

Følgende ikoner er en del af Det Fælles Designsystem. Brug kun ikonerne til at kommunikere det, der er angivet her, da det kan skabe forvirring hos brugerne, hvis det samme ikon tilknyttes forskellige betydninger.

<form method="get" id="search-icons-form">
    <div class="search-container form-group">
        <label class="form-label" for="icon-search-input">Find dit ikon</label>
        <div class="mt-3 search">
            <input class="form-input input-width-s" id="icon-search-input" name="s" type="search">
            <button type="submit" class="button button-search">Søg ikoner</button>
        </div>
    </div>
</form>
<span id="initial-result-message" class="sr-only"></span>
<div aria-live="polite" aria-atomic="true">
    <span id="sr-result-message" class="sr-only"></span>
</div>
<div>
    <div class="icon-section" id="icon-section-konventionelle">
        <h3>Konventionelle ikoner</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-konventionelle">
                {% include icon.html icon="open-in-new" keywords="open in new, new window, external, ekstern, eksternt link" label="Eksternt link / åbner i nyt vindue" %}
                {% include icon.html icon="home" keywords="hus, hjem, home, forside, house, home" label="Forside / hjem" %}
                {% include icon.html icon="save" keywords="save, gem, disc, diskette" label="Gem" %}
                {% include icon.html icon="print" keywords="print, printer, udskriv" label="Print / udskriv" %}
                {% include icon.html icon="delete" keywords="skraldespand, bin, trash, trash can, can, delete, slet, fjern, rubbish, trash-can" label="Slet" %}
                {% include icon.html icon="search" keywords="lup, search, søg, forstørrelsesglas" label="Søg" %}
            </ul>
        </div>
    </div>
    <div class="icon-section" id="icon-section-beskeder">
        <h3>Beskeder (feedback)</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-beskeder">
                {% include icon.html icon="warning" keywords="besked, alert, message, warning, advarsel, report, problem, report problem, report-problem" label="Advarsel" %}
                {% include icon.html icon="error" keywords="besked, alert, message, error, fejl, highlight-off" label="Fejl" %}
                {% include icon.html icon="info" keywords="besked, alert, message, information, info" label="Information" %}
                {% include icon.html icon="help" keywords="besked, alert, message, help, hjælp" label="Hjælp" %}
                {% include icon.html icon="success" keywords="besked, alert, message, flueben, check, success, succes, done, check, checkmark, check-circle" label="Succes" %}
            </ul>
        </div>
    </div>
    <div class="icon-section" id="icon-section-navigation">
        <h3>Navigation</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-navigation"> 
                {% include icon.html icon="more-horiz" keywords="more, vertical, mere" label="Flere menupunkter (horisontalt)" %}
                {% include icon.html icon="menu" keywords="hamburger, menu, burger, burgermenu, burger menu" label="Menu" %}
                {% include icon.html icon="more-vert" keywords="prikker, dots, bullets, menu, overflow, vertikal, vertical" label="Overflowmenu (vertikalt)" %}
                {% include icon.html icon="chevron-left" keywords="næste, next, side" label="Paginering forrige / chevron venstre" %}
                {% include icon.html icon="first-page" keywords="start, første, side" label="Paginering første" %}
                {% include icon.html icon="chevron-right" keywords="forrige, previous, prev, side" label="Paginering næste / chevron højre" %}
                {% include icon.html icon="last-page" keywords="sidste, slut, side" label="Paginering sidste" %}
                {% include icon.html icon="arrow-forward" keywords="pil, højre, arrow, frem, forward" label="Pil frem / højre" %}
                {% include icon.html icon="arrow-downward" keywords="pil, ned, arrow" label="Pil ned" %}
                {% include icon.html icon="arrow-upward" keywords="pil, op, arrow" label="Pil op" %}
                {% include icon.html icon="arrow-back" keywords="pil, arrow, tilbage, back" label="Pil tilbage / venstre" %}
                {% include icon.html icon="subdirectory-arrow-right" keywords="højre, knækpil, pil, arrow" label="Undermenu højre" %}
                {% include icon.html icon="subdirectory-arrow-left" keywords="venstre, knækpil, pil, arrow" label="Undermenu venstre" %}
                {% include icon.html icon="chevron-double-right" keywords="højre, dobbeltpil, pil, arrow" label="Langt frem" %}
                {% include icon.html icon="chevron-double-left" keywords="venstre, dobbeltpil, pil, arrow" label="Langt tilbage" %}
            </ul>
        </div>
    </div>
    <div class="icon-section" id="icon-section-filtyper">
        <h3>Filtyper</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-filtyper">
                {% include icon.html icon="file" keywords="fil, document" label="Fil (generisk)" %}
                {% include icon.html icon="file-image" keywords="billede, picture, fotografi, fil, file" label="Billede" %}
                {% include icon.html icon="file-excel" keywords="excel, ark, regneark, fil" label="Excel" %}
                {% include icon.html icon="file-pdf" keywords="PDF, dokument, document, fil" label="PDF" %}
                {% include icon.html icon="file-word" keywords="word, dokument, fil, document" label="Word" %}
            </ul>
        </div>
    </div>
    <div class="icon-section" id="icon-section-funktionalitet">
        <h3>Funktionalitet</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-funktionalitet">
                {% include icon.html icon="hourglass" keywords="waiting, hourglass, timeglas, vente, ventetid, tid, hourglass-empty" label="Afventer" %}
                {% include icon.html icon="close" keywords="anuller, annullér, luk, cancel, discard, fortryd" label="Annuller / luk" %}
                {% include icon.html icon="calculator" keywords="calculator, lommeregner, beregning, beregner" label="Beregner / lommeregner" %}
                {% include icon.html icon="reply" keywords="besvar, mail, email" label="Besvar" %}
                {% include icon.html icon="chat" keywords="chat, kontakt, kommunikation, communication" label="Chat" %}
                {% include icon.html icon="chevron-up" keywords="expand-less, collapse, pil, arrow" label="Chevron op / indskrænk" %}
                {% include icon.html icon="chevron-down" keywords="expand-more, udvid, expand, pil, arrow" label="Chevron ned / udvid" %}
                {% include icon.html icon="calendar-month" keywords="date, calendar, kalender, dato, invitation, aftale, møde, insert-invitation" label="Dato / kalender" %}
                {% include icon.html icon="share" keywords="share, del" label="Del" %}
                {% include icon.html icon="download" keywords="download, file-download" label="Download" %}
                {% include icon.html icon="download-done" keywords="færdig, gennemført, download" label="Download afsluttet" %}
                {% include icon.html icon="email" keywords="email, mail, e-mail, e-mailadresse, adresse, adress" label="E-mail" %}
                {% include icon.html icon="feedback" keywords="feedback, respons, response, besvarelse" label="Feedback" %}
                {% include icon.html icon="flag-fill" keywords="flag, filled, udfyldt" label="Flag fyldt" %}
                {% include icon.html icon="flag" keywords="flag, tomt, outlined-flag" label="Flag tomt" %}
                {% include icon.html icon="drag-pan" keywords="flyt, move, drag, drop, open-with" label="Flyt" %}
                {% include icon.html icon="zoom-out" keywords="lup, zoom, zoom ud, ud" label="Formindsk / zoom ud" %}
                {% include icon.html icon="zoom-in" keywords="lup, zoom, zoom ind, ind" label="Forstør / zoom ind" %}
                {% include icon.html icon="fullscreen" keywords="fullscreen, fuld skærm, stor skærm, fuldskærm" label="Fuld skærm" %}
                {% include icon.html icon="fullscreen-exit" keywords="fullscreen, fuld skærm, stor skærm, fuldskærm, off, small screen, exit" label="Fuld skærm luk" %}
                {% include icon.html icon="credit-card" keywords="kreditkort, creditcard, credit, money, payment, betal, betaling, pay" label="Indbetaling / kreditkort" %}
                {% include icon.html icon="settings" keywords="settings, indstillinger" label="Indstillinger" %}
                {% include icon.html icon="photo-camera" keywords="kamera, video, picture, billede" label="Kamera / tag billede" %}
                {% include icon.html icon="add-a-photo" keywords="kamera, camera, picture, add, tilføj, billede, ny, create" label="Kamera / tilføj billede" %}
                {% include icon.html icon="contact-card" keywords="card, text, tekst, kort, oplysninger, kontakt, contact, card-text" label="Kontaktoplysninger" %}
                {% include icon.html icon="copy" keywords="copy, paste, kopi, indsæt, sæt ind, content-copy" label="Kopi" %}
                {% include icon.html icon="list-check" keywords="liste, list, done, check, flueben, completed, gennemført, playlist-add-check" label="Liste gennemført" %}
                {% include icon.html icon="list-add" keywords="add, list, tilføj, ny, opret, playlist-add" label="Liste tilføj til" %}
                {% include icon.html icon="lock" keywords="log af, log ud, log, af, ud, lås, lock, hængelås, låst" label="Log af (hængelås)" %}
                {% include icon.html icon="folder" keywords="mappe, folder" label="Mappe" %}
                {% include icon.html icon="create-new-folder" keywords="folder, mappe, opret, ny, add, new, create" label="Mappe opret" %}
                {% include icon.html icon="folder-open" keywords="open, folder, åben, åbn, mappe" label="Mappe åben" %}
                {% include icon.html icon="minus" keywords="-, remove, minus, luk, accordion, close, collapse" label="Minus / luk / fjern" %}
                {% include icon.html icon="notifications" keywords="notifikation, besked, toast, notification, bell, klokke, alarm, ringe" label="Notifikation / besked" %}
                {% include icon.html icon="refresh" keywords="update, refresh, opdater, genindlæs, pil, cirkel" label="Opdatér / genindlæs" %}
                {% include icon.html icon="apps" keywords="apps, applikation, oversigt, overblik, kasser" label="Oversigt / overblik" %}
                {% include icon.html icon="person-remove" keywords="bruger, person, user, remove" label="Person / bruger - fjern" %}
                {% include icon.html icon="person-add" keywords="add, tilføj, ny, create, opret, bruger, user, person, person-add-alt-1" label="Person / bruger - tilføj" %}
                {% include icon.html icon="location" keywords="position, maps, adresse, lokation, location, location-on" label="Placering / adresse" %}
                {% include icon.html icon="plus" keywords="+, add, plus, åben, accordion, open, expand" label="Plus / åbn / tilføj" %}
                {% include icon.html icon="edit" keywords="redigér, edit, rediger, ændre, change, pen, blyant, mode" label="Redigér" %}
                {% include icon.html icon="send" keywords="send" label="Send" %}
                {% include icon.html icon="language" keywords="sprog, language, globe, earch, jorden, lande, countries" label="Sprog (globus)" %}
                {% include icon.html icon="star-fill" keywords="star, stjerne, bedømmelse, rating, grade" label="Stjerne fyldt / markeret" %}
                {% include icon.html icon="star" keywords="star, stjerne, bedømmelse, rating, grade-outline" label="Stjerne tom / ikke markeret" %}
                {% include icon.html icon="contact-support" keywords="support, kontakt, contact, kommunikation, communication, bubble, help, question" label="Support" %}
                {% include icon.html icon="sync" keywords="synkroniser, refresh, genindlæs, update, opdater, cached" label="Synkronisér" %}
                {% include icon.html icon="time" keywords="ur, tid, time, clock, klokke, query-builder" label="Tid / tidsinterval" %}
                {% include icon.html icon="add-document" keywords="add, document, dokument, tilføj, new, nyt, ny, opret, create, note-add" label="Tilføj dokument" %}
                {% include icon.html icon="check" keywords="done, check, udført, checkmark, flueben, gennemført, completed, correkt, korrekt, rigtig, rigtigt" label="Udført / korrekt / gennemført (flueben)" %}
                {% include icon.html icon="upload" keywords="Upload, eksporter, export, file-upload" label="Upload / eksportér" %}
                {% include icon.html icon="attach-file" keywords="Vedhæft, attachment, bilag" label="Vedhæft / bilag" %}
                {% include icon.html icon="forward" keywords="videresend" label="Videresend" %}
                {% include icon.html icon="view-in-list" keywords="Liste, justify, view-headline" label="Vis i listeform" %}
                {% include icon.html icon="view-split" keywords="liste, kasse, billede, layout, vindue, vertical-split" label="Vis i listeform og vindue" %}
                {% include icon.html icon="palette" keywords="tema, theme, palette, color, colours, painting, paint" label="Vælg tema (palette)" %}
                {% include icon.html icon="visibility-off" keywords="øje, eye, se, see, skjul, blind" label="Øje - skjul" %}
                {% include icon.html icon="visibility" keywords="øje, eye, se, see, vis, blind" label="Øje - vis" %}
            </ul>
        </div>
    </div>
    <div class="icon-section" id="icon-section-illustrative">
        <h3>Illustrative</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-illustrative">
                {% include icon.html icon="analytics" keywords="assessment, graf, diagram" label="Analyse" %}
                {% include icon.html icon="car" keywords="drive-eta" label="Bil / transport" %}
                {% include icon.html icon="bookmark" keywords="bookmark-border" label="Bogmærke" %}
                {% include icon.html icon="bookmarks" keywords="" label="Bogmærker" %}
                {% include icon.html icon="account" keywords="account-circle, user, profile" label="Brugerprofil / konto" %}
                {% include icon.html icon="coronavirus" keywords="virus, corona, coronavirus, covid, 19, covid19, covid-19, pandemi, epidemi" label="Corona / Covid-19" %}
                {% include icon.html icon="database" keywords="" label="Data / database" %}
                {% include icon.html icon="desktop" keywords="desktop-windows, skærm, screen, computer" label="Device / desktop" %}
                {% include icon.html icon="laptop" keywords="bærbar, computer" label="Device / laptop" %}
                {% include icon.html icon="smartphone" keywords="phone-iphone, telefon, smartphone" label="Device / mobiltelefon" %}
                {% include icon.html icon="document" keywords="insert-drive-file" label="Dokument / sag" %}
                {% include icon.html icon="trainee" keywords="face" label="Elev" %}
                {% include icon.html icon="engineering" keywords="" label="Erhverv / Erhvervsuddannelse" %}
                {% include icon.html icon="forum" keywords="" label="Forum" %}
                {% include icon.html icon="how-to-reg" keywords="" label="Fuldmagtsprofil (3. part)" %}
                {% include icon.html icon="groups" keywords="" label="Gruppe / møde" %}
                {% include icon.html icon="headset" keywords="headphones, headset, sound, lyd, høretelefoner" label="Headset" %}
                {% include icon.html icon="construction" keywords="" label="Håndværk / bygge- og anlægsarbejde" %}
                {% include icon.html icon="contact-info" keywords="card-account-details" label="Kontaktoplysninger (person)" %}
                {% include icon.html icon="map" keywords="" label="Kort" %}
                {% include icon.html icon="shopping-cart" keywords="shopping, buy, cart, payment, checkout" label="Kurv / afventer køb" %}
                {% include icon.html icon="truck" keywords="local-shipping" label="Lastbil / transport" %}
                {% include icon.html icon="link" keywords="" label="Links" %}
                {% include icon.html icon="list-bulleted" keywords="format-list-bulleted" label="Liste" %}
                {% include icon.html icon="mouse" keywords="" label="Mus" %}
                {% include icon.html icon="assignment" keywords="assignment" label="Opgave" %}
                {% include icon.html icon="summary" keywords="list-alt" label="Opgørelse / Resumé / Opsummering" %}
                {% include icon.html icon="tune" keywords="" label="Parameter / finjustering" %}
                {% include icon.html icon="payments" keywords="money, payment" label="Penge / Betaling / Opkrævning" %}
                {% include icon.html icon="person" keywords="" label="Person / bruger" %}
                {% include icon.html icon="persons" keywords="people-alt" label="Personer / brugere" %}
                {% include icon.html icon="student" keywords="school" label="Studerende / studie" %}
                {% include icon.html icon="support-agent" keywords="" label="Supporter / telefonrådgiver" %}
                {% include icon.html icon="accessibility-new" keywords="man, mand, a11y" label="Tilgængelighed" %}
                {% include icon.html icon="checklist" keywords="format-list-checks, punktopstilling, liste" label="Tjekliste" %}
                {% include icon.html icon="tractor" keywords="agriculture" label="Traktor / landmand" %}
                {% include icon.html icon="science" keywords="" label="Videnskab / kemi" %}
                {% include icon.html icon="videocam" keywords="video, kamera" label="Videokamera" %}
                {% include icon.html icon="business" keywords="domain" label="Virksomhed" %}
            </ul>
        </div>
    </div>
    <div class="icon-section" id="icon-section-tekstredigering">
        <h3>Tekstredigering</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-tekstredigering">
                {% include icon.html icon="format-text" keywords="text-format" label="Formatér tekst" %}
                {% include icon.html icon="format-size" keywords="" label="Tekststørrelse" %}
                {% include icon.html icon="format-bold" keywords="" label="Fed" %}
                {% include icon.html icon="format-italic" keywords="" label="Kursiv" %}
                {% include icon.html icon="format-underlined" keywords="" label="Understregning" %}
                {% include icon.html icon="format-color-text" keywords="" label="Farve" %}
                {% include icon.html icon="format-color-fill" keywords="" label="Baggrundsfarve" %}
                {% include icon.html icon="format-clear" keywords="ryd, clear, tekst, formatering, clean" label="Ryd tekstformatering" %}
                {% include icon.html icon="format-list-bulleted" keywords="" label="Punktopstilling" %}
                {% include icon.html icon="format-list-numbered" keywords="" label="Punktopstilling numerisk" %}
                {% include icon.html icon="format-indent-increase" keywords="" label="Indryk højre" %}
                {% include icon.html icon="format-indent-decrease" keywords="" label="Indryk venstre" %}
                {% include icon.html icon="format-align-left" keywords="" label="Venstrestillet tekst" %}
                {% include icon.html icon="format-align-center" keywords="" label="Centreret tekst" %}
                {% include icon.html icon="format-align-right" keywords="" label="Højrestillet tekst" %}
                {% include icon.html icon="format-align-justify" keywords="" label="Lige marginer" %}
            </ul>
        </div>
    </div>
    <div class="icon-section" id="icon-section-sortering">
        <h3>Sortering</h3>
        <div class="container">
            <ul class="icon-list no-max-width row" id="icon-list-sortering">
                {% include icon.html icon="sort-default" keywords="sorter, sort, sortering, overflow, overflowmenu, overflow menu" label="Sortering default" %}
                {% include icon.html icon="sort-descending" keywords="sorter faldende, faldende, descending, sort, sortering, overflow, overflowmenu, overflow menu" label="Sortering faldende" %}
                {% include icon.html icon="sort-ascending" keywords="sorter stigende, stigende, ascending, sort, sortering, overflow, overflowmenu, overflow menu" label="Sortering stigende" %}
                {% include icon.html icon="sort-by-alpha" keywords="sorter alfabetisk, sort, sorting, sorter, sortér, alfabetisk" label="Sortér alfabetisk" %}
                {% include icon.html icon="sort-table-descending" keywords="sorter tabel faldende, tabel, table, sort, sortering, kolonne, descending" label="Sortering i tabel faldende" %}
                {% include icon.html icon="sort-table-ascending" keywords="sorter tabel stigende, tabel, table, sort, sortering, kolonne, ascending" label="Sortering i tabel stigende" %}
                {% include icon.html icon="sort-table-none" keywords="sorter tabel, tabel, table, sort, sortering, kolonne" label="Sortering i tabel default" %}
            </ul>
        </div>
    </div>
    <div class="no-icons-text" aria-live="polite" aria-atomic="true">
        <span id="no-results-message">Ingen søgeresultater for “<strong id="search-words"></strong>”. Prøv et andet søgeord, eller kig efter ikoner fra {% include links/external-link.html linktext="Material Symbols" %}.</span>
    </div>
</div>

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- {% include links/external-link.html linktext="Aurora Harley: Usability Testing of Icons (2016)" %}
- {% include links/external-link.html linktext="Aurora Harley: Icon usability (2014)" %}
- {% include links/external-link.html linktext="Jakob Nielsen: Icon Classification: Resemblance, Reference, and Arbitrary Icons (2014)" %}

<!--split-->

## Ikoner indsat som svg med ikonsamling (anbefalet) {#{% include create-id.html heading="Ikoner indsat som svg med ikonsamling (anbefalet)" append="-kode" %}}

Ikonsamlingen gør, at du kan indsætte ikoner med `<svg>`. Før dette virker, er du nødt til at implementere ikonsamlingen, der skal indsættes på hver side i løsningen.

### Implementering

Placér ikonsamlingen i toppen af `<body>` i et område, der er skjult:

{% highlight html %}
<body>
    <div class="hide-base-svg">
        <svg xmlns="http://www.w3.org/2000/svg">
            <!-- Ikonsamling -->
        </svg>
    </div>
    ...
</body>
{% endhighlight %}

Ikonerne i ikonsamlingen er defineret ved hjælp af `<symbol>`, der hver har et unikt `id`. Eksempelvis er ikonet for "minus" defineret ved:

{% highlight html %}
<symbol id="minus" viewBox="0 -960 960 960"><path d="M200-440v-80h560v80H200Z"/></symbol>
{% endhighlight %}

Det anbefales at indsætte alle ikoner i samlingen på hver side, men du kan også vælge kun at medtage de ikoner, der er relevante for den enkelte side. Du kan se den fulde ikonsamling ved at åbne nedenstående eksempel i et nyt vindue.

{% include code/syntax.html component="simple-base-svg" link=true url="ikon-samling" %}

### Anvendelse

For at anvende et ikon skal du indsætte det ved hjælp af `<svg>` og referere til det korrekte `id` i ikonsamlingen. For eksempel skal ikonet for "print (udskriv)" indsættes med:

{% include code/syntax.html component="icon" link=true %}

#### Tilpasning af ikonet til teksten

Tilføj klassen `inline-svg` på ikoner, som skal fremgå i en tekst. Ikonet vil da tilpasse sig linjehøjden. Se eksemplet herunder:

Der er et ikon <svg class="icon-svg inline-svg" focusable="false" aria-hidden="true"><use href="#language"></use></svg> midt i denne sætning.

## Ikoner indsat med klasser {#{% include create-id.html heading="Ikoner indsat med klasser" append="-kode" %}}

Ikoner kan indsættes ved hjælp af klasser på følgende måde:

{% include code/syntax.html component="icon-class" link=true %}

Denne metode har nogle begrænsninger, hvorfor vi anbefaler, at man benytter ikonsamlingen i stedet for.

## Tilgængelighed {#{% include create-id.html heading="Tilgængelighed" append="-kode" %}}

Ikoner bør tilføjes en `aria-label` tekst til elementet, der beskriver ikonet, så skærmlæsere kan læse ikonet op, såfremt ikonet har betydning for forståelsen.

Dekorative ikoner bør undgås, men hvis de bruges, skal de ikke beskrives af skærmlæsere eller have beskrivende attributter, da de ikke bærer nogen betydning eller er vigtige for brugeren. Hvis ikonet ikke skal læses op, tilføj da attributten `aria-hidden="true"`. Denne attribut vil gøre ikonet usynligt for skærmlæsere.

Da Internet Explorer sætter fokus på svg-elementer, bør `focusable="false"` tilføjes, således at der ikke længeres sættes fokus på ikonet med tastaturet.

