webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_master_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/master.scss */ "./scss/master.scss");
/* harmony import */ var _scss_master_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_master_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SiteHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SiteHeader */ "./components/SiteHeader.js");
/* harmony import */ var _SiteFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SiteFooter */ "./components/SiteFooter.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/Layout.js";






react_ga__WEBPACK_IMPORTED_MODULE_5__["default"].initialize('UA-50643936-1');
/**
 * @return {null}
 */

function Analytics(props) {
  react_ga__WEBPACK_IMPORTED_MODULE_5__["default"].set({
    page: props.location.pathname + props.location.search
  });
  react_ga__WEBPACK_IMPORTED_MODULE_5__["default"].pageview(props.location.pathname + props.location.search);
  return null;
}
/* // unregister serviceworkers:
if ('serviceWorker' in navigator) {
  // unregister the service worker if serviceWorker feature is disabled:
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
} */


var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.title ? props.title : 'Eric Constantinides'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.metaDescription ? props.metaDescription : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PortfolioItem */ "./components/PortfolioItem.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/projects */ "./data/projects.js");
/* harmony import */ var _data_introduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/introduction */ "./data/introduction.js");
/* harmony import */ var _data_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/meta */ "./data/meta.js");

var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/pages/index.js";

// import BodyClassName from 'react-body-classname'
// import DocumentTitle from 'react-document-title'






var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    metaDescription: _data_meta__WEBPACK_IMPORTED_MODULE_6__["default"].metaDescription,
    pageTitle: 'Eric Constantinides | A web app developer'
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "site-section portfolio__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "site-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "header portfolio__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Eric Constantinides' Portfolio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, _data_introduction__WEBPACK_IMPORTED_MODULE_5__["default"].homepage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Projects")), _data_projects__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.bc04b5d77880c1bf7e87.hot-update.js.map