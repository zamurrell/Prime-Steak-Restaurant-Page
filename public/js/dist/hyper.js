(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        hyper: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/hyper/index.js", "vendors~hyper" ]);
    return checkDeferredModules();
})({
    "./assets/js/hyper/actions/actions.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return actions; });\nconst actions = {\n  up,\n  intro,\n  showMenu\n};\n\nfunction up(state, actions) {\n  return {\n    count: state.count + 1\n  };\n}\n\nfunction showMenu() {}\n\nfunction intro(state, actions) {\n  console.log('Just ran my first action');\n  return {\n    count: state.count + 1\n  };\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/actions/actions.js?");
    },
    "./assets/js/hyper/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.js */ "./assets/js/hyper/components/Header.js");\n/* harmony import */ var _TopImg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopImg.js */ "./assets/js/hyper/components/TopImg.js");\n/* harmony import */ var _OurStory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OurStory.js */ "./assets/js/hyper/components/OurStory.js");\n/* harmony import */ var _SpecialMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpecialMenu.js */ "./assets/js/hyper/components/SpecialMenu.js");\n/* harmony import */ var _RandomQuote_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RandomQuote.js */ "./assets/js/hyper/components/RandomQuote.js");\n/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.js */ "./assets/js/hyper/components/Footer.js");\n\n\n\n\n\n\n\nfunction App(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": \'app\'\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Header_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_TopImg_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_OurStory_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_SpecialMenu_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_RandomQuote_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Footer_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/App.js?');
    },
    "./assets/js/hyper/components/Footer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Footer(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("footer", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("nav", {\n    "class": "menu"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Our Story"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Special Menu"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Reservations")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "social-media"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "footer-icon fab fa-twitter"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "footer-icon fab fa-facebook-f"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "footer-icon fab fa-instagram"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "footer-icon fas fa-envelope"\n  })), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "copyright"\n  }, "\\xA9 Copyright 2019")));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Footer.js?');
    },
    "./assets/js/hyper/components/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Header(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("header", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "logo"\n  }, "Logo"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("nav", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Our Story"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Special Menu"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Reservations"))));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Header.js?');
    },
    "./assets/js/hyper/components/OurStory.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurStory; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction OurStory(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    "class": "OurStory"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "row"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-6"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", {\n    "class": "comp-title"\n  }, "Our Story"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", {\n    "class": ""\n  }, "Cooking Is The Art Of Adjustment"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui."), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "quote"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, "Thomas Eggsy"), " - Head chef at a restaurant"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#",\n    "class": "res-btn"\n  }, "Reservations")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-6"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "video-img"\n  })))));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/OurStory.js?');
    },
    "./assets/js/hyper/components/RandomQuote.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomQuote; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction RandomQuote(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    "class": "RandomQuote"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, "\\"The only time to eat diet food is when you\'re waiting for the steak to cook.\\"")));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/RandomQuote.js?');
    },
    "./assets/js/hyper/components/SpecialMenu.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialMenu; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction SpecialMenu(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    "class": "SpecialMenu"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", {\n    "class": "comp-title"\n  }, "Special Menu"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, " Delicious Flavor of Fall"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "row boxes"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-4"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "box"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "box-img"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "price-circle"\n  }, "$25")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", {\n    "class": "title"\n  }, "Super BBQ Grill No Smoke"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n    "class": "details"\n  }, "Fried eggs, Steak, baked potato or french fries, side of vegetables or sourdough toast"))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-4"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "box"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "box-img"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "price-circle"\n  }, "$25")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", {\n    "class": "title"\n  }, "Super BBQ Grill No Smoke"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n    "class": "details"\n  }, "Fried eggs, Steak, baked potato or french fries, side of vegetables or sourdough toast"))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-4"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "box"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "box-img"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "price-circle"\n  }, "$25")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", {\n    "class": "title"\n  }, "Super BBQ Grill No Smoke"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n    "class": "details"\n  }, "Fried eggs, Steak, baked potato or french fries, side of vegetables or sourdough toast")))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    "class": "link",\n    href: "#"\n  }, "View Full Menu")));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/SpecialMenu.js?');
    },
    "./assets/js/hyper/components/TopImg.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopImg; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction TopImg(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    "class": "TopImg"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", null, "Welcome"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, "Prime Steak ", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("br", null), "Restaurant")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "contact-info"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "booking"\n  }, "Book Table Directly"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, "(712) 219 - 8652"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "hours"\n  }, "Opening Hours ", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, " Mon - Fri: 9am - 9pm "), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, " Weekend: 9pm - 11pm "))))));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/TopImg.js?');
    },
    "./assets/js/hyper/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n/* harmony import */ var _actions_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/actions.js */ "./assets/js/hyper/actions/actions.js");\n/* harmony import */ var _state_globalState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/globalState.js */ "./assets/js/hyper/state/globalState.js");\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App.js */ "./assets/js/hyper/components/App.js");\n\n\n\n\nObject(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"])({\n  state: {\n    globalState: _state_globalState_js__WEBPACK_IMPORTED_MODULE_2__[/* globalState */ "a"]\n  },\n  view: (state, actions) => Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_components_App_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }),\n  root: document.getElementById(\'app\'),\n  actions: _actions_actions_js__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"],\n  events: {\n    action(state, actions, _ref) {\n      let {\n        name,\n        data\n      } = _ref;\n      console.group(\'Action Info\');\n      console.log(\'Name:\', name);\n      console.log(\'Data:\', data);\n      console.groupEnd();\n    },\n\n    load(state, actions) {\n      actions.intro();\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/hyper/index.js?');
    },
    "./assets/js/hyper/state/globalState.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalState; });\nconst globalState = {\n  count: 0\n};\n\n//# sourceURL=webpack:///./assets/js/hyper/state/globalState.js?');
    }
});