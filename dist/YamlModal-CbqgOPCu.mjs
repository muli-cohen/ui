import { cp as r, j as s, bM as u, P as c } from "./main-CTYpZ6Nf.mjs";
import { useRef as d, useEffect as l, useCallback as p } from "react";
import { useLocation as h } from "react-router-dom";
const f = ({ convertedYaml: t, toggleConvertToYaml: e }) => {
  const a = h(), i = d(null), o = t && r.highlight(t, r.languages.yml, "yml");
  l(() => {
    i.current ? i.current !== a.pathname && e() : i.current = a.pathname;
  }, [t, a.pathname, e]);
  const n = p(
    (m) => {
      m.target.closest(".pop-up-dialog") || e();
    },
    [e]
  );
  return l(() => (document.addEventListener("click", n, !0), () => {
    document.removeEventListener("click", n, !0);
  }), [n]), /* @__PURE__ */ s.jsx(u, { className: "yaml-modal", closePopUp: e, children: /* @__PURE__ */ s.jsx("div", { "data-testid": "yaml-modal", className: "yaml-modal-container", id: "yaml_modal", children: /* @__PURE__ */ s.jsx("pre", { children: /* @__PURE__ */ s.jsx("code", { dangerouslySetInnerHTML: { __html: o } }) }) }) });
};
f.propTypes = {
  convertedYaml: c.string.isRequired,
  toggleConvertToYaml: c.func.isRequired
};
export {
  f as Y
};
//# sourceMappingURL=YamlModal-CbqgOPCu.mjs.map
