import { c as p, j as t, bu as M, bv as W, K as z, at as G, bM as J, b$ as Q, P as s, fK as X } from "./main-CTYpZ6Nf.mjs";
import * as i from "react";
import Y, { useRef as Z, useState as b, useEffect as A, useCallback as I } from "react";
import { S as ee, k as se } from "./exclamation-mark-kRjYDG-V.mjs";
const E = ({
  className: n = "",
  density: L = "normal",
  disabled: g = !1,
  floatingLabel: u,
  hideSelectedOption: O = !1,
  label: r = "",
  labelAtTop: w = !1,
  onClick: _ = null,
  options: x,
  popUpClassName: k = "select__body",
  position: T = "bottom-right",
  search: v = !1,
  selectType: B = "",
  selectedId: a = "",
  selectedItemAction: l = null,
  width: P = "",
  withoutBorder: R = !1,
  withSelectedIcon: F = !1
}) => {
  const c = Z(), [j, d] = b(!1), [o, h] = b(!1), [C, N] = b(""), { width: $ } = c?.current?.getBoundingClientRect() || {}, D = p(
    "select",
    n,
    `select-${L}`,
    o && "select_active",
    R && "without-border",
    r.length === 0 && "without-label",
    g && "disabled"
  ), V = p(
    "select__label",
    a && u && !w && "select__label_floating",
    w && "select__label_top"
  ), H = p(
    "select__value",
    a && u && "select__value_floating"
  ), m = x.find((e) => e.id === a);
  A(() => (o && window.addEventListener("scroll", y, !0), window.addEventListener("click", S), () => {
    window.removeEventListener("click", S), window.removeEventListener("scroll", y, !0);
  }), [o]);
  const S = (e) => {
    c.current !== e.target.closest(".select") && h(!1);
  }, y = (e) => {
    e.target.closest(".select__body") || h(!1);
  }, K = () => {
    !g && h(!o);
  }, U = I((e) => {
    e.stopPropagation(), !e.target.classList.contains("disabled") && !e.target.closest(".select__search") && (h(!1), N(""));
  }, []), q = (e, f) => {
    e !== a && (f.handler && f.handler(), _ && _(e));
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      "data-testid": "select",
      ref: c,
      className: D,
      onClick: () => K(),
      children: [
        /* @__PURE__ */ t.jsxs("div", { "data-testid": "select-header", className: "select__header", children: [
          r && /* @__PURE__ */ t.jsx("div", { "data-testid": "select-label", className: V, children: r }),
          !a && !r && /* @__PURE__ */ t.jsx("span", { className: "select__label", children: "Select..." }),
          !O && /* @__PURE__ */ t.jsxs("div", { "data-testid": "selected-option", className: H, children: [
            a && m?.label,
            m?.subLabel && /* @__PURE__ */ t.jsx("span", { "data-testid": "select-subLabel", className: "sub-label", children: m.subLabel })
          ] }),
          a && l && /* @__PURE__ */ t.jsx("div", { className: "actions", children: l.handler ? /* @__PURE__ */ t.jsx(M, { template: /* @__PURE__ */ t.jsx(W, { text: l.tooltip }), children: /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: (e) => {
                l.confirm ? d(!0) : l.handler(a), e.stopPropagation();
              },
              children: l.icon
            }
          ) }) : /* @__PURE__ */ t.jsx("span", { children: l.icon }) }),
          /* @__PURE__ */ t.jsx(ee, { className: "select__caret" })
        ] }),
        j && /* @__PURE__ */ t.jsx(
          z,
          {
            cancelButton: {
              handler: () => {
                d(!1);
              },
              label: "Cancel",
              variant: G
            },
            closePopUp: () => {
              d(!1);
            },
            confirmButton: {
              handler: () => {
                l.handler(a), d(!1);
              },
              label: l.confirm.btnConfirmLabel,
              variant: l.confirm.btnConfirmType
            },
            isOpen: j,
            header: l.confirm.title,
            message: l.confirm.message
          }
        ),
        o && /* @__PURE__ */ t.jsx(
          J,
          {
            className: "select__options-list",
            headerIsHidden: !0,
            customPosition: {
              element: c,
              position: T
            },
            style: { width: `${P || $}px` },
            children: /* @__PURE__ */ t.jsxs("div", { "data-testid": "select-body", className: k, onClick: U, children: [
              v && /* @__PURE__ */ t.jsx("div", { className: "select__search", children: /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: C,
                  onChange: (e) => N(e.target.value)
                }
              ) }),
              x.filter((e) => !v || e.label.toLowerCase().includes(C.toLowerCase())).map((e) => /* @__PURE__ */ t.jsx(
                Q,
                {
                  item: e,
                  name: e.id,
                  onClick: (f) => {
                    q(f, e);
                  },
                  selectType: B,
                  selectedId: a,
                  withSelectedIcon: F
                },
                e.id
              ))
            ] })
          }
        )
      ]
    }
  );
};
E.propTypes = {
  className: s.string,
  density: X,
  disabled: s.bool,
  floatingLabel: s.bool,
  hideSelectedOption: s.bool,
  label: s.string,
  labelAtTop: s.bool,
  onClick: s.oneOfType([s.func, s.bool]),
  options: se.isRequired,
  popUpClassName: s.string,
  position: s.string,
  search: s.bool,
  selectType: s.string,
  selectedId: s.oneOfType([s.string, s.bool]),
  selectedItemAction: s.object,
  width: s.string,
  withSelectedIcon: s.bool,
  withoutBorder: s.bool
};
const ie = Y.memo(E), ne = (n) => /* @__PURE__ */ i.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ i.createElement("rect", { x: 3, y: 6, width: 18, height: 2, fill: "#7F7989" }), /* @__PURE__ */ i.createElement("rect", { x: 6, y: 11, width: 12, height: 2, fill: "#7F7989" }), /* @__PURE__ */ i.createElement("rect", { x: 10, y: 16, width: 4, height: 2, fill: "#7F7989" })), oe = (n) => /* @__PURE__ */ i.createElement("svg", { width: 13, height: 14, viewBox: "0 0 13 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ i.createElement("rect", { x: 7.34326, y: 0.5, width: 13, height: 1.5, transform: "rotate(90 7.34326 0.5)", fill: "#7F7989" }), /* @__PURE__ */ i.createElement("rect", { width: 13, height: 1.5, transform: "matrix(-1 -2.18557e-08 -2.18557e-08 1 13 6.15723)", fill: "#7F7989" }));
export {
  ie as S,
  oe as a,
  ne as b
};
//# sourceMappingURL=add-CmKOUDFO.mjs.map
