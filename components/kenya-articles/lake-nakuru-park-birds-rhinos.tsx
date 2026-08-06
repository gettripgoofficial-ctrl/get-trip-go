import Image from "next/image"
export default function LakeNakuruParkBirdsRhinosArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Lake Nakuru is small by Kenyan standards, but it packs an outsized amount into a compact
        setting — one of the country's most reliable rhino sanctuaries, over 400 recorded bird
        species, and a dramatic Rift Valley backdrop. It's also a park where the honest picture has
        shifted in recent years, and it's worth knowing that before you go.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Great Rift Valley, roughly 140-160 km from Nairobi, about a 3-hour drive.</li>
          <li><span className="font-semibold text-gray-900">Rhinos:</span> One of Kenya's most reliable sanctuaries for both black and white rhino.</li>
          <li><span className="font-semibold text-gray-900">Birdlife:</span> Over 400 recorded species, though flamingo numbers have dropped sharply since 2012.</li>
          <li><span className="font-semibold text-gray-900">Big Five status:</span> Four of five present — the park does not support elephants.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Honest Flamingo Situation
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Lake Nakuru built its global reputation on flocks of pink flamingos so dense they turned
          the shoreline into a moving pink carpet. That reputation is now largely historical. Since
          2012, rising water levels have made conditions less favorable for the algae flamingos feed
          on, and most large flocks have shifted to other Rift Valley soda lakes, particularly Lake
          Bogoria. Flamingos still appear at Nakuru in variable numbers, but visitors expecting the
          famous "millions of flamingos" spectacle from older photos should adjust expectations —
          and consider Bogoria if flamingos are the singular priority.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why It's Still One of Kenya's Best Rhino Destinations
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          What hasn't changed is Nakuru's strength as a rhino sanctuary — arguably its single
          biggest draw today. The park protects healthy populations of both black and white rhino,
          with sightings considered among the most reliable in the country. White rhinos tend to
          graze in open grassland, while the more reclusive black rhinos stick closer to thicker
          bush, giving visitors a good chance of spotting both behaviors in a single day.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80"
          alt="White rhino grazing in open grassland at Lake Nakuru National Park"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          A Rare Giraffe Subspecies, and the Rest of the Wildlife
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Nakuru is also a sanctuary for the Rothschild's giraffe, one of the rarest giraffe
          subspecies in Africa, introduced here as part of a conservation program and now
          established in stable family groups along the forest edges. Lions, leopards, buffalo, and
          waterbuck round out the wildlife — the one notable absence is elephants, which the park
          doesn't support, making it a Big Four rather than Big Five destination.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Best Viewpoints in the Park
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li><span className="font-semibold text-gray-900">Baboon Cliff:</span> A panoramic overlook of the entire lake, best at sunrise or sunset.</li>
          <li><span className="font-semibold text-gray-900">Lion Hill:</span> An elevated viewpoint where resting lions are frequently spotted nearby.</li>
          <li><span className="font-semibold text-gray-900">Makalia Falls:</span> A waterfall at the park's southern end, a good stop for a picnic break.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          How Long to Stay, and What to Combine It With
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Nakuru's compact size makes it genuinely well suited to a one- or two-day visit — one day
          covers the rhino sanctuary and main viewpoints, while two allows for deeper exploration
          and better photography light. Its position in the Rift Valley makes it easy to combine
          with Lake Naivasha and Hell's Gate for a short Rift Valley circuit, or with the Masai Mara
          for a longer 5-6 day safari that pairs rhino sightings with the Mara's big cats.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are there still flamingos at Lake Nakuru?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, but in far smaller numbers than the park's historical reputation suggests. Since
              2012, rising water levels have pushed most large flocks to other Rift Valley lakes
              like Bogoria, so visitors focused specifically on flamingos may want to check current
              conditions or consider Bogoria instead.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Does Lake Nakuru have elephants?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No — the park is one of the few major Kenyan reserves that doesn't support elephants,
              making it a Big Four rather than Big Five destination.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Lake Nakuru a good place to see rhinos?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — it's one of Kenya's most reliable rhino sanctuaries, with healthy populations of
              both black and white rhino and consistently good sighting odds.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How long should I spend at Lake Nakuru?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              One day is enough to cover the rhino sanctuary and main viewpoints; two days allows
              for deeper exploration and better photography conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
