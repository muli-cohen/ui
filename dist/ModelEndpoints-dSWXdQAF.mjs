import { aY as J, j as t, a_ as K, bA as W, b0 as X, b1 as N, b2 as Z, ah as R, bB as ee, az as te, aN as ae, bC as oe, ay as se, bD as ne, bE as l, i as re, be as ie } from "./main-CTYpZ6Nf.mjs";
import { useState as S, useRef as L, useMemo as i, useCallback as f, useEffect as g } from "react";
import { useSelector as P, useDispatch as le } from "react-redux";
import { useParams as de, useNavigate as ce, useLocation as me, useSearchParams as ue } from "react-router-dom";
import { A as pe } from "./ActionBar-C8Jl3Xmo.mjs";
import { A as he } from "./ArtifactsTableRow-D8HBCM6c.mjs";
import { m as fe } from "./clock-BFaispYx.mjs";
import { M as ge } from "./ModelsPageTabs-B77C5auf.mjs";
import { N as Ee } from "./StatsCard-Cm7Pku2T.mjs";
import { u as be, B as je, E as xe, j as Me, T as _e } from "./Table-DB12oa-o.mjs";
import { u as we, a as Ne, g as Re, c as Se, f as D } from "./ModelsPage.context-BAALYiY9.mjs";
import { a as De } from "./link-helper.util-CuUJj7TV.mjs";
import { u as Ce, i as Te } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { u as ve } from "./useInitialTableFetch.hook-D3_Uekdv.mjs";
const He = () => {
  const E = J(), b = (n) => {
    E.change(N, n || "");
  };
  return /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx("div", { className: "form-row", children: /* @__PURE__ */ t.jsx(K, { label: "Mode", name: W, options: fe }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ t.jsx(
        X,
        {
          label: "Labels",
          name: N,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ t.jsx(Z, { name: N, handler: b })
    ] })
  ] });
}, Ge = () => {
  const [E, b] = S(""), [n, j] = S([]), [s, d] = S({}), x = P((e) => e.artifactsStore), F = P((e) => e.filtersStore), a = de(), c = ce(), C = me(), o = le(), M = L(new AbortController()), B = L(null), [, y] = ue(), _ = be(D), { handleMonitoring: m, toggleConvertedYaml: T, frontendSpec: u } = we(), O = i(
    () => R("--modelEndpointsRowHeight"),
    []
  ), q = i(
    () => R("--modelEndpointsRowHeightExtended"),
    []
  ), k = i(
    () => R("--modelEndpointsHeaderRowHeight"),
    []
  ), p = i(
    () => Ne(
      s,
      u.model_monitoring_dashboard_url,
      m
    ),
    [u.model_monitoring_dashboard_url, m, s]
  ), v = i(
    () => Re(
      u.model_monitoring_dashboard_url,
      m,
      T,
      s,
      o
    ),
    [
      o,
      m,
      s,
      T,
      u.model_monitoring_dashboard_url
    ]
  ), h = f(
    (e) => {
      M.current = new AbortController(), o(
        ee({
          project: a.projectName,
          filters: e,
          config: {
            ui: {
              controller: M.current,
              setRequestErrorMessage: b
            }
          },
          params: {
            latest_only: "True"
          }
        })
      ).unwrap().then((r) => {
        r && j(r);
      });
    },
    [o, a.projectName]
  ), z = f(
    (e) => (j([]), d({}), h(e)),
    [h]
  ), H = f(
    (e) => {
      Se(o, {}, e).then(d);
    },
    [o]
  ), U = f(
    (e) => {
      h(e), o(te({ groupBy: ae }));
    },
    [o, h]
  );
  ve({ fetchData: U, filters: _ }), g(() => () => {
    j([]), o(oe()), d({}), M.current.abort(se);
  }, [o, a.projectName]), g(() => () => {
    o(ne());
  }, [o]), g(() => {
    if (a.name && n.length > 0) {
      const e = n.find((r) => r.metadata?.uid === a.tag);
      e ? e.metadata.uid !== s?.metadata?.uid && H(e) : c(
        `/projects/${a.projectName}/models/${l}${window.location.search}`,
        { replace: !0 }
      );
    } else
      d({});
  }, [
    o,
    H,
    n,
    c,
    a.name,
    a.projectName,
    a.tag,
    s?.metadata
  ]), g(() => {
    a.name && a.tag && p.details.menu.length > 0 && De(a.tab, p.details.menu, c, C);
  }, [c, C, p.details.menu, a.name, a.tag, a.tab]);
  const w = i(() => n.map(
    (e) => je(e, a.projectName)
  ), [n, a.projectName]), Y = i(() => w[0]?.content ?? [], [w]), { sortTable: $, selectedColumnName: G, getSortingIcon: Q, sortedTableContent: A, sortedTableHeaders: V } = xe({
    headers: Y,
    content: w,
    sortConfig: {
      allowSortBy: ["name", "function"],
      defaultSortBy: "function",
      defaultDirection: "asc"
    }
  }), I = Ce({
    rowsData: {
      content: A,
      selectedItem: s
    },
    heightData: {
      headerRowHeight: k,
      rowHeight: O,
      rowHeightExtended: q
    }
  });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    (x.modelEndpoints.modelEndpointLoading || x.modelEndpoints.loading) && /* @__PURE__ */ t.jsx(re, {}),
    /* @__PURE__ */ t.jsx("div", { className: "models", ref: B, children: /* @__PURE__ */ t.jsxs("div", { className: "table-container", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "content__action-bar-wrapper", children: [
        /* @__PURE__ */ t.jsx(ge, {}),
        /* @__PURE__ */ t.jsx(
          pe,
          {
            filters: _,
            filtersConfig: D,
            handleRefresh: z,
            closeParamName: l,
            setSearchParams: y,
            tab: l,
            withoutExpandButton: !0,
            children: /* @__PURE__ */ t.jsx(He, {})
          }
        )
      ] }),
      x.modelEndpoints.loading ? null : n.length === 0 ? /* @__PURE__ */ t.jsx(
        Ee,
        {
          message: Me(
            _,
            D,
            E,
            ie,
            l,
            F
          )
        }
      ) : /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
        _e,
        {
          actionsMenu: v,
          pageData: p,
          selectedItem: s,
          tab: l,
          tableClassName: "model-endpoints-table",
          tableHeaders: V,
          virtualizationConfig: I,
          sortProps: { sortTable: $, selectedColumnName: G, getSortingIcon: Q },
          children: A.map(
            (e, r) => Te(I, r) && /* @__PURE__ */ t.jsx(
              he,
              {
                actionsMenu: v,
                rowIndex: r,
                rowItem: e,
                selectedItem: s,
                tab: l
              },
              e.data.ui.identifierUnique
            )
          )
        }
      ) })
    ] }) })
  ] });
};
export {
  Ge as default
};
//# sourceMappingURL=ModelEndpoints-dSWXdQAF.mjs.map
