webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ProfileTop.js":
/*!**********************************!*\
  !*** ./components/ProfileTop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\components\\ProfileTop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ProfileTop = function ProfileTop() {
  var ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ColorList[1]),
      color = _useState[0],
      setColor = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var onClickLogout = function onClickLogout() {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_OUT_REQUEST"]
    });
  };

  var onClickProfile = function onClickProfile() {};

  var onClickMyProfile = function onClickMyProfile(e) {
    e.preventDefault();
  };

  var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 38
    }
  }, "\uB0B4\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "http://www.tmall.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "3rd menu item")));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    overlay: menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "ant-dropdown-link",
    onClick: onClickMyProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    onClick: onClickProfile,
    style: {
      backgroundColor: color
    },
    size: "large",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DownOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 26
    }
  }))), ","));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileTop);

/***/ })

})
//# sourceMappingURL=_app.js.4a781da418586fcc618d.hot-update.js.map