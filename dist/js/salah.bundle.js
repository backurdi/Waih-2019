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
/******/ 		"salah": 0
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
/******/ 	deferredModules.push(["./src/js/salah.js","waih"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/model/salah.js":
/*!*******************************!*\
  !*** ./src/js/model/salah.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Salah = function () {\n    function Salah() {\n        _classCallCheck(this, Salah);\n    }\n\n    _createClass(Salah, [{\n        key: 'getResults',\n        value: function () {\n            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var today, salahResults;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                today = new Date();\n\n                                today = (today.getDate() < 10 ? '0' + today.getDate() : today.getDate()) + '/' + (today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1) + '/' + today.getFullYear();\n                                _context.prev = 2;\n                                _context.next = 5;\n                                return (0, _axios2.default)('http://waih.dk/WaihAPI/salah/?dato=' + today);\n\n                            case 5:\n                                salahResults = _context.sent;\n\n                                this.results = salahResults.data.salah;\n                                _context.next = 12;\n                                break;\n\n                            case 9:\n                                _context.prev = 9;\n                                _context.t0 = _context['catch'](2);\n\n                                alert(_context.t0);\n\n                            case 12:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, this, [[2, 9]]);\n            }));\n\n            function getResults() {\n                return _ref.apply(this, arguments);\n            }\n\n            return getResults;\n        }()\n    }]);\n\n    return Salah;\n}();\n\nexports.default = Salah;\n\n//# sourceURL=webpack:///./src/js/model/salah.js?");

/***/ }),

/***/ "./src/js/salah.js":
/*!*************************!*\
  !*** ./src/js/salah.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _salah = __webpack_require__(/*! ./model/salah */ \"./src/js/model/salah.js\");\n\nvar _salah2 = _interopRequireDefault(_salah);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar state = {};\n\nvar salah = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        state.salah = new _salah2.default();\n\n                        _context.prev = 1;\n                        _context.next = 4;\n                        return state.salah.getResults();\n\n                    case 4:\n                        $('.fajr').text(state.salah.results[0].fajr);\n                        $('.shuruq').text(state.salah.results[0].shuruq);\n                        $('.dhuhur').text(state.salah.results[0].dhuhr);\n                        $('.asr').text(state.salah.results[0].asr);\n                        $('.maghreb').text(state.salah.results[0].maghrib);\n                        $('.isha').text(state.salah.results[0].isha);\n\n                        $('.fajr-mobil').text(state.salah.results[0].fajr);\n                        $('.shuruq-mobil').text(state.salah.results[0].shuruq);\n                        $('.dhuhur-mobil').text(state.salah.results[0].dhuhr);\n                        $('.asr-mobil').text(state.salah.results[0].asr);\n                        $('.maghreb-mobil').text(state.salah.results[0].maghrib);\n                        $('.isha-mobil').text(state.salah.results[0].isha);\n\n                        setSalahTime('.salah-times', 'salah-time');\n                        setSalahTime('.salah-times-desktop', 'salah-time-desktop');\n                        salahToggle();\n                        _context.next = 23;\n                        break;\n\n                    case 21:\n                        _context.prev = 21;\n                        _context.t0 = _context['catch'](1);\n\n                    case 23:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[1, 21]]);\n    }));\n\n    return function salah() {\n        return _ref.apply(this, arguments);\n    };\n}();\nsalah();\n\n//salah tider\nvar salahToggle = function salahToggle() {\n    var salahButton = document.querySelector('#salah-button');\n    var salahTimes = document.querySelector('.salah-times');\n    salahButton.addEventListener('click', function () {\n        if (salahTimes.classList.contains('salah-active')) {\n            salahTimes.classList.remove('salah-active');\n        } else {\n            salahTimes.classList.add('salah-active');\n        }\n    });\n};\n\nfunction setSalahTime(salahUl, salahActive) {\n    var today = new Date();\n    var hour = today.getHours();\n    var min = today.getMinutes();\n    var time = void 0;\n    if (hour < 10) {\n        hour = \"0\" + today.getHours();\n    }\n    if (min < 10) {\n        min = \"0\" + today.getMinutes();\n    }\n    time = hour + \":\" + min;\n\n    var salah = document.querySelectorAll(salahUl + ' p');\n    var lastSalah = document.getElementById(salahActive);\n    var possibleSalah = [];\n    salah.forEach(function (el) {\n        if (el.innerHTML <= time) {\n            possibleSalah.push(el);\n        }\n    });\n    lastSalah.id = \"\";\n    if (possibleSalah.length === 0) {\n        document.querySelectorAll('.last')[0].id = salahActive;\n    } else {\n        var currentSalah = possibleSalah.pop();\n        currentSalah.parentNode.id = salahActive;\n    }\n}\n\n//# sourceURL=webpack:///./src/js/salah.js?");

/***/ })

/******/ });