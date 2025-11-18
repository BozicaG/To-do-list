/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    \r\n    border: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --dark-peach:rgb(172, 78, 21);\r\n    --light-peach:rgb(232, 154, 20);\r\n    --background:rgb(255, 255, 255);\r\n    --button-hover:rgba(192, 89, 25, 0.692);\r\n    --tasks-font-color:#552508;\r\n}\r\nbody{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 97vh;\r\n    width: 97vw;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.header-section{\r\n    width: 100;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: var(--dark-peach);\r\n    height: 12vh;\r\n    gap: 1%;\r\n    padding-left: 2%;\r\n}\r\nheader{\r\n   width: 100vw; \r\n    \r\n}\r\n\r\n.header-text {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    font-size: 380%;\r\n    color: white;\r\n}\r\n.logo{\r\n    height: 3.8rem;\r\n    width: 3.8rem;\r\n    color: var(--background);\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    flex: 1;\r\n    flex-wrap: wrap;\r\n\r\n\r\n}\r\n.side-bar{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 0 0 18rem; /* desktop */\r\n    min-width: 100px;\r\n    max-width: fit-content;\r\n    gap: 5px;\r\n    background-color: var(--light-peach);\r\n    color: var(--background);\r\n    padding-left: 10px;\r\n    \r\n}\r\n.sidebar-img{\r\n    width:1.5rem;\r\n    height: 1.5rem;\r\n}\r\n#clear-completed{\r\n    width: max-content;\r\n    color: red;\r\n    padding:0.5rem;\r\n}\r\n#clear-completed:hover{\r\n    color: var(--tasks-font-color);\r\n}\r\n.btn{\r\n    width: 16rem;\r\n    background-color: var(--light-peach);\r\n    display: flex;\r\n    padding: 0.5rem;\r\n    font-weight: 600;\r\n    align-items: center;\r\n    justify-content: left;\r\n    gap: 1rem;\r\n    color: var(--background);\r\n    font-size: 1.1em;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease, transform 0.2s ease;\r\n\r\n}\r\n.round-checkbox {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    width: 18px;\r\n    height: 18px;\r\n    border: 2px solid var(--light-peach);\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.round-checkbox:checked{\r\n    background-color:var(--light-peach);\r\n    border-color: var(--light-peach);\r\n\r\n}\r\n.round-checkbox:checked::after{\r\n    content: '';\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    width: 6px;\r\n    height: 6px;\r\n    background-color: var(--background);\r\n    border-radius: 50%;\r\n\r\n}\r\n\r\n.round-checkbox.important {\r\n  border-color: red;\r\n}\r\n\r\n.round-checkbox.medium {\r\n  border-color: var(--dark-peach);\r\n}\r\n\r\n.round-checkbox.low {\r\n  border-color: green;\r\n}\r\n\r\n.round-checkbox:checked.important {\r\n  background-color: red;\r\n}\r\n\r\n.round-checkbox:checked.medium {\r\n  background-color: var(--tasks-font-color);\r\n}\r\n\r\n.round-checkbox:checked.low {\r\n  background-color: green;\r\n}\r\n\r\n\r\n\r\n.btn:hover{\r\n    background-color: var(--button-hover);\r\n    border-radius: 10px;\r\n    transform: scale(1.02);\r\n\r\n}\r\nh2,h3{\r\n    margin: 5px;\r\n    font-size: 1.9em;\r\n    text-align: center;\r\n}\r\n\r\n#projects-header{\r\n    font-size: 1.7em;\r\n}\r\nh3{\r\n    margin-bottom: 1.5rem;\r\n}\r\n#content{\r\n  flex: 1;\r\n    color: var(--tasks-font-color);\r\n    background-color: var(--background);\r\n    display: flex;\r\n    padding: 0 20px;\r\n    flex-direction: column;\r\n    min-width: fit-content;\r\n    max-width: 100vw;\r\n}\r\nli{\r\n    display: flex;\r\n    padding: 0.5rem 0;\r\n    align-items: center;\r\n    height: 30px;\r\n    border-bottom: 1px solid var(--light-peach);\r\n    width: 100%;\r\n\r\n}\r\nli.completed {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n.about-task{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    justify-content: start;\r\n}\r\n.about-task>strong{\r\n    font-weight: 900;\r\n    font-size: 1.2rem;\r\n    width: 11.1em;\r\n    padding: 0 7px 0 7px;\r\n}\r\n.about-task>em{\r\n    width: 4em;\r\n    font-size: larger;\r\n    padding: 0 7px 0 7px;\r\n}\r\n.about-task>p{\r\n    max-width: 9em;\r\n    padding-left: 10px;\r\n    font-size: larger;\r\n    padding: 0 7px 0 7px;\r\n}\r\n.task-actions{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n.task-actions button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  width:44px;\r\n}\r\n\r\n.task-actions img {\r\n  display: block;\r\n}\r\n\r\n.edit-icon{\r\n    width: 1.4rem;\r\n    height: 1.3rem;\r\n}\r\nfooter{\r\n  position: fixed;\r\n  bottom: 0;\r\n    height: 5vh;\r\n    color: var(--background);\r\n    font-size: 1.4em;\r\n    padding: 10px;\r\n    background-color: var(--dark-peach);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n    width: 100%;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: var(--background);\r\n}\r\n#content .new-task {\r\n  display: block;\r\n  margin: 2rem auto;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.project-btn {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: none;\r\n  \r\n}\r\n.project-name {\r\n  flex-grow: 1;\r\n  text-align: left;\r\n}\r\n\r\n.delete-project {\r\n  cursor: pointer;\r\n  color: var(--dark-peach);\r\n  margin-left: 0.5rem;\r\n  font-size: 1.3rem;\r\n  font-weight: 300;\r\n}\r\n.delete-project:hover{\r\n    color: red;\r\n}\r\n\r\n.task-actions button {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n}\r\n.trash-icon{\r\n    width:1.5rem;\r\n    height: 1.5rem;\r\n}\r\n\r\n.trash-icon.hover {\r\n  display: none;\r\n}\r\n\r\nbutton:hover .trash-icon.default {\r\n  display: none;\r\n}\r\n\r\nbutton:hover .trash-icon.hover {\r\n  display: inline;\r\n  width:1.5rem;\r\n  height: 1.5rem;\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  header{\r\n    display: block;\r\n    \r\n  }\r\n  .header-section{\r\n     padding: 0;\r\n     height: fit-content;\r\n     min-width:100%;\r\n  }\r\n  .container {\r\n    display: grid;\r\n   \r\n  }\r\n  li{\r\n    width: auto;\r\n  }\r\n  .side-bar {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    border-bottom: 2px solid var(--dark-peach);\r\n    height:fit-content;\r\n    overflow-y: auto;\r\n    min-width: 100%;\r\n    padding: 0;\r\n    font-size: 0.8em;\r\n  }\r\n  .sidebtn{\r\n    width: fit-content;\r\n    height: fit-content;\r\n  }\r\n  .side-tasks{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .side-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  #content {\r\n    padding: 0;\r\n    height: auto;\r\n    width: 100vw;\r\n    padding-bottom: 10px;\r\n  }\r\n  #projects-header, #top-side{\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  button {\r\n    justify-content: center;\r\n  }\r\n  footer{\r\n    min-width: 100%;\r\n    padding: 0;\r\n  }\r\n  .about-task{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n}\r\n.sidebtn, .project-btn{\r\n  padding: 0;\r\n}\r\n.about-task>strong{\r\n    font-weight: 800;\r\n    font-size: 1.0rem;\r\n    max-width: 7em;\r\n}\r\n.about-task>em{\r\n   display: none;\r\n}\r\n.about-task>p{\r\n    display: none;\r\n}\r\n.task-actions{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: auto;\r\n}\r\n\r\n}\r\n\r\n\r\n.task-item.important {\r\n  color: red;\r\n}\r\n\r\n.task-item.medium {\r\n  color: var(--tasks-font-color);\r\n}\r\n\r\n.task-item.low {\r\n  color: green;\r\n}\r\n.new-task-img{\r\n    width:1.3rem;\r\n    height: 1.3rem;\r\n}\r\n\r\n#content .new-task {\r\n    width: 7.5rem;\r\n    background-color: var(--light-peach);\r\n    display: flex;\r\n    font-weight: 600;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n    color: var(--background);\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    transition: background-color 0.3s ease, transform 0.2s ease;\r\n\r\n\r\n}\r\n#content .new-task:hover {\r\n   background-color:var(--dark-peach);\r\n    border-radius: 10px;\r\n    transform: scale(1.02);\r\n\r\n}\r\n.top-side{\r\n    margin-top:20px;\r\n}\r\n\r\n.btn.active{\r\n  background-color: var(--button-hover);\r\n  border-radius: 10px;\r\n}\r\n.project-btn.active {\r\n  background-color: var(--button-hover);\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\ndialog {\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 0;\r\n  width: 90%;\r\n  max-width: 500px;\r\n  background-color: var(--background);\r\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\r\n  animation: fadeIn 0.3s ease-out;\r\n  position: relative;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(-10px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.modal-content {\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.modal-header h3 {\r\n  margin: 0;\r\n  font-size: 1.8em;\r\n  color: var(--tasks-font-color);\r\n  text-align: center;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.form-group label {\r\n  font-weight: bold;\r\n  color: var(--tasks-font-color);\r\n}\r\n\r\n.form-group input,\r\n.form-group textarea,\r\n.form-group select {\r\n  padding: 0.5rem;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--light-peach);\r\n  color: var(--tasks-font-color);\r\n  font-size: 1rem;\r\n}\r\n.form-group select {\r\n  color: var(--tasks-font-color);\r\n  background-color: var(--background);\r\n  border-right: 10px solid transparent;\r\n  outline: 2px solid var(--light-peach);\r\n}\r\n\r\n.form-actions {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.btn-cancel,\r\n.btn-submit {\r\n  padding: 0.6rem 1.2rem;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.btn-cancel {\r\n  background-color: transparent;\r\n  color: var(--dark-peach);\r\n  border: 2px solid var(--dark-peach);\r\n}\r\n\r\n.btn-cancel:hover {\r\n  background-color: var(--dark-peach);\r\n  color: white;\r\n}\r\n\r\n.btn-submit {\r\n  background-color: var(--light-peach);\r\n  color: white;\r\n  border: none;\r\n}\r\n\r\n.btn-submit:hover {\r\n  background-color: var(--dark-peach);\r\n}\r\n\r\n.form-group input:focus,\r\n.form-group textarea:focus,\r\n.form-group select:focus {\r\n  outline: none;\r\n  border: 2px solid var(--dark-peach);\r\n  box-shadow: 0 0 0 2px rgba(172, 78, 21, 0.2); /* nežna senka */\r\n  transition: border 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.form-group select:focus{\r\n  color: var(--tasks-font-color);\r\n  background-color: var(--background);\r\n  border-right: 10px solid transparent;\r\n  outline: 2px solid var(--light-peach);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-ispocetka/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-ispocetka/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/img/all.svg":
/*!*************************!*\
  !*** ./src/img/all.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/all.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/all.svg?\n}");

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/edit.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/edit.svg?\n}");

/***/ }),

/***/ "./src/img/icon.svg":
/*!**************************!*\
  !*** ./src/img/icon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/icon.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/icon.svg?\n}");

/***/ }),

/***/ "./src/img/important.svg":
/*!*******************************!*\
  !*** ./src/img/important.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/important.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/important.svg?\n}");

/***/ }),

/***/ "./src/img/low.svg":
/*!*************************!*\
  !*** ./src/img/low.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/low.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/low.svg?\n}");

/***/ }),

/***/ "./src/img/medium.svg":
/*!****************************!*\
  !*** ./src/img/medium.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/medium.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/medium.svg?\n}");

/***/ }),

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/plus.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/plus.svg?\n}");

/***/ }),

/***/ "./src/img/projects.svg":
/*!******************************!*\
  !*** ./src/img/projects.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/projects.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/projects.svg?\n}");

/***/ }),

/***/ "./src/img/trash-hover.svg":
/*!*********************************!*\
  !*** ./src/img/trash-hover.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/trash-hover.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/trash-hover.svg?\n}");

/***/ }),

/***/ "./src/img/trash.svg":
/*!***************************!*\
  !*** ./src/img/trash.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/trash.svg\";\n\n//# sourceURL=webpack://to-do-ispocetka/./src/img/trash.svg?\n}");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProjects: () => (/* binding */ allProjects),\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects),\n/* harmony export */   saveTasks: () => (/* binding */ saveTasks),\n/* harmony export */   tasks: () => (/* binding */ tasks),\n/* harmony export */   updateProjectDropdown: () => (/* binding */ updateProjectDropdown)\n/* harmony export */ });\nlet tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\nlet allProjects = JSON.parse(localStorage.getItem('projects')) || [];\r\n\r\nfunction saveTasks() {\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\nfunction saveProjects() {\r\n  localStorage.setItem('projects', JSON.stringify(allProjects));\r\n}\r\n\r\nfunction deleteTask(id) {\r\n  tasks = tasks.filter(t => t.id !== id);\r\n  saveTasks();\r\n}\r\n\r\nfunction deleteProject(id) {\r\n  allProjects = allProjects.filter(p => p.id !== id);\r\n  tasks = tasks.filter(t => t.projectId !== id);\r\n  saveProjects();\r\n  saveTasks();\r\n}\r\n\r\nfunction editTask(id, updatedData) {\r\n  const task = tasks.find(t => t.id === id);\r\n  if (task) Object.assign(task, updatedData);\r\n  saveTasks();\r\n}\r\n\r\nfunction clearCompletedTasks() {\r\n  tasks = tasks.filter(task => !task.completed);\r\n  saveTasks();\r\n}\r\n\r\nfunction updateProjectDropdown(selectElement) {\r\n  selectElement.innerHTML = '';\r\n  const defaultOption = document.createElement('option');\r\n  defaultOption.value = '';\r\n  defaultOption.textContent = 'None';\r\n  selectElement.appendChild(defaultOption);\r\n\r\n  allProjects.forEach(p => {\r\n    const option = document.createElement('option');\r\n    option.value = p.id;\r\n    option.textContent = p.name;\r\n    selectElement.appendChild(option);\r\n  });\r\n}\n\n//# sourceURL=webpack://to-do-ispocetka/./src/logic.js?\n}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _img_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/icon.svg */ \"./src/img/icon.svg\");\n\r\n\r\n\r\ndocument.querySelector('.logo').src = _img_icon_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.initApp)();\n\n//# sourceURL=webpack://to-do-ispocetka/./src/main.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-ispocetka/./src/style.css?\n}");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initApp: () => (/* binding */ initApp)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _img_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/trash.svg */ \"./src/img/trash.svg\");\n/* harmony import */ var _img_trash_hover_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash-hover.svg */ \"./src/img/trash-hover.svg\");\n/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/edit.svg */ \"./src/img/edit.svg\");\n/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/plus.svg */ \"./src/img/plus.svg\");\n/* harmony import */ var _img_projects_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/projects.svg */ \"./src/img/projects.svg\");\n/* harmony import */ var _img_all_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/all.svg */ \"./src/img/all.svg\");\n/* harmony import */ var _img_important_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/important.svg */ \"./src/img/important.svg\");\n/* harmony import */ var _img_medium_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/medium.svg */ \"./src/img/medium.svg\");\n/* harmony import */ var _img_low_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/low.svg */ \"./src/img/low.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction initApp() {\r\n  const content = document.getElementById('content');\r\n  const taskForm = document.getElementById('task-form');\r\n  const projectForm = document.getElementById('project-form');\r\n  const tasksModal = document.getElementById('task-dialog');\r\n  const projectModal = document.getElementById('project-dialog');\r\n  const projectsContainer = document.getElementById('projects');\r\n\r\ndocument.querySelector('#all-tasks img').src = _img_all_svg__WEBPACK_IMPORTED_MODULE_6__;\r\ndocument.querySelector('#important-tasks img').src = _img_important_svg__WEBPACK_IMPORTED_MODULE_7__;\r\ndocument.querySelector('#medium-tasks img').src = _img_medium_svg__WEBPACK_IMPORTED_MODULE_8__;\r\ndocument.querySelector('#low-tasks img').src = _img_low_svg__WEBPACK_IMPORTED_MODULE_9__;\r\n\r\n\r\n  function renderTaskList(title, filteredTasks, showProjectName = true) {\r\n    content.innerHTML = `<h3>${title}</h3>`;\r\n    filteredTasks.forEach(task => {\r\n      const li = document.createElement('li');\r\n      li.className = task.completed ? 'completed' : `task-item ${task.priority}`;\r\n\r\n      const checkbox = document.createElement('input');\r\n      checkbox.type = 'checkbox';\r\n      checkbox.className = `round-checkbox ${task.priority}`;\r\n      checkbox.checked = task.completed;\r\n      checkbox.addEventListener('change', () => {\r\n        task.completed = checkbox.checked;\r\n        (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();\r\n        renderAllTasks();\r\n      });\r\n\r\n      const contentDiv = document.createElement('div');\r\n      contentDiv.className = 'about-task';\r\n      const projectName = task.projectId\r\n        ? _logic_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(p => p.id == task.projectId)?.name\r\n        : '';\r\n      contentDiv.innerHTML = `\r\n        <strong>${task.title}${showProjectName && projectName ? ` (${projectName})` : ''}</strong>\r\n        <em>${task.priority}</em>Due Date: ${task.dueDate || '—'}\r\n        <p>${task.description}</p>\r\n      `;\r\n\r\n      const actionsDiv = document.createElement('div');\r\n      actionsDiv.className = 'task-actions';\r\n\r\n      const editBtn = document.createElement('button');\r\n      editBtn.innerHTML = `<img src=\"${_img_edit_svg__WEBPACK_IMPORTED_MODULE_3__}\" class=\"edit-icon\" alt=\"Edit task\">`;\r\n      editBtn.addEventListener('click', () => {\r\n        tasksModal.showModal();\r\n        taskForm.title.value = task.title;\r\n        taskForm.description.value = task.description;\r\n        taskForm.dueDate.value = task.dueDate;\r\n        taskForm.priority.value = task.priority;\r\n        taskForm.projectId.value = task.projectId || '';\r\n        taskForm.dataset.editingId = task.id;\r\n      });\r\n\r\n      const deleteBtn = document.createElement('button');\r\n      deleteBtn.innerHTML = `\r\n        <img src=\"${_img_trash_svg__WEBPACK_IMPORTED_MODULE_1__}\" class=\"trash-icon default\">\r\n        <img src=\"${_img_trash_hover_svg__WEBPACK_IMPORTED_MODULE_2__}\" class=\"trash-icon hover\">\r\n      `;\r\n      deleteBtn.addEventListener('click', () => {\r\n        (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task.id);\r\n        renderAllTasks();\r\n      });\r\n\r\n      actionsDiv.appendChild(editBtn);\r\n      actionsDiv.appendChild(deleteBtn);\r\n\r\n      li.prepend(checkbox);\r\n      li.appendChild(contentDiv);\r\n      li.appendChild(actionsDiv);\r\n      content.appendChild(li);\r\n    });\r\n\r\n    const newTask = document.createElement('button');\r\n    newTask.className = 'btn new-task';\r\n    newTask.innerHTML = `<img class=\"new-task-img\" src=\"${_img_plus_svg__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"add-task\"> New Task`;\r\n    newTask.addEventListener('click', () => tasksModal.showModal());\r\n    content.appendChild(newTask);\r\n  }\r\n\r\n  function renderAllTasks() {\r\n    renderTaskList('All Tasks', _logic_js__WEBPACK_IMPORTED_MODULE_0__.tasks);\r\n  }\r\n\r\n  function renderTasksByPriority(priority) {\r\n    const filtered = _logic_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter(t => t.priority === priority);\r\n    renderTaskList(`${priority.charAt(0).toUpperCase() + priority.slice(1)} Tasks`, filtered);\r\n  }\r\n\r\n  function renderTasksByProject(projectId) {\r\n    const project = _logic_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(p => p.id == projectId);\r\n    const filtered = _logic_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter(t => t.projectId == projectId);\r\n    renderTaskList(`~ ${project?.name || 'Unknown'} ~`, filtered, false);\r\n  }\r\n\r\n  function loadProjects() {\r\n    projectsContainer.innerHTML = '';\r\n    _logic_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(project => {\r\n      const btn = document.createElement('button');\r\n      btn.className = 'btn project-btn';\r\n      btn.innerHTML = `\r\n        <img src=\"img/projects.svg\" class=\"sidebar-img\">\r\n        <span class=\"project-name\">${project.name}</span>\r\n        <span class=\"delete-project\">\r\n          <img src=\"img/trash.svg\" class=\"trash-icon default\">\r\n          <img src=\"img/trash-hover.svg\" class=\"trash-icon hover\">\r\n        </span>\r\n      `;\r\n      btn.addEventListener('click', e => {\r\n        if (e.target.closest('.delete-project')) {\r\n          (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project.id);\r\n          loadProjects();\r\n          renderAllTasks();\r\n        } else {\r\n          renderTasksByProject(project.id);\r\n        }\r\n      });\r\n      projectsContainer.appendChild(btn);\r\n    });\r\n  }\r\n\r\n  // Event listeners\r\n  document.getElementById('all-tasks').addEventListener('click', renderAllTasks);\r\n  document.getElementById('important-tasks').addEventListener('click', () => renderTasksByPriority('important'));\r\n  document.getElementById('medium-tasks').addEventListener('click', () => renderTasksByPriority('medium'));\r\n  document.getElementById('low-tasks').addEventListener('click', () => renderTasksByPriority('low'));\r\n  document.getElementById('clear-completed').addEventListener('click', () => {\r\n    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.clearCompletedTasks)();\r\n    renderAllTasks();\r\n  });\r\n\r\n  document.getElementById('new-project').addEventListener('click', () => projectModal.showModal());\r\n\r\n  document.getElementById('cancel-task-btn').addEventListener('click', () => {\r\n    taskForm.reset();\r\n    taskForm.dataset.editingId = '';\r\n    tasksModal.close();\r\n  });\r\n\r\n  document.getElementById('cancel-project-btn').addEventListener('click', () => {\r\n    projectForm.reset();\r\n    projectModal.close();\r\n  });\r\n\r\n  projectForm.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n    const name = document.getElementById('project-name').value.trim();\r\n    if (!name) return;\r\n    if (_logic_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.some(p => p.name.toLowerCase() === name.toLowerCase())) {\r\n      alert('Project with same name exists.');\r\n      return;\r\n    }\r\n    _logic_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.push({ id: Date.now(), name, createdAt: new Date().toISOString().split('T')[0] });\r\n    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();\r\n    loadProjects();\r\n    (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectDropdown)(document.getElementById('task-project'));\r\n    projectForm.reset();\r\n    projectModal.close();\r\n  });\r\n\r\n  taskForm.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n    const formData = new FormData(taskForm);\r\n    const newTask = {\r\n      id: Date.now(),\r\n      title: formData.get('title'),\r\n      description: formData.get('description'),\r\n      dueDate: formData.get('dueDate') || 'No deadline',\r\n      priority: formData.get('priority'),\r\n      projectId: formData.get('projectId') || null,\r\n      completed: false\r\n    };\r\n    const editingId = taskForm.dataset.editingId;\r\n    if (editingId) {\r\n      (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.editTask)(editingId, newTask);\r\n      taskForm.dataset.editingId = '';\r\n    } else {\r\n      _logic_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push(newTask);\r\n      (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();\r\n    }\r\n    renderAllTasks();\r\n    taskForm.reset();\r\n    tasksModal.close();\r\n  });\r\n\r\n  loadProjects();\r\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectDropdown)(document.getElementById('task-project'));\r\n  renderAllTasks();\r\n}\n\n//# sourceURL=webpack://to-do-ispocetka/./src/ui.js?\n}");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;