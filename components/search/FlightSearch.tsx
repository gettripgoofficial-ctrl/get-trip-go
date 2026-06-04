"use client"
import { useState, useEffect, useRef } from "react"

const specialFares = [
  { label: "Regular", sub: "Regular fares" },
  { label: "Student", sub: "Up to ₹500 off" },
  { label: "Armed Forces", sub: "Up to ₹1000 off" },
  { label: "Senior Citizen", sub: "Up to ₹1200 off" },
]

const MARKER = "642579"

function formatForUrl(dateStr: string) {
  if (!dateStr) return ""
  const [, month, day] = dateStr.split("-")
  return `${day}${month}`
}

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

function buildAviasalesUrl({
  tripType,
  cities,
  adults,
  tripClass,
}: {
  tripType: string
  cities: { fromCode: string; toCode: string; date: string }[]
  adults: number
  tripClass: string
}) {
  const classMap: Record<string, string> = { Economy: "y", Business: "c", First: "f" }
  const cls = classMap[tripClass] || "y"

  if (tripType === "One Way") {
    const { fromCode, toCode, date } = cities[0]
    return `https://www.aviasales.com/search/${fromCode}${formatForUrl(date)}${toCode}${adults}${cls}?marker=${MARKER}`
  }
  if (tripType === "Round Trip") {
    const { fromCode, toCode, date } = cities[0]
    const returnDate = cities[1]?.date || ""
    return `https://www.aviasales.com/search/${fromCode}${formatForUrl(date)}${toCode}${formatForUrl(returnDate)}${fromCode}${adults}${cls}?marker=${MARKER}`
  }
  const segments = cities
    .filter(c => c.fromCode && c.toCode && c.date)
    .map(c => `${c.fromCode}${formatForUrl(c.date)}${c.toCode}`)
    .join("")
  return `https://www.aviasales.com/search/${segments}${adults}${cls}?marker=${MARKER}`
}

type Airport = { code: string; name: string; city_name: string; country_name: string }

function AirportInput({
  label,
  value,
  code,
  onChange,
}: {
  label: string
  value: string
  code: string
  onChange: (name: string, code: string) => void
}) {
  const [query, setQuery] = useState(value)
  const [results, setResults] = useState<Airport[]>([])
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { setQuery(value) }, [value])

  useEffect(() => {
    if (query.length < 2) { setResults([]); return }
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(query)}&locale=en&types[]=airport&types[]=city`)
        const data = await res.json()
        setResults(data.slice(0, 6))
        setOpen(true)
      } catch { setResults([]) }
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <input
        className="text-sm font-bold text-gray-800 w-full outline-none bg-transparent"
        placeholder="City or Airport"
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => query.length >= 2 && setOpen(true)}
      />
      <p className="text-xs text-gray-400 mt-1 truncate">{code || "Select airport"}</p>
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 z-50 bg-white border border-gray-200 rounded-xl shadow-xl mt-1 w-64 max-h-60 overflow-y-auto">
          {results.map((r) => (
            <button
              key={r.code}
              className="w-full text-left px-3 py-2.5 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0"
              onMouseDown={() => {
                onChange(r.city_name || r.name, r.code)
                setQuery(r.city_name || r.name)
                setOpen(false)
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-800">{r.city_name || r.name}</p>
                  <p className="text-xs text-gray-400 truncate max-w-[160px]">{r.name}, {r.country_name}</p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded ml-2">{r.code}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

type CityRow = { from: string; fromCode: string; to: string; toCode: string; date: string }

export default function FlightSearch() {
  const [tripType, setTripType] = useState("One Way")
  const [activeFare, setActiveFare] = useState("Regular")
  const [adults, setAdults] = useState(1)
  const [tripClass, setTripClass] = useState("Economy")
  const [departure, setDeparture] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [from, setFrom] = useState({ name: "New Delhi", code: "DEL" })
  const [to, setTo] = useState({ name: "Mumbai", code: "BOM" })
  const [cities, setCities] = useState<CityRow[]>([
    { from: "New Delhi", fromCode: "DEL", to: "Mumbai", toCode: "BOM", date: "" },
    { from: "Mumbai", fromCode: "BOM", to: "", toCode: "", date: "" },
  ])

  const updateCity = (index: number, field: keyof CityRow, value: string) => {
    const updated = [...cities]
    updated[index] = { ...updated[index], [field]: value }
    setCities(updated)
  }

  const addCity = () => {
    if (cities.length < 5)
      setCities([...cities, { from: "", fromCode: "", to: "", toCode: "", date: "" }])
  }

  const removeCity = (index: number) => {
    if (cities.length > 2) setCities(cities.filter((_, i) => i !== index))
  }

  const handleSearch = () => {
    let url = ""
    if (tripType === "One Way") {
      url = buildAviasalesUrl({
        tripType,
        cities: [{ fromCode: from.code, toCode: to.code, date: departure }],
        adults,
        tripClass,
      })
    } else if (tripType === "Round Trip") {
      url = buildAviasalesUrl({
        tripType,
        cities: [
          { fromCode: from.code, toCode: to.code, date: departure },
          { fromCode: to.code, toCode: from.code, date: returnDate },
        ],
        adults,
        tripClass,
      })
    } else {
      url = buildAviasalesUrl({ tripType, cities, adults, tripClass })
    }
    window.open(url, "_blank")
  }

  const TravellersClass = () => (
    <div>
      <p className="text-xs text-gray-500 mb-1">Travellers & Class</p>
      <div className="flex items-center gap-1">
        <button onClick={() => setAdults(a => Math.max(1, a - 1))} className="text-gray-400 font-bold px-1">−</button>
        <span className="text-base font-bold text-gray-800">{adults}</span>
        <button onClick={() => setAdults(a => Math.min(9, a + 1))} className="text-gray-400 font-bold px-1">+</button>
      </div>
      <select
        className="text-xs text-gray-400 mt-1 outline-none bg-transparent"
        value={tripClass}
        onChange={e => setTripClass(e.target.value)}
      >
        <option>Economy</option>
        <option>Business</option>
        <option>First</option>
      </select>
    </div>
  )

  return (
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

      {/* One Way & Round Trip */}
      {(tripType === "One Way" || tripType === "Round Trip") && (
        <div className="border rounded-xl overflow-hidden mb-3">
          <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-gray-200">
            <div className="px-3 py-3">
              <AirportInput
                label="From"
                value={from.name}
                code={from.code}
                onChange={(name, code) => setFrom({ name, code })}
              />
            </div>
            <div className="px-3 py-3">
              <AirportInput
                label="To"
                value={to.name}
                code={to.code}
                onChange={(name, code) => setTo({ name, code })}
              />
            </div>
            <div className="hidden sm:block px-4 py-3">
              <p className="text-xs text-gray-500 mb-1">Departure</p>
              <input
                type="date"
                className="text-sm font-bold text-gray-800 w-full outline-none"
                value={departure}
                onChange={e => setDeparture(e.target.value)}
              />
            </div>
            <div className="hidden sm:block px-4 py-3">
              <p className="text-xs text-gray-500 mb-1">Return</p>
              {tripType === "Round Trip" ? (
                <input
                  type="date"
                  className="text-sm font-bold text-gray-800 w-full outline-none"
                  value={returnDate}
                  onChange={e => setReturnDate(e.target.value)}
                />
              ) : (
                <p className="text-xs text-gray-400 mt-2">Tap to add return date</p>
              )}
            </div>
            <div className="hidden sm:block px-4 py-3">
              <TravellersClass />
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200 sm:hidden">
            <div className="px-3 py-3">
              <p className="text-xs text-gray-500 mb-1">Departure</p>
              <input
                type="date"
                className="text-xs font-bold text-gray-800 w-full outline-none"
                value={departure}
                onChange={e => setDeparture(e.target.value)}
              />
            </div>
            <div className="px-3 py-3">
              <p className="text-xs text-gray-500 mb-1">Return</p>
              {tripType === "Round Trip" ? (
                <input
                  type="date"
                  className="text-xs font-bold text-gray-800 w-full outline-none"
                  value={returnDate}
                  onChange={e => setReturnDate(e.target.value)}
                />
              ) : (
                <p className="text-xs text-gray-400 mt-2">Tap to add</p>
              )}
            </div>
          </div>
          <div className="border-t border-gray-200 px-3 py-2.5 sm:hidden flex items-center justify-between">
            <p className="text-xs text-gray-500">Travellers & Class</p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-gray-800">{adults} Traveller{adults > 1 ? "s" : ""}</p>
              <span className="text-xs text-gray-400">· {tripClass} ▾</span>
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
                    <AirportInput
                      label="From"
                      value={city.from}
                      code={city.fromCode}
                      onChange={(name, code) => {
                        updateCity(index, "from", name)
                        updateCity(index, "fromCode", code)
                      }}
                    />
                  </div>
                  <div className="px-3 py-3">
                    <AirportInput
                      label="To"
                      value={city.to}
                      code={city.toCode}
                      onChange={(name, code) => {
                        updateCity(index, "to", name)
                        updateCity(index, "toCode", code)
                      }}
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
                      <TravellersClass />
                    ) : isLast && cities.length < 5 ? (
                      <button onClick={addCity} className="text-blue-600 text-xs font-semibold">+ ADD ANOTHER CITY</button>
                    ) : <div />}
                    {index > 1 && (
                      <button onClick={() => removeCity(index)} className="text-gray-400 hover:text-red-500 text-lg font-bold ml-2">✕</button>
                    )}
                  </div>
                </div>
                <div className="border-t border-gray-200 px-3 py-2.5 sm:hidden">
                  <p className="text-xs text-gray-500 mb-1">Departure</p>
                  <input
                    type="date"
                    className="text-xs font-bold text-gray-800 w-full outline-none"
                    value={city.date}
                    onChange={e => updateCity(index, "date", e.target.value)}
                  />
                </div>
                <div className="border-t border-gray-200 px-3 py-2 sm:hidden flex items-center justify-between">
                  {index === 0 && <span className="text-xs text-gray-500">{adults} Traveller{adults > 1 ? "s" : ""} · {tripClass}</span>}
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

      {/* Special Fares */}
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
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white text-base sm:text-lg font-bold px-16 sm:px-24 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg w-full sm:w-auto"
        >
          SEARCH
        </button>
      </div>
    </div>
  )
}