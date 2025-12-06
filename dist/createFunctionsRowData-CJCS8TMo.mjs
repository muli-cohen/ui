import { j as t, aQ as h, aj as n, aR as l, aS as o, aF as m } from "./main-CTYpZ6Nf.mjs";
import "react";
import { t as u } from "./Table-DB12oa-o.mjs";
const b = () => /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx("div", { className: "form-row", children: /* @__PURE__ */ t.jsx(h, { label: "Show untagged", name: n }) }) }), c = (e, d, a, r, s) => ({
  data: {
    ...e
  },
  content: [
    {
      id: `name.${e.ui.identifierUnique}`,
      headerId: a ? "hash" : "name",
      headerLabel: a ? "Hash" : "Name",
      value: a ? e.hash : e.name,
      className: "table-cell-name",
      getLink: (i) => s ? `/projects/${d}/functions/${e.name}${e.tag ? `/${e.tag}` : `@${e.hash}`}${`/${i}`}${window.location.search}` : `/projects/${d}/functions/${e.name}${a ? `/${m}` : ""}/${e.tag ? `:${e.tag}` : ""}@${e.hash}${`/${i}`}${window.location.search}`,
      expandedCellContent: {
        // todo [functionsWithPagination] remove this and showExpandButton in 1.9.0
        value: l(e.updated, "N/A"),
        className: "table-cell-name",
        type: "date",
        showTag: !0,
        showStatus: !0
      },
      showTag: !0,
      showSelectedUid: !0,
      showUpdatedDate: !0,
      showStatus: !0,
      showExpandButton: r
    },
    {
      id: `kind.${e.ui.identifierUnique}`,
      headerId: "kind",
      headerLabel: "Kind",
      value: e.type,
      className: "table-cell-small",
      type: "type",
      types: u
    },
    {
      id: `hash.${e.ui.identifierUnique}`,
      headerId: "hash",
      headerLabel: "Hash",
      value: e.hash,
      className: "table-cell-1",
      type: "hash",
      hidden: a
    },
    {
      id: `updated.${e.ui.identifierUnique}`,
      headerId: "updated",
      headerLabel: "Updated",
      value: l(e.updated, "N/A"),
      className: "table-cell-2",
      type: "date",
      showTag: !0,
      showStatus: !0
    },
    {
      id: `command.${e.ui.identifierUnique}`,
      headerId: "command",
      headerLabel: "Code Entry Point",
      value: e.command,
      className: "table-cell-2"
    },
    {
      id: `defaultHandler.${e.ui.identifierUnique}`,
      headerId: "defaultHandler",
      headerLabel: "Default handler",
      value: e.default_handler,
      className: "table-cell-2"
    },
    {
      id: `image.${e.ui.identifierUnique}`,
      headerId: "image",
      headerLabel: "Image",
      value: o(e),
      className: "table-cell-1"
    },
    {
      id: `description.${e.ui.identifierUnique}`,
      headerId: "description",
      headerLabel: "Description",
      value: e.description,
      className: "table-cell-2"
    },
    {
      id: `tag.${e.ui.identifierUnique}`,
      headerId: "tag",
      value: e.tag,
      type: "hidden"
    }
  ]
});
export {
  b as F,
  c
};
//# sourceMappingURL=createFunctionsRowData-CJCS8TMo.mjs.map
