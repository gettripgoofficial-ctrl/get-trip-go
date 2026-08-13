import Image from "next/image"
export default function AngamaMaraSuitesOnTheEscarpmentArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Angama Mara sits nearly 1,000 feet above the Mara Triangle on the edge of the Oloololo
        Escarpment, with glass-fronted suites that turn every room into a private viewing deck
        over one of the most storied wildlife landscapes in the world. It's less a camp with a
        view and more a view with a camp built carefully around it.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Oloololo Escarpment, overlooking the Mara Triangle within the Masai Mara ecosystem.</li>
          <li><span className="font-semibold text-gray-900">Style:</span> Two camps (Angama Mara and Angama Safari Camp) with glass-fronted suites and tents, all facing the view.</li>
          <li><span className="font-semibold text-gray-900">Best for:</span> Travelers who want the view itself to be part of the experience, not just the game drives.</li>
          <li><span className="font-semibold text-gray-900">Access:</span> Fly-in via a nearby airstrip, or drive up the escarpment road from the valley floor.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Setting
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most Mara camps sit down on the plains, close to the wildlife but without much
          perspective on the landscape itself. Angama Mara takes the opposite approach, perched on
          the escarpment edge with a sweeping view over the Mara Triangle below — the valley where
          much of the river-crossing drama of the Great Migration plays out each year. Even
          without leaving your suite, the view alone captures a sense of scale that's hard to get
          from ground level.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The property is split into two camps: Angama Mara, the original and more design-forward
          of the two, and Angama Safari Camp, a slightly more classic tented option nearby. Both
          share the same extraordinary setting and give guests full access to game drives down
          into the valley below.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Suites
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Each suite is built almost entirely around its floor-to-ceiling glass frontage, designed
          so the escarpment view is visible from the bed, the sitting area, and often the bathtub
          as well. The interiors lean into a clean, design-led aesthetic rather than the
          traditional safari-lodge look, with an emphasis on natural materials and unobstructed
          sightlines out toward the valley.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Private verandas extend the living space outdoors, and many guests describe simply
          sitting on their own deck with coffee at sunrise as one of the most memorable parts of
          the stay — a rare case where the accommodation itself competes with the game drives for
          the highlight of the trip.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-152380500934.jpg"
          alt="Glass-fronted suite overlooking the Mara Triangle at Angama Mara"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Game Drives and Activities
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Being on the escarpment doesn't mean sacrificing proximity to wildlife — the camp's
          vehicles descend into the Mara Triangle for game drives, giving guests access to the
          same big cat and migration territory as camps based down in the valley itself. The drive
          down and back up becomes part of the experience too, with dramatic views over the
          escarpment face along the way.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Beyond standard game drives, the camp offers guided nature walks along the escarpment,
          visits to the on-site Angama Foundation projects supporting local community initiatives,
          and photographic safaris tailored for guests focused specifically on wildlife
          photography.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Where exactly is Angama Mara located?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              On the Oloololo Escarpment, overlooking the Mara Triangle within the greater Masai
              Mara ecosystem, roughly 1,000 feet above the valley floor.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's the difference between Angama Mara and Angama Safari Camp?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Angama Mara is the original, more design-forward property, while Angama Safari Camp
              nearby offers a slightly more classic tented style — both share the same escarpment
              setting and game drive access.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do the game drives reach the Mara Triangle from the escarpment?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — vehicles descend into the valley for game drives, giving full access to the
              same wildlife and migration territory as camps based on the plains below.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How do you get to Angama Mara?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Most guests fly in via a nearby airstrip; the camp is also reachable by road up the
              escarpment from the Mara Triangle valley floor.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
