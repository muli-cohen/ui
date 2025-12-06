import { bb as o, j as i, h9 as c, D as n, ha as m, f4 as p, P as f } from "./main-CTYpZ6Nf.mjs";
import { useCallback as l } from "react";
import { useSelector as u } from "react-redux";
import { A as D } from "./Artifacts-DBXlHjmE.mjs";
import { av as g, aw as A, ax as h, ay as T } from "./Table-DB12oa-o.mjs";
const b = ({ isAllVersions: t = !1 }) => {
  const e = u((a) => a.artifactsStore), s = l(
    (a, r) => ({
      tag: a?.tag ?? "",
      labels: o(a?.labels ?? {}, r)
    }),
    []
  );
  return /* @__PURE__ */ i.jsx(
    D,
    {
      artifactType: p,
      createArtifactsRowData: T,
      fetchArtifacts: m,
      generateActionsMenu: h,
      generateDetailsFormInitialValues: s,
      generatePageData: A,
      handleApplyDetailsChanges: g,
      isAllVersions: t,
      page: n,
      removeArtifacts: c,
      storeArtifactTypeLoading: e.documents.documentLoading
    }
  );
};
b.propTypes = {
  isAllVersions: f.bool.isRequired
};
export {
  b as default
};
//# sourceMappingURL=Documents-BTKVeHya.mjs.map
