import { kD as o, kC as h, g$ as a, aH as m, aI as M, kB as $, e as j, kN as X, j as l, kE as Y, kF as f, y as p, c as W, P as v } from "./main-CTYpZ6Nf.mjs";
import * as P from "react";
import { useRef as w, useMemo as N, useCallback as _, useEffect as C } from "react";
import { useSearchParams as ee, useNavigate as te } from "react-router-dom";
import { P as se } from "./exclamation-mark-kRjYDG-V.mjs";
import { g as ae } from "./link-helper.util-CuUJj7TV.mjs";
const Z = (c) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...c }, /* @__PURE__ */ P.createElement("path", { d: "M5 16.59L9.58 12L5 7.41L6.41 6L12.41 12L6.41 18L5 16.59Z", fill: "#7F7989" }), /* @__PURE__ */ P.createElement("path", { d: "M11 16.59L15.58 12L11 7.41L12.41 6L18.41 12L12.41 18L11 16.59Z", fill: "#7F7989" })), O = (c) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...c }, /* @__PURE__ */ P.createElement("path", { d: "M8 16.59L12.58 12L8 7.41L9.41 6L15.41 12L9.41 18L8 16.59Z", fill: "#7F7989" })), i = "...", le = ({
  closeParamName: c = "",
  disableNextDoubleBtn: L = !1,
  disabledNextDoubleBtnTooltip: g = "",
  paginationConfig: e,
  selectedItemName: k = "",
  tableId: F = X
}) => {
  const [D, u] = ee(), R = te(), I = w(), U = w(0), q = w(0), S = N(
    () => e[o] - e[h] + 1,
    [e]
  ), n = N(() => ({
    prevBtn: e[a] === 1,
    prevDoubleBtn: e[m] === 1,
    nextBtn: e[a] === e[o] && L || e[a] === e[o] && !e.paginationResponse?.["page-token"],
    nextDoubleBtn: L || !e.paginationResponse?.["page-token"]
  }), [L, e]), H = N(() => {
    const t = e[M] / e[$], s = e[h] - t, r = s + t - 1;
    return s && r ? `Load pages ${s}-${r}` : "";
  }, [e]), x = _(() => {
    c && R(ae(c, !0, k), { replace: !0 });
  }, [c, R, k]), T = N(() => {
    if (!e[a]) return [];
    const t = [], s = e[h], r = e[o];
    if (t.push(s), S <= 7)
      for (let d = s + 1; d <= r; d++)
        t.push(d);
    else {
      const d = e[a] < e[h] + 4, G = e[a] > e[o] - 4;
      let b = Math.max(s + 1, e[a] - (d ? 2 : 1)), E = Math.min(r - 1, e[a] + (G ? 2 : 1));
      e[a] <= s + 3 ? E = s + 4 : e[a] >= r - 3 && (b = r - 4), q.current = E, U.current = b, b > s + 1 && t.push(i);
      for (let B = b; B <= E; B++)
        t.push(B);
      E < r - 1 && t.push(i), t.push(r);
    }
    return t;
  }, [e, S]), z = (t) => {
    u((s) => (s.set(a, t), s)), x();
  }, A = () => {
    u((t) => (t.set(m, e[m] + 1), t)), x();
  }, y = (t) => {
    u((s) => (s.set(m, e[m] - 1), t && s.set(a, t), s)), x();
  }, J = () => {
    e[a] === e[o] ? A() : (u((t) => (t.set(a, e[a] + 1), t)), x());
  }, K = () => {
    e[a] === e[h] ? y(e[a] - 1) : (u((t) => (t.set(a, e[a] - 1), t)), x());
  }, Q = _((t) => ({ width: `${j.max(t).toString().length}ch` }), []), V = _(
    (t) => {
      const s = e[M] / e[$], r = j.max(t);
      return { minWidth: `${j.min([7, r, s]) * 40}px` };
    },
    [e]
  );
  return C(() => {
    if (parseInt(D.get(a)) !== e[a]) {
      const t = document.getElementById(F);
      t && t.scrollTo({
        top: 0
      });
    }
  }, [e, D, F]), /* @__PURE__ */ l.jsx("div", { className: "pagination", children: e.isNewResponse && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "pagination-items-count", children: [
      "Showing ",
      e[Y],
      " - ",
      e[f]
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "pagination-navigation", children: [
      /* @__PURE__ */ l.jsx(
        p,
        {
          id: "pagination-navigate-double-prev-btn",
          className: "pagination-navigate-btn pagination-navigate-prev-btn",
          onClick: () => y(),
          tooltipText: n.prevDoubleBtn ? "" : H,
          disabled: n.prevDoubleBtn,
          children: /* @__PURE__ */ l.jsx(Z, {})
        }
      ),
      /* @__PURE__ */ l.jsx(
        p,
        {
          id: "pagination-navigate-prev-btn",
          className: "pagination-navigate-btn pagination-navigate-prev-btn",
          onClick: () => K(),
          tooltipText: n.prevBtn ? "" : "Previous page",
          disabled: n.prevBtn,
          children: /* @__PURE__ */ l.jsx(O, {})
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "pagination-pages",
          ref: I,
          style: V(T),
          children: T.map(
            (t, s) => t && /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-testid": t === i ? "pagination-dots" : `pagination-page-${t}`,
                onClick: t !== e[a] ? () => z(t) : null,
                className: W(
                  "pagination-btn",
                  t !== i && "pagination-page-btn",
                  t === i && "pagination-dots",
                  t === e[a] && "pagination-btn_active"
                ),
                disabled: t === i,
                children: /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: W("pagination-page-number"),
                    style: Q(T, t, s),
                    children: t
                  }
                )
              },
              s
            )
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        p,
        {
          id: "pagination-navigate-next-btn",
          className: "pagination-navigate-btn",
          onClick: () => J(),
          tooltipText: n.nextBtn ? "" : "Next page",
          disabled: n.nextBtn,
          children: /* @__PURE__ */ l.jsx(O, {})
        }
      ),
      /* @__PURE__ */ l.jsx(
        p,
        {
          id: "pagination-navigate-next-double-btn",
          className: "pagination-navigate-btn",
          onClick: () => A(),
          tooltipText: n.nextDoubleBtn && g ? g : n.nextDoubleBtn ? "" : `Load page ${e[o] + 1}+`,
          disabled: n.nextDoubleBtn,
          children: /* @__PURE__ */ l.jsx(Z, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "pagination-items-selector" })
  ] }) });
};
le.propTypes = {
  closeParamName: v.string,
  disableNextDoubleBtn: v.bool,
  disabledNextDoubleBtnTooltip: v.string,
  paginationConfig: se.isRequired,
  selectedItemName: v.string,
  tableId: v.string
};
export {
  le as P
};
//# sourceMappingURL=Pagination-DsTIZ30r.mjs.map
