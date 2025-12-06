import { ah as b, bJ as F, bB as V, e as f, ld as U, ai as q, ak as z, dG as o, ay as G, bE as u, bD as J, j as e, bV as Q, p as W, y as K, c2 as X, i as Y, bN as Z, b0 as ee, b2 as te, c as ae, bu as I, bv as T, be as se, z as ie, cx as re, am as oe } from "./main-CTYpZ6Nf.mjs";
import ne, { useState as _, useRef as ce, useMemo as c, useCallback as le, useEffect as x } from "react";
import { useNavigate as me, useParams as de, Link as M } from "react-router-dom";
import { useSelector as w, useDispatch as pe } from "react-redux";
import { H as he } from "./historyBackLink-D1MctrX9.mjs";
import { B as ue } from "./Breadcrumbs-DDXz9SNg.mjs";
import { u as _e, i as Ne, c as je } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { N as fe } from "./StatsCard-Cm7Pku2T.mjs";
import { a as xe } from "./search-CsL7YQlT.mjs";
import { S as A } from "./present-metrics-icon-BJGAfRxy.mjs";
const D = "LIST_ID", R = "LIST_ITEMS_ID", Ae = () => {
  const [P, L] = _(""), [i, g] = _({}), [s, C] = _([]), [N, $] = _(""), y = w((a) => a.detailsStore), v = w((a) => a.artifactsStore), d = w((a) => a.monitoringApplicationsStore), r = pe(), n = me(), t = de(), j = ce(), l = c(() => s.filter((a) => !N || a.name?.toLowerCase()?.includes(N.toLowerCase())), [s, N]), m = c(() => b("--listItemHeight"), []), S = c(() => b("--searchHeight"), []), O = c(
    () => new Array(l.length).fill(parseInt(m)),
    [m, l.length]
  ), k = c(
    () => ({
      headerRowHeight: S,
      rowHeight: m,
      rowHeightExtended: m
    }),
    [m, S]
  ), E = _e({
    renderTriggerItem: s,
    heightData: k,
    rowsSizes: O,
    tableBodyId: D,
    tableId: R
  }), H = ne.useRef(
    F({
      initialValues: {
        MEPSearchName: ""
      },
      onSubmit: () => {
      }
    })
  ), p = le(() => {
    j.current = new AbortController(), r(
      V({
        project: t.projectName,
        filters: {},
        config: {
          ui: {
            controller: j.current,
            setRequestErrorMessage: L
          }
        },
        params: {
          latest_only: "True"
        }
      })
    ).unwrap().then((a) => {
      a && C(a);
    });
  }, [r, t.projectName]), B = c(
    () => f.debounce((a) => {
      $(a);
    }, 500),
    [$]
  );
  return x(() => (d.monitoringApplications.applications?.find(
    (a) => a.name.toLowerCase() === t.appName.toLowerCase()
  ) ? p() : r(
    U({
      project: t.projectName,
      functionName: t.appName,
      filters: {
        [z]: q(
          oe,
          re,
          !1
        )
      }
    })
  ).unwrap().then((a) => {
    f.isEmpty(a) ? n(
      `/projects/${t.projectName}/${o}${window.location.search}`,
      { replace: !0 }
    ) : p();
  }).catch(() => {
    n(
      `/projects/${t.projectName}/${o}${window.location.search}`,
      { replace: !0 }
    );
  }), () => {
    j.current?.abort?.(G);
  }), [
    d.monitoringApplications.applications,
    r,
    p,
    t.appName,
    t.projectName
  ]), x(() => {
    if (t.id && s.length > 0) {
      const a = s.find((h) => h.metadata?.uid === t.id);
      a ? g(a) : n(
        `/projects/${t.projectName}/${o}/${t.appName}/${u}/${s[0].metadata.uid}${window.location.search}`,
        { replace: !0 }
      );
    } else s.length > 0 ? n(
      `/projects/${t.projectName}/${o}/${t.appName}/${u}/${s[0].metadata.uid}${window.location.search}`,
      { replace: !0 }
    ) : g({});
  }, [r, s, n, t.id, t.appName, t.projectName]), x(() => () => {
    r(J());
  }, [r]), /* @__PURE__ */ e.jsxs("div", { className: "content-wrapper applications-metrics", children: [
    /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(ue, {}) }),
    /* @__PURE__ */ e.jsx("div", { className: "content", children: /* @__PURE__ */ e.jsxs("div", { className: "application-metrics-container", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "content__action-bar-wrapper", children: [
        /* @__PURE__ */ e.jsx(
          he,
          {
            link: `/projects/${t.projectName}/${o}/${t.appName}${window.location.search}`,
            itemName: t.appName,
            customText: "Applications metrics",
            customIcon: /* @__PURE__ */ e.jsx(A, {})
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "action-bar", children: [
          /* @__PURE__ */ e.jsx(
            Q,
            {
              variant: W,
              label: "Application monitoring",
              className: "action-button",
              onClick: () => {
                n(
                  `/projects/${t.projectName}/${o}/${t.appName}${window.location.search}`
                );
              },
              icon: /* @__PURE__ */ e.jsx(A, {})
            }
          ),
          /* @__PURE__ */ e.jsx(K, { tooltipText: "Refresh", onClick: p, id: "refresh", children: /* @__PURE__ */ e.jsx(X, {}) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "list-view", children: [
        (v.modelEndpoints.loading || d.loading || y.loadingCounter > 0) && /* @__PURE__ */ e.jsx(Y, {}),
        v.modelEndpoints.loading || d.loading ? null : s.length === 0 ? /* @__PURE__ */ e.jsx(fe, { message: P || "No model endpoints found." }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "list-view__section list-view__section-list", children: [
            /* @__PURE__ */ e.jsx(Z, { form: H.current, onSubmit: () => {
            }, children: () => /* @__PURE__ */ e.jsxs("div", { className: "list-view__section-list__search", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "list-view__section-list__search__name-filter", children: [
                /* @__PURE__ */ e.jsx(
                  ee,
                  {
                    inputIcon: /* @__PURE__ */ e.jsx(xe, {}),
                    name: "MEPSearchName",
                    placeholder: "Search endpoint..."
                  }
                ),
                /* @__PURE__ */ e.jsx(te, { name: "MEPSearchName", handler: B })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "list-view__section-list__search_endpoints-counter", children: `${l.length} endpoint${l.length !== 1 ? "s" : ""} found` })
            ] }) }),
            /* @__PURE__ */ e.jsx("div", { className: "list-view__section-list__items-wrapper", children: /* @__PURE__ */ e.jsx("div", { className: "list-view__section-list__items", id: R, children: /* @__PURE__ */ e.jsx(
              "ul",
              {
                id: D,
                style: { paddingTop: E.tableBodyPaddingTop || 0 },
                children: l.map((a, h) => Ne(E, h) && /* @__PURE__ */ e.jsx(
                  "li",
                  {
                    id: a.ui.identifierUnique,
                    className: ae(
                      a?.metadata.uid === i?.metadata?.uid && "active"
                    ),
                    children: /* @__PURE__ */ e.jsx(
                      M,
                      {
                        to: `/projects/${t.projectName}/${o}/${t.appName}/${u}/${a.metadata.uid}${window.location.search}`,
                        className: "data-ellipsis",
                        children: /* @__PURE__ */ e.jsx(
                          I,
                          {
                            template: /* @__PURE__ */ e.jsx(T, { text: a.name }),
                            children: a.name
                          }
                        )
                      }
                    )
                  },
                  a.ui.identifierUnique + h
                ))
              }
            ) }) })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "list-view__section list-view__section-details", children: /* @__PURE__ */ e.jsx("div", { className: "list-view__section__metrics-content-wrapper", children: /* @__PURE__ */ e.jsx("div", { className: "list-view__section__metrics-content", children: !f.isEmpty(i) && /* @__PURE__ */ e.jsx(
            je,
            {
              applicationNameProp: t.appName,
              selectedItem: i,
              renderTitle: () => /* @__PURE__ */ e.jsx(
                M,
                {
                  to: `/projects/${t.projectName}/${se}/${u}/${i.metadata.name}/${i.metadata.uid}/${ie}${window.location.search}`,
                  className: "data-ellipsis",
                  children: /* @__PURE__ */ e.jsx(
                    I,
                    {
                      template: /* @__PURE__ */ e.jsx(T, { text: i.name }),
                      children: i.name
                    }
                  )
                }
              )
            }
          ) }) }) })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  D as LIST_ID,
  R as LIST_ITEMS_ID,
  Ae as default
};
//# sourceMappingURL=ApplicationMetrics-Bzd8xNmI.mjs.map
