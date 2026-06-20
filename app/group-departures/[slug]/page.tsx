import { notFound } from "next/navigation"
import Link from "next/link"
import { Star, MapPin, Calendar, Users as UsersIcon } from "lucide-react"
import { getGroupDepartureBySlug } from "@/data/groupDepartures"
import TourTabs from "./TourTabs"
import TourActions from "./TourActions"

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = getGroupDepartureBySlug(params.slug)
  if (!tour) return notFound()

  const allImages = [tour.heroImage, ...tour.images.filter(img => img !== tour.heroImage)]
  const galleryImages = Array.from({ length: 5 }, (_, i) => allImages[i % allImages.length])
  const labels = tour.galleryLabels ?? []

  return (
    <main className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-6">


        {/* Full-width Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr] gap-2 rounded-2xl overflow-hidden mb-6" style={{ height: "480px" }}>
          {/* Hero */}
          <div className="relative h-full rounded-2xl overflow-hidden">
            <img src={galleryImages[0]} alt={labels[0] ?? tour.name} className="w-full h-full object-cover" />
            {tour.rating && (
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                {tour.rating} {tour.reviewCount ? `(${tour.reviewCount} reviews)` : ""}
              </div>
            )}
            {labels[0] && (
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                <MapPin size={12} />
                {labels[0]}
              </div>
            )}
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            {galleryImages.slice(1, 5).map((img, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden">
                <img src={img} alt={labels[i + 1] ?? tour.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">

                </div>
                {labels[i + 1] && (
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 truncate">
                    <MapPin size={10} />
                    {labels[i + 1]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Title + badges */}
        <div className="bg-white rounded-2xl shadow-sm py-4 mb-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
            <div className="px-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {tour.tag && (
                  <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">{tour.tag}</span>
                )}
                {tour.rating && (
                  <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Star size={11} className="fill-yellow-500 text-yellow-500" />
                    {tour.rating} {tour.reviewCount ? `· ${tour.reviewCount} reviews` : ""}
                  </span>
                )}
                <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                  <UsersIcon size={11} /> Group Tour
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">{tour.name}</h1>
              <div className="flex flex-wrap gap-3 mt-1">
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 shadow-sm">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{tour.countries.join(" · ")}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 shadow-sm">
                  <Calendar size={14} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{tour.nights} Nights / {tour.days} Days</span>
                </div>
              </div>
            </div>
            {/* Price section -- solid red, rounded, inset from right edge */}
            <div className="bg-orange-500 rounded-2xl p-4 text-white flex flex-col justify-center mr-5 lg:mr-6">
              <p className="text-[11px] text-orange-100 mb-0.5">Starting from</p>
              <div className="flex items-end gap-1.5 mb-2">
                <span className="text-2xl font-extrabold text-white">₹{tour.priceINR.toLocaleString("en-IN")}</span>
                <span className="text-orange-100 text-[11px] mb-0.5">/ person</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/15 rounded-xl px-3 py-1.5">
                <span className="text-[11px]">🔒</span>
                <span className="text-[11px] text-white font-medium">Secure your seat with just ₹5,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column: tabs/content + sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

          {/* LEFT COLUMN */}
          <div>
            <TourTabs tour={tour} />
          </div>

          {/* RIGHT COLUMN — sticky sidebar */}
          <div className="lg:sticky lg:top-6 self-start">
            {tour.rating && (
              <div className="flex items-center gap-1 text-sm text-gray-600 mb-2 px-1">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{tour.rating}</span>
                <span className="text-gray-400">({tour.reviewCount} reviews)</span>
              </div>
            )}
            <TourActions tourName={tour.name} priceINR={tour.priceINR} departureDates={tour.departureDates} />
          </div>

        </div>
      </div>
    </main>
  )
}
