import { ag as _, dA as c, e as h, ay as A, aW as F, j as i, dE as L } from "./main-CTYpZ6Nf.mjs";
import j, { useState as o, useRef as J, useMemo as P, useEffect as d } from "react";
import { useParams as T } from "react-router-dom";
import { useSelector as N, useDispatch as y } from "react-redux";
import { W as B } from "./WorkflowsTable-ns_-ckwD.mjs";
import { ProjectJobsMonitoringContext as S } from "./ProjectsJobsMonitoring-BIi3EnDK.mjs";
import { f as D } from "./createJobsContent-DIc0KSEj.mjs";
import { u as G, k as $ } from "./Table-DB12oa-o.mjs";
const X = () => {
  const [g, w] = o({}), [m, t] = o(!1), [I, u] = o(!1), [E, k] = o(!1), [e, p] = o({}), s = N((f) => f.workflowsStore), r = T(), a = y(), { isStagingMode: b } = _(), W = J(new AbortController()), { abortJobRef: R, initialTabData: C, getWorkflows: l, requestErrorMessage: x, workflowsFiltersConfig: M } = j.useContext(S), n = G(
    C[c]?.filtersConfig,
    C[c]?.parseQueryParamsCallback
  );
  $(a, e);
  const O = P(
    () => D(
      s.workflows.data,
      b,
      !h.isEmpty(e)
    ),
    [b, e, s.workflows.data]
  );
  return d(() => {
    const f = W.current;
    return () => {
      u(!1), t(!1), k(!1), p({}), w({}), f?.abort(A);
    };
  }, [r.workflowId]), d(() => () => {
    a(F()), t(!1);
  }, [a]), d(() => {
    !m && !r.workflowId && (l(n), t(!0));
  }, [
    n,
    l,
    r.workflowId,
    m,
    s.workflows.data.length
  ]), /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx(
    B,
    {
      backLink: `/projects/*/${L}/${c}${window.location.search}`,
      context: S,
      filters: n,
      filtersConfig: M,
      getWorkflows: l,
      itemIsSelected: E,
      ref: { abortJobRef: R },
      requestErrorMessage: x,
      selectedFunction: g,
      selectedJob: e,
      setItemIsSelected: k,
      setSelectedFunction: w,
      setSelectedJob: p,
      setWorkflowIsLoaded: u,
      tableContent: O,
      workflowIsLoaded: I
    }
  ) });
};
export {
  X as default
};
//# sourceMappingURL=WorkflowsMonitoring-DH7vgg54.mjs.map
