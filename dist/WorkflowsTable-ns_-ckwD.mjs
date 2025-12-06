import { c as Ce, gw as ko, j as a, x as bo, z as No, P as i, ag as jo, gx as Lo, e as N, gy as Co, gz as so, gA as Eo, br as To, bq as vo, gm as no, dg as ro, b5 as ae, bu as Io, gB as $, gC as Wo, bv as xo, bV as Ro, gD as io, aV as ue, gE as _o, gF as yo, bs as So, bk as Do, gG as Mo, bl as Ao, B as Ho, aN as Oo, gH as Ke, gI as Po, gJ as qo, gK as Bo, gL as Jo, G as Go, gM as Vo, gN as $o, gO as zo, gp as lo, gP as Ko, gQ as Uo, Y as Yo, bw as Zo, a2 as Ue, a3 as Fo, bY as Xo, dq as be, dF as Qo, gR as Ye, gS as et, ah as Ne, ac as ot, t as tt, gT as at, V as je, ds as Ze, gU as st, gn as nt, gV as rt, $ as Fe, a0 as Xe, go as it, as as Le, gW as lt, gq as ct, gX as dt, af as Qe, ax as eo, ae as oo, gY as ut, gr as de, m as ft, i as wt, aT as mt } from "./main-CTYpZ6Nf.mjs";
import * as A from "react";
import Ee, { useState as B, useEffect as _, useMemo as z, useRef as to, useCallback as c } from "react";
import { useDispatch as co, useSelector as K } from "react-redux";
import { useParams as Te, useNavigate as uo, useLocation as pt } from "react-router-dom";
import { E as fo, aq as ht, z as gt, M as kt, ar as bt, T as wo, N as V, G as Nt, ag as jt, as as Lt, J as Ct, j as Et } from "./Table-DB12oa-o.mjs";
import { g as Tt, J as vt } from "./createJobsContent-DIc0KSEj.mjs";
import { N as It } from "./StatsCard-Cm7Pku2T.mjs";
import { T as Wt } from "./TableTop-BzNlhhvf.mjs";
import { g as ao, a as xt } from "./link-helper.util-CuUJj7TV.mjs";
import { F as Rt } from "./exclamation-mark-kRjYDG-V.mjs";
import { u as _t, i as yt } from "./useVirtualization.hook-B2Lvanu1.mjs";
const mo = ({ handleSelectItem: t = () => {
}, rowItem: j, selectedItem: w = {} }) => {
  const E = Te(), L = Ce(
    "table-row",
    "parent-row",
    ko(j.data, w) && "table-row_active"
  );
  return /* @__PURE__ */ a.jsx("tr", { className: L, children: j.content.map((k, u) => !k.hidden && /* @__PURE__ */ a.jsx(
    bo,
    {
      cellData: k,
      item: j.data,
      firstCell: u === 0,
      link: k.type === "link" ? k.getLink?.(E.tab ?? No) : "",
      selectItem: t,
      selectedItem: w
    },
    `${j.data.id}.${k.header}.${u}`
  )) });
};
mo.propTypes = {
  handleSelectItem: i.func,
  rowItem: i.object.isRequired,
  selectedItem: i.object
};
const po = (t) => /* @__PURE__ */ A.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4ZM16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", fill: "#E54158" })), St = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24px", height: "24px", viewBox: "0 0 24 24", ...t }, /* @__PURE__ */ A.createElement("path", { style: {
  stroke: "none",
  fillRule: "nonzero",
  fill: "#7F7989",
  fillOpacity: 1
}, d: "M 7.554688 14.054688 L 20 14.054688 L 20 15.761719 L 7.554688 15.761719 Z M 20 12.351562 L 7.554688 12.351562 L 7.554688 10.648438 L 20 10.648438 Z M 7.554688 7.242188 L 20 7.242188 L 20 8.945312 L 7.554688 8.945312 Z M 3.996094 7.242188 L 5.777344 7.242188 L 5.777344 8.945312 L 3.996094 8.945312 Z M 5.777344 15.757812 L 3.996094 15.757812 L 3.996094 14.054688 L 5.777344 14.054688 Z M 3.996094 10.648438 L 5.777344 10.648438 L 5.777344 12.351562 L 3.996094 12.351562 Z M 3.996094 10.648438 " })), Dt = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24px", height: "24px", viewBox: "0 -1 24 24", ...t }, /* @__PURE__ */ A.createElement("path", { style: {
  stroke: "none",
  fillRule: "nonzero",
  fill: "#7F7989",
  fillOpacity: 1
}, d: "M 14.136719 8.96875 L 18.699219 8.96875 C 18.976562 8.96875 19.199219 8.757812 19.199219 8.496094 L 19.199219 4.15625 C 19.199219 3.890625 18.976562 3.679688 18.699219 3.679688 L 14.136719 3.679688 C 13.859375 3.679688 13.636719 3.894531 13.636719 4.15625 L 13.636719 5.578125 L 11.503906 5.578125 C 11.066406 5.578125 10.714844 5.910156 10.714844 6.324219 L 10.714844 10.316406 L 8.699219 10.316406 C 8.367188 9.375 7.433594 8.695312 6.332031 8.695312 C 4.957031 8.695312 3.839844 9.757812 3.839844 11.066406 C 3.839844 12.375 4.957031 13.4375 6.332031 13.4375 C 7.433594 13.4375 8.367188 12.753906 8.699219 11.8125 L 10.714844 11.8125 L 10.714844 15.804688 C 10.714844 16.21875 11.066406 16.554688 11.503906 16.554688 L 13.636719 16.554688 L 13.636719 17.925781 C 13.636719 18.1875 13.859375 18.402344 14.136719 18.402344 L 18.699219 18.402344 C 18.976562 18.402344 19.199219 18.1875 19.199219 17.925781 L 19.199219 13.585938 C 19.199219 13.324219 18.976562 13.113281 18.699219 13.113281 L 14.136719 13.113281 C 13.859375 13.113281 13.636719 13.324219 13.636719 13.585938 L 13.636719 15.058594 L 12.289062 15.058594 L 12.289062 7.074219 L 13.636719 7.074219 L 13.636719 8.496094 C 13.636719 8.757812 13.859375 8.96875 14.136719 8.96875 Z M 14.136719 8.96875 " })), ho = ({
  actionsMenu: t,
  backLink: j,
  handleCancel: w,
  handleConfirmTerminateWorkflow: E,
  itemIsSelected: L,
  pageData: k,
  selectedFunction: u = {},
  selectedJob: f = {},
  setWorkflowsViewMode: T,
  workflow: h = {},
  workflowsViewMode: g
}) => {
  const [b, J] = B([]), [W, S] = B([]), [x, se] = B([]), d = Te(), ne = uo(), { isStagingMode: U } = jo(), Y = d.workflowProjectName || d.projectName, Z = co(), l = K((p) => p.appStore.frontendSpec?.ce?.version), F = K((p) => p.projectStore.accessibleProjectsMap);
  _(() => {
    Lo(Y, F, Z);
  }, [Z, Y, F]);
  const M = Ce(
    "graph-view",
    (f?.uid || u?.hash) && "with-selected-job"
  ), o = z(() => Tt(
    b,
    d.projectName,
    d.workflowProjectName,
    d.workflowId,
    U,
    !N.isEmpty(f)
  ), [
    U,
    b,
    d.projectName,
    d.workflowProjectName,
    d.workflowId,
    f
  ]), { sortedTableContent: s } = fo({
    headers: o[0]?.content,
    content: o,
    sortConfig: { defaultSortBy: "startedAt" }
  });
  _(() => {
    const p = [], I = [], y = [];
    if (N.forEach(h.graph, (n) => {
      const G = ht(n.phase);
      if (!Co(n) && !n.ui?.isHiddenJobVisible) return;
      const H = {
        function: n.function,
        run_uid: n.run_uid,
        run_type: n.run_type,
        type: n.type
      }, X = so(n), Q = Eo(n);
      if (n.function) {
        const [, , D = "", re = "", ie = ""] = n.function?.match(/^([\w.-]+)\/([\w.-]+)(?:@(\w+))?(?::(\w+))?$/) ?? [];
        H.functionName = D, H.functionHash = re ?? ie;
      }
      let fe = {
        id: n.id,
        type: Ao,
        data: {
          customData: H,
          isSelectable: X,
          shape: Q ? Mo : null,
          label: n.name,
          sourceHandle: G,
          tip: X || Q ? null : "This step cannot be previewed",
          subType: !X || Q ? So : Do
        },
        className: Ce(
          (n.run_uid && f.uid === n.run_uid || n.run_type === "deploy" && (n.function.includes(u.hash) || n.function.includes(u.name)) || n.run_type === "build" && n.function.includes(u.name)) && `${G.className} selected`
        ),
        position: { x: 0, y: 0 }
      };
      n.children.forEach((D) => {
        p.push({
          id: `e.${n.id}.${D}`,
          type: vo,
          data: {
            subType: To,
            isSelectable: !0
          },
          source: n.id,
          target: D
        });
      }), y.push({
        ...n,
        customData: H,
        state: no(n.phase?.toLowerCase(), ae, ro)
      }), I.push(fe);
    }), !N.isEmpty(I)) {
      const [n, G] = gt(I, p);
      S(n), se(G), J(y);
    }
  }, [u.hash, u.name, f.uid, h.graph]);
  const v = (p, I) => {
    const y = d.workflowProjectName ? _o(
      d.workflowProjectName,
      d.workflowId,
      I.data.customData,
      d.tab
    ) : yo(
      d.projectName,
      d.workflowId,
      I.data.customData,
      d.tab,
      ue
    );
    y && ne(y);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "workflow-container", children: [
    /* @__PURE__ */ a.jsx(Wt, { link: j, text: h?.run?.name.replace(`${d.projectName}-`, ""), children: /* @__PURE__ */ a.jsxs("div", { className: "workflow__actions-container", children: [
      /* @__PURE__ */ a.jsx("div", { className: "actions", children: /* @__PURE__ */ a.jsx(
        Io,
        {
          template: /* @__PURE__ */ a.jsx(
            xo,
            {
              text: g === $ ? "Switch to list view" : "Switch to graph view"
            }
          ),
          children: /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "toggle-view-btn",
              onClick: () => T(
                g === $ ? Wo : $
              ),
              children: g === $ ? /* @__PURE__ */ a.jsx(St, {}) : /* @__PURE__ */ a.jsx(Dt, {})
            }
          )
        }
      ) }),
      (l || F[Y]) && /* @__PURE__ */ a.jsx(
        Ro,
        {
          className: "workflow_btn",
          id: "terminate_btn",
          disabled: N.lowerCase(h?.run?.status) !== io,
          variant: "danger",
          icon: /* @__PURE__ */ a.jsx(po, {}),
          label: "Terminate",
          onClick: () => E(h?.run, Z)
        }
      )
    ] }) }),
    /* @__PURE__ */ a.jsx("div", { className: "graph-container workflow-content", children: g === $ ? /* @__PURE__ */ a.jsxs("div", { className: M, children: [
      /* @__PURE__ */ a.jsx(
        kt,
        {
          alignTriggerItem: L,
          edges: x,
          nodes: W,
          onNodeClick: v
        }
      ),
      L && /* @__PURE__ */ a.jsx(
        bt,
        {
          actionsMenu: t,
          detailsMenu: k.details.menu,
          getCloseDetailsLink: () => ao(d.workflowId),
          handleCancel: w,
          pageData: k,
          selectedItem: N.isEmpty(u) ? f : u,
          tab: ue
        }
      )
    ] }) : /* @__PURE__ */ a.jsx(
      wo,
      {
        actionsMenu: t,
        getCloseDetailsLink: () => ao(d.workflowId),
        handleCancel: w,
        hideActionsMenu: !0,
        pageData: k,
        selectedItem: N.isEmpty(u) ? f : u,
        tableHeaders: s[0]?.content ?? [],
        children: s.map((p, I) => /* @__PURE__ */ a.jsx(
          mo,
          {
            actionsMenu: t,
            rowItem: p,
            selectedItem: N.isEmpty(u) ? f : u
          },
          I
        ))
      }
    ) })
  ] });
};
ho.propTypes = {
  actionsMenu: Ho.isRequired,
  backLink: i.string.isRequired,
  handleCancel: i.func.isRequired,
  handleConfirmTerminateWorkflow: i.func,
  itemIsSelected: i.bool.isRequired,
  pageData: i.object.isRequired,
  selectedFunction: i.object,
  selectedJob: i.object,
  setWorkflowsViewMode: i.func.isRequired,
  workflow: i.object,
  workflowsViewMode: i.string.isRequired
};
const Mt = Ee.memo(ho), At = (t) => /* @__PURE__ */ A.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M5.1 16.05C4.73333 15.4167 4.45833 14.7667 4.275 14.1C4.09167 13.4333 4 12.75 4 12.05C4 9.81667 4.775 7.91667 6.325 6.35C7.875 4.78333 9.76667 4 12 4H12.175L10.575 2.4L11.975 1L15.975 5L11.975 9L10.575 7.6L12.175 6H12C10.3333 6 8.91667 6.5875 7.75 7.7625C6.58333 8.9375 6 10.3667 6 12.05C6 12.4833 6.05 12.9083 6.15 13.325C6.25 13.7417 6.4 14.15 6.6 14.55L5.1 16.05ZM12.025 23L8.025 19L12.025 15L13.425 16.4L11.825 18H12C13.6667 18 15.0833 17.4125 16.25 16.2375C17.4167 15.0625 18 13.6333 18 11.95C18 11.5167 17.95 11.0917 17.85 10.675C17.75 10.2583 17.6 9.85 17.4 9.45L18.9 7.95C19.2667 8.58333 19.5417 9.23333 19.725 9.9C19.9083 10.5667 20 11.25 20 11.95C20 14.1833 19.225 16.0833 17.675 17.65C16.125 19.2167 14.2333 20 12 20H11.825L13.425 21.6L12.025 23Z", fill: "#7F7989" })), Ht = (t, j, w, E, L) => ({
  page: ae,
  details: {
    type: V(t) ? ae : Go,
    menu: V(t) ? Jo(L) : Bo,
    infoHeaders: V(t) ? qo(!1) : Po,
    refreshLogs: V(t) ? w : j,
    removeLogs: V(t) ? () => {
    } : E,
    withLogsRefreshBtn: V(t)
  }
}), Ot = (t, j, w, E, L, k, u, f, T, h, g, b, J) => {
  if (t?.uid) {
    const W = Vo(t, L), S = $o(t), x = zo(t?.labels);
    return [
      [
        {
          label: "Batch re-run",
          icon: /* @__PURE__ */ a.jsx(Yo, {}),
          hidden: lo(t),
          onClick: j
        },
        {
          label: "Monitoring",
          icon: /* @__PURE__ */ a.jsx(Nt, {}),
          tooltip: w ? x ? "Unavailable for Dask jobs" : "" : "Grafana service unavailable",
          disabled: !w || x,
          onClick: E
        },
        {
          label: "Abort",
          icon: /* @__PURE__ */ a.jsx(Zo, {}),
          onClick: u,
          tooltip: W ? S ? "Job is aborting" : "" : "Cannot abort jobs of this kind",
          disabled: !W || S,
          hidden: Ko.includes(t?.state?.value)
        },
        {
          label: "View YAML",
          icon: /* @__PURE__ */ a.jsx(Ue, {}),
          onClick: g
        },
        {
          label: "Delete",
          icon: /* @__PURE__ */ a.jsx(Fo, {}),
          className: "danger",
          onClick: f,
          hidden: Uo.includes(t?.state?.value)
        }
      ]
    ];
  } else {
    const W = !N.isNil(t?.access_key), S = [Xo, be, Qo];
    return [
      [
        {
          label: "View YAML",
          icon: /* @__PURE__ */ a.jsx(Ue, {}),
          onClick: g
        },
        {
          disabled: J || [be, Ye].includes(t?.state?.value),
          hidden: S.includes(t?.state?.value) || W,
          icon: /* @__PURE__ */ a.jsx(At, {}),
          label: "Retry",
          onClick: () => b(t),
          tooltip: [be, Ye].includes(t?.state?.value) ? "Retry is unavailable while workflow status is pending, refresh the display to check for updates." : ""
        },
        {
          label: "Terminate",
          icon: /* @__PURE__ */ a.jsx(po, {}),
          className: "danger",
          onClick: T,
          hidden: !k && !h[t?.project] || W,
          disabled: t?.state?.value !== io
        }
      ]
    ];
  }
}, Zt = N.debounce(
  (t, j, w, E, L, k) => {
    k.current || (j.workflowId ? L(E({ groupBy: Oo })) : (w({ ...t, groupBy: Ke }), L(E({ groupBy: Ke })), k.current = !0));
  }
), go = Ee.forwardRef(
  ({
    backLink: t,
    context: j,
    filters: w,
    filtersConfig: E,
    getWorkflows: L,
    itemIsSelected: k,
    requestErrorMessage: u,
    selectedFunction: f,
    selectedJob: T,
    setItemIsSelected: h,
    setSelectedFunction: g,
    setSelectedJob: b,
    setWorkflowIsLoaded: J,
    tableContent: W = [],
    workflowIsLoaded: S
  }, x) => {
    const [se, d] = B(!1), [ne, U] = B(!1), [Y, Z] = B($), l = K((e) => e.workflowsStore), F = K((e) => e.filtersStore), M = K((e) => e.appStore), o = Te(), s = co(), v = uo(), p = pt(), I = to();
    let y = to(null);
    const n = K((e) => e.projectStore.accessibleProjectsMap), [G, H] = B(!1);
    _(() => {
      const e = l.workflows.data.map((r) => r.project);
      H(!0), e && et(e, n, s).finally(
        () => {
          H(!1);
        }
      );
    }, [s, l.workflows.data, n]);
    const X = z(
      () => Ne("--monitorWorkflowsRowHeight"),
      []
    ), Q = z(
      () => Ne("--monitorWorkflowsRowHeightExtended"),
      []
    ), fe = z(
      () => Ne("--monitorWorkflowsHeaderRowHeight"),
      []
    ), {
      editableItem: D,
      handleMonitoring: re,
      handleRerunJob: ie,
      jobWizardIsOpened: ve,
      jobWizardMode: O,
      setConfirmData: C,
      setEditableItem: Ie,
      setJobWizardIsOpened: we,
      setJobWizardMode: We
    } = Ee.useContext(j), { sortedTableContent: xe } = fo({
      headers: W[0]?.content,
      content: W,
      sortConfig: { defaultSortBy: "createdat", defaultDirection: "desc" }
    }), Re = c(() => {
      L(w);
    }, [w, L]), _e = c(
      (e, r, m) => ot(
        s,
        y,
        r,
        e.name,
        e.tag,
        m
      ),
      [y, s]
    ), ye = c(
      (e, r, m, R) => jt(e.uid, r, R, m, s),
      [s]
    ), Se = c(
      (e) => s(tt(e)),
      [s]
    ), De = c(() => {
      clearTimeout(y.current);
    }, [y]), ee = z(
      () => Ht(
        f,
        _e,
        ye,
        De,
        T
      ),
      [
        ye,
        _e,
        De,
        f,
        T
      ]
    ), P = c(() => s(
      at({
        project: o.workflowProjectName || o.projectName,
        workflowId: o.workflowId
      })
    ).unwrap().catch((e) => {
      je(s, e, "Failed to fetch workflow"), v(t, {
        replace: !0
      });
    }), [
      t,
      s,
      v,
      o.projectName,
      o.workflowId,
      o.workflowProjectName
    ]), Me = c(
      (e, r) => {
        if (e.abortTaskId && e.state.value === Ze) {
          const m = {
            [e.abortTaskId]: {
              uid: e.uid,
              name: e.name
            }
          };
          st(
            o.workflowProjectName || o.projectName,
            x,
            m,
            r,
            s
          );
        }
      },
      [x, s, o.projectName, o.workflowProjectName]
    ), Ae = c(
      (e, r) => nt(s, e, I).then(
        (m) => {
          b(m), g({}), h(!0), r && Me(m, r);
        }
      ),
      [s, Me, h, g, b]
    ), He = c(() => {
      if (l.activeWorkflow?.data) {
        const e = { ...l.activeWorkflow.data };
        return N.find(
          e.graph,
          (r) => r.run_type === "run" && r.run_uid === o.jobId
        );
      }
    }, [o.jobId, l.activeWorkflow.data]), le = c(
      (e) => e && l.activeWorkflow?.data?.run?.error && l.activeWorkflow.data.run.error !== "None" ? {
        title: "Pipeline error - ",
        message: l.activeWorkflow.data.run.error
      } : {},
      [l.activeWorkflow.data]
    ), oe = c(() => s(
      rt({ project: o.workflowProjectName || o.projectName, jobId: o.jobId })
    ).unwrap().then((e) => {
      const m = He()?.phase?.toLowerCase(), R = [Fe, Xe].includes(m);
      return Ae(
        Lt(e, ue, R ? m : "", le(R)),
        oe
      );
    }).catch(
      () => v(t, {
        replace: !0
      })
    ).finally(() => {
      I.current = null;
    }), [
      t,
      s,
      He,
      Ae,
      v,
      o.jobId,
      o.projectName,
      o.workflowProjectName,
      le
    ]), Oe = c(
      (e) => {
        b((r) => ({
          ...r,
          abortTaskId: e,
          state: no(Ze, ae, ro)
        }));
      },
      [b]
    ), Pe = c(
      (e) => {
        it(
          e,
          Qe,
          () => {
            P(), oe();
          },
          C,
          s,
          x,
          Oe
        );
      },
      [x, s, oe, P, C, Oe]
    ), qe = c(
      (e) => {
        C({
          item: e,
          header: "Abort job?",
          message: /* @__PURE__ */ a.jsxs("div", { children: [
            'Are you sure you want to abort the job "',
            e.name,
            '"? ',
            /* @__PURE__ */ a.jsx("br", {}),
            lo(e) && "This is a local run. You can abort the run, though the actual process will continue."
          ] }),
          btnConfirmLabel: "Abort",
          btnConfirmType: Le,
          rejectHandler: () => {
            C(null);
          },
          confirmHandler: () => {
            Pe(e), C(null);
          }
        });
      },
      [Pe, C]
    ), Be = c(
      (e) => {
        lt(e, s);
      },
      [s]
    ), Je = c(
      (e) => {
        ct(!1, e, P, null, w, s).then(() => {
          v(
            p.pathname.split("/").splice(0, p.pathname.split("/").indexOf(o.workflowId) + 1).join("/") + window.location.search
          );
        });
      },
      [s, w, p.pathname, v, o.workflowId, P]
    ), Ge = c(
      (e) => {
        C({
          item: e,
          header: "Delete job?",
          message: `Are you sure you want to delete the job "${e.name}"? Deleted jobs can not be restored.`,
          btnConfirmLabel: "Delete",
          btnConfirmType: Le,
          rejectHandler: () => {
            C(null);
          },
          confirmHandler: () => {
            Je(e), C(null);
          }
        });
      },
      [Je, C]
    ), me = c(
      (e) => {
        C({
          item: e,
          header: "Terminate workflow",
          message: `Are you sure you want to terminate the workflow "${e.name}" (stop its execution)? Workflows termination cannot be undone.`,
          btnConfirmLabel: "Terminate",
          btnConfirmType: Le,
          rejectHandler: () => {
            C(null);
          },
          confirmHandler: () => {
            Be(e), C(null);
          }
        });
      },
      [Be, C]
    ), pe = c(
      (e) => {
        s(dt({ project: e.project, workflowId: e.id })).unwrap().then(() => {
          Re(), s(
            Qe({
              status: 200,
              id: Math.random(),
              message: "Workflow run successfully."
            })
          );
        }).catch((r) => {
          je(
            s,
            r,
            "Workflow did not run successfully",
            "",
            () => pe(e)
          );
        });
      },
      [s, Re]
    ), he = z(() => (e) => Ot(
      e,
      ie,
      M.frontendSpec.jobs_dashboard_url,
      re,
      M.frontendSpec.abortable_function_kinds,
      M?.frontendSpec?.ce?.version,
      qe,
      Ge,
      me,
      n,
      Se,
      pe,
      ne
    ), [
      ie,
      M.frontendSpec.jobs_dashboard_url,
      M.frontendSpec.abortable_function_kinds,
      M.frontendSpec?.ce?.version,
      re,
      qe,
      Ge,
      me,
      n,
      Se,
      pe,
      ne
    ]), Ve = c(() => {
      b({}), g({}), h(!1);
    }, [h, g, b]), te = c(
      (e) => {
        if (l.activeWorkflow?.data) {
          const r = { ...l.activeWorkflow.data };
          return N.find(r.graph, (m) => {
            let R = m.function?.includes(`${o.functionName}@${o.functionHash}`) || m.function?.includes(o.functionName) || m.function?.includes(o.jobId);
            return e && (R = R && m.run_type !== "run"), R;
          });
        }
      },
      [o.functionName, o.functionHash, o.jobId, l.activeWorkflow.data]
    ), ce = c(() => {
      if (l.activeWorkflow?.data?.graph) {
        let e = te(!0);
        return N.isEmpty(e) && (e = te(!1)), !["deploy", "build"].includes(e?.run_type);
      }
    }, [l.activeWorkflow.data.graph, te]), ge = c(
      (e, r) => {
        je(s, e, r, ""), v(
          p.pathname.split("/").splice(0, p.pathname.split("/").indexOf(o.workflowId) + 1).join("/") + window.location.search
        );
      },
      [s, p.pathname, v, o.workflowId]
    );
    _(() => {
      !I.current && o.jobId && (N.isEmpty(T) || o.jobId !== T.uid) && ce() && !se && (d(!0), oe().finally(() => d(!1)));
    }, [oe, o.jobId, T, ce, se]), _(() => {
      const e = te(!0);
      if (so(e)) {
        const r = { ...l.activeWorkflow?.data }, m = e?.phase?.toLowerCase(), R = [Fe, Xe].includes(m), ke = R ? m : "", ze = le(R);
        r.graph && o.functionHash && (N.isEmpty(f) || o.functionHash !== f.hash) ? o.functionName !== f.name && s(
          eo({
            project: o.workflowProjectName || o.projectName,
            name: o.functionName,
            hash: o.functionHash === "latest" ? "" : o.functionHash
          })
        ).unwrap().then((q) => {
          g(
            oo(
              q,
              o.workflowProjectName || o.projectName,
              ke,
              ze
            )
          ), h(!0), b({});
        }).catch((q) => ge(q, "Failed to fetch function")) : r.graph && o.jobId && (N.isEmpty(f) || o.jobId !== f.name) && !ce() && s(
          eo({
            project: o.workflowProjectName || o.projectName,
            name: o.jobId
          })
        ).unwrap().then((q) => {
          g(
            oo(
              q,
              o.workflowProjectName || o.projectName,
              ke,
              ze
            )
          ), h(!0), b({});
        }).catch((q) => ge(q, "Failed to fetch function"));
      }
    }, [
      te,
      ge,
      o.functionHash,
      o.functionName,
      o.projectName,
      f,
      l.activeWorkflow,
      ce,
      o.jobId,
      s,
      g,
      h,
      b,
      o.workflowProjectName,
      le
    ]), _(() => {
      (o.jobId || o.functionHash) && ee.details.menu.length > 0 && xt(o.tab, ee.details.menu, v, p);
    }, [v, ee.details.menu, p, o.jobId, o.functionHash, o.tab]), _(() => {
      const e = { ...l.activeWorkflow?.data };
      if (!o.workflowId && e.graph && s(ut()), !e.graph && o.workflowId && !S && (P(), J(!0)), ["Running", "None"].includes(e?.run?.status) && o.workflowId && e.graph) {
        const r = setTimeout(P, 1e4);
        return () => clearTimeout(r);
      }
    }, [
      P,
      s,
      S,
      o.workflowId,
      l.activeWorkflow,
      J
    ]), _(() => {
      O && !ve && (O === de && D?.rerun_object || O !== de) && (ft(Ct, {
        params: {
          ...o,
          projectName: D?.rerun_object?.task?.metadata?.project || o.projectName
        },
        onWizardClose: () => {
          Ie(null), We(null), we(!1);
        },
        defaultData: O === de ? D?.rerun_object : {},
        mode: O,
        wizardTitle: O === de ? "Batch re-run" : void 0
      }), we(!0));
    }, [
      D?.rerun_object,
      w,
      ve,
      O,
      o,
      Ie,
      we,
      We
    ]), _(() => {
      x.current?.();
    }, [x, o.jobId]), _(() => {
      !o.functionHash && !o.jobId && (h(!1), b({}), g({}));
    }, [o.functionHash, o.jobId, h, g, b]), _(() => {
      l.workflows.rerunInProgress && (U(!0), setTimeout(() => {
        U(!1);
      }, 5e3));
    }, [l.workflows.rerunInProgress]);
    const $e = _t({
      rowsData: {
        content: W
      },
      heightData: {
        headerRowHeight: fe,
        rowHeight: X,
        rowHeightExtended: Q
      }
    });
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      (l.workflows.loading || G) && /* @__PURE__ */ a.jsx(wt, {}),
      l.workflows.loading ? null : !l.workflows.loading && !o.workflowId && l.workflows.data.length === 0 || u ? /* @__PURE__ */ a.jsx(
        It,
        {
          message: Et(
            w,
            E,
            u,
            ae,
            ue,
            F
          )
        }
      ) : /* @__PURE__ */ a.jsx(a.Fragment, { children: o.workflowId ? /* @__PURE__ */ a.jsx(
        Mt,
        {
          actionsMenu: he,
          backLink: t,
          handleCancel: Ve,
          handleConfirmTerminateWorkflow: me,
          itemIsSelected: k,
          pageData: ee,
          selectedFunction: f,
          selectedJob: T,
          setWorkflowsViewMode: Z,
          workflow: l.activeWorkflow?.data,
          workflowsViewMode: Y
        }
      ) : /* @__PURE__ */ a.jsx(
        wo,
        {
          actionsMenu: he,
          handleCancel: Ve,
          pageData: ee,
          selectedItem: T,
          tab: mt,
          tableClassName: "monitor-workflows-table",
          tableHeaders: xe[0]?.content ?? [],
          virtualizationConfig: $e,
          children: xe.map(
            (e, r) => yt($e, r) && /* @__PURE__ */ a.jsx(
              vt,
              {
                actionsMenu: he,
                rowItem: e,
                selectedJob: T
              },
              r
            )
          )
        }
      ) })
    ] });
  }
);
go.displayName = "WorkflowsTable";
go.propTypes = {
  backLink: i.string.isRequired,
  context: i.object.isRequired,
  filters: i.object.isRequired,
  filtersConfig: Rt.isRequired,
  getWorkflows: i.func.isRequired,
  itemIsSelected: i.bool.isRequired,
  requestErrorMessage: i.string.isRequired,
  selectedFunction: i.object.isRequired,
  selectedJob: i.object.isRequired,
  setItemIsSelected: i.func.isRequired,
  setSelectedFunction: i.func.isRequired,
  setSelectedJob: i.func.isRequired,
  setWorkflowIsLoaded: i.func.isRequired,
  tableContent: i.arrayOf(i.object),
  workflowIsLoaded: i.bool.isRequired
};
export {
  go as W,
  Zt as f
};
//# sourceMappingURL=WorkflowsTable-ns_-ckwD.mjs.map
