/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 16px;\n  font-weight: 300;\n  font-family: Blanco, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,\n    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,\n    Segoe UI Symbol;\n  line-height: 1.5;\n  color: #eee;\n  background-color: #333;\n}\nbody {\n  background-color: #333;\n  min-height: 100vh;\n}\nheader {\n  padding: 1rem 2rem;\n}\nh1 {\n  color: orange;\n  text-align: center;\n}\nh2 {\n  color: orangered;\n  text-align: center;\n}\nform {\n  max-width: 600px;\n  border: 2px solid orangered;\n  margin: auto;\n}\nform > p {\n  padding: 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  /* for the underlay */\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  /* for the label to inherit */\n  color: #eee;\n}\nform p::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  background-color: hsla(200, 10%, 50%, 0.64);\n  transform: translateX(-110%);\n  transition: transform 0.2s ease-out;\n}\nform p:focus-within {\n  /* for the label to inherit */\n  color: #fff;\n  text-shadow: 1px 1px 1px #000;\n}\nform p:focus-within::before {\n  transform: translateX(0);\n}\nlabel {\n  font-size: 1.2rem;\n  flex-basis: 30%;\n  padding: 0.25rem 1px;\n  text-align: start;\n  /* in cooperation with form p:focus-within */\n  color: inherit;\n  text-shadow: inherit;\n}\ninput {\n  font-size: 1.2rem;\n  flex-basis: 100%;\n  width: calc(100% - 2px);\n  padding: 0.25rem 1rem;\n  border-radius: 0.25rem;\n}\nselect,\noption {\n  font-size: 1.2rem;\n  flex-basis: 100%;\n  width: calc(100% - 2px);\n  padding: 0.25rem 1rem;\n}\nbutton {\n  border: none;\n  background-color: cornflowerblue;\n  color: #fff;\n  flex-basis: 100%;\n  width: calc(100% - 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.5rem;\n}\n.instructions {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  color: #ccc;\n}\n.instructions span {\n  padding-left: 2rem;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  /* field currently has focus */\n  /* background-color: gold; */\n}\ninput:read-only {\n  /* field marked as read-only */\n}\ninput:read-write {\n  /* not disabled or read-only */\n}\ninput:disabled {\n  /* disabled attribute in html element */\n}\ninput:required,\nselect:required,\noption:required {\n  /* input field IS marked as required */\n  /* border-color: red; */\n}\ninput:optional {\n  /* input field not marked as required */\n}\n:placeholder-shown {\n  /* placeholder is showing... not user text */\n  /* background-color: lightpink; */\n}\n::placeholder {\n  /* style the placeholder text */\n  /* letter-spacing: 1rem; */\n}\ninput:valid {\n  /* passed all validation based on validityState properties */\n  /* background-color: cornflowerblue; */\n}\ninput:invalid {\n  /* failed some validation */\n  /* border-left: 4px solid hsl(0, 50%, 50%); */\n  /* background-color: hsl(0, 50%, 70%); */\n}\n:in-range {\n  /* value is the right length and not too long or short */\n}\n:out-of-range {\n  /* value too short, too long, too small or too big */\n  /* border-right: 2rem solid black; */\n  /* background-color: rebeccapurple; */\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB;;mBAEiB;EACjB,gBAAgB;EAChB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,2BAA2B;EAC3B,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,6BAA6B;EAC7B,WAAW;AACb;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX,2CAA2C;EAC3C,4BAA4B;EAC5B,mCAAmC;AACrC;AACA;EACE,6BAA6B;EAC7B,WAAW;EACX,6BAA6B;AAC/B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;EACjB,4CAA4C;EAC5C,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;AACxB;AACA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;;;EAGE,8BAA8B;EAC9B,4BAA4B;AAC9B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,uCAAuC;AACzC;AACA;;;EAGE,sCAAsC;EACtC,uBAAuB;AACzB;AACA;EACE,uCAAuC;AACzC;AACA;EACE,4CAA4C;EAC5C,iCAAiC;AACnC;AACA;EACE,+BAA+B;EAC/B,0BAA0B;AAC5B;AACA;EACE,4DAA4D;EAC5D,sCAAsC;AACxC;AACA;EACE,2BAA2B;EAC3B,6CAA6C;EAC7C,wCAAwC;AAC1C;AACA;EACE,wDAAwD;AAC1D;AACA;EACE,oDAAoD;EACpD,oCAAoC;EACpC,qCAAqC;AACvC","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 16px;\n  font-weight: 300;\n  font-family: Blanco, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,\n    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,\n    Segoe UI Symbol;\n  line-height: 1.5;\n  color: #eee;\n  background-color: #333;\n}\nbody {\n  background-color: #333;\n  min-height: 100vh;\n}\nheader {\n  padding: 1rem 2rem;\n}\nh1 {\n  color: orange;\n  text-align: center;\n}\nh2 {\n  color: orangered;\n  text-align: center;\n}\nform {\n  max-width: 600px;\n  border: 2px solid orangered;\n  margin: auto;\n}\nform > p {\n  padding: 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  /* for the underlay */\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  /* for the label to inherit */\n  color: #eee;\n}\nform p::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  background-color: hsla(200, 10%, 50%, 0.64);\n  transform: translateX(-110%);\n  transition: transform 0.2s ease-out;\n}\nform p:focus-within {\n  /* for the label to inherit */\n  color: #fff;\n  text-shadow: 1px 1px 1px #000;\n}\nform p:focus-within::before {\n  transform: translateX(0);\n}\nlabel {\n  font-size: 1.2rem;\n  flex-basis: 30%;\n  padding: 0.25rem 1px;\n  text-align: start;\n  /* in cooperation with form p:focus-within */\n  color: inherit;\n  text-shadow: inherit;\n}\ninput {\n  font-size: 1.2rem;\n  flex-basis: 100%;\n  width: calc(100% - 2px);\n  padding: 0.25rem 1rem;\n  border-radius: 0.25rem;\n}\nselect,\noption {\n  font-size: 1.2rem;\n  flex-basis: 100%;\n  width: calc(100% - 2px);\n  padding: 0.25rem 1rem;\n}\nbutton {\n  border: none;\n  background-color: cornflowerblue;\n  color: #fff;\n  flex-basis: 100%;\n  width: calc(100% - 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.5rem;\n}\n.instructions {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  color: #ccc;\n}\n.instructions span {\n  padding-left: 2rem;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  /* field currently has focus */\n  /* background-color: gold; */\n}\ninput:read-only {\n  /* field marked as read-only */\n}\ninput:read-write {\n  /* not disabled or read-only */\n}\ninput:disabled {\n  /* disabled attribute in html element */\n}\ninput:required,\nselect:required,\noption:required {\n  /* input field IS marked as required */\n  /* border-color: red; */\n}\ninput:optional {\n  /* input field not marked as required */\n}\n:placeholder-shown {\n  /* placeholder is showing... not user text */\n  /* background-color: lightpink; */\n}\n::placeholder {\n  /* style the placeholder text */\n  /* letter-spacing: 1rem; */\n}\ninput:valid {\n  /* passed all validation based on validityState properties */\n  /* background-color: cornflowerblue; */\n}\ninput:invalid {\n  /* failed some validation */\n  /* border-left: 4px solid hsl(0, 50%, 50%); */\n  /* background-color: hsl(0, 50%, 70%); */\n}\n:in-range {\n  /* value is the right length and not too long or short */\n}\n:out-of-range {\n  /* value too short, too long, too small or too big */\n  /* border-right: 2rem solid black; */\n  /* background-color: rebeccapurple; */\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

/** **
 * References
 * https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation
 * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 * https://regexr.com/ - Tool by Grant Skinner for testing Regular Expressions
 *
 */

const APP = {
  init() {
    APP.addListeners();
  },
  addListeners() {
    const form = document.sampleForm;
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const cell = document.getElementById("cell");
    const regcode = document.getElementById("regcode");
    const pets = document.getElementById("pets");
    // after changing the whole value
    fullname.addEventListener("change", APP.testName);
    email.addEventListener("change", APP.testEmail);

    // while typing
    regcode.addEventListener("input", APP.formatCode);
    cell.addEventListener("input", APP.formatPhone);

    // what to do if something went wrong during validation
    fullname.addEventListener("invalid", APP.fail);
    email.addEventListener("invalid", APP.fail);

    // when the form gets submitted
    form.addEventListener("submit", APP.validate);
  },
  validate(ev) {
    ev.preventDefault();
    const form = ev.target;

    const email = document.getElementById("email");
    console.log("willValidate", email.willValidate);
    // run validation on the whole form when submitting...

    // form controls have the following
    // invalid event
    console.log(email.validity);
    // validity readonly prop - a ValidityState object
    // ValidityState object props: (Boolean values)
    // badInput, customError, patternMismatch, rangeOverflow, rangeUnderflow
    // stepMismatch, tooLong, tooShort, typeMismatch, valid, valueMissing
    //
    // willValidate readonly prop - boolean

    // validationMessage - readonly prop from browser validation
    //                    or setCustomValidity( ) method

    // checkValidity() checks element, returns boolean,
    //                fires the invalid event

    // reportValidity() checks AND reports result
    //                  this shows the browser tooltip with warning
    //                  can be called at any point to show message

    // setCustomValidity(msg) if called with non-empty string it
    //                    will change the value of validity.valid
    //                    to false and validity.customError to true
  },
  testName(ev) {
    const fullname = ev.target;
    fullname.setCustomValidity(""); // clear old message
    // built-in test for error based on type, pattern, and other attrs
    const currently = fullname.checkValidity();
  },
  testEmail(ev) {
    const email = ev.target;
    // console.log(email.validity);
    email.setCustomValidity(""); // clear old message
    // built-in test for error based on type, pattern, and other attrs
    const currently = email.checkValidity();
    // console.log('currently', currently);
    if (currently) {
      const emReg = new RegExp("@gmail.com$", "i");
      if (emReg.test(email.value) === false) {
        // not a gmail address
        console.log("NOT a gmail address");
        email.setCustomValidity("NOT a gmail address.");
        console.log(email.validity);
        email.reportValidity(); // show the custom message, trigger invalid event
      }
    }
  },
  formatCode(ev) {
    const regcode = ev.target;
    let val = regcode.value;
    val = val.toUpperCase();
    regcode.value = val; // converts anything typed to uppercase
    // check for i and o used instead of 1 or 0...
    regcode.setCustomValidity("");
    if (/(I|O)/.test(val)) {
      regcode.setCustomValidity(
        "There are no letters i or o in the codes. Should this be a one or a zero?"
      );
      regcode.reportValidity(); // display the message and trigger invalid event
    }
  },
  formatPhone(ev) {
    // format and correct the phone number as user is typing?
    // eg: +1 (555) 555-1212
    // restrict to numbers, parentheses, hyphens, and + as typing?
  },
  checkPasswordRequirements(input) {
    // check password requirements as user types
    // uppercase, lowercase, numeric, length >= 10
    // Allowed: [! @ # $ % ^ & * ( ) . , ? ; : ~]
    const response = {
      upper: false,
      lower: false,
      num: false,
      len: false,
      matches: null,
      invalid: true,
    };
    const txt = input.value.trim();
    response.upper = /[A-Z]/.test(txt);
    response.lower = /[a-z]/.test(txt);
    response.num = /[0-9]/.test(txt);
    response.len = input.value.trim().length >= 10;
    response.matches = txt.match(/([^A-Za-z0-9_!@#$%^&*().,?;:~])/);
    if (response.matches && response.matches.length > 0) {
      response.invalid = false;
    }
    return response;
  },
  fail(ev) {
    const field = ev.target;
    // the invalid event fired
    console.log("INVALID");
    // standard display change for any element
    switch (field.id) {
      case "email":
        const span = field.parentElement.querySelector(".errMessage");
        span.textContent = "Must be a valid Gmail address.";
        break;
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Ryb3Bkb3duLW1lbnUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bi1tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bi1tZW51Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Ryb3Bkb3duLW1lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Ryb3Bkb3duLW1lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bi1tZW51L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Ryb3Bkb3duLW1lbnUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Ryb3Bkb3duLW1lbnUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcm9wZG93bi1tZW51Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1mYW1pbHk6IEJsYW5jbywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLFxcbiAgICBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSxcXG4gICAgU2Vnb2UgVUkgU3ltYm9sO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcbmgxIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmgyIHtcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvcm0ge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZXJlZDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuZm9ybSA+IHAge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBmb3IgdGhlIHVuZGVybGF5ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIGZvciB0aGUgbGFiZWwgdG8gaW5oZXJpdCAqL1xcbiAgY29sb3I6ICNlZWU7XFxufVxcbmZvcm0gcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgMTAlLCA1MCUsIDAuNjQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMTAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xcbn1cXG5mb3JtIHA6Zm9jdXMtd2l0aGluIHtcXG4gIC8qIGZvciB0aGUgbGFiZWwgdG8gaW5oZXJpdCAqL1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuZm9ybSBwOmZvY3VzLXdpdGhpbjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmbGV4LWJhc2lzOiAzMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgLyogaW4gY29vcGVyYXRpb24gd2l0aCBmb3JtIHA6Zm9jdXMtd2l0aGluICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtc2hhZG93OiBpbmhlcml0O1xcbn1cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgY29sb3I6ICNjY2M7XFxufVxcbi5pbnN0cnVjdGlvbnMgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAvKiBmaWVsZCBjdXJyZW50bHkgaGFzIGZvY3VzICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkOyAqL1xcbn1cXG5pbnB1dDpyZWFkLW9ubHkge1xcbiAgLyogZmllbGQgbWFya2VkIGFzIHJlYWQtb25seSAqL1xcbn1cXG5pbnB1dDpyZWFkLXdyaXRlIHtcXG4gIC8qIG5vdCBkaXNhYmxlZCBvciByZWFkLW9ubHkgKi9cXG59XFxuaW5wdXQ6ZGlzYWJsZWQge1xcbiAgLyogZGlzYWJsZWQgYXR0cmlidXRlIGluIGh0bWwgZWxlbWVudCAqL1xcbn1cXG5pbnB1dDpyZXF1aXJlZCxcXG5zZWxlY3Q6cmVxdWlyZWQsXFxub3B0aW9uOnJlcXVpcmVkIHtcXG4gIC8qIGlucHV0IGZpZWxkIElTIG1hcmtlZCBhcyByZXF1aXJlZCAqL1xcbiAgLyogYm9yZGVyLWNvbG9yOiByZWQ7ICovXFxufVxcbmlucHV0Om9wdGlvbmFsIHtcXG4gIC8qIGlucHV0IGZpZWxkIG5vdCBtYXJrZWQgYXMgcmVxdWlyZWQgKi9cXG59XFxuOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIC8qIHBsYWNlaG9sZGVyIGlzIHNob3dpbmcuLi4gbm90IHVzZXIgdGV4dCAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rOyAqL1xcbn1cXG46OnBsYWNlaG9sZGVyIHtcXG4gIC8qIHN0eWxlIHRoZSBwbGFjZWhvbGRlciB0ZXh0ICovXFxuICAvKiBsZXR0ZXItc3BhY2luZzogMXJlbTsgKi9cXG59XFxuaW5wdXQ6dmFsaWQge1xcbiAgLyogcGFzc2VkIGFsbCB2YWxpZGF0aW9uIGJhc2VkIG9uIHZhbGlkaXR5U3RhdGUgcHJvcGVydGllcyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7ICovXFxufVxcbmlucHV0OmludmFsaWQge1xcbiAgLyogZmFpbGVkIHNvbWUgdmFsaWRhdGlvbiAqL1xcbiAgLyogYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBoc2woMCwgNTAlLCA1MCUpOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDUwJSwgNzAlKTsgKi9cXG59XFxuOmluLXJhbmdlIHtcXG4gIC8qIHZhbHVlIGlzIHRoZSByaWdodCBsZW5ndGggYW5kIG5vdCB0b28gbG9uZyBvciBzaG9ydCAqL1xcbn1cXG46b3V0LW9mLXJhbmdlIHtcXG4gIC8qIHZhbHVlIHRvbyBzaG9ydCwgdG9vIGxvbmcsIHRvbyBzbWFsbCBvciB0b28gYmlnICovXFxuICAvKiBib3JkZXItcmlnaHQ6IDJyZW0gc29saWQgYmxhY2s7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlOyAqL1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7O21CQUVpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsNEJBQTRCO0VBQzVCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOzs7RUFHRSw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7OztFQUdFLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsNERBQTREO0VBQzVELHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDZDQUE2QztFQUM3Qyx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLHdEQUF3RDtBQUMxRDtBQUNBO0VBQ0Usb0RBQW9EO0VBQ3BELG9DQUFvQztFQUNwQyxxQ0FBcUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1mYW1pbHk6IEJsYW5jbywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLFxcbiAgICBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSxcXG4gICAgU2Vnb2UgVUkgU3ltYm9sO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcbmgxIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmgyIHtcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvcm0ge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZXJlZDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuZm9ybSA+IHAge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBmb3IgdGhlIHVuZGVybGF5ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIGZvciB0aGUgbGFiZWwgdG8gaW5oZXJpdCAqL1xcbiAgY29sb3I6ICNlZWU7XFxufVxcbmZvcm0gcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgMTAlLCA1MCUsIDAuNjQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMTAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xcbn1cXG5mb3JtIHA6Zm9jdXMtd2l0aGluIHtcXG4gIC8qIGZvciB0aGUgbGFiZWwgdG8gaW5oZXJpdCAqL1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuZm9ybSBwOmZvY3VzLXdpdGhpbjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmbGV4LWJhc2lzOiAzMCU7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgLyogaW4gY29vcGVyYXRpb24gd2l0aCBmb3JtIHA6Zm9jdXMtd2l0aGluICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtc2hhZG93OiBpbmhlcml0O1xcbn1cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgY29sb3I6ICNjY2M7XFxufVxcbi5pbnN0cnVjdGlvbnMgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAvKiBmaWVsZCBjdXJyZW50bHkgaGFzIGZvY3VzICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkOyAqL1xcbn1cXG5pbnB1dDpyZWFkLW9ubHkge1xcbiAgLyogZmllbGQgbWFya2VkIGFzIHJlYWQtb25seSAqL1xcbn1cXG5pbnB1dDpyZWFkLXdyaXRlIHtcXG4gIC8qIG5vdCBkaXNhYmxlZCBvciByZWFkLW9ubHkgKi9cXG59XFxuaW5wdXQ6ZGlzYWJsZWQge1xcbiAgLyogZGlzYWJsZWQgYXR0cmlidXRlIGluIGh0bWwgZWxlbWVudCAqL1xcbn1cXG5pbnB1dDpyZXF1aXJlZCxcXG5zZWxlY3Q6cmVxdWlyZWQsXFxub3B0aW9uOnJlcXVpcmVkIHtcXG4gIC8qIGlucHV0IGZpZWxkIElTIG1hcmtlZCBhcyByZXF1aXJlZCAqL1xcbiAgLyogYm9yZGVyLWNvbG9yOiByZWQ7ICovXFxufVxcbmlucHV0Om9wdGlvbmFsIHtcXG4gIC8qIGlucHV0IGZpZWxkIG5vdCBtYXJrZWQgYXMgcmVxdWlyZWQgKi9cXG59XFxuOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIC8qIHBsYWNlaG9sZGVyIGlzIHNob3dpbmcuLi4gbm90IHVzZXIgdGV4dCAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rOyAqL1xcbn1cXG46OnBsYWNlaG9sZGVyIHtcXG4gIC8qIHN0eWxlIHRoZSBwbGFjZWhvbGRlciB0ZXh0ICovXFxuICAvKiBsZXR0ZXItc3BhY2luZzogMXJlbTsgKi9cXG59XFxuaW5wdXQ6dmFsaWQge1xcbiAgLyogcGFzc2VkIGFsbCB2YWxpZGF0aW9uIGJhc2VkIG9uIHZhbGlkaXR5U3RhdGUgcHJvcGVydGllcyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7ICovXFxufVxcbmlucHV0OmludmFsaWQge1xcbiAgLyogZmFpbGVkIHNvbWUgdmFsaWRhdGlvbiAqL1xcbiAgLyogYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBoc2woMCwgNTAlLCA1MCUpOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDUwJSwgNzAlKTsgKi9cXG59XFxuOmluLXJhbmdlIHtcXG4gIC8qIHZhbHVlIGlzIHRoZSByaWdodCBsZW5ndGggYW5kIG5vdCB0b28gbG9uZyBvciBzaG9ydCAqL1xcbn1cXG46b3V0LW9mLXJhbmdlIHtcXG4gIC8qIHZhbHVlIHRvbyBzaG9ydCwgdG9vIGxvbmcsIHRvbyBzbWFsbCBvciB0b28gYmlnICovXFxuICAvKiBib3JkZXItcmlnaHQ6IDJyZW0gc29saWQgYmxhY2s7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlOyAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLyoqICoqXG4gKiBSZWZlcmVuY2VzXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc3RyYWludF92YWxpZGF0aW9uXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVmFsaWRpdHlTdGF0ZVxuICogaHR0cHM6Ly9yZWdleHIuY29tLyAtIFRvb2wgYnkgR3JhbnQgU2tpbm5lciBmb3IgdGVzdGluZyBSZWd1bGFyIEV4cHJlc3Npb25zXG4gKlxuICovXG5cbmNvbnN0IEFQUCA9IHtcbiAgaW5pdCgpIHtcbiAgICBBUFAuYWRkTGlzdGVuZXJzKCk7XG4gIH0sXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuc2FtcGxlRm9ybTtcbiAgICBjb25zdCBmdWxsbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbG5hbWVcIik7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpO1xuICAgIGNvbnN0IHBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3NcIik7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VsbFwiKTtcbiAgICBjb25zdCByZWdjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdjb2RlXCIpO1xuICAgIGNvbnN0IHBldHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldHNcIik7XG4gICAgLy8gYWZ0ZXIgY2hhbmdpbmcgdGhlIHdob2xlIHZhbHVlXG4gICAgZnVsbG5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBBUFAudGVzdE5hbWUpO1xuICAgIGVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgQVBQLnRlc3RFbWFpbCk7XG5cbiAgICAvLyB3aGlsZSB0eXBpbmdcbiAgICByZWdjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBBUFAuZm9ybWF0Q29kZSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgQVBQLmZvcm1hdFBob25lKTtcblxuICAgIC8vIHdoYXQgdG8gZG8gaWYgc29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIHZhbGlkYXRpb25cbiAgICBmdWxsbmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW52YWxpZFwiLCBBUFAuZmFpbCk7XG4gICAgZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImludmFsaWRcIiwgQVBQLmZhaWwpO1xuXG4gICAgLy8gd2hlbiB0aGUgZm9ybSBnZXRzIHN1Ym1pdHRlZFxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBBUFAudmFsaWRhdGUpO1xuICB9LFxuICB2YWxpZGF0ZShldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIndpbGxWYWxpZGF0ZVwiLCBlbWFpbC53aWxsVmFsaWRhdGUpO1xuICAgIC8vIHJ1biB2YWxpZGF0aW9uIG9uIHRoZSB3aG9sZSBmb3JtIHdoZW4gc3VibWl0dGluZy4uLlxuXG4gICAgLy8gZm9ybSBjb250cm9scyBoYXZlIHRoZSBmb2xsb3dpbmdcbiAgICAvLyBpbnZhbGlkIGV2ZW50XG4gICAgY29uc29sZS5sb2coZW1haWwudmFsaWRpdHkpO1xuICAgIC8vIHZhbGlkaXR5IHJlYWRvbmx5IHByb3AgLSBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gICAgLy8gVmFsaWRpdHlTdGF0ZSBvYmplY3QgcHJvcHM6IChCb29sZWFuIHZhbHVlcylcbiAgICAvLyBiYWRJbnB1dCwgY3VzdG9tRXJyb3IsIHBhdHRlcm5NaXNtYXRjaCwgcmFuZ2VPdmVyZmxvdywgcmFuZ2VVbmRlcmZsb3dcbiAgICAvLyBzdGVwTWlzbWF0Y2gsIHRvb0xvbmcsIHRvb1Nob3J0LCB0eXBlTWlzbWF0Y2gsIHZhbGlkLCB2YWx1ZU1pc3NpbmdcbiAgICAvL1xuICAgIC8vIHdpbGxWYWxpZGF0ZSByZWFkb25seSBwcm9wIC0gYm9vbGVhblxuXG4gICAgLy8gdmFsaWRhdGlvbk1lc3NhZ2UgLSByZWFkb25seSBwcm9wIGZyb20gYnJvd3NlciB2YWxpZGF0aW9uXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIG9yIHNldEN1c3RvbVZhbGlkaXR5KCApIG1ldGhvZFxuXG4gICAgLy8gY2hlY2tWYWxpZGl0eSgpIGNoZWNrcyBlbGVtZW50LCByZXR1cm5zIGJvb2xlYW4sXG4gICAgLy8gICAgICAgICAgICAgICAgZmlyZXMgdGhlIGludmFsaWQgZXZlbnRcblxuICAgIC8vIHJlcG9ydFZhbGlkaXR5KCkgY2hlY2tzIEFORCByZXBvcnRzIHJlc3VsdFxuICAgIC8vICAgICAgICAgICAgICAgICAgdGhpcyBzaG93cyB0aGUgYnJvd3NlciB0b29sdGlwIHdpdGggd2FybmluZ1xuICAgIC8vICAgICAgICAgICAgICAgICAgY2FuIGJlIGNhbGxlZCBhdCBhbnkgcG9pbnQgdG8gc2hvdyBtZXNzYWdlXG5cbiAgICAvLyBzZXRDdXN0b21WYWxpZGl0eShtc2cpIGlmIGNhbGxlZCB3aXRoIG5vbi1lbXB0eSBzdHJpbmcgaXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgd2lsbCBjaGFuZ2UgdGhlIHZhbHVlIG9mIHZhbGlkaXR5LnZhbGlkXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIHRvIGZhbHNlIGFuZCB2YWxpZGl0eS5jdXN0b21FcnJvciB0byB0cnVlXG4gIH0sXG4gIHRlc3ROYW1lKGV2KSB7XG4gICAgY29uc3QgZnVsbG5hbWUgPSBldi50YXJnZXQ7XG4gICAgZnVsbG5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7IC8vIGNsZWFyIG9sZCBtZXNzYWdlXG4gICAgLy8gYnVpbHQtaW4gdGVzdCBmb3IgZXJyb3IgYmFzZWQgb24gdHlwZSwgcGF0dGVybiwgYW5kIG90aGVyIGF0dHJzXG4gICAgY29uc3QgY3VycmVudGx5ID0gZnVsbG5hbWUuY2hlY2tWYWxpZGl0eSgpO1xuICB9LFxuICB0ZXN0RW1haWwoZXYpIHtcbiAgICBjb25zdCBlbWFpbCA9IGV2LnRhcmdldDtcbiAgICAvLyBjb25zb2xlLmxvZyhlbWFpbC52YWxpZGl0eSk7XG4gICAgZW1haWwuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7IC8vIGNsZWFyIG9sZCBtZXNzYWdlXG4gICAgLy8gYnVpbHQtaW4gdGVzdCBmb3IgZXJyb3IgYmFzZWQgb24gdHlwZSwgcGF0dGVybiwgYW5kIG90aGVyIGF0dHJzXG4gICAgY29uc3QgY3VycmVudGx5ID0gZW1haWwuY2hlY2tWYWxpZGl0eSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50bHknLCBjdXJyZW50bHkpO1xuICAgIGlmIChjdXJyZW50bHkpIHtcbiAgICAgIGNvbnN0IGVtUmVnID0gbmV3IFJlZ0V4cChcIkBnbWFpbC5jb20kXCIsIFwiaVwiKTtcbiAgICAgIGlmIChlbVJlZy50ZXN0KGVtYWlsLnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gbm90IGEgZ21haWwgYWRkcmVzc1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBhIGdtYWlsIGFkZHJlc3NcIik7XG4gICAgICAgIGVtYWlsLnNldEN1c3RvbVZhbGlkaXR5KFwiTk9UIGEgZ21haWwgYWRkcmVzcy5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLnZhbGlkaXR5KTtcbiAgICAgICAgZW1haWwucmVwb3J0VmFsaWRpdHkoKTsgLy8gc2hvdyB0aGUgY3VzdG9tIG1lc3NhZ2UsIHRyaWdnZXIgaW52YWxpZCBldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZm9ybWF0Q29kZShldikge1xuICAgIGNvbnN0IHJlZ2NvZGUgPSBldi50YXJnZXQ7XG4gICAgbGV0IHZhbCA9IHJlZ2NvZGUudmFsdWU7XG4gICAgdmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XG4gICAgcmVnY29kZS52YWx1ZSA9IHZhbDsgLy8gY29udmVydHMgYW55dGhpbmcgdHlwZWQgdG8gdXBwZXJjYXNlXG4gICAgLy8gY2hlY2sgZm9yIGkgYW5kIG8gdXNlZCBpbnN0ZWFkIG9mIDEgb3IgMC4uLlxuICAgIHJlZ2NvZGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgaWYgKC8oSXxPKS8udGVzdCh2YWwpKSB7XG4gICAgICByZWdjb2RlLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgICBcIlRoZXJlIGFyZSBubyBsZXR0ZXJzIGkgb3IgbyBpbiB0aGUgY29kZXMuIFNob3VsZCB0aGlzIGJlIGEgb25lIG9yIGEgemVybz9cIlxuICAgICAgKTtcbiAgICAgIHJlZ2NvZGUucmVwb3J0VmFsaWRpdHkoKTsgLy8gZGlzcGxheSB0aGUgbWVzc2FnZSBhbmQgdHJpZ2dlciBpbnZhbGlkIGV2ZW50XG4gICAgfVxuICB9LFxuICBmb3JtYXRQaG9uZShldikge1xuICAgIC8vIGZvcm1hdCBhbmQgY29ycmVjdCB0aGUgcGhvbmUgbnVtYmVyIGFzIHVzZXIgaXMgdHlwaW5nP1xuICAgIC8vIGVnOiArMSAoNTU1KSA1NTUtMTIxMlxuICAgIC8vIHJlc3RyaWN0IHRvIG51bWJlcnMsIHBhcmVudGhlc2VzLCBoeXBoZW5zLCBhbmQgKyBhcyB0eXBpbmc/XG4gIH0sXG4gIGNoZWNrUGFzc3dvcmRSZXF1aXJlbWVudHMoaW5wdXQpIHtcbiAgICAvLyBjaGVjayBwYXNzd29yZCByZXF1aXJlbWVudHMgYXMgdXNlciB0eXBlc1xuICAgIC8vIHVwcGVyY2FzZSwgbG93ZXJjYXNlLCBudW1lcmljLCBsZW5ndGggPj0gMTBcbiAgICAvLyBBbGxvd2VkOiBbISBAICMgJCAlIF4gJiAqICggKSAuICwgPyA7IDogfl1cbiAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgIHVwcGVyOiBmYWxzZSxcbiAgICAgIGxvd2VyOiBmYWxzZSxcbiAgICAgIG51bTogZmFsc2UsXG4gICAgICBsZW46IGZhbHNlLFxuICAgICAgbWF0Y2hlczogbnVsbCxcbiAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgfTtcbiAgICBjb25zdCB0eHQgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgcmVzcG9uc2UudXBwZXIgPSAvW0EtWl0vLnRlc3QodHh0KTtcbiAgICByZXNwb25zZS5sb3dlciA9IC9bYS16XS8udGVzdCh0eHQpO1xuICAgIHJlc3BvbnNlLm51bSA9IC9bMC05XS8udGVzdCh0eHQpO1xuICAgIHJlc3BvbnNlLmxlbiA9IGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPj0gMTA7XG4gICAgcmVzcG9uc2UubWF0Y2hlcyA9IHR4dC5tYXRjaCgvKFteQS1aYS16MC05XyFAIyQlXiYqKCkuLD87On5dKS8pO1xuICAgIGlmIChyZXNwb25zZS5tYXRjaGVzICYmIHJlc3BvbnNlLm1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzcG9uc2UuaW52YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sXG4gIGZhaWwoZXYpIHtcbiAgICBjb25zdCBmaWVsZCA9IGV2LnRhcmdldDtcbiAgICAvLyB0aGUgaW52YWxpZCBldmVudCBmaXJlZFxuICAgIGNvbnNvbGUubG9nKFwiSU5WQUxJRFwiKTtcbiAgICAvLyBzdGFuZGFyZCBkaXNwbGF5IGNoYW5nZSBmb3IgYW55IGVsZW1lbnRcbiAgICBzd2l0Y2ggKGZpZWxkLmlkKSB7XG4gICAgICBjYXNlIFwiZW1haWxcIjpcbiAgICAgICAgY29uc3Qgc3BhbiA9IGZpZWxkLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJNZXNzYWdlXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJNdXN0IGJlIGEgdmFsaWQgR21haWwgYWRkcmVzcy5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIEFQUC5pbml0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==