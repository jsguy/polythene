'use strict';var _config=require('polythene/notification/theme/notification/config'),_config2=_interopRequireDefault(_config),_custom=require('polythene/config/custom'),_custom2=_interopRequireDefault(_custom),_layout=require('polythene/notification/theme/notification/layout'),_layout2=_interopRequireDefault(_layout),_color=require('polythene/notification/theme/notification/color'),_color2=_interopRequireDefault(_color),_styler=require('polythene/common/styler'),_styler2=_interopRequireDefault(_styler);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var customConfigFn=_custom2.default.notification,config=customConfigFn?customConfigFn(_config2.default):_config2.default;_styler2.default.add('pe-notification-notification',(0,_layout2.default)(config),(0,_color2.default)(config));
//# sourceMappingURL=theme.js.map