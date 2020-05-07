webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\BLOG\\front\\components\\PostCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostCard = function PostCard(_ref) {
  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var Meta = antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    hoverable: true,
    style: {
      width: 250,
      heigth: 350
    },
    cover: __jsx("img", {
      alt: "example",
      src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 24
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(Meta, {
    title: post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.b99f08b77bf868cf701f.hot-update.js.map