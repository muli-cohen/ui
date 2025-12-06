import { aR as u, at as p, bE as m, j as i, be as b, bF as g, e as c, a2 as f, bG as _, V as M, b1 as v, bA as E, t as h, P as L } from "./main-CTYpZ6Nf.mjs";
import P, { useContext as S, useCallback as l } from "react";
import { useDispatch as j, useSelector as x } from "react-redux";
import { useParams as A } from "react-router-dom";
import { S as T } from "./alerts-DUEhWDHw.mjs";
import { G as C } from "./Table-DB12oa-o.mjs";
const Y = {
  [E]: { label: "Mode:", initialValue: g, isModal: !0 },
  [v]: { label: "Labels:", initialValue: "", isModal: !0 }
}, F = (e) => [
  { label: "UID", id: "uid" },
  { label: "Model class", id: "model_class" },
  {
    label: e.includes("llm-prompts") ? "LLM Prompt artifact" : "Model artifact",
    id: "model_artifact"
  },
  { label: "Function URI", id: "function_uri" },
  { label: "Function Tag", id: "function_tag" },
  { label: "Feature set", id: "monitoring_feature_set_uri" },
  { label: "Sampling percentage", id: "sampling_percentage" },
  { label: "Last prediction", id: "last_prediction" },
  { label: "Error count", id: "error_count" }
], R = [
  {
    label: "overview",
    id: "overview"
  },
  {
    label: "features analysis",
    id: "features-analysis",
    tip: "The statistics are calculated on the last rolling hour of data"
  },
  {
    label: "metrics",
    id: "metrics"
  },
  {
    label: "alerts",
    id: "alerts",
    icon: /* @__PURE__ */ i.jsx(T, {})
  }
], B = (e, t, a) => ({
  page: b,
  hidePageActionMenu: !0,
  details: {
    menu: R,
    infoHeaders: F(e?.spec?.model_path || ""),
    type: m,
    actionButton: {
      label: "Resource monitoring",
      tooltip: t ? "" : "Grafana service unavailable",
      variant: p,
      disabled: !t,
      onClick: () => a(e)
    },
    additionalHeaderInfo: u(e?.metadata?.created, "N/A")
  }
}), H = (e, t, a, o, n) => [
  [
    {
      label: "Monitoring",
      icon: /* @__PURE__ */ i.jsx(C, {}),
      tooltip: e ? "" : "Grafana service unavailable",
      disabled: !e,
      onClick: t,
      hidden: !c.isEmpty(o)
    },
    {
      label: "View YAML",
      icon: /* @__PURE__ */ i.jsx(f, {}),
      onClick: (s) => y(n, o, s).then(
        a
      )
    }
  ]
], I = (e, t, a) => {
  let o = e.replace("{project}", a).replace("{model_endpoint}", t.metadata?.uid);
  window.open(o, "_blank");
}, y = (e, t, a) => c.isEmpty(t) ? e(
  _({
    project: a.metadata.project,
    name: a.name,
    uid: a.metadata.uid
  })
).unwrap().catch((o) => {
  M(e, o, "", "Failed to retrieve model endpoint data");
}) : Promise.resolve(t), d = P.createContext({}), w = ({ children: e }) => {
  const t = j(), a = x((r) => r.appStore.frontendSpec), o = A(), n = l(
    (r) => t(h(r)),
    [t]
  ), s = l(
    (r) => {
      I(a.model_monitoring_dashboard_url, r, o.projectName);
    },
    [a.model_monitoring_dashboard_url, o.projectName]
  );
  return /* @__PURE__ */ i.jsx(
    d.Provider,
    {
      value: {
        handleMonitoring: s,
        toggleConvertedYaml: n,
        frontendSpec: a
      },
      children: e
    }
  );
};
w.propTypes = {
  children: L.node.isRequired
};
const U = () => S(d);
export {
  w as M,
  B as a,
  y as c,
  Y as f,
  H as g,
  U as u
};
//# sourceMappingURL=ModelsPage.context-BAALYiY9.mjs.map
