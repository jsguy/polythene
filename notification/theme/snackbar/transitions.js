"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var show=function(ctrl,opts){var height=ctrl.el.getBoundingClientRect().height;return{el:ctrl.containerEl,showDuration:opts.showDuration||.4,showDelay:opts.showDelay||0,beforeShow:function(){return ctrl.containerEl.style.transform="translate3d(0, "+height+"px, 0)"},show:function(){return ctrl.containerEl.style.transform="translate3d(0, 0px, 0)"}}},hide=function(ctrl,opts){var height=ctrl.el.getBoundingClientRect().height;return{el:ctrl.containerEl,hideDuration:opts.hideDuration||.4,hideDelay:opts.hideDelay||0,hide:function(){return ctrl.containerEl.style.transform="translate3d(0, "+height+"px, 0)"},afterHide:function(){return ctrl.containerEl.style.transform="translate3d(0, 0px, 0)"}}};exports.default={show:show,hide:hide},module.exports=exports.default;
//# sourceMappingURL=transitions.js.map