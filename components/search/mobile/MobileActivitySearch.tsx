"use client"

import { useState } from "react"
import { MapPin, Calendar, Users } from "lucide-react"
import {
  MobileAutocomplete, MobileDateField, MobileCounterRow, MobilePills,
  MobileCTAButton, MobileSummaryModal,
} from "./MobileSearchKit"

const CATEGORIES = ["Adventure", "Cultural", "Food & Drink", "Nature", "Water Sports", "Family", "Nightlife"]
const WA_NUMBER = "919667892504"

export default function MobileActivitySearch() {
  const [category, setCategory] = useState("")
  const [query, setQuery] = useState("")
  const [date, setDate] = useState("")
  const [persons, setPersons] = useState(2)
  const [showModal, setShowModal] = useState(false)

  function buildMessage() {
    const msg = [
      "Hello! I'm interested in booking an activity.",
      `Destination/Activity: ${query || "Flexible"}`,
      `Date: ${date || "Flexible"}`,
      `Persons: ${persons}`,
      category ? `Category: ${category}` : "",
    ].filter(Boolean).join("\n")
    return encodeURIComponent(msg)
  }

  function openWhatsApp() {
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildMessage()}`, "_blank")
    setShowModal(false)
  }

  return (
    <div>
      <MobilePills options={CATEGORIES} active={category} onSelect={v => setCategory(category === v ? "" : v)} />

      <MobileAutocomplete icon={<MapPin size={15} />} label="Activity or Destination" value={query} onChange={setQuery} endpoint="/api/hotels/locations" placeholder="Search destination or activity" />
      <MobileDateField icon={<Calendar size={15} />} label="Date" value={date} onChange={setDate} />

      <div className="border border-slate-200 rounded-xl px-3.5 py-3 mb-2.5">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1 flex items-center gap-1.5">
          <Users size={15} className="text-[#1A56F0]" /> Persons
        </p>
        <MobileCounterRow label="Persons" value={persons} min={1} max={20} onChange={setPersons} />
      </div>

      <MobileCTAButton label="Find Activities" onClick={() => setShowModal(true)} />

      {showModal && (
        <MobileSummaryModal
          heading="We'll find the best activities for you!"
          subtext="Our travel expert will send you great activity options on WhatsApp — usually within minutes."
          rows={[
            { label: "Destination/Activity", value: query || "Flexible" },
            { label: "Date", value: date || "Flexible" },
            { label: "Persons", value: String(persons) },
            ...(category ? [{ label: "Category", value: category }] : []),
          ]}
          onConfirm={openWhatsApp}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
