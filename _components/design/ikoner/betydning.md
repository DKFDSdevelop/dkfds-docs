---
permalink: "/design/ikoner/ikoner-og-deres-betydning/"
layout: styleguide
title: Udvalgte ikoner og deres betydning
category: Design_category
subcategory: Design
parentlink: "/design/ikoner/"
description: Find det ikon du har brug for. Meld det ikon du har behov for ind og vær med til at udvide listen.
lead: Find det ikon du har brug for. Meld det ikon du har behov for ind og vær med til at udvide listen.
tags:
- icon
- svg
- svg use
- inline svg
---

<details class="details js-details">
    <summary class="details-summary">
        <span class="details-summary-text">
            Se her hvis det ikon du leder efter ikke er på listen nedenfor
        </span>
    </summary>
    <div class="details-text">
        <p>Hvis du har brug for yderligere ikoner henviser vi til:</p>
        <ul>
          <li><a href="https://material.io/tools/icons/?style=outline" class="icon-link">Material Design<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
          <li><a href="https://materialdesignicons.com/" class="icon-link">Material Design Icons<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
        <p>Du kan også lave dit eget ikon, men så skal det passe ind visuelt. Lad være med at lave et ikon, der allerede findes på listen.</p>
        <p><a href="https://material.io/design/iconography/system-icons.html#design-principles" class="icon-link">Vejledning til design af dit eget ikon<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></p>
    </div>
</details>

<div class="search-container form-group">
    <label class="form-label " for="icon-search-input">
        Find dit ikon
    </label>
    <span class="form-hint" id="icon-search-input-hint">
        Skriv navnet på ikonet du leder efter  i feltet, så ændres listen
    </span>
    <input class="form-input" required name="icon-search-input" type="text" aria-describedby="icon-search-input-hint" id="icon-search-input" />
</div>
<details class="details js-details  mt-4">
    <summary class="details-summary">
        <span class="details-summary-text" id="checkbox-list-label">
            Filtrer på kategori
        </span>
    </summary>
    <div class="details-text">
        <fieldset aria-labelledby="checkbox-list-label">
          <ul class="nobullet-list" id="category-list">
            <li>
              <input id="cat-konventionelle" type="checkbox" name="checkbox-category[]" value="konventionelle" class="form-checkbox" checked/>
              <label for="cat-konventionelle">Konventionelle ikoner</label>
            </li>
            <li>
              <input id="cat-beskeder" type="checkbox" name="checkbox-category[]" value="beskeder" class="form-checkbox"  checked/>
              <label for="cat-beskeder">Beskeder (feedback)</label>
            </li>
            <li>
              <input id="cat-navigation" type="checkbox" name="checkbox-category[]" value="navigation" class="form-checkbox"  checked/>
              <label for="cat-navigation">Navigation</label>
            </li>
            <li>
              <input id="cat-tilstande" type="checkbox" name="checkbox-category[]" value="tilstande" class="form-checkbox"  checked/>
              <label for="cat-tilstande">Tilstande</label>
            </li>
            <li>
              <input id="cat-filtyper" type="checkbox" name="checkbox-category[]" value="filtyper" class="form-checkbox"  checked/>
              <label for="cat-filtyper">Filtyper</label>
            </li>
            <li>
              <input id="cat-funktionalitet" type="checkbox" name="checkbox-category[]" value="funktionalitet" class="form-checkbox"  checked/>
              <label for="cat-funktionalitet">Funktionalitet</label>
            </li>
            <li>
              <input id="cat-illustrative" type="checkbox" name="checkbox-category[]" value="illustrative" class="form-checkbox"  checked/>
              <label for="cat-illustrative">Illustrative</label>
            </li>
            <li>
              <input id="cat-tekstredigering" type="checkbox" name="checkbox-category[]" value="tekstredigering" class="form-checkbox"  checked/>
              <label for="cat-tekstredigering">Tekstredigering</label>
            </li>
          </ul>
        </fieldset>
    </div>
</details>

<div aria-live="polite">
<section class="icon-section" id="icon-section-konventionelle">
  <h2 class="h5">Konventionelle ikoner</h2>
  <p>Må ikke bruges til andre formål end de specificerede.</p>
  
  <div class="container">
    <div class="icon-list row" id="icon-list-konventionelle">
          {% include icon.html icon="open-in-new" keywords="open in new, new window, external, ekstern, eksternt link" label="Eksternt link (åbner ny side/fane)" %}
          {% include icon.html icon="home" keywords="hus, hjem, home, forside, house, home" label="Forside (Hjem)" %}
          {% include icon.html icon="save" keywords="save, gem, disc, diskette" label="Gem" %}
          {% include icon.html icon="print" keywords="print, printer, udskriv" label="Print (udskriv)" %}
          {% include icon.html icon="delete" keywords="skraldespand, bin, trash, delete, slet, fjern" label="Slet" %}
          {% include icon.html icon="search" keywords="lup, search, søg" label="Søg" %}</div>
  </div>
</section>

<section class="icon-section" id="icon-section-beskeder">
  <h2 class="h5 mb-4">Beskeder (feedback)</h2>
  <div class="container">
    <div class="icon-list row" id="icon-list-beskeder">
          {% include icon.html icon="report-problem" keywords="besked, alert, message, warning, advarsel, report, problem, report problem" label="Advarsel" %}
          {% include icon.html icon="highlight-off" keywords="besked, alert, message, error, fejl" label="Fejl" %}
          {% include icon.html icon="info" keywords="besked, alert, message, information, info" label="Hjælp" %}
          {% include icon.html icon="help" keywords="besked, alert, message, help, hjælp" label="Information" %}
          {% include icon.html icon="check-circle" keywords="besked, alert, message, flueben, check, success, succes, done, check, checkmark" label="Succes" %}
    </div>
  </div>
</section>

<section class="icon-section" id="icon-section-navigation">
  <h2 class="h5 mb-4">Navigation</h2>
  <div class="container">
    <div class="icon-list row" id="icon-list-navigation"> {% include icon.html icon="more-horiz" keywords="more, vertical, mere" label="Flere menupunkter (horisontalt)" %}
          {% include icon.html icon="arrow-right" keywords="right, højre, frem, pil, arrow" label="Frem (højre)" %}
          {% include icon.html icon="menu" keywords="hamburger, menu, burger, burgermenu, burger menu" label="Menu" %}
          {% include icon.html icon="more-vert" keywords="prikker, dots, bullets, menu, overflow, vertikal, vertical" label="Overflowmenu (vertikalt)" %}
          {% include icon.html icon="chevron-left" keywords="næste, next, side" label="Paginering forrige" %}
          {% include icon.html icon="first-page" keywords="start, første, side" label="Paginering første" %}
          {% include icon.html icon="chevron-right" keywords="forrige, previous, prev, side" label="Paginering næste" %}
          {% include icon.html icon="last-page" keywords="sidste, slut, side" label="Paginering sidste" %}
          {% include icon.html icon="arrow-forward" keywords="pil, højre, arrow, frem, forward" label="Pil frem (højre)" %}
          {% include icon.html icon="arrow-downward" keywords="pil, ned, arrow" label="Pil ned" %}
          {% include icon.html icon="arrow-upward" keywords="pil, op, arrow" label="Pil op" %}
          {% include icon.html icon="arrow-back" keywords="pil, arrow, tilbage, back" label="Pil tilbage (venstre)" %}
          {% include icon.html icon="arrow-left" keywords="pil, arrow, back, tilbage" label="Tilbage (venstre)" %}
          {% include icon.html icon="subdirectory-arrow-right" keywords="højre, knækpil, pil, arrow" label="Undermenu højre" %}
          {% include icon.html icon="subdirectory-arrow-left" keywords="venstre, knækpil, pil, arrow" label="Undermenu venstre" %}
    </div>
  </div>
</section>

<section class="icon-section" id="icon-section-tilstande">
  <h2 class="h5 mb-4">Tilstande</h2>
  <div class="container">
    <div class="icon-list row" id="icon-list-tilstande">
     {% include icon.html icon="arrow-right" keywords="pil, højre, lukket, luk, detalje" label="Detalje lukket" %}
          {% include icon.html icon="arrow-drop-down" keywords="arrow, pil, ned, down, detalje, åben, åbn fold ud" label="Detalje åben / Fold dropdown/overflow ud" %}
          {% include icon.html icon="arrow-drop-up" keywords="pil, op, up, arrow, dropdown, fold ind, luk" label="Fold dropdown/overflow ind" %}
          {% include icon.html icon="zoom-out" keywords="lup, zoom, zoom ud, ud" label="Formindsk" %}
          {% include icon.html icon="zoom-in" keywords="lup, zoom, zoom ind, ind" label="Forstør" %}
          {% include icon.html icon="fullscreen" keywords="fullscreen, fuld skærm, stor skærm, fuldskærm" label="Fuld skærm" %}
          {% include icon.html icon="remove" keywords="-, minus, luk, accordion, close, collapse" label="Luk accordion (minus)" %}
          {% include icon.html icon="fullscreen-exit" keywords="fullscreen, fuld skærm, stor skærm, fuldskærm, off, small screen, exit" label="Luk fuld skærm" %}
          {% include icon.html icon="sort" keywords="sortering, sort, unsorted" label="Ikke sorteret" %}
          {% include icon.html icon="lock-open" keywords="log off, log af, log ud, log, off, af, ud, exit, lås, lock, hængelås, åben, open" label="Log af (åben hængelås)" %}
          {% include icon.html icon="lock" keywords="log in, login, log på, log ind, log, in, på, ind, lås, lock, hængelås, låst" label="Log på (lukket hængelås)" %}
          {% include icon.html icon="visibility-off" keywords="øje, eye, se, see, skjul, blind" label="Skjul" %}
          {% include icon.html icon="sort-by-alpha" keywords="sort, sorting, sorter, sortér, alfabetisk" label="Sortér alfabetisk" %}
          {% include icon.html icon="expand-more" keywords="udvid, expand, pil, arrow" label="Udvid (chevron)" %}
          {% include icon.html icon="expand-less" keywords="collapse, pil, arrow" label="Indskrænk (chevron)" %}
          {% include icon.html icon="visibility" keywords="øje, eye, se, see, vis, blind" label="Vis" %}
          {% include icon.html icon="add" keywords="+, plus, add, tilføj, accordion, fold ud, expand" label="Åbn accordion (plus)" %}
    </div>
  </div>
</section>
<section class="icon-section" id="icon-section-filtyper">
  <h2 class="h5 mb-4">Filtyper</h2>
  <div class="container">
    <div class="icon-list row" id="icon-list-filtyper">
     {% include icon.html icon="file-image" keywords="billede, picture, fotografi, fil, file" label="Billede" %}
          {% include icon.html icon="file-excel" keywords="excel, ark, regneark, fil" label="Excel" %}
          {% include icon.html icon="file-pdf" keywords="PDF, dokument, document, fil" label="PDF" %}
          {% include icon.html icon="file-word" keywords="word, dokument, fil, document" label="Word" %}
    </div>
  </div>
</section>
<section class="icon-section" id="icon-section-funktionalitet">
  <h2 class="h5 mb-4">Funktionalitet</h2>
  <div class="container">
    <div class="icon-list row" id="icon-list-funktionalitet">
          {% include icon.html icon="close" keywords="anuller, annullér, luk, cancel, discard, fortryd" label="Annuller (luk)" %}
          {% include icon.html icon="hourglass-empty" keywords="waiting, hourglass, timeglas, vente, ventetid, tid" label="Afventer" %}
          {% include icon.html icon="calculator" keywords="calculator, lommeregner, beregning, beregner" label="Beregner (lommeregner)" %}
          {% include icon.html icon="reply" keywords="besvar, mail, email" label="Besvar" %}
          {% include icon.html icon="chat" keywords="chat, kontakt, kommunikation, communication" label="Chat" %}
          {% include icon.html icon="insert-invitation" keywords="date, calendar, kalender, dato, invitation, aftale, møde" label="Dato / kalender" %}
          {% include icon.html icon="share" keywords="share, del" label="Del" %}
          {% include icon.html icon="file-download" keywords="download" label="Download" %}
          {% include icon.html icon="download-done" keywords="færdig, gennemført, download" label="Download afsluttet" %}
          {% include icon.html icon="email" keywords="email, mail, e-mail, e-mailadresse, adresse, adress" label="Email" %}
          {% include icon.html icon="feedback" keywords="feedback, respons, response, besvarelse" label="Feedback" %}
          {% include icon.html icon="person-remove" keywords="bruger, person, user, remove" label="Fjern person/bruger" %}
          {% include icon.html icon="flag" keywords="flag, filled, udfyldt" label="Flag fyldt" %}
          {% include icon.html icon="outline-flag" keywords="flag, tomt" label="Flag tomt" %}
          {% include icon.html icon="open-with" keywords="flyt, move, drag, drop" label="Flyt" %}
          {% include icon.html icon="credit-card" keywords="kreditkort, creditcard, credit, money, payment, betal, betaling, pay" label="Indbetaling (kreditkort)" %}
          {% include icon.html icon="settings" keywords="settings, indstillinger" label="Indstillinger" %}
          {% include icon.html icon="photo-camera" keywords="kamera, video, picture, billede" label="Kamera (tag billede)" %}
          {% include icon.html icon="card-text" keywords="card, text, tekst, kort, oplysninger, kontakt, contact" label="Kontaktoplysninger" %}
          {% include icon.html icon="content-copy" keywords="copy, paste, kopi, indsæt, sæt ind" label="Kopi" %}
          {% include icon.html icon="playlist-add-check" keywords="liste, list, done, check, flueben, completed, gennemført" label="Liste gennemført" %}
          {% include icon.html icon="folder" keywords="mappe, folder" label="Mappe" %}
          {% include icon.html icon="notifications" keywords="notifikation, besked, toast, notification, bell, klokke, alarm, ringe" label="Notifikation/besked" %}
          {% include icon.html icon="refresh" keywords="update, refresh, opdater, genindlæs, pil, cirkel" label="Opdater (genindlæs)" %}
          {% include icon.html icon="create-new-folder" keywords="folder, mappe, opret, ny, add, new, create" label="Opret mappe" %}
          {% include icon.html icon="apps" keywords="apps, applikation, oversigt, overblik, kasser" label="Oversigt (overblik)" %}
          {% include icon.html icon="location-on" keywords="position, maps, adresse, lokation, location" label="Placering (adresse)" %}
          {% include icon.html icon="mode" keywords="redigér, edit, rediger, ændre, change" label="Rediger" %}
          {% include icon.html icon="send" keywords="send" label="Send" %}
          {% include icon.html icon="language" keywords="sprog, language, globe, earch, jorden, lande, countries" label="Sprog (globe)" %}
          {% include icon.html icon="grade" keywords="star, stjerne, bedømmelse, rating" label="Stjerne fyldt (markeret)" %}
          {% include icon.html icon="grade-outline" keywords="star, stjerne, bedømmelse, rating" label="Stjerne tom (ikke-markeret)" %}
          {% include icon.html icon="contact-support" keywords="support, kontakt, contact, kommunikation, communication, bubble, help, question" label="Support" %}
          {% include icon.html icon="cached" keywords="synkroniser, refresh, genindlæs, update, opdater" label="Synkroniser (refresh)" %}
          {% include icon.html icon="query-builder" keywords="ur, tid, time, clock, klokke" label="Tid (tidsinterval)" %}
          {% include icon.html icon="add-a-photo" keywords="kamera, camera, picture, add, tilføj, billede, ny, create" label="Tilføj billede" %}
          {% include icon.html icon="note-add" keywords="add, document, dokument, tilføj, new, nyt, ny, opret, create" label="Tilføj dokument" %}
          {% include icon.html icon="playlist-add" keywords="add, list, tilføj, ny, opret" label="Tilføj til liste" %}
          {% include icon.html icon="person-add-alt-1" keywords="add, tilføj, ny, create, opret, bruger, user, person" label="Tilføj person/bruger" %}
          {% include icon.html icon="done" keywords="done, check, udført, checkmark, flueben, gennemført, completed, correkt, korrekt, rigtig, rigtigt" label="Udført (korrekt, gennemført)" %}
          {% include icon.html icon="upload" keywords="Upload, eksporter, export" label="Upload (eksporter)" %}
          {% include icon.html icon="attach-file" keywords="Vedhæft, attachment, bilag" label="Vedhæft (bilag)" %}
          {% include icon.html icon="forward" keywords="videresend" label="Videresend" %}
          {% include icon.html icon="view-headline" keywords="Liste, justify" label="Vis i liste form" %}
          {% include icon.html icon="vertical-split" keywords="liste, kasse, billede, layout, vindue" label="Vis i liste form og vindue" %}
          {% include icon.html icon="palette" keywords="tema, theme, palette, color, colours, painting, paint" label="Vælg tema (palette)" %}
          {% include icon.html icon="folder-open" keywords="open, folder, åben, åbn, mappe" label="Åben mappe" %}
    </div>
  </div>
</section>

<section class="icon-section" id="icon-section-illustrative">
  <h2 class="h5 mb-4">Illustrative</h2>
  <div class="container">
    <div class="icon-list row" id="icon-list-illustrative">
          {% include icon.html icon="coronavirus" keywords="virus, corona, coronavirus, covid, 19, covid19, covid-19, pandemi, epidemi" label="Corona (Covid-19)" %}
          {% include icon.html icon="list-alt" keywords="" label="Opgørelse / Resumé / Opsummering" %}
          {% include icon.html icon="assignment" keywords="assignment" label="Opgave" %}
          {% include icon.html icon="payments" keywords="money, payment" label="Penge/Betaling/Opkrævning" %}
          {% include icon.html icon="database" keywords="" label="Data" %}
          {% include icon.html icon="assessment" keywords="" label="Analyse" %}
          {% include icon.html icon="map" keywords="" label="Kort" %}
          {% include icon.html icon="link" keywords="" label="Links" %}
          {% include icon.html icon="person" keywords="" label="Person (bruger)" %}
          {% include icon.html icon="shopping-cart" keywords="shopping, buy, cart, payment, checkout" label="Kurv (afventer køb)" %}
          {% include icon.html icon="videocam" keywords="video, kamera" label="Videokamera" %}
          {% include icon.html icon="headphones" keywords="headset, sound, lyd, høretelefoner" label="Headset" %}
          {% include icon.html icon="desktop-windows" keywords="skærm, screen, computer" label="Desktop" %}
          {% include icon.html icon="laptop" keywords="bærbar, computer" label="Labtop" %}
          {% include icon.html icon="phone-iphone" keywords="telefon, smartphone" label="Mobiltelefon" %}
          {% include icon.html icon="mouse" keywords="" label="Mus" %}
          {% include icon.html icon="accessibility-new" keywords="man, mand" label="Tilgængelighed" %}
          {% include icon.html icon="format-list-bulleted" keywords="" label="Liste" %}
          {% include icon.html icon="format-list-checks" keywords="punktopstilling, liste" label="Tjekliste" %}
          {% include icon.html icon="bookmark-border" keywords="" label="Bogmærke" %}
          {% include icon.html icon="bookmarks" keywords="" label="Bogmærker" %}
          {% include icon.html icon="card-account-details" keywords="" label="Kontaktoplysninger" %}
          {% include icon.html icon="people-alt" keywords="" label="Personer (brugere)" %}
          {% include icon.html icon="groups" keywords="" label="Gruppe (møde)" %}
          {% include icon.html icon="forum" keywords="" label="Forum" %}
          {% include icon.html icon="insert-drive-file" keywords="" label="Dokument (sag)" %}
          {% include icon.html icon="domain" keywords="" label="Virksomhed" %}
          {% include icon.html icon="face" keywords="" label="Elev" %}
          {% include icon.html icon="engineering" keywords="" label="Erhverv/Erhversuddannet" %}
          {% include icon.html icon="acccount-circle" keywords="" label="Brugerprofil" %}
          {% include icon.html icon="how-to-reg" keywords="" label="Fuldmagtsprofil (3. part)" %}
          {% include icon.html icon="support-agent" keywords="" label="Supporter (telefonrådgiver)" %}
          {% include icon.html icon="local-shipping" keywords="" label="Lastbil (transport)" %}
          {% include icon.html icon="agriculture" keywords="" label="Traktor (landmand)" %}
          {% include icon.html icon="school" keywords="" label="Studerende (studie)" %}
          {% include icon.html icon="construction" keywords="" label="Håndværk (bygge- og anlægsarbejde)" %}
          {% include icon.html icon="science" keywords="" label="Videnskab (kemi)" %}
          {% include icon.html icon="drive-eta" keywords="" label="Bil (transport)" %}
          {% include icon.html icon="tune" keywords="" label="Parameter (finjustering)" %}
    </div>
  </div>
</section>

<section class="icon-section" id="icon-section-tekstredigering">
  <h2 class="h5 mb-4">Tekstredigering</h2>
  <div class="container">
    <div class="icon-list row" id="icon-list-tekstredigering">
          {% include icon.html icon="text-format" keywords="" label="Formater tekst" %}
          {% include icon.html icon="format-size" keywords="" label="Tekststørrelse" %}
          {% include icon.html icon="format-bold" keywords="" label="Fed" %}
          {% include icon.html icon="format-italic" keywords="" label="Kursiv" %}
          {% include icon.html icon="format-underlined" keywords="" label="Understregning" %}
          {% include icon.html icon="format-color-text" keywords="" label="Farve" %}
          {% include icon.html icon="format-color-fill" keywords="" label="Baggrundsfarve" %}
          {% include icon.html icon="format-clear" keywords="" label="Ryd tekstformaterering" %}
          {% include icon.html icon="format-list-bulleted" keywords="" label="Punktopstilling" %}
          {% include icon.html icon="format-list-numbered" keywords="" label="Punktopstilling nummerisk" %}
          {% include icon.html icon="format-indent-increase" keywords="" label="Indryk højre" %}
          {% include icon.html icon="format-indent-decrease" keywords="" label="Indryk venstre" %}
          {% include icon.html icon="format-align-left" keywords="" label="Venstrestil tekst" %}
          {% include icon.html icon="format-align-center" keywords="" label="Centreret tekst" %}
          {% include icon.html icon="format-align-right" keywords="" label="Højrestillet tekst" %}
          {% include icon.html icon="format-align-justify" keywords="" label="Lige marginer" %}
    </div>
  </div>
</section>
<div class="alert alert-info d-none mt-4" id="no-results-message">
    <div class="alert-body">
        <p class="alert-heading">Der er desværre intet ikon der matcher</p>
        <p class="alert-text">Prøv evt. at søge hos:</p>
        <ul class="nobullet-list">
          <li><a href="https://material.io/tools/icons/?style=outline" class="icon-link">Material Design<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
          <li><a href="https://materialdesignicons.com/" class="icon-link">Material Design Icons<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
        </ul>
    </div>
</div>
</div>


<p><a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues" class="icon-link">Efterspørg eller giv feedback på et ikon på vores FDS GitHub side<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></p>

<script>
    let searchTerm, selectedIcon
    const searchInput = document.getElementById("icon-search-input");
    let searchableItems = [];
    let icons = document.getElementsByClassName('icon-box');
    for(let i = 0; i < icons.length; i++){
      const itemName = icons[i].dataset.iconName.toLowerCase();
      const itemKeywords = icons[i].dataset.iconKeywords.toLowerCase().trim();
      const itemLabel = icons[i].getElementsByTagName('p')[0].innerText;
      const category = icons[i].parentNode.parentNode.getAttribute('id').replace('icon-list-', '');
      searchableItems.push({"name": itemName, "keywords": itemKeywords, "label": itemLabel, "category": category});
    }
    searchInput.addEventListener("keyup" , handleInput);
    
     let categories = document.getElementById('category-list').getElementsByTagName('input');
      for(let i = 0; i < categories.length; i++){
        categories[i].addEventListener('change', function(){
          let section = document.getElementById('icon-section-'+this.value);
          if(this.checked && section.getElementsByClassName('icon-container').length !== 0){
            section.classList.remove('d-none');
          } else{
            section.classList.add('d-none');
          }

          let sections = document.getElementsByClassName('icon-section');
          let visibleResults = false;
          for(let a = 0; a < sections.length; a++){
            if(!sections[a].classList.contains('d-none')){
              visibleResults = true;
            }
          }
          if(visibleResults){
            document.getElementById('no-results-message').classList.add('d-none');
          } else{
            document.getElementById('no-results-message').classList.remove('d-none');
          }
        });
      }


    function handleInput(e) {
      let searchTerm = searchInput.value.toLowerCase();
      let lists = document.getElementsByClassName('icon-list');
      for(let i = 0; i < lists.length; i++){
        lists[i].innerHTML = "";
      }
      
      for (i in searchableItems) {
        let icon = searchableItems[i];
        if((icon.name.toLowerCase().indexOf(searchTerm) !== -1 || icon.keywords.toLowerCase().indexOf(searchTerm) !== -1 || icon.label.toLowerCase().indexOf(searchTerm) !== -1)){
          let iconContainer = document.createElement('div');
          let iconBox = document.createElement('div');
          let iconText = document.createElement('p');
          let svgns = "http://www.w3.org/2000/svg";
          let xlinkns = "http://www.w3.org/1999/xlink";
          let svg = document.createElementNS(svgns, 'svg');
          svg.classList.add('icon-svg');
          svg.setAttribute('focusable', 'false');
          svg.setAttribute('aria-hidden', 'true');
          let use = document.createElementNS(svgns, "use");
          use.setAttributeNS(xlinkns, "href", "#"+icon.name);
          svg.appendChild(use);
          

          iconContainer.classList.add('col-6', 'col-md-3', 'icon-container', 'p-0');
          iconBox.classList.add('icon-box');
          iconText.innerText = icon.label;
          iconBox.appendChild(svg);
          iconBox.appendChild(iconText);
          iconContainer.appendChild(iconBox);
          document.getElementById('icon-list-'+icon.category).appendChild(iconContainer);
        }
      }

     
      let hasResults = false;
      // Show or hide sections/categories depending on if they have results
      let sections = document.getElementsByClassName('icon-section');
      for(let i = 0; i < sections.length; i++){
        let sectionCategoryName = sections[i].id.replace('icon-section-', '');
        if(sections[i].getElementsByClassName('icon-container').length === 0 || document.getElementById('cat-'+sectionCategoryName).checked === false){
          sections[i].classList.add('d-none');
        } else{
          hasResults = true;
          sections[i].classList.remove('d-none');
        }
      }

      // Show or hide no results message
      let messageElement = document.getElementById('no-results-message');
      if(hasResults){
        messageElement.classList.add('d-none');
      } else{
        messageElement.classList.remove('d-none');
      }
    }
</script>