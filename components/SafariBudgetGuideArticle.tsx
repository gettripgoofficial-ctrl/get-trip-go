import Image from "next/image"
import Link from "next/link"

const budgetTable = [
  { tier: "Budget", perNight: "$150-300", accommodation: "Basic tented camps, shared vehicles", inclusions: "Meals, park fees, group game drives" },
  { tier: "Mid-Range", perNight: "$300-600", accommodation: "Comfortable lodges, private or small-group vehicles", inclusions: "Meals, park fees, most drinks, guided drives" },
  { tier: "Luxury", perNight: "$600-1,500+", accommodation: "Boutique camps, private guides and vehicles", inclusions: "All meals and premium drinks, exclusive activities, spa/extras" },
]

export default function SafariBudgetGuideArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600&q=80"
          alt="Luxury tented camp suite overlooking the savanna"
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
            Safari Budget Guide: Luxury vs Mid-Range vs Budget
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The price gap between a budget safari and a luxury one is enormous — sometimes ten times
          the cost per night — but the gap in actual wildlife seen is often much smaller than
          people expect. What really changes as you spend more is comfort, privacy, and service,
          not necessarily how many lions you'll see.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Budget:</span> $150-300/night — basic camps, shared group vehicles.</li>
            <li><span className="font-semibold text-gray-900">Mid-range:</span> $300-600/night — comfortable lodges, small groups or private vehicles.</li>
            <li><span className="font-semibold text-gray-900">Luxury:</span> $600-1,500+/night — boutique camps, fully private guiding.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What Actually Changes With Price
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Budget and mid-range camps typically put you in a shared safari vehicle with five to
            seven other guests, following a fixed schedule. Luxury camps offer a private vehicle
            and guide, meaning you can linger at a sighting as long as you like, change plans on
            the fly, or head out at unconventional hours. That flexibility, more than the wildlife
            itself, is usually what higher-end travelers are paying for.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Accommodation quality also scales predictably — from simple canvas tents with shared
            bathrooms at the budget end, to open-air suites with private plunge pools at the top.
            Food follows the same pattern, from set buffet-style meals to multi-course dining with
            a private chef.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
            alt="Safari camp dining area set for an evening meal"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What Doesn't Change Much
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Park entry fees are fixed regardless of where you stay, and the wildlife itself doesn't
            know or care what your camp costs. A budget camp inside a great conservancy can deliver
            better sightings than a luxury lodge in a less active area. Location and season matter
            more to sighting quality than price tier does.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Budget Tiers at a Glance
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Tier</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Per Night</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Accommodation</th>
                  <th className="py-2 font-semibold text-gray-900">Typically Includes</th>
                </tr>
              </thead>
              <tbody>
                {budgetTable.map(row => (
                  <tr key={row.tier} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.tier}</td>
                    <td className="py-2 pr-4 text-gray-600 whitespace-nowrap">{row.perNight}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.accommodation}</td>
                    <td className="py-2 text-gray-600">{row.inclusions}</td>
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
            <li>Ask exactly what's included — some quotes exclude park fees, drinks, or transfers, which can add hundreds of dollars.</li>
            <li>Mixing tiers works well: splurge on one or two nights at a standout camp, save on the rest.</li>
            <li>Shoulder season (November, or April-May) offers luxury-tier camps at mid-range prices.</li>
            <li>A private vehicle at mid-range pricing is sometimes available at smaller, owner-run camps — worth asking about directly.</li>
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
