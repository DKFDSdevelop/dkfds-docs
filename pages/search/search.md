---
permalink: /search/
layout: styleguide-nosidebar
search: true
title: Søg
---
<form method="get" action=".">
    <div class="form-group search">
        <label for="input-type-text" class="sr-only">Søg efter indhold</label>
        <input class="form-input input-char-27" id="search-input" name="q" title="Search" type="search">
        <button class="button button-search" type="submit" id="searchbtn">Søg</button>
    </div>
</form>
<div class="d-none" id="results-container">
    <h2><span id="results-count"></span> resultater</h2>
    <div id="results">
    </div>
    <div class="page-navigation">
        <a id="previous-page" class="d-none">Forrige side</a>
        <a id="next-page" class="d-none">Næste side</a>
    </div>
</div>
