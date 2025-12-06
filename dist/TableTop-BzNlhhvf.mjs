import { j as s, y as l, bu as n, bv as o, P as r } from "./main-CTYpZ6Nf.mjs";
import "react";
import { Link as c } from "react-router-dom";
import { S as t } from "./StatsCard-Cm7Pku2T.mjs";
const p = ({ children: e = null, link: a, text: i = "" }) => /* @__PURE__ */ s.jsxs("div", { className: "table-top", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "link-back", children: [
    /* @__PURE__ */ s.jsx(c, { to: a, className: "link-back__icon", children: /* @__PURE__ */ s.jsx(l, { id: "back", tooltipText: "Back", children: /* @__PURE__ */ s.jsx(t, {}) }) }),
    i && /* @__PURE__ */ s.jsx("div", { className: "link-back__title", children: /* @__PURE__ */ s.jsx(n, { template: /* @__PURE__ */ s.jsx(o, { text: i }), children: i }) })
  ] }),
  e
] });
p.propTypes = {
  children: r.node,
  link: r.string.isRequired,
  text: r.string
};
export {
  p as T
};
//# sourceMappingURL=TableTop-BzNlhhvf.mjs.map
