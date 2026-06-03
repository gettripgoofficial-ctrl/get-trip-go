"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Headphones,
  Tag,
  MoreHorizontal,
  Car,
  Building2,
  BadgeDollarSign,
  Castle,
  X,
  PhoneCall,
} from "lucide-react"

const moreItems = [
  { label: "Transfers", icon: Car, href: "#" },
  { label: "Apartments", icon: Building2, href: "#" },
  { label: "Forex & Currency", icon: BadgeDollarSign, href: "#" },
  { label: "Villas", icon: Castle, href: "#" },
]

const navItems = [
  { label: "Home", icon: Home, href: "#" },
  { label: "Support", icon: Headphones, href: "#" },
  null, // center FAB placeholder
  { label: "Offers", icon: Tag, href: "#" },
  { label: "More", icon: MoreHorizontal, href: null },
]

export default function BottomNav() {
  const pathname = usePathname()
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <>
      {/* Bottom Nav — mobile only */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-end justify-around px-2 h-16">
          {navItems.map((item, i) => {
            // Center FAB — Enquiry Now
            if (item === null) {
              return (
                <div key="enquiry" className="flex flex-col items-center -mt-5">
                  <Link
                    href="#"
                    className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-orange-500 shadow-lg shadow-orange-200 active:scale-95 transition-transform"
                  >
                    <PhoneCall size={20} className="text-white" />
                  </Link>
                  <span className="text-[10px] font-semibold text-orange-500 mt-1 leading-none">Enquiry</span>
                </div>
              )
            }

            const Icon = item.icon
            const isActive = item.href && pathname === item.href
            const isMore = item.label === "More"

            if (isMore) {
              return (
                <button
                  key={item.label}
                  onClick={() => setMoreOpen(true)}
                  className="flex flex-col items-center justify-center gap-1 py-2 flex-1"
                >
                  <Icon size={22} className={moreOpen ? "text-orange-500" : "text-gray-400"} />
                  <span className={`text-[10px] font-medium ${moreOpen ? "text-orange-500" : "text-gray-400"}`}>
                    {item.label}
                  </span>
                </button>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href!}
                className="flex flex-col items-center justify-center gap-1 py-2 flex-1"
              >
                <Icon size={22} className={isActive ? "text-orange-500" : "text-gray-400"} />
                <span className={`text-[10px] font-medium ${isActive ? "text-orange-500" : "text-gray-400"}`}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Safe area spacer for iOS */}
        <div className="h-safe-area-inset-bottom bg-white" />
      </nav>

      {/* More — Bottom Sheet */}
      {moreOpen && (
        <>
          {/* Backdrop */}
          <div
            className="sm:hidden fixed inset-0 z-40 bg-black/40"
            onClick={() => setMoreOpen(false)}
          />

          {/* Sheet */}
          <div className="sm:hidden fixed bottom-16 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl px-4 pt-4 pb-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-800">More Services</h3>
              <button
                onClick={() => setMoreOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100"
              >
                <X size={14} className="text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {moreItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                      <Icon size={22} className="text-orange-500" />
                    </div>
                    <span className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </>
      )}

      {/* Push page content above nav on mobile */}
      <div className="sm:hidden h-16" />

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.22s ease-out;
        }
      `}</style>
    </>
  )
}