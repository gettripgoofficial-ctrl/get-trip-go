"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { customPackages } from "@/data/customPackages"
import EnquiryModal from "@/components/EnquiryModal"
import BottomNav from "@/components/BottomNav"
import { usePrice } from "@/hooks/usePrice"
import FAQSection from "@/components/FAQSection"
import { customizedItinerariesFaqs } from "@/data/faqData"
import { buildItemListSchema } from "@/lib/seo/tripSchema"


const types = ["Family", "Couple", "Honeymoon", "Adventure", "Cultural", "Beach"]
const durations = [
  { label: "1-5 Nights", min: 1, max: 5 },
  { label: "6-8 Nights", min: 6, max: 8 },
  { label: "9-12 Nights", min: 9, max: 12 },
  { label: "12+ Nights", min: 13, max: 99 },
]
const budgetRanges = [
  { label: "< ₹50,000", max: 50000 },
  { label: "₹50,000 - ₹1,00,000", max: 100000 },
  { label: "₹1,00,000 - ₹2,00,000", max: 200000 },
  { label: "> ₹2,00,000", max: Infinity },
]

export default function CustomizedItinerariesClient() {
  const { convert } = usePrice()
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string[]>([])
  const [durationFilter, setDurationFilter] = useState<number[]>([])
  const [budgetFilter, setBudgetFilter] = useState<number[]>([])
  const [sortBy, setSortBy] = useState<"popular" | "price_asc" | "price_desc" | "duration_asc">("popular")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  const filtered = useMemo(() => {
    let result = [...customPackages]

    if (searchQuery.trim())
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.cities.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.type.toLowerCase().includes(searchQuery.toLowerCase())
      )

    if (typeFilter.length > 0)
      result = result.filter(p => typeFilter.includes(p.type))

    if (durationFilter.length > 0)
      result = result.filter(p =>
        durationFilter.some(max => {
          const range = durations.find(d => d.max === max)
          return range ? p.nights >= range.min && p.nights <= range.max : false
        })
      )

    if (budgetFilter.length > 0)
      result = result.filter(p =>
        budgetFilter.some(max => {
          if (max === 50000) return p.price < 50000
          if (max === 100000) return p.price >= 50000 && p.price <= 100000
          if (max === 200000) return p.price > 100000 && p.price <= 200000
          return p.price > 200000
        })
      )

    if (sortBy === "price_asc") result.sort((a, b) => a.price - b.price)
    if (sortBy === "price_desc") result.sort((a, b) => b.price - a.price)
    if (sortBy === "duration_asc") result.sort((a, b) => a.nights - b.nights)

    return result
  }, [searchQuery, typeFilter, durationFilter, budgetFilter, sortBy])

  const toggleType = (t: string) =>
    setTypeFilter(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])

  const toggleDuration = (max: number) =>
    setDurationFilter(prev => prev.includes(max) ? prev.filter(x => x !== max) : [...prev, max])

  const toggleBudget = (max: number) =>
    setBudgetFilter(prev => prev.includes(max) ? prev.filter(x => x !== max) : [...prev, max])

  const clearAll = () => {
    setSearchQuery("")
    setTypeFilter([])
    setDurationFilter([])
    setBudgetFilter([])
  }

  const activeFiltersCount = typeFilter.length + durationFilter.length + budgetFilter.length

  const handleGetQuote = (name: string) => {
    setSelectedPackage(name)
    setEnquiryOpen(true)
  }

  const Sidebar = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Filters</p>
        <button onClick={clearAll} className="text-xs text-blue-600 font-semibold">Clear All</button>
      </div>

      {/* Type */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Trip Type</p>
        <div className="space-y-1.5">
          {types.map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={typeFilter.includes(type)}
                onChange={() => toggleType(type)}
                className="accent-blue-600"
              />
              <span className="text-sm text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-2">Duration</p>
        <div className="space-y-1.5">
          {durations.map(({ label, max }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={durationFilter.includes(max)}
                onChange={() => toggleDuration(max)}
                className="accent-blue-600"
              />
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
    </div>
  )

  const itemListJsonLd = buildItemListSchema({
    name: "Customized Holiday Itineraries — Get Trip Go",
    url: "https://gettripgo.com/customized-itineraries",
    items: customPackages.map((p) => ({
      name: p.name,
      url: `https://gettripgo.com/customized-itineraries/${p.slug}`,
    })),
  })

  return (
    <div className="min-h-screen bg-gray-100 pb-20 sm:pb-0">
      <Script
        id="customized-itineraries-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <Image
          src="/images/external/unsplash-148808506138.jpg"
          alt="Customized Itineraries"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Customized Itineraries</h1>
          <p className="text-white/80 text-sm mt-1">Handcrafted journeys — tailored just for you</p>
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

            {/* Search + Controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search by name, city, country, type..."
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
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="bg-white text-sm font-semibold text-gray-700 px-3 py-2.5 rounded-xl shadow-sm border border-gray-200"
              >
                <option value="popular">Popular</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="duration_asc">Duration: Shortest First</option>
              </select>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-4"></p>

            {/* Cards Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400 bg-white rounded-2xl">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-lg font-semibold">No packages found</p>
                <p className="text-sm mt-1">Try adjusting your filters</p>
                <button onClick={clearAll} className="mt-4 text-blue-600 text-sm font-semibold underline">Clear all filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map(pkg => (
                  <div key={pkg.slug} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                    {/* Image */}
                    <Link href={`/customized-itineraries/${pkg.slug}`}>
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={pkg.heroImage}
                          alt={pkg.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {pkg.tag && (
                          <span className="absolute top-3 left-3 bg-white text-xs font-bold px-2 py-1 rounded-full" style={{ color: pkg.typeColor }}>
                            {pkg.tag}
                          </span>
                        )}
                        <span
                          className="absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded-full"
                          style={{ backgroundColor: pkg.typeColor }}
                        >
                          {pkg.type}
                        </span>
                        <span className="absolute bottom-3 left-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                          {pkg.duration}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-4">
                      <Link href={`/customized-itineraries/${pkg.slug}`}>
                        <p className="text-xs text-blue-600 font-semibold mb-0.5">{pkg.cities}</p>
                        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2 hover:text-blue-600 transition-colors">{pkg.name}</h3>
                      </Link>

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
                          <span key={h} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100">{h}</span>
                        ))}
                      </div>

                      <hr className="border-gray-100 mb-3" />

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-extrabold text-gray-900">{convert(pkg.price)}</span>
                            <span className="text-xs text-gray-400">/Person</span>
                          </div>
                          <p className="text-[10px] text-gray-400">Total {convert(pkg.totalPrice)}</p>
                        </div>
                        <button
                          onClick={() => handleGetQuote(pkg.name)}
                          className="text-white text-sm font-bold px-4 py-2 rounded-xl active:scale-95 transition-all"
                          style={{ backgroundColor: pkg.typeColor }}
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
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
            <div className="p-4"><Sidebar /></div>
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

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageName={selectedPackage}
      />

      <FAQSection faqs={customizedItinerariesFaqs} />
      <BottomNav />
    </div>
  )
}