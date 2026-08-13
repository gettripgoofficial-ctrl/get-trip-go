"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, DollarSign } from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"
import DealsModal from "@/components/DealsModal"
import SupportModal from "@/components/SupportModal"

export default function KenyaMobileHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const [showCurrency, setShowCurrency] = useState(false)
  const [dealsOpen, setDealsOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
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

  return (
    <>
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
              <Image src="/logo-icon.png" alt="Get Trip Go icon" width={200} height={197} priority className="w-8 h-8 object-contain" />
              <Image src="/logo-text.png" alt="Get Trip Go" width={400} height={90} priority className="h-6 w-auto object-contain" />
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

      <DealsModal isOpen={dealsOpen} onClose={() => setDealsOpen(false)} />
      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
    </>
  )
}
