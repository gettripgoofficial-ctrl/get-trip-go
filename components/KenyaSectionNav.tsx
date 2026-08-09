"use client"
import Image from "next/image"

const cards = [
  { id: "travel-wildlife", label: "Travel Tips", image: "/images/external/unsplash-143649186533.jpg" },
  { id: "safari-routes", label: "Itinerary", image: "/images/external/unsplash-151642612207.jpg" },
  { id: "explore", label: "Where to Stay", image: "/images/external/unsplash-152380500934.jpg" },
  { id: "explore", label: "Visa", image: "/images/external/unsplash-143649186533.jpg" },
  { id: "travel-wildlife", label: "Safari & Wildlife", image: "/images/external/unsplash-153456711024.jpg" },
  { id: "who-should-go-trending", label: "Must Know Before Travel", image: "/images/external/unsplash-158451597995.jpg" },
  { id: "explore", label: "Parks & Reserves", image: "/images/external/unsplash-151693402474.jpg" },
]

export default function KenyaSectionNav() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="md:pt-[64px]">
      <div className="sticky top-14 md:top-[64px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div
          className="max-w-7xl mx-auto px-4 py-2.5 flex gap-3 justify-between overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {cards.map(card => (
            <button
              key={card.label}
              onClick={() => handleClick(card.id)}
              className="flex-shrink-0 flex items-center gap-2 bg-gray-50 hover:bg-yellow-50 border border-gray-100 rounded-full pl-1.5 pr-4 py-2 transition-colors group"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">
                {card.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
