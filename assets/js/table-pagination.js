(()=>{function e(e,t){for(var n=[],r=0;r<e.length;){for(var i=[],d=0;d<t&&e[r];d++)i.push(e[r]),r++;n.push(i)}return n}function t(t,n,r){for(var i=e(t,n),d=0,o=0;o<t.length;o++){for(var a=t[o].querySelectorAll("td"),l=0;l<a.length;l++)a[l].style.borderBottom="";i[r].includes(t[o])?(t[o].removeAttribute("hidden"),d++):t[o].setAttribute("hidden","")}var u=(r+1)*n-1;if(t[u])for(var c=t[u].querySelectorAll("td"),s=0;s<c.length;s++)c[s].style.borderBottom="0";var m=(r+1)*n-(n-1),g=m+d-1;document.getElementById("table-pagination-message").querySelector(".displayed-rows").textContent="".concat(m,"-").concat(g),document.getElementById("table-pagination-message").querySelector(".total-rows").textContent="".concat(t.length)}function n(n,i,d){var o=d.querySelector(".pagination__items"),a=e(n,i),l=d.querySelector(".button-first").cloneNode(!0),u=d.querySelector(".button-previous").cloneNode(!0),c=d.querySelector(".button-next").cloneNode(!0),s=d.querySelector(".button-last").cloneNode(!0);d.innerHTML="",o.innerHTML="",d.appendChild(l),d.appendChild(u);var m=document.createElement("span");m.classList.add("pagination-mobile"),m.innerHTML="Side 1 af ".concat(a.length),d.appendChild(m);for(var g=function(e){var l=document.createElement("li");l.classList.add("pagination-item","pagination-number");var u=document.createElement("button");if(u.classList.add("button","button-secondary"),e<a.length-1?u.setAttribute("aria-label","Side ".concat(e+1)):u.setAttribute("aria-label","Sidste side, side ".concat(e+1)),u.textContent=e+1,u.addEventListener("click",(function(){t(n,i,e),r(d,e)})),l.appendChild(u),o.appendChild(l),0===e||e===a.length-2){var c=document.createElement("li");c.classList.add("pagination-item","pagination-overflow"),c.innerHTML='<span class="sr-only">Prikker som indikerer skjulte sider</span><span>...</span>',o.appendChild(c)}},h=0;h<a.length;h++)g(h);d.appendChild(o),d.appendChild(c),d.appendChild(s),l.addEventListener("click",(function(){t(n,i,0),r(d,0)})),u.addEventListener("click",(function(){if(d.querySelector(".current-page")){var e=parseInt(d.querySelector(".current-page").textContent)-1;e>0&&(t(n,i,e-1),r(d,e-1))}})),c.addEventListener("click",(function(){if(d.querySelector(".current-page")){var e=parseInt(d.querySelector(".current-page").textContent)-1;e<a.length-1&&(t(n,i,e+1),r(d,e+1))}})),s.addEventListener("click",(function(){t(n,i,a.length-1),r(d,a.length-1)}))}function r(e,t){for(var n=e.querySelector(".pagination__items"),r=n.querySelectorAll(".pagination-number"),i=n.querySelectorAll(".pagination-overflow"),d=e.querySelector(".button-first"),o=e.querySelector(".button-previous"),a=e.querySelector(".button-next"),l=e.querySelector(".button-last"),u=0;u<i.length;u++)i[u].setAttribute("hidden","");for(var c=0;c<r.length;c++)r[c].setAttribute("hidden",""),r[c].querySelector("button").classList.add("button-secondary"),r[c].querySelector("button").classList.remove("current-page"),r[c].querySelector("button").removeAttribute("aria-current");if(r.length<8)for(var s=0;s<r.length;s++)r[s].removeAttribute("hidden");else r[0].removeAttribute("hidden"),r[r.length-1].removeAttribute("hidden"),t<4?(r[1].removeAttribute("hidden"),r[2].removeAttribute("hidden"),r[3].removeAttribute("hidden"),r[4].removeAttribute("hidden"),i[1].removeAttribute("hidden")):t>r.length-5?(i[0].removeAttribute("hidden"),r[r.length-5].removeAttribute("hidden"),r[r.length-4].removeAttribute("hidden"),r[r.length-3].removeAttribute("hidden"),r[r.length-2].removeAttribute("hidden")):(i[0].removeAttribute("hidden"),r[t-1].removeAttribute("hidden"),r[t].removeAttribute("hidden"),r[t+1].removeAttribute("hidden"),i[1].removeAttribute("hidden"));r[t].querySelector("button").classList.remove("button-secondary"),r[t].querySelector("button").classList.add("current-page"),r[t].querySelector("button").setAttribute("aria-current","true"),0===t?(d.classList.add("hidden"),o.classList.add("hidden")):(d.classList.remove("hidden"),o.classList.remove("hidden")),t===r.length-1?(a.classList.add("hidden"),l.classList.add("hidden")):(a.classList.remove("hidden"),l.classList.remove("hidden")),e.querySelector(".pagination-mobile").textContent="Side ".concat(t+1," af ").concat(r.length)}document.addEventListener("DOMContentLoaded",(function(){if(null!==document.getElementById("table-pagination")){var e=document.getElementById("table-pagination"),i=["<td>Grøn</td><td>ASDF</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>","<td>Blå</td><td>GHJK</td><td>Cras pellentesque sapien eu ante consequat pellentesque.</td>","<td>Rød</td><td>YUIO</td><td>Curabitur vel augue et felis aliquam dictum at a risus.</td>","<td>Gul</td><td>RTYU</td><td>Etiam tempus, nibh in varius mollis, tellus urna ultrices nunc.</td>","<td>Lilla</td><td>VBNM</td><td>Aliquam nec dignissim nulla.</td>","<td>Orange</td><td>QWER</td><td>Nam ut mi eget eros gravida pretium a at enim.</td>","<td>Hvid</td><td>HJKL</td><td>Nullam risus lacus, volutpat sit amet lacus ut, sollicitudin suscipit libero.</td>"],d=0;e.querySelector("tbody").innerHTML="";for(var o=0;o<90;o++){d>i.length-1&&(d=0);var a=document.createElement("tr");a.innerHTML=i[d],e.querySelector("tbody").appendChild(a),d++}var l=e.querySelectorAll("tbody tr"),u=document.querySelector("#table-pagination + .table-pagination-options");t(l,10,0),n(l,10,u.querySelector(".table-pagination")),r(u.querySelector(".table-pagination"),0),u.querySelector("select").addEventListener("change",(function(e){"all"===e.target.value?(t(l,l.length,0),u.querySelector(".table-pagination").setAttribute("hidden","")):(t(l,parseInt(e.target.value),0),n(l,parseInt(e.target.value),u.querySelector(".table-pagination")),r(u.querySelector(".table-pagination"),0),u.querySelector(".table-pagination").removeAttribute("hidden")),function(e){var t=e.getBoundingClientRect();t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)||e.scrollIntoView(!1)}(document.querySelector("#table-pagination + .table-pagination-options"))}))}}))})();