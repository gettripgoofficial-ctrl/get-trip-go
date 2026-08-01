"use client"
import Image from "next/image"
import { kenyaWildlife } from "@/data/kenyaData"

export default function KenyaWildlife() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-yellow-600 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">Wildlife</p>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-8">What you may see</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {kenyaWildlife.map(animal => (
            <div key={animal.id} className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer group">
              <div className="relative h-[140px] sm:h-[180px]">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base p-3">{animal.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
