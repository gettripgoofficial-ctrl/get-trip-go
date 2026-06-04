"use client"
import { useState, useEffect } from "react"
import SearchBox from "@/components/search/SearchBox"

const services = ["Flights", "Hotels", "Holidays", "Activities", "Transfers", "Apartments"]

const deals = [
  {
    id: 1,
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tag: "NEW USER OFFER",
    tagColor: "#e9d5ff",
    title: "Flat ₹5,000 Off",
    subtitle: "on your first booking",
    code: "FIRST5000",
    titleColor: "#fff",
    subtitleColor: "rgba(255,255,255,0.85)",
    ctaBg: "#FFCC00",
    ctaColor: "#1a1a1a",
    cta: "Claim →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M20 12V22H4V12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7H2v5h20V7z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tag: "FLIGHTS · HOT DEAL",
    tagColor: "#fce7f3",
    title: "Mumbai → Dubai",
    subtitle: "from ₹12,999 only",
    code: "DUBFLY",
    titleColor: "#fff",
    subtitleColor: "rgba(255,255,255,0.85)",
    ctaBg: "#fff",
    ctaColor: "#f5576c",
    cta: "Book →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#fff"/>
      </svg>
    ),
  },
  {
    id: 3,
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tag: "BANGKOK SPECIAL",
    tagColor: "#e0f7ff",
    title: "Bangkok Getaway",
    subtitle: "starting ₹8,999 per person",
    code: "BKKFLY",
    titleColor: "#fff",
    subtitleColor: "rgba(255,255,255,0.85)",
    ctaBg: "#fff",
    ctaColor: "#0891b2",
    cta: "Explore →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#fff"/>
      </svg>
    ),
  },
  {
    id: 4,
    bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    tag: "⚡ EUROPE GROUP",
    tagColor: "#d1fae5",
    title: "Flat ₹10,000 Off",
    subtitle: "Europe Group Departure",
    code: "EURGRP10K",
    titleColor: "#fff",
    subtitleColor: "rgba(255,255,255,0.85)",
    ctaBg: "#fff",
    ctaColor: "#059669",
    cta: "View Tours →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
]

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Flights")
  const [currentDeal, setCurrentDeal] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrentDeal(prev => (prev + 1) % deals.length)
        setAnimating(false)
      }, 300)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const deal = deals[currentDeal]

  return (
    <div style={{ backgroundColor: "#1A56F0" }}>
      <div className="pt-4 px-4 pb-36 sm:pb-26">

        {/* Hero Text - desktop only */}
        <h2 className="hidden sm:block text-white text-4xl font-bold text-center mb-2">
          Travel More. Spend Less. Live More.
        </h2>
        <p className="hidden sm:block text-blue-200 text-center text-base mb-1">
          Compare. Book. Travel. It&apos;s that simple.
        </p>
        <p className="hidden sm:block text-center text-sm font-semibold mb-10" style={{ color: "#F5A623" }}>
          ⭐ Trusted by Millions.
        </p>

        {/* Mobile Deal Banner */}
        <div className="sm:hidden mb-4">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: deal.bg,
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(6px)" : "translateY(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            <div className="flex items-center gap-2.5 px-3 py-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <div style={{ transform: "scale(0.7)", transformOrigin: "center" }}>{deal.icon}</div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-extrabold uppercase tracking-widest leading-none mb-0.5" style={{ color: deal.tagColor }}>
                  {deal.tag}
                </p>
                <p className="text-sm font-extrabold leading-tight" style={{ color: deal.titleColor }}>
                  {deal.title}
                </p>
                <p className="text-[10px] leading-tight" style={{ color: deal.subtitleColor }}>
                  {deal.subtitle} &nbsp;·&nbsp; <span className="font-bold">{deal.code}</span>
                </p>
              </div>
              <button
                className="text-[11px] font-extrabold px-2.5 py-1.5 rounded-lg flex-shrink-0 shadow-md"
                style={{ background: deal.ctaBg, color: deal.ctaColor }}
              >
                {deal.cta}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">

          {/* Service Tabs */}
          <div className="flex gap-2 sm:gap-3 relative z-20 mb-[-22px] overflow-x-auto scrollbar-hide pb-1">
            {services.map(service => (
              <button
                key={service}
                onClick={() => setActiveTab(service)}
                className={`flex-shrink-0 flex-1 min-w-[80px] py-2.5 sm:py-3 text-sm font-semibold rounded-2xl transition-all bg-white shadow-md ${
                  activeTab === service
                    ? "text-blue-600 border-2 border-blue-500"
                    : "text-gray-600 border-2 border-transparent hover:border-blue-200"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Search Card */}
          <div
            className="bg-white shadow-2xl px-4 sm:px-6 pt-10 pb-6 rounded-2xl relative z-10"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}
          >
            <SearchBox activeTab={activeTab} />
          </div>

        </div>
      </div>
    </div>
  )
}