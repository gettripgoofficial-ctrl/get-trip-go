"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MapPin, Calendar, Users, Plus, Minus, X, ChevronDown } from "lucide-react"
import { cn } from "./searchUtils"
import { FieldRow } from "./SearchField"

const HOTEL_TYPES = ["Any", "Budget", "3 Star", "4 Star", "5 Star", "Resort"]
const WA_NUMBER   = "919667892504"

const WA_SVG = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

interface Destination {
  code: string
  name: string
  country: string
  state: string
  countryCode: string
}

interface RoomsGuests {
  rooms: number
  adults: number
  children: number
}

// ─── City Autocomplete ────────────────────────────────────────────────────────
function CityInput({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [query,   setQuery]   = useState(value)
  const [results, setResults] = useState<Destination[]>([])
  const [open,    setOpen]    = useState(false)
  const [loading, setLoading] = useState(false)
  const debounceRef           = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wrapperRef            = useRef<HTMLDivElement>(null)

  useEffect(() => { setQuery(value) }, [value])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const fetchResults = useCallback(async (q: string) => {
    if (q.length < 2) { setResults([]); setOpen(false); return }
    setLoading(true)
    try {
      const res  = await fetch(`/api/hotels/locations?query=${encodeURIComponent(q)}`)
      const data = await res.json()
      setResults(data.destinations ?? [])
      setOpen(true)
    } catch { setResults([]) }
    finally { setLoading(false) }
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setQuery(q)
    onChange("")
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchResults(q), 300)
  }

  function handleSelect(dest: Destination) {
    const display = `${dest.name}, ${dest.country}`
    setQuery(display)
    onChange(display)
    setOpen(false)
    setResults([])
  }

  return (
    <div ref={wrapperRef} className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 min-w-0 cursor-pointer hover:bg-blue-50/60 transition-colors">
      <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">City or Hotel</p>
        <input
          value={query}
          onChange={handleChange}
          onFocus={() => { if (results.length > 0) setOpen(true) }}
          placeholder="Search city..."
          className="text-[14px] font-bold text-[#0e1f45] bg-transparent outline-none w-full placeholder:font-normal placeholder:text-slate-400"
        />
      </div>
      {loading && <div className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />}
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 z-[9999]">
          {results.map((dest, i) => (
            <button key={i} onMouseDown={() => handleSelect(dest)}
              className="w-full flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50 transition-colors text-left first:rounded-t-xl last:rounded-b-xl">
              <MapPin size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-[#0e1f45]">{dest.name}</p>
                <p className="text-[11px] text-slate-400">{dest.state ? `${dest.state}, ` : ""}{dest.country}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Date Field ───────────────────────────────────────────────────────────────
function DateField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  function fmt(raw: string) {
    if (!raw) return ""
    return new Date(raw).toLocaleDateString("en-IN", { day: "2-digit", month: "short", weekday: "short" })
  }
  return (
    <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 min-w-0 cursor-pointer hover:bg-blue-50/60 transition-colors"
      onClick={() => inputRef.current?.showPicker?.()}>
      <Calendar size={16} className="text-[#1A56F0] flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">{label}</p>
        <p className={cn("text-[14px] font-bold truncate", value ? "text-[#0e1f45]" : "text-slate-400 font-normal")}>
          {value ? fmt(value) : "Select date"}
        </p>
      </div>
      <input ref={inputRef} type="date" value={value} min={new Date().toISOString().split("T")[0]}
        onChange={e => onChange(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
    </div>
  )
}

// ─── Rooms & Guests Picker ────────────────────────────────────────────────────
function RoomsGuestsField({ value, onChange }: { value: RoomsGuests; onChange: (v: RoomsGuests) => void }) {
  const [open, setOpen] = useState(false)
  const wrapperRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const summary = `${value.rooms} Room${value.rooms > 1 ? "s" : ""} · ${value.adults + value.children} Guest${value.adults + value.children > 1 ? "s" : ""}`

  function counter(label: string, sub: string, val: number, min: number, max: number, set: (n: number) => void) {
    return (
      <div className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
        <div>
          <p className="text-[13px] font-semibold text-[#0e1f45]">{label}</p>
          <p className="text-[11px] text-slate-400">{sub}</p>
        </div>
        <div className="flex items-center gap-3">
          <button onMouseDown={e => { e.preventDefault(); if (val > min) set(val - 1) }}
            className={cn("w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center transition-all",
              val <= min ? "border-slate-200 text-slate-300" : "border-blue-300 text-[#1A56F0] hover:bg-blue-50")}>
            <Minus size={12} />
          </button>
          <span className="text-[14px] font-bold text-[#0e1f45] w-4 text-center">{val}</span>
          <button onMouseDown={e => { e.preventDefault(); if (val < max) set(val + 1) }}
            className={cn("w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center transition-all",
              val >= max ? "border-slate-200 text-slate-300" : "border-blue-300 text-[#1A56F0] hover:bg-blue-50")}>
            <Plus size={12} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div ref={wrapperRef} className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 min-w-0 cursor-pointer hover:bg-blue-50/60 transition-colors"
      onClick={() => setOpen(o => !o)}>
      <Users size={16} className="text-[#1A56F0] flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Rooms & Guests</p>
        <p className="text-[14px] font-bold text-[#0e1f45] flex items-center gap-1 truncate">
          {summary} <ChevronDown size={12} className="text-slate-400 flex-shrink-0" />
        </p>
      </div>
      {open && (
        <div className="absolute top-full right-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 z-[9999] p-4"
          onClick={e => e.stopPropagation()}>
          {counter("Rooms", "Number of rooms", value.rooms, 1, 9, n => onChange({ ...value, rooms: n }))}
          {counter("Adults", "12+ years", value.adults, 1, 9, n => onChange({ ...value, adults: n }))}
          {counter("Children", "Under 12 years", value.children, 0, 8, n => onChange({ ...value, children: n }))}
          <button onMouseDown={e => { e.preventDefault(); setOpen(false) }}
            className="mt-3 w-full py-2.5 rounded-xl bg-[#1A56F0] text-white text-[13px] font-bold hover:bg-blue-700 transition-all">
            Done
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function WhatsAppModal({ city, checkIn, checkOut, roomsGuests, hotelType, onClose }: {
  city: string; checkIn: string; checkOut: string
  roomsGuests: RoomsGuests; hotelType: string; onClose: () => void
}) {
  function fmt(raw: string) {
    if (!raw) return "Not selected"
    return new Date(raw).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", weekday: "short" })
  }

  const guestStr = `${roomsGuests.rooms} Room${roomsGuests.rooms > 1 ? "s" : ""} · ${roomsGuests.adults} Adult${roomsGuests.adults > 1 ? "s" : ""}${roomsGuests.children ? ` · ${roomsGuests.children} Child${roomsGuests.children > 1 ? "ren" : ""}` : ""}`

  function buildMessage() {
    let msg = `🏨 *New Hotel Enquiry – GetTripGo*\n\n`
    msg += `*City:* ${city || "Not selected"}\n`
    msg += `*Hotel Type:* ${hotelType}\n`
    msg += `*Check-in:* ${fmt(checkIn)}\n`
    msg += `*Check-out:* ${fmt(checkOut)}\n`
    msg += `*Rooms & Guests:* ${guestStr}\n\n`
    msg += `Please send me the best available hotel deals. Thank you!`
    return encodeURIComponent(msg)
  }

  function openWhatsApp() {
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildMessage()}`, "_blank")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X size={18} />
        </button>
        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        <h2 className="text-[18px] font-bold text-[#0e1f45] text-center mb-1">We&apos;ll find you the best hotels!</h2>
        <p className="text-[13px] text-slate-500 text-center mb-4 leading-relaxed">
          Our travel expert will send you the best hotel deals on WhatsApp — usually within minutes.
        </p>
        <div className="bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 mb-4 space-y-2">
          {[
            { label: "City",         value: city || "Not selected" },
            { label: "Hotel Type",   value: hotelType },
            { label: "Check-in",     value: fmt(checkIn) },
            { label: "Check-out",    value: fmt(checkOut) },
            { label: "Rooms & Guests", value: guestStr },
          ].map(row => (
            <div key={row.label} className="flex justify-between text-[13px]">
              <span className="text-slate-400">{row.label}</span>
              <span className="font-semibold text-[#0e1f45]">{row.value}</span>
            </div>
          ))}
        </div>
        <button onClick={openWhatsApp}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-none bg-[#1A56F0] hover:bg-blue-700 text-white text-[14px] font-bold transition-all shadow-[0_4px_14px_rgba(37,211,102,0.35)] mb-2.5">
          Submit Enquiry
        </button>
        <button onClick={onClose}
          className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-500 text-[13px] font-medium hover:bg-slate-50 transition-all">
          Go back &amp; edit details
        </button>
        <p className="text-[11px] text-slate-400 text-center mt-3">🔒 Your details are only shared with our travel expert</p>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function HotelSearch() {
  const [hotelType,   setHotelType]   = useState("Any")
  const [city,        setCity]        = useState("")
  const [checkIn,     setCheckIn]     = useState("")
  const [checkOut,    setCheckOut]    = useState("")
  const [roomsGuests, setRoomsGuests] = useState<RoomsGuests>({ rooms: 1, adults: 2, children: 0 })
  const [showModal,   setShowModal]   = useState(false)

  return (
    <div>
      {/* Hotel type pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {HOTEL_TYPES.map(type => (
          <button key={type} onClick={() => setHotelType(type)} aria-pressed={hotelType === type}
            className={cn(
              "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all whitespace-nowrap",
              hotelType === type
                ? "bg-blue-50 text-[#1A56F0] border-blue-300"
                : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#1A56F0]"
            )}>
            {type}
          </button>
        ))}
      </div>

      {/* Fields */}
      <FieldRow>
        <CityInput value={city} onChange={setCity} />
        <DateField label="Check-in"  value={checkIn}  onChange={setCheckIn} />
        <DateField label="Check-out" value={checkOut} onChange={setCheckOut} />
        <RoomsGuestsField value={roomsGuests} onChange={setRoomsGuests} />
        <div className="flex items-center px-3 flex-shrink-0">
          <button onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-5 h-[44px] bg-[#1A56F0] hover:bg-blue-700 active:bg-blue-800 text-white text-[13px] font-bold rounded-none transition-all hover:scale-[1.02] whitespace-nowrap">
            Unlock Best Deals
          </button>
        </div>
      </FieldRow>

      {showModal && (
        <WhatsAppModal
          city={city} checkIn={checkIn} checkOut={checkOut}
          roomsGuests={roomsGuests} hotelType={hotelType}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}