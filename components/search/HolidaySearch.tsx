"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const destinations = [
  "Bali", "Thailand", "Kerala", "Singapore", "Kashmir", "Maldives",
  "Rajasthan", "Dubai", "Georgia", "Bhutan", "Vietnam", "Northeast India",
]

const holidayTypes = [
  { label: "Popular Destinations", value: "popular", href: "/popular-destinations" },
  { label: "Group Departures", value: "group", href: "/group-departures" },
  { label: "Customized Itineraries", value: "customize", href: "/customized-itineraries" },
  { label: "Theme Holidays", value: "theme", href: "/theme-holidays" },
  { label: "Honeymoon", value: "honeymoon", href: "/popular-destinations" },
  { label: "Family", value: "family", href: "/popular-destinations" },
  { label: "Adventure", value: "adventure", href: "/popular-destinations" },
]

const durationOptions = ["Any", "1-3 Nights", "4-6 Nights", "7-9 Nights", "10-14 Nights", "15+ Nights"]

export default function HolidaySearch() {
  const router = useRouter()
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [duration, setDuration] = useState("Any")
  const [travelers, setTravelers] = useState(2)
  const [holidayType, setHolidayType] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filteredDests = destinations.filter(d =>
    d.toLowerCase().includes(destination.toLowerCase())
  )

  const handleSearch = () => {
    if (destination) {
      router.push(`/popular-destinations?destination=${encodeURIComponent(destination)}`)
      return
    }
    const selected = holidayTypes.find(t => t.value === holidayType)
    if (selected) {
      router.push(selected.href)
      return
    }
    router.push("/popular-destinations")
  }

  return (
    <div>
      {/* Fields */}
      <div className="border rounded-xl overflow-hidden mb-4">

        {/* Row 1: Destination + Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {/* Destination */}
          <div className="px-4 py-3 relative">
            <p className="text-xs text-gray-500 mb-1">🌍 Where do you want to go?</p>
            <input
              className="text-sm font-bold text-gray-800 w-full outline-none"
              placeholder="Search destination (e.g. Bali, Dubai...)"
              value={destination}
              onChange={e => { setDestination(e.target.value); setShowSuggestions(true) }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            />
            {destination && (
              <p className="text-xs text-gray-400 mt-0.5">or leave empty to browse all packages</p>
            )}
            {showSuggestions && destination && filteredDests.length > 0 && (
              <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-48 overflow-y-auto">
                {filteredDests.map(dest => (
                  <button key={dest}
                    onMouseDown={() => { setDestination(dest); setShowSuggestions(false) }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    📍 {dest}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date */}
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">📅 Departure Date</p>
            <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none"
              value={date} onChange={e => setDate(e.target.value)} />
          </div>
        </div>

        {/* Row 2: Duration + Travelers */}
        <div className="grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200">
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">🌙 Duration</p>
            <select className="text-sm font-bold text-gray-800 w-full outline-none bg-transparent"
              value={duration} onChange={e => setDuration(e.target.value)}>
              {durationOptions.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">👥 Travelers</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="w-6 h-6 rounded-full border border-gray-300 text-gray-600 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">−</button>
              <span className="text-sm font-bold text-gray-800">{travelers} {travelers === 1 ? "Person" : "Persons"}</span>
              <button onClick={() => setTravelers(travelers + 1)}
                className="w-6 h-6 rounded-full border border-gray-300 text-gray-600 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Holiday Type Pills */}
      <div className="mb-4">
        <p className="text-xs font-bold text-gray-500 mb-2">HOLIDAY TYPE</p>
        <div className="flex flex-wrap gap-2">
          {holidayTypes.map(type => (
            <button key={type.value}
              onClick={() => setHolidayType(holidayType === type.value ? "" : type.value)}
              className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                holidayType === type.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-200 text-gray-600 hover:border-blue-300"
              }`}>
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={handleSearch}
          className="bg-blue-600 text-white text-base sm:text-lg font-bold px-16 sm:px-24 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg w-full sm:w-auto">
          SEARCH
        </button>
      </div>
    </div>
  )
}