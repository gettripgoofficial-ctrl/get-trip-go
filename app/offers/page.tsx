"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { offers } from "@/data/offers"
import BottomNav from "@/components/BottomNav"
import { buildItemListSchema } from "@/lib/seo/tripSchema"

export default function OffersPage() {
  const itemListJsonLd = buildItemListSchema({
    name: "Special Offers & Deals — Get Trip Go",
    url: "https://gettripgo.com/offers",
    items: offers.map((o) => ({
      name: o.title,
      url: `https://gettripgo.com/offers/${o.slug}`,
    })),
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-24 lg:pb-10">
      <Script
        id="offers-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <Image
          src="/images/external/unsplash-143649186533.jpg"
          alt="Special Offers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <Link
          href="/"
          className="absolute top-16 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full"
        >
        </Link>
        <div className="absolute bottom-0 left-0 p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Special Offers & Deals</h1>
          <p className="text-white/80 text-sm mt-1">Exclusive discounts on flights, holidays, cruises & more</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <Link
              key={offer.slug}
              href={`/offers/${offer.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 brightness-110 saturate-150"
                />
                <span
                  className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: offer.color }}
                >
                  {offer.tag}
                </span>
                <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Valid till {offer.validTill}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1">{offer.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{offer.desc}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {offer.code}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-xl border-2 transition-colors"
                    style={{ borderColor: offer.color, color: offer.color }}
                  >
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}