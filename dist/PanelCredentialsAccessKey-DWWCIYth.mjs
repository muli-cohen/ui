import { c as E, j as s, bu as S, bv as F, e as O, P as e, fK as D, df as x } from "./main-CTYpZ6Nf.mjs";
import * as w from "react";
import M, { useState as h, useEffect as I } from "react";
import { I as V } from "./Input-7Hc9IEQ_.mjs";
import { c as K } from "./exclamation-mark-kRjYDG-V.mjs";
import { C as $ } from "./CheckBox-DBJrW14Y.mjs";
const C = (d) => /* @__PURE__ */ w.createElement("svg", { width: 6, height: 5, viewBox: "0 0 6 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...d }, /* @__PURE__ */ w.createElement("path", { d: "M5.295 4.5L3 2.21L0.705 4.5L9.24496e-08 3.795L3 0.795L6 3.795L5.295 4.5Z", fill: "#ADABB0" })), q = ({
  density: d = "normal",
  disabled: n = !1,
  invalid: f = !1,
  invalidText: _ = "This field is invalid",
  label: p = "",
  labelType: r = "labelAtTop",
  max: c = void 0,
  min: i = 0,
  onChange: g,
  step: m = 1,
  tip: t = "",
  required: o = !1,
  requiredText: A = "This field is required",
  value: N
}) => {
  const [l, b] = h(0), [j, v] = h(!1), T = E(
    "range",
    `range-${d}`,
    r === "none" && "range__label-none",
    t && "range__input-tip",
    (j || f) && "range-warning"
  );
  I(() => {
    b(N);
  }, [N]);
  const k = () => {
    if (l >= c) return;
    let a = L() ? m : Number(l) + m;
    a = c && a > c ? c : a;
    const u = R(a) ? a : a.toFixed(3);
    b(u), g(u);
  }, y = () => {
    if (l <= 0 || l <= i) return;
    let a = L() ? -m : Number(l) - m;
    a = i && a < i ? i : a;
    const u = R(a) ? a : a.toFixed(3);
    b(u), g(u);
  }, B = () => {
    v(!1);
  }, P = () => {
    o && l.length === 0 && v(!0);
  }, L = () => O.isNil(l) || l === "", R = (a) => Number(a) === a && a % 1 === 0;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      "data-testid": "range-input-container",
      className: T,
      onFocus: B,
      onBlur: P,
      children: [
        r === "labelAtTop" && /* @__PURE__ */ s.jsxs("label", { className: "range__label", children: [
          p,
          o && /* @__PURE__ */ s.jsx("span", { className: "range__label-mandatory", children: " *" })
        ] }),
        /* @__PURE__ */ s.jsx(
          V,
          {
            className: "range__input",
            density: d,
            disabled: n,
            floatingLabel: r === "floatingLabel",
            infoLabel: r === "infoLabel",
            label: r !== "labelAtTop" && r !== "none" ? p : "",
            min: i,
            max: c,
            onChange: (a) => {
              const u = a.length === 0 ? "" : Number(a);
              b(u), g(u);
            },
            tip: t,
            required: o,
            step: "any",
            type: "number",
            value: l
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "range__buttons", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              "data-testid": "btn-increase",
              className: "range__button range__button-increase",
              disabled: n,
              onClick: k,
              children: /* @__PURE__ */ s.jsx(C, { className: "increase" })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              "data-testid": "btn-decrease",
              className: "range__button range__button-decrease",
              disabled: n,
              onClick: y,
              children: /* @__PURE__ */ s.jsx(C, { className: "decrease" })
            }
          )
        ] }),
        (j || f) && /* @__PURE__ */ s.jsx(
          S,
          {
            className: "range__warning",
            template: /* @__PURE__ */ s.jsx(
              F,
              {
                text: f && l.length > 0 ? _ : A,
                warning: !0
              }
            ),
            children: /* @__PURE__ */ s.jsx(K, { className: "range__warning-icon" })
          }
        ),
        o && r === "none" && /* @__PURE__ */ s.jsx("span", { className: "range-required_asterisk", children: "*" })
      ]
    }
  );
};
q.propTypes = {
  density: D,
  disabled: e.bool,
  invalid: e.bool,
  invalidText: e.string,
  label: e.string,
  labelType: e.oneOf(["none", "floatingLabel", "infoLabel", "labelAtTop"]),
  max: e.number,
  min: e.number,
  onChange: e.func.isRequired,
  step: e.number,
  tip: e.oneOfType([e.string, e.element]),
  required: e.bool,
  requiredText: e.string,
  value: e.oneOfType([e.string, e.number]).isRequired
};
const J = M.memo(q), U = ({
  className: d = "",
  credentialsAccessKey: n,
  isPanelEditMode: f = !1,
  required: _ = !1,
  setCredentialsAccessKey: p,
  setValidation: r,
  validation: c
}) => {
  const [i, g] = h(""), m = E(d, "new-item-side-panel__item", "access-key");
  return I(() => {
    n !== x && g(n);
  }, [n]), /* @__PURE__ */ s.jsxs("div", { className: m, children: [
    /* @__PURE__ */ s.jsx(
      $,
      {
        disabled: f,
        item: {
          id: x,
          label: "Auto-generate access key"
        },
        onChange: (t) => {
          t !== n && i.length > 0 && g(""), p(t === n ? "" : t), r((o) => ({
            ...o,
            isAccessKeyValid: !0
          }));
        },
        selectedId: n
      }
    ),
    n !== x && /* @__PURE__ */ s.jsx(
      V,
      {
        floatingLabel: !0,
        label: "Access Key",
        invalid: !c.isAccessKeyValid,
        onBlur: (t) => {
          n !== t.target.value && p(t.target.value);
        },
        onChange: g,
        required: _,
        setInvalid: (t) => r((o) => ({
          ...o,
          isAccessKeyValid: t
        })),
        value: i,
        wrapperClassName: "access-key__input"
      }
    )
  ] });
};
U.propTypes = {
  className: e.string,
  credentialsAccessKey: e.string.isRequired,
  isPanelEditMode: e.bool,
  required: e.bool,
  setCredentialsAccessKey: e.func.isRequired,
  setValidation: e.func.isRequired,
  validation: e.object.isRequired
};
export {
  U as P,
  J as R
};
//# sourceMappingURL=PanelCredentialsAccessKey-DWWCIYth.mjs.map
