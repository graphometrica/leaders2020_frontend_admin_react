/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../config/default.js":
/*!****************************!*\
  !*** ../config/default.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 50:0-14 */
/***/ (function(module) {

var mode = "development";

var devOrProd = function devOrProd(devValue, prodValue) {
  if (mode === 'production') return prodValue;
  return devValue;
};

var config = {
  app: {
    head: {
      script: [{
        src: 'https://kit.fontawesome.com/4e645be814.js',
        crossorigin: 'anonymous'
      }],
      link: [{
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;700&display=swap',
        rel: 'stylesheet',
        type: 'text/css'
      }, {
        href: 'favicon.ico',
        rel: 'icon',
        type: 'image/ico'
      }],
      meta: [{
        charset: "utf-8"
      }, {
        "http-equiv": "x-ua-compatible",
        content: "ie=edge"
      }, {
        "theme-color": "#000000"
      }, {
        name: "viewport",
        content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      }, {
        name: "description",
        content: "Kotik.dog - панель администрирования"
      }],
      title: "Kotik.dog - панель администрирования"
    }
  },
  ENV: function ENV() {
    return {
      version: "1.00.00",
      mode: mode,
      animalsEndpoint: devOrProd('http://localhost:3001/api/animals', 'http://localhost:9080')
    };
  },
  contentBasePublicPath: ""
};
module.exports = config;

/***/ }),

/***/ "./app/App.js":
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _routes_configureRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routes/configureRouter */ "./app/routes/configureRouter.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var _containers_NavigationHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @containers/NavigationHeader */ "./app/common/containers/NavigationHeader.js");
/* harmony import */ var typestyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typestyle */ "../node_modules/typestyle/lib.es2015/index.js");





var classNames = (0,typestyle__WEBPACK_IMPORTED_MODULE_3__.stylesheet)({
  container: {
    margin: 0,
    padding: 0
  },
  appContent: {
    paddingTop: '22px'
  }
});

var NoRoute = function NoRoute() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Page not found 404");
};

var App = function App(props) {
  var route = props.route,
      router = props.router;
  if (!route) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NoRoute, null);
  var routePageComponent = _routes_configureRouter__WEBPACK_IMPORTED_MODULE_1__.routesContent[route.name];
  if (!routePageComponent) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NoRoute, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_NavigationHeader__WEBPACK_IMPORTED_MODULE_2__.NavigationHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
    flex: "25px"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
    flex: "auto",
    style: {
      marginTop: '25px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(routePageComponent, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
    flex: "25px"
  }, "\xA0")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/common/containers/NavigationHeader.js":
/*!***************************************************!*\
  !*** ./app/common/containers/NavigationHeader.js ***!
  \***************************************************/
/*! namespace exports */
/*! export NavigationHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationHeader": function() { return /* binding */ NavigationHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/page-header/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var _NavigationHeader_scoped_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.scoped.scss */ "./app/common/containers/NavigationHeader.scoped.scss");




var NavigationHeader = function NavigationHeader(_ref) {
  var route = _ref.route,
      router = _ref.router;

  var reportHandler = function reportHandler(e) {
    window.open('http://35.245.196.56:8088/superset/dashboard/8/', '_blank');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    flex: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "site-page-header",
    title: "Kotik.dog",
    subTitle: "\u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
    extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
      onClick: reportHandler,
      type: "primary",
      key: "2"
    }, "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u043E\u0442\u0447\u0435\u0442\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
      key: "3"
    }, "\u0412\u044B\u0439\u0442\u0438")]
  })));
};



/***/ }),

/***/ "./app/common/helpers/filterFunctions.js":
/*!***********************************************!*\
  !*** ./app/common/helpers/filterFunctions.js ***!
  \***********************************************/
/*! namespace exports */
/*! export filterArrayByString [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterArrayByString": function() { return /* binding */ filterArrayByString; }
/* harmony export */ });
/* harmony import */ var _safeFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeFunctions */ "./app/common/helpers/safeFunctions.js");
/* harmony import */ var _stringFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringFunctions */ "./app/common/helpers/stringFunctions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var findBySubstring = function findBySubstring(value, filterValue) {
  if ((0,_safeFunctions__WEBPACK_IMPORTED_MODULE_0__.safeString)(value).toLowerCase().indexOf(filterValue) >= 0) {
    return true;
  }

  return false;
};

var filterArrayByString = function filterArrayByString(data, filterValue, fields) {
  if (!Array.isArray(data)) return [];
  if (!data.length) return [];
  var result = [];

  if ((0,_stringFunctions__WEBPACK_IMPORTED_MODULE_1__.stringLength)(filterValue)) {
    filterValue = (0,_safeFunctions__WEBPACK_IMPORTED_MODULE_0__.safeString)(filterValue).toLowerCase();

    if (Array.isArray(fields) && fields.length) {
      result = data.filter(function (i) {
        for (var index = 0; index < fields.length; index++) {
          var field = fields[index];
          var isFound = findBySubstring(i[field], filterValue);
          if (isFound) return true;
        }

        return false;
      });
    } else {
      result = data.filter(function (i) {
        if (_typeof(i) === 'object' && i) {
          return findBySubstring(i, filterValue);
        }

        return false;
      });
    }

    return result;
  }

  return data;
};



/***/ }),

/***/ "./app/common/helpers/index.js":
/*!*************************************!*\
  !*** ./app/common/helpers/index.js ***!
  \*************************************/
/*! namespace exports */
/*! export filterArrayByString [provided] [no usage info] [missing usage info prevents renaming] -> ./app/common/helpers/filterFunctions.js .filterArrayByString */
/*! export safeArray [provided] [no usage info] [missing usage info prevents renaming] -> ./app/common/helpers/safeFunctions.js .safeArray */
/*! export safeObject [provided] [no usage info] [missing usage info prevents renaming] -> ./app/common/helpers/safeFunctions.js .safeObject */
/*! export safeString [provided] [no usage info] [missing usage info prevents renaming] -> ./app/common/helpers/safeFunctions.js .safeString */
/*! export stringLength [provided] [no usage info] [missing usage info prevents renaming] -> ./app/common/helpers/stringFunctions.js .stringLength */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterArrayByString": function() { return /* reexport safe */ _filterFunctions__WEBPACK_IMPORTED_MODULE_0__.filterArrayByString; },
/* harmony export */   "stringLength": function() { return /* reexport safe */ _stringFunctions__WEBPACK_IMPORTED_MODULE_1__.stringLength; },
/* harmony export */   "safeArray": function() { return /* reexport safe */ _safeFunctions__WEBPACK_IMPORTED_MODULE_2__.safeArray; },
/* harmony export */   "safeObject": function() { return /* reexport safe */ _safeFunctions__WEBPACK_IMPORTED_MODULE_2__.safeObject; },
/* harmony export */   "safeString": function() { return /* reexport safe */ _safeFunctions__WEBPACK_IMPORTED_MODULE_2__.safeString; }
/* harmony export */ });
/* harmony import */ var _filterFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterFunctions */ "./app/common/helpers/filterFunctions.js");
/* harmony import */ var _stringFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringFunctions */ "./app/common/helpers/stringFunctions.js");
/* harmony import */ var _safeFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safeFunctions */ "./app/common/helpers/safeFunctions.js");




/***/ }),

/***/ "./app/common/helpers/safeFunctions.js":
/*!*********************************************!*\
  !*** ./app/common/helpers/safeFunctions.js ***!
  \*********************************************/
/*! namespace exports */
/*! export safeArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export safeObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export safeString [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "safeString": function() { return /* binding */ safeString; },
/* harmony export */   "safeArray": function() { return /* binding */ safeArray; },
/* harmony export */   "safeObject": function() { return /* binding */ safeObject; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var safeString = function safeString(value) {
  if (value === undefined || value === null) return '';
  if (typeof value === 'number') return value.toString();
  if (_typeof(value) === 'object') return JSON.stringify(value) || '';
  if (typeof value === 'string') return value;
  return '';
};

var safeArray = function safeArray(value) {
  if (Array.isArray(value)) return value;
  return [];
};

var safeObject = function safeObject(value) {
  if (value === undefined || value === null) return {};
  if (_typeof(value) === 'object') return value;
  return {};
};



/***/ }),

/***/ "./app/common/helpers/stringFunctions.js":
/*!***********************************************!*\
  !*** ./app/common/helpers/stringFunctions.js ***!
  \***********************************************/
/*! namespace exports */
/*! export stringLength [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringLength": function() { return /* binding */ stringLength; }
/* harmony export */ });
/* harmony import */ var _safeFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeFunctions */ "./app/common/helpers/safeFunctions.js");


var stringLength = function stringLength(value, doTrim) {
  if (doTrim) {
    return (0,_safeFunctions__WEBPACK_IMPORTED_MODULE_0__.safeString)(value).trim().length;
  }

  return (0,_safeFunctions__WEBPACK_IMPORTED_MODULE_0__.safeString)(value).length;
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalCardsFilterBar.js":
/*!**************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalCardsFilterBar.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export AnimalCardsFilterBar [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalCardsFilterBar": function() { return /* binding */ AnimalCardsFilterBarWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/form/index.js");
/* harmony import */ var _domain_Animal_data_animal_card_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Animal/data/animal_card.json */ "./app/domain/Animal/data/animal_card.json");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var children = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
  key: "1"
}, "\u043A\u043E\u0448\u043A\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
  key: "2"
}, "\u0441\u043E\u0431\u0430\u043A\u0430")];

function handleChange(value) {
  console.log("selected ".concat(value));
}



var AnimalCardsFilterBar = function AnimalCardsFilterBar(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    gutter: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "gutter-row",
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default.Item, {
    label: "\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",
    defaultValue: ["собака", "кошка"],
    onChange: handleChange
  }, children))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "gutter-row",
    span: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "gutter-row",
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default.Item, {
    label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442",
    defaultValue: ["11", "22", "3"],
    onChange: handleChange
  }, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
    key: "11"
  }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
    key: "22"
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
    key: "3"
  }, "7")]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "gutter-row",
    span: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "gutter-row",
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default.Item, {
    label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "\u0412\u043E\u043B\u044C\u0435\u0440",
    defaultValue: ["11", "3"],
    onChange: handleChange
  }, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
    key: "11"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
    key: "22"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
    key: "3"
  }, "3")])))));
};

{
  /* собака/кошка
  возраст
  пол
  цвет
  шерсть
  уши
  хвост
  размер
  вольер */
}

var AnimalCardsFilterBarWrapper = function AnimalCardsFilterBarWrapper(props) {
  var isFetching = false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimalCardsFilterBar, {
    data: {},
    isFetching: isFetching
  });
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalCardsTable.js":
/*!**********************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalCardsTable.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export AnimalCardsTable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalCardsTable": function() { return /* binding */ AnimalCardsTableWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/table/index.js");
/* harmony import */ var _domain_Animal_containers_AnimalModal_AnimalModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Animal/containers/AnimalModal/AnimalModal */ "./app/domain/Animal/containers/AnimalModal/AnimalModal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var columns = [{
  title: '№',
  dataIndex: 'cardNumber',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, value);
  }
}, {
  title: 'вид',
  dataIndex: 'type',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'возраст',
  dataIndex: 'age',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'вес, кг',
  dataIndex: 'weight',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'кличка',
  dataIndex: 'nickname',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'пол',
  dataIndex: 'gender',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'порода',
  dataIndex: 'breed',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'окрас',
  dataIndex: 'color',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'шерсть',
  dataIndex: 'wool',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'уши',
  dataIndex: 'ears',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'хвост',
  dataIndex: 'tail',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'размер',
  dataIndex: 'size',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'особые приметы',
  dataIndex: 'specialSigns',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'Вольер №',
  dataIndex: 'aviary',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}];

var mapToTableData = function mapToTableData(data) {
  var result = data.map(function (i) {
    var generalInfo = i.generalInfo;
    return {
      key: generalInfo.id,
      id: generalInfo.id,
      cardNumber: generalInfo.cardNumber,
      type: generalInfo.type,
      age: generalInfo.year,
      weight: generalInfo.weight,
      nickname: generalInfo.nickname,
      gender: generalInfo.gender,
      breed: generalInfo.breed,
      color: generalInfo.color,
      wool: generalInfo.wool,
      ears: generalInfo.ears,
      tail: generalInfo.tail,
      size: generalInfo.size,
      specialSigns: generalInfo.specialSigns,
      aviary: generalInfo.aviary
    };
  });
  return result;
};

var AnimalCardsTable = function AnimalCardsTable(_ref) {
  var initialData = _ref.initialData,
      mappedData = _ref.mappedData;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      animalCardRecord = _React$useState2[0],
      setAnimalCardRecord = _React$useState2[1];

  var changeValuesHandler = function changeValuesHandler(values) {
    setAnimalCardRecord(_objectSpread(_objectSpread({}, animalCardRecord), values));
  };

  var rowClickHandler = function rowClickHandler(record, rowIndex) {
    setAnimalCardRecord(initialData[rowIndex]);
  };

  var hideModalHandler = function hideModalHandler() {
    setAnimalCardRecord(undefined);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, {
    gutter: 16,
    style: {
      marginTop: '12px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "gutter-row",
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    onRow: function onRow(record, rowIndex) {
      return {
        onClick: function onClick(event) {
          return rowClickHandler(record, rowIndex);
        }
      };
    },
    dataSource: mappedData,
    columns: columns
  }))), !!animalCardRecord && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_domain_Animal_containers_AnimalModal_AnimalModal__WEBPACK_IMPORTED_MODULE_1__.AnimalModal, {
    values: animalCardRecord,
    changeValues: changeValuesHandler,
    hideModal: hideModalHandler
  }));
};

var AnimalCardsTableWrapper = function AnimalCardsTableWrapper(props) {
  var data = props.data;
  var mappedData = mapToTableData(data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimalCardsTable, {
    initialData: data,
    mappedData: mappedData
  });
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/AnimalModal.js":
/*!*****************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/AnimalModal.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export AnimalModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalModal": function() { return /* binding */ AnimalModalWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var _TopPart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopPart */ "./app/domain/Animal/containers/AnimalModal/TopPart.js");
/* harmony import */ var _GeneralInfo_GeneralInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GeneralInfo/GeneralInfo */ "./app/domain/Animal/containers/AnimalModal/GeneralInfo/GeneralInfo.js");
/* harmony import */ var _CatchInfo_CatchInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CatchInfo/CatchInfo */ "./app/domain/Animal/containers/AnimalModal/CatchInfo/CatchInfo.js");
/* harmony import */ var _NewOwner_NewOwner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NewOwner/NewOwner */ "./app/domain/Animal/containers/AnimalModal/NewOwner/NewOwner.js");
/* harmony import */ var _AnimalMovements_AnimalMovements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AnimalMovements/AnimalMovements */ "./app/domain/Animal/containers/AnimalModal/AnimalMovements/AnimalMovements.js");
/* harmony import */ var _HealthInfo_HealthInfoTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HealthInfo/HealthInfoTab */ "./app/domain/Animal/containers/AnimalModal/HealthInfo/HealthInfoTab.js");
/* harmony import */ var _AnimalModal_scoped_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AnimalModal.scoped.scss */ "./app/domain/Animal/containers/AnimalModal/AnimalModal.scoped.scss");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;








function callback(key) {
  console.log(key);
}

function handleChange(value) {
  console.log("selected ".concat(value));
}

var AnimalModal = function AnimalModal(_ref) {
  var values = _ref.values,
      changeValues = _ref.changeValues,
      hideModal = _ref.hideModal;
  //console.log(values)
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_13__.default, {
    placement: "right",
    closable: true,
    width: "70%",
    onClose: hideModal,
    visible: !!values
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_14__.default, {
    layout: "vertical",
    hideRequiredMark: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TopPart__WEBPACK_IMPORTED_MODULE_6__.TopPart, {
    values: values,
    changeValues: changeValues
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_15__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_16__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    defaultActiveKey: "1",
    onChange: callback
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {
    tab: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
    key: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GeneralInfo_GeneralInfo__WEBPACK_IMPORTED_MODULE_7__.GeneralInfo, {
    values: values,
    changeValues: changeValues
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {
    tab: "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0442\u043B\u043E\u0432\u0435",
    key: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CatchInfo_CatchInfo__WEBPACK_IMPORTED_MODULE_8__.CatchInfo, {
    values: values,
    changeValues: changeValues
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {
    tab: "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u043D\u043E\u0432\u044B\u0445 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u0445",
    key: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NewOwner_NewOwner__WEBPACK_IMPORTED_MODULE_9__.NewOwner, {
    values: values,
    changeValues: changeValues
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {
    tab: "\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",
    key: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnimalMovements_AnimalMovements__WEBPACK_IMPORTED_MODULE_10__.AnimalMovements, {
    values: values,
    changeValues: changeValues
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {
    tab: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    key: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HealthInfo_HealthInfoTab__WEBPACK_IMPORTED_MODULE_11__.HealthInfoTab, {
    values: values,
    changeValues: changeValues
  }))))))));
};

var AnimalModalWrapper = function AnimalModalWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimalModal, props);
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/AnimalMovements/AnimalMovements.js":
/*!*************************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/AnimalMovements/AnimalMovements.js ***!
  \*************************************************************************************/
/*! namespace exports */
/*! export AnimalMovements [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalMovements": function() { return /* binding */ AnimalMovements; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/form/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;

var AnimalMovements = function AnimalMovements(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  var income = values.animalMovements.find(function (i) {
    return (i.type || '').toLowerCase() === 'поступление животного в приют';
  }) || {};
  var outcome = values.animalMovements.find(function (i) {
    return (i.type || '').toLowerCase() !== 'поступление животного в приют';
  }) || {};
  console.log(income);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0432 \u043F\u0440\u0438\u044E\u0442",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: income.date || '',
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0410\u043A\u0442 \u2116",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: income.documentNumber || '',
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0431\u044B\u0442\u0438\u044F \u0438\u0437 \u043F\u0440\u0438\u044E\u0442\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: outcome.date || '',
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0410\u043A\u0442 \u2116",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: outcome.documentNumber || '',
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u044B\u0431\u044B\u0442\u0438\u044F \u0438\u0437 \u043F\u0440\u0438\u044E\u0442\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: outcome.additional || '',
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/CatchInfo/CatchInfo.js":
/*!*************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/CatchInfo/CatchInfo.js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export CatchInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatchInfo": function() { return /* binding */ CatchInfo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/form/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;

var CatchInfo = function CatchInfo(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0417\u0430\u043A\u0430\u0437-\u043D\u0430\u0440\u044F\u0434 \u2116",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.catchInfo.catchOrder.orderActNumber,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.catchInfo.catchOrder.orderActNumber = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0414\u0430\u0442\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.catchInfo.catchOrder.orderActDate,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.catchInfo.catchOrder.orderActDate = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0410\u043A\u0442 \u043E\u0442\u043B\u043E\u0432\u0430 \u2116",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.catchInfo.actNumber,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.catchInfo.actNumber = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0414\u0430\u0442\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0410\u0434\u0440\u0435\u0441 \u043C\u0435\u0441\u0442\u0430 \u043E\u0442\u043B\u043E\u0432\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.color,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.color = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0412\u0438\u0434\u0435\u043E\u0444\u0438\u043A\u0441\u0430\u0446\u0438\u044F \u043E\u0442\u043B\u043E\u0432\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/GeneralInfo/GeneralInfo.js":
/*!*****************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/GeneralInfo/GeneralInfo.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export GeneralInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralInfo": function() { return /* binding */ GeneralInfo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var _LeftPart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LeftPart */ "./app/domain/Animal/containers/AnimalModal/GeneralInfo/LeftPart.js");
/* harmony import */ var _RightPart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RightPart */ "./app/domain/Animal/containers/AnimalModal/GeneralInfo/RightPart.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;



var GeneralInfo = function GeneralInfo(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LeftPart__WEBPACK_IMPORTED_MODULE_6__.LeftPart, {
    changeValues: changeValues,
    values: values
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RightPart__WEBPACK_IMPORTED_MODULE_7__.RightPart, {
    changeValues: changeValues,
    values: values
  })));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/GeneralInfo/LeftPart.js":
/*!**************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/GeneralInfo/LeftPart.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export LeftPart [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftPart": function() { return /* binding */ LeftPart; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/checkbox/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;

var LeftPart = function LeftPart(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: "is-social",
    style: {
      width: 350
    },
    cover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "",
      src: "https://drive.google.com/u/0/uc?id=1BI9zifsdwHq0qra11ZOlfT_ulgph8EK8&export=download"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Meta, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {
      checked: !!values.additionalInfo.isSocialized,
      onChange: function onChange(e) {
        var newValues = JSON.parse(JSON.stringify(values));
        newValues.additionalInfo.isSocialized = e.target.checked;
        changeValues(newValues);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "\u0441\u043E\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E")),
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingLeft: "24px"
      }
    }, "\u0433\u043E\u0442\u043E\u0432\u043E \u043A \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0443")
  }))))));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/GeneralInfo/RightPart.js":
/*!***************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/GeneralInfo/RightPart.js ***!
  \***************************************************************************/
/*! namespace exports */
/*! export RightPart [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightPart": function() { return /* binding */ RightPart; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/radio/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;

var RightPart = function RightPart(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
    value: values.generalInfo.type,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.type = e.target.value;
      changeValues(newValues);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    value: "собака"
  }, "\u0441\u043E\u0431\u0430\u043A\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    value: "кошка"
  }, "\u043A\u043E\u0448\u043A\u0430"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041F\u043E\u043B",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
    value: values.generalInfo.gender,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.gender = e.target.value;
      changeValues(newValues);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    value: "мужской"
  }, "\u043C\u0443\u0436\u0441\u043A\u043E\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    value: "женский"
  }, "\u0436\u0435\u043D\u0441\u043A\u0438\u0439"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041E\u043A\u0440\u0430\u0441",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.color,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.color = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0423\u0448\u0438",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.ears,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.ears = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0420\u0430\u0437\u043C\u0435\u0440",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.size,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.size = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0413\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.year,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.year = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0412\u0435\u0441",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.weight,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.weight = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0435\u0441"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041A\u043B\u0438\u0447\u043A\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.nickname,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.nicknameы = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041F\u043E\u0440\u043E\u0434\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.breed,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.breed = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0428\u0435\u0440\u0441\u0442\u044C",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.wool,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.wool = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0425\u0432\u043E\u0441\u0442",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.tail,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.tail = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    gutter: 36
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041E\u0441\u043E\u0431\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0442\u044B",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.generalInfo.specialSigns,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.specialSigns = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextArea, {
    rows: 2,
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0414\u0430\u0442\u0430 \u0441\u0442\u0435\u0440\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.additionalInfo.sterilizationDate,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.additionalInfo.sterilizationDate = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 17
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041C\u0435\u0441\u0442\u043E \u0441\u0442\u0435\u0440\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0424\u0418\u041E \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u043E\u0433\u043E \u0432\u0440\u0430\u0447\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.additionalInfo.veterinarianEmployee.name,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      values.additionalInfo.veterinarianEmployee.name = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))))));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/HealthInfo/Endoparasites.js":
/*!******************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/HealthInfo/Endoparasites.js ***!
  \******************************************************************************/
/*! namespace exports */
/*! export Endoparasites [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Endoparasites": function() { return /* binding */ Endoparasites; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/table/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;
var data = [{
  "id": "44cc31ac-4957-489c-ad2e-b8e85e36d1a1",
  "date": "2020-09-28",
  "anamnesis": "удовлетворительно"
}];
var columns = [{
  title: 'Дата осмотра',
  dataIndex: 'date',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'Анамнез',
  dataIndex: 'anamnesis',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}];

var Endoparasites = function Endoparasites(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    pagination: false,
    dataSource: values.endoparasites,
    columns: columns
  }));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/HealthInfo/HealthInfo.js":
/*!***************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/HealthInfo/HealthInfo.js ***!
  \***************************************************************************/
/*! namespace exports */
/*! export HealthInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthInfo": function() { return /* binding */ HealthInfo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/table/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;
var columns = [{
  title: 'Дата осмотра',
  dataIndex: 'date',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'Анамнез',
  dataIndex: 'anamnesis',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}];

var HealthInfo = function HealthInfo(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  var mappedData = values.healthInfo.map(function (i) {
    return _objectSpread(_objectSpread({}, i), {}, {
      key: i.id
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    pagination: false,
    dataSource: mappedData,
    columns: columns
  }));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/HealthInfo/HealthInfoTab.js":
/*!******************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/HealthInfo/HealthInfoTab.js ***!
  \******************************************************************************/
/*! namespace exports */
/*! export HealthInfoTab [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthInfoTab": function() { return /* binding */ HealthInfoTab; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var _HealthInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HealthInfo */ "./app/domain/Animal/containers/AnimalModal/HealthInfo/HealthInfo.js");
/* harmony import */ var _Vaccinations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vaccinations */ "./app/domain/Animal/containers/AnimalModal/HealthInfo/Vaccinations.js");
/* harmony import */ var _Endoparasites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Endoparasites */ "./app/domain/Animal/containers/AnimalModal/HealthInfo/Endoparasites.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;




var HealthInfoTab = function HealthInfoTab(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      marginTop: '12px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043E\u0442 \u044D\u043A\u0442\u043E- \u0438 \u044D\u043D\u0434\u043E\u043F\u0430\u0440\u0430\u0437\u0438\u0442\u043E\u0432")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Endoparasites__WEBPACK_IMPORTED_MODULE_8__.Endoparasites, {
    changeValues: changeValues,
    values: values
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      marginTop: '48px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0432\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0438\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Vaccinations__WEBPACK_IMPORTED_MODULE_7__.Vaccinations, {
    changeValues: changeValues,
    values: values
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      marginTop: '48px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default, {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HealthInfo__WEBPACK_IMPORTED_MODULE_6__.HealthInfo, {
    changeValues: changeValues,
    values: values
  }))));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/HealthInfo/Vaccinations.js":
/*!*****************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/HealthInfo/Vaccinations.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export Vaccinations [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vaccinations": function() { return /* binding */ Vaccinations; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/table/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;
var columns = [{
  title: 'Дата осмотра',
  dataIndex: 'date',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}, {
  title: 'Анамнез',
  dataIndex: 'anamnesis',
  render: function render(value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value);
  }
}];

var Vaccinations = function Vaccinations(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  var mappedData = values.vaccinations.map(function (i) {
    return _objectSpread(_objectSpread({}, i), {}, {
      key: i.id
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    pagination: false,
    dataSource: values.vaccinations,
    columns: columns
  }));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/NewOwner/NewOwner.js":
/*!***********************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/NewOwner/NewOwner.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export NewOwner [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOwner": function() { return /* binding */ NewOwner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/form/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_2__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_5__.default.Meta;

var NewOwner = function NewOwner(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.newOwner.type === 'юридическое лицо' ? values.newOwner.name : undefined,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.newOwner.name = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0410\u0434\u0440\u0435\u0441",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0424\u0418\u041E \u043E\u043F\u0435\u043A\u0443\u043D\u043E\u0432",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.newOwner.type === 'юридическое лицо' ? values.newOwner.curators.map(function (i) {
      return i.name;
    }).join(',') : undefined,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      var parts = (e.target.value || '').split(',');
      var curators = parts.map(function (i) {
        return {
          type: 'куратор',
          name: i
        };
      });
      newValues.newOwner.curators = curators;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E (\u0424.\u0418.\u041E)",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: values.newOwner.type === 'физическое лицо' ? values.newOwner.name : undefined,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.newOwner.name = e.target.value;
      changeValues(newValues);
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0421\u0435\u0440\u0438\u044F \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0420\u0424",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041D\u043E\u043C\u0435\u0440",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0412\u044B\u0434\u0430\u043D",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0434\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    span: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  })))));
};



/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/TopPart.js":
/*!*************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/TopPart.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export TopPart [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopPart": function() { return /* binding */ TopPart; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Option = antd__WEBPACK_IMPORTED_MODULE_3__.default.Option;
var Title = antd__WEBPACK_IMPORTED_MODULE_4__.default.Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__.default.TextArea;
var TabPane = antd__WEBPACK_IMPORTED_MODULE_6__.default.TabPane;
var Meta = antd__WEBPACK_IMPORTED_MODULE_7__.default.Meta;

var TopPart = function TopPart(_ref) {
  var changeValues = _ref.changeValues,
      values = _ref.values;

  var downloadHandler = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('v', values); //responseType: 'blob'

              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default()({
                url: "https://kotik.dog/gen/get_animal_card",
                method: 'POST',
                responseType: 'blob',
                data: values
              }).then(function (res) {
                (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(res.data, "report.docx");
                console.log('res', res);
              });

            case 3:
              res = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function downloadHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {
    gutter: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    span: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default.Item, {
    label: "\u2116 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.cardNumber = e.target.value;
      changeValues(newValues);
    },
    value: values.generalInfo.cardNumber
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    span: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default.Item, {
    label: "\u0412\u043E\u043B\u044C\u0435\u0440 \u2116",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    value: values.generalInfo.aviary,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.generalInfo.aviary = e.target.value;
      changeValues(newValues);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    span: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default.Item, {
    label: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043C\u0435\u0442\u043A\u0430",
    rules: [{
      required: true,
      message: "Поле обязательное"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    value: values.additionalInfo.identificationMark,
    onChange: function onChange(e) {
      var newValues = JSON.parse(JSON.stringify(values));
      newValues.additionalInfo.identificationMark = e.target.value;
      changeValues(newValues);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__.default, {
    span: 6,
    style: {
      paddingTop: '32px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_11__.default, {
    onClick: downloadHandler,
    size: "small",
    type: "primary"
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 Word"))));
};



/***/ }),

/***/ "./app/domain/Animal/pages/AnimalCardsPage.js":
/*!****************************************************!*\
  !*** ./app/domain/Animal/pages/AnimalCardsPage.js ***!
  \****************************************************/
/*! namespace exports */
/*! export AnimalCardsPage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalCardsPage": function() { return /* binding */ AnimalCardsPageWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _AnimalCardsPage_scoped_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimalCardsPage.scoped.scss */ "./app/domain/Animal/pages/AnimalCardsPage.scoped.scss");
/* harmony import */ var _domain_Animal_containers_AnimalCardsFilterBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Animal/containers/AnimalCardsFilterBar */ "./app/domain/Animal/containers/AnimalCardsFilterBar.js");
/* harmony import */ var _domain_Animal_containers_AnimalCardsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @domain/Animal/containers/AnimalCardsTable */ "./app/domain/Animal/containers/AnimalCardsTable.js");
/* harmony import */ var _domain_Animal_store_AnimalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @domain/Animal/store/AnimalStore */ "./app/domain/Animal/store/AnimalStore/index.js");






var AnimalCardsPage = function AnimalCardsPage(_ref) {
  var data = _ref.data,
      isFetching = _ref.isFetching,
      getAllHandler = _ref.getAllHandler;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_domain_Animal_containers_AnimalCardsFilterBar__WEBPACK_IMPORTED_MODULE_2__.AnimalCardsFilterBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_domain_Animal_containers_AnimalCardsTable__WEBPACK_IMPORTED_MODULE_3__.AnimalCardsTable, {
    data: data,
    getAllHandler: getAllHandler
  }));
};

var stub = [{
  "generalInfo": {
    "id": "fdb73351-ed40-463e-9e55-f4c03d198501",
    "cardNumber": "1665з-20",
    "type": "собака",
    "year": "2016",
    "weight": "25",
    "nickname": "Варя 2",
    "gender": "женский",
    "breed": "метис",
    "color": "черный",
    "wool": "короткая",
    "ears": "полустоячие",
    "tail": "обычный",
    "size": "средний",
    "specialSigns": "нет",
    "aviary": "1"
  },
  "additionalInfo": {
    "id": "17a0df1b-a931-48a8-b428-907abe409a63",
    "identificationMark": "643094100731522",
    "isSterilized": true,
    "sterilizationDate": "2020-01-01",
    "sterilizationComment": "стерилизована ранее",
    "veterinarianEmployee": {
      "id": "160f7523-5cfd-41dc-9237-07084e3178fa",
      "name": "Врач 1",
      "type": "ветеринарный врач"
    },
    "isSocialized": true
  },
  "catchInfo": {
    "id": "472ea949-c3f9-46fe-a359-115e7dc0d45e",
    "actNumber": "128(1)",
    "catchOrder": {
      "id": "111bca96-a46d-4b56-b704-106a5fb11960",
      "orderActNumber": "128(1)",
      "orderActDate": "2020-10-04"
    },
    "administrativeDistrict": {
      "id": "0e20c5c7-4a8d-4ecf-907b-b08200c71a98",
      "name": "ЗелАО"
    },
    "address": {
      "unparsed": "Пятницкое ш., 37",
      "FIASCode": "",
      "latitude": "",
      "longitude": ""
    }
  },
  "newOwner": {
    "id": "c184211e-aa8f-4f07-b4c7-f3fd251f731f",
    "type": "юридическое лицо",
    "name": "ООО Добро Вместе",
    "documentNumber": "12(2)",
    "curators": [{
      "id": "4d68edaa-9193-4c55-935c-5b911db1d4da",
      "name": "Иванова Анна",
      "type": "куратор"
    }]
  },
  "animalMovements": [{
    "id": "4d68edaa-9193-4c55-935c-5b911db1d4da",
    "date": "2020-10-19",
    "type": "Выбытие из приюта",
    "documentNumber": "179з-20(подк.)",
    "additional": "смерть"
  }, {
    "id": "4d68edaa-9193-4c55-935c-5b911db1d4dc",
    "date": "2020-05-11",
    "type": "Поступление животного в приют",
    "documentNumber": "17з-20(подк.)",
    "additional": ""
  }],
  "shelter": {
    "id": "fe3c61e2-60c3-4fd3-8dda-b63271e279f8",
    "address": {
      "unparsed": "Пятницкое ш., 37",
      "FIASCode": "",
      "latitude": "",
      "longitude": ""
    },
    "serviceOrganization": "ГБУ Доринвест",
    "bossEmployee": {
      "id": "9e635e5f-09b0-4f04-918e-e0f837cd3ec2",
      "name": "Игнатов А.В."
    },
    "careEmployee": {
      "id": "9e635e5f-09b0-4f04-918e-e0f837cd3ec2",
      "name": "Работник 1 "
    }
  },
  "endoparasites": [{
    "id": "f332f833-d7a3-4632-b4ff-57253ae1e96a",
    "position": "1",
    "date": "2020-02-04",
    "medicationName": "Азинокс",
    "dose": "2.5 мл"
  }],
  "vaccinations": [{
    "id": "a332f833-d7a3-4632-b4ff-57253ae1e96b",
    "position": "1",
    "date": "2020-02-04",
    "medicationName": "Бешенство Мультикан-6",
    "serialNumber": ""
  }],
  "healthInfo": [{
    "id": "44cc31ac-4957-489c-ad2e-b8e85e36d1a12",
    "date": "2020-09-28",
    "anamnesis": "удовлетворительно"
  }]
}];

var AnimalCardsPageWrapper = function AnimalCardsPageWrapper(props) {
  // const { data, isFetching } = AnimalStore.useState((s) => ({
  //     data: s.data,        
  //     isFetching: s.isFetching        
  //   }));
  // const [downloadFinished, downloadResult] = getAll.useBeckon({value: 'getAll'});
  // if (!downloadFinished) {    
  //     return <div>Loading, please wait...</div>;
  // }
  // if (downloadResult.error) {
  //     return <div>ERROR: {downloadResult.message}</div>;
  // }
  // const handlers = {
  //     getAllHandler: async () => {    
  //       await getAll.run({ value: "wtf param" });    
  //     }
  // }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimalCardsPage, {
    data: stub,
    isFetching: false
  });
};



/***/ }),

/***/ "./app/domain/Animal/services/animalsApi.js":
/*!**************************************************!*\
  !*** ./app/domain/Animal/services/animalsApi.js ***!
  \**************************************************/
/*! namespace exports */
/*! export animalsApi [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animalsApi": function() { return /* binding */ animalsApi; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @appConfig */ "../config/default.js");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_appConfig__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var endpoint = _appConfig__WEBPACK_IMPORTED_MODULE_1___default().ENV().animalsEndpoint;
var stub = [{
  "generalInfo": {
    "id": "fdb73351-ed40-463e-9e55-f4c03d198501",
    "cardNumber": "1665з-20",
    "type": "собака",
    "year": "2016",
    "weight": "25",
    "nickname": "Варя 2",
    "gender": "женский",
    "breed": "метис",
    "color": "черный",
    "wool": "короткая",
    "ears": "полустоячие",
    "tail": "обычный",
    "size": "средний",
    "specialSigns": "нет",
    "aviary": "1"
  },
  "additionalInfo": {
    "id": "17a0df1b-a931-48a8-b428-907abe409a63",
    "identificationMark": "643094100731522",
    "isSterilized": true,
    "sterilizationDate": "2020-01-01",
    "sterilizationComment": "стерилизована ранее",
    "veterinarianEmployee": {
      "id": "160f7523-5cfd-41dc-9237-07084e3178fa",
      "name": "Врач 1",
      "type": "ветеринарный врач"
    },
    "isSocialized": true
  },
  "catchInfo": {
    "id": "472ea949-c3f9-46fe-a359-115e7dc0d45e",
    "actNumber": "128(1)",
    "catchOrder": {
      "id": "111bca96-a46d-4b56-b704-106a5fb11960",
      "orderActNumber": "128(1)",
      "orderActDate": "2020-10-04"
    },
    "administrativeDistrict": {
      "id": "0e20c5c7-4a8d-4ecf-907b-b08200c71a98",
      "name": "ЗелАО"
    },
    "address": {
      "unparsed": "Пятницкое ш., 37",
      "FIASCode": "",
      "latitude": "",
      "longitude": ""
    }
  },
  "newOwner": {
    "id": "c184211e-aa8f-4f07-b4c7-f3fd251f731f",
    "type": "юридическое лицо",
    "name": "ООО Добро Вместе",
    "documentNumber": "12(2)",
    "curators": [{
      "id": "4d68edaa-9193-4c55-935c-5b911db1d4da",
      "name": "Иванова Анна",
      "type": "куратор"
    }]
  },
  "animalMovements": [{
    "id": "4d68edaa-9193-4c55-935c-5b911db1d4da",
    "date": "2020-10-19",
    "type": "Выбытие из приюта",
    "documentNumber": "179з-20(подк.)",
    "additional": "смерть"
  }, {
    "id": "4d68edaa-9193-4c55-935c-5b911db1d4dc",
    "date": "2020-05-11",
    "type": "Поступление животного в приют",
    "documentNumber": "17з-20(подк.)",
    "additional": ""
  }],
  "shelter": {
    "id": "fe3c61e2-60c3-4fd3-8dda-b63271e279f8",
    "address": {
      "unparsed": "Пятницкое ш., 37",
      "FIASCode": "",
      "latitude": "",
      "longitude": ""
    },
    "serviceOrganization": "ГБУ Доринвест",
    "bossEmployee": {
      "id": "9e635e5f-09b0-4f04-918e-e0f837cd3ec2",
      "name": "Игнатов А.В."
    },
    "careEmployee": {
      "id": "9e635e5f-09b0-4f04-918e-e0f837cd3ec2",
      "name": "Работник 1 "
    }
  },
  "endoparasites": [{
    "id": "f332f833-d7a3-4632-b4ff-57253ae1e96a",
    "position": "1",
    "date": "2020-02-04",
    "medicationName": "Азинокс",
    "dose": "2.5 мл"
  }],
  "vaccinations": [{
    "id": "a332f833-d7a3-4632-b4ff-57253ae1e96b",
    "position": "1",
    "date": "2020-02-04",
    "medicationName": "Бешенство Мультикан-6",
    "serialNumber": ""
  }],
  "healthInfo": [{
    "id": "44cc31ac-4957-489c-ad2e-b8e85e36d1a12",
    "date": "2020-09-28",
    "anamnesis": "удовлетворительно"
  }]
}];
var animalsApi = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                resolve(stub);
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAll() {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }()
};


/***/ }),

/***/ "./app/domain/Animal/store/AnimalStore/AnimalStore.js":
/*!************************************************************!*\
  !*** ./app/domain/Animal/store/AnimalStore/AnimalStore.js ***!
  \************************************************************/
/*! namespace exports */
/*! export AnimalStore [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalStore": function() { return /* binding */ AnimalStore; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");

var AnimalStore = new pullstate__WEBPACK_IMPORTED_MODULE_0__.Store({
  data: [],
  previewData: [],
  isFetching: false
});


/***/ }),

/***/ "./app/domain/Animal/store/AnimalStore/actions/getAll.js":
/*!***************************************************************!*\
  !*** ./app/domain/Animal/store/AnimalStore/actions/getAll.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export getAll [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAll": function() { return /* binding */ getAll; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");
/* harmony import */ var _domain_Animal_store_AnimalStore_AnimalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Animal/store/AnimalStore/AnimalStore */ "./app/domain/Animal/store/AnimalStore/AnimalStore.js");
/* harmony import */ var _domain_Animal_services_animalsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Animal/services/animalsApi */ "./app/domain/Animal/services/animalsApi.js");
/* harmony import */ var _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateFetchingStatus */ "./app/domain/Animal/store/AnimalStore/actions/updateFetchingStatus.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var getAll = (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var value, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            value = _ref.value;
            _context.next = 3;
            return _domain_Animal_services_animalsApi__WEBPACK_IMPORTED_MODULE_2__.animalsApi.getAll();

          case 3:
            result = _context.sent;

            if (!(result.status === 200)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.successResult)(result.data));

          case 6:
            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.errorResult)([], "Status code: ".concat(result.status)));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(), {
  shortCircuitHook: function shortCircuitHook(_ref3) {
    var args = _ref3.args;

    if (!args.doNotBlock) {
      (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(true);
    }

    return false;
  },
  postActionHook: function postActionHook(_ref4) {
    var result = _ref4.result,
        stores = _ref4.stores;
    (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(false);

    if (!result.error) {
      _domain_Animal_store_AnimalStore_AnimalStore__WEBPACK_IMPORTED_MODULE_1__.AnimalStore.update(function (s) {
        s.data = result.payload;
      });
    } //filterPreviewData(AnimalStore.currentState.searchFilter);        

  }
});


/***/ }),

/***/ "./app/domain/Animal/store/AnimalStore/actions/index.js":
/*!**************************************************************!*\
  !*** ./app/domain/Animal/store/AnimalStore/actions/index.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export getAll [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Animal/store/AnimalStore/actions/getAll.js .getAll */
/*! export updateFetchingStatus [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Animal/store/AnimalStore/actions/updateFetchingStatus.js .updateFetchingStatus */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateFetchingStatus": function() { return /* reexport safe */ _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_0__.updateFetchingStatus; },
/* harmony export */   "getAll": function() { return /* reexport safe */ _getAll__WEBPACK_IMPORTED_MODULE_1__.getAll; }
/* harmony export */ });
/* harmony import */ var _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateFetchingStatus */ "./app/domain/Animal/store/AnimalStore/actions/updateFetchingStatus.js");
/* harmony import */ var _getAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAll */ "./app/domain/Animal/store/AnimalStore/actions/getAll.js");



/***/ }),

/***/ "./app/domain/Animal/store/AnimalStore/actions/updateFetchingStatus.js":
/*!*****************************************************************************!*\
  !*** ./app/domain/Animal/store/AnimalStore/actions/updateFetchingStatus.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export updateFetchingStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateFetchingStatus": function() { return /* binding */ updateFetchingStatus; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");
/* harmony import */ var _domain_Animal_store_AnimalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Animal/store/AnimalStore */ "./app/domain/Animal/store/AnimalStore/index.js");
/* harmony import */ var _domain_Animal_services_animalsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Animal/services/animalsApi */ "./app/domain/Animal/services/animalsApi.js");




var updateFetchingStatus = function updateFetchingStatus(value) {
  _domain_Animal_store_AnimalStore__WEBPACK_IMPORTED_MODULE_1__.AnimalStore.update(function (s) {
    s.isFetching = value;
  });
};



/***/ }),

/***/ "./app/domain/Animal/store/AnimalStore/index.js":
/*!******************************************************!*\
  !*** ./app/domain/Animal/store/AnimalStore/index.js ***!
  \******************************************************/
/*! namespace exports */
/*! export AnimalStore [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Animal/store/AnimalStore/AnimalStore.js .AnimalStore */
/*! export getAll [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Animal/store/AnimalStore/actions/getAll.js .getAll */
/*! export updateFetchingStatus [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Animal/store/AnimalStore/actions/updateFetchingStatus.js .updateFetchingStatus */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalStore": function() { return /* reexport safe */ _AnimalStore__WEBPACK_IMPORTED_MODULE_0__.AnimalStore; },
/* harmony export */   "getAll": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.getAll; },
/* harmony export */   "updateFetchingStatus": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.updateFetchingStatus; }
/* harmony export */ });
/* harmony import */ var _AnimalStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimalStore */ "./app/domain/Animal/store/AnimalStore/AnimalStore.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./app/domain/Animal/store/AnimalStore/actions/index.js");



/***/ }),

/***/ "./app/domain/Demo/pages/DemoPage.js":
/*!*******************************************!*\
  !*** ./app/domain/Demo/pages/DemoPage.js ***!
  \*******************************************/
/*! namespace exports */
/*! export DemoPage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoPage": function() { return /* binding */ DemoPageWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _DemoPage_scoped_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoPage.scoped.scss */ "./app/domain/Demo/pages/DemoPage.scoped.scss");
/* harmony import */ var _domain_Demo_store_DemoStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Demo/store/DemoStore */ "./app/domain/Demo/store/DemoStore/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var DemoPage = function DemoPage(_ref) {
  var data = _ref.data,
      isFetching = _ref.isFetching,
      refreshHandler = _ref.refreshHandler,
      addHandler = _ref.addHandler,
      removeLastHandler = _ref.removeLastHandler,
      changeFilterHandler = _ref.changeFilterHandler;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "level"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onInput: changeFilterHandler,
    className: "input",
    type: "text",
    placeholder: "Search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    disabled: isFetching,
    onClick: refreshHandler,
    className: "button is-light"
  }, "Refresh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    disabled: isFetching,
    onClick: addHandler,
    className: "button is-success"
  }, "Add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    disabled: isFetching,
    onClick: removeLastHandler,
    className: "button is-danger"
  }, "Remove"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "name"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, data.map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, i.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, i.name));
  })))));
};

var DemoPageWrapper = function DemoPageWrapper(props) {
  var _DemoStore$useState = _domain_Demo_store_DemoStore__WEBPACK_IMPORTED_MODULE_2__.DemoStore.useState(function (s) {
    return {
      data: s.data,
      previewData: s.previewData,
      isFetching: s.isFetching,
      searchFilter: s.searchFilter
    };
  }),
      data = _DemoStore$useState.data,
      previewData = _DemoStore$useState.previewData,
      isFetching = _DemoStore$useState.isFetching,
      searchFilter = _DemoStore$useState.searchFilter; //   const wtf = useDownloadByInterval(isFetching, getAll, {value: 'from timer'}, 1000);
  // const [downloadFinished, downloadResult] = getAll.useBeckon({value: 'test value'});
  // if (!downloadFinished) {    
  //   return <div>Loading, please wait...</div>;
  // }
  // if (downloadResult.error) {
  //   return <div>ERROR: {downloadResult.message}</div>;
  // }


  var handlers = {
    refreshHandler: function () {
      var _refreshHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _domain_Demo_store_DemoStore__WEBPACK_IMPORTED_MODULE_2__.getAll.run({
                  value: "wtf param"
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function refreshHandler() {
        return _refreshHandler.apply(this, arguments);
      }

      return refreshHandler;
    }(),
    addHandler: function () {
      var _addHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _domain_Demo_store_DemoStore__WEBPACK_IMPORTED_MODULE_2__.addNew.run();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addHandler() {
        return _addHandler.apply(this, arguments);
      }

      return addHandler;
    }(),
    removeLastHandler: function () {
      var _removeLastHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _domain_Demo_store_DemoStore__WEBPACK_IMPORTED_MODULE_2__.removeLast.run();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function removeLastHandler() {
        return _removeLastHandler.apply(this, arguments);
      }

      return removeLastHandler;
    }(),
    changeFilterHandler: function () {
      var _changeFilterHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0,_domain_Demo_store_DemoStore__WEBPACK_IMPORTED_MODULE_2__.filterPreviewData)(e.target.value);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function changeFilterHandler(_x) {
        return _changeFilterHandler.apply(this, arguments);
      }

      return changeFilterHandler;
    }()
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DemoPage, _extends({}, handlers, {
    data: previewData,
    isFetching: isFetching
  }));
};



/***/ }),

/***/ "./app/domain/Demo/services/demoApi.js":
/*!*********************************************!*\
  !*** ./app/domain/Demo/services/demoApi.js ***!
  \*********************************************/
/*! namespace exports */
/*! export demoApi [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "demoApi": function() { return /* binding */ demoApi; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @appConfig */ "../config/default.js");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_appConfig__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var endpoint = _appConfig__WEBPACK_IMPORTED_MODULE_1___default().ENV().demoApiEndpoint;

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

var demoApi = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return sleep(1000);

            case 2:
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(endpoint, "/get-all"));

            case 4:
              res = _context.sent;
              return _context.abrupt("return", res);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAll() {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }(),
  addNew: function () {
    var _addNew = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(endpoint, "/add-new"));

            case 2:
              res = _context2.sent;
              return _context2.abrupt("return", res);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function addNew() {
      return _addNew.apply(this, arguments);
    }

    return addNew;
  }(),
  removeLast: function () {
    var _removeLast = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(endpoint, "/remove-last"));

            case 2:
              res = _context3.sent;
              return _context3.abrupt("return", res);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function removeLast() {
      return _removeLast.apply(this, arguments);
    }

    return removeLast;
  }()
};


/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/DemoStore.js":
/*!******************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/DemoStore.js ***!
  \******************************************************/
/*! namespace exports */
/*! export DemoStore [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoStore": function() { return /* binding */ DemoStore; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");

var DemoStore = new pullstate__WEBPACK_IMPORTED_MODULE_0__.Store({
  data: [],
  previewData: [],
  searchFilter: '',
  isFetching: false
});


/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/actions/addNew.js":
/*!***********************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/actions/addNew.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export addNew [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNew": function() { return /* binding */ addNew; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");
/* harmony import */ var _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Demo/store/DemoStore/DemoStore */ "./app/domain/Demo/store/DemoStore/DemoStore.js");
/* harmony import */ var _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Demo/services/demoApi */ "./app/domain/Demo/services/demoApi.js");
/* harmony import */ var _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateFetchingStatus */ "./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js");
/* harmony import */ var _filterPreviewData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterPreviewData */ "./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var addNew = (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var value, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            value = _ref.value;
            _context.next = 3;
            return _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__.demoApi.addNew();

          case 3:
            result = _context.sent;

            if (!(result.status === 200)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.successResult)(result.data));

          case 6:
            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.errorResult)([], "Status code: ".concat(result.status)));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(), {
  shortCircuitHook: function shortCircuitHook(q) {
    (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(true);
    return false;
  },
  postActionHook: function postActionHook(_ref3) {
    var result = _ref3.result,
        stores = _ref3.stores;
    (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(false);

    if (!result.error) {
      _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.update(function (s, prev) {
        s.data = [].concat(_toConsumableArray(prev.data), [result.payload]);
      });
    }

    (0,_filterPreviewData__WEBPACK_IMPORTED_MODULE_4__.filterPreviewData)(_domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.currentState.searchFilter);
  }
});


/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js":
/*!**********************************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export filterPreviewData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterPreviewData": function() { return /* binding */ filterPreviewData; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");
/* harmony import */ var _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Demo/store/DemoStore/DemoStore */ "./app/domain/Demo/store/DemoStore/DemoStore.js");
/* harmony import */ var _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Demo/services/demoApi */ "./app/domain/Demo/services/demoApi.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers */ "./app/common/helpers/index.js");





var filterPreviewData = function filterPreviewData(searchFilter) {
  var result = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.filterArrayByString)(_domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.currentState.data, searchFilter, ['id', 'name']);
  _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.update(function (s, state) {
    s.searchFilter = searchFilter;
    s.previewData = result;
  }); //console.log(DemoStore.currentState)
};



/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/actions/getAll.js":
/*!***********************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/actions/getAll.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export getAll [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAll": function() { return /* binding */ getAll; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");
/* harmony import */ var _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Demo/store/DemoStore/DemoStore */ "./app/domain/Demo/store/DemoStore/DemoStore.js");
/* harmony import */ var _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Demo/services/demoApi */ "./app/domain/Demo/services/demoApi.js");
/* harmony import */ var _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateFetchingStatus */ "./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js");
/* harmony import */ var _filterPreviewData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterPreviewData */ "./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var getAll = (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var value, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            value = _ref.value;
            _context.next = 3;
            return _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__.demoApi.getAll();

          case 3:
            result = _context.sent;

            if (!(result.status === 200)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.successResult)(result.data));

          case 6:
            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.errorResult)([], "Status code: ".concat(result.status)));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(), {
  shortCircuitHook: function shortCircuitHook(_ref3) {
    var args = _ref3.args;

    if (!args.doNotBlock) {
      (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(true);
    }

    return false;
  },
  postActionHook: function postActionHook(_ref4) {
    var result = _ref4.result,
        stores = _ref4.stores;
    (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(false);

    if (!result.error) {
      _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.update(function (s) {
        s.data = result.payload;
      });
    }

    (0,_filterPreviewData__WEBPACK_IMPORTED_MODULE_4__.filterPreviewData)(_domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.currentState.searchFilter);
  }
});


/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/actions/index.js":
/*!**********************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/actions/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export addNew [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/addNew.js .addNew */
/*! export filterPreviewData [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js .filterPreviewData */
/*! export getAll [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/getAll.js .getAll */
/*! export removeLast [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/removeLast.js .removeLast */
/*! export updateFetchingStatus [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js .updateFetchingStatus */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNew": function() { return /* reexport safe */ _addNew__WEBPACK_IMPORTED_MODULE_0__.addNew; },
/* harmony export */   "getAll": function() { return /* reexport safe */ _getAll__WEBPACK_IMPORTED_MODULE_1__.getAll; },
/* harmony export */   "removeLast": function() { return /* reexport safe */ _removeLast__WEBPACK_IMPORTED_MODULE_2__.removeLast; },
/* harmony export */   "updateFetchingStatus": function() { return /* reexport safe */ _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus; },
/* harmony export */   "filterPreviewData": function() { return /* reexport safe */ _filterPreviewData__WEBPACK_IMPORTED_MODULE_4__.filterPreviewData; }
/* harmony export */ });
/* harmony import */ var _addNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNew */ "./app/domain/Demo/store/DemoStore/actions/addNew.js");
/* harmony import */ var _getAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAll */ "./app/domain/Demo/store/DemoStore/actions/getAll.js");
/* harmony import */ var _removeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeLast */ "./app/domain/Demo/store/DemoStore/actions/removeLast.js");
/* harmony import */ var _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateFetchingStatus */ "./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js");
/* harmony import */ var _filterPreviewData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterPreviewData */ "./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js");






/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/actions/removeLast.js":
/*!***************************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/actions/removeLast.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export removeLast [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeLast": function() { return /* binding */ removeLast; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");
/* harmony import */ var _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Demo/store/DemoStore/DemoStore */ "./app/domain/Demo/store/DemoStore/DemoStore.js");
/* harmony import */ var _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Demo/services/demoApi */ "./app/domain/Demo/services/demoApi.js");
/* harmony import */ var _updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateFetchingStatus */ "./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js");
/* harmony import */ var _filterPreviewData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterPreviewData */ "./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var removeLast = (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var value, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            value = _ref.value;
            _context.next = 3;
            return _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__.demoApi.removeLast();

          case 3:
            result = _context.sent;

            if (!(result.status === 200)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.successResult)(result.data));

          case 6:
            return _context.abrupt("return", (0,pullstate__WEBPACK_IMPORTED_MODULE_0__.errorResult)([], "Status code: ".concat(result.status)));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(), {
  shortCircuitHook: function shortCircuitHook(q) {
    (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(true);
    return false;
  },
  postActionHook: function postActionHook(_ref3) {
    var result = _ref3.result,
        stores = _ref3.stores;
    (0,_updateFetchingStatus__WEBPACK_IMPORTED_MODULE_3__.updateFetchingStatus)(false);

    if (!result.error) {
      _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.update(function (s, prev) {
        s.data = _toConsumableArray(prev.data.filter(function (i) {
          return i.id !== result.payload.id;
        }));
      });
    }

    (0,_filterPreviewData__WEBPACK_IMPORTED_MODULE_4__.filterPreviewData)(_domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.currentState.searchFilter);
  }
});


/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js":
/*!*************************************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export updateFetchingStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateFetchingStatus": function() { return /* binding */ updateFetchingStatus; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pullstate */ "../node_modules/pullstate/dist/index.es.js");
/* harmony import */ var _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Demo/store/DemoStore/DemoStore */ "./app/domain/Demo/store/DemoStore/DemoStore.js");
/* harmony import */ var _domain_Demo_services_demoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Demo/services/demoApi */ "./app/domain/Demo/services/demoApi.js");




var updateFetchingStatus = function updateFetchingStatus(value) {
  _domain_Demo_store_DemoStore_DemoStore__WEBPACK_IMPORTED_MODULE_1__.DemoStore.update(function (s) {
    s.isFetching = value;
  });
};



/***/ }),

/***/ "./app/domain/Demo/store/DemoStore/index.js":
/*!**************************************************!*\
  !*** ./app/domain/Demo/store/DemoStore/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! export DemoStore [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/DemoStore.js .DemoStore */
/*! export addNew [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/addNew.js .addNew */
/*! export filterPreviewData [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/filterPreviewData.js .filterPreviewData */
/*! export getAll [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/getAll.js .getAll */
/*! export removeLast [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/removeLast.js .removeLast */
/*! export updateFetchingStatus [provided] [no usage info] [missing usage info prevents renaming] -> ./app/domain/Demo/store/DemoStore/actions/updateFetchingStatus.js .updateFetchingStatus */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoStore": function() { return /* reexport safe */ _DemoStore__WEBPACK_IMPORTED_MODULE_0__.DemoStore; },
/* harmony export */   "addNew": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.addNew; },
/* harmony export */   "filterPreviewData": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.filterPreviewData; },
/* harmony export */   "getAll": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.getAll; },
/* harmony export */   "removeLast": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.removeLast; },
/* harmony export */   "updateFetchingStatus": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.updateFetchingStatus; }
/* harmony export */ });
/* harmony import */ var _DemoStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DemoStore */ "./app/domain/Demo/store/DemoStore/DemoStore.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./app/domain/Demo/store/DemoStore/actions/index.js");



/***/ }),

/***/ "./app/routes/configureRouter.js":
/*!***************************************!*\
  !*** ./app/routes/configureRouter.js ***!
  \***************************************/
/*! namespace exports */
/*! export configureRouter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export routesContent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureRouter": function() { return /* binding */ configureRouter; },
/* harmony export */   "routesContent": function() { return /* binding */ routesContent; }
/* harmony export */ });
/* harmony import */ var router5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! router5 */ "../node_modules/router5/dist/index.es.js");
/* harmony import */ var router5_plugin_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! router5-plugin-logger */ "../node_modules/router5-plugin-logger/dist/index.es.js");
/* harmony import */ var router5_plugin_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! router5-plugin-browser */ "../node_modules/router5-plugin-browser/dist/index.es.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./app/routes/routes.js");
/* harmony import */ var _domain_Demo_pages_DemoPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/Demo/pages/DemoPage */ "./app/domain/Demo/pages/DemoPage.js");
/* harmony import */ var _domain_Animal_pages_AnimalCardsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/Animal/pages/AnimalCardsPage */ "./app/domain/Animal/pages/AnimalCardsPage.js");






var routesContent = {
  'DemoPage': _domain_Demo_pages_DemoPage__WEBPACK_IMPORTED_MODULE_1__.DemoPage,
  'AnimalCardsPage': _domain_Animal_pages_AnimalCardsPage__WEBPACK_IMPORTED_MODULE_2__.AnimalCardsPage
};

var configureRouter = function configureRouter() {
  var router = (0,router5__WEBPACK_IMPORTED_MODULE_3__.default)(_routes__WEBPACK_IMPORTED_MODULE_0__.default, {
    defaultRoute: 'AnimalCardsPage'
  });
  router.usePlugin(router5_plugin_logger__WEBPACK_IMPORTED_MODULE_4__.default);
  router.usePlugin((0,router5_plugin_browser__WEBPACK_IMPORTED_MODULE_5__.default)({
    useHash: true
  }));
  router.start();
  return router;
};



/***/ }),

/***/ "./app/routes/routes.js":
/*!******************************!*\
  !*** ./app/routes/routes.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configureRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configureRouter */ "./app/routes/configureRouter.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "DemoPage",
  path: '/demo'
}, {
  name: "AnimalCardsPage",
  path: '/'
}]);

/***/ }),

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ "../node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_router5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router5 */ "../node_modules/react-router5/dist/index.es.js");
/* harmony import */ var _routes_configureRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @routes/configureRouter */ "./app/routes/configureRouter.js");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @appConfig */ "../config/default.js");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_appConfig__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styles/common.scss */ "./assets/styles/common.scss");
/* harmony import */ var _styles_bulma_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styles/bulma.scss */ "./assets/styles/bulma.scss");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "../node_modules/antd/dist/antd.css");
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/App */ "./app/App.js");










var router = (0,_routes_configureRouter__WEBPACK_IMPORTED_MODULE_4__.configureRouter)();

if (_appConfig__WEBPACK_IMPORTED_MODULE_5___default().ENV().mode == 'development') {
  console.log('ENV', _appConfig__WEBPACK_IMPORTED_MODULE_5___default().ENV());
}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router5__WEBPACK_IMPORTED_MODULE_3__.RouterProvider, {
  router: router
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, (_appConfig__WEBPACK_IMPORTED_MODULE_5___default().app.head)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router5__WEBPACK_IMPORTED_MODULE_3__.RouteNode, {
  nodeName: ""
}, function (_ref) {
  var route = _ref.route,
      previousRoute = _ref.previousRoute,
      router = _ref.router;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_App__WEBPACK_IMPORTED_MODULE_9__.default, {
    route: route,
    previousRoute: previousRoute,
    router: router
  });
}))), document.getElementById('app'));

/***/ }),

/***/ "./app/common/containers/NavigationHeader.scoped.scss":
/*!************************************************************!*\
  !*** ./app/common/containers/NavigationHeader.scoped.scss ***!
  \************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1604134922408
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"hmr":false,"reloadAll":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./app/domain/Animal/containers/AnimalModal/AnimalModal.scoped.scss":
/*!**************************************************************************!*\
  !*** ./app/domain/Animal/containers/AnimalModal/AnimalModal.scoped.scss ***!
  \**************************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1604134926969
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"hmr":false,"reloadAll":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./app/domain/Animal/pages/AnimalCardsPage.scoped.scss":
/*!*************************************************************!*\
  !*** ./app/domain/Animal/pages/AnimalCardsPage.scoped.scss ***!
  \*************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1604134922807
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"hmr":false,"reloadAll":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./app/domain/Demo/pages/DemoPage.scoped.scss":
/*!****************************************************!*\
  !*** ./app/domain/Demo/pages/DemoPage.scoped.scss ***!
  \****************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1604134922812
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"hmr":false,"reloadAll":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./assets/styles/bulma.scss":
/*!**********************************!*\
  !*** ./assets/styles/bulma.scss ***!
  \**********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1604134925643
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"hmr":false,"reloadAll":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./assets/styles/common.scss":
/*!***********************************!*\
  !*** ./assets/styles/common.scss ***!
  \***********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1604134922415
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"hmr":false,"reloadAll":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./app/domain/Animal/data/animal_card.json":
/*!*************************************************!*\
  !*** ./app/domain/Animal/data/animal_card.json ***!
  \*************************************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export additionalInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export identificationMark [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export isSocialized [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export isSterilized [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export sterilizationComment [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export sterilizationDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export veterinarianEmployee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     other exports [not provided] [no usage info] */
/*!   export animalMovements [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export additional [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export date [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export documentNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     other exports [not provided] [no usage info] */
/*!   export catchInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export actNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export address [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FIASCode [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export latitude [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export longitude [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export unparsed [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export administrativeDistrict [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export catchOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export orderActDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export orderActNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export endoparasites [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export date [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export dose [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export medicationName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export position [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     other exports [not provided] [no usage info] */
/*!   export generalInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export aviary [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export breed [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export cardNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ears [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export gender [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export nickname [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export size [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export specialSigns [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export tail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export weight [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export wool [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export year [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export healthInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export anamnesis [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export date [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     other exports [not provided] [no usage info] */
/*!   export newOwner [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export curators [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       other exports [not provided] [no usage info] */
/*!     export documentNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export shelter [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export address [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FIASCode [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export latitude [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export longitude [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export unparsed [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export bossEmployee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export careEmployee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export serviceOrganization [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export vaccinations [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export date [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export medicationName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export position [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export serialNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     other exports [not provided] [no usage info] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ (function(module) {

"use strict";
module.exports = JSON.parse("[{\"generalInfo\":{\"id\":\"fdb73351-ed40-463e-9e55-f4c03d198501\",\"cardNumber\":\"1665з-20\",\"type\":\"собака\",\"year\":\"2016\",\"weight\":\"25\",\"nickname\":\"Варя 2\",\"gender\":\"женский\",\"breed\":\"метис\",\"color\":\"черный\",\"wool\":\"короткая\",\"ears\":\"полустоячие\",\"tail\":\"обычный\",\"size\":\"средний\",\"specialSigns\":\"нет\",\"aviary\":\"1\"},\"additionalInfo\":{\"id\":\"17a0df1b-a931-48a8-b428-907abe409a63\",\"identificationMark\":\"643094100731522\",\"isSterilized\":true,\"sterilizationDate\":null,\"sterilizationComment\":\"стерилизована ранее\",\"veterinarianEmployee\":{\"id\":\"160f7523-5cfd-41dc-9237-07084e3178fa\",\"name\":\"Врач 1\",\"type\":\"ветеринарный врач\"},\"isSocialized\":true},\"catchInfo\":{\"id\":\"472ea949-c3f9-46fe-a359-115e7dc0d45e\",\"actNumber\":\"128(1)\",\"catchOrder\":{\"id\":\"111bca96-a46d-4b56-b704-106a5fb11960\",\"orderActNumber\":\"128(1)\",\"orderActDate\":\"2020-10-04\"},\"administrativeDistrict\":{\"id\":\"0e20c5c7-4a8d-4ecf-907b-b08200c71a98\",\"name\":\"ЗелАО\"},\"address\":{\"unparsed\":\"Пятницкое ш., 37\",\"FIASCode\":\"\",\"latitude\":\"\",\"longitude\":\"\"}},\"newOwner\":{\"id\":\"c184211e-aa8f-4f07-b4c7-f3fd251f731f\",\"type\":\"юридическое лицо\",\"name\":\"ООО Добро Вместе\",\"documentNumber\":\"12(2)\",\"curators\":[{\"id\":\"4d68edaa-9193-4c55-935c-5b911db1d4da\",\"name\":\"Иванова Анна\",\"type\":\"куратор\"}]},\"animalMovements\":[{\"id\":\"4d68edaa-9193-4c55-935c-5b911db1d4da\",\"date\":\"2020-05-11\",\"type\":\"Поступление животного в приют\",\"documentNumber\":\"17з-20(подк.)\",\"additional\":\"\"}],\"shelter\":{\"id\":\"fe3c61e2-60c3-4fd3-8dda-b63271e279f8\",\"address\":{\"unparsed\":\"Пятницкое ш., 37\",\"FIASCode\":\"\",\"latitude\":\"\",\"longitude\":\"\"},\"serviceOrganization\":\"ГБУ Доринвест\",\"bossEmployee\":{\"id\":\"9e635e5f-09b0-4f04-918e-e0f837cd3ec2\",\"name\":\"Игнатов А.В.\"},\"careEmployee\":{\"id\":\"9e635e5f-09b0-4f04-918e-e0f837cd3ec2\",\"name\":\"Работник 1 \"}},\"endoparasites\":[{\"id\":\"f332f833-d7a3-4632-b4ff-57253ae1e96a\",\"position\":\"1\",\"date\":\"2020-02-04\",\"medicationName\":\"Азинокс\",\"dose\":\"2.5 мл\"}],\"vaccinations\":[{\"id\":\"f332f833-d7a3-4632-b4ff-57253ae1e96a\",\"position\":\"1\",\"date\":\"2020-02-04\",\"medicationName\":\"Бешенство Мультикан-6\",\"serialNumber\":\"\"}],\"healthInfo\":[{\"id\":\"44cc31ac-4957-489c-ad2e-b8e85e36d1a1\",\"date\":\"2020-09-28\",\"anamnesis\":\"удовлетворительно\"}]}]");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			if(mode & 2 && typeof value == 'object' && value) {
/******/ 				for(var key in value) def[key] = function(key) { return value[key]; }.bind(null, key);
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/app." + {"styles":"0ae6692b2210cf8e21b5","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_antd_es_card_index_js-node_modu-b2a071":"74a077fd831523f2b3cc"}[chunkId] + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "" + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "9767a74dce29f4ea9dde"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var request = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","styles","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_antd_es_card_index_js-node_modu-b2a071"],
/******/ 			["./client.js","styles","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_antd_es_card_index_js-node_modu-b2a071"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		var checkDeferredModules = function() {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = function() {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.7e31803189b338ef6992.bundle.js.map