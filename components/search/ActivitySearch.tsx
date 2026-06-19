"use client"

import { useState, useRef } from "react"
import { MapPin, Calendar, Users, ChevronDown, X, MessageCircle } from "lucide-react"
import { cn } from "./searchUtils"
import { FieldRow } from "./SearchField"

const CATEGORIES = ["Adventure", "Cultural", "Food & Drink", "Nature", "Water Sports", "Family", "Nightlife"]

const WHATSAPP_NUMBER = "919667892504"

interface Suggestion {
  display: string
  name: string
  country: string
}

export default function ActivitySearch() {
  const [category,        setCategory]        = useState("")
  const [query,           setQuery]           = useState("")
  const [suggestions,     setSuggestions]     = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [date,            setDate]            = useState("")
  const [persons,         setPersons]         = useState(2)
  const [showPersons,     setShowPersons]     = useState(false)
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

  function openWhatsApp() {
    const msg = [
      "Hello! I'm interested in booking an activity.",
      `Destination/Activity: ${query || "Flexible"}`,
      `Date: ${date || "Flexible"}`,
      `Persons: ${persons}`,
      category ? `Category: ${category}` : "",
    ].filter(Boolean).join("\n")

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank")
    setShowModal(false)
  }

  return (
    <div>
      {/* Category pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(category === cat ? "" : cat)}
            aria-pressed={category === cat}
            className={cn(
              "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all whitespace-nowrap",
              category === cat
                ? "bg-blue-50 text-[#1A56F0] border-blue-300"
                : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#1A56F0]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <FieldRow>

        {/* Destination / Activity autocomplete */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0">
          <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Activity or Destination</p>
            <input
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent"
              value={query}
              onChange={e => { setQuery(e.target.value); fetchSuggestions(e.target.value); setShowSuggestions(true) }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              placeholder="Search destination or activity"
            />
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 max-h-48 overflow-y-auto">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onMouseDown={() => { setQuery(s.display); setSuggestions([]); setShowSuggestions(false) }}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-slate-700 hover:bg-blue-50 hover:text-[#1A56F0] flex items-center gap-2"
                >
                  <MapPin size={13} className="text-slate-400 flex-shrink-0" />
                  <span className="truncate">{s.display}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0">
          <Calendar size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Date</p>
            <input
              type="date"
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent cursor-pointer"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Persons picker */}
        <div className="relative flex flex-none items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors cursor-pointer"
          onClick={() => setShowPersons(!showPersons)}>
          <Users size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Persons</p>
            <div className="flex items-center gap-1 text-[14px] font-bold text-[#0e1f45]">
              {persons} {persons === 1 ? "Person" : "Persons"} <ChevronDown size={12} className="text-slate-400" />
            </div>
          </div>
          {showPersons && (
            <div className="absolute left-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 p-4 w-56"
              onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-slate-700">Persons</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setPersons(p => Math.max(1, p - 1))}
                    className="w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 font-bold text-lg leading-none">−</button>
                  <span className="text-[14px] font-bold text-[#0e1f45] w-4 text-center">{persons}</span>
                  <button onClick={() => setPersons(p => Math.min(20, p + 1))}
                    className="w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 font-bold text-lg leading-none">+</button>
                </div>
              </div>
              <button onClick={() => setShowPersons(false)}
                className="mt-3 w-full text-center text-[12px] font-semibold text-[#1A56F0]">Done</button>
            </div>
          )}
        </div>

        {/* WhatsApp button */}
        <button
          onClick={() => setShowModal(true)}
          className="flex-shrink-0 flex items-center gap-2 bg-[#1A56F0] hover:bg-blue-700 text-white font-bold text-[13px] px-5 py-3 rounded-none transition-colors whitespace-nowrap"
        >
          Find Activities
        </button>
      </FieldRow>

      {/* WhatsApp modal */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#0e1f45]">Your Activity Enquiry</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 mb-4 space-y-2 text-[13px]">
              <div className="flex justify-between"><span className="text-slate-500">Destination/Activity</span><span className="font-semibold text-[#0e1f45]">{query || "Flexible"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-semibold text-[#0e1f45]">{date || "Flexible"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Persons</span><span className="font-semibold text-[#0e1f45]">{persons}</span></div>
              {category && <div className="flex justify-between"><span className="text-slate-500">Category</span><span className="font-semibold text-[#0e1f45]">{category}</span></div>}
            </div>
            <p className="text-[12px] text-slate-500 mb-4 text-center">We'll find the best activities for you shortly</p>
            <button onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#1A56F0] hover:bg-blue-700 text-white font-bold py-3 rounded-none transition-colors">
              Confirm Enquiry
            </button>
          </div>
        </div>
      )}
    </div>
  )
}