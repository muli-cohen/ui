import { c as $, j as e, x as k, I as O, P as y, B as F, aR as C, g as I, cv as A, cq as T, i as S, dG as P, g_ as L, e as W, bE as H, li as q, lj as B } from "./main-CTYpZ6Nf.mjs";
import U, { memo as Y, useState as G, useRef as D, useMemo as x, useEffect as z } from "react";
import { useSelector as R, useDispatch as K } from "react-redux";
import { useParams as Q, useNavigate as J } from "react-router-dom";
import { f as V, M as X } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { N as w } from "./StatsCard-Cm7Pku2T.mjs";
import { M } from "./MonitoringApplicationsPage.util-BwRAdgx-.mjs";
import { S as Z } from "./SectionTable-S1UIgbYL.mjs";
import { T as ee } from "./Table-DB12oa-o.mjs";
import { S as te } from "./present-metrics-icon-BJGAfRxy.mjs";
const E = ({ actionsMenu: t, hideActionsMenu: a = !1, rowItem: n }) => {
  const o = $("table-row", "table-body-row", "parent-row", "application-table-row");
  return /* @__PURE__ */ e.jsx("tr", { className: o, children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    n.content.map((i, l) => !i.hidden && /* @__PURE__ */ e.jsx(
      k,
      {
        cellData: i,
        firstCell: l === 0,
        item: n.data,
        link: i.getLink?.(),
        onClick: i.handleClick
      },
      i.id
    )),
    !a && /* @__PURE__ */ e.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ e.jsx(O, { dataItem: n.data, withQuickActions: !0, menu: t }) })
  ] }) });
};
E.propTypes = {
  actionsMenu: F.isRequired,
  hideActionsMenu: y.bool,
  rowItem: y.object.isRequired
};
const se = U.memo(E), ae = (t, a) => {
  const n = [
    {
      value: "Name",
      className: "table-cell_big"
    },
    { value: "Status", className: "table-cell_small" },
    {
      value: "Updated",
      className: "table-cell_medium"
    },
    {
      value: "Lag",
      className: "table-cell_small",
      tip: "Number of messages currently waiting in the app's queue"
    },
    {
      value: "Commited offset",
      className: "table-cell_small",
      tip: "Total number of messages handled by the app"
    }
  ], o = t.map((i) => {
    const l = `${a}-${i.name.toLowerCase()}`.slice(0, 63);
    return {
      name: {
        value: i.name,
        href: I(`/projects/${a}/functions/${l}`),
        className: "table-cell_big"
      },
      status: {
        value: i.status,
        className: $("table-cell_small", "status", `state-${i.status}`)
      },
      updatedTime: {
        value: C(i.updated_time, "N/A"),
        className: "table-cell_medium"
      },
      lag: {
        value: i.stats.stream_stats.lag,
        className: "table-cell_small"
      },
      commitedOffset: {
        value: i.stats.stream_stats.committed,
        className: "table-cell_small"
      }
    };
  });
  return {
    header: n,
    body: o
  };
};
function ne(t, a, n) {
  const o = /* @__PURE__ */ new Map(), i = 1e3, l = "day", u = "hour", g = "minutes", v = (new Date(n) - new Date(a) - i) / (1e3 * 60 * 60), r = v > 72 ? l : v > 6 ? u : g, _ = (s) => {
    const p = new Date(s);
    if (r === u)
      p.setMinutes(0, 0, 0);
    else if (r === g) {
      const h = p.getMinutes(), f = Math.floor(h / 10) * 10;
      p.setMinutes(f, 0, 0);
    } else
      p.setHours(0, 0, 0, 0);
    return p;
  }, c = (s) => (r === u ? s.setHours(s.getHours() + 1) : r === g ? s.setMinutes(s.getMinutes() + 10) : s.setDate(s.getDate() + 1), s);
  for (const s = _(a); s.getTime() <= n; c(s))
    o.set(s.toISOString(), 0);
  t.forEach(([s, p]) => {
    const h = new Date(s);
    if (h >= a && h <= n) {
      const d = _(s).toISOString();
      o.set(d, o.get(d) + p);
    }
  });
  const N = (s, p) => {
    const h = A(s), f = A(s), d = r === g ? "hh:mm A" : r === u ? "MM/DD, hh:mm A" : "MM/DD/YY", j = "MM/DD/YY, hh:mm A";
    return f.add(r === g ? 10 : 1, r), {
      label: `${h.format(d)}`,
      fullDate: `${h.format(j)} - ${f.format(j)}`
    };
  }, m = Array.from(o.entries()), b = m.reduce(
    (s, [p, h], f) => {
      if (f === 0 && a > new Date(p))
        return s;
      const d = N(p);
      return s.values.push(h), s.labels.push(d.label), s.dates.push(d.fullDate), s;
    },
    { values: [], labels: [], dates: [] }
  );
  return b.values.length && n > new Date(m[m.length - 1][0]) && (b.values.pop(), b.labels.pop(), b.dates.pop()), b;
}
const ie = () => {
  const [t, a] = G(!0), n = D(), o = D(), i = D(), l = x(() => V(), []), {
    endpointsWithDetections: { data: u, loading: g, error: v }
  } = R((c) => c.monitoringApplicationsStore), r = x(() => {
    let c = 0, N = 0;
    return {
      id: "renderTracker",
      afterDatasetsDraw(m) {
        const b = m.scales.x.left, s = m.scales.y.height + 20;
        if ((b !== c || s !== N) && o.current && i.current) {
          c = b, N = s;
          const p = m.ctx.canvas, h = b * m.currentDevicePixelRatio, f = s * m.currentDevicePixelRatio, d = o.current.getContext("2d"), j = 32;
          d.canvas.width = h, d.canvas.height = f, d.canvas.style.width = `${m.currentDevicePixelRatio === 1 ? d.canvas.width : b}px`, d.canvas.style.height = `${m.currentDevicePixelRatio === 1 ? d.canvas.height : s}px`, d.drawImage(
            p,
            0,
            0,
            h,
            f,
            0,
            0,
            h,
            f
          ), i.current.style.width = `${b + (m.scales.x?.ticks?.length || 1) * j}px`;
        }
      }
    };
  }, []), _ = x(() => {
    const { labels: c, values: N, dates: m } = ne(
      u.values,
      u.start,
      u.end
    );
    return {
      ...l,
      options: {
        ...l.options,
        plugins: {
          ...l.options.plugins,
          renderTracker: {}
        },
        animation: {
          ...l.options.animation,
          onComplete: () => {
            a(!1);
          }
        }
      },
      data: {
        labels: c,
        datasets: [
          {
            data: N,
            dates: m,
            chartType: "bar",
            tension: 0.2,
            borderWidth: 2,
            backgroundColor: "#13bbb1",
            borderColor: "#13bbb1"
          }
        ]
      },
      plugins: [r]
    };
  }, [l, u, r]);
  return /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section-item", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "section-item_title", children: [
      /* @__PURE__ */ e.jsx("span", { children: "Model Endpoints with suspected/detected issue" }),
      /* @__PURE__ */ e.jsx(T, { text: "This chart displays the number of model endpoints that had at least one detected issue, in any monitoring application, in the relevant time period" })
    ] }),
    u.values?.length === 0 && !(t || g) ? /* @__PURE__ */ e.jsx(
      w,
      {
        message: v ? "Failed to fetch Model Endpoints with suspected/detected issue" : M
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "section-item_chart-wrapper", children: /* @__PURE__ */ e.jsxs("div", { className: "section-item_chart", children: [
      (t || g) && /* @__PURE__ */ e.jsx(S, { section: !0, secondary: !0 }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: $("section-item_chart-area", (t || g) && "loading"),
          children: [
            /* @__PURE__ */ e.jsx("canvas", { id: "chart-y-axis", ref: o, width: 0, height: 0 }),
            /* @__PURE__ */ e.jsx("div", { className: "section-item_ml-chart-wrapper", ref: i, children: /* @__PURE__ */ e.jsx(X, { config: _, chartRef: n }) }),
            /* @__PURE__ */ e.jsx("div", { className: "section-item_chart-area_x-axis-label", children: "Time range" })
          ]
        }
      )
    ] }) })
  ] });
}, oe = Y(ie), le = (t, a) => {
  const n = "identifierUnique." + t.name + t.application_class, o = `${a}-${t.name.toLowerCase()}`.slice(0, 63);
  return {
    data: {
      ...t,
      state: {
        value: t.status,
        className: `state-${t.status}`,
        label: W.capitalize(t.status)
      }
    },
    content: [
      {
        id: `key.${n}`,
        headerId: "name",
        headerLabel: "Name",
        value: t.name,
        className: "table-cell-name",
        getLink: () => `/projects/${a}/${P}/${t.name}${L(
          window.location.search,
          !0
        )}`
      },
      {
        id: `lag.${n}`,
        headerId: "lag",
        headerLabel: "Lag",
        tip: "Number of messages currently waiting in the app's queue",
        value: t.stats.stream_stats?.lag ?? 0,
        className: "table-cell-1"
      },
      {
        id: `commitedOffset.${n}`,
        headerId: "commitedOffset",
        tip: "Total number of messages handled by the app",
        headerLabel: "Commited offset",
        value: t.stats.stream_stats?.committed ?? 0,
        className: "table-cell-2"
      },
      {
        id: `detections.${n}`,
        headerId: "detections",
        headerLabel: "Detections",
        value: t.stats.detected,
        className: "table-cell-1"
      },
      {
        id: `possibleDetections.${n}`,
        headerId: "possibleDetections",
        headerLabel: "Possible detections",
        value: t.stats.potential_detection,
        className: "table-cell-2"
      },
      {
        id: `class.${n}`,
        headerId: "class",
        headerLabel: "Class",
        value: t.application_class,
        className: "table-cell-2"
      },
      {
        id: `updated.${n}`,
        headerId: "updated",
        headerLabel: "Updated",
        value: C(t.updated_time, "N/A"),
        className: "table-cell-2"
      },
      {
        id: `nuclioFunction.${n}`,
        headerId: "nuclioFunction",
        headerLabel: "Nuclio function",
        value: t.name,
        className: "table-cell-2",
        getLink: () => I(`/projects/${a}/functions/${o}`),
        linkIsExternal: !0,
        showStatus: !0
      }
    ]
  };
}, Ne = () => {
  const t = K(), a = Q(), n = J(), {
    monitoringApplications: { applications: o = [], operatingFunctions: i = [] },
    loading: l,
    error: u
  } = R((c) => c.monitoringApplicationsStore), g = x(
    () => [
      [],
      [
        {
          id: "open-metrics",
          label: "Open metrics",
          icon: /* @__PURE__ */ e.jsx(te, {}),
          onClick: (c) => n(
            `/projects/${a.projectName}/${P}/${c.name}/${H}${L(
              window.location.search,
              !0
            )}`
          )
        }
      ]
    ],
    [n, a.projectName]
  ), v = x(
    () => ae(i, a.projectName),
    [i, a.projectName]
  ), r = x(() => o.map(
    (c) => le(c, a.projectName)
  ), [o, a.projectName]), _ = x(
    () => r[0]?.content ?? [],
    [r]
  );
  return z(() => () => {
    t(q()), t(B());
  }, [t, a.projectName]), /* @__PURE__ */ e.jsxs("div", { className: "monitoring-apps", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section section_small", children: [
      /* @__PURE__ */ e.jsx(oe, {}),
      /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section-item", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "section-item_title", children: [
          /* @__PURE__ */ e.jsx("span", { children: "System functions" }),
          /* @__PURE__ */ e.jsx(T, { text: "System functions that are used for the monitoring application operation" })
        ] }),
        i.length === 0 && !l ? /* @__PURE__ */ e.jsx(
          w,
          {
            message: u ? "Failed to fetch monitoring applications" : M
          }
        ) : /* @__PURE__ */ e.jsx(Z, { loading: l, params: a, table: v })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "monitoring-app__section section_big", children: /* @__PURE__ */ e.jsxs("div", { className: "monitoring-app__section-item", children: [
      /* @__PURE__ */ e.jsx("div", { className: "section-item_title", children: /* @__PURE__ */ e.jsx("span", { children: "All Applications" }) }),
      o.length === 0 && !l ? /* @__PURE__ */ e.jsx(
        w,
        {
          message: u ? "Failed to fetch monitoring applications" : M
        }
      ) : l ? /* @__PURE__ */ e.jsx(S, { section: !0, secondary: !0 }) : /* @__PURE__ */ e.jsx(
        ee,
        {
          actionsMenu: g,
          pageData: {},
          tableClassName: "applications-table",
          tableHeaders: _,
          skipTableWrapper: !0,
          children: r.map((c, N) => /* @__PURE__ */ e.jsx(
            se,
            {
              actionsMenu: g,
              rowIndex: N,
              rowItem: c
            },
            N
          ))
        }
      )
    ] }) })
  ] });
};
export {
  Ne as default
};
//# sourceMappingURL=MonitoringApplications-DpmUSVZk.mjs.map
