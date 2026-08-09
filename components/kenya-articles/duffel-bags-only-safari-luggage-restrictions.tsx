import Link from "next/link"

export default function DuffelBagsOnlySafariLuggageRestrictionsArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        If your itinerary includes flying between camps on a light aircraft — common on any
        multi-park Kenya safari — your hard-shell suitcase almost certainly won't fit. Most
        light-aircraft operators require soft duffel bags only, with a strict weight cap most
        travelers underestimate.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Bag type:</span> Soft-sided duffel only — no hard-shell or wheeled suitcases.</li>
          <li><span className="font-semibold text-gray-900">Weight limit:</span> Typically 15kg (33 lbs) total, including hand luggage.</li>
          <li><span className="font-semibold text-gray-900">Why:</span> Small aircraft have limited, oddly-shaped cargo holds that rigid luggage doesn't fit.</li>
          <li><span className="font-semibold text-gray-900">Overweight bags:</span> Usually charged per kilo, or left behind for a later flight.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Light Aircraft Have This Rule
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The small bush planes used to hop between Kenya's safari regions — connecting somewhere
          like Nairobi to the Masai Mara, or the Mara to Samburu — have narrow, low cargo holds
          designed around weight and shape limits that a normal airliner never has to worry about.
          A rigid suitcase, even a small one, often physically won't fit through the cargo door or
          squeeze in alongside other passengers' bags, while a soft duffel can be compressed and
          angled into whatever space is left. This isn't a preference airlines have — it's a hard
          physical constraint of the aircraft itself.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          How Strict Is the Weight Limit, Really?
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most operators cap total luggage at 15kg (33 lbs) per person, and critically, this
          usually includes your camera bag, daypack, or any other hand luggage — not just your
          main duffel. Small aircraft have precise weight-and-balance requirements for safe
          takeoff, so this limit is enforced far more consistently than the "soft" baggage limits
          on most commercial airlines. Arriving significantly overweight can mean paying a
          per-kilo excess fee on the spot, or in some cases having a bag held back for a later
          flight — a genuine inconvenience if it happens on your way into a remote camp.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <img
          src="/images/external/unsplash-175855836448.jpg"
          alt="Small aircraft on a remote airstrip in Kenya"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Choosing the Right Duffel
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Look for a duffel that's genuinely soft and collapsible, without a rigid internal frame
          — some "soft-sided" bags on the market still have enough structure to cause the same
          fitting problems as a hard case. A duffel in the 60–70 liter range is usually enough for
          a week to ten days of the neutral-colored, laundry-supplemented packing approach covered
          in our full{" "}
          <Link href="/kenya/packing-list-for-a-10-day-kenya-safari" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            10-day packing list guide
          </Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What to Do With Extra Luggage
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          If your trip starts or ends with international flights carrying more luggage than the
          light-aircraft limit allows, most tour operators can arrange storage in Nairobi for the
          duration of your safari — a hard-shell suitcase with clothes for a beach extension, for
          example, doesn't need to travel with you on the internal flights. Ask your operator
          about this when booking rather than discovering the limit for the first time at the
          airstrip.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can I bring a regular wheeled suitcase on safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Only if your entire itinerary stays on road transfers — if any leg involves a light
              aircraft, you'll need a soft duffel instead.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What happens if my bag is overweight?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You'll typically be charged a per-kilo excess fee on the spot, or in some cases the
              excess weight is held back for a later flight.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can I store extra luggage somewhere during my safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — most tour operators can arrange luggage storage in Nairobi for bags that don't
              need to travel with you on internal light-aircraft flights.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
