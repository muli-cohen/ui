const c = (o, t) => {
  let e, n, s, r, u = /* @__PURE__ */ new Date(), i = null;
  t ? i = t.getTime() - o.getTime() > 0 ? t.getTime() - o.getTime() : 0 : i = u.getTime() - o.getTime(), e = i / 864e5, n = (e - ~~e) * 24, s = (n - ~~n) * 60, r = (s - ~~s) * 60;
  const m = a(~~n, ~~s, ~~r);
  return ~~e > 0 ? `${~~e} ${e > 1 ? "days " : "day "}` + m : m;
}, a = (...o) => o.map((t) => t < 10 ? "0" + t : t).join(":"), g = (o = 0) => {
  const t = parseInt(o, 10), e = Math.floor(t / 60), n = t % 60, s = e > 0 ? `${e} hour${e > 1 ? "s" : ""}` : "", r = n > 0 ? `${n} minute${n > 1 ? "s" : ""}` : "";
  return s && r ? `${s} and ${r}` : s || r || "0 minutes";
};
export {
  g as f,
  c as m
};
//# sourceMappingURL=measureTime-DGja8F60.mjs.map
