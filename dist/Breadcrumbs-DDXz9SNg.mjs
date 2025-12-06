import { j as a, c as Z, bu as re, bv as te, P as e, y as ie, a as ce, b as oe, D as ne, L as le, dG as ee, g as y, b7 as v, A as M, dv as D, dE as G, aT as F, aV as J, aX as U, eK as P, er as H, fN as K, bE as V, bt as W, bc as Q } from "./main-CTYpZ6Nf.mjs";
import de, { forwardRef as me, useRef as I, useMemo as f, useCallback as X, useEffect as z, useState as w } from "react";
import { Link as se, useParams as be, useLocation as pe } from "react-router-dom";
import { useSelector as ue } from "react-redux";
import { a as _e, S as fe } from "./search-CsL7YQlT.mjs";
import { S as Y, s as je } from "./checkmark-328tzSAb.mjs";
import { g as Ne } from "./projects-Cp4BQIu-.mjs";
const C = me(
  ({
    link: t,
    list: T = [],
    onClick: R = () => {
    },
    screen: c = "",
    searchValue: g,
    setSearchValue: p,
    selectedItem: u,
    tab: d = "",
    withSearch: n = !1
  }, o) => /* @__PURE__ */ a.jsxs("div", { className: "breadcrumbs__dropdown-wrapper", "data-testid": "breadcrumbs-dropdown", children: [
    n && /* @__PURE__ */ a.jsxs("div", { className: "breadcrumbs__dropdown-search", "data-testid": "breadcrumbs-search", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "input",
          onChange: (s) => p(s.target.value),
          placeholder: "Type to search",
          type: "text",
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ a.jsx(_e, {})
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "breadcrumbs__dropdown", ref: o, children: T.filter(
      (s) => s.id.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())
    ).map((s) => {
      const i = u === s.id, r = Z(
        "breadcrumbs__dropdown-item",
        "data-ellipsis",
        i && "breadcrumbs__dropdown-item_selected"
      );
      return !s.hidden && (s.link ? /* @__PURE__ */ a.jsxs(
        "a",
        {
          href: s.link,
          id: s.id,
          "data-testid": `breadcrumbs-dropdown-item-${s.id}`,
          className: r,
          children: [
            /* @__PURE__ */ a.jsx("span", { children: s.label }),
            i && /* @__PURE__ */ a.jsx(Y, { className: "checkmark" })
          ]
        },
        s.id
      ) : /* @__PURE__ */ a.jsxs(
        se,
        {
          to: s.linkTo || `${t}/${s.id}${c ? `/${c}` : ""}${d ? `/${d}` : ""}`,
          onClick: (b) => {
            i ? b.preventDefault() : R(b);
          },
          id: s.id,
          "data-testid": `breadcrumbs-dropdown-item-${s.id}`,
          className: r,
          children: [
            /* @__PURE__ */ a.jsx(re, { template: /* @__PURE__ */ a.jsx(te, { text: s.label }), children: s.label }),
            i && /* @__PURE__ */ a.jsx(Y, { className: "checkmark" })
          ]
        },
        s.id
      ));
    }) })
  ] })
);
C.displayName = "BreadcrumbsDropdown";
C.propTypes = {
  link: e.string.isRequired,
  list: e.arrayOf(e.object).isRequired,
  onClick: e.func,
  screen: e.string,
  searchValue: e.string.isRequired,
  selectedItem: e.string.isRequired,
  setSearchValue: e.func.isRequired,
  tab: e.string,
  withSearch: e.bool
};
const B = de.forwardRef(
  ({
    index: t,
    mlrunScreens: T,
    onClick: R,
    params: c,
    projectsList: g,
    searchValue: p,
    setSearchValue: u,
    setShowProjectsList: d,
    setShowScreensList: n,
    showProjectsList: o,
    showScreensList: s,
    urlPart: i,
    urlParts: r
  }, b) => {
    const _ = I(), l = I(), m = f(() => Object.values(c ?? {}).includes(i), [i, c]), j = f(
      () => m ? i : i.charAt(0).toUpperCase() + i.slice(1),
      [i, m]
    ), N = f(
      () => `/${r.pathItems.slice(0, t + 1).join("/")}`,
      [t, r.pathItems]
    ), S = f(
      () => t === r.pathItems.length - 1,
      [t, r.pathItems.length]
    ), E = Z(
      "breadcrumbs__separator",
      (r.pathItems[t + 1] === r.screen?.id && !m || r.pathItems[t + 1] === c.projectName) && "breadcrumbs__separator_tumbler"
    ), k = (h) => {
      o && d(!1), s && n(!1), h.current.classList.remove("breadcrumbs__separator_active");
    }, L = X(
      (h) => {
        if (b.current && !b.current.contains(h.target)) {
          const [A] = document.getElementsByClassName("breadcrumbs__separator_active");
          A && A.classList.remove("breadcrumbs__separator_active"), s && n(!1), o && d(!1);
        }
        u("");
      },
      [
        b,
        u,
        d,
        n,
        o,
        s
      ]
    ), q = X(() => {
      je(_, `#${c.projectName}`, p);
    }, [c.projectName, _, p]);
    z(() => {
      o && _.current && q();
    }, [o, q, _]), z(() => (window.addEventListener("click", L), () => {
      window.removeEventListener("click", L);
    }), [L]);
    const ae = (h, A) => {
      const x = !!T.find((O) => O.label === h);
      if (x || h === c.projectName) {
        const [O] = document.getElementsByClassName("breadcrumbs__separator_active");
        O && !A.current.classList.contains("breadcrumbs__separator_active") && O.classList.remove("breadcrumbs__separator_active"), x && (n(($) => !$), o && d(!1)), h === c.projectName && (d(($) => !$), s && n(!1)), A.current.classList.toggle("breadcrumbs__separator_active");
      }
    };
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: S ? /* @__PURE__ */ a.jsx(
      "li",
      {
        "data-testid": "breadcrumbs-last-item",
        className: "breadcrumbs__item",
        children: j
      },
      `${t}${i}`
    ) : [
      /* @__PURE__ */ a.jsx("li", { className: "breadcrumbs__item", children: /* @__PURE__ */ a.jsx(se, { to: N, onClick: R, children: j }) }, `${t}${i}`),
      /* @__PURE__ */ a.jsxs("li", { className: "breadcrumbs__item", children: [
        /* @__PURE__ */ a.jsx(
          ie,
          {
            className: E,
            id: "separator",
            ref: l,
            onClick: () => ae(r.pathItems[t + 1], l),
            children: /* @__PURE__ */ a.jsx(fe, {})
          }
        ),
        s && r.pathItems[t + 1] === r.screen?.label && /* @__PURE__ */ a.jsx(
          C,
          {
            link: N,
            list: T,
            onClick: () => k(l),
            selectedItem: r.screen?.id,
            searchValue: p,
            setSearchValue: u
          }
        ),
        o && r.pathItems[t + 1] === c.projectName && /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(
          C,
          {
            link: N,
            list: g,
            onClick: () => k(l),
            ref: _,
            screen: r.screen?.id,
            selectedItem: c.projectName,
            searchValue: p,
            setSearchValue: u,
            tab: r.tab?.id,
            withSearch: !0
          }
        ) })
      ] }, t)
    ] });
  }
);
B.displayName = "BreadcrumbsStep";
B.propTypes = {
  index: e.number.isRequired,
  mlrunScreens: e.arrayOf(e.object).isRequired,
  onClick: e.func,
  params: e.object.isRequired,
  projectsList: e.arrayOf(e.object).isRequired,
  searchValue: e.string.isRequired,
  setSearchValue: e.func.isRequired,
  setShowProjectsList: e.func.isRequired,
  setShowScreensList: e.func.isRequired,
  showProjectsList: e.bool.isRequired,
  showScreensList: e.bool.isRequired,
  urlPart: e.string.isRequired,
  urlParts: e.shape({
    pathItems: e.arrayOf(e.string).isRequired,
    screen: e.shape({
      id: e.string,
      label: e.string
    }),
    tab: e.shape({
      id: e.string
    })
  }).isRequired
};
const he = (t) => t.projectName ? [
  {
    label: "Project monitoring",
    id: ce
  },
  {
    label: "Quick actions",
    id: oe,
    hidden: !0
  },
  { label: "Feature store", id: "feature-store" },
  { label: "Datasets", id: "datasets" },
  { label: "Documents", id: ne },
  { label: "LLM prompts", id: le },
  { label: "Artifacts", id: "files" },
  { label: "Models", id: "models" },
  { label: "Monitoring app", id: ee },
  { label: "Jobs and workflows", id: "jobs" },
  { label: "ML functions", id: "functions" },
  {
    label: "Real-time functions",
    id: "Real-time functions",
    link: y(`/projects/${t.projectName}/functions`)
  },
  {
    label: "API gateways",
    id: "API gateways",
    link: y(`/projects/${t.projectName}/api-gateways`)
  },
  {
    label: "Alerts",
    id: M,
    linkTo: `/${v}/${t.projectName}/${M}`
  },
  {
    label: "Settings",
    id: "settings"
  }
] : [
  {
    label: "Alerts monitoring",
    id: D,
    linkTo: `/${v}/*/${D}`
  },
  {
    label: "Jobs monitoring",
    id: G,
    linkTo: `/${v}/*/${G}`
  }
], Te = () => [
  {
    label: F,
    id: F
  },
  {
    label: J,
    id: J
  },
  {
    label: U,
    id: U
  },
  {
    label: P,
    id: P
  },
  {
    label: H,
    id: H
  },
  {
    label: K,
    id: K
  },
  {
    label: V,
    id: V
  },
  {
    label: W,
    id: W
  },
  {
    label: Q,
    id: Q
  }
], Re = ({ onClick: t = () => {
} }) => {
  const [T, R] = w(""), [c, g] = w(!1), [p, u] = w(!1), d = I(), n = be(), o = pe(), s = ue((l) => l.projectStore), i = f(() => Ne(s.projectsNames.data), [s.projectsNames.data]), r = f(() => he(n), [n]), b = f(() => Te(), []), _ = f(() => {
    if (n.projectName) {
      const [l, m, j] = o.pathname.split("/").slice(1, 4), N = r.find((E) => E.id === j);
      let S = b.find(
        (E) => o.pathname.split("/").slice(3).find((k) => k === E.id)
      );
      return N.id === ee && (S = {}), {
        pathItems: [l, m, N?.label || j],
        screen: N,
        tab: S
      };
    } else {
      const [l] = o.pathname.split("/").slice(3, 4), m = r.find((j) => j.id === l);
      return {
        pathItems: [v, m?.label || l],
        screen: m
      };
    }
  }, [o.pathname, n.projectName, r, b]);
  return /* @__PURE__ */ a.jsx("nav", { "data-testid": "breadcrumbs", className: "breadcrumbs", ref: d, children: /* @__PURE__ */ a.jsx("ul", { className: "breadcrumbs__list", children: _.pathItems.map((l, m) => /* @__PURE__ */ a.jsx(
    B,
    {
      index: m,
      mlrunScreens: r,
      onClick: t,
      params: n,
      projectsList: i,
      ref: d,
      searchValue: T,
      setSearchValue: R,
      setShowProjectsList: u,
      setShowScreensList: g,
      showProjectsList: p,
      showScreensList: c,
      urlPart: l,
      urlParts: _
    },
    m
  )) }) });
};
Re.propTypes = {
  onClick: e.func
};
export {
  Re as B
};
//# sourceMappingURL=Breadcrumbs-DDXz9SNg.mjs.map
