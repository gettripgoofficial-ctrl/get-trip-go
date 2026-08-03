import Image from "next/image"
import Link from "next/link"

const comparisonTable = [
  { factor: "Speed", air: "40-60 min between most parks", road: "4-8 hours depending on route" },
  { factor: "Cost", air: "Higher per transfer, from ~$150-300", road: "Lower per transfer, from ~$50-100" },
  { factor: "Views", air: "Aerial views of the Rift Valley and savanna", road: "Ground-level scenery, village life, local markets" },
  { factor: "Comfort", air: "Smooth, brief, minimal fatigue", road: "Can be bumpy on unpaved sections" },
  { factor: "Baggage", air: "Strict 15kg soft-bag limit", road: "More flexible on luggage" },
  { factor: "Best for", air: "Multi-park circuits, time-limited trips", road: "Single-region trips, budget travel" },
]

export default function GettingAroundKenyaArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1600&q=80"
          alt="Small aircraft on a dirt airstrip in the Kenyan savanna"
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
            Getting Around: Light Aircraft vs Road Safaris
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Kenya's parks are spread across a country roughly the size of France, and how you move
          between them shapes your trip almost as much as where you stay. The choice usually comes
          down to two options — light aircraft or road transfers — and most well-planned
          itineraries end up mixing both rather than picking one exclusively.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Multi-park trips:</span> fly — it saves whole days of driving on a tight schedule.</li>
            <li><span className="font-semibold text-gray-900">Single-region trips:</span> drive — cheaper, and you see far more along the way.</li>
            <li><span className="font-semibold text-gray-900">Typical mix:</span> fly the long legs, road-transfer the short ones within a region.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Light Aircraft: Fast, Not Cheap
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Scheduled light aircraft services connect nearly every major park and reserve, usually
            departing from small airstrips right inside or beside the conservancy. A flight between
            Nairobi and the Masai Mara takes about 45 minutes, versus a 5-6 hour drive on the same
            route. For travelers covering three or four parks in ten days, flying is often the only
            way to make the itinerary work without losing entire days to transit.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The trade-off is price and baggage. Seats are limited, luggage is capped at roughly
            15kg in a soft duffel, and costs add up quickly across multiple legs — often $150 to
            $300 per person, per flight.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
            alt="Safari vehicle driving on a dirt road through the savanna"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Road Transfers: Slower, Cheaper, More Scenic
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Driving costs less and shows you a side of Kenya that flying skips entirely — the Rift
            Valley escarpment, small towns, roadside markets, and the gradual change in landscape
            between regions. For trips focused on one area, like the Mara and Rift Valley lakes
            together, road transfers make complete sense and can even be built into the safari
            itself as a game-viewing drive.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The downside is time and road conditions. Some routes involve several hours on unpaved
            or heavily potholed roads, which can be tiring, especially with young children or
            travelers prone to motion sickness.
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
                  <th className="py-2 pr-4 font-semibold text-gray-900">Light Aircraft</th>
                  <th className="py-2 font-semibold text-gray-900">Road</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map(row => (
                  <tr key={row.factor} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.factor}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.air}</td>
                    <td className="py-2 text-gray-600">{row.road}</td>
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
            <li>Confirm baggage weight limits with your operator before packing for a flying itinerary.</li>
            <li>Book light aircraft seats early during peak season (July-October) — flights fill up fast.</li>
            <li>For long road transfers, ask about rest stops and factor in extra time for wildlife sightings along the way.</li>
            <li>A mixed itinerary — flying the long legs, driving the short ones — is usually the most efficient option.</li>
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
