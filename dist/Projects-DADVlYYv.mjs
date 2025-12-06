import { bH as H, bI as ke, bJ as De, bK as Ie, bL as Ye, j as e, bM as ge, i as se, bN as $e, b0 as He, bO as ee, bP as Ve, bQ as We, bR as Ke, bS as Ge, bT as Je, bU as xe, bV as I, at as W, p as K, bW as Xe, P as n, bu as de, bv as ue, bX as ze, I as Qe, S as Ze, a0 as et, $ as tt, bY as st, e as U, bZ as at, b_ as nt, b$ as rt, c as _e, K as Ne, c0 as ot, c1 as we, y as ct, c2 as it, ag as lt, c3 as dt, f as ut, c4 as mt, c5 as pt, c6 as jt, c7 as ht, c8 as ft, c9 as bt, ca as me, cb as vt, cc as gt, cd as xt, ce as _t, V as D, cf as pe, cg as je, ch as Nt, ci as wt, cj as he, ck as fe, m as Rt, cl as yt, cm as Pt, cn as St, co as Ct, af as At } from "./main-CTYpZ6Nf.mjs";
import Re, { useRef as E, useState as N, useEffect as A, useMemo as Tt, useCallback as _ } from "react";
import { useSelector as q, useDispatch as ye } from "react-redux";
import { C as Mt } from "./Input-7Hc9IEQ_.mjs";
import { u as Ot, S as Et, a as qt } from "./clock-BFaispYx.mjs";
import { S as Lt, N as te } from "./StatsCard-Cm7Pku2T.mjs";
import { P as Ut } from "./PageHeader-ClcGdvsO.mjs";
import { useNavigate as Bt } from "react-router-dom";
import { R as Ft } from "./ReadOnlyChips-CK1USnQl.mjs";
import { P as kt, g as Dt, a as It } from "./ProjectsMonitoring-B9-YPh5F.mjs";
import { S as Yt } from "./alerts-DUEhWDHw.mjs";
import { S as be, A as $t, M as Ht } from "./exclamation-mark-kRjYDG-V.mjs";
import { Y as Vt } from "./YamlModal-CbqgOPCu.mjs";
var V = { exports: {} }, Wt = V.exports, ve;
function Kt() {
  return ve || (ve = 1, (function(p, f) {
    (function(o, r) {
      r();
    })(Wt, function() {
      function o(s, a) {
        return typeof a > "u" ? a = { autoBom: !1 } : typeof a != "object" && (console.warn("Deprecated: Expected third argument to be a object"), a = { autoBom: !a }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], { type: s.type }) : s;
      }
      function r(s, a, g) {
        var i = new XMLHttpRequest();
        i.open("GET", s), i.responseType = "blob", i.onload = function() {
          h(i.response, a, g);
        }, i.onerror = function() {
          console.error("could not download file");
        }, i.send();
      }
      function u(s) {
        var a = new XMLHttpRequest();
        a.open("HEAD", s, !1);
        try {
          a.send();
        } catch {
        }
        return 200 <= a.status && 299 >= a.status;
      }
      function j(s) {
        try {
          s.dispatchEvent(new MouseEvent("click"));
        } catch {
          var a = document.createEvent("MouseEvents");
          a.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), s.dispatchEvent(a);
        }
      }
      var c = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof H == "object" && H.global === H ? H : void 0, d = c.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), h = c.saveAs || (typeof window != "object" || window !== c ? function() {
      } : "download" in HTMLAnchorElement.prototype && !d ? function(s, a, g) {
        var i = c.URL || c.webkitURL, b = document.createElement("a");
        a = a || s.name || "download", b.download = a, b.rel = "noopener", typeof s == "string" ? (b.href = s, b.origin === location.origin ? j(b) : u(b.href) ? r(s, a, g) : j(b, b.target = "_blank")) : (b.href = i.createObjectURL(s), setTimeout(function() {
          i.revokeObjectURL(b.href);
        }, 4e4), setTimeout(function() {
          j(b);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(s, a, g) {
        if (a = a || s.name || "download", typeof s != "string") navigator.msSaveOrOpenBlob(o(s, g), a);
        else if (u(s)) r(s, a, g);
        else {
          var i = document.createElement("a");
          i.href = s, i.target = "_blank", setTimeout(function() {
            j(i);
          });
        }
      } : function(s, a, g, i) {
        if (i = i || open("", "_blank"), i && (i.document.title = i.document.body.innerText = "downloading..."), typeof s == "string") return r(s, a, g);
        var b = s.type === "application/octet-stream", S = /constructor/i.test(c.HTMLElement) || c.safari, m = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((m || b && S || d) && typeof FileReader < "u") {
          var R = new FileReader();
          R.onloadend = function() {
            var C = R.result;
            C = m ? C : C.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = C : location = C, i = null;
          }, R.readAsDataURL(s);
        } else {
          var L = c.URL || c.webkitURL, y = L.createObjectURL(s);
          i ? i.location = y : location.href = y, i = null, setTimeout(function() {
            L.revokeObjectURL(y);
          }, 4e4);
        }
      });
      c.saveAs = h.saveAs = h, p.exports = h;
    });
  })(V)), V.exports;
}
var Gt = Kt();
const Jt = /* @__PURE__ */ ke(Gt), Pe = ({ closeNewProjectPopUp: p, handleCreateProject: f, isOpen: o = !1 }) => {
  const r = q((s) => s.projectStore), u = q((s) => s.appStore.frontendSpec), j = {
    name: "",
    description: "",
    labels: []
  }, c = Re.useRef(
    De({
      initialValues: j,
      mutators: { ...Ye, setFieldState: Ie },
      onSubmit: f
    })
  ), d = ye(), { handleCloseModal: h } = Ot(p, c.current);
  return /* @__PURE__ */ e.jsxs(
    ge,
    {
      headerText: "Create new project",
      className: "create-project-dialog",
      closePopUp: h,
      isOpen: o,
      children: [
        r.loading && /* @__PURE__ */ e.jsx(se, {}),
        /* @__PURE__ */ e.jsx($e, { form: c.current, onSubmit: f, children: (s) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
            He,
            {
              async: !0,
              label: "Name",
              name: "name",
              required: !0,
              validationRules: ee("project.name")
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(Ve, { name: "description", label: "Description", maxLength: 255 }) }),
          /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
            We,
            {
              chipOptions: Ke("metrics"),
              formState: s,
              initialValues: j,
              isEditable: !0,
              label: "Labels",
              name: "labels",
              shortChips: !0,
              visibleChipsMaxLength: "2",
              validationRules: {
                key: ee(
                  "project.labels.key",
                  Ge(u.internal_labels)
                ),
                value: ee("project.labels.value")
              }
            }
          ) }),
          r.newProject.error && /* @__PURE__ */ e.jsx("div", { className: "form-row", children: /* @__PURE__ */ e.jsx(
            Je,
            {
              closeError: () => {
                r.newProject.error && d(xe());
              },
              message: r.newProject.error
            }
          ) }),
          /* @__PURE__ */ e.jsxs("div", { className: "pop-up-dialog__footer-container", children: [
            /* @__PURE__ */ e.jsx(
              I,
              {
                type: "button",
                disabled: r.loading,
                variant: W,
                label: "Cancel",
                className: "pop-up-dialog__btn_cancel",
                onClick: h
              }
            ),
            /* @__PURE__ */ e.jsx(
              I,
              {
                disabled: r.loading || Xe(s),
                variant: K,
                label: "Create",
                onClick: s.handleSubmit
              }
            )
          ] })
        ] }) })
      ]
    }
  );
};
Pe.propTypes = {
  closeNewProjectPopUp: n.func.isRequired,
  handleCreateProject: n.func.isRequired,
  isOpen: n.bool
};
const Se = ({
  actionsMenuHeader: p = "",
  disabled: f = !1,
  onClick: o = () => {
  },
  showActionsMenu: r = !1,
  variant: u = K
}) => /* @__PURE__ */ e.jsx(e.Fragment, { children: r && /* @__PURE__ */ e.jsx("div", { "data-testid": "actions-button", className: "page-actions-container", children: /* @__PURE__ */ e.jsx(
  I,
  {
    disabled: f,
    variant: u,
    label: p,
    className: "btn_register",
    onClick: o
  }
) }) });
Se.propTypes = {
  actionsMenuHeader: n.string,
  disabled: n.bool,
  onClick: n.func,
  showActionsMenu: n.bool,
  variant: n.string
};
const ae = Re.forwardRef(({ actionsMenu: p, alert: f, project: o, statistics: r }, u) => {
  const j = E(), c = E(), d = Bt(), { deletingProjects: h, projectsToDelete: s } = q((a) => a.projectStore);
  return /* @__PURE__ */ e.jsxs("div", { className: "project-card", children: [
    (Object.values(h).includes(o.metadata.name) || s.includes(o.metadata.name)) && /* @__PURE__ */ e.jsx(se, { section: !0 }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: (a) => {
          a.target.tagName !== "A" && !u.current.contains(a.target) && !c.current?.contains(a.target) && !a.target.closest("#overlay_container") && d(`/projects/${o.metadata.name}/monitor`);
        },
        ref: j,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "project-card__general-info", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "project-card__header", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "project-card__header-title", children: [
                /* @__PURE__ */ e.jsx(
                  de,
                  {
                    className: "project-card__title",
                    template: /* @__PURE__ */ e.jsx(ue, { text: o.metadata.name }),
                    children: o.metadata.name
                  }
                ),
                f ? /* @__PURE__ */ e.jsxs("div", { className: "project-card__alert", children: [
                  /* @__PURE__ */ e.jsx(Yt, { className: "project-card__alert-icon" }),
                  /* @__PURE__ */ e.jsx("div", { className: "project-card__alert-text", children: f.toLocaleString() })
                ] }) : null,
                /* @__PURE__ */ e.jsxs("div", { className: "project-card__info", "data-testid": "project-card__created", children: [
                  /* @__PURE__ */ e.jsx(Et, { className: "project-card__info-icon" }),
                  /* @__PURE__ */ e.jsxs("span", { children: [
                    "Created ",
                    ze(o.metadata.created)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: `project-card__header-sub-title project-card__info ${o.spec.owner ? "" : "visibility-hidden"} `,
                  "data-testid": "project-card__owner",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { children: "Owner:" }),
                    /* @__PURE__ */ e.jsx("span", { children: o.spec.owner })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "project-card__content", children: [
              /* @__PURE__ */ e.jsx("div", { className: "project-card__description", "data-testid": "project-card__description", children: o?.spec.description && /* @__PURE__ */ e.jsx(de, { template: /* @__PURE__ */ e.jsx(ue, { text: o.spec.description }), children: o.spec.description }) }),
              /* @__PURE__ */ e.jsx("div", { className: "project-card__statistic", children: /* @__PURE__ */ e.jsx(kt, { statistics: r }) })
            ] }),
            o.metadata.labels && /* @__PURE__ */ e.jsxs("div", { className: "project-card__info", ref: c, "data-testid": "project-card__labels", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Labels:" }),
              /* @__PURE__ */ e.jsx(Ft, { labels: o.metadata.labels, shortChips: !0 })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "project-card__actions-menu", ref: u, children: /* @__PURE__ */ e.jsx(Qe, { dataItem: o, menu: p[o.metadata.name] }) })
        ]
      }
    )
  ] });
});
ae.displayName = "ProjectCardView";
ae.propTypes = {
  actionsMenu: n.object.isRequired,
  alert: n.number.isRequired,
  project: n.object.isRequired,
  statistics: n.object.isRequired
};
const Xt = (p = {}, f, o, r, u = [], j) => {
  const c = Dt(u, "metadata.name"), d = Object.values(c).reduce(
    (s, a) => a.status.state === Ze && !a.spec.disable ? s += 1 : s,
    0
  ), h = Object.values(c).reduce(
    (s, a) => a.status.state === et ? s += 1 : s,
    0
  );
  return {
    runningJobs: {
      className: !f && !r && p?.runs_running_count + d > 0 ? st : "default",
      counterTooltip: "ML jobs and Nuclio functions",
      label: "Running",
      loading: o || j,
      value: f || r ? "N/A" : U.isEmpty(p) ? "-" : p?.runs_running_count + d
    },
    failedJobs: {
      className: !f && !r && p.runs_failed_recent_count + h > 0 ? tt : "default",
      counterTooltip: "Failed ML jobs and nuclio functions in the last 24 hours",
      label: "Failed",
      labelClassName: "wrap",
      loading: o || j,
      value: f || r ? "N/A" : U.isEmpty(p) ? "-" : p.runs_failed_recent_count + h
    }
    // models: {
    //   className: 'default',
    //   label: 'Models',
    //   loading: projectsSummaryLoading,
    //   value: fetchProjectsSummaryFailure
    //     ? 'N/A'
    //     : isEmpty(projectSummary)
    //     ? '-'
    //     : projectSummary.models_count
    // },
    // featureSets: {
    //   className: 'default',
    //   label: 'Feature sets',
    //   loading: projectsSummaryLoading,
    //   value: fetchProjectsSummaryFailure
    //     ? 'N/A'
    //     : isEmpty(projectSummary)
    //     ? '-'
    //     : projectSummary.feature_sets_count
    // },
    // files: {
    //   className: 'default',
    //   label: 'Files',
    //   loading: projectsSummaryLoading,
    //   value: fetchProjectsSummaryFailure
    //     ? 'N/A'
    //     : isEmpty(projectSummary)
    //     ? '-'
    //     : projectSummary.files_count
    // }
  };
}, Ce = ({ actionsMenu: p, alert: f, project: o, projectSummary: r }) => {
  const [u, j] = N(!1), c = q((a) => a.projectStore), d = q((a) => a.nuclioStore), h = E();
  A(() => {
    j(
      d.error && !d.functions[o.metadata.name]
    );
  }, [o.metadata.name, d.functions, d.error]);
  const s = Tt(() => Xt(
    r,
    c.projectsSummary.error,
    c.projectsSummary.loading,
    u,
    d.functions[o.metadata.name],
    d.loading
  ), [
    u,
    d.functions,
    d.loading,
    o.metadata.name,
    c.projectsSummary.error,
    c.projectsSummary.loading,
    r
  ]);
  return /* @__PURE__ */ e.jsx(
    ae,
    {
      actionsMenu: p,
      alert: f,
      project: o,
      statistics: s,
      ref: h
    }
  );
};
Ce.propTypes = {
  actionsMenu: n.object.isRequired,
  alert: n.number.isRequired,
  project: n.object.isRequired,
  projectSummary: n.object
};
const Ae = ({
  disabled: p = !1,
  mainButton: f = {
    label: "Main",
    onClick: () => {
    },
    variant: W
  },
  additionalButton: o = {
    icon: /* @__PURE__ */ e.jsx(be, {}),
    label: "",
    options: [],
    onSelectOption: () => {
    },
    selectedOption: {},
    variant: W
  }
}) => {
  const { onClick: r, ...u } = f, { icon: j, options: c, onSelectOption: d, selectedOption: h, ...s } = o, [a, g] = N(!1), i = E();
  at(i, () => g(!1));
  const b = (m) => {
    m.target.closest(".options-menu") || g(!1);
  }, S = () => {
    r(), g(!1);
  };
  return A(() => (a && window.addEventListener("scroll", b, !0), () => {
    window.removeEventListener("scroll", b, !0);
  }), [a]), /* @__PURE__ */ e.jsxs("div", { className: "split-btn", ref: i, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "split-btn__header", children: [
      /* @__PURE__ */ e.jsx("div", { className: "split-btn__button", children: /* @__PURE__ */ e.jsx(I, { ...u, onClick: S, disabled: p }) }),
      /* @__PURE__ */ e.jsx("div", { className: "split-btn__button", children: /* @__PURE__ */ e.jsx(
        I,
        {
          ...s,
          disabled: p,
          icon: j ?? /* @__PURE__ */ e.jsx(be, {}),
          onClick: () => g((m) => !m)
        }
      ) })
    ] }),
    !U.isEmpty(c) && /* @__PURE__ */ e.jsx(nt, { show: a, ref: { refInputContainer: i }, children: c.map((m) => /* @__PURE__ */ e.jsx(
      rt,
      {
        withSelectedIcon: !0,
        item: m,
        name: m.id,
        onClick: d,
        selectType: "",
        selectedId: h?.id
      },
      m.id
    )) })
  ] });
};
Ae.propTypes = {
  disabled: n.bool,
  mainButton: Ht,
  additionalButton: $t
};
const Te = ({
  disabled: p = !1,
  isDescendingOrder: f,
  onSelectOption: o,
  options: r,
  selectedId: u,
  setIsDescendingOrder: j
}) => {
  const [c, d] = N(null), h = _e(
    "sort-icon",
    f ? "sort-icon_down" : "sort-icon_up"
  );
  return A(() => {
    d(r.find((s) => s.id === u));
  }, [r, u]), /* @__PURE__ */ e.jsx("div", { className: "sort", children: /* @__PURE__ */ e.jsx(
    Ae,
    {
      disabled: p,
      mainButton: {
        icon: /* @__PURE__ */ e.jsx(Lt, { className: h }),
        label: c?.label ?? "Sort",
        onClick: () => j((s) => !s)
      },
      additionalButton: {
        label: "",
        onSelectOption: o,
        options: r,
        selectedOption: c
      }
    }
  ) });
};
Te.propTypes = {
  disabled: n.bool,
  isDescendingOrder: n.bool.isRequired,
  onSelectOption: n.func.isRequired,
  options: n.array.isRequired,
  selectedId: n.string.isRequired,
  setIsDescendingOrder: n.func.isRequired
};
const Me = ({
  actionsMenu: p,
  alertStore: f,
  closeNewProjectPopUp: o,
  confirmData: r = null,
  convertedYaml: u,
  convertToYaml: j,
  createProject: c,
  filterByName: d,
  filteredProjects: h,
  filterMatches: s,
  handleCreateProject: a,
  handleSearchOnChange: g,
  handleSelectSortOption: i,
  isDescendingOrder: b,
  projectsRequestErrorMessage: S,
  projectStore: m,
  refreshProjects: R,
  selectedProjectsState: L,
  setCreateProject: y,
  setFilterMatches: C,
  setIsDescendingOrder: G,
  setSelectedProjectsState: J,
  sortProjectId: F,
  tasksStore: Y
}) => {
  const B = _e(
    "projects",
    (c || u.length > 0) && "projects-modal_opened"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: B, children: [
    (m.loading || m.project.loading || Y.loading) && /* @__PURE__ */ e.jsx(se, {}),
    m.mlrunUnhealthy.isUnhealthy && /* @__PURE__ */ e.jsx(ge, { headerIsHidden: !0, children: "MLRun seems to be down. Try again in a few minutes." }),
    c && /* @__PURE__ */ e.jsx(
      Pe,
      {
        isOpen: c,
        closeNewProjectPopUp: o,
        handleCreateProject: a
      }
    ),
    r && /* @__PURE__ */ e.jsx(
      Ne,
      {
        cancelButton: {
          handler: r.rejectHandler,
          label: "Cancel",
          variant: W
        },
        closePopUp: r.rejectHandler,
        confirmButton: {
          handler: r.confirmHandler,
          label: r.btnConfirmLabel,
          variant: r.btnConfirmType
        },
        isOpen: !!r,
        header: r.header,
        message: r.message
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "projects__wrapper", children: [
      /* @__PURE__ */ e.jsx(It, {}),
      /* @__PURE__ */ e.jsx(Ut, { title: "Projects" }),
      /* @__PURE__ */ e.jsx("div", { className: "projects-content-header", children: /* @__PURE__ */ e.jsxs("div", { className: "projects-content-header__row", children: [
        /* @__PURE__ */ e.jsx("div", { className: "projects-content-header__col", children: /* @__PURE__ */ e.jsx("div", { className: "projects-content-header-item", children: /* @__PURE__ */ e.jsx(
          Mt,
          {
            activeTab: L,
            disabled: m.mlrunUnhealthy.retrying,
            screen: "active",
            tabs: ot,
            onClick: J
          }
        ) }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "projects-content-header__col projects-content-header__col-right", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "projects-content-header-item", children: [
            /* @__PURE__ */ e.jsx(
              qt,
              {
                className: "projects-search",
                disabled: m.mlrunUnhealthy.retrying,
                matches: s,
                onChange: g,
                placeholder: "Search projects...",
                setMatches: C,
                value: d
              }
            ),
            /* @__PURE__ */ e.jsx(
              Te,
              {
                disabled: m.mlrunUnhealthy.retrying,
                isDescendingOrder: b,
                onSelectOption: i,
                options: we,
                selectedId: F,
                setIsDescendingOrder: G
              }
            ),
            /* @__PURE__ */ e.jsx(
              Se,
              {
                actionsMenuHeader: "New project",
                disabled: m.mlrunUnhealthy.retrying,
                onClick: () => y(!0),
                showActionsMenu: !0,
                variant: K
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx(
            ct,
            {
              disabled: m.mlrunUnhealthy.retrying,
              onClick: R,
              className: "panel-title__btn_close",
              tooltipText: "Refresh",
              id: "pop-up-close-btn",
              children: /* @__PURE__ */ e.jsx(it, {})
            }
          )
        ] })
      ] }) }),
      m.projects.length > 0 && !m.error ? d.length > 0 && s.length === 0 ? /* @__PURE__ */ e.jsx(te, {}) : h.length === 0 ? /* @__PURE__ */ e.jsx(te, { message: `No ${L} projects.` }) : /* @__PURE__ */ e.jsx("div", { className: "projects-content", children: h.map((T) => /* @__PURE__ */ e.jsx(
        Ce,
        {
          actionsMenu: p,
          alert: f[T.metadata.name] || 0,
          project: T,
          projectSummary: m.projectsSummary.data.find(
            (l) => l.name === T.metadata.name
          )
        },
        T.id || T.metadata.name
      )) }) : m.loading ? null : /* @__PURE__ */ e.jsx(
        te,
        {
          message: m.mlrunUnhealthy.retrying ? "Retrieving projects." : S || "Your projects list is empty."
        }
      )
    ] }),
    u.length > 0 && /* @__PURE__ */ e.jsx(Vt, { convertedYaml: u, toggleConvertToYaml: j })
  ] });
};
Me.propTypes = {
  actionsMenu: n.object.isRequired,
  alertStore: n.object.isRequired,
  closeNewProjectPopUp: n.func.isRequired,
  confirmData: n.object,
  convertToYaml: n.func.isRequired,
  convertedYaml: n.string.isRequired,
  createProject: n.bool.isRequired,
  filterByName: n.string.isRequired,
  filterMatches: n.arrayOf(n.string).isRequired,
  filteredProjects: n.arrayOf(n.object).isRequired,
  handleCreateProject: n.func.isRequired,
  handleSearchOnChange: n.func.isRequired,
  handleSelectSortOption: n.func.isRequired,
  isDescendingOrder: n.bool.isRequired,
  projectStore: n.object.isRequired,
  projectsRequestErrorMessage: n.string.isRequired,
  refreshProjects: n.func.isRequired,
  selectedProjectsState: n.string.isRequired,
  setCreateProject: n.func.isRequired,
  setFilterMatches: n.func.isRequired,
  setIsDescendingOrder: n.func.isRequired,
  setSelectedProjectsState: n.func.isRequired,
  sortProjectId: n.string.isRequired,
  tasksStore: n.object.isRequired
};
const ds = () => {
  const [p, f] = N({}), [o, r] = N(null), [u, j] = N(""), [c, d] = N(!1), [h, s] = N([]), [a, g] = N(""), [i, b] = N([]), [S, m] = N(!1), [R, L] = N("active"), [y, C] = N("byName"), [G, J] = N(""), F = E(new AbortController()), Y = E(null), B = E({}), T = E(!1), l = ye(), { isDemoMode: Oe } = lt(), { isNuclioModeDisabled: ne } = dt(), Ee = q((t) => t.projectStore.projectTotalAlerts), w = q((t) => t.projectStore), qe = q((t) => t.tasksStore);
  A(() => {
    B.current = w.deletingProjects;
  }, [w.deletingProjects]);
  const M = _(() => {
    l(
      ut({
        params: { format: "minimal" },
        setRequestErrorMessage: J
      })
    );
  }, [l]), X = _(
    (t) => R === "active" && t.status.state !== "archived" || t.status.state === R,
    [R]
  ), re = _(
    (t) => a.length > 0 ? t.metadata.name.toLocaleLowerCase().includes(a.toLocaleLowerCase()) && X(t) : X(t),
    [a, X]
  ), oe = _(
    (t) => {
      const v = we.find((x) => x.id === y).path;
      return U.orderBy(t, [v], [S ? "desc" : "asc"]);
    },
    [S, y]
  ), P = _(() => {
    F.current = new AbortController(), ne || l(mt()), l(pt()), M(), l(
      jt({ signal: F.current.signal, refresh: P })
    ).unwrap().then((t) => {
      t && (ht(t, l), ft(t, l));
    }).catch(() => {
    }), U.isEmpty(B.current) || l(bt({})).unwrap().then((t) => {
      const v = t.some(
        (O) => O.metadata.kind.startsWith(me)
      ), x = t.filter(
        (O) => O.metadata.kind.startsWith(
          v ? me : vt
        ) && O?.status?.state === gt && B.current[O.metadata.name]
      ).reduce((O, le) => (O[le.metadata.name] = U.last(le.metadata.kind.split(".")), O), {});
      U.isEmpty(x) ? l(_t({})) : xt(Y, x, P, l);
    }).catch((t) => {
      D(l, t, "");
    });
  }, [ne, l, M]), Le = _(
    (t) => {
      g(t), !T.current && t.length >= 1 && (P(), T.current = !0);
    },
    [P, g]
  ), Ue = (t) => {
    C(t), t === "byDate" && y !== "byDate" && m(!0);
  }, z = _(
    (t) => {
      l(pe({ project: t.metadata.name, status: "archived" })).unwrap().then(() => {
        M();
      }).catch((v) => {
        const x = v.response?.status === je ? `You do not have permission to archive project ${t.metadata.name}` : `Failed to archive project ${t.metadata.name}`;
        D(
          l,
          v,
          "",
          x,
          () => z(t)
        );
      }), r(null);
    },
    [l, M]
  ), Q = _(
    (t) => {
      l(
        pe({ project: t.metadata.name, status: Nt })
      ).unwrap().then(() => {
        M();
      }).catch((v) => {
        const x = v.response?.status === wt ? `Failed to unarchive project ${t.metadata.name}. The project was not found.` : v.response?.status === je ? `You do not have permission to unarchive project ${t.metadata.name}` : `Failed to unarchive project ${t.metadata.name}`;
        D(
          l,
          v,
          "",
          x,
          () => Q(t)
        );
      });
    },
    [l, M]
  ), $ = _(
    (t) => {
      if (u.length > 0)
        return j("");
      j(he.dump(t, { lineWidth: -1 }));
    },
    [u.length]
  ), ce = _(
    (t) => {
      r({
        item: t.metadata.name,
        header: "Archive project",
        message: "Archived projects continue to consume resources.To stop the project from consuming resources, delete its scheduled jobs and suspend its Nuclio functions.",
        btnConfirmLabel: "Archive",
        btnConfirmType: K,
        rejectHandler: () => {
          r(null);
        },
        confirmHandler: () => z(t)
      });
    },
    [z]
  ), k = _(
    (t) => {
      t?.metadata?.name && l(fe({ project: t.metadata.name })).unwrap().then((v) => {
        var x = new Blob([he.dump(v?.data, { lineWidth: -1 })]);
        Jt.saveAs(x, `${t.metadata.name}.yaml`);
      }).catch((v) => {
        D(
          l,
          v,
          "",
          "Failed to fetch project's YAML",
          () => k(t)
        );
      });
    },
    [l]
  ), Z = _(
    (t) => {
      t?.metadata?.name ? l(fe({ project: t.metadata.name })).unwrap().then((x) => {
        x.headers.get("content-length") > 2e6 ? Rt(Ne, {
          header: "The project YAML can't be displayed",
          message: "The file is too large to display. Press 'Export YAML' to download it.",
          confirmButton: {
            handler: () => k(t),
            label: "Export YAML"
          }
        }) : $(x?.data);
      }).catch((x) => {
        j(""), D(
          l,
          x,
          "",
          "Failed to fetch project's YAML",
          () => Z(t)
        );
      }) : j("");
    },
    [$, l, k]
  ), ie = _(
    (t) => yt(
      t.metadata.name,
      r,
      l,
      B,
      Y,
      M,
      null,
      P
    ),
    [l, M, P]
  );
  A(() => {
    f(
      Pt(
        w.projects,
        w.deletingProjects,
        k,
        Z,
        ce,
        Q,
        ie
      )
    );
  }, [
    $,
    ie,
    w.deletingProjects,
    k,
    Q,
    Oe,
    ce,
    w.projects,
    Z
  ]), A(() => {
    P();
  }, [P]), A(() => () => {
    F.current.abort();
  }, []), A(() => {
    s(oe(w.projects.filter(re)));
  }, [re, oe, w.projects]), A(() => {
    a.length > 0 && b(h.map((t) => t.metadata.name));
  }, [a, h]);
  const Be = _(() => {
    w.newProject.error && l(xe()), d(!1);
  }, [l, w.newProject.error]), Fe = (t) => {
    l(
      St({
        postData: {
          metadata: {
            name: t.name,
            labels: t.labels?.reduce((v, x) => (v[x.key] = x.value, v), {}) ?? {}
          },
          spec: {
            description: t.description
          }
        }
      })
    ).unwrap().then((v) => {
      v && (d(!1), P(), l(Ct()), l(
        At({
          status: 200,
          id: Math.random(),
          message: `Project "${v.metadata?.name}" was created successfully`
        })
      ));
    }).catch(() => {
    });
  };
  return /* @__PURE__ */ e.jsx(
    Me,
    {
      actionsMenu: p,
      alertStore: Ee,
      closeNewProjectPopUp: Be,
      confirmData: o,
      convertedYaml: u,
      convertToYaml: $,
      createProject: c,
      filterByName: a,
      filteredProjects: h,
      filterMatches: i,
      handleCreateProject: Fe,
      handleSearchOnChange: Le,
      handleSelectSortOption: Ue,
      isDescendingOrder: S,
      projectsRequestErrorMessage: G,
      projectStore: w,
      refreshProjects: P,
      selectedProjectsState: R,
      setCreateProject: d,
      setFilterMatches: b,
      setIsDescendingOrder: m,
      setSelectedProjectsState: L,
      sortProjectId: y,
      tasksStore: qe
    }
  );
};
export {
  ds as default
};
//# sourceMappingURL=Projects-DADVlYYv.mjs.map
