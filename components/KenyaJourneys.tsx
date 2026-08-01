"use client"
import Image from "next/image"
import { kenyaJourneys } from "@/data/kenyaData"

export default function KenyaJourneys() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-yellow-600 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">Where To Go</p>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-8">Journeys through Kenya</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {kenyaJourneys.map(journey => (
            <div
              key={journey.id}
              className="relative rounded-2xl overflow-hidden shadow-md group h-[260px] cursor-pointer"
            >
              <Image
                src={journey.image}
                alt={journey.title}
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
                  {journey.days} Days · {journey.nights} Nights
                </p>
                <p className="text-white font-bold text-base sm:text-lg">{journey.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
