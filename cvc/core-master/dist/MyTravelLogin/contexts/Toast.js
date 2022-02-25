"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.useToast=useToast;exports.ToastProvider=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _ToastContainer=_interopRequireDefault(require("../shared/components/ToastContainer"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var ToastContext=/*#__PURE__*/(0,_react.createContext)({});var ToastProvider=function ToastProvider(_ref){var children=_ref.children;var _useState=(0,_react.useState)([]),_useState2=(0,_slicedToArray2["default"])(_useState,2),messages=_useState2[0],setMessages=_useState2[1];var addToast=(0,_react.useCallback)(function(_ref2){var type=_ref2.type,title=_ref2.title,description=_ref2.description,id=_ref2.id;var toast={id:id,type:type,title:title,description:description};setMessages(function(oldMessages){return[].concat((0,_toConsumableArray2["default"])(oldMessages),[toast])})},[]);var removeToast=(0,_react.useCallback)(function(id){setMessages(function(state){return state.filter(function(message){return message.id!==id})})},[]);return/*#__PURE__*/_react["default"].createElement(ToastContext.Provider,{value:{addToast:addToast,removeToast:removeToast}},children,/*#__PURE__*/_react["default"].createElement(_ToastContainer["default"],{messages:messages}))};exports.ToastProvider=ToastProvider;function useToast(){var context=(0,_react.useContext)(ToastContext);if(!context){throw new Error("useToast must be used within a ToastProvider")}return context}
//# sourceMappingURL=Toast.js.map