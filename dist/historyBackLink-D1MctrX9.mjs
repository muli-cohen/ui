import { j as s, y as n, iH as a, bu as l, bv as c, P as i } from "./main-CTYpZ6Nf.mjs";
import "react";
import { Link as k } from "react-router-dom";
import { S as m } from "./StatsCard-Cm7Pku2T.mjs";
const x = ({ itemName: t, link: e, customText: o = "", customIcon: r = null }) => /* @__PURE__ */ s.jsxs("div", { className: "history-back-link", children: [
  /* @__PURE__ */ s.jsx(k, { to: e, className: "history-back-link__icon", children: /* @__PURE__ */ s.jsx(n, { id: "history-back-link-btn", tooltipText: "Back", children: /* @__PURE__ */ s.jsx(m, {}) }) }),
  /* @__PURE__ */ s.jsxs("div", { className: "history-back-link__title", children: [
    r || /* @__PURE__ */ s.jsx(a, {}),
    /* @__PURE__ */ s.jsx("div", { className: "history-back-link__title-version", "data-testid": "version-history", children: `${o || "Version history"}: ` }),
    /* @__PURE__ */ s.jsx(l, { template: /* @__PURE__ */ s.jsx(c, { text: t }), children: t })
  ] })
] });
x.propTypes = {
  customIcon: i.element,
  customText: i.string,
  itemName: i.string.isRequired,
  link: i.string.isRequired
};
export {
  x as H
};
//# sourceMappingURL=historyBackLink-D1MctrX9.mjs.map
