import { j as a, er as Re, y as je, P as s, aY as Te, a_ as be, es as O, b2 as H, b0 as X, et as C, b1 as P, eu as Y, ev as ne, ew as x, i as Ee, ex as ie, X as we, an as Fe, ah as G, t as xe, e as ve, ey as v, ez as Ne, af as Ae, cg as Z, V as ee, a2 as Se, eA as _e, eB as ye, eC as Ce, eD as Pe, eE as qe, eF as te, eG as ae, eH as De, aA as k, eI as Oe, ay as Ve, eJ as Le, az as se, aN as Ie } from "./main-CTYpZ6Nf.mjs";
import Me, { useState as q, useRef as re, useMemo as E, useCallback as g, useEffect as y } from "react";
import { useSelector as D, useDispatch as Be } from "react-redux";
import { Link as He, useParams as $, useSearchParams as Ge, useNavigate as ke } from "react-router-dom";
import { S as Ue, N as Ye } from "./StatsCard-Cm7Pku2T.mjs";
import { j as $e, T as ze, u as Qe, N as Je } from "./Table-DB12oa-o.mjs";
import { F as Ke, c as U } from "./createFeatureStoreContent-BZntHXF_.mjs";
import { i as We, u as Xe } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { A as Ze } from "./ActionBar-C8Jl3Xmo.mjs";
import { F as et } from "./FormTagFilter-DiHrdYam.mjs";
import { g as tt } from "./projects-Cp4BQIu-.mjs";
import { F as at, h as oe } from "./features.util-DowT7bP_.mjs";
import { u as st } from "./groupContent.hook-CinwL_Jd.mjs";
import { u as rt } from "./useInitialTableFetch.hook-D3_Uekdv.mjs";
const ce = ({ params: i }) => /* @__PURE__ */ a.jsxs("div", { className: "add-to-feature-vector-header", children: [
  /* @__PURE__ */ a.jsx(
    He,
    {
      to: `/projects/${i.projectName}/feature-store/${Re}`,
      "data-testid": "feature-vector-back-btn",
      children: /* @__PURE__ */ a.jsx(je, { tooltipText: "Go to list", children: /* @__PURE__ */ a.jsx(Ue, {}) })
    }
  ),
  /* @__PURE__ */ a.jsx("h3", { className: "add-to-feature-vector-header__title", children: "Add to feature vector" })
] });
ce.propTypes = {
  params: s.object.isRequired
};
const le = ({ content: i, fetchTags: f }) => {
  const l = Te(), [m, w] = q(""), h = D((o) => o.projectStore), N = $(), u = (o, T) => {
    l.change(T, o || "");
  }, d = (o) => {
    f(o), l.change(Y, ne), w(o);
  };
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ a.jsx(
        be,
        {
          label: "Project",
          name: O,
          options: tt(h.projectsNames.data, N.projectName),
          preventWidthOverflow: !0
        }
      ),
      /* @__PURE__ */ a.jsx(H, { name: O, handler: d })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ a.jsx(X, { label: "Entity", name: C, placeholder: "Search by entity" }),
      /* @__PURE__ */ a.jsx(
        H,
        {
          name: C,
          handler: (o) => u(o, C)
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ a.jsx(
        X,
        {
          label: "Labels",
          name: P,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ a.jsx(
        H,
        {
          name: P,
          handler: (o) => u(o, P)
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsx(et, { content: i, label: "Version tag", name: Y }, m) })
  ] });
};
le.propTypes = {
  content: s.arrayOf(s.object).isRequired,
  fetchTags: s.func.isRequired
};
const z = Me.forwardRef(
  ({
    actionsMenu: i,
    content: f,
    featureStore: l,
    fetchTags: m,
    filters: w,
    filtersConfig: h,
    filtersStore: N,
    handleRefresh: u,
    pageData: d,
    requestErrorMessage: o,
    selectedRowData: T,
    setSearchParams: p,
    tableContent: R,
    tableStore: F,
    toggleRow: t,
    virtualizationConfig: A
  }, V) => {
    const L = $();
    return /* @__PURE__ */ a.jsx("div", { ref: V, className: "add-to-feature-vector content-wrapper", children: /* @__PURE__ */ a.jsxs("div", { className: "content", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "content__action-bar-wrapper", children: [
        /* @__PURE__ */ a.jsx(ce, { params: L }),
        /* @__PURE__ */ a.jsx(
          Ze,
          {
            filters: w,
            filtersConfig: h,
            handleRefresh: u,
            setSearchParams: p,
            tab: x,
            withoutExpandButton: !0,
            children: /* @__PURE__ */ a.jsx(le, { content: f, fetchTags: m })
          }
        )
      ] }),
      (l.loading || l.features.loading) && /* @__PURE__ */ a.jsx(Ee, {}),
      /* @__PURE__ */ a.jsx("div", { className: "table-container", children: l.loading || l.features.loading ? null : f.length === 0 ? /* @__PURE__ */ a.jsx(
        Ye,
        {
          message: $e(
            w,
            h,
            o,
            ie,
            x,
            x
          )
        }
      ) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(
        ze,
        {
          actionsMenu: i,
          hideActionsMenu: F.isTablePanelOpen,
          pageData: d,
          tab: x,
          tableClassName: "features-table",
          tableHeaders: R[0]?.content ?? [],
          virtualizationConfig: A,
          children: R.map(
            (S, n) => We(A, n) && /* @__PURE__ */ a.jsx(
              Ke,
              {
                actionsMenu: i,
                hideActionsMenu: F.isTablePanelOpen,
                mainRowItemsCount: 2,
                pageTab: x,
                rowIndex: n,
                rowItem: S,
                selectedRowData: T,
                toggleRow: t
              },
              n
            )
          )
        }
      ) }) })
    ] }) });
  }
);
z.displayName = "AddToFeatureVectorView";
z.propTypes = {
  actionsMenu: s.array.isRequired,
  content: s.arrayOf(s.object).isRequired,
  featureStore: s.object.isRequired,
  fetchTags: s.func.isRequired,
  filters: s.object.isRequired,
  filtersConfig: s.object.isRequired,
  filtersStore: s.object.isRequired,
  handleRefresh: s.func.isRequired,
  pageData: s.object.isRequired,
  requestErrorMessage: s.string.isRequired,
  selectedRowData: s.object.isRequired,
  setSearchParams: s.func.isRequired,
  tableContent: s.arrayOf(s.object).isRequired,
  tableStore: s.object.isRequired,
  toggleRow: s.func.isRequired,
  virtualizationConfig: we.isRequired
};
const ot = (i = "") => ({
  [Fe]: { label: "Name:", initialValue: "" },
  [Y]: { label: "Tag:", initialValue: ne, isModal: !0 },
  [C]: { label: "Entity:", initialValue: "", isModal: !0 },
  [P]: { label: "Labels:", initialValue: "", isModal: !0 },
  [O]: { label: "Project:", initialValue: i, isModal: !0 }
}), bt = () => {
  const [i, f] = q([]), [l, m] = q({}), [w, h] = q(""), N = re(null), u = re(new AbortController()), d = $(), [, o] = Ge(), T = ke(), p = D((e) => e.tableStore), R = D((e) => e.filtersStore), F = D((e) => e.featureStore), t = Be(), A = E(() => G("--featuresRowHeight"), []), V = E(
    () => G("--featuresRowHeightExtended"),
    []
  ), L = E(
    () => G("--featuresHeaderRowHeight"),
    []
  ), S = E(() => ot(d.projectName), [d.projectName]), n = Qe(S), Q = g(
    (e) => t(xe(e)),
    [t]
  ), b = g(
    (e) => {
      ve.isEmpty(e) ? T(`/projects/${d.projectName}/feature-store/feature-vectors`) : T(
        `/projects/${d.projectName}/feature-store/feature-vectors/${e.metadata.name}/${e.metadata.tag}/overview?tag=${e.metadata.tag}`
      );
    },
    [T, d.projectName]
  ), J = g(() => {
    t(v(!1)), b();
  }, [t, b]), I = g(
    (e) => {
      t(Ne({ data: e })).unwrap().then((r) => {
        t(
          Ae({
            status: r.status,
            id: Math.random(),
            message: "Feature vector created successfully"
          })
        ), t(v(!1)), b(r?.data);
      }).catch((r) => {
        const c = r.response?.status === Z ? "You do not have permission to create a feature vector" : "Feature vector creation failed";
        ee(
          t,
          r,
          "",
          c,
          () => I(e)
        ), r.response.status === Z && (t(v(!1)), b());
      });
    },
    [t, b]
  ), ue = E(
    () => ({
      page: ie,
      tablePanel: /* @__PURE__ */ a.jsx(
        at,
        {
          onSubmit: I,
          handleCancel: J,
          projectName: n[O]
        }
      )
    }),
    [n, J, I]
  ), de = E(
    () => [
      [
        {
          label: "View YAML",
          icon: /* @__PURE__ */ a.jsx(Se, {}),
          onClick: Q
        }
      ]
    ],
    [Q]
  ), M = g(
    async (e) => {
      u.current = new AbortController();
      const r = setTimeout(() => {
        u.current.abort(_e);
      }, ye), c = {
        signal: u.current.signal
      };
      h(""), t(Ce({ project: e.project, filters: e, config: c })).unwrap().then((j) => oe(
        j,
        f,
        u,
        h
      )).catch((j) => oe(
        null,
        f,
        u,
        h,
        j,
        t
      )).finally(() => clearTimeout(r));
    },
    [t]
  ), _ = g(
    (e = d.projectName) => t(Pe({ dispatch: t, fetchTags: qe, project: e })),
    [t, d.projectName]
  ), me = g(
    (e) => (_(e.project), f([]), m({}), M(e)),
    [M, _]
  ), pe = g(
    (e) => {
      const r = {
        ...F.features.selectedRowData.content
      }, c = { ...l };
      delete r[e.data.ui.identifier], delete c[e.data.ui.identifier], t(te(r)), m(c);
    },
    [t, F.features.selectedRowData.content, l]
  ), fe = g(
    async (e) => {
      const r = ae(e);
      m((c) => ({
        ...c,
        [r]: {
          loading: !0
        }
      })), t(
        De({
          project: e.metadata.project,
          name: e.name,
          metadataName: e.metadata.name,
          labels: n.labels,
          entities: n.entities
        })
      ).unwrap().then((c) => {
        if (c?.length > 0) {
          const j = [...c].map(
            (B) => U(B, p.isTablePanelOpen)
          );
          m((B) => ({
            ...B,
            [r]: {
              content: j,
              error: null,
              loading: !1
            }
          }));
        }
      }).catch((c) => {
        m((j) => ({
          ...j,
          [r]: {
            ...j.selectedRowData[r],
            error: c,
            loading: !1
          }
        }));
      });
    },
    [
      t,
      p.isTablePanelOpen,
      n.labels,
      n.entities
    ]
  ), { latestItems: K, toggleRow: ge } = st(
    i,
    ae,
    pe,
    fe,
    null
  ), W = E(() => R.groupBy === k ? K.map((e) => U(e, p.isTablePanelOpen, !0)) : i.map((e) => U(e, p.isTablePanelOpen)), [i, R.groupBy, K, p.isTablePanelOpen]);
  rt({
    fetchData: M,
    fetchTags: _,
    filters: n
  }), y(() => () => {
    f([]), t(te()), t(Oe()), m({}), u.current.abort(Ve);
  }, [t]), y(() => {
    n.tag === Le ? t(se({ groupBy: k })) : R.groupBy === k && t(se({ groupBy: Ie }));
  }, [t, R.groupBy, n.tag]), y(() => {
    Je(p.features.featureVector) ? (b(), ee(t, {}, "Please, create a feature vector first")) : t(v(!0));
  }, [t, b, p.features.featureVector]), y(() => () => {
    t(v(!1));
  }, [t]);
  const he = Xe({
    rowsData: {
      content: W,
      expandedRowsData: l
    },
    heightData: {
      headerRowHeight: L,
      rowHeight: A,
      rowHeightExtended: V
    }
  });
  return /* @__PURE__ */ a.jsx(
    z,
    {
      actionsMenu: de,
      content: i,
      featureStore: F,
      fetchTags: _,
      filters: n,
      filtersConfig: S,
      filtersStore: R,
      handleRefresh: me,
      pageData: ue,
      ref: N,
      requestErrorMessage: w,
      selectedRowData: l,
      setSearchParams: o,
      tableContent: W,
      tableStore: p,
      toggleRow: ge,
      virtualizationConfig: he
    }
  );
};
export {
  bt as default
};
//# sourceMappingURL=AddToFeatureVectorPage-BMNojjne.mjs.map
