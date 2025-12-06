import { useState as c, useCallback as g } from "react";
import { useNavigate as h } from "react-router-dom";
import { aH as o } from "./main-CTYpZ6Nf.mjs";
const p = (t, f, a, e, l) => {
  const [u, m] = c(null), r = h();
  return [g(
    (s) => {
      l && s?.[a]?.length === 0 && t?.current?.[o] === 1 ? (r(f), m(Math.random())) : e && r(e);
    },
    [a, t, r, f, e, l]
  ), u];
};
export {
  p as u
};
//# sourceMappingURL=useRefreshAfterDelete.hook-BJMjzj5C.mjs.map
