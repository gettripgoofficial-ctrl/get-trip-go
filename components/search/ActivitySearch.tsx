"use client"
import { useState } from "react"

const categories = ["Adventure", "Cultural", "Food & Drink", "Nature", "Water Sports", "Family", "Nightlife"]

export default function ActivitySearch() {
  const [query, setQuery] = useState("")
  const [date, setDate] = useState("")
  const [persons, setPersons] = useState(2)
  const [category, setCategory] = useState("")

  return (
    <div>
      <div className="border rounded-xl overflow-hidden mb-4">
        {/* Search */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-xs text-gray-500 mb-1">🎯 Activity or Destination</p>
          <input className="text-sm font-bold text-gray-800 w-full outline-none"
            placeholder="e.g. Snorkeling in Bali, Trek in Manali..."
            value={query} onChange={e => setQuery(e.target.value)} />
        </div>

        {/* Date + Persons */}
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">📅 Date</p>
            <input type="date" className="text-sm font-bold text-gray-800 w-full outline-none"
              value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">👥 Persons</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setPersons(Math.max(1, persons - 1))}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">−</button>
              <span className="text-sm font-bold text-gray-800">{persons}</span>
              <button onClick={() => setPersons(persons + 1)}
                className="w-6 h-6 rounded-full border border-gray-300 font-bold flex items-center justify-center hover:bg-gray-50 text-sm">+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <p className="text-xs font-bold text-gray-500 mb-2">CATEGORY</p>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat}
              onClick={() => setCategory(category === cat ? "" : cat)}
              className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                category === cat ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-300"
              }`}>
              {cat}
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