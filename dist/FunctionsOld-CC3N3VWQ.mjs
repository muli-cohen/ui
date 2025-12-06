import { c as Z, w as Y, j as o, x as ie, e as T, z as je, I as Ee, P as c, B as nt, E as ot, p as it, i as Fe, G as de, H as rt, J as lt, K as ct, X as dt, M as ut, O as q, Q as Ie, R as mt, S as pt, T as ht, U as gt, V as M, Y as bt, Z as _t, _ as De, $ as ft, a0 as Nt, a1 as jt, a2 as Et, a3 as Ft, a4 as ce, a5 as Re, a6 as Oe, a7 as Te, a8 as Rt, a9 as we, aa as Tt, ab as wt, ac as Ct, ad as yt, ae as At, af as V, ag as xt, ah as re, ai as St, aj as It, ak as Dt, al as Ot, am as vt, an as Pt, ao as qt, ap as Lt, aq as kt, ar as Ut, t as Bt, as as Mt, at as Ht, au as $t, av as Vt, aw as Gt, ax as Ce, ay as Yt, az as zt, aA as Wt, m as Jt, aB as Kt, aC as ee, aD as Qt } from "./main-CTYpZ6Nf.mjs";
import Xt, { useRef as G, useMemo as P, useState as I, useCallback as D, useEffect as B } from "react";
import { useSelector as ye, useDispatch as Zt } from "react-redux";
import { useParams as ue, useSearchParams as ea, useNavigate as ta, useLocation as aa } from "react-router-dom";
import { A as sa } from "./ActionBar-C8Jl3Xmo.mjs";
import { B as na } from "./Breadcrumbs-DDXz9SNg.mjs";
import { F as oa, c as le } from "./createFunctionsRowData-CJCS8TMo.mjs";
import { F as ia, N as ra } from "./NewFunctionPopUp-DujV59Hs.mjs";
import { i as la, P as ca, g as Ae, u as da } from "./groupContent.hook-CinwL_Jd.mjs";
import { N as ua } from "./StatsCard-Cm7Pku2T.mjs";
import { j as ma, T as pa, u as ha, J as ga } from "./Table-DB12oa-o.mjs";
import { F as ba } from "./exclamation-mark-kRjYDG-V.mjs";
import { i as _a, u as fa } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { a as Na } from "./link-helper.util-CuUJj7TV.mjs";
import { u as ja } from "./useInitialTableFetch.hook-D3_Uekdv.mjs";
const ve = ({
  actionsMenu: t,
  expandedRowsData: a,
  handleSelectItem: i,
  mainRowItemsCount: s = 1,
  rowIndex: h,
  rowItem: r,
  selectedItem: l,
  toggleRow: m,
  withQuickActions: f = !1
}) => {
  const b = G(), N = ue(), d = P(
    () => la(b, a, r),
    [r, a]
  ), A = Z(
    "table-row",
    "table-body-row",
    "parent-row",
    Y(l, !0) === r.data?.ui?.identifierUnique && !d && "table-row_active",
    d && ca
  );
  return /* @__PURE__ */ o.jsx("tr", { className: A, ref: b, children: d ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "td",
      {
        "data-testid": Ae(h),
        className: `table-body__cell
              ${d && "row_grouped-by"}`,
        children: /* @__PURE__ */ o.jsx("table", { cellPadding: "0", cellSpacing: "0", className: "table", children: /* @__PURE__ */ o.jsx("tbody", { className: "table-body", children: /* @__PURE__ */ o.jsxs("tr", { className: "table-row", children: [
          r.content.map((_, F) => {
            const C = Z(
              F >= s && "table-body__cell_hidden"
            );
            return !_.hidden && /* @__PURE__ */ o.jsx(
              ie,
              {
                className: C,
                cellData: _,
                firstCell: F === 0,
                item: r,
                selectItem: i,
                selectedItem: l,
                showExpandButton: !0,
                toggleRow: m
              },
              _.id
            );
          }),
          /* @__PURE__ */ o.jsx("td", { className: "table-body__cell table-cell-icon" })
        ] }) }) })
      }
    ),
    a[r.data.ui.identifier]?.content.map((_, F) => {
      const C = Z(
        "table-row",
        "table-body-row",
        l.name && Y(l, !0) === _.data.ui.identifierUnique && "table-row_active"
      );
      return /* @__PURE__ */ o.jsx(
        "td",
        {
          "data-testid": Ae(h, F),
          className: "table-body__cell",
          children: /* @__PURE__ */ o.jsx("table", { cellPadding: "0", cellSpacing: "0", className: "table", children: /* @__PURE__ */ o.jsx("tbody", { className: "table-body", children: /* @__PURE__ */ o.jsxs("tr", { className: C, children: [
            _.content.map((j, g) => {
              const O = Z(
                !T.isEmpty(l) && g >= s && "table-body__cell_hidden"
              );
              return !j.hidden && /* @__PURE__ */ o.jsx(
                ie,
                {
                  className: O,
                  cellData: j.expandedCellContent ? j.expandedCellContent : j,
                  item: _.data,
                  link: j.getLink?.(N.tab ?? je),
                  selectItem: i,
                  selectedItem: l
                },
                j.id
              );
            }),
            /* @__PURE__ */ o.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ o.jsx(
              Ee,
              {
                dataItem: _.data,
                menu: t,
                withQuickActions: f
              }
            ) })
          ] }) }) })
        },
        F
      );
    })
  ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    r.content.map((_, F) => !_.hidden && /* @__PURE__ */ o.jsx(
      ie,
      {
        cellData: _,
        firstCell: F === 0,
        item: r.data,
        link: _.getLink?.(N.tab ?? je),
        selectItem: i,
        selectedItem: l,
        showExpandButton: _.showExpandButton,
        toggleRow: m
      },
      _.id
    )),
    /* @__PURE__ */ o.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ o.jsx(
      Ee,
      {
        dataItem: r.data,
        menu: t,
        withQuickActions: f
      }
    ) })
  ] }) });
};
ve.propTypes = {
  actionsMenu: nt.isRequired,
  expandedRowsData: c.object.isRequired,
  handleSelectItem: c.func.isRequired,
  mainRowItemsCount: c.number,
  rowIndex: c.number.isRequired,
  rowItem: c.object.isRequired,
  selectedItem: c.object.isRequired,
  toggleRow: c.func.isRequired,
  withQuickActions: c.bool
};
const Pe = ({
  actionsMenu: t,
  allRowsAreExpanded: a,
  closePanel: i,
  confirmData: s = null,
  createFunctionSuccess: h,
  editableItem: r = null,
  expandedRowsData: l,
  filters: m,
  filtersChangeCallback: f,
  filtersStore: b,
  functions: N,
  functionsFiltersConfig: d,
  functionsPanelIsOpen: A,
  functionsStore: _,
  getPopUpTemplate: F,
  handleCancel: C,
  handleDeployFunctionFailure: j,
  handleDeployFunctionSuccess: g,
  handleSelectFunction: O,
  isDemoMode: te,
  pageData: ae,
  requestErrorMessage: z,
  selectedFunction: k,
  setSearchParams: H,
  tableContent: W,
  toggleAllRows: se,
  toggleRow: $,
  virtualizationConfig: U
}) => {
  const J = ue();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "content-wrapper", children: [
      /* @__PURE__ */ o.jsx("div", { className: "content__header", children: /* @__PURE__ */ o.jsx(na, {}) }),
      /* @__PURE__ */ o.jsx("div", { className: "content", children: /* @__PURE__ */ o.jsxs("div", { className: "table-container", children: [
        /* @__PURE__ */ o.jsx("div", { className: "content__action-bar-wrapper", children: /* @__PURE__ */ o.jsx(
          sa,
          {
            allRowsAreExpanded: a,
            filters: m,
            filtersConfig: d,
            handleRefresh: f,
            closeParamName: ot,
            setSearchParams: H,
            toggleAllRows: se,
            actionButtons: [
              {
                hidden: !te,
                template: F({
                  className: "action-button",
                  label: "New",
                  variant: it
                })
              }
            ],
            children: /* @__PURE__ */ o.jsx(oa, {})
          }
        ) }),
        _.loading ? /* @__PURE__ */ o.jsx(Fe, {}) : N.length === 0 ? /* @__PURE__ */ o.jsx(
          ua,
          {
            message: ma(
              m,
              d,
              z,
              de,
              null,
              b
            )
          }
        ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          _.funcLoading && /* @__PURE__ */ o.jsx(Fe, {}),
          /* @__PURE__ */ o.jsx(
            pa,
            {
              actionsMenu: t,
              handleCancel: C,
              pageData: ae,
              selectedItem: k,
              tableClassName: "functions-table",
              tableHeaders: W[0]?.content ?? [],
              virtualizationConfig: U,
              children: W.map(
                (n, K) => _a(U, K) && /* @__PURE__ */ o.jsx(
                  ve,
                  {
                    actionsMenu: t,
                    expandedRowsData: l,
                    handleSelectItem: O,
                    rowIndex: K,
                    rowItem: n,
                    selectedItem: k,
                    toggleRow: $,
                    withQuickActions: !0
                  },
                  n.data.ui.identifier
                )
              )
            }
          )
        ] })
      ] }) })
    ] }),
    A && /* @__PURE__ */ o.jsx(
      ia,
      {
        closePanel: i,
        createFunctionSuccess: h,
        defaultData: r,
        handleDeployFunctionFailure: j,
        handleDeployFunctionSuccess: g,
        mode: r ? rt : lt,
        project: J.projectName
      }
    ),
    s && /* @__PURE__ */ o.jsx(
      ct,
      {
        cancelButton: {
          handler: s.rejectHandler,
          label: s.btnCancelLabel,
          variant: s.btnCancelVariant
        },
        closePopUp: s.rejectHandler,
        confirmButton: {
          handler: () => s.confirmHandler(s.item),
          label: s.btnConfirmLabel,
          variant: s.btnConfirmVariant
        },
        header: s.header,
        isOpen: !!s,
        message: s.message
      }
    )
  ] });
};
Pe.propTypes = {
  actionsMenu: c.func.isRequired,
  allRowsAreExpanded: c.bool.isRequired,
  closePanel: c.func.isRequired,
  confirmData: c.object,
  createFunctionSuccess: c.func.isRequired,
  editableItem: c.object,
  expandedRowsData: c.object.isRequired,
  filters: c.object.isRequired,
  filtersChangeCallback: c.func.isRequired,
  filtersStore: c.object.isRequired,
  functions: c.arrayOf(c.object).isRequired,
  functionsFiltersConfig: ba.isRequired,
  functionsPanelIsOpen: c.bool.isRequired,
  functionsStore: c.object.isRequired,
  getPopUpTemplate: c.func.isRequired,
  handleCancel: c.func.isRequired,
  handleDeployFunctionFailure: c.func.isRequired,
  handleDeployFunctionSuccess: c.func.isRequired,
  handleSelectFunction: c.func.isRequired,
  isDemoMode: c.bool.isRequired,
  pageData: c.object.isRequired,
  requestErrorMessage: c.string.isRequired,
  selectedFunction: c.object.isRequired,
  setSearchParams: c.func.isRequired,
  tableContent: c.arrayOf(c.object).isRequired,
  toggleAllRows: c.func.isRequired,
  toggleRow: c.func.isRequired,
  virtualizationConfig: dt.isRequired
};
const Ea = "FUNCTIONS", Fa = [ft, Nt], qe = [pt], Ra = [
  _t,
  De,
  ...qe,
  ...Fa
], Ta = (t, a, i, s, h, r, l, m) => Ct(
  t,
  h,
  i,
  a.name,
  a.tag,
  s,
  r,
  () => l(m)
), wa = (t, a, i, s, h) => wt(
  t,
  h,
  i,
  a.name,
  a.tag,
  s
), Ca = (t) => {
  clearTimeout(t.current), t.current = null;
}, ya = (t) => {
  clearTimeout(t.current), t.current = null;
}, Aa = (t, a, i, s, h, r, l) => {
  const m = a.type === q;
  return {
    page: Ea,
    details: {
      additionalLogsTitle: "Function",
      logsTitle: "Application",
      menu: xa(a),
      infoHeaders: Sa(a),
      logsNoDataMessage: a.tag ? "No data to show" : "Cannot show build logs for an untagged function.",
      refreshLogs: (f, b, N) => {
        if (a.tag)
          return Ta(
            t,
            f,
            b,
            N,
            i,
            h,
            r,
            l
          );
      },
      refreshAdditionalLogs: (f, b, N) => {
        if (m && a.tag)
          return wa(
            t,
            f,
            b,
            N,
            s
          );
      },
      removeLogs: () => Ca(i),
      removeAdditionalLogs: () => {
        if (m)
          return () => ya(s);
      },
      withLogsRefreshBtn: !1,
      type: de
    }
  };
}, xa = (t) => [
  {
    id: "overview",
    label: "overview"
  },
  {
    id: "code",
    label: "code",
    hidden: t.type === q
  },
  {
    id: Ie,
    label: "build log"
  }
], Sa = (t) => [
  { label: "Name", id: "name" },
  { label: "Kind", id: "type" },
  { label: "Code entry point", id: "command" },
  {
    label: "Internal URL",
    id: "internalUrl",
    hidden: t.type !== q
  },
  { label: "Image", id: "image", hidden: t.type === q },
  {
    label: "Application image",
    id: "applicationImage",
    hidden: t.type !== q
  },
  { label: "Version tag", id: "tag" },
  { label: "Hash", id: "hash" },
  {
    label: "Internal port",
    id: "internalPort",
    hidden: t.type !== q
  },
  {
    label: "Code origin",
    id: "codeOrigin",
    hidden: t.type === q
  },
  { label: "Updated", id: "updated" },
  {
    label: "Default handler",
    id: "defaultHandler",
    hidden: t.type === q
  },
  { label: "Description", id: "description" }
], Ia = (t) => {
  const a = [ce, yt, ""];
  return t && a.push(Oe), a;
}, Da = (t, a, i, s, h, r, l, m, f, b, N, d, A, _ = !1) => {
  const F = Pa(a, N), C = (j) => qa(d, t, A, j);
  return [
    [
      {
        id: "run",
        label: "Run",
        icon: /* @__PURE__ */ o.jsx(bt, {}),
        disabled: F,
        onClick: (j) => {
          C(j).then((g) => {
            g?.project && g?.name && g?.hash && g?.ui?.originalContent ? (t(ht(g.ui.originalContent)), h(gt)) : M(t, {}, "", "Failed to retrieve function data");
          });
        },
        hidden: !mt.includes(a?.type) || !qe.includes(a?.state?.value) || _
      },
      {
        label: "Edit",
        icon: /* @__PURE__ */ o.jsx(jt, {}),
        disabled: F,
        onClick: (j) => {
          C(j).then((g) => {
            T.isEmpty(g) || (r(!0), l(g));
          });
        },
        hidden: !i || !Ia(s).includes(a?.type) || !Ra.includes(a?.state?.value) || _
      },
      {
        label: "View YAML",
        icon: /* @__PURE__ */ o.jsx(Et, {}),
        disabled: F,
        onClick: (j) => C(j).then((g) => !T.isEmpty(g) && f(g))
      },
      {
        label: "Delete",
        icon: /* @__PURE__ */ o.jsx(Ft, {}),
        className: "danger",
        disabled: F,
        onClick: m,
        hidden: _
      }
    ],
    [
      {
        id: "build-and-run",
        label: "Build and run",
        icon: /* @__PURE__ */ o.jsx(Re, {}),
        disabled: F,
        onClick: (j) => C(j).then((g) => !T.isEmpty(g) && b(g)),
        // todo: move out of "demo" mode and make additional changes as needed after the BE part is implemented.
        hidden: !i || a?.type !== ce || a?.type === ce && a?.state?.value !== De || _
      },
      {
        id: "deploy",
        label: "Deploy",
        icon: /* @__PURE__ */ o.jsx(Re, {}),
        disabled: F,
        onClick: (j) => {
          C(j).then((g) => {
            T.isEmpty(g) || (r(!0), l(g));
          });
        },
        hidden: !i || a?.type !== Oe || _
      }
    ]
  ];
}, xe = (t, a, i, s, h) => {
  const r = Object.keys(i), l = () => r.length === 1 ? we.getProjectBackgroundTask(t, r[0]) : we.getProjectBackgroundTasks(t), m = (f) => {
    const N = (r.length === 1 ? [f.data] : T.get(f, "data.background_tasks", [])).filter(
      (d) => i?.[d.metadata.name] && [Te, Rt].includes(d.status?.state)
    );
    return N.length > 0 && (N.forEach((d) => {
      d.status.state === Te ? va(h, i[d.metadata.name]) : M(h, {}, d.status.error || "Failed to delete the function");
    }), s(t)), N.length > 0;
  };
  a?.current?.(), a.current = null, ut(l, m, { terminatePollRef: a });
}, Oa = T.debounce(
  (t, a, i, s, h, r) => {
    if (T.isEmpty(s))
      h({});
    else {
      const { name: l, hash: m, tag: f } = s;
      Le(t, i, r, l, m, f, !0).then((b) => {
        h(b);
      }).catch(() => {
        h({}), a(`/projects/${r}/functions${window.location.search}`, { replace: !0 });
      });
    }
  },
  20
), va = (t, a) => {
  t(
    V({
      status: 200,
      id: Math.random(),
      message: `Function ${a.name} is successfully deleted`
    })
  );
}, Pa = (t, a) => Object.values(a).some((i) => i.name === t?.name), Le = (t, a, i, s, h, r, l) => t(
  a({ project: i, name: s, hash: h, tag: r })
).unwrap().then((m) => At(m, i)).catch((m) => {
  if (M(
    t,
    m,
    "",
    "This function either does not exist or was deleted"
  ), l)
    return Promise.reject(m);
}), qa = (t, a, i, s) => T.isEmpty(t) ? Le(
  a,
  i,
  s?.project,
  s?.name,
  s?.hash,
  s?.tag
) : Promise.resolve(t), La = (t, a, i, s, h, r, l, m, f) => {
  queueMicrotask(() => {
    if (t || s) {
      const b = a?.[t]?.content || i;
      if (b.length > 0) {
        const N = ke(
          s,
          t,
          h,
          l,
          b.map((d) => d.data ?? d),
          f,
          !0
        );
        N ? m((d) => T.isEqual(d, N) ? d : N) : r(`/projects/${l}/functions${window.location.search}`, { replace: !0 });
      }
    } else
      m({});
  });
}, ke = (t, a, i, s, h, r, l = !1) => {
  let m = {};
  if (t) {
    const f = t.indexOf(":") > 0;
    let b, N, d = "";
    m = h.find((A) => f ? ([b, N] = t.split(":"), T.isEqual(A.tag, N) && T.isEqual(A.name, b)) : ([b, d] = t.split("@"), T.isEqual(A.hash, d) && T.isEqual(A.name, b))), l && Se(m, { tag: N, name: b, hash: d }, s, r);
  } else a && i && (m = h.find((f) => T.isEqual(f.tag, i) && T.isEqual(f.name, a)), l && Se(m, { name: a, tag: i }, s, r));
  return m;
}, Se = (t, a, i, s) => {
  (!t || Object.keys(t).length === 0) && Tt.getFunction(i, a.name, a.hash, a.tag).catch(() => {
    M(s, {}, "This function either does not exist or was deleted");
  });
}, ka = () => {
  const [t, a] = I(null), [i, s] = I([]), [h, r] = I({}), [l, m] = I({}), [f, b] = I(null), [N, d] = I(!1), [A, _] = I(!1), [F, C] = I(null), j = ye((e) => e.filtersStore), [g, O] = I({}), [te, ae] = I(""), [z, k] = I({}), H = G(new AbortController()), W = G(null), se = G(null), $ = G(null), { isDemoMode: U, isStagingMode: J } = xt(), n = ue(), [, K] = ea(), y = ta(), me = aa(), u = Zt(), Q = ye((e) => e.functionsStore), Ue = P(() => re("--functionsRowHeight"), []), Be = P(
    () => re("--functionsRowHeightExtended"),
    []
  ), Me = P(
    () => re("--functionsHeaderRowHeight"),
    []
  ), pe = P(() => ({
    [Pt]: { label: "Name:", initialValue: "" },
    [Dt]: {
      label: "Updated:",
      initialValue: St(vt, Ot)
    },
    [It]: { label: "Show untagged:", initialValue: !1, isModal: !0 }
  }), []), L = ha(pe), he = D(() => {
    $?.current?.(), k({});
  }, []), x = D(
    (e, R = !1) => (he(), H.current = new AbortController(), s([]), u(
      qt({
        project: n.projectName,
        filters: e,
        config: {
          ui: {
            controller: H.current,
            setRequestErrorMessage: ae
          },
          params: {
            format: "minimal"
          }
        }
      })
    ).unwrap().then((E) => {
      if (E?.funcs?.length > 0) {
        const p = Lt(E?.funcs, n.projectName), w = p.reduce((S, v) => (v.deletion_task_id && !v.deletion_error && !S[v.deletion_task_id] && (S[v.deletion_task_id] = {
          name: v.name
        }), S), {});
        return T.isEmpty(w) || (k(w), xe(
          n.projectName,
          $,
          w,
          () => x(e),
          u
        )), s(p), p;
      } else R || ke(
        n.hash,
        n.funcName,
        n.tag,
        n.projectName,
        [],
        u,
        !0
      ) || y(`/projects/${n.projectName}/functions${window.location.search}`, {
        replace: !0
      });
    }).catch(() => {
      s([]);
    })),
    [
      u,
      y,
      n.funcName,
      n.hash,
      n.projectName,
      n.tag,
      he
    ]
  ), ne = D(
    (e, R) => (s([]), r({}), O({}), x(e, R)),
    [x]
  ), He = D(
    (e, R) => {
      const E = Y(e);
      O((p) => ({
        ...p,
        [E]: {
          content: R[E].map(
            (w) => le(w, n.projectName, !1, !1, !0)
          )
        }
      }));
    },
    [n.projectName]
  ), $e = D(
    (e) => {
      const R = Y(e.data), E = { ...g };
      delete E[R], O(E);
    },
    [g]
  ), Ve = D(
    (e, R) => {
      const E = {};
      e ? O({}) : Object.entries(R).forEach(([p, w]) => {
        E[p] = {
          content: w.map(
            (S) => le(S, n.projectName, !1, !1, !0)
          )
        };
      }), O(E);
    },
    [n.projectName]
  ), { latestItems: ge, allRowsAreExpanded: Ge, toggleRow: Ye, toggleAllRows: ze } = da(
    i,
    Y,
    $e,
    He,
    null,
    de,
    null,
    Ve
  ), be = P(
    () => ge.map(
      (e) => le(e, n.projectName, !1, !0, !0)
    ),
    [ge, n.projectName]
  ), _e = D(
    (e) => {
      u(kt({ funcName: e.name, project: n.projectName })).unwrap().then((R) => {
        Ut(R) && (u(
          V({
            status: 200,
            id: Math.random(),
            message: "Function deletion in progress"
          })
        ), k((E) => {
          const p = {
            ...E,
            [R.data.metadata.name]: {
              name: e.name
            }
          };
          return xe(
            n.projectName,
            $,
            p,
            () => x(L),
            u
          ), p;
        }), T.isEmpty(l) || (r({}), y(`/projects/${n.projectName}/functions${window.location.search}`, {
          replace: !0
        })));
      }), a(null);
    },
    [u, x, L, y, n.projectName, l]
  ), fe = D(
    (e) => u(Bt(e)),
    [u]
  ), Ne = D(
    (e) => {
      a({
        item: e,
        header: "Delete function?",
        message: `You try to delete function "${e.name}". Deleted functions cannot be restored.`,
        btnCancelLabel: "Cancel",
        btnCancelVariant: Ht,
        btnConfirmLabel: "Delete",
        btnConfirmVariant: Mt,
        rejectHandler: () => a(null),
        confirmHandler: () => _e(e)
      });
    },
    [_e]
  ), oe = D(
    (e) => {
      const R = {
        function: {
          kind: e.type,
          metadata: {
            credentials: {
              access_key: e.access_key
            },
            labels: e.labels,
            name: e.name,
            project: e.project,
            tag: e.tag
          },
          spec: {
            args: e.args,
            base_spec: e.base_spec,
            build: e.build,
            command: e.command,
            default_class: e.default_class,
            default_handler: e.default_handler,
            description: e.description,
            disable_auto_mount: e.disable_auto_mount,
            env: e.env,
            error_stream: e.error_stream,
            graph: e.graph,
            image: e.image,
            parameters: e.parameters,
            preemption_mode: e.preemption_mode,
            priority_class_name: e.priority_class_name,
            resources: e.resources,
            secret_sources: e.secret_sources,
            track_models: e.track_models,
            volume_mounts: e.volume_mounts,
            volumes: e.volumes
          }
        }
      };
      u($t({ data: R })).unwrap().then((E) => {
        const p = E.data.data, w = {
          function: {
            metadata: {
              credentials: {
                access_key: p.metadata.credentials.access_key
              }
            },
            spec: {
              build: p.spec.build,
              env: p.spec.env,
              image: p.spec.image,
              node_selector: p.spec.node_selector,
              preemption_mode: p.spec.preemption_mode,
              priority_class_name: p.spec.priority_class_name,
              resources: p.spec.resources,
              volume_mounts: p.spec.volume_mounts,
              volumes: p.spec.volumes
            }
          },
          task: {
            metadata: {
              labels: p.metadata.labels,
              name: p.metadata.name,
              project: p.metadata.project
            },
            spec: {
              function: `${e.project}/${e.name}@${e.hash}`,
              handler: p.spec.default_handler,
              input_path: "",
              inputs: {},
              output_path: Gt,
              parameters: {}
            }
          }
        };
        return u(Vt({ postData: w }));
      }).unwrap().then(() => {
        u(
          V({
            status: 200,
            id: Math.random(),
            message: "Function is built and ran successfully."
          })
        ), ne(L);
      }).catch((E) => {
        M(u, E, "Failed to build and run function.", "", () => {
          oe(e);
        });
      });
    },
    [u, L, ne]
  ), X = P(
    () => Aa(
      u,
      l,
      W,
      se,
      y,
      x,
      j
    ),
    [u, x, j, y, l]
  ), We = P(
    () => (e) => Da(
      u,
      e,
      U,
      J,
      C,
      d,
      b,
      Ne,
      fe,
      oe,
      z,
      l,
      Ce
    ),
    [
      u,
      U,
      J,
      Ne,
      fe,
      oe,
      z,
      l
    ]
  );
  B(() => {
    Oa(
      u,
      y,
      Ce,
      h,
      m,
      n.projectName
    );
  }, [u, y, n.projectName, h]), ja({
    fetchData: x,
    filters: L
  }), B(() => {
    const e = H.current;
    return () => {
      r({}), s([]), O({}), e.abort(Yt);
    };
  }, [n.projectName]), B(() => {
    (n.funcName || n.hash) && X.details.menu.length > 0 && Na(n.tab, X.details.menu, y, me);
  }, [y, X.details.menu, me, n.hash, n.funcName, n.tab]), B(() => {
    La(
      n.funcName,
      g,
      i,
      n.hash,
      n.tag,
      y,
      n.projectName,
      r,
      u
    );
  }, [
    u,
    i,
    y,
    n.funcName,
    n.hash,
    n.projectName,
    n.tag,
    g
  ]), B(() => {
    u(zt({ groupBy: Wt }));
  }, [u, n.projectName]);
  const Je = (e) => {
    ne(e, !0);
  }, Ke = () => {
    document.getElementsByClassName("view")[0] && document.getElementsByClassName("view")[0].classList.remove("view");
  }, Qe = () => {
    d(!1), b(null), u(ee()), Q.error && u(Qt());
  }, Xe = (e) => (b(null), d(!1), u(ee()), x().then(() => {
    u(
      V({
        status: 200,
        id: Math.random(),
        message: e ? "Function edited successfully" : "Function created successfully"
      })
    );
  })), Ze = (e) => {
    let { name: R, tag: E } = Q.newFunction.metadata;
    const p = e === !1 ? Ie : "overview";
    return E ||= Kt, d(!1), b(null), u(ee()), x(L).then((w) => {
      if (w.length) {
        const S = w.find((v) => v.name === R && v.tag === E);
        S && y(
          `/projects/${n.projectName}/functions/${S.hash}/${p}${window.location.search}`
        ), u(
          V({
            status: 200,
            id: Math.random(),
            message: "Function was deployed"
          })
        );
      }
    });
  }, et = (e) => {
    const { name: R, tag: E } = Q.newFunction.metadata;
    return d(!1), u(ee()), x().then((p) => {
      if (p) {
        const w = p.find((S) => S.name === R && S.tag === E);
        M(u, e, "", "Failed to deploy the function"), w && y(
          `/projects/${n.projectName}/functions/${w.hash}/overview${window.location.search}`
        );
      }
    });
  }, tt = D(
    (e) => /* @__PURE__ */ o.jsx(
      ra,
      {
        action: e,
        currentProject: n.projectName,
        isCustomPosition: !0,
        setFunctionsPanelIsOpen: d
      },
      e
    ),
    [n.projectName]
  ), at = () => {
    r({});
  };
  B(() => {
    !A && F && (Jt(ga, {
      params: n,
      onWizardClose: () => {
        C(null), _(!1);
      },
      mode: F
    }), _(!0));
  }, [f, A, F, n]);
  const st = fa({
    rowsData: {
      content: be,
      expandedRowsData: g,
      selectedItem: l
    },
    heightData: {
      headerRowHeight: Me,
      rowHeight: Ue,
      rowHeightExtended: Be
    },
    activateTableScroll: !0
  });
  return /* @__PURE__ */ o.jsx(
    Pe,
    {
      actionsMenu: We,
      allRowsAreExpanded: Ge,
      closePanel: Qe,
      confirmData: t,
      createFunctionSuccess: Xe,
      editableItem: f,
      expandedRowsData: g,
      filters: L,
      filtersChangeCallback: Je,
      filtersStore: j,
      functions: i,
      functionsFiltersConfig: pe,
      functionsPanelIsOpen: N,
      functionsStore: Q,
      getPopUpTemplate: tt,
      handleCancel: at,
      handleDeployFunctionFailure: et,
      handleDeployFunctionSuccess: Ze,
      handleSelectFunction: Ke,
      isDemoMode: U,
      pageData: X,
      requestErrorMessage: te,
      selectedFunction: l,
      setSearchParams: K,
      tableContent: be,
      toggleAllRows: ze,
      toggleRow: Ye,
      virtualizationConfig: st
    }
  );
}, es = Xt.memo(ka);
export {
  es as default
};
//# sourceMappingURL=FunctionsOld-CC3N3VWQ.mjs.map
