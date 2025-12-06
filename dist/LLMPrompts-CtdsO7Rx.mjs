import { j as s, r as o, L as i, lc as p, hx as c, P as f } from "./main-CTYpZ6Nf.mjs";
import { useCallback as m } from "react";
import { useSelector as n } from "react-redux";
import { A as L } from "./Artifacts-DBXlHjmE.mjs";
import { aJ as l, aK as g, aL as P, aM as A, aN as M } from "./Table-DB12oa-o.mjs";
const u = ({ isAllVersions: a }) => {
  const e = n((t) => t.artifactsStore), r = m(
    (t) => ({
      tag: t.tag ?? ""
    }),
    []
  );
  return /* @__PURE__ */ s.jsx(
    L,
    {
      artifactType: c,
      createArtifactsRowData: M,
      fetchArtifacts: p,
      generateActionsMenu: A,
      generateDetailsFormInitialValues: r,
      generatePageData: P,
      getArtifactFiltersConfig: g,
      handleApplyDetailsChanges: l,
      isAllVersions: a,
      page: i,
      removeArtifacts: o,
      storeArtifactTypeLoading: e.LLMPrompts.LLMPromptLoading
    }
  );
};
u.propTypes = {
  isAllVersions: f.bool.isRequired
};
export {
  u as default
};
//# sourceMappingURL=LLMPrompts-CtdsO7Rx.mjs.map
