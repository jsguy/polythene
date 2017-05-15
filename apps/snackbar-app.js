'use strict';var _mithril=require('mithril'),_mithril2=_interopRequireDefault(_mithril),_snackbar=require('../notification/snackbar'),_snackbar2=_interopRequireDefault(_snackbar),_button=require('../button/button'),_button2=_interopRequireDefault(_button),_dialog=require('../dialog/dialog'),_dialog2=_interopRequireDefault(_dialog);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var actionDialog=function(a){return{class:'message-action-dialog',body:'You would like to think about it',footer:[_mithril2.default.component(_button2.default,{label:'No',events:{onclick:function onclick(){_dialog2.default.hide(),a.unpause()}}}),_mithril2.default.component(_button2.default,{label:'Yes',events:{onclick:function onclick(){_dialog2.default.hide(),a.hide()}}})],backdrop:!0,modal:!0}},app={};app.view=function(){return{tag:'div',attrs:{className:'app'},children:[{tag:'div',attrs:{id:'snackbar'},children:[_mithril2.default.component(_snackbar2.default)]},_mithril2.default.component(_button2.default,{label:'Show',raised:!0,events:{onclick:function onclick(){_snackbar2.default.show({containerSelector:'#snackbar',title:'This message tells some things using quite a few words.',layout:'vertical',action:_mithril2.default.component(_button2.default,{label:'Let me think about it',events:{onclick:function onclick(){_snackbar2.default.pause(),_dialog2.default.show(actionDialog(_snackbar2.default))}}})})}}}),_mithril2.default.component(_dialog2.default)]}},_mithril2.default.mount(document.body,app);
//# sourceMappingURL=snackbar-app.js.map