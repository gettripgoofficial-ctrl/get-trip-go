"use client"

import { useState } from "react"
import { Building2, Calendar, Users } from "lucide-react"
import {
  MobileAutocomplete, MobileDateField, MobileCounterRow, MobilePills,
  MobileCTAButton, MobileSummaryModal,
} from "./MobileSearchKit"

interface RoomsGuests { rooms: number; adults: number; children: number }

const HOTEL_TYPES = ["Any", "Budget", "3 Star", "4 Star", "5 Star", "Resort"]
const WA_NUMBER = "919667892504"

export default function MobileHotelSearch() {
  const [hotelType, setHotelType] = useState("Any")
  const [city, setCity] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [roomsGuests, setRoomsGuests] = useState<RoomsGuests>({ rooms: 1, adults: 2, children: 0 })
  const [showModal, setShowModal] = useState(false)

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
    setShowModal(false)
  }

  return (
    <div>
      <MobilePills options={HOTEL_TYPES} active={hotelType} onSelect={setHotelType} />

      <MobileAutocomplete icon={<Building2 size={15} />} label="City" value={city} onChange={setCity} endpoint="/api/hotels/locations" placeholder="Where are you staying?" />
      <MobileDateField icon={<Calendar size={15} />} label="Check-in" value={checkIn} onChange={setCheckIn} />
      <MobileDateField icon={<Calendar size={15} />} label="Check-out" value={checkOut} onChange={setCheckOut} />

      <div className="border border-slate-200 rounded-xl px-3.5 py-3 mb-2.5">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1.5">
          <Users size={15} className="text-[#1A56F0]" /> Rooms & Guests
        </p>
        <MobileCounterRow label="Rooms" value={roomsGuests.rooms} min={1} max={8} onChange={n => setRoomsGuests(r => ({ ...r, rooms: n }))} />
        <MobileCounterRow label="Adults" value={roomsGuests.adults} min={1} max={16} onChange={n => setRoomsGuests(r => ({ ...r, adults: n }))} />
        <MobileCounterRow label="Children" value={roomsGuests.children} min={0} max={8} onChange={n => setRoomsGuests(r => ({ ...r, children: n }))} />
      </div>

      <MobileCTAButton label="Unlock Best Deals" onClick={() => setShowModal(true)} />

      {showModal && (
        <MobileSummaryModal
          heading="We'll find you the best hotels!"
          subtext="Our travel expert will send you the best hotel deals on WhatsApp — usually within minutes."
          rows={[
            { label: "City", value: city || "Not selected" },
            { label: "Hotel Type", value: hotelType },
            { label: "Check-in", value: fmt(checkIn) },
            { label: "Check-out", value: fmt(checkOut) },
            { label: "Rooms & Guests", value: guestStr },
          ]}
          onConfirm={openWhatsApp}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
