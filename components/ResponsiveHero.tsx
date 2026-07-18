"use client"

import { useEffect, useState } from "react"
import HeroSection from "./HeroSection"
import HeroSectionMobile from "./HeroSectionMobile"

/**
 * Renders ONLY the hero variant that matches the real screen size,
 * instead of mounting both HeroSection and HeroSectionMobile and
 * hiding one with CSS. This stops the hidden variant's timers,
 * scroll listeners, image preloads, and third-party scripts
 * (GetYourGuide/Viator) from running when nobody can see it.
 *
 * We don't know the screen size until the browser tells us (on
 * mount), so for one split-second we render an empty placeholder
 * the same height as the hero — this avoids a layout jump and
 * avoids briefly mounting the wrong version.
 */
export default function ResponsiveHero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)")
    setIsMobile(mql.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener("change", handleChange)
    return () => mql.removeEventListener("change", handleChange)
  }, [])

  if (isMobile === null) {
    // Placeholder while we detect screen size — matches HeroSection's height
    // so the page doesn't jump once the real component mounts.
    return <div style={{ height: "85vh", minHeight: "648px" }} className="w-full bg-[#1A56F0] md:bg-transparent" />
  }

  return isMobile ? <HeroSectionMobile /> : <HeroSection />
}