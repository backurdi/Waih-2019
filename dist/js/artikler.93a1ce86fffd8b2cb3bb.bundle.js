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
/******/ 		"artikler": 0
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
/******/ 	deferredModules.push(["./src/js/artikler.js","waih"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/artikler.js":
/*!****************************!*\
  !*** ./src/js/artikler.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _artikler = __webpack_require__(/*! ./model/artikler */ \"./src/js/model/artikler.js\");\n\nvar _artikler2 = _interopRequireDefault(_artikler);\n\n__webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n\n__webpack_require__(/*! ../css/artikler.scss */ \"./src/css/artikler.scss\");\n\n__webpack_require__(/*! ../css/artikel.scss */ \"./src/css/artikel.scss\");\n\n__webpack_require__(/*! ../css/queries.css */ \"./src/css/queries.css\");\n\nvar _reusableCode = __webpack_require__(/*! ./reusable-code */ \"./src/js/reusable-code.js\");\n\nvar reusable = _interopRequireWildcard(_reusableCode);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// Implementing reusable HTML code\nreusable.nav('.nav', './reusable/nav.html');\nreusable.head('.head', './reusable/head.html');\n\nvar state = {};\n\nvar artikel = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var id;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n\n                        // tager hash og fjerner alt der ikke er tal som #\n                        id = window.location.hash.replace(/\\D/g, '');\n\n                        state.artikler = new _artikler2.default();\n\n                        _context.prev = 2;\n                        _context.next = 5;\n                        return state.artikler.getResults(id);\n\n                    case 5:\n                        console.log(state);\n\n                        if (window.location.hash) {\n                            $('#top').css('background-image', ' url(\\'' + state.artikler.results[0].picture + '\\')');\n                            $('#title').html(state.artikler.results[0].title);\n                            $('#subtitle').html(state.artikler.results[0].subtitle);\n                            $('#author').html(state.artikler.results[0].author);\n                            $('#date').html('Udgivet den ' + state.artikler.results[0].date);\n                            $('#body').html(state.artikler.results[0].body);\n                        } else {\n                            loadArtikler();\n                        }\n\n                        _context.next = 13;\n                        break;\n\n                    case 9:\n                        _context.prev = 9;\n                        _context.t0 = _context['catch'](2);\n\n                        $('#top').css('background-image', 'url(\"../img/404.png\")');\n                        console.log('Something went wrong, try again later');\n\n                    case 13:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[2, 9]]);\n    }));\n\n    return function artikel() {\n        return _ref.apply(this, arguments);\n    };\n}();\nartikel();\nhistory.pushState(state, null, window.location.href);\n\nvar loadArtikler = function loadArtikler() {\n    for (var i = 0; i < state.artikler.results.length; i++) {\n        $(\"#artikler\").append('\\n        <div class=\"artikel\" data-id=\"' + state.artikler.results[i].id + '\">\\n           <div style=\"background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url(\\'' + state.artikler.results[i].picture + '\\') no-repeat center center;\">\\n               <h1>' + state.artikler.results[i].title + '</h1>\\n           </div>\\n           <h3>' + state.artikler.results[i].subtitle + '</h3>\\n       </div>\\n        ');\n    }\n\n    $('.artikel').click(function (e) {\n        var targetArtikel = e.currentTarget.dataset.id;\n        window.location.replace('artikel.html#' + targetArtikel);\n    });\n};\n\n//# sourceURL=webpack:///./src/js/artikler.js?");

/***/ })

/******/ });