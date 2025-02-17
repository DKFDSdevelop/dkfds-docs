(()=>{var e=[["checkbox","tjekboks"],["radiobutton","radioknap","radio","radiobuttons","radioknapper","radioknappr","radioknaper","radioknaper"],["select","dropdown","drop down","drop-down","dropdown menu","fold ud","foldud"],["tekstfelt","felt","input","inputfelt"],["datoangivelse","dato felt","datofelt"],["vedhæft","filupload","fil upload","fil-upload"],["funktionslink","funktions-link","funktions link"],["tekstområde","textarea"],["sidenavigation","venstremenu"],["primærknap","primær knap","primary","primær"],["sekundærknap","sekundærknap","secondary","sekundær"],["trinindikator","tringuide"],["avancerede tabeller","datatables"],["skip-link","skip link"],["plug-in","plug-ins","plugin","plugins","udvidelse","udvidelser"]],t=1e3;function n(e,n,o){if(document.getElementById("search-input").value=n,document.getElementById("results-count").innerText=e.length,document.getElementById("results-text").innerText=n,e.length>0){if(0!==o){var s=o-t;document.getElementById("previous-page").href="?q="+n+"&start="+s,document.getElementById("previous-page").classList.remove("d-none")}if(e.length>o+t){var i=o+t;document.getElementById("next-page").href="?q="+n+"&start="+i,document.getElementById("next-page").classList.remove("d-none")}for(var l="",d=o;d<o+t&&null!=e[d];d++){var c=e[d];l+='<div class="page-result">',l+='<h2 class="h4 mb-0 page-title"><a href="'+c.url+'">'+c.title,"Kode"===c.subcategory?l+='&nbsp;<span class="page-category weight-normal small-text">['+c.subcategory+"]</span>":"demo"===c.layout&&(l+='&nbsp;<span class="page-category weight-normal small-text">[Eksempel]</span>'),l+="</a></h2>",c.description.length>0&&(l+='<p class="mt-0 mb-0 page-description">'+r(a(c.description,170,"..."),n)+"</p>"),l+="</div>"}document.getElementById("results").innerHTML=l}else document.getElementById("results").innerHTML='<p>Vi fandt ingen sider, der matchede din søgning.</p><p class="mt-9"><a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/99" target="_blank" class="icon-link">Fortæl os, hvad du søgte efter og hjælp os med at forbedre søgningen (via GitHub)<svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#open-in-new"></use></svg></a></p>';document.getElementById("results-container").classList.remove("d-none")}function r(e,t){return-1===e.toLowerCase().indexOf(t.toLowerCase())?e:e.replace(t,'<span class="weight-semibold">'+t+"</span>")}function a(e,t,n){if(e.length>t){var r;if((n=n||"").length>0&&(n=" "+n),e.indexOf(" ")+n.length>t)return e;r=e.length+n.length>t?t-n.length:e.length;var a=e.substring(0,r);return a=a.replace(/\s+\S*$/,""),n.length>0&&(a+=n),a}return e}function o(t){var n=[t];for(var r in e){var a=e[r];if(a.includes(t.toLowerCase())){n=a;break}}return n}function s(e,t){return!!(Array.isArray(e)&&e.indexOf(t.toLowerCase())>=0)||!Array.isArray(e)&&e.toLowerCase().indexOf(t.toLowerCase())>=0}document.addEventListener("DOMContentLoaded",(function(){var e=window.location.search.substr(1).split("&");if(0!==e.length){var t=0,r=null;for(var a in e){var i=e[a].split("=");"start"===i[0]&&(t=parseInt(i[1])),"q"===i[0]&&(r=decodeURIComponent(i[1]).split("+").join(" "))}if(null!==r&&""!==r)n(function(e){var t=[];searchIndex.forEach((function(n){var r=function(e,t){var n=!1,r=e.tags.join(",").toLowerCase().split(",");if(t.length>1){var a=t.split(" "),s=o(t);for(var i in s){var l=s[i],d=e.tags.join(",").toLowerCase().split(",");if(e.title.toLowerCase().indexOf(l.toLowerCase())>=0||e.lead.toLowerCase().indexOf(l.toLowerCase())>=0||d.indexOf(l.toLowerCase())>=0||e.content.toLowerCase().indexOf(l.toLowerCase())>=0)n=!0;else{var c=[];for(var u in a){var g=a[u].toLowerCase();g.length>2&&!n&&(e.title.toLowerCase().indexOf(g)>=0||e.lead.toLowerCase().indexOf(g)>=0||d.indexOf(g)>=0||e.content.toLowerCase().indexOf(g)>=0)&&(n=!0,c.push(g))}n&&(e.phrasesMatched=c)}if(n){e.matched=!0;break}}}else(e.title.toLowerCase().startsWith(t)||r.indexOf(t.toLowerCase())>=0)&&(e.matched=!0);return e}(n,e);r.matched&&t.push(r)}));var n=function(e,t){if(t.length>1){var n=o(t);return e.forEach((function(e){var r=0,a={title:!1};if(s(e.title,t))a.title=!0,a.titleString=!0;else for(var o in n)s(e.title,n[o])&&(a.title=!0);a.tags=!1;var i=e.tags.join(",").toLowerCase().split(",");if(s(i,t))a.tags=!0;else for(var l in n)s(i,n[l])&&(a.tags=!0);if(a.description=!1,s(e.description,t))a.description=!0,a.descriptionString=!0;else for(var d in n)s(e.description,n[d])&&(a.description=!0);if(a.subnav=!1,s(e.subnav,t))a.subnav=!0;else for(var c in n)s(e.subnav,n[c])&&(a.subnav=!0);if(a.content=!1,"demo"!==e.layout&&t.length>4)if(s(e.content,t))a.content=!0,a.contentString=!0;else for(var u in n)s(e.subnav,n[u])&&(a.subnav=!0);switch(a.category=0,e.category){case"Komponenter_category":a.category=1;break;case"Kode_category":a.category=2;break;case"Design_category":a.category=3;break;case"Kom_i_gang_category":a.category=4;break;case"Om_designsystemet_category":a.category=5}switch(a.demo=!1,"demo"===e.layout&&(a.demo=!0),a.title&&(r+=60,e.title.toLowerCase().startsWith(t)&&(r+=20)),a.tags&&(r+=55),a.description&&(r+=35),a.subnav&&(r+=20),a.content&&(r+=30,t.indexOf(" ")>=0&&(r+=20)),a.category){case 1:r+=15;break;case 2:r+=13;break;case 3:r+=8;break;case 4:r+=6;break;case 5:r+=5}a.demo&&(r+=25),e.matched=a,e.score=r})),e.sort((function(e,t){return e.score>t.score?-1:e.score<t.score?1:0}))}return e.forEach((function(e){e.score=60,e.matched.title=!0})),e.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}))}(t,e),r=[];return n.forEach((function(e){e.score>=50&&r.push(e)})),r}(r.toLowerCase()),decodeURIComponent(r),t);else n([],decodeURIComponent(r),t)}}))})();