import { j as t, bV as X, bM as Re, at as je, p as me, fL as Fe, e as Y, fM as ne, ey as te, P as o, fN as O, ex as fe, X as Te, ah as $, a2 as we, eA as Se, eB as xe, eC as Ce, fO as Ne, eD as Ee, eE as Pe, eF as K, fP as W, eI as le, fQ as ce, eG as ie, eH as ye, fR as ve, aA as Z, eJ as _e, az as ue, aN as Ae, ay as de } from "./main-CTYpZ6Nf.mjs";
import ge, { useState as m, useRef as H, useEffect as G, useMemo as v, useLayoutEffect as De, useCallback as _ } from "react";
import { useParams as Oe, useSearchParams as qe } from "react-router-dom";
import { useSelector as q, useDispatch as be } from "react-redux";
import { createPortal as Ve } from "react-dom";
import { C as Le } from "./CreateFeatureVectorPopUp-iUf1irS-.mjs";
import { S as ee } from "./add-CmKOUDFO.mjs";
import { $ as Ue, j as Be, T as Ie, u as ke } from "./Table-DB12oa-o.mjs";
import { g as pe } from "./projects-Cp4BQIu-.mjs";
import { S as Me, F as He, c as M } from "./createFeatureStoreContent-BZntHXF_.mjs";
import { f as ae, F as Ge, h as Ye } from "./features.util-DowT7bP_.mjs";
import { A as Qe } from "./ActionBar-C8Jl3Xmo.mjs";
import { F as ze, a as Je, d as Xe } from "./FeatureStorePageTabs-DC4oe2EH.mjs";
import { N as $e } from "./StatsCard-Cm7Pku2T.mjs";
import { i as Ke, u as We } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { FeatureStoreContext as Ze } from "./FeatureStore-CcQvcKaA.mjs";
import { u as et } from "./groupContent.hook-CinwL_Jd.mjs";
import { u as tt } from "./useInitialTableFetch.hook-D3_Uekdv.mjs";
const he = ({ action: u, currentProject: n }) => {
  const [h, l] = m(!1), [V, w] = m(!1), [i, E] = m(""), [f, g] = m(""), [d, c] = m(""), [C, F] = m([]), [R, a] = m([]), [S, x] = m([]), L = q((s) => s.featureStore), P = q((s) => s.projectStore), [A, Q] = m(
    pe(P.projectsNames.data)
  ), y = H(null), T = be();
  G(() => {
    A.length === 0 && Q(pe(P.projectsNames.data, n));
  }, [n, P.projectsNames.data, A.length]);
  const U = () => {
    l(!1), D();
  }, B = (s) => {
    E(s), T(Fe({ project: s })).unwrap().then((e) => {
      if (e) {
        const r = e.map((p) => ({
          id: p.metadata.name,
          label: p.metadata.name
        }));
        F(e), a(Y.uniqBy(r, "id")), x([]), g(""), c("");
      }
    });
  }, z = (s) => {
    g(s), c(""), x(
      C.filter((e) => e.metadata.name === s && !!e.metadata.tag).map((e) => ({
        id: e.metadata.tag,
        label: e.metadata.tag
      }))
    );
  }, I = (s) => {
    l(!1), w(!1), P?.projectsNames?.data?.includes(n) && (T(
      ne({
        currentProject: n,
        featureVector: {
          kind: "FeatureVector",
          metadata: {
            name: s.name,
            project: n,
            tag: s.tag,
            labels: s.labels
          },
          spec: {
            description: s.description,
            features: [],
            label_feature: ""
          },
          status: {}
        },
        groupedFeatures: {
          [n]: []
        },
        isNewFeatureVector: !0
      })
    ), T(te(!0)));
  }, D = () => {
    E(""), g(""), a([]), c(""), x([]);
  }, k = () => {
    const s = C.find(
      (e) => e.metadata.name === f && e.metadata.tag === d
    );
    if (s) {
      l(!1);
      const e = Y.groupBy(
        s.spec.features.map((r) => Ue(r, n)),
        (r) => r.project || n
      );
      T(
        ne({
          currentProject: n,
          featureVector: s,
          groupedFeatures: e,
          isNewFeatureVector: !1
        })
      ), T(te(!0)), D();
    }
  }, J = () => {
    h ? D() : B(n), l((s) => !s);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      X,
      {
        className: u.className,
        ref: y,
        variant: u.variant,
        label: u.label,
        tooltip: u.tooltip || (L.features?.allData?.length === 0 ? "No features in the project." : ""),
        disabled: u.disabled || !L.features?.allData?.length,
        onClick: J
      }
    ),
    h && /* @__PURE__ */ t.jsx(
      Re,
      {
        headerText: "Select feature vector",
        customPosition: {
          element: y,
          position: "bottom-left"
        },
        closePopUp: U,
        className: "add-to-feature-vector",
        children: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsxs("div", { className: "select-row", children: [
            /* @__PURE__ */ t.jsx(
              ee,
              {
                className: "project-name",
                density: "chunky",
                floatingLabel: !0,
                label: "Project name",
                onClick: B,
                options: A,
                search: !0,
                selectedId: i
              }
            ),
            /* @__PURE__ */ t.jsx(
              ee,
              {
                className: "vector-name",
                density: "chunky",
                disabled: R.length === 0,
                floatingLabel: !0,
                label: "Vector name",
                search: !0,
                selectedId: f,
                onClick: z,
                options: R
              }
            ),
            /* @__PURE__ */ t.jsx(
              ee,
              {
                className: "vector-tag",
                density: "chunky",
                floatingLabel: !0,
                options: S,
                label: "Tag",
                search: !0,
                disabled: S.length === 0,
                selectedId: d,
                onClick: c
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "pop-up-dialog__footer-container", children: [
            /* @__PURE__ */ t.jsx(
              X,
              {
                variant: je,
                label: "Cancel",
                className: "pop-up-dialog__btn_cancel",
                onClick: U
              }
            ),
            /* @__PURE__ */ t.jsx(
              X,
              {
                variant: me,
                disabled: [i, f, d].includes(
                  ""
                ),
                label: "Select",
                onClick: k
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "divider" }),
          /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: "create-feature-vector__btn",
              onClick: () => w(!0),
              children: [
                /* @__PURE__ */ t.jsx(Me, {}),
                "Create new feature vector"
              ]
            }
          ),
          V && Ve(
            /* @__PURE__ */ t.jsx(
              Le,
              {
                closePopUp: () => {
                  w(!1);
                },
                createFeatureVector: I
              }
            ),
            document.getElementById("root")
          )
        ] })
      }
    )
  ] });
};
he.propTypes = {
  action: o.object.isRequired,
  currentProject: o.string.isRequired
};
const se = ge.forwardRef(
  ({
    actionsMenu: u,
    featureStore: n,
    features: h,
    filters: l,
    filtersStore: V,
    getPopUpTemplate: w,
    handleRefresh: i,
    pageData: E,
    requestErrorMessage: f,
    selectedRowData: g,
    setSearchParams: d,
    tableContent: c,
    tableStore: C,
    toggleRow: F,
    virtualizationConfig: R
  }, { featureStoreRef: a }) => /* @__PURE__ */ t.jsxs("div", { className: "feature-store", ref: a, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "content__action-bar-wrapper", children: [
      /* @__PURE__ */ t.jsx(ze, {}),
      /* @__PURE__ */ t.jsx(
        Qe,
        {
          actionButtons: [
            {
              hidden: !1,
              template: w({
                className: "action-button",
                label: Xe,
                variant: me
              })
            }
          ],
          filters: l,
          filtersConfig: ae,
          handleRefresh: i,
          setSearchParams: d,
          tab: O,
          withoutExpandButton: !0,
          children: /* @__PURE__ */ t.jsx(Je, { content: h })
        }
      )
    ] }),
    n.features.loading || n.entities.loading ? null : h.length === 0 ? /* @__PURE__ */ t.jsx(
      $e,
      {
        message: Be(
          l,
          ae,
          f,
          fe,
          O,
          O
        )
      }
    ) : /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
      Ie,
      {
        actionsMenu: u,
        hideActionsMenu: C.isTablePanelOpen,
        pageData: E,
        tab: O,
        tableClassName: "features-table",
        tableHeaders: c[0]?.content ?? [],
        virtualizationConfig: R,
        children: /* @__PURE__ */ t.jsx(t.Fragment, { children: c.map(
          (S, x) => Ke(R, x) && /* @__PURE__ */ t.jsx(
            He,
            {
              actionsMenu: u,
              hideActionsMenu: C.isTablePanelOpen,
              mainRowItemsCount: 2,
              pageTab: O,
              rowIndex: x,
              rowItem: S,
              selectedRowData: g,
              toggleRow: F
            },
            S.data.ui.identifier
          )
        ) })
      }
    ) })
  ] })
);
se.displayName = "FeaturesView";
se.propTypes = {
  actionsMenu: o.array.isRequired,
  featureStore: o.object.isRequired,
  features: o.arrayOf(o.object).isRequired,
  filters: o.object.isRequired,
  filtersStore: o.object.isRequired,
  getPopUpTemplate: o.func.isRequired,
  handleRefresh: o.func.isRequired,
  pageData: o.object.isRequired,
  requestErrorMessage: o.string.isRequired,
  selectedRowData: o.object.isRequired,
  setSearchParams: o.func.isRequired,
  tableContent: o.arrayOf(o.object).isRequired,
  tableStore: o.object.isRequired,
  toggleRow: o.func.isRequired,
  virtualizationConfig: Te.isRequired
};
const Ft = () => {
  const [u, n] = m([]), [h, l] = m({}), [V, w] = m(""), i = Oe(), [, E] = qe(), f = q((e) => e.featureStore), g = q((e) => e.filtersStore), d = ke(ae), c = q((e) => e.tableStore), C = H(null), F = H(new AbortController()), R = H(new AbortController()), a = be(), { toggleConvertedYaml: S } = ge.useContext(Ze), x = v(() => $("--featuresRowHeight"), []), L = v(
    () => $("--featuresRowHeightExtended"),
    []
  ), P = v(
    () => $("--featuresHeaderRowHeight"),
    []
  ), A = v(
    () => ({ page: fe, tablePanel: /* @__PURE__ */ t.jsx(Ge, {}) }),
    []
  ), Q = v(
    () => [
      [
        {
          label: "View YAML",
          icon: /* @__PURE__ */ t.jsx(we, {}),
          onClick: S
        }
      ]
    ],
    [S]
  );
  De(() => {
    l((e) => Y.mapValues(e, (r) => ({
      ...r,
      content: Y.map(
        r.content,
        (p) => M(p.data, c.isTablePanelOpen, !1)
      )
    })));
  }, [c.isTablePanelOpen, l]);
  const y = _(
    (e) => {
      F.current = new AbortController();
      const r = setTimeout(() => {
        F.current.abort(Se);
      }, xe), p = {
        signal: F.current.signal
      };
      w("");
      const j = (b) => b?.find((N) => N.status === "rejected")?.reason || null;
      return Promise.allSettled([
        a(Ce({ project: i.projectName, filters: e, config: p })).unwrap(),
        a(Ne({ project: i.projectName, filters: e, config: p })).unwrap()
      ]).then((b) => {
        if (b) {
          const N = b.reduce((re, oe) => oe.value ? re.concat(oe.value) : re, []);
          return Ye(
            N,
            n,
            F,
            w,
            j(b),
            a
          );
        }
        return b;
      }).finally(() => clearTimeout(r));
    },
    [a, i.projectName]
  ), T = _(() => (R.current = new AbortController(), a(
    Ee({
      dispatch: a,
      fetchTags: Pe,
      project: i.projectName,
      config: { signal: R.current.signal }
    })
  )), [a, i.projectName]), U = _(
    (e) => (T(), n([]), a(K()), a(W()), a(le()), a(ce()), l({}), y(e)),
    [a, y, T]
  ), B = _(
    (e) => {
      const r = e.data.ui.type === "feature" ? { ...f.features.selectedRowData.content } : { ...f.entities.selectedRowData.content }, p = { ...h }, j = e.data.ui.type === "feature" ? K : W;
      delete r[e.data.ui.identifier], delete p[e.data.ui.identifier], a(j(r)), l(p);
    },
    [
      f.features.selectedRowData.content,
      f.entities.selectedRowData.content,
      h,
      a
    ]
  ), z = _(
    (e) => {
      const r = ie(e), p = e.ui?.type === "feature" ? ye : ve;
      l((j) => ({
        ...j,
        [r]: {
          loading: !0
        }
      })), a(
        p({
          project: e.metadata.project,
          name: e.name,
          metadataName: e.metadata.name,
          labels: d.labels
        })
      ).unwrap().then((j) => {
        if (j?.length > 0) {
          const b = [...j].map(
            (N) => M(N, c.isTablePanelOpen, !1)
          );
          l((N) => ({
            ...N,
            [r]: {
              content: b,
              error: null,
              loading: !1
            }
          }));
        }
      }).catch((j) => {
        l((b) => ({
          ...b,
          [r]: {
            ...b.selectedRowData[r],
            error: j,
            loading: !1
          }
        }));
      });
    },
    [a, d.labels, c.isTablePanelOpen]
  ), { latestItems: I, toggleRow: D } = et(
    u,
    ie,
    B,
    z,
    null
  ), k = v(() => g.groupBy === Z ? I.map((e) => M(e, c.isTablePanelOpen, !0)) : u.map(
    (e) => M(e, c.isTablePanelOpen, !1)
  ), [u, g.groupBy, I, c.isTablePanelOpen]), J = _(
    (e) => /* @__PURE__ */ t.jsx(he, { action: e, currentProject: i.projectName }, e),
    [i.projectName]
  );
  G(() => () => {
    a(te(!1));
  }, [i.projectName, a]), tt({
    fetchData: y,
    fetchTags: T,
    filters: d
  }), G(() => {
    d.tag === _e ? a(ue({ groupBy: Z })) : g.groupBy === Z && a(ue({ groupBy: Ae }));
  }, [g.groupBy, d.tag, a]), G(() => {
    const e = R.current;
    return () => {
      n([]), a(K()), a(W()), a(le()), a(ce()), l({}), F.current.abort(de), e.abort(de);
    };
  }, [i.projectName, R, a]);
  const s = We({
    rowsData: {
      content: k,
      expandedRowsData: h
    },
    heightData: {
      headerRowHeight: P,
      rowHeight: x,
      rowHeightExtended: L
    }
  });
  return /* @__PURE__ */ t.jsx(
    se,
    {
      actionsMenu: Q,
      featureStore: f,
      features: u,
      filtersStore: g,
      filters: d,
      getPopUpTemplate: J,
      handleRefresh: U,
      pageData: A,
      ref: { featureStoreRef: C },
      requestErrorMessage: V,
      selectedRowData: h,
      setSearchParams: E,
      tableContent: k,
      tableStore: c,
      toggleRow: D,
      virtualizationConfig: s
    }
  );
};
export {
  Ft as default
};
//# sourceMappingURL=Features-DKMU2O6T.mjs.map
