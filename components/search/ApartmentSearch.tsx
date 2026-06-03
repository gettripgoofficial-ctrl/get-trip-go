"use client"
import { useState } from "react"

const propertyTypes = ["Apartment", "Villa", "Studio", "Penthouse", "Cottage"]

export default function ApartmentSearch() {
  const [city, setCity] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)
  const [bedrooms, setBedrooms] = useState(1)
  const [propertyType, setPropertyType] = useState("")

  return (
    <div>
      <div className="border rounded-xl overflow-hidden mb-4">
        {/* City */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-xs text-gray-500 mb-1">🏢 City or Area</p>
          <input className="text-sm font-bold text-gray-800 w-full outline-none"
            placeholder="Where are you looking?"
            value={city} onChange={e => setCity(e.target.value)} />
        </div>

        {/* Check-in + Check-out */}
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

        {/* Guests + Bedrooms */}
        <div className="grid grid-cols-2 divide-x divide-gray-200">
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
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">🛏 Bedrooms</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">−</button>
              <span className="text-sm font-bold text-gray-800">{bedrooms}</span>
              <button onClick={() => setBedrooms(bedrooms + 1)}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-4">
        <p className="text-xs font-bold text-gray-500 mb-2">PROPERTY TYPE</p>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map(type => (
            <button key={type}
              onClick={() => setPropertyType(propertyType === type ? "" : type)}
              className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                propertyType === type ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-300"
              }`}>
              {type}
            </button>
          ))}
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