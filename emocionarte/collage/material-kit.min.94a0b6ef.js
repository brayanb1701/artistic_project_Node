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
})({"btJY":[function(require,module,exports) {
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),
    popoverList = popoverTriggerList.map(function (e) {
  return new bootstrap.Popover(e);
}),
    tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),
    tooltipList = tooltipTriggerList.map(function (e) {
  return new bootstrap.Tooltip(e);
});

function setAttributes(t, o) {
  Object.keys(o).forEach(function (e) {
    t.setAttribute(e, o[e]);
  });
}

var popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))).map(function (e) {
  return new bootstrap.Popover(e);
}),
    tooltipList = (tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))).map(function (e) {
  return new bootstrap.Tooltip(e);
}),
    total = document.querySelectorAll(".nav-pills");

function getEventTarget(e) {
  return (e = e || window.event).target || e.srcElement;
}

function copyCode(e) {
  var t = window.getSelection(),
      o = document.createRange();
  var l,
      n = e.nextElementSibling;
  o.selectNodeContents(n), t.removeAllRanges(), t.addRange(o), document.execCommand("copy");
  window.getSelection().removeAllRanges(), e.parentElement.querySelector(".alert") || ((l = document.createElement("div")).classList.add("alert", "alert-success", "position-absolute", "top-0", "border-0", "text-white", "w-25", "end-0", "start-0", "mt-2", "mx-auto", "py-2"), l.style.transform = "translate3d(0px, 0px, 0px)", l.style.opacity = "0", l.style.transition = ".35s ease", setTimeout(function () {
    l.style.transform = "translate3d(0px, 20px, 0px)", l.style.setProperty("opacity", "1", "important");
  }, 100), l.innerHTML = "Code successfully copied!", e.parentElement.appendChild(l), setTimeout(function () {
    l.style.transform = "translate3d(0px, 0px, 0px)", l.style.setProperty("opacity", "0", "important");
  }, 2e3), setTimeout(function () {
    e.parentElement.querySelector(".alert").remove();
  }, 2500));
}

function debounce(o, l, n) {
  var i;
  return function () {
    var e = this,
        t = arguments;
    clearTimeout(i), i = setTimeout(function () {
      i = null, n || o.apply(e, t);
    }, l), n && !i && o.apply(e, t);
  };
}

total.forEach(function (i, e) {
  var r = document.createElement("div"),
      t = i.querySelector("li:first-child .nav-link").cloneNode();
  t.innerHTML = "-", r.classList.add("moving-tab", "position-absolute", "nav-link"), r.appendChild(t), i.appendChild(r), i.getElementsByTagName("li").length;
  r.style.padding = "0px", r.style.width = i.querySelector("li:nth-child(1)").offsetWidth + "px", r.style.transform = "translate3d(0px, 0px, 0px)", r.style.transition = ".5s ease", i.onmouseover = function (e) {
    var t = getEventTarget(e),
        n = t.closest("li");

    if (n) {
      var o = Array.from(n.closest("ul").children),
          l = o.indexOf(n) + 1;

      i.querySelector("li:nth-child(" + l + ") .nav-link").onclick = function () {
        r = i.querySelector(".moving-tab");
        var e = 0;

        if (i.classList.contains("flex-column")) {
          for (var t = 1; t <= o.indexOf(n); t++) {
            e += i.querySelector("li:nth-child(" + t + ")").offsetHeight;
          }

          r.style.transform = "translate3d(0px," + e + "px, 0px)", r.style.height = i.querySelector("li:nth-child(" + t + ")").offsetHeight;
        } else {
          for (t = 1; t <= o.indexOf(n); t++) {
            e += i.querySelector("li:nth-child(" + t + ")").offsetWidth;
          }

          r.style.transform = "translate3d(" + e + "px, 0px, 0px)", r.style.width = i.querySelector("li:nth-child(" + l + ")").offsetWidth + "px";
        }
      };
    }
  };
}), window.addEventListener("resize", function (e) {
  total.forEach(function (o, e) {
    o.querySelector(".moving-tab").remove();
    var l = document.createElement("div"),
        n = o.querySelector(".nav-link.active").cloneNode();
    n.innerHTML = "-", l.classList.add("moving-tab", "position-absolute", "nav-link"), l.appendChild(n), o.appendChild(l), l.style.padding = "0px", l.style.transition = ".5s ease";
    var i = o.querySelector(".nav-link.active").parentElement;

    if (i) {
      var _e = Array.from(i.closest("ul").children);

      n = _e.indexOf(i) + 1;
      var t = 0;

      if (o.classList.contains("flex-column")) {
        for (var r = 1; r <= _e.indexOf(i); r++) {
          t += o.querySelector("li:nth-child(" + r + ")").offsetHeight;
        }

        l.style.transform = "translate3d(0px," + t + "px, 0px)", l.style.width = o.querySelector("li:nth-child(" + n + ")").offsetWidth + "px", l.style.height = o.querySelector("li:nth-child(" + r + ")").offsetHeight;
      } else {
        for (r = 1; r <= _e.indexOf(i); r++) {
          t += o.querySelector("li:nth-child(" + r + ")").offsetWidth;
        }

        l.style.transform = "translate3d(" + t + "px, 0px, 0px)", l.style.width = o.querySelector("li:nth-child(" + n + ")").offsetWidth + "px";
      }
    }
  }), window.innerWidth < 991 ? total.forEach(function (e, t) {
    e.classList.contains("flex-column") || e.classList.add("flex-column", "on-resize");
  }) : total.forEach(function (e, t) {
    e.classList.contains("on-resize") && e.classList.remove("flex-column", "on-resize");
  });
}), window.onload = function () {
  for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++) {
    e[t].addEventListener("focus", function (e) {
      this.parentElement.classList.add("is-focused");
    }, !1), e[t].onkeyup = function (e) {
      "" != this.value ? this.parentElement.classList.add("is-filled") : this.parentElement.classList.remove("is-filled");
    }, e[t].addEventListener("focusout", function (e) {
      "" != this.value && this.parentElement.classList.add("is-filled"), this.parentElement.classList.remove("is-focused");
    }, !1);
  }

  for (var o = document.querySelectorAll(".btn"), t = 0; t < o.length; t++) {
    o[t].addEventListener("click", function (e) {
      var t = e.target,
          o = t.querySelector(".ripple");
      (o = document.createElement("span")).classList.add("ripple"), o.style.width = o.style.height = Math.max(t.offsetWidth, t.offsetHeight) + "px", t.appendChild(o), o.style.left = e.offsetX - o.offsetWidth / 2 + "px", o.style.top = e.offsetY - o.offsetHeight / 2 + "px", o.classList.add("ripple"), setTimeout(function () {
        o.parentElement.removeChild(o);
      }, 600);
    }, !1);
  }
};
},{}]},{},["btJY"], null)