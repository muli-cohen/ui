import { c as _, j as e, bu as m, bv as h, a3 as A, P as n, a1 as y, cq as E, bV as N, at as q, p as U, fS as k, e as V, fT as F, ey as T, fU as I, fV as B, ez as D, fW as M, af as O, cg as G, V as W, eA as Z, fX as $, fY as Y, ev as z, b1 as H, an as Q, eu as X } from "./main-CTYpZ6Nf.mjs";
import * as g from "react";
import { useState as J, useEffect as w } from "react";
import { useSelector as K, useDispatch as S } from "react-redux";
import { createPortal as ee } from "react-dom";
import { A as L } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { C as ae } from "./CreateFeatureVectorPopUp-iUf1irS-.mjs";
import { a0 as se } from "./Table-DB12oa-o.mjs";
import { S as R } from "./search-CsL7YQlT.mjs";
const te = (i) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ g.createElement("path", { d: "M12 2C10.6868 2 9.38642 2.25866 8.17317 2.76121C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05356 17.1957 4.92893 19.0711C5.85751 19.9997 6.9599 20.7363 8.17316 21.2388C9.38641 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.84 21.79 9.69001 21.39 8.61001L19.79 10.21C19.93 10.8 20 11.4 20 12C20 14.1217 19.1571 16.1566 17.6568 17.6569C16.1566 19.1572 14.1217 20 12 20C9.87826 20 7.84343 19.1571 6.34314 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34314 6.34315C7.84344 4.84286 9.87827 4 12 4C12.6 4 13.2 4.07 13.79 4.21L15.4 2.6C14.31 2.21 13.16 2 12 2ZM19 2.00001L15 6L15 7.5L12.45 10.05C12.3 10 12.15 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.85 14 11.7 13.95 11.55L16.5 9.00001L18 9.00001L22 5.00001L19 5.00001L19 2.00001ZM12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75735 16.2426C8.88257 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12L16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92171 15.5786 9.17157 14.8284C8.42142 14.0783 8 13.0609 8 12C8 10.9391 8.42142 9.92172 9.17157 9.17158C9.92172 8.42143 10.9391 8 12 8L12 6Z", fill: "#7F7989" }), /* @__PURE__ */ g.createElement("rect", { x: 2, y: 3.41406, width: 2, height: 26, transform: "rotate(-45 2 3.41406)", fill: "#7F7989" })), v = ({
  deleteFeature: i,
  feature: t,
  isEditEnabled: c,
  labelFeature: l,
  toggleLabelFeature: o
}) => {
  const s = _(
    "feature-row",
    (l === t.feature || l === t.originalTemplate) && "selected-feature",
    l && "selected-feature-exists"
  ), a = _(!c && "readonly"), f = _("label-actions", c && "with-hover"), u = /* @__PURE__ */ e.jsxs("span", { children: [
    /* @__PURE__ */ e.jsx("span", { children: t.featureSet }),
    t.tag && /* @__PURE__ */ e.jsxs("span", { children: [
      " : ",
      t.tag
    ] }),
    /* @__PURE__ */ e.jsxs("span", { children: [
      " #",
      t.feature
    ] }),
    t.alias && /* @__PURE__ */ e.jsxs("span", { children: [
      /* @__PURE__ */ e.jsx("span", { children: " as " }),
      t.alias
    ] })
  ] });
  return /* @__PURE__ */ e.jsxs("div", { className: s, children: [
    /* @__PURE__ */ e.jsx("div", { className: "feature-row__feature-template data-ellipsis", children: /* @__PURE__ */ e.jsx(
      m,
      {
        className: "data-ellipsis",
        template: /* @__PURE__ */ e.jsx(h, { text: u }),
        children: u
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "feature-row__actions", children: [
      /* @__PURE__ */ e.jsxs("div", { className: f, children: [
        /* @__PURE__ */ e.jsx(
          m,
          {
            hidden: l.length > 0 || !c,
            template: /* @__PURE__ */ e.jsx(h, { text: "Set as label" }),
            children: /* @__PURE__ */ e.jsx(
              se,
              {
                className: `action set-as-label ${a}`,
                onClick: () => c && o(t.originalTemplate)
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(m, { template: /* @__PURE__ */ e.jsx(h, { text: "Unset as label" }), children: /* @__PURE__ */ e.jsx(
          te,
          {
            className: `action unset-as-label ${a}`,
            onClick: () => c && o(l)
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx(
        m,
        {
          hidden: !c,
          template: /* @__PURE__ */ e.jsx(h, { text: "Remove from vector" }),
          children: /* @__PURE__ */ e.jsx(
            A,
            {
              className: `action remove ${a}`,
              onClick: () => {
                c && ((l === t.feature || l === t.originalTemplate) && o(l), i(t.originalTemplate));
              }
            }
          )
        }
      )
    ] })
  ] }, t.feature);
};
v.propTypes = {
  deleteFeature: n.func.isRequired,
  feature: n.object.isRequired,
  isEditEnabled: n.bool.isRequired,
  labelFeature: n.string.isRequired,
  toggleLabelFeature: n.func.isRequired
};
function b({
  addFeatures: i,
  createFeatureVector: t,
  deleteFeature: c,
  handleCancel: l,
  isCreateFeaturePopUpOpen: o,
  setIsCreateFeaturePopUpOpen: s,
  tableStore: a,
  toggleLabelFeature: f
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: "features-panel", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "features-panel__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "features-panel__header", children: [
        /* @__PURE__ */ e.jsx("div", { className: "features-panel__header-project", children: a.features.featureVector.metadata.project }),
        /* @__PURE__ */ e.jsxs("div", { className: "features-panel__header-vector", children: [
          /* @__PURE__ */ e.jsx(
            m,
            {
              className: "features-panel__header-vector-name",
              template: /* @__PURE__ */ e.jsx(h, { text: a.features.featureVector.metadata.name }),
              children: a.features.featureVector.metadata.name
            }
          ),
          /* @__PURE__ */ e.jsx(
            m,
            {
              className: "features-panel__header-vector-tag",
              template: /* @__PURE__ */ e.jsx(h, { text: a.features.featureVector.metadata.tag }),
              children: a.features.featureVector.metadata.tag
            }
          ),
          a.features.isNewFeatureVector && /* @__PURE__ */ e.jsxs("div", { className: "features-panel__header-vector-actions actions", children: [
            /* @__PURE__ */ e.jsx("button", { onClick: () => s(!0), children: /* @__PURE__ */ e.jsx(y, {}) }),
            o && ee(
              /* @__PURE__ */ e.jsx(
                ae,
                {
                  closePopUp: () => {
                    s(!1);
                  },
                  createFeatureVector: t,
                  featureVectorData: {
                    name: a.features.featureVector.metadata.name,
                    tag: a.features.featureVector.metadata.tag,
                    description: a.features.featureVector.spec.description,
                    labels: a.features.featureVector.metadata.labels
                  }
                }
              ),
              document.getElementById("root")
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "features-panel__header-vector-tooltip", children: /* @__PURE__ */ e.jsx(E, { text: "Add features from the list on the left to this feature vector" }) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "features-panel__divider" }),
      /* @__PURE__ */ e.jsxs(
        L,
        {
          accordionClassName: "features-panel__expand-item",
          icon: /* @__PURE__ */ e.jsx(R, {}),
          iconClassName: "features-panel__expand-icon",
          openByDefault: !0,
          children: [
            /* @__PURE__ */ e.jsx("div", { className: "features-panel__expand-title", children: "Selected project" }),
            /* @__PURE__ */ e.jsx("div", { className: "features-panel__expand-content", children: a.features.groupedFeatures[a.features.currentProject]?.length > 0 ? a.features.groupedFeatures[a.features.currentProject].map(
              (u) => /* @__PURE__ */ e.jsx(
                v,
                {
                  labelFeature: a.features.labelFeature ? a.features.labelFeature : "",
                  isEditEnabled: !0,
                  feature: u,
                  toggleLabelFeature: f,
                  deleteFeature: (x) => {
                    c(x, u.project);
                  }
                },
                u.originalTemplate
              )
            ) : /* @__PURE__ */ e.jsx("div", { className: "features-panel__empty-content", children: "Add features from the list on the left to this feature vector" }) })
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "features-panel__divider" }),
      /* @__PURE__ */ e.jsx("div", { className: "features-panel__sub-title", children: "Features by projects:" }),
      Object.entries(a.features.groupedFeatures).map(([u, x]) => u !== a.features.currentProject && /* @__PURE__ */ e.jsxs(
        L,
        {
          accordionClassName: "features-panel__expand-item",
          icon: /* @__PURE__ */ e.jsx(R, {}),
          iconClassName: "features-panel__expand-icon",
          children: [
            /* @__PURE__ */ e.jsx("div", { className: "features-panel__expand-title", children: u }),
            /* @__PURE__ */ e.jsx("div", { className: "features-panel__expand-content", children: x.map((j) => /* @__PURE__ */ e.jsx(
              v,
              {
                labelFeature: a.features.labelFeature ? a.features.labelFeature : "",
                isEditEnabled: !0,
                feature: j,
                toggleLabelFeature: f,
                deleteFeature: (r) => c(r, j.project)
              },
              j.originalTemplate
            )) })
          ]
        },
        u
      ))
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "features-panel__buttons", children: [
      /* @__PURE__ */ e.jsx(N, { label: "Cancel", variant: q, onClick: l }),
      /* @__PURE__ */ e.jsx(N, { variant: U, label: "Add", onClick: i })
    ] })
  ] });
}
b.propTypes = {
  addFeatures: n.func.isRequired,
  createFeatureVector: n.func.isRequired,
  deleteFeature: n.func.isRequired,
  handleCancel: n.func.isRequired,
  isCreateFeaturePopUpOpen: n.bool.isRequired,
  setIsCreateFeaturePopUpOpen: n.func.isRequired,
  tableStore: n.object.isRequired,
  toggleLabelFeature: n.func.isRequired
};
const re = ({ projectName: i = "", handleCancel: t = null, onSubmit: c = null }) => {
  const [l, o] = J(!1), s = K((r) => r.tableStore), a = S();
  w(() => {
    s.features.isNewFeatureVector && a(
      k(i || s.features.featureVector.metadata.project)
    );
  }, [
    a,
    i,
    s.features.featureVector.metadata.project,
    s.features.isNewFeatureVector
  ]), w(() => {
    !s.features.isNewFeatureVector && V.isNil(s.features.labelFeature) && a(F(s.features.featureVector.spec.label_feature ?? ""));
  }, [
    a,
    s.features.featureVector.spec.label_feature,
    s.features.isNewFeatureVector,
    s.features.labelFeature
  ]);
  const f = () => {
    let r = V.cloneDeep(s.features.featureVector), p = null;
    r.spec.features = Object.keys(s.features.groupedFeatures).reduce(
      (d, C) => [
        ...d,
        ...s.features.groupedFeatures[C].map((P) => P.originalTemplate)
      ],
      []
    ), r.spec.label_feature = s.features.labelFeature ? s.features.labelFeature : "", c ? c(r) : (s.features.isNewFeatureVector ? p = a(D({ data: r })) : p = a(M({ data: r })), p.unwrap().then((d) => {
      a(
        O({
          status: d.status,
          id: Math.random(),
          message: "Features successfully added"
        })
      );
    }).catch((d) => {
      const C = s.features.isNewFeatureVector && d.response.status === G ? "You do not have permission to create a feature vector" : s.features.isNewFeatureVector ? "Feature vector creation failed" : "Failed to add features";
      W(a, d, "", C, () => f());
    }), a(T(!1)));
  }, u = (r, p) => {
    const d = [...s.features.groupedFeatures[p]].filter(
      (C) => C.originalTemplate !== r
    );
    a(I({ groupedFeatures: d, project: p })), r === s.features.labelFeature && a(F(""));
  }, x = (r) => {
    o(!1), a(
      B({
        metadata: {
          name: r.name,
          tag: r.tag,
          labels: r.labels
        },
        spec: {
          description: r.description
        }
      })
    );
  }, j = (r) => {
    a(F(s.features.labelFeature?.length > 0 ? "" : r));
  };
  return /* @__PURE__ */ e.jsx(
    b,
    {
      addFeatures: f,
      createFeatureVector: x,
      deleteFeature: u,
      handleCancel: () => {
        t ? t() : a(T(!1));
      },
      isCreateFeaturePopUpOpen: l,
      setIsCreateFeaturePopUpOpen: o,
      tableStore: s,
      toggleLabelFeature: j
    }
  );
};
re.propTypes = {
  handleCancel: n.func,
  onSubmit: n.func,
  projectName: n.string
};
const pe = {
  [X]: { label: "Version Tag:", initialValue: z, isModal: !0 },
  [Q]: { label: "Name:", initialValue: "" },
  [H]: { label: "Labels:", initialValue: "", isModal: !0 }
}, me = (i, t, c, l, o, s) => (i?.length > 1e4 || c.current?.signal?.reason === Z ? ($(l), t([])) : i?.length ? (t(i), l("")) : o && s && Y(o, "Failed to fetch features", s, l), i || []);
export {
  re as F,
  pe as f,
  me as h
};
//# sourceMappingURL=features.util-DowT7bP_.mjs.map
