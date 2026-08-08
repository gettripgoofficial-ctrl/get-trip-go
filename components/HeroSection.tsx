"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plane,
  Hotel,
  Palmtree,
  Ticket,
  Car,
} from "lucide-react"
import SearchBox from "./search/SearchBox"
import { ServiceTab } from "./search/searchUtils"

interface Tab {
  name: string
  icon: React.ReactNode
}

const TABS: Tab[] = [
  { name: "Flights", icon: <Plane size={18} /> },
  { name: "Hotels", icon: <Hotel size={18} /> },
  { name: "Holidays", icon: <Palmtree size={18} /> },
  { name: "Activities", icon: <Ticket size={18} /> },
  { name: "Transfers", icon: <Car size={18} /> },
]

const BG_IMAGES = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
]

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("Flights")
  const [bgIndex, setBgIndex] = useState(0)
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)

  // Preload all hero images on mount so later transitions never hit
  // an un-cached image (which caused the black flash mid-slideshow).
  useEffect(() => {
    BG_IMAGES.forEach(src => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % BG_IMAGES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  function handleTabKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "ArrowRight") setActiveTab(TABS[(index + 1) % TABS.length].name as ServiceTab)
    if (e.key === "ArrowLeft")  setActiveTab(TABS[(index - 1 + TABS.length) % TABS.length].name as ServiceTab)
  }

  return (
    <section
      className="w-full relative overflow-visible"
      style={{
        height: "85vh",
        minHeight: "648px",
        backgroundColor: firstImageLoaded ? "transparent" : "#1A56F0",
      }}
      aria-label="Travel search"
    >
      {/* First hero image */}
      <img
        src={BG_IMAGES[0]}
        alt=""
        fetchPriority="high"
        decoding="async"
        onLoad={() => setFirstImageLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ display: bgIndex === 0 ? "block" : "none" }}
      />

      {/* Background slideshow (for index > 0, after first paint) */}
      <AnimatePresence>
        {bgIndex !== 0 && (
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url("${BG_IMAGES[bgIndex]}")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </AnimatePresence>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setBgIndex(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: bgIndex === i ? "20px" : "7px",
              height: "7px",
              backgroundColor: bgIndex === i ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Search — centered both axes */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[2] px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Travel services"
            className="flex gap-2 sm:gap-3 mb-3 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {TABS.map(({ name, icon }, i) => {
              const isActive = activeTab === name
              return (
                <button
                  key={name}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${name}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={e => handleTabKeyDown(e, i)}
                  onClick={() => setActiveTab(name as ServiceTab)}
                  className="flex items-center gap-2.5 flex-shrink-0 pl-2 pr-4 py-2 rounded-2xl text-[13px] font-bold tracking-[0.01em] transition-all duration-200 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  style={{
                    backgroundColor: isActive ? "#ffffff" : "transparent",
                    color: isActive ? "#1A56F0" : "#fff",
                    borderColor: isActive
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.3)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: isActive ? "#EEF3FF" : "rgba(255,255,255,0.15)",
                      color: isActive ? "#1A56F0" : "#fff",
                    }}
                  >
                    {icon}
                  </span>
                  {name}
                </button>
              )
            })}
          </div>

          {/* Search card */}
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-label={`${activeTab} search`}
            className="rounded-2xl p-4 sm:p-5 min-h-[260px]"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            }}
          >
            <SearchBox activeTab={activeTab} />
          </div>
        </motion.div>
      </div>

    </section>
  )
}