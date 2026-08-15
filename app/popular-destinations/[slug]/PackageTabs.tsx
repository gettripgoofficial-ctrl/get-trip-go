"use client"
import { useState } from "react"
import Image from "next/image"
import { MapPin, LayoutDashboard, Map, CheckCircle, XCircle, ScrollText } from "lucide-react"
import type { Package } from "@/data/packages"
import Accordion from "../../group-departures/[slug]/Accordion"

const TABS = ["Overview", "Itinerary", "Inclusions", "Exclusions", "Policies"] as const
type Tab = typeof TABS[number]

const TAB_ICONS: Record<Tab, React.ReactNode> = {
  Overview: <LayoutDashboard size={15} />,
  Itinerary: <Map size={15} />,
  Inclusions: <CheckCircle size={15} />,
  Exclusions: <XCircle size={15} />,
  Policies: <ScrollText size={15} />,
}

// Real site-wide terms, condensed from app/terms/page.tsx — not fabricated per-package.
const BOOKING_POLICY = [
  "Bookings are confirmed only upon receipt of the required booking deposit or full payment, depending on the service type.",
  "All bookings are subject to availability and final confirmation by the relevant supplier.",
  "Clients are responsible for providing a valid passport and all required travel documentation at the time of booking.",
  "A booking amount of INR 20,000/- is payable upon confirmation.",
  "Airline Tickets: Full payment must be made before ticket issuance and within the applicable airline fare/ticketing deadline.",
  "Visa Services: Full payment must be made prior to submission of the application to the relevant embassy, consulate, or visa processing centre.",
  "Land Arrangements: 50% of the Land Part is payable 60 days prior to arrival.",
  "Land Arrangements: 40% of the Land Part is payable 30 days prior to arrival.",
  "Land Arrangements: 10% of the Land Part is payable 7 days prior to arrival.",
]
const CANCELLATION_POLICY = [
  "Cancellation charges may apply and will vary depending on the travel component, supplier terms, and the date of cancellation.",
  "Service fees and the INR 20,000/- booking amount are non-refundable.",
  "Any eligible refund is subject to the cancellation and refund policies of the respective suppliers, including airlines, hotels, tour operators, and other service providers.",
  "Refund processing may take approximately 30-90 days, depending on the relevant supplier's processing timelines.",
  "Cancellation terms may differ during national holidays and peak/high-season periods, particularly around Christmas and New Year; any such variations will be communicated and handled on a case-by-case basis.",
]
const TERMS_AND_CONDITIONS = [
  "All quotations provided are for reference purposes only and do not constitute a confirmed booking; no flights, hotels, rooms, or other services are being held based on a quotation.",
  "The quoted hotel and room category are not guaranteed until the booking has been confirmed and accepted by the relevant supplier. Prices and availability may change without prior notice until confirmed.",
  "Standard hotel check-in is 15:00 hrs; early check-in requests are subject to availability.",
  "Standard hotel check-out is 12:00 hrs; late check-out requests are subject to availability and may incur additional charges.",
  "Visa assistance includes documentation guidance, application support, and liaison with the relevant embassy, consulate, or visa processing centre — final approval rests solely with the embassy or consulate, and visa fees may be non-refundable in the event of refusal, withdrawal, or cancellation.",
  "By proceeding with a booking, the client accepts these booking, payment, cancellation, hotel, and visa terms, along with the terms and conditions of the respective airlines, hotels, tour operators, and other suppliers involved.",
]

function ItineraryAccordion({ itinerary, images, heroImage }: {
  itinerary: { day: number; title: string; description: string; meals: string }[]
  images: string[]
  heroImage: string
}) {
  const [openDay, setOpenDay] = useState<number | null>(0)
  const allImages = [heroImage, ...images.filter(img => img !== heroImage)]

  return (
    <div className="space-y-3">
      {itinerary.map((day, i) => {
        const isOpen = openDay === i
        const img = allImages[i % allImages.length]
        return (
          <div key={day.day} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenDay(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-orange-600 border border-orange-400 rounded-full px-3 py-1 bg-white">
                  Day {day.day}
                </span>
                <span className="text-sm font-semibold text-gray-800 text-left">{day.title}</span>
              </div>
              <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0 ml-2">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 py-4 flex gap-4">
                <Image src={img} alt={day.title} width={144} height={112} className="rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{day.description}</p>
                  <span className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                    🍽 {day.meals}
                  </span>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function PackageTabs({ pkg }: { pkg: Package }) {
  const [active, setActive] = useState<Tab>("Overview")

  return (
    <div>
      {/* Tab bar */}
      <div className="grid grid-cols-5 gap-2 mb-6 w-full">
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

          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="text-base font-bold text-gray-900 mb-2">About This Package</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Experience this perfectly curated {pkg.duration} holiday to {pkg.destination}, {pkg.country}, staying at {pkg.hotelCategory}-star hotels. From iconic landmarks to standout local experiences, this package covers it all.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">🎯 Things To Do</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pkg.highlights.slice(0, 4).map((h) => (
                <div key={h} className="flex flex-col items-center text-center gap-1.5 bg-blue-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="text-xs font-medium text-gray-700 leading-tight">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="text-base font-bold text-gray-900 mb-4">🌟 Highlights</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {[
                pkg.withFlight ? { icon: "✈️", label: "Flights" } : null,
                { icon: "🚌", label: pkg.inclusions.transfers },
                { icon: "🏨", label: `${pkg.hotelCategory}★ ${pkg.inclusions.hotel}` },
                { icon: "🍽️", label: pkg.inclusions.meals },
                { icon: "🎯", label: pkg.inclusions.activities },
                { icon: "🕐", label: "24/7 Support" },
              ].filter((f): f is { icon: string; label: string } => f !== null).map((f) => (
                <div key={f.label} className="flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all">
                  <span className="text-2xl">{f.icon}</span>
                  <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {pkg.themes.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-base font-bold text-gray-900 mb-3">Themes</h2>
              <div className="flex gap-2 flex-wrap">
                {pkg.themes.map(t => (
                  <span key={t} className="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {pkg.images.length > 1 && (
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-base font-bold text-gray-900 mb-4">Photos</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pkg.images.map((img, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden h-32">
                    <Image src={img} alt={`${pkg.name} ${i + 1}`} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Itinerary */}
      {active === "Itinerary" && (
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Itinerary</h2>
          {pkg.itinerary.length > 0 ? (
            <ItineraryAccordion itinerary={pkg.itinerary} images={pkg.images} heroImage={pkg.heroImage} />
          ) : (
            <p className="text-sm text-gray-400">Itinerary details coming soon.</p>
          )}
        </div>
      )}

      {/* Inclusions */}
      {active === "Inclusions" && (
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Inclusions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pkg.inclusions_list.map((item) => (
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
            {pkg.exclusions_list.map((item) => (
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
            <Accordion title="Booking Policy" items={BOOKING_POLICY} defaultOpen />
            <Accordion title="Cancellations & Refunds" items={CANCELLATION_POLICY} />
            <Accordion title="Terms & Conditions" items={TERMS_AND_CONDITIONS} />
          </div>
        </div>
      )}
    </div>
  )
}
