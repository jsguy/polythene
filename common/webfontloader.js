'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _isomorphic=require('polythene/common/isomorphic'),_isomorphic2=_interopRequireDefault(_isomorphic);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}_isomorphic2.default.isClient()&&!window.WebFontConfig&&(window.WebFontConfig={},function(){var a=document.createElement('script');a.src=('https:'===document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',a.type='text/javascript',a.async='true';var b=document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b)}());var webfontLoader={add:function add(a,b,c){if(!_isomorphic2.default.isServer()){var d=window.WebFontConfig[a]||{};d.families=d.families||[],d.families.push(b),c&&(d.key=c),window.WebFontConfig[a]=d}}};exports.default=webfontLoader,module.exports=exports['default'];
//# sourceMappingURL=webfontloader.js.map