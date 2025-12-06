import { j as i, bV as ae, at as Ii, p as De, P as n, cq as dt, cF as ki, a1 as Ee, a6 as Pi, H as ei, cG as hn, cH as Ae, cI as ji, cJ as xi, e as O, cK as Ye, cL as wi, cM as Je, cN as ut, cO as mt, cP as bn, J as fe, aB as Xe, cQ as fn, cR as gn, cS as _n, c as D, bu as L, bv as B, y as me, bw as Vi, a3 as re, cT as _e, cU as ie, bO as Te, I as ii, ag as Mi, cV as ye, bQ as yn, bS as vn, bR as Nn, cW as jn, cX as qi, cY as pt, cZ as Ui, c_ as xn, c$ as wn, d0 as $i, d1 as Gi, d2 as He, d3 as ve, d4 as ke, d5 as Pe, d6 as oi, d7 as Ke, d8 as Vn, d9 as Le, da as qn, db as Rn, dc as Cn, dd as Tn, K as Sn, i as Fn, de as En, df as ht, bT as In, aD as Ri, dg as kn, bJ as Pn, bb as Mn, bK as On, bL as An, dh as Ln, di as Bn, bN as Kn, dj as Un, ax as $n, ci as Gn, dk as Zi, dl as Zn, au as Hn, a4 as Ci, dm as zn, bM as Wn, dn as Yn, dp as Jn } from "./main-CTYpZ6Nf.mjs";
import * as di from "react";
import ge, { memo as Oi, useState as S, useRef as $, useCallback as W, useEffect as A, useMemo as Ne } from "react";
import { useDispatch as ee, useSelector as Y, connect as Xn } from "react-redux";
import { useParams as Ie, useNavigate as Qn, useLocation as Dn } from "react-router-dom";
import { createPortal as bt } from "react-dom";
import { A as Me } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { C as ti } from "./CheckBox-DBJrW14Y.mjs";
import { H as ft, R as ea, I as gt, K as Hi, L as ni, N as Ai } from "./Table-DB12oa-o.mjs";
import { I as E } from "./Input-7Hc9IEQ_.mjs";
import { S as H } from "./add-CmKOUDFO.mjs";
import { S as ai } from "./checkmark-328tzSAb.mjs";
import { R as pe, P as ia } from "./PanelCredentialsAccessKey-DWWCIYth.mjs";
import { a as Li } from "./exclamation-mark-kRjYDG-V.mjs";
import { S as Oe } from "./search-CsL7YQlT.mjs";
import { u as ta } from "./openPanel.hook-CVonGvbV.mjs";
function zi(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var t = 0, s = Array(a); t < a; t++) s[t] = e[t];
  return s;
}
function na(e) {
  if (Array.isArray(e)) return e;
}
function aa(e, a, t) {
  return (a = ua(a)) in e ? Object.defineProperty(e, a, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = t, e;
}
function sa(e, a) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var s, r, c, l, o = [], d = !0, u = !1;
    try {
      if (c = (t = t.call(e)).next, a !== 0) for (; !(d = (s = c.call(t)).done) && (o.push(s.value), o.length !== a); d = !0) ;
    } catch (h) {
      u = !0, r = h;
    } finally {
      try {
        if (!d && t.return != null && (l = t.return(), Object(l) !== l)) return;
      } finally {
        if (u) throw r;
      }
    }
    return o;
  }
}
function la() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wi(e, a) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    a && (s = s.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function Yi(e) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Wi(Object(t), !0).forEach(function(s) {
      aa(e, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wi(Object(t)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return e;
}
function ra(e, a) {
  if (e == null) return {};
  var t, s, r = ca(e, a);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (s = 0; s < c.length; s++) t = c[s], a.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
function ca(e, a) {
  if (e == null) return {};
  var t = {};
  for (var s in e) if ({}.hasOwnProperty.call(e, s)) {
    if (a.indexOf(s) !== -1) continue;
    t[s] = e[s];
  }
  return t;
}
function oa(e, a) {
  return na(e) || sa(e, a) || ma(e, a) || la();
}
function da(e, a) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(e, a);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(e);
}
function ua(e) {
  var a = da(e, "string");
  return typeof a == "symbol" ? a : a + "";
}
function ma(e, a) {
  if (e) {
    if (typeof e == "string") return zi(e, a);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? zi(e, a) : void 0;
  }
}
function pa(e, a, t) {
  return a in e ? Object.defineProperty(e, a, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = t, e;
}
function Ji(e, a) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    a && (s = s.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function Xi(e) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Ji(Object(t), !0).forEach(function(s) {
      pa(e, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ji(Object(t)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return e;
}
function ha() {
  for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++)
    a[t] = arguments[t];
  return function(s) {
    return a.reduceRight(function(r, c) {
      return c(r);
    }, s);
  };
}
function Be(e) {
  return function a() {
    for (var t = this, s = arguments.length, r = new Array(s), c = 0; c < s; c++)
      r[c] = arguments[c];
    return r.length >= e.length ? e.apply(this, r) : function() {
      for (var l = arguments.length, o = new Array(l), d = 0; d < l; d++)
        o[d] = arguments[d];
      return a.apply(t, [].concat(r, o));
    };
  };
}
function Qe(e) {
  return {}.toString.call(e).includes("Object");
}
function ba(e) {
  return !Object.keys(e).length;
}
function $e(e) {
  return typeof e == "function";
}
function fa(e, a) {
  return Object.prototype.hasOwnProperty.call(e, a);
}
function ga(e, a) {
  return Qe(a) || de("changeType"), Object.keys(a).some(function(t) {
    return !fa(e, t);
  }) && de("changeField"), a;
}
function _a(e) {
  $e(e) || de("selectorType");
}
function ya(e) {
  $e(e) || Qe(e) || de("handlerType"), Qe(e) && Object.values(e).some(function(a) {
    return !$e(a);
  }) && de("handlersType");
}
function va(e) {
  e || de("initialIsRequired"), Qe(e) || de("initialType"), ba(e) && de("initialContent");
}
function Na(e, a) {
  throw new Error(e[a] || e.default);
}
var ja = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, de = Be(Na)(ja), ze = {
  changes: ga,
  selector: _a,
  handler: ya,
  initial: va
};
function xa(e) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  ze.initial(e), ze.handler(a);
  var t = {
    current: e
  }, s = Be(qa)(t, a), r = Be(Va)(t), c = Be(ze.changes)(e), l = Be(wa)(t);
  function o() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(h) {
      return h;
    };
    return ze.selector(u), u(t.current);
  }
  function d(u) {
    ha(s, r, c, l)(u);
  }
  return [o, d];
}
function wa(e, a) {
  return $e(a) ? a(e.current) : a;
}
function Va(e, a) {
  return e.current = Xi(Xi({}, e.current), a), a;
}
function qa(e, a, t) {
  return $e(a) ? a(e.current) : Object.keys(t).forEach(function(s) {
    var r;
    return (r = a[s]) === null || r === void 0 ? void 0 : r.call(a, e.current[s]);
  }), t;
}
var Ra = {
  create: xa
}, Ca = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"
  }
};
function Ta(e) {
  return function a() {
    for (var t = this, s = arguments.length, r = new Array(s), c = 0; c < s; c++)
      r[c] = arguments[c];
    return r.length >= e.length ? e.apply(this, r) : function() {
      for (var l = arguments.length, o = new Array(l), d = 0; d < l; d++)
        o[d] = arguments[d];
      return a.apply(t, [].concat(r, o));
    };
  };
}
function Sa(e) {
  return {}.toString.call(e).includes("Object");
}
function Fa(e) {
  return e || Qi("configIsRequired"), Sa(e) || Qi("configType"), e.urls ? (Ea(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function Ea() {
  console.warn(_t.deprecation);
}
function Ia(e, a) {
  throw new Error(e[a] || e.default);
}
var _t = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, Qi = Ta(Ia)(_t), ka = {
  config: Fa
}, Pa = function() {
  for (var a = arguments.length, t = new Array(a), s = 0; s < a; s++)
    t[s] = arguments[s];
  return function(r) {
    return t.reduceRight(function(c, l) {
      return l(c);
    }, r);
  };
};
function yt(e, a) {
  return Object.keys(a).forEach(function(t) {
    a[t] instanceof Object && e[t] && Object.assign(a[t], yt(e[t], a[t]));
  }), Yi(Yi({}, e), a);
}
var Ma = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function ui(e) {
  var a = !1, t = new Promise(function(s, r) {
    e.then(function(c) {
      return a ? r(Ma) : s(c);
    }), e.catch(r);
  });
  return t.cancel = function() {
    return a = !0;
  }, t;
}
var Oa = ["monaco"], Aa = Ra.create({
  config: Ca,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), vt = oa(Aa, 2), Ze = vt[0], si = vt[1];
function La(e) {
  var a = ka.config(e), t = a.monaco, s = ra(a, Oa);
  si(function(r) {
    return {
      config: yt(r.config, s),
      monaco: t
    };
  });
}
function Ba() {
  var e = Ze(function(a) {
    var t = a.monaco, s = a.isInitialized, r = a.resolve;
    return {
      monaco: t,
      isInitialized: s,
      resolve: r
    };
  });
  if (!e.isInitialized) {
    if (si({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), ui(mi);
    if (window.monaco && window.monaco.editor)
      return Nt(window.monaco), e.resolve(window.monaco), ui(mi);
    Pa(Ka, $a)(Ga);
  }
  return ui(mi);
}
function Ka(e) {
  return document.body.appendChild(e);
}
function Ua(e) {
  var a = document.createElement("script");
  return e && (a.src = e), a;
}
function $a(e) {
  var a = Ze(function(s) {
    var r = s.config, c = s.reject;
    return {
      config: r,
      reject: c
    };
  }), t = Ua("".concat(a.config.paths.vs, "/loader.js"));
  return t.onload = function() {
    return e();
  }, t.onerror = a.reject, t;
}
function Ga() {
  var e = Ze(function(t) {
    var s = t.config, r = t.resolve, c = t.reject;
    return {
      config: s,
      resolve: r,
      reject: c
    };
  }), a = window.require;
  a.config(e.config), a(["vs/editor/editor.main"], function(t) {
    var s = t.m || t;
    Nt(s), e.resolve(s);
  }, function(t) {
    e.reject(t);
  });
}
function Nt(e) {
  Ze().monaco || si({
    monaco: e
  });
}
function Za() {
  return Ze(function(e) {
    var a = e.monaco;
    return a;
  });
}
var mi = new Promise(function(e, a) {
  return si({
    resolve: e,
    reject: a
  });
}), jt = {
  config: La,
  init: Ba,
  __getMonacoInstance: Za
}, Ha = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, pi = Ha, za = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, Wa = za;
function Ya({ children: e }) {
  return ge.createElement("div", { style: Wa.container }, e);
}
var Ja = Ya, Xa = Ja;
function Qa({ width: e, height: a, isEditorReady: t, loading: s, _ref: r, className: c, wrapperProps: l }) {
  return ge.createElement("section", { style: { ...pi.wrapper, width: e, height: a }, ...l }, !t && ge.createElement(Xa, null, s), ge.createElement("div", { ref: r, style: { ...pi.fullWidth, ...!t && pi.hide }, className: c }));
}
var Da = Qa, xt = Oi(Da);
function es(e) {
  A(e, []);
}
var wt = es;
function is(e, a, t = !0) {
  let s = $(!0);
  A(s.current || !t ? () => {
    s.current = !1;
  } : e, a);
}
var Q = is;
function Ue() {
}
function je(e, a, t, s) {
  return ts(e, s) || ns(e, a, t, s);
}
function ts(e, a) {
  return e.editor.getModel(Vt(e, a));
}
function ns(e, a, t, s) {
  return e.editor.createModel(a, t, s ? Vt(e, s) : void 0);
}
function Vt(e, a) {
  return e.Uri.parse(a);
}
function as({ original: e, modified: a, language: t, originalLanguage: s, modifiedLanguage: r, originalModelPath: c, modifiedModelPath: l, keepCurrentOriginalModel: o = !1, keepCurrentModifiedModel: d = !1, theme: u = "light", loading: h = "Loading...", options: f = {}, height: p = "100%", width: m = "100%", className: y, wrapperProps: C = {}, beforeMount: R = Ue, onMount: N = Ue }) {
  let [g, V] = S(!1), [T, b] = S(!0), v = $(null), x = $(null), q = $(null), w = $(N), _ = $(R), j = $(!1);
  wt(() => {
    let k = jt.init();
    return k.then((P) => (x.current = P) && b(!1)).catch((P) => P?.type !== "cancelation" && console.error("Monaco initialization: error:", P)), () => v.current ? K() : k.cancel();
  }), Q(() => {
    if (v.current && x.current) {
      let k = v.current.getOriginalEditor(), P = je(x.current, e || "", s || t || "text", c || "");
      P !== k.getModel() && k.setModel(P);
    }
  }, [c], g), Q(() => {
    if (v.current && x.current) {
      let k = v.current.getModifiedEditor(), P = je(x.current, a || "", r || t || "text", l || "");
      P !== k.getModel() && k.setModel(P);
    }
  }, [l], g), Q(() => {
    let k = v.current.getModifiedEditor();
    k.getOption(x.current.editor.EditorOption.readOnly) ? k.setValue(a || "") : a !== k.getValue() && (k.executeEdits("", [{ range: k.getModel().getFullModelRange(), text: a || "", forceMoveMarkers: !0 }]), k.pushUndoStop());
  }, [a], g), Q(() => {
    v.current?.getModel()?.original.setValue(e || "");
  }, [e], g), Q(() => {
    let { original: k, modified: P } = v.current.getModel();
    x.current.editor.setModelLanguage(k, s || t || "text"), x.current.editor.setModelLanguage(P, r || t || "text");
  }, [t, s, r], g), Q(() => {
    x.current?.editor.setTheme(u);
  }, [u], g), Q(() => {
    v.current?.updateOptions(f);
  }, [f], g);
  let F = W(() => {
    if (!x.current) return;
    _.current(x.current);
    let k = je(x.current, e || "", s || t || "text", c || ""), P = je(x.current, a || "", r || t || "text", l || "");
    v.current?.setModel({ original: k, modified: P });
  }, [t, a, r, e, s, c, l]), I = W(() => {
    !j.current && q.current && (v.current = x.current.editor.createDiffEditor(q.current, { automaticLayout: !0, ...f }), F(), x.current?.editor.setTheme(u), V(!0), j.current = !0);
  }, [f, u, F]);
  A(() => {
    g && w.current(v.current, x.current);
  }, [g]), A(() => {
    !T && !g && I();
  }, [T, g, I]);
  function K() {
    let k = v.current?.getModel();
    o || k?.original?.dispose(), d || k?.modified?.dispose(), v.current?.dispose();
  }
  return ge.createElement(xt, { width: m, height: p, isEditorReady: g, loading: h, _ref: q, className: y, wrapperProps: C });
}
var ss = as;
Oi(ss);
function ls(e) {
  let a = $();
  return A(() => {
    a.current = e;
  }, [e]), a.current;
}
var rs = ls, We = /* @__PURE__ */ new Map();
function cs({ defaultValue: e, defaultLanguage: a, defaultPath: t, value: s, language: r, path: c, theme: l = "light", line: o, loading: d = "Loading...", options: u = {}, overrideServices: h = {}, saveViewState: f = !0, keepCurrentModel: p = !1, width: m = "100%", height: y = "100%", className: C, wrapperProps: R = {}, beforeMount: N = Ue, onMount: g = Ue, onChange: V, onValidate: T = Ue }) {
  let [b, v] = S(!1), [x, q] = S(!0), w = $(null), _ = $(null), j = $(null), F = $(g), I = $(N), K = $(), k = $(s), P = rs(c), G = $(!1), U = $(!1);
  wt(() => {
    let M = jt.init();
    return M.then((te) => (w.current = te) && q(!1)).catch((te) => te?.type !== "cancelation" && console.error("Monaco initialization: error:", te)), () => _.current ? X() : M.cancel();
  }), Q(() => {
    let M = je(w.current, e || s || "", a || r || "", c || t || "");
    M !== _.current?.getModel() && (f && We.set(P, _.current?.saveViewState()), _.current?.setModel(M), f && _.current?.restoreViewState(We.get(c)));
  }, [c], b), Q(() => {
    _.current?.updateOptions(u);
  }, [u], b), Q(() => {
    !_.current || s === void 0 || (_.current.getOption(w.current.editor.EditorOption.readOnly) ? _.current.setValue(s) : s !== _.current.getValue() && (U.current = !0, _.current.executeEdits("", [{ range: _.current.getModel().getFullModelRange(), text: s, forceMoveMarkers: !0 }]), _.current.pushUndoStop(), U.current = !1));
  }, [s], b), Q(() => {
    let M = _.current?.getModel();
    M && r && w.current?.editor.setModelLanguage(M, r);
  }, [r], b), Q(() => {
    o !== void 0 && _.current?.revealLine(o);
  }, [o], b), Q(() => {
    w.current?.editor.setTheme(l);
  }, [l], b);
  let ce = W(() => {
    if (!(!j.current || !w.current) && !G.current) {
      I.current(w.current);
      let M = c || t, te = je(w.current, s || e || "", a || r || "", M || "");
      _.current = w.current?.editor.create(j.current, { model: te, automaticLayout: !0, ...u }, h), f && _.current.restoreViewState(We.get(M)), w.current.editor.setTheme(l), o !== void 0 && _.current.revealLine(o), v(!0), G.current = !0;
    }
  }, [e, a, t, s, r, c, u, h, f, l, o]);
  A(() => {
    b && F.current(_.current, w.current);
  }, [b]), A(() => {
    !x && !b && ce();
  }, [x, b, ce]), k.current = s, A(() => {
    b && V && (K.current?.dispose(), K.current = _.current?.onDidChangeModelContent((M) => {
      U.current || V(_.current.getValue(), M);
    }));
  }, [b, V]), A(() => {
    if (b) {
      let M = w.current.editor.onDidChangeMarkers((te) => {
        let ri = _.current.getModel()?.uri;
        if (ri && te.find((ci) => ci.path === ri.path)) {
          let ci = w.current.editor.getModelMarkers({ resource: ri });
          T?.(ci);
        }
      });
      return () => {
        M?.dispose();
      };
    }
    return () => {
    };
  }, [b, T]);
  function X() {
    K.current?.dispose(), p ? f && We.set(c, _.current.saveViewState()) : _.current.getModel()?.dispose(), _.current.dispose();
  }
  return ge.createElement(xt, { width: m, height: y, isEditorReady: b, loading: d, _ref: j, className: C, wrapperProps: R });
}
var os = cs, ds = Oi(os), us = ds;
const qt = ({ closeModal: e, data: a, handleSaveCode: t, setData: s }) => bt(
  /* @__PURE__ */ i.jsx("div", { className: "editor-modal-container", children: /* @__PURE__ */ i.jsxs("div", { className: "editor-modal", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "editor-modal__header", children: [
      /* @__PURE__ */ i.jsx("span", { children: "Code must be written in Python" }),
      /* @__PURE__ */ i.jsx(ae, { label: "Cancel", onClick: e, variant: Ii }),
      /* @__PURE__ */ i.jsx(
        ae,
        {
          label: "Save",
          onClick: () => t(ft.Base64.encode(a)),
          variant: De
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      us,
      {
        className: "editor-modal__body",
        defaultLanguage: "python",
        defaultValue: a,
        onChange: (r) => s(r)
      }
    )
  ] }) }),
  document.getElementById("overlay_container")
);
qt.propTypes = {
  closeModal: n.func.isRequired,
  data: n.string.isRequired,
  handleSaveCode: n.func.isRequired,
  setData: n.func.isRequired
};
const Rt = ({ closeModal: e, defaultData: a, handleSaveCode: t }) => {
  const [s, r] = S(ft.Base64.decode(a));
  return /* @__PURE__ */ i.jsx(
    qt,
    {
      closeModal: e,
      data: s,
      handleSaveCode: t,
      setData: r
    }
  );
};
Rt.propTypes = {
  closeModal: n.func.isRequired,
  defaultData: n.string,
  handleSaveCode: n.func.isRequired
};
const z = ({ children: e = null, className: a = "", tip: t = "", title: s }) => /* @__PURE__ */ i.jsxs("div", { className: `panel-section ${a}`, children: [
  /* @__PURE__ */ i.jsxs("div", { className: "panel-section__title", children: [
    /* @__PURE__ */ i.jsx("h5", { children: s }),
    t && /* @__PURE__ */ i.jsx(dt, { className: "panel-section__tip", text: t })
  ] }),
  e && /* @__PURE__ */ i.jsx("div", { className: "panel-section__body", children: e })
] });
z.propTypes = {
  children: n.node,
  className: n.string,
  tip: n.string,
  title: n.string.isRequired
};
const ms = [{ label: "Source code", id: "source-code" }], Ct = "source-code", Di = "mlrun/mlrun", ps = {
  job: "ZGVmIGhhbmRsZXIoY29udGV4dCk6CiAgICBjb250ZXh0LmxvZ2dlci5pbmZvKCdIZWxsbyB3b3JsZCcp",
  serving: "ZnJvbSBjbG91ZHBpY2tsZSBpbXBvcnQgbG9hZAppbXBvcnQgbnVtcHkgYXMgbnAKZnJvbSB0eXBpbmcgaW1wb3J0IExpc3QKaW1wb3J0IG1scnVuCgpjbGFzcyBDbGFzc2lmaWVyTW9kZWwobWxydW4uc2VydmluZy5WMk1vZGVsU2VydmVyKToKICAgIGRlZiBsb2FkKHNlbGYpOgogICAgICAgICIiImxvYWQgYW5kIGluaXRpYWxpemUgdGhlIG1vZGVsIGFuZC9vciBvdGhlciBlbGVtZW50cyIiIgogICAgICAgIG1vZGVsX2ZpbGUsIGV4dHJhX2RhdGEgPSBzZWxmLmdldF9tb2RlbCgnLnBrbCcpCiAgICAgICAgc2VsZi5tb2RlbCA9IGxvYWQob3Blbihtb2RlbF9maWxlLCAncmInKSkKCiAgICBkZWYgcHJlZGljdChzZWxmLCBib2R5OiBkaWN0KSAtPiBMaXN0OgogICAgICAgICIiIkdlbmVyYXRlIG1vZGVsIHByZWRpY3Rpb25zIGZyb20gc2FtcGxlLiIiIgogICAgICAgIGZlYXRzID0gbnAuYXNhcnJheShib2R5WydpbnB1dHMnXSkKICAgICAgICByZXN1bHQ6IG5wLm5kYXJyYXkgPSBzZWxmLm1vZGVsLnByZWRpY3QoZmVhdHMpCiAgICAgICAgcmV0dXJuIHJlc3VsdC50b2xpc3QoKQ=="
}, J = "newImage", se = "existingImage", hs = (e) => [
  {
    value: se,
    label: "Use an existing image"
  },
  {
    value: J,
    label: "Build a new image"
  }
  // {
  //   value: FORCE_BUILD,
  //   label: 'Force build',
  //   tip:
  //     'When enabled this forces an image rebuild, if not the same image is used.',
  //   hidden: mode === PANEL_CREATE_MODE
  // }
], Tt = ({
  data: e,
  editCode: a,
  functionsStore: t,
  handleClassOnBlur: s,
  handleHandlerOnBlur: r,
  handleImageTypeChange: c,
  imageType: l,
  mode: o,
  setData: d,
  setEditCode: u,
  setValidation: h,
  validation: f
}) => {
  const p = ee();
  return /* @__PURE__ */ i.jsx("div", { className: "functions-panel__item new-item-side-panel__item code", children: /* @__PURE__ */ i.jsxs(z, { title: "Code", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "code__code-entry", children: [
      /* @__PURE__ */ i.jsx(
        H,
        {
          className: "type",
          floatingLabel: !0,
          label: "Code entry",
          onClick: (m) => {
            d((y) => ({
              ...y,
              entry: m
            }));
          },
          options: ms,
          selectedId: e.entry
        }
      ),
      e.entry === Ct && /* @__PURE__ */ i.jsx(
        ae,
        {
          className: "btn_edit",
          icon: /* @__PURE__ */ i.jsx(Ee, {}),
          label: "Edit source",
          onClick: () => u(!0),
          variant: ki
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "code__info", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "code__info_left", children: [
        t.newFunction.kind === Pi ? /* @__PURE__ */ i.jsx("div", { className: "code__default-class", children: /* @__PURE__ */ i.jsx(
          E,
          {
            floatingLabel: !0,
            invalid: !f.isDefaultCLassValid,
            label: "Default class",
            onChange: (m) => d((y) => ({ ...y, default_class: m })),
            onBlur: s,
            setInvalid: (m) => h((y) => ({
              ...y,
              isDefaultCLassValid: m
            })),
            value: e.default_class
          }
        ) }) : /* @__PURE__ */ i.jsx("div", { className: "code__handler", children: /* @__PURE__ */ i.jsx(
          E,
          {
            floatingLabel: !0,
            invalid: !f.isHandlerValid,
            label: "Default handler",
            onChange: (m) => d((y) => ({ ...y, handler: m })),
            onBlur: r,
            setInvalid: (m) => h((y) => ({
              ...y,
              isHandlerValid: m
            })),
            tip: "Enter the function handler name (e.g. for the default sample function the name should be `handler`)",
            value: e.handler,
            wrapperClassName: "handler"
          }
        ) }),
        o === ei && /* @__PURE__ */ i.jsx("div", { className: "code__force-build", children: /* @__PURE__ */ i.jsx(
          ti,
          {
            item: { id: "enabled", label: "Force build" },
            onChange: () => p(hn(!t.newFunction.skip_deployed)),
            selectedId: t.newFunction.skip_deployed ? "enabled" : ""
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "code__info_right", children: /* @__PURE__ */ i.jsxs("div", { className: "code__existing-image", children: [
        /* @__PURE__ */ i.jsx(
          ea,
          {
            className: "radio-buttons__block",
            elements: hs(),
            onChangeCallback: c,
            selectedValue: l
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "code__images-inputs", children: [
          /* @__PURE__ */ i.jsx(
            E,
            {
              className: "input__wide",
              disabled: l !== se,
              floatingLabel: !0,
              invalid: !f.isCodeImageValid && l === se,
              label: "Image name",
              onBlur: (m) => {
                m.target.value !== t.newFunction.spec.image && p(Ae(e.image));
              },
              onChange: (m) => d((y) => ({ ...y, image: m })),
              required: l === se,
              setInvalid: (m) => h((y) => ({
                ...y,
                isCodeImageValid: m
              })),
              tip: "The name of the function‘s container image",
              value: e.image,
              wrapperClassName: "image-name"
            }
          ),
          /* @__PURE__ */ i.jsx(
            E,
            {
              className: "input__wide",
              disabled: l !== J,
              floatingLabel: !0,
              invalid: !f.isBuildImageValid,
              label: "Resulting Image",
              onBlur: (m) => {
                m.target.value !== t.newFunction.spec.build.image && p(ji(e.build_image));
              },
              onChange: (m) => d((y) => ({ ...y, build_image: m })),
              setInvalid: (m) => h((y) => ({
                ...y,
                isBuildImageValid: m
              })),
              tip: "The name of the built container image",
              type: "text",
              value: e.build_image,
              wrapperClassName: "build-image"
            }
          ),
          /* @__PURE__ */ i.jsx(
            E,
            {
              className: "input__wide",
              disabled: l !== J,
              floatingLabel: !0,
              invalid: !f.isBaseImageValid && l === J,
              label: "Base image",
              onBlur: (m) => {
                m.target.value !== t.newFunction.spec.build.base_image && p(xi(e.base_image));
              },
              onChange: (m) => d((y) => ({ ...y, base_image: m })),
              required: l === J,
              setInvalid: (m) => h((y) => ({
                ...y,
                isBaseImageValid: m
              })),
              tip: "The name of a base container image from which to build the function's processor image",
              type: "text",
              value: e.base_image,
              wrapperClassName: "base-image"
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "code__build", children: [
      /* @__PURE__ */ i.jsx(
        E,
        {
          disabled: l !== J,
          floatingLabel: !0,
          label: "Requirements (separate values using comma)",
          onChange: (m) => d((y) => ({
            ...y,
            requirements: m
          })),
          invalid: !f.isBuildRequirementValid && l === J,
          onBlur: (m) => {
            O.isEqual(
              Ye(m.target.value, ","),
              t.newFunction.spec.build.requirements
            ) || p(wi(Ye(e.requirements, ",")));
          },
          setInvalid: (m) => h((y) => ({
            ...y,
            isBuildRequirementValid: m
          })),
          value: e.requirements,
          wrapperClassName: "requirements"
        }
      ),
      /* @__PURE__ */ i.jsx(
        gt,
        {
          disabled: l !== J,
          floatingLabel: !0,
          label: "Build commands",
          onChange: (m) => d((y) => ({
            ...y,
            commands: m
          })),
          invalid: !f.isBuildCommandsValid && l === J,
          onBlur: (m) => {
            O.isEqual(
              Je(m.target.value, `
`),
              t.newFunction.spec.build.commands
            ) || p(ut(Je(e.commands, `
`)));
          },
          setInvalid: (m) => h((y) => ({
            ...y,
            isBuildCommandsValid: m
          })),
          value: e.commands,
          wrapperClassName: "commands"
        }
      )
    ] }),
    a && /* @__PURE__ */ i.jsx(
      Rt,
      {
        closeModal: () => u(!1),
        defaultData: t.newFunction.spec.build.functionSourceCode,
        handleSaveCode: (m) => {
          u(!1), p(mt(m));
        }
      }
    )
  ] }) });
};
Tt.propTypes = {
  data: n.object.isRequired,
  editCode: n.bool.isRequired,
  functionsStore: n.object.isRequired,
  handleClassOnBlur: n.func.isRequired,
  handleHandlerOnBlur: n.func.isRequired,
  handleImageTypeChange: n.func.isRequired,
  imageType: n.string.isRequired,
  mode: n.string.isRequired,
  setData: n.func.isRequired,
  setEditCode: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const St = ({
  defaultData: e = {},
  imageType: a,
  mode: t,
  setImageType: s,
  setValidation: r,
  validation: c
}) => {
  const [l, o] = S({
    default_class: e.default_class ?? "",
    entry: Ct,
    handler: e.default_handler ?? bn,
    image: e.image ?? "",
    base_image: e.build?.base_image ?? "",
    requirements: (e.build?.requirements || []).join(", ") ?? "",
    commands: (e.build?.commands || []).join(`
`) ?? "",
    build_image: e.build?.image ?? ""
  }), [d, u] = S(!1), h = Ie(), f = ee(), p = Y((N) => N.functionsStore), m = Y((N) => N.appStore);
  A(() => {
    !p.newFunction.spec.build.functionSourceCode && O.isNil(e.build?.functionSourceCode) && f(mt(ps[p.newFunction.kind]));
  }, [
    e.build,
    f,
    p.newFunction.kind,
    p.newFunction.spec.build.functionSourceCode
  ]), A(() => {
    if (t === fe && a.length === 0)
      if (m.frontendSpec.default_function_image_by_kind?.[p.newFunction.kind])
        f(
          Ae(
            m.frontendSpec.default_function_image_by_kind[p.newFunction.kind]
          )
        ), s(se), o((N) => ({
          ...N,
          image: m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind]
        }));
      else {
        const N = (m.frontendSpec?.function_deployment_target_image_template || "").replace("{project}", h.projectName).replace("{name}", p.newFunction.metadata.name).replace("{tag}", p.newFunction.metadata.tag || Xe);
        f(
          wi(
            Je(m.frontendSpec?.function_deployment_mlrun_requirement ?? "", ",")
          )
        ), s(J), f(
          xi(
            m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] ?? ""
          )
        ), f(ji(N)), o((g) => ({
          ...g,
          requirements: m.frontendSpec?.function_deployment_mlrun_requirement ?? "",
          base_image: m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] ?? "",
          build_image: N
        }));
      }
    else (e.image?.length > 0 || e.build?.base_image?.length === 0 && e.build?.commands?.length === 0 && e.build?.image?.length === 0 && e.image?.length === 0) && a.length === 0 ? (f(Ae(e.image || Di)), s(se), o((N) => ({
      ...N,
      image: e.image || Di
    }))) : a.length === 0 && s(J);
  }, [
    m.frontendSpec,
    e.build,
    e.image,
    p.newFunction.kind,
    p.newFunction.metadata.name,
    p.newFunction.metadata.tag,
    a.length,
    h.projectName,
    t,
    s,
    f
  ]);
  const y = () => {
    p.newFunction.spec.default_class !== l.default_class && f(_n(l.default_class));
  }, C = () => {
    p.newFunction.spec.default_handler !== l.handler && f(gn(l.handler));
  }, R = (N) => {
    if (N === se)
      t === fe ? (f(fn()), o((g) => ({
        ...g,
        base_image: "",
        commands: "",
        requirements: "",
        build_image: "",
        image: m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] ?? ""
      }))) : o((g) => ({
        ...g,
        image: g.image || m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] || ""
      })), f(
        Ae(
          l.image || m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] || ""
        )
      );
    else if (N === J) {
      const g = (m.frontendSpec?.function_deployment_target_image_template || "").replace("{project}", h.projectName).replace("{name}", p.newFunction.metadata.name).replace("{tag}", p.newFunction.metadata.tag || Xe);
      t === fe ? (f(Ae("")), o((V) => ({
        ...V,
        image: "",
        requirements: m.frontendSpec?.function_deployment_mlrun_requirement ?? "",
        base_image: m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] || "",
        build_image: g
      }))) : o((V) => ({
        ...V,
        commands: V.commands || "",
        requirements: V.requirements || (m.frontendSpec?.function_deployment_mlrun_requirement ?? ""),
        base_image: V.base_image || m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] || "",
        build_image: V.build_image || g
      })), f(
        wi(
          l.requirements.length > 0 ? Ye(l.requirements, ",") : Ye(m.frontendSpec?.function_deployment_mlrun_requirement ?? "", ",")
        )
      ), f(ut(Je(l.commands, `
`) || "")), f(
        xi(
          l.base_image || m.frontendSpec?.default_function_image_by_kind?.[p.newFunction.kind] || ""
        )
      ), f(ji(l.build_image || g));
    }
    s(N), r((g) => ({
      ...g,
      isCodeImageValid: !0,
      isBaseImageValid: !0,
      isBuildCommandsValid: !0,
      isBuildImageValid: !0
    }));
  };
  return /* @__PURE__ */ i.jsx(
    Tt,
    {
      data: l,
      editCode: d,
      functionsStore: p,
      handleClassOnBlur: y,
      handleHandlerOnBlur: C,
      handleImageTypeChange: R,
      imageType: a,
      mode: t,
      setData: o,
      setEditCode: u,
      setValidation: r,
      validation: c
    }
  );
};
St.propTypes = {
  defaultData: n.object,
  imageType: n.string.isRequired,
  mode: n.string.isRequired,
  setImageType: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const le = (e) => /* @__PURE__ */ di.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ di.createElement("rect", { x: 10, y: 4, width: 3, height: 15, fill: "#7F7989" }), /* @__PURE__ */ di.createElement("rect", { x: 4, y: 13, width: 3, height: 15, transform: "rotate(-90 4 13)", fill: "#7F7989" })), Ft = ({
  addNewItemLabel: e,
  content: a,
  deleteItem: t,
  disabled: s,
  handleEditItem: r,
  handleResetForm: c,
  isAddNewItem: l,
  isEditMode: o,
  isKeyEditable: d = !0,
  isKeyNotUnique: u,
  isKeyRequired: h,
  isValueRequired: f,
  keyHeader: p,
  keyLabel: m = "Key",
  keyOptions: y = [],
  keyType: C = "input",
  keyValue: R,
  saveItem: N,
  selectedItem: g = {},
  setEditMode: V,
  setIsAddNewItem: T,
  setKey: b,
  setSelectedItem: v,
  setValidation: x,
  setValue: q,
  tableClassNames: w,
  validation: _,
  valueHeader: j,
  valueLabel: F = "Value",
  valueType: I = "text",
  withEditMode: K = !1
}) => {
  const k = D("add-new-item-btn", s && "disabled");
  return /* @__PURE__ */ i.jsxs("div", { className: w, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "table-row table-row__header no-hover", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "table-cell__inputs-wrapper", children: [
        /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__key", children: p }),
        /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__value", children: j })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__actions" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "key-value-table__body", children: a.map((P, G) => o && G === g.index && !s ? /* @__PURE__ */ i.jsxs("div", { className: "table-row table-row_edit", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "table-cell__inputs-wrapper", children: [
        /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__key", children: d ? C === "select" ? /* @__PURE__ */ i.jsx(
          H,
          {
            density: "dense",
            onClick: (U) => v({
              ...g,
              newKey: U,
              index: G
            }),
            options: y,
            selectedId: g.newKey ?? g.key
          }
        ) : /* @__PURE__ */ i.jsx(
          E,
          {
            className: "input_edit",
            density: "dense",
            invalid: g.newKey !== g.key && u(g.newKey, a) || !_.isEditKeyValid,
            invalidText: u(g.newKey, a) ? "Name already exists" : "This field is invalid",
            onChange: (U) => v({
              ...g,
              newKey: U,
              index: G
            }),
            required: h,
            setInvalid: (U) => x((ce) => ({
              ...ce,
              isEditKeyValid: U
            })),
            type: "text",
            value: g.newKey ?? g.key
          }
        ) : /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: P.key }), children: P.key }) }),
        /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__value", children: /* @__PURE__ */ i.jsx(
          E,
          {
            className: "input_edit",
            density: "dense",
            invalid: !_.isEditValueValid,
            onChange: (U) => v({
              ...g,
              value: U,
              index: G
            }),
            required: f,
            setInvalid: (U) => x((ce) => ({
              ...ce,
              isEditValueValid: U
            })),
            type: I,
            value: I === "password" ? "" : g.newValue ?? g.value
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "table-cell table-cell__actions", children: [
        /* @__PURE__ */ i.jsx(
          me,
          {
            className: "key-value-table__btn",
            disabled: f && h && (!_.isEditKeyValid || !_.isEditValueValid || g.newKey !== g.key && u(g.newKey, a)),
            id: "key-value-table-apply",
            onClick: r,
            tooltipText: "Apply",
            children: /* @__PURE__ */ i.jsx(Hi, {})
          }
        ),
        /* @__PURE__ */ i.jsx(
          me,
          {
            className: "key-value-table__btn",
            id: "key-value-table-close",
            onClick: c,
            tooltipText: "Discard changes",
            children: /* @__PURE__ */ i.jsx(Vi, {})
          }
        )
      ] })
    ] }, G) : /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "table-row",
        onClick: () => {
          K && (v({ ...P, index: G }), V(!0), T(!1), x({
            isKeyValid: !0,
            isValueValid: !0,
            isEditKeyValid: !0,
            isEditValueValid: !0
          }));
        },
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "table-cell__inputs-wrapper", children: [
            /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__key", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: P.key }), children: P.key }) }),
            /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__value", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: P.value }), children: P.value }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "table-cell table-cell__actions", children: [
            /* @__PURE__ */ i.jsx(
              me,
              {
                className: "key-value-table__btn",
                id: "key-value-table-edit",
                onClick: (U) => {
                  U.preventDefault();
                },
                tooltipText: "Edit",
                children: /* @__PURE__ */ i.jsx(Ee, {})
              }
            ),
            /* @__PURE__ */ i.jsx(
              me,
              {
                className: "key-value-table__btn",
                id: "key-value-table-delete",
                onClick: (U) => {
                  U.stopPropagation(), t(G, P);
                },
                tooltipText: "Delete",
                children: /* @__PURE__ */ i.jsx(re, {})
              }
            )
          ] })
        ]
      },
      G
    )) }),
    l && !s ? /* @__PURE__ */ i.jsxs("div", { className: "table-row table-row__last no-hover", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "table-cell__inputs-wrapper", children: [
        /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__key", children: C === "select" ? /* @__PURE__ */ i.jsx(
          H,
          {
            density: "dense",
            label: R || m,
            onClick: b,
            options: y
          }
        ) : /* @__PURE__ */ i.jsx(
          E,
          {
            density: "dense",
            floatingLabel: !0,
            label: m,
            invalid: u(R, a) || !_.isKeyValid,
            invalidText: u(R, a) ? "Name already exists" : "This field is invalid",
            onChange: b,
            required: h,
            setInvalid: (P) => x((G) => ({
              ...G,
              isKeyValid: P
            })),
            type: "text"
          }
        ) }),
        /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__value", children: /* @__PURE__ */ i.jsx(
          E,
          {
            density: "dense",
            floatingLabel: !0,
            invalid: !_.isValueValid,
            label: F,
            onChange: q,
            required: f,
            setInvalid: (P) => x((G) => ({
              ...G,
              isValueValid: P
            })),
            type: I
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "table-cell table-cell__actions", children: [
        /* @__PURE__ */ i.jsx(
          me,
          {
            className: "btn-add",
            disabled: u(R, a),
            id: "key-value-table-apply",
            onClick: N,
            tooltipText: "Apply",
            children: /* @__PURE__ */ i.jsx(Hi, {})
          }
        ),
        /* @__PURE__ */ i.jsx(
          me,
          {
            className: "btn-add",
            id: "key-value-table-discard",
            onClick: c,
            tooltipText: "Discard changes",
            children: /* @__PURE__ */ i.jsx(Vi, {})
          }
        )
      ] })
    ] }) : /* @__PURE__ */ i.jsx("div", { className: "table-row table-row__last no-hover", children: /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: k,
        onClick: () => {
          s || (c(), T(!0));
        },
        children: [
          /* @__PURE__ */ i.jsx(le, {}),
          e
        ]
      }
    ) })
  ] });
};
Ft.propTypes = {
  addNewItemLabel: n.string.isRequired,
  content: n.arrayOf(
    n.shape({
      key: n.string,
      value: n.string
    })
  ).isRequired,
  deleteItem: n.func.isRequired,
  disabled: n.bool.isRequired,
  handleEditItem: n.func.isRequired,
  handleResetForm: n.func.isRequired,
  isAddNewItem: n.bool.isRequired,
  isEditMode: n.bool.isRequired,
  isKeyEditable: n.bool.isRequired,
  isKeyNotUnique: n.func.isRequired,
  isKeyRequired: n.bool.isRequired,
  isValueRequired: n.bool.isRequired,
  keyHeader: n.string.isRequired,
  keyLabel: n.string,
  keyOptions: n.arrayOf(
    n.shape({
      label: n.string.isRequired,
      id: n.string.isRequired
    })
  ),
  keyType: n.string,
  keyValue: n.string.isRequired,
  saveItem: n.func.isRequired,
  selectedItem: n.object,
  setEditMode: n.func.isRequired,
  setIsAddNewItem: n.func.isRequired,
  setKey: n.func.isRequired,
  setSelectedItem: n.func.isRequired,
  setValidation: n.func.isRequired,
  setValue: n.func.isRequired,
  tableClassNames: n.string.isRequired,
  validation: n.object.isRequired,
  valueHeader: n.string.isRequired,
  valueLabel: n.string,
  valueType: n.string,
  withEditMode: n.bool
};
const Bi = ({
  addNewItem: e,
  addNewItemLabel: a,
  className: t = "",
  content: s,
  deleteItem: r,
  defaultKeyValue: c = "",
  disabled: l = !1,
  editItem: o = () => {
  },
  isKeyEditable: d = !0,
  isKeyRequired: u = !1,
  isValueRequired: h = !1,
  keyHeader: f,
  keyLabel: p = "Key",
  keyOptions: m = [],
  keyType: y = "input",
  valueHeader: C,
  valueLabel: R = "Value",
  valueType: N = "text",
  withEditMode: g = !1
}) => {
  const [V, T] = S(!1), [b, v] = S(!1), [x, q] = S(null), [w, _] = S({
    isKeyValid: !0,
    isValueValid: !0,
    isEditKeyValid: !0,
    isEditValueValid: !0
  }), [j, F] = S(c || ""), [I, K] = S(""), k = D("key-value-table", t);
  A(() => () => {
    _({
      isKeyValid: !0,
      isValueValid: !0,
      isEditKeyValid: !0,
      isEditValueValid: !0
    });
  }, [V]);
  const P = () => {
    const X = () => {
      e({ key: j, value: I }), F(c || ""), K(""), T(!1);
    };
    u && !h ? j.length > 0 && w.isKeyValid ? X() : _((M) => ({
      ...M,
      isKeyValid: !1
    })) : h && !u ? I.length > 0 && w.isValueValid ? X() : _((M) => ({
      ...M,
      isValueValid: !1
    })) : u && h ? j.length > 0 && w.isKeyValid && I.length > 0 && w.isValueValid ? X() : _((M) => ({
      ...M,
      isKeyValid: j.length > 0 && M.isKeyValid,
      isValueValid: I.length > 0 && M.isValueValid
    })) : j.length === 0 && I.length === 0 ? (F(c || ""), K(""), T(!1)) : w.isKeyValid && w.isValueValid && X();
  }, G = () => {
    const X = () => {
      o(x), v(!1), q(null);
    };
    u && !h ? (x.newKey?.length > 0 || x.key.length > 0) && w.isEditKeyValid ? X() : _((M) => ({
      ...M,
      isEditKeyValid: !1
    })) : h && !u ? x.value.length > 0 && w.isEditValueValid ? X() : _((M) => ({
      ...M,
      isEditValueValid: !1
    })) : u && h ? (x.newKey?.length > 0 || x.key.length > 0) && w.isEditKeyValid && x.value.length > 0 && w.isEditValueValid && X() : X();
  }, U = () => {
    F(c || ""), K(""), T(!1), v(!1), _({
      isKeyValid: !0,
      isValueValid: !0,
      isEditKeyValid: !0,
      isEditValueValid: !0
    });
  }, ce = (X, M) => y !== "select" && M.some(({ key: te }) => X === te);
  return /* @__PURE__ */ i.jsx(
    Ft,
    {
      addNewItemLabel: a,
      content: s,
      deleteItem: r,
      disabled: l,
      handleEditItem: G,
      handleResetForm: U,
      isAddNewItem: V,
      isEditMode: b,
      isKeyEditable: d,
      isKeyNotUnique: ce,
      isKeyRequired: u,
      isValueRequired: h,
      keyHeader: f,
      keyLabel: p,
      keyOptions: m,
      keyType: y,
      keyValue: j,
      saveItem: P,
      selectedItem: x,
      setEditMode: v,
      setIsAddNewItem: T,
      setKey: F,
      setSelectedItem: q,
      setValidation: _,
      setValue: K,
      tableClassNames: k,
      validation: w,
      valueHeader: C,
      valueLabel: R,
      valueType: N,
      withEditMode: g
    }
  );
};
Bi.propTypes = {
  addNewItem: n.func.isRequired,
  addNewItemLabel: n.string.isRequired,
  className: n.string,
  content: n.arrayOf(
    n.shape({
      key: n.string,
      value: n.string
    })
  ).isRequired,
  defaultKeyValue: n.string,
  deleteItem: n.func.isRequired,
  disabled: n.bool,
  editItem: n.func,
  isKeyEditable: n.bool,
  isKeyRequired: n.bool,
  isValueRequired: n.bool,
  keyHeader: n.string.isRequired,
  keyLabel: n.string,
  keyOptions: n.arrayOf(
    n.shape({
      label: n.string.isRequired,
      id: n.string.isRequired
    })
  ),
  keyType: n.string,
  valueHeader: n.string.isRequired,
  valueLabel: n.string,
  valueType: n.string,
  withEditMode: n.bool
};
const bs = "secretKey", fs = "secretName", gs = [
  { label: "Name", id: "name", className: "table-cell__key" },
  { label: "Type", id: "type", className: "table-cell__type" },
  { label: "Value", id: "value", className: "table-cell__value" }
], hi = {
  isNameValid: !0,
  isValueValid: !0,
  isSecretKeyValid: !0,
  isSecretNameValid: !0
}, bi = {
  name: "",
  type: "value",
  value: "",
  secretName: "",
  secretKey: ""
}, Et = [
  { label: "Value", id: _e },
  { label: "Secret", id: ie }
], we = (e, a) => a.some((t) => t.name === e), _s = (e, a, t) => {
  let s = !0;
  return !O.isNil(e.newName) && (!t.isNameValid || e.newName.length === 0) && (s = !1), !O.isNil(e.newName) && e.newName !== e.name && we(e.newName, a) && (s = !1), (e.type === _e || O.isNil(e.secretName)) && (!t.isValueValid || e.value.length === 0) && (s = !1), !O.isNil(e.secretKey) && !t.isSecretKeyValid && (s = !1), e.type === ie && !O.isNil(e.secretName) && (!t.isSecretNameValid || e.secretName.length === 0) && (s = !1), s;
}, It = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("span", { children: "• Valid characters: A-Z, a-z, 0-9, -, _, ." }),
  /* @__PURE__ */ i.jsx("br", {}),
  /* @__PURE__ */ i.jsx("span", { children: "• Must begin and end with: A-Z, a-z, 0-9" }),
  /* @__PURE__ */ i.jsx("br", {}),
  /* @__PURE__ */ i.jsx("span", { children: "• No consecutive characters: .., .–, –." }),
  /* @__PURE__ */ i.jsx("br", {}),
  /* @__PURE__ */ i.jsx("span", { children: "• Max length between two periods: 63" }),
  /* @__PURE__ */ i.jsx("br", {}),
  /* @__PURE__ */ i.jsx("span", { children: "• Length - max: 253" })
] }), kt = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("span", { children: "• Valid characters: A-Z, a-z, 0-9, -, _, ." }),
  /* @__PURE__ */ i.jsx("br", {}),
  /* @__PURE__ */ i.jsx("span", { children: "• Must not start with: .." }),
  /* @__PURE__ */ i.jsx("br", {}),
  /* @__PURE__ */ i.jsx("span", { children: "• Must not be: ., .." }),
  /* @__PURE__ */ i.jsx("br", {}),
  /* @__PURE__ */ i.jsx("span", { children: "• Length - max: 253" })
] }), Pt = ({
  addEnvVariable: e,
  discardChanges: a,
  envVariables: t,
  newEnvVariable: s,
  setNewEnvVariable: r,
  setValidation: c,
  validation: l
}) => {
  const { projectName: o } = Ie();
  return /* @__PURE__ */ i.jsxs("div", { className: "table__body", children: [
    /* @__PURE__ */ i.jsx("div", { className: "table__body-column", children: /* @__PURE__ */ i.jsxs("div", { className: "input-row-wrapper", children: [
      /* @__PURE__ */ i.jsx(
        E,
        {
          className: "input-row__item",
          floatingLabel: !0,
          invalid: we(s.name, t) || !l.isNameValid,
          invalidText: we(s.name, t) ? "Name already exists" : "This field is invalid",
          label: "Name",
          onChange: (d) => r((u) => ({ ...u, name: d })),
          required: !0,
          setInvalid: (d) => c((u) => ({
            ...u,
            isNameValid: d
          }))
        }
      ),
      /* @__PURE__ */ i.jsx(
        H,
        {
          onClick: (d) => {
            r((u) => ({
              ...u,
              type: d,
              value: "",
              secretName: "",
              secretKey: ""
            })), c((u) => ({
              ...u,
              isNameValid: !0,
              isValueValid: !0,
              isSecretKeyValid: !0,
              isSecretNameValid: !0
            }));
          },
          options: Et,
          selectedId: s.type
        }
      ),
      s.type === ie ? /* @__PURE__ */ i.jsxs("div", { className: "input-row__item-secret", children: [
        /* @__PURE__ */ i.jsx(
          E,
          {
            className: "secret-item",
            floatingLabel: !0,
            invalid: !l.isSecretNameValid,
            label: "Secret Name",
            onChange: (d) => r((u) => ({ ...u, secretName: d })),
            pattern: "^(?=[\\S\\s]{1,253}$)[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?)*$",
            validationRules: Te("environmentVariables.secretName", [
              ni(o)
            ]),
            required: !0,
            setInvalid: (d) => c((u) => ({
              ...u,
              isSecretNameValid: d
            })),
            tip: It
          }
        ),
        /* @__PURE__ */ i.jsx(
          E,
          {
            className: "secret-item",
            floatingLabel: !0,
            invalid: !l.isSecretKeyValid,
            label: "Secret Key",
            onChange: (d) => r((u) => ({ ...u, secretKey: d })),
            pattern: "^(?=[\\S\\s]{0,253}$)(?!\\.$)(?!\\.\\.[\\S\\s]*$)[-._a-zA-Z0-9]*$",
            setInvalid: (d) => c((u) => ({
              ...u,
              isSecretKeyValid: d
            })),
            tip: kt
          }
        )
      ] }) : /* @__PURE__ */ i.jsx(
        E,
        {
          className: "input-row__item",
          floatingLabel: !0,
          invalid: !l.isValueValid,
          label: "Value",
          onChange: (d) => r((u) => ({ ...u, value: d })),
          required: !0,
          setInvalid: (d) => c((u) => ({
            ...u,
            isValueValid: d
          }))
        }
      )
    ] }) }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "variables-table__btn btn-add",
        disabled: we(s.name, t),
        onClick: e,
        children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Add item" }), children: /* @__PURE__ */ i.jsx(le, {}) })
      }
    ),
    /* @__PURE__ */ i.jsx("button", { onClick: a, className: "variables-table__btn", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Discard changes" }), children: /* @__PURE__ */ i.jsx(re, {}) }) })
  ] });
};
Pt.propTypes = {
  addEnvVariable: n.func.isRequired,
  discardChanges: n.func.isRequired,
  envVariables: n.arrayOf(n.object).isRequired,
  newEnvVariable: n.object.isRequired,
  setNewEnvVariable: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const Mt = ({
  editEnvVariable: e,
  envVariables: a,
  envVariable: t,
  selectedEnvVariable: s,
  setSelectedEnvVariable: r
}) => {
  const [c, l] = S(""), [o, d] = S(""), [u, h] = S({
    isNameValid: !0,
    isValueValid: !0,
    isSecretNameValid: !0,
    isSecretKeyValid: !0
  }), { projectName: f } = Ie();
  return A(() => {
    if (s.type === ie) {
      const [p, m] = s.value.split(":");
      l(p), d(m);
    }
  }, [s.type, s.value]), /* @__PURE__ */ i.jsxs("div", { className: "table__row edit-row", children: [
    /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__key", children: /* @__PURE__ */ i.jsx(
      E,
      {
        floatingLabel: !0,
        invalid: s.newName !== s.name && we(s.newName, a) || !u.isNameValid,
        invalidText: we(s.newName, a) ? "Name already exists" : "This field is invalid",
        label: "Name",
        onChange: (p) => {
          r({
            ...s,
            newName: p
          });
        },
        required: !0,
        setInvalid: (p) => h((m) => ({ ...m, isNameValid: p })),
        type: "text",
        value: s.newName ?? s.name
      }
    ) }),
    /* @__PURE__ */ i.jsx("div", { className: "table-cell table-cell__type", children: /* @__PURE__ */ i.jsx(
      H,
      {
        onClick: (p) => {
          r((m) => ({
            ...m,
            type: p,
            value: "",
            secretName: "",
            secretKey: ""
          })), h((m) => ({
            ...m,
            isNameValid: !0,
            isValueValid: !0,
            isSecretKeyValid: !0,
            isSecretNameValid: !0
          }));
        },
        options: Et,
        selectedId: s.type
      }
    ) }),
    /* @__PURE__ */ i.jsxs("div", { className: "table-cell table-cell__value", children: [
      s.type === ie && /* @__PURE__ */ i.jsxs("div", { className: "table-cell__secret", children: [
        /* @__PURE__ */ i.jsx(
          E,
          {
            floatingLabel: !0,
            invalid: !u.isSecretNameValid,
            label: "Secret Name",
            onChange: (p) => r((m) => ({ ...m, secretName: p })),
            pattern: "^(?=[\\S\\s]{1,253}$)[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?)*$",
            validationRules: Te("environmentVariables.secretName", [
              ni(f, t?.value?.split?.(":")?.[0])
            ]),
            required: !0,
            setInvalid: (p) => h((m) => ({ ...m, isSecretNameValid: p })),
            tip: It,
            value: c
          }
        ),
        /* @__PURE__ */ i.jsx(
          E,
          {
            floatingLabel: !0,
            invalid: !u.isSecretKeyValid,
            label: "Secret Key",
            onChange: (p) => r((m) => ({ ...m, secretKey: p })),
            pattern: "^(?=[\\S\\s]{0,253}$)(?!\\.$)(?!\\.\\.[\\S\\s]*$)[-._a-zA-Z0-9]*$",
            setInvalid: (p) => h((m) => ({ ...m, isSecretKeyValid: p })),
            tip: kt,
            value: o
          }
        )
      ] }),
      s.type === _e && /* @__PURE__ */ i.jsx(
        E,
        {
          floatingLabel: !0,
          invalid: !u.isValueValid,
          label: "Value",
          onChange: (p) => r((m) => ({ ...m, value: p })),
          required: !0,
          setInvalid: (p) => h((m) => ({ ...m, isValueValid: p })),
          value: s.value
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-actions", children: /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "apply-edit-btn",
        disabled: !_s(s, a, u),
        onClick: e,
        children: /* @__PURE__ */ i.jsx(ai, {})
      }
    ) })
  ] });
};
Mt.propTypes = {
  editEnvVariable: n.func.isRequired,
  envVariables: n.array.isRequired,
  envVariable: n.object.isRequired,
  selectedEnvVariable: n.object.isRequired,
  setSelectedEnvVariable: n.func.isRequired
};
const Ot = ({
  addEnvVariable: e,
  className: a = "",
  discardChanges: t,
  editEnvVariable: s,
  envVariables: r,
  generateActionsMenu: c,
  isPanelEditMode: l = !1,
  newEnvVariable: o,
  selectedEnvVariable: d = null,
  setNewEnvVariable: u,
  setSelectedEnvVariable: h,
  setShowAddNewEnvVariableRow: f,
  setValidation: p,
  showAddNewEnvVariableRow: m,
  validation: y
}) => {
  const C = D(
    "env-variables-table",
    m && "no-border",
    a
  ), R = D("add-input", l && "disabled");
  return /* @__PURE__ */ i.jsx("div", { className: "new-item-side-panel__item", children: /* @__PURE__ */ i.jsx(z, { title: "Environment Variables", children: /* @__PURE__ */ i.jsxs("div", { className: C, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "table__header table__row no-hover", children: [
      gs.map((N) => {
        const g = D("table__cell", N.className);
        return /* @__PURE__ */ i.jsx("div", { className: g, children: N.label }, N.id);
      }),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell-actions" })
    ] }),
    r.map(
      (N, g) => d && !l && d.name === N.name ? /* @__PURE__ */ i.jsx(
        Mt,
        {
          editEnvVariable: s,
          envVariables: r,
          envVariable: N,
          selectedEnvVariable: d,
          setSelectedEnvVariable: h
        },
        g
      ) : /* @__PURE__ */ i.jsxs("div", { className: "table__row", children: [
        /* @__PURE__ */ i.jsx("div", { className: "table__cell table-cell__key", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: N.name }), children: N.name }) }),
        /* @__PURE__ */ i.jsx("div", { className: "table__cell table-cell__type", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: N.type }), children: N.type }) }),
        /* @__PURE__ */ i.jsx("div", { className: "table__cell table-cell__value", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: N.value }), children: N.value }) }),
        !l && /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-actions", children: /* @__PURE__ */ i.jsx(ii, { dataItem: N, menu: c(N) }) })
      ] }, g)
    ),
    m && !l ? /* @__PURE__ */ i.jsx(
      Pt,
      {
        addEnvVariable: e,
        discardChanges: t,
        envVariables: r,
        newEnvVariable: o,
        setNewEnvVariable: u,
        setValidation: p,
        validation: y
      }
    ) : /* @__PURE__ */ i.jsx("div", { className: "table__row no-hover", children: /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "table__cell",
        onClick: () => !l && f(!0),
        children: /* @__PURE__ */ i.jsxs("button", { className: R, children: [
          /* @__PURE__ */ i.jsx(le, {}),
          "Add variable"
        ] })
      }
    ) })
  ] }) }) });
};
Ot.propTypes = {
  addEnvVariable: n.func.isRequired,
  className: n.string,
  discardChanges: n.func.isRequired,
  editEnvVariable: n.func.isRequired,
  envVariables: n.array.isRequired,
  generateActionsMenu: n.func.isRequired,
  isPanelEditMode: n.bool,
  newEnvVariable: n.object.isRequired,
  selectedEnvVariable: n.object,
  setNewEnvVariable: n.func.isRequired,
  setSelectedEnvVariable: n.func.isRequired,
  setShowAddNewEnvVariableRow: n.func.isRequired,
  setValidation: n.func.isRequired,
  showAddNewEnvVariableRow: n.bool.isRequired,
  validation: n.object.isRequired
};
const At = ({
  className: e = "",
  envVariables: a,
  handleAddNewEnv: t,
  handleDeleteEnv: s,
  handleEditEnv: r,
  isPanelEditMode: c = !1
}) => {
  const [l, o] = S(bi), [d, u] = S(hi), [h, f] = S(!1), [p, m] = S(null), y = () => {
    let T = !1;
    l.type === ie ? T = l.name.length > 0 && d.isNameValid && l.secretName.length > 0 && d.isSecretNameValid && d.isSecretKeyValid : l.type === _e && (T = l.name.length > 0 && d.isNameValid && l.value.length > 0 && d.isValueValid), T ? (t(l), C()) : u((b) => ({
      ...b,
      isNameValid: l.name.length > 0 && b.isNameValid,
      isValueValid: l.type === ie || l.value.length > 0 && b.isValueValid,
      isSecretNameValid: l.type === _e || l.secretName.length > 0 && b.isSecretNameValid
    }));
  }, C = () => {
    o(bi), f(!1), u(hi);
  }, R = () => {
    const T = a.map((b) => {
      if (b.name === p.name)
        if (b.name = p.newName || p.name, b.type = p.type, p.type === ie) {
          const [v, x] = p.value.split(":"), q = Object.keys(p).includes(bs), w = Object.keys(p).includes(fs);
          p.secretName && !q ? b.value = `${p.secretName}:${x}` : p.secretName ? b.value = `${p.secretName}:${p.secretKey}` : q && !w && (b.value = `${v}:${p.secretKey}`);
        } else
          b.value = p.value;
      return b;
    });
    r(T), m(null);
  }, N = W(
    (T) => {
      s(a.filter((b) => b.name !== T.name));
    },
    [a, s]
  ), g = () => {
    o(bi), f(!1), u(hi);
  }, V = W(
    () => [
      [
        {
          label: "Edit",
          icon: /* @__PURE__ */ i.jsx(Ee, {}),
          onClick: (T) => {
            m(T);
          }
        },
        {
          label: "Delete",
          icon: /* @__PURE__ */ i.jsx(re, {}),
          className: "danger",
          onClick: (T) => {
            N(T);
          }
        }
      ]
    ],
    [N]
  );
  return /* @__PURE__ */ i.jsx(
    Ot,
    {
      addEnvVariable: y,
      className: e,
      discardChanges: g,
      editEnvVariable: R,
      envVariables: a,
      isPanelEditMode: c,
      generateActionsMenu: V,
      newEnvVariable: l,
      selectedEnvVariable: p,
      setNewEnvVariable: o,
      setSelectedEnvVariable: m,
      setShowAddNewEnvVariableRow: f,
      setValidation: u,
      showAddNewEnvVariableRow: h,
      validation: d
    }
  );
};
At.propTypes = {
  className: n.string,
  envVariables: n.array.isRequired,
  handleAddNewEnv: n.func.isRequired,
  handleDeleteEnv: n.func.isRequired,
  handleEditEnv: n.func.isRequired,
  isPanelEditMode: n.bool
};
const Lt = ({
  envVariables: e,
  handleAddNewEnv: a,
  handleDeleteEnv: t,
  handleEditEnv: s,
  isStagingMode: r
}) => r ? /* @__PURE__ */ i.jsx(
  At,
  {
    envVariables: e,
    handleAddNewEnv: a,
    handleDeleteEnv: t,
    handleEditEnv: s
  }
) : /* @__PURE__ */ i.jsx("div", { className: "functions-panel__item advanced new-item-side-panel__item", children: /* @__PURE__ */ i.jsx(z, { title: "Environment Variables", children: /* @__PURE__ */ i.jsx(
  Bi,
  {
    addNewItem: a,
    addNewItemLabel: "Add variable",
    className: "env",
    content: e.map((c) => ({
      key: c.name,
      value: c.value
    })),
    deleteItem: t,
    editItem: s,
    isKeyRequired: !0,
    isValueRequired: !0,
    keyHeader: "Variable name",
    keyLabel: "Name",
    valueHeader: "Value",
    valueLabel: "Value",
    withEditMode: !0
  }
) }) });
Lt.propTypes = {
  envVariables: n.arrayOf(
    n.shape({
      name: n.string.isRequired,
      value: n.string,
      valueFrom: n.shape({
        name: n.string,
        key: n.string
      }),
      ui: n.shape({
        name: n.string.isRequired,
        type: n.string.isRequired,
        value: n.string.isRequired
      })
    })
  ).isRequired,
  handleAddNewEnv: n.func.isRequired,
  handleDeleteEnv: n.func.isRequired,
  handleEditEnv: n.func.isRequired,
  isStagingMode: n.bool.isRequired
};
const ys = (e) => e.map((a) => {
  let t = _e, s = a.value ?? "";
  return a?.valueFrom?.secretKeyRef && (t = ie, s = `${a.valueFrom.secretKeyRef.name ?? ""}:${a.valueFrom.secretKeyRef.key ?? ""}`), { name: a.name, type: t, value: s };
}), fi = (e) => {
  if (e.type === _e)
    return {
      name: e.name,
      value: e.value
    };
  if (e.type === ie && e.value.length === 0)
    return {
      name: e.name,
      valueFrom: {
        secretKeyRef: {
          name: e.secretName,
          key: e.secretKey
        }
      }
    };
  if (e.type === ie && e.value.length > 0) {
    const [a, t] = e.value.split(":");
    return {
      name: e.name,
      valueFrom: {
        secretKeyRef: { name: a, key: t }
      }
    };
  }
}, vs = () => {
  const [e, a] = S([]), { isStagingMode: t } = Mi(), s = ee(), r = Y((d) => d.functionsStore);
  A(() => {
    a(ys(r.newFunction.spec.env));
  }, [r.newFunction.spec.env]);
  const c = (d) => {
    if (t) {
      const u = fi(d);
      s(ye([...r.newFunction.spec.env, u]));
    } else
      s(ye([...e, { name: d.key, value: d.value }]));
  }, l = (d) => {
    if (t) {
      const u = d.map((h) => fi(h));
      s(ye([...u]));
    } else
      s(
        ye(
          e.map((u) => (u.name === d.key && (u.name = d.newKey || d.key, u.value = d.value), u))
        )
      );
  }, o = (d) => {
    if (t) {
      const u = d.map((h) => fi(h));
      s(ye([...u]));
    } else {
      const u = e.filter((h, f) => f !== d);
      s(ye([...u]));
    }
  };
  return /* @__PURE__ */ i.jsx(
    Lt,
    {
      envVariables: e,
      handleAddNewEnv: c,
      handleDeleteEnv: o,
      handleEditEnv: l,
      isStagingMode: t
    }
  );
}, Bt = ({
  data: e,
  formState: a,
  frontendSpec: t,
  handleDescriptionOnBlur: s,
  setData: r
}) => /* @__PURE__ */ i.jsx("div", { className: "functions-panel__item new-item-side-panel__item general", children: /* @__PURE__ */ i.jsxs(z, { title: "General", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "general__required-info", children: [
    /* @__PURE__ */ i.jsx("div", { className: "name", children: /* @__PURE__ */ i.jsxs(L, { template: /* @__PURE__ */ i.jsx(B, { text: e.name }), children: [
      "Name: ",
      /* @__PURE__ */ i.jsx("span", { children: e.name })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "tag data-ellipsis", children: /* @__PURE__ */ i.jsxs(L, { template: /* @__PURE__ */ i.jsx(B, { text: e.tag || Xe }), children: [
      "Tag: ",
      /* @__PURE__ */ i.jsx("span", { children: e.tag || Xe })
    ] }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "runtime", children: [
      "Runtime: ",
      /* @__PURE__ */ i.jsx("span", { children: e.kind })
    ] })
  ] }),
  /* @__PURE__ */ i.jsx(
    gt,
    {
      floatingLabel: !0,
      label: "Description",
      maxLength: 500,
      onChange: (c) => r((l) => ({
        ...l,
        description: c
      })),
      onBlur: s,
      type: "text",
      value: e.description,
      wrapperClassName: "description"
    }
  ),
  /* @__PURE__ */ i.jsxs("div", { className: "general__labels-container", children: [
    /* @__PURE__ */ i.jsx("div", { className: "general__labels-text", children: "Labels" }),
    /* @__PURE__ */ i.jsx("div", { className: "general__labels-wrapper", children: /* @__PURE__ */ i.jsx(
      yn,
      {
        chipOptions: Nn("labels"),
        formState: a,
        initialValues: a.initialValues,
        isEditable: !0,
        label: "",
        name: "labels",
        shortChips: !0,
        visibleChipsMaxLength: "all",
        validationRules: {
          key: [vn(t?.internal_labels || [])],
          value: []
        }
      }
    ) })
  ] })
] }) });
Bt.propTypes = {
  data: n.object.isRequired,
  formState: n.object.isRequired,
  frontendSpec: n.object.isRequired,
  handleDescriptionOnBlur: n.func.isRequired,
  setData: n.func.isRequired
};
const Kt = ({ defaultData: e = {}, formState: a, frontendSpec: t }) => {
  const s = Y((d) => d.functionsStore), [r, c] = S({
    description: e.description ?? "",
    kind: e.type ?? s.newFunction.kind,
    name: e.name ?? s.newFunction.metadata.name,
    tag: e.tag ?? s.newFunction.metadata.tag
  }), l = ee(), o = () => {
    s.newFunction.spec.description !== r.description && l(jn(r.description));
  };
  return /* @__PURE__ */ i.jsx(
    Bt,
    {
      data: r,
      formState: a,
      frontendSpec: t,
      handleDescriptionOnBlur: o,
      setData: c
    }
  );
};
Kt.propTypes = {
  defaultData: n.object,
  formState: n.object.isRequired,
  frontendSpec: n.object.isRequired
};
const Z = "V3IO", oe = "Config Map", Se = "Secret", Ge = "PVC", Ns = {
  [Z]: "Container",
  [oe]: "Config map name",
  [Se]: "Secret name",
  [Ge]: "Claim name"
}, js = {
  [Z]: "The name of the data container that contains the data"
}, xs = [
  { label: "Type", id: "type" },
  { label: "Volume name", id: "name" },
  { label: "Path", id: "path" }
], et = {
  volumeType: [
    ...qi() ? [] : [{ label: "V3IO", id: Z }],
    { label: "Config Map", id: oe },
    { label: "Secret", id: Se },
    { label: "PVC", id: Ge }
  ]
}, Ut = (e) => ({
  label: Ns[e],
  tip: js[e]
}), Ve = (e, a) => a.some((t) => t.data.mountPath === e), qe = (e, a) => a.some((t) => e === t?.data.name && e !== ""), $t = ({ content: e, handleEdit: a, selectedVolume: t, setSelectedVolume: s, volume: r }) => {
  const [c, l] = S({
    isNameValid: !0,
    isTypeValid: !0,
    isTypeNameValid: !0,
    isPathValid: !0,
    isAccessKeyValid: !0
  }), { projectName: o } = Ie(), d = Ne(
    () => Ut(t.type.value),
    [t.type.value]
  ), u = (h) => {
    O.forEach(h.data, (f) => {
      if (!f)
        return !0;
    }), O.forEach(h.type, (f) => {
      if (!f)
        return !0;
    });
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("div", { className: "table__row edit-row", children: [
      /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: t.type.value }),
      t.isDefault ? /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: t.data.name }) : /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-input", children: /* @__PURE__ */ i.jsx(
        E,
        {
          floatingLabel: !0,
          invalid: t.newName !== t.data.name && qe(t.newName, e) || !c.isNameValid,
          invalidText: qe(t.newName, e) ? "Name already exists" : "This field is invalid",
          label: "Volume Name",
          onChange: (h) => s({
            ...t,
            newName: h
          }),
          required: !0,
          requiredText: "This field is required",
          setInvalid: (h) => l((f) => ({ ...f, isNameValid: h })),
          type: "text",
          value: t.newName ?? t.data.name
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-input", children: /* @__PURE__ */ i.jsx(
        E,
        {
          floatingLabel: !0,
          label: "Path",
          invalid: t.newPath !== t.data.mountPath && Ve(t.newPath, e) || !c.isPathValid,
          invalidText: Ve(t.newPath, e) ? "Multiple volumes cannot share the same path" : "This field is invalid",
          onChange: (h) => s({
            ...t,
            newPath: h
          }),
          required: !0,
          requiredText: "This field is required",
          setInvalid: (h) => l((f) => ({ ...f, isPathValid: h })),
          type: "text",
          value: t.newPath ?? t.data.mountPath
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell-actions" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "table__row edit-row flex-row no-border_top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-input", children: /* @__PURE__ */ i.jsx(
        E,
        {
          floatingLabel: !0,
          invalid: !c.isTypeNameValid,
          invalidText: "This field is invalid",
          label: d.label,
          onChange: (h) => s({
            ...t,
            type: { ...t.type, name: h }
          }),
          required: t.type.value !== Z,
          requiredText: "This field is invalid",
          setInvalid: (h) => l((f) => ({ ...f, isTypeNameValid: h })),
          validationRules: t?.type?.value?.toLowerCase() === pt ? Te("environmentVariables.secretName", [
            ni(o, r?.secret?.secretName)
          ]) : [],
          type: "text",
          value: t.type.name
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-actions", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "apply-edit-btn",
          onClick: a,
          disabled: t.newName !== t.data.name && qe(t.newName, e) || t.newPath !== t.data.mountPath && Ve(t.newPath, e) || u(t) || !c.isNameValid || !c.isPathValid || !c.isTypeValid || !c.isTypeNameValid || !c.isAccessKeyValid,
          children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Apply" }), children: /* @__PURE__ */ i.jsx(ai, {}) })
        }
      ) })
    ] }),
    t.type.value === Z && /* @__PURE__ */ i.jsxs("div", { className: "table__row edit-row no-border_top", children: [
      /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-input", children: /* @__PURE__ */ i.jsx(
        E,
        {
          floatingLabel: !0,
          invalid: !c.isAccessKeyValid,
          invalidText: "This field is invalid",
          label: "Access Key",
          onChange: (h) => s({
            ...t,
            type: { ...t.type, accessKey: h }
          }),
          required: !0,
          requiredText: "This field is required",
          setInvalid: (h) => l((f) => ({ ...f, isAccessKeyValid: h })),
          type: "text",
          value: t.type.accessKey
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-input", children: /* @__PURE__ */ i.jsx(
        E,
        {
          floatingLabel: !0,
          label: "Resource Path",
          onChange: (h) => s({
            ...t,
            type: { ...t.type, subPath: h }
          }),
          type: "text",
          value: t.type.subPath
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell-actions" })
    ] })
  ] });
};
$t.propTypes = {
  content: n.array.isRequired,
  handleEdit: n.func.isRequired,
  selectedVolume: n.object.isRequired,
  setSelectedVolume: n.func.isRequired,
  volume: n.object.isRequired
};
const Gt = ({
  addVolume: e,
  className: a,
  editVolume: t,
  generateActionsMenu: s,
  isPanelEditMode: r,
  newVolume: c,
  volumeMounts: l,
  resetVolumesData: o,
  selectedVolume: d,
  setNewVolume: u,
  setSelectedVolume: h,
  setShowAddNewVolumeRow: f,
  setValidation: p,
  showAddNewVolumeRow: m,
  validation: y,
  volumes: C
}) => {
  const R = Ne(() => Ut(c.type), [c.type]), N = D(
    "new-item-side-panel__table",
    "volumes-table",
    m && "no-border",
    a
  ), g = D(
    "input-row-wrapper",
    c.type === Z && "no-border"
  ), { projectName: V } = Ie(), T = D(r && "disabled", "add-input");
  return /* @__PURE__ */ i.jsxs("div", { className: N, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "table__header table__row no-hover", children: [
      xs.map((b, v) => /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: b.label }, v)),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell-actions" })
    ] }),
    l?.map((b, v) => d && d.data.name === b.data.name && !r ? /* @__PURE__ */ i.jsx(
      $t,
      {
        content: l,
        handleEdit: t,
        selectedVolume: d,
        setSelectedVolume: h,
        volume: C?.[v]
      },
      v
    ) : /* @__PURE__ */ i.jsxs("div", { className: "table__row", children: [
      O.map(b.data, (x, q) => {
        const w = D(
          "table__cell",
          (q === "name" && O.has(b.data, "value") || q === "valueType") && b.isDefault && "table__cell_disabled"
        ), _ = D(q === "name" && "parameter-name");
        return /* @__PURE__ */ i.jsxs("div", { className: w, children: [
          /* @__PURE__ */ i.jsx(
            L,
            {
              className: _,
              template: /* @__PURE__ */ i.jsx(B, { text: Ui(x, ", ") }),
              children: Ui(x, ", ")
            }
          ),
          q === "name" && b.doc && /* @__PURE__ */ i.jsx(dt, { text: b.doc })
        ] }, q);
      }),
      !r && /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-actions", children: /* @__PURE__ */ i.jsx(ii, { menu: s(b), dataItem: b }) })
    ] }, v)),
    m && !r ? /* @__PURE__ */ i.jsxs("div", { className: "table__body", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "table__body-column", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "input-row-wrapper no-border", children: [
          /* @__PURE__ */ i.jsx(
            H,
            {
              onClick: (b) => {
                u((v) => ({
                  ...v,
                  type: O.find(et.volumeType, ["id", b]).id,
                  typeName: ""
                })), p((v) => ({
                  ...v,
                  isTypeValid: !0,
                  isAccessKeyValid: !0
                }));
              },
              options: et.volumeType,
              selectedId: c.type
            }
          ),
          /* @__PURE__ */ i.jsx(
            E,
            {
              className: "input-row__item",
              floatingLabel: !0,
              invalid: qe(c.name, l) || !y.isNameValid,
              invalidText: qe(c.name, l) ? "Name already exists" : "This field is invalid",
              label: "Volume Name",
              onChange: (b) => u((v) => ({ ...v, name: b })),
              required: !0,
              requiredText: "This field is required",
              setInvalid: (b) => p((v) => ({ ...v, isNameValid: b })),
              type: "text"
            }
          ),
          /* @__PURE__ */ i.jsx(
            E,
            {
              className: "input-row__item input-row__item_edit",
              floatingLabel: !0,
              invalid: Ve(c.path, l) || !y.isPathValid,
              invalidText: Ve(c.path, l) ? "Multiple volumes cannot share the same path" : "This field is invalid",
              label: "Path",
              onChange: (b) => u((v) => ({ ...v, path: b })),
              required: !0,
              requiredText: "This field is required",
              setInvalid: (b) => p((v) => ({ ...v, isPathValid: b })),
              tip: "A mount path for referencing the data from the function",
              type: "text"
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: g, children: [
          /* @__PURE__ */ i.jsx(
            E,
            {
              className: "input-row__item",
              disabled: c.type.length === 0,
              floatingLabel: !0,
              invalid: !y.isTypeNameValid,
              label: R.label,
              onChange: (b) => u((v) => ({ ...v, typeName: b })),
              required: c.type !== Z,
              requiredText: "This field is required",
              setInvalid: (b) => p((v) => ({ ...v, isTypeNameValid: b })),
              tip: R.tip,
              type: "text",
              validationRules: c.type?.toLowerCase() === pt ? Te("environmentVariables.secretName", [
                ni(V)
              ]) : []
            },
            c.type
          ),
          c.type === Z && /* @__PURE__ */ i.jsx(
            E,
            {
              className: "input-row__item",
              floatingLabel: !0,
              invalid: !y.isAccessKeyValid,
              label: "Access Key",
              onChange: (b) => u((v) => ({ ...v, accessKey: b })),
              required: !0,
              requiredText: "This field is required",
              setInvalid: (b) => p((v) => ({
                ...v,
                isAccessKeyValid: b
              })),
              tip: "A platform data-access key",
              type: "text"
            }
          )
        ] }),
        c.type === Z && /* @__PURE__ */ i.jsx("div", { className: "input-row-wrapper", children: /* @__PURE__ */ i.jsx(
          E,
          {
            className: "input-row__item",
            floatingLabel: !0,
            label: "Resource path",
            onChange: (b) => u((v) => ({ ...v, subPath: b })),
            tip: "A relative directory path within the data container",
            type: "text"
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "btn-add",
          disabled: qe(c.name, l) || Ve(c.path, l),
          onClick: e,
          children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Add item" }), children: /* @__PURE__ */ i.jsx(le, {}) })
        }
      ),
      /* @__PURE__ */ i.jsx("button", { onClick: o, children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Discard changes" }), children: /* @__PURE__ */ i.jsx(re, {}) }) })
    ] }) : /* @__PURE__ */ i.jsx("div", { className: "table__row no-hover", children: /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "table__cell",
        onClick: () => !r && f(!0),
        children: /* @__PURE__ */ i.jsxs("button", { className: T, children: [
          /* @__PURE__ */ i.jsx(le, {}),
          "Add volume"
        ] })
      }
    ) })
  ] });
};
Gt.propTypes = {
  addVolume: n.func.isRequired,
  className: n.string.isRequired,
  editVolume: n.func.isRequired,
  generateActionsMenu: n.func.isRequired,
  isPanelEditMode: n.bool.isRequired,
  newVolume: n.object.isRequired,
  volumeMounts: n.arrayOf(n.object).isRequired,
  resetVolumesData: n.func.isRequired,
  selectedVolume: n.object,
  setNewVolume: n.func.isRequired,
  setSelectedVolume: n.func.isRequired,
  setShowAddNewVolumeRow: n.func.isRequired,
  setValidation: n.func.isRequired,
  showAddNewVolumeRow: n.bool.isRequired,
  validation: n.object.isRequired,
  volumes: n.arrayOf(n.object).isRequired
};
const Zt = ({
  className: e = "",
  handleAddNewVolume: a,
  handleEdit: t,
  handleDelete: s,
  isPanelEditMode: r = !1,
  volumeMounts: c,
  volumes: l
}) => {
  const [o, d] = S({
    name: "",
    type: qi() ? oe : Z,
    typeName: "",
    path: "",
    accessKey: "",
    subPath: ""
  }), [u, h] = S({
    isNameValid: !0,
    isTypeValid: !0,
    isTypeNameValid: !0,
    isPathValid: !0,
    isAccessKeyValid: !0
  }), [f, p] = S(!1), [m, y] = S(null);
  A(() => {
    h({
      isNameValid: !0,
      isTypeValid: !0,
      isTypeNameValid: !0,
      isPathValid: !0,
      isAccessKeyValid: !0
    }), d((b) => ({
      ...b,
      typeName: "",
      accessKey: "",
      subPath: ""
    }));
  }, [o.type]);
  const C = W(
    (b) => {
      const v = l.find((x) => x.name === b.data.name);
      return v.configMap ? y({
        ...b,
        type: {
          value: oe,
          name: v.configMap.name
        }
      }) : v.persistentVolumeClaim ? y({
        ...b,
        type: {
          value: Ge,
          name: v.persistentVolumeClaim.claimName
        }
      }) : v.secret ? y({
        ...b,
        type: {
          value: Se,
          name: v.secret.secretName
        }
      }) : y({
        ...b,
        type: {
          value: Z,
          name: v.flexVolume.options.container,
          accessKey: v.flexVolume.options.accessKey,
          subPath: v.flexVolume.options.subPath
        }
      });
    },
    [y, l]
  ), R = W(
    (b) => {
      s(
        l.filter((v) => v.name !== b.data.name),
        c.filter((v) => v.data.name !== b.data.name)
      );
    },
    [s, c, l]
  ), N = W(
    (b) => [
      [
        {
          label: "Edit",
          icon: /* @__PURE__ */ i.jsx(Ee, {}),
          onClick: (v) => C(v)
        },
        {
          label: "Remove",
          icon: /* @__PURE__ */ i.jsx(re, {}),
          hidden: b.isDefault && !b.canBeModified,
          onClick: (v) => {
            R(v);
          }
        }
      ]
    ],
    [R, C]
  ), g = () => {
    let b = o.name.length > 0 && u.isNameValid && o.path.length > 0 && u.isPathValid && o.type.length > 0 && u.isTypeValid && o.typeName.length > 0 && u.isTypeNameValid;
    o.type === Z && (b = o.name.length > 0 && u.isNameValid && o.path.length > 0 && u.isPathValid && o.type.length > 0 && u.isTypeValid && o.accessKey.length > 0 && u.isAccessKeyValid), b ? (a(o), V()) : h((v) => ({
      isNameValid: o.name.length > 0 && v.isNameValid,
      isTypeValid: o.type.length > 0 && v.isTypeValid,
      isTypeNameValid: o.type === Z ? !0 : o.typeName.length > 0 && v.isTypeNameValid,
      isPathValid: o.path.length > 0 && v.isPathValid,
      isAccessKeyValid: o.type === Z ? o.accessKey.length > 0 && v.isAccessKeyValid : !0
    }));
  }, V = () => {
    d({
      name: "",
      type: qi() ? oe : Z,
      typeName: "",
      path: "",
      accessKey: "",
      subPath: ""
    }), p(!1), h({
      isNameValid: !0,
      isTypeValid: !0,
      isTypeNameValid: !0,
      isPathValid: !0,
      isAccessKeyValid: !0
    });
  }, T = () => {
    const b = O.cloneDeep(l), v = O.cloneDeep(c), x = b.map((w) => {
      if (w.name === m.data.name)
        switch (w.name = m.newName || m.data.name, m.type.value) {
          case oe:
            w.configMap.name = m.type.name;
            break;
          case Ge:
            w.persistentVolumeClaim.claimName = m.type.name;
            break;
          case Se:
            w.secret.secretName = m.type.name;
            break;
          default:
            w.flexVolume.options = {
              container: m.type.name,
              accessKey: m.type.accessKey,
              subPath: m.type.subPath
            };
        }
      return w;
    }), q = v.map((w) => (w.data.name === m.data.name && (w.data.name = m.newName || m.data.name, w.data.mountPath = m.newPath || m.data.mountPath), w));
    t(x, q), y(null);
  };
  return /* @__PURE__ */ i.jsx(
    Gt,
    {
      addVolume: g,
      className: e,
      editVolume: T,
      generateActionsMenu: N,
      isPanelEditMode: r,
      newVolume: o,
      volumeMounts: c,
      resetVolumesData: V,
      selectedVolume: m,
      setNewVolume: d,
      setSelectedVolume: y,
      setShowAddNewVolumeRow: p,
      setValidation: h,
      showAddNewVolumeRow: f,
      validation: u,
      volumes: l
    }
  );
};
Zt.propTypes = {
  className: n.string,
  handleAddNewVolume: n.func.isRequired,
  handleEdit: n.func.isRequired,
  handleDelete: n.func.isRequired,
  isPanelEditMode: n.bool,
  volumeMounts: n.arrayOf(n.object),
  volumes: n.arrayOf(n.object)
};
const he = "requests", be = "limits", gi = "nvidia.com/gpu", xe = {
  unitCpu: [
    {
      id: "cpu",
      label: "cpu",
      unit: "",
      step: 1e-3,
      minValue: 1e-3,
      onChange: function(e) {
        return (parseFloat(e) / 1e3).toFixed(3) + this.unit;
      },
      convertValue: (e) => Math.round(parseFloat(e) * 1e3)
    },
    {
      id: "millicpu",
      label: "millicpu",
      unit: "m",
      step: 100,
      minValue: 1,
      onChange: function(e) {
        return Math.round(parseFloat(e) * 1e3) + this.unit;
      },
      convertValue: (e) => parseFloat(e)
    }
  ],
  unitMemory: [
    { label: "Bytes", id: "Bytes", root: 0, power: 0 },
    { label: "KB", id: "KB", root: 1e3, power: 1 },
    { label: "KiB", id: "KiB", root: 1024, power: 1 },
    { label: "MB", id: "MB", root: 1e3, power: 2 },
    { label: "MiB", id: "MiB", root: 1024, power: 2 },
    { label: "GB", id: "GB", root: 1e3, power: 3 },
    { label: "GiB", id: "GiB", root: 1024, power: 3 },
    { label: "TB", id: "TB", root: 1e3, power: 4 },
    { label: "TiB", id: "TiB", root: 1024, power: 4 }
  ]
}, ne = (e) => xe.unitCpu.find((a) => a.id === e), it = (e) => xe.unitMemory.find((a) => a.id === e), tt = (e = "") => e.toString().match(/m/) ? e.toString().slice(0, e.toString().length - 1) : e ? parseFloat(e).toFixed(3) : "", nt = (e = "") => e.toString().match(/[a-zA-Z]/) ? e.slice(0, e.toString().match(/[a-zA-Z]/).index) : e, ws = (e) => e.configMap ? oe : e.persistentVolumeClaim ? Ge : e.secret ? Se : Z, Vs = [
  {
    id: "allow",
    label: "Allow"
  },
  {
    id: "constrain",
    label: "Constrain"
  },
  {
    id: "prevent",
    label: "Prevent"
  }
], qs = (e, a, t, s, r) => {
  const c = t === be ? r : e.limits.memory, l = t === he ? r : e.requests.memory;
  r > 0 ? Ht(
    e.limits.memoryUnit,
    e.requests.memoryUnit,
    c,
    l,
    a
  ) : a((o) => ({
    ...o,
    [s]: !1
  }));
}, Rs = (e, a, t, s) => {
  const r = t === be ? s : e.limits.memoryUnit, c = t === he ? s : e.requests.memoryUnit;
  Ht(
    r,
    c,
    e.limits.memory,
    e.requests.memory,
    a
  );
}, Ht = (e, a, t, s, r) => {
  const c = (f, p) => parseInt(f) * Math.pow(p.root, p.power), l = Number.parseInt(t), o = Number.parseInt(s), d = it(e), u = it(a), h = c(l, d) >= c(o, u);
  r((f) => ({
    ...f,
    isMemoryLimitValid: h,
    isMemoryRequestValid: h
  }));
}, Cs = (e, a, t, s, r) => {
  const c = t === be ? r : e.limits.cpu, l = t === he ? r : e.requests.cpu, o = ne(e.limits.cpuUnit), d = ne(e.requests.cpuUnit);
  if (r > 0) {
    const u = d.convertValue(l) <= o.convertValue(c);
    a((h) => ({
      ...h,
      isCpuLimitValid: u,
      isCpuRequestValid: u
    }));
  } else
    a((u) => ({ ...u, [s]: !1 }));
}, at = (e, a) => {
  const t = O.isEmpty(e) ? a : e.memory;
  return t?.match(/[a-zA-Z]/) ? `${t.replace(/\d+/g, "")}B` : t?.length > 0 ? "Bytes" : "MiB";
}, st = (e, a) => (O.isEmpty(e) ? a : e.cpu)?.match?.(/m/) ? "millicpu" : "cpu", Ts = (e, a, t) => e.length === 0 ? "" : `${e}${t[a].memoryUnit.length === 0 || t[a].memoryUnit === "Bytes" ? "" : t[a].memoryUnit.match(/i/) ? t[a].memoryUnit.slice(0, 2) : t[a].memoryUnit.slice(0, 1)}`, lt = (e, a, t) => O.isEmpty(e) ? "" : `${e}${ne(t[a].cpuUnit).unit}`, Ss = (e) => {
  const a = ["cpu", "cpuUnit", "memory", "memoryUnit"];
  return !e || e[gi] ? gi : Object.keys(e).find((t) => t.includes("/gpu")) || Object.keys(e).find((t) => !a.includes(t)) || gi;
}, zt = ({
  data: e,
  gpuType: a,
  handleSelectCpuUnit: t,
  handleSelectMemoryUnit: s,
  isPanelEditMode: r = !1,
  setCpuValue: c,
  setGpuValue: l,
  setMemoryValue: o,
  validation: d
}) => /* @__PURE__ */ i.jsxs("div", { className: "resources__inputs", children: [
  /* @__PURE__ */ i.jsxs(z, { title: "Memory", className: "memory", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "resources__input", children: [
      /* @__PURE__ */ i.jsx(
        pe,
        {
          className: "resources__range",
          density: "dense",
          disabled: r,
          invalid: !d.isMemoryRequestValid,
          invalidText: "Request must be less than or equal to Limit and not be less than 1",
          label: "Request",
          labelType: "labelAtTop",
          min: 1,
          onChange: (u) => o(u, he, "isMemoryRequestValid"),
          required: !0,
          value: nt(e.requests.memory)
        }
      ),
      /* @__PURE__ */ i.jsx(
        H,
        {
          density: "dense",
          disabled: r,
          label: "Unit",
          labelAtTop: !0,
          options: xe.unitMemory,
          onClick: (u) => s(u, he),
          selectedId: e.requests.memoryUnit
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "resources__input", children: [
      /* @__PURE__ */ i.jsx(
        pe,
        {
          className: "resources__range",
          density: "dense",
          disabled: r,
          invalid: !d.isMemoryLimitValid,
          invalidText: "Limit must be bigger than or equal to Request and not be less than 1",
          label: "Limit",
          labelType: "labelAtTop",
          min: 1,
          onChange: (u) => o(u, be, "isMemoryLimitValid"),
          required: !0,
          value: nt(e.limits.memory)
        }
      ),
      /* @__PURE__ */ i.jsx(
        H,
        {
          density: "dense",
          disabled: r,
          label: "Unit",
          labelAtTop: !0,
          options: xe.unitMemory,
          onClick: (u) => s(u, be),
          selectedId: e.limits.memoryUnit
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ i.jsxs(z, { title: "Cpu", className: "cpu", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "resources__input", children: [
      /* @__PURE__ */ i.jsx(
        pe,
        {
          className: "resources__range",
          density: "dense",
          disabled: r,
          invalid: !d.isCpuRequestValid,
          invalidText: `Request must be less than or equal to Limit and not be less than ${ne(e.requests.cpuUnit)?.minValue}`,
          label: "Request",
          labelType: "labelAtTop",
          min: ne(e.requests.cpuUnit)?.minValue,
          onChange: (u) => c(u, he, "isCpuRequestValid"),
          required: !0,
          step: ne(e.requests.cpuUnit)?.step,
          value: tt(e.requests.cpu)
        }
      ),
      /* @__PURE__ */ i.jsx(
        H,
        {
          density: "dense",
          disabled: r,
          label: "Unit",
          labelAtTop: !0,
          options: xe.unitCpu,
          onClick: (u) => t(u, he),
          selectedId: e.requests.cpuUnit
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "resources__input", children: [
      /* @__PURE__ */ i.jsx(
        pe,
        {
          className: "resources__range",
          density: "dense",
          disabled: r,
          invalid: !d.isCpuLimitValid,
          invalidText: `Limit must be bigger than or equal to Request and not be less than ${ne(e.limits.cpuUnit)?.minValue}`,
          label: "Limit",
          labelType: "labelAtTop",
          min: ne(e.limits.cpuUnit)?.minValue,
          onChange: (u) => c(u, be, "isCpuLimitValid"),
          required: !0,
          step: ne(e.limits.cpuUnit)?.step,
          value: tt(e.limits.cpu)
        }
      ),
      /* @__PURE__ */ i.jsx(
        H,
        {
          density: "dense",
          disabled: r,
          label: "Unit",
          labelAtTop: !0,
          options: xe.unitCpu,
          onClick: (u) => t(u, be),
          selectedId: e.limits.cpuUnit
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ i.jsx(z, { title: "Gpu", className: "section-gpu", children: /* @__PURE__ */ i.jsx(
    pe,
    {
      density: "dense",
      disabled: r,
      invalid: !d.isGpuLimitValid,
      invalidText: "The minimum value must be 1",
      label: "Limit",
      labelType: "labelAtTop",
      min: 1,
      onChange: l,
      value: e.limits[a] || ""
    }
  ) })
] });
zt.propTypes = {
  data: n.object.isRequired,
  gpuType: n.string.isRequired,
  handleSelectCpuUnit: n.func.isRequired,
  handleSelectMemoryUnit: n.func.isRequired,
  isPanelEditMode: n.bool,
  setCpuValue: n.func.isRequired,
  setGpuValue: n.func.isRequired,
  setMemoryValue: n.func.isRequired,
  validation: n.object
};
const Fs = Xn(({ functionsStore: e }) => ({
  functionsStore: e
}))(zt), Es = (e, a, t) => O.chain(e).flatten().unionBy("name").map((s) => ({
  isDefault: !0,
  data: {
    type: ws(a.find((r) => r.name === s.name)),
    name: s.name,
    mountPath: s.mountPath
  },
  canBeModified: t === ei
})).value(), Ti = "auto", Wt = "manual", Yt = "none", Is = [
  { label: "Auto", id: Ti },
  { label: "Manual", id: Wt },
  { label: "None", id: Yt }
], Jt = ({
  data: e,
  gpuType: a,
  handleAddNewVolume: t,
  handleDeleteVolume: s,
  handleEditVolume: r,
  handleSelectCpuUnit: c,
  handleSelectMemoryUnit: l,
  handleSelectPreemptionMode: o,
  handleSelectVolumeMount: d,
  mode: u,
  podsPriorityClassName: h,
  selectPodsPriorityClassName: f,
  setCpuValue: p,
  setGpuValue: m,
  setMemoryValue: y,
  validFunctionPriorityClassNames: C,
  validation: R
}) => /* @__PURE__ */ i.jsxs("div", { className: "functions-panel__item resources new-item-side-panel__item", children: [
  /* @__PURE__ */ i.jsx(z, { title: "Resources" }),
  /* @__PURE__ */ i.jsxs("div", { className: "pods", children: [
    C.length > 0 && /* @__PURE__ */ i.jsx(z, { title: "Pods priority", children: /* @__PURE__ */ i.jsx(
      H,
      {
        className: "pods-priority",
        onClick: f,
        options: C,
        selectedId: h,
        withSelectedIcon: !0
      }
    ) }),
    e.preemptionMode && /* @__PURE__ */ i.jsx(z, { title: "Run On Spot Nodes", children: /* @__PURE__ */ i.jsx(
      H,
      {
        className: "pods-toleration",
        options: Vs,
        onClick: o,
        selectedId: e.preemptionMode,
        withSelectedIcon: !0
      }
    ) })
  ] }),
  /* @__PURE__ */ i.jsxs(
    z,
    {
      className: "volumes-section",
      title: "Volumes",
      tip: "Volumes that define data paths and the required information for accessing the data from the function",
      children: [
        (u === fe || !e.disable_auto_mount) && /* @__PURE__ */ i.jsx(
          H,
          {
            className: "volume-mount",
            floatingLabel: !0,
            disabled: u !== fe,
            label: "Volume mount",
            options: Is,
            onClick: d,
            selectedId: e.volumeMount,
            withSelectedIcon: !0
          }
        ),
        (e.volumeMount === Wt || u === ei) && /* @__PURE__ */ i.jsx(
          Zt,
          {
            handleAddNewVolume: t,
            handleDelete: s,
            handleEdit: r,
            className: "volumes",
            volumeMounts: e.volumeMounts,
            volumes: e.volumes
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ i.jsx(
    Fs,
    {
      data: e,
      gpuType: a,
      handleSelectCpuUnit: c,
      handleSelectMemoryUnit: l,
      setCpuValue: p,
      setGpuValue: m,
      setMemoryValue: y,
      validation: R
    }
  )
] });
Jt.propTypes = {
  data: n.object.isRequired,
  gpuType: n.string.isRequired,
  handleAddNewVolume: n.func.isRequired,
  handleDeleteVolume: n.func.isRequired,
  handleEditVolume: n.func.isRequired,
  handleSelectCpuUnit: n.func.isRequired,
  handleSelectMemoryUnit: n.func.isRequired,
  handleSelectPreemptionMode: n.func.isRequired,
  handleSelectVolumeMount: n.func.isRequired,
  mode: n.string.isRequired,
  podsPriorityClassName: n.string.isRequired,
  selectPodsPriorityClassName: n.func.isRequired,
  setCpuValue: n.func.isRequired,
  setGpuValue: n.func.isRequired,
  setMemoryValue: n.func.isRequired,
  validFunctionPriorityClassNames: n.arrayOf(n.object).isRequired,
  validation: n.object
};
const ks = (e) => {
  switch (e.type) {
    case Z:
      return {
        name: e.name,
        flexVolume: {
          driver: "v3io/fuse",
          options: {
            accessKey: e.accessKey,
            container: e.typeName,
            subPath: e.subPath
          }
        }
      };
    case oe:
      return {
        name: e.name,
        configMap: {
          name: e.typeName
        }
      };
    case Se:
      return {
        name: e.name,
        secret: {
          secretName: e.typeName
        }
      };
    default:
      return {
        name: e.name,
        persistentVolumeClaim: {
          claimName: e.typeName
        }
      };
  }
}, Ki = ({ defaultData: e, mode: a, setValidation: t, validation: s }) => {
  const r = ee(), c = Ne(
    () => Ss(e.resources?.limits),
    [e.resources?.limits]
  ), l = Y((_) => _.functionsStore), o = Y((_) => _.appStore.frontendSpec), [d, u] = S(
    e.priority_class_name || l.newFunction.spec.priority_class_name || o.default_function_priority_class_name || ""
  ), h = Ne(() => o?.default_function_pod_resources ?? {}, [o.default_function_pod_resources]), f = Ne(() => xn(
    o.feature_flags?.preemption_nodes,
    e.preemption_mode,
    o.default_function_preemption_mode
  ), [
    e.preemption_mode,
    o.default_function_preemption_mode,
    o.feature_flags
  ]), [p, m] = S({
    disable_auto_mount: e.disable_auto_mount ?? !0,
    volumeMounts: Es(
      e.volume_mounts ?? [],
      e.volumes ?? [],
      a
    ),
    volumeMount: Ti,
    volumes: e.volumes ?? [],
    limits: {
      cpu: e.resources?.limits?.cpu ?? h?.limits?.cpu ?? "",
      cpuUnit: st(
        e.resources?.limits ?? {},
        h?.limits?.cpu
      ),
      memory: e.resources?.limits?.memory ?? h?.limits?.memory ?? "",
      [c]: e.resources?.limits?.[c] ?? h?.limits?.gpu ?? "",
      memoryUnit: at(
        e.resources?.limits ?? {},
        h?.limits?.memory
      )
    },
    preemptionMode: f,
    requests: {
      cpu: e.resources?.requests?.cpu ?? h?.requests?.cpu ?? "",
      cpuUnit: st(
        e.resources?.requests ?? {},
        h?.requests?.cpu
      ),
      memory: e.resources?.requests?.memory ?? h?.requests?.memory ?? "",
      memoryUnit: at(
        e.resources?.requests ?? {},
        h?.requests?.memory
      )
    }
  }), y = Ne(() => (o.valid_function_priority_class_names ?? []).map((_) => ({
    id: _,
    label: wn(_)
  })), [o.valid_function_priority_class_names]);
  A(() => {
    a === fe && (r($i(f)), r(
      Gi(o.default_function_priority_class_name ?? "")
    ), r(He(!1)));
  }, [r, o.default_function_priority_class_name, a, f]), A(() => {
    Ai(l.newFunction.spec.resources) && r(
      ve({
        limits: {
          cpu: e.resources?.limits?.cpu ?? h?.limits?.cpu ?? "",
          memory: e.resources?.limits?.memory ?? h?.limits?.memory ?? "",
          [c]: e.resources?.limits?.[c] ?? h?.limits?.gpu ?? ""
        },
        requests: {
          cpu: e.resources?.requests?.cpu ?? h?.requests?.cpu ?? "",
          memory: e.resources?.requests?.memory ?? h?.requests?.memory ?? ""
        }
      })
    );
  }, [
    e.resources,
    h,
    r,
    l.newFunction.spec.resources,
    c
  ]);
  const C = (_) => {
    const j = ks(_), F = {
      isDefault: !1,
      data: {
        type: _.type,
        name: _.name,
        mountPath: _.path
      },
      canBeModified: !0
    };
    m((I) => ({
      ...I,
      volumeMounts: [...I.volumeMounts, F],
      volumes: [...I.volumes, j]
    })), r(
      Pe([
        ...l.newFunction.spec.volume_mounts,
        {
          name: F.data.name,
          mountPath: F.data.mountPath
        }
      ])
    ), r(ke([...l.newFunction.spec.volumes, j]));
  }, R = (_, j) => {
    m((F) => ({
      ...F,
      volumeMounts: j,
      volumes: _
    })), r(ke([..._])), r(
      Pe(
        j.map((F) => ({
          name: F.data.name,
          mountPath: F.data.mountPath
        }))
      )
    );
  }, N = (_, j) => {
    m((F) => ({
      ...F,
      volumeMounts: j,
      volumes: _
    })), r(
      Pe(
        j.map((F) => ({
          name: F.data.name,
          mountPath: F.data.mountPath
        }))
      )
    ), r(ke(_));
  }, g = (_) => {
    m((j) => ({
      ...j,
      preemptionMode: _
    })), r($i(_));
  }, V = (_) => {
    switch (_) {
      case Ti:
        m((j) => ({
          ...j,
          volumes: [],
          volumeMounts: [],
          volumeMount: _
        })), r(ke([])), r(Pe([])), r(He(!1));
        break;
      case Yt:
        m((j) => ({
          ...j,
          volumes: [],
          volumeMounts: [],
          volumeMount: _
        })), r(ke([])), r(Pe([])), r(He(!0));
        break;
      default:
        m((j) => ({
          ...j,
          volumeMount: _
        })), r(He(!0));
    }
  }, T = (_) => {
    r(Gi(_)), u(_);
  }, b = (_, j) => {
    const F = _.match(/i/) ? _.slice(0, _.match(/i/).index + 1) : _.slice(0, 1);
    m((I) => ({
      ...I,
      [j]: {
        ...I[j],
        memory: I[j].memory.length > 0 ? `${Number.parseInt(I[j].memory)}${_ !== "Bytes" ? F : ""}` : I[j].memory,
        memoryUnit: _
      }
    })), p[j].memory.length > 0 && r(
      ve({
        [j]: p[j].memory.length > 0 ? {
          ...l.newFunction.spec.resources[j],
          memory: `${Number.parseInt(p[j].memory)}${_ !== "Bytes" ? F : ""}`
        } : l.newFunction.spec.resources[j]
      })
    ), Rs(p, t, j, _);
  }, v = (_, j, F) => {
    const I = _.toString(), K = Ts(I, j, p);
    m((k) => ({
      ...k,
      [j]: {
        ...k[j],
        memory: K
      }
    })), r(
      ve({
        ...l.newFunction.spec.resources,
        [j]: {
          ...l.newFunction.spec.resources[j],
          memory: K
        }
      })
    ), qs(p, t, j, F, I);
  }, x = (_, j) => {
    const F = ne(_);
    m((I) => ({
      ...I,
      [j]: I[j].cpu.length > 0 ? {
        ...I[j],
        cpu: F.onChange(I[j].cpu),
        cpuUnit: _
      } : {
        ...I[j],
        cpuUnit: _
      }
    })), p[j].cpu.length > 0 && r(
      ve({
        [j]: p[j].cpu.length > 0 ? {
          ...l.newFunction.spec.resources[j],
          cpu: F.onChange(p[j].cpu)
        } : l.newFunction.spec.resources[j]
      })
    );
  }, q = (_, j, F) => {
    const I = _.toString();
    m((K) => ({
      ...K,
      [j]: {
        ...K[j],
        cpu: lt(I, j, K)
      }
    })), r(
      ve({
        ...l.newFunction.spec.resources,
        [j]: {
          ...l.newFunction.spec.resources[j],
          cpu: lt(I, j, p)
        }
      })
    ), Cs(p, t, j, F, I);
  }, w = (_) => {
    let j = !0;
    O.isNumber(_) && Number(_) <= 0 && (j = !1), m((F) => ({
      ...F,
      limits: {
        ...F.limits,
        [c]: String(_)
      }
    })), r(
      ve({
        ...l.newFunction.spec.resources,
        limits: {
          ...l.newFunction.spec.resources.limits,
          [c]: String(_)
        }
      })
    ), t((F) => ({ ...F, isGpuLimitValid: j }));
  };
  return /* @__PURE__ */ i.jsx(
    Jt,
    {
      data: p,
      gpuType: c,
      handleAddNewVolume: C,
      handleDeleteVolume: N,
      handleEditVolume: R,
      handleSelectCpuUnit: x,
      handleSelectMemoryUnit: b,
      handleSelectPreemptionMode: g,
      handleSelectVolumeMount: V,
      mode: a,
      podsPriorityClassName: d,
      selectPodsPriorityClassName: T,
      setCpuValue: q,
      setData: m,
      setGpuValue: w,
      setMemoryValue: v,
      setValidation: t,
      validFunctionPriorityClassNames: y,
      validation: s
    }
  );
};
Ki.defaultProp = {
  defaultData: {}
};
Ki.propTypes = {
  defaultData: n.object,
  mode: Li.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object
};
const Xt = ({
  handleAddNewSecretSource: e,
  handleDeleteSecretSource: a,
  handleEditSecretSource: t,
  secretSources: s
}) => {
  const r = [
    {
      label: "File",
      id: "file"
    },
    { label: "Env", id: "env" }
  ];
  return /* @__PURE__ */ i.jsx(z, { className: "secrets", title: "Secrets", children: /* @__PURE__ */ i.jsx(
    Bi,
    {
      addNewItem: e,
      addNewItemLabel: "Add secret",
      className: "secrets__table",
      content: s,
      defaultKeyValue: "file",
      deleteItem: a,
      editItem: t,
      keyHeader: "Kind",
      keyLabel: "Kind",
      keyOptions: r,
      keyType: "select",
      isValueRequired: !0,
      valueHeader: "Value",
      valueLabel: "Value",
      withEditMode: !0
    }
  ) });
};
Xt.propTypes = {
  handleAddNewSecretSource: n.func.isRequired,
  handleDeleteSecretSource: n.func.isRequired,
  handleEditSecretSource: n.func.isRequired,
  secretSources: n.arrayOf(
    n.shape({
      key: n.string.isRequired,
      value: n.string.isRequired
    })
  ).isRequired
};
const Ps = () => {
  const e = ee(), a = Y((c) => c.functionsStore), t = W(
    (c) => {
      e(
        oi([
          ...a.newFunction.spec.secret_sources,
          { kind: c.key, source: c.value }
        ])
      );
    },
    [e, a.newFunction.spec.secret_sources]
  ), s = W(
    (c) => {
      e(
        oi(
          a.newFunction.spec.secret_sources.map((l, o) => o === c.index ? {
            ...l,
            kind: c.newKey || c.key,
            source: c.value
          } : l)
        )
      );
    },
    [e, a.newFunction.spec.secret_sources]
  ), r = W(
    (c) => {
      e(
        oi(
          a.newFunction.spec.secret_sources.filter(
            (l, o) => o !== c
          )
        )
      );
    },
    [e, a.newFunction.spec.secret_sources]
  );
  return /* @__PURE__ */ i.jsx(
    Xt,
    {
      handleAddNewSecretSource: t,
      handleDeleteSecretSource: r,
      handleEditSecretSource: s,
      secretSources: (a.newFunction.spec.secret_sources ?? []).map((c) => ({
        key: c.kind,
        value: c.source
      }))
    }
  );
}, Ms = [
  { label: "Name", id: "name" },
  { label: "Class", id: "class" },
  { label: "Path", id: "path" }
], Re = (e, a) => a.some((t) => t.data.name === e), Si = (e) => e.name.length > 0 && e.class_name.length > 0 && e.model_path.length > 0, Os = (e, a) => !O.isNil(e.newName) && e.newName !== e.data.name ? e.newName.length > 0 && !Re(e.newName, a) && e.data.class_name.length > 0 && e.data.model_path.length > 0 : Si(e.data), _i = {
  isNameValid: !0,
  isClassNameValid: !0,
  isModelPathValid: !0,
  isEditNameValid: !0,
  isEditClassNameValid: !0,
  isEditModelPathValid: !0
}, yi = {
  name: "",
  class_name: "",
  model_path: ""
}, Qt = ({
  addRoute: e,
  data: a,
  discardChanges: t,
  newRoute: s,
  setNewRoute: r,
  setValidation: c,
  validation: l
}) => /* @__PURE__ */ i.jsxs("div", { className: "table__body", children: [
  /* @__PURE__ */ i.jsx("div", { className: "table__body-column", children: /* @__PURE__ */ i.jsxs("div", { className: "input-row-wrapper", children: [
    /* @__PURE__ */ i.jsx(
      E,
      {
        className: "input-row__item",
        floatingLabel: !0,
        invalid: Re(s.name, a) || !l.isNameValid,
        invalidText: Re(s.name, a) ? "Name already exists" : "This field is invalid",
        label: "Name",
        onChange: (o) => r((d) => ({ ...d, name: o })),
        required: !0,
        requiredText: "This field is required",
        setInvalid: (o) => c((d) => ({
          ...d,
          isNameValid: o
        })),
        type: "text"
      }
    ),
    /* @__PURE__ */ i.jsx(
      E,
      {
        className: "input-row__item",
        floatingLabel: !0,
        invalid: !l.isClassNameValid,
        label: "Class",
        onChange: (o) => r((d) => ({ ...d, class_name: o })),
        required: !0,
        requiredText: "This field is required",
        setInvalid: (o) => c((d) => ({
          ...d,
          isClassNameValid: o
        })),
        type: "text"
      }
    ),
    /* @__PURE__ */ i.jsx(
      E,
      {
        className: "input-row__item",
        floatingLabel: !0,
        invalid: !l.isModelPathValid,
        label: "Path",
        onChange: (o) => r((d) => ({ ...d, model_path: o })),
        required: !0,
        requiredText: "This field is required",
        setInvalid: (o) => c((d) => ({
          ...d,
          isModelPathValid: o
        })),
        type: "text"
      }
    )
  ] }) }),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      className: "btn-add",
      disabled: Re(s.name, a),
      onClick: e,
      children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Add item" }), children: /* @__PURE__ */ i.jsx(le, {}) })
    }
  ),
  /* @__PURE__ */ i.jsx("button", { onClick: t, children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Discard changes" }), children: /* @__PURE__ */ i.jsx(re, {}) }) })
] });
Qt.propTypes = {
  addRoute: n.func.isRequired,
  data: n.arrayOf(n.object).isRequired,
  discardChanges: n.func.isRequired,
  newRoute: n.object.isRequired,
  setNewRoute: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const Dt = ({
  editRoute: e,
  routes: a,
  selectedRoute: t,
  setSelectedRoute: s,
  setValidation: r,
  validation: c
}) => /* @__PURE__ */ i.jsxs("div", { className: "table__row edit-row", children: [
  /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: /* @__PURE__ */ i.jsx(
    E,
    {
      floatingLabel: !0,
      invalid: t.newName !== t.data.name && Re(t.newName, a) || !c.isEditNameValid,
      invalidText: Re(t.newName, a) ? "Name already exists" : "This field is invalid",
      label: "Name",
      onChange: (l) => s({
        ...t,
        newName: l
      }),
      required: !0,
      requiredText: "This field is required",
      setInvalid: (l) => r((o) => ({
        ...o,
        isEditNameValid: l
      })),
      type: "text",
      value: t.newName ?? t.data.name
    }
  ) }),
  /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: /* @__PURE__ */ i.jsx(
    E,
    {
      floatingLabel: !0,
      invalid: !c.isEditClassNameValid,
      label: "Class",
      onChange: (l) => s({
        ...t,
        data: {
          ...t.data,
          class_name: l
        }
      }),
      required: !0,
      requiredText: "This field is required",
      setInvalid: (l) => r((o) => ({
        ...o,
        isEditClassNameValid: l
      })),
      type: "text",
      value: t.data.class_name
    }
  ) }),
  /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: /* @__PURE__ */ i.jsx(
    E,
    {
      floatingLabel: !0,
      invalid: !c.isEditModelPathValid,
      label: "Path",
      onChange: (l) => s({
        ...t,
        data: {
          ...t.data,
          model_path: l
        }
      }),
      required: !0,
      requiredText: "This field is required",
      setInvalid: (l) => r((o) => ({
        ...o,
        isEditModelPathValid: l
      })),
      type: "text",
      value: t.data.model_path
    }
  ) }),
  /* @__PURE__ */ i.jsx("div", { className: "table__cell-actions", children: /* @__PURE__ */ i.jsx(
    "button",
    {
      className: "apply-edit-btn",
      disabled: !Os(t, a),
      onClick: e,
      children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Apply" }), children: /* @__PURE__ */ i.jsx(ai, {}) })
    }
  ) })
] });
Dt.propTypes = {
  editRoute: n.func.isRequired,
  routes: n.array.isRequired,
  selectedRoute: n.object.isRequired,
  setSelectedRoute: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const en = ({
  addRoute: e,
  data: a,
  discardChanges: t,
  editRoute: s,
  generateActionsMenu: r,
  newRoute: c,
  selectedRoute: l,
  setNewRoute: o,
  setSelectedRoute: d,
  setShowAddNewRouteRow: u,
  setValidation: h,
  showAddNewRouteRow: f,
  validation: p
}) => {
  const m = D(
    "new-item-side-panel__table",
    "model-table",
    f && "no-border"
  );
  return /* @__PURE__ */ i.jsxs("div", { className: m, children: [
    /* @__PURE__ */ i.jsx("h6", { className: "model-table__title", children: "Model" }),
    /* @__PURE__ */ i.jsxs("div", { className: "table__header table__row no-hover", children: [
      Ms.map((y) => /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: y.label }, y.id)),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell-actions" })
    ] }),
    a.map((y, C) => l && l.data.name === y.data.name ? /* @__PURE__ */ i.jsx(
      Dt,
      {
        editRoute: s,
        routes: a,
        selectedRoute: l,
        setSelectedRoute: d,
        setValidation: h,
        validation: p
      },
      C
    ) : /* @__PURE__ */ i.jsxs("div", { className: "table__row", children: [
      O.map(y.data, (R, N) => /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: R }), children: R }) }, N)),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-actions", children: /* @__PURE__ */ i.jsx(ii, { menu: r(y), dataItem: y }) })
    ] }, C)),
    f ? /* @__PURE__ */ i.jsx(
      Qt,
      {
        addRoute: e,
        data: a,
        discardChanges: t,
        newRoute: c,
        setNewRoute: o,
        setValidation: h,
        validation: p
      }
    ) : /* @__PURE__ */ i.jsx("div", { className: "table__row no-hover", children: /* @__PURE__ */ i.jsx("div", { className: "table__cell", onClick: () => u(!0), children: /* @__PURE__ */ i.jsxs("button", { className: "add-input", children: [
      /* @__PURE__ */ i.jsx(le, {}),
      "Add route"
    ] }) }) })
  ] });
};
en.propTypes = {
  addRoute: n.func.isRequired,
  data: n.arrayOf(n.object).isRequired,
  discardChanges: n.func.isRequired,
  editRoute: n.func.isRequired,
  generateActionsMenu: n.func.isRequired,
  newRoute: n.object.isRequired,
  selectedRoute: n.object,
  setNewRoute: n.func.isRequired,
  setSelectedRoute: n.func.isRequired,
  setShowAddNewRouteRow: n.func.isRequired,
  setValidation: n.func.isRequired,
  showAddNewRouteRow: n.bool.isRequired,
  validation: n.object.isRequired
};
const As = ({ defaultData: e }) => {
  const [a, t] = S([]), [s, r] = S(yi), [c, l] = S(!1), [o, d] = S(null), [u, h] = S(_i), f = ee(), p = Y((g) => g.functionsStore);
  A(() => {
    Ai(e.graph?.routes ?? {}) || t(
      Object.entries(e.graph.routes).map(([g, V]) => ({
        isDefault: !0,
        data: {
          name: g,
          class_name: V.class_name,
          model_path: V.class_args.model_path
        }
      }))
    );
  }, [e.graph]);
  const m = () => {
    const g = { ...p.newFunction.spec.graph?.routes };
    if (!Si(s) || !u.isNameValid || !u.isClassNameValid || !u.isModelPathValid)
      return h((V) => ({
        ...V,
        isNameValid: s.name.length > 0,
        isClassNameValid: s.class_name.length > 0,
        isModelPathValid: s.model_path.length > 0
      }));
    g[s.name] = {
      kind: "task",
      class_name: s.class_name,
      class_args: {
        model_path: s.model_path
      }
    }, t((V) => [
      ...V,
      {
        isDefault: !1,
        data: {
          name: s.name,
          class_name: s.class_name,
          model_path: s.model_path
        }
      }
    ]), f(
      Ke({
        ...p.newFunction.spec.graph,
        routes: g
      })
    ), r(yi), l(!1);
  }, y = W(
    (g) => {
      const V = {
        ...p.newFunction.spec.graph.routes
      };
      delete V[g.data.name], t((T) => T.filter((b) => b.data.name !== g.data.name)), f(
        Ke({
          ...p.newFunction.spec.graph,
          routes: V
        })
      );
    },
    [f, p.newFunction.spec.graph]
  ), C = () => {
    const g = { ...p.newFunction.spec.graph.routes }, V = o.newName || o.data.name;
    if (o.newName && delete g[o.data.name], !Si(o.data) || !u.isEditNameValid || !u.isEditClassNameValid || !u.isEditModelPathValid)
      return h((T) => ({
        ...T,
        isEditNameValid: o.data.name.length > 0,
        isEditClassNameValid: o.data.class_name.length > 0,
        isEditModelPathValid: o.data.model_path.length > 0
      }));
    g[V] = {
      kind: "task",
      class_name: o.data.class_name,
      class_args: {
        model_path: o.data.model_path
      }
    }, d(null), t(
      (T) => T.map((b) => (b.data.name === o.data.name && (b.data = {
        name: o.newName || o.data.name,
        class_name: o.data.class_name,
        model_path: o.data.model_path
      }), b))
    ), f(
      Ke({
        ...p.newFunction.spec.graph,
        routes: g
      })
    );
  }, R = () => {
    r(yi), l(!1), h(_i);
  }, N = W(
    () => [
      [
        {
          label: "Edit",
          icon: /* @__PURE__ */ i.jsx(Ee, {}),
          onClick: (g) => {
            d(g), h(_i);
          }
        },
        {
          label: "Remove",
          icon: /* @__PURE__ */ i.jsx(re, {}),
          onClick: (g) => {
            y(g);
          }
        }
      ]
    ],
    [y]
  );
  return /* @__PURE__ */ i.jsx(
    en,
    {
      addRoute: m,
      data: a,
      deleteRoute: y,
      discardChanges: R,
      editRoute: C,
      generateActionsMenu: N,
      newRoute: s,
      selectedRoute: o,
      setNewRoute: r,
      setSelectedRoute: d,
      setShowAddNewRouteRow: l,
      setValidation: h,
      showAddNewRouteRow: c,
      validation: u
    }
  );
}, Ls = [
  { id: "none", label: "None" },
  { id: "mlrun.serving.routers.VotingEnsemble", label: "Ensemble" }
], tn = ({ defaultData: e, data: a, handleTrackModels: t, selectRouterType: s }) => /* @__PURE__ */ i.jsxs(z, { className: "topology", title: "Topology", children: [
  /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx(
    H,
    {
      className: "router-type",
      density: "dense",
      floatingLabel: !0,
      label: "Router Type",
      onClick: s,
      options: Ls,
      selectedId: a.class_name
    }
  ) }),
  /* @__PURE__ */ i.jsx(As, { defaultData: e }),
  /* @__PURE__ */ i.jsx(
    ti,
    {
      className: "topology__model-tracking",
      item: { id: "trackModels", label: "Model Tracking" },
      onChange: t,
      selectedId: a.track_models
    }
  )
] });
tn.propTypes = {
  defaultData: n.object.isRequired,
  data: n.object.isRequired,
  handleTrackModels: n.func.isRequired,
  selectRouterType: n.func.isRequired
};
const nn = ({ defaultData: e }) => {
  const [a, t] = S({
    class_name: e.graph?.class_name ?? "none",
    track_models: e.track_models ? "trackModels" : ""
  }), s = ee(), r = Y((o) => o.functionsStore);
  A(() => {
    O.isNil(e) && s(Ke({ kind: "router" }));
  }, [e, s]);
  const c = (o) => {
    const d = { ...r.newFunction.spec.graph };
    o === "none" ? delete d.class_name : d.class_name = o, t((u) => ({
      ...u,
      class_name: o
    })), s(Ke(d));
  }, l = (o) => {
    t((d) => ({
      ...d,
      track_models: o === d.track_models ? "" : o
    })), s(Vn(o !== a.track_models));
  };
  return /* @__PURE__ */ i.jsx(
    tn,
    {
      data: a,
      defaultData: e,
      handleTrackModels: l,
      selectRouterType: c
    }
  );
};
nn.propTypes = {
  defaultData: n.object.isRequired
};
const Fi = "string", Fe = "number", ue = "boolean", li = "json", an = [
  { label: "String", id: Fi },
  { label: "Number", id: Fe },
  { label: "Boolean", id: ue },
  { label: "JSON", id: li }
], Bs = [
  { label: "Name", id: "name" },
  { label: "Type", id: "type" },
  { label: "Value", id: "value" }
], Ce = (e, a) => a.some((t) => t.data.name === e), Ei = (e) => e.name.length > 0 && String(e.value).length > 0, Ks = (e, a) => !O.isNil(e.newName) && e.newName !== e.data.name ? e.newName.length > 0 && !Ce(e.newName, a) && String(e.value).length > 0 : Ei(e.data), rt = (e, a, t, s) => {
  switch (e.type) {
    case Fe:
      t(
        Le({
          ...s,
          [a]: Number(e.value)
        })
      );
      break;
    case ue:
      t(
        Le({
          ...s,
          [a]: e.value !== "false"
        })
      );
      break;
    case li:
      t(
        Le({
          ...s,
          [a]: JSON.parse(e.value)
        })
      );
      break;
    default:
      t(
        Le({
          ...s,
          [a]: e.value
        })
      );
  }
}, ct = (e) => {
  switch (typeof e) {
    case Fi:
      return Fi;
    case Fe:
      return Fe;
    case ue:
      return ue;
    default:
      return li;
  }
}, vi = {
  isNameValid: !0,
  isValueValid: !0,
  isEditNameValid: !0,
  isEditValueValid: !0
}, Ni = {
  name: "",
  type: "string",
  value: ""
}, sn = ({
  discardChanges: e,
  handleAddNewParameter: a,
  newParameter: t,
  parameters: s,
  setNewParameter: r,
  setValidation: c,
  validation: l
}) => /* @__PURE__ */ i.jsxs("div", { className: "table__body", children: [
  /* @__PURE__ */ i.jsx("div", { className: "table__body-column", children: /* @__PURE__ */ i.jsxs("div", { className: "input-row-wrapper", children: [
    /* @__PURE__ */ i.jsx(
      E,
      {
        className: "input-row__item",
        floatingLabel: !0,
        invalid: Ce(t.name, s) || !l.isNameValid,
        invalidText: Ce(t.name, s) ? "Name already exists" : "This field is invalid",
        label: "Name",
        onChange: (o) => r((d) => ({ ...d, name: o })),
        required: !0,
        setInvalid: (o) => c((d) => ({
          ...d,
          isNameValid: o
        }))
      }
    ),
    /* @__PURE__ */ i.jsx(
      H,
      {
        className: "parameter-type",
        onClick: (o) => {
          r((d) => ({
            ...d,
            type: o,
            value: o === ue ? "false" : ""
          })), c({
            isNameValid: !0,
            isValueValid: !0
          });
        },
        options: an,
        selectedId: t.type
      }
    ),
    t.type === ue ? /* @__PURE__ */ i.jsx(
      ti,
      {
        className: "parameter-value",
        item: { id: "true" },
        onChange: (o) => {
          r((d) => ({
            ...d,
            value: o === d.value ? "false" : o
          }));
        },
        selectedId: t.value
      }
    ) : t.type === Fe ? /* @__PURE__ */ i.jsx(
      pe,
      {
        density: "normal",
        invalid: !l.isValueValid,
        label: "Value",
        labelType: "floatingLabel",
        onChange: (o) => {
          c((d) => ({
            ...d,
            isValueValid: String(o).length > 0
          })), r((d) => ({ ...d, value: o }));
        },
        required: !0,
        requiredText: "This field is required",
        value: t.value
      }
    ) : /* @__PURE__ */ i.jsx(
      E,
      {
        className: "input-row__item",
        floatingLabel: !0,
        invalid: !l.isValueValid,
        label: "Value",
        onChange: (o) => r((d) => ({ ...d, value: o })),
        setInvalid: (o) => c((d) => ({
          ...d,
          isValueValid: o
        })),
        required: !0
      }
    )
  ] }) }),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      className: "parameters-table__btn btn-add",
      disabled: Ce(t.name, s),
      onClick: a,
      children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Add item" }), children: /* @__PURE__ */ i.jsx(le, {}) })
    }
  ),
  /* @__PURE__ */ i.jsx("button", { onClick: e, className: "parameters-table__btn", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Discard changes" }), children: /* @__PURE__ */ i.jsx(re, {}) }) })
] });
sn.propTypes = {
  discardChanges: n.func.isRequired,
  handleAddNewParameter: n.func.isRequired,
  newParameter: n.object.isRequired,
  parameters: n.arrayOf(n.object).isRequired,
  setNewParameter: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const ln = ({
  handleEdit: e,
  parameters: a,
  selectedParameter: t,
  setSelectedParameter: s,
  setValidation: r,
  validation: c
}) => /* @__PURE__ */ i.jsxs("div", { className: "table__row edit-row", children: [
  /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell_edit", children: /* @__PURE__ */ i.jsx(
    E,
    {
      floatingLabel: !0,
      invalid: t.newName !== t.data.name && Ce(t.newName, a) || !c.isEditNameValid,
      invalidText: Ce(t.newName, a) ? "Name already exists" : "This field is invalid",
      label: "Name",
      onChange: (l) => {
        s({
          ...t,
          newName: l
        });
      },
      required: !0,
      setInvalid: (l) => r((o) => ({
        ...o,
        isEditNameValid: l
      })),
      type: "text",
      value: t.newName ?? t.data.name
    }
  ) }),
  /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell_edit", children: /* @__PURE__ */ i.jsx(
    H,
    {
      onClick: (l) => s((o) => ({
        ...o,
        data: {
          ...o.data,
          type: l,
          value: l === ue ? "false" : ""
        }
      })),
      options: an,
      selectedId: t.data.type
    }
  ) }),
  /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell_edit", children: t.data.type === ue ? /* @__PURE__ */ i.jsx(
    ti,
    {
      className: "parameter-value",
      item: { id: "true" },
      onChange: (l) => {
        s((o) => ({
          ...o,
          data: {
            ...o.data,
            value: l === o.data.value ? "false" : l
          }
        }));
      },
      selectedId: t.data.value
    }
  ) : t.data.type === Fe ? /* @__PURE__ */ i.jsx(
    pe,
    {
      density: "normal",
      label: "Value",
      labelType: "floatingLabel",
      onChange: (l) => s((o) => ({
        ...o,
        data: {
          ...o.data,
          value: l
        }
      })),
      required: !0,
      value: t.data.value
    }
  ) : /* @__PURE__ */ i.jsx(
    E,
    {
      floatingLabel: !0,
      invalid: !c.isEditValueValid,
      label: "Value",
      onChange: (l) => {
        s({
          ...t,
          data: {
            ...t.data,
            value: l
          }
        });
      },
      required: !0,
      setInvalid: (l) => r((o) => ({
        ...o,
        isEditValueValid: l
      })),
      type: "text",
      value: t.data.value
    }
  ) }),
  /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-actions", children: /* @__PURE__ */ i.jsx(
    "button",
    {
      className: "apply-edit-btn",
      disabled: !Ks(t, a),
      onClick: e,
      children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: "Apply" }), children: /* @__PURE__ */ i.jsx(ai, {}) })
    }
  ) })
] });
ln.propTypes = {
  handleEdit: n.func.isRequired,
  parameters: n.array.isRequired,
  selectedParameter: n.object.isRequired,
  setSelectedParameter: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const rn = ({
  discardChanges: e,
  editParameter: a,
  generateActionsMenu: t,
  handleAddNewParameter: s,
  newParameter: r,
  parameters: c,
  selectedParameter: l = null,
  setNewParameter: o,
  setSelectedParameter: d,
  setShowAddNewParameterRow: u,
  setValidation: h,
  showAddNewParameterRow: f,
  validation: p
}) => {
  const m = D(
    "new-item-side-panel__table",
    "parameters-table",
    f && "no-border"
  );
  return /* @__PURE__ */ i.jsx(z, { title: "Parameters", children: /* @__PURE__ */ i.jsxs("div", { className: m, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "table__header table__row no-hover", children: [
      Bs.map((y) => /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: y.label }, y.id)),
      /* @__PURE__ */ i.jsx("div", { className: "table__cell-actions" })
    ] }),
    c.map(
      (y, C) => l && l.data.name === y.data.name ? /* @__PURE__ */ i.jsx(
        ln,
        {
          handleEdit: a,
          parameters: c,
          selectedParameter: l,
          setSelectedParameter: d,
          setValidation: h,
          validation: p
        },
        C
      ) : /* @__PURE__ */ i.jsxs("div", { className: "table__row", children: [
        O.map(y.data, (R, N) => /* @__PURE__ */ i.jsx("div", { className: "table__cell", children: /* @__PURE__ */ i.jsx(L, { template: /* @__PURE__ */ i.jsx(B, { text: R }), children: R }) }, N)),
        /* @__PURE__ */ i.jsx("div", { className: "table__cell table__cell-actions", children: /* @__PURE__ */ i.jsx(ii, { dataItem: y, menu: t(y) }) })
      ] }, C)
    ),
    f ? /* @__PURE__ */ i.jsx(
      sn,
      {
        discardChanges: e,
        handleAddNewParameter: s,
        newParameter: r,
        parameters: c,
        setNewParameter: o,
        setValidation: h,
        validation: p
      }
    ) : /* @__PURE__ */ i.jsx("div", { className: "table__row no-hover", children: /* @__PURE__ */ i.jsx("div", { className: "table__cell", onClick: () => u(!0), children: /* @__PURE__ */ i.jsxs("button", { className: "add-input", children: [
      /* @__PURE__ */ i.jsx(le, {}),
      "Add parameter"
    ] }) }) })
  ] }) });
};
rn.propTypes = {
  discardChanges: n.func.isRequired,
  editParameter: n.func.isRequired,
  generateActionsMenu: n.func.isRequired,
  handleAddNewParameter: n.func.isRequired,
  newParameter: n.object.isRequired,
  parameters: n.arrayOf(n.object).isRequired,
  selectedParameter: n.object,
  setNewParameter: n.func.isRequired,
  setSelectedParameter: n.func.isRequired,
  setShowAddNewParameterRow: n.func.isRequired,
  setValidation: n.func.isRequired,
  showAddNewParameterRow: n.bool.isRequired,
  validation: n.object.isRequired
};
const cn = ({ defaultData: e }) => {
  const [a, t] = S(!1), [s, r] = S(Ni), [c, l] = S(null), [o, d] = S([]), [u, h] = S(vi), f = ee(), p = Y((g) => g.functionsStore);
  A(() => {
    Ai(e.parameters ?? {}) || d(
      Object.entries(e.parameters).map(([g, V]) => ({
        data: {
          name: g,
          type: ct(V),
          value: ct(V) === li ? JSON.stringify(V) : String(V)
        },
        isDefault: !0
      }))
    );
  }, [e.parameters]);
  const m = () => {
    r(Ni), t(!1), h(vi);
  }, y = () => {
    if (!Ei(s) || !u.isNameValid || !u.isValueValid)
      return h((g) => ({
        ...g,
        isNameValid: s.name.length > 0,
        isValueValid: String(s.value).length > 0
      }));
    rt(
      s,
      s.name,
      f,
      p.newFunction.spec.parameters
    ), d((g) => [
      ...g,
      {
        data: {
          name: s.name,
          type: s.type,
          value: s.value
        },
        isDefault: !1
      }
    ]), t(!1), r(Ni);
  }, C = () => {
    const g = {
      ...p.newFunction.spec.parameters
    }, V = c.newName || c.data.name;
    if (c.newName && delete g[c.data.name], !Ei(c.data) || !u.isEditNameValid || !u.isEditValueValid)
      return h((T) => ({
        ...T,
        isEditNameValid: c.data.name.length > 0,
        isEditValueValid: c.data.value.length > 0
      }));
    rt(c.data, V, f, g), d(
      (T) => T.map((b) => (b.data.name === c.data.name && (b.data = {
        name: V,
        type: c.data.type,
        value: c.data.value
      }), b))
    ), l(null);
  }, R = W(
    (g) => {
      const V = {
        ...p.newFunction.spec.parameters
      };
      delete V[g.data.name], d(
        (T) => T.filter((b) => b.data.name !== g.data.name)
      ), f(Le(V));
    },
    [f, p.newFunction.spec.parameters]
  ), N = W(
    () => [
      [
        {
          label: "Edit",
          icon: /* @__PURE__ */ i.jsx(Ee, {}),
          onClick: (g) => {
            l(g), h(vi);
          }
        },
        {
          label: "Remove",
          icon: /* @__PURE__ */ i.jsx(re, {}),
          onClick: (g) => {
            R(g);
          }
        }
      ]
    ],
    [R]
  );
  return /* @__PURE__ */ i.jsx(
    rn,
    {
      discardChanges: m,
      editParameter: C,
      generateActionsMenu: N,
      handleAddNewParameter: y,
      newParameter: s,
      parameters: o,
      selectedParameter: c,
      setNewParameter: r,
      setSelectedParameter: l,
      setShowAddNewParameterRow: t,
      setValidation: h,
      showAddNewParameterRow: a,
      validation: u
    }
  );
};
cn.propTypes = {
  defaultData: n.object.isRequired
};
const on = ({ defaultData: e, setValidation: a, validation: t }) => {
  const [s, r] = S({
    error_stream: e.error_stream ?? ""
  }), c = ee(), l = Y((o) => o.functionsStore);
  return /* @__PURE__ */ i.jsxs(z, { title: "Advanced", className: "advanced", children: [
    /* @__PURE__ */ i.jsx(cn, { defaultData: e }),
    /* @__PURE__ */ i.jsx(
      E,
      {
        floatingLabel: !0,
        invalid: !t.isErrorStreamPathValid,
        label: "Stream Path",
        tip: " Enables users to store the function error in a V3IO stream",
        value: s.error_stream,
        onChange: (o) => r((d) => ({ ...d, error_stream: o })),
        onBlur: () => {
          l.newFunction.spec.error_stream !== s.error_stream && c(qn(s.error_stream));
        },
        setInvalid: (o) => a((d) => ({
          ...d,
          isErrorStreamPathValid: o
        })),
        type: "text"
      }
    )
  ] });
};
on.propTypes = {
  defaultData: n.object.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const dn = ({
  defaultData: e,
  functionsStore: a,
  isStagingMode: t,
  sections: s,
  setValidation: r,
  validation: c
}) => /* @__PURE__ */ i.jsx("div", { className: "functions-panel__item new-item-side-panel__item runtime", children: /* @__PURE__ */ i.jsx(z, { title: `${a.newFunction.kind} runtime configuration`, children: s.map(
  (l) => l.id === "topology" ? /* @__PURE__ */ i.jsx(nn, { defaultData: e }, l.id) : l.id === "secrets" && t ? /* @__PURE__ */ i.jsx(Ps, { defaultData: e }, l.id) : l.id === "advanced" ? /* @__PURE__ */ i.jsx(
    on,
    {
      defaultData: e,
      setValidation: r,
      validation: c
    },
    l.id
  ) : null
) }) });
dn.propTypes = {
  defaultData: n.object.isRequired,
  functionsStore: n.object.isRequired,
  isStagingMode: n.bool.isRequired,
  sections: n.arrayOf(n.object).isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const un = ({
  defaultData: e = {},
  sections: a,
  setValidation: t,
  validation: s
}) => {
  const { isStagingMode: r } = Mi(), c = Y((l) => l.functionsStore);
  return /* @__PURE__ */ i.jsx(
    dn,
    {
      defaultData: e,
      functionsStore: c,
      isStagingMode: r,
      sections: a,
      setValidation: t,
      validation: s
    }
  );
};
un.propTypes = {
  defaultData: n.object,
  sections: n.arrayOf(n.object).isRequired,
  setValidation: n.func.isRequired,
  validation: n.object.isRequired
};
const mn = ({ closePanel: e }) => /* @__PURE__ */ i.jsxs("div", { className: "panel-title functions-panel__title", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "panel-title__container", children: [
    /* @__PURE__ */ i.jsx("h5", { children: "This wizard takes you through the process of deploying a new MLRun function in your project." }),
    /* @__PURE__ */ i.jsxs("p", { children: [
      "Functions can be used for data preparation, model training, model serving, notification & alerts and etc.",
      /* @__PURE__ */ i.jsxs(
        "a",
        {
          href: "https://docs.mlrun.org/en/latest/tutorial/01-mlrun-basics.html#gs-tutorial-1-step-create-basic-function",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            " ",
            "Read more",
            " "
          ]
        }
      ),
      "about MLRun functions"
    ] })
  ] }),
  /* @__PURE__ */ i.jsx(
    me,
    {
      onClick: () => e({}),
      className: "panel-title__btn_close",
      tooltipText: "Close",
      id: "pop-up-close-btn",
      children: /* @__PURE__ */ i.jsx(Vi, {})
    }
  )
] });
mn.propTypes = {
  closePanel: n.func.isRequired
};
const ot = {
  serving: [
    { id: Rn },
    { id: Cn },
    { id: Tn }
  ]
}, pn = ({
  checkValidation: e,
  closePanel: a,
  confirmData: t,
  defaultData: s = {},
  error: r = "",
  formState: c,
  frontendSpec: l,
  functionsStore: o,
  handleSave: d,
  imageType: u,
  loading: h,
  mode: f,
  newFunction: p,
  setImageType: m,
  setValidation: y,
  validation: C
}) => {
  const R = ee();
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    t && /* @__PURE__ */ i.jsx(
      Sn,
      {
        cancelButton: {
          handler: t.rejectHandler,
          label: t.btnCancelLabel,
          variant: t.btnCancelVariant
        },
        closePopUp: t.rejectHandler,
        confirmButton: {
          handler: t.confirmHandler,
          label: t.btnConfirmLabel,
          variant: t.btnConfirmVariant
        },
        header: t.header,
        isOpen: !!t,
        message: t.message
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "new-item-side-panel-container", children: /* @__PURE__ */ i.jsxs("div", { className: "functions-panel new-item-side-panel", children: [
      h && /* @__PURE__ */ i.jsx(Fn, {}),
      /* @__PURE__ */ i.jsx(mn, { closePanel: a }),
      /* @__PURE__ */ i.jsxs("div", { className: "new-item-side-panel__body", children: [
        /* @__PURE__ */ i.jsx(
          Me,
          {
            accordionClassName: "new-item-side-panel__accordion",
            icon: /* @__PURE__ */ i.jsx(Oe, {}),
            iconClassName: "new-item-side-panel__expand-icon",
            openByDefault: !0,
            children: /* @__PURE__ */ i.jsx(
              Kt,
              {
                defaultData: s,
                formState: c,
                frontendSpec: l
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          Me,
          {
            accordionClassName: "new-item-side-panel__accordion",
            icon: /* @__PURE__ */ i.jsx(Oe, {}),
            iconClassName: "new-item-side-panel__expand-icon",
            openByDefault: !0,
            children: /* @__PURE__ */ i.jsx(
              St,
              {
                defaultData: s,
                imageType: u,
                mode: f,
                setImageType: m,
                setValidation: y,
                validation: C
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          Me,
          {
            accordionClassName: "new-item-side-panel__accordion",
            icon: /* @__PURE__ */ i.jsx(Oe, {}),
            iconClassName: "new-item-side-panel__expand-icon",
            openByDefault: !0,
            children: /* @__PURE__ */ i.jsx(
              Ki,
              {
                defaultData: s,
                mode: f,
                setValidation: y,
                validation: C
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          Me,
          {
            accordionClassName: "new-item-side-panel__accordion",
            icon: /* @__PURE__ */ i.jsx(Oe, {}),
            iconClassName: "new-item-side-panel__expand-icon",
            openByDefault: !0,
            children: /* @__PURE__ */ i.jsx(
              vs,
              {
                setValidation: y,
                validation: C
              }
            )
          }
        ),
        ot[p.kind] && /* @__PURE__ */ i.jsx(
          Me,
          {
            accordionClassName: "new-item-side-panel__accordion",
            icon: /* @__PURE__ */ i.jsx(Oe, {}),
            iconClassName: "new-item-side-panel__expand-icon",
            openByDefault: !0,
            children: /* @__PURE__ */ i.jsx(
              un,
              {
                defaultData: s,
                sections: ot[p.kind],
                setValidation: y,
                validation: C
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          ia,
          {
            className: "functions-panel__item",
            credentialsAccessKey: o.newFunction.metadata.credentials.access_key,
            required: o.newFunction.metadata.credentials.access_key !== ht,
            setCredentialsAccessKey: (N) => R(En(N)),
            setValidation: y,
            validation: C
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "new-item-side-panel__buttons-container", children: [
          r && /* @__PURE__ */ i.jsx(
            In,
            {
              closeError: () => {
                r && R(Ri());
              },
              message: r
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "functions-panel__buttons-wrapper", children: [
            /* @__PURE__ */ i.jsx(
              ae,
              {
                className: "btn_cancel",
                variant: ki,
                label: "Cancel",
                onClick: a
              }
            ),
            /* @__PURE__ */ i.jsx(
              ae,
              {
                className: "btn_save",
                disabled: !e(),
                variant: Ii,
                label: "Save",
                onClick: () => d()
              }
            ),
            /* @__PURE__ */ i.jsx(
              ae,
              {
                variant: De,
                label: o.newFunction.kind === kn ? "Create" : "Deploy",
                onClick: () => d(!0),
                disabled: !e()
              }
            )
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
pn.propTypes = {
  checkValidation: n.func.isRequired,
  closePanel: n.func.isRequired,
  confirmData: n.object,
  defaultData: n.object,
  error: n.string,
  formState: n.object.isRequired,
  frontendSpec: n.object.isRequired,
  functionsStore: n.object.isRequired,
  handleSave: n.func.isRequired,
  imageType: n.string.isRequired,
  loading: n.bool.isRequired,
  mode: Li.isRequired,
  newFunction: n.object.isRequired,
  setImageType: n.func.isRequired,
  setValidation: n.func.isRequired,
  validation: n.object
};
const Us = ({
  closePanel: e,
  createFunctionSuccess: a,
  defaultData: t = null,
  handleDeployFunctionFailure: s,
  handleDeployFunctionSuccess: r,
  mode: c
}) => {
  const l = Y((x) => x.appStore.frontendSpec), [o, d] = S(null), [u, h] = S({
    areLabelsValid: !0,
    isHandlerValid: !0,
    isDefaultCLassValid: !0,
    isCodeImageValid: !0,
    isBaseImageValid: !0,
    isBuildCommandsValid: !0,
    isBuildRequirementValid: !0,
    isBuildImageValid: !0,
    isMemoryRequestValid: !0,
    isMemoryLimitValid: !0,
    isCpuRequestValid: !0,
    isCpuLimitValid: !0,
    isGpuLimitValid: !0,
    isAccessKeyValid: !0,
    isErrorStreamPathValid: !0
  }), [f, p] = S(
    (t?.build?.image || t?.build?.base_image || t?.build?.commands?.length > 0) && t.image?.length === 0 ? J : ""
  ), m = Ie(), y = Qn(), C = ge.useRef(
    Pn({
      initialValues: {
        labels: Mn(t?.labels || {}, l.internal_labels)
      },
      mutators: { ...An, setFieldState: On },
      onSubmit: () => {
      }
    })
  ), R = ee(), N = Y((x) => x.functionsStore), g = Y((x) => x.appStore);
  A(() => {
    if (t) {
      let x = {
        kind: t.type,
        metadata: {
          credentials: {
            access_key: t.access_key || ht
          },
          labels: t.labels,
          name: t.name,
          project: t.project,
          tag: t.tag
        },
        spec: {
          args: t.args,
          build: {
            base_image: t.build?.base_image ?? "",
            commands: t.build?.commands ?? [],
            requirements: t.build?.requirements ?? [],
            functionSourceCode: t.build?.functionSourceCode ?? "",
            image: t.build?.image ?? ""
          },
          description: t.description,
          env: t.env,
          image: t.image,
          priority_class_name: t.priority_class_name,
          preemption_mode: t.preemption_mode,
          volume_mounts: O.chain(t.volume_mounts).flatten().unionBy("name").value() ?? [],
          volumes: t.volumes,
          resources: {
            limits: t.resources.limits ?? {},
            requests: t.resources.requests ?? {}
          }
        }
      };
      t.type === Pi ? x = {
        ...x,
        spec: {
          ...x.spec,
          default_class: t.default_class,
          error_stream: t.error_stream,
          graph: t.graph,
          parameters: t.parameters,
          secret_sources: t.secret_sources,
          track_models: t.track_models ?? !1
        }
      } : x = {
        ...x,
        spec: {
          ...x.spec,
          default_handler: t.default_handler
        }
      }, R(Ln(x));
    }
  }, [t, R]), A(() => {
    N.newFunction.metadata.project || R(Bn(m.projectName));
  }, [R, N.newFunction.metadata.project, m.projectName]);
  const V = (x) => {
    const q = O.cloneDeep(N.newFunction), w = q.metadata.tag || "latest";
    q.labels = Zi(C.current.getFieldState("labels")?.value), R(Zn({ project: m.projectName, data: q })).unwrap().then((_) => {
      if (x) {
        const j = N.newFunction.spec.build.requirements.includes(
          g.frontendSpec?.function_deployment_mlrun_requirement
        ), F = f === se, I = {
          function: {
            ...N.newFunction,
            spec: {
              ...N.newFunction.spec,
              build: {
                ...N.newFunction.spec.build,
                requirements: j && N.newFunction.spec.build.requirements.length === 1 ? [] : N.newFunction.spec.build.requirements
              }
            },
            metadata: {
              ...N.newFunction.metadata,
              labels: Zi(C.current.getFieldState("labels")?.value)
            }
          },
          skip_deployed: F,
          with_mlrun: j
        };
        return b(I);
      }
      _ && a(c === ei).then(() => {
        y(
          `/projects/${m.projectName}/functions/${q.metadata.name}/:${w}@${_.data.hash_key}/overview`
        );
      });
    });
  }, T = (x) => {
    if (v()) {
      if (N.newFunction.spec.image.length === 0 && f === se)
        return h((q) => ({
          ...q,
          isCodeImageValid: !1
        }));
      if (f === J && N.newFunction.spec.build.base_image.length === 0)
        return h((q) => ({
          ...q,
          isBaseImageValid: N.newFunction.spec.build.base_image.length > 0
        }));
      if (N.newFunction.metadata.credentials.access_key.length === 0)
        return h((q) => ({
          ...q,
          isAccessKeyValid: !1
        }));
      N.error && R(Ri()), c === fe ? R(
        $n({
          project: m.projectName,
          name: N.newFunction.metadata.name,
          hash: null,
          tag: N.newFunction.metadata.tag
        })
      ).unwrap().then(() => {
        d({
          header: "Overwrite function?",
          message: `The specified function name is already in use. Are you sure you want to overwrite the function "${N.newFunction.metadata.name}"?`,
          btnCancelLabel: "Cancel",
          btnCancelVariant: ki,
          btnConfirmLabel: "Overwrite",
          btnConfirmVariant: De,
          rejectHandler: () => d(null),
          confirmHandler: () => {
            V(x), d(null);
          }
        });
      }).catch((q) => {
        q.response.status === Gn && R(Ri()), V(x);
      }) : V(x);
    }
  }, b = (x) => {
    R(Hn({ data: x })).unwrap().then((q) => {
      r(q.data.ready);
    }).catch((q) => {
      s(q);
    });
  }, v = () => Object.values(u).every((x) => x);
  return bt(
    /* @__PURE__ */ i.jsx(Kn, { form: C.current, onSubmit: () => {
    }, children: (x) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        pn,
        {
          checkValidation: v,
          closePanel: e,
          confirmData: o,
          defaultData: t ?? {},
          error: N.error,
          formState: x,
          frontendSpec: l,
          functionsStore: N,
          handleSave: T,
          imageType: f,
          loading: N.loading || N.funcLoading,
          mode: c,
          newFunction: N.newFunction,
          setImageType: p,
          setValidation: h,
          validation: u
        }
      ),
      /* @__PURE__ */ i.jsx(
        Un,
        {
          subscription: { valid: !0 },
          onChange: () => {
            h((q) => ({
              ...q,
              areLabelsValid: C.current?.getFieldState?.("labels")?.valid ?? !0
            }));
          }
        }
      )
    ] }) }),
    document.getElementById("overlay_container")
  );
};
Us.propTypes = {
  closePanel: n.func.isRequired,
  createFunctionSuccess: n.func.isRequired,
  defaultData: n.object,
  handleDeployFunctionFailure: n.func.isRequired,
  handleDeployFunctionSuccess: n.func.isRequired,
  mode: Li.isRequired,
  project: n.string.isRequired
};
const $s = (e) => [
  {
    id: Ci,
    label: "Job"
  },
  {
    id: Pi,
    label: "Serving",
    hidden: !e
  }
], Gs = ({
  action: e = null,
  closePopUp: a = null,
  isCustomPosition: t = !1,
  isOpened: s = !1,
  setFunctionsPanelIsOpen: r
}) => {
  const [c, l] = S({
    name: "",
    runtime: Ci,
    tag: ""
  }), [o, d] = S(s ?? !1), [u, h] = S({
    isNameValid: !0,
    isTagValid: !0
  }), { isStagingMode: f } = Mi(), p = ta(), m = $(null), y = Dn(), C = new URLSearchParams(y.search).get("runtime"), R = ee(), N = Y((q) => q.functionsStore), g = D(
    "new-function__pop-up",
    t && "new-function__pop-up_short"
  ), V = () => {
    a ? a() : d(!1), l({
      name: "",
      runtime: Ci,
      tag: ""
    }), h({
      isNameValid: !0,
      isTagValid: !0
    });
  }, T = () => !Object.values(u).includes(!1), b = () => {
    c.name !== N.newFunction.metadata.name && R(Yn(c.name));
  }, v = () => {
    c.tag !== N.newFunction.metadata.tag && R(Jn(c.tag));
  }, x = W(
    (q) => {
      l((w) => ({ ...w, runtime: q })), R(zn(q));
    },
    [R]
  );
  return A(() => {
    p && d(!0), C && x(C);
  }, [p, x, C]), /* @__PURE__ */ i.jsxs("div", { className: "new-function", children: [
    t && /* @__PURE__ */ i.jsx(
      ae,
      {
        ref: m,
        variant: e.variant,
        label: e.label,
        tooltip: e.tooltip,
        disabled: e.disabled,
        onClick: () => d(!0)
      }
    ),
    o && /* @__PURE__ */ i.jsxs(
      Wn,
      {
        className: g,
        closePopUp: V,
        customPosition: t ? {
          element: m,
          position: "bottom-left"
        } : {},
        headerText: "Create New Function",
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "new-function__pop-up-inputs", children: [
            /* @__PURE__ */ i.jsx(
              E,
              {
                floatingLabel: !0,
                invalid: !u.isNameValid,
                label: "Name",
                maxLength: 63,
                onChange: (q) => l((w) => ({ ...w, name: q })),
                onBlur: b,
                required: !0,
                setInvalid: (q) => h((w) => ({ ...w, isNameValid: q })),
                validationRules: Te("function.name"),
                value: c.name,
                wrapperClassName: "name"
              }
            ),
            /* @__PURE__ */ i.jsx(
              E,
              {
                floatingLabel: !0,
                invalid: !u.isTagValid,
                label: "Tag",
                onChange: (q) => l((w) => ({ ...w, tag: q })),
                onBlur: v,
                placeholder: "latest",
                setInvalid: (q) => h((w) => ({ ...w, isTagValid: q })),
                validationRules: Te("common.tag"),
                value: c.tag,
                wrapperClassName: "tag"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx(
            H,
            {
              className: "project-name",
              density: "chunky",
              floatingLabel: !0,
              label: "Runtime",
              onClick: x,
              options: $s(f),
              selectedId: c.runtime
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "pop-up-dialog__footer-container", children: [
            /* @__PURE__ */ i.jsx(
              ae,
              {
                variant: Ii,
                label: "Cancel",
                className: "pop-up-dialog__btn_cancel",
                onClick: V
              }
            ),
            /* @__PURE__ */ i.jsx(
              ae,
              {
                disabled: !T(),
                label: "Continue",
                onClick: () => {
                  if (T()) {
                    if (c.name.length === 0)
                      return h((q) => ({
                        ...q,
                        isNameValid: !1
                      }));
                    r(!0), V();
                  }
                },
                variant: De
              }
            )
          ] })
        ]
      }
    )
  ] });
};
Gs.propTypes = {
  action: n.object,
  closePopUp: n.func,
  isCustomPosition: n.bool,
  isOpened: n.bool,
  setFunctionsPanelIsOpen: n.func.isRequired
};
export {
  Us as F,
  Gs as N
};
//# sourceMappingURL=NewFunctionPopUp-DujV59Hs.mjs.map
