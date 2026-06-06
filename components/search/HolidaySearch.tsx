"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Calendar, Users, Moon, ChevronDown } from "lucide-react"
import { cn, Field, FieldRow, SearchButton } from "./SearchBox"

const DESTINATIONS = [
  "Bali", "Thailand", "Kerala", "Singapore", "Kashmir", "Maldives",
  "Rajasthan", "Dubai", "Georgia", "Bhutan", "Vietnam", "Northeast India",
]

const HOLIDAY_TYPES = [
  { label: "Popular",    value: "popular",   href: "/popular-destinations" },
  { label: "Group",      value: "group",     href: "/group-departures" },
  { label: "Customized", value: "customize", href: "/customized-itineraries" },
  { label: "Theme",      value: "theme",     href: "/theme-holidays" },
  { label: "Honeymoon",  value: "honeymoon", href: "/popular-destinations" },
  { label: "Family",     value: "family",    href: "/popular-destinations" },
  { label: "Adventure",  value: "adventure", href: "/popular-destinations" },
]

const DURATIONS = ["Any", "1-3 Nights", "4-6 Nights", "7-9 Nights", "10-14 Nights", "15+ Nights"]

export default function HolidaySearch() {
  const router = useRouter()
  const [destination,      setDestination]      = useState("Bali")
  const [date,             setDate]             = useState("22 Jun, Sun")
  const [duration,         setDuration]         = useState("Any")
  const [travelers,        setTravelers]        = useState(2)
  const [holidayType,      setHolidayType]      = useState("")
  const [showSuggestions,  setShowSuggestions]  = useState(false)

  const filtered = DESTINATIONS.filter(d =>
    d.toLowerCase().includes(destination.toLowerCase())
  )

  function handleSearch() {
    if (destination) {
      router.push(`/popular-destinations?destination=${encodeURIComponent(destination)}`)
      return
    }
    const selected = HOLIDAY_TYPES.find(t => t.value === holidayType)
    router.push(selected ? selected.href : "/popular-destinations")
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
      <FieldRow className="relative">
        {/* Destination with autocomplete */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 cursor-pointer hover:bg-blue-50/60 transition-colors min-w-0">
          <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Destination</p>
            <input
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent"
              value={destination}
              onChange={e => { setDestination(e.target.value); setShowSuggestions(true) }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              placeholder="Where to?"
            />
          </div>
          {showSuggestions && destination && filtered.length > 0 && (
            <div className="absolute left-0 right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-50 mt-1 max-h-48 overflow-y-auto">
              {filtered.map(dest => (
                <button
                  key={dest}
                  onMouseDown={() => { setDestination(dest); setShowSuggestions(false) }}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-slate-700 hover:bg-blue-50 hover:text-[#1A56F0] flex items-center gap-2"
                >
                  <MapPin size={13} className="text-slate-400" /> {dest}
                </button>
              ))}
            </div>
          )}
        </div>

        <Field
          icon={<Calendar size={16} />}
          label="Departure"
          value={date}
          className="flex-1"
        />

        <Field
          icon={<Moon size={16} />}
          label="Duration"
          value={
            <span className="flex items-center gap-1">
              {duration} <ChevronDown size={12} className="text-slate-400" />
            </span>
          }
          className="flex-1"
        />

        <Field
          icon={<Users size={16} />}
          label="Travelers"
          value={
            <span className="flex items-center gap-1">
              {travelers} {travelers === 1 ? "Person" : "Persons"}
              <ChevronDown size={12} className="text-slate-400" />
            </span>
          }
          className="flex-none"
        />

        <SearchButton label="Search Holidays" onClick={handleSearch} />
      </FieldRow>
    </div>
  )
}