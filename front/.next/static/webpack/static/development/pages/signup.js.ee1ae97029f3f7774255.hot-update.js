webpackHotUpdate("static\\development\\pages\\signup.js",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Signup = function Signup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nickname = _useState2[0],
      setNickname = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passwordError = _useState5[0],
      setPasswordError = _useState5[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      isSigningUp = _useSelector.isSigningUp;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var onFinshSignUpForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"],
      data: {
        id: id,
        password: password,
        nickname: nickname
      }
    });
    return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
  }, [password, passwordCheck]);

  var onChangeId = function onChangeId(e) {
    setId(e.target.value);
  };

  var onChangeNickname = function onChangeNickname(e) {
    setNickname(e.target.value);
  };

  var onChangepassword = function onChangepassword(e) {
    setPasswordError(e.target.value !== password);
    setPassword(e.target.value);
  };

  var onChangepasswordCheck = function onChangepasswordCheck(e) {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onFinshSignUpForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "\uC544\uC774\uB514",
    name: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: id,
    onChange: onChangeId,
    placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "\uB2C9\uB124\uC784",
    name: "nickname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: nickname,
    onChange: onChangeNickname,
    placeholder: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "\uBE44\uBC00\uBC88\uD638",
    name: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "password",
    value: password,
    onChange: onChangepassword,
    placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
    name: "passwordcheck",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "password",
    value: passwordCheck,
    onChange: onChangepasswordCheck,
    placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC785\uB825\uD558\uC138\uC694",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })), passwordError && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 31
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isSigningUp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "\uAC00\uC785\uD558\uAE30")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.ee1ae97029f3f7774255.hot-update.js.map