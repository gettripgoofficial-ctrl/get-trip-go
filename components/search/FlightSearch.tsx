"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, ArrowLeftRight, ChevronDown, Plus, X } from "lucide-react"
import { cn, Field, FieldRow, SearchButton } from "./SearchBox"

type TripType = "One way" | "Round trip" | "Multi-city"

interface CityLeg {
  from: string
  to: string
  date: string
}

const SPECIAL_FARES = [
  { label: "Regular",        sub: "Regular fares" },
  { label: "Student",        sub: "Up to ₹500 off" },
  { label: "Armed Forces",   sub: "Up to ₹1000 off" },
  { label: "Senior Citizen", sub: "Up to ₹1200 off" },
]

function SwapButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Swap origin and destination"
      className="flex-shrink-0 -mx-3.5 z-10 w-7 h-7 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center hover:bg-blue-100 transition-all shadow-sm"
    >
      <ArrowLeftRight size={13} className="text-[#1A56F0]" />
    </button>
  )
}

export default function FlightSearch() {
  const [tripType,   setTripType]   = useState<TripType>("One way")
  const [activeFare, setActiveFare] = useState("Regular")
  const [from,       setFrom]       = useState("Delhi (DEL)")
  const [to,         setTo]         = useState("Mumbai (BOM)")
  const [cities,     setCities]     = useState<CityLeg[]>([
    { from: "Delhi (DEL)",  to: "Mumbai (BOM)", date: "" },
    { from: "Mumbai (BOM)", to: "",             date: "" },
  ])

  function swap() {
    setFrom(f => { setTo(f); return to })
  }

  function swapLeg(index: number) {
    setCities(prev => prev.map((c, i) =>
      i === index ? { ...c, from: c.to, to: c.from } : c
    ))
  }

  function updateLeg(index: number, field: keyof CityLeg, value: string) {
    setCities(prev => prev.map((c, i) => i === index ? { ...c, [field]: value } : c))
  }

  function addLeg() {
    if (cities.length < 5)
      setCities(prev => [...prev, { from: "", to: "", date: "" }])
  }

  function removeLeg(index: number) {
    if (cities.length > 2)
      setCities(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      {/* Trip type pills */}
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="flex gap-2" role="group" aria-label="Trip type">
          {(["One way", "Round trip", "Multi-city"] as TripType[]).map(type => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              aria-pressed={tripType === type}
              className={cn(
                "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all",
                tripType === type
                  ? "bg-blue-50 text-[#1A56F0] border-blue-300"
                  : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#1A56F0]"
              )}
            >
              {type}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-semibold text-amber-500 hidden sm:block">
          Best Fares Guaranteed on Every Flight ✨
        </span>
      </div>

      {/* ── One Way ── */}
      {tripType === "One way" && (
        <FieldRow className="mb-3">
          <Field icon={<MapPin size={16} />} label="From" value={from} className="flex-1" />
          <SwapButton onClick={swap} />
          <Field icon={<MapPin size={16} />} label="To" value={to} className="flex-1" />
          <Field icon={<Calendar size={16} />} label="Departure" value="22 May, Thu" className="flex-1" />
          <div className="flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 cursor-pointer hover:bg-blue-50/60 transition-colors">
            <Calendar size={16} className="text-slate-300 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Return</p>
              <p className="text-[12px] text-slate-400">Tap to add return</p>
            </div>
          </div>
          <Field
            icon={<Users size={16} />}
            label="Travelers & Class"
            value={<span className="flex items-center gap-1">1 · Economy <ChevronDown size={12} className="text-slate-400" /></span>}
            className="flex-1"
          />
          <SearchButton label="Search Flights" />
        </FieldRow>
      )}

      {/* ── Round Trip ── */}
      {tripType === "Round trip" && (
        <FieldRow className="mb-3">
          <Field icon={<MapPin size={16} />} label="From" value={from} className="flex-1" />
          <SwapButton onClick={swap} />
          <Field icon={<MapPin size={16} />} label="To" value={to} className="flex-1" />
          <Field icon={<Calendar size={16} />} label="Departure" value="22 May, Thu" className="flex-1" />
          <Field icon={<Calendar size={16} />} label="Return" value="29 May, Thu" className="flex-1" />
          <Field
            icon={<Users size={16} />}
            label="Travelers & Class"
            value={<span className="flex items-center gap-1">1 · Economy <ChevronDown size={12} className="text-slate-400" /></span>}
            className="flex-1"
          />
          <SearchButton label="Search Flights" />
        </FieldRow>
      )}

      {/* ── Multi-city ── */}
      {tripType === "Multi-city" && (
        <div className="space-y-2 mb-3">
          {cities.map((leg, index) => {
            const isFirst = index === 0
            const isLast  = index === cities.length - 1

            return (
              <div key={index} className="flex items-stretch rounded-[14px] border-[1.5px] border-slate-200 overflow-hidden">

                {/* FROM — flex-1 */}
                <div className="flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 cursor-pointer hover:bg-blue-50/60 transition-colors min-w-0">
                  <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">From</p>
                    <p className="text-[14px] font-bold text-[#0e1f45] truncate">{leg.from || "Select city"}</p>
                  </div>
                </div>

                {/* SWAP */}
                <SwapButton onClick={() => swapLeg(index)} />

                {/* TO — flex-1 */}
                <div className="flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 cursor-pointer hover:bg-blue-50/60 transition-colors min-w-0">
                  <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">To</p>
                    <p className="text-[14px] font-bold text-[#0e1f45] truncate">{leg.to || "Select city"}</p>
                  </div>
                </div>

                {/* DEPARTURE — flex-1 */}
                <div className="flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 cursor-pointer hover:bg-blue-50/60 transition-colors min-w-0">
                  <Calendar size={16} className="text-[#1A56F0] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Departure</p>
                    <p className="text-[14px] font-bold text-[#0e1f45] truncate">{leg.date || "Select date"}</p>
                  </div>
                </div>

                {/* TRAVELERS (row 1) — flex-1 — OR SEARCH (last row) — flex-1 */}
                {isFirst && (
                  <div className="flex flex-1 items-center gap-2.5 px-3.5 py-3 cursor-pointer hover:bg-blue-50/60 transition-colors min-w-0">
                    <Users size={16} className="text-[#1A56F0] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Travelers & Class</p>
                      <p className="text-[14px] font-bold text-[#0e1f45] flex items-center gap-1">
                        1 · Economy <ChevronDown size={12} className="text-slate-400" />
                      </p>
                    </div>
                  </div>
                )}

                {/* Remove button for legs after first two */}
                {index > 1 && (
                  <div className="flex items-center px-2 border-l border-slate-100 flex-shrink-0">
                    <button
                      onClick={() => removeLeg(index)}
                      aria-label="Remove leg"
                      className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-400 transition-all"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}

                {/* Search button on last row — takes same space as Travelers on row 1 */}
                {isLast && (
                  <div className="flex flex-1 items-center justify-center px-3 flex-shrink-0">
                    <button
                      aria-label="Search Flights"
                      className={cn(
                        "flex items-center gap-2 px-5 h-[44px] w-full justify-center",
                        "bg-[#1A56F0] hover:bg-blue-700 active:bg-blue-800",
                        "text-white text-[13px] font-bold rounded-[12px]",
                        "transition-all hover:scale-[1.02] active:scale-[0.97]",
                        "shadow-[0_4px_14px_rgba(26,86,240,0.30)]",
                        "whitespace-nowrap"
                      )}
                    >
                      Search Flights
                    </button>
                  </div>
                )}

              </div>
            )
          })}

          {/* Add another city */}
          {cities.length < 5 && (
            <button
              onClick={addLeg}
              className="flex items-center gap-1.5 text-[#1A56F0] text-[12px] font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-all border border-dashed border-blue-200"
            >
              <Plus size={13} /> Add another city
            </button>
          )}
        </div>
      )}

      {/* Special fares */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-2" style={{ scrollbarWidth: "none" }}>
        <span className="text-[11px] font-bold text-slate-500 shrink-0 uppercase tracking-wider">Fares</span>
        {SPECIAL_FARES.map(fare => (
          <button
            key={fare.label}
            onClick={() => setActiveFare(fare.label)}
            aria-pressed={activeFare === fare.label}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-lg border-[1.5px] text-[12px] font-medium transition-all whitespace-nowrap",
              activeFare === fare.label
                ? "border-blue-400 text-[#1A56F0] bg-blue-50"
                : "border-slate-200 text-slate-500 hover:border-blue-200"
            )}
          >
            {fare.label}
            <span className="hidden sm:inline text-slate-400"> · {fare.sub}</span>
          </button>
        ))}
      </div>
    </div>
  )
}