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
/******/ 		"index": 0
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
/******/ 	deferredModules.push(["./src/js/index.js","waih"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _plyr = __webpack_require__(/*! plyr */ \"./node_modules/plyr/dist/plyr.min.js\");\n\nvar _plyr2 = _interopRequireDefault(_plyr);\n\nvar _reusableCode = __webpack_require__(/*! ./reusable-code */ \"./src/js/reusable-code.js\");\n\nvar reusable = _interopRequireWildcard(_reusableCode);\n\nvar _podcast = __webpack_require__(/*! ./model/podcast */ \"./src/js/model/podcast.js\");\n\nvar _podcast2 = _interopRequireDefault(_podcast);\n\nvar _artikler = __webpack_require__(/*! ./model/artikler */ \"./src/js/model/artikler.js\");\n\nvar _artikler2 = _interopRequireDefault(_artikler);\n\n__webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n\n__webpack_require__(/*! ../css/upload.scss */ \"./src/css/upload.scss\");\n\n__webpack_require__(/*! ../css/artikler.scss */ \"./src/css/artikler.scss\");\n\n__webpack_require__(/*! ../css/artikel.scss */ \"./src/css/artikel.scss\");\n\n__webpack_require__(/*! ../css/animate.css */ \"./src/css/animate.css\");\n\n__webpack_require__(/*! ../css/queries.css */ \"./src/css/queries.css\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// Implementing reusable HTML code\nreusable.nav('.nav', './reusable/nav.html');\nreusable.head('.head', './reusable/head.html');\n\n// Base selecting\nvar latestPodcast = document.querySelector('.latest-podcasts');\nvar latestArticles = document.querySelector('.latest-articles');\nvar state = {};\nvar loadPodcasts = true;\nhistory.pushState(state, 'index', window.location.href);\n\nvar podcasts = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        state.podcast = new _podcast2.default();\n\n                        _context.prev = 1;\n                        _context.next = 4;\n                        return state.podcast.getResults();\n\n                    case 4:\n\n                        window.onscroll = function () {\n                            var scrollY = window.scrollY;\n                            var podcastSection = document.querySelector('.latest-articles').offsetHeight - 80;\n                            if (scrollY > podcastSection) if (loadPodcasts) {\n                                loadPodcasts = false;\n                                for (var i = 0; i < 6; i++) {\n                                    createPlayer(i);\n                                }\n                            }\n                        };\n\n                        _context.next = 10;\n                        break;\n\n                    case 7:\n                        _context.prev = 7;\n                        _context.t0 = _context['catch'](1);\n\n                        console.log('Something went wrong with loading the articles, try again later\\n' + _context.t0);\n\n                    case 10:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[1, 7]]);\n    }));\n\n    return function podcasts() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nvar artikler = function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var i, article;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        state.artikler = new _artikler2.default();\n\n                        _context2.prev = 1;\n                        _context2.next = 4;\n                        return state.artikler.getResults();\n\n                    case 4:\n\n                        for (i = 0; i < 6; i++) {\n                            article = '\\n                <div class=\"artikel animated fadeInRight\" data-id=\"' + state.artikler.results[i].id + '\" style=\"background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url(\\'' + state.artikler.results[i].picture + '\\') no-repeat center center;\">\\n                   <div>\\n                       <h1>' + state.artikler.results[i].title + '</h1>\\n                       <h3>' + state.artikler.results[i].subtitle + '</h3>\\n                       <h4>L\\xE6s denne artikel <i class=\"fas fa-arrow-right\"> </i></h4>\\n                   </div>\\n               </div>\\n                ';\n\n                            latestArticles.insertAdjacentHTML('beforeEnd', article);\n                            $('.artikel').click(function (e) {\n                                var targetArtikel = e.currentTarget.dataset.id;\n                                window.location.replace('artikel.html#' + targetArtikel);\n                            });\n                        }\n\n                        _context2.next = 10;\n                        break;\n\n                    case 7:\n                        _context2.prev = 7;\n                        _context2.t0 = _context2['catch'](1);\n\n                        console.log('Something went wrong with loading the podcasts, try again later\\n' + _context2.t0);\n\n                    case 10:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, undefined, [[1, 7]]);\n    }));\n\n    return function artikler() {\n        return _ref2.apply(this, arguments);\n    };\n}();\n\nvar createPlayer = function createPlayer(i) {\n    var player = '\\n    <div class=\"podcast-episode animated fadeInLeft\">\\n        <div class=\"top-part\">\\n            <h1>' + state.podcast.results[i].title + '</h1>\\n        </div>\\n        <div class=\"bottom-part\">\\n            <button class=\"play-button hvr-radial-out\"><i class=\"fas fa-headphones\"></i></button>\\n            <p class=\"player-text\">' + state.podcast.results[i].description + '</p>\\n            <div class=\"player-placeholder\">\\n                <audio class=\"player\" controls>\\n                    <source src=\"' + state.podcast.results[i].audioPath + '\" type=\"audio/mpeg\" />\\n                </audio>\\n            </div>\\n        </div>\\n    </div>\\n    ';\n    latestPodcast.insertAdjacentHTML('beforeEnd', player);\n    _plyr2.default.setup('.player');\n\n    $('.play-button').on('click', function (e) {\n        //klik på nogle klasser gør at funktionen køres flere gange\n        e.stopPropagation();\n        e.stopImmediatePropagation();\n        var targetElement = e.target.closest('button');\n        var Icon = targetElement.querySelector('.fas');\n        var text = targetElement.nextElementSibling;\n        var player = text.nextElementSibling;\n\n        if (!player.classList.contains('active')) {\n            player.classList.add('active');\n            Icon.classList.add('fa-times');\n            Icon.classList.remove('fa-headphones');\n            text.classList.add('hide');\n        } else {\n            player.classList.remove('active');\n            Icon.classList.add('fa-headphones');\n            Icon.classList.remove('fa-times');\n            text.classList.remove('hide');\n        }\n    });\n};\n\npodcasts();\nartikler();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });