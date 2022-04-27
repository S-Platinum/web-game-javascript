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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/domain-browser/source/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/domain-browser/source/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file should be ES5 compatible
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */


module.exports = (function () {
	// Import Events
	var events = __webpack_require__(/*! events */ "./node_modules/events/events.js")

	// Export Domain
	var domain = {}
	domain.createDomain = domain.create = function () {
		var d = new events.EventEmitter()

		function emitError (e) {
			d.emit('error', e)
		}

		d.add = function (emitter) {
			emitter.on('error', emitError)
		}
		d.remove = function (emitter) {
			emitter.removeListener('error', emitError)
		}
		d.bind = function (fn) {
			return function () {
				var args = Array.prototype.slice.call(arguments)
				try {
					fn.apply(null, args)
				}
				catch (err) {
					emitError(err)
				}
			}
		}
		d.intercept = function (fn) {
			return function (err) {
				if ( err ) {
					emitError(err)
				}
				else {
					var args = Array.prototype.slice.call(arguments, 1)
					try {
						fn.apply(null, args)
					}
					catch (err) {
						emitError(err)
					}
				}
			}
		}
		d.run = function (fn) {
			try {
				fn()
			}
			catch (err) {
				emitError(err)
			}
			return this
		}
		d.dispose = function () {
			this.removeAllListeners()
			return this
		}
		d.enter = d.exit = function () {
			return this
		}
		return d
	}
	return domain
}).call(this)


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./src/img/Fall.png":
/*!**************************!*\
  !*** ./src/img/Fall.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b446a48eb33ce56b4bc73c3b498831b4.png");

/***/ }),

/***/ "./src/img/Jump.png":
/*!**************************!*\
  !*** ./src/img/Jump.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "137ef1108ec1c7fe58ba20e129b27770.png");

/***/ }),

/***/ "./src/img/Run.png":
/*!*************************!*\
  !*** ./src/img/Run.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b9dbc6e6bb8693be90146422103709af.png");

/***/ }),

/***/ "./src/img/Runl.png":
/*!**************************!*\
  !*** ./src/img/Runl.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1b73eb5e1c018ee027b2e18eb82b205c.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f3d4a0b4fd7618ef1c733cf716bbe157.png");

/***/ }),

/***/ "./src/img/btnLeft.png":
/*!*****************************!*\
  !*** ./src/img/btnLeft.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e8d78f1198621d004a9c7554fce31fdf.png");

/***/ }),

/***/ "./src/img/btnRigh.png":
/*!*****************************!*\
  !*** ./src/img/btnRigh.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "de565826a5b3547c50db211319f52c77.png");

/***/ }),

/***/ "./src/img/btnUp.png":
/*!***************************!*\
  !*** ./src/img/btnUp.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "59373134c349ad8b5607dffff4a935e2.png");

/***/ }),

/***/ "./src/img/coin.png":
/*!**************************!*\
  !*** ./src/img/coin.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eca1c9463527b804299bc6a1e78458ad.png");

/***/ }),

/***/ "./src/img/idle.png":
/*!**************************!*\
  !*** ./src/img/idle.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6dca1e696c1426e533e74ed653d2a7c6.png");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4beb1e037cb8c00aa76088f8e167d409.png");

/***/ }),

/***/ "./src/img/palacebase.png":
/*!********************************!*\
  !*** ./src/img/palacebase.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14072388d3fafdf5fa7a3421759e1d6d.png");

/***/ }),

/***/ "./src/img/palacelevel1.png":
/*!**********************************!*\
  !*** ./src/img/palacelevel1.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "561a97fdb30a8ff46adb19244b78e979.png");

/***/ }),

/***/ "./src/img/palacelevel2.png":
/*!**********************************!*\
  !*** ./src/img/palacelevel2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "757b0592c4ba68ee7bb442c860fddaf1.png");

/***/ }),

/***/ "./src/img/palaceroof.png":
/*!********************************!*\
  !*** ./src/img/palaceroof.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cc5161463cada8fe1246d5051f7a93d1.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9da4ad263074b7451d298d9d79951489.png");

/***/ }),

/***/ "./src/img/platformBigTall.png":
/*!*************************************!*\
  !*** ./src/img/platformBigTall.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "33a917d4ec9d8b4562c1057754b41f62.png");

/***/ }),

/***/ "./src/img/platformEnd.png":
/*!*********************************!*\
  !*** ./src/img/platformEnd.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80fb5175c5f06a892859e1e4f127d31e.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f8bf9d435c350df8b9328f4d30911cd7.png");

/***/ }),

/***/ "./src/img/roooftop.png":
/*!******************************!*\
  !*** ./src/img/roooftop.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "94e0d46326700755ba333afffa331365.png");

/***/ }),

/***/ "./src/img/shop.png":
/*!**************************!*\
  !*** ./src/img/shop.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c609dd4aae9185dfa3d1502e5a67af9b.png");

/***/ }),

/***/ "./src/img/singlecoin.png":
/*!********************************!*\
  !*** ./src/img/singlecoin.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e0b2591615eabb9766ec512e619dc441.png");

/***/ }),

/***/ "./src/img/stackstones.png":
/*!*********************************!*\
  !*** ./src/img/stackstones.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2ae5690c5b1b66fe3d874049cac27d67.png");

/***/ }),

/***/ "./src/img/trees.png":
/*!***************************!*\
  !*** ./src/img/trees.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b0331f4ee83170efdfa054db531ee94.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_platformBigTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformBigTall.png */ "./src/img/platformBigTall.png");
/* harmony import */ var _img_platformEnd_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/platformEnd.png */ "./src/img/platformEnd.png");
/* harmony import */ var _img_stackstones_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/stackstones.png */ "./src/img/stackstones.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_palacebase_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/palacebase.png */ "./src/img/palacebase.png");
/* harmony import */ var _img_palacelevel1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/palacelevel1.png */ "./src/img/palacelevel1.png");
/* harmony import */ var _img_palacelevel2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/palacelevel2.png */ "./src/img/palacelevel2.png");
/* harmony import */ var _img_palaceroof_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/palaceroof.png */ "./src/img/palaceroof.png");
/* harmony import */ var _img_roooftop_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/roooftop.png */ "./src/img/roooftop.png");
/* harmony import */ var _img_trees_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/trees.png */ "./src/img/trees.png");
/* harmony import */ var _img_shop_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/shop.png */ "./src/img/shop.png");
/* harmony import */ var _img_idle_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/idle.png */ "./src/img/idle.png");
/* harmony import */ var _img_Run_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/Run.png */ "./src/img/Run.png");
/* harmony import */ var _img_Runl_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/Runl.png */ "./src/img/Runl.png");
/* harmony import */ var _img_Jump_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/Jump.png */ "./src/img/Jump.png");
/* harmony import */ var _img_Fall_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/Fall.png */ "./src/img/Fall.png");
/* harmony import */ var _img_coin_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/coin.png */ "./src/img/coin.png");
/* harmony import */ var _img_singlecoin_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/singlecoin.png */ "./src/img/singlecoin.png");
/* harmony import */ var _img_btnUp_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/btnUp.png */ "./src/img/btnUp.png");
/* harmony import */ var _img_btnLeft_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/btnLeft.png */ "./src/img/btnLeft.png");
/* harmony import */ var _img_btnRigh_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/btnRigh.png */ "./src/img/btnRigh.png");
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! domain */ "./node_modules/domain-browser/source/index.js");
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(domain__WEBPACK_IMPORTED_MODULE_24__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

























 // console.log(platform)
//Create Canvas

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);
var gravity = 1.5; //Create Player

var Player = /*#__PURE__*/function () {
  function Player(_ref) {
    var image = _ref.image,
        _ref$frame = _ref.frame,
        frame = _ref$frame === void 0 ? 1 : _ref$frame,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? 1 : _ref$scale;

    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 150,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.frame = frame;
    this.scale = scale;
    this.frameCurrent = 0;
    this.frameElapsed = 0;
    this.frameHold = 5;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frameCurrent * (this.image.width / this.frame) + 80, 69, this.image.width / this.frame - 162, this.image.height - 137, this.position.x, this.position.y, 40, 80 //(this.image.width / this.frame) *this.scale,
      //this.image.height* this.scale
      );
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.frameElapsed++;

      if (this.frameElapsed % this.frameHold === 0) {
        if (this.frameCurrent < this.frame - 1) {
          this.frameCurrent++;
        } else this.frameCurrent = 0;
      }

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}(); //Create Coin


var Coin = /*#__PURE__*/function () {
  function Coin(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image,
        _ref2$frame = _ref2.frame,
        frame = _ref2$frame === void 0 ? 8 : _ref2$frame,
        _ref2$scale = _ref2.scale,
        scale = _ref2$scale === void 0 ? 1 : _ref2$scale;

    _classCallCheck(this, Coin);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.frame = frame;
    this.scale = scale;
    this.frameCurrent = 0;
    this.frameElapsed = 0;
    this.frameHold = 5;
  }

  _createClass(Coin, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frameCurrent * (this.image.width / this.frame), 0, this.image.width / this.frame, this.image.height, this.position.x, this.position.y, 30, 30);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.frameElapsed++;

      if (this.frameElapsed % this.frameHold === 0) {
        if (this.frameCurrent < this.frame - 1) {
          this.frameCurrent++;
        } else this.frameCurrent = 0;
      }
    }
  }]);

  return Coin;
}(); //Create Platform


var Platform = /*#__PURE__*/function () {
  function Platform(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image,
        _ref3$frame = _ref3.frame,
        frame = _ref3$frame === void 0 ? 1 : _ref3$frame,
        _ref3$scale = _ref3.scale,
        scale = _ref3$scale === void 0 ? 1 : _ref3$scale;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.frame = frame;
    this.scale = scale;
    this.frameCurrent = 0;
  } //Draw Platform


  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); //Create Decorative Background


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image,
        _ref4$frame = _ref4.frame,
        frame = _ref4$frame === void 0 ? 1 : _ref4$frame,
        _ref4$scale = _ref4.scale,
        scale = _ref4$scale === void 0 ? 1 : _ref4$scale;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.frame = frame;
    this.scale = scale;
    this.frameCurrent = 0;
    this.frameElapsed = 0;
    this.frameHold = 1;
  } //Draw Generic Objects


  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frameCurrent * (this.image.width / this.frame), 0, this.image.width / this.frame, this.image.height, this.position.x, this.position.y, this.image.width / this.frame * this.scale, this.image.height * this.scale);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.frameElapsed++;

      if (this.frameElapsed % this.frameHold === 0) {
        if (this.frameCurrent < this.frame - 1) {
          this.frameCurrent++;
        } else this.frameCurrent = 0;
      }
    }
  }]);

  return GenericObject;
}(); //Static Structures


var staticStructure = /*#__PURE__*/function () {
  function staticStructure(_ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        image = _ref5.image,
        _ref5$frame = _ref5.frame,
        frame = _ref5$frame === void 0 ? 1 : _ref5$frame,
        _ref5$scale = _ref5.scale,
        scale = _ref5$scale === void 0 ? 1 : _ref5$scale;

    _classCallCheck(this, staticStructure);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.frame = frame;
    this.scale = scale;
    this.frameCurrent = 0;
    this.frameElapsed = 0;
    this.frameHold = 5;
  } //Draw Static Structures


  _createClass(staticStructure, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frameCurrent * (this.image.width / this.frame), 0, this.image.width / this.frame, this.image.height, this.position.x, this.position.y, this.image.width / this.frame * this.scale, this.image.height * this.scale);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.frameElapsed++;

      if (this.frameElapsed % this.frameHold === 0) {
        if (this.frameCurrent < this.frame - 1) {
          this.frameCurrent++;
        } else this.frameCurrent = 0;
      }
    }
  }]);

  return staticStructure;
}(); //Image creation


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var platformBigTallImage = createImage(_img_platformBigTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var platformEndImage = createImage(_img_platformEnd_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var stackStones = createImage(_img_stackstones_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var palacebases = createImage(_img_palacebase_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var palacelevel1s = createImage(_img_palacelevel1_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var palacelevel2s = createImage(_img_palacelevel2_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var palaceroofs = createImage(_img_palaceroof_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
var roooftops = createImage(_img_roooftop_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
var shops = createImage(_img_shop_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
var idles = createImage(_img_idle_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
var runs = createImage(_img_Run_png__WEBPACK_IMPORTED_MODULE_15__["default"]);
var runls = createImage(_img_Runl_png__WEBPACK_IMPORTED_MODULE_16__["default"]);
var jumps = createImage(_img_Jump_png__WEBPACK_IMPORTED_MODULE_17__["default"]);
var falls = createImage(_img_Fall_png__WEBPACK_IMPORTED_MODULE_18__["default"]);
var coinsImage = createImage(_img_coin_png__WEBPACK_IMPORTED_MODULE_19__["default"]);
var player = new Player({
  x: 150,
  y: 100,
  image: idles,
  frame: 8,
  scale: 1
});
var coins = [];
var platforms = [];
var genericObjects = [];
var staticStructures = [];
var score = 0;
var mousex = 0;
var mousey = 0;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
var scrollOffset = 0;
var isPressed = false; // let btnRight = document.createElement("button");
//   // console.log('up')
// document.body.appendChild(btnRight);
//initialization

function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  platformBigTallImage = createImage(_img_platformBigTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  platformEndImage = createImage(_img_platformEnd_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  palacebases = createImage(_img_palacebase_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
  palacelevel1s = createImage(_img_palacelevel1_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
  palacelevel2s = createImage(_img_palacelevel2_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
  palaceroofs = createImage(_img_palaceroof_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
  roooftops = createImage(_img_roooftop_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
  stackStones = createImage(_img_stackstones_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  shops = createImage(_img_shop_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
  idles = createImage(_img_idle_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
  runs = createImage(_img_Run_png__WEBPACK_IMPORTED_MODULE_15__["default"]);
  runls = createImage(_img_Runl_png__WEBPACK_IMPORTED_MODULE_16__["default"]);
  jumps = createImage(_img_Jump_png__WEBPACK_IMPORTED_MODULE_17__["default"]);
  falls = createImage(_img_Fall_png__WEBPACK_IMPORTED_MODULE_18__["default"]);
  coinsImage = createImage(_img_coin_png__WEBPACK_IMPORTED_MODULE_19__["default"]);
  score = 0;
  player = new Player({
    x: 150,
    y: 100,
    image: idles,
    frame: 8,
    scale: 1
  });
  coins = [new Coin({
    x: 250,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 250,
    y: 100,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 400,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 530,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 750,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 880,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1037,
    y: 140,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1037,
    y: 300,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1180,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1310,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1567,
    y: 140,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1567,
    y: 300,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1810,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 1940,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 2180,
    y: 300,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 2480,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 2590,
    y: 340,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 2620,
    y: 240,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 2710,
    y: 240,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 2800,
    y: 140,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 2900,
    y: 140,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3000,
    y: 300,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3050,
    y: 250,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3100,
    y: 200,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3150,
    y: 250,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3200,
    y: 300,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3510,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3609,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3708,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3807,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3906,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4005,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4104,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4203,
    y: 380,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3609,
    y: 220,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3708,
    y: 220,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3807,
    y: 220,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3906,
    y: 220,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4005,
    y: 220,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4104,
    y: 220,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3609,
    y: 135,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3708,
    y: 135,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3807,
    y: 135,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3906,
    y: 135,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4005,
    y: 135,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4104,
    y: 135,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3708,
    y: 40,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3807,
    y: 40,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 3906,
    y: 40,
    image: coinsImage,
    frame: 8,
    scale: 1
  }), new Coin({
    x: 4005,
    y: 40,
    image: coinsImage,
    frame: 8,
    scale: 1
  })];
  platforms = [new Platform({
    x: 0,
    y: 400,
    image: platformImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width,
    y: 400,
    image: platformImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 400,
    image: platformImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 400,
    image: platformImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width * 4 + 400,
    y: 200,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 4 + platformSmallTallImage.width + 500,
    y: 400,
    image: platformImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width * 5 + platformSmallTallImage.width + 700,
    y: 200,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 5 + platformSmallTallImage.width * 2 + 900,
    y: 400,
    image: platformImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width * 6 + platformSmallTallImage.width * 2 + 1100,
    y: 360,
    image: stackStones
  }), new Platform({
    x: platformImage.width * 7 + platformSmallTallImage.width * 2 + stackStones.width + 1200,
    y: 400,
    image: platformImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width * 8 + platformSmallTallImage.width * 2 + stackStones.width + 1200,
    y: 300,
    image: platformBigTallImage,
    frame: 1,
    scale: 1
  }), new Platform({
    x: platformImage.width * 9 + platformSmallTallImage.width * 2 + stackStones.width + 1200,
    y: 200,
    image: platformBigTallImage,
    frame: 1,
    scale: 1
  }), //Palace
  new Platform({
    x: 3470,
    y: 430,
    image: palacebases,
    scale: 1
  }), new Platform({
    x: 3535,
    y: 280,
    image: palacelevel1s,
    scale: 1
  }), new Platform({
    x: 3575,
    y: 175,
    image: palacelevel2s,
    scale: 1
  }), new Platform({
    x: 3695,
    y: 90,
    image: roooftops,
    scale: 1
  }), new Platform({
    x: 3655,
    y: 92,
    image: palaceroofs,
    scale: 1
  }), //Platform End 
  new Platform({
    x: 4500,
    y: 560,
    image: platformEndImage
  }), new Platform({
    x: 4750,
    y: 560,
    image: platformEndImage
  }), new Platform({
    x: 5000,
    y: 560,
    image: platformEndImage
  })];
  staticStructures = [new staticStructure({
    x: 5000,
    y: 370,
    image: shops,
    frame: 6,
    scale: 1.5
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
    frame: 1,
    scale: 1
  }), new GenericObject({
    x: 9146,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_6__["default"])
  }), new GenericObject({
    x: 400,
    y: 80,
    image: createImage(_img_trees_png__WEBPACK_IMPORTED_MODULE_12__["default"])
  })];
  scrollOffset = 0;
} //Animation loop


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.update();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  staticStructures.forEach(function (staticStructure) {
    staticStructure.update();
  });
  coins.forEach(function (coin) {
    coin.update();
  });
  player.update();
  c.drawImage(createImage(_img_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]), 0, 0);
  c.drawImage(createImage(_img_singlecoin_png__WEBPACK_IMPORTED_MODULE_20__["default"]), 5, 5, 20, 20);
  c.font = '20px Comic Sans MS';
  c.fillStyle = 'red';
  c.fillText(score, 30, 25); //console.log( player.position.x,player.position.y,platformImage.width)

  var upBtn1 = c.drawImage(createImage(_img_btnUp_png__WEBPACK_IMPORTED_MODULE_21__["default"]), 5, 415, 80, 80);
  var upBtn2 = c.drawImage(createImage(_img_btnUp_png__WEBPACK_IMPORTED_MODULE_21__["default"]), 935, 415, 80, 80);
  var leftBtn = c.drawImage(createImage(_img_btnLeft_png__WEBPACK_IMPORTED_MODULE_22__["default"]), 5, 500, 80, 80);
  var rightBtn = c.drawImage(createImage(_img_btnRigh_png__WEBPACK_IMPORTED_MODULE_23__["default"]), 935, 500, 80, 80); // Player X Movements

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 140 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x -= player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      coins.forEach(function (coin) {
        coin.position.x -= player.speed;
      });
      staticStructures.forEach(function (staticStructure) {
        staticStructure.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * .66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      coins.forEach(function (coin) {
        coin.position.x += player.speed;
      });
      staticStructures.forEach(function (staticStructure) {
        staticStructure.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * .66;
      });
    }
  } //Coin collection


  coins.forEach(function (coin, i) {
    if (player.position.y + 25 >= coin.position.y - 30 && player.position.y + 25 <= coin.position.y + 30 && player.position.x + 20 >= coin.position.x - 30 && player.position.x + 20 <= coin.position.x + 30) {
      coins.splice(i, 1);

      if (coin.image === coinsImage) {
        score++;
      }
    } // c.fillStyle='red'
    // c.fillRect(player.position.x,player.position.y,40,80)

  }); // console.log (scrollOffset)
  //Collision detection

  platforms.forEach(function (platform) {
    if (player.position.y + 57 <= platform.position.y && player.position.y + 57 + player.velocity.y >= platform.position.y && player.position.x + 35 >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
      player.image = idles;
      player.frame = 8;
      player.scale = 2.5;
    } // c.fillStyle ='blue'
    // c.fillRect(platform.position.x,platform.position.y,platform.width,platform.height)

  });

  if (keys.up.pressed || keys.left.pressed || keys.right.pressed) {
    if (keys.right.pressed) {
      player.image = runs;
      player.frame = 8;
      player.scale = 2.5;
    } else if (keys.left.pressed) {
      player.image = runls;
      player.frame = 8;
      player.scale = 2.5;
    } else if (keys.up.pressed && player.velocity.y < 0) {
      player.image = jumps;
      player.frame = 2;
      player.scale = 2.5;
    } else if (player.velocity.y > 0) {
      player.image = falls;
      player.frame = 2;
      player.scale = 2.5;
    } else {
      player.image = idles;
      player.frame = 8;
      player.scale = 2.5;
    }
  } //Win Condition


  if (scrollOffset > 4500) {
    console.log('You Win');
    $('#winModal').modal('show');
    init();
  } //Lose Condition


  if (player.position.y > canvas.height) {
    $(document).ready(function () {
      $('.toast').toast('show');
      setTimeout(function () {
        console.log('You Lose');
      }, 2000);
    });
    init();
  }
}

init();
animate(); //Mouse controls

window.addEventListener('mousedown', function (e) {
  mousex = e.offsetX;
  mousey = e.offsetY;
  isPressed = true;
  console.log(mousex, mousey);

  if (isPressed) {
    if ((mousex >= 5 && mousex <= 85 || mousex >= 935 && mousex <= 1015) && mousey >= 415 && mousey <= 495) {
      // console.log('up')
      console.log(mousex, mousey);
      keys.up.pressed = true;
      player.velocity.y -= 20;
    } else if (mousex >= 935 && mousex <= 1015 && mousey >= 500 && mousey <= 580) {
      //console.log('right')
      if (player.position.x < 400) {
        player.velocity.x = player.speed;
      } else {
        scrollOffset += player.speed;
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        coins.forEach(function (coin) {
          coin.position.x -= player.speed;
        });
        staticStructures.forEach(function (staticStructure) {
          staticStructure.position.x -= player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= player.speed * .66;
        });
      }
    } else if (mousex >= 5 && mousex <= 85 && mousey >= 500 && mousey <= 580) {
      console.log('left');

      if (player.position.x > 0) {
        player.velocity.x -= player.speed;
      } else {
        platforms.forEach(function (platform) {
          platform.position.x += player.speed;
        });
        coins.forEach(function (coin) {
          coin.position.x += player.speed;
        });
        staticStructures.forEach(function (staticStructure) {
          staticStructure.position.x += player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += player.speed * .66;
        });
      }
    }
  }
});
window.addEventListener('mouseup', function (e) {
  if (ispressed === true) {
    mousex = 0;
    mousey = 0;
    isPressed = false;
  }
}); //

addEventListener('keydown', function (_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    //Left Handed Player Keyboard AWSD
    case 65:
      // console.log('left')
      keys.left.pressed = true;
      break;

    case 68:
      // console.log('right')
      keys.right.pressed = true;
      break;

    case 87:
      // console.log('up')
      keys.up.pressed = true;
      player.velocity.y -= 20;
      break;
    //Right Handed Player Arrow Keyboard 

    case 37:
      // console.log('left')
      keys.left.pressed = true;
      break;

    case 39:
      // console.log('right')
      keys.right.pressed = true;
      break;

    case 38:
      // console.log('up')
      keys.up.pressed = true;
      player.velocity.y -= 20;
      break;
  }
});
addEventListener('keyup', function (_ref7) {
  var keyCode = _ref7.keyCode;

  switch (keyCode) {
    //Left Handed Player Keyboard AWSD
    case 65:
      // console.log('left')
      keys.left.pressed = false;
      player.speed = 5;
      break;

    case 68:
      // console.log('right')
      keys.right.pressed = false;
      player.speed = 5;
      break;

    case 87:
      // console.log('up')
      keys.up.pressed = false;
      break;
    //Right Handed Player Arrow Keyboard 

    case 37:
      // console.log('left')
      keys.left.pressed = false;
      player.speed = 5;
      break;

    case 39:
      // console.log('right')
      keys.right.pressed = false;
      player.speed = 5;
      break;

    case 38:
      // console.log('up')
      keys.up.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map