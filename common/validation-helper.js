'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.element||'el',c=a.invalid||'invalid',d=[],g=function getIndex(k){for(var l=0;l<d.length;l++)if(d[l][b]===k)return l},h=function getInvalidIndex(){for(var k=0;k<d.length;k++)if(d[k][c])return k};return{submit:function submit(k,l){k.preventDefault();var m=h();m===void 0?l(k):d[m][b]&&d[m][b].focus()},update:function update(k){var l=g(k[b]);l===void 0?d.push(k):d[l]=k}}},module.exports=exports['default'];
//# sourceMappingURL=validation-helper.js.map