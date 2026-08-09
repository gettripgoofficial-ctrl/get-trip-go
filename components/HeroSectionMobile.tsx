"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Script from "next/script"
import { Plane, Hotel, Camera, Car, Menu, X, DollarSign } from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"
import DealsModal from "@/components/DealsModal"
import SupportModal from "@/components/SupportModal"
import KenyaBanner from "@/components/KenyaBanner"
import MobileSearchSheet, { MobileSearchTab } from "@/components/search/mobile/MobileSearchSheet"
import SecondaryServices from "@/components/SecondaryServices"
import { offers } from "@/data/offers"
import {
  MobileOfferCard,
  OfferModal,
} from "./HeroComponents"

type Offer = typeof offers[0]

const SERVICES: { label: string; icon: React.ReactNode; bg: string; color: string; tab: MobileSearchTab }[] = [
  { label: "Flights",      icon: <Plane   size={28} strokeWidth={2} />, bg: "#1A56F0", color: "#fff", tab: "Flights"    },
  { label: "Hotels",       icon: <Hotel   size={28} strokeWidth={2} />, bg: "#16A34A", color: "#fff", tab: "Hotels"     },
  { label: "Things to do", icon: <Camera  size={28} strokeWidth={2} />, bg: "#EA8C1E", color: "#fff", tab: "Activities" },
  { label: "Transfers",    icon: <Car     size={28} strokeWidth={2} />, bg: "#7C3AED", color: "#fff", tab: "Transfers"  },
]


export default function HeroSectionMobile() {
  const [showMenu, setShowMenu] = useState(false)
  const [activeSheet, setActiveSheet] = useState<MobileSearchTab | null>(null)
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
      {/* ── Scripts ── */}
      <Script src="https://www.viator.com/orion/partner/widget.js" strategy="lazyOnload" />


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
            <Link href="/my-trip" className="text-[#1A3A6B] font-bold text-sm px-4 py-3 rounded-xl border border-[#1A3A6B]/20 text-left block">
              My Trip
            </Link>
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
            {SERVICES.map(({ label, icon, bg, color, tab }) => (
              <button
                key={label}
                onClick={() => setActiveSheet(tab)}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: bg, color }}
                >
                  {icon}
                </div>
                <span className="text-[11px] font-semibold text-[#0A1628] text-center leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Special Offers ── */}
        <div className="pb-5">
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-base font-bold text-[#0A1628]">Explore Coupons</h2>
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

        {/* ── Kenya Banner ── */}
        <KenyaBanner />

        {/* ── Secondary Services ── */}
        <div className="pb-4">
          <div className="px-4 mb-3">
            <h2 className="text-base font-bold text-[#0A1628]">More Services</h2>
          </div>
          <SecondaryServices />
        </div>

      </div>

      {activeSheet && (
        <MobileSearchSheet initialTab={activeSheet} onClose={() => setActiveSheet(null)} />
      )}
      {activeOffer && <OfferModal offer={activeOffer} onClose={() => setActiveOffer(null)} />}
      <DealsModal isOpen={dealsOpen} onClose={() => setDealsOpen(false)} />
      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </>
  )
}