import { ag as b, bb as g, m as t, j as s, bc as o, bd as u, be as M, bf as T, bg as A, p as D, at as h, P as y } from "./main-CTYpZ6Nf.mjs";
import { useCallback as r } from "react";
import { useSelector as R } from "react-redux";
import { R as P } from "./RegisterModelModal-Cc2loyYG.mjs";
import { s as x, v as E, w as L, x as v, y as C, J as S } from "./Table-DB12oa-o.mjs";
import { A as j } from "./Artifacts-DBXlHjmE.mjs";
import { M as w } from "./ModelsPageTabs-B77C5auf.mjs";
const k = ({ isAllVersions: i }) => {
  const { isDemoMode: l } = b(), n = R((a) => a.artifactsStore), c = r(
    (a, e) => ({
      tag: a.tag ?? "",
      labels: g(a.labels ?? {}, e)
    }),
    []
  ), d = r((a, e, f) => {
    t(P, {
      params: a,
      refresh: () => e(f)
    });
  }, []), m = (a) => {
    t(S, {
      params: a,
      tab: o,
      isTrain: !0,
      wizardTitle: "Train model"
    });
  }, p = () => /* @__PURE__ */ s.jsx(w, {});
  return /* @__PURE__ */ s.jsx(
    j,
    {
      actionButtons: [
        {
          variant: D,
          label: "Train model",
          className: "action-button",
          onClick: m
        },
        {
          variant: h,
          label: "Register model",
          className: "action-button",
          onClick: d,
          hidden: !l
        }
      ],
      artifactType: A,
      createArtifactsRowData: C,
      fetchArtifacts: T,
      generateActionsMenu: v,
      generateDetailsFormInitialValues: c,
      generatePageData: L,
      handleApplyDetailsChanges: E,
      handleDeployArtifactFailure: x,
      isAllVersions: i,
      page: M,
      renderPageTabs: p,
      removeArtifacts: u,
      storeArtifactTypeLoading: n.models.modelLoading,
      tab: o
    }
  );
};
k.propTypes = {
  isAllVersions: y.bool.isRequired
};
export {
  k as default
};
//# sourceMappingURL=Models-V8fuwORW.mjs.map
