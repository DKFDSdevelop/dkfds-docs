--- 
permalink: /preview-components/tringuide-responsive-overflowmenu.html
layout: iframed 
title: Tringuide-responsive-overflowmenu.html
---
<div class="container pt-5">
    <div
        class="overflow-menu  overflow-menu--open-right overflow-menu--md-no-responsive">
        <button class="button-overflow-menu js-dropdown "
            data-js-target="#overflow4" aria-haspopup="true"
            aria-expanded="false">
            Trin 3 af 5
            <svg class="icon-svg"><use xlink:href="#menu-down"></use></svg>
            <span class="sr-only">Åbner overflow menu</span>
        </button>
        <div class="overflow-menu-inner" id="overflow4" aria-hidden="true">
            <ul class="sidenav-list">
                <li>
                    <a href="#">
                        1. Trin 1
                        <span class="sidenav-icon">
                            <svg class="icon-svg"><use xlink:href="#check"></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        2. Trin 2
                        <span class="sidenav-icon">
                            <svg class="icon-svg"><use xlink:href="#check"></use></svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" class="active">
                        3. Trin 3 (valgt)
                    </a>
                </li>
                <li>
                    <a href="#">
                        4. Trin 4
                    </a>
                </li>
                <li>
                    <a href="#">
                        5. Trin 5
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>