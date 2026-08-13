import Image from "next/image"
export default function SasaabAMoroccanStyleLodgeArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Sasaab sits above the Ewaso Nyiro River in Samburu, wrapped in a Moroccan-influenced
        design language that's unusual for the region — white domed rooms, open airy spaces, and
        private plunge pools looking out over the river valley below, paired with genuinely deep
        ties to the surrounding Samburu community.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Above the Ewaso Nyiro River in the Samburu region of northern Kenya.</li>
          <li><span className="font-semibold text-gray-900">Style:</span> Moroccan-influenced architecture — white domed rooms, open and airy design, private plunge pools.</li>
          <li><span className="font-semibold text-gray-900">Wildlife:</span> Access to the Samburu Special Five — species found here that aren't typically seen in Kenya's southern parks.</li>
          <li><span className="font-semibold text-gray-900">Community ties:</span> Strong relationship with the local Samburu community, including guides drawn from the area.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          A Distinctly Different Aesthetic
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Sasaab's design stands apart from almost every other camp on this list — white domed
          architecture, open-sided rooms, and a light, airy Moroccan-influenced style that feels
          more like a riad than a traditional East African safari lodge. Each room comes with its
          own private plunge pool overlooking the Ewaso Nyiro River valley, making the setting as
          much a part of the experience as the interiors themselves.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          That open, breezy design suits the hot, dry Samburu climate well, and the pale palette
          and airy layout create a genuinely different visual mood from the canvas-tent aesthetic
          that dominates further south in the Mara or Amboseli.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Samburu Special Five
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Samburu National Reserve and the surrounding conservancies are known for the "Samburu
          Special Five" — Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and
          beisa oryx — species adapted to this drier, more arid landscape that aren't typically
          found in Kenya's southern parks. For travelers who've already done a Mara or Amboseli
          safari, Samburu offers a genuinely different species list rather than a repeat of the
          same sightings.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Ewaso Nyiro River itself is a lifeline through this arid region, drawing elephants,
          predators, and a wide range of wildlife to its banks, and game drives from Sasaab make
          the most of that river-corridor concentration of animals.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-157189634984.jpg"
          alt="Moroccan-style domed suite overlooking the Ewaso Nyiro River"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Community Ties in Samburu
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Sasaab has built a strong relationship with the local Samburu community, drawing guides
          and staff from the surrounding area and supporting community initiatives connected to
          the camp's operation. Samburu guides bring generations of local knowledge to game
          drives and walking safaris, offering insight into the landscape and wildlife that goes
          beyond standard guide training — similar in spirit to the Maasai guiding tradition
          further south, but rooted in a distinct culture and territory.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Where is Sasaab located?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Above the Ewaso Nyiro River in the Samburu region of northern Kenya, a drier and
              more remote landscape than the Mara or Amboseli.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What is the Samburu Special Five?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and beisa oryx —
              species adapted to Samburu's arid landscape that aren't typically found in Kenya's
              southern parks.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's distinctive about Sasaab's design?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A Moroccan-influenced style with white domed architecture and open, airy rooms, each
              with a private plunge pool overlooking the river valley — a notable contrast to the
              canvas-tent look common elsewhere in Kenya.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Sasaab a good addition after visiting the Mara?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — Samburu's arid ecosystem and species list are genuinely different from the
              Mara's, making it a strong second stop for travelers who want variety across their
              trip.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
