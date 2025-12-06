import { bc as t, bE as e, bt as s, j as o, be as n } from "./main-CTYpZ6Nf.mjs";
import { useLocation as i } from "react-router-dom";
import { C as l } from "./Input-7Hc9IEQ_.mjs";
const r = [
  { id: t, label: "Models" },
  { id: e, label: "Model endpoints" },
  { id: s, label: "Real-time pipelines" }
], m = () => {
  const a = i();
  return /* @__PURE__ */ o.jsx(
    l,
    {
      activeTab: a.pathname.includes(s) ? s : a.pathname.includes(e) ? e : t,
      screen: n,
      tabs: r
    }
  );
};
export {
  m as M
};
//# sourceMappingURL=ModelsPageTabs-B77C5auf.mjs.map
