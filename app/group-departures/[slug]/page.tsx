"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getGroupDepartureBySlug } from "@/data/groupDepartures"
import { getItinerary } from "@/data/itineraries"
import EnquiryModal from "@/components/EnquiryModal"
import BottomNav from "@/components/BottomNav"
import { usePrice } from "@/hooks/usePrice"

const seriesColors: Record<string, string> = {
  "Go English": "#1A56F0",
  "Special Indian": "#D97706",
  "Central & East Europe": "#7C3AED",
  "UK & France": "#0891B2",
  "Scandinavia": "#059669",
}

export default function GroupDepartureDetailPage() {
  const { convert } = usePrice()
  const { slug } = useParams()
  const pkg = getGroupDepartureBySlug(slug as string)
  const itinerary = getItinerary(slug as string)

  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "dates" | "inclusions" | "pricing">("overview")
  const [expandedDay, setExpandedDay] = useState<number | null>(1)
  const [travelers, setTravelers] = useState(2)
  const [selectedDate, setSelectedDate] = useState(0)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
        <p className="text-6xl">🌍</p>
        <p className="text-xl font-bold text-gray-700">Tour not found</p>
        <Link href="/group-departures" className="text-blue-600 font-semibold underline">
        </Link>
      </div>
    )
  }

  const seriesColor = seriesColors[pkg.series] || "#1A56F0"

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "dates", label: "Departure Dates" },
    { id: "inclusions", label: "Inclusions" },
    { id: "pricing", label: "Pricing" },
  ] as const

  const totalCost = pkg.priceINR * travelers
  const gst = Math.round(totalCost * 0.05)
  const grandTotal = totalCost + gst

  return (
    <div className="min-h-screen bg-gray-100 pb-32 sm:pb-10">

      {/* Hero */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img src={pkg.heroImage} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <Link
          href="/group-departures"
          className="absolute top-16 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full"
        >
        </Link>

        {pkg.tag && (
          <span
            className="absolute top-16 right-4 text-white text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: seriesColor }}
          >
            {pkg.tag}
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <span
            className="text-white text-[10px] font-bold px-2 py-1 rounded-full mb-2 inline-block"
            style={{ backgroundColor: seriesColor }}
          >
            {pkg.series}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mt-1">{pkg.name}</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
              🗓 {pkg.days} Days / {pkg.nights} Nights
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
              🌍 {pkg.countries.length} Countries
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
              ✈ {pkg.departureDates.length} Departures
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 text-sm font-semibold px-4 py-1.5 rounded-full transition-all ${
                  activeTab === tab.id ? "text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
                style={activeTab === tab.id ? { backgroundColor: seriesColor } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <>
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Tour Overview</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Duration", value: `${pkg.days}D / ${pkg.nights}N`, icon: "🗓" },
                      { label: "Countries", value: `${pkg.countries.length} Countries`, icon: "🌍" },
                      { label: "Departures", value: `${pkg.departureDates.length} Dates`, icon: "✈" },
                      { label: "Series", value: pkg.series, icon: "🏷" },
                    ].map(stat => (
                      <div key={stat.label} className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-2xl mb-1">{stat.icon}</p>
                        <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
                        <p className="text-xs font-bold text-gray-800">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Countries Covered</h2>
                  <div className="flex flex-wrap gap-2">
                    {pkg.countries.map((c, i) => (
                      <div key={c} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2">
                        <span
                          className="w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: seriesColor }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-700 font-medium capitalize">
                          {c.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Tour Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.highlights.map(h => (
                      <div
                        key={h}
                        className="flex items-center gap-2 rounded-xl px-3 py-2"
                        style={{ backgroundColor: `${seriesColor}15` }}
                      >
                        <span className="font-bold text-sm flex-shrink-0" style={{ color: seriesColor }}>✓</span>
                        <span className="text-sm text-gray-700 font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {pkg.series === "Special Indian" && (
                  <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
                    <h3 className="text-sm font-bold text-orange-700 mb-2">🇮🇳 Special Indian Series</h3>
                    <div className="space-y-1">
                      {["Indian meals (breakfast & dinner) included", "Hindi-speaking tour manager", "Jain food option available on request", "Travel with fellow Indian tourists"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-orange-500 text-sm">✓</span>
                          <span className="text-sm text-orange-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pkg.images.length > 1 && (
                  <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Photos</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {pkg.images.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden h-32">
                          <img src={img} alt={`${pkg.name} ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ITINERARY */}
            {activeTab === "itinerary" && (
              <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-6">Day-by-Day Itinerary</h2>
                {itinerary.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <p className="text-5xl mb-3">🗓</p>
                    <p className="text-base font-semibold text-gray-600">Detailed itinerary coming soon</p>
                    <p className="text-sm mt-1 mb-5">Please enquire for the full day-by-day programme</p>
                    <button
                      onClick={() => setEnquiryOpen(true)}
                      className="text-white text-sm font-bold px-6 py-2.5 rounded-xl"
                      style={{ backgroundColor: seriesColor }}
                    >
                      Request Itinerary
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {itinerary.map(day => (
                      <div key={day.day} className="border border-gray-100 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: seriesColor }}
                            >
                              {day.day}
                            </div>
                            <div>
                              <p className="text-xs font-semibold" style={{ color: seriesColor }}>Day {day.day}</p>
                              <p className="text-sm font-bold text-gray-800">{day.title}</p>
                            </div>
                          </div>
                          <span className="text-gray-400 text-lg flex-shrink-0">
                            {expandedDay === day.day ? "−" : "+"}
                          </span>
                        </button>
                        {expandedDay === day.day && (
                          <div className="px-4 pb-4 border-t border-gray-50">
                            <p className="text-sm text-gray-600 leading-relaxed mt-3">{day.description}</p>
                            <div className="mt-3 flex items-center gap-2">
                              <span className="text-xs font-bold text-gray-500">🍽 Meals:</span>
                              <span className="text-xs text-gray-600">{day.meals}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* DEPARTURE DATES */}
            {activeTab === "dates" && (
              <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Departure Dates 2026</h2>
                <p className="text-sm text-gray-500 mb-6">Select your preferred departure date to check availability</p>
                <div className="space-y-3">
                  {pkg.departureDates.map((date, i) => {
                    const isSelected = selectedDate === i
                    const parts = date.split(" ")
                    const day = parts[0]
                    const month = parts[1]
                    return (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(i)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                          isSelected ? "border-transparent" : "border-gray-100 hover:border-gray-200"
                        }`}
                        style={isSelected ? { backgroundColor: `${seriesColor}10`, borderColor: seriesColor } : {}}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: isSelected ? seriesColor : "#f3f4f6" }}
                          >
                            <span className={`text-lg font-extrabold leading-none ${isSelected ? "text-white" : "text-gray-800"}`}>{day}</span>
                            <span className={`text-xs font-semibold ${isSelected ? "text-white/80" : "text-gray-500"}`}>{month}</span>
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-bold text-gray-800">{date}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{pkg.days} days · Ends approx. {getEndDate(date, pkg.days)}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          {i === 0 && (
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full block mb-1">Next Departure</span>
                          )}
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${isSelected ? "text-white" : "text-gray-600 bg-gray-100"}`}
                            style={isSelected ? { backgroundColor: seriesColor } : {}}
                          >
                            {isSelected ? "Selected" : "Select"}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="w-full text-white font-bold py-3 rounded-xl"
                    style={{ backgroundColor: seriesColor }}
                  >
                    Enquire for {pkg.departureDates[selectedDate]}
                  </button>
                </div>
              </div>
            )}

            {/* INCLUSIONS */}
            {activeTab === "inclusions" && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">
                    <span className="text-green-500 mr-2">✓</span> What's Included
                  </h2>
                  <div className="space-y-2">
                    {pkg.inclusions.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-green-50 rounded-xl px-3 py-2.5">
                        <span className="text-green-500 font-bold text-sm mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">
                    <span className="text-red-400 mr-2">✕</span> What's Not Included
                  </h2>
                  <div className="space-y-2">
                    {pkg.exclusions.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl px-3 py-2.5">
                        <span className="text-red-400 font-bold text-sm mt-0.5 flex-shrink-0">✕</span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PRICING */}
            {activeTab === "pricing" && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Price Calculator</h2>
                  <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-semibold text-gray-700">Number of Travelers</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setTravelers(Math.max(1, travelers - 1))} className="w-8 h-8 rounded-full border border-gray-300 font-bold text-gray-600 hover:bg-gray-100">−</button>
                      <span className="text-lg font-bold text-gray-800 w-6 text-center">{travelers}</span>
                      <button onClick={() => setTravelers(travelers + 1)} className="w-8 h-8 rounded-full border border-gray-300 font-bold text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price per person</span>
                      <div className="text-right">
                        <span className="font-semibold text-gray-800">{convert(pkg.priceINR)}</span>
                        <span className="text-xs text-gray-400 ml-1">(€{pkg.priceEUR})</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">× {travelers} traveler{travelers > 1 ? "s" : ""}</span>
                      <span className="font-semibold text-gray-800">{convert(totalCost)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">GST (5%)</span>
                      <span className="font-semibold text-gray-800">{convert(gst)}</span>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-800">Total Amount</span>
                      <span className="text-xl font-extrabold" style={{ color: seriesColor }}>{convert(grandTotal)}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Selected Departure</p>
                    <p className="text-sm font-bold text-gray-800">{pkg.departureDates[selectedDate]}</p>
                    <button onClick={() => setActiveTab("dates")} className="text-xs font-semibold mt-1" style={{ color: seriesColor }}>Change date →</button>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-4">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-2">Payment Options</p>
                    <div className="space-y-2">
                      {["Book now with ₹5,000 token amount", "No Cost EMI on all major credit cards", "Full payment via UPI, Net Banking, Cards", "Group discount available for 10+ travelers"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-green-500 text-sm">✓</span>
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Booking Card — Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-20">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">Starting from</p>
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="text-3xl font-extrabold text-gray-900">{convert(pkg.priceINR)}</span>
                <span className="text-sm text-gray-400">/person</span>
              </div>
              <p className="text-xs text-gray-400 mb-1">€{pkg.priceEUR} per person</p>
              <div className="rounded-xl p-3 mb-4" style={{ backgroundColor: `${seriesColor}10` }}>
                <p className="text-xs font-semibold mb-0.5" style={{ color: seriesColor }}>Next Departure</p>
                <p className="text-sm font-bold text-gray-800">{pkg.departureDates[0]}</p>
                <p className="text-xs text-gray-500">{pkg.departureDates.length} dates available</p>
              </div>
              <hr className="border-gray-100 mb-4" />
              <div className="space-y-1.5 mb-5">
                {pkg.inclusions.slice(0, 4).map((item, i) => (
                  <p key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </p>
                ))}
              </div>
              <button onClick={() => setEnquiryOpen(true)} className="w-full text-white font-bold py-3 rounded-xl mb-3 transition-colors" style={{ backgroundColor: seriesColor }}>Book Now</button>
              <button onClick={() => setEnquiryOpen(true)} className="w-full border-2 font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm" style={{ borderColor: seriesColor, color: seriesColor }}>Get Quote</button>
              <p className="text-center text-xs text-gray-400 mt-3">📞 <span className="font-semibold text-gray-600">+91 98765 43210</span></p>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-lg px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-xl font-extrabold text-gray-900">{convert(pkg.priceINR)}<span className="text-xs font-normal text-gray-400">/person</span></p>
          </div>
          <div className="flex gap-2 flex-1 justify-end">
            <button onClick={() => setEnquiryOpen(true)} className="border-2 font-bold text-sm px-4 py-2.5 rounded-xl" style={{ borderColor: seriesColor, color: seriesColor }}>Quote</button>
            <button onClick={() => setEnquiryOpen(true)} className="text-white font-bold text-sm px-5 py-2.5 rounded-xl" style={{ backgroundColor: seriesColor }}>Book Now</button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageName={`${pkg.name} — ${pkg.departureDates[selectedDate]}`}
      />

      <BottomNav />
    </div>
  )
}

function getEndDate(startDate: string, days: number): string {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  }
  const parts = startDate.split(" ")
  const day = parseInt(parts[0])
  const month = months[parts[1]]
  const year = parseInt(parts[2])
  const date = new Date(year, month, day + days - 1)
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}