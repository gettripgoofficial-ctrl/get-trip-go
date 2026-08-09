export default function TsetseFliesBlueAndBlackClothingArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Tsetse flies are one of the few genuinely painful bites you can pick up on safari, and
        the color of your clothing has a measurable, well-documented effect on how many of them
        find you. It's a small packing detail that's easy to fix and genuinely worth knowing
        before you go.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Colors to avoid:</span> Dark blue and black — both strongly attract tsetse flies.</li>
          <li><span className="font-semibold text-gray-900">Where they're common:</span> Wooded and bushy areas, especially around Tsavo, Samburu, and parts of the Mara.</li>
          <li><span className="font-semibold text-gray-900">Bite risk:</span> Painful bite, occasional disease transmission risk in some regions (rare in Kenya's main tourist parks).</li>
          <li><span className="font-semibold text-gray-900">Best defense:</span> Neutral or khaki-colored clothing, plus a light long-sleeve layer.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Blue and Black Specifically
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tsetse flies hunt visually, and research on their behavior has consistently found they're
          drawn most strongly to dark blue and black — colors that contrast against the bush and
          are easier for the fly to track in flight. This isn't folklore; it's the basis for real
          tsetse-control tools like blue-and-black cloth traps used in fly-control programs across
          East and Southern Africa, which exploit exactly this color preference to lure and capture
          them. If a fabric color is effective enough to build an actual trap around, it's
          effective enough to avoid wearing.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What a Tsetse Bite Actually Feels Like
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Unlike a mosquito bite, a tsetse fly bite is immediately, sharply painful — often
          described as feeling like a hot needle prick — because the fly's mouthparts are built to
          cut through skin rather than pierce it gently. They also bite through fairly light
          fabric, and their bites are notoriously hard to swat away in time, since the fly senses
          movement and adjusts. The bite itself typically causes a raised, itchy welt that fades
          over a few days.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <img
          src="/images/external/unsplash-151642612207.jpg"
          alt="Wooded bushland in a Kenyan national park"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where You're Most Likely to Encounter Them
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tsetse flies favor wooded, bushy terrain over open grassland, since they rest on
          vegetation and ambush passing animals or vehicles. Parts of Tsavo, Samburu, and the
          denser woodland areas bordering the Masai Mara see more tsetse activity than the wide
          open plains most safari photos come from. They're also drawn to moving vehicles, which
          means a closed-window drive through a known tsetse zone, rather than an open-sided
          vehicle, can sometimes reduce exposure.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What Actually Works Against Them
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li>Wear khaki, tan, olive, or white instead of blue or black</li>
          <li>Long sleeves and long trousers reduce exposed skin, even in heat</li>
          <li>Standard mosquito repellent has limited effect on tsetse flies — it's not a reliable substitute for color choice</li>
          <li>Ask your guide before driving through known tsetse-heavy stretches, especially in Tsavo or Samburu</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Why do tsetse flies prefer blue and black clothing?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tsetse flies hunt visually and are measurably drawn to dark blue and black over
              lighter, neutral colors — the same principle used in blue-and-black cloth traps for
              fly-control programs.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are tsetse fly bites dangerous in Kenya's main safari parks?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The bite itself is painful but the disease-transmission risk in Kenya's main tourist
              circuit is low; it's more of a comfort issue than a serious health concern for most
              travelers.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Does insect repellent work against tsetse flies?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Standard mosquito repellent has limited effectiveness against tsetse flies — clothing
              color and covering exposed skin matter more.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
