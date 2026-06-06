"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, ChevronDown, Minus, Plus } from "lucide-react"
import { cn, Field, FieldRow, SearchButton } from "./SearchBox"

const HOTEL_TYPES = ["Any", "Budget", "3 Star", "4 Star", "5 Star", "Resort"]

export default function HotelSearch() {
  const [hotelType, setHotelType] = useState("Any")
  const [city,      setCity]      = useState("Mumbai")
  const [checkIn,   setCheckIn]   = useState("15 Jun, Sun")
  const [checkOut,  setCheckOut]  = useState("18 Jun, Wed")
  const [rooms,     setRooms]     = useState(1)
  const [guests,    setGuests]    = useState(2)

  return (
    <div>
      {/* Hotel type pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {HOTEL_TYPES.map(type => (
          <button
            key={type}
            onClick={() => setHotelType(type)}
            aria-pressed={hotelType === type}
            className={cn(
              "text-[12px] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all whitespace-nowrap",
              hotelType === type
                ? "bg-blue-50 text-[#1A56F0] border-blue-300"
                : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#1A56F0]"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Fields row */}
      <FieldRow>
        <Field
          icon={<MapPin size={16} />}
          label="City or Hotel"
          value={city}
          className="flex-1"
        />
        <Field
          icon={<Calendar size={16} />}
          label="Check-in"
          value={checkIn}
          className="flex-1"
        />
        <Field
          icon={<Calendar size={16} />}
          label="Check-out"
          value={checkOut}
          className="flex-1"
        />
        <Field
          icon={<Users size={16} />}
          label="Rooms & Guests"
          value={
            <span className="flex items-center gap-1">
              {rooms} Room · {guests} Guest{guests > 1 ? "s" : ""}
              <ChevronDown size={12} className="text-slate-400" />
            </span>
          }
          className="flex-none"
        />
        <SearchButton label="Search Hotels" />
      </FieldRow>
    </div>
  )
}