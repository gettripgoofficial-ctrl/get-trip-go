"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { packages, destinations } from "@/data/packages"
import BottomNav from "@/components/BottomNav"
import { usePrice } from "@/hooks/usePrice"
import FAQSection from "@/components/FAQSection"
import { popularDestinationsFaqs } from "@/data/faqData"

const themes = ["Adventure", "Culture", "Pilgrimage", "Honeymoon", "Wildlife"]
const hotelStars = [3, 4, 5] as const

const budgetRanges = [
  { label: "< ₹20,000", max: 20000 },
  { label: "₹20,000 - ₹35,000", max: 35000 },
  { label: "₹35,000 - ₹55,000", max: 55000 },
  { label: "> ₹55,000", max: Infinity },
]

function PopularDestinationsContent() {
  const { convert } = usePrice()
  const searchParams = useSearchParams()
  const initialDestination = searchParams.get("destination") || "All"

  const [activeDestination, setActiveDestination] = useState(initialDestination)
  const [searchQuery, setSearchQuery] = useState("")
  const [nights, setNights] = useState<[number, number]>([1, 10])
  const [flightFilter, setFlightFilter] = useState<"all" | "with" | "without">("all")
  const [budgetFilter, setBudgetFilter] = useState<number[]>([])
  const [hotelFilter, setHotelFilter] = useState<number[]>([])
  const [themeFilter, setThemeFilter] = useState<string[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortBy, setSortBy] = useState<"popular" | "price_asc" | "price_desc">("popular")

  useEffect(() => {
    setActiveDestination(searchParams.get("destination") || "All")
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...packages]

    if (activeDestination !== "All")
      result = result.filter(p => p.destination === activeDestination)

    if (searchQuery.trim())
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
      )

    result = result.filter(p => p.nights >= nights[0] && p.nights <= nights[1])

    if (flightFilter === "with") result = result.filter(p => p.withFlight)
    if (flightFilter === "without") result = result.filter(p => !p.withFlight)

    if (budgetFilter.length > 0) {
      result = result.filter(p =>
        budgetFilter.some(max => {
          if (max === 20000) return p.price < 20000
          if (max === 35000) return p.price >= 20000 && p.price <= 35000
          if (max === 55000) return p.price > 35000 && p.price <= 55000
          return p.price > 55000
        })
      )
    }

    if (hotelFilter.length > 0)
      result = result.filter(p => hotelFilter.includes(p.hotelCategory))

    if (themeFilter.length > 0)
      result = result.filter(p => themeFilter.some(t => p.themes.includes(t)))

    if (sortBy === "price_asc") result.sort((a, b) => a.price - b.price)
    if (sortBy === "price_desc") result.sort((a, b) => b.price - a.price)

    return result
  }, [activeDestination, searchQuery, nights, flightFilter, budgetFilter, hotelFilter, themeFilter, sortBy])

  const toggleBudget = (max: number) =>
    setBudgetFilter(prev => prev.includes(max) ? prev.filter(x => x !== max) : [...prev, max])

  const toggleHotel = (star: number) =>
    setHotelFilter(prev => prev.includes(star) ? prev.filter(x => x !== star) : [...prev, star])

  const toggleTheme = (theme: string) =>
    setThemeFilter(prev => prev.includes(theme) ? prev.filter(x => x !== theme) : [...prev, theme])

  const clearAll = () => {
    setActiveDestination("All")
    setSearchQuery("")
    setNights([1, 10])
    setFlightFilter("all")
    setBudgetFilter([])
    setHotelFilter([])
    setThemeFilter([])
  }

  const activeFiltersCount = budgetFilter.length + hotelFilter.length + themeFilter.length +
    (flightFilter !== "all" ? 1 : 0) + (activeDestination !== "All" ? 1 : 0)

  const heroDestination = destinations.find(d => d.name === activeDestination)

  const Sidebar = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Filters</p>
        <button onClick={clearAll} className="text-xs text-blue-600 font-semibold">Clear All</button>
      </div>

      {/* Destination */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Destination</p>
        <div className="space-y-1">
          {["All", ...destinations.map(d => d.name)].map(dest => (
            <button
              key={dest}
              onClick={() => { setActiveDestination(dest); setSidebarOpen(false) }}
              className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all ${
                activeDestination === dest
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {dest}
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Duration (Nights)</p>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-gray-500">{nights[0]}N</span>
          <input
            type="range" min={1} max={10} value={nights[1]}
            onChange={e => setNights([nights[0], +e.target.value])}
            className="flex-1 accent-blue-600"
          />
          <span className="text-xs text-gray-500">{nights[1]}N</span>
        </div>
      </div>

      {/* Flights */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Flights</p>
        <div className="flex gap-2 flex-wrap">
          {[["all", "Any"], ["with", "With Flight"], ["without", "Without Flight"]].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFlightFilter(val as typeof flightFilter)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                flightFilter === val
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-200 text-gray-600 hover:border-blue-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Budget (per person)</p>
        <div className="space-y-2">
          {budgetRanges.map(({ label, max }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={budgetFilter.includes(max)}
                onChange={() => toggleBudget(max)}
                className="accent-blue-600"
              />
              <span className="text-sm text-gray-600">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Hotel Category */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Hotel Category</p>
        <div className="flex gap-2">
          {hotelStars.map(star => (
            <button
              key={star}
              onClick={() => toggleHotel(star)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                hotelFilter.includes(star)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-200 text-gray-600 hover:border-blue-300"
              }`}
            >
              {star}★
            </button>
          ))}
        </div>
      </div>

      {/* Themes */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Themes</p>
        <div className="space-y-2">
          {themes.map(theme => (
            <label key={theme} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={themeFilter.includes(theme)}
                onChange={() => toggleTheme(theme)}
                className="accent-blue-600"
              />
              <span className="text-sm text-gray-600">{theme}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 pb-20 sm:pb-0">

      {/* Hero */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img
          src={heroDestination?.image ?? "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=90"}
          alt={activeDestination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            {activeDestination === "All" ? "All Popular Destinations" : `${activeDestination} Packages`}
          </h1>
          <p className="text-white/80 text-sm mt-1"></p>
        </div>
        <Link href="/" className="absolute top-16 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full">
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-6">
              <Sidebar />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">

            {/* Search bar + controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              {/* Search */}
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search packages, destinations, highlights..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Mobile filter button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-white text-sm font-semibold text-gray-700 px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 whitespace-nowrap"
              >
                ⚙ Filters
                {activeFiltersCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="bg-white text-sm font-semibold text-gray-700 px-3 py-2.5 rounded-xl shadow-sm border border-gray-200"
              >
                <option value="popular">Popular</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>

            {/* Package Cards Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400 bg-white rounded-2xl">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-lg font-semibold">No packages found</p>
                <p className="text-sm mt-1">Try adjusting your filters or search</p>
                <button onClick={clearAll} className="mt-4 text-blue-600 text-sm font-semibold underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map(pkg => (
                  <Link
                    key={pkg.slug}
                    href={`/popular-destinations/${pkg.slug}`}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={pkg.images[0]}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {pkg.tag && (
                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                          {pkg.tag}
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="text-xs text-blue-600 font-semibold mb-0.5">{pkg.destination} · {pkg.country}</p>
                          <h3 className="text-sm font-bold text-gray-900 leading-tight">{pkg.name}</h3>
                        </div>
                        <span className="text-xs bg-yellow-50 text-yellow-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                          {pkg.hotelCategory}★ Hotel
                        </span>
                      </div>

                      {/* Inclusions */}
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3">
                        {[
                          pkg.inclusions.flights ? "✈ " + pkg.inclusions.flights : null,
                          "🏨 " + pkg.inclusions.hotel,
                          "🍽 " + pkg.inclusions.meals,
                          "🎯 " + pkg.inclusions.activities,
                        ].filter(Boolean).map((item, i) => (
                          <p key={i} className="text-[10px] text-gray-500 truncate">{item}</p>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {pkg.highlights.slice(0, 3).map(h => (
                          <span key={h} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100">
                            {h}
                          </span>
                        ))}
                      </div>

                      <hr className="border-gray-100 mb-3" />

                      {/* Price */}
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-extrabold text-gray-900">{convert(pkg.price)}</span>
                            <span className="text-xs text-gray-400">/Person</span>
                          </div>
                          <p className="text-[10px] text-gray-400">Total {convert(pkg.totalPrice)}</p>
                        </div>
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <p className="font-bold text-gray-800">Filters</p>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 text-xl">✕</button>
            </div>
            <div className="p-4">
              <Sidebar />
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl"
              >
                Show {filtered.length} Packages
              </button>
            </div>
          </div>
        </>
      )}

      <FAQSection faqs={popularDestinationsFaqs} />
      <BottomNav />
    </div>
  )
}

export default function PopularDestinationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center"><p className="text-gray-400">Loading...</p></div>}>
      <PopularDestinationsContent />
    </Suspense>
  )
}