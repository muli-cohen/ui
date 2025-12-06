import { c as d, j as l, P as e } from "./main-CTYpZ6Nf.mjs";
import * as c from "react";
import m from "react";
const x = (s) => /* @__PURE__ */ c.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...s }, /* @__PURE__ */ c.createElement("path", { d: "M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z", fill: "#7F7989" })), C = (s) => /* @__PURE__ */ c.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...s }, /* @__PURE__ */ c.createElement("path", { d: "M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z", fill: "#7F7989" })), a = ({
  children: s = null,
  className: n = "",
  disabled: o = !1,
  item: t,
  onChange: i,
  selectedId: r = ""
}) => {
  const h = d("checkbox", n, o && "checkbox_disabled");
  return /* @__PURE__ */ l.jsxs("span", { className: h, onClick: () => !o && i(t.id), children: [
    t.id === r ? /* @__PURE__ */ l.jsx(C, { className: "checked" }) : /* @__PURE__ */ l.jsx(x, { className: "unchecked" }),
    s || t.label
  ] });
};
a.propTypes = {
  children: e.node,
  className: e.string,
  disabled: e.bool,
  item: e.shape({
    id: e.string.isRequired,
    label: e.string
  }).isRequired,
  onChange: e.func.isRequired,
  selectedId: e.string
};
const k = m.memo(a);
export {
  k as C
};
//# sourceMappingURL=CheckBox-DBJrW14Y.mjs.map
