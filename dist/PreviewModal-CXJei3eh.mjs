import { ay as x, j as s, bM as N, e as r, bu as h, bv as c, aR as w, kG as g, P as b } from "./main-CTYpZ6Nf.mjs";
import { useState as _, useRef as v, useEffect as m } from "react";
import { useDispatch as y, useSelector as z } from "react-redux";
import { aC as P, aD as A, aE as E, aF as S, aG as C } from "./Table-DB12oa-o.mjs";
import { useParams as D } from "react-router-dom";
const R = ({ artifact: e }) => {
  const [a, p] = _([]), [i, j] = _(!1), u = y(), t = D(), d = z((n) => n.appStore.frontendSpec), l = v(!1), o = v(new AbortController());
  return m(() => {
    a.length === 0 && !l.current && d && (o.current = new AbortController(), P(
      t.projectName || e?.project,
      e,
      i,
      j,
      p,
      !1,
      null,
      d.artifact_limits,
      o.current.signal
    ), l.current = !0);
  }, [e, d, i, t.projectName, a.length]), m(() => {
    const n = o.current;
    return () => {
      n.abort(x), l.current = !1;
    };
  }, [e, t.projectName]), m(() => () => {
    p([]);
  }, []), /* @__PURE__ */ s.jsx(
    N,
    {
      className: "preview-modal",
      closePopUp: () => {
        u(g());
      },
      children: /* @__PURE__ */ s.jsx("div", { className: "item-artifacts__modal-preview", children: /* @__PURE__ */ s.jsxs("div", { className: "preview-body", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "preview-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "item-data item-data__header", children: "Name" }),
          /* @__PURE__ */ s.jsx("div", { className: "item-data item-data__path item-data__header", children: "Path" }),
          (r.has(e, "ui.size") || r.has(e, "size")) && /* @__PURE__ */ s.jsx("div", { className: "item-data item-data__header", children: "Size" }),
          /* @__PURE__ */ s.jsx("div", { className: "item-data item-data__header", children: "Updated" }),
          /* @__PURE__ */ s.jsx("div", { className: "preview-body__download" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "preview-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "item-data item-data__name data-ellipsis", children: /* @__PURE__ */ s.jsx(h, { template: /* @__PURE__ */ s.jsx(c, { text: e.db_key || e.key }), children: e.db_key || e.key }) }),
          /* @__PURE__ */ s.jsx("div", { className: "item-data item-data__path data-ellipsis", children: /* @__PURE__ */ s.jsx(h, { template: /* @__PURE__ */ s.jsx(c, { text: e.target_path }), children: e.target_path }) }),
          (r.has(e, "ui.size") || r.has(e, "size")) && /* @__PURE__ */ s.jsx("div", { className: "item-data", children: e.ui.size ? e.ui.size : typeof e.size == "string" ? e.size : A(e.size) }),
          /* @__PURE__ */ s.jsx("div", { className: "item-data", children: w(e.updated || e.ui.date, "N/A") }),
          /* @__PURE__ */ s.jsx("div", { className: "preview-body__download", children: /* @__PURE__ */ s.jsx(
            E,
            {
              onlyIcon: !0,
              path: `${e.target_path}${e.model_file ? e.model_file : ""}`,
              user: e.ui.user ?? e.producer?.owner,
              fileSize: e.size,
              projectName: t.projectName || e?.project
            }
          ) })
        ] }),
        e.header_original_length && e.header_original_length > a[0]?.data?.headers?.length && /* @__PURE__ */ s.jsx("div", { className: "preview-message", children: "This table presents partial data. To view complete data, download it." }),
        /* @__PURE__ */ s.jsxs("div", { className: "item-artifacts__preview", children: [
          a[0]?.hidden && e.extra_data?.length > 0 ? null : /* @__PURE__ */ s.jsx(S, { noData: i, preview: a }),
          e.extra_data?.length > 0 && /* @__PURE__ */ s.jsx(C, { artifact: e })
        ] })
      ] }) })
    }
  );
};
R.propTypes = {
  artifact: b.object.isRequired
};
export {
  R as P
};
//# sourceMappingURL=PreviewModal-CXJei3eh.mjs.map
