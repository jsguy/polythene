"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _fastclick=require("fastclick"),_fastclick2=_interopRequireDefault(_fastclick),_polythene=require("polythene/polythene/polythene"),_polythene2=_interopRequireDefault(_polythene),_events=require("polythene/common/events"),_events2=_interopRequireDefault(_events),layer=document.body,throttleDelay=150,reInitDelay=throttleDelay+50,fastClick=void 0,timeoutId=void 0,enabled=void 0,remove=function(){enabled&&(fastClick.destroy(),enabled=!1)},add=function(){enabled||(fastClick=new _fastclick2.default(layer),enabled=!0)},handleScroll=function(){remove(),timeoutId&&window.clearTimeout(timeoutId),timeoutId=window.setTimeout(add,reInitDelay)},init=function(){_polythene2.default.isTouch&&(_events2.default.subscribe("scroll",handleScroll,throttleDelay),add())};init(),exports.default={add:add,remove:remove},module.exports=exports.default;
//# sourceMappingURL=no-tap-delay.js.map