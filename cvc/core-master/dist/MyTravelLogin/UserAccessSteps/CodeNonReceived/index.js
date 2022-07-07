"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _react=_interopRequireWildcard(require("react"));var _core=require("@material-ui/core");var _awsAmplify=require("aws-amplify");var _reactIntl=require("react-intl");var _Typography=_interopRequireDefault(require("../../../Typography"));var _useGa2=_interopRequireDefault(require("../../../utils/useGa"));var _AmplifyContext=require("../../contexts/AmplifyContext");var _renderSteps=require("../../contexts/renderSteps");var _HeaderLogin=_interopRequireDefault(require("../../shared/components/HeaderLogin"));var _InternalButton=_interopRequireDefault(require("../../shared/components/InternalButton"));var _SubTitle=_interopRequireDefault(require("../../shared/components/SubTitle"));var _Terms=_interopRequireDefault(require("../../shared/components/Terms"));var _Title=_interopRequireDefault(require("../../shared/components/Title"));var _UserContext=require("../../shared/hooks/UserContext");var _translate=_interopRequireDefault(require("../../shared/i18n/translate"));var _styles=_interopRequireDefault(require("./styles"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var CodeNonReceived=function CodeNonReceived(_ref){var intl=_ref.intl,onCloseClick=_ref.onCloseClick,isModal=_ref.isModal;var classes=(0,_styles["default"])({});var _useRenderSteps=(0,_renderSteps.useRenderSteps)(),renderNewStep=_useRenderSteps.renderNewStep,setPreviousStep=_useRenderSteps.setPreviousStep;var _useAuthAmplifyContex=(0,_AmplifyContext.useAuthAmplifyContext)(),authAmplify=_useAuthAmplifyContex.authAmplify;var _useGa=(0,_useGa2["default"])(),saveOnGa=_useGa.saveOnGa;var _useUserData=(0,_UserContext.useUserData)(),user=_useUserData.user,setUser=_useUserData.setUser;(0,_react.useEffect)(function(){setPreviousStep("ValidationCode")},[]);var handleSendCode=function handleSendCode(){return new Promise(/*#__PURE__*/(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:saveOnGa({event:"login_event",category:"Account",action:"Validation code",label:"action :: forwarding recovery code"});_context.prev=1;if(!(authAmplify==="confirmSignUp")){_context.next=8;break}_context.next=5;return _awsAmplify.Auth.resendSignUp(user.email);case 5:renderNewStep("ValidationCode");_context.next=11;break;case 8:_context.next=10;return _awsAmplify.Auth.forgotPassword(user.email);case 10:renderNewStep("ValidationCode");case 11:_context.next=15;break;case 13:_context.prev=13;_context.t0=_context["catch"](1);case 15:case"end":return _context.stop();}}},_callee,null,[[1,13]])})))};var handleMainScreen=function handleMainScreen(){saveOnGa({event:"login_event",category:"Account",action:"Change email",label:"action :: change email"});setUser(_objectSpread(_objectSpread({},user),{},{email:""}));renderNewStep("MainScreen")};return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_HeaderLogin["default"],{isModal:isModal,previousStep:"ValidationCode",onCloseClick:onCloseClick}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.root},/*#__PURE__*/_react["default"].createElement(_Title["default"],null,(0,_translate["default"])({id:"CodeNonReceived.title"})),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2regular",className:classes.subTitle},(0,_translate["default"])({id:"CodeNonReceived.subTitle",value:{email:/*#__PURE__*/_react["default"].createElement("strong",null,user?user.email:"")}})),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2regular",className:classes.cautionText},(0,_translate["default"])({id:"CodeNonReceived.caution"})),/*#__PURE__*/_react["default"].createElement(_core.Link,{onClick:handleMainScreen,className:classes.changeEmail},/*#__PURE__*/_react["default"].createElement(_SubTitle["default"],{variant:"caption",className:classes.subTitleLinkChangeEmail},(0,_translate["default"])({id:"CodeNonReceived.linkChangeEmail"}))),/*#__PURE__*/_react["default"].createElement("div",{className:classes.buttonContainer},/*#__PURE__*/_react["default"].createElement(_InternalButton["default"],{text:intl.formatMessage({id:"CodeNonReceived.actionButton"}),handlerClick:handleSendCode}))),/*#__PURE__*/_react["default"].createElement(_Terms["default"],null))};var _default=(0,_reactIntl.injectIntl)(CodeNonReceived);exports["default"]=_default;
//# sourceMappingURL=index.js.map