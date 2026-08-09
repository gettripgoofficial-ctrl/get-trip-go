"use client"

import { useState, useMemo, Suspense } from "react"
import Link from "next/link"
import Script from "next/script"
import { useSearchParams } from "next/navigation"
import { themePackages, themes } from "@/data/themePackages"
import BottomNav from "@/components/BottomNav"
import { usePrice } from "@/hooks/usePrice"
import { buildItemListSchema } from "@/lib/seo/tripSchema"

const themeColors: Record<string, string> = {
  "Honeymoon": "#be185d",
  "Family": "#0369a1",
  "Adventure": "#b45309",
  "Beach": "#0891b2",
  "Hill Stations": "#166534",
  "Wildlife & Safari": "#166534",
  "Spiritual": "#7c3aed",
  "Luxury": "#b45309",
}

const themeIcons: Record<string, string> = {
  "Honeymoon": "💑",
  "Family": "👨‍👩‍👧‍👦",
  "Adventure": "🧗",
  "Beach": "🏖",
  "Hill Stations": "⛰",
  "Wildlife & Safari": "🦁",
  "Spiritual": "🙏",
  "Luxury": "✨",
}

const budgetRanges = [
  { label: "Under ₹25,000", max: 25000 },
  { label: "₹25K – ₹75K", max: 75000 },
  { label: "₹75K – ₹1.5L", max: 150000 },
  { label: "Above ₹1.5L", max: Infinity },
]

const durationRanges = [
  { label: "Short (≤5 days)", min: 1, max: 5 },
  { label: "Medium (6–9 days)", min: 6, max: 9 },
  { label: "Long (10+ days)", min: 10, max: 99 },
]

const INITIAL_VISIBLE = 6
const LOAD_MORE_COUNT = 6

function ThemeHolidaysPageInner() {
  const { convert } = usePrice()
  const searchParams = useSearchParams()
  const initialTheme = searchParams.get("theme")

  const [searchQuery, setSearchQuery] = useState("")
  const [themeFilter, setThemeFilter] = useState<string[]>(
    initialTheme ? [decodeURIComponent(initialTheme)] : []
  )
  const [budgetFilter, setBudgetFilter] = useState<number[]>([])
  const [durationFilter, setDurationFilter] = useState<number[]>([])
  const [sortBy, setSortBy] = useState<"popular" | "price_asc" | "price_desc" | "duration_asc">("popular")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const filtered = useMemo(() => {
    let result = [...themePackages]

    if (searchQuery.trim())
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.country.toLowerCase().includes(searchQuery.toLowerCase())
      )

    if (themeFilter.length > 0)
      result = result.filter(p => themeFilter.includes(p.theme))

    if (budgetFilter.length > 0)
      result = result.filter(p =>
        budgetFilter.some(max => {
          if (max === 25000) return p.price < 25000
          if (max === 75000) return p.price >= 25000 && p.price <= 75000
          if (max === 150000) return p.price > 75000 && p.price <= 150000
          return p.price > 150000
        })
      )

    if (durationFilter.length > 0)
      result = result.filter(p =>
        durationFilter.some(max => {
          const range = durationRanges.find(d => d.max === max)
          return range ? p.nights + 1 >= range.min && p.nights + 1 <= range.max : false
        })
      )

    if (sortBy === "price_asc") result.sort((a, b) => a.price - b.price)
    if (sortBy === "price_desc") result.sort((a, b) => b.price - a.price)
    if (sortBy === "duration_asc") result.sort((a, b) => a.nights - b.nights)

    return result
  }, [searchQuery, themeFilter, budgetFilter, durationFilter, sortBy])

  useMemo(() => { setVisibleCount(INITIAL_VISIBLE) }, [filtered.length])

  const visiblePackages = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const toggle = (arr: string[], val: string, set: (v: string[]) => void) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const toggleNum = (arr: number[], val: number, set: (v: number[]) => void) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const clearAll = () => {
    setSearchQuery("")
    setThemeFilter([])
    setBudgetFilter([])
    setDurationFilter([])
    setVisibleCount(INITIAL_VISIBLE)
  }

  const activeFiltersCount = themeFilter.length + budgetFilter.length + durationFilter.length

  const Sidebar = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Filters</p>
        <button onClick={clearAll} className="text-xs text-blue-600 font-semibold">Clear All</button>
      </div>

      {/* Theme */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Theme</p>
        <div className="space-y-1.5">
          {themes.map(t => (
            <label key={t} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={themeFilter.includes(t)}
                onChange={() => toggle(themeFilter, t, setThemeFilter)}
                className="accent-blue-600"
              />
              <span className="text-sm text-gray-600 flex items-center gap-1.5">
                <span>{themeIcons[t]}</span>
                {t}
              </span>
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
              <input
                type="checkbox"
                checked={budgetFilter.includes(max)}
                onChange={() => toggleNum(budgetFilter, max, setBudgetFilter)}
                className="accent-blue-600"
              />
              <span className="text-sm text-gray-600">{label}</span>
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
              <input
                type="checkbox"
                checked={durationFilter.includes(max)}
                onChange={() => toggleNum(durationFilter, max, setDurationFilter)}
                className="accent-blue-600"
              />
              <span className="text-sm text-gray-600">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  const itemListJsonLd = buildItemListSchema({
    name: "Theme Holidays — Get Trip Go",
    url: "https://gettripgo.com/theme-holidays",
    items: themePackages.map((p) => ({
      name: p.name,
      url: `https://gettripgo.com/theme-holidays/${encodeURIComponent(p.theme)}/${p.slug}`,
    })),
  })

  return (
    <div className="min-h-screen bg-gray-100 pb-20 sm:pb-0">
      <Script
        id="theme-holidays-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img
          src="/images/external/unsplash-147651452553.jpg"
          alt="Theme Holidays"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Explore Holidays by Theme</h1>
          <p className="text-white/80 text-sm mt-1">Find your perfect trip — honeymoon, adventure, luxury & more</p>
        </div>
        <Link href="/" className="absolute top-16 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full">
        </Link>
      </div>

      {/* ✅ REMOVED: Theme Pills bar entirely */}

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
                  placeholder="Search by destination, theme, country..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-400"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">✕</button>
                )}
              </div>

              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-white text-sm font-semibold text-gray-700 px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 whitespace-nowrap"
              >
                ⚙ Filters
                {activeFiltersCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">{activeFiltersCount}</span>
                )}
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

            {/* ✅ REMOVED: "{filtered.length} packages found" line */}

            {/* Cards */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl text-gray-400">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-lg font-semibold">No packages found</p>
                <p className="text-sm mt-1">Try adjusting your filters</p>
                <button onClick={clearAll} className="mt-4 text-blue-600 text-sm font-semibold underline">Clear all filters</button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {visiblePackages.map(pkg => {
                    const color = themeColors[pkg.theme] || "#1A56F0"
                    return (
                      <Link
                        key={pkg.slug}
                        href={`/theme-holidays/${pkg.theme}/${pkg.slug}`}
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
                            <span className="absolute top-3 left-3 bg-white text-xs font-bold px-2 py-1 rounded-full" style={{ color }}>
                              {pkg.tag}
                            </span>
                          )}
                          <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                            {pkg.duration}
                          </span>
                          <span
                            className="absolute bottom-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"
                            style={{ backgroundColor: color }}
                          >
                            {themeIcons[pkg.theme]} {pkg.theme}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h3 className="text-sm font-bold text-gray-900 mb-1">{pkg.name}</h3>
                          <p className="text-xs text-gray-500 mb-3">📍 {pkg.destination}, {pkg.country}</p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {pkg.highlights.slice(0, 3).map(h => (
                              <span key={h} className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}15`, color }}>
                                {h}
                              </span>
                            ))}
                          </div>

                          <hr className="border-gray-100 mb-3" />

                          <div className="flex items-end justify-between">
                            <div>
                              <p className="text-xs text-gray-400">Starting from</p>
                              <div className="flex items-baseline gap-1">
                                <span className="text-xl font-extrabold text-gray-900">{convert(pkg.price)}</span>
                                <span className="text-xs text-gray-400">/person</span>
                              </div>
                            </div>
                            <span className="text-sm font-bold px-3 py-1.5 rounded-full" style={{ color, backgroundColor: `${color}15` }}>
                              View Details
                            </span>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
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
                      View All Packages
                    </button>
                  </div>
                )}

                {!hasMore && filtered.length > INITIAL_VISIBLE && (
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">✓ All packages loaded</p>
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
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl"
              >
                Show Packages
              </button>
            </div>
          </div>
        </>
      )}

      <BottomNav />
    </div>
  )
}

function ThemeHolidaysPageInner2() {
  return <Suspense><ThemeHolidaysPageInner /></Suspense>
}
export default ThemeHolidaysPageInner2;
