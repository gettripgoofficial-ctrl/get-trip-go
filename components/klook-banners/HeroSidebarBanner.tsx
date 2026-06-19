/**
 * HeroSidebarBanner
 * Placement: RIGHT SIDE of HeroSection, vertically centered, sticky
 * Type: SIDEBAR (120×600 skyscraper)
 * Affiliate: Klook
 *
 * Usage in HeroSection.tsx — add as sibling inside the hero wrapper:
 *   import HeroSidebarBanner from "@/components/klook-banners/HeroSidebarBanner";
 *   <HeroSidebarBanner />
 *
 * The parent hero container must have `relative` positioning (it already does).
 */

import KlookBannerBase from "./KlookBannerBase";

export default function HeroSidebarBanner() {
  return (
    <div className="hidden lg:block absolute right-4 xl:right-6 top-1/2 z-[2]" style={{ transform: "translateY(calc(-50% + 40px))" }}>
      <KlookBannerBase
        adid="1309744" // ← swap with your Klook adid from dashboard
        width={120}
        height={600}
        bgtype="Hotel"
      />
    </div>
  );
}