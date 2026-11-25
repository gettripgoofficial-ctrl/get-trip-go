// Magazine-style guide mosaic. Server component, no client JS.
// TODO_OWNER: add original photos (gradients are placeholders until then).
import Link from "next/link"
import type { GuideItem } from "@/data/india/guides"

// Full class strings so Tailwind can see them.
const GRADIENTS = [
  "from-amber-600 to-rose-800",
  "from-orange-700 to-purple-900",
  "from-teal-700 to-sky-900",
  "from-emerald-700 to-teal-900",
]

// Position-based layout: 0 = left tall, 1 = centre large, 2 = top right, 3 = bottom right.
const LAYOUT = [
  "md:row-span-2",
  "md:col-span-1 md:row-span-2",
  "",
  "",
]

function Card({ guide, index }: { guide: GuideItem; index: number }) {
  const large = index === 1
  return (
    <Link
      href={`/India/guides/${guide.slug}`}
      className={`group relative block min-h-[16rem] overflow-hidden md:min-h-0 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${LAYOUT[index]}`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} transition duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/india/guides/${guide.slug}.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="inline-block rounded-md bg-yellow-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-black">
          {guide.badge}
        </span>
        <h3
          className={`mt-3 font-extrabold leading-snug text-white ${large ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl"}`}
        >
          {guide.title}
        </h3>
      </div>
    </Link>
  )
}

export default function GuideMosaic({ guides }: { guides: GuideItem[] }) {
  const items = guides.slice(0, 4)
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-14 md:px-24">
      <h2 className="sr-only">Your Essential India Travel Guide</h2>
      <div className="grid gap-4 md:h-[416px] md:grid-cols-[1fr_2fr_1fr] md:grid-rows-2">
        {items.map((g, i) => (
          <Card key={g.slug} guide={g} index={i} />
        ))}
      </div>
    </section>
  )
}
