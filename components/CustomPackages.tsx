"use client"

import { useState } from "react"
import Link from "next/link"
import { customPackages } from "@/data/customPackages"
import EnquiryModal from "@/components/EnquiryModal"

const row1 = customPackages.filter((_, i) => i % 2 === 0)
const row2 = customPackages.filter((_, i) => i % 2 === 1)

function PackageCard({
  pkg,
  onGetQuote,
}: {
  pkg: typeof customPackages[0]
  onGetQuote: (name: string) => void
}) {
  return (
    <div
      className="min-w-[calc(100vw-64px)] max-w-[calc(100vw-64px)] sm:min-w-[385px] sm:max-w-[385px] flex-shrink-0 flex bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
      style={{ height: "140px" }}
    >
      {/* Left — Image (clickable) */}
      <Link href={`/customized-itineraries/${pkg.slug}`} className="relative w-2/5 sm:w-1/2 flex-shrink-0 overflow-hidden block">
        <img
          src={pkg.heroImage}
          alt={pkg.name}
          className="w-full h-full object-cover brightness-110 saturate-125"
        />
        <div
          className="absolute top-2 left-2 text-white text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: pkg.typeColor }}
        >
          {pkg.type}
        </div>
      </Link>

      {/* Colored accent border */}
      <div className="w-1 flex-shrink-0" style={{ backgroundColor: pkg.typeColor }} />

      {/* Right — Content */}
      <div className="flex-1 p-2.5 sm:p-3 flex flex-col justify-between min-w-0">
        <Link href={`/customized-itineraries/${pkg.slug}`} className="block">
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
            {pkg.name}
          </h4>
          <p className="text-xs text-gray-400 mt-0.5 truncate">{pkg.cities}</p>
          <p className="text-xs font-semibold mt-1" style={{ color: pkg.typeColor }}>{pkg.duration}</p>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-blue-600">₹{pkg.price.toLocaleString()}</p>
            <p className="text-xs text-gray-400">per person</p>
          </div>
          <button
            onClick={() => onGetQuote(pkg.name)}
            className="text-white text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-lg transition-all flex-shrink-0 active:scale-95"
            style={{ backgroundColor: pkg.typeColor }}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CustomPackages() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  const handleGetQuote = (name: string) => {
    setSelectedPackage(name)
    setEnquiryOpen(true)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Customized Itineraries</h3>
              <p className="text-gray-500 text-sm mt-1">Handcrafted journeys — tailored just for you</p>
            </div>
            <Link
              href="/customized-itineraries"
              className="text-blue-600 text-sm font-semibold hover:underline shrink-0 ml-4"
            >
              View all ↗
            </Link>
          </div>

          {/* Row 1 */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
            {row1.map(pkg => (
              <PackageCard key={pkg.slug} pkg={pkg} onGetQuote={handleGetQuote} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 mt-3 sm:mt-4" style={{ scrollbarWidth: "none" }}>
            {row2.map(pkg => (
              <PackageCard key={pkg.slug} pkg={pkg} onGetQuote={handleGetQuote} />
            ))}
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageName={selectedPackage}
      />
    </>
  )
}