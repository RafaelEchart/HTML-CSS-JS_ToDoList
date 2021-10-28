/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ToDoList = {
  task: [],

  get currentTasks() {
    return this.task;
  },

  set updateTasks(newTask) {
    this.task.push(newTask);
  },

  set newArray(array) {
    this.task = array;
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ }),

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ "./src/ToDoList.js");
/* eslint-disable import/no-cycle */

var clearButton = document.getElementById('clear');

var taskCompleted = function taskCompleted(id, checked) {
  var taskSelected = document.getElementById("task-".concat(id));
  var tasks = _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].currentTasks;
  var newArrayOfTasks = [];

  if (checked) {
    taskSelected.style.textDecoration = 'line-through';
    taskSelected.style.color = 'gray'; // ToDoList.currentTasks.forEach((task) => {
    //   if (task.index === id) {
    //     task.completed = true;
    //   }
    // });

    for (var i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index === id) {
        tasks[i].completed = true;
        newArrayOfTasks.push(tasks[i]);
      } else {
        newArrayOfTasks.push(tasks[i]);
      }
    }

    _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].newArray(newArrayOfTasks);
  } else {
    taskSelected.style.textDecoration = 'none';
    taskSelected.style.color = 'black'; // ToDoList.forEach((task) => {
    //   if (task.index === id) {
    //     task.completed = false;
    //   }
    // });

    for (var _i = 0; _i < tasks.length; _i += 1) {
      if (tasks[_i].index === id) {
        tasks[_i].completed = true;
        newArrayOfTasks.push(tasks[_i]);
      } else {
        newArrayOfTasks.push(tasks[_i]);
      }
    }

    _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].newArray(newArrayOfTasks);
  }

  localStorage.setItem('tasks', JSON.stringify(_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].currentTasks));
  var checkCompleted = _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"].currentTasks.filter(function (task) {
    return task.completed === true;
  });

  if (checkCompleted.length) {
    clearButton.classList.remove('clear-notActive');
    clearButton.classList.add('clear-active');
  } else {
    clearButton.classList.remove('clear-active');
    clearButton.classList.add('clear-notActive');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCompleted);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  max-width: 450px;\r\n  width: 100%;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.section {\r\n  border-bottom: 1px solid lightgray;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title {\r\n  margin: 0 15px;\r\n  font-size: 18px;\r\n}\r\n\r\n.icon {\r\n  margin: 0 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox {\r\n  margin: 0 15px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.checkbox span {\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 5px;\r\n}\r\n\r\n.new-input {\r\n  border: none;\r\n  width: 95%;\r\n  font-size: 14px;\r\n  margin: 0 15px;\r\n  height: 35px;\r\n}\r\n\r\n.new-input::placeholder {\r\n  color: gray;\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n.new-input:focus {\r\n  outline: none;\r\n}\r\n\r\n.errorInput {\r\n  border: none;\r\n  width: 95%;\r\n  font-size: 14px;\r\n  margin: 0 15px;\r\n  height: 35px;\r\n}\r\n\r\n.errorInput::placeholder {\r\n  color: red;\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n.errorInput:focus {\r\n  outline: none;\r\n}\r\n\r\n.clear-notActive {\r\n  background-color: #ededed;\r\n  height: 40px;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.clear-notActive span {\r\n  font-size: 14px;\r\n  color: #adadad;\r\n}\r\n\r\n.clear-active {\r\n  background-color: #006dcb;\r\n  height: 40px;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-active span {\r\n  font-size: 14px;\r\n  color: white;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,eAAe;EACf,cAAc;EACd,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,eAAe;EACf,cAAc;EACd,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd","sourcesContent":["body {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  max-width: 450px;\r\n  width: 100%;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.section {\r\n  border-bottom: 1px solid lightgray;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title {\r\n  margin: 0 15px;\r\n  font-size: 18px;\r\n}\r\n\r\n.icon {\r\n  margin: 0 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox {\r\n  margin: 0 15px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.checkbox span {\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  margin: 0 5px;\r\n}\r\n\r\n.new-input {\r\n  border: none;\r\n  width: 95%;\r\n  font-size: 14px;\r\n  margin: 0 15px;\r\n  height: 35px;\r\n}\r\n\r\n.new-input::placeholder {\r\n  color: gray;\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n.new-input:focus {\r\n  outline: none;\r\n}\r\n\r\n.errorInput {\r\n  border: none;\r\n  width: 95%;\r\n  font-size: 14px;\r\n  margin: 0 15px;\r\n  height: 35px;\r\n}\r\n\r\n.errorInput::placeholder {\r\n  color: red;\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n.errorInput:focus {\r\n  outline: none;\r\n}\r\n\r\n.clear-notActive {\r\n  background-color: #ededed;\r\n  height: 40px;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.clear-notActive span {\r\n  font-size: 14px;\r\n  color: #adadad;\r\n}\r\n\r\n.clear-active {\r\n  background-color: #006dcb;\r\n  height: 40px;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-active span {\r\n  font-size: 14px;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoList": () => (/* reexport safe */ _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "completedTasksCount": () => (/* binding */ completedTasksCount)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed */ "./src/completed.js");
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ "./src/ToDoList.js");
/* eslint-disable import/no-cycle */



var input = document.getElementById('addNewInput');
var icon = document.getElementById('addNewIcon');
var taskContainer = document.getElementById('tasks');
var clearButton = document.getElementById('clear');
/* eslint-disable import/no-mutable-exports */

var completedTasksCount = 0;

var maxIdValue = function maxIdValue(ToDoList) {
  var ids = ToDoList.map(function (task) {
    return task.index;
  });
  var sorted = ids.sort(function (a, b) {
    return a - b;
  });
  return sorted[sorted.length - 1] + 1;
};

var addTaskToList = function addTaskToList() {
  var validation = input.classList;
  var id;

  if (_ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].length) {
    id = maxIdValue(_ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].currentTasks);
  } else {
    id = 0;
  }

  if (input.value.length) {
    validation.remove('errorInput');
    validation.add('new-input');
    var newTask = "<div class=\"section\" id=\"".concat(id, "\">\n    <div class=\"checkbox\">\n      <input type=\"checkbox\" id=\"checkbox-").concat(id, "\"/>\n      <span id=\"task-").concat(id, "\">").concat(input.value, "</span>\n    </div>\n    <ion-icon name=\"ellipsis-vertical-outline\" class=\"icon\"></ion-icon>\n  </div>");
    taskContainer.insertAdjacentHTML('beforeend', newTask);
    var checkbox = document.getElementById("checkbox-".concat(id));
    checkbox.addEventListener('change', function listener() {
      (0,_completed__WEBPACK_IMPORTED_MODULE_1__["default"])(id, this.checked);
    });
    _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].updateTasks = {
      index: id,
      description: input.value,
      completed: false
    };
    localStorage.setItem('tasks', JSON.stringify(_ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].currentTasks));
    input.value = '';
    clearButton.style.display = 'flex';
  } else {
    validation.remove('new-input');
    validation.add('errorInput');
  }
};

var removeTaskFromList = function removeTaskFromList() {
  var checkCompleted = _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].currentTasks.filter(function (task) {
    return task.completed === true;
  });

  if (checkCompleted.length) {
    for (var i = 0; i < checkCompleted.length; i += 1) {
      if (checkCompleted[i].completed) {
        document.getElementById(checkCompleted[i].index).remove();
      }
    }

    _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].newArray = _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].filter(function (task) {
      return task.completed === false;
    });
    localStorage.setItem('tasks', JSON.stringify(_ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"]));
    clearButton.classList.remove('clear-active');
    clearButton.classList.add('clear-notActive');
  }
};

window.onload = function () {
  var readyToClear = false;
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      addTaskToList();
    }
  });
  icon.addEventListener('click', addTaskToList);
  clearButton.addEventListener('click', removeTaskFromList);
  var savedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (savedTasks && savedTasks.length) {
    clearButton.style.display = 'flex';
    _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].newArray = savedTasks;

    var _loop = function _loop(i) {
      var newTask = "<div class=\"section\" id=\"".concat(savedTasks[i].index, "\">\n        <div class=\"checkbox\">\n          <input  ").concat(savedTasks[i].completed ? 'checked' : '', " type=\"checkbox\" id=\"checkbox-").concat(savedTasks[i].index, "\" />\n          <span  ").concat(savedTasks[i].completed ? "style='text-decoration: line-through; color: gray'" : '', " id=\"task-").concat(savedTasks[i].index, "\">").concat(savedTasks[i].description, "</span>\n        </div>\n        <ion-icon name=\"ellipsis-vertical-outline\" class=\"icon\"></ion-icon>\n      </div>");
      taskContainer.insertAdjacentHTML('beforeend', newTask);
      var checkbox = document.getElementById("checkbox-".concat(savedTasks[i].index));
      checkbox.addEventListener('change', function listener() {
        (0,_completed__WEBPACK_IMPORTED_MODULE_1__["default"])(savedTasks[i].index, this.checked);
      });

      if (savedTasks[i].completed) {
        readyToClear = true;
      }
    };

    for (var i = 0; i < savedTasks.length; i += 1) {
      _loop(i);
    }

    if (readyToClear) {
      clearButton.classList.remove('clear-notActive');
      clearButton.classList.add('clear-active');
    }
  }
};


})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map