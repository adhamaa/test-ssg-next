webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].jsx":
/*!******************************!*\
  !*** ./pages/posts/[id].jsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.module.css */ "./pages/posts/posts.module.css");
/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_posts_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\adham\\Desktop\\nextjs\\pages\\posts\\[id].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var post = function post(_ref) {
  _s();

  var post = _ref.post;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      locale = _useRouter.locale;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _posts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h2", {
    style: {
      textTransform: "capitalize"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, post.title), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, post.body), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _posts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,
    href: "posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "locale=", locale, "BACK")));
};

_s(post, "8NqG7Oj4xICngQpoOytAK34hitI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (post);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLmpzeCJdLCJuYW1lcyI6WyJwb3N0IiwidXNlUm91dGVyIiwibG9jYWxlIiwic3R5bGVzIiwiY2FyZCIsInRleHRUcmFuc2Zvcm0iLCJ0aXRsZSIsImJvZHkiLCJidG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxvQkFBYztBQUFBOztBQUFBLE1BQVhBLElBQVcsUUFBWEEsSUFBVzs7QUFDekIsbUJBQW1CQyw2REFBUyxFQUE1QjtBQUFBLE1BQVFDLE1BQVIsY0FBUUEsTUFBUjs7QUFDQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsbUJBQWEsRUFBRTtBQUFqQixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNMLElBQUksQ0FBQ00sS0FBbEQsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSU4sSUFBSSxDQUFDTyxJQUFULENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLGdEQUFEO0FBQU0sYUFBUyxFQUFFSix3REFBTSxDQUFDSyxHQUF4QjtBQUE2QixRQUFJLEVBQUUsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDVU4sTUFEVixTQUxGLENBREYsQ0FERjtBQWNELENBaEJEOztHQUFNRixJO1VBQ2VDLHFEOzs7O0FBd0NORCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9baWRdLmY4NzVjMzA4ZDFhNzU3YjJjOGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Bvc3RzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IHBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19Pntwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBocmVmPXtcInBvc3RzXCJ9PlxyXG4gICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICBCQUNLXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgocG9zdCkgPT4gKHtcclxuICAgIHBhcmFtczogeyBpZDogYCR7cG9zdC5pZH1gIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzIHx8IFtdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgaWQgfSB9KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2lkfWApO1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0LFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==