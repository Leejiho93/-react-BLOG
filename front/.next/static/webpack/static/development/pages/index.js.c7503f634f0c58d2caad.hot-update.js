webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Home = function Home() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      allPosts = _useSelector.allPosts;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '30px 50px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, allPosts.map(function (v) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: v,
      post: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c7503f634f0c58d2caad.hot-update.js.map