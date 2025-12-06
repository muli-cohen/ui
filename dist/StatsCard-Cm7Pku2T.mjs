import { j as e, P as s, c, bu as m, bv as p, cq as u } from "./main-CTYpZ6Nf.mjs";
import * as l from "react";
const h = "No data to show", C = ({ message: t }) => /* @__PURE__ */ e.jsx("div", { "data-testid": "no-data", className: "no-data-block", children: /* @__PURE__ */ e.jsx("h3", { children: t || h }) });
C.propTypes = {
  message: s.string
};
const N = (t) => /* @__PURE__ */ l.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ l.createElement("rect", { x: 3, y: 12, width: 11, height: 2, transform: "rotate(-45 3 12)", fill: "#7F7989" }), /* @__PURE__ */ l.createElement("rect", { x: 4.41431, y: 10.6, width: 11, height: 2, transform: "rotate(45 4.41431 10.6)", fill: "#7F7989" }), /* @__PURE__ */ l.createElement("rect", { x: 4, y: 11, width: 15, height: 2, fill: "#7F7989" })), a = ({ children: t, className: r = "", onClick: n = () => {
} }) => {
  const i = c("stats-card", r);
  return /* @__PURE__ */ e.jsx("div", { className: i, onClick: n, children: t });
};
a.Header = ({ children: t = null, icon: r = null, iconClass: n = "", title: i = "", tip: d = "" }) => {
  const o = c(
    "stats-card__title data-ellipsis",
    r && "stats-card__title_with-icon"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "stats-card__row", children: [
    /* @__PURE__ */ e.jsxs("div", { className: o, children: [
      r && /* @__PURE__ */ e.jsx("i", { className: n, children: r }),
      /* @__PURE__ */ e.jsxs("div", { className: "stats-card__title-wrapper data-ellipsis", children: [
        /* @__PURE__ */ e.jsx(m, { template: /* @__PURE__ */ e.jsx(p, { text: i }), children: i }),
        d && /* @__PURE__ */ e.jsx(u, { className: "stats-card__title-tip", text: d })
      ] })
    ] }),
    t
  ] });
};
a.Header.displayName = "StatsCard.Header";
a.Row = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "stats-card__row", children: t });
a.Row.displayName = "StatsCard.Row";
a.Col = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "stats-card__col", children: t });
a.Col.displayName = "StatsCard.Col";
a.MainCounter = ({ children: t, className: r = "", id: n = "", onClick: i = () => {
} }) => {
  const d = c("stats__counter-main", r);
  return /* @__PURE__ */ e.jsx("div", { className: d, "data-testid": n, onClick: i, children: /* @__PURE__ */ e.jsx("div", { className: "stats__counter", children: t }) });
};
a.MainCounter.displayName = "StatsCard.MainCounter";
a.SecondaryCounter = ({ children: t, className: r }) => {
  const n = c("stats__counter-secondary", r);
  return /* @__PURE__ */ e.jsx("div", { className: n, children: /* @__PURE__ */ e.jsx("div", { className: "stats__counter", children: t }) });
};
a.SecondaryCounter.displayName = "StatsCard.SecondaryCounter";
a.propTypes = {
  children: s.node.isRequired,
  className: s.string,
  onClick: s.func
};
a.Header.propTypes = {
  children: s.node,
  icon: s.element,
  iconClass: s.string,
  tip: s.string,
  title: s.string
};
a.Row.propTypes = {
  children: s.node
};
a.Col.propTypes = {
  children: s.node
};
a.MainCounter.propTypes = {
  children: s.node.isRequired,
  className: s.string,
  id: s.string.isRequired,
  onClick: s.func
};
a.SecondaryCounter.propTypes = {
  children: s.node.isRequired,
  className: s.string
};
export {
  C as N,
  N as S,
  a
};
//# sourceMappingURL=StatsCard-Cm7Pku2T.mjs.map
