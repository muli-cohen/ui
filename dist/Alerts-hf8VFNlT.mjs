import { aY as K, ge as X, dx as b, gf as f, gg as E, gh as A, gi as x, j as e, a_ as C, es as $, b2 as P, bF as R, dw as B, dy as v, b0 as I, dz as F, e as G, gj as ee, gk as y, P as k, aO as se, c5 as ae, gl as te, dv as Y, A as q, i as re } from "./main-CTYpZ6Nf.mjs";
import { useMemo as T, useCallback as U, useEffect as _, useState as ne } from "react";
import { useLocation as oe, useNavigate as le, useParams as J } from "react-router-dom";
import { useSelector as O, useDispatch as ie } from "react-redux";
import { A as ce } from "./ActionBar-C8Jl3Xmo.mjs";
import { M as me } from "./MultiSelectFilter-B4v2ovYm.mjs";
import { g as pe } from "./projects-Cp4BQIu-.mjs";
import { a9 as de, aa as he, ab as fe, ac as ge, ad as ue, ae as je, u as Ee, af as Ae, ag as xe, ah as Pe, ai as Te, aj as Ne, ak as Se } from "./Table-DB12oa-o.mjs";
import { B as be } from "./Breadcrumbs-DDXz9SNg.mjs";
import { P as Re } from "./Pagination-DsTIZ30r.mjs";
import { u as ve } from "./usePagination.hook-EDISVLLo.mjs";
const V = ({ isAlertsPage: n, isCrossProjects: g }) => {
  const o = K(), {
    values: { [b]: t }
  } = X(), l = oe(), c = O((s) => s.projectStore), p = T(() => {
    const s = pe(c.projectsNames.data);
    return [...de, ...s].map((r) => ({
      ...r,
      label: r.label
    }));
  }, [c.projectsNames.data]), m = U((s) => {
    const r = {
      [R]: [f],
      [B]: [f],
      [F]: [E],
      [v]: [A, x, f]
    };
    return [f, E, A, x].filter((i) => !(r[s] ?? []).includes(i));
  }, []);
  _(() => {
    m(t).forEach((s) => o.change(s, ""));
  }, [t, o, m]);
  const a = (s, r) => {
    o.change(r, s || "");
  }, d = (s) => {
    const r = Object.fromEntries(new URLSearchParams(l.search));
    o.change(
      y,
      r[b] === s || t === R && r[y] ? r[y] : R
    );
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    g && /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      C,
      {
        label: "Project name",
        name: $,
        options: p,
        preventWidthOverflow: !0
      }
    ) }),
    n && /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        C,
        {
          label: "Entity type",
          name: b,
          options: he
        }
      ),
      /* @__PURE__ */ e.jsx(P, { handler: d, name: b })
    ] }),
    (t === R || t === B || t === v) && /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        I,
        {
          label: t === v ? "Endpoint ID" : "Entity ID",
          name: f,
          placeholder: "Search by ID",
          tip: "Search for case insensitive, full or partial strings"
        }
      ),
      /* @__PURE__ */ e.jsx(P, { handler: (s) => a(s, f), name: f })
    ] }),
    t === F && /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        I,
        {
          label: G.upperFirst(F),
          name: E,
          placeholder: "Search by job name",
          tip: "Search for case insensitive, full or partial strings"
        }
      ),
      /* @__PURE__ */ e.jsx(P, { handler: (s) => a(s, E), name: E })
    ] }),
    t === v && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ e.jsx(
          I,
          {
            label: "Endpoint Application",
            name: A,
            placeholder: "Search by application",
            tip: "Search for case insensitive, full or partial strings"
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            handler: (s) => a(s, A),
            name: A
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ e.jsx(
          I,
          {
            label: "Endpoint Result",
            name: x,
            placeholder: "Search by result",
            tip: "Search for case insensitive, full or partial strings"
          }
        ),
        /* @__PURE__ */ e.jsx(
          P,
          {
            handler: (s) => a(s, x),
            name: x
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(me, { optionsList: fe, name: ee }) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      C,
      {
        label: "Event type",
        name: y,
        options: ge(t),
        preventWidthOverflow: !0
      }
    ) })
  ] });
};
V.propTypes = {
  isAlertsPage: k.bool.isRequired,
  isCrossProjects: k.bool.isRequired
};
const Ie = (n, g) => {
  const {
    abortControllerRef: o,
    alerts: t,
    lastCheckedAlertIdRef: l,
    paginationConfigAlertsRef: c,
    refreshAlerts: p,
    requestErrorMessage: m,
    setAlerts: a,
    params: d
  } = ue(n, g), [s, r, u, i] = ve({
    content: t ?? [],
    filters: n,
    refreshContent: p,
    paginationConfigRef: c,
    resetPaginationTrigger: d.projectName
  });
  return {
    abortControllerRef: o,
    alerts: t,
    handleRefreshAlerts: s,
    lastCheckedAlertIdRef: l,
    paginatedAlerts: r,
    paginationConfigAlertsRef: c,
    refreshAlerts: p,
    requestErrorMessage: m,
    searchParams: u,
    setAlerts: a,
    setSearchParams: i
  };
}, Ye = () => {
  const [n, g] = ne({}), o = O((h) => h.alertsStore), t = O((h) => h.filtersStore), l = ie(), c = le(), { id: p } = J(), m = J(), a = T(() => p === "*", [p]), d = T(() => je(), []), s = Ee(
    d,
    Se
  ), {
    alerts: r,
    handleRefreshAlerts: u,
    lastCheckedAlertIdRef: i,
    paginatedAlerts: j,
    paginationConfigAlertsRef: N,
    requestErrorMessage: W,
    searchParams: L,
    setSearchParams: S
  } = Ie(s, !0);
  se({
    content: j,
    selectedItem: n,
    isAllVersions: !0
  });
  const w = T(() => j.map((h) => Ae(h, a)), [a, j]);
  _(() => {
    l(ae());
  }, [l, a]);
  const z = () => {
    g({});
  }, D = U(
    (h, H, Q, Z) => {
      i.current && xe(h.uid, H, Z, Q, l);
    },
    [l, i]
  ), M = T(
    () => Pe(n, D, a),
    [D, a, n]
  );
  return _(() => {
    Te({
      alertId: m.alertId,
      alerts: r,
      dispatch: l,
      isCrossProjects: a,
      lastCheckedAlertIdRef: i,
      navigate: c,
      paginatedAlerts: j,
      paginationConfigAlertsRef: N,
      project: m.project,
      searchParams: L,
      setSearchParams: S,
      setSelectedAlert: g
    });
  }, [
    r,
    l,
    a,
    i,
    c,
    j,
    N,
    m,
    L,
    S,
    w
  ]), _(() => {
    G.isEmpty(n) && (i.current = null);
  }, [i, n]), /* @__PURE__ */ e.jsxs("div", { className: "content-wrapper", children: [
    /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(be, {}) }),
    /* @__PURE__ */ e.jsx("div", { className: "content", children: /* @__PURE__ */ e.jsxs("div", { className: "table-container alerts-container", children: [
      /* @__PURE__ */ e.jsx("div", { className: "content__action-bar-wrapper", children: /* @__PURE__ */ e.jsx(
        ce,
        {
          autoRefreshIsStopped: !0,
          closeParamName: a ? Y : q,
          filterMenuName: te,
          filters: s,
          filtersConfig: d,
          handleRefresh: u,
          setSearchParams: S,
          withRefreshButton: !0,
          withoutExpandButton: !0,
          children: /* @__PURE__ */ e.jsx(V, { isAlertsPage: !0, isCrossProjects: a })
        }
      ) }),
      o.loading && /* @__PURE__ */ e.jsx(re, {}),
      o.loading ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          Ne,
          {
            alertsFiltersConfig: d,
            alertsStore: o,
            filters: s,
            filtersStore: t,
            handleCancel: z,
            handleRefreshAlerts: u,
            isCrossProjects: a,
            pageData: M,
            paginationConfigAlertsRef: N,
            requestErrorMessage: W,
            selectedAlert: n,
            setSearchParams: S,
            tableContent: w
          }
        ),
        /* @__PURE__ */ e.jsx(
          Re,
          {
            closeParamName: a ? Y : q,
            page: M.page,
            paginationConfig: N.current
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  Ye as default
};
//# sourceMappingURL=Alerts-hf8VFNlT.mjs.map
