!function(e){function n(n){for(var a,o,s=n[0],l=n[1],d=n[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(c&&c(n);m.length;)m.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var l=t[s];0!==i[l]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},i={4:0},r=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/assets/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=l;r.push([6,1,0]),t()}([,,,,,,function(e,n,t){t(7),e.exports=t(13)},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(2),o=t(1),s=(t(8),t(9));function l(){new o.Toast(document.getElementsByClassName("toast-container")[0].getElementsByClassName("hide")[0]).show()}t(10),t(12),document.addEventListener("DOMContentLoaded",(function(){!function(){if(document.getElementsByTagName("body")[0].classList.contains("page-language-switcher")||document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")){var e=window.location.search;if(""!==e&&-1!==e.indexOf("lang=")){var n=e.replace("?lang=","");if("da"!==n){var t=document.getElementsByClassName("language-switcher")[0].getElementsByTagName("ul")[0],a=t.querySelector("li:first-of-type a");a.removeChild(a.getElementsByTagName("svg")[0]),t.querySelector("li:first-of-type a").removeAttribute("aria-label");var i=t.querySelector('a[lang="'+n+'"]'),r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg");o.classList.add("icon-svg"),o.setAttribute("focusable","false"),o.setAttribute("aria-hidden","true");var s=document.createElementNS(r,"use");switch(s.setAttributeNS("http://www.w3.org/1999/xlink","href","#done"),o.appendChild(s),i.prepend(o),t.prepend(i.parentNode),n){case"en-GB":t.setAttribute("aria-label","Choose language"),i.setAttribute("aria-label","Current language: English"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(t.querySelector('a[lang="en-GB"]').removeAttribute("data-tooltip"),t.querySelector('a[lang="en-GB"]').classList.remove("js-tooltip"),t.querySelector('a[lang="da"]').classList.add("js-tooltip"),t.querySelector('a[lang="da"]').setAttribute("data-tooltip","Danish"),t.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","English"),t.querySelector('a[lang="de"]').setAttribute("data-tooltip","German"),t.querySelector('a[lang="pl"]').setAttribute("data-tooltip","Polish"));break;case"de":t.setAttribute("aria-label","Sprache wählen"),i.setAttribute("aria-label","Aktuelle Sprache: Deutsch"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(t.querySelector('a[lang="de"]').removeAttribute("data-tooltip"),t.querySelector('a[lang="de"]').classList.remove("js-tooltip"),t.querySelector('a[lang="da"]').classList.add("js-tooltip"),t.querySelector('a[lang="da"]').setAttribute("data-tooltip","Dänisch"),t.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","Englisch"),t.querySelector('a[lang="pl"]').setAttribute("data-tooltip","Polieren"));break;case"pl":t.setAttribute("aria-label","Wybierz język"),i.setAttribute("aria-label","Aktualny język: polski"),document.getElementsByTagName("body")[0].classList.contains("page-language-switcher-tooltip")&&(t.querySelector('a[lang="pl"]').removeAttribute("data-tooltip"),t.querySelector('a[lang="pl"]').classList.remove("js-tooltip"),t.querySelector('a[lang="da"]').classList.add("js-tooltip"),t.querySelector('a[lang="da"]').setAttribute("data-tooltip","Duński"),t.querySelector('a[lang="en-GB"]').setAttribute("data-tooltip","Angielski"),t.querySelector('a[lang="de"]').setAttribute("data-tooltip","Niemiecki"))}}}}}(),o.init(),-1!==window.location.pathname.split("/").indexOf("mastertest")&&new s(o),function(){var e=document.getElementById("toast-example-button");if(null!==e){var n=document.createElement("div");n.classList.add("toast-container"),document.body.appendChild(n),e.addEventListener("click",(function(){var e=["info","warning","error","success"],n=Math.floor(Math.random()*e.length),t=document.getElementsByClassName("toast-container")[0],a=document.createElement("div");a.classList.add("toast","toast-"+e[n],"hide"),a.setAttribute("role","status");var i=document.createElement("div");i.classList.add("toast-icon"),a.appendChild(i);var r=document.createElement("div");r.classList.add("toast-message");var o=document.createElement("p");o.classList.add("bold"),o.innerText=["Du har fået en besked","Dette er en advarsel","Der opstod en fejl","Din ansøgning er afsendt"][n],r.appendChild(o);var s=document.createElement("button");s.classList.add("toast-close"),s.innerText="Luk",r.appendChild(s);var d=document.createElement("p");d.innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",r.appendChild(d),a.appendChild(r),t.appendChild(a),requestAnimationFrame(l)}))}}();var e=document.getElementsByClassName("icon-box");if(0!==e.length)for(var n=0;n<e.length;n++)new o.Tooltip(e[n].getElementsByTagName("p")[0]);var t=document.getElementById("search-form");null!==t&&t.getElementsByTagName("form")[0].addEventListener("submit",(function(e){return""!==document.getElementById("search-input").value||(e.preventDefault(),!1)}),!1)})),i()(document).ready((function(){if(0===document.getElementsByClassName("page-cookie-message").length)r.CookiePrompter.init({trackers:[{name:r.PiwikProTracker,config:{account:"e1985634-0fc1-4992-baf6-59088ee23b2a",piwikProPath:"erst.containers.piwik.pro"}}],readMoreUrl:"/omdesignsystemet/privatlivspolitik-cookies/",enableLog:!1,explicitAccept:!0,textHeader:"Fortæl os om du accepterer cookies",textblock1:"Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.",textblock2:"",textReadMore:"Læs mere om vores brug af cookies",textDontAccept:"Nej tak til cookies",textAccept:"Accepter cookies",onReady:function(){0!==i()("#cookieMessage").length&&(i()("body").addClass("cookie-message-active"),i()(".acceptCookieButton").click((function(){i()("body").removeClass("cookie-message-active")})))},onOptOut:function(){i()("body").removeClass("cookie-message-active")}});i()("#start-reqtool").click((function(e){e.preventDefault(),localStorage.removeItem("reqTool"),window.location.href=i()(this).attr("href")})),i()(".layout-demo form").submit((function(e){e.preventDefault(),window.location.href=window.location.origin+i()(this).attr("action")})),0!==i()("#cookieForm").length&&("n"===r.CookieMgr.readCookie("cookieOptOut")?(i()("#statCookiesNo").prop("checked",!0),i()("#originalValue").val("0")):i()("#originalValue").val("1"),i()("#cookieForm").submit((function(e){e.preventDefault(),"1"===i()("input[name=statCookies]:checked").val()?(r.CookieMgr.createCookie("cookieOptOut","y",1),i()("#cookieYesAlert").removeClass("d-none"),i()("#originalValue").val("1")):(r.CookiePrompter.eraseCookiesAndRemovePrompt(),i()("#cookieNoAlert").removeClass("d-none"),i()("#originalValue").val("0")),i()("#cookieButtons").addClass("d-none")})),i()("input[type=radio][name=statCookies]").change((function(){i()("#cookieButtons").removeClass("d-none"),i()("#cookieNoAlert").addClass("d-none"),i()("#cookieYesAlert").addClass("d-none")})),i()("#cookieCancel").click((function(){"1"===i()("#originalValue").val()?i()("#statCookiesYes").prop("checked",!0):i()("#statCookiesNo").prop("checked",!0),i()("#cookieButtons").addClass("d-none")})));var e=!1;i()(".layout-demo a, .layout-demo button").click((function(n){return e=!0,i()(this).hasClass("alert-leave")?1==confirm("Du er ved at forlade selvbetjeningsløsningen. Data, der ikke er gemt vil gå tabt. Vil du fortsætte?")?(e=!0,!0):(n.preventDefault(),e=!1,!1):i()(this).hasClass("alert-leave2")?1==confirm("Du er ved at forlade siden. Evt. indtastninger der ikke er gemt vil gå tabt. Vil du fortsætte?")?(e=!0,!0):(n.preventDefault(),e=!1,!1):void 0})),i()(".layout-iframed .icon-link, .layout-demo .icon-link").click((function(n){return 1==confirm("Du er ved at forlade selvbetjeningsløsningen. Data, der ikke er gemt vil gå tabt. Vil du fortsætte?")?(e=!0,!0):(n.preventDefault(),e=!1,!1)})),window.onbeforeunload=function(n){if(document.getElementsByClassName("layout-demo").length>0&&void 0===window.themeChangeProcess){var t=!0;if(null!==document.activeElement.href&&void 0!==document.activeElement.href&&null!==window.location.href&&void 0!==window.location.href){var a=document.activeElement.href.split("/"),i=window.location.href.split("/");0!=a.length&&a[5]==i[5]&&(t=!1)}if(t&&!e)return(n=n||window.event)&&(n.returnValue="Sure?"),"Sure?"}}}))},,function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.DKFDS=n,this.setEvents()}var n,a,i;return n=e,(a=[{key:"setEvents",value:function(){var e=this,n="none",t=document.getElementById("newAccordionTrigger");t.addEventListener("click",(function(a){var i="myNewAccordion",r=e.createAccordion(i);document.getElementById("newAccordion").innerHTML=r,new e.DKFDS.Accordion(document.getElementById(i)),t.style.display=n}));var a=document.getElementById("newOverflowMenuTrigger");a.addEventListener("click",(function(t){var i="myNewOverflowMenu",r=e.createOverflowMenu(i);document.getElementById("newOverflowMenu").innerHTML=r,new e.DKFDS.Dropdown(document.getElementById(i)),a.style.display=n}));var i=document.getElementById("newCollapseTrigger");i.addEventListener("click",(function(t){var a="myNewCollapse",r=e.createCollapse(a);document.getElementById("newCollapse").innerHTML=r,new e.DKFDS.Collapse(document.getElementById(a)),i.style.display=n}));var r=document.getElementById("newCollapseRadioTrigger");r.addEventListener("click",(function(t){var a="myNewCollapseRadio",i=e.createCollapseRadio(a);document.getElementById("newCollapseRadio").innerHTML=i,new e.DKFDS.RadioToggleGroup(document.getElementById(a)),r.style.display=n}));var o=document.getElementById("newCollapseCheckboxTrigger");o.addEventListener("click",(function(t){var a="myNewCollapseCheckbox",i=e.createCollapseCheckbox(a);document.getElementById("newCollapseCheckbox").innerHTML=i,new e.DKFDS.CheckboxToggleContent(document.getElementById(a)),o.style.display=n}));var s=document.getElementById("newTableTrigger");s.addEventListener("click",(function(t){var a="myNewTable",i=e.createTable(a);document.getElementById("newTable").innerHTML=i,new e.DKFDS.ResponsiveTable(document.getElementById(a)),s.style.display=n}));var l=document.getElementById("newTabnavTrigger");l.addEventListener("click",(function(t){var a="myNewTabnav",i=e.createTabnav(a);document.getElementById("newTabnav").innerHTML=i,new e.DKFDS.Tabnav(document.getElementById(a)),l.style.display=n}));var d=document.getElementById("newTooltipTrigger");d.addEventListener("click",(function(t){var a="myNewTooltip",i=e.createTooltip(a);document.getElementById("newTooltip").innerHTML=i,new e.DKFDS.Tooltip(document.getElementById(a)),d.style.display=n}))}},{key:"createTooltip",value:function(e){return'<a href="javascript:void(0)" id=\''+e+'\' class="js-tooltip"\n        data-tooltip="Dette er en hjælpetekst i en popover"><svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#help-circle-outline"></use></svg></a>'}},{key:"createTabnav",value:function(e){return'<ul class="tabnav" id=\''+e+'\'>\n\n        <li>\n            <a href="#tab11" class=" tabnav-item" aria-expanded="false">\n                <span>Tabnav 1</span>\n\n            </a>\n\n            <section class="tabnav-panel" aria-hidden="true" id="tab11">\n                <h2>Tabnav 1</h2>\n                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n                    lorem massa, consequat ut orci sit amet, maximus dictum\n                    orci. Mauris pharetra nunc sed augue bibendum semper.\n                    Donec in cursus orci. Ut sed posuere elit, quis semper\n                    turpis. Curabitur malesuada nisi nec nisl facilisis\n                    ornare. Praesent vestibulum, velit id sollicitudin\n                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n                    eget urna.</p>\n            </section>\n        </li>\n\n        <li class=\'active\'>\n            <a href="#tab21" class="tabnav-item"\n                aria-expanded="true">\n                <span>Tabnav 2</span>\n                <span class="sr-only">(valgt)</span>\n            </a>\n\n            <section class="tabnav-panel" aria-hidden="false" id="tab21">\n                <h2>Tabnav 2</h2>\n                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n                    lorem massa, consequat ut orci sit amet, maximus dictum\n                    orci. Mauris pharetra nunc sed augue bibendum semper.\n                    Donec in cursus orci. Ut sed posuere elit, quis semper\n                    turpis. Curabitur malesuada nisi nec nisl facilisis\n                    ornare. Praesent vestibulum, velit id sollicitudin\n                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n                    eget urna.</p>\n            </section>\n        </li>\n\n        <li>\n            <a href="#tab31" class=" tabnav-item" aria-expanded="false">\n                <span>Tabnav 3</span>\n\n            </a>\n\n            <section class="tabnav-panel" aria-hidden="true" id="tab31">\n                <h2>Tabnav 3</h2>\n                <p>Mauris tempor, tellus a laoreet finibus, neque metus\n                    hendrerit augue, ac lacinia nisl dolor et augue. Ut\n                    lorem massa, consequat ut orci sit amet, maximus dictum\n                    orci. Mauris pharetra nunc sed augue bibendum semper.\n                    Donec in cursus orci. Ut sed posuere elit, quis semper\n                    turpis. Curabitur malesuada nisi nec nisl facilisis\n                    ornare. Praesent vestibulum, velit id sollicitudin\n                    auctor, ipsum lacus auctor nisl, in lacinia sem massa\n                    eget urna.</p>\n            </section>\n        </li>\n    </ul>\n'}},{key:"createTable",value:function(e){return'<table class="table table--borderless table--responsive-headers" id=\''+e+"'>\n        <thead>\n            <tr>\n                <th>Affaldstype</th>\n                <th>Farvekode</th>\n                <th>Beskrivelse</th>\n                <th>Hvor ender det?</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>Dagrenovation</td>\n                <td>Grøn</td>\n                <td>Madaffald, samt papir, pap eller plastik der ikke kan\n                    genanvendes, fordi der er madrester eller andet snask\n                    på.</td>\n                <td>Alt det affald, du smider ud i din primære\n                    skraldespand, som er dagrenovationen, bliver hentet og\n                    kørt på forbrændingen. </td>\n            </tr>\n            <tr>\n                <td>Bioaffald og kompost</td>\n                <td>Beige</td>\n                <td>Alt madaffald uden fødevareemballage.</td>\n                <td>Bioaffaldet kommes i bionedbrydelige poser, som bliver\n                    komposteret til muld.</td>\n            </tr>\n            <tr>\n                <td>Glas</td>\n                <td>Hvid</td>\n                <td>Alle typer glas og flasker.</td>\n                <td>De hele vinflasker rengøres og genbruges af vinhuse,\n                    mens glasskårene bliver smeltet om til nyt glas.</td>\n            </tr>\n            <tr>\n                <td>Elektronik</td>\n                <td>Orange</td>\n                <td>Genstande der har brugt strøm.</td>\n                <td>Det elektroniske affald bliver typisk kørt til et\n                    demonteringsanlæg, hvor det bliver skilt ad, så de\n                    forskellige dele kan genanvendes separat.</td>\n            </tr>\n        </tbody>\n    </table>"}},{key:"createCollapseCheckbox",value:function(e){return'<input id="'+e+'" type="checkbox" name="Name"\n                        value="Value"\n                        class="form-checkbox  checkbox-large js-checkbox-toggle-content"\n                        data-js-target=\'#collapse-check12\'\n                        aria-controls=\'collapse-check1\'\n                        aria-expanded=\'false\' />\n                    <label for="'+e+'" class="">Checkbox viser\n                        indhold</label>\n\n                    <div id="collapse-check12" aria-hidden="true"\n                        class="box-border-l collapsed">\n                        <div class="py-4">\n                            <p>Dette indhold bliver vist når checkboxen er\n                                valgt.</p>\n                        </div>\n                    </div>'}},{key:"createCollapseRadio",value:function(e){return'<div class="js-radio-toggle-group" id=\''+e+'\'>\n    <fieldset>\n        <legend>\n            <h2 class="h4">Vælg en radioknap</h2>\n        </legend>\n        <ul class="nobullet-list">\n            <li>\n\n                <input id="id-radio1" type="radio" name="radio-group1"\n                    value="Value" class="form-radio  radio-large " checked\n                    data-js-target=\'#collapse-radio1\'\n                    aria-controls=\'collapse-radio1\'\n                    aria-expanded=\'false\' />\n                <label for="id-radio1" class="">Radioknap viser indhold\n                    <span class="sr-only">Udfyld informationer\n                        herunder</span></label>\n\n                <div id="collapse-radio1" aria-hidden="true"\n                    class="box-border-l collapsed">\n                    <div class="py-4">\n\n                        <div class="form-group">\n                            <label class="form-label "\n                                for="textinput1">Inputfelt med\n                                label</label>\n\n                            <input class="form-input  input-width-m "\n                                placeholder="" id="textinput1" value=""\n                                name="text1" type="text">\n                        </div>\n\n                    </div>\n                </div>\n            </li>\n            <li>\n\n                <input id="id-radio2" type="radio" name="radio-group1"\n                    value="Value" class="form-radio  radio-large "\n                    data-js-target=\'#collapse-radio2\' />\n                <label for="id-radio2" class="">Radioknap viser indhold\n                    <span class="sr-only">Udfyld informationer\n                        herunder</span></label>\n\n                <div id="collapse-radio2" aria-hidden="true"\n                    class="box-border-l collapsed">\n                    <div class="py-4">\n\n                        <div class="form-group">\n                            <label class="form-label "\n                                for="textinput2">Inputfelt med\n                                label</label>\n\n                            <input class="form-input  input-width-m "\n                                placeholder="" id="textinput2" value=""\n                                name="text2" type="text">\n                        </div>\n\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </fieldset>\n</div>'}},{key:"createCollapse",value:function(e){return"<button class=\"button button-secondary js-collapse\"\n        data-js-target='#collapse12' id='"+e+'\' aria-controls=\'collapse1\'\n        aria-expanded=\'false\'>Vis indhold</button>\n    <div id="collapse12" aria-hidden="true"\n        class="box-border-l mt-4 collapsed">\n        <div class="py-4">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                do eiusmod tempor incididunt ut labore et dolore magna\n                aliqua.</p>\n        </div>\n    </div>'}},{key:"createOverflowMenu",value:function(e){return'\n    <div class="overflow-menu  overflow-menu--open-right ">\n        <button class="button-overflow-menu js-dropdown "\n            data-js-target="#overflow11" id=\''+e+'\' aria-haspopup="true"\n            aria-expanded="false">\n            Overflow menu\n            <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#dots-vertical"></use></svg>\n            <span class="sr-only">Åbner overflow menu</span>\n        </button>\n        <div class="overflow-menu-inner" id="overflow11" aria-hidden="true">\n\n            <ul class=\'overflow-list\'>\n                <li><button>Option 1</button></li>\n                <li><button>Option 2</button></li>\n                <li><a href=\'#\'>Option 3 as link</a></li>\n                <li><button>Option 4 is longer text</button></li>\n            </ul>\n\n        </div>\n    </div>'}},{key:"createAccordion",value:function(e){return' <ul class="accordion " id=\''+e+'\'>\n\n        <li>\n            <button class="accordion-button " aria-expanded="false"\n                aria-controls="a11">\n                Lorem ipsum dolor sit amet\n                <span class="accordion-icon ">\n                    <span class="icon_text">Information</span>\n                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#info"></use></svg>\n                </span>\n            </button>\n\n            <div id="a11" aria-hidden="true" class="accordion-content">\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n                    exercitation ullamco laboris nisi ut aliquip ex ea\n                    commodo consequat.</p>\n            </div>\n        </li>\n\n        <li>\n            <button class="accordion-button  accordion-error "\n                aria-expanded="true" aria-describedby="a2"\n                aria-controls="a21">\n                Consectetur adipiscing elit\n                <span class="accordion-icon ">\n                    <span class="icon_text">Fejl</span>\n                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#close-circle-outline"></use></svg>\n                </span>\n            </button>\n\n            <div id="a21" aria-hidden="false" class="accordion-content">\n\n                <div class="alert alert-error" role="alert"\n                    aria-label="Fejlbesked i accordion">\n                    <div class="alert-body">\n                        <p class="alert-text">Sed ut perspiciatis unde\n                            omnis iste natus\n                            error sit voluptatem accusantium doloremque\n                            laudantium.</p>\n                    </div>\n                </div>\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n                    exercitation ullamco laboris nisi ut aliquip ex ea\n                    commodo consequat.</p>\n            </div>\n        </li>\n\n        <li>\n            <button class="accordion-button " aria-expanded="false"\n                aria-controls="a31">\n                Sed do eiusmod tempor\n                <span class="accordion-icon ">\n                    <span class="icon_text">Advarsel</span>\n                    <svg class="icon-svg "  focusable="false" aria-hidden="true" ><use xlink:href="#alert-outline"></use></svg>\n                </span>\n            </button>\n\n            <div id="a31" aria-hidden="true" class="accordion-content">\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud\n                    exercitation ullamco laboris nisi ut aliquip ex ea\n                    commodo consequat.</p>\n            </div>\n        </li>\n    </ul>'}}])&&t(n.prototype,a),i&&t(n,i),e}();e.exports=a},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(11),o=i()("body, html");i()(".sidenav").on("keydown","a",(function(e){13===e.which&&i()(this).data("keypress",!0)})),i()(".sidenav").on("click","a",(function(e){var n=i()(this).attr("href").split("#")[1],t=r(n);if(0===t)return!0;e.preventDefault(),o.animate({scrollTop:t},{duration:200,start:function(){var e="#"+n;history.pushState?history.pushState(null,null,e):location.hash=e},done:function(){var t=i()(e.target),a=i()("#"+n);a.attr("tabindex","-1"),a.focus(),!0===t.data("keypress")&&t.removeData("keypress")}})}))},function(e,n,t){var a=t(0);e.exports=function(e){var n=a("#"+e),t=0;if(0===n.length)return t;var i=parseInt(a(".sidenav").css("padding-top"),10),r=parseInt(n.css("padding-top"),10);return t=a(".navbar-primary").first().outerHeight(),t-=r-i,n.offset().top-t}},function(e,n,t){"use strict";t.r(n);var a=t(0);function i(e){return new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(e)}t.n(a)()(document).ready((function(e){if(e("body").hasClass("page-tilmelding-til-nyhedsmail")){var n=window.location.search.substr(1).split("&")[0].split("=");if("response"==n[0]){var t=decodeURI(n[1]);e("#newsletter-message .alert-text").html(t),e("#newsletter-message").removeClass("d-none")}}e(".newsletter-container").length&&e.ajax({url:"https://w2l.dk/pls/wopdprod/aboutils.nyhedsbrev2_drupal_xml?aboid=278&aboid=279&aboid=280",async:!1,cache:!0,success:function(n){var t="",a=[];e(n).find("gruppe").each((function(n,i){e(i).find("segment").each((function(n,i){t+="<li>",t+='<input id="id'+e(i).attr("segment_id")+'" type="checkbox" name="i_segmentid" class="form-checkbox checkbox-large" value="'+e(i).attr("segment_id")+'">',t+='<label class="form-label" for="id'+e(i).attr("segment_id")+'">',t+=e(i).children("overskrift").text(),t+="</label>",t+="</li>",a.push(e(i).attr("segment_id"))}))})),0!==a.length&&null!==e("#i_newsform_segment")&&e("#i_newsform_segment").val(a.join()),e("#subscriptions").append(t),e("#newsform").submit((function(e){e.preventDefault()})),e("#unsubmitall").click((function(n){n.preventDefault(),e("#newsform [type='checkbox']").attr("checked",!0),e("#Frameld").click()})),e("#Tilmeld").click((function(n){n.preventDefault();var t=!1;e("#mail-error-summary .nobullet-list").html(""),i(e("#i_newsform_email").val())?(e("#i_newsform_email").parent(".form-group").removeClass("form-error"),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML=""):(e("#i_newsform_email").parent(".form-group").addClass("form-error"),e("#mail-error-summary .nobullet-list").append('<li><a class="function-link" href="#i_newsform_email">Indtast en gyldig e-mailadresse.</a></li>'),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML="Indtast en gyldig e-mailadresse.",e("#i_newsform_email").focus(),t=!0);var a=[];if(e("#newsform [type='checkbox']:checked").each((function(n,t){a.push(e(t).val())})),0==a.length?(e(e("#subscriptions").parents(".form-group")[0]).addClass("form-error"),e("#mail-error-summary .nobullet-list").append('<li><a class="function-link" href="#'+e(e("#subscriptions input")[0]).attr("id")+'">Der skal vælges minimum et nyhedsbrev.</a></li>'),e(e("#subscriptions").parents(".form-group")[0]).find(".form-error-message")[0].innerHTML="Der skal vælges minimum et nyhedsbrev.",!0!==t&&e("#newsform [type='checkbox']:first").focus(),t=!0):(e(e("#subscriptions").parents(".form-group")[0]).removeClass("form-error"),e(e("#subscriptions").parents(".form-group")[0]).find(".form-error-message")[0].innerHTML=""),e("#samtykke-check").prop("checked")?(e("#samtykke-group").removeClass("form-error"),e("#samtykke-group .form-error-message").innerHTML=""):(t=!0,e("#samtykke-group").addClass("form-error"),e("#mail-error-summary .nobullet-list").append('<li><a class="function-link" href="#samtykke-check">Giv os venligst samtykke, så vi må opbevare din mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsmails.</a></li>'),document.querySelector("#samtykke-group .form-error-message").innerHTML="Giv os venligst samtykke, så vi må opbevare din mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsmails."),!0===t)return e("#mail-error-summary").removeClass("d-none"),!1;e("#mail-error-summary").addClass("d-none"),e.ajax({url:"https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal",type:"POST",dataType:"xml",traditional:!0,data:{i_segmentid:a,i_email:e("#i_newsform_email").val(),i_navn:"",i_firma:"",i_sprog:"DA",i_siteid:"detfaellesdesignsystem",tilmeld:"Tilmeld",frameld:""},success:function(n){var t=window.location.origin+"/omdesignsystemet/nyhedsmail/tilmeldt?";t+="response="+encodeURI(e(n).text()),window.location.href=t}}),e("#newsform [type='checkbox']").attr("checked",!1),e("#i_newsform_email").val("")})),e("#Frameld").click((function(n){n.preventDefault();var t=!1;i(e("#i_newsform_email").val())?(e("#i_newsform_email").parent(".form-group").removeClass("form-error"),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML="",e("#i_newsform_email").parent(".form-group").find(".form-error-message").addClass("d-none")):(e("#i_newsform_email").parent(".form-group").addClass("form-error"),e("#i_newsform_email").parent(".form-group").find(".form-error-message")[0].innerHTML="E-mailadresse er ikke gyldig.",e("#i_newsform_email").parent(".form-group").find(".form-error-message").removeClass("d-none"),t=!0);var a=e("#i_newsform_segment").val().split(",");if(e("#newsform [type='checkbox']:checked").each((function(n,t){a.push(e(t).val())})),!0===t)return!1;e.ajax({url:"https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal",type:"POST",dataType:"xml",traditional:!0,data:{i_segmentid:a,i_email:e("#i_newsform_email").val(),i_navn:"",i_firma:"",i_sprog:"DA",i_siteid:"detfaellesdesignsystem",tilmeld:"",frameld:"Frameld"},success:function(n){e("#newsletter-message .alert-text").html(e(n).text()),e("#newsletter-message").removeClass("d-none"),e(".newsletter-container .form-error-message").addClass("d-none"),e(".newsletter-container .form-error").removeClass("form-error")}}),e("#newsform [type='checkbox']").attr("checked",!1),e("#i_newsform_email").val("")}))}})}))},function(e,n,t){}]);