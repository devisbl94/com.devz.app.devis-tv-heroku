/**
 * App version: 1.0.0
 * SDK version: 4.8.1
 * CLI version: 2.7.2
 * 
 * Generated: Sat, 26 Mar 2022 00:09:55 GMT
 */

var APP_com_devz_app_devis_tv = (function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var settings = {};
  var subscribers = {};
  var initSettings = function initSettings(appSettings, platformSettings) {
    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
    settings['user'] = {};
  };

  var publish = function publish(key, value) {
    subscribers[key] && subscribers[key].forEach(function (subscriber) {
      return subscriber(value);
    });
  };

  var dotGrab = function dotGrab() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    var keys = key.split('.');

    for (var i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }

    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };

  var Settings = {
    get: function get(type, key) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback;
    },
    has: function has(type, key) {
      return !!this.get(type, key);
    },
    set: function set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe: function subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe: function unsubscribe(key, callback) {
      if (callback) {
        var index = subscribers[key] && subscribers[key].findIndex(function (cb) {
          return cb === callback;
        });
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers: function clearSubscribers() {
      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(subscribers)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          delete subscribers[key];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var prepLog = function prepLog(type, args) {
    var colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };

  var Log = {
    info: function info() {
      Settings.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug: function debug() {
      Settings.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error: function error() {
      Settings.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn: function warn() {
      Settings.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  var executeAsPromise = (function (method) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var result;

    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    } // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise


    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    } // otherwise make it into a promise
    else {
      return new Promise(function (resolve, reject) {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  var sendMetric = function sendMetric(type, event, params) {
    Log.info('Sending metric', type, event, params);
  };

  var initMetrics = function initMetrics(config) {
    sendMetric = config.sendMetric;
  }; // available metric per category

  var metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play', // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  }; // error metric function (added to each category)

  var errorMetric = function errorMetric(type, message, code, visible) {
    var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = _objectSpread2({
      params: params
    }, {
      message: message,
      code: code,
      visible: visible
    });
    sendMetric(type, 'error', params);
  };

  var Metric = function Metric(type, events) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce(function (obj, event) {
      obj[event] = function (name) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = _objectSpread2(_objectSpread2(_objectSpread2({}, options), name ? {
          name: name
        } : {}), params);
        sendMetric(type, event, params);
      };

      return obj;
    }, {
      error: function error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event: function event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };

  var Metrics = function Metrics(types) {
    return Object.keys(types).reduce(function (obj, type) {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = function (url) {
        return Metric(type, types[type], {
          url: url
        });
      } : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };

  var Metrics$1 = Metrics(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var autoSetupMixin = (function (sourceObject) {
    var setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var ready = false;

    var doSetup = function doSetup() {
      if (ready === false) {
        setup();
        ready = true;
      }
    };

    return Object.keys(sourceObject).reduce(function (obj, key) {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }

      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var timeout = null;
  var easeExecution = (function (cb, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      cb();
    }, delay);
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var basePath;

  var _proxyUrl;

  var initUtils = function initUtils(config) {
    basePath = _ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));

    if (config.proxyUrl) {
      _proxyUrl = _ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset: function asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl: function proxyUrl(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _proxyUrl ? _proxyUrl + '?' + _makeQueryString(url, options) : url;
    },
    makeQueryString: function makeQueryString() {
      return _makeQueryString.apply(void 0, arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol: function ensureUrlWithProtocol() {
      return _ensureUrlWithProtocol.apply(void 0, arguments);
    }
  };

  var _ensureUrlWithProtocol = function _ensureUrlWithProtocol(url) {
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }

    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }

    return url;
  };
  var makeFullStaticPath = function makeFullStaticPath() {
    var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path; // if path is URL, we assume it's already the full static path, so we just return it

    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }

    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname); // remove possible leading dot from path

      path = path.charAt(0) === '.' ? path.substr(1) : path; // ensure path has leading slash

      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  var cleanUpPathName = function cleanUpPathName(pathname) {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    var parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };

  var _makeQueryString = function _makeQueryString(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value

    options[type] = url;
    return Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  var initProfile = function initProfile(config) {
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var lng = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];

  var mediaUrl$1 = function mediaUrl(url) {
    return url;
  };

  var initMediaPlayer = function initMediaPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(Mediaplayer, _Lightning$Component);

    var _super = _createSuper(Mediaplayer);

    function Mediaplayer() {
      _classCallCheck(this, Mediaplayer);

      return _super.apply(this, arguments);
    }

    _createClass(Mediaplayer, [{
      key: "_construct",
      value: function _construct() {
        this._skipRenderToTexture = false;
        this._metrics = null;
        this._textureMode = Settings.get('platform', 'textureMode') || false;
        Log.info('Texture mode: ' + this._textureMode);
        console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
      }
    }, {
      key: "skipRenderToTexture",
      set: function set(v) {
        this._skipRenderToTexture = v;
      }
    }, {
      key: "textureMode",
      get: function get() {
        return this._textureMode;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "_init",
      value: function _init() {
        //re-use videotag if already there
        var videoEls = document.getElementsByTagName('video');
        if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
          this.videoEl = document.createElement('video');
          this.videoEl.setAttribute('id', 'video-player');
          this.videoEl.style.position = 'absolute';
          this.videoEl.style.zIndex = '1';
          this.videoEl.style.display = 'none';
          this.videoEl.setAttribute('width', '100%');
          this.videoEl.setAttribute('height', '100%');
          this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
          document.body.appendChild(this.videoEl);
        }

        if (this.textureMode && !this._skipRenderToTexture) {
          this._createVideoTexture();
        }

        this.eventHandlers = [];
      }
    }, {
      key: "_registerListeners",
      value: function _registerListeners() {
        var _this = this;

        events.forEach(function (event) {
          var handler = function handler(e) {
            if (_this._metrics && _this._metrics[event] && typeof _this._metrics[event] === 'function') {
              _this._metrics[event]({
                currentTime: _this.videoEl.currentTime
              });
            }

            _this.fire(event, {
              videoElement: _this.videoEl,
              event: e
            });
          };

          _this.eventHandlers.push(handler);

          _this.videoEl.addEventListener(event, handler);
        });
      }
    }, {
      key: "_deregisterListeners",
      value: function _deregisterListeners() {
        var _this2 = this;

        Log.info('Deregistering event listeners MediaPlayer');
        events.forEach(function (event, index) {
          _this2.videoEl.removeEventListener(event, _this2.eventHandlers[index]);
        });
        this.eventHandlers = [];
      }
    }, {
      key: "_attach",
      value: function _attach() {
        this._registerListeners();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        this._deregisterListeners();

        this.close();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
      }
    }, {
      key: "_startUpdatingVideoTexture",
      value: function _startUpdatingVideoTexture() {
        var _this3 = this;

        if (this.textureMode && !this._skipRenderToTexture) {
          var stage = this.stage;

          if (!this._updateVideoTexture) {
            this._updateVideoTexture = function () {
              if (_this3.videoTexture.options.source && _this3.videoEl.videoWidth && _this3.active) {
                var gl = stage.gl;
                var currentTime = new Date().getTime(); // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
                // We'll fallback to fixed 30fps in this case.

                var frameCount = _this3.videoEl.webkitDecodedFrameCount;
                var mustUpdate = frameCount ? _this3._lastFrame !== frameCount : _this3._lastTime < currentTime - 30;

                if (mustUpdate) {
                  _this3._lastTime = currentTime;
                  _this3._lastFrame = frameCount;

                  try {
                    gl.bindTexture(gl.TEXTURE_2D, _this3.videoTexture.options.source);
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this3.videoEl);
                    _this3._lastFrame = _this3.videoEl.webkitDecodedFrameCount;
                    _this3.videoTextureView.visible = true;
                    _this3.videoTexture.options.w = _this3.videoEl.videoWidth;
                    _this3.videoTexture.options.h = _this3.videoEl.videoHeight;
                    var expectedAspectRatio = _this3.videoTextureView.w / _this3.videoTextureView.h;
                    var realAspectRatio = _this3.videoEl.videoWidth / _this3.videoEl.videoHeight;

                    if (expectedAspectRatio > realAspectRatio) {
                      _this3.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                      _this3.videoTextureView.scaleY = 1;
                    } else {
                      _this3.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                      _this3.videoTextureView.scaleX = 1;
                    }
                  } catch (e) {
                    Log.error('texImage2d video', e);

                    _this3._stopUpdatingVideoTexture();

                    _this3.videoTextureView.visible = false;
                  }

                  _this3.videoTexture.source.forceRenderUpdate();
                }
              }
            };
          }

          if (!this._updatingVideoTexture) {
            stage.on('frameStart', this._updateVideoTexture);
            this._updatingVideoTexture = true;
          }
        }
      }
    }, {
      key: "_stopUpdatingVideoTexture",
      value: function _stopUpdatingVideoTexture() {
        if (this.textureMode) {
          var stage = this.stage;
          stage.removeListener('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = false;
          this.videoTextureView.visible = false;

          if (this.videoTexture.options.source) {
            var gl = stage.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
        }
      }
    }, {
      key: "updateSettings",
      value: function updateSettings() {
        var _this4 = this;

        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // The Component that 'consumes' the media player.
        this._consumer = settings.consumer;

        if (this._consumer && this._consumer.getMediaplayerSettings) {
          // Allow consumer to add settings.
          settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
        }

        if (!lng.Utils.equalValues(this._stream, settings.stream)) {
          if (settings.stream && settings.stream.keySystem) {
            navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(function (keySystemAccess) {
              return keySystemAccess.createMediaKeys();
            }).then(function (createdMediaKeys) {
              return _this4.videoEl.setMediaKeys(createdMediaKeys);
            }).then(function () {
              if (settings.stream && settings.stream.src) _this4.open(settings.stream.src);
            }).catch(function () {
              console.error('Failed to set up MediaKeys');
            });
          } else if (settings.stream && settings.stream.src) {
            // This is here to be backwards compatible, will be removed
            // in future sdk release
            if (Settings.get('app', 'hls')) {
              if (!window.Hls) {
                window.Hls = /*#__PURE__*/function () {
                  function Hls() {
                    _classCallCheck(this, Hls);
                  }

                  _createClass(Hls, null, [{
                    key: "isSupported",
                    value: function isSupported() {
                      console.warn('hls-light not included');
                      return false;
                    }
                  }]);

                  return Hls;
                }();
              }

              if (window.Hls.isSupported()) {
                if (!this._hls) this._hls = new window.Hls({
                  liveDurationInfinity: true
                });

                this._hls.loadSource(settings.stream.src);

                this._hls.attachMedia(this.videoEl);

                this.videoEl.style.display = 'block';
              }
            } else {
              this.open(settings.stream.src);
            }
          } else {
            this.close();
          }

          this._stream = settings.stream;
        }

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPos);
      }
    }, {
      key: "_setHide",
      value: function _setHide(hide) {
        if (this.textureMode) {
          this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
        } else {
          this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
        }
      }
    }, {
      key: "open",
      value: function open(url) {
        var _this5 = this;

        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          hide: false,
          videoPosition: null
        };
        // prep the media url to play depending on platform (mediaPlayerplugin)
        url = mediaUrl$1(url);
        this._metrics = Metrics$1.media(url);
        Log.info('Playing stream', url);

        if (this.application.noVideo) {
          Log.info('noVideo option set, so ignoring: ' + url);
          return;
        } // close the video when opening same url as current (effectively reloading)


        if (this.videoEl.getAttribute('src') === url) {
          this.close();
        }

        this.videoEl.setAttribute('src', url); // force hide, then force show (in next tick!)
        // (fixes comcast playback rollover issue)

        this.videoEl.style.visibility = 'hidden';
        this.videoEl.style.display = 'none';
        setTimeout(function () {
          _this5.videoEl.style.display = 'block';
          _this5.videoEl.style.visibility = 'visible';
        });

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
      }
    }, {
      key: "close",
      value: function close() {
        // We need to pause first in order to stop sound.
        this.videoEl.pause();
        this.videoEl.removeAttribute('src'); // force load to reset everything without errors

        this.videoEl.load();

        this._clearSrc();

        this.videoEl.style.display = 'none';
      }
    }, {
      key: "playPause",
      value: function playPause() {
        if (this.isPlaying()) {
          this.doPause();
        } else {
          this.doPlay();
        }
      }
    }, {
      key: "muted",
      get: function get() {
        return this.videoEl.muted;
      },
      set: function set(v) {
        this.videoEl.muted = v;
      }
    }, {
      key: "loop",
      get: function get() {
        return this.videoEl.loop;
      },
      set: function set(v) {
        this.videoEl.loop = v;
      }
    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this._getState() === 'Playing';
      }
    }, {
      key: "doPlay",
      value: function doPlay() {
        this.videoEl.play();
      }
    }, {
      key: "doPause",
      value: function doPause() {
        this.videoEl.pause();
      }
    }, {
      key: "reload",
      value: function reload() {
        var url = this.videoEl.getAttribute('src');
        this.close();
        this.videoEl.src = url;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return Promise.resolve(this.videoEl.currentTime);
      }
    }, {
      key: "setPosition",
      value: function setPosition(pos) {
        this.videoEl.currentTime = pos;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return Promise.resolve(this.videoEl.duration);
      }
    }, {
      key: "seek",
      value: function seek(time) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (absolute) {
          this.videoEl.currentTime = time;
        } else {
          this.videoEl.currentTime += time;
        }
      }
    }, {
      key: "videoTextureView",
      get: function get() {
        return this.tag('Video').tag('VideoTexture');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoTextureView.texture;
      }
    }, {
      key: "_setVideoArea",
      value: function _setVideoArea(videoPos) {
        if (lng.Utils.equalValues(this._videoPos, videoPos)) {
          return;
        }

        this._videoPos = videoPos;

        if (this.textureMode) {
          this.videoTextureView.patch({
            smooth: {
              x: videoPos[0],
              y: videoPos[1],
              w: videoPos[2] - videoPos[0],
              h: videoPos[3] - videoPos[1]
            }
          });
        } else {
          var precision = this.stage.getRenderPrecision();
          this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
          this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
          this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
          this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
        }
      }
    }, {
      key: "_fireConsumer",
      value: function _fireConsumer(event, args) {
        if (this._consumer) {
          this._consumer.fire(event, args);
        }
      }
    }, {
      key: "_equalInitData",
      value: function _equalInitData(buf1, buf2) {
        if (!buf1 || !buf2) return false;
        if (buf1.byteLength != buf2.byteLength) return false;
        var dv1 = new Int8Array(buf1);
        var dv2 = new Int8Array(buf2);

        for (var i = 0; i != buf1.byteLength; i++) {
          if (dv1[i] != dv2[i]) return false;
        }

        return true;
      }
    }, {
      key: "error",
      value: function error(args) {
        this._fireConsumer('$mediaplayerError', args);

        this._setState('');

        return '';
      }
    }, {
      key: "loadeddata",
      value: function loadeddata(args) {
        this._fireConsumer('$mediaplayerLoadedData', args);
      }
    }, {
      key: "play",
      value: function play(args) {
        this._fireConsumer('$mediaplayerPlay', args);
      }
    }, {
      key: "playing",
      value: function playing(args) {
        this._fireConsumer('$mediaplayerPlaying', args);

        this._setState('Playing');
      }
    }, {
      key: "canplay",
      value: function canplay(args) {
        this.videoEl.play();

        this._fireConsumer('$mediaplayerStart', args);
      }
    }, {
      key: "loadstart",
      value: function loadstart(args) {
        this._fireConsumer('$mediaplayerLoad', args);
      }
    }, {
      key: "seeked",
      value: function seeked() {
        this._fireConsumer('$mediaplayerSeeked', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "seeking",
      value: function seeking() {
        this._fireConsumer('$mediaplayerSeeking', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "durationchange",
      value: function durationchange(args) {
        this._fireConsumer('$mediaplayerDurationChange', args);
      }
    }, {
      key: "encrypted",
      value: function encrypted(args) {
        var video = args.videoElement;
        var event = args.event; // FIXME: Double encrypted events need to be properly filtered by Gstreamer

        if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
          this._previousInitData = event.initData;

          this._fireConsumer('$mediaplayerEncrypted', args);
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            VideoWrap: {
              VideoTexture: {
                visible: false,
                pivot: 0.5,
                texture: {
                  type: lng.textures.StaticTexture,
                  options: {}
                }
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this6) {
          _inherits(Playing, _this6);

          var _super2 = _createSuper(Playing);

          function Playing() {
            _classCallCheck(this, Playing);

            return _super2.apply(this, arguments);
          }

          _createClass(Playing, [{
            key: "$enter",
            value: function $enter() {
              this._startUpdatingVideoTexture();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._stopUpdatingVideoTexture();
            }
          }, {
            key: "timeupdate",
            value: function timeupdate() {
              this._fireConsumer('$mediaplayerProgress', {
                currentTime: this.videoEl.currentTime,
                duration: this.videoEl.duration || 1
              });
            }
          }, {
            key: "ended",
            value: function ended(args) {
              this._fireConsumer('$mediaplayerEnded', args);

              this._setState('');
            }
          }, {
            key: "pause",
            value: function pause(args) {
              this._fireConsumer('$mediaplayerPause', args);

              this._setState('Playing.Paused');
            }
          }, {
            key: "_clearSrc",
            value: function _clearSrc() {
              this._fireConsumer('$mediaplayerStop', {});

              this._setState('');
            }
          }], [{
            key: "_states",
            value: function _states() {
              return [/*#__PURE__*/function (_this7) {
                _inherits(Paused, _this7);

                var _super3 = _createSuper(Paused);

                function Paused() {
                  _classCallCheck(this, Paused);

                  return _super3.apply(this, arguments);
                }

                return _createClass(Paused);
              }(this)];
            }
          }]);

          return Playing;
        }(this)];
      }
    }]);

    return Mediaplayer;
  })(lng.Component);

  var localCookie = /*#__PURE__*/function () {
    function localCookie(e) {
      _classCallCheck(this, localCookie);

      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies
      };
    }

    _createClass(localCookie, [{
      key: "_checkIfLocalStorageWorks",
      value: function _checkIfLocalStorageWorks() {
        if ("undefined" == typeof localStorage) return !1;

        try {
          return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: "_getItemLocalStorage",
      value: function _getItemLocalStorage(e) {
        return window.localStorage.getItem(e);
      }
    }, {
      key: "_setItemLocalStorage",
      value: function _setItemLocalStorage(e, t) {
        return window.localStorage.setItem(e, t);
      }
    }, {
      key: "_removeItemLocalStorage",
      value: function _removeItemLocalStorage(e) {
        return window.localStorage.removeItem(e);
      }
    }, {
      key: "_clearLocalStorage",
      value: function _clearLocalStorage() {
        return window.localStorage.clear();
      }
    }, {
      key: "_getItemCookie",
      value: function _getItemCookie(e) {
        var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
          return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
        }(e) + "=([^;]*)"));
        return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
      }
    }, {
      key: "_setItemCookie",
      value: function _setItemCookie(e, t) {
        var o = new Date(),
            r = new Date(o.getTime() + 15768e7);
        document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
      }
    }, {
      key: "_removeItemCookie",
      value: function _removeItemCookie(e) {
        document.cookie = "".concat(e, "=;Max-Age=-99999999;");
      }
    }, {
      key: "_clearCookies",
      value: function _clearCookies() {
        document.cookie.split(";").forEach(function (e) {
          document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
        });
      }
    }]);

    return localCookie;
  }();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var initStorage = function initStorage() {
    Settings.get('platform', 'id'); // todo: pass options (for example to force the use of cookies)

    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  var isWildcard = /^[!*$]$/;
  var hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  var isNamedGroup = /^\/:/;
  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */

  var stripRegex = function stripRegex(route) {
    var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';

    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }

    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  var createRegister = function createRegister(flags) {
    var reg = new Map() // store user defined and router
    // defined flags in register
    ;
    [].concat(_toConsumableArray(Object.keys(flags)), _toConsumableArray(Object.getOwnPropertySymbols(flags))).forEach(function (key) {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  var Request = /*#__PURE__*/function () {
    function Request() {
      var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var navArgs = arguments.length > 1 ? arguments[1] : undefined;
      var storeCaller = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, Request);

      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;
      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */

      this._storeCaller = storeCaller;
      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */

      this._register = new Map();
      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */

      this._isCreated = false;
      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */

      this._isSharedInstance = false;
      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */

      this._cancelled = false;
      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */

      this._copiedHistoryState = null; // if there are arguments attached to navigate()
      // we store them in new request

      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      } // @todo: remove because we can simply check
      // ._storeCaller property


      this._register.set(symbols.store, this._storeCaller);
    }

    _createClass(Request, [{
      key: "cancel",
      value: function cancel() {
        Log.debug('[router]:', "cancelled ".concat(this._hash));
        this._cancelled = true;
      }
    }, {
      key: "url",
      get: function get() {
        return this._hash;
      }
    }, {
      key: "register",
      get: function get() {
        return this._register;
      }
    }, {
      key: "hash",
      get: function get() {
        return this._hash;
      },
      set: function set(args) {
        this._hash = args;
      }
    }, {
      key: "route",
      get: function get() {
        return this._route;
      },
      set: function set(args) {
        this._route = args;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      },
      set: function set(args) {
        this._provider = args;
      }
    }, {
      key: "providerType",
      get: function get() {
        return this._providerType;
      },
      set: function set(args) {
        this._providerType = args;
      }
    }, {
      key: "page",
      get: function get() {
        return this._page;
      },
      set: function set(args) {
        this._page = args;
      }
    }, {
      key: "isCreated",
      get: function get() {
        return this._isCreated;
      },
      set: function set(args) {
        this._isCreated = args;
      }
    }, {
      key: "isSharedInstance",
      get: function get() {
        return this._isSharedInstance;
      },
      set: function set(args) {
        this._isSharedInstance = args;
      }
    }, {
      key: "isCancelled",
      get: function get() {
        return this._cancelled;
      }
    }, {
      key: "copiedHistoryState",
      get: function get() {
        return this._copiedHistoryState;
      },
      set: function set(v) {
        this._copiedHistoryState = v;
      }
    }]);

    return Request;
  }();

  var Route = /*#__PURE__*/function () {
    function Route() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Route);

      // keep backwards compatible
      var type = ['on', 'before', 'after'].reduce(function (acc, type) {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;

      if (type) {
        this._provider = {
          type: type,
          request: config[type]
        };
      }
    }

    _createClass(Route, [{
      key: "path",
      get: function get() {
        return this._cfg.path;
      }
    }, {
      key: "component",
      get: function get() {
        return this._cfg.component;
      }
    }, {
      key: "options",
      get: function get() {
        return this._cfg.options;
      }
    }, {
      key: "widgets",
      get: function get() {
        return this._cfg.widgets;
      }
    }, {
      key: "cache",
      get: function get() {
        return this._cfg.cache;
      }
    }, {
      key: "hook",
      get: function get() {
        return this._cfg.hook;
      }
    }, {
      key: "beforeNavigate",
      get: function get() {
        return this._cfg.beforeNavigate;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      }
    }]);

    return Route;
  }();

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */

  var getFloor = function getFloor(route) {
    return stripRegex(route).split('/').length;
  };
  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */

  var getRoutesByFloor = function getRoutesByFloor(floor) {
    var matches = []; // simple filter of level candidates

    var _iterator = _createForOfIteratorHelper(routes.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 1),
            route = _step$value[0];

        if (getFloor(route) === floor) {
          matches.push(route);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return matches;
  };
  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */


  var getRouteByHash = function getRouteByHash(hash) {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    var getUrlParts = /(\/?:?[^/]+)/g; // grab possible candidates from stored routes

    var candidates = getRoutesByFloor(getFloor(hash)); // break hash down in chunks

    var hashParts = hash.match(getUrlParts) || []; // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash

    var regexStore = [];
    var matches = candidates.filter(function (route) {
      var isMatching = true; // replace regex in route with lookup id => @@{storeId}@@

      if (hasRegex.test(route)) {
        var regMatches = route.match(hasRegex);

        if (regMatches && regMatches.length) {
          route = regMatches.reduce(function (fullRoute, regex) {
            var lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }

      var routeParts = route.match(getUrlParts) || [];

      for (var i = 0, j = routeParts.length; i < j; i++) {
        var routePart = routeParts[i];
        var hashPart = hashParts[i]; // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash

        if (hasLookupId.test(routePart)) {
          var routeMatches = hasLookupId.exec(routePart);
          var storeId = routeMatches[1];
          var routeRegex = regexStore[storeId]; // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line

          var _regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);

          if (_regMatches && _regMatches.length) {
            var expression = _regMatches[1];
            var modifiers = _regMatches[2];
            var regex = new RegExp("^/".concat(expression, "$"), modifiers);

            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }

      return isMatching;
    });

    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        var match = matches[matches.indexOf(hash)];
        return routes.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(function (a) {
          return isNamedGroup.test(a) ? -1 : 1;
        }); // would be strange if this fails
        // but still we test

        if (routeExists(matches[0])) {
          return routes.get(matches[0]);
        }
      }
    }

    return false;
  };
  var getValuesFromHash = function getValuesFromHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    var getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    var hashParts = hash.match(getUrlParts) || [];
    var routeParts = path.match(getUrlParts) || [];
    var getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce(function (storage, value, index) {
      var match = getNamedGroup.exec(value);

      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }

      return storage;
    }, new Map());
  };
  var getOption = function getOption(stack, prop) {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    } // we explicitly return undefined since we're testing
    // for explicit test values

  };
  /**
   * create and return new Route instance
   * @param config
   */

  var createRoute = function createRoute(config) {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      var options = {
        preventStorage: true
      };

      if (isObject(config.options)) {
        options = _objectSpread2(_objectSpread2({}, config.options), options);
      }

      config.options = options; // if configured add reference to bootRequest
      // as router after provider

      if (bootRequest) {
        config.after = bootRequest;
      }
    }

    return new Route(config);
  };
  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */

  var createRequest = function createRequest(url, args, store) {
    return new Request(url, args, store);
  };
  var getHashByName = function getHashByName(obj) {
    if (!obj.to && !obj.name) {
      return false;
    }

    var route = getRouteByName(obj.to || obj.name);
    var hasDynamicGroup = /\/:([\w-]+)\/?/;
    var hash = route; // if route contains dynamic group
    // we replace them with the provided params

    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        var keys = Object.keys(obj.params);
        hash = keys.reduce(function (acc, key) {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }

      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }

    return hash;
  };

  var getRouteByName = function getRouteByName(name) {
    var _iterator2 = _createForOfIteratorHelper(routes.entries()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            path = _step2$value[0],
            route = _step2$value[1];

        if (route.name === name) {
          return path;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return false;
  };

  var keepActivePageAlive = function keepActivePageAlive(route, request) {
    if (isString(route)) {
      var _routes = getRoutes();

      if (_routes.has(route)) {
        route = _routes.get(route);
      } else {
        return false;
      }
    }

    var register = request.register;
    var routeOptions = route.options;

    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }

    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit$1 = (function (page) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isArray(events)) {
      events = [events];
    }

    events.forEach(function (e) {
      var event = "_on".concat(ucfirst(e));

      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var activeWidget = null;
  var getReferences = function getReferences() {
    if (!widgetsHost) {
      return;
    }

    return widgetsHost.get().reduce(function (storage, widget) {
      var key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };
  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */

  var updateWidgets = function updateWidgets(widgets, page) {
    // force lowercase lookup
    var configured = (widgets || []).map(function (ref) {
      return ref.toLowerCase();
    });
    widgetsHost.forEach(function (widget) {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;

      if (widget.visible) {
        emit$1(widget, ['activated'], page);
      }
    });

    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };

  var getWidgetByName = function getWidgetByName(name) {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };
  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */


  var focusWidget = function focusWidget(name) {
    var widget = getWidgetByName(name);

    if (widget) {
      setActiveWidget(widget); // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath

      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  var restoreFocus = function restoreFocus() {
    activeWidget = null;

    app._setState('');
  };
  var getActiveWidget = function getActiveWidget() {
    return activeWidget;
  };
  var setActiveWidget = function setActiveWidget(instance) {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var createComponent = function createComponent(stage, type) {
    return stage.c({
      type: type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */

  var history = [];
  var updateHistory = function updateHistory(request) {
    var hash = getActiveHash();

    if (!hash) {
      return;
    } // navigate storage flag


    var register = request.register;
    var forceNavigateStore = register.get(symbols.store); // test preventStorage on route configuration

    var activeRoute = getRouteByHash(hash);
    var preventStorage = getOption(activeRoute.options, 'preventStorage'); // we give prio to navigate storage flag

    var store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;

    if (store) {
      var toStore = hash.replace(/^\//, '');
      var location = locationInHistory(toStore);
      var stateObject = getStateObject(getActivePage(), request);
      var routerConfig = getRouterConfig(); // store hash if it's not a part of history or flag for
      // storage of same hash is true

      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        var prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };

  var locationInHistory = function locationInHistory(hash) {
    for (var i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }

    return -1;
  };

  var getHistoryState = function getHistoryState(hash) {
    var state = null;

    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        var record = history[history.length - 1]; // could be null

        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          var _record = history[locationInHistory(hash)];
          state = _record.state;
        }
      }
    }

    return state;
  };
  var replaceHistoryState = function replaceHistoryState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var hash = arguments.length > 1 ? arguments[1] : undefined;

    if (!history.length) {
      return;
    }

    var location = hash ? locationInHistory(hash) : history.length - 1;

    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };

  var getStateObject = function getStateObject(page, request) {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }

    return null;
  };

  var getHistory = function getHistory() {
    return history.slice(0);
  };
  var setHistory = function setHistory() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (isArray(arr)) {
      history = arr;
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };

  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }

  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }

  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }

  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }

  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }

    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }

  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return target.propertyIsEnumerable(symbol);
    }) : [];
  }

  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }

  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  } // Protects from prototype poisoning and unexpected merging up the prototype chain.


  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }

    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }

      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }

  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.

    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }

  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };

  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  var warned = false;

  var deprecated = function deprecated() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }

    warned = true;
  };

  var Locale = /*#__PURE__*/function () {
    function Locale() {
      _classCallCheck(this, Locale);

      this.__enabled = false;
    }
    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */


    _createClass(Locale, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.__enabled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return fetch(path).then(function (resp) {
                    return resp.json();
                  }).then(function (resp) {
                    _this.loadFromObject(resp);
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x) {
          return _load.apply(this, arguments);
        }

        return load;
      }()
      /**
       * Sets language used by module.
       *
       * @param {String} lang
       */

    }, {
      key: "setLanguage",
      value: function setLanguage(lang) {
        deprecated();
        this.__enabled = true;
        this.language = lang;
      }
      /**
       * Returns reference to translation object for current language.
       *
       * @return {Object}
       */

    }, {
      key: "tr",
      get: function get() {
        deprecated(true);
        return this.__trObj[this.language];
      }
      /**
       * Loads translation object from existing object (binds existing object).
       *
       * @param {Object} trObj
       */

    }, {
      key: "loadFromObject",
      value: function loadFromObject(trObj) {
        deprecated();
        var fallbackLanguage = 'en';

        if (Object.keys(trObj).indexOf(this.language) === -1) {
          Log.warn('No translations found for: ' + this.language);

          if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
            Log.warn('Using fallback language: ' + fallbackLanguage);
            this.language = fallbackLanguage;
          } else {
            var error = 'No translations found for fallback language: ' + fallbackLanguage;
            Log.error(error);
            throw Error(error);
          }
        }

        this.__trObj = trObj;

        for (var _i = 0, _Object$values = Object.values(this.__trObj); _i < _Object$values.length; _i++) {
          var lang = _Object$values[_i];

          for (var _i2 = 0, _Object$keys = Object.keys(lang); _i2 < _Object$keys.length; _i2++) {
            var str = _Object$keys[_i2];
            lang[str] = new LocalizedString(lang[str]);
          }
        }
      }
    }]);

    return Locale;
  }();
  /**
   * Extended string class used for localization.
   */


  var LocalizedString = /*#__PURE__*/function (_String) {
    _inherits(LocalizedString, _String);

    var _super = _createSuper(LocalizedString);

    function LocalizedString() {
      _classCallCheck(this, LocalizedString);

      return _super.apply(this, arguments);
    }

    _createClass(LocalizedString, [{
      key: "format",
      value:
      /**
       * Returns formatted LocalizedString.
       * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
       *
       * E.g.:
       * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
       * A and B and A
       *
       * @param  {...any} args List of arguments for placeholders.
       */
      function format() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var sub = args.reduce(function (string, arg, index) {
          return string.split("{".concat(index, "}")).join(arg);
        }, this);
        return new LocalizedString(sub);
      }
    }]);

    return LocalizedString;
  }( /*#__PURE__*/_wrapNativeSuper(String));

  var Locale$1 = new Locale();

  var VersionLabel = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VersionLabel, _Lightning$Component);

    var _super = _createSuper(VersionLabel);

    function VersionLabel() {
      _classCallCheck(this, VersionLabel);

      return _super.apply(this, arguments);
    }

    _createClass(VersionLabel, [{
      key: "_firstActive",
      value: function _firstActive() {
        this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
        this.tag('Text').loadTexture();
        this.w = this.tag('Text').renderWidth + 40;
        this.h = this.tag('Text').renderHeight + 5;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xbb0078ac,
          h: 40,
          w: 100,
          x: function x(w) {
            return w - 50;
          },
          y: function y(h) {
            return h - 50;
          },
          mount: 1,
          Text: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 5,
            x: 20,
            text: {
              fontSize: 22,
              lineHeight: 26
            }
          }
        };
      }
    }]);

    return VersionLabel;
  }(lng.Component);

  var FpsIndicator = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(FpsIndicator, _Lightning$Component);

    var _super = _createSuper(FpsIndicator);

    function FpsIndicator() {
      _classCallCheck(this, FpsIndicator);

      return _super.apply(this, arguments);
    }

    _createClass(FpsIndicator, [{
      key: "_setup",
      value: function _setup() {
        var _this = this;

        this.config = _objectSpread2(_objectSpread2({}, {
          log: false,
          interval: 500,
          threshold: 1
        }), Settings.get('platform', 'showFps'));
        this.fps = 0;
        this.lastFps = this.fps - this.config.threshold;

        var fpsCalculator = function fpsCalculator() {
          _this.fps = ~~(1 / _this.stage.dt);
        };

        this.stage.on('frameStart', fpsCalculator);
        this.stage.off('framestart', fpsCalculator);
        this.interval = setInterval(this.showFps.bind(this), this.config.interval);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.showFps();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        clearInterval(this.interval);
      }
    }, {
      key: "showFps",
      value: function showFps() {
        if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
        this.lastFps = this.fps; // green

        var bgColor = 0xff008000; // orange

        if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500; // red
        else if (this.fps <= 20) bgColor = 0xffff0000;
        this.tag('Background').setSmooth('color', bgColor);
        this.tag('Counter').text = "".concat(this.fps);
        this.config.log && Log.info('FPS', this.fps);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xffffffff,
          texture: lng.Tools.getRoundRect(80, 80, 40),
          h: 80,
          w: 80,
          x: 100,
          y: 100,
          mount: 1,
          Background: {
            x: 3,
            y: 3,
            texture: lng.Tools.getRoundRect(72, 72, 36),
            color: 0xff008000
          },
          Counter: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 10,
            text: {
              fontSize: 32,
              textAlign: 'center'
            }
          },
          Text: {
            w: function w(_w2) {
              return _w2;
            },
            h: function h(_h2) {
              return _h2;
            },
            y: 48,
            text: {
              fontSize: 15,
              textAlign: 'center',
              text: 'FPS'
            }
          }
        };
      }
    }]);

    return FpsIndicator;
  }(lng.Component);

  var meta = {};
  var translations = {};
  var language = null;
  var initLanguage = function initLanguage(file) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      fetch(file).then(function (response) {
        return response.json();
      }).then(function (json) {
        setTranslations(json); // set language (directly or in a promise)

        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(function (lang) {
          return setLanguage(lang).then(resolve).catch(reject);
        }).catch(function (e) {
          Log.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(function () {
        var error = 'Language file ' + file + ' not found';
        Log.error(error);
        reject(error);
      });
    });
  };

  var setTranslations = function setTranslations(obj) {
    if ('meta' in obj) {
      meta = _objectSpread2({}, obj.meta);
      delete obj.meta;
    }

    translations = obj;
  };

  var setLanguage = function setLanguage(lng) {
    language = null;
    return new Promise(function (resolve, reject) {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          var error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log.warn(error);
          language = meta.default;
        } else {
          var _error = 'Translations for Language ' + language + ' not found.';

          Log.error(_error);
          reject(_error);
        }
      }

      if (language) {
        Log.info('Setting language to', language);
        var translationsObj = translations[language];

        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          var url = Utils.asset(translationsObj);
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (json) {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(function (e) {
            var error = 'Error while fetching ' + url;
            Log.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }

      var timeoutId = setTimeout(function () {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        cb.apply(null, params);
      }, timeout, params);
      Log.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        Log.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    }),
    clearTimeouts: function clearTimeouts() {
      var _this = this;

      registry.timeouts.forEach(function (timeoutId) {
        _this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval: function (_setInterval) {
      function setInterval(_x4, _x5) {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function (cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }

      var intervalId = setInterval(function () {
        registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        cb.apply(null, params);
      }, interval, params);
      Log.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    }),
    clearInterval: function (_clearInterval) {
      function clearInterval(_x6) {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function (intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        Log.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    }),
    clearIntervals: function clearIntervals() {
      var _this2 = this;

      registry.intervals.forEach(function (intervalId) {
        _this2.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener: function addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      var targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener: function removeEventListener(target, event, handler) {
      var targetIndex = registry.targets.indexOf(target);

      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(function (fn) {
          return fn !== handler;
        });
        Log.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
      } else {
        Log.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners: function removeEventListeners(target, event) {
      var _this3 = this;

      if (target && event) {
        var targetIndex = registry.targets.indexOf(target);

        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(function (handler) {
            _this3.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        var _targetIndex = registry.targets.indexOf(target);

        if (_targetIndex > -1) {
          Object.keys(registry.eventListeners[_targetIndex]).forEach(function (_event) {
            _this3.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(function (targetIndex) {
          _this3.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear: function clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var isObject$1 = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isString$1 = function isString(v) {
    return typeof v === 'string';
  };
  var getRgbaComponents = function getRgbaComponents(argb) {
    return {
      r: (argb / 65536 | 0) % 256,
      g: (argb / 256 | 0) % 256,
      b: argb * 1 % 256,
      a: argb / 16777216 | 0
    };
  };
  var mergeColors = function mergeColors(c1, c2, p) {
    var r1 = (c1 / 65536 | 0) % 256;
    var g1 = (c1 / 256 | 0) % 256;
    var b1 = c1 % 256;
    var a1 = c1 / 16777216 | 0;
    var r2 = (c2 / 65536 | 0) % 256;
    var g2 = (c2 / 256 | 0) % 256;
    var b2 = c2 % 256;
    var a2 = c2 / 16777216 | 0;
    var r = r1 * p + r2 * (1 - p);
    var g = g1 * p + g2 * (1 - p);
    var b = b1 * p + b2 * (1 - p);
    var a = a1 * p + a2 * (1 - p);
    return Math.round(a) * 16777216 + Math.round(r) * 65536 + Math.round(g) * 256 + Math.round(b);
  };
  var calculateAlpha = function calculateAlpha(argb, p) {
    if (p > 1) {
      p /= 100;
    } else if (p < 0) {
      p = 0;
    }

    var r = (argb / 65536 | 0) % 256;
    var g = (argb / 256 | 0) % 256;
    var b = argb % 256;
    return (r << 16) + (g << 8) + b + (p * 255 | 0) * 16777216;
  };

  var getArgbNumber = function getArgbNumber(rgba) {
    rgba[0] = Math.max(0, Math.min(255, rgba[0]));
    rgba[1] = Math.max(0, Math.min(255, rgba[1]));
    rgba[2] = Math.max(0, Math.min(255, rgba[2]));
    rgba[3] = Math.max(0, Math.min(255, rgba[3]));
    var v = ((rgba[3] | 0) << 24) + ((rgba[0] | 0) << 16) + ((rgba[1] | 0) << 8) + (rgba[2] | 0);

    if (v < 0) {
      v = 0xffffffff + v + 1;
    }

    return v;
  };
  var argbToHSLA = function argbToHSLA(argb) {
    var col = getRgbaComponents(argb);
    var r = col.r / 255;
    var g = col.g / 255;
    var b = col.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (min + max) * 0.5;

    if (l > 0) {
      var maxMin = max - min;

      if (maxMin > 0) {
        var r2 = (max - r) / maxMin;
        var g2 = (max - g) / maxMin;
        var b2 = (max - b) / maxMin;

        if (l < 0.5) {
          s = max + min;
        } else {
          s = 2 - max - min;
        }

        if (r === max && g === min) {
          h = 5.0 + b2;
        } else if (r === max) {
          h = 1.0 - g2;
        } else if (g === max && b === min) {
          h = 1.0 + r2;
        } else if (g === max) {
          h = 3.0 - b2;
        } else if (b === max) {
          h = 3.0 + g2;
        } else {
          h = 5.0 - r2;
        }

        h = h / 6;
      }
    }

    return {
      h: h % 1,
      s: s,
      l: l,
      a: col.a
    };
  };
  var hslaToARGB = function hslaToARGB(hsla) {
    var r = 1;
    var g = 1;
    var b = 1;
    var h = hsla.h;
    var s = hsla.s;
    var l = hsla.l;

    if (h < 0) {
      h += 1;
    }

    var max = 0;

    if (l <= 0.5) {
      max = l * (1.0 + s);
    } else {
      max = l + s - l * s;
    }

    if (max > 0) {
      h *= 6.0;
      var min = l + l - max;
      var minMax = (max - min) / max;
      var sextant = Math.floor(h);
      var fract = h - sextant;
      var minMaxFract = max * minMax * fract;
      var mid1 = min + minMaxFract;
      var mid2 = max - minMaxFract;

      if (sextant === 0) {
        r = max;
        g = mid1;
        b = min;
      }

      if (sextant === 1) {
        r = mid2;
        g = max;
        b = min;
      }

      if (sextant === 2) {
        r = min;
        g = max;
        b = mid1;
      }

      if (sextant === 3) {
        r = min;
        g = mid2;
        b = max;
      }

      if (sextant === 4) {
        r = mid1;
        g = min;
        b = max;
      }

      if (sextant === 5) {
        r = max;
        g = min;
        b = mid2;
      }
    }

    return getArgbNumber([Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255), hsla.a]);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  var normalizedColors = {//store for normalized colors
  };

  var addColors = function addColors(colorsToAdd, value) {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(function (color) {
        return cleanUpNormalizedColors(color);
      });
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };

  var cleanUpNormalizedColors = function cleanUpNormalizedColors(color) {
    for (var c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };

  var initColors = function initColors(file) {
    return new Promise(function (resolve, reject) {
      if (typeof file === 'object') {
        addColors(file);
        resolve();
      }

      fetch(file).then(function (response) {
        return response.json();
      }).then(function (json) {
        addColors(json);
        resolve();
      }).catch(function () {
        var error = 'Colors file ' + file + ' not found';
        Log.error(error);
        reject(error);
      });
    });
  };

  var normalizeColorToARGB = function normalizeColorToARGB(color) {
    var targetColor = normalizedColors[color] || colors[color] || color;

    if (!targetColor) {
      targetColor = color;
    }

    var check = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;

    if (isString$1(targetColor) && check.test(targetColor)) {
      var hex = check.exec(targetColor)[1];

      if (hex.length === 3) {
        hex = hex.split('').map(function (value) {
          return value + value;
        }).join('');
      }

      targetColor = "0xff".concat(hex) * 1;
    }

    if (!normalizedColors[color]) {
      normalizedColors[color] = targetColor;
    }

    return targetColor || 0xffffffff;
  };

  var Colors = (function (color) {
    return Color.generate(color);
  });
  var Color = {
    color: null,
    generate: function generate() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.color;

      if (normalizedColors[value]) {
        this.color = normalizedColors[value];
      } else {
        this.color = normalizeColorToARGB(value);
      }

      return this;
    },
    get: function get() {
      return this.color;
    },
    alpha: function alpha(percentage) {
      this.color = calculateAlpha(this.color, Math.abs(percentage));
      return this;
    },
    darker: function darker(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = hsl.l * (1 - percentage);
      this.color = hslaToARGB(hsl);
      return this;
    },
    lighter: function lighter(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = hsl.l + (1 - hsl.l) * percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    saturation: function saturation(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.s = percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    lightness: function lightness(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    hue: function hue(degrees) {
      var hsl = argbToHSLA(this.color);
      hsl.h = degrees;
      this.color = hslaToARGB(hsl);
      return this;
    },
    mix: function mix(argb, p) {
      this.color = mergeColors(this.color, argb, p);
      return this;
    }
  };

  var name = "@lightningjs/sdk";
  var version = "4.8.1";
  var license = "Apache-2.0";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "*",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	localCookie: "github:WebPlatformForEmbedded/localCookie",
  	shelljs: "^0.8.4",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name,
  	version: version,
  	license: license,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  var AppInstance;
  var defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  var customFontFaces = [];

  var fontLoader = function fontLoader(fonts, store) {
    return new Promise(function (resolve, reject) {
      fonts.map(function (_ref) {
        var family = _ref.family,
            url = _ref.url,
            urls = _ref.urls,
            descriptors = _ref.descriptors;
        return function () {
          var src = urls ? urls.map(function (url) {
            return 'url(' + url + ')';
          }) : 'url(' + url + ')';
          var fontFace = new FontFace(family, src, descriptors || {});
          store.push(fontFace);
          Log.info('Loading font', family);
          document.fonts.add(fontFace);
          return fontFace.load();
        };
      }).reduce(function (promise, method) {
        return promise.then(function () {
          return method();
        });
      }, Promise.resolve(null)).then(resolve).catch(reject);
    });
  };

  function Application (App, appData, platformSettings) {
    var width = platformSettings.width,
        height = platformSettings.height;

    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    } // support for 720p browser


    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }

    return /*#__PURE__*/function (_Lightning$Applicatio) {
      _inherits(Application, _Lightning$Applicatio);

      var _super = _createSuper(Application);

      function Application(options) {
        var _this;

        _classCallCheck(this, Application);

        var config = cjs(defaultOptions, options); // Deepmerge breaks HTMLCanvasElement, so restore the passed in canvas.

        if (options.stage.canvas) {
          config.stage.canvas = options.stage.canvas;
        }

        _this = _super.call(this, config);
        _this.config = config;
        return _this;
      }

      _createClass(Application, [{
        key: "_setup",
        value: function _setup() {
          var _this2 = this;

          Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []), // to be deprecated
          Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(function () {
            Metrics$1.app.loaded();
            AppInstance = _this2.stage.c({
              ref: 'App',
              type: App,
              zIndex: 1,
              forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
            });

            _this2.childList.a(AppInstance);

            _this2._refocus();

            Log.info('App version', _this2.config.version);
            Log.info('SDK version', packageInfo.version);

            if (platformSettings.showVersion) {
              _this2.childList.a({
                ref: 'VersionLabel',
                type: VersionLabel,
                version: _this2.config.version,
                sdkVersion: packageInfo.version,
                zIndex: 1
              });
            }

            if (platformSettings.showFps) {
              _this2.childList.a({
                ref: 'FpsCounter',
                type: FpsIndicator,
                zIndex: 1
              });
            }

            _get(_getPrototypeOf(Application.prototype), "_setup", _this2).call(_this2);
          }).catch(console.error);
        }
      }, {
        key: "_handleBack",
        value: function _handleBack() {
          this.closeApp();
        }
      }, {
        key: "_handleExit",
        value: function _handleExit() {
          this.closeApp();
        }
      }, {
        key: "closeApp",
        value: function closeApp() {
          Log.info('Signaling App Close');

          if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
            platformSettings.onClose.apply(platformSettings, arguments);
          } else {
            this.close();
          }
        }
      }, {
        key: "close",
        value: function close() {
          Log.info('Closing App');
          Settings.clearSubscribers();
          Registry.clear();
          this.childList.remove(this.tag('App'));
          this.cleanupFonts(); // force texture garbage collect

          this.stage.gc();
          this.destroy();
        }
      }, {
        key: "loadFonts",
        value: function loadFonts(fonts) {
          return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
        }
      }, {
        key: "cleanupFonts",
        value: function cleanupFonts() {
          if ('delete' in document.fonts) {
            customFontFaces.forEach(function (fontFace) {
              Log.info('Removing font', fontFace.family);
              document.fonts.delete(fontFace);
            });
          } else {
            Log.info('No support for removing manually-added fonts');
          }
        }
      }, {
        key: "loadLanguage",
        value: function loadLanguage(config) {
          var file = Utils.asset('translations.json');
          var language = config;

          if (typeof language === 'object') {
            language = config.language || null;
            file = config.file || file;
          }

          return initLanguage(file, language);
        }
      }, {
        key: "loadColors",
        value: function loadColors(config) {
          var file = Utils.asset('colors.json');

          if (config && (typeof config === 'string' || typeof config === 'object')) {
            file = config;
          }

          return initColors(file);
        }
      }, {
        key: "focus",
        set: function set(v) {
          this._focussed = v;

          this._refocus();
        }
      }, {
        key: "_getFocused",
        value: function _getFocused() {
          return this._focussed || this.tag('App');
        }
      }], [{
        key: "_template",
        value: function _template() {
          return {
            w: 1920,
            h: 1080
          };
        }
      }]);

      return Application;
    }(lng.Application);
  }

  /**
   * @type {Lightning.Application}
   */

  var application;
  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */

  var app;
  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */

  var pagesHost;
  /**
   * @type {Lightning.Stage}
   */

  var stage;
  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */

  var routerConfig;
  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */

  var widgetsHost;
  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */

  var rootHash;
  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */

  var bootRequest;
  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */

  var updateHash = true;
  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line

  var beforeEachRoute = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(from, to) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", true);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function beforeEachRoute(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */

  var afterEachRoute = function afterEachRoute() {};
  /**
   * All configured routes
   * @type {Map<string, object>}
   */

  var routes = new Map();
  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */

  var components = new Map();
  /**
   * Flag if router has been initialised
   * @type {boolean}
   */

  var initialised = false;
  /**
   * Current page being rendered on screen
   * @type {null}
   */

  var activePage = null;
  var activeHash;
  var activeRoute;
  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */

  var lastAcceptedHash;

  var mixin = function mixin(app) {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    } // if the app is using widgets we grab refs
    // and hide all the widgets


    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList; // hide all widgets on boot

      widgetsHost.forEach(function (w) {
        return w.visible = false;
      });
    }

    app._handleBack = function (e) {
      step(-1);
      e.preventDefault();
    };
  };

  var bootRouter = function bootRouter(config, instance) {
    var appInstance = config.appInstance,
        routes = config.routes; // if instance is provided and it's and Lightning Component instance

    if (instance && isPage(instance)) {
      app = instance;
    }

    if (!app) {
      app = appInstance || AppInstance;
    }

    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);

    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  var setup = function setup(config) {
    if (!initialised) {
      init(config);
    }

    config.routes.forEach(function (r) {
      var path = cleanHash(r.path);

      if (!routeExists(path)) {
        var route = createRoute(r);
        routes.set(path, route); // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route

        if (route.component) {
          var type = route.component;

          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }

          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };

  var init = function init(config) {
    rootHash = config.root;

    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }

    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }

    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }

    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }

    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');

      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }

    initialised = true;
  };

  var storeComponent = function storeComponent(route, type) {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  var getComponent = function getComponent(route) {
    if (components.has(route)) {
      return components.get(route);
    }

    return null;
  };
  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */

  var mustUpdateLocationHash = function mustUpdateLocationHash() {
    if (!routerConfig || !routerConfig.size) {
      return false;
    } // we need support to either turn change hash off
    // per platform or per app


    var updateConfig = routerConfig.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };
  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */

  var onRequestResolved = function onRequestResolved(request) {
    var hash = request.hash;
    var route = request.route;
    var register = request.register;
    var page = request.page; // clean up history if modifier is set

    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    } // we only update the stackLocation if a route
    // is not expired before it resolves


    storeComponent(route.path, page);

    if (request.isSharedInstance || !request.isCreated) {
      emit$1(page, 'changed');
    } else if (request.isCreated) {
      emit$1(page, 'mounted');
    } // only update widgets if we have a host


    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    } // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route


    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    } // provide history object to active page


    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }

    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path; // cleanup all cancelled requests

    var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _request = _step.value;

        if (_request.isCancelled && _request.hash) {
          navigateQueue.delete(_request.hash);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    afterEachRoute(request);
    Log.info('[route]:', route.path);
    Log.info('[hash]:', hash);
  };

  var cleanUp = function cleanUp(page, request) {
    var route = activeRoute;
    var register = request.register;
    var lazyDestroy = routerConfig.get('lazyDestroy');
    var destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    var keepAlive = register.get('keepAlive');
    var isFromHistory = register.get(symbols.backtrack);
    var doCleanup = false; // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled

    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    } // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false


    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    } // if the current and new request share the same route blueprint


    if (activeRoute === request.route.path) {
      doCleanup = true;
    }

    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor); // actual remove of page from memory

      pagesHost.remove(page); // force texture gc() if configured
      // so we can cleanup textures in the same tick

      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        alpha: 1,
        visible: false
      });
    }
  };

  var getActiveHash = function getActiveHash() {
    return activeHash;
  };
  var setActivePage = function setActivePage(page) {
    activePage = page;
  };
  var getActivePage = function getActivePage() {
    return activePage;
  };
  var getActiveRoute = function getActiveRoute() {
    return activeRoute;
  };
  var getLastHash = function getLastHash() {
    return lastAcceptedHash;
  };
  var setLastHash = function setLastHash(hash) {
    lastAcceptedHash = hash;
  };
  var routeExists = function routeExists(key) {
    return routes.has(key);
  };
  var getRootHash = function getRootHash() {
    return rootHash;
  };
  var getBootRequest = function getBootRequest() {
    return bootRequest;
  };
  var getRouterConfig = function getRouterConfig() {
    return routerConfig;
  };
  var getRoutes = function getRoutes() {
    return routes;
  };

  var isFunction = function isFunction(v) {
    return typeof v === 'function';
  };
  var isObject = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isBoolean = function isBoolean(v) {
    return typeof v === 'boolean';
  };
  var isPage = function isPage(v) {
    if (v instanceof lng.Element || isComponentConstructor(v)) {
      return true;
    }

    return false;
  };
  var isComponentConstructor = function isComponentConstructor(type) {
    return type.prototype && 'isComponent' in type.prototype;
  };
  var isArray = function isArray(v) {
    return Array.isArray(v);
  };
  var ucfirst = function ucfirst(v) {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  var isString = function isString(v) {
    return typeof v === 'string';
  };
  var isPromise = function isPromise(method) {
    var result;

    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    return isObject(result) && isFunction(result.then);
  };
  var cleanHash = function cleanHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  var getConfigMap = function getConfigMap() {
    var routerSettings = Settings.get('platform', 'router');
    var isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce(function (config, key) {
      config.set(key, isObj ? routerSettings[key] : Settings.get('platform', key));
      return config;
    }, new Map());
  };
  var getQueryStringParams = function getQueryStringParams() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    var resumeHash = getResumeHash();

    if ((hash === '$' || !hash) && resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }

    var parse = '';
    var getQuery = /([?&].*)/;
    var matches = getQuery.exec(hash);
    var params = {};

    if (document.location && document.location.search) {
      parse = document.location.search;
    }

    if (matches && matches.length) {
      var hashParams = matches[1];

      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, ''); // we parse hash params last so they we can always
        // override search params with hash params

        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }

    if (parse) {
      var urlParams = new URLSearchParams(parse);

      var _iterator = _createForOfIteratorHelper(urlParams.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          params[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return params;
    } else {
      return false;
    }
  };
  var objectToQueryString = function objectToQueryString(obj) {
    if (!isObject(obj)) {
      return '';
    }

    return '?' + Object.keys(obj).map(function (key) {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  var symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  var dataHooks = {
    on: function on(request) {
      app.state || '';

      app._setState('Loading');

      return execProvider(request);
    },
    before: function before(request) {
      return execProvider(request);
    },
    after: function after(request) {
      try {
        execProvider(request, true);
      } catch (e) {// for now we fail silently
      }

      return Promise.resolve();
    }
  };

  var execProvider = function execProvider(request, emitProvided) {
    var route = request.route;
    var provider = route.provider;
    var expires = route.cache ? route.cache * 1000 : 0;
    var params = addPersistData(request);
    return provider.request(request.page, _objectSpread2({}, params)).then(function () {
      request.page[symbols.expires] = Date.now() + expires;

      if (emitProvided) {
        emit$1(request.page, 'dataProvided');
      }
    });
  };

  var addPersistData = function addPersistData(_ref) {
    var page = _ref.page,
        route = _ref.route,
        hash = _ref.hash,
        _ref$register = _ref.register,
        register = _ref$register === void 0 ? new Map() : _ref$register;
    var urlValues = getValuesFromHash(hash, route.path);
    var queryParams = getQueryStringParams(hash);
    var pageData = new Map([].concat(_toConsumableArray(urlValues), _toConsumableArray(register)));
    var params = {}; // make dynamic url data available to the page
    // as instance properties

    var _iterator = _createForOfIteratorHelper(pageData),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            name = _step$value[0],
            value = _step$value[1];

        params[name] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    } // check navigation register for persistent data


    if (register.size) {
      var obj = {};

      var _iterator2 = _createForOfIteratorHelper(register),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              k = _step2$value[0],
              v = _step2$value[1];

          obj[k] = v;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      page.persist = obj;
    } // make url data and persist data available
    // via params property


    page.params = params;
    emit$1(page, ['urlParams'], params);
    return params;
  };
  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */

  var isPageExpired = function isPageExpired(page) {
    if (!page[symbols.expires]) {
      return false;
    }

    var expires = page[symbols.expires];
    var now = Date.now();
    return now >= expires;
  };
  var hasProvider = function hasProvider(path) {
    if (routeExists(path)) {
      var record = routes.get(path);
      return !!record.provider;
    }

    return false;
  };
  var getProvider = function getProvider(route) {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      var _routes$get = routes.get(route.path),
          provider = _routes$get.provider;

      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var fade = function fade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      }); // resolve on y finish

      i.transition('alpha').on('finish', function () {
        if (o) {
          o.visible = false;
        }

        resolve();
      });
    });
  };

  var crossFade = function crossFade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });

      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      } // resolve on y finish


      i.transition('alpha').on('finish', function () {
        resolve();
      });
    });
  };

  var moveOnAxes = function moveOnAxes(axis, direction, i, o) {
    var bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(function (resolve) {
      var _i$patch;

      i.patch((_i$patch = {}, _defineProperty(_i$patch, "".concat(axis), direction ? bounds * -1 : bounds), _defineProperty(_i$patch, "visible", true), _defineProperty(_i$patch, "smooth", _defineProperty({}, "".concat(axis), [0, {
        duration: 0.4,
        delay: 0.2
      }])), _i$patch)); // out is optional

      if (o) {
        var _o$patch;

        o.patch((_o$patch = {}, _defineProperty(_o$patch, "".concat(axis), 0), _defineProperty(_o$patch, "smooth", _defineProperty({}, "".concat(axis), [direction ? bounds : bounds * -1, {
          duration: 0.4,
          delay: 0.2
        }])), _o$patch));
      } // resolve on y finish


      i.transition(axis).on('finish', function () {
        resolve();
      });
    });
  };

  var up = function up(i, o) {
    return moveOnAxes('y', 0, i, o);
  };

  var down = function down(i, o) {
    return moveOnAxes('y', 1, i, o);
  };

  var left = function left(i, o) {
    return moveOnAxes('x', 0, i, o);
  };

  var right = function right(i, o) {
    return moveOnAxes('x', 1, i, o);
  };

  var Transitions = {
    fade: fade,
    crossFade: crossFade,
    up: up,
    down: down,
    left: left,
    right: right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */

  var executeTransition = function executeTransition(pageIn) {
    var pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var transition = pageIn.pageTransition || pageIn.easing;
    var hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    var transitionsDisabled = getRouterConfig().get('disableTransitions');

    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    } // default behaviour is a visibility toggle


    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;

      if (pageOut) {
        pageOut.visible = false;
      }

      return Promise.resolve();
    }

    if (transition) {
      var type;

      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }

      if (isPromise(type)) {
        return type;
      }

      if (isString(type)) {
        var fn = Transitions[type];

        if (fn) {
          return fn(pageIn, pageOut);
        }
      } // keep backwards compatible for now


      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        var smooth = function smooth(p, v) {
          var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(function (resolve) {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', function () {
              resolve();
            });
          });
        };

        return pageIn.smoothIn({
          pageIn: pageIn,
          smooth: smooth
        });
      }
    }

    return Transitions.crossFade(pageIn, pageOut);
  };

  /**
   * The actual loading of the component
   * */

  var load = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request) {
      var expired, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expired = false;
              _context.prev = 1;
              _context.next = 4;
              return loader$1(request);

            case 4:
              request = _context.sent;

              if (!(request && !request.isCancelled)) {
                _context.next = 12;
                break;
              }

              // in case of on() providing we need to reset
              // app state;
              if (app.state === 'Loading') {
                {
                  app._setState('');
                }
              } // Do page transition if instance
              // is not shared between the routes


              if (!(!request.isSharedInstance && !request.isCancelled)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return executeTransition(request.page, getActivePage());

            case 10:
              _context.next = 13;
              break;

            case 12:
              expired = true;

            case 13:
              if (!(expired || request.isCancelled)) {
                _context.next = 18;
                break;
              }

              Log.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));

              if (request.isCreated && !request.isSharedInstance) {
                // remove from render-tree
                pagesHost.remove(request.page);
              }

              _context.next = 20;
              break;

            case 18:
              onRequestResolved(request); // resolve promise

              return _context.abrupt("return", request.page);

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](1);

              if (!_context.t0.route) {
                console.error(_context.t0);
              } else if (!expired) {
                // @todo: revisit
                route = _context.t0.route; // clean up history if modifier is set

                if (getOption(route.options, 'clearHistory')) {
                  setHistory([]);
                } else if (!isWildcard.test(route.path)) {
                  updateHistory(_context.t0);
                }

                if (_context.t0.isCreated && !_context.t0.isSharedInstance) {
                  // remove from render-tree
                  pagesHost.remove(_context.t0.page);
                }

                handleError(_context.t0);
              }

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 22]]);
    }));

    return function load(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loader$1 = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request) {
      var route, hash, register, type, isConstruct, provide, currentRoute, _getProvider, loadType, provider;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              route = request.route;
              hash = request.hash;
              register = request.register; // todo: grab from Route instance

              type = getComponent(route.path);
              isConstruct = isComponentConstructor(type);
              provide = false; // if it's an instance bt we're not coming back from
              // history we test if we can re-use this instance

              if (!isConstruct && !register.get(symbols.backtrack)) {
                if (!mustReuse(route)) {
                  type = type.constructor;
                  isConstruct = true;
                }
              } // If page is Lightning Component instance


              if (!isConstruct) {
                request.page = type; // if we have have a data route for current page

                if (hasProvider(route.path)) {
                  if (isPageExpired(type) || type[symbols.hash] !== hash) {
                    provide = true;
                  }
                }

                currentRoute = getActivePage() && getActivePage()[symbols.route]; // if the new route is equal to the current route it means that both
                // route share the Component instance and stack location / since this case
                // is conflicting with the way before() and after() loading works we flag it,
                // and check platform settings in we want to re-use instance

                if (route.path === currentRoute) {
                  request.isSharedInstance = true; // since we're re-using the instance we must attach
                  // historyState to the request to prevent it from
                  // being overridden.

                  if (isFunction(request.page.historyState)) {
                    request.copiedHistoryState = request.page.historyState();
                  }
                }
              } else {
                request.page = createComponent(stage, type);
                pagesHost.a(request.page); // test if need to request data provider

                if (hasProvider(route.path)) {
                  provide = true;
                }

                request.isCreated = true;
              } // we store hash and route as properties on the page instance
              // that way we can easily calculate new behaviour on page reload


              request.page[symbols.hash] = hash;
              request.page[symbols.route] = route.path;
              _context2.prev = 10;

              if (!provide) {
                _context2.next = 25;
                break;
              }

              // extract attached data-provider for route
              // we're processing
              _getProvider = getProvider(route), loadType = _getProvider.type, provider = _getProvider.provider; // update running request

              request.provider = provider;
              request.providerType = loadType;
              _context2.next = 17;
              return dataHooks[loadType](request);

            case 17:
              if (!(hash !== getLastHash())) {
                _context2.next = 21;
                break;
              }

              return _context2.abrupt("return", false);

            case 21:
              if (request.providerType !== 'after') {
                emit$1(request.page, 'dataProvided');
              } // resolve promise


              return _context2.abrupt("return", request);

            case 23:
              _context2.next = 27;
              break;

            case 25:
              addPersistData(request);
              return _context2.abrupt("return", request);

            case 27:
              _context2.next = 33;
              break;

            case 29:
              _context2.prev = 29;
              _context2.t0 = _context2["catch"](10);
              request.error = _context2.t0;
              return _context2.abrupt("return", Promise.reject(request));

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[10, 29]]);
    }));

    return function loader(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleError = function handleError(request) {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log.error(request);
    }

    if (request.page && routeExists('!')) {
      navigate('!', {
        request: request
      }, false);
    }
  };

  var mustReuse = function mustReuse(route) {
    var opt = getOption(route.options, 'reuseInstance');
    var config = routerConfig.get('reuseInstance'); // route always has final decision

    if (isBoolean(opt)) {
      return opt;
    }

    return !(isBoolean(config) && config === false);
  };

  var RoutedApp = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(RoutedApp, _Lightning$Component);

    var _super = _createSuper(RoutedApp);

    function RoutedApp() {
      _classCallCheck(this, RoutedApp);

      return _super.apply(this, arguments);
    }

    _createClass(RoutedApp, [{
      key: "pages",
      get:
      /**
       * Return location where pages need to be stored
       */
      function get() {
        return this.tag('Pages');
      }
      /**
       * Tell router where widgets are stored
       */

    }, {
      key: "widgets",
      get: function get() {
        return this.tag('Widgets');
      }
      /**
       * we MUST register _handleBack method so the Router
       * can override it
       * @private
       */

    }, {
      key: "_handleBack",
      value: function _handleBack() {}
      /**
       * We MUST return Router.activePage() so the new Page
       * can listen to the remote-control.
       */

    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return Router.getActivePage();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Pages: {
            forceZIndexContext: true
          },

          /**
           * This is a default Loading page that will be made visible
           * during data-provider on() you CAN override in child-class
           */
          Loading: {
            rect: true,
            w: 1920,
            h: 1080,
            color: 0xff000000,
            visible: false,
            zIndex: 99,
            Label: {
              mount: 0.5,
              x: 960,
              y: 540,
              text: {
                text: 'Loading..'
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(Loading, _this);

          var _super2 = _createSuper(Loading);

          function Loading() {
            _classCallCheck(this, Loading);

            return _super2.apply(this, arguments);
          }

          _createClass(Loading, [{
            key: "$enter",
            value: function $enter() {
              this.tag('Loading').visible = true;
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag('Loading').visible = false;
            }
          }]);

          return Loading;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(Widgets, _this2);

          var _super3 = _createSuper(Widgets);

          function Widgets() {
            _classCallCheck(this, Widgets);

            return _super3.apply(this, arguments);
          }

          _createClass(Widgets, [{
            key: "$enter",
            value: function $enter(args, widget) {
              // store widget reference
              this._widget = widget; // since it's possible that this behaviour
              // is non-remote driven we force a recalculation
              // of the focuspath

              this._refocus();
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              // we delegate focus to selected widget
              // so it can consume remotecontrol presses
              return this._widget;
            } // if we want to widget to widget focus delegation

          }, {
            key: "reload",
            value: function reload(widget) {
              this._widget = widget;

              this._refocus();
            }
          }, {
            key: "_handleKey",
            value: function _handleKey() {
              var restoreFocus = routerConfig.get('autoRestoreRemote');
              /**
               * The Router used to delegate focus back to the page instance on
               * every unhandled key. This is barely usefull in any situation
               * so for now we offer the option to explicity turn that behaviour off
               * so we don't don't introduce a breaking change.
               */

              if (!isBoolean(restoreFocus) || restoreFocus === true) {
                Router.focusPage();
              }
            }
          }]);

          return Widgets;
        }(this)];
      }
    }]);

    return RoutedApp;
  }(lng.Component);

  /*
  rouThor ==[x]
   */

  var navigateQueue = new Map();
  var forcedHash = '';
  var resumeHash = '';
  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */

  var startRouter = function startRouter(config, instance) {
    bootRouter(config, instance);
    registerListener();
    start();
  }; // start translating url


  var start = function start() {
    var hash = (getHash() || '').replace(/^#/, '');
    var bootKey = '$';
    var params = getQueryStringParams(hash);
    var bootRequest = getBootRequest();
    var rootHash = getRootHash();
    var isDirectLoad = hash.indexOf(bootKey) !== -1; // prevent direct reload of wildcard routes
    // expect bootComponent

    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    } // store resume point for manual resume


    resumeHash = isDirectLoad ? rootHash : hash || rootHash;

    var ready = function ready() {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(function (res) {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    };

    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }

      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(function () {
        ready();
      }).catch(function (e) {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };

  var handleBootError = function handleBootError(e) {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };
  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */


  var navigate = function navigate(url) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;

    if (isObject(url)) {
      url = getHashByName(url);

      if (!url) {
        return;
      }
    }

    var hash = getHash();

    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }

    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      setHash(url);

      if (!mustUpdateLocationHash()) {
        forcedHash = url;
        handleHashChange(url).then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(function () {
        app._refocus();
      }).catch(function (e) {
        console.error(e);
      });
    }
  };

  var queue = function queue(hash) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);

    if (!navigateQueue.has(hash)) {
      var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _request = _step.value;

          _request.cancel();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }

    return false;
  };
  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */


  var handleHashChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(override) {
      var hash, queueId, request, route, result, store;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              hash = cleanHash(override || getHash());
              queueId = decodeURIComponent(hash);
              request = navigateQueue.get(queueId); // handle hash updated manually

              if (!request && !navigateQueue.size) {
                request = queue(hash);
              }

              route = getRouteByHash(hash);

              if (route) {
                _context.next = 8;
                break;
              }

              if (routeExists('*')) {
                navigate('*', {
                  failedHash: hash
                });
              } else {
                console.error("Unable to navigate to: ".concat(hash));
              }

              return _context.abrupt("return");

            case 8:
              // update current processed request
              request.hash = hash;
              request.route = route;
              _context.next = 12;
              return beforeEachRoute(getActiveHash(), request);

            case 12:
              result = _context.sent;

              if (!route.beforeNavigate) {
                _context.next = 17;
                break;
              }

              _context.next = 16;
              return route.beforeNavigate(getActiveHash(), request);

            case 16:
              result = _context.sent;

            case 17:
              if (!isBoolean(result)) {
                _context.next = 22;
                break;
              }

              if (!result) {
                _context.next = 20;
                break;
              }

              return _context.abrupt("return", resolveHashChange(request));

            case 20:
              _context.next = 25;
              break;

            case 22:
              // if navigation guard didn't return true
              // we cancel the current request
              request.cancel();
              navigateQueue.delete(queueId);

              if (isString(result)) {
                navigate(result);
              } else if (isObject(result)) {
                store = true;

                if (isBoolean(result.store)) {
                  store = result.store;
                }

                navigate(result.path, result.params, store);
              }

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleHashChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */


  var resolveHashChange = function resolveHashChange(request) {
    var hash = request.hash;
    var route = request.route;
    var queueId = decodeURIComponent(hash); // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself

    setLastHash(hash);

    if (route.path) {
      var component = getComponent(route.path); // if a hook is provided for the current route

      if (isFunction(route.hook)) {
        var urlParams = getValuesFromHash(hash, route.path);
        var params = {};

        var _iterator2 = _createForOfIteratorHelper(urlParams.keys()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var key = _step2.value;
            params[key] = urlParams.get(key);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        route.hook(app, _objectSpread2({}, params));
      } // if there is a component attached to the route


      if (component) {
        // force page to root state to prevent shared state issues
        var activePage = getActivePage();

        if (activePage) {
          var keepAlive = keepActivePageAlive(getActiveRoute(), request);

          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }

        if (isPage(component)) {
          load(request).then(function () {
            app._refocus();

            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(function (contents) {
            return contents.default;
          }).then(function (module) {
            storeComponent(route.path, module);
            return load(request);
          }).then(function () {
            app._refocus();

            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };
  /**
   * Directional step in history
   * @param direction
   */


  var step = function step() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!level || isNaN(level)) {
      return false;
    }

    var history = getHistory(); // for now we only support negative numbers

    level = Math.abs(level); // we can't step back past the amount
    // of history entries

    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }

      return false;
    } else if (history.length) {
      var _navigate;

      // for now we only support history back
      var route = history.splice(history.length - level, level)[0]; // store changed history

      setHistory(history);
      return navigate(route.hash, (_navigate = {}, _defineProperty(_navigate, symbols.backtrack, true), _defineProperty(_navigate, symbols.historyState, route.state), _navigate), false);
    } else if (routerConfig.get('backtrack')) {
      var hashLastPart = /(\/:?[\w%\s-]+)$/;
      var hash = stripRegex(getHash());
      var floor = getFloor(hash); // test if we got deep-linked

      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, ''); // if we have a configured route
          // we navigate to it

          if (getRouteByHash(hash)) {
            return navigate(hash, _defineProperty({}, symbols.backtrack, true), false);
          }
        }
      }
    }

    return false;
  };
  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */

  var resume = function resume() {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(function (res) {
        resumeHash = '';

        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };
  /**
   * Force reload active hash
   */


  var reload = function reload() {
    if (!isNavigating()) {
      var hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };
  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */


  var isNavigating = function isNavigating() {
    if (navigateQueue.size) {
      var isProcessing = false;

      var _iterator3 = _createForOfIteratorHelper(navigateQueue.values()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var request = _step3.value;

          if (!request.isCancelled) {
            isProcessing = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return isProcessing;
    }

    return false;
  };

  var getResumeHash = function getResumeHash() {
    return resumeHash;
  };
  /**
   * By default we return the location hash
   * @returns {string}
   */

  var getHash = function getHash() {
    return document.location.hash;
  };
  /**
   * Update location hash
   * @param url
   */


  var setHash = function setHash(url) {
    document.location.hash = url;
  };
  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */


  var initRouter = function initRouter(config) {
    if (config.getHash) {
      getHash = config.getHash;
    }

    if (config.setHash) {
      setHash = config.setHash;
    }
  };
  /**
   * On hash change we start processing
   */

  var registerListener = function registerListener() {
    Registry.addEventListener(window, 'hashchange', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!mustUpdateLocationHash()) {
                _context2.next = 9;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return handleHashChange();

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 6]]);
    })));
  };
  /**
   * Navigate to root hash
   */


  var root = function root() {
    var rootHash = getRootHash();

    if (isString(rootHash)) {
      navigate(rootHash);
    } else if (isFunction(rootHash)) {
      rootHash().then(function (res) {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  }; // export API


  var Router = {
    startRouter: startRouter,
    navigate: navigate,
    resume: resume,
    step: step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage: function getActivePage$1() {
      // warning
      return getActivePage();
    },
    getActiveRoute: getActiveRoute,
    getActiveHash: getActiveHash,
    focusWidget: focusWidget,
    getActiveWidget: getActiveWidget,
    restoreFocus: restoreFocus,
    isNavigating: isNavigating,
    getHistory: getHistory,
    setHistory: setHistory,
    getHistoryState: getHistoryState,
    replaceHistoryState: replaceHistoryState,
    getQueryStringParams: getQueryStringParams,
    reload: reload,
    symbols: symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,

    /**
     * Deprecated api methods
     */
    setupRoutes: function setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on: function on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before: function before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after: function after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  var channels = function channels() {
    return Settings.get('platform', 'tv', defaultChannels);
  };
  var randomChannel = function randomChannel() {
    return channels()[~~(channels.length * Math.random())];
  };

  var currentChannel;
  var callbacks = {};

  var emit = function emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callbacks[event] && callbacks[event].forEach(function (cb) {
      cb.apply(null, args);
    });
  }; // local mock methods


  var methods = {
    getChannel: function getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        if (currentChannel) {
          var channel = _objectSpread2({}, currentChannel);

          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram: function getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel: function setChannel(number) {
      return new Promise(function (resolve, reject) {
        if (number) {
          var newChannel = channels().find(function (c) {
            return c.number === number;
          });

          if (newChannel) {
            currentChannel = newChannel;

            var channel = _objectSpread2({}, currentChannel);

            delete channel.program;
            emit('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  var initTV = function initTV(config) {
    methods = {};

    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }

    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }

    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }

    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit);
    }
  }; // public API

  var initPurchase = function initPurchase(config) {
    if (config.billingUrl) ;
  };

  var PinInput = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(PinInput, _Lightning$Component);

    var _super = _createSuper(PinInput);

    function PinInput() {
      _classCallCheck(this, PinInput);

      return _super.apply(this, arguments);
    }

    _createClass(PinInput, [{
      key: "index",
      set: function set(v) {
        this.x = v * (120 + 24);
      }
    }, {
      key: "nr",
      set: function set(v) {
        var _this = this;

        this._timeout && clearTimeout(this._timeout);

        if (v) {
          this.setSmooth('alpha', 1);
        } else {
          this.setSmooth('alpha', 0.5);
        }

        this.tag('Nr').patch({
          text: {
            text: v && v.toString() || '',
            fontSize: v === '*' ? 120 : 80
          }
        });

        if (v && v !== '*') {
          this._timeout = setTimeout(function () {
            _this._timeout = null;
            _this.nr = '*';
          }, 750);
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 120,
          h: 150,
          rect: true,
          color: 0xff949393,
          alpha: 0.5,
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: 10
          },
          Nr: {
            w: function w(_w) {
              return _w;
            },
            y: 24,
            text: {
              text: '',
              textColor: 0xff333333,
              fontSize: 80,
              textAlign: 'center',
              verticalAlign: 'middle'
            }
          }
        };
      }
    }]);

    return PinInput;
  }(lng.Component);

  var PinDialog = /*#__PURE__*/function (_Lightning$Component2) {
    _inherits(PinDialog, _Lightning$Component2);

    var _super2 = _createSuper(PinDialog);

    function PinDialog() {
      _classCallCheck(this, PinDialog);

      return _super2.apply(this, arguments);
    }

    _createClass(PinDialog, [{
      key: "_init",
      value: function _init() {
        var children = [];

        for (var i = 0; i < 4; i++) {
          children.push({
            type: PinInput,
            index: i
          });
        }

        this.tag('Code').children = children;
      }
    }, {
      key: "pin",
      get: function get() {
        if (!this._pin) this._pin = '';
        return this._pin;
      },
      set: function set(v) {
        if (v.length <= 4) {
          var maskedPin = new Array(Math.max(v.length - 1, 0)).fill('*', 0, v.length - 1);
          v.length && maskedPin.push(v.length > this._pin.length ? v.slice(-1) : '*');

          for (var i = 0; i < 4; i++) {
            this.tag('Code').children[i].nr = maskedPin[i] || '';
          }

          this._pin = v;
        }
      }
    }, {
      key: "msg",
      get: function get() {
        if (!this._msg) this._msg = '';
        return this._msg;
      },
      set: function set(v) {
        var _this2 = this;

        this._timeout && clearTimeout(this._timeout);
        this._msg = v;

        if (this._msg) {
          this.tag('Msg').text = this._msg;
          this.tag('Info').setSmooth('alpha', 0.5);
          this.tag('Code').setSmooth('alpha', 0.5);
        } else {
          this.tag('Msg').text = '';
          this.tag('Info').setSmooth('alpha', 1);
          this.tag('Code').setSmooth('alpha', 1);
        }

        this._timeout = setTimeout(function () {
          _this2.msg = '';
        }, 2000);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.setSmooth('alpha', 1);
      }
    }, {
      key: "_handleKey",
      value: function _handleKey(event) {
        if (this.msg) {
          this.msg = false;
        } else {
          var val = parseInt(event.key);

          if (val > -1) {
            this.pin += val;
          }
        }
      }
    }, {
      key: "_handleBack",
      value: function _handleBack() {
        if (this.msg) {
          this.msg = false;
        } else {
          if (this.pin.length) {
            this.pin = this.pin.slice(0, this.pin.length - 1);
          } else {
            Pin.hide();
            this.resolve(false);
          }
        }
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var _this3 = this;

        if (this.msg) {
          this.msg = false;
        } else {
          Pin.submit(this.pin).then(function (val) {
            _this3.msg = 'Unlocking ...';
            setTimeout(function () {
              Pin.hide();
            }, 1000);

            _this3.resolve(val);
          }).catch(function (e) {
            _this3.msg = e;

            _this3.reject(e);
          });
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          zIndex: 1,
          w: function w(_w2) {
            return _w2;
          },
          h: function h(_h) {
            return _h;
          },
          rect: true,
          color: 0xdd000000,
          alpha: 0.000001,
          Dialog: {
            w: 648,
            h: 320,
            y: function y(h) {
              return (h - 320) / 2;
            },
            x: function x(w) {
              return (w - 648) / 2;
            },
            rect: true,
            color: 0xdd333333,
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: 10
            },
            Info: {
              y: 24,
              x: 48,
              text: {
                text: 'Please enter your PIN',
                fontSize: 32
              }
            },
            Msg: {
              y: 260,
              x: 48,
              text: {
                text: '',
                fontSize: 28,
                textColor: 0xffffffff
              }
            },
            Code: {
              x: 48,
              y: 96
            }
          }
        };
      }
    }]);

    return PinDialog;
  }(lng.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var unlocked = false;
  var contextItems = ['purchase', 'parental'];

  var _submit = function submit(pin, context) {
    return new Promise(function (resolve, reject) {
      if (pin.toString() === Settings.get('platform', 'pin', '0000').toString()) {
        unlocked = true;
        resolve(unlocked);
      } else {
        reject('Incorrect pin');
      }
    });
  };

  var check = function check(context) {
    return new Promise(function (resolve) {
      resolve(unlocked);
    });
  };

  var initPin = function initPin(config) {
    if (config.submit && typeof config.submit === 'function') {
      _submit = config.submit;
    }

    if (config.check && typeof config.check === 'function') {
      check = config.check;
    }
  };
  var pinDialog = null;

  var contextCheck = function contextCheck(context) {
    if (context === undefined) {
      Log.info('Please provide context explicitly');
      return contextItems[0];
    } else if (!contextItems.includes(context)) {
      Log.warn('Incorrect context provided');
      return false;
    }

    return context;
  }; // Public API


  var Pin = {
    show: function show() {
      return new Promise(function (resolve, reject) {
        pinDialog = ApplicationInstance.stage.c({
          ref: 'PinDialog',
          type: PinDialog,
          resolve: resolve,
          reject: reject
        });
        ApplicationInstance.childList.a(pinDialog);
        ApplicationInstance.focus = pinDialog;
      });
    },
    hide: function hide() {
      ApplicationInstance.focus = null;
      ApplicationInstance.children = ApplicationInstance.children.map(function (child) {
        return child !== pinDialog && child;
      });
      pinDialog = null;
    },
    submit: function submit(pin, context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            _submit(pin, context).then(resolve).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    unlocked: function unlocked(context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            check(context).then(resolve).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    locked: function locked(context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            check(context).then(function (unlocked) {
              return resolve(!!!unlocked);
            }).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ApplicationInstance;
  var Launch = (function (App, appSettings, platformSettings, appData) {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage(); // Initialize plugins

    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }

    var app = Application(App, appData, platformSettings);
    ApplicationInstance = new app(appSettings);
    return ApplicationInstance;
  });

  var VideoTexture = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VideoTexture, _Lightning$Component);

    var _super = _createSuper(VideoTexture);

    function VideoTexture() {
      _classCallCheck(this, VideoTexture);

      return _super.apply(this, arguments);
    }

    _createClass(VideoTexture, [{
      key: "videoEl",
      get: function get() {
        return this._videoEl;
      },
      set: function set(v) {
        this._videoEl = v;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoView.texture;
      }
    }, {
      key: "isVisible",
      get: function get() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._createVideoTexture();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;

        var stage = this.stage;
        this._lastTime = 0;

        if (!this._updateVideoTexture) {
          this._updateVideoTexture = function () {
            if (_this.videoTexture.options.source && _this.videoEl.videoWidth && _this.active) {
              var gl = stage.gl;
              var currentTime = new Date().getTime();

              var getVideoPlaybackQuality = _this.videoEl.getVideoPlaybackQuality(); // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'


              var frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : _this.videoEl.webkitDecodedFrameCount;
              var mustUpdate = frameCount ? _this._lastFrame !== frameCount : _this._lastTime < currentTime - 30;

              if (mustUpdate) {
                _this._lastTime = currentTime;
                _this._lastFrame = frameCount;

                try {
                  gl.bindTexture(gl.TEXTURE_2D, _this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this.videoEl);
                  _this._lastFrame = _this.videoEl.webkitDecodedFrameCount;
                  _this.videoView.visible = true;
                  _this.videoTexture.options.w = _this.videoEl.width;
                  _this.videoTexture.options.h = _this.videoEl.height;
                  var expectedAspectRatio = _this.videoView.w / _this.videoView.h;
                  var realAspectRatio = _this.videoEl.width / _this.videoEl.height;

                  if (expectedAspectRatio > realAspectRatio) {
                    _this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    _this.videoView.scaleY = 1;
                  } else {
                    _this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    _this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);

                  _this.stop();
                }

                _this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }

        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;

        if (this.videoTexture.options.source) {
          var gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }, {
      key: "position",
      value: function position(top, left) {
        this.videoView.patch({
          smooth: {
            x: left,
            y: top
          }
        });
      }
    }, {
      key: "size",
      value: function size(width, height) {
        this.videoView.patch({
          smooth: {
            w: width,
            h: height
          }
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.videoView.setSmooth('alpha', 1);
      }
    }, {
      key: "hide",
      value: function hide() {
        this.videoView.setSmooth('alpha', 0);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: lng.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
    }]);

    return VideoTexture;
  }(lng.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var mediaUrl = function mediaUrl(url) {
    return url;
  };
  var videoEl;
  var videoTexture;
  var metrics;

  var _consumer;

  var precision = 1;
  var textureMode = false;
  var initVideoPlayer = function initVideoPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  }; // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close

  var eventHandlers = {};
  var state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,

    get playingAds() {
      return this._playingAds;
    },

    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },

    skipTime: false,
    playAfterSeek: null
  };
  var hooks = {
    play: function play() {
      state$1.playing = true;
    },
    pause: function pause() {
      state$1.playing = false;
    },
    seeked: function seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort: function abort() {
      deregisterEventListeners();
    }
  };

  var withPrecision = function withPrecision(val) {
    return Math.round(precision * val) + 'px';
  };

  var fireOnConsumer$1 = function fireOnConsumer(event, args) {
    if (_consumer) {
      _consumer.fire('$videoPlayer' + event, args, videoEl.currentTime);

      _consumer.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };

  var fireHook = function fireHook(event, args) {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };

  var customLoader = null;
  var customUnloader = null;

  var loader = function loader(url, videoEl, config) {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(function (resolve) {
      url = mediaUrl(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };

  var unloader = function unloader(videoEl) {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(function (resolve) {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };

  var setupVideoTag = function setupVideoTag() {
    var videoEls = document.getElementsByTagName('video');

    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      var _videoEl = document.createElement('video');

      var platformSettingsWidth = Settings.get('platform', 'width') ? Settings.get('platform', 'width') : 1920;
      var platformSettingsHeight = Settings.get('platform', 'height') ? Settings.get('platform', 'height') : 1080;

      _videoEl.setAttribute('id', 'video-player');

      _videoEl.setAttribute('width', withPrecision(platformSettingsWidth));

      _videoEl.setAttribute('height', withPrecision(platformSettingsHeight));

      _videoEl.style.position = 'absolute';
      _videoEl.style.zIndex = '1';
      _videoEl.style.display = 'none';
      _videoEl.style.visibility = 'hidden';
      _videoEl.style.top = withPrecision(0);
      _videoEl.style.left = withPrecision(0);
      _videoEl.style.width = withPrecision(platformSettingsWidth);
      _videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(_videoEl);
      return _videoEl;
    }
  };
  var setUpVideoTexture = function setUpVideoTexture() {
    if (!ApplicationInstance.tag('VideoTexture')) {
      var el = ApplicationInstance.stage.c({
        type: VideoTexture,
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl: videoEl
      });
      ApplicationInstance.childList.addAt(el, 0);
    }

    return ApplicationInstance.tag('VideoTexture');
  };

  var registerEventListeners = function registerEventListeners() {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(function (event) {
      var handler = function handler(e) {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        } // fire an internal hook


        fireHook(event, {
          videoElement: videoEl,
          event: e
        }); // fire the event (with human friendly event name) to the consumer of the VideoPlayer

        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };

      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };

  var deregisterEventListeners = function deregisterEventListeners() {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(function (event) {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };

  var videoPlayerPlugin = {
    consumer: function consumer(component) {
      _consumer = component;
    },
    loader: function loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader: function unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position: function position() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);

      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size: function size() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);

      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area: function area() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open: function open(url) {
      var _this = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$1.media(url);
      this.hide();
      deregisterEventListeners();

      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        var adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };

        if (config.videoId) {
          adConfig.caid = config.videoId;
        }

        Ads.get(adConfig, _consumer).then(function (ads) {
          state$1.playingAds = true;
          ads.prerolls().then(function () {
            state$1.playingAds = false;
            loader(url, videoEl, config).then(function () {
              registerEventListeners();

              _this.show();

              _this.play();
            }).catch(function (e) {
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload: function reload() {
      if (!this.canInteract) return;
      var url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close: function close() {
      var _this2 = this;

      Ads.cancel();

      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads.stop(); // call self in next tick

        setTimeout(function () {
          _this2.close();
        });
      }

      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear: function clear() {
      if (!this.canInteract) return; // pause the video first to disable sound

      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(function () {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play: function play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(function (e) {
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause: function pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause: function playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute: function mute() {
      var muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop: function loop() {
      var looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek: function seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return; // define whether should continue to play after seek is complete (in seeked hook)

      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      } // pause before actually seeking


      this.pause(); // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)

      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip: function skip(seconds) {
      var _this3 = this;

      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(function () {
        _this3.seek(state$1.skipTime);

        state$1.skipTime = false;
      }, 300);
    },
    show: function show() {
      if (!this.canInteract) return;

      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide: function hide() {
      if (!this.canInteract) return;

      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds: function enableAds() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },

    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },

    get currentTime() {
      return videoEl && videoEl.currentTime;
    },

    get muted() {
      return videoEl && videoEl.muted;
    },

    get looped() {
      return videoEl && videoEl.loop;
    },

    get src() {
      return videoEl && videoEl.getAttribute('src');
    },

    get playing() {
      return state$1.playing;
    },

    get playingAds() {
      return state$1.playingAds;
    },

    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },

    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },

    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },

    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },

    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },

    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },

    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },

    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },

    get adsEnabled() {
      return state$1.adsEnabled;
    },

    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },

    get _consumer() {
      return _consumer;
    }

  };
  var VideoPlayer = autoSetupMixin(videoPlayerPlugin, function () {
    precision = ApplicationInstance && ApplicationInstance.stage && ApplicationInstance.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get('platform', 'textureMode', false);

    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var consumer;

  var getAds = function getAds() {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };

  var initAds = function initAds(config) {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  var state = {
    active: false
  };

  var playSlot = function playSlot() {
    var slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce(function (promise, ad) {
      return promise.then(function () {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };

  var playAd = function playAd(ad) {
    return new Promise(function (resolve) {
      if (state.active === false) {
        Log.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      } // is it safe to rely on videoplayer plugin already created the video tag?


      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl(ad.url);
      videoEl.load();
      var timeEvents = null;
      var timeout;

      var cleanup = function cleanup() {
        // remove all listeners
        Object.keys(handlers).forEach(function (handler) {
          return videoEl.removeEventListener(handler, handlers[handler]);
        });
        resolve();
      };

      var handlers = {
        play: function play() {
          Log.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended: function ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate: function timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log.info('Ad', 'Calculated quartiles times', {
              timeEvents: timeEvents
            });
          }

          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }

          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }

          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled: function stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(function () {
            cleanup();
          }, 5000); // make timeout configurable
        },
        canplay: function canplay() {
          timeout && clearTimeout(timeout);
        },
        error: function error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort: function abort() {
          cleanup();
        } // todo: pause, resume, mute, unmute beacons

      }; // add all listeners

      Object.keys(handlers).forEach(function (handler) {
        return videoEl.addEventListener(handler, handlers[handler]);
      });
      videoEl.play();
    });
  };

  var sendBeacon = function sendBeacon(callbacks, event) {
    if (callbacks && callbacks[event]) {
      Log.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce(function (promise, url) {
        return promise.then(function () {
          return fetch(url) // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
          // note: for fetch failed http responses don't throw an Error :)
          .then(function (response) {
            if (response.status === 200) {
              fireOnConsumer('Beacon' + event + 'Sent');
            } else {
              fireOnConsumer('Beacon' + event + 'Failed' + response.status);
            }

            Promise.resolve(null);
          }).catch(function () {
            Promise.resolve(null);
          });
        });
      }, Promise.resolve(null));
    } else {
      Log.info('Ad', 'No callback found for ' + event);
    }
  };

  var fireOnConsumer = function fireOnConsumer(event, args) {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };

  var Ads = {
    get: function get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls: function prerolls() {
            return Promise.resolve();
          }
        });
      }

      consumer = videoPlayerConsumer;
      return new Promise(function (resolve) {
        Log.info('Ad', 'Starting session');
        getAds(config).then(function (ads) {
          Log.info('Ad', 'API result', ads);
          resolve({
            prerolls: function prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(function () {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }

              return Promise.resolve();
            },
            midrolls: function midrolls() {
              return Promise.resolve();
            },
            postrolls: function postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel: function cancel() {
      Log.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop: function stop() {
      Log.info('Ad', 'Stop Ad');
      state.active = false; // fixme: duplication

      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  /*#__PURE__*/(function (_Lightning$textures$I) {
    _inherits(ScaledImageTexture, _Lightning$textures$I);

    var _super = _createSuper(ScaledImageTexture);

    function ScaledImageTexture(stage) {
      var _this;

      _classCallCheck(this, ScaledImageTexture);

      _this = _super.call(this, stage);
      _this._scalingOptions = undefined;
      return _this;
    }

    _createClass(ScaledImageTexture, [{
      key: "options",
      set: function set(options) {
        this.resizeMode = this._scalingOptions = options;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var obj = _get(_getPrototypeOf(ScaledImageTexture.prototype), "getNonDefaults", this).call(this);

        if (this._src) {
          obj.src = this._src;
        }

        return obj;
      }
    }]);

    return ScaledImageTexture;
  })(lng.textures.ImageTexture);

  /**
   * Copyright 2020 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  /**
   * Returns a styles object for use by components
   * @param {Object|function} styles - Object or callback that takes theme as an argument, ultimately the returned value
   * @param {Object} theme - theme to be provided to styles
   */
  var createStyles = (function (styles, theme) {
    return typeof styles === 'function' ? styles(theme) : styles;
  });

  /**
   * Helpers for lng.Tools.getRoundRect
   */

  var RoundRect = {
    /**
     * Returns a value that will render as the given width (w)
     * when passed to lng.Tools.getRoundRect
     * @param {number} w - px value for expected width
     * @param {*} options
     * @param {number} options.padding - px value for both left and right padding
     * @param {number} options.paddingLeft - px value for left padding, overrides options.padding
     * @param {number} options.paddingRight - px value for right padding, overrides options.padding
     * @param {number} options.strokeWidth - px value for stroke width
     */
    getWidth: function getWidth(w) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _padding$paddingLeft$ = _objectSpread2({
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0,
        strokeWidth: 0
      }, options),
          padding = _padding$paddingLeft$.padding,
          paddingLeft = _padding$paddingLeft$.paddingLeft,
          paddingRight = _padding$paddingLeft$.paddingRight,
          strokeWidth = _padding$paddingLeft$.strokeWidth;

      if (!w) return 0;
      return w - (paddingLeft || padding) - (paddingRight || padding) - strokeWidth;
    },

    /**
     * Returns a value that will render as the given height (h)
     * when passed to lng.Tools.getRoundRect
     * @param {number} h - px value for expected width
     * @param {*} options
     * @param {number} options.padding - px value for both bottom and top padding
     * @param {number} options.paddingBottom - px value for bottom padding, overrides options.padding
     * @param {number} options.paddingTop - px value for top padding, overrides options.padding
     * @param {number} options.strokeWidth - px value for stroke width
     */
    getHeight: function getHeight(h) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _padding$paddingBotto = _objectSpread2({
        padding: 0,
        paddingBottom: 0,
        paddingTop: 0,
        strokeWidth: 0
      }, options),
          padding = _padding$paddingBotto.padding,
          paddingBottom = _padding$paddingBotto.paddingBottom,
          paddingTop = _padding$paddingBotto.paddingTop,
          strokeWidth = _padding$paddingBotto.strokeWidth;

      if (!h) return 0;
      return h - (paddingBottom || padding) - (paddingTop || padding) - strokeWidth;
    }
  };
  /**
   * Merges two objects together and returns the duplicate.
   *
   * @param {Object} target - object to be cloned
   * @param {Object} [object] - secondary object to merge into clone
   */

  function clone(target, object) {
    var _clone = _objectSpread2({}, target);

    if (!object || target === object) return _clone;

    for (var key in object) {
      var value = object[key];

      if (Object.prototype.hasOwnProperty.call(target, key)) {
        _clone[key] = getMergeValue(key, target, object);
      } else {
        _clone[key] = value;
      }
    }

    return _clone;
  }

  function getMergeValue(key, target, object) {
    var targetVal = target[key];
    var objectVal = object[key];
    var targetValType = typeof targetVal;
    var objectValType = typeof objectVal;

    if (targetValType !== objectValType || objectValType === 'function' || Array.isArray(objectVal)) {
      return objectVal;
    }

    if (objectVal && objectValType === 'object') {
      return clone(targetVal, objectVal);
    }

    return objectVal;
  }
  /**
   * Returns the rendered width of a given text texture
   * @param {Object} text - text texture properties
   * @param {string} text.text - text value
   * @param {string} text.fontStyle - css font-style property
   * @param {(string|number)} text.fontWeight - css font-weight property
   * @param {string} [fontSize=0] - css font-size property (in px)
   * @param {string} [text.fontFamily=sans-serif] - css font-weight property
   * @param {string} text.fontFace - alias for fontFamily
   *
   * @returns {number} text width
   * */


  function measureTextWidth() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var fontStyle = text.fontStyle,
        fontWeight = text.fontWeight,
        fontSize = text.fontSize,
        _text$fontFamily = text.fontFamily,
        fontFamily = _text$fontFamily === void 0 ? text.fontFace || 'sans-serif' : _text$fontFamily;
    var fontCss = [fontStyle, fontWeight, fontSize ? "".concat(fontSize, "px") : '0', "'".concat(fontFamily, "'")].filter(Boolean).join(' ');
    ctx.font = fontCss;
    var textMetrics = ctx.measureText(text.text || '');
    return Math.round(textMetrics.width);
  }
  /**
   * Returns first argument that is a number. Useful for finding ARGB numbers. Does not convert strings to numbers
   * @param {...*} number - maybe a number
   **/

  function getFirstNumber() {
    for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }

    return numbers.find(Number.isFinite);
  }
  /**
   * Naively looks for dimensional prop (i.e. w, h, x, y, etc.), first searching for
   * a transition target value then defaulting to the current set value
   * @param {string} prop - property key
   * @param {lng.Component} component - Lightning component to operate against
   */

  function getDimension(prop, component) {
    if (!component) return 0;
    var transition = component.transition(prop);
    if (transition.isRunning()) return transition.targetValue;
    return component[prop];
  }
  var getX = getDimension.bind(null, 'x');
  var getY = getDimension.bind(null, 'y');
  var getW = function getW(component) {
    return getDimension('w', component) || component.renderWidth;
  };
  var getH = function getH(component) {
    return getDimension('h', component) || component.renderHeight;
  };

  function withStyles(Base, styles, theme) {
    var _theme = theme || Base.theme;

    var _styles = Base.styles ? clone(Base.styles, createStyles(styles, _theme)) : createStyles(styles, _theme);

    return /*#__PURE__*/function (_Base) {
      _inherits(_class, _Base);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "styles",
        get: function get() {
          return _styles;
        }
      }], [{
        key: "name",
        get: function get() {
          return Base.name;
        }
      }, {
        key: "styles",
        get: function get() {
          return _styles;
        }
      }]);

      return _class;
    }(Base);
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear' 
   * that is a function which will clear the timer to prevent previously scheduled executions. 
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */

  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;

        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }

    var debounced = function debounced() {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };

    debounced.flush = function () {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  }

  debounce.debounce = debounce;
  var debounce_1 = debounce;

  var Icon = /*#__PURE__*/function (_lng$Component) {
    _inherits(Icon, _lng$Component);

    var _super = _createSuper(Icon);

    function Icon() {
      _classCallCheck(this, Icon);

      return _super.apply(this, arguments);
    }

    _createClass(Icon, [{
      key: "icon",
      get: function get() {
        return this._icon;
      },
      set: function set(icon) {
        this._icon = icon;

        this._update();
      }
    }, {
      key: "_init",
      value: function _init() {
        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        var icon = this.icon,
            w = this.w,
            h = this.h;
        var template = getIconTemplate(icon, w, h);
        this.patch(template);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          color: 0xffffffff,
          w: 0,
          h: 0
        };
      }
    }]);

    return Icon;
  }(lng.Component);

  var _map = [/^<svg.*<\/svg>$/, /\.svg$/, /\.(a?png|bmp|gif|ico|cur|jpe?g|pjp(eg)?|jfif|tiff?|webp)$/].map(function (regex) {
    return RegExp.prototype.test.bind(regex);
  }),
      _map2 = _slicedToArray(_map, 3),
      isSvgTag = _map2[0],
      isSvgURI = _map2[1],
      isImageURI = _map2[2];

  function getIconTemplate(icon, w, h) {
    var template = {
      w: w,
      h: h
    };

    switch (true) {
      case isSvgTag(icon):
        template.texture = lng.Tools.getSvgTexture("data:image/svg+xml,".concat(encodeURIComponent(icon)), w, h);
        break;

      case isSvgURI(icon):
        template.texture = lng.Tools.getSvgTexture(icon, w, h);
        break;

      case isImageURI(icon):
        template.src = icon;
        break;
    }

    return template;
  }

  var styles = {
    w: 150,
    h: 40,
    radius: 0,
    background: {
      color: 0xff1f1f1f
    },
    icon: {
      color: 0xffffffff
    },
    text: {
      fontSize: 20,
      color: 0xffffffff
    },
    padding: 50,
    stroke: {
      color: 0x00,
      weight: 2
    },
    focused: {
      background: {
        color: 0xffffffff
      },
      text: {
        color: 0xff1f1f1f
      },
      icon: {
        color: 0xff1f1f1f
      }
    }
  };

  var Button = /*#__PURE__*/function (_lng$Component) {
    _inherits(Button, _lng$Component);

    var _super = _createSuper(Button);

    function Button() {
      _classCallCheck(this, Button);

      return _super.apply(this, arguments);
    }

    _createClass(Button, [{
      key: "_construct",
      value: function _construct() {
        var _this = this;

        this._focused = false;
        this._whenEnabled = new Promise(function (resolve) {
          return _this._enable = resolve;
        }, console.error);
        this._strokeWeight = 2;
        this._strokeColor = 0x00;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._update();
      }
    }, {
      key: "_focus",
      value: function _focus() {
        if (this._smooth === undefined) this._smooth = true;
        this._focused = true;

        this._update();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._focused = false;

        this._update();
      }
    }, {
      key: "_updateColor",
      value: function _updateColor() {
        var color = this._focused ? getFirstNumber(this.focusedBackground, this.styles.focused.background.color) : getFirstNumber(this.background, this.styles.background.color);

        if (this._smooth) {
          this.smooth = {
            color: color
          };
        } else {
          this.color = color;
        }
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        if (this.title) {
          this._Title.text = _objectSpread2(_objectSpread2({}, this.styles.text), {}, {
            fontColor: this.styles.text.color,
            fontSize: this.fontSize || this.styles.text.fontSize,
            fontFamily: this.styles.text.fontFace || this.styles.text.fontFamily || this.stage._options.defaultFontFace,
            text: this.title
          });
          var color = this._focused ? getFirstNumber(this.focusedTextColor, this.styles.focused.text.color) : getFirstNumber(this.textColor, this.styles.text.color);

          if (this._smooth) {
            this._Title.smooth = {
              color: color
            };
          } else {
            this._Title.color = color;
          }
        } else {
          this._Title.texture = false;
        }
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        if (this.icon) {
          var _this$icon = this.icon,
              color = _this$icon.color,
              size = _this$icon.size,
              spacing = _this$icon.spacing,
              src = _this$icon.src;

          this._Icon.patch({
            w: size,
            h: size,
            icon: src,
            flexItem: {
              marginRight: this.title ? spacing : 0
            }
          });

          var iconColor = this._focused ? getFirstNumber(this.focusedIconColor, this.styles.focused.icon.color) : getFirstNumber(color, this.styles.icon.color);

          if (this._smooth) {
            this._Icon.smooth = {
              color: iconColor
            };
          } else {
            this._Icon.color = iconColor;
          }
        } else {
          this._Icon.patch({
            w: 0,
            h: 0,
            texture: false,
            flexItem: false
          });
        }
      }
    }, {
      key: "_updateStroke",
      value: function _updateStroke() {
        if (this.stroke && !this._focused) {
          var radius = this.radius || this.styles.radius;
          this.texture = lng.Tools.getRoundRect(RoundRect.getWidth(this.w), RoundRect.getHeight(this.h), radius, 0x00, true, 0xffffffff);
          this._Stroke.color = this.strokeColor;
          this._Stroke.texture = lng.Tools.getRoundRect(RoundRect.getWidth(this.w), RoundRect.getHeight(this.h), radius, this.strokeWeight, 0xffffffff, true, this.background);
        } else {
          var _radius = this.radius || this.styles.radius;

          this.texture = lng.Tools.getRoundRect(RoundRect.getWidth(this.w), RoundRect.getHeight(this.h), _radius);
          this._Stroke.texture = false;
        }
      }
    }, {
      key: "_updateWidth",
      value: function _updateWidth() {
        if (!this.fixed) {
          var iconSize = this._icon ? this._icon.size + this._icon.spacing : 0;
          var padding = getFirstNumber(this.padding, this.styles.padding, 10);
          var w = measureTextWidth(this._Title.text || {}) + padding * 2 + iconSize;

          if (w && w !== this.w) {
            this.w = w > this.styles.w ? w : this.styles.w;
            this.fireAncestors('$itemChanged');
            this.signal('buttonWidthChanged', {
              w: this.w
            });
          }
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this2 = this;

        this._whenEnabled.then(function () {
          _this2._updateColor();

          _this2._updateTitle();

          _this2._updateIcon();

          _this2._updateStroke();

          _this2._updateWidth();
        });
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        if (typeof this.onEnter === 'function') {
          this.onEnter(this);
        }
      }
    }, {
      key: "radius",
      get: function get() {
        return this._radius;
      },
      set: function set(radius) {
        if (this._radius !== radius) {
          this._radius = radius;

          this._update();
        }
      }
    }, {
      key: "title",
      get: function get() {
        return this._title;
      },
      set: function set(title) {
        if (this._title !== title) {
          this._title = title;

          this._update();
        }
      }
    }, {
      key: "icon",
      get: function get() {
        return this._icon;
      },
      set: function set(_ref) {
        var src = _ref.src,
            _ref$size = _ref.size,
            size = _ref$size === void 0 ? 20 : _ref$size,
            _ref$spacing = _ref.spacing,
            spacing = _ref$spacing === void 0 ? 5 : _ref$spacing,
            _ref$color = _ref.color,
            color = _ref$color === void 0 ? 0xffffffff : _ref$color;

        if (src) {
          this._icon = {
            src: src,
            size: size,
            spacing: spacing,
            color: color
          };
        } else {
          this._icon = null;
        }

        this._update();
      }
    }, {
      key: "strokeWeight",
      get: function get() {
        return this._strokeWeight;
      },
      set: function set(strokeWeight) {
        if (this._strokeWeight !== strokeWeight) {
          this._strokeWeight = strokeWeight;

          this._update();
        }
      }
    }, {
      key: "strokeColor",
      get: function get() {
        return this._strokeColor;
      },
      set: function set(strokeColor) {
        if (this._strokeColor !== strokeColor) {
          this._strokeColor = strokeColor;

          this._update();
        }
      }
    }, {
      key: "stroke",
      get: function get() {
        return this._stroke;
      },
      set: function set(stroke) {
        if (this._stroke !== stroke) {
          this._stroke = stroke;

          this._update();
        }
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(w) {
        if (this._w !== w) {
          this._w = w;

          this._update();
        }
      }
    }, {
      key: "label",
      get: function get() {
        return this._label || this._title;
      },
      set: function set(label) {
        this._label = label;
      }
    }, {
      key: "announce",
      get: function get() {
        // TODO - Localization?
        // Do we need a locale file with
        // component translations?
        return this.label + ', Button';
      }
    }, {
      key: "_Content",
      get: function get() {
        return this.tag('Content');
      }
    }, {
      key: "_Title",
      get: function get() {
        return this.tag('Content.Title');
      }
    }, {
      key: "_Icon",
      get: function get() {
        return this.tag('Content.Icon');
      }
    }, {
      key: "_Stroke",
      get: function get() {
        return this.tag('Stroke');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: this.styles.w,
          h: this.styles.h,
          radius: this.styles.radius,
          strokeColor: this.styles.stroke.color,
          strokeWeight: this.styles.stroke.weight,
          Content: {
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            },
            flex: {
              direction: 'row',
              alignContent: 'center',
              alignItems: 'center'
            },
            Icon: {
              type: Icon
            },
            // TODO: Wonky lineHeight / fontsize from Lightning
            // Move title down 2 pixels to _visually_ center it
            // inside the button
            Title: {
              y: 2
            }
          },
          Stroke: {
            zIndex: -1,
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            }
          }
        };
      }
    }]);

    return Button;
  }(lng.Component);

  var Button$1 = withStyles(Button, styles);

  var FocusManager = /*#__PURE__*/function (_lng$Component) {
    _inherits(FocusManager, _lng$Component);

    var _super = _createSuper(FocusManager);

    function FocusManager() {
      _classCallCheck(this, FocusManager);

      return _super.apply(this, arguments);
    }

    _createClass(FocusManager, [{
      key: "_construct",
      value: function _construct() {
        this._selectedIndex = 0;
        this.direction = this.direction || 'row';
      }
    }, {
      key: "direction",
      get: function get() {
        return this._direction;
      },
      set: function set(direction) {
        this._direction = direction;
        var state = {
          none: 'None',
          column: 'Column',
          row: 'Row'
        }[direction];

        if (state) {
          this._setState(state);
        }
      }
    }, {
      key: "Items",
      get: function get() {
        return this.tag('Items');
      }
    }, {
      key: "items",
      get: function get() {
        return this.Items.children;
      },
      set: function set(items) {
        this.Items.childList.clear();
        this._selectedIndex = 0;
        this.appendItems(items); // If the first item has skip focus when appended get the next focusable item

        var initialSelection = this.Items.children[this.selectedIndex];

        if (initialSelection && initialSelection.skipFocus) {
          this.selectNext();
        }
      }
    }, {
      key: "appendItems",
      value: function appendItems() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.Items.childList.a(items);

        this._refocus();
      }
    }, {
      key: "selected",
      get: function get() {
        return this.Items.children[this.selectedIndex];
      }
    }, {
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(index) {
        this.prevSelected = this.selected;

        if (!this.Items.children.length || !this.Items.children[index] || !this.Items.children[index].skipFocus) {
          if (index !== this._selectedIndex) {
            this._selectedIndex = index;
          }

          if (this.selected) {
            this.render(this.selected, this.prevSelected);
            this.signal('selectedChange', this.selected, this.prevSelected);
          } // Don't call refocus until after a new render in case of a situation like Plinko nav
          // where we don't want to focus the previously selected item and need to get the new one first


          this._refocus();
        }
      } // Override

    }, {
      key: "render",
      value: function render() {}
    }, {
      key: "_firstFocusableIndex",
      value: function _firstFocusableIndex() {
        if (!this.items.length) return 0;
        var firstItem = this.items.reduce(function (acc, item, idx) {
          if (!item.skipFocus) {
            acc.push(_objectSpread2(_objectSpread2({}, item), {}, {
              originalIdx: idx
            }));
          }

          return acc;
        }, []).shift();
        return firstItem.originalIdx;
      }
    }, {
      key: "_lastFocusableIndex",
      value: function _lastFocusableIndex() {
        if (!this.items.length) return 0;
        var lastItem = this.items.reduce(function (acc, item, idx) {
          if (!item.skipFocus) {
            acc.push(_objectSpread2(_objectSpread2({}, item), {}, {
              originalIdx: idx
            }));
          }

          return acc;
        }, []).pop();
        return lastItem.originalIdx;
      }
    }, {
      key: "selectPrevious",
      value: function selectPrevious() {
        var hasFocusable = !!(this.items || []).filter(function (i) {
          return !i.skipFocus;
        }).length;

        if (this.selectedIndex === 0 && !this.wrapSelected || !hasFocusable) {
          return false;
        }

        var previousItemIndex = this.items.map(function (item) {
          return !!item.skipFocus;
        }).lastIndexOf(false, this._selectedIndex - 1);

        if (previousItemIndex > -1) {
          this.selectedIndex = previousItemIndex;
        } else if (this.wrapSelected) {
          this.selectedIndex = this._lastFocusableIndex();
        }

        return true;
      }
    }, {
      key: "selectNext",
      value: function selectNext() {
        var _this = this;

        var hasFocusable = !!(this.items || []).filter(function (i) {
          return !i.skipFocus;
        }).length;

        if (this.selectedIndex === this.Items.children.length - 1 && !this.wrapSelected || !hasFocusable) {
          return false;
        }

        var nextIndex = this.items.findIndex(function (item, idx) {
          return !item.skipFocus && idx > _this._selectedIndex;
        });

        if (nextIndex > -1) {
          this.selectedIndex = nextIndex;
        } else if (this.wrapSelected) {
          this.selectedIndex = this._firstFocusableIndex();
        }

        return true;
      }
    }, {
      key: "_getIndexOfItemNear",
      value: function _getIndexOfItemNear(selected, prev) {
        // Euclidean distance
        function distance(xA, yA, xB, yB) {
          var xDiff = xA - xB;
          var yDiff = yA - yB;
          return Math.sqrt(Math.pow(xDiff, 2) + Math.sqrt(Math.pow(yDiff, 2)));
        }

        var prevItem = prev.selected || prev.currentItem;

        if (!selected || !selected.items || !selected.items.length || !prevItem) {
          return 0;
        }

        var prevOffsetX = prev.transition('x').targetValue || 0;
        var prevOffsetY = prev.transition('y').targetValue || 0;

        var _prevItem$core$getAbs = prevItem.core.getAbsoluteCoords(-prevOffsetX, -prevOffsetY),
            _prevItem$core$getAbs2 = _slicedToArray(_prevItem$core$getAbs, 2),
            itemX = _prevItem$core$getAbs2[0],
            itemY = _prevItem$core$getAbs2[1];

        var prevMiddle = [itemX + prevItem.w / 2, itemY + prevItem.h / 2]; // Get all item center points from selected

        var selectedCoordArray = selected.items.map(function (item, index) {
          var _item$core$getAbsolut = item.core.getAbsoluteCoords(0, 0),
              _item$core$getAbsolut2 = _slicedToArray(_item$core$getAbsolut, 2),
              x = _item$core$getAbsolut2[0],
              y = _item$core$getAbsolut2[1];

          return {
            index: index,
            distance: !item.skipFocus ? distance(prevMiddle[0], prevMiddle[1], x + item.w / 2, y + item.h / 2) : null
          };
        }).filter(function (item) {
          // Remove all indexes that don't have a distance (skipFocus)
          return null !== item.distance;
        }).sort(function (a, b) {
          return a.distance - b.distance;
        });
        return selectedCoordArray[0].index;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        var selected = this.selected; // Make sure we're focused on a component

        if (selected) {
          if (selected.focusRef) {
            return selected.tag(selected.focusRef);
          } else if (selected.cparent) {
            return selected;
          }
        }

        return this;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Items: {}
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this2) {
          _inherits(None, _this2);

          var _super2 = _createSuper(None);

          function None() {
            _classCallCheck(this, None);

            return _super2.apply(this, arguments);
          }

          return _createClass(None);
        }(this), /*#__PURE__*/function (_this3) {
          _inherits(Row, _this3);

          var _super3 = _createSuper(Row);

          function Row() {
            _classCallCheck(this, Row);

            return _super3.apply(this, arguments);
          }

          _createClass(Row, [{
            key: "_handleLeft",
            value: function _handleLeft() {
              return this.selectPrevious();
            }
          }, {
            key: "_handleRight",
            value: function _handleRight() {
              return this.selectNext();
            }
          }]);

          return Row;
        }(this), /*#__PURE__*/function (_this4) {
          _inherits(Column, _this4);

          var _super4 = _createSuper(Column);

          function Column() {
            _classCallCheck(this, Column);

            return _super4.apply(this, arguments);
          }

          _createClass(Column, [{
            key: "_handleUp",
            value: function _handleUp() {
              return this.selectPrevious();
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              return this.selectNext();
            }
          }]);

          return Column;
        }(this)];
      }
    }]);

    return FocusManager;
  }(lng.Component);

  var Column = /*#__PURE__*/function (_FocusManager) {
    _inherits(Column, _FocusManager);

    var _super = _createSuper(Column);

    function Column() {
      _classCallCheck(this, Column);

      return _super.apply(this, arguments);
    }

    _createClass(Column, [{
      key: "_construct",
      value: function _construct() {
        var _this = this;

        _get(_getPrototypeOf(Column.prototype), "_construct", this).call(this);

        this._smooth = false;
        this._itemSpacing = 0;
        this._itemPosX = 0;
        this._itemPosY = 0;
        this._scrollIndex = 0;
        this._whenEnabled = new Promise(function (resolve) {
          return _this._firstEnable = resolve;
        });
        this.debounceDelay = Number.isInteger(this.debounceDelay) ? this.debounceDelay : 30;
        this._update = debounce_1.debounce(this._updateLayout, this.debounceDelay);
        this._updateImmediate = debounce_1.debounce(this._updateLayout, this.debounceDelay, true);
      }
    }, {
      key: "_init",
      value: function _init() {
        _get(_getPrototypeOf(Column.prototype), "_init", this).call(this);

        if (!this.h) {
          // if height is undefinend or 0, set the Columns's height
          this.h = this.parent && // if the Column is a child item in a FocusManager (like Row)
          this.parent.parent && this.parent.parent instanceof FocusManager ? this.parent.parent.h : this.stage.h;
        }
      }
    }, {
      key: "_itemTransition",
      get: function get() {
        return this.itemTransition || {
          duration: 0.4,
          timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
        };
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.items.forEach(function (item) {
          return item.parentFocus = true;
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.items.forEach(function (item) {
          return item.parentFocus = false;
        });
      }
    }, {
      key: "selectNext",
      value: function selectNext() {
        this._smooth = true;
        return _get(_getPrototypeOf(Column.prototype), "selectNext", this).call(this);
      }
    }, {
      key: "selectPrevious",
      value: function selectPrevious() {
        this._smooth = true;
        return _get(_getPrototypeOf(Column.prototype), "selectPrevious", this).call(this);
      }
    }, {
      key: "_shouldScroll",
      value: function _shouldScroll() {
        var shouldScroll = this.alwaysScroll;

        if (!shouldScroll && !this.neverScroll) {
          var lastChild = this.Items.childList.last;
          shouldScroll = lastChild && (this.shouldScrollUp() || this.shouldScrollDown());
        }

        return shouldScroll;
      } // TODO: can be documented in API when lastScrollIndex is made public

    }, {
      key: "shouldScrollUp",
      value: function shouldScrollUp() {
        var shouldScroll = false;

        if (this._lastScrollIndex) {
          shouldScroll = this.selectedIndex < this._lastScrollIndex;

          if (this._prevLastScrollIndex !== undefined && this._prevLastScrollIndex !== this._lastScrollIndex) {
            shouldScroll = true;
          }
        } else {
          shouldScroll = this.selectedIndex >= this._scrollIndex;
        }

        return this._itemsY < 0 && shouldScroll;
      } // TODO: can be documented in API when lastScrollIndex is made public

    }, {
      key: "shouldScrollDown",
      value: function shouldScrollDown() {
        var lastChild = this.Items.childList.last;
        return this.selectedIndex > this._scrollIndex && // end of Items container < end of last item
        Math.abs(this._itemsY - this.h) < lastChild.y + this.Items.childList.last.h;
      }
    }, {
      key: "render",
      value: function render(next, prev) {
        this._prevLastScrollIndex = this._lastScrollIndex;

        if (this.plinko && prev && (prev.currentItem || prev.selected) && !(this.items.indexOf(prev) === 0 && prev.skipPlinko)) {
          var prevPlinko = this.checkSkipPlinko(prev, next);
          next.selectedIndex = this._getIndexOfItemNear(next, prevPlinko || prev);
        } else if (next && !next.selectedIndex) {
          next.selectedIndex = 0;
        }

        this._performRender();
      }
    }, {
      key: "checkSkipPlinko",
      value: function checkSkipPlinko(prev, next) {
        var _this2 = this;

        // If previous doesn't have skip plinko or previous is the first or last item
        if (!prev || !prev.skipPlinko || [0, this.items.length - 1].includes(this.items.indexOf(prev))) {
          return null;
        }

        var prevIndex = this.items.indexOf(prev);
        var direction = prevIndex - this.items.indexOf(next);
        var up = direction > 0; // Grab all items below prev if up or all items before prev if down

        var prevItems = up ? this.items.slice(prevIndex).map(function (i) {
          return {
            skipPlinko: i.skipPlinko,
            index: _this2.items.indexOf(i)
          };
        }) : this.items.slice(0, prevIndex + 1).map(function (i) {
          return {
            skipPlinko: i.skipPlinko,
            index: _this2.items.indexOf(i)
          };
        }).reverse(); // first item that has skipPlinko but the previous does not
        // Start at the index prev

        var endOfMultiSkipPlinkos = prevItems.find(function (i) {
          return i.skipPlinko && !_this2.items[i.index + direction].skipPlinko;
        });
        var prevPlinkoIndex = endOfMultiSkipPlinkos ? endOfMultiSkipPlinkos.index + direction : prevIndex + direction; // +/- 1, item index before prev

        return this.items[prevPlinkoIndex];
      }
    }, {
      key: "_performRender",
      value: function _performRender() {
        var _this3 = this;

        this._whenEnabled.then(function () {
          if (!_this3.Items.children.length) {
            if (_this3._smooth) {
              _this3.Items.smooth = {
                y: _this3.itemPosY
              };
            } else {
              _this3.Items.y = _this3.itemPosY;
            }
          } else if (_this3._shouldScroll()) {
            var scrollItem = _this3.selectedIndex > _this3._lastScrollIndex ? _this3.Items.children[_this3._lastScrollIndex - _this3._scrollIndex] : _this3.selected;

            if (_this3.Items.children[_this3._firstFocusableIndex()] === scrollItem) {
              scrollItem = _this3.Items.children[0];
            }

            var scrollOffset = (_this3.Items.children[_this3._scrollIndex] || {
              y: 0
            }).y;

            if (_this3._smooth) {
              var firstChild = _this3.Items.childList.first;
              _this3.Items.smooth = {
                y: [-(scrollItem || firstChild).transition('y').targetValue + (scrollItem === _this3.selected ? scrollOffset : 0), _this3._itemTransition]
              };
            } else {
              _this3.Items.patch({
                y: -scrollItem.y + (scrollItem === _this3.selected ? scrollOffset : 0)
              });
            }
          }

          _this3.onScreenEffect(_this3.onScreenItems);
        });
      }
    }, {
      key: "onScreenItems",
      get: function get() {
        var _this4 = this;

        return this.Items.children.filter(function (child) {
          return _this4._isOnScreen(child);
        });
      }
    }, {
      key: "_isOnScreen",
      value: function _isOnScreen(child) {
        if (!child) return false;
        var y = getY(child);
        if (!Number.isFinite(y)) return false; // to calculate the target absolute Y position of the item, we need to use
        // 1) the entire column's absolute position,
        // 2) the target animation value of the items container, and
        // 3) the target value of the item itself

        var ItemY = this.core.renderContext.py + this.Items.transition('y').targetValue + y;
        var h = child.h; // check that the child is inside the bounds of the stage

        var withinTopStageBounds = ItemY + h > 0; // stage height needs to be adjusted with precision since all other values assume the original height and width (pre-scaling)

        var withinBottomStageBounds = ItemY < this.stage.h / this.stage.getRenderPrecision(); // check that the child is inside the bounds of any clipping

        var withinTopClippingBounds = true;
        var withinBottomClippingBounds = true;

        if (this.core._scissor && this.core._scissor.length) {
          // _scissor consists of [ left position (x), top position (y), width, height ]
          var topBounds = this.core._scissor[1];
          var bottomBounds = topBounds + this.core._scissor[3];
          withinTopClippingBounds = Math.round(ItemY + h) > Math.round(topBounds);
          withinBottomClippingBounds = Math.round(ItemY) < Math.round(bottomBounds);
        }

        return withinTopStageBounds && withinBottomStageBounds && withinTopClippingBounds && withinBottomClippingBounds;
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        var _this5 = this;

        this._whenEnabled.then(function () {
          var nextY = 0;
          var nextW = 0; // layout items in row

          for (var i = 0; i < _this5.Items.children.length; i++) {
            var child = _this5.Items.children[i];
            nextW = Math.max(nextW, getW(child));

            if (_this5._smooth) {
              child.smooth = {
                y: [nextY, _this5._itemTransition]
              };
            } else {
              child.patch({
                y: nextY
              });
            }

            nextY += child.h;

            if (i < _this5.Items.children.length - 1) {
              nextY += _this5.itemSpacing;
            }

            if (child.centerInParent) {
              // if the child is another focus manager, check the width of the item container
              var childWidth = child.Items && child.Items.w || child.w; // only center the child if it is within the bounds of this focus manager

              if (childWidth < _this5.w) {
                child.x = (_this5.w - childWidth) / 2;
              }
            }
          }

          _this5.Items.patch({
            w: nextW,
            h: nextY
          });

          var lastChild = _this5.Items.childList.last;
          var endOfLastChild = lastChild ? getY(lastChild) + lastChild.h : 0;
          var scrollOffset = (_this5.Items.children[_this5._scrollIndex] || {
            y: 0
          }).y; // determine when to stop scrolling down

          if (_this5.alwaysScroll) {
            _this5._lastScrollIndex = _this5.Items.children.length - 1;
          } else if (endOfLastChild > _this5.h) {
            for (var _i = _this5.Items.children.length - 1; _i >= 0; _i--) {
              var _child = _this5.Items.children[_i];
              var childY = getY(_child);

              if (childY + _this5.h - scrollOffset > endOfLastChild) {
                _this5._lastScrollIndex = _i;
              } else {
                break;
              }
            }
          } else if (_this5._lastScrollIndex > _this5.items.length) {
            _this5._lastScrollIndex = _this5.items.length - 1;
          }

          _this5._performRender();
        });
      }
    }, {
      key: "itemSpacing",
      get: function get() {
        return this._itemSpacing;
      },
      set: function set(itemSpacing) {
        if (itemSpacing !== this._itemSpacing) {
          this._itemSpacing = itemSpacing;

          this._update();
        }
      }
    }, {
      key: "scrollIndex",
      get: function get() {
        return this._scrollIndex;
      },
      set: function set(scrollIndex) {
        if (scrollIndex !== this._scrollIndex) {
          this._scrollIndex = scrollIndex;

          this._update();
        }
      }
    }, {
      key: "itemPosX",
      get: function get() {
        return this._itemPosX;
      },
      set: function set(x) {
        this.Items.x = this._itemPosX = x;
      }
    }, {
      key: "itemPosY",
      get: function get() {
        return this._itemPosY;
      },
      set: function set(y) {
        this.Items.y = this._itemPosY = y;
      }
    }, {
      key: "_itemsY",
      get: function get() {
        return getY(this.Items);
      }
    }, {
      key: "appendItems",
      value: function appendItems() {
        var _this6 = this;

        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var itemWidth = this.renderWidth;
        this._smooth = false;
        items.forEach(function (item) {
          item.parentFocus = _this6.hasFocus();
          item = _this6.Items.childList.a(item);
          item.w = getW(item) || itemWidth;
        });
        this.stage.update();

        this._updateLayout();

        this._update.clear();

        this._refocus();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(index) {
        var _this7 = this;

        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._itemTransition.duration * 100;

        if (duration === 0) {
          this.selectedIndex = index;
          return;
        }

        for (var i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
          setTimeout(function () {
            _this7.selectedIndex > index ? _this7.selectPrevious() : _this7.selectNext();
          }, duration * i);
        }

        this.Items.transition('y').on('finish', function () {
          return _this7._smooth = false;
        });
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this._updateImmediate();
      }
    }, {
      key: "$removeItem",
      value: function $removeItem(item) {
        if (item) {
          var wasSelected = item === this.selected;
          this.Items.childList.remove(item);

          this._updateImmediate();

          if (wasSelected || this.selectedIndex >= this.items.length) {
            this.selectedIndex = this._selectedIndex;
          }

          if (!this.items.length) {
            this.fireAncestors('$columnEmpty');
          }
        }
      }
    }, {
      key: "$columnChanged",
      value: function $columnChanged() {
        this._updateImmediate();
      } // can be overridden

    }, {
      key: "onScreenEffect",
      value: function onScreenEffect() {}
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(Column), "_template", this).call(this)), {}, {
          direction: 'column'
        });
      }
    }]);

    return Column;
  }(FocusManager);

  var Row = /*#__PURE__*/function (_FocusManager) {
    _inherits(Row, _FocusManager);

    var _super = _createSuper(Row);

    function Row() {
      _classCallCheck(this, Row);

      return _super.apply(this, arguments);
    }

    _createClass(Row, [{
      key: "_construct",
      value: function _construct() {
        var _this = this;

        _get(_getPrototypeOf(Row.prototype), "_construct", this).call(this);

        this._smooth = false;
        this._itemSpacing = 0;
        this._itemPosX = 0;
        this._itemPosY = 0;
        this._scrollIndex = 0;
        this._whenEnabled = new Promise(function (resolve) {
          return _this._firstEnable = resolve;
        });
        this.debounceDelay = Number.isInteger(this.debounceDelay) ? this.debounceDelay : 1;
        this._update = debounce_1.debounce(this._updateLayout, this.debounceDelay);
      }
    }, {
      key: "_init",
      value: function _init() {
        _get(_getPrototypeOf(Row.prototype), "_init", this).call(this);

        if (!this.w) {
          // if width is undefinend or 0, set the Row's width
          this.w = this.parent && // if the Row is a child item in a FocusManager (like Column)
          this.parent.parent && this.parent.parent instanceof FocusManager ? this.parent.parent.w : this.stage.w;
        }
      }
    }, {
      key: "_itemTransition",
      get: function get() {
        return this.itemTransition || {
          duration: 0.4,
          timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
        };
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.items.forEach(function (item) {
          return item.parentFocus = true;
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.items.forEach(function (item) {
          return item.parentFocus = false;
        });
      }
    }, {
      key: "selectNext",
      value: function selectNext() {
        this._smooth = true;
        return _get(_getPrototypeOf(Row.prototype), "selectNext", this).call(this);
      }
    }, {
      key: "selectPrevious",
      value: function selectPrevious() {
        this._smooth = true;
        return _get(_getPrototypeOf(Row.prototype), "selectPrevious", this).call(this);
      } // TODO: can be documented in API when lastScrollIndex is made public

    }, {
      key: "shouldScrollLeft",
      value: function shouldScrollLeft() {
        var shouldScroll = false;

        if (this._lastScrollIndex) {
          shouldScroll = this.selectedIndex < this._lastScrollIndex;

          if (this._prevLastScrollIndex !== undefined && this._prevLastScrollIndex !== this._lastScrollIndex) {
            shouldScroll = true;
          }
        } else {
          shouldScroll = this.selectedIndex >= this._scrollIndex;
        }

        return this._itemsX < 0 && shouldScroll;
      } // TODO: can be documented in API when lastScrollIndex is made public

    }, {
      key: "shouldScrollRight",
      value: function shouldScrollRight() {
        var lastChild = this.Items.childList.last;
        return this.selectedIndex > this._scrollIndex && // end of Items container < end of last item
        Math.abs(this._itemsX - this.w) < lastChild.x + this.Items.childList.last.w;
      }
    }, {
      key: "onScreenItems",
      get: function get() {
        var _this2 = this;

        return this.Items.children.filter(function (child) {
          return _this2._isOnScreen(child);
        });
      }
    }, {
      key: "_isOnScreen",
      value: function _isOnScreen(child) {
        if (!child) return false;
        var x = getX(child);
        if (!Number.isFinite(x)) return false; // to calculate the target absolute X position of the item, we need to use
        // 1) the entire row's absolute position,
        // 2) the target animation value of the items container, and
        // 3) the target value of the item itself

        var ItemX = this.core.renderContext.px + this.Items.transition('x').targetValue + x;
        var w = child.w; // check that the child is inside the bounds of the stage

        var withinLeftStageBounds = ItemX > 0; // stage width needs to be adjusted with precision since all other values assume the original height and width (pre-scaling)

        var withinRightStageBounds = ItemX + w < this.stage.w / this.stage.getRenderPrecision(); // check that the child is inside the bounds of any clipping

        var withinLeftClippingBounds = true;
        var withinRightClippingBounds = true;

        if (this.core._scissor && this.core._scissor.length) {
          // _scissor consists of [ left position (x), top position (y), width, height ]
          var leftBounds = this.core._scissor[0];
          var rightBounds = leftBounds + this.core._scissor[2];
          withinLeftClippingBounds = Math.round(ItemX + w) > Math.round(leftBounds);
          withinRightClippingBounds = Math.round(ItemX) < Math.round(rightBounds);
        }

        return withinLeftStageBounds && withinRightStageBounds && withinLeftClippingBounds && withinRightClippingBounds;
      }
    }, {
      key: "_isOnScreenCompletely",
      value: function _isOnScreenCompletely(child) {
        if (!child) return false;
        var itemX = child.core.renderContext.px;
        var rowX = this.core.renderContext.px;
        return itemX >= rowX && itemX + child.w <= rowX + this.w;
      }
    }, {
      key: "_shouldScroll",
      value: function _shouldScroll() {
        var shouldScroll = this.alwaysScroll;

        if (!shouldScroll && !this.neverScroll) {
          if (this.lazyScroll) {
            shouldScroll = !this._isOnScreenCompletely(this.selected);
          } else {
            var lastChild = this.Items.childList.last;
            shouldScroll = lastChild && (this.shouldScrollLeft() || this.shouldScrollRight() || !this._isOnScreenCompletely(this.selected));
          }
        }

        return shouldScroll;
      }
    }, {
      key: "_getLazyScrollX",
      value: function _getLazyScrollX(prev) {
        var itemsContainerX;
        var prevIndex = this.Items.childList.getIndex(prev);

        if (prevIndex === this._lastFocusableIndex()) {
          itemsContainerX = -this.Items.children[0].x;
        } else if (prevIndex > this.selectedIndex) {
          itemsContainerX = -this.selected.x;
        } else if (prevIndex < this.selectedIndex) {
          itemsContainerX = this.w - this.selected.x - this.selected.w;
        }

        return itemsContainerX;
      }
    }, {
      key: "_getScrollX",
      value: function _getScrollX() {
        var itemsContainerX;
        var itemIndex = this.selectedIndex - this.scrollIndex;
        itemIndex = itemIndex < 0 ? 0 : itemIndex;

        if (itemIndex === this._firstFocusableIndex()) {
          itemIndex = 0;
        }

        if (this.Items.children[itemIndex]) {
          itemsContainerX = this.Items.children[itemIndex].transition('x') ? -this.Items.children[itemIndex].transition('x').targetValue : -this.Items.children[itemIndex].x;
        }

        return itemsContainerX;
      }
    }, {
      key: "render",
      value: function render(next, prev) {
        var _this3 = this;

        this._whenEnabled.then(function () {
          if (_this3.plinko && prev && (prev.currentItem || prev.selected)) {
            next.selectedIndex = _this3._getIndexOfItemNear(next, prev);
          }

          _this3._prevLastScrollIndex = _this3._lastScrollIndex;
          var itemsContainerX;

          if (!_this3.Items.children.length) {
            itemsContainerX = _this3.itemPosX;
          } else if (_this3._shouldScroll()) {
            itemsContainerX = _this3.lazyScroll && prev ? _this3._getLazyScrollX(prev) : _this3._getScrollX();
          }

          if (itemsContainerX !== undefined) {
            if (_this3._smooth) {
              _this3.Items.smooth = {
                x: [itemsContainerX, _this3._itemTransition]
              };
            } else {
              _this3.Items.x = itemsContainerX;
            }
          }

          _this3.onScreenEffect(_this3.onScreenItems);
        });
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        var nextX = 0;
        var nextH = 0; // layout items in row

        for (var i = 0; i < this.Items.children.length; i++) {
          var child = this.Items.children[i];
          nextH = Math.max(nextH, getH(child));

          if (this._smooth) {
            child.smooth = {
              x: [nextX, this._itemTransition]
            };
          } else {
            child.patch({
              x: nextX
            });
          }

          nextX += child.w;

          if (i < this.Items.children.length - 1) {
            nextX += this.itemSpacing;
          }

          if (child.centerInParent) {
            // if the child is another focus manager, check the height of the item container
            var childHeight = child.Items && child.Items.h || child.h; // only center the child if it is within the bounds of this focus manager

            if (childHeight < this.h) {
              child.y = (this.h - childHeight) / 2;
            }
          }
        }

        this.Items.patch({
          h: nextH,
          w: nextX
        });
        var lastChild = this.Items.childList.last;
        var endOfLastChild = lastChild ? getX(lastChild) + lastChild.w : 0;
        var scrollOffset = (this.Items.children[this._scrollIndex] || {
          x: 0
        }).x; // determine when to stop scrolling right

        if (this.alwaysScroll) {
          this._lastScrollIndex = this.Items.children.length - 1;
        } else if (endOfLastChild > this.w) {
          for (var _i = this.Items.children.length - 1; _i >= 0; _i--) {
            var _child = this.Items.children[_i];
            var childX = getX(_child);

            if (childX + this.w - scrollOffset > endOfLastChild) {
              this._lastScrollIndex = _i;
            } else {
              break;
            }
          }
        }

        this.fireAncestors('$itemChanged');
        this.render(this.selected, this.prevSelected);
      }
    }, {
      key: "itemSpacing",
      get: function get() {
        return this._itemSpacing;
      },
      set: function set(itemSpacing) {
        if (itemSpacing !== this._itemSpacing) {
          this._itemSpacing = itemSpacing;

          this._update();
        }
      }
    }, {
      key: "scrollIndex",
      get: function get() {
        return this._scrollIndex;
      },
      set: function set(scrollIndex) {
        if (scrollIndex !== this._scrollIndex) {
          this._scrollIndex = scrollIndex;

          this._update();
        }
      }
    }, {
      key: "itemPosX",
      get: function get() {
        return this._itemPosX;
      },
      set: function set(x) {
        this.Items.x = this._itemPosX = x;
      }
    }, {
      key: "itemPosY",
      get: function get() {
        return this._itemPosY;
      },
      set: function set(y) {
        this.Items.y = this._itemPosY = y;
      }
    }, {
      key: "_itemsX",
      get: function get() {
        return getX(this.Items);
      }
    }, {
      key: "appendItems",
      value: function appendItems() {
        var _this4 = this;

        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var itemHeight = this.renderHeight;
        this._smooth = false;
        items.forEach(function (item) {
          item.parentFocus = _this4.hasFocus();
          item = _this4.Items.childList.a(item);
          item.h = item.h || itemHeight;
        });
        this.stage.update();

        this._updateLayout();

        this._update.clear();

        this._refocus();
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this._update();
      } // can be overridden

    }, {
      key: "onScreenEffect",
      value: function onScreenEffect() {}
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(Row), "_template", this).call(this)), {}, {
          direction: 'row'
        });
      }
    }]);

    return Row;
  }(FocusManager);

  var getImgUrl = function getImgUrl(imgPath) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 185;
    return "https://image.tmdb.org/t/p/w".concat(width).concat(imgPath);
  };
  var formatDate = function formatDate(date) {
    var newDate = new Date(date);
    return newDate.getMonth() + 1 + '/' + newDate.getDate() + '/' + newDate.getFullYear();
  };

  var MediaItem = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(MediaItem, _Lightning$Component);

    var _super = _createSuper(MediaItem);

    function MediaItem() {
      _classCallCheck(this, MediaItem);

      return _super.apply(this, arguments);
    }

    _createClass(MediaItem, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        this._spinRotation = this.tag('LoadingSpinner').animation({
          duration: 1,
          repeat: -1,
          stopMethod: 'inmediate',
          actions: [{
            p: 'rotation',
            v: {
              0: 0,
              1: 6.29
            }
          }]
        });

        this._spinRotation.start();

        this.tag('ImageWrapper.Image').on('txLoaded', function () {
          Registry.setTimeout(function () {
            _this.tag('ImageWrapper.Image').setSmooth('alpha', 1);

            _this._spinRotation.stop();
          }, 300);
        });
        this._focusAnimation = this.animation({
          duration: 0.2,
          actions: [{
            p: 'scale',
            v: {
              0: 1,
              1: 1.075
            }
          }, {
            t: 'Shadow',
            p: 'alpha',
            v: {
              0: 0,
              1: 1
            }
          }, {
            t: 'Info',
            p: 'scale',
            v: {
              0: 1,
              1: 1.1
            }
          }, {
            t: 'Focus',
            p: 'alpha',
            v: {
              0: 0,
              1: 1
            }
          }]
        });
        this._fadeAnimation = this.animation({
          delay: 0.4,
          duration: 0.3,
          actions: [{
            t: 'Info',
            p: 'alpha',
            v: {
              0: 0,
              1: 0.8
            }
          }]
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        if (this._focusAnimation) {
          this._focusAnimation.start();
        }

        if (this._fadeAnimation) {
          this._fadeAnimation.start();
        }
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._focusAnimation.stop();

        this._fadeAnimation.stop();
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      },
      set: function set(data) {
        this._data = {
          imageUrl: data.poster_path == null ? Utils.asset('./images/unavailable.png') : data.poster_path,
          title: typeof data.title !== 'undefined' ? data.title : data.name,
          genreIds: _toConsumableArray(data.genre_ids),
          releaseDate: typeof data.release_date !== 'undefined' ? 'Release date: ' + formatDate(data.release_date) : 'First aired: ' + formatDate(data.first_air_date),
          desc: data.overview,
          rating: parseFloat(data.vote_average) > 0 ? 'Rating: ' + String(data.vote_average) : 'Rating: N/A'
        };
        this.tag('ImageWrapper').patch({
          Image: {
            texture: {
              type: lng.textures.ImageTexture,
              src: this._data.imageUrl.indexOf('unavailable') > -1 ? this._data.imageUrl : getImgUrl(this._data.imageUrl, 300)
            }
          },
          Info: {
            Title: {
              text: this._data.title
            },
            ReleaseDate: {
              text: this._data.releaseDate
            },
            Rating: {
              text: this._data.rating
            }
          }
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        var textStyle = {
          textColor: Colors('white').get(),
          fontFace: 'Regular',
          fontSize: 16
        };
        return {
          w: 300,
          h: 450,
          Shadow: {
            alpha: 0,
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            },
            w: function w(_w) {
              return _w + 32;
            },
            h: function h(_h) {
              return _h + 32;
            },
            color: Colors('shadow').get(),
            rect: true,
            shader: {
              type: lng.shaders.FadeOut,
              fade: 32
            }
          },
          ImageWrapper: {
            w: function w(_w2) {
              return _w2;
            },
            h: function h(_h2) {
              return _h2;
            },
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: 4
            },
            Background: {
              w: function w(_w3) {
                return _w3;
              },
              h: function h(_h3) {
                return _h3;
              },
              color: Colors('white').get(),
              rect: true,
              LoadingSpinner: {
                mount: 0.5,
                src: Utils.asset('./images/loading.png'),
                x: function x(w) {
                  return w / 2;
                },
                y: function y(h) {
                  return h / 2;
                },
                w: 100,
                h: 100
              }
            },
            Image: {
              mount: 0.5,
              alpha: 0.01,
              w: function w(_w4) {
                return _w4;
              },
              h: function h(_h4) {
                return _h4;
              },
              y: function y(w) {
                return w / 2;
              },
              x: function x(h) {
                return h / 2;
              }
            },
            Info: {
              x: 13,
              y: function y(h) {
                return h - h / 3;
              },
              w: function w(_w5) {
                return _w5 - 30;
              },
              h: function h(_h5) {
                return _h5 / 3 - 10;
              },
              rect: true,
              alpha: 0,
              color: Colors('black').get(),
              Title: {
                x: 20,
                y: 5,
                text: _objectSpread2(_objectSpread2({}, textStyle), {}, {
                  wordWrap: true,
                  maxLines: 2,
                  maxLinesSuffix: '...',
                  wordWrapWidth: 240,
                  fontSize: 24
                })
              },
              ReleaseDate: {
                x: 20,
                y: 70,
                text: textStyle
              },
              Rating: {
                x: 20,
                y: 100,
                text: textStyle
              }
            },
            Focus: {
              alpha: 0,
              x: 3,
              y: 3,
              w: function w(_w6) {
                return _w6 - 7;
              },
              h: function h(_h6) {
                return _h6 - 7;
              },
              rect: true,
              shader: {
                type: lng.shaders.RoundedRectangle,
                radius: 3,
                stroke: 5,
                strokeColor: 0xffffffff,
                blend: 1,
                fillColor: 0x00ffffff
              }
            }
          }
        };
      }
    }]);

    return MediaItem;
  }(lng.Component);

  var MediaCarousel = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(MediaCarousel, _Lightning$Component);

    var _super = _createSuper(MediaCarousel);

    function MediaCarousel() {
      _classCallCheck(this, MediaCarousel);

      return _super.apply(this, arguments);
    }

    _createClass(MediaCarousel, [{
      key: "_getFocused",
      value: function _getFocused() {
        return this._row;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        if (this._row.selected) {
          this.fireAncestors('$getItemSelected', this._row.selected.data);
        }
      }
    }, {
      key: "label",
      set: function set(value) {
        this.tag('Label').text = value;
      }
    }, {
      key: "_row",
      get: function get() {
        return this.tag('Row');
      }
    }, {
      key: "data",
      set: function set(data) {
        var _this = this;

        this._data = [].concat(_toConsumableArray(data), _toConsumableArray(data));
        var count = 0;
        var interval = Registry.setInterval(function () {
          if (count == _this._data.length) {
            Registry.clearInterval(interval);
          }

          if (_this._data[count]) {
            _this._row.appendItems([{
              type: MediaItem,
              data: _this._data[count]
            }]);
          }

          count++;
        }, 30);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          x: 100,
          h: 650,
          w: 1920,
          Label: {
            text: {
              text: '',
              fontFace: 'Regular',
              fontSize: 64
            }
          },
          Row: {
            type: Row,
            y: 100,
            itemSpacing: 40,
            wrapSelected: true,
            scrollIndex: 0
          }
        };
      }
    }]);

    return MediaCarousel;
  }(lng.Component);

  var apiKey = 'f90ec6ca1b35404c3fe1890ef8aeffbf';
  var base = 'https://api.themoviedb.org/3';
  var getPopular = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", fetch("".concat(base, "/").concat(type, "/popular?api_key=").concat(apiKey)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getPopular(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getTrending = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", fetch("".concat(base, "/trending/").concat(type, "/day?api_key=").concat(apiKey)));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getTrending(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getTopRated = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(type) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", fetch("".concat(base, "/").concat(type, "/top_rated?api_key=").concat(apiKey)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getTopRated(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getAnimatedMovies = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(type) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", fetch("".concat(base, "/discover/").concat(type, "?api_key=").concat(apiKey, "&sort_by=popularity.desc&include_adult=false&page=1&with_genres=16")));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getAnimatedMovies(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var getUpcomingMovieReleases = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", fetch("".concat(base, "/movie/upcoming?api_key=").concat(apiKey)));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getUpcomingMovieReleases() {
      return _ref5.apply(this, arguments);
    };
  }();
  var getShowsAiring = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", fetch("".concat(base, "/tv/airing_today?api_key=").concat(apiKey)));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getShowsAiring() {
      return _ref6.apply(this, arguments);
    };
  }();
  var getDocumentaries = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(type) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", fetch("".concat(base, "/discover/").concat(type, "?api_key=").concat(apiKey, "&sort_by=popularity.desc&include_adult=false&page=1&with_genres=99")));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function getDocumentaries(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  var MainPage = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(MainPage, _Lightning$Component);

    var _super = _createSuper(MainPage);

    function MainPage() {
      _classCallCheck(this, MainPage);

      return _super.apply(this, arguments);
    }

    _createClass(MainPage, [{
      key: "_init",
      value: function () {
        var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _this = this;

          var contentData;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  contentData = [{
                    label: 'Popular movies',
                    category: 'movie',
                    endpoint: getPopular
                  }, {
                    label: 'Movies trending right now',
                    category: 'movie',
                    endpoint: getTrending
                  }, {
                    label: 'Top rated movies',
                    category: 'movie',
                    endpoint: getTopRated
                  }, {
                    label: 'Popular animated movies',
                    category: 'movie',
                    endpoint: getAnimatedMovies
                  }, {
                    label: 'Upcoming movie releases',
                    category: 'movie',
                    endpoint: getUpcomingMovieReleases
                  }, {
                    label: 'Popular series',
                    category: 'tv',
                    endpoint: getPopular
                  }, {
                    label: 'TV shows trending right now',
                    category: 'tv',
                    endpoint: getTrending
                  }, {
                    label: 'Top rated series',
                    category: 'tv',
                    endpoint: getTopRated
                  }, {
                    label: 'TV shows airing today',
                    category: 'tv',
                    endpoint: getShowsAiring
                  }, {
                    label: 'Recommended documentaries',
                    category: 'tv',
                    endpoint: getDocumentaries
                  }];
                  this._data = [];
                  contentData.map( /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(row) {
                      var response, data;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return row.endpoint(row.category);

                            case 2:
                              response = _context.sent;
                              _context.next = 5;
                              return response.json();

                            case 5:
                              data = _context.sent.results;

                              _this._content.appendItems([{
                                type: MediaCarousel,
                                label: row.label,
                                data: data
                              }]);

                              _this._data.push({
                                label: row.label,
                                data: data
                              });

                              _this._setState('NavBar');

                            case 9:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }());

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _init() {
          return _init2.apply(this, arguments);
        }

        return _init;
      }()
    }, {
      key: "_navbar",
      get: function get() {
        return this.tag('NavBar');
      }
    }, {
      key: "_content",
      get: function get() {
        return this.tag('Content');
      }
    }, {
      key: "selectedChange",
      value: function selectedChange(itemSelected) {
        var _this2 = this;

        Registry.clearIntervals();
        this._content.items = [];

        this._data.map(function (row) {
          if (itemSelected.genreId === 0) {
            _this2._content.appendItems([{
              type: MediaCarousel,
              label: row.label,
              data: row.data
            }]);
          } else {
            var items = [];
            row.data.map(function (item) {
              for (var index in item) {
                if (index == 'genre_ids') {
                  item[index].map(function (genreId) {
                    if (itemSelected.genreId === genreId) {
                      items.push(item);
                    }
                  });
                }
              }
            });

            if (items.length > 0) {
              _this2._content.appendItems([{
                type: MediaCarousel,
                label: row.label,
                data: items
              }]);
            }
          }
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        var ButtonStyle = {
          type: Button$1,
          radius: 5,
          h: 60
        };
        return {
          Background: {
            w: 1920,
            h: 1080,
            color: 0xff273d3d,
            rect: true
          },
          Content: {
            type: Column,
            y: 200
          },
          Header: {
            alpha: 0.8,
            rect: true,
            w: 1920,
            h: 150,
            color: 0xff273d3d,
            NavBar: {
              type: Row,
              alpha: 1,
              x: 300,
              y: 80,
              itemSpacing: 40,
              scrollIndex: 0,
              signals: {
                selectedChange: true
              },
              items: [_objectSpread2(_objectSpread2({}, ButtonStyle), {}, {
                title: 'All',
                genreId: 0
              }), _objectSpread2(_objectSpread2({}, ButtonStyle), {}, {
                title: 'Animation',
                genreId: 16
              }), _objectSpread2(_objectSpread2({}, ButtonStyle), {}, {
                title: 'Drama',
                genreId: 18
              }), _objectSpread2(_objectSpread2({}, ButtonStyle), {}, {
                title: 'Mystery',
                genreId: 9648
              }), _objectSpread2(_objectSpread2({}, ButtonStyle), {}, {
                title: 'Family ',
                genreId: 10751
              })]
            }
          },
          Logo: {
            x: 1500,
            y: 60,
            src: Utils.asset('../../static/images/logo.png')
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this3) {
          _inherits(NavBar, _this3);

          var _super2 = _createSuper(NavBar);

          function NavBar() {
            _classCallCheck(this, NavBar);

            return _super2.apply(this, arguments);
          }

          _createClass(NavBar, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this._navbar;
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              this._setState('Content');
            }
          }]);

          return NavBar;
        }(this), /*#__PURE__*/function (_this4) {
          _inherits(Content, _this4);

          var _super3 = _createSuper(Content);

          function Content() {
            _classCallCheck(this, Content);

            return _super3.apply(this, arguments);
          }

          _createClass(Content, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this._content;
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              this._setState('NavBar');
            }
          }]);

          return Content;
        }(this)];
      }
    }]);

    return MainPage;
  }(lng.Component);

  var DetailsPage = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(DetailsPage, _Lightning$Component);

    var _super = _createSuper(DetailsPage);

    function DetailsPage() {
      _classCallCheck(this, DetailsPage);

      return _super.apply(this, arguments);
    }

    _createClass(DetailsPage, [{
      key: "_init",
      value: function _init() {
        this._spinRotation = this.tag('Modal.LoadingSpinner').animation({
          duration: 1,
          repeat: -1,
          stopMethod: 'inmediate',
          actions: [{
            p: 'rotation',
            v: {
              0: 0,
              1: 6.29
            }
          }]
        });
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('Buttons');
      }
    }, {
      key: "data",
      set: function set(data) {
        this.tag('Modal.Details').patch({
          Title: {
            text: data.title
          },
          Description: {
            text: data.desc.length > 0 ? data.desc : 'No description found.'
          },
          Poster: {
            src: data.imageUrl.indexOf('unavailable') > -1 ? data.imageUrl : getImgUrl(data.imageUrl, 500)
          },
          ReleaseDate: {
            text: data.releaseDate
          }
        });
      }
    }, {
      key: "StartLoading",
      value: function StartLoading() {
        var _this = this;

        this.tag('Modal.Details.Buttons').selectedIndex = 0;

        this._spinRotation.start();

        this.tag('Modal.Details.Poster').on('txLoaded', function () {
          _this.tag('Modal.LoadingSpinner').setSmooth('alpha', 0.0001);

          _this.tag('Modal.Details').setSmooth('alpha', 1);

          _this._spinRotation.stop();
        });
      }
    }, {
      key: "ClearModal",
      value: function ClearModal() {
        this._spinRotation.stop();

        this.tag('Modal.LoadingSpinner').setSmooth('alpha', 1);
        this.tag('Modal.Details').setSmooth('alpha', 0.0001);
        this.fireAncestors('$unselectItem');
      }
    }], [{
      key: "_template",
      value: function _template() {
        var textStyle = {
          textColor: Colors('white').get(),
          fontFace: 'Regular'
        };
        return {
          alpha: 0.0001,
          Shadow: {
            w: 1920,
            h: 1080,
            rect: true,
            alpha: 0.5,
            color: Colors('black').get()
          },
          Modal: {
            w: 1536,
            h: 864,
            x: 192,
            y: 108,
            rect: true,
            alpha: 0.9,
            color: Colors('black').get(),
            Details: {
              alpha: 0.0001,
              Title: {
                x: 100,
                y: 70,
                text: _objectSpread2(_objectSpread2({}, textStyle), {}, {
                  wordWrapWidth: 700,
                  fontSize: 56
                })
              },
              Description: {
                x: 100,
                y: 250,
                text: _objectSpread2(_objectSpread2({}, textStyle), {}, {
                  lineHeight: 40,
                  wordWrapWidth: 700,
                  wordWrap: true,
                  maxLines: 11,
                  maxLinesSuffix: '...',
                  fontSize: 28
                })
              },
              Buttons: {
                type: Row,
                x: 200,
                y: 750,
                itemSpacing: 100,
                items: [{
                  type: Button$1,
                  title: 'Play now',
                  h: 60,
                  w: 170,
                  radius: 5,
                  icon: {
                    src: Utils.asset('./images/play.png'),
                    size: 20,
                    spacing: 10
                  },
                  onEnter: function onEnter(event) {
                    event.fireAncestors('$enterPlayer');
                  }
                }, {
                  type: Button$1,
                  title: 'Add to favourites',
                  h: 60,
                  w: 170,
                  radius: 5,
                  icon: {
                    src: Utils.asset('./images/star.png'),
                    size: 20,
                    spacing: 10
                  }
                }]
              },
              Poster: {
                x: 1020,
                y: 70,
                w: 400,
                h: 600
              },
              ReleaseDate: {
                x: 1020,
                y: 690,
                text: _objectSpread2(_objectSpread2({}, textStyle), {}, {
                  fontSize: 22
                })
              }
            },
            LoadingSpinner: {
              mount: 0.5,
              x: function x(w) {
                return w / 2;
              },
              y: function y(h) {
                return h / 2;
              },
              h: 250,
              w: 250,
              src: Utils.asset('./images/loading.png')
            }
          }
        };
      }
    }]);

    return DetailsPage;
  }(lng.Component);

  var MediaPlayer = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(MediaPlayer, _Lightning$Component);

    var _super = _createSuper(MediaPlayer);

    function MediaPlayer() {
      _classCallCheck(this, MediaPlayer);

      return _super.apply(this, arguments);
    }

    _createClass(MediaPlayer, [{
      key: "_init",
      value: function _init() {
        VideoPlayer.consumer(this);
        var videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

        var myLoader = function myLoader(url, videoEl) {
          return new Promise(function (resolve) {
            videoEl.setAttribute('src', url);
            videoEl.load();
            resolve();
          });
        };

        VideoPlayer.loader(myLoader);
        VideoPlayer.open(videoUrl);
      }
    }, {
      key: "PlayVideo",
      value: function PlayVideo() {
        VideoPlayer.open(VideoPlayer.src);
        VideoPlayer.play();
      }
    }, {
      key: "StopVideo",
      value: function StopVideo() {
        VideoPlayer.pause();
      }
    }, {
      key: "SkipForward",
      value: function SkipForward() {
        VideoPlayer.skip(5);
      }
    }, {
      key: "SkipBackward",
      value: function SkipBackward() {
        VideoPlayer.skip(-5);
      }
    }]);

    return MediaPlayer;
  }(lng.Component);

  var App = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(App, _Lightning$Component);

    var _super = _createSuper(App);

    function App() {
      _classCallCheck(this, App);

      return _super.apply(this, arguments);
    }

    _createClass(App, [{
      key: "_init",
      value: function _init() {
        this._setState('ShowMain');
      }
    }, {
      key: "$getItemSelected",
      value: function $getItemSelected(itemSelected) {
        this._detailsPage.data = itemSelected;

        this._setState('ShowDetails');
      }
    }, {
      key: "$unselectItem",
      value: function $unselectItem() {
        this._setState('ShowMain');
      }
    }, {
      key: "$enterPlayer",
      value: function $enterPlayer() {
        this._setState('ShowPlayer');
      }
    }, {
      key: "_mainPage",
      get: function get() {
        return this.tag('MainPage');
      }
    }, {
      key: "_detailsPage",
      get: function get() {
        return this.tag('DetailsPage');
      }
    }, {
      key: "_mediaPlayer",
      get: function get() {
        return this.tag('MediaPlayer');
      }
    }], [{
      key: "getFonts",
      value: function getFonts() {
        return [{
          family: 'Regular',
          url: Utils.asset('fonts/Roboto-Regular.ttf')
        }];
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          MainPage: {
            type: MainPage
          },
          DetailsPage: {
            type: DetailsPage
          },
          MediaPlayer: {
            type: MediaPlayer
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(ShowMain, _this);

          var _super2 = _createSuper(ShowMain);

          function ShowMain() {
            _classCallCheck(this, ShowMain);

            return _super2.apply(this, arguments);
          }

          _createClass(ShowMain, [{
            key: "_getFocused",
            value: function _getFocused() {
              return this._mainPage;
            }
          }]);

          return ShowMain;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(ShowDetails, _this2);

          var _super3 = _createSuper(ShowDetails);

          function ShowDetails() {
            _classCallCheck(this, ShowDetails);

            return _super3.apply(this, arguments);
          }

          _createClass(ShowDetails, [{
            key: "$enter",
            value: function $enter() {
              this._detailsPage.setSmooth('alpha', 1);

              this._detailsPage.StartLoading();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._detailsPage.setSmooth('alpha', 0.0001);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this._detailsPage;
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._detailsPage.ClearModal();

              this._setState('ShowMain');
            }
          }]);

          return ShowDetails;
        }(this), /*#__PURE__*/function (_this3) {
          _inherits(ShowPlayer, _this3);

          var _super4 = _createSuper(ShowPlayer);

          function ShowPlayer() {
            _classCallCheck(this, ShowPlayer);

            return _super4.apply(this, arguments);
          }

          _createClass(ShowPlayer, [{
            key: "$enter",
            value: function $enter() {
              this._mainPage.setSmooth('alpha', 0.0001);

              this._mediaPlayer.PlayVideo();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._mainPage.setSmooth('alpha', 1);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this._mediaPlayer;
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._setState('ShowDetails');

              this._mediaPlayer.StopVideo();
            }
          }, {
            key: "_handleLeft",
            value: function _handleLeft() {
              this._mediaPlayer.SkipBackward();
            }
          }, {
            key: "_handleRight",
            value: function _handleRight() {
              this._mediaPlayer.SkipForward();
            }
          }, {
            key: "_captureKey",
            value: function _captureKey(event) {
              switch (event.keyCode) {
                case 10008:
                  this._handleBack();

                  break;

                default:
                  return false;
              }
            }
          }]);

          return ShowPlayer;
        }(this)];
      }
    }]);

    return App;
  }(lng.Component);

  function index () {
    return Launch.apply(void 0, [App].concat(Array.prototype.slice.call(arguments)));
  }

  return index;

})();
