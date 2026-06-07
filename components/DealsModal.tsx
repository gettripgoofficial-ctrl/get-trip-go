"use client"
import { useState, useEffect } from "react"
import { tours, type Tour } from "@/data/tours"

// ─── Image map ────────────────────────────────────────────────────────────────
const tourImages: Record<number, string> = {
  1:  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80&auto=format&fit=crop",
  2:  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80&auto=format&fit=crop",
  3:  "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&q=80&auto=format&fit=crop",
  4:  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80&auto=format&fit=crop",
  5:  "https://images.unsplash.com/photo-1543429776-2782fc8e0ec0?w=400&q=80&auto=format&fit=crop",
  6:  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&auto=format&fit=crop",
  7:  "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=400&q=80&auto=format&fit=crop",
  8:  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80&auto=format&fit=crop",
  9:  "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=400&q=80&auto=format&fit=crop",
  10: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80&auto=format&fit=crop",
  11: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80&auto=format&fit=crop",
  12: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80&auto=format&fit=crop",
  13: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=80&auto=format&fit=crop",
  14: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80&auto=format&fit=crop",
}

// ─── Enquiry Modal ─────────────────────────────────────────────────────────────
function EnquiryModal({ tour, onClose }: { tour: Tour; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    adults: "2", children: "0", infants: "0",
    occupancy: "Double",
    specialRequests: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) return
    setLoading(true)
    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        travelers: form.adults,
        message: `Occupancy: ${form.occupancy} | Children: ${form.children} | Infants: ${form.infants} | ${form.specialRequests}`,
        packageName: tour.name,
        date: "",
      }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 z-10 rounded-t-2xl overflow-hidden">
          <div
            className="px-6 py-4 flex items-start justify-between"
            style={{ backgroundColor: tour.dealColor }}
          >
            <div>
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{tour.dealTag}</span>
              <h2 className="text-white font-extrabold text-base leading-snug mt-0.5">{tour.name}</h2>
              <p className="text-white/60 text-xs mt-0.5">{tour.nights} · {tour.route}</p>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white mt-1 ml-4 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="px-6 py-12 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: tour.dealColor + "20" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tour.dealColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="text-gray-900 font-extrabold text-xl mb-2">Enquiry Sent!</h3>
            <p className="text-gray-500 text-sm mb-1">We've received your request for</p>
            <p className="font-bold text-sm mb-4" style={{ color: tour.dealColor }}>{tour.name}</p>
            <p className="text-gray-400 text-xs mb-6">Our team will contact you within 24 hours on your email and phone.</p>
            <button onClick={onClose} className="px-8 py-2.5 text-white rounded-xl text-sm font-bold" style={{ backgroundColor: tour.dealColor }}>
              Close
            </button>
          </div>
        ) : (
          <div className="px-6 py-5 space-y-4">
            <div className="rounded-xl px-4 py-3" style={{ backgroundColor: tour.dealColor + "12" }}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-gray-500">Base price (per person)</p>
                {tour.dealDiscount > 0 && (
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: tour.dealColor }}>
                    {tour.dealOffer}
                  </span>
                )}
              </div>
              {tour.dealDiscount > 0 ? (
                <div className="flex items-baseline gap-2">
                  <p className="text-gray-400 line-through text-sm">₹{tour.originalPriceINR.toLocaleString("en-IN")}</p>
                  <p className="font-extrabold text-2xl text-gray-900">₹{tour.priceINR.toLocaleString("en-IN")}</p>
                  <span className="text-xs font-normal text-gray-400">/ person</span>
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <p className="font-extrabold text-2xl text-gray-900">₹{tour.priceINR.toLocaleString("en-IN")}</p>
                  <span className="text-xs font-normal text-gray-400">/ person</span>
                </div>
              )}
              {tour.dealDiscount > 0 && (
                <p className="text-xs font-semibold mt-1" style={{ color: tour.dealColor }}>
                  You save ₹{tour.dealDiscount.toLocaleString("en-IN")} per person 🎉
                </p>
              )}
              {tour.dealDiscount === 0 && (
                <p className="text-xs font-semibold mt-1" style={{ color: tour.dealColor }}>
                  🎁 {tour.dealOffer} included
                </p>
              )}
              <p className="text-[10px] text-gray-400 mt-1">Twin sharing · Includes flights + taxes</p>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-100">
              <span className="text-sm">🔥</span>
              <p className="text-xs font-semibold text-amber-700">{tour.dealHook} — {tour.dealSub}</p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Your Details</p>
              <div className="space-y-2.5">
                <input type="text" placeholder="Full name *" value={form.name} onChange={e => set("name", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                <input type="email" placeholder="Email address *" value={form.email} onChange={e => set("email", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                <div className="flex gap-2">
                  <select className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none bg-white">
                    <option>+91</option><option>+1</option><option>+44</option><option>+971</option>
                  </select>
                  <input type="tel" placeholder="Phone number *" value={form.phone} onChange={e => set("phone", e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Trip Details</p>
              <div className="space-y-2.5">
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Occupancy type</label>
                  <div className="flex gap-2">
                    {["Single", "Double", "Triple"].map(o => (
                      <button key={o} onClick={() => set("occupancy", o)}
                        className="flex-1 py-2 rounded-xl text-xs font-bold border-2 transition-all"
                        style={form.occupancy === o
                          ? { backgroundColor: tour.dealColor, color: "#fff", borderColor: tour.dealColor }
                          : { backgroundColor: "transparent", color: "#6b7280", borderColor: "#e5e7eb" }
                        }>
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Adults", key: "adults" },
                    { label: "Children (2–12)", key: "children" },
                    { label: "Infants (<2)", key: "infants" },
                  ].map(({ label, key }) => (
                    <div key={key}>
                      <label className="text-[10px] text-gray-500 mb-1 block">{label}</label>
                      <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                        <button onClick={() => set(key, String(Math.max(0, parseInt(form[key as keyof typeof form]) - 1)))}
                          className="w-8 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-lg">−</button>
                        <span className="flex-1 text-center text-sm font-bold text-gray-800">{form[key as keyof typeof form]}</span>
                        <button onClick={() => set(key, String(parseInt(form[key as keyof typeof form]) + 1))}
                          className="w-8 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-lg">+</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Special requests / questions</label>
                  <textarea rows={3} placeholder="Preferred travel dates, dietary needs, room preferences..."
                    value={form.specialRequests} onChange={e => set("specialRequests", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none" />
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex gap-3">
              <span className="mt-0.5">🛂</span>
              <div>
                <p className="text-xs font-semibold text-amber-700">Visa Required: {tour.visa}</p>
                <p className="text-xs text-amber-600 mt-0.5">Our team guides you through the visa process after confirmation.</p>
              </div>
            </div>

            <button onClick={handleSubmit} disabled={loading}
              className="w-full py-3.5 text-white rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 disabled:opacity-70 transition-opacity"
              style={{ backgroundColor: tour.dealColor }}>
              {loading
                ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                : "Send Enquiry →"
              }
            </button>
            <p className="text-center text-xs text-gray-400">No payment now · Our team calls you back within 24 hours</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Deal Card ────────────────────────────────────────────────────────────────
function DealCard({ tour, onEnquire }: { tour: Tour; onEnquire: (t: Tour) => void }) {
  const img = tourImages[tour.id] ?? tour.image

  return (
    <div
      onClick={() => onEnquire(tour)}
      className="group bg-white rounded-2xl border border-gray-100 flex flex-row overflow-hidden cursor-pointer hover:shadow-lg hover:border-gray-200 transition-all duration-200"
      style={{ minHeight: 130 }}
    >
      {/* Image — left ~32% */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 120 }}>
        <img
          src={img}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text body */}
      <div className="flex-1 px-4 py-3 flex flex-col justify-between min-w-0">
        {/* Top: category badge + title + description */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: tour.dealColor }}
            >
              {tour.dealTag}
            </span>
            {tour.badge && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                {tour.badge}
              </span>
            )}
          </div>

          <h3 className="text-gray-900 font-extrabold text-sm leading-snug mb-1">
            {tour.name}
          </h3>

          <p className="text-gray-500 text-xs leading-snug line-clamp-2">
            {tour.route} · {tour.nights}
            {tour.dealDiscount > 0
              ? ` · Save ₹${(tour.dealDiscount / 1000).toFixed(0)}K per person`
              : ` · ${tour.dealOffer}`
            }
          </p>
        </div>

        {/* Bottom: price tag + details link */}
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-center gap-2">
            {/* Deal offer pill — styled like coupon code */}
            <span
              className="text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide"
              style={{ backgroundColor: tour.dealColor }}
            >
              {tour.dealDiscount > 0
                ? `Save ₹${(tour.dealDiscount / 1000).toFixed(0)}K`
                : tour.dealOffer.length > 18 ? "Special Offer" : tour.dealOffer
              }
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              {tour.dealDiscount > 0 && (
                <p className="text-gray-400 line-through text-[10px] leading-none">
                  ₹{(tour.originalPriceINR / 100000).toFixed(2)}L
                </p>
              )}
              <p className="font-extrabold text-sm leading-none" style={{ color: tour.dealColor }}>
                ₹{(tour.priceINR / 100000).toFixed(2)}L
              </p>
            </div>
            <span
              className="text-xs font-bold transition-colors"
              style={{ color: tour.dealColor }}
            >
              Details →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Flight Deal Card ─────────────────────────────────────────────────────────
function FlightDealCard({ onEnquire }: { onEnquire: () => void }) {
  return (
    <div
      onClick={onEnquire}
      className="group bg-white rounded-2xl border border-gray-100 flex flex-row overflow-hidden cursor-pointer hover:shadow-lg hover:border-gray-200 transition-all duration-200"
      style={{ minHeight: 130 }}
    >
      {/* Image */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 120 }}>
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80&auto=format&fit=crop"
          alt="Flight deal"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text body */}
      <div className="flex-1 px-4 py-3 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-600">
              ✈️ FLIGHT DEAL
            </span>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
              ADD-ON
            </span>
          </div>
          <h3 className="text-gray-900 font-extrabold text-sm leading-snug mb-1">
            Save ₹10,000/person on Flights
          </h3>
          <p className="text-gray-500 text-xs leading-snug line-clamp-2">
            Book Land package first — add flights &amp; save ₹10,000 per person instantly
          </p>
        </div>

        <div className="flex items-center justify-between mt-2.5">
          <span className="text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide bg-indigo-600">
            ₹10,000 Off
          </span>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-gray-400 line-through text-[10px] leading-none">Regular price</p>
              <p className="font-extrabold text-sm leading-none text-indigo-600">₹10K Savings</p>
            </div>
            <span className="text-xs font-bold text-indigo-600 transition-colors">
              Details →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Deals Modal ──────────────────────────────────────────────────────────────
export default function DealsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [enquiryTour, setEnquiryTour] = useState<Tour | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape" && !enquiryTour) onClose() }
    if (isOpen) document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose, enquiryTour])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen) return null

  const handleFlightEnquiry = () => {
    setEnquiryTour({
      ...tours[0],
      name: "Flight Add-on — Save ₹10,000/person",
      dealTag: "FLIGHT DEAL",
      dealColor: "#4338CA",
      dealHook: "✈️ Save ₹10,000 on flights",
      dealSub: "Book land package first to unlock this offer",
      dealOffer: "Save ₹10,000 on Flights",
      dealDiscount: 10000,
    })
  }

  return (
    <>
      {!enquiryTour && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={e => { if (e.target === e.currentTarget) onClose() }}
        >
          <div className="bg-gray-50 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl">

            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white rounded-t-2xl flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>
                </div>
                <h2 className="font-extrabold text-gray-900 text-base leading-tight">Deals</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Grid — scrollable */}
            <div className="overflow-y-auto px-5 py-5 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tours.map(tour => (
                  <DealCard key={tour.id} tour={tour} onEnquire={t => setEnquiryTour(t)} />
                ))}
                <FlightDealCard onEnquire={handleFlightEnquiry} />
              </div>

              {/* Bottom CTA */}
              <div className="bg-[#1A3FA8] rounded-2xl p-5 text-center mt-5">
                <p className="text-white font-extrabold text-sm mb-1">Want a custom itinerary?</p>
                <p className="text-white/60 text-xs mb-3">We'll design a personalised Europe tour just for you</p>
                <a href="/contact" onClick={onClose}
                  className="inline-block bg-white text-[#1A3FA8] text-xs font-bold px-5 py-2 rounded-xl hover:bg-blue-50 transition-colors">
                  Talk to an Expert →
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {enquiryTour && (
        <EnquiryModal tour={enquiryTour} onClose={() => setEnquiryTour(null)} />
      )}
    </>
  )
}