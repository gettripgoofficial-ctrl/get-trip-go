"use client"

import { useState } from "react"
import { KLOOK_COUPONS } from "@/data/klook-coupons"

export default function KlookOffersSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  function handleCopy(code: string) {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="w-full py-10 px-4 sm:px-6 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center gap-3">
        <img
          src="https://affiliate.klook.com/redirect?aid=123778&aff_adid=1309858&k_site=https%3A%2F%2Fwww.klook.com%2Fv2%2Fseo%2Fimages%2Fklook-logo.svg"
          alt="Klook"
          className="h-7"
          onError={e => { (e.target as HTMLImageElement).style.display = "none" }}
        />
        <h2 className="text-xl font-bold text-gray-800">Exclusive Promo Codes</h2>
        <span className="text-sm text-gray-500 ml-auto">Powered by Klook</span>
      </div>

      {/* Coupon Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KLOOK_COUPONS.map((coupon) => (
          <div
            key={coupon.code}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Top — discount + description */}
            <div className="p-4 flex-1">
              {/* Category tag */}
              <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
                style={{ backgroundColor: "#FFF0EB", color: "#FF5722" }}>
                {coupon.category}
              </span>

              {/* Discount */}
              <p className="text-2xl font-extrabold mb-1" style={{ color: "#FF5722" }}>
                {coupon.discount}
              </p>

              {/* Description */}
              <p className="text-sm font-semibold text-gray-800 mb-1">{coupon.description}</p>

              {/* Cap */}
              {coupon.cap && (
                <p className="text-xs text-gray-500">{coupon.cap}</p>
              )}

              {/* Countries */}
              <p className="text-xs text-gray-400 mt-1">🌍 {coupon.countries}</p>
            </div>

            {/* Divider — ticket cut style */}
            <div className="relative flex items-center px-4">
              <div className="flex-1 border-t border-dashed border-gray-200" />
              <div className="w-4 h-4 rounded-full bg-gray-50 border border-gray-200 mx-2 flex-shrink-0" />
              <div className="flex-1 border-t border-dashed border-gray-200" />
            </div>

            {/* Bottom — code + validity + buttons */}
            <div className="p-4">
              {/* Promo code box */}
              <div className="flex items-center justify-between bg-gray-50 border border-dashed border-gray-300 rounded-lg px-3 py-2 mb-3">
                <span className="text-sm font-bold tracking-widest text-gray-700">{coupon.code}</span>
                <button
                  onClick={() => handleCopy(coupon.code)}
                  className="text-xs font-semibold px-3 py-1 rounded-md transition-all duration-200"
                  style={{
                    backgroundColor: copiedCode === coupon.code ? "#4CAF50" : "#FF5722",
                    color: "#fff",
                  }}
                >
                  {copiedCode === coupon.code ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Valid until */}
              <p className="text-xs text-gray-400 mb-3">Valid until: {coupon.validUntil}</p>

              {/* Book on Klook */}
              <a
                href={coupon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-bold py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#FF5722", color: "#fff" }}
              >
                Book on Klook →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}