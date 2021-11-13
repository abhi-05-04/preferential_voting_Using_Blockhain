// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}

const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
let {
  assetPrefix,
  page
} = data;
assetPrefix = assetPrefix || '';
let mostRecentHash = null;
/* eslint-disable-next-line */

let curHash = __webpack_require__.h();
const hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function _tryApplyUpdates() {
  _tryApplyUpdates = // This function reads code updates on the fly and hard
  // reloads the page when it has changed.
  _asyncToGenerator(function* () {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
      return;
    }

    try {
      const res = yield fetch(typeof __webpack_require__.j !== 'undefined' ? `${hotUpdatePath}${curHash}.${__webpack_require__.j}.hot-update.json` : `${hotUpdatePath}${curHash}.hot-update.json`);
      const jsonData = yield res.json();
      const curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

      const pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(mod => {
        return mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`) !== -1 || mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`.replace(/\//g, '\\')) !== -1;
      });

      if (pageUpdated) {
        document.location.reload(true);
      } else {
        curHash = mostRecentHash;
      }
    } catch (err) {
      console.error('Error occurred checking for update', err);
      document.location.reload(true);
    }
  });
  return _tryApplyUpdates.apply(this, arguments);
}

function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource).addMessageListener(event => {
  if (event.data === '\uD83D\uDC93') {
    return;
  }

  try {
    const message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils).setupPing(assetPrefix, () => page);
(0, _fouc).displayContent();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
const eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(cb => {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: () => {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function (fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response1 = window.Response;
var TextDecoder1 = window.TextDecoder;
var TextEncoder1 = window.TextEncoder;
var AbortController1 = window.AbortController;

if (AbortController1 == undefined) {
  AbortController1 = function () {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 128 >> shift && codePoint << shift <= 2047;
    }

    if (octetsCount === 2) {
      return codePoint >= 2048 >> shift && codePoint << shift <= 55295 || codePoint >= 57344 >> shift && codePoint << shift <= 65535;
    }

    if (octetsCount === 3) {
      return codePoint >= 65536 >> shift && codePoint << shift <= 1114111;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 65533;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 65535) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
        string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function () {
  try {
    return new TextDecoder1().decode(new TextEncoder1().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder1 == undefined || TextEncoder1 == undefined || !supportsStreamOption()) {
  TextDecoder1 = TextDecoderPolyfill;
}

var k = function () {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function () {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function () {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function () {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function () {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function () {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers1 = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers1), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers2) {
  this._headers = headers2;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers2) {
  var controller = new AbortController1();
  var signal = controller.signal // see #120
  ;
  var textDecoder = new TextDecoder1();
  fetch(url, {
    headers: headers2,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function () {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget1() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget1;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget1.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget1.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget1.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event1(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event1;

function MessageEvent1(type, options) {
  Event1.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent1;
MessageEvent1.prototype = Object.create(Event1.prototype);

function ConnectionEvent(type, options) {
  Event1.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event1.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function (value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function (n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function (that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget1.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response1 != undefined && 'body' in Response1.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers2 = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function (status, statusText, contentType, headers3, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function (textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent1(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function () {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event1('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function () {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function () {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers2 != undefined) {
      for (var name in headers2) {
        if (Object.prototype.hasOwnProperty.call(headers2, name)) {
          requestHeaders[name] = headers2[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget1.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget1");
$RefreshReg$(_c8, "Event1");
$RefreshReg$(_c9, "MessageEvent1");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.displayContent = displayContent;

function displayContent(callback) {
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

let evtSource;
let currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  const pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource).getEventSourceWrapper({
    path: `${assetPrefix}/_next/webpack-hmr?page=${encodeURIComponent(currentPage)}`,
    timeout: 5000
  });
  evtSource.addMessageListener(event => {
    if (event.data.indexOf('{') === -1) return;

    try {
      const payload = JSON.parse(event.data); // don't attempt fetching the page if we're already showing
      // the dev overlay as this can cause the error to be triggered
      // repeatedly

      if (payload.invalid && !self.__NEXT_DATA__.err) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(pageRes => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFVBQUkwUSxPQUFPLENBQUNDLE9BQVIsSUFBbUIsQ0FBQ3RSLElBQUksQ0FBQ3VSLGFBQUwsQ0FBbUJuUixHQUEzQyxFQUFnRDtBQUM1QztBQUNBO0FBQ0EyQixRQUFBQSxLQUFLLENBQUNnQixRQUFRLENBQUN5TyxJQUFWLEVBQWdCO0FBQ2pCL0YsVUFBQUEsV0FBVyxFQUFFO0FBREksU0FBaEIsQ0FBTCxDQUVHNUwsSUFGSCxDQUVTNFIsT0FBRCxJQUFXO0FBQ2YsY0FBSUEsT0FBTyxDQUFDN1AsTUFBUixLQUFtQixHQUF2QixFQUE0QjtBQUN4Qm1CLFlBQUFBLFFBQVEsQ0FBQ0MsTUFBVDtBQUNIO0FBQ0osU0FORDtBQU9IO0FBQ0osS0FoQkQsQ0FnQkUsT0FBTzVDLEdBQVAsRUFBWTtBQUNWNkMsTUFBQUEsT0FBTyxDQUFDdkQsS0FBUixDQUFjLDRDQUFkLEVBQTREVSxHQUE1RDtBQUNIO0FBQ0osR0FyQkQ7QUFzQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9ldmVudFNvdXJjZVBvbHlmaWxsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ldmVudC1zb3VyY2UtcG9seWZpbGxcIikpO1xudmFyIF9ldmVudHNvdXJjZSA9IHJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7XG52YXIgX29uRGVtYW5kRW50cmllc1V0aWxzID0gcmVxdWlyZShcIi4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHNcIik7XG52YXIgX2ZvdWMgPSByZXF1aXJlKFwiLi9mb3VjXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XG4gICAgd2luZG93LkV2ZW50U291cmNlID0gX2V2ZW50U291cmNlUG9seWZpbGwuZGVmYXVsdDtcbn1cbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpO1xubGV0IHsgYXNzZXRQcmVmaXggLCBwYWdlICB9ID0gZGF0YTtcbmFzc2V0UHJlZml4ID0gYXNzZXRQcmVmaXggfHwgJyc7XG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsO1xuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovIGxldCBjdXJIYXNoID0gX193ZWJwYWNrX2hhc2hfXztcbmNvbnN0IGhvdFVwZGF0ZVBhdGggPSBhc3NldFByZWZpeCArIChhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpICsgJ19uZXh0L3N0YXRpYy93ZWJwYWNrLyc7XG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCkge1xuICAgIC8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4gICAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqLyByZXR1cm4gbW9zdFJlY2VudEhhc2ggIT09IF9fd2VicGFja19oYXNoX187XG59XG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpIHtcbiAgICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnO1xufVxuZnVuY3Rpb24gX3RyeUFwcGx5VXBkYXRlcygpIHtcbiAgICBfdHJ5QXBwbHlVcGRhdGVzID0gLy8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuICAgIC8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cbiAgICBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooKSB7XG4gICAgICAgIGlmICghaXNVcGRhdGVBdmFpbGFibGUoKSB8fCAhY2FuQXBwbHlVcGRhdGVzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godHlwZW9mIF9fd2VicGFja19ydW50aW1lX2lkX18gIT09ICd1bmRlZmluZWQnID8gYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LiR7X193ZWJwYWNrX3J1bnRpbWVfaWRfX30uaG90LXVwZGF0ZS5qc29uYCA6IGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0geWllbGQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGN1clBhZ2UgPSBwYWdlID09PSAnLycgPyAnaW5kZXgnIDogcGFnZTtcbiAgICAgICAgICAgIC8vIHdlYnBhY2sgNSB1c2VzIGFuIGFycmF5IGluc3RlYWRcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VVcGRhdGVkID0gKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYykgPyBqc29uRGF0YS5jIDogT2JqZWN0LmtleXMoanNvbkRhdGEuYykpLnNvbWUoKG1vZCk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kLmluZGV4T2YoYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWB9YCkgIT09IC0xIHx8IG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWAucmVwbGFjZSgvXFwvL2csICdcXFxcJykpICE9PSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHBhZ2VVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJIYXNoID0gbW9zdFJlY2VudEhhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsIGVycik7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3RyeUFwcGx5VXBkYXRlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCkge1xuICAgIHJldHVybiBfdHJ5QXBwbHlVcGRhdGVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG4oMCwgX2V2ZW50c291cmNlKS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KT0+e1xuICAgIGlmIChldmVudC5kYXRhID09PSAnXFx1RDgzRFxcdURDOTMnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3N5bmMnIHx8IG1lc3NhZ2UuYWN0aW9uID09PSAnYnVpbHQnKSB7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UuaGFzaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vc3RSZWNlbnRIYXNoID0gbWVzc2FnZS5oYXNoO1xuICAgICAgICAgICAgdHJ5QXBwbHlVcGRhdGVzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdyZWxvYWRQYWdlJykge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpO1xuICAgIH1cbn0pO1xuKDAsIF9vbkRlbWFuZEVudHJpZXNVdGlscykuc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKT0+cGFnZVxuKTtcbigwLCBfZm91YykuZGlzcGxheUNvbnRlbnQoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWRldi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYWRkTWVzc2FnZUxpc3RlbmVyID0gYWRkTWVzc2FnZUxpc3RlbmVyO1xuZXhwb3J0cy5nZXRFdmVudFNvdXJjZVdyYXBwZXIgPSBnZXRFdmVudFNvdXJjZVdyYXBwZXI7XG5jb25zdCBldmVudENhbGxiYWNrcyA9IFtdO1xuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgICB2YXIgc291cmNlO1xuICAgIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICBpZiAoIW9wdGlvbnMudGltZW91dCkge1xuICAgICAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDA7XG4gICAgfVxuICAgIGluaXQoKTtcbiAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgICAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH0sIG9wdGlvbnMudGltZW91dCAvIDIpO1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtcbiAgICAgICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZTtcbiAgICAgICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0O1xuICAgICAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKTtcbiAgICAgICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT57XG4gICAgICAgICAgICBpZiAoIWNiLnVuZmlsdGVyZWQgJiYgZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKSA9PT0gLTEpIHJldHVybjtcbiAgICAgICAgICAgIGNiKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICBzb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjbG9zZTogKCk9PntcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgc291cmNlLmNsb3NlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRNZXNzYWdlTGlzdGVuZXIoY2IpIHtcbiAgICBldmVudENhbGxiYWNrcy5wdXNoKGNiKTtcbn1cbmZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzb3VyY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG52YXIgUmVzcG9uc2UxID0gd2luZG93LlJlc3BvbnNlO1xudmFyIFRleHREZWNvZGVyMSA9IHdpbmRvdy5UZXh0RGVjb2RlcjtcbnZhciBUZXh0RW5jb2RlcjEgPSB3aW5kb3cuVGV4dEVuY29kZXI7XG52YXIgQWJvcnRDb250cm9sbGVyMSA9IHdpbmRvdy5BYm9ydENvbnRyb2xsZXI7XG5pZiAoQWJvcnRDb250cm9sbGVyMSA9PSB1bmRlZmluZWQpIHtcbiAgICBBYm9ydENvbnRyb2xsZXIxID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2lnbmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB9O1xuICAgIH07XG59XG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICAgIHRoaXMuYml0c05lZWRlZCA9IDA7XG4gICAgdGhpcy5jb2RlUG9pbnQgPSAwO1xufVxuVGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24ob2N0ZXRzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LCBzaGlmdCwgb2N0ZXRzQ291bnQpIHtcbiAgICAgICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDEyOCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMjA0NztcbiAgICAgICAgfVxuICAgICAgICBpZiAob2N0ZXRzQ291bnQgPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMjA0OCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gNTUyOTUgfHwgY29kZVBvaW50ID49IDU3MzQ0ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSA2NTUzNTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2N0ZXRzQ291bnQgPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gNjU1MzYgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDExMTQxMTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj4gNiA+IDE1ID8gMyA6IGNvZGVQb2ludCA+IDMxID8gMiA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAyKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID4gMTUgPyAzIDogMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDMpIHtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgUkVQTEFDRVIgPSA2NTUzMztcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgdmFyIGJpdHNOZWVkZWQgPSB0aGlzLmJpdHNOZWVkZWQ7XG4gICAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50O1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvY3RldHMubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICB2YXIgb2N0ZXQgPSBvY3RldHNbaV07XG4gICAgICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAob2N0ZXQgPCAxMjggfHwgb2N0ZXQgPiAxOTEgfHwgIXZhbGlkKGNvZGVQb2ludCA8PCA2IHwgb2N0ZXQgJiA2MywgYml0c05lZWRlZCAtIDYsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpKSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKG9jdGV0ID49IDAgJiYgb2N0ZXQgPD0gMTI3KSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDE5MiAmJiBvY3RldCA8PSAyMjMpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDE7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAzMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjI0ICYmIG9jdGV0IDw9IDIzOSkge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMjtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDE1O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyNDAgJiYgb2N0ZXQgPD0gMjQ3KSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgNztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYml0c05lZWRlZCAhPT0gMCAmJiAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKSkge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSAwO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYml0c05lZWRlZCAtPSA2O1xuICAgICAgICAgICAgY29kZVBvaW50ID0gY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDY1NTM1KSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgKyAoY29kZVBvaW50IC0gNjU1MzUgLSAxID4+IDEwKSk7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTYzMjAgKyAoY29kZVBvaW50IC0gNjU1MzUgLSAxICYgMTAyMykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWQ7XG4gICAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnQ7XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcjEoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyMSgpLmVuY29kZSgndGVzdCcpLCB7XG4gICAgICAgICAgICBzdHJlYW06IHRydWVcbiAgICAgICAgfSkgPT09ICd0ZXN0JztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vLyBJRSwgRWRnZVxuaWYgKFRleHREZWNvZGVyMSA9PSB1bmRlZmluZWQgfHwgVGV4dEVuY29kZXIxID09IHVuZGVmaW5lZCB8fCAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKSkge1xuICAgIFRleHREZWNvZGVyMSA9IFRleHREZWNvZGVyUG9seWZpbGw7XG59XG52YXIgayA9IGZ1bmN0aW9uKCkge1xufTtcbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICB0aGlzLnJlc3BvbnNlVHlwZSA9ICcnO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IDA7XG4gICAgdGhpcy5zdGF0dXMgPSAwO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICcnO1xuICAgIHRoaXMucmVzcG9uc2VUZXh0ID0gJyc7XG4gICAgdGhpcy5vbnByb2dyZXNzID0gaztcbiAgICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGs7XG4gICAgdGhpcy5fY29udGVudFR5cGUgPSAnJztcbiAgICB0aGlzLl94aHIgPSB4aHI7XG4gICAgdGhpcy5fc2VuZFRpbWVvdXQgPSAwO1xuICAgIHRoaXMuX2Fib3J0ID0gaztcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAgIHRoaXMuX2Fib3J0KHRydWUpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgeGhyID0gdGhpcy5feGhyO1xuICAgIHZhciBzdGF0ZSA9IDE7XG4gICAgdmFyIHRpbWVvdXQgPSAwO1xuICAgIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24oc2lsZW50KSB7XG4gICAgICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIHN0YXRlID0gNDtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBrO1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBrO1xuICAgICAgICAgICAgeGhyLm9uYWJvcnQgPSBrO1xuICAgICAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGs7XG4gICAgICAgICAgICAvLyBJRSA4IC0gOTogWERvbWFpblJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgICAgICAgLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNDtcbiAgICAgICAgICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9O1xuICAgIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICB2YXIgc3RhdHVzVGV4dCA9ICcnO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9ICdPSyc7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuY29udGVudFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgdGhhdC5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhhdC5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICB0aGF0Ll9jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG9uU3RhcnQoKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IDM7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJyc7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMztcbiAgICAgICAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgdGhhdC5vbnByb2dyZXNzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXG4gICAgICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgICAgIG9uUHJvZ3Jlc3MoKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IDQ7XG4gICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDQ7XG4gICAgICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBPcGVyYSAxMlxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgb25TdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgb25Qcm9ncmVzcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBYRG9tYWluUmVxdWVzdCNhYm9ydCByZW1vdmVzIG9ucHJvZ3Jlc3MsIG9uZXJyb3IsIG9ubG9hZFxuICAgIHhoci5vbmxvYWQgPSBvbkZpbmlzaDtcbiAgICB4aHIub25lcnJvciA9IG9uRmluaXNoO1xuICAgIC8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW9yLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcbiAgICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4gICAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICAgIHhoci5vbmFib3J0ID0gb25GaW5pc2g7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gICAgaWYgKCEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzcztcbiAgICB9XG4gICAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAgIC8vIE9wZXJhIDwgMTJcbiAgICAvLyBGaXJlZm94IDwgMy41XG4gICAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gICAgLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbiAgICAvLyBzZWUgYWxzbyAjNjRcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlO1xuICAgIGlmICgnY29udGVudFR5cGUnIGluIHhocikge1xuICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdwYWRkaW5nPXRydWUnO1xuICAgIH1cbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKCdyZWFkeVN0YXRlJyBpbiB4aHIpIHtcbiAgICAgICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgICAgIC8vICM5MVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9hYm9ydChmYWxzZSk7XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO1xufTtcblhIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHZhciB4aHIgPSB0aGlzLl94aHI7XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyAhPSB1bmRlZmluZWQgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgOiAnJztcbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG4gICAgaWYgKCEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcbiAgICAgICAgICAgIHRoYXQuc2VuZCgpO1xuICAgICAgICB9LCA0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgeGhyID0gdGhpcy5feGhyO1xuICAgIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFscztcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgICAgICB4aHIuc2VuZCh1bmRlZmluZWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgICAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgICAgIHRocm93IGVycm9yMTtcbiAgICB9XG59O1xuZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApICsgMzIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCkge1xuICAgIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGFycmF5ID0gYWxsLnNwbGl0KCdcXHJcXG4nKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICB2YXIgbGluZSA9IGFycmF5W2ldO1xuICAgICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpO1xuICAgICAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XG4gICAgICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fbWFwID0gbWFwO1xufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07XG59O1xuZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge1xufVxuWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oeGhyLCBvblN0YXJ0Q2FsbGJhY2ssIG9uUHJvZ3Jlc3NDYWxsYmFjaywgb25GaW5pc2hDYWxsYmFjaywgdXJsLCB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMpIHtcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGg7XG4gICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7XG4gICAgfTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXJzMSA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICAgICAgICAgIG9uU3RhcnRDYWxsYmFjayhzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMxKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCc7XG4gICAgZm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB4aHIuc2VuZCgpO1xufTtcbmZ1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMyKSB7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnMyO1xufVxuSGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSk7XG59O1xuZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKSB7XG59XG5GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKHhociwgb25TdGFydENhbGxiYWNrLCBvblByb2dyZXNzQ2FsbGJhY2ssIG9uRmluaXNoQ2FsbGJhY2ssIHVybCwgd2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzMikge1xuICAgIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcjEoKTtcbiAgICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcbiAgICA7XG4gICAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyMSgpO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzMixcbiAgICAgICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIHNpZ25hbDogc2lnbmFsLFxuICAgICAgICBjYWNoZTogJ25vLXN0b3JlJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgICAgIG9uU3RhcnRDYWxsYmFjayhyZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQsIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSwgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIHJlYWRlci5jYW5jZWwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkTmV4dENodW5rKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKTtcbiAgICAgICAgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBFdmVudFRhcmdldDEoKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHRocm93RXJyb3IoZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgfSwgMCk7XG59XG5FdmVudFRhcmdldDEucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnRhcmdldCA9IHRoaXM7XG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV07XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSB0eXBlTGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHR5cGVMaXN0ZW5lcnNbaV07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbkV2ZW50VGFyZ2V0MS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdHlwZSA9IFN0cmluZyh0eXBlKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xuICAgIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdO1xuICAgIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0eXBlTGlzdGVuZXJzID0gW107XG4gICAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IHR5cGVMaXN0ZW5lcnM7XG4gICAgfVxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgICB0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbn07XG5FdmVudFRhcmdldDEucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHR5cGUgPSBTdHJpbmcodHlwZSk7XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGZpbHRlcmVkID0gW107XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkO1xuICAgICAgICB9XG4gICAgfVxufTtcbmZ1bmN0aW9uIEV2ZW50MSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudDEodHlwZSwgb3B0aW9ucykge1xuICAgIEV2ZW50MS5jYWxsKHRoaXMsIHR5cGUpO1xuICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZDtcbn1cbk1lc3NhZ2VFdmVudDEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudDEucHJvdG90eXBlKTtcbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gICAgRXZlbnQxLmNhbGwodGhpcywgdHlwZSk7XG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHQ7XG4gICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xufVxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQxLnByb3RvdHlwZSk7XG52YXIgV0FJVElORyA9IC0xO1xudmFyIENPTk5FQ1RJTkcgPSAwO1xudmFyIE9QRU4gPSAxO1xudmFyIENMT1NFRCA9IDI7XG52YXIgQUZURVJfQ1IgPSAtMTtcbnZhciBGSUVMRF9TVEFSVCA9IDA7XG52YXIgRklFTEQgPSAxO1xudmFyIFZBTFVFX1NUQVJUID0gMjtcbnZhciBWQUxVRSA9IDM7XG52YXIgY29udGVudFR5cGVSZWdFeHAgPSAvXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pO1xudmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwO1xudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMDtcbnZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24odmFsdWUsIGRlZikge1xuICAgIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICBpZiAobiAhPT0gbikge1xuICAgICAgICBuID0gZGVmO1xuICAgIH1cbiAgICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKTtcbn07XG52YXIgY2xhbXBEdXJhdGlvbiA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pO1xufTtcbnZhciBmaXJlID0gZnVuY3Rpb24odGhhdCwgZiwgZXZlbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGYuY2FsbCh0aGF0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93RXJyb3IoZSk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gICAgRXZlbnRUYXJnZXQxLmNhbGwodGhpcyk7XG4gICAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXJsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZDtcbiAgICBzdGFydCh0aGlzLCB1cmwsIG9wdGlvbnMpO1xufVxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPSBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UxICE9IHVuZGVmaW5lZCAmJiAnYm9keScgaW4gUmVzcG9uc2UxLnByb3RvdHlwZTtcbmZ1bmN0aW9uIHN0YXJ0KGVzLCB1cmwsIG9wdGlvbnMpIHtcbiAgICB1cmwgPSBTdHJpbmcodXJsKTtcbiAgICB2YXIgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscyk7XG4gICAgdmFyIGluaXRpYWxSZXRyeSA9IGNsYW1wRHVyYXRpb24oMTAwMCk7XG4gICAgdmFyIGhlYXJ0YmVhdFRpbWVvdXQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkID8gcGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsIDQ1MDAwKSA6IGNsYW1wRHVyYXRpb24oNDUwMDApO1xuICAgIHZhciBsYXN0RXZlbnRJZCA9ICcnO1xuICAgIHZhciByZXRyeSA9IGluaXRpYWxSZXRyeTtcbiAgICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZTtcbiAgICB2YXIgaGVhZGVyczIgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYWRlcnMgIT0gdW5kZWZpbmVkID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgQ3VycmVudFRyYW5zcG9ydCA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZCA/IG9wdGlvbnMuVHJhbnNwb3J0IDogWE1MSHR0cFJlcXVlc3Q7XG4gICAgdmFyIHhociA9IGlzRmV0Y2hTdXBwb3J0ZWQgJiYgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpID8gdW5kZWZpbmVkIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7XG4gICAgdmFyIHRyYW5zcG9ydCA9IHhociA9PSB1bmRlZmluZWQgPyBuZXcgRmV0Y2hUcmFuc3BvcnQoKSA6IG5ldyBYSFJUcmFuc3BvcnQoKTtcbiAgICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHRpbWVvdXQgPSAwO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSBXQUlUSU5HO1xuICAgIHZhciBkYXRhQnVmZmVyID0gJyc7XG4gICAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJyc7XG4gICAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9ICcnO1xuICAgIHZhciB0ZXh0QnVmZmVyID0gJyc7XG4gICAgdmFyIHN0YXRlID0gRklFTERfU1RBUlQ7XG4gICAgdmFyIGZpZWxkU3RhcnQgPSAwO1xuICAgIHZhciB2YWx1ZVN0YXJ0ID0gMDtcbiAgICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIGhlYWRlcnMzLCBjYW5jZWwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWw7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAgJiYgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTjtcbiAgICAgICAgICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XG4gICAgICAgICAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU47XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25vcGVuLCBldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gc3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgKyBzdGF0dXMgKyAnICcgKyBzdGF0dXNUZXh0ICsgJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIiArIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWQgPyAnLScgOiBjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csICcgJykpICsgJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzM1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbih0ZXh0Q2h1bmspIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgICAgICAgdmFyIG4gPSAtMTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0ZXh0Q2h1bmsubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICAgICAgICAgIHZhciBjID0gdGV4dENodW5rLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2h1bmsgPSAobiAhPT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKDAsIG4gKyAxKTtcbiAgICAgICAgICAgIHRleHRCdWZmZXIgPSAobiA9PT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKG4gKyAxKTtcbiAgICAgICAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpe1xuICAgICAgICAgICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUiAmJiBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBjaHVuay5zbGljZShmaWVsZFN0YXJ0LCB2YWx1ZVN0YXJ0IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2h1bmsuc2xpY2UodmFsdWVTdGFydCArICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiYgY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KSA9PT0gJyAnLmNoYXJDb2RlQXQoMCkgPyAxIDogMCksIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9ICdcXG4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdyZXRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFJldHJ5ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaW5pdGlhbFJldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2hlYXJ0YmVhdFRpbWVvdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBoZWFydGJlYXRUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkID0gbGFzdEV2ZW50SWRCdWZmZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnbWVzc2FnZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudDEoZXZlbnRUeXBlQnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQ6IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgPyBBRlRFUl9DUiA6IEZJRUxEX1NUQVJUO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU3RhcnQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgICAgIH0sIHJldHJ5KTtcbiAgICAgICAgICAgIHJldHJ5ID0gY2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkgKiAxNiwgcmV0cnkgKiAyKSk7XG4gICAgICAgICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElORztcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudDEoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRDtcbiAgICAgICAgaWYgKGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24oKTtcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gQ0xPU0VEO1xuICAgIH07XG4gICAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xuICAgICAgICAgICAgaWYgKCF3YXNBY3Rpdml0eSAmJiBjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcignTm8gYWN0aXZpdHkgd2l0aGluICcgKyBoZWFydGJlYXRUaW1lb3V0ICsgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nKSk7XG4gICAgICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FzQWN0aXZpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2FzQWN0aXZpdHkgPSBmYWxzZTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgfSwgaGVhcnRiZWF0VGltZW91dCk7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkc7XG4gICAgICAgIGRhdGFCdWZmZXIgPSAnJztcbiAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJyc7XG4gICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWQ7XG4gICAgICAgIHRleHRCdWZmZXIgPSAnJztcbiAgICAgICAgZmllbGRTdGFydCA9IDA7XG4gICAgICAgIHZhbHVlU3RhcnQgPSAwO1xuICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xuICAgICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbiAgICAgICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgICAgICB2YXIgcmVxdWVzdFVSTCA9IHVybDtcbiAgICAgICAgaWYgKHVybC5zbGljZSgwLCA1KSAhPT0gJ2RhdGE6JyAmJiB1cmwuc2xpY2UoMCwgNSkgIT09ICdibG9iOicpIHtcbiAgICAgICAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0VVJMICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAnbGFzdEV2ZW50SWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVlc3RIZWFkZXJzID0ge1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nO1xuICAgICAgICBpZiAoaGVhZGVyczIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IodmFyIG5hbWUgaW4gaGVhZGVyczIpe1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVyczIsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gaGVhZGVyczJbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0cmFuc3BvcnQub3Blbih4aHIsIG9uU3RhcnQsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoLCByZXF1ZXN0VVJMLCB3aXRoQ3JlZGVudGlhbHMsIHJlcXVlc3RIZWFkZXJzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZXMudXJsID0gdXJsO1xuICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HO1xuICAgIGVzLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscztcbiAgICBlcy5fY2xvc2UgPSBjbG9zZTtcbiAgICBvblRpbWVvdXQoKTtcbn1cbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldDEucHJvdG90eXBlKTtcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU47XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRUQ7XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Nsb3NlKCk7XG59O1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HID0gQ09OTkVDVElORztcbkV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU47XG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRDtcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcbnZhciBfZGVmYXVsdCA9IEV2ZW50U291cmNlUG9seWZpbGw7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kaXNwbGF5Q29udGVudCA9IGRpc3BsYXlDb250ZW50O1xuZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0KShmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yKHZhciB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksIGkgPSB4Lmxlbmd0aDsgaS0tOyl7XG4gICAgICAgICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNsb3NlUGluZyA9IGNsb3NlUGluZztcbmV4cG9ydHMuc2V0dXBQaW5nID0gc2V0dXBQaW5nO1xuZXhwb3J0cy5jdXJyZW50UGFnZSA9IHZvaWQgMDtcbnZhciBfZXZlbnRzb3VyY2UgPSByZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO1xubGV0IGV2dFNvdXJjZTtcbmxldCBjdXJyZW50UGFnZTtcbmV4cG9ydHMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZTtcbmZ1bmN0aW9uIGNsb3NlUGluZygpIHtcbiAgICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKTtcbiAgICBldnRTb3VyY2UgPSBudWxsO1xufVxuZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG4gICAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVybjtcbiAgICBleHBvcnRzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgPSBwYXRobmFtZTtcbiAgICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgICBjbG9zZVBpbmcoKTtcbiAgICBldnRTb3VyY2UgPSAoMCwgX2V2ZW50c291cmNlKS5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICAgICAgICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2VuY29kZVVSSUNvbXBvbmVudChjdXJyZW50UGFnZSl9YCxcbiAgICAgICAgdGltZW91dDogNTAwMFxuICAgIH0pO1xuICAgIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KT0+e1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICAgIC8vIGRvbid0IGF0dGVtcHQgZmV0Y2hpbmcgdGhlIHBhZ2UgaWYgd2UncmUgYWxyZWFkeSBzaG93aW5nXG4gICAgICAgICAgICAvLyB0aGUgZGV2IG92ZXJsYXkgYXMgdGhpcyBjYW4gY2F1c2UgdGhlIGVycm9yIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgICAgICAgLy8gcmVwZWF0ZWRseVxuICAgICAgICAgICAgaWYgKHBheWxvYWQuaW52YWxpZCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmVycikge1xuICAgICAgICAgICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgICAgICAgICAgZmV0Y2gobG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHBhZ2VSZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMubWFwIl0sIm5hbWVzIjpbIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfZXZlbnRzb3VyY2UiLCJfb25EZW1hbmRFbnRyaWVzVXRpbHMiLCJfZm91YyIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIndpbmRvdyIsIkV2ZW50U291cmNlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImFzc2V0UHJlZml4IiwicGFnZSIsIm1vc3RSZWNlbnRIYXNoIiwiY3VySGFzaCIsIl9fd2VicGFja19oYXNoX18iLCJob3RVcGRhdGVQYXRoIiwiZW5kc1dpdGgiLCJpc1VwZGF0ZUF2YWlsYWJsZSIsImNhbkFwcGx5VXBkYXRlcyIsIm1vZHVsZSIsImhvdCIsInN0YXR1cyIsIl90cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJmZXRjaCIsIl9fd2VicGFja19ydW50aW1lX2lkX18iLCJqc29uRGF0YSIsImpzb24iLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsInRyeUFwcGx5VXBkYXRlcyIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJzZXR1cFBpbmciLCJkaXNwbGF5Q29udGVudCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImdldEV2ZW50U291cmNlV3JhcHBlciIsImV2ZW50Q2FsbGJhY2tzIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwib3B0aW9ucyIsInNvdXJjZSIsImxhc3RBY3Rpdml0eSIsIkRhdGUiLCJsaXN0ZW5lcnMiLCJ0aW1lb3V0IiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0IiwicGF0aCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwicHVzaCIsIlJlc3BvbnNlMSIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIxIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlcjEiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlcjEiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNlbmQiLCJlcnJvcjEiLCJ0b0xvd2VyQ2FzZSIsImNoYXJDb2RlQXQiLCJIZWFkZXJzUG9seWZpbGwiLCJhbGwiLCJtYXAiLCJjcmVhdGUiLCJhcnJheSIsInNwbGl0IiwibGluZSIsInBhcnRzIiwiam9pbiIsIl9tYXAiLCJnZXQiLCJYSFJUcmFuc3BvcnQiLCJvblN0YXJ0Q2FsbGJhY2siLCJvblByb2dyZXNzQ2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiaGVhZGVycyIsIm9mZnNldCIsImNodW5rIiwic2xpY2UiLCJoZWFkZXJzMSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiaGVhZGVyczIiLCJfaGVhZGVycyIsIkZldGNoVHJhbnNwb3J0IiwiY29udHJvbGxlciIsInRleHREZWNvZGVyIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInJlc3BvbnNlIiwicmVhZGVyIiwiYm9keSIsImdldFJlYWRlciIsImNhbmNlbCIsInJlYWROZXh0Q2h1bmsiLCJyZWFkIiwicmVzdWx0IiwiRXZlbnRUYXJnZXQxIiwiX2xpc3RlbmVycyIsInRocm93RXJyb3IiLCJlIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJ0eXBlIiwibGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3VuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZCIsIkV2ZW50MSIsIk1lc3NhZ2VFdmVudDEiLCJsYXN0RXZlbnRJZCIsIkNvbm5lY3Rpb25FdmVudCIsIldBSVRJTkciLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NFRCIsIkFGVEVSX0NSIiwiRklFTERfU1RBUlQiLCJGSUVMRCIsIlZBTFVFX1NUQVJUIiwiVkFMVUUiLCJjb250ZW50VHlwZVJlZ0V4cCIsIk1JTklNVU1fRFVSQVRJT04iLCJNQVhJTVVNX0RVUkFUSU9OIiwicGFyc2VEdXJhdGlvbiIsImRlZiIsIm4iLCJwYXJzZUludCIsImNsYW1wRHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiZmlyZSIsImYiLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiX2Nsb3NlIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJoZWFkZXJzMyIsInRlc3QiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwiX2RlZmF1bHQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIngiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2xvc2VQaW5nIiwiY3VycmVudFBhZ2UiLCJldnRTb3VyY2UiLCJwYXRobmFtZUZuIiwicGF0aG5hbWUiLCJwYXlsb2FkIiwiaW52YWxpZCIsIl9fTkVYVF9EQVRBX18iLCJocmVmIiwicGFnZVJlcyJdLCJzb3VyY2VSb290IjoiIn0=