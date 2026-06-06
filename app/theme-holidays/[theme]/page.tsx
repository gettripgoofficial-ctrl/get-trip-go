"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { themePackages } from "@/data/themePackages"
import BottomNav from "@/components/BottomNav"

const themeColors: Record<string, string> = {
  "Honeymoon": "#be185d",
  "Family": "#0369a1",
  "Adventure": "#b45309",
  "Beach": "#0891b2",
  "Hill Stations": "#15803d",
  "Wildlife & Safari": "#a16207",
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

const themeBg: Record<string, string> = {
  "Honeymoon": "from-pink-50 to-rose-100",
  "Family": "from-blue-50 to-sky-100",
  "Adventure": "from-amber-50 to-yellow-100",
  "Beach": "from-cyan-50 to-teal-100",
  "Hill Stations": "from-green-50 to-emerald-100",
  "Wildlife & Safari": "from-yellow-50 to-amber-100",
  "Spiritual": "from-purple-50 to-violet-100",
  "Luxury": "from-orange-50 to-amber-100",
}

const ALL_THEMES = [
  "Honeymoon",
  "Family",
  "Adventure",
  "Beach",
  "Hill Stations",
  "Wildlife & Safari",
  "Spiritual",
  "Luxury",
]

const INITIAL_VISIBLE = 6

export default function ThemeFilteredPage() {
  const params = useParams()
  const router = useRouter()
  const rawTheme = params?.theme as string
  const urlTheme = decodeURIComponent(rawTheme || "")

  const [activeTheme, setActiveTheme] = useState<string>(urlTheme || ALL_THEMES[0])

  const themeColor = themeColors[activeTheme] || "#374151"
  const themeIcon = themeIcons[activeTheme] || "🌍"
  const bgGradient = themeBg[activeTheme] || "from-gray-50 to-gray-100"

  const [budget, setBudget] = useState<[number, number]>([0, 500000])
  const [durationFilter, setDurationFilter] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const allPackages = useMemo(
    () => themePackages.filter((p) => p.theme === activeTheme),
    [activeTheme]
  )

  const filtered = useMemo(() => {
    return allPackages.filter((p) => {
      const inBudget = p.price >= budget[0] && p.price <= budget[1]
      const inDuration =
        durationFilter.length === 0 ||
        durationFilter.some((d) => {
          if (d === "1-5") return p.nights >= 1 && p.nights <= 5
          if (d === "6-8") return p.nights >= 6 && p.nights <= 8
          if (d === "9-12") return p.nights >= 9 && p.nights <= 12
          if (d === "13+") return p.nights >= 13
          return true
        })
      return inBudget && inDuration
    })
  }, [allPackages, budget, durationFilter])

  const visible = filtered.slice(0, visibleCount)

  const handleThemeSwitch = (t: string) => {
    router.push(`/theme-holidays?theme=${encodeURIComponent(t)}`)
  }

  const toggleDuration = (d: string) => {
    setDurationFilter((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    )
    setVisibleCount(INITIAL_VISIBLE)
  }

  const hasFilters = budget[0] !== 0 || budget[1] !== 500000 || durationFilter.length > 0

  return (
    <div className="min-h-screen bg-gray-50 pb-24 lg:pb-0">
      {/* Hero Header */}
      <div className={`bg-gradient-to-br ${bgGradient} border-b border-gray-200 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back */}
          <Link
            href="/theme-holidays"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-800 mb-5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Themes
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl transition-all duration-200">{themeIcon}</span>
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 transition-all duration-200">
                {activeTheme} Holidays
              </h1>
              {/* ✅ REMOVED: {allPackages.length} curated packages */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-6">
              <h2 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">
                Filters
              </h2>

              {/* Theme Switcher */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-600 mb-3">Holiday Theme</p>
                <div className="space-y-1.5">
                  {ALL_THEMES.map((t) => {
                    const isActive = activeTheme === t
                    const color = themeColors[t]
                    return (
                      <button
                        key={t}
                        onClick={() => handleThemeSwitch(t)}
                        className={`w-full text-left text-xs px-3 py-2 rounded-lg border transition-all flex items-center gap-2 ${
                          isActive
                            ? "text-white border-transparent font-semibold"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                        style={isActive ? { backgroundColor: color } : {}}
                      >
                        <span className="text-sm">{themeIcons[t]}</span>
                        <span>{t}</span>
                        {/* ✅ REMOVED: package count badge */}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-5" />

              {/* Budget */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-600 mb-3">Budget (per person)</p>
                <div className="space-y-1.5">
                  {[
                    { label: "Under ₹50K", range: [0, 50000] as [number, number] },
                    { label: "₹50K – ₹1L", range: [50000, 100000] as [number, number] },
                    { label: "₹1L – ₹2L", range: [100000, 200000] as [number, number] },
                    { label: "Above ₹2L", range: [200000, 500000] as [number, number] },
                  ].map((b) => {
                    const isActive = budget[0] === b.range[0] && budget[1] === b.range[1]
                    return (
                      <button
                        key={b.label}
                        onClick={() => setBudget(isActive ? [0, 500000] : b.range)}
                        className={`w-full text-left text-xs px-3 py-2 rounded-lg border transition-all ${
                          isActive
                            ? "text-white border-transparent"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                        style={isActive ? { backgroundColor: themeColor } : {}}
                      >
                        {b.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Duration */}
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-3">Duration</p>
                <div className="space-y-1.5">
                  {[
                    { label: "1–5 Nights", val: "1-5" },
                    { label: "6–8 Nights", val: "6-8" },
                    { label: "9–12 Nights", val: "9-12" },
                    { label: "13+ Nights", val: "13+" },
                  ].map((d) => {
                    const isActive = durationFilter.includes(d.val)
                    return (
                      <button
                        key={d.val}
                        onClick={() => toggleDuration(d.val)}
                        className={`w-full text-left text-xs px-3 py-2 rounded-lg border transition-all ${
                          isActive
                            ? "text-white border-transparent"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                        style={isActive ? { backgroundColor: themeColor } : {}}
                      >
                        {d.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Reset */}
              {hasFilters && (
                <button
                  onClick={() => {
                    setBudget([0, 500000])
                    setDurationFilter([])
                    setVisibleCount(INITIAL_VISIBLE)
                  }}
                  className="mt-5 w-full text-xs font-semibold text-gray-400 hover:text-gray-700 underline transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1 min-w-0">
            {/* Mobile theme scroll pills */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-4" style={{ scrollbarWidth: "none" }}>
              {ALL_THEMES.map((t) => {
                const isActive = activeTheme === t
                return (
                  <button
                    key={t}
                    onClick={() => handleThemeSwitch(t)}
                    className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full border whitespace-nowrap transition-all flex items-center gap-1 ${
                      isActive ? "text-white border-transparent" : "border-gray-200 text-gray-600 bg-white"
                    }`}
                    style={isActive ? { backgroundColor: themeColors[t] } : {}}
                  >
                    {themeIcons[t]} {t}
                  </button>
                )
              })}
            </div>

            {/* ✅ REMOVED: Results count block entirely */}

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-4xl mb-3">🔍</p>
                <p className="font-semibold text-gray-600">No packages match your filters</p>
                <button
                  onClick={() => { setBudget([0, 500000]); setDurationFilter([]) }}
                  className="mt-4 text-sm underline"
                  style={{ color: themeColor }}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {visible.map((pkg) => (
                    <Link
                      key={pkg.slug}
                      href={`/theme-holidays/${encodeURIComponent(activeTheme)}/${pkg.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden bg-gray-100">
                        <img
                          src={pkg.heroImage}
                          alt={pkg.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                            style={{ backgroundColor: themeColor }}
                          >
                            {themeIcon} {activeTheme}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full text-gray-700">
                          {pkg.duration}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 line-clamp-2">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {pkg.destination}, {pkg.country}
                        </p>

                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs text-gray-400">Starting from</p>
                            <p className="text-lg font-extrabold text-gray-900">
                              ₹{pkg.price.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-400">per person</p>
                          </div>
                          <span
                            className="text-xs font-bold px-3 py-1.5 rounded-xl border-2 transition-colors"
                            style={{ borderColor: themeColor, color: themeColor }}
                          >
                            View →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More */}
                {visibleCount < filtered.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setVisibleCount((v) => v + 6)}
                      className="px-8 py-3 rounded-xl font-bold text-sm border-2 transition-all"
                      style={{ borderColor: themeColor, color: themeColor }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = themeColor
                        e.currentTarget.style.color = "white"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = themeColor
                      }}
                    >
                      Load More
                      {/* ✅ REMOVED: ({filtered.length - visibleCount} remaining) */}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}