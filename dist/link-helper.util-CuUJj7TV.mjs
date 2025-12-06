import { z as h, hb as r, V as $, hc as d, hd as p } from "./main-CTYpZ6Nf.mjs";
const u = (l, n, t, s) => {
  n.includes(l) || t([...s.pathname.split("/").slice(0, 4)].join("/"));
}, f = (l, n, t, s) => {
  n.length > 0 && t && !n.some((e) => e?.metadata?.name === t) && (l("/projects", { replace: !0 }), $(s, {}, "", "This project does not exist"));
}, g = (l, n, t) => {
  let s = window.location.pathname;
  n && s.startsWith("") && (s = s.slice(0));
  let e = s.split("/").splice(0, s.split("/").lastIndexOf(l) + 1);
  t && l === t && e[e.length - 1] === t && e.pop();
  const a = e.join("/") + r(window.location.search, [p]);
  return n ? a : d(a);
}, T = (l, n, t) => `/projects/${l.projectName}/${n.toLowerCase()}${l.pageTab ? `/${l.pageTab}` : t ? `/${t}` : ""}${window.location.search}`, j = (l, n, t, s, e, a, i, o, c) => `/projects/${l}/${n.toLowerCase()}${t ? `/${t}` : ""}${c ? `/${c}` : ""}/${s}${e ? `/${e}` : i ? `/${i}` : ""}${isNaN(parseInt(o)) ? "" : `/${o}`}/${a.toLowerCase()}${window.location.search}`, L = (l) => {
  let [n, t] = l.split("/"), s = t, e = null, a = null, i = null, o = null, c = null;
  return t.includes("@") ? ([s, e] = t.split("@"), i = `${s}@${e}`) : t.includes(":") && ([s, a] = t.split(":")), { project: n, name: s, hash: e, tag: a, nameWithHash: i, uid: c, nameWithUid: o };
}, D = (l, n, t, s) => {
  if (!n.find((e) => e.id === l && !e.hidden)) {
    const e = s.pathname.split("/");
    e[e.length - 1] = h;
    const a = e.join("/") + r(window.location.search, [p]);
    t(a, { replace: !0 });
  }
};
export {
  D as a,
  u as b,
  j as c,
  T as d,
  g,
  f as i,
  L as p
};
//# sourceMappingURL=link-helper.util-CuUJj7TV.mjs.map
