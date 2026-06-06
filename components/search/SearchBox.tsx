"use client"

import { Search, MapPin, Calendar, Users, ArrowLeftRight } from "lucide-react"

import FlightSearch   from "./FlightSearch"
import HotelSearch    from "./HotelSearch"
import HolidaySearch  from "./HolidaySearch"
import ActivitySearch from "./ActivitySearch"
import TransferSearch from "./TransferSearch"

// ─── Types ────────────────────────────────────────────────────────────────────

export type ServiceTab = "Flights" | "Hotels" | "Holidays" | "Activities" | "Transfers"

export interface SearchBoxProps {
  activeTab: ServiceTab
}

// ─── Inline cn helper ─────────────────────────────────────────────────────────

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ")
}

// ─── Shared CTA labels ────────────────────────────────────────────────────────

export const CTA_LABELS: Record<ServiceTab, string> = {
  Flights:    "Search Flights",
  Hotels:     "Search Hotels",
  Holidays:   "Search Holidays",
  Activities: "Find Activities",
  Transfers:  "Search Transfers",
}

// ─── Shared Field component ───────────────────────────────────────────────────

export function Field({
  icon, label, value, className, onClick,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-1 items-center gap-2.5 px-3.5 py-3",
        "border-r border-slate-100 last:border-r-0",
        "cursor-pointer hover:bg-blue-50/60 transition-colors min-w-0",
        className,
      )}
    >
      <span className="text-[#1A56F0] flex-shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">
          {label}
        </p>
        <div className="text-[14px] font-bold text-[#0e1f45] truncate leading-none">
          {value}
        </div>
      </div>
    </div>
  )
}

// ─── Shared SearchButton ──────────────────────────────────────────────────────

export function SearchButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div className="flex items-center px-3 flex-shrink-0">
      <button
        onClick={onClick}
        aria-label={label}
        className={cn(
          "flex items-center gap-2 px-5 h-[44px]",
          "bg-[#1A56F0] hover:bg-blue-700 active:bg-blue-800",
          "text-white text-[13px] font-bold rounded-[12px]",
          "transition-all hover:scale-[1.02] active:scale-[0.97]",
          "shadow-[0_4px_14px_rgba(26,86,240,0.30)] hover:shadow-[0_4px_18px_rgba(26,86,240,0.45)]",
          "whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A56F0]"
        )}
      >
        <Search size={14} aria-hidden="true" />
        {label}
      </button>
    </div>
  )
}

// ─── Shared FieldRow wrapper ──────────────────────────────────────────────────

export function FieldRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "flex items-stretch rounded-[14px] border-[1.5px] border-slate-200 overflow-hidden",
      className
    )}>
      {children}
    </div>
  )
}

// ─── Router ───────────────────────────────────────────────────────────────────

export default function SearchBox({ activeTab }: SearchBoxProps) {
  switch (activeTab) {
    case "Flights":    return <FlightSearch />
    case "Hotels":     return <HotelSearch />
    case "Holidays":   return <HolidaySearch />
    case "Activities": return <ActivitySearch />
    case "Transfers":  return <TransferSearch />
    default:           return null
  }
}