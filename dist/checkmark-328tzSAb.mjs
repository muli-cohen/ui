import * as s from "react";
const n = (t, l, c = !1, e = 0) => {
  const o = t?.current?.querySelector(`${l}`);
  o && (c ? t.current.scrollTo({ top: 0, left: 0, behavior: "smooth" }) : setTimeout(() => {
    r(t?.current, o);
  }, e));
}, r = (t, l) => {
  const c = t.getBoundingClientRect(), e = l.getBoundingClientRect(), o = t.scrollTop + e.top - c.top - t.clientHeight / 2 + e.height / 2;
  t.scrollTo({
    top: o,
    behavior: "smooth"
  });
}, i = (t) => /* @__PURE__ */ s.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ s.createElement("path", { d: "M9.18875 14.9387L6.06125 11.8113L5 12.8725L9.18875 17.0612L18.1888 8.06125L17.1275 7L9.18875 14.9387Z", fill: "#7F7989" }));
export {
  i as S,
  n as s
};
//# sourceMappingURL=checkmark-328tzSAb.mjs.map
