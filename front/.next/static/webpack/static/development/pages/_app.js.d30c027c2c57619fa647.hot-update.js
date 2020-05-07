webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProfileTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileTop */ "./components/ProfileTop.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\components\\AppLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var AppLayout = function AppLayout(_ref) {
  var _jsx;

  var children = _ref.children;

  var onClickMenu = function onClickMenu() {};

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 6,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 12,
    xs: 24 // style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx("img", {
    style: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    src: "/logo300.png",
    alt: "EASYHO Blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 6,
    xs: 24 // style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, me ? __jsx(_ProfileTop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }) : __jsx("div", {
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 49
    }
  }, " \uB85C\uADF8\uC778 ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 50
    }
  }, " \uD68C\uC6D0\uAC00\uC785 "))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 5,
    xs: 24,
    style: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      marginTop: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 49
    }
  }, "about"))), __jsx("div", {
    style: {
      marginTop: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/study",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 49
    }
  }, "study"))), __jsx("div", {
    style: {
      marginTop: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/cook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 48
    }
  }, "cook"))), __jsx("div", {
    style: {
      marginTop: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/free",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 48
    }
  }, "free"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], (_jsx = {
    md: 14,
    xs: 24,
    style: {
      marginTop: 100
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 17
  }), _jsx), children), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 5,
    xs: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.d30c027c2c57619fa647.hot-update.js.map