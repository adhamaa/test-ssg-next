webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/posts/posts.module.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/posts/posts.module.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".posts_link__XdX4H {\r\n    color: #141414;\r\n    text-decoration: none;\r\n    font-size: 1.5rem;\r\n    line-height: 2;\r\n}\r\n\r\n.posts_link__XdX4H:hover {\r\n    color: #41b6ec;\r\n}\r\n\r\n.posts_card__1qBkN {\r\n    width: \"600px\";\r\n    margin: \"0 auto\";\r\n    border: \"1px solid #e4e4e4\";\r\n    borderRadius: \"25px\";\r\n    padding: \"1.5rem 3rem\";\r\n    boxShadow: \"0px 2px 10px 5px #e4e4e4\";\r\n    lineHeight: \"1.5\";\r\n}", "",{"version":3,"sources":["C:/Users/adham/Desktop/nextjs/pages/posts/posts.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,qBAAqB;IACrB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,2BAA2B;IAC3B,oBAAoB;IACpB,sBAAsB;IACtB,qCAAqC;IACrC,iBAAiB;AACrB","file":"posts.module.css","sourcesContent":[".link {\r\n    color: #141414;\r\n    text-decoration: none;\r\n    font-size: 1.5rem;\r\n    line-height: 2;\r\n}\r\n\r\n.link:hover {\r\n    color: #41b6ec;\r\n}\r\n\r\n.card {\r\n    width: \"600px\";\r\n    margin: \"0 auto\";\r\n    border: \"1px solid #e4e4e4\";\r\n    borderRadius: \"25px\";\r\n    padding: \"1.5rem 3rem\";\r\n    boxShadow: \"0px 2px 10px 5px #e4e4e4\";\r\n    lineHeight: \"1.5\";\r\n}"]}]);
// Exports
exports.locals = {
	"link": "posts_link__XdX4H",
	"card": "posts_card__1qBkN"
};
module.exports = exports;


/***/ }),

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
/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.module.css */ "./pages/posts/posts.module.css");
/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_posts_module_css__WEBPACK_IMPORTED_MODULE_2__);
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
    className: _posts_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h2", {
    style: {
      textTransform: "capitalize"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, post.title), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, post.body)), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Get Back"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvcG9zdHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLmpzeCJdLCJuYW1lcyI6WyJwb3N0IiwidXNlUm91dGVyIiwibG9jYWxlIiwic3R5bGVzIiwiY2FyZCIsInRleHRUcmFuc2Zvcm0iLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsdUJBQXVCLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLHVCQUF1QixLQUFLLGtDQUFrQyx1QkFBdUIsS0FBSyw0QkFBNEIseUJBQXlCLDJCQUEyQixzQ0FBc0MsK0JBQStCLGlDQUFpQyxnREFBZ0QsNEJBQTRCLEtBQUssT0FBTyxpSEFBaUgsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSwyREFBMkQsdUJBQXVCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEtBQUsscUJBQXFCLHVCQUF1QixLQUFLLGVBQWUseUJBQXlCLDJCQUEyQixzQ0FBc0MsK0JBQStCLGlDQUFpQyxnREFBZ0QsNEJBQTRCLEtBQUssR0FBRztBQUNqdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxvQkFBYztBQUFBOztBQUFBLE1BQVhBLElBQVcsUUFBWEEsSUFBVzs7QUFDekIsbUJBQW1CQyw2REFBUyxFQUE1QjtBQUFBLE1BQVFDLE1BQVIsY0FBUUEsTUFBUjs7QUFDQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsbUJBQWEsRUFBRTtBQUFqQixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNMLElBQUksQ0FBQ00sS0FBbEQsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSU4sSUFBSSxDQUFDTyxJQUFULENBSEYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsQ0FERjtBQVVELENBWkQ7O0dBQU1QLEk7VUFDZUMscUQ7Ozs7QUFvQ05ELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uZDNkNDA2YjZhMTk2ZWQyNWViNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wb3N0c19saW5rX19YZFg0SCB7XFxyXFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RzX2xpbmtfX1hkWDRIOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM0MWI2ZWM7XFxyXFxufVxcclxcblxcclxcbi5wb3N0c19jYXJkX18xcUJrTiB7XFxyXFxuICAgIHdpZHRoOiBcXFwiNjAwcHhcXFwiO1xcclxcbiAgICBtYXJnaW46IFxcXCIwIGF1dG9cXFwiO1xcclxcbiAgICBib3JkZXI6IFxcXCIxcHggc29saWQgI2U0ZTRlNFxcXCI7XFxyXFxuICAgIGJvcmRlclJhZGl1czogXFxcIjI1cHhcXFwiO1xcclxcbiAgICBwYWRkaW5nOiBcXFwiMS41cmVtIDNyZW1cXFwiO1xcclxcbiAgICBib3hTaGFkb3c6IFxcXCIwcHggMnB4IDEwcHggNXB4ICNlNGU0ZTRcXFwiO1xcclxcbiAgICBsaW5lSGVpZ2h0OiBcXFwiMS41XFxcIjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvYWRoYW0vRGVza3RvcC9uZXh0anMvcGFnZXMvcG9zdHMvcG9zdHMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsaUJBQWlCO0FBQ3JCXCIsXCJmaWxlXCI6XCJwb3N0cy5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5saW5rIHtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluazpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjNDFiNmVjO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIHdpZHRoOiBcXFwiNjAwcHhcXFwiO1xcclxcbiAgICBtYXJnaW46IFxcXCIwIGF1dG9cXFwiO1xcclxcbiAgICBib3JkZXI6IFxcXCIxcHggc29saWQgI2U0ZTRlNFxcXCI7XFxyXFxuICAgIGJvcmRlclJhZGl1czogXFxcIjI1cHhcXFwiO1xcclxcbiAgICBwYWRkaW5nOiBcXFwiMS41cmVtIDNyZW1cXFwiO1xcclxcbiAgICBib3hTaGFkb3c6IFxcXCIwcHggMnB4IDEwcHggNXB4ICNlNGU0ZTRcXFwiO1xcclxcbiAgICBsaW5lSGVpZ2h0OiBcXFwiMS41XFxcIjtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibGlua1wiOiBcInBvc3RzX2xpbmtfX1hkWDRIXCIsXG5cdFwiY2FyZFwiOiBcInBvc3RzX2NhcmRfXzFxQmtOXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wb3N0cy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBwb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fT57cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj5HZXQgQmFjazwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBgJHtwb3N0LmlkfWAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMgfHwgW10sXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBpZCB9IH0pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YCk7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9