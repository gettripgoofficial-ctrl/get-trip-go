"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Script from "next/script"
import {
  Plane,
  Hotel,
  Camera,
  Car,
  Menu,
  X,
  DollarSign,
} from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"
import DealsModal from "@/components/DealsModal"
import SupportModal from "@/components/SupportModal"
import { offers } from "@/data/offers"

type Offer = typeof offers[0]

const SERVICES = [
  {
    label: "Flights",
    icon: <Plane size={28} strokeWidth={2} />,
    bg: "#1A56F0",
    color: "#fff",
    href: "#flights",
  },
  {
    label: "Hotels",
    icon: <Hotel size={28} strokeWidth={2} />,
    bg: "#16A34A",
    color: "#fff",
    href: "#hotels",
  },
  {
    label: "Things to do",
    icon: <Camera size={28} strokeWidth={2} />,
    bg: "#EA8C1E",
    color: "#fff",
    href: "#activities",
  },
  {
    label: "Transfers",
    icon: <Car size={28} strokeWidth={2} />,
    bg: "#7C3AED",
    color: "#fff",
    href: "#transfers",
  },
]

const SECONDARY = [
  { icon: "🏢", label: "Apartments" },
  { icon: "🛂", label: "Visa" },
  { icon: "🛡️", label: "Insurance" },
  { icon: "🚢", label: "Cruises" },
  { icon: "💱", label: "Forex" },
  { icon: "🏡", label: "Villas" },
]

function MobileOfferCard({ offer, onOpen }: { offer: Offer; onOpen: () => void }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex-shrink-0 select-none min-w-[calc(50%-6px)] max-w-[calc(50%-6px)]"
      style={{ background: offer.color, width: "calc(50vw - 10px)", flexShrink: 0, minHeight: "160px", scrollSnapAlign: "start" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${offer.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
          mixBlendMode: "luminosity",
        }}
      />
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
      <div className="relative z-10 p-4 pr-[42%] flex flex-col justify-between h-full" style={{ minHeight: "160px" }}>
        <div>
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-2 whitespace-nowrap"
            style={{
              backgroundColor: "rgba(255,255,255,0.22)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {offer.tag}
          </span>
          <h4 className="font-extrabold text-white text-xs leading-tight">{offer.title}</h4>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <div
            className="inline-flex items-center gap-1 self-start px-2.5 py-1 rounded-lg text-white text-[10px] font-bold tracking-widest"
            style={{
              border: "1.5px dashed rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.12)",
            }}
          >
            {offer.code}
          </div>
          <button
            onClick={onOpen}
            className="inline-flex items-center self-start px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              color: offer.color,
            }}
          >
            {offer.cta}
          </button>
        </div>
      </div>
    </div>
  )
}

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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="bg-white rounded-t-3xl w-full max-w-lg overflow-hidden"
        style={{ animation: "slideUp 0.28s cubic-bezier(0.34,1.56,0.64,1) both", maxHeight: "90vh", overflowY: "auto" }}
      >
        <div className="relative h-28 overflow-hidden flex items-end p-4" style={{ background: offer.color }}>
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
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-1" style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" }}>
              {offer.tag}
            </span>
            <h2 className="text-white font-extrabold text-xl leading-tight">{offer.title}</h2>
          </div>
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
            <X size={16} color="white" />
          </button>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <p className="text-gray-600 text-sm leading-relaxed">{offer.desc}</p>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: "#fff7ed", color: "#c2410c" }}>
            Offer valid till <span className="font-bold ml-1">{offer.validTill}</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Promo Code</p>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-dashed transition-all"
              style={{ borderColor: copied ? "#10b981" : offer.color, backgroundColor: copied ? "#f0fdf4" : `${offer.color}10` }}
            >
              <span className="font-extrabold tracking-widest text-base" style={{ color: copied ? "#10b981" : offer.color }}>{offer.code}</span>
              <span className="text-xs font-semibold" style={{ color: copied ? "#10b981" : offer.color }}>{copied ? "Copied!" : "Tap to copy"}</span>
            </button>
          </div>
          <button
            onClick={handleRedeem}
            className="w-full py-3.5 rounded-xl font-bold text-white text-sm active:scale-95 transition-all"
            style={{ backgroundColor: offer.color }}
          >
            Redeem offer
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

// ── Widget Carousel ──
function WidgetCarousel() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef(0)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % 2)
    }, 6000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      setActive(prev => (prev + (diff > 0 ? 1 : -1) + 2) % 2)
      startTimer()
    }
  }

  return (
    <div
      className="relative overflow-hidden w-full h-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides wrapper */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${active * 50}%)`, width: "200%" }}
      >
        {/* GYG Slide */}
        <div className="h-full flex items-center justify-center" style={{ width: "50%", background: "transparent" }}>
          <div
            data-gyg-widget="auto"
            data-gyg-partner-id="9X14REW"
            style={{ width: "100%", minHeight: "140px" }}
          />
        </div>

        {/* Viator Slide */}
        <div className="h-full flex items-center justify-center" style={{ width: "50%", background: "transparent" }}>
          <div
            data-vi-partner-id="P00257641"
            data-vi-widget-ref="W-32705c4f-dc31-4666-abdd-e1abcb0679d5"
            data-vi-search-term="India"
            style={{ width: "100%", minHeight: "140px" }}
          />
        </div>
      </div>

      {/* Provider label */}
      <div className="absolute bottom-2 right-3 z-10">
        <span
          className="text-[9px] font-bold px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          {active === 0 ? "GetYourGuide" : "Viator"}
        </span>
      </div>
    </div>
  )
}

export default function HeroSectionMobile() {
  const [showMenu, setShowMenu] = useState(false)
  const [showCurrency, setShowCurrency] = useState(false)
  const [dealsOpen, setDealsOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  const { currency: selectedCurrency, setCurrency: setSelectedCurrency, currencies } = useCurrency()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY <= 0) {
        setVisible(true)
      } else if (currentY > lastScrollY.current) {
        setVisible(false)
        setShowMenu(false)
        setShowCurrency(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handler = () => setDealsOpen(true)
    window.addEventListener("open-deals", handler)
    return () => window.removeEventListener("open-deals", handler)
  }, [])

  return (
    <>
      {/* ── GYG Script ── */}
      <Script
        src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
        data-gyg-partner-id="9X14REW"
        strategy="lazyOnload"
      />

      {/* ── Viator Script ── */}
      <Script
        src="https://www.viator.com/orion/partner/widget.js"
        strategy="lazyOnload"
      />

      {/* ── Navbar ── */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-[#F8F9FF] shadow-sm transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-[#1A3A6B] p-1.5 rounded-lg hover:bg-[#1A3A6B]/10 transition-colors"
              aria-label="Menu"
            >
              {showMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link href="/" className="flex items-center gap-1.5">
              <img src="/logo-icon.png" alt="Get Trip Go icon" className="w-8 h-8 object-contain" />
              <img src="/logo-text.png" alt="Get Trip Go" className="h-6 object-contain" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDealsOpen(true)}
              className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full"
            >
              Deals
            </button>
            <div className="relative">
              <button
                onClick={() => setShowCurrency(!showCurrency)}
                className="flex items-center gap-1 text-xs font-bold text-[#1A3A6B] border border-[#1A3A6B]/20 px-2.5 py-1.5 rounded-full"
              >
                <DollarSign size={13} />
                {selectedCurrency}
              </button>
              {showCurrency && (
                <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-xl shadow-xl py-1 w-24 z-50">
                  {currencies.map(c => (
                    <button
                      key={c}
                      onClick={() => { setSelectedCurrency(c); setShowCurrency(false) }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-blue-50 hover:text-blue-600 ${
                        selectedCurrency === c ? "text-blue-600 font-bold" : "text-gray-700"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {showMenu && (
          <div className="border-t border-[#1A3A6B]/10 bg-[#F8F9FF] px-4 py-4 flex flex-col gap-2">
            <Link href="/blog" onClick={() => setShowMenu(false)} className="text-[#1A3A6B] font-bold text-sm px-4 py-3 rounded-xl border border-[#1A3A6B]/20 block">
              Blog
            </Link>
            <button className="text-[#1A3A6B] font-bold text-sm px-4 py-3 rounded-xl border border-[#1A3A6B]/20 text-left">
              My Trip
            </button>
            <button
              onClick={() => { setShowMenu(false); setSupportOpen(true) }}
              className="text-[#1A3A6B] font-bold text-sm px-4 py-3 rounded-xl border border-[#1A3A6B]/20 text-left"
            >
              Support
            </button>
          </div>
        )}
      </nav>

      {/* ── Page Content ── */}
      <div className="md:hidden pt-16 bg-[#F8F9FF]">

{/* ── Service Grid 1×4 ── */}
        <div className="px-4 pb-5">
          <div className="grid grid-cols-4 gap-3">
            {SERVICES.map(({ label, icon, bg, color, href }) => (
              <a
                key={label}
                href={href}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: bg, color }}
                >
                  {icon}
                </div>
                <span className="text-[11px] font-semibold text-[#0A1628] text-center leading-tight">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Special Offers ── */}
        <div className="pb-5">
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-base font-bold text-[#0A1628]">Special Offers</h2>
          </div>
          <div className="px-4">
            <div
              className="flex gap-3 overflow-x-auto pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              {offers.map(offer => (
                <MobileOfferCard
                  key={offer.code}
                  offer={offer}
                  onOpen={() => setActiveOffer(offer)}
                />
              ))}
            </div>
          </div>
        </div>


        {/* ── Widget Carousel ── */}
        <div
          className="mx-4 mb-5 rounded-2xl overflow-hidden relative"
          style={{
            height: "180px",
            background: "linear-gradient(135deg, #0A1628 0%, #1A56F0 50%, #0ea5e9 100%)",
          }}
        >
          <div className="relative z-10 w-full h-full">
            <WidgetCarousel />
          </div>
        </div>

        {/* ── Secondary Services ── */}
        <div className="pb-4">
          <div className="px-4 mb-3">
            <h2 className="text-base font-bold text-[#0A1628]">More Services</h2>
          </div>
          <div
            className="flex gap-3 overflow-x-auto px-4 pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" } as React.CSSProperties}
          >
            {SECONDARY.map(({ icon, label }) => (
              <button
                key={label}
                className="flex-shrink-0 flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <span className="text-[11px] font-semibold text-[#0A1628] text-center leading-tight w-14">{label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {activeOffer && <OfferModal offer={activeOffer} onClose={() => setActiveOffer(null)} />}
      <DealsModal isOpen={dealsOpen} onClose={() => setDealsOpen(false)} />
      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </>
  )
}