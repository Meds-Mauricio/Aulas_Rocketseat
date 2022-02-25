"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _styles2=require("../styles");var _TripAdvisor=_interopRequireDefault(require("../TripAdvisor"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var useStyles=(0,_styles.makeStyles)(function(theme){return _objectSpread(_objectSpread({},_styles2.styles),{},{rootBg:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}})});var TripAdvisorStory=function TripAdvisorStory(_ref){var mode=_ref.mode,brand=_ref.brand,rate=_ref.rate,totalAvaliations=_ref.totalAvaliations;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"TripAdvisor"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"TripAdvisor"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_TripAdvisor["default"],{classes:classes,rate:rate,totalAvaliations:totalAvaliations}))))};var argsControls={args:{brand:"CVC",mode:"rootBg",rate:10,totalAvaliations:"500"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["rootBg","darkBg"]},rate:{type:"select",options:[1,2,3,4,5,6,7,8,9,10]},totalAvaliations:{type:"string"}}};(0,_react2.storiesOf)("Components/TripAdvisor",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(TripAdvisorStory,args)},argsControls);
//# sourceMappingURL=TripAdvisor.stories.js.map