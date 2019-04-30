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
/******/ 		"dashboard": 0
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
/******/ 	deferredModules.push(["./src/js/dashboard.js","waih"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/dashboard.scss":
/*!********************************!*\
  !*** ./src/css/dashboard.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/dashboard.scss?");

/***/ }),

/***/ "./src/js/dashboard.js":
/*!*****************************!*\
  !*** ./src/js/dashboard.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _reusableCode = __webpack_require__(/*! ./reusable-code */ \"./src/js/reusable-code.js\");\n\nvar reusable = _interopRequireWildcard(_reusableCode);\n\n__webpack_require__(/*! ../css/dashboard.scss */ \"./src/css/dashboard.scss\");\n\n__webpack_require__(/*! ../css/animate.css */ \"./src/css/animate.css\");\n\nvar _podcast = __webpack_require__(/*! ./model/podcast */ \"./src/js/model/podcast.js\");\n\nvar _podcast2 = _interopRequireDefault(_podcast);\n\nvar _programs = __webpack_require__(/*! ./model/programs */ \"./src/js/model/programs.js\");\n\nvar _programs2 = _interopRequireDefault(_programs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nreusable.head('.head', './reusable/head.html');\n\nvar state = {};\nvar tbody = document.querySelector('tbody');\n\nvar loadPodcasts = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {\n        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, podcast, podRow;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        state.podcast = new _podcast2.default();\n\n                        _context.prev = 1;\n                        _context.next = 4;\n                        return state.podcast.getResults(id);\n\n                    case 4:\n                        console.log(state.podcast.results);\n\n                        _iteratorNormalCompletion = true;\n                        _didIteratorError = false;\n                        _iteratorError = undefined;\n                        _context.prev = 8;\n                        for (_iterator = state.podcast.results[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                            podcast = _step.value;\n                            podRow = '<tr class=\"animated fadeIn\">\\n                    <td contenteditable>' + podcast.title + '</td>   \\n                    <td contenteditable>' + podcast.hostname + '</td>   \\n                    <td contenteditable>' + podcast.title + '</td>   \\n                    <td contenteditable>' + podcast.guestname + '</td>\\n                    <td contenteditable>' + podcast.description + '</td>    \\n                 </tr>';\n\n                            tbody.insertAdjacentHTML('beforeEnd', podRow);\n                        }\n                        _context.next = 16;\n                        break;\n\n                    case 12:\n                        _context.prev = 12;\n                        _context.t0 = _context['catch'](8);\n                        _didIteratorError = true;\n                        _iteratorError = _context.t0;\n\n                    case 16:\n                        _context.prev = 16;\n                        _context.prev = 17;\n\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n\n                    case 19:\n                        _context.prev = 19;\n\n                        if (!_didIteratorError) {\n                            _context.next = 22;\n                            break;\n                        }\n\n                        throw _iteratorError;\n\n                    case 22:\n                        return _context.finish(19);\n\n                    case 23:\n                        return _context.finish(16);\n\n                    case 24:\n                        document.querySelector('td').addEventListener('');\n\n                        _context.next = 30;\n                        break;\n\n                    case 27:\n                        _context.prev = 27;\n                        _context.t1 = _context['catch'](1);\n\n                        console.log('Something went wrong with the search, try again later1');\n\n                    case 30:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[1, 27], [8, 12, 16, 24], [17,, 19, 23]]);\n    }));\n\n    return function loadPodcasts(_x) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nvar programs = function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, program;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        state.program = new _programs2.default();\n\n                        _context2.prev = 1;\n                        _context2.next = 4;\n                        return state.program.getResults();\n\n                    case 4:\n                        console.log(state.program.results);\n\n                        _iteratorNormalCompletion2 = true;\n                        _didIteratorError2 = false;\n                        _iteratorError2 = undefined;\n                        _context2.prev = 8;\n                        for (_iterator2 = state.program.results[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                            program = _step2.value;\n\n                            $(\"#program\").append('<option value=\"' + program.id + '\">' + program.title + '</option>');\n                        }\n\n                        _context2.next = 16;\n                        break;\n\n                    case 12:\n                        _context2.prev = 12;\n                        _context2.t0 = _context2['catch'](8);\n                        _didIteratorError2 = true;\n                        _iteratorError2 = _context2.t0;\n\n                    case 16:\n                        _context2.prev = 16;\n                        _context2.prev = 17;\n\n                        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                            _iterator2.return();\n                        }\n\n                    case 19:\n                        _context2.prev = 19;\n\n                        if (!_didIteratorError2) {\n                            _context2.next = 22;\n                            break;\n                        }\n\n                        throw _iteratorError2;\n\n                    case 22:\n                        return _context2.finish(19);\n\n                    case 23:\n                        return _context2.finish(16);\n\n                    case 24:\n                        _context2.next = 29;\n                        break;\n\n                    case 26:\n                        _context2.prev = 26;\n                        _context2.t1 = _context2['catch'](1);\n\n                        console.log('Something went wrong with the search, try again later');\n\n                    case 29:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, undefined, [[1, 26], [8, 12, 16, 24], [17,, 19, 23]]);\n    }));\n\n    return function programs() {\n        return _ref2.apply(this, arguments);\n    };\n}();\n\nvar select = document.querySelector('#program');\nselect.addEventListener('input', function () {\n    tbody.parentNode.style.opacity = 1;\n    while (tbody.childElementCount !== 1) {\n        tbody.removeChild(tbody.lastChild);\n    }\n    loadPodcasts(select.value);\n});\n\nprograms();\n\n//# sourceURL=webpack:///./src/js/dashboard.js?");

/***/ })

/******/ });