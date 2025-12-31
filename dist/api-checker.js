import je, { useState as fr, useEffect as dr } from "react";
var V = { exports: {} }, $ = {};
var we;
function vr() {
  if (we) return $;
  we = 1;
  var E = je, g = /* @__PURE__ */ Symbol.for("react.element"), R = /* @__PURE__ */ Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, f = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(w, v, j) {
    var c, T = {}, O = null, D = null;
    j !== void 0 && (O = "" + j), v.key !== void 0 && (O = "" + v.key), v.ref !== void 0 && (D = v.ref);
    for (c in v) h.call(v, c) && !d.hasOwnProperty(c) && (T[c] = v[c]);
    if (w && w.defaultProps) for (c in v = w.defaultProps, v) T[c] === void 0 && (T[c] = v[c]);
    return { $$typeof: g, type: w, key: O, ref: D, props: T, _owner: f.current };
  }
  return $.Fragment = R, $.jsx = _, $.jsxs = _, $;
}
var W = {};
var Te;
function pr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && (function() {
    var E = je, g = /* @__PURE__ */ Symbol.for("react.element"), R = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), c = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.offscreen"), Z = Symbol.iterator, Se = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var k = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ce("error", e, t);
      }
    }
    function Ce(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var De = !1, ke = !1, Fe = !1, Ae = !1, Ie = !1, Q;
    Q = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === d || Ie || e === f || e === j || e === c || Ae || e === D || De || ke || Fe || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === w || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case R:
          return "Portal";
        case d:
          return "Profiler";
        case f:
          return "StrictMode";
        case j:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return ee(r) + ".Consumer";
          case _:
            var t = e;
            return ee(t._context) + ".Provider";
          case v:
            return $e(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case O: {
            var i = e, s = i._payload, o = i._init;
            try {
              return S(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, I = 0, re, te, ne, ae, oe, ie, se;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function We() {
      {
        if (I === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ue() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: re
            }),
            info: P({}, e, {
              value: te
            }),
            warn: P({}, e, {
              value: ne
            }),
            error: P({}, e, {
              value: ae
            }),
            group: P({}, e, {
              value: oe
            }),
            groupCollapsed: P({}, e, {
              value: ie
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        I < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, q;
    function U(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var B = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = J.current, J.current = null, We();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), m = n.stack.split(`
`), u = a.length - 1, l = m.length - 1; u >= 1 && l >= 0 && a[u] !== m[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== m[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== m[l]) {
                    var x = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, x), x;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, J.current = s, Ue(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", C = A ? U(A) : "";
      return typeof e == "function" && Y.set(e, C), C;
    }
    function Le(e, r, t) {
      return le(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Me(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case j:
          return U("Suspense");
        case c:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Le(e.render);
          case T:
            return L(e.type, r, t);
          case O: {
            var n = e, i = n._payload, s = n._init;
            try {
              return L(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ce = {}, fe = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, i) {
      {
        var s = Function.call.bind(N);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (M(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(i), p("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), de(e);
    }
    var pe = k.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ge;
    function Ge(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && pe.current;
    }
    function He(e, r) {
      {
        var t = function() {
          me || (me = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var s, o = {}, a = null, m = null;
        t !== void 0 && (ve(t), a = "" + t), ze(r) && (ve(r.key), a = "" + r.key), Ge(r) && (m = r.ref, Xe(r, i));
        for (s in r)
          N.call(r, s) && !Ke.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || m) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, l), m && Ze(o, l);
        }
        return Qe(e, a, m, i, n, pe.current, o);
      }
    }
    var G = k.ReactCurrentOwner, he = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function be() {
      {
        if (G.current) {
          var e = S(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var ye = {};
    function tr(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + S(e._owner.type) + "."), F(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Ee(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              X(o.value) && Ee(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = S(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var _e = {};
    function xe(e, r, t, n, i, s) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = rr();
          m ? a += m : a += be();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === g ? (u = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = er(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (K(x)) {
                for (var A = 0; A < x.length; A++)
                  Re(x[A], e);
                Object.freeze && Object.freeze(x);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(x, e);
        }
        if (N.call(r, "key")) {
          var C = S(e), b = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), H = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_e[C + H]) {
            var lr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, C, lr, C), _e[C + H] = !0;
          }
        }
        return e === h ? ar(l) : nr(l), l;
      }
    }
    function or(e, r, t) {
      return xe(e, r, t, !0);
    }
    function ir(e, r, t) {
      return xe(e, r, t, !1);
    }
    var sr = ir, ur = or;
    W.Fragment = h, W.jsx = sr, W.jsxs = ur;
  })()), W;
}
var Oe;
function mr() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? V.exports = vr() : V.exports = pr()), V.exports;
}
var y = mr();
const gr = (E) => new Promise((g) => {
  const R = Date.now(), f = `${E.replace(/\/+$/, "")}/favicon.ico?cache-buster=${Date.now()}`, d = new Image(), _ = setTimeout(() => {
    d.onload = null, d.onerror = null, g({
      url: E,
      status: "DOWN",
      latency: 0,
      timestamp: Date.now(),
      imgUrl: "./assets/react.svg"
    });
  }, 5e3);
  d.onload = () => {
    clearTimeout(_);
    const w = Date.now() - R;
    g({
      url: E,
      status: "UP",
      latency: w,
      timestamp: Date.now(),
      imgUrl: f
    });
  }, d.onerror = () => {
    clearTimeout(_), g({
      url: E,
      status: "DOWN",
      latency: Date.now() - R,
      timestamp: Date.now(),
      imgUrl: "./assets/react.svg"
    });
  }, d.src = f;
}), hr = ({ data: E }) => {
  const { url: g, status: R, latency: h } = E;
  let f = "bg-gray-500", d = "Unknown";
  R === "UP" ? h < 500 ? (f = "bg-green-500", d = "ONLINE") : (f = "bg-orange-500", d = "DEGRADED") : R === "DOWN" ? (f = "bg-red-500", d = "OFFLINE") : (f = "bg-blue-400", d = "CHECKING");
  const _ = new URL(g).hostname;
  return /* @__PURE__ */ y.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-lg p-4 flex items-center justify-between shadow-xl relative overflow-hidden group", children: [
    /* @__PURE__ */ y.jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-slate-800" }),
    /* @__PURE__ */ y.jsx("div", { className: "absolute top-0 right-0 w-1 h-full bg-slate-800" }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-4 pl-3", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "relative flex items-center justify-center w-4 h-4", children: [
        /* @__PURE__ */ y.jsx("div", { className: `absolute w-full h-full rounded-full ${f} ${R !== "DOWN" ? "animate-pulse" : ""} opacity-50 blur-[2px]` }),
        /* @__PURE__ */ y.jsx("div", { className: `relative w-2.5 h-2.5 rounded-full ${f} shadow-sm` })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ y.jsx("span", { className: "text-gray-200 font-mono text-sm tracking-wide font-medium", children: _ }),
        /* @__PURE__ */ y.jsx("span", { className: "text-xs text-slate-500 font-mono uppercase tracking-wider", children: d })
      ] })
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "flex flex-col items-end pr-2", children: /* @__PURE__ */ y.jsx("span", { className: `font-mono text-sm ${h > 0 ? "text-slate-400" : "text-slate-600"}`, children: h > 0 ? `${h}ms` : "--" }) })
  ] });
};
function yr({ urls: E, interval: g, customCard: R, className: h, onLastUpdated: f, refreshTrigger: d }) {
  const [_, w] = fr([]), v = g < 1e3 ? 1e3 : g;
  dr(() => {
    const c = async () => {
      const O = await Promise.all(
        E.map((D) => gr(D))
      );
      w(O), f && f(Date.now());
    };
    c();
    const T = setInterval(c, v);
    return () => clearInterval(T);
  }, [E, v, f, d]);
  const j = R || hr;
  return /* @__PURE__ */ y.jsx("div", { className: h, children: _.map((c) => /* @__PURE__ */ y.jsx(j, { data: c }, c.url)) });
}
export {
  yr as PulseMonitor,
  yr as default
};
