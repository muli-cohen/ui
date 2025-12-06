import { ag as B, aT as f, az as O, aN as y, ay as D, aU as I, j as t } from "./main-CTYpZ6Nf.mjs";
import c, { useRef as U, useMemo as z, useEffect as s } from "react";
import { useParams as L } from "react-router-dom";
import { useDispatch as Q } from "react-redux";
import { J as q } from "./JobsTable-DcvsVgZe.mjs";
import { T as v } from "./TableTop-BzNlhhvf.mjs";
import { JobsContext as l } from "./Jobs-DX2jGRbV.mjs";
import { c as G } from "./createJobsContent-DIc0KSEj.mjs";
import { u as V } from "./Table-DB12oa-o.mjs";
const Y = () => {
  const e = L(), o = Q(), { isStagingMode: i } = B(), {
    abortControllerRef: m,
    abortJobRef: u,
    abortingJobs: p,
    autoRefreshPrevValue: j,
    fetchJobFunctionsPromiseRef: J,
    historyBackLink: g,
    initialTabData: b,
    jobRuns: R,
    jobs: C,
    jobsFiltersConfig: N,
    paginatedJobs: r,
    refreshJobs: d,
    requestErrorMessage: h,
    searchParams: T,
    selectedJob: x,
    setAbortingJobs: P,
    setJobRuns: a,
    setJobs: n,
    setSelectedJob: E,
    setSearchParams: M,
    terminateAbortTasksPolling: _
  } = c.useContext(l), A = U(!1), F = V(
    b[f]?.filtersConfig,
    b[f]?.parseQueryParamsCallback
  ), S = z(
    () => G(r, e.jobName, i),
    [i, r, e.jobName]
  );
  return s(() => {
    o(O({ groupBy: y }));
  }, [o]), s(() => {
    const k = m.current;
    return () => {
      n([]), a([]), k?.abort(D);
    };
  }, [m, e.projectName, a, n]), s(() => () => {
    A.current = !1;
  }, [e.projectName, e.jobName]), s(() => () => {
    o(I(!1));
  }, [o, e.jobName]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    e.jobName && /* @__PURE__ */ t.jsx(v, { link: g, text: e.jobName }),
    /* @__PURE__ */ t.jsx(
      q,
      {
        abortingJobs: p,
        autoRefreshPrevValue: j,
        context: l,
        filters: F,
        filtersConfig: N,
        jobRuns: R,
        jobs: C,
        paginatedJobs: r,
        ref: { abortJobRef: u, fetchJobFunctionsPromiseRef: J },
        refreshJobs: d,
        requestErrorMessage: h,
        searchParams: T,
        selectedJob: x,
        setAbortingJobs: P,
        setJobRuns: a,
        setJobs: n,
        setSelectedJob: E,
        setSearchParams: M,
        tableContent: S,
        terminateAbortTasksPolling: _
      }
    )
  ] });
}, te = c.memo(Y);
export {
  te as default
};
//# sourceMappingURL=MonitorJobs-BRsU2kCl.mjs.map
