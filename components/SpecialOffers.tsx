"use client"

import { useEffect, useRef, useState } from "react"
import { offers } from "@/data/offers"

type Offer = typeof offers[0]

const VISIBLE_DESKTOP = 4
const VISIBLE_MOBILE = 1

// ─── Offer Modal ─────────────────────────────────────────────────────────────

function OfferModal({ offer, onClose }: { offer: Offer; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRedeem = () => {
    const msg = encodeURIComponent(
      `Hi! I'd like to redeem the offer: *${offer.title}* using promo code *${offer.code}*. Please assist me with the booking.`
    )
    window.open(`https://wa.me/919667892504?text=${msg}`, "_blank")
  }

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={handleBackdrop}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        style={{ animation: "modalIn 0.22s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Coloured top banner */}
        <div
          className="relative h-28 overflow-hidden flex items-end p-4"
          style={{ background: offer.color }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${offer.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
              mixBlendMode: "luminosity",
            }}
          />
          <div className="relative z-10">
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-1 tracking-wide"
              style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              {offer.tag}
            </span>
            <h2 className="text-white font-extrabold text-xl leading-tight">{offer.title}</h2>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-4 h-4">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col gap-4">
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">{offer.desc}</p>

          {/* Valid till */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: "#fff7ed", color: "#c2410c" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
            </svg>
            Offer valid till <span className="font-bold">{offer.validTill}</span>
          </div>

          {/* Promo code */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Promo Code</p>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-dashed transition-all duration-200 group"
              style={{
                borderColor: copied ? "#10b981" : offer.color,
                backgroundColor: copied ? "#f0fdf4" : `${offer.color}10`,
              }}
            >
              <span
                className="font-extrabold tracking-widest text-base"
                style={{ color: copied ? "#10b981" : offer.color }}
              >
                {offer.code}
              </span>
              <span
                className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: copied ? "#10b981" : offer.color }}
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
                      <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
                    </svg>
                    Tap to copy
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Terms */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Terms & Conditions</p>
            <ul className="flex flex-col gap-1.5">
              {offer.terms.map((term, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: offer.color }} />
                  {term}
                </li>
              ))}
            </ul>
          </div>

          {/* Redeem button */}
          <button
            onClick={handleRedeem}
            className="w-full py-3.5 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
            style={{ backgroundColor: offer.color }}
          >
            Redeem offer
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}

// ─── Offer Card ───────────────────────────────────────────────────────────────

function OfferCard({ offer, onOpen }: { offer: Offer; onOpen: () => void }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col justify-between h-full select-none"
      style={{ background: offer.color, minHeight: "220px" }}
    >
      {/* Subtle full-card bg image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${offer.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          mixBlendMode: "luminosity",
        }}
      />
      {/* Right-side image panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none"
        style={{
          backgroundImage: `url(${offer.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 pr-[42%]" style={{ minHeight: "220px" }}>
        <div>
          <span
            className="text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-3 tracking-wide"
            style={{
              backgroundColor: "rgba(255,255,255,0.22)",
              color: "#fff",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {offer.tag}
          </span>
          <h4
            className="font-extrabold text-white leading-tight mb-1"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", textShadow: "0 1px 8px rgba(0,0,0,0.18)" }}
          >
            {offer.title}
          </h4>
          <p className="text-white/80 text-xs leading-snug mt-1">{offer.desc}</p>
        </div>

        <div className="mt-4 flex flex-col gap-2.5">
          {/* Promo code pill */}
          <div
            className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-white text-xs font-bold tracking-widest"
            style={{
              border: "1.5px dashed rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(4px)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-70">
              <path fillRule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {offer.code}
          </div>

          {/* CTA — opens modal */}
          <button
            onClick={onOpen}
            className="inline-flex items-center self-start px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              color: offer.color,
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            {offer.cta}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SpecialOffers() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP)
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = offers.length
  const maxIndex = total - visibleCount

  useEffect(() => {
    const update = () =>
      setVisibleCount(window.innerWidth < 640 ? VISIBLE_MOBILE : VISIBLE_DESKTOP)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [maxIndex])

  // Listen for footer "Special Offers" trigger
  useEffect(() => {
    const handler = () => {
      document.getElementById("special-offers-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    window.addEventListener("open-special-offers", handler)
    return () => window.removeEventListener("open-special-offers", handler)
  }, [])

  // Pause auto-scroll when modal is open
  useEffect(() => {
    if (activeOffer) {
      if (timerRef.current) clearInterval(timerRef.current)
    } else {
      startTimer()
    }
  }, [activeOffer])

  const handlePrev = () => { setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1)); startTimer() }
  const handleNext = () => { setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1)); startTimer() }

  const cardWidthPct = 100 / visibleCount

  return (
    <>
      <div id="special-offers-section" className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Special Offers</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * cardWidthPct}%)` }}
            >
              {offers.map((offer) => (
                <div
                  key={offer.code}
                  className="flex-shrink-0 px-1.5"
                  style={{ width: `${cardWidthPct}%` }}
                >
                  <OfferCard offer={offer} onOpen={() => setActiveOffer(offer)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeOffer && (
        <OfferModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
      )}
    </>
  )
}