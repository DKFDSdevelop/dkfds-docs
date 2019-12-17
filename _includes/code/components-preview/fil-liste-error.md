--- 
permalink: /preview-components/fil-liste-error.html
layout: iframed 
title: Fil-liste-error.html
---
<header class="header">

    <!--1A: Portal header -->
    <div class="portal-header">
        <div class="container portal-header-inner">
            <a href="javascript:void(0);" aria-label="Portalnavn"
                class="logo alert-leave">
            </a>
            <button
                class="button button-secondary button-menu-open js-menu-open ml-auto d-print-none"
                aria-haspopup="menu" title="Åben mobil menu">Menu</button>

            <!-- 1B: Portal header: info + actions-->
            <div class="portal-info">

                <p class="user"><span class="username bold">Christian Emil
                        Vestergaard Christiansen</span> </p>

                <a href="#"
                    class="button button-secondary alert-leave d-print-none"
                    role="button">
                    Log af
                </a>
            </div>
        </div>
    </div>

    <!--2A: Solution header -->
    <div class="solution-header header-end">
        <div class="container solution-header-inner">
            <div class="solution-heading">
                <a href="#" title="Hjem" class="alert-leave2">
                    Eksempel på upload-fejl
                </a>
            </div>

            <!--2B: Solution header: Authority name + text-->
            <div class="solution-info ">
                <!-- nav-secondary -->

                <p class="h5 authority-name"> Styrelsen for Eksempler</p>

                <p>Support: 72 20 60 00 <span class='d-print-none'>· <a
                            href="javascript:void(0);"
                            data-micromodal-trigger="modal-contact"
                            class="function-link d-inline-block"><svg class="icon-svg" aria-hidden="true" focusable="false"><use xlink:href="#card-text-outline"></use></svg>Kontakt</a></span>
                </p>

            </div>
        </div>
    </div>

    <div class="overlay"></div>
    <nav class=" nav">
        <!-- collapsible-->
        <button
            class="button button-tertiary button-menu-close js-menu-close"
            title="Luk mobil menu"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#close"></use></svg>Luk</button>

        <div class="portal-info-mobile">
            <p class="user bold">Christian Emil Vestergaard Christiansen
            </p>
            <a href="#" class="button button-secondary button-signout">
                Log af
            </a>
        </div>

        <div class="solution-info-mobile">
            <p class="bold">Erhvervsministeriet</p>
            <p><a href="javascript:void(0);"
                    data-micromodal-trigger="modal-contact"
                    class="function-link d-inline-block"><svg class="icon-svg" aria-hidden="true"><use xlink:href="#card-text-outline"></use></svg>Kontakt</a>
            </p>
        </div>
        <div class="navbar">
            <div class="navbar-inner navbar-context-actions container">
                <div class="nav-secondary d-none d-md-block">
                    <div class="nav-actions">
                        <a href="/pages/eksempler/aktindsigt/aktindsigt-1/"
                            class="back-link">Tilbage</a>
                    </div>
                </div>
            </div>
        </div>
    </nav> <!-- collapsible nav end-->
</header>

<main class="container page-container">
    <a href="javascript:void(0);" class="back-link d-md-none">Tilbage</a>
    <h1>Dokumenter til sagen <span
            class="weight-normal">(frivilligt)</span></h1>
    <table
        class="table table--borderless table--responsive-headers d-print-table">
        <thead>
            <tr>
                <th>Filnavn</th>
                <th>Navngiv dokument</th>
                <th>Slet</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="#"
                        class="function-link"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#file-pdf-outline"></use></svg>Lægeerklæring.pdf</a>
                </td>
                <td>
                    <div class="form-group ">

                        <label class="form-label sr-only"
                            for="options">Navngiv dokument</label>
                        <select class=" form-select" name="options"
                            id="options">
                            <option value>Vælg</option>

                            <option value="Lægeerklæring" selected>
                                Lægeerklæring</option>

                            <option value="Fuldmagt">Fuldmagt</option>

                            <option value="Journal">Journal</option>

                            <option value="Spørgeskema">Spørgeskema
                            </option>

                        </select>
                    </div>
                </td>
                <td><button class="button button-unstyled">
                        <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#delete-outline"></use></svg>
                        <span class="sr-only">Slet</span></button></td>
            </tr>
            <tr>
                <td><a href="#"
                        class="function-link"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#file-pdf-outline"></use></svg>Fuldmagt_88.pdf</a>
                </td>
                <td>
                    <div class="form-group form-error">
                        <span class="form-error-message" role="alert">Angiv
                            navn på dokument</span>
                        <label class="form-label sr-only"
                            for="options2">Navngiv dokument</label>
                        <select class=" form-select" name="options2"
                            id="options2">
                            <option value>Vælg</option>

                            <option value="Lægeerklæring">Lægeerklæring
                            </option>

                            <option value="Fuldmagt">Fuldmagt</option>

                            <option value="Journal">Journal</option>

                            <option value="Spørgeskema">Spørgeskema
                            </option>

                        </select>
                    </div>
                </td>
                <td><button class="button button-unstyled">
                        <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#delete-outline"></use></svg>
                        <span class="sr-only">Slet</span></button></td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="form-group form-error">
                        <span class="form-error-message"
                            role="alert">Dokumentet er større end 10 MB, og
                            kan derfor ikke tilføjes. Opdel dokumentet og
                            tilføj som flere dokumenter.</span>
                        <a href="#"
                            class="function-link"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#file-pdf-outline"></use></svg>Spørgeskema_tilskadekomne.pdf</a>
                    </div>
                </td>
                <td><button class="button button-unstyled">
                        <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#delete-outline"></use></svg>
                        <span class="sr-only">Slet</span></button></td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="form-group form-error">
                        <span class="form-error-message"
                            role="alert">Dokumentet er ikke en gyldig
                            filtype, og kan derfor ikke tilføjes. Filen
                            skal være af typen PDF, DOCX, DOC, BMP, GIF,
                            HTM, HTML, JPEG, JPG, PNG, RTF, TIF eller
                            TXT.</span>
                        <a href="#"
                            class="function-link"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#file-pdf-outline"></use></svg>Spørgeskema_arbejdsgiver.indd</a>
                    </div>
                </td>
                <td><button class="button button-unstyled">
                        <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#delete-outline"></use></svg>
                        <span class="sr-only">Slet</span></button></td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="form-group form-error">
                        <span class="form-error-message"
                            role="alert">Dokumentet blev ikke tilføjet, da
                            der er sket en teknisk fejl. Forsøg at tilføje
                            dokumentet i gen. Sker samme fejl igen, kan du
                            kontakte FDS.</span>
                        <a href="#"
                            class="function-link"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#file-pdf-outline"></use></svg>Journal.pdf</a>
                    </div>
                </td>
                <td><button class="button button-unstyled">
                        <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#delete-outline"></use></svg>
                        <span class="sr-only">Slet</span></button></td>
            </tr>
        </tbody>
    </table>
    <nav class="page-navigation d-print-none">
        <button class="button button-primary">Næste</button>
    </nav>
</main>

<footer>
    <div class="footer">
        <div class="container">
            <div class="align-text-left">
                <ul class="unstyled-list inline-list">
                    <li class=""><span
                            class="h5 weight-semibold">Eksempelstyrelsen</span>
                    </li>
                    <li class=""><a class="function-link"
                            href="mailto:support@example.dk">support@example.dk</a>
                    </li>
                    <li class=""><a class="function-link"
                            href="tel:12345678">12 34 56 78</a></li>
                    <li class="d-print-none"><a href="#"
                            class="function-link icon-link">Tilgængelighedserklæring<svg class="icon-svg" focusable=">false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
                    </li>
                    <li class="d-print-none"><a href="#"
                            class="function-link">Privatlivspolitik
                            (cookies)</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<div class="modal" id="modal-contact" aria-hidden="true">
    <div class="modal__overlay bg-modal" tabindex="-1"
        data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true"
            aria-labelledby="modal-contact-1">
            <div class="modal__header">
                <h1 class="modal__title h2" id="modal-contact-1">
                    Kontakt
                </h1>
            </div>
            <div class="modal__content">
                <div class="alert alert-warning" role="alert">
                    <div class="alert-body">
                        <h3 class="alert-heading">Vi har noget information
                            af advarende karakter</h3>
                        <p class="alert-text">Noget tekst, der forklarer
                            det af advarende karakter, som brugeren bør
                            vide inden denne ringer eller skriver. Noget
                            tekst, der forklarer det af advarende karakter,
                            som brugeren bør vide inden denne ringer eller
                            skriver.</p>
                    </div>
                </div>
                <h3>En form for support</h3>
                <p>Hvis du har spørgsmål om:</p>
                <ul>
                    <li>En ting som denne</li>
                    <li>Et andet emne som dette</li>
                </ul>
                <p>Kan du ringe direkte til: 12 34 56 78</p>
                <p>Telefonen er åben:</p>
                <p class="m-0">
                    Mandag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    kl. 9-17</p>
                <p class="m-0">
                    Tirsdag-torsdag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    kl. 9-17</p>
                <p class="m-0">
                    Fredag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    kl. kl. 9-14</p>
            </div>

            <button class="modal__close button button-secondary"
                aria-label="Close modal" data-micromodal-close>Luk</button>
        </div>
    </div>
</div>