"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MapPin, ChevronDown, X, Minus, Plus } from "lucide-react"
import { cn } from "@/components/search/searchUtils"

// ─── Field wrapper (stacked, full width) ───────────────────────────────────────
export function MobileField({
  icon, label, children, onClick,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="border border-slate-200 rounded-xl px-3.5 py-3 mb-2.5"
    >
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1.5">
        <span className="text-[#1A56F0]">{icon}</span>
        {label}
      </p>
      {children}
    </div>
  )
}

// ─── Autocomplete (destination/city search) ────────────────────────────────────
interface Suggestion {
  display?: string
  name: string
  country: string
  state?: string
  countryCode?: string
}

export function MobileAutocomplete({
  icon, label, value, onChange, endpoint, placeholder = "Search",
}: {
  icon: React.ReactNode
  label: string
  value: string
  onChange: (val: string) => void
  endpoint: string
  placeholder?: string
}) {
  const [query, setQuery] = useState(value)
  const [results, setResults] = useState<Suggestion[]>([])
  const [open, setOpen] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setQuery(value) }, [value])

  const fetchResults = useCallback(async (q: string) => {
    if (q.length < 2) { setResults([]); setOpen(false); return }
    try {
      const res = await fetch(`${endpoint}?query=${encodeURIComponent(q)}`)
      const data = await res.json()
      setResults(data.destinations ?? [])
      setOpen(true)
    } catch {
      setResults([])
    }
  }, [endpoint])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setQuery(q)
    onChange(q)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchResults(q), 300)
  }

  function handleSelect(dest: Suggestion) {
    const display = dest.display ?? `${dest.name}${dest.countryCode ? ` (${dest.countryCode})` : ""}`
    setQuery(display)
    onChange(display)
    setOpen(false)
    setResults([])
  }

  return (
    <MobileField icon={icon} label={label}>
      <input
        value={query}
        onChange={handleChange}
        onFocus={() => { if (results.length > 0) setOpen(true) }}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder={placeholder}
        className="text-[15px] font-bold text-[#0e1f45] w-full outline-none bg-transparent placeholder:font-normal placeholder:text-slate-300"
      />
      {open && results.length > 0 && (
        <div className="mt-2 -mx-3.5 border-t border-slate-100 max-h-52 overflow-y-auto">
          {results.map((s, i) => (
            <button
              key={i}
              onMouseDown={() => handleSelect(s)}
              className="w-full flex items-start gap-2.5 px-3.5 py-2.5 hover:bg-blue-50 text-left"
            >
              <MapPin size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-[#0e1f45]">{s.name}</p>
                <p className="text-[11px] text-slate-400">{s.state ? `${s.state}, ` : ""}{s.country}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </MobileField>
  )
}

// ─── Date / Time fields ─────────────────────────────────────────────────────────
export function MobileDateField({
  icon, label, value, onChange,
}: {
  icon: React.ReactNode
  label: string
  value: string
  onChange: (val: string) => void
}) {
  const ref = useRef<HTMLInputElement>(null)
  function fmt(raw: string) {
    if (!raw) return ""
    return new Date(raw).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", weekday: "short" })
  }
  return (
    <MobileField icon={icon} label={label} onClick={() => ref.current?.showPicker?.()}>
      <div className="relative">
        <p className="text-[15px] font-bold text-[#0e1f45]">
          {value ? fmt(value) : <span className="text-slate-300 font-normal">Select date</span>}
        </p>
        <input
          ref={ref}
          type="date"
          value={value}
          min={new Date().toISOString().split("T")[0]}
          onChange={e => onChange(e.target.value)}
          className="absolute inset-0 opacity-0"
        />
      </div>
    </MobileField>
  )
}

export function MobileTimeField({
  icon, label, value, onChange,
}: {
  icon: React.ReactNode
  label: string
  value: string
  onChange: (val: string) => void
}) {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <MobileField icon={icon} label={label} onClick={() => ref.current?.showPicker?.()}>
      <div className="relative">
        <p className="text-[15px] font-bold text-[#0e1f45]">
          {value || <span className="text-slate-300 font-normal">Select time</span>}
        </p>
        <input
          ref={ref}
          type="time"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="absolute inset-0 opacity-0"
        />
      </div>
    </MobileField>
  )
}

// ─── Counter (persons / rooms / travelers) ─────────────────────────────────────
export function MobileCounterRow({
  label, sub, value, min, max, onChange,
}: {
  label: string
  sub?: string
  value: number
  min: number
  max: number
  onChange: (n: number) => void
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-[13px] font-semibold text-[#0e1f45]">{label}</p>
        {sub && <p className="text-[11px] text-slate-400">{sub}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => value > min && onChange(value - 1)}
          className={cn(
            "w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center",
            value <= min ? "border-slate-200 text-slate-300" : "border-blue-300 text-[#1A56F0]"
          )}
        >
          <Minus size={13} />
        </button>
        <span className="text-[14px] font-bold text-[#0e1f45] w-5 text-center">{value}</span>
        <button
          onClick={() => value < max && onChange(value + 1)}
          className={cn(
            "w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center",
            value >= max ? "border-slate-200 text-slate-300" : "border-blue-300 text-[#1A56F0]"
          )}
        >
          <Plus size={13} />
        </button>
      </div>
    </div>
  )
}

// ─── Pills (category / type selectors) ──────────────────────────────────────────
export function MobilePills({
  options, active, onSelect,
}: {
  options: string[]
  active: string
  onSelect: (val: string) => void
}) {
  return (
    <div className="flex gap-2 mb-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          aria-pressed={active === opt}
          className={cn(
            "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all whitespace-nowrap flex-shrink-0",
            active === opt
              ? "bg-blue-50 text-[#1A56F0] border-blue-300"
              : "bg-white text-slate-500 border-slate-200"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

// ─── Sticky bottom CTA ───────────────────────────────────────────────────────────
export function MobileCTAButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3.5 rounded-xl bg-[#1A56F0] active:bg-blue-800 text-white text-[14px] font-bold transition-all mt-1"
    >
      {label}
    </button>
  )
}

// ─── Summary / WhatsApp confirmation modal ───────────────────────────────────────
export function MobileSummaryModal({
  heading, subtext, rows, onConfirm, onClose,
}: {
  heading: string
  subtext: string
  rows: { label: string; value: string }[]
  onConfirm: () => void
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[999999] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-sm p-6 relative">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-slate-400">
          <X size={18} />
        </button>
        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        <h2 className="text-[17px] font-bold text-[#0e1f45] text-center mb-1">{heading}</h2>
        <p className="text-[13px] text-slate-500 text-center mb-4 leading-relaxed">{subtext}</p>
        <div className="bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 mb-4 space-y-2">
          {rows.map(row => (
            <div key={row.label} className="flex justify-between text-[13px] gap-3">
              <span className="text-slate-400 flex-shrink-0">{row.label}</span>
              <span className="font-semibold text-[#0e1f45] text-right truncate">{row.value}</span>
            </div>
          ))}
        </div>
        <button
          onClick={onConfirm}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#1A56F0] active:bg-blue-800 text-white text-[14px] font-bold transition-all mb-2.5"
        >
          Submit Enquiry
        </button>
        <button onClick={onClose} className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-500 text-[13px] font-medium">
          Go back &amp; edit details
        </button>
        <p className="text-[11px] text-slate-400 text-center mt-3">🔒 Your details are only shared with our travel expert</p>
      </div>
    </div>
  )
}
