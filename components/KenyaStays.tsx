"use client"
import Image from "next/image"
import { kenyaStays } from "@/data/kenyaData"

export default function KenyaStays() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-yellow-600 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">Where To Stay</p>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">Where you can stay in Kenya</h2>
      <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl">
        A pick of the country&apos;s most distinctive camps, lodges and houses.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {kenyaStays.map((stay, i) => (
          <div key={stay.id} className="cursor-pointer group">
            <div className="relative rounded-xl overflow-hidden h-[180px] mb-3">
              <Image
                src={stay.image}
                alt={stay.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute top-3 left-3 text-white font-bold text-lg drop-shadow">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-yellow-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-1">
              {stay.region}
            </p>
            <p className="text-gray-800 font-bold text-base sm:text-lg mb-1">{stay.name}</p>
            <p className="text-gray-500 text-xs sm:text-sm leading-snug">{stay.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
