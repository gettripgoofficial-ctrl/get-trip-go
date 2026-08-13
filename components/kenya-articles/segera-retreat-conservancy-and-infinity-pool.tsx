import Image from "next/image"
export default function SegeraRetreatConservancyAndInfinityPoolArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Segera Retreat sits on a private conservancy in Laikipia, pairing spacious villa-style
        accommodation with an infinity pool set right over the plains and a working conservation
        model that funds art, agriculture, and wildlife protection across the surrounding land.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Laikipia, a private conservancy region north of the Mara known for lower crowds and diverse landscapes.</li>
          <li><span className="font-semibold text-gray-900">Style:</span> Spacious private villas, with a signature infinity pool overlooking the plains.</li>
          <li><span className="font-semibold text-gray-900">Model:</span> Part of a broader conservancy initiative combining tourism, conservation, agriculture, and the arts.</li>
          <li><span className="font-semibold text-gray-900">Wildlife:</span> Includes both classic savannah species and some of Laikipia's rarer sightings, like the reticulated giraffe and Grevy's zebra.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Laikipia: Kenya's Quieter Conservancy Country
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Laikipia sits north of the Mara and Central Kenya's more famous parks, and operates
          almost entirely through private conservancies rather than government-run reserves. That
          structure tends to mean fewer vehicles per sighting and a genuinely quieter safari
          experience, along with access to activities — night drives, walking safaris, horseback
          riding — that national parks typically restrict.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The region's varied terrain and drier climate also support a wildlife mix that differs
          from the classic Mara savannah — including species like the reticulated giraffe and
          Grevy's zebra that are harder to find further south, alongside strong populations of
          more familiar plains game and predators.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Villas and Infinity Pool
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Segera's accommodation leans toward spacious private villas rather than the more compact
          tented-suite format common elsewhere, giving guests considerably more living space and
          privacy. The retreat's infinity pool, set to look directly out over the surrounding
          plains, is one of the property's signature features — the kind of vantage point where
          a swim doubles as wildlife watching if animals happen to move through the view.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-178103986937.jpg"
          alt="Infinity pool overlooking the plains at Segera Retreat in Laikipia"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          More Than a Lodge: The Conservancy Model
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Segera operates as part of a broader initiative that goes beyond standard lodge
          operations — combining wildlife conservation with sustainable agriculture projects and
          support for the arts, including an on-site sculpture collection and cultural programming.
          The idea is that tourism revenue funds a genuinely multi-purpose conservancy rather than
          existing purely as a self-contained lodge experience separate from the land around it.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          For guests interested in how a working conservancy actually functions day to day —
          balancing wildlife protection, community involvement, and land management — Segera
          offers a more layered picture of conservation in practice than a standard game-drive-
          focused stay.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Where is Segera Retreat located?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In Laikipia, a private conservancy region north of the Mara known for lower visitor
              density and diverse landscapes.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What wildlife can you see at Segera and around Laikipia?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Classic savannah species alongside rarer sightings like the reticulated giraffe and
              Grevy's zebra, which are less common in Kenya's southern parks.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What makes Segera's conservancy model distinctive?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It combines tourism with sustainable agriculture and arts programming alongside
              wildlife conservation, funding a broader working conservancy rather than operating
              as a standalone lodge.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What activities are available beyond game drives?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Night drives, walking safaris, and horseback riding are typically available through
              Laikipia's private conservancies, activities that most national parks restrict.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
