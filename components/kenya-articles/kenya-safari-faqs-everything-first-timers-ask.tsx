import Image from "next/image"
export default function KenyaSafariFaqsEverythingFirstTimersAskArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        A catch-all roundup for whatever isn't covered elsewhere on this page — the smaller
        questions first-time safari travelers tend to ask once the bigger planning decisions
        (where to stay, when to go, what it costs) are already sorted out.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Wake-up calls:</span> Game drives typically start before sunrise, so early mornings are the norm, not the exception.</li>
          <li><span className="font-semibold text-gray-900">Vehicle setup:</span> Most safari vehicles are open-sided 4x4s with pop-up roofs for unobstructed viewing and photography.</li>
          <li><span className="font-semibold text-gray-900">Dress code:</span> Casual and practical — neutral colors are common, but there's no strict formal dress code at camps.</li>
          <li><span className="font-semibold text-gray-900">Alone time:</span> Solo travelers, couples, and families are all well accommodated, with private vehicle options available at most camps.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What a Typical Safari Day Looks Like
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most days follow a similar rhythm: an early wake-up call before sunrise, a morning game
          drive during the coolest and most active wildlife hours, a return to camp for brunch and
          a rest period through the heat of midday, then a second game drive in the late afternoon
          heading into sunset. Meals and downtime at camp fill the gaps, and evenings are often
          spent around a fire swapping stories about the day's sightings.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          This structure is fairly consistent across most camps and parks, though the exact timing
          shifts slightly by season and location — guides adjust the schedule based on when
          wildlife tends to be most active locally.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What the Vehicles and Drives Are Actually Like
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Safari vehicles are typically open-sided 4x4s with a pop-up roof, letting guests stand
          and photograph without an obstructed view through glass. Guides double as expert
          spotters and drivers, often communicating with other vehicles by radio to share
          sightings across a wider area than a single vehicle could cover alone.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Drives can involve some genuinely bumpy terrain, particularly off main tracks, so
          comfort with an active, sometimes physical ride is worth expecting rather than picturing
          a smooth, paved-road experience throughout.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-174185082115.jpg"
          alt="Open-sided safari vehicle on a game drive in Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Traveling Solo, as a Couple, or With Family
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kenya's safari industry accommodates a wide range of traveler types well. Solo travelers
          are common on both group departures and private itineraries, and most reputable
          operators handle solo bookings without excessive single-supplement pricing on their
          scheduled group trips. Couples often gravitate toward smaller, more intimate camps, while
          families traveling with children can find lodges specifically set up with family suites,
          kid-friendly activities, and age minimums that vary by camp — worth checking directly if
          traveling with younger children.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What to Expect Beyond the Wildlife
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          A safari isn't purely about the animals — the quality of camp hospitality, the guide's
          knowledge and storytelling, and the pace of the itinerary all shape how a trip actually
          feels day to day. First-time travelers sometimes underestimate how much downtime exists
          between drives, which for many is part of the appeal — a genuine chance to slow down
          rather than pack every hour with activity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What does a typical day on safari look like?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              An early morning game drive before sunrise, a midday rest at camp, and a second game
              drive in the late afternoon heading into sunset, with meals and downtime filling the
              gaps.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Kenya a good destination for solo travelers?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — solo travelers are common on both scheduled group departures and private
              itineraries, and most reputable operators handle solo bookings well.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are safari vehicles comfortable for long drives?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Most are open-sided 4x4s with pop-up roofs for good visibility, though drives can be
              bumpy on rougher terrain, so an active, physical ride is worth expecting.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Kenya safe and suitable for families with children?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Many lodges are well set up for families with dedicated suites and activities, though
              age minimums vary by camp, so it's worth confirming directly when traveling with
              younger children.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
