(()=>{function e(){var e=document.getElementById("guidelines-tab"),n=document.getElementById("code-tab");document.getElementById("guidelines-section").classList.remove("d-none"),document.getElementById("code-section").classList.add("d-none"),null==e||e.setAttribute("aria-current","true"),null==n||n.removeAttribute("aria-current");var t=document.querySelector(".intro-example");null==t||t.classList.remove("d-none");for(var o=document.querySelectorAll(".anchorlink-guidelines"),l=document.querySelectorAll(".anchorlink-code"),d=0;d<o.length;d++)o[d].classList.remove("d-none");for(var c=0;c<l.length;c++)l[c].classList.add("d-none");for(var s=document.querySelectorAll(".anchorbox"),i=0;i<s.length;i++)s[i].classList.remove("d-none"),s[i].classList.contains("hide-guidelines")&&s[i].classList.add("d-none")}function n(){var e=document.getElementById("guidelines-tab"),n=document.getElementById("code-tab");document.getElementById("guidelines-section").classList.add("d-none"),document.getElementById("code-section").classList.remove("d-none"),null==e||e.removeAttribute("aria-current"),null==n||n.setAttribute("aria-current","true");var t=document.querySelector(".intro-example");null==t||t.classList.add("d-none");for(var o=document.querySelectorAll(".anchorlink-guidelines"),l=document.querySelectorAll(".anchorlink-code"),d=0;d<o.length;d++)o[d].classList.add("d-none");for(var c=0;c<l.length;c++)l[c].classList.remove("d-none");for(var s=document.querySelectorAll(".anchorbox"),i=0;i<s.length;i++)s[i].classList.remove("d-none"),s[i].classList.contains("hide-code")&&s[i].classList.add("d-none")}function t(t){if(""===t||"#retningslinjer"===t)e();else if("#kode"===t)n();else if(null!==t){var o=document.querySelector(t),l=document.getElementById("guidelines-tab").classList.contains("d-none"),d=document.getElementById("code-tab").classList.contains("d-none");null!==o&&document.getElementById("guidelines-section").contains(o)?(e(),o.scrollIntoView()):null!==o&&document.getElementById("code-section").contains(o)?(n(),o.scrollIntoView()):l||d||e()}}window.addEventListener("hashchange",(function(e){t(window.location.hash)})),document.addEventListener("DOMContentLoaded",(function(){t(window.location.hash)}))})();