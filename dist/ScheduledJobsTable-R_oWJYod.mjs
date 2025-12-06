import { ah as D, b5 as T, t as B, gs as V, af as M, cg as G, dY as K, V as y, gt as U, as as X, gu as $, H as J, j as o, Y as Q, dD as Z, a1 as ee, a3 as te, a2 as se, m as oe, i as ae, aX as q, gv as ne, P as n } from "./main-CTYpZ6Nf.mjs";
import re, { useMemo as r, useCallback as c, useEffect as ce } from "react";
import { useDispatch as de, useSelector as z } from "react-redux";
import { useParams as ie } from "react-router-dom";
import { ao as le, J as ue, j as me, T as he } from "./Table-DB12oa-o.mjs";
import { J as be } from "./createJobsContent-DIc0KSEj.mjs";
import { N as pe } from "./StatsCard-Cm7Pku2T.mjs";
import { F as je } from "./exclamation-mark-kRjYDG-V.mjs";
import { u as ge, i as Re } from "./useVirtualization.hook-B2Lvanu1.mjs";
const fe = ({
  context: W,
  createTableContent: S,
  filters: d = null,
  filtersConfig: p = null,
  jobs: I,
  refreshJobs: i,
  requestErrorMessage: O
}) => {
  const s = de(), a = ie(), w = z((e) => e.jobsStore), Y = z((e) => e.filtersStore), {
    editableItem: m,
    jobWizardIsOpened: E,
    jobWizardMode: l,
    setConfirmData: u,
    setEditableItem: h,
    setJobWizardIsOpened: j,
    setJobWizardMode: b
  } = re.useContext(W), L = r(() => D("--scheduledJobsRowHeight"), []), P = r(
    () => D("--scheduledJobsRowHeightExtended"),
    []
  ), k = r(
    () => D("--scheduledJobsHeaderRowHeight"),
    []
  ), A = r(() => ({
    page: T
  }), []), g = r(() => S(), [S]), N = c(
    (e, t) => {
      if (t) {
        const f = le(p);
        i(e ? f : d);
      }
    },
    [i, p, d]
  ), _ = c(
    (e) => s(B(e)),
    [s]
  ), R = c(
    (e) => {
      s(
        V({
          postData: {
            ...e.scheduled_object
          },
          project: e.project || a.projectName,
          job: e.name
        })
      ).unwrap().then((t) => {
        s(
          M({
            status: t.status,
            id: Math.random(),
            message: "Job started"
          })
        );
      }).catch((t) => {
        const f = t.response?.status === G ? "You do not have permission to run a new job." : K(t, "Failed to start job");
        y(s, t, "", f, () => R(e));
      });
    },
    [s, a.projectName]
  ), x = c(
    (e) => {
      s(
        U({
          projectName: a.projectName || e.project,
          scheduleName: e.name
        })
      ).unwrap().then((t) => {
        i(d), s(
          M({
            status: t.status,
            id: Math.random(),
            message: "Job is successfully deleted"
          })
        );
      }).catch((t) => {
        y(s, t);
      }), u(null);
    },
    [d, a.projectName, i, u, s]
  ), C = c(
    (e) => {
      u({
        item: e,
        header: "Delete scheduled job?",
        message: `Are you sure you want to delete the scheduled job "${e.name}"? Deleted scheduled jobs can not be restored.`,
        btnConfirmLabel: "Delete",
        btnConfirmType: X,
        rejectHandler: () => {
          u(null);
        },
        confirmHandler: () => {
          x(e);
        }
      });
    },
    [x, u]
  ), H = c(
    (e) => {
      $(e, s, ne).then((t) => {
        h({
          ...e,
          scheduled_object: {
            ...e.scheduled_object,
            function: t
          }
        }), b(J);
      });
    },
    [s, h, b]
  ), v = r(
    () => (e) => [
      [
        {
          label: "Run now",
          icon: /* @__PURE__ */ o.jsx(Q, { className: "action_cell__run-icon" }),
          onClick: R
        },
        {
          label: "Edit",
          icon: /* @__PURE__ */ o.jsx(ee, {}),
          onClick: H,
          hidden: e?.type === Z
        },
        {
          label: "Delete",
          icon: /* @__PURE__ */ o.jsx(te, {}),
          className: "danger",
          onClick: C
        },
        {
          label: "View YAML",
          icon: /* @__PURE__ */ o.jsx(se, {}),
          onClick: _
        }
      ]
    ],
    [H, R, C, _]
  );
  ce(() => {
    l && !E && (oe(ue, {
      params: {
        ...a,
        projectName: m?.project || a.projectName
      },
      onWizardClose: () => {
        h(null), b(null), j(!1);
      },
      defaultData: l === J ? m?.scheduled_object : {},
      mode: l,
      wizardTitle: l === J ? "Edit job" : void 0,
      onSuccessRequest: N,
      isCrossProjects: !a.projectName
    }), j(!0));
  }, [
    m?.project,
    m?.scheduled_object,
    E,
    l,
    N,
    a,
    i,
    h,
    j,
    b
  ]);
  const F = ge({
    rowsData: {
      content: g
    },
    heightData: {
      headerRowHeight: k,
      rowHeight: L,
      rowHeightExtended: P
    }
  });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    w.loading && /* @__PURE__ */ o.jsx(ae, {}),
    w.loading ? null : I.length === 0 ? /* @__PURE__ */ o.jsx(
      pe,
      {
        message: me(
          d,
          p,
          O,
          T,
          q,
          Y
        )
      }
    ) : /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
      he,
      {
        actionsMenu: v,
        pageData: A,
        tab: q,
        tableClassName: "scheduled-jobs-table",
        tableHeaders: g[0]?.content ?? [],
        virtualizationConfig: F,
        children: g.map(
          (e, t) => Re(F, t) && /* @__PURE__ */ o.jsx(be, { actionsMenu: v, rowItem: e }, t)
        )
      }
    ) })
  ] });
};
fe.propTypes = {
  context: n.object.isRequired,
  createTableContent: n.func.isRequired,
  filters: n.object.isRequired,
  filtersConfig: je.isRequired,
  jobs: n.array.isRequired,
  refreshJobs: n.func.isRequired,
  requestErrorMessage: n.string.isRequired
};
export {
  fe as S
};
//# sourceMappingURL=ScheduledJobsTable-R_oWJYod.mjs.map
