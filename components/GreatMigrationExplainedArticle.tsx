import Image from "next/image"
import Link from "next/link"

export default function GreatMigrationExplainedArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=1600&q=80"
          alt="Wildebeest herds crossing the Mara River during the Great Migration"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Safari & Wildlife
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            The Great Migration Explained: When, Where and Why
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Every year, roughly two million wildebeest, zebra, and gazelle move in a rough circle
          between Tanzania's Serengeti and Kenya's Masai Mara, chasing rain and fresh grass. It's
          the largest overland migration of large mammals left on Earth, and it doesn't follow a
          fixed calendar — it follows the weather.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Best months for Mara River crossings:</span> July through September.</li>
            <li><span className="font-semibold text-gray-900">Best months for calving:</span> January through March, southern Serengeti.</li>
            <li><span className="font-semibold text-gray-900">Where the herds are right now:</span> depends on rainfall — exact dates shift 2–4 weeks year to year.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            When Does the Migration Happen?
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The herds spend January through March calving on the southern Serengeti plains, where
            nutrient-rich grass supports nursing mothers — around 500,000 calves are born within a
            few weeks each year. By April and May, as the plains dry out, the herds start moving
            northwest through the central Serengeti. June brings them toward the western corridor,
            where they cross the Grumeti River. By July, the front of the migration typically
            reaches the Mara River, the border between Tanzania and Kenya, and pushes into the
            Masai Mara through August and September. October and November see the herds drift back
            south as the short rains return, closing the loop by December.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            These dates shift by two to four weeks most years depending on rainfall, so "the
            migration" isn't a single event you can pin to a date on a calendar — it's a
            slow-moving wave that a good local guide tracks in near real time. For a full
            season-by-season breakdown of Kenya's weather patterns, see our{" "}
            <Link href="/kenya/best-time-to-visit-kenya" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              guide to the best time to visit Kenya
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Do They Migrate?
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The migration isn't a fixed instinctive route so much as a constant response to
            rainfall and grass quality. Wildebeest need short, nutrient-dense grass, and they
            follow storm systems that trigger new growth, which is why the timing shifts from
            year to year rather than running on a strict calendar. Researchers tracking collared
            animals have found the herds can sense rainfall from many kilometers away, likely
            through a combination of smell, distant lightning, and visual cues like darkening
            skies on the horizon.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Zebra and gazelle travel alongside the wildebeest but for slightly different reasons —
            zebra eat the taller, coarser grass first, effectively clearing the way for wildebeest
            to reach the shorter grass underneath, while gazelle follow behind picking off the
            shortest regrowth. This layered grazing pattern is part of why the three species move
            together rather than competing directly for the same food.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=1200&q=80"
            alt="Safari vehicle watching wildebeest herds on the plains at sunset"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            The River Crossings
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most dramatic moments — and the ones most photographed — are the river crossings,
            particularly at the Mara River. Herds gather in their thousands on one bank, hesitate,
            and then surge across water that often holds large crocodiles. Crossings aren't
            scheduled; a herd might approach a crossing point three times in a day before
            committing, or not cross at all if the water looks wrong to them. Camps near the Mara
            River in the Masai Mara give you the best odds of catching one between July and
            September, but patience — sometimes days of it — is part of the deal.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Positioning matters more than most people realize. Popular crossing points get
            crowded with vehicles during peak months, and a guide who knows which bend in the
            river the herds are currently favoring — rather than parking at the most famous spot
            and waiting — usually gets you a clearer, less obstructed view.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Where to Base Yourself
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li><span className="font-semibold text-gray-900">January–March:</span> Southern Serengeti (Ndutu area) for calving season</li>
            <li><span className="font-semibold text-gray-900">April–May:</span> Central Serengeti, as herds start moving</li>
            <li><span className="font-semibold text-gray-900">June–July:</span> Western Serengeti, Grumeti River crossings</li>
            <li><span className="font-semibold text-gray-900">July–October:</span> Masai Mara, Kenya, for Mara River crossings</li>
            <li><span className="font-semibold text-gray-900">November–December:</span> Southern Serengeti again, as the herds return</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you only have one trip in you and want the classic river-crossing shot, July
            through September in the Masai Mara is the safest bet, though also the busiest and
            most expensive stretch of the year. Wildlife density in the Mara during these months
            also makes it one of the more reliable windows for seeing the{" "}
            <Link href="/kenya/big-five-how-to-spot" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              Big Five
            </Link>{" "}
            in the same trip.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Photographing the Migration
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Early morning light between roughly 6:30 and 8:30am produces the strongest images —
            low, warm sun and dust kicked up by moving herds. A telephoto lens in the 200–400mm
            range covers most action shots, while a wider lens helps capture the scale of a large
            herd or a crossing in full swing. At river crossings specifically, position matters:
            a slightly elevated vantage point on the near bank, rather than being level with the
            water, tends to produce cleaner shots without other vehicles cluttering the frame.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Patience is the real skill. Many photographers wait two to four hours at a single
            crossing point without a guaranteed payoff, so budgeting multiple mornings for a real
            attempt — rather than expecting one drive to deliver — sets more realistic
            expectations than most trip itineraries suggest.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The biggest misconception is that the migration is a single herd moving as one unit.
            In reality it's broken into many smaller groups spread across a wide area, which is
            why "is the migration here right now" is really a question about which specific
            stretch of river or plain you're asking about — not the whole event. Camps and guides
            who move seasonally with the herds, rather than staying fixed in one location, tend to
            give you better access regardless of month.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            None of this is guaranteed. Wildlife doesn't read itineraries, and even well-timed
            trips sometimes miss a crossing by a day. But understanding the rough seasonal pattern
            — where the grass is, where the water is — is what separates a lucky sighting from a
            planned one.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is the Great Migration guaranteed if I visit in July?</h3>
              <p className="text-gray-700 leading-relaxed">
                No sighting in nature is guaranteed, but July through September in the Masai Mara
                is statistically the most reliable window for both the general migration and
                river crossings specifically.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Can I see the migration in Kenya, or only Tanzania?</h3>
              <p className="text-gray-700 leading-relaxed">
                Both. The migration is a single circuit spanning both countries — Kenya's Masai
                Mara hosts the herds roughly July through October, while Tanzania's Serengeti
                hosts them the rest of the year, including calving season.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">How many days do I need to see a river crossing?</h3>
              <p className="text-gray-700 leading-relaxed">
                Most experienced guides recommend at least three to four days in the Mara during
                peak season to give yourself a realistic chance, since crossings can't be
                scheduled on demand.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/best-time-to-visit-kenya" className="text-yellow-600 hover:text-yellow-700 font-semibold">Best Time to Visit Kenya: A Season-by-Season Guide</Link></li>
            <li><Link href="/kenya/big-five-how-to-spot" className="text-yellow-600 hover:text-yellow-700 font-semibold">Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo</Link></li>
            <li><Link href="/kenya/is-kenya-safe-for-tourists" className="text-yellow-600 hover:text-yellow-700 font-semibold">Is Kenya Safe for Tourists? What You Should Know</Link></li>
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria Prevention: Tablets, Repellents and Risk Areas</Link></li>
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
