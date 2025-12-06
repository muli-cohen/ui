import { e as b, aN as R, aA as j } from "./main-CTYpZ6Nf.mjs";
import { useState as w, useCallback as N, useLayoutEffect as _ } from "react";
import { useParams as D } from "react-router-dom";
import { useSelector as I } from "react-redux";
import { g as x } from "./usePagination.hook-EDISVLLo.mjs";
const F = (t, s) => b.isNil(s) ? `table_row_parent_${t}` : `table_row_child_${t}_${s}`, i = "parent-row_expanded", H = (t, s, a) => t.current?.classList.value.includes(i) || s && a.data.ui.identifier in s, U = (t) => t.reduce((s, a) => {
  const d = new Date(s.updated), n = new Date(a.updated);
  return isNaN(d) ? a : isNaN(n) || d.getTime() >= n.getTime() ? s : a;
}), $ = (t) => t.find((a) => a.tag === "latest") ?? t[0], v = (t, s, a) => Object.values(t)?.map((n) => Array.isArray(n) ? n[0].updated ? U(n) : $(n) : n), J = (t, s, a, d, n, C, Y, l, p = null) => {
  const [u, y] = w({}), [G, B] = w([]), [h, m] = w(0), [P, L] = w(!1), g = D(), f = I((e) => e.filtersStore), E = N(
    (e, o) => {
      if (f.groupBy !== R) {
        const r = [...document.getElementsByClassName("parent-row")];
        e ? (r.forEach((c) => c.classList.remove(i)), m(0), l && l(!0)) : (r.forEach((c) => c.classList.add(i)), m(Object.keys(o).length), l && l(!1, o));
      }
    },
    [f.groupBy, l]
  ), T = N(
    (e) => {
      E(e, u);
    },
    [u, E]
  ), A = N(() => {
    const e = {};
    p && p.isNewResponse ? (x(t, p).forEach((r) => {
      const c = s(r);
      e[c] ??= [], e[c].push(r);
    }), y(e), B(v(e)), E(!1, e)) : p || (t.forEach((o) => {
      const r = s(o);
      e[r] ??= [], e[r].push(o);
    }), y(e), B(v(e)));
  }, [t, s, p, n, E]), O = N(() => {
    [...document.getElementsByClassName("parent-row")].forEach((o) => o.classList.remove(i)), L(!1), y({});
  }, []), S = (e, o) => {
    const r = e.target.closest(".parent-row");
    r.classList.contains(i) ? (r.classList.remove(i), a && a(o), m((c) => --c)) : (r.classList.remove("table-row_active"), r.classList.add(i), d && d(o, u), m((c) => ++c));
  };
  return _(() => () => {
    m(0);
  }, [g.jobId, g.pipelineId, t]), _(() => {
    Object.keys(u).length > 0 && L(h === Object.keys(u).length);
  }, [h, u]), _(() => (f.groupBy === j ? A() : f.groupBy === R && O(), () => {
    y({});
  }), [A, O, f.groupBy]), {
    allRowsAreExpanded: P,
    groupedContent: u,
    toggleAllRows: T,
    latestItems: G,
    toggleRow: S
  };
};
export {
  i as P,
  F as g,
  H as i,
  J as u
};
//# sourceMappingURL=groupContent.hook-CinwL_Jd.mjs.map
