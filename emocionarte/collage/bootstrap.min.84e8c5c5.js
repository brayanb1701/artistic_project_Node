// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"XHUo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.write = exports.viewport = exports.variationPlacements = exports.top = exports.start = exports.right = exports.reference = exports.read = exports.popper = exports.placements = exports.modifierPhases = exports.main = exports.left = exports.end = exports.clippingParents = exports.bottom = exports.beforeWrite = exports.beforeRead = exports.beforeMain = exports.basePlacements = exports.auto = exports.afterWrite = exports.afterRead = exports.afterMain = void 0;
var top = 'top';
exports.top = top;
var bottom = 'bottom';
exports.bottom = bottom;
var right = 'right';
exports.right = right;
var left = 'left';
exports.left = left;
var auto = 'auto';
exports.auto = auto;
var basePlacements = [top, bottom, right, left];
exports.basePlacements = basePlacements;
var start = 'start';
exports.start = start;
var end = 'end';
exports.end = end;
var clippingParents = 'clippingParents';
exports.clippingParents = clippingParents;
var viewport = 'viewport';
exports.viewport = viewport;
var popper = 'popper';
exports.popper = popper;
var reference = 'reference';
exports.reference = reference;
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
exports.variationPlacements = variationPlacements;
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

exports.placements = placements;
var beforeRead = 'beforeRead';
exports.beforeRead = beforeRead;
var read = 'read';
exports.read = read;
var afterRead = 'afterRead'; // pure-logic modifiers

exports.afterRead = afterRead;
var beforeMain = 'beforeMain';
exports.beforeMain = beforeMain;
var main = 'main';
exports.main = main;
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

exports.afterMain = afterMain;
var beforeWrite = 'beforeWrite';
exports.beforeWrite = beforeWrite;
var write = 'write';
exports.write = write;
var afterWrite = 'afterWrite';
exports.afterWrite = afterWrite;
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
exports.modifierPhases = modifierPhases;
},{}],"B1zX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeName;

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
},{}],"QiNa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
},{}],"wsKO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.isHTMLElement = isHTMLElement;
exports.isShadowRoot = isShadowRoot;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElement(node) {
  var OwnElement = (0, _getWindow.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0, _getWindow.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0, _getWindow.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
},{"./getWindow.js":"QiNa"}],"D2nT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNodeName = _interopRequireDefault(require("../dom-utils/getNodeName.js"));

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};
exports.default = _default;
},{"../dom-utils/getNodeName.js":"B1zX","../dom-utils/instanceOf.js":"wsKO"}],"QS9h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBasePlacement;

var _enums = require("../enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
},{"../enums.js":"XHUo"}],"FuL6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.min = exports.max = void 0;
var max = Math.max;
exports.max = max;
var min = Math.min;
exports.min = min;
var round = Math.round;
exports.round = round;
},{}],"W8bA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingClientRect;

var _instanceOf = require("./instanceOf.js");

var _math = require("../utils/math.js");

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if ((0, _instanceOf.isHTMLElement)(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = (0, _math.round)(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = (0, _math.round)(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
},{"./instanceOf.js":"wsKO","../utils/math.js":"FuL6"}],"wDsK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLayoutRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = (0, _getBoundingClientRect.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
},{"./getBoundingClientRect.js":"W8bA"}],"x3Ja":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _instanceOf = require("./instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0, _instanceOf.isShadowRoot)(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}
},{"./instanceOf.js":"wsKO"}],"S6rb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getComputedStyle;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComputedStyle(element) {
  return (0, _getWindow.default)(element).getComputedStyle(element);
}
},{"./getWindow.js":"QiNa"}],"rK11":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTableElement;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0, _getNodeName.default)(element)) >= 0;
}
},{"./getNodeName.js":"B1zX"}],"sJcE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentElement;

var _instanceOf = require("./instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0, _instanceOf.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
},{"./instanceOf.js":"wsKO"}],"IVKl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParentNode;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParentNode(element) {
  if ((0, _getNodeName.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0, _instanceOf.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElement.default)(element) // fallback

  );
}
},{"./getNodeName.js":"B1zX","./getDocumentElement.js":"sJcE","./instanceOf.js":"wsKO"}],"CUhI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsetParent;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _isTableElement = _interopRequireDefault(require("./isTableElement.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTrueOffsetParent(element) {
  if (!(0, _instanceOf.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0, _getComputedStyle.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0, _instanceOf.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0, _getComputedStyle.default)(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0, _getParentNode.default)(element);

  if ((0, _instanceOf.isShadowRoot)(currentNode)) {
    currentNode = currentNode.host;
  }

  while ((0, _instanceOf.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName.default)(currentNode)) < 0) {
    var css = (0, _getComputedStyle.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0, _getWindow.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0, _isTableElement.default)(offsetParent) && (0, _getComputedStyle.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0, _getNodeName.default)(offsetParent) === 'html' || (0, _getNodeName.default)(offsetParent) === 'body' && (0, _getComputedStyle.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
},{"./getWindow.js":"QiNa","./getNodeName.js":"B1zX","./getComputedStyle.js":"S6rb","./instanceOf.js":"wsKO","./isTableElement.js":"rK11","./getParentNode.js":"IVKl"}],"PMyK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMainAxisFromPlacement;

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
},{}],"FbIu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.within = within;
exports.withinMaxClamp = withinMaxClamp;

var _math = require("./math.js");

function within(min, value, max) {
  return (0, _math.max)(min, (0, _math.min)(value, max));
}

function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
},{"./math.js":"FuL6"}],"a0QL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFreshSideObject;

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
},{}],"SCz0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergePaddingObject;

var _getFreshSideObject = _interopRequireDefault(require("./getFreshSideObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0, _getFreshSideObject.default)(), paddingObject);
}
},{"./getFreshSideObject.js":"a0QL"}],"sYkG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandToHashMap;

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
},{}],"zJlD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _contains = _interopRequireDefault(require("../dom-utils/contains.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _within = require("../utils/within.js");

var _mergePaddingObject = _interopRequireDefault(require("../utils/mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("../utils/expandToHashMap.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var axis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var isVertical = [_enums.left, _enums.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0, _getLayoutRect.default)(arrowElement);
  var minProp = axis === 'y' ? _enums.top : _enums.left;
  var maxProp = axis === 'y' ? _enums.bottom : _enums.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0, _getOffsetParent.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0, _within.within)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("production" !== "production") {
    if (!(0, _instanceOf.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0, _contains.default)(state.elements.popper, arrowElement)) {
    if ("production" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"QS9h","../dom-utils/getLayoutRect.js":"wDsK","../dom-utils/contains.js":"x3Ja","../dom-utils/getOffsetParent.js":"CUhI","../utils/getMainAxisFromPlacement.js":"PMyK","../utils/within.js":"FbIu","../utils/mergePaddingObject.js":"SCz0","../utils/expandToHashMap.js":"sYkG","../enums.js":"XHUo","../dom-utils/instanceOf.js":"wsKO"}],"auH8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVariation;

function getVariation(placement) {
  return placement.split('-')[1];
}
},{}],"ebtt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.mapToStyles = mapToStyles;

var _enums = require("../enums.js");

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("../dom-utils/getComputedStyle.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0, _math.round)(x * dpr) / dpr || 0,
    y: (0, _math.round)(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums.left;
  var sideY = _enums.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0, _getOffsetParent.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0, _getWindow.default)(popper)) {
      offsetParent = (0, _getDocumentElement.default)(popper);

      if ((0, _getComputedStyle.default)(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums.top || (placement === _enums.left || placement === _enums.right) && variation === _enums.end) {
      sideY = _enums.bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums.left || (placement === _enums.top || placement === _enums.bottom) && variation === _enums.end) {
      sideX = _enums.right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("production" !== "production") {
    var transitionProperty = (0, _getComputedStyle.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0, _getBasePlacement.default)(state.placement),
    variation: (0, _getVariation.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
exports.default = _default;
},{"../enums.js":"XHUo","../dom-utils/getOffsetParent.js":"CUhI","../dom-utils/getWindow.js":"QiNa","../dom-utils/getDocumentElement.js":"sJcE","../dom-utils/getComputedStyle.js":"S6rb","../utils/getBasePlacement.js":"QS9h","../utils/getVariation.js":"auH8","../utils/math.js":"FuL6"}],"psGJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0, _getWindow.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};
exports.default = _default;
},{"../dom-utils/getWindow.js":"QiNa"}],"M6e4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
},{}],"lLmA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
},{}],"oJ75":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScroll;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScroll(node) {
  var win = (0, _getWindow.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
},{"./getWindow.js":"QiNa"}],"zwcJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScrollBarX;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0, _getBoundingClientRect.default)((0, _getDocumentElement.default)(element)).left + (0, _getWindowScroll.default)(element).scrollLeft;
}
},{"./getBoundingClientRect.js":"W8bA","./getDocumentElement.js":"sJcE","./getWindowScroll.js":"oJ75"}],"E2lw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewportRect;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewportRect(element) {
  var win = (0, _getWindow.default)(element);
  var html = (0, _getDocumentElement.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0, _getWindowScrollBarX.default)(element),
    y: y
  };
}
},{"./getWindow.js":"QiNa","./getDocumentElement.js":"sJcE","./getWindowScrollBarX.js":"zwcJ"}],"yEje":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentRect;

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0, _getDocumentElement.default)(element);
  var winScroll = (0, _getWindowScroll.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0, _math.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0, _math.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX.default)(element);
  var y = -winScroll.scrollTop;

  if ((0, _getComputedStyle.default)(body || html).direction === 'rtl') {
    x += (0, _math.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
},{"./getDocumentElement.js":"sJcE","./getComputedStyle.js":"S6rb","./getWindowScrollBarX.js":"zwcJ","./getWindowScroll.js":"oJ75","../utils/math.js":"FuL6"}],"j3Hf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScrollParent;

var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0, _getComputedStyle2.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
},{"./getComputedStyle.js":"S6rb"}],"Qnrt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollParent;

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0, _getNodeName.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0, _instanceOf.isHTMLElement)(node) && (0, _isScrollParent.default)(node)) {
    return node;
  }

  return getScrollParent((0, _getParentNode.default)(node));
}
},{"./getParentNode.js":"IVKl","./isScrollParent.js":"j3Hf","./getNodeName.js":"B1zX","./instanceOf.js":"wsKO"}],"m3DJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listScrollParents;

var _getScrollParent = _interopRequireDefault(require("./getScrollParent.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0, _getScrollParent.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0, _getWindow.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0, _getParentNode.default)(target)));
}
},{"./getScrollParent.js":"Qnrt","./getParentNode.js":"IVKl","./getWindow.js":"QiNa","./isScrollParent.js":"j3Hf"}],"rB0G":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rectToClientRect;

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
},{}],"M7BJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClippingRect;

var _enums = require("../enums.js");

var _getViewportRect = _interopRequireDefault(require("./getViewportRect.js"));

var _getDocumentRect = _interopRequireDefault(require("./getDocumentRect.js"));

var _listScrollParents = _interopRequireDefault(require("./listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _contains = _interopRequireDefault(require("./contains.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _rectToClientRect = _interopRequireDefault(require("../utils/rectToClientRect.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInnerBoundingClientRect(element) {
  var rect = (0, _getBoundingClientRect.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums.viewport ? (0, _rectToClientRect.default)((0, _getViewportRect.default)(element)) : (0, _instanceOf.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRect.default)((0, _getDocumentRect.default)((0, _getDocumentElement.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0, _listScrollParents.default)((0, _getParentNode.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0, _instanceOf.isHTMLElement)(element) ? (0, _getOffsetParent.default)(element) : element;

  if (!(0, _instanceOf.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0, _instanceOf.isElement)(clippingParent) && (0, _contains.default)(clippingParent, clipperElement) && (0, _getNodeName.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0, _math.max)(rect.top, accRect.top);
    accRect.right = (0, _math.min)(rect.right, accRect.right);
    accRect.bottom = (0, _math.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, _math.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
},{"../enums.js":"XHUo","./getViewportRect.js":"E2lw","./getDocumentRect.js":"yEje","./listScrollParents.js":"m3DJ","./getOffsetParent.js":"CUhI","./getDocumentElement.js":"sJcE","./getComputedStyle.js":"S6rb","./instanceOf.js":"wsKO","./getBoundingClientRect.js":"W8bA","./getParentNode.js":"IVKl","./contains.js":"x3Ja","./getNodeName.js":"B1zX","../utils/rectToClientRect.js":"rB0G","../utils/math.js":"FuL6"}],"dvfD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeOffsets;

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("./getMainAxisFromPlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0, _getBasePlacement.default)(placement) : null;
  var variation = placement ? (0, _getVariation.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
},{"./getBasePlacement.js":"QS9h","./getVariation.js":"auH8","./getMainAxisFromPlacement.js":"PMyK","../enums.js":"XHUo"}],"Moke":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectOverflow;

var _getClippingRect = _interopRequireDefault(require("../dom-utils/getClippingRect.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getBoundingClientRect = _interopRequireDefault(require("../dom-utils/getBoundingClientRect.js"));

var _computeOffsets = _interopRequireDefault(require("./computeOffsets.js"));

var _rectToClientRect = _interopRequireDefault(require("./rectToClientRect.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

var _mergePaddingObject = _interopRequireDefault(require("./mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("./expandToHashMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
  var altContext = elementContext === _enums.popper ? _enums.reference : _enums.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0, _getClippingRect.default)((0, _instanceOf.isElement)(element) ? element : element.contextElement || (0, _getDocumentElement.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0, _getBoundingClientRect.default)(state.elements.reference);
  var popperOffsets = (0, _computeOffsets.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0, _rectToClientRect.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums.right, _enums.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums.top, _enums.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
},{"../dom-utils/getClippingRect.js":"M7BJ","../dom-utils/getDocumentElement.js":"sJcE","../dom-utils/getBoundingClientRect.js":"W8bA","./computeOffsets.js":"dvfD","./rectToClientRect.js":"rB0G","../enums.js":"XHUo","../dom-utils/instanceOf.js":"wsKO","./mergePaddingObject.js":"SCz0","./expandToHashMap.js":"sYkG"}],"HhJi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeAutoPlacement;

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("./detectOverflow.js"));

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums.placements : _options$allowedAutoP;
  var variation = (0, _getVariation.default)(placement);
  var placements = variation ? flipVariations ? _enums.variationPlacements : _enums.variationPlacements.filter(function (placement) {
    return (0, _getVariation.default)(placement) === variation;
  }) : _enums.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("production" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0, _getBasePlacement.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
},{"./getVariation.js":"auH8","../enums.js":"XHUo","./detectOverflow.js":"Moke","./getBasePlacement.js":"QS9h"}],"rNoN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getOppositePlacement = _interopRequireDefault(require("../utils/getOppositePlacement.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getOppositeVariationPlacement = _interopRequireDefault(require("../utils/getOppositeVariationPlacement.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _computeAutoPlacement = _interopRequireDefault(require("../utils/computeAutoPlacement.js"));

var _enums = require("../enums.js");

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function getExpandedFallbackPlacements(placement) {
  if ((0, _getBasePlacement.default)(placement) === _enums.auto) {
    return [];
  }

  var oppositePlacement = (0, _getOppositePlacement.default)(placement);
  return [(0, _getOppositeVariationPlacement.default)(placement), oppositePlacement, (0, _getOppositeVariationPlacement.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0, _getBasePlacement.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _getOppositePlacement.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0, _getBasePlacement.default)(placement) === _enums.auto ? (0, _computeAutoPlacement.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0, _getBasePlacement.default)(placement);

    var isStartVariation = (0, _getVariation.default)(placement) === _enums.start;

    var isVertical = [_enums.top, _enums.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums.right : _enums.left : isStartVariation ? _enums.bottom : _enums.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    }

    var altVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
exports.default = _default;
},{"../utils/getOppositePlacement.js":"M6e4","../utils/getBasePlacement.js":"QS9h","../utils/getOppositeVariationPlacement.js":"lLmA","../utils/detectOverflow.js":"Moke","../utils/computeAutoPlacement.js":"HhJi","../enums.js":"XHUo","../utils/getVariation.js":"auH8"}],"jhaw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums.top, _enums.right, _enums.bottom, _enums.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0, _detectOverflow.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0, _detectOverflow.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
exports.default = _default;
},{"../enums.js":"XHUo","../utils/detectOverflow.js":"Moke"}],"aUNc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.distanceAndSkiddingToXY = distanceAndSkiddingToXY;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0, _getBasePlacement.default)(placement);
  var invertDistance = [_enums.left, _enums.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums.left, _enums.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;

  var data = _enums.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});

  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"QS9h","../enums.js":"XHUo"}],"Pf8x":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _computeOffsets = _interopRequireDefault(require("../utils/computeOffsets.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = (0, _computeOffsets.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
exports.default = _default;
},{"../utils/computeOffsets.js":"dvfD"}],"YGKJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAltAxis;

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
},{}],"RwXk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _getAltAxis = _interopRequireDefault(require("../utils/getAltAxis.js"));

var _within = require("../utils/within.js");

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _getFreshSideObject = _interopRequireDefault(require("../utils/getFreshSideObject.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0, _detectOverflow.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var variation = (0, _getVariation.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var altAxis = (0, _getAltAxis.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums.top : _enums.left;
    var altSide = mainAxis === 'y' ? _enums.bottom : _enums.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0, _getLayoutRect.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObject.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0, _within.within)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParent.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = (0, _within.within)(tether ? (0, _math.min)(min, tetherMin) : min, offset, tether ? (0, _math.max)(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums.top : _enums.left;

    var _altSide = mainAxis === 'x' ? _enums.bottom : _enums.right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums.top, _enums.left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? (0, _within.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _within.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
exports.default = _default;
},{"../enums.js":"XHUo","../utils/getBasePlacement.js":"QS9h","../utils/getMainAxisFromPlacement.js":"PMyK","../utils/getAltAxis.js":"YGKJ","../utils/within.js":"FbIu","../dom-utils/getLayoutRect.js":"wDsK","../dom-utils/getOffsetParent.js":"CUhI","../utils/detectOverflow.js":"Moke","../utils/getVariation.js":"auH8","../utils/getFreshSideObject.js":"a0QL","../utils/math.js":"FuL6"}],"TOq4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyStyles", {
  enumerable: true,
  get: function () {
    return _applyStyles.default;
  }
});
Object.defineProperty(exports, "arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "computeStyles", {
  enumerable: true,
  get: function () {
    return _computeStyles.default;
  }
});
Object.defineProperty(exports, "eventListeners", {
  enumerable: true,
  get: function () {
    return _eventListeners.default;
  }
});
Object.defineProperty(exports, "flip", {
  enumerable: true,
  get: function () {
    return _flip.default;
  }
});
Object.defineProperty(exports, "hide", {
  enumerable: true,
  get: function () {
    return _hide.default;
  }
});
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function () {
    return _offset.default;
  }
});
Object.defineProperty(exports, "popperOffsets", {
  enumerable: true,
  get: function () {
    return _popperOffsets.default;
  }
});
Object.defineProperty(exports, "preventOverflow", {
  enumerable: true,
  get: function () {
    return _preventOverflow.default;
  }
});

var _applyStyles = _interopRequireDefault(require("./applyStyles.js"));

var _arrow = _interopRequireDefault(require("./arrow.js"));

var _computeStyles = _interopRequireDefault(require("./computeStyles.js"));

var _eventListeners = _interopRequireDefault(require("./eventListeners.js"));

var _flip = _interopRequireDefault(require("./flip.js"));

var _hide = _interopRequireDefault(require("./hide.js"));

var _offset = _interopRequireDefault(require("./offset.js"));

var _popperOffsets = _interopRequireDefault(require("./popperOffsets.js"));

var _preventOverflow = _interopRequireDefault(require("./preventOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./applyStyles.js":"D2nT","./arrow.js":"zJlD","./computeStyles.js":"ebtt","./eventListeners.js":"psGJ","./flip.js":"rNoN","./hide.js":"jhaw","./offset.js":"aUNc","./popperOffsets.js":"Pf8x","./preventOverflow.js":"RwXk"}],"uy7N":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTMLElementScroll;

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
},{}],"Cbix":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeScroll;

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _instanceOf = require("./instanceOf.js");

var _getHTMLElementScroll = _interopRequireDefault(require("./getHTMLElementScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNodeScroll(node) {
  if (node === (0, _getWindow.default)(node) || !(0, _instanceOf.isHTMLElement)(node)) {
    return (0, _getWindowScroll.default)(node);
  } else {
    return (0, _getHTMLElementScroll.default)(node);
  }
}
},{"./getWindowScroll.js":"oJ75","./getWindow.js":"QiNa","./instanceOf.js":"wsKO","./getHTMLElementScroll.js":"uy7N"}],"FCaM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCompositeRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getNodeScroll = _interopRequireDefault(require("./getNodeScroll.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0, _math.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0, _math.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0, _instanceOf.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0, _instanceOf.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0, _getDocumentElement.default)(offsetParent);
  var rect = (0, _getBoundingClientRect.default)(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _getNodeName.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0, _isScrollParent.default)(documentElement)) {
      scroll = (0, _getNodeScroll.default)(offsetParent);
    }

    if ((0, _instanceOf.isHTMLElement)(offsetParent)) {
      offsets = (0, _getBoundingClientRect.default)(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0, _getWindowScrollBarX.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
},{"./getBoundingClientRect.js":"W8bA","./getNodeScroll.js":"Cbix","./getNodeName.js":"B1zX","./instanceOf.js":"wsKO","./getWindowScrollBarX.js":"zwcJ","./getDocumentElement.js":"sJcE","./isScrollParent.js":"j3Hf","../utils/math.js":"FuL6"}],"mxvt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orderModifiers;

var _enums = require("../enums.js");

// source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
},{"../enums.js":"XHUo"}],"mGsv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
},{}],"JD7L":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
},{}],"nr2q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateModifiers;

var _format = _interopRequireDefault(require("./format.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0, _format.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
},{"./format.js":"JD7L","../enums.js":"XHUo"}],"AjzX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueBy;

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
},{}],"pDli":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeByName;

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
},{}],"rg1d":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPopper = void 0;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _detectOverflow.default;
  }
});
exports.popperGenerator = popperGenerator;

var _getCompositeRect = _interopRequireDefault(require("./dom-utils/getCompositeRect.js"));

var _getLayoutRect = _interopRequireDefault(require("./dom-utils/getLayoutRect.js"));

var _listScrollParents = _interopRequireDefault(require("./dom-utils/listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./dom-utils/getOffsetParent.js"));

var _getComputedStyle2 = _interopRequireDefault(require("./dom-utils/getComputedStyle.js"));

var _orderModifiers = _interopRequireDefault(require("./utils/orderModifiers.js"));

var _debounce = _interopRequireDefault(require("./utils/debounce.js"));

var _validateModifiers = _interopRequireDefault(require("./utils/validateModifiers.js"));

var _uniqueBy = _interopRequireDefault(require("./utils/uniqueBy.js"));

var _getBasePlacement = _interopRequireDefault(require("./utils/getBasePlacement.js"));

var _mergeByName = _interopRequireDefault(require("./utils/mergeByName.js"));

var _detectOverflow = _interopRequireDefault(require("./utils/detectOverflow.js"));

var _instanceOf = require("./dom-utils/instanceOf.js");

var _enums = require("./enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0, _instanceOf.isElement)(reference) ? (0, _listScrollParents.default)(reference) : reference.contextElement ? (0, _listScrollParents.default)(reference.contextElement) : [],
          popper: (0, _listScrollParents.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0, _orderModifiers.default)((0, _mergeByName.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("production" !== "production") {
          var modifiers = (0, _uniqueBy.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0, _validateModifiers.default)(modifiers);

          if ((0, _getBasePlacement.default)(state.options.placement) === _enums.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0, _getComputedStyle2.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if ("production" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0, _getCompositeRect.default)(reference, (0, _getOffsetParent.default)(popper), state.options.strategy === 'fixed'),
          popper: (0, _getLayoutRect.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("production" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0, _debounce.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if ("production" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./dom-utils/getCompositeRect.js":"FCaM","./dom-utils/getLayoutRect.js":"wDsK","./dom-utils/listScrollParents.js":"m3DJ","./dom-utils/getOffsetParent.js":"CUhI","./dom-utils/getComputedStyle.js":"S6rb","./utils/orderModifiers.js":"mxvt","./utils/debounce.js":"mGsv","./utils/validateModifiers.js":"nr2q","./utils/uniqueBy.js":"AjzX","./utils/getBasePlacement.js":"QS9h","./utils/mergeByName.js":"pDli","./utils/detectOverflow.js":"Moke","./dom-utils/instanceOf.js":"wsKO","./enums.js":"XHUo"}],"hwU4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultModifiers = exports.createPopper = void 0;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"rg1d","./modifiers/eventListeners.js":"psGJ","./modifiers/popperOffsets.js":"Pf8x","./modifiers/computeStyles.js":"ebtt","./modifiers/applyStyles.js":"D2nT"}],"cujj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createPopper: true,
  defaultModifiers: true,
  popperGenerator: true,
  detectOverflow: true,
  createPopperLite: true
};
exports.createPopper = void 0;
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
exports.defaultModifiers = void 0;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

var _offset = _interopRequireDefault(require("./modifiers/offset.js"));

var _flip = _interopRequireDefault(require("./modifiers/flip.js"));

var _preventOverflow = _interopRequireDefault(require("./modifiers/preventOverflow.js"));

var _arrow = _interopRequireDefault(require("./modifiers/arrow.js"));

var _hide = _interopRequireDefault(require("./modifiers/hide.js"));

var _popperLite = require("./popper-lite.js");

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default, _hide.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"rg1d","./modifiers/eventListeners.js":"psGJ","./modifiers/popperOffsets.js":"Pf8x","./modifiers/computeStyles.js":"ebtt","./modifiers/applyStyles.js":"D2nT","./modifiers/offset.js":"aUNc","./modifiers/flip.js":"rNoN","./modifiers/preventOverflow.js":"RwXk","./modifiers/arrow.js":"zJlD","./modifiers/hide.js":"jhaw","./popper-lite.js":"hwU4","./modifiers/index.js":"TOq4"}],"vePw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  popperGenerator: true,
  detectOverflow: true,
  createPopperBase: true,
  createPopper: true,
  createPopperLite: true
};
Object.defineProperty(exports, "createPopper", {
  enumerable: true,
  get: function () {
    return _popper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperBase", {
  enumerable: true,
  get: function () {
    return _createPopper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});

var _enums = require("./enums.js");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

var _createPopper = require("./createPopper.js");

var _popper = require("./popper.js");

var _popperLite = require("./popper-lite.js");
},{"./enums.js":"XHUo","./modifiers/index.js":"TOq4","./createPopper.js":"rg1d","./popper.js":"cujj","./popper-lite.js":"hwU4"}],"ZydM":[function(require,module,exports) {
var define;
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e19) { throw _e19; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e20) { didErr = true; err = _e20; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
  * Bootstrap v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(this, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
      value: "Module"
    }));

    if (t) {
      var _loop = function _loop(_i) {
        if ("default" !== _i) {
          var _s = Object.getOwnPropertyDescriptor(t, _i);

          Object.defineProperty(e, _i, _s.get ? _s : {
            enumerable: !0,
            get: function get() {
              return t[_i];
            }
          });
        }
      };

      for (var _i in t) {
        _loop(_i);
      }
    }

    return e.default = t, Object.freeze(e);
  }

  var i = e(t),
      s = "transitionend",
      n = function n(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = t.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#".concat(_i2.split("#")[1])), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      o = function o(t) {
    var e = n(t);
    return e && document.querySelector(e) ? e : null;
  },
      r = function r(t) {
    var e = n(t);
    return e ? document.querySelector(e) : null;
  },
      a = function a(t) {
    t.dispatchEvent(new Event(s));
  },
      l = function l(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      c = function c(t) {
    return l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
  },
      h = function h(t) {
    if (!l(t) || 0 === t.getClientRects().length) return !1;
    var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
    if (!i) return e;

    if (i !== t) {
      var _e2 = t.closest("summary");

      if (_e2 && _e2.parentNode !== i) return !1;
      if (null === _e2) return !1;
    }

    return e;
  },
      d = function d(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      u = function u(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null;
  },
      _ = function _() {},
      g = function g(t) {
    t.offsetHeight;
  },
      f = function f() {
    return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
  },
      p = [],
      m = function m() {
    return "rtl" === document.documentElement.dir;
  },
      b = function b(t) {
    var e;
    e = function e() {
      var e = f();

      if (e) {
        var _i3 = t.NAME,
            _s2 = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _s2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", function () {
      var _iterator = _createForOfIteratorHelper(p),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t2 = _step.value;

          _t2();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }), p.push(e)) : e();
  },
      v = function v(t) {
    "function" == typeof t && t();
  },
      y = function y(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void v(t);

    var n = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var s = Number.parseFloat(e),
          n = Number.parseFloat(i);
      return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var o = !1;

    var r = function r(_ref) {
      var i = _ref.target;
      i === e && (o = !0, e.removeEventListener(s, r), v(t));
    };

    e.addEventListener(s, r), setTimeout(function () {
      o || a(e);
    }, n);
  },
      w = function w(t, e, i, s) {
    var n = t.length;
    var o = t.indexOf(e);
    return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1, s && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))]);
  },
      A = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      E = /::\d+$/,
      C = {};

  var k = 1;
  var L = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function I(t, e) {
    return e && "".concat(e, "::").concat(k++) || t.uidEvent || k++;
  }

  function S(t) {
    var e = I(t);
    return t.uidEvent = e, C[e] = C[e] || {}, C[e];
  }

  function D(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.originalHandler === e && t.delegationSelector === i;
    });
  }

  function N(t, e, i) {
    var s = "string" == typeof e,
        n = s ? i : e;
    var o = j(t);
    return O.has(o) || (o = t), [s, n, o];
  }

  function P(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;

    if (i || (i = s, s = null), e in L) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      s ? s = _t3(s) : i = _t3(i);
    }

    var _N = N(e, i, s),
        _N2 = _slicedToArray(_N, 3),
        o = _N2[0],
        r = _N2[1],
        a = _N2[2],
        l = S(t),
        c = l[a] || (l[a] = {}),
        h = D(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && n);
    var d = I(r, e.replace(A, "")),
        u = o ? function (t, e, i) {
      return function s(n) {
        var o = t.querySelectorAll(e);

        for (var _r = n.target; _r && _r !== this; _r = _r.parentNode) {
          var _iterator2 = _createForOfIteratorHelper(o),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _a = _step2.value;
              if (_a === _r) return n.delegateTarget = _r, s.oneOff && $.off(t, n.type, e, i), i.apply(_r, [n]);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      };
    }(t, i, s) : function (t, e) {
      return function i(s) {
        return s.delegateTarget = t, i.oneOff && $.off(t, s.type, e), e.apply(t, [s]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function x(t, e, i, s, n) {
    var o = D(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }

  function M(t, e, i, s) {
    var n = e[i] || {};

    for (var _i4 = 0, _Object$keys = Object.keys(n); _i4 < _Object$keys.length; _i4++) {
      var _o = _Object$keys[_i4];

      if (_o.includes(s)) {
        var _s3 = n[_o];
        x(t, e, i, _s3.originalHandler, _s3.delegationSelector);
      }
    }
  }

  function j(t) {
    return t = t.replace(T, ""), L[t] || t;
  }

  var $ = {
    on: function on(t, e, i, s) {
      P(t, e, i, s, !1);
    },
    one: function one(t, e, i, s) {
      P(t, e, i, s, !0);
    },
    off: function off(t, e, i, s) {
      if ("string" != typeof e || !t) return;

      var _N3 = N(e, i, s),
          _N4 = _slicedToArray(_N3, 3),
          n = _N4[0],
          o = _N4[1],
          r = _N4[2],
          a = r !== e,
          l = S(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void x(t, l, r, o, n ? i : null);
      }

      if (c) for (var _i5 = 0, _Object$keys2 = Object.keys(l); _i5 < _Object$keys2.length; _i5++) {
        var _i6 = _Object$keys2[_i5];
        M(t, l, _i6, e.slice(1));
      }
      var h = l[r] || {};

      for (var _i7 = 0, _Object$keys3 = Object.keys(h); _i7 < _Object$keys3.length; _i7++) {
        var _i8 = _Object$keys3[_i7];

        var _s4 = _i8.replace(E, "");

        if (!a || e.includes(_s4)) {
          var _e4 = h[_i8];
          x(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var s = f();
      var n = null,
          o = !0,
          r = !0,
          a = !1;
      e !== j(e) && s && (n = s.Event(e, i), s(t).trigger(n), o = !n.isPropagationStopped(), r = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented());
      var l = new Event(e, {
        bubbles: o,
        cancelable: !0
      });

      if (void 0 !== i) {
        var _loop2 = function _loop2() {
          var t = _Object$keys4[_i9];
          Object.defineProperty(l, t, {
            get: function get() {
              return i[t];
            }
          });
        };

        for (var _i9 = 0, _Object$keys4 = Object.keys(i); _i9 < _Object$keys4.length; _i9++) {
          _loop2();
        }
      }

      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
    }
  },
      F = new Map(),
      H = {
    set: function set(t, e, i) {
      F.has(t) || F.set(t, new Map());
      var s = F.get(t);
      s.has(e) || 0 === s.size ? s.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
    },
    get: function get(t, e) {
      return F.has(t) && F.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!F.has(t)) return;
      var i = F.get(t);
      i.delete(e), 0 === i.size && F.delete(t);
    }
  };

  function z(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;

    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }

  function q(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  var B = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(q(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(q(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
          i = Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs") && !t.startsWith("bsConfig");
      });

      var _iterator3 = _createForOfIteratorHelper(i),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _s5 = _step3.value;

          var _i10 = _s5.replace(/^bs/, "");

          _i10 = _i10.charAt(0).toLowerCase() + _i10.slice(1, _i10.length), e[_i10] = z(t.dataset[_s5]);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-".concat(q(e))));
    }
  };

  var W = /*#__PURE__*/function () {
    function W() {
      _classCallCheck(this, W);
    }

    _createClass(W, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = l(e) ? B.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(i) ? i : {}), l(e) ? B.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

        for (var _i11 = 0, _Object$keys5 = Object.keys(e); _i11 < _Object$keys5.length; _i11++) {
          var _s6 = _Object$keys5[_i11];

          var _n2 = e[_s6],
              _o2 = t[_s6],
              _r2 = l(_o2) ? "element" : null == (i = _o2) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();

          if (!new RegExp(_n2).test(_r2)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_s6, "\" provided type \"").concat(_r2, "\" but expected type \"").concat(_n2, "\"."));
        }

        var i;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);

    return W;
  }();

  var R = /*#__PURE__*/function (_W) {
    _inherits(R, _W);

    var _super = _createSuper(R);

    function R(t, e) {
      var _this;

      _classCallCheck(this, R);

      _this = _super.call(this), (t = c(t)) && (_this._element = t, _this._config = _this._getConfig(e), H.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }

    _createClass(R, [{
      key: "dispose",
      value: function dispose() {
        H.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY);

        var _iterator4 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t4 = _step4.value;
            this[_t4] = null;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        y(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return H.get(c(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.2.0-beta1";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }]);

    return R;
  }(W);

  var V = function V(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        s = t.NAME;
    $.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)) return;
      var n = r(this) || this.closest(".".concat(s));
      t.getOrCreateInstance(n)[e]();
    });
  };

  var K = /*#__PURE__*/function (_R) {
    _inherits(K, _R);

    var _super2 = _createSuper(K);

    function K() {
      _classCallCheck(this, K);

      return _super2.apply(this, arguments);
    }

    _createClass(K, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = K.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return K;
  }(R);

  V(K, "close"), b(K);
  var Q = '[data-bs-toggle="button"]';

  var X = /*#__PURE__*/function (_R2) {
    _inherits(X, _R2);

    var _super3 = _createSuper(X);

    function X() {
      _classCallCheck(this, X);

      return _super3.apply(this, arguments);
    }

    _createClass(X, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = X.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return X;
  }(R);

  $.on(document, "click.bs.button.data-api", Q, function (t) {
    t.preventDefault();
    var e = t.target.closest(Q);
    X.getOrCreateInstance(e).toggle();
  }), b(X);
  var Y = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var s = t.parentNode.closest(e);

      for (; s;) {
        i.push(s), s = s.parentNode.closest(e);
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return "".concat(t, ":not([tabindex^=\"-\"])");
      }).join(",");
      return this.find(e, t).filter(function (t) {
        return !d(t) && h(t);
      });
    }
  },
      U = {
    leftCallback: null,
    rightCallback: null,
    endCallback: null
  },
      G = {
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
    endCallback: "(function|null)"
  };

  var J = /*#__PURE__*/function (_W2) {
    _inherits(J, _W2);

    var _super4 = _createSuper(J);

    function J(t, e) {
      var _this3;

      _classCallCheck(this, J);

      _this3 = _super4.call(this), _this3._element = t, t && J.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }

    _createClass(J, [{
      key: "dispose",
      value: function dispose() {
        $.off(this._element, ".bs.swipe");
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;

        this._supportPointerEvents ? ($.on(this._element, "pointerdown.bs.swipe", function (t) {
          return _this4._start(t);
        }), $.on(this._element, "pointerup.bs.swipe", function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.swipe", function (t) {
          return _this4._start(t);
        }), $.on(this._element, "touchmove.bs.swipe", function (t) {
          return _this4._move(t);
        }), $.on(this._element, "touchend.bs.swipe", function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "Default",
      get: function get() {
        return U;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return G;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);

    return J;
  }(W);

  var Z = "next",
      tt = "prev",
      et = "left",
      it = "right",
      st = "slid.bs.carousel",
      nt = "carousel",
      ot = "active",
      rt = {
    ArrowLeft: it,
    ArrowRight: et
  },
      at = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  },
      lt = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    ride: "(boolean|string)",
    pause: "(string|boolean)",
    touch: "boolean",
    wrap: "boolean"
  };

  var ct = /*#__PURE__*/function (_R3) {
    _inherits(ct, _R3);

    var _super5 = _createSuper(ct);

    function ct(t, e) {
      var _this5;

      _classCallCheck(this, ct);

      _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = Y.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === nt && _this5.cycle();
      return _this5;
    }

    _createClass(ct, [{
      key: "next",
      value: function next() {
        this._slide(Z);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(tt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && a(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;

        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;

        this._config.ride && (this._isSliding ? $.one(this._element, st, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;

        var e = this._getItems();

        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void $.one(this._element, st, function () {
          return _this8.to(t);
        });

        var i = this._getItemIndex(this._getActive());

        if (i === t) return;
        var s = t > i ? Z : tt;

        this._slide(s, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(ct.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;

        this._config.keyboard && $.on(this._element, "keydown.bs.carousel", function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", function () {
          return _this9.pause();
        }), $.on(this._element, "mouseleave.bs.carousel", function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && J.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;

        var _iterator5 = _createForOfIteratorHelper(Y.find(".carousel-item img", this._element)),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t5 = _step5.value;
            $.on(_t5, "dragstart.bs.carousel", function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(et));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(it));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new J(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = rt[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = Y.findOne(".active", this._indicatorsElement);
        e.classList.remove(ot), e.removeAttribute("aria-current");
        var i = Y.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(ot), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();

        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;

        var i = this._getActive(),
            s = t === Z,
            n = e || w(this._getItems(), i, s, this._config.wrap);

        if (n === i) return;

        var o = this._getItemIndex(n),
            r = function r(e) {
          return $.trigger(_this11._element, e, {
            relatedTarget: n,
            direction: _this11._orderToDirection(t),
            from: _this11._getItemIndex(i),
            to: o
          });
        };

        if (r("slide.bs.carousel").defaultPrevented) return;
        if (!i || !n) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n;
        var l = s ? "carousel-item-start" : "carousel-item-end",
            c = s ? "carousel-item-next" : "carousel-item-prev";
        n.classList.add(c), g(n), i.classList.add(l), n.classList.add(l), this._queueCallback(function () {
          n.classList.remove(l, c), n.classList.add(ot), i.classList.remove(ot, c, l), _this11._isSliding = !1, r(st);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return Y.findOne(".active.carousel-item", this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return Y.find(".carousel-item", this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return m() ? t === et ? tt : Z : t === et ? Z : tt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return m() ? t === tt ? et : it : t === tt ? it : et;
      }
    }], [{
      key: "Default",
      get: function get() {
        return at;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return lt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ct.getOrCreateInstance(this, t);

          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);

    return ct;
  }(R);

  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = r(this);
    if (!e || !e.classList.contains(nt)) return;
    t.preventDefault();
    var i = ct.getOrCreateInstance(e),
        s = this.getAttribute("data-bs-slide-to");
    return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), $.on(window, "load.bs.carousel.data-api", function () {
    var t = Y.find('[data-bs-ride="carousel"]');

    var _iterator6 = _createForOfIteratorHelper(t),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _e5 = _step6.value;
        ct.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }), b(ct);
  var ht = "show",
      dt = "collapse",
      ut = "collapsing",
      _t = '[data-bs-toggle="collapse"]',
      gt = {
    toggle: !0,
    parent: null
  },
      ft = {
    toggle: "boolean",
    parent: "(null|element)"
  };

  var pt = /*#__PURE__*/function (_R4) {
    _inherits(pt, _R4);

    var _super6 = _createSuper(pt);

    function pt(t, e) {
      var _this12;

      _classCallCheck(this, pt);

      _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = Y.find(_t);

      var _iterator7 = _createForOfIteratorHelper(i),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _t6 = _step7.value;

          var _e6 = o(_t6),
              _i12 = Y.find(_e6).filter(function (t) {
            return t === _this12._element;
          });

          null !== _e6 && _i12.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }

    _createClass(pt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return pt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;

        var _iterator8 = _createForOfIteratorHelper(t),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _e7 = _step8.value;

            _e7.hide();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        var e = this._getDimension();

        this._element.classList.remove(dt), this._element.classList.add(ut), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(ut), _this13._element.classList.add(dt, ht), _this13._element.style[e] = "", $.trigger(_this13._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), g(this._element), this._element.classList.add(ut), this._element.classList.remove(dt, ht);

        var _iterator9 = _createForOfIteratorHelper(this._triggerArray),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _t7 = _step9.value;

            var _e8 = r(_t7);

            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(ut), _this14._element.classList.add(dt), $.trigger(_this14._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(ht);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = c(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;

        var t = this._getFirstLevelChildren(_t);

        var _iterator10 = _createForOfIteratorHelper(t),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _e9 = _step10.value;

            var _t8 = r(_e9);

            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = Y.find(":scope .collapse .collapse", this._config.parent);
        return Y.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator11 = _createForOfIteratorHelper(t),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _i13 = _step11.value;
              _i13.classList.toggle("collapsed", !e), _i13.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return gt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ft;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = pt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return pt;
  }(R);

  $.on(document, "click.bs.collapse.data-api", _t, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = o(this),
        i = Y.find(e);

    var _iterator12 = _createForOfIteratorHelper(i),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _t9 = _step12.value;
        pt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }), b(pt);
  var mt = "dropdown",
      bt = "ArrowUp",
      vt = "ArrowDown",
      yt = "click.bs.dropdown.data-api",
      wt = "keydown.bs.dropdown.data-api",
      At = "show",
      Tt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Et = "".concat(Tt, ".show"),
      Ct = ".dropdown-menu",
      kt = m() ? "top-end" : "top-start",
      Lt = m() ? "top-start" : "top-end",
      Ot = m() ? "bottom-end" : "bottom-start",
      It = m() ? "bottom-start" : "bottom-end",
      St = m() ? "left-start" : "right-start",
      Dt = m() ? "right-start" : "left-start",
      Nt = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      Pt = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var xt = /*#__PURE__*/function (_R5) {
    _inherits(xt, _R5);

    var _super7 = _createSuper(xt);

    function xt(t, e) {
      var _this15;

      _classCallCheck(this, xt);

      _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = Y.findOne(Ct, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    _createClass(xt, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (d(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        if (!$.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;

            var _iterator13 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t10 = _step13.value;
                $.on(_t10, "mouseover", _);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(At), this._element.classList.add(At), $.trigger(this._element, "shown.bs.dropdown", t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (d(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(xt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!$.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;

            var _iterator14 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _t11 = _step14.value;
                $.off(_t11, "mouseover", _);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          this._popper && this._popper.destroy(), this._menu.classList.remove(At), this._element.classList.remove(At), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(xt.prototype), "_getConfig", this).call(this, t)).reference) && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(mt.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

        var e = this._getPopperConfig();

        this._popper = i.createPopper(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(At);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return St;
        if (t.classList.contains("dropstart")) return Dt;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? Lt : kt : e ? It : Ot;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return h(t);
        });
        i.length && w(i, e, t === vt, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return Nt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return mt;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = Y.find(Et);

        var _iterator15 = _createForOfIteratorHelper(e),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _i14 = _step15.value;

            var _e10 = xt.getInstance(_i14);

            if (!_e10 || !1 === _e10._config.autoClose) continue;

            var _s7 = t.composedPath(),
                _n3 = _s7.includes(_e10._menu);

            if (_s7.includes(_e10._element) || "inside" === _e10._config.autoClose && !_n3 || "outside" === _e10._config.autoClose && _n3) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o3 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o3.clickEvent = t), _e10._completeHide(_o3);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            s = [bt, vt].includes(t.key);
        if (!s && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var n = Y.findOne(Tt, t.delegateTarget.parentNode),
            o = xt.getOrCreateInstance(n);
        if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
      }
    }]);

    return xt;
  }(R);

  $.on(document, wt, Tt, xt.dataApiKeydownHandler), $.on(document, wt, Ct, xt.dataApiKeydownHandler), $.on(document, yt, xt.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", xt.clearMenus), $.on(document, yt, Tt, function (t) {
    t.preventDefault(), xt.getOrCreateInstance(this).toggle();
  }), b(xt);
  var Mt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      jt = ".sticky-top",
      $t = "padding-right",
      Ft = "margin-right";

  var Ht = /*#__PURE__*/function () {
    function Ht() {
      _classCallCheck(this, Ht);

      this._element = document.body;
    }

    _createClass(Ht, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, $t, function (e) {
          return e + t;
        }), this._setElementAttributes(Mt, $t, function (e) {
          return e + t;
        }), this._setElementAttributes(jt, Ft, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, $t), this._resetElementAttributes(Mt, $t), this._resetElementAttributes(jt, Ft);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this17 = this;

        var s = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this17._element && window.innerWidth > t.clientWidth + s) return;

          _this17._saveInitialAttribute(t, e);

          var n = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(n)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && B.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = B.getDataAttribute(t, e);
          null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (l(t)) e(t);else {
          var _iterator16 = _createForOfIteratorHelper(Y.find(t, this._element)),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _i15 = _step16.value;
              e(_i15);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      }
    }]);

    return Ht;
  }();

  var zt = "show",
      qt = "mousedown.bs.backdrop",
      Bt = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      Wt = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  };

  var Rt = /*#__PURE__*/function (_W3) {
    _inherits(Rt, _W3);

    var _super8 = _createSuper(Rt);

    function Rt(t) {
      var _this18;

      _classCallCheck(this, Rt);

      _this18 = _super8.call(this), _this18._config = _this18._getConfig(t), _this18._isAppended = !1, _this18._element = null;
      return _this18;
    }

    _createClass(Rt, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void v(t);

        this._append();

        var e = this._getElement();

        this._config.isAnimated && g(e), e.classList.add(zt), this._emulateAnimation(function () {
          v(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this19 = this;

        this._config.isVisible ? (this._getElement().classList.remove(zt), this._emulateAnimation(function () {
          _this19.dispose(), v(t);
        })) : v(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && ($.off(this._element, qt), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");

          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }

        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = c(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this20 = this;

        if (this._isAppended) return;

        var t = this._getElement();

        this._config.rootElement.append(t), $.on(t, qt, function () {
          v(_this20._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        y(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Bt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "backdrop";
      }
    }]);

    return Rt;
  }(W);

  var Vt = ".bs.focustrap",
      Kt = "backward",
      Qt = {
    trapElement: null,
    autofocus: !0
  },
      Xt = {
    trapElement: "element",
    autofocus: "boolean"
  };

  var Yt = /*#__PURE__*/function (_W4) {
    _inherits(Yt, _W4);

    var _super9 = _createSuper(Yt);

    function Yt(t) {
      var _this21;

      _classCallCheck(this, Yt);

      _this21 = _super9.call(this), _this21._config = _this21._getConfig(t), _this21._isActive = !1, _this21._lastTabNavDirection = null;
      return _this21;
    }

    _createClass(Yt, [{
      key: "activate",
      value: function activate() {
        var _this22 = this;

        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), $.off(document, Vt), $.on(document, "focusin.bs.focustrap", function (t) {
          return _this22._handleFocusin(t);
        }), $.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this22._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, $.off(document, Vt));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = Y.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === Kt ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Kt : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return Qt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Xt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);

    return Yt;
  }(W);

  var Ut = "hidden.bs.modal",
      Gt = "show.bs.modal",
      Jt = "modal-open",
      Zt = "show",
      te = "modal-static",
      ee = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      ie = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var se = /*#__PURE__*/function (_R6) {
    _inherits(se, _R6);

    var _super10 = _createSuper(se);

    function se(t, e) {
      var _this23;

      _classCallCheck(this, se);

      _this23 = _super10.call(this, t, e), _this23._dialog = Y.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new Ht(), _this23._addEventListeners();
      return _this23;
    }

    _createClass(se, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || this._isTransitioning || $.trigger(this._element, Gt, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Jt), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && !this._isTransitioning && ($.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Zt), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        for (var _i16 = 0, _arr2 = [window, this._dialog]; _i16 < _arr2.length; _i16++) {
          var _t13 = _arr2[_i16];
          $.off(_t13, ".bs.modal");
        }

        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(se.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Rt({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Yt({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;

        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = Y.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), g(this._element), this._element.classList.add(Zt), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, $.trigger(_this26._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;

        $.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          if ("Escape" === t.key) return _this27._config.keyboard ? (t.preventDefault(), void _this27.hide()) : void _this27._triggerBackdropTransition();
        }), $.on(window, "resize.bs.modal", function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), $.on(this._element, "click.dismiss.bs.modal", function (t) {
          t.target === t.currentTarget && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Jt), _this28._resetAdjustments(), _this28._scrollBar.reset(), $.trigger(_this28._element, Ut);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;

        if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(te) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(te), this._queueCallback(function () {
          _this29._element.classList.remove(te), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        if (i && !t) {
          var _t14 = m() ? "paddingLeft" : "paddingRight";

          this._element.style[_t14] = "".concat(e, "px");
        }

        if (!i && t) {
          var _t15 = m() ? "paddingRight" : "paddingLeft";

          this._element.style[_t15] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return ee;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ie;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = se.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return se;
  }(R);

  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;

    var e = r(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, Gt, function (t) {
      t.defaultPrevented || $.one(e, Ut, function () {
        h(_this30) && _this30.focus();
      });
    });
    var i = Y.findOne(".modal.show");
    i && se.getInstance(i).hide(), se.getOrCreateInstance(e).toggle(this);
  }), V(se), b(se);
  var ne = "show",
      oe = "showing",
      re = "hiding",
      ae = ".offcanvas.show",
      le = "hidePrevented.bs.offcanvas",
      ce = "hidden.bs.offcanvas",
      he = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      de = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var ue = /*#__PURE__*/function (_R7) {
    _inherits(ue, _R7);

    var _super11 = _createSuper(ue);

    function ue(t, e) {
      var _this31;

      _classCallCheck(this, ue);

      _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }

    _createClass(ue, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;

        this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ht().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(oe), this._queueCallback(function () {
          _this32._config.scroll || _this32._focustrap.activate(), _this32._element.classList.add(ne), _this32._element.classList.remove(oe), $.trigger(_this32._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;

        this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(re), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(ne, re), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new Ht().reset(), $.trigger(_this33._element, ce);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(ue.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;

        var t = Boolean(this._config.backdrop);
        return new Rt({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : $.trigger(_this34._element, le);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Yt({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;

        $.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : $.trigger(_this35._element, le));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return he;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return de;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ue.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return ue;
  }(R);

  $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;

    var e = r(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    $.one(e, ce, function () {
      h(_this36) && _this36.focus();
    });
    var i = Y.findOne(ae);
    i && i !== e && ue.getInstance(i).hide(), ue.getOrCreateInstance(e).toggle(this);
  }), $.on(window, "load.bs.offcanvas.data-api", function () {
    var _iterator17 = _createForOfIteratorHelper(Y.find(ae)),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t16 = _step17.value;
        ue.getOrCreateInstance(_t16).show();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), $.on(window, "resize.bs.offcanvas", function () {
    var _iterator18 = _createForOfIteratorHelper(Y.find("[aria-modal][class*=show][class*=offcanvas-]")),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _t17 = _step18.value;
        "fixed" !== getComputedStyle(_t17).position && ue.getOrCreateInstance(_t17).hide();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }), V(ue), b(ue);

  var _e = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      ge = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      fe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      pe = function pe(t, e) {
    var i = t.nodeName.toLowerCase();
    return e.includes(i) ? !_e.has(i) || Boolean(ge.test(t.nodeValue) || fe.test(t.nodeValue)) : e.filter(function (t) {
      return t instanceof RegExp;
    }).some(function (t) {
      return t.test(i);
    });
  },
      me = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      be = {
    extraClass: "",
    template: "<div></div>",
    content: {},
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    allowList: me
  },
      ve = {
    extraClass: "(string|function)",
    template: "string",
    content: "object",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object"
  },
      ye = {
    selector: "(string|element)",
    entry: "(string|element|function|null)"
  };

  var we = /*#__PURE__*/function (_W5) {
    _inherits(we, _W5);

    var _super12 = _createSuper(we);

    function we(t) {
      var _this37;

      _classCallCheck(this, we);

      _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
      return _this37;
    }

    _createClass(we, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;

        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;

        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);

        for (var _i17 = 0, _Object$entries = Object.entries(this._config.content); _i17 < _Object$entries.length; _i17++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i17], 2),
              _e11 = _Object$entries$_i[0],
              _i18 = _Object$entries$_i[1];

          this._setContent(t, _i18, _e11);
        }

        var e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(we.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i19 = 0, _Object$entries2 = Object.entries(t); _i19 < _Object$entries2.length; _i19++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i19], 2),
              _e12 = _Object$entries2$_i[0],
              _i20 = _Object$entries2$_i[1];

          _get(_getPrototypeOf(we.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i20
          }, ye);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var s = Y.findOne(i, t);
        s && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), s) : this._config.html ? s.innerHTML = this._maybeSanitize(e) : s.textContent = e : s.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;

          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);

          var s = new window.DOMParser().parseFromString(t, "text/html"),
              n = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(s.body.querySelectorAll("*")));

          var _iterator19 = _createForOfIteratorHelper(n),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _ref8;

              var _t18 = _step19.value;

              var _i21 = _t18.nodeName.toLowerCase();

              if (!Object.keys(e).includes(_i21)) {
                _t18.remove();

                continue;
              }

              var _s8 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t18.attributes)),
                  _n4 = [].concat(e["*"] || [], e[_i21] || []);

              var _iterator20 = _createForOfIteratorHelper(_s8),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _e13 = _step20.value;
                  pe(_e13, _n4) || _t18.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return s.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t(this) : t;
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return be;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ve;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);

    return we;
  }(W);

  var Ae = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Te = "fade",
      Ee = "show",
      Ce = ".modal",
      ke = "hide.bs.modal",
      Le = "hover",
      Oe = "focus",
      Ie = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: m() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: m() ? "right" : "left"
  },
      Se = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: me,
    popperConfig: null
  },
      De = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  };

  var Ne = /*#__PURE__*/function (_R8) {
    _inherits(Ne, _R8);

    var _super13 = _createSuper(Ne);

    function Ne(t, e) {
      var _this39;

      _classCallCheck(this, Ne);

      if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = !1, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39.tip = null, _this39._setListeners();
      return _this39;
    }

    _createClass(Ne, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) {
          if (t) {
            var _e14 = this._initializeOnDelegatedTarget(t);

            return _e14._activeTrigger.click = !_e14._activeTrigger.click, void (_e14._isWithActiveTrigger() ? _e14._enter() : _e14._leave());
          }

          this._isShown() ? this._leave() : this._enter();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), $.off(this._element.closest(Ce), ke, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(Ne.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;

        var t = $.trigger(this._element, this.constructor.eventName("show")),
            e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

        if (t.defaultPrevented || !e) return;

        var i = this._getTipElement();

        this._element.setAttribute("aria-describedby", i.getAttribute("id"));

        var s = this._config.container;

        if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), $.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._createPopper(i), i.classList.add(Ee), "ontouchstart" in document.documentElement) {
          var _ref9;

          var _iterator21 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _t19 = _step21.value;
              $.on(_t19, "mouseover", _);
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }

        this._queueCallback(function () {
          var t = _this40._isHovered;
          _this40._isHovered = !1, $.trigger(_this40._element, _this40.constructor.eventName("shown")), t && _this40._leave();
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;

        if (!this._isShown()) return;
        if ($.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;

        var t = this._getTipElement();

        if (t.classList.remove(Ee), "ontouchstart" in document.documentElement) {
          var _ref10;

          var _iterator22 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _t20 = _step22.value;
              $.off(_t20, "mouseover", _);
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }

        this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback(function () {
          _this41._isWithActiveTrigger() || (_this41._isHovered || t.remove(), _this41._element.removeAttribute("aria-describedby"), $.trigger(_this41._element, _this41.constructor.eventName("hidden")), _this41._disposePopper());
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();

        if (!e) return null;
        e.classList.remove(Te, Ee), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));

        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME).toString();

        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Te), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        var e = !1;
        this.tip && (e = this._isShown(), this.tip.remove(), this.tip = null), this._disposePopper(), this.tip = this._createTipElement(t), e && this.show();
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new we(_objectSpread(_objectSpread({}, this._config), {}, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._config.title;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(Te);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(Ee);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
            s = Ie[e.toUpperCase()];
        this._popper = i.createPopper(this._element, t, this._getPopperConfig(s));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;

        var t = this._config.trigger.split(" ");

        var _iterator23 = _createForOfIteratorHelper(t),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _e15 = _step23.value;
            if ("click" === _e15) $.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              return _this44.toggle(t);
            });else if ("manual" !== _e15) {
              var _t21 = _e15 === Le ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  _i22 = _e15 === Le ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

              $.on(this._element, _t21, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusin" === t.type ? Oe : Le] = !0, e._enter();
              }), $.on(this._element, _i22, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusout" === t.type ? Oe : Le] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, $.on(this._element.closest(Ce), ke, this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._config.originalTitle;
        t && (this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;

        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;

        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = B.getDataAttributes(this._element);

        for (var _i23 = 0, _Object$keys6 = Object.keys(e); _i23 < _Object$keys6.length; _i23++) {
          var _t22 = _Object$keys6[_i23];
          Ae.has(_t22) && delete e[_t22];
        }

        return t = _objectSpread(_objectSpread({}, e), "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), t.originalTitle = this._element.getAttribute("title") || "", t.title = this._resolvePossibleFunction(t.title) || t.originalTitle, "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _e16 in this._config) {
          this.constructor.Default[_e16] !== this._config[_e16] && (t[_e16] = this._config[_e16]);
        }

        return t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Se;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return De;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ne.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Ne;
  }(R);

  b(Ne);

  var Pe = _objectSpread(_objectSpread({}, Ne.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      xe = _objectSpread(_objectSpread({}, Ne.DefaultType), {}, {
    content: "(null|string|element|function)"
  });

  var Me = /*#__PURE__*/function (_Ne) {
    _inherits(Me, _Ne);

    var _super14 = _createSuper(Me);

    function Me() {
      _classCallCheck(this, Me);

      return _super14.apply(this, arguments);
    }

    _createClass(Me, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Pe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return xe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Me.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Me;
  }(Ne);

  b(Me);
  var je = "click.bs.scrollspy",
      $e = "active",
      Fe = "[href]",
      He = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null
  },
      ze = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element"
  };

  var qe = /*#__PURE__*/function (_R9) {
    _inherits(qe, _R9);

    var _super15 = _createSuper(qe);

    function qe(t, e) {
      var _this47;

      _classCallCheck(this, qe);

      _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }

    _createClass(qe, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();

        var _iterator24 = _createForOfIteratorHelper(this._observableSections.values()),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t23 = _step24.value;

            this._observer.observe(_t23);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(qe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = c(t.target) || document.body, t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;

        this._config.smoothScroll && ($.off(this._config.target, je), $.on(this._config.target, je, Fe, function (t) {
          var e = _this48._observableSections.get(t.target.hash);

          if (e) {
            t.preventDefault();

            var _i24 = _this48._rootElement || window,
                _s9 = e.offsetTop - _this48._element.offsetTop;

            if (_i24.scrollTo) return void _i24.scrollTo({
              top: _s9
            });
            _i24.scrollTop = _s9;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;

        var t = {
          root: this._rootElement,
          threshold: [.1, .5, 1],
          rootMargin: this._getRootMargin()
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;

        var e = function e(t) {
          return _this50._targetLinks.get("#".concat(t.target.id));
        },
            i = function i(t) {
          _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
        },
            s = (this._rootElement || document.documentElement).scrollTop,
            n = s >= this._previousScrollData.parentScrollTop;

        this._previousScrollData.parentScrollTop = s;

        var _iterator25 = _createForOfIteratorHelper(t),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _o4 = _step25.value;

            if (!_o4.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o4));
              continue;
            }

            var _t24 = _o4.target.offsetTop >= this._previousScrollData.visibleEntryTop;

            if (n && _t24) {
              if (i(_o4), !s) return;
            } else n || _t24 || i(_o4);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_getRootMargin",
      value: function _getRootMargin() {
        return this._config.offset ? "".concat(this._config.offset, "px 0px -30%") : this._config.rootMargin;
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = Y.find(Fe, this._config.target);

        var _iterator26 = _createForOfIteratorHelper(t),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _e17 = _step26.value;
            if (!_e17.hash || d(_e17)) continue;

            var _t25 = Y.findOne(_e17.hash, this._element);

            h(_t25) && (this._targetLinks.set(_e17.hash, _e17), this._observableSections.set(_e17.hash, _t25));
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add($e), this._activateParents(t), $.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) Y.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add($e);else {
          var _iterator27 = _createForOfIteratorHelper(Y.parents(t, ".nav, .list-group")),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _e18 = _step27.value;

              var _iterator28 = _createForOfIteratorHelper(Y.prev(_e18, ".nav-link, .nav-item > .nav-link, .list-group-item")),
                  _step28;

              try {
                for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                  var _t26 = _step28.value;

                  _t26.classList.add($e);
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove($e);
        var e = Y.find("[href].active", t);

        var _iterator29 = _createForOfIteratorHelper(e),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _t27 = _step29.value;

            _t27.classList.remove($e);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return He;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ze;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return qe;
  }(R);

  $.on(window, "load.bs.scrollspy.data-api", function () {
    var _iterator30 = _createForOfIteratorHelper(Y.find('[data-bs-spy="scroll"]')),
        _step30;

    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _t28 = _step30.value;
        qe.getOrCreateInstance(_t28);
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
  }), b(qe);
  var Be = "ArrowLeft",
      We = "ArrowRight",
      Re = "ArrowUp",
      Ve = "ArrowDown",
      Ke = "active",
      Qe = "fade",
      Xe = "show",
      Ye = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Ue = ".nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role=\"tab\"]:not(.dropdown-toggle), ".concat(Ye);

  var Ge = /*#__PURE__*/function (_R10) {
    _inherits(Ge, _R10);

    var _super16 = _createSuper(Ge);

    function Ge(t) {
      var _this51;

      _classCallCheck(this, Ge);

      _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), $.on(_this51._element, "keydown.bs.tab", function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }

    _createClass(Ge, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;

        var e = this._getActiveElem(),
            i = e ? $.trigger(e, "hide.bs.tab", {
          relatedTarget: t
        }) : null;

        $.trigger(t, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;

        if (!t) return;
        t.classList.add(Ke), this._activate(r(t));
        var i = t.classList.contains(Qe);

        this._queueCallback(function () {
          i && t.classList.add(Xe), "tab" === t.getAttribute("role") && (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), $.trigger(t, "shown.bs.tab", {
            relatedTarget: e
          }));
        }, t, i);
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;

        if (!t) return;
        t.classList.remove(Ke), t.blur(), this._deactivate(r(t));
        var i = t.classList.contains(Qe);

        this._queueCallback(function () {
          i && t.classList.remove(Xe), "tab" === t.getAttribute("role") && (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), $.trigger(t, "hidden.bs.tab", {
            relatedTarget: e
          }));
        }, t, i);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![Be, We, Re, Ve].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        var e = [We, Ve].includes(t.key),
            i = w(this._getChildren().filter(function (t) {
          return !d(t);
        }), t.target, e, !0);
        i && Ge.getOrCreateInstance(i).show();
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return Y.find(Ue, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;

        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");

        var _iterator31 = _createForOfIteratorHelper(e),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _t29 = _step31.value;

            this._setInitialAttributesOnChild(_t29);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);

        var e = this._elemIsActive(t),
            i = this._getOuterElement(t);

        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = r(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "#".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);

        if (!i.classList.contains("dropdown")) return;

        var s = function s(t, _s10) {
          var n = Y.findOne(t, i);
          n && n.classList.toggle(_s10, e);
        };

        s(".dropdown-toggle", Ke), s(".dropdown-menu", Xe), s(".dropdown-item", Ke), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Ke);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(Ue) ? t : Y.findOne(Ue, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ge.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Ge;
  }(R);

  $.on(document, "click.bs.tab", Ye, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || Ge.getOrCreateInstance(this).show();
  }), $.on(window, "load.bs.tab", function () {
    var _iterator32 = _createForOfIteratorHelper(Y.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var _t30 = _step32.value;
        Ge.getOrCreateInstance(_t30);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
  }), b(Ge);
  var Je = "hide",
      Ze = "show",
      ti = "showing",
      ei = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ii = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var si = /*#__PURE__*/function (_R11) {
    _inherits(si, _R11);

    var _super17 = _createSuper(si);

    function si(t, e) {
      var _this55;

      _classCallCheck(this, si);

      _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }

    _createClass(si, [{
      key: "show",
      value: function show() {
        var _this56 = this;

        $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Je), g(this._element), this._element.classList.add(Ze, ti), this._queueCallback(function () {
          _this56._element.classList.remove(ti), $.trigger(_this56._element, "shown.bs.toast"), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;

        this.isShown() && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ti), this._queueCallback(function () {
          _this57._element.classList.add(Je), _this57._element.classList.remove(ti, Ze), $.trigger(_this57._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(Ze), _get(_getPrototypeOf(si.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(Ze);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;

        $.on(this._element, "mouseover.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), $.on(this._element, "mouseout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        }), $.on(this._element, "focusin.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), $.on(this._element, "focusout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "Default",
      get: function get() {
        return ii;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ei;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = si.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return si;
  }(R);

  return V(si), b(si), {
    Alert: K,
    Button: X,
    Carousel: ct,
    Collapse: pt,
    Dropdown: xt,
    Modal: se,
    Offcanvas: ue,
    Popover: Me,
    ScrollSpy: qe,
    Tab: Ge,
    Toast: si,
    Tooltip: Ne
  };
});
},{"@popperjs/core":"vePw"}]},{},["ZydM"], null)