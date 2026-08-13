import Image from "next/image"
export default function BookingThroughALocalTourOperatorVsDiyArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Booking a Kenya safari through a local tour operator or piecing it together yourself are
        both genuinely viable paths — what actually gains from a local operator, and where DIY
        can still work, mostly comes down to how much logistics complexity you want to take on
        yourself, and how much local knowledge and negotiating power you're willing to pay for.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Local operator advantage:</span> Established relationships with camps, real-time knowledge of conditions, and someone to call if something goes wrong mid-trip.</li>
          <li><span className="font-semibold text-gray-900">DIY advantage:</span> Full control over every choice, and potential savings if you're comfortable handling logistics directly.</li>
          <li><span className="font-semibold text-gray-900">Where DIY gets harder:</span> Multi-park circuits requiring internal flights, peak-season camp availability, and coordinating transfers between remote locations.</li>
          <li><span className="font-semibold text-gray-900">Best for DIY:</span> Simpler, single-region trips with flexible dates and travelers comfortable managing their own bookings.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What a Local Operator Actually Adds
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          A good local tour operator brings established relationships with camps and lodges, often
          including access to rates or availability that aren't published publicly, particularly
          during peak season when the best camps book out far in advance. They also bring
          real-time, on-the-ground knowledge — road conditions, current migration positioning,
          which camps are having a strong season for sightings — that's genuinely hard to
          replicate from outside the country.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Perhaps the most underrated benefit is having someone to call if something goes wrong
          mid-trip — a missed connection, a closed road, a camp needing to adjust plans. A local
          operator with an established network can usually solve these problems far faster than a
          traveler working alone from a foreign number and unfamiliar contacts.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where DIY Genuinely Works
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          For a simpler, single-region trip — say, a stay based entirely around one or two
          well-connected parks reachable by road — booking directly with camps and arranging your
          own transport is a realistic option, particularly for travelers comfortable managing
          logistics and communicating directly with lodges about availability and transfers.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          DIY tends to get noticeably more complicated once a trip spans multiple parks requiring
          internal flights, tight seasonal timing, or coordination across several separate
          bookings that all need to line up — the kind of itinerary where a missed connection or
          booking mismatch has real consequences, and where the coordination burden shifts heavily
          onto the traveler.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-178103986937.jpg"
          alt="Planning a Kenya safari itinerary with maps and notes"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Questions Worth Asking Before Choosing Either Route
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          If considering a local operator, it's worth asking directly how they're compensated
          (commission from camps, a flat planning fee, or both), what happens if something needs
          to change mid-trip, and whether they can provide references from past travelers. If going
          the DIY route, confirming cancellation policies, transfer logistics between camps, and
          realistic buffer time between internal flights all matter more than they might initially
          seem to.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is it cheaper to book a Kenya safari myself?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sometimes, but not always — local operators often have access to rates and
              availability that aren't publicly listed, which can offset or exceed any savings from
              booking direct.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              When does a local operator make the most sense?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              For multi-park circuits requiring internal flights, peak-season travel, or complex
              coordination between remote camps and transfers.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can I really book a safari entirely on my own?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, particularly for a simpler single-region trip with flexible dates and a
              traveler comfortable managing their own logistics directly with camps.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What should I ask a local operator before booking?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              How they're compensated, what happens if plans need to change mid-trip, and whether
              they can provide references from past travelers.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
