"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _mixin=require("polythene/common/mixin");var _mixin2=_interopRequireDefault(_mixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var style=function style(config,tint){var scope=arguments.length<=2||arguments[2]===undefined?"":arguments[2];return[_defineProperty({},scope+".pe-card",{"background-color":config["color_"+tint+"_main_background"]})]};var content=function content(config,tint){var scope=arguments.length<=2||arguments[2]===undefined?"":arguments[2];return[_defineProperty({},scope,{" .pe-card__title, .pe-card__header-title":{color:config["color_"+tint+"_title_text"]}," .pe-card__subtitle, .pe-card__header-subtitle":{color:config["color_"+tint+"_subtitle_text"]}," .pe-card__text":{color:config["color_"+tint+"_text"]}," .pe-card__actions--borders":[_mixin2.default.hairline("border-top"),{"border-top":"1px solid "+config["color_"+tint+"_actions_border"]}]})]};var overlay=function overlay(config,tint){var scope=arguments.length<=2||arguments[2]===undefined?"":arguments[2];return[_defineProperty({},scope+".pe-card__overlay--sheet",{" .pe-card__overlay__content":{"background-color":config["color_"+tint+"_overlay_background"]}})]};var createStyles=function createStyles(config){return[style(config,"light"),content(config,"light",".pe-card"),overlay(config,"light"),{".pe-dark-theme":[style(config,"dark"," "),content(config,"dark"," "),overlay(config,"dark"," ")]},style(config,"dark",".pe-dark-theme"),overlay(config,"dark",".pe-dark-theme "),content(config,"dark",".pe-card.pe-dark-theme")]};exports.default=function(config){return _mixin2.default.createStyles(config,createStyles)};module.exports=exports["default"];