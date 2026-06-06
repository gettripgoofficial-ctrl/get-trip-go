"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react"
import { cn, Field, FieldRow, SearchButton } from "./SearchBox"

const CATEGORIES = ["Adventure", "Cultural", "Food & Drink", "Nature", "Water Sports", "Family", "Nightlife"]

export default function ActivitySearch() {
  const [category, setCategory] = useState("")
  const [query,    setQuery]    = useState("Snorkeling in Bali")
  const [date,     setDate]     = useState("22 Jun, Sun")
  const [persons,  setPersons]  = useState(2)

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

      {/* Fields row */}
      <FieldRow>
        <Field
          icon={<MapPin size={16} />}
          label="Activity or Destination"
          value={query}
          className="flex-1"
        />
        <Field
          icon={<Calendar size={16} />}
          label="Date"
          value={date}
          className="flex-1"
        />
        <Field
          icon={<Users size={16} />}
          label="Persons"
          value={
            <span className="flex items-center gap-1">
              {persons} Person{persons > 1 ? "s" : ""}
              <ChevronDown size={12} className="text-slate-400" />
            </span>
          }
          className="flex-none"
        />
        <SearchButton label="Find Activities" />
      </FieldRow>
    </div>
  )
}