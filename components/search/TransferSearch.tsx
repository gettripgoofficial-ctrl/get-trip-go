"use client"

import { useState, useRef } from "react"
import { MapPin, Calendar, Clock, Users, ArrowLeftRight, ChevronDown, X, MessageCircle } from "lucide-react"
import { cn } from "./searchUtils"
import { FieldRow } from "./SearchField"

const TRANSFER_TYPES = ["Airport Transfer", "Hotel Transfer", "Point to Point", "Hourly Hire"]

const WHATSAPP_NUMBER = "919667892504"

interface Suggestion {
  display: string
  name: string
  country: string
}

export default function TransferSearch() {
  const [transferType,      setTransferType]      = useState("Airport Transfer")
  const [pickup,            setPickup]            = useState("")
  const [pickupSuggestions, setPickupSuggestions] = useState<Suggestion[]>([])
  const [showPickup,        setShowPickup]        = useState(false)
  const [drop,              setDrop]              = useState("")
  const [dropSuggestions,   setDropSuggestions]   = useState<Suggestion[]>([])
  const [showDrop,          setShowDrop]          = useState(false)
  const [date,              setDate]              = useState("")
  const [time,              setTime]              = useState("")
  const [passengers,        setPassengers]        = useState(2)
  const [showPassengers,    setShowPassengers]    = useState(false)
  const [showModal,         setShowModal]         = useState(false)

  const pickupDebounce = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dropDebounce   = useRef<ReturnType<typeof setTimeout> | null>(null)

  function fetchPickup(q: string) {
    if (pickupDebounce.current) clearTimeout(pickupDebounce.current)
    if (q.length < 2) { setPickupSuggestions([]); return }
    pickupDebounce.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/hotels/locations?query=${encodeURIComponent(q)}`)
        const data = await res.json()
        setPickupSuggestions(data.destinations ?? [])
      } catch { setPickupSuggestions([]) }
    }, 300)
  }

  function fetchDrop(q: string) {
    if (dropDebounce.current) clearTimeout(dropDebounce.current)
    if (q.length < 2) { setDropSuggestions([]); return }
    dropDebounce.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/hotels/locations?query=${encodeURIComponent(q)}`)
        const data = await res.json()
        setDropSuggestions(data.destinations ?? [])
      } catch { setDropSuggestions([]) }
    }, 300)
  }

  function swap() {
    const tmp = pickup
    setPickup(drop)
    setDrop(tmp)
  }

  function openWhatsApp() {
    const msg = [
      "Hello! I need a transfer.",
      `Transfer Type: ${transferType}`,
      `Pickup: ${pickup || "Not specified"}`,
      `Drop-off: ${drop || "Not specified"}`,
      `Date: ${date || "Flexible"}`,
      `Time: ${time || "Flexible"}`,
      `Passengers: ${passengers}`,
    ].filter(Boolean).join("\n")

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank")
    setShowModal(false)
  }

  return (
    <div>
      {/* Transfer type pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {TRANSFER_TYPES.map(type => (
          <button
            key={type}
            onClick={() => setTransferType(type)}
            aria-pressed={transferType === type}
            className={cn(
              "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all whitespace-nowrap",
              transferType === type
                ? "bg-blue-50 text-[#1A56F0] border-blue-300"
                : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#1A56F0]"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      <FieldRow>

        {/* Pickup autocomplete */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0">
          <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Pickup</p>
            <input
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent"
              value={pickup}
              onChange={e => { setPickup(e.target.value); fetchPickup(e.target.value); setShowPickup(true) }}
              onFocus={() => setShowPickup(true)}
              onBlur={() => setTimeout(() => setShowPickup(false), 150)}
              placeholder="Pickup location"
            />
          </div>
          {showPickup && pickupSuggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 max-h-48 overflow-y-auto">
              {pickupSuggestions.map((s, i) => (
                <button
                  key={i}
                  onMouseDown={() => { setPickup(s.display); setPickupSuggestions([]); setShowPickup(false) }}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-slate-700 hover:bg-blue-50 hover:text-[#1A56F0] flex items-center gap-2"
                >
                  <MapPin size={13} className="text-slate-400 flex-shrink-0" />
                  <span className="truncate">{s.display}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Swap button */}
        <button
          onClick={swap}
          aria-label="Swap pickup and drop"
          className="flex-shrink-0 -mx-3.5 z-10 w-7 h-7 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center hover:bg-blue-100 transition-all shadow-sm"
        >
          <ArrowLeftRight size={13} className="text-[#1A56F0]" />
        </button>

        {/* Drop-off autocomplete */}
        <div className="relative flex flex-1 items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0">
          <MapPin size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Drop-off</p>
            <input
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent"
              value={drop}
              onChange={e => { setDrop(e.target.value); fetchDrop(e.target.value); setShowDrop(true) }}
              onFocus={() => setShowDrop(true)}
              onBlur={() => setTimeout(() => setShowDrop(false), 150)}
              placeholder="Drop-off location"
            />
          </div>
          {showDrop && dropSuggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 max-h-48 overflow-y-auto">
              {dropSuggestions.map((s, i) => (
                <button
                  key={i}
                  onMouseDown={() => { setDrop(s.display); setDropSuggestions([]); setShowDrop(false) }}
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

        {/* Time */}
        <div className="relative flex flex-none items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors min-w-0">
          <Clock size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div className="min-w-0 w-full">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Time</p>
            <input
              type="time"
              className="text-[14px] font-bold text-[#0e1f45] w-full outline-none bg-transparent cursor-pointer"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
          </div>
        </div>

        {/* Passengers picker */}
        <div className="relative flex flex-none items-center gap-2.5 px-3.5 py-3 border-r border-slate-100 hover:bg-blue-50/60 transition-colors cursor-pointer"
          onClick={() => setShowPassengers(!showPassengers)}>
          <Users size={16} className="text-[#1A56F0] flex-shrink-0" />
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">Passengers</p>
            <div className="flex items-center gap-1 text-[14px] font-bold text-[#0e1f45]">
              {passengers} Pax <ChevronDown size={12} className="text-slate-400" />
            </div>
          </div>
          {showPassengers && (
            <div className="absolute right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl z-[9999] mt-1 p-4 w-56"
              onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-slate-700">Passengers</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setPassengers(p => Math.max(1, p - 1))}
                    className="w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 font-bold text-lg leading-none">−</button>
                  <span className="text-[14px] font-bold text-[#0e1f45] w-4 text-center">{passengers}</span>
                  <button onClick={() => setPassengers(p => Math.min(20, p + 1))}
                    className="w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 font-bold text-lg leading-none">+</button>
                </div>
              </div>
              <button onClick={() => setShowPassengers(false)}
                className="mt-3 w-full text-center text-[12px] font-semibold text-[#1A56F0]">Done</button>
            </div>
          )}
        </div>

        {/* WhatsApp button */}
        <button
          onClick={() => setShowModal(true)}
          className="flex-shrink-0 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-[13px] px-5 py-3 rounded-r-[13px] transition-colors whitespace-nowrap"
        >
          <MessageCircle size={16} />
          Search Transfers
        </button>
      </FieldRow>

      {/* WhatsApp modal */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#0e1f45]">Your Transfer Enquiry</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 mb-4 space-y-2 text-[13px]">
              <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="font-semibold text-[#0e1f45]">{transferType}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Pickup</span><span className="font-semibold text-[#0e1f45] text-right max-w-[60%] truncate">{pickup || "Not specified"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Drop-off</span><span className="font-semibold text-[#0e1f45] text-right max-w-[60%] truncate">{drop || "Not specified"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-semibold text-[#0e1f45]">{date || "Flexible"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Time</span><span className="font-semibold text-[#0e1f45]">{time || "Flexible"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Passengers</span><span className="font-semibold text-[#0e1f45]">{passengers} Pax</span></div>
            </div>
            <p className="text-[12px] text-slate-500 mb-4 text-center">We'll arrange the best transfer for you on WhatsApp!</p>
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