import { aR as b, bb as v, e as g, lk as x, l2 as j, ll as f, lm as y, j as e, F as T, b1 as S, cq as u } from "./main-CTYpZ6Nf.mjs";
import { useMemo as n, useEffect as A } from "react";
import { useParams as E, Link as I } from "react-router-dom";
import { useDispatch as C, useSelector as h } from "react-redux";
import { N as c } from "./StatsCard-Cm7Pku2T.mjs";
import { S as o } from "./SectionTable-S1UIgbYL.mjs";
import { aD as L, aO as M } from "./Table-DB12oa-o.mjs";
import { M as r } from "./MonitoringApplicationsPage.util-BwRAdgx-.mjs";
const k = (m = []) => {
  const s = [
    {
      value: "Name",
      className: "table-cell_big"
    },
    { value: "Type", className: "table-cell_small" },
    { value: "Labels", className: "table-cell_big" },
    { value: "Producer", className: "table-cell_small" },
    { value: "Owner", className: "table-cell_small" },
    { value: "Updated", className: "table-cell_medium" },
    { value: "Size", className: "table-cell_small" }
  ], t = m.map((l) => ({
    name: {
      value: l.db_key,
      tag: l.tag,
      className: "table-cell_big table-cell_with-tag"
    },
    artifactType: {
      value: l.kind || "artifact",
      className: "table-cell_small"
    },
    labels: {
      value: v(l.labels),
      className: "table-cell_big"
    },
    producer: {
      value: l.producer.name,
      className: "table-cell_small"
    },
    owner: {
      value: l.producer.owner,
      className: "table-cell_small"
    },
    updated: {
      value: b(l.updated, "N/A"),
      className: "table-cell_medium"
    },
    size: {
      value: g.isNumber(l.size) && l.size >= 0 ? L(l.size) : "N/A",
      className: "table-cell_small"
    }
  }));
  return {
    header: s,
    body: t
  };
}, D = (m = []) => {
  let s = !1;
  const t = m.filter((a) => a.type === x).map((a) => {
    const i = M(a.status);
    return s = !a.time, {
      name: {
        value: a.result_name,
        className: "table-cell_medium"
      },
      kind: {
        value: a.kind,
        className: "table-cell_medium"
      },
      value: {
        value: a.value,
        className: "table-cell_medium"
      },
      time: {
        hidden: s,
        value: b(a.time, "N/A"),
        className: "table-cell_medium"
      },
      status: {
        value: i.value,
        className: "table-cell_small",
        tooltip: i.tooltip
      }
    };
  });
  return {
    header: [
      {
        value: "Name",
        className: "table-cell_medium"
      },
      { value: "Kind", className: "table-cell_medium" },
      { value: "Value (latest)", className: "table-cell_medium" },
      { value: "Time (latest result)", className: "table-cell_medium", hidden: s },
      { value: "Status", className: "table-cell_small" }
    ],
    body: t
  };
}, H = (m = []) => {
  let s = !1;
  const t = m.filter((a) => a.type === j).map((a) => (s = !a.time, {
    name: {
      value: a.metric_name,
      className: "table-cell_medium"
    },
    value: {
      value: a.value,
      className: "table-cell_medium"
    },
    time: {
      hidden: s,
      value: b(a.time, "N/A"),
      className: "table-cell_medium"
    }
  }));
  return {
    header: [
      {
        value: "Name",
        className: "table-cell_medium"
      },
      { value: "Value (latest)", className: "table-cell_medium" },
      { value: "Time (latest metric)", className: "table-cell_medium", hidden: s }
    ],
    body: t
  };
}, O = (m = {}) => {
  const s = [
    {
      value: "Name",
      className: "table-cell_medium"
    },
    {
      value: "Lag",
      tip: "Number of messages currently waiting in the app's queue",
      className: "table-cell_medium"
    },
    {
      value: "Commited offset",
      tip: "Total number of messages handled by the app",
      className: "table-cell_medium"
    }
  ], t = Object.entries(m).map(([l, a]) => ({
    name: {
      value: l,
      className: "table-cell_medium"
    },
    lag: {
      value: a.lag,
      className: "table-cell_medium"
    },
    commitedOffset: {
      value: a.committed,
      className: "table-cell_medium"
    }
  }));
  return {
    header: s,
    body: t
  };
}, q = () => {
  const m = C(), { artifacts: s } = h((d) => d.artifactsStore), { monitoringApplication: t, loading: l } = h((d) => d.monitoringApplicationsStore), a = E(), i = n(() => k(s), [s]), p = n(() => D(t?.stats?.metrics), [t?.stats?.metrics]), _ = n(() => H(t?.stats?.metrics), [t?.stats?.metrics]), N = n(() => O(t?.stats?.stream_stats), [t]);
  return A(() => () => {
    m(f()), m(y());
  }, [m, a.projectName]), /* @__PURE__ */ e.jsxs("div", { className: "monitoring-apps", children: [
    /* @__PURE__ */ e.jsx("div", { className: "monitoring-app__section", children: /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section-item", children: [
      /* @__PURE__ */ e.jsx("div", { className: "section-item_title", children: /* @__PURE__ */ e.jsx("span", { children: "Artifacts" }) }),
      s.length === 0 && !l ? /* @__PURE__ */ e.jsx(c, { message: r }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(o, { loading: l, params: a, table: i }),
        /* @__PURE__ */ e.jsx(
          I,
          {
            className: "link monitoring-app__see-all-link",
            to: `/projects/${a.projectName}/${T}?${S}=mlrun/app-name=${a.name}`,
            children: "See all"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section section_small", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section-item", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "section-item_title", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Results" }),
          /* @__PURE__ */ e.jsx(u, { text: "This table displays the values of the last results captured by the monitoring application. If there are results for more than one model endpoint at the same time, the table displays only one of those." })
        ] }),
        p.body.length === 0 && !l ? /* @__PURE__ */ e.jsx(c, { message: r }) : /* @__PURE__ */ e.jsx(o, { loading: l, params: a, table: p })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section-item", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "section-item_title", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Metrics" }),
          /* @__PURE__ */ e.jsx(u, { text: "This table displays the values of the last metrics captured by the monitoring application. If there are metrics for more than one model endpoint at the same time, the table displays only one of those." })
        ] }),
        _.body.length === 0 && !l ? /* @__PURE__ */ e.jsx(c, { message: r }) : /* @__PURE__ */ e.jsx(o, { loading: l, params: a, table: _ })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "monitoring-app__section section_small", children: /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section-item", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "section-item_title", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Shards/partitions status" }),
        /* @__PURE__ */ e.jsx(u, { text: "This table displays the current status of each shard" })
      ] }),
      N.body.length === 0 && !l ? /* @__PURE__ */ e.jsx(c, { message: r }) : /* @__PURE__ */ e.jsx(o, { loading: l, params: a, table: N })
    ] }) })
  ] });
};
export {
  q as default
};
//# sourceMappingURL=MonitoringApplication-Du8USbnl.mjs.map
