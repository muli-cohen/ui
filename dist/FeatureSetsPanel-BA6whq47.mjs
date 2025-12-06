import { j as e, P as t, eS as it, eT as st, eU as nt, y as ie, bw as je, c as de, bT as Ge, bV as ye, p as Oe, eV as Lt, eW as Ht, eX as $t, eY as Bt, bu as Ue, bv as Me, eZ as Pe, e_ as Qe, e$ as ze, f0 as Ze, dR as se, e as ee, f1 as Kt, f2 as gt, cX as Wt, co as Yt, f3 as Gt, v as Qt, k as zt, f4 as Zt, bg as Jt, V as _t, f5 as Xt, a1 as ke, f6 as ea, f7 as Et, f8 as xt, f9 as ta, fa as rt, fb as aa, fc as lt, fd as Le, fe as ia, ff as sa, fg as X, cq as Ae, fh as na, fi as Ce, fj as ra, fk as Je, fl as te, fm as la, fn as oa, fo as ot, fp as R, fq as dt, fr as da, fs as k, ft as oe, fu as ca, fv as Se, fw as ua, fx as pa, fy as ha, fz as pe, fA as Z, m as fa, at as Tt, fB as bt, K as St, fC as ct, fD as ma, bO as ut, fE as ga, fF as _a, bQ as Ea, bS as xa, bR as Ta, fG as ba, i as Sa, fH as Ca, cF as ya, bJ as Ra, bK as ja, bL as Oa, bN as Pa, dj as Na, ev as qa, dk as va, fI as wa, fJ as Fa, eK as Aa, af as Da } from "./main-CTYpZ6Nf.mjs";
import * as pt from "react";
import qe, { useState as N, useEffect as L, useReducer as Ua, useCallback as ne, useMemo as Re, useRef as Ie, useLayoutEffect as ht } from "react";
import { useDispatch as re, useSelector as ue } from "react-redux";
import { useParams as Ma, useNavigate as ka } from "react-router-dom";
import { createPortal as Ia } from "react-dom";
import { D as Ke, T as Va, A as He } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { I as le } from "./Input-7Hc9IEQ_.mjs";
import { R as Ct, P as La } from "./PanelCredentialsAccessKey-DWWCIYth.mjs";
import { S as me } from "./add-CmKOUDFO.mjs";
import { S as Ha } from "./clock-BFaispYx.mjs";
import { _ as $a, R as Ba, I as Ka } from "./Table-DB12oa-o.mjs";
import { c as Wa, C as yt } from "./exclamation-mark-kRjYDG-V.mjs";
import { S as De, a as Ya } from "./search-CsL7YQlT.mjs";
import { S as We } from "./checkmark-328tzSAb.mjs";
import { C as he } from "./CheckBox-DBJrW14Y.mjs";
import { S as Ga } from "./nosql-C5IGoxHw.mjs";
const ve = ({ children: i = null, className: n = "", title: a }) => /* @__PURE__ */ e.jsxs("div", { className: `panel-section feature-set-panel__section ${n}`, children: [
  /* @__PURE__ */ e.jsx("div", { className: "panel-section__title", children: /* @__PURE__ */ e.jsx("h5", { children: a }) }),
  i && /* @__PURE__ */ e.jsx("div", { className: "panel-section__body", children: i })
] });
ve.propTypes = {
  children: t.node,
  className: t.string,
  title: t.string.isRequired
};
const Qa = "timeField", we = "startTime", ft = "endTime", Ne = "csv", Xe = "parquet", za = [
  { label: "CSV", id: Ne },
  { label: "PARQUET", id: Xe }
], Rt = ({ setValidation: i, validation: n }) => {
  const [a, o] = N({
    timeField: "",
    startTime: "",
    endTime: ""
  }), c = re(), p = ue((l) => l.featureStore);
  L(() => () => {
    o((l) => ({
      ...l,
      endTime: "",
      startTime: "",
      timeField: ""
    })), i((l) => ({
      ...l,
      isTimeFieldValid: !0,
      isStartTimeValid: !0,
      isEndTimeValid: !0
    })), c(it("")), c(st("")), c(nt(""));
  }, [c, i]);
  const m = (l) => {
    p.newFeatureSet.spec.source.time_field !== l.target.value && (c(it(l.target.value)), o((d) => ({
      ...d,
      timeField: l.target.value
    }))), a.endTime.length === 0 && a.startTime.length === 0 && a.timeField.length === 0 ? i((d) => ({
      ...d,
      isTimeFieldValid: !0,
      isStartTimeValid: !0,
      isEndTimeValid: !0
    })) : a.timeField.length > 0 && a.startTime.length > 0 ? i((d) => ({
      ...d,
      isEndTimeValid: !0
    })) : a.timeField.length > 0 && a.endTime.length > 0 && i((d) => ({
      ...d,
      isStartTimeValid: !0
    }));
  }, g = (l, d) => l && d ? l.toISOString() < d.toISOString() : !0, h = (l, d) => {
    const b = d === we ? st : nt;
    l[0] ? (c(b(l[0].toISOString())), i(d === we ? (_) => ({
      ..._,
      isEndTimeValid: !0,
      isStartTimeValid: g(l[0], a.endTime)
    }) : (_) => ({
      ..._,
      isEndTimeValid: g(a.startTime, l[0]),
      isStartTimeValid: !0
    }))) : (c(b("")), i((_) => ({
      ..._,
      isTimeFieldValid: !0,
      isStartTimeValid: !(d === we && a.endTime),
      isEndTimeValid: !(d === ft && a.startTime)
    }))), o((_) => ({
      ..._,
      [d]: l[0]
    }));
  };
  return /* @__PURE__ */ e.jsxs(ve, { title: "Filter Parameters", children: [
    /* @__PURE__ */ e.jsx("span", { className: "data-source__description", children: "Users can add the following parameters to filter the data." }),
    /* @__PURE__ */ e.jsxs("div", { className: "data-source__inputs-container", children: [
      /* @__PURE__ */ e.jsx(
        le,
        {
          floatingLabel: !0,
          invalid: !n.isTimeFieldValid,
          invalidText: "Timestamp key is invalid",
          label: "Timestamp column",
          onBlur: (l) => m(l),
          onChange: (l) => o((d) => ({
            ...d,
            [Qa]: l
          })),
          required: !!(a.timeField.length > 0 || a.startTime || a.endTime),
          requiredText: "Timestamp key is required",
          setInvalid: (l) => i((d) => ({
            ...d,
            isTimeFieldValid: l
          })),
          tip: "The field name for filtering the source data.",
          type: "text",
          value: a.timeField,
          wrapperClassName: "data-source__inputs-item"
        }
      ),
      /* @__PURE__ */ e.jsx(
        Ke,
        {
          className: "data-source__inputs-item",
          date: a.startTime,
          externalInvalid: !n.isStartTimeValid,
          externalInvalidMessage: "Start time is invalid",
          label: "Start time",
          onChange: (l) => h(l, we),
          required: !!((a.timeField || a.endTime) && !a.startTime),
          setExternalInvalid: (l) => i((d) => ({
            ...d,
            isStartTimeValid: l
          })),
          tip: "Filter data by start date >= value",
          type: "date-time"
        }
      ),
      /* @__PURE__ */ e.jsx(
        Ke,
        {
          className: "data-source__inputs-item",
          date: a.endTime,
          externalInvalid: !n.isEndTimeValid,
          externalInvalidMessage: "End time is invalid",
          label: "End time",
          onChange: (l) => h(l, ft),
          required: !!((a.timeField || a.startTime) && !a.endTime),
          setExternalInvalid: (l) => i((d) => ({
            ...d,
            isEndTimeValid: l
          })),
          tip: "Filter data by start date <= value",
          type: "date-time"
        }
      )
    ] })
  ] });
};
Rt.propTypes = {
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const Za = {
  scheduleRepeat: {
    activeOption: "minute",
    minute: 10,
    hour: 1,
    week: {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      time: "00:00"
    },
    day: {
      time: "00:00"
    },
    month: {
      time: "00:00"
    }
  },
  scheduleRepeatEnd: {
    activeOption: "never",
    occurrences: "1",
    date: ""
  }
}, v = {
  SCHEDULE_REPEAT_ACTIVE_OPTION: "SCHEDULE_REPEAT_ACTIVE_OPTION",
  SCHEDULE_REPEAT_DAY: "SCHEDULE_REPEAT_DAY",
  SCHEDULE_REPEAT_DAYS_OF_WEEK: "SCHEDULE_REPEAT_DAYS_OF_WEEK",
  SCHEDULE_REPEAT_END_ACTIVE_OPTION: "SCHEDULE_REPEAT_END_ACTIVE_OPTION",
  SCHEDULE_REPEAT_END_DATE: "SCHEDULE_REPEAT_END_DATE",
  SCHEDULE_REPEAT_DAY_TIME: "SCHEDULE_REPEAT_DAY_TIME",
  SCHEDULE_REPEAT_MONTH_TIME: "SCHEDULE_REPEAT_MONTH_TIME",
  SCHEDULE_REPEAT_END_OCCURRENCES: "SCHEDULE_REPEAT_END_OCCURRENCES",
  SCHEDULE_REPEAT_HOUR: "SCHEDULE_REPEAT_HOUR",
  SCHEDULE_REPEAT_MINUTE: "SCHEDULE_REPEAT_MINUTE",
  SCHEDULE_REPEAT_WEEK_TIME: "SCHEDULE_REPEAT_WEEK_TIME"
}, Ja = (i, n) => {
  switch (n.type) {
    case v.SCHEDULE_REPEAT_ACTIVE_OPTION:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          activeOption: n.payload
        }
      };
    case v.SCHEDULE_REPEAT_MINUTE:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          minute: n.payload
        }
      };
    case v.SCHEDULE_REPEAT_HOUR:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          hour: n.payload
        }
      };
    case v.SCHEDULE_REPEAT_DAY:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          day: n.payload
        }
      };
    case v.SCHEDULE_REPEAT_DAY_TIME:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          day: {
            time: n.payload
          }
        }
      };
    case v.SCHEDULE_REPEAT_DAYS_OF_WEEK:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          week: {
            ...i.scheduleRepeat.week,
            days: n.payload
          }
        }
      };
    case v.SCHEDULE_REPEAT_WEEK_TIME:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          week: {
            ...i.scheduleRepeat.week,
            time: n.payload
          }
        }
      };
    case v.SCHEDULE_REPEAT_MONTH_TIME:
      return {
        ...i,
        scheduleRepeat: {
          ...i.scheduleRepeat,
          month: {
            time: n.payload
          }
        }
      };
    case v.SCHEDULE_REPEAT_END_ACTIVE_OPTION:
      return {
        ...i,
        scheduleRepeatEnd: {
          ...i.scheduleRepeatEnd,
          activeOption: n.payload
        }
      };
    case v.SCHEDULE_REPEAT_END_OCCURRENCES:
      return {
        ...i,
        scheduleRepeatEnd: {
          ...i.scheduleRepeatEnd,
          occurrences: n.payload
        }
      };
    case v.SCHEDULE_REPEAT_END_DATE:
      return {
        ...i,
        scheduleRepeatEnd: {
          ...i.scheduleRepeatEnd,
          date: n.payload
        }
      };
    default:
      return i;
  }
}, Fe = {
  repeatInterval: [
    { label: "Minute", id: "minute" },
    { label: "Hourly", id: "hour" },
    { label: "Daily", id: "day" },
    { label: "Weekly", id: "week" },
    { label: "Monthly", id: "month" }
  ],
  repeatEnd: [
    { label: "Never", id: "never" },
    { label: "On date", id: "onDate" },
    { label: "After", id: "after" }
  ],
  minute: [
    { label: "10", id: "10" },
    { label: "15", id: "15" },
    { label: "20", id: "20" },
    { label: "30", id: "30" }
  ],
  hour: [
    { label: "1", id: "1" },
    { label: "2", id: "2" },
    { label: "3", id: "3" },
    { label: "4", id: "4" },
    { label: "6", id: "6" },
    { label: "12", id: "12" }
  ]
}, jt = ({ daysOfWeek: i, handleDaysOfWeek: n, recurringDispatch: a, recurringState: o }) => {
  const {
    scheduleRepeat: { activeOption: c, week: p },
    scheduleRepeatEnd: { activeOption: m, occurrences: g, date: h }
  } = o, l = (d, b) => {
    const _ = c;
    a({
      type: _ === "minute" ? v.SCHEDULE_REPEAT_MINUTE : _ === "hour" ? v.SCHEDULE_REPEAT_HOUR : null,
      payload: parseInt(d)
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "recurring-container", children: [
    /* @__PURE__ */ e.jsxs("p", { children: [
      "Note: all times are interpreted in UTC timezone. ",
      /* @__PURE__ */ e.jsx("br", {}),
      "The first day of the week (0) is ",
      /* @__PURE__ */ e.jsx("b", { children: "Monday" }),
      ", and not Sunday."
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "repeat_container", children: [
      /* @__PURE__ */ e.jsx(
        me,
        {
          density: "chunky",
          onClick: (d) => {
            a({
              type: v.SCHEDULE_REPEAT_ACTIVE_OPTION,
              payload: d
            });
          },
          options: Fe.repeatInterval,
          selectedId: c
        }
      ),
      c === "week" && /* @__PURE__ */ e.jsx("div", { className: "schedule-repeat schedule-repeat-week", children: i.map((d) => /* @__PURE__ */ e.jsx(
        "span",
        {
          className: `schedule-repeat-week_day ${p.days.includes(d.id) && "active"}`,
          onClick: () => n(d.id),
          children: d.label
        },
        d.id
      )) }),
      ["minute", "hour"].includes(c) && /* @__PURE__ */ e.jsx("div", { className: "schedule-repeat", children: /* @__PURE__ */ e.jsx(
        me,
        {
          density: "chunky",
          label: "Every",
          onClick: (d) => l(d),
          options: Fe[c],
          selectedId: Fe[c].find(
            (d) => d.id === o.scheduleRepeat[c].toString()
          )?.id
        }
      ) }),
      /* @__PURE__ */ e.jsx("span", { className: "schedule-repeat-text", children: c === "minute" ? "minutes" : c === "hour" ? "hours at minute 0 past the hour" : c === "month" ? "on the 1st day in every month at" : "at" }),
      ["day", "month", "week"].includes(c) && /* @__PURE__ */ e.jsx(
        Va,
        {
          hideLabel: !0,
          value: o.scheduleRepeat[c].time,
          onChange: (d) => {
            a({
              type: c === "week" ? v.SCHEDULE_REPEAT_WEEK_TIME : c === "day" ? v.SCHEDULE_REPEAT_DAY_TIME : v.SCHEDULE_REPEAT_MONTH_TIME,
              payload: d
            });
          }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "repeat_end_container", children: [
      /* @__PURE__ */ e.jsx(
        me,
        {
          density: "chunky",
          onClick: (d) => a({
            type: v.SCHEDULE_REPEAT_END_ACTIVE_OPTION,
            payload: d
          }),
          options: Fe.repeatEnd,
          selectedId: m
        }
      ),
      m === "onDate" && /* @__PURE__ */ e.jsx(
        Ke,
        {
          date: h,
          onChange: (d) => a({
            type: v.SCHEDULE_REPEAT_END_DATE,
            payload: d
          })
        }
      ),
      m === "after" && /* @__PURE__ */ e.jsx(
        Ct,
        {
          labelType: "infoLabel",
          label: g.length < 10 ? "occurrences" : "",
          onChange: (d) => a({
            type: v.SCHEDULE_REPEAT_END_OCCURRENCES,
            payload: d.toString()
          }),
          value: g.toString()
        }
      )
    ] })
  ] });
};
jt.propTypes = {
  daysOfWeek: t.array.isRequired,
  handleDaysOfWeek: t.func.isRequired,
  recurringDispatch: t.func.isRequired,
  recurringState: t.object.isRequired
};
const Xa = qe.memo(jt), Ot = ({
  daysOfWeek: i,
  handleDaysOfWeek: n,
  recurringDispatch: a,
  recurringState: o
}) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
  Xa,
  {
    daysOfWeek: i,
    handleDaysOfWeek: n,
    recurringDispatch: a,
    recurringState: o
  }
) });
Ot.propTypes = {
  daysOfWeek: t.arrayOf(t.object).isRequired,
  handleDaysOfWeek: t.func.isRequired,
  recurringDispatch: t.func.isRequired,
  recurringState: t.object.isRequired
};
const Pt = ({ cron: i, setCron: n }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsxs("p", { children: [
    "Note: all times are interpreted in UTC timezone. ",
    /* @__PURE__ */ e.jsx("br", {}),
    "The first day of the week (0) is ",
    /* @__PURE__ */ e.jsx("b", { children: "Monday" }),
    ", and not Sunday."
  ] }),
  /* @__PURE__ */ e.jsx(
    le,
    {
      placeholder: "10 * * * *",
      value: i,
      className: "cron-string",
      onChange: n,
      type: "text"
    }
  ),
  /* @__PURE__ */ e.jsxs("div", { children: [
    "You can use",
    " ",
    /* @__PURE__ */ e.jsx(
      "a",
      {
        className: "link cron-link",
        rel: "noopener noreferrer",
        target: "_blank",
        href: "https://www.freeformatter.com/cron-expression-generator-quartz.html",
        children: "this external website"
      }
    ),
    " ",
    "to generate cronstring"
  ] })
] });
Pt.propTypes = {
  cron: t.string.isRequired,
  setCron: t.func.isRequired
};
const fe = [
  { label: "Simple", id: "simple" },
  { label: "Cronstring", id: "cronstring" }
], Nt = ({
  activeTab: i,
  cron: n,
  daysOfWeek: a,
  handleDaysOfWeek: o,
  isWeekDaysEmpty: c,
  onSchedule: p,
  recurringDispatch: m,
  recurringState: g,
  setActiveTab: h,
  setCron: l,
  setShowSchedule: d
}) => /* @__PURE__ */ e.jsxs("div", { className: "schedule feature-set-panel__schedule", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "schedule-title", children: [
    /* @__PURE__ */ e.jsx("span", { children: "Schedule" }),
    /* @__PURE__ */ e.jsx(
      ie,
      {
        onClick: () => d(!1),
        tooltipText: "Close",
        className: "schedule-title__icon",
        children: /* @__PURE__ */ e.jsx(je, {})
      }
    )
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "schedule-tabs", children: fe.map((b) => {
    const _ = de(
      "schedule-tabs__item",
      i === b.id && "schedule-tabs__item_active"
    );
    return /* @__PURE__ */ e.jsx("div", { className: _, onClick: () => h(b.id), children: b.label }, b.id);
  }) }),
  /* @__PURE__ */ e.jsxs("div", { className: "schedule-content", children: [
    /* @__PURE__ */ e.jsxs("h3", { children: [
      i === fe[0].id ? "Simple " : "Advanced ",
      "Schedule"
    ] }),
    i === fe[0].id && /* @__PURE__ */ e.jsx(
      Ot,
      {
        daysOfWeek: a,
        handleDaysOfWeek: o,
        recurringDispatch: m,
        recurringState: g
      }
    ),
    i === fe[1].id && /* @__PURE__ */ e.jsx(Pt, { cron: n, setCron: l }),
    c && /* @__PURE__ */ e.jsx(Ge, { message: "Must select at least one day option" })
  ] }),
  /* @__PURE__ */ e.jsx(
    ye,
    {
      variant: Oe,
      label: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(Ha, {}),
        /* @__PURE__ */ e.jsx("span", { children: "Schedule " })
      ] }),
      onClick: p,
      className: "btn__schedule",
      disabled: c
    }
  )
] });
Nt.propTypes = {
  activeTab: t.string.isRequired,
  cron: t.string.isRequired,
  daysOfWeek: t.arrayOf(t.object).isRequired,
  isWeekDaysEmpty: t.bool.isRequired,
  handleDaysOfWeek: t.func.isRequired,
  onSchedule: t.func.isRequired,
  recurringDispatch: t.func.isRequired,
  recurringState: t.object.isRequired,
  setActiveTab: t.func.isRequired,
  setCron: t.func.isRequired,
  setShowSchedule: t.func.isRequired
};
const ei = (i, n) => {
  let a = i.split(" ");
  if (a[4] !== "*") {
    const o = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    n({
      type: v.SCHEDULE_REPEAT_ACTIVE_OPTION,
      payload: "week"
    }), n({
      type: v.SCHEDULE_REPEAT_DAYS_OF_WEEK,
      payload: a[4].split(",").map((c) => o[c])
    }), n({
      type: v.SCHEDULE_REPEAT_WEEK_TIME,
      payload: `${a[1] >= 10 ? a[1] : `0${a[1]}`}:${a[0] >= 10 ? a[0] : `0${a[0]}`}`
    });
  } else a[2] !== "*" ? (n({
    type: v.SCHEDULE_REPEAT_ACTIVE_OPTION,
    payload: "month"
  }), n({
    type: v.SCHEDULE_REPEAT_MONTH_TIME,
    payload: `${a[1] >= 10 ? a[1] : `0${a[1]}`}:${a[0] >= 10 ? a[0] : `0${a[0]}`}`
  })) : a[1] !== "*" && a[1].match("/") ? (n({
    type: v.SCHEDULE_REPEAT_ACTIVE_OPTION,
    payload: "hour"
  }), n({
    type: v.SCHEDULE_REPEAT_MINUTE,
    payload: 0
  }), n({
    type: v.SCHEDULE_REPEAT_HOUR,
    payload: Number(a[1].replace(/.*\*\//g, ""))
  })) : a[1] !== "*" ? (n({
    type: v.SCHEDULE_REPEAT_ACTIVE_OPTION,
    payload: "day"
  }), n({
    type: v.SCHEDULE_REPEAT_DAY_TIME,
    payload: `${a[1] >= 10 ? a[1] : `0${a[1]}`}:${a[0] >= 10 ? a[0] : `0${a[0]}`}`
  })) : (n({
    type: v.SCHEDULE_REPEAT_ACTIVE_OPTION,
    payload: "minute"
  }), n({
    type: v.SCHEDULE_REPEAT_MINUTE,
    payload: Number(a[0].replace(/.*\*\//g, ""))
  }));
}, qt = ({ defaultCron: i = "", setNewFeatureSetSchedule: n, setShowSchedule: a }) => {
  const [o, c] = N(fe[0].id), [p, m] = N("10 * * * *"), [g, h] = Ua(Ja, Za), l = Lt(Ht(navigator.language)), d = $t(l), b = (y) => {
    const {
      scheduleRepeat: { week: E }
    } = g;
    let q = E.days;
    q = E.days.includes(y) ? q.filter((S) => S !== y) : [...E.days, y];
    let w = d.filter((S) => q.includes(S.id)).map((S) => (S.index + 6) % 7).sort().join(",");
    w = w || "*";
    const { hour: F, minute: P } = Bt(
      g.scheduleRepeat[g.scheduleRepeat.activeOption].time
    );
    m(`${P} ${F} * * ${w}`), h({
      type: v.SCHEDULE_REPEAT_DAYS_OF_WEEK,
      payload: q
    });
  }, _ = ne(() => {
    a(!1), n(p);
  }, [p, n, a]), x = Re(() => o === fe[0].id && g.scheduleRepeat.activeOption === "week" && g.scheduleRepeat.week.days.length === 0, [
    o,
    g.scheduleRepeat.activeOption,
    g.scheduleRepeat.week.days.length
  ]);
  return L(() => {
    o === fe[0].id && $a(
      g.scheduleRepeat.activeOption,
      p,
      g.scheduleRepeat,
      d,
      m
    );
  }, [o, p, d, g.scheduleRepeat]), L(() => {
    i && ei(i, h);
  }, [i]), /* @__PURE__ */ e.jsx(
    Nt,
    {
      activeTab: o,
      cron: p,
      daysOfWeek: d,
      handleDaysOfWeek: b,
      isWeekDaysEmpty: x,
      onSchedule: _,
      recurringDispatch: h,
      recurringState: g,
      setActiveTab: c,
      setCron: m,
      setShowSchedule: a
    }
  );
};
qt.propTypes = {
  defaultCron: t.string,
  setNewFeatureSetSchedule: t.func.isRequired,
  setShowSchedule: t.func.isRequired
};
const et = qe.forwardRef(
  ({
    comboboxClassName: i,
    disabled: n,
    dropdownList: a,
    dropdownStyle: o,
    handleIconClick: c,
    handleInputOnChange: p,
    handleMatchesOptionClick: m,
    handleSelectOptionOnClick: g,
    hideSearchInput: h,
    inputOnFocus: l,
    inputPlaceholder: d,
    inputValue: b,
    invalidText: _,
    isInvalid: x,
    matchesSearchOnChange: y,
    required: E,
    requiredText: q,
    searchIsFocused: w,
    selectDropdownList: F,
    selectPlaceholder: P,
    selectValue: S,
    setSearchIsFocused: j,
    showMatchesDropdown: C,
    showSelectDropdown: O
  }, U) => {
    const M = de(
      i,
      "combobox",
      x && !n && "combobox_invalid",
      n && "combobox_disabled"
    ), J = de(O && "combobox-icon_open", "combobox-icon"), H = de(
      "combobox-select",
      O && "combobox-select_open",
      S.id.length <= 5 && S.id.length !== 0 && "combobox-select_short"
    ), G = de(
      "combobox-dropdown",
      C && (a.length > 0 || w) && "combobox-dropdown_visible"
    ), { comboboxRef: Q, inputRef: W } = U;
    return /* @__PURE__ */ e.jsxs("div", { className: M, ref: Q, children: [
      /* @__PURE__ */ e.jsx(De, { className: J, onClick: c }),
      /* @__PURE__ */ e.jsxs("div", { className: H, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "combobox-select__header", onClick: c, children: [
          /* @__PURE__ */ e.jsx("span", { className: `${S.className}`, children: S.id }),
          S.id.length === 0 && /* @__PURE__ */ e.jsxs("span", { className: "combobox-select__header-label", children: [
            P,
            E && /* @__PURE__ */ e.jsx("span", { className: "combobox-select__header-label_mandatory", children: "*" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "combobox-select__body", children: /* @__PURE__ */ e.jsx("ul", { className: "combobox-select__body-list combobox-list", children: F.map((I) => /* @__PURE__ */ e.jsx(
          "li",
          {
            className: `combobox-list__option ${I.className}`,
            onClick: () => g(I),
            children: I.label
          },
          I.id
        )) }) })
      ] }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "combobox-input",
          disabled: S.id.length === 0 || n,
          onChange: p,
          onFocus: l,
          placeholder: d,
          ref: W,
          type: "text",
          value: b
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: G,
          style: {
            ...o
          },
          children: [
            !h && /* @__PURE__ */ e.jsxs("div", { className: "combobox-dropdown__search", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  className: "combobox-dropdown__search-input input border-none",
                  onChange: (I) => y(I),
                  onFocus: () => j(!0),
                  placeholder: "Type to search",
                  type: "text"
                }
              ),
              /* @__PURE__ */ e.jsx(Ya, {})
            ] }),
            /* @__PURE__ */ e.jsx("ul", { className: "combobox-dropdown__list combobox-list", children: w && a.length === 0 ? /* @__PURE__ */ e.jsx("li", { className: "combobox-list__option", children: "No data" }, "no data") : a.map((I) => /* @__PURE__ */ e.jsx(
              "li",
              {
                className: "combobox-list__option",
                onClick: () => m(I),
                children: I.label
              },
              I.id
            )) })
          ]
        }
      ),
      x && !n && /* @__PURE__ */ e.jsx(
        Ue,
        {
          className: "combobox-warning",
          template: /* @__PURE__ */ e.jsx(
            Me,
            {
              text: E && S.id.length === 0 ? q : _,
              warning: !0
            }
          ),
          children: /* @__PURE__ */ e.jsx(Wa, {})
        }
      )
    ] });
  }
);
et.displayName = "ComboboxView";
et.propTypes = {
  comboboxClassName: t.string.isRequired,
  disabled: t.bool,
  dropdownList: yt.isRequired,
  dropdownStyle: t.object.isRequired,
  handleIconClick: t.func.isRequired,
  handleInputOnChange: t.func.isRequired,
  handleMatchesOptionClick: t.func.isRequired,
  handleSelectOptionOnClick: t.func.isRequired,
  hideSearchInput: t.bool.isRequired,
  inputOnFocus: t.func.isRequired,
  inputPlaceholder: t.string.isRequired,
  inputValue: t.string.isRequired,
  invalidText: t.string.isRequired,
  isInvalid: t.bool.isRequired,
  matchesSearchOnChange: t.func.isRequired,
  required: t.bool.isRequired,
  requiredText: t.string.isRequired,
  searchIsFocused: t.bool.isRequired,
  selectDropdownList: t.arrayOf(t.object).isRequired,
  selectPlaceholder: t.string.isRequired,
  selectValue: t.object.isRequired,
  setSearchIsFocused: t.func.isRequired,
  showMatchesDropdown: t.bool.isRequired,
  showSelectDropdown: t.bool.isRequired
};
const vt = ({
  comboboxClassName: i = "",
  disabled: n = !1,
  hideSearchInput: a = !1,
  inputPlaceholder: o = "",
  inputDefaultValue: c = "",
  inputOnChange: p,
  invalid: m = !1,
  invalidText: g = "",
  matches: h,
  maxSuggestedMatches: l = 1,
  onBlur: d = null,
  onFocus: b = null,
  required: _ = !1,
  requiredText: x = "",
  selectDefaultValue: y = null,
  selectDropdownList: E,
  selectOnChange: q,
  selectPlaceholder: w = ""
}) => {
  const [F, P] = N(""), [S, j] = N({
    label: "",
    id: "",
    className: ""
  }), [C, O] = N({
    left: 0,
    paddingTop: "10px"
  }), [U, M] = N(!1), [J, H] = N(!1), [G, Q] = N(h), [W, I] = N(!1), [B, Y] = N(!1), z = Ie(), T = Ie();
  ht(() => {
    c.length > 0 && S.id.length > 0 && F.length === 0 && (P(c), p(c));
  }, [c, p, F.length, S.id.length]), ht(() => {
    y?.label.length > 0 && S.label.length === 0 && j(y);
  }, [y, S.label.length]), L(() => {
    W || JSON.stringify(G) !== JSON.stringify(h) && Q(h);
  }, [G, h, W]), L(() => {
    B !== m && Y(m);
  }, [m, B]);
  const A = ne(
    (V) => {
      z.current && !z.current.contains(V.target) && (U && (M(!1), S.id.length === 0 && _ && d && Y(!0), d && d(S.id, F)), J && (H(!1), F.length === 0 && _ && d && Y(!0), d && d(S.id, F)), W && I(!1));
    },
    [
      z,
      F,
      d,
      _,
      W,
      S.id,
      J,
      U
    ]
  );
  L(() => (window.addEventListener("click", A), () => {
    window.removeEventListener("click", A);
  }), [A]);
  const ge = (V) => {
    const K = F.split("/"), xe = K.length - 1;
    let D = V.customDelimiter ? K[xe].replace(new RegExp(`${V.customDelimiter}.*`), "") + V.id : V.id;
    K.length <= l - 1 && (D += "/"), K[xe] = D, W && I(!1), K.join("/") !== F && P(K.join("/")), H(!1), p(K.join("/")), T.current.focus();
  }, _e = (V) => {
    if (V.id === S.id)
      return M(!1);
    S.id.length > 0 && P(""), B && Y(!1), j(V), q(V.id), M(!1), T.current.disabled = !1, T.current.focus();
  }, Ee = () => {
    n || (J && H(!1), O({
      left: 0,
      paddingTop: "10px"
    }), M((V) => !V));
  }, Te = () => {
    b && b(), U && M(!1), H(!0);
  }, be = (V) => {
    const K = V.target;
    p(K.value), O({
      left: `${K.selectionStart < 30 ? K.selectionStart : 30}ch`,
      paddingTop: "10px"
    }), W && I(!1), P(K.value), G.length > 0 && H(!0);
  }, ce = (V) => {
    V.persist(), Q(
      () => h.filter((K) => K.id.startsWith(V.target.value))
    );
  };
  return /* @__PURE__ */ e.jsx(
    et,
    {
      comboboxClassName: i,
      disabled: n,
      dropdownList: G,
      dropdownStyle: C,
      handleIconClick: Ee,
      handleInputOnChange: be,
      handleMatchesOptionClick: ge,
      handleSelectOptionOnClick: _e,
      hideSearchInput: a,
      inputOnFocus: Te,
      inputPlaceholder: o,
      inputValue: F,
      invalidText: g,
      isInvalid: B,
      matchesSearchOnChange: ce,
      ref: {
        comboboxRef: z,
        inputRef: T
      },
      required: _,
      requiredText: x,
      searchIsFocused: W,
      selectDropdownList: E,
      selectPlaceholder: w,
      selectValue: S,
      setSearchIsFocused: I,
      showMatchesDropdown: J,
      showSelectDropdown: U
    }
  );
};
vt.propTypes = {
  comboboxClassName: t.string,
  disabled: t.bool,
  hideSearchInput: t.bool,
  inputDefaultValue: t.string,
  inputOnChange: t.func.isRequired,
  inputPlaceholder: t.string,
  invalid: t.bool,
  invalidText: t.string,
  matches: yt.isRequired,
  maxSuggestedMatches: t.number,
  onBlur: t.func,
  onFocus: t.func,
  required: t.bool,
  requiredText: t.string,
  selectDropdownList: t.arrayOf(t.object).isRequired,
  selectOnChange: t.func.isRequired,
  selectDefaultValue: t.object,
  selectPlaceholder: t.string
};
const ti = (i) => i ? {
  schema: i.includes("://") ? i.replace(/:\/\/.*$/g, "") : "",
  path: i.replace(/.*:\/\//g, "")
} : {
  schema: "",
  path: ""
}, ai = (i, n) => i.map((a) => ({
  label: a === n ? `${a} (Current project)` : a,
  id: a
})).sort((a, o) => a.id === n ? -1 : o.id === n ? 1 : a.id.localeCompare(o.id)), ii = (i) => {
  const n = i.map((a) => {
    const o = a.link_iteration?.db_key || a.db_key || a.key || "";
    return {
      label: o,
      id: o
    };
  }).filter((a) => a.label !== "").sort((a, o) => a.id.localeCompare(o.id));
  return ee.uniqBy(n, "id");
}, si = (i) => {
  const n = i.map((a) => {
    const o = Kt(a);
    return {
      label: o,
      id: o,
      customDelimiter: o[0]
    };
  }).filter((a) => a.label !== "").sort((a, o) => {
    const [c, p] = a.id.split("@"), [m, g] = o.id.split("@");
    return !p || !g || p === g ? c.localeCompare(m) : p.localeCompare(g);
  });
  return ee.uniqBy(n, "id");
}, ni = {
  [se]: "artifacts/my-project/my-artifact:my-tag",
  [Ze]: "bucket/path",
  [ze]: "bucket/path",
  [Qe]: "container/path",
  [Pe]: "container-name/file"
}, ri = (i) => {
  const a = {
    "feature-vectors": "feature-vector",
    artifacts: "artifact",
    datasets: "dataset",
    documents: "document",
    models: "model"
  }[i];
  return {
    [se]: `${a ? `${a}s` : "<artifact type>"}/<project>/${a ? `<${a} name>` : "<artifact name>"}:${a ? `<${a} tag>` : "<artifact tag>"}" or "${a ? `${a}s` : "<artifact type>"}/<project>/${a ? `<${a} name>` : "<artifact name>"}@${a ? `<${a} uid>` : "<artifact uid>"}`,
    [Ze]: "bucket/path",
    [ze]: "bucket/path",
    [Qe]: "container/path",
    [Pe]: "container-name/file"
  };
}, mt = "csv", $e = "URL", li = /^(dbfs):(\/\/\/|\/\/)(?!.*:\/\/)([\w\-._~:/?#[\]%@!$&'()*+,;=]+)$/i, oi = (i, n, a, o, c, p, m, g) => {
  if (g) {
    if (!o && Be.some((h) => h.id === i.projectItemType))
      return a.filter((h) => h.id.startsWith(i.project));
    if (c) {
      if (!p)
        return (m ?? []).filter((h) => h.id.startsWith(i.artifactReference));
    } else return (n ?? []).filter((h) => h.id.startsWith(i.artifact));
  } else return Be.some((h) => h.id.startsWith(i.projectItemType)) ? Be : [];
  return [];
}, wt = [
  {
    className: "path-type-store",
    label: "MLRun store",
    id: se
  },
  ...Wt() ? [] : [
    {
      className: "path-type-v3io",
      label: "V3IO",
      id: Pe
    }
  ],
  {
    className: "path-type-s3",
    label: "S3",
    id: Ze
  },
  {
    className: "path-type-az",
    label: "Azure storage",
    id: Qe
  },
  {
    className: "path-type-gs",
    label: "Google storage",
    id: ze
  },
  {
    className: "path-type-dbfs",
    label: "Databricks filesystem",
    id: gt
  }
], Be = [
  {
    label: "Artifacts",
    id: "artifacts"
  },
  {
    label: "Datasets",
    id: "datasets"
  },
  {
    label: "Documents",
    id: "documents"
  },
  {
    label: "Models",
    id: "models"
  }
], Ye = (i, n, a) => {
  const o = a === mt ? /^(artifacts|datasets|models|documents)\/(\S+?)\/(\S+?)(#(\S+?))?(:(\S+?))?(@(\S+))?(?<!\/)$/ : /^(artifacts|datasets|models|documents)\/(\S+?)\/(\S+?)(#(\S+?))?(:(\S+?))?(@(\S+))?$/, c = n?.trim().length > 0, p = c && /^[^\s]*\/[^\s]*$/.test(n);
  switch (i) {
    case se:
      return o.test(n);
    case gt:
      return c && li.test(`${i}${n}`);
    default:
      return a === mt ? p && !n.endsWith("/") : p;
  }
}, di = (i, n, a) => {
  i(Yt()).unwrap().then((o) => n(ai(o ?? [], a))).catch(() => {
  });
}, ci = (i, n, a, o) => {
  i(
    Gt({
      project: n,
      filters: null,
      config: {
        params: {
          category: a === "artifacts" ? Qt : a === "datasets" ? zt : a === "documents" ? Zt : Jt
        }
      }
    })
  ).unwrap().then((c) => {
    c?.length > 0 && o(ii(c ?? []));
  }).catch((c) => {
    _t(i, c, "", "Failed to fetch artifacts");
  });
}, ui = (i, n, a, o) => {
  i(Xt({ project: n, artifact: a })).unwrap().then((c) => {
    c.length > 0 && c[0].data && o(si(c[0].data ?? {}));
  }).catch((c) => {
    _t(i, c, "", "Failed to fetch artifact data");
  });
}, tt = ({
  comboboxSelectList: i,
  defaultPath: n = {
    kind: "",
    name: "",
    partitioned: "",
    path: ""
  },
  disabled: a = !1,
  handleUrlInputOnChange: o = () => {
  },
  handleUrlOnApply: c = () => {
  },
  handleUrlOnBlur: p = () => {
  },
  handleUrlOnDiscard: m = () => {
  },
  handleUrlOnEditModeChange: g = () => {
  },
  handleUrlOnFocus: h = () => {
  },
  handleUrlSelectOnChange: l = () => {
  },
  invalid: d = !1,
  previewClassName: b = "",
  withActionButtons: _ = !1
}) => {
  const [x, y] = N({
    artifact: "",
    artifactReference: "",
    path: "",
    pathType: "",
    placeholder: "",
    project: "",
    projectItemType: ""
  }), [E, q] = N([]), [w, F] = N([]), [P, S] = N([]), [j, C] = N([]), [O, U] = N(!1), [M, J] = N(!1), [H, G] = N(!1), [Q, W] = N(!1), [I, B] = N(""), [Y, z] = N({
    isActive: !1,
    savedUrlData: {
      artifact: "",
      artifactReference: "",
      path: "",
      pathType: "",
      placeholder: "",
      project: "",
      projectItemType: ""
    }
  }), T = re(), { projectName: A } = Ma();
  L(() => {
    if (n?.path.length > 0 && x?.path.length === 0 && I.length === 0 && !Y.isActive) {
      const { schema: D, path: $ } = ti(n.path), s = i.find((r) => r.id === `${D}://`) ?? i[0];
      y((r) => ({ ...r, pathType: s.id, path: $ })), B($);
    }
  }, [
    i,
    n.path,
    I,
    d,
    x.path,
    Y.isActive
  ]);
  const ge = ne(() => {
    di(T, F, A);
  }, [T, A]), _e = ne(() => {
    ci(T, x.project, x.projectItemType, S);
  }, [T, x.project, x.projectItemType]), Ee = ne(() => {
    ui(T, x.project, x.artifact, C);
  }, [T, x.artifact, x.project]);
  L(() => {
    x.pathType === se && O && w.length === 0 && ge();
  }, [ge, w.length, x.pathType, O]), L(() => {
    O && M && P.length === 0 && _e();
  }, [P.length, _e, O, M]), L(() => {
    O && M && H && j.length === 0 && Ee();
  }, [
    j.length,
    Ee,
    H,
    O,
    M
  ]), L(() => {
    x.pathType === se && q(
      oi(
        x,
        P,
        w,
        M,
        H,
        Q,
        j,
        O
      )
    );
  }, [
    P,
    j,
    x,
    A,
    w,
    H,
    Q,
    O,
    M
  ]), L(() => {
    _ && g(Y.isActive);
  }, [Y.isActive, _, g]), L(() => {
    _ && d && z((D) => ({
      ...D,
      isActive: !0
    }));
  }, [d, _, z]);
  const Te = Re(() => {
    const D = ri(x.projectItemType);
    return D[x.pathType] ? `Field must be in "${D[x.pathType]}" format` : "The field is invalid";
  }, [x.pathType, x.projectItemType]), be = (D) => {
    y(($) => ({
      ...$,
      placeholder: ni[D] || "",
      path: "",
      pathType: D,
      project: "",
      artifact: "",
      artifactReference: "",
      projectItemType: "artifacts"
    })), U(!1), J(!1), G(!1), W(!1), l(D);
  }, ce = (D) => {
    if (x.pathType === se) {
      const $ = D.split("/"), [s, r] = ea($[2]);
      ee.isNil($[2]) && P.length > 0 && S([]), !r && j.length > 0 && C([]), y((u) => ({
        ...u,
        path: D,
        projectItemType: $[0],
        project: $[1] ?? "",
        artifact: s ?? "",
        artifactReference: r ?? ""
      })), U(typeof $[1] == "string"), J(typeof $[2] == "string"), G(P.some((u) => u.id === s)), W(
        j.some((u) => u.id === r)
      );
    } else
      y(($) => ({
        ...$,
        path: D
      }));
    o(D);
  }, V = () => {
    const D = c({
      selectValue: x.pathType,
      inputValue: x.path,
      urlData: x
    });
    (D || ee.isNil(D)) && z(($) => ({
      ...$,
      isActive: !1
    }));
  }, K = () => {
    y(Y.savedUrlData), z((D) => ({
      ...D,
      isActive: !1
    })), m();
  }, xe = () => {
    z({
      isActive: !0,
      savedUrlData: x
    });
  };
  return !Y.isActive && _ ? /* @__PURE__ */ e.jsxs("div", { className: de("url-path url-path-preview", b), children: [
    /* @__PURE__ */ e.jsxs(
      Ue,
      {
        className: de("url-path-preview__text", a && "url-path-preview__disabled"),
        template: /* @__PURE__ */ e.jsx(Me, { text: `${`${x.pathType}${x.path}` || $e}` }),
        children: [
          /* @__PURE__ */ e.jsx("span", { children: `${x.pathType}${x.path}` }),
          (ee.isEmpty(x.pathType) || ee.isEmpty(x.path)) && /* @__PURE__ */ e.jsxs("span", { children: [
            $e,
            /* @__PURE__ */ e.jsx("span", { className: "url-path-preview__required", children: "*" })
          ] })
        ]
      }
    ),
    !a && /* @__PURE__ */ e.jsx("div", { className: "url-path-preview__actions", children: /* @__PURE__ */ e.jsx(ie, { onClick: xe, tooltipText: "Edit", children: /* @__PURE__ */ e.jsx(ke, {}) }) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "url-path", children: [
    /* @__PURE__ */ e.jsx(
      vt,
      {
        comboboxClassName: "url",
        disabled: a,
        hideSearchInput: !O,
        inputDefaultValue: x.pathType === se && !x.path ? x.projectItemType : x.path,
        inputOnChange: ce,
        inputPlaceholder: x.placeholder,
        invalid: d,
        invalidText: Te,
        matches: x.pathType === se ? E : [],
        maxSuggestedMatches: 3,
        onBlur: _ ? null : (D, $) => p({ selectValue: D, inputValue: $, urlData: x }),
        onFocus: h,
        required: !0,
        requiredText: "This field is required",
        selectDefaultValue: i.find((D) => D.id === x.pathType),
        selectDropdownList: i,
        selectOnChange: be,
        selectPlaceholder: $e
      }
    ),
    _ && /* @__PURE__ */ e.jsxs("div", { className: "url-path-actions", children: [
      /* @__PURE__ */ e.jsx(ie, { onClick: V, tooltipText: "Apply", disabled: d, children: /* @__PURE__ */ e.jsx(We, { className: "url-path-actions__apply-btn" }) }),
      /* @__PURE__ */ e.jsx(
        ie,
        {
          onClick: K,
          tooltipText: "Discard changes",
          disabled: ee.isEmpty(Y.savedUrlData.pathType),
          children: /* @__PURE__ */ e.jsx(je, {})
        }
      )
    ] })
  ] });
};
tt.propTypes = {
  comboboxSelectList: t.array.isRequired,
  defaultPath: t.shape({
    kind: t.string,
    name: t.string,
    partitioned: t.oneOfType([t.string, t.bool]),
    path: t.string
  }),
  disabled: t.bool,
  handleUrlInputOnChange: t.func,
  handleUrlOnApply: t.func,
  handleUrlOnBlur: t.func,
  handleUrlOnDiscard: t.func,
  handleUrlOnEditModeChange: t.func,
  handleUrlOnFocus: t.func,
  handleUrlSelectOnChange: t.func,
  invalid: t.bool,
  previewClassName: t.string,
  withActionButtons: t.bool
};
const Ft = ({
  data: i,
  featureStore: n,
  handleKindOnChange: a,
  handleUrlInputOnChange: o,
  handleUrlOnApply: c,
  handleUrlOnDiscard: p,
  handleUrlOnEditModeChange: m,
  handleUrlSelectOnChange: g = null,
  setData: h,
  setShowSchedule: l,
  setValidation: d,
  showSchedule: b,
  validation: _
}) => {
  const x = re();
  return /* @__PURE__ */ e.jsx("div", { className: "feature-set-panel__item new-item-side-panel__item data-source", children: /* @__PURE__ */ e.jsxs(ve, { title: "Data Source", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "data-source__inputs", children: [
      /* @__PURE__ */ e.jsx(
        me,
        {
          className: "data-source__inputs-item",
          density: "medium",
          floatingLabel: !0,
          label: "Kind",
          onClick: a,
          options: za,
          selectedId: i.kind
        }
      ),
      /* @__PURE__ */ e.jsx(
        tt,
        {
          comboboxSelectList: wt,
          handleUrlInputOnChange: o,
          handleUrlOnApply: c,
          handleUrlOnDiscard: p,
          handleUrlOnEditModeChange: m,
          handleUrlSelectOnChange: g,
          invalid: !_.isUrlValid,
          previewClassName: "data-source",
          withActionButtons: !0
        }
      )
    ] }),
    i.kind !== Ne && /* @__PURE__ */ e.jsxs("div", { className: "schedule-content", children: [
      /* @__PURE__ */ e.jsx(
        ye,
        {
          className: "schedule-tumbler",
          label: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            i.schedule ? "View schedule" : "Set schedule",
            /* @__PURE__ */ e.jsx(ke, { className: "schedule-tumbler__icon" })
          ] }),
          onClick: () => l((y) => !y),
          variant: Oe
        }
      ),
      b && /* @__PURE__ */ e.jsx(
        qt,
        {
          defaultCron: i.schedule,
          setNewFeatureSetSchedule: (y) => {
            x(Et(y)), h((E) => ({ ...E, schedule: y }));
          },
          setShowSchedule: l
        }
      )
    ] }),
    i.kind === Ne && /* @__PURE__ */ e.jsx(
      le,
      {
        className: "data-source__inputs-item",
        floatingLabel: !0,
        invalid: !_.isParseDatesValid,
        label: "Parse Dates",
        onBlur: (y) => {
          n.newFeatureSet.spec.source.parse_dates !== y.target.value && x(xt(y.target.value));
        },
        onChange: (y) => h((E) => ({
          ...E,
          parseDates: y
        })),
        placeholder: "col_name1,col_name2,...",
        setInvalid: (y) => d((E) => ({ ...E, isParseDatesValid: y })),
        type: "text"
      }
    ),
    i.kind === Xe && /* @__PURE__ */ e.jsx(Rt, { setValidation: d, validation: _ })
  ] }) });
};
Ft.propTypes = {
  data: t.object.isRequired,
  featureStore: t.object.isRequired,
  handleKindOnChange: t.func.isRequired,
  handleUrlInputOnChange: t.func.isRequired,
  handleUrlOnApply: t.func.isRequired,
  handleUrlOnDiscard: t.func.isRequired,
  handleUrlOnEditModeChange: t.func.isRequired,
  handleUrlSelectOnChange: t.func,
  setData: t.func.isRequired,
  setShowSchedule: t.func.isRequired,
  setValidation: t.func.isRequired,
  showSchedule: t.bool.isRequired,
  validation: t.object.isRequired
};
const At = ({ setDisableButtons: i, setValidation: n, validation: a }) => {
  const [o, c] = N({
    attributes: [],
    kind: Ne,
    parseDates: "",
    url: {
      pathType: "",
      path: "",
      fullPath: ""
    },
    schedule: ""
  }), [p, m] = N(!1), g = re(), h = ue((E) => E.featureStore), l = ne(
    (E) => {
      const q = o.url.pathType === se ? o.url.fullPath.replace(/.*:\/\//g, "") : o.url.path;
      E === Ne ? (g(Et("")), n((w) => ({
        ...w,
        isUrlValid: q.length > 0 ? Ye(o.url.pathType, q, E) : !0
      }))) : E === Xe && (g(xt("")), n((w) => ({
        ...w,
        isUrlValid: !0
      }))), g(ta(E)), c((w) => ({
        ...w,
        kind: E,
        parseDates: "",
        schedule: ""
      }));
    },
    [o.url.pathType, o.url.fullPath, o.url.path, g, n]
  ), d = () => {
    n((E) => ({
      ...E,
      isUrlValid: !0
    })), g(rt(""));
  }, b = ({ selectValue: E, inputValue: q, urlData: w }) => {
    let F = !0;
    return Ye(E, q, o.kind) ? (a.isUrlValid || n((P) => ({
      ...P,
      isUrlValid: !0
    })), g(rt(`${E}${q}`)), c((P) => ({
      ...P,
      url: {
        ...P.url,
        ...w,
        fullPath: `${E}${q}`
      }
    }))) : (n((P) => ({
      ...P,
      isUrlValid: !1
    })), F = !1), F;
  }, _ = () => {
    n((E) => ({
      ...E,
      isUrlValid: !0
    }));
  }, x = ne(
    (E) => {
      i((q) => ({
        ...q,
        isUrlEditModeClosed: !E
      }));
    },
    [i]
  ), y = (E) => {
    n((q) => ({
      ...q,
      isUrlValid: !ee.isEmpty(E)
    }));
  };
  return /* @__PURE__ */ e.jsx(
    Ft,
    {
      data: o,
      featureStore: h,
      handleKindOnChange: l,
      handleUrlInputOnChange: y,
      handleUrlOnApply: b,
      handleUrlOnDiscard: _,
      handleUrlOnEditModeChange: x,
      handleUrlSelectOnChange: d,
      setData: c,
      setShowSchedule: m,
      setValidation: n,
      showSchedule: p,
      validation: a
    }
  );
};
At.propTypes = {
  setDisableButtons: t.func.isRequired,
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const Dt = ({
  data: i,
  featureStore: n,
  handleEntitiesOnBlur: a,
  handleEntitiesOnChange: o,
  setData: c,
  setValidation: p,
  validation: m
}) => {
  const g = re();
  return /* @__PURE__ */ e.jsx("div", { className: "feature-set-panel__item new-item-side-panel__item schema", children: /* @__PURE__ */ e.jsxs(ve, { title: "Schema", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "schema__description", children: [
      /* @__PURE__ */ e.jsx("span", { children: "Each feature set must be associated with one or more index column. When joining feature sets, the entity is used as the key column." }),
      /* @__PURE__ */ e.jsxs("span", { children: [
        " ",
        /* @__PURE__ */ e.jsx(
          "a",
          {
            className: "link",
            href: "https://docs.mlrun.org/en/latest/feature-store/feature-sets.html",
            target: "_blank",
            rel: "noreferrer",
            children: "Read more"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "schema__inputs", children: [
      /* @__PURE__ */ e.jsx(
        le,
        {
          floatingLabel: !0,
          invalid: !m.isEntitiesValid,
          label: "Entities (comma separated)",
          onBlur: a,
          onChange: o,
          placeholder: "entity1,entity2,entity3",
          required: !0,
          requiredText: "This field is required",
          setInvalid: (h) => p((l) => ({
            ...l,
            isEntitiesValid: h
          })),
          type: "text",
          value: i.entities
        }
      ),
      /* @__PURE__ */ e.jsx(
        le,
        {
          floatingLabel: !0,
          invalid: !m.isTimestampKeyValid,
          label: "Timestamp key",
          onChange: (h) => c((l) => ({ ...l, timestamp_key: h })),
          onBlur: (h) => {
            n.newFeatureSet.spec.timestamp_key !== h.target.value && g(aa(h.target.value));
          },
          required: n.newFeatureSet.spec.targets.some(
            (h) => !!h.time_partitioning_granularity
          ),
          requiredText: "Timestamp Key is required for offline target when partitioning by time is enabled - see the Target Store section.",
          setInvalid: (h) => p((l) => ({
            ...l,
            isTimestampKeyValid: h
          })),
          tip: "Used for specifying the time field when joining by time",
          type: "text"
        }
      )
    ] })
  ] }) });
};
Dt.propTypes = {
  data: t.object.isRequired,
  featureStore: t.object.isRequired,
  handleEntitiesOnBlur: t.func.isRequired,
  handleEntitiesOnChange: t.func.isRequired,
  setData: t.func.isRequired,
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const Ut = ({ setValidation: i, validation: n }) => {
  const [a, o] = N({
    entities: "",
    timestamp_key: ""
  }), c = re(), p = ue((h) => h.featureStore), m = () => {
    const h = a.entities.trim().split(",").map((l) => ({
      name: l.trim(),
      value_type: "str"
    })).filter((l) => l.name);
    a.entities.length > 0 && JSON.stringify(h) !== JSON.stringify(p.newFeatureSet.spec.entities) ? (c(lt(h)), i((l) => ({
      ...l,
      isEntitiesValid: !0
    }))) : a.entities.length === 0 && p.newFeatureSet.spec.entities.length > 0 && c(lt([]));
  }, g = (h) => {
    !n.isEntitiesValid && h.length > 0 && i((l) => ({
      ...l,
      isEntitiesValid: !0
    })), o((l) => ({
      ...l,
      entities: h
    }));
  };
  return /* @__PURE__ */ e.jsx(
    Dt,
    {
      data: a,
      featureStore: p,
      handleEntitiesOnBlur: m,
      handleEntitiesOnChange: g,
      setData: o,
      setValidation: i,
      validation: n
    }
  );
};
Ut.propTypes = {
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const Ve = qe.forwardRef(
  ({
    data: i,
    handlePartitionRadioButtonClick: n,
    partitionColsOnBlur: a,
    partitionColsOnChange: o,
    partitionRadioButtonsState: c,
    rangeOnChange: p,
    selectedPartitionKind: m,
    setPartitionColumnsValidation: g,
    timePartitioningGranularityChange: h,
    triggerPartitionAdvancedCheckboxes: l,
    validation: d
  }, b) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "partition-fields__checkbox-container", ref: b, children: Object.keys(Le).map((_, x) => /* @__PURE__ */ e.jsx(
      he,
      {
        item: { id: _, label: Le[_].label },
        onChange: (y) => l(y),
        selectedId: m.find(
          (y) => Le[_].id === y
        )
      },
      x
    )) }),
    m.includes("byKey") && /* @__PURE__ */ e.jsx("div", { className: "radio-buttons-container", children: /* @__PURE__ */ e.jsx(
      Ba,
      {
        elements: ia,
        onChangeCallback: n,
        selectedValue: c
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "partition-fields__inputs-container", children: [
      c === "numberOfBuckets" && /* @__PURE__ */ e.jsx(
        Ct,
        {
          density: "normal",
          labelType: "floatingLabel",
          label: "Number of Buckets",
          required: !0,
          invalid: !d.partitionBuckets,
          min: 0,
          onChange: p,
          tip: /* @__PURE__ */ e.jsxs("span", { children: [
            "If you partition by key and the number of unique keys is very high it is recommended to use buckets for better performance. In this case the path would be",
            /* @__PURE__ */ e.jsx("b", { children: " path/bucket-num/year=/month=/day=" }),
            " etc.. In case the value is 0 then no bucketing will be done and your data will be partitioned by key."
          ] }),
          value: i.key_bucketing_number
        }
      ),
      m.includes("byTime") && /* @__PURE__ */ e.jsx(
        me,
        {
          density: "normal",
          floatingLabel: !0,
          onClick: h,
          options: sa,
          label: "Partition Granularity",
          selectedId: i.time_partitioning_granularity
        }
      ),
      m.includes("byColumns") && /* @__PURE__ */ e.jsx(
        le,
        {
          density: "normal",
          floatingLabel: !0,
          invalid: !d.partitionColumns,
          onBlur: a,
          onChange: o,
          label: "Partition Columns",
          placeholder: "col1,col2,col3",
          setInvalid: g,
          type: "text",
          value: i.partition_cols,
          wrapperClassName: "partition-cols"
        }
      )
    ] }),
    m.length === 0 && /* @__PURE__ */ e.jsx(Ge, { message: "Must select at least one partitioning option" })
  ] })
);
Ve.displayName = "PartitionFields";
Ve.propTypes = {
  data: t.shape({
    key_bucketing_number: t.oneOfType([t.string, t.number]).isRequired,
    partition_cols: t.string.isRequired,
    time_partitioning_granularity: t.string.isRequired
  }).isRequired,
  handlePartitionRadioButtonClick: t.func.isRequired,
  partitionColsOnBlur: t.func.isRequired,
  partitionColsOnChange: t.func.isRequired,
  partitionRadioButtonsState: t.string.isRequired,
  rangeOnChange: t.func.isRequired,
  selectedPartitionKind: t.arrayOf(t.string).isRequired,
  setPartitionColumnsValidation: t.func.isRequired,
  timePartitioningGranularityChange: t.func.isRequired,
  triggerPartitionAdvancedCheckboxes: t.func.isRequired,
  validation: t.object.isRequired
};
const pi = (i) => /* @__PURE__ */ pt.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ pt.createElement("path", { d: "M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4ZM12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8ZM12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10Z", fill: "#7F7989" })), at = ({
  data: i,
  disableButtons: n,
  externalOfflineTarget: a,
  featureStore: o,
  frontendSpecIsNotEmpty: c,
  handleAdvancedLinkClick: p,
  handleDiscardPathChange: m,
  handleExternalOfflineKindInputOnChange: g,
  handleExternalOfflineKindOnEditModeChange: h,
  handleExternalOfflineKindPathOnApply: l,
  handleExternalOfflineKindPathOnDiscard: d,
  handleExternalOfflineKindSelectOnChange: b,
  handleExternalOfflineKindTypeChange: _,
  handleKeyBucketingNumberChange: x,
  handleOfflineKindPathChange: y,
  handleOnlineKindPathChange: E,
  handleOnlineKindTypeChange: q,
  handlePartitionColsOnBlur: w,
  handlePartitionColsOnChange: F,
  handlePartitionRadioButtonClick: P,
  handleSelectTargetKind: S,
  handleTimePartitioningGranularityChange: j,
  partitionRadioButtonsState: C,
  selectedPartitionKind: O,
  selectedTargetKind: U,
  setData: M,
  setTargetsPathEditData: J,
  setValidation: H,
  showAdvanced: G,
  targetsPathEditData: Q,
  triggerPartitionAdvancedCheckboxes: W,
  triggerPartitionCheckbox: I,
  validation: B
}) => {
  const Y = Ie(null), z = Ie(null);
  return /* @__PURE__ */ e.jsx("div", { className: "feature-set-panel__item new-item-side-panel__item target-store", children: /* @__PURE__ */ e.jsxs(ve, { title: "Target store", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "target-store__item", children: [
      /* @__PURE__ */ e.jsx("div", { className: "target-store__checkbox-container", children: /* @__PURE__ */ e.jsxs(
        he,
        {
          item: X.online,
          onChange: S,
          selectedId: U.find((T) => X.online.id === T),
          children: [
            /* @__PURE__ */ e.jsx(Ga, {}),
            " Online",
            /* @__PURE__ */ e.jsx(
              Ae,
              {
                className: "checkbox__label-tip",
                text: "Store the feature set in a NoSQL database"
              }
            )
          ]
        }
      ) }),
      U.find((T) => X.online.id === T) && /* @__PURE__ */ e.jsx("div", { className: "target-store__inputs-container", children: /* @__PURE__ */ e.jsxs("div", { className: "target-store__path-wrapper", children: [
        Q.online.isEditMode && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            me,
            {
              density: "medium",
              disabled: o.newFeatureSet.spec.passthrough,
              floatingLabel: !0,
              label: "NOSQL Kind",
              onClick: q,
              options: na,
              selectedId: i.online.kind
            }
          ),
          /* @__PURE__ */ e.jsx(
            le,
            {
              density: "medium",
              floatingLabel: !0,
              focused: c,
              invalid: !B.isOnlineTargetPathValid,
              invalidText: i.online.kind === Je && /[{}]/g.test(i.online.path) ? "Invalid Redis URL, change the URL to a valid URL in the form of <redis|rediss>://<host>[:port]" : "",
              label: "Path",
              onChange: (T) => {
                J((A) => ({
                  ...A,
                  online: {
                    ...A.online,
                    isModified: !0
                  }
                })), M((A) => ({
                  ...A,
                  online: { ...A.online, path: T }
                }));
              },
              placeholder: `${i.online.kind === Ce ? Pe : ra + "{authority}/"}projects/{project}/FeatureStore/{name}/${i.online.kind}/sets/{name}`,
              required: !0,
              setInvalid: (T) => H((A) => ({
                ...A,
                isOnlineTargetPathValid: T
              })),
              type: "text",
              value: i.online.path,
              wrapperClassName: "online-path"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "target-store__path-actions editable", children: [
            /* @__PURE__ */ e.jsx(ie, { tooltipText: "Apply", children: /* @__PURE__ */ e.jsx(
              We,
              {
                className: "target-store__apply-btn",
                onClick: E
              }
            ) }),
            /* @__PURE__ */ e.jsx(
              ie,
              {
                onClick: () => m(te),
                tooltipText: "Discard changes",
                children: /* @__PURE__ */ e.jsx(je, {})
              }
            )
          ] })
        ] }),
        !Q.online.isEditMode && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            Ue,
            {
              className: de(
                "path-data online-path",
                !B.isOnlineTargetPathValid && "online-path__invalid"
              ),
              template: /* @__PURE__ */ e.jsx(Me, { text: i.online.path }),
              children: i.online.path
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "target-store__path-actions", children: /* @__PURE__ */ e.jsx(ie, { tooltipText: "Edit", onClick: E, children: /* @__PURE__ */ e.jsx(ke, {}) }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "target-store__item", children: [
      /* @__PURE__ */ e.jsx("div", { className: "target-store__checkbox-container", children: /* @__PURE__ */ e.jsxs(
        he,
        {
          disabled: o.newFeatureSet.spec.passthrough,
          item: X.parquet,
          onChange: S,
          selectedId: U.find((T) => X.parquet.id === T),
          children: [
            /* @__PURE__ */ e.jsx(la, {}),
            " Offline",
            /* @__PURE__ */ e.jsx(
              Ae,
              {
                className: "checkbox__label-tip",
                text: "Store the feature set as a Parquet file or a partitioned Parquet directory"
              }
            )
          ]
        }
      ) }),
      U.find((T) => X.parquet.id === T) && /* @__PURE__ */ e.jsxs("div", { className: "target-store__inputs-container", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "target-store__path-wrapper", children: [
          Q.parquet.isEditMode && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              le,
              {
                density: "normal",
                floatingLabel: !0,
                focused: c,
                invalid: ot(
                  B.isOfflineTargetPathValid,
                  i.parquet
                ),
                invalidText: oa(i.parquet),
                label: "Path",
                onChange: (T) => {
                  J((A) => ({
                    ...A,
                    parquet: {
                      ...A.parquet,
                      isModified: !0
                    }
                  })), M((A) => ({
                    ...A,
                    parquet: { ...A.parquet, path: T }
                  }));
                },
                placeholder: "v3io:///projects/{project}/FeatureStore/{name}/parquet/sets/{name}.parquet",
                required: !0,
                setInvalid: (T) => H((A) => ({
                  ...A,
                  isOfflineTargetPathValid: T
                })),
                type: "text",
                value: i.parquet.path,
                wrapperClassName: "offline-path"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "target-store__path-actions editable", children: [
              /* @__PURE__ */ e.jsx(
                ie,
                {
                  disabled: ot(
                    B.isOfflineTargetPathValid,
                    i.parquet
                  ),
                  onClick: y,
                  tooltipText: "Apply",
                  children: /* @__PURE__ */ e.jsx(We, { className: "target-store__apply-btn" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                ie,
                {
                  onClick: () => m(R),
                  tooltipText: "Discard changes",
                  children: /* @__PURE__ */ e.jsx(je, {})
                }
              )
            ] })
          ] }),
          !Q.parquet.isEditMode && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              Ue,
              {
                className: de(
                  "path-data offline-path",
                  o.newFeatureSet.spec.passthrough && "offline-path__disabled"
                ),
                template: /* @__PURE__ */ e.jsx(Me, { text: i.parquet.path }),
                children: i.parquet.path
              }
            ),
            !o.newFeatureSet.spec.passthrough && /* @__PURE__ */ e.jsx("div", { className: "target-store__path-actions", children: /* @__PURE__ */ e.jsx(ie, { onClick: y, tooltipText: "Edit", children: /* @__PURE__ */ e.jsx(ke, {}) }) })
          ] }),
          /* @__PURE__ */ e.jsx(
            he,
            {
              disabled: Q.parquet.isEditMode || o.newFeatureSet.spec.passthrough,
              item: { id: "partitioned", label: "Partition" },
              onChange: (T) => I(T, R),
              selectedId: i.parquet.partitioned
            }
          )
        ] }),
        i.parquet.partitioned && /* @__PURE__ */ e.jsxs("div", { className: "partition-fields", children: [
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: "link show-advanced",
              onClick: () => p(R),
              children: G.parquet ? "Hide advanced" : "Show advanced"
            }
          ),
          /* @__PURE__ */ e.jsx(
            dt,
            {
              nodeRef: Y,
              in: G.parquet,
              timeout: 200,
              classNames: "fade",
              unmountOnExit: !0,
              children: /* @__PURE__ */ e.jsx(
                Ve,
                {
                  ref: Y,
                  data: i.parquet,
                  handlePartitionRadioButtonClick: (T) => P(T, R),
                  partitionColsOnBlur: () => w(R),
                  partitionColsOnChange: (T) => F(T, R),
                  partitionRadioButtonsState: C.parquet,
                  rangeOnChange: (T) => x(T, R),
                  selectedPartitionKind: O.parquet,
                  setPartitionColumnsValidation: (T) => H((A) => ({
                    ...A,
                    isOfflinePartitionColumnsValid: T
                  })),
                  timePartitioningGranularityChange: (T) => j(T, R),
                  triggerPartitionAdvancedCheckboxes: (T) => W(T, R),
                  validation: {
                    partitionBuckets: B.isOfflinePartitionBucketsValid,
                    partitionColumns: B.isOfflinePartitionColumnsValid
                  }
                }
              )
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "target-store__item", children: [
      /* @__PURE__ */ e.jsx("div", { className: "target-store__checkbox-container", children: /* @__PURE__ */ e.jsxs(
        he,
        {
          disabled: o.newFeatureSet.spec.passthrough,
          item: X.externalOffline,
          onChange: S,
          selectedId: U.find(
            (T) => X.externalOffline.id === T
          ),
          children: [
            /* @__PURE__ */ e.jsx(pi, {}),
            /* @__PURE__ */ e.jsx("span", { className: "checkbox__label", children: "External offline" }),
            /* @__PURE__ */ e.jsx(
              Ae,
              {
                className: "checkbox__label-tip",
                text: "Store the feature set in a remote object store (e.g. AWS S3 Google or Azure storage)"
              }
            )
          ]
        }
      ) }),
      U.find((T) => X.externalOffline.id === T) && /* @__PURE__ */ e.jsxs("div", { className: "target-store__inputs-container", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "target-store__item v-center", children: [
          /* @__PURE__ */ e.jsx(
            me,
            {
              density: "medium",
              disabled: o.newFeatureSet.spec.passthrough,
              floatingLabel: !0,
              label: "File type",
              onClick: _,
              options: da,
              selectedId: i.externalOffline.kind
            }
          ),
          /* @__PURE__ */ e.jsx(
            tt,
            {
              comboboxSelectList: wt.filter(
                (T) => T.id !== se && T.id !== Pe
              ),
              defaultPath: a,
              disabled: o.newFeatureSet.spec.passthrough,
              handleUrlInputOnChange: g,
              handleUrlOnApply: l,
              handleUrlOnDiscard: d,
              handleUrlOnEditModeChange: h,
              handleUrlSelectOnChange: b,
              invalid: !B.isExternalOfflineTargetPathValid,
              previewClassName: i.externalOffline.kind === R ? "external-offline_with-parquet" : "external-offline",
              withActionButtons: !0
            }
          ),
          i.externalOffline.kind === R && /* @__PURE__ */ e.jsx(
            he,
            {
              disabled: !n.isExternalOfflineTargetPathEditModeClosed,
              item: { id: "partitioned", label: "Partition" },
              onChange: (T) => I(T, k),
              selectedId: i.externalOffline.partitioned
            }
          )
        ] }),
        i.externalOffline.partitioned && /* @__PURE__ */ e.jsxs("div", { className: "partition-fields", children: [
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: "link show-advanced",
              onClick: () => p(k),
              children: G.externalOffline ? "Hide advanced" : "Show advanced"
            }
          ),
          /* @__PURE__ */ e.jsx(
            dt,
            {
              nodeRef: z,
              in: G.externalOffline,
              timeout: 200,
              classNames: "fade",
              unmountOnExit: !0,
              children: /* @__PURE__ */ e.jsx(
                Ve,
                {
                  ref: z,
                  data: i.externalOffline,
                  handlePartitionRadioButtonClick: (T) => P(T, k),
                  partitionColsOnBlur: () => w(k),
                  partitionColsOnChange: (T) => F(T, k),
                  partitionRadioButtonsState: C.externalOffline,
                  rangeOnChange: (T) => x(T, k),
                  selectedPartitionKind: O.externalOffline,
                  setPartitionColumnsValidation: (T) => H((A) => ({
                    ...A,
                    isExternalOfflinePartitionColumnsValid: T
                  })),
                  timePartitioningGranularityChange: (T) => j(T, k),
                  triggerPartitionAdvancedCheckboxes: (T) => W(T, k),
                  validation: {
                    partitionBuckets: B.isExternalOfflinePartitionBucketsValid,
                    partitionColumns: B.isExternalOfflinePartitionColumnsValid
                  }
                }
              )
            }
          )
        ] })
      ] })
    ] }),
    !U.length && !o.newFeatureSet.spec.passthrough && /* @__PURE__ */ e.jsx(Ge, { message: "Must select at least one" })
  ] }) });
};
at.defualtProps = {
  externalOfflineTarget: {}
};
at.propTypes = {
  data: t.object.isRequired,
  disableButtons: t.object.isRequired,
  externalOfflineTarget: t.object,
  featureStore: t.object.isRequired,
  frontendSpecIsNotEmpty: t.bool.isRequired,
  handleAdvancedLinkClick: t.func.isRequired,
  handleDiscardPathChange: t.func.isRequired,
  handleExternalOfflineKindInputOnChange: t.func.isRequired,
  handleExternalOfflineKindOnEditModeChange: t.func.isRequired,
  handleExternalOfflineKindPathOnApply: t.func.isRequired,
  handleExternalOfflineKindPathOnDiscard: t.func.isRequired,
  handleExternalOfflineKindSelectOnChange: t.func.isRequired,
  handleExternalOfflineKindTypeChange: t.func.isRequired,
  handleKeyBucketingNumberChange: t.func.isRequired,
  handleOfflineKindPathChange: t.func.isRequired,
  handleOnlineKindPathChange: t.func.isRequired,
  handleOnlineKindTypeChange: t.func.isRequired,
  handlePartitionColsOnBlur: t.func.isRequired,
  handlePartitionColsOnChange: t.func.isRequired,
  handlePartitionRadioButtonClick: t.func.isRequired,
  handleSelectTargetKind: t.func.isRequired,
  handleTimePartitioningGranularityChange: t.func.isRequired,
  partitionRadioButtonsState: t.shape({
    parquet: t.string.isRequired,
    externalOffline: t.string.isRequired
  }).isRequired,
  selectedPartitionKind: t.shape({
    parquet: t.arrayOf(t.string).isRequired,
    externalOffline: t.arrayOf(t.string).isRequired
  }).isRequired,
  selectedTargetKind: t.arrayOf(t.string).isRequired,
  setData: t.func.isRequired,
  setTargetsPathEditData: t.func.isRequired,
  setValidation: t.func.isRequired,
  showAdvanced: t.shape({
    parquet: t.bool.isRequired,
    externalOffline: t.bool.isRequired
  }).isRequired,
  targetsPathEditData: t.object.isRequired,
  triggerPartitionAdvancedCheckboxes: t.func.isRequired,
  triggerPartitionCheckbox: t.func.isRequired,
  validation: t.object.isRequired
};
const Mt = ({
  disableButtons: i,
  project: n,
  setDisableButtons: a,
  setValidation: o,
  validation: c
}) => {
  const [p, m] = N(oe), [g, h] = N(ca), [l, d] = N(
    Se
  ), [b, _] = N(ua), [x, y] = N(
    pa
  ), [E, q] = N(ha), [w, F] = N(!1), [P, S] = N({}), j = ue((s) => s.appStore.frontendSpec), C = ue((s) => s.featureStore), O = re(), U = Re(
    () => C.newFeatureSet.spec.targets.find((s) => s.name === Ce),
    [C.newFeatureSet.spec.targets]
  ), M = Re(
    () => C.newFeatureSet.spec.targets.find((s) => s.name === R),
    [C.newFeatureSet.spec.targets]
  ), J = Re(
    () => C.newFeatureSet.spec.targets.find(
      (s) => s.name === k
    ),
    [C.newFeatureSet.spec.targets]
  );
  L(() => {
    !E.online.isModified && !E.online.isEditMode && m((s) => ({
      ...s,
      online: {
        ...s.online,
        path: pe(
          j.feature_store_data_prefixes,
          n,
          s.online.kind,
          C.newFeatureSet.metadata.name,
          ""
        )
      }
    })), !E.parquet.isModified && !E.parquet.isEditMode && m((s) => ({
      ...s,
      parquet: {
        ...s.parquet,
        path: pe(
          j.feature_store_data_prefixes,
          n,
          R,
          C.newFeatureSet.metadata.name,
          s.parquet?.partitioned ? "" : R
        )
      }
    }));
  }, [
    C.newFeatureSet.metadata.name,
    C.newFeatureSet.spec.source.kind,
    j.feature_store_data_prefixes,
    n,
    E.online.isEditMode,
    E.online.isModified,
    E.parquet.isEditMode,
    E.parquet.isModified
  ]), L(() => {
    o((s) => ({
      ...s,
      isTargetStoreValid: C.newFeatureSet.spec.passthrough ? !0 : g.length && Object.values(l).every((r) => r.length)
    }));
  }, [
    C.newFeatureSet.spec.passthrough,
    l,
    g.length,
    o
  ]), L(() => {
    if (U && U.path !== p.online.path && !E.online.isEditMode && !E.online.isModified || g.includes(R) && M && M.path !== p.parquet.path && !E.parquet.isEditMode && !E.parquet.isModified) {
      const s = ee.cloneDeep(C.newFeatureSet.spec.targets).map((r) => (r.kind === R && !E.parquet.isModified ? r.path = pe(
        j.feature_store_data_prefixes,
        n,
        R,
        C.newFeatureSet.metadata.name,
        p.parquet.partitioned ? "" : R
      ) : [Je, Ce].includes(r.kind) && !E.online.isModified && (r.path = pe(
        j.feature_store_data_prefixes,
        n,
        r.kind,
        C.newFeatureSet.metadata.name,
        ""
      )), r));
      O(Z(s));
    }
  }, [
    p.online.path,
    p.parquet.partitioned,
    p.parquet.path,
    O,
    C.newFeatureSet.metadata.name,
    C.newFeatureSet.spec.source.kind,
    C.newFeatureSet.spec.targets,
    j.feature_store_data_prefixes,
    M,
    U,
    n,
    g,
    E.online.isEditMode,
    E.online.isModified,
    E.parquet.isEditMode,
    E.parquet.isModified
  ]), L(() => {
    ee.isEmpty(j.feature_store_data_prefixes) && (q((s) => ({
      ...s,
      [R]: {
        ...s[R],
        isEditMode: !0
      },
      [te]: {
        ...s[te],
        isEditMode: !0
      }
    })), a((s) => ({
      ...s,
      isOfflineTargetPathEditModeClosed: !1,
      isOnlineTargetPathEditModeClosed: !1
    })), o((s) => ({
      ...s,
      isOfflineTargetPathValid: !1,
      isOnlineTargetPathValid: !1
    })));
  }, [j.feature_store_data_prefixes, a, o]), L(() => {
    o((s) => ({
      ...s,
      isOnlineTargetPathValid: !0
    }));
  }, [p.online.kind, o]);
  const H = (s) => {
    _((r) => ({
      ...r,
      [s]: !r[s]
    }));
  }, G = (s, r) => {
    m((u) => ({
      ...u,
      [r]: {
        ...u[r],
        key_bucketing_number: s
      }
    })), o((u) => ({
      ...u,
      [r === R ? "isOfflinePartitionBucketsValid" : "isExternalOfflinePartitionBucketsValid"]: ee.isNumber(s) && Number(s) >= 0
    })), O(
      Z(
        C.newFeatureSet.spec.targets.map((u) => u.name === r ? { ...u, key_bucketing_number: s } : u)
      )
    );
  }, Q = () => {
    ct(
      R,
      R,
      c.isOfflineTargetPathValid,
      E,
      p,
      M,
      C.newFeatureSet.spec.targets,
      "isOfflineTargetPathEditModeClosed",
      q,
      a,
      (s) => O(Z(s))
    );
  }, W = () => {
    ct(
      te,
      Ce,
      c.isOnlineTargetPathValid,
      E,
      p,
      U,
      C.newFeatureSet.spec.targets,
      "isOnlineTargetPathEditModeClosed",
      q,
      a,
      (s) => O(Z(s))
    );
  }, I = () => {
    o((s) => ({
      ...s,
      isExternalOfflineTargetPathValid: !0
    })), O(
      Z(
        C.newFeatureSet.spec.targets.map((s) => s.name === k ? { ...s, path: "" } : s)
      )
    );
  }, B = (s) => {
    o((r) => ({
      ...r,
      isExternalOfflineTargetPathValid: !ee.isEmpty(s)
    }));
  }, Y = ({ selectValue: s, inputValue: r }) => {
    let u = !0;
    return Ye(s, r, p[k].kind) ? (c.isExternalOfflineTargetPathValid || o((f) => ({
      ...f,
      isExternalOfflineTargetPathValid: !0
    })), O(
      Z(
        C.newFeatureSet.spec.targets.map((f) => f.name === k ? { ...f, path: `${s}${r}` } : f)
      )
    ), m((f) => ({
      ...f,
      [k]: { ...f[k], path: `${s}${r}` }
    }))) : (o((f) => ({
      ...f,
      isExternalOfflineTargetPathValid: !1
    })), u = !1), u;
  }, z = () => {
    o((s) => ({
      ...s,
      isExternalOfflineTargetPathValid: !0
    }));
  }, T = ne(
    (s) => {
      a((r) => ({
        ...r,
        isExternalOfflineTargetPathEditModeClosed: !s
      }));
    },
    [a]
  ), A = (s) => {
    const r = s === te ? Ce : s, u = C.newFeatureSet.spec.targets.find(
      (f) => f.name === r
    );
    u.path.length > 0 && (m((f) => ({
      ...f,
      [s]: {
        ...f[s],
        kind: u.kind,
        path: s === R ? M.path : U.path
      }
    })), q((f) => ({
      ...f,
      [s]: {
        ...f[s],
        isEditMode: !1
      }
    })), a((f) => ({
      ...f,
      [s === R ? "isOfflineTargetPathEditModeClosed" : "isOnlineTargetPathEditModeClosed"]: !0
    })), o((f) => ({
      ...f,
      [s === R ? "isOfflineTargetPathValid" : "isOnlineTargetPathValid"]: !0
    })));
  }, ge = (s) => {
    m((r) => ({
      ...r,
      externalOffline: {
        ...r.externalOffline,
        kind: s
      }
    })), O(
      Z(
        C.newFeatureSet.spec.targets.map((r) => {
          if (r.name === k) {
            const u = { ...r, kind: s };
            return s === ma && (delete u.partitioned, delete u.key_bucketing_number, delete u.partition_cols, delete u.time_partitioning_granularity), u;
          }
          return r;
        })
      )
    );
  }, _e = (s) => {
    m((r) => ({
      ...r,
      online: {
        ...r.online,
        kind: s,
        path: pe(
          j.feature_store_data_prefixes,
          n,
          s,
          C.newFeatureSet.metadata.name,
          ""
        )
      }
    }));
  }, Ee = (s) => {
    const r = C.newFeatureSet.spec.targets.find(
      (f) => f.name === s
    ), u = p[s].partition_cols;
    u && r.partition_cols !== u && O(
      Z(
        C.newFeatureSet.spec.targets.map((f) => f.name === s ? {
          ...f,
          partition_cols: u.split(",").map((ae) => ae.trim())
        } : f)
      )
    );
  }, Te = (s, r) => {
    m((u) => ({
      ...u,
      [r]: { ...u[r], partition_cols: s }
    }));
  }, be = ne(
    (s) => {
      let r = [...C.newFeatureSet.spec.targets];
      if (g.find((u) => u === s))
        r = r.filter((u) => u.name !== X[s].data.name), h((u) => u.filter((f) => f !== s)), q((u) => ({
          ...u,
          [s]: {
            isEditMode: !1,
            isModified: !1
          }
        })), a((u) => ({
          ...u,
          [s === R ? "isOfflineTargetPathEditModeClosed" : "isOnlineTargetPathEditModeClosed"]: !0
        })), o((u) => ({
          ...u,
          [s === R ? "isOfflineTargetPathValid" : "isOnlineTargetPathValid"]: !0,
          isTimestampKeyValid: !0
        })), s === X.externalOffline.id && (a((u) => ({
          ...u,
          isExternalOfflineTargetPathEditModeClosed: !0
        })), c.isExternalOfflineTargetPathValid || o((u) => ({
          ...u,
          isExternalOfflineTargetPathValid: !0
        }))), (s === X.externalOffline.id || s === X.parquet.id) && (m((u) => ({
          ...u,
          [s]: { ...oe[s] }
        })), _((u) => ({
          ...u,
          [s]: !1
        })), y((u) => ({
          ...u,
          [s]: "districtKeys"
        })), d((u) => ({
          ...u,
          [s]: [...Se[s]]
        })));
      else {
        const u = s === k ? "" : pe(
          j.feature_store_data_prefixes,
          n,
          oe[s].kind,
          C.newFeatureSet.metadata.name,
          oe[s].kind === R ? R : ""
        );
        s === X[s].id && m((f) => ({
          ...f,
          [s]: { ...oe[s], path: u }
        })), r.push({ ...oe[s], path: u }), h((f) => [...f, s]);
      }
      O(Z(r));
    },
    [
      O,
      C.newFeatureSet.metadata.name,
      C.newFeatureSet.spec.targets,
      j.feature_store_data_prefixes,
      n,
      g,
      a,
      o,
      c.isExternalOfflineTargetPathValid
    ]
  ), ce = ne(
    (s) => {
      h(s ? [te] : []), O(Z(s ? [U] : [])), q((r) => ({
        ...r,
        [R]: {
          isEditMode: !1,
          isModified: !1
        },
        [k]: {
          isEditMode: !1,
          isModified: !1
        },
        [te]: {
          isEditMode: !1,
          isModified: s ? r[te].isModified : !1
        }
      })), a((r) => ({
        ...r,
        isOfflineTargetPathEditModeClosed: !0,
        isOnlineTargetPathEditModeClosed: !0
      })), o((r) => ({
        ...r,
        isOfflineTargetPathValid: !0,
        isExternalOfflineTargetPathValid: !0,
        isTargetStoreValid: !0
      })), m((r) => ({
        ...r,
        [R]: { ...oe[R] },
        [k]: { ...oe[k] }
      })), _((r) => ({
        ...r,
        [R]: !1,
        [k]: !1
      })), y((r) => ({
        ...r,
        [R]: "districtKeys",
        [k]: "districtKeys"
      })), d((r) => ({
        ...r,
        [R]: [...Se[R]],
        [k]: [...Se[k]]
      }));
    },
    [O, U, a, o]
  ), V = ne(() => {
    h(P.selectedTargetKind), O(Z([...P.featureSetTargets])), m({ ...P.data }), d({ ...P.selectedPartitionKind }), y({ ...P.partitionRadioButtonsState }), S({});
  }, [
    O,
    P.data,
    P.featureSetTargets,
    P.partitionRadioButtonsState,
    P.selectedPartitionKind,
    P.selectedTargetKind
  ]);
  L(() => {
    C.newFeatureSet.spec.passthrough && !w ? (S({
      data: {
        ...p,
        [R]: {
          ...p[R],
          path: p[R].path ?? M.path
        },
        [te]: {
          ...p[te],
          path: p[te].path ?? U.path
        }
      },
      featureSetTargets: C.newFeatureSet.spec.targets,
      selectedPartitionKind: l,
      selectedTargetKind: g,
      partitionRadioButtonsState: x
    }), F(!0), g.includes(te) ? fa(St, {
      confirmButton: {
        label: "Unset online-target",
        variant: Oe,
        handler: () => {
          ce(!1);
        }
      },
      cancelButton: {
        label: "Keep online-target set",
        variant: Tt,
        handler: () => {
          ce(!0);
        }
      },
      closePopUp: () => {
        O(bt(!1));
      },
      message: 'Passthrough set to "enabled" while online-target is set. Do you want to unset online-target?'
    }) : ce(!1)) : !C.newFeatureSet.spec.passthrough && w && (V(), F(!1));
  }, [
    ce,
    p,
    O,
    C.newFeatureSet.spec.passthrough,
    C.newFeatureSet.spec.targets,
    M,
    U,
    x,
    w,
    V,
    l,
    g
  ]);
  const K = (s, r) => {
    const u = s === "districtKeys" ? 0 : 1;
    y((f) => ({
      ...f,
      [r]: s
    })), m((f) => ({
      ...f,
      [r]: {
        ...f[r],
        key_bucketing_number: u
      }
    })), O(
      Z(
        C.newFeatureSet.spec.targets.map((f) => f.name === r ? { ...f, key_bucketing_number: u } : f)
      )
    );
  }, xe = (s, r) => {
    m((u) => ({
      ...u,
      [r]: { ...u[r], time_partitioning_granularity: s }
    })), O(
      Z(
        C.newFeatureSet.spec.targets.map((u) => u.name === r ? { ...u, time_partitioning_granularity: s } : u)
      )
    );
  }, D = (s, r) => {
    l[r].find((u) => u === s) ? (d((u) => ({
      ...u,
      [r]: u[r].filter((f) => f !== s)
    })), m((u) => ({
      ...u,
      [r]: {
        ...u[r],
        key_bucketing_number: s === "byKey" ? "" : u[r].key_bucketing_number,
        time_partitioning_granularity: s === "byTime" ? "" : u[r].time_partitioning_granularity,
        partition_cols: s === "byColumns" ? "" : u[r].partition_cols
      }
    })), s === "byKey" && y((u) => ({
      ...u,
      [r]: "districtKeys"
    }))) : (d((u) => ({
      ...u,
      [r]: [...u[r], s]
    })), m((u) => ({
      ...u,
      [r]: {
        ...u[r],
        key_bucketing_number: s === "byKey" ? 0 : u[r].key_bucketing_number,
        time_partitioning_granularity: s === "byTime" ? "hour" : u[r].time_partitioning_granularity,
        partition_cols: s === "byColumns" ? "" : u[r].partition_cols
      }
    }))), O(
      Z(
        C.newFeatureSet.spec.targets.map((u) => {
          if (u.name === r) {
            const f = { ...u };
            return s === "byKey" && (l[r].includes(s) ? delete f.key_bucketing_number : f.key_bucketing_number = 0), s === "byTime" && (l[r].includes(s) ? delete f.time_partitioning_granularity : f.time_partitioning_granularity = "hour"), s === "byColumns" && (l[r].includes(s) ? delete f.partition_cols : f.partition_cols = ""), f;
          }
          return u;
        })
      )
    ), o((u) => ({
      ...u,
      isTimestampKeyValid: !0
    }));
  }, $ = (s, r) => {
    m((f) => {
      let ae = f[r].path;
      return r === R && !E.parquet.isEditMode && !E.parquet.isModified ? ae = pe(
        j.feature_store_data_prefixes,
        n,
        p[r].kind,
        C.newFeatureSet.metadata.name,
        p[r].partitioned ? R : ""
      ) : r === R && E.parquet.isModified && (ae = f[r].partitioned ? `${ae}.parquet` : ae.replace(/\.[^.]+$/, "")), p[r]?.partitioned ? {
        ...f,
        [r]: {
          ...oe[r],
          path: ae,
          kind: R
        }
      } : {
        ...f,
        [r]: {
          ...f[r],
          path: ae,
          partitioned: f[r].partitioned === s ? "" : s,
          key_bucketing_number: "",
          partition_cols: "",
          time_partitioning_granularity: "hour"
        }
      };
    }), p[r].partitioned && (_((f) => ({ ...f, [r]: !1 })), y((f) => ({
      ...f,
      [r]: "districtKeys"
    })), d((f) => ({
      ...f,
      [r]: [...Se[r]]
    })));
    const u = ee.cloneDeep(C.newFeatureSet.spec.targets).map((f) => (f.name === r && ((r === R || r === k) && p[r].partitioned !== s ? (f.partitioned = !0, f.time_partitioning_granularity = "hour") : (m((ae) => ({
      ...ae,
      [r]: {
        ...ae[r],
        key_bucketing_number: "",
        partition_cols: "",
        time_partitioning_granularity: "hour"
      }
    })), delete f.partitioned, delete f.key_bucketing_number, delete f.partition_cols, delete f.time_partitioning_granularity)), f));
    O(Z(u)), o((f) => ({
      ...f,
      isTimestampKeyValid: !0
    }));
  };
  return /* @__PURE__ */ e.jsx(
    at,
    {
      data: p,
      disableButtons: i,
      externalOfflineTarget: J,
      featureStore: C,
      frontendSpecIsNotEmpty: !ee.isEmpty(j.feature_store_data_prefixes),
      handleAdvancedLinkClick: H,
      handleDiscardPathChange: A,
      handleExternalOfflineKindInputOnChange: B,
      handleExternalOfflineKindOnEditModeChange: T,
      handleExternalOfflineKindPathOnApply: Y,
      handleExternalOfflineKindPathOnDiscard: z,
      handleExternalOfflineKindSelectOnChange: I,
      handleExternalOfflineKindTypeChange: ge,
      handleKeyBucketingNumberChange: G,
      handleOfflineKindPathChange: Q,
      handleOnlineKindPathChange: W,
      handleOnlineKindTypeChange: _e,
      handlePartitionColsOnBlur: Ee,
      handlePartitionColsOnChange: Te,
      handlePartitionRadioButtonClick: K,
      handleSelectTargetKind: be,
      handleTimePartitioningGranularityChange: xe,
      partitionRadioButtonsState: x,
      selectedPartitionKind: l,
      selectedTargetKind: g,
      setData: m,
      setTargetsPathEditData: q,
      setValidation: o,
      showAdvanced: b,
      targetsPathEditData: E,
      triggerPartitionAdvancedCheckboxes: D,
      triggerPartitionCheckbox: $,
      validation: c
    }
  );
};
Mt.propTypes = {
  disableButtons: t.object.isRequired,
  project: t.string.isRequired,
  setDisableButtons: t.func.isRequired,
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const hi = qe.memo(Mt), kt = ({
  closePanel: i,
  data: n,
  featureStore: a,
  formState: o,
  frontendSpec: c,
  handleCheckPassthrough: p,
  handleNameOnBlur: m,
  setData: g,
  setValidation: h,
  validation: l
}) => {
  const d = re();
  return /* @__PURE__ */ e.jsxs("div", { className: "panel-title feature-sets-panel__title", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "panel-title__container", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "feature-sets-panel__title-required-info", children: [
        /* @__PURE__ */ e.jsx(
          le,
          {
            className: "panel-title__input",
            floatingLabel: !0,
            invalid: !l.isNameValid,
            invalidText: "This field is invalid",
            label: "Feature Set Name",
            onChange: (b) => g((_) => ({ ..._, name: b })),
            onBlur: m,
            required: !0,
            requiredText: "This field is required",
            setInvalid: (b) => h((_) => ({ ..._, isNameValid: b })),
            type: "text",
            validationRules: ut("feature.vector.name"),
            value: n.name,
            wrapperClassName: "name"
          }
        ),
        /* @__PURE__ */ e.jsx(
          le,
          {
            className: "panel-title__input",
            floatingLabel: !0,
            invalid: !l.isTagValid,
            label: "Version",
            onChange: (b) => g((_) => ({
              ..._,
              version: b
            })),
            onBlur: (b) => {
              a.newFeatureSet.metadata.tag !== b.target.value && d(ga(b.target.value));
            },
            placeholder: "latest",
            setInvalid: (b) => h((_) => ({ ..._, isTagValid: b })),
            type: "text",
            value: n.version,
            validationRules: ut("feature.sets.tag"),
            wrapperClassName: "version"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        Ka,
        {
          className: "panel-title__input",
          floatingLabel: !0,
          label: "Description",
          maxLength: 500,
          onChange: (b) => g((_) => ({
            ..._,
            description: b
          })),
          onBlur: (b) => {
            a.newFeatureSet.spec.description !== b.target.value && d(_a(b.target.value));
          },
          type: "text",
          value: n.description
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "panel-title__labels-container", children: [
        /* @__PURE__ */ e.jsx("div", { className: "panel-title__labels-text", children: "Labels" }),
        /* @__PURE__ */ e.jsx("div", { className: "panel-title__labels-wrapper", children: /* @__PURE__ */ e.jsx(
          Ea,
          {
            chipOptions: Ta("labels"),
            formState: o,
            initialValues: o.initialValues,
            isEditable: !0,
            label: "",
            name: "labels",
            shortChips: !0,
            visibleChipsMaxLength: "all",
            validationRules: {
              key: [xa(c?.internal_labels || [])],
              value: []
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs(
        he,
        {
          item: { id: "passthrough", label: "Passthrough" },
          onChange: (b) => p(b),
          selectedId: n.passthrough,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "Passthrough" }),
            /* @__PURE__ */ e.jsx(
              Ae,
              {
                className: "checkbox__label-tip",
                text: "Select Passthrough to read data directly from the source without ingesting the data to the offline target. Transformations (computation graph, aggregations, etc.) are invalid when this feature is enabled."
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      ie,
      {
        onClick: () => i({}),
        className: "panel-title__btn_close",
        tooltipText: "Close",
        "data-testid": "pop-up-close-btn",
        children: /* @__PURE__ */ e.jsx(je, {})
      }
    )
  ] });
};
kt.propTypes = {
  closePanel: t.func.isRequired,
  data: t.object.isRequired,
  featureStore: t.object.isRequired,
  formState: t.object.isRequired,
  frontendSpec: t.object.isRequired,
  handleCheckPassthrough: t.func.isRequired,
  handleNameOnBlur: t.func.isRequired,
  setData: t.func.isRequired,
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const It = ({
  closePanel: i,
  formState: n,
  frontendSpec: a,
  setValidation: o,
  validation: c
}) => {
  const [p, m] = N({
    name: "",
    description: "",
    passthrough: "",
    version: ""
  }), g = re(), h = ue((b) => b.featureStore), l = () => {
    p.name !== h.newFeatureSet.metadata.name && g(ba(p.name));
  }, d = (b) => {
    const _ = !h.newFeatureSet.spec.passthrough;
    g(bt(_)), m((x) => ({
      ...x,
      passthrough: _ ? b : ""
    }));
  };
  return L(() => {
    h.newFeatureSet.spec.passthrough !== !!p.passthrough && m((b) => ({
      ...b,
      passthrough: h.newFeatureSet.spec.passthrough ? "passthrough" : ""
    }));
  }, [p.passthrough, h.newFeatureSet.spec.passthrough]), /* @__PURE__ */ e.jsx(
    kt,
    {
      closePanel: i,
      data: p,
      featureStore: h,
      formState: n,
      frontendSpec: a,
      handleCheckPassthrough: d,
      handleNameOnBlur: l,
      setData: m,
      setValidation: o,
      validation: c
    }
  );
};
It.propTypes = {
  closePanel: t.func.isRequired,
  formState: t.object.isRequired,
  frontendSpec: t.object.isRequired,
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const Vt = ({
  accessKeyRequired: i,
  closePanel: n,
  confirmDialog: a = null,
  disableButtons: o,
  featureStore: c,
  frontendSpec: p,
  formState: m,
  handleSave: g,
  handleSaveOnClick: h,
  loading: l,
  project: d,
  setConfirmDialog: b,
  setDisableButtons: _,
  setValidation: x,
  validation: y
}) => {
  const E = !Object.values(y).every((F) => F), q = !Object.values(o).every((F) => F), w = re();
  return /* @__PURE__ */ e.jsx("div", { className: "new-item-side-panel-container", children: /* @__PURE__ */ e.jsxs("div", { className: "feature-set-panel new-item-side-panel", children: [
    l && /* @__PURE__ */ e.jsx(Sa, {}),
    a && /* @__PURE__ */ e.jsx(
      St,
      {
        closePopUp: () => b(null),
        confirmButton: {
          handler: g,
          label: "Okay",
          variant: Oe
        },
        isOpen: !!a,
        message: "Note that data will be ingested to the feature set without any transformation and therefore you won't be able to add a transformation graph unless you delete the data first."
      }
    ),
    /* @__PURE__ */ e.jsx(
      It,
      {
        closePanel: n,
        formState: m,
        frontendSpec: p,
        setValidation: x,
        validation: y
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "new-item-side-panel__body", children: [
      /* @__PURE__ */ e.jsx(
        He,
        {
          accordionClassName: "new-item-side-panel__accordion",
          icon: /* @__PURE__ */ e.jsx(De, {}),
          iconClassName: "new-item-side-panel__expand-icon",
          openByDefault: !0,
          children: /* @__PURE__ */ e.jsx(
            At,
            {
              project: d,
              setDisableButtons: _,
              setValidation: x,
              validation: y
            }
          )
        }
      ),
      /* @__PURE__ */ e.jsx(
        He,
        {
          accordionClassName: "new-item-side-panel__accordion",
          icon: /* @__PURE__ */ e.jsx(De, {}),
          iconClassName: "new-item-side-panel__expand-icon",
          openByDefault: !0,
          children: /* @__PURE__ */ e.jsx(Ut, { setValidation: x, validation: y })
        }
      ),
      /* @__PURE__ */ e.jsx(
        He,
        {
          accordionClassName: "new-item-side-panel__accordion",
          icon: /* @__PURE__ */ e.jsx(De, {}),
          iconClassName: "new-item-side-panel__expand-icon",
          openByDefault: !0,
          children: /* @__PURE__ */ e.jsx(
            hi,
            {
              disableButtons: o,
              project: d,
              setDisableButtons: _,
              setValidation: x,
              validation: y
            }
          )
        }
      ),
      /* @__PURE__ */ e.jsx(
        La,
        {
          credentialsAccessKey: c.newFeatureSet.credentials.access_key,
          required: i,
          setCredentialsAccessKey: (F) => w(Ca(F)),
          setValidation: x,
          validation: y
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "new-item-side-panel__buttons-container", children: [
        /* @__PURE__ */ e.jsx(
          ye,
          {
            variant: ya,
            label: "Cancel",
            className: "pop-up-dialog__btn_cancel",
            onClick: n
          }
        ),
        /* @__PURE__ */ e.jsx(
          ye,
          {
            disabled: E || q,
            variant: Tt,
            label: "Save",
            onClick: () => h(!1)
          }
        ),
        /* @__PURE__ */ e.jsx(
          ye,
          {
            className: "btn_start-ingestion",
            disabled: E || q || c.newFeatureSet.spec.source.schedule.length > 0,
            label: "Save and ingest",
            onClick: () => h(!0),
            variant: Oe
          }
        )
      ] })
    ] })
  ] }) });
};
Vt.propTypes = {
  accessKeyRequired: t.bool.isRequired,
  closePanel: t.func.isRequired,
  confirmDialog: t.shape({ action: t.string.isRequired }),
  disableButtons: t.object.isRequired,
  featureStore: t.object.isRequired,
  formState: t.object.isRequired,
  frontendSpec: t.object.isRequired,
  handleSave: t.func.isRequired,
  handleSaveOnClick: t.func.isRequired,
  loading: t.bool.isRequired,
  project: t.string.isRequired,
  setConfirmDialog: t.func.isRequired,
  setDisableButtons: t.func.isRequired,
  setValidation: t.func.isRequired,
  validation: t.object.isRequired
};
const fi = (i, n, a, o, c) => {
  let p = !0;
  const m = i.spec.targets.find(
    (l) => l.name === "externalOffline"
  ), g = i.spec.targets.some(
    (l) => !!l.time_partitioning_granularity
  ), h = i.spec.targets.find(
    (l) => l.kind === Je
  );
  if (Object.values(a).every((l) => l) || (p = !1), !i.spec.targets.length && !i.spec.passthrough && (n((l) => ({
    ...l,
    isTargetStoreValid: !1
  })), p = !1), h && /[{}]/g.test(h.path) && (n((l) => ({
    ...l,
    isOnlineTargetPathValid: !1
  })), p = !1), (i.metadata.name.length === 0 || !a.isNameValid) && (n((l) => ({
    ...l,
    isNameValid: !1
  })), p = !1), (i.spec.source.path.length === 0 || !a.isUrlValid) && (n((l) => ({
    ...l,
    isUrlValid: !1
  })), p = !1), i.spec.source.kind === "parquet") {
    const { time_field: l, start_time: d, end_time: b } = i.spec.source;
    l.length === 0 && d.length === 0 && b.length === 0 ? n((_) => ({
      ..._,
      isTimeFieldValid: !0,
      isStartTimeValid: !0,
      isEndTimeValid: !0
    })) : (a.isTimeFieldValid || (p = !1), d.length === 0 && b.length === 0 ? (n((_) => ({
      ..._,
      isStartTimeValid: !1,
      isEndTimeValid: !1
    })), p = !1) : l.length === 0 ? (n((_) => ({
      ..._,
      isTimeFieldValid: !1
    })), p = !1) : (b && !d || d && !b) && (n((_) => ({
      ..._,
      isStartTimeValid: b.length === 0,
      isEndTimeValid: d.length === 0
    })), p = !1), (!a.isStartTimeValid || !a.isEndTimeValid) && (p = !1));
  }
  return (i.spec.entities.length === 0 || !a.isEntitiesValid) && (n((l) => ({
    ...l,
    isEntitiesValid: !1
  })), p = !1), !i.spec.passthrough && m && (m.path.length === 0 || !a.isExternalOfflineTargetPathValid) && (n((l) => ({
    ...l,
    isExternalOfflineTargetPathValid: !1
  })), p = !1), g && i.spec.timestamp_key.length === 0 && (n((l) => ({
    ...l,
    isTimestampKeyValid: !1
  })), p = !1), i.credentials.access_key.length === 0 && o ? (n((l) => ({
    ...l,
    isAccessKeyValid: !1
  })), c(!0), p = !1) : (n((l) => ({
    ...l,
    isAccessKeyValid: !0
  })), c(!1)), p;
}, mi = ({ closePanel: i, createFeatureSetSuccess: n, project: a }) => {
  const o = ue((S) => S.appStore.frontendSpec), c = ue((S) => S.featureStore), [p, m] = N({
    areLabelsValid: !0,
    isNameValid: !0,
    isTagValid: !0,
    isUrlValid: !0,
    isTimeFieldValid: !0,
    isStartTimeValid: !0,
    isEndTimeValid: !0,
    isParseDatesValid: !0,
    isEntitiesValid: !0,
    isOnlineTargetPathValid: !0,
    isOfflineTargetPathValid: !0,
    isExternalOfflineTargetPathValid: !0,
    isOfflinePartitionBucketsValid: !0,
    isOfflinePartitionColumnsValid: !0,
    isExternalOfflinePartitionBucketsValid: !0,
    isExternalOfflinePartitionColumnsValid: !0,
    isTargetStoreValid: !0,
    isTimestampKeyValid: !0,
    isAccessKeyValid: !0
  }), [g, h] = N({
    isExternalOfflineTargetPathEditModeClosed: !0,
    isOnlineTargetPathEditModeClosed: !0,
    isOfflineTargetPathEditModeClosed: !0,
    isUrlEditModeClosed: !0
  }), [l, d] = N(null), [b, _] = N(!1), x = ka(), y = re(), E = qe.useRef(
    Ra({
      initialValues: { labels: [] },
      mutators: { ...Oa, setFieldState: ja },
      onSubmit: () => {
      }
    })
  ), q = () => {
    let S = {
      kind: "FeatureSet",
      ...c.newFeatureSet,
      metadata: {
        ...c.newFeatureSet.metadata,
        labels: va(E.current.getFieldState("labels")?.value),
        tag: c.newFeatureSet.metadata.tag || qa
      }
    };
    c.newFeatureSet.spec.passthrough && (S = {
      ...S,
      spec: {
        ...S.spec,
        targets: S.spec.targets.filter(
          (j) => ![k, R].includes(j.name)
        )
      }
    }), delete S.credentials, y(wa({ project: a, data: S })).unwrap().then((j) => {
      if (d(null), l.action === "save and ingest")
        return F(j);
      P(j.data.metadata.name, j.data.metadata.tag);
    }).catch(() => {
      d(null);
    });
  }, w = (S) => {
    fi(
      c.newFeatureSet,
      m,
      p,
      S,
      _
    ) && d({
      action: S ? "save and ingest" : "save"
    });
  }, F = (S) => {
    const j = S.data.metadata.tag || S.data.metadata.uid, C = {
      source: { ...S.data.spec.source, name: "source" },
      targets: S.data.spec.targets,
      credentials: c.newFeatureSet.credentials
    };
    return y(
      Fa({ project: a, featureSet: S.data.metadata.name, reference: j, data: C })
    ).unwrap().then(() => {
      P(S.data.metadata.name, j);
    });
  }, P = (S, j) => {
    n(j).then(() => {
      x(
        `/projects/${a}/feature-store/${Aa}/${S}/${j}/overview${window.location.search}`
      ), y(
        Da({
          status: 200,
          id: Math.random(),
          message: "Feature set successfully created"
        })
      );
    });
  };
  return Ia(
    /* @__PURE__ */ e.jsx(Pa, { form: E.current, onSubmit: () => {
    }, children: (S) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        Vt,
        {
          accessKeyRequired: b,
          closePanel: i,
          confirmDialog: l,
          disableButtons: g,
          formState: S,
          frontendSpec: o,
          featureStore: c,
          handleSave: q,
          handleSaveOnClick: w,
          loading: c.loading,
          project: a,
          setConfirmDialog: d,
          setDisableButtons: h,
          setValidation: m,
          validation: p
        }
      ),
      /* @__PURE__ */ e.jsx(
        Na,
        {
          subscription: { valid: !0 },
          onChange: () => {
            const j = E.current?.getFieldState?.("labels")?.valid ?? !0;
            m((C) => C.areLabelsValid === j ? C : {
              ...C,
              areLabelsValid: j
            });
          }
        }
      )
    ] }) }),
    document.getElementById("overlay_container")
  );
};
mi.propTypes = {
  closePanel: t.func.isRequired,
  createFeatureSetSuccess: t.func.isRequired,
  project: t.string.isRequired
};
export {
  mi as F
};
//# sourceMappingURL=FeatureSetsPanel-BA6whq47.mjs.map
