import { useRef as p, useMemo as f, useEffect as u } from "react";
import { useParams as l } from "react-router-dom";
import { e as d } from "./main-CTYpZ6Nf.mjs";
const q = ({ fetchData: s, fetchTags: r, filters: t, requestTrigger: i } = {}) => {
  const a = l(), e = p(!1), o = f(
    () => d.debounce(({ filters: m, fetchData: c, fetchTags: n } = {}) => {
      e.current || (n && n(), c(m), e.current = !0);
    }),
    []
  );
  u(() => {
    o({
      filters: t,
      fetchData: s,
      fetchTags: r
    });
  }, [s, r, t, o]), u(
    () => () => {
      e.current = !1;
    },
    [a.projectName, i]
  );
};
export {
  q as u
};
//# sourceMappingURL=useInitialTableFetch.hook-D3_Uekdv.mjs.map
