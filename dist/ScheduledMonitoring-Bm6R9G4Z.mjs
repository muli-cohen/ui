import { b4 as i, j as d } from "./main-CTYpZ6Nf.mjs";
import m, { useState as b, useEffect as l } from "react";
import { S as h } from "./ScheduledJobsTable-R_oWJYod.mjs";
import { ProjectJobsMonitoringContext as u } from "./ProjectsJobsMonitoring-BIi3EnDK.mjs";
import { e as C } from "./createJobsContent-DIc0KSEj.mjs";
import { u as S } from "./Table-DB12oa-o.mjs";
const M = () => {
  const [, r] = b(!1), {
    initialTabData: s,
    requestErrorMessage: f,
    refreshScheduled: t,
    scheduledFiltersConfig: c,
    scheduledJobs: o,
    setScheduledJobs: a
  } = m.useContext(u), e = S(
    s?.[i]?.filtersConfig,
    s?.[i]?.parseQueryParamsCallback
  );
  return l(() => {
    r((n) => n || (t(e), !0));
  }, [e, t]), l(() => () => {
    r(!1), a([]);
  }, [a]), /* @__PURE__ */ d.jsx(
    h,
    {
      context: u,
      createTableContent: () => C(o),
      filtersConfig: c,
      filters: e,
      jobs: o,
      requestErrorMessage: f,
      refreshJobs: () => t(e)
    }
  );
};
export {
  M as default
};
//# sourceMappingURL=ScheduledMonitoring-Bm6R9G4Z.mjs.map
