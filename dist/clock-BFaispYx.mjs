import * as D from "react";
import { useCallback as I, useEffect as f, useState as k, useRef as M } from "react";
import { useBlocker as Z } from "react-router-dom";
import { m as Y, p as z, at as Q, K as X, e8 as x, bF as T, a0 as N, $ as v, bY as O, du as m, dF as P, cu as j, ds as G, dq as H, dr as V, ky as ee, kz as se, dg as ae, dD as te, b3 as J, b4 as b, ip as le, iq as ie, kA as ne, io as re, im as oe, ir as de, iv as ce, iu as ue, is as he, it as be, ev as pe, eJ as Te, c as _e, j as p, bM as Ee, b$ as ge, dV as Ie, P as i } from "./main-CTYpZ6Nf.mjs";
import { I as Ae } from "./Input-7Hc9IEQ_.mjs";
import { a as fe } from "./search-CsL7YQlT.mjs";
const Ne = (s, t, d, l) => {
  s ? Y(X, {
    cancelButton: {
      label: "Cancel",
      handler: () => {
        d && d();
      },
      variant: Q
    },
    confirmButton: {
      handler: () => {
        t && t();
      },
      label: "OK",
      variant: z
    },
    header: "Are you sure?",
    message: "All changes will be lost"
  }) : t();
}, Be = (s, t) => {
  const d = I(({ currentLocation: c, nextLocation: n }) => {
    const { initialValues: E, values: C } = t.getState(), a = x(E, C);
    return !a && c.pathname !== n.pathname && s(), a && c.pathname !== n.pathname;
  }, [s, t]);
  let l = Z(d);
  const r = I(() => {
    s(), t.reset(t.initialValues), l.proceed?.();
  }, [l, s, t]), A = I(() => {
    l.reset?.();
  }, [l]), _ = I(() => {
    const { initialValues: c, values: n } = t.getState(), E = x(c, n);
    Ne(E, r, A);
  }, [t, r, A]);
  return f(() => {
    l.state === "blocked" && _();
  }, [l, _]), { handleCloseModal: _, resolveModal: r };
}, Re = [
  { label: "All", id: T, status: T },
  { label: "Aborted", id: j, status: j },
  { label: "Aborting", id: G, status: G },
  { label: "Completed", id: m, status: m },
  { label: "Error", id: N, status: N },
  { label: "Running", id: O, status: O },
  { label: "Pending", id: H, status: H },
  { label: "Pending retry", id: V, status: V }
], De = [
  { label: "All", id: T, status: T },
  { label: "Error", id: N, status: N },
  { label: "Failed", id: v, status: v },
  { label: "Running", id: O, status: O },
  { label: "Completed", id: m, status: m },
  { label: "Terminating", id: P, status: P }
], ke = (s) => [
  { label: "All", id: T },
  { label: "Job", id: ae },
  { label: "Workflow", id: te, hidden: s !== b },
  {
    label: "Nuclio",
    id: `${le},${ie}`,
    hidden: [J, b].includes(s)
  },
  {
    label: "Application",
    id: ne,
    hidden: [J, b].includes(s)
  },
  {
    label: "Serving",
    id: re,
    hidden: [J, b].includes(s)
  },
  { label: "Spark", id: oe },
  { label: "Horovod", id: de },
  { label: "Dask", id: ce },
  { label: "Databricks", id: ue },
  { label: "Local", id: he, hidden: s === b },
  { label: "Handler", id: be, hidden: s === b }
], Je = [
  {
    id: T,
    label: "All"
  },
  {
    id: ee,
    label: "Real-time"
  },
  {
    id: se,
    label: "Batch"
  }
], Ke = (s = !1) => [
  { label: "latest", id: pe },
  ...s ? [] : [{ label: "All tags", id: Te }]
], Oe = ({
  className: s = "",
  disabled: t = !1,
  id: d = "search",
  matches: l = [],
  onChange: r,
  onFocus: A = () => {
  },
  placeholder: _ = "",
  searchWhileTyping: c = !1,
  value: n = "",
  withoutBorder: E = !1,
  wrapperClassName: C = ""
}) => {
  const [a, L] = k(n ?? ""), [K, S] = k(""), [y, u] = k(!1), h = M(), w = M(), { width: B } = h?.current?.getBoundingClientRect() || {}, $ = _e("search-container", s), g = I(
    (e) => {
      (e.type === "click" && h.current && !h.current.contains(e.target) || e.type === "scroll" && w.current && !w?.current.contains(e.target)) && u(!1);
    },
    [h]
  );
  f(() => {
    l.length > 0 && a.length > 0 && S(
      l.find((e) => e.toLocaleLowerCase().includes(a.toLocaleLowerCase())) ?? ""
    );
  }, [l, a]), f(() => (window.addEventListener("click", g), window.addEventListener("scroll", g, !0), () => {
    window.removeEventListener("click", g), window.removeEventListener("scroll", g, !0);
  }), [g]);
  const W = (e) => {
    e.length === 0 && K.length > 0 && S(""), r(e), u(!0), L(Ie(e));
  }, U = (e) => {
    S(""), L(e), r(e), u(!1);
  }, q = (e) => {
    e.stopPropagation(), a.length > 0 && (r(a), u(!1));
  };
  return f(() => {
    a.length > 0 && n !== a && L(n);
  }, [a, n]), /* @__PURE__ */ p.jsxs(
    "div",
    {
      "data-testid": "search-container",
      className: $,
      ref: h,
      onClick: () => {
        u(!0);
      },
      children: [
        /* @__PURE__ */ p.jsx(
          Ae,
          {
            className: "search-input",
            disabled: t,
            id: d,
            wrapperClassName: C,
            density: "dense",
            placeholder: _,
            inputIcon: /* @__PURE__ */ p.jsx(fe, {}),
            iconClass: "search-icon",
            iconOnClick: q,
            onChange: W,
            onFocus: A,
            focused: y,
            onKeyDown: (e) => {
              e.key === "Enter" && !c && a !== "" && (r(a), u(!1));
            },
            value: a,
            withoutBorder: E
          }
        ),
        l.length > 0 && K.length > 0 && y && /* @__PURE__ */ p.jsx(
          Ee,
          {
            ref: w,
            className: "search-dropdown",
            headerIsHidden: !0,
            customPosition: {
              element: h,
              position: "bottom-right"
            },
            style: {
              maxWidth: `${B < 400 ? 400 : B}px`,
              minWidth: `${B}px`
            },
            children: /* @__PURE__ */ p.jsx("ul", { "data-testid": "search-matches", className: "search-matches", children: l.reduce((e, o, F) => (o?.toLocaleLowerCase().includes(a.toLocaleLowerCase()) && e.push(
              /* @__PURE__ */ p.jsx(
                ge,
                {
                  item: {
                    id: o,
                    label: o,
                    labelHtml: o.replace(
                      new RegExp(a.toLocaleLowerCase(), "gi"),
                      (R) => R && `<b>${R}</b>`
                    )
                  },
                  name: o,
                  onClick: () => U(o),
                  tabIndex: F
                },
                o + F
              )
            ), e), []) })
          }
        )
      ]
    }
  );
};
Oe.propTypes = {
  className: i.string,
  disabled: i.bool,
  id: i.string,
  matches: i.arrayOf(i.string),
  onChange: i.func.isRequired,
  onFocus: i.func,
  placeholder: i.string,
  searchWhileTyping: i.bool,
  value: i.string,
  withoutBorder: i.bool,
  wrapperClassName: i.string
};
const ye = (s) => /* @__PURE__ */ D.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...s }, /* @__PURE__ */ D.createElement("path", { d: "M5.994 0C2.682 0 0 2.688 0 6C0 9.312 2.682 12 5.994 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 5.994 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 3.348 3.348 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 8.652 8.652 10.8 6 10.8Z", fill: "white" }), /* @__PURE__ */ D.createElement("path", { d: "M6.50003 3H5.40002V6.6L8.55002 8.49L9.20003 7.602L6.50003 6V3Z", fill: "white" }));
export {
  ye as S,
  Oe as a,
  Ke as b,
  ke as g,
  Re as j,
  Je as m,
  Be as u,
  De as w
};
//# sourceMappingURL=clock-BFaispYx.mjs.map
