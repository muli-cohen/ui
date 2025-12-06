import { j as l, er as i, p as we, ex as Ve, X as Ne, P as r, ah as $, fL as Ce, fZ as te, eD as Se, f_ as De, f$ as Ee, e as ae, af as re, eJ as oe, ev as Te, eu as k, V as xe, as as Ae, at as _e, g0 as qe, g1 as se, g2 as ye, eQ as G, aA as Y, az as ne, aN as Ie, g3 as Pe, ay as ce, fM as ve } from "./main-CTYpZ6Nf.mjs";
import le, { useState as P, useRef as z, useMemo as F, useCallback as g, useEffect as w } from "react";
import { useParams as He, useSearchParams as Be, useNavigate as Le, useLocation as Oe } from "react-router-dom";
import { useSelector as v, useDispatch as Me } from "react-redux";
import { A as Ue } from "./ActionBar-C8Jl3Xmo.mjs";
import { C as $e } from "./CreateFeatureVectorPopUp-iUf1irS-.mjs";
import { F as ke, e as Ge, a as Ye, h as ze, b as Qe } from "./FeatureStorePageTabs-DC4oe2EH.mjs";
import { F as Je, b as Q } from "./createFeatureStoreContent-BZntHXF_.mjs";
import { N as Xe } from "./StatsCard-Cm7Pku2T.mjs";
import { a1 as H, j as Ze, T as Ke, u as We, a2 as et, a3 as tt, a4 as at, a5 as rt } from "./Table-DB12oa-o.mjs";
import { i as ot, u as st } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { FeatureStoreContext as nt } from "./FeatureStore-CcQvcKaA.mjs";
import { a as ct } from "./link-helper.util-CuUJj7TV.mjs";
import { u as lt } from "./groupContent.hook-CinwL_Jd.mjs";
import { u as it } from "./useInitialTableFetch.hook-D3_Uekdv.mjs";
import { u as ut } from "./openPanel.hook-CVonGvbV.mjs";
const J = le.forwardRef(
  ({
    actionsMenu: R,
    applyDetailsChanges: N,
    createFeatureVector: c,
    createVectorPopUpIsOpen: p,
    detailsFormInitialValues: V,
    featureStore: m,
    featureVectors: A,
    filters: _,
    filtersStore: B,
    handleRefresh: t,
    pageData: C,
    requestErrorMessage: h,
    selectedFeatureVector: q,
    selectedRowData: j,
    setCreateVectorPopUpIsOpen: o,
    setSearchParams: L,
    setSelectedFeatureVector: S,
    tableContent: b,
    toggleRow: u,
    virtualizationConfig: D
  }, { featureStoreRef: a }) => /* @__PURE__ */ l.jsxs("div", { className: "feature-store", ref: a, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "content__action-bar-wrapper", children: [
      /* @__PURE__ */ l.jsx(ke, {}),
      /* @__PURE__ */ l.jsx(
        Ue,
        {
          actionButtons: [
            {
              className: "action-button",
              label: Ge,
              variant: we,
              onClick: () => o(!0)
            }
          ],
          closeParamName: i,
          filters: _,
          filtersConfig: H,
          handleRefresh: t,
          setSearchParams: L,
          tab: i,
          withoutExpandButton: !0,
          children: /* @__PURE__ */ l.jsx(Ye, { content: A })
        }
      )
    ] }),
    m.loading ? null : A.length === 0 ? /* @__PURE__ */ l.jsx(
      Xe,
      {
        message: Ze(
          _,
          H,
          h,
          Ve,
          i,
          i
        )
      }
    ) : /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
      Ke,
      {
        actionsMenu: R,
        applyDetailsChanges: N,
        detailsFormInitialValues: V,
        handleCancel: () => S({}),
        pageData: C,
        selectedItem: q,
        tab: i,
        tableClassName: "feature-vectors-table",
        tableHeaders: b[0]?.content ?? [],
        virtualizationConfig: D,
        children: b.map(
          (y, f) => ot(D, f) && /* @__PURE__ */ l.jsx(
            Je,
            {
              actionsMenu: R,
              pageTab: i,
              rowIndex: f,
              rowItem: y,
              selectedItem: q,
              selectedRowData: j,
              toggleRow: u,
              withQuickActions: !0
            },
            y.data?.ui?.identifier ?? f
          )
        )
      }
    ) }),
    p && /* @__PURE__ */ l.jsx(
      $e,
      {
        closePopUp: () => {
          o(!1);
        },
        createFeatureVector: c
      }
    )
  ] })
);
J.displayName = "FeatureVectorsView";
J.propTypes = {
  actionsMenu: r.array.isRequired,
  applyDetailsChanges: r.func.isRequired,
  createFeatureVector: r.func.isRequired,
  createVectorPopUpIsOpen: r.bool.isRequired,
  detailsFormInitialValues: r.object.isRequired,
  featureStore: r.object.isRequired,
  featureVectors: r.arrayOf(r.object).isRequired,
  filters: r.object.isRequired,
  filtersStore: r.object.isRequired,
  handleRefresh: r.func.isRequired,
  pageData: r.object.isRequired,
  requestErrorMessage: r.string.isRequired,
  selectedFeatureVector: r.object.isRequired,
  selectedRowData: r.object.isRequired,
  setCreateVectorPopUpIsOpen: r.func.isRequired,
  setSearchParams: r.func.isRequired,
  setSelectedFeatureVector: r.func.isRequired,
  tableContent: r.arrayOf(r.object).isRequired,
  toggleRow: r.func.isRequired,
  virtualizationConfig: Ne.isRequired
};
const Et = () => {
  const [R, N] = P([]), [c, p] = P({}), [V, m] = P({}), [A, _] = P(""), B = ut(), t = He(), [, C] = Be(), h = v((e) => e.featureStore), q = v((e) => e.projectStore), j = v((e) => e.filtersStore), o = We(H), L = z(null), S = z(new AbortController()), b = z(new AbortController()), u = Le(), D = Oe(), a = Me(), {
    createVectorPopUpIsOpen: y,
    setCreateVectorPopUpIsOpen: f,
    setConfirmData: E,
    toggleConvertedYaml: X
  } = le.useContext(nt), Z = v((e) => e.appStore.frontendSpec), ie = F(
    () => $("--featureVectorsRowHeight"),
    []
  ), ue = F(
    () => $("--featureVectorsRowHeightExtended"),
    []
  ), de = F(
    () => $("--featureVectorsHeaderRowHeight"),
    []
  ), I = F(
    () => et(c),
    [c]
  ), pe = F(
    () => tt(c, Z.internal_labels),
    [Z.internal_labels, c]
  ), T = g(
    (e) => {
      S.current = new AbortController();
      const s = {
        ui: {
          controller: S.current,
          setRequestErrorMessage: _
        }
      };
      return a(Ce({ project: t.projectName, filters: e, config: s })).unwrap().then((n) => {
        if (n) {
          const d = te(n);
          return N(d), d;
        }
      });
    },
    [a, t.projectName]
  ), x = g(() => (b.current = new AbortController(), a(
    Se({
      dispatch: a,
      fetchTags: De,
      project: t.projectName,
      config: {
        signal: b.current.signal
      }
    })
  )), [a, t.projectName]), O = g(
    (e) => {
      a(
        Ee({ project: t.projectName, featureVector: e.name })
      ).unwrap().then(() => {
        ae.isEmpty(c) || (p({}), u(
          `/projects/${t.projectName}/feature-store/feature-vectors${window.location.search}`,
          {
            replace: !0
          }
        )), a(
          re({
            status: 200,
            id: Math.random(),
            message: "Feature vector was deleted"
          })
        ), x().unwrap().then((s) => {
          const n = [...s, oe].includes(o.tag) ? o.tag : Te;
          C(
            (d) => (n === H[k].initialValue ? d.delete(k) : d.set(k, n), d),
            { replace: !0 }
          ), T({ ...o, tag: n });
        });
      }).catch((s) => {
        xe(
          a,
          s,
          "",
          "Failed to delete the feature vector",
          () => O(e)
        );
      }), E(null);
    },
    [
      t.projectName,
      E,
      c,
      a,
      x,
      u,
      o,
      C,
      T
    ]
  ), K = g(
    (e) => {
      E({
        item: e,
        header: "Delete feature vector?",
        message: `Are you sure you want to delete the feature vector "${e.name}"?. You cannot restore a feature vector after deleting it.`,
        btnCancelLabel: "Cancel",
        btnCancelVariant: _e,
        btnConfirmLabel: "Delete",
        btnConfirmVariant: Ae,
        rejectHandler: () => E(null),
        confirmHandler: () => O(e)
      });
    },
    [O, E]
  ), fe = F(
    () => at(a, K, X),
    [K, X, a]
  ), M = g(
    (e) => (x(), N([]), p({}), m({}), T(e)),
    [T, x]
  ), me = g(
    (e) => {
      const s = {
        ...h.featureVectors.selectedRowData.content
      }, n = { ...V };
      delete s[e.data.ui.identifier], delete n[e.data.ui.identifier], a(qe(s)), m(n);
    },
    [h.featureVectors.selectedRowData.content, V, a]
  ), ge = g(
    (e) => {
      const s = se(e);
      m((n) => ({
        ...n,
        [s]: {
          loading: !0
        }
      })), a(
        ye({
          project: e.project,
          featureVector: e.name,
          tag: o.tag,
          labels: o.labels
        })
      ).unwrap().then((n) => {
        const d = G(te(n), "updated", !1).map(
          (U) => Q(U, i, t.projectName)
        );
        m((U) => ({
          ...U,
          [s]: {
            content: d,
            error: null,
            loading: !1
          }
        }));
      }).catch((n) => {
        m((d) => ({
          ...d,
          [s]: {
            ...d.selectedRowData[s],
            error: n,
            loading: !1
          }
        }));
      });
    },
    [a, o.tag, o.labels, t.projectName]
  ), { latestItems: W, toggleRow: Re } = lt(
    R,
    se,
    me,
    ge,
    null
  ), ee = F(() => j.groupBy === Y ? G(W, "updated", !1).map((e) => Q(
    e,
    i,
    t.projectName,
    !0
  )) : G(R, "updated", !1).map(
    (e) => Q(e, i, t.projectName)
  ), [R, j.groupBy, W, t.projectName]), he = (e) => {
    t.name === e.name && t.tag === e.tag && p(e);
  }, je = g(
    (e) => ze(
      e,
      M,
      t.projectName,
      t.name,
      i,
      c,
      re,
      o,
      a
    ),
    [
      a,
      M,
      o,
      t.name,
      t.projectName,
      c
    ]
  ), be = (e) => {
    q?.projectsNames?.data?.includes(t.projectName) && (f(!1), a(
      ve({
        currentProject: t.projectName,
        featureVector: {
          kind: "FeatureVector",
          metadata: {
            name: e.name,
            project: t.projectName,
            tag: e.tag,
            labels: e.labels
          },
          spec: {
            description: e.description,
            features: [],
            label_feature: ""
          },
          status: {}
        },
        groupedFeatures: {
          [t.projectName]: []
        },
        isNewFeatureVector: !0
      })
    ), u(`/projects/${t.projectName}/feature-store/add-to-feature-vector`));
  };
  w(() => {
    m({});
  }, [o.tag]), it({
    fetchData: T,
    filters: o,
    fetchTags: x
  }), w(() => {
    o.tag === oe ? a(ne({ groupBy: Y })) : j.groupBy === Y && a(ne({ groupBy: Ie }));
  }, [j.groupBy, o.tag, a]), w(() => {
    const e = ae.cloneDeep(h.featureVectors?.allData);
    if (t.name && e.length !== 0) {
      const s = rt(e, t.name, t.tag);
      s ? p(s) : u(
        `/projects/${t.projectName}/feature-store/${i}${window.location.search}`,
        {
          replace: !0
        }
      );
    } else
      p({});
  }, [h.featureVectors?.allData, u, t.name, t.projectName, t.tag]), w(() => {
    t.name && t.tag && I.details.menu.length > 0 && ct(t.tab, I.details.menu, u, D);
  }, [u, D, I.details.menu, t.name, t.tag, t.tab]), w(() => {
    Qe(u, t, p, i);
  }, [u, t, p]), w(() => {
    B && f(!0);
  }, [B, f]), w(() => {
    const e = b.current;
    return () => {
      N([]), a(Pe()), p({}), m({}), S.current.abort(ce), e.abort(ce), f(!1);
    };
  }, [f, t.projectName, b, a]);
  const Fe = st({
    rowsData: {
      content: ee,
      expandedRowsData: V,
      selectedItem: c
    },
    heightData: {
      headerRowHeight: de,
      rowHeight: ie,
      rowHeightExtended: ue
    }
  });
  return /* @__PURE__ */ l.jsx(
    J,
    {
      actionsMenu: fe,
      applyDetailsChanges: je,
      createFeatureVector: be,
      createVectorPopUpIsOpen: y,
      detailsFormInitialValues: pe,
      featureStore: h,
      featureVectors: R,
      filters: o,
      filtersStore: j,
      handleRefresh: M,
      pageData: I,
      ref: { featureStoreRef: L },
      requestErrorMessage: A,
      selectedFeatureVector: c,
      selectedRowData: V,
      setCreateVectorPopUpIsOpen: f,
      setSearchParams: C,
      setSelectedFeatureVector: he,
      tableContent: ee,
      toggleRow: Re,
      virtualizationConfig: Fe
    }
  );
};
export {
  Et as default
};
//# sourceMappingURL=FeatureVectors-BGoQjusB.mjs.map
