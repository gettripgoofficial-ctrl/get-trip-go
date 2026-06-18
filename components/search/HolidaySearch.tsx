"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Calendar, Users, Moon, ChevronDown, X, MessageCircle } from "lucide-react"
import { cn } from "./searchUtils"
import { FieldRow } from "./SearchField"

const HOLIDAY_TYPES = [
  { label: "Popular",    value: "popular" },
  { label: "Group",      value: "group" },
  { label: "Customized", value: "customize" },
  { label: "Theme",      value: "theme" },
  { label: "Honeymoon",  value: "honeymoon" },
  { label: "Family",     value: "family" },
  { label: "Adventure",  value: "adventure" },
]

const DURATIONS = ["Any", "1-3 Nights", "4-6 Nights", "7-9 Nights", "10-14 Nights", "15+ Nights"]

const WHATSAPP_NUMBER = "919667892504"

interface Suggestion {
  display: string
  name: string
  country: string
}

export default function HolidaySearch() {
  const [destination,     setDestination]     = useState("")
  const [suggestions,     setSuggestions]     = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [date,            setDate]            = useState("")
  const [duration,        setDuration]        = useState("Any")
  const [showDuration,    setShowDuration]    = useState(false)
  const [travelers,       setTravelers]       = useState(2)
  const [showTravelers,   setShowTravelers]   = useState(false)
  const [holidayType,     setHolidayType]     = useState("")
  const [showModal,       setShowModal]       = useState(false)

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function fetchSuggestions(q: string) {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (q.length < 2) { setSuggestions([]); return }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/hotels/locations?query=${encodeURIComponent(q)}`)
        const data = await res.json()
        setSuggestions(data.destinations ?? [])
      } catch { setSuggestions([]) }
    }, 300)
  }

  function handleSearch() {
    setShowModal(true)
  }

  function openWhatsApp() {
    const type = holidayType ? `Holiday Type: ${holidayType.charAt(0).toUpperCase() + holidayType.slice(1)}` : ""
    const msg = [
      "Hello! I'm looking for a holiday package.",
      `Destination: ${destination || "Flexible"}`,
      `Departure Date: ${date || "Flexible"}`,
      `Duration: ${duration}`,
      `Travelers: ${travelers}`,
      type,
    ].filter(Boolean).join("\n")

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank")
    setShowModal(false)
  }

  return (
    <div>
      {/* Holiday type pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {HOLIDAY_TYPES.map(type => (
          <button
            key={type.value}
            onClick={() => setHolidayType(holidayType === type.value ? "" : type.value)}
            aria-pressed={holidayType === type.value}
            className={cn(
              "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all whitespace-nowrap",
              holidayType === type.value
                ? "bg-blue-50 text-[#1A56F0] border-blue-300"
                : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#1A56F0]"
            )}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Fields row */}
      <FieldRow>

        {/* Destination autocomplete */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0">
          <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Destination</p>
            <input
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent"
              value={destination}
              onChange={e => { setDestination(e.target.value); fetchSuggestions(e.target.value); setShowSuggestions(true) }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              placeholder="Where to?"
            />
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 max-h-48 overflow-y-auto">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onMouseDown={() => { setDestination(s.display); setSuggestions([]); setShowSuggestions(false) }}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-slate-700 hover:bg-blue-50 hover:text-[#1A56F0] flex items-center gap-2"
                >
                  <MapPin size={13} className="text-slate-400 flex-shrink-0" />
                  <span className="truncate">{s.display}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Departure date */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0">
          <Calendar size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Departure</p>
            <input
              type="date"
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent cursor-pointer"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Duration picker */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0 cursor-pointer"
          onClick={() => { setShowDuration(!showDuration); setShowTravelers(false) }}>
          <Moon size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Duration</p>
            <div className="flex items-center gap-1 text-[14px] font-bold text-[#0e1f45]">
              {duration} <ChevronDown size={12} className="text-slate-400" />
            </div>
          </div>
          {showDuration && (
            <div className="absolute left-0 right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 overflow-hidden">
              {DURATIONS.map(d => (
                <button
                  key={d}
                  onMouseDown={() => { setDuration(d); setShowDuration(false) }}
                  className={cn(
                    "w-full text-left px-4 py-2.5 text-[13px] hover:bg-blue-50 hover:text-[#1A56F0]",
                    duration === d ? "text-[#1A56F0] font-semibold bg-blue-50" : "text-slate-700"
                  )}
                >
                  {d}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Travelers picker */}
        <div className="relative flex flex-none items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors cursor-pointer"
          onClick={() => { setShowTravelers(!showTravelers); setShowDuration(false) }}>
          <Users size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Travelers</p>
            <div className="flex items-center gap-1 text-[14px] font-bold text-[#0e1f45]">
              {travelers} {travelers === 1 ? "Person" : "Persons"} <ChevronDown size={12} className="text-slate-400" />
            </div>
          </div>
          {showTravelers && (
            <div className="absolute left-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 p-4 w-56"
              onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-slate-700">Travelers</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setTravelers(t => Math.max(1, t - 1))}
                    className="w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 font-bold text-lg leading-none">−</button>
                  <span className="text-[14px] font-bold text-[#0e1f45] w-4 text-center">{travelers}</span>
                  <button onClick={() => setTravelers(t => Math.min(20, t + 1))}
                    className="w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 font-bold text-lg leading-none">+</button>
                </div>
              </div>
              <button onClick={() => setShowTravelers(false)}
                className="mt-3 w-full text-center text-[12px] font-semibold text-[#1A56F0]">Done</button>
            </div>
          )}
        </div>

        {/* WhatsApp button */}
        <button
          onClick={handleSearch}
          className="flex-shrink-0 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-[13px] px-5 py-3 rounded-r-[13px] transition-colors whitespace-nowrap"
        >
          <MessageCircle size={16} />
          Get Best Deals
        </button>
      </FieldRow>

      {/* WhatsApp modal */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#0e1f45]">Your Holiday Enquiry</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 mb-4 space-y-2 text-[13px]">
              <div className="flex justify-between"><span className="text-slate-500">Destination</span><span className="font-semibold text-[#0e1f45]">{destination || "Flexible"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Departure</span><span className="font-semibold text-[#0e1f45]">{date || "Flexible"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Duration</span><span className="font-semibold text-[#0e1f45]">{duration}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Travelers</span><span className="font-semibold text-[#0e1f45]">{travelers} {travelers === 1 ? "Person" : "Persons"}</span></div>
              {holidayType && <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="font-semibold text-[#0e1f45] capitalize">{holidayType}</span></div>}
            </div>
            <p className="text-[12px] text-slate-500 mb-4 text-center">We'll send you the best holiday deals on WhatsApp!</p>
            <button onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors">
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  )
}