"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _styles=require("./styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var Warning=function Warning(){return/*#__PURE__*/_react["default"].createElement("svg",{className:"alertSvg",width:"32",height:"31",viewBox:"0 0 32 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react["default"].createElement("path",{d:"M16 20.1333C15.4666 20.1333 14.9333 20.6667 14.9333 21.2C14.9333 21.7333 15.4666 22.2667 16 22.2667C16.5333 22.2667 17.0666 21.7333 17.0666 21.2C17.0666 20.6667 16.5333 20.1333 16 20.1333Z",fill:"#222222"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M16 18.2667C16.4 18.2667 16.6666 18 16.6666 17.6V8.8C16.6666 8.4 16.4 8.13333 16 8.13333C15.6 8.13333 15.3333 8.4 15.3333 8.8V17.6C15.3333 18 15.6 18.2667 16 18.2667Z",fill:"#222222"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M16 3.33333C9.06665 3.33333 3.33331 9.06667 3.33331 16C3.33331 22.9333 9.06665 28.6667 16 28.6667C22.9333 28.6667 28.6666 22.9333 28.6666 16C28.6666 9.06667 22.9333 3.33333 16 3.33333ZM16 27.3333C9.73331 27.3333 4.66665 22.2667 4.66665 16C4.66665 9.73333 9.73331 4.66667 16 4.66667C22.2666 4.66667 27.3333 9.73333 27.3333 16C27.3333 22.2667 22.2666 27.3333 16 27.3333Z",fill:"#222222"}))};var Close=function Close(){return/*#__PURE__*/_react["default"].createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react["default"].createElement("path",{d:"M18.7 4.60001L12 11.3L5.30001 4.60001C5.10001 4.40001 4.80001 4.40001 4.60001 4.60001C4.40001 4.80001 4.40001 5.10001 4.60001 5.30001L11.3 12L4.60001 18.7C4.40001 18.9 4.40001 19.2 4.60001 19.4C4.80001 19.6 5.10001 19.6 5.30001 19.4L12 12.7L18.7 19.4C18.9 19.6 19.2 19.6 19.4 19.4C19.6 19.2 19.6 18.9 19.4 18.7L12.7 12L19.4 5.30001C19.6 5.10001 19.6 4.80001 19.4 4.60001C19.2 4.40001 18.9 4.40001 18.7 4.60001Z",fill:"#333333"}))};var Seta=function Seta(){return/*#__PURE__*/_react["default"].createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react["default"].createElement("path",{d:"M8.55001 5.60001L3.65001 1.30001C3.55001 1.20001 3.40001 1.20001 3.30001 1.30001C3.20001 1.40001 3.20001 1.55001 3.30001 1.65001L8.20001 6.00001L3.30001 10.3C3.20001 10.4 3.20001 10.55 3.30001 10.65C3.35001 10.7 3.40001 10.75 3.50001 10.75C3.55001 10.75 3.60001 10.75 3.65001 10.7L8.55001 6.40001C8.65001 6.30001 8.75001 6.15001 8.75001 6.00001C8.75001 5.85001 8.70001 5.70001 8.55001 5.60001Z",fill:"#333333"}))};var sessionName="covidAlert";var CovidAlert=function CovidAlert(_ref){var classes=_ref.classes;var closedSession=window.sessionStorage.getItem(sessionName)==="true";var _useState=(0,_react.useState)(closedSession),_useState2=(0,_slicedToArray2["default"])(_useState,2),closed=_useState2[0],setClosed=_useState2[1];var closeAlert=function closeAlert(){window.sessionStorage.setItem(sessionName,"true");setClosed(true)};if(closed===true){return null}return/*#__PURE__*/_react["default"].createElement("div",{className:classes.coronaWarning,id:"coronaWarning"},/*#__PURE__*/_react["default"].createElement("div",{className:classes.coronaFlex},/*#__PURE__*/_react["default"].createElement(Warning,null),/*#__PURE__*/_react["default"].createElement("p",null,/*#__PURE__*/_react["default"].createElement("span",null,"COVID-19: "),/*#__PURE__*/_react["default"].createElement("br",{className:"hide-desk"}),"Informa\xE7\xF5es sobre como proceder com a sua viagem."),/*#__PURE__*/_react["default"].createElement("a",{target:"_blank",rel:"noreferrer",href:"/coronavirus"},"Saiba mais ",/*#__PURE__*/_react["default"].createElement(Seta,null))),/*#__PURE__*/_react["default"].createElement("div",{className:classes.closeBtn,onClick:function onClick(){return closeAlert()}},/*#__PURE__*/_react["default"].createElement(Close,null)))};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(CovidAlert);exports["default"]=_default;
//# sourceMappingURL=CovidAlert.js.map