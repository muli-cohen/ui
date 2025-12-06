import { c as D, dK as x, j as r, x as G, P as S, dL as C, an as c, dM as k, e as L, V as O, dN as P, y as T, c2 as V, i as F } from "./main-CTYpZ6Nf.mjs";
import { useRef as $, useState as p, useMemo as N, useEffect as f, useCallback as H } from "react";
import { useSelector as v, useDispatch as w } from "react-redux";
import { useParams as U } from "react-router-dom";
import { N as A } from "./StatsCard-Cm7Pku2T.mjs";
import { P as B } from "./PageHeader-ClcGdvsO.mjs";
import { a as I } from "./clock-BFaispYx.mjs";
import { T as _, j as K } from "./Table-DB12oa-o.mjs";
const E = ({ content: a, rowItem: s }) => {
  const o = $(), g = D("table-row", "parent-row"), d = a.find(
    (i) => x(i, !0) === s.shardLagId?.identifierUnique
  );
  return /* @__PURE__ */ r.jsx("tr", { className: g, ref: o, children: Object.values(s).map((i) => !i.hidden && /* @__PURE__ */ r.jsx(
    G,
    {
      cellData: i,
      item: d,
      link: i.getLink ? i.getLink?.() : ""
    },
    i.id
  )) });
};
E.propTypes = {
  content: S.arrayOf(S.object).isRequired,
  rowItem: S.object.isRequired
};
const z = (a) => a.map((s) => {
  if (s) {
    const o = x(s);
    return {
      shardLagId: {
        id: `shardLagId.${o}`,
        value: s.shardLagId,
        className: "table-cell-1",
        identifier: o,
        identifierUnique: o
      },
      lagMsgBehind: {
        id: `lagMsgBehind.${o}`,
        value: s.lag,
        className: "table-cell-1"
      },
      lastSequence: {
        id: `lastSequence.${o}`,
        value: s.current,
        className: "table-cell-1"
      },
      committedOffset: {
        id: `committedOffset.${o}`,
        value: s.committed,
        className: "table-cell-1"
      }
    };
  }
  return {};
}), J = () => ({
  page: C,
  tableHeaders: [
    {
      headerId: "name",
      headerLabel: "Shard/Partition name",
      class: "table-cell-1"
    },
    {
      headerId: "lag",
      headerLabel: "Lag (message behind)",
      class: "table-cell-1"
    },
    {
      headerId: "sequence",
      headerLabel: "Last sequence",
      class: "table-cell-1"
    },
    {
      headerId: "offset",
      headerLabel: "Committed offset",
      class: "table-cell-1"
    }
  ]
}), se = () => {
  const [a, s] = p([]), [o, g] = p(""), [d, i] = p([]), y = v((e) => e.filtersStore), t = v((e) => e.nuclioStore), [m, M] = p({ [c]: "" }), n = U(), u = w(), R = N(() => ({
    [c]: { label: "Name:" }
  }), []);
  f(() => {
    const e = t.v3ioStreams.parsedData.find(
      (l) => l.functionName === n.functionName && l.streamName === n.streamName
    );
    e && s(e);
  }, [t.v3ioStreams.parsedData, n.functionName, n.streamName]);
  const h = H(
    (e) => {
      const l = {
        consumerGroup: e.consumerGroup,
        containerName: e.containerName,
        streamPath: e.streamPath
      };
      g(""), u(k({ project: n.projectName, body: l }));
    },
    [u, n.projectName]
  );
  f(() => {
    L.isEmpty(a) || h(a);
  }, [a, h]), f(() => {
    i(
      t.v3ioStreamShardLags.parsedData.filter(
        (e) => m[c] ? e.shardLagId.toLowerCase().includes(m[c]) : !0
      )
    );
  }, [m, t.v3ioStreamShardLags.parsedData]), f(() => {
    !L.isEmpty(a) && t.v3ioStreamShardLags.error && (O(
      u,
      t.v3ioStreamShardLags.error,
      "Failed to fetch v3io stream shard lags",
      "",
      () => h(a),
      g
    ), u(P()));
  }, [a, u, t.v3ioStreamShardLags.error, h]);
  const b = N(() => J(), []), j = N(
    () => z(d),
    [d]
  ), q = (e) => {
    M({ [c]: e.toLowerCase() });
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    !L.isEmpty(a) && /* @__PURE__ */ r.jsx(
      B,
      {
        title: a.consumerGroup,
        description: a.streamName,
        backLink: `/projects/${n.projectName}/monitor/consumer-groups`
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "page-actions", children: [
      /* @__PURE__ */ r.jsx(
        I,
        {
          wrapperClassName: "search-input-wrapper",
          onChange: q,
          placeholder: "Search by shard name...",
          value: m[c]
        }
      ),
      /* @__PURE__ */ r.jsx(
        T,
        {
          onClick: () => h(a),
          tooltipText: "Refresh",
          id: "consumer-group-refresh",
          children: /* @__PURE__ */ r.jsx(V, {})
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(
      _,
      {
        actionsMenu: [],
        hideActionsMenu: !0,
        pageData: b,
        tableHeaders: b.tableHeaders,
        children: j.map((e, l) => /* @__PURE__ */ r.jsx(E, { content: j, rowItem: e }, l))
      }
    ),
    !t.v3ioStreams.loading && !t.v3ioStreamShardLags.loading && d.length === 0 && /* @__PURE__ */ r.jsx(
      A,
      {
        message: K(
          m,
          R,
          o,
          C,
          null,
          y
        )
      }
    ),
    (t.v3ioStreams.loading || t.v3ioStreamShardLags.loading) && /* @__PURE__ */ r.jsx(F, {})
  ] });
};
export {
  se as default
};
//# sourceMappingURL=ConsumerGroup-DLUbt-8X.mjs.map
