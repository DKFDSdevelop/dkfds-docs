!function(e){function t(t){for(var o,i,a=t[0],l=t[1],c=t[2],u=0,m=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);m.length;)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={8:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;s.push([6,1]),n()}({6:function(e,t,n){e.exports=n(7)},7:function(e,t,n){"use strict";n.r(t);n(0);var o=["virk","borgerdk"],r=["styleguide_virkdk","styleguide_borgerdk"];document.addEventListener("DOMContentLoaded",(function(){w("test","test"),w("cookie",y()),l(),c(),i(),a(),m(),L(),B(),N(),s()}));var s=function(){var e=document.getElementById("designsystem-illustration");null!==e&&("virk"===y()?e.setAttribute("src","/assets/img/descriptionimages/Forside_illu_virk.svg"):"borgerdk"===y()?e.setAttribute("src","/assets/img/descriptionimages/Forside_illu_borger.svg"):e.parentNode.removeChild(e))},i=function(){var e=window.location.search.substr(1);if(""!==e){e=e.split("&");for(var t=0;t<e.length;t++){var n=e[t].split("="),r=n[0],s=n[1];if("theme"===r&&o.indexOf(s)>=0)return void h(s)}}},a=function(){v()||(w("Cookie was not set",y()),p())},l=function(){if(v()){var e=y();o.indexOf(e)<0&&(k("theme"),w("cookie was deleted:",e))}},c=function(){var e=document.getElementById("themeAlert");if(!v()&&null!==e){f();for(var t=e.getElementsByClassName("alert-close"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(){g()}));document.getElementById("borgerdkThemeBtn").addEventListener("click",u),document.getElementById("virkThemeBtn").addEventListener("click",d)}},d=function(){h(o[0]),g(),location.reload()},u=function(){h(o[1]),g(),location.reload()},m=function(){var e=y();w("stylesheet:",e),null===e&&(e="virk");var t=o.indexOf(e),n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href="/assets/style/"+r[t]+".css",document.getElementsByTagName("head")[0].appendChild(n)},g=function(){null!==document.getElementById("themeAlert")&&document.getElementById("themeAlert").classList.add("d-none")},f=function(){null!==document.getElementById("themeAlert")&&document.getElementById("themeAlert").classList.remove("d-none")},p=function(){var e=o[Math.floor(Math.random()*o.length)];h(e)},h=function(e){return o.indexOf(e)>=0&&(w("setting cookie",e),b("theme",e,365),!0)},v=function(){return null!==E("theme")},y=function(){return E("theme")},b=function(e,t,n){var o=e+"="+encodeURIComponent(t);if("number"==typeof n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),o+=";expires="+r.toUTCString(),w("Setting cookie",o+=";path=/"),document.cookie=o}},k=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"},E=function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var o=t[n].split("=");if(e===o[0].trim())return decodeURIComponent(o[1])}return null},B=function(){var e=document.getElementById("themeselector");null!=e&&(T(),e.addEventListener("change",(function(e){var t=document.getElementById("themeselector").value;o.indexOf(t)>=0?(h(t),window.themeChangeProcess=!0,location.reload()):alert("The selected theme does not exist")})))},T=function(){for(var e=document.getElementById("themeselector"),t=e.getElementsByTagName("option"),n=y(),o=0;o<t.length;o++)n===t[o].value&&(e.selectedIndex=o)},L=function(){if(null!==document.getElementById("changeTheme")){var e="";switch(y()){case"virk":e="Borger.dk";break;case"borgerdk":e="Virk"}var t="Skift til "+e+" tema";document.getElementById("changeThemeText").innerText=t,document.getElementById("changeTheme").addEventListener("click",x)}},x=function(){var e=y();"virk"===e?u():"borgerdk"===e&&d()},w=function(e,t){0},N=function(){if(document.getElementsByTagName("body")[0].classList.contains("page-selvbetjeningsløsninger")||document.getElementsByTagName("body")[0].classList.contains("page-dashboard")||document.getElementsByTagName("body")[0].classList.contains("page-patterns")||document.getElementsByTagName("body")[0].classList.contains("page-templates")||document.getElementsByTagName("body")[0].classList.contains("page-opsummeringsside")||document.getElementsByTagName("body")[0].classList.contains("page-kvittering")){for(var e=document.getElementsByClassName("screenshot"),t=0;t<e.length;t++){var n=e[t].getAttribute("href").split("?")[0].split("/"),o=y()+"-"+n[n.length-2]+".PNG",r='<img src="/assets/img/examples_pages/'+n[3]+"/"+o+'" alt="Skærmbillede af '+e[t].getAttribute("title")+'" class="w-percent-100 d-block" />';e[t].innerHTML=r}var s=document.getElementsByClassName("screenshot-gallery");if(0!==s.length)for(var i=0;i<s.length;i++)s[i].classList.remove("d-none")}if(document.getElementsByTagName("body")[0].classList.contains("page-overskrifter")||document.getElementsByTagName("body")[0].classList.contains("page-sprogvælger")||document.getElementsByTagName("body")[0].classList.contains("page-footers")||document.getElementsByTagName("body")[0].classList.contains("page-headers")||document.getElementsByTagName("body")[0].classList.contains("page-cookiemeddelelse"))for(var a=document.querySelectorAll(".screenshot"),l=0;l<a.length;l++){var c=a[l].getAttribute("href").split("?")[0].split("/"),d=c[c.length-2],u='<img src="/assets/img/examples/'+(y()+"-"+d+".png")+'" alt="Skærmbillede af '+a[l].getAttribute("title")+'" class="d-block" />';a[l].innerHTML=u}}}});