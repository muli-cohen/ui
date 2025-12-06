import { l as fs, bZ as gs, e as A, dV as Ke, j as e, bM as _s, c as le, bV as Y, at as _e, p as ge, dW as k, V as H, dX as J, af as de, cg as me, dY as ue, P as M, bJ as We, ck as Es, dZ as q, bb as De, d_ as ee, d$ as ke, e0 as se, e1 as te, e2 as ae, e3 as W, e4 as re, e5 as ne, e6 as ie, cA as Ye, e7 as ve, e8 as Xe, dk as Ss, e9 as Ve, ea as Be, eb as xs, i as pe, bN as Qe, b0 as Se, aQ as Cs, b2 as Rs, bP as Ge, bQ as vs, bO as K, bR as Ns, bS as ws, cq as es, ec as Ne, bK as ss, bL as ts, ed as ys, ee as Fe, ef as Ts, eg as we, eh as $e, ei as z, ej as qe, ek as ye, a3 as Ms, K as Oe, as, y as Is, bw as Os, el as rs, em as Ps, en as ns, eo as Pe, ep as Ae, eq as As, f as Ls, cl as Us, du as Ds } from "./main-CTYpZ6Nf.mjs";
import * as Z from "react";
import is, { useState as y, useRef as V, useEffect as F, useCallback as U, useReducer as ks, useMemo as xe } from "react";
import { useDispatch as be, useSelector as he } from "react-redux";
import { useParams as Le, useLocation as Vs, useNavigate as Bs } from "react-router-dom";
import { I as os, C as Gs } from "./Input-7Hc9IEQ_.mjs";
import { a as Fs } from "./search-CsL7YQlT.mjs";
import { C as $s } from "./CheckBox-DBJrW14Y.mjs";
import { S as Te, a as qs, b as Js } from "./add-CmKOUDFO.mjs";
import { b as Je } from "./exclamation-mark-kRjYDG-V.mjs";
import { B as zs } from "./Breadcrumbs-DDXz9SNg.mjs";
const Ue = (a) => {
  const r = fs.getStorageValue("igzFullVersion");
  if (r) {
    const n = a.split(".").map(Number), t = r.split("-")[0].split(".").map(Number);
    for (let l = 0; l < 3; l++) {
      if (t[l] < n[l])
        return !1;
      if (t[l] > n[l])
        break;
    }
  }
  return !0;
}, cs = ({ changeOwnerCallback: a, projectId: r }) => {
  const [n, t] = y(""), [l, S] = y(""), [i, o] = y([]), [C, m] = y(!1), c = V(null), f = V(null), _ = be();
  gs(c, () => m(!1));
  const { width: x } = f?.current?.getBoundingClientRect() || {};
  F(() => {
    i.filter((s) => s.label.toLowerCase().includes(n.toLowerCase())).length === 0 && m(!1);
  }, [n, i]);
  const E = () => {
    t(""), S(""), o([]), m(!1);
  }, d = () => {
    if (l) {
      const s = {
        data: {
          type: "project",
          attributes: {},
          relationships: {
            owner: {
              data: {
                id: l,
                type: J
              }
            }
          }
        }
      };
      k.editProject(r, s).then(a).then(() => {
        _(
          de({
            status: 200,
            id: Math.random(),
            message: "Owner updated successfully"
          })
        );
      }).catch((u) => {
        const v = u.response?.status === me ? "Missing edit permission for the project" : ue(u, "Failed to edit project data");
        H(_, u, "", v, () => d());
      }).finally(E);
    }
  }, j = async (s, u) => {
    const v = {
      "filter[assigned_policies]": "[$contains_any]Developer,Project Admin",
      "page[size]": 200
    }, B = "3.5.3";
    let h = [];
    Ue(B) && (v["filter[username]"] = `[$contains_istr]${s}`);
    try {
      const N = await k.getScrubbedUsers({
        params: v
      }), {
        data: { data: L }
      } = N;
      h = L.map((D) => ({
        name: `${D.attributes.first_name} ${D.attributes.last_name}`,
        username: D.attributes.username,
        label: `${D.attributes.first_name} ${D.attributes.last_name} (${D.attributes.username})`,
        id: D.id,
        role: ""
      })), o(h);
    } catch (N) {
      H(_, N, "Failed to fetch users");
    }
    u(h);
  }, R = A.debounce((s) => {
    const u = Ke(s);
    t(u), u !== "" ? j(s, (v) => {
      m(!0);
      const B = v.find(
        (h) => h.name === u || h.username === u
      );
      S(B?.id || "");
    }) : S("");
  }, 500);
  return /* @__PURE__ */ e.jsx("div", { className: "change-owner", children: /* @__PURE__ */ e.jsxs("div", { className: "owner-table", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "search-row", ref: f, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "search-input", children: [
        /* @__PURE__ */ e.jsx(Fs, {}),
        /* @__PURE__ */ e.jsx(
          os,
          {
            density: "dense",
            onChange: R,
            id: "owner",
            placeholder: "Type to select new owner...",
            ref: c,
            type: "text",
            value: n,
            withoutBorder: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "search-role", children: "Owner" }),
      C && /* @__PURE__ */ e.jsx(
        _s,
        {
          className: "search-dropdown",
          headerIsHidden: !0,
          customPosition: {
            element: f,
            position: "bottom-right"
          },
          style: { width: `${x}px` },
          children: /* @__PURE__ */ e.jsx("div", { className: "members-list", children: i.filter((s) => s.label.toLowerCase().includes(n.toLowerCase())).map((s) => {
            const u = le("member-row", s.role && "disabled");
            return /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: u,
                onClick: () => {
                  s.role || (S(s.id), t(s.name), m(!1));
                },
                children: [
                  /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: "member-name",
                      dangerouslySetInnerHTML: {
                        __html: s.label.replace(
                          new RegExp(n, "gi"),
                          (v) => v && `<b>${v}</b>`
                        )
                      }
                    }
                  ),
                  /* @__PURE__ */ e.jsx("span", { className: "member-role", children: s.role })
                ]
              },
              s.id
            );
          }) })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "footer-actions", children: /* @__PURE__ */ e.jsxs("div", { className: "apply-discard-buttons", children: [
      /* @__PURE__ */ e.jsx(
        Y,
        {
          disabled: !l,
          className: "pop-up-dialog__btn_cancel",
          label: "Discard",
          onClick: E,
          variant: _e
        }
      ),
      /* @__PURE__ */ e.jsx(
        Y,
        {
          disabled: !l,
          label: "Apply",
          onClick: d,
          variant: ge
        }
      )
    ] }) })
  ] }) });
};
cs.propTypes = {
  changeOwnerCallback: M.func.isRequired,
  projectId: M.string.isRequired
};
const Hs = "3.5.5", Ce = Ue(
  Hs
), ls = ({
  changeOwnerCallback: a,
  membersState: r,
  projectMembershipIsEnabled: n,
  projectOwnerIsShown: t
}) => {
  const [l, S] = y(!1), [i, o] = y({}), C = V(!0), m = he((s) => s.projectStore), c = he((s) => s.appStore.frontendSpec), f = V(
    We({
      initialValues: {},
      mutators: { ...ts, setFieldState: ss },
      onSubmit: () => {
      }
    })
  ), _ = V(null), x = Le(), E = be();
  F(() => {
    l || (S(!0), E(Es({ project: x.projectName })).unwrap().then((s) => {
      const u = {
        [ne]: s?.data?.spec?.[ne],
        [re]: s?.data?.spec?.[re],
        [W]: s?.data?.spec?.[W],
        [ae]: s?.data?.spec?.[ae],
        [te]: s?.data?.spec?.[te],
        [se]: s?.data?.spec?.[se],
        [ee]: ke(s?.data?.spec?.[ee] || {}),
        [q]: De(
          s?.data?.metadata?.[q],
          c.internal_labels || []
        )
      };
      Ce && (u[ie] = ke(
        s?.data?.spec?.[ie]
      )), C.current = !A.isEmpty(c), o(u), _.current.form.restart(u);
    }).catch((s) => {
      const u = s.response?.status === me ? "Permission denied" : ue(s, "Failed to fetch project data");
      H(E, s, "", u);
    }));
  }, [x.pageTab, x.projectName, E, c, l]), F(() => {
    if (!A.isEmpty(c) && !A.isEmpty(i) && !C.current) {
      const s = De(
        m.project.data?.metadata?.[q],
        c.internal_labels || []
      );
      _.current.form.change(q, s), o((u) => ({
        ...u,
        [q]: s
      })), C.current = !0;
    }
  }, [c, m.project.data, i]), F(() => () => {
    E(Ye()), S(!1);
  }, [E]);
  const d = U(
    (s) => {
      ve.editProject(x.projectName, s).then(() => {
        E(
          de({
            status: 200,
            id: Math.random(),
            message: "Data was edited successfully"
          })
        );
      }).catch((u) => {
        const v = u.response?.status === me ? "Missing edit permission for the project" : ue(u, "Failed to edit project data");
        H(
          E,
          u,
          "",
          v,
          () => d(s)
        );
      });
    },
    [E, x.projectName]
  ), j = U(() => {
    setTimeout(() => {
      const s = _.current;
      if (!A.isEmpty(i) && Xe(i, s.values) && s.valid) {
        let u = A.cloneDeep(m.project.data);
        u = {
          ...u,
          spec: {
            ...u.spec,
            [ne]: s.values[ne] ?? "",
            [re]: s.values[re] ?? "",
            [W]: s.values[W],
            [ae]: s.values[ae] ?? "",
            [te]: s.values[te] ?? "",
            [se]: s.values[se] ?? "",
            [ee]: Ve(
              Be(s.values[ee])
            )
          },
          metadata: {
            ...u.metadata,
            [q]: Ss(s.values[q])
          }
        }, Ce && (u.spec[ie] = Ve(
          Be(s.values[ie])
        )), o(s.values), d(u);
      }
    });
  }, [i, m.project.data, d]), R = U((s) => {
    s.keyCode === xs.ENTER && (s.preventDefault(), s.target.blur());
  }, []);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    (m.loading || m.project.loading) && /* @__PURE__ */ e.jsx(pe, {}),
    /* @__PURE__ */ e.jsx(Qe, { form: f.current, onSubmit: () => {
    }, children: (s) => (_.current = s, /* @__PURE__ */ e.jsx("div", { className: "settings__card", children: m.project.loading ? /* @__PURE__ */ e.jsx(pe, {}) : m.project.error ? /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx("h1", { children: m.project.error.message }) }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("div", { className: "settings__card-title", children: /* @__PURE__ */ e.jsxs("span", { children: [
        "Project: ",
        x.projectName || ""
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "settings__card-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "settings__card-content-col", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "settings__source", children: [
            /* @__PURE__ */ e.jsx(
              Se,
              {
                className: "source-url",
                name: ne,
                label: "Source URL",
                tip: "Source URL is the Git Repo that is associated with the project. When the user pulls the project it will use the source URL to pull from",
                link: { show: !0 },
                onBlur: j,
                onKeyDown: R
              }
            ),
            /* @__PURE__ */ e.jsx(
              Cs,
              {
                className: "pull-at-runtime",
                label: "Pull at runtime",
                name: W
              }
            ),
            /* @__PURE__ */ e.jsx(Rs, { handler: j, name: W })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "settings__artifact-path", children: [
            /* @__PURE__ */ e.jsx(
              Se,
              {
                name: re,
                label: "Artifact path",
                onBlur: j,
                onKeyDown: R,
                placeholder: c.default_artifact_path ?? ""
              }
            ),
            /* @__PURE__ */ e.jsxs("span", { className: "settings__artifact-path-link", children: [
              "Enter the default path for saving the artifacts within your projectStore.project.",
              /* @__PURE__ */ e.jsx(
                "a",
                {
                  className: "link",
                  href: "https://docs.mlrun.org/en/latest/store/artifacts.html",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Read more"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "settings__default-image", children: /* @__PURE__ */ e.jsx(
            Se,
            {
              name: ae,
              label: "Default image",
              onBlur: j,
              onKeyDown: R
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "settings__description", "data-testid": "project-description", children: /* @__PURE__ */ e.jsx(
            Ge,
            {
              maxLength: 255,
              name: te,
              label: "Project description",
              onBlur: j
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "settings__goals", "data-testid": "project-goals", children: /* @__PURE__ */ e.jsx(
            Ge,
            {
              name: se,
              label: "Project goals",
              rows: 5,
              onBlur: j
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "settings__labels", children: /* @__PURE__ */ e.jsx(
            vs,
            {
              chipOptions: Ns("metrics"),
              formState: s,
              initialValues: s.initialValues,
              isEditable: C.current,
              label: "Labels",
              name: q,
              shortChips: !0,
              onExitEditModeCallback: j,
              visibleChipsMaxLength: "all",
              validationRules: {
                key: K(
                  "project.labels.key",
                  ws(c.internal_labels)
                ),
                value: K("project.labels.value")
              }
            },
            `${q}_${C.current}`
          ) }),
          Ce && /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "settings__card-title", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Node Selectors" }),
              /* @__PURE__ */ e.jsx(
                es,
                {
                  text: `Ensure that the node selectors you are configuring are compatible with the available nodes in your cluster. Incompatible node selectors will not be validated at the project level and might result in scheduling issues when running functions.
                          If there is a conflict with the function node selector you defined or if the pod cannot be scheduled for some reason, check the project/platform configuration Key:Value combinations to see if there is a node selection causing the issue. If, after consulting with the project/general admin, you want to delete a global setting, enter the Key here, but leave the Value empty.`
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(
              Ne,
              {
                addNewItemLabel: "Add node selector",
                keyValidationRules: K("nodeSelectors.key"),
                valueValidationRules: K("nodeSelectors.value"),
                onExitEditModeCallback: j,
                fieldsPath: ie,
                formState: s,
                isValueRequired: !1
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "settings__card-content-col", children: [
          !c.ce?.version && /* @__PURE__ */ e.jsxs("div", { className: "settings__owner", children: [
            /* @__PURE__ */ e.jsx("div", { className: "settings__owner-row", children: /* @__PURE__ */ e.jsxs("div", { className: "row-value", children: [
              /* @__PURE__ */ e.jsx("span", { className: "row-label", children: "Owner:" }),
              /* @__PURE__ */ e.jsx("span", { className: "row-name", children: r.projectInfo?.owner?.username || m.project.data?.spec?.owner })
            ] }) }),
            n && t && /* @__PURE__ */ e.jsx(
              cs,
              {
                changeOwnerCallback: a,
                projectId: r.projectInfo.id
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "settings__card-title", children: "Parameters" }),
            /* @__PURE__ */ e.jsx("p", { className: "settings__card-subtitle", children: "The parameters enable users to pass key/value to the project context that can later be used for running jobs & pipelines" }),
            /* @__PURE__ */ e.jsx(
              Ne,
              {
                addNewItemLabel: "Add parameter",
                keyValidationRules: K("project.params.key"),
                valueValidationRules: K("project.params.value"),
                onExitEditModeCallback: j,
                fieldsPath: ee,
                formState: s
              }
            )
          ] })
        ] })
      ] })
    ] }) })) })
  ] });
};
ls.propTypes = {
  changeOwnerCallback: M.func.isRequired
};
const ds = ({
  addChip: a,
  chipOptions: r = {
    background: "grey",
    boldValue: !1,
    borderRadius: "secondary",
    borderColor: "transparent",
    density: "dense",
    font: "primary"
  },
  className: n,
  elements: t = [],
  isDeleteMode: l = !0,
  onInputChange: S,
  placeholder: i = "",
  removeChip: o = () => {
  },
  suggestionList: C
}) => {
  const [m, c] = y(""), [f, _] = y([]), [x, E] = y(!1), d = V(null), j = V(null), R = le("chips-input-container", n), s = le(
    "auto-resizable-input",
    t.length === 0 && "full-width"
  );
  F(() => {
    const h = C.filter((N) => N.label.toLowerCase().includes(m.toLowerCase()) && !t.find((L) => L.id === N.id));
    _(h);
  }, [t, C, m]), F(() => {
    E(m && f.length > 0);
  }, [f.length, m]);
  const u = U(
    (h) => {
      h.disabled || (a(h), c(""));
    },
    [a]
  ), v = U(
    (h) => {
      const N = Ke(h.target.value);
      h.target.parentNode.dataset.value = h.target.value, c(N), S(N);
    },
    [S]
  ), B = U(
    (h, N) => {
      o(N);
    },
    [o]
  );
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: R,
      ref: d,
      onClick: () => {
        j.current.focus();
      },
      children: [
        t.map((h, N) => /* @__PURE__ */ e.jsx(
          ys,
          {
            chip: { value: h.label, id: h.id },
            chipIndex: N,
            chipOptions: r,
            handleRemoveChip: B,
            isDeleteMode: l,
            ref: d,
            showChips: !0
          },
          `${h.value}${N}`
        )),
        /* @__PURE__ */ e.jsx("div", { className: s, children: /* @__PURE__ */ e.jsx(
          "input",
          {
            autoComplete: "off",
            name: "chip-input",
            ref: j,
            type: "text",
            onChange: v,
            placeholder: t.length === 0 ? i : "",
            value: m
          }
        ) }),
        x && /* @__PURE__ */ e.jsx("div", { className: "suggestion-list", children: f.map((h) => {
          const N = le(
            "suggestion-row",
            h.disabled && "disabled"
          );
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: N,
              onClick: () => {
                u(h);
              },
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "suggestion-row-value", children: [
                  h.icon && /* @__PURE__ */ e.jsx("div", { className: "suggestion-row-icon", children: h.icon }),
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "suggestion-row-label",
                      dangerouslySetInnerHTML: {
                        __html: h.label.replace(
                          new RegExp(m, "gi"),
                          (L) => L && `<b>${L}</b>`
                        )
                      }
                    }
                  )
                ] }),
                h.subLabel && /* @__PURE__ */ e.jsx("div", { className: "suggestion-row-sub-label", children: h.subLabel })
              ]
            },
            h.id
          );
        }) })
      ]
    }
  );
};
ds.propTypes = {
  addChip: M.func.isRequired,
  chipOptions: Ts,
  className: M.string,
  elements: Fe,
  isDeleteMode: M.bool,
  onInputChange: M.func.isRequired,
  placeholder: M.string,
  removeChip: M.func.isRequired,
  suggestionList: Fe.isRequired
};
const Zs = is.memo(ds), ce = "delete", ze = we, Me = (a = "", r = !1) => [
  { id: $e, label: $e, hidden: !r },
  { id: z, label: z, hidden: a !== z },
  { id: we, label: we },
  { id: qe, label: qe },
  { id: ye, label: ye }
], ms = ({ inviteNewMembers: a, member: r, membersData: n, setMembersData: t }) => {
  const l = V(), [S, i] = y(""), o = le("table-row", a && "inactive"), C = (c, f) => {
    const _ = A.cloneDeep(n.members), x = _.find((E) => E.id === f.id);
    x.initialRole && (x.modification = x.initialRole !== c ? "put" : ""), x.role = c, t((E) => ({ ...E, members: _ }));
  }, m = (c) => {
    let f = A.cloneDeep(n.members);
    c.initialRole ? f.find((_) => _.id === c.id).modification = ce : f = f.filter((_) => _.id !== c.id), t((_) => ({ ..._, members: f })), i("");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: o, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "member-info", children: [
      /* @__PURE__ */ e.jsx("div", { className: `member-status ${r.modification ? "visible" : ""}` }),
      /* @__PURE__ */ e.jsx("div", { className: "member-symbol", children: r.name[0]?.toUpperCase() }),
      /* @__PURE__ */ e.jsx("div", { className: `member-icon ${r.type}`, children: r.icon }),
      /* @__PURE__ */ e.jsx("div", { className: "member-name", children: r.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "member-roles", children: /* @__PURE__ */ e.jsx(
      Te,
      {
        density: "dense",
        label: "Role",
        disabled: r.role === z || a,
        floatingLabel: !0,
        onClick: (c) => C(c, r),
        options: Me(r.role),
        selectedId: r.role
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: "member-actions actions", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        disabled: r.role === z || a,
        ref: l,
        onClick: () => i(r.id),
        children: /* @__PURE__ */ e.jsx(Ms, {})
      }
    ) }),
    S === r.id && /* @__PURE__ */ e.jsx(
      Oe,
      {
        className: "delete-member__pop-up",
        closePopUp: () => i(""),
        confirmButton: {
          handler: () => m(r),
          label: "Remove member",
          variant: as
        },
        customPosition: {
          element: l,
          position: "top-right"
        },
        header: "Are you sure?",
        isOpen: S === r.id,
        message: "Removing a member will revoke all access."
      }
    )
  ] });
};
ms.propTypes = {
  inviteNewMembers: M.bool.isRequired,
  member: Je.isRequired,
  membersData: M.shape({
    members: M.arrayOf(Je).isRequired
  }).isRequired,
  setMembersData: M.func.isRequired
};
const us = {
  activeUser: {},
  projectInfo: {
    id: "",
    owner: {
      id: "",
      username: "",
      firstName: "",
      lastName: ""
    }
  },
  projectAuthorizationRoles: [],
  users: [],
  userGroups: [],
  membersOriginal: [],
  members: [],
  groupedOriginalMembers: [],
  groupedVisibleMembers: [],
  loading: !1
}, w = {
  GET_PROJECT_USERS_DATA_BEGIN: "GET_PROJECT_USERS_DATA_BEGIN",
  GET_PROJECT_USERS_DATA_END: "GET_PROJECT_USERS_DATA_END",
  RESET_MEMBERS_STATE: "RESET_MEMBERS_STATE",
  SET_ACTIVE_USER: "SET_ACTIVE_USER",
  SET_MEMBERS: "SET_MEMBERS",
  SET_MEMBERS_ORIGINAL: "SET_MEMBERS_ORIGINAL",
  SET_PROJECT_AUTHORIZATION_ROLES: "SET_PROJECT_AUTHORIZATION_ROLES",
  SET_PROJECT_INFO: "SET_PROJECT_INFO",
  SET_USERS: "SET_USERS",
  SET_USER_GROUPS: "SET_USER_GROUPS"
}, Ks = (a, { type: r, payload: n }) => {
  switch (r) {
    case w.RESET_MEMBERS_STATE:
      return {
        ...us
      };
    case w.GET_PROJECT_USERS_DATA_BEGIN:
      return {
        ...a,
        loading: !0
      };
    case w.GET_PROJECT_USERS_DATA_END:
      return {
        ...a,
        loading: !1
      };
    case w.SET_ACTIVE_USER:
      return {
        ...a,
        activeUser: n
      };
    case w.SET_MEMBERS:
      return {
        ...a,
        members: n
      };
    case w.SET_MEMBERS_ORIGINAL:
      return {
        ...a,
        membersOriginal: n,
        groupedOriginalMembers: A.groupBy(n, (t) => t.role)
      };
    case w.SET_PROJECT_AUTHORIZATION_ROLES:
      return {
        ...a,
        projectAuthorizationRoles: n
      };
    case w.SET_PROJECT_INFO:
      return {
        ...a,
        projectInfo: n
      };
    case w.SET_USERS:
      return {
        ...a,
        users: n
      };
    case w.SET_USER_GROUPS:
      return {
        ...a,
        userGroups: n
      };
    default:
      return a;
  }
}, Ie = (a) => /* @__PURE__ */ Z.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ Z.createElement("path", { d: "M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z", fill: "#7F7989" })), je = (a) => /* @__PURE__ */ Z.createElement("svg", { width: 22, height: 14, viewBox: "0 0 22 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ Z.createElement("path", { d: "M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z", fill: "#7F7989" })), ps = ({ changeMembersCallback: a, membersDispatch: r, membersState: n }) => {
  const [t, l] = y(n), [S, i] = y(!1), [o, C] = y(!1), [m, c] = y(!1), [f, _] = y([]), [x, E] = y([]), [d, j] = y(ze), [R, s] = y({
    name: "",
    role: "All"
  }), u = be(), v = () => {
    i(!1), c(!1), E([]);
  }, B = () => {
    const p = A.cloneDeep(t.members);
    x.forEach((O) => {
      const g = p.find((T) => T.id === O.id);
      g ? (g.modification = d !== g.initialRole ? "put" : "", g.role = d) : p.push({
        name: O.label,
        id: O.id,
        type: O.ui.type,
        role: d,
        icon: O.ui.type === J ? /* @__PURE__ */ e.jsx(Ie, {}) : /* @__PURE__ */ e.jsx(je, {}),
        modification: "post"
      });
    }), E([]), j(ze), C(!1), l((O) => ({ ...O, members: p }));
  }, h = () => {
    const p = {
      data: {
        attributes: {
          metadata: {
            project_ids: [t.projectInfo.id],
            notify_by_email: m
          },
          requests: []
        }
      }
    }, O = {}, g = Array.from(
      t.members.reduce((b, I) => (I.modification && (b.add(I.role), I.initialRole && b.add(I.initialRole)), b), /* @__PURE__ */ new Set())
    ), T = A.groupBy(
      t.members.filter((b) => b.modification !== ce),
      (b) => b.role
    );
    n.projectAuthorizationRoles.forEach((b) => {
      O[b.attributes.name] = b;
    }), p.data.attributes.requests = g.map((b) => {
      const I = T[b] ?? [];
      return {
        method: "put",
        resource: `project_authorization_roles/${O[b].id}`,
        body: {
          data: {
            type: O[b].type,
            attributes: {
              name: b,
              permissions: O[b].attributes.permissions
            },
            relationships: {
              project: {
                data: {
                  type: "project",
                  id: t.projectInfo.id
                }
              },
              principal_users: {
                data: I.filter((P) => P.type === J).map((P) => ({ id: P.id, type: P.type }))
              },
              principal_user_groups: {
                data: I.filter((P) => P.type === "user_group").map((P) => ({ id: P.id, type: P.type }))
              }
            }
          }
        }
      };
    }), r({
      type: w.SET_MEMBERS,
      payload: t.members
    }), k.updateProjectMembers(p).then((b) => {
      const I = t.members?.some(
        (G) => G.modification !== ce && (G.id === t.activeUser.data?.id || G.type === rs && t.activeUser.data?.relationships?.user_groups?.data?.some?.(
          (X) => X.id === G.id
        ))
      ), P = t.activeUser.data?.attributes?.user_policies_collection?.has(
        "Project Security Admin"
      ) ?? !1;
      a(b.data.data.id, I || P);
    }).catch((b) => {
      const I = b.response?.status === me ? "Missing edit permission for the project" : ue(b, "Failed to edit project data");
      H(u, b, "", I, () => h());
    }), v();
  }, N = () => t.members.some((p) => p.modification !== ""), L = (p) => {
    N() ? i(!0) : D(p);
  }, D = (p) => {
    p.stopPropagation(), l(n), v();
  }, Ee = A.debounce((p) => {
    const O = "3.5.3";
    let g = {
      "filter[username]": `[$match-i]^.*${p}.*$`,
      "page[size]": 200
    }, T = { "filter[name]": `[$match-i]^.*${p}.*$`, "page[size]": 200 };
    Ue(O) && (g["filter[username]"] = `[$contains_istr]${p}`, T["filter[name]"] = `[$contains_istr]${p}`);
    const b = k.getScrubbedUsers({
      params: g
    }), I = k.getScrubbedUserGroups({
      params: T
    }), P = [];
    Promise.all([b, I]).then((G) => {
      G.forEach((X) => {
        X.data.data.forEach(($) => {
          const fe = t.members.find(
            (Q) => Q.id === $.id && Q.modification !== ce
          );
          P.push({
            label: $.type === J ? $.attributes.username : $.attributes.name,
            id: $.id,
            subLabel: fe?.role ?? "",
            disabled: !!fe,
            icon: $.type === J ? /* @__PURE__ */ e.jsx("i", { "data-identity-type": "user", children: /* @__PURE__ */ e.jsx(Ie, {}) }) : /* @__PURE__ */ e.jsx("i", { "data-identity-type": "user_group", children: /* @__PURE__ */ e.jsx(je, {}) }),
            ui: {
              type: $.type
            }
          });
        });
      }), _(P);
    }).catch((G) => {
      H(u, G, "Failed to fetch users");
    });
  }, 400);
  return /* @__PURE__ */ e.jsxs("div", { className: "settings__members", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "info-row", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "members-overview", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "member-overview", children: [
          /* @__PURE__ */ e.jsx("span", { className: "member-count", children: t.groupedOriginalMembers.Editor?.length ?? 0 }),
          " editors, "
        ] }),
        /* @__PURE__ */ e.jsxs("span", { className: "member-overview", children: [
          /* @__PURE__ */ e.jsx("span", { className: "member-count", children: t.groupedOriginalMembers.Viewer?.length ?? 0 }),
          " viewers, "
        ] }),
        /* @__PURE__ */ e.jsxs("span", { className: "member-overview", children: [
          /* @__PURE__ */ e.jsx("span", { className: "member-count", children: t.groupedOriginalMembers.Admin?.length ?? 0 }),
          " admins "
        ] }),
        /* @__PURE__ */ e.jsx(es, { text: "Some of the members might be user groups" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "invite-new-members-btn", onClick: () => C(!0), children: [
        /* @__PURE__ */ e.jsx(qs, { className: "add-icon" }),
        "Invite new members"
      ] })
    ] }),
    o && /* @__PURE__ */ e.jsxs("div", { className: "invite-new-members", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "new-members-title", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Invite new members" }),
        /* @__PURE__ */ e.jsx("div", { className: "close-icon", children: /* @__PURE__ */ e.jsx(Is, { onClick: () => C(!1), tooltipText: "Close", children: /* @__PURE__ */ e.jsx(Os, { "data-testid": "pop-up-close-btn" }) }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "new-members-row", children: [
        /* @__PURE__ */ e.jsx(
          Zs,
          {
            className: "new-member-name",
            placeholder: "Type to add members...",
            addChip: (p) => {
              E([...x, p]);
            },
            removeChip: (p) => {
              E(x.filter((O, g) => g !== p));
            },
            onInputChange: Ee,
            elements: x,
            suggestionList: f,
            isDeleteMode: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          Te,
          {
            className: "new-member-role",
            label: "Role",
            density: "dense",
            floatingLabel: !0,
            onClick: (p) => j(p),
            options: Me(),
            selectedId: d
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "new-member-btn", children: /* @__PURE__ */ e.jsx(
          Y,
          {
            variant: ge,
            disabled: x.length === 0 || !d,
            label: "Add",
            onClick: B
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "members-table", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "table-header", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "member-info", children: [
          /* @__PURE__ */ e.jsx(Js, {}),
          /* @__PURE__ */ e.jsx(
            os,
            {
              disabled: o,
              placeholder: "Type to filter members...",
              withoutBorder: !0,
              density: "dense",
              onChange: (p) => {
                s({
                  ...R,
                  name: p
                });
              },
              type: "text",
              value: R.name
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "member-roles", children: /* @__PURE__ */ e.jsx(
          Te,
          {
            disabled: o,
            density: "dense",
            floatingLabel: !0,
            label: "Role",
            onClick: (p) => {
              s({
                ...R,
                role: p
              });
            },
            options: Me("", !0),
            selectedId: R.role
          }
        ) }),
        /* @__PURE__ */ e.jsx("div", { className: "member-actions actions" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "table-body", children: t.members.filter((p) => (!R.name || p.name.toLowerCase().includes(R.name.toLowerCase())) && (R.role === "All" || p.role === R.role) && p.modification !== ce).map((p) => /* @__PURE__ */ e.jsx(
        ms,
        {
          inviteNewMembers: o,
          member: p,
          membersData: t,
          setMembersData: l
        },
        `${p.name}${p.role}${p.type}`
      )) })
    ] }),
    /* @__PURE__ */ e.jsxs("p", { className: "footer-annotation", children: [
      "Note that adding users to the project doesn't mean they can access the project data. In order to access the project data they need to set access permission for the project folder.",
      " ",
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "https://www.iguazio.com/docs/latest-release/users-and-security/security/#data-access-policy-rules",
          className: "link",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Read more"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "footer-actions", children: [
      /* @__PURE__ */ e.jsx(
        $s,
        {
          className: "notify-by-email",
          item: {
            label: "Notify by email",
            id: "notifyByEmail"
          },
          onChange: () => {
            c(!m);
          },
          selectedId: m ? "notifyByEmail" : ""
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "apply-discard-buttons", children: [
        /* @__PURE__ */ e.jsx(
          Y,
          {
            disabled: !N(),
            variant: _e,
            label: "Discard",
            className: "pop-up-dialog__btn_cancel",
            onClick: L
          }
        ),
        /* @__PURE__ */ e.jsx(
          Y,
          {
            variant: ge,
            disabled: !N(),
            label: "Apply",
            onClick: h
          }
        )
      ] })
    ] }),
    S && /* @__PURE__ */ e.jsx(
      Oe,
      {
        cancelButton: {
          handler: () => {
            i(!1);
          },
          label: "No",
          variant: _e
        },
        closePopUp: () => i(!1),
        confirmButton: {
          handler: D,
          label: "Discard",
          variant: ge
        },
        header: "Discard all pending changes?",
        isOpen: !!S
      }
    )
  ] });
};
ps.propTypes = {
  changeMembersCallback: M.func.isRequired,
  membersDispatch: M.func.isRequired,
  membersState: M.object.isRequired
};
const hs = ({
  changeMembersCallback: a,
  loading: r,
  membersDispatch: n,
  membersState: t,
  projectMembersIsShown: l
}) => {
  const S = () => {
    const i = t.projectInfo?.owner?.id, o = i ? t.members.length - 1 : t.members.length;
    return o === 0 ? i ? "One owner has access to this project" : "This project does not have a valid owner" : o === 1 ? i ? "One owner and one member have access to this project" : "One member has access to this project" : i ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      "One owner and",
      /* @__PURE__ */ e.jsxs("b", { children: [
        " ",
        o,
        " "
      ] }),
      "members have access to this project"
    ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("b", { children: [
        o,
        " "
      ] }),
      "members have access to this project"
    ] });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "settings__card", children: r ? /* @__PURE__ */ e.jsx(pe, {}) : /* @__PURE__ */ e.jsx("div", { className: "settings__card-content", children: /* @__PURE__ */ e.jsxs("div", { className: "settings__card-content-col", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "settings__members-summary", children: [
      /* @__PURE__ */ e.jsx("span", { className: "settings__members-summary_icon", children: /* @__PURE__ */ e.jsx(je, {}) }),
      /* @__PURE__ */ e.jsx("span", { children: S() })
    ] }),
    l && /* @__PURE__ */ e.jsx(
      ps,
      {
        changeMembersCallback: a,
        membersState: t,
        membersDispatch: n
      }
    )
  ] }) }) });
};
hs.propTypes = {
  changeMembersCallback: M.func.isRequired,
  loading: M.bool.isRequired,
  membersDispatch: M.func.isRequired,
  membersState: M.object.isRequired,
  projectMembersIsShown: M.bool.isRequired
};
const He = "add", oe = "delete", Re = "edit", js = ({ setNotification: a }) => {
  const [r, n] = y(!1), [t, l] = y({}), [S, i] = y(!0), o = Le(), C = be(), m = he((d) => d.projectStore), c = is.useRef(
    We({
      initialValues: {},
      mutators: { ...ts, setFieldState: ss },
      onSubmit: () => {
      }
    })
  ), f = V(null), _ = U(() => {
    i(!0), C(Ps({ project: o.projectName })).unwrap().catch((d) => {
      const j = d.response?.status === me ? "Permission denied" : ue(d, "Failed to fetch project data");
      H(C, d, "", j, () => {
        _();
      });
    });
  }, [C, o.projectName]);
  F(() => (_(), () => {
    C(Ye());
  }), [C, _, o.projectName]), F(() => {
    const j = {
      secrets: m.project.secrets?.data.secret_keys ? m.project.secrets.data.secret_keys.map((R) => ({
        data: {
          key: R,
          value: ""
        }
      })) : []
    };
    l(j), f.current.form.restart(j);
  }, [m.project.secrets.data]);
  const x = U(
    (d, j) => {
      n(!0), (d === He || d === Re ? ve.setProjectSecret : ve.deleteSecret)(o.projectName, j).then(() => {
        C(
          a({
            status: 200,
            id: Math.random(),
            message: `Secret ${d === oe ? "deleted" : d === Re ? "edited" : "added"} successfully`
          })
        );
      }).catch((s) => {
        H(C, s, "Failed to update secrets"), _();
      }).finally(() => n(!1));
    },
    [C, _, o.projectName, a]
  ), E = U(() => {
    setTimeout(() => {
      const d = f.current;
      if (Xe(t, d.values) && d.valid) {
        const j = d.values.secrets.length > t.secrets.length ? He : d.values.secrets.length === t.secrets.length ? Re : oe, R = j === oe ? t.secrets : d.values.secrets, s = j === oe ? d.values.secrets : t.secrets, u = A.differenceWith(R, s, A.isEqual);
        if (!A.isEmpty(u)) {
          const v = u[0].data, h = { secrets: d.values.secrets.map((L) => ({
            data: { key: L.data.key, value: "" }
          })) }, N = j === oe ? v.key : { provider: "kubernetes", secrets: { [v.key]: v.value } };
          l(h), f.current.form.restart(h), x(j, N);
        }
      }
    });
  }, [x, t]);
  return /* @__PURE__ */ e.jsx(Qe, { form: c.current, onSubmit: () => {
  }, children: (d) => (f.current = d, /* @__PURE__ */ e.jsx("div", { className: "settings__card", children: m.project.secrets?.loading ? /* @__PURE__ */ e.jsx(pe, {}) : S ? /* @__PURE__ */ e.jsx("div", { className: "settings__card-content", children: /* @__PURE__ */ e.jsxs("div", { className: "settings__card-content-col", children: [
    /* @__PURE__ */ e.jsxs("p", { className: "settings__card-subtitle", children: [
      "These secrets are automatically available to all jobs belonging to this project that are not executed locally. See",
      " ",
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: "https://docs.mlrun.org/en/latest/secrets.html",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "link",
          children: "Secrets"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      Ne,
      {
        addNewItemLabel: "Add secret",
        isKeyEditable: !1,
        isValuePassword: !0,
        valueType: "password",
        disabled: r,
        keyValidationRules: K("project.secrets.key"),
        onExitEditModeCallback: E,
        fieldsPath: "secrets",
        formState: d
      }
    )
  ] }) }) : /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx("h1", { children: "You don't have access to this project's secrets" }) }) })) });
};
js.propTypes = {
  setNotification: M.func.isRequired
};
const Ws = (a) => /* @__PURE__ */ Z.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ Z.createElement("path", { d: "M17.1405 10.9399C17.1805 10.6399 17.2005 10.3299 17.2005 9.99991C17.2005 9.67991 17.1805 9.35991 17.1305 9.05991L19.1605 7.4799C19.2479 7.4078 19.3077 7.3076 19.3296 7.19637C19.3515 7.08514 19.3341 6.96977 19.2805 6.8699L17.3605 3.54991C17.3039 3.44947 17.2137 3.37228 17.1057 3.33201C16.9977 3.29175 16.8789 3.291 16.7705 3.32991L14.3805 4.28991C13.8805 3.9099 13.3505 3.58991 12.7605 3.34991L12.4005 0.809905C12.3827 0.695435 12.3246 0.591112 12.2365 0.515881C12.1484 0.44065 12.0363 0.399501 11.9205 0.399905H8.08045C7.84045 0.399905 7.65045 0.569905 7.61045 0.809905L7.25045 3.34991C6.66045 3.58991 6.12045 3.91991 5.63045 4.28991L3.24045 3.32991C3.02045 3.24991 2.77045 3.32991 2.65045 3.54991L0.740452 6.8699C0.620452 7.07991 0.660452 7.3399 0.860452 7.4799L2.89045 9.05991C2.84045 9.35991 2.80045 9.68991 2.80045 9.99991C2.80045 10.3099 2.82045 10.6399 2.87045 10.9399L0.840452 12.5199C0.752976 12.592 0.693206 12.6922 0.671325 12.8034C0.649444 12.9147 0.666806 13.03 0.720452 13.1299L2.64045 16.4499C2.76045 16.6699 3.01045 16.7399 3.23045 16.6699L5.62045 15.7099C6.12045 16.0899 6.65045 16.4099 7.24045 16.6499L7.60045 19.1899C7.65045 19.4299 7.84045 19.5999 8.08045 19.5999H11.9205C12.1605 19.5999 12.3605 19.4299 12.3905 19.1899L12.7505 16.6499C13.3405 16.4099 13.8805 16.0899 14.3705 15.7099L16.7605 16.6699C16.9805 16.7499 17.2305 16.6699 17.3505 16.4499L19.2705 13.1299C19.3905 12.9099 19.3405 12.6599 19.1505 12.5199L17.1405 10.9399ZM10.0005 13.5999C8.02045 13.5999 6.40045 11.9799 6.40045 9.99991C6.40045 8.01991 8.02045 6.3999 10.0005 6.3999C11.9805 6.3999 13.6005 8.01991 13.6005 9.99991C13.6005 11.9799 11.9805 13.5999 10.0005 13.5999Z", fill: "#7F7989" })), Ys = (a) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ Z.createElement("path", { d: "M12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 13.89 13.1 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 8.89 4.9 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z", fill: "#7F7989" })), Xs = (a) => [
  {
    id: ns,
    label: "General",
    icon: /* @__PURE__ */ e.jsx(Ws, {})
  },
  {
    id: Pe,
    label: "Members",
    icon: /* @__PURE__ */ e.jsx(je, {}),
    hidden: !a
  },
  {
    id: Ae,
    label: "Secrets",
    icon: /* @__PURE__ */ e.jsx(Ys, {})
  }
], Qs = [
  ns,
  Pe,
  Ae
], et = As, Ze = (a, r, n, t, l, S) => {
  a.push({
    name: r,
    id: n,
    type: t,
    initialRole: l,
    role: S,
    icon: t === J ? /* @__PURE__ */ e.jsx(Ie, {}) : /* @__PURE__ */ e.jsx(je, {}),
    modification: ""
  });
}, st = (a, r, n) => {
  const t = [], {
    project_authorization_role: l = [],
    user: S = [],
    user_group: i = []
  } = A.groupBy(a.data.included, (o) => o.type);
  r({
    type: w.SET_PROJECT_AUTHORIZATION_ROLES,
    payload: l
  }), r({
    type: w.SET_USERS,
    payload: S
  }), r({
    type: w.SET_USER_GROUPS,
    payload: i
  }), n.id && !at(n.id, S) && Ze(t, n.username, n.id, J, z, z), l.forEach((o) => {
    o.relationships && A.forEach(o.relationships, (C) => {
      C.data.forEach((m) => {
        const c = m.type === J ? S : i, {
          attributes: { name: f, username: _ },
          id: x,
          type: E
        } = c.find((d) => d.id === m.id);
        Ze(
          t,
          E === J ? _ : f,
          x,
          E,
          n.id === x ? z : o.attributes.name,
          n.id === x ? z : o.attributes.name
        );
      });
    });
  }), r({
    type: w.SET_MEMBERS_ORIGINAL,
    payload: t
  }), r({
    type: w.SET_MEMBERS,
    payload: t
  });
}, tt = (a, r, { activeUser: n, members: t }) => {
  if (!a)
    return !1;
  const l = n.data?.attributes?.user_policies_collection?.has("Project Security Admin") ?? !1, S = t.some(
    (i) => i.role === ye && (i.id === n.data?.id || i.type === rs && n.data?.relationships?.user_groups?.data?.some?.(
      (o) => o.id === i.id
    ))
  );
  return r || S || l;
}, at = (a, r) => r.some((n) => n.id === a), ht = () => {
  const [a, r] = y(!1), [n, t] = y(!1), [l, S] = y(null), [i, o] = ks(Ks, us), C = Vs(), m = Bs(), c = Le(), f = be(), _ = V({}), x = V(null), E = he((g) => g.projectStore), d = he((g) => g.appStore.frontendSpec), j = xe(
    () => d?.feature_flags?.project_membership === "enabled" || d?.ce?.version,
    [d]
  ), R = xe(() => i?.activeUser?.data?.id === i?.projectInfo?.owner.id, [i]), s = xe(
    () => tt(j, R, i),
    [R, i, j]
  ), u = U(() => k.getProjects({
    params: { "filter[name]": c.projectName, include: "owner" }
  }).then((g) => {
    const T = g.data, b = T.data?.[0], I = b?.id, P = b?.relationships?.owner?.data?.id ?? "", G = T?.included.find((bs) => bs.id === P), {
      attributes: { username: X = "", first_name: $ = "", last_name: fe = "" } = {}
    } = G ?? {}, Q = {
      id: I,
      owner: { id: P, username: X, firstName: $, lastName: fe }
    };
    return o({
      type: w.SET_PROJECT_INFO,
      payload: Q
    }), Q;
  }), [c.projectName]), v = U(
    (g, T) => k.getProjectMembers(g).then((b) => st(b, o, T)).catch((b) => H(f, b, "Failed to fetch project members")),
    [f]
  ), B = (g) => {
    k.getProjectMembersVisibility(g).then(() => {
      r(!0);
    }).catch(() => {
      r(!1);
    });
  }, h = () => {
    k.getActiveUser().then((g) => {
      const T = g.data;
      T.data.attributes.user_policies_collection = /* @__PURE__ */ new Set([
        ...T.data.attributes.assigned_policies,
        ...T.included?.reduce?.(
          (b, I) => [...b, ...I.attributes.assigned_policies],
          []
        ) || []
      ]), o({
        type: w.SET_ACTIVE_USER,
        payload: T
      });
    });
  }, N = (g) => {
    k.getProjectOwnerVisibility(g).then(() => {
      t(!0);
    }).catch(() => {
      t(!1);
    });
  }, L = U(() => {
    j && (N(c.projectName), u().then(({ id: g, owner: T }) => (h(), B(c.projectName), v(g, T))).catch(() => {
      r(!1);
    }).finally(
      () => o({
        type: w.GET_PROJECT_USERS_DATA_END
      })
    ));
  }, [u, v, c.projectName, j]), D = (g, T) => {
    const b = () => {
      k.getProjectJob(g).then((I) => {
        I.data.data.attributes.state !== Ds ? setTimeout(b, 1e3) : T ? v(i.projectInfo.id, i.projectInfo.owner).then(
          () => {
            o({
              type: w.GET_PROJECT_USERS_DATA_END
            }), f(
              de({
                status: 200,
                id: Math.random(),
                message: "Members updated successfully"
              })
            );
          }
        ) : (f(
          de({
            status: 200,
            id: Math.random(),
            message: "Members updated successfully"
          })
        ), m("/projects/"));
      }).catch(() => {
        o({
          type: w.GET_PROJECT_USERS_DATA_END
        });
      });
    };
    o({
      type: w.GET_PROJECT_USERS_DATA_BEGIN
    }), b();
  }, Ee = () => {
    const g = i.projectInfo.owner.id;
    return u().then(() => {
      i.users.some((T) => T.id === g) || m("/projects/");
    });
  }, p = U(() => {
    o({
      type: w.RESET_MEMBERS_STATE
    });
  }, []), O = U(() => {
    f(Ls({ params: { format: "minimal" } }));
  }, [f]);
  return F(() => (o({
    type: w.GET_PROJECT_USERS_DATA_BEGIN
  }), L(), () => {
    p();
  }), [L, p]), F(() => {
    Qs.includes(c.pageTab) || m(`/projects/${c.projectName}/settings/general`);
  }, [m, c.pageTab, c.projectName]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    l && /* @__PURE__ */ e.jsx(
      Oe,
      {
        cancelButton: {
          handler: l.rejectHandler,
          label: "Cancel",
          variant: _e
        },
        closePopUp: l.rejectHandler,
        confirmButton: {
          handler: l.confirmHandler,
          label: l.btnConfirmLabel,
          variant: l.btnConfirmType
        },
        isOpen: !!l,
        header: l.header,
        message: l.message
      }
    ),
    E.projectsToDelete.includes(c.projectName) && /* @__PURE__ */ e.jsx(pe, {}),
    /* @__PURE__ */ e.jsxs("div", { className: "content-wrapper", children: [
      /* @__PURE__ */ e.jsx("div", { className: "content__header", children: /* @__PURE__ */ e.jsx(zs, {}) }),
      /* @__PURE__ */ e.jsxs("div", { className: "content settings-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "content__action-bar-wrapper", children: [
          /* @__PURE__ */ e.jsx(
            Gs,
            {
              activeTab: c.pageTab,
              location: C,
              screen: et,
              tabs: Xs(s)
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "action-bar", children: j && /* @__PURE__ */ e.jsx(
            Y,
            {
              variant: as,
              label: "Delete project",
              onClick: (g) => {
                g.stopPropagation(), Us(
                  c.projectName,
                  S,
                  f,
                  _,
                  x,
                  O,
                  m
                );
              },
              className: "delete-project-btn",
              disabled: !d?.ce?.version && !R || E.loading || E.project.loading
            }
          ) })
        ] }),
        c.pageTab === Pe && s ? /* @__PURE__ */ e.jsx(
          hs,
          {
            changeMembersCallback: D,
            loading: i.loading,
            membersState: i,
            membersDispatch: o,
            projectMembersIsShown: a
          }
        ) : c.pageTab === Ae ? /* @__PURE__ */ e.jsx(js, { setNotification: de }) : /* @__PURE__ */ e.jsx(
          ls,
          {
            changeOwnerCallback: Ee,
            membersState: i,
            projectMembershipIsEnabled: j,
            projectOwnerIsShown: n
          }
        )
      ] })
    ] })
  ] });
};
export {
  ht as default
};
//# sourceMappingURL=ProjectSettings-4GcXu0XM.mjs.map
