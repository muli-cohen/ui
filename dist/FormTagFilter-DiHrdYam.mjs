import { h8 as D, e as N, ev as b, j as n, iK as W, bM as A, c as G, bu as H, bv as K, P as u } from "./main-CTYpZ6Nf.mjs";
import { useState as x, useRef as E, useLayoutEffect as $, useMemo as z, useEffect as P, useCallback as J } from "react";
import { useSelector as Q } from "react-redux";
import { b as O } from "./clock-BFaispYx.mjs";
import { S as U } from "./exclamation-mark-kRjYDG-V.mjs";
const V = ({ content: _ = null, label: R, name: v, onlyLatestByDefault: l = !1 }) => {
  const { input: o } = D(v), [m, r] = x(!1), [i, c] = x(o.value), [j, F] = x(O(l)), g = E(), T = E(), f = Q((e) => e.filtersStore), [S, k] = x(200);
  $(() => {
    g?.current && k(g?.current.getBoundingClientRect().width);
  }, []);
  const h = z(() => {
    const e = O(l);
    let t = e, s = [];
    if (f.tagOptions?.length > 0) {
      const a = e.map((d) => d.id);
      s = [...e];
      let w = [];
      _ && (w = N.uniq(_.map((d) => d.tag))), t = [
        ...f.tagOptions.reduce((d, p) => (a.includes(p) || (w.includes(p) ? s.push({
          label: p,
          id: p
        }) : d.push({
          label: p,
          id: p
        })), d), [])
      ], s.length > 2 && (s[s.length - 1].className = "page-tag-list");
    }
    return [...s, ...t];
  }, [_, f.tagOptions, l]);
  P(() => {
    N.isEqual(h, f.tagOptions) || F(h);
  }, [f.tagOptions, h]);
  const I = (e) => {
    const t = h.filter((s) => s.label.startsWith(e.target.value));
    o.onChange(e.target.value), c(e.target.value), r(t.length !== 0), F(t);
  }, q = (e, t) => {
    e.stopPropagation(), t.id !== i && (o.onChange(t.id), c(t.id)), r(!1);
  }, C = J(
    (e) => {
      const t = e.path ?? e.composedPath?.(), s = O(l);
      if (!t.includes(g.current) && !T.current.contains(e.target)) {
        if (i.length <= 0)
          o.onChange(b), c(s.find((a) => a.id === b).label);
        else {
          const a = s.find((w) => w.id === i);
          o.onChange(a?.id || i), c(a?.label || i);
        }
        r(!1);
      }
    },
    [o, l, i]
  );
  P(() => {
    if (m)
      return window.addEventListener("mousedown", C), () => {
        window.removeEventListener("mousedown", C);
      };
  }, [m, C]);
  const L = (e) => {
    e.stopPropagation(), r(!1);
  }, M = (e) => {
    e.stopPropagation(), j.length > 0 && (r((t) => !t), i.length === 0 && (o.onChange(b), c(O(l).find((t) => t.id === b).label)));
  };
  return /* @__PURE__ */ n.jsx(W, { name: v, children: () => /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "form-tag-filter",
      ref: g,
      onClick: () => {
        !m && j.length > 0 && r(!0);
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "form-tag-filter__label", onClick: L, children: R }),
        /* @__PURE__ */ n.jsxs("div", { className: "form-tag-filter__input-wrapper", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "form-tag-filter__input",
              value: i,
              title: i?.length >= 14 ? i : null,
              onChange: I,
              onFocus: (e) => {
                e.target.value.length !== 0 && e.target.select();
              }
            }
          ),
          /* @__PURE__ */ n.jsx("div", { className: "form-tag-filter__dropdown-button", onClick: M, children: /* @__PURE__ */ n.jsx(U, {}) })
        ] }),
        m && /* @__PURE__ */ n.jsx(
          A,
          {
            className: "form-tag-filter__dropdown",
            headerIsHidden: !0,
            customPosition: {
              element: g,
              position: "bottom-right"
            },
            ref: T,
            style: { width: `${S}px` },
            children: j.map((e) => {
              const t = G(
                "form-tag-filter__dropdown-item",
                i.length !== 0 && i === e.id && "form-tag-filter__dropdown-item_selected",
                e.className
              );
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  className: t,
                  onClick: (s) => q(s, e),
                  children: /* @__PURE__ */ n.jsx(H, { template: /* @__PURE__ */ n.jsx(K, { text: e.label }), children: /* @__PURE__ */ n.jsx("span", { children: e.label }) })
                },
                e.id
              );
            })
          }
        )
      ]
    }
  ) });
};
V.propTypes = {
  content: u.arrayOf(u.object),
  label: u.string.isRequired,
  name: u.string.isRequired,
  onlyLatestByDefault: u.bool
};
export {
  V as F
};
//# sourceMappingURL=FormTagFilter-DiHrdYam.mjs.map
