"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

type Offer = {
  color: string
  image: string
  tag: string
  title: string
  code: string
  cta: string
  desc: string
  validTill: string
}

// ── Klook Banner Carousel ──
const KLOOK_SLIDES = [
  { bgtype: "Car",        label: "Car Rentals" },
  { bgtype: "Hotel",      label: "Hotels"      },
  { bgtype: "Shinkansen", label: "Trains"      },
  { bgtype: "Play",       label: "Activities"  },
]

export function KlookBannerCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setScale(containerRef.current.offsetWidth / 468)
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % KLOOK_SLIDES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative rounded-xl overflow-hidden w-full" style={{ height: 60 * scale + "px" }}>
      {KLOOK_SLIDES.map((slide, i) => (
        <iframe
          key={slide.bgtype}
          src={`/api/klook-widget?bgtype=${slide.bgtype}`}
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "468px",
            height: "60px",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            border: "none",
            display: "block",
            opacity: i === activeIndex ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: i === activeIndex ? "auto" : "none",
          }}
          scrolling="no"
        />
      ))}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1 z-10" style={{ pointerEvents: "none" }}>
        {KLOOK_SLIDES.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: activeIndex === i ? "14px" : "5px",
              height: "5px",
              backgroundColor: activeIndex === i ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Widget Carousel (GetYourGuide + Viator) ──
export function WidgetCarousel() {
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
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${active * 50}%)`, width: "200%" }}
      >
        <div className="h-full flex items-center justify-center" style={{ width: "50%", background: "transparent" }}>
          <div
            data-gyg-widget="auto"
            data-gyg-partner-id="9X14REW"
            style={{ width: "100%", minHeight: "140px" }}
          />
        </div>
        <div className="h-full flex items-center justify-center" style={{ width: "50%", background: "transparent" }}>
          <div
            data-vi-partner-id="P00257641"
            data-vi-widget-ref="W-32705c4f-dc31-4666-abdd-e1abcb0679d5"
            data-vi-search-term="India"
            style={{ width: "100%", minHeight: "140px" }}
          />
        </div>
      </div>
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

// ── Mobile Offer Card ──
export function MobileOfferCard({ offer, onOpen }: { offer: Offer; onOpen: () => void }) {
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

// ── Offer Modal ──
export function OfferModal({ offer, onClose }: { offer: Offer; onClose: () => void }) {
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