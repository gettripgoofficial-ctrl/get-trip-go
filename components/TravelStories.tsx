"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const articles = [
  {
    id: 1,
    title: "10 Mistakes to Avoid When Booking Your First International Trip",
    category: "Travel Tips",
    image: "/images/external/unsplash-148808506138.jpg",
  },
  {
    id: 2,
    title: "Best Family Destinations Under ₹50,000",
    category: "Family Travel",
    image: "/images/external/unsplash-160913714481.jpg",
  },
  {
    id: 3,
    title: "Honeymoon on a Budget: Top 5 Romantic Getaways in 2026",
    category: "Honeymoon Guide",
    image: "/images/external/unsplash-151428240104.jpg",
  },
]

export default function TravelStories() {
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-[#f5f5f5] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-24">

        {/* ── DESKTOP LAYOUT (untouched) ── */}
        <div className="hidden sm:flex flex-col lg:flex-row items-center gap-8 lg:gap-24 w-full">
          {/* Left: Text */}
          <div className="w-full lg:w-[430px] flex-shrink-0 self-center text-center lg:text-left">
            <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-orange-500 mb-3">
              Travel Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Go Further.<br />Know More.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
              Insider travel intel, destination guides, and trip-planning
              wisdom — straight from the team that lives and breathes
              travel every single day.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors"
            >
              Explore All Stories →
            </Link>
          </div>

          {/* Right: 3 col grid */}
          <div className="flex-1 grid grid-cols-3 gap-4">
            {articles.map((article) => (
              <Link
                key={article.id}
                href="/blog"
                className="group relative rounded-2xl overflow-hidden"
                style={{ height: "250px" }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "brightness(1.05) saturate(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 mb-1.5">
                    {article.category}
                  </p>
                  <p className="text-sm font-bold text-white leading-snug">
                    {article.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── MOBILE LAYOUT: 4 slides ── */}
        <div className="sm:hidden w-full">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4"
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
          >
            {/* Slide 1: Text content */}
            <div
              className="flex-shrink-0 w-full flex flex-col justify-center text-center py-4"
              style={{ scrollSnapAlign: "start" }}
            >
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-orange-500 mb-3">
                Travel Stories
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                Go Further. Know More.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm mx-auto">
                Insider travel intel, destination guides, and trip-planning
                wisdom — straight from the team that lives and breathes
                travel every single day.
              </p>
              <div>
                <Link
                  href="/blog"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors"
                >
                  Explore All Stories →
                </Link>
              </div>
            </div>

            {/* Slides 2, 3, 4: Articles */}
            {articles.map((article) => (
              <Link
                key={article.id}
                href="/blog"
                className="group relative rounded-2xl overflow-hidden flex-shrink-0 w-full"
                style={{ scrollSnapAlign: "start", height: "320px" }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{ filter: "brightness(1.05) saturate(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 mb-1.5">
                    {article.category}
                  </p>
                  <p className="text-sm font-bold text-white leading-snug">
                    {article.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({
                      left: sliderRef.current.offsetWidth * i,
                      behavior: "smooth",
                    })
                  }
                }}
                aria-label={`Show slide ${i + 1}`}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-orange-400 transition-colors"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}