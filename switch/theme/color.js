"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.defineProperty(exports,"__esModule",{value:!0});var _mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),_color=require("polythene/selection-control/theme/color"),_color2=_interopRequireDefault(_color),style=function(config,tint){var scope=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return[(0,_color2.default)(config,tint,scope),_defineProperty({},scope+".pe-control--switch",{"&.pe-control--off":{" .pe-control--switch__track":{opacity:config["color_"+tint+"_track_off_opacity"],"background-color":config["color_"+tint+"_track_off"]}," .pe-control--switch__thumb":{color:config["color_"+tint+"_thumb_off"]}," .pe-control--switch__knob":{"background-color":"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:config["color_"+tint+"_focus_off_opacity"],"background-color":config["color_"+tint+"_focus_off"]}}},"&.pe-control--on":{" .pe-control--switch__track":{opacity:config["color_"+tint+"_track_on_opacity"],"background-color":config["color_"+tint+"_track_on"]}," .pe-control--switch__thumb":{color:config["color_"+tint+"_thumb_on"]}," .pe-control--switch__knob":{"background-color":"currentcolor"}," .pe-button--focus":{" .pe-button__focus":{opacity:config["color_"+tint+"_focus_on_opacity"],"background-color":config["color_"+tint+"_focus_on"]}}},"&.pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-control--switch__track":{opacity:config["color_"+tint+"_track_disabled_opacity"],"background-color":config["color_"+tint+"_track_disabled"]}," .pe-control--switch__thumb":{color:config["color_"+tint+"_thumb_disabled"]}}})]},createStyles=function(config){return[style(config,"light"),{".pe-dark-theme":[style(config,"dark"," "),style(config,"dark","&")]}]};exports.default=function(config){return _mixin2.default.createStyles(config,createStyles)},module.exports=exports.default;
//# sourceMappingURL=color.js.map