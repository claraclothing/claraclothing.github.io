!function(e,t){"use strict";var n=function(e,t){for(var n=e.find(".bdt-prime-slider-flexure").data("settings"),r=document.querySelectorAll("#"+n.box_id+" .bdt-ps-flexure-item"),d=document.querySelectorAll("#"+n.box_id+" .bdt-ps-flexure-content"),o=0;o<r.length;o++)r[o].addEventListener(n.mouse_event,(function(){for(var e=0;e<d.length;e++)d[e].className="bdt-ps-flexure-content";document.getElementById(this.dataset.id).className="bdt-ps-flexure-content active";for(e=0;e<r.length;e++)r[e].className="bdt-ps-flexure-item";this.className="bdt-ps-flexure-item active"}))};jQuery(window).on("madxartwork/frontend/init",(function(){madxartworkFrontend.hooks.addAction("frontend/element_ready/prime-slider-flexure.default",n)}))}(jQuery,window.madxartworkFrontend);