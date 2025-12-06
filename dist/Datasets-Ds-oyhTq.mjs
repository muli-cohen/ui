import { m as f, k as a, j as p, r as m, n as A, o as g, p as D, P as d } from "./main-CTYpZ6Nf.mjs";
import { useCallback as e } from "react";
import { useSelector as u } from "react-redux";
import { R as T } from "./RegisterArtifactModal-BDqsFa-z.mjs";
import { A as S } from "./Artifacts-DBXlHjmE.mjs";
import { r as s, h, g as R, a as y, c as E } from "./Table-DB12oa-o.mjs";
const P = ({ isAllVersions: r = !1 }) => {
  const o = u((t) => t.artifactsStore), i = e(
    (t) => ({
      tag: t.tag ?? ""
    }),
    []
  ), c = e((t, n, l) => {
    f(T, {
      artifactKind: a,
      params: t,
      refresh: () => n(l),
      title: s
    });
  }, []);
  return /* @__PURE__ */ p.jsx(
    S,
    {
      actionButtons: [
        {
          variant: D,
          label: s,
          className: "action-button",
          onClick: c
        }
      ],
      artifactType: a,
      createArtifactsRowData: E,
      fetchArtifacts: g,
      generateActionsMenu: y,
      generateDetailsFormInitialValues: i,
      generatePageData: R,
      handleApplyDetailsChanges: h,
      isAllVersions: r,
      page: A,
      removeArtifacts: m,
      storeArtifactTypeLoading: o.datasets.datasetLoading
    }
  );
};
P.propTypes = {
  isAllVersions: d.bool.isRequired
};
export {
  P as default
};
//# sourceMappingURL=Datasets-Ds-oyhTq.mjs.map
