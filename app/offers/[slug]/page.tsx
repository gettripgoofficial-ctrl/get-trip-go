"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { offers } from "@/data/offers"
import BottomNav from "@/components/BottomNav"
import EnquiryModal from "@/components/EnquiryModal"

export default function OfferDetailPage() {
  const { slug } = useParams()
  const offer = offers.find((o) => o.slug === slug)
  const [copied, setCopied] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  if (!offer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
        <p className="text-6xl">🎫</p>
        <p className="text-xl font-bold text-gray-700">Offer not found</p>
        <Link href="/offers" className="text-blue-600 font-semibold underline">← Back to Offers</Link>
      </div>
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-32 sm:pb-10">

      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover brightness-110 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Link
          href="/offers"
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full"
        >
          ← Back
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <span
            className="text-white text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-2"
            style={{ backgroundColor: offer.color }}
          >
            {offer.tag}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{offer.title}</h1>
          <p className="text-white/80 text-sm mt-1">Valid till {offer.validTill}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">

        {/* Coupon code card */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Your Coupon Code</p>
          <div className="flex items-center gap-3">
            <div
              className="flex-1 border-2 border-dashed rounded-xl px-4 py-3 text-center"
              style={{ borderColor: offer.color }}
            >
              <span className="text-xl font-extrabold tracking-widest" style={{ color: offer.color }}>
                {offer.code}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="text-white text-sm font-bold px-5 py-3 rounded-xl transition-all"
              style={{ backgroundColor: offer.color }}
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="text-base font-bold text-gray-800 mb-2">About this Offer</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{offer.desc}</p>
        </div>

        {/* Terms */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="text-base font-bold text-gray-800 mb-3">Terms & Conditions</h2>
          <div className="space-y-2">
            {offer.terms.map((term, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-xs font-bold mt-0.5 flex-shrink-0" style={{ color: offer.color }}>✓</span>
                <span className="text-sm text-gray-600">{term}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setEnquiryOpen(true)}
            className="flex-1 text-white font-bold py-3 rounded-xl text-sm transition-colors"
            style={{ backgroundColor: offer.color }}
          >
            Book & Apply Code
          </button>
          <button
            onClick={() => setEnquiryOpen(true)}
            className="flex-1 border-2 font-bold py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors"
            style={{ borderColor: offer.color, color: offer.color }}
          >
            Get Help
          </button>
        </div>

      </div>

      {/* Mobile bottom CTA */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-lg px-4 py-3">
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 border-2 font-bold text-sm py-2.5 rounded-xl transition-colors"
            style={{ borderColor: offer.color, color: offer.color }}
          >
            {copied ? "Copied ✓" : `Copy: ${offer.code}`}
          </button>
          <button
            onClick={() => setEnquiryOpen(true)}
            className="flex-1 text-white font-bold text-sm py-2.5 rounded-xl"
            style={{ backgroundColor: offer.color }}
          >
            Book Now
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageName={offer.title}
      />

      <BottomNav />
    </div>
  )
}