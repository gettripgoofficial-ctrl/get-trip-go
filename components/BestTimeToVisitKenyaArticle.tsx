import Image from "next/image"
import Link from "next/link"

const monthTable = [
  { month: "January", weather: "Dry, warm", highlight: "Great visibility, birdlife building", crowds: "Moderate" },
  { month: "February", weather: "Dry, warm", highlight: "Peak dry-season wildlife viewing", crowds: "Moderate" },
  { month: "March", weather: "Rain begins", highlight: "Landscapes turn green", crowds: "Low" },
  { month: "April", weather: "Heaviest rain", highlight: "Some camps close for maintenance", crowds: "Lowest" },
  { month: "May", weather: "Rain tapering off", highlight: "Quiet, lush, best rates", crowds: "Low" },
  { month: "June", weather: "Drying out", highlight: "Migration herds start arriving", crowds: "Rising" },
  { month: "July", weather: "Dry", highlight: "River crossings typically begin", crowds: "Peak" },
  { month: "August", weather: "Dry", highlight: "Migration in full swing in the Mara", crowds: "Peak" },
  { month: "September", weather: "Dry", highlight: "Migration still concentrated in the Mara", crowds: "Peak" },
  { month: "October", weather: "Dry, transitioning", highlight: "Herds begin moving south", crowds: "High" },
  { month: "November", weather: "Short rains", highlight: "Green returns, migration departs", crowds: "Moderate" },
  { month: "December", weather: "Mostly dry", highlight: "Festive season, calving season nearby", crowds: "High" },
]

export default function BestTimeToVisitKenyaArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-1547471080-7.jpg"
          alt="Savanna landscape with Kilimanjaro in the distance"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Travel Tips
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Best Time to Visit Kenya: A Season-by-Season Guide
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Kenya runs on two overlapping calendars: the rains, and the herds that follow them.
          Picking the right window changes everything about your trip — which parks are busy,
          what you pay, and whether you catch the Masai Mara's famous river crossings or have a
          private conservancy nearly to yourself.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Best overall:</span> July–September — peak migration, but the busiest and priciest months.</li>
            <li><span className="font-semibold text-gray-900">Best value:</span> January–February — dry, warm, and noticeably quieter.</li>
            <li><span className="font-semibold text-gray-900">Lushest & cheapest:</span> April–May — lowest rates of the year, though some camps close.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Dry Season: June to October
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            This is Kenya's classic safari season. Grass is short, animals cluster around
            shrinking water sources, and visibility is excellent. From roughly July through
            October, the wildebeest and zebra herds of the Great Migration are typically
            concentrated in the Masai Mara, including the dramatic Mara River crossings — though
            exact timing shifts a little each year with rainfall further south. For the full
            month-by-month breakdown of where the herds actually are, see our{" "}
            <Link href="/kenya/the-great-migration-explained" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              Great Migration guide
            </Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Days are warm and dry; nights and early morning game drives can be genuinely cold,
            especially at higher-elevation camps, so pack a fleece. The trade-off for all this is
            peak pricing and the need to book well-known camps six to twelve months ahead.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-151642612207.jpg"
            alt="Wildebeest herds crossing open plains during the Great Migration"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Short Rains: November
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            November brings brief, usually afternoon, showers, and the landscape greens up again
            almost overnight. The migration herds begin drifting back south toward the Serengeti,
            crowds thin out fast, and rates start to dip. It's an underrated shoulder-season
            window for travelers who want good wildlife viewing without peak crowds or prices.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Warm & Mostly Dry: December to February
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            December through February is warm with only occasional showers, especially in
            December. Wildebeest calving season plays out further south in Tanzania, but Kenya's
            own parks — Amboseli, Tsavo, Nairobi National Park — are lush and quiet, and migratory
            birds from Europe are at their most abundant.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            December carries a price bump around Christmas and New Year, but January and February
            are a genuine sweet spot: dry, warm, and considerably less crowded than the
            July–September peak.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Long Rains: March to May
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            This is the heaviest rain of the year, peaking in April. Some camps in remote areas
            close for maintenance, and a few roads become difficult to pass. In exchange,
            landscapes are at their greenest, birding is superb, and rates drop to the lowest
            point of the year — a good window for budget-conscious travelers and photographers
            who don't need a guaranteed Big Five sighting on every drive.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Which Season Fits Which Traveler
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            "Best" depends heavily on what you're optimizing for, and the honest answer is
            different for different travelers. First-timers who want the classic postcard safari
            — big herds, dry golden grass, a real shot at the Mara River crossings — should aim
            for July through September and book early, accepting the higher price and larger
            number of vehicles at popular sightings.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Photographers often prefer the shoulder seasons instead. April, May, and November
            bring dramatic skies, greener backdrops, and far fewer vehicles crowding a single
            sighting, at the cost of occasional rained-out game drives. Budget-conscious
            travelers and honeymooners chasing quieter camps without giving up good wildlife
            viewing tend to land on January or February — dry, warm, and priced well below peak.
            Families with young children should factor in that some remote camps close entirely
            during April's heaviest rains, so shoulder-season trips need a bit more itinerary
            flexibility than a fixed July date.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Regional Variations Across Kenya
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kenya isn't one climate zone, and "best time to visit" shifts depending on which part
            of the country you're heading to. The Masai Mara and the Rift Valley highlands follow
            the two-rains pattern described above, but the coast around Mombasa and Diani runs on
            a different rhythm — the long rains there stretch a little later into May and June,
            while December through March is reliably hot, dry, and ideal for combining a beach
            stretch with a safari.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Northern Kenya — Samburu, Laikipia, and the conservancies around Mount Kenya — tends to
            be drier overall and less rain-dependent than the Mara, which is part of why several
            northern camps stay open and full even during Kenya's official long rains. If your
            itinerary blends a Mara safari with a coastal extension or a northern conservancy,
            it's worth checking each region's pattern separately rather than assuming one
            calendar covers the whole trip.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Month-by-Month at a Glance
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Month</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Weather</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Highlight</th>
                  <th className="py-2 font-semibold text-gray-900">Crowds</th>
                </tr>
              </thead>
              <tbody>
                {monthTable.map((row) => (
                  <tr key={row.month} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.month}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.weather}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.highlight}</td>
                    <td className="py-2 text-gray-600">{row.crowds}</td>
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
            <li>Book dry-season (July–October) camps six to twelve months in advance.</li>
            <li>Pack layers — mornings and evenings are cold even in dry season, especially at higher elevations like the Mara or Aberdares.</li>
            <li>A <Link href="/kenya/vaccinations-for-kenya-yellow-fever-and-more" className="text-yellow-600 hover:text-yellow-700 font-semibold">yellow fever certificate</Link> and Kenya eTA are required year-round regardless of season.</li>
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria prevention</Link> is recommended throughout the year, with higher mosquito activity right after rains.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What is the single best month to visit Kenya?</h3>
              <p className="text-gray-700 leading-relaxed">
                For most travelers, September offers the best balance — dry weather, the
                migration still concentrated in the Masai Mara, and slightly fewer crowds than the
                July–August peak.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is it worth visiting Kenya during the rainy season?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, if lower rates and lush scenery matter more to you than guaranteed dry game
                drives — April and May in particular offer the lowest prices of the year.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">When should I book if I want to see the migration?</h3>
              <p className="text-gray-700 leading-relaxed">
                Book six to twelve months ahead for July–September Masai Mara camps — see our{" "}
                <Link href="/kenya/the-great-migration-explained" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  full migration timing guide
                </Link>{" "}
                for a month-by-month breakdown.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/the-great-migration-explained" className="text-yellow-600 hover:text-yellow-700 font-semibold">The Great Migration Explained: When, Where and Why</Link></li>
            <li><Link href="/kenya/big-five-how-to-spot" className="text-yellow-600 hover:text-yellow-700 font-semibold">Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo</Link></li>
            <li><Link href="/kenya/is-kenya-safe-for-tourists" className="text-yellow-600 hover:text-yellow-700 font-semibold">Is Kenya Safe for Tourists? What You Should Know</Link></li>
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
