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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"main": 0
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  var _this = this;

  var headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  var contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';
  var paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;

  var _loop = function _loop(i) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i]).click(function () {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i].nextElementSibling).toggleClass(contentActive);

      if (_this[i].classList.contains(headActive)) {
        _this[i].nextElementSibling.style.maxHeight = _this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        _this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  };

  for (var i = 0; i < this.length; i++) {
    _loop(i);
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/blocks/modules/actions.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/blocks/modules/core.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (var i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  var swap = this[i];
  var objLength = Object.keys(this).length;

  for (var _i = 0; _i < objLength; _i++) {
    delete this[_i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  var _this = this;

  var parent = this[0].parentNode;

  var childs = _toConsumableArray(parent.children);

  var findMyIndex = function findMyIndex(item) {
    return item == _this[0];
  };

  return childs.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  var numberOfItems = 0;
  var counter = 0;
  var copyObj = Object.assign({}, this);

  for (var i = 0; i < copyObj.length; i++) {
    var arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }

    for (var j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  var objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  var counter = 0;

  for (var i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;
  }

  var objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  var numberOfItems = 0;
  var counter = 0;
  var copyObj = Object.assign({}, this);

  for (var i = 0; i < copyObj.length; i++) {
    var arr = copyObj[i].parentNode.children;

    for (var j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  var objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/blocks/modules/carousel/carousel.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/carousel/carousel.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  var _this = this;

  var _loop = function _loop(i) {
    var width = window.getComputedStyle(_this[i].querySelector('.carousel-inner')).width;

    var slides = _this[i].querySelectorAll('.carousel-item');

    var slidesField = _this[i].querySelector('.carousel-slides');

    var dots = _this[i].querySelectorAll('.carousel-indicators li');

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(function (slide) {
      slide.style.width = width;
    });
    var offset = 0;
    var slideIndex = 0;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i].querySelector('[data-slide="next"]')).click(function (e) {
      e.preventDefault();

      if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, '');
      }

      slidesField.style.transform = "translateX(-".concat(offset, "px)");

      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      dots.forEach(function (dot) {
        return dot.classList.remove('active');
      });
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i].querySelector('[data-slide="prev"]')).click(function (e) {
      e.preventDefault();

      if (offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }

      slidesField.style.transform = "translateX(-".concat(offset, "px)");

      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }

      dots.forEach(function (dot) {
        return dot.classList.remove('active');
      });
      dots[slideIndex].classList.add('active');
    });

    var sliderId = _this[i].getAttribute('id');

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(sliderId, " .carousel-indicators li")).click(function (e) {
      var slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, '') * slideTo;
      slidesField.style.transform = "translateX(-".concat(offset, "px)");
      dots.forEach(function (dot) {
        return dot.classList.remove('active');
      });
      dots[slideIndex].classList.add('active');
    });
  };

  for (var i = 0; i < this.length; i++) {
    _loop(i);
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').carousel();

/***/ }),

/***/ "./src/blocks/modules/classes.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (var i = 0; i < this.length; i++) {
    var _this$i$classList;

    (_this$i$classList = this[i].classList).add.apply(_this$i$classList, arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (var i = 0; i < this.length; i++) {
    var _this$i$classList2;

    (_this$i$classList2 = this[i].classList).remove.apply(_this$i$classList2, arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/blocks/modules/core.js":
/*!************************************!*\
  !*** ./src/blocks/modules/core.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $ = function $(selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/blocks/modules/display.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (var i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (var i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (var i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/blocks/modules/dropdown/dropdown.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/dropdown/dropdown.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  var _this = this;

  var _loop = function _loop(i) {
    var id = _this[i].getAttribute('id');

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i]).click(function () {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle-id=\"".concat(id, "\"]")).fadeToggle(300);
    });
  };

  for (var i = 0; i < this.length; i++) {
    _loop(i);
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/blocks/modules/effects.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  var timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    var timeElapsed = time - timeStart;
    var complection = Math.min(timeElapsed / dur, 1);
    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  var _this = this;

  var _loop = function _loop(i) {
    _this[i].style.display = display || 'block';

    var _fadeIn = function _fadeIn(complection) {
      _this[i].style.opacity = complection;
    };

    var ani = _this.animateOverTime(dur, _fadeIn, fin);

    requestAnimationFrame(ani);
  };

  for (var i = 0; i < this.length; i++) {
    _loop(i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  var _this2 = this;

  var _loop2 = function _loop2(i) {
    var _fadeOut = function _fadeOut(complection) {
      _this2[i].style.opacity = 1 - complection;

      if (complection === 1) {
        _this2[i].style.display = 'none';
      }
    };

    var ani = _this2.animateOverTime(dur, _fadeOut, fin);

    requestAnimationFrame(ani);
  };

  for (var i = 0; i < this.length; i++) {
    _loop2(i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  var _this3 = this;

  var _loop3 = function _loop3(i) {
    if (window.getComputedStyle(_this3[i]).display === 'none') {
      _this3[i].style.display = display || 'block';

      var _fadeIn = function _fadeIn(complection) {
        _this3[i].style.opacity = complection;
      };

      var ani = _this3.animateOverTime(dur, _fadeIn, fin);

      requestAnimationFrame(ani);
    } else {
      var _fadeOut = function _fadeOut(complection) {
        _this3[i].style.opacity = 1 - complection;

        if (complection === 1) {
          _this3[i].style.display = 'none';
        }
      };

      var _ani = _this3.animateOverTime(dur, _fadeOut, fin);

      requestAnimationFrame(_ani);
    }
  };

  for (var i = 0; i < this.length; i++) {
    _loop3(i);
  }

  return this;
};

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/footer/forms/checkNumInputs.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/footer/forms/checkNumInputs.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var checkNumInputs = function checkNumInputs(selector) {
  var numInputs = document.querySelectorAll(selector);
  numInputs.forEach(function (item) {
    item.addEventListener('input', function () {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkNumInputs);

/***/ }),

/***/ "./src/blocks/modules/footer/forms/forms.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/footer/forms/forms.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkNumInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkNumInputs */ "./src/blocks/modules/footer/forms/checkNumInputs.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var forms = function forms(state) {
  var form = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('input');
  Object(_checkNumInputs__WEBPACK_IMPORTED_MODULE_0__["default"])('input[name="user_phone"]');
  var message = {
    loading: 'Loading...',
    success: 'Thank you! We will contact you soon',
    failure: 'Something is going wrong...'
  };

  var postData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, data) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              document.querySelector('.status').textContent = message.loading;
              _context.next = 3;
              return fetch(url, {
                method: "POST",
                body: data
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.text();

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function postData(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var clearInputs = function clearInputs() {
    inputs.forEach(function (item) {
      item.value = '';
    });
  };

  form.forEach(function (item) {
    item.addEventListener('submit', function (e) {
      console.log("111");
      e.preventDefault();
      var statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      var formData = new FormData(item);

      if (item.getAttribute('data-calc') === "end") {
        for (var key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData).then(function (res) {
        console.log(res);
        statusMessage.textContent = message.success;
      }).catch(function () {
        return statusMessage.textContent = message.failure;
      }).finally(function () {
        clearInputs();
        setTimeout(function () {
          statusMessage.remove();
        }, 5000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/blocks/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/blocks/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (var i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (var i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (var i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/images/images.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/images/images.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var images = function images() {
  var imgPopup = document.createElement('div'),
      workSection = document.querySelector('.works'),
      bigImage = document.createElement('img');
  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  imgPopup.appendChild(bigImage);
  workSection.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target && target.classList.contains('lupa')) {
      imgPopup.style.display = 'flex';
      var path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/blocks/modules/lib.js":
/*!***********************************!*\
  !*** ./src/blocks/modules/lib.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/blocks/modules/core.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/blocks/modules/display.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/blocks/modules/classes.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers */ "./src/blocks/modules/handlers.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/blocks/modules/actions.js");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects */ "./src/blocks/modules/effects.js");
/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown/dropdown */ "./src/blocks/modules/dropdown/dropdown.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _tab_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab/tab */ "./src/blocks/modules/tab/tab.js");
/* harmony import */ var _carousel_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel/carousel */ "./src/blocks/modules/carousel/carousel.js");
/* harmony import */ var _accordion_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timer/timer */ "./src/blocks/modules/timer/timer.js");
/* harmony import */ var _footer_forms_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/forms/forms */ "./src/blocks/modules/footer/forms/forms.js");
/* harmony import */ var _images_images__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/images */ "./src/blocks/modules/images/images.js");














/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  Object(_footer_forms_forms__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_images_images__WEBPACK_IMPORTED_MODULE_13__["default"])();
});

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/blocks/modules/core.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  var _this = this;

  var _loop = function _loop(i) {
    var target = _this[i].getAttribute('data-target');

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i]).click(function (e) {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });
    var closeElements = document.querySelectorAll("".concat(target, " [data-close]"));
    closeElements.forEach(function (elem) {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(function () {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(function (e) {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  };

  for (var i = 0; i < this.length; i++) {
    _loop(i);
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      text = _ref.text,
      btns = _ref.btns;

  for (var i = 0; i < this.length; i++) {
    var _modal$querySelector;

    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); // btns = {count: num, settings: [[text, classNames=[], close, cb]]}

    var buttons = [];

    for (var j = 0; j < btns.count; j++) {
      var _btn$classList;

      var btn = document.createElement('button');

      (_btn$classList = btn.classList).add.apply(_btn$classList, ['btn'].concat(_toConsumableArray(btns.settings[j][1])));

      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = "\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <button class=\"close\" data-close>\n                    <span>&times;</span>\n                </button>\n                <div class=\"modal-header\">\n                    <div class=\"modal-title\">\n                        ".concat(text.title, "\n                    </div>\n                </div>\n                <div class=\"modal-body\">\n                    ").concat(text.body, "\n                </div>\n                <div class=\"modal-footer\">\n                    \n                </div>\n            </div>\n        </div>\n        ");

    (_modal$querySelector = modal.querySelector(".modal-footer")).append.apply(_modal$querySelector, buttons);

    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/blocks/modules/tab/tab.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/tab/tab.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/blocks/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  var _this = this;

  var _loop = function _loop(i) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i]).on('click', function () {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_this[i]).index()).addClass('tab-content--active');
    });
  };

  for (var i = 0; i < this.length; i++) {
    _loop(i);
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/blocks/modules/timer/timer.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/timer/timer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var timer = function timer(id, deadline) {
  var addZero = function addZero(num) {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(selector, endtime) {
    var timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      var t = getTimeRemaining(endtime);
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

/* harmony default export */ __webpack_exports__["default"] = (timer);
window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var deadline = '2020-07-01';
  timer('.container1', deadline);
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_modules_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blocks/modules/lib */ "./src/blocks/modules/lib.js");




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");




/***/ })

/******/ });
//# sourceMappingURL=main.js.map