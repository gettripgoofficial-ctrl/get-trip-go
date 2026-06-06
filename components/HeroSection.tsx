"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Plane,
  Hotel,
  Palmtree,
  Ticket,
  Car,
  Star,
} from "lucide-react"
import SearchBox, { ServiceTab } from "./search/SearchBox"

interface Tab {
  name: string
  icon: React.ReactNode
  activeColor: string   // bg color when active
  iconBg: string        // icon circle bg when inactive
  iconColor: string     // icon color when inactive
}

const TABS: Tab[] = [
  {
    name: "Flights",
    icon: <Plane size={18} />,
    activeColor: "#1A56F0",
    iconBg: "#EEF3FF",
    iconColor: "#1A56F0",
  },
  {
    name: "Hotels",
    icon: <Hotel size={18} />,
    activeColor: "#1A56F0",
    iconBg: "#EDFAF3",
    iconColor: "#16A34A",
  },
  {
    name: "Holidays",
    icon: <Palmtree size={18} />,
    activeColor: "#1A56F0",
    iconBg: "#FFF7ED",
    iconColor: "#EA8C1E",
  },
  {
    name: "Activities",
    icon: <Ticket size={18} />,
    activeColor: "#1A56F0",
    iconBg: "#F3EEFF",
    iconColor: "#7C3AED",
  },
  {
    name: "Transfers",
    icon: <Car size={18} />,
    activeColor: "#1A56F0",
    iconBg: "#FFFBEB",
    iconColor: "#D97706",
  },
]

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("Flights")

  function handleTabKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "ArrowRight") setActiveTab(TABS[(index + 1) % TABS.length].name as ServiceTab)
    if (e.key === "ArrowLeft")  setActiveTab(TABS[(index - 1 + TABS.length) % TABS.length].name as ServiceTab)
  }

  return (
    <section
      className="w-full bg-[#F8F9FF] pt-28 sm:pt-32 pb-28 px-4"
      aria-label="Travel search"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* Hero text */}
        <div className="flex flex-col items-center gap-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm"
          >
            <Star size={13} className="text-[#F5A623] fill-[#F5A623]" aria-hidden="true" />
            Trusted by Thousands of Travelers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[#0A1628] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl"
          >
            Discover The World{" "}
            <span className="text-[#1A56F0]">With Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Compare flights, hotels, holidays, activities and transfers in one place.
          </motion.p>
        </div>

        {/* Tabs + Search card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="w-full"
        >
          {/* Service tabs */}
          <div
            role="tablist"
            aria-label="Travel services"
            className="flex gap-2 sm:gap-3 mb-4 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {TABS.map(({ name, icon, activeColor, iconBg, iconColor }, i) => {
              const isActive = activeTab === name
              return (
                <button
                  key={name}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${name}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={e => handleTabKeyDown(e, i)}
                  onClick={() => setActiveTab(name)}
                  style={
                    isActive
                      ? { backgroundColor: activeColor, color: "#fff" }
                      : { backgroundColor: "#fff", color: "#0A1628" }
                  }
                  className={[
                    "flex items-center gap-2.5 flex-shrink-0 pl-2 pr-4 py-2 rounded-2xl",
                    "text-[13px] font-bold tracking-[0.01em] transition-all duration-200",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A56F0]",
                    "border",
                    isActive
                      ? "border-transparent shadow-md shadow-blue-500/20"
                      : "border-slate-200 hover:border-blue-200 hover:shadow-sm",
                  ].join(" ")}
                >
                  {/* Icon circle */}
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={
                      isActive
                        ? { backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }
                        : { backgroundColor: iconBg, color: iconColor }
                    }
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
            className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-[0_8px_32px_rgba(26,86,240,0.08)]"
          >
            <SearchBox activeTab={activeTab} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}