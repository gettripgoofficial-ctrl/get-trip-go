"use client"
import { usePrice } from "@/hooks/usePrice"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { groupDepartures } from "@/data/groupDepartures"

const HOME_PACKAGES = groupDepartures.slice(0, 12)

const VISIBLE_DESKTOP = 4
const VISIBLE_MOBILE = 1

function DepCard({ dep }: { dep: typeof groupDepartures[0] }) {
  const { convert } = usePrice()
  return (
  <Link
    href={`/group-departures/${dep.slug}`}
    className="relative cursor-pointer group block"
    style={{ height: "240px", marginBottom: "60px" }}
  >
    <div className="absolute inset-0 rounded-2xl overflow-hidden">
      <img
        src={dep.heroImage}
        alt={dep.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
      {dep.days}D/{dep.nights}N
    </div>
    {dep.tag && (
      <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 whitespace-nowrap">
        {dep.tag}
      </div>
    )}
    <div className="absolute bottom-[-44px] left-2 right-2 bg-white rounded-2xl shadow-lg p-3 z-10">
      <div className="mb-1.5">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <p className="text-xs font-bold text-gray-900 leading-tight truncate">{dep.name}</p>
          <span className="text-xs text-gray-500 font-medium whitespace-nowrap shrink-0">✈ {dep.departureDates[0]}</span>
        </div>
        <p className="text-xs text-gray-500 truncate">
          {dep.countries.slice(0, 3).map(c => c.charAt(0) + c.slice(1).toLowerCase()).join(" · ")}
          {dep.countries.length > 3 ? ` · +${dep.countries.length - 3}` : ""}
        </p>
      </div>
      <hr className="border-gray-100 mb-1.5" />
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-500">From </span>
          <span className="text-xs font-bold text-gray-800">{convert(dep.priceINR)}</span>
        </div>
        <span className="text-xs font-semibold text-blue-600">Explore</span>
      </div>
    </div>
  </Link>
  )
}

export default function GroupDepartures() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)

  const total = HOME_PACKAGES.length
  const maxIndex = total - visibleCount
  const totalDots = maxIndex + 1

  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth < 640 ? VISIBLE_MOBILE : VISIBLE_DESKTOP)
      setCurrent(0)
      if (scrollRef.current) scrollRef.current.scrollLeft = 0
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Sync dot indicator with scroll position
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      if (isScrolling.current) return
      const cardWidth = el.scrollWidth / total
      const index = Math.round(el.scrollLeft / cardWidth)
      setCurrent(Math.max(0, Math.min(index, maxIndex)))
    }

    el.addEventListener("scroll", handleScroll, { passive: true })
    return () => el.removeEventListener("scroll", handleScroll)
  }, [total, maxIndex])

  // Dot click scrolls to position
  const goTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / total
    isScrolling.current = true
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" })
    setCurrent(index)
    setTimeout(() => { isScrolling.current = false }, 600)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Europe Group Departures</h3>
            <p className="text-gray-500 text-sm mt-1 hidden sm:block">
              Guaranteed departures — travel with like-minded explorers
            </p>
          </div>
          <Link href="/group-departures" className="text-blue-600 text-sm font-semibold hover:underline shrink-0 ml-4">
            View all ↗
          </Link>
        </div>

        {/* Scrollable cards — native scroll, trackpad + touch */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-1"
          style={{
            scrollbarWidth: "none",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {HOME_PACKAGES.map((dep) => (
            <div
              key={dep.slug}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / visibleCount}% - ${visibleCount === 1 ? "0px" : "12px"})`,
                scrollSnapAlign: "start",
                flexShrink: 0,
              }}
            >
              <DepCard dep={dep} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Group departure slides">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "20px" : "8px",
                height: "8px",
                minWidth: "8px",
                minHeight: "8px",
                background: i === current ? "#1A56F0" : "rgba(10,22,40,0.15)",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

      </div>
    </div>
  )
}