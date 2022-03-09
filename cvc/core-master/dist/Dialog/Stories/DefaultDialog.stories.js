"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.DefaultDialog=void 0;var _react=_interopRequireDefault(require("react"));var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _storybookAddonJsx=require("storybook-addon-jsx");var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var _react2=require("@storybook/react");var _storybookAddonMaterialUi=require("storybook-addon-material-ui");var _DefaultDialogStories=require("./DefaultDialog.stories.styles");var _Theme=_interopRequireDefault(require("../../Theme"));var _Dialog=_interopRequireDefault(require("../Dialog"));var useStyles=(0,_styles.makeStyles)(_DefaultDialogStories.themeOverWrites);var actions=[{color:"default",label:"Cancelar",callBack:function callBack(){return alert("Cancelar")}},{color:"primary",label:"Ok,entendi",callBack:function callBack(){return alert("Ok")}}];var DefaultDialog=function DefaultDialog(_ref){var mode=_ref.mode,btn=_ref.btn,title=_ref.title,content=_ref.content;var classes=useStyles();return/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"dialogs"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Dialog"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Dialog["default"],{btn:btn,title:title,content:content,actions:actions}))};exports.DefaultDialog=DefaultDialog;var argsOptions={args:{btn:"Abrir Dialog",title:"Titulo",content:"Conte\xFAdo",mode:"whiteBg"},argTypes:{btn:{type:"string"},title:{type:"string"},content:{type:"string"},mode:{type:"select",options:["whiteBg","darkBg"]}}};(0,_react2.storiesOf)("Components/Dialog",module).addDecorator((0,_storybookAddonMaterialUi.muiTheme)([_Theme["default"]])).addDecorator(_storybookAddonJsx.jsxDecorator).add("Badge",function(args){return/*#__PURE__*/_react["default"].createElement(DefaultDialog,args)},argsOptions);
//# sourceMappingURL=DefaultDialog.stories.js.map