"use client"

import { useState } from "react"
import { MapPin, MapPinned, Calendar, Clock, Users, ArrowLeftRight } from "lucide-react"
import {
  MobileAutocomplete, MobileDateField, MobileTimeField, MobileCounterRow, MobilePills,
  MobileCTAButton, MobileSummaryModal,
} from "./MobileSearchKit"

const TRANSFER_TYPES = ["Airport Transfer", "Hotel Transfer", "Point to Point", "Hourly Hire"]
const WA_NUMBER = "919667892504"

export default function MobileTransferSearch() {
  const [transferType, setTransferType] = useState("Airport Transfer")
  const [pickup, setPickup] = useState("")
  const [drop, setDrop] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [passengers, setPassengers] = useState(2)
  const [showModal, setShowModal] = useState(false)

  function swap() { const t = pickup; setPickup(drop); setDrop(t) }

  function buildMessage() {
    const msg = [
      "Hello! I need a transfer.",
      `Transfer Type: ${transferType}`,
      `Pickup: ${pickup || "Not specified"}`,
      `Drop-off: ${drop || "Not specified"}`,
      `Date: ${date || "Flexible"}`,
      `Time: ${time || "Flexible"}`,
      `Passengers: ${passengers}`,
    ].filter(Boolean).join("\n")
    return encodeURIComponent(msg)
  }

  function openWhatsApp() {
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildMessage()}`, "_blank")
    setShowModal(false)
  }

  return (
    <div>
      <MobilePills options={TRANSFER_TYPES} active={transferType} onSelect={setTransferType} />

      <MobileAutocomplete icon={<MapPin size={15} />} label="Pickup" value={pickup} onChange={setPickup} endpoint="/api/hotels/locations" placeholder="Pickup location" />
      <div className="flex justify-center -my-1 mb-1">
        <button onClick={swap} aria-label="Swap pickup and drop-off locations" className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm">
          <ArrowLeftRight size={13} className="text-[#1A56F0]" />
        </button>
      </div>
      <MobileAutocomplete icon={<MapPinned size={15} />} label="Drop-off" value={drop} onChange={setDrop} endpoint="/api/hotels/locations" placeholder="Drop-off location" />
      <MobileDateField icon={<Calendar size={15} />} label="Date" value={date} onChange={setDate} />
      <MobileTimeField icon={<Clock size={15} />} label="Time" value={time} onChange={setTime} />

      <div className="border border-slate-200 rounded-xl px-3.5 py-3 mb-2.5">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1.5">
          <Users size={15} className="text-[#1A56F0]" /> Passengers
        </p>
        <MobileCounterRow label="Passengers" value={passengers} min={1} max={20} onChange={setPassengers} />
      </div>

      <MobileCTAButton label="Search Transfers" onClick={() => setShowModal(true)} />

      {showModal && (
        <MobileSummaryModal
          heading="We'll arrange your transfer!"
          subtext="Our travel expert will confirm the best transfer option on WhatsApp — usually within minutes."
          rows={[
            { label: "Type", value: transferType },
            { label: "Pickup", value: pickup || "Not specified" },
            { label: "Drop-off", value: drop || "Not specified" },
            { label: "Date", value: date || "Flexible" },
            { label: "Time", value: time || "Flexible" },
            { label: "Passengers", value: String(passengers) },
          ]}
          onConfirm={openWhatsApp}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
