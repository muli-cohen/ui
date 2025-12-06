import { j as s, c as y, P as e, bZ as Re, e as R, k5 as ve, bu as ye, bv as Ee, cq as Te, b_ as Ie, k6 as Ve, kO as $e, fK as Me } from "./main-CTYpZ6Nf.mjs";
import * as p from "react";
import J, { useState as c, useRef as Z, useMemo as ke, useEffect as v } from "react";
import { useParams as Le, Link as Se } from "react-router-dom";
import { g as Be, c as Fe } from "./exclamation-mark-kRjYDG-V.mjs";
const Pe = ({
  activeTab: m = "",
  disabled: f = !1,
  fontSize: g = "md",
  onClick: l = null,
  screen: E = "",
  tabs: S = []
}) => {
  const T = Le(), h = (n, u) => {
    f || (n.preventDefault(), l(u));
  }, I = (n) => {
    if (!f)
      return l ? "/" : `/projects${T.projectName ? `/${T.projectName}` : ""}/${E.toLowerCase()}/${n}`;
  }, _ = (n) => /* @__PURE__ */ s.jsxs("span", { className: n.icon && "content-menu__tab-icon", children: [
    n.icon && /* @__PURE__ */ s.jsx("i", { children: n.icon }),
    n.label ?? n.id,
    window.mlrunConfig.betaMode === "enabled" && n.preview && /* @__PURE__ */ s.jsx("span", { className: "content-menu__tab__preview", children: " (Beta)" })
  ] });
  return /* @__PURE__ */ s.jsx("div", { className: "content-menu", children: /* @__PURE__ */ s.jsx("ul", { className: "content-menu__tabs", children: S.map((n) => {
    const u = y(
      "content-menu__tab",
      `content-menu__tab-${g}`,
      n.id === m && "content-menu__tab_active",
      f && "content-menu__tab_disabled"
    );
    return !n.hidden && (l ? /* @__PURE__ */ s.jsx(
      "span",
      {
        "data-testid": n.id,
        className: u,
        onClick: (x) => h(x, n.id),
        children: _(n)
      },
      n.id
    ) : /* @__PURE__ */ s.jsx(
      Se,
      {
        to: I(n.id),
        "data-testid": n.id,
        className: u,
        children: _(n)
      },
      n.id
    ));
  }) }) });
};
Pe.propTypes = {
  activeTab: e.string.isRequired,
  disabled: e.bool,
  fontSize: e.oneOf(["xs", "sm", "md", "lg"]),
  onClick: e.func,
  screen: e.string,
  tabs: Be.isRequired
};
const He = (m) => /* @__PURE__ */ p.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...m }, /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip0)" }, /* @__PURE__ */ p.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.8 11.21C11.53 11.7 11.01 12 10.45 12H1.56C1 12 0.48 11.7 0.21 11.21C-0.07 10.72 -0.07 10.12 0.21 9.63L4.65 0.79C4.93 0.3 5.45 0 6 0C6.57 0 7.07 0.3 7.35 0.79L11.8 9.63C12.08 10.13 12.08 10.72 11.8 11.21ZM7.01 4H5.01V8H7.01V4ZM7.01 9H5.01V10H7.01V9Z", fill: "#E54158" })), /* @__PURE__ */ p.createElement("defs", null, /* @__PURE__ */ p.createElement("clipPath", { id: "clip0" }, /* @__PURE__ */ p.createElement("rect", { width: 12, height: 12, fill: "white" })))), q = J.forwardRef(
  ({
    className: m = "",
    density: f = "normal",
    disabled: g = !1,
    floatingLabel: l = !1,
    focused: E = !1,
    iconClass: S = "",
    iconOnClick: T = () => {
    },
    id: h = "",
    infoLabel: I = !1,
    inputIcon: _ = null,
    invalid: n = !1,
    invalidText: u = "This field is invalid",
    label: x,
    min: Q = null,
    maxLength: X = null,
    onBlur: Y = () => {
    },
    onChange: ee = () => {
    },
    onFocus: D,
    onKeyDown: te = () => {
    },
    pattern: w,
    placeholder: B = "",
    required: d = !1,
    requiredText: ne = "This field is required",
    setInvalid: V = () => {
    },
    step: se = "",
    suggestionList: K = [],
    tip: b = "",
    type: ie = "text",
    validationRules: F = [],
    value: $ = void 0,
    withoutBorder: ae = !1,
    wrapperClassName: le = ""
  }, M) => {
    const [P, C] = c(!1), [U, oe] = c(0), [i, H] = c(!1), [a, z] = c(""), [O] = c(RegExp(w)), [N, re] = c(F), [j, k] = c(!1), ce = Z();
    M ??= ce;
    const L = Z(), W = Z(null);
    Re(M, () => k(!1));
    const ue = ke(() => ({
      paddingLeft: `${U + 16}px`,
      paddingRight: (b ? 25 : 0) + (i ? 20 : 0) + "px"
    }), [i, U, b]), de = y(
      "input",
      m,
      `input-${f}`,
      (P || B || a.length > 0) && l && "active-input",
      i && "input_invalid",
      b && "input-short",
      !R.isEmpty(N) && i && "input_rules-invalid",
      ae && "without-border"
    ), pe = y(
      "input__label",
      g && "input__label_disabled",
      l && "input__label-floating",
      (P || B || a.length > 0) && l && "active-label",
      I && "input__label_info"
    ), me = y(le, "input-wrapper"), fe = y(
      "input__label-mandatory",
      g && "input__label-mandatory_disabled"
    );
    v(() => {
      z(String($ ?? ""));
    }, [$]), v(() => (j && window.addEventListener("scroll", A, !0), () => {
      window.removeEventListener("scroll", A, !0);
    }), [j]), v(() => {
      i !== n && (d && a.trim().length === 0 || w && !O.test(a) || a.startsWith(" ") ? (H(!0), V && V(!1)) : H(n));
    }, [n, i, w, d, V, a, O]), v(() => {
      E && (L.current.focus(), C(!0));
    }, [L, E]), v(() => {
      W.current && oe(W.current?.getBoundingClientRect().width);
    }, [x]);
    const ge = (t) => {
      C(!1), G(t);
    }, A = (t) => {
      !t.target.closest(".options-menu") && !t.target.classList.contains("input") && k(!1);
    }, he = (t) => {
      (!t.relatedTarget || !t.relatedTarget?.closest(".suggestion-list")) && (C(!1), Y(t));
    }, _e = (t) => {
      let o = !0;
      if (!R.isEmpty(F)) {
        const [Ne, je] = Ve(F, t, d);
        o = je, re(Ne), (o && j || t.trim() === "") && k(!1);
      }
      const r = d && t.trim().length === 0 || w && !O.test(t) || t.startsWith(" ") || !o;
      H(r), V(!r);
    }, G = (t) => {
      z(t), ee(t), _e(t);
    }, xe = (t) => {
      G(t.target.value);
    }, we = N.map(({ isValid: t = !1, label: o, name: r }) => /* @__PURE__ */ s.jsx(ve, { valid: t, validationMessage: o }, r)), be = () => {
      C(!0), D && D();
    }, Ce = () => {
      k(!j), L.current.focus(), C(!0);
    };
    return /* @__PURE__ */ s.jsxs("div", { ref: M, className: me, children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          "data-testid": h ? `${h}-input` : "input",
          className: de,
          name: h,
          onBlur: he,
          onChange: xe,
          onFocus: be,
          ref: L,
          required: i,
          disabled: g,
          min: Q,
          maxLength: X,
          onKeyDown: te,
          pattern: w,
          placeholder: B,
          step: se,
          type: ie,
          value: a,
          style: l ? {} : ue
        }
      ),
      x && /* @__PURE__ */ s.jsx("div", { className: pe, children: /* @__PURE__ */ s.jsxs(
        "label",
        {
          "data-testid": "input-label",
          ref: W,
          style: I ? {
            left: ($ ? $.length + 2 : 2) * 10
          } : {},
          children: [
            x,
            d && /* @__PURE__ */ s.jsx("span", { className: fe, children: " *" })
          ]
        }
      ) }),
      i && !R.isEmpty(N) && /* @__PURE__ */ s.jsx("i", { className: "input__warning", onClick: Ce, children: /* @__PURE__ */ s.jsx(He, {}) }),
      i && R.isEmpty(N) && /* @__PURE__ */ s.jsx(
        ye,
        {
          className: "input__warning",
          template: /* @__PURE__ */ s.jsx(
            Ee,
            {
              text: d && !a ? ne : u,
              warning: !0
            }
          ),
          children: /* @__PURE__ */ s.jsx(Fe, {})
        }
      ),
      b && /* @__PURE__ */ s.jsx(Te, { text: b, className: "input__tip" }),
      _ && /* @__PURE__ */ s.jsx("span", { "data-testid": "input-icon", className: S, onClick: T, children: _ }),
      K?.length > 0 && P && /* @__PURE__ */ s.jsx("ul", { className: "suggestion-list", children: K.map((t, o) => /* @__PURE__ */ s.jsx(
        "li",
        {
          className: "suggestion-item",
          onClick: () => {
            ge(t);
          },
          tabIndex: o,
          dangerouslySetInnerHTML: {
            __html: t.replace(
              new RegExp(a, "gi"),
              (r) => r && `<b>${r}</b>`
            )
          }
        },
        `${t}${o}`
      )) }),
      i && !R.isEmpty(N) && /* @__PURE__ */ s.jsx(Ie, { show: j, ref: { refInputContainer: M }, children: we })
    ] });
  }
);
q.displayName = "Input";
q.propTypes = {
  className: e.string,
  density: Me,
  disabled: e.bool,
  floatingLabel: e.bool,
  focused: e.bool,
  iconClass: e.string,
  iconOnClick: e.func,
  id: e.string,
  infoLabel: e.bool,
  inputIcon: e.element,
  invalid: e.bool,
  invalidText: e.string,
  label: e.string,
  maxLength: e.number,
  min: e.number,
  onBlur: e.func,
  onChange: e.func,
  onFocus: e.func,
  onKeyDown: e.func,
  pattern: e.string,
  placeholder: e.string,
  required: e.bool,
  requiredText: e.string,
  setInvalid: e.func,
  step: e.string,
  suggestionList: e.array,
  tip: e.oneOfType([e.string, e.element]),
  type: e.string,
  validationRules: $e,
  value: e.oneOfType([e.string, e.number]),
  withoutBorder: e.bool,
  wrapperClassName: e.string
};
const De = J.memo(q);
export {
  Pe as C,
  De as I,
  He as S
};
//# sourceMappingURL=Input-7Hc9IEQ_.mjs.map
