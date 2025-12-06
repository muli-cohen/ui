import { j as e, y as p, cq as c, P as s } from "./main-CTYpZ6Nf.mjs";
import "react";
import { Link as d } from "react-router-dom";
import { S as n } from "./StatsCard-Cm7Pku2T.mjs";
const l = ({ title: i, description: t = "", backLink: r = "", tip: a = "" }) => /* @__PURE__ */ e.jsxs("div", { className: "page-header", children: [
  r && /* @__PURE__ */ e.jsx("div", { className: "page-header__back-btn", children: /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsx(d, { to: r, className: "page-header__back-btn", children: /* @__PURE__ */ e.jsx(n, {}) }) }) }),
  /* @__PURE__ */ e.jsxs("div", { className: "page-header__title-wrapper", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "page-header__title", children: [
      i,
      a && /* @__PURE__ */ e.jsx(c, { className: "tooltip-wrapper", text: a, withExclamationMark: !0 })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "page-header__description", children: t })
  ] })
] });
l.propTypes = {
  backLink: s.string,
  description: s.string,
  title: s.string.isRequired,
  tip: s.string
};
export {
  l as P
};
//# sourceMappingURL=PageHeader-ClcGdvsO.mjs.map
