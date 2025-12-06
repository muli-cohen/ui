import { bJ as N, bK as k, bL as v, j as a, bN as y, i as C, dS as T, dT as L, b0 as f, bO as i, bP as P, dR as w, bQ as A, bR as E, dk as F, cg as S, at as U, p as q, bW as I, bV as O, dU as D, af as V, P as o } from "./main-CTYpZ6Nf.mjs";
import H, { useState as $, createElement as z } from "react";
import { useDispatch as B } from "react-redux";
import { useLocation as G } from "react-router-dom";
import { P as J, U as K, V as Q } from "./Table-DB12oa-o.mjs";
import { u as W } from "./clock-BFaispYx.mjs";
function Y({ actions: c = null, isOpen: g, onResolve: b, params: r, refresh: j }) {
  const [R, d] = $(!1), m = {
    metadata: {
      description: void 0,
      labels: [],
      key: void 0
    },
    spec: {
      target_path: {
        fieldInfo: {
          pathType: ""
        },
        path: ""
      }
    }
  }, p = H.useRef(
    N({
      initialValues: m,
      mutators: { ...v, setFieldState: k },
      onSubmit: () => {
      }
    })
  ), x = G(), { handleCloseModal: l, resolveModal: u } = W(b, p.current), h = B(), _ = (e) => {
    const s = {
      kind: "model",
      metadata: {
        ...e.metadata,
        labels: F(e.metadata.labels),
        project: r.projectName,
        tree: K()
      },
      spec: {
        db_key: e.metadata.key,
        producer: {
          kind: "api",
          name: "UI",
          uri: window.location.host
        },
        target_path: e.spec.target_path.path
      },
      status: {}
    };
    if (e.spec.target_path?.path?.includes("/")) {
      const t = e.spec.target_path.path.split(/([^/]*)$/);
      s.spec.target_path = t[0], s.spec.model_file = t[1];
    }
    const n = () => D.registerArtifact(r.projectName, s).then((t) => {
      u(), j(), h(
        V({
          status: t.status,
          id: Math.random(),
          message: "Model initiated successfully"
        })
      );
    });
    return Q({
      tag: e.metadata.tag ?? "latest",
      artifact: s,
      projectName: r.projectName,
      dispatch: h,
      actionCallback: n,
      getCustomErrorMsg: (t) => t?.response?.status === S ? "You do not have permission to create a new resource" : "Model failed to initiate",
      onErrorCallback: u,
      showLoader: () => d(!0),
      hideLoader: () => d(!1)
    });
  }, M = (e) => (c ? c(e, l) : [
    {
      label: "Cancel",
      onClick: () => l(),
      variant: U
    },
    {
      disabled: I(e),
      label: "Register",
      onClick: e.handleSubmit,
      variant: q
    }
  ]).map((n, t) => /* @__PURE__ */ z(O, { ...n, key: t }));
  return /* @__PURE__ */ a.jsx(y, { form: p.current, onSubmit: _, children: (e) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    R && /* @__PURE__ */ a.jsx(C, {}),
    /* @__PURE__ */ a.jsxs(
      T,
      {
        actions: M(e),
        className: "register-model form",
        location: x,
        onClose: l,
        show: g,
        size: L,
        title: "Register model",
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ a.jsx("div", { className: "form-col-2", children: /* @__PURE__ */ a.jsx(
              f,
              {
                async: !0,
                label: "Name",
                name: "metadata.key",
                required: !0,
                validationRules: i("artifact.name")
              }
            ) }),
            /* @__PURE__ */ a.jsx("div", { className: "form-col-1", children: /* @__PURE__ */ a.jsx(
              f,
              {
                label: "Tag",
                name: "metadata.tag",
                validationRules: i("common.tag"),
                placeholder: "latest"
              }
            ) })
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsx(P, { name: "metadata.description", label: "Description", maxLength: 500 }) }),
          /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsx(
            J,
            {
              formState: e,
              formStateFieldInfo: "spec.target_path.fieldInfo",
              hiddenSelectOptionsIds: [w],
              label: "Target Path",
              name: "spec.target_path.path",
              params: r,
              required: !0,
              selectPlaceholder: "Path Scheme",
              setFieldState: e.form.mutators.setFieldState
            }
          ) }),
          /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsx(
            A,
            {
              chipOptions: E("metrics"),
              formState: e,
              initialValues: m,
              isEditable: !0,
              label: "labels",
              name: "metadata.labels",
              shortChips: !0,
              visibleChipsMaxLength: "all",
              validationRules: {
                key: i("common.tag"),
                value: i("common.tag")
              }
            }
          ) })
        ]
      }
    )
  ] }) });
}
Y.propTypes = {
  actions: o.func,
  isOpen: o.bool.isRequired,
  onResolve: o.func.isRequired,
  params: o.object.isRequired,
  refresh: o.func.isRequired
};
export {
  Y as R
};
//# sourceMappingURL=RegisterModelModal-Cc2loyYG.mjs.map
