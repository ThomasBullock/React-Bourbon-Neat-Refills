$(function(){function t(){$(r).attr("aria-expanded",!1),$(n).attr("aria-hidden",!0)}function a(t){return $(t).is(r)?$(t):$(t).closest(r)}function e(t){return $(t).parents(n).length>0}var n="[data-dropdown=menu]",r="[data-dropdown=toggle]";$(r).on("click",function(e){var n=a(e.target),r=$("#"+n.attr("aria-controls")),i="false"===r.attr("aria-hidden");t(),i||(n.attr("aria-expanded",!0),r.attr("aria-hidden",!1))}),$("body").click(function(n){a(n.target).is(r)||e(n.target)||t()}),$(document).on("keyup",function(a){27===a.keyCode&&t()})}),$(function(){function t(t){var e=a(t);t.attr("aria-hidden",!0),e.focus()}function a(t){return $("[data-open-modal="+t.data("modal")+"]")}function e(t){return t.find($(o))}function n(t){return $("[data-modal="+t.data("open-modal")+"]")}function r(t){return t.closest($(i))}var i="[data-modal]",o="[data-close-modal]";$("[data-open-modal]").on("click",function(t){var a=$(t.target),r=n(a),i=e(r);r.attr("aria-hidden",!1),i.focus()}),$(o).on("click",function(a){t(r($(a.target)))}),$(document).on("keyup",function(a){27===a.keyCode&&t($(i+"[aria-hidden=false]"))})}),$(function(){function t(t){return t.attr("href").substring(1)}function a(t){return t.attr("aria-hidden",null)}function e(t){return t.attr("aria-hidden","true")}function n(t){return e(t.closest(o).find(l))}function r(t){return t.attr({"aria-selected":!0,tabindex:"0"})}function i(t){return t.attr({tabindex:"-1","aria-selected":null})}var o="[data-tab-wrapper]",d="[data-tablist]",c="[data-tablist] > li",u="[data-tablist] > li > a",l="[data-tabpanel]";$(d).attr("role","tablist"),$(c).attr("role","presentation"),$(l).attr("role","tabpanel"),$(u).each(function(a,e){$(e).attr({role:"tab",tabindex:"-1","aria-controls":t($(e))})}),$(d).attr("role","tablist");var s=c+":first-child a";r($(s)),$(l+" > *:first-child").attr({tabindex:"0"}),e($(l+":not(:first-of-type)")),$(u).on("keydown",function(e){var o=$(e.target);switch(e.keyCode){case 37:$target=$(e.target).parents(c).prev().children(u);break;case 39:$target=$(e.target).parents(c).next().children(u);break;default:$target=!1}$target.length&&(i(o),r($target).focus(),n($(e.target)),a($("#"+t($(document.activeElement)))))}),$(u).on("click",function(e){e.preventDefault(),i($(u)),r($(e.target)),n($(e.target)),a($("#"+t($(e.target))))})}),$(function(){$("[data-editor]").each(function(){var t=ace.edit(this),a=$(this).data("language");t.getSession().setMode("ace/mode/"+a),t.setOptions({readOnly:!0,showFoldWidgets:!1,theme:"ace/theme/tomorrow",useWorker:!1})})});