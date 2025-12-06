import { bh as Ne, bi as ve, V as ce, e as g, j as e, P as x, be as ee, ax as ye, ae as Re, an as Se, bj as se, c as P, bk as te, bl as W, bm as ne, bn as ke, bo as Te, bp as we, bq as J, br as ie, bs as Ce, bt as w, y as le, bu as q, bv as U, bw as Me, i as de, m as X, bx as Ae, x as Ie, z as Pe, I as Le, B as $e, aR as oe, ah as K, a2 as De, by as Oe, az as qe, aA as Ue, bz as Fe, ay as He } from "./main-CTYpZ6Nf.mjs";
import Be, { useState as E, useMemo as v, useCallback as F, useEffect as L, useRef as re } from "react";
import { useDispatch as ae, useSelector as Z } from "react-redux";
import { useParams as H, Link as Ge, useNavigate as Ye, useSearchParams as Ve } from "react-router-dom";
import { A as ze } from "./ActionBar-C8Jl3Xmo.mjs";
import { M as We } from "./ModelsPageTabs-B77C5auf.mjs";
import { S as Je, N as pe } from "./StatsCard-Cm7Pku2T.mjs";
import { A as Ke, u as Qe, i as Xe } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { D as Ze, z as ea, M as aa, S as sa, C as ta, A as na, t as ia, F as la, u as oa, j as ra, T as ca } from "./Table-DB12oa-o.mjs";
import { g as da, a as pa, u as ue } from "./ModelsPage.context-BAALYiY9.mjs";
import { S as ua } from "./search-CsL7YQlT.mjs";
import { u as ha } from "./useInitialTableFetch.hook-D3_Uekdv.mjs";
const he = ({
  modelEndpointUid: o,
  modelEndpointName: u,
  frontendSpec: s,
  handleMonitoring: p,
  isOpen: y,
  onResolve: b,
  toggleConvertedYaml: r
}) => {
  const n = ae(), h = H(), [f, C] = E(!0), [m, M] = E({}), _ = v(
    () => s.model_monitoring_dashboard_url,
    [s.model_monitoring_dashboard_url]
  ), j = F(() => (C(!0), Ne.getModelEndpoint(
    h.projectName,
    u,
    o
  ).then(({ data: k }) => {
    M(ve([k])?.[0]), C(!1);
  }).catch((k) => {
    ce(
      n,
      k,
      "",
      "This model endpoint either does not exist or was deleted"
    ), b();
  })), [n, u, o, b, h.projectName]), $ = v(
    () => da(
      _,
      p,
      r,
      m,
      n
    ),
    [
      n,
      p,
      m,
      r,
      _
    ]
  ), D = v(
    () => pa(m, _, p),
    [_, p, m]
  );
  return L(() => {
    g.isEmpty(m) && j();
  }, [j, m]), /* @__PURE__ */ e.jsx(
    Ze,
    {
      actionsMenu: $,
      handleRefresh: j,
      isLoading: f,
      isOpen: y,
      onResolve: b,
      pageData: D,
      selectedItem: m
    }
  );
};
he.propTypes = {
  frontendSpec: x.object.isRequired,
  handleMonitoring: x.func.isRequired,
  isOpen: x.bool.isRequired,
  modelEndpointUid: x.string.isRequired,
  modelEndpointName: x.string.isRequired,
  onResolve: x.func.isRequired,
  toggleConvertedYaml: x.func.isRequired
};
const Q = {
  [Se]: { label: "Name:", initialValue: "" }
}, ma = (o) => ({
  page: ee,
  hidePageActionMenu: !0,
  hideFilterMenu: o
}), me = (o, u) => u(
  ye({
    project: o.project,
    name: o.name,
    hash: o.hash,
    tag: o.tag
  })
).unwrap().then((s) => Re(s, o.project.project)).catch((s) => {
  ce(u, s, "", "Failed to retrieve function data");
}), ge = ({ content: o }) => {
  const [u, s] = E([]), [p, y] = E([]), [b, r] = E({}), [n, h] = E({}), [f, C] = E({}), [m, M] = E(!1), _ = H(), j = ae(), $ = Z((a) => a.functionsStore), { handleMonitoring: D, toggleConvertedYaml: k, frontendSpec: B } = ue();
  L(() => {
    const a = o.find((i) => i.hash === _.pipelineId);
    a && me(a, j).then((i) => r(i));
  }, [o, j, _.pipelineId]), L(() => {
    if (n.data) {
      const a = n.data.customData;
      C({
        general: [
          {
            label: "Type:",
            value: a.kind
          },
          {
            label: "Class name:",
            value: a.class_name
          },
          {
            label: "Function name:",
            value: a.function
          },
          {
            label: "Handler:",
            value: a.handler,
            hidden: a.kind === se
          },
          {
            label: "Arguments:",
            value: a.class_args,
            type: "codeblock"
          },
          {
            label: "Input path:",
            value: a.input_path
          },
          {
            label: "Result path:",
            value: a.result_path
          }
        ],
        runningModels: g.mapValues(
          a?.class_args?.monitoring_data ?? {},
          (i, l) => [
            {
              label: "Model endpoint:",
              value: i.model_endpoint_uid,
              additionalData: {
                modelEndpointName: l
              },
              type: "pop-up"
            },
            {
              label: "Model artifact:",
              value: i.model_path,
              type: "pop-up"
            },
            {
              label: "Class name:",
              value: i.model_class
            },
            {
              label: "Input path:",
              value: i.input_path
            },
            {
              label: "Result path:",
              value: i.result_path
            },
            {
              label: "Outputs:",
              value: i.outputs.join(", ")
            },
            {
              label: "Execution mechanism:",
              value: a?.class_args?.execution_mechanism_by_model_name?.[l] ?? ""
            }
          ]
        )
      });
    }
    M(!!n.id);
  }, [n]), L(() => {
    const a = b?.graph, i = a?.routes || a?.steps;
    if (i) {
      let l = "";
      const T = [], A = {}, c = [], R = {};
      a.kind === "router" && (l = a.class_args?.name || "router", T.push({
        id: l,
        type: W,
        data: {
          subType: te,
          label: a.class_args?.name ?? "",
          subLabel: "« router »",
          isSelectable: !0,
          customData: a
        },
        className: P(n.id === l && "selected"),
        position: { x: 0, y: 0 }
      })), g.forEach(i, (t, d) => {
        if (!t.kind) return;
        let S = t.kind === se ? ne : W;
        const N = t.kind === "queue" ? "« queue »" : t.kind === "router" ? "« router »" : "";
        T.push({
          id: d,
          type: S,
          data: {
            subType: te,
            label: d,
            subLabel: N,
            isSelectable: !0,
            customData: { ...t, track_models: a.track_models }
          },
          className: P(n.id === d && "selected"),
          position: { x: 0, y: 0 }
        }), l && (A[d] = l), t.after && Array.isArray(t.after) && t.after.length && (A[d] = t.after[0]), t.on_error && (R[d] = t.on_error), t.kind === "router" && t.routes && g.forEach(t.routes, (z, I) => {
          T.push({
            id: I,
            type: W,
            data: {
              subType: Te,
              label: I,
              isSelectable: !0,
              shape: ke,
              withOpacity: !0,
              customData: z
            },
            className: P(n.id === I && "selected"),
            position: { x: 0, y: 0 }
          }), c.push([d, I]);
        });
      });
      const G = g.map(c, ([t, d]) => ({
        type: J,
        data: {
          subType: we,
          isMarkerStart: !0
        },
        id: `e.${t}.${d}`,
        source: t,
        target: d
      })), Y = g.map(A, (t, d) => ({
        type: J,
        data: {
          subType: ie
        },
        id: `e.${t}.${d}`,
        source: t,
        target: d
      })), _e = g.map(R, (t, d) => {
        const S = T.find((N) => N.id === t);
        return S.data.subType = Ce, {
          type: J,
          data: {
            subType: ie
          },
          id: `e.${d}.${t}`,
          source: d,
          target: t,
          animated: !0
        };
      }), fe = g.groupBy(Y, "source"), V = [];
      g.forEach(fe, (t, d) => {
        const S = G.filter((N) => N.source === d || N.target === d);
        if (S.length > 1) {
          const N = S.length / 2, z = S.slice(0, N), I = S.slice(N), Ee = [
            ...z,
            ...t,
            ...I
          ];
          V.push(...Ee);
        } else
          V.push(...t);
      });
      const [je, xe] = ea(
        T,
        g.concat(V, _e)
      );
      s(je), y(xe);
    }
  }, [b, n]);
  const O = (a) => {
    a.value.startsWith("store://") ? X(na, {
      artifactData: Ae(a.value)
    }) : X(he, {
      modelEndpointUid: a.value,
      modelEndpointName: a.additionalData.modelEndpointName,
      frontendSpec: B,
      handleMonitoring: D,
      toggleConvertedYaml: k
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "pipeline-container", children: [
    /* @__PURE__ */ e.jsx("div", { className: "pipeline-header", children: /* @__PURE__ */ e.jsxs("div", { className: "link-back", children: [
      /* @__PURE__ */ e.jsx(
        Ge,
        {
          to: `/projects/${_.projectName}/models/${_.pageTab ?? w}${window.location.search}`,
          className: "link-back__icon",
          children: /* @__PURE__ */ e.jsx(le, { id: "pipeline-back-btn", tooltipText: "Back", children: /* @__PURE__ */ e.jsx(Je, {}) })
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "link-back__title", children: /* @__PURE__ */ e.jsx(q, { template: /* @__PURE__ */ e.jsx(U, { text: b?.name }), children: b?.name }) })
    ] }) }),
    g.isEmpty(b?.graph) ? $.funcLoading ? /* @__PURE__ */ e.jsx(de, {}) : /* @__PURE__ */ e.jsx(pe, { message: "The ingestion function has no steps and therefore no graph." }) : /* @__PURE__ */ e.jsxs("div", { className: "graph-container pipeline-content", children: [
      /* @__PURE__ */ e.jsx("div", { className: "graph-view", children: /* @__PURE__ */ e.jsx(
        aa,
        {
          nodes: u,
          edges: p,
          alignTriggerItem: m,
          onNodeClick: (a, i) => {
            i.data?.customData && h(i);
          }
        }
      ) }),
      m && /* @__PURE__ */ e.jsx("div", { className: "graph-pane", children: /* @__PURE__ */ e.jsxs("div", { className: "graph-pane-scroll-container", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "graph-pane__title", children: [
          n.type === ne && /* @__PURE__ */ e.jsx("div", { className: "graph-pane__title-icon", children: /* @__PURE__ */ e.jsx(sa, {}) }),
          /* @__PURE__ */ e.jsx(
            q,
            {
              className: "graph-pane__title-label",
              hidden: !n.id,
              template: /* @__PURE__ */ e.jsx(U, { text: n.id }),
              children: n.id
            }
          ),
          /* @__PURE__ */ e.jsx(le, { onClick: () => h({}), tooltipText: "Close", children: /* @__PURE__ */ e.jsx(Me, {}) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "graph-pane__section", children: [
          /* @__PURE__ */ e.jsx("div", { className: "graph-pane__section-title", children: "General" }),
          f.general.map(
            (a) => !a.hidden && /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: P(
                  "graph-pane__row",
                  a.type === "codeblock" && "graph-pane__row_wrap"
                ),
                children: [
                  /* @__PURE__ */ e.jsx("div", { className: "graph-pane__row-label", children: a.label }),
                  a.type === "codeblock" ? /* @__PURE__ */ e.jsx(ta, { codeData: a.value }) : /* @__PURE__ */ e.jsx("div", { className: "graph-pane__row-value", children: /* @__PURE__ */ e.jsx(q, { template: /* @__PURE__ */ e.jsx(U, { text: a.value }), children: a.value }) })
                ]
              },
              a.label
            )
          )
        ] }),
        Object.keys(f.runningModels).length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "graph-pane__section", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "graph-pane__section-title", children: [
            "Running models (",
            Object.keys(f.runningModels).length,
            ")"
          ] }),
          Object.entries(f.runningModels).map(
            ([a, i]) => /* @__PURE__ */ e.jsxs(
              Ke,
              {
                accordionClassName: "graph-pane__expand-item",
                icon: /* @__PURE__ */ e.jsx(ua, {}),
                iconClassName: "graph-pane__expand-icon",
                children: [
                  /* @__PURE__ */ e.jsx("div", { className: "graph-pane__expand-title", children: a }),
                  /* @__PURE__ */ e.jsx("div", { className: "graph-pane__expand-content", children: i.map((l) => /* @__PURE__ */ e.jsxs("div", { className: "graph-pane__row", children: [
                    /* @__PURE__ */ e.jsx("div", { className: "graph-pane__row-label", children: l.label }),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "graph-pane__row-value",
                        onClick: l.type === "pop-up" ? () => O(l) : null,
                        children: /* @__PURE__ */ e.jsx(
                          q,
                          {
                            template: /* @__PURE__ */ e.jsx(U, { text: l.value }),
                            className: P({ link: l.type === "pop-up" }),
                            children: l.value
                          }
                        )
                      }
                    )
                  ] }, l.label)) })
                ]
              },
              a
            )
          )
        ] })
      ] }) })
    ] })
  ] });
};
ge.propTypes = {
  content: x.arrayOf(x.object).isRequired
};
const ga = Be.memo(ge), be = ({ actionsMenu: o, rowItem: u }) => {
  const s = H();
  return /* @__PURE__ */ e.jsxs("tr", { className: "table-row table-body-row parent-row", children: [
    u.content.map((p, y) => !p.hidden && /* @__PURE__ */ e.jsx(
      Ie,
      {
        cellData: p,
        firstCell: y === 0,
        item: u.data,
        link: p.getLink?.(s.tab ?? Pe),
        onClick: p.handleClick
      },
      p.id
    )),
    /* @__PURE__ */ e.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ e.jsx(Le, { dataItem: u.data, menu: o }) })
  ] });
};
be.propTypes = {
  actionsMenu: $e.isRequired,
  rowItem: x.object.isRequired
};
const ba = (o, u) => o.map((s) => ({
  data: {
    ...s
  },
  content: [
    {
      id: `name.${s.ui.identifierUnique}`,
      headerId: "name",
      headerLabel: "Name",
      value: s.name,
      className: "table-cell-name",
      getLink: () => `/projects/${u}/${ee.toLowerCase()}/${w}/pipeline/${s.hash}${window.location.search}`,
      showTag: !0,
      showStatus: !0,
      expandedCellContent: {
        value: oe(s.updated, "N/A"),
        className: "table-cell-name",
        type: "date",
        showTag: !0,
        showStatus: !0
      }
    },
    {
      id: `kind.${s.ui.identifierUnique}`,
      headerId: "type",
      headerLabel: "Type",
      value: s.graph?.kind === "router" ? "Router" : "Flow",
      className: "table-cell-small",
      type: "type",
      types: ia
    },
    {
      id: `function.${s.ui.identifierUnique}`,
      headerId: "function",
      headerLabel: "Function",
      value: s.name,
      className: "table-cell-2",
      handleClick: () => X(la, {
        funcUri: `${s.project}/${s.name}@${s.hash}`,
        funcTag: s.tag
      })
    },
    {
      id: `updated.${s.ui.identifierUnique}`,
      headerId: "updated",
      value: oe(s.updated, "N/A"),
      className: "table-cell-2",
      type: "date",
      showTag: !0,
      showStatus: !0,
      hidden: !0
    }
  ]
})), wa = () => {
  const [o, u] = E(""), [s, p] = E([]), y = Z((c) => c.artifactsStore), b = Z((c) => c.filtersStore), r = H(), n = Ye(), h = ae(), f = re(new AbortController()), C = re(null), m = v(() => ma(r.pipelineId), [r.pipelineId]), { toggleConvertedYaml: M } = ue(), [, _] = Ve(), j = oa(Q), $ = v(() => K("--pipelinesRowHeight"), []), D = v(
    () => K("--pipelinesRowHeightExtended"),
    []
  ), k = v(
    () => K("--pipelinesHeaderRowHeight"),
    []
  ), B = P(
    "content__action-bar-wrapper",
    r.pipelineId && "content__action-bar-wrapper_hidden"
  ), O = v(
    () => [
      [
        {
          label: "View YAML",
          icon: /* @__PURE__ */ e.jsx(De, {}),
          onClick: (c) => me(c, h).then(() => M(c))
        }
      ]
    ],
    [h, M]
  ), a = F(
    (c) => {
      f.current = new AbortController(), h(
        Oe({
          project: r.projectName,
          filters: c,
          config: {
            params: { format: "minimal", kind: "serving" },
            ui: {
              controller: f.current,
              setRequestErrorMessage: u
            }
          }
        })
      ).unwrap().then((R) => {
        g.isNil(R) || p(
          R.filter(
            (G) => !Object.keys(G.labels).some((Y) => Y.includes("parent-function"))
          )
        );
      });
    },
    [h, r.projectName]
  ), i = F(
    (c) => (p([]), a(c)),
    [a]
  ), l = v(() => ba(s, r.projectName), [s, r.projectName]), T = F(
    (c) => {
      a(c), h(qe({ groupBy: Ue }));
    },
    [h, a]
  );
  ha({ fetchData: T, filters: j }), L(() => () => {
    p([]), h(Fe()), f.current.abort(He);
  }, [h]), L(() => {
    r.pipelineId && s.length > 0 && (s.find((c) => c.hash === r.pipelineId) || n(
      `/projects/${r.projectName}/models/${w}${window.location.search}`,
      {
        replace: !0
      }
    ));
  }, [n, r.pipelineId, r.projectName, s]);
  const A = Qe({
    rowsData: {
      content: l
    },
    renderTriggerItem: r.pipelineId,
    heightData: {
      headerRowHeight: k,
      rowHeight: $,
      rowHeightExtended: D
    }
  });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    y.pipelines.loading && /* @__PURE__ */ e.jsx(de, {}),
    /* @__PURE__ */ e.jsx("div", { className: "models", ref: C, children: /* @__PURE__ */ e.jsxs("div", { className: "table-container", children: [
      /* @__PURE__ */ e.jsxs("div", { className: B, children: [
        /* @__PURE__ */ e.jsx(We, {}),
        /* @__PURE__ */ e.jsx(
          ze,
          {
            closeParamName: w,
            filters: j,
            filtersConfig: Q,
            handleRefresh: i,
            setSearchParams: _,
            tab: w,
            withoutExpandButton: !0
          }
        )
      ] }),
      y.pipelines.loading ? null : s.length === 0 ? /* @__PURE__ */ e.jsx(
        pe,
        {
          message: ra(
            j,
            Q,
            o,
            ee,
            w,
            b
          )
        }
      ) : r.pipelineId ? /* @__PURE__ */ e.jsx(ga, { content: s }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
        ca,
        {
          actionsMenu: O,
          pageData: m,
          selectedItem: {},
          tab: w,
          tableClassName: "pipelines-table",
          tableHeaders: l[0]?.content ?? [],
          virtualizationConfig: A,
          children: l.map(
            (c, R) => Xe(A, R) && /* @__PURE__ */ e.jsx(
              be,
              {
                actionsMenu: O,
                rowItem: c
              },
              R
            )
          )
        }
      ) })
    ] }) })
  ] });
};
export {
  wa as default
};
//# sourceMappingURL=RealTimePipelines-0ZgnO3CR.mjs.map
