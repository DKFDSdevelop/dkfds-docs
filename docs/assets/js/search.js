!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/",n(n.s=22)}({22:function(e,t,n){e.exports=n(23)},23:function(e,t){var n=[["checkbox","tjekboks"],["radiobutton","radioknap","radio","radiobuttons","radioknapper","radioknappr","radioknaper","radioknaper"],["select","dropdown","drop down","drop-down","dropdown menu","fold ud","foldud"],["tekstfelt","felt","input","inputfelt"],["datoangivelse","dato felt","datofelt"],["vedhæft","filupload","fil upload","fil-upload"],["funktionslink","funktions-link","funktions link"],["tekstområde","textarea"],["sidenavigation","venstremenu"],["primærknap","primær knap","primary","primær"],["sekundærknap","sekundærknap","secondary","sekundær"],["trinindikator","tringuide"],["avancerede tabeller","datatables"],["skip-link","skip link"],["plug-in","plug-ins","plugin","plugins","udvidelse","udvidelser"]];function r(e,t,n){if(document.getElementById("search-input").value=t,document.getElementById("results-count").innerText=e.length,document.getElementById("results-text").innerText=t,e.length>0){if(0!==n){var r=n-1e3;document.getElementById("previous-page").href="?q="+t+"&start="+r,document.getElementById("previous-page").classList.remove("d-none")}if(e.length>n+1e3){var s=n+1e3;document.getElementById("next-page").href="?q="+t+"&start="+s,document.getElementById("next-page").classList.remove("d-none")}for(var i="",l=n;l<n+1e3&&null!=e[l];l++){var d=e[l];i+='<div class="page-result">',i+='<h2 class="h4 mb-0 page-title"><a href="'+d.url+'" class="search-link">'+d.title,"Kode"===d.subcategory?i+='&nbsp;<span class="page-category weight-normal small-text">['+d.subcategory+"]</span>":"demo"===d.layout&&(i+='&nbsp;<span class="page-category weight-normal small-text">[Eksempel]</span>'),i+="</a></h2>",d.description.length>0&&(i+='<p class="mt-0 mb-0 page-description">'+o(a(d.description,170,"..."),t)+"</p>"),i+="</div>"}document.getElementById("results").innerHTML=i}else document.getElementById("results").innerHTML='<p>Vi fandt ingen sider, der matchede din søgning.</p><p class="mt-9"><a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/99" target="_blank" class="icon-link">Fortæl os, hvad du søgte efter og hjælp os med at forbedre søgningen (via Github)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></p>';document.getElementById("results-container").classList.remove("d-none")}function o(e,t){return-1===e.toLowerCase().indexOf(t.toLowerCase())?e:e.replace(t,'<span class="weight-semibold">'+t+"</span>")}function a(e,t,n){if(e.length>t){var r;if((n=n||"").length>0&&(n=" "+n),e.indexOf(" ")+n.length>t)return e;r=e.length+n.length>t?t-n.length:e.length;var o=e.substring(0,r);return o=o.replace(/\s+\S*$/,""),n.length>0&&(o+=n),o}return e}function s(e){var t=[e];for(var r in n){var o=n[r];if(o.includes(e.toLowerCase())){t=o;break}}return t}function i(e,t){return!!(Array.isArray(e)&&e.indexOf(t.toLowerCase())>=0)||!Array.isArray(e)&&e.toLowerCase().indexOf(t.toLowerCase())>=0}document.addEventListener("DOMContentLoaded",(function(){var e=window.location.search.substr(1).split("&");if(0!==e.length){var t=0,n=null;for(var o in e){var a=e[o].split("=");"start"===a[0]&&(t=parseInt(a[1])),"q"===a[0]&&(n=decodeURIComponent(a[1]).split("+").join(" "))}if(null!==n&&""!==n)r(function(e){var t=[];searchIndex.forEach((function(n){var r=function(e,t){var n=!1;if(t.length>1){var r=t.split(" "),o=s(t);for(var a in o){var i=o[a],l=e.tags.join(",").toLowerCase().split(",");if(e.title.toLowerCase().indexOf(i.toLowerCase())>=0||e.lead.toLowerCase().indexOf(i.toLowerCase())>=0||l.indexOf(i.toLowerCase())>=0||e.content.toLowerCase().indexOf(i.toLowerCase())>=0)n=!0;else{var d=[];for(var c in r){var u=r[c].toLowerCase();u.length>2&&!n&&(e.title.toLowerCase().indexOf(u)>=0||e.lead.toLowerCase().indexOf(u)>=0||l.indexOf(u)>=0||e.content.toLowerCase().indexOf(u)>=0)&&(n=!0,d.push(u))}n&&(e.phrasesMatched=d)}if(n){e.matched=!0;break}}}else e.title.toLowerCase().startsWith(t)&&(e.matched=!0);return e}(n,e);r.matched&&t.push(r)}));var n=function(e,t){if(t.length>1){var n=s(t);return e.forEach((function(e){var r=0,o={title:!1};if(i(e.title,t))o.title=!0,o.titleString=!0;else for(var a in n)i(e.title,n[a])&&(o.title=!0);o.tags=!1;var s=e.tags.join(",").toLowerCase().split(",");if(i(s,t))o.tags=!0;else for(var l in n)i(s,n[l])&&(o.tags=!0);if(o.description=!1,i(e.description,t))o.description=!0,o.descriptionString=!0;else for(var d in n)i(e.description,n[d])&&(o.description=!0);if(o.subnav=!1,i(e.subnav,t))o.subnav=!0;else for(var c in n)i(e.subnav,n[c])&&(o.subnav=!0);if(o.content=!1,"demo"!==e.layout&&t.length>4)if(i(e.content,t))o.content=!0,o.contentString=!0;else for(var u in n)i(e.subnav,n[u])&&(o.subnav=!0);switch(o.category=0,e.category){case"Komponenter_category":o.category=1;break;case"Kode_category":o.category=2;break;case"Design_category":o.category=3;break;case"Kom_i_gang_category":o.category=4;break;case"Om_designsystemet_category":o.category=5}switch(o.demo=!1,"demo"===e.layout&&(o.demo=!0),o.title&&(r+=60,e.title.toLowerCase().startsWith(t)&&(r+=20)),o.tags&&(r+=55),o.description&&(r+=35),o.subnav&&(r+=20),o.content&&(r+=30,t.indexOf(" ")>=0&&(r+=20)),o.category){case 1:r+=15;break;case 2:r+=13;break;case 3:r+=8;break;case 4:r+=6;break;case 5:r+=5}o.demo&&(r+=25),e.matched=o,e.score=r})),e.sort((function(e,t){return e.score>t.score?-1:e.score<t.score?1:0}))}return e.forEach((function(e){e.score=60,e.matched.title=!0})),e.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}))}(t,e);console.log("sortedResult",n);var r=[];return n.forEach((function(e){e.score>=50&&r.push(e)})),r}(n.toLowerCase()),decodeURIComponent(n),t);else r([],decodeURIComponent(n),t)}}))}});