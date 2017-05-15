'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _config=require('polythene/config/config'),_config2=_interopRequireDefault(_config),_mixin=require('polythene/common/mixin'),_mixin2=_interopRequireDefault(_mixin),_flex=require('polythene/layout/theme/flex'),_flex2=_interopRequireDefault(_flex);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var createStyles=function(a){return[{'.pe-tabs':[_mixin2.default.vendorize({'user-select':'none'},_config2.default.prefixes_user_select),_mixin2.default.vendorize({transform:'translate3d(0,0,0)'},_config2.default.prefixes_transform),_defineProperty({'-webkit-overflow-scrolling':'touch','& ::-webkit-scrollbar':{display:'none'},'&.pe-tabs--menu':{' .pe-tabs__tab':{height:a.menu_tab_height+'px'},' .pe-tabs__tab---icon':{height:a.menu_tab_icon_label_height+'px'},' .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon':{'min-width':0,height:a.menu_tab_icon_label_height+'px',' .pe-button__content':{padding:'0 '+a.tab_menu_content_padding_v+'px',height:a.menu_tab_icon_label_height+'px',' .pe-icon':{'margin-bottom':0},' .pe-button__label':{'font-size':'10px','line-height':'12px','text-transform':'none'}}}},'&.pe-tabs--scrollable':{'max-height':a.tab_height+'px','-ms-overflow-style':'none',' .pe-tabs__scroll-button':{display:'none'},' .pe-tabs__row':{'margin-bottom':-a.scrollbar_offset+'px'}},' .pe-no-touch &':{'&.pe-tabs--scrollable':{'background-color':'inherit'},' .pe-tabs__scroll-button':{position:'absolute',display:'block',top:0,'background-color':'inherit','z-index':3,' .pe-button__content':{'border-radius':0,'background-color':'inherit'},' .pe-button__label':[_mixin2.default.vendorize({'transition-property':'opacity'},_config2.default.prefixes_transition),_mixin2.default.vendorize({'transition-duration':a.scroll_button_fade_duration+'s'},_config2.default.prefixes_transition),_mixin2.default.vendorize({'transition-timing-function':'ease-out'},_config2.default.prefixes_transition),_mixin2.default.vendorize({'transition-delay':a.scroll_button_fade_delay+'s'},_config2.default.prefixes_transition),{opacity:a.scroll_button_opacity}]},'&.pe-tabs--start .pe-tabs__scroll-button--start':{'pointer-events':'none',cursor:'default',' .pe-button__label':{opacity:0}},'&.pe-tabs--end .pe-tabs__scroll-button--end':{'pointer-events':'none',cursor:'default',' .pe-button__label':{opacity:0}},' .pe-tabs__scroll-button--start':{left:0},' .pe-tabs__scroll-button--end':{right:0}},' .pe-tabs__row':[_flex2.default.layoutHorizontal,_mixin2.default.vendorize({'user-select':'none'},_config2.default.prefixes_user_select),{position:'relative','white-space':'nowrap',overflow:'auto'}],' .pe-tabs__row--centered':_flex2.default.layoutCenterJustified,' .pe-tabs__scroll-button--offset':[_flex2.default.flex(),_flex2.default.flexIndex('none')],' .pe-tabs__tab':[_flex2.default.flex(),_flex2.default.flexIndex('none'),_mixin2.default.vendorize({'user-select':'none'},_config2.default.prefixes_user_select),_mixin2.default.defaultTransition('color'),{margin:0,'border-radius':0,height:a.tab_height+'px',padding:0,color:'inherit','min-width':a.min_width+'px',' .pe-button__content':{padding:'0 '+a.tab_content_padding_v+'px',height:a.tab_height+'px','line-height':_config2.default.line_height+'em',' .pe-button__label, .pe-icon':{'max-width':a.label_max_width+'px','line-height':a.tab_label_line_height+'px','max-height':2*a.tab_label_line_height+'px',overflow:'hidden','white-space':'normal'},' .pe-button__label':[_mixin2.default.defaultTransition('opacity',a.animation_duration),{margin:a.tab_label_vertical_offset+'px 0 0 0',padding:0,opacity:a.label_opacity}],' .pe-icon':{'margin-left':'auto','margin-right':'auto'},' .pe-button__focus':{display:'none'}},'&.pe-button--selected':{' .pe-button__content .pe-button__label':{opacity:1}},'&.pe-tabs__tab---icon':{'&, .pe-button__content':[{height:a.tab_icon_label_height+'px'},{' .pe-button__label, .pe-icon':{margin:'0 auto'}},{' .pe-icon':{'margin-bottom':a.tab_icon_label_icon_spacing+'px'}}]}}],' .pe-tabs__tab-content':[_flex2.default.layoutCenterCenter,_flex2.default.layoutVertical,{height:'inherit'}],'&.pe-tabs--autofit .pe-tabs__tab':[_flex2.default.flex(),{'max-width':'none'}],'&.pe-tabs__active-selected':{' .pe-tabs__tab.pe-button--selected':{cursor:'pointer','pointer-events':'initial'}},' .pe-tabs__indicator':[_mixin2.default.vendorize({transform:'translate3d(0,0,0)'},_config2.default.prefixes_transform),_mixin2.default.vendorize({'transform-origin':'left 50%'},_config2.default.prefixes_transform),_mixin2.default.vendorize({'transition-property':'all'},_config2.default.prefixes_transition),_mixin2.default.vendorize({'transition-timing-function':'ease-out'},_config2.default.prefixes_transition),{position:'absolute',height:a.tab_indicator_height+'px',bottom:0,left:0,'z-index':3,width:'100%'}],' .pe-toolbar--tabs .pe-toolbar__bar &':[_mixin2.default.fit(),{width:'auto',margin:0,top:'auto',' .pe-tabs__row.pe-tabs__row--indent':{margin:0,'padding-left':_config2.default.unit_indent+'px',overflow:'auto'}}]},'@media (min-width: '+_config2.default.breakpoint_small_tablet_portrait+'px)',{'&:not(.pe-tabs--small):not(.pe-tabs--menu) .pe-tabs__tab':{'min-width':a.medium_min_width+'px'}})],'.pe-toolbar--tabs .pe-toolbar__bar':{'background-color':'inherit'}}]};exports.default=function(a){return _mixin2.default.createStyles(a,createStyles)},module.exports=exports['default'];
//# sourceMappingURL=layout.js.map