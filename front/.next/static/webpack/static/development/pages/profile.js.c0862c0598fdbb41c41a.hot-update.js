webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\pages\\profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Profile = function Profile() {
  var ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ColorList[1]),
      color = _useState[0],
      setColor = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(); // useEffect(() => {
  //     if (!me) {
  //         Router.push('/')
  //     }
  // }, [me && me.id])

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!me) {
      next_router__WEBPACK_IMPORTED_MODULE_6__["Router"].push('/');
    }
  }, [me && me.id]);

  var onClickLogout = function onClickLogout() {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_OUT_REQUEST"]
    });
  };

  var onClickProfile = function onClickProfile() {};

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
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
        lineNumber: 50,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.c0862c0598fdbb41c41a.hot-update.js.map