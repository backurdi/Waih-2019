/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/programs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/programs.js":
/*!****************************!*\
  !*** ./src/js/programs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconsole.log('programs work');\n\n//artikler\nvar loadArtikler = function loadArtikler() {\n    if (latestArticles) {\n        for (var i = 0; i < 6; i++) {\n            createArticle(latestArticles, i);\n        }\n    } else {\n        for (var _i = 0; _i < state.artikler.results.length; _i++) {\n            articles(_i);\n        }\n    }\n    $('.artikel').click(function (e) {\n        var targetArtikel = e.currentTarget.dataset.id;\n        window.location.replace('artikel.html#' + targetArtikel);\n    });\n};\n\n$(document).ready(function () {\n    if (window.location.hash) {\n        var artikel = function () {\n            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var id;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                id = window.location.hash.replace(/\\D/g, '');\n\n                                state.artikel = new Artikel();\n\n                                _context.prev = 2;\n                                _context.next = 5;\n                                return state.artikel.getResults(id);\n\n                            case 5:\n                                console.log(state.artikel.results[0]);\n                                $('#title').html(state.artikel.results[0].title);\n                                $('#subtitle').html(state.artikel.results[0].subtitle);\n                                $('#author').html(state.artikel.results[0].author);\n                                $('#date').html('Udgivet den ' + state.artikel.results[0].date);\n                                $('#body').html(state.artikel.results[0].body);\n\n                                _context.next = 16;\n                                break;\n\n                            case 13:\n                                _context.prev = 13;\n                                _context.t0 = _context['catch'](2);\n\n                                console.log('Something went wrong, try again later');\n\n                            case 16:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, undefined, [[2, 13]]);\n            }));\n\n            return function artikel() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        artikel();\n    }\n});\n\nvar articles = function articles(i) {\n    $(\"#artikler\").append('\\n        <div class=\"artikel\" data-id=\"' + state.artikler.results[i].id + '\">\\n           <div style=\"background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url(\\'' + state.artikler.results[i].picture + '\\') no-repeat center center;\">\\n               <h1>' + state.artikler.results[i].title + '</h1>\\n           </div>\\n           <h3>' + state.artikler.results[i].subtitle + '</h3>\\n       </div>\\n        ');\n};\n\n//# sourceURL=webpack:///./src/js/programs.js?");

/***/ })

/******/ });