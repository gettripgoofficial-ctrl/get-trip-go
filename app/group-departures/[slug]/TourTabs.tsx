"use client"
import { useState } from "react"
import Image from "next/image"
import { MapPin, LayoutDashboard, Map, Building2, CheckCircle, XCircle, ScrollText } from "lucide-react"
import { type GroupDeparture, DEFAULT_TERMS_AND_CONDITIONS, DEFAULT_BOOKING_POLICY, DEFAULT_CANCELLATION_POLICY } from "@/data/groupDepartures"
import Accordion from "./Accordion"

const TABS = ["Overview", "Itinerary", "Hotels", "Inclusions", "Exclusions", "Policies"] as const
type Tab = typeof TABS[number]

const TAB_ICONS: Record<Tab, React.ReactNode> = {
  Overview: <LayoutDashboard size={15} />,
  Itinerary: <Map size={15} />,
  Hotels: <Building2 size={15} />,
  Inclusions: <CheckCircle size={15} />,
  Exclusions: <XCircle size={15} />,
  Policies: <ScrollText size={15} />,
}

function ItineraryAccordion({ itinerary, images, heroImage }: {
  itinerary: { day: number; title: string; description: string; tags: string[] }[]
  images: string[]
  heroImage: string
}) {
  const [openDay, setOpenDay] = useState<number | null>(0)
  const allImages = [heroImage, ...images.filter(img => img !== heroImage)]

  return (
    <div className="space-y-3">
      {itinerary.map((stop, i) => {
        const isOpen = openDay === i
        const img = allImages[i % allImages.length]
        return (
          <div key={stop.day} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenDay(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-orange-600 border border-orange-400 rounded-full px-3 py-1 bg-white">
                  Day {stop.day}
                </span>
                <span className="text-sm font-semibold text-gray-800 text-left">{stop.title}</span>
              </div>
              <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0 ml-2">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 py-4 flex gap-4">
                <Image src={img} alt={stop.title} width={144} height={112} className="rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{stop.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {stop.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function TourTabs({ tour }: { tour: GroupDeparture }) {
  const [active, setActive] = useState<Tab>("Overview")

  return (
    <div>
      {/* Tab bar */}
      <div className="grid grid-cols-6 gap-2 mb-6 w-full">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`flex items-center justify-center gap-1.5 w-full text-sm font-semibold px-2 py-2.5 rounded-xl shadow-sm transition-all ${
              active === t ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {TAB_ICONS[t]}
            <span className="hidden sm:inline">{t}</span>
            <span className="sm:hidden text-[10px]">{t}</span>
          </button>
        ))}
      </div>
      {/* Overview */}
      {active === "Overview" && (
        <div className="space-y-4">

          {/* About This Tour */}
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="text-base font-bold text-gray-900 mb-2">About This Tour</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Experience this perfectly curated {tour.nights}N/{tour.days}D group tour across {tour.countries.join(", ")}. From iconic landmarks to cultural adventures, this journey offers unforgettable moments at every step.
            </p>
          </div>

          {/* Highlights - Things to do */}
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">🎯 Things To Do</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tour.highlights.slice(0, 4).map((h) => (
                <div key={h} className="flex flex-col items-center text-center gap-1.5 bg-blue-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="text-xs font-medium text-gray-700 leading-tight">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included - Highlights */}
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="text-base font-bold text-gray-900 mb-4">🌟 Highlights</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {[
                { icon: "✈️", label: "Flights" },
                { icon: "🚌", label: "Private Transfers" },
                { icon: "🛂", label: "Visa Assistance" },
                { icon: "🏨", label: "Hotels" },
                { icon: "🍽️", label: "Meals" },
                { icon: "👨‍💼", label: "Tour Manager" },
                { icon: "🕐", label: "24/7 Support" },
                { icon: "🎟️", label: "Entry Tickets" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all">
                  <span className="text-2xl">{f.icon}</span>
                  <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trip Tips */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-sm p-5 border border-blue-100">
            <h2 className="text-base font-bold text-gray-900 mb-1">💡 Trip Tips & Suggestions</h2>
            <p className="text-xs text-gray-400 mb-4">Curated just for this tour</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "🌤️", title: "Best Time to Visit", tip: `${tour.countries[0]} is best visited during spring (Apr–Jun) and autumn (Sep–Oct) for pleasant weather.` },
                { icon: "👗", title: "What to Pack", tip: "Carry comfortable walking shoes, light layers, universal adapter, and a small daypack for sightseeing." },
                { icon: "💱", title: "Currency Tip", tip: "Carry some local currency for tips and small purchases. Cards are widely accepted at most places." },
                { icon: "📸", title: "Photography", tip: "Golden hour (early morning & sunset) offers the most stunning shots at major landmarks." },
                { icon: "🍜", title: "Must-Try Food", tip: `Don't miss local specialties in ${tour.countries[0]}. Ask your tour manager for the best local eateries.` },
                { icon: "🧳", title: "Luggage Tip", tip: "One check-in bag (23kg) and one cabin bag recommended. Keep essentials in cabin bag for easy access." },
              ].map((s) => (
                <div key={s.title} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-white hover:shadow-md transition-all">
                  <span className="text-xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800 mb-0.5">{s.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Itinerary */}
      {active === "Itinerary" && (
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Itinerary</h2>
          {tour.itinerary && tour.itinerary.length > 0 ? (
            <ItineraryAccordion itinerary={tour.itinerary} images={tour.images} heroImage={tour.heroImage} />
          ) : (
            <p className="text-sm text-gray-400">Itinerary details coming soon.</p>
          )}
        </div>
      )}

      {/* Hotels */}
      {active === "Hotels" && (
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Hotels ({tour.nights} Nights)</h2>
          <p className="text-xs text-gray-400 mb-4">Stay details by city</p>
          {tour.hotels && tour.hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tour.hotels.map((hotel, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <Image src={hotel.image} alt={hotel.hotelName} width={64} height={64} className="rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-400 mb-0.5">{hotel.city} · {hotel.nightsLabel}</p>
                    <p className="text-sm font-bold text-gray-900">{hotel.hotelName}</p>
                    <span className="text-xs text-yellow-500">{"★".repeat(hotel.stars)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">Hotel details coming soon.</p>
          )}
        </div>
      )}

      {/* Inclusions */}
      {active === "Inclusions" && (
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Inclusions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tour.inclusions.map((item) => (
              <div key={item} className="flex items-start gap-2.5 bg-green-50 border border-green-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exclusions */}
      {active === "Exclusions" && (
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Exclusions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tour.exclusions.map((item) => (
              <div key={item} className="flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✕</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Policies */}
      {active === "Policies" && (
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Policies</h2>
          <div className="space-y-3">
            <Accordion title="Terms & Conditions" items={tour.termsAndConditions ?? DEFAULT_TERMS_AND_CONDITIONS} defaultOpen />
            <Accordion title="Booking Policy" items={tour.bookingPolicy ?? DEFAULT_BOOKING_POLICY} />
            <Accordion title="Cancellations" items={tour.cancellationPolicy ?? DEFAULT_CANCELLATION_POLICY} />
          </div>
        </div>
      )}
    </div>
  )
}
