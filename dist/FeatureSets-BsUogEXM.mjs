import { j as l, eK as c, p as Ee, i as Ne, ex as ie, X as Te, P as s, bb as De, ah as G, eL as Ce, eM as te, eD as xe, eE as Ae, eN as ae, eO as se, eP as qe, eQ as v, aA as U, eJ as z, az as re, aN as _e, e as ye, eR as Ie, ay as oe, cE as ne, eu as Y, an as Pe, b1 as Be, aB as Le, z as Me, af as Oe } from "./main-CTYpZ6Nf.mjs";
import le, { useState as C, useRef as Q, useMemo as h, useCallback as j, useEffect as m } from "react";
import { useParams as ce, useSearchParams as He, useNavigate as $e, useLocation as Ve } from "react-router-dom";
import { useSelector as W, useDispatch as ke } from "react-redux";
import { F as Ge } from "./FeatureSetsPanel-BA6whq47.mjs";
import { F as ve, a as X } from "./createFeatureStoreContent-BZntHXF_.mjs";
import { N as Ue } from "./StatsCard-Cm7Pku2T.mjs";
import { W as L, j as ze, T as Ye, u as Qe, X as We, Y as Xe, Z as Je } from "./Table-DB12oa-o.mjs";
import { A as Ke } from "./ActionBar-C8Jl3Xmo.mjs";
import { F as Ze, c as et, a as tt, h as at, b as st } from "./FeatureStorePageTabs-DC4oe2EH.mjs";
import { i as rt, u as ot } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { FeatureStoreContext as nt } from "./FeatureStore-CcQvcKaA.mjs";
import { a as it } from "./link-helper.util-CuUJj7TV.mjs";
import { u as lt } from "./groupContent.hook-CinwL_Jd.mjs";
import { u as ct } from "./useInitialTableFetch.hook-D3_Uekdv.mjs";
import { u as ut } from "./openPanel.hook-CVonGvbV.mjs";
const J = le.forwardRef(
  ({
    actionsMenu: g,
    applyDetailsChanges: N,
    applyDetailsChangesCallback: n,
    closePanel: x,
    createFeatureSetSuccess: A,
    detailsFormInitialValues: F,
    featureSets: S,
    featureSetsPanelIsOpen: d,
    featureStore: q,
    filters: _,
    filtersStore: M,
    handleRefresh: e,
    pageData: y,
    requestErrorMessage: R,
    selectedFeatureSet: p,
    selectedRowData: w,
    setFeatureSetsPanelIsOpen: E,
    setSearchParams: O,
    setSelectedFeatureSetMin: u,
    tableContent: T,
    toggleRow: a,
    virtualizationConfig: D
  }, { featureStoreRef: H }) => {
    const i = ce();
    return /* @__PURE__ */ l.jsxs("div", { className: "feature-store", ref: H, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "content__action-bar-wrapper", children: [
        /* @__PURE__ */ l.jsx(Ze, {}),
        /* @__PURE__ */ l.jsx(
          Ke,
          {
            actionButtons: [
              {
                className: "action-button",
                label: et,
                variant: Ee,
                onClick: () => E(!0)
              }
            ],
            closeParamName: c,
            filters: _,
            filtersConfig: L,
            handleRefresh: e,
            setSearchParams: O,
            tab: c,
            withoutExpandButton: !0,
            children: /* @__PURE__ */ l.jsx(tt, { content: S })
          }
        )
      ] }),
      q.loading ? null : S.length === 0 ? /* @__PURE__ */ l.jsx(
        Ue,
        {
          message: ze(
            _,
            L,
            R,
            ie,
            c,
            c
          )
        }
      ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        (w.loading || q.featureSets.featureSetLoading) && /* @__PURE__ */ l.jsx(Ne, {}),
        /* @__PURE__ */ l.jsx(
          Ye,
          {
            actionsMenu: g,
            applyDetailsChanges: N,
            applyDetailsChangesCallback: n,
            detailsFormInitialValues: F,
            handleCancel: () => u({}),
            pageData: y,
            selectedItem: p,
            tab: c,
            tableClassName: "feature-sets-table",
            tableHeaders: T[0]?.content ?? [],
            virtualizationConfig: D,
            children: T.map(
              (I, f) => rt(D, f) && /* @__PURE__ */ l.jsx(
                ve,
                {
                  actionsMenu: g,
                  pageTab: c,
                  rowIndex: f,
                  rowItem: I,
                  selectedItem: p,
                  selectedRowData: w,
                  toggleRow: a,
                  withQuickActions: !0
                },
                I.data.ui.identifier
              )
            )
          }
        )
      ] }),
      d && /* @__PURE__ */ l.jsx(
        Ge,
        {
          closePanel: x,
          createFeatureSetSuccess: A,
          project: i.projectName
        }
      )
    ] });
  }
);
J.displayName = "FeatureSetsView";
J.propTypes = {
  actionsMenu: s.array.isRequired,
  applyDetailsChanges: s.func.isRequired,
  applyDetailsChangesCallback: s.func.isRequired,
  closePanel: s.func.isRequired,
  createFeatureSetSuccess: s.func.isRequired,
  detailsFormInitialValues: s.object.isRequired,
  featureSets: s.arrayOf(s.object).isRequired,
  featureSetsPanelIsOpen: s.bool.isRequired,
  featureStore: s.object.isRequired,
  filters: s.object.isRequired,
  filtersStore: s.object.isRequired,
  handleRefresh: s.func.isRequired,
  pageData: s.object.isRequired,
  requestErrorMessage: s.string.isRequired,
  selectedFeatureSet: s.object.isRequired,
  selectedRowData: s.object.isRequired,
  setFeatureSetsPanelIsOpen: s.func.isRequired,
  setSearchParams: s.func.isRequired,
  setSelectedFeatureSetMin: s.func.isRequired,
  tableContent: s.arrayOf(s.object).isRequired,
  toggleRow: s.func.isRequired,
  virtualizationConfig: Te.isRequired
};
const Ct = () => {
  const [g, N] = C([]), [n, x] = C({}), [A, F] = C({}), [S, d] = C({}), [q, _] = C(""), M = ut(), e = ce(), [, y] = He(), R = W((t) => t.featureStore), p = W((t) => t.filtersStore), w = Q(new AbortController()), E = Q(new AbortController()), O = Q(null), u = $e(), T = Ve(), a = ke(), D = W((t) => t.appStore.frontendSpec), H = h(
    () => ({
      description: n.description,
      labels: De(n.labels, D.internal_labels)
    }),
    [D.internal_labels, n.description, n.labels]
  ), i = Qe(L), { featureSetsPanelIsOpen: I, setFeatureSetsPanelIsOpen: f, toggleConvertedYaml: K } = le.useContext(nt), ue = h(() => G("--featureSetsRowHeight"), []), de = h(
    () => G("--featureSetsRowHeightExtended"),
    []
  ), pe = h(
    () => G("--featureSetsHeaderRowHeight"),
    []
  ), P = h(
    () => We(n),
    [n]
  ), fe = h(
    () => Xe(a, n, K),
    [a, n, K]
  ), $ = j(
    (t) => {
      w.current = new AbortController();
      const o = {
        ui: {
          controller: w.current,
          setRequestErrorMessage: _
        },
        params: {
          format: "minimal"
        }
      };
      return a(Ce({ project: e.projectName, filters: t, config: o })).unwrap().then((r) => {
        if (r) {
          const b = te(r);
          return N(b), b;
        }
      });
    },
    [a, e.projectName]
  ), V = j(() => (E.current = new AbortController(), a(
    xe({
      dispatch: a,
      fetchTags: Ae,
      project: e.projectName,
      config: {
        signal: E.current.signal
      }
    })
  )), [a, e.projectName]), B = j(
    (t) => (V(), N([]), x({}), d({}), $(t)),
    [$, V]
  ), me = j(
    (t) => {
      const o = {
        ...R.featureSets.selectedRowData.content
      }, r = { ...S };
      delete o[t.data.ui.identifier], delete r[t.data.ui.identifier], a(ae(o)), d(r);
    },
    [R.featureSets.selectedRowData.content, S, a]
  ), ge = j(
    (t) => {
      const o = se(t);
      d((r) => ({
        ...r,
        [o]: {
          loading: !0
        }
      })), a(
        qe({
          project: t.project,
          featureSet: t.name,
          tag: i.tag,
          labels: i.labels
        })
      ).unwrap().then((r) => {
        const b = v(te(r), "updated", !1).map(
          (k) => X(k, e.projectName, c, !0)
        );
        d((k) => ({
          ...k,
          [o]: {
            content: b,
            error: null,
            loading: !1
          }
        }));
      }).catch((r) => {
        d((b) => ({
          ...b,
          [o]: {
            ...b.selectedRowData[o],
            error: r,
            loading: !1
          }
        }));
      });
    },
    [a, i.tag, i.labels, e.projectName]
  ), { latestItems: Z, toggleRow: Se } = lt(
    g,
    se,
    me,
    ge,
    null
  ), ee = h(() => p.groupBy === U ? v(Z, "updated", !1).map((t) => X(t, e.projectName, c, !0)) : v(g, "updated", !1).map(
    (t) => X(t, e.projectName)
  ), [g, p.groupBy, Z, e.projectName]), Re = j(
    (t) => {
      e.name === t.name && e.tag === t.tag && F(t);
    },
    [e.name, e.tag]
  ), be = j(
    (t) => at(
      t,
      B,
      e.projectName,
      e.name,
      c,
      n,
      Oe,
      i,
      a
    ),
    [
      a,
      B,
      i,
      e.name,
      e.projectName,
      n
    ]
  ), he = (t, o) => {
    o.tag || u(
      `/projects/${e.projectName}/${ie}/${c}/${o.name}/${Le}/${Me}`
    );
  }, je = (t) => {
    const o = i.tag === z ? z : t;
    return f(!1), a(ne()), y(
      (r) => (o === L[Y].initialValue ? r.delete(Y) : r.set(Y, o), r.delete(Pe), r.delete(Be), r),
      { replace: !0 }
    ), B({
      project: e.projectName,
      tag: o
    });
  }, Fe = () => {
    f(!1), a(ne());
  };
  m(() => {
    Je(
      c,
      a,
      u,
      A,
      x,
      e.projectName
    );
  }, [a, u, e.projectName, A]), m(() => {
    d({});
  }, [i.tag]), ct({
    fetchData: $,
    fetchTags: V,
    filters: i
  }), m(() => {
    i.tag === z ? a(re({ groupBy: U })) : p.groupBy === U && a(re({ groupBy: _e }));
  }, [p.groupBy, i.tag, a]), m(() => {
    const t = ye.cloneDeep(R.featureSets?.allData);
    if (e.name && t.length !== 0) {
      const o = t.find((r) => r.name === e.name && (r.tag === e.tag || r.uid === e.tag));
      o ? F(o) : u(
        `/projects/${e.projectName}/feature-store/${c}${window.location.search}`,
        {
          replace: !0
        }
      );
    } else
      F({});
  }, [R.featureSets.allData, u, e.name, e.projectName, e.tag]), m(() => {
    e.name && e.tag && P.details.menu.length > 0 && it(e.tab, P.details.menu, u, T);
  }, [u, T, P.details.menu, e.name, e.tag, e.tab]), m(() => {
    st(u, e, n, c);
  }, [u, e, n]), m(() => {
    M && f(!0);
  }, [M, f]), m(() => {
    const t = E.current;
    return () => {
      N([]), a(Ie()), a(ae()), F({}), d({}), w.current.abort(oe), t.abort(oe);
    };
  }, [e.projectName, E, a]);
  const we = ot({
    rowsData: {
      content: ee,
      expandedRowsData: S,
      selectedItem: n
    },
    heightData: {
      headerRowHeight: pe,
      rowHeight: ue,
      rowHeightExtended: de
    }
  });
  return /* @__PURE__ */ l.jsx(
    J,
    {
      actionsMenu: fe,
      applyDetailsChanges: be,
      applyDetailsChangesCallback: he,
      closePanel: Fe,
      createFeatureSetSuccess: je,
      detailsFormInitialValues: H,
      featureSets: g,
      featureSetsPanelIsOpen: I,
      featureStore: R,
      filtersStore: p,
      filters: i,
      handleRefresh: B,
      pageData: P,
      ref: { featureStoreRef: O },
      requestErrorMessage: q,
      selectedFeatureSet: n,
      selectedRowData: S,
      setFeatureSetsPanelIsOpen: f,
      setSearchParams: y,
      setSelectedFeatureSetMin: Re,
      tableContent: ee,
      toggleRow: Se,
      virtualizationConfig: we
    }
  );
};
export {
  Ct as default
};
//# sourceMappingURL=FeatureSets-BsUogEXM.mjs.map
