"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _config=require("polythene/checkbox/theme/config");var _config2=_interopRequireDefault(_config);var _custom=require("polythene/config/custom");var _custom2=_interopRequireDefault(_custom);var _layout=require("polythene/checkbox/theme/layout");var _layout2=_interopRequireDefault(_layout);var _color=require("polythene/checkbox/theme/color");var _color2=_interopRequireDefault(_color);var _styler=require("polythene/common/styler");var _styler2=_interopRequireDefault(_styler);var _iconOff=require("polythene/checkbox/theme/icon-off");var _iconOff2=_interopRequireDefault(_iconOff);var _iconOn=require("polythene/checkbox/theme/icon-on");var _iconOn2=_interopRequireDefault(_iconOn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var customConfigFn=_custom2.default.checkbox;var config=customConfigFn?customConfigFn(_config2.default):_config2.default;_styler2.default.add("pe-checkbox",(0,_layout2.default)(config),(0,_color2.default)(config));exports.default={iconOff:_iconOff2.default,iconOn:_iconOn2.default};module.exports=exports["default"];