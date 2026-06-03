"use client"
import { useState } from "react"

const transferTypes = ["Airport Transfer", "Hotel Transfer", "Point to Point", "Hourly Hire"]

export default function TransferSearch() {
  const [pickup, setPickup] = useState("")
  const [drop, setDrop] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [passengers, setPassengers] = useState(2)
  const [transferType, setTransferType] = useState("Airport Transfer")

  return (
    <div>
      {/* Transfer Type */}
      <div className="flex flex-wrap gap-2 mb-4">
        {transferTypes.map(type => (
          <button key={type}
            onClick={() => setTransferType(type)}
            className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
              transferType === type ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-300"
            }`}>
            {type}
          </button>
        ))}
      </div>

      <div className="border rounded-xl overflow-hidden mb-4">
        {/* Pickup */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-xs text-gray-500 mb-1">📍 Pickup Location</p>
          <input className="text-sm font-bold text-gray-800 w-full outline-none"
            placeholder="Airport, hotel or address"
            value={pickup} onChange={e => setPickup(e.target.value)} />
        </div>

        {/* Drop */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-xs text-gray-500 mb-1">🏁 Drop Location</p>
          <input className="text-sm font-bold text-gray-800 w-full outline-none"
            placeholder="Airport, hotel or address"
            value={drop} onChange={e => setDrop(e.target.value)} />
        </div>

        {/* Date + Time + Passengers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-gray-200">
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">📅 Date</p>
            <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none"
              value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">🕐 Time</p>
            <input type="time" className="text-sm font-bold text-gray-800 w-full outline-none"
              value={time} onChange={e => setTime(e.target.value)} />
          </div>
          <div className="px-4 py-3 col-span-2 sm:col-span-1 border-t sm:border-t-0 border-gray-200">
            <p className="text-xs text-gray-500 mb-1">👥 Passengers</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setPassengers(Math.max(1, passengers - 1))}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">−</button>
              <span className="text-sm font-bold text-gray-800">{passengers}</span>
              <button onClick={() => setPassengers(passengers + 1)}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-white text-base sm:text-lg font-bold px-16 sm:px-24 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg w-full sm:w-auto">
          SEARCH
        </button>
      </div>
    </div>
  )
}