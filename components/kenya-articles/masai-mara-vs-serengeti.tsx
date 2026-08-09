import Image from "next/image"
export default function MasaiMaraVsSerengetiArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        They're the same ecosystem split by a border, but Masai Mara and the Serengeti aren't
        interchangeable trips. Which one makes sense for you depends heavily on when you're
        traveling, what you want to see, and how much time and budget you're working with.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Masai Mara is in southwestern Kenya; the Serengeti is its much larger neighbor across the border in northern Tanzania.</li>
          <li><span className="font-semibold text-gray-900">Size:</span> The Serengeti covers roughly 14,750 km², more than ten times the Masai Mara's approximately 1,510 km².</li>
          <li><span className="font-semibold text-gray-900">Migration timing:</span> Wildebeest are typically in the Mara from around July to October, and in the Serengeti for the rest of the year.</li>
          <li><span className="font-semibold text-gray-900">Access:</span> The Mara is a short flight or drive from Nairobi; the Serengeti usually requires a longer transfer from Arusha.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          One Ecosystem, Two Countries
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Masai Mara and the Serengeti are part of the same continuous savanna ecosystem,
          divided only by the Kenya-Tanzania border. Wildlife moves freely across that line,
          which is exactly why the Great Migration works the way it does — the same herds spend
          part of the year grazing the Serengeti's plains and part of the year pushing north into
          the Mara in search of fresh grass.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Size and Landscape
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The difference in scale is the first thing most visitors notice. The Serengeti is vast
          and open, with long, uninterrupted views across grassland that can feel endless. The
          Masai Mara is far smaller and more concentrated, which in practice means wildlife
          density can feel higher — animals are compressed into less space, so sightings often
          come faster and closer together.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Following the Migration: Timing Is Everything
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The single biggest factor in choosing between the two is timing. Roughly from July
          through October, the migration is usually in and around the Mara, including the famous
          river crossings. For the remaining months, the herds are generally spread across the
          Serengeti, including the calving season around February when hundreds of thousands of
          wildebeest calves are born within a few weeks of each other on the southern plains.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Booking the wrong park for the wrong month is the most common migration-trip mistake —
          a Mara safari in March, for example, will likely miss the herds entirely.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-1547471080-7.jpg"
          alt="Wide open savanna landscape typical of the Masai Mara and Serengeti ecosystem"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Crowds, Cost, and Accessibility
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Mara's smaller size and closeness to Nairobi make it easier and often cheaper to
          reach, but that same convenience means it can draw more vehicles at popular sightings,
          especially during peak migration months. The Serengeti's scale makes it easier to find
          space and solitude, though longer transfer times and generally higher park fees can push
          up the overall cost of a trip.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Which One Should You Choose?
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          If your trip is built around river crossings and you want the shortest possible flights
          from Nairobi, the Mara is the more practical choice. If you have more time, want to
          combine a safari with the calving season or with landscapes like the Ngorongoro Crater,
          or simply want to see more untouched, open wilderness, the Serengeti is worth the longer
          journey. Many experienced safari travelers eventually visit both, since they showcase
          different chapters of the same migration story.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Masai Mara part of the Serengeti?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Not officially — they're separate protected areas in different countries — but they
              form one continuous ecosystem, and wildlife, including the migrating herds, moves
              freely between them.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Which is better for first-time safari-goers, Mara or Serengeti?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Neither is objectively better — the Mara suits shorter trips built around river
              crossings, while the Serengeti suits travelers with more time who want a larger,
              quieter landscape.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can I visit both the Masai Mara and the Serengeti on one trip?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, and many multi-week itineraries do exactly that, though it requires crossing an
              international border and adds meaningful transfer time.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              When is the migration in the Masai Mara versus the Serengeti?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Roughly July through October in the Mara, and the rest of the year spread across the
              Serengeti, though exact timing shifts annually with rainfall patterns.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
