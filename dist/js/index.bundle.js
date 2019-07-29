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
eval("\n\nvar _plyr = __webpack_require__(/*! plyr */ \"./node_modules/plyr/dist/plyr.min.js\");\n\nvar _plyr2 = _interopRequireDefault(_plyr);\n\nvar _reusableCode = __webpack_require__(/*! ./reusable-code */ \"./src/js/reusable-code.js\");\n\nvar reusable = _interopRequireWildcard(_reusableCode);\n\nvar _seneste = __webpack_require__(/*! ./model/seneste */ \"./src/js/model/seneste.js\");\n\nvar _seneste2 = _interopRequireDefault(_seneste);\n\n__webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n\n__webpack_require__(/*! ../css/animate.css */ \"./src/css/animate.css\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// Implementing reusable HTML code\nreusable.nav('.nav', './reusable/nav.html');\nreusable.head('.head', './reusable/head.html');\nreusable.footer('.footer', './reusable/footer.html');\n\n// Base selecting\nvar latestPodcast = document.querySelector('.latest-podcasts');\nvar state = {};\n\nvar seneste = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var storArtikel, lilleArtikel1, lilleArtikel2;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        state.seneste = new _seneste2.default();\n\n                        _context.prev = 1;\n                        _context.next = 4;\n                        return state.seneste.getResults();\n\n                    case 4:\n                        console.log(state.seneste.results);\n                        storArtikel = state.seneste.results.articles[0];\n\n                        if (storArtikel.title.length > 65) {\n                            storArtikel.title = storArtikel.title.substring(0, 65) + \" ...\";\n                        }\n                        lilleArtikel1 = state.seneste.results.articles[1];\n\n                        if (lilleArtikel1.title.length > 65) {\n                            lilleArtikel1.title = lilleArtikel1.title.substring(0, 65) + \" ...\";\n                        }\n                        lilleArtikel2 = state.seneste.results.articles[2];\n\n                        if (lilleArtikel2.title.length > 40) {\n                            lilleArtikel2.title = lilleArtikel2.title.substring(0, 40) + \" ...\";\n                        }\n\n                        $('.article-content').attr('data-id', storArtikel.id);\n                        $('.article-content h1').html(storArtikel.title);\n                        $('.article-content .visual').attr('style', 'background-image: url(\"' + storArtikel.picture + '\");');\n                        $('.article-content .info h2').html(storArtikel.author + ('<span class=\"date\"> | ' + storArtikel.date + '</span>'));\n                        $('.article-content .info p').html(storArtikel.subtitle);\n\n                        $('.article-top').attr('data-id', lilleArtikel1.id);\n                        $('.article-top h1').html(lilleArtikel1.title);\n                        $('.article-top .visual').attr('style', 'background-image: url(\"' + lilleArtikel1.picture + '\"); background-repeat: no-repeat; background-size: cover;');\n                        $('.article-top .info h2').html(lilleArtikel1.author);\n                        $('.article-top .info p').html(lilleArtikel1.subtitle);\n\n                        $('.article-bottom').attr('data-id', lilleArtikel2.id);\n                        $('.article-bottom h1').html(lilleArtikel2.title);\n                        $('.article-bottom .visual').attr('style', 'background-image: url(\"' + lilleArtikel2.picture + '\"); background-repeat: no-repeat; background-size: cover;');\n                        $('.article-bottom .info h2').html(lilleArtikel2.author);\n                        $('.article-bottom .info p').html(lilleArtikel2.subtitle);\n\n                        $('.artikel').click(function (e) {\n                            var targetArtikel = e.currentTarget.dataset.id;\n                            console.log(e.currentTarget.dataset);\n                            window.location.href = 'artikel.html#' + targetArtikel;\n                        });\n\n                        createPlayer();\n                        _plyr2.default.setup('.player');\n\n                        _context.next = 34;\n                        break;\n\n                    case 31:\n                        _context.prev = 31;\n                        _context.t0 = _context['catch'](1);\n\n                        console.log('Something went wrong with loading the latest news, try again later\\n' + _context.t0);\n\n                    case 34:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[1, 31]]);\n    }));\n\n    return function seneste() {\n        return _ref.apply(this, arguments);\n    };\n}();\nseneste();\n\nvar createPlayer = function createPlayer() {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = state.seneste.results.podcasts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var podcast = _step.value;\n\n\n            var player = '\\n        <div class=\"podcast-episode animated fadeInLeft\">\\n            <div class=\"top-part\">\\n                <h1>' + podcast.title + '</h1>\\n            </div>\\n            <div class=\"bottom-part\">\\n                <button class=\"play-button hvr-radial-out\"><i class=\"fas fa-headphones\"></i></button>\\n                <div class=\"podcast-text\">\\n                    <h3 class=\"player-text\">V\\xE6rt: ' + podcast.hostname + '</h3>\\n                    <h3 class=\"player-text\">G\\xE6st: ' + podcast.guestname + '</h3>\\n                </div>\\n                <div class=\"player-placeholder\">\\n                    <audio class=\"player\" controls>\\n                        <source src=\"' + podcast.audioPath + '\" type=\"audio/mpeg\" />\\n                    </audio>\\n                </div>\\n            </div>\\n        </div>\\n        ';\n            latestPodcast.insertAdjacentHTML('beforeEnd', player);\n\n            $('.play-button').on('click', function (e) {\n                //klik på nogle klasser gør at funktionen køres flere gange\n                e.stopPropagation();\n                e.stopImmediatePropagation();\n                var targetElement = e.target.closest('button');\n                var Icon = targetElement.querySelector('.fas');\n                var text = targetElement.nextElementSibling;\n                var player = text.nextElementSibling;\n\n                if (!player.classList.contains('active')) {\n                    player.classList.add('active');\n                    Icon.classList.add('fa-times');\n                    Icon.classList.remove('fa-headphones');\n                    text.classList.add('hide');\n                } else {\n                    player.classList.remove('active');\n                    Icon.classList.add('fa-headphones');\n                    Icon.classList.remove('fa-times');\n                    text.classList.remove('hide');\n                }\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/model/seneste.js":
/*!*********************************!*\
  !*** ./src/js/model/seneste.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Latest = function () {\n    function Latest() {\n        _classCallCheck(this, Latest);\n    }\n\n    _createClass(Latest, [{\n        key: \"getResults\",\n        value: function () {\n            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var Seneste, monthNames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, artikel, date;\n\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                _context.prev = 0;\n                                _context.next = 3;\n                                return (0, _axios2.default)(\"http://waih.dk/WaihAPI/index/get/\");\n\n                            case 3:\n                                Seneste = _context.sent;\n\n                                this.results = Seneste.data;\n                                monthNames = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"Maj\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Okt\", \"Nov\", \"Dec\"];\n                                _iteratorNormalCompletion = true;\n                                _didIteratorError = false;\n                                _iteratorError = undefined;\n                                _context.prev = 9;\n\n                                for (_iterator = this.results.articles[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                                    artikel = _step.value;\n                                    date = new Date(artikel.date.replace(' ', 'T'));\n\n                                    artikel.date = (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + \". \" + monthNames[date.getMonth()] + \" \" + date.getFullYear() + \" \" + date.getHours() + \":\" + (date.getMinutes() === 0 ? '0' + date.getMinutes() : date.getMinutes());\n                                }\n                                _context.next = 17;\n                                break;\n\n                            case 13:\n                                _context.prev = 13;\n                                _context.t0 = _context[\"catch\"](9);\n                                _didIteratorError = true;\n                                _iteratorError = _context.t0;\n\n                            case 17:\n                                _context.prev = 17;\n                                _context.prev = 18;\n\n                                if (!_iteratorNormalCompletion && _iterator.return) {\n                                    _iterator.return();\n                                }\n\n                            case 20:\n                                _context.prev = 20;\n\n                                if (!_didIteratorError) {\n                                    _context.next = 23;\n                                    break;\n                                }\n\n                                throw _iteratorError;\n\n                            case 23:\n                                return _context.finish(20);\n\n                            case 24:\n                                return _context.finish(17);\n\n                            case 25:\n                                _context.next = 30;\n                                break;\n\n                            case 27:\n                                _context.prev = 27;\n                                _context.t1 = _context[\"catch\"](0);\n\n                                alert(_context.t1);\n\n                            case 30:\n                            case \"end\":\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, this, [[0, 27], [9, 13, 17, 25], [18,, 20, 24]]);\n            }));\n\n            function getResults() {\n                return _ref.apply(this, arguments);\n            }\n\n            return getResults;\n        }()\n    }]);\n\n    return Latest;\n}();\n\nexports.default = Latest;\n\n//# sourceURL=webpack:///./src/js/model/seneste.js?");

/***/ })

/******/ });