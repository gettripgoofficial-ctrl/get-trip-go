import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, Building2, Plane, Phone } from "lucide-react"
import { getPackageBySlug } from "@/data/packages"
import { buildTripSchemas } from "@/lib/seo/tripSchema"
import PackageTabs from "./PackageTabs"
import PackageActions from "./PackageActions"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const pkg = getPackageBySlug(params.slug)

  if (!pkg) {
    return { title: "Holiday Package Not Found" }
  }

  const themeText = pkg.themes?.length ? ` — ${pkg.themes.join(", ")}` : ""

  return {
    title: `${pkg.name} — ${pkg.duration} Holiday Package${themeText}`,
    description: `Book the ${pkg.name} package to ${pkg.destination}, ${pkg.country}: ${pkg.duration}, ${pkg.nights} nights, ${pkg.hotelCategory}-star hotels. Starting at ₹${pkg.price.toLocaleString("en-IN")} per person with Get Trip Go.`,
  }
}

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug)
  if (!pkg) return notFound()

  const { product: productJsonLd, touristTrip: touristTripJsonLd } = buildTripSchemas({
    url: `https://gettripgo.com/popular-destinations/${pkg.slug}`,
    name: pkg.name,
    description: `${pkg.duration} holiday package to ${pkg.destination}, ${pkg.country}. Highlights include ${pkg.highlights.slice(0, 3).join(", ")}.`,
    images: [pkg.heroImage, ...pkg.images],
    price: pkg.price,
    sku: pkg.slug,
    availability: "InStock",
    itineraryPlaces: [pkg.destination, pkg.country].filter((v, i, arr) => arr.indexOf(v) === i),
    touristType: "Holiday package",
  })

  return (
    <main className="min-h-screen bg-gray-100 pt-16 pb-32 sm:pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 pt-6 pb-6">

        {/* Full-width Hero */}
        <div className="relative rounded-2xl overflow-hidden mb-6" style={{ height: "480px" }}>
          <Image src={pkg.heroImage} alt={pkg.name} fill priority sizes="100vw" className="object-cover" />

          <Link
            href="/popular-destinations"
            className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
          >
            ← Back to Popular Destinations
          </Link>

          {pkg.tag && (
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {pkg.tag}
            </div>
          )}

          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
            <MapPin size={12} />
            {pkg.destination} · {pkg.country}
          </div>
        </div>

        {/* Title + badges */}
        <div className="bg-white rounded-2xl shadow-sm py-4 mb-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
            <div className="px-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {pkg.tag && (
                  <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">{pkg.tag}</span>
                )}
                <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                  <Building2 size={11} /> {pkg.hotelCategory}★ Hotel
                </span>
                {pkg.withFlight && (
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Plane size={11} /> Flights Included
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">{pkg.name}</h1>
              <div className="flex flex-wrap gap-3 mt-1">
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 shadow-sm">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{pkg.destination} · {pkg.country}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 shadow-sm">
                  <Calendar size={14} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{pkg.duration}</span>
                </div>
              </div>
            </div>
            {/* Price section */}
            <div className="bg-orange-500 rounded-2xl p-4 text-white flex flex-col justify-center mr-5 lg:mr-6">
              <p className="text-[11px] text-orange-100 mb-0.5">Starting from</p>
              <div className="flex items-end gap-1.5 mb-2">
                <span className="text-2xl font-extrabold text-white">₹{pkg.price.toLocaleString("en-IN")}</span>
                <span className="text-orange-100 text-[11px] mb-0.5">/ person</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/15 rounded-xl px-3 py-1.5">
                <span className="text-[11px]">💳</span>
                <span className="text-[11px] text-white font-medium">
                  No Cost EMI at ₹{pkg.emiPerMonth.toLocaleString("en-IN")}/month
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column: tabs/content + sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

          {/* LEFT COLUMN */}
          <div>
            <PackageTabs pkg={pkg} />
          </div>

          {/* RIGHT COLUMN — sticky sidebar */}
          <div className="lg:sticky lg:top-6 self-start">
            <PackageActions packageName={pkg.name} priceINR={pkg.price} />
            <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
              <Phone size={12} /> Call us: <span className="font-semibold text-gray-600">+91 96678 92504</span>
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
