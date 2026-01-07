import { useEffect } from "react";
import React from "react";

export default function RolexInsert() {
  useEffect(() => {
    if (window.rlxSmrtClckLoaded) return; // evita múltiples cargas
    window.rlxSmrtClckLoaded = true;

    (function (b, c, a, d, f, g, h, k, l, m, n) {
      b[d] =
        b[d] ||
        function (p) {
          delete b[d];
          p.create(c.getElementById(f), [g, h, k, l, m, n]);
        };
      const e = c.getElementsByTagName(a)[0];
      a = c.createElement(a);
      a.async = true;
      a.src = "https://clock.rolex.com/smart-clock/static/js/invoker.js";
      e.parentNode.insertBefore(a, e);
    })(
      window,
      document,
      "script",
      "rlxSmrtClck",
      "rlxSmartClock",
      "a1efd3a5919bbefddcdd2baf3937f645", // ID Rolex
      "es",                               // idioma
      "https://casabarros.cl/rolex/",     // dominio
      "richright",                        // diseño
      "light",                            // tema
      "gold"                              // color
    );
  }, []);

  return (
    <div className="RolexInsertBanner">
      <div className="contentWrap">
        <script id="rlxSmartClock"></script>
      </div>
    </div>
  );
}