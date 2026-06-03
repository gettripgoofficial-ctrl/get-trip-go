"use client"
import { useState } from "react"

export default function HotelSearch() {
  const [city, setCity] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [rooms, setRooms] = useState(1)
  const [guests, setGuests] = useState(2)

  return (
    <div>
      <div className="border rounded-xl overflow-hidden mb-4">
        {/* Row 1: City */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-xs text-gray-500 mb-1">🏨 City or Hotel Name</p>
          <input className="text-sm font-bold text-gray-800 w-full outline-none"
            placeholder="Where are you going?"
            value={city} onChange={e => setCity(e.target.value)} />
        </div>

        {/* Row 2: Check-in + Check-out */}
        <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">📅 Check-in</p>
            <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none"
              value={checkIn} onChange={e => setCheckIn(e.target.value)} />
          </div>
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">📅 Check-out</p>
            <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none"
              value={checkOut} onChange={e => setCheckOut(e.target.value)} />
          </div>
        </div>

        {/* Row 3: Rooms + Guests */}
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">🛏 Rooms</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setRooms(Math.max(1, rooms - 1))}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">−</button>
              <span className="text-sm font-bold text-gray-800">{rooms}</span>
              <button onClick={() => setRooms(rooms + 1)}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">+</button>
            </div>
          </div>
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">👥 Guests</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">−</button>
              <span className="text-sm font-bold text-gray-800">{guests}</span>
              <button onClick={() => setGuests(guests + 1)}
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