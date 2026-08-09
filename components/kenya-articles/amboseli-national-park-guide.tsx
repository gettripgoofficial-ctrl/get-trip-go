import Image from "next/image"
export default function AmboseliNationalParkGuideArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Amboseli's reputation rests on one image: elephant herds crossing dusty plains with
        Mount Kilimanjaro's snow-capped summit rising behind them. It's not a lucky shot — it's
        what the park delivers most mornings when the mountain is clear, and it comes paired with
        some of the best-studied elephant populations on Earth.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Kajiado County, southern Kenya, on the Tanzania border beneath Mount Kilimanjaro.</li>
          <li><span className="font-semibold text-gray-900">Size:</span> 392 km², compact compared to parks like Tsavo or the Serengeti.</li>
          <li><span className="font-semibold text-gray-900">Access:</span> About a 4-hour drive from Nairobi, or roughly 45 minutes by air from Wilson Airport.</li>
          <li><span className="font-semibold text-gray-900">Best time for Kilimanjaro views:</span> June-October and January-February, the driest, clearest months.</li>
          <li><span className="font-semibold text-gray-900">Big Five status:</span> Lion, leopard, elephant, and buffalo are present; rhino are not commonly resident.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Amboseli Is Built Around Elephants
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Amboseli is home to one of the longest-running wildlife studies in history. The Amboseli
          Elephant Research Project, founded by researcher Cynthia Moss in 1972, has documented the
          complete life histories of over 1,800 individual elephants across more than 60 family
          groups. Every elephant in the park has a name, a recorded family tree, and decades of
          observed behavior — which is why guides here can often identify exactly which family
          group you're watching and how it relates to others nearby.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Swamps That Make the Park Work
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Amboseli's permanent swamps — Enkongo Narok and Longinye among them — are fed by
          underground water draining from Kilimanjaro's glaciers and snowmelt, and they're the
          ecological reason the park supports so much wildlife despite its dry, dusty surface.
          These swamps stay wet even in the driest months, drawing elephants, hippos, buffalo, and
          large numbers of waterbirds like pelicans and yellow-billed storks to concentrated,
          reliable feeding grounds.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-amboseli-elephants.jpg"
          alt="Elephant herd crossing Amboseli's plains with Mount Kilimanjaro in the background"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Wildlife Beyond the Elephants
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Amboseli supports four of Africa's Big Five: elephant, lion, leopard, and buffalo. Black
          rhino no longer inhabit the park in meaningful numbers, making it the one gap in an
          otherwise strong wildlife list. Lions are frequently found resting in shade or near the
          swamp edges, where prey concentrates, while leopards are present but notably elusive
          compared to the park's other predators.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Best Time to Visit for Kilimanjaro Views
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kilimanjaro is not visible every day — cloud cover often builds by mid-morning, even in
          the dry season. The clearest views typically come at dawn during the driest stretches of
          the year, roughly June through October and again in January and February. Early-morning
          game drives aren't just better for wildlife activity here; they're also the best chance
          of an unobstructed mountain view before clouds roll in.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Observation Hill and Getting Oriented
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Observation Hill is the park's one raised viewpoint, giving a panoramic overview of
          Amboseli's swamps and plains below. A short stop here, ideally at dawn, is a useful way to
          orient yourself and spot where wildlife is concentrated before heading out for the rest of
          the day's game drive.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          How Long to Stay, and What to Pair It With
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          A minimum two-night stay — giving one full day of game driving — is significantly more
          rewarding than a single day visit, since it allows at least one Kilimanjaro-watching
          morning and one full afternoon drive. Amboseli's closeness to Nairobi makes it easy to
          combine with other parks: Tsavo lies directly north for a natural 4-5 day extension, while
          the Masai Mara pairs well for travelers who want big cats and, between July and October,
          the migration crossings on top of Amboseli's elephants and mountain views.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can I see Mount Kilimanjaro every day at Amboseli?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No guarantee — cloud cover is common, especially later in the day. Early mornings
              during the dry season, roughly June through October and January through February,
              give the best odds of a clear view.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Does Amboseli have the Big Five?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Four of the five — elephant, lion, leopard, and buffalo are present, but black rhino
              are not commonly resident, making Amboseli one Big Five species short.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How far is Amboseli from Nairobi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              About a 4-hour drive, or roughly 45 minutes by small aircraft from Wilson Airport,
              making it one of the more accessible parks for a shorter Kenya safari.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How many days should I spend in Amboseli?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A minimum of two nights is recommended, giving at least one full day of game driving
              plus one Kilimanjaro-watching morning, rather than a rushed single-day visit.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
