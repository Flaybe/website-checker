import ee, { useState as re, useEffect as te } from "react";
var g = { exports: {} }, p = {};
var U;
function ae() {
  if (U) return p;
  U = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(f, t, a) {
    var m = null;
    if (a !== void 0 && (m = "" + a), t.key !== void 0 && (m = "" + t.key), "key" in t) {
      a = {};
      for (var d in t)
        d !== "key" && (a[d] = t[d]);
    } else a = t;
    return t = a.ref, {
      $$typeof: l,
      type: f,
      key: m,
      ref: t !== void 0 ? t : null,
      props: a
    };
  }
  return p.Fragment = i, p.jsx = c, p.jsxs = c, p;
}
var _ = {};
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case q:
          return "Profiler";
        case L:
          return "StrictMode";
        case z:
          return "Suspense";
        case X:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function c(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), i(e);
      }
    }
    function f(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var e = N.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function n() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function R() {
      var e = l(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, n, o, w, y) {
      var s = n.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: n,
        _owner: o
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function v(e, r, n, o, w, y) {
      var s = r.children;
      if (s !== void 0)
        if (o)
          if (Q(s)) {
            for (o = 0; o < s.length; o++)
              x(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(s);
      if (A.call(r, "key")) {
        s = l(e);
        var b = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        o = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", Y[s + o] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          b,
          s
        ), Y[s + o] = !0);
      }
      if (s = null, n !== void 0 && (c(n), s = "" + n), m(r) && (c(r.key), s = "" + r.key), "key" in r) {
        n = {};
        for (var S in r)
          S !== "key" && (n[S] = r[S]);
      } else n = r;
      return s && d(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        s,
        n,
        t(),
        w,
        y
      );
    }
    function x(e) {
      T(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? T(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function T(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var E = ee, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), G = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), N = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, Q = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var D, C = {}, $ = E.react_stack_bottom_frame.bind(
      E,
      a
    )(), I = O(f(a)), Y = {};
    _.Fragment = j, _.jsx = function(e, r, n) {
      var o = 1e4 > N.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        n,
        !1,
        o ? Error("react-stack-top-frame") : $,
        o ? O(f(e)) : I
      );
    }, _.jsxs = function(e, r, n) {
      var o = 1e4 > N.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        n,
        !0,
        o ? Error("react-stack-top-frame") : $,
        o ? O(f(e)) : I
      );
    };
  })()), _;
}
var W;
function oe() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? g.exports = ae() : g.exports = ne()), g.exports;
}
var u = oe();
const se = (l) => new Promise((i) => {
  const c = Date.now(), t = `${l.replace(/\/+$/, "")}/favicon.ico?cache-buster=${Date.now()}`, a = new Image(), m = setTimeout(() => {
    a.onload = null, a.onerror = null, i({
      url: l,
      status: "DOWN",
      latency: 0,
      timestamp: Date.now(),
      imgUrl: "./assets/react.svg"
    });
  }, 5e3);
  a.onload = () => {
    clearTimeout(m);
    const d = Date.now() - c;
    i({
      url: l,
      status: "UP",
      latency: d,
      timestamp: Date.now(),
      imgUrl: t
    });
  }, a.onerror = () => {
    clearTimeout(m), i({
      url: l,
      status: "DOWN",
      latency: Date.now() - c,
      timestamp: Date.now(),
      imgUrl: "./assets/react.svg"
    });
  }, a.src = t;
}), le = ({ data: l }) => {
  const { url: i, status: c, latency: f } = l;
  let t = "bg-gray-500", a = "Unknown";
  c === "UP" ? f < 500 ? (t = "bg-green-500", a = "ONLINE") : (t = "bg-orange-500", a = "DEGRADED") : c === "DOWN" ? (t = "bg-red-500", a = "OFFLINE") : (t = "bg-blue-400", a = "CHECKING");
  const m = new URL(i).hostname;
  return /* @__PURE__ */ u.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-lg p-4 flex items-center justify-between shadow-xl relative overflow-hidden group", children: [
    /* @__PURE__ */ u.jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-slate-800" }),
    /* @__PURE__ */ u.jsx("div", { className: "absolute top-0 right-0 w-1 h-full bg-slate-800" }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-4 pl-3", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "relative flex items-center justify-center w-4 h-4", children: [
        /* @__PURE__ */ u.jsx("div", { className: `absolute w-full h-full rounded-full ${t} ${c !== "DOWN" ? "animate-pulse" : ""} opacity-50 blur-[2px]` }),
        /* @__PURE__ */ u.jsx("div", { className: `relative w-2.5 h-2.5 rounded-full ${t} shadow-sm` })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-gray-200 font-mono text-sm tracking-wide font-medium", children: m }),
        /* @__PURE__ */ u.jsx("span", { className: "text-xs text-slate-500 font-mono uppercase tracking-wider", children: a })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "flex flex-col items-end pr-2", children: /* @__PURE__ */ u.jsx("span", { className: `font-mono text-sm ${f > 0 ? "text-slate-400" : "text-slate-600"}`, children: f > 0 ? `${f}ms` : "--" }) })
  ] });
};
function ue({ urls: l, interval: i, customCard: c, className: f, onLastUpdated: t, refreshTrigger: a }) {
  const [m, d] = re([]), R = i < 1e3 ? 1e3 : i;
  te(() => {
    const v = async () => {
      const T = await Promise.all(
        l.map((E) => se(E))
      );
      d(T), t && t(Date.now());
    };
    v();
    const x = setInterval(v, R);
    return () => clearInterval(x);
  }, [l, R, t, a]);
  const h = c || le;
  return /* @__PURE__ */ u.jsx("div", { className: f, children: m.map((v) => /* @__PURE__ */ u.jsx(h, { data: v }, v.url)) });
}
export {
  ue as PulseMonitor,
  ue as default
};
