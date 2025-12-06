import { bJ as o, bK as l, bL as n, j as a, bN as m, bQ as p, bR as u, P as b, ef as c } from "./main-CTYpZ6Nf.mjs";
import f from "react";
const R = ({ labels: e = [], chipOptions: t = u("metrics"), ...r }) => {
  const i = f.useRef(
    o({
      initialValues: { labels: e },
      mutators: { ...n, setFieldState: l },
      onSubmit: () => {
      }
    })
  );
  return /* @__PURE__ */ a.jsx(m, { form: i.current, onSubmit: () => {
  }, children: (s) => /* @__PURE__ */ a.jsx(
    p,
    {
      chipOptions: t,
      formState: s,
      isEditable: !1,
      initialValues: s.initialValues,
      name: "labels",
      ...r
    }
  ) });
};
R.propTypes = {
  chipOptions: c,
  labels: b.array
};
export {
  R
};
//# sourceMappingURL=ReadOnlyChips-CK1USnQl.mjs.map
