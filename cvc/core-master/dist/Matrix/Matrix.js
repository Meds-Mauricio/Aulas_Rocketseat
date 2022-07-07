"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _Meal=_interopRequireDefault(require("@cvccorp-components/icons/dist/Meal"));var _FilterChip=_interopRequireDefault(require("../FilterChip"));var _Tag=_interopRequireDefault(require("../Tag"));var _Typography=_interopRequireDefault(require("../Typography"));var _Button=_interopRequireDefault(require("../Button"));var _LoadingContent=_interopRequireDefault(require("../LoadingContent"));var _Box=_interopRequireDefault(require("../Box"));var _styles=require("./styles");var Matrix=function Matrix(_ref){var classes=_ref.classes,cias=_ref.cias,isLoading=_ref.isLoading;return/*#__PURE__*/_react["default"].createElement(_Box["default"],null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1semibold"},"Melhor pre\xE7o por companhia"),cias.map(function(item,i){return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.item,container:true,spacing:1,key:i},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12},isLoading?/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.imgLoading}),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.nameLoading}))):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement("img",{className:classes.img,src:item.img,alt:item.name}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.name,type:"body2semibold"},item.name))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:4},/*#__PURE__*/_react["default"].createElement(_FilterChip["default"],{matrix:true,disabled:!item.directFlight,label:/*#__PURE__*/_react["default"].createElement("span",null,isLoading?/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.labelLoading}),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.priceLoading})):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,"Voo direto",/*#__PURE__*/_react["default"].createElement("strong",{className:classes.matrixPrice},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",className:item.directFlight&&item.directFlight.isBestOfCategory&&classes.matrixBestPrice},item.directFlight?"R$ ".concat(item.directFlight.price):"R$ 0")),item.directFlight&&item.directFlight.isBestOfGeneral&&/*#__PURE__*/_react["default"].createElement(_Tag["default"],{label:"Melhor",className:classes.matrixBestPriceTag,icon:/*#__PURE__*/_react["default"].createElement(_Meal["default"],{className:classes.matrixBestPriceIcon})})))})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:4},/*#__PURE__*/_react["default"].createElement(_FilterChip["default"],{matrix:true,disabled:!item.oneStopFlight,label:/*#__PURE__*/_react["default"].createElement("span",null,isLoading?/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.labelLoading}),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.priceLoading})):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,"1 parada",/*#__PURE__*/_react["default"].createElement("strong",{className:classes.matrixPrice},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",className:item.oneStopFlight&&item.oneStopFlight.isBestOfCategory&&classes.matrixBestPrice},item.oneStopFlight?"R$ ".concat(item.oneStopFlight.price):"R$ 0")),item.oneStopFlight&&item.oneStopFlight.isBestOfGeneral&&/*#__PURE__*/_react["default"].createElement(_Tag["default"],{label:"Melhor",className:classes.matrixBestPriceTag,icon:/*#__PURE__*/_react["default"].createElement(_Meal["default"],{className:classes.matrixBestPriceIcon})})))})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:4},/*#__PURE__*/_react["default"].createElement(_FilterChip["default"],{matrix:true,disabled:!item.moreStopFlight,label:/*#__PURE__*/_react["default"].createElement("span",null,isLoading?/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.labelLoading}),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{className:classes.priceLoading})):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,"2/+ paradas",/*#__PURE__*/_react["default"].createElement("strong",{className:classes.matrixPrice},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",className:item.moreStopFlight&&item.moreStopFlight.isBestOfCategory&&classes.matrixBestPrice},item.moreStopFlight?"R$ ".concat(item.moreStopFlight.price):"R$ 0")),item.moreStopFlight&&item.moreStopFlight.isBestOfGeneral&&/*#__PURE__*/_react["default"].createElement(_Tag["default"],{label:"Melhor",className:classes.matrixBestPriceTag,icon:/*#__PURE__*/_react["default"].createElement(_Meal["default"],{className:classes.matrixBestPriceIcon})})))})))}),/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.moreBtn,color:"primary",outline:true,label:"Ver mais companhias",disabled:isLoading,variant:"text"}))};Matrix.propTypes={classes:_propTypes["default"].object.isRequired,cias:_propTypes["default"].array.isRequired,isLoading:_propTypes["default"].bool};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(Matrix);exports["default"]=_default;
//# sourceMappingURL=Matrix.js.map