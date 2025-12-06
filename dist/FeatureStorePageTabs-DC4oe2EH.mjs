import { aY as $, j as u, b0 as h, b1 as E, b2 as p, eu as j, P as b, e as V, dk as x, g5 as L, aB as R, g6 as v, cg as D, V as C, g7 as B, g8 as P, er as d, eK as T, g9 as O, z as U, fN as S, ex as M, ga as f } from "./main-CTYpZ6Nf.mjs";
import "react";
import { F as y } from "./FormTagFilter-DiHrdYam.mjs";
import { useLocation as G } from "react-router-dom";
import { C as I } from "./Input-7Hc9IEQ_.mjs";
const w = ({ content: t }) => {
  const a = $(), s = (r) => {
    a.change(E, r || "");
  };
  return /* @__PURE__ */ u.jsxs("div", { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ u.jsx(
        h,
        {
          label: "Labels",
          name: E,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ u.jsx(p, { name: E, handler: s })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "form-row", children: /* @__PURE__ */ u.jsx(y, { content: t, label: "Version tag", name: j }) })
  ] });
};
w.propTypes = {
  content: b.arrayOf(b.object).isRequired
};
const W = "Create set", J = "Create vector", Q = "Add to feature vector", Y = [
  { id: T, label: "Feature sets" },
  { id: S, label: "Features" },
  { id: d, label: "Feature vectors" }
], _ = (t) => {
  const { project: a, featureSet: s, feature: r, alias: i, tag: l } = t;
  return `${a ? `${a}/` : ""}${s ? `${s}${l ? `:${l}` : ""}.` : ""}${r}${i === "" ? "" : ` as ${i}`}`;
}, k = (t, a, s, r, i, l, A, F, c) => {
  const o = {
    ...l.ui.originalContent
  }, n = V.cloneDeep(t.data), m = ["labels"];
  return n.features && (n.features.currentFieldValue = t.data.features.currentFieldValue.map(
    (e) => _(e)
  ), n.label_feature && (n.label_feature.currentFieldValue = _(
    n.label_feature.currentFieldValue
  ))), Object.keys(n).forEach((e) => {
    m.includes(e) ? o.metadata[e] = n[e].currentFieldValue : o.spec[e] = n[e].currentFieldValue;
  }), o.metadata.labels && n.labels && (o.metadata.labels = x(o.metadata.labels)), c(
    L({
      projectName: s,
      featureData: r,
      tag: l.tag || R,
      data: o,
      pageTab: i
    })
  ).unwrap().then((e) => a(F).then(() => (c(
    A({
      status: e.status,
      id: Math.random(),
      message: "Updated successfully"
    })
  ), e))).then((e) => (l.tag || c(
    A({
      status: e.status,
      id: Math.random(),
      message: `${v(l.uid)} updated to latest`
    })
  ), e)).catch((e) => {
    const g = e.response?.status === D ? "Permission denied" : "Failed to update";
    C(
      c,
      e,
      "",
      g,
      () => k(
        t,
        a,
        s,
        r,
        i,
        l,
        A,
        F,
        c
      )
    );
  });
}, X = (t, a, s, r) => {
  if (a.tab === B && !s.schema && !s.entities || a.tab === P && ![d, T].includes(r) && !s.extra_data || a.tab === O && ![d, T].includes(r) && !s.stats)
    return t(
      `/projects/${a.projectName}/feature-store/${r}/${a.name}${a.tag ? `/${a.tag}` : ""}/${U}`
    );
}, Z = () => {
  const t = G();
  return /* @__PURE__ */ u.jsx(
    I,
    {
      activeTab: t.pathname.includes(`${f}/${T}`) ? T : t.pathname.includes(`${f}/${d}`) ? d : S,
      screen: M,
      tabs: Y
    }
  );
};
export {
  Z as F,
  w as a,
  X as b,
  W as c,
  Q as d,
  J as e,
  k as h
};
//# sourceMappingURL=FeatureStorePageTabs-DC4oe2EH.mjs.map
