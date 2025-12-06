import { cy as f, az as j, aN as N, cC as S, V as x, dJ as E, e as u, j as r, i as h } from "./main-CTYpZ6Nf.mjs";
import { useState as g, useMemo as v, useEffect as c, useCallback as b } from "react";
import { useNavigate as y, useParams as B, Outlet as C } from "react-router-dom";
import { useSelector as l, useDispatch as G } from "react-redux";
import { B as M } from "./Breadcrumbs-DDXz9SNg.mjs";
const P = () => {
  const [d, p] = g(""), n = y(), o = B(), s = l((m) => m.appStore.frontendSpec), i = l((m) => m.nuclioStore.v3ioStreams), e = G(), a = v(
    () => f(s),
    [s]
  );
  c(() => {
    e(j({ groupBy: N }));
  }, [e]);
  const t = b(() => {
    p(""), e(S({ project: o.projectName }));
  }, [e, o.projectName]);
  return c(() => {
    i.error && (x(
      e,
      i.error,
      "Failed to fetch v3io streams",
      "",
      t,
      p
    ), e(E()));
  }, [e, i.error, t]), c(() => {
    !u.isEmpty(s) && !a && n(`/projects/${o.projectName}/monitor`);
  }, [s, n, a, o.projectName, t]), c(() => {
    a && t();
  }, [a, t]), u.isEmpty(s) ? /* @__PURE__ */ r.jsx(h, {}) : /* @__PURE__ */ r.jsxs("div", { className: "page", children: [
    /* @__PURE__ */ r.jsx("div", { className: "page-breadcrumbs", children: /* @__PURE__ */ r.jsx(M, {}) }),
    /* @__PURE__ */ r.jsx("div", { className: "page-content", children: /* @__PURE__ */ r.jsx(C, { context: [d] }) })
  ] });
};
export {
  P as default
};
//# sourceMappingURL=ConsumerGroupsWrapper-BWShlbSC.mjs.map
