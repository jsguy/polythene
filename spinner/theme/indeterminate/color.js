'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _mixin=require('polythene/common/mixin'),_mixin2=_interopRequireDefault(_mixin);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var style=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:'';return[_defineProperty({},c+'.pe-spinner-indeterminate',{color:a['color_'+b+'_single'],' .pe-spinner-indeterminate__layer':{'border-color':'currentcolor'},'&:not(.pe-spinner--single-color)':{' .pe-spinner-indeterminate__layer--1':{'border-color':a['color_'+b+'_1']},' .pe-spinner-indeterminate__layer--2':{'border-color':a['color_'+b+'_2']},' .pe-spinner-indeterminate__layer--3':{'border-color':a['color_'+b+'_3']},' .pe-spinner-indeterminate__layer--4':{'border-color':a['color_'+b+'_4']}}})]},createStyles=function(a){return[style(a,'light'),{'.pe-dark-theme':[style(a,'dark',' '),style(a,'dark','&')]}]};exports.default=function(a){return _mixin2.default.createStyles(a,createStyles)},module.exports=exports['default'];
//# sourceMappingURL=color.js.map