"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../../Theme/themes"));var _Info=_interopRequireDefault(require("../Info"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var RoomInfoStory=function RoomInfoStory(_ref){var mode=_ref.mode,brand=_ref.brand,bedInfo=_ref.bedInfo,noRefundable=_ref.noRefundable;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"Room/Info"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"RoomInfo"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_Info["default"],{bedInfo:bedInfo,noRefundable:noRefundable}))))};var argsControls={args:{brand:"CVC",mode:"root",bedInfo:"Uma cama de casal ou 2 de solteiro",noRefundable:true},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},bedInfo:{type:"string"},noRefundable:{type:"boolean"}}};(0,_react2.storiesOf)("Components/Room/Info",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(RoomInfoStory,args)},argsControls);
//# sourceMappingURL=Info.stories.js.map