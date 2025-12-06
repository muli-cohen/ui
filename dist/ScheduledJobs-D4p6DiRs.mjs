import { aX as f, ay as h, az as E, aN as S, j as J } from "./main-CTYpZ6Nf.mjs";
import i, { useState as x, useEffect as s } from "react";
import { useParams as T } from "react-router-dom";
import { useDispatch as _ } from "react-redux";
import { S as R } from "./ScheduledJobsTable-R_oWJYod.mjs";
import { JobsContext as m } from "./Jobs-DX2jGRbV.mjs";
import { b as g } from "./createJobsContent-DIc0KSEj.mjs";
import { u as j } from "./Table-DB12oa-o.mjs";
const d = () => {
  const [, o] = x(!1), {
    abortControllerRef: a,
    initialTabData: l,
    scheduledJobs: n,
    refreshScheduled: r,
    requestErrorMessage: b,
    setJobs: u,
    scheduledFiltersConfig: p
  } = i.useContext(m), c = _(), C = T(), t = j(
    l[f]?.filtersConfig,
    l[f]?.parseQueryParamsCallback
  );
  return s(() => {
    o((e) => e || (r(t), !0));
  }, [t, r]), s(() => {
    const e = a.current;
    return () => {
      u([]), o(!1), e.abort(h);
    };
  }, [a, C.projectName, u]), s(() => {
    c(E({ groupBy: S }));
  }, [c]), /* @__PURE__ */ J.jsx(
    R,
    {
      context: m,
      createTableContent: () => g(n),
      filters: t,
      filtersConfig: p,
      jobs: n,
      requestErrorMessage: b,
      refreshJobs: r
    }
  );
};
d.propTypes = {};
const A = i.memo(d);
export {
  A as default
};
//# sourceMappingURL=ScheduledJobs-D4p6DiRs.mjs.map
