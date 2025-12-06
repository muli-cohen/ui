import { useState as b, useRef as H, useMemo as L, useCallback as $, useLayoutEffect as j, useEffect as R } from "react";
import { useSearchParams as J } from "react-router-dom";
import { g$ as u, aH as e, e as G, kB as k, aI as T, kC as K, kD as Q, kE as W, kF as X } from "./main-CTYpZ6Nf.mjs";
import { useSelector as Y } from "react-redux";
const C = ({
  bePageSize: _ = 1e3,
  content: n = [],
  fePageSize: E = 50,
  filters: m,
  hidden: o = !1,
  paginationConfigRef: r,
  refreshContent: M,
  resetPaginationTrigger: A,
  isAllVersions: w = !1
}) => {
  const [c, l] = J(), [U, Z] = b([]), h = H(A), F = Y((t) => t.filtersStore), P = L(() => G.debounce((t) => M(t)), [M]), N = $(
    (t) => {
      l(
        (s) => (t && (s.set(e, 1), s.set(u, 1)), s),
        { replace: !0 }
      ), r.current = {
        [T]: _,
        [k]: E,
        [e]: 1,
        [u]: 1,
        isNewResponse: !1,
        paginationResponse: null
      };
    },
    [_, E, r, l]
  );
  return j(() => {
    if (!o) {
      const t = r.current.paginationResponse || null, s = {
        [T]: _,
        [k]: E,
        [e]: parseInt(c.get(e)) || 1,
        [u]: parseInt(c.get(u)) || 1,
        paginationResponse: t
      }, I = _ * (s[e] - 1) / E + 1, B = I + Math.ceil(n.length / E) - 1, q = s[e], D = parseInt(t?.page);
      if (s.isNewResponse = q === D, D && q === D && B >= I || !c.has(u) && !c.has(e)) {
        s[K] = I, s[Q] = B;
        const p = s[u];
        s[u] = p && p >= I && p <= B ? p : I, l(
          (a) => (a.set(e, s[e]), a.set(u, s[u]), a),
          { replace: !0 }
        );
      }
      Z((p) => {
        const a = V(
          n,
          s,
          u,
          e
        ), x = (s[u] - 1) * s[k], y = a.length === 0 ? 0 : x + 1, O = x + a.length;
        return y && O && (s[W] = y, s[X] = O), r.current = {
          ...r.current,
          ...s
        }, G.isEqual(p, a) ? p : a;
      });
    }
  }, [_, E, r, n, c, l, o]), R(() => {
    A !== h.current && (h.current = A, r.current.paginationResponse && N(!1));
  }, [o, r, N, A]), R(() => {
    const t = r.current?.paginationResponse;
    !o && c.get(e) && (!t || t?.page && t?.page !== parseInt(c.get(e))) && P(m);
  }, [m, o, r, P, c]), R(() => {
    queueMicrotask(() => {
      !o && n.length === 0 && G.isNull(r.current.paginationResponse?.page) && parseInt(c.get(e)) > 1 && (r.current.paginationResponse = null, l(
        (t) => (t.set(e, 1), t.set(u, 1), t),
        { replace: !0 }
      ));
    });
  }, [r, n, c, l, o]), R(() => {
    o || (F.autoRefresh && !w || w && F.internalAutoRefresh) && r.current[e] > 1 && l(
      (t) => (t.set(e, 1), t.set(u, 1), t),
      { replace: !0 }
    );
  }, [
    F.autoRefresh,
    F.internalAutoRefresh,
    o,
    w,
    r,
    l
  ]), [(t, s) => {
    s && (c.get(e) !== "1" || c.get(u) !== "1") ? N(!0) : M(t);
  }, U, c, l, N];
}, V = (_, n, E = u, m = e) => {
  const o = G.chunk(_, n[k]), r = n[E] - (n[m] * n[T] - n[T]) / n[k];
  return o[r - 1] ?? [];
};
export {
  V as g,
  C as u
};
//# sourceMappingURL=usePagination.hook-EDISVLLo.mjs.map
