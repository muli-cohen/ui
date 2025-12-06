import { P as e, hN as i, J as a, U as u, H as n, gr as l, gG as R, bn as g, ka as E, kb as c, bk as p, bo as O, bs as _, g$ as q, aH as T, kB as b, aI as m, kH as o } from "./main-CTYpZ6Nf.mjs";
import * as s from "react";
const A = e.arrayOf(
  e.shape({
    customDelimiter: e.string,
    id: e.string.isRequired,
    label: e.string.isRequired
  })
), I = e.oneOf([n, a]), d = e.shape({
  disabled: e.bool,
  hidden: e.bool,
  icon: e.element,
  id: e.string.isRequired,
  label: e.string.isRequired,
  status: e.string,
  subLabel: e.string
}), h = e.arrayOf(d), N = e.shape({
  label: e.string.isRequired,
  value: e.string.isRequired,
  info: e.string,
  tip: e.string,
  hidden: e.bool
}), S = e.arrayOf(N);
e.shape({
  handler: e.func.isRequired,
  label: e.string.isRequired,
  variant: e.string.isRequired
});
const D = e.shape({
  className: e.string,
  icon: e.element,
  label: e.string.isRequired,
  onClick: e.func.isRequired,
  variant: o
}), P = e.shape({
  className: e.string,
  icon: e.element,
  options: h,
  onSelectOption: e.func.isRequired,
  selectedOption: d,
  variant: o
}), M = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string,
    hidden: e.bool,
    preview: e.bool,
    icon: e.element
  })
), y = e.shape({
  cron: e.string,
  defaultCron: e.string,
  activeOption: e.string.isRequired,
  minute: e.string.isRequired,
  hour: e.string.isRequired,
  week: e.shape({
    days: e.arrayOf(e.string).isRequired,
    time: e.string
  }),
  day: e.shape({
    time: e.string
  }),
  month: e.shape({
    time: e.string
  })
}), C = e.arrayOf(
  e.shape({
    label: e.string.isRequired,
    id: e.string.isRequired,
    index: e.number.isRequired
  })
), L = e.shape({
  artifacts: e.array.isRequired,
  artifactsReferences: e.array.isRequired,
  comboboxMatches: e.array.isRequired,
  featureVectors: e.array.isRequired,
  featureVectorsReferences: e.array.isRequired,
  inputProjectItemPathEntered: e.bool.isRequired,
  inputProjectItemReferencePathEntered: e.bool.isRequired,
  inputProjectPathEntered: e.bool.isRequired,
  inputStorePathTypeEntered: e.bool.isRequired,
  project: e.string.isRequired,
  projectItemReference: e.string.isRequired,
  projects: e.array.isRequired,
  storePathType: e.string.isRequired
}), w = e.oneOf([
  a,
  u,
  n,
  l
]), U = e.arrayOf(
  e.shape({
    app: e.string.isRequired,
    name: e.string.isRequired,
    type: e.string.isRequired,
    id: e.string.isRequired,
    full_name: e.string.isRequired,
    project: e.string
  })
), t = e.shape({
  className: e.string.isRequired,
  text: e.string.isRequired,
  chartColor: e.string.isRequired,
  index: e.number
}), v = e.shape({
  type: e.string.isRequired,
  data: e.oneOfType([e.bool, e.string]).isRequired,
  full_name: e.string.isRequired,
  resultKind: e.number,
  app: e.string.isRequired,
  id: e.number.isRequired,
  labels: e.arrayOf(e.string).isRequired,
  dates: e.arrayOf(e.string).isRequired,
  points: e.arrayOf(e.number).isRequired,
  title: e.string.isRequired,
  driftStatusList: e.arrayOf(t),
  totalDriftStatus: t,
  minPointValue: e.number.isRequired,
  maxPointValue: e.number.isRequired,
  metric_computed_avg_points: e.string.isRequired,
  metric_raw_avg_points: e.string.isRequired
}), H = e.oneOf([
  i.HOUR,
  i["24_HOURS"],
  i.WEEK,
  i.MONTH,
  i.YEAR,
  1 / 0
]), F = e.objectOf(
  e.shape({
    label: e.string,
    hidden: e.bool,
    isFuture: e.bool,
    initialValue: e.any.isRequired,
    isModal: e.bool
  })
), B = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    disabled: e.bool,
    status: e.string
  })
), x = e.shape({
  [m]: e.number,
  [b]: e.number,
  [T]: e.number,
  [q]: e.number,
  isNewResponse: e.bool,
  paginationResponse: e.shape({
    page: e.number,
    "page-size": e.number,
    "page-token": e.string
  })
}), j = e.shape({
  id: e.string.isRequired,
  name: e.string.isRequired,
  type: e.string.isRequired,
  icon: e.node,
  role: e.string.isRequired,
  initialRole: e.string,
  modification: e.string
}), k = e.shape({
  subType: e.oneOf([E, c, p, O, _]).isRequired,
  label: e.string.isRequired,
  tip: e.string,
  subLabel: e.string,
  isSelectable: e.bool,
  withOpacity: e.bool,
  shape: e.oneOf([R, g, null]),
  sourceHandle: e.shape({
    tooltip: e.string,
    className: e.string
  }),
  targetHandle: e.shape({
    tooltip: e.string,
    className: e.string
  }),
  customData: e.object
}), G = (r) => /* @__PURE__ */ s.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ s.createElement("path", { d: "M12 15L6.80385 9.75L17.1962 9.75L12 15Z", fill: "#7F7989" })), V = (r) => /* @__PURE__ */ s.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ s.createElement("path", { d: "M5.4 3H6.6V4.2H5.4V3ZM5.4 5.4H6.6V9H5.4V5.4ZM6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8Z", fill: "#EA336A" }));
export {
  P as A,
  A as C,
  L as D,
  F,
  w as J,
  D as M,
  B as O,
  x as P,
  S as R,
  G as S,
  I as a,
  j as b,
  V as c,
  y as d,
  C as e,
  k as f,
  M as g,
  v as h,
  H as i,
  U as j,
  h as k
};
//# sourceMappingURL=exclamation-mark-kRjYDG-V.mjs.map
