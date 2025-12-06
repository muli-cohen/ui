import { c as N, e as D, j as s, bu as O, i as j, bv as $, P as ts, bY as A, dq as es, dr as as, ds as os, aG as Y, dt as k, ak as S, $ as L, a0 as K, cu as ns, cx as C, ct as js, du as I, dv as hs, A as xs, dw as Ns, dx as F, dy as Ss, dz as fs, b3 as rs, dA as ls, aV as is, dB as cs, be as ds, dC as us, a$ as J, b4 as ms, dD as X, bF as U, dE as gs, dF as ks, dG as W, dH as V, bM as b, aX as vs, dI as Cs } from "./main-CTYpZ6Nf.mjs";
import y, { useMemo as f, useRef as g, useState as P } from "react";
import { useNavigate as T, useParams as w } from "react-router-dom";
import { S as z } from "./search-CsL7YQlT.mjs";
import { useSelector as R } from "react-redux";
import { a as n } from "./StatsCard-Cm7Pku2T.mjs";
import { g as As, S as G } from "./clock-BFaispYx.mjs";
import { S as ys } from "./alerts-DUEhWDHw.mjs";
import { P as Ts } from "./PageHeader-ClcGdvsO.mjs";
const H = ({ counterObject: t }) => {
  const i = N(
    "project-data-card__statistics-value",
    `statistics_${t.className}`,
    typeof t.value != "number" && "project-data-card__statistics-value_not-available"
  ), e = f(() => {
    if (!D.isNil(t.value) && isFinite(Number(t.value))) {
      const r = t.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (Number(t.value) < 999999)
        return {
          value: r
        };
      const d = Math.floor(t.value / 1e5) / 10;
      return {
        value: (d % 1 === 0 ? Math.floor(d) : d) + "M",
        tooltip: ` (${r})`
      };
    }
    return {
      value: t.value
    };
  }, [t.value]);
  return t.counterTooltip ? /* @__PURE__ */ s.jsxs(O, { template: /* @__PURE__ */ s.jsx($, { text: t.counterTooltip }), textShow: !0, children: [
    /* @__PURE__ */ s.jsx("div", { className: i, children: t.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      e.value ?? "N/A",
      /* @__PURE__ */ s.jsx(z, { className: "project-data-card__statistics-arrow" })
    ] }) }),
    /* @__PURE__ */ s.jsx("div", { className: "project-data-card__statistics-label", children: /* @__PURE__ */ s.jsxs("div", { className: "project-data-card__statistics-label", children: [
      /* @__PURE__ */ s.jsx("span", { children: t.label }),
      t.status && /* @__PURE__ */ s.jsx("i", { className: `state-${t.status}` })
    ] }) })
  ] }) : [
    /* @__PURE__ */ s.jsx("div", { className: i, children: t.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        O,
        {
          textShow: !!e.tooltip,
          template: /* @__PURE__ */ s.jsx($, { text: e.tooltip }),
          children: e.value ?? "N/A"
        }
      ),
      /* @__PURE__ */ s.jsx(z, { className: "project-data-card__statistics-arrow" })
    ] }) }, t.value + Math.random()),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "project-data-card__statistics-label",
        children: [
          /* @__PURE__ */ s.jsx("span", { children: t.label ?? "N/A" }),
          t.status && /* @__PURE__ */ s.jsx("i", { className: `state-${t.status}` })
        ]
      },
      t.label + Math.random()
    )
  ];
};
H.propTypes = {
  counterObject: ts.object.isRequired
};
const ps = ({ statistics: t }) => {
  const c = T(), i = (e, r) => {
    let d = {};
    [A, "workflows"].includes(r) ? d = {
      [S]: Y,
      [k]: r === "workflows" ? [A] : [A, es, as, os]
    } : r === L ? d = {
      [S]: C,
      [k]: [K, ns]
    } : r === js && (d = {
      [S]: C,
      [k]: [I]
    }), c(`${e.link}?${new URLSearchParams(d)}`);
  };
  return Object.keys(t).map((e, r) => /* @__PURE__ */ s.jsx("div", { className: "project-data-card__statistics-item", children: t[e].href ? /* @__PURE__ */ s.jsx(
    "a",
    {
      href: t[e].href,
      target: "_top",
      className: "project-data-card__statistics-link",
      children: /* @__PURE__ */ s.jsx(H, { counterObject: t[e] })
    }
  ) : t[e].link ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "project-data-card__statistics-link",
      onClick: () => i(t[e], e),
      children: /* @__PURE__ */ s.jsx(H, { counterObject: t[e] })
    }
  ) : /* @__PURE__ */ s.jsx("div", { className: "project-data-card__statistics-data", children: /* @__PURE__ */ s.jsx(H, { counterObject: t[e] }) }) }, e + r));
};
ps.propTypes = {
  statistics: ts.object.isRequired
};
const Qs = y.memo(ps), Zs = (t, c) => {
  const i = (e) => D.chain(e).filter((r) => D.has(r, c)).uniqBy(c).value();
  return D.isEmpty(t.data) ? i(t) : { data: i(t.data) };
}, ws = (t, c, i) => {
  const e = (r = {}) => {
    c(i === "*" ? `/projects/${i}/${hs}?${new URLSearchParams(r)}` : `/projects/${i}/${xs}?${new URLSearchParams(r)}`);
  };
  return {
    total: {
      counter: t.total ?? "N/A",
      link: () => e({})
    },
    job: {
      counter: t.jobs ?? "N/A",
      link: () => e({ [F]: fs })
    },
    endpoints: {
      counter: t.endpoint ?? "N/A",
      link: () => e({ [F]: Ss })
    },
    application: {
      counter: t.application ?? "N/A",
      link: () => e({ [F]: Ns })
    }
  };
}, Q = "In process", q = "Failed", Z = "Succeeded", ss = "Running", M = (t, c, i, e) => {
  const r = (m, p) => N("stats__line", m && "stats__link"), d = (m) => N(m && "stats__link"), a = (m, p) => {
    m && c(`/projects/${m}/${p}`);
  }, _ = (m = {}) => {
    c(e ? `/projects/${e}/jobs/${i}?${new URLSearchParams(m)}` : `/projects/*/${gs}/${i}?${new URLSearchParams(m)}`);
  };
  return i === rs ? {
    total: {
      counter: t.total ?? "N/A",
      link: () => _({
        [k]: [U],
        [S]: C
      })
    },
    counters: [
      {
        counter: t.running ?? "N/A",
        className: N("stats__link", "stats__line"),
        link: () => _({
          [k]: [
            A,
            es,
            as,
            os
          ],
          [S]: Y
        }),
        statusClass: A,
        tooltip: "Aborting, Pending, Pending retry, Running",
        label: Q
      },
      {
        counter: t.failed ?? "N/A",
        className: N("stats__link", "stats__line"),
        link: () => _({
          [k]: [K, ns],
          [S]: C
        }),
        statusClass: L,
        tooltip: "Aborted, Error",
        label: q,
        counterClassName: N({
          stats__failed: t.failed > 0
        })
      },
      {
        counter: t.completed ?? "N/A",
        className: N("stats__link", "stats__line"),
        link: () => _({
          [k]: [I],
          [S]: C
        }),
        statusClass: I,
        tooltip: "Completed",
        label: Z
      }
    ]
  } : [ls, is].includes(i) ? {
    total: {
      counter: t.total ?? "N/A",
      link: () => _({
        [k]: [U],
        [S]: C
      })
    },
    counters: [
      {
        counter: t.running ?? "N/A",
        link: () => _({
          [k]: [A, ks],
          [S]: Y
        }),
        className: N("stats__link", "stats__line"),
        statusClass: A,
        tooltip: "Running, Terminating",
        label: Q
      },
      {
        counter: t.failed ?? "N/A",
        className: N("stats__link", "stats__line"),
        link: () => _({
          [k]: [K, L],
          [S]: C
        }),
        statusClass: L,
        tooltip: "Error, Failed",
        label: q,
        counterClassName: N({
          stats__failed: t.failed > 0
        })
      },
      {
        counter: t.completed ?? "N/A",
        className: N("stats__link", "stats__line"),
        link: () => _({
          [k]: [I],
          [S]: C
        }),
        statusClass: I,
        tooltip: "Completed",
        label: Z
      }
    ]
  } : i === cs ? {
    total: {
      counter: t.total ?? "N/A"
    },
    datasets: {
      counter: t.datasets ?? "N/A",
      link: () => a(e, "datasets"),
      className: r(e)
    },
    documents: {
      counter: t.documents ?? "N/A",
      link: () => a(e, "documents"),
      className: r(e)
    },
    llm_prompt: {
      counter: t.llm_prompts ?? "N/A",
      link: () => a(e, "llm-prompts"),
      className: r(e)
    },
    files: {
      counter: t.files ?? "N/A",
      link: () => a(e, "files"),
      className: r(e)
    },
    list: [
      { key: "datasets", label: "Datasets" },
      { key: "documents", label: "Documents" },
      { key: "llm_prompt", label: "LLM prompt artifacts" },
      { key: "files", label: "Other artifacts" }
    ]
  } : i === ds ? {
    models: {
      counter: t ?? "N/A",
      link: () => a(e, "models"),
      className: d(e)
    }
  } : i === us ? {
    total: {
      counter: t.total ?? "N/A",
      link: () => a(e, W),
      className: `stats__counter_total ${d(e)}`
    },
    counters: [
      {
        counter: t.running ?? "N/A",
        className: N(e && "stats__link"),
        link: () => a(e, W),
        statusClass: A,
        label: ss,
        popUpClassName: N({ "card-popup_text_link": e }),
        tooltip: ss
      },
      {
        counter: t.failed ?? "N/A",
        className: N(e && "stats__link", {
          stats__failed: t.failed > 0
        }),
        link: () => a(e, W),
        statusClass: L,
        label: q,
        popUpClassName: N({ "card-popup_text_link": e }),
        tooltip: "Error, Unhealthy"
      }
    ]
  } : {
    total: {
      counter: t.total ?? "N/A",
      link: () => _({
        [J]: U,
        [S]: V
      })
    },
    jobs: {
      counter: t.jobs ?? "N/A",
      link: () => _({
        [J]: As(ms).filter(
          (m) => m.id !== X && m.id !== U && !m.hidden
        ).map((m) => m.id).join(","),
        [S]: V
      })
    },
    workflows: {
      counter: t.workflows ?? "N/A",
      link: () => _({
        [J]: X,
        [S]: V
      })
    }
  };
}, B = (t = []) => t.every((c) => typeof c != "number") ? "N/A" : t.reduce((c, i) => c + (typeof i == "number" ? i : 0), 0), Rs = () => {
  const t = g(null), c = g(null), [i, e] = P(!1), { projectName: r } = w(), d = T(), a = R((u) => u.projectStore), _ = () => {
    const u = !c.current?.offsetParent;
    e(u);
  }, m = () => {
    e(!1);
  }, p = f(() => {
    const u = r || "*";
    if (u !== "*") {
      const h = a?.projectSummary?.data?.endpoint_alerts_count, x = a?.projectSummary?.data?.job_alerts_count, v = a?.projectSummary?.data?.other_alerts_count;
      return {
        projectName: u,
        data: {
          endpoint: h,
          jobs: x,
          application: v,
          total: B([h, x, v])
        }
      };
    }
    return {
      projectName: u,
      data: D.defaults({}, a?.jobsMonitoringData?.alerts)
    };
  }, [
    r,
    a?.jobsMonitoringData?.alerts,
    a?.projectSummary?.data?.endpoint_alerts_count,
    a?.projectSummary?.data?.job_alerts_count,
    a?.projectSummary?.data?.other_alerts_count
  ]), o = f(
    () => ws(p.data, d, p.projectName),
    [d, p]
  ), l = N(
    "monitoring-stats",
    "alerts-card",
    p.data.total && "alerts-card_not-empty"
  );
  return /* @__PURE__ */ s.jsx(n, { className: l, children: /* @__PURE__ */ s.jsxs("div", { ref: t, children: [
    /* @__PURE__ */ s.jsx(n.Header, { title: "Alerts", icon: /* @__PURE__ */ s.jsx(ys, {}), iconClass: "stats-card__title-icon", children: /* @__PURE__ */ s.jsxs("div", { className: "project-card__info", children: [
      /* @__PURE__ */ s.jsx(G, { className: "project-card__info-icon" }),
      /* @__PURE__ */ s.jsx("span", { children: "Last 24 hrs" })
    ] }) }),
    /* @__PURE__ */ s.jsxs("div", { onMouseEnter: _, onMouseLeave: m, children: [
      /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsx(
        n.MainCounter,
        {
          className: "stats__link",
          id: "alerts_total_counter",
          onClick: o?.total?.link,
          children: a?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o.total?.counter?.toLocaleString?.()
        }
      ) }),
      /* @__PURE__ */ s.jsx(n.Col, {}),
      /* @__PURE__ */ s.jsxs("div", { ref: c, className: "stats__details", children: [
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            onClick: o.endpoints.link,
            className: "stats__line stats__link",
            "data-testid": "alerts_endpoints_counter",
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "Endpoint" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: a?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o.endpoints?.counter?.toLocaleString?.() })
            ]
          }
        ) }),
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "stats__line stats__link",
            "data-testid": "alerts_job_counter",
            onClick: o?.job?.link,
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "Jobs" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: a?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o.job?.counter?.toLocaleString?.() })
            ]
          }
        ) }),
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            onClick: o.application.link,
            className: "stats__line stats__link",
            "data-testid": "alerts_application_counter",
            children: [
              /* @__PURE__ */ s.jsx("div", { className: "stats__subtitle", children: "Application" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: a.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o.application?.counter?.toLocaleString?.() })
            ]
          }
        ) })
      ] }),
      i && /* @__PURE__ */ s.jsx(
        b,
        {
          className: "card-popup",
          customPosition: {
            element: t,
            position: "bottom-right"
          },
          headerIsHidden: !0,
          children: /* @__PURE__ */ s.jsxs("div", { className: "card-popup_text", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "card-popup_text_link", onClick: o?.endpoints?.link, children: [
              "Endpoint: ",
              o.endpoints?.counter
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "card-popup_text_link", onClick: o?.job?.link, children: [
              "Jobs: ",
              o.job?.counter
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "card-popup_text_link", onClick: o?.application?.link, children: [
              "Application: ",
              o.application?.counter
            ] })
          ] })
        }
      )
    ] })
  ] }) });
}, Es = y.memo(Rs), bs = () => {
  const t = g(null), c = g(null), [i, e] = P(!1), { projectName: r } = w(), d = T(), a = R((l) => l.projectStore), _ = () => {
    const l = !c.current?.offsetParent;
    e(l);
  }, m = () => {
    e(!1);
  }, p = f(() => {
    if (r) {
      const l = a.projectSummary.data?.running_model_monitoring_functions || 0, u = a.projectSummary.data?.failed_model_monitoring_functions || 0;
      return {
        running: l,
        failed: u,
        total: l + u
      };
    }
    return a.jobsMonitoringData?.monitoring_app || {
      running: 0,
      failed: 0,
      total: 0
    };
  }, [
    r,
    a.projectSummary.data?.running_model_monitoring_functions,
    a.projectSummary.data?.failed_model_monitoring_functions,
    a.jobsMonitoringData?.monitoring_app
  ]), o = f(
    () => M(p, d, us, r),
    [p, d, r]
  );
  return /* @__PURE__ */ s.jsx(n, { className: "monitoring-stats application-card", children: /* @__PURE__ */ s.jsxs("div", { ref: t, children: [
    /* @__PURE__ */ s.jsx(n.Header, { title: "Monitoring apps" }),
    /* @__PURE__ */ s.jsxs("div", { onMouseEnter: _, onMouseLeave: m, children: [
      /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsx(
        n.MainCounter,
        {
          className: o.total.className,
          id: "application_total_counter",
          onClick: o?.total?.link,
          children: a.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o?.total?.counter?.toLocaleString()
        }
      ) }),
      /* @__PURE__ */ s.jsx("div", { ref: c, className: "stats__details", children: /* @__PURE__ */ s.jsx(n.Row, { children: o.counters.map(
        ({ counter: l, className: u, label: h, statusClass: x, link: v, tooltip: E }) => /* @__PURE__ */ s.jsxs("div", { className: "stats-card__col", children: [
          /* @__PURE__ */ s.jsx(
            n.MainCounter,
            {
              id: `app_${x}_counter`,
              className: u,
              onClick: v,
              children: a?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : l.toLocaleString()
            }
          ),
          /* @__PURE__ */ s.jsx(O, { textShow: !0, template: /* @__PURE__ */ s.jsx($, { text: E }), children: /* @__PURE__ */ s.jsxs("div", { className: "stats", children: [
            /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: h }),
            /* @__PURE__ */ s.jsx("i", { className: `state-${x}` })
          ] }) })
        ] }, `${x}-app`)
      ) }) }),
      i && /* @__PURE__ */ s.jsx(
        b,
        {
          className: "card-popup",
          customPosition: {
            element: t,
            position: "bottom-right"
          },
          headerIsHidden: !0,
          children: /* @__PURE__ */ s.jsx("div", { className: "card-popup_text", children: o?.counters?.map(
            ({ link: l, counter: u, label: h, statusClass: x, popUpClassName: v }) => /* @__PURE__ */ s.jsxs("div", { onClick: l, children: [
              /* @__PURE__ */ s.jsx("i", { className: `state-${x}` }),
              " ",
              /* @__PURE__ */ s.jsxs("span", { className: v, children: [
                h,
                ": ",
                u
              ] })
            ] }, h)
          ) })
        }
      )
    ] })
  ] }) });
}, Ps = y.memo(bs), Ms = () => {
  const t = g(null), c = g(null), [i, e] = P(!1), { projectName: r } = w(), d = T(), a = R((l) => l.projectStore), _ = () => {
    const l = !c.current?.offsetParent;
    e(l);
  }, m = () => {
    e(!1);
  }, p = f(() => {
    if (r) {
      const l = a?.projectSummary?.data?.llm_prompts_count, u = a?.projectSummary?.data?.files_count, h = a?.projectSummary?.data?.documents_count, x = a?.projectSummary?.data?.datasets_count;
      return {
        llm_prompts: l,
        files: u,
        documents: h,
        datasets: x,
        total: B([l, u, x, h])
      };
    }
    return a.jobsMonitoringData.artifacts || {};
  }, [r, a.jobsMonitoringData.artifacts, a.projectSummary.data]), o = f(
    () => M(p, d, cs, r),
    [p, d, r]
  );
  return /* @__PURE__ */ s.jsx(n, { className: "monitoring-stats", children: /* @__PURE__ */ s.jsxs("div", { ref: t, children: [
    /* @__PURE__ */ s.jsx(n.Header, { title: "Artifacts" }),
    /* @__PURE__ */ s.jsxs("div", { onMouseEnter: _, onMouseLeave: m, children: [
      /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsx(n.MainCounter, { id: "artifacts_total_counter", children: a.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o?.total?.counter?.toLocaleString() }) }),
      /* @__PURE__ */ s.jsxs("div", { ref: c, className: "stats__details", children: [
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: o?.datasets?.className,
            "data-testid": "artifacts_datasets_counter",
            onClick: o?.datasets?.link,
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "Datasets" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: a.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o?.datasets.counter?.toLocaleString() })
            ]
          }
        ) }),
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            "data-testid": "artifacts_documents_counter",
            className: o?.documents?.className,
            onClick: o?.documents?.link,
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "Documents" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: a.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o?.documents?.counter?.toLocaleString() })
            ]
          }
        ) }),
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            "data-testid": "artifacts_llm_counter",
            className: o.llm_prompt.className,
            onClick: o.llm_prompt.link,
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "LLM prompt artifacts" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: a.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o?.llm_prompt?.counter?.toLocaleString() })
            ]
          }
        ) }),
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            "data-testid": "artifacts_other_counter",
            className: o?.files?.className,
            onClick: o?.files?.link,
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "Other artifacts" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: a.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o?.files?.counter?.toLocaleString() })
            ]
          }
        ) })
      ] }),
      i && /* @__PURE__ */ s.jsx(
        b,
        {
          className: "card-popup",
          customPosition: {
            element: t,
            position: "bottom-right"
          },
          headerIsHidden: !0,
          children: /* @__PURE__ */ s.jsx("div", { className: "card-popup_text", children: o.list.map((l) => /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: N({ "card-popup_text_link": r }),
              onClick: o[l.key].link,
              children: [
                l.label,
                ": ",
                o[l.key].counter.toLocaleString()
              ]
            },
            l.key
          )) })
        }
      )
    ] })
  ] }) });
}, Ls = y.memo(Ms), Is = () => {
  const t = R((d) => d.projectStore), { projectName: c } = w(), i = T(), e = c ? t.projectSummary.data?.models_count : t.jobsMonitoringData?.models?.total, r = f(
    () => M(e, i, ds, c),
    [e, i, c]
  );
  return /* @__PURE__ */ s.jsxs(n, { className: "monitoring-stats", children: [
    /* @__PURE__ */ s.jsx(n.Header, { title: "Models" }),
    /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsx(
      n.MainCounter,
      {
        className: r?.models?.className,
        id: "models_total_counter",
        onClick: r.models.link,
        children: t?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : r?.models?.counter?.toLocaleString()
      }
    ) })
  ] });
}, Ds = y.memo(Is), Os = () => {
  const t = g(null), c = g(null), [i, e] = P(!1), r = T(), d = R((p) => p.projectStore), a = () => {
    const p = !c.current?.offsetParent;
    e(p);
  }, _ = () => {
    e(!1);
  }, m = f(
    () => M(
      d.jobsMonitoringData.jobs,
      r,
      rs
    ),
    [r, d.jobsMonitoringData.jobs]
  );
  return /* @__PURE__ */ s.jsx(n, { className: "monitoring-stats", children: /* @__PURE__ */ s.jsxs("div", { ref: t, children: [
    /* @__PURE__ */ s.jsx(
      n.Header,
      {
        title: "Runs",
        tip: "Number of Job runs, clicking on the counters navigates to jobs screen.",
        children: /* @__PURE__ */ s.jsxs("div", { className: "project-card__info", children: [
          /* @__PURE__ */ s.jsx(G, { className: "project-card__info-icon" }),
          /* @__PURE__ */ s.jsx("span", { children: "Last 24 hrs" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { onMouseLeave: _, onMouseEnter: a, children: [
      /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsx(
        n.MainCounter,
        {
          className: "stats__link",
          id: "scheduled_total_counter",
          onClick: m.total.link,
          children: d.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : m.total.counter.toLocaleString()
        }
      ) }),
      /* @__PURE__ */ s.jsx("div", { ref: c, className: "stats__details", children: m?.counters?.map(
        ({ counter: p, className: o, counterClassName: l, label: u, link: h, statusClass: x, tooltip: v }) => /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: o,
            onClick: h,
            "data-testid": `run_${x}_counter`,
            children: [
              /* @__PURE__ */ s.jsx("div", { "data-testid": `run_${x}_status`, className: "stats__status", children: /* @__PURE__ */ s.jsxs(O, { textShow: !0, template: /* @__PURE__ */ s.jsx($, { text: v }), children: [
                /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: u }),
                /* @__PURE__ */ s.jsx("i", { className: `state-${x}` })
              ] }) }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { className: l, children: d?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : p.toLocaleString() })
            ]
          }
        ) }, `${x}-runs`)
      ) }),
      i && /* @__PURE__ */ s.jsx(
        b,
        {
          className: "card-popup",
          customPosition: {
            element: t,
            position: "bottom-right"
          },
          headerIsHidden: !0,
          children: /* @__PURE__ */ s.jsx("div", { className: "card-popup_text", children: m?.counters?.map(({ link: p, counter: o, label: l, statusClass: u }) => /* @__PURE__ */ s.jsxs("div", { onClick: p, children: [
            /* @__PURE__ */ s.jsx("i", { className: `state-${u}` }),
            " ",
            /* @__PURE__ */ s.jsxs("span", { className: "card-popup_text_link", children: [
              l,
              ": ",
              o
            ] })
          ] }, l)) })
        }
      )
    ] })
  ] }) });
}, $s = y.memo(Os), Us = () => {
  const t = T(), { projectName: c } = w(), i = R((l) => l.projectStore), [e, r] = P(!1), d = g(null), a = g(null), _ = () => {
    const l = !a.current?.offsetParent;
    r(l);
  }, m = () => {
    r(!1);
  }, p = f(() => {
    if (c) {
      const l = i.projectSummary?.data?.distinct_scheduled_jobs_pending_count, u = i.projectSummary?.data?.distinct_scheduled_pipelines_pending_count;
      return {
        jobs: l,
        workflows: u,
        total: B([l, u])
      };
    }
    return i?.jobsMonitoringData.scheduled || {};
  }, [
    c,
    i.projectSummary?.data?.distinct_scheduled_jobs_pending_count,
    i.projectSummary?.data?.distinct_scheduled_pipelines_pending_count,
    i.jobsMonitoringData?.scheduled
  ]), o = f(
    () => M(
      p,
      t,
      c ? vs : ms,
      c
    ),
    [t, c, p]
  );
  return /* @__PURE__ */ s.jsx(n, { className: "monitoring-stats", children: /* @__PURE__ */ s.jsxs("div", { ref: d, children: [
    /* @__PURE__ */ s.jsx(n.Header, { title: "Scheduled", children: /* @__PURE__ */ s.jsxs("div", { className: "project-card__info", children: [
      /* @__PURE__ */ s.jsx(G, { className: "project-card__info-icon" }),
      /* @__PURE__ */ s.jsx("span", { children: "Next 24 hrs" })
    ] }) }),
    /* @__PURE__ */ s.jsxs("div", { onMouseEnter: _, onMouseLeave: m, children: [
      /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsx(
        n.MainCounter,
        {
          className: "stats__link",
          id: "scheduled_total_counter",
          onClick: o?.total?.link,
          children: i?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o.total.counter
        }
      ) }),
      /* @__PURE__ */ s.jsxs("div", { ref: a, className: "stats__details", children: [
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "stats__link stats__line",
            onClick: o?.jobs?.link,
            "data-testid": "scheduled_jobs_counter",
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "Jobs" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: i.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o.jobs.counter.toLocaleString() })
            ]
          }
        ) }),
        /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "stats__link stats__line",
            onClick: o.workflows.link,
            "data-testid": "scheduled_workflows_counter",
            children: [
              /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: "Workflows" }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { children: i.projectsSummary.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o.workflows.counter.toLocaleString() })
            ]
          }
        ) })
      ] }),
      e && /* @__PURE__ */ s.jsx(
        b,
        {
          className: "card-popup",
          customPosition: {
            element: d,
            position: "bottom-right"
          },
          headerIsHidden: !0,
          children: /* @__PURE__ */ s.jsxs("div", { className: "card-popup_text", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "card-popup_text_link", onClick: o.jobs.link, children: [
              "Jobs: ",
              o.jobs.counter
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "card-popup_text_link", onClick: o.workflows.link, children: [
              "Workflows: ",
              o.workflows.counter
            ] })
          ] })
        }
      )
    ] })
  ] }) });
}, Hs = y.memo(Us), Gs = () => {
  const t = g(null), c = g(null), [i, e] = P(!1), { projectName: r } = w(), d = T(), a = R((l) => l.projectStore), _ = () => {
    const l = !c.current?.offsetParent;
    e(l);
  }, m = () => {
    e(!1);
  }, p = f(() => {
    if (r) {
      const l = a?.projectSummary.data?.pipelines_completed_recent_count, u = a?.projectSummary.data?.pipelines_failed_recent_count, h = a?.projectSummary.data?.pipelines_running_count;
      return {
        completed: l,
        failed: u,
        running: h,
        total: B([l, u, h])
      };
    }
    return a.jobsMonitoringData.workflows || {};
  }, [
    r,
    a.projectSummary.data?.pipelines_completed_recent_count,
    a.projectSummary.data?.pipelines_failed_recent_count,
    a.projectSummary.data?.pipelines_running_count,
    a.jobsMonitoringData.workflows
  ]), o = f(
    () => M(
      p,
      d,
      r ? is : ls,
      r
    ),
    [d, r, p]
  );
  return /* @__PURE__ */ s.jsx(n, { className: "monitoring-stats", children: /* @__PURE__ */ s.jsxs("div", { ref: t, children: [
    /* @__PURE__ */ s.jsx(n.Header, { title: "Workflows", children: /* @__PURE__ */ s.jsxs("div", { className: "project-card__info", children: [
      /* @__PURE__ */ s.jsx(G, { className: "project-card__info-icon" }),
      /* @__PURE__ */ s.jsx("span", { children: "Last 24 hrs" })
    ] }) }),
    /* @__PURE__ */ s.jsxs("div", { onMouseLeave: m, onMouseEnter: _, children: [
      /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsx(
        n.MainCounter,
        {
          className: "stats__link",
          id: "wf_total_counter",
          onClick: o?.total?.link,
          children: a?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : o?.total?.counter?.toLocaleString()
        }
      ) }),
      /* @__PURE__ */ s.jsx("div", { ref: c, className: "stats__details", children: o.counters.map(
        ({ counter: l, className: u, counterClassName: h, label: x, link: v, statusClass: E, tooltip: _s }) => /* @__PURE__ */ s.jsx(n.Row, { children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: u,
            onClick: v,
            "data-testid": `wf_${E}_counter`,
            children: [
              /* @__PURE__ */ s.jsx("div", { "data-testid": `wf_${E}_status`, className: "stats__status", children: /* @__PURE__ */ s.jsxs(O, { textShow: !0, template: /* @__PURE__ */ s.jsx($, { text: _s }), children: [
                /* @__PURE__ */ s.jsx("h6", { className: "stats__subtitle", children: x }),
                /* @__PURE__ */ s.jsx("i", { className: `state-${E}` })
              ] }) }),
              /* @__PURE__ */ s.jsx(n.SecondaryCounter, { className: h, children: a?.projectsSummary?.loading ? /* @__PURE__ */ s.jsx(j, { section: !0, small: !0, secondary: !0 }) : l?.toLocaleString() })
            ]
          }
        ) }, `${E}-jobs`)
      ) }),
      i && /* @__PURE__ */ s.jsx(
        b,
        {
          className: "card-popup",
          customPosition: {
            element: t,
            position: "bottom-right"
          },
          headerIsHidden: !0,
          children: /* @__PURE__ */ s.jsx("div", { className: "card-popup_text", children: o?.counters?.map(({ link: l, counter: u, label: h, statusClass: x }) => /* @__PURE__ */ s.jsxs("div", { onClick: l, children: [
            /* @__PURE__ */ s.jsx("i", { className: `state-${x}` }),
            " ",
            /* @__PURE__ */ s.jsxs("span", { className: "card-popup_text_link", children: [
              h,
              ": ",
              u
            ] })
          ] }, h)) })
        }
      )
    ] })
  ] }) });
}, Bs = y.memo(Gs), st = () => {
  const { projectName: t } = w(), c = N(
    "projects-monitoring-stats",
    t ? "projects-monitoring-stats_narrow" : "projects-monitoring-stats_wide"
  );
  return /* @__PURE__ */ s.jsxs("div", { className: "projects-monitoring-container", children: [
    !t && /* @__PURE__ */ s.jsx(Ts, { title: "Monitoring", tip: Cs }),
    /* @__PURE__ */ s.jsxs("div", { className: c, children: [
      /* @__PURE__ */ s.jsx(Ls, {}),
      !t && /* @__PURE__ */ s.jsx($s, {}),
      /* @__PURE__ */ s.jsx(Bs, {}),
      /* @__PURE__ */ s.jsx(Hs, {}),
      /* @__PURE__ */ s.jsxs("div", { className: "card__small-container", children: [
        /* @__PURE__ */ s.jsx(Ds, {}),
        t && /* @__PURE__ */ s.jsx(Ps, {})
      ] }),
      /* @__PURE__ */ s.jsx(Es, {})
    ] })
  ] });
};
export {
  Qs as P,
  st as a,
  Zs as g
};
//# sourceMappingURL=ProjectsMonitoring-B9-YPh5F.mjs.map
