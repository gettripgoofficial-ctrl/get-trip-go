"use client"

import { useState } from "react"
import EnquiryModal from "@/components/EnquiryModal"

export default function OfferActions({ offer }: { offer: any }) {
  const [copied, setCopied] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
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
    </>
  )
}