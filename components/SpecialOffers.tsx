"use client"

import { useEffect, useRef, useState } from "react"

const offers = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
    title: "Flat ₹5,000 off — First Booking",
    desc: "New user? Get flat ₹5,000 off on your very first booking with us.",
    code: "FIRST5000",
    tag: "New User",
    color: "#1A56F0",
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80",
    title: "Mumbai → Dubai from ₹12,999",
    desc: "Book your Dubai flight now and save big. Limited seats at this price.",
    code: "DUBFLY",
    tag: "Flights",
    color: "#f97316",
  },
  {
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=400&q=80",
    title: "Bangkok from ₹8,999",
    desc: "Fly to Bangkok at unbeatable prices. Book before seats run out.",
    code: "BKKFLY",
    tag: "Flights",
    color: "#059669",
  },
  {
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=400&q=80",
    title: "Flat ₹10,000 off — Europe Group",
    desc: "Save ₹10,000 per person on Europe group departures. Limited seats.",
    code: "EURGRP10K",
    tag: "Group Tours",
    color: "#7C3AED",
  },
  {
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=400&q=80",
    title: "Cruise Deal — 25% Off",
    desc: "Book a cruise and get 25% off on the 2nd person. Perfect for couples.",
    code: "CRUISE25",
    tag: "Cruise",
    color: "#0891B2",
  },
  {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80",
    title: "Bhutan — Kids Travel Free",
    desc: "Children below 10 years travel free with parents on Bhutan packages.",
    code: "BHUTANKID",
    tag: "Holidays",
    color: "#059669",
  },
  {
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&q=80",
    title: "Maldives Honeymoon Special",
    desc: "Book your Maldives honeymoon trip and enjoy a free candlelight dinner.",
    code: "MALDCANDLE",
    tag: "Honeymoon",
    color: "#DB2777",
  },
  {
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80",
    title: "Thailand 4N + 2N Pattaya Free",
    desc: "Book a 4-night Thailand trip and get 2 nights in Pattaya absolutely free.",
    code: "THAI4N2F",
    tag: "Holidays",
    color: "#7C3AED",
  },
]

const VISIBLE_DESKTOP = 3
const VISIBLE_MOBILE = 1

const OfferCard = ({ offer }: { offer: typeof offers[0] }) => (
  <div
    className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden flex h-full"
    style={{ minHeight: "110px" }}
  >
    <div className="relative w-28 sm:w-32 flex-shrink-0">
      <img
        src={offer.image}
        alt={offer.title}
        className="absolute inset-0 w-full h-full object-cover brightness-110 saturate-150"
      />
    </div>
    <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
      <div>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full text-white inline-block mb-1"
          style={{ backgroundColor: offer.color }}
        >
          {offer.tag}
        </span>
        <h4 className="text-sm font-bold text-gray-900 mb-1 leading-tight">{offer.title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{offer.desc}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{offer.code}</span>
        <button className="text-blue-600 text-xs font-semibold hover:underline">Details</button>
      </div>
    </div>
  </div>
)

export default function SpecialOffers() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = offers.length
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
    }, 3000)
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
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Special Offers</h3>
          <button className="text-blue-600 text-sm font-semibold hover:underline shrink-0 ml-4">View all offers ↗</button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * cardWidthPct}%)` }}
          >
            {offers.map((offer) => (
              <div
                key={offer.code}
                className="flex-shrink-0 px-1.5"
                style={{ width: `${cardWidthPct}%` }}
              >
                <OfferCard offer={offer} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}