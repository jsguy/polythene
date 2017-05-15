'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _isomorphic=require('polythene/common/isomorphic'),_isomorphic2=_interopRequireDefault(_isomorphic);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var listeners={},throttle=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0.05,c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:_isomorphic2.default.isClient()?window:{},d=!1;return function(){for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];d||(function later(){a.apply(c,g)}(),d=!0,setTimeout(function(){d=!1},b))}},subscribe=function(a,b,c){listeners[a]=listeners[a]||[],listeners[a].push(c?throttle(b,c):b)},unsubscribe=function(a,b){if(listeners[a]){var c=listeners[a].indexOf(b);-1<c&&listeners[a].splice(c,1)}},emit=function(a,b){listeners[a]&&listeners[a].forEach(function(c){c(b)})};_isomorphic2.default.isClient()&&(window.addEventListener('resize',function(a){return emit('resize',a)}),window.addEventListener('scroll',function(a){return emit('scroll',a)}),window.addEventListener('keydown',function(a){return emit('keydown',a)})),exports.default={throttle:throttle,subscribe:subscribe,unsubscribe:unsubscribe,emit:emit},module.exports=exports['default'];
//# sourceMappingURL=events.js.map