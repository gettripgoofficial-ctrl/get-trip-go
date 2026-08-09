import Image from "next/image"
export default function KenyaTimeZoneAndJetLagTipsArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Kenya sits at UTC+3 year-round, with no daylight saving time to complicate the math. For
        most travelers coming from Europe or North America, that makes the time difference
        simpler to plan around than a lot of long-haul destinations — but the flight length
        itself still means jet lag is worth planning for, especially with early morning game
        drives on the itinerary.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Time zone:</span> East Africa Time (UTC+3), used year-round with no daylight saving adjustments.</li>
          <li><span className="font-semibold text-gray-900">From Europe:</span> Typically only a 1–2 hour difference, making jet lag minimal for most European travelers.</li>
          <li><span className="font-semibold text-gray-900">From North America:</span> A larger time difference (roughly 7–10 hours depending on the city), so adjustment takes more deliberate effort.</li>
          <li><span className="font-semibold text-gray-900">Why it matters on safari:</span> Game drives often start before sunrise, so being reasonably adjusted by day one makes a real difference to the experience.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Kenya's Time Zone, Simplified
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kenya runs on East Africa Time, UTC+3, all year — there's no daylight saving time to
          track, so the time difference from home stays constant no matter when you travel.
          That's a genuine convenience compared to destinations where the gap shifts by an hour
          depending on the season, since you can calculate the difference once before your trip
          and not worry about it changing partway through.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          For travelers coming from the UK and much of Western Europe, the difference is
          typically just one to two hours, which makes jet lag largely a non-issue. From the US
          East Coast, the gap is roughly seven hours; from the West Coast, closer to ten — enough
          to notice, particularly combined with a long-haul overnight flight.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Jet Lag Matters More on Safari Than a Typical Trip
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most safari game drives start early — often before sunrise — since that's when animals
          are most active before the heat of the day sets in. Arriving still badly jet-lagged
          means those first crucial early mornings can feel like a genuine struggle rather than
          the highlight they're meant to be, which is part of why it's worth planning at least a
          little adjustment time before diving straight into a packed safari schedule.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Many itineraries build in a first night in Nairobi before heading out to the parks,
          which works well as a soft landing — giving you a chance to rest after the flight before
          committing to pre-dawn wake-up calls out in a remote camp.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-174185082115.jpg"
          alt="Sunrise over the Kenyan savannah"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Practical Tips for Adjusting Quickly
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Shifting your sleep schedule a little toward Kenya time in the day or two before you fly
          gives your body a head start, especially if you're coming from North America where the
          time difference is larger. On the flight itself, setting your watch to Kenya time
          immediately and eating and sleeping according to the destination time zone rather than
          your home one helps reset your internal clock faster than fighting it.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Getting sunlight exposure soon after arrival is one of the most effective tools for
          resetting your circadian rhythm — a slow morning walk around your first lodge or hotel
          does more for adjustment than staying indoors resting. Staying hydrated on the flight
          and avoiding excessive alcohol also meaningfully reduces how rough the adjustment period
          feels on arrival.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Does Kenya observe daylight saving time?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No — Kenya stays on East Africa Time (UTC+3) year-round with no seasonal clock
              changes, so the time difference from home stays constant.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How big is the time difference from the US to Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Roughly seven hours from the US East Coast and closer to ten hours from the West
              Coast, depending on the specific city and time of year in the US.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Should I plan a rest day before starting my safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It's a good idea, especially for longer-haul travelers, since game drives often
              start before sunrise and a night in Nairobi first helps you adjust before those
              early mornings begin.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's the fastest way to adjust to Kenya's time zone?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Switching to destination time on the flight, getting sunlight soon after arrival,
              and staying hydrated all help your body adjust faster than fighting the new
              schedule.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
