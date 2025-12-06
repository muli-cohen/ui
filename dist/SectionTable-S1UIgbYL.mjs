import { j as t, i as N, bu as s, bv as l, cq as o, c as _, lb as g, P as r } from "./main-CTYpZ6Nf.mjs";
import f from "react";
import { Link as F } from "react-router-dom";
import { R } from "./ReadOnlyChips-CK1USnQl.mjs";
const u = ({ loading: j = !1, params: i, table: n }) => j ? /* @__PURE__ */ t.jsx(N, { section: !0, secondary: !0 }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("table", { className: "section-table", cellPadding: "0", cellSpacing: "0", children: [
  /* @__PURE__ */ t.jsx("thead", { children: /* @__PURE__ */ t.jsx("tr", { className: "section-table__table-header", children: /* @__PURE__ */ t.jsx(t.Fragment, { children: n.header.map(
    (a) => !a.hidden && /* @__PURE__ */ t.jsxs(
      "th",
      {
        className: `section-table__table-cell ${a.className} table-header-item`,
        children: [
          /* @__PURE__ */ t.jsx(s, { template: /* @__PURE__ */ t.jsx(l, { text: a.value }), children: a.value }),
          a.tip && /* @__PURE__ */ t.jsx(o, { text: a.tip })
        ]
      },
      a.value
    )
  ) }) }) }),
  /* @__PURE__ */ t.jsx("tbody", { className: "section-table__table-body", children: n.body.map((a, p) => {
    const m = a.name.value.startsWith(i.projectName) ? a.name.value.slice(i.projectName.length + 1) : a.name.value;
    return /* @__PURE__ */ t.jsx("tr", { className: "section-table__table-row", children: /* @__PURE__ */ t.jsx(t.Fragment, { children: Object.keys(a).map((e, c) => {
      const h = _(
        "section-table__table-cell",
        a[e].className,
        e === "name" && "name-wrapper",
        e === "status" && "status-cell",
        e === "status" && !Array.isArray(a[e].value) && `status_${a?.[e]?.value?.toLowerCase?.()} capitalize`
      );
      return !a[e].hidden && (e === "type" ? /* @__PURE__ */ t.jsx(g, { cellData: a[e] }, a[e].value + c) : /* @__PURE__ */ t.jsx("td", { className: h, children: e === "name" ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        a[e].href ? /* @__PURE__ */ t.jsx(
          "a",
          {
            href: a[e].href,
            target: "_top",
            className: "link section-table__table-link",
            children: /* @__PURE__ */ t.jsx(
              s,
              {
                className: "item-name",
                template: /* @__PURE__ */ t.jsx(l, { text: m }),
                textShow: !0,
                children: m
              }
            )
          }
        ) : a[e].link ? /* @__PURE__ */ t.jsx(F, { className: "link section-table__table-link", to: a[e].link, children: /* @__PURE__ */ t.jsx(s, { className: "item-name", template: /* @__PURE__ */ t.jsx(l, { text: a[e].value }), children: a[e].value }) }) : /* @__PURE__ */ t.jsx(s, { className: "item-name", template: /* @__PURE__ */ t.jsx(l, { text: a[e].value }), children: a[e].value }),
        a[e].tag ? /* @__PURE__ */ t.jsx(s, { className: "item-tag", template: /* @__PURE__ */ t.jsx(l, { text: a[e].tag }), children: a[e].tag }) : null
      ] }) : e === "labels" ? /* @__PURE__ */ t.jsx(R, { labels: a.labels.value, shortChips: !0 }) : e === "status" ? /* @__PURE__ */ t.jsx(t.Fragment, { children: Array.isArray(a.status.value) ? a.status.value.map((x, v) => /* @__PURE__ */ t.jsx(
        s,
        {
          template: /* @__PURE__ */ t.jsx(l, { text: x }),
          children: /* @__PURE__ */ t.jsx("i", { className: `state-${x}-job status-icon` })
        },
        a.status.value + v
      )) : /* @__PURE__ */ t.jsx(
        s,
        {
          template: /* @__PURE__ */ t.jsx(
            l,
            {
              text: a[e].tooltip || a[e].value
            }
          ),
          children: a[e].value
        }
      ) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          s,
          {
            template: /* @__PURE__ */ t.jsx(
              l,
              {
                text: a[e].tooltip || a[e].value
              }
            ),
            children: a[e].value
          }
        ),
        a[e].status && /* @__PURE__ */ t.jsx(
          s,
          {
            template: /* @__PURE__ */ t.jsx(l, { text: a[e].status }),
            children: /* @__PURE__ */ t.jsx("i", { className: `state-${a[e].status}-job status-icon` })
          },
          a[e].status + c
        )
      ] }) }, a[e].value + c + e));
    }) }) }, p);
  }) })
] }) });
u.propTypes = {
  loading: r.bool,
  params: r.object.isRequired,
  table: r.object.isRequired
};
const C = f.memo(u);
export {
  C as S
};
//# sourceMappingURL=SectionTable-S1UIgbYL.mjs.map
