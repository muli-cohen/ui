import { ag as L, aV as n, e as M, ay as T, aW as A, az as J, j as s } from "./main-CTYpZ6Nf.mjs";
import x, { useState as t, useRef as y, useMemo as O, useEffect as c } from "react";
import { useParams as P } from "react-router-dom";
import { useSelector as D, useDispatch as $ } from "react-redux";
import { f as v, W as z } from "./WorkflowsTable-ns_-ckwD.mjs";
import { JobsContext as j } from "./Jobs-DX2jGRbV.mjs";
import { a as Q } from "./createJobsContent-DIc0KSEj.mjs";
import { u as V, k as q } from "./Table-DB12oa-o.mjs";
const B = () => {
  const [S, i] = t({}), [g, w] = t(!1), [I, m] = t(!1), [R, d] = t(!1), [r, u] = t({}), k = D((f) => f.workflowsStore), o = P(), e = $(), { isStagingMode: p } = L(), {
    abortControllerRef: b,
    abortJobRef: h,
    dateFilter: E,
    getWorkflows: a,
    initialTabData: C,
    requestErrorMessage: F,
    workflowsFiltersConfig: N
  } = x.useContext(j), W = y(!1), l = V(
    C[n]?.filtersConfig,
    C[n]?.parseQueryParamsCallback
  );
  q(e, r);
  const _ = O(
    () => Q(
      k.workflows.data,
      o.projectName,
      p,
      !M.isEmpty(r)
    ),
    [p, o.projectName, r, k.workflows.data]
  );
  return c(() => {
    const f = b.current;
    return () => {
      m(!1), w(!1), d(!1), u({}), i({}), f.abort(T), W.current = !1;
    };
  }, [b, o.projectName, o.workflowId]), c(() => () => {
    e(A()), w(!1);
  }, [e]), c(() => {
    v(
      l,
      o,
      a,
      J,
      e,
      W
    );
  }, [e, a, g, o, E, l]), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("div", { className: "monitor-workflows", children: !o.workflowId && /* @__PURE__ */ s.jsx("p", { className: "monitor-workflows__subtitle", children: "View running workflows and previously executed workflows" }) }),
    /* @__PURE__ */ s.jsx(
      z,
      {
        backLink: `/projects/${o.projectName}/jobs/${n}${window.location.search}`,
        context: j,
        filters: l,
        filtersConfig: N,
        getWorkflows: a,
        itemIsSelected: R,
        ref: { abortJobRef: h },
        requestErrorMessage: F,
        selectedFunction: S,
        selectedJob: r,
        setItemIsSelected: d,
        setSelectedFunction: i,
        setSelectedJob: u,
        setWorkflowIsLoaded: m,
        tableContent: _,
        workflowIsLoaded: I
      }
    )
  ] });
}, eo = x.memo(B);
export {
  eo as default
};
//# sourceMappingURL=MonitorWorkflows-mU-aqnJn.mjs.map
