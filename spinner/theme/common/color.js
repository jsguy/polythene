"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _mixin=require("polythene/common/mixin");var _mixin2=_interopRequireDefault(_mixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var style=function style(config,tint){var scope=arguments.length<=2||arguments[2]===undefined?"":arguments[2];return[_defineProperty({},scope+".pe-spinner",{"&.pe-spinner--raised":{"background-color":config["color_"+tint+"_raised_background"]}})]};var createStyles=function createStyles(config){return[style(config,"light"),{".pe-dark-theme":[style(config,"dark"," "),style(config,"dark","&")]}]};exports.default=function(config){return _mixin2.default.createStyles(config,createStyles)};module.exports=exports["default"];