/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"editArticle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/editArticle.js","waih"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/editArticle.js":
/*!*******************************!*\
  !*** ./src/js/editArticle.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n\n__webpack_require__(/*! ../css/upload.scss */ \"./src/css/upload.scss\");\n\n__webpack_require__(/*! ../css/animate.css */ \"./src/css/animate.css\");\n\nvar _artikler = __webpack_require__(/*! ./model/artikler */ \"./src/js/model/artikler.js\");\n\nvar _artikler2 = _interopRequireDefault(_artikler);\n\nvar _reusableCode = __webpack_require__(/*! ./reusable-code */ \"./src/js/reusable-code.js\");\n\nvar reusable = _interopRequireWildcard(_reusableCode);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nreusable.head('.head', './reusable/head.html');\nreusable.dbnav('.nav', './reusable/dbnav.html');\n\nvar items = {\n    title: document.getElementById('title'),\n    subtitle: document.getElementById('subtitle'),\n    author: document.getElementById('author'),\n    type: document.getElementById('type'),\n    quote: document.getElementById('quote'),\n    body: document.getElementById('description'),\n    pictureText: document.getElementById('pictureText')\n};\nvar keys = Object.keys(items);\nvar state = {};\n\nvar artikel = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var id, i;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        state.artikel = new _artikler2.default();\n                        id = window.location.hash.replace(/\\D/g, '');\n                        _context.prev = 2;\n                        _context.next = 5;\n                        return state.artikel.getResults(id);\n\n                    case 5:\n                        for (i = 0; i < keys.length; i++) {\n                            replaceContent(keys[i]);\n                        }\n                        _context.next = 11;\n                        break;\n\n                    case 8:\n                        _context.prev = 8;\n                        _context.t0 = _context['catch'](2);\n\n                        console.log(_context.t0);\n\n                    case 11:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[2, 8]]);\n    }));\n\n    return function artikel() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nvar replaceContent = function replaceContent(el) {\n    items[el].value = state.artikel.results[0][el];\n};\n\nartikel();\n\nvar updateAttr = function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(prop, data) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        id = window.location.hash.replace(/\\D/g, '');\n\n                        _context2.prev = 1;\n                        _context2.next = 4;\n                        return state.artikel.updateAttr(id, prop, data);\n\n                    case 4:\n                        return _context2.abrupt('return', true);\n\n                    case 7:\n                        _context2.prev = 7;\n                        _context2.t0 = _context2['catch'](1);\n\n                        console.log(_context2.t0);\n\n                    case 10:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, undefined, [[1, 7]]);\n    }));\n\n    return function updateAttr(_x, _x2) {\n        return _ref2.apply(this, arguments);\n    };\n}();\n\nvar deleteArtikel = function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n            while (1) {\n                switch (_context3.prev = _context3.next) {\n                    case 0:\n                        id = window.location.hash.replace(/\\D/g, '');\n\n                        _context3.prev = 1;\n                        _context3.next = 4;\n                        return state.artikel.deleteArtikel(id);\n\n                    case 4:\n\n                        console.log('artikel deleted');\n                        window.location.href = \"http://waih.dk/dashboard.html#art\";\n\n                        _context3.next = 11;\n                        break;\n\n                    case 8:\n                        _context3.prev = 8;\n                        _context3.t0 = _context3['catch'](1);\n\n                        console.log(_context3.t0);\n\n                    case 11:\n                    case 'end':\n                        return _context3.stop();\n                }\n            }\n        }, _callee3, undefined, [[1, 8]]);\n    }));\n\n    return function deleteArtikel() {\n        return _ref3.apply(this, arguments);\n    };\n}();\n\nvar updatePic = function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {\n        var formData;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n            while (1) {\n                switch (_context4.prev = _context4.next) {\n                    case 0:\n                        id = window.location.hash.replace(/\\D/g, '');\n                        formData = new FormData();\n\n                        formData.append('picture', document.getElementById('picture').files[0]);\n\n                        console.log(formData.has('picture'));\n                        _context4.prev = 4;\n                        _context4.next = 7;\n                        return state.artikel.updatePic(id, formData);\n\n                    case 7:\n                        return _context4.abrupt('return', true);\n\n                    case 10:\n                        _context4.prev = 10;\n                        _context4.t0 = _context4['catch'](4);\n\n                        console.log(_context4.t0);\n\n                    case 13:\n                    case 'end':\n                        return _context4.stop();\n                }\n            }\n        }, _callee4, undefined, [[4, 10]]);\n    }));\n\n    return function updatePic(_x3) {\n        return _ref4.apply(this, arguments);\n    };\n}();\n\nvar id = void 0,\n    param = void 0,\n    oldValue = void 0,\n    newValue = void 0;\n\n$('.input').on('focus', function (e) {\n    id = window.location.hash.replace(/\\D/g, '');\n    param = e.currentTarget.name;\n    oldValue = e.currentTarget.value;\n});\n\n$('.input').on('blur', function (e) {\n    newValue = e.currentTarget.value;\n    if (oldValue !== newValue) {\n        if (updateAttr(e.currentTarget.dataset.prop, newValue)) updateEffect(e.currentTarget);\n    } else {\n        console.log('ingen ændring');\n    }\n});\n\n$('select').on('change', function (e) {\n    updateAttr('type', e.currentTarget.value);\n});\n\n$(\"input[type=file]\").on('click', function () {\n    $(undefined).val(\"\");\n});\n$('input[type=file]').on('change', function (e) {\n    if (updatePic()) updateEffect(e.currentTarget);\n});\n\n$('#delete').on('click', function (e) {\n    var confirmation = confirm('Er du sikker på at du vil slette denne artikel?');\n    if (confirmation) deleteArtikel();\n});\n\nvar updateEffect = function updateEffect(elem) {\n    var submit = document.getElementById('submit');\n    elem.style.borderColor = \"limeGreen\";\n    submit.style.backgroundColor = \"limeGreen\";\n    submit.value = 'Gemmer';\n    setTimeout(function () {\n        elem.style.borderColor = \"black\";\n        submit.style.backgroundColor = \"white\";\n        submit.value = 'Gem ændringer';\n    }, 800);\n};\n\n//# sourceURL=webpack:///./src/js/editArticle.js?");

/***/ })

/******/ });