import Image from "next/image"
import Link from "next/link"

export default function GreatMigrationExplainedArticle() {
  return (
    <article className="bg-white">
      {/* Hero */}
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

      {/* Single-column article, centered */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Every year, roughly two million wildebeest, zebra, and gazelle move in a rough circle
          between Tanzania's Serengeti and Kenya's Masai Mara, chasing rain and fresh grass. It's
          the largest overland migration of large mammals left on Earth, and it doesn't follow a
          fixed calendar — it follows the weather.
        </p>

        {/* When does it happen */}
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
            slow-moving wave that a good local guide tracks in near real time.
          </p>
        </section>

        {/* River crossings image */}
        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=1200&q=80"
            alt="Safari vehicle watching wildebeest herds on the plains at sunset"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* River crossings */}
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
        </section>

        {/* Where to base yourself */}
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
            most expensive stretch of the year.
          </p>
        </section>

        {/* What people get wrong */}
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

        <div className="border-t border-gray-200 pt-6">
          <Link href="/kenya" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors">
            Back to the Kenya travel guide
          </Link>
        </div>
      </div>
    </article>
  )
}
