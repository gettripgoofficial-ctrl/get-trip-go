"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { MapPin, Calendar, Users, ArrowLeftRight, ChevronDown, Plus, X, Minus } from "lucide-react"
import { cn } from "./searchUtils"

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

// ─── Autocomplete ─────────────────────────────────────────────────────────────
function AutocompleteInput({
  label, value, onChange, placeholder = "Search city",
}: {
  label: string
  value: string
  onChange: (val: string) => void
  placeholder?: string
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
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
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
    <div ref={wrapperRef} className="relative w-full">
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1">{label}</p>
      <input
        value={query}
        onChange={handleChange}
        onFocus={() => { if (results.length > 0) setOpen(true) }}
        placeholder={placeholder}
        className="text-[22px] font-bold text-[#0e1f45] bg-transparent outline-none w-full truncate placeholder:text-[18px] placeholder:font-normal placeholder:text-slate-300"
      />
      {loading && (
        <div className="absolute right-0 top-6 w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      )}
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

// ─── Date Field ───────────────────────────────────────────────────────────────
function DateField({
  label, value, onChange, placeholder = "Select date",
}: {
  label: string
  value: string
  onChange: (val: string) => void
  placeholder?: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  function formatDay(raw: string) {
    if (!raw) return ""
    return new Date(raw).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "2-digit" })
  }
  function formatWeekday(raw: string) {
    if (!raw) return ""
    return new Date(raw).toLocaleDateString("en-IN", { weekday: "long" })
  }

  return (
    <div
      className="relative w-full cursor-pointer"
      onClick={() => inputRef.current?.showPicker?.()}
    >
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1">
        {label} <ChevronDown size={11} className="text-slate-300" />
      </p>
      {value ? (
        <>
          <p className="text-[22px] font-bold text-[#0e1f45]">{formatDay(value)}</p>
          <p className="text-[11px] text-slate-400 mt-0.5">{formatWeekday(value)}</p>
        </>
      ) : (
        <p className="text-[15px] text-slate-300 mt-1">{placeholder}</p>
      )}
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

// ─── Travelers Field ──────────────────────────────────────────────────────────
function TravelersField({
  travelers, onChange,
}: {
  travelers: TravelersState
  onChange: (t: TravelersState) => void
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

  const total = travelers.adults + travelers.children + travelers.infants

  function counter(
    label: string, sub: string,
    val: number, min: number, max: number,
    set: (n: number) => void
  ) {
    return (
      <div className="flex flex-col items-center gap-1.5 flex-1">
        <p className="text-[12px] font-semibold text-[#0e1f45] whitespace-nowrap">{label}</p>
        <p className="text-[10px] text-slate-400 whitespace-nowrap">{sub}</p>
        <div className="flex items-center gap-2 mt-1">
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
    <div ref={wrapperRef} className="relative w-full cursor-pointer" onClick={() => setOpen(o => !o)}>
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1">
        Travellers & Class <ChevronDown size={11} className="text-slate-300" />
      </p>
      <p className="text-[22px] font-bold text-[#0e1f45]">{total} Traveller{total !== 1 ? "s" : ""}</p>
      <p className="text-[11px] text-slate-400 mt-0.5">{travelers.cabin}</p>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-[9999] p-4"
          style={{ minWidth: "520px" }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-start gap-2 pb-3 mb-3 border-b border-slate-100">
            {counter("Adults", "12+ years", travelers.adults, 1, 9,
              n => onChange({ ...travelers, adults: n }))}
            <div className="w-px self-stretch bg-slate-100" />
            {counter("Children", "2–11 years", travelers.children, 0, 8,
              n => onChange({ ...travelers, children: n }))}
            <div className="w-px self-stretch bg-slate-100" />
            {counter("Infants", "Under 2 years", travelers.infants, 0, travelers.adults,
              n => onChange({ ...travelers, infants: n }))}
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Cabin Class</p>
            <div className="flex gap-2">
              {CABIN_CLASSES.map(cls => (
                <button
                  key={cls}
                  onMouseDown={e => { e.preventDefault(); onChange({ ...travelers, cabin: cls }) }}
                  className={cn(
                    "flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold border-[1.5px] transition-all text-center whitespace-nowrap",
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
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
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
      {/* ── Trip type + tagline ── */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4" role="group" aria-label="Trip type">
          {(["One way", "Round trip", "Multi-city"] as TripType[]).map(type => (
            <label key={type} className="flex items-center gap-1.5 cursor-pointer select-none">
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={tripType === type}
                onChange={() => setTripType(type)}
                className="sr-only"
              />
              <div
                className={cn(
                  "w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                  tripType === type ? "border-[#1A56F0]" : "border-slate-300"
                )}
              >
                {tripType === type && <div className="w-1.5 h-1.5 rounded-full bg-[#1A56F0]" />}
              </div>
              <span
                className={cn(
                  "text-[13px] font-semibold leading-none transition-colors",
                  tripType === type ? "text-[#1A56F0]" : "text-slate-500"
                )}
              >
                {type}
              </span>
            </label>
          ))}
        </div>
        <span className="text-[11px] font-bold text-amber-500 hidden sm:block">
          Best Fares Guaranteed on Every Flight ✨
        </span>
      </div>

      {/* ── One Way ── */}
      {tripType === "One way" && (
        <>
          <div className="flex items-stretch border border-slate-200 rounded-xl overflow-visible mb-3">
            {/* From */}
            <div className="flex-1 px-4 py-3 border-r border-slate-200">
              <AutocompleteInput label="From" value={from} onChange={setFrom} placeholder="Origin city" />
            </div>

            {/* Swap */}
            <div className="flex items-center justify-center px-0 -mx-4 z-10">
              <button
                onClick={swap}
                className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
              >
                <ArrowLeftRight size={14} className="text-[#1A56F0]" />
              </button>
            </div>

            {/* To */}
            <div className="flex-1 px-4 py-3 border-r border-slate-200">
              <AutocompleteInput label="To" value={to} onChange={setTo} placeholder="Destination city" />
            </div>

            {/* Departure */}
            <div className="flex-1 px-4 py-3 border-r border-slate-200">
              <DateField label="Departure" value={depDate} onChange={setDepDate} />
            </div>

            {/* Return (disabled) */}
            <div className="flex-1 px-4 py-3 border-r border-slate-200 opacity-50">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1">
                Return <ChevronDown size={11} className="text-slate-300" />
              </p>
              <p className="text-[13px] text-slate-300 mt-2 leading-tight">Tap to add return<br/>date for bigger discounts</p>
            </div>

            {/* Travellers */}
            <div className="flex-1 px-4 py-3">
              <TravelersField travelers={travelers} onChange={setTravelers} />
            </div>
          </div>
        </>
      )}

      {/* ── Round Trip ── */}
      {tripType === "Round trip" && (
        <div className="flex items-stretch border border-slate-200 rounded-xl overflow-visible mb-3">
          <div className="flex-1 px-4 py-3 border-r border-slate-200">
            <AutocompleteInput label="From" value={from} onChange={setFrom} placeholder="Origin city" />
          </div>
          <div className="flex items-center justify-center px-0 -mx-4 z-10">
            <button
              onClick={swap}
              className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
            >
              <ArrowLeftRight size={14} className="text-[#1A56F0]" />
            </button>
          </div>
          <div className="flex-1 px-4 py-3 border-r border-slate-200">
            <AutocompleteInput label="To" value={to} onChange={setTo} placeholder="Destination city" />
          </div>
          <div className="flex-1 px-4 py-3 border-r border-slate-200">
            <DateField label="Departure" value={depDate} onChange={setDepDate} />
          </div>
          <div className="flex-1 px-4 py-3 border-r border-slate-200">
            <DateField label="Return" value={retDate} onChange={setRetDate} placeholder="Tap to add return" />
          </div>
          <div className="flex-1 px-4 py-3">
            <TravelersField travelers={travelers} onChange={setTravelers} />
          </div>
        </div>
      )}

      {/* ── Multi-city ── */}
      {tripType === "Multi-city" && (
        <div className="space-y-2 mb-3">
          {cities.map((leg, index) => {
            const isLast = index === cities.length - 1
            return (
              <div key={index} className="flex items-stretch border border-slate-200 rounded-xl overflow-visible">
                {/* FROM — 25% */}
                <div className="w-[25%] px-4 py-3 border-r border-slate-200 relative">
                  <AutocompleteInput label="From" value={leg.from} onChange={v => updateLeg(index, "from", v)} placeholder="Origin city" />
                </div>

                {/* Swap button */}
                <div className="flex items-center justify-center px-0 -mx-4 z-10">
                  <button
                    onClick={() => swapLeg(index)}
                    className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
                  >
                    <ArrowLeftRight size={14} className="text-[#1A56F0]" />
                  </button>
                </div>

                {/* TO — 25% */}
                <div className="w-[25%] px-4 py-3 border-r border-slate-200 relative">
                  <AutocompleteInput label="To" value={leg.to} onChange={v => updateLeg(index, "to", v)} placeholder="Destination city" />
                </div>

                {/* DEPARTURE — 25% */}
                <div className="w-[25%] px-4 py-3 border-r border-slate-200">
                  <DateField label="Departure" value={leg.date} onChange={v => updateLeg(index, "date", v)} />
                </div>

                {/* 4th column — 25%: Travellers on leg 0, Search button on last leg, empty otherwise */}
                <div className="w-[25%] px-4 py-3 flex items-center">
                  {index === 0 ? (
                    <TravelersField travelers={travelers} onChange={setTravelers} />
                  ) : isLast ? (
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-none bg-[#1A56F0] hover:bg-blue-700 text-white text-[13px] font-bold transition-all shadow-[0_4px_20px_rgba(26,86,240,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Unlock Best Deals
                    </button>
                  ) : (
                    /* empty spacer to keep column width */
                    <div className="w-full" />
                  )}
                  {/* Remove leg button for leg 2+ */}
                  {index > 1 && (
                    <button onClick={() => removeLeg(index)}
                      className="ml-2 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-400 transition-all flex-shrink-0">
                      <X size={12} />
                    </button>
                  )}
                </div>
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

      {/* ── Special Fares + Button row ── */}
      {tripType !== "Multi-city" ? (
        <div className="flex items-center gap-3">
          {/* Left: Special Fares — stretches to fill space left of button column */}
          <div className="flex items-center gap-2 overflow-x-auto flex-1 min-w-0" style={{ scrollbarWidth: "none" }}>
            <span className="text-[11px] font-bold text-slate-500 shrink-0 uppercase tracking-wider">Special<br/>Fares</span>
            {SPECIAL_FARES.map(fare => (
              <button key={fare.label} onClick={() => setActiveFare(fare.label)} aria-pressed={activeFare === fare.label}
                className={cn(
                  "shrink-0 px-4 py-2.5 rounded-lg border-[1.5px] text-left transition-all whitespace-nowrap",
                  activeFare === fare.label
                    ? "border-blue-400 text-[#1A56F0] bg-blue-50"
                    : "border-slate-200 text-slate-600 hover:border-blue-200"
                )}>
                <p className={cn("text-[13px] font-bold", activeFare === fare.label ? "text-[#1A56F0]" : "text-[#0e1f45]")}>{fare.label}</p>
                <p className="text-[11px] text-slate-400">{fare.sub}</p>
              </button>
            ))}
          </div>

          {/* Right: Button — same width as Travellers & Class column (flex-1 = ~20% of 5 cols) */}
          <div className="shrink-0" style={{ width: "calc(100% / 5)" }}>
            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-none bg-[#1A56F0] hover:bg-blue-700 text-white text-[14px] font-bold transition-all shadow-[0_4px_20px_rgba(26,86,240,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Unlock Best Deals
            </button>
          </div>
        </div>
      ) : (
        /* Multi-city: standalone special fares row (button is inside last leg row) */
        <div className="flex items-center gap-2 overflow-x-auto mb-4" style={{ scrollbarWidth: "none" }}>
          <span className="text-[11px] font-bold text-slate-500 shrink-0 uppercase tracking-wider">Special<br/>Fares</span>
          {SPECIAL_FARES.map(fare => (
            <button key={fare.label} onClick={() => setActiveFare(fare.label)} aria-pressed={activeFare === fare.label}
              className={cn(
                "shrink-0 px-4 py-2.5 rounded-lg border-[1.5px] text-left transition-all whitespace-nowrap",
                activeFare === fare.label
                  ? "border-blue-400 text-[#1A56F0] bg-blue-50"
                  : "border-slate-200 text-slate-600 hover:border-blue-200"
              )}>
              <p className={cn("text-[13px] font-bold", activeFare === fare.label ? "text-[#1A56F0]" : "text-[#0e1f45]")}>{fare.label}</p>
              <p className="text-[11px] text-slate-400">{fare.sub}</p>
            </button>
          ))}
        </div>
      )}

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