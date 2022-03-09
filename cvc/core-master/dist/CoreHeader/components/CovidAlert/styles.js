"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.styles=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var styles=function styles(theme){var _a,_closing,_coronaWarning,_coronaFlex;return{coronaWarning:(_coronaWarning={left:"0px",right:"0px",top:"0",height:"130px",paddingLeft:"22px",paddingRight:"22px",background:"#f8db1c",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"HindMRegular",fontStyle:"normal",fontWeight:"normal",fontSize:"12px",lineHeight:"22px",transition:"0.4s ease-in-out",zIndex:"9999"},(0,_defineProperty2["default"])(_coronaWarning,theme.breakpoints.up("xl"),{height:"60px",paddingLeft:"49px",paddingRight:"49px",fontSize:"16px"}),(0,_defineProperty2["default"])(_coronaWarning,"& p",(0,_defineProperty2["default"])({marginLeft:"40px",width:"80%"},theme.breakpoints.up("xl"),{marginLeft:"0px",width:"auto"})),(0,_defineProperty2["default"])(_coronaWarning,"& span",(0,_defineProperty2["default"])({fontFamily:"HindMBold"},theme.breakpoints.up("xl"),{marginRight:"11px"})),(0,_defineProperty2["default"])(_coronaWarning,"& a",(_a={marginLeft:"40px",fontFamily:"HindMBold",color:"#000",cursor:"pointer",position:"relative",marginBottom:"16px"},(0,_defineProperty2["default"])(_a,theme.breakpoints.up("xl"),{marginLeft:"25px",marginRight:"25px",marginBottom:"0"}),(0,_defineProperty2["default"])(_a,"& img",{position:"absolute",top:"5px",paddingLeft:"3px"}),_a)),(0,_defineProperty2["default"])(_coronaWarning,"&.closing",(_closing={},(0,_defineProperty2["default"])(_closing,theme.breakpoints.down("xl"),{top:"-500px"}),(0,_defineProperty2["default"])(_closing,theme.breakpoints.up("xl"),{top:"-150px"}),_closing)),(0,_defineProperty2["default"])(_coronaWarning,"& .alertSvg",(0,_defineProperty2["default"])({position:"absolute",width:"38px",height:"38px",left:"11px",top:"17px"},theme.breakpoints.up("xl"),{position:"initial",width:"32px",height:"32px",marginRight:"11px"})),_coronaWarning),coronaFlex:(_coronaFlex={height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},(0,_defineProperty2["default"])(_coronaFlex,theme.breakpoints.up("xl"),{width:"100%",maxWidth:"1280px",paddingLeft:"25px",margin:"auto",flexDirection:"row",alignItems:"center",justifyContent:"initial"}),(0,_defineProperty2["default"])(_coronaFlex,"& .hide-desk",(0,_defineProperty2["default"])({display:"block"},theme.breakpoints.up("xl"),{display:"none"})),_coronaFlex),coronaClose:(0,_defineProperty2["default"])({cursor:"pointer",position:"absolute",right:"20px",top:"20px"},theme.breakpoints.up("xl"),{position:"initial"}),closeBtn:{cursor:"pointer"}}};exports.styles=styles;
//# sourceMappingURL=styles.js.map