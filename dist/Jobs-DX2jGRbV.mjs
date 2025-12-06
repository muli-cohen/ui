import { aY as R, j as e, aZ as H, a_ as we, a$ as Q, b0 as _, b1 as l, b2 as w, b3 as Je, ag as Te, b4 as Ae, aX as f, aV as m, aT as n, b5 as y, e as M, b6 as h, b7 as ke, b8 as Pe, b9 as D, p as Ne, ba as Be, at as $, i as Ee, K as Ie, J as Fe } from "./main-CTYpZ6Nf.mjs";
import G, { useState as p, useMemo as W, useCallback as Le, useLayoutEffect as Oe, useEffect as ye } from "react";
import { useSelector as u } from "react-redux";
import { useParams as Me, useNavigate as De, useLocation as $e, Outlet as We } from "react-router-dom";
import { B as He } from "./Breadcrumbs-DDXz9SNg.mjs";
import { C as Qe } from "./Input-7Hc9IEQ_.mjs";
import { P as Ge } from "./PreviewModal-CXJei3eh.mjs";
import { b as Ve } from "./link-helper.util-CuUJj7TV.mjs";
import { p as ze, l as Ue, m as qe, n as Ke, o as Ye, q as Xe, u as Ze } from "./Table-DB12oa-o.mjs";
import { A as ea } from "./ActionBar-C8Jl3Xmo.mjs";
import { M as J } from "./MultiSelectFilter-B4v2ovYm.mjs";
import { j as aa, g as V, w as sa } from "./clock-BFaispYx.mjs";
import { u as ta } from "./useJobsPageData-D0yfgaUT.mjs";
const oa = () => {
  const t = R(), d = (a, o) => {
    t.change(o, a || "");
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(J, { optionsList: aa, name: H }) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      we,
      {
        label: "Type",
        name: Q,
        options: V(Je)
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        _,
        {
          label: "Labels",
          name: l,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          handler: (a) => d(a, l),
          name: l
        }
      )
    ] })
  ] });
}, ra = () => {
  const t = R(), { isDemoMode: d } = Te(), a = (o, j) => {
    t.change(j, o || "");
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(J, { optionsList: sa, name: H }) }),
    d && /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        _,
        {
          label: "Labels",
          name: l,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          handler: (o) => a(o, l),
          name: l
        }
      )
    ] })
  ] });
}, na = () => {
  const t = R(), d = (a, o) => {
    t.change(o, a || "");
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(J, { optionsList: V(Ae), name: Q }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx(
        _,
        {
          label: "Labels",
          name: l,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          handler: (a) => d(a, l),
          name: l
        }
      )
    ] })
  ] });
}, la = G.createContext({}), ia = () => {
  const [t, d] = p(null), [a, o] = p(null), [j, z] = p(!1), [g, T] = p({}), i = Me(), b = De(), c = $e(), U = u((s) => s.functionsStore), C = u((s) => s.jobsStore), q = u((s) => s.workflowsStore), A = u((s) => s.artifactsStore), k = u((s) => s.appStore), P = u((s) => s.filtersStore), r = W(() => ({
    [n]: {
      filtersConfig: Xe(i.jobName),
      modalFilters: /* @__PURE__ */ e.jsx(oa, {}),
      parseQueryParamsCallback: Ye
    },
    [m]: {
      filtersConfig: Ke(),
      modalFilters: /* @__PURE__ */ e.jsx(ra, {}),
      parseQueryParamsCallback: qe
    },
    [f]: {
      filtersConfig: Ue(),
      modalFilters: /* @__PURE__ */ e.jsx(na, {}),
      parseQueryParamsCallback: ze
    }
  }), [i.jobName]), {
    abortControllerRef: K,
    abortJobRef: Y,
    abortingJobs: X,
    editableItem: Z,
    fetchJobFunctionsPromiseRef: ee,
    getWorkflows: v,
    handleMonitoring: N,
    handleRefreshJobs: B,
    handleRerunJob: ae,
    historyBackLink: se,
    jobRuns: te,
    jobWizardIsOpened: E,
    jobWizardMode: oe,
    jobs: re,
    lastCheckedJobIdRef: ne,
    paginatedJobs: le,
    paginationConfigJobsRef: ie,
    refreshAfterDeleteCallback: ce,
    refreshJobs: de,
    refreshScheduled: x,
    requestErrorMessage: fe,
    scheduledJobs: me,
    searchParams: ue,
    setAbortingJobs: be,
    setEditableItem: he,
    setJobRuns: pe,
    setJobWizardIsOpened: je,
    setJobWizardMode: I,
    setJobs: ge,
    setScheduledJobs: Ce,
    setSearchParams: F,
    terminateAbortTasksPolling: ve
  } = ta(r, a), xe = () => {
    I(Fe);
  }, Se = Le(
    (s) => {
      o(s), b(`/projects/${i.projectName}/${y.toLowerCase()}/${s}`);
    },
    [b, i.projectName]
  ), S = W(() => M.defaultsDeep(
    {
      [n]: {
        handleRefresh: (...s) => {
          T({}), B(...s);
        }
      },
      [m]: {
        handleRefresh: v
      },
      [f]: {
        handleRefresh: x
      }
    },
    r
  ), [v, B, r, x]);
  Oe(() => {
    o(
      c.pathname.includes(`${h}/${n}`) ? n : c.pathname.includes(`${h}/${f}`) ? f : m
    );
  }, [c.pathname]), ye(() => {
    const s = c.pathname.split("/"), O = s.indexOf(ke) + 3;
    if (s[O] === Pe)
      s[O] = n, b(s.join("/"), { replace: !0 });
    else {
      const Re = c.pathname.includes(`${h}/${m}`) ? m : c.pathname.includes(`${h}/${f}`) ? f : n;
      Ve(
        Re,
        D.map((_e) => _e.id),
        b,
        c
      );
    }
  }, [b, i.pageTab, c]);
  const L = Ze(
    r[a]?.filtersConfig,
    r[a]?.parseQueryParamsCallback
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "content-wrapper", children: [
      /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(He, {}) }),
      a && L && /* @__PURE__ */ e.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "content__action-bar-wrapper content__action-bar-wrapper_multi-row", children: [
          /* @__PURE__ */ e.jsx(
            Qe,
            {
              activeTab: a,
              onClick: Se,
              screen: y,
              tabs: D
            }
          ),
          /* @__PURE__ */ e.jsx(
            ea,
            {
              actionButtons: [
                {
                  className: "action-button",
                  hidden: a === m,
                  label: Be,
                  onClick: xe,
                  variant: Ne
                },
                {
                  className: "action-button",
                  label: "Resource monitoring",
                  hidden: a !== n,
                  tooltip: k.frontendSpec.jobs_dashboard_url ? "" : "Grafana service unavailable",
                  variant: $,
                  disabled: !k.frontendSpec.jobs_dashboard_url,
                  onClick: () => N(g, !0)
                }
              ],
              autoRefreshIsStopped: E || C.loading || !!C.jobLoadingCounter,
              autoRefreshIsEnabled: P.autoRefresh,
              internalAutoRefreshIsEnabled: P.internalAutoRefresh,
              autoRefreshStopTrigger: !M.isEmpty(g),
              closeParamName: i.jobName,
              filters: L,
              filtersConfig: r[a].filtersConfig,
              handleAutoRefreshPrevValueChange: z,
              handleRefresh: S[a].handleRefresh,
              hidden: !!i.workflowId,
              setSearchParams: F,
              tab: a,
              withAutoRefresh: a === n,
              withInternalAutoRefresh: !!(a === n && i.jobName),
              withRefreshButton: !0,
              withoutExpandButton: !0,
              children: S[a].modalFilters
            },
            a
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "table-container", children: [
          /* @__PURE__ */ e.jsx(
            la.Provider,
            {
              value: {
                abortControllerRef: K,
                abortJobRef: Y,
                abortingJobs: X,
                autoRefreshPrevValue: j,
                editableItem: Z,
                fetchJobFunctionsPromiseRef: ee,
                getWorkflows: v,
                handleMonitoring: N,
                handleRerunJob: ae,
                historyBackLink: se,
                initialTabData: r,
                jobRuns: te,
                jobWizardIsOpened: E,
                jobWizardMode: oe,
                jobs: re,
                jobsFiltersConfig: r[n].filtersConfig,
                lastCheckedJobIdRef: ne,
                paginatedJobs: le,
                paginationConfigJobsRef: ie,
                refreshAfterDeleteCallback: ce,
                refreshJobs: de,
                refreshScheduled: x,
                requestErrorMessage: fe,
                scheduledFiltersConfig: r[f].filtersConfig,
                scheduledJobs: me,
                searchParams: ue,
                selectedJob: g,
                setAbortingJobs: be,
                setConfirmData: d,
                setEditableItem: he,
                setJobRuns: pe,
                setJobWizardIsOpened: je,
                setJobWizardMode: I,
                setJobs: ge,
                setScheduledJobs: Ce,
                setSearchParams: F,
                setSelectedJob: T,
                tabData: S,
                terminateAbortTasksPolling: ve,
                workflowsFiltersConfig: r[m].filtersConfig
              },
              children: /* @__PURE__ */ e.jsx(We, {})
            }
          ),
          (!!C.jobLoadingCounter || q.activeWorkflow.loading || U.funcLoading) && /* @__PURE__ */ e.jsx(Ee, {})
        ] })
      ] })
    ] }),
    t && /* @__PURE__ */ e.jsx(
      Ie,
      {
        cancelButton: {
          handler: t.rejectHandler,
          label: "Cancel",
          variant: $
        },
        closePopUp: t.rejectHandler,
        confirmButton: {
          handler: () => t.confirmHandler(t.item),
          label: t.btnConfirmLabel,
          variant: t.btnConfirmType
        },
        header: t.header,
        isOpen: !!t,
        message: t.message
      }
    ),
    A?.preview?.isPreview && /* @__PURE__ */ e.jsx(Ge, { artifact: A?.preview?.selectedItem })
  ] });
}, Sa = G.memo(ia);
export {
  la as JobsContext,
  Sa as default
};
//# sourceMappingURL=Jobs-DX2jGRbV.mjs.map
