"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _latam=_interopRequireDefault(require("../../assets/img/cias/latam.svg"));var _themes=_interopRequireDefault(require("../../Theme/themes"));var _Matrix=_interopRequireDefault(require("../Matrix"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var MatrixStory=function MatrixStory(_ref){var mode=_ref.mode,brand=_ref.brand,isLoading=_ref.isLoading;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"Matrix"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Matrix"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],null,/*#__PURE__*/_react["default"].createElement(_Matrix["default"],{isLoading:isLoading,cias:[{name:"Latam",img:_latam["default"],directFlight:{price:"8.098",isBestOfCategory:true,isBestOfGeneral:false},oneStopFlight:{price:"6.896",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"6.836",isBestOfCategory:true,isBestOfGeneral:true}},{name:"Gol",img:_latam["default"],directFlight:{price:"8.430",isBestOfCategory:false,isBestOfGeneral:false},oneStopFlight:{price:"6.870",isBestOfCategory:true,isBestOfGeneral:false},moreStopFlight:{price:"7.200",isBestOfCategory:false,isBestOfGeneral:false}},{name:"Avianca",img:_latam["default"],directFlight:null,oneStopFlight:{price:"8.028",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"8.124",isBestOfCategory:false,isBestOfGeneral:false}}]}))))};var argsControls={args:{brand:"CVC",mode:"root",isLoading:false},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},isLoading:{type:"boolean"}}};(0,_react2.storiesOf)("Components/Filtros/Matrix",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(MatrixStory,args)},argsControls);
//# sourceMappingURL=Matrix.stories.js.map