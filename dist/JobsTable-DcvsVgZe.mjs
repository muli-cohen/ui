import { t as Re, e as S, gm as ue, gn as Ne, go as _e, as as le, j as n, gp as Te, gq as Ie, gr as C, m as Ce, aO as De, i as Ae, aT as k, b3 as qe, dg as me, b5 as O, ds as ce, af as xe, P as t } from "./main-CTYpZ6Nf.mjs";
import de, { useCallback as u, useMemo as be, useEffect as D } from "react";
import { useSelector as E, useDispatch as ye } from "react-redux";
import { useParams as Se, useNavigate as ke, useLocation as Oe } from "react-router-dom";
import { k as Ee, ag as Be, al as Me, am as Fe, an as Le, ao as Pe, J as we, ap as ve, j as We, T as ze } from "./Table-DB12oa-o.mjs";
import { J as He } from "./createJobsContent-DIc0KSEj.mjs";
import { N as Ge } from "./StatsCard-Cm7Pku2T.mjs";
import { P as Je } from "./Pagination-DsTIZ30r.mjs";
import { F as Ue } from "./exclamation-mark-kRjYDG-V.mjs";
import { a as Ye, g as pe } from "./link-helper.util-CuUJj7TV.mjs";
const fe = de.forwardRef(
  ({
    abortingJobs: B,
    autoRefreshPrevValue: M,
    context: ge,
    filters: l,
    filtersConfig: A,
    jobs: F = null,
    jobRuns: L = null,
    paginatedJobs: R,
    refreshJobs: b,
    requestErrorMessage: je,
    searchParams: P,
    selectedJob: r,
    setAbortingJobs: w,
    setJobRuns: v,
    setJobs: W,
    setSearchParams: z,
    setSelectedJob: m,
    tableContent: H
  }, { abortJobRef: G, fetchJobFunctionsPromiseRef: q }) => {
    const N = E((e) => e.appStore), g = E((e) => e.filtersStore), x = E((e) => e.jobsStore), a = Se(), s = ye(), p = ke(), J = Oe(), {
      editableItem: _,
      handleMonitoring: U,
      handleRerunJob: Y,
      jobWizardIsOpened: K,
      jobWizardMode: c,
      lastCheckedJobIdRef: T,
      paginationConfigJobsRef: j,
      refreshAfterDeleteCallback: V,
      setConfirmData: i,
      setEditableItem: Z,
      setJobWizardIsOpened: y,
      setJobWizardMode: Q
    } = de.useContext(ge);
    Ee(s, r);
    const X = u(
      (e) => s(Re(e)),
      [s]
    ), $ = u(
      (e, o, d, h, f, he) => Be(
        e.uid,
        o,
        h,
        d,
        s,
        f,
        he
      ),
      [s]
    ), I = be(
      () => Me($, r),
      [$, r]
    ), ee = u(
      (e, o) => {
        const d = a.jobName ? v : W;
        S.isEmpty(r) || m((h) => ({
          ...h,
          abortTaskId: o,
          state: ue(ce, O, me)
        })), d(
          (h) => h.map((f) => (f.uid === e.uid && (f.abortTaskId = o, f.state = ue(ce, O, me)), f))
        );
      },
      [a.jobName, r, v, W, m]
    ), ae = u(
      (e) => Ne(s, e, q).then(
        (o) => {
          m(o), q.current = null;
        }
      ),
      [s, q, m]
    ), te = u(
      (e) => {
        _e(
          e,
          xe,
          () => b(l),
          i,
          s,
          G,
          (d) => ee(e, d),
          B,
          w
        );
      },
      [
        G,
        B,
        s,
        l,
        b,
        w,
        i,
        ee
      ]
    );
    D(() => {
      a.jobId && I.details.menu.length > 0 && Ye(a.tab, I.details.menu, p, J);
    }, [p, I.details.menu, J, a.jobId, a.tab]);
    const oe = u(
      (e) => {
        i({
          item: e,
          header: "Abort job?",
          message: /* @__PURE__ */ n.jsxs("div", { children: [
            'Are you sure you want to abort the job "',
            e.name,
            '"? ',
            /* @__PURE__ */ n.jsx("br", {}),
            Te(e) && "This is a local run. You can abort the run, though the actual process will continue."
          ] }),
          btnConfirmLabel: "Abort",
          btnConfirmType: le,
          rejectHandler: () => {
            i(null);
          },
          confirmHandler: () => {
            te(e);
          }
        });
      },
      [te, i]
    ), re = u(
      (e, o) => {
        Ie(
          o,
          e,
          b,
          V,
          l,
          s
        ).then(() => {
          a.jobName && p(pe(a.jobName, !0));
        });
      },
      [b, V, l, s, a.jobName, p]
    ), se = u(
      (e, o) => {
        i({
          item: e,
          header: "Delete job?",
          message: Fe(e, o),
          btnConfirmLabel: "Delete",
          btnConfirmType: le,
          rejectHandler: () => {
            i(null);
          },
          confirmHandler: () => {
            re(e, o), i(null);
          }
        });
      },
      [re, i]
    ), ne = be(() => (e) => Le(
      e,
      Y,
      N.frontendSpec.jobs_dashboard_url,
      U,
      N.frontendSpec.abortable_function_kinds,
      oe,
      X,
      r,
      se,
      !1,
      a.jobName
    ), [
      Y,
      N.frontendSpec.jobs_dashboard_url,
      N.frontendSpec.abortable_function_kinds,
      U,
      oe,
      X,
      r,
      se,
      a.jobName
    ]), ie = u(
      (e, o) => {
        if (!o) {
          const d = Pe(A);
          b(e ? d : l, { forceFetchJobs: !0 });
        }
      },
      [l, b, A]
    );
    return D(() => {
      c && !K && (c === C && _?.rerun_object || c !== C) && (Ce(we, {
        params: {
          ...a,
          projectName: _?.rerun_object?.task?.metadata?.project || a.projectName
        },
        onWizardClose: () => {
          Z(null), Q(null), y(!1);
        },
        defaultData: c === C ? _?.rerun_object : {},
        mode: c,
        wizardTitle: c === C ? "Batch re-run" : void 0,
        onSuccessRequest: ie,
        isCrossProjects: !a.projectName
      }), y(!0));
    }, [
      _?.rerun_object,
      K,
      c,
      a,
      ie,
      Z,
      y,
      Q
    ]), D(() => {
      ve(
        R,
        L,
        F,
        a.jobName,
        a.jobId,
        a.projectName,
        p,
        m,
        ae,
        P,
        j,
        s,
        z,
        T
      );
    }, [
      P,
      L,
      j,
      R,
      p,
      a.jobId,
      a.jobName,
      a.projectName,
      m,
      ae,
      s,
      z,
      T,
      F
    ]), D(() => {
      S.isEmpty(r) && (T.current = null);
    }, [T, r]), De({
      content: R,
      selectedItem: r,
      isAllVersions: !0
    }), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      x.loading && /* @__PURE__ */ n.jsx(Ae, {}),
      R.length === 0 && !x.loading && l && S.isEmpty(r) ? /* @__PURE__ */ n.jsx(
        Ge,
        {
          message: We(
            l,
            A,
            je,
            O,
            k,
            g
          )
        }
      ) : !x.loading && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(
          ze,
          {
            actionsMenu: ne,
            getCloseDetailsLink: () => pe(
              a.jobName || (a.projectName ? k : qe)
            ),
            handleCancel: () => m({}),
            pageData: I,
            selectedItem: r,
            tab: k,
            tableClassName: "monitor-jobs-table",
            tableHeaders: H[0]?.content ?? [
              {
                headerId: "uid",
                headerLabel: "UID",
                className: "table-cell-name"
              }
            ],
            children: H.map((e, o) => /* @__PURE__ */ n.jsx(
              He,
              {
                actionsMenu: ne,
                rowItem: e,
                selectedJob: r
              },
              o
            ))
          }
        ),
        /* @__PURE__ */ n.jsx(
          Je,
          {
            paginationConfig: j.current,
            closeParamName: r?.name,
            disabledNextDoubleBtnTooltip: j.current?.paginationResponse?.["page-token"] && (g.autoRefresh && !a.jobName || a.jobName && g.internalAutoRefresh) ? "Uncheck Auto Refresh to view more results" : M && j.current?.paginationResponse?.["page-token"] ? "Close detailed view and uncheck Auto Refresh to view more results" : "",
            disableNextDoubleBtn: g.autoRefresh && !a.jobName || a.jobName && g.internalAutoRefresh || M
          }
        )
      ] })
    ] });
  }
);
fe.displayName = "JobsTable";
fe.propTypes = {
  abortingJobs: t.object.isRequired,
  autoRefreshPrevValue: t.bool.isRequired,
  context: t.object.isRequired,
  filters: t.object.isRequired,
  filtersConfig: Ue.isRequired,
  jobRuns: t.array,
  jobs: t.array,
  paginatedJobs: t.array.isRequired,
  refreshJobs: t.func.isRequired,
  requestErrorMessage: t.string.isRequired,
  searchParams: t.object.isRequired,
  selectedJob: t.object.isRequired,
  setAbortingJobs: t.func.isRequired,
  setJobRuns: t.func.isRequired,
  setJobs: t.func.isRequired,
  setSearchParams: t.func.isRequired,
  setSelectedJob: t.func.isRequired,
  tableContent: t.array.isRequired,
  terminateAbortTasksPolling: t.func.isRequired
};
export {
  fe as J
};
//# sourceMappingURL=JobsTable-DcvsVgZe.mjs.map
