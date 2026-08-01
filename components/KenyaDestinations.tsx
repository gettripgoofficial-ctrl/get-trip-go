"use client"
import Image from "next/image"
import { kenyaDestinations } from "@/data/kenyaData"

export default function KenyaDestinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-yellow-600 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">Where To Go</p>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-8">Destinations in Kenya</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {kenyaDestinations.map(dest => (
          <div
            key={dest.id}
            className="relative rounded-2xl overflow-hidden shadow-md group h-[260px] cursor-pointer"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover brightness-90 group-hover:brightness-100 transition-all"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-yellow-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-1">
                {dest.region}
              </p>
              <p className="text-white font-bold text-base sm:text-lg">{dest.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
