import { h8 as Fe, j as t, b0 as Re, an as k, eb as ge, P as s, c as Oe, e as c, bJ as Te, ak as u, hM as Ie, eJ as te, aN as Y, az as ie, aA as ne, ay as Se, kI as h, aU as B, kJ as j, kK as le, bN as ke, iK as Ve, bV as De, aQ as re, kL as oe, b2 as ce, y as ue, c2 as Me, bK as Ae, bL as Le } from "./main-CTYpZ6Nf.mjs";
import pe, { useRef as Ce, useCallback as S, useState as Be, useMemo as T, useEffect as I, useLayoutEffect as de } from "react";
import { useSelector as me, useDispatch as qe } from "react-redux";
import { useNavigate as Ue, useParams as Pe } from "react-router-dom";
import { D as we, d as Ge, e as He } from "./useVirtualization.hook-B2Lvanu1.mjs";
import { aH as Q, aI as Ke } from "./Table-DB12oa-o.mjs";
import { a as Je } from "./search-CsL7YQlT.mjs";
import { F as Ye } from "./exclamation-mark-kRjYDG-V.mjs";
import { g as Qe } from "./link-helper.util-CuUJj7TV.mjs";
const he = ({ applyChanges: N }) => {
  const { input: E } = Fe(k), p = Ce(!1), V = (_) => {
    _.keyCode === ge.ENTER && !p.current && N(_.target.value);
  }, x = () => {
    E.value.length > 0 && !p.current && N(E.value);
  }, y = S((_) => {
    p.current = _;
  }, []);
  return /* @__PURE__ */ t.jsx("div", { className: "name-filter filter-column", children: /* @__PURE__ */ t.jsx(
    Re,
    {
      iconClass: "name-filter__icon",
      iconClick: x,
      inputIcon: /* @__PURE__ */ t.jsx(Je, {}),
      name: k,
      onKeyDown: V,
      placeholder: "Search by name",
      onValidationError: y
    }
  ) });
};
he.propTypes = {
  applyChanges: s.func.isRequired
};
const fe = ({
  actionButtons: N = [],
  allRowsAreExpanded: E,
  autoRefreshIsEnabled: p = !1,
  autoRefreshIsStopped: V = !1,
  autoRefreshStopTrigger: x = !1,
  cancelRequest: y = null,
  children: _,
  closeParamName: q = "",
  filters: v,
  filtersConfig: n,
  handleAutoRefreshPrevValueChange: F = null,
  handleRefresh: R,
  hidden: U = !1,
  internalAutoRefreshIsEnabled: g = !1,
  removeSelectedItem: P = null,
  selectedItemName: z = "",
  setSearchParams: $,
  setSelectedRowData: w = null,
  tab: be = "",
  toggleAllRows: D,
  withAutoRefresh: Ee = !1,
  withInternalAutoRefresh: M = !1,
  withRefreshButton: W = !0,
  withoutExpandButton: xe
}) => {
  const [X, G] = Be(
    g
  ), d = me((a) => a.filtersStore), f = me((a) => a.commonDetailsStore.changes), l = qe(), Z = Ue(), ee = Pe(), _e = Oe("action-bar", U && "action-bar_hidden"), A = S(
    (a) => v && n ? c.pickBy(
      v,
      (e, i) => i in n && !n[i].hidden && !!n[i].isModal === a
    ) : {},
    [v, n]
  ), b = T(() => A(!1), [A]), H = T(() => A(!0), [A]), L = T(() => {
    const a = {};
    for (const [e, i] of Object.entries(n))
      !i.isModal && !i.hidden && (a[e] = i.initialValue);
    return a;
  }, [n]), ve = T(() => ({
    [j]: p,
    [h]: g,
    ...L
  }), [p, L, g]), r = pe.useRef(
    Te({
      initialValues: ve,
      mutators: { ...Le, setFieldState: Ae },
      onSubmit: () => {
      }
    })
  ), ae = T(() => c.mapValues(
    c.pickBy(n, (a) => a.isModal && !a.hidden),
    (a) => a.initialValue
  ), [n]), C = S(
    (a) => {
      c.isEmpty(a) || $(
        (e) => {
          for (const [i, o] of Object.entries(a))
            if (!c.isNil(n[i]?.initialValue) && !c.isEqual(n[i].initialValue, o)) {
              let m = o;
              i === u && (m = o.initialSelectedOptionId === Ie ? o.value.map((O) => new Date(O).getTime()).join("-") : o.initialSelectedOptionId), e.set(i, m);
            } else
              e.delete(i);
          return e;
        },
        { replace: !0 }
      );
    },
    [n, $]
  ), K = S(
    async (a, e, i) => {
      const o = i || await Q(f, l, !0), m = { ...e, ...a };
      o && (q && Z(Qe(q, !0, z), { replace: !0 }), (e.tag === te || c.isEmpty(e.iter)) && d.groupBy === Y ? l(ie({ groupBy: ne })) : d.groupBy === ne && e.tag !== te && !c.isEmpty(e.iter) && l(ie({ groupBy: Y })), C(m), P && l(P({})), w && w({}), D && D(!0), R(m, !0));
    },
    [
      f,
      l,
      q,
      d.groupBy,
      C,
      P,
      w,
      D,
      R,
      Z,
      z
    ]
  ), J = S(
    async (a) => {
      await Q(f, l) && (f.counter > 0 && y ? y(Se) : (C(a.values), R({
        ...v,
        ...a.values
      })));
    },
    [f, l, y, C, R, v]
  ), je = (a, e, i, o, m) => {
    const O = [...a];
    O.length === 1 && O.push(/* @__PURE__ */ new Date());
    const se = {
      value: O,
      isPredefined: e,
      initialSelectedOptionId: i
    }, ye = { ...m.values, [u]: se };
    K(ye, H), o.onChange(se);
  }, Ne = async (a) => {
    await Q(f, l) && a(ee, R, v);
  };
  return I(() => {
    c.isEqual(r.current?.getState().values, b) || r.current?.batch(() => {
      for (const a in b)
        r.current?.change(a, b[a]);
    });
  }, [b, n]), I(() => {
    if ((d.autoRefresh && !M || d.internalAutoRefresh) && !U) {
      const a = setInterval(() => {
        V || J(r.current.getState());
      }, 3e4);
      return () => clearInterval(a);
    }
  }, [
    V,
    U,
    J,
    M,
    d.internalAutoRefresh,
    d.autoRefresh
  ]), I(() => {
    x && d.internalAutoRefresh ? (r.current?.change(h, !1), G(!0), l(B(!1)), F && F(!0)) : !x && X && (G(!1), l(B(!0)), r.current?.change(h, !0), F && F(!1));
  }, [
    X,
    x,
    F,
    l,
    d.internalAutoRefresh
  ]), I(() => () => {
    G(!1);
  }, []), de(() => {
    const a = r.current.getState().values, e = {
      [h]: a[h],
      [j]: a[j],
      ...L
    };
    r.current.reset(e);
  }, [L]), de(() => {
    r.current?.batch(() => {
      r.current?.change(j, p), r.current?.change(h, g);
    });
  }, [p, g]), I(() => {
    l(le(!1)), l(B(!1));
  }, [l, ee.projectName]), /* @__PURE__ */ t.jsx(ke, { form: r.current, onSubmit: () => {
  }, children: (a) => /* @__PURE__ */ t.jsxs("div", { className: _e, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "action-bar__filters", children: [
      k in b && !n[k].hidden && /* @__PURE__ */ t.jsx("div", { className: "action-bar__filters-item", children: /* @__PURE__ */ t.jsx(
        he,
        {
          applyChanges: (e) => K({ ...a.values, name: e }, H)
        }
      ) }, k),
      u in b && !n[u].hidden && /* @__PURE__ */ t.jsx("div", { className: "action-bar__filters-item filter-column", children: /* @__PURE__ */ t.jsx(Ve, { name: u, children: ({ input: e }) => /* @__PURE__ */ t.jsx(
        we,
        {
          customOptions: n[u].customOptions,
          excludeCustomRange: n[u].excludeCustomRange,
          className: "details-date-picker",
          date: e.value.value[0],
          dateTo: e.value.value[1],
          hasFutureOptions: n[u].isFuture,
          selectedOptionId: b[u]?.initialSelectedOptionId || e.value.initialSelectedOptionId,
          label: "",
          onChange: (i, o, m) => je(i, o, m, e, a),
          timeFrameLimit: n[u].timeFrameLimit,
          type: "date-range-time",
          withLabels: !0
        },
        be
      ) }) }, u)
    ] }),
    !c.isEmpty(ae) && /* @__PURE__ */ t.jsx(
      Ke,
      {
        applyChanges: (e, i) => K(a.values, e, i),
        initialValues: ae,
        values: H,
        detailsChanges: f,
        children: _
      }
    ),
    (W || !c.isEmpty(N)) && /* @__PURE__ */ t.jsxs("div", { className: "action-bar__actions", children: [
      N.map(
        (e, i) => e && !e.hidden && (e.template || /* @__PURE__ */ t.jsx(
          De,
          {
            disabled: e.disabled,
            variant: e.variant,
            label: e.label,
            className: e.className,
            icon: e.icon,
            onClick: () => {
              Ne(e.onClick);
            }
          },
          i
        ))
      ),
      Ee && !M && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          re,
          {
            className: "auto-refresh",
            label: oe,
            name: j
          }
        ),
        /* @__PURE__ */ t.jsx(
          ce,
          {
            handler: (e) => {
              l(le(e));
            },
            name: j
          }
        )
      ] }),
      M && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          re,
          {
            className: "auto-refresh",
            disabled: x,
            label: oe,
            name: h
          }
        ),
        /* @__PURE__ */ t.jsx(
          ce,
          {
            handler: (e) => {
              l(B(e));
            },
            name: h
          }
        )
      ] }),
      W && /* @__PURE__ */ t.jsx(ue, { tooltipText: "Refresh", onClick: () => J(a), id: "refresh", children: /* @__PURE__ */ t.jsx(Me, {}) }),
      !xe && d.groupBy !== Y && /* @__PURE__ */ t.jsx(
        ue,
        {
          id: "toggle-collapse",
          tooltipText: E ? "Collapse" : "Expand all",
          onClick: () => D(E),
          children: E ? /* @__PURE__ */ t.jsx(Ge, {}) : /* @__PURE__ */ t.jsx(He, {})
        }
      )
    ] })
  ] }) });
};
fe.propTypes = {
  actionButtons: s.arrayOf(
    s.oneOfType([
      s.shape({
        className: s.string,
        hidden: s.bool,
        label: s.string.isRequired,
        onClick: s.func.isRequired,
        variant: s.string
      }),
      s.shape({
        hidden: s.bool.isRequired,
        template: s.object.isRequired
      })
    ])
  ),
  allRowsAreExpanded: s.bool,
  autoRefreshIsEnabled: s.bool,
  autoRefreshIsStopped: s.bool,
  autoRefreshStopTrigger: s.bool,
  cancelRequest: s.func,
  children: s.node,
  closeParamName: s.string,
  filters: s.object.isRequired,
  filtersConfig: Ye.isRequired,
  handleAutoRefreshPrevValueChange: s.func,
  handleRefresh: s.func.isRequired,
  hidden: s.bool,
  internalAutoRefreshIsEnabled: s.bool,
  removeSelectedItem: s.func,
  selectedItemName: s.string,
  setSearchParams: s.func.isRequired,
  setSelectedRowData: s.func,
  tab: s.string,
  toggleAllRows: s.func,
  withAutoRefresh: s.bool,
  withInternalAutoRefresh: s.bool,
  withRefreshButton: s.bool,
  withoutExpandButton: s.bool
};
const ia = pe.memo(fe);
export {
  ia as A
};
//# sourceMappingURL=ActionBar-C8Jl3Xmo.mjs.map
