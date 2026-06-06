"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SupportModal from "@/components/SupportModal"
import DealsModal from "@/components/DealsModal"

export default function Navbar() {
  const [currencies, setCurrencies] = useState<string[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState("INR")
  const [selectedLang, setSelectedLang] = useState("English")
  const [showCurrency, setShowCurrency] = useState(false)
  const [showLang, setShowLang] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [visible, setVisible] = useState(true)
  const [supportOpen, setSupportOpen] = useState(false)
  const [dealsOpen, setDealsOpen] = useState(false)

  const lastScrollY = useRef(0)
  const pathname = usePathname()

  const languages = ["English", "Hindi", "Arabic", "French"]
  const langShort: Record<string, string> = {
    English: "EN", Hindi: "HI", Arabic: "AR", French: "FR"
  }

  useEffect(() => {
    fetch("/api/currency")
      .then(res => res.json())
      .then(data => {
        const major = ["INR", "USD", "EUR", "AED", "GBP", "SGD", "AUD", "CAD"]
        setCurrencies(major.filter(c => data.rates[c]))
      })
      .catch(() => setCurrencies(["INR", "USD", "EUR", "AED", "GBP"]))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY <= 0) {
        setVisible(true)
      } else if (currentY > lastScrollY.current) {
        setVisible(false)
        setShowMenu(false)
        setShowCurrency(false)
        setShowLang(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ← Listen for footer "Best Deals" click
  useEffect(() => {
    const handler = () => setDealsOpen(true)
    window.addEventListener("open-deals", handler)
    return () => window.removeEventListener("open-deals", handler)
  }, [])

  const textColor = "text-[#1A3A6B]"
  const borderColor = "border-[#1A3A6B]/20"
  const hoverBg = "hover:bg-[#1A3A6B]/10"

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "#F8F9FF" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-icon.png" alt="Get Trip Go icon" className="w-10 h-10 object-contain" />
          <img src="/logo-text.png" alt="Get Trip Go" className="h-8 object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDealsOpen(true)}
            className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            Deals
          </button>
          <Link href="/blog" className={`${textColor} font-bold text-sm px-4 py-2 rounded-full border ${borderColor} ${hoverBg} transition-colors`}>
            Blog
          </Link>
          <button className={`${textColor} font-bold text-sm px-4 py-2 rounded-full border ${borderColor} ${hoverBg} transition-colors`}>
            My Trip
          </button>
          <button
            onClick={() => setSupportOpen(true)}
            className={`${textColor} font-bold text-sm px-4 py-2 rounded-full border ${borderColor} ${hoverBg} transition-colors`}
          >
            Support
          </button>

          <div className="w-px h-6 mx-1 bg-[#1A3A6B]/20" />

          {/* Currency */}
          <div className="relative">
            <button
              onClick={() => { setShowCurrency(!showCurrency); setShowLang(false) }}
              className={`flex items-center gap-1 text-sm font-bold ${textColor} border ${borderColor} px-3 py-2 rounded-full ${hoverBg} transition-colors`}
            >
              {selectedCurrency} ▾
            </button>
            {showCurrency && (
              <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-xl shadow-xl py-1 w-28 z-50">
                {currencies.map(c => (
                  <button
                    key={c}
                    onClick={() => { setSelectedCurrency(c); setShowCurrency(false) }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 ${
                      selectedCurrency === c ? "text-blue-600 font-bold" : "text-gray-700"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => { setShowLang(!showLang); setShowCurrency(false) }}
              className={`flex items-center gap-1 text-sm font-bold ${textColor} border ${borderColor} px-3 py-2 rounded-full ${hoverBg} transition-colors`}
            >
              {langShort[selectedLang]} ▾
            </button>
            {showLang && (
              <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-xl shadow-xl py-1 w-32 z-50">
                {languages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => { setSelectedLang(lang); setShowLang(false) }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 ${
                      selectedLang === lang ? "text-blue-600 font-bold" : "text-gray-700"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile right — Deals + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDealsOpen(true)}
            className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-red-600"
          >
            Deals
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`${textColor} p-2 rounded-lg ${hoverBg} transition-colors`}
            aria-label="Menu"
          >
            {showMenu ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {showMenu && (
          <div
            className="absolute top-full left-0 right-0 border-t border-[#1A3A6B]/10 shadow-lg z-50 md:hidden"
            style={{ backgroundColor: "#F8F9FF" }}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <Link
                href="/blog"
                onClick={() => setShowMenu(false)}
                className="text-[#1A3A6B] font-bold text-sm px-4 py-3 rounded-xl border border-[#1A3A6B]/20 hover:bg-[#1A3A6B]/5 text-left block transition-colors"
              >
                Blog
              </Link>
              <button className="text-[#1A3A6B] font-bold text-sm px-4 py-3 rounded-xl border border-[#1A3A6B]/20 hover:bg-[#1A3A6B]/5 text-left transition-colors">
                My Trip
              </button>
              <button
                onClick={() => { setShowMenu(false); setSupportOpen(true) }}
                className="text-[#1A3A6B] font-bold text-sm px-4 py-3 rounded-xl border border-[#1A3A6B]/20 hover:bg-[#1A3A6B]/5 text-left transition-colors"
              >
                Support
              </button>
              <div className="border-t border-[#1A3A6B]/10 pt-3 flex gap-2">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="flex-1 text-sm font-bold px-3 py-2 rounded-xl border bg-white text-[#1A3A6B] border-[#1A3A6B]/20"
                >
                  {currencies.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="flex-1 text-sm font-bold px-3 py-2 rounded-xl border bg-white text-[#1A3A6B] border-[#1A3A6B]/20"
                >
                  {languages.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
      <DealsModal isOpen={dealsOpen} onClose={() => setDealsOpen(false)} />
    </>
  )
}