!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("mithril"),require("polythene-css"),require("polythene-theme"),require("polythene-shadow"),require("polythene-ripple"),require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-css","polythene-theme","polythene-shadow","polythene-ripple","polythene-core"],e):e(o.polythene=o.polythene||{},o.m,o["polythene-css"],o["polythene-theme"],o["polythene-shadow"],o["polythene-ripple"],o["polythene-core"])}(this,function(o,e,t,r,n,a,i){"use strict";e="default"in e?e.default:e;var _=r.vars.rgba,l=r.vars.unit_touch_height,d=36,c={margin_h:r.vars.grid_unit,border_radius:r.vars.unit_item_border_radius,font_size:14,font_weight:500,outer_padding_v:(l-d)/2,padding_h:2*r.vars.grid_unit,padding_v:11,min_width:8*r.vars.grid_unit_component,text_transform:"uppercase",border_width:0,color_light_flat_normal_background:"transparent",color_light_flat_normal_text:_(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_flat_hover_background:_(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_light_flat_focus_background:_(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_light_flat_active_background:_(r.vars.color_light_foreground,r.vars.blend_light_background_active),color_light_flat_disabled_background:"transparent",color_light_flat_disabled_text:_(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_light_raised_normal_background:"#E0E0E0",color_light_raised_normal_text:_(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_raised_hover_background:"transparent",color_light_raised_focus_background:_(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_light_raised_active_background:_(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_light_raised_disabled_background:_(r.vars.color_light_foreground,r.vars.blend_light_background_disabled),color_light_raised_disabled_text:_(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_dark_flat_normal_background:"transparent",color_dark_flat_normal_text:_(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_flat_hover_background:_(r.vars.color_dark_foreground,r.vars.blend_dark_background_hover),color_dark_flat_focus_background:_(r.vars.color_dark_foreground,r.vars.blend_dark_background_hover),color_dark_flat_active_background:_(r.vars.color_dark_foreground,r.vars.blend_dark_background_active),color_dark_flat_disabled_background:"transparent",color_dark_flat_disabled_text:_(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled),color_dark_raised_normal_background:_(r.vars.color_primary),color_dark_raised_normal_text:_(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_raised_hover_background:r.vars.color_primary_active,color_dark_raised_focus_background:r.vars.color_primary_active,color_dark_raised_active_background:r.vars.color_primary_dark,color_dark_raised_disabled_background:_(r.vars.color_dark_foreground,r.vars.blend_dark_background_disabled),color_dark_raised_disabled_text:_(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled)},s=function(o){return[{".pe-button":[t.mixin.vendorize({"user-select":"none"},r.vars.prefixes_user_select),{outline:"none",padding:0,"text-decoration":"none","text-align":"center",cursor:"pointer","&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive":{cursor:"default","pointer-events":"none"}," .pe-button__content":{position:"relative","border-radius":"inherit"}," .pe-button__label":[t.mixin.fontSmoothing(),{position:"relative",display:"block","border-radius":"inherit","pointer-events":"none"}]," .pe-button__wash, .pe-button__focus":[t.mixin.defaultTransition("background-color"),t.mixin.fit(),{"border-radius":"inherit","pointer-events":"none"}]," .pe-button__focus":{opacity:0},"&.pe-button--focus":{" .pe-button__focus":{opacity:1}}," .pe-button__wash":{"z-index":0}}],".pe-button--text":{display:"inline-block","min-width":o.min_width+"px",margin:"0 "+o.margin_h+"px",padding:o.outer_padding_v+"px 0",background:"transparent",border:"none"," .pe-button__content":{position:"relative","border-width":0,padding:"0 "+o.padding_h+"px","border-radius":o.border_radius+"px"}," .pe-button__label":{padding:o.padding_v+"px 0","font-size":o.font_size+"px","line-height":o.font_size+"px","font-weight":o.font_weight,"text-transform":o.text_transform,"white-space":"pre"},"&.pe-button--borders":{" .pe-button__wash, pe-button__focus, .pe-ripple":t.mixin.fit(-1)," .pe-button__content":{"border-style":"solid","border-width":"1px"}," .pe-button__label":{padding:o.padding_v-1+"px 0"}}}}]},u=function(o){return t.mixin.createStyles(o,s)},b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},p=function(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o},v=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},f=function(o,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=o["color_"+e+"_"+t+"_normal_border"]||"transparent",a=o["color_"+e+"_"+t+"_active_border"]||n,i=o["color_"+e+"_"+t+"_disabled_border"]||n;return[p({},r+".pe-button",{"&, &:link, &:visited":{color:o["color_"+e+"_"+t+"_normal_text"]}," .pe-button__content":{"background-color":o["color_"+e+"_"+t+"_normal_background"],"border-color":n},"&.pe-button--disabled":{color:o["color_"+e+"_"+t+"_disabled_text"]," .pe-button__content":{"background-color":o["color_"+e+"_"+t+"_disabled_background"],"border-color":i}},"&.pe-button--selected":{" .pe-button__content":{"background-color":o["color_"+e+"_"+t+"_active_background"],"border-color":a}," .pe-button__focus":{opacity:1,"background-color":o["color_"+e+"_"+t+"_focus_background"]}},"&.pe-button--focus":{" .pe-button__focus":{opacity:1,"background-color":o["color_"+e+"_"+t+"_focus_background"]}}})]},g=function(o,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=o["color_"+e+"_"+t+"_normal_border"],a=o["color_"+e+"_"+t+"_normal_border"]||n;return[p({},r+".pe-button:hover",{"&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash":{"background-color":o["color_"+e+"_"+t+"_hover_background"],"border-color":a}})]},h=function(o){return[f(o,"light","flat"),f(o,"light","raised",".pe-button--raised"),{"html.pe-no-touch":[g(o,"light","flat"," "),g(o,"light","raised"," .pe-button--raised")]},{".pe-dark-theme":[f(o,"dark","flat"," "),f(o,"dark","flat","&"),f(o,"dark","raised"," .pe-button--raised")]},{"html.pe-no-touch .pe-dark-theme":[g(o,"dark","flat"," "),g(o,"dark","flat","&"),g(o,"dark","raised"," .pe-button--raised")]}]},k=function(o){return t.mixin.createStyles(o,h)};t.styler.styleComponent("pe-button-text","button",r.styles,c,u,k);var m={component:"pe-button pe-button--text",content:"pe-button__content",label:"pe-button__label",raised:"pe-button--raised",wash:"pe-button__wash",focus:"pe-button__focus",selected:"pe-button--selected",disabled:"pe-button--disabled",borders:"pe-button--borders",inactive:"pe-button--inactive",focusState:"pe-button--focus"},y=["formaction","type"],x=5,w=void 0,z=function(){},E=[];i.subscribe(i.touchEndEvent,function(){return z()});var S=function(o,t,r){var n=o.zBase,a=t.increase||1,i=o.z;"down"===r&&5!==n?i=Math.min(i+a,x):"up"===r&&(i=Math.max(i-a,n)),i!==o.z&&(o.z=i,e.redraw())},j=function(o,t){o.inactive=!0,e.redraw(),setTimeout(function(){o.inactive=!1,e.redraw()},1e3*t.inactivate)},q=function(o,e,t){var r=function(o,e,t){"down"===t?E.push({state:o,attrs:e}):"up"===t&&e.inactivate&&!o.inactive&&j(o,e);var r=e.animateOnTap!==!1;r&&!i.isTouch&&S(o,e,t)};w=function(){return r(e,t,"down")},z=function(){E.map(function(o){r(o.state,o.attrs,"up")}),E=[]},o.addEventListener(i.touchStartEvent,w)},O=function(o){o.removeEventListener(i.touchStartEvent,w)},I=function(o){var t=o.state,r=o.attrs,_=void 0!==r.ink&&r.ink===!1,l=r.disabled,d=r.element||"a",c=l||t.inactive?-1:r.tabindex||0,s=r.events&&r.events.onclick,u=v({},i.filterSupportedAttributes(r,y),{class:[r.parentClass||m.component,r.selected?m.selected:null,l?m.disabled:null,t.inactive?m.inactive:null,r.borders?m.borders:null,r.raised?m.raised:null,t.focus?m.focusState:null,r.class].join(" "),tabIndex:c,onfocus:function(){return t.focus=!t.mouseover},onblur:function(){return t.focus=!1},onmouseover:function(){return t.mouseover=!0},onmouseout:function(){return t.mouseover=!1},onkeydown:function(o){13===o.which&&t.focus&&(t.focus=!1,s&&s(o))}},r.events?v({},r.events):null,l?{disabled:!0}:null),p=r.content?r.content:r.label?"object"===b(r.label)?r.label:e("div",{class:m.label},r.label):null,f=l||void 0!==r.wash&&!r.wash,g=p?e("div",{class:m.content},[r.raised&&!l?e(n.shadow,{z:t.z,animated:!0}):null,l||_?null:e(a.ripple,r.ripple),f?null:e("div",{class:m.wash}),l?null:e("div",{class:m.focus}),p]):null;return e(d,u,[r.before,g,r.after])},T={oninit:function(o){var e=void 0!==o.attrs.z?o.attrs.z:1;o.state={el:void 0,zBase:e,z:e,tapEventsInited:!1,inactive:!!o.attrs.inactive,focus:!1,mouseover:!1}},oncreate:function(o){o.attrs.disabled||o.state.inactive||o.state.tapEventsInited||(o.state.el=o.dom,q(o.dom,o.state,o.attrs),o.state.tapEventsInited=!0)},onremove:function(o){o.state.tapEventsInited&&O(o.dom)},view:I};o.button=T,o.buttonVars=c,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=button.js.map