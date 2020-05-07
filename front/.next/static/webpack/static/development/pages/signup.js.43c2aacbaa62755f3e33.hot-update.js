webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./components/signupsuccess.js":
/*!*************************************!*\
  !*** ./components/signupsuccess.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\components\\signupsuccess.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SignUpSuccess = function SignUpSuccess() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778 \uC131\uACF5", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 33
    }
  }, "\uB85C\uADF8\uC778 \uD654\uBA74")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpSuccess);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_signupsuccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/signupsuccess */ "./components/signupsuccess.js");
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Signup = function Signup() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      isSignedUp = _useSelector.isSignedUp;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isSigningUp ? __jsx(_components_signupsuccess__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }) : __jsx(SignUpForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.43c2aacbaa62755f3e33.hot-update.js.map