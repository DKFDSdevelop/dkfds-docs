!function(e){function t(t){for(var i,n,l=t[0],o=t[1],d=t[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(c&&c(t);p.length;)p.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={1:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=o;s.push([144,0]),a()}({144:function(e,t,a){e.exports=a(145)},145:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i);window.$=window.jQuery=r.a;var s=a(146),n=a(147),l=(a(2),a(149),a(150),function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a={lengthMenu:"Viser _MENU_ elementer pr side",zeroRecords:"Der blev fundet intet resultat",info:"Viser sider _PAGE_ af _PAGES_",infoEmpty:"Intet resultat",infoFiltered:"(filtreret fra _MAX_ elementer)",emptyTable:"Ingen data",search:"Filtrer:",Sort:!0,paginate:{first:"Første",last:"Sidste",next:"Næste",previous:"Forrige"}};r()("#js-datatable-example-basic").DataTable({language:a,responsive:!0,createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),r()("#js-datatable-example-ajax").DataTable({language:a,responsive:!0,processing:!0,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:""},columns:[{data:"name"},{data:"email"},{data:"address.street"},{data:"address.city"},{data:"phone"}],createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),r()("#js-datatable-example-selectable").DataTable({language:a,responsive:!0,columnDefs:[{orderable:!1,targets:0,render:function(e,t,a,i){var r="checkbox-"+Math.random().toString(36).substring(7);return"<div class='form-group'><input id='"+r+"' type='checkbox' name='checked' class='form-checkbox'><label for='"+r+"' ></label></div>"}}],order:[[1,"asc"]],createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}});r()("#js-datatable-example-selectable").on("click","input[type='checkbox']",(function(e){e.target.checked?r()(e.target).closest("tr").addClass("selected-row"):r()(e.target).closest("tr").removeClass("selected-row")}));var i=r()("#js-datatable-example-detailsrow").DataTable({language:a,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:""},rowId:"id",columns:[{className:"details-control",orderable:!1,data:null,defaultContent:"",width:"24px"},{data:"name"},{data:"address.street"},{data:"address.city"},{data:"phone"}],order:[[1,"asc"]],responsive:{details:!1},createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0),r()(t).hasClass("details-control")&&r()(t).attr("aria-label","Klik her for at udfolde en række nedenfor med detaljer.")}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),l=function(e){var t=r()(e).closest("tr"),a=i.row(t);a.child.isShown()?(a.child.hide(),r()(r()(t).find(".details-control")[0]).attr("aria-expanded",!1),t.removeClass("shown")):(a.child((a.data(),'<div class="details-row-content"><div class="row"><div class="col-5"><p class="h3">Headline</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <a href="#">aliqua</a>.</p><div class="responsive-content"></div></div><div class="col-6"><img src="https://ramen-files.s3.amazonaws.com/charturl-images/2017-01-26/9b64e497-3a7a-40c8-b7c7-322f84f84ba9.png"></div></div></div>'),"child").show(),r()(a.child()[0]).attr("aria-label","Række med detaljer"),r()(r()(t).find(".details-control")[0]).attr("aria-expanded",!0),t.addClass("shown"))};r()("#js-datatable-example-detailsrow").on("click","td.details-control",(function(){l(this)})),r()("#js-datatable-example-detailsrow").keypress((function(e){13!=e.which&&32!=e.which||l(e.target)}));var o=r()("#js-datatable-example-edit").DataTable({language:a,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:""},rowId:"id",columns:[{data:"name"},{data:"address.street"},{data:"address.city"},{data:"company.name"},{targets:-1,className:"row-control",data:null,orderable:!1,responsivePriority:1,render:function(e,t,a,i){var r="overflow-table-"+a.id;return'<div class="overflow-menu overflow-menu--open-left overflow-menu--hover-bg">\n                                <button class="button-overflow-menu js-dropdown" data-js-target="#'+r+'" aria-haspopup="true" aria-expanded="false">\n                                    <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#dots-vertical"></use></svg>\n                                </button>\n                                <div class="overflow-menu-inner" id="'+r+'" aria-hidden="true">\n                                    <ul class="overflow-list">\n                                        <li><button class="js-edit-modal-trigger">Rediger <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#pencil"></use></svg></button></li>\n                                        <li><button class="js-delete-modal-trigger danger-delete">Slet <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#delete"></use></svg></button></li>\n                                    </ul>\n                                </div>\n                            </div>'}}],createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},order:[[1,"asc"]],responsive:!0,initComplete:function(e,t){r()("#js-datatable-example-edit").find(".js-dropdown").each((function(e){new n(this)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}}),d=null;r()("#js-datatable-example-edit").on("click",".js-edit-modal-trigger",(function(){d=r()(this).closest("tr");var e=o.row(d).data(),t=o.row(d).id();r()("#edit-row-id").val(t),r()("#edit-navn").val(e.name),r()("#edit-vejnavn").val(e.address.street),r()("#edit-by").val(e.address.city),r()("#edit-firmanavn").val(e.company.name),s.show("modal-edit")})),r()("body").on("click",".js-edit-save-trigger",(function(){var e=o.row(d).data();e.name=r()("#edit-navn").val(),e.address.street=r()("#edit-vejnavn").val(),e.address.city=r()("#edit-by").val(),e.company.name=r()("#edit-firmanavn").val(),o.row(d).data(e).draw(),s.close("modal-edit")}));var c=null;r()("#js-datatable-example-edit").on("click",".js-delete-modal-trigger",(function(){c=r()(this).closest("tr"),s.show("modal-delete")})),r()("body").on("click",".js-delete-trigger",(function(){o.row(c).remove().draw(),s.close("modal-delete")}));r()("#js-datatable-example-edit2").DataTable({language:a,ajax:{url:"https://jsonplaceholder.typicode.com/users",dataSrc:""},rowId:"id",columns:[{data:"name"},{data:"address.street"},{data:"address.city"},{data:"company.name"},{targets:-1,className:"row-control",data:null,orderable:!1,responsivePriority:1,render:function(e,t,a,i){return'<button class="button button-unstyled px-3 js-delete-modal-trigger"><svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#delete-outline"></use></svg><span class="sr-only">Slet</span></button>'}}],order:[[1,"asc"]],responsive:!0,createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}});r()("#js-datatable-example-edit2").on("click",".js-delete-modal-trigger",(function(){c=r()(this).closest("tr"),s.show("modal-delete")}));r()(".dataTables_filter").prepend("<button class='button button-unstyled mr-4' tabindex='0' aria-label='Download som PDF'><svg class='icon-svg m-0' aria-hidden=\"true\" tabindex=\"-1\" focusable=\"false\"><use xlink:href='#download'></use></svg></button>").prepend("<button class='button button-unstyled mr-4' tabindex='0' aria-label='Rediger egenskaber'><svg class='icon-svg m-0' aria-hidden=\"true\" tabindex=\"-1\" focusable=\"false\"><use xlink:href='#settings'></use></button>");var u=new Event("init-tooltips");r()("body")[0].dispatchEvent(u);r()("#js-datatable-example-praktikplads").DataTable({language:a,ajax:{url:"https://api.myjson.com/bins/1adkvm",dataSrc:""},rowId:"id",columns:[{data:"student",width:"20%"},{data:"birthday"},{data:"education"},{data:"education2"},{data:"education3"},{data:"education4"}],order:[[1,"asc"]],paging:!1,searching:!1,info:!1,responsive:!0,createdRow:function(e,t,a){r()(e).find("td").each((function(e,t){r()(t).hasClass("row-control")||r()(t).attr("tabindex",0)}))},fnDrawCallback:function(e){r()(".dataTables_paginate a[aria-disabled=true]").removeAttr("aria-disabled"),r()(".dataTables_paginate .disabled").attr("aria-disabled","true")}})});r()(document).ready((function(){new l}))},147:function(e,t,a){"use strict";function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=a(148),s=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.jsDropdownTrigger=".js-dropdown",this.jsDropdownTarget="data-js-target",this.navResponsiveBreakpoint=992,this.tringuideBreakpoint=768,this.jsResponsiveCollapseModifier=".js-dropdown--responsive-collapse",this.responsiveCollapseEnabled=!1,this.responsiveListCollapseEnabled=!1,this.triggerEl=null,this.targetEl=null,this.init(t),null!==this.triggerEl&&void 0!==this.triggerEl&&null!==this.targetEl&&void 0!==this.targetEl){var a=this;if(this.triggerEl.parentNode.classList.contains("overflow-menu--md-no-responsive")&&(this.responsiveListCollapseEnabled=!0),document.getElementsByTagName("body")[0].addEventListener("click",(function(e){a.outsideClose(e)})),this.triggerEl.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),a.toggleDropdown()})),this.responsiveListCollapseEnabled){var i=this.triggerEl;if(window.IntersectionObserver)new IntersectionObserver((function(e){e[0].intersectionRatio?"false"===i.getAttribute("aria-expanded")&&a.targetEl.setAttribute("aria-hidden",!0):"true"===a.targetEl.getAttribute("aria-hidden")&&a.targetEl.setAttribute("aria-hidden",!1)}),{root:document.body}).observe(i);else a.doResponsiveStepguideCollapse()&&"false"===i.getAttribute("aria-expanded")?a.targetEl.setAttribute("aria-hidden",!0):a.targetEl.setAttribute("aria-hidden",!1),window.addEventListener("resize",(function(){a.doResponsiveStepguideCollapse()&&"false"===i.getAttribute("aria-expanded")?a.targetEl.setAttribute("aria-hidden",!0):a.targetEl.setAttribute("aria-hidden",!1)}))}document.onkeydown=function(e){27===(e=e||window.event).keyCode&&a.closeAll()}}}var t,a,s;return t=e,(a=[{key:"init",value:function(e){if(this.triggerEl=e,null!==this.triggerEl&&void 0!==this.triggerEl){var t=this.triggerEl.getAttribute(this.jsDropdownTarget);if(null!=t){var a=document.getElementById(t.replace("#",""));null!=a&&(this.targetEl=a)}}this.triggerEl.classList.contains("js-dropdown--responsive-collapse")&&(this.responsiveCollapseEnabled=!0),this.triggerEl.parentNode.classList.contains("overflow-menu--md-no-responsive")&&(this.responsiveListCollapseEnabled=!0)}},{key:"closeAll",value:function(){for(var e=document.querySelector("body"),t=document.getElementsByClassName("overflow-menu"),a=null,i=null,r=0;r<t.length;r++){for(var s=t[r],n=0;n<s.childNodes.length;n++)void 0!==s.childNodes[n].tagName&&(s.childNodes[n].classList.contains("js-dropdown")?a=s.childNodes[n]:s.childNodes[n].classList.contains("overflow-menu-inner")&&(i=s.childNodes[n]));null!==i&&null!==a&&(e.classList.contains("mobile_nav-active")&&s.closest(".navbar")||(a.setAttribute("aria-expanded","false"),i.classList.add("collapsed"),i.setAttribute("aria-hidden","true")))}}},{key:"toggleDropdown",value:function(e){if(null!==this.triggerEl&&void 0!==this.triggerEl&&null!==this.targetEl&&void 0!==this.targetEl)if(this.targetEl.style.left=null,this.targetEl.style.right=null,this.triggerEl.getBoundingClientRect(),"true"===this.triggerEl.getAttribute("aria-expanded")||e)this.triggerEl.setAttribute("aria-expanded","false"),this.targetEl.classList.add("collapsed"),this.targetEl.setAttribute("aria-hidden","true");else{this.closeAll(),this.triggerEl.setAttribute("aria-expanded","true"),this.targetEl.classList.remove("collapsed"),this.targetEl.setAttribute("aria-hidden","false");var t=this.offset(this.targetEl);t.left<0&&(this.targetEl.style.left="0px",this.targetEl.style.right="auto");var a=t.left+this.targetEl.offsetWidth;a>window.innerWidth&&(this.targetEl.style.left="auto",this.targetEl.style.right="0px");var i=this.offset(this.targetEl);i.left<0&&(this.targetEl.style.left="0px",this.targetEl.style.right="auto"),(a=i.left+this.targetEl.offsetWidth)>window.innerWidth&&(this.targetEl.style.left="auto",this.targetEl.style.right="0px")}}},{key:"offset",value:function(e){var t=e.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+a}}},{key:"outsideClose",value:function(e){if(!this.doResponsiveCollapse()){var t=r(e.target,this.targetEl.id);null==t&&e.target!==this.triggerEl&&this.toggleDropdown(!0)}}},{key:"doResponsiveCollapse",value:function(){return!!((this.responsiveCollapseEnabled||this.responsiveListCollapseEnabled)&&window.innerWidth<=this.navResponsiveBreakpoint)}},{key:"doResponsiveStepguideCollapse",value:function(){return!!(this.responsiveListCollapseEnabled&&window.innerWidth<=this.tringuideBreakpoint)}}])&&i(t.prototype,a),s&&i(t,s),e}();e.exports=s},148:function(e,t,a){"use strict";e.exports=function(e,t){for(var a=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!a.call(e,t);)e=e.parentElement;return e}}});