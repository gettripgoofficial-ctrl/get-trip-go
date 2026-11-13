import Image from "next/image"
import Link from "next/link"
import { hotelDestinations } from "@/data/hotelDestinations"

export default function HotelCityDestinations() {
  return (
    <section aria-label="Popular hotel destinations" className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Know your destination
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Explore where to stay, what to see, local food, and travel tips for each destination.
          </p>
        </div>

        <div
          className="flex gap-2.5 overflow-x-auto pb-2 sm:gap-3 sm:pb-3 lg:overflow-x-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          {hotelDestinations.map(({ slug, name, country, image }) => (
            <Link
              key={slug}
              href={`/hotels/${slug}`}
              aria-label={`Find hotels in ${name}, ${country}`}
              className="min-w-[calc(50%-0.3125rem)] shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white text-left transition-colors hover:border-[#2B3FDE]/30 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B3FDE] sm:min-w-[180px]"
            >
              <span aria-hidden="true" className="relative block h-40 bg-[#F8F9FF] sm:h-48">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 45vw, 180px"
                  quality={55}
                  className="object-cover"
                />
              </span>
              <span className="block min-w-0 p-3">
                <span className="block truncate text-sm font-semibold text-gray-900">{name}</span>
                <span className="block truncate text-xs text-gray-500">{country}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
