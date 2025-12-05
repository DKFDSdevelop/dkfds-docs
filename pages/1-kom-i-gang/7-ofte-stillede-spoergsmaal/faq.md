---
permalink: "/kom-i-gang/faq/"
redirect_from:
- "/faellesskab/faq/"
layout: styleguide
title: Ofte stillede spørgsmål
category: Kom_i_gang_category
subcategory: Kom i gang
description: ""
lead: Nogle gange er der spørgsmål til FDS-teamet, der går igen. Før du tager kontakt til FDS-teamet kan du se her, om dit spørgsmål allerede er besvaret.
---
<fds-accordion-group heading-level="h2">
    <fds-accordion heading="Vi har brug for et ikon, som ikke findes i Det Fælles Designsystem. Må vi selv tilføje et?" class="mt-7 w-percent-xl-90">
        <p>Ja, det må I gerne. Overvej dog altid, om det er nødvendigt og giver værdi med et nyt ikon i netop jeres løsning.</p>
        <p>Hvis I beslutter jer for at tilføje et nyt ikon, skal det passe visuelt til Det Fælles Designsystem. Det kan I læse mere om under {% include links/internal-link.html linktext="ikoner" %}. Husk også at brugerteste jeres løsning for at være sikre på, at brugerne forstår det nye ikon.</p>
        <p>Hvis I mener, designsystemet mangler et gængst ikon, kan I {% include links/internal-link.html linktext="kontakte os" %} for at anmode om, at det tilføjes til Det Fælles Designsystems ikonbibliotek.</p>
    </fds-accordion>
    <fds-accordion heading="Vi har brug for en komponent, som ikke findes i Det Fælles Designsystem. Må vi selv lave en?" class="w-percent-xl-90">
        <p>Ja, det må I gerne. Overvej dog altid, om jeres udfordring kan løses bedre med en af de komponenter, der allerede findes i designsystemet.</p>
        <p>Hvis I beslutter jer for at udvikle en ny komponent, skal den passe visuelt til Det Fælles Designsystem, og den skal efterleve {% include links/internal-link.html linktext="designets grundprincipper" %} og kravene til {% include links/internal-link.html linktext="tilgængelighed" %}. Husk også at brugerteste jeres løsning for at være sikre på, at brugerne forstår og kan anvende den nye komponent.</p>
        <p>Hvis I mener, der mangler en gængs komponent, som ville kunne bruges i flere løsninger, kan I {% include links/internal-link.html linktext="kontakte os" %} for at anmode om, at den tilføjes til Det Fælles Designsystem.</p>
    </fds-accordion>
    <fds-accordion heading="Hvad gør vi, hvis vi af tekniske årsager ikke kan bruge FDS-koden direkte i vores løsning?" class="w-percent-xl-90">
        <p>Der er ikke krav om at anvende selve den kode, der lægges til rådighed her på siden. Det kan fx være nødvendigt at omskrive koden for at anvende et bestemt framework i udviklingen. I må altså gerne skrive jeres egen kode, så længe jeres løsning ser ud som og fungerer som beskrevet her på siden. Læs mere under {% include links/internal-link.html linktext="frameworks" %}.</p>
    </fds-accordion>
    <fds-accordion heading="Vi er i tvivl, om vores løsning lever op til Det Fælles Designsystem. Kan I godkende vores design?" class="w-percent-xl-90">
        <p>I er selv ansvarlige for at følge Det Fælles Designsystems retningslinjer og brugerteste den enkelte løsning. I kan dog {% include links/internal-link.html linktext="kontakte os" %}, hvis I har specifikke spørgsmål eller udfordringer med at anvende designsystemet.</p>
        <p>Kort sagt skal løsningen se ud og fungere som beskrevet her på siden for at anvende designsystemet. For at sikre jer, at jeres løsning følger Det Fælles Designsystem, kan I gennemgå punkterne på siden {% include links/internal-link.html linktext="Tjekliste" %}.</p>
    </fds-accordion>
    <fds-accordion heading="Er der krav om at anvende Det Fælles Designsystem til netop vores løsning?" class="w-percent-xl-90">
        <p>Det Fælles Designsystem skal anvendes til selvbetjeningsløsninger, der tilgås via borger.dk eller Virk. Læs mere om {% include links/external-link.html linktext="krav til løsninger på Virk" %} eller {% include links/external-link.html linktext="tilslutning af selvbetjening til borger.dk" %}.</p>
    </fds-accordion>
</fds-accordion-group>

<fds-checkbox-group group-label="Group label" checkbox-disabled>
    <fds-checkbox>
        <input type="checkbox" name="checkbox-example" value="v3">
        <label>Checkbox with expandable content</label>
        <div class="checkbox-content">
            <fds-checkbox>
                <input type="checkbox" name="checkbox-example" value="v1">
                <label>Checkbox 1</label>
            </fds-checkbox>
        </div>
    </fds-checkbox>
    <fds-checkbox>
        <input type="checkbox" />
        <label>Show advanced settings</label>
        <div class="checkbox-content">
            <fds-input-wrapper>
                <label class="form-label">Inputfield label</label>
                <input type="text" name="input-wrapper-help-text" class="form-input">
                <fds-error-message id="segtsegaetg">Error message</fds-error-message>
            </fds-input-wrapper>
        </div>
    </fds-checkbox>
    <fds-help-text id="myCustomHelpID">Helptext for the group</fds-help-text>
    <fds-error-message id="segtaetg">Error message</fds-error-message>
</fds-checkbox-group>


<h2 class="h5 mt-7">Fik du ikke svar på dit spørgsmål?</h2>
Så kan du kontakte os ved at {% include links/internal-link.html linktext="sende en e-mail" %} eller {% include links/external-link.html linktext='oprette et issue på GitHub' %}.