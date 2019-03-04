module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_master_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/master.scss */ "./scss/master.scss");
/* harmony import */ var _scss_master_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_master_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SiteHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SiteHeader */ "./components/SiteHeader.js");
/* harmony import */ var _SiteFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SiteFooter */ "./components/SiteFooter.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/Layout.js";






react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.initialize('UA-50643936-1');
/**
 * @return {null}
 */

function Analytics(props) {
  react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.set({
    page: props.location.pathname + props.location.search
  });
  react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.pageview(props.location.pathname + props.location.search);
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "//fonts.googleapis.com/css?family=Oswald:400,300|Quattrocento+Sans:400,700,400italic",
    rel: "stylesheet",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/SiteFooter.js":
/*!**********************************!*\
  !*** ./components/SiteFooter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/SiteFooter.js";


var SiteFooter = function SiteFooter() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "u-ta-c site-footer print-hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "site-footer__p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\xA9 ", new Date().getFullYear(), " Eric Constantinides")));
};

/* harmony default export */ __webpack_exports__["default"] = (SiteFooter);

/***/ }),

/***/ "./components/SiteHeader.js":
/*!**********************************!*\
  !*** ./components/SiteHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/SiteHeader.js";



var SiteHeader = function SiteHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "site-header__container valprop valprop--portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-nav__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "main-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Home", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "u-small-hide--inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, " / Portfolio"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Resume")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/static/Eric_Constantinides_resume.pdf",
    className: "main-nav__item main-nav__item--pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Literally the resume page saved as a PDF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "PDF Resume"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.muddlingthroughcode.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "main-nav__item external-link external-link--white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Blog")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SiteHeader);

/***/ }),

/***/ "./components/resume/Experience.js":
/*!*****************************************!*\
  !*** ./components/resume/Experience.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Initiatives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initiatives */ "./components/resume/Initiatives.js");
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/resume/Experience.js";



var splitArray = function splitArray(arr) {
  return [arr.filter(function (item, index) {
    return index + 1 <= Math.round(arr.length / 2);
  }), arr.filter(function (item, index) {
    return index + 1 > Math.round(arr.length / 2);
  })];
};

var Experience = function Experience(props) {
  function renderProjects(project) {
    var title = project.alt_title ? project.alt_title : project.title;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      className: "project",
      key: project.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "project__inner project__meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__title-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, title)), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "(", project.date, ") "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, project.role), ",", ' ', project.primary_tech.join(', ')));
  }

  function renderPosition(position) {
    var meta = position.meta ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "job__position-meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, " (", position.meta, ")") : '';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__position",
      key: position.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, position.title, meta, ":"), ' ', position.info));
  }

  function renderExperienceItems(item) {
    var date = item.startDate ? item.startDate + (item.endDate ? ' - ' + item.endDate : '') : '';
    var location = item.location ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, ' ', "in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "job__header-location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, item.location)) : '';
    var splitProjects = item.projects ? splitArray(item.projects) : null;
    var leftProjects = splitProjects && splitProjects[0].map(renderProjects);
    var rightProjects = splitProjects && splitProjects[1].map(renderProjects);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      key: item.name,
      className: "job print-avoid-break",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "job__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__header-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "job__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, item.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, item.description, location))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__header-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__header-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, item.position.map(renderPosition)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Initiatives__WEBPACK_IMPORTED_MODULE_1__["default"], {
      initiatives: item.initiatives,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), item.projects && item.projects.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects__column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, leftProjects), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects__column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, rightProjects)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "".concat(props.propsClass, " site-section"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, props.name), props.items.map(renderExperienceItems));
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./components/resume/Header.js":
/*!*************************************!*\
  !*** ./components/resume/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/resume/Header.js";


var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "resume-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resume-header__image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "resume-header__image",
    src: props.image,
    alt: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resume-header__copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "resume-header__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "resume-header__meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "resume-header__meta-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(props.email),
    "data-print-url": "no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "resume-header__meta-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resume-header__meta-inner-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resume-header__meta-inner-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.phone)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "resume-header__meta-item social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "social-link social-link__github u-hide-text resume-header__meta-inner-item",
    href: "//github.com/".concat(props.github),
    title: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-print-url": "github.com/".concat(props.github),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "github.com/", props.github), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "social-link social-link__linkedin u-hide-text resume-header__meta-inner-item",
    href: "//linkedin.com/in/".concat(props.linkedin),
    title: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-print-url": "linkedin.com/in/".concat(props.linkedin),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "linkedin.com/in/", props.linkedin))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/resume/Initiatives.js":
/*!******************************************!*\
  !*** ./components/resume/Initiatives.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/resume/Initiatives.js";



var InitiativeSide = function InitiativeSide(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects__column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project project--skills",
      key: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "project__inner project__meta u-mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__title no-underline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__title-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, item.title)), ' ', "- ", item.info));
  }));
};

var Initiatives = function Initiatives(_ref2) {
  var initiatives = _ref2.initiatives;

  if (!initiatives || initiatives.length === 0) {
    return null;
  }

  var splitInitiatives = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["splitArray"])(initiatives);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "job",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InitiativeSide, {
    items: splitInitiatives[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InitiativeSide, {
    items: splitInitiatives[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Initiatives);

/***/ }),

/***/ "./components/resume/Introduction.js":
/*!*******************************************!*\
  !*** ./components/resume/Introduction.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/resume/Introduction.js";


var Introduction = function Introduction(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "site-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Intro"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.introduction
    },
    className: "introduction u-kill-last-margin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./components/resume/Skills.js":
/*!*************************************!*\
  !*** ./components/resume/Skills.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/components/resume/Skills.js";


var Skills = function Skills(props) {
  function renderSkills(item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project project--skills",
      key: item.skill,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "project__inner project__meta u-mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__title no-underline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project__title-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.skill)), ", ", item.subSkills.join(', ')));
  }

  function renderType(item) {
    var leftSkills = item.skills.filter(function (project, index) {
      return index + 1 <= Math.round(item.skills.length / 2);
    }).map(renderSkills);
    var rightSkills = item.skills.filter(function (project, index) {
      return index + 1 > Math.round(item.skills.length / 2);
    }).map(renderSkills);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job",
      key: item.type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "job__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__header-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "job__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.human, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, item.meta))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__header-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects__column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, leftSkills), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projects__column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, rightSkills)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "site-section print-avoid-break",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Skills"), props.items.map(renderType));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./data/education.js":
/*!***************************!*\
  !*** ./data/education.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var education = [{
  name: 'W.P. Carey School of Business',
  url: 'wpcarey.asu.edu',
  startDate: 'Arizona State University',
  location: 'Tempe, AZ',
  position: [{
    title: 'Bachelor of Science, Computer Information Systems (CIS)',
    info: '3.75 Computer Information Systems GPA'
  }, {
    title: 'Bachelor of Science, Marketing',
    info: '4.0 Marketing GPA'
  }],
  projects: []
}];
/* harmony default export */ __webpack_exports__["default"] = (education);

/***/ }),

/***/ "./data/experience.js":
/*!****************************!*\
  !*** ./data/experience.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./data/projects.js");
 // return array of objects of employer

var getProjects = function getProjects(employer) {
  return _projects__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (project) {
    return project.employer === employer;
  });
};

var experience = [{
  name: 'Insureon',
  location: 'Campbell, CA',
  description: 'Online Business Insurance Broker',
  startDate: 'January, 2018',
  endDate: 'Current',
  position: [{
    title: 'Front-end UI Engineer',
    info: 'Co-engineer for building the Customer Portal for Insureon. Customer Portal is built using React, Webpack, CSS Modules, Post-CSS, Babel, React Router, etc. Responsible for building out app pages using CSS and JS. In addition, my authored initiatives include:'
  }],
  // projects: getProjects('Insureon'),
  initiatives: [{
    title: 'JSON Forms',
    info: 'framework for Object-based form prototyping'
  }, {
    title: 'Intelligent Form Validation',
    info: 'cascading rule-based validation with minimally intrusive user errors'
  }, {
    title: 'Console Features',
    info: 'implement dormant UI features via console'
  }, {
    title: 'Create-Menu',
    info: 'build responsive HTML menus from JSON objects'
  }, {
    title: 'Progressive Web App',
    info: 'PWA implementation including Manifest and smart-caching using Service Workers'
  }, {
    title: 'Global CSS variables in JS',
    info: 'CSS variables accessible in both JS and CSS with hot-module-replacement'
  }, {
    title: 'withAnalytics Higher-Order-Component',
    info: 'Google Analytics wrapper for intelligently triggering analytic events'
  }, {
    title: 'withAnimation Higher-Order-Component',
    info: 'tiny wrapper to add CSS animation props to any component'
  }, {
    title: 'Tiny Datepicker Component',
    info: '90% smaller DatePicker with no dependencies on Moment.js'
  }]
}, {
  name: 'BottomlessBrunch.com',
  location: 'San Jose, CA',
  startDate: 'April, 2017',
  endDate: 'January, 2018',
  position: [{
    title: 'Full-Stack UI Engineer',
    info: "Developed bottomlessbrunch.com, a React and Redux responsive web-app which graphically renders \"bottomless\" brunch locations in the United States. Integrated Google Maps, Google Places, and YELP APIs. Created administration back-end which combines multiple APIs to create new locations in seconds. Served on an AWS Server through an NGINX proxy with a Node/Express API."
  }],
  projects: getProjects('Bottomless Brunch')
}, {
  name: 'EverSport Media',
  description: 'Online Video Provider',
  location: 'Los Gatos, CA',
  startDate: 'Sep, 2015',
  endDate: 'Jan, 2017',
  position: [{
    title: 'Lead Front-end Developer',
    disabled_meta: 'Sep, 2015 - Jan, 2017',
    info: "Lead Front-end Developer for Eversport's themes and modules using JavaScript, SCSS / CSS, Drupal and PHP. Designed and developed the site and the user-interface for the Single Page App media player that ran on 3rd party sites."
  }],
  skillsUsed: '',
  projects: getProjects('EverSport Media')
}, {
  name: 'Flickerbox, Inc.',
  description: 'Agency',
  location: 'San Francisco, CA',
  startDate: 'Jan, 2012',
  endDate: 'June, 2015',
  position: [{
    title: 'Senior Web Developer',
    meta: 'Jan, 2014 - June, 2015',
    info: "Orchestrated the weekly developer meetings; drafted timelines and estimates for future projects; composed technical briefs for client-side contracts; lead web development projects."
  }, {
    title: 'Web Developer',
    meta: 'Jan, 2012 - Jan, 2014',
    info: "Architected content structure for websites. Hand-coded HTML, SCSS (CSS), and JS from designs into responsive and interactive pages. Implemented JavaScript libraries and wrote custom JavaScript/jQuery code."
  }],
  projects: getProjects('Flickerbox, Inc')
}, {
  name: 'Independent Web Developer',
  location: 'San Jose, CA',
  startDate: '2005',
  endDate: 'Current',
  position: [// {
  //   title: 'Full Stack React Developer',
  //   meta: 'Jan 2017 - Current)'
  // },
  {
    title: 'Full MERN Stack Web-App Developer. Previously, Full LAMP Stack Developer'
  }],
  projects: getProjects('Eric Constantinides')
}];
/* harmony default export */ __webpack_exports__["default"] = (experience);

/***/ }),

/***/ "./data/introduction.js":
/*!******************************!*\
  !*** ./data/introduction.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var introduction = {
  resume: "<p><strong>In a nutshell:</strong> I'm a passionate <strong>Front-end UI Engineer</strong> specializing in <strong>React</strong>, <strong>Redux</strong>, <strong>CSS</strong>, and <strong>Vanilla JS</strong>. Most importantly, I always strive for an <strong>Amazing User Experience</strong>!</p>\n    <p><strong>Most Recently:</strong> I'm a React / UI Engineer at Insureon working on the <a href='https://up.apps.insureon.com/' target='_blank'>Customer Portal Web App</a> using React and JavaScript.</p>\n    <p><strong>Previously:</strong> I was working on <a href='https://www.bottomlessbrunch.com' target='_blank'>BottomlessBrunch.com</a>, a React and Redux based web app. <strong>Before that</strong> I was Lead Front-End Developer at EverSport Media. <strong>Before that</strong> I was a Senior Web Developer at Flickerbox in San Francisco.</p>",
  homepage: "My name is Eric Constantinides. I am a Front-end / Javascript / React engineer specializing in thoughtful UI/UX, React, Redux, Sass, and Vanilla JS. This site is a collection of projects that I've worked on."
};
/* harmony default export */ __webpack_exports__["default"] = (introduction);

/***/ }),

/***/ "./data/meta.js":
/*!**********************!*\
  !*** ./data/meta.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var meta = {
  name: 'Eric Constantinides',
  email: 'eric@ericconstantinides.com',
  location: 'San Jose, CA',
  phone: '(415) 571-6764',
  image: '/static/images/eric-constantinides.jpg',
  github: 'ericconstantinides',
  linkedin: 'constantinides',
  metaDescription: "I'm am a MERN Stack (Mongo, Express, React, Node) developer specializing in React, Redux, ES2015/ES6, Sass, and Vanilla JS." // update this in index.html

};
/* harmony default export */ __webpack_exports__["default"] = (meta);

/***/ }),

/***/ "./data/projects.js":
/*!**************************!*\
  !*** ./data/projects.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var projects = [{
  id: 'ec_2018_insureon',
  title: 'Insureon Customer Portal',
  alt_title: 'Customer Portal',
  employer: 'Insureon',
  date: '2018-Current',
  website: 'up.insureon.com',
  active: false,
  role: 'Javascript / React Engineer',
  description: 'A React-based customer portal web-app for Insureon.com.',
  screenshot: 'portfolio--insureon-customer-portal--md.png',
  primary_tech: ['React', 'Webpack', 'CSS Modules', 'Post CSS', 'JS', 'CSS']
}, {
  id: 'ec_2017_bottomlessbrunch',
  title: 'Bottomless Brunch',
  alt_title: 'BottomlessBrunch.com',
  employer: 'Bottomless Brunch but not showing this part in the resume',
  date: '2017',
  website: 'www.bottomlessbrunch.com',
  active: true,
  role: 'Developer / Designer',
  description: 'A React-based web-app that graphically displays "bottomless" brunch spots around the country. Google Maps, Google Places, and YELP API integration. Automatic venue creation allows new venues to be created in seconds. Built with a complete Node/Express server API.',
  screenshot: 'portfolio--bottomlessbrunch--md.jpg',
  primary_tech: ['React', 'Redux', 'MongoDB', 'Node', 'Express', 'JS', 'CSS', 'Google Maps API', 'AWS']
}, {
  id: 'ec_2017_minesweeper',
  title: 'MineSweeper',
  alt_title: 'MineSweeper',
  employer: 'Eric Constantinides',
  date: '2017',
  website: 'eric-minesweeper.surge.sh',
  active: true,
  role: 'Developer / Designer',
  description: 'A React and Redux minesweeper clone.',
  screenshot: 'portfolio--minesweeper.png',
  primary_tech: ['React', 'Redux', 'JS', 'CSS']
}, {
  id: 'ec_2017_muddling-through-code',
  title: 'Muddling Through Code',
  alt_title: 'MuddlingThroughCode.com',
  employer: 'Eric Constantinides',
  date: '2017',
  website: 'www.muddlingthroughcode.com',
  active: true,
  role: 'Developer / Designer',
  description: 'This site is my journey to learn and grow, and to occasionally muddle through code.',
  screenshot: 'portfolio--muddlingthroughcode--md.jpg',
  primary_tech: ['Node', 'Express', 'JS', 'CSS']
}, {
  id: 'ec_2017_eric-constantinides',
  title: 'Eric Constantinides <dot> com',
  alt_title: 'EricConstantinides.com',
  employer: 'Eric Constantinides',
  date: '2017',
  website: 'www.ericconstantinides.com',
  active: true,
  role: 'Developer / Designer',
  description: 'Created in React which makes it snappy and work well with JSON data. All data is saved in js config files making it quickly expandable.',
  screenshot: 'portfolio--ericconstantinides--md.jpg',
  primary_tech: ['React', 'JSON']
}, {
  id: 'ec_2017_constantly-being',
  title: 'Constantly Being',
  alt_title: 'ConstantlyBeing.com',
  employer: 'Eric Constantinides',
  date: '2017',
  website: 'www.constantlybeing.com',
  active: true,
  role: 'Lead Developer, Designer',
  description: 'Constantly Being is a life & style blog promoting global awareness. The site is built on Drupal 7.',
  screenshot: 'portfolio--constantlybeing--md.jpg',
  primary_tech: ['Drupal', 'JS', 'CSS']
}, {
  id: 'evr_2016_eversport',
  title: 'EverSport',
  alt_title: 'EverSport.tv',
  employer: 'EverSport Media',
  date: '2015-2017',
  website: 'eversport.tv',
  active: false,
  role: 'Lead Front-End Developer, Co-Designer',
  description: 'EverSport is the live streaming sports destination and media platform built for fans and content rights holders.',
  screenshot: 'portfolio--eversport--md.jpg',
  primary_tech: ['Drupal', 'PHP', 'JS', 'CSS']
}, {
  id: 'evr_2017_embed',
  title: "EverSport's Single Page App",
  alt_title: 'Single Page App',
  employer: 'EverSport Media',
  date: '2015-2017',
  website: 'www.ericconstantinides.com/embed',
  active: false,
  role: 'Lead Front-End Developer, Co-Designer',
  description: "Eversport's Single Page App is a responsive and embeddable JavaScript player for distributing EverSport's content on third-party websites.",
  screenshot: 'portfolio--eversport-embed--md.jpg',
  primary_tech: ['JS', 'CSS', 'JSON', 'AJAX']
}, {
  id: 'evr_2016_crms',
  title: "EverSport's Administration Theme",
  alt_title: 'EverSport.tv Admin Theme',
  employer: 'XXXXX EverSport Media',
  date: '2015-2017',
  website: 'eversport.tv/admin',
  active: false,
  role: 'Lead Theme Developer, Co-Designer',
  description: 'EverSport\'s custom "Content Rights Management System (CRMS)" for managing rights and distrubution.',
  screenshot: 'portfolio--eversport-crms--md.jpg',
  primary_tech: ['Drupal', 'PHP', 'JS', 'CSS']
}, {
  id: 'ec_2016_annachich',
  title: 'Annachich Jewelry',
  alt_title: 'Annachich.com',
  employer: 'Eric Constantinides',
  date: '2016',
  website: 'www.annachich.com',
  active: true,
  role: 'Lead Developer, Co-Designer',
  description: 'Annachich is a luxury designer jewelry line inspired by architecture. The site is built on Drupal 7 and Drupal Commerce.',
  screenshot: 'portfolio--annachich--md.jpg',
  primary_tech: ['Drupal', 'Drupal Commerce', 'JS', 'CSS']
}, {
  id: 'ec_2015_paoloshoes',
  title: 'Paolo Shoes',
  alt_title: 'PaoloShoes.com',
  employer: 'Eric Constantinides',
  date: '2015',
  website: 'www.paoloshoes.com',
  active: true,
  role: 'Lead Developer, Co-Designer',
  description: 'Paolo Shoes is a Shoe Brand out of San Francisco, CA. The site is built on Drupal 6 and Ubercart.',
  screenshot: 'portfolio--paoloshoes3--md.jpg',
  primary_tech: ['Drupal', 'UberCart', 'JS', 'CSS']
}, {
  id: 'fb_2015_pure-storage',
  title: 'Pure Storage',
  alt_title: 'PureStorage.com',
  employer: 'Flickerbox, Inc',
  date: '2015',
  website: 'purestorage.com',
  active: false,
  role: 'Lead Developer',
  description: 'Pure Storage is a Mountain View, California-based enterprise data flash storage company.',
  screenshot: 'portfolio--purestorage--md.jpg',
  primary_tech: ['WordPress', 'JS', 'CSS']
}, {
  id: 'fb_2015_adallom',
  title: 'Adallom',
  alt_title: 'Adallom.com',
  employer: 'Flickerbox, Inc',
  date: '2015',
  website: 'adallom.com',
  active: false,
  role: 'Lead Developer',
  description: 'Adallom is a cloud security company acquired by MicroSoft.',
  screenshot: 'portfolio--adallom--md.jpg',
  primary_tech: ['WordPress', 'JS', 'CSS']
}, {
  id: 'fb_2014_okta-omm',
  title: 'Responsive Animation',
  alt_title: 'Responsive Animation',
  employer: 'XXXXX Flickerbox, Inc',
  date: '2014',
  website: 'ericconstantinides.github.io/scrolling-story',
  active: true,
  role: 'Lead Animation Developer',
  description: 'An 11-page animated story to help visually explain a product.',
  screenshot: 'portfolio--okta-scrolling-story--md.jpg',
  primary_tech: ['JS', 'CSS']
}, {
  id: 'fb_2014_platfora',
  title: 'Platfora',
  alt_title: 'Platfora.com',
  employer: 'Flickerbox, Inc',
  date: '2014',
  website: 'platfora.com',
  active: false,
  role: 'Lead Developer',
  description: 'Platfora, Inc. is a big data analytics company based in San Mateo, California.',
  screenshot: 'portfolio--platfora--md.jpg',
  primary_tech: ['WordPress', 'JS', 'CSS']
}, {
  id: 'fb_2014_alteryx',
  title: 'Alteryx',
  alt_title: 'Alteryx.com',
  employer: 'Flickerbox, Inc',
  date: '2014',
  website: 'www.alteryx.com',
  active: true,
  role: 'Lead Developer',
  description: 'Alteryx is a data blending and advanced data analytics software company based out of Irvine, California.',
  screenshot: 'portfolio--alteryx--md.jpg',
  primary_tech: ['Drupal', 'JS', 'CSS']
}, {
  id: 'fb_2014_okta',
  title: 'Okta',
  alt_title: 'Okta.com',
  employer: 'Flickerbox, Inc',
  date: '2014',
  website: 'okta.com',
  active: false,
  role: 'Lead Developer',
  description: 'Okta is an enterprise-grade, identity management service based out of San Francisco, California.',
  screenshot: 'portfolio--okta--md.jpg',
  primary_tech: ['WordPress', 'PHP', 'JS', 'CSS']
}, {
  id: 'fb_2013_abaxis-veterinary',
  title: 'Abaxis Veterinary',
  alt_title: 'Abaxis.com/veterinary',
  employer: 'Flickerbox, Inc',
  date: '2013',
  website: 'abaxis.com/veterinary/',
  active: false,
  role: 'Lead Developer',
  description: 'Abaxis provides leading edge veterinary technology, tools and services.',
  screenshot: 'portfolio--abaxis-veterinary--md.jpg',
  primary_tech: ['WordPress', 'JS', 'CSS']
}, {
  id: 'fb_2013_socialchorus',
  title: 'SocialChorus',
  alt_title: 'SocialChorus.com',
  employer: 'Flickerbox, Inc',
  date: '2013',
  website: 'socialchorus.com',
  active: false,
  role: 'Lead Developer',
  description: 'SocialChorus, Inc. provides advocate marketing solutions for brands.',
  screenshot: 'portfolio--socialchorus--md.jpg',
  primary_tech: ['WordPress', 'JS', 'CSS']
}, {
  id: 'fb_2013_pentaho',
  title: 'Pentaho',
  alt_title: 'Pentaho.com',
  employer: 'Flickerbox, Inc',
  date: '2013',
  website: 'pentaho.com',
  active: false,
  role: 'Lead Developer',
  description: 'Pentaho is a Business Intelligence (BI) software company.',
  screenshot: 'portfolio--pentaho--md.jpg',
  primary_tech: ['Drupal', 'JS', 'CSS']
}, {
  id: 'fb_2012_liveops',
  title: 'LiveOps',
  alt_title: 'LiveOps.com',
  employer: 'Flickerbox, Inc',
  date: '2012',
  website: 'liveops.com',
  active: false,
  role: 'Lead Developer',
  description: 'LiveOps is a cloud call center company based in Scottsdale, Arizona.',
  screenshot: 'portfolio--liveops--md.jpg',
  primary_tech: ['Drupal', 'JS', 'CSS']
}, {
  id: 'fb_2012_island',
  title: 'Island Resort & Casino',
  alt_title: 'IslandResortAndCasino.com',
  employer: 'Flickerbox, Inc',
  date: '2012',
  website: 'www.islandresortandcasino.com',
  active: true,
  role: 'Lead Developer',
  description: 'Island Resort and Casino is an Indian Casino based in Harris, Michigan.',
  screenshot: 'portfolio--islandresortandcasino--md.jpg',
  primary_tech: ['Drupal', 'JS', 'CSS']
}, {
  id: 'ec_2016_cameron-vail',
  title: 'Cameron Vail Design',
  alt_title: 'CameronVailDesign.com',
  employer: 'Eric Constantinides',
  date: '2016',
  website: 'www.cameronvaildesign.com',
  active: true,
  role: 'Lead Developer',
  description: 'Cameron Vail Design is a single page portfolio website built on Drupal 7.',
  screenshot: 'portfolio--cameronvaildesign--md.jpg',
  primary_tech: ['Drupal', 'JS', 'CSS']
},
/*   {
  id: 'ec_2012_annachich',
  title: 'Annachich Jewelry',
  alt_title: 'Annachich.com',
  employer: 'Eric Constantinides',
  date: '2012',
  website: 'annachich.com',
  active: false,
  role: 'Lead Developer',
  description:
    'Annachich is a luxury designer jewelry line inspired by architecture. The site is built on Drupal 6 and Ubercart.',
  screenshot: 'portfolio--annachich-v1--md.jpg',
  primary_tech: ['Drupal', 'Ubercart']
}, */
{
  id: 'ec_2011_dukeduchess',
  title: 'Duke et Duchess',
  alt_title: 'DukeDuchess.com',
  employer: 'Eric Constantinides',
  date: '2011',
  website: 'dukeduchess.com',
  active: false,
  role: 'Lead Developer',
  description: 'Duke et Duchess is a clothing store based in San Francisco, California. The site is built on Drupal 6 and Ubercart.',
  screenshot: 'portfolio--dukeduchess--md.jpg',
  primary_tech: ['Drupal', 'Ubercart', 'JS', 'CSS']
}, {
  id: 'ec_2011_btwd',
  title: 'Bike to Work Day',
  alt_title: 'Bike To Work Day: YouCanBikeThere.com',
  employer: 'Eric Constantinides',
  date: '2008, 2009, 2010, 2011',
  website: 'youcanbikethere.com',
  active: false,
  role: 'Lead Developer',
  description: 'Bike to Work Day is an annual event held on various days in the Spring across the United States and Canada that promotes the bicycle as an option for commuting to work.',
  screenshot: 'portfolio--youcanbikethere--md.jpg',
  primary_tech: ['Drupal']
}, {
  id: 'ec_2011_bottomlessbrunch',
  title: 'Bottomless Brunch',
  alt_title: 'BottomlessBrunch.com',
  employer: 'Eric Constantinides',
  date: '2011',
  website: 'bottomlessbrunch.com',
  active: false,
  role: 'Lead Developer',
  description: 'Bottomless Brunch is THE go to place to find out exactly where to get bottomless mimosas for not a lot of money.',
  screenshot: 'portfolio--bottomlessbrunch-drupal--md.jpg',
  primary_tech: ['Drupal', 'CSS']
}, {
  id: 'ec_2010_chicfashionweek',
  title: 'Chic Fashion Week SF',
  alt_title: 'ChicFashionWeekSF.com',
  employer: 'Eric Constantinides',
  date: '2010',
  website: 'chicfashionweeksf.com',
  active: false,
  role: 'Lead Developer',
  description: 'Awarded best technical website in 2010 by eFashionBlog SF.',
  screenshot: 'portfolio--chicfashionweeksf--md.jpg',
  primary_tech: ['Drupal', 'CSS']
}, {
  id: 'ec_2008_babc',
  title: 'Bay Area Bicycle Coalition',
  alt_title: 'BayAreaBikes.org',
  employer: 'Eric Constantinides',
  date: '2008',
  website: 'bayareabikes.org',
  active: false,
  role: 'Lead Developer | Lead Designer',
  description: 'The Bay Area Bicycle Coalition promotes safe and enjoyable bicycling for everyday transportation in the San Francisco Bay Area.',
  screenshot: 'portfolio--bayareabikes--md.jpg',
  primary_tech: ['Drupal', 'CSS']
  /*   {
    id: 'ec_2005_sfima',
    title: 'SFIMA',
    alt_title: 'SFIMA.org',
    employer: 'Eric Constantinides',
    date: '2005',
    website: 'sfima.org',
    active: false,
    role: 'Lead Developer | Lead Designer',
    description:
      'SFIMA is the San Francisco Institute of Management Accountants.',
    screenshot: 'portfolio--sfima--md.jpg',
    primary_tech: ['Static HTML']
  } */

}];
/* harmony default export */ __webpack_exports__["default"] = (projects);

/***/ }),

/***/ "./data/skills.js":
/*!************************!*\
  !*** ./data/skills.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var skills = [{
  type: 'primary',
  human: 'Primary Skills',
  meta: 'My main area of concentration',
  skills: [{
    skill: 'React',
    subSkills: ['JSX', 'Redux', 'Create-React-App'],
    yearStarted: '2017',
    type: 'front-end'
  }, {
    skill: 'JavaScript',
    subSkills: ['AJAX', 'JSON', 'ES2015 / ES6', 'ES2016', 'lodash'],
    yearStarted: '2014',
    type: 'front-end'
  }, {
    skill: 'Testing',
    subSkills: ['Jest', 'Enzyme'],
    yearStarted: '2017',
    type: 'front-end'
  }, {
    skill: 'Node',
    subSkills: ['Express', 'mongoDB', 'npm / yarn'],
    yearStarted: '2017',
    type: 'back-end'
  }, {
    skill: 'JS Tools',
    subSkills: ['Gulp', 'Webpack', 'Babel'],
    yearStarted: '2015',
    type: 'front-end'
  }, {
    skill: 'CSS',
    subSkills: ['Sass/SCSS', 'BEM CSS', 'FlexBox'],
    yearStarted: '2011',
    type: 'front-end'
  }, {
    skill: 'HTML',
    subSkills: ['HTML5'],
    yearStarted: '2011',
    type: 'front-end'
  }, {
    skill: 'Git',
    subSkills: ['GitHub', 'BitBucket', 'SourceTree'],
    yearStarted: '2014',
    type: 'tools'
  }, {
    skill: 'User Experience (UX)',
    subSkills: ['User Interface (UI)', 'Responsive Web Design (RWD)'],
    yearStarted: '2014',
    type: 'design'
  }]
}, {
  type: 'supplementary',
  human: 'Supplementary Skills',
  meta: "Important proficiencies that aren't my primary focus",
  skills: [{
    skill: 'Design Apps',
    subSkills: ['PhotoShop', 'Illustrator'],
    yearStarted: '2011',
    type: 'design'
  }, {
    skill: 'Front-end helpers',
    subSkills: ['jQuery', 'Bootstrap'],
    yearStarted: '2013',
    type: 'front-end'
  }, {
    skill: 'PHP',
    subSkills: ['SQL', 'MySQL'],
    yearStarted: '2015',
    type: 'back-end'
  }, {
    skill: 'CMS Theming',
    subSkills: ['Drupal (advanced)', 'WordPress'],
    yearStarted: '2011',
    type: 'front-end'
  }, {
    skill: 'Online Tools',
    subSkills: ['Google Analytics', 'Google Tag Manager', 'Jira'],
    yearStarted: '2014',
    type: 'front-end'
  }, {
    skill: 'Marketing Automation',
    subSkills: ['Eloqua', 'Salesforce', 'Marketo'],
    yearStarted: '2017',
    type: 'tools'
  }, {
    skill: 'Cloud Hosting',
    subSkills: ['Acquia', 'Amazon Web Services', 'DigitalOcean VPS'],
    yearStarted: '2015',
    type: 'tools'
  }, {
    skill: 'Code Editing',
    subSkills: ['Sublime Text', 'Visual Studio Code', 'Chrome Developer Tools'],
    yearStarted: '2013',
    type: 'tools'
  }, {
    skill: 'Apache',
    subSkills: ['Unix', 'HTTPS/SSL'],
    yearStarted: '2014',
    type: 'back-end'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (skills);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./pages/resume.js":
/*!*************************!*\
  !*** ./pages/resume.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_resume_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/resume/Header */ "./components/resume/Header.js");
/* harmony import */ var _components_resume_Introduction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/resume/Introduction */ "./components/resume/Introduction.js");
/* harmony import */ var _components_resume_Experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/resume/Experience */ "./components/resume/Experience.js");
/* harmony import */ var _components_resume_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/resume/Skills */ "./components/resume/Skills.js");
/* harmony import */ var _data_meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/meta */ "./data/meta.js");
/* harmony import */ var _data_introduction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/introduction */ "./data/introduction.js");
/* harmony import */ var _data_skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/skills */ "./data/skills.js");
/* harmony import */ var _data_experience__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/experience */ "./data/experience.js");
/* harmony import */ var _data_education__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/education */ "./data/education.js");

var _jsxFileName = "/Users/eric/Sites_eric/ericconstantinides.com/pages/resume.js";












var Resume = function Resume() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    metaDescription: _data_meta__WEBPACK_IMPORTED_MODULE_7__["default"].metaDescription,
    title: 'Resume | Eric Constantinides'
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "site-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_resume_Header__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _data_meta__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_resume_Introduction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    introduction: _data_introduction__WEBPACK_IMPORTED_MODULE_8__["default"].resume,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_resume_Experience__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Experience",
    propsClass: "",
    items: _data_experience__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_resume_Skills__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: _data_skills__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_resume_Experience__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Education",
    propsClass: "job--no-padding",
    items: _data_education__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./scss/master.scss":
/*!**************************!*\
  !*** ./scss/master.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: splitArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitArray", function() { return splitArray; });
var splitArray = function splitArray(arr) {
  return [arr.filter(function (item, index) {
    return index + 1 <= Math.round(arr.length / 2);
  }), arr.filter(function (item, index) {
    return index + 1 > Math.round(arr.length / 2);
  })];
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/resume.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eric/Sites_eric/ericconstantinides.com/pages/resume.js */"./pages/resume.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=resume.js.map