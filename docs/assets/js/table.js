(()=>{var e=[{affaldstype:"Dagrenovation",farvekode:"Grøn",beskrivelse:"Madaffald, samt papir, pap eller plastik der ikke kan genanvendes, fordi der er madrester eller andet snask på.",hvorenderdet:"Alt det affald, du smider ud i din primære skraldespand, som er dagrenovationen, bliver hentet og kørt på forbrændingen."},{affaldstype:"Bioaffald og kompost",farvekode:"Beige",beskrivelse:"Alt madaffald uden fødevareemballage.",hvorenderdet:"Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld."},{affaldstype:"Glas",farvekode:"Hvid",beskrivelse:"Alle typer glas og flasker.",hvorenderdet:"De hele vinflasker rengøres og genbruges af vinhuse, mens glasskårene bliver smeltet om til nyt glas."},{affaldstype:"Elektronik",farvekode:"Orange",beskrivelse:"Genstande der har brugt strøm.",hvorenderdet:"Det elektroniske affald bliver typisk kørt til et demonteringsanlæg, hvor det bliver skilt ad, så de forskellige dele kan genanvendes separat."}];function t(e,t){var r="sort-table-none";"ascending"===t?r="sort-table-ascending":"descending"===t&&(r="sort-table-descending"),e.getElementsByTagName("svg")[0].getElementsByTagName("use")[0].setAttribute("href","#"+r)}function r(e,t,r){var a=(e=e.toLowerCase())<(t=t.toLowerCase())?-1:e>t?1:0;return"descending"===r?1===a?-1:1:a}function a(t,a){var n=document.getElementById("sortingTable").getElementsByTagName("tbody")[0];for(var d in n.setAttribute("aria-busy","true"),n.innerHTML="",e.sort((function(e,n){return"affaldstype"==t?r(e.affaldstype,n.affaldstype,a):"farvekode"==t?r(e.farvekode,n.farvekode,a):void 0})),e){var s=document.createElement("tr"),l=document.createElement("td");l.setAttribute("data-title","Affaldstype"),l.innerText=e[d].affaldstype;var i=document.createElement("td");i.setAttribute("data-title","Farvekode"),i.innerText=e[d].farvekode;var o=document.createElement("td");o.setAttribute("data-title","Beskrivelse"),o.innerText=e[d].beskrivelse;var m=document.createElement("td");m.setAttribute("data-title","Hvor ender det?"),m.innerText=e[d].hvorenderdet,s.appendChild(l),s.appendChild(i),s.appendChild(o),s.appendChild(m),n.appendChild(s)}n.removeAttribute("aria-busy")}document.addEventListener("DOMContentLoaded",(function(){if(function(){if(0!==document.getElementsByClassName("table--selectable").length)for(var e=document.getElementsByClassName("table--selectable"),t=0;t<e.length;t++){var r=e[t];if(null!==r.nextElementSibling&&r.nextElementSibling.classList.contains("table-actions")){r.addEventListener("fds.table.selectable.updated",(function(e){var t=e.detail.checkedNumber,r=this.nextElementSibling.getElementsByClassName("table-selected-number")[0];t>1?(r.innerHTML=t+" rækker valgt",r.classList.remove("no-selected"),r.classList.remove("form-error-message"),r.removeAttribute("role")):1===t?(r.innerHTML=t+" række valgt",r.classList.remove("form-error-message"),r.classList.remove("no-selected"),r.removeAttribute("role")):(r.innerHTML="Vælg en eller flere rækker for at udføre funktioner.",r.classList.add("no-selected"),r.classList.remove("form-error-message"),r.removeAttribute("role"))}));for(var a=r.nextElementSibling.getElementsByTagName("button"),n=0;n<a.length;n++){a[n].addEventListener("click",(function(e){var t=this.parentNode.getElementsByClassName("table-selected-number")[0];t.classList.contains("no-selected")&&(t.classList.add("form-error-message"),t.classList.remove("no-selected"),t.setAttribute("role","alert"))}))}}}}(),null!==document.getElementById("btn-sort-by-affaldstype")){var r=document.getElementById("btn-sort-by-affaldstype"),n=document.getElementById("btn-sort-by-farvekode");r.addEventListener("click",(function(){var e="ascending";"ascending"==this.parentNode.getAttribute("aria-sort")&&(e="descending"),t(this,e),n.parentNode.removeAttribute("aria-sort"),t(n,"none"),this.parentNode.setAttribute("aria-sort",e),a("affaldstype",e)})),n.addEventListener("click",(function(){var e="ascending";"ascending"==this.parentNode.getAttribute("aria-sort")&&(e="descending"),t(this,e),r.parentNode.removeAttribute("aria-sort"),t(r,"none"),this.parentNode.setAttribute("aria-sort",e),a("farvekode",e)}))}null!==document.getElementById("btnSearchTable")&&document.getElementById("formSearchTable").addEventListener("submit",(function(t){t.preventDefault(),function(t){var r=document.getElementById("searchTable").getElementsByTagName("tbody")[0];for(var a in r.setAttribute("aria-busy","true"),r.innerHTML="",e){var n=e[a];if(""===t||n.affaldstype.toLowerCase().includes(t)||n.farvekode.toLowerCase().includes(t)||n.beskrivelse.toLowerCase().includes(t)||n.hvorenderdet.toLowerCase().includes(t)){var d=document.createElement("tr"),s=document.createElement("td");s.setAttribute("data-title","Affaldstype"),s.innerText=e[a].affaldstype;var l=document.createElement("td");l.setAttribute("data-title","Farvekode"),l.innerText=e[a].farvekode;var i=document.createElement("td");i.setAttribute("data-title","Beskrivelse"),i.innerText=e[a].beskrivelse;var o=document.createElement("td");o.setAttribute("data-title","Hvor ender det?"),o.innerText=e[a].hvorenderdet,d.appendChild(s),d.appendChild(l),d.appendChild(i),d.appendChild(o),r.appendChild(d)}}r.removeAttribute("aria-busy")}(document.getElementById("inputSearchTable").value)}))}))})();