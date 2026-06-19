"use client"
import Link from "next/link"
import Image from "next/image"
import { usePrice } from "@/hooks/usePrice"

const destinations = [
  { name: "Bali", country: "Indonesia", price: 35999, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=90" },
  { name: "Thailand", country: "Thailand", price: 28999, image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=90" },
  { name: "Kerala", country: "India", price: 18999, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=90" },
  { name: "Singapore", country: "Singapore", price: 42999, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=90" },
  { name: "Kashmir", country: "India", price: 22999, image: "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=800&q=90" },
  { name: "Maldives", country: "Maldives", price: 65999, image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=90" },
  { name: "Incrediable India", country: "India", price: 15999, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=90" },
  { name: "Dubai", country: "UAE", price: 38999, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=90" },
  { name: "Georgia", country: "Georgia", price: 45999, image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=90" },
  { name: "Bhutan", country: "Bhutan", price: 32999, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=90" },
  { name: "Vietnam", country: "Vietnam", price: 29999, image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=90" },
  { name: "Northeast India", country: "India", price: 19999, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90" },
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

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {destinations.map(dest => (
            <Link
              key={dest.name}
              href={`/popular-destinations?destination=${encodeURIComponent(dest.name)}`}
              className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md relative group"
              style={{ height: "220px" }}
            >
              <Image src={dest.image} alt={dest.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw" className="object-cover brightness-90 group-hover:brightness-100 transition-all" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-bold text-sm">{dest.name}</p>
                <p className="text-gray-300 text-xs">{dest.country}</p>
                <p className="text-yellow-400 text-xs font-semibold mt-1">From {convert(dest.price)}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {destinations.map(dest => (
            <Link
              key={dest.name}
              href={`/popular-destinations?destination=${encodeURIComponent(dest.name)}`}
              className="min-w-[calc(50%-6px)] max-w-[calc(50%-6px)] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer shadow-md relative group"
              style={{ height: "180px" }}
            >
              <Image src={dest.image} alt={dest.name} fill sizes="50vw" className="object-cover brightness-90" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-white font-bold text-xs">{dest.name}</p>
                <p className="text-gray-300 text-[10px]">{dest.country}</p>
                <p className="text-yellow-400 text-[10px] font-semibold mt-0.5">From {convert(dest.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
