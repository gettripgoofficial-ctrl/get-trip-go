"use client"

import { useState } from "react"
import { Plane, MapPinned, Calendar, Users, ArrowLeftRight, Plus, X } from "lucide-react"
import { cn } from "@/components/search/searchUtils"
import {
  MobileAutocomplete, MobileDateField, MobileCounterRow, MobilePills,
  MobileCTAButton, MobileSummaryModal,
} from "./MobileSearchKit"

type TripType = "One way" | "Round trip" | "Multi-city"
type CabinClass = "Economy" | "Premium Economy" | "Business" | "First"

interface CityLeg { from: string; to: string; date: string }
interface TravelersState { adults: number; children: number; infants: number; cabin: CabinClass }

const SPECIAL_FARES = ["Regular", "Student", "Armed Forces", "Senior Citizen"]
const CABIN_CLASSES: CabinClass[] = ["Economy", "Premium Economy", "Business", "First"]
const WA_NUMBER = "919667892504"

export default function MobileFlightSearch() {
  const [tripType, setTripType] = useState<TripType>("One way")
  const [activeFare, setActiveFare] = useState("Regular")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [depDate, setDepDate] = useState("")
  const [retDate, setRetDate] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [travelers, setTravelers] = useState<TravelersState>({ adults: 1, children: 0, infants: 0, cabin: "Economy" })
  const [cities, setCities] = useState<CityLeg[]>([
    { from: "", to: "", date: "" },
    { from: "", to: "", date: "" },
  ])

  function swap() { const t = from; setFrom(to); setTo(t) }
  function updateLeg(i: number, field: keyof CityLeg, value: string) {
    setCities(prev => prev.map((c, idx) => idx === i ? { ...c, [field]: value } : c))
  }
  function addLeg() { if (cities.length < 5) setCities(prev => [...prev, { from: "", to: "", date: "" }]) }
  function removeLeg(i: number) { if (cities.length > 2) setCities(prev => prev.filter((_, idx) => idx !== i)) }

  function fmt(raw: string) {
    if (!raw) return "Not selected"
    return new Date(raw).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", weekday: "short" })
  }

  const travelerStr = `${travelers.adults} Adult${travelers.adults !== 1 ? "s" : ""}${travelers.children ? `, ${travelers.children} Child${travelers.children !== 1 ? "ren" : ""}` : ""}${travelers.infants ? `, ${travelers.infants} Infant${travelers.infants !== 1 ? "s" : ""}` : ""} · ${travelers.cabin}`

  const summaryRows = tripType === "Multi-city"
    ? cities.map((leg, i) => ({ label: `Leg ${i + 1}`, value: `${leg.from || "?"} → ${leg.to || "?"}${leg.date ? ` · ${fmt(leg.date)}` : ""}` }))
    : [
        { label: "From", value: from || "Not selected" },
        { label: "To", value: to || "Not selected" },
        { label: "Departure", value: fmt(depDate) },
        ...(tripType === "Round trip" ? [{ label: "Return", value: fmt(retDate) }] : []),
      ]

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
    setShowModal(false)
  }

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {(["One way", "Round trip", "Multi-city"] as TripType[]).map(type => (
          <label key={type} className="flex items-center gap-1.5">
            <input type="radio" name="tripType" checked={tripType === type} onChange={() => setTripType(type)} className="sr-only" />
            <div className={cn("w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center", tripType === type ? "border-[#1A56F0]" : "border-slate-300")}>
              {tripType === type && <div className="w-1.5 h-1.5 rounded-full bg-[#1A56F0]" />}
            </div>
            <span className={cn("text-[12px] font-semibold", tripType === type ? "text-[#1A56F0]" : "text-slate-500")}>{type}</span>
          </label>
        ))}
      </div>

      {tripType !== "Multi-city" && (
        <>
          <MobileAutocomplete icon={<Plane size={15} />} label="From" value={from} onChange={setFrom} endpoint="/api/flights/locations" placeholder="Origin city" />
          <div className="flex justify-center -my-1 mb-1">
            <button onClick={swap} className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm">
              <ArrowLeftRight size={13} className="text-[#1A56F0]" />
            </button>
          </div>
          <MobileAutocomplete icon={<MapPinned size={15} />} label="To" value={to} onChange={setTo} endpoint="/api/flights/locations" placeholder="Destination city" />
          <MobileDateField icon={<Calendar size={15} />} label="Departure" value={depDate} onChange={setDepDate} />
          {tripType === "Round trip" && (
            <MobileDateField icon={<Calendar size={15} />} label="Return" value={retDate} onChange={setRetDate} />
          )}
        </>
      )}

      {tripType === "Multi-city" && (
        <div className="space-y-2 mb-2.5">
          {cities.map((leg, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-bold text-slate-500 uppercase">Leg {i + 1}</p>
                {i > 1 && (
                  <button onClick={() => removeLeg(i)} className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                    <X size={12} />
                  </button>
                )}
              </div>
              <MobileAutocomplete icon={<Plane size={15} />} label="From" value={leg.from} onChange={v => updateLeg(i, "from", v)} endpoint="/api/flights/locations" placeholder="Origin city" />
              <MobileAutocomplete icon={<MapPinned size={15} />} label="To" value={leg.to} onChange={v => updateLeg(i, "to", v)} endpoint="/api/flights/locations" placeholder="Destination city" />
              <MobileDateField icon={<Calendar size={15} />} label="Date" value={leg.date} onChange={v => updateLeg(i, "date", v)} />
            </div>
          ))}
          {cities.length < 5 && (
            <button onClick={addLeg} className="flex items-center gap-1.5 text-[#1A56F0] text-[12px] font-semibold px-3 py-2 rounded-lg border border-dashed border-blue-200">
              <Plus size={13} /> Add another city
            </button>
          )}
        </div>
      )}

      <div className="border border-slate-200 rounded-xl px-3.5 py-3 mb-2.5">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1.5">
          <Users size={15} className="text-[#1A56F0]" /> Travellers & Cabin Class
        </p>
        <MobileCounterRow label="Adults" sub="12+ years" value={travelers.adults} min={1} max={9} onChange={n => setTravelers(t => ({ ...t, adults: n }))} />
        <MobileCounterRow label="Children" sub="2–11 years" value={travelers.children} min={0} max={8} onChange={n => setTravelers(t => ({ ...t, children: n }))} />
        <MobileCounterRow label="Infants" sub="Under 2 years" value={travelers.infants} min={0} max={travelers.adults} onChange={n => setTravelers(t => ({ ...t, infants: n }))} />
        <div className="pt-2 mt-1 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">Cabin Class</p>
          <MobilePills options={CABIN_CLASSES} active={travelers.cabin} onSelect={v => setTravelers(t => ({ ...t, cabin: v as CabinClass }))} />
        </div>
      </div>

      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Special Fares</p>
      <MobilePills options={SPECIAL_FARES} active={activeFare} onSelect={setActiveFare} />

      <MobileCTAButton label="Unlock Best Deals" onClick={() => setShowModal(true)} />

      {showModal && (
        <MobileSummaryModal
          heading="We'll send you the best deals!"
          subtext="Our travel expert will review your request and send you the lowest fares on WhatsApp — usually within minutes."
          rows={[...summaryRows, { label: "Travelers", value: travelerStr }, { label: "Fare type", value: activeFare }]}
          onConfirm={openWhatsApp}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
