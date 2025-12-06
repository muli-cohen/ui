import { aY as F, e as g, h1 as J, bF as L, j as e, a_ as v, es as k, aZ as H, b0 as I, b1 as l, b2 as _, b3 as f, a$ as Fe, b4 as h, ag as Je, dA as j, dE as G, i as Le, K as ke, at as Ie } from "./main-CTYpZ6Nf.mjs";
import _e, { useMemo as c, useState as p, useLayoutEffect as Ae } from "react";
import { useSelector as n } from "react-redux";
import { useParams as q, useLocation as Ee, useNavigate as Oe, Outlet as Me } from "react-router-dom";
import { C as Be } from "./Input-7Hc9IEQ_.mjs";
import { P as ye } from "./PreviewModal-CXJei3eh.mjs";
import { B as We } from "./Breadcrumbs-DDXz9SNg.mjs";
import { A as De } from "./ActionBar-C8Jl3Xmo.mjs";
import { M as A } from "./MultiSelectFilter-B4v2ovYm.mjs";
import { j as Qe, g as U, w as Ge } from "./clock-BFaispYx.mjs";
import { g as E } from "./projects-Cp4BQIu-.mjs";
import { q as ze, l as He, n as qe, p as Ue, m as Ve, o as $e, u as Ke } from "./Table-DB12oa-o.mjs";
import { u as Ye } from "./useJobsPageData-D0yfgaUT.mjs";
const Ze = () => {
  const i = F(), o = q(), a = n((t) => t.projectStore), d = c(() => {
    const t = E(a.projectsNames.data);
    return [
      {
        id: J,
        label: g.upperFirst(L)
      },
      ...t
    ];
  }, [a.projectsNames.data]), s = (t, u) => {
    i.change(u, t || "");
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    !o.jobName && /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      v,
      {
        label: "Project name",
        name: k,
        options: d,
        preventWidthOverflow: !0
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(A, { optionsList: Qe, name: H }) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      v,
      {
        label: "Type",
        name: "type",
        options: U(f)
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        I,
        {
          label: "Labels",
          name: l,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ e.jsx(
        _,
        {
          handler: (t) => s(t, l),
          name: l
        }
      )
    ] })
  ] });
}, Xe = () => {
  const i = F(), o = n((s) => s.projectStore), a = c(() => {
    const s = E(o.projectsNames.data);
    return [
      {
        id: J,
        label: g.upperFirst(L)
      },
      ...s
    ];
  }, [o.projectsNames.data]), d = (s, t) => {
    i.change(t, s || "");
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      v,
      {
        label: "Project name",
        name: k,
        options: a,
        preventWidthOverflow: !0
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(A, { optionsList: U(h), name: Fe }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        I,
        {
          label: "Labels",
          name: l,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ e.jsx(
        _,
        {
          handler: (s) => d(s, l),
          name: l
        }
      )
    ] })
  ] });
}, es = () => {
  const i = F(), { isDemoMode: o } = Je(), a = n((t) => t.projectStore), d = c(() => {
    const t = E(a.projectsNames.data);
    return [
      {
        id: J,
        label: g.upperFirst(L)
      },
      ...t
    ];
  }, [a.projectsNames.data]), s = (t, u) => {
    i.change(u, t || "");
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      v,
      {
        label: "Project name",
        name: k,
        options: d,
        preventWidthOverflow: !0
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(A, { optionsList: Ge, name: H }) }),
    o && /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        I,
        {
          label: "Labels",
          name: l,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ e.jsx(
        _,
        {
          handler: (t) => s(t, l),
          name: l
        }
      )
    ] })
  ] });
}, z = "total", ss = [
  { id: f, label: "Jobs" },
  { id: j, label: "Workflows" },
  { id: h, label: "Scheduled" }
], ts = _e.createContext({}), ps = () => {
  const [i, o] = p({}), [a, d] = p(null), [s, t] = p(null), { jobsMonitoringData: u } = n((r) => r.projectStore), [V, O] = p(
    u.filters?.status || z
  ), [$, K] = p(!1), x = Ee(), b = q(), Y = Oe(), M = n((r) => r.artifactsStore), S = n((r) => r.jobsStore), Z = n((r) => r.workflowsStore), X = n((r) => r.functionsStore), B = n((r) => r.filtersStore), C = c(
    () => ze(b.jobName, !0),
    [b.jobName]
  ), R = c(() => He(!0), []), w = c(() => qe(!0), []), m = c(() => ({
    [f]: {
      filtersConfig: C,
      modalFilters: /* @__PURE__ */ e.jsx(Ze, {}),
      parseQueryParamsCallback: $e
    },
    [j]: {
      filtersConfig: w,
      modalFilters: /* @__PURE__ */ e.jsx(es, {}),
      parseQueryParamsCallback: Ve
    },
    [h]: {
      filtersConfig: R,
      modalFilters: /* @__PURE__ */ e.jsx(Xe, {}),
      parseQueryParamsCallback: Ue
    }
  }), [C, R, w]), {
    abortControllerRef: ee,
    abortJobRef: se,
    abortingJobs: te,
    editableItem: ae,
    fetchJobFunctionsPromiseRef: re,
    getWorkflows: N,
    handleMonitoring: oe,
    handleRefreshJobs: y,
    handleRerunJob: ne,
    historyBackLink: le,
    jobRuns: ie,
    jobWizardIsOpened: W,
    jobWizardMode: ce,
    jobs: de,
    lastCheckedJobIdRef: me,
    paginatedJobs: fe,
    paginationConfigJobsRef: ue,
    refreshAfterDeleteCallback: he,
    refreshJobs: be,
    refreshScheduled: P,
    requestErrorMessage: pe,
    scheduledJobs: je,
    searchParams: ge,
    setAbortingJobs: ve,
    setEditableItem: xe,
    setJobRuns: Se,
    setJobWizardIsOpened: Ce,
    setJobWizardMode: Re,
    setJobs: we,
    setScheduledJobs: Ne,
    setSearchParams: D,
    terminateAbortTasksPolling: Pe
  } = Ye(m, s), Te = (r) => {
    O(z), t(r), Y(`/projects/*/${G}/${r}`);
  };
  Ae(() => {
    t(
      x.pathname.includes(j) ? j : x.pathname.includes(h) ? h : f
    );
  }, [x.pathname]);
  const T = c(() => g.defaultsDeep(
    {
      [f]: {
        handleRefresh: (...r) => {
          o({}), y(...r);
        }
      },
      [j]: {
        handleRefresh: N
      },
      [h]: {
        handleRefresh: P
      }
    },
    m
  ), [N, y, m, P]), Q = Ke(
    m[s]?.filtersConfig,
    m[s]?.parseQueryParamsCallback
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "job-monitoring content-wrapper", children: [
      /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(We, {}) }),
      s && Q && /* @__PURE__ */ e.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "content__action-bar-wrapper", children: [
          /* @__PURE__ */ e.jsx(
            Be,
            {
              activeTab: s,
              screen: G,
              onClick: Te,
              tabs: ss
            }
          ),
          /* @__PURE__ */ e.jsx(
            De,
            {
              autoRefreshIsStopped: W || S.loading || !!S.jobLoadingCounter,
              autoRefreshIsEnabled: B.autoRefresh,
              internalAutoRefreshIsEnabled: B.internalAutoRefresh,
              autoRefreshStopTrigger: !g.isEmpty(i),
              closeParamName: b.jobName,
              filters: Q,
              filtersConfig: m[s].filtersConfig,
              handleRefresh: T[s].handleRefresh,
              handleAutoRefreshPrevValueChange: K,
              hidden: !!b.workflowId,
              setSearchParams: D,
              tab: s,
              withAutoRefresh: s === f,
              withInternalAutoRefresh: !!(s === f && b.jobName),
              withRefreshButton: !0,
              withoutExpandButton: !0,
              children: T[s].modalFilters
            },
            s
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "table-container", children: [
          /* @__PURE__ */ e.jsx(
            ts.Provider,
            {
              value: {
                abortControllerRef: ee,
                abortJobRef: se,
                abortingJobs: te,
                autoRefreshPrevValue: $,
                editableItem: ae,
                fetchJobFunctionsPromiseRef: re,
                getWorkflows: N,
                handleMonitoring: oe,
                handleRerunJob: ne,
                historyBackLink: le,
                initialTabData: m,
                jobRuns: ie,
                jobWizardIsOpened: W,
                jobWizardMode: ce,
                jobs: de,
                jobsFiltersConfig: C,
                jobsMonitoringData: u,
                lastCheckedJobIdRef: me,
                paginatedJobs: fe,
                paginationConfigJobsRef: ue,
                refreshAfterDeleteCallback: he,
                refreshJobs: be,
                refreshScheduled: P,
                requestErrorMessage: pe,
                scheduledFiltersConfig: R,
                scheduledJobs: je,
                searchParams: ge,
                selectedCard: V,
                selectedJob: i,
                setAbortingJobs: ve,
                setConfirmData: d,
                setEditableItem: xe,
                setJobRuns: Se,
                setJobWizardIsOpened: Ce,
                setJobWizardMode: Re,
                setJobs: we,
                setScheduledJobs: Ne,
                setSelectedCard: O,
                setSelectedJob: o,
                setSearchParams: D,
                tabData: T,
                terminateAbortTasksPolling: Pe,
                workflowsFiltersConfig: w
              },
              children: /* @__PURE__ */ e.jsx(Me, {})
            }
          ),
          (!!S.jobLoadingCounter || Z.activeWorkflow.loading || X.funcLoading) && /* @__PURE__ */ e.jsx(Le, {})
        ] })
      ] })
    ] }),
    a && /* @__PURE__ */ e.jsx(
      ke,
      {
        cancelButton: {
          handler: a.rejectHandler,
          label: "Cancel",
          variant: Ie
        },
        closePopUp: a.rejectHandler,
        confirmButton: {
          handler: () => a.confirmHandler(a.item),
          label: a.btnConfirmLabel,
          variant: a.btnConfirmType
        },
        header: a.header,
        isOpen: !!a,
        message: a.message
      }
    ),
    M?.preview?.isPreview && /* @__PURE__ */ e.jsx(ye, { artifact: M?.preview?.selectedItem })
  ] });
};
export {
  ts as ProjectJobsMonitoringContext,
  ps as default
};
//# sourceMappingURL=ProjectsJobsMonitoring-BIi3EnDK.mjs.map
