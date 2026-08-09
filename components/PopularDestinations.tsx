"use client"
import Link from "next/link"
import Image from "next/image"
import { usePrice } from "@/hooks/usePrice"

const destinations = [
  { name: "Bali", country: "Indonesia", price: 35999, image: "/images/external/unsplash-153799619447.jpg" },
  { name: "Thailand", country: "Thailand", price: 28999, image: "/images/external/unsplash-150666553119.jpg" },
  { name: "Kerala", country: "India", price: 18999, image: "/images/external/unsplash-160221605609.jpg" },
  { name: "Singapore", country: "Singapore", price: 42999, image: "/images/external/unsplash-152562529338.jpg" },
  { name: "Kashmir", country: "India", price: 22999, image: "/images/external/unsplash-161409408286.jpg" },
  { name: "Maldives", country: "Maldives", price: 65999, image: "/images/external/unsplash-157384398126.jpg" },
  { name: "Incrediable India", country: "India", price: 15999, image: "/images/external/unsplash-152449241293.jpg" },
  { name: "Dubai", country: "UAE", price: 38999, image: "/images/external/unsplash-151245397979.jpg" },
  { name: "Georgia", country: "Georgia", price: 45999, image: "/images/external/unsplash-156500857654.jpg" },
  { name: "Bhutan", country: "Bhutan", price: 32999, image: "/images/external/unsplash-1544735716-3.jpg" },
  { name: "Vietnam", country: "Vietnam", price: 29999, image: "/images/external/unsplash-152812726932.jpg" },
  { name: "Northeast India", country: "India", price: 19999, image: "/images/external/unsplash-150690592534.jpg" },
]

export default function PopularDestinations() {
  const { convert } = usePrice()

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Popular Destinations</h3>
          <Link href="/popular-destinations" className="text-blue-600 text-sm font-semibold hover:underline">
            View all ↗
          </Link>
        </div>

        {/* One set of cards. Mobile: flex row that scrolls sideways. sm+: switches to a grid. */}
        <div
          className="flex sm:grid sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {destinations.map(dest => (
            <Link
              key={dest.name}
              href={`/popular-destinations?destination=${encodeURIComponent(dest.name)}`}
              className="min-w-[calc(50%-6px)] max-w-[calc(50%-6px)] sm:min-w-0 sm:max-w-none flex-shrink-0 sm:flex-shrink rounded-2xl overflow-hidden cursor-pointer sm:hover:scale-105 transition-transform shadow-md relative group h-[180px] sm:h-[220px]"
            >
              <Image
                src={dest.image}
                alt={`${dest.name}, ${dest.country} holiday package`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover brightness-90 group-hover:brightness-100 transition-all"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                <p className="text-white font-bold text-xs sm:text-sm">{dest.name}</p>
                <p className="text-gray-300 text-[10px] sm:text-xs">{dest.country}</p>
                <p className="text-yellow-400 text-[10px] sm:text-xs font-semibold mt-0.5 sm:mt-1">
                  From {convert(dest.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}