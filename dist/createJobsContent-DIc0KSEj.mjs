import { c as x, gZ as u, j as N, x as M, z as W, I as B, P as f, B as F, aR as n, dD as A, bY as y, a0 as c, gE as k, m as $, gd as D, gF as R, dE as o, b3 as v, g_ as g, aH as U, g$ as C, an as b, es as I, aT as T, b5 as w, h0 as _, aV as O } from "./main-CTYpZ6Nf.mjs";
import "react";
import { useParams as P } from "react-router-dom";
import { at as J, t as h, F as E, au as S, a8 as q } from "./Table-DB12oa-o.mjs";
import { m } from "./measureTime-DGja8F60.mjs";
import { c as K } from "./link-helper.util-CuUJj7TV.mjs";
const G = ({ actionsMenu: r, handleSelectJob: t = () => {
}, rowItem: d, selectedJob: e = {} }) => {
  const a = P(), i = x(
    "table-row",
    "table-body-row",
    "parent-row",
    u(e, !0) === d.data.ui.identifierUnique && "table-row_active"
  );
  return /* @__PURE__ */ N.jsxs("tr", { className: i, children: [
    d.content.map((l, s) => !l.hidden && /* @__PURE__ */ N.jsx(
      M,
      {
        cellData: l,
        item: d.data,
        link: l.type === "link" ? l.getLink?.(a.tab ?? W) : "",
        firstCell: s === 0,
        onClick: l.handleClick,
        selectItem: t,
        selectedItem: e
      },
      `${d.data.id}.${l.header}.${s}`
    )),
    /* @__PURE__ */ N.jsx("td", { className: "table-body__cell table-cell-icon", children: /* @__PURE__ */ N.jsx(B, { dataItem: d.data, menu: r }) })
  ] });
};
G.propTypes = {
  actionsMenu: F.isRequired,
  handleSelectJob: f.func,
  rowItem: f.object.isRequired,
  selectedJob: f.object
};
const X = (r, t, d) => r.map((e) => {
  const a = u(e, !0), i = J(e.labels), l = (s) => t ? q(e.uid, s, e.name) ? K(
    e.project,
    w,
    T,
    e.uid,
    null,
    s,
    null,
    null,
    e.name
  ) : "" : `/projects/${e.project}/${w.toLowerCase()}/${T}/${e.name}${g(
    window.location.search,
    !0,
    [U, C, b]
  )}`;
  return {
    data: {
      ...e,
      ui: {
        ...e.ui,
        identifier: u(e),
        identifierUnique: a
      }
    },
    content: [
      {
        headerId: t ? "uid" : "name",
        headerLabel: t ? "UID" : "Name",
        id: `name.${a}`,
        value: t ? e.uid || e.id : e.name,
        className: "table-cell-name",
        type: i === A && !d ? "hidden" : "link",
        getLink: l,
        showStatus: !0,
        showUid: !0,
        showDate: !0
      },
      {
        headerId: "type",
        headerLabel: "Type",
        id: `type.${a}`,
        value: i,
        className: "table-cell-1",
        type: "type",
        types: h
      },
      {
        headerId: "job.uid",
        id: `uid.${a}`,
        value: e.uid || e.id,
        className: "table-cell-1",
        type: "hidden"
      },
      {
        headerId: "duration",
        headerLabel: "Duration",
        id: `duration.${a}`,
        value: m(
          e.startTime || new Date(e.created_at),
          e.state?.value !== y && e.updated || e.state?.value !== c && new Date(e.finished_at)
        ),
        className: "table-cell-1",
        type: "duration"
      },
      {
        headerId: "owner",
        headerLabel: "Owner",
        id: `owner.${a}`,
        value: e.owner,
        className: "table-cell-1"
      },
      {
        headerId: "labels",
        headerLabel: "Labels",
        id: `labels.${a}`,
        value: e.labels,
        className: "table-cell-1",
        type: "labels"
      },
      {
        headerId: "parameters",
        headerLabel: "Parameters",
        id: `parameters.${a}`,
        value: e.parametersChips,
        className: "table-cell-1",
        type: "parameters"
      },
      {
        headerId: "results",
        headerLabel: "Results",
        id: `resultsChips.${a}`,
        value: e.resultsChips,
        className: "table-cell-3",
        type: "results"
      },
      {
        headerId: "updated",
        id: `updated.${a}`,
        value: e.updated || new Date(e.finished_at),
        className: "table-cell-1",
        type: "hidden"
      },
      {
        headerId: "attempts",
        headerLabel: "Attempts",
        id: `attempts.${a}`,
        value: `${e.retryCountWithInitialAttempt} out of ${e.maxRetriesWithInitialAttempt}`,
        className: "table-cell-1",
        tip: "Number of attempts to run Kubernetes jobs"
      }
    ]
  };
}), j = (r) => r.map((t) => {
  const d = u(t, !0), [, e, a, i] = t.lastRunUri?.match(/(.+)@(.+)#([^:]+)(?::(.+))?/) || [];
  return {
    data: {
      ...t,
      ui: {
        ...t.ui,
        identifier: u(t),
        identifierUnique: d
      }
    },
    content: [
      {
        headerId: "name",
        headerLabel: "Name",
        id: `name.${d}`,
        value: t.name,
        className: "table-cell-name",
        showStatus: !0,
        handleClick: () => $(E, {
          funcUri: t.func
        }),
        type: "link"
      },
      {
        headerId: "type",
        headerLabel: "Type",
        id: `type.${d}`,
        value: t.type,
        className: "table-cell-small",
        type: "type",
        types: h
      },
      {
        headerId: "nextrun",
        headerLabel: "Next run (Local TZ)",
        id: `nextRun.${d}`,
        value: n(t.nextRun),
        className: "table-cell-1",
        type: "date"
      },
      {
        headerId: "schedule",
        headerLabel: "Schedule (UTC)",
        id: `schedule.${d}`,
        value: t.scheduled_object?.schedule || null,
        className: "table-cell-1",
        tip: "The first day of the week (0) is Monday, and not Sunday."
      },
      {
        headerId: "labels",
        headerLabel: "Labels",
        id: `labels.${d}`,
        value: D(t.scheduled_object?.task.metadata.labels || {}),
        className: "table-cell-1",
        type: "labels"
      },
      {
        headerId: "lastrun",
        headerLabel: "Last run (Local TZ)",
        id: `lastRun.${d}`,
        value: n(t.startTime),
        className: "table-cell-1",
        handleClick: () => $(S, {
          jobData: {
            project: e,
            uid: a,
            iter: i
          }
        }),
        type: "link"
      },
      {
        headerId: "createdtime",
        headerLabel: "Created time (Local TZ)",
        id: `createdTime.${d}`,
        value: n(t.createdTime, "Not yet started"),
        className: "table-cell-1",
        type: "date"
      },
      {
        headerId: "function",
        id: `func.${d}`,
        value: t.func,
        className: "",
        type: "hidden"
      }
    ]
  };
}), ee = (r, t, d, e) => r.map((a) => {
  const i = u(a, !0), l = a.name.replace(`${t}-`, "");
  return {
    data: {
      ...a,
      ui: {
        ...a.ui,
        identifier: u(a),
        identifierUnique: i
      }
    },
    content: [
      {
        headerId: "name",
        headerLabel: "Name",
        id: `name.${i}`,
        value: l,
        className: "table-cell-name",
        type: "link",
        getLink: (s) => R(t, a.id, null, s, O),
        showStatus: !0
      },
      {
        headerId: "uid",
        id: `uid.${i}`,
        value: a?.id,
        className: "table-cell-1",
        type: "hidden",
        hidden: e
      },
      {
        headerId: "createdat",
        headerLabel: "Created at",
        id: `createdAt.${i}`,
        value: n(a.created_at, "N/A"),
        className: "table-cell-1",
        hidden: e
      },
      {
        headerId: "finishedat",
        headerLabel: "Finished at",
        id: `finishedAt.${i}`,
        value: n(a.finished_at, "N/A"),
        className: "table-cell-1",
        hidden: e
      },
      {
        headerId: "duration",
        headerLabel: "Duration",
        id: `duration.${i}`,
        value: m(
          a.startTime || new Date(a.created_at),
          a.state?.value !== y && a.updated || a.state?.value !== c && new Date(a.finished_at)
        ),
        className: "table-cell-1",
        type: "duration",
        hidden: e
      },
      {
        headerId: "updated",
        id: `updated.${i}`,
        value: a.updated || new Date(a.finished_at),
        className: "table-cell-1",
        type: "hidden",
        hidden: e
      }
    ]
  };
}), ae = (r, t, d, e, a, i) => r.map((l) => {
  const s = _(l, !0), p = l.name.replace(`${t}-`, "");
  return {
    data: {
      ...l,
      ui: {
        ...l.ui,
        identifier: _(l),
        identifierUnique: s
      }
    },
    content: [
      {
        headerId: "name",
        headerLabel: "Name",
        id: `name.${s}`,
        value: p,
        className: "table-cell-name",
        type: "link",
        getLink: (L) => d ? k(
          d,
          e,
          l.customData,
          L
        ) : R(
          t,
          e,
          l.customData,
          L,
          O
        ),
        showStatus: !0,
        showUid: !0,
        showDate: !0
      },
      {
        headerId: "kind",
        headerLabel: "Kind",
        id: `kind.${s}`,
        value: l.run_type,
        className: "table-cell-1",
        type: "type",
        types: h,
        hidden: i
      },
      {
        headerId: "uid",
        id: `uid.${s}`,
        value: l.uid || l.id,
        className: "table-cell-1",
        type: "hidden",
        hidden: i
      },
      {
        headerId: "startedAt",
        headerLabel: "Started at",
        id: `startedAt.${s}`,
        value: n(l.startedAt, "N/A"),
        className: "table-cell-1",
        hidden: i
      },
      {
        headerId: "finishedat",
        headerLabel: "Finished at",
        id: `finishedAt.${s}`,
        value: n(l.finishedAt, "N/A"),
        className: "table-cell-1",
        hidden: i
      },
      {
        headerId: "duration",
        headerLabel: "Duration",
        id: `duration.${s}`,
        value: m(
          new Date(l.startedAt),
          l.state?.value !== c && new Date(l.finishedAt)
        ),
        className: "table-cell-1",
        type: "duration",
        hidden: i
      }
    ]
  };
}), te = (r, t, d) => r.map((e) => {
  const a = u(e, !0), i = J(e.labels), l = (s) => {
    if (t)
      return q(e.uid, s, e.name) ? `/projects/*/${o}/${v}/${t}/${e.uid}/${s.toLowerCase()}${window.location.search}` : "";
    {
      const p = g(
        window.location.search,
        !0,
        [U, C, b, I]
      );
      return `/projects/*/${o}/${v}/${e.name}${p}${p ? "&" : "?"}${`${I}=${e.project}`}`;
    }
  };
  return {
    data: {
      ...e,
      ui: {
        ...e.ui,
        identifier: u(e),
        identifierUnique: a
      }
    },
    content: [
      {
        headerId: t ? "uid" : "name",
        headerLabel: t ? "UID" : "Name",
        id: `name.${a}`,
        value: t ? e.uid || e.id : e.name,
        className: "table-cell-name",
        type: i === A && !d ? "hidden" : "link",
        getLink: l,
        showStatus: !0,
        showUid: !0,
        showDate: !0
      },
      {
        headerId: "projectName",
        headerLabel: "Project name",
        id: `projectName.${a}`,
        value: e.project,
        className: "table-cell-2"
      },
      {
        headerId: "type",
        headerLabel: "Type",
        id: `type.${a}`,
        value: i,
        className: "table-cell-1",
        type: "type",
        types: h
      },
      {
        headerId: "job.uid",
        id: `uid.${a}`,
        value: e.uid || e.id,
        className: "table-cell-1",
        type: "hidden"
      },
      {
        headerId: "startTime",
        headerLabel: "Start time",
        id: `startTime.${a}`,
        value: n(e.startTime),
        className: "table-cell-1"
      },
      {
        headerId: "duration",
        headerLabel: "Duration",
        id: `duration.${a}`,
        value: m(
          e.startTime || new Date(e.created_at),
          e.state?.value !== y && e.updated || e.state?.value !== c && new Date(e.finished_at)
        ),
        className: "table-cell-1",
        type: "duration"
      },
      {
        headerId: "owner",
        headerLabel: "Owner",
        id: `owner.${a}`,
        value: e.owner,
        className: "table-cell-1"
      },
      {
        headerId: "labels",
        headerLabel: "Labels",
        id: `labels.${a}`,
        value: e.labels,
        className: "table-cell-1",
        type: "labels"
      },
      {
        headerId: "parameters",
        headerLabel: "Parameters",
        id: `parameters.${a}`,
        value: e.parametersChips,
        className: "table-cell-1",
        type: "parameters"
      },
      {
        headerId: "updated",
        id: `updated.${a}`,
        value: e.updated || new Date(e.finished_at),
        className: "table-cell-1",
        type: "hidden"
      },
      {
        headerId: "attempts",
        headerLabel: "Attempts",
        id: `attempts.${a}`,
        value: `${e.retryCountWithInitialAttempt} out of ${e.maxRetriesWithInitialAttempt}`,
        className: "table-cell-1",
        tip: "Number of attempts to run Kubernetes jobs"
      }
    ]
  };
}), de = (r) => r.map((t) => {
  const d = u(t, !0), [, e, a, i] = t.lastRunUri?.match(/(.+)@(.+)#([^:]+)(?::(.+))?/) || [];
  return {
    data: {
      ...t,
      ui: {
        ...t.ui,
        identifier: u(t),
        identifierUnique: d
      }
    },
    content: [
      {
        headerId: "name",
        headerLabel: "Name",
        id: `name.${d}`,
        value: t.name,
        className: "table-cell-name",
        showStatus: !0,
        handleClick: () => $(E, {
          funcUri: t.func
        }),
        type: "link"
      },
      {
        headerId: "projectName",
        headerLabel: "Project name",
        id: `projectName.${d}`,
        value: t.project,
        className: "table-cell-2"
      },
      {
        headerId: "type",
        headerLabel: "Type",
        id: `type.${d}`,
        value: t.type,
        className: "table-cell-small",
        type: "type",
        types: h
      },
      {
        headerId: "nextrun",
        headerLabel: "Next run (Local TZ)",
        id: `nextRun.${d}`,
        value: n(t.nextRun),
        className: "table-cell-1",
        type: "date"
      },
      {
        headerId: "schedule",
        headerLabel: "Schedule (UTC)",
        id: `schedule.${d}`,
        value: t.scheduled_object?.schedule || null,
        className: "table-cell-1",
        tip: "The first day of the week (0) is Monday, and not Sunday."
      },
      {
        headerId: "labels",
        headerLabel: "Labels",
        id: `labels.${d}`,
        value: D(t.scheduled_object?.task.metadata.labels || {}),
        className: "table-cell-1",
        type: "labels"
      },
      {
        headerId: "lastrun",
        headerLabel: "Last run (Local TZ)",
        id: `lastRun.${d}`,
        value: n(t.startTime),
        className: "table-cell-1",
        handleClick: () => $(S, {
          jobData: {
            project: e,
            uid: a,
            iter: i
          }
        }),
        type: "link"
      },
      {
        headerId: "createdtime",
        headerLabel: "Created time (Local TZ)",
        id: `createdTime.${d}`,
        value: n(t.createdTime, "Not yet started"),
        className: "table-cell-1",
        type: "date"
      },
      {
        headerId: "function",
        id: `func.${d}`,
        value: t.func,
        className: "",
        type: "hidden"
      }
    ]
  };
}), le = (r, t, d) => r.map((e) => {
  const a = u(e, !0), i = e.name.replace(`${e.project}-`, "");
  return {
    data: {
      ...e,
      ui: {
        ...e.ui,
        identifier: u(e),
        identifierUnique: a
      }
    },
    content: [
      {
        headerId: "name",
        headerLabel: "Name",
        id: `name.${a}`,
        value: i,
        className: "table-cell-name",
        type: "link",
        getLink: (l) => k(e.project, e.id, null, l),
        showStatus: !0
      },
      {
        headerId: "projectName",
        headerLabel: "Project name",
        id: `projectName.${a}`,
        value: e.project,
        className: "table-cell-2"
      },
      {
        headerId: "uid",
        id: `uid.${a}`,
        value: e?.id,
        className: "table-cell-1",
        type: "hidden",
        hidden: d
      },
      {
        headerId: "createdat",
        headerLabel: "Created at",
        id: `createdAt.${a}`,
        value: n(e.created_at, "N/A"),
        className: "table-cell-1",
        hidden: d
      },
      {
        headerId: "finishedat",
        headerLabel: "Finished at",
        id: `finishedAt.${a}`,
        value: n(e.finished_at, "N/A"),
        className: "table-cell-1",
        hidden: d
      },
      {
        headerId: "duration",
        headerLabel: "Duration",
        id: `duration.${a}`,
        value: m(
          e.startTime || new Date(e.created_at),
          e.state?.value !== y && e.updated || e.state?.value !== c && new Date(e.finished_at)
        ),
        className: "table-cell-1",
        type: "duration",
        hidden: d
      },
      {
        headerId: "updated",
        id: `updated.${a}`,
        value: e.updated || new Date(e.finished_at),
        className: "table-cell-1",
        type: "hidden",
        hidden: d
      }
    ]
  };
});
export {
  G as J,
  ee as a,
  j as b,
  X as c,
  te as d,
  de as e,
  le as f,
  ae as g
};
//# sourceMappingURL=createJobsContent-DIc0KSEj.mjs.map
