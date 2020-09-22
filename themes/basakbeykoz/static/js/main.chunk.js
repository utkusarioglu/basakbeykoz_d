(this["webpackJsonpbasakbeykoz"] = this["webpackJsonpbasakbeykoz"] || []).push([["main"],{

/***/ "./src/common/types.ts":
/*!*****************************!*\
  !*** ./src/common/types.ts ***!
  \*****************************/
/*! exports provided: FETCH_MENU, FETCH_POSTS, FETCH_POST, FETCH_CATEGORY, FETCH_CATEGORIES, FETCH_CATEGORY_POSTS, FETCH_PAGE, FETCH_SINGULAR, IS_FETCHING, IS_DISPLAYING, NAV_TO_CONTENT, IS_MENU_OPEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MENU", function() { return FETCH_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS", function() { return FETCH_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POST", function() { return FETCH_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORY", function() { return FETCH_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIES", function() { return FETCH_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORY_POSTS", function() { return FETCH_CATEGORY_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PAGE", function() { return FETCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SINGULAR", function() { return FETCH_SINGULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_FETCHING", function() { return IS_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DISPLAYING", function() { return IS_DISPLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_TO_CONTENT", function() { return NAV_TO_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_MENU_OPEN", function() { return IS_MENU_OPEN; });
const FETCH_MENU = "FETCH_MENU";
const FETCH_POSTS = "FETCH_POSTS";
const FETCH_POST = "FETCH_POST";
const FETCH_CATEGORY = "FETCH_CATEGORY";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const FETCH_CATEGORY_POSTS = "FETCH_CATEGORY_POSTS";
const FETCH_PAGE = "FETCH_PAGE";
const FETCH_SINGULAR = "FETCH_SINGULAR";
const IS_FETCHING = "IS_FETCHING";
const IS_DISPLAYING = "IS_DISPLAYING";
const NAV_TO_CONTENT = "NAV_TO_CONTENT";
const IS_MENU_OPEN = "IS_MENU_OPEN";

/***/ }),

/***/ "./src/components/app/App.tsx":
/*!************************************!*\
  !*** ./src/components/app/App.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_app.scss */ "./src/components/app/_app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/store */ "./src/store/store.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/Header */ "./src/components/header/Header.tsx");
/* harmony import */ var _features_spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/spinner/Spinner */ "./src/features/spinner/Spinner.tsx");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.tsx");
/* harmony import */ var _header_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/Logo */ "./src/components/header/Logo.tsx");
/* harmony import */ var _social_Social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../social/Social */ "./src/components/social/Social.tsx");
/* harmony import */ var _nav_NavFixedView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../nav/NavFixedView */ "./src/components/nav/NavFixedView.tsx");
/* harmony import */ var _routes_BlogRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../routes/BlogRoute */ "./src/routes/BlogRoute.tsx");
/* harmony import */ var _routes_CreditsRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../routes/CreditsRoute */ "./src/routes/CreditsRoute.tsx");
/* harmony import */ var _routes_BodyRoute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes/BodyRoute */ "./src/routes/BodyRoute.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/app/App.tsx";















function App() {
  const blog_slug = "yazilar";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_NavFixedView__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-wideScreenControls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_social_Social__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-scrollingElements",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    exact: true,
    path: "/credits",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_CreditsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    exact: true,
    path: "/" + blog_slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_BlogRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    exact: true,
    path: "/:slug?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_BodyRoute__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/app/_app.scss":
/*!**************************************!*\
  !*** ./src/components/app/_app.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/body/BodyView.tsx":
/*!******************************************!*\
  !*** ./src/components/body/BodyView.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_blog_PostList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/blog/PostList */ "./src/features/blog/PostList.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _body_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_body.scss */ "./src/components/body/_body.scss");
/* harmony import */ var _body_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_body_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bodyView_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_bodyView.scss */ "./src/components/body/_bodyView.scss");
/* harmony import */ var _bodyView_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bodyView_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/body/BodyView.tsx";







function BodyView(props) {
  window.scrollTo(0, 0);
  const siteName = "Basak Beykoz";
  const separator = " - ";
  const homeSlug = "home";
  const siteTitle = siteName + (props.slug === homeSlug || props.slug === "" ? "" : separator + props.title);
  let bodyExtraClasses = [props.type, props.slug];
  let featureImage;

  if (props.thumbnail !== "") {
    bodyExtraClasses.push("has-FeatureImage");
    featureImage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "FeatureImage-on",
      dangerouslySetInnerHTML: {
        __html: props.thumbnail
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    });
  } else {
    featureImage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "FeatureImage-off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    });
  }

  let featureTitle;
  let articleTitle;

  if (props.title !== "") {
    bodyExtraClasses.push("has-CanvasTitle");
    featureTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "Canvas-featureTitle text-blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 24
      }
    }, props.title);
    articleTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "Canvas-articleTitle text-blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 24
      }
    }, props.title);
  }

  let postList;
  let excludeSlug = [];

  if (props.type === "post") {
    excludeSlug.push(props.slug);
    bodyExtraClasses.push("has-PostExcerptList");
    postList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "PostList-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, "Similar Reads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_blog_PostList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      excludeSlug: excludeSlug,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }));
  }

  react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].pageview(window.location.pathname + window.location.search);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, siteTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Canvas " + bodyExtraClasses.join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Canvas-decor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, featureImage, featureTitle), articleTitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    dangerouslySetInnerHTML: {
      __html: props.content
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), postList));
}

/* harmony default export */ __webpack_exports__["default"] = (BodyView);

/***/ }),

/***/ "./src/components/body/_body.scss":
/*!****************************************!*\
  !*** ./src/components/body/_body.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/body/_bodyView.scss":
/*!********************************************!*\
  !*** ./src/components/body/_bodyView.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/credits/Credits.tsx":
/*!********************************************!*\
  !*** ./src/components/credits/Credits.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_app_appActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/credits/Credits.tsx";




const mapState = state => ({});

const mapDispatch = {
  setFetching: _features_app_appActions__WEBPACK_IMPORTED_MODULE_1__["setFetching"]
};

function Credits(props) {
  props.setFetching(false);
  window.scrollTo(0, 0);
  const [colorSet, setColorSet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const uploads_dir = "/wp-content/uploads";
  const featureImageName = "yazilar-feature-image";
  const featureImagePath = `${uploads_dir}/${featureImageName}-`;
  const srcSet = ["scaled.jpg 2560w", "300x196.jpg 300w", "1024x669.jpg 1024w", "768x501.jpg 768w", "1536x1003.jpg 1536w", "2048x1337.jpg 2048w"].map(variation => featureImagePath + variation).join(",");
  const COLOR_SETS = [{
    "--brush-white": "#F4F4F9",
    "--brush-lightGray": "#fafafa",
    "--brush-gray": "#859FA4",
    "--brush-darkGray": "#265151",
    "--brush-black": "#1E3735",
    "--brush-lightBlue": "#456266",
    "--brush-darkBlue": "#265151",
    "--brush-lightYellow": "#F6DFB1",
    "--brush-darkYellow": "#FBBB53",
    "--brush-lightGreen": "#81AE9D",
    "--filter-white:": "contrast(1) invert(96%) sepia(4%) saturate(282%) hue-rotate(202deg) brightness(102%) contrast(95%)",
    "--filter-darkGray": "invert(34%) sepia(30%) saturate(388%) hue-rotate(139deg) brightness(92%) contrast(86%)",
    "--filter-logo-white": "brightness(0) contrast(1) invert(96%) sepia(4%) saturate(282%) hue-rotate(202deg) brightness(102%) contrast(95%)"
  }, {
    "--brush-white": "#F4F4F9",
    "--brush-lightGray": "#fafafa",
    "--brush-gray": "#263f7b",
    "--brush-darkGray": "#437777",
    "--brush-black": "#5e7077",
    "--brush-lightBlue": "#7da1a6",
    "--brush-darkBlue": "var(--brush-darkGray)",
    "--brush-lightYellow": "#eee2c8",
    "--brush-darkYellow": "#fbcb5a",
    "--brush-lightGreen": "#85a89f",
    "--filter-white:": "brightness(0)",
    "--filter-darkGray": "brightness(0)",
    "--filter-logo-white": "brightness(0)"
  }, {
    "--brush-white": "#F4F4F9",
    "--brush-gray": "#263f7b",
    "--brush-darkGray": "#373b44",
    "--brush-black": "#5e7077",
    "--brush-lightBlue": "#629874",
    "--brush-darkBlue": "var(--brush-darkGray)",
    "--brush-lightYellow": "#a6b9da",
    "--brush-darkYellow": "#93e0c1",
    "--brush-lightGreen": "#f2dd8b",
    "--filter-white:": "brightness(0)",
    "--filter-darkGray": "brightness(0)",
    "--filter-logo-white": "brightness(0)"
  }, {
    "--brush-white": "#F4F4F9",
    "--brush-lightGray": "#fafafa",
    "--brush-gray": "#859FA4",
    "--brush-darkGray": "#a1bfb1",
    "--brush-black": "#1b2928",
    "--brush-lightBlue": "#29717b",
    "--brush-darkBlue": "#265151",
    "--brush-lightYellow": "#ffedc9",
    "--brush-darkYellow": "#f0c43e",
    "--brush-lightGreen": "#55987f",
    "--filter-white:": "brightness(0)",
    "--filter-darkGray": "brightness(0)",
    "--filter-logo-white": "brightness(0)"
  }];

  const changeColors = () => {
    Object.entries(COLOR_SETS[colorSet]).forEach(([n, v]) => {
      document.documentElement.style.setProperty(n, v);
    });
    setColorSet(set => ++set % COLOR_SETS.length);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Canvas page has-FeatureImage has-body-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Canvas-decor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FeatureImage-on",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "2560",
    height: "1671",
    src: `${featureImageName}scaled.jpg`,
    alt: "Feature",
    srcSet: srcSet,
    sizes: "(max-width: 2560px) 100vw, 2560px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Canvas-featureTitle text-blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Canvas-articleTitle text-blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, "Credits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "Current Color Set: ", colorSet.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: changeColors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "Change white")));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])( // @ts-ignore
mapState, mapDispatch)(Credits));

/***/ }),

/***/ "./src/components/footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_footer.scss */ "./src/components/footer/_footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/footer/Footer.tsx";




function Footer(props) {
  const up = "/wp-content/uploads";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Footer-art",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Footer-art-fg",
    alt: "Footer decoration",
    src: up + "/footer-art-fg.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/credits",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Footer-credits",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Footer-yearAndName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\u2661", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 26
    }
  }), new Date(Date.now()).getFullYear(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 69
    }
  }), "Basak Beykoz"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footer/_footer.scss":
/*!********************************************!*\
  !*** ./src/components/footer/_footer.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/header/BurgerMenu.tsx":
/*!**********************************************!*\
  !*** ./src/components/header/BurgerMenu.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_wp_menuActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/wp/menuActions */ "./src/features/wp/menuActions.ts");
/* harmony import */ var _features_app_appActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var _burgerMenu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_burgerMenu.scss */ "./src/components/header/_burgerMenu.scss");
/* harmony import */ var _burgerMenu_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_burgerMenu_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/header/BurgerMenu.tsx";






const mapState = state => ({
  menu: state.menu,
  isDisplaying: state.app.isDisplaying,
  isMenuOpen: state.app.isMenuOpen
});

const mapDispatch = {
  setDisplaying: _features_app_appActions__WEBPACK_IMPORTED_MODULE_3__["setDisplaying"],
  fetchMenu: _features_wp_menuActions__WEBPACK_IMPORTED_MODULE_2__["fetchMenu"],
  setIsMenuOpen: _features_app_appActions__WEBPACK_IMPORTED_MODULE_3__["setIsMenuOpen"]
};

function BurgerMenu(props) {
  const uploadsDir = "/wp-content/uploads";
  const {
    isMenuOpen,
    setIsMenuOpen
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "BurgerMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setIsMenuOpen(!isMenuOpen),
    className: "BurgerMenu-burgerButton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Menu",
    src: uploadsDir + "/burger-menu.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])( //@ts-ignore
mapState, mapDispatch)(BurgerMenu));

/***/ }),

/***/ "./src/components/header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_header.scss */ "./src/components/header/_header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ "./src/components/header/Logo.tsx");
/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BurgerMenu */ "./src/components/header/BurgerMenu.tsx");
/* harmony import */ var _social_Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social/Social */ "./src/components/social/Social.tsx");
/* harmony import */ var _nav_NavHeaderView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav/NavHeaderView */ "./src/components/nav/NavHeaderView.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/header/Header.tsx";







function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Header-bottomWrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_NavHeaderView__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_social_Social__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/Logo.tsx":
/*!****************************************!*\
  !*** ./src/components/header/Logo.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _features_app_appActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_logo.scss */ "./src/components/header/_logo.scss");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/header/Logo.tsx";






const mapState = state => ({
  menu: state.menu.items
});

const mapDispatch = {
  setDisplaying: _features_app_appActions__WEBPACK_IMPORTED_MODULE_2__["setDisplaying"],
  setIsMenuOpen: _features_app_appActions__WEBPACK_IMPORTED_MODULE_2__["setIsMenuOpen"]
};

function Logo(props) {
  const {
    setDisplaying,
    setIsMenuOpen
  } = props;
  const uploads = "/wp-content/uploads";
  const home_slug = "home";

  const linkClick = () => {
    setIsMenuOpen(false);
    setDisplaying({
      slug: home_slug
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Logo-decor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: linkClick,
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Logo-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: uploads + "/logo-inline-color.svg",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])( //@ts-ignore
mapState, mapDispatch)(Logo));

/***/ }),

/***/ "./src/components/header/_burgerMenu.scss":
/*!************************************************!*\
  !*** ./src/components/header/_burgerMenu.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/header/_header.scss":
/*!********************************************!*\
  !*** ./src/components/header/_header.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/header/_logo.scss":
/*!******************************************!*\
  !*** ./src/components/header/_logo.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/nav/NavFixedView.tsx":
/*!*********************************************!*\
  !*** ./src/components/nav/NavFixedView.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/nav/Nav */ "./src/features/nav/Nav.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_app_appActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var _navFixedView_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_navFixedView.scss */ "./src/components/nav/_navFixedView.scss");
/* harmony import */ var _navFixedView_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navFixedView_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/nav/NavFixedView.tsx";






const mapState = state => ({
  isMenuOpen: state.app.isMenuOpen
});

const mapDispatch = {
  setIsMenuOpen: _features_app_appActions__WEBPACK_IMPORTED_MODULE_3__["setIsMenuOpen"]
};

function NavFixedView(props) {
  const menuToggle = () => {
    props.setIsMenuOpen(!props.isMenuOpen);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: menuToggle,
    className: "NavFixedView " + (props.isMenuOpen ? "open" : ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "NavFixedView-mask",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "NavFixedView-decor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "NavFixedView-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])( //@ts-ignore
mapState, mapDispatch)(NavFixedView));

/***/ }),

/***/ "./src/components/nav/NavHeaderView.tsx":
/*!**********************************************!*\
  !*** ./src/components/nav/NavHeaderView.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/nav/Nav */ "./src/features/nav/Nav.tsx");
/* harmony import */ var _navHeaderView_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_navHeaderView.scss */ "./src/components/nav/_navHeaderView.scss");
/* harmony import */ var _navHeaderView_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navHeaderView_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/nav/NavHeaderView.tsx";




function NavView() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "NavHeaderView",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NavView);

/***/ }),

/***/ "./src/components/nav/_navFixedView.scss":
/*!***********************************************!*\
  !*** ./src/components/nav/_navFixedView.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/nav/_navHeaderView.scss":
/*!************************************************!*\
  !*** ./src/components/nav/_navHeaderView.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/social/Social.tsx":
/*!******************************************!*\
  !*** ./src/components/social/Social.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_social.scss */ "./src/components/social/_social.scss");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SocialItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialItem */ "./src/components/social/SocialItem.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/social/Social.tsx";





const mapState = state => ({
  socialItems: state.social.items
});

const mapDispatch = {};

function Social(props) {
  const socialItems = props.socialItems;
  const socialComponents = socialItems.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Social-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, socialComponents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Social-decor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])( //@ts-ignore
mapState, mapDispatch)(Social));

/***/ }),

/***/ "./src/components/social/SocialItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/social/SocialItem.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_app_appActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _socialIcon_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_socialIcon.scss */ "./src/components/social/_socialIcon.scss");
/* harmony import */ var _socialIcon_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_socialIcon_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/social/SocialItem.tsx";






const mapState = state => ({});

const mapDispatch = {
  setIsMenuOpen: _features_app_appActions__WEBPACK_IMPORTED_MODULE_2__["setIsMenuOpen"]
};

function SocialItem(props) {
  const {
    item,
    setIsMenuOpen
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].OutboundLink, {
    eventLabel: item.title,
    onClick: () => setIsMenuOpen(false),
    to: item.link,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Social-icon",
    src: item.icon,
    title: item.title,
    alt: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])( //@ts-ignore
mapState, mapDispatch)(SocialItem));

/***/ }),

/***/ "./src/components/social/_social.scss":
/*!********************************************!*\
  !*** ./src/components/social/_social.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/social/_socialIcon.scss":
/*!************************************************!*\
  !*** ./src/components/social/_socialIcon.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/spinner/SpinnerView.tsx":
/*!************************************************!*\
  !*** ./src/components/spinner/SpinnerView.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/components/spinner/SpinnerView.tsx";


function SpinnerView(props) {
  const uploadsDir = "/wp-content/uploads";
  const {
    display,
    loadingMessage
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Spinner",
    style: {
      display
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: uploadsDir + "/logo-inline-black.svg",
    alt: "Basak Beykoz",
    className: "Spinner-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Spinner-loadMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, loadingMessage));
}

/* harmony default export */ __webpack_exports__["default"] = (SpinnerView);

/***/ }),

/***/ "./src/features/app/appActions.ts":
/*!****************************************!*\
  !*** ./src/features/app/appActions.ts ***!
  \****************************************/
/*! exports provided: setFetching, setDisplaying, setIsMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFetching", function() { return setFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplaying", function() { return setDisplaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsMenuOpen", function() { return setIsMenuOpen; });
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");

const setFetching = fetch_bool => dispatch => {
  dispatch({
    type: _common_types__WEBPACK_IMPORTED_MODULE_0__["IS_FETCHING"],
    state: "success",
    payload: fetch_bool
  });
};
const setDisplaying = is_displaying => dispatch => {
  dispatch({
    type: _common_types__WEBPACK_IMPORTED_MODULE_0__["IS_DISPLAYING"],
    state: "success",
    payload: is_displaying
  });
};
const setIsMenuOpen = is_menuOpen => dispatch => {
  console.log('dispatch is menu open', is_menuOpen);
  dispatch({
    type: _common_types__WEBPACK_IMPORTED_MODULE_0__["IS_MENU_OPEN"],
    state: 'success',
    payload: is_menuOpen
  });
};

/***/ }),

/***/ "./src/features/app/appReducer.ts":
/*!****************************************!*\
  !*** ./src/features/app/appReducer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");

const initialState = {
  isFetching: true,
  isMenuOpen: false,
  isDisplaying: {
    slug: "home",
    loadTime: 0,
    active: {
      slug: "",
      type: "page",
      title: "",
      content: "",
      thumbnail: " "
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _common_types__WEBPACK_IMPORTED_MODULE_0__["IS_DISPLAYING"]:
      if (action.state === "fail") return state;
      return { ...state,
        isDisplaying: { ...state.isDisplaying,
          ...action.payload
        }
      };

    case _common_types__WEBPACK_IMPORTED_MODULE_0__["IS_FETCHING"]:
      if (action.state === "fail") return state;
      return { ...state,
        isFetching: action.payload
      };

    case _common_types__WEBPACK_IMPORTED_MODULE_0__["IS_MENU_OPEN"]:
      if (action.state === 'fail') return state;
      return { ...state,
        isMenuOpen: action.payload
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/features/blog/Blog.tsx":
/*!************************************!*\
  !*** ./src/features/blog/Blog.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostList */ "./src/features/blog/PostList.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_blog.scss */ "./src/features/blog/_blog.scss");
/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blog_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/features/blog/Blog.tsx";






function Blog() {
  window.scrollTo(0, 0);
  const siteName = "Basak Beykoz";
  const separator = " - ";
  const PAGE_NAME = "Yazilar";
  const pageTitle = siteName + separator + PAGE_NAME;
  const uploads_dir = "/wp-content/uploads";
  const featureImageName = "yazilar-feature-image";
  const featureImagePath = `${uploads_dir}/${featureImageName}-`;
  const srcSet = ["scaled.jpg 2560w", "300x196.jpg 300w", "1024x669.jpg 1024w", "768x501.jpg 768w", "1536x1003.jpg 1536w", "2048x1337.jpg 2048w"].map(variation => featureImagePath + variation).join(",");
  react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].pageview(window.location.pathname + window.location.search);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, pageTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Canvas blog has-FeatureImage has-body-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Canvas-decor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FeatureImage-on",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "2560",
    height: "1671",
    src: `${featureImageName}scaled.jpg`,
    alt: "Feature",
    srcSet: srcSet,
    sizes: "(max-width: 2560px) 100vw, 2560px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Canvas-featureTitle text-blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, PAGE_NAME)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Canvas-articleTitle text-blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, PAGE_NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    excludeSlug: [],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/features/blog/PostList.tsx":
/*!****************************************!*\
  !*** ./src/features/blog/PostList.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _wp_singularActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wp/singularActions */ "./src/features/wp/singularActions.ts");
/* harmony import */ var _app_appActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var _postList_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_postList.scss */ "./src/features/blog/_postList.scss");
/* harmony import */ var _postList_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_postList_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostListCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostListCard */ "./src/features/blog/PostListCard.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/features/blog/PostList.tsx";







const mapState = state => ({
  posts: state.singular.post
});

const mapDispatch = {
  fetchCategoryPosts: _wp_singularActions__WEBPACK_IMPORTED_MODULE_2__["fetchCategoryPosts"],
  setFetching: _app_appActions__WEBPACK_IMPORTED_MODULE_3__["setFetching"]
};

// const styles: CSSStyles = {
//     img: {
//         width: "430px",
//         height: "100vh",
//         position: "fixed",
//         left: 0,
//         top: 0,
//         backgroundColor: "gray", 
//     }
// }
function PostList(props) {
  // !HACK this is faulty logic
  setTimeout(() => {
    console.log("scan", props.posts.fetchTime, Date.now() - 5000);

    if (props.posts.fetchTime < Date.now() - 5000) {
      props.fetchCategoryPosts("yazilar");
    }
  }, 1000);
  props.setFetching(false);
  const post_list = Object.values(props.posts.items).filter(single => single.data.slug !== props.excludeSlug[0] || false).map(single => {
    const d = single.data;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: d.slug,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostListCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: d.title,
      date: d.date,
      content: d.content,
      excerpt: d.excerpt,
      slug: d.slug,
      thumbnail: d.thumbnail,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PostList",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, post_list));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])( // @ts-ignore
mapState, mapDispatch)(PostList));

/***/ }),

/***/ "./src/features/blog/PostListCard.tsx":
/*!********************************************!*\
  !*** ./src/features/blog/PostListCard.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _postList_card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_postList_card.scss */ "./src/features/blog/_postList_card.scss");
/* harmony import */ var _postList_card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_postList_card_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/features/blog/PostListCard.tsx";




function PostListCard(props) {
  const excerpt = props.excerpt !== "" ? props.excerpt : createExcerpt(props.content);

  if (true) {
    console.log(props.date.replace(/-/g, "/"));
  }

  const d = new Date(props.date.replace(/-/g, "/")); // short for date object 

  const date = d.toLocaleDateString("TR-TR");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/" + props.slug,
    className: "PostList-card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PostList-card-thumbnail",
    dangerouslySetInnerHTML: {
      __html: props.thumbnail
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "PostList-card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "PostList-card-date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PostList-card-excerpt",
    dangerouslySetInnerHTML: {
      __html: excerpt
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }));
}

function createExcerpt(content) {
  return content.split("</p>")[0] + "</p>";
}

/* harmony default export */ __webpack_exports__["default"] = (PostListCard);

/***/ }),

/***/ "./src/features/blog/_blog.scss":
/*!**************************************!*\
  !*** ./src/features/blog/_blog.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/blog/_postList.scss":
/*!******************************************!*\
  !*** ./src/features/blog/_postList.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/blog/_postList_card.scss":
/*!***********************************************!*\
  !*** ./src/features/blog/_postList_card.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/body/Body.tsx":
/*!************************************!*\
  !*** ./src/features/body/Body.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _wp_singularActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wp/singularActions */ "./src/features/wp/singularActions.ts");
/* harmony import */ var _app_appActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var _components_body_BodyView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/body/BodyView */ "./src/components/body/BodyView.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/features/body/Body.tsx";







const mapState = state => ({
  singular: state.singular,
  isDisplaying: state.app.isDisplaying,
  isFetching: state.app.isFetching
});

const mapDispatch = {
  fetchSingular: _wp_singularActions__WEBPACK_IMPORTED_MODULE_3__["fetchSingular"],
  setFetching: _app_appActions__WEBPACK_IMPORTED_MODULE_4__["setFetching"],
  setDisplaying: _app_appActions__WEBPACK_IMPORTED_MODULE_4__["setDisplaying"]
};

function findBySlug(singular, slug) {
  return Object.values(singular).map(archive => {
    return archive.items[slug] ? archive.items[slug].data : undefined;
  }).filter(data => {
    return data !== undefined;
  })[0];
}

function Body(props) {
  const setFetching = props.setFetching;
  const setDisplaying = props.setDisplaying;
  const fetchSingular = props.fetchSingular; // console.log(props.isDisplaying)

  const url_slug = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])().slug || "home";
  const slug = props.isDisplaying.slug;

  if (url_slug !== slug) {
    props.setDisplaying({
      slug: url_slug
    });
  }

  const item = findBySlug(props.singular, slug);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (item === undefined) {
      setFetching(true);

      if (true) {
        setTimeout(() => {
          fetchSingular(slug);
        }, 300);
      } else {}
    } else {
      setDisplaying({
        active: {
          slug: item.slug,
          title: item.title,
          type: item.type,
          content: item.content,
          thumbnail: item.thumbnail
        }
      });
      setFetching(false);
    }
  }, [item, slug, fetchSingular, setFetching, setDisplaying]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_body_BodyView__WEBPACK_IMPORTED_MODULE_5__["default"], {
    slug: props.isDisplaying.active.slug,
    title: props.isDisplaying.active.title,
    type: props.isDisplaying.active.type,
    content: props.isDisplaying.active.content,
    thumbnail: props.isDisplaying.active.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])( // @ts-ignore
mapState, mapDispatch)(Body));

/***/ }),

/***/ "./src/features/nav/Nav.tsx":
/*!**********************************!*\
  !*** ./src/features/nav/Nav.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _wp_menuActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wp/menuActions */ "./src/features/wp/menuActions.ts");
/* harmony import */ var _app_appActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_nav.scss */ "./src/features/nav/_nav.scss");
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nav_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavItem */ "./src/features/nav/NavItem.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/features/nav/Nav.tsx";







const mapState = state => ({
  menu: state.menu
});

const mapDispatch = {
  fetchMenu: _wp_menuActions__WEBPACK_IMPORTED_MODULE_2__["fetchMenu"],
  setIsMenuOpen: _app_appActions__WEBPACK_IMPORTED_MODULE_3__["setIsMenuOpen"]
};

function Nav(props) {
  const fetchMenu = props.fetchMenu;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchMenu("nav");
  }, [fetchMenu]);
  const menuItems = props.menu.items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 36
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  }, menuItems);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])( //@ts-ignore
mapState, mapDispatch)(Nav));

/***/ }),

/***/ "./src/features/nav/NavItem.tsx":
/*!**************************************!*\
  !*** ./src/features/nav/NavItem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_appActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/appActions */ "./src/features/app/appActions.ts");
/* harmony import */ var _navItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_navItem.scss */ "./src/features/nav/_navItem.scss");
/* harmony import */ var _navItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navItem_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/features/nav/NavItem.tsx";






const mapState = state => ({});

const mapDispatch = {
  setDisplaying: _app_appActions__WEBPACK_IMPORTED_MODULE_3__["setDisplaying"]
};

function NavItem(props) {
  const {
    item
  } = props;
  const cleanSlug = !!item.slug ? item.slug : "";

  const setDisplaying = slug => {
    props.setDisplaying({
      slug
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    key: item.ID,
    exact: true,
    to: "/" + cleanSlug,
    className: "Nav-item",
    activeClassName: "Nav-item-active",
    onClick: () => setDisplaying(cleanSlug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, item.title);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])( //@ts-ignore
mapState, mapDispatch)(NavItem));

/***/ }),

/***/ "./src/features/nav/_nav.scss":
/*!************************************!*\
  !*** ./src/features/nav/_nav.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/nav/_navItem.scss":
/*!****************************************!*\
  !*** ./src/features/nav/_navItem.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/social/socialReducer.ts":
/*!**********************************************!*\
  !*** ./src/features/social/socialReducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  items: [{
    title: "Instagram",
    link: 'https://www.instagram.com/basak_beykoz/',
    icon: "/wp-content/uploads" + "/instagram.svg"
  }, {
    title: "LinkedIn",
    link: 'https://www.linkedin.com/in/basakbeykoz/',
    icon: "/wp-content/uploads" + "/linkedin.svg"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState) {
  return state;
});

/***/ }),

/***/ "./src/features/spinner/Spinner.tsx":
/*!******************************************!*\
  !*** ./src/features/spinner/Spinner.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_spinner.scss */ "./src/features/spinner/_spinner.scss");
/* harmony import */ var _spinner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_spinner_SpinnerView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/spinner/SpinnerView */ "./src/components/spinner/SpinnerView.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/features/spinner/Spinner.tsx";


 // import { CSSStyles } from "./@types-app";



const mapState = state => ({
  isFetching: state.app.isFetching
});

const mapDispatch = {};

function Spinner(props) {
  // !TODO you use redux, useState shouldn't be here
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none");
  const loadingMessages = ["Hemen geliyor", "Tazeden gelsin", "Ailecek yukluyoruz", "Sayfa bizden, okumak sizden", "Aaa negezel yukluyo"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.isFetching) {
      setDisplay("grid");
    } else {
      setDisplay("none");
    }
  }, [props.isFetching]); // selects a random message from loading messages array

  const loadingMessage = loadingMessages[Math.floor(Math.random() * (loadingMessages.length - 1))] + "...";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spinner_SpinnerView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: display,
    loadingMessage: loadingMessage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }); // return (
  //     <div 
  //         className="Spinner"
  //         style={{display}}>
  //         <img 
  //             src={ uploadsDir + "/logo-inline-black.svg"}
  //             alt="Basak Beykoz"
  //             className="Spinner-logo"/>
  //         <p 
  //             className="Spinner-loadMessage"
  //             >{ loadingMessage }</p>
  //     </div>
  // )
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])( //@ts-ignore,
mapState, mapDispatch)(Spinner));

/***/ }),

/***/ "./src/features/spinner/_spinner.scss":
/*!********************************************!*\
  !*** ./src/features/spinner/_spinner.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/wp/categoryReducer.ts":
/*!********************************************!*\
  !*** ./src/features/wp/categoryReducer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");

const initialState = {
  items: [],
  post: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  //!HACK any
  switch (action.type) {
    case _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIES"]:
      if (action.state === "fail") return state;
      return { ...state,
        items: action.payload
      };

    case _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORY"]:
      if (action.state === "fail") return state;
      return { ...state,
        single: action.payload
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/features/wp/menuActions.ts":
/*!****************************************!*\
  !*** ./src/features/wp/menuActions.ts ***!
  \****************************************/
/*! exports provided: fetchMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMenu", function() { return fetchMenu; });
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");
 // import WPAPI, { WPRequest } from "wpapi";
// const wp = new WPAPI({endpoint: process.env.REACT_APP_REST_ENDPOINT as string});
// wp.menus = wp.registerRoute("menus/v1", "menus/(<slug>)");

const fetchMenu = slug => dispatch => {
  //!HACK any
  fetch("/wp-json" + "/menus/v1/menus/" + slug).then(data => data.json()).then(json => {
    if (json) {
      // TODO you need a better error test here
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MENU"],
        state: "success",
        payload: json.items
      });
    } else {
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MENU"],
        state: "fail",
        error: "something went wrong"
      });
    }
  });
};

/***/ }),

/***/ "./src/features/wp/menuReducer.ts":
/*!****************************************!*\
  !*** ./src/features/wp/menuReducer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");

const initialState = {
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  // !HACK any
  switch (action.type) {
    case _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MENU"]:
      if (action.state === "fail") return state;
      return { ...state,
        items: action.payload
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/features/wp/mergers.ts":
/*!************************************!*\
  !*** ./src/features/wp/mergers.ts ***!
  \************************************/
/*! exports provided: filterByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByType", function() { return filterByType; });
function filterByType(items, type, time) {
  return items.reduce((p, c) => {
    if (c.type === type) {
      p[c.slug] = {
        loadTime: time,
        data: c
      };
    }

    return p;
  }, {});
}

/***/ }),

/***/ "./src/features/wp/singularActions.ts":
/*!********************************************!*\
  !*** ./src/features/wp/singularActions.ts ***!
  \********************************************/
/*! exports provided: fetchSingular, fetchCategoryPosts, fetchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingular", function() { return fetchSingular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategoryPosts", function() { return fetchCategoryPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPage", function() { return fetchPage; });
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");
/* harmony import */ var _mergers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergers */ "./src/features/wp/mergers.ts");

// import WPAPI, { WPRequest } from "wpapi";
 // const wp = new WPAPI({endpoint: process.env.REACT_APP_REST_ENDPOINT as string})

const re = "/wp-json";
const fetchSingular = slug => dispatch => {
  fetch(re + "/customrest/v1/singular_slug/" + slug).then(data => data.json()).then(singular_item => {
    if (singular_item) {
      // !TODO you need a better success test here
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SINGULAR"],
        state: "success",
        payload: {
          [singular_item.type]: {
            [singular_item.slug]: {
              loadTime: Date.now(),
              data: singular_item
            }
          }
        }
      });
    } else {
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SINGULAR"],
        state: "fail",
        error: "json is booboo"
      });
    }
  });
};
const fetchCategoryPosts = slug => dispatch => {
  fetch(re + "/customrest/v1/category_posts_slug/" + slug).then(data => data.json()).then(category_posts => {
    if (category_posts) {
      // !TODO you need a better success test here
      const now = Date.now();
      const payload = {
        fetchTime: Date.now(),
        post: Object(_mergers__WEBPACK_IMPORTED_MODULE_1__["filterByType"])(category_posts, "post", now),
        page: Object(_mergers__WEBPACK_IMPORTED_MODULE_1__["filterByType"])(category_posts, "page", now)
      };
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORY_POSTS"],
        state: "success",
        payload
      });
    } else {
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORY_POSTS"],
        state: "fail",
        error: "json is booboo"
      });
    }
  });
};
const fetchPage = slug => dispatch => {
  fetch(re + "/wp/v2/pages/?slug=" + slug).then(data => data.json()).then(items => {
    if (items) {
      // !TODO you need a better success test here
      const singular_item = items[0];
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PAGE"],
        state: "success",
        payload: {
          [singular_item.type]: {
            [singular_item.slug]: {
              loadTime: Date.now(),
              data: singular_item
            }
          }
        }
      });
    } else {
      dispatch({
        type: _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PAGE"],
        state: "fail",
        error: "json is booboo"
      });
    }
  }); // (wp.pages().slug(page_slug) as WPRequest)
  //     .get((err: Error, items: wpSingularItem[]) => {
  //         console.log("page", items)
  //         if(err) {
  //             dispatch({
  //                 type: FETCH_PAGE,
  //                 state: "fail",
  //                 error: "json is booboo",
  //             });
  //         } else {
  //             const singular_item = items[0];
  //             dispatch({
  //                 type: FETCH_PAGE,
  //                 state: "success",
  //                 payload: {
  //                     [singular_item.type]: {
  //                         [singular_item.slug] : {
  //                             loadTime: Date.now(),
  //                             data: singular_item,
  //                         }
  //                     }
  //                 }
  //             })
  //         }
  //     });
};

/***/ }),

/***/ "./src/features/wp/singularReducer.ts":
/*!********************************************!*\
  !*** ./src/features/wp/singularReducer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");

const initialState = {
  post: {
    fetchTime: 0,
    items: {}
  },
  page: {
    items: {}
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SINGULAR"]:
      if (action.state === "success") {
        return {
          post: { ...state.post,
            items: { ...state.post.items,
              ...action.payload.post
            }
          },
          page: {
            items: { ...state.page.items,
              ...action.payload.page
            }
          }
        };
      } else {
        return state;
      }

    case _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PAGE"]:
      if (action.state === "success") {
        return { ...state,
          page: { ...state.page,
            items: { ...state.page.items,
              ...action.payload.page
            }
          }
        };
      } else {
        return state;
      }

    case _common_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORY_POSTS"]:
      if (action.state === "success") {
        return { ...state,
          post: {
            fetchTime: action.payload.fetchTime,
            items: { ...state.post.items,
              ...action.payload.post
            }
          }
        };
      } else {
        return state;
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _csstools_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @csstools/normalize.css */ "./node_modules/@csstools/normalize.css/normalize.css");
/* harmony import */ var _csstools_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_csstools_normalize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_app_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app/App */ "./src/components/app/App.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/index.tsx";







react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].initialize("UA-171670902-1", {
  debug: true
});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/routes/BlogRoute.tsx":
/*!**********************************!*\
  !*** ./src/routes/BlogRoute.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_blog_Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/blog/Blog */ "./src/features/blog/Blog.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/routes/BlogRoute.tsx";



function BlogRoute() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_blog_Blog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (BlogRoute);

/***/ }),

/***/ "./src/routes/BodyRoute.tsx":
/*!**********************************!*\
  !*** ./src/routes/BodyRoute.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_body_Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/body/Body */ "./src/features/body/Body.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/routes/BodyRoute.tsx";



function BodyRoute() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_body_Body__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (BodyRoute);

/***/ }),

/***/ "./src/routes/CreditsRoute.tsx":
/*!*************************************!*\
  !*** ./src/routes/CreditsRoute.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_credits_Credits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/credits/Credits */ "./src/components/credits/Credits.tsx");
var _jsxFileName = "/mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/routes/CreditsRoute.tsx";



function CreditsRoute() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_credits_Credits__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (CreditsRoute);

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _features_wp_menuReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/wp/menuReducer */ "./src/features/wp/menuReducer.ts");
/* harmony import */ var _features_wp_categoryReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/wp/categoryReducer */ "./src/features/wp/categoryReducer.ts");
/* harmony import */ var _features_app_appReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/app/appReducer */ "./src/features/app/appReducer.ts");
/* harmony import */ var _features_wp_singularReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/wp/singularReducer */ "./src/features/wp/singularReducer.ts");
/* harmony import */ var _features_social_socialReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/social/socialReducer */ "./src/features/social/socialReducer.ts");

 // import postReducer from '../wp/postReducer'
// import pageReducer from '../wp/singularReducer';





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _features_app_appReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  menu: _features_wp_menuReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  social: _features_social_socialReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  singular: _features_wp_singularReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  categories: _features_wp_categoryReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./src/store/rootReducer.ts");



const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]]; // @ts-ignore

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_2__["rootReducer"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/utkusarioglu/Documents/Projects/BasakBeykoz/basakbeykoz_d/themes/basakbeykoz/react-src/src/index.tsx */"./src/index.tsx");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map