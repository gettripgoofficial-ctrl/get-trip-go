"use client"
import { useState } from "react"

const specialFares = [
  { label: "Regular", sub: "Regular fares" },
  { label: "Student", sub: "Up to ₹500 off" },
  { label: "Armed Forces", sub: "Up to ₹1000 off" },
  { label: "Senior Citizen", sub: "Up to ₹1200 off" },
]

const defaultCities = [
  { from: "New Delhi", to: "Mumbai", date: "" },
  { from: "Mumbai", to: "", date: "" },
]

function formatDate(dateStr: string) {
  if (!dateStr) return null
  const d = new Date(dateStr)
  return {
    day: d.getDate(),
    month: d.toLocaleString("default", { month: "short" }),
    year: String(d.getFullYear()).slice(2),
    weekday: d.toLocaleString("default", { weekday: "long" }),
  }
}

export default function SearchBox({ activeTab }: { activeTab: string }) {
  const [tripType, setTripType] = useState("One Way")
  const [activeFare, setActiveFare] = useState("Regular")
  const [cities, setCities] = useState(defaultCities)

  const updateCity = (index: number, field: string, value: string) => {
    const updated = [...cities]
    updated[index] = { ...updated[index], [field]: value }
    setCities(updated)
  }

  const addCity = () => {
    if (cities.length < 5)
      setCities([...cities, { from: "", to: "", date: "" }])
  }

  const removeCity = (index: number) => {
    if (cities.length > 2)
      setCities(cities.filter((_, i) => i !== index))
  }

  return (
    <div>
      {activeTab === "Flights" && (
        <div>

          {/* Trip Type */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div className="flex gap-4 sm:gap-6">
              {["One Way", "Round Trip", "Multi City"].map(type => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                    className="accent-blue-600"
                  />
                  <span className="text-sm font-medium text-gray-700">{type}</span>
                </label>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold" style={{ color: "#F5A623" }}>
              Best Fares Guaranteed on Every Flight ✨
            </span>
          </div>

          {/* One Way */}
          {tripType === "One Way" && (
            <div className="border rounded-xl overflow-hidden mb-3">
              {/* Row 1: From + To side by side on mobile, 5 cols on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-gray-200">
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">From</p>
                  <input className="text-sm font-bold text-gray-800 w-full outline-none" placeholder="New Delhi" />
                  <p className="text-xs text-gray-400 mt-1 truncate">DEL, Indira Gandhi Intl</p>
                </div>
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">To</p>
                  <input className="text-sm font-bold text-gray-800 w-full outline-none" placeholder="Mumbai" />
                  <p className="text-xs text-gray-400 mt-1 truncate">BOM, Chhatrapati Shivaji</p>
                </div>
                {/* Desktop only */}
                <div className="hidden sm:block px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">Departure</p>
                  <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none" />
                </div>
                <div className="hidden sm:block px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">Return</p>
                  <p className="text-xs text-gray-400 mt-2">Tap to add return date</p>
                </div>
                <div className="hidden sm:block px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">Travellers & Class</p>
                  <p className="text-base font-bold text-gray-800">1 Traveller</p>
                  <p className="text-xs text-gray-400 mt-1">Economy</p>
                </div>
              </div>

              {/* Row 2 mobile: Departure + Return */}
              <div className="grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200 sm:hidden">
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">Departure</p>
                  <input type="date" className="text-xs font-bold text-gray-800 w-full outline-none" />
                </div>
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">Return</p>
                  <p className="text-xs text-gray-400 mt-2">Tap to add</p>
                </div>
              </div>

              {/* Row 3 mobile: Travellers */}
              <div className="border-t border-gray-200 px-3 py-2.5 sm:hidden flex items-center justify-between">
                <p className="text-xs text-gray-500">Travellers & Class</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-gray-800">1 Traveller</p>
                  <span className="text-xs text-gray-400">· Economy ▾</span>
                </div>
              </div>
            </div>
          )}

          {/* Round Trip */}
          {tripType === "Round Trip" && (
            <div className="border rounded-xl overflow-hidden mb-3">
              <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-gray-200">
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">From</p>
                  <input className="text-sm font-bold text-gray-800 w-full outline-none" placeholder="New Delhi" />
                  <p className="text-xs text-gray-400 mt-1 truncate">DEL, Indira Gandhi Intl</p>
                </div>
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">To</p>
                  <input className="text-sm font-bold text-gray-800 w-full outline-none" placeholder="Mumbai" />
                  <p className="text-xs text-gray-400 mt-1 truncate">BOM, Chhatrapati Shivaji</p>
                </div>
                <div className="hidden sm:block px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">Departure</p>
                  <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none" />
                </div>
                <div className="hidden sm:block px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">Return</p>
                  <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none" />
                </div>
                <div className="hidden sm:block px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">Travellers & Class</p>
                  <p className="text-base font-bold text-gray-800">1 Traveller</p>
                  <p className="text-xs text-gray-400 mt-1">Economy</p>
                </div>
              </div>

              {/* Row 2 mobile: Departure + Return */}
              <div className="grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200 sm:hidden">
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">Departure</p>
                  <input type="date" className="text-xs font-bold text-gray-800 w-full outline-none" />
                </div>
                <div className="px-3 py-3">
                  <p className="text-xs text-gray-500 mb-1">Return</p>
                  <input type="date" className="text-xs font-bold text-gray-800 w-full outline-none" />
                </div>
              </div>

              {/* Row 3 mobile: Travellers */}
              <div className="border-t border-gray-200 px-3 py-2.5 sm:hidden flex items-center justify-between">
                <p className="text-xs text-gray-500">Travellers & Class</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-gray-800">1 Traveller</p>
                  <span className="text-xs text-gray-400">· Economy ▾</span>
                </div>
              </div>
            </div>
          )}

          {/* Multi City */}
          {tripType === "Multi City" && (
            <div className="mb-3 space-y-2">
              {cities.map((city, index) => {
                const formatted = formatDate(city.date)
                const isLast = index === cities.length - 1
                return (
                  <div key={index} className="border rounded-xl overflow-hidden">
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200">
                      <div className="px-3 py-3">
                        <p className="text-xs text-gray-500 mb-1">From</p>
                        <input
                          className="text-sm font-bold text-gray-800 w-full outline-none"
                          placeholder="Select City"
                          value={city.from}
                          onChange={e => updateCity(index, "from", e.target.value)}
                        />
                      </div>
                      <div className="px-3 py-3">
                        <p className="text-xs text-gray-500 mb-1">To</p>
                        <input
                          className="text-sm font-bold text-gray-800 w-full outline-none"
                          placeholder="Select City"
                          value={city.to}
                          onChange={e => updateCity(index, "to", e.target.value)}
                        />
                      </div>
                      <div className="hidden sm:block px-4 py-3">
                        <p className="text-xs text-gray-500 mb-1">Departure</p>
                        {formatted ? (
                          <div>
                            <p className="text-base font-bold text-gray-800">{formatted.day} {formatted.month}'{formatted.year}</p>
                            <p className="text-xs text-gray-400">{formatted.weekday}</p>
                          </div>
                        ) : (
                          <input
                            type="date"
                            className="text-sm font-bold text-gray-800 w-full outline-none"
                            value={city.date}
                            onChange={e => updateCity(index, "date", e.target.value)}
                          />
                        )}
                      </div>
                      <div className="hidden sm:flex px-4 py-3 items-center justify-between">
                        {index === 0 ? (
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Travellers & Class</p>
                            <p className="text-base font-bold text-gray-800">1 Traveller</p>
                            <p className="text-xs text-gray-400 mt-1">Economy</p>
                          </div>
                        ) : isLast && cities.length < 5 ? (
                          <button onClick={addCity} className="text-blue-600 text-xs font-semibold hover:bg-blue-50 w-full text-left">
                            + ADD ANOTHER CITY
                          </button>
                        ) : <div />}
                        {index > 1 && (
                          <button onClick={() => removeCity(index)} className="text-gray-400 hover:text-red-500 text-lg font-bold ml-2">✕</button>
                        )}
                      </div>
                    </div>

                    {/* Mobile: Departure */}
                    <div className="border-t border-gray-200 px-3 py-2.5 sm:hidden">
                      <p className="text-xs text-gray-500 mb-1">Departure</p>
                      <input
                        type="date"
                        className="text-xs font-bold text-gray-800 w-full outline-none"
                        value={city.date}
                        onChange={e => updateCity(index, "date", e.target.value)}
                      />
                    </div>

                    {/* Mobile: Actions */}
                    <div className="border-t border-gray-200 px-3 py-2 sm:hidden flex items-center justify-between">
                      {index === 0 && (
                        <span className="text-xs text-gray-500">1 Traveller · Economy</span>
                      )}
                      {isLast && cities.length < 5 && (
                        <button onClick={addCity} className="text-blue-600 text-xs font-semibold ml-auto">+ ADD CITY</button>
                      )}
                      {index > 1 && (
                        <button onClick={() => removeCity(index)} className="text-red-400 text-xs font-semibold ml-auto">Remove</button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Special Fares — compact single line on mobile */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            <span className="text-xs font-bold text-gray-700 shrink-0">FARES</span>
            {specialFares.map(fare => (
              <button
                key={fare.label}
                onClick={() => setActiveFare(fare.label)}
                className={`shrink-0 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all whitespace-nowrap ${
                  activeFare === fare.label
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-gray-200 text-gray-600 hover:border-blue-300"
                }`}
              >
                {fare.label}
                <span className="hidden sm:inline text-gray-400"> · {fare.sub}</span>
              </button>
            ))}
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white text-base sm:text-lg font-bold px-16 sm:px-24 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg w-full sm:w-auto">
              SEARCH
            </button>
          </div>
        </div>
      )}

      {activeTab === "Hotels" && (
        <div className="flex flex-col sm:flex-row gap-3">
          <input className="border rounded-lg px-4 py-3 flex-1" placeholder="City" />
          <input className="border rounded-lg px-4 py-3 sm:w-40" type="date" />
          <input className="border rounded-lg px-4 py-3 sm:w-40" type="date" />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 w-full sm:w-auto">
            SEARCH
          </button>
        </div>
      )}

      {activeTab === "Holidays" && (
        <div className="flex flex-col sm:flex-row gap-3">
          <input className="border rounded-lg px-4 py-3 flex-1" placeholder="Where do you want to go?" />
          <input className="border rounded-lg px-4 py-3 sm:w-40" type="date" />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 w-full sm:w-auto">
            SEARCH
          </button>
        </div>
      )}

      {activeTab === "Activities" && (
        <div className="flex flex-col sm:flex-row gap-3">
          <input className="border rounded-lg px-4 py-3 flex-1" placeholder="Search activities or destination" />
          <input className="border rounded-lg px-4 py-3 sm:w-40" type="date" />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 w-full sm:w-auto">
            SEARCH
          </button>
        </div>
      )}

      {activeTab === "Transfers" && (
        <div className="flex flex-col sm:flex-row gap-3">
          <input className="border rounded-lg px-4 py-3 flex-1" placeholder="Pickup location" />
          <input className="border rounded-lg px-4 py-3 flex-1" placeholder="Drop location" />
          <input className="border rounded-lg px-4 py-3 sm:w-40" type="date" />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 w-full sm:w-auto">
            SEARCH
          </button>
        </div>
      )}

      {activeTab === "Villas & Apartments" && (
        <div className="flex flex-col sm:flex-row gap-3">
          <input className="border rounded-lg px-4 py-3 flex-1" placeholder="City or area" />
          <input className="border rounded-lg px-4 py-3 sm:w-40" type="date" />
          <input className="border rounded-lg px-4 py-3 sm:w-28" placeholder="Guests" />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 w-full sm:w-auto">
            SEARCH
          </button>
        </div>
      )}
    </div>
  )
}