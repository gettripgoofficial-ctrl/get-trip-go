"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { groupDepartures } from "@/data/groupDepartures"

const HOME_PACKAGES = groupDepartures.slice(0, 12)

const VISIBLE_DESKTOP = 4
const VISIBLE_MOBILE = 1

const DepCard = ({ dep }: { dep: typeof groupDepartures[0] }) => (
  <Link
    href={`/group-departures/${dep.slug}`}
    className="relative cursor-pointer group block"
    style={{ height: "240px", marginBottom: "60px" }}
  >
    {/* Image */}
    <div className="absolute inset-0 rounded-2xl overflow-hidden">
      <img
        src={dep.heroImage}
        alt={dep.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Duration badge */}
    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
      {dep.days}D/{dep.nights}N
    </div>

    {/* Tag badge */}
    {dep.tag && (
      <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 whitespace-nowrap">
        {dep.tag}
      </div>
    )}

    {/* Floating white card */}
    <div className="absolute bottom-[-44px] left-2 right-2 bg-white rounded-2xl shadow-lg p-3 z-10">
      <div className="mb-1.5">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <h4 className="text-xs font-bold text-gray-900 leading-tight truncate">{dep.name}</h4>
          <span className="text-xs text-gray-500 font-medium whitespace-nowrap shrink-0">✈ {dep.departureDates[0]}</span>
        </div>
        <p className="text-xs text-gray-400 truncate">
          {dep.countries.slice(0, 3).map(c => c.charAt(0) + c.slice(1).toLowerCase()).join(" · ")}
          {dep.countries.length > 3 ? ` · +${dep.countries.length - 3}` : ""}
        </p>
      </div>
      <hr className="border-gray-100 mb-1.5" />
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400">From </span>
          <span className="text-xs font-bold text-gray-800">₹{dep.priceINR.toLocaleString()}</span>
        </div>
        <span className="text-xs font-semibold text-blue-600">Explore</span>
      </div>
    </div>
  </Link>
)

export default function GroupDepartures() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = HOME_PACKAGES.length
  const maxIndex = total - visibleCount

  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 640 ? VISIBLE_MOBILE : VISIBLE_DESKTOP)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [maxIndex])

  const cardWidthPct = 100 / visibleCount

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Europe Group Departures</h3>
            <p className="text-gray-500 text-sm mt-1 hidden sm:block">
              Guaranteed departures — travel with like-minded explorers
            </p>
          </div>
          <Link
            href="/group-departures"
            className="text-blue-600 text-sm font-semibold hover:underline shrink-0 ml-4"
          >
            View all ↗
          </Link>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * cardWidthPct}%)` }}
          >
            {HOME_PACKAGES.map((dep) => (
              <div
                key={dep.slug}
                className="flex-shrink-0 px-1.5"
                style={{ width: `${cardWidthPct}%` }}
              >
                <DepCard dep={dep} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}