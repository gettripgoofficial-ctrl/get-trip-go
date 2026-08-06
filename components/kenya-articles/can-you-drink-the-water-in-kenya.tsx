import Image from "next/image"
export default function CanYouDrinkTheWaterInKenyaArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Short answer: no, don't drink tap water in Kenya, even at nicer lodges. Bottled or
        filtered water is the standard and easy default across the country, and most camps and
        hotels build it into the stay without you needing to think much about it.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Tap water:</span> Not recommended for drinking anywhere in Kenya, including in Nairobi and at upscale lodges.</li>
          <li><span className="font-semibold text-gray-900">What lodges provide:</span> Most safari camps supply filtered or bottled water in rooms and refill stations, often included in the rate.</li>
          <li><span className="font-semibold text-gray-900">Ice and salads:</span> At reputable lodges, ice and salad greens are typically made with filtered water, but it's worth confirming at very basic guesthouses.</li>
          <li><span className="font-semibold text-gray-900">Brushing teeth:</span> Bottled or filtered water is the safer choice, especially outside major hotels.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Tap Water Isn't Recommended
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Municipal water treatment and pipe infrastructure vary significantly across Kenya, and
          even in areas with reasonably treated water, aging or inconsistent plumbing can
          reintroduce contaminants before water reaches the tap. The safe, low-effort approach
          most travelers and long-term expats follow is simply avoiding tap water for drinking
          entirely, regardless of which city or region you're in.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          This isn't a Kenya-specific quirk — it's the standard travel advice for most countries
          where municipal water isn't treated to the same consistent standard as, say, most of
          Western Europe or North America, and it applies whether you're staying in a five-star
          Nairobi hotel or a budget guesthouse.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What Safari Camps and Lodges Actually Provide
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most established safari camps and lodges supply bottled or filtered water in guest
          rooms as a standard part of the stay, often refilled daily, and many have moved toward
          refillable bottles and central filtered water stations to cut down on plastic waste —
          worth bringing your own reusable bottle to take advantage of. Filtered water is
          typically what's used behind the scenes for ice, cooking, and washing produce at
          reputable camps too, so meals and drinks generally don't require separate caution.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          At very basic guesthouses or street food stalls outside of the established safari
          circuit, it's reasonable to be a bit more cautious about ice and raw produce
          specifically, simply because water sourcing and handling standards are less consistent
          than at camps built around hosting international travelers.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=80"
          alt="Bottled water and safari gear packed for a Kenya trip"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Practical Tips for Staying Hydrated Safely
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Carrying a reusable water bottle and refilling it from a camp's filtered station is the
          easiest way to stay hydrated without generating plastic waste, and most camps are set up
          for exactly that. A portable water purifier or purification tablets are a reasonable
          backup for longer overland trips or visits to areas without reliable bottled water
          access, though for a standard lodge-based safari itinerary they're rarely necessary.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          On long game drives, most vehicles carry a cooler with bottled water for guests, so
          dehydration on safari itself is rarely an issue as long as you're drinking regularly
          through a hot day out in the vehicle.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is tap water safe anywhere in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No — the standard advice is to avoid tap water for drinking throughout the country,
              including in Nairobi and at upscale hotels, and to rely on bottled or filtered water
              instead.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do safari lodges provide drinking water?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — most established camps supply bottled or filtered water in rooms, often
              included in the rate, and increasingly use refillable bottles and filtered stations
              to reduce plastic waste.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is ice safe to have in drinks in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At reputable lodges and hotels, yes — ice is typically made with filtered water, but
              it's worth being more cautious at very basic guesthouses or street vendors.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Should I bring a water purifier to Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Not necessary for a standard lodge-based safari, since bottled and filtered water is
              widely available, but it can be a useful backup for longer overland or remote trips.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
