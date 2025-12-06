import { j as t, dI as p, dQ as u, P as c, k as m, q as f, cg as g, p as j, V as L } from "./main-CTYpZ6Nf.mjs";
import * as a from "react";
import { useSelector as b } from "react-redux";
import { P as w } from "./PageHeader-ClcGdvsO.mjs";
import { J as o, O as v } from "./Table-DB12oa-o.mjs";
import { S as x, a as S, c as E, b as H, d as T } from "./mlrun-realtime-functions-CYHBNdWF.mjs";
const M = ({ projectData: e, projectName: r }) => {
  const n = b((s) => s.appStore.frontendSpec);
  return /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx(w, { title: r, tip: p }),
    e && /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsxs("span", { className: "project-details__details-label", children: [
        "Created:",
        u(e.metadata.created + "Z", " MM/DD/YYYY, HH:mm:ss A")
      ] }),
      e.spec.owner && !n.ce?.version && /* @__PURE__ */ t.jsxs("span", { className: "project-details__details-label", children: [
        "Owner: ",
        e.spec.owner
      ] })
    ] })
  ] });
};
M.propTypes = {
  projectData: c.object,
  projectName: c.string.isRequired
};
const R = (e) => /* @__PURE__ */ a.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ a.createElement("g", { id: "ic-api-gateways" }, /* @__PURE__ */ a.createElement("g", { id: "ic" }, /* @__PURE__ */ a.createElement("path", { d: "M8 21C7.71667 21 7.47933 20.904 7.288 20.712C7.096 20.5207 7 20.2833 7 20V19H3C2.45 19 1.97933 18.8043 1.588 18.413C1.196 18.021 1 17.55 1 17V5C1 4.45 1.196 3.979 1.588 3.587C1.97933 3.19567 2.45 3 3 3H11V5H3V17H19V14H21V17C21 17.55 20.8043 18.021 20.413 18.413C20.021 18.8043 19.55 19 19 19H15V20C15 20.2833 14.9043 20.5207 14.713 20.712C14.521 20.904 14.2833 21 14 21H8Z", fill: "#8C9DC5" }), /* @__PURE__ */ a.createElement("path", { d: "M17.875 9.85C17.6917 9.66667 17.6 9.43333 17.6 9.15C17.6 8.86667 17.6917 8.63333 17.875 8.45L19.75 6.575H13.575C13.2917 6.575 13.0543 6.479 12.863 6.287C12.671 6.09567 12.575 5.85833 12.575 5.575C12.575 5.29167 12.671 5.054 12.863 4.862C13.0543 4.67067 13.2917 4.575 13.575 4.575H19.75L17.875 2.7C17.6917 2.51667 17.6 2.279 17.6 1.987C17.6 1.69567 17.6917 1.45833 17.875 1.275C18.0583 1.09167 18.2917 1 18.575 1C18.8583 1 19.0917 1.09167 19.275 1.275L22.875 4.875C22.975 4.975 23.046 5.08333 23.088 5.2C23.1293 5.31667 23.15 5.44167 23.15 5.575C23.15 5.70833 23.1293 5.83333 23.088 5.95C23.046 6.06667 22.975 6.175 22.875 6.275L19.275 9.875C19.0917 10.0583 18.8583 10.1457 18.575 10.137C18.2917 10.129 18.0583 10.0333 17.875 9.85ZM8.875 15.875L5.275 12.275C5.175 12.175 5.10433 12.0667 5.063 11.95C5.021 11.8333 5 11.7083 5 11.575C5 11.4417 5.021 11.3167 5.063 11.2C5.10433 11.0833 5.175 10.975 5.275 10.875L8.875 7.275C9.05833 7.09167 9.29167 7 9.575 7C9.85833 7 10.0917 7.09167 10.275 7.275C10.4583 7.45833 10.55 7.69567 10.55 7.987C10.55 8.279 10.4583 8.51667 10.275 8.7L8.4 10.575H14.575C14.8583 10.575 15.096 10.6707 15.288 10.862C15.4793 11.054 15.575 11.2917 15.575 11.575C15.575 11.8583 15.4793 12.0957 15.288 12.287C15.096 12.479 14.8583 12.575 14.575 12.575H8.4L10.275 14.45C10.4583 14.6333 10.55 14.8667 10.55 15.15C10.55 15.4333 10.4583 15.6667 10.275 15.85C10.0917 16.0333 9.85833 16.129 9.575 16.137C9.29167 16.1457 9.05833 16.0583 8.875 15.875Z", fill: "#8C9DC5" })))), V = (e) => /* @__PURE__ */ a.createElement("svg", { width: 20, height: 18, viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.77 17.9234C14.0549 18.0344 14.3799 18.0273 14.6675 17.8889L18.3927 16.0964C18.7841 15.908 19.0331 15.5119 19.0331 15.0773L19.0331 2.9231C19.0331 2.48849 18.7841 2.09233 18.3927 1.90397L14.6675 0.111438C14.2901 -0.0702014 13.8483 -0.0257113 13.5169 0.215148C13.4696 0.249555 13.4246 0.287972 13.3822 0.330308L6.25084 6.83642L3.14455 4.47849C2.85539 4.25899 2.45092 4.27698 2.18236 4.52127L1.18607 5.42754C0.857569 5.72636 0.857192 6.24318 1.18526 6.54249L3.87914 9.00016L1.18526 11.4578C0.857191 11.7572 0.857568 12.274 1.18607 12.5728L2.18236 13.479C2.45092 13.7234 2.85539 13.7413 3.14455 13.5219L6.25084 11.1639L13.3822 17.67C13.495 17.7829 13.6275 17.8679 13.77 17.9234ZM14.5124 4.8927L9.10131 9.00016L14.5124 13.1076L14.5124 4.8927Z", fill: "#7F7989" })), O = [
  {
    label: "Jupyter",
    id: "jupyter",
    icon: /* @__PURE__ */ t.jsx(v, {})
  },
  {
    label: "VS Code",
    id: "vsCode",
    icon: /* @__PURE__ */ t.jsx(V, {})
  }
], P = (e, r, n, s, l, d, C, h, i) => [
  {
    label: "Register dataset",
    id: "registerDataset",
    icon: /* @__PURE__ */ t.jsx(x, {}),
    handler: () => {
      n(m);
    }
  },
  {
    label: "Register artifact",
    id: "registerFile",
    icon: /* @__PURE__ */ t.jsx(S, {}),
    handler: () => {
      n(f);
    }
  },
  {
    label: "Batch run",
    id: "batchRun",
    icon: /* @__PURE__ */ t.jsx(E, {}),
    handler: () => {
      l(o, {
        params: r
      });
    }
  },
  {
    label: "Train model",
    id: "trainModel",
    icon: /* @__PURE__ */ t.jsx(H, {}),
    handler: () => {
      l(o, {
        params: r,
        isTrain: !0,
        wizardTitle: "Train model",
        isOverview: !0
      });
    }
  },
  {
    label: "Batch inference",
    id: "batchInference",
    icon: /* @__PURE__ */ t.jsx(R, {}),
    handler: () => {
      l(o, {
        params: r,
        isBatchInference: !0,
        wizardTitle: "Batch inference"
      });
    }
  },
  {
    label: "Create real-time function",
    id: "createRealTimeFunction",
    icon: /* @__PURE__ */ t.jsx(T, {}),
    handler: () => window.open(s(`/projects/${r.projectName}/create-function`), "_blank")
  },
  {
    label: "Register model",
    id: "registerModel",
    handler: () => {
      d();
    },
    hidden: !i
  },
  {
    label: "ML function",
    id: "mlFunction",
    handler: () => {
      h(!0);
    },
    hidden: !i
  },
  {
    label: "Feature set",
    id: "featureSet",
    handler: () => C(!0),
    hidden: !i
  },
  {
    label: "Create feature vector",
    id: "createFeatureVector",
    handler: () => e(
      `/projects/${r.projectName}/feature-store/feature-vectors?openPanel=true`,
      "_blank"
    ),
    hidden: !i
  }
], Y = (e, r, n, s) => {
  e.response?.status === g ? n({
    message: "You are not permitted to view this project.",
    messageOnly: !0,
    btnConfirmLabel: "Okay",
    btnConfirmType: j,
    confirmHandler: () => {
      r("/projects/");
    }
  }) : (L(s, e, "Failed to fetch project data"), r("/projects/"));
};
export {
  M as P,
  P as g,
  Y as h,
  O as l
};
//# sourceMappingURL=project.utils-DSwB9YNB.mjs.map
