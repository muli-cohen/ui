import { c as G, dO as N, j as r, x as P, P as u, g as R, dP as j, an as i, az as k, aN as D, i as E } from "./main-CTYpZ6Nf.mjs";
import { useRef as O, useState as f, useMemo as m, useEffect as g } from "react";
import { useSelector as h, useDispatch as T } from "react-redux";
import { useParams as $, useOutletContext as y } from "react-router-dom";
import { N as F } from "./StatsCard-Cm7Pku2T.mjs";
import { P as M } from "./PageHeader-ClcGdvsO.mjs";
import { a as q } from "./clock-BFaispYx.mjs";
import { T as H, j as U } from "./Table-DB12oa-o.mjs";
const b = ({ content: o, rowItem: n }) => {
  const e = O(), a = G("table-row", "parent-row"), c = o.find(
    (s) => N(s, !0) === n.consumerGroup?.identifierUnique
  );
  return /* @__PURE__ */ r.jsx("tr", { className: a, ref: e, children: Object.values(n).map((s) => !s.hidden && /* @__PURE__ */ r.jsx(
    P,
    {
      cellData: s,
      item: c,
      link: s.getLink ? s.getLink?.() : ""
    },
    s.id
  )) });
};
b.propTypes = {
  content: u.arrayOf(u.object).isRequired,
  rowItem: u.object.isRequired
};
const _ = (o, n) => o.map((e) => {
  if (e) {
    const a = N(e);
    return {
      consumerGroup: {
        id: `consumerGroup.${a}`,
        value: e?.consumerGroup,
        className: "table-cell-1 text-bold",
        identifier: a,
        identifierUnique: a,
        getLink: () => `/projects/${n.projectName}/monitor/consumer-groups/${e.functionName}/${e.streamName}`
      },
      streamPath: {
        id: `streamPath.${a}`,
        value: e?.containerName + e?.streamPath,
        className: "table-cell-1"
      },
      realTimeFunction: {
        id: `realTimeFunction.${a}`,
        value: e.functionName,
        getLink: () => R(
          `/projects/${n.projectName}/functions/${e.functionName}`
        ),
        linkIsExternal: !0,
        className: "table-cell-1"
      }
    };
  }
  return {};
}), w = () => ({
  page: j,
  tableHeaders: [
    {
      headerId: "name",
      headerLabel: "Consumer group name",
      class: "table-cell-1"
    },
    {
      headerId: "path",
      headerLabel: "Stream Path",
      class: "table-cell-1"
    },
    {
      headerId: "functions",
      headerLabel: "Real time functions",
      class: "table-cell-1"
    }
  ]
}), W = () => {
  const [o, n] = f([]), e = h((t) => t.nuclioStore), a = $(), c = T(), s = h((t) => t.filtersStore), [l, S] = f({ [i]: "" }), [x] = y(), C = m(() => ({
    [i]: { label: "Name:" }
  }), []);
  g(() => {
    c(k({ groupBy: D }));
  }, [c]), g(() => {
    n(
      e.v3ioStreams.parsedData.filter(
        (t) => l[i] ? t.consumerGroup.toLowerCase().includes(l[i]) : !0
      )
    );
  }, [e.v3ioStreams.parsedData, l]);
  const p = m(() => w(), []), d = m(
    () => _(o, a),
    [o, a]
  ), v = (t) => {
    S({ [i]: t.toLowerCase() });
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      M,
      {
        title: "Consumer groups (v3io stream)",
        description: "This report displays the project's consumer groups for Iguazio v3io streams",
        backLink: `/projects/${a.projectName}/monitor`
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "page-actions", children: /* @__PURE__ */ r.jsx(
      q,
      {
        wrapperClassName: "search-input-wrapper",
        onChange: v,
        placeholder: "Search consumer groups...",
        value: l[i]
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      H,
      {
        actionsMenu: [],
        hideActionsMenu: !0,
        pageData: p,
        tableHeaders: p.tableHeaders,
        children: d.map((t, L) => /* @__PURE__ */ r.jsx(b, { content: d, rowItem: t }, L))
      }
    ),
    !e.v3ioStreams.loading && o.length === 0 && /* @__PURE__ */ r.jsx(
      F,
      {
        message: U(
          l,
          C,
          x || !e.v3ioStreams.parsedData?.length && "You haven’t created any consumer group yet",
          j,
          null,
          s
        )
      }
    ),
    e.v3ioStreams.loading && /* @__PURE__ */ r.jsx(E, {})
  ] });
};
export {
  W as default
};
//# sourceMappingURL=ConsumerGroups-CfzkYHbw.mjs.map
