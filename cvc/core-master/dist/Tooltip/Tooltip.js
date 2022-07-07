"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Typography=_interopRequireDefault(require("../Typography"));var _styles=require("./styles");var Tooltip=function Tooltip(_ref){var classes=_ref.classes,label=_ref.label,children=_ref.children,className=_ref.className;return/*#__PURE__*/_react["default"].createElement("span",{className:"".concat(classes.root," ").concat(className||"")},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular",className:"tooltip"},label),children)};Tooltip.propTypes={classes:_propTypes["default"].object.isRequired,label:_propTypes["default"].oneOfType([_propTypes["default"].object,_propTypes["default"].string]),children:_propTypes["default"].object};var _default=(0,_withStyles["default"])(_styles.styles)(Tooltip);exports["default"]=_default;
//# sourceMappingURL=Tooltip.js.map