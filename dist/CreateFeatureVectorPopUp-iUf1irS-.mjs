import { bb as x, bJ as h, bK as g, bL as j, j as e, bM as v, bN as f, b0 as d, bO as r, bu as _, e as C, b2 as R, bv as N, bP as F, bQ as T, bR as w, bS as y, bV as m, at as E, p as S, bW as L, dk as k, P as s } from "./main-CTYpZ6Nf.mjs";
import P, { useState as q } from "react";
import { useSelector as U } from "react-redux";
const V = ({
  closePopUp: n,
  createFeatureVector: p,
  featureVectorData: t = {
    name: "",
    tag: "",
    description: "",
    labels: {}
  }
}) => {
  const [b, l] = q(!1), i = U((a) => a.appStore.frontendSpec), o = {
    name: t.name,
    tag: t.tag,
    description: t.description,
    labels: x(t.labels, i.internal_labels)
  }, c = (a) => {
    p({
      name: a.name,
      tag: a.tag,
      description: a.description,
      labels: k(a.labels)
    });
  }, u = P.useRef(
    h({
      initialValues: o,
      mutators: { ...j, setFieldState: g },
      onSubmit: c
    })
  );
  return /* @__PURE__ */ e.jsx(
    v,
    {
      className: "new-feature-vector__pop-up form",
      headerText: `${t.name ? "Edit" : "Create"} feature vector`,
      closePopUp: n,
      children: /* @__PURE__ */ e.jsx(f, { form: u.current, onSubmit: c, children: (a) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ e.jsx("div", { className: "form-col-2", children: /* @__PURE__ */ e.jsx(
            d,
            {
              async: !0,
              label: "Vector name",
              name: "name",
              required: !0,
              validationRules: r("feature.vector.name")
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "form-col-1", children: /* @__PURE__ */ e.jsxs(
            _,
            {
              hidden: b || C.isEmpty(a.values.tag),
              template: /* @__PURE__ */ e.jsx(N, { text: a.values.tag }),
              children: [
                /* @__PURE__ */ e.jsx(
                  d,
                  {
                    label: "Tag",
                    name: "tag",
                    validationRules: r("common.tag"),
                    onBlur: () => l(!1),
                    placeholder: "latest"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  R,
                  {
                    handler: () => {
                      l(!0);
                    },
                    name: "tag"
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "form-row new-feature-vector__description-row", children: /* @__PURE__ */ e.jsx(F, { name: "description", label: "Description", maxLength: 500 }) }),
        /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
          T,
          {
            chipOptions: w("labels"),
            formState: a,
            initialValues: o,
            isEditable: !0,
            label: "Labels",
            name: "labels",
            shortChips: !0,
            visibleChipsMaxLength: "2",
            validationRules: {
              key: r(
                "common.tag",
                y(i.internal_labels)
              ),
              value: r("common.tag")
            }
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { className: "pop-up-dialog__footer-container", children: [
          /* @__PURE__ */ e.jsx(
            m,
            {
              type: "button",
              variant: E,
              label: "Cancel",
              className: "pop-up-dialog__btn_cancel",
              onClick: n
            }
          ),
          /* @__PURE__ */ e.jsx(
            m,
            {
              disabled: L(a),
              variant: S,
              label: "Create",
              onClick: a.handleSubmit
            }
          )
        ] })
      ] }) })
    }
  );
};
V.propTypes = {
  closePopUp: s.func.isRequired,
  createFeatureVector: s.func.isRequired,
  featureVectorData: s.shape({
    name: s.string,
    tag: s.string,
    description: s.string,
    labels: s.object
  })
};
export {
  V as C
};
//# sourceMappingURL=CreateFeatureVectorPopUp-iUf1irS-.mjs.map
