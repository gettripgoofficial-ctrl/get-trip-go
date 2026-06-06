"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, Users, ArrowLeftRight, ChevronDown } from "lucide-react"
import { cn, Field, FieldRow, SearchButton } from "./SearchBox"

const TRANSFER_TYPES = ["Airport Transfer", "Hotel Transfer", "Point to Point", "Hourly Hire"]

export default function TransferSearch() {
  const [transferType, setTransferType] = useState("Airport Transfer")
  const [pickup,       setPickup]       = useState("Indira Gandhi Airport (DEL)")
  const [drop,         setDrop]         = useState("Hotel or destination")
  const [date,         setDate]         = useState("22 Jun, Sun")
  const [time,         setTime]         = useState("10:00 AM")
  const [passengers,   setPassengers]   = useState(2)

  function swap() {
    setPickup(p => { setDrop(p); return drop })
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

      {/* Fields row */}
      <FieldRow>
        <Field
          icon={<MapPin size={16} />}
          label="Pickup"
          value={pickup}
          className="flex-1"
        />

        {/* Swap button */}
        <button
          onClick={swap}
          aria-label="Swap pickup and drop"
          className="flex-shrink-0 -mx-3.5 z-10 w-7 h-7 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center hover:bg-blue-100 transition-all shadow-sm"
        >
          <ArrowLeftRight size={13} className="text-[#1A56F0]" />
        </button>

        <Field
          icon={<MapPin size={16} />}
          label="Drop-off"
          value={drop}
          className="flex-1"
        />
        <Field
          icon={<Calendar size={16} />}
          label="Date"
          value={date}
          className="flex-1"
        />
        <Field
          icon={<Clock size={16} />}
          label="Time"
          value={time}
          className="flex-none"
        />
        <Field
          icon={<Users size={16} />}
          label="Passengers"
          value={
            <span className="flex items-center gap-1">
              {passengers} Pax <ChevronDown size={12} className="text-slate-400" />
            </span>
          }
          className="flex-none"
        />
        <SearchButton label="Search Transfers" />
      </FieldRow>
    </div>
  )
}