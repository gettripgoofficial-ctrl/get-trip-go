"use client"
import Image from "next/image"

const cards = [
  { id: "travel-wildlife", label: "Travel Tips", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&q=80" },
  { id: "safari-routes", label: "Itinerary", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200&q=80" },
  { id: "explore", label: "Where to Stay", image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=200&q=80" },
  { id: "explore", label: "Visa", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&q=80" },
  { id: "travel-wildlife", label: "Safari & Wildlife", image: "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?w=200&q=80" },
  { id: "who-should-go-trending", label: "Must Know Before Travel", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=200&q=80" },
  { id: "explore", label: "Parks & Reserves", image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=200&q=80" },
]

export default function KenyaSectionNav() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="pt-[52px] sm:pt-[64px]">
      <div className="sticky top-[52px] sm:top-[64px] z-40 bg-white border-b border-gray-100 shadow-sm">
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
