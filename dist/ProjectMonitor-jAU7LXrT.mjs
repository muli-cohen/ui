import { j as e, cq as Pe, i as ie, e as x, P as c, c3 as ue, cr as Re, ay as P, cs as ve, S as U, a0 as ee, bY as b, g as F, $ as q, c as Te, aT as R, ct as Ae, aR as we, cu as Ee, cv as De, cw as Oe, cx as $e, ak as ke, K as Ce, y as Le, c2 as Ie, J as qe, ag as Me, bc as Be, n as Ue, F as Ge, bg as te, k as Je, cy as He, m as G, ck as Ye, cz as Qe, cA as ae, cB as se, cC as oe, aC as L, cD as re, af as J, V as I, Q as Ve, cE as ne, aD as ze } from "./main-CTYpZ6Nf.mjs";
import de, { useEffect as S, useMemo as E, useState as A, useRef as H, useCallback as y } from "react";
import { useSelector as w, useDispatch as Y } from "react-redux";
import { Link as ce, useParams as Q, useNavigate as Ze } from "react-router-dom";
import { B as We } from "./Breadcrumbs-DDXz9SNg.mjs";
import { F as Xe } from "./FeatureSetsPanel-BA6whq47.mjs";
import { N as Ke, F as et } from "./NewFunctionPopUp-DujV59Hs.mjs";
import { N as me } from "./StatsCard-Cm7Pku2T.mjs";
import { P as tt, l as at, g as st, h as ot } from "./project.utils-DSwB9YNB.mjs";
import { P as rt, g as nt, a as ct } from "./ProjectsMonitoring-B9-YPh5F.mjs";
import { S as lt } from "./SectionTable-S1UIgbYL.mjs";
import { S as it } from "./clock-BFaispYx.mjs";
import { t as pe } from "./Table-DB12oa-o.mjs";
import { m as ut } from "./measureTime-DGja8F60.mjs";
import { S as le } from "./add-CmKOUDFO.mjs";
import { R as dt } from "./RegisterArtifactModal-BDqsFa-z.mjs";
import { R as mt } from "./RegisterModelModal-Cc2loyYG.mjs";
const V = ({
  content: r,
  footerLinkText: o = "See all",
  headerLink: a = "",
  hasUpdateDate: l = !1,
  href: n = "",
  link: m = "",
  params: p,
  statistics: i = {},
  subTitle: u,
  table: s = {},
  tip: t = null,
  title: j
}) => /* @__PURE__ */ e.jsxs("div", { className: "project-data-card", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "project-data-card__header table-header", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "project-data-card__header-text data-ellipsis", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "d-flex", children: [
        n ? /* @__PURE__ */ e.jsx("a", { href: n, target: "_top", children: j }) : /* @__PURE__ */ e.jsx(ce, { to: a || m, children: j }),
        t && /* @__PURE__ */ e.jsx(Pe, { className: "project-data-card__header-tip", text: t })
      ] }),
      l && /* @__PURE__ */ e.jsxs("span", { className: "project-data-card__header-info", children: [
        /* @__PURE__ */ e.jsx(it, { className: "project-data-card__header-info-icon" }),
        /* @__PURE__ */ e.jsx("span", { children: "Last 24 hrs" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "project-data-card__statistics", children: /* @__PURE__ */ e.jsx(rt, { statistics: i }) })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "project-data-card__recent-text", children: [
    u && /* @__PURE__ */ e.jsx("span", { children: u }),
    l && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: "(last 7 days)" })
  ] }),
  r.loading ? /* @__PURE__ */ e.jsx(ie, { section: !0 }) : r.error ? /* @__PURE__ */ e.jsx("div", { className: "error-container", children: /* @__PURE__ */ e.jsx("h1", { children: r.error }) }) : x.isEmpty(r.data) ? /* @__PURE__ */ e.jsx(me, {}) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(lt, { params: p, table: s }),
    n ? /* @__PURE__ */ e.jsx("a", { href: n, target: "_top", className: "link project-data-card__see-all-link", children: o }) : /* @__PURE__ */ e.jsx(ce, { className: "link project-data-card__see-all-link", to: m, children: o })
  ] })
] });
V.propTypes = {
  content: c.object.isRequired,
  footerLinkText: c.string,
  headerLink: c.string,
  hasUpdateDate: c.bool,
  href: c.string,
  link: c.string,
  params: c.object.isRequired,
  statistics: c.object,
  subTitle: c.string,
  table: c.object,
  tip: c.string,
  title: c.string
};
const je = ({ nuclioStreamsAreEnabled: r }) => {
  const o = Q(), { isNuclioModeDisabled: a } = ue(), l = w((i) => i.nuclioStore), n = Y();
  S(() => {
    if (!a) {
      const i = new AbortController();
      return n(
        Re({ project: o.projectName, signal: i.signal })
      ), () => {
        i.abort(P);
      };
    }
  }, [n, a, o.projectName]), S(() => {
    if (!a) {
      const i = new AbortController();
      return n(ve({ project: o.projectName, signal: i.signal })), () => {
        i.abort(P);
      };
    }
  }, [n, a, o.projectName]);
  const m = E(() => {
    const i = nt(
      l.currentProjectFunctions,
      "metadata.name"
    ), u = i.reduce(
      (t, j) => !j.spec.disable && j.status.state === U ? t += 1 : t,
      0
    ), s = i.reduce(
      (t, j) => [ee, "unhealthy"].includes(j.status.state) ? t += 1 : t,
      0
    );
    return {
      running: {
        counterTooltip: "Running",
        value: u,
        label: "Running",
        className: b,
        status: b,
        href: F(`/projects/${o.projectName}/functions`),
        loading: l.loading
      },
      failed: {
        counterTooltip: "Error, Unhealthy",
        value: s,
        label: "Failed",
        status: q,
        className: s > 0 ? q : b,
        href: F(`/projects/${o.projectName}/functions`),
        loading: l.loading
      },
      apiGateways: {
        value: l.apiGateways,
        label: "API gateways",
        className: b,
        href: F(`/projects/${o.projectName}/api-gateways`),
        loading: l.loading
      },
      ...r && {
        consumerGroups: {
          value: a ? "N/A" : Object.keys(l.v3ioStreams.data).length ?? 0,
          label: "Consumer groups",
          className: b,
          link: `/projects/${o.projectName}/monitor${a ? "" : "/consumer-groups"}`,
          loading: l.loading
        }
      }
    };
  }, [
    l.currentProjectFunctions,
    l.loading,
    l.apiGateways,
    l.v3ioStreams.data,
    o.projectName,
    r,
    a
  ]), p = E(() => {
    if (l.currentProjectFunctions.length > 0) {
      const i = [
        {
          value: "Name",
          className: "table-cell_big"
        },
        { value: "Status", className: "table-cell_small" }
      ], u = l.currentProjectFunctions.slice(0, 5).map((s) => {
        const t = Te(
          "table-cell_small",
          "status",
          `status-nuclio_${s?.status?.state}`,
          s?.spec?.disable && "disabled"
        );
        return {
          name: {
            value: s.metadata.name,
            href: F(
              `/projects/${o.projectName}/functions/${s.metadata.name}`
            ),
            className: "table-cell_big"
          },
          status: {
            value: s?.status?.state === U && !s?.spec?.disable ? "Running" : s?.status?.state === U && s?.spec?.disable ? "Standby" : [ee, "unhealthy", "imported", "scaledToZero"].includes(
              s?.status?.state
            ) ? x.upperFirst(x.lowerCase(s.status.state)) : "Building",
            types: pe,
            className: t
          }
        };
      });
      return {
        header: i,
        body: u
      };
    }
  }, [o.projectName, l.currentProjectFunctions]);
  return /* @__PURE__ */ e.jsx(
    V,
    {
      content: {
        data: l.currentProjectFunctions,
        error: a ? "Nuclio is not deployed" : l.error,
        loading: l.loading
      },
      footerLinkText: "All real-time functions",
      href: F(`/projects/${o.projectName}/functions`),
      params: o,
      statistics: m,
      subTitle: "Recent real-time functions",
      table: p,
      title: "Real-time functions (Nuclio)"
    }
  );
};
je.propTypes = {
  nuclioStreamsAreEnabled: c.bool.isRequired
};
const pt = de.memo(je), jt = (r, o) => ({
  running: {
    value: r.error ? "N/A" : r?.data?.runs_running_count,
    label: "In Process",
    className: b,
    status: b,
    link: `/projects/${o}/jobs/${R}`,
    counterTooltip: "Aborting, Pending, Pending retry, Running",
    loading: r.loading
  },
  failed: {
    value: r.error ? "N/A" : r?.data?.runs_failed_recent_count,
    label: "Failed",
    className: r.error || r?.data?.runs_failed_recent_count === 0 ? b : q,
    status: q,
    link: `/projects/${o}/jobs/${R}`,
    counterTooltip: "Aborted, Error",
    loading: r.loading
  },
  succeeded: {
    value: r.error ? "N/A" : r?.data?.runs_completed_recent_count,
    label: "Succeeded",
    status: Ae,
    className: b,
    link: `/projects/${o}/jobs/${R}`,
    counterTooltip: "Completed",
    loading: r.loading
  }
}), Nt = (r, o) => {
  if (r) {
    const a = r.slice(0, 5).map((n) => ({
      name: {
        value: n[0].metadata.name,
        link: `/projects/${o}/jobs/${R}/${n[0].metadata.name}/${n[0].metadata.uid}/overview`,
        className: "table-cell_big"
      },
      type: {
        value: n[0].metadata.kind ?? n[0].metadata.labels?.kind ?? "",
        className: "section-table__table-cell table-cell_small",
        types: pe
      },
      status: {
        value: n.map((m) => m.status.state),
        className: "table-cell_medium"
      },
      startTime: {
        value: we(
          n[0].status.start_time,
          n[0].status.state === Ee ? "N/A" : "Not yet started"
        ),
        className: "table-cell_big"
      },
      duration: {
        value: ut(
          new Date(n[0].status.start_time),
          new Date(n[0].status.last_update)
        ),
        className: "table-cell_medium"
      }
    }));
    return {
      header: [
        { value: "Name", className: "table-cell_big" },
        { value: "Type", className: "table-cell_small" },
        { value: "Status", className: "table-cell_medium" },
        { value: "Started at", className: "table-cell_big" },
        { value: "Duration", className: "table-cell_medium" }
      ],
      body: a
    };
  }
}, bt = (r) => {
  const o = /* @__PURE__ */ Object.create(null);
  return r.forEach((a) => {
    o[a.metadata.name] ? o[a.metadata.name].push(a) : o[a.metadata.name] = [a];
  }), Object.values(o);
}, ft = (r) => r.map((o) => x.orderBy(o, ["status.last_update"], "desc").slice(0, 5)), ht = () => {
  const [r, o] = A([]), a = Q(), l = Y(), n = w((p) => p.projectStore);
  S(() => {
    n.project?.jobs?.data && o(ft(bt(n.project.jobs.data)));
  }, [n.project?.jobs?.data]), S(() => {
    const p = new AbortController(), i = De().add(-7, "days").toISOString();
    return l(
      Oe({
        project: a.projectName,
        startTimeFrom: i,
        signal: p.signal
      })
    ), () => {
      p.abort(P);
    };
  }, [l, a.projectName]);
  const m = E(() => {
    const p = jt(n.projectSummary, a.projectName), i = Nt(r, a.projectName);
    return {
      statistics: p,
      table: i
    };
  }, [r, a.projectName, n.projectSummary]);
  return /* @__PURE__ */ e.jsx(
    V,
    {
      content: n.project.jobs,
      footerLinkText: "All jobs",
      headerLink: `/projects/${a.projectName}/jobs/${R}?${new URLSearchParams({
        [ke]: $e
      })}`,
      hasUpdateDate: !0,
      link: `/projects/${a.projectName}/jobs/${R}`,
      params: a,
      statistics: m.statistics,
      subTitle: "Recent jobs",
      table: m.table,
      tip: "Number of Job runs, clicking on the\u2028counters navigates to jobs screen.",
      title: "Runs"
    }
  );
}, gt = de.memo(ht), Ne = ({
  closeFeatureSetPanel: r,
  closeFunctionsPanel: o,
  confirmData: a = null,
  createFeatureSetPanelIsOpen: l,
  createFeatureSetSuccess: n,
  createFunctionSuccess: m,
  createNewOptions: p,
  handleDeployFunctionFailure: i,
  handleDeployFunctionSuccess: u,
  handleLaunchIDE: s,
  isNewFunctionPopUpOpen: t,
  nuclioStreamsAreEnabled: j,
  params: f,
  project: N,
  refresh: v,
  setIsNewFunctionPopUpOpen: h,
  setShowFunctionsPanel: D,
  showFunctionsPanel: T
}) => /* @__PURE__ */ e.jsxs("div", { className: "content-wrapper", children: [
  /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(We, {}) }),
  N.loading ? /* @__PURE__ */ e.jsx(ie, {}) : N.error ? /* @__PURE__ */ e.jsx("div", { className: "project__error-container", children: a ? /* @__PURE__ */ e.jsx(
    Ce,
    {
      closePopUp: a.confirmHandler,
      confirmButton: {
        handler: a.confirmHandler,
        label: a.btnConfirmLabel,
        variant: a.btnConfirmType
      },
      isOpen: !!a,
      message: a.message,
      messageOnly: a.messageOnly
    }
  ) : /* @__PURE__ */ e.jsx("h1", { children: N.error.message }) }) : x.isEmpty(N.data) ? /* @__PURE__ */ e.jsx(me, {}) : /* @__PURE__ */ e.jsx("div", { className: "content project-content", children: /* @__PURE__ */ e.jsxs("div", { className: "main-info", children: [
    /* @__PURE__ */ e.jsx(tt, { projectData: N.data, projectName: f.projectName }),
    /* @__PURE__ */ e.jsx("div", { className: "main-info__toolbar", children: /* @__PURE__ */ e.jsxs("div", { className: "main-info__toolbar-actions", children: [
      /* @__PURE__ */ e.jsx(
        le,
        {
          className: "main-info__toolbar-menu launch-menu",
          density: "dense",
          hideSelectedOption: !0,
          label: "Launch IDE",
          onClick: s,
          options: at
        }
      ),
      /* @__PURE__ */ e.jsx(
        le,
        {
          className: "main-info__toolbar-menu create-new-menu",
          density: "dense",
          hideSelectedOption: !0,
          position: "bottom-left",
          width: "auto",
          popUpClassName: "",
          label: "Quick actions",
          options: p
        }
      ),
      /* @__PURE__ */ e.jsx(
        Le,
        {
          onClick: v,
          id: "refresh",
          tooltipText: "Refresh",
          className: "refresh",
          children: /* @__PURE__ */ e.jsx(Ie, {})
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsx(ct, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "main-info__statistics-section", children: [
      /* @__PURE__ */ e.jsx("div", { className: "d-flex", children: /* @__PURE__ */ e.jsx(gt, {}) }),
      /* @__PURE__ */ e.jsx("div", { className: "d-flex", children: /* @__PURE__ */ e.jsx(pt, { nuclioStreamsAreEnabled: j }) })
    ] })
  ] }) }),
  l && /* @__PURE__ */ e.jsx(
    Xe,
    {
      closePanel: r,
      createFeatureSetSuccess: n,
      project: f.projectName
    }
  ),
  t && /* @__PURE__ */ e.jsx(
    Ke,
    {
      closePopUp: () => h(!1),
      currentProject: f.projectName,
      isOpened: t,
      setFunctionsPanelIsOpen: D
    }
  ),
  T && /* @__PURE__ */ e.jsx(
    et,
    {
      closePanel: o,
      createFunctionSuccess: m,
      handleDeployFunctionFailure: i,
      handleDeployFunctionSuccess: u,
      mode: qe,
      project: f.projectName
    }
  )
] });
Ne.propTypes = {
  closeFeatureSetPanel: c.func.isRequired,
  closeFunctionsPanel: c.func.isRequired,
  confirmData: c.object,
  createFeatureSetPanelIsOpen: c.bool.isRequired,
  createFeatureSetSuccess: c.func.isRequired,
  createFunctionSuccess: c.func.isRequired,
  createNewOptions: c.array.isRequired,
  handleDeployFunctionFailure: c.func.isRequired,
  handleDeployFunctionSuccess: c.func.isRequired,
  handleLaunchIDE: c.func.isRequired,
  isNewFunctionPopUpOpen: c.bool.isRequired,
  nuclioStreamsAreEnabled: c.bool.isRequired,
  params: c.object.isRequired,
  project: c.object.isRequired,
  refresh: c.func.isRequired,
  setIsNewFunctionPopUpOpen: c.func.isRequired,
  setShowFunctionsPanel: c.func.isRequired,
  showFunctionsPanel: c.bool.isRequired
};
const Lt = () => {
  const [r, o] = A(!1), [a, l] = A(!1), [n, m] = A(!1), [p, i] = A(null), u = Ze(), s = Q(), t = Y(), { isNuclioModeDisabled: j } = ue(), { isDemoMode: f } = Me(), N = H(new AbortController()), v = H(new AbortController()), h = H(new AbortController()), D = w((d) => d.appStore.frontendSpec), T = w((d) => d.functionsStore), z = w((d) => d.projectStore), O = y(
    (d) => `/projects/${s.projectName}/${d === te ? Be : d === Je ? Ue : Ge}`,
    [s.projectName]
  ), $ = E(
    () => He(D),
    [D]
  ), Z = y(() => {
    G(mt, {
      params: s,
      refresh: () => u(O(te))
    });
  }, [s, u, O]), W = y(
    (d) => {
      G(dt, {
        artifactKind: d,
        params: s,
        refresh: () => u(O(d)),
        title: `Register ${d}`
      });
    },
    [u, s, O]
  ), { createNewOptions: be } = E(() => ({
    createNewOptions: st(
      u,
      s,
      W,
      F,
      G,
      Z,
      o,
      l,
      f
    )
  }), [u, s, W, Z, f]), M = y(() => {
    N.current = new AbortController(), v.current = new AbortController(), Promise.all([
      t(
        Ye({
          project: s.projectName,
          params: {},
          signal: N.current.signal
        })
      ).unwrap(),
      t(
        Qe({
          project: s.projectName,
          signal: v.current.signal
        })
      ).unwrap()
    ]).catch((d) => {
      ot(d, u, i, t);
    });
  }, [t, u, s.projectName]), X = y(() => {
    t(ae());
  }, [t]);
  S(() => () => {
    N.current.abort(P), v.current.abort(P), h.current.abort(P);
  }, [s.projectName]), S(() => (M(), () => {
    X(), t(se());
  }), [t, M, X]), S(() => {
    $ && !j && (h.current = new AbortController(), t(
      oe({
        project: s.projectName,
        signal: h.current.signal
      })
    ));
  }, [j, s.projectName, $, t]);
  const fe = () => {
    o(!1), t(ne());
  }, he = () => {
    m(!1), t(L()), T.error && t(ze());
  }, ge = async () => {
    o(!1), t(ne());
  }, _e = async () => (m(!1), t(L()), t(
    J({
      status: 200,
      id: Math.random(),
      message: "Function created successfully"
    })
  )), Se = async (d) => {
    let { name: B, tag: k } = T.newFunction.metadata;
    const C = d === !1 ? Ve : "overview";
    k ||= "latest", m(!1), t(L());
    const g = await t(re({ project: s.projectName })).unwrap().catch((_) => {
      t(
        J({
          status: 200,
          id: Math.random(),
          message: "Function was deployed"
        })
      ), I(t, _, "", "Failed to fetch functions");
    });
    if (!x.isEmpty(g)) {
      const _ = g.find((K) => K.metadata.name === B && K.metadata.tag === k);
      return _ && u(`/projects/${s.projectName}/functions/${_.metadata.hash}/${C}`), t(
        J({
          status: 200,
          id: Math.random(),
          message: "Function was deployed"
        })
      );
    }
  }, xe = async (d) => {
    const { name: B, tag: k } = T.newFunction.metadata;
    m(!1), t(L());
    const C = await t(re({ project: s.projectName })).unwrap().catch((g) => {
      I(t, d, "", "Failed to deploy the function"), I(t, g, "", "Failed to fetch functions");
    });
    if (!x.isEmpty(C)) {
      const g = C.find((_) => _.metadata.name === B && _.metadata.tag === k);
      g && u(`/projects/${s.projectName}/functions/${g.metadata.hash}/overview`), I(t, d, "", "Failed to deploy the function");
    }
  }, ye = y(() => {
  }, []), Fe = () => {
    t(ae()), t(se()), M(), $ && !j && (h.current = new AbortController(), t(
      oe({
        project: s.projectName,
        signal: h.current.signal
      })
    ));
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
    Ne,
    {
      closeFeatureSetPanel: fe,
      closeFunctionsPanel: he,
      confirmData: p,
      createFeatureSetPanelIsOpen: r,
      createFeatureSetSuccess: ge,
      createFunctionSuccess: _e,
      createNewOptions: be,
      handleDeployFunctionFailure: xe,
      handleDeployFunctionSuccess: Se,
      handleLaunchIDE: ye,
      isNewFunctionPopUpOpen: a,
      navigate: u,
      nuclioStreamsAreEnabled: $,
      params: s,
      project: z.project,
      projectSummary: z.projectSummary,
      refresh: Fe,
      setIsNewFunctionPopUpOpen: l,
      setShowFunctionsPanel: m,
      showFunctionsPanel: n
    }
  ) });
};
export {
  Lt as default
};
//# sourceMappingURL=ProjectMonitor-jAU7LXrT.mjs.map
