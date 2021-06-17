---
permalink: "/farveberegner/"
layout: styleguide-nosidebar
title: Farveberegner
subcategory: Design
category: Design_category
parentlink: "/design/farver/farveberegner/"
tags:
description:
backlink: /design/farver/farveberegner/
---
<div class="toast-container">
<div class="toast toast-success hide" id="name-change-toast" role="status">
    <div class="toast-icon"></div>
    <div class="toast-message">
        <p class="bold">Farveskemaets navn er nu ændret</p>
        <button class="toast-close">Luk</button>
    </div>
</div>
</div>
<section>
    <form method="get" action="" id="color-form" novalidate>
    <div class="form-group">
        <label class="form-label" for="color">
            Indtast HEX-værdi
        </label>
        <span class="form-hint" id="hex-value-hint">
            Den farve beregningen skal tage udgangspunkt i (fx en brandfarve, som: #44831E).
        </span>
        <span class="form-error-message d-none" id="color-input-error" role="alert">
            <span class="sr-only">Fejl:</span> Den indtastede farve er ugyldig. Indtast farven som hex værdi, fx: #FF0000
        </span>
        <input class="form-input input-char-8" id="color" name="color" type="text" aria-describedby="hex-value-hint" required />
    </div>
    <button type="submit" class="button button-secondary mt-4">Ok</button>
    </form>
</section>

<section id="farveskema" aria-live="polite" class="d-none">
    <h2 class="h3">Farveskema</h2>
    <div class="form-group">
        <input id="set-name" type="checkbox" name="checkbox1" value="1"
            class="form-checkbox  checkbox-large js-checkbox-toggle-content"
            data-aria-controls='set-name-content' data-aria-expanded='false' />
        <label for="set-name" class="">Giv farven et navn til identifikation</label>
        <div id="set-name-content" aria-hidden="true" class="box-border-l collapsed">
            <div class="py-4">
            <form id="name-form" method="get" action="" novalidate>
                <div class="form-group">
                    <label class="form-label " for="new-name">
                        Navngiv farven <span class="weight-normal">(frivilligt)</span>
                    </label>
                    <span class="form-hint" id="new-name-hint">
                        Navnet kan anvendes som design token 
                    </span>
                    <span class="form-error-message d-none" id="new-name-error" role="alert">
                        <span class="sr-only">Fejl:</span> Navnet bør kun indeholde bogstaver
                    </span>
                    <input class="form-input" id="new-name" name="new-name" type="text" aria-describedby="new-name-hint">
                </div>
                <button class="button button-secondary mt-4">Ok</button>
                </form>
            </div>
        </div>
    </div>
    <ul id="color-scheme" class="unstyled-list d-flex color-scheme-container mt-5">
    </ul>
    <button class="button button-tertiary mt-5 mb-9" data-module="modal"
        data-target="modal-main-colors-code">
        Vis SCSS koden for ovenstående farveskema
    </button>
    <details class="details js-details">
        <summary class="details-summary">Ekstrafarver</summary>
        <div class="details-text">
            <h3 class="h4 mt-0">Ekstrafarver</h3>
            <ul id="extra-color-scheme" class="unstyled-list d-flex color-scheme-container"></ul>
            <h3 class="h4">Farveskema inkl. ekstrafarver (18 farver)</h3>
            <ul id="all-color-scheme" class="unstyled-list d-flex color-scheme-container"></ul>
            <button class="button button-tertiary mt-5" data-module="modal" data-target="modal-all-colors-code">Vis SCSS koden for ovenstående farveskema</button>
        </div>
    </details>
</section>

<div class="fds-modal" id="modal-main-colors-code" aria-hidden="true" role="dialog"
    aria-modal="true" aria-labelledby="modal-example-title">
    <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title" id="modal-example-title">
                SCSS kode til farveskema
            </h2>
            <button class="modal-close button button-unstyled"
                aria-label="Luk"
                data-modal-close><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#close"></use></svg></button>
        </div>
        <div class="modal-body">
        <figure class="highlight"><pre><code class="language-scss" data-lang="scss">$color-<span class="color-custom-name">custom</span>-100:           <span class="custom-color-100-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-200:           <span class="custom-color-200-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-300:           <span class="custom-color-300-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-400:           <span class="custom-color-400-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-500:           <span class="custom-color-500-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-600:           <span class="custom-color-600-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-700:           <span class="custom-color-700-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-800:           <span class="custom-color-800-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-900:           <span class="custom-color-900-hex">#44831E</span>;

$color-primary:               $color-<span class="color-custom-name">custom</span>-700;
$color-primary-medium:        $color-<span class="color-custom-name">custom</span>-800;
$color-primary-dark:          $color-<span class="color-custom-name">custom</span>-900;</code></pre></figure>
        </div>
        <div class="modal-footer"><button
                class="button button-secondary"
                data-modal-close>Luk</button>
        </div>
    </div>
</div>


<div class="fds-modal" id="modal-all-colors-code" aria-hidden="true" role="dialog"
    aria-modal="true" aria-labelledby="modal-example-title">
    <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title" id="modal-example-title">
                SCSS kode til farveskema
            </h2>
            <button class="modal-close button button-unstyled"
                aria-label="Luk"
                data-modal-close><svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#close"></use></svg></button>
        </div>
        <div class="modal-body">
        <figure class="highlight"><pre><code class="language-scss" data-lang="scss">$color-<span class="color-custom-name">custom</span>-100:           <span class="custom-color-100-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-150:           <span class="custom-color-150-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-200:           <span class="custom-color-200-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-250:           <span class="custom-color-250-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-300:           <span class="custom-color-300-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-350:           <span class="custom-color-350-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-400:           <span class="custom-color-400-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-450:           <span class="custom-color-450-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-500:           <span class="custom-color-500-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-550:           <span class="custom-color-550-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-600:           <span class="custom-color-600-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-650:           <span class="custom-color-650-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-700:           <span class="custom-color-700-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-750:           <span class="custom-color-750-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-800:           <span class="custom-color-800-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-850:           <span class="custom-color-850-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-900:           <span class="custom-color-900-hex">#44831E</span>;
$color-<span class="color-custom-name">custom</span>-950:           <span class="custom-color-950-hex">#44831E</span>;

$color-primary:               $color-<span class="color-custom-name">custom</span>-700;
$color-primary-medium:        $color-<span class="color-custom-name">custom</span>-800;
$color-primary-dark:          $color-<span class="color-custom-name">custom</span>-900;</code></pre></figure>
        </div>
        <div class="modal-footer"><button
                class="button button-secondary"
                data-modal-close>Luk</button>
        </div>
    </div>
</div>