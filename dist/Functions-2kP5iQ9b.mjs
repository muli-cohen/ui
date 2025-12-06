import { c as Ge, w as ze, j as o, x as We, z as Je, I as Ye, P as s, B as Qe, aE as Ke, aF as L, E as ue, p as Ze, i as je, e as D, G as Xe, H as Ae, J as Ve, K as et, ag as tt, ai as at, aj as nt, ak as st, aG as ot, al as rt, am as ct, an as it, aH as Ne, aI as Re, ao as ut, aB as Ee, ap as lt, aJ as Pe, aq as mt, ar as dt, af as Z, t as pt, as as ft, at as ht, au as gt, av as Ft, aw as _t, V as we, aK as bt, aL as jt, aM as Nt, ax as Rt, ay as Et, az as Pt, aN as wt, m as Ct, aO as Tt, aP as St, aC as X, Q as yt, aD as It } from "./main-CTYpZ6Nf.mjs";
import vt, { useRef as S, useState as F, useMemo as A, useCallback as _, useEffect as x } from "react";
import { useSelector as Ce, useDispatch as xt } from "react-redux";
import { useParams as le, useSearchParams as qt, useNavigate as Dt, useLocation as Lt } from "react-router-dom";
import { A as $t } from "./ActionBar-C8Jl3Xmo.mjs";
import { B as kt } from "./Breadcrumbs-DDXz9SNg.mjs";
import { F as Ot, c as Mt } from "./createFunctionsRowData-CJCS8TMo.mjs";
import { F as Bt, N as Ht } from "./NewFunctionPopUp-DujV59Hs.mjs";
import { H as Ut } from "./historyBackLink-D1MctrX9.mjs";
import { N as Gt } from "./StatsCard-Cm7Pku2T.mjs";
import { P as zt } from "./Pagination-DsTIZ30r.mjs";
import { j as Wt, T as Jt, u as Yt, J as Qt } from "./Table-DB12oa-o.mjs";
import { F as Kt } from "./exclamation-mark-kRjYDG-V.mjs";
import { g as Zt, a as Xt } from "./link-helper.util-CuUJj7TV.mjs";
import { u as Te } from "./usePagination.hook-EDISVLLo.mjs";
const Se = ({
  actionsMenu: t,
  handleSelectItem: $,
  rowItem: c,
  selectedItem: R,
  withQuickActions: E = !1
}) => {
  const P = S(), y = le(), l = Ge(
    "table-row",
    "table-body-row",
    "parent-row",
    ze(R, !0) === c.data?.ui?.identifierUnique && "table-row_active"
  );
  return /* @__PURE__ */ o.jsx("tr", { className: l, ref: P, children: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    c.content.map((m, I) => !m.hidden && /* @__PURE__ */ o.jsx(
      We,
      {
        cellData: m,
        firstCell: I === 0,
        item: c.data,
        link: m.getLink?.(y.tab ?? Je),
        selectedItem: R,
        selectItem: $
      },
      m.id
    )),
    /* @__PURE__ */ o.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ o.jsx(
      Ye,
      {
        dataItem: c.data,
        menu: t,
        withQuickActions: E
      }
    ) })
  ] }) });
};
Se.propTypes = {
  actionsMenu: Qe.isRequired,
  handleSelectItem: s.func.isRequired,
  rowItem: s.object.isRequired,
  selectedItem: s.object.isRequired,
  withQuickActions: s.bool
};
const ye = ({
  actionsMenu: t,
  closePanel: $,
  confirmData: c = null,
  createFunctionSuccess: R,
  editableItem: E = null,
  filters: P,
  filtersStore: y,
  functionsFiltersConfig: l,
  functionsPanelIsOpen: m,
  functionsStore: I,
  getPopUpTemplate: q,
  handleCancel: V,
  handleDeployFunctionFailure: w,
  handleDeployFunctionSuccess: U,
  handleRefreshFunctions: G,
  handleSelectFunction: k,
  isAllVersions: b,
  isDemoMode: O,
  pageData: ee,
  paginationConfigFunctionsRef: te,
  requestErrorMessage: z,
  selectedFunction: v,
  setSearchFunctionsParams: j,
  tableContent: p
}) => {
  const h = le();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "content-wrapper", children: [
      /* @__PURE__ */ o.jsx("div", { className: "content__header", children: /* @__PURE__ */ o.jsx(kt, {}) }),
      /* @__PURE__ */ o.jsx("div", { className: "content", children: /* @__PURE__ */ o.jsxs("div", { className: "table-container", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "content__action-bar-wrapper", children: [
          b && /* @__PURE__ */ o.jsx(
            Ut,
            {
              link: `/projects/${h.projectName}/functions${Ke(window.location.search)}`,
              itemName: h.funcName
            }
          ),
          /* @__PURE__ */ o.jsx(
            $t,
            {
              actionButtons: [
                {
                  hidden: !O,
                  template: q({
                    className: "action-button",
                    label: "New",
                    variant: Ze
                  })
                }
              ],
              closeParamName: b ? L : ue,
              filters: P,
              filtersConfig: l,
              handleRefresh: G,
              setSearchParams: j,
              selectedItemName: h.funcName,
              withoutExpandButton: !0,
              children: /* @__PURE__ */ o.jsx(Ot, {})
            }
          )
        ] }),
        I.loading ? /* @__PURE__ */ o.jsx(je, {}) : p.length === 0 && D.isEmpty(v) ? /* @__PURE__ */ o.jsx(
          Gt,
          {
            message: Wt(
              P,
              l,
              z,
              Xe,
              null,
              y
            )
          }
        ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          I.funcLoading && /* @__PURE__ */ o.jsx(je, {}),
          /* @__PURE__ */ o.jsx(
            Jt,
            {
              actionsMenu: t,
              getCloseDetailsLink: () => Zt(b ? L : ue, !1, h.funcName),
              handleCancel: V,
              pageData: ee,
              selectedItem: v,
              tableClassName: "functions-table",
              tableHeaders: p[0]?.content ?? [
                {
                  headerId: b ? "hash" : "name",
                  headerLabel: b ? "Hash" : "Name",
                  className: "table-cell-name"
                }
              ],
              children: p.map((W, ae) => /* @__PURE__ */ o.jsx(
                Se,
                {
                  actionsMenu: t,
                  handleSelectItem: k,
                  rowItem: W,
                  selectedItem: v,
                  withQuickActions: !0
                },
                W.data.hash + ae
              ))
            }
          ),
          /* @__PURE__ */ o.jsx(
            zt,
            {
              paginationConfig: te.current,
              closeParamName: b ? L : ue,
              selectedItemName: h.funcName
            }
          )
        ] })
      ] }) })
    ] }),
    m && /* @__PURE__ */ o.jsx(
      Bt,
      {
        closePanel: $,
        createFunctionSuccess: R,
        defaultData: E,
        handleDeployFunctionFailure: w,
        handleDeployFunctionSuccess: U,
        mode: E ? Ae : Ve,
        project: h.projectName
      }
    ),
    c && /* @__PURE__ */ o.jsx(
      et,
      {
        cancelButton: {
          handler: c.rejectHandler,
          label: c.btnCancelLabel,
          variant: c.btnCancelVariant
        },
        closePopUp: c.rejectHandler,
        confirmButton: {
          handler: () => c.confirmHandler(c.item),
          label: c.btnConfirmLabel,
          variant: c.btnConfirmVariant
        },
        header: c.header,
        isOpen: !!c,
        message: c.message
      }
    )
  ] });
};
ye.propTypes = {
  actionsMenu: s.func.isRequired,
  closePanel: s.func.isRequired,
  confirmData: s.object,
  createFunctionSuccess: s.func.isRequired,
  editableItem: s.object,
  filters: s.object.isRequired,
  filtersStore: s.object.isRequired,
  functionsFiltersConfig: Kt.isRequired,
  functionsPanelIsOpen: s.bool.isRequired,
  functionsStore: s.object.isRequired,
  getPopUpTemplate: s.func.isRequired,
  handleCancel: s.func.isRequired,
  handleDeployFunctionFailure: s.func.isRequired,
  handleDeployFunctionSuccess: s.func.isRequired,
  handleRefreshFunctions: s.func.isRequired,
  handleSelectFunction: s.func.isRequired,
  isAllVersions: s.bool.isRequired,
  isDemoMode: s.bool.isRequired,
  pageData: s.object.isRequired,
  paginationConfigFunctionsRef: s.object.isRequired,
  requestErrorMessage: s.string.isRequired,
  selectedFunction: s.object.isRequired,
  setSearchFunctionsParams: s.func.isRequired,
  tableContent: s.arrayOf(s.object).isRequired
};
const Ie = ({ isAllVersions: t = !1 }) => {
  const [$, c] = F(null), [R, E] = F(null), [P, y] = F(null), [l, m] = F({}), [I, q] = F(null), [V, w] = F(!1), [U, G] = F(!1), [k, b] = F(null), O = Ce((e) => e.filtersStore), [ee, te] = F(""), [z, v] = F({}), j = S({}), p = S({}), h = S(new AbortController()), W = S(null), ae = S(null), ne = S(null), { isDemoMode: se, isStagingMode: me } = tt(), a = le(), [, ve] = qt(), d = Dt(), de = Lt(), n = xt(), J = S(null), Y = Ce((e) => e.functionsStore), pe = A(() => ({
    [it]: { label: "Name:", initialValue: "", hidden: t },
    [st]: {
      label: "Updated:",
      initialValue: at(
        ct,
        t ? ot : rt
      )
    },
    [nt]: {
      label: "Show untagged:",
      initialValue: !0,
      isModal: !0,
      hidden: !t
    }
  }), [t]), C = Yt(pe), fe = _(() => {
    ne?.current?.(), v({});
  }, []), M = _(
    (e) => {
      t ? y(e) : E(e);
    },
    [t]
  ), g = _(
    (e) => {
      fe(), h.current = new AbortController();
      const i = {
        format: "minimal",
        tag: Ee
      };
      return t ? (delete i.tag, i.name = a.funcName, y(null)) : E(null), !t && !D.isEmpty(j.current) && (i.page = j.current[Ne], i["page-size"] = j.current[Re]), t && !D.isEmpty(p.current) && (i.page = p.current[Ne], i["page-size"] = p.current[Re]), J.current = null, n(
        ut({
          project: a.projectName,
          filters: e,
          config: {
            ui: {
              controller: h.current,
              setRequestErrorMessage: te
            },
            params: i
          }
        })
      ).unwrap().then((u) => {
        if (u?.funcs)
          if (t ? p.current.paginationResponse = u.pagination : j.current.paginationResponse = u.pagination, u.funcs?.length > 0) {
            const r = lt(u.funcs, a.projectName), f = r.reduce((N, T) => (T.deletion_task_id && !T.deletion_error && !N[T.deletion_task_id] && (N[T.deletion_task_id] = {
              name: T.name
            }), N), {});
            return D.isEmpty(f) || (v(f), Pe(
              a.projectName,
              ne,
              f,
              () => g(e),
              n
            )), M(r), r;
          } else
            M([]);
        else
          M([]);
      }).catch(() => {
        M([]);
      });
    },
    [
      n,
      t,
      a.funcName,
      a.projectName,
      M,
      fe
    ]
  ), Q = _(
    (e) => (m({}), g(e)),
    [g]
  ), he = _(
    (e) => {
      n(mt({ funcName: e.name, project: a.projectName })).unwrap().then((i) => {
        dt(i) && (n(
          Z({
            status: 200,
            id: Math.random(),
            message: "Function deletion in progress"
          })
        ), v((u) => {
          const r = {
            ...u,
            [i.data.metadata.name]: {
              name: e.name
            }
          };
          return Pe(
            a.projectName,
            ne,
            r,
            () => g(C),
            n
          ), r;
        }), D.isEmpty(l) || (m({}), d(`/projects/${a.projectName}/functions${window.location.search}`, {
          replace: !0
        })));
      }), c(null);
    },
    [n, g, C, d, a.projectName, l]
  ), ge = _(
    (e) => n(pt(e)),
    [n]
  ), Fe = _(
    (e) => {
      c({
        item: e,
        header: "Delete function?",
        message: `You try to delete function "${e.name}". Deleted functions cannot be restored.`,
        btnCancelLabel: "Cancel",
        btnCancelVariant: ht,
        btnConfirmLabel: "Delete",
        btnConfirmVariant: ft,
        rejectHandler: () => c(null),
        confirmHandler: () => he(e)
      });
    },
    [he]
  ), oe = _(
    (e) => {
      const i = {
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
      n(gt({ data: i })).unwrap().then((u) => {
        const r = u.data.data, f = {
          function: {
            metadata: {
              credentials: {
                access_key: r.metadata.credentials.access_key
              }
            },
            spec: {
              build: r.spec.build,
              env: r.spec.env,
              image: r.spec.image,
              node_selector: r.spec.node_selector,
              preemption_mode: r.spec.preemption_mode,
              priority_class_name: r.spec.priority_class_name,
              resources: r.spec.resources,
              volume_mounts: r.spec.volume_mounts,
              volumes: r.spec.volumes
            }
          },
          task: {
            metadata: {
              labels: r.metadata.labels,
              name: r.metadata.name,
              project: r.metadata.project
            },
            spec: {
              function: `${e.project}/${e.name}@${e.hash}`,
              handler: r.spec.default_handler,
              input_path: "",
              inputs: {},
              output_path: _t,
              parameters: {}
            }
          }
        };
        return n(Ft({ postData: f }));
      }).unwrap().then(() => {
        n(
          Z({
            status: 200,
            id: Math.random(),
            message: "Function is built and ran successfully."
          })
        ), Q(C);
      }).catch((u) => {
        we(n, u, "Failed to build and run function.", "", () => {
          oe(e);
        });
      });
    },
    [n, C, Q]
  ), re = _(
    (e) => {
      d(
        `/projects/${a.projectName}/functions/${e}/${L}?${bt(window.location.search)}`
      );
    },
    [d, a.projectName]
  ), K = A(
    () => jt(
      n,
      l,
      W,
      ae,
      d,
      g,
      O
    ),
    [n, g, O, d, t, l, re]
  ), xe = A(
    () => (e) => Nt(
      n,
      e,
      se,
      me,
      b,
      w,
      q,
      Fe,
      ge,
      oe,
      z,
      l,
      Rt,
      !1,
      t,
      re
    ),
    [
      n,
      se,
      me,
      Fe,
      ge,
      oe,
      z,
      l,
      t,
      re
    ]
  );
  x(() => () => {
    E(null), y(null);
  }, [a.projectName]), x(() => {
    const e = h.current;
    return () => {
      m({}), e.abort(Et);
    };
  }, [a.projectName]), x(() => {
    a.id && K.details.menu.length > 0 && Xt(a.tab, K.details.menu, d, de);
  }, [d, K.details.menu, de, a.id, a.tab]), x(() => {
    n(Pt({ groupBy: wt }));
  }, [n, a.projectName]);
  const qe = () => {
    document.getElementsByClassName("view")[0] && document.getElementsByClassName("view")[0].classList.remove("view");
  }, De = () => {
    w(!1), q(null), n(X()), Y.error && n(It());
  }, Le = (e) => (q(null), w(!1), n(X()), g().then(() => {
    n(
      Z({
        status: 200,
        id: Math.random(),
        message: e ? "Function edited successfully" : "Function created successfully"
      })
    );
  })), $e = (e) => {
    let { name: i, tag: u } = Y.newFunction.metadata;
    const r = e === !1 ? yt : "overview";
    return u ||= Ee, w(!1), q(null), n(X()), g(C).then((f) => {
      if (f.length) {
        const N = f.find((T) => T.name === i && T.tag === u);
        N && d(
          `/projects/${a.projectName}/functions/${i ?? a.funcName}${t ? `/${L}` : ""}/:${u}@${N.hash}/${r}${window.location.search}`
        ), n(
          Z({
            status: 200,
            id: Math.random(),
            message: "Function was deployed"
          })
        );
      }
    });
  }, ke = (e) => {
    const { name: i, tag: u } = Y.newFunction.metadata;
    return w(!1), n(X()), g().then((r) => {
      if (r) {
        const f = r.find((N) => N.name === i && N.tag === u);
        we(n, e, "", "Failed to deploy the function"), f && d(
          `/projects/${a.projectName}/functions/${a.funcName}${t ? `/${L}` : ""}/@${f.hash}/overview${window.location.search}`
        );
      }
    });
  }, Oe = _(
    (e) => /* @__PURE__ */ o.jsx(
      Ht,
      {
        action: e,
        currentProject: a.projectName,
        isCustomPosition: !0,
        setFunctionsPanelIsOpen: w
      },
      e
    ),
    [a.projectName]
  ), Me = () => {
    m({});
  };
  x(() => {
    !U && k && (Ct(Qt, {
      params: a,
      onWizardClose: () => {
        b(null), G(!1);
      },
      mode: k
    }), G(!0));
  }, [I, U, k, a]);
  const [
    Be,
    B,
    _e,
    ce
  ] = Te({
    hidden: t,
    content: R ?? [],
    refreshContent: Q,
    filters: C,
    paginationConfigRef: j,
    resetPaginationTrigger: `${a.projectName}`
  }), [
    He,
    H,
    be,
    ie
  ] = Te({
    hidden: !t,
    content: P ?? [],
    refreshContent: Q,
    filters: C,
    paginationConfigRef: p,
    resetPaginationTrigger: `${a.projectName}_${t}`
  });
  Tt({
    content: t ? H : B,
    selectedItem: l,
    isAllVersions: t
  });
  const Ue = A(
    () => (t ? H : B).map(
      (e) => Mt(e, a.projectName, !!t)
    ),
    [t, H, B, a.projectName]
  );
  return x(() => {
    St(
      t ? H : B,
      t ? P : R,
      a.id,
      a.funcName,
      d,
      a.projectName,
      m,
      n,
      t,
      t ? be : _e,
      t ? p : j,
      t ? ie : ce,
      J
    );
  }, [
    n,
    P,
    R,
    t,
    d,
    H,
    B,
    a.funcName,
    a.id,
    a.projectName,
    be,
    _e,
    ie,
    ce,
    J
  ]), x(() => {
    D.isEmpty(l) && (J.current = null);
  }, [l]), /* @__PURE__ */ o.jsx(
    ye,
    {
      actionsMenu: xe,
      closePanel: De,
      confirmData: $,
      createFunctionSuccess: Le,
      editableItem: I,
      filters: C,
      filtersStore: O,
      functionsFiltersConfig: pe,
      functionsPanelIsOpen: V,
      functionsStore: Y,
      getPopUpTemplate: Oe,
      handleCancel: Me,
      handleDeployFunctionFailure: ke,
      handleDeployFunctionSuccess: $e,
      handleRefreshFunctions: t ? He : Be,
      handleSelectFunction: qe,
      isAllVersions: t,
      isDemoMode: se,
      pageData: K,
      paginationConfigFunctionsRef: t ? p : j,
      requestErrorMessage: ee,
      selectedFunction: l,
      setSearchFunctionsParams: t ? ie : ce,
      setSearchParams: ve,
      tableContent: Ue
    }
  );
};
Ie.propTypes = {
  isAllVersions: s.bool.isRequired
};
const pa = vt.memo(Ie);
export {
  pa as default
};
//# sourceMappingURL=Functions-2kP5iQ9b.mjs.map
