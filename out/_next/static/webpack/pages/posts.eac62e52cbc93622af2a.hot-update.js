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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\adham\\Desktop\\nextjs\\pages\\posts\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var posts = function posts(_ref) {
  _s();

  var data = _ref.data;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      locale = _useRouter.locale;

  console.log("locale:", locale);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, data.map(function (post, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/".concat(encodeURIComponent(post.id)),
      locale: locale,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "link" // style={{
      //   color: "#141414",
      //   textDecoration: "none",
      //   fontSize: "1.5rem",
      //   lineHeight: "2",
      // }}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }, post.title)));
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
};

_s(posts, "8NqG7Oj4xICngQpoOytAK34hitI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanN4Il0sIm5hbWVzIjpbInBvc3RzIiwiZGF0YSIsInVzZVJvdXRlciIsImxvY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaSIsImVuY29kZVVSSUNvbXBvbmVudCIsImlkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDMUIsbUJBQW1CQyw2REFBUyxFQUE1QjtBQUFBLE1BQVFDLE1BQVIsY0FBUUEsTUFBUjs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsTUFBdkI7QUFDQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FDUjtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUNFLFVBQUksbUJBQVlDLGtCQUFrQixDQUFDRixJQUFJLENBQUNHLEVBQU4sQ0FBOUIsQ0FETjtBQUVFLFlBQU0sRUFBRVAsTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUU7QUFDRSxlQUFTLEVBQUMsTUFEWixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTR0ksSUFBSSxDQUFDSSxLQVRSLENBSkYsQ0FERixDQURRO0FBQUEsR0FBVCxDQURILEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsQ0FERixDQURGO0FBc0NELENBekNEOztHQUFNWCxLO1VBQ2VFLHFEOzs7O0FBcURORixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy5lYWM2MmU1MmNiYzkzNjIyYWYyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IHBvc3RzID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKFwibG9jYWxlOlwiLCBsb2NhbGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8b2w+XHJcbiAgICAgICAge2RhdGEubWFwKChwb3N0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgL3Bvc3RzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3QuaWQpfWB9XHJcbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgLy8gICBjb2xvcjogXCIjMTQxNDE0XCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIC8vICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgIGxpbmVIZWlnaHQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIHsvKiA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTQxNDE0LFxyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUsXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtLFxyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMixcclxuICAgICAgICAgIH1cclxuICAgICAgICAubGluazpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9