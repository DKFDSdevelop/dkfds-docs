!function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],c=0,m=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);m.length;)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={7:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;a.push([483,0,1]),n()}({483:function(e,t,n){e.exports=n(484)},484:function(e,t,n){"use strict";n.r(t);n(485);var r=n(78),o=n(21),a=n(63),i=!1,l={},s=window.location.origin+"/krav-vaerktoej",u=window.location.origin+"/komigang/krav/",d=[{id:"Q100",path:"/anvendes-af-virksomheder/",status:!0},{id:"Q200",path:"/anvendes-af-borgere/",status:!0},{id:"Q300",path:"/obligatorisk-for-borgere/",status:!1,trueIf:[{question:"Q200",value:!0}]},{id:"Q400",path:"/besoegende-om-aaret/",status:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},{id:"Q500",path:"/en-eller-flere-loesninger-brugertest/",status:!1,trueIf:[{question:"Q400",value:!0}]},{id:"Q600",path:"/bestaaet-faellesoffentlige-brugertest/",status:!1,trueIf:[{question:"Q500",value:!1}]},{id:"Q700",path:"/transaktioner-per-aar/",status:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},{id:"Q000",path:"/resultat/",status:!0}],c=[""];c[1]={title:"Tidlig brugerinddragelse",krav:!1},c[2]={title:"Sprog",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},c[3]={title:"Konventioner for flow og funktionalitet",krav:!1},c[4]={title:"Feltvalidering",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},c[5]={title:"Personalisering",krav:!1},c[6]={title:"Understøttelse af styresystemer og browsere",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},c[7]={title:"Understøttelse af skærmstørrelser",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},c[8]={title:"Bestå den fællesoffentlige brugertest",krav:!1,trueIf:[{question:"Q600",value:!1}]},c[9]={title:"Indsamling af viden om brugernes anvendelse af digitale løsninger",krav:!1,trueIf:[{question:"Q700",value:!0}]},c[10]={title:"Anvendelse af infrastrukturkomponenter og andre komponenter",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},c[11]={title:"Genbrug af datakilder",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},c[12]={title:"Efterlevelse af aftalte arkitekturstandarder",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},c[13]={title:"Krav til løsninger, der skal på borger.dk og Virk",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},document.addEventListener("DOMContentLoaded",(function(){if(new a.Navigation,Object(r.a)(".js-tippy",{duration:0,arrow:!0}),o.a.init({onShow:function(){document.getElementsByTagName("body")[0].classList.add("modal-active")},onClose:function(e){document.getElementsByTagName("body")[0].classList.remove("modal-active"),"modal-print"==e.getAttribute("id")&&(document.getElementById("modal-print").getElementsByClassName("form-group")[0].classList.remove("form-error"),document.getElementById("solution-name-error").classList.add("d-none"),document.getElementById("solution-name-input").removeAttribute("aria-describedby"),document.getElementById("modal-print-error-summary").classList.add("d-none"))}}),document.getElementsByTagName("body")[0].classList.contains("page-resultat")){var e=document.getElementById("modal-print"),t=document.getElementById("modal-print").classList.contains("is-open");new MutationObserver((function(e){for(var n in e)if("class"==e[n].attributeName){var r=e[n].target.classList.contains("is-open");!0===t&&!1===r?(t=r,"true"===document.getElementById("print-title").getAttribute("data-print")&&(document.getElementById("print-title").setAttribute("data-print","false"),window.print())):t=r}})).observe(e,{attributes:!0})}var n=document.getElementById("back-link");null!==n&&n.addEventListener("click",B);var s=document.getElementById("back-link-mobile");null!==s&&s.addEventListener("click",B),l=E(),v(),Q(),p(),N(),w(),m(),f();var u=document.getElementById("close-tool");null!==u&&u.addEventListener("click",S);var d=document.getElementsByClassName("close-tool");0!==d.length&&d[0].addEventListener("click",S),window.onbeforeunload=function(e){var t=!0;if(i)t=!1;else{var n=document.activeElement;void 0===n.href||"Redigér"!==n.innerText&&"Tilbage"!==n.innerText&&"https://github.com/detfaellesdesignsystem/dkfds-components/issues/108"!==n.getAttribute("href")&&-1===n.getAttribute("href").indexOf("mailto:")||(t=!1)}if(t)return(e=e||window.event)&&(e.returnValue="Sure?"),t=!0,"Sure?"}}));var m=function(){var e=document.getElementById("print-result-solution");null!==e&&e.addEventListener("click",(function(){var e=document.getElementById("solution-name-input").value;""!==e?(document.getElementById("print-title").innerText='Fælles aftalte krav som "'+e+'" skal efterleve',document.getElementById("print-title").setAttribute("data-print","true"),document.getElementById("result-container").getElementsByTagName("h1")[0].classList.add("d-print-none"),document.getElementById("print-title").classList.add("d-print-block"),o.a.close("modal-print")):(document.getElementById("print-title").setAttribute("data-print","false"),document.getElementById("result-container").getElementsByTagName("h1")[0].classList.remove("d-print-none"),document.getElementById("print-title").classList.remove("d-print-block"),o.a.close("modal-print"))}))},f=function(){var e=document.getElementById("start-over");null!==e&&e.addEventListener("click",O)},g=function(e){return d.findIndex((function(t){return t.id===e}))},v=function(){for(var e=0;e<d.length;e++)if(void 0!==d[e].trueIf){for(var t=!1,n=0;n<d[e].trueIf.length;n++){var r=d[e].trueIf[n];!0===d[g(r.question)].status&&void 0!==l[r.question]&&l[r.question]===r.value&&(t=!0)}d[e].status=t}},p=function(){var e=document.getElementsByTagName("form");if(e.length>0){var t=e[0].id.split("-")[1];e[0].addEventListener("submit",(function(e){e.preventDefault(),y(t)}),!1)}},y=function(e){h()&&(l[e]="1"===document.querySelector('input[name="radio"]:checked').value,v(),I(),k(b(e).path))},b=function(e){for(var t=null,n=g(e)+1;n<d.length;n++)if(!0===d[n].status){t=d[n];break}return t},E=function(){var e=localStorage.getItem("reqTool");return null===e?{}:JSON.parse(e)},I=function(){!function(){var e={};for(var t in l)!0===d[g(t)].status&&(e[t]=l[t]);l=e}(),localStorage.setItem("reqTool",JSON.stringify(l))},h=function(){if(null===document.querySelector('input[name="radio"]:checked')){return document.getElementsByClassName("form-group")[0].classList.add("form-error"),document.getElementById("error-message").innerText="Vælg venligst Ja eller Nej",document.getElementById("error-message").classList.remove("d-none"),document.getElementById("error-summary").getElementsByClassName("nobullet-list")[0].innerHTML='<li><a href="#radio-yes" class="function-link">Vælg venligst Ja eller Nej</a></li>',document.getElementById("error-summary").classList.remove("d-none"),!1}return document.getElementsByClassName("form-group")[0].classList.remove("form-error"),document.getElementById("error-message").classList.add("d-none"),document.getElementById("error-message").innerText="",document.getElementById("error-summary").getElementsByClassName("nobullet-list")[0].innerHTML="",document.getElementById("error-summary").classList.add("d-none"),!0},k=function(e){i=!0,window.location.href=s+e},B=function(){var e=T(),t=q(e);k(t.path)},q=function e(t){var n=g(t),r=d[n-1];return!0===r.status?r:e(r.id)},w=function(){var e=function(){var e=[];return d.forEach((function(t){!0===t.status&&"Q000"!==t.id&&void 0===l[t.id]&&(!0,e.push(t))})),e}();if(0===e.length){if(null!==document.querySelector("body.page-resultat")){if(0===Object.getOwnPropertyNames(E()).length)return void(window.location.href=u);for(var t=document.getElementById("summary").getElementsByTagName("tr"),n=0;n<t.length;n++){var r=t[n].id,o=l[r];void 0!==o?(t[n].querySelector(".value").innerText=!0===o?"Ja":"Nej",t[n].classList.remove("d-none")):t[n].classList.add("d-none")}for(var a=document.getElementById("resultat").getElementsByTagName("tr"),c=0;c<a.length;c++){var m=c+1,f=a[c].getElementsByTagName("label")[0];L(m)?(f.innerText="Krav",f.classList.add("badge-warning")):(f.innerText="Anbefaling",f.classList.add("badge-info"))}document.getElementById("result-container").classList.remove("d-none")}}else null!==document.getElementById("error-container")&&(i=!0,document.getElementById("continue-questionnaire-link").setAttribute("href",s+e[0].path),document.getElementById("error-container").classList.remove("d-none"))},L=function(e){if(void 0!==c[e].trueIf)for(var t=0;t<c[e].trueIf.length;t++){if(l[c[e].trueIf[t].question]===c[e].trueIf[t].value)return!0}return!1},Q=function(){var e=document.getElementsByTagName("form");if(e.length>0){var t=e[0].id.split("-")[1],n=l[t];void 0!==n&&(!0===n?(document.getElementById("radio-yes").checked=!0,document.getElementById("radio-no").checked=!1):(document.getElementById("radio-yes").checked=!1,document.getElementById("radio-no").checked=!0))}},T=function(){var e=document.getElementsByTagName("form");return e.length>0&&e[0].id.split("-")[1]},N=function(){!1!==T()&&!1===d[g(T())].status&&S()},O=function(){localStorage.removeItem("reqTool"),k(d[0].path)},S=function(){localStorage.removeItem("reqTool"),i=!0,-1===window.location.href.indexOf("krav-vaerktoej/resultat/")&&(i=!1),window.location.href=u}}});