import { c as n, kM as j, j as e, e as R, x, z as A, bE as c, I as E, P as a, B as T } from "./main-CTYpZ6Nf.mjs";
import N, { useRef as k } from "react";
import { useParams as w } from "react-router-dom";
const l = ({
  actionsMenu: m,
  handleSelectItem: d = () => {
  },
  hideActionsMenu: b = !1,
  mainRowItemsCount: p = 1,
  rowItem: i,
  selectedItem: s,
  tab: u = ""
}) => {
  const f = k(), o = w(), _ = n(
    "table-row",
    "table-body-row",
    "parent-row",
    (s?.db_key || s?.spec?.model_name) && j(s, !0) === i.data.ui.identifierUnique && "table-row_active"
  );
  return /* @__PURE__ */ e.jsx("tr", { className: _, ref: f, children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    i.content.map((t, r) => {
      const h = n(
        !R.isEmpty(s) && r >= p && "table-body__cell_hidden"
      );
      return !t.hidden && /* @__PURE__ */ e.jsx(
        x,
        {
          className: h,
          cellData: t,
          firstCell: r === 0 && o.pageTab !== c,
          item: i.data,
          link: t.getLink?.(o.tab ?? A),
          onClick: t.handleClick,
          selectItem: d,
          selectedItem: s
        },
        t.id
      );
    }),
    !b && /* @__PURE__ */ e.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ e.jsx(
      E,
      {
        dataItem: i.data,
        withQuickActions: u !== c,
        menu: m
      }
    ) })
  ] }) });
};
l.propTypes = {
  actionsMenu: T.isRequired,
  handleSelectItem: a.func,
  hideActionsMenu: a.bool,
  mainRowItemsCount: a.number,
  rowItem: a.object.isRequired,
  selectedItem: a.object.isRequired,
  tab: a.string
};
const q = N.memo(l);
export {
  q as A
};
//# sourceMappingURL=ArtifactsTableRow-D8HBCM6c.mjs.map
