import { j as e, i as t } from "./main-CTYpZ6Nf.mjs";
import "react";
import { Outlet as o } from "react-router-dom";
import { useSelector as a } from "react-redux";
import { B as i } from "./Breadcrumbs-DDXz9SNg.mjs";
import { P as c } from "./PreviewModal-CXJei3eh.mjs";
import { M as n } from "./ModelsPage.context-BAALYiY9.mjs";
const m = () => {
  const r = a((s) => s.artifactsStore);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "content-wrapper", children: [
      /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(i, {}) }),
      /* @__PURE__ */ e.jsxs("div", { className: "content", children: [
        r.loading && /* @__PURE__ */ e.jsx(t, {}),
        /* @__PURE__ */ e.jsx("div", { className: "table-container", children: /* @__PURE__ */ e.jsx(o, {}) })
      ] })
    ] }),
    r?.preview?.isPreview && /* @__PURE__ */ e.jsx(c, { artifact: r?.preview?.selectedItem })
  ] });
}, P = () => /* @__PURE__ */ e.jsx(n, { children: /* @__PURE__ */ e.jsx(m, {}) });
export {
  P as default
};
//# sourceMappingURL=ModelsPage-BtZ45Xs9.mjs.map
