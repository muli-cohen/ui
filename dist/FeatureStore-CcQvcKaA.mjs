import { t as p, j as t, gb as u, i as f, K as x } from "./main-CTYpZ6Nf.mjs";
import j, { useState as n, useCallback as h } from "react";
import { Outlet as b } from "react-router-dom";
import { useDispatch as g, useSelector as C } from "react-redux";
import { B as v } from "./Breadcrumbs-DDXz9SNg.mjs";
const S = j.createContext({}), _ = () => {
  const s = g(), [o, l] = n(!1), [c, i] = n(!1), [e, m] = n(null), a = C((r) => r.featureStore), d = h(
    (r) => s(p(r)),
    [s]
  );
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("div", { className: "content-wrapper", children: [
      /* @__PURE__ */ t.jsx("div", { className: "content__header", children: /* @__PURE__ */ t.jsx(v, {}) }),
      /* @__PURE__ */ t.jsx("div", { className: "content", children: /* @__PURE__ */ t.jsxs("div", { className: u, children: [
        /* @__PURE__ */ t.jsx(
          S.Provider,
          {
            value: {
              setConfirmData: m,
              createVectorPopUpIsOpen: c,
              featureSetsPanelIsOpen: o,
              setFeatureSetsPanelIsOpen: l,
              setCreateVectorPopUpIsOpen: i,
              toggleConvertedYaml: d
            },
            children: /* @__PURE__ */ t.jsx(b, {})
          }
        ),
        (a.loading || a.entities.loading || a.features.loading) && /* @__PURE__ */ t.jsx(f, {})
      ] }) })
    ] }),
    e && /* @__PURE__ */ t.jsx(
      x,
      {
        cancelButton: {
          handler: e.rejectHandler,
          label: e.btnCancelLabel,
          variant: e.btnCancelVariant
        },
        closePopUp: e.rejectHandler,
        confirmButton: {
          handler: () => e.confirmHandler(e.item),
          label: e.btnConfirmLabel,
          variant: e.btnConfirmVariant
        },
        header: e.header,
        isOpen: !!e,
        message: e.message
      }
    )
  ] });
};
export {
  S as FeatureStoreContext,
  _ as default
};
//# sourceMappingURL=FeatureStore-CcQvcKaA.mjs.map
