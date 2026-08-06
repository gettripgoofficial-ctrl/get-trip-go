import Image from "next/image"
import Link from "next/link"

export default function ElderlyTravelersArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1600&q=80"
          alt="Elderly couple enjoying a comfortable game drive in Kenya"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Who Should Go
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Elderly Travelers: What to Know Before a Safari
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Age genuinely isn't a barrier to a Kenya safari. Experienced guides regularly host
          travelers in their 80s and even 90s, and the activity itself — sitting comfortably in an
          elevated vehicle, watching wildlife — is far less physically demanding than most people
          assume. What actually matters is pacing, comfort, and picking the right style of trip,
          not a number on a passport.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">No age limit:</span> Kenya has no safari age restriction — travelers well into their 80s and 90s do this regularly.</li>
            <li><span className="font-semibold text-gray-900">Comfort matters more than age:</span> pacing, longer stays per camp, and choosing fly-in vs. road transfers make the real difference.</li>
            <li><span className="font-semibold text-gray-900">Worth telling your operator upfront:</span> any mobility needs, so they can arrange the right vehicle and rooming in advance.</li>
            <li><span className="font-semibold text-gray-900">Best rhythm:</span> fewer camps, longer stays (3-5 nights each) rather than a fast-paced circuit.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Age Is Genuinely Not the Limiting Factor
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Experienced safari guides consistently report hosting guests in their 80s and beyond
            without issue — travelers well into their 90s have completed multi-day safaris across
            East Africa. Game drives themselves are a low-impact activity: you're seated in a
            comfortable, elevated vehicle for most of it, which is a genuinely different physical
            demand than, say, a hiking trip. The honest advice from people who guide this
            regularly is that the joy and excitement of the trip tends to outweigh age-related
            worry far more than first-time travelers expect.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Fly-In vs. Road: Both Work, Pick What Suits You
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Fly-in safaris, connecting camps by light aircraft, cut out long road transfers and
            are often recommended for travelers who'd rather avoid multi-hour drives. But it's
            genuinely a preference, not a requirement — plenty of travelers in their 70s and 80s
            find road transfers perfectly comfortable and actually enjoy the drive as part of the
            experience, particularly if it's broken into manageable stretches with rest stops. If
            a full day's drive feels like too much, ask your operator about splitting a long
            transfer into a shorter flight for one leg and a scenic drive for another.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1200&q=80"
            alt="Comfortable elevated safari vehicle for a relaxed game drive"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Slow Down the Itinerary
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The single most useful adjustment for older travelers is pacing — favoring 3-5 night
            stays at fewer camps rather than a fast-moving circuit hopping between many locations.
            This cuts down on packing, repacking, and transfer days, and gives you enough time at
            each camp to enjoy both morning and afternoon drives without feeling rushed. Morning
            and afternoon game drive structures naturally build in rest periods too, since most
            camps schedule a relaxed midday break back at the lodge between outings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Gentler Activities Beyond the Game Drive
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            A safari doesn't have to mean a bumpy road every day. Boat safaris on Lake Naivasha,
            gentle guided walks on flat terrain in conservancies like Lewa and Laikipia, cultural
            visits, and photography-focused outings all offer a slower pace without sacrificing
            the wildlife experience. Nairobi's Safari Walk uses elevated boardwalks specifically
            designed to accommodate all fitness levels, making it a good, easy introduction before
            heading further out to the parks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Health Preparation That Matters Most
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            A pre-travel consultation is worth booking regardless of how healthy you feel — your
            doctor can review any heart, respiratory, or mobility conditions against your specific
            itinerary, confirm your vaccinations and malaria prevention plan, and flag anything
            worth adjusting. If mobility aids like a wheelchair or walker are part of your trip,
            tell your operator this upfront rather than mentioning it once you arrive; most
            high-end lodges can accommodate this, but they need advance notice to arrange the
            right rooming and vehicle. See our{" "}
            <Link href="/kenya/safari-for-people-with-heart-conditions" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              guide for travelers with heart conditions or chronic illness
            </Link>{" "}
            for a fuller breakdown of what to prepare.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is assuming age alone should rule out a safari, when in
            practice pacing and honest communication with your operator matter far more than the
            number of years on a passport. Travelers well into their 80s and 90s complete safaris
            comfortably every year — the trips that go smoothly are the ones where mobility needs,
            preferred transfer style, and rest requirements were discussed with the operator
            before booking, not worked out on the fly once the trip had already started.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is there an age limit for a Kenya safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. There's no official age restriction, and travelers in their 80s and 90s go on
                safari regularly and comfortably.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is a fly-in safari necessary for older travelers?</h3>
              <p className="text-gray-700 leading-relaxed">
                Not necessarily — it's a comfort preference. Many older travelers enjoy road
                transfers as part of the experience, provided the itinerary allows for rest stops
                and isn't overly rushed.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">How should I pace an itinerary for elderly travelers?</h3>
              <p className="text-gray-700 leading-relaxed">
                Favor longer stays of 3-5 nights at fewer camps rather than a fast-moving circuit,
                to cut down on transfer days and packing while allowing enough rest between game
                drives.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What should I tell my operator in advance?</h3>
              <p className="text-gray-700 leading-relaxed">
                Any mobility aids, health conditions, or pacing preferences — this lets them
                arrange the right vehicle, rooming, and itinerary structure before you arrive
                rather than adjusting mid-trip.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/safari-for-people-with-heart-conditions" className="text-yellow-600 hover:text-yellow-700 font-semibold">Safari for People With Heart Conditions or Chronic Illness</Link></li>
            <li><Link href="/kenya/safari-for-travelers-with-mobility-issues" className="text-yellow-600 hover:text-yellow-700 font-semibold">Safari for Travelers With Mobility Issues</Link></li>
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
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
