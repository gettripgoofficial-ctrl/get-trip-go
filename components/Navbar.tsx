"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SupportModal from "@/components/SupportModal"
import { useCurrency } from "@/contexts/CurrencyContext"
import DealsModal from "@/components/DealsModal"

export default function Navbar() {
  const [selectedLang, setSelectedLang] = useState("English")
  const [showCurrency, setShowCurrency] = useState(false)
  const [showLang, setShowLang] = useState(false)
  const [visible, setVisible] = useState(true)
  const [supportOpen, setSupportOpen] = useState(false)
  const [dealsOpen, setDealsOpen] = useState(false)

  const lastScrollY = useRef(0)
  const { currency: selectedCurrency, setCurrency: setSelectedCurrency, currencies } = useCurrency()

  const languages = ["English", "Hindi", "Arabic", "French"]
  const langShort: Record<string, string> = {
    English: "EN", Hindi: "HI", Arabic: "AR", French: "FR"
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY <= 0) {
        setVisible(true)
      } else if (currentY > lastScrollY.current) {
        setVisible(false)
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

  useEffect(() => {
    const handler = () => setDealsOpen(true)
    window.addEventListener("open-deals", handler)
    return () => window.removeEventListener("open-deals", handler)
  }, [])

  return (
    <>
      {/* Desktop only navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 items-center justify-between transition-all duration-300 bg-[#F8F9FF] shadow-sm ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-icon.png" alt="Get Trip Go icon" className="w-10 h-10 object-contain" />
          <img src="/logo-text.png" alt="Get Trip Go" className="h-8 object-contain" />
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDealsOpen(true)}
            className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            Deals
          </button>
          <Link href="/blog" className="text-[#1A3A6B] font-bold text-sm px-4 py-2 rounded-full border border-[#1A3A6B]/20 hover:bg-[#1A3A6B]/10 transition-colors">
            Blog
          </Link>
          <button className="text-[#1A3A6B] font-bold text-sm px-4 py-2 rounded-full border border-[#1A3A6B]/20 hover:bg-[#1A3A6B]/10 transition-colors">
            My Trip
          </button>
          <button
            onClick={() => setSupportOpen(true)}
            className="text-[#1A3A6B] font-bold text-sm px-4 py-2 rounded-full border border-[#1A3A6B]/20 hover:bg-[#1A3A6B]/10 transition-colors"
          >
            Support
          </button>

          <div className="w-px h-6 mx-1 bg-[#1A3A6B]/20" />

          {/* Currency */}
          <div className="relative">
            <button
              onClick={() => { setShowCurrency(!showCurrency); setShowLang(false) }}
              aria-label="Change currency"
              className="flex items-center gap-1 text-sm font-bold text-[#1A3A6B] border border-[#1A3A6B]/20 px-3 py-2 rounded-full hover:bg-[#1A3A6B]/10 transition-colors"
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
              aria-label="Change language"
              className="flex items-center gap-1 text-sm font-bold text-[#1A3A6B] border border-[#1A3A6B]/20 px-3 py-2 rounded-full hover:bg-[#1A3A6B]/10 transition-colors"
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
      </nav>

      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
      <DealsModal isOpen={dealsOpen} onClose={() => setDealsOpen(false)} />
    </>
  )
}