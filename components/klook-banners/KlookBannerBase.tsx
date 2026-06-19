"use client";

import { useEffect } from "react";

interface KlookBannerBaseProps {
  wid?: string;
  adid: string;
  width: number;
  height: number;
  lang?: string;
  bgtype?: string;
  prod?: string;
  className?: string;
}

export default function KlookBannerBase({
  wid = "123778",
  adid,
  width,
  height,
  lang = "en-BS",
  bgtype = "Hotel",
  prod = "banner",
  className = "",
}: KlookBannerBaseProps) {
  useEffect(() => {
    // Singleton guard — only inject Klook script once per page
    if (typeof window === "undefined") return;
    if ((window as any).__klookScriptLoaded) return;
    (window as any).__klookScriptLoaded = true;

    const d = document;
    const sc = "script";
    const u = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
    const s = d.createElement(sc) as HTMLScriptElement;
    const p = d.getElementsByTagName(sc)[0];
    s.type = "text/javascript";
    s.async = true;
    s.src = u;
    p.parentNode?.insertBefore(s, p);
  }, []);

  return (
    // Desktop only — hidden on mobile/tablet
    <div className={`hidden lg:block ${className}`}>
      <ins
        className="klk-aff-widget"
        data-wid={wid}
        data-bgtype={bgtype}
        data-adid={adid}
        data-lang={lang}
        data-prod={prod}
        data-width={String(width)}
        data-height={String(height)}
      >
        <a href="https://www.klook.com/?aid=">Klook.com</a>
      </ins>
    </div>
  );
}