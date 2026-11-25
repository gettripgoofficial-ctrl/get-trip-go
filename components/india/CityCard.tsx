import Image from "next/image"
import Link from "next/link"
import type { City } from "@/data/india/types"

// Fallback gradients (all dark enough for white text). Full class strings so Tailwind can see them.
const GRADIENTS = [
  "from-orange-700 to-rose-800",
  "from-teal-700 to-sky-900",
  "from-indigo-700 to-purple-900",
  "from-emerald-700 to-teal-900",
  "from-amber-700 to-red-900",
  "from-sky-700 to-blue-900",
  "from-fuchsia-700 to-indigo-900",
  "from-lime-700 to-emerald-900",
]

// Stable pick from the slug so a card keeps the same colour on every render.
function gradientFor(slug: string): string {
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  return GRADIENTS[hash % GRADIENTS.length]
}

export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={city.link}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-2xl"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-full">
        {city.image ? (
          <Image
            src={city.image.src}
            alt={city.image.alt}
            width={city.image.width}
            height={city.image.height}
            sizes="(min-width: 768px) 22vw, 44vw"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div aria-hidden="true" className={`h-full w-full bg-gradient-to-br ${gradientFor(city.slug)}`} />
        )}
      </div>
      <h3 className="mt-3 text-center text-lg font-extrabold leading-tight text-[#1a2b49]">{city.name}</h3>
    </Link>
  )
}
