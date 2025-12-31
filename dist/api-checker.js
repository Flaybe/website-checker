import M, { useState as fr, useEffect as dr } from "react";
var q = { exports: {} }, $ = {};
var je;
function vr() {
  if (je) return $;
  je = 1;
  var R = M, v = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, p = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(_, u, S) {
    var l, x = {}, d = null, O = null;
    S !== void 0 && (d = "" + S), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (O = u.ref);
    for (l in u) y.call(u, l) && !m.hasOwnProperty(l) && (x[l] = u[l]);
    if (_ && _.defaultProps) for (l in u = _.defaultProps, u) x[l] === void 0 && (x[l] = u[l]);
    return { $$typeof: v, type: _, key: d, ref: O, props: x, _owner: p.current };
  }
  return $.Fragment = w, $.jsx = T, $.jsxs = T, $;
}
var W = {};
var Se;
function pr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && (function() {
    var R = M, v = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), p = /* @__PURE__ */ Symbol.for("react.strict_mode"), m = /* @__PURE__ */ Symbol.for("react.profiler"), T = /* @__PURE__ */ Symbol.for("react.provider"), _ = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), x = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.offscreen"), U = Symbol.iterator, Y = "@@iterator";
    function re(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var P = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ce("error", e, t);
      }
    }
    function Ce(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var De = !1, ke = !1, Fe = !1, Ae = !1, Ie = !1, te;
    te = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === m || Ie || e === p || e === S || e === l || Ae || e === O || De || ke || Fe || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === x || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case w:
          return "Portal";
        case m:
          return "Profiler";
        case p:
          return "StrictMode";
        case S:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ne(r) + ".Consumer";
          case T:
            var t = e;
            return ne(t._context) + ".Provider";
          case u:
            return $e(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case d: {
            var i = e, s = i._payload, o = i._init;
            try {
              return C(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, ae, oe, ie, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (I === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
    function Me() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ae
            }),
            info: D({}, e, {
              value: oe
            }),
            warn: D({}, e, {
              value: ie
            }),
            error: D({}, e, {
              value: se
            }),
            group: D({}, e, {
              value: ue
            }),
            groupCollapsed: D({}, e, {
              value: le
            }),
            groupEnd: D({}, e, {
              value: ce
            })
          });
        }
        I < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = P.ReactCurrentDispatcher, G;
    function L(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = K.current, K.current = null, We();
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
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, f = h.length - 1; c >= 1 && f >= 0 && a[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== h[f]) {
                    var j = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, j), j;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        z = !1, K.current = s, Me(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", k = A ? L(A) : "";
      return typeof e == "function" && V.set(e, k), k;
    }
    function Ye(e, r, t) {
      return de(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Le(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case S:
          return L("Suspense");
        case l:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ye(e.render);
          case x:
            return J(e.type, r, t);
          case d: {
            var n = e, i = n._payload, s = n._init;
            try {
              return J(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ve = {}, pe = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, i) {
      {
        var s = Function.call.bind(N);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (B(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), B(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, B(i), g("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function X(e) {
      return Je(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ge(e) {
      if (qe(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), me(e);
    }
    var he = P.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ye;
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
      typeof e.ref == "string" && he.current;
    }
    function He(e, r) {
      {
        var t = function() {
          be || (be = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          ye || (ye = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        $$typeof: v,
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
        var s, o = {}, a = null, h = null;
        t !== void 0 && (ge(t), a = "" + t), ze(r) && (ge(r.key), a = "" + r.key), Ge(r) && (h = r.ref, Xe(r, i));
        for (s in r)
          N.call(r, s) && !Ke.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, f), h && Ze(o, f);
        }
        return Qe(e, a, h, i, n, he.current, o);
      }
    }
    var H = P.ReactCurrentOwner, Ee = P.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function Re() {
      {
        if (H.current) {
          var e = C(H.current.type);
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
    var _e = {};
    function tr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + C(e._owner.type) + "."), F(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && xe(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = re(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Q(o.value) && xe(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = C(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Te = {};
    function Oe(e, r, t, n, i, s) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = rr();
          h ? a += h : a += Re();
          var c;
          e === null ? c = "null" : X(e) ? c = "array" : e !== void 0 && e.$$typeof === v ? (c = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = er(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (X(j)) {
                for (var A = 0; A < j.length; A++)
                  we(j[A], e);
                Object.freeze && Object.freeze(j);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(j, e);
        }
        if (N.call(r, "key")) {
          var k = C(e), E = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), ee = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[k + ee]) {
            var lr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, k, lr, k), Te[k + ee] = !0;
          }
        }
        return e === y ? ar(f) : nr(f), f;
      }
    }
    function or(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var sr = ir, ur = or;
    W.Fragment = y, W.jsx = sr, W.jsxs = ur;
  })()), W;
}
var Pe;
function mr() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? q.exports = vr() : q.exports = pr()), q.exports;
}
var b = mr();
const gr = (R) => new Promise((v) => {
  const w = Date.now(), p = `${R.replace(/\/+$/, "")}/favicon.ico?cache-buster=${Date.now()}`, m = new Image(), T = setTimeout(() => {
    m.onload = null, m.onerror = null, v({
      url: R,
      status: "DOWN",
      latency: 0,
      timestamp: Date.now(),
      imgUrl: "./assets/react.svg"
    });
  }, 5e3);
  m.onload = () => {
    clearTimeout(T);
    const _ = Date.now() - w;
    v({
      url: R,
      status: "UP",
      latency: _,
      timestamp: Date.now(),
      imgUrl: p
    });
  }, m.onerror = () => {
    clearTimeout(T), v({
      url: R,
      status: "DOWN",
      latency: Date.now() - w,
      timestamp: Date.now(),
      imgUrl: "./assets/react.svg"
    });
  }, m.src = p;
}), hr = ({ data: R }) => {
  const { url: v, status: w, latency: y } = R, p = M.useRef(null), [m, T] = M.useState({ x: 0, y: 0 }), [_, u] = M.useState(0), S = (Y) => {
    if (!p.current) return;
    const P = p.current.getBoundingClientRect();
    T({ x: Y.clientX - P.left, y: Y.clientY - P.top });
  }, l = () => {
    u(1);
  }, x = () => {
    u(0);
  };
  let d = "bg-gray-500", O = "Unknown";
  w === "UP" ? y < 500 ? (d = "bg-green-500", O = "ONLINE") : (d = "bg-orange-500", O = "DEGRADED") : w === "DOWN" ? (d = "bg-red-500", O = "OFFLINE") : (d = "bg-blue-400", O = "CHECKING");
  const U = new URL(v).hostname;
  return /* @__PURE__ */ b.jsxs(
    "a",
    {
      ref: p,
      onMouseMove: S,
      onMouseEnter: l,
      onMouseLeave: x,
      href: v,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all cursor-pointer rounded-lg p-4 flex items-center justify-between shadow-xl relative overflow-hidden group",
      children: [
        /* @__PURE__ */ b.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px transition-opacity duration-300",
            style: {
              opacity: _,
              background: `radial-gradient(600px circle at ${m.x}px ${m.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`
            }
          }
        ),
        /* @__PURE__ */ b.jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-slate-800" }),
        /* @__PURE__ */ b.jsx("div", { className: "absolute top-0 right-0 w-1 h-full bg-slate-800" }),
        /* @__PURE__ */ b.jsxs("div", { className: "flex items-center gap-4 pl-3 relative z-10", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "relative flex items-center justify-center w-4 h-4", children: [
            /* @__PURE__ */ b.jsx("div", { className: `absolute w-full h-full rounded-full ${d} ${w !== "DOWN" ? "animate-pulse" : ""} opacity-50 blur-[2px]` }),
            /* @__PURE__ */ b.jsx("div", { className: `relative w-2.5 h-2.5 rounded-full ${d} shadow-sm` })
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ b.jsx("span", { className: "text-gray-200 font-mono text-sm tracking-wide font-medium group-hover:text-white transition-colors", children: U }),
            /* @__PURE__ */ b.jsx("span", { className: "text-xs text-slate-500 font-mono uppercase tracking-wider", children: O })
          ] })
        ] }),
        /* @__PURE__ */ b.jsx("div", { className: "flex flex-col items-end pr-2 relative z-10", children: /* @__PURE__ */ b.jsx("span", { className: `font-mono text-sm ${y > 0 ? "text-slate-400" : "text-slate-600"}`, children: y > 0 ? `${y}ms` : "--" }) })
      ]
    }
  );
};
function yr({ urls: R, interval: v, customCard: w, className: y, onLastUpdated: p, refreshTrigger: m }) {
  const [T, _] = fr([]), u = v < 1e3 ? 1e3 : v;
  dr(() => {
    const l = async () => {
      const d = await Promise.all(
        R.map((O) => gr(O))
      );
      _(d), p && p(Date.now());
    };
    l();
    const x = setInterval(l, u);
    return () => clearInterval(x);
  }, [R, u, p, m]);
  const S = w || hr;
  return /* @__PURE__ */ b.jsx("div", { className: y, children: T.map((l) => /* @__PURE__ */ b.jsx(S, { data: l }, l.url)) });
}
export {
  yr as PulseMonitor,
  yr as default
};
