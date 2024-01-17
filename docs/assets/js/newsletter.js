(()=>{"use strict";function e(e){return new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(e)}function t(e){"NAV"===e.parentNode.nodeName?e.parentNode.setAttribute("hidden",""):e.setAttribute("hidden",""),e.classList.remove("alert-success"),e.classList.remove("alert-warning"),e.classList.remove("alert-error"),e.querySelector(".alert-heading").innerHTML="",e.querySelector(".alert-text").innerHTML="",document.getElementById("newsletter-emailaddress").querySelector(".form-input").removeAttribute("aria-describedby"),document.querySelector("body").classList.contains("page-nyhedsbrev")&&document.getElementById("samtykke-check").removeAttribute("aria-describedby")}document.addEventListener("DOMContentLoaded",(function(){var r=document.querySelector("body").classList.contains("page-nyhedsbrev"),n=document.querySelector("body").classList.contains("page-afmeld-nyhedsbrev"),s=document.getElementById("newsletter-alert"),a=document.getElementById("newsletter-alert-nav");if((r||n)&&(document.getElementById("newsletter_lists").setAttribute("name","lists"),document.getElementById("newsletter_lists").value="82268",document.getElementById("newsletter_language").setAttribute("name","language_code"),document.getElementById("newsletter_language").value="da",document.getElementById("i_newsform_email").setAttribute("name","email_address")),r&&(document.getElementById("newsletter_action").setAttribute("name","action"),document.getElementById("newsletter_action").value="subscribe",document.getElementById("samtykke-check").setAttribute("name","data_Samtykke"),document.getElementById("samtykke-check").value="Ja"),n&&(document.getElementById("newsletter_action").setAttribute("name","action"),document.getElementById("newsletter_action").value="unsubscribe"),r||n){if(document.getElementById("newsform").addEventListener("submit",(function(e){e.preventDefault()})),""!==window.location.search){for(var l=[],d=window.location.search.substring(1).split("&"),i=d.length-1;i>-1;i--){var o=d[i].split("=");if("error_codes"===o[0]){l=o[1].split("%3B");break}}s.classList.add("alert-error"),r?s.querySelector(".alert-heading").innerHTML="Tilmelding fejlede":n&&(s.querySelector(".alert-heading").innerHTML="Afmelding fejlede"),l.includes("11")&&r?s.querySelector(".alert-text").innerHTML='<p>Den indtastede adresse er allerede tilmeldt nyhedsbrevet.</p><p class="mb-0">Du er velkommen til at <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis du har spørgsmål.</p>':l.includes("14")&&n?s.querySelector(".alert-text").innerHTML='<p>Den indtastede adresse er ikke tilmeldt nyhedsbrevet og kan derfor ikke afmeldes.</p><p class="mb-0">Du er velkommen til at <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis du har spørgsmål.</p>':r?s.querySelector(".alert-text").innerHTML='<p>Det var ikke muligt at tilmelde den indtastede e-mailadresse. Tjek at du har indtastet den korrekte e-mailadresse og prøv at tilmelde igen.</p><p class="mb-0">Hvis problemet fortsætter, så <a href="mailto:FDS@erst.dk">send en e-mail til FDS-teamet</a> og oplys fejlkoden <strong>error_codes_'+l.toString()+"</strong> samt den <strong>e-mailadresse, du forsøgte at tilmelde</strong>. Vi beklager ulejligheden.</p>":n&&(s.querySelector(".alert-text").innerHTML='<p>Det var ikke muligt at afmelde den indtastede e-mailadresse. Tjek at du har indtastet den korrekte e-mailadresse og prøv at afmelde igen.</p><p class="mb-0">Hvis problemet fortsætter, så <a href="mailto:FDS@erst.dk">send en e-mail til FDS-teamet</a> og oplys fejlkoden <strong>error_codes_'+l.toString()+"</strong> samt den <strong>e-mailadresse, du forsøgte at afmelde</strong>. Vi beklager ulejligheden.</p>"),s.removeAttribute("hidden")}document.getElementById("newsletter-submit").addEventListener("click",(function(l){var d="",i=document.getElementById("newsletter-emailaddress"),o=document.getElementById("i_newsform_email").value,m=i.querySelector(".form-error-message");if(t(s),t(a),e(o))i.classList.remove("form-error"),m.innerHTML="",m.classList.add("d-none");else{var c="E-mailadressen er ikke gyldig";i.classList.add("form-error"),m.innerHTML='<span class="sr-only">Fejl: </span>'+c,i.querySelector(".form-input").setAttribute("aria-describedby","i_newsform_email-error"),m.classList.remove("d-none"),d+='<li><a class="function-link" href="#i_newsform_email">'+c+"</a></li>"}if(r){var u=document.getElementById("samtykke-group");if(document.getElementById("samtykke-check").checked)u.classList.remove("form-error"),u.querySelector(".form-error-message").innerHTML="",u.querySelector(".form-error-message").classList.add("d-none");else{var g="Giv os venligst dit samtykke, så vi må opbevare din e-mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsbrevet.";u.classList.add("form-error"),u.querySelector(".form-error-message").innerHTML='<span class="sr-only">Fejl: </span>'+g,document.getElementById("samtykke-check").setAttribute("aria-describedby","samtykke-check-error"),u.querySelector(".form-error-message").classList.remove("d-none"),d+='<li><a class="function-link" href="#samtykke-check">'+g+"</a></li>"}}""!==d?(a.classList.add("alert-error"),a.querySelector(".alert-heading").innerHTML="Der er problemer",a.querySelector(".alert-text").innerHTML='<ul class="nobullet-list mt-0 mb-0">'+d+"</ul>",a.parentNode.removeAttribute("hidden"),e(o)?r&&document.getElementById("samtykke-check").focus():document.getElementById("i_newsform_email").focus()):(r?(document.getElementById("success_url").value=window.location.origin+"/faellesskab/nyhedsmail/tilmeldt/",document.getElementById("failure_url").value=window.location.origin+"/faellesskab/nyhedsmail/"):n&&(document.getElementById("success_url").value=window.location.origin+"/faellesskab/nyhedsmail/afmeldt/",document.getElementById("failure_url").value=window.location.origin+"/faellesskab/nyhedsmail/afmeld/"),t(s),t(a),i.classList.remove("form-error"),m.innerHTML="",m.classList.add("d-none"),r&&(document.getElementById("samtykke-group").classList.remove("form-error"),document.getElementById("samtykke-group").querySelector(".form-error-message").innerHTML="",document.getElementById("samtykke-group").querySelector(".form-error-message").classList.add("d-none")),document.getElementById("newsform").submit())}))}}))})();