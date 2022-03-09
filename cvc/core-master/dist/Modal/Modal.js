"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _DropDown=_interopRequireDefault(require("@cvccorp-components/icons/dist/DropDown"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _clsx=_interopRequireDefault(require("clsx"));var _propTypes=_interopRequireDefault(require("prop-types"));var _Box=_interopRequireDefault(require("../Box"));var _Overlay=_interopRequireDefault(require("../Overlay"));var _Typography=_interopRequireDefault(require("../Typography"));var _styles=require("./styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var Modal=function Modal(_ref){var classes=_ref.classes,onOpen=_ref.onOpen,onClose=_ref.onClose,isOpen=_ref.isOpen,title=_ref.title,children=_ref.children,_ref$isMobile=_ref.isMobile,isMobile=_ref$isMobile===void 0?false:_ref$isMobile;var _useState=(0,_react.useState)(isOpen),_useState2=(0,_slicedToArray2["default"])(_useState,2),active=_useState2[0],setActive=_useState2[1];var classDropdown=function(){if(isMobile)return active?classes.icon:(0,_clsx["default"])(classes.icon,classes.iconActive);return active?(0,_clsx["default"])(classes.icon,classes.iconActive):classes.icon}();var handleClose=function handleClose(){setActive(false);if(onClose)onClose()};var handleOpen=function handleOpen(){if(!active){setActive(true);if(onOpen)onOpen()}else{setActive(false)}};return/*#__PURE__*/_react["default"].createElement(_Box["default"],{onClick:handleOpen,className:active?(0,_clsx["default"])(classes.opened,classes.root):(0,_clsx["default"])(classes.closed,classes.root)},active&&/*#__PURE__*/_react["default"].createElement(_Overlay["default"],{className:classes.overlay,onClick:handleClose}),/*#__PURE__*/_react["default"].createElement("header",{className:classes.header},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold"},title),/*#__PURE__*/_react["default"].createElement(_DropDown["default"],{className:classDropdown})),/*#__PURE__*/_react["default"].createElement("div",{className:active?classes.openedContent:classes.closedContent},children))};Modal.propTypes={classes:_propTypes["default"].object.isRequired,onOpen:_propTypes["default"].func,onClose:_propTypes["default"].func,isOpen:_propTypes["default"].bool,title:_propTypes["default"].string,children:_propTypes["default"].object};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(Modal);exports["default"]=_default;
//# sourceMappingURL=Modal.js.map