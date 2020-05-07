webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: '제로초'
  },
  content: '나는 더미입니다.',
  comments: []
};
var dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: '포로리'
  },
  createdAt: new Date(),
  content: '더미 댓글입니다.'
};
var initialState = {
  allPost: [{
    id: 1,
    kategorie: null,
    User: {
      id: 1,
      nickname: '보노보노'
    },
    content: '',
    img: '',
    comments: []
  }],
  imagePaths: [],
  addPostErrorReason: '',
  isAddingPost: false,
  postAdded: false,
  isAddingComment: false,
  addCommentErrorReason: '',
  commentAdded: false
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      {
        return _objectSpread({}, state, {
          isAddingPost: true,
          addPostErrorReason: ''
        });
      }

    case ADD_POST_REQUEST:
      {
        return _objectSpread({}, state, {
          isAddingPost: false,
          postAdded: true
        });
      }

    case ADD_POST_REQUEST:
      {
        return _objectSpread({}, state, {
          isAddingPost: false,
          addPostErrorReason: action.data
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.c9b4a2a21c17f7888f3d.hot-update.js.map