import Image from "next/image"

export default function ElsasKopjeArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Elsa's Kopje is as much a conservation story as it is a lodge. Built into the granite
        outcrops of Meru National Park and named after the lioness of Born Free, it's credited
        with single-handedly reviving one of Kenya's most overlooked parks — and today offers a
        genuinely wild, uncrowded safari experience most travelers never discover.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Mughwango Hill, Meru National Park, roughly 4.5 hours by road from Nairobi (or a short flight).</li>
          <li><span className="font-semibold text-gray-900">Opened:</span> 1999, by Virginia McKenna of Born Free fame.</li>
          <li><span className="font-semibold text-gray-900">Rooms:</span> 6 cottages, 3 honeymoon suites, 1 family cottage, 1 private house.</li>
          <li><span className="font-semibold text-gray-900">Why it matters:</span> Not a single indigenous tree was cut down during construction — cottages are built around the existing rock and trees.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Real Elsa Behind the Name
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The lodge sits directly above the site where George and Joy Adamson raised and released
          Elsa, the orphaned lioness whose story became the book and film Born Free. Elsa's Kopje
          was designed by Stefano Cheli and officially opened in 1999 by Virginia McKenna — who
          played Joy Adamson in the film and went on to found the Born Free Foundation — alongside
          Dr. Richard Leakey, then director of the Kenya Wildlife Service. The lodge is genuinely
          layered with that history, from period photographs to memorabilia connected to George,
          Joy, and their lions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          A Lodge Credited With Saving a Park
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Before Elsa's Kopje opened, Meru National Park had suffered years of little to no
          tourism income. The lodge is widely credited with single-handedly reviving the park's
          fortunes, bringing sustained visitor revenue back to an area that had been largely
          forgotten by the safari circuit. That history is part of why a stay here feels different
          from a typical Mara or Amboseli lodge — you're contributing directly to a park that
          genuinely needed the support to recover.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-174185082115.jpg"
          alt="Cottage built into granite rock at Elsa's Kopje in Meru National Park"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Built Into the Rock, Literally
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Every cottage is individually designed around the natural contours of Mughwango Hill's
          granite — open-fronted living spaces built directly into the rock and surrounding trees,
          with sweeping views stretching to Mount Kenya and the Nyambeni Hills. The trade-off for
          this careful integration is that there are a fair number of steps between rooms and the
          main lodge areas, worth knowing if mobility is a concern for anyone in your group. From
          the plains below, the lodge is almost invisible, tucked so completely into the landscape
          that it barely disturbs the view it was built to showcase.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What Meru Offers That the Classic Circuit Doesn't
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Meru National Park spans roughly 215,000-370,000 acres of genuinely diverse terrain —
          open plains, dense thickets, and wooded grassland that supports rare species like the
          Grevy's zebra and the long-necked gerenuk alongside the Big Five. It also incorporates
          one of Kenya's prime rhino sanctuaries. Because so few lodges operate here, game drives
          feel private rather than shared with a dozen other vehicles, and Elsa's Kopje holds a
          special license to offer guided walks, fishing, and pre-dinner night drives — activities
          restricted or unavailable in busier parks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Getting There
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Daily scheduled flights connect Nairobi's Wilson Airport to Mughwango Airstrip, a five
          minute drive from the lodge — the most practical option for most travelers. By road,
          it's approximately a 4.5-hour drive from Nairobi. Given Meru's remote, uncrowded
          character, most visitors combine it with a fly-in itinerary rather than adding it onto
          a road-based circuit through the busier southern parks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Elsa's Kopje named after a real lioness?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — Elsa, the lioness raised by George and Joy Adamson, whose story became the
              book and film Born Free. The lodge sits above the site of the Adamsons' original
              camp.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How do I get to Elsa's Kopje?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Daily flights connect Nairobi's Wilson Airport to Mughwango Airstrip, five minutes
              from the lodge. By road, it's roughly a 4.5-hour drive from Nairobi.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Meru National Park worth visiting over the classic Mara circuit?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It offers something different rather than better — genuinely uncrowded game viewing,
              rare species like Grevy's zebra, and activities like walking safaris and night
              drives that busier parks often restrict.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Elsa's Kopje accessible for travelers with mobility issues?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Worth confirming directly — the lodge is built into rocky terrain with a number of
              steps between cottages and the main areas, a deliberate design choice to preserve
              the natural landscape.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
