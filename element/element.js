"use strict";Object.defineProperty(exports,"__esModule",{value:true});require("polythene/common/object.assign");var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);require("polythene/element/theme/theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var tag=opts.tag||"div";var props=Object.assign({},{"class":["element",opts.class].join(" "),id:opts.id||"",config:opts.config},opts.events?opts.events:null);var content=[opts.content?opts.content:null];return(0,_mithril2.default)(tag,props,[opts.before,content,opts.after])};var component={view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports.default=component;module.exports=exports["default"];