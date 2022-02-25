"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _CircularProgress=_interopRequireDefault(require("@material-ui/core/CircularProgress"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _clsx=_interopRequireDefault(require("clsx"));var _propTypes=_interopRequireDefault(require("prop-types"));var styles=function styles(theme){return{root:{}}};var CircularLoader=function CircularLoader(_ref){var classes=_ref.classes,className=_ref.className,_ref$color=_ref.color,color=_ref$color===void 0?"secondary":_ref$color;return/*#__PURE__*/_react["default"].createElement(_CircularProgress["default"],{className:(0,_clsx["default"])(classes.progress,className),color:color})};CircularLoader.propTypes={classes:_propTypes["default"].object.isRequired};var _default=(0,_withStyles["default"])(styles,{withTheme:true})(CircularLoader);exports["default"]=_default;
//# sourceMappingURL=CircularLoader.js.map