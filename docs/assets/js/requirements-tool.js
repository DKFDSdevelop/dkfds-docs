!function(e){function t(t){for(var r,a,l=t[0],s=t[1],u=t[2],c=0,m=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);m.length;)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={6:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;i.push([354,0]),n()}({354:function(e,t,n){e.exports=n(355)},355:function(e,t,n){"use strict";n.r(t);var r=n(76),o=(n(356),n(25)),i=!1;n(78);var a={},l=window.location.origin+"/krav-vaerktoej",s=(window.location.origin,[{id:"Q100",path:"/anvendes-af-virksomheder/",status:!0},{id:"Q200",path:"/anvendes-af-borgere/",status:!0},{id:"Q300",path:"/obligatorisk-for-borgere/",status:!1,trueIf:[{question:"Q200",value:!0}]},{id:"Q400",path:"/besoegende-om-aaret/",status:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},{id:"Q500",path:"/en-eller-flere-loesninger-brugertest/",status:!1,trueIf:[{question:"Q400",value:!0}]},{id:"Q600",path:"/bestaaet-faellesoffentlige-brugertest/",status:!1,trueIf:[{question:"Q500",value:!1}]},{id:"Q700",path:"/transaktioner-per-aar/",status:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},{id:"Q000",path:"/resultat/",status:!0}]),u=[""];u[1]={title:"Tidlig brugerinddragelse",krav:!1},u[2]={title:"Sprog",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},u[3]={title:"Konventioner for flow og funktionalitet",krav:!1},u[4]={title:"Feltvalidering",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},u[5]={title:"Personalisering",krav:!1},u[6]={title:"Understøttelse af styresystemer og browsere",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},u[7]={title:"Understøttelse af skærmstørrelser",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},u[8]={title:"Bestå den fællesoffentlige brugertest",krav:!1,trueIf:[{question:"Q600",value:!1}]},u[9]={title:"Indsamling af viden om brugernes anvendelse af digitale løsninger",krav:!1,trueIf:[{question:"Q700",value:!0}]},u[10]={title:"Anvendelse af infrastrukturkomponenter og andre komponenter",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},u[11]={title:"Genbrug af datakilder",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},u[12]={title:"Efterlevelse af aftalte arkitekturstandarder",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},u[13]={title:"Krav til løsninger, der skal på borger.dk og Virk",krav:!1,trueIf:[{question:"Q100",value:!0},{question:"Q300",value:!0}]},document.addEventListener("DOMContentLoaded",(function(){Object(r.a)(".js-tippy",{duration:0,arrow:!0}),o.a.init({onShow:function(){document.getElementsByTagName("body")[0].classList.add("modal-active")},onClose:function(){document.getElementsByTagName("body")[0].classList.remove("modal-active")}});var e=document.getElementById("back-link");null!==e&&e.addEventListener("click",E),a=p(),f(),w(),g(),L(),B(),d(),c();var t=document.getElementById("close-tool");null!==t&&t.addEventListener("click",x);var n=document.getElementsByClassName("close-tool");0!==n.length&&n[0].addEventListener("click",x);var l=document.getElementsByClassName("print-btn");0!==l.length&&l[0].addEventListener("click",(function(){window.print()})),window.onbeforeunload=function(e){var t=!0;if(i)t=!1;else{var n=document.activeElement;void 0===n.href||"Redigér"!==n.innerText&&"Tilbage"!==n.innerText&&-1===n.getAttribute("href").indexOf("mailto:")||(t=!1)}if(t)return(e=e||window.event)&&(e.returnValue="Sure?"),t=!0,"Sure?"}}));var d=function(){var e=document.getElementById("print-btn");null!==e&&e.addEventListener("click",(function(){window.print()}))},c=function(){var e=document.getElementById("start-over");null!==e&&e.addEventListener("click",Q)},m=function(e){return s.findIndex((function(t){return t.id===e}))},f=function(){for(var e=0;e<s.length;e++)if(void 0!==s[e].trueIf){for(var t=!1,n=0;n<s[e].trueIf.length;n++){var r=s[e].trueIf[n];!0===s[m(r.question)].status&&void 0!==a[r.question]&&a[r.question]===r.value&&(t=!0)}s[e].status=t}},g=function(){var e=document.getElementsByTagName("form");if(e.length>0){var t=e[0].id.split("-")[1];e[0].addEventListener("submit",(function(e){e.preventDefault(),v(t)}),!1)}},v=function(e){k()&&(a[e]="1"===document.querySelector('input[name="radio"]:checked').value,f(),y(),b(h(e).path))},h=function(e){for(var t=null,n=m(e)+1;n<s.length;n++)if(!0===s[n].status){t=s[n];break}return t},p=function(){var e=localStorage.getItem("reqTool");return null===e?{}:JSON.parse(e)},y=function(){!function(){var e={};for(var t in a)!0===s[m(t)].status&&(e[t]=a[t]);a=e}(),localStorage.setItem("reqTool",JSON.stringify(a))},k=function(){return null===document.querySelector('input[name="radio"]:checked')?(document.getElementsByClassName("form-group")[0].classList.add("form-error"),document.getElementById("error-message").innerText="Vælg venligst Ja eller Nej",document.getElementById("error-message").classList.remove("d-none"),!1):(document.getElementsByClassName("form-group")[0].classList.remove("form-error"),document.getElementById("error-message").classList.add("d-none"),document.getElementById("error-message").innerText="",!0)},b=function(e){i=!0,window.location.href=l+e},E=function(){var e=q(),t=I(e);b(t.path)},I=function e(t){var n=m(t),r=s[n-1];return!0===r.status?r:e(r.id)},B=function(){var e=function(){var e=[];return s.forEach((function(t){!0===t.status&&"Q000"!==t.id&&void 0===a[t.id]&&(!0,e.push(t))})),e}();if(0===e.length){if(null!==document.querySelector("body.page-resultat")){if(0===Object.getOwnPropertyNames(p()).length)return void b("");for(var t=document.getElementById("summary").getElementsByTagName("tr"),n=0;n<t.length;n++){var r=t[n].id,o=a[r];void 0!==o?(t[n].querySelector(".value").innerText=!0===o?"Ja":"Nej",t[n].classList.remove("d-none")):t[n].classList.add("d-none")}for(var u=document.getElementById("resultat").getElementsByTagName("tr"),d=0;d<u.length;d++){var c=d+1,m=u[d].getElementsByTagName("label")[0];T(c)?(m.innerText="Krav",m.classList.add("badge-warning")):(m.innerText="Anbefaling",m.classList.add("badge-info"))}document.getElementById("result-container").classList.remove("d-none")}}else null!==document.getElementById("error-container")&&(i=!0,document.getElementById("continue-questionnaire-link").setAttribute("href",l+e[0].path),document.getElementById("error-container").classList.remove("d-none"))},T=function(e){if(void 0!==u[e].trueIf)for(var t=0;t<u[e].trueIf.length;t++){if(a[u[e].trueIf[t].question]===u[e].trueIf[t].value)return!0}return!1},w=function(){var e=document.getElementsByTagName("form");if(e.length>0){var t=e[0].id.split("-")[1],n=a[t];void 0!==n&&(!0===n?(document.getElementById("radio-yes").checked=!0,document.getElementById("radio-no").checked=!1):(document.getElementById("radio-yes").checked=!1,document.getElementById("radio-no").checked=!0))}},q=function(){var e=document.getElementsByTagName("form");return e.length>0&&e[0].id.split("-")[1]},L=function(){!1!==q()&&!1===s[m(q())].status&&x()},Q=function(){localStorage.removeItem("reqTool"),b(s[0].path)},x=function(){localStorage.removeItem("reqTool"),i=!0,-1===window.location.href.indexOf("krav-vaerktoej/resultat/")&&(i=!1),window.location.href=window.location.origin+"/komigang/krav/"}},78:function(e,t,n){"use strict";n.r(t);n(0);var r=["virk","borgerdk"],o=["styleguide_virkdk","styleguide_borgerdk"];document.addEventListener("DOMContentLoaded",(function(){q("cookie",y()),s(),u(),a(),l(),m(),T(),I(),L(),i()}));var i=function(){var e=document.getElementById("designsystem-illustration");null!==e&&("virk"===y()?e.setAttribute("src","/assets/img/descriptionimages/Forside_illu_virk.svg"):"borgerdk"===y()?e.setAttribute("src","/assets/img/descriptionimages/Forside_illu_borger.svg"):e.parentNode.removeChild(e))},a=function(){var e=window.location.search.substr(1);if(""!==e){e=e.split("&");for(var t=0;t<e.length;t++){var n=e[t].split("="),o=n[0],i=n[1];if("theme"===o&&r.indexOf(i)>=0)return void h(i)}}},l=function(){p()||(q("Cookie was not set",y()),v())},s=function(){if(p()){var e=y();r.indexOf(e)<0&&(b("theme"),q("cookie was deleted:",e))}},u=function(){var e=document.getElementById("themeAlert");if(!p()&&null!==e){g();for(var t=e.getElementsByClassName("alert-close"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(){f()}));document.getElementById("borgerdkThemeBtn").addEventListener("click",c),document.getElementById("virkThemeBtn").addEventListener("click",d)}},d=function(){h(r[0]),f(),location.reload()},c=function(){h(r[1]),f(),location.reload()},m=function(){var e=y();q("stylesheet:",e);var t=r.indexOf(e),n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href="/assets/style/"+o[t]+".css",document.getElementsByTagName("head")[0].appendChild(n)},f=function(){null!==document.getElementById("themeAlert")&&document.getElementById("themeAlert").classList.add("d-none")},g=function(){null!==document.getElementById("themeAlert")&&document.getElementById("themeAlert").classList.remove("d-none")},v=function(){var e=r[Math.floor(Math.random()*r.length)];h(e)},h=function(e){return r.indexOf(e)>=0&&(q("setting cookie",e),k("theme",e,365),!0)},p=function(){return null!==E("theme")},y=function(){return E("theme")},k=function(e,t,n){var r=e+"="+encodeURIComponent(t);if("number"==typeof n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),r+=";expires="+o.toUTCString(),q("Setting cookie",r+=";path=/"),document.cookie=r}},b=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"},E=function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(e===r[0].trim())return decodeURIComponent(r[1])}return null},I=function(){var e=document.getElementById("themeSelector");null!=e&&(B(),e.addEventListener("change",(function(e){var t=document.getElementById("themeSelector").value;r.indexOf(t)>=0?(h(t),window.themeChangeProcess=!0,location.reload()):alert("The selected theme does not exist")})))},B=function(){for(var e=document.getElementById("themeSelector"),t=e.getElementsByTagName("option"),n=y(),r=0;r<t.length;r++)n===t[r].value&&(e.selectedIndex=r)},T=function(){if(null!==document.getElementById("changeTheme")){var e="";switch(y()){case"virk":e="Borger.dk";break;case"borgerdk":e="Virk"}var t="Skift til "+e+" tema";document.getElementById("changeThemeText").innerText=t,document.getElementById("changeTheme").addEventListener("click",w)}},w=function(){var e=y();"virk"===e?c():"borgerdk"===e&&d()},q=function(e,t){0},L=function(){if(document.getElementsByTagName("body")[0].classList.contains("page-selvbetjeningsløsninger")||document.getElementsByTagName("body")[0].classList.contains("page-opsummeringsside")||document.getElementsByTagName("body")[0].classList.contains("page-kvittering")){for(var e=document.getElementsByClassName("screenshot"),t=0;t<e.length;t++){var n=e[t].getAttribute("href").split("/"),r=y()+"-"+n[n.length-2]+".PNG",o='<img src="/assets/img/examples_pages/'+n[n.length-3]+"/"+r+'" alt="Skærmbillede af '+e[t].getAttribute("title")+'" class="w-percent-100 d-block" />';e[t].innerHTML=o}var i=document.getElementsByClassName("screenshot-gallery");if(0!==i.length)for(var a=0;a<i.length;a++)i[a].classList.remove("d-none")}if(document.getElementsByTagName("body")[0].classList.contains("page-footers")||document.getElementsByTagName("body")[0].classList.contains("page-headers")||document.getElementsByTagName("body")[0].classList.contains("page-cookiemeddelelse"))for(var l=document.querySelectorAll(".component-example .screenshot"),s=0;s<l.length;s++){var u=l[s].getAttribute("href").split("/"),d=u[u.length-2],c='<img src="/assets/img/examples/'+(y()+"-"+d+".png")+'" alt="Skærmbillede af '+l[s].getAttribute("title")+'" class="d-block" />';l[s].innerHTML=c}}}});