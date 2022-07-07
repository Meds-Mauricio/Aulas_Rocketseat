"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Typography=_interopRequireDefault(require("../Typography"));var _styles=require("./styles");var FilterTitle=function FilterTitle(_ref){var classes=_ref.classes,label=_ref.label;return/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.root,type:"captionsemibold"},label)};FilterTitle.propTypes={classes:_propTypes["default"].object.isRequired,label:_propTypes["default"].string.isRequired};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(FilterTitle);exports["default"]=_default;
//# sourceMappingURL=FilterTitle.js.map