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
/******/ 		"programs": 0
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
/******/ 	deferredModules.push(["./src/js/programs.js","waih"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/programs.scss":
/*!*******************************!*\
  !*** ./src/css/programs.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/programs.scss?");

/***/ }),

/***/ "./src/js/model/programs.js":
/*!**********************************!*\
  !*** ./src/js/model/programs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Program = function () {\n    function Program() {\n        _classCallCheck(this, Program);\n    }\n\n    _createClass(Program, [{\n        key: 'getResults',\n        value: function () {\n            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {\n                var programsResults;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                _context.prev = 0;\n\n                                id = id ? '?id=' + id : '';\n                                _context.next = 4;\n                                return (0, _axios2.default)('http://waih.dk/WaihAPI/readPrograms.php' + id);\n\n                            case 4:\n                                programsResults = _context.sent;\n\n                                this.results = programsResults.data.programs;\n                                _context.next = 11;\n                                break;\n\n                            case 8:\n                                _context.prev = 8;\n                                _context.t0 = _context['catch'](0);\n\n                                alert(_context.t0);\n\n                            case 11:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, this, [[0, 8]]);\n            }));\n\n            function getResults(_x) {\n                return _ref.apply(this, arguments);\n            }\n\n            return getResults;\n        }()\n    }]);\n\n    return Program;\n}();\n\nexports.default = Program;\n\n//# sourceURL=webpack:///./src/js/model/programs.js?");

/***/ }),

/***/ "./src/js/programs.js":
/*!****************************!*\
  !*** ./src/js/programs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _plyr = __webpack_require__(/*! plyr */ \"./node_modules/plyr/dist/plyr.min.js\");\n\nvar _plyr2 = _interopRequireDefault(_plyr);\n\nvar _reusableCode = __webpack_require__(/*! ./reusable-code */ \"./src/js/reusable-code.js\");\n\nvar reusable = _interopRequireWildcard(_reusableCode);\n\nvar _programs = __webpack_require__(/*! ./model/programs */ \"./src/js/model/programs.js\");\n\nvar _programs2 = _interopRequireDefault(_programs);\n\n__webpack_require__(/*! ../css/programs.scss */ \"./src/css/programs.scss\");\n\n__webpack_require__(/*! ../css/animate.css */ \"./src/css/animate.css\");\n\n__webpack_require__(/*! ../css/queries.css */ \"./src/css/queries.css\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// Implementing reusable HTML code\nreusable.nav('.nav', './reusable/nav.html');\nreusable.head('.head', './reusable/head.html');\n\nvar state = {};\nvar programsContainer = document.querySelector('.programs-container');\n\nvar programs = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var id, i;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        state.program = new _programs2.default();\n                        id = window.location.hash.replace(/\\D/g, '');\n                        _context.prev = 2;\n                        _context.next = 5;\n                        return state.program.getResults(id);\n\n                    case 5:\n                        console.log(state.program.results);\n\n                        if (window.location.hash) {\n                            loadProgram();\n                        } else {\n                            print(\"false\");\n                            for (i = 0; i < state.program.results.length; i++) {\n                                createPrograms(i);\n                            }\n                        }\n\n                        _context.next = 14;\n                        break;\n\n                    case 9:\n                        _context.prev = 9;\n                        _context.t0 = _context['catch'](2);\n\n                        $('#title').html('Siden du leder efter findes ikke');\n                        $('.img-wrapper').css(\"background-image\", ' url(../img/404.png)');\n                        console.log('Something went wrong with the search, try again later');\n\n                    case 14:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[2, 9]]);\n    }));\n\n    return function programs() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nhistory.pushState(state, 'programs', window.location.href);\nprograms();\n_plyr2.default.setup('.player');\n\nvar createPrograms = function createPrograms(i) {\n    var program = '\\n    <div class=\"program\" data-id=\"' + state.program.results[i].id + '\">\\n        <div class=\"img-wrapper\" style=\"background-image: url(\\'' + state.program.results[i].picture + '\\');\"></div>\\n        <div class=\"programs-title-container\" style=\"background-color: ' + state.program.results[i].colorCode + ' \">\\n          <h3>' + state.program.results[i].title + '</h3>\\n        </div>\\n    </div>\\n    ';\n\n    programsContainer.insertAdjacentHTML('beforeEnd', program);\n    var programElement = $('.program');\n    programElement.click(function (e) {\n        var articleClass = e.target.closest('.program').dataset.id;\n        document.location.replace('program.html#' + articleClass);\n    });\n};\n\nvar loadProgram = function loadProgram() {\n\n    $('#title').html(state.program.results[0].title);\n    $('.img-wrapper').css(\"background-image\", ' url(\\'' + state.program.results[0].picture + '\\')');\n    print(state.program.results[0]);\n};\n\nvar print = function print(t) {\n    console.log(t);\n};\n\n//# sourceURL=webpack:///./src/js/programs.js?");

/***/ })

/******/ });