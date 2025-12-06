import { gc as Q, c as L, j as a, x as y, z as v, i as W, gb as z, bT as O, e as T, I as q, P as o, B as X, bu as $, bv as U, fU as J, g6 as E, m as A, gd as _, aR as D, eK as Y, ex as S, er as V, fm as ee } from "./main-CTYpZ6Nf.mjs";
import * as s from "react";
import ae, { useRef as te, useMemo as k, useState as w, useEffect as B } from "react";
import { useParams as le } from "react-router-dom";
import { createPortal as ie } from "react-dom";
import { i as se, P as de, g as R } from "./groupContent.hook-CinwL_Jd.mjs";
import { useSelector as ne, useDispatch as re } from "react-redux";
import { a6 as I, a7 as ce, a8 as f } from "./Table-DB12oa-o.mjs";
import { c as P } from "./link-helper.util-CuUJj7TV.mjs";
import { S as oe } from "./nosql-C5IGoxHw.mjs";
const M = ({
  actionsMenu: e,
  handleSelectItem: l = () => {
  },
  hideActionsMenu: d = !1,
  mainRowItemsCount: r = 1,
  pageTab: c,
  rowIndex: x,
  rowItem: n,
  selectedItem: t = {},
  selectedRowData: p,
  toggleRow: N = () => {
  },
  withQuickActions: h = !1
}) => {
  const b = te(), m = le(), j = k(
    () => se(b, p, n),
    [n, p]
  ), F = k(() => Q(c), [c]), H = L(
    "table-row",
    "table-body-row",
    "parent-row",
    t?.name && F(t, !0) === n.data.ui.identifierUnique && !j && "table-row_active",
    j && de
  );
  return /* @__PURE__ */ a.jsx("tr", { className: H, ref: b, children: j ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "td",
      {
        "data-testid": R(x),
        className: `table-body__cell
              ${j && "row_grouped-by"}`,
        children: /* @__PURE__ */ a.jsx("table", { cellPadding: "0", cellSpacing: "0", className: "table table-fixed", children: /* @__PURE__ */ a.jsx("tbody", { className: "table-body", children: /* @__PURE__ */ a.jsxs("tr", { className: "table-row", children: [
          n.content.map((i, u) => {
            const C = L(
              u >= r && "table-body__cell_hidden"
            );
            return !i.hidden && /* @__PURE__ */ a.jsx(
              y,
              {
                className: C,
                cellData: i,
                firstCell: u === 0,
                item: n,
                link: i.rowExpanded?.getLink ? i.rowExpanded.getLink(m.tab ?? v) : "",
                selectItem: l,
                selectedItem: t,
                showExpandButton: i.showExpandButton,
                toggleRow: N
              },
              i.id
            );
          }),
          !d && /* @__PURE__ */ a.jsx("td", { className: "table-body__cell table-cell-icon" })
        ] }) }) })
      }
    ),
    p[n.data.ui.identifier]?.loading ? /* @__PURE__ */ a.jsx("td", { className: "table-body__cell", children: ie(/* @__PURE__ */ a.jsx(W, {}), document.querySelector(`.${z}`)) }) : p[n.data.ui.identifier]?.error ? /* @__PURE__ */ a.jsx("td", { className: "table-body__cell", children: /* @__PURE__ */ a.jsx(O, { message: p[n.data.ui.identifier]?.error?.message }) }) : p[n.data.ui.identifier]?.content.map((i, u) => {
      const C = L(
        "table-row",
        "table-body-row",
        t.name && F(t, !0) === i.data.ui.identifierUnique && "table-row_active"
      );
      return /* @__PURE__ */ a.jsx(
        "td",
        {
          "data-testid": R(x, u),
          className: "table-body__cell",
          children: /* @__PURE__ */ a.jsx("table", { cellPadding: "0", cellSpacing: "0", className: "table table-fixed", children: /* @__PURE__ */ a.jsx("tbody", { className: "table-body", children: /* @__PURE__ */ a.jsx("tr", { className: C, children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            i.content.map((g, G) => {
              const K = L(
                !T.isEmpty(t) && G >= r && "table-body__cell_hidden"
              );
              return !g.hidden && /* @__PURE__ */ a.jsx(
                y,
                {
                  className: K,
                  cellData: g.expandedCellContent ? g.expandedCellContent : g,
                  item: i.data,
                  link: g.getLink?.(m.tab ?? v),
                  selectItem: l,
                  selectedItem: t
                },
                g.id
              );
            }),
            !d && /* @__PURE__ */ a.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ a.jsx(q, { dataItem: i.data, menu: e }) })
          ] }) }) }) })
        },
        u
      );
    })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    n.content.map((i, u) => {
      const C = L(
        !T.isEmpty(t) && u >= r && "table-body__cell_hidden"
      );
      return !i.hidden && /* @__PURE__ */ a.jsx(
        y,
        {
          className: C,
          cellData: i,
          firstCell: u === 0,
          item: n.data,
          link: i.getLink?.(m.tab ?? v),
          onClick: i.handleClick,
          selectItem: l,
          selectedItem: t,
          showExpandButton: i.showExpandButton,
          toggleRow: N
        },
        i.id
      );
    }),
    !d && /* @__PURE__ */ a.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ a.jsx(
      q,
      {
        dataItem: n.data,
        menu: e,
        withQuickActions: h
      }
    ) })
  ] }) });
};
M.propTypes = {
  actionsMenu: X.isRequired,
  handleSelectItem: o.func,
  hideActionsMenu: o.bool,
  mainRowItemsCount: o.number,
  pageTab: o.string.isRequired,
  rowIndex: o.number.isRequired,
  rowItem: o.object.isRequired,
  selectedItem: o.object,
  selectedRowData: o.object.isRequired,
  toggleRow: o.func,
  withQuickActions: o.bool
};
const _e = ae.memo(M), me = (e) => /* @__PURE__ */ s.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ s.createElement("circle", { cx: 12, cy: 12, r: 11, fill: "#869CFF" }), /* @__PURE__ */ s.createElement("path", { d: "M11.5 7.50002H12.5V16.5H11.5V7.50002Z", fill: "white" }), /* @__PURE__ */ s.createElement("path", { d: "M7.5 12.5L7.5 11.5L16.5 11.5L16.5 12.5L7.5 12.5Z", fill: "white" })), pe = (e) => /* @__PURE__ */ s.createElement("svg", { width: 28, height: 27, viewBox: "0 0 28 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ s.createElement("circle", { cx: 12, cy: 15, r: 10.5, stroke: "#ADABB0" }), /* @__PURE__ */ s.createElement("path", { d: "M11.5 10.5H12.5V19.5H11.5V10.5Z", fill: "#ADABB0" }), /* @__PURE__ */ s.createElement("path", { d: "M7.5 15.5L7.5 14.5L16.5 14.5L16.5 15.5L7.5 15.5Z", fill: "#ADABB0" }), /* @__PURE__ */ s.createElement("rect", { x: 15, width: 13, height: 13, rx: 6.5, fill: "#869CFF" }), /* @__PURE__ */ s.createElement("path", { d: "M20.8633 7.25391C20.8633 6.88932 20.9076 6.59896 20.9961 6.38281C21.0846 6.16667 21.2461 5.95443 21.4805 5.74609C21.7174 5.53516 21.875 5.36458 21.9531 5.23438C22.0312 5.10156 22.0703 4.96224 22.0703 4.81641C22.0703 4.3763 21.8672 4.15625 21.4609 4.15625C21.2682 4.15625 21.1133 4.21615 20.9961 4.33594C20.8815 4.45312 20.8216 4.61589 20.8164 4.82422H19.6836C19.6888 4.32682 19.849 3.9375 20.1641 3.65625C20.4818 3.375 20.9141 3.23438 21.4609 3.23438C22.013 3.23438 22.4414 3.36849 22.7461 3.63672C23.0508 3.90234 23.2031 4.27865 23.2031 4.76562C23.2031 4.98698 23.1536 5.19661 23.0547 5.39453C22.9557 5.58984 22.7826 5.80729 22.5352 6.04688L22.2188 6.34766C22.0208 6.53776 21.9076 6.76042 21.8789 7.01562L21.8633 7.25391H20.8633ZM20.75 8.45312C20.75 8.27865 20.8086 8.13542 20.9258 8.02344C21.0456 7.90885 21.1979 7.85156 21.3828 7.85156C21.5677 7.85156 21.7188 7.90885 21.8359 8.02344C21.9557 8.13542 22.0156 8.27865 22.0156 8.45312C22.0156 8.625 21.957 8.76693 21.8398 8.87891C21.7253 8.99089 21.5729 9.04688 21.3828 9.04688C21.1927 9.04688 21.0391 8.99089 20.9219 8.87891C20.8073 8.76693 20.75 8.625 20.75 8.45312Z", fill: "white" })), Z = ({ feature: e }) => {
  const [l, d] = w(!0), [r, c] = w(!0), [x, n] = w(""), t = ne((h) => h.tableStore), p = re();
  B(() => {
    n(
      l ? "This feature cannot be added because features from another tag of this feature's set are already in the vector. If you want to allow adding this feature you must first remove all those features from the vector." : "Add feature"
    );
  }, [l]), B(() => {
    const h = t.features.groupedFeatures?.[t.features.currentProject]?.find(
      (m) => m.feature === e.name && m.featureSet === e.metadata.name && m.tag === e.metadata.tag
    ), b = t.features.groupedFeatures?.[t.features.currentProject]?.find(
      (m) => m.featureSet === e.metadata.name && m.tag !== e.metadata.tag
    );
    c(!!h), d(!!b);
  }, [t.features.groupedFeatures, t.features.currentProject, e]);
  const N = () => {
    const h = t.features.groupedFeatures[t.features.currentProject] ?? [], b = {
      project: e.metadata.project,
      featureSet: e.metadata.name,
      tag: e.metadata.tag,
      feature: e.name,
      alias: "",
      originalTemplate: `${e.metadata.project}/${e.metadata.name}:${e.metadata.tag}.${e.name}`
    };
    p(
      J({
        groupedFeatures: [...h, b],
        project: t.features.currentProject
      })
    );
  };
  return /* @__PURE__ */ a.jsx("div", { className: "add-feature-button", children: r ? null : l ? /* @__PURE__ */ a.jsx($, { template: /* @__PURE__ */ a.jsx(U, { text: x }), children: /* @__PURE__ */ a.jsx(pe, {}) }) : /* @__PURE__ */ a.jsx($, { template: /* @__PURE__ */ a.jsx(U, { text: x }), children: /* @__PURE__ */ a.jsx(me, { onClick: N }) }) });
};
Z.propTypes = {
  feature: o.object.isRequired
};
const ue = (e) => /* @__PURE__ */ s.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ s.createElement("path", { d: "M8 16.6L12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6Z", fill: "#7F7989" }), /* @__PURE__ */ s.createElement("path", { d: "M14 16.6L18.6 12L14 7.4L15.4 6L21.4 12L15.4 18L14 16.6Z", fill: "#7F7989" }), /* @__PURE__ */ s.createElement("path", { d: "M2 16.6L6.6 12L2 7.4L3.4 6L9.4 12L3.4 18L2 16.6Z", fill: "#7F7989" })), he = (e) => /* @__PURE__ */ s.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ s.createElement("path", { d: "M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z", fill: "#7F7989" })), Fe = (e, l, d, r) => ({
  data: {
    ...e
  },
  content: [
    {
      id: `key.${e.ui.identifierUnique}`,
      headerId: "name",
      headerLabel: "Name",
      value: e.name,
      className: "table-cell-name",
      getLink: (c) => f(e.name, e.tag, c) ? P(
        l,
        S,
        Y,
        e.name,
        e.tag,
        c,
        e.uid
      ) : "",
      showTag: !0,
      showStatus: !0,
      expandedCellContent: {
        className: "table-cell-name",
        value: e.tag || E(e.uid),
        tooltip: e.tag || e.uid,
        showTag: !0,
        showStatus: !0
      },
      showExpandButton: r
    },
    {
      id: `description.${e.ui.identifierUnique}`,
      headerId: "description",
      headerLabel: "Description",
      value: e.description,
      className: "table-cell-2"
    },
    {
      id: `labels.${e.ui.identifierUnique}`,
      headerId: "labels",
      headerLabel: "Labels",
      value: _(e.labels),
      className: "table-cell-4",
      type: "labels"
    },
    {
      id: `version.${e.ui.identifierUnique}`,
      headerId: "tag",
      value: e.tag,
      className: "table-cell-2",
      type: "hidden"
    },
    {
      id: `entity.${e.ui.identifierUnique}`,
      headerId: "entities",
      headerLabel: "Entities",
      value: e.entities?.slice(0, 2).map((c) => c.name) || "",
      type: "labels",
      className: "table-cell-2"
    },
    { ...ge(e.targets) },
    {
      id: `updated.${e.ui.identifierUnique}`,
      headerId: "updated",
      headerLabel: "Updated",
      value: e.updated ? D(e.updated, "N/A") : "N/A",
      className: "table-cell-2"
    }
  ]
}), Te = (e, l, d) => ({
  data: {
    ...e
  },
  content: [
    {
      id: `key.${e.ui.identifierUnique}`,
      headerId: "featurename",
      headerLabel: "Feature Name",
      type: e.ui.type,
      value: e.name,
      className: "table-cell-name",
      expandedCellContent: {
        className: "table-cell-name",
        value: e.metadata?.tag || E(e.metadata?.uid),
        tooltip: e.metadata?.tag || e.metadata.uid
      },
      showExpandButton: d
    },
    {
      id: `feature_set.${e.ui.identifierUnique}`,
      headerId: "featureset",
      headerLabel: "Feature set",
      value: e.metadata?.name,
      className: "table-cell-2",
      handleClick: () => A(I, {
        featureSetData: {
          project: e.metadata?.project,
          name: e.metadata?.name,
          tag: e.metadata?.tag
        }
      }),
      expandedCellContent: {
        className: "table-cell-2",
        value: ""
      },
      rowExpanded: {
        handleClick: () => A(I, {
          featureSetData: {
            project: e.metadata?.project,
            name: e.metadata?.name,
            tag: e.metadata?.tag
          }
        })
      }
    },
    {
      id: `type.${e.ui.identifierUnique}`,
      headerId: "type",
      headerLabel: "Type",
      value: e.value_type,
      className: "table-cell-1"
    },
    {
      id: `entity.${e.ui.identifierUnique}.${l}`,
      headerId: "entities",
      headerLabel: "Entities",
      type: "labels",
      value: e.spec?.entities?.map((r) => r.name) || "",
      className: "table-cell-2"
    },
    {
      id: `description.${e.ui.identifierUnique}`,
      headerId: "description",
      headerLabel: "Description",
      value: e?.description ?? "",
      className: "table-cell-2"
    },
    {
      id: `labels.${e.ui.identifierUnique}.${l}`,
      headerId: "labels",
      headerLabel: "Labels",
      value: _(e.labels),
      className: l ? "table-cell-2" : "table-cell-3",
      type: "labels"
    },
    {
      id: `validator.${e.ui.identifierUnique}`,
      headerId: "validator",
      headerLabel: "Validator",
      value: /* @__PURE__ */ a.jsx(ce, { validator: e.validator }),
      className: "table-cell-2",
      type: "component",
      hidden: l
    },
    {
      id: `addFeature.${e.ui.identifierUnique}`,
      headerId: "addfeature",
      value: e.ui.type === "feature" && /* @__PURE__ */ a.jsx(Z, { feature: e }),
      className: "table-cell-1 align-right",
      type: "component",
      hidden: !l
    }
  ]
}), be = {
  nosql: {
    icon: /* @__PURE__ */ a.jsx(oe, {}),
    tooltip: "NoSql"
  },
  stream: {
    icon: /* @__PURE__ */ a.jsx(ue, {}),
    tooltip: "Stream"
  },
  tsdb: {
    icon: /* @__PURE__ */ a.jsx(he, {}),
    tooltip: "TSDB"
  }
}, ge = (e, l) => ({
  headerId: "targets",
  headerLabel: "Targets",
  value: (e ?? []).map(
    (d) => be[d.kind] ?? {
      icon: /* @__PURE__ */ a.jsx(ee, {}),
      tooltip: d.kind
    }
  ).sort((d, r) => d.tooltip < r.tooltip ? -1 : 1),
  id: `targets.${l}`,
  className: "targets-cell table-cell-2",
  type: "icons"
}), qe = (e, l, d, r) => ({
  data: {
    ...e
  },
  content: [
    {
      id: `key.${e.ui.identifierUnique}`,
      headerId: "name",
      headerLabel: "Name",
      value: e.name,
      className: "table-cell-name",
      getLink: (c) => f(e.name, e.tag, c) ? P(
        d,
        S,
        V,
        e.name,
        e.tag,
        c,
        e.uid
      ) : "",
      showTag: !0,
      showStatus: !0,
      expandedCellContent: {
        className: "table-cell-name",
        value: e.tag || E(e.uid),
        tooltip: e.tag || e.uid,
        showTag: !0,
        showStatus: !0
      },
      showExpandButton: r
    },
    {
      id: `description.${e.ui.identifierUnique}`,
      headerId: "description",
      headerLabel: "Description",
      value: e.description,
      className: "table-cell-3"
    },
    {
      id: `labels.${e.ui.identifierUnique}`,
      headerId: "labels",
      headerLabel: "Labels",
      value: _(e.labels),
      className: "table-cell-4",
      type: "labels"
    },
    {
      id: `version.${e.ui.identifierUnique}`,
      headerId: "tag",
      value: e.tag,
      className: "table-cell-2",
      type: "hidden"
    },
    {
      id: `entity.${e.ui.identifierUnique}`,
      headerId: "entities",
      headerLabel: "Entities",
      value: e.index_keys?.join(", ") ?? "",
      className: "table-cell-2"
    },
    {
      id: `updated.${e.ui.identifierUnique}`,
      headerId: "updated",
      headerLabel: "Updated",
      value: e.updated ? D(e.updated, "N/A") : "N/A",
      className: "table-cell-2",
      showTag: !0,
      showStatus: !0
    },
    {
      id: `uid.${e.ui.identifierUnique}`,
      headerId: "featurevectoruid",
      value: e.uid,
      className: "table-cell-2",
      type: "hidden"
    }
  ]
});
export {
  _e as F,
  me as S,
  Fe as a,
  qe as b,
  Te as c
};
//# sourceMappingURL=createFeatureStoreContent-BZntHXF_.mjs.map
