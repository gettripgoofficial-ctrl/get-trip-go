import Image from "next/image"
import Link from "next/link"

const footwearTable = [
  { activity: "Game drives", best: "Closed-toe sneakers or light hiking shoes", why: "Comfortable for hours seated, easy to slip on/off" },
  { activity: "Walking safaris", best: "Sturdy hiking boots with ankle support", why: "Uneven terrain, protection from thorns and rocks" },
  { activity: "Camp downtime", best: "Sandals or slip-ons", why: "Breathable, quick to wear around the lodge" },
  { activity: "Evening/dinner", best: "Closed shoes, neutral color", why: "Mosquito protection after dusk" },
]

export default function SafariFootwearArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1600&q=80"
          alt="Hiking boots and safari gear packed for a trip"
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
            Safari Footwear: What Actually Works
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 4 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Footwear is one of the most overpacked categories on safari. Most days involve sitting in
          a vehicle rather than hiking, so heavy-duty boots aren't always necessary — but the right
          pair still matters more than people expect, especially if walking safaris are part of the
          plan.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Game drives only:</span> comfortable closed-toe sneakers are enough.</li>
            <li><span className="font-semibold text-gray-900">Walking safaris included:</span> bring real hiking boots with ankle support.</li>
            <li><span className="font-semibold text-gray-900">Bring both:</span> one closed pair, one pair of sandals for camp.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Most Safaris Don't Need Heavy Boots
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            A standard game-drive safari involves sitting in a vehicle for most of the day, with
            brief walks around camp or during rest stops. For this, breathable, comfortable
            closed-toe shoes — sneakers or light trail shoes — are more than sufficient, and far
            more comfortable than stiff boots for hours in a seated position.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=1200&q=80"
            alt="Walking safari group on foot through the bush"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            When You Do Need Real Boots
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            If your itinerary includes a walking safari — increasingly popular at parks like Hell's
            Gate or conservancies that allow guided walks — sturdy footwear with ankle support
            becomes genuinely important. Terrain can be uneven, with loose rocks, thorny scrub, and
            occasional stream crossings. A broken-in pair of mid-height hiking boots is the right
            call here, not brand-new ones straight out of the box.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Footwear by Activity
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Activity</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Best Choice</th>
                  <th className="py-2 font-semibold text-gray-900">Why</th>
                </tr>
              </thead>
              <tbody>
                {footwearTable.map(row => (
                  <tr key={row.activity} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.activity}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.best}</td>
                    <td className="py-2 text-gray-600">{row.why}</td>
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
            <li>Break in any new boots well before your trip — camp is the wrong place to discover blisters.</li>
            <li>Stick to neutral colors; bright shoes stand out against the dust and grass.</li>
            <li>Pack one pair of easy slip-on sandals for lodge downtime and evenings by the fire.</li>
            <li>Check with your specific camp whether walking safaris are offered before deciding on boots.</li>
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
