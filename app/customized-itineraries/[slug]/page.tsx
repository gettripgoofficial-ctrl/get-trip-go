"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getCustomPackageBySlug } from "@/data/customPackages"
import EnquiryModal from "@/components/EnquiryModal"
import BottomNav from "@/components/BottomNav"

export default function CustomPackageDetailPage() {
  const { slug } = useParams()
  const pkg = getCustomPackageBySlug(slug as string)

  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "inclusions" | "pricing">("overview")
  const [expandedDay, setExpandedDay] = useState<number | null>(1)
  const [travelers, setTravelers] = useState(2)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
        <p className="text-6xl">🌍</p>
        <p className="text-xl font-bold text-gray-700">Package not found</p>
        <Link href="/customized-itineraries" className="text-blue-600 font-semibold underline">
        </Link>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "inclusions", label: "Inclusions" },
    { id: "pricing", label: "Pricing" },
  ] as const

  const totalCost = pkg.price * travelers
  const gst = Math.round(totalCost * 0.05)
  const grandTotal = totalCost + gst

  return (
    <div className="min-h-screen bg-gray-100 pb-32 sm:pb-10">

      {/* Hero */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img src={pkg.heroImage} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <Link
          href="/customized-itineraries"
          className="absolute top-16 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full"
        >
        </Link>

        {pkg.tag && (
          <span className="absolute top-16 right-4 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: pkg.typeColor }}>
            {pkg.tag}
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: pkg.typeColor === "#DB2777" ? "#f9a8d4" : "#93c5fd" }}>
            {pkg.type} · {pkg.country}
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{pkg.name}</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">🗓 {pkg.duration}</span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">🏨 {pkg.inclusions.hotel}</span>
            {pkg.inclusions.flights && (
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">✈ Flights Included</span>
            )}
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">📍 {pkg.cities}</span>
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
                  activeTab === tab.id ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
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
                {/* Quick Stats */}
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Package Overview</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Duration", value: pkg.duration, icon: "🗓" },
                      { label: "Hotel", value: pkg.inclusions.hotel, icon: "🏨" },
                      { label: "Meals", value: pkg.inclusions.meals, icon: "🍽" },
                      { label: "Activities", value: pkg.inclusions.activities, icon: "🎯" },
                    ].map(stat => (
                      <div key={stat.label} className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-2xl mb-1">{stat.icon}</p>
                        <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
                        <p className="text-xs font-bold text-gray-800">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Trip Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ backgroundColor: `${pkg.typeColor}15` }}>
                        <span className="font-bold text-sm" style={{ color: pkg.typeColor }}>✓</span>
                        <span className="text-sm text-gray-700 font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trip Type */}
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-3">Trip Type</h2>
                  <span className="text-white text-sm font-bold px-4 py-2 rounded-full" style={{ backgroundColor: pkg.typeColor }}>
                    {pkg.type}
                  </span>
                </div>

                {/* Photo Gallery */}
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
                <div className="space-y-3">
                  {pkg.itinerary.map(day => (
                    <div key={day.day} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: pkg.typeColor }}
                          >
                            {day.day}
                          </div>
                          <div>
                            <p className="text-xs font-semibold" style={{ color: pkg.typeColor }}>Day {day.day}</p>
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
                    {pkg.inclusions_list.map((item, i) => (
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
                    {pkg.exclusions_list.map((item, i) => (
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
                      <button
                        onClick={() => setTravelers(Math.max(1, travelers - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 font-bold text-gray-600 hover:bg-gray-100"
                      >−</button>
                      <span className="text-lg font-bold text-gray-800 w-6 text-center">{travelers}</span>
                      <button
                        onClick={() => setTravelers(travelers + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 font-bold text-gray-600 hover:bg-gray-100"
                      >+</button>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price per person</span>
                      <span className="font-semibold text-gray-800">₹{pkg.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">× {travelers} traveler{travelers > 1 ? "s" : ""}</span>
                      <span className="font-semibold text-gray-800">₹{totalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">GST (5%)</span>
                      <span className="font-semibold text-gray-800">₹{gst.toLocaleString()}</span>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-800">Total Amount</span>
                      <span className="text-xl font-extrabold" style={{ color: pkg.typeColor }}>
                        ₹{grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm p-4">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-2">Payment Options</p>
                    <div className="space-y-2">
                      {["Book now with ₹2,000 token amount", "No Cost EMI on all major credit cards", "Full payment via UPI, Net Banking, Cards"].map((item, i) => (
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
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-extrabold text-gray-900">₹{pkg.price.toLocaleString()}</span>
                <span className="text-sm text-gray-400">/person</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">Total ₹{pkg.totalPrice.toLocaleString()} for 2 persons</p>

              <hr className="border-gray-100 mb-4" />

              <div className="space-y-2 mb-5">
                {[
                  pkg.inclusions.flights ? "✈ " + pkg.inclusions.flights : "✈ Flights not included",
                  "🏨 " + pkg.inclusions.hotel,
                  "🍽 " + pkg.inclusions.meals,
                  "🎯 " + pkg.inclusions.activities,
                  "🚗 " + pkg.inclusions.transfers,
                ].map((item, i) => (
                  <p key={i} className="text-xs text-gray-600">{item}</p>
                ))}
              </div>

              <button
                onClick={() => setEnquiryOpen(true)}
                className="w-full text-white font-bold py-3 rounded-xl mb-3 transition-colors"
                style={{ backgroundColor: pkg.typeColor }}
              >
                Get Quote
              </button>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="w-full border font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                style={{ borderColor: pkg.typeColor, color: pkg.typeColor }}
              >
                Enquire Now
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                📞 <span className="font-semibold text-gray-600">+91 98765 43210</span>
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-lg px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-xl font-extrabold text-gray-900">
              ₹{pkg.price.toLocaleString()}<span className="text-xs font-normal text-gray-400">/person</span>
            </p>
          </div>
          <div className="flex gap-2 flex-1 justify-end">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="border font-bold text-sm px-4 py-2.5 rounded-xl"
              style={{ borderColor: pkg.typeColor, color: pkg.typeColor }}
            >
              Enquire
            </button>
            <button
              onClick={() => setEnquiryOpen(true)}
              className="text-white font-bold text-sm px-5 py-2.5 rounded-xl"
              style={{ backgroundColor: pkg.typeColor }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageName={pkg.name}
      />

      <BottomNav />
    </div>
  )
}