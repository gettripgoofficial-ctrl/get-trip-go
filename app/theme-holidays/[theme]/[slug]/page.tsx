import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"
import { getThemePackageBySlug } from "@/data/themePackages"
import { buildTripSchemas } from "@/lib/seo/tripSchema"
import ThemeHolidayTabs from "./ThemeHolidayTabs"
import ThemeHolidayActions from "./ThemeHolidayActions"
import Breadcrumbs from "@/components/Breadcrumbs"
import type { Metadata } from "next"

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

export async function generateMetadata({
  params,
}: {
  params: { theme: string; slug: string }
}): Promise<Metadata> {
  const pkg = getThemePackageBySlug(params.slug)

  if (!pkg) {
    return { title: "Package Not Found" }
  }

  return {
    title: `${pkg.name} — ${params.theme} Holiday Package`,
    description: `${pkg.name} — a ${pkg.duration} ${params.theme.toLowerCase()} holiday to ${pkg.destination}, ${pkg.country}. Starting at ₹${pkg.price.toLocaleString("en-IN")} per person with Get Trip Go.`,
  }
}

export default function ThemePackageDetailPage({ params }: { params: { theme: string; slug: string } }) {
  const pkg = getThemePackageBySlug(params.slug)
  if (!pkg) return notFound()

  const themeColor = themeColors[pkg.theme] || "#1A56F0"
  const themeIcon = themeIcons[pkg.theme] || "✈"

  const { product: productJsonLd, touristTrip: touristTripJsonLd } = buildTripSchemas({
    url: `https://gettripgo.com/theme-holidays/${encodeURIComponent(params.theme)}/${pkg.slug}`,
    name: pkg.name,
    description: `${pkg.duration} ${pkg.theme.toLowerCase()} holiday package to ${pkg.destination}, ${pkg.country}. Highlights include ${pkg.highlights.slice(0, 3).join(", ")}.`,
    images: [pkg.heroImage, ...pkg.images],
    price: pkg.price,
    sku: pkg.slug,
    availability: "InStock",
    itineraryPlaces: [pkg.destination, pkg.country].filter((v, i, arr) => arr.indexOf(v) === i),
    touristType: `${pkg.theme} holiday`,
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

      <Breadcrumbs
        items={[
          { label: "Theme Holidays", href: "/theme-holidays" },
          { label: pkg.theme, href: `/theme-holidays?theme=${encodeURIComponent(pkg.theme)}` },
          { label: pkg.name },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 pt-6 pb-6">

        {/* Full-width Hero */}
        <div className="relative rounded-2xl overflow-hidden mb-6" style={{ height: "480px" }}>
          <Image src={pkg.heroImage} alt={pkg.name} fill priority sizes="100vw" className="object-cover" />

          <Link
            href={`/theme-holidays?theme=${encodeURIComponent(pkg.theme)}`}
            className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
          >
            ← Back to {pkg.theme}
          </Link>

          {pkg.tag && (
            <div className="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: themeColor }}>
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
                <span className="text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1" style={{ backgroundColor: themeColor }}>
                  {themeIcon} {pkg.theme}
                </span>
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
                <span className="text-[11px]">📞</span>
                <span className="text-[11px] text-white font-medium">Get a tailored quote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column: tabs/content + sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

          {/* LEFT COLUMN */}
          <div>
            <ThemeHolidayTabs pkg={pkg} themeColor={themeColor} themeIcon={themeIcon} />
          </div>

          {/* RIGHT COLUMN — sticky sidebar */}
          <div className="lg:sticky lg:top-6 self-start">
            <ThemeHolidayActions packageName={pkg.name} priceINR={pkg.price} themeColor={themeColor} />
            <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
              📞 Call us: <span className="font-semibold text-gray-600">+91 96678 92504</span>
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
