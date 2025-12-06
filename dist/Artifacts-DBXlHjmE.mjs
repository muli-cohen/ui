import { bJ as ze, j as a, bN as Ze, i as Ne, dS as Qe, b0 as K, bO as Je, aB as ha, bg as ja, k as Ra, at as Ke, p as We, bW as Xe, bV as Ve, he as ba, af as Ce, V as Re, P as e, aY as Na, hf as Z, b1 as se, b2 as ne, eu as ue, hg as re, aQ as Ca, hh as J, hi as Te, aF as W, e as _, hj as Ta, bK as ya, bL as xa, dT as qa, a_ as De, ec as Ea, hk as Aa, hl as va, be as Fa, hm as wa, eJ as ea, ev as _a, an as Sa, ag as ka, hn as Ma, aE as Ia, t as La, aH as $e, aI as Be, eD as Pa, ho as Da, m as Oe, aK as $a, by as Ba, a6 as Oa, aO as Ha, ay as He, az as Ga, aN as Ua, hp as Ya } from "./main-CTYpZ6Nf.mjs";
import * as le from "react";
import ye, { useState as P, createElement as aa, useCallback as L, useEffect as M, useRef as Q, useMemo as z } from "react";
import { useDispatch as xe, useSelector as de } from "react-redux";
import { useLocation as qe, useNavigate as za, useParams as Za } from "react-router-dom";
import { u as ta } from "./clock-BFaispYx.mjs";
import { V as Qa, j as Ja, T as Ka, az as Wa, ar as Xa, u as Va, aA as et, aB as at } from "./Table-DB12oa-o.mjs";
import { N as tt } from "./StatsCard-Cm7Pku2T.mjs";
import { F as rt } from "./FormTagFilter-DiHrdYam.mjs";
import { a as Ge } from "./search-CsL7YQlT.mjs";
import { A as st } from "./ActionBar-C8Jl3Xmo.mjs";
import { H as Ue } from "./historyBackLink-D1MctrX9.mjs";
import { A as nt } from "./ArtifactsTableRow-D8HBCM6c.mjs";
import { P as it } from "./Pagination-DsTIZ30r.mjs";
import { g as ra, a as ot } from "./link-helper.util-CuUJj7TV.mjs";
import { B as ct } from "./Breadcrumbs-DDXz9SNg.mjs";
import { P as lt } from "./PreviewModal-CXJei3eh.mjs";
import { u as Ye } from "./usePagination.hook-EDISVLLo.mjs";
import { u as dt } from "./useRefreshAfterDelete.hook-BJMjzj5C.mjs";
const sa = ({ artifact: o, isOpen: f, onAddTag: q = () => {
}, onResolve: h, projectName: j }) => {
  const N = xe(), [R] = P({
    artifactTag: ""
  }), [l, C] = P(!1), c = ye.useRef(
    ze({
      initialValues: R,
      onSubmit: () => {
      }
    })
  ), t = qe(), { handleCloseModal: b, resolveModal: S } = ta(h, c.current), A = (u) => {
    const p = {
      key: o.db_key || o.key,
      kind: o.kind,
      uid: o.uid ?? o.tree
    };
    o.iter !== 0 && (p.iter = o.iter);
    const x = {
      project: j,
      tag: u.artifactTag,
      data: {
        kind: "artifact",
        identifiers: [p]
      }
    };
    return S(), N(ba(x)).unwrap().then((r) => {
      N(
        Ce({
          status: r.status,
          id: Math.random(),
          message: "Tag was added successfully"
        })
      ), q?.();
    }).catch((r) => {
      Re(
        N,
        r,
        "Failed to add a tag",
        "",
        () => A(u)
      );
    });
  }, T = (u) => Qa({
    tag: u.artifactTag,
    artifact: o,
    projectName: j,
    dispatch: N,
    actionCallback: () => A(u),
    getCustomErrorMsg: () => "Failed to add a tag",
    onErrorCallback: S,
    showLoader: () => C(!0),
    hideLoader: () => C(!1)
  }), d = (u) => [
    {
      label: "Cancel",
      onClick: () => b(),
      variant: Ke
    },
    {
      disabled: Xe(u),
      label: "Add",
      onClick: u.handleSubmit,
      variant: We
    }
  ].map((x, r) => /* @__PURE__ */ aa(Ve, { ...x, key: r }));
  return /* @__PURE__ */ a.jsx(Ze, { form: c.current, initialValues: R, onSubmit: T, children: (u) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    l && /* @__PURE__ */ a.jsx(Ne, {}),
    /* @__PURE__ */ a.jsx(
      Qe,
      {
        actions: d(u),
        location: t,
        onClose: b,
        show: f,
        size: "min",
        title: "Add a tag",
        children: /* @__PURE__ */ a.jsx("div", { className: "form", children: /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsx("div", { className: "form-col-1", children: /* @__PURE__ */ a.jsx(
          K,
          {
            name: "artifactTag",
            label: `${o.kind === ja ? "Model tag" : o.kind === Ra ? "Dataset tag" : "Artifact tag"}`,
            focused: !0,
            required: !0,
            validationRules: Je("common.name", [
              {
                name: "latest",
                label: 'Tag name "latest" is reserved',
                pattern: (p) => p !== ha
              }
            ])
          }
        ) }) }) })
      }
    )
  ] }) });
};
sa.propTypes = {
  isOpen: e.bool.isRequired,
  artifact: e.object.isRequired,
  onAddTag: e.func,
  onResolve: e.func.isRequired,
  projectName: e.string.isRequired
};
const na = ({ artifacts: o, filtersConfig: f, isAllVersions: q }) => {
  const h = Na(), [j, N] = P(h.getState().values[Z] || ""), R = (c) => {
    h.change(J, c ? Te : "");
  }, l = (c, t) => {
    h.change(t, c || "");
  }, C = (c) => {
    h.change(Z, c || ""), N(c), c.length === 0 && h.change(re, "");
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "artifacts-filters", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ a.jsx(
        K,
        {
          label: f[se].label,
          name: se,
          placeholder: "key1,key2=value,...",
          tip: "Add ~ before the filter value to return substring and case insensitive value."
        }
      ),
      /* @__PURE__ */ a.jsx(
        ne,
        {
          name: se,
          handler: (c) => l(c, se)
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsx(
      rt,
      {
        content: o,
        label: f[ue].label,
        name: ue,
        onlyLatestByDefault: !q
      }
    ) }),
    f[Z] && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ a.jsx(
          K,
          {
            label: f[Z].label,
            inputIcon: /* @__PURE__ */ a.jsx(Ge, {}),
            name: Z,
            placeholder: "Search model name.."
          }
        ),
        /* @__PURE__ */ a.jsx(ne, { name: Z, handler: C })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ a.jsx(
          K,
          {
            label: f[re].label,
            inputIcon: j.length > 0 ? /* @__PURE__ */ a.jsx(Ge, {}) : null,
            name: re,
            placeholder: "All tags",
            disabled: j.length === 0,
            tip: j.length === 0 ? "Enter a model name to enable field." : null
          }
        ),
        /* @__PURE__ */ a.jsx(
          ne,
          {
            name: re,
            handler: (c) => l(c, re)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ a.jsx(
        Ca,
        {
          className: "artifacts-filters__iter",
          label: f[J].label,
          name: J
        }
      ),
      /* @__PURE__ */ a.jsx(ne, { name: J, handler: R })
    ] })
  ] });
};
na.propTypes = {
  artifacts: e.arrayOf(e.object).isRequired,
  filtersConfig: e.object.isRequired,
  isAllVersions: e.bool.isRequired
};
let be = ({
  actionButtons: o,
  actionsMenu: f,
  applyDetailsChanges: q,
  applyDetailsChangesCallback: h,
  artifactName: j,
  artifacts: N,
  artifactsStore: R,
  detailsFormInitialValues: l,
  filters: C,
  filtersConfig: c,
  filtersStore: t,
  getAndSetSelectedArtifact: b,
  handleRefreshArtifacts: S,
  historyBackLink: A,
  isAllVersions: T,
  isOnlyTabScreen: d,
  page: u,
  pageData: p,
  paginationConfigArtifactsRef: x,
  requestErrorMessage: r,
  renderPageTabs: i = null,
  selectedArtifact: m,
  setSearchArtifactsParams: v,
  setSelectedArtifact: $,
  storeArtifactTypeLoading: F,
  tab: w = "",
  tableContent: k,
  tableHeaders: E,
  viewMode: H
}) => {
  const I = () => T ? d ? /* @__PURE__ */ a.jsx("div", { className: "content__history-back-link-wrapper", children: /* @__PURE__ */ a.jsx(Ue, { itemName: j, link: A }) }) : /* @__PURE__ */ a.jsx(Ue, { itemName: j, link: A }) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: "table-container", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "content__action-bar-wrapper", children: [
      i ? i() : I(),
      /* @__PURE__ */ a.jsx(
        st,
        {
          actionButtons: o,
          closeParamName: T ? W : w || u,
          filters: C,
          filtersConfig: c,
          handleRefresh: S,
          setSearchParams: v,
          selectedItemName: j,
          tab: w,
          withRefreshButton: !0,
          withoutExpandButton: !0,
          children: /* @__PURE__ */ a.jsx(
            na,
            {
              artifacts: N,
              filtersConfig: c,
              isAllVersions: T
            }
          )
        }
      )
    ] }),
    i && I(),
    R.loading ? null : k.length === 0 && _.isEmpty(m) ? /* @__PURE__ */ a.jsx(
      tt,
      {
        message: Ja(
          C,
          c,
          r,
          u,
          w,
          t
        )
      }
    ) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      F && /* @__PURE__ */ a.jsx(Ne, {}),
      /* @__PURE__ */ a.jsx(
        Ka,
        {
          actionsMenu: f,
          applyDetailsChanges: q,
          applyDetailsChangesCallback: h,
          detailsFormInitialValues: l,
          getCloseDetailsLink: () => ra(
            T ? W : w || u,
            !1,
            j
          ),
          handleCancel: () => $({}),
          pageData: p,
          selectedItem: m,
          tableClassName: "artifacts-table",
          tableHeaders: _.isEmpty(E) ? Wa(T) : E,
          viewMode: H,
          children: k.map((X, g) => /* @__PURE__ */ a.jsx(
            nt,
            {
              actionsMenu: f,
              rowIndex: g,
              rowItem: X,
              selectedItem: m,
              tab: w
            },
            X.data.ui.identifierUnique
          ))
        }
      ),
      /* @__PURE__ */ a.jsx(
        it,
        {
          paginationConfig: x.current,
          closeParamName: T ? W : w || u,
          selectedItemName: j
        }
      )
    ] }),
    H === Ta && !_.isEmpty(m) && /* @__PURE__ */ a.jsx(
      Xa,
      {
        actionsMenu: f,
        applyDetailsChanges: q,
        applyDetailsChangesCallback: h,
        formInitialValues: l,
        detailsMenu: p.details.menu,
        handleRefresh: b,
        isDetailsScreen: !0,
        pageData: p,
        selectedItem: m
      }
    )
  ] });
};
be.propTypes = {
  actionButtons: e.array,
  actionsMenu: e.func.isRequired,
  applyDetailsChanges: e.func.isRequired,
  applyDetailsChangesCallback: e.func.isRequired,
  artifactName: e.string.isRequired,
  artifacts: e.array.isRequired,
  artifactsStore: e.object.isRequired,
  detailsFormInitialValues: e.object.isRequired,
  filters: e.object.isRequired,
  filtersConfig: e.object.isRequired,
  filtersStore: e.object.isRequired,
  getAndSetSelectedArtifact: e.func.isRequired,
  handleRefreshArtifacts: e.func.isRequired,
  historyBackLink: e.string.isRequired,
  isAllVersions: e.bool.isRequired,
  isOnlyTabScreen: e.bool.isRequired,
  page: e.string.isRequired,
  pageData: e.object.isRequired,
  paginationConfigArtifactsRef: e.object.isRequired,
  requestErrorMessage: e.string,
  renderPageTabs: e.func,
  selectedArtifact: e.object.isRequired,
  setSearchArtifactsParams: e.func.isRequired,
  setSelectedArtifact: e.func.isRequired,
  storeArtifactTypeLoading: e.bool.isRequired,
  tab: e.string,
  tableContent: e.array.isRequired,
  tableHeaders: e.array.isRequired,
  viewMode: e.string.isRequired
};
let Ee = ye.forwardRef(
  ({
    actionButtons: o = [],
    actionsMenu: f,
    applyDetailsChanges: q,
    applyDetailsChangesCallback: h,
    artifactName: j = "",
    artifacts: N,
    artifactsStore: R,
    detailsFormInitialValues: l,
    filters: C,
    filtersConfig: c,
    filtersStore: t,
    getAndSetSelectedArtifact: b,
    handleRefreshArtifacts: S,
    historyBackLink: A,
    isAllVersions: T,
    isOnlyTabScreen: d,
    page: u,
    pageData: p,
    paginationConfigArtifactsRef: x,
    requestErrorMessage: r = "",
    renderPageTabs: i = null,
    selectedArtifact: m,
    setSearchArtifactsParams: v,
    setSelectedArtifact: $,
    storeArtifactTypeLoading: F,
    tab: w = "",
    tableContent: k,
    tableHeaders: E,
    viewMode: H = ""
  }, { artifactsRef: I }) => d ? /* @__PURE__ */ a.jsx("div", { className: "models", ref: I, children: /* @__PURE__ */ a.jsx(
    be,
    {
      actionButtons: o,
      actionsMenu: f,
      applyDetailsChanges: q,
      applyDetailsChangesCallback: h,
      artifactName: j,
      artifacts: N,
      artifactsStore: R,
      detailsFormInitialValues: l,
      filters: C,
      filtersConfig: c,
      filtersStore: t,
      getAndSetSelectedArtifact: b,
      handleRefreshArtifacts: S,
      historyBackLink: A,
      isAllVersions: T,
      isOnlyTabScreen: d,
      page: u,
      pageData: p,
      paginationConfigArtifactsRef: x,
      requestErrorMessage: r,
      renderPageTabs: i,
      selectedArtifact: m,
      setSearchArtifactsParams: v,
      setSelectedArtifact: $,
      storeArtifactTypeLoading: F,
      tab: w,
      tableContent: k,
      tableHeaders: E,
      viewMode: H
    }
  ) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "content-wrapper", ref: I, children: [
      /* @__PURE__ */ a.jsx("div", { className: "content__header", children: /* @__PURE__ */ a.jsx(ct, {}) }),
      /* @__PURE__ */ a.jsxs("div", { className: "content", children: [
        R.loading && /* @__PURE__ */ a.jsx(Ne, {}),
        /* @__PURE__ */ a.jsx(
          be,
          {
            actionButtons: o,
            actionsMenu: f,
            applyDetailsChanges: q,
            applyDetailsChangesCallback: h,
            artifactName: j,
            artifacts: N,
            artifactsStore: R,
            detailsFormInitialValues: l,
            filters: C,
            filtersConfig: c,
            filtersStore: t,
            getAndSetSelectedArtifact: b,
            handleRefreshArtifacts: S,
            historyBackLink: A,
            isAllVersions: T,
            isOnlyTabScreen: d,
            page: u,
            pageData: p,
            paginationConfigArtifactsRef: x,
            requestErrorMessage: r,
            selectedArtifact: m,
            setSearchArtifactsParams: v,
            setSelectedArtifact: $,
            storeArtifactTypeLoading: F,
            tab: w,
            tableContent: k,
            tableHeaders: E,
            viewMode: H
          }
        )
      ] })
    ] }),
    R?.preview?.isPreview && /* @__PURE__ */ a.jsx(lt, { artifact: R?.preview?.selectedItem })
  ] })
);
Ee.displayName = "ArtifactsView";
Ee.propTypes = {
  actionButtons: e.array,
  actionsMenu: e.func.isRequired,
  applyDetailsChanges: e.func.isRequired,
  applyDetailsChangesCallback: e.func.isRequired,
  artifactName: e.string,
  artifacts: e.array.isRequired,
  artifactsStore: e.object.isRequired,
  detailsFormInitialValues: e.object.isRequired,
  filters: e.object.isRequired,
  filtersConfig: e.object.isRequired,
  filtersStore: e.object.isRequired,
  getAndSetSelectedArtifact: e.func.isRequired,
  handleRefreshArtifacts: e.func.isRequired,
  historyBackLink: e.string.isRequired,
  isAllVersions: e.bool.isRequired,
  isOnlyTabScreen: e.bool.isRequired,
  page: e.string.isRequired,
  pageData: e.object.isRequired,
  paginationConfigArtifactsRef: e.object.isRequired,
  requestErrorMessage: e.string,
  renderPageTabs: e.func,
  selectedArtifact: e.object.isRequired,
  setSearchArtifactsParams: e.func.isRequired,
  setSelectedArtifact: e.func.isRequired,
  storeArtifactTypeLoading: e.bool.isRequired,
  tab: e.string,
  tableContent: e.array.isRequired,
  tableHeaders: e.array.isRequired,
  viewMode: e.string
};
const ut = (o) => /* @__PURE__ */ le.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ le.createElement("path", { d: "M8 2C4.688 2 2 4.688 2 8C2 11.312 4.688 14 8 14C11.312 14 14 11.312 14 8C14 4.688 11.312 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8Z", fill: "#7F7989" }), /* @__PURE__ */ le.createElement("path", { d: "M10.196 6.69595C10.196 6.11354 9.9646 5.555 9.55278 5.14318C9.14096 4.73136 8.58241 4.5 8.00001 4.5C7.41761 4.5 6.85906 4.73136 6.44724 5.14318C6.03542 5.555 5.80406 6.11354 5.80406 6.69595C5.80406 6.81243 5.85033 6.92414 5.9327 7.0065C6.01506 7.08886 6.12677 7.13514 6.24325 7.13514C6.35973 7.13514 6.47144 7.08886 6.5538 7.0065C6.63617 6.92414 6.68244 6.81243 6.68244 6.69595C6.68244 6.43536 6.75971 6.18062 6.90449 5.96394C7.04927 5.74727 7.25504 5.5784 7.4958 5.47867C7.73655 5.37895 8.00147 5.35286 8.25705 5.4037C8.51264 5.45453 8.7474 5.58002 8.93167 5.76429C9.11593 5.94855 9.24142 6.18332 9.29226 6.4389C9.3431 6.69448 9.31701 6.9594 9.21728 7.20016C9.11756 7.44091 8.94868 7.64669 8.73201 7.79146C8.51534 7.93624 8.2606 8.01351 8.00001 8.01351C7.88353 8.01351 7.77182 8.05979 7.68945 8.14215C7.60709 8.22451 7.56082 8.33622 7.56082 8.4527V9.33108C7.56082 9.44756 7.60709 9.55927 7.68945 9.64163C7.77182 9.724 7.88353 9.77027 8.00001 9.77027C8.11649 9.77027 8.2282 9.724 8.31056 9.64163C8.39293 9.55927 8.4392 9.44756 8.4392 9.33108V8.84797C8.9352 8.74673 9.38099 8.47722 9.70112 8.08506C10.0213 7.6929 10.1961 7.20218 10.196 6.69595Z", fill: "#7F7989" }), /* @__PURE__ */ le.createElement("path", { d: "M8 11C8.24255 11 8.43918 10.8034 8.43918 10.5608C8.43918 10.3183 8.24255 10.1216 8 10.1216C7.75744 10.1216 7.56081 10.3183 7.56081 10.5608C7.56081 10.8034 7.75744 11 8 11Z", fill: "#7F7989" })), ia = ({
  functionList: o,
  functionOptionList: f,
  isOpen: q,
  model: h,
  onResolve: j = () => {
  }
}) => {
  const [N, R] = P([]), [l, C] = P({
    modelName: "",
    className: "",
    selectedTag: "",
    selectedFunctionName: f?.[0].id ?? "",
    arguments: []
  }), c = xe(), t = ye.useRef(
    ze({
      onSubmit: () => {
      }
    })
  ), b = qe(), { handleCloseModal: S, resolveModal: A } = ta(j, t.current), T = L((r, i) => _.chain(r).filter((m) => m.name === i && m.tag !== "").uniqBy("tag").map((m) => ({
    label: m.tag,
    id: m.tag
  })).value(), []);
  M(() => {
    C((r) => ({ ...r, modelName: h?.db_key }));
  }, [h]), M(() => {
    if (!l.selectedTag && o.length > 0) {
      const r = T(o, l.selectedFunctionName);
      R(r), C((i) => ({ ...i, selectedTag: r[0]?.id }));
    }
  }, [o, T, l.selectedFunctionName, l.selectedTag]), M(() => {
    if (!l.className) {
      const r = o.find(
        (i) => i.name === l.selectedFunctionName && i.tag === l.selectedTag
      );
      C((i) => ({
        ...i,
        className: r ? r.default_class : ""
      }));
    }
  }, [
    o,
    l.className,
    l.selectedFunctionName,
    l.selectedTag
  ]), M(() => () => {
    R([]);
  }, []);
  const d = (r) => {
    const { name: i, hash: m, tag: v, project: $ } = o.find(
      (F) => F.name === r.selectedFunctionName && F.tag === r.selectedTag
    ) ?? {};
    c(Aa({ project: $, name: i, hash: m, tag: v })).unwrap().then((F) => {
      const w = _.mapValues(_.keyBy(r.arguments, "key"), "value"), k = _.cloneDeep(F.ui.originalContent);
      return k.spec.graph = {
        ...k.spec.graph,
        routes: {
          [r.modelName]: {
            class_args: {
              model_path: va(h, Fa),
              ...w
            },
            class_name: r.className,
            kind: "task"
          }
        }
      }, c(wa({ funcData: { function: k } })).unwrap().then((E) => {
        c(
          Ce({
            status: E.status,
            id: Math.random(),
            message: "Model deployment initiated successfully"
          })
        );
      }).catch((E) => {
        Re(
          c,
          E,
          "",
          "Model deployment failed to initiate",
          () => d(r)
        );
      });
    }).catch((F) => {
      Re(
        c,
        F,
        "",
        "Failed to retrieve function data",
        () => d(r)
      );
    });
  }, u = (r) => {
    d(r), A();
  }, p = (r) => [
    {
      label: "Cancel",
      onClick: () => S(),
      variant: Ke
    },
    {
      disabled: Xe(r),
      label: "Deploy",
      onClick: r.handleSubmit,
      variant: We
    }
  ].map((m, v) => /* @__PURE__ */ aa(Ve, { ...m, key: v })), x = (r) => {
    const i = T(o, r), m = o.find(
      (v) => v.name === r && v.tag === i[0].id
    )?.default_class;
    R(i), t.current.change("selectedTag", i[0]?.id ?? ""), t.current.change("className", m ?? "");
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(
    Ze,
    {
      form: t.current,
      initialValues: l,
      mutators: { ...xa, setFieldState: ya },
      onSubmit: u,
      children: (r) => /* @__PURE__ */ a.jsx(
        Qe,
        {
          actions: p(r),
          className: "deploy-model",
          location: b,
          onClose: S,
          show: q,
          size: qa,
          title: "Deploy model",
          children: /* @__PURE__ */ a.jsxs("div", { className: "form", children: [
            f.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsxs("div", { className: "form-text info-container", children: [
              /* @__PURE__ */ a.jsx(ut, {}),
              /* @__PURE__ */ a.jsxs("span", { children: [
                'A model can only be deployed to an existing serving function with "router" topology. ',
                /* @__PURE__ */ a.jsx("br", {}),
                " To deploy the model to a new function, first deploy the serving function."
              ] })
            ] }) }),
            /* @__PURE__ */ a.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "form-col-2", children: [
                /* @__PURE__ */ a.jsx(
                  De,
                  {
                    className: "form-field__router",
                    disabled: f.length === 0,
                    label: "Serving function (router)",
                    name: "selectedFunctionName",
                    options: f,
                    required: !0
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  ne,
                  {
                    handler: x,
                    name: "selectedFunctionName"
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsx("div", { className: "form-col-1", children: /* @__PURE__ */ a.jsx(
                De,
                {
                  disabled: N.length === 0,
                  label: "Tag",
                  name: "selectedTag",
                  options: N,
                  search: !0
                }
              ) }),
              /* @__PURE__ */ a.jsx("div", { className: "form-col-1", children: /* @__PURE__ */ a.jsx(K, { name: "className", label: "Class", required: !0 }) })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "form-row", children: /* @__PURE__ */ a.jsx(
              K,
              {
                name: "modelName",
                label: "Model name",
                required: !0,
                validationRules: Je("artifact.name"),
                tip: "After the function is deployed, it will have a URL for calling the model that is based upon this name."
              }
            ) }),
            /* @__PURE__ */ a.jsx(
              Ea,
              {
                addNewItemLabel: "Add class argument",
                fieldsPath: "arguments",
                formState: r,
                keyHeader: "Class argument name",
                keyLabel: "Class argument name"
              }
            )
          ] })
        }
      )
    }
  ) });
};
ia.propTypes = {
  functionList: e.arrayOf(e.object).isRequired,
  functionOptionList: e.arrayOf(e.object).isRequired,
  isOpen: e.bool.isRequired,
  model: e.object.isRequired,
  onResolve: e.func
};
const mt = (o) => ({
  [Sa]: { label: "Name:", initialValue: "", hidden: o },
  [ue]: {
    label: "Version tag:",
    initialValue: o ? ea : _a,
    isModal: !0
  },
  [se]: { label: "Labels:", initialValue: "", isModal: !0 },
  [J]: {
    label: "Show best iteration only",
    initialValue: o ? "" : Te,
    isModal: !0
  }
}), ft = ({
  actionButtons: o = [],
  artifactType: f,
  createArtifactsRowData: q,
  fetchArtifacts: h,
  generateActionsMenu: j,
  generateDetailsFormInitialValues: N,
  generatePageData: R,
  getArtifactFiltersConfig: l = null,
  handleApplyDetailsChanges: C,
  handleDeployArtifactFailure: c = null,
  isAllVersions: t = !1,
  page: b,
  renderPageTabs: S = null,
  removeArtifacts: A,
  storeArtifactTypeLoading: T,
  tab: d = ""
}) => {
  const [u, p] = P(null), [x, r] = P(null), [i, m] = P({}), [v, $] = P(""), [F, w] = P(!1), k = de((n) => n.artifactsStore), E = de((n) => n.detailsStore), H = de((n) => n.filtersStore), I = de((n) => n.appStore.frontendSpec), { isDemoMode: X } = ka(), g = xe(), ie = qe(), G = za(), s = Za(), me = Ma(window.location.search), U = Q({}), B = Q({}), V = Q(new AbortController()), oe = Q(new AbortController()), oa = Q(null), fe = Q(null), Ae = z(
    () => `/projects/${s.projectName}/${b}${d ? `/${d}` : ""}${Ia(ie.search)}`,
    [ie.search, b, s.projectName, d]
  ), ve = z(
    () => (l || mt)(t),
    [l, t]
  ), O = Va(ve), [Fe, ca] = dt(
    B,
    Ae,
    "artifacts",
    s.id && ra(
      t ? W : d || b,
      !0,
      s.artifactName
    ),
    t
  ), ce = z(
    () => R(me, !1, i, s, X),
    [R, X, s, i, me]
  ), la = z(() => N(i, I.internal_labels), [I.internal_labels, N, i]), we = L(
    (n) => g(La(n)),
    [g]
  ), _e = L(
    async (n) => {
      V.current = new AbortController();
      const y = {
        format: "minimal"
      };
      return t ? (y.name = s.artifactName, r(null)) : ((n[J] !== Te || n[ue] === ea) && (y["partition-by"] = "project_and_name", y["partition-sort-by"] = "updated"), p(null)), !t && !_.isEmpty(U.current) && (y.page = U.current[$e], y["page-size"] = U.current[Be]), t && !_.isEmpty(B.current) && (y.page = B.current[$e], y["page-size"] = B.current[Be]), fe.current = null, g(
        h({
          project: s.projectName,
          filters: n,
          config: {
            ui: {
              controller: V.current,
              setRequestErrorMessage: $
            },
            params: y
          }
        })
      ).unwrap().then((D) => (D?.artifacts ? t ? (B.current.paginationResponse = D.pagination, r(D.artifacts || [])) : (U.current.paginationResponse = D.pagination, p(D.artifacts || [])) : t ? r([]) : p([]), D)).catch(() => {
        t ? r([]) : p([]);
      });
    },
    [g, h, t, s.artifactName, s.projectName]
  ), Se = L(() => (oe.current = new AbortController(), g(
    Pa({
      dispatch: g,
      fetchTags: Da,
      project: s.projectName,
      category: f,
      config: {
        signal: oe.current.signal
      }
    })
  )), [f, g, s.projectName]), Y = L(
    (n) => (Se(), m({}), _e(n)),
    [_e, Se]
  ), ke = L(
    (n) => {
      Oe(sa, {
        artifact: n,
        onAddTag: () => Y(O),
        projectName: s.projectName
      });
    },
    [s.projectName, Y, O]
  ), Me = L(
    (n) => {
      G(
        `/projects/${s.projectName}/${b}${d ? `/${d}` : ""}/${n}/${W}?${$a(window.location.search)}`
      );
    },
    [G, b, s.projectName, d]
  ), Ie = L(
    (n) => {
      V.current = new AbortController(), g(
        Ba({
          project: n.project,
          filters: {},
          config: {
            signal: V.current.signal,
            params: { format: "minimal", kind: "serving" }
          }
        })
      ).unwrap().then((y) => {
        if (!_.isNil(y)) {
          const D = _.chain(y).filter((te) => te.type === Oa && te.graph?.kind === "router").uniqBy("name").map((te) => ({ label: te.name, id: te.name })).value();
          D.length > 0 ? Oe(ia, {
            model: n,
            functionList: y,
            functionOptionList: D
          }) : c(s.projectName, n.db_key);
        }
      });
    },
    [g, c, s.projectName]
  ), da = z(
    () => (n) => j(
      n,
      I,
      g,
      we,
      ke,
      s.projectName,
      Y,
      Fe,
      O,
      i,
      Me,
      t,
      !1,
      Ie
    ),
    [
      O,
      g,
      I,
      j,
      ke,
      Ie,
      t,
      s.projectName,
      Fe,
      Y,
      i,
      Me,
      we
    ]
  ), ua = L(
    (n) => C(
      n,
      s.projectName,
      i,
      Ce,
      g
    ),
    [g, C, s.projectName, i]
  ), ma = (n, y) => {
    "tag" in n.data && (t ? r(null) : p(null), G(
      `/projects/${s.projectName}/${b}${d ? `/${d}` : ""}/${s.artifactName}${t ? `/${W}` : ""}/${n.data.tag.currentFieldValue ? `:${n.data.tag.currentFieldValue}` : ""}@${y.uid}/overview${window.location.search}`,
      { replace: !0 }
    )), Y(O);
  }, [
    fa,
    ee,
    Le,
    ge
  ] = Ye({
    hidden: t,
    content: u ?? [],
    refreshContent: Y,
    filters: O,
    paginationConfigRef: U,
    resetPaginationTrigger: `${s.projectName}_${ca}`
  }), [
    ga,
    ae,
    Pe,
    pe
  ] = Ye({
    hidden: !t,
    content: x ?? [],
    refreshContent: Y,
    filters: O,
    paginationConfigRef: B,
    resetPaginationTrigger: `${s.projectName}_${t}`
  });
  Ha({
    content: t ? ae : ee,
    selectedItem: i,
    isAllVersions: t
  });
  const he = z(() => (t ? ae : ee).map(
    (n) => q(n, s.projectName, t)
  ), [
    q,
    t,
    ae,
    ee,
    s.projectName
  ]), pa = z(() => he[0]?.content ?? [], [he]);
  M(() => {
    s.id && ce.details.menu.length > 0 && ot(s.tab, ce.details.menu, G, ie);
  }, [G, ie, ce.details.menu, s.tab, s.id]), M(() => {
    _.isEmpty(i) && (fe.current = null);
  }, [i]);
  const je = L((n = !1) => {
    et({
      artifactName: s.artifactName,
      artifacts: t ? x : u,
      dispatch: g,
      ignoreLastCheckedArtifact: n,
      isAllVersions: t,
      navigate: G,
      paginatedArtifacts: t ? ae : ee,
      paginationConfigRef: t ? B : U,
      paramsId: s.id,
      projectName: s.projectName,
      searchParams: t ? Pe : Le,
      setSearchParams: t ? pe : ge,
      setSelectedArtifact: m,
      setSelectedArtifactIsBeyondTheList: w,
      lastCheckedArtifactIdRef: fe,
      page: b,
      tab: d
    });
  }, [
    x,
    u,
    g,
    t,
    G,
    b,
    ae,
    ee,
    s.artifactName,
    s.id,
    s.projectName,
    Pe,
    Le,
    pe,
    ge,
    d
  ]);
  return M(() => je(!0), [je]), M(() => {
    const n = oe.current;
    return () => {
      g(A()), m({}), V.current.abort(He), n.abort(He);
    };
  }, [s.projectName, g, oe, A]), M(() => () => {
    p(null), r(null);
  }, [s.projectName]), M(() => {
    g(Ga({ groupBy: Ua }));
  }, [g, s.projectName]), M(() => {
    if (i.feature_vector && !E.error && _.isEmpty(E.modelFeatureVectorData)) {
      const { name: n, tag: y } = at(i.feature_vector);
      g(Ya({ project: s.projectName, name: n, reference: y }));
    }
  }, [
    E.error,
    E.modelFeatureVectorData,
    g,
    s.projectName,
    i.feature_vector
  ]), /* @__PURE__ */ a.jsx(
    Ee,
    {
      actionButtons: o,
      actionsMenu: da,
      applyDetailsChanges: ua,
      applyDetailsChangesCallback: ma,
      artifactName: s.artifactName,
      artifacts: (t ? x : u) ?? [],
      artifactsStore: k,
      detailsFormInitialValues: la,
      filters: O,
      filtersConfig: ve,
      filtersStore: H,
      getAndSetSelectedArtifact: je,
      handleRefreshArtifacts: t ? ga : fa,
      historyBackLink: Ae,
      isAllVersions: t,
      isOnlyTabScreen: !!d,
      isSelectedArtifactBeyondTheList: F,
      page: b,
      pageData: ce,
      paginationConfigArtifactsRef: t ? B : U,
      ref: { artifactsRef: oa },
      requestErrorMessage: v,
      renderPageTabs: S,
      selectedArtifact: i,
      setSearchArtifactsParams: t ? pe : ge,
      setSelectedArtifact: m,
      storeArtifactTypeLoading: T,
      tab: d,
      tableContent: he,
      tableHeaders: pa,
      viewMode: me
    }
  );
};
ft.propTypes = {
  actionButtons: e.array,
  artifactType: e.string.isRequired,
  createArtifactsRowData: e.func.isRequired,
  fetchArtifacts: e.func.isRequired,
  generateActionsMenu: e.func.isRequired,
  generateDetailsFormInitialValues: e.func.isRequired,
  generatePageData: e.func.isRequired,
  getArtifactFiltersConfig: e.func,
  handleApplyDetailsChanges: e.func.isRequired,
  handleDeployArtifactFailure: e.func,
  isAllVersions: e.bool,
  page: e.string.isRequired,
  renderPageTabs: e.func,
  removeArtifacts: e.func.isRequired,
  storeArtifactTypeLoading: e.bool.isRequired,
  tab: e.string
};
export {
  ft as A
};
//# sourceMappingURL=Artifacts-DBXlHjmE.mjs.map
