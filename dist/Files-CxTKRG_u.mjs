import { m as f, q as n, j as p, s as m, F as A, u as g, v as T, p as u, P as R } from "./main-CTYpZ6Nf.mjs";
import { useCallback as a } from "react";
import { useSelector as d } from "react-redux";
import { R as F } from "./RegisterArtifactModal-BDqsFa-z.mjs";
import { A as h } from "./Artifacts-DBXlHjmE.mjs";
import { b as e, d as E, e as P, f as b, i as y } from "./Table-DB12oa-o.mjs";
const C = ({ isAllVersions: s = !1 }) => {
  const r = d((t) => t.artifactsStore), i = a(
    (t) => ({
      tag: t.tag ?? ""
    }),
    []
  ), o = a((t, l, c) => {
    f(F, {
      artifactKind: n,
      params: t,
      refresh: () => l(c),
      title: e
    });
  }, []);
  return /* @__PURE__ */ p.jsx(
    h,
    {
      actionButtons: [
        {
          variant: u,
          label: e,
          className: "action-button",
          onClick: o
        }
      ],
      artifactType: T,
      createArtifactsRowData: y,
      fetchArtifacts: g,
      generateActionsMenu: b,
      generateDetailsFormInitialValues: i,
      generatePageData: P,
      handleApplyDetailsChanges: E,
      isAllVersions: s,
      page: A,
      removeArtifacts: m,
      storeArtifactTypeLoading: r.files.fileLoading
    }
  );
};
C.propTypes = {
  isAllVersions: R.bool.isRequired
};
export {
  C as default
};
//# sourceMappingURL=Files-CxTKRG_u.mjs.map
