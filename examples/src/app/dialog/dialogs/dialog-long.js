"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneDialogDialog=require("polythene/dialog/dialog");var _polytheneDialogDialog2=_interopRequireDefault(_polytheneDialogDialog);var _common=require("./common");var _common2=_interopRequireDefault(_common);var longDialog={view:function view(){return _mithril2["default"].component(_polytheneDialogDialog2["default"],Object.assign({},_common2["default"].dialogProps,{title:"Long dialog with a very long title that surely won't fit here",body:_mithril2["default"].trust(_common2["default"].template)}))}};exports["default"]=longDialog;module.exports=exports["default"];