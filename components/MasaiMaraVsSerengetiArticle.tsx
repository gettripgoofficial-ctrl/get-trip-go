import Image from "next/image"
import Link from "next/link"

const comparisonTable = [
  { factor: "Country", mara: "Kenya", serengeti: "Tanzania" },
  { factor: "Size", mara: "Smaller (~1,500 km²)", serengeti: "Much larger (~14,750 km²)" },
  { factor: "Migration timing", mara: "River crossings, roughly July-October", serengeti: "Calving season, roughly January-March" },
  { factor: "Crowds", mara: "Busier, especially peak season", serengeti: "More space to spread out" },
  { factor: "Access", mara: "Closer to Nairobi, easy short flights", serengeti: "Often paired with a longer Tanzania itinerary" },
]

export default function MasaiMaraVsSerengetiArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-151693402474.jpg"
          alt="Open savanna landscape typical of the Mara-Serengeti ecosystem"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Parks &amp; Reserves
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Masai Mara vs Serengeti: What's the Difference
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The Masai Mara and the Serengeti aren't really two separate ecosystems — they're one
          continuous landscape split by a national border, with the same migrating herds crossing
          back and forth depending on the season. Which one you visit often comes down to timing,
          budget, and how much of a trip you're planning, rather than one being simply "better."
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Want river crossings:</span> the Masai Mara, July-October.</li>
            <li><span className="font-semibold text-gray-900">Want calving season and space:</span> the Serengeti, January-March.</li>
            <li><span className="font-semibold text-gray-900">Shorter, simpler trip:</span> the Mara — closer to Nairobi, easy logistics.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            One Ecosystem, Two Countries
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The Great Migration doesn't recognize borders. Wildebeest and zebra herds move in a
            roughly circular pattern through the year, following the rains — spending part of the
            year in Tanzania's vast Serengeti plains, and part crossing into Kenya's smaller,
            denser Masai Mara. The dramatic river crossings most people picture happen almost
            entirely within the Mara, typically from July through October.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-151642612207.jpg"
            alt="Wildebeest herds during the Great Migration"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Size, Crowds, and Access
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The Serengeti is roughly ten times the size of the Mara, which means more room to
            spread out and fewer vehicles at any single sighting, even in peak season. The trade-
            off is logistics: the Mara is a short flight or drive from Nairobi, making it easy to
            combine with a shorter overall trip, while the Serengeti is usually paired with a
            longer, dedicated Tanzania itinerary.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Masai Mara</th>
                  <th className="py-2 font-semibold text-gray-900">Serengeti</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map(row => (
                  <tr key={row.factor} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.factor}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.mara}</td>
                    <td className="py-2 text-gray-600">{row.serengeti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Combining both in one trip is possible and popular — check border crossing logistics with your operator.</li>
            <li>For river crossings specifically, the Mara side is the more reliable bet.</li>
            <li>The Serengeti's Southern plains suit the January-March calving season best.</li>
            <li>Neither park guarantees a crossing on any given day — migration timing shifts yearly with rainfall.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <Link href="/kenya" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors">
            Back to the Kenya travel guide
          </Link>
        </div>
      </div>
    </article>
  )
}
