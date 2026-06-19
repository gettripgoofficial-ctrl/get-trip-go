"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { groupDepartures, getAllCountries, getAllSeries } from "@/data/groupDepartures"
import BottomNav from "@/components/BottomNav"
import { usePrice } from "@/hooks/usePrice"
import FAQSection from "@/components/FAQSection"
import { groupDeparturesFaqs } from "@/data/faqData"

const durationRanges = [
  { label: "Short (≤8 days)", min: 1, max: 8 },
  { label: "Medium (9–15 days)", min: 9, max: 15 },
  { label: "Long (16+ days)", min: 16, max: 99 },
]

const budgetRanges = [
  { label: "Under ₹1,00,000", max: 100000 },
  { label: "₹1L – ₹2L", max: 200000 },
  { label: "₹2L – ₹3L", max: 300000 },
  { label: "Above ₹3L", max: Infinity },
]

const months = ["Jul 2026", "Aug 2026", "Sep 2026", "Oct 2026"]

const INITIAL_VISIBLE = 6
const LOAD_MORE_COUNT = 6

const seriesColors: Record<string, string> = {
  "Go English": "#1A56F0",
  "Special Indian": "#D97706",
  "Central & East Europe": "#7C3AED",
  "UK & France": "#0891B2",
  "Scandinavia": "#059669",
}

export default function GroupDeparturesPage() {
  const { convert } = usePrice()
  const [searchQuery, setSearchQuery] = useState("")
  const [seriesFilter, setSeriesFilter] = useState<string[]>([])
  const [countryFilter, setCountryFilter] = useState<string[]>([])
  const [durationFilter, setDurationFilter] = useState<number[]>([])
  const [budgetFilter, setBudgetFilter] = useState<number[]>([])
  const [monthFilter, setMonthFilter] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"popular" | "price_asc" | "price_desc" | "duration_asc">("popular")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const allCountries = getAllCountries()
  const allSeries = getAllSeries()

  const filtered = useMemo(() => {
    let result = [...groupDepartures]

    if (searchQuery.trim())
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.countries.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.series.toLowerCase().includes(searchQuery.toLowerCase())
      )

    if (seriesFilter.length > 0)
      result = result.filter(p => seriesFilter.includes(p.series))

    if (countryFilter.length > 0)
      result = result.filter(p =>
        countryFilter.some(c => p.countries.includes(c))
      )

    if (durationFilter.length > 0)
      result = result.filter(p =>
        durationFilter.some(max => {
          const range = durationRanges.find(d => d.max === max)
          return range ? p.days >= range.min && p.days <= range.max : false
        })
      )

    if (budgetFilter.length > 0)
      result = result.filter(p =>
        budgetFilter.some(max => {
          if (max === 100000) return p.priceINR < 100000
          if (max === 200000) return p.priceINR >= 100000 && p.priceINR <= 200000
          if (max === 300000) return p.priceINR > 200000 && p.priceINR <= 300000
          return p.priceINR > 300000
        })
      )

    if (monthFilter.length > 0)
      result = result.filter(p =>
        p.departureDates.some(d => monthFilter.some(m => d.includes(m.split(" ")[0])))
      )

    if (sortBy === "price_asc") result.sort((a, b) => a.priceINR - b.priceINR)
    if (sortBy === "price_desc") result.sort((a, b) => b.priceINR - a.priceINR)
    if (sortBy === "duration_asc") result.sort((a, b) => a.days - b.days)

    return result
  }, [searchQuery, seriesFilter, countryFilter, durationFilter, budgetFilter, monthFilter, sortBy])

  // Reset visible count when filters change
  useMemo(() => { setVisibleCount(INITIAL_VISIBLE) }, [filtered.length])

  const visiblePackages = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const toggle = (arr: string[], val: string, set: (v: string[]) => void) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const toggleNum = (arr: number[], val: number, set: (v: number[]) => void) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const clearAll = () => {
    setSearchQuery("")
    setSeriesFilter([])
    setCountryFilter([])
    setDurationFilter([])
    setBudgetFilter([])
    setMonthFilter([])
    setVisibleCount(INITIAL_VISIBLE)
  }

  const activeFiltersCount = seriesFilter.length + countryFilter.length + durationFilter.length + budgetFilter.length + monthFilter.length

  const Sidebar = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Filters</p>
        <button onClick={clearAll} className="text-xs text-blue-600 font-semibold">Clear All</button>
      </div>

      {/* Series */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Series</p>
        <div className="space-y-1.5">
          {allSeries.map(s => (
            <label key={s} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={seriesFilter.includes(s)} onChange={() => toggle(seriesFilter, s, setSeriesFilter)} className="accent-blue-600" />
              <span className="text-sm text-gray-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: seriesColors[s] }} />
                {s}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Duration</p>
        <div className="space-y-1.5">
          {durationRanges.map(({ label, max }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={durationFilter.includes(max)} onChange={() => toggleNum(durationFilter, max, setDurationFilter)} className="accent-blue-600" />
              <span className="text-sm text-gray-600">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Budget (per person)</p>
        <div className="space-y-1.5">
          {budgetRanges.map(({ label, max }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={budgetFilter.includes(max)} onChange={() => toggleNum(budgetFilter, max, setBudgetFilter)} className="accent-blue-600" />
              <span className="text-sm text-gray-600">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Departure Month */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Departure Month</p>
        <div className="flex flex-wrap gap-2">
          {months.map(m => (
            <button
              key={m}
              onClick={() => toggle(monthFilter, m, setMonthFilter)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${monthFilter.includes(m) ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-300"}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Countries */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Countries</p>
        <div className="max-h-52 overflow-y-auto space-y-1.5 pr-1">
          {allCountries.map(c => (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={countryFilter.includes(c)} onChange={() => toggle(countryFilter, c, setCountryFilter)} className="accent-blue-600" />
              <span className="text-xs text-gray-600 capitalize">{c.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</span>
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
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=90" alt="Europe Group Departures" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Europe Group Departures</h1>
          <p className="text-white/80 text-sm mt-1">Guaranteed departures — travel with like-minded explorers</p>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">

          {/* Sidebar desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-6">
              <Sidebar />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">

            {/* Search + controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); setVisibleCount(INITIAL_VISIBLE) }}
                  placeholder="Search by tour name, country..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-400"
                />
                {searchQuery && <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">✕</button>}
              </div>

              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-white text-sm font-semibold text-gray-700 px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 whitespace-nowrap"
              >
                ⚙ Filters
                {activeFiltersCount > 0 && <span className="bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">{activeFiltersCount}</span>}
              </button>

              <select
                value={sortBy}
                onChange={e => { setSortBy(e.target.value as typeof sortBy); setVisibleCount(INITIAL_VISIBLE) }}
                className="bg-white text-sm font-semibold text-gray-700 px-3 py-2.5 rounded-xl shadow-sm border border-gray-200"
              >
                <option value="popular">Popular</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="duration_asc">Duration: Shortest First</option>
              </select>
            </div>

            

            {/* Cards */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl text-gray-400">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-lg font-semibold">No tours found</p>
                <p className="text-sm mt-1">Try adjusting your filters</p>
                <button onClick={clearAll} className="mt-4 text-blue-600 text-sm font-semibold underline">Clear all filters</button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {visiblePackages.map(pkg => (
                    <Link
                      key={pkg.slug}
                      href={`/group-departures/${pkg.slug}`}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={pkg.heroImage}
                          alt={pkg.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {pkg.tag && (
                          <span className="absolute top-3 left-3 bg-white text-xs font-bold px-2 py-1 rounded-full" style={{ color: seriesColors[pkg.series] }}>
                            {pkg.tag}
                          </span>
                        )}
                        <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                          {pkg.days}D/{pkg.nights}N
                        </span>
                        <span
                          className="absolute bottom-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-full"
                          style={{ backgroundColor: seriesColors[pkg.series] }}
                        >
                          {pkg.series}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-2">{pkg.name}</h3>

                        {/* Countries */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {pkg.countries.slice(0, 4).map(c => (
                            <span key={c} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100 capitalize">
                              {c.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                          ))}
                          {pkg.countries.length > 4 && (
                            <span className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100">
                              +{pkg.countries.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Next departure */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <span className="text-xs">✈</span>
                          <span className="text-xs text-gray-500">Next departure:</span>
                          <span className="text-xs font-semibold text-blue-600">{pkg.departureDates[0]}</span>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {pkg.highlights.slice(0, 3).map(h => (
                            <span key={h} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{h}</span>
                          ))}
                        </div>

                        <hr className="border-gray-100 mb-3" />

                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs text-gray-400">Starting from</p>
                            <div className="flex items-baseline gap-1">
                              <span className="text-xl font-extrabold text-gray-900">{convert(pkg.priceINR)}</span>
                              <span className="text-xs text-gray-400">/person</span>
                            </div>
                            <p className="text-[10px] text-gray-400">€{pkg.priceEUR.toLocaleString()} per person</p>
                          </div>
                          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">View Details</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More / View All */}
                {hasMore && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setVisibleCount(v => v + LOAD_MORE_COUNT)}
                      className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm"
                    >
                      Load More
                    </button>
                    <button
                      onClick={() => setVisibleCount(filtered.length)}
                      className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-sm"
                    >
                      View All Tours
                    </button>
                  </div>
                )}

                {/* All loaded indicator */}
                {!hasMore && filtered.length > INITIAL_VISIBLE && (
                  <div className="mt-8 text-center">
                    
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <p className="font-bold text-gray-800">Filters</p>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 text-xl">✕</button>
            </div>
            <div className="p-4"><Sidebar /></div>
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
              <button onClick={() => setSidebarOpen(false)} className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl">
                Show {filtered.length} Tours
              </button>
            </div>
          </div>
        </>
      )}

      <FAQSection faqs={groupDeparturesFaqs} />
      <BottomNav />
    </div>
  )
}