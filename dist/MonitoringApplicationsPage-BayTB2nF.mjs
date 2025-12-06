import { j as e, bu as x, i as F, e as N, bv as b, P as p, le as O, bY as A, $ as S, c as k, be as E, bE as _, bA as $, kz as T, ky as D, lf as I, V as g, lg as L, lh as B, f3 as G, ld as q, dG as j, aE as z, p as H } from "./main-CTYpZ6Nf.mjs";
import { useMemo as y, useRef as U, useCallback as M, useEffect as w } from "react";
import { Link as V, useParams as C, useNavigate as W, useSearchParams as Y, Outlet as J } from "react-router-dom";
import { useSelector as K, useDispatch as Q } from "react-redux";
import { A as X } from "./ActionBar-C8Jl3Xmo.mjs";
import { B as Z } from "./Breadcrumbs-DDXz9SNg.mjs";
import { a as f } from "./StatsCard-Cm7Pku2T.mjs";
import { f as tt } from "./measureTime-DGja8F60.mjs";
import { T as et } from "./TableTop-BzNlhhvf.mjs";
import { g as at } from "./MonitoringApplicationsPage.util-BwRAdgx-.mjs";
import { u as it } from "./Table-DB12oa-o.mjs";
import { S as st } from "./present-metrics-icon-BJGAfRxy.mjs";
const R = ({
  counterData: i,
  error: t = "",
  loading: o = !1,
  tip: s = "",
  title: n
}) => /* @__PURE__ */ e.jsxs(f, { className: "monitoring-stats", children: [
  /* @__PURE__ */ e.jsx(
    f.Header,
    {
      title: n,
      tip: s,
      iconClass: "stats-card__title-icon"
    }
  ),
  /* @__PURE__ */ e.jsx(f.Row, { children: i.map((a, l) => /* @__PURE__ */ e.jsx(f.Col, { children: /* @__PURE__ */ e.jsxs(
    x,
    {
      className: "data-ellipsis",
      hidden: !a.tooltipText,
      template: /* @__PURE__ */ e.jsx(b, { text: a.tooltipText }),
      children: [
        /* @__PURE__ */ e.jsxs(f.MainCounter, { id: `monitoring-app-${a.id}`, className: a.counterClassName, children: [
          o ? /* @__PURE__ */ e.jsx(F, { section: !0, small: !0, secondary: !0 }) : t || N.isNil(a.title) ? "N/A" : a.link ? /* @__PURE__ */ e.jsx(V, { className: "monitoring-stats__link", to: a.link, children: a.title }) : a.title,
          a.status && /* @__PURE__ */ e.jsx("i", { className: `state-${a.status}` })
        ] }),
        a.subtitle && /* @__PURE__ */ e.jsx("div", { "data-testid": `${a.id}_status`, className: "stats__status", children: /* @__PURE__ */ e.jsxs(
          x,
          {
            textShow: !!a.status,
            template: /* @__PURE__ */ e.jsx(b, { text: a.subtitle }),
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "stats__subtitle", children: a.subtitle }),
              a.subtitleStatus && /* @__PURE__ */ e.jsx("i", { className: `state-${a.subtitleStatus}` })
            ]
          }
        ) })
      ]
    }
  ) }, l)) })
] });
R.propTypes = {
  counterData: p.array.isRequired,
  error: p.oneOfType([p.object, p.string]),
  loading: p.bool,
  tip: p.string,
  title: p.string
};
const ot = (i, t) => {
  const {
    applicationsSummary: o,
    monitoringApplication: s,
    monitoringApplications: n,
    loading: a,
    error: l
  } = t, { ready: u, error: m } = O(
    n.applications
  ), c = [
    {
      id: "applicationsStatus",
      title: "Applications",
      counterData: [
        {
          id: "applications",
          title: l ? null : n.applications.length
        }
      ]
    },
    {
      id: "appsStatus",
      title: "Apps Status",
      counterData: [
        {
          id: A,
          title: u,
          tooltipText: "Running",
          subtitle: "Running",
          subtitleStatus: A
        },
        {
          id: S,
          counterClassName: k({
            stats__failed: m > 0
          }),
          title: m,
          tooltipText: "Error, Unhealthy",
          subtitle: "Failed",
          subtitleStatus: S
        }
      ]
    },
    {
      id: "endpointsStatus",
      title: "Endpoints",
      counterData: [
        {
          id: T,
          title: o.batch_model_endpoint_count,
          link: `/projects/${i.projectName}/${E}/${_}?${$}=${T}`,
          subtitle: "Batch"
        },
        {
          id: D,
          title: o.real_time_model_endpoint_count,
          link: `/projects/${i.projectName}/${E}/${_}?${$}=${D}`,
          subtitle: "Real-time"
        }
      ]
    },
    {
      id: "runningFrequencyStatus",
      title: "Running interval",
      counterData: [
        {
          id: "interval",
          title: l ? null : `Every ${tt(n.applications?.[0]?.base_period)}`
        }
      ]
    }
  ], d = N.isEmpty(s?.stats?.stream_stats) ? { committed: "N/A", lag: "N/A" } : Object.values(s.stats.stream_stats).reduce(
    (h, { committed: v, lag: P }) => (h.committed += v, h.lag += P, h),
    { committed: 0, lag: 0 }
  ), r = [
    {
      id: "appStatus",
      title: "App Status",
      counterData: [
        {
          id: "appStatus",
          title: N.capitalize(s.status),
          status: s.status
        }
      ]
    },
    {
      id: "endpoints",
      title: "Endpoints",
      tip: "Model endpoints processed by the monitoring app during the selected time frame",
      counterData: [
        { id: "endpoints", title: s?.stats?.processed_model_endpoints }
      ]
    },
    {
      id: "detections",
      title: "Detections",
      counterData: [{ id: "detections", title: s?.stats?.detected }]
    },
    {
      id: "possibleDetections",
      title: "Possible Detections",
      counterData: [
        { id: "possibleDetections", title: s?.stats?.potential_detection }
      ]
    },
    {
      id: "lag",
      title: "Lag",
      tip: "Number of messages currently waiting in the app's queue",
      counterData: [{ id: "lag", title: d.lag }]
    },
    {
      id: "commitedOffset",
      title: "Commited Offset",
      tip: "Total number of messages handled by the app",
      counterData: [{ id: "commitedOffset", title: d.committed }]
    }
  ];
  return i.name ? {
    content: r,
    loading: a,
    error: l
  } : {
    content: c,
    loading: o.loading || a,
    error: o.error
  };
}, nt = () => {
  const i = C(), t = K((s) => s.monitoringApplicationsStore), o = y(
    () => ot(i, t),
    [t, i]
  );
  return /* @__PURE__ */ e.jsx("div", { className: "monitoring-application__statistics-section", children: o.content.map((s, n) => /* @__PURE__ */ e.jsx(
    R,
    {
      counterData: s.counterData,
      loading: o.loading,
      error: o.error,
      isAlerts: s.isAlerts,
      title: s.title,
      tip: s.tip
    },
    s.id + n
  )) });
}, _t = () => {
  const i = Q(), t = C(), o = W(), s = y(() => at(), []), n = it(s), [, a] = Y(), l = U(null), u = M(
    (c, d) => {
      d || (i(I({ project: t.projectName })).unwrap().catch((r) => {
        g(i, r, "", "Failed to fetch applications summary");
      }), i(L({ project: t.projectName, filters: c })).unwrap().catch((r) => {
        g(i, r, "", "Failed to fetch monitoring applications");
      }), i(
        B({
          project: t.projectName,
          filters: c
        })
      ).unwrap().catch((r) => {
        g(
          i,
          r,
          "",
          "Failed to fetch Model Endpoints with suspected/detected issue"
        );
      }));
    },
    [i, t.projectName]
  ), m = M(
    (c, d) => {
      d || (i(
        G({
          project: t.projectName,
          filters: {
            ...c,
            labels: `mlrun/app-name=${t.name}`
          },
          config: { params: { page: 1, "page-size": 50, format: "minimal" } }
          // limit to 50 artifacts the same as we have on Artifacts page per 1 FE page to avoid overload
        })
      ).unwrap().catch((r) => {
        g(i, r, "", "Failed to fetch artifacts");
      }), i(
        q({
          project: t.projectName,
          functionName: t.name,
          filters: c
        })
      ).unwrap().catch((r) => {
        g(i, r, "", "Failed to fetch monitoring application"), o(
          `/projects/${t.projectName}/${j}${window.location.search}`,
          { replace: !0 }
        );
      }));
    },
    [i, o, t.name, t.projectName]
  );
  return w(() => {
    t.name ? m(n) : u(n);
  }, [t.name, u, m, n]), w(() => {
    l.current && l.current.scrollTo(0, 0);
  }, [t.name]), /* @__PURE__ */ e.jsxs("div", { className: "content-wrapper", children: [
    /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(Z, {}) }),
    /* @__PURE__ */ e.jsx("div", { className: "content monitoring-app-content", ref: l, children: /* @__PURE__ */ e.jsxs("div", { className: "content__action-bar-wrapper", children: [
      /* @__PURE__ */ e.jsx("span", { className: "monitoring-apps-title", children: t.name && /* @__PURE__ */ e.jsx(
        et,
        {
          link: `/projects/${t.projectName}/${j}/${z(window.location.search)}`,
          text: t.name
        }
      ) }),
      /* @__PURE__ */ e.jsx(
        X,
        {
          actionButtons: [
            {
              variant: H,
              label: "Application metrics",
              className: "action-button",
              hidden: !t.name,
              onClick: () => {
                o(
                  `/projects/${t.projectName}/${j}/${t.name}/${_}${window.location.search}`
                );
              },
              icon: /* @__PURE__ */ e.jsx(st, {})
            }
          ],
          filters: n,
          filtersConfig: s,
          handleRefresh: t.name ? m : u,
          setSearchParams: a,
          withRefreshButton: !0,
          withoutExpandButton: !0
        }
      ),
      /* @__PURE__ */ e.jsx(nt, {}),
      /* @__PURE__ */ e.jsx(J, {})
    ] }) })
  ] });
};
export {
  _t as default
};
//# sourceMappingURL=MonitoringApplicationsPage-BayTB2nF.mjs.map
