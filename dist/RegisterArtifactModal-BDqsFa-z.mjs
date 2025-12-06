import { q as k, j as e, b0 as R, bO as c, a_ as C, bP as M, dR as w, bQ as P, bR as F, P as t, bJ as E, bK as L, bL as S, bN as I, i as U, dS as O, dT as V, dk as D, cg as H, at as $, p as B, bW as G, bV as Q, dU as Y, af as z } from "./main-CTYpZ6Nf.mjs";
import J, { useMemo as T, useState as W, createElement as K } from "react";
import { useDispatch as X } from "react-redux";
import { useLocation as Z } from "react-router-dom";
import { P as ee, Q as ae, U as te, V as se } from "./Table-DB12oa-o.mjs";
import { u as re } from "./clock-BFaispYx.mjs";
const y = ({
  formState: o,
  initialValues: s,
  messagesByKind: l = "",
  params: d,
  setFieldState: r,
  showType: m = !0
}) => {
  const n = T(
    () => [
      {
        label: "General",
        id: k
      },
      {
        label: "Chart",
        id: "chart"
      },
      {
        label: "Plot",
        id: "plot"
      },
      {
        label: "Table",
        id: "table"
      }
    ],
    []
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: l?.title && /* @__PURE__ */ e.jsxs("div", { className: "form-text", children: [
      /* @__PURE__ */ e.jsx("span", { children: l.title }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { children: l?.subTitle }),
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "https://docs.mlrun.org/en/latest/store/artifacts.html",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "link",
            children: "Read more"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ e.jsx("div", { className: "form-col-2", children: /* @__PURE__ */ e.jsx(
        R,
        {
          async: !0,
          label: "Name",
          name: "metadata.key",
          required: !0,
          validationRules: c("artifact.name")
        }
      ) }),
      /* @__PURE__ */ e.jsx("div", { className: "form-col-1", children: /* @__PURE__ */ e.jsx(
        R,
        {
          label: "Tag",
          name: "metadata.tag",
          validationRules: c("common.tag"),
          placeholder: "latest"
        }
      ) }),
      m && /* @__PURE__ */ e.jsx("div", { className: "form-col-1", children: /* @__PURE__ */ e.jsx(C, { label: "Type:", name: "kind", options: n }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(M, { label: "Description", maxLength: 500, name: "metadata.description" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      ee,
      {
        formState: o,
        formStateFieldInfo: "spec.target_path.fieldInfo",
        hiddenSelectOptionsIds: [w],
        label: "Target Path",
        name: "spec.target_path.path",
        params: d,
        required: !0,
        selectPlaceholder: "Path Scheme",
        setFieldState: r
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
      P,
      {
        chipOptions: F("metrics"),
        formState: o,
        initialValues: s,
        isEditable: !0,
        label: "labels",
        name: "metadata.labels",
        shortChips: !0,
        visibleChipsMaxLength: "2",
        validationRules: {
          key: c("common.tag"),
          value: c("common.tag")
        }
      }
    ) })
  ] });
};
y.propTypes = {
  formState: t.object.isRequired,
  initialValues: t.object.isRequired,
  messagesByKind: t.object,
  params: t.object.isRequired,
  setFieldState: t.func.isRequired,
  showType: t.bool
};
const ie = ({
  actions: o = null,
  artifactKind: s,
  isOpen: l,
  onResolve: d,
  params: r,
  refresh: m,
  title: n
}) => {
  const [N, f] = W(!1), b = {
    kind: s,
    metadata: {
      description: "",
      key: "",
      labels: []
    },
    spec: {
      target_path: {
        fieldInfo: {
          pathType: ""
        },
        path: ""
      }
    }
  }, g = J.useRef(
    E({
      initialValues: b,
      mutators: { ...S, setFieldState: L },
      onSubmit: () => {
      }
    })
  ), v = Z(), j = X(), { handleCloseModal: p, resolveModal: x } = re(d, g.current), A = T(() => ae(s), [s]), q = (a) => {
    const u = {
      kind: a.kind,
      metadata: {
        description: a.metadata.description,
        labels: D(a.metadata.labels),
        key: a.metadata.key,
        tag: a.metadata.tag,
        project: r.projectName,
        tree: te()
      },
      spec: {
        db_key: a.metadata.key,
        producer: {
          kind: "api",
          name: "UI",
          uri: window.location.host
        },
        target_path: a.spec.target_path.path
      },
      status: {}
    }, h = () => Y.registerArtifact(r.projectName, u).then((i) => (x(), m(), j(
      z({
        status: i.status,
        id: Math.random(),
        message: `${n} initiated successfully`
      })
    ), i));
    return se({
      tag: a.metadata.tag ?? "latest",
      artifact: u,
      projectName: r.projectName,
      dispatch: j,
      actionCallback: h,
      getCustomErrorMsg: (i) => i?.response?.status === H ? "You do not have permission to create a new resource" : `${n} failed to initiate`,
      onErrorCallback: x,
      showLoader: () => f(!0),
      hideLoader: () => f(!1)
    });
  }, _ = (a) => (o ? o(a, p) : [
    {
      label: "Cancel",
      onClick: () => p(),
      variant: $
    },
    {
      disabled: G(a),
      label: "Register",
      onClick: a.handleSubmit,
      variant: B
    }
  ]).map((h, i) => /* @__PURE__ */ K(Q, { ...h, key: i }));
  return /* @__PURE__ */ e.jsx(I, { form: g.current, onSubmit: q, children: (a) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    N && /* @__PURE__ */ e.jsx(U, {}),
    /* @__PURE__ */ e.jsx(
      O,
      {
        "data-testid": "register-artifact",
        actions: _(a),
        className: "artifact-register-form",
        location: v,
        onClose: p,
        show: l,
        size: V,
        title: n,
        children: /* @__PURE__ */ e.jsx(
          y,
          {
            formState: a,
            initialValues: b,
            messagesByKind: A,
            params: r,
            setFieldState: a.form.mutators.setFieldState,
            showType: s === k
          }
        )
      }
    )
  ] }) });
};
ie.propTypes = {
  actions: t.func,
  artifactKind: t.string.isRequired,
  isOpen: t.bool.isRequired,
  onResolve: t.func.isRequired,
  params: t.object.isRequired,
  refresh: t.func.isRequired,
  title: t.string.isRequired
};
export {
  ie as R
};
//# sourceMappingURL=RegisterArtifactModal-BDqsFa-z.mjs.map
