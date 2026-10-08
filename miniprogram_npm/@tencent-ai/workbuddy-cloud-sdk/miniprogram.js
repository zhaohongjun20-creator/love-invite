var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/fails.js
var require_fails = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/fails.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = (function() {
      }).bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/classof-raw.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/indexed-object.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/add-to-unscopables.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = function() {
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterators.js
var require_iterators = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterators.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = {};
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/global-this.js
var require_global_this = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/global-this.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var check = /* @__PURE__ */ __name(function(it) {
      return it && it.Math === Math && it;
    }, "check");
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-callable.js
var require_is_callable = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-callable.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-object.js
var require_is_object = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-object.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/descriptors.js
var require_descriptors = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/descriptors.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: /* @__PURE__ */ __name(function() {
          return 7;
        }, "get")
      })[1] !== 7;
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/document-create-element.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: /* @__PURE__ */ __name(function() {
          return 7;
        }, "get")
      }).a !== 7;
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/an-object.js
var require_an_object = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/an-object.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-call.js
var require_function_call = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-call.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/path.js
var require_path = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/path.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = {};
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-built-in.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var path = require_path();
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = /* @__PURE__ */ __name(function(variable) {
      return isCallable(variable) ? variable : void 0;
    }, "aFunction");
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis2[namespace]) : path[namespace] && path[namespace][method] || globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/environment-v8-version.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version2;
    if (v8) {
      match = v8.split(".");
      version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version2 && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version2 = +match[1];
      }
    }
    module2.exports = version2;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = /* @__PURE__ */ Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-symbol.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/try-to-string.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/a-callable.js
var require_a_callable = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/a-callable.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-method.js
var require_get_method = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-method.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-pure.js
var require_is_pure = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-pure.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = true;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-global-property.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, {
          value,
          configurable: true,
          writable: true
        });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared-store.js
var require_shared_store = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared-store.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.49.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared.js
var require_shared = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-object.js
var require_to_object = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-object.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/has-own-property.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || /* @__PURE__ */ __name(function hasOwn2(it, key) {
      return hasOwnProperty(toObject(it), key);
    }, "hasOwn");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/uid.js
var require_uid = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/uid.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1.1.toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn2 = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn2(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn2(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-primitive.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-property-key.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-define-property.js"(exports) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? /* @__PURE__ */ __name(function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    }, "defineProperty") : $defineProperty : /* @__PURE__ */ __name(function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    }, "defineProperty");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared-key.js
var require_shared_key = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared-key.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = {};
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/internal-state.js
var require_internal_state = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/internal-state.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn2 = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
    var set;
    var get2;
    var has;
    var enforce = /* @__PURE__ */ __name(function(it) {
      return has(it) ? get2(it) : set(it, {});
    }, "enforce");
    var getterFor = /* @__PURE__ */ __name(function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get2(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    }, "getterFor");
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = /* @__PURE__ */ __name(function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      }, "set");
      get2 = /* @__PURE__ */ __name(function(it) {
        return store.get(it) || {};
      }, "get");
      has = /* @__PURE__ */ __name(function(it) {
        return store.has(it);
      }, "has");
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = /* @__PURE__ */ __name(function(it, metadata) {
        if (hasOwn2(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      }, "set");
      get2 = /* @__PURE__ */ __name(function(it) {
        return hasOwn2(it, STATE) ? it[STATE] : {};
      }, "get");
      has = /* @__PURE__ */ __name(function(it) {
        return hasOwn2(it, STATE);
      }, "has");
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get: get2,
      has,
      enforce,
      getterFor
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-apply.js
var require_function_apply = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-apply.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    module2.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function") return uncurryThis(fn);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    init_miniprogram_url();
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports.f = NASHORN_BUG ? /* @__PURE__ */ __name(function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    }, "propertyIsEnumerable") : $propertyIsEnumerable;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn2 = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : /* @__PURE__ */ __name(function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn2(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    }, "getOwnPropertyDescriptor");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-forced.js
var require_is_forced = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-forced.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = /* @__PURE__ */ __name(function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    }, "isForced");
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-bind-context.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/export.js
var require_export = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/export.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var apply = require_function_apply();
    var uncurryThis = require_function_uncurry_this_clause();
    var isCallable = require_is_callable();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var isForced = require_is_forced();
    var path = require_path();
    var bind = require_function_bind_context();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn2 = require_has_own_property();
    require_shared_store();
    var wrapConstructor = /* @__PURE__ */ __name(function(NativeConstructor) {
      var Wrapper = /* @__PURE__ */ __name(function(a, b, c) {
        if (this instanceof Wrapper) {
          switch (arguments.length) {
            case 0:
              return new NativeConstructor();
            case 1:
              return new NativeConstructor(a);
            case 2:
              return new NativeConstructor(a, b);
          }
          return new NativeConstructor(a, b, c);
        }
        return apply(NativeConstructor, this, arguments);
      }, "Wrapper");
      Wrapper.prototype = NativeConstructor.prototype;
      return Wrapper;
    }, "wrapConstructor");
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var PROTO = options.proto;
      var nativeSource = GLOBAL ? globalThis2 : STATIC ? globalThis2[TARGET] : globalThis2[TARGET] && globalThis2[TARGET].prototype;
      var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
      var targetPrototype = target.prototype;
      var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
      var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
      for (key in source) {
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        USE_NATIVE = !FORCED && nativeSource && hasOwn2(nativeSource, key);
        targetProperty = target[key];
        if (USE_NATIVE) if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(nativeSource, key);
          nativeProperty = descriptor && descriptor.value;
        } else nativeProperty = nativeSource[key];
        sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
        if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
        if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis2);
        else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
        else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
        else resultProperty = sourceProperty;
        if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(resultProperty, "sham", true);
        }
        createNonEnumerableProperty(target, key, resultProperty);
        if (PROTO) {
          VIRTUAL_PROTOTYPE = TARGET + "Prototype";
          if (!hasOwn2(path, VIRTUAL_PROTOTYPE)) {
            createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
          }
          createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
          if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
            createNonEnumerableProperty(targetPrototype, key, sourceProperty);
          }
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-name.js
var require_function_name = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-name.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var hasOwn2 = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn2(FunctionPrototype, "name");
    var PROPER = EXISTS && (/* @__PURE__ */ __name((function something() {
    }), "something")).name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/math-trunc.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || /* @__PURE__ */ __name(function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    }, "trunc");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-absolute-index.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-length.js
var require_to_length = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-length.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-includes.js
var require_array_includes = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-includes.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = /* @__PURE__ */ __name(function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    }, "createMethod");
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-keys-internal.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var hasOwn2 = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn2(hiddenKeys, key) && hasOwn2(O, key) && push(result, key);
      while (names.length > i) if (hasOwn2(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/enum-bug-keys.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-keys.js
var require_object_keys = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-keys.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || /* @__PURE__ */ __name(function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    }, "keys");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-define-properties.js"(exports) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : /* @__PURE__ */ __name(function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    }, "defineProperties");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/html.js
var require_html = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/html.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-create.js
var require_object_create = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-create.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = /* @__PURE__ */ __name(function() {
    }, "EmptyConstructor");
    var scriptTag = /* @__PURE__ */ __name(function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    }, "scriptTag");
    var NullProtoObjectViaActiveX = /* @__PURE__ */ __name(function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    }, "NullProtoObjectViaActiveX");
    var NullProtoObjectViaIFrame = /* @__PURE__ */ __name(function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    }, "NullProtoObjectViaIFrame");
    var activeXDocument;
    var NullProtoObject = /* @__PURE__ */ __name(function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    }, "NullProtoObject");
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || /* @__PURE__ */ __name(function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    }, "create");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/correct-prototype-getter.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var fails = require_fails();
    module2.exports = !fails(function() {
      function F() {
      }
      __name(F, "F");
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-get-prototype-of.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var hasOwn2 = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module2.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject(O);
      if (hasOwn2(object, IE_PROTO)) return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-built-in.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    module2.exports = function(target, key, value, options) {
      if (options && options.enumerable) target[key] = value;
      else createNonEnumerableProperty(target, key, value);
      return target;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterators-core.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module2.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/classof.js
var require_classof = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/classof.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
      return arguments;
    })()) === "Arguments";
    var tryGet = /* @__PURE__ */ __name(function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    }, "tryGet");
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-to-string.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var classof = require_classof();
    module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : /* @__PURE__ */ __name(function toString() {
      return "[object " + classof(this) + "]";
    }, "toString");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/set-to-string-tag.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var defineProperty = require_object_define_property().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn2 = require_has_own_property();
    var toString = require_object_to_string();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module2.exports = function(it, TAG, STATIC, SET_METHOD) {
      var target = STATIC ? it : it && it.prototype;
      if (target) {
        if (!hasOwn2(target, TO_STRING_TAG)) {
          defineProperty(target, TO_STRING_TAG, {
            configurable: true,
            value: TAG
          });
        }
        if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
          createNonEnumerableProperty(target, "toString", toString);
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterator-create-constructor.js
var require_iterator_create_constructor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterator-create-constructor.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = /* @__PURE__ */ __name(function() {
      return this;
    }, "returnThis");
    module2.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME + " Iterator";
      IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
      });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this-accessor.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    module2.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-possible-prototype.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var isObject = require_is_object();
    module2.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/a-possible-prototype.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var isPossiblePrototype = require_is_possible_prototype();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isPossiblePrototype(argument)) return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-set-prototype-of.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var isObject = require_is_object();
    var requireObjectCoercible = require_require_object_coercible();
    var aPossiblePrototype = require_a_possible_prototype();
    module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return /* @__PURE__ */ __name(function setPrototypeOf(O, proto) {
        requireObjectCoercible(O);
        aPossiblePrototype(proto);
        if (!isObject(O)) return O;
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
      }, "setPrototypeOf");
    })() : void 0);
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterator-define.js
var require_iterator_define = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterator-define.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var $ = require_export();
    var call = require_function_call();
    var IS_PURE = require_is_pure();
    var FunctionName = require_function_name();
    var isCallable = require_is_callable();
    var createIteratorConstructor = require_iterator_create_constructor();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var IteratorsCore = require_iterators_core();
    var PROPER_FUNCTION_NAME = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol("iterator");
    var KEYS = "keys";
    var VALUES = "values";
    var ENTRIES = "entries";
    var returnThis = /* @__PURE__ */ __name(function() {
      return this;
    }, "returnThis");
    module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);
      var getIterationMethod = /* @__PURE__ */ __name(function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return /* @__PURE__ */ __name(function keys() {
              return new IteratorConstructor(this, KIND);
            }, "keys");
          case VALUES:
            return /* @__PURE__ */ __name(function values() {
              return new IteratorConstructor(this, KIND);
            }, "values");
          case ENTRIES:
            return /* @__PURE__ */ __name(function entries() {
              return new IteratorConstructor(this, KIND);
            }, "entries");
        }
        return function() {
          return new IteratorConstructor(this);
        };
      }, "getIterationMethod");
      var TO_STRING_TAG = NAME + " Iterator";
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          }
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
      }
      if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = /* @__PURE__ */ __name(function values() {
            return call(nativeIterator, this);
          }, "values");
        }
      }
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
          }
        }
        else $({
          target: NAME,
          proto: true,
          forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
      }
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
          name: DEFAULT
        });
      }
      Iterators[NAME] = defaultIterator;
      return methods;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-iter-result-object.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = function(value, done) {
      return {
        value,
        done
      };
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.array.iterator.js
var require_es_array_iterator = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.array.iterator.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var toIndexedObject = require_to_indexed_object();
    var addToUnscopables = require_add_to_unscopables();
    var Iterators = require_iterators();
    var InternalStateModule = require_internal_state();
    var defineProperty = require_object_define_property().f;
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS = require_descriptors();
    var ARRAY_ITERATOR = "Array Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
    module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind
        // kind
      });
    }, function() {
      var state = getInternalState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = null;
        return createIterResultObject(void 0, true);
      }
      switch (state.kind) {
        case "keys":
          return createIterResultObject(index, false);
        case "values":
          return createIterResultObject(target[index], false);
      }
      return createIterResultObject([
        index,
        target[index]
      ], false);
    }, "values");
    var values = Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
    if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
      defineProperty(values, "name", {
        value: "values"
      });
    } catch (error) {
    }
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.string.from-code-point.js
var require_es_string_from_code_point = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.string.from-code-point.js"() {
    "use strict";
    init_miniprogram_url();
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var toAbsoluteIndex = require_to_absolute_index();
    var $RangeError = RangeError;
    var fromCharCode = String.fromCharCode;
    var $fromCodePoint = String.fromCodePoint;
    var join = uncurryThis([].join);
    var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;
    $({
      target: "String",
      stat: true,
      arity: 1,
      forced: INCORRECT_LENGTH
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fromCodePoint: /* @__PURE__ */ __name(function fromCodePoint(x) {
        var elements = [];
        var length = arguments.length;
        var i = 0;
        var code;
        while (length > i) {
          code = +arguments[i];
          if (toAbsoluteIndex(code, 1114111) !== code) throw new $RangeError(code + " is not a valid code point");
          elements[i++] = code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
        }
        return join(elements, "");
      }, "fromCodePoint")
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/safe-get-built-in.js
var require_safe_get_built_in = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/safe-get-built-in.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var globalThis2 = require_global_this();
    var DESCRIPTORS = require_descriptors();
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    module2.exports = function(name) {
      if (!DESCRIPTORS) return globalThis2[name];
      var descriptor = getOwnPropertyDescriptor(globalThis2, name);
      return descriptor && descriptor.value;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/url-constructor-detection.js
var require_url_constructor_detection = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/url-constructor-detection.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var fails = require_fails();
    var wellKnownSymbol = require_well_known_symbol();
    var DESCRIPTORS = require_descriptors();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = !fails(function() {
      var url = new import_url.default("b?a=1&b=2&c=3", "https://a");
      var params = url.searchParams;
      var params2 = new import_url_search_params.default("a=1&a=2&b=3");
      var result = "";
      url.pathname = "c%20d";
      params.forEach(function(value, key) {
        params["delete"]("b");
        result += key + value;
      });
      params2["delete"]("a", 2);
      params2["delete"]("b", void 0);
      return IS_PURE && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== "https://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new import_url_search_params.default("?a=1")) !== "a=1" || !params[ITERATOR] || new import_url.default("https://a@b").username !== "a" || new import_url_search_params.default(new import_url_search_params.default("a=b")).get("a") !== "b" || new import_url.default("https://\u0442\u0435\u0441\u0442").host !== "xn--e1aybc" || new import_url.default("https://a#\u0431").hash !== "#%D0%B1" || result !== "a1c3" || new import_url.default("https://x", void 0).host !== "x";
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-built-in-accessor.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-built-ins.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var defineBuiltIn = require_define_built_in();
    module2.exports = function(target, src, options) {
      for (var key in src) {
        if (options && options.unsafe && target[key]) target[key] = src[key];
        else defineBuiltIn(target, key, src[key], options);
      }
      return target;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/an-instance.js
var require_an_instance = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/an-instance.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-string.js
var require_to_string = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-string.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-iterator-method.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-iterator.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/validate-arguments-length.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-slice.js
var require_array_slice = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-slice.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis([].slice);
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-sort.js
var require_array_sort = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-sort.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var arraySlice = require_array_slice();
    var floor = Math.floor;
    var sort = /* @__PURE__ */ __name(function(array, comparefn) {
      var length = array.length;
      if (length < 8) {
        var i = 1;
        var element, j;
        while (i < length) {
          j = i;
          element = array[i];
          while (j && comparefn(array[j - 1], element) > 0) {
            array[j] = array[--j];
          }
          if (j !== i++) array[j] = element;
        }
      } else {
        var middle = floor(length / 2);
        var left = sort(arraySlice(array, 0, middle), comparefn);
        var right = sort(arraySlice(array, middle), comparefn);
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        while (lindex < llength || rindex < rlength) {
          array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
        }
      }
      return array;
    }, "sort");
    module2.exports = sort;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.constructor.js
var require_web_url_search_params_constructor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.constructor.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    require_es_array_iterator();
    require_es_string_from_code_point();
    var $ = require_export();
    var globalThis2 = require_global_this();
    var safeGetBuiltIn = require_safe_get_built_in();
    var getBuiltIn = require_get_built_in();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var DESCRIPTORS = require_descriptors();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var defineBuiltIn = require_define_built_in();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var defineBuiltIns = require_define_built_ins();
    var setToStringTag = require_set_to_string_tag();
    var createIteratorConstructor = require_iterator_create_constructor();
    var InternalStateModule = require_internal_state();
    var anInstance = require_an_instance();
    var isCallable = require_is_callable();
    var hasOwn2 = require_has_own_property();
    var bind = require_function_bind_context();
    var classof = require_classof();
    var anObject = require_an_object();
    var isObject = require_is_object();
    var $toString = require_to_string();
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var createIterResultObject = require_create_iter_result_object();
    var validateArgumentsLength = require_validate_arguments_length();
    var wellKnownSymbol = require_well_known_symbol();
    var arraySort = require_array_sort();
    var ITERATOR = wellKnownSymbol("iterator");
    var URL_SEARCH_PARAMS = "URLSearchParams";
    var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
    var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
    var nativeFetch = safeGetBuiltIn("fetch");
    var NativeRequest = safeGetBuiltIn("Request");
    var Headers2 = safeGetBuiltIn("Headers");
    var RequestPrototype = NativeRequest && NativeRequest.prototype;
    var HeadersPrototype = Headers2 && Headers2.prototype;
    var TypeError2 = globalThis2.TypeError;
    var encodeURIComponent2 = globalThis2.encodeURIComponent;
    var fromCharCode = String.fromCharCode;
    var fromCodePoint = getBuiltIn("String", "fromCodePoint");
    var $parseInt = parseInt;
    var charAt = uncurryThis("".charAt);
    var join = uncurryThis([].join);
    var push = uncurryThis([].push);
    var replace = uncurryThis("".replace);
    var shift = uncurryThis([].shift);
    var splice = uncurryThis([].splice);
    var split = uncurryThis("".split);
    var stringSlice = uncurryThis("".slice);
    var exec = uncurryThis(/./.exec);
    var plus = /\+/g;
    var FALLBACK_REPLACER = "\uFFFD";
    var VALID_HEX = /^[0-9a-f]+$/i;
    var parseHexOctet = /* @__PURE__ */ __name(function(string, start) {
      var substr = stringSlice(string, start, start + 2);
      if (!exec(VALID_HEX, substr)) return NaN;
      return $parseInt(substr, 16);
    }, "parseHexOctet");
    var getLeadingOnes = /* @__PURE__ */ __name(function(octet) {
      var count = 0;
      for (var mask = 128; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
        count++;
      }
      return count;
    }, "getLeadingOnes");
    var utf8Decode = /* @__PURE__ */ __name(function(octets) {
      var codePoint = null;
      var length = octets.length;
      switch (length) {
        case 1:
          codePoint = octets[0];
          break;
        case 2:
          codePoint = (octets[0] & 31) << 6 | octets[1] & 63;
          break;
        case 3:
          codePoint = (octets[0] & 15) << 12 | (octets[1] & 63) << 6 | octets[2] & 63;
          break;
        case 4:
          codePoint = (octets[0] & 7) << 18 | (octets[1] & 63) << 12 | (octets[2] & 63) << 6 | octets[3] & 63;
          break;
      }
      if (codePoint === null || codePoint > 1114111 || codePoint >= 55296 && codePoint <= 57343 || codePoint < (length > 3 ? 65536 : length > 2 ? 2048 : length > 1 ? 128 : 0)) return null;
      return codePoint;
    }, "utf8Decode");
    var decode = /* @__PURE__ */ __name(function(input) {
      input = replace(input, plus, " ");
      var length = input.length;
      var result = "";
      var i = 0;
      while (i < length) {
        var decodedChar = charAt(input, i);
        if (decodedChar === "%") {
          if (charAt(input, i + 1) === "%" || i + 3 > length) {
            result += "%";
            i++;
            continue;
          }
          var octet = parseHexOctet(input, i + 1);
          if (octet !== octet) {
            result += decodedChar;
            i++;
            continue;
          }
          i += 2;
          var byteSequenceLength = getLeadingOnes(octet);
          if (byteSequenceLength === 0) {
            decodedChar = fromCharCode(octet);
          } else {
            if (byteSequenceLength === 1 || byteSequenceLength > 4) {
              result += FALLBACK_REPLACER;
              i++;
              continue;
            }
            var octets = [
              octet
            ];
            var sequenceIndex = 1;
            while (sequenceIndex < byteSequenceLength) {
              i++;
              if (i + 3 > length || charAt(input, i) !== "%") break;
              var nextByte = parseHexOctet(input, i + 1);
              if (nextByte !== nextByte || nextByte > 191 || nextByte < 128) break;
              if (sequenceIndex === 1) {
                if (octet === 224 && nextByte < 160) break;
                if (octet === 237 && nextByte > 159) break;
                if (octet === 240 && nextByte < 144) break;
                if (octet === 244 && nextByte > 143) break;
              }
              push(octets, nextByte);
              i += 2;
              sequenceIndex++;
            }
            if (octets.length !== byteSequenceLength) {
              result += FALLBACK_REPLACER;
              continue;
            }
            var codePoint = utf8Decode(octets);
            if (codePoint === null) {
              for (var replacement = 0; replacement < byteSequenceLength; replacement++) result += FALLBACK_REPLACER;
              i++;
              continue;
            } else {
              decodedChar = fromCodePoint(codePoint);
            }
          }
        }
        result += decodedChar;
        i++;
      }
      return result;
    }, "decode");
    var find = /[!'()~]|%20/g;
    var replacements = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    };
    var replacer = /* @__PURE__ */ __name(function(match) {
      return replacements[match];
    }, "replacer");
    var serialize = /* @__PURE__ */ __name(function(it) {
      return replace(encodeURIComponent2(it), find, replacer);
    }, "serialize");
    var URLSearchParamsIterator = createIteratorConstructor(/* @__PURE__ */ __name(function Iterator(params, kind) {
      setInternalState(this, {
        type: URL_SEARCH_PARAMS_ITERATOR,
        target: getInternalParamsState(params).entries,
        index: 0,
        kind
      });
    }, "Iterator"), URL_SEARCH_PARAMS, /* @__PURE__ */ __name(function next() {
      var state = getInternalIteratorState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = null;
        return createIterResultObject(void 0, true);
      }
      var entry = target[index];
      switch (state.kind) {
        case "keys":
          return createIterResultObject(entry.key, false);
        case "values":
          return createIterResultObject(entry.value, false);
      }
      return createIterResultObject([
        entry.key,
        entry.value
      ], false);
    }, "next"), true);
    var URLSearchParamsState = /* @__PURE__ */ __name(function(init) {
      this.entries = [];
      this.url = null;
      if (init !== void 0) {
        if (isObject(init)) this.parseObject(init);
        else this.parseQuery(typeof init == "string" ? charAt(init, 0) === "?" ? stringSlice(init, 1) : init : $toString(init));
      }
    }, "URLSearchParamsState");
    URLSearchParamsState.prototype = {
      type: URL_SEARCH_PARAMS,
      bindURL: /* @__PURE__ */ __name(function(url) {
        this.url = url;
        this.update();
      }, "bindURL"),
      parseObject: /* @__PURE__ */ __name(function(object) {
        var entries = this.entries;
        var iteratorMethod = getIteratorMethod(object);
        var iterator, next, step, entryIterator, entryNext, first, second;
        if (iteratorMethod) {
          iterator = getIterator(object, iteratorMethod);
          next = iterator.next;
          while (!(step = call(next, iterator)).done) {
            entryIterator = getIterator(anObject(step.value));
            entryNext = entryIterator.next;
            if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done) throw new TypeError2("Expected sequence with length 2");
            push(entries, {
              key: $toString(first.value),
              value: $toString(second.value)
            });
          }
        } else for (var key in object) if (hasOwn2(object, key)) {
          push(entries, {
            key,
            value: $toString(object[key])
          });
        }
      }, "parseObject"),
      parseQuery: /* @__PURE__ */ __name(function(query) {
        if (query) {
          var entries = this.entries;
          var attributes = split(query, "&");
          var index = 0;
          var attribute, entry;
          while (index < attributes.length) {
            attribute = attributes[index++];
            if (attribute.length) {
              entry = split(attribute, "=");
              push(entries, {
                key: decode(shift(entry)),
                value: decode(join(entry, "="))
              });
            }
          }
        }
      }, "parseQuery"),
      serialize: /* @__PURE__ */ __name(function() {
        var entries = this.entries;
        var result = [];
        var index = 0;
        var entry;
        while (index < entries.length) {
          entry = entries[index++];
          push(result, serialize(entry.key) + "=" + serialize(entry.value));
        }
        return join(result, "&");
      }, "serialize"),
      update: /* @__PURE__ */ __name(function() {
        this.entries.length = 0;
        this.parseQuery(this.url.query);
      }, "update"),
      updateURL: /* @__PURE__ */ __name(function() {
        if (this.url) this.url.update();
      }, "updateURL")
    };
    var URLSearchParamsConstructor = /* @__PURE__ */ __name(function URLSearchParams() {
      anInstance(this, URLSearchParamsPrototype);
      var init = arguments.length > 0 ? arguments[0] : void 0;
      var state = setInternalState(this, new URLSearchParamsState(init));
      if (!DESCRIPTORS) this.size = state.entries.length;
    }, "URLSearchParams");
    var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
    defineBuiltIns(URLSearchParamsPrototype, {
      // `URLSearchParams.prototype.append` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-append
      append: /* @__PURE__ */ __name(function append(name, value) {
        var state = getInternalParamsState(this);
        validateArgumentsLength(arguments.length, 2);
        push(state.entries, {
          key: $toString(name),
          value: $toString(value)
        });
        if (!DESCRIPTORS) this.size++;
        state.updateURL();
      }, "append"),
      // `URLSearchParams.prototype.delete` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
      "delete": /* @__PURE__ */ __name(function(name) {
        var state = getInternalParamsState(this);
        var length = validateArgumentsLength(arguments.length, 1);
        var entries = state.entries;
        var key = $toString(name);
        var $value = length < 2 ? void 0 : arguments[1];
        var value = $value === void 0 ? $value : $toString($value);
        var index = 0;
        while (index < entries.length) {
          var entry = entries[index];
          if (entry.key === key && (value === void 0 || entry.value === value)) {
            splice(entries, index, 1);
          } else index++;
        }
        if (!DESCRIPTORS) this.size = entries.length;
        state.updateURL();
      }, "delete"),
      // `URLSearchParams.prototype.get` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-get
      get: /* @__PURE__ */ __name(function get2(name) {
        var entries = getInternalParamsState(this).entries;
        validateArgumentsLength(arguments.length, 1);
        var key = $toString(name);
        var index = 0;
        for (; index < entries.length; index++) {
          if (entries[index].key === key) return entries[index].value;
        }
        return null;
      }, "get"),
      // `URLSearchParams.prototype.getAll` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
      getAll: /* @__PURE__ */ __name(function getAll(name) {
        var entries = getInternalParamsState(this).entries;
        validateArgumentsLength(arguments.length, 1);
        var key = $toString(name);
        var result = [];
        var index = 0;
        for (; index < entries.length; index++) {
          if (entries[index].key === key) push(result, entries[index].value);
        }
        return result;
      }, "getAll"),
      // `URLSearchParams.prototype.has` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-has
      has: /* @__PURE__ */ __name(function has(name) {
        var entries = getInternalParamsState(this).entries;
        var length = validateArgumentsLength(arguments.length, 1);
        var key = $toString(name);
        var $value = length < 2 ? void 0 : arguments[1];
        var value = $value === void 0 ? $value : $toString($value);
        var index = 0;
        while (index < entries.length) {
          var entry = entries[index++];
          if (entry.key === key && (value === void 0 || entry.value === value)) return true;
        }
        return false;
      }, "has"),
      // `URLSearchParams.prototype.set` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-set
      set: /* @__PURE__ */ __name(function set(name, value) {
        var state = getInternalParamsState(this);
        validateArgumentsLength(arguments.length, 2);
        var entries = state.entries;
        var found = false;
        var key = $toString(name);
        var val = $toString(value);
        var index = 0;
        var entry;
        for (; index < entries.length; index++) {
          entry = entries[index];
          if (entry.key === key) {
            if (found) splice(entries, index--, 1);
            else {
              found = true;
              entry.value = val;
            }
          }
        }
        if (!found) push(entries, {
          key,
          value: val
        });
        if (!DESCRIPTORS) this.size = entries.length;
        state.updateURL();
      }, "set"),
      // `URLSearchParams.prototype.sort` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
      sort: /* @__PURE__ */ __name(function sort() {
        var state = getInternalParamsState(this);
        arraySort(state.entries, function(a, b) {
          return a.key > b.key ? 1 : -1;
        });
        state.updateURL();
      }, "sort"),
      // `URLSearchParams.prototype.forEach` method
      forEach: /* @__PURE__ */ __name(function forEach(callback) {
        var entries = getInternalParamsState(this).entries;
        var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : void 0);
        var index = 0;
        var entry;
        while (index < entries.length) {
          entry = entries[index++];
          boundFunction(entry.value, entry.key, this);
        }
      }, "forEach"),
      // `URLSearchParams.prototype.keys` method
      keys: /* @__PURE__ */ __name(function keys() {
        return new URLSearchParamsIterator(this, "keys");
      }, "keys"),
      // `URLSearchParams.prototype.values` method
      values: /* @__PURE__ */ __name(function values() {
        return new URLSearchParamsIterator(this, "values");
      }, "values"),
      // `URLSearchParams.prototype.entries` method
      entries: /* @__PURE__ */ __name(function entries() {
        return new URLSearchParamsIterator(this, "entries");
      }, "entries")
    }, {
      enumerable: true
    });
    defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
      name: "entries"
    });
    defineBuiltIn(URLSearchParamsPrototype, "toString", /* @__PURE__ */ __name(function toString() {
      return getInternalParamsState(this).serialize();
    }, "toString"), {
      enumerable: true
    });
    if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
      get: /* @__PURE__ */ __name(function size() {
        return getInternalParamsState(this).entries.length;
      }, "size"),
      configurable: true,
      enumerable: true
    });
    setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    $({
      global: true,
      constructor: true,
      forced: !USE_NATIVE_URL
    }, {
      URLSearchParams: URLSearchParamsConstructor
    });
    if (!USE_NATIVE_URL && isCallable(Headers2)) {
      headersHas = uncurryThis(HeadersPrototype.has);
      headersSet = uncurryThis(HeadersPrototype.set);
      wrapRequestOptions = /* @__PURE__ */ __name(function(init) {
        if (isObject(init)) {
          var body = init.body;
          var headers;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers2(init.headers) : new Headers2();
            if (!headersHas(headers, "content-type")) {
              headersSet(headers, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
            return create(init, {
              body: createPropertyDescriptor(0, $toString(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        return init;
      }, "wrapRequestOptions");
      if (isCallable(nativeFetch)) {
        $({
          global: true,
          enumerable: true,
          dontCallGetSet: true,
          forced: true
        }, {
          fetch: /* @__PURE__ */ __name(function fetch2(input) {
            return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
          }, "fetch")
        });
      }
      if (isCallable(NativeRequest)) {
        RequestConstructor = /* @__PURE__ */ __name(function Request(input) {
          anInstance(this, RequestPrototype);
          return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }, "Request");
        RequestPrototype.constructor = RequestConstructor;
        RequestConstructor.prototype = RequestPrototype;
        $({
          global: true,
          constructor: true,
          dontCallGetSet: true,
          forced: true
        }, {
          Request: RequestConstructor
        });
      }
    }
    var headersHas;
    var headersSet;
    var wrapRequestOptions;
    var RequestConstructor;
    module2.exports = {
      URLSearchParams: URLSearchParamsConstructor,
      getState: getInternalParamsState
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.js
var require_web_url_search_params = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.js"() {
    "use strict";
    init_miniprogram_url();
    require_web_url_search_params_constructor();
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.delete.js"() {
    init_miniprogram_url();
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.has.js"() {
    init_miniprogram_url();
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url-search-params.size.js"() {
    init_miniprogram_url();
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/web/url-search-params.js
var require_url_search_params = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/web/url-search-params.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    require_web_url_search_params();
    require_web_url_search_params_delete();
    require_web_url_search_params_has();
    require_web_url_search_params_size();
    var path = require_path();
    module2.exports = path.URLSearchParams;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/string-multibyte.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var toString = require_to_string();
    var requireObjectCoercible = require_require_object_coercible();
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var stringSlice = uncurryThis("".slice);
    var createMethod = /* @__PURE__ */ __name(function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    }, "createMethod");
    module2.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.string.iterator.js
var require_es_string_iterator = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.string.iterator.js"() {
    "use strict";
    init_miniprogram_url();
    var charAt = require_string_multibyte().charAt;
    var toString = require_to_string();
    var InternalStateModule = require_internal_state();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var STRING_ITERATOR = "String Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", function(iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
      });
    }, /* @__PURE__ */ __name(function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length) return createIterResultObject(void 0, true);
      point = charAt(string, index);
      state.index += point.length;
      return createIterResultObject(point, false);
    }, "next"));
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    init_miniprogram_url();
    exports.f = Object.getOwnPropertySymbols;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-assign.js
var require_object_assign = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-assign.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var call = require_function_call();
    var fails = require_fails();
    var objectKeys = require_object_keys();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var toObject = require_to_object();
    var IndexedObject = require_indexed_object();
    var $assign = Object.assign;
    var defineProperty = Object.defineProperty;
    var concat = uncurryThis([].concat);
    module2.exports = !$assign || fails(function() {
      if (DESCRIPTORS && $assign({
        b: 1
      }, $assign(defineProperty({}, "a", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          defineProperty(this, "b", {
            value: 3,
            enumerable: false
          });
        }, "get")
      }), {
        b: 2
      })).b !== 1) return true;
      var A = {};
      var B = {};
      var symbol = /* @__PURE__ */ Symbol("assign detection");
      var alphabet = "abcdefghijklmnopqrst";
      A[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
    }) ? /* @__PURE__ */ __name(function assign(target, source) {
      var T = toObject(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
        }
      }
      return T;
    }, "assign") : $assign;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/iterator-close.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw") throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw") throw value;
      if (innerError) throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var anObject = require_an_object();
    var iteratorClose = require_iterator_close();
    module2.exports = function(iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (error) {
        iteratorClose(iterator, "throw", error);
      }
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-array-iterator-method.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/inspect-source.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-constructor.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = /* @__PURE__ */ __name(function() {
    }, "noop");
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = /* @__PURE__ */ __name(function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      try {
        construct(noop, [], argument);
        return true;
      } catch (error) {
        return false;
      }
    }, "isConstructor");
    var isConstructorLegacy = /* @__PURE__ */ __name(function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    }, "isConstructor");
    isConstructorLegacy.sham = true;
    module2.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-property.js
var require_create_property = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-property.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else object[key] = value;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-array.js
var require_is_array = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-array.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var classof = require_classof_raw();
    module2.exports = Array.isArray || /* @__PURE__ */ __name(function isArray(argument) {
      return classof(argument) === "Array";
    }, "isArray");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-set-length.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !(function() {
      if (this !== void 0) return true;
      try {
        Object.defineProperty([], "length", {
          writable: false
        }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    })();
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-from.js
var require_array_from = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-from.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var bind = require_function_bind_context();
    var call = require_function_call();
    var toObject = require_to_object();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isConstructor = require_is_constructor();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var setArrayLength = require_array_set_length();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $Array = Array;
    module2.exports = /* @__PURE__ */ __name(function from(arrayLike) {
      var IS_CONSTRUCTOR = isConstructor(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
      var O = toObject(arrayLike);
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        result = IS_CONSTRUCTOR ? new this() : [];
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        for (; !(step = call(next, iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
            step.value,
            index
          ], true) : step.value;
          try {
            createProperty(result, index, value);
          } catch (error) {
            iteratorClose(iterator, "throw", error);
          }
        }
      } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for (; length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      setArrayLength(result, index);
      return result;
    }, "from");
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/string-punycode-to-ascii.js
var require_string_punycode_to_ascii = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/string-punycode-to-ascii.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var uncurryThis = require_function_uncurry_this();
    var maxInt = 2147483647;
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128;
    var delimiter = "-";
    var regexNonASCII = /[^\0-\u007E]/;
    var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
    var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
    var baseMinusTMin = base - tMin;
    var $RangeError = RangeError;
    var exec = uncurryThis(regexSeparators.exec);
    var floor = Math.floor;
    var fromCharCode = String.fromCharCode;
    var charCodeAt = uncurryThis("".charCodeAt);
    var join = uncurryThis([].join);
    var push = uncurryThis([].push);
    var replace = uncurryThis("".replace);
    var split = uncurryThis("".split);
    var toLowerCase = uncurryThis("".toLowerCase);
    var ucs2decode = /* @__PURE__ */ __name(function(string) {
      var output = [];
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var value = charCodeAt(string, counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          var extra = charCodeAt(string, counter++);
          if ((extra & 64512) === 56320) {
            push(output, ((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            push(output, value);
            counter--;
          }
        } else {
          push(output, value);
        }
      }
      return output;
    }, "ucs2decode");
    var digitToBasic = /* @__PURE__ */ __name(function(digit) {
      return digit + 22 + 75 * (digit < 26);
    }, "digitToBasic");
    var adapt = /* @__PURE__ */ __name(function(delta, numPoints, firstTime) {
      var k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      while (delta > baseMinusTMin * tMax >> 1) {
        delta = floor(delta / baseMinusTMin);
        k += base;
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }, "adapt");
    var encode = /* @__PURE__ */ __name(function(input) {
      var output = [];
      input = ucs2decode(input);
      var inputLength = input.length;
      var n = initialN;
      var delta = 0;
      var bias = initialBias;
      var i, currentValue;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < 128) {
          push(output, fromCharCode(currentValue));
        }
      }
      var basicLength = output.length;
      var handledCPCount = basicLength;
      if (basicLength) {
        push(output, delimiter);
      }
      while (handledCPCount < inputLength) {
        var m = maxInt;
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
        var handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          throw new $RangeError(OVERFLOW_ERROR);
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue < n && ++delta > maxInt) {
            throw new $RangeError(OVERFLOW_ERROR);
          }
          if (currentValue === n) {
            var q = delta;
            var k = base;
            while (true) {
              var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t) break;
              var qMinusT = q - t;
              var baseMinusT = base - t;
              push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
              q = floor(qMinusT / baseMinusT);
              k += base;
            }
            push(output, fromCharCode(digitToBasic(q)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
            delta = 0;
            handledCPCount++;
          }
        }
        delta++;
        n++;
      }
      return join(output, "");
    }, "encode");
    module2.exports = function(input) {
      var encoded = [];
      var labels = split(replace(toLowerCase(input), regexSeparators, "."), ".");
      var i, label;
      for (i = 0; i < labels.length; i++) {
        label = labels[i];
        push(encoded, exec(regexNonASCII, label) ? "xn--" + encode(label) : label);
      }
      return join(encoded, ".");
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.constructor.js
var require_web_url_constructor = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.constructor.js"() {
    "use strict";
    init_miniprogram_url();
    require_es_string_iterator();
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var globalThis2 = require_global_this();
    var bind = require_function_bind_context();
    var uncurryThis = require_function_uncurry_this();
    var defineBuiltIn = require_define_built_in();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var anInstance = require_an_instance();
    var hasOwn2 = require_has_own_property();
    var assign = require_object_assign();
    var arrayFrom = require_array_from();
    var arraySlice = require_array_slice();
    var codeAt = require_string_multibyte().codeAt;
    var toASCII = require_string_punycode_to_ascii();
    var $toString = require_to_string();
    var setToStringTag = require_set_to_string_tag();
    var validateArgumentsLength = require_validate_arguments_length();
    var URLSearchParamsModule = require_web_url_search_params_constructor();
    var InternalStateModule = require_internal_state();
    var setInternalState = InternalStateModule.set;
    var getInternalURLState = InternalStateModule.getterFor("URL");
    var URLSearchParams = URLSearchParamsModule.URLSearchParams;
    var getInternalSearchParamsState = URLSearchParamsModule.getState;
    var NativeURL = globalThis2.URL;
    var TypeError2 = globalThis2.TypeError;
    var encodeURIComponent2 = globalThis2.encodeURIComponent;
    var parseInt2 = globalThis2.parseInt;
    var floor = Math.floor;
    var pow = Math.pow;
    var charAt = uncurryThis("".charAt);
    var exec = uncurryThis(/./.exec);
    var join = uncurryThis([].join);
    var numberToString = uncurryThis(1.1.toString);
    var pop = uncurryThis([].pop);
    var push = uncurryThis([].push);
    var replace = uncurryThis("".replace);
    var shift = uncurryThis([].shift);
    var split = uncurryThis("".split);
    var stringSlice = uncurryThis("".slice);
    var toLowerCase = uncurryThis("".toLowerCase);
    var unshift = uncurryThis([].unshift);
    var INVALID_AUTHORITY = "Invalid authority";
    var INVALID_SCHEME = "Invalid scheme";
    var INVALID_HOST = "Invalid host";
    var INVALID_PORT = "Invalid port";
    var ALPHA = /[a-z]/i;
    var ALPHANUMERIC_PLUS_MINUS_DOT = /[\d+\-.a-z]/i;
    var DIGIT = /\d/;
    var HEX_START = /^0x/i;
    var OCT = /^[0-7]+$/;
    var DEC = /^\d+$/;
    var HEX = /^[\da-f]+$/i;
    var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
    var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
    var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
    var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
    var TAB_AND_NEW_LINE = /[\t\n\r]/g;
    var EOF;
    var endsInNumber = /* @__PURE__ */ __name(function(input) {
      var parts = split(input, ".");
      var last, hexPart;
      if (parts[parts.length - 1] === "") {
        if (parts.length === 1) return false;
        parts.length--;
      }
      last = parts[parts.length - 1];
      if (exec(DEC, last)) return true;
      if (exec(HEX_START, last)) {
        hexPart = stringSlice(last, 2);
        return hexPart === "" || !!exec(HEX, hexPart);
      }
      return false;
    }, "endsInNumber");
    var parseIPv4 = /* @__PURE__ */ __name(function(input) {
      var parts = split(input, ".");
      var partsLength, numbers, index, part, radix, number, ipv4;
      if (parts.length && parts[parts.length - 1] === "") {
        parts.length--;
      }
      partsLength = parts.length;
      if (partsLength > 4) return null;
      numbers = [];
      for (index = 0; index < partsLength; index++) {
        part = parts[index];
        if (part === "") return null;
        radix = 10;
        if (part.length > 1 && charAt(part, 0) === "0") {
          radix = exec(HEX_START, part) ? 16 : 8;
          part = stringSlice(part, radix === 8 ? 1 : 2);
        }
        if (part === "") {
          number = 0;
        } else {
          if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return null;
          number = parseInt2(part, radix);
        }
        push(numbers, number);
      }
      for (index = 0; index < partsLength; index++) {
        number = numbers[index];
        if (index === partsLength - 1) {
          if (number >= pow(256, 5 - partsLength)) return null;
        } else if (number > 255) return null;
      }
      ipv4 = pop(numbers);
      for (index = 0; index < numbers.length; index++) {
        ipv4 += numbers[index] * pow(256, 3 - index);
      }
      return ipv4;
    }, "parseIPv4");
    var parseIPv6 = /* @__PURE__ */ __name(function(input) {
      var address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];
      var pieceIndex = 0;
      var compress = null;
      var pointer = 0;
      var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
      var chr = /* @__PURE__ */ __name(function() {
        return charAt(input, pointer);
      }, "chr");
      if (chr() === ":") {
        if (charAt(input, 1) !== ":") return;
        pointer += 2;
        pieceIndex++;
        compress = pieceIndex;
      }
      while (chr()) {
        if (pieceIndex === 8) return;
        if (chr() === ":") {
          if (compress !== null) return;
          pointer++;
          pieceIndex++;
          compress = pieceIndex;
          continue;
        }
        value = length = 0;
        while (length < 4 && exec(HEX, chr())) {
          value = value * 16 + parseInt2(chr(), 16);
          pointer++;
          length++;
        }
        if (chr() === ".") {
          if (length === 0) return;
          pointer -= length;
          if (pieceIndex > 6) return;
          numbersSeen = 0;
          while (chr()) {
            ipv4Piece = null;
            if (numbersSeen > 0) {
              if (chr() === "." && numbersSeen < 4) pointer++;
              else return;
            }
            if (!exec(DIGIT, chr())) return;
            while (exec(DIGIT, chr())) {
              number = parseInt2(chr(), 10);
              if (ipv4Piece === null) ipv4Piece = number;
              else if (ipv4Piece === 0) return;
              else ipv4Piece = ipv4Piece * 10 + number;
              if (ipv4Piece > 255) return;
              pointer++;
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
            numbersSeen++;
            if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
          }
          if (numbersSeen !== 4) return;
          break;
        } else if (chr() === ":") {
          pointer++;
          if (!chr()) return;
        } else if (chr()) return;
        address[pieceIndex++] = value;
      }
      if (compress !== null) {
        swaps = pieceIndex - compress;
        pieceIndex = 7;
        while (pieceIndex !== 0 && swaps > 0) {
          swap = address[pieceIndex];
          address[pieceIndex--] = address[compress + swaps - 1];
          address[compress + --swaps] = swap;
        }
      } else if (pieceIndex !== 8) return;
      return address;
    }, "parseIPv6");
    var findLongestZeroSequence = /* @__PURE__ */ __name(function(ipv6) {
      var maxIndex = null;
      var maxLength = 1;
      var currStart = null;
      var currLength = 0;
      var index = 0;
      for (; index < 8; index++) {
        if (ipv6[index] !== 0) {
          if (currLength > maxLength) {
            maxIndex = currStart;
            maxLength = currLength;
          }
          currStart = null;
          currLength = 0;
        } else {
          if (currStart === null) currStart = index;
          ++currLength;
        }
      }
      return currLength > maxLength ? currStart : maxIndex;
    }, "findLongestZeroSequence");
    var serializeHost = /* @__PURE__ */ __name(function(host) {
      var result, index, compress, ignore0;
      if (typeof host == "number") {
        result = [];
        for (index = 0; index < 4; index++) {
          unshift(result, host % 256);
          host = floor(host / 256);
        }
        return join(result, ".");
      }
      if (typeof host == "object") {
        result = "";
        compress = findLongestZeroSequence(host);
        for (index = 0; index < 8; index++) {
          if (ignore0 && host[index] === 0) continue;
          if (ignore0) ignore0 = false;
          if (compress === index) {
            result += index ? ":" : "::";
            ignore0 = true;
          } else {
            result += numberToString(host[index], 16);
            if (index < 7) result += ":";
          }
        }
        return "[" + result + "]";
      }
      return host;
    }, "serializeHost");
    var C0ControlPercentEncodeSet = {};
    var queryPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
      " ": 1,
      '"': 1,
      "#": 1,
      "<": 1,
      ">": 1
    });
    var specialQueryPercentEncodeSet = assign({}, queryPercentEncodeSet, {
      "'": 1
    });
    var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
      " ": 1,
      '"': 1,
      "<": 1,
      ">": 1,
      "`": 1
    });
    var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
      "#": 1,
      "?": 1,
      "{": 1,
      "}": 1,
      "^": 1
    });
    var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
      "/": 1,
      ":": 1,
      ";": 1,
      "=": 1,
      "@": 1,
      "[": 1,
      "\\": 1,
      "]": 1,
      "^": 1,
      "|": 1
    });
    var percentEncode = /* @__PURE__ */ __name(function(chr, set) {
      var code = codeAt(chr, 0);
      return code >= 32 && code < 127 && !hasOwn2(set, chr) ? chr : chr === "'" && hasOwn2(set, chr) ? "%27" : encodeURIComponent2(chr);
    }, "percentEncode");
    var specialSchemes = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    };
    var isWindowsDriveLetter = /* @__PURE__ */ __name(function(string, normalized) {
      var second;
      return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ":" || !normalized && second === "|");
    }, "isWindowsDriveLetter");
    var startsWithWindowsDriveLetter = /* @__PURE__ */ __name(function(string) {
      var third;
      return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || (third = charAt(string, 2)) === "/" || third === "\\" || third === "?" || third === "#");
    }, "startsWithWindowsDriveLetter");
    var isSingleDot = /* @__PURE__ */ __name(function(segment) {
      return segment === "." || toLowerCase(segment) === "%2e";
    }, "isSingleDot");
    var isDoubleDot = /* @__PURE__ */ __name(function(segment) {
      segment = toLowerCase(segment);
      return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
    }, "isDoubleDot");
    var SCHEME_START = {};
    var SCHEME = {};
    var NO_SCHEME = {};
    var SPECIAL_RELATIVE_OR_AUTHORITY = {};
    var PATH_OR_AUTHORITY = {};
    var RELATIVE = {};
    var RELATIVE_SLASH = {};
    var SPECIAL_AUTHORITY_SLASHES = {};
    var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
    var AUTHORITY = {};
    var HOST = {};
    var HOSTNAME = {};
    var PORT = {};
    var FILE = {};
    var FILE_SLASH = {};
    var FILE_HOST = {};
    var PATH_START = {};
    var PATH = {};
    var CANNOT_BE_A_BASE_URL_PATH = {};
    var QUERY = {};
    var FRAGMENT = {};
    var URLState = /* @__PURE__ */ __name(function(url, isBase, base) {
      var urlString = $toString(url);
      var baseState, failure, searchParams;
      if (isBase) {
        failure = this.parse(urlString);
        if (failure) throw new TypeError2(failure);
        this.searchParams = null;
      } else {
        if (base !== void 0) baseState = new URLState(base, true);
        failure = this.parse(urlString, null, baseState);
        if (failure) throw new TypeError2(failure);
        searchParams = getInternalSearchParamsState(new URLSearchParams());
        searchParams.bindURL(this);
        this.searchParams = searchParams;
      }
    }, "URLState");
    URLState.prototype = {
      type: "URL",
      // https://url.spec.whatwg.org/#url-parsing
      // eslint-disable-next-line max-statements -- TODO
      parse: /* @__PURE__ */ __name(function(input, stateOverride, base) {
        var url = this;
        var state = stateOverride || SCHEME_START;
        var pointer = 0;
        var buffer = "";
        var seenAt = false;
        var seenBracket = false;
        var seenPasswordToken = false;
        var codePoints, chr, bufferCodePoints, failure;
        input = $toString(input);
        if (!stateOverride) {
          url.scheme = "";
          url.username = "";
          url.password = "";
          url.host = null;
          url.port = null;
          url.path = [];
          url.query = null;
          url.fragment = null;
          url.cannotBeABaseURL = false;
          input = replace(input, LEADING_C0_CONTROL_OR_SPACE, "");
          input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, "$1");
        }
        input = replace(input, TAB_AND_NEW_LINE, "");
        codePoints = arrayFrom(input);
        while (pointer <= codePoints.length) {
          chr = codePoints[pointer];
          switch (state) {
            case SCHEME_START:
              if (chr && exec(ALPHA, chr)) {
                buffer += toLowerCase(chr);
                state = SCHEME;
              } else if (!stateOverride) {
                state = NO_SCHEME;
                continue;
              } else return INVALID_SCHEME;
              break;
            case SCHEME:
              if (chr && exec(ALPHANUMERIC_PLUS_MINUS_DOT, chr)) {
                buffer += toLowerCase(chr);
              } else if (chr === ":") {
                if (stateOverride && (url.isSpecial() !== hasOwn2(specialSchemes, buffer) || buffer === "file" && (url.includesCredentials() || url.port !== null) || url.scheme === "file" && url.host === "")) return;
                url.scheme = buffer;
                if (stateOverride) {
                  if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
                  return;
                }
                buffer = "";
                if (url.scheme === "file") {
                  state = FILE;
                } else if (url.isSpecial() && base && base.scheme === url.scheme) {
                  state = SPECIAL_RELATIVE_OR_AUTHORITY;
                } else if (url.isSpecial()) {
                  state = SPECIAL_AUTHORITY_SLASHES;
                } else if (codePoints[pointer + 1] === "/") {
                  state = PATH_OR_AUTHORITY;
                  pointer++;
                } else {
                  url.cannotBeABaseURL = true;
                  push(url.path, "");
                  state = CANNOT_BE_A_BASE_URL_PATH;
                }
              } else if (!stateOverride) {
                buffer = "";
                state = NO_SCHEME;
                pointer = 0;
                continue;
              } else return INVALID_SCHEME;
              break;
            case NO_SCHEME:
              if (!base || base.cannotBeABaseURL && chr !== "#") return INVALID_SCHEME;
              if (base.cannotBeABaseURL && chr === "#") {
                url.scheme = base.scheme;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = "";
                url.cannotBeABaseURL = true;
                state = FRAGMENT;
                break;
              }
              state = base.scheme === "file" ? FILE : RELATIVE;
              continue;
            case SPECIAL_RELATIVE_OR_AUTHORITY:
              if (chr === "/" && codePoints[pointer + 1] === "/") {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                pointer++;
              } else {
                state = RELATIVE;
                continue;
              }
              break;
            case PATH_OR_AUTHORITY:
              if (chr === "/") {
                state = AUTHORITY;
                break;
              } else {
                state = PATH;
                continue;
              }
            case RELATIVE:
              url.scheme = base.scheme;
              if (chr === EOF) {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                url.query = base.query;
              } else if (chr === "/" || chr === "\\" && url.isSpecial()) {
                state = RELATIVE_SLASH;
              } else if (chr === "?") {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                url.query = "";
                state = QUERY;
              } else if (chr === "#") {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = "";
                state = FRAGMENT;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                if (url.path.length) url.path.length--;
                state = PATH;
                continue;
              }
              break;
            case RELATIVE_SLASH:
              if (url.isSpecial() && (chr === "/" || chr === "\\")) {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              } else if (chr === "/") {
                state = AUTHORITY;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                state = PATH;
                continue;
              }
              break;
            case SPECIAL_AUTHORITY_SLASHES:
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              if (chr !== "/" || codePoints[pointer + 1] !== "/") continue;
              pointer++;
              break;
            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
              if (chr !== "/" && chr !== "\\") {
                state = AUTHORITY;
                continue;
              }
              break;
            case AUTHORITY:
              if (chr === "@") {
                if (seenAt) buffer = "%40" + buffer;
                seenAt = true;
                bufferCodePoints = arrayFrom(buffer);
                for (var i = 0; i < bufferCodePoints.length; i++) {
                  var codePoint = bufferCodePoints[i];
                  if (codePoint === ":" && !seenPasswordToken) {
                    seenPasswordToken = true;
                    continue;
                  }
                  var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                  if (seenPasswordToken) url.password += encodedCodePoints;
                  else url.username += encodedCodePoints;
                }
                buffer = "";
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                if (seenAt && buffer === "") return INVALID_AUTHORITY;
                pointer -= arrayFrom(buffer).length + 1;
                buffer = "";
                state = HOST;
              } else buffer += chr;
              break;
            case HOST:
            case HOSTNAME:
              if (stateOverride && url.scheme === "file") {
                state = FILE_HOST;
                continue;
              } else if (chr === ":" && !seenBracket) {
                if (buffer === "") return INVALID_HOST;
                if (stateOverride === HOSTNAME) return;
                failure = url.parseHost(buffer);
                if (failure) return failure;
                buffer = "";
                state = PORT;
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                if (url.isSpecial() && buffer === "") return INVALID_HOST;
                if (stateOverride && buffer === "" && (url.includesCredentials() || url.port !== null)) return;
                failure = url.parseHost(buffer);
                if (failure) return failure;
                buffer = "";
                state = PATH_START;
                if (stateOverride) return;
                continue;
              } else {
                if (chr === "[") seenBracket = true;
                else if (chr === "]") seenBracket = false;
                buffer += chr;
              }
              break;
            case PORT:
              if (exec(DIGIT, chr)) {
                buffer += chr;
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial() || stateOverride) {
                if (buffer !== "") {
                  var port = parseInt2(buffer, 10);
                  if (port > 65535) return INVALID_PORT;
                  url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                  buffer = "";
                }
                if (stateOverride) return;
                state = PATH_START;
                continue;
              } else return INVALID_PORT;
              break;
            case FILE:
              url.scheme = "file";
              url.host = "";
              if (chr === "/" || chr === "\\") state = FILE_SLASH;
              else if (base && base.scheme === "file") {
                switch (chr) {
                  case EOF:
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.query = base.query;
                    break;
                  case "?":
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.query = "";
                    state = QUERY;
                    break;
                  case "#":
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.query = base.query;
                    url.fragment = "";
                    state = FRAGMENT;
                    break;
                  default:
                    url.host = base.host;
                    if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ""))) {
                      url.path = arraySlice(base.path);
                      url.shortenPath();
                    }
                    state = PATH;
                    continue;
                }
              } else {
                state = PATH;
                continue;
              }
              break;
            case FILE_SLASH:
              if (chr === "/" || chr === "\\") {
                state = FILE_HOST;
                break;
              }
              if (base && base.scheme === "file") {
                url.host = base.host;
                if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), "")) && isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
              }
              state = PATH;
              continue;
            case FILE_HOST:
              if (chr === EOF || chr === "/" || chr === "\\" || chr === "?" || chr === "#") {
                if (!stateOverride && isWindowsDriveLetter(buffer)) {
                  state = PATH;
                } else if (buffer === "") {
                  url.host = "";
                  if (stateOverride) return;
                  state = PATH_START;
                } else {
                  failure = url.parseHost(buffer);
                  if (failure) return failure;
                  if (url.host === "localhost") url.host = "";
                  if (stateOverride) return;
                  buffer = "";
                  state = PATH_START;
                }
                continue;
              } else buffer += chr;
              break;
            case PATH_START:
              if (url.isSpecial()) {
                state = PATH;
                if (chr !== "/" && chr !== "\\") continue;
              } else if (!stateOverride && chr === "?") {
                url.query = "";
                state = QUERY;
              } else if (!stateOverride && chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                state = PATH;
                if (chr !== "/") continue;
              }
              break;
            case PATH:
              if (chr === EOF || chr === "/" || chr === "\\" && url.isSpecial() || !stateOverride && (chr === "?" || chr === "#")) {
                if (isDoubleDot(buffer)) {
                  url.shortenPath();
                  if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                    push(url.path, "");
                  }
                } else if (isSingleDot(buffer)) {
                  if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                    push(url.path, "");
                  }
                } else {
                  if (url.scheme === "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                    if (url.host !== null && url.host !== "") url.host = "";
                    buffer = charAt(buffer, 0) + ":";
                  }
                  push(url.path, buffer);
                }
                buffer = "";
                if (url.scheme === "file" && (chr === EOF || chr === "?" || chr === "#")) {
                  while (url.path.length > 1 && url.path[0] === "") {
                    shift(url.path);
                  }
                }
                if (chr === "?") {
                  url.query = "";
                  state = QUERY;
                } else if (chr === "#") {
                  url.fragment = "";
                  state = FRAGMENT;
                }
              } else {
                buffer += percentEncode(chr, pathPercentEncodeSet);
              }
              break;
            case CANNOT_BE_A_BASE_URL_PATH:
              if (chr === "?") {
                url.query = "";
                state = QUERY;
              } else if (chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
              }
              break;
            case QUERY:
              if (!stateOverride && chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                url.query += percentEncode(chr, url.isSpecial() ? specialQueryPercentEncodeSet : queryPercentEncodeSet);
              }
              break;
            case FRAGMENT:
              if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
              break;
          }
          pointer++;
        }
      }, "parse"),
      // https://url.spec.whatwg.org/#host-parsing
      parseHost: /* @__PURE__ */ __name(function(input) {
        var result, codePoints, index;
        if (charAt(input, 0) === "[") {
          if (charAt(input, input.length - 1) !== "]") return INVALID_HOST;
          result = parseIPv6(stringSlice(input, 1, -1));
          if (!result) return INVALID_HOST;
          this.host = result;
        } else if (!this.isSpecial()) {
          if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
          result = "";
          codePoints = arrayFrom(input);
          for (index = 0; index < codePoints.length; index++) {
            result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
          }
          this.host = result;
        } else {
          input = toASCII(input);
          if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
          if (endsInNumber(input)) {
            result = parseIPv4(input);
            if (result === null) return INVALID_HOST;
            this.host = result;
          } else {
            this.host = input;
          }
        }
      }, "parseHost"),
      // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
      cannotHaveUsernamePasswordPort: /* @__PURE__ */ __name(function() {
        return this.host === null || this.host === "" || this.cannotBeABaseURL || this.scheme === "file";
      }, "cannotHaveUsernamePasswordPort"),
      // https://url.spec.whatwg.org/#include-credentials
      includesCredentials: /* @__PURE__ */ __name(function() {
        return this.username !== "" || this.password !== "";
      }, "includesCredentials"),
      // https://url.spec.whatwg.org/#is-special
      isSpecial: /* @__PURE__ */ __name(function() {
        return hasOwn2(specialSchemes, this.scheme);
      }, "isSpecial"),
      // https://url.spec.whatwg.org/#shorten-a-urls-path
      shortenPath: /* @__PURE__ */ __name(function() {
        var path = this.path;
        var pathSize = path.length;
        if (pathSize && (this.scheme !== "file" || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
          path.length--;
        }
      }, "shortenPath"),
      // https://url.spec.whatwg.org/#concept-url-serializer
      serialize: /* @__PURE__ */ __name(function() {
        var url = this;
        var scheme = url.scheme;
        var username = url.username;
        var password = url.password;
        var host = url.host;
        var port = url.port;
        var path = url.path;
        var query = url.query;
        var fragment = url.fragment;
        var output = scheme + ":";
        if (host !== null) {
          output += "//";
          if (url.includesCredentials()) {
            output += username + (password ? ":" + password : "") + "@";
          }
          output += serializeHost(host);
          if (port !== null) output += ":" + port;
        } else if (scheme === "file") output += "//";
        if (host === null && !url.cannotBeABaseURL && path.length > 1 && path[0] === "") output += "/.";
        output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
        if (query !== null) output += "?" + query;
        if (fragment !== null) output += "#" + fragment;
        return output;
      }, "serialize"),
      // https://url.spec.whatwg.org/#dom-url-href
      setHref: /* @__PURE__ */ __name(function(href) {
        var failure = this.parse(href);
        if (failure) throw new TypeError2(failure);
        this.searchParams.update();
      }, "setHref"),
      // https://url.spec.whatwg.org/#dom-url-origin
      getOrigin: /* @__PURE__ */ __name(function() {
        var scheme = this.scheme;
        var port = this.port;
        if (scheme === "blob") try {
          return new URLConstructor(this.path[0]).origin;
        } catch (error) {
          return "null";
        }
        if (scheme === "file" || !this.isSpecial()) return "null";
        return scheme + "://" + serializeHost(this.host) + (port !== null ? ":" + port : "");
      }, "getOrigin"),
      // https://url.spec.whatwg.org/#dom-url-protocol
      getProtocol: /* @__PURE__ */ __name(function() {
        return this.scheme + ":";
      }, "getProtocol"),
      setProtocol: /* @__PURE__ */ __name(function(protocol) {
        this.parse($toString(protocol) + ":", SCHEME_START);
      }, "setProtocol"),
      // https://url.spec.whatwg.org/#dom-url-username
      getUsername: /* @__PURE__ */ __name(function() {
        return this.username;
      }, "getUsername"),
      setUsername: /* @__PURE__ */ __name(function(username) {
        var codePoints = arrayFrom($toString(username));
        if (this.cannotHaveUsernamePasswordPort()) return;
        this.username = "";
        for (var i = 0; i < codePoints.length; i++) {
          this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }, "setUsername"),
      // https://url.spec.whatwg.org/#dom-url-password
      getPassword: /* @__PURE__ */ __name(function() {
        return this.password;
      }, "getPassword"),
      setPassword: /* @__PURE__ */ __name(function(password) {
        var codePoints = arrayFrom($toString(password));
        if (this.cannotHaveUsernamePasswordPort()) return;
        this.password = "";
        for (var i = 0; i < codePoints.length; i++) {
          this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }, "setPassword"),
      // https://url.spec.whatwg.org/#dom-url-host
      getHost: /* @__PURE__ */ __name(function() {
        var host = this.host;
        var port = this.port;
        return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
      }, "getHost"),
      setHost: /* @__PURE__ */ __name(function(host) {
        if (this.cannotBeABaseURL) return;
        this.parse(host, HOST);
      }, "setHost"),
      // https://url.spec.whatwg.org/#dom-url-hostname
      getHostname: /* @__PURE__ */ __name(function() {
        var host = this.host;
        return host === null ? "" : serializeHost(host);
      }, "getHostname"),
      setHostname: /* @__PURE__ */ __name(function(hostname) {
        if (this.cannotBeABaseURL) return;
        this.parse(hostname, HOSTNAME);
      }, "setHostname"),
      // https://url.spec.whatwg.org/#dom-url-port
      getPort: /* @__PURE__ */ __name(function() {
        var port = this.port;
        return port === null ? "" : $toString(port);
      }, "getPort"),
      setPort: /* @__PURE__ */ __name(function(port) {
        if (this.cannotHaveUsernamePasswordPort()) return;
        port = $toString(port);
        if (port === "") this.port = null;
        else this.parse(port, PORT);
      }, "setPort"),
      // https://url.spec.whatwg.org/#dom-url-pathname
      getPathname: /* @__PURE__ */ __name(function() {
        var path = this.path;
        return this.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
      }, "getPathname"),
      setPathname: /* @__PURE__ */ __name(function(pathname) {
        if (this.cannotBeABaseURL) return;
        this.path = [];
        this.parse(pathname, PATH_START);
      }, "setPathname"),
      // https://url.spec.whatwg.org/#dom-url-search
      getSearch: /* @__PURE__ */ __name(function() {
        var query = this.query;
        return query ? "?" + query : "";
      }, "getSearch"),
      setSearch: /* @__PURE__ */ __name(function(search) {
        search = $toString(search);
        if (search === "") {
          this.query = null;
        } else {
          if (charAt(search, 0) === "?") search = stringSlice(search, 1);
          this.query = "";
          this.parse(search, QUERY);
        }
        this.searchParams.update();
      }, "setSearch"),
      // https://url.spec.whatwg.org/#dom-url-searchparams
      getSearchParams: /* @__PURE__ */ __name(function() {
        return this.searchParams.facade;
      }, "getSearchParams"),
      // https://url.spec.whatwg.org/#dom-url-hash
      getHash: /* @__PURE__ */ __name(function() {
        var fragment = this.fragment;
        return fragment ? "#" + fragment : "";
      }, "getHash"),
      setHash: /* @__PURE__ */ __name(function(hash) {
        hash = $toString(hash);
        if (hash === "") {
          this.fragment = null;
          return;
        }
        if (charAt(hash, 0) === "#") hash = stringSlice(hash, 1);
        this.fragment = "";
        this.parse(hash, FRAGMENT);
      }, "setHash"),
      update: /* @__PURE__ */ __name(function() {
        this.query = this.searchParams.serialize() || null;
      }, "update")
    };
    var URLConstructor = /* @__PURE__ */ __name(function URL(url) {
      var that = anInstance(this, URLPrototype);
      var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : void 0;
      var state = setInternalState(that, new URLState(url, false, base));
      if (!DESCRIPTORS) {
        that.href = state.serialize();
        that.origin = state.getOrigin();
        that.protocol = state.getProtocol();
        that.username = state.getUsername();
        that.password = state.getPassword();
        that.host = state.getHost();
        that.hostname = state.getHostname();
        that.port = state.getPort();
        that.pathname = state.getPathname();
        that.search = state.getSearch();
        that.searchParams = state.getSearchParams();
        that.hash = state.getHash();
      }
    }, "URL");
    var URLPrototype = URLConstructor.prototype;
    var accessorDescriptor = /* @__PURE__ */ __name(function(getter, setter) {
      return {
        get: /* @__PURE__ */ __name(function() {
          return getInternalURLState(this)[getter]();
        }, "get"),
        set: setter && function(value) {
          return getInternalURLState(this)[setter](value);
        },
        configurable: true,
        enumerable: true
      };
    }, "accessorDescriptor");
    if (DESCRIPTORS) {
      defineBuiltInAccessor(URLPrototype, "href", accessorDescriptor("serialize", "setHref"));
      defineBuiltInAccessor(URLPrototype, "origin", accessorDescriptor("getOrigin"));
      defineBuiltInAccessor(URLPrototype, "protocol", accessorDescriptor("getProtocol", "setProtocol"));
      defineBuiltInAccessor(URLPrototype, "username", accessorDescriptor("getUsername", "setUsername"));
      defineBuiltInAccessor(URLPrototype, "password", accessorDescriptor("getPassword", "setPassword"));
      defineBuiltInAccessor(URLPrototype, "host", accessorDescriptor("getHost", "setHost"));
      defineBuiltInAccessor(URLPrototype, "hostname", accessorDescriptor("getHostname", "setHostname"));
      defineBuiltInAccessor(URLPrototype, "port", accessorDescriptor("getPort", "setPort"));
      defineBuiltInAccessor(URLPrototype, "pathname", accessorDescriptor("getPathname", "setPathname"));
      defineBuiltInAccessor(URLPrototype, "search", accessorDescriptor("getSearch", "setSearch"));
      defineBuiltInAccessor(URLPrototype, "searchParams", accessorDescriptor("getSearchParams"));
      defineBuiltInAccessor(URLPrototype, "hash", accessorDescriptor("getHash", "setHash"));
    }
    defineBuiltIn(URLPrototype, "toJSON", /* @__PURE__ */ __name(function toJSON() {
      return getInternalURLState(this).serialize();
    }, "toJSON"), {
      enumerable: true
    });
    defineBuiltIn(URLPrototype, "toString", /* @__PURE__ */ __name(function toString() {
      return getInternalURLState(this).serialize();
    }, "toString"), {
      enumerable: true
    });
    if (NativeURL) {
      nativeCreateObjectURL = NativeURL.createObjectURL;
      nativeRevokeObjectURL = NativeURL.revokeObjectURL;
      if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, "createObjectURL", bind(nativeCreateObjectURL, NativeURL));
      if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, "revokeObjectURL", bind(nativeRevokeObjectURL, NativeURL));
    }
    var nativeCreateObjectURL;
    var nativeRevokeObjectURL;
    setToStringTag(URLConstructor, "URL");
    $({
      global: true,
      constructor: true,
      forced: !USE_NATIVE_URL,
      sham: !DESCRIPTORS
    }, {
      URL: URLConstructor
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.js
var require_web_url = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.js"() {
    "use strict";
    init_miniprogram_url();
    require_web_url_constructor();
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.can-parse.js
var require_web_url_can_parse = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.can-parse.js"() {
    "use strict";
    init_miniprogram_url();
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var fails = require_fails();
    var validateArgumentsLength = require_validate_arguments_length();
    var toString = require_to_string();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var URL = getBuiltIn("URL");
    var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function() {
      URL.canParse();
    });
    var WRONG_ARITY = fails(function() {
      return URL.canParse.length !== 1;
    });
    $({
      target: "URL",
      stat: true,
      forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY
    }, {
      canParse: /* @__PURE__ */ __name(function canParse(url) {
        var length = validateArgumentsLength(arguments.length, 1);
        var urlString = toString(url);
        var base = length < 2 || arguments[1] === void 0 ? void 0 : toString(arguments[1]);
        try {
          return !!new URL(urlString, base);
        } catch (error) {
          return false;
        }
      }, "canParse")
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.parse.js
var require_web_url_parse = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.parse.js"() {
    "use strict";
    init_miniprogram_url();
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var validateArgumentsLength = require_validate_arguments_length();
    var toString = require_to_string();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var URL = getBuiltIn("URL");
    $({
      target: "URL",
      stat: true,
      forced: !USE_NATIVE_URL
    }, {
      parse: /* @__PURE__ */ __name(function parse(url) {
        var length = validateArgumentsLength(arguments.length, 1);
        var urlString = toString(url);
        var base = length < 2 || arguments[1] === void 0 ? void 0 : toString(arguments[1]);
        try {
          return new URL(urlString, base);
        } catch (error) {
          return null;
        }
      }, "parse")
    });
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.to-json.js
var require_web_url_to_json = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.url.to-json.js"() {
    init_miniprogram_url();
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/web/url.js
var require_url = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/web/url.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    require_url_search_params();
    require_web_url();
    require_web_url_can_parse();
    require_web_url_parse();
    require_web_url_to_json();
    var path = require_path();
    module2.exports = path.URL;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/stable/url/index.js
var require_url2 = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/stable/url/index.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var parent = require_url();
    module2.exports = parent;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/actual/url/index.js
var require_url3 = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/actual/url/index.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var parent = require_url2();
    module2.exports = parent;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/dom-iterables.js
var require_dom_iterables = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/dom-iterables.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    module2.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.dom-collections.iterator.js
var require_web_dom_collections_iterator = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/web.dom-collections.iterator.js"() {
    "use strict";
    init_miniprogram_url();
    require_es_array_iterator();
    var DOMIterables = require_dom_iterables();
    var globalThis2 = require_global_this();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    for (COLLECTION_NAME in DOMIterables) {
      setToStringTag(globalThis2[COLLECTION_NAME], COLLECTION_NAME);
      Iterators[COLLECTION_NAME] = Iterators.Array;
    }
    var COLLECTION_NAME;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/stable/url-search-params/index.js
var require_url_search_params2 = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/stable/url-search-params/index.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var parent = require_url_search_params();
    require_web_dom_collections_iterator();
    module2.exports = parent;
  }
});

// ../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/actual/url-search-params/index.js
var require_url_search_params3 = __commonJS({
  "../../node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/actual/url-search-params/index.js"(exports, module2) {
    "use strict";
    init_miniprogram_url();
    var parent = require_url_search_params2();
    module2.exports = parent;
  }
});

// scripts/miniprogram-url.mjs
var import_url, import_url_search_params;
var init_miniprogram_url = __esm({
  "scripts/miniprogram-url.mjs"() {
    import_url = __toESM(require_url3(), 1);
    import_url_search_params = __toESM(require_url_search_params3(), 1);
  }
});

// src/miniprogram.ts
var miniprogram_exports = {};
__export(miniprogram_exports, {
  MiniProgramHeaders: () => MiniProgramHeaders,
  MiniProgramReadableStream: () => MiniProgramReadableStream,
  createMiniProgramFetch: () => createMiniProgramFetch,
  createMiniProgramStorage: () => createMiniProgramStorage,
  createMiniProgramWorkBuddyCloud: () => createMiniProgramWorkBuddyCloud,
  ensureMiniProgramPolyfills: () => ensureMiniProgramPolyfills,
  isStreamingSupported: () => isStreamingSupported,
  isWechatVirtualReauthorizationRequired: () => isWechatVirtualReauthorizationRequired,
  resolveWechatVirtualPermission: () => resolveWechatVirtualPermission
});
module.exports = __toCommonJS(miniprogram_exports);
init_miniprogram_url();

// src/platform/miniprogram/index.ts
init_miniprogram_url();

// src/client.ts
init_miniprogram_url();

// src/config.ts
init_miniprogram_url();

// src/types.ts
init_miniprogram_url();
var _WorkBuddyCloudConfigError = class _WorkBuddyCloudConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "WorkBuddyCloudConfigError";
  }
};
__name(_WorkBuddyCloudConfigError, "WorkBuddyCloudConfigError");
var WorkBuddyCloudConfigError = _WorkBuddyCloudConfigError;

// src/config.ts
var PUBLISHABLE_KEY_PATTERN = /^wbpk_/;
function normalizeHttpUrl(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new WorkBuddyCloudConfigError(`${field} is required and must be a non-empty string.`);
  }
  const trimmed = value.trim();
  let parsed;
  try {
    parsed = new import_url.default(trimmed);
  } catch {
    throw new WorkBuddyCloudConfigError(`${field} must be an absolute URL, received: ${trimmed}`);
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new WorkBuddyCloudConfigError(`${field} must use http(s), received protocol: ${parsed.protocol}`);
  }
  return trimmed.replace(/\/+$/, "");
}
__name(normalizeHttpUrl, "normalizeHttpUrl");
function resolveEndpoint(value) {
  var _a8;
  if (value !== void 0 && value !== null && value !== "") {
    return normalizeHttpUrl(value, "endpoint");
  }
  const origin = (_a8 = globalThis.location) == null ? void 0 : _a8.origin;
  if (typeof origin !== "string" || origin === "") {
    throw new WorkBuddyCloudConfigError("endpoint is required outside browsers (no location.origin to fall back to).");
  }
  return origin.replace(/\/+$/, "");
}
__name(resolveEndpoint, "resolveEndpoint");
function normalizePublishableKey(publishableKey) {
  if (typeof publishableKey !== "string" || publishableKey.trim() === "") {
    throw new WorkBuddyCloudConfigError("publishableKey is required and must be a non-empty string.");
  }
  const trimmed = publishableKey.trim();
  if (!PUBLISHABLE_KEY_PATTERN.test(trimmed)) {
    throw new WorkBuddyCloudConfigError('publishableKey must start with "wbpk_".');
  }
  return trimmed;
}
__name(normalizePublishableKey, "normalizePublishableKey");
function resolveFetch(candidate) {
  if (candidate) {
    return candidate;
  }
  if (typeof globalThis.fetch !== "function") {
    throw new WorkBuddyCloudConfigError("Global fetch is unavailable in this runtime; pass options.fetch explicitly.");
  }
  return globalThis.fetch.bind(globalThis);
}
__name(resolveFetch, "resolveFetch");
function resolveRuntimeConfig(options) {
  if (!options || typeof options !== "object") {
    throw new WorkBuddyCloudConfigError("createWorkBuddyCloud requires publishableKey.");
  }
  return Object.freeze({
    endpoint: resolveEndpoint(options.endpoint),
    oauthRelayBaseUrl: options.oauthRelayBaseUrl ? normalizeHttpUrl(options.oauthRelayBaseUrl, "oauthRelayBaseUrl") : "",
    publishableKey: normalizePublishableKey(options.publishableKey),
    fetch: resolveFetch(options.fetch)
  });
}
__name(resolveRuntimeConfig, "resolveRuntimeConfig");

// src/http/fetch.ts
init_miniprogram_url();
var PUBLISHABLE_KEY_HEADER = "x-wb-webapp-access-key";
function createCloudFetch(config, getSessionToken) {
  return async (input, init) => {
    const headers = new Headers(init == null ? void 0 : init.headers);
    headers.set(PUBLISHABLE_KEY_HEADER, config.publishableKey);
    if (!headers.has("Authorization")) {
      const token = await getSessionToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
    return config.fetch(input, {
      ...init,
      headers
    });
  };
}
__name(createCloudFetch, "createCloudFetch");
var anonymousTokenProvider = /* @__PURE__ */ __name(() => Promise.resolve(void 0), "anonymousTokenProvider");

// src/modules/auth/index.ts
init_miniprogram_url();

// src/paths.ts
init_miniprogram_url();
var CLOUD_PATH_PREFIX = "/.cloud";
var CLOUD_MODULE_PATHS = Object.freeze({
  auth: `${CLOUD_PATH_PREFIX}/auth`,
  database: `${CLOUD_PATH_PREFIX}/database/rest`,
  storage: `${CLOUD_PATH_PREFIX}/storage`,
  llm: `${CLOUD_PATH_PREFIX}/llm`
});

// src/modules/auth/pkce.ts
init_miniprogram_url();
var VERIFIER_KEY_PREFIX = "workbuddy-cloud.pkce.workbuddy.";
var CONSUMED_KEY_PREFIX = "workbuddy-cloud.pkce-done.workbuddy.";
function base64UrlEncode(bytes) {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
__name(base64UrlEncode, "base64UrlEncode");
function hasWebCrypto() {
  var _a8;
  const c = globalThis.crypto;
  return typeof (c == null ? void 0 : c.getRandomValues) === "function" && typeof ((_a8 = c == null ? void 0 : c.subtle) == null ? void 0 : _a8.digest) === "function" && typeof globalThis.btoa === "function";
}
__name(hasWebCrypto, "hasWebCrypto");
function createCodeVerifier() {
  const bytes = new Uint8Array(32);
  globalThis.crypto.getRandomValues(bytes);
  return base64UrlEncode(bytes);
}
__name(createCodeVerifier, "createCodeVerifier");
async function computeS256Challenge(verifier) {
  const data = new TextEncoder().encode(verifier);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(new Uint8Array(digest));
}
__name(computeS256Challenge, "computeS256Challenge");
var _WorkBuddyPkceStore = class _WorkBuddyPkceStore {
  constructor(publishableKey) {
    __publicField(this, "verifierKey");
    __publicField(this, "consumedKey");
    this.verifierKey = VERIFIER_KEY_PREFIX + publishableKey;
    this.consumedKey = CONSUMED_KEY_PREFIX + publishableKey;
  }
  /** sessionStorage 是否真的可读写（隐私模式、部分 WebView 下访问即抛）。 */
  usable() {
    const storage = this.storage();
    if (!storage) {
      return false;
    }
    try {
      const probe = `${this.verifierKey}.probe`;
      storage.setItem(probe, "1");
      storage.removeItem(probe);
      return true;
    } catch {
      return false;
    }
  }
  /** 写入失败返回 false —— 调用方据此拒绝发起登录。 */
  saveVerifier(verifier) {
    try {
      const storage = this.storage();
      if (!storage) {
        return false;
      }
      storage.setItem(this.verifierKey, verifier);
      storage.removeItem(this.consumedKey);
      return true;
    } catch {
      return false;
    }
  }
  readVerifier() {
    var _a8, _b;
    try {
      return (_b = (_a8 = this.storage()) == null ? void 0 : _a8.getItem(this.verifierKey)) != null ? _b : null;
    } catch {
      return null;
    }
  }
  clearVerifier() {
    var _a8;
    try {
      (_a8 = this.storage()) == null ? void 0 : _a8.removeItem(this.verifierKey);
    } catch {
    }
  }
  /**
   * 记下刚兑换成功的那个 state。
   *
   * 回调处理在应用里常被调两次（框架的严格模式、路由二次挂载）。第二次时
   * verifier 已经清掉了，如果不认这个标记就会报「缺少证明」，看起来像登录失败，
   * 而其实会话已经建好了。记下 state 才能把第二次识别成重复回调、直接返回空。
   */
  markConsumed(state) {
    var _a8;
    try {
      (_a8 = this.storage()) == null ? void 0 : _a8.setItem(this.consumedKey, state);
    } catch {
    }
  }
  isConsumed(state) {
    var _a8;
    try {
      return !!state && ((_a8 = this.storage()) == null ? void 0 : _a8.getItem(this.consumedKey)) === state;
    } catch {
      return false;
    }
  }
  storage() {
    var _a8;
    try {
      return (_a8 = globalThis.sessionStorage) != null ? _a8 : null;
    } catch {
      return null;
    }
  }
};
__name(_WorkBuddyPkceStore, "WorkBuddyPkceStore");
var WorkBuddyPkceStore = _WorkBuddyPkceStore;

// src/modules/auth/protocol.ts
init_miniprogram_url();
var AUTH_PATHS = {
  signUp: "/v1/signup",
  signIn: "/v1/signin",
  signInWithProvider: "/v1/signin/with/provider",
  /** 本地续期端点（服务端不转发上游）。 */
  token: "/v1/token",
  /** 小程序微信登录：本地认人后仍需用 custom 票据换取 TCB session。 */
  loginWechat: "/v1/login-wechat",
  /** 网页微信扫码：Relay 回调后换 Genie session。 */
  loginWechatWeb: "/v1/login-wechat-web",
  /** WorkBuddy 统一登录：Relay 回调后带 PKCE verifier 换 Genie session。 */
  loginWorkBuddy: "/v1/login-workbuddy",
  signOut: "/v1/user/signout",
  userMe: "/v1/user/me",
  /** 发码。 */
  verification: "/v1/verification",
  /** 验码，返回一次性的 verification_token（**不是**会话）。 */
  verificationVerify: "/v1/verification/verify",
  /** 忘记密码最终更新。 */
  resetPassword: "/v1/reset",
  /** 登录后改密的二次校验。 */
  sudo: "/v1/user/sudo",
  /** 登录后更新密码。 */
  userPassword: "/v1/user/password"
};
function parseSession(payload, receivedAt) {
  const raw = payload != null ? payload : {};
  const accessToken = typeof raw.access_token === "string" ? raw.access_token : "";
  if (!accessToken) {
    throw sessionShapeError("response has no access_token");
  }
  const refreshToken = typeof raw.refresh_token === "string" ? raw.refresh_token : "";
  const expiresInSec = typeof raw.expires_in === "number" ? raw.expires_in : 0;
  return {
    accessToken,
    refreshToken,
    expiresAt: receivedAt + expiresInSec * 1e3,
    user: userFromSessionPayload(raw)
  };
}
__name(parseSession, "parseSession");
function userFromSessionPayload(raw) {
  const isAnonymous = raw.is_anonymous === true;
  return {
    id: typeof raw.sub === "string" ? raw.sub : "",
    name: pickString(raw.name),
    avatarUrl: pickString(raw.avatar_url),
    isAnonymous,
    raw
  };
}
__name(userFromSessionPayload, "userFromSessionPayload");
function parseUser(payload) {
  var _a8, _b, _c;
  const raw = payload != null ? payload : {};
  const id = typeof raw.sub === "string" ? raw.sub : typeof raw.uid === "string" ? raw.uid : "";
  const metadata = (_a8 = raw.user_metadata) != null ? _a8 : {};
  return {
    id,
    email: (_b = pickString(raw.email)) != null ? _b : pickString(metadata.email),
    phone: (_c = pickString(raw.phone_number)) != null ? _c : pickString(raw.phone),
    name: pickString(raw.name),
    avatarUrl: pickString(raw.avatar_url),
    // 两处都判：上游在不同端点上用过不同字段表达匿名。
    isAnonymous: raw.is_anonymous === true || raw.scope === "anonymous",
    raw
  };
}
__name(parseUser, "parseUser");
function pickString(v) {
  return typeof v === "string" && v !== "" ? v : void 0;
}
__name(pickString, "pickString");
function normalizeHttpError(status, payload) {
  var _a8, _b, _c;
  const raw = payload != null ? payload : {};
  const code = typeof raw.error === "string" ? raw.error : void 0;
  const message = (_c = (_b = (_a8 = pickString(raw.error_description)) != null ? _a8 : pickString(raw.message)) != null ? _b : pickString(raw.msg)) != null ? _c : `HTTP ${status}`;
  return {
    kind: errorKind(status, code),
    message,
    status,
    code,
    cause: payload
  };
}
__name(normalizeHttpError, "normalizeHttpError");
function errorKind(status, code) {
  if (code === "invalid_grant") {
    return "unauthenticated";
  }
  switch (status) {
    case 400:
      return "invalid-request";
    case 401:
      return "unauthenticated";
    case 403:
      return "permission-denied";
    case 404:
      return "not-found";
    case 429:
      return "rate-limited";
    case 501:
      return "unimplemented";
    case 503:
      return "backend-unavailable";
    default:
      return status >= 500 ? "backend-unavailable" : "unknown";
  }
}
__name(errorKind, "errorKind");
function normalizeNetworkError(err) {
  const message = err instanceof Error ? err.message : String(err);
  return {
    kind: "network",
    message: `request failed before a response was received: ${message}`,
    status: 0,
    cause: err
  };
}
__name(normalizeNetworkError, "normalizeNetworkError");
function sessionShapeError(reason) {
  const e = new Error(`workbuddy-cloud auth: ${reason}`);
  e.kind = "unknown";
  e.status = 0;
  return e;
}
__name(sessionShapeError, "sessionShapeError");

// src/modules/auth/session-manager.ts
init_miniprogram_url();
var EXPIRY_MARGIN_MS = 9e4;
var REFRESH_FAILURE_COOLDOWN_MS = 6e4;
var _SessionManager = class _SessionManager {
  constructor(opts) {
    __publicField(this, "store");
    __publicField(this, "refresh");
    __publicField(this, "emit");
    __publicField(this, "isCredentialsRejected");
    __publicField(this, "now");
    /** 在途的续期。并发调用共享同一个 Promise（第 1 层保护）。 */
    __publicField(this, "inflight", null);
    /**
     * 登出计数（第 3 层保护）。
     *
     * 在任何 await **之前**同步自增，续期流程在写入前后各读一次；若期间发生过
     * 登出，就把刚拿到的新会话丢弃。否则「用户点了登出 + 一个在途续期」会让
     * 用户在登出之后被重新登入。
     */
    __publicField(this, "signOutEpoch", 0);
    /** 上次续期失败的句柄与时刻（第 4 层保护）。 */
    __publicField(this, "lastFailure", null);
    var _a8;
    this.store = opts.store;
    this.refresh = opts.refresh;
    this.emit = opts.emit;
    this.isCredentialsRejected = opts.isCredentialsRejected;
    this.now = (_a8 = opts.now) != null ? _a8 : Date.now;
  }
  /** 读当前会话（不触发续期）。总是从 storage 重读，见 session-store.ts。 */
  peek() {
    return this.store.read();
  }
  /**
   * 取一个**当前可用**的会话，必要时先续期。
   *
   * 这是 database / storage 请求路径上的入口，所以它必须「要么给一个能用的
   * token，要么给 null」，不能给一个即将过期的 token 让调用方去撞 401。
   */
  async ensure() {
    const current = this.store.read();
    if (!current) {
      return null;
    }
    if (!this.isExpiring(current)) {
      return current;
    }
    if (!current.refreshToken) {
      return this.abandon();
    }
    return this.refreshOnce(current);
  }
  /**
   * 强制续期一次，无论是否临近过期。
   *
   * 对外暴露给 `auth.refreshSession()` —— 应用有时需要在拿到「权限刚变更」
   * 的信号后立刻换一份新 token。
   */
  async forceRefresh() {
    const current = this.store.read();
    if (!(current == null ? void 0 : current.refreshToken)) {
      return null;
    }
    return this.refreshOnce(current, {
      ignoreCooldown: true
    });
  }
  /** 登录成功后落盘并广播。 */
  commitSignIn(session) {
    this.lastFailure = null;
    this.store.write(session);
    this.emit("SIGNED_IN", session);
    return session;
  }
  /** 用户信息变更（如匿名升级重签了 token）后落盘并广播。 */
  commitUserUpdate(session) {
    this.store.write(session);
    this.emit("USER_UPDATED", session);
    return session;
  }
  /**
   * 清掉本地会话并广播登出。
   *
   * 同步自增 epoch 是关键（见 signOutEpoch 注释）——必须在任何 await 之前。
   */
  clear() {
    this.signOutEpoch += 1;
    this.lastFailure = null;
    this.inflight = null;
    this.store.clear();
    this.emit("SIGNED_OUT", null);
  }
  /** 是否已进入「该续期」的窗口。 */
  isExpiring(session) {
    if (typeof session.expiresAt !== "number") {
      return true;
    }
    return session.expiresAt - this.now() < EXPIRY_MARGIN_MS;
  }
  /** 单飞入口：在途则复用，否则起一次。 */
  refreshOnce(current, opts = {}) {
    if (this.inflight) {
      return this.inflight;
    }
    if (!opts.ignoreCooldown && this.inCooldown(current.refreshToken)) {
      return Promise.resolve(null);
    }
    const task = this.doRefresh(current).finally(() => {
      this.inflight = null;
    });
    this.inflight = task;
    return task;
  }
  inCooldown(refreshToken) {
    const f = this.lastFailure;
    return f !== null && f.token === refreshToken && this.now() - f.at < REFRESH_FAILURE_COOLDOWN_MS;
  }
  /** 实际续期，含 commit guard 与 epoch 复核。 */
  async doRefresh(current) {
    const epochBefore = this.signOutEpoch;
    const handleBefore = current.refreshToken;
    let next;
    try {
      next = await this.refresh(handleBefore);
    } catch (err) {
      return this.onRefreshFailed(handleBefore, err);
    }
    if (this.signOutEpoch !== epochBefore) {
      this.store.clear();
      return null;
    }
    const latest = this.store.read();
    if (latest && latest.refreshToken !== handleBefore) {
      return latest;
    }
    this.lastFailure = null;
    this.store.write(next);
    this.emit("TOKEN_REFRESHED", next);
    return next;
  }
  /**
   * 续期失败的分流。
   *
   * 「凭据被拒」与「网络/服务端故障」必须区别对待：
   *  - 凭据被拒（invalid_grant）→ 会话已不可能恢复，清掉并广播登出。留着它
   *    只会让每个后续请求都先白跑一次续期。
   *  - 其它（网络、5xx）→ **保留**会话，只记冷却。这类失败会自愈，清掉等于
   *    把一次网络抖动升级成用户被强制登出。
   */
  onRefreshFailed(handle, err) {
    if (this.isCredentialsRejected(err)) {
      return this.abandon();
    }
    this.lastFailure = {
      token: handle,
      at: this.now()
    };
    return null;
  }
  /** 会话已不可恢复：清本地并广播登出。 */
  abandon() {
    this.store.clear();
    this.lastFailure = null;
    this.emit("SIGNED_OUT", null);
    return null;
  }
};
__name(_SessionManager, "SessionManager");
var SessionManager = _SessionManager;

// src/modules/auth/session-store.ts
init_miniprogram_url();
var STORAGE_KEY_PREFIX = "workbuddy-cloud.session.";
function createMemoryStorage() {
  const map = /* @__PURE__ */ new Map();
  return {
    getItem: /* @__PURE__ */ __name((k) => {
      var _a8;
      return (_a8 = map.get(k)) != null ? _a8 : null;
    }, "getItem"),
    setItem: /* @__PURE__ */ __name((k, v) => void map.set(k, v), "setItem"),
    removeItem: /* @__PURE__ */ __name((k) => void map.delete(k), "removeItem")
  };
}
__name(createMemoryStorage, "createMemoryStorage");
function resolveStorage(candidate) {
  if (candidate) {
    return candidate;
  }
  try {
    const probe = "__workbuddy_probe__";
    globalThis.localStorage.setItem(probe, "1");
    globalThis.localStorage.removeItem(probe);
    return globalThis.localStorage;
  } catch {
    return createMemoryStorage();
  }
}
__name(resolveStorage, "resolveStorage");
var _SessionStore = class _SessionStore {
  constructor(storage, publishableKey) {
    __publicField(this, "storage");
    __publicField(this, "key");
    this.storage = storage;
    this.key = STORAGE_KEY_PREFIX + publishableKey;
  }
  /**
   * 读当前会话。
   *
   * 任何解析失败都当作「没有会话」并**顺手清掉**那条脏记录：残留的坏 JSON
   * 会让每次读都失败一次，而用户永远不知道该去清哪个 key。
   * 触发场景真实存在 —— 用户手改 localStorage、SDK 升级换了存储格式。
   */
  read() {
    let raw;
    try {
      raw = this.storage.getItem(this.key);
    } catch {
      return null;
    }
    if (!raw) {
      return null;
    }
    try {
      const parsed = JSON.parse(raw);
      return isStoredSession(parsed) ? parsed : this.discard();
    } catch {
      return this.discard();
    }
  }
  write(session) {
    try {
      this.storage.setItem(this.key, JSON.stringify(session));
    } catch {
    }
  }
  clear() {
    try {
      this.storage.removeItem(this.key);
    } catch {
    }
  }
  discard() {
    this.clear();
    return null;
  }
};
__name(_SessionStore, "SessionStore");
var SessionStore = _SessionStore;
function isStoredSession(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const s = value;
  return typeof s.accessToken === "string" && s.accessToken !== "" && typeof s.refreshToken === "string" && typeof s.expiresAt === "number" && !!s.user && typeof s.user === "object";
}
__name(isStoredSession, "isStoredSession");

// src/modules/auth/identifier.ts
init_miniprogram_url();
function resolveAuthIdentifier(credentials, operation) {
  var _a8, _b;
  const email = (_a8 = credentials.email) != null ? _a8 : "";
  const phone = (_b = credentials.phone) != null ? _b : "";
  if (Boolean(email) === Boolean(phone)) {
    return {
      data: null,
      error: {
        kind: "invalid-request",
        message: `${operation} requires exactly one of email or phone`,
        status: 0
      }
    };
  }
  return {
    data: email ? {
      kind: "email",
      value: email,
      username: email
    } : {
      kind: "phone",
      value: phone,
      username: normalizePhone(phone)
    },
    error: null
  };
}
__name(resolveAuthIdentifier, "resolveAuthIdentifier");
function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, "");
  let local = digits;
  if (local.startsWith("0086")) {
    local = local.slice(4);
  } else if (local.startsWith("86") && local.length === 13) {
    local = local.slice(2);
  }
  return /^1\d{10}$/.test(local) ? `+86 ${local}` : phone;
}
__name(normalizePhone, "normalizePhone");

// src/modules/auth/index.ts
var OAUTH_ERROR_MESSAGE_MAX = 200;
function truncateMessage(message, max) {
  const chars = Array.from(message);
  return chars.length <= max ? message : `${chars.slice(0, max).join("")}\u2026`;
}
__name(truncateMessage, "truncateMessage");
function oauthProviderRejectMessage(params) {
  const error = params.get("error");
  if (!error) {
    return null;
  }
  const description = params.get("error_description");
  const message = description ? `oauth provider rejected the request: ${error}: ${description}` : `oauth provider rejected the request: ${error}`;
  return truncateMessage(message, OAUTH_ERROR_MESSAGE_MAX);
}
__name(oauthProviderRejectMessage, "oauthProviderRejectMessage");
var _AuthModule = class _AuthModule {
  /**
   * @param fetch 必须是**不带 session provider** 的 fetch。
   *
   * 原因：本模块的 `/v1/token` 就是续期端点；若它走「取 token（必要时先续期）」
   * 那条出口，续期就会调用自己 —— 死锁。CloudBase 的 OAuth2Client 为同一个
   * 问题留了逃生口，注释里直接写了 "may cause deadlock during initialization"。
   * 装配见 client.ts。
   */
  constructor(config, fetch2, opts = {}) {
    __publicField(this, "fetch");
    /** 该模块的数据面基址。 */
    __publicField(this, "baseUrl");
    __publicField(this, "sessions");
    __publicField(this, "storage");
    __publicField(this, "oauthRelayBaseUrl");
    /** WorkBuddy PKCE 证明的暂存处，按应用隔离。 */
    __publicField(this, "workBuddyPkce");
    /**
     * 正在进行中的 WorkBuddy 兑换，按 state 单飞。
     *
     * 只靠 `isConsumed(state)` 挡不住**并发**：两次调用会在第一次写下成功标记之前
     * 都读到「未消费」，于是第二次拿不到已被清掉的 verifier，报
     * 「no local PKCE verifier」—— 登录其实成功了，却同时弹一条错误。
     * 应用侧只要在 StrictMode 下挂两个 effect，或路由守卫与入口各调一次，就会撞上。
     */
    __publicField(this, "workBuddyExchanges", /* @__PURE__ */ new Map());
    __publicField(this, "listeners", /* @__PURE__ */ new Map());
    __publicField(this, "nextListenerId", 1);
    this.fetch = fetch2;
    this.baseUrl = `${config.endpoint}${CLOUD_MODULE_PATHS.auth}`;
    this.oauthRelayBaseUrl = config.oauthRelayBaseUrl;
    this.storage = resolveStorage(opts.storage);
    this.workBuddyPkce = new WorkBuddyPkceStore(config.publishableKey);
    this.sessions = new SessionManager({
      store: new SessionStore(this.storage, config.publishableKey),
      refresh: /* @__PURE__ */ __name((handle) => this.exchangeRefreshHandle(handle), "refresh"),
      emit: /* @__PURE__ */ __name((event, session) => this.notify(event, session), "emit"),
      isCredentialsRejected: /* @__PURE__ */ __name((err) => isCloudError(err) && rejectedCredentials(err), "isCredentialsRejected")
    });
  }
  // ------------------------------------------------------------------
  // 供 client.ts 装配共享 fetch 用
  // ------------------------------------------------------------------
  /**
   * 取一个当前可用的 access token，必要时先续期。无会话返回 undefined。
   *
   * database / storage 的每个请求都会调它 —— 返回 undefined 表示匿名，
   * 那是合法状态不是错误（服务端按 anon 角色处理）。
   */
  async getAccessToken() {
    const session = await this.sessions.ensure();
    return session == null ? void 0 : session.accessToken;
  }
  // ------------------------------------------------------------------
  // 登录
  // ------------------------------------------------------------------
  /** 邮箱或手机号 + 密码登录。 */
  async signInWithPassword(credentials) {
    if (!credentials.password) {
      return fail(badRequest("signInWithPassword requires a password"));
    }
    const identifier = resolveAuthIdentifier(credentials, "signInWithPassword");
    if (identifier.error) {
      return fail(identifier.error);
    }
    return this.postForSession(AUTH_PATHS.signIn, {
      username: identifier.data.username,
      password: credentials.password
    });
  }
  /**
   * 小程序 wx.login 的 code 换 Genie session。
   * 试用与正式是两套独立小程序，必须带当前账号的 appid
   *（`wx.getAccountInfoSync().miniProgram.appId`）。
   * 成功后 session.user.id 为 TCB custom uid：`wx:` + 微信 openid（长度需 ≤32）。
   */
  async signInWithWechat(code, appid) {
    if (!code) {
      return fail(badRequest("signInWithWechat requires code"));
    }
    if (!appid) {
      return fail(badRequest("signInWithWechat requires appid"));
    }
    return this.postForSession(AUTH_PATHS.loginWechat, {
      code,
      appid
    });
  }
  /**
   * 注册。
   *
   * 上游要求先完成验证码验证，所以必须带一个 `verificationToken`（来自
   * `verifyOtp`）。只有用户名+密码的注册会被上游明确拒绝。
   *
   * 账号标识用 `email` 或 `phone`（二选一，与发码渠道一致）。
   */
  async signUp(credentials) {
    const identifier = resolveAuthIdentifier(credentials, "signUp");
    if (identifier.error) {
      return fail(identifier.error);
    }
    if (!credentials.verificationToken) {
      return fail(badRequest("signUp requires a verificationToken; run sendOtp + verifyOtp first (the provider rejects username+password-only signup)"));
    }
    const body = {
      verification_token: credentials.verificationToken
    };
    if (identifier.data.kind === "phone") {
      body.phone_number = identifier.data.username;
    } else {
      body.email = identifier.data.username;
    }
    if (credentials.password) body.password = credentials.password;
    return this.postForSession(AUTH_PATHS.signUp, body);
  }
  /**
   * 发验证码（邮箱或短信，由 `credentials` 传的字段决定）。
   *
   * 这一步**不产生会话**，只返回一个 `verificationId`。发码由上游完成，
   * 我方不实现发码逻辑。
   *
   * 返回的 `isExistingUser` 决定验码之后走登录还是注册 —— 该判断由上游给出，
   * SDK 不猜。
   *
   * 两条渠道的请求体差异是刻意的（runtime-auth-design §3.1）：
   * - 邮箱：`{ email, usage: 'email' }`，与上游 `VerificationUsage.EMAIL` 的值一致，区分大小写。
   * - 手机：`{ phone_number, target: 'ANY' }` —— **不带 `usage`**（普通短信登录
   *   发码时省略即可，上游没有对应的短信枚举值），`target: 'ANY'` 表示新老用户
   *   都允许发码。
   */
  async sendOtp(credentials) {
    var _a8;
    const identifier = resolveAuthIdentifier(credentials, "sendOtp");
    if (identifier.error) {
      return fail(identifier.error);
    }
    const body = {};
    if (identifier.data.kind === "phone") {
      body.phone_number = identifier.data.username;
      body.target = "ANY";
    } else {
      body.email = identifier.data.username;
      body.usage = "email";
      if (credentials.emailRedirectTo) {
        body.email_redirect_to = credentials.emailRedirectTo;
      }
    }
    const res = await this.request(AUTH_PATHS.verification, {
      method: "POST",
      body
    });
    if (res.error) {
      return fail(res.error);
    }
    const payload = (_a8 = res.data) != null ? _a8 : {};
    const verificationId = typeof payload.verification_id === "string" ? payload.verification_id : "";
    if (!verificationId) {
      return fail(badRequest("provider returned no verification_id"));
    }
    return ok({
      verificationId,
      isExistingUser: payload.is_user === true
    });
  }
  /** gotrue 风格的 OTP 入口：发码后由 challenge.verify 完成登录。 */
  async signInWithOtp(credentials) {
    const resolved = resolveAuthIdentifier(credentials, "signInWithOtp");
    if (resolved.error) {
      return fail(resolved.error);
    }
    const sent = await this.sendOtp(credentials);
    if (sent.error) {
      return fail(sent.error);
    }
    const { verificationId, isExistingUser } = sent.data;
    const identifier = resolved.data.kind === "phone" ? {
      phone: resolved.data.username
    } : {
      email: resolved.data.username
    };
    return ok({
      verificationId,
      isExistingUser,
      isUser: isExistingUser,
      verify: /* @__PURE__ */ __name(({ token, password }) => this.verifyOtp({
        verificationId,
        token,
        ...identifier,
        isExistingUser,
        password
      }), "verify")
    });
  }
  /**
   * 验码并登录（或注册后登录）。
   *
   * 两步：先用验证码换一个**一次性** `verification_token`，再用它换会话。
   * 中间那个 token 不是会话 —— 拿它当 Bearer 会被拒。
   *
   * 走登录还是注册由 `isExistingUser` 决定（`sendOtp` 的返回值）。刻意不做
   * 「先试登录失败再试注册」的兜底：那会把「密码错」这类真实错误掩盖成一次
   * 莫名的注册尝试。
   *
   * 登录侧邮箱与手机号共用 `username` 字段 —— 上游 `SignInRequest.username`
   * 承载邮箱/手机/用户名三种形态（runtime-auth-design §3.2）。
   */
  async verifyOtp(params) {
    var _a8;
    const identifier = resolveAuthIdentifier(params, "verifyOtp");
    if (identifier.error) {
      return fail(identifier.error);
    }
    if (!params.verificationId || !params.token) {
      return fail(badRequest("verifyOtp requires verificationId and token"));
    }
    const verified = await this.request(AUTH_PATHS.verificationVerify, {
      method: "POST",
      body: {
        verification_id: params.verificationId,
        verification_code: params.token
      }
    });
    if (verified.error) {
      return fail(verified.error);
    }
    const vt = (_a8 = verified.data) != null ? _a8 : {};
    const verificationToken = typeof vt.verification_token === "string" ? vt.verification_token : "";
    if (!verificationToken) {
      return fail(badRequest("provider returned no verification_token"));
    }
    if (params.isExistingUser) {
      return this.postForSession(AUTH_PATHS.signIn, {
        username: identifier.data.username,
        verification_token: verificationToken
      });
    }
    const signUpCredentials = identifier.data.kind === "phone" ? {
      phone: identifier.data.value,
      password: params.password
    } : {
      email: identifier.data.value,
      password: params.password
    };
    return this.signUp({
      ...signUpCredentials,
      verificationToken
    });
  }
  // ------------------------------------------------------------------
  // OAuth
  // ------------------------------------------------------------------
  /**
   * 发起第三方登录，返回该把用户送去的地址。
   *
   * 走 Cloud Backend Service OAuth Relay。IdP 回调白名单只登记平台统一域名。
   * SDK 不自己跳转：返回 url 交调用方 `location.assign`。
   *
   * `google` 已下线，仅存量应用；新应用用 `wechat` 做网页扫码登录，或用
   * `workbuddy` 做 WorkBuddy 账号登录。
   *
   * `workbuddy` 会在本地生成 PKCE 证明并存入当前标签页的 sessionStorage，所以
   * **必须由用户手势触发同一标签页的跳转**：另开标签页或新窗口打开返回的 url，
   * 证明留在原标签页里，回调页读不到它，兑换必然失败。
   */
  async signInWithOAuth(options) {
    var _a8;
    if (!this.oauthRelayBaseUrl) {
      return fail(badRequest("signInWithOAuth requires oauthRelayBaseUrl"));
    }
    if (options.provider !== "google" && options.provider !== "wechat" && options.provider !== "workbuddy") {
      return fail(badRequest("\u5F53\u524D SDK \u4E0D\u652F\u6301\u8BE5\u767B\u5F55\u65B9\u5F0F\uFF0C\u8BF7\u68C0\u67E5 SDK \u7248\u672C\u4E0E\u767B\u5F55\u914D\u7F6E\u3002"));
    }
    const redirectTo = (_a8 = options.redirectTo) != null ? _a8 : currentPageUrl();
    if (!redirectTo) {
      return fail(badRequest("signInWithOAuth requires redirectTo outside a browser environment"));
    }
    return this.startRelayOAuth(options, redirectTo);
  }
  /** 回调输入的 query 归一：接受完整 URL 或裸 query。 */
  parseCallbackQuery(input) {
    try {
      const query = /^https?:\/\//i.test(input) ? new import_url.default(input).search : input;
      return ok(new import_url_search_params.default(query));
    } catch {
      return fail(badRequest("oauth callback URL is invalid"));
    }
  }
  /**
   * 完成第三方登录：读回调 URL 上的参数换会话。
   *
   * 在回调落地页调一次即可。`code` 缺失时返回 `null` 数据而**不是**错误 ——
   * 落地页可能被直接访问（用户收藏了它），那不是失败。
   *
   * @deprecated Google 登录已下线，新应用不应再调用该方法。
   */
  async handleOAuthCallback(search) {
    var _a8, _b;
    const parsed = this.parseCallbackQuery(search != null ? search : currentPageSearch());
    if (parsed.error || !parsed.data) {
      return fail((_a8 = parsed.error) != null ? _a8 : badRequest("oauth callback URL is invalid"));
    }
    const params = parsed.data;
    const oauthError = oauthProviderRejectMessage(params);
    if (oauthError) {
      return fail({
        kind: "unauthenticated",
        message: oauthError,
        status: 0
      });
    }
    const code = params.get("code");
    if (!code) {
      return ok(null);
    }
    const state = (_b = params.get("state")) != null ? _b : "";
    if (!state) {
      return fail(badRequest("oauth callback requires state"));
    }
    const providerId = params.get("provider_id");
    if (providerId !== "custom-oauth") {
      return fail(badRequest("oauth callback requires provider_id=custom-oauth"));
    }
    const body = {
      provider_id: providerId,
      provider_code: code,
      state,
      provider_params: {
        state
      }
    };
    return this.postForSession(AUTH_PATHS.signInWithProvider, body);
  }
  /**
   * 网页微信扫码回调：用 Relay 带回的 code/state 换 Genie session。
   *
   * 仅用于 **微信扫码** 落地页。Google 存量应用必须继续调用
   * `handleOAuthCallback`（custom-oauth 路径）。两者不可互换：本方法会拒绝
   * `provider != "wechat"` 的回调，报错看起来像前端传错参数。
   */
  async handleWechatWebCallback(search) {
    var _a8, _b;
    const parsed = this.parseCallbackQuery(search != null ? search : currentPageSearch());
    if (parsed.error || !parsed.data) {
      return fail((_a8 = parsed.error) != null ? _a8 : badRequest("oauth callback URL is invalid"));
    }
    const params = parsed.data;
    const oauthError = oauthProviderRejectMessage(params);
    if (oauthError) {
      return fail({
        kind: "unauthenticated",
        message: oauthError,
        status: 0
      });
    }
    const code = params.get("code");
    if (!code) {
      return ok(null);
    }
    const state = (_b = params.get("state")) != null ? _b : "";
    if (!state) {
      return fail(badRequest("oauth callback requires state"));
    }
    const provider = params.get("provider");
    if (provider && provider !== "wechat") {
      return fail(badRequest("wechat callback requires provider=wechat"));
    }
    if (params.get("provider_id") === "custom-oauth") {
      return fail(badRequest("wechat callback must not use provider_id=custom-oauth"));
    }
    return this.postForSession(AUTH_PATHS.loginWechatWeb, {
      code,
      state
    });
  }
  /**
   * WorkBuddy 统一登录回调：用 Relay 带回的 code/state 加本地 verifier 换
   * Genie session。
   *
   * ---------------------------------------------------------------------------
   * 在**登录守卫之前**无条件调用一次
   * ---------------------------------------------------------------------------
   *
   * 回调落地的那一刻还没有会话，守卫先跑就会把用户弹回登录页、顺手把 URL 上的
   * code/state 丢掉，表现是「点了登录转一圈又回到登录页」。
   *
   * 返回 `{ data: null, error: null }` 表示**这不是一次 WorkBuddy 回调**（普通
   * 页面访问、用户收藏了落地页），不是失败：照常渲染未登录状态即可。
   *
   * 失败一律不建会话：用户在授权页点了拒绝、本地证明缺失（换了标签页、清了
   * sessionStorage）、回调参数不合法，都只返回 error。
   *
   * 兑换成功后 URL 上的 `code` / `state` / `provider` 应由调用方清掉
   * （`history.replaceState`），业务参数如 `sharecode` 要保留。清理前后重复调用
   * 本方法都不会再次兑换：并发的那次合流到同一个 promise、拿到同一个结果，
   * 串行的那次按「成功已记下」返回空。
   */
  async handleWorkBuddyCallback(search) {
    var _a8, _b;
    const parsed = this.parseCallbackQuery(search != null ? search : currentPageSearch());
    if (parsed.error || !parsed.data) {
      return fail((_a8 = parsed.error) != null ? _a8 : badRequest("oauth callback URL is invalid"));
    }
    const params = parsed.data;
    const provider = params.get("provider");
    if (provider && provider !== "workbuddy") {
      return ok(null);
    }
    const oauthError = oauthProviderRejectMessage(params);
    if (oauthError) {
      this.workBuddyPkce.clearVerifier();
      return fail({
        kind: "unauthenticated",
        message: oauthError,
        status: 0
      });
    }
    const code = params.get("code");
    if (!code) {
      return ok(null);
    }
    const state = (_b = params.get("state")) != null ? _b : "";
    if (!state) {
      return fail(badRequest("workbuddy callback requires state"));
    }
    if (params.get("provider_id") === "custom-oauth") {
      return fail(badRequest("workbuddy callback must not use provider_id=custom-oauth"));
    }
    if (this.workBuddyPkce.isConsumed(state)) {
      return ok(null);
    }
    const inflight = this.workBuddyExchanges.get(state);
    if (inflight) {
      return inflight;
    }
    const verifier = this.workBuddyPkce.readVerifier();
    if (!verifier) {
      return fail(badRequest("workbuddy callback has no local PKCE verifier; sign in again in this tab"));
    }
    this.workBuddyPkce.clearVerifier();
    const task = this.exchangeWorkBuddyCode(code, state, verifier);
    this.workBuddyExchanges.set(state, task);
    try {
      return await task;
    } finally {
      this.workBuddyExchanges.delete(state);
    }
  }
  /** 真正那一次兑换，单飞逻辑在 {@link handleWorkBuddyCallback}。 */
  async exchangeWorkBuddyCode(code, state, verifier) {
    const result = await this.postForSession(AUTH_PATHS.loginWorkBuddy, {
      code,
      state,
      code_verifier: verifier
    });
    if (result.data) {
      this.workBuddyPkce.markConsumed(state);
    }
    return result;
  }
  /** 忘记密码：发码，验证码通过后更新密码并自动登录。 */
  async resetPasswordForEmail(email) {
    var _a8;
    if (!email) {
      return fail(badRequest("resetPasswordForEmail requires email"));
    }
    const sent = await this.request(AUTH_PATHS.verification, {
      method: "POST",
      body: {
        email,
        usage: "PASSWORD_RESET",
        target: "USER"
      }
    });
    if (sent.error) {
      return fail(sent.error);
    }
    const payload = (_a8 = sent.data) != null ? _a8 : {};
    const verificationId = typeof payload.verification_id === "string" ? payload.verification_id : "";
    if (!verificationId) {
      return fail(badRequest("provider returned no verification_id"));
    }
    return ok({
      updateUser: /* @__PURE__ */ __name(async ({ nonce, password }) => {
        var _a9;
        const verified = await this.request(AUTH_PATHS.verificationVerify, {
          method: "POST",
          body: {
            verification_id: verificationId,
            verification_code: nonce
          }
        });
        if (verified.error) {
          return fail(verified.error);
        }
        const verifiedPayload = (_a9 = verified.data) != null ? _a9 : {};
        const verificationToken = typeof verifiedPayload.verification_token === "string" ? verifiedPayload.verification_token : "";
        if (!verificationToken) {
          return fail(badRequest("provider returned no verification_token"));
        }
        const reset = await this.request(AUTH_PATHS.resetPassword, {
          method: "POST",
          body: {
            email,
            new_password: password,
            verification_token: verificationToken
          }
        });
        if (reset.error) {
          return fail(reset.error);
        }
        const signedIn = await this.signInWithPassword({
          email,
          password
        });
        if (!signedIn.error) {
          this.notify("PASSWORD_RECOVERY", signedIn.data);
        }
        return signedIn;
      }, "updateUser")
    });
  }
  /** 登录后使用旧密码进行 sudo 校验并更新密码。 */
  async resetPasswordForOld(credentials) {
    var _a8, _b;
    const token = await this.getAccessToken();
    if (!token) {
      return fail({
        kind: "unauthenticated",
        message: "no active session",
        status: 0
      });
    }
    const sudo = await this.request(AUTH_PATHS.sudo, {
      method: "POST",
      token,
      body: {
        password: credentials.oldPassword
      }
    });
    if (sudo.error) {
      return fail(sudo.error);
    }
    const payload = (_a8 = sudo.data) != null ? _a8 : {};
    const sudoToken = typeof payload.sudo_token === "string" ? payload.sudo_token : "";
    if (!sudoToken) {
      return fail(badRequest("provider returned no sudo_token"));
    }
    const updated = await this.request(AUTH_PATHS.userPassword, {
      method: "PATCH",
      token,
      body: {
        sudo_token: sudoToken,
        new_password: credentials.newPassword
      }
    });
    if (updated.error) {
      return fail(updated.error);
    }
    const session = await this.getSession();
    if (session.data) {
      this.notify("USER_UPDATED", session.data);
      return ok(session.data);
    }
    return fail((_b = session.error) != null ? _b : {
      kind: "unauthenticated",
      message: "no active session",
      status: 0
    });
  }
  // ------------------------------------------------------------------
  // 会话
  // ------------------------------------------------------------------
  /**
   * 读当前会话。
   *
   * 会在临近过期时**顺手续期** —— 只读本地不续期的话，调用方拿到一个还剩
   * 3 秒有效期的 token 去发请求，到服务端就已经过期了。
   */
  async getSession() {
    try {
      return ok(await this.sessions.ensure());
    } catch (err) {
      return fail(isCloudError(err) ? err : normalizeNetworkError(err));
    }
  }
  /** 强制续期一次，不管是否临近过期。 */
  async refreshSession() {
    try {
      return ok(await this.sessions.forceRefresh());
    } catch (err) {
      return fail(isCloudError(err) ? err : normalizeNetworkError(err));
    }
  }
  /**
   * 读当前用户。
   *
   * 会发请求（`/v1/user/me`）而不是读本地 session —— 后者的 user 字段来自
   * 登录那一刻，可能已过时（别处改了昵称、或匿名已升级为实名）。
   */
  async getUser() {
    const token = await this.getAccessToken();
    if (!token) {
      return fail({
        kind: "unauthenticated",
        message: "no active session",
        status: 0
      });
    }
    const res = await this.request(AUTH_PATHS.userMe, {
      method: "GET",
      token
    });
    if (res.error) {
      if (rejectedCredentials(res.error)) {
        this.sessions.clear();
      }
      return fail(res.error);
    }
    return ok(parseUser(res.data));
  }
  /**
   * 登出。
   *
   * 无论服务端返回什么都清本地：服务端侧是**无条件销毁**的（转发上游之后就
   * 销毁，不看上游成败），本地留着只会让界面显示一个已经不能用的登录态。
   * 断网时也必须能登出。
   */
  async signOut() {
    const session = this.sessions.peek();
    if (session == null ? void 0 : session.accessToken) {
      await this.request(AUTH_PATHS.signOut, {
        method: "POST",
        body: {},
        token: session.accessToken
      });
    }
    this.sessions.clear();
    return ok(null);
  }
  /**
   * 订阅登录态变化。返回取消订阅函数。
   *
   * 订阅时会**立即**回放一次 `INITIAL_SESSION`：没有它，调用方无法区分
   * 「还没初始化完」与「初始化完了但未登录」，首屏会闪一下登录页。
   */
  onAuthStateChange(callback) {
    const id = this.nextListenerId++;
    this.listeners.set(id, callback);
    safeInvoke(callback, "INITIAL_SESSION", this.sessions.peek());
    return () => void this.listeners.delete(id);
  }
  // ------------------------------------------------------------------
  // 内部
  // ------------------------------------------------------------------
  /**
   * 拼出平台 Relay 授权地址；state 由 Relay 自己签发、校验并一次性消费。
   */
  async startRelayOAuth(options, redirectTo) {
    var _a8;
    let callback;
    try {
      callback = new import_url.default(redirectTo);
    } catch {
      return fail(badRequest("signInWithOAuth requires an absolute redirectTo URL"));
    }
    const relay = new import_url.default(`${this.oauthRelayBaseUrl}/authorize`);
    relay.searchParams.set("provider", options.provider);
    relay.searchParams.set("callback_url", callback.toString());
    if (options.provider === "workbuddy") {
      const proof = await this.createWorkBuddyProof();
      if (proof.error || !proof.data) {
        return fail((_a8 = proof.error) != null ? _a8 : badRequest("signInWithOAuth could not create PKCE"));
      }
      relay.searchParams.set("code_challenge", proof.data);
      relay.searchParams.set("code_challenge_method", "S256");
    }
    return ok({
      url: relay.toString()
    });
  }
  /**
   * 生成并暂存 WorkBuddy 的 PKCE 证明，返回要发给 Relay 的 challenge。
   *
   * 先存 verifier 再返回 challenge：顺序反了的话，调用方可能在 verifier 落盘前
   * 就跳走，回调页读到空值。
   */
  async createWorkBuddyProof() {
    if (!hasWebCrypto()) {
      return fail(badRequest("workbuddy sign-in requires WebCrypto; it is unavailable in this runtime (an insecure http:// origin disables it \u2014 serve the app over https)"));
    }
    if (!this.workBuddyPkce.usable()) {
      return fail(badRequest("workbuddy sign-in requires sessionStorage to keep the PKCE verifier across the redirect; it is unavailable in this runtime"));
    }
    let verifier;
    let challenge;
    try {
      verifier = createCodeVerifier();
      challenge = await computeS256Challenge(verifier);
    } catch (err) {
      return fail(badRequest(`workbuddy sign-in could not create a PKCE proof: ${describeError(err)}`));
    }
    if (!this.workBuddyPkce.saveVerifier(verifier)) {
      return fail(badRequest("workbuddy sign-in could not persist the PKCE verifier"));
    }
    return ok(challenge);
  }
  /** 用我方句柄换新会话。这是 SessionManager 注入的续期执行体。 */
  async exchangeRefreshHandle(handle) {
    const res = await this.request(AUTH_PATHS.token, {
      method: "POST",
      body: {
        grant_type: "refresh_token",
        refresh_token: handle
      }
    });
    if (res.error) {
      throw res.error;
    }
    return parseSession(res.data, Date.now());
  }
  /** POST 一个换签端点并把响应解析成会话。 */
  async postForSession(path, body, opts = {}) {
    const res = await this.request(path, {
      method: "POST",
      body,
      headers: opts.headers
    });
    if (res.error) {
      return fail(res.error);
    }
    try {
      return ok(this.sessions.commitSignIn(parseSession(res.data, Date.now())));
    } catch (err) {
      return fail(isCloudError(err) ? err : normalizeNetworkError(err));
    }
  }
  /** 发一次 auth 请求并归一错误。 */
  async request(path, init) {
    const headers = {
      ...init.headers
    };
    if (init.body !== void 0) {
      headers["Content-Type"] = "application/json";
    }
    if (init.token) {
      headers.Authorization = `Bearer ${init.token}`;
    }
    let response;
    try {
      response = await this.fetch(this.baseUrl + path, {
        method: init.method,
        headers,
        body: init.body === void 0 ? void 0 : JSON.stringify(init.body)
      });
    } catch (err) {
      return fail(normalizeNetworkError(err));
    }
    const payload = await readBody(response);
    if (!response.ok) {
      return fail(normalizeHttpError(response.status, payload));
    }
    return ok(payload);
  }
  /** 广播事件。单个监听器抛错不能影响其它监听器与主流程。 */
  notify(event, session) {
    for (const cb of this.listeners.values()) {
      safeInvoke(cb, event, session);
    }
  }
};
__name(_AuthModule, "AuthModule");
var AuthModule = _AuthModule;
function ok(data) {
  return {
    data,
    error: null
  };
}
__name(ok, "ok");
function fail(error) {
  return {
    data: null,
    error
  };
}
__name(fail, "fail");
function badRequest(message) {
  return {
    kind: "invalid-request",
    message,
    status: 0
  };
}
__name(badRequest, "badRequest");
function describeError(err) {
  return truncateMessage(err instanceof Error ? err.message : String(err), OAUTH_ERROR_MESSAGE_MAX);
}
__name(describeError, "describeError");
function isCloudError(v) {
  return !!v && typeof v === "object" && typeof v.kind === "string";
}
__name(isCloudError, "isCloudError");
function rejectedCredentials(error) {
  return error.kind === "unauthenticated" || error.code === "invalid_grant";
}
__name(rejectedCredentials, "rejectedCredentials");
async function readBody(response) {
  const text = await response.text();
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    return {
      message: text
    };
  }
}
__name(readBody, "readBody");
function safeInvoke(cb, event, session) {
  try {
    cb(event, session);
  } catch {
  }
}
__name(safeInvoke, "safeInvoke");
function currentPageUrl() {
  const loc = globalThis.location;
  return loc ? loc.origin + loc.pathname : "";
}
__name(currentPageUrl, "currentPageUrl");
function currentPageSearch() {
  var _a8, _b;
  return (_b = (_a8 = globalThis.location) == null ? void 0 : _a8.search) != null ? _b : "";
}
__name(currentPageSearch, "currentPageSearch");

// src/modules/database.ts
init_miniprogram_url();

// src/vendor/postgrest/index.ts
init_miniprogram_url();

// src/vendor/postgrest/PostgrestClient.ts
init_miniprogram_url();

// src/vendor/postgrest/PostgrestQueryBuilder.ts
init_miniprogram_url();

// src/vendor/postgrest/PostgrestFilterBuilder.ts
init_miniprogram_url();

// src/vendor/postgrest/PostgrestTransformBuilder.ts
init_miniprogram_url();

// src/vendor/postgrest/PostgrestBuilder.ts
init_miniprogram_url();

// src/vendor/postgrest/types/common/common.ts
init_miniprogram_url();
var DEFAULT_MAX_RETRIES = 3;
var getRetryDelay = /* @__PURE__ */ __name((attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 3e4), "getRetryDelay");
var RETRYABLE_STATUS_CODES = [
  520,
  503
];
var RETRYABLE_METHODS = [
  "GET",
  "HEAD",
  "OPTIONS"
];

// src/vendor/postgrest/PostgrestError.ts
init_miniprogram_url();
var _PostgrestError = class _PostgrestError extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(context) {
    super(context.message);
    __publicField(this, "details");
    __publicField(this, "hint");
    __publicField(this, "code");
    this.name = "PostgrestError";
    this.details = context.details;
    this.hint = context.hint;
    this.code = context.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
__name(_PostgrestError, "PostgrestError");
var PostgrestError = _PostgrestError;

// src/vendor/postgrest/PostgrestBuilder.ts
function sleep(ms, signal) {
  return new Promise((resolve) => {
    if (signal == null ? void 0 : signal.aborted) {
      resolve();
      return;
    }
    const id = setTimeout(() => {
      signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    function onAbort() {
      clearTimeout(id);
      resolve();
    }
    __name(onAbort, "onAbort");
    signal == null ? void 0 : signal.addEventListener("abort", onAbort);
  });
}
__name(sleep, "sleep");
function shouldRetry(method, status, attemptCount, retryEnabled) {
  if (!retryEnabled || attemptCount >= DEFAULT_MAX_RETRIES) {
    return false;
  }
  if (!RETRYABLE_METHODS.includes(method)) {
    return false;
  }
  if (!RETRYABLE_STATUS_CODES.includes(status)) {
    return false;
  }
  return true;
}
__name(shouldRetry, "shouldRetry");
var _PostgrestBuilder = class _PostgrestBuilder {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @category Database
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'your-publishable-key' }) }
  * )
  * ```
  */
  constructor(builder) {
    __publicField(this, "method");
    __publicField(this, "url");
    __publicField(this, "headers");
    __publicField(this, "schema");
    __publicField(this, "body");
    __publicField(this, "shouldThrowOnError", false);
    __publicField(this, "signal");
    __publicField(this, "fetch");
    __publicField(this, "isMaybeSingle");
    __publicField(this, "shouldStripNulls");
    __publicField(this, "urlLengthLimit");
    // Retry configuration - enabled by default
    __publicField(this, "retryEnabled", true);
    var _a8, _b, _c, _d, _e;
    this.method = builder.method;
    this.url = builder.url;
    this.headers = new Headers(builder.headers);
    this.schema = builder.schema;
    this.body = builder.body;
    this.shouldThrowOnError = (_a8 = builder.shouldThrowOnError) != null ? _a8 : false;
    this.signal = builder.signal;
    this.isMaybeSingle = (_b = builder.isMaybeSingle) != null ? _b : false;
    this.shouldStripNulls = (_c = builder.shouldStripNulls) != null ? _c : false;
    this.urlLengthLimit = (_d = builder.urlLengthLimit) != null ? _d : 8e3;
    this.retryEnabled = (_e = builder.retry) != null ? _e : true;
    if (builder.fetch) {
      this.fetch = builder.fetch;
    } else {
      this.fetch = fetch;
    }
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  *
  * @category Database
  * @subcategory Using modifiers
  */
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  /**
  * Strip null values from the response data. Properties with `null` values
  * will be omitted from the returned JSON objects.
  *
  * Requires PostgREST 11.2.0+.
  *
  * {@link https://docs.postgrest.org/en/stable/references/api/resource_representation.html#stripped-nulls}
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .stripNulls()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text, bio text);
  *
  * insert into
  *   characters (id, name, bio)
  * values
  *   (1, 'Luke', null),
  *   (2, 'Leia', 'Princess of Alderaan');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia",
  *       "bio": "Princess of Alderaan"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv") {
      throw new Error("stripNulls() cannot be used with csv()");
    }
    this.shouldStripNulls = true;
    return this;
  }
  /**
  * Set an HTTP header on this single PostgREST request, overriding any header
  * with the same name set on the client.
  *
  * This is an advanced escape hatch for one-off needs (passing a custom
  * `Authorization` for a single query, attaching a tracing header, etc.).
  * Most callers do not need it: configure client-wide headers via the
  * `headers` option when constructing the client, and authentication via
  * Supabase Auth.
  *
  * @param name - HTTP header name
  * @param value - HTTP header value
  *
  * @category Database
  * @subcategory Using modifiers
  */
  setHeader(name, value) {
    this.headers = new Headers(this.headers);
    this.headers.set(name, value);
    return this;
  }
  /**
  * @category Database
  * @subcategory Using modifiers
  *
  * Configure retry behavior for this request.
  *
  * By default, retries are enabled for idempotent requests (GET, HEAD, OPTIONS)
  * that fail with network errors or specific HTTP status codes (503, 520).
  * Retries use exponential backoff (1s, 2s, 4s) with a maximum of 3 attempts.
  *
  * @param enabled - Whether to enable retries for this request
  *
  * @example
  * ```ts
  * // Disable retries for a specific query
  * const { data, error } = await supabase
  *   .from('users')
  *   .select()
  *   .retry(false)
  * ```
  */
  retry(enabled) {
    this.retryEnabled = enabled;
    return this;
  }
  then(onfulfilled, onrejected) {
    if (this.schema === void 0) {
    } else if ([
      "GET",
      "HEAD"
    ].includes(this.method)) {
      this.headers.set("Accept-Profile", this.schema);
    } else {
      this.headers.set("Content-Profile", this.schema);
    }
    if (this.method !== "GET" && this.method !== "HEAD") {
      this.headers.set("Content-Type", "application/json");
    }
    if (this.shouldStripNulls) {
      const currentAccept = this.headers.get("Accept");
      if (currentAccept === "application/vnd.pgrst.object+json") {
        this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped");
      } else if (!currentAccept || currentAccept === "application/json") {
        this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
      }
    }
    const _fetch = this.fetch;
    const executeWithRetry = /* @__PURE__ */ __name(async () => {
      var _a8, _b;
      let attemptCount = 0;
      while (true) {
        const headers = {};
        this.headers.forEach((value, key) => {
          headers[key] = value;
        });
        if (attemptCount > 0) {
          headers["X-Retry-Count"] = String(attemptCount);
        }
        let res2;
        try {
          res2 = await _fetch(this.url.toString(), {
            method: this.method,
            headers,
            body: JSON.stringify(this.body, (_, value) => typeof value === "bigint" ? value.toString() : value),
            signal: this.signal
          });
        } catch (fetchError) {
          if ((fetchError == null ? void 0 : fetchError.name) === "AbortError" || (fetchError == null ? void 0 : fetchError.code) === "ABORT_ERR") {
            throw fetchError;
          }
          if (!RETRYABLE_METHODS.includes(this.method)) {
            throw fetchError;
          }
          if (this.retryEnabled && attemptCount < DEFAULT_MAX_RETRIES) {
            const delay = getRetryDelay(attemptCount);
            attemptCount++;
            await sleep(delay, this.signal);
            continue;
          }
          throw fetchError;
        }
        if (shouldRetry(this.method, res2.status, attemptCount, this.retryEnabled)) {
          const retryAfterHeader = (_b = (_a8 = res2.headers) == null ? void 0 : _a8.get("Retry-After")) != null ? _b : null;
          const delay = retryAfterHeader !== null ? Math.max(0, parseInt(retryAfterHeader, 10) || 0) * 1e3 : getRetryDelay(attemptCount);
          await res2.text();
          attemptCount++;
          await sleep(delay, this.signal);
          continue;
        }
        return await this.processResponse(res2);
      }
    }, "executeWithRetry");
    let res = executeWithRetry();
    if (!this.shouldThrowOnError) {
      res = res.catch((fetchError) => {
        var _a8, _b, _c, _d, _e, _f;
        let errorDetails = "";
        let hint = "";
        let code = "";
        const cause = fetchError == null ? void 0 : fetchError.cause;
        if (cause) {
          const causeMessage = (_a8 = cause == null ? void 0 : cause.message) != null ? _a8 : "";
          const causeCode = (_b = cause == null ? void 0 : cause.code) != null ? _b : "";
          errorDetails = `${(_c = fetchError == null ? void 0 : fetchError.name) != null ? _c : "FetchError"}: ${fetchError == null ? void 0 : fetchError.message}`;
          errorDetails += `

Caused by: ${(_d = cause == null ? void 0 : cause.name) != null ? _d : "Error"}: ${causeMessage}`;
          if (causeCode) {
            errorDetails += ` (${causeCode})`;
          }
          if (cause == null ? void 0 : cause.stack) {
            errorDetails += `
${cause.stack}`;
          }
        } else {
          errorDetails = (_e = fetchError == null ? void 0 : fetchError.stack) != null ? _e : "";
        }
        const urlLength = this.url.toString().length;
        if ((fetchError == null ? void 0 : fetchError.name) === "AbortError" || (fetchError == null ? void 0 : fetchError.code) === "ABORT_ERR") {
          code = "";
          hint = "Request was aborted (timeout or manual cancellation)";
          if (urlLength > this.urlLengthLimit) {
            hint += `. Note: Your request URL is ${urlLength} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
          }
        } else if ((cause == null ? void 0 : cause.name) === "HeadersOverflowError" || (cause == null ? void 0 : cause.code) === "UND_ERR_HEADERS_OVERFLOW") {
          code = "";
          hint = "HTTP headers exceeded server limits (typically 16KB)";
          if (urlLength > this.urlLengthLimit) {
            hint += `. Your request URL is ${urlLength} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
          }
        }
        return {
          success: false,
          error: {
            message: `${(_f = fetchError == null ? void 0 : fetchError.name) != null ? _f : "FetchError"}: ${fetchError == null ? void 0 : fetchError.message}`,
            details: errorDetails,
            hint,
            code
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    }
    return res.then(onfulfilled, onrejected);
  }
  /**
  * Process a fetch response and return the standardized postgrest response.
  */
  async processResponse(res) {
    var _a8, _b, _c, _d;
    let error = null;
    let data = null;
    let count = null;
    let status = res.status;
    let statusText = res.statusText;
    if (res.ok) {
      if (this.method !== "HEAD") {
        const body = await res.text();
        if (body === "") {
        } else if (this.headers.get("Accept") === "text/csv") {
          data = body;
        } else if (this.headers.get("Accept") && ((_a8 = this.headers.get("Accept")) == null ? void 0 : _a8.includes("application/vnd.pgrst.plan+text"))) {
          data = body;
        } else {
          try {
            data = JSON.parse(body);
          } catch {
            error = {
              message: body
            };
            data = null;
            if (this.shouldThrowOnError) {
              throw new PostgrestError({
                message: body,
                details: "",
                hint: "",
                code: ""
              });
            }
          }
        }
      }
      const countHeader = (_b = this.headers.get("Prefer")) == null ? void 0 : _b.match(/count=(exact|planned|estimated)/);
      const contentRange = (_c = res.headers.get("content-range")) == null ? void 0 : _c.split("/");
      if (countHeader && contentRange && contentRange.length > 1) {
        count = parseInt(contentRange[1]);
      }
      if (this.isMaybeSingle && Array.isArray(data)) {
        if (data.length > 1) {
          error = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          };
          data = null;
          count = null;
          status = 406;
          statusText = "Not Acceptable";
          if (this.shouldThrowOnError) {
            throw new PostgrestError({
              ...error,
              hint: (_d = error.hint) != null ? _d : ""
            });
          }
        } else if (data.length === 1) {
          data = data[0];
        } else {
          data = null;
        }
      }
    } else {
      const body = await res.text();
      try {
        error = JSON.parse(body);
        if (Array.isArray(error) && res.status === 404) {
          data = [];
          error = null;
          status = 200;
          statusText = "OK";
        }
      } catch {
        if (res.status === 404 && body === "") {
          status = 204;
          statusText = "No Content";
        } else {
          error = {
            message: body
          };
        }
      }
      if (error && this.shouldThrowOnError) {
        throw new PostgrestError(error);
      }
    }
    return {
      success: error === null,
      error,
      data,
      count,
      status,
      statusText
    };
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  * @subcategory Using modifiers
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example Complete Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<MyType>, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of successful response
  * ```ts
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Complete Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<MyType, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of object response
  * ```ts
  * let x: typeof data // MyType | null
  * ```
  *
  * @example Partial Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<{ status: "A" | "B" }>>()
  * ```
  *
  * @exampleResponse Partial Override type of successful response
  * ```ts
  * let x: typeof data // Array<CountryRowProperties & { status: "A" | "B" }>
  * ```
  *
  * @example Partial Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<{ status: "A" | "B" }>()
  * ```
  *
  * @exampleResponse Partial Override type of object response
  * ```ts
  * let x: typeof data // CountryRowProperties & { status: "A" | "B" } | null
  * ```
  *
  * @example Merge vs replace existing types
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  */
  overrideTypes() {
    return this;
  }
};
__name(_PostgrestBuilder, "PostgrestBuilder");
var PostgrestBuilder = _PostgrestBuilder;

// src/vendor/postgrest/PostgrestTransformBuilder.ts
var _PostgrestTransformBuilder = class _PostgrestTransformBuilder extends PostgrestBuilder {
  throwOnError() {
    return super.throwOnError();
  }
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `upsert()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .upsert({ id: 1, name: 'Han Solo' })
  *   .select()
  * ```
  *
  * @exampleSql With `upsert()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Han');
  * ```
  *
  * @exampleResponse With `upsert()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Han Solo"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  */
  select(columns) {
    let quoted = false;
    const cleanedColumns = (columns != null ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted) {
        return "";
      }
      if (c === '"') {
        quoted = !quoted;
      }
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    this.headers.append("Prefer", "return=representation");
    return this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('id, name')
  *   .order('id', { ascending: false })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On a referenced table
  * Ordering with `referencedTable` doesn't affect the ordering of the
  * parent table.
  *
  * @example On a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('orchestral_sections')
  *     .select(`
  *       name,
  *       instruments (
  *         name
  *       )
  *     `)
  *     .order('name', { referencedTable: 'instruments', ascending: false })
  *
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         },
  *         {
  *           "name": "harp"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": []
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Order parent table by a referenced table
  * Ordering with `referenced_table(col)` affects the ordering of the
  * parent table.
  *
  * @example Order parent table by a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('instruments')
  *     .select(`
  *       name,
  *       section:orchestral_sections (
  *         name
  *       )
  *     `)
  *     .order('section(name)', { ascending: true })
  *
  * ```
  *
  * @exampleSql Order parent table by a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Order parent table by a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "violin",
  *       "orchestral_sections": {"name": "strings"}
  *     },
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.order` : "order";
    const existingOrder = this.url.searchParams.get(key);
    this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  /**
  * Limit the query result by `rows`.
  *
  * @param rows - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  *   .limit(1, { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  limit(rows, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(key, `${rows}`);
    return this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .range(0, 1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     },
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
    const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
    const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(keyOffset, `${from}`);
    this.url.searchParams.set(keyLimit, `${to - from + 1}`);
    return this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * You can use this to set a timeout for the request.
  *
  * @exampleDescription Aborting requests in-flight
  * You can use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to abort requests.
  * Note that `status` and `statusText` don't mean anything for aborted requests as the request wasn't fulfilled.
  *
  * @example Aborting requests in-flight
  * ```ts
  * const ac = new AbortController()
  *
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(ac.signal)
  *
  * // Abort the request after 100 ms
  * setTimeout(() => ac.abort(), 100)
  * ```
  *
  * @exampleResponse Aborting requests in-flight
  * ```json
  *   {
  *     "error": {
  *       "message": "AbortError: The user aborted a request.",
  *       "details": "",
  *       "hint": "The request was aborted locally via the provided AbortSignal.",
  *       "code": ""
  *     },
  *     "status": 0,
  *     "statusText": ""
  *   }
  *
  * ```
  *
  * @example Set a timeout
  * ```ts
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(AbortSignal.timeout(1000 /* ms *\/))
  * ```
  *
  * @exampleResponse Set a timeout
  * ```json
  *   {
  *     "error": {
  *       "message": "FetchError: The user aborted a request.",
  *       "details": "",
  *       "hint": "",
  *       "code": ""
  *     },
  *     "status": 0,
  *     "statusText": ""
  *   }
  *
  * ```
  */
  abortSignal(signal) {
    this.signal = signal;
    return this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  *   .single()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": {
  *     "name": "Luke"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  single() {
    this.headers.set("Accept", "application/vnd.pgrst.object+json");
    return this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Katniss')
  *   .maybeSingle()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  maybeSingle() {
    this.isMaybeSingle = true;
    return this;
  }
  /**
  * Return `data` as a string in CSV format.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Return data as CSV
  * By default, the data is returned in JSON format, but can also be returned as Comma Separated Values.
  *
  * @example Return data as CSV
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .csv()
  * ```
  *
  * @exampleSql Return data as CSV
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Return data as CSV
  * ```json
  * {
  *   "data": "id,name\n1,Luke\n2,Leia\n3,Han",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  csv() {
    this.headers.set("Accept", "text/csv");
    return this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  *
  * @category Database
  * @subcategory Using modifiers
  */
  geojson() {
    this.headers.set("Accept", "application/geo+json");
    return this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Get the execution plan
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain()
  * ```
  *
  * @exampleSql Get the execution plan
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40)
  *         ->  Seq Scan on characters  (cost=0.00..22.00 rows=1200 width=40)
  * ```
  *
  * @exampleDescription Get the execution plan with analyze and verbose
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan with analyze and verbose
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain({analyze:true,verbose:true})
  * ```
  *
  * @exampleSql Get the execution plan with analyze and verbose
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan with analyze and verbose
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112) (actual time=0.041..0.041 rows=1 loops=1)
  *   Output: NULL::bigint, count(ROW(characters.id, characters.name)), COALESCE(json_agg(ROW(characters.id, characters.name)), '[]'::json), NULLIF(current_setting('response.headers'::text, true), ''::text), NULLIF(current_setting('response.status'::text, true), ''::text)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40) (actual time=0.005..0.006 rows=3 loops=1)
  *         Output: characters.id, characters.name
  *         ->  Seq Scan on public.characters  (cost=0.00..22.00 rows=1200 width=40) (actual time=0.004..0.005 rows=3 loops=1)
  *               Output: characters.id, characters.name
  * Query Identifier: -4730654291623321173
  * Planning Time: 0.407 ms
  * Execution Time: 0.119 ms
  * ```
  */
  explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
    var _a8;
    const options = [
      analyze ? "analyze" : null,
      verbose ? "verbose" : null,
      settings ? "settings" : null,
      buffers ? "buffers" : null,
      wal ? "wal" : null
    ].filter(Boolean).join("|");
    const forMediatype = (_a8 = this.headers.get("Accept")) != null ? _a8 : "application/json";
    this.headers.set("Accept", `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
    if (format === "json") {
      return this;
    } else {
      return this;
    }
  }
  /**
  * Dry-run this request: execute the query but discard the changes.
  *
  * Server-side, PostgREST runs the query inside a transaction and rolls it back
  * instead of committing. The response still contains the data that *would* have
  * been returned — `RETURNING` clauses execute and RLS, triggers, and constraints
  * are all evaluated — but no row is actually inserted, updated, or deleted.
  *
  * This affects only the single request it is chained to. The JS caller has no
  * handle on the transaction: supabase-js does not group multiple queries into
  * one transaction. For multi-statement transactional logic, use a database
  * function (`supabase.rpc(...)`).
  *
  * Sets the `Prefer: tx=rollback` header. See PostgREST's docs on transaction
  * preferences for the underlying mechanism.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example Validate an insert without persisting
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .insert({ name: 'France' })
  *   .select()
  *   .rollback()
  * // `data` shows what would have been inserted; nothing is saved.
  * ```
  */
  rollback() {
    this.headers.append("Prefer", "tx=rollback");
    return this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * - Deprecated: use overrideTypes method instead
  *
  * @example Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .returns<Array<MyType>>()
  * ```
  *
  * @exampleResponse Override type of successful response
  * ```js
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .returns<MyType>()
  * ```
  *
  * @exampleResponse Override type of object response
  * ```js
  * let x: typeof data // MyType | null
  * ```
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param rows - The maximum number of rows that can be affected
  *
  * @category Database
  * @subcategory Using modifiers
  */
  maxAffected(rows) {
    this.headers.append("Prefer", "handling=strict");
    this.headers.append("Prefer", `max-affected=${rows}`);
    return this;
  }
};
__name(_PostgrestTransformBuilder, "PostgrestTransformBuilder");
var PostgrestTransformBuilder = _PostgrestTransformBuilder;

// src/vendor/postgrest/PostgrestFilterBuilder.ts
var PostgrestReservedCharsRegexp = new RegExp("[,()]");
var _PostgrestFilterBuilder = class _PostgrestFilterBuilder extends PostgrestTransformBuilder {
  throwOnError() {
    return super.throwOnError();
  }
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  eq(column, value) {
    this.url.searchParams.append(column, `eq.${value}`);
    return this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * This filter does not include rows where `column` is `NULL`. To match null
  * values, use `.is(column, null)` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .neq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  neq(column, value) {
    this.url.searchParams.append(column, `neq.${value}`);
    return this;
  }
  gt(column, value) {
    this.url.searchParams.append(column, `gt.${value}`);
    return this;
  }
  gte(column, value) {
    this.url.searchParams.append(column, `gte.${value}`);
    return this;
  }
  lt(column, value) {
    this.url.searchParams.append(column, `lt.${value}`);
    return this;
  }
  lte(column, value) {
    this.url.searchParams.append(column, `lte.${value}`);
    return this;
  }
  like(column, pattern) {
    this.url.searchParams.append(column, `like.${pattern}`);
    return this;
  }
  likeAllOf(column, patterns) {
    this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
    return this;
  }
  likeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
    return this;
  }
  ilike(column, pattern) {
    this.url.searchParams.append(column, `ilike.${pattern}`);
    return this;
  }
  ilikeAllOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
    return this;
  }
  ilikeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
    return this;
  }
  regexMatch(column, pattern) {
    this.url.searchParams.append(column, `match.${pattern}`);
    return this;
  }
  regexIMatch(column, pattern) {
    this.url.searchParams.append(column, `imatch.${pattern}`);
    return this;
  }
  is(column, value) {
    this.url.searchParams.append(column, `is.${value}`);
    return this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(column, value) {
    this.url.searchParams.append(column, `isdistinct.${value}`);
    return this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .in('name', ['Leia', 'Han'])
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  in(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
      else return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `in.(${cleanedValues})`);
    return this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
      else return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `not.in.(${cleanedValues})`);
    return this;
  }
  contains(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `cs.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
    }
    return this;
  }
  containedBy(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `cd.${value}`);
    } else if (Array.isArray(value)) {
      this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
    } else {
      this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
    }
    return this;
  }
  rangeGt(column, range) {
    this.url.searchParams.append(column, `sr.${range}`);
    return this;
  }
  rangeGte(column, range) {
    this.url.searchParams.append(column, `nxl.${range}`);
    return this;
  }
  rangeLt(column, range) {
    this.url.searchParams.append(column, `sl.${range}`);
    return this;
  }
  rangeLte(column, range) {
    this.url.searchParams.append(column, `nxr.${range}`);
    return this;
  }
  rangeAdjacent(column, range) {
    this.url.searchParams.append(column, `adj.${range}`);
    return this;
  }
  overlaps(column, value) {
    if (typeof value === "string") {
      this.url.searchParams.append(column, `ov.${value}`);
    } else {
      this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
    }
    return this;
  }
  textSearch(column, query, { config, type } = {}) {
    let typePart = "";
    if (type === "plain") {
      typePart = "pl";
    } else if (type === "phrase") {
      typePart = "ph";
    } else if (type === "websearch") {
      typePart = "w";
    }
    const configPart = config === void 0 ? "" : `(${config})`;
    this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
    return this;
  }
  match(query) {
    Object.entries(query).filter(([_, value]) => value !== void 0).forEach(([column, value]) => {
      this.url.searchParams.append(column, `eq.${value}`);
    });
    return this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * not() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .not('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .not('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .not('name', 'is', null)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "name": "null"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  not(column, operator, value) {
    this.url.searchParams.append(column, `not.${operator}.${value}`);
    return this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * or() expects you to use the raw PostgREST syntax for the filter names and values.
  *
  * ```ts
  * .or('id.in.(5,6,7), arraycol.cs.{"a","b"}')  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`.
  * .or('id.in.(5,6,7), arraycol.cd.{"a","b"}')  // Use `cd` for `containedBy()`
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.eq.2,name.eq.Han')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     },
  *     {
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` with `and`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.gt.3,and(id.eq.1,name.eq.Luke)')
  * ```
  *
  * @exampleSql Use `or` with `and`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Use `or` with `and`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` on referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .or('section_id.eq.1,name.eq.guzheng', { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql Use `or` on referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Use `or` on referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.or` : "or";
    this.url.searchParams.append(key, `(${filters})`);
    return this;
  }
  filter(column, operator, value) {
    this.url.searchParams.append(column, `${operator}.${value}`);
    return this;
  }
};
__name(_PostgrestFilterBuilder, "PostgrestFilterBuilder");
var PostgrestFilterBuilder = _PostgrestFilterBuilder;

// src/vendor/postgrest/PostgrestQueryBuilder.ts
var _PostgrestQueryBuilder = class _PostgrestQueryBuilder {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @category Database
  *
  * @param url - The URL for the query
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to use
  * @param options.fetch - Custom fetch implementation
  * @param options.urlLengthLimit - Maximum URL length before warning
  * @param options.retry - Enable automatic retries for transient errors (default: true)
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'your-publishable-key' }, retry: true }
  * )
  * ```
  */
  constructor(url, { headers = {}, schema, fetch: fetch1, urlLengthLimit = 8e3, retry }) {
    __publicField(this, "url");
    __publicField(this, "headers");
    __publicField(this, "schema");
    __publicField(this, "signal");
    __publicField(this, "fetch");
    __publicField(this, "urlLengthLimit");
    /**
    * Enable or disable automatic retries for transient errors.
    * When enabled, idempotent requests (GET/HEAD/OPTIONS) that fail with network
    * errors or HTTP 503/520 responses are automatically retried with exponential
    * backoff (1s, 2s, 4s, up to 3 attempts). Defaults to `true` when not specified.
    */
    __publicField(this, "retry");
    this.url = url;
    this.headers = new Headers(headers);
    this.schema = schema;
    this.fetch = fetch1;
    this.urlLengthLimit = urlLengthLimit;
    this.retry = retry;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new import_url.default(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @remarks
     * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
     * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
   *
   * - By default, Supabase projects return a maximum of 1,000 rows. This setting can be changed in your project's [API settings](/dashboard/project/_/settings/api). It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
   * - `select()` can be combined with [Filters](/docs/reference/javascript/using-filters)
   * - `select()` can be combined with [Modifiers](/docs/reference/javascript/using-modifiers)
   * - `apikey` is a reserved keyword if you're using the [Supabase Platform](/docs/guides/platform) and [should be avoided as a column name](https://github.com/supabase/supabase/issues/5465). *
   * @category Database
   *
   * @example Getting your data
   * ```js
   * const { data, error } = await supabase
   *   .from('characters')
   *   .select()
   * ```
   *
   * @exampleSql Getting your data
   * ```sql
   * create table
   *   characters (id int8 primary key, name text);
   *
   * insert into
   *   characters (id, name)
   * values
   *   (1, 'Harry'),
   *   (2, 'Frodo'),
   *   (3, 'Katniss');
   * ```
   *
   * @exampleResponse Getting your data
   * ```json
   * {
   *   "data": [
   *     {
   *       "id": 1,
   *       "name": "Harry"
   *     },
   *     {
   *       "id": 2,
   *       "name": "Frodo"
   *     },
   *     {
   *       "id": 3,
   *       "name": "Katniss"
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Handling errors
   * The most useful field on a Postgres error is usually `hint` — when the database knows the fix, it puts the literal SQL there. For example, a permission-denied error (`code: '42501'`) arrives with a `hint` like `"Grant the required privileges to the current role with: GRANT SELECT ON public.characters TO anon;"`. Log the full `error` object so the hint isn't hidden behind `error.message`.
   *
   * @example Handling errors
   * ```js
   * const { data, error } = await supabase.from('characters').select()
   * if (error) {
   *   // Logs the full error: message, code, details, and hint.
   *   console.error(error)
   *   return
   * }
   * ```
   *
   * @exampleResponse Handling errors
   * ```json
   * {
   *   "error": {
   *     "code": "42501",
   *     "details": null,
   *     "hint": "Grant the required privileges to the current role with: GRANT SELECT ON public.characters TO anon;",
   *     "message": "permission denied for table characters"
   *   },
   *   "status": 401,
   *   "statusText": ""
   * }
   * ```
   *
   * @example Selecting specific columns
   * ```js
   * const { data, error } = await supabase
   *   .from('characters')
   *   .select('name')
   * ```
   *
   * @exampleSql Selecting specific columns
   * ```sql
   * create table
   *   characters (id int8 primary key, name text);
   *
   * insert into
   *   characters (id, name)
   * values
   *   (1, 'Frodo'),
   *   (2, 'Harry'),
   *   (3, 'Katniss');
   * ```
   *
   * @exampleResponse Selecting specific columns
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "Frodo"
   *     },
   *     {
   *       "name": "Harry"
   *     },
   *     {
   *       "name": "Katniss"
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Query referenced tables
   * If your database has foreign key relationships, you can query related tables too.
   *
   * @example Query referenced tables
   * ```js
   * const { data, error } = await supabase
   *   .from('orchestral_sections')
   *   .select(`
   *     name,
   *     instruments (
   *       name
   *     )
   *   `)
   * ```
   *
   * @exampleSql Query referenced tables
   * ```sql
   * create table
   *   orchestral_sections (id int8 primary key, name text);
   * create table
   *   instruments (
   *     id int8 primary key,
   *     section_id int8 not null references orchestral_sections,
   *     name text
   *   );
   *
   * insert into
   *   orchestral_sections (id, name)
   * values
   *   (1, 'strings'),
   *   (2, 'woodwinds');
   * insert into
   *   instruments (id, section_id, name)
   * values
   *   (1, 2, 'flute'),
   *   (2, 1, 'violin');
   * ```
   *
   * @exampleResponse Query referenced tables
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "strings",
   *       "instruments": [
   *         {
   *           "name": "violin"
   *         }
   *       ]
   *     },
   *     {
   *       "name": "woodwinds",
   *       "instruments": [
   *         {
   *           "name": "flute"
   *         }
   *       ]
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Query referenced tables with spaces in their names
   * If your table name contains spaces, you must use double quotes in the `select` statement to reference the table.
   *
   * @example Query referenced tables with spaces in their names
   * ```js
   * const { data, error } = await supabase
   *   .from('orchestral sections')
   *   .select(`
   *     name,
   *     "musical instruments" (
   *       name
   *     )
   *   `)
   * ```
   *
   * @exampleSql Query referenced tables with spaces in their names
   * ```sql
   * create table
   *   "orchestral sections" (id int8 primary key, name text);
   * create table
   *   "musical instruments" (
   *     id int8 primary key,
   *     section_id int8 not null references "orchestral sections",
   *     name text
   *   );
   *
   * insert into
   *   "orchestral sections" (id, name)
   * values
   *   (1, 'strings'),
   *   (2, 'woodwinds');
   * insert into
   *   "musical instruments" (id, section_id, name)
   * values
   *   (1, 2, 'flute'),
   *   (2, 1, 'violin');
   * ```
   *
   * @exampleResponse Query referenced tables with spaces in their names
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "strings",
   *       "musical instruments": [
   *         {
   *           "name": "violin"
   *         }
   *       ]
   *     },
   *     {
   *       "name": "woodwinds",
   *       "musical instruments": [
   *         {
   *           "name": "flute"
   *         }
   *       ]
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Query referenced tables through a join table
   * If you're in a situation where your tables are **NOT** directly
   * related, but instead are joined by a _join table_, you can still use
   * the `select()` method to query the related data. The join table needs
   * to have the foreign keys as part of its composite primary key.
   *
   * @example Query referenced tables through a join table
   * ```ts
   * const { data, error } = await supabase
   *   .from('users')
   *   .select(`
   *     name,
   *     teams (
   *       name
   *     )
   *   `)
   *
   * ```     * @exampleSql Query referenced tables through a join table
   * ```sql
   * create table
   *   users (
   *     id int8 primary key,
   *     name text
   *   );
   * create table
   *   teams (
   *     id int8 primary key,
   *     name text
   *   );
   * -- join table
   * create table
   *   users_teams (
   *     user_id int8 not null references users,
   *     team_id int8 not null references teams,
   *     -- both foreign keys must be part of a composite primary key
   *     primary key (user_id, team_id)
   *   );
   *
   * insert into
   *   users (id, name)
   * values
   *   (1, 'Kiran'),
   *   (2, 'Evan');
   * insert into
   *   teams (id, name)
   * values
   *   (1, 'Green'),
   *   (2, 'Blue');
   * insert into
   *   users_teams (user_id, team_id)
   * values
   *   (1, 1),
   *   (1, 2),
   *   (2, 2);
   * ```
   *
   * @exampleResponse Query referenced tables through a join table
   * ```json
   *   {
   *     "data": [
   *       {
   *         "name": "Kiran",
   *         "teams": [
   *           {
   *             "name": "Green"
   *           },
   *           {
   *             "name": "Blue"
   *           }
   *         ]
   *       },
   *       {
   *         "name": "Evan",
   *         "teams": [
   *           {
   *             "name": "Blue"
   *           }
   *         ]
   *       }
   *     ],
   *     "status": 200,
   *     "statusText": "OK"
   *   }
   *
   * ```
   *
   * @exampleDescription Query the same referenced table multiple times
   * If you need to query the same referenced table twice, use the name of the
   * joined column to identify which join to use. You can also give each
   * column an alias.
   *
   * @example Query the same referenced table multiple times
   * ```ts
   * const { data, error } = await supabase
   *   .from('messages')
   *   .select(`
   *     content,
   *     from:sender_id(name),
   *     to:receiver_id(name)
   *   `)
   *
   * // To infer types, use the name of the table (in this case `users`) and
   * // the name of the foreign key constraint.
   * const { data, error } = await supabase
   *   .from('messages')
   *   .select(`
   *     content,
   *     from:users!messages_sender_id_fkey(name),
   *     to:users!messages_receiver_id_fkey(name)
   *   `)
   * ```
   *
   * @exampleSql Query the same referenced table multiple times
   * ```sql
   *  create table
   *  users (id int8 primary key, name text);
   *
   *  create table
   *    messages (
   *      sender_id int8 not null references users,
   *      receiver_id int8 not null references users,
   *      content text
   *    );
   *
   *  insert into
   *    users (id, name)
   *  values
   *    (1, 'Kiran'),
   *    (2, 'Evan');
   *
   *  insert into
   *    messages (sender_id, receiver_id, content)
   *  values
   *    (1, 2, '👋');
   *  ```
   * ```
   *
   * @exampleResponse Query the same referenced table multiple times
   * ```json
   * {
   *   "data": [
   *     {
   *       "content": "👋",
   *       "from": {
   *         "name": "Kiran"
   *       },
   *       "to": {
   *         "name": "Evan"
   *       }
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Query nested foreign tables through a join table
   * You can use the result of a joined table to gather data in
   * another foreign table. With multiple references to the same foreign
   * table you must specify the column on which to conduct the join.
   *
   * @example Query nested foreign tables through a join table
   * ```ts
   *   const { data, error } = await supabase
   *     .from('games')
   *     .select(`
   *       game_id:id,
   *       away_team:teams!games_away_team_fkey (
   *         users (
   *           id,
   *           name
   *         )
   *       )
   *     `)
   *
   * ```
   *
   * @exampleSql Query nested foreign tables through a join table
   * ```sql
   * ```sql
   * create table
   *   users (
   *     id int8 primary key,
   *     name text
   *   );
   * create table
   *   teams (
   *     id int8 primary key,
   *     name text
   *   );
   * -- join table
   * create table
   *   users_teams (
   *     user_id int8 not null references users,
   *     team_id int8 not null references teams,
   *
   *     primary key (user_id, team_id)
   *   );
   * create table
   *   games (
   *     id int8 primary key,
   *     home_team int8 not null references teams,
   *     away_team int8 not null references teams,
   *     name text
   *   );
   *
   * insert into users (id, name)
   * values
   *   (1, 'Kiran'),
   *   (2, 'Evan');
   * insert into
   *   teams (id, name)
   * values
   *   (1, 'Green'),
   *   (2, 'Blue');
   * insert into
   *   users_teams (user_id, team_id)
   * values
   *   (1, 1),
   *   (1, 2),
   *   (2, 2);
   * insert into
   *   games (id, home_team, away_team, name)
   * values
   *   (1, 1, 2, 'Green vs Blue'),
   *   (2, 2, 1, 'Blue vs Green');
   * ```
   *
   * @exampleResponse Query nested foreign tables through a join table
   * ```json
   *   {
   *     "data": [
   *       {
   *         "game_id": 1,
   *         "away_team": {
   *           "users": [
   *             {
   *               "id": 1,
   *               "name": "Kiran"
   *             },
   *             {
   *               "id": 2,
   *               "name": "Evan"
   *             }
   *           ]
   *         }
   *       },
   *       {
   *         "game_id": 2,
   *         "away_team": {
   *           "users": [
   *             {
   *               "id": 1,
   *               "name": "Kiran"
   *             }
   *           ]
   *         }
   *       }
   *     ],
   *     "status": 200,
   *     "statusText": "OK"
   *   }
   *
   * ```
   *
   * @exampleDescription Filtering through referenced tables
   * If the filter on a referenced table's column is not satisfied, the referenced
   * table returns `[]` or `null` but the parent table is not filtered out.
   * If you want to filter out the parent table rows, use the `!inner` hint
   *
   * @example Filtering through referenced tables
   * ```ts
   * const { data, error } = await supabase
   *   .from('instruments')
   *   .select('name, orchestral_sections(*)')
   *   .eq('orchestral_sections.name', 'percussion')
   * ```
   *
   * @exampleSql Filtering through referenced tables
   * ```sql
   * create table
   *   orchestral_sections (id int8 primary key, name text);
   * create table
   *   instruments (
   *     id int8 primary key,
   *     section_id int8 not null references orchestral_sections,
   *     name text
   *   );
   *
   * insert into
   *   orchestral_sections (id, name)
   * values
   *   (1, 'strings'),
   *   (2, 'woodwinds');
   * insert into
   *   instruments (id, section_id, name)
   * values
   *   (1, 2, 'flute'),
   *   (2, 1, 'violin');
   * ```
   *
   * @exampleResponse Filtering through referenced tables
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "flute",
   *       "orchestral_sections": null
   *     },
   *     {
   *       "name": "violin",
   *       "orchestral_sections": null
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Querying referenced table with count
   * You can get the number of rows in a related table by using the
   * **count** property.
   *
   * @example Querying referenced table with count
   * ```ts
   * const { data, error } = await supabase
   *   .from('orchestral_sections')
   *   .select(`*, instruments(count)`)
   * ```
   *
   * @exampleSql Querying referenced table with count
   * ```sql
   * create table orchestral_sections (
   *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
   *   "name" text
   * );
   *
   * create table characters (
   *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
   *   "name" text,
   *   "section_id" "uuid" references public.orchestral_sections on delete cascade
   * );
   *
   * with section as (
   *   insert into orchestral_sections (name)
   *   values ('strings') returning id
   * )
   * insert into instruments (name, section_id) values
   * ('violin', (select id from section)),
   * ('viola', (select id from section)),
   * ('cello', (select id from section)),
   * ('double bass', (select id from section));
   * ```
   *
   * @exampleResponse Querying referenced table with count
   * ```json
   * [
   *   {
   *     "id": "693694e7-d993-4360-a6d7-6294e325d9b6",
   *     "name": "strings",
   *     "instruments": [
   *       {
   *         "count": 4
   *       }
   *     ]
   *   }
   * ]
   * ```
   *
   * @exampleDescription Querying with count option
   * You can get the number of rows by using the
   * [count](/docs/reference/javascript/select#parameters) option.
   *
   * @example Querying with count option
   * ```ts
   * const { count, error } = await supabase
   *   .from('characters')
   *   .select('*', { count: 'exact', head: true })
   * ```
   *
   * @exampleSql Querying with count option
   * ```sql
   * create table
   *   characters (id int8 primary key, name text);
   *
   * insert into
   *   characters (id, name)
   * values
   *   (1, 'Luke'),
   *   (2, 'Leia'),
   *   (3, 'Han');
   * ```
   *
   * @exampleResponse Querying with count option
   * ```json
   * {
   *   "count": 3,
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Querying JSON data
   * You can select and filter data inside of
   * [JSON](/docs/guides/database/json) columns. Postgres offers some
   * [operators](/docs/guides/database/json#query-the-jsonb-data) for
   * querying JSON data.
   *
   * @example Querying JSON data
   * ```ts
   * const { data, error } = await supabase
   *   .from('users')
   *   .select(`
   *     id, name,
   *     address->city
   *   `)
   * ```
   *
   * @exampleSql Querying JSON data
   * ```sql
   * create table
   *   users (
   *     id int8 primary key,
   *     name text,
   *     address jsonb
   *   );
   *
   * insert into
   *   users (id, name, address)
   * values
   *   (1, 'Frodo', '{"city":"Hobbiton"}');
   * ```
   *
   * @exampleResponse Querying JSON data
   * ```json
   * {
   *   "data": [
   *     {
   *       "id": 1,
   *       "name": "Frodo",
   *       "city": "Hobbiton"
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Querying referenced table with inner join
   * If you don't want to return the referenced table contents, you can leave the parenthesis empty.
   * Like `.select('name, orchestral_sections!inner()')`.
   *
   * @example Querying referenced table with inner join
   * ```ts
   * const { data, error } = await supabase
   *   .from('instruments')
   *   .select('name, orchestral_sections!inner(name)')
   *   .eq('orchestral_sections.name', 'woodwinds')
   *   .limit(1)
   * ```
   *
   * @exampleSql Querying referenced table with inner join
   * ```sql
   * create table orchestral_sections (
   *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
   *   "name" text
   * );
   *
   * create table instruments (
   *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
   *   "name" text,
   *   "section_id" "uuid" references public.orchestral_sections on delete cascade
   * );
   *
   * with section as (
   *   insert into orchestral_sections (name)
   *   values ('woodwinds') returning id
   * )
   * insert into instruments (name, section_id) values
   * ('flute', (select id from section)),
   * ('clarinet', (select id from section)),
   * ('bassoon', (select id from section)),
   * ('piccolo', (select id from section));
   * ```
   *
   * @exampleResponse Querying referenced table with inner join
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "flute",
   *       "orchestral_sections": {"name": "woodwinds"}
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
   *
   * @exampleDescription Switching schemas per query
   * In addition to setting the schema during initialization, you can also switch schemas on a per-query basis.
   * Make sure you've set up your [database privileges and API settings](/docs/guides/api/using-custom-schemas).
   *
   * @example Switching schemas per query
   * ```ts
   * const { data, error } = await supabase
   *   .schema('myschema')
   *   .from('mytable')
   *   .select()
   * ```
   *
   * @exampleSql Switching schemas per query
   * ```sql
   * create schema myschema;
   *
   * create table myschema.mytable (
   *   id uuid primary key default gen_random_uuid(),
   *   data text
   * );
   *
   * insert into myschema.mytable (data) values ('mydata');
   * ```
   *
   * @exampleResponse Switching schemas per query
   * ```json
   * {
   *   "data": [
   *     {
   *       "id": "4162e008-27b0-4c0f-82dc-ccaeee9a624d",
   *       "data": "mydata"
   *     }
   *   ],
   *   "status": 200,
   *   "statusText": "OK"
   * }
   * ```
     */
  select(columns, options) {
    const { head: head2 = false, count } = options != null ? options : {};
    const method = head2 ? "HEAD" : "GET";
    let quoted = false;
    const cleanedColumns = (columns != null ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted) {
        return "";
      }
      if (c === '"') {
        quoted = !quoted;
      }
      return c;
    }).join("");
    const { url, headers } = this.cloneRequestState();
    url.searchParams.set("select", cleanedColumns);
    if (count) {
      headers.append("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  *
  * @category Database
  *
  * @example Create a record
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  * ```
  *
  * @exampleSql Create a record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record
  * ```json
  * {
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT INSERT ON public.countries TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { error } = await supabase.from('countries').insert({ id: 1, name: 'Mordor' })
  * if (error) console.error(error)
  * ```
  *
  * @example Create a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  *   .select()
  * ```
  *
  * @exampleSql Create a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Bulk create
  * A bulk create operation is handled in a single transaction.
  * If any of the inserts fail, none of the rows are inserted.
  *
  * @example Bulk create
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert([
  *     { id: 1, name: 'Mordor' },
  *     { id: 1, name: 'The Shire' },
  *   ])
  * ```
  *
  * @exampleSql Bulk create
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Bulk create
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (id)=(1) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"countries_pkey\""
  *   },
  *   "status": 409,
  *   "statusText": ""
  * }
  * ```
  */
  insert(values, { count, defaultToNull = true } = {}) {
    var _a8;
    const method = "POST";
    const { url, headers } = this.cloneRequestState();
    if (count) {
      headers.append("Prefer", `count=${count}`);
    }
    if (!defaultToNull) {
      headers.append("Prefer", `missing=default`);
    }
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [
          ...new Set(columns)
        ].map((column) => `"${column}"`);
        url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      body: values,
      fetch: (_a8 = this.fetch) != null ? _a8 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  *
  * @category Database
  *
  * @remarks
  * - Primary keys must be included in `values` to use upsert.
  *
  * @example Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert({ id: 1, name: 'piano' })
  *   .select()
  * ```
  *
  * @exampleSql Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT INSERT, UPDATE ON public.instruments TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { data, error } = await supabase.from('instruments').upsert({ id: 1, name: 'piano' }).select()
  * if (error) console.error(error)
  * ```
  *
  * @example Bulk Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert([
  *     { id: 1, name: 'piano' },
  *     { id: 2, name: 'harp' },
  *   ])
  *   .select()
  * ```
  *
  * @exampleSql Bulk Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Bulk Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     },
  *     {
  *       "id": 2,
  *       "name": "harp"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Upserting into tables with constraints
  * In the following query, `upsert()` implicitly uses the `id`
  * (primary key) column to determine conflicts. If there is no existing
  * row with the same `id`, `upsert()` inserts a new row, which
  * will fail in this case as there is already a row with `handle` `"saoirse"`.
  * Using the `onConflict` option, you can instruct `upsert()` to use
  * another column with a unique constraint to determine conflicts.
  *
  * @example Upserting into tables with constraints
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ id: 42, handle: 'saoirse', display_name: 'Saoirse' })
  *   .select()
  * ```
  *
  * @exampleSql Upserting into tables with constraints
  * ```sql
  * create table
  *   users (
  *     id int8 generated by default as identity primary key,
  *     handle text not null unique,
  *     display_name text
  *   );
  *
  * insert into
  *   users (id, handle, display_name)
  * values
  *   (1, 'saoirse', null);
  * ```
  *
  * @exampleResponse Upserting into tables with constraints
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (handle)=(saoirse) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"users_handle_key\""
  *   },
  *   "status": 409,
  *   "statusText": ""
  * }
  * ```
  */
  upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
    var _a8;
    const method = "POST";
    const { url, headers } = this.cloneRequestState();
    headers.append("Prefer", `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`);
    if (onConflict !== void 0) url.searchParams.set("on_conflict", onConflict);
    if (count) {
      headers.append("Prefer", `count=${count}`);
    }
    if (!defaultToNull) {
      headers.append("Prefer", "missing=default");
    }
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [
          ...new Set(columns)
        ].map((column) => `"${column}"`);
        url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      body: values,
      fetch: (_a8 = this.fetch) != null ? _a8 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `update()` should always be combined with [Filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to update.
  *
  * @example Updating your data
  * ```ts
  * const { error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Updating your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Updating your data
  * ```json
  * {
  *   "status": 204,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT UPDATE ON public.instruments TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { error } = await supabase.from('instruments').update({ name: 'piano' }).eq('id', 1)
  * if (error) console.error(error)
  * ```
  *
  * @example Update a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Update a record and return it
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Update a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Updating JSON data
  * Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * working with JSON data. Currently, it is only possible to update the entire JSON document.
  *
  * @example Updating JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .update({
  *     address: {
  *       street: 'Melrose Place',
  *       postcode: 90210
  *     }
  *   })
  *   .eq('address->postcode', 90210)
  *   .select()
  * ```
  *
  * @exampleSql Updating JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210 }');
  * ```
  *
  * @exampleResponse Updating JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Michael",
  *       "address": {
  *         "street": "Melrose Place",
  *         "postcode": 90210
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  update(values, { count } = {}) {
    var _a8;
    const method = "PATCH";
    const { url, headers } = this.cloneRequestState();
    if (count) {
      headers.append("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      body: values,
      fetch: (_a8 = this.fetch) != null ? _a8 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `delete()` should always be combined with [filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to delete.
  * - If you use `delete()` with filters and you have
  *   [RLS](/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only
  *   rows visible through `SELECT` policies are deleted. Note that by default
  *   no rows are visible, so you need at least one `SELECT`/`ALL` policy that
  *   makes the rows visible.
  * - When using `delete().in()`, specify an array of values to target multiple rows with a single query. This is particularly useful for batch deleting entries that share common criteria, such as deleting users by their IDs. Ensure that the array you provide accurately represents all records you intend to delete to avoid unintended data removal.
  *
  * @example Delete a single record
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Delete a single record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a single record
  * ```json
  * {
  *   "status": 204,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT DELETE ON public.countries TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { error } = await supabase.from('countries').delete().eq('id', 1)
  * if (error) console.error(error)
  * ```
  *
  * @example Delete a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Delete a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Delete multiple records
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .in('id', [1, 2, 3])
  * ```
  *
  * @exampleSql Delete multiple records
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'), (2, 'The Shire'), (3, 'Mordor');
  * ```
  *
  * @exampleResponse Delete multiple records
  * ```json
  * {
  *   "status": 204,
  *   "statusText": ""
  * }
  * ```
  */
  delete({ count } = {}) {
    var _a8;
    const method = "DELETE";
    const { url, headers } = this.cloneRequestState();
    if (count) {
      headers.append("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schema,
      fetch: (_a8 = this.fetch) != null ? _a8 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
__name(_PostgrestQueryBuilder, "PostgrestQueryBuilder");
var PostgrestQueryBuilder = _PostgrestQueryBuilder;

// src/vendor/postgrest/PostgrestClient.ts
var _PostgrestClient = class _PostgrestClient {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @param options.retry - Enable or disable automatic retries for transient errors.
  *   When enabled, idempotent requests (GET, HEAD, OPTIONS) that fail with network
  *   errors or HTTP 503/520 responses will be automatically retried up to 3 times
  *   with exponential backoff (1s, 2s, 4s). Defaults to `true`.
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('profiles').select('*')
  * ```
  *
  * @category Database
  *
  * @remarks
  * - A `timeout` option (in milliseconds) can be set to automatically abort requests that take too long.
  * - A `urlLengthLimit` option (default: 8000) can be set to control when URL length warnings are included in error messages for aborted requests.
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestClient } from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'your-publishable-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(url, { headers = {}, schema, fetch: fetch1, timeout, urlLengthLimit = 8e3, retry } = {}) {
    __publicField(this, "url");
    __publicField(this, "headers");
    __publicField(this, "schemaName");
    __publicField(this, "fetch");
    __publicField(this, "urlLengthLimit");
    // Retry configuration - enabled by default
    __publicField(this, "retry");
    this.url = url;
    this.headers = new Headers(headers);
    this.schemaName = schema;
    this.urlLengthLimit = urlLengthLimit;
    const originalFetch = fetch1 != null ? fetch1 : globalThis.fetch;
    if (timeout !== void 0 && timeout > 0) {
      this.fetch = (input, init) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const existingSignal = init == null ? void 0 : init.signal;
        if (existingSignal) {
          if (existingSignal.aborted) {
            clearTimeout(timeoutId);
            return originalFetch(input, init);
          }
          const abortHandler = /* @__PURE__ */ __name(() => {
            clearTimeout(timeoutId);
            controller.abort();
          }, "abortHandler");
          existingSignal.addEventListener("abort", abortHandler, {
            once: true
          });
          return originalFetch(input, {
            ...init,
            signal: controller.signal
          }).finally(() => {
            clearTimeout(timeoutId);
            existingSignal.removeEventListener("abort", abortHandler);
          });
        }
        return originalFetch(input, {
          ...init,
          signal: controller.signal
        }).finally(() => clearTimeout(timeoutId));
      };
    } else {
      this.fetch = originalFetch;
    }
    this.retry = retry;
  }
  from(relation) {
    if (!relation || typeof relation !== "string" || relation.trim() === "") {
      throw new Error("Invalid relation name: relation must be a non-empty string.");
    }
    const url = new import_url.default(`${this.url}/${relation}`);
    return new PostgrestQueryBuilder(url, {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  *
  * @category Database
  */
  schema(schema) {
    return new _PostgrestClient(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  *
  * @category Database
  *
  * @example Call a Postgres function without arguments
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world')
  * ```
  *
  * @exampleSql Call a Postgres function without arguments
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function without arguments
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a Postgres function with arguments
  * ```ts
  * const { data, error } = await supabase.rpc('echo', { say: '👋' })
  * ```
  *
  * @exampleSql Call a Postgres function with arguments
  * ```sql
  * create function echo(say text) returns text as $$
  *   select say;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with arguments
  * ```json
  *   {
  *     "data": "👋",
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  *
  * @exampleDescription Bulk processing
  * You can process large payloads by passing in an array as an argument.
  *
  * @example Bulk processing
  * ```ts
  * const { data, error } = await supabase.rpc('add_one_each', { arr: [1, 2, 3] })
  * ```
  *
  * @exampleSql Bulk processing
  * ```sql
  * create function add_one_each(arr int[]) returns int[] as $$
  *   select array_agg(n + 1) from unnest(arr) as n;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Bulk processing
  * ```json
  * {
  *   "data": [
  *     2,
  *     3,
  *     4
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Call a Postgres function with filters
  * Postgres functions that return tables can also be combined with [Filters](/docs/reference/javascript/using-filters) and [Modifiers](/docs/reference/javascript/using-modifiers).
  *
  * @example Call a Postgres function with filters
  * ```ts
  * const { data, error } = await supabase
  *   .rpc('list_stored_countries')
  *   .eq('id', 1)
  *   .single()
  * ```
  *
  * @exampleSql Call a Postgres function with filters
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'),
  *   (2, 'The Shire');
  *
  * create function list_stored_countries() returns setof countries as $$
  *   select * from countries;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with filters
  * ```json
  * {
  *   "data": {
  *     "id": 1,
  *     "name": "Rohan"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a read-only Postgres function
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world', undefined, { get: true })
  * ```
  *
  * @exampleSql Call a read-only Postgres function
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a read-only Postgres function
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rpc(fn, args = {}, { head: head2 = false, get: get2 = false, count } = {}) {
    var _a8;
    let method;
    const url = new import_url.default(`${this.url}/rpc/${fn}`);
    let body;
    const _isObject = /* @__PURE__ */ __name((v) => v !== null && typeof v === "object" && (!Array.isArray(v) || v.some(_isObject)), "_isObject");
    const _hasObjectArg = head2 && Object.values(args).some(_isObject);
    if (_hasObjectArg) {
      method = "POST";
      body = args;
    } else if (head2 || get2) {
      method = head2 ? "HEAD" : "GET";
      Object.entries(args).filter(([_, value]) => value !== void 0).map(([name, value]) => [
        name,
        Array.isArray(value) ? `{${value.join(",")}}` : `${value}`
      ]).forEach(([name, value]) => {
        url.searchParams.append(name, value);
      });
    } else {
      method = "POST";
      body = args;
    }
    const headers = new Headers(this.headers);
    if (_hasObjectArg) {
      headers.set("Prefer", count ? `count=${count},return=minimal` : "return=minimal");
    } else if (count) {
      headers.set("Prefer", `count=${count}`);
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schemaName,
      body,
      fetch: (_a8 = this.fetch) != null ? _a8 : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
__name(_PostgrestClient, "PostgrestClient");
var PostgrestClient = _PostgrestClient;

// src/modules/database.ts
var _WorkBuddyDatabaseModule = class _WorkBuddyDatabaseModule {
  constructor(config, fetch2) {
    /**
     * 底层 PostgREST 客户端。刻意保持 private —— 对外只暴露 `from` / `rpc`，
     * 不让 vendor 客户端（及其 `.schema()` 等入口）泄漏到应用。
     */
    __publicField(this, "client");
    /**
     * 在一张表或视图上发起查询。返回值即 supabase-js 的查询构造器，
     * 支持 `select/insert/upsert/update/delete` 及全部 filter/transform 链，
     * `await` 得到 `{ data, error }`。语义与 supabase-js `.from()` 一致。
     *
     * 只放行 public schema —— 不提供 `.schema()` 切换（数据面会拒系统 schema）。
     */
    __publicField(this, "from");
    /**
     * 调用一个 PostgreSQL 函数（RPC）。语义同 supabase-js `.rpc()`：
     * 返回可继续 `.select()/.order()/.limit()` 的构造器（集合返回型函数）。
     */
    __publicField(this, "rpc");
    this.client = new PostgrestClient(`${config.endpoint}${CLOUD_MODULE_PATHS.database}`, {
      fetch: fetch2
    });
    this.from = this.client.from.bind(this.client);
    this.rpc = this.client.rpc.bind(this.client);
  }
  /**
   * 归一化后的数据面基址（`/.cloud/database/rest`，无尾斜杠）。
   * 仅用于诊断/契约测试；应用不应据此手拼请求。
   */
  get url() {
    return this.client.url;
  }
};
__name(_WorkBuddyDatabaseModule, "WorkBuddyDatabaseModule");
var WorkBuddyDatabaseModule = _WorkBuddyDatabaseModule;
function createDatabaseModule(config, fetch2) {
  return new WorkBuddyDatabaseModule(config, fetch2);
}
__name(createDatabaseModule, "createDatabaseModule");

// src/modules/llm.ts
init_miniprogram_url();

// src/modules/llm/chat.ts
init_miniprogram_url();

// src/modules/llm/errors.ts
init_miniprogram_url();
var _CloudOpenAIError = class _CloudOpenAIError extends Error {
  constructor(error, init = {}) {
    const errorObj = typeof error === "string" ? {
      message: error,
      type: "server_error",
      param: null,
      code: null
    } : error;
    super(errorObj.message);
    __publicField(this, "error");
    __publicField(this, "status");
    __publicField(this, "requestId");
    __publicField(this, "retryAfterMs");
    this.name = "CloudOpenAIError";
    this.error = errorObj;
    this.status = init.status;
    this.requestId = init.requestId;
    this.retryAfterMs = init.retryAfterMs;
    if (init.cause !== void 0) {
      if (!("cause" in this)) {
        Object.defineProperty(this, "cause", {
          value: init.cause,
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }
  }
};
__name(_CloudOpenAIError, "CloudOpenAIError");
var CloudOpenAIError = _CloudOpenAIError;
function parseRetryAfter(headerValue) {
  if (!headerValue) return void 0;
  const trimmed = headerValue.trim();
  const asNum = Number(trimmed);
  if (!isNaN(asNum) && asNum >= 0 && Number.isInteger(asNum)) {
    return asNum * 1e3;
  }
  const asDate = Date.parse(trimmed);
  if (!isNaN(asDate)) {
    const diff = asDate - Date.now();
    return diff > 0 ? diff : 0;
  }
  return void 0;
}
__name(parseRetryAfter, "parseRetryAfter");

// src/modules/llm/models.ts
init_miniprogram_url();
function stringField(...values) {
  return values.find((value) => typeof value === "string" && value.length > 0);
}
__name(stringField, "stringField");
function numberField(...values) {
  return values.find((value) => typeof value === "number" && Number.isFinite(value));
}
__name(numberField, "numberField");
function booleanField(...values) {
  return values.find((value) => typeof value === "boolean");
}
__name(booleanField, "booleanField");
function contextWindowField(...values) {
  for (const value of values) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      return normalizeContextWindowObject(value);
    }
  }
  return void 0;
}
__name(contextWindowField, "contextWindowField");
function normalizeContextWindowObject(raw) {
  const result = {};
  for (const [key, value] of Object.entries(raw)) {
    if (key === "supportedLengths") {
      if (Array.isArray(value)) {
        result.supportedLengths = value.filter((item) => typeof item === "number" && Number.isFinite(item));
      }
      continue;
    }
    if (key === "defaultLength") {
      if (typeof value === "number" && Number.isFinite(value)) {
        result.defaultLength = value;
      }
      continue;
    }
    Object.defineProperty(result, key, {
      value,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  return result;
}
__name(normalizeContextWindowObject, "normalizeContextWindowObject");
function modalitiesField(value) {
  if (!value || typeof value !== "object") return void 0;
  const raw = value;
  const input = Array.isArray(raw.input) ? raw.input.filter((item) => typeof item === "string") : void 0;
  const output = Array.isArray(raw.output) ? raw.output.filter((item) => typeof item === "string") : void 0;
  return (input == null ? void 0 : input.length) || (output == null ? void 0 : output.length) ? {
    ...(input == null ? void 0 : input.length) ? {
      input
    } : {},
    ...(output == null ? void 0 : output.length) ? {
      output
    } : {}
  } : void 0;
}
__name(modalitiesField, "modalitiesField");
function capabilitiesField(value) {
  if (!value || typeof value !== "object") return void 0;
  const raw = value;
  const entries = Object.entries(raw).filter(([, enabled]) => typeof enabled === "boolean");
  return entries.length ? Object.fromEntries(entries) : void 0;
}
__name(capabilitiesField, "capabilitiesField");
function pricingField(value) {
  if (!value || typeof value !== "object") return void 0;
  const raw = value;
  const pricing = {
    ...stringField(raw.currency) ? {
      currency: raw.currency
    } : {},
    ...numberField(raw.inputPerMillionTokens) !== void 0 ? {
      inputPerMillionTokens: raw.inputPerMillionTokens
    } : {},
    ...numberField(raw.outputPerMillionTokens) !== void 0 ? {
      outputPerMillionTokens: raw.outputPerMillionTokens
    } : {},
    ...stringField(raw.displayText) ? {
      displayText: raw.displayText
    } : {}
  };
  return Object.keys(pricing).length ? pricing : void 0;
}
__name(pricingField, "pricingField");
function reasoningField(value) {
  if (!value || typeof value !== "object") return void 0;
  const raw = value;
  const result = {};
  const effort = stringField(raw.effort);
  if (effort !== void 0) result.effort = effort;
  const defaultEffort = stringField(raw.defaultEffort);
  if (defaultEffort !== void 0) result.defaultEffort = defaultEffort;
  if (Array.isArray(raw.supportedEfforts)) {
    result.supportedEfforts = raw.supportedEfforts.filter((item) => typeof item === "string");
  }
  const rawSummary = stringField(raw.summary);
  if (rawSummary !== void 0 && (rawSummary === "auto" || rawSummary === "concise" || rawSummary === "detailed")) {
    result.summary = rawSummary;
  }
  const canDisable = booleanField(raw.canDisableThinking);
  if (canDisable !== void 0) result.canDisableThinking = canDisable;
  return Object.keys(result).length > 0 ? result : void 0;
}
__name(reasoningField, "reasoningField");
function normalizeModel(raw) {
  var _a8, _b, _c, _d, _e, _f, _g, _h, _i;
  const id = stringField(raw.id, raw.ID);
  if (!id) return null;
  const serverEnabled = booleanField(raw.enabled, raw.Enabled);
  const serverDisabled = booleanField(raw.disabled, raw.Disabled);
  let enabled;
  let disabled;
  if (serverEnabled !== void 0) {
    enabled = serverEnabled;
    if (serverDisabled !== void 0) disabled = serverDisabled;
  } else if (serverDisabled !== void 0) {
    disabled = serverDisabled;
    enabled = !serverDisabled;
  } else {
    enabled = true;
  }
  return {
    id,
    name: (_a8 = stringField(raw.name, raw.Name)) != null ? _a8 : id,
    ...stringField(raw.provider, raw.Provider) ? {
      provider: stringField(raw.provider, raw.Provider)
    } : {},
    ...stringField(raw.vendor, raw.Vendor) ? {
      vendor: stringField(raw.vendor, raw.Vendor)
    } : {},
    ...stringField(raw.family, raw.Family) ? {
      family: stringField(raw.family, raw.Family)
    } : {},
    ...stringField(raw.version, raw.Version) ? {
      version: stringField(raw.version, raw.Version)
    } : {},
    ...stringField(raw.description, raw.Description) ? {
      description: stringField(raw.description, raw.Description)
    } : {},
    ...stringField(raw.descriptionZh, raw.DescriptionZh) ? {
      descriptionZh: stringField(raw.descriptionZh, raw.DescriptionZh)
    } : {},
    ...stringField(raw.descriptionEn, raw.DescriptionEn) ? {
      descriptionEn: stringField(raw.descriptionEn, raw.DescriptionEn)
    } : {},
    ...stringField(raw.iconUrl, raw.IconURL) ? {
      iconUrl: stringField(raw.iconUrl, raw.IconURL)
    } : {},
    ...contextWindowField(raw.contextWindow, raw.ContextWindow) !== void 0 ? {
      contextWindow: contextWindowField(raw.contextWindow, raw.ContextWindow)
    } : {},
    ...numberField(raw.maxInputTokens, raw.MaxInputTokens) !== void 0 ? {
      maxInputTokens: numberField(raw.maxInputTokens, raw.MaxInputTokens)
    } : {},
    ...numberField(raw.maxOutputTokens, raw.MaxOutputTokens) !== void 0 ? {
      maxOutputTokens: numberField(raw.maxOutputTokens, raw.MaxOutputTokens)
    } : {},
    ...modalitiesField((_b = raw.modalities) != null ? _b : raw.Modalities) ? {
      modalities: modalitiesField((_c = raw.modalities) != null ? _c : raw.Modalities)
    } : {},
    ...capabilitiesField((_d = raw.capabilities) != null ? _d : raw.Capabilities) ? {
      capabilities: capabilitiesField((_e = raw.capabilities) != null ? _e : raw.Capabilities)
    } : {},
    enabled,
    ...disabled !== void 0 ? {
      disabled
    } : {},
    ...booleanField(raw.isDefault, raw.IsDefault) !== void 0 ? {
      isDefault: booleanField(raw.isDefault, raw.IsDefault)
    } : {},
    ...numberField(raw.sortOrder, raw.SortOrder) !== void 0 ? {
      sortOrder: numberField(raw.sortOrder, raw.SortOrder)
    } : {},
    ...pricingField((_f = raw.pricing) != null ? _f : raw.Pricing) ? {
      pricing: pricingField((_g = raw.pricing) != null ? _g : raw.Pricing)
    } : {},
    // User-specified sparse fields: preserve explicit false/0, omit only when absent.
    ...stringField(raw.credits, raw.Credits) ? {
      credits: stringField(raw.credits, raw.Credits)
    } : {},
    ...numberField(raw.maxAllowedSize, raw.MaxAllowedSize) !== void 0 ? {
      maxAllowedSize: numberField(raw.maxAllowedSize, raw.MaxAllowedSize)
    } : {},
    ...booleanField(raw.disabledMultimodal, raw.DisabledMultimodal) !== void 0 ? {
      disabledMultimodal: booleanField(raw.disabledMultimodal, raw.DisabledMultimodal)
    } : {},
    ...booleanField(raw.supportsImages, raw.SupportsImages) !== void 0 ? {
      supportsImages: booleanField(raw.supportsImages, raw.SupportsImages)
    } : {},
    ...booleanField(raw.supportsToolCall, raw.SupportsToolCall) !== void 0 ? {
      supportsToolCall: booleanField(raw.supportsToolCall, raw.SupportsToolCall)
    } : {},
    ...booleanField(raw.supportsReasoning, raw.SupportsReasoning) !== void 0 ? {
      supportsReasoning: booleanField(raw.supportsReasoning, raw.SupportsReasoning)
    } : {},
    ...booleanField(raw.onlyReasoning, raw.OnlyReasoning) !== void 0 ? {
      onlyReasoning: booleanField(raw.onlyReasoning, raw.OnlyReasoning)
    } : {},
    ...reasoningField((_h = raw.reasoning) != null ? _h : raw.Reasoning) ? {
      reasoning: reasoningField((_i = raw.reasoning) != null ? _i : raw.Reasoning)
    } : {},
    ...numberField(raw.temperature, raw.Temperature) !== void 0 ? {
      temperature: numberField(raw.temperature, raw.Temperature)
    } : {},
    ...numberField(raw.top_k, raw.Top_K) !== void 0 ? {
      top_k: numberField(raw.top_k, raw.Top_K)
    } : {},
    ...numberField(raw.top_p, raw.Top_P) !== void 0 ? {
      top_p: numberField(raw.top_p, raw.Top_P)
    } : {},
    ...numberField(raw.repetition_penalty, raw.Repetition_Penalty) !== void 0 ? {
      repetition_penalty: numberField(raw.repetition_penalty, raw.Repetition_Penalty)
    } : {}
  };
}
__name(normalizeModel, "normalizeModel");
var _ModelsAPI = class _ModelsAPI {
  constructor(baseUrl, fetch2) {
    __publicField(this, "baseUrl");
    __publicField(this, "fetch");
    this.baseUrl = baseUrl;
    this.fetch = fetch2;
  }
  /**
   * List the browser-safe public model directory for this application.
   *
   * `id` is the value to pass as `model` to `chat.completions.create()`.
   * Optional metadata is included only when the server explicitly provides
   * it; absence means unknown, not unsupported. The actual call result
   * is determined by the response, not by the directory entry.
   */
  async list(signal) {
    var _a8;
    let response;
    try {
      response = await this.fetch(`${this.baseUrl}/models`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        },
        signal
      });
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        throw err;
      }
      throw new CloudOpenAIError({
        message: `Network error: ${(_a8 = err == null ? void 0 : err.message) != null ? _a8 : "unknown"}`,
        type: "server_error",
        param: null,
        code: "gateway_network_error"
      }, {
        cause: err
      });
    }
    if (!response.ok) {
      throw await httpError(response);
    }
    const text = await response.text();
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new CloudOpenAIError({
        message: "Failed to parse models response: invalid JSON",
        type: "server_error",
        param: null,
        code: "gateway_invalid_response"
      });
    }
    const rawModels = Array.isArray(parsed) ? parsed : Array.isArray(parsed == null ? void 0 : parsed.data) ? parsed.data : [];
    const models = [];
    for (const raw of rawModels) {
      const normalized = normalizeModel(raw);
      if (normalized) models.push(normalized);
    }
    return models;
  }
};
__name(_ModelsAPI, "ModelsAPI");
var ModelsAPI = _ModelsAPI;
async function httpError(response) {
  var _a8;
  const text = await response.text().catch(() => "");
  let errorObj;
  try {
    const parsed = JSON.parse(text);
    if (parsed && typeof parsed === "object" && parsed.error) {
      const e = parsed.error;
      errorObj = {
        message: typeof e.message === "string" ? e.message : `HTTP ${response.status}`,
        type: typeof e.type === "string" ? e.type : "server_error",
        param: e.param === void 0 ? null : e.param,
        code: e.code === void 0 ? null : e.code
      };
    } else {
      errorObj = {
        message: typeof parsed === "string" ? parsed : `HTTP ${response.status}`,
        type: "server_error",
        param: null,
        code: null
      };
    }
  } catch {
    errorObj = {
      message: text || `HTTP ${response.status}`,
      type: "server_error",
      param: null,
      code: null
    };
  }
  const requestId = (_a8 = response.headers.get("x-request-id")) != null ? _a8 : void 0;
  const retryAfterMs = parseRetryAfter(response.headers.get("retry-after"));
  return new CloudOpenAIError(errorObj, {
    status: response.status,
    requestId,
    retryAfterMs
  });
}
__name(httpError, "httpError");

// src/modules/llm/sse.ts
init_miniprogram_url();

// src/modules/llm/utf8-decoder.ts
init_miniprogram_url();
var _Utf8Decoder = class _Utf8Decoder {
  constructor() {
    __publicField(this, "codePoint", 0);
    __publicField(this, "bytesNeeded", 0);
    __publicField(this, "bytesSeen", 0);
    __publicField(this, "lowerBoundary", 128);
    __publicField(this, "upperBoundary", 191);
    __publicField(this, "bomSeen", false);
    __publicField(this, "streaming", false);
  }
  resetSequence() {
    this.codePoint = 0;
    this.bytesNeeded = 0;
    this.bytesSeen = 0;
    this.lowerBoundary = 128;
    this.upperBoundary = 191;
  }
  decode(input = new Uint8Array(), options = {}) {
    if (!this.streaming) {
      this.resetSequence();
      this.bomSeen = false;
    }
    this.streaming = options.stream === true;
    let output = "";
    const emit = /* @__PURE__ */ __name((codePoint) => {
      if (!this.bomSeen) {
        this.bomSeen = true;
        if (codePoint === 65279) return;
      }
      output += String.fromCodePoint(codePoint);
    }, "emit");
    for (let i = 0; i < input.length; i++) {
      const byte = input[i];
      if (this.bytesNeeded === 0) {
        if (byte <= 127) {
          emit(byte);
        } else if (byte >= 194 && byte <= 223) {
          this.bytesNeeded = 1;
          this.codePoint = byte & 31;
        } else if (byte >= 224 && byte <= 239) {
          this.bytesNeeded = 2;
          this.codePoint = byte & 15;
          if (byte === 224) this.lowerBoundary = 160;
          if (byte === 237) this.upperBoundary = 159;
        } else if (byte >= 240 && byte <= 244) {
          this.bytesNeeded = 3;
          this.codePoint = byte & 7;
          if (byte === 240) this.lowerBoundary = 144;
          if (byte === 244) this.upperBoundary = 143;
        } else {
          emit(65533);
        }
        continue;
      }
      if (byte < this.lowerBoundary || byte > this.upperBoundary) {
        this.resetSequence();
        emit(65533);
        i--;
        continue;
      }
      this.lowerBoundary = 128;
      this.upperBoundary = 191;
      this.codePoint = this.codePoint << 6 | byte & 63;
      this.bytesSeen++;
      if (this.bytesSeen === this.bytesNeeded) {
        emit(this.codePoint);
        this.resetSequence();
      }
    }
    if (!this.streaming && this.bytesNeeded > 0) {
      emit(65533);
      this.resetSequence();
    }
    return output;
  }
};
__name(_Utf8Decoder, "Utf8Decoder");
var Utf8Decoder = _Utf8Decoder;

// src/modules/llm/sse.ts
var _a;
var SSEDecoder = (_a = class {
  constructor() {
    __publicField(this, "event", null);
    __publicField(this, "dataParts", []);
  }
  /**
   * Feed a single line. Returns an SSEEvent when the current event is
   * terminated (i.e. when an empty line is received), or null otherwise.
   */
  decode(line) {
    let l = line;
    if (l.endsWith("\r")) {
      l = l.slice(0, -1);
    }
    if (l === "") {
      if (this.event === null && this.dataParts.length === 0) {
        return null;
      }
      const ev = {
        event: this.event,
        data: this.dataParts.join("\n")
      };
      this.event = null;
      this.dataParts = [];
      return ev;
    }
    if (l.startsWith(":")) {
      return null;
    }
    const colonIdx = l.indexOf(":");
    let field;
    let value;
    if (colonIdx === -1) {
      field = l;
      value = "";
    } else {
      field = l.slice(0, colonIdx);
      let rest = l.slice(colonIdx + 1);
      if (rest.startsWith(" ")) {
        rest = rest.slice(1);
      }
      value = rest;
    }
    if (field === "event") {
      this.event = value;
    } else if (field === "data") {
      this.dataParts.push(value);
    }
    return null;
  }
  /** Flush any remaining buffered data as a final event. */
  flush() {
    if (this.event === null && this.dataParts.length === 0) {
      return null;
    }
    const ev = {
      event: this.event,
      data: this.dataParts.join("\n")
    };
    this.event = null;
    this.dataParts = [];
    return ev;
  }
}, __name(_a, "SSEDecoder"), _a);
var _a2;
var LineDecoder = (_a2 = class {
  constructor() {
    __publicField(this, "buffer", new Uint8Array());
    __publicField(this, "decoder");
    this.decoder = typeof TextDecoder === "undefined" ? new Utf8Decoder() : new TextDecoder("utf-8");
  }
  /**
   * Decode a chunk and yield complete lines.
   *
   * Lines are terminated by \n, \r, or \r\n. The line terminators are
   * NOT included in the returned strings.
   */
  decode(chunk) {
    const newData = new Uint8Array(this.buffer.length + chunk.length);
    newData.set(this.buffer);
    newData.set(chunk, this.buffer.length);
    this.buffer = newData;
    const lines = [];
    let start = 0;
    for (let i = 0; i < this.buffer.length; i++) {
      if (this.buffer[i] === 10 || this.buffer[i] === 13) {
        const lineBytes = this.buffer.subarray(start, i);
        const line = this.decoder.decode(lineBytes, {
          stream: true
        });
        lines.push(line);
        if (this.buffer[i] === 13 && i + 1 < this.buffer.length && this.buffer[i + 1] === 10) {
          i++;
        }
        start = i + 1;
      }
    }
    if (start > 0) {
      this.buffer = this.buffer.slice(start);
    }
    return lines;
  }
  /**
   * Flush remaining buffered data. Returns a final line if any data remains
   * (without a trailing newline). The TextDecoder is also flushed.
   */
  flush() {
    if (this.buffer.length === 0) {
      const remaining = this.decoder.decode();
      return remaining ? [
        remaining
      ] : [];
    }
    const line = this.decoder.decode(this.buffer, {
      stream: false
    });
    this.buffer = new Uint8Array();
    return line ? [
      line
    ] : [];
  }
}, __name(_a2, "LineDecoder"), _a2);
var SSE_DONE = "[DONE]";
async function* iterSSEEvents(body, signal) {
  const sseDecoder = new SSEDecoder();
  const lineDecoder = new LineDecoder();
  const reader = body.getReader();
  let aborted = false;
  const onAbort = /* @__PURE__ */ __name(() => {
    aborted = true;
    reader.cancel().catch(() => {
    });
  }, "onAbort");
  if (signal) {
    if (signal.aborted) {
      return;
    }
    signal.addEventListener("abort", onAbort, {
      once: true
    });
  }
  try {
    while (true) {
      if (aborted) {
        return;
      }
      let result;
      try {
        result = await reader.read();
      } catch (err) {
        if (aborted || err instanceof Error && err.name === "AbortError") {
          return;
        }
        throw err;
      }
      const { done, value } = result;
      if (done) break;
      for (const line of lineDecoder.decode(value)) {
        const ev = sseDecoder.decode(line);
        if (ev) yield ev;
      }
    }
    for (const line of lineDecoder.flush()) {
      const ev = sseDecoder.decode(line);
      if (ev) yield ev;
    }
    const finalEv = sseDecoder.flush();
    if (finalEv) yield finalEv;
  } finally {
    if (signal) {
      signal.removeEventListener("abort", onAbort);
    }
    try {
      reader.releaseLock();
    } catch {
    }
  }
}
__name(iterSSEEvents, "iterSSEEvents");

// src/modules/llm/chat.ts
function extractSSEError(data, requestId) {
  var _a8;
  const init = requestId ? {
    requestId
  } : {};
  try {
    const parsed = JSON.parse(data);
    if (parsed && typeof parsed === "object") {
      const errorObj = (_a8 = parsed.error) != null ? _a8 : parsed;
      if (errorObj && typeof errorObj === "object") {
        return new CloudOpenAIError({
          message: typeof errorObj.message === "string" ? errorObj.message : "Stream error",
          type: typeof errorObj.type === "string" ? errorObj.type : "server_error",
          param: errorObj.param === void 0 ? null : errorObj.param,
          code: errorObj.code === void 0 ? null : errorObj.code
        }, init);
      }
    }
  } catch {
  }
  return new CloudOpenAIError({
    message: data || "Stream error",
    type: "server_error",
    param: null,
    code: null
  }, init);
}
__name(extractSSEError, "extractSSEError");
var _ChatCompletionsAPI = class _ChatCompletionsAPI {
  constructor(baseUrl, fetch2) {
    __publicField(this, "baseUrl");
    __publicField(this, "fetch");
    this.baseUrl = baseUrl;
    this.fetch = fetch2;
  }
  create(input) {
    if (input.stream !== true) {
      throw new CloudOpenAIError({
        message: "stream must be true; non-streaming chat completions are not supported",
        type: "invalid_request_error",
        param: "stream",
        code: "request_stream_required"
      });
    }
    return this.createStreaming(input);
  }
  /**
   * Streaming chat completion — returns an async generator of chunks.
   *
   * Reads the SSE stream incrementally, yielding ChatCompletionChunk objects.
   * `stream_options` is passed through unchanged when present.
   *
   * The `X-Request-Id` response header is captured and attached (as
   * `requestId`) to every `CloudOpenAIError` thrown from within the stream:
   * `event: error`, chunk-embedded error, JSON parse failure, and missing
   * `[DONE]` interruption. Non-2xx HTTP errors continue to go through
   * `httpError`, which independently extracts `X-Request-Id`.
   *
   * Throws CloudOpenAIError on:
   * - `event: error` in the stream
   * - Stream ends without `[DONE]` (gateway_stream_interrupted)
   * - JSON parse errors in data frames
   * - Caller abort (AbortSignal) — exits silently, no throw
   */
  async *createStreaming(input) {
    var _a8, _b, _c;
    const { signal, conversationId, ...body } = input;
    body.stream = true;
    let response;
    try {
      response = await this.fetch(`${this.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
          "Content-Type": "application/json",
          ...conversationId !== void 0 ? {
            "X-Conversation-ID": conversationId
          } : {}
        },
        body: JSON.stringify(body),
        signal
      });
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      throw new CloudOpenAIError({
        message: `Network error: ${(_a8 = err == null ? void 0 : err.message) != null ? _a8 : "unknown"}`,
        type: "server_error",
        param: null,
        code: "gateway_network_error"
      }, {
        cause: err
      });
    }
    if (!response.ok) {
      throw await httpError(response);
    }
    if (!response.body) {
      throw new CloudOpenAIError({
        message: "Response body is empty \u2014 streaming not supported",
        type: "server_error",
        param: null,
        code: "gateway_invalid_response"
      }, {
        requestId: (_b = response.headers.get("x-request-id")) != null ? _b : void 0
      });
    }
    const requestId = (_c = response.headers.get("x-request-id")) != null ? _c : void 0;
    let receivedDone = false;
    let threw = false;
    try {
      for await (const sseEvent of iterSSEEvents(response.body, signal)) {
        if (sseEvent.event === "error") {
          threw = true;
          throw extractSSEError(sseEvent.data, requestId);
        }
        if (sseEvent.event === null || sseEvent.event === "") {
          if (sseEvent.data === SSE_DONE) {
            receivedDone = true;
            return;
          }
          if (!sseEvent.data) {
            continue;
          }
          let chunk;
          try {
            chunk = JSON.parse(sseEvent.data);
          } catch {
            threw = true;
            throw new CloudOpenAIError({
              message: `Failed to parse SSE data: ${sseEvent.data}`,
              type: "server_error",
              param: null,
              code: "gateway_invalid_response"
            }, {
              requestId
            });
          }
          if (chunk && typeof chunk === "object" && "error" in chunk) {
            threw = true;
            const errObj = chunk.error;
            throw new CloudOpenAIError({
              message: typeof (errObj == null ? void 0 : errObj.message) === "string" ? errObj.message : "Stream error",
              type: typeof (errObj == null ? void 0 : errObj.type) === "string" ? errObj.type : "server_error",
              param: (errObj == null ? void 0 : errObj.param) === void 0 ? null : errObj.param,
              code: (errObj == null ? void 0 : errObj.code) === void 0 ? null : errObj.code
            }, {
              requestId
            });
          }
          yield chunk;
        }
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      threw = true;
      throw err;
    }
    if (!receivedDone && !threw && !(signal == null ? void 0 : signal.aborted)) {
      throw new CloudOpenAIError({
        message: "\u6D41\u5F0F\u54CD\u5E94\u4E2D\u65AD\u3002",
        type: "server_error",
        param: null,
        code: "gateway_stream_interrupted"
      }, {
        requestId
      });
    }
  }
};
__name(_ChatCompletionsAPI, "ChatCompletionsAPI");
var ChatCompletionsAPI = _ChatCompletionsAPI;

// src/modules/llm.ts
var _LlmModule = class _LlmModule {
  constructor(config, fetch2) {
    __publicField(this, "fetch");
    /** 该模块的数据面基址。 */
    __publicField(this, "baseUrl");
    /** Models namespace。 */
    __publicField(this, "models");
    /** Chat namespace。 */
    __publicField(this, "chat");
    this.fetch = fetch2;
    this.baseUrl = `${config.endpoint}${CLOUD_MODULE_PATHS.llm}`;
    this.models = new ModelsAPI(this.baseUrl, this.fetch);
    this.chat = {
      completions: new ChatCompletionsAPI(this.baseUrl, this.fetch)
    };
  }
};
__name(_LlmModule, "LlmModule");
var LlmModule = _LlmModule;

// src/modules/storage.ts
init_miniprogram_url();

// src/vendor/storage/packages/StorageFileApi.ts
init_miniprogram_url();

// src/vendor/storage/lib/common/errors.ts
init_miniprogram_url();
var _StorageError = class _StorageError extends Error {
  constructor(message, namespace = "storage", status, statusCode) {
    super(message);
    __publicField(this, "__isStorageError", true);
    __publicField(this, "namespace");
    __publicField(this, "status");
    __publicField(this, "statusCode");
    this.namespace = namespace;
    this.name = namespace === "vectors" ? "StorageVectorsError" : "StorageError";
    this.status = status;
    this.statusCode = statusCode;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
__name(_StorageError, "StorageError");
var StorageError = _StorageError;
function isStorageError(error) {
  return typeof error === "object" && error !== null && "__isStorageError" in error;
}
__name(isStorageError, "isStorageError");
var _StorageApiError = class _StorageApiError extends StorageError {
  constructor(message, status, statusCode, namespace = "storage", code) {
    super(message, namespace, status, statusCode);
    __publicField(this, "status");
    __publicField(this, "statusCode");
    /**
    * Service-specific error code from the Storage API response body, such as
    * `NoSuchKey`, `AccessDenied` or `ResourceAlreadyExists`. Use this to branch
    * on the specific error rather than parsing the message.
    * @see https://supabase.com/docs/guides/storage/debugging/error-codes
    */
    __publicField(this, "code");
    this.name = namespace === "vectors" ? "StorageVectorsApiError" : "StorageApiError";
    this.status = status;
    this.statusCode = statusCode;
    this.code = code;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      code: this.code
    };
  }
};
__name(_StorageApiError, "StorageApiError");
var StorageApiError = _StorageApiError;
var _StorageUnknownError = class _StorageUnknownError extends StorageError {
  constructor(message, originalError, namespace = "storage") {
    super(message, namespace);
    __publicField(this, "originalError");
    this.name = namespace === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError";
    this.originalError = originalError;
  }
};
__name(_StorageUnknownError, "StorageUnknownError");
var StorageUnknownError = _StorageUnknownError;

// src/vendor/storage/lib/common/fetch.ts
init_miniprogram_url();

// src/vendor/storage/lib/common/headers.ts
init_miniprogram_url();
function setHeader(headers, name, value) {
  const result = {
    ...headers
  };
  const nameLower = name.toLowerCase();
  for (const key of Object.keys(result)) {
    if (key.toLowerCase() === nameLower) {
      delete result[key];
    }
  }
  result[nameLower] = value;
  return result;
}
__name(setHeader, "setHeader");
function normalizeHeaders(headers) {
  const result = {};
  for (const [key, value] of Object.entries(headers)) {
    result[key.toLowerCase()] = value;
  }
  return result;
}
__name(normalizeHeaders, "normalizeHeaders");

// src/vendor/storage/lib/common/helpers.ts
init_miniprogram_url();
var resolveFetch2 = /* @__PURE__ */ __name((customFetch) => {
  if (customFetch) {
    return (...args) => customFetch(...args);
  }
  return (...args) => fetch(...args);
}, "resolveFetch");
var isPlainObject = /* @__PURE__ */ __name((value) => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}, "isPlainObject");
var recursiveToCamel = /* @__PURE__ */ __name((item) => {
  if (Array.isArray(item)) {
    return item.map((el) => recursiveToCamel(el));
  } else if (typeof item === "function" || item !== Object(item)) {
    return item;
  }
  const result = {};
  Object.entries(item).forEach(([key, value]) => {
    const newKey = key.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, ""));
    result[newKey] = recursiveToCamel(value);
  });
  return result;
}, "recursiveToCamel");
var encodeStoragePath = /* @__PURE__ */ __name((path) => path.split("/").map(encodeURIComponent).join("/"), "encodeStoragePath");

// src/vendor/storage/lib/common/fetch.ts
var _getErrorMessage = /* @__PURE__ */ __name((err) => {
  if (typeof err === "object" && err !== null) {
    const e = err;
    if (typeof e.msg === "string") return e.msg;
    if (typeof e.message === "string") return e.message;
    if (typeof e.error_description === "string") return e.error_description;
    if (typeof e.error === "string") return e.error;
    if (typeof e.error === "object" && e.error !== null) {
      const nested = e.error;
      if (typeof nested.message === "string") return nested.message;
    }
  }
  return JSON.stringify(err);
}, "_getErrorMessage");
var handleError = /* @__PURE__ */ __name(async (error, reject, options, namespace) => {
  const isResponseLike = error !== null && typeof error === "object" && "json" in error && typeof error.json === "function";
  if (isResponseLike) {
    const responseError = error;
    let status = parseInt(String(responseError.status), 10);
    if (!Number.isFinite(status)) {
      status = 500;
    }
    responseError.json().then((err) => {
      const statusCode = (err == null ? void 0 : err.statusCode) || (err == null ? void 0 : err.code) || status + "";
      reject(new StorageApiError(_getErrorMessage(err), status, statusCode, namespace, err == null ? void 0 : err.code));
    }).catch(() => {
      const statusCode = status + "";
      const message = responseError.statusText || `HTTP ${status} error`;
      reject(new StorageApiError(message, status, statusCode, namespace));
    });
  } else {
    reject(new StorageUnknownError(_getErrorMessage(error), error, namespace));
  }
}, "handleError");
var _getRequestParams = /* @__PURE__ */ __name((method, options, parameters, body) => {
  const params = {
    method,
    headers: (options == null ? void 0 : options.headers) || {}
  };
  if (method === "GET" || method === "HEAD" || !body) {
    return {
      ...params,
      ...parameters
    };
  }
  if (isPlainObject(body)) {
    const headers = (options == null ? void 0 : options.headers) || {};
    let contentType;
    for (const [key, value] of Object.entries(headers)) {
      if (key.toLowerCase() === "content-type") {
        contentType = value;
      }
    }
    params.headers = setHeader(headers, "Content-Type", contentType != null ? contentType : "application/json");
    params.body = JSON.stringify(body);
  } else {
    params.body = body;
  }
  if (options == null ? void 0 : options.duplex) {
    params.duplex = options.duplex;
  }
  return {
    ...params,
    ...parameters
  };
}, "_getRequestParams");
async function _handleRequest(fetcher, method, url, options, parameters, body, namespace) {
  return new Promise((resolve, reject) => {
    fetcher(url, _getRequestParams(method, options, parameters, body)).then((result) => {
      if (!result.ok) throw result;
      if (options == null ? void 0 : options.noResolveJson) return result;
      if (namespace === "vectors") {
        const contentType = result.headers.get("content-type");
        const contentLength = result.headers.get("content-length");
        if (contentLength === "0" || result.status === 204) {
          return {};
        }
        if (!contentType || !contentType.includes("application/json")) {
          return {};
        }
      }
      return result.json();
    }).then((data) => resolve(data)).catch((error) => handleError(error, reject, options, namespace));
  });
}
__name(_handleRequest, "_handleRequest");
function createFetchApi(namespace = "storage") {
  return {
    /**
    * Performs a GET request
    * @param fetcher - Fetch function to use
    * @param url - Request URL
    * @param options - Custom fetch options
    * @param parameters - Additional fetch parameters
    * @returns Promise with parsed response
    */
    get: /* @__PURE__ */ __name(async (fetcher, url, options, parameters) => {
      return _handleRequest(fetcher, "GET", url, options, parameters, void 0, namespace);
    }, "get"),
    /**
    * Performs a POST request
    * @param fetcher - Fetch function to use
    * @param url - Request URL
    * @param body - Request body to be JSON stringified
    * @param options - Custom fetch options
    * @param parameters - Additional fetch parameters
    * @returns Promise with parsed response
    */
    post: /* @__PURE__ */ __name(async (fetcher, url, body, options, parameters) => {
      return _handleRequest(fetcher, "POST", url, options, parameters, body, namespace);
    }, "post"),
    /**
    * Performs a PUT request
    * @param fetcher - Fetch function to use
    * @param url - Request URL
    * @param body - Request body to be JSON stringified
    * @param options - Custom fetch options
    * @param parameters - Additional fetch parameters
    * @returns Promise with parsed response
    */
    put: /* @__PURE__ */ __name(async (fetcher, url, body, options, parameters) => {
      return _handleRequest(fetcher, "PUT", url, options, parameters, body, namespace);
    }, "put"),
    /**
    * Performs a HEAD request
    * @param fetcher - Fetch function to use
    * @param url - Request URL
    * @param options - Custom fetch options
    * @param parameters - Additional fetch parameters
    * @returns Promise with Response object (not JSON parsed)
    */
    head: /* @__PURE__ */ __name(async (fetcher, url, options, parameters) => {
      return _handleRequest(fetcher, "HEAD", url, {
        ...options,
        noResolveJson: true
      }, parameters, void 0, namespace);
    }, "head"),
    /**
    * Performs a DELETE request
    * @param fetcher - Fetch function to use
    * @param url - Request URL
    * @param body - Request body to be JSON stringified
    * @param options - Custom fetch options
    * @param parameters - Additional fetch parameters
    * @returns Promise with parsed response
    */
    remove: /* @__PURE__ */ __name(async (fetcher, url, body, options, parameters) => {
      return _handleRequest(fetcher, "DELETE", url, options, parameters, body, namespace);
    }, "remove")
  };
}
__name(createFetchApi, "createFetchApi");
var defaultApi = createFetchApi("storage");
var { get, post, put, head, remove } = defaultApi;
var vectorsApi = createFetchApi("vectors");

// src/vendor/storage/lib/common/BaseApiClient.ts
init_miniprogram_url();
var _BaseApiClient = class _BaseApiClient {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(url, headers = {}, fetch2, namespace = "storage") {
    __publicField(this, "url");
    __publicField(this, "headers");
    __publicField(this, "fetch");
    __publicField(this, "shouldThrowOnError", false);
    __publicField(this, "namespace");
    this.url = url;
    this.headers = normalizeHeaders(headers);
    this.fetch = resolveFetch2(fetch2);
    this.namespace = namespace;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  /**
  * Set an HTTP header for the request.
  * Creates a shallow copy of headers to avoid mutating shared state.
  *
  * @param name - Header name
  * @param value - Header value
  * @returns this - For method chaining
  */
  setHeader(name, value) {
    this.headers = setHeader(this.headers, name, value);
    return this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example Handling an operation
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(operation) {
    try {
      const data = await operation();
      return {
        data,
        error: null
      };
    } catch (error) {
      if (this.shouldThrowOnError) {
        throw error;
      }
      if (isStorageError(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
};
__name(_BaseApiClient, "BaseApiClient");
var BaseApiClient = _BaseApiClient;

// src/vendor/storage/packages/BlobDownloadBuilder.ts
init_miniprogram_url();

// src/vendor/storage/packages/StreamDownloadBuilder.ts
init_miniprogram_url();
var _a3;
_a3 = Symbol.toStringTag;
var _StreamDownloadBuilder = class _StreamDownloadBuilder {
  constructor(downloadFn, shouldThrowOnError) {
    __publicField(this, "downloadFn");
    __publicField(this, "shouldThrowOnError");
    __publicField(this, _a3, "StreamDownloadBuilder");
    __publicField(this, "promise", null);
    this.downloadFn = downloadFn;
    this.shouldThrowOnError = shouldThrowOnError;
  }
  then(onfulfilled, onrejected) {
    return this.getPromise().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.getPromise().catch(onrejected);
  }
  finally(onfinally) {
    return this.getPromise().finally(onfinally);
  }
  getPromise() {
    if (!this.promise) {
      this.promise = this.execute();
    }
    return this.promise;
  }
  async execute() {
    try {
      const result = await this.downloadFn();
      return {
        data: result.body,
        error: null
      };
    } catch (error) {
      if (this.shouldThrowOnError) {
        throw error;
      }
      if (isStorageError(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
};
__name(_StreamDownloadBuilder, "StreamDownloadBuilder");
var StreamDownloadBuilder = _StreamDownloadBuilder;

// src/vendor/storage/packages/BlobDownloadBuilder.ts
var _a4;
_a4 = Symbol.toStringTag;
var _BlobDownloadBuilder = class _BlobDownloadBuilder {
  constructor(downloadFn, shouldThrowOnError) {
    __publicField(this, "downloadFn");
    __publicField(this, "shouldThrowOnError");
    __publicField(this, _a4, "BlobDownloadBuilder");
    __publicField(this, "promise", null);
    this.downloadFn = downloadFn;
    this.shouldThrowOnError = shouldThrowOnError;
  }
  asStream() {
    return new StreamDownloadBuilder(this.downloadFn, this.shouldThrowOnError);
  }
  then(onfulfilled, onrejected) {
    return this.getPromise().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.getPromise().catch(onrejected);
  }
  finally(onfinally) {
    return this.getPromise().finally(onfinally);
  }
  getPromise() {
    if (!this.promise) {
      this.promise = this.execute();
    }
    return this.promise;
  }
  async execute() {
    try {
      const result = await this.downloadFn();
      return {
        data: await result.blob(),
        error: null
      };
    } catch (error) {
      if (this.shouldThrowOnError) {
        throw error;
      }
      if (isStorageError(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
};
__name(_BlobDownloadBuilder, "BlobDownloadBuilder");
var BlobDownloadBuilder = _BlobDownloadBuilder;

// src/vendor/storage/packages/StorageFileApi.ts
var DEFAULT_SEARCH_OPTIONS = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
var DEFAULT_FILE_OPTIONS = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var _StorageFileApi = class _StorageFileApi extends BaseApiClient {
  constructor(url, headers = {}, bucketId, fetch2) {
    super(url, headers, fetch2, "storage");
    __publicField(this, "bucketId");
    this.bucketId = bucketId;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(method, path, fileBody, fileOptions) {
    return this.handleOperation(async () => {
      let body;
      const options = {
        ...DEFAULT_FILE_OPTIONS,
        ...fileOptions
      };
      let headers = {
        ...this.headers,
        ...method === "POST" && {
          "x-upsert": String(options.upsert)
        }
      };
      const metadata = options.metadata;
      if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
        body = new FormData();
        body.append("cacheControl", options.cacheControl);
        if (metadata) {
          body.append("metadata", this.encodeMetadata(metadata));
        }
        body.append("", fileBody);
      } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
        body = fileBody;
        if (!body.has("cacheControl")) {
          body.append("cacheControl", options.cacheControl);
        }
        if (metadata && !body.has("metadata")) {
          body.append("metadata", this.encodeMetadata(metadata));
        }
      } else {
        body = fileBody;
        headers["cache-control"] = `max-age=${options.cacheControl}`;
        headers["content-type"] = options.contentType;
        if (metadata) {
          headers["x-metadata"] = this.toBase64(this.encodeMetadata(metadata));
        }
        const isStream = typeof ReadableStream !== "undefined" && body instanceof ReadableStream || body && typeof body === "object" && "pipe" in body && typeof body.pipe === "function";
        if (isStream && !options.duplex) {
          options.duplex = "half";
        }
      }
      if (fileOptions == null ? void 0 : fileOptions.headers) {
        for (const [key, value] of Object.entries(fileOptions.headers)) {
          headers = setHeader(headers, key, value);
        }
      }
      const cleanPath = this._removeEmptyFolders(path);
      const _path = this._getFinalPath(cleanPath);
      const data = await (method == "PUT" ? put : post)(this.fetch, `${this.url}/object/${_path}`, body, {
        headers,
        ...(options == null ? void 0 : options.duplex) ? {
          duplex: options.duplex
        } : {}
      });
      return {
        path: cleanPath,
        id: data.Id,
        fullPath: data.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @example Handling errors
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile)
  *
  * if (error) {
  *   // Log the full error so fields like `statusCode` and `error` (the
  *   // Storage error name, e.g. "Duplicate") aren't hidden behind `error.message`.
  *   console.error(error)
  *   return
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: only `insert` when you are uploading new files and `select`, `insert` and `update` when you are upserting files
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Upload file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async upload(path, fileBody, fileOptions) {
    return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async uploadToSignedUrl(path, token, fileBody, fileOptions) {
    const cleanPath = this._removeEmptyFolders(path);
    const _path = this._getFinalPath(cleanPath);
    const url = new import_url.default(this.url + `/object/upload/sign/${_path}`);
    url.searchParams.set("token", token);
    return this.handleOperation(async () => {
      let body;
      const options = {
        ...DEFAULT_FILE_OPTIONS,
        ...fileOptions
      };
      let headers = {
        ...this.headers,
        ...{
          "x-upsert": String(options.upsert)
        }
      };
      const metadata = options.metadata;
      if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
        body = new FormData();
        body.append("cacheControl", options.cacheControl);
        if (metadata) {
          body.append("metadata", this.encodeMetadata(metadata));
        }
        body.append("", fileBody);
      } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
        body = fileBody;
        if (!body.has("cacheControl")) {
          body.append("cacheControl", options.cacheControl);
        }
        if (metadata && !body.has("metadata")) {
          body.append("metadata", this.encodeMetadata(metadata));
        }
      } else {
        body = fileBody;
        headers["cache-control"] = `max-age=${options.cacheControl}`;
        headers["content-type"] = options.contentType;
        if (metadata) {
          headers["x-metadata"] = this.toBase64(this.encodeMetadata(metadata));
        }
        const isStream = typeof ReadableStream !== "undefined" && body instanceof ReadableStream || body && typeof body === "object" && "pipe" in body && typeof body.pipe === "function";
        if (isStream && !options.duplex) {
          options.duplex = "half";
        }
      }
      if (fileOptions == null ? void 0 : fileOptions.headers) {
        for (const [key, value] of Object.entries(fileOptions.headers)) {
          headers = setHeader(headers, key, value);
        }
      }
      const data = await put(this.fetch, url.toString(), body, {
        headers,
        ...(options == null ? void 0 : options.duplex) ? {
          duplex: options.duplex
        } : {}
      });
      return {
        path: cleanPath,
        fullPath: data.Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUploadUrl(path, options) {
    return this.handleOperation(async () => {
      let _path = this._getFinalPath(path);
      const headers = {
        ...this.headers
      };
      if (options == null ? void 0 : options.upsert) {
        headers["x-upsert"] = "true";
      }
      const data = await post(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, {
        headers
      });
      const url = new import_url.default(this.url + data.url);
      const token = url.searchParams.get("token");
      if (!token) {
        throw new StorageError("No token returned by API");
      }
      return {
        signedUrl: url.toString(),
        path,
        token
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, and metadata.
  * **Note:** The `upsert` option has no effect here. `update()` always replaces the
  * file at the given path, so the `x-upsert` header is not sent. To control upsert
  * behavior, use `upload()` instead.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - `update()` always replaces the file at the given path regardless of the `upsert` option.
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Update file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async update(path, fileBody, fileOptions) {
    return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async move(fromPath, toPath, options) {
    return this.handleOperation(async () => {
      return await post(this.fetch, `${this.url}/object/move`, {
        bucketId: this.bucketId,
        sourceKey: fromPath,
        destinationKey: toPath,
        destinationBucket: options == null ? void 0 : options.destinationBucket
      }, {
        headers: this.headers
      });
    });
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination options.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async copy(fromPath, toPath, options) {
    return this.handleOperation(async () => {
      const data = await post(this.fetch, `${this.url}/object/copy`, {
        bucketId: this.bucketId,
        sourceKey: fromPath,
        destinationKey: toPath,
        destinationBucket: options == null ? void 0 : options.destinationBucket
      }, {
        headers: this.headers
      });
      return {
        path: data.Key
      };
    });
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrl(path, expiresIn, options) {
    return this.handleOperation(async () => {
      let _path = this._getFinalPath(path);
      const hasTransform = typeof (options == null ? void 0 : options.transform) === "object" && options.transform !== null && Object.keys(options.transform).length > 0;
      let data = await post(this.fetch, `${this.url}/object/sign/${_path}`, {
        expiresIn,
        ...hasTransform ? {
          transform: options.transform
        } : {}
      }, {
        headers: this.headers
      });
      const query = new import_url_search_params.default();
      if (options == null ? void 0 : options.download) query.set("download", options.download === true ? "" : options.download);
      if ((options == null ? void 0 : options.cacheNonce) != null) query.set("cacheNonce", String(options.cacheNonce));
      const queryString = query.toString();
      const signedUrl = encodeURI(`${this.url}${data.signedURL}${queryString ? `&${queryString}` : ""}`);
      return {
        signedUrl
      };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrls(paths, expiresIn, options) {
    return this.handleOperation(async () => {
      const data = await post(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
        expiresIn,
        paths
      }, {
        headers: this.headers
      });
      const query = new import_url_search_params.default();
      if (options == null ? void 0 : options.download) query.set("download", options.download === true ? "" : options.download);
      if ((options == null ? void 0 : options.cacheNonce) != null) query.set("cacheNonce", String(options.cacheNonce));
      const queryString = query.toString();
      return data.map((datum) => ({
        ...datum,
        signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${queryString ? `&${queryString}` : ""}`) : null
      }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options Optional settings: `transform` to transform the asset before serving it to the client, and `cacheNonce` to append a cache nonce parameter to the URL to invalidate the cache.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  download(path, options, parameters) {
    const wantsTransformation = typeof (options == null ? void 0 : options.transform) === "object" && options.transform !== null && Object.keys(options.transform).length > 0;
    const renderPath = wantsTransformation ? "render/image/authenticated" : "object";
    const query = new import_url_search_params.default();
    if (options == null ? void 0 : options.transform) this.applyTransformOptsToQuery(query, options.transform);
    if ((options == null ? void 0 : options.cacheNonce) != null) query.set("cacheNonce", String(options.cacheNonce));
    const queryString = query.toString();
    const _path = this._getFinalPath(path);
    const downloadFn = /* @__PURE__ */ __name(() => get(this.fetch, `${this.url}/${renderPath}/${_path}${queryString ? `?${queryString}` : ""}`, {
      headers: this.headers,
      noResolveJson: true
    }, parameters), "downloadFn");
    return new BlobDownloadBuilder(downloadFn, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * Returns detailed file metadata including size, content type, and timestamps.
  * Note: The API returns `last_modified` field, not `updated_at`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  *
  * if (data) {
  *   console.log('Last modified:', data.lastModified)
  *   console.log('Size:', data.size)
  * }
  * ```
  */
  async info(path) {
    const _path = this._getFinalPath(path);
    return this.handleOperation(async () => {
      const data = await get(this.fetch, `${this.url}/object/info/${_path}`, {
        headers: this.headers
      });
      return recursiveToCamel(data);
    });
  }
  /**
  * Checks the existence of a file.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(path) {
    var _a8;
    const _path = this._getFinalPath(path);
    try {
      await head(this.fetch, `${this.url}/object/${_path}`, {
        headers: this.headers
      });
      return {
        data: true,
        error: null
      };
    } catch (error) {
      if (this.shouldThrowOnError) {
        throw error;
      }
      if (isStorageError(error)) {
        const status = error instanceof StorageApiError ? error.status : error instanceof StorageUnknownError ? (_a8 = error.originalError) == null ? void 0 : _a8.status : void 0;
        if (status !== void 0 && [
          400,
          404
        ].includes(status)) {
          return {
            data: false,
            error
          };
        }
      }
      throw error;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - The bucket needs to be set to public, either via [updateBucket()](/docs/reference/javascript/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  getPublicUrl(path, options) {
    const _path = this._getFinalPath(path);
    const query = new import_url_search_params.default();
    if (options == null ? void 0 : options.download) query.set("download", options.download === true ? "" : options.download);
    if (options == null ? void 0 : options.transform) this.applyTransformOptsToQuery(query, options.transform);
    if ((options == null ? void 0 : options.cacheNonce) != null) query.set("cacheNonce", String(options.cacheNonce));
    const queryString = query.toString();
    const wantsTransformation = typeof (options == null ? void 0 : options.transform) === "object" && options.transform !== null && Object.keys(options.transform).length > 0;
    const renderPath = wantsTransformation ? "render/image" : "object";
    return {
      data: {
        publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}`) + (queryString ? `?${queryString}` : "")
      }
    };
  }
  /**
  * Deletes files within the same bucket
  *
  * Returns an array of FileObject entries for the deleted files. Note that deprecated
  * fields like `bucket_id` may or may not be present in the response - do not rely on them.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `delete` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async remove(paths) {
    return this.handleOperation(async () => {
      return await remove(this.fetch, `${this.url}/object/${this.bucketId}`, {
        prefixes: paths
      }, {
        headers: this.headers
      });
    });
  }
  /**
  * Purges the CDN cache for a single object in this bucket.
  *
  * Maps to `DELETE /cdn/{bucket}/{path}` on the Storage API. The server
  * issues a CDN invalidation for the object and returns `{ message: 'success' }`.
  *
  * **Requires the `service_role` key.** The underlying endpoint enforces
  * `service_role` JWT — calls made with the anon key or a user JWT will be
  * rejected by the server.
  *
  * **Hosted CDN feature.** On self-hosted Supabase, the Storage service must
  * have `CDN_PURGE_ENDPOINT_URL` configured and the `purgeCache` tenant
  * feature enabled, otherwise the server returns an error.
  *
  * Operates on a single object path. There is no wildcard or recursion: pass
  * the exact path of the object you want invalidated.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The path (relative to the bucket) of the object to purge, e.g. `folder/avatar.png`.
  * @param options Optional purge cache options.
  * @param options.transformations If true, purges only transformations (resized/formatted variants), leaving the original cached file intact.
  * @param parameters Optional fetch parameters such as an `AbortController` signal.
  * @returns Promise with `{ data: { message }, error: null }` on success or `{ data: null, error }` on failure.
  *
  * @example Purge a single cached object
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .purgeCache('folder/avatar1.png')
  * ```
  *
  * @example Purge only transformations for a single object
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .purgeCache('folder/avatar1.png', { transformations: true })
  * ```
  */
  async purgeCache(path, options, parameters) {
    return this.handleOperation(async () => {
      const _path = encodeStoragePath(this._getFinalPath(path));
      const query = new import_url_search_params.default();
      if (options == null ? void 0 : options.transformations) {
        query.set("transformations", "true");
      }
      const queryString = query.toString();
      return await remove(this.fetch, `${this.url}/cdn/${_path}${queryString ? `?${queryString}` : ""}`, {}, {
        headers: this.headers
      }, parameters);
    });
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * **Important:** For folder entries, fields like `id`, `updated_at`, `created_at`,
  * `last_accessed_at`, and `metadata` will be `null`. Only files have these fields populated.
  * Additionally, deprecated fields like `bucket_id`, `owner`, and `buckets` are NOT returned
  * by this method.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files/folders or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  *
  * // Handle files vs folders
  * data?.forEach(item => {
  *   if (item.id !== null) {
  *     // It's a file
  *     console.log('File:', item.name, 'Size:', item.metadata?.size)
  *   } else {
  *     // It's a folder
  *     console.log('Folder:', item.name)
  *   }
  * })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async list(path, options, parameters) {
    return this.handleOperation(async () => {
      const sortBy = (options == null ? void 0 : options.sortBy) ? {
        ...DEFAULT_SEARCH_OPTIONS.sortBy,
        ...options.sortBy
      } : DEFAULT_SEARCH_OPTIONS.sortBy;
      const body = {
        ...DEFAULT_SEARCH_OPTIONS,
        ...options,
        sortBy,
        prefix: path || ""
      };
      return await post(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
        headers: this.headers
      }, parameters);
    });
  }
  /**
  * Lists all the files and folders within a bucket using the V2 API with pagination support.
  *
  * **Important:** Folder entries in the `folders` array only contain `name` and optionally `key` —
  * they have no `id`, timestamps, or `metadata` fields. Full file metadata is only available
  * on entries in the `objects` array.
  *
  * @experimental this method signature might change in the future
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Search options including prefix, cursor for pagination, limit, with_delimiter
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing folders/objects arrays with pagination info or error
  *
  * @example List files with pagination
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .listV2({
  *     prefix: 'folder/',
  *     limit: 100,
  *   })
  *
  * // Handle pagination
  * if (data?.hasNext) {
  *   const nextPage = await supabase
  *     .storage
  *     .from('avatars')
  *     .listV2({
  *       prefix: 'folder/',
  *       cursor: data.nextCursor,
  *     })
  * }
  *
  * // Handle files vs folders
  * data?.objects.forEach(file => {
  *   if (file.id !== null) {
  *     console.log('File:', file.name, 'Size:', file.metadata?.size)
  *   }
  * })
  * data?.folders.forEach(folder => {
  *   console.log('Folder:', folder.name)
  * })
  * ```
  */
  async listV2(options, parameters) {
    return this.handleOperation(async () => {
      const body = {
        ...options
      };
      return await post(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, body, {
        headers: this.headers
      }, parameters);
    });
  }
  encodeMetadata(metadata) {
    return JSON.stringify(metadata);
  }
  toBase64(data) {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(data).toString("base64");
    }
    return btoa(data);
  }
  _getFinalPath(path) {
    return `${this.bucketId}/${path.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(path) {
    return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  /** Modifies the `query`, appending values the from `transform` */
  applyTransformOptsToQuery(query, transform) {
    if (transform.width) query.set("width", transform.width.toString());
    if (transform.height) query.set("height", transform.height.toString());
    if (transform.resize) query.set("resize", transform.resize);
    if (transform.format) query.set("format", transform.format);
    if (transform.quality) query.set("quality", transform.quality.toString());
    return query;
  }
};
__name(_StorageFileApi, "StorageFileApi");
var StorageFileApi = _StorageFileApi;

// src/vendor/storage/lib/constants.ts
init_miniprogram_url();

// src/vendor/storage/lib/version.ts
init_miniprogram_url();
var version = "2.112.3";

// src/vendor/storage/lib/constants.ts
var DEFAULT_HEADERS = {
  "X-Client-Info": `storage-js/${version}`
};

// src/modules/storage.ts
var RUNTIME_STORAGE_BUCKET = "runtime";
var DEFAULT_SIGNED_URL_TTL_SECONDS = 10 * 60;
var MAX_SIGNED_URL_TTL_SECONDS = 60 * 60;
var _CloudStoragePathError = class _CloudStoragePathError extends Error {
  constructor(message) {
    super(message);
    this.name = "CloudStoragePathError";
  }
};
__name(_CloudStoragePathError, "CloudStoragePathError");
var CloudStoragePathError = _CloudStoragePathError;
var _a5;
_a5 = Symbol.toStringTag;
var _WorkBuddyStorageDownload = class _WorkBuddyStorageDownload {
  constructor(blob, stream) {
    __publicField(this, "blob");
    __publicField(this, "stream");
    __publicField(this, _a5, "WorkBuddyStorageDownload");
    this.blob = blob;
    this.stream = stream;
  }
  asStream() {
    return this.stream();
  }
  then(onfulfilled, onrejected) {
    return this.blob().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.blob().catch(onrejected);
  }
  finally(onfinally) {
    return this.blob().finally(onfinally);
  }
};
__name(_WorkBuddyStorageDownload, "WorkBuddyStorageDownload");
var WorkBuddyStorageDownload = _WorkBuddyStorageDownload;
var _WorkBuddyStorageBucket = class _WorkBuddyStorageBucket {
  constructor(fileApi) {
    __publicField(this, "fileApi");
    this.fileApi = fileApi;
  }
  upload(path, body, options) {
    return mapStorageResult(this.fileApi.upload(validateObjectPath(path), body, options));
  }
  update(path, body, options) {
    return mapStorageResult(this.fileApi.update(validateObjectPath(path), body, options));
  }
  list(prefix = "", options) {
    return mapStorageResult(this.fileApi.list(validateObjectPrefix(prefix), options));
  }
  listPage(options) {
    var _a8;
    return mapStorageResult(this.fileApi.listV2({
      ...options,
      prefix: validateObjectPrefix((_a8 = options == null ? void 0 : options.prefix) != null ? _a8 : "")
    }));
  }
  info(path) {
    return mapStorageResult(this.fileApi.info(validateObjectPath(path)));
  }
  async exists(path) {
    const result = await this.fileApi.exists(validateObjectPath(path));
    if (result.error) {
      return {
        data: null,
        error: normalizeStorageError(result.error)
      };
    }
    return {
      data: result.data,
      error: null
    };
  }
  download(path) {
    const builder = this.fileApi.download(validateObjectPath(path));
    return new WorkBuddyStorageDownload(() => mapStorageResult(builder), () => mapStorageResult(builder.asStream()));
  }
  remove(paths) {
    if (paths.length === 0) {
      throw new CloudStoragePathError("remove requires at least one object path.");
    }
    return mapStorageResult(this.fileApi.remove(paths.map(validateObjectPath)));
  }
  copy(fromPath, toPath) {
    return mapStorageResult(this.fileApi.copy(validateObjectPath(fromPath), validateObjectPath(toPath)));
  }
  move(fromPath, toPath) {
    return mapStorageResult(this.fileApi.move(validateObjectPath(fromPath), validateObjectPath(toPath)));
  }
  createSignedUrl(path, expiresIn = DEFAULT_SIGNED_URL_TTL_SECONDS) {
    return mapStorageResult(this.fileApi.createSignedUrl(validateObjectPath(path), validateSignedURLTTL(expiresIn)));
  }
  createSignedUrls(paths, expiresIn = DEFAULT_SIGNED_URL_TTL_SECONDS) {
    if (paths.length === 0) {
      throw new CloudStoragePathError("createSignedUrls requires at least one object path.");
    }
    return mapStorageResult(this.fileApi.createSignedUrls(paths.map(validateObjectPath), validateSignedURLTTL(expiresIn)));
  }
  createSignedUploadUrl(path, options) {
    var _a8;
    return mapStorageResult(this.fileApi.createSignedUploadUrl(validateObjectPath(path), {
      upsert: (_a8 = options == null ? void 0 : options.upsert) != null ? _a8 : false
    }));
  }
  uploadToSignedUrl(path, token, body, options) {
    if (!token) {
      throw new CloudStoragePathError("signed upload token is required.");
    }
    return mapStorageResult(this.fileApi.uploadToSignedUrl(validateObjectPath(path), token, body, options));
  }
};
__name(_WorkBuddyStorageBucket, "WorkBuddyStorageBucket");
var WorkBuddyStorageBucket = _WorkBuddyStorageBucket;
var _WorkBuddyStorageModule = class _WorkBuddyStorageModule extends WorkBuddyStorageBucket {
  constructor(client) {
    const storageClient = client;
    const runtimeApi = storageClient.from(RUNTIME_STORAGE_BUCKET);
    super(runtimeApi);
    __publicField(this, "runtime");
    this.runtime = new WorkBuddyStorageBucket(runtimeApi);
  }
  /**
   * 兼容 bucket-native 调用形态，但只允许固定的 `runtime`。
   * 终端应用不能枚举、创建或切换逻辑 Bucket。
   */
  from(bucketID = RUNTIME_STORAGE_BUCKET) {
    if (bucketID !== RUNTIME_STORAGE_BUCKET) {
      throw new CloudStoragePathError(`Only the "${RUNTIME_STORAGE_BUCKET}" storage bucket is available.`);
    }
    return this.runtime;
  }
  userPath(userID, relativePath) {
    return scopedPath("users", userID, relativePath);
  }
  sharedPath(ownerID, relativePath) {
    return scopedPath("shared", ownerID, relativePath);
  }
};
__name(_WorkBuddyStorageModule, "WorkBuddyStorageModule");
var WorkBuddyStorageModule = _WorkBuddyStorageModule;
function createStorageModule(config, fetch2) {
  const client = {
    from: /* @__PURE__ */ __name((bucketID) => new StorageFileApi(`${config.endpoint}${CLOUD_MODULE_PATHS.storage}`, DEFAULT_HEADERS, bucketID, fetch2), "from")
  };
  return new WorkBuddyStorageModule(client);
}
__name(createStorageModule, "createStorageModule");
function scopedPath(scope, ownerID, relativePath) {
  const owner = validatePathSegment(ownerID, "owner/user id");
  const relative = validatePath(relativePath, false);
  return validateObjectPath(`${scope}/${owner}/${relative}`);
}
__name(scopedPath, "scopedPath");
function validateObjectPath(path) {
  const normalized = validatePath(path, false);
  if (!normalized.includes("/")) {
    throw new CloudStoragePathError("Object paths must use users/<uid>/... or shared/<ownerUid>/....");
  }
  const [scope, owner, ...rest] = normalized.split("/");
  if (scope !== "users" && scope !== "shared" || !owner || rest.length === 0) {
    throw new CloudStoragePathError("Object paths must use users/<uid>/... or shared/<ownerUid>/....");
  }
  return normalized;
}
__name(validateObjectPath, "validateObjectPath");
function validateObjectPrefix(prefix) {
  if (prefix === "") {
    return "";
  }
  const normalized = validatePath(prefix, true);
  const [scope, owner] = normalized.split("/");
  if (scope === "shared" && !owner) {
    return "shared";
  }
  if (scope !== "users" && scope !== "shared" || !owner) {
    throw new CloudStoragePathError("List prefixes must start with users/<uid> or shared/<ownerUid>.");
  }
  return normalized;
}
__name(validateObjectPrefix, "validateObjectPrefix");
function validatePath(path, allowTrailingSlash) {
  if (typeof path !== "string" || path.trim() === "") {
    throw new CloudStoragePathError("Storage path must be a non-empty relative path.");
  }
  let decoded = path.trim();
  for (let index = 0; index < 3; index += 1) {
    try {
      const next = decodeURIComponent(decoded);
      if (next === decoded) break;
      decoded = next;
    } catch {
      throw new CloudStoragePathError("Storage path contains invalid URL encoding.");
    }
  }
  if (decoded.startsWith("/") || decoded.includes("\\") || decoded.includes("\0") || decoded.includes("//") || !allowTrailingSlash && decoded.endsWith("/")) {
    throw new CloudStoragePathError("Storage path is not a safe relative object path.");
  }
  const normalized = allowTrailingSlash ? decoded.replace(/\/+$/, "") : decoded;
  const segments = normalized.split("/");
  if (segments.some((segment) => segment === "" || segment === "." || segment === "..")) {
    throw new CloudStoragePathError("Storage path traversal is not allowed.");
  }
  return normalized;
}
__name(validatePath, "validatePath");
function validatePathSegment(value, label) {
  if (!value) {
    throw new CloudStoragePathError(`${label} is not a valid storage path segment.`);
  }
  let decoded = value;
  for (let index = 0; index < 3; index += 1) {
    try {
      const next = decodeURIComponent(decoded);
      if (next === decoded) break;
      decoded = next;
    } catch {
      throw new CloudStoragePathError(`${label} contains invalid URL encoding.`);
    }
  }
  if (decoded.includes("/") || decoded.includes("\\") || decoded.includes("\0") || decoded === "." || decoded === "..") {
    throw new CloudStoragePathError(`${label} is not a valid storage path segment.`);
  }
  return decoded;
}
__name(validatePathSegment, "validatePathSegment");
function validateSignedURLTTL(expiresIn) {
  if (!Number.isInteger(expiresIn) || expiresIn <= 0 || expiresIn > MAX_SIGNED_URL_TTL_SECONDS) {
    throw new CloudStoragePathError(`Signed URL expiry must be an integer between 1 and ${MAX_SIGNED_URL_TTL_SECONDS} seconds.`);
  }
  return expiresIn;
}
__name(validateSignedURLTTL, "validateSignedURLTTL");
async function mapStorageResult(source) {
  const result = await source;
  if (result.error) {
    return {
      data: null,
      error: normalizeStorageError(result.error)
    };
  }
  if (result.data === null) {
    return {
      data: null,
      error: {
        name: "CloudStorageResponseError",
        message: "Storage API returned neither data nor an error."
      }
    };
  }
  return {
    data: result.data,
    error: null
  };
}
__name(mapStorageResult, "mapStorageResult");
function normalizeStorageError(error) {
  if (error instanceof Error) {
    const source = error;
    return {
      name: source.name,
      message: source.message,
      status: source.status,
      statusCode: source.statusCode,
      code: source.code,
      cause: error
    };
  }
  return {
    name: "CloudStorageError",
    message: String(error),
    cause: error
  };
}
__name(normalizeStorageError, "normalizeStorageError");

// src/client.ts
var _WorkBuddyCloudClient = class _WorkBuddyCloudClient {
  constructor(config, options = {}) {
    __publicField(this, "config");
    /** PostgREST 语义的数据库模块（`/.cloud/database/rest`）。 */
    __publicField(this, "database");
    __publicField(this, "auth");
    /** 对象存储客户端（`/.cloud/storage`）。 */
    __publicField(this, "storage");
    __publicField(this, "llm");
    this.config = config;
    this.auth = new AuthModule(config, createCloudFetch(config, anonymousTokenProvider), {
      storage: options.storage
    });
    const fetch2 = createCloudFetch(config, () => this.auth.getAccessToken());
    this.database = createDatabaseModule(config, fetch2);
    this.storage = createStorageModule(config, fetch2);
    this.llm = new LlmModule(config, fetch2);
  }
  /** 归一化后的数据面基址（无尾斜杠）。 */
  get endpoint() {
    return this.config.endpoint;
  }
  /** 归一化后的环境中心 OAuth Relay 基址（无尾斜杠）。 */
  get oauthRelayBaseUrl() {
    return this.config.oauthRelayBaseUrl;
  }
};
__name(_WorkBuddyCloudClient, "WorkBuddyCloudClient");
var WorkBuddyCloudClient = _WorkBuddyCloudClient;

// src/modules/wechat-virtual/index.ts
init_miniprogram_url();

// src/modules/wechat-virtual/advertising-funds.ts
init_miniprogram_url();

// src/modules/wechat-virtual/shared.ts
init_miniprogram_url();
var FORBIDDEN_BODY_KEYS = /* @__PURE__ */ new Set([
  "applicationid",
  "openid",
  "authorizeraccesstoken",
  "offerid",
  "appkey",
  "sessionkey",
  "signature",
  "paysig",
  "token",
  "uid",
  "userid",
  "owneruserid",
  "enterpriseid",
  "principaltype",
  "authorizerappid",
  // user_ip：代币资源域 4 个接口官方必填，由服务端从入站请求（XFF/X-Real-Ip/RemoteAddr）
  // 注入；客户端提交即可伪造用户 IP，服务端会直接拒。这里同步拦，报错更早也更清楚。
  "userip"
]);
var REAUTH_REASON_CODES = /* @__PURE__ */ new Set([
  "18373",
  "geniebaaswechatauthrequired",
  "wechat_auth_required",
  "auth_required",
  "missing_required_scopes"
]);
function createWechatVirtualRequestInvoker(endpoint, fetch2) {
  return {
    async post(path, body) {
      var _a8, _b;
      let response;
      try {
        response = await fetch2(`${endpoint}${path}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
      } catch (error) {
        return fail2({
          kind: "network",
          status: 0,
          message: `Network error: ${(_a8 = error == null ? void 0 : error.message) != null ? _a8 : "unknown"}`,
          cause: error
        });
      }
      const payload = await readPayload(response);
      if (!response.ok) {
        return fail2(normalizeCloudError(response.status, payload));
      }
      const envelope = unwrapPayloadEnvelope(payload);
      if (envelope.error !== null) {
        return fail2(normalizeCloudError(response.status, envelope.error, payload));
      }
      return ok2((_b = envelope.data) != null ? _b : null);
    }
  };
}
__name(createWechatVirtualRequestInvoker, "createWechatVirtualRequestInvoker");
function buildWechatXpayPayload(params) {
  return buildWechatVirtualPayload({
    ...params,
    requiredKeyFormat: "snake_case"
  });
}
__name(buildWechatXpayPayload, "buildWechatXpayPayload");
function buildWechatVirtualPayload(params) {
  var _a8;
  if (!isWechatVirtualEnv(params.env)) {
    return invalidWechatVirtualRequestResult("wechatVirtual: env \u5FC5\u987B\u4E3A 0 \u6216 1\u3002", {
      field: "env",
      value: params.env
    });
  }
  const payload = {
    env: params.env
  };
  const occupiedNormalizedKeys = /* @__PURE__ */ new Set([
    "env"
  ]);
  const requiredKeyFormat = (_a8 = params.requiredKeyFormat) != null ? _a8 : "as-is";
  if (params.required) {
    for (const [rawKey, value] of Object.entries(params.required)) {
      if (value === void 0) {
        continue;
      }
      const trimmedKey = rawKey.trim();
      if (!trimmedKey) {
        return invalidWechatVirtualRequestResult("wechatVirtual: \u8BF7\u6C42\u5B57\u6BB5\u540D\u4E0D\u80FD\u4E3A\u7A7A\u3002", {
          key: rawKey
        });
      }
      const key = formatWechatVirtualRequiredKey(trimmedKey, requiredKeyFormat);
      const normalized = normalizeVirtualPaymentKey(key);
      if (occupiedNormalizedKeys.has(normalized)) {
        return invalidWechatVirtualRequestResult(`wechatVirtual: \u8BF7\u6C42\u5B57\u6BB5 ${key} \u4E0E\u5176\u4ED6\u5B57\u6BB5\u51B2\u7A81\u3002`);
      }
      payload[key] = value;
      occupiedNormalizedKeys.add(normalized);
    }
  }
  const body = params.body;
  if (body === void 0) {
    return ok2(payload);
  }
  if (!Array.isArray(body)) {
    return invalidWechatVirtualRequestResult("wechatVirtual: body \u5FC5\u987B\u662F\u5B57\u6BB5\u6570\u7EC4\u3002", {
      body
    });
  }
  for (const [index, field] of body.entries()) {
    if (!isRecord(field)) {
      return invalidWechatVirtualRequestResult(`wechatVirtual: body[${index}] \u5FC5\u987B\u662F { key, value }\u3002`, {
        field
      });
    }
    const rawKey = field.key;
    if (typeof rawKey !== "string" || rawKey.trim() === "") {
      return invalidWechatVirtualRequestResult(`wechatVirtual: body[${index}].key \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        key: rawKey
      });
    }
    const key = rawKey.trim();
    const normalizedKey = normalizeVirtualPaymentKey(key);
    if (FORBIDDEN_BODY_KEYS.has(normalizedKey)) {
      return invalidWechatVirtualRequestResult(`wechatVirtual: \u5B57\u6BB5 ${key} \u4E0D\u5141\u8BB8\u7531\u5BA2\u6237\u7AEF\u63D0\u4EA4\u3002`);
    }
    if (occupiedNormalizedKeys.has(normalizedKey)) {
      return invalidWechatVirtualRequestResult(`wechatVirtual: \u5B57\u6BB5 ${key} \u4E0E\u5DF2\u58F0\u660E\u5B57\u6BB5\u91CD\u590D\u6216\u51B2\u7A81\u3002`);
    }
    if (!isJsonSerializable(field.value)) {
      return invalidWechatVirtualRequestResult(`wechatVirtual: \u5B57\u6BB5 ${key} \u7684 value \u5FC5\u987B\u662F\u53EF JSON \u5E8F\u5217\u5316\u7684\u503C\u3002`, {
        value: field.value
      });
    }
    payload[formatWechatVirtualRequiredKey(key, requiredKeyFormat)] = field.value;
    occupiedNormalizedKeys.add(normalizedKey);
  }
  return ok2(payload);
}
__name(buildWechatVirtualPayload, "buildWechatVirtualPayload");
function invalidWechatVirtualRequestResult(message, cause) {
  return fail2({
    kind: "invalid-request",
    status: 0,
    message,
    cause
  });
}
__name(invalidWechatVirtualRequestResult, "invalidWechatVirtualRequestResult");
function isWechatVirtualEnv(value) {
  return value === 0 || value === 1;
}
__name(isWechatVirtualEnv, "isWechatVirtualEnv");
function resolveWechatVirtualPermission(error) {
  if (error.kind !== "permission-denied") {
    return null;
  }
  const detail = extractPermissionDetail(error.cause);
  return {
    category: detail.requiresReauthorization ? "reauthorization-required" : "permission-denied",
    reasonCode: detail.reasonCode,
    missingScopeIds: detail.missingScopeIds
  };
}
__name(resolveWechatVirtualPermission, "resolveWechatVirtualPermission");
function isWechatVirtualReauthorizationRequired(error) {
  var _a8;
  return ((_a8 = resolveWechatVirtualPermission(error)) == null ? void 0 : _a8.category) === "reauthorization-required";
}
__name(isWechatVirtualReauthorizationRequired, "isWechatVirtualReauthorizationRequired");
function ok2(data) {
  return {
    data,
    error: null
  };
}
__name(ok2, "ok");
function fail2(error) {
  return {
    data: null,
    error
  };
}
__name(fail2, "fail");
function hasOwn(source, key) {
  return Object.prototype.hasOwnProperty.call(source, key);
}
__name(hasOwn, "hasOwn");
function unwrapPayloadEnvelope(payload) {
  var _a8;
  if (!isRecord(payload) || !hasOwn(payload, "error")) {
    return {
      data: payload,
      error: null
    };
  }
  if (hasOwn(payload, "data")) {
    return {
      data: payload.data,
      error: (_a8 = payload.error) != null ? _a8 : null
    };
  }
  if (payload.error === null || payload.error === void 0) {
    return {
      data: payload,
      error: null
    };
  }
  return {
    data: null,
    error: payload.error
  };
}
__name(unwrapPayloadEnvelope, "unwrapPayloadEnvelope");
async function readPayload(response) {
  const text = await response.text().catch(() => "");
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
__name(readPayload, "readPayload");
function normalizeCloudError(status, source, cause) {
  const code = extractErrorCode(source);
  const message = extractErrorMessage(source, status);
  return {
    kind: inferErrorKind(status, code),
    status,
    code,
    message,
    cause: cause != null ? cause : source
  };
}
__name(normalizeCloudError, "normalizeCloudError");
function inferErrorKind(status, code) {
  if (status === 401) return "unauthenticated";
  if (status === 403) return "permission-denied";
  if (status === 404) return "not-found";
  if (status === 400 || status === 422) return "invalid-request";
  if (status === 429) return "rate-limited";
  if (status === 501) return "unimplemented";
  if (status >= 500) return "backend-unavailable";
  if (!code) return "unknown";
  const normalized = code.toLowerCase().replace(/[\s-]+/g, "_");
  if (normalized === "invalid_grant" || normalized === "unauthenticated") return "unauthenticated";
  if (normalized === "permission_denied" || normalized === "forbidden") return "permission-denied";
  if (normalized === "not_found") return "not-found";
  if (normalized.includes("invalid")) return "invalid-request";
  if (normalized.includes("rate") || normalized.includes("limit")) return "rate-limited";
  if (normalized.includes("unimplemented") || normalized.includes("not_implemented")) return "unimplemented";
  if (normalized.includes("credit") || normalized.includes("quota")) return "credits-exhausted";
  if (normalized.includes("network")) return "network";
  return "unknown";
}
__name(inferErrorKind, "inferErrorKind");
function extractErrorCode(source) {
  if (typeof source === "string") {
    return source;
  }
  if (!isRecord(source)) {
    return void 0;
  }
  const candidates = [
    source.code,
    source.error,
    source.error_code,
    source.errCode,
    source.statusCode
  ];
  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate) {
      return candidate;
    }
    if (typeof candidate === "number" && Number.isFinite(candidate)) {
      return String(candidate);
    }
  }
  return void 0;
}
__name(extractErrorCode, "extractErrorCode");
function extractErrorMessage(source, status) {
  if (typeof source === "string" && source) {
    return source;
  }
  if (isRecord(source)) {
    const candidates = [
      source.message,
      source.error_description,
      source.errorMessage,
      source.errMsg,
      source.error_msg,
      source.error
    ];
    for (const candidate of candidates) {
      if (typeof candidate === "string" && candidate) {
        return candidate;
      }
    }
  }
  return `Request failed with status ${status}.`;
}
__name(extractErrorMessage, "extractErrorMessage");
function formatWechatVirtualRequiredKey(key, keyFormat) {
  if (keyFormat === "snake_case") {
    return toWechatXpaySnakeCaseKey(key);
  }
  return key;
}
__name(formatWechatVirtualRequiredKey, "formatWechatVirtualRequiredKey");
function toWechatXpaySnakeCaseKey(key) {
  return key.replace(/([A-Z]+)([A-Z][a-z0-9])/g, "$1_$2").replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s\-]+/g, "_").toLowerCase();
}
__name(toWechatXpaySnakeCaseKey, "toWechatXpaySnakeCaseKey");
function normalizeVirtualPaymentKey(key) {
  const lower = key.toLowerCase().trim();
  return lower.replace(/[_\-]/g, "");
}
__name(normalizeVirtualPaymentKey, "normalizeVirtualPaymentKey");
function isJsonSerializable(value) {
  return isJsonSerializableInternal(value, /* @__PURE__ */ new Set());
}
__name(isJsonSerializable, "isJsonSerializable");
function isJsonSerializableInternal(value, visited) {
  if (value === null) {
    return true;
  }
  switch (typeof value) {
    case "string":
    case "boolean":
      return true;
    case "number":
      return Number.isFinite(value);
    case "undefined":
    case "function":
    case "symbol":
    case "bigint":
      return false;
    case "object":
      if (visited.has(value)) {
        return false;
      }
      visited.add(value);
      if (Array.isArray(value)) {
        const result2 = value.every((item) => isJsonSerializableInternal(item, visited));
        visited.delete(value);
        return result2;
      }
      if (!isPlainObject2(value)) {
        visited.delete(value);
        return false;
      }
      const entries = Object.entries(value);
      const result = entries.every(([, itemValue]) => isJsonSerializableInternal(itemValue, visited));
      visited.delete(value);
      return result;
    default:
      return false;
  }
}
__name(isJsonSerializableInternal, "isJsonSerializableInternal");
function isPlainObject2(value) {
  if (!isRecord(value)) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
__name(isPlainObject2, "isPlainObject");
function extractPermissionDetail(source) {
  var _a8, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const record = isRecord(source) ? source : void 0;
  const details = record && isRecord(record.details) ? record.details : void 0;
  const reasonCode = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a8 = pickCode(details == null ? void 0 : details.code)) != null ? _a8 : pickCode(details == null ? void 0 : details.errorCode)) != null ? _b : pickCode(details == null ? void 0 : details.bizCode)) != null ? _c : pickCode(details == null ? void 0 : details.reason)) != null ? _d : pickCode(record == null ? void 0 : record.code)) != null ? _e : pickCode(record == null ? void 0 : record.error_code)) != null ? _f : pickCode(record == null ? void 0 : record.errorCode)) != null ? _g : pickCode(record == null ? void 0 : record.bizCode)) != null ? _h : pickCode(record == null ? void 0 : record.reason);
  const missingScopeIds = (_j = (_i = pickScopeIDs(details == null ? void 0 : details.missingScopeIds)) != null ? _i : pickScopeIDs(record == null ? void 0 : record.missingScopeIds)) != null ? _j : [];
  const normalizedReason = normalizeReasonCode(reasonCode);
  const requiresReauthorization = missingScopeIds.includes(157) || REAUTH_REASON_CODES.has(normalizedReason);
  return {
    reasonCode,
    missingScopeIds,
    requiresReauthorization
  };
}
__name(extractPermissionDetail, "extractPermissionDetail");
function normalizeReasonCode(code) {
  if (!code) {
    return "";
  }
  return code.trim().toLowerCase().replace(/[\s-]+/g, "_");
}
__name(normalizeReasonCode, "normalizeReasonCode");
function pickCode(value) {
  if (typeof value === "string" && value.trim() !== "") {
    return value.trim();
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  return void 0;
}
__name(pickCode, "pickCode");
function pickScopeIDs(value) {
  if (!Array.isArray(value)) {
    return void 0;
  }
  const ids = value.map((item) => {
    if (typeof item === "number" && Number.isInteger(item)) {
      return item;
    }
    if (typeof item === "string" && /^\d+$/.test(item.trim())) {
      return Number(item.trim());
    }
    return void 0;
  }).filter((item) => item !== void 0);
  return ids;
}
__name(pickScopeIDs, "pickScopeIDs");
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
__name(isRecord, "isRecord");

// src/modules/wechat-virtual/advertising-funds.ts
var ADVERTISING_FUNDS_PATHS = Object.freeze({
  queryTransferAccount: "/.cloud/wechat-virtual-advertising-funds/v1/transfer-accounts/query",
  bindTransferAccount: "/.cloud/wechat-virtual-advertising-funds/v1/transfer-accounts/bind",
  createFundsBill: "/.cloud/wechat-virtual-advertising-funds/v1/funds-bills/create",
  queryAdvertisingFunds: "/.cloud/wechat-virtual-advertising-funds/v1/advertising-funds/query",
  queryFundsBill: "/.cloud/wechat-virtual-advertising-funds/v1/funds-bills/query",
  queryRecoverBill: "/.cloud/wechat-virtual-advertising-funds/v1/recover-bills/query",
  downloadAdvertisingFundsOrder: "/.cloud/wechat-virtual-advertising-funds/v1/orders/download"
});
var _WechatVirtualAdvertisingFundsAPI = class _WechatVirtualAdvertisingFundsAPI {
  constructor(invoker) {
    __publicField(this, "invoker");
    this.invoker = invoker;
  }
  queryTransferAccount(input) {
    const payload = buildWechatXpayPayload({
      env: input.env
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(ADVERTISING_FUNDS_PATHS.queryTransferAccount, payload.data);
  }
  bindTransferAccount(input) {
    const transferAccountUid = normalizeRequiredText(input.transferAccountUid, "transferAccountUid", "bindTransferAccount");
    if (!transferAccountUid.ok) {
      return Promise.resolve(transferAccountUid.error);
    }
    const transferAccountOrgName = normalizeOptionalText(input.transferAccountOrgName, "transferAccountOrgName", "bindTransferAccount");
    if (!transferAccountOrgName.ok) {
      return Promise.resolve(transferAccountOrgName.error);
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        transferAccountUid: transferAccountUid.value,
        transferAccountOrgName: transferAccountOrgName.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(ADVERTISING_FUNDS_PATHS.bindTransferAccount, payload.data);
  }
  createFundsBill(input) {
    const transferAccountUid = normalizeRequiredText(input.transferAccountUid, "transferAccountUid", "createFundsBill");
    if (!transferAccountUid.ok) {
      return Promise.resolve(transferAccountUid.error);
    }
    if (input.transferAmount !== void 0 && (typeof input.transferAmount !== "number" || !Number.isFinite(input.transferAmount))) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualAdvertisingFunds.createFundsBill: transferAmount \u5FC5\u987B\u662F\u6709\u9650\u6570\u5B57\u3002", {
        field: "transferAmount",
        value: input.transferAmount
      }));
    }
    const transferAccountName = normalizeOptionalText(input.transferAccountName, "transferAccountName", "createFundsBill");
    if (!transferAccountName.ok) return Promise.resolve(transferAccountName.error);
    const transferAccountAgencyId = normalizeOptionalText(input.transferAccountAgencyId, "transferAccountAgencyId", "createFundsBill");
    if (!transferAccountAgencyId.ok) return Promise.resolve(transferAccountAgencyId.error);
    const requestId = normalizeOptionalText(input.requestId, "requestId", "createFundsBill");
    if (!requestId.ok) return Promise.resolve(requestId.error);
    const settleBegin = normalizeOptionalText(input.settleBegin, "settleBegin", "createFundsBill");
    if (!settleBegin.ok) return Promise.resolve(settleBegin.error);
    const settleEnd = normalizeOptionalText(input.settleEnd, "settleEnd", "createFundsBill");
    if (!settleEnd.ok) return Promise.resolve(settleEnd.error);
    const authorizeAdvertise = normalizeOptionalText(input.authorizeAdvertise, "authorizeAdvertise", "createFundsBill");
    if (!authorizeAdvertise.ok) return Promise.resolve(authorizeAdvertise.error);
    const fundType = normalizeOptionalText(input.fundType, "fundType", "createFundsBill");
    if (!fundType.ok) return Promise.resolve(fundType.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        transferAccountUid: transferAccountUid.value,
        transferAmount: input.transferAmount,
        transferAccountName: transferAccountName.value,
        transferAccountAgencyId: transferAccountAgencyId.value,
        requestId: requestId.value,
        settleBegin: settleBegin.value,
        settleEnd: settleEnd.value,
        authorizeAdvertise: authorizeAdvertise.value,
        fundType: fundType.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(ADVERTISING_FUNDS_PATHS.createFundsBill, payload.data);
  }
  queryAdvertisingFunds(input) {
    const page = normalizeOptionalPositiveInteger(input.page, "page", "queryAdvertisingFunds");
    if (!page.ok) return Promise.resolve(page.error);
    const pageSize = normalizeOptionalPositiveInteger(input.pageSize, "pageSize", "queryAdvertisingFunds");
    if (!pageSize.ok) return Promise.resolve(pageSize.error);
    const filter = normalizeQueryAdvertisingFundsFilter(input.filter);
    if (!filter.ok) return Promise.resolve(filter.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        page: page.value,
        pageSize: pageSize.value,
        filter: filter.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(ADVERTISING_FUNDS_PATHS.queryAdvertisingFunds, payload.data);
  }
  queryFundsBill(input) {
    var _a8;
    const page = normalizeOptionalPositiveInteger(input.page, "page", "queryFundsBill");
    if (!page.ok) return Promise.resolve(page.error);
    const pageSize = normalizeOptionalPositiveInteger(input.pageSize, "pageSize", "queryFundsBill");
    if (!pageSize.ok) return Promise.resolve(pageSize.error);
    const filter = normalizeQueryFundsBillFilter({
      billId: input.billId,
      requestId: input.requestId,
      operTimeBegin: input.operTimeBegin,
      operTimeEnd: input.operTimeEnd,
      ...(_a8 = input.filter) != null ? _a8 : {}
    });
    if (!filter.ok) return Promise.resolve(filter.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        page: page.value,
        pageSize: pageSize.value,
        filter: filter.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(ADVERTISING_FUNDS_PATHS.queryFundsBill, payload.data);
  }
  queryRecoverBill(input) {
    var _a8;
    const page = normalizeOptionalPositiveInteger(input.page, "page", "queryRecoverBill");
    if (!page.ok) return Promise.resolve(page.error);
    const pageSize = normalizeOptionalPositiveInteger(input.pageSize, "pageSize", "queryRecoverBill");
    if (!pageSize.ok) return Promise.resolve(pageSize.error);
    const filter = normalizeQueryRecoverBillFilter({
      billId: input.billId,
      recoverTimeBegin: input.recoverTimeBegin,
      recoverTimeEnd: input.recoverTimeEnd,
      ...(_a8 = input.filter) != null ? _a8 : {}
    });
    if (!filter.ok) return Promise.resolve(filter.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        page: page.value,
        pageSize: pageSize.value,
        filter: filter.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(ADVERTISING_FUNDS_PATHS.queryRecoverBill, payload.data);
  }
  downloadAdvertisingFundsOrder(input) {
    const fundId = normalizeRequiredText(input.fundId, "fundId", "downloadAdvertisingFundsOrder");
    if (!fundId.ok) {
      return Promise.resolve(fundId.error);
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        fundId: fundId.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(ADVERTISING_FUNDS_PATHS.downloadAdvertisingFundsOrder, payload.data);
  }
};
__name(_WechatVirtualAdvertisingFundsAPI, "WechatVirtualAdvertisingFundsAPI");
var WechatVirtualAdvertisingFundsAPI = _WechatVirtualAdvertisingFundsAPI;
function normalizeRequiredText(value, field, methodName) {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualAdvertisingFunds.${methodName}: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeRequiredText, "normalizeRequiredText");
function normalizeOptionalText(value, field, methodName) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  return normalizeRequiredText(value, field, methodName);
}
__name(normalizeOptionalText, "normalizeOptionalText");
function normalizeOptionalPositiveInteger(value, field, methodName) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualAdvertisingFunds.${methodName}: ${field} \u5FC5\u987B\u662F\u5927\u4E8E 0 \u7684\u6574\u6570\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value
  };
}
__name(normalizeOptionalPositiveInteger, "normalizeOptionalPositiveInteger");
function normalizeQueryAdvertisingFundsFilter(value) {
  if (!value) {
    return {
      ok: true,
      value: void 0
    };
  }
  const settleBegin = normalizeOptionalText(value.settleBegin, "settleBegin", "queryAdvertisingFunds");
  if (!settleBegin.ok) return settleBegin;
  const settleEnd = normalizeOptionalText(value.settleEnd, "settleEnd", "queryAdvertisingFunds");
  if (!settleEnd.ok) return settleEnd;
  const fundType = normalizeOptionalText(value.fundType, "fundType", "queryAdvertisingFunds");
  if (!fundType.ok) return fundType;
  return {
    ok: true,
    value: {
      settle_begin: settleBegin.value,
      settle_end: settleEnd.value,
      fund_type: fundType.value
    }
  };
}
__name(normalizeQueryAdvertisingFundsFilter, "normalizeQueryAdvertisingFundsFilter");
function normalizeQueryFundsBillFilter(value) {
  const billId = normalizeOptionalText(value.billId, "billId", "queryFundsBill");
  if (!billId.ok) return billId;
  const requestId = normalizeOptionalText(value.requestId, "requestId", "queryFundsBill");
  if (!requestId.ok) return requestId;
  const operTimeBegin = normalizeOptionalText(value.operTimeBegin, "operTimeBegin", "queryFundsBill");
  if (!operTimeBegin.ok) return operTimeBegin;
  const operTimeEnd = normalizeOptionalText(value.operTimeEnd, "operTimeEnd", "queryFundsBill");
  if (!operTimeEnd.ok) return operTimeEnd;
  if (!billId.value && !requestId.value && !operTimeBegin.value && !operTimeEnd.value) {
    return {
      ok: true,
      value: void 0
    };
  }
  return {
    ok: true,
    value: {
      bill_id: billId.value,
      request_id: requestId.value,
      oper_time_begin: operTimeBegin.value,
      oper_time_end: operTimeEnd.value
    }
  };
}
__name(normalizeQueryFundsBillFilter, "normalizeQueryFundsBillFilter");
function normalizeQueryRecoverBillFilter(value) {
  const billId = normalizeOptionalText(value.billId, "billId", "queryRecoverBill");
  if (!billId.ok) return billId;
  const recoverTimeBegin = normalizeOptionalText(value.recoverTimeBegin, "recoverTimeBegin", "queryRecoverBill");
  if (!recoverTimeBegin.ok) return recoverTimeBegin;
  const recoverTimeEnd = normalizeOptionalText(value.recoverTimeEnd, "recoverTimeEnd", "queryRecoverBill");
  if (!recoverTimeEnd.ok) return recoverTimeEnd;
  if (!billId.value && !recoverTimeBegin.value && !recoverTimeEnd.value) {
    return {
      ok: true,
      value: void 0
    };
  }
  return {
    ok: true,
    value: {
      bill_id: billId.value,
      recover_time_begin: recoverTimeBegin.value,
      recover_time_end: recoverTimeEnd.value
    }
  };
}
__name(normalizeQueryRecoverBillFilter, "normalizeQueryRecoverBillFilter");

// src/modules/wechat-virtual/complaints.ts
init_miniprogram_url();
var COMPLAINTS_PATHS = Object.freeze({
  query: "/.cloud/wechat-virtual-complaints/v1/complaints/query",
  getDetail: "/.cloud/wechat-virtual-complaints/v1/complaints/detail",
  queryNegotiations: "/.cloud/wechat-virtual-complaints/v1/complaints/negotiations/query",
  uploadFile: "/.cloud/wechat-virtual-complaints/v1/files/upload",
  getUploadFileSign: "/.cloud/wechat-virtual-complaints/v1/files/upload-sign",
  respond: "/.cloud/wechat-virtual-complaints/v1/complaints/respond",
  complete: "/.cloud/wechat-virtual-complaints/v1/complaints/complete"
});
var _WechatVirtualComplaintsAPI = class _WechatVirtualComplaintsAPI {
  constructor(invoker) {
    __publicField(this, "invoker");
    this.invoker = invoker;
  }
  query(input) {
    const beginDate = normalizeOptionalText2(input.beginDate, "beginDate");
    if (!beginDate.ok) return Promise.resolve(beginDate.error);
    const endDate = normalizeOptionalText2(input.endDate, "endDate");
    if (!endDate.ok) return Promise.resolve(endDate.error);
    const offset = normalizeOptionalInteger(input.offset, "offset");
    if (!offset.ok) return Promise.resolve(offset.error);
    const limit = normalizeOptionalInteger(input.limit, "limit");
    if (!limit.ok) return Promise.resolve(limit.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        beginDate: beginDate.value,
        endDate: endDate.value,
        offset: offset.value,
        limit: limit.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(COMPLAINTS_PATHS.query, payload.data);
  }
  getDetail(input) {
    return this.postWithComplaintID(COMPLAINTS_PATHS.getDetail, input, "getDetail");
  }
  queryNegotiations(input) {
    const offset = normalizeOptionalInteger(input.offset, "offset");
    if (!offset.ok) return Promise.resolve(offset.error);
    const limit = normalizeOptionalInteger(input.limit, "limit");
    if (!limit.ok) return Promise.resolve(limit.error);
    return this.postWithComplaintID(COMPLAINTS_PATHS.queryNegotiations, input, "queryNegotiations", {
      offset: offset.value,
      limit: limit.value
    });
  }
  uploadFile(input) {
    const base64Img = normalizeOptionalText2(input.base64Img, "base64Img");
    if (!base64Img.ok) return Promise.resolve(base64Img.error);
    const imgUrl = normalizeOptionalText2(input.imgUrl, "imgUrl");
    if (!imgUrl.ok) return Promise.resolve(imgUrl.error);
    if (!base64Img.value && !imgUrl.value) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualComplaints.uploadFile: base64Img \u4E0E imgUrl \u81F3\u5C11\u4F20\u4E00\u4E2A\u3002"));
    }
    const fileName = normalizeRequiredText2(input.fileName, "fileName");
    if (!fileName.ok) return Promise.resolve(fileName.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        base64Img: base64Img.value,
        imgUrl: imgUrl.value,
        fileName: fileName.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(COMPLAINTS_PATHS.uploadFile, payload.data);
  }
  getUploadFileSign(input) {
    const wxpayUrl = normalizeRequiredText2(input.wxpayUrl, "wxpayUrl");
    if (!wxpayUrl.ok) return Promise.resolve(wxpayUrl.error);
    const complaintId = normalizeOptionalText2(input.complaintId, "complaintId");
    if (!complaintId.ok) return Promise.resolve(complaintId.error);
    if (input.convertCos !== void 0 && typeof input.convertCos !== "boolean") {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualComplaints.getUploadFileSign: convertCos \u5FC5\u987B\u662F\u5E03\u5C14\u503C\u3002", {
        field: "convertCos",
        value: input.convertCos
      }));
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        wxpayUrl: wxpayUrl.value,
        convertCos: input.convertCos,
        complaintId: complaintId.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(COMPLAINTS_PATHS.getUploadFileSign, payload.data);
  }
  respond(input) {
    const complaintId = normalizeRequiredText2(input.complaintId, "complaintId");
    if (!complaintId.ok) return Promise.resolve(complaintId.error);
    const responseContent = normalizeRequiredText2(input.responseContent, "responseContent");
    if (!responseContent.ok) return Promise.resolve(responseContent.error);
    const responseImages = normalizeOptionalStringArray(input.responseImages, "responseImages");
    if (!responseImages.ok) return Promise.resolve(responseImages.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        complaintId: complaintId.value,
        responseContent: responseContent.value,
        responseImages: responseImages.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(COMPLAINTS_PATHS.respond, payload.data);
  }
  complete(input) {
    return this.postWithComplaintID(COMPLAINTS_PATHS.complete, input, "complete");
  }
  postWithComplaintID(path, input, methodName, extraRequired = {}) {
    const complaintId = normalizeRequiredText2(input.complaintId, "complaintId");
    if (!complaintId.ok) {
      return Promise.resolve(complaintId.error);
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        complaintId: complaintId.value,
        ...extraRequired
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(path, payload.data);
  }
};
__name(_WechatVirtualComplaintsAPI, "WechatVirtualComplaintsAPI");
var WechatVirtualComplaintsAPI = _WechatVirtualComplaintsAPI;
function normalizeRequiredText2(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualComplaints: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeRequiredText2, "normalizeRequiredText");
function normalizeOptionalText2(value, field) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  return normalizeRequiredText2(value, field);
}
__name(normalizeOptionalText2, "normalizeOptionalText");
function normalizeOptionalInteger(value, field) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualComplaints: ${field} \u5FC5\u987B\u662F\u5927\u4E8E\u7B49\u4E8E 0 \u7684\u6574\u6570\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value
  };
}
__name(normalizeOptionalInteger, "normalizeOptionalInteger");
function normalizeOptionalStringArray(value, field) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  if (!Array.isArray(value)) {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualComplaints: ${field} \u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6570\u7EC4\u3002`, {
        field,
        value
      })
    };
  }
  const normalized = [];
  for (const item of value) {
    if (typeof item !== "string" || item.trim() === "") {
      return {
        ok: false,
        error: invalidWechatVirtualRequestResult(`wechatVirtualComplaints: ${field} \u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
          field,
          value
        })
      };
    }
    normalized.push(item.trim());
  }
  return {
    ok: true,
    value: normalized
  };
}
__name(normalizeOptionalStringArray, "normalizeOptionalStringArray");

// src/modules/wechat-virtual/goods.ts
init_miniprogram_url();
var GOODS_PATHS = Object.freeze({
  startUpload: "/.cloud/wechat-virtual-goods/v1/goods/upload",
  queryUploadTask: "/.cloud/wechat-virtual-goods/v1/goods/upload-tasks/query",
  startPublish: "/.cloud/wechat-virtual-goods/v1/goods/publish",
  queryPublishTask: "/.cloud/wechat-virtual-goods/v1/goods/publish-tasks/query"
});
var _WechatVirtualGoodsAPI = class _WechatVirtualGoodsAPI {
  constructor(invoker) {
    __publicField(this, "invoker");
    this.invoker = invoker;
  }
  startUpload(input) {
    const id = normalizeRequiredText3(input.id, "id");
    if (!id.ok) return Promise.resolve(id.error);
    const name = normalizeRequiredText3(input.name, "name");
    if (!name.ok) return Promise.resolve(name.error);
    const hasItemUrl = typeof input.itemUrl === "string" && input.itemUrl.trim() !== "";
    const hasImageBase64 = typeof input.imageBase64 === "string" && input.imageBase64.trim() !== "";
    if (hasItemUrl === hasImageBase64) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualGoods.startUpload: itemUrl \u4E0E imageBase64 \u5FC5\u987B\u4E14\u53EA\u80FD\u4F20\u4E00\u4E2A\u3002"));
    }
    const itemUrl = hasItemUrl ? normalizeRequiredText3(input.itemUrl, "itemUrl") : {
      ok: true,
      value: void 0
    };
    if (!itemUrl.ok) return Promise.resolve(itemUrl.error);
    const imageBase64 = hasImageBase64 ? normalizeRequiredText3(input.imageBase64, "imageBase64") : {
      ok: true,
      value: void 0
    };
    if (!imageBase64.ok) return Promise.resolve(imageBase64.error);
    if (typeof input.price !== "number" || !Number.isFinite(input.price) || input.price < 0) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualGoods.startUpload: price \u5FC5\u987B\u662F\u5927\u4E8E\u7B49\u4E8E 0 \u7684\u6570\u5B57\u3002", {
        field: "price",
        value: input.price
      }));
    }
    const remark = normalizeRequiredText3(input.remark, "remark");
    if (!remark.ok) return Promise.resolve(remark.error);
    const payload = buildWechatVirtualPayload({
      env: input.env,
      required: {
        id: id.value,
        name: name.value,
        price: input.price,
        itemUrl: itemUrl.value,
        imageBase64: imageBase64.value,
        remark: remark.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(GOODS_PATHS.startUpload, payload.data);
  }
  queryUploadTask(input) {
    return this.postWithEnvOnly(GOODS_PATHS.queryUploadTask, input.env);
  }
  startPublish(input) {
    const id = normalizeRequiredText3(input.id, "id");
    if (!id.ok) return Promise.resolve(id.error);
    const payload = buildWechatVirtualPayload({
      env: input.env,
      required: {
        id: id.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(GOODS_PATHS.startPublish, payload.data);
  }
  queryPublishTask(input) {
    return this.postWithEnvOnly(GOODS_PATHS.queryPublishTask, input.env);
  }
  postWithEnvOnly(path, env) {
    const payload = buildWechatXpayPayload({
      env
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(path, payload.data);
  }
};
__name(_WechatVirtualGoodsAPI, "WechatVirtualGoodsAPI");
var WechatVirtualGoodsAPI = _WechatVirtualGoodsAPI;
function normalizeRequiredText3(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualGoods: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeRequiredText3, "normalizeRequiredText");

// src/modules/wechat-virtual/merchant-finance.ts
init_miniprogram_url();
var MERCHANT_FINANCE_PATHS = Object.freeze({
  queryBalance: "/.cloud/wechat-virtual-merchant-finance/v1/balance/query",
  createWithdrawal: "/.cloud/wechat-virtual-merchant-finance/v1/withdrawals/create",
  queryWithdrawal: "/.cloud/wechat-virtual-merchant-finance/v1/withdrawals/query",
  createOrderDownload: "/.cloud/wechat-virtual-merchant-finance/v1/order-downloads/create",
  queryOrderDownload: "/.cloud/wechat-virtual-merchant-finance/v1/order-downloads/query",
  downloadBill: "/.cloud/wechat-virtual-merchant-finance/v1/bills/download",
  downloadIOSSettlementBill: "/.cloud/wechat-virtual-merchant-finance/v1/ios-settlement-bills/download"
});
var _WechatVirtualMerchantFinanceAPI = class _WechatVirtualMerchantFinanceAPI {
  constructor(invoker) {
    __publicField(this, "invoker");
    this.invoker = invoker;
  }
  queryBalance(input) {
    const payload = buildWechatXpayPayload({
      env: input.env
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_FINANCE_PATHS.queryBalance, payload.data);
  }
  createWithdrawal(input) {
    const withdrawNo = normalizeRequiredText4(input.withdrawNo, "withdrawNo");
    if (!withdrawNo.ok) return Promise.resolve(withdrawNo.error);
    if (input.withdrawAmount !== void 0 && (typeof input.withdrawAmount !== "number" || !Number.isFinite(input.withdrawAmount) || input.withdrawAmount <= 0)) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualMerchantFinance.createWithdrawal: withdrawAmount \u5FC5\u987B\u662F\u5927\u4E8E 0 \u7684\u6570\u5B57\u3002", {
        field: "withdrawAmount",
        value: input.withdrawAmount
      }));
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        withdrawNo: withdrawNo.value,
        withdrawAmount: input.withdrawAmount
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_FINANCE_PATHS.createWithdrawal, payload.data);
  }
  queryWithdrawal(input) {
    const withdrawNo = normalizeRequiredText4(input.withdrawNo, "withdrawNo");
    if (!withdrawNo.ok) return Promise.resolve(withdrawNo.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        withdrawNo: withdrawNo.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_FINANCE_PATHS.queryWithdrawal, payload.data);
  }
  createOrderDownload(input) {
    const beginDs = normalizeRequiredText4(input.beginDs, "beginDs");
    if (!beginDs.ok) return Promise.resolve(beginDs.error);
    const endDs = normalizeRequiredText4(input.endDs, "endDs");
    if (!endDs.ok) return Promise.resolve(endDs.error);
    const orderType = normalizeOptionalText3(input.orderType, "orderType");
    if (!orderType.ok) return Promise.resolve(orderType.error);
    const orderInfo = normalizeOptionalText3(input.orderInfo, "orderInfo");
    if (!orderInfo.ok) return Promise.resolve(orderInfo.error);
    const refundStatus = normalizeOptionalText3(input.refundStatus, "refundStatus");
    if (!refundStatus.ok) return Promise.resolve(refundStatus.error);
    const payChannel = normalizeOptionalText3(input.payChannel, "payChannel");
    if (!payChannel.ok) return Promise.resolve(payChannel.error);
    if (input.isProvided !== void 0 && typeof input.isProvided !== "boolean" && typeof input.isProvided !== "number") {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualMerchantFinance.createOrderDownload: isProvided \u5FC5\u987B\u662F\u5E03\u5C14\u503C\u6216\u6570\u5B57\u3002", {
        field: "isProvided",
        value: input.isProvided
      }));
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        beginDs: beginDs.value,
        endDs: endDs.value,
        orderType: orderType.value,
        orderInfo: orderInfo.value,
        isProvided: input.isProvided,
        refundStatus: refundStatus.value,
        payChannel: payChannel.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_FINANCE_PATHS.createOrderDownload, payload.data);
  }
  queryOrderDownload(input) {
    const taskId = normalizeRequiredText4(input.taskId, "taskId");
    if (!taskId.ok) return Promise.resolve(taskId.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        taskId: taskId.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_FINANCE_PATHS.queryOrderDownload, payload.data);
  }
  downloadBill(input) {
    const beginDs = normalizeRequiredText4(input.beginDs, "beginDs");
    if (!beginDs.ok) return Promise.resolve(beginDs.error);
    const endDs = normalizeRequiredText4(input.endDs, "endDs");
    if (!endDs.ok) return Promise.resolve(endDs.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        beginDs: beginDs.value,
        endDs: endDs.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_FINANCE_PATHS.downloadBill, payload.data);
  }
  downloadIOSSettlementBill(input) {
    const startMonth = normalizeRequiredText4(input.startMonth, "startMonth");
    if (!startMonth.ok) return Promise.resolve(startMonth.error);
    const endMonth = normalizeRequiredText4(input.endMonth, "endMonth");
    if (!endMonth.ok) return Promise.resolve(endMonth.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        startMonth: startMonth.value,
        endMonth: endMonth.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_FINANCE_PATHS.downloadIOSSettlementBill, payload.data);
  }
};
__name(_WechatVirtualMerchantFinanceAPI, "WechatVirtualMerchantFinanceAPI");
var WechatVirtualMerchantFinanceAPI = _WechatVirtualMerchantFinanceAPI;
function normalizeRequiredText4(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualMerchantFinance: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeRequiredText4, "normalizeRequiredText");
function normalizeOptionalText3(value, field) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualMerchantFinance: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeOptionalText3, "normalizeOptionalText");

// src/modules/wechat-virtual/merchant-risk.ts
init_miniprogram_url();
var MERCHANT_RISK_PATHS = Object.freeze({
  queryPunishmentReasons: "/.cloud/wechat-virtual-merchant-risk/v1/punishment-reasons/query"
});
var _WechatVirtualMerchantRiskAPI = class _WechatVirtualMerchantRiskAPI {
  constructor(invoker) {
    __publicField(this, "invoker");
    this.invoker = invoker;
  }
  queryPunishmentReasons(input) {
    const payload = buildWechatXpayPayload({
      env: input.env
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(MERCHANT_RISK_PATHS.queryPunishmentReasons, payload.data);
  }
};
__name(_WechatVirtualMerchantRiskAPI, "WechatVirtualMerchantRiskAPI");
var WechatVirtualMerchantRiskAPI = _WechatVirtualMerchantRiskAPI;

// src/modules/wechat-virtual/payment.ts
init_miniprogram_url();
var PAYMENT_PATHS = Object.freeze({
  sign: "/.cloud/wechat-virtual-payment/v1/payment/sign",
  queryOrder: "/.cloud/wechat-virtual-payment/v1/orders/query",
  createRefund: "/.cloud/wechat-virtual-payment/v1/refunds/create",
  queryRefund: "/.cloud/wechat-virtual-payment/v1/refunds/query",
  notifyProvideGoods: "/.cloud/wechat-virtual-payment/v1/orders/notify-provide-goods"
});
var _WechatVirtualPaymentAPI = class _WechatVirtualPaymentAPI {
  constructor(invoker, wx) {
    __publicField(this, "invoker");
    __publicField(this, "wx");
    this.invoker = invoker;
    this.wx = wx;
  }
  sign(input) {
    const code = normalizeRequiredText5(input.code, "code");
    if (!code.ok) return Promise.resolve(code.error);
    const productId = normalizeRequiredText5(input.productId, "productId");
    if (!productId.ok) return Promise.resolve(productId.error);
    const outTradeNo = normalizeRequiredText5(input.outTradeNo, "outTradeNo");
    if (!outTradeNo.ok) return Promise.resolve(outTradeNo.error);
    const goodsPrice = normalizePositiveInteger(input.goodsPrice, "goodsPrice");
    if (!goodsPrice.ok) return Promise.resolve(goodsPrice.error);
    const buyQuantity = normalizePositiveInteger(input.buyQuantity, "buyQuantity");
    if (!buyQuantity.ok) return Promise.resolve(buyQuantity.error);
    let attach;
    if (input.attach !== void 0) {
      if (typeof input.attach !== "string") {
        return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualPayment.sign: attach \u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u3002", {
          field: "attach",
          value: input.attach
        }));
      }
      attach = input.attach.trim();
    }
    const payload = buildWechatVirtualPayload({
      env: input.env,
      required: {
        code: code.value,
        productId: productId.value,
        goodsPrice: goodsPrice.value,
        buyQuantity: buyQuantity.value,
        outTradeNo: outTradeNo.value,
        attach
      }
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(PAYMENT_PATHS.sign, payload.data);
  }
  queryOrder(input) {
    const payload = buildOrderReferencePayload({
      env: input.env,
      orderId: input.orderId,
      wxOrderId: input.wxOrderId,
      body: input.body,
      methodName: "queryOrder",
      extraRequired: {}
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(PAYMENT_PATHS.queryOrder, payload.data);
  }
  createRefund(input) {
    const refundOrderId = normalizeOptionalText4(input.refundOrderId, "refundOrderId");
    if (!refundOrderId.ok) return Promise.resolve(refundOrderId.error);
    const refundReason = normalizeOptionalBoundedInteger(input.refundReason, "refundReason", 0, 5);
    if (!refundReason.ok) return Promise.resolve(refundReason.error);
    const reqFrom = normalizeOptionalBoundedInteger(input.reqFrom, "reqFrom", 1, 3);
    if (!reqFrom.ok) return Promise.resolve(reqFrom.error);
    if (input.leftFee !== void 0 && !isFiniteNumber(input.leftFee)) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualPayment.createRefund: leftFee \u5FC5\u987B\u4E3A\u6709\u9650\u6570\u5B57\u3002", {
        field: "leftFee",
        value: input.leftFee
      }));
    }
    if (input.refundFee !== void 0 && !isFiniteNumber(input.refundFee)) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualPayment.createRefund: refundFee \u5FC5\u987B\u4E3A\u6709\u9650\u6570\u5B57\u3002", {
        field: "refundFee",
        value: input.refundFee
      }));
    }
    const payload = buildOrderReferencePayload({
      env: input.env,
      orderId: input.orderId,
      wxOrderId: input.wxOrderId,
      body: input.body,
      methodName: "createRefund",
      extraRequired: {
        refundOrderId: refundOrderId.value,
        leftFee: input.leftFee,
        refundFee: input.refundFee,
        bizMeta: input.bizMeta,
        refundReason: refundReason.value,
        reqFrom: reqFrom.value
      }
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(PAYMENT_PATHS.createRefund, payload.data);
  }
  queryRefund(input) {
    const refundOrderId = normalizeOptionalText4(input.refundOrderId, "refundOrderId");
    if (!refundOrderId.ok) return Promise.resolve(refundOrderId.error);
    const identifiers = normalizeOrderIdentifiers({
      orderId: input.orderId,
      wxOrderId: input.wxOrderId,
      methodName: "queryRefund"
    });
    if (!identifiers.ok) {
      return Promise.resolve(identifiers.error);
    }
    if (!identifiers.value.orderId && !identifiers.value.wxOrderId) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualPayment.queryRefund: orderId \u6216 wxOrderId \u5FC5\u4F20\uFF08refundOrderId \u4E0D\u80FD\u5355\u72EC\u4F5C\u4E3A\u67E5\u8BE2\u952E\uFF09\u3002"));
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        ...identifiers.value,
        refundOrderId: refundOrderId.value
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(PAYMENT_PATHS.queryRefund, payload.data);
  }
  notifyProvideGoods(input) {
    const payload = buildOrderReferencePayload({
      env: input.env,
      orderId: input.orderId,
      wxOrderId: input.wxOrderId,
      body: input.body,
      methodName: "notifyProvideGoods",
      extraRequired: {}
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(PAYMENT_PATHS.notifyProvideGoods, payload.data);
  }
  requestVirtualPayment(input) {
    var _a8;
    if (!isWechatVirtualEnv(input.env)) {
      return Promise.reject(new Error("wechatVirtualPayment.requestVirtualPayment: env \u5FC5\u987B\u4E3A 0 \u6216 1\u3002"));
    }
    for (const field of [
      "signData",
      "paySig",
      "signature"
    ]) {
      const value = input[field];
      if (typeof value !== "string" || value.trim() === "") {
        return Promise.reject(new Error(`wechatVirtualPayment.requestVirtualPayment: ${field} \u4E0D\u80FD\u4E3A\u7A7A\uFF08\u8BF7\u76F4\u63A5\u900F\u4F20 sign \u7684\u8FD4\u56DE\u4F53\uFF09\u3002`));
      }
    }
    const mode = (_a8 = input.mode) != null ? _a8 : DEFAULT_VIRTUAL_PAYMENT_MODE;
    if (!WECHAT_VIRTUAL_PAYMENT_MODES.has(mode)) {
      return Promise.reject(new Error(`wechatVirtualPayment.requestVirtualPayment: mode \u5FC5\u987B\u4E3A ${[
        ...WECHAT_VIRTUAL_PAYMENT_MODES
      ].join(" \u6216 ")}\u3002`));
    }
    const requestVirtualPayment = this.wx.requestVirtualPayment;
    if (typeof requestVirtualPayment !== "function") {
      return Promise.reject(new Error("wechatVirtualPayment.requestVirtualPayment: \u5F53\u524D wx \u8FD0\u884C\u65F6\u4E0D\u652F\u6301 wx.requestVirtualPayment\u3002"));
    }
    return new Promise((resolve, reject) => {
      requestVirtualPayment.call(this.wx, {
        signData: input.signData,
        paySig: input.paySig,
        signature: input.signature,
        mode,
        success: /* @__PURE__ */ __name((result) => {
          invokeUserCallback(input.success, result);
          resolve(result);
        }, "success"),
        fail: /* @__PURE__ */ __name((result) => {
          invokeUserCallback(input.fail, result);
          reject(wrapVirtualPaymentFailure(result));
        }, "fail"),
        complete: /* @__PURE__ */ __name((result) => {
          invokeUserCallback(input.complete, result);
        }, "complete")
      });
    });
  }
};
__name(_WechatVirtualPaymentAPI, "WechatVirtualPaymentAPI");
var WechatVirtualPaymentAPI = _WechatVirtualPaymentAPI;
var DEFAULT_VIRTUAL_PAYMENT_MODE = "short_series_goods";
var WECHAT_VIRTUAL_PAYMENT_MODES = /* @__PURE__ */ new Set([
  "short_series_goods",
  "short_series_coin"
]);
function buildOrderReferencePayload(params) {
  const identifiers = normalizeOrderIdentifiers({
    orderId: params.orderId,
    wxOrderId: params.wxOrderId,
    methodName: params.methodName
  });
  if (!identifiers.ok) {
    return identifiers.error;
  }
  if (!identifiers.value.orderId && !identifiers.value.wxOrderId) {
    return invalidWechatVirtualRequestResult(`wechatVirtualPayment.${params.methodName}: orderId \u4E0E wxOrderId \u81F3\u5C11\u4F20\u4E00\u4E2A\u3002`);
  }
  return buildWechatXpayPayload({
    env: params.env,
    required: {
      ...identifiers.value,
      ...params.extraRequired
    },
    body: params.body
  });
}
__name(buildOrderReferencePayload, "buildOrderReferencePayload");
function normalizeOrderIdentifiers(params) {
  const orderId = normalizeOptionalText4(params.orderId, "orderId");
  if (!orderId.ok) {
    return {
      ok: false,
      error: orderId.error
    };
  }
  const wxOrderId = normalizeOptionalText4(params.wxOrderId, "wxOrderId");
  if (!wxOrderId.ok) {
    return {
      ok: false,
      error: wxOrderId.error
    };
  }
  return {
    ok: true,
    value: {
      orderId: orderId.value,
      wxOrderId: wxOrderId.value
    }
  };
}
__name(normalizeOrderIdentifiers, "normalizeOrderIdentifiers");
function normalizeRequiredText5(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualPayment: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeRequiredText5, "normalizeRequiredText");
function normalizeOptionalText4(value, field) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualPayment: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeOptionalText4, "normalizeOptionalText");
function normalizePositiveInteger(value, field) {
  if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualPayment.sign: ${field} \u5FC5\u987B\u662F\u6B63\u6574\u6570\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value
  };
}
__name(normalizePositiveInteger, "normalizePositiveInteger");
function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}
__name(isFiniteNumber, "isFiniteNumber");
function normalizeOptionalBoundedInteger(value, field, min, max) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  if (typeof value !== "number" || !Number.isInteger(value) || value < min || value > max) {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualPayment: ${field} \u5FC5\u987B\u662F ${min}~${max} \u7684\u6574\u6570\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value
  };
}
__name(normalizeOptionalBoundedInteger, "normalizeOptionalBoundedInteger");
function invokeUserCallback(callback, value) {
  if (!callback) {
    return;
  }
  try {
    callback(value);
  } catch {
  }
}
__name(invokeUserCallback, "invokeUserCallback");
function wrapVirtualPaymentFailure(result) {
  const error = new Error(`wx.requestVirtualPayment failed: ${result.errMsg}`);
  error.cause = result;
  return error;
}
__name(wrapVirtualPaymentFailure, "wrapVirtualPaymentFailure");

// src/modules/wechat-virtual/subscriptions.ts
init_miniprogram_url();
var SUBSCRIPTIONS_PATHS = Object.freeze({
  queryContract: "/.cloud/wechat-virtual-subscriptions/v1/contracts/query",
  sendPrePaymentNotice: "/.cloud/wechat-virtual-subscriptions/v1/pre-payments/send",
  submitPaymentOrder: "/.cloud/wechat-virtual-subscriptions/v1/payment-orders/submit",
  cancelContract: "/.cloud/wechat-virtual-subscriptions/v1/contracts/cancel"
});
var _WechatVirtualSubscriptionsAPI = class _WechatVirtualSubscriptionsAPI {
  constructor(invoker) {
    __publicField(this, "invoker");
    this.invoker = invoker;
  }
  queryContract(input) {
    return this.postWithContractReference(SUBSCRIPTIONS_PATHS.queryContract, input, "queryContract");
  }
  sendPrePaymentNotice(input) {
    if (input.deductPrice !== void 0 && (typeof input.deductPrice !== "number" || !Number.isFinite(input.deductPrice))) {
      return Promise.resolve(invalidWechatVirtualRequestResult("wechatVirtualSubscriptions.sendPrePaymentNotice: deductPrice \u5FC5\u987B\u662F\u6709\u9650\u6570\u5B57\u3002", {
        field: "deductPrice",
        value: input.deductPrice
      }));
    }
    return this.postWithContractReference(SUBSCRIPTIONS_PATHS.sendPrePaymentNotice, input, "sendPrePaymentNotice", {
      deductPrice: input.deductPrice
    });
  }
  submitPaymentOrder(input) {
    const productId = normalizeRequiredText6(input.productId, "productId", "submitPaymentOrder");
    if (!productId.ok) return Promise.resolve(productId.error);
    const orderId = normalizeRequiredText6(input.orderId, "orderId", "submitPaymentOrder");
    if (!orderId.ok) return Promise.resolve(orderId.error);
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        productId: productId.value,
        orderId: orderId.value,
        buyQuantity: input.buyQuantity,
        currencyType: input.currencyType,
        deductPrice: input.deductPrice,
        attach: input.attach
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(SUBSCRIPTIONS_PATHS.submitPaymentOrder, payload.data);
  }
  cancelContract(input) {
    const terminationReason = normalizeOptionalText5(input.terminationReason, "terminationReason", "cancelContract");
    if (!terminationReason.ok) {
      return Promise.resolve(terminationReason.error);
    }
    return this.postWithContractReference(SUBSCRIPTIONS_PATHS.cancelContract, input, "cancelContract", {
      terminationReason: terminationReason.value
    });
  }
  postWithContractReference(path, input, methodName, extraRequired = {}) {
    const outContractCode = normalizeRequiredText6(input.outContractCode, "outContractCode", methodName);
    if (!outContractCode.ok) {
      return Promise.resolve(outContractCode.error);
    }
    const productId = normalizeOptionalText5(input.productId, "productId", methodName);
    if (!productId.ok) {
      return Promise.resolve(productId.error);
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      required: {
        outContractCode: outContractCode.value,
        productId: productId.value,
        ...extraRequired
      },
      body: input.body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(path, payload.data);
  }
};
__name(_WechatVirtualSubscriptionsAPI, "WechatVirtualSubscriptionsAPI");
var WechatVirtualSubscriptionsAPI = _WechatVirtualSubscriptionsAPI;
function normalizeRequiredText6(value, field, methodName) {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualSubscriptions.${methodName}: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeRequiredText6, "normalizeRequiredText");
function normalizeOptionalText5(value, field, methodName) {
  if (value === void 0 || value === null) {
    return {
      ok: true,
      value: void 0
    };
  }
  return normalizeRequiredText6(value, field, methodName);
}
__name(normalizeOptionalText5, "normalizeOptionalText");

// src/modules/wechat-virtual/tokens.ts
init_miniprogram_url();
var TOKENS_PATHS = Object.freeze({
  queryBalance: "/.cloud/wechat-virtual-tokens/v1/tokens/balance/query",
  pay: "/.cloud/wechat-virtual-tokens/v1/tokens/pay",
  createRefund: "/.cloud/wechat-virtual-tokens/v1/tokens/refunds/create",
  present: "/.cloud/wechat-virtual-tokens/v1/tokens/present"
});
var _WechatVirtualTokensAPI = class _WechatVirtualTokensAPI {
  constructor(invoker) {
    __publicField(this, "invoker");
    this.invoker = invoker;
  }
  queryBalance(input) {
    return this.postWithCode(TOKENS_PATHS.queryBalance, input, void 0);
  }
  pay(input) {
    return this.postWithCode(TOKENS_PATHS.pay, input, input.body);
  }
  createRefund(input) {
    return this.postWithCode(TOKENS_PATHS.createRefund, input, input.body);
  }
  present(input) {
    return this.postWithoutCode(TOKENS_PATHS.present, input, input.body);
  }
  postWithCode(path, input, body, extraRequired = {}) {
    const code = normalizeRequiredText7(input.code, "code");
    if (!code.ok) {
      return Promise.resolve(code.error);
    }
    const payload = buildWechatXpayPayload({
      env: input.env,
      // user_ip 由服务端从入站请求注入（客户端禁止提交），这里只发 code 与业务字段。
      required: {
        code: code.value,
        ...extraRequired
      },
      body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(path, payload.data);
  }
  /**
   * 不带 `code` 的代币调用（目前只有 `present`）。
   *
   * 官方 `present_currency` 没有用户态上下文，服务端也不要求 `code`；这里保持同一
   * 契约，避免调用方被迫传一个会被服务端丢掉的 `wx.login` code。
   */
  postWithoutCode(path, input, body) {
    const payload = buildWechatXpayPayload({
      env: input.env,
      body
    });
    if (payload.error) {
      return Promise.resolve({
        data: null,
        error: payload.error
      });
    }
    return this.invoker.post(path, payload.data);
  }
};
__name(_WechatVirtualTokensAPI, "WechatVirtualTokensAPI");
var WechatVirtualTokensAPI = _WechatVirtualTokensAPI;
function normalizeRequiredText7(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: false,
      error: invalidWechatVirtualRequestResult(`wechatVirtualTokens: ${field} \u5FC5\u987B\u662F\u975E\u7A7A\u5B57\u7B26\u4E32\u3002`, {
        field,
        value
      })
    };
  }
  return {
    ok: true,
    value: value.trim()
  };
}
__name(normalizeRequiredText7, "normalizeRequiredText");

// src/modules/wechat-virtual/index.ts
function createMiniProgramWechatVirtualModules(params) {
  const invoker = createWechatVirtualRequestInvoker(params.endpoint, params.fetch);
  return {
    wechatVirtualPayment: new WechatVirtualPaymentAPI(invoker, params.wx),
    wechatVirtualGoods: new WechatVirtualGoodsAPI(invoker),
    wechatVirtualTokens: new WechatVirtualTokensAPI(invoker),
    wechatVirtualMerchantFinance: new WechatVirtualMerchantFinanceAPI(invoker),
    wechatVirtualComplaints: new WechatVirtualComplaintsAPI(invoker),
    wechatVirtualAdvertisingFunds: new WechatVirtualAdvertisingFundsAPI(invoker),
    wechatVirtualSubscriptions: new WechatVirtualSubscriptionsAPI(invoker),
    wechatVirtualMerchantRisk: new WechatVirtualMerchantRiskAPI(invoker)
  };
}
__name(createMiniProgramWechatVirtualModules, "createMiniProgramWechatVirtualModules");

// src/platform/miniprogram/fetch.ts
init_miniprogram_url();

// src/platform/miniprogram/polyfills.ts
init_miniprogram_url();
var _a6;
var MiniProgramHeaders = (_a6 = class {
  constructor(init) {
    __publicField(this, "map", /* @__PURE__ */ new Map());
    if (!init) return;
    if (init instanceof _a6) {
      for (const [key, value] of init.map) this.map.set(key, value);
      return;
    }
    if (Array.isArray(init)) {
      for (const [key, value] of init) this.set(key, value);
      return;
    }
    if (init instanceof Headers) {
      init.forEach((value, key) => this.set(key, value));
      return;
    }
    for (const [key, value] of Object.entries(init)) this.set(key, String(value));
  }
  normalize(name) {
    return name.toLowerCase();
  }
  set(name, value) {
    this.map.set(this.normalize(name), value);
  }
  get(name) {
    var _a8;
    return (_a8 = this.map.get(this.normalize(name))) != null ? _a8 : null;
  }
  has(name) {
    return this.map.has(this.normalize(name));
  }
  append(name, value) {
    const key = this.normalize(name);
    const existing = this.map.get(key);
    this.map.set(key, existing ? `${existing}, ${value}` : value);
  }
  delete(name) {
    this.map.delete(this.normalize(name));
  }
  forEach(callback) {
    this.map.forEach((value, key) => callback(value, key));
  }
  entries() {
    return this.map.entries();
  }
  /** 转成 `wx.request` 需要的 plain object header。 */
  toPlainObject() {
    return Object.fromEntries(this.map);
  }
}, __name(_a6, "MiniProgramHeaders"), _a6);
var DEFAULT_MAX_BUFFERED_BYTES = 4 * 1024 * 1024;
var _a7;
var MiniProgramReadableStream = (_a7 = class {
  constructor(options) {
    __publicField(this, "queue", []);
    __publicField(this, "queuedBytes", 0);
    __publicField(this, "maxBufferedBytes");
    __publicField(this, "closed", false);
    __publicField(this, "error", null);
    __publicField(this, "pendingResolve", null);
    __publicField(this, "pendingReject", null);
    __publicField(this, "cancelled", false);
    var _a8;
    this.maxBufferedBytes = (_a8 = options == null ? void 0 : options.maxBufferedBytes) != null ? _a8 : DEFAULT_MAX_BUFFERED_BYTES;
  }
  /** 供 fetch 适配层喂数据用，不是公开 API。超过字节上限时自动 abort。 */
  push(chunk) {
    if (this.cancelled || this.closed || this.error) return;
    if (this.queuedBytes + chunk.byteLength > this.maxBufferedBytes) {
      this.abort(new Error(`MiniProgramReadableStream: buffered bytes exceeded limit (${this.maxBufferedBytes}), aborting stream`));
      return;
    }
    this.queuedBytes += chunk.byteLength;
    if (this.pendingResolve) {
      const resolve = this.pendingResolve;
      this.pendingResolve = null;
      this.pendingReject = null;
      resolve({
        done: false,
        value: chunk
      });
    } else {
      this.queue.push(chunk);
    }
  }
  /** 供 fetch 适配层在请求正常结束时调用，不是公开 API。 */
  close() {
    if (this.closed || this.error) return;
    this.closed = true;
    if (this.pendingResolve) {
      const resolve = this.pendingResolve;
      this.pendingResolve = null;
      this.pendingReject = null;
      resolve({
        done: true
      });
    }
  }
  /**
   * 供 fetch 适配层在检测到「流已经开始但实际是错误响应/请求异常终止」
   * 时调用，不是公开 API。跟 `close()` 的区别：`close()` 是正常 EOF，
   * `abort()` 让当前挂起的 `read()` 与后续所有 `read()` 都 reject，
   * 避免调用方把截断的错误响应体误判为一段正常收完的 SSE 内容。
   */
  abort(err) {
    if (this.closed || this.error) return;
    this.error = err;
    this.closed = true;
    this.queue.length = 0;
    this.queuedBytes = 0;
    if (this.pendingReject) {
      const reject = this.pendingReject;
      this.pendingResolve = null;
      this.pendingReject = null;
      reject(err);
    }
  }
  getReader() {
    return {
      read: /* @__PURE__ */ __name(() => {
        if (this.cancelled) {
          return Promise.resolve({
            done: true
          });
        }
        if (this.queue.length > 0) {
          const value = this.queue.shift();
          if (value) this.queuedBytes -= value.byteLength;
          return Promise.resolve({
            done: false,
            value
          });
        }
        if (this.error) {
          return Promise.reject(this.error);
        }
        if (this.closed) {
          return Promise.resolve({
            done: true
          });
        }
        return new Promise((resolve, reject) => {
          this.pendingResolve = resolve;
          this.pendingReject = reject;
        });
      }, "read"),
      cancel: /* @__PURE__ */ __name(() => {
        this.cancelled = true;
        this.queue.length = 0;
        this.queuedBytes = 0;
        return Promise.resolve();
      }, "cancel"),
      releaseLock: /* @__PURE__ */ __name(() => {
      }, "releaseLock")
    };
  }
}, __name(_a7, "MiniProgramReadableStream"), _a7);
function isStreamingSupported() {
  return typeof globalThis.ReadableStream !== "undefined";
}
__name(isStreamingSupported, "isStreamingSupported");
function ensureMiniProgramPolyfills() {
  const g = globalThis;
  if (typeof g.Headers === "undefined") {
    g.Headers = MiniProgramHeaders;
  }
  if (typeof g.ReadableStream === "undefined") {
    g.ReadableStream = MiniProgramReadableStream;
  }
}
__name(ensureMiniProgramPolyfills, "ensureMiniProgramPolyfills");

// src/platform/miniprogram/fetch.ts
function headersToPlainObject(headers) {
  if (!headers) return {};
  if (headers instanceof Headers) {
    const out = {};
    headers.forEach((value, key) => {
      out[key] = value;
    });
    return out;
  }
  if (Array.isArray(headers)) {
    return Object.fromEntries(headers);
  }
  return {
    ...headers
  };
}
__name(headersToPlainObject, "headersToPlainObject");
function isStreamingRequest(headers) {
  var _a8;
  const accept = (_a8 = headers["Accept"]) != null ? _a8 : headers["accept"];
  return accept === "text/event-stream";
}
__name(isStreamingRequest, "isStreamingRequest");
function buildResponse(params) {
  var _a8, _b, _c;
  const status = params.status;
  const ok3 = status >= 200 && status < 300;
  const bodyText = (_a8 = params.bodyText) != null ? _a8 : "";
  const unsupportedBinaryBody = /* @__PURE__ */ __name((method) => () => Promise.reject(new Error(`createMiniProgramFetch: Response.${method}() \u4E0D\u53D7\u652F\u6301 \u2014\u2014 \u5C0F\u7A0B\u5E8F\u9002\u914D\u5C42\u7528\u6587\u672C\u65B9\u5F0F\u53D6\u54CD\u5E94\u4F53\uFF0C\u6CA1\u6709\u539F\u59CB\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u4E5F\u6CA1\u6709\u5168\u5C40 Blob \u53EF\u7528\u3002\u4F9D\u8D56\u4E8C\u8FDB\u5236\u4E0B\u8F7D\u7684\u80FD\u529B\uFF08\u5982 Storage \u6587\u4EF6\u4E0B\u8F7D\uFF09\u5728\u5C0F\u7A0B\u5E8F\u8FD0\u884C\u65F6\u6682\u4E0D\u53EF\u7528\uFF0C\u9700\u8981\u5355\u72EC\u8BBE\u8BA1\u540E\u518D\u63A5\u5165\u3002`)), "unsupportedBinaryBody");
  const response = {
    status,
    statusText: (_b = params.statusText) != null ? _b : "",
    ok: ok3,
    // 全局 Headers 由 ensureMiniProgramPolyfills 保证存在（原生或占位实现）。
    headers: new Headers(params.headers),
    // 非流式路径 SDK 只消费 text()/json()，body 置 null（与原生对无体
    // 响应的语义一致）；流式必须保留 MiniProgramReadableStream，
    // 下游 iterSSEEvents 直接对它 getReader()。
    body: (_c = params.stream) != null ? _c : null,
    text: /* @__PURE__ */ __name(() => Promise.resolve(bodyText), "text"),
    // 解析失败要和原生 Response.json() 一致：返回 rejected promise
    // （SyntaxError），既不同步 throw，也不吞错。
    json: /* @__PURE__ */ __name(() => new Promise((resolve, reject) => {
      try {
        resolve(JSON.parse(bodyText));
      } catch (error) {
        reject(error);
      }
    }), "json"),
    blob: unsupportedBinaryBody("blob"),
    arrayBuffer: unsupportedBinaryBody("arrayBuffer")
  };
  return response;
}
__name(buildResponse, "buildResponse");
function createMiniProgramFetch(wxInstance = globalThis.wx) {
  if (!wxInstance) {
    throw new Error("createMiniProgramFetch: \u672A\u627E\u5230\u5168\u5C40 wx \u5BF9\u8C61\uFF0C\u8BF7\u5728\u5C0F\u7A0B\u5E8F\u73AF\u5883\u8C03\u7528\uFF0C\u6216\u663E\u5F0F\u4F20\u5165 wxInstance\u3002");
  }
  ensureMiniProgramPolyfills();
  return /* @__PURE__ */ __name(async function miniProgramFetch(input, init) {
    var _a8, _b;
    if (typeof input !== "string") {
      throw new Error("createMiniProgramFetch: \u6682\u4E0D\u652F\u6301\u975E\u5B57\u7B26\u4E32 input\uFF0C\u8BF7\u4F20 URL \u5B57\u7B26\u4E32\u3002");
    }
    const url = input;
    const method = ((_a8 = init == null ? void 0 : init.method) != null ? _a8 : "GET").toUpperCase();
    const reqHeaders = headersToPlainObject(init == null ? void 0 : init.headers);
    const streaming = isStreamingRequest(reqHeaders);
    let requestBody;
    if (typeof (init == null ? void 0 : init.body) === "string") {
      requestBody = init.body;
    } else if ((init == null ? void 0 : init.body) !== void 0 && (init == null ? void 0 : init.body) !== null) {
      throw new Error("createMiniProgramFetch: \u6682\u4E0D\u652F\u6301\u975E\u5B57\u7B26\u4E32 body\uFF08ArrayBuffer/FormData \u5F85\u8865\uFF09\u3002");
    }
    if ((_b = init == null ? void 0 : init.signal) == null ? void 0 : _b.aborted) {
      const err = new Error("The operation was aborted.");
      err.name = "AbortError";
      throw err;
    }
    if (!streaming) {
      return new Promise((resolve, reject) => {
        var _a9;
        const task = wxInstance.request({
          url,
          method,
          header: reqHeaders,
          data: requestBody,
          responseType: "text",
          success(result) {
            resolve(buildResponse({
              status: result.statusCode,
              headers: result.header,
              bodyText: typeof result.data === "string" ? result.data : JSON.stringify(result.data)
            }));
          },
          fail(result) {
            reject(new Error(`wx.request failed: ${result.errMsg}`));
          }
        });
        (_a9 = init == null ? void 0 : init.signal) == null ? void 0 : _a9.addEventListener("abort", () => {
          task.abort();
          const err = new Error("The operation was aborted.");
          err.name = "AbortError";
          reject(err);
        }, {
          once: true
        });
      });
    }
    return new Promise((resolve, reject) => {
      var _a9, _b2;
      const stream = new MiniProgramReadableStream();
      let resolved = false;
      let receivedHeaders = {};
      const options = {
        url,
        method,
        header: reqHeaders,
        data: requestBody,
        enableChunked: true,
        success(result) {
          const isSuccessStatus = result.statusCode >= 200 && result.statusCode < 300;
          if (!resolved) {
            resolved = true;
            resolve(buildResponse({
              status: result.statusCode,
              headers: result.header,
              stream
            }));
            stream.close();
            return;
          }
          if (isSuccessStatus) {
            stream.close();
          } else {
            stream.abort(new Error(`wx.request (chunked) resolved with non-2xx status ${result.statusCode}`));
          }
        },
        fail(result) {
          const err = new Error(`wx.request (chunked) failed: ${result.errMsg}`);
          if (!resolved) {
            resolved = true;
            reject(err);
            return;
          }
          stream.abort(err);
        }
      };
      const task = wxInstance.request(options);
      (_a9 = task.onHeadersReceived) == null ? void 0 : _a9.call(task, (headerResult) => {
        var _a10;
        receivedHeaders = (_a10 = headerResult.header) != null ? _a10 : {};
      });
      task.onChunkReceived((chunk) => {
        if (!resolved) {
          resolved = true;
          resolve(buildResponse({
            status: 200,
            headers: receivedHeaders,
            stream
          }));
        }
        stream.push(new Uint8Array(chunk.data));
      });
      (_b2 = init == null ? void 0 : init.signal) == null ? void 0 : _b2.addEventListener("abort", () => {
        task.abort();
        const err = new Error("The operation was aborted.");
        err.name = "AbortError";
        if (!resolved) {
          resolved = true;
          reject(err);
          return;
        }
        stream.abort(err);
      }, {
        once: true
      });
    });
  }, "miniProgramFetch");
}
__name(createMiniProgramFetch, "createMiniProgramFetch");

// src/platform/miniprogram/storage.ts
init_miniprogram_url();
function createMiniProgramStorage(wxInstance = globalThis.wx) {
  if (!wxInstance) {
    throw new Error("createMiniProgramStorage: \u672A\u627E\u5230\u5168\u5C40 wx \u5BF9\u8C61\uFF0C\u8BF7\u5728\u5C0F\u7A0B\u5E8F\u73AF\u5883\u8C03\u7528\uFF0C\u6216\u663E\u5F0F\u4F20\u5165 wxInstance\u3002");
  }
  return {
    getItem(key) {
      try {
        const value = wxInstance.getStorageSync(key);
        if (value === void 0 || value === null || value === "") {
          return null;
        }
        return typeof value === "string" ? value : JSON.stringify(value);
      } catch (err) {
        console.warn("[MiniProgramStorage] getItem failed", key, err);
        return null;
      }
    },
    setItem(key, value) {
      try {
        wxInstance.setStorageSync(key, value);
      } catch (err) {
        console.warn("[MiniProgramStorage] setItem failed", key, err);
      }
    },
    removeItem(key) {
      try {
        wxInstance.removeStorageSync(key);
      } catch (err) {
        console.warn("[MiniProgramStorage] removeItem failed", key, err);
      }
    }
  };
}
__name(createMiniProgramStorage, "createMiniProgramStorage");

// src/platform/miniprogram/index.ts
function createMiniProgramWorkBuddyCloud(options) {
  var _a8;
  const wxInstance = (_a8 = options.wx) != null ? _a8 : globalThis.wx;
  if (!wxInstance) {
    throw new Error("createMiniProgramWorkBuddyCloud: \u672A\u627E\u5230\u5168\u5C40 wx \u5BF9\u8C61\uFF0C\u8BF7\u5728\u5C0F\u7A0B\u5E8F\u73AF\u5883\u8C03\u7528\uFF0C\u6216\u663E\u5F0F\u4F20\u5165 options.wx\u3002");
  }
  ensureMiniProgramPolyfills();
  const runtimeConfig = resolveRuntimeConfig({
    endpoint: options.endpoint,
    oauthRelayBaseUrl: options.oauthRelayBaseUrl,
    publishableKey: options.publishableKey,
    fetch: createMiniProgramFetch(wxInstance)
  });
  const cloud = new WorkBuddyCloudClient(runtimeConfig, {
    storage: createMiniProgramStorage(wxInstance)
  });
  const wechatVirtualModules = createMiniProgramWechatVirtualModules({
    endpoint: runtimeConfig.endpoint,
    fetch: createCloudFetch(runtimeConfig, () => cloud.auth.getAccessToken()),
    wx: wxInstance
  });
  return Object.assign(cloud, wechatVirtualModules);
}
__name(createMiniProgramWorkBuddyCloud, "createMiniProgramWorkBuddyCloud");
