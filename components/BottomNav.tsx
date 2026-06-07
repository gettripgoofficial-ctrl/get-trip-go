"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Briefcase,
  PhoneCall,
  Wrench,
  Headphones,
  X,
  Car,
  Building2,
  BadgeDollarSign,
  Castle,
  Ship,
  ShieldCheck,
  FileText,
} from "lucide-react"
import SupportModal from "@/components/SupportModal"
import EnquiryModal from "@/components/EnquiryModal"

const TRAVEL_TOOLS = [
  { label: "Transfers", icon: Car, href: "https://gettransfer.tpx.lu/wuqe2IDc" },
  { label: "Car Rental", icon: Car, href: "https://localrent.tpx.lu/OJUcblal" },
  { label: "Apartments", icon: Building2, href: "#" },
  { label: "Forex", icon: BadgeDollarSign, href: "#" },
  { label: "Villas", icon: Castle, href: "#" },
  { label: "Cruises", icon: Ship, href: "#" },
  { label: "Insurance", icon: ShieldCheck, href: "#" },
  { label: "Visa", icon: FileText, href: "#" },
]

export default function BottomNav() {
  const pathname = usePathname()
  const [toolsOpen, setToolsOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* ── Bottom Nav ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-end justify-around px-2 h-16">

          {/* Home */}
          <Link href="/" className="flex flex-col items-center justify-center gap-1 py-2 flex-1">
            <Home size={22} className={isActive("/") ? "text-[#1A56F0]" : "text-gray-400"} />
            <span className={`text-[10px] font-medium ${isActive("/") ? "text-[#1A56F0]" : "text-gray-400"}`}>Home</span>
          </Link>

          {/* My Trip */}
          <button className="flex flex-col items-center justify-center gap-1 py-2 flex-1">
            <Briefcase size={22} className="text-gray-400" />
            <span className="text-[10px] font-medium text-gray-400">My Trip</span>
          </button>

          {/* Enquiry — Center FAB */}
          <div className="flex flex-col items-center -mt-5">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-[#1A56F0] shadow-lg shadow-blue-300 active:scale-95 transition-transform"
            >
              <PhoneCall size={20} className="text-white" />
            </button>
            <span className="text-[10px] font-semibold text-[#1A56F0] mt-1 leading-none">Enquiry</span>
          </div>

          {/* Travel Tools */}
          <button
            onClick={() => setToolsOpen(true)}
            className="flex flex-col items-center justify-center gap-1 py-2 flex-1"
          >
            <Wrench size={22} className={toolsOpen ? "text-[#1A56F0]" : "text-gray-400"} />
            <span className={`text-[10px] font-medium ${toolsOpen ? "text-[#1A56F0]" : "text-gray-400"}`}>Travel Tools</span>
          </button>

          {/* Support */}
          <button
            onClick={() => setSupportOpen(true)}
            className="flex flex-col items-center justify-center gap-1 py-2 flex-1"
          >
            <Headphones size={22} className="text-gray-400" />
            <span className="text-[10px] font-medium text-gray-400">Support</span>
          </button>

        </div>
        {/* iOS safe area */}
        <div className="h-safe-area-inset-bottom bg-white" />
      </nav>

      {/* Travel Tools Bottom Sheet */}
      {toolsOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/40"
            onClick={() => setToolsOpen(false)}
          />
          <div className="md:hidden fixed bottom-16 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl px-4 pt-4 pb-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-800">Travel Tools</h3>
              <button
                onClick={() => setToolsOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100"
              >
                <X size={14} className="text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {TRAVEL_TOOLS.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setToolsOpen(false)}
                    className="flex flex-col items-center gap-2"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon size={22} className="text-[#1A56F0]" />
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

      {/* Push content above nav */}
      <div className="md:hidden h-16" />

      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

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