webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts/index.jsx":
/*!*******************************!*\
  !*** ./pages/posts/index.jsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\adham\\Desktop\\nextjs\\pages\\posts\\index.jsx",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var posts = function posts(_ref) {
  _s();

  var data = _ref.data;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      locale = _useRouter.locale;

  console.log("locale:", locale);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ol", {
    className: "jsx-1080059717",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, data.map(function (post, i) {
    return __jsx("li", {
      key: i,
      className: "jsx-1080059717",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/posts/".concat(encodeURIComponent(post.id)),
      locale: locale,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("a", {
      style: {
        color: "#141414",
        textDecoration: "none",
        fontSize: "1.5rem",
        lineHeight: "2"
      },
      className: "jsx-1080059717" + " " + "hover",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }, post.title)));
  }), __jsx("br", {
    className: "jsx-1080059717",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1080059717",
    __self: _this
  }, ".hover.jsx-1080059717:hover{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWRoYW1cXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHBvc3RzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUdzQixXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWRoYW1cXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHBvc3RzXFxpbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgcG9zdHMgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc29sZS5sb2coXCJsb2NhbGU6XCIsIGxvY2FsZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxvbD5cclxuICAgICAgICB7ZGF0YS5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e2AvcG9zdHMvJHtlbmNvZGVVUklDb21wb25lbnQocG9zdC5pZCl9YH1cclxuICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTQxNDE0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\adham\\\\Desktop\\\\nextjs\\\\pages\\\\posts\\\\index.jsx */"));
};

_s(posts, "8NqG7Oj4xICngQpoOytAK34hitI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (posts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanN4Il0sIm5hbWVzIjpbInBvc3RzIiwiZGF0YSIsInVzZVJvdXRlciIsImxvY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaSIsImVuY29kZVVSSUNvbXBvbmVudCIsImlkIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzFCLG1CQUFtQkMsNkRBQVMsRUFBNUI7QUFBQSxNQUFRQyxNQUFSLGNBQVFBLE1BQVI7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLE1BQXZCO0FBQ0EsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FDUjtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQ0UsVUFBSSxtQkFBWUMsa0JBQWtCLENBQUNGLElBQUksQ0FBQ0csRUFBTixDQUE5QixDQUROO0FBRUUsWUFBTSxFQUFFUCxNQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUVFLFdBQUssRUFBRTtBQUNMUSxhQUFLLEVBQUUsU0FERjtBQUVMQyxzQkFBYyxFQUFFLE1BRlg7QUFHTEMsZ0JBQVEsRUFBRSxRQUhMO0FBSUxDLGtCQUFVLEVBQUU7QUFKUCxPQUZUO0FBQUEsMENBQ1ksT0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0dQLElBQUksQ0FBQ1EsS0FUUixDQUpGLENBREYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxFQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsQ0FERjtBQUFBO0FBQUE7QUFBQSxxcEVBREY7QUFnQ0QsQ0FuQ0Q7O0dBQU1mLEs7VUFDZUUscUQ7Ozs7QUErQ05GLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLjY3YTMyNDc5NzAxNDE5YTg1MTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgcG9zdHMgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc29sZS5sb2coXCJsb2NhbGU6XCIsIGxvY2FsZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxvbD5cclxuICAgICAgICB7ZGF0YS5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e2AvcG9zdHMvJHtlbmNvZGVVUklDb21wb25lbnQocG9zdC5pZCl9YH1cclxuICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTQxNDE0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9