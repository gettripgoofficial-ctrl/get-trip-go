"use client"

import { useState } from "react"
import { X, Plane, Building2, Ticket, Car } from "lucide-react"
import { cn } from "@/components/search/searchUtils"
import MobileFlightSearch from "./MobileFlightSearch"
import MobileHotelSearch from "./MobileHotelSearch"
import MobileActivitySearch from "./MobileActivitySearch"
import MobileTransferSearch from "./MobileTransferSearch"

export type MobileSearchTab = "Flights" | "Hotels" | "Activities" | "Transfers"

const TABS: { key: MobileSearchTab; label: string; icon: React.ReactNode }[] = [
  { key: "Flights", label: "Flights", icon: <Plane size={16} /> },
  { key: "Hotels", label: "Hotels", icon: <Building2 size={16} /> },
  { key: "Activities", label: "Things to do", icon: <Ticket size={16} /> },
  { key: "Transfers", label: "Transfers", icon: <Car size={16} /> },
]

export default function MobileSearchSheet({
  initialTab, onClose,
}: {
  initialTab: MobileSearchTab
  onClose: () => void
}) {
  const [activeTab, setActiveTab] = useState<MobileSearchTab>(initialTab)

  return (
    <div className="fixed inset-0 z-[99998] bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 flex-shrink-0">
        <h2 className="text-[15px] font-bold text-[#0e1f45]">Search & Enquire</h2>
        <button onClick={onClose} aria-label="Close search" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
          <X size={16} className="text-slate-600" />
        </button>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        className="flex gap-2 px-4 py-3 overflow-x-auto flex-shrink-0 border-b border-slate-100"
        style={{ scrollbarWidth: "none" }}
      >
        {TABS.map(({ key, label, icon }) => {
          const isActive = activeTab === key
          return (
            <button
              key={key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(key)}
              className={cn(
                "flex items-center gap-2 flex-shrink-0 pl-2.5 pr-3.5 py-2 rounded-full text-[13px] font-bold transition-all border",
                isActive
                  ? "bg-[#1A56F0] text-white border-[#1A56F0]"
                  : "bg-white text-slate-500 border-slate-200"
              )}
            >
              <span className={cn("w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0", isActive ? "bg-white/20" : "bg-slate-100")}>
                {icon}
              </span>
              {label}
            </button>
          )
        })}
      </div>

      {/* Active form */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {activeTab === "Flights" && <MobileFlightSearch />}
        {activeTab === "Hotels" && <MobileHotelSearch />}
        {activeTab === "Activities" && <MobileActivitySearch />}
        {activeTab === "Transfers" && <MobileTransferSearch />}
      </div>
    </div>
  )
}
