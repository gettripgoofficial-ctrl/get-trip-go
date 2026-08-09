import Image from "next/image"
import Link from "next/link"

const comparisonTable = [
  { factor: "Vehicle limits at sightings", reserve: "Can get crowded, no strict cap", conservancy: "Strictly limited, often 5 vehicles max" },
  { factor: "Night drives", reserve: "Not permitted", conservancy: "Permitted" },
  { factor: "Walking safaris", reserve: "Not permitted", conservancy: "Permitted at most conservancies" },
  { factor: "Off-road driving", reserve: "Not permitted", conservancy: "Permitted for close sightings" },
  { factor: "Cost", reserve: "Lower park fees", conservancy: "Higher conservancy fees, often bundled into stay" },
  { factor: "Community impact", reserve: "Government-managed", conservancy: "Revenue shared directly with Maasai landowners" },
]

export default function MasaiMaraReserveVsConservanciesArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-151642612207.jpg"
          alt="Safari vehicle on a track through the Masai Mara"
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
            Masai Mara: National Reserve vs Private Conservancies
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Most first-time visitors don't realize the Masai Mara isn't a single, uniform area — it's
          a government-run national reserve surrounded by a patchwork of private conservancies,
          each leased from Maasai landowners. The rules, crowds, and experience differ significantly
          between the two, and it's one of the most important choices in planning a Mara trip.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Want night drives and walking safaris:</span> stay in a conservancy.</li>
            <li><span className="font-semibold text-gray-900">Want lower cost, don't mind more vehicles:</span> the main reserve works fine.</li>
            <li><span className="font-semibold text-gray-900">Want fewer crowds:</span> conservancies cap vehicle numbers per sighting.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What Conservancies Actually Are
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Private conservancies border the main Masai Mara National Reserve and are leased
            directly from Maasai communities, who receive ongoing revenue from tourism in exchange
            for keeping the land open for wildlife rather than converting it to farming or
            development. This funding model is a major reason conservancies can enforce stricter
            visitor limits — fewer camps and guests means a genuinely different pace of safari.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-152380500934.jpg"
            alt="Tented camp suite in a Masai Mara conservancy"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What You Can Do in a Conservancy That You Can't in the Reserve
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Night game drives, guided walking safaris, and off-road driving to get closer to a
            sighting are all typically banned in the main national reserve but permitted in most
            conservancies. This opens up entirely different experiences — spotting nocturnal
            predators, tracking on foot with a guide — that simply aren't available to reserve-only
            visitors.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Reserve vs Conservancy
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">National Reserve</th>
                  <th className="py-2 font-semibold text-gray-900">Conservancy</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map(row => (
                  <tr key={row.factor} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.factor}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.reserve}</td>
                    <td className="py-2 text-gray-600">{row.conservancy}</td>
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
            <li>Most conservancy camps include conservancy fees in the nightly rate — confirm this when booking.</li>
            <li>Staying in a conservancy doesn't block you from entering the main reserve for a day trip.</li>
            <li>Ask specifically whether night drives and walking safaris are offered — not all conservancies allow both.</li>
            <li>Conservancy stays support community-based conservation directly, which some travelers factor into their choice.</li>
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
