import Image from "next/image"
import PriceTag from "@/components/PriceTag"
import type { Package } from "@/data/india/types"

// Fallback gradients until an original photo exists. Full class strings so Tailwind can see them.
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

// Stable pick from the title so a card keeps the same colour on every render.
function gradientFor(key: string): string {
  let hash = 0
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0
  return GRADIENTS[hash % GRADIENTS.length]
}

// TODO_OWNER is shown wherever a real value has not been supplied yet (0 = placeholder).
function duration(days: number, nights: number): string {
  if (!days) return "TODO_OWNER"
  return nights ? `${days} days / ${nights} nights` : `${days} days`
}

export default function PackageCard({ pkg }: { pkg: Package }) {
  const hasRating = typeof pkg.rating === "number"
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {pkg.image ? (
          <Image
            src={pkg.image.src}
            alt={pkg.image.alt}
            width={pkg.image.width}
            height={pkg.image.height}
            sizes="(min-width: 1024px) 24vw, (min-width: 768px) 31vw, (min-width: 640px) 44vw, 72vw"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div aria-hidden="true" className={`h-full w-full bg-gradient-to-br ${gradientFor(pkg.title)}`} />
        )}
        {pkg.badges.length > 0 ? (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#1a2b49] shadow">
            {pkg.badges[0]}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{pkg.destination}</p>
        <h3 className="mt-1 text-base font-extrabold leading-snug text-[#1a2b49]">{pkg.title}</h3>
        <p className="mt-1 text-sm text-gray-700">{duration(pkg.days, pkg.nights)}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          {hasRating ? (
            <p className="text-sm text-gray-700">
              <span aria-hidden="true" className="text-orange-500">
                ★
              </span>{" "}
              <span className="font-bold text-[#1a2b49]">{pkg.rating}</span>
              {pkg.reviewCount ? ` (${pkg.reviewCount.toLocaleString("en-US")})` : ""}
            </p>
          ) : (
            <span />
          )}
          <p className="text-sm text-gray-600">
            From{" "}
            {pkg.price ? (
              <>
                {pkg.oldPrice ? (
                  <span className="mr-1 text-gray-500 line-through">
                    <PriceTag amountInr={pkg.oldPrice} />
                  </span>
                ) : null}
                <span className="text-base font-extrabold text-[#1a2b49]">
                  <PriceTag amountInr={pkg.price} />
                </span>
              </>
            ) : (
              <span className="font-extrabold text-[#1a2b49]">TODO_OWNER</span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
