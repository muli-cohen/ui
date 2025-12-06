const s = (a = [], l = "") => a.map((e) => ({
  label: l === e ? `Current (${e})` : e,
  id: e
})).sort((e, r) => e.label.localeCompare(r.label));
export {
  s as g
};
//# sourceMappingURL=projects-Cp4BQIu-.mjs.map
