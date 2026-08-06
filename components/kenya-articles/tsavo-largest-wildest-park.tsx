import Image from "next/image"
export default function TsavoLargestWildestParkArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Tsavo is Kenya's largest protected area by a wide margin, and its least crowded major
        park. Split by the Nairobi-Mombasa highway into two distinct halves, it trades the
        polished infrastructure of the Mara and Amboseli for something rarer: genuine wilderness,
        red-dust elephants, and game drives where it's entirely possible to go all day without
        seeing another vehicle.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Combined size:</span> Over 22,000 km² across Tsavo East and Tsavo West, making it Kenya's largest protected area.</li>
          <li><span className="font-semibold text-gray-900">Layout:</span> Split into two separate parks by the Nairobi-Mombasa highway, each with a distinct landscape.</li>
          <li><span className="font-semibold text-gray-900">Access:</span> About 333 km / 206 miles from Nairobi to Tsavo East, roughly a 5-6 hour drive.</li>
          <li><span className="font-semibold text-gray-900">Wildlife:</span> Part of a wider ecosystem with Amboseli that holds an estimated 675 lions, plus the park's famous red elephants.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Two Parks, Two Very Different Experiences
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tsavo East is defined by vast, open plains and long sightlines, which make wildlife
          easier to spot and deliver a classic, game-focused safari — large elephant herds, lions,
          buffalo, and giraffe roaming country that stretches to the horizon. Tsavo West, in
          contrast, is more rugged and scenic: volcanic hills, lava flows, and denser vegetation
          create a slower-paced safari built as much around landscape and atmosphere as wildlife
          itself.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Choosing between them usually comes down to priorities — Tsavo East for wildlife density
          and simplicity, Tsavo West for scenery and variety — and many travelers combine both for
          a fuller picture of the ecosystem.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Red Elephants of Tsavo
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tsavo's elephants are famous for a distinctive reddish coloring, a product of the fine
          red-oxide dust that covers the park's soil. Elephants regularly dust-bathe by rolling
          and spraying themselves with this red earth, both to cool off and to protect their skin
          from insects and sun — the effect is a herd that looks almost rust-colored against the
          plains, one of the park's most recognizable sights.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?w=1200&q=80"
          alt="Red-dust elephants in Tsavo East National Park, Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Landmarks Worth Knowing
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tsavo East's standout features include the Yatta Plateau, one of the world's longest lava
          flows, and the Galana River, a lifeline for wildlife through the dry season. Tsavo West
          centers on Mzima Springs, a crystal-clear spring-fed pool where hippos and crocodiles can
          be observed from an underwater viewing chamber, and the Shetani Lava Flow, a stark field
          of black volcanic rock that looks almost otherworldly against the surrounding bush.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Man-Eaters of Tsavo
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tsavo holds one of Africa's most infamous wildlife stories. In 1898, during construction
          of the Kenya-Uganda railway, two male lions began preying on railway workers, killing
          dozens over several months and bringing construction to a halt. Unlike typical prides,
          these lions operated without females and showed unusually bold behavior around human
          camps — a story now inseparable from Tsavo's identity as a wild, untamed landscape.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Rare Species You Won't Find Elsewhere
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Beyond the Big Five, Tsavo protects a handful of species rarely seen in Kenya's more
          famous parks: the endemic desert warthog, the critically endangered hirola (also known
          as Hunter's hartebeest), and Peter's gazelle. Spotting any of these is a genuine highlight
          for visitors who've already ticked off the standard safari checklist elsewhere.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Choose Tsavo Over the Mara or Amboseli
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tsavo is one of Kenya's least developed major parks, and that's precisely its appeal for
          travelers who've already experienced the more crowded circuits. Its sheer size means
          sightings come without convoys of vehicles, and its position directly between Nairobi and
          the coast makes it easy to combine with Amboseli inland or a beach extension on the
          Indian Ocean.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Tsavo East or Tsavo West better for a safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Both are part of the same ecosystem but offer different experiences — Tsavo East has
              wide-open plains, larger elephant herds, and easier game spotting, while Tsavo West
              offers a more mountainous, rugged landscape with Mzima Springs as a key attraction.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Why are Tsavo's elephants red?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              They regularly dust-bathe in the park's red-oxide soil to cool down and protect
              their skin, which stains their hide a distinctive reddish color.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How far is Tsavo from Nairobi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              About 333 km to Tsavo East, roughly a 5-6 hour drive, passing through scenic plains
              along the way.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What is the story behind the "Man-Eaters of Tsavo"?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In 1898, two male lions killed dozens of railway workers during construction of the
              Kenya-Uganda railway, halting work for months — one of the most famous predator
              incidents in African history.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
