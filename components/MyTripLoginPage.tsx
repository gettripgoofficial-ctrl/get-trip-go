"use client"

import { useState } from "react"
import { Fraunces, IBM_Plex_Mono } from "next/font/google"
import { Loader2 } from "lucide-react"

const fraunces = Fraunces({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] })
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"] })

type Status = "idle" | "loading" | "notConnected" | "error"

export default function MyTripLoginPage() {
  const [bookingId, setBookingId] = useState("")
  const [surname, setSurname] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!bookingId.trim() || !surname.trim()) {
      setStatus("error")
      return
    }
    setStatus("loading")
    // TODO: wire to real booking-lookup API once available.
    window.setTimeout(() => setStatus("notConnected"), 900)
  }

  return (
    <div className="relative min-h-screen bg-[#0F2557] flex items-center justify-center px-4 py-16 md:mt-[68px]">
      {/* faint route-dot backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative w-full max-w-3xl">
        <div className="text-center mb-8">
          <p className="text-blue-200/70 text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Booking Pass
          </p>
          <h1 className={`${fraunces.className} text-white text-3xl sm:text-4xl font-semibold`}>
            Find Your Trip
          </h1>
          <p className="text-blue-200/70 text-sm mt-2">
            Enter your Booking ID and surname to view your itinerary.
          </p>
        </div>

        {/* Ticket card */}
        <div className="relative rounded-2xl shadow-2xl shadow-black/30 overflow-hidden lg:flex bg-[#0F2557]">
          {/* Left stub */}
          <div className="lg:w-[38%] bg-[#0F2557] px-8 py-9 flex flex-col justify-between border-b lg:border-b-0 border-dashed border-white/25">
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <img src="/logo-icon.png" alt="Get Trip Go icon" className="w-9 h-9 object-contain" />
                <span className="text-white font-bold text-lg tracking-tight">get trip go</span>
              </div>

              <p className="text-blue-200/60 text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
                Booking Pass
              </p>

              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F6B93B]" />
                <span className="flex-1 border-t border-dotted border-blue-200/40" />
                <span className="w-2 h-2 rounded-full border-2 border-blue-200/60" />
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                One pass for flights, hotels, holidays, activities and transfers — everything you've booked with us, in one place.
              </p>
            </div>

            <p className="text-blue-200/40 text-xs mt-8 hidden lg:block">
              Keep this page bookmarked for quick access to any trip.
            </p>
          </div>

          {/* Seam: mobile (horizontal) */}
          <div className="lg:hidden relative h-0">
            <span className="absolute -top-2.5 left-0 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0F2557]" />
            <span className="absolute -top-2.5 right-0 translate-x-1/2 w-5 h-5 rounded-full bg-[#0F2557]" />
          </div>

          {/* Seam: desktop (vertical) */}
          <div className="hidden lg:block relative w-0">
            <span className="absolute -left-2.5 top-0 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0F2557]" />
            <span className="absolute -left-2.5 bottom-0 translate-y-1/2 w-5 h-5 rounded-full bg-[#0F2557]" />
          </div>

          {/* Right form panel */}
          <div className="lg:w-[62%] bg-[#FAF8F3] px-8 py-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="booking-id" className="block text-gray-700 text-xs font-bold uppercase tracking-wide mb-1.5">
                  Booking ID
                </label>
                <input
                  id="booking-id"
                  type="text"
                  value={bookingId}
                  onChange={(e) => { setBookingId(e.target.value); setStatus("idle") }}
                  placeholder="e.g. GTG482913"
                  className={`${mono.className} w-full uppercase tracking-wider border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2451D6] focus:border-transparent transition`}
                />
              </div>

              <div>
                <label htmlFor="surname" className="block text-gray-700 text-xs font-bold uppercase tracking-wide mb-1.5">
                  Surname
                </label>
                <input
                  id="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => { setSurname(e.target.value); setStatus("idle") }}
                  placeholder="As entered at booking"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2451D6] focus:border-transparent transition"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-xs font-semibold">
                  Enter both your Booking ID and surname to continue.
                </p>
              )}

              {status === "notConnected" && (
                <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs font-medium">
                  We couldn't find a booking matching that ID and surname. Please double-check and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#2451D6] hover:bg-[#1d40b0] disabled:opacity-70 text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Finding your trip…
                  </>
                ) : (
                  <>
                    View My Trip
                  </>
                )}
              </button>

              <p className="text-gray-500 text-xs text-center pt-1">
                Can't find your Booking ID? It's in your confirmation email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
