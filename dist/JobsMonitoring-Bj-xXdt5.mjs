import { ag as F, b3 as f, ay as B, aU as I, j as o } from "./main-CTYpZ6Nf.mjs";
import O, { useRef as y, useMemo as D, useEffect as l } from "react";
import { useParams as L } from "react-router-dom";
import { useDispatch as Q } from "react-redux";
import { J as U } from "./JobsTable-DcvsVgZe.mjs";
import { T as q } from "./TableTop-BzNlhhvf.mjs";
import { ProjectJobsMonitoringContext as c } from "./ProjectsJobsMonitoring-BIi3EnDK.mjs";
import { d as v } from "./createJobsContent-DIc0KSEj.mjs";
import { u as z } from "./Table-DB12oa-o.mjs";
const $ = () => {
  const e = L(), { isStagingMode: a } = F(), {
    abortControllerRef: n,
    abortJobRef: u,
    abortingJobs: J,
    autoRefreshPrevValue: g,
    fetchJobFunctionsPromiseRef: p,
    historyBackLink: j,
    initialTabData: i,
    jobRuns: R,
    jobs: h,
    jobsFiltersConfig: C,
    paginatedJobs: t,
    refreshJobs: d,
    requestErrorMessage: x,
    searchParams: P,
    selectedJob: T,
    setAbortingJobs: M,
    setJobRuns: s,
    setJobs: r,
    setSelectedJob: N,
    setSearchParams: E,
    terminateAbortTasksPolling: S
  } = O.useContext(c), A = y(!1), b = Q(), m = z(
    i?.[f]?.filtersConfig,
    i?.[f]?.parseQueryParamsCallback
  ), _ = D(
    () => v(t, e.jobName, a),
    [a, t, e.jobName]
  );
  return l(() => {
    const k = n.current;
    return () => {
      r([]), s([]), k.abort(B), A.current = !1;
    };
  }, [n, r, s]), l(() => () => {
    b(I(!1));
  }, [b, e.jobName]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    e.jobName && /* @__PURE__ */ o.jsx(q, { link: j, text: e.jobName }),
    /* @__PURE__ */ o.jsx(
      U,
      {
        abortingJobs: J,
        autoRefreshPrevValue: g,
        context: c,
        filters: m,
        filtersConfig: C,
        jobRuns: R,
        jobs: h,
        paginatedJobs: t,
        ref: { abortJobRef: u, fetchJobFunctionsPromiseRef: p },
        refreshJobs: () => d(m),
        requestErrorMessage: x,
        searchParams: P,
        selectedJob: T,
        setAbortingJobs: M,
        setJobRuns: s,
        setJobs: r,
        setSelectedJob: N,
        setSearchParams: E,
        tableContent: _,
        terminateAbortTasksPolling: S
      }
    )
  ] });
};
export {
  $ as default
};
//# sourceMappingURL=JobsMonitoring-Bj-xXdt5.mjs.map
