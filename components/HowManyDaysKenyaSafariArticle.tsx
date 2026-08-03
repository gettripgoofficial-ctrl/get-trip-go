import Image from "next/image"
import Link from "next/link"

const itineraryTable = [
  { days: "4-5 days", coverage: "One park (e.g. Masai Mara only)", bestFor: "Short breaks, first safari taste" },
  { days: "7-8 days", coverage: "Two parks (e.g. Mara + Amboseli)", bestFor: "Balanced pace, varied landscapes" },
  { days: "10-12 days", coverage: "Three to four parks", bestFor: "Comprehensive Big Five coverage" },
  { days: "13+ days", coverage: "Full circuit plus a beach extension", bestFor: "Once-in-a-lifetime trips" },
]

export default function HowManyDaysKenyaSafariArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
          alt="Safari vehicle on a dirt track through open grassland"
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
            How Many Days Do You Need for a Kenya Safari
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          There's no single right answer, but there is a wrong one: trying to see too much in too
          little time. Kenya rewards travelers who slow down and give each park at least two full
          days, rather than those racing between five reserves in a week. The length that suits
          you depends mostly on how many regions you want to cover and how much driving or flying
          you're willing to do.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Minimum worthwhile trip:</span> 5 days — enough for one park properly.</li>
            <li><span className="font-semibold text-gray-900">Sweet spot:</span> 8-10 days — covers two to three parks without feeling rushed.</li>
            <li><span className="font-semibold text-gray-900">Comprehensive trip:</span> 12+ days — the full circuit, plus time to unwind.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Two Nights Per Park Is the Real Minimum
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            A single night anywhere means one evening game drive and one morning drive, with your
            arrival and departure eating into both. Two nights gives you a full day in between —
            typically two proper game drives — which meaningfully increases your odds of good
            sightings, especially for less predictable animals like leopards or rhinos.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Guides and camp managers consistently say the same thing: fewer parks with more nights
            in each beats a long list of one-night stops. Wildlife behavior varies day to day, and
            a second or third game drive in the same area often produces the sighting the first one
            missed.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
            alt="Elephants walking across the savanna with Kilimanjaro in the background"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Matching Trip Length to Your Goals
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            A five-day trip built entirely around the Masai Mara delivers a genuinely complete
            safari experience — game drives, sundowners, maybe a hot air balloon ride — without the
            added transit of a multi-park circuit. Add Amboseli or Lake Nakuru and you're looking
            at eight days, which is enough time to notice how different each park actually feels,
            from open grassland to soda lakes and volcanic backdrops.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Trips beyond twelve days usually start combining a full safari circuit with something
            else entirely — a few days on the coast at Diani, a stop in Zanzibar, or a crossing into
            Tanzania to continue the migration story into the Serengeti.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Length vs. Coverage
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Trip Length</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Typical Coverage</th>
                  <th className="py-2 font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {itineraryTable.map(row => (
                  <tr key={row.days} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.days}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.coverage}</td>
                    <td className="py-2 text-gray-600">{row.bestFor}</td>
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
            <li>Build in one buffer day if your trip involves multiple flight connections — delays happen.</li>
            <li>Two to three nights per park is a better use of time than one night in five different places.</li>
            <li>Factor in at least a day of rest or low-key activity if you're combining safari with a beach extension.</li>
            <li>Longer trips are cheaper per night on average, since flights and entry logistics get spread across more days.</li>
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
