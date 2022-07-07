"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _styles=require("@material-ui/core/styles");var _propTypes=_interopRequireDefault(require("prop-types"));var _Filter=_interopRequireDefault(require("../Filter"));var _FilterChip=_interopRequireDefault(require("../FilterChip"));var _styles2=require("./styles");var FilterGrid=function FilterGrid(_ref){var filter=_ref.filter,classes=_ref.classes,_onApply=_ref.onApply,_onReset=_ref.onReset,label=_ref.label,isAmenities=_ref.isAmenities,isLuggage=_ref.isLuggage,noModal=_ref.noModal,onChange=_ref.onChange,items=_ref.items,isMobile=_ref.isMobile,open=_ref.open,_onOpen=_ref.onOpen,_onClose=_ref.onClose,sufix=_ref.sufix,onActive=_ref.onActive,className=_ref.className,height=_ref.height;var getSelectedValues=function getSelectedValues(){var selecteds=items.filter(function(v){return v.checked===true});return selecteds};var selecteds=getSelectedValues();var isActive=!!selecteds.length;var change=function change(option,index,isChecked){Object.assign(option,{checked:isChecked});Object.assign(items[index],{checked:isChecked});onChange(option,items);onActive(getSelectedValues().length>0)};var cleanFilterOnClose=function cleanFilterOnClose(){if(!filter.applied){var newItems=items.filter(function(el){return el.checked}).map(function(el){el.checked=false;return el});if(onChange)onChange(items,newItems);if(onActive)onActive(false)}};return/*#__PURE__*/_react["default"].createElement(_Filter["default"],{label:label,className:className,type:"grid",noModal:noModal,isMobile:isMobile,height:height,items:items.map(function(option,index){return/*#__PURE__*/_react["default"].createElement(_FilterChip["default"],{className:classes.chip,key:option,disabled:option.disabled,isActive:option.checked,isAmenities:isAmenities,isLuggage:isLuggage,label:/*#__PURE__*/_react["default"].createElement("span",null,option.icon&&/*#__PURE__*/_react["default"].createElement(option.icon,{size:option.size}),/*#__PURE__*/_react["default"].createElement("span",{className:classes.amenitiesText},option.label)),onClick:function onClick(isChecked){return change(option,index,isChecked)}})}),sufix:sufix,onOpen:function onOpen(){return _onOpen(true)},onClose:function onClose(){cleanFilterOnClose();_onClose()},isOpen:open,onReset:function onReset(){_onReset()},onApply:function onApply(){_onApply()},disabled:selecteds.length===0,isActive:!noModal&&isActive,value:selecteds.length===1?[selecteds[0].label]:selecteds})};FilterGrid.defaultProps={isAmenities:false,isLuggage:false,open:false,isMobile:false,sufix:"",label:"",noModal:false,items:[],onOpen:function onOpen(){},onClose:function onClose(){},onApply:function onApply(){},onReset:function onReset(){},onChange:function onChange(){},onActive:function onActive(){}};FilterGrid.propTypes={isAmenities:_propTypes["default"].bool,isLuggage:_propTypes["default"].bool,isMobile:_propTypes["default"].bool,noModal:_propTypes["default"].bool,open:_propTypes["default"].bool,label:_propTypes["default"].string,onOpen:_propTypes["default"].func,onClose:_propTypes["default"].func,onApply:_propTypes["default"].func,onReset:_propTypes["default"].func,onChange:_propTypes["default"].func,onActive:_propTypes["default"].func,sufix:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({code:_propTypes["default"].number,label:_propTypes["default"].string,icon:_propTypes["default"].elementType,size:_propTypes["default"].string,checked:_propTypes["default"].bool}))};var _default=(0,_styles.withStyles)(_styles2.styles,{withTheme:true})(FilterGrid);exports["default"]=_default;
//# sourceMappingURL=FilterGrid.js.map