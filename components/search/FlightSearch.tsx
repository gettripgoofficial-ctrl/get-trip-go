"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { MapPin, Calendar, Users, ArrowLeftRight, ChevronDown, Plus, X, Minus } from "lucide-react"
import { cn } from "./searchUtils"
import { FieldRow } from "./SearchField"

type TripType = "One way" | "Round trip" | "Multi-city"
type CabinClass = "Economy" | "Premium Economy" | "Business" | "First"

interface Destination {
  code: string
  name: string
  country: string
  state: string
  countryCode: string
  display: string
}

interface CityLeg {
  from: string
  to: string
  date: string
}

interface TravelersState {
  adults: number
  children: number
  infants: number
  cabin: CabinClass
}

const SPECIAL_FARES = [
  { label: "Regular",        sub: "Regular fares" },
  { label: "Student",        sub: "Up to ₹500 off" },
  { label: "Armed Forces",   sub: "Up to ₹1000 off" },
  { label: "Senior Citizen", sub: "Up to ₹1200 off" },
]

const CABIN_CLASSES: CabinClass[] = ["Economy", "Premium Economy", "Business", "First"]

const WA_NUMBER = "919667892504"

const WA_SVG = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// ─── Autocomplete Input ───────────────────────────────────────────────────────
function AutocompleteInput({
  label, value, onChange, placeholder = "Search city", noBorderRight = false,
}: {
  label: string
  value: string
  onChange: (val: string) => void
  placeholder?: string
  noBorderRight?: boolean
}) {
  const [query,   setQuery]   = useState(value)
  const [results, setResults] = useState<Destination[]>([])
  const [open,    setOpen]    = useState(false)
  const [loading, setLoading] = useState(false)
  const debounceRef           = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wrapperRef            = useRef<HTMLDivElement>(null)

  useEffect(() => { setQuery(value) }, [value])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const fetchResults = useCallback(async (q: string) => {
    if (q.length < 2) { setResults([]); setOpen(false); return }
    setLoading(true)
    try {
      const res  = await fetch(`/api/flights/locations?query=${encodeURIComponent(q)}`)
      const data = await res.json()
      setResults(data.destinations ?? [])
      setOpen(true)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setQuery(q)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchResults(q), 300)
  }

  function handleSelect(dest: Destination) {
    const display = `${dest.name} (${dest.countryCode})`
    setQuery(display)
    onChange(display)
    setOpen(false)
    setResults([])
  }

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative flex flex-1 items-center gap-2.5 px-3.5 py-3 min-w-0",
        "cursor-pointer hover:bg-blue-50/60 transition-colors",
        !noBorderRight && "border-r border-slate-100"
      )}
    >
      <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">{label}</p>
        <input
          value={query}
          onChange={handleChange}
          onFocus={() => { if (results.length > 0) setOpen(true) }}
          placeholder={placeholder}
          className="text-[14px] font-bold text-[#0e1f45] bg-transparent outline-none w-full truncate placeholder:font-normal placeholder:text-slate-400"
        />
      </div>
      {loading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      )}
      {/* Dropdown — rendered outside overflow:hidden via fixed positioning trick */}
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 z-[9999]">
          {results.map((dest, i) => (
            <button
              key={i}
              onMouseDown={() => handleSelect(dest)}
              className="w-full flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50 transition-colors text-left first:rounded-t-xl last:rounded-b-xl"
            >
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

// ─── Date Input ───────────────────────────────────────────────────────────────
function DateInput({
  label, value, onChange, placeholder = "Select date", noBorderRight = false,
}: {
  label: string
  value: string
  onChange: (val: string) => void
  placeholder?: string
  noBorderRight?: boolean
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  function formatDisplay(raw: string) {
    if (!raw) return ""
    const d = new Date(raw)
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", weekday: "short" })
  }

  return (
    <div
      className={cn(
        "relative flex flex-1 items-center gap-2.5 px-3.5 py-3 min-w-0",
        "cursor-pointer hover:bg-blue-50/60 transition-colors",
        !noBorderRight && "border-r border-slate-100"
      )}
      onClick={() => inputRef.current?.showPicker?.()}
    >
      <Calendar size={16} className="text-[#1A56F0] flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">{label}</p>
        <p className={cn("text-[14px] font-bold truncate", value ? "text-[#0e1f45]" : "text-slate-400 font-normal")}>
          {value ? formatDisplay(value) : placeholder}
        </p>
      </div>
      <input
        ref={inputRef}
        type="date"
        value={value}
        min={new Date().toISOString().split("T")[0]}
        onChange={e => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
      />
    </div>
  )
}

// ─── Swap Button ──────────────────────────────────────────────────────────────
function SwapButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Swap"
      className="flex-shrink-0 -mx-3.5 z-10 w-7 h-7 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center hover:bg-blue-100 transition-all shadow-sm"
    >
      <ArrowLeftRight size={13} className="text-[#1A56F0]" />
    </button>
  )
}

// ─── Travelers Picker ─────────────────────────────────────────────────────────
function TravelersField({
  travelers, onChange, noBorderRight = false,
}: {
  travelers: TravelersState
  onChange: (t: TravelersState) => void
  noBorderRight?: boolean
}) {
  const [open, setOpen] = useState(false)
  const wrapperRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const total   = travelers.adults + travelers.children + travelers.infants
  const summary = `${total} Traveler${total !== 1 ? "s" : ""} · ${travelers.cabin}`

  function counter(
    label: string, sub: string,
    val: number, min: number, max: number,
    set: (n: number) => void
  ) {
    return (
      <div className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
        <div>
          <p className="text-[13px] font-semibold text-[#0e1f45]">{label}</p>
          <p className="text-[11px] text-slate-400">{sub}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onMouseDown={e => { e.preventDefault(); if (val > min) set(val - 1) }}
            className={cn("w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center transition-all",
              val <= min ? "border-slate-200 text-slate-300" : "border-blue-300 text-[#1A56F0] hover:bg-blue-50")}
          >
            <Minus size={12} />
          </button>
          <span className="text-[14px] font-bold text-[#0e1f45] w-4 text-center">{val}</span>
          <button
            onMouseDown={e => { e.preventDefault(); if (val < max) set(val + 1) }}
            className={cn("w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center transition-all",
              val >= max ? "border-slate-200 text-slate-300" : "border-blue-300 text-[#1A56F0] hover:bg-blue-50")}
          >
            <Plus size={12} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative flex flex-1 items-center gap-2.5 px-3.5 py-3 min-w-0",
        "cursor-pointer hover:bg-blue-50/60 transition-colors",
        !noBorderRight && "border-r border-slate-100"
      )}
      onClick={() => setOpen(o => !o)}
    >
      <Users size={16} className="text-[#1A56F0] flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Travelers & Class</p>
        <p className="text-[14px] font-bold text-[#0e1f45] flex items-center gap-1 truncate">
          {summary} <ChevronDown size={12} className="text-slate-400 flex-shrink-0" />
        </p>
      </div>

      {open && (
        <div
          className="absolute top-full right-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 z-[9999] p-4"
          onClick={e => e.stopPropagation()}
        >
          {counter("Adults", "12+ years", travelers.adults, 1, 9,
            n => onChange({ ...travelers, adults: n }))}
          {counter("Children", "2–11 years", travelers.children, 0, 8,
            n => onChange({ ...travelers, children: n }))}
          {counter("Infants", "Under 2 years", travelers.infants, 0, travelers.adults,
            n => onChange({ ...travelers, infants: n }))}

          {/* Cabin class */}
          <div className="mt-3">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Cabin Class</p>
            <div className="grid grid-cols-2 gap-1.5">
              {CABIN_CLASSES.map(cls => (
                <button
                  key={cls}
                  onMouseDown={e => { e.preventDefault(); onChange({ ...travelers, cabin: cls }) }}
                  className={cn(
                    "px-3 py-2 rounded-lg text-[12px] font-semibold border-[1.5px] transition-all text-left",
                    travelers.cabin === cls
                      ? "bg-blue-50 border-blue-300 text-[#1A56F0]"
                      : "border-slate-200 text-slate-500 hover:border-blue-200"
                  )}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          <button
            onMouseDown={e => { e.preventDefault(); setOpen(false) }}
            className="mt-3 w-full py-2.5 rounded-xl bg-[#1A56F0] text-white text-[13px] font-bold hover:bg-blue-700 transition-all"
          >
            Done
          </button>
        </div>
      )}
    </div>
  )
}

// ─── WhatsApp Buttons ─────────────────────────────────────────────────────────
function WhatsAppButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex items-center px-3 flex-shrink-0">
      <button onClick={onClick} aria-label="Get Best Flight Deals"
        className={cn(
          "flex items-center gap-2 px-5 h-[44px]",
          "bg-[#25D366] hover:bg-[#20bb5a] active:bg-[#1aad50]",
          "text-white text-[13px] font-bold rounded-[12px]",
          "transition-all hover:scale-[1.02] active:scale-[0.97]",
          "shadow-[0_4px_14px_rgba(37,211,102,0.35)] whitespace-nowrap"
        )}>
        {WA_SVG} Get Best Flight Deals
      </button>
    </div>
  )
}

function WhatsAppButtonFull({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex flex-1 items-center justify-center px-3 flex-shrink-0">
      <button onClick={onClick} aria-label="Get Best Flight Deals"
        className={cn(
          "flex items-center gap-2 px-5 h-[44px] w-full justify-center",
          "bg-[#25D366] hover:bg-[#20bb5a] active:bg-[#1aad50]",
          "text-white text-[13px] font-bold rounded-[12px]",
          "transition-all hover:scale-[1.02] active:scale-[0.97]",
          "shadow-[0_4px_14px_rgba(37,211,102,0.35)] whitespace-nowrap"
        )}>
        {WA_SVG} Get Best Flight Deals
      </button>
    </div>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
interface ModalProps {
  tripType: TripType
  from: string
  to: string
  depDate: string
  retDate: string
  travelers: TravelersState
  activeFare: string
  cities: CityLeg[]
  onClose: () => void
}

function WhatsAppModal({ tripType, from, to, depDate, retDate, travelers, activeFare, cities, onClose }: ModalProps) {
  function fmt(raw: string) {
    if (!raw) return "Not selected"
    return new Date(raw).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", weekday: "short" })
  }

  const total       = travelers.adults + travelers.children + travelers.infants
  const travelerStr = `${travelers.adults} Adult${travelers.adults !== 1 ? "s" : ""}${travelers.children ? `, ${travelers.children} Child${travelers.children !== 1 ? "ren" : ""}` : ""}${travelers.infants ? `, ${travelers.infants} Infant${travelers.infants !== 1 ? "s" : ""}` : ""} · ${travelers.cabin}`

  function buildMessage() {
    let msg = `✈️ *New Flight Enquiry – GetTripGo*\n\n`
    msg += `*Trip Type:* ${tripType}\n`
    if (tripType === "Multi-city") {
      cities.forEach((leg, i) => {
        msg += `*Leg ${i + 1}:* ${leg.from || "?"} → ${leg.to || "?"}${leg.date ? ` on ${fmt(leg.date)}` : ""}\n`
      })
    } else {
      msg += `*From:* ${from || "Not selected"}\n`
      msg += `*To:* ${to || "Not selected"}\n`
      msg += `*Departure:* ${fmt(depDate)}\n`
      if (tripType === "Round trip") msg += `*Return:* ${fmt(retDate)}\n`
    }
    msg += `*Travelers:* ${travelerStr}\n`
    msg += `*Fare Type:* ${activeFare}\n\n`
    msg += `Please send me the best available deals. Thank you!`
    return encodeURIComponent(msg)
  }

  function openWhatsApp() {
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildMessage()}`, "_blank")
    onClose()
  }

  const summaryRows = tripType === "Multi-city"
    ? cities.map((leg, i) => ({ label: `Leg ${i + 1}`, value: `${leg.from || "?"} → ${leg.to || "?"}${leg.date ? ` · ${fmt(leg.date)}` : ""}` }))
    : [
        { label: "From",      value: from || "Not selected" },
        { label: "To",        value: to   || "Not selected" },
        { label: "Departure", value: fmt(depDate) },
        ...(tripType === "Round trip" ? [{ label: "Return", value: fmt(retDate) }] : []),
      ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X size={18} />
        </button>
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        <h2 className="text-[18px] font-bold text-[#0e1f45] text-center mb-1">We&apos;ll send you the best deals!</h2>
        <p className="text-[13px] text-slate-500 text-center mb-4 leading-relaxed">
          Our travel expert will review your request and send you the lowest fares on WhatsApp — usually within minutes.
        </p>
        <div className="bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 mb-4 space-y-2">
          {summaryRows.map(row => (
            <div key={row.label} className="flex justify-between text-[13px]">
              <span className="text-slate-400">{row.label}</span>
              <span className="font-semibold text-[#0e1f45]">{row.value}</span>
            </div>
          ))}
          <div className="flex justify-between text-[13px]">
            <span className="text-slate-400">Travelers</span>
            <span className="font-semibold text-[#0e1f45]">{travelerStr}</span>
          </div>
          <div className="flex justify-between text-[13px]">
            <span className="text-slate-400">Fare type</span>
            <span className="font-semibold text-[#0e1f45]">{activeFare}</span>
          </div>
        </div>
        <button onClick={openWhatsApp}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bb5a] text-white text-[14px] font-bold transition-all shadow-[0_4px_14px_rgba(37,211,102,0.35)] mb-2.5">
          {WA_SVG} Send My Enquiry on WhatsApp
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
export default function FlightSearch() {
  const [tripType,   setTripType]   = useState<TripType>("One way")
  const [activeFare, setActiveFare] = useState("Regular")
  const [from,       setFrom]       = useState("")
  const [to,         setTo]         = useState("")
  const [depDate,    setDepDate]    = useState("")
  const [retDate,    setRetDate]    = useState("")
  const [showModal,  setShowModal]  = useState(false)
  const [travelers,  setTravelers]  = useState<TravelersState>({
    adults: 1, children: 0, infants: 0, cabin: "Economy"
  })
  const [cities, setCities] = useState<CityLeg[]>([
    { from: "", to: "", date: "" },
    { from: "", to: "", date: "" },
  ])

  function swap() { const tmp = from; setFrom(to); setTo(tmp) }

  function swapLeg(i: number) {
    setCities(prev => prev.map((c, idx) => idx === i ? { ...c, from: c.to, to: c.from } : c))
  }

  function updateLeg(i: number, field: keyof CityLeg, value: string) {
    setCities(prev => prev.map((c, idx) => idx === i ? { ...c, [field]: value } : c))
  }

  function addLeg() {
    if (cities.length < 5) setCities(prev => [...prev, { from: "", to: "", date: "" }])
  }

  function removeLeg(i: number) {
    if (cities.length > 2) setCities(prev => prev.filter((_, idx) => idx !== i))
  }

  return (
    <div>
      {/* Trip type pills */}
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="flex gap-2" role="group" aria-label="Trip type">
          {(["One way", "Round trip", "Multi-city"] as TripType[]).map(type => (
            <button key={type} onClick={() => setTripType(type)} aria-pressed={tripType === type}
              className={cn(
                "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all",
                tripType === type
                  ? "bg-blue-50 text-[#1A56F0] border-blue-300"
                  : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#1A56F0]"
              )}>
              {type}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-bold text-amber-500 hidden sm:block">
          Best Fares Guaranteed on Every Flight ✨
        </span>
      </div>

      {/* ── One Way ── */}
      {tripType === "One way" && (
        <FieldRow className="mb-3">
          <AutocompleteInput label="From" value={from} onChange={setFrom} placeholder="Origin city" />
          <SwapButton onClick={swap} />
          <AutocompleteInput label="To" value={to} onChange={setTo} placeholder="Destination city" />
          <DateInput label="Departure" value={depDate} onChange={setDepDate} />
          <div className="flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 cursor-pointer hover:bg-blue-50/60 transition-colors">
            <Calendar size={16} className="text-slate-300 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Return</p>
              <p className="text-[12px] text-slate-400">Tap to add return</p>
            </div>
          </div>
          <TravelersField travelers={travelers} onChange={setTravelers} />
          <WhatsAppButton onClick={() => setShowModal(true)} />
        </FieldRow>
      )}

      {/* ── Round Trip ── */}
      {tripType === "Round trip" && (
        <FieldRow className="mb-3">
          <AutocompleteInput label="From" value={from} onChange={setFrom} placeholder="Origin city" />
          <SwapButton onClick={swap} />
          <AutocompleteInput label="To" value={to} onChange={setTo} placeholder="Destination city" />
          <DateInput label="Departure" value={depDate} onChange={setDepDate} />
          <DateInput label="Return" value={retDate} onChange={setRetDate} />
          <TravelersField travelers={travelers} onChange={setTravelers} />
          <WhatsAppButton onClick={() => setShowModal(true)} />
        </FieldRow>
      )}

      {/* ── Multi-city ── */}
      {tripType === "Multi-city" && (
        <div className="space-y-2 mb-3">
          {cities.map((leg, index) => {
            const isFirst = index === 0
            const isLast  = index === cities.length - 1
            return (
              <div key={index} className="flex items-stretch rounded-[14px] border-[1.5px] border-slate-200 overflow-visible">
                <AutocompleteInput label="From" value={leg.from} onChange={v => updateLeg(index, "from", v)} placeholder="Origin city" />
                <SwapButton onClick={() => swapLeg(index)} />
                <AutocompleteInput label="To" value={leg.to} onChange={v => updateLeg(index, "to", v)} placeholder="Destination city" />
                <DateInput label="Departure" value={leg.date} onChange={v => updateLeg(index, "date", v)} />
                {isFirst && (
                  <TravelersField travelers={travelers} onChange={setTravelers} />
                )}
                {index > 1 && (
                  <div className="flex items-center px-2 border-l border-slate-100 flex-shrink-0">
                    <button onClick={() => removeLeg(index)} aria-label="Remove leg"
                      className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-400 transition-all">
                      <X size={12} />
                    </button>
                  </div>
                )}
                {isLast && <WhatsAppButtonFull onClick={() => setShowModal(true)} />}
              </div>
            )
          })}
          {cities.length < 5 && (
            <button onClick={addLeg}
              className="flex items-center gap-1.5 text-[#1A56F0] text-[12px] font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-all border border-dashed border-blue-200">
              <Plus size={13} /> Add another city
            </button>
          )}
        </div>
      )}

      {/* Special fares */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-2" style={{ scrollbarWidth: "none" }}>
        <span className="text-[11px] font-bold text-slate-500 shrink-0 uppercase tracking-wider">Fares</span>
        {SPECIAL_FARES.map(fare => (
          <button key={fare.label} onClick={() => setActiveFare(fare.label)} aria-pressed={activeFare === fare.label}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-lg border-[1.5px] text-[12px] font-medium transition-all whitespace-nowrap",
              activeFare === fare.label
                ? "border-blue-400 text-[#1A56F0] bg-blue-50"
                : "border-slate-200 text-slate-500 hover:border-blue-200"
            )}>
            {fare.label}
            <span className="hidden sm:inline text-slate-400"> · {fare.sub}</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <WhatsAppModal
          tripType={tripType}
          from={from} to={to}
          depDate={depDate} retDate={retDate}
          travelers={travelers}
          activeFare={activeFare}
          cities={cities}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}