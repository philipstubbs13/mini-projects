webpackHotUpdate("frontity",{

/***/ "./packages/mars-theme/src/components/index.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ \"./packages/mars-theme/src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post */ \"./packages/mars-theme/src/components/post.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading */ \"./packages/mars-theme/src/components/loading.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./title */ \"./packages/mars-theme/src/components/title.js\");\n/* harmony import */ var _page_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-error */ \"./packages/mars-theme/src/components/page-error.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Theme is the root React component of our theme. The one we will export\n * in roots.\n */var Theme=(_ref)=>{var{state}=_ref;// Get information about the current URL.\nvar data=state.source.get(state.router.link);var transitions=Object(react_spring__WEBPACK_IMPORTED_MODULE_11__[\"useTransition\"])(state.router.link,null,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0,display:'none'}});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_3__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"meta\",{name:\"description\",content:state.frontity.description}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"html\",{lang:\"en\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:globalStyles}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(Main,null,transitions.map((_ref2)=>{var{props,key}=_ref2;Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_spring__WEBPACK_IMPORTED_MODULE_11__[\"animated\"].div,{style:props,key:key},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:data.isFetching}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:data.isArchive}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{when:data.isPostType}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_page_error__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:data.isError})));})));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Theme));var globalStyles= false?undefined:{name:\"1q7ziw2-globalStyles\",styles:\"body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,\\\"Droid Sans\\\",\\\"Helvetica Neue\\\",Helvetica,Arial,sans-serif;}a,a:visited{color:inherit;text-decoration:none;};label:globalStyles;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhpbGlcXERlc2t0b3BcXGNvZGluZ19wcm9qZWN0c1xcbWluaS1wcm9qZWN0c1xcZnJvbnRpdHlfd29yZHByZXNzX3RoZW1lX3dpdGhfcmVhY3RcXGZyb250aXR5XFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRHdCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGhpbGlcXERlc2t0b3BcXGNvZGluZ19wcm9qZWN0c1xcbWluaS1wcm9qZWN0c1xcZnJvbnRpdHlfd29yZHByZXNzX3RoZW1lX3dpdGhfcmVhY3RcXGZyb250aXR5XFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi90aXRsZVwiO1xuaW1wb3J0IFBhZ2VFcnJvciBmcm9tIFwiLi9wYWdlLWVycm9yXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbi8qKlxuICogVGhlbWUgaXMgdGhlIHJvb3QgUmVhY3QgY29tcG9uZW50IG9mIG91ciB0aGVtZS4gVGhlIG9uZSB3ZSB3aWxsIGV4cG9ydFxuICogaW4gcm9vdHMuXG4gKi9cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHN0YXRlLnJvdXRlci5saW5rLCBudWxsLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAsIGRpc3BsYXk6ICdub25lJyB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEFkZCBzb21lIG1ldGF0YWdzIHRvIHRoZSA8aGVhZD4gb2YgdGhlIEhUTUwuICovfVxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBBZGQgc29tZSBnbG9iYWwgc3R5bGVzIGZvciB0aGUgd2hvbGUgc2l0ZSwgbGlrZSBib2R5IG9yIGEncy4gXG4gICAgICBOb3QgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgdXNlIENTUy1pbi1KUy4gT25seSBnbG9iYWwgSFRNTCB0YWdzLiAqL31cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIHsvKiBBZGQgdGhlIGhlYWRlciBvZiB0aGUgc2l0ZS4gKi99XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuXG4gICAgICB7LyogQWRkIHRoZSBtYWluIHNlY3Rpb24uIEl0IHJlbmRlcnMgYSBkaWZmZXJlbnQgY29tcG9uZW50IGRlcGVuZGluZ1xuICAgICAgb24gdGhlIHR5cGUgb2YgVVJMIHdlIGFyZSBpbi4gKi99XG4gICAgICA8TWFpbj5cbiAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBwcm9wcywga2V5fSkgPT4ge1xuICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgICAgIDxMaXN0IHdoZW49e2RhdGEuaXNBcmNoaXZlfSAvPlxuICAgICAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIH0pfVxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBhLFxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgSGVhZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMC4xKSxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMClcbiAgKTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var HeadContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1nzqhd60\",label:\"HeadContainer\"})( false?undefined:{name:\"k2inh7\",styles:\"display:flex;align-items:center;flex-direction:column;background-color:red;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhpbGlcXERlc2t0b3BcXGNvZGluZ19wcm9qZWN0c1xcbWluaS1wcm9qZWN0c1xcZnJvbnRpdHlfd29yZHByZXNzX3RoZW1lX3dpdGhfcmVhY3RcXGZyb250aXR5XFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWdDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGhpbGlcXERlc2t0b3BcXGNvZGluZ19wcm9qZWN0c1xcbWluaS1wcm9qZWN0c1xcZnJvbnRpdHlfd29yZHByZXNzX3RoZW1lX3dpdGhfcmVhY3RcXGZyb250aXR5XFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi90aXRsZVwiO1xuaW1wb3J0IFBhZ2VFcnJvciBmcm9tIFwiLi9wYWdlLWVycm9yXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbi8qKlxuICogVGhlbWUgaXMgdGhlIHJvb3QgUmVhY3QgY29tcG9uZW50IG9mIG91ciB0aGVtZS4gVGhlIG9uZSB3ZSB3aWxsIGV4cG9ydFxuICogaW4gcm9vdHMuXG4gKi9cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHN0YXRlLnJvdXRlci5saW5rLCBudWxsLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAsIGRpc3BsYXk6ICdub25lJyB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEFkZCBzb21lIG1ldGF0YWdzIHRvIHRoZSA8aGVhZD4gb2YgdGhlIEhUTUwuICovfVxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBBZGQgc29tZSBnbG9iYWwgc3R5bGVzIGZvciB0aGUgd2hvbGUgc2l0ZSwgbGlrZSBib2R5IG9yIGEncy4gXG4gICAgICBOb3QgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgdXNlIENTUy1pbi1KUy4gT25seSBnbG9iYWwgSFRNTCB0YWdzLiAqL31cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIHsvKiBBZGQgdGhlIGhlYWRlciBvZiB0aGUgc2l0ZS4gKi99XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuXG4gICAgICB7LyogQWRkIHRoZSBtYWluIHNlY3Rpb24uIEl0IHJlbmRlcnMgYSBkaWZmZXJlbnQgY29tcG9uZW50IGRlcGVuZGluZ1xuICAgICAgb24gdGhlIHR5cGUgb2YgVVJMIHdlIGFyZSBpbi4gKi99XG4gICAgICA8TWFpbj5cbiAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBwcm9wcywga2V5fSkgPT4ge1xuICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgICAgIDxMaXN0IHdoZW49e2RhdGEuaXNBcmNoaXZlfSAvPlxuICAgICAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIH0pfVxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBhLFxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgSGVhZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMC4xKSxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMClcbiAgKTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Main=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1nzqhd61\",label:\"Main\"})( false?undefined:{name:\"1m9csha\",styles:\"display:flex;justify-content:center;background-image:linear-gradient( 180deg,rgba(66,174,228,0.1),rgba(66,174,228,0) );\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhpbGlcXERlc2t0b3BcXGNvZGluZ19wcm9qZWN0c1xcbWluaS1wcm9qZWN0c1xcZnJvbnRpdHlfd29yZHByZXNzX3RoZW1lX3dpdGhfcmVhY3RcXGZyb250aXR5XFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRnVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGhpbGlcXERlc2t0b3BcXGNvZGluZ19wcm9qZWN0c1xcbWluaS1wcm9qZWN0c1xcZnJvbnRpdHlfd29yZHByZXNzX3RoZW1lX3dpdGhfcmVhY3RcXGZyb250aXR5XFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi90aXRsZVwiO1xuaW1wb3J0IFBhZ2VFcnJvciBmcm9tIFwiLi9wYWdlLWVycm9yXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbi8qKlxuICogVGhlbWUgaXMgdGhlIHJvb3QgUmVhY3QgY29tcG9uZW50IG9mIG91ciB0aGVtZS4gVGhlIG9uZSB3ZSB3aWxsIGV4cG9ydFxuICogaW4gcm9vdHMuXG4gKi9cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHN0YXRlLnJvdXRlci5saW5rLCBudWxsLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAsIGRpc3BsYXk6ICdub25lJyB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEFkZCBzb21lIG1ldGF0YWdzIHRvIHRoZSA8aGVhZD4gb2YgdGhlIEhUTUwuICovfVxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBBZGQgc29tZSBnbG9iYWwgc3R5bGVzIGZvciB0aGUgd2hvbGUgc2l0ZSwgbGlrZSBib2R5IG9yIGEncy4gXG4gICAgICBOb3QgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgdXNlIENTUy1pbi1KUy4gT25seSBnbG9iYWwgSFRNTCB0YWdzLiAqL31cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIHsvKiBBZGQgdGhlIGhlYWRlciBvZiB0aGUgc2l0ZS4gKi99XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuXG4gICAgICB7LyogQWRkIHRoZSBtYWluIHNlY3Rpb24uIEl0IHJlbmRlcnMgYSBkaWZmZXJlbnQgY29tcG9uZW50IGRlcGVuZGluZ1xuICAgICAgb24gdGhlIHR5cGUgb2YgVVJMIHdlIGFyZSBpbi4gKi99XG4gICAgICA8TWFpbj5cbiAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBwcm9wcywga2V5fSkgPT4ge1xuICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgICAgIDxMaXN0IHdoZW49e2RhdGEuaXNBcmNoaXZlfSAvPlxuICAgICAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIH0pfVxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBhLFxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgSGVhZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMC4xKSxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMClcbiAgKTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzPzgxYTYiXSwibmFtZXMiOlsiVGhlbWUiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidHJhbnNpdGlvbnMiLCJ1c2VUcmFuc2l0aW9uIiwiZnJvbSIsIm9wYWNpdHkiLCJlbnRlciIsImxlYXZlIiwiZGlzcGxheSIsImZyb250aXR5IiwiZGVzY3JpcHRpb24iLCJnbG9iYWxTdHlsZXMiLCJtYXAiLCJwcm9wcyIsImtleSIsImlzRmV0Y2hpbmciLCJpc0FyY2hpdmUiLCJpc1Bvc3RUeXBlIiwiaXNFcnJvciIsImNvbm5lY3QiLCJIZWFkQ29udGFpbmVyIiwiTWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3FSQVdBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUEsTUFBSyxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDM0I7QUFDQSxHQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLEdBQU1DLFlBQVcsQ0FBR0MsbUVBQWEsQ0FBQ1AsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWQsQ0FBb0IsSUFBcEIsQ0FBMEIsQ0FDekRHLElBQUksQ0FBRSxDQUFFQyxPQUFPLENBQUUsQ0FBWCxDQURtRCxDQUV6REMsS0FBSyxDQUFFLENBQUVELE9BQU8sQ0FBRSxDQUFYLENBRmtELENBR3pERSxLQUFLLENBQUUsQ0FBRUYsT0FBTyxDQUFFLENBQVgsQ0FBY0csT0FBTyxDQUFFLE1BQXZCLENBSGtELENBQTFCLENBQWpDLENBTUEsTUFDRSxzSEFFRSwwREFBQyw4Q0FBRCxNQUZGLENBR0UsMERBQUMsNkNBQUQsTUFDRSxrRUFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUVaLEtBQUssQ0FBQ2EsUUFBTixDQUFlQyxXQUFqRCxFQURGLENBRUUsa0VBQU0sSUFBSSxDQUFDLElBQVgsRUFGRixDQUhGLENBVUUsMERBQUMsb0RBQUQsRUFBUSxNQUFNLENBQUVDLFlBQWhCLEVBVkYsQ0FhRSwwREFBQyxhQUFELE1BQ0UsMERBQUMsK0NBQUQsTUFERixDQWJGLENBbUJFLDBEQUFDLElBQUQsTUFDR1QsV0FBVyxDQUFDVSxHQUFaLENBQWdCLFNBQW1CLElBQWxCLENBQUVDLEtBQUYsQ0FBU0MsR0FBVCxDQUFrQixPQUNsQywwREFBQyxzREFBRCxDQUFVLEdBQVYsRUFBYyxLQUFLLENBQUVELEtBQXJCLENBQTRCLEdBQUcsQ0FBRUMsR0FBakMsRUFDRSwwREFBQyxtRUFBRCxNQUNFLDBEQUFDLGdEQUFELEVBQVMsSUFBSSxDQUFFakIsSUFBSSxDQUFDa0IsVUFBcEIsRUFERixDQUVFLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFbEIsSUFBSSxDQUFDbUIsU0FBakIsRUFGRixDQUdFLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFbkIsSUFBSSxDQUFDb0IsVUFBakIsRUFIRixDQUlFLDBEQUFDLG9EQUFELEVBQVcsSUFBSSxDQUFFcEIsSUFBSSxDQUFDcUIsT0FBdEIsRUFKRixDQURGLEVBUUQsQ0FUQSxDQURILENBbkJGLENBREYsQ0FrQ0QsQ0E1Q0QsQ0E4Q2VDLHVIQUFPLENBQUN4QixLQUFELENBQXRCLEVBRUEsR0FBTWdCLGFBQVksMHNJQUFsQixDQWFBLEdBQU1TLGNBQWEsOHFJQUFuQixDQU9BLEdBQU1DLEtBQUksa3RJQUFWIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi90aXRsZVwiO1xuaW1wb3J0IFBhZ2VFcnJvciBmcm9tIFwiLi9wYWdlLWVycm9yXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbi8qKlxuICogVGhlbWUgaXMgdGhlIHJvb3QgUmVhY3QgY29tcG9uZW50IG9mIG91ciB0aGVtZS4gVGhlIG9uZSB3ZSB3aWxsIGV4cG9ydFxuICogaW4gcm9vdHMuXG4gKi9cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHN0YXRlLnJvdXRlci5saW5rLCBudWxsLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAsIGRpc3BsYXk6ICdub25lJyB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEFkZCBzb21lIG1ldGF0YWdzIHRvIHRoZSA8aGVhZD4gb2YgdGhlIEhUTUwuICovfVxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBBZGQgc29tZSBnbG9iYWwgc3R5bGVzIGZvciB0aGUgd2hvbGUgc2l0ZSwgbGlrZSBib2R5IG9yIGEncy4gXG4gICAgICBOb3QgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgdXNlIENTUy1pbi1KUy4gT25seSBnbG9iYWwgSFRNTCB0YWdzLiAqL31cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIHsvKiBBZGQgdGhlIGhlYWRlciBvZiB0aGUgc2l0ZS4gKi99XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuXG4gICAgICB7LyogQWRkIHRoZSBtYWluIHNlY3Rpb24uIEl0IHJlbmRlcnMgYSBkaWZmZXJlbnQgY29tcG9uZW50IGRlcGVuZGluZ1xuICAgICAgb24gdGhlIHR5cGUgb2YgVVJMIHdlIGFyZSBpbi4gKi99XG4gICAgICA8TWFpbj5cbiAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBwcm9wcywga2V5fSkgPT4ge1xuICAgICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgICAgIDxMaXN0IHdoZW49e2RhdGEuaXNBcmNoaXZlfSAvPlxuICAgICAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIH0pfVxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBhLFxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgSGVhZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMC4xKSxcbiAgICByZ2JhKDY2LCAxNzQsIDIyOCwgMClcbiAgKTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/index.js\n");

/***/ })

})