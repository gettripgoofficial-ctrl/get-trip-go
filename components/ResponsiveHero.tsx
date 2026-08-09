import dynamic from "next/dynamic"
import HeroSectionMobile from "./HeroSectionMobile"

const HeroSection = dynamic(() => import("./HeroSection"), {
  loading: () => <div style={{ height: "85vh", minHeight: "648px" }} className="hidden md:block w-full bg-[#1A56F0]" />,
})

/**
 * Renders BOTH hero variants in the initial server-rendered HTML.
 * Visibility is controlled purely by CSS (HeroSectionMobile's own
 * internal "md:hidden" classes, and a "hidden md:block" wrapper here
 * for the desktop version) instead of waiting for client-side JS to
 * detect screen size and mount the right one. This lets the browser
 * discover and paint real content immediately from the initial HTML,
 * instead of blocking on JS hydration first.
 */
export default function ResponsiveHero() {
  return (
    <>
      <div className="hidden md:block">
        <HeroSection />
      </div>
      <HeroSectionMobile />
    </>
  )
}
