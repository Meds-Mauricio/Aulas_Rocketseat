"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _Toast=_interopRequireDefault(require("./Toast"));var _uuid=require("uuid");var ToastContainer=function ToastContainer(_ref){var messages=_ref.messages;return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,messages.map(function(message){return/*#__PURE__*/_react["default"].createElement(_Toast["default"],{key:(0,_uuid.v4)(),message:message})}))};var _default=ToastContainer;exports["default"]=_default;
//# sourceMappingURL=index.js.map