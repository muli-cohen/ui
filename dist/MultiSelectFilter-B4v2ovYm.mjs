import { h8 as c, aY as h, bF as s, j as n, a_ as f, e as d, b2 as x, P as O } from "./main-CTYpZ6Nf.mjs";
import { memo as F, useMemo as g } from "react";
import { O as S } from "./exclamation-mark-kRjYDG-V.mjs";
const u = ({ optionsList: l, name: r }) => {
  const { input: o } = c(r), { change: p } = h(), a = g(() => o.value?.includes?.(s) ? l.map(
    (t) => t.id === s ? { ...t, disabled: !0 } : t
  ) : l, [o.value, l]), m = (i, t) => {
    i.length > 1 && i.includes(s) && i.indexOf(s) === 0 ? p(
      r,
      i.filter((e) => e !== s)
    ) : (d.isEmpty(i) || !t.includes(s) && i.includes(s) && i.indexOf(s) > 0 || a.filter((e) => e.id !== s && !e.hidden).length === i.length) && p(r, [s]);
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(f, { label: d.capitalize(r), name: r, options: a, multiple: !0 }),
    /* @__PURE__ */ n.jsx(x, { handler: (i, t) => m(i, t), name: r })
  ] });
};
u.propTypes = {
  name: O.string.isRequired,
  optionsList: S.isRequired
};
const M = F(u);
export {
  M
};
//# sourceMappingURL=MultiSelectFilter-B4v2ovYm.mjs.map
