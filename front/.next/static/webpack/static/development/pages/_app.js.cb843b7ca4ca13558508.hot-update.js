webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Blog = function Blog(_ref) {
  var Component = _ref.Component,
      store = _ref.store;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "EASYHO Blog"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.0/antd.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(Component, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  })));
};

var configureStore = function configureStore(initialState, options) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var middlewares = [sagaMiddleware];
  var enhancer = false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], initialState, enhancer);
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_8__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(configureStore)(Blog));

/***/ })

})
//# sourceMappingURL=_app.js.cb843b7ca4ca13558508.hot-update.js.map