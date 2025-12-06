import { useState as n, useRef as l, useMemo as fe, useCallback as b } from "react";
import { useParams as he, useLocation as de } from "react-router-dom";
import { useDispatch as ge, useSelector as je } from "react-redux";
import { aE as Je, aT as N, dE as Ne, b3 as E, e as G, aH as z, aI as D, h2 as Re, h3 as _e, ds as Ae, gU as Ce, h4 as Pe, bF as F, h5 as Se, gH as ye, h6 as Ee, h7 as Ie, aX as Oe } from "./main-CTYpZ6Nf.mjs";
import { u as q } from "./usePagination.hook-EDISVLLo.mjs";
import { u as Be, as as H } from "./Table-DB12oa-o.mjs";
import { u as we } from "./useRefreshAfterDelete.hook-BJMjzj5C.mjs";
const ze = (I, a) => {
  const [O, f] = n(null), [U, B] = n(null), [x, w] = n(null), [v, K] = n(!1), [k, h] = n(null), [Q, R] = n({}), u = l({}), c = l({}), i = l(new AbortController()), _ = l(null), V = l(), e = he(), [X, A] = n(""), [Y, C] = n([]), t = ge(), $ = de(), L = je((o) => o.appStore), M = l(null), T = fe(() => {
    const o = Je($.search);
    return a === N ? `/projects/${e.projectName}/jobs/${N}${o}` : `/projects/*/${Ne}/${E}${o}`;
  }, [$.search, e.projectName, a]), W = Be(
    I[a]?.filtersConfig,
    I[a]?.parseQueryParamsCallback
  ), [Z, ee] = we(
    c,
    T,
    "runs",
    null,
    !!e.jobName
  ), P = b(() => {
    _?.current?.(), R({});
  }, []), j = b(
    (o, { forceFetchJobs: s = !1 } = {}) => {
      const r = e.jobName && !s;
      r ? f(null) : h(null), i.current = new AbortController(), P();
      const m = r ? Re : _e, be = o.project?.toLowerCase?.() || e.projectName || "*", p = {
        ui: {
          controller: i.current,
          setRequestErrorMessage: A
        },
        params: {}
      };
      return r || (p.params["partition-by"] = "project_and_name", p.params["partition-sort-by"] = "updated"), !r && !G.isEmpty(u.current) && (p.params.page = u.current[z], p.params["page-size"] = u.current[D]), r && !G.isEmpty(c.current) && (p.params.page = c.current[z], p.params["page-size"] = c.current[D]), M.current = null, t(
        m({
          project: be,
          filters: o,
          config: p,
          jobName: r ? e.jobName : !1
        })
      ).unwrap().then((d) => {
        if (d?.runs) {
          const S = d.runs.map((J) => H(J)), y = S.reduce((J, g) => (g.state.value === Ae && g.abortTaskId && (J[g.abortTaskId] = {
            uid: g.uid,
            name: g.name
          }), J), {});
          Object.keys(y).length > 0 && (R(y), Ce(
            o.project?.toLowerCase?.() || e.projectName || "*",
            _,
            y,
            () => j(o),
            t
          )), r ? (f(S), c.current.paginationResponse = d.pagination) : (h(S), u.current.paginationResponse = d.pagination);
        } else
          r ? f([]) : h([]);
        return d;
      }).catch(() => {
        r ? f([]) : h([]);
      });
    },
    [t, e.jobName, e.projectName, P]
  ), oe = b(
    (o) => (C([]), i.current = new AbortController(), t(
      Pe({
        project: o.project ? o.project.toLowerCase() : e.projectName || "*",
        filters: o,
        config: {
          ui: {
            controller: i.current,
            setRequestErrorMessage: A
          }
        }
      })
    ).unwrap().then((s) => {
      if (s) {
        const r = s.map((m) => H(m, Oe)).filter((m) => !o.type || o.type === F || m.type === o.type || Array.isArray(o.type) && o.type.includes(m.type) || o.type.includes(F));
        C(r);
      }
    })),
    [t, e.projectName]
  ), re = b(
    (o) => {
      i.current = new AbortController();
      const s = o.project?.toLowerCase?.() || e.projectName || "*";
      t(
        Se({
          project: s,
          filter: { ...o, groupBy: ye },
          config: {
            ui: {
              controller: i.current,
              setRequestErrorMessage: A
            }
          },
          withPagination: !e.projectName
        })
      );
    },
    [t, e.projectName]
  ), te = b(
    (o, s) => {
      Ee(L.frontendSpec.jobs_dashboard_url, o, e.projectName, s);
    },
    [L.frontendSpec.jobs_dashboard_url, e.projectName]
  ), ae = b(
    async (o) => await Ie(o, B, w, t),
    [t]
  ), [se, ne, ce, ie] = q({
    hidden: ![N, E].includes(a) || !!e.jobName,
    content: k ?? [],
    refreshContent: j,
    filters: W,
    paginationConfigRef: u,
    resetPaginationTrigger: `${e.projectName}_${a}_${ee}`
  }), [pe, ue, me, le] = q({
    hidden: ![N, E].includes(a) || !e.jobName,
    content: O ?? [],
    refreshContent: j,
    filters: W,
    paginationConfigRef: c,
    resetPaginationTrigger: `${e.projectName}_${a}_${e.jobName}`,
    isAllVersions: !!e.jobName
  });
  return {
    abortControllerRef: i,
    abortJobRef: _,
    abortingJobs: Q,
    editableItem: U,
    fetchJobFunctionsPromiseRef: V,
    getWorkflows: re,
    handleMonitoring: te,
    handleRefreshJobs: e.jobName ? pe : se,
    handleRerunJob: ae,
    historyBackLink: T,
    jobRuns: O,
    jobWizardIsOpened: v,
    jobWizardMode: x,
    jobs: k,
    lastCheckedJobIdRef: M,
    paginatedJobs: e.jobName ? ue : ne,
    paginationConfigJobsRef: e.jobName ? c : u,
    refreshAfterDeleteCallback: Z,
    refreshJobs: j,
    refreshScheduled: oe,
    requestErrorMessage: X,
    scheduledJobs: Y,
    searchParams: e.jobName ? me : ce,
    setAbortingJobs: R,
    setEditableItem: B,
    setJobRuns: f,
    setJobWizardIsOpened: K,
    setJobWizardMode: w,
    setJobs: h,
    setScheduledJobs: C,
    setSearchParams: e.jobName ? le : ie,
    terminateAbortTasksPolling: P
  };
};
export {
  ze as u
};
//# sourceMappingURL=useJobsPageData-D0yfgaUT.mjs.map
