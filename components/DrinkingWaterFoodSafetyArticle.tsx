import Image from "next/image"
import Link from "next/link"

const safetyTable = [
  { item: "Bottled/sealed water", verdict: "Safest default", note: "Check the seal is intact before drinking" },
  { item: "Lodge-filtered/purified water", verdict: "Generally safe", note: "Most upscale camps run their own filtration systems" },
  { item: "Tap water (Nairobi, Mombasa)", verdict: "Avoid drinking", note: "Municipal treatment exists but aging pipes add risk for visitors" },
  { item: "Ice in reputable lodges", verdict: "Usually fine", note: "Typically made from boiled or filtered water" },
  { item: "Ice at budget/street vendors", verdict: "Avoid", note: "Source and process often unclear" },
  { item: "River, lake, or swamp water", verdict: "Never drink", note: "Wildlife-shared water sources carry high contamination risk" },
]

export default function DrinkingWaterFoodSafetyArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-156808468078.jpg"
          alt="Bottled water and a packed lunch at a Kenya safari lodge"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Health &amp; Safety
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Drinking Water and Food Safety on Safari
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 4 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Most safari illness stories aren't about wildlife — they're about stomachs. The good
          news is that most reputable lodges have this well handled already; the risk mostly
          shows up in the gaps between them, like a roadside stop or a budget guesthouse without
          the same standards.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Tap water:</span> avoid drinking it, even in Nairobi — bottled or lodge-filtered water is the standard.</li>
            <li><span className="font-semibold text-gray-900">Most lodges:</span> already provide bottled or purified water as a standard part of your stay, no extra effort needed.</li>
            <li><span className="font-semibold text-gray-900">Ice:</span> generally fine at reputable lodges, riskier at budget spots or street vendors.</li>
            <li><span className="font-semibold text-gray-900">Food:</span> cooked, hot meals at your lodge are low-risk; raw produce and street food carry more variability.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Tap Water Is Off the List
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Nairobi and Mombasa do have municipal water treatment systems, but aging
            infrastructure and inconsistent supply mean even treated tap water can carry bacteria
            that local residents have built tolerance to and visitors haven't. Outside the cities,
            many safari camps rely on boreholes, rainwater harvesting, or trucked-in water rather
            than a treated municipal supply, which adds more variability rather than less. The
            practical rule that covers all of this: stick to bottled or lodge-filtered water,
            and use it for brushing your teeth too, not just drinking.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What's Actually Safe: A Quick Reference
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Source</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Verdict</th>
                  <th className="py-2 font-semibold text-gray-900">Note</th>
                </tr>
              </thead>
              <tbody>
                {safetyTable.map((row) => (
                  <tr key={row.item} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.item}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.verdict}</td>
                    <td className="py-2 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-148949388746.jpg"
            alt="Fresh fruit and cooked meal served at a safari lodge"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            On Game Drives: Staying Hydrated Safely
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Your guide typically carries sealed bottled water for the duration of a game drive —
            check that the seal is intact before drinking, a simple habit that covers you anywhere
            you travel, not just Kenya. Never drink from rivers, lakes, or swamps you might pass on
            a drive, even if the water looks clear; these are shared with wildlife, including
            hippos and crocodiles in many popular spots, and carry a genuinely high contamination
            risk. Refilling a reusable bottle from lodge-filtered water rather than buying fresh
            plastic bottles each day is a good middle ground if you're trying to cut down on
            waste.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Food: What to Watch and What Not to Worry About
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Reputable lodges cater specifically to international travelers and generally hold to
            high food safety standards — hot, freshly cooked meals at your camp are low-risk, and
            most upscale properties employ chefs trained specifically in food safety. The larger
            variability sits outside that controlled environment: raw or undercooked meat, unwashed
            or unpeeled produce, and street food from vendors with less consistent hygiene
            practices. None of this means avoiding local food entirely — it means favoring
            busy, visibly clean spots with high turnover if you do venture off the lodge menu, the
            same rule that applies to street food almost anywhere in the world.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            If You Do Get an Upset Stomach
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Traveler's diarrhea is the most common issue, and it's usually mild and self-limiting.
            Tell your guide or lodge manager promptly rather than trying to push through a full
            day's activity — camps deal with this regularly and know how to help. Stay hydrated
            with water or an oral rehydration solution, eat light and bland if you're eating at
            all, and avoid alcohol and coffee until you're feeling better. If symptoms include a
            high fever, persist for more than a couple of days, or come with blood, get medical
            attention rather than waiting it out — most camps can direct you to the nearest clinic
            quickly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common slip isn't drinking a full glass of tap water — it's the small,
            easy-to-miss moments: brushing teeth with tap water out of habit, accepting ice at a
            roadside stop, or assuming a "flask of water" at the lodge is the same as a sealed
            bottle. The rule is simple and covers almost every situation — if it isn't sealed,
            bottled, or explicitly confirmed as filtered by your lodge, treat it with the same
            caution as tap water.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Can I drink tap water in Nairobi?</h3>
              <p className="text-gray-700 leading-relaxed">
                It's best avoided. Municipal treatment exists, but aging infrastructure and
                inconsistent supply mean it's not reliably safe for visitors — stick to bottled or
                filtered water.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is ice safe to have in drinks on safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                Generally yes at reputable lodges, since it's typically made from boiled or
                filtered water. At budget venues or street vendors, it's safer to skip it.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Do lodges provide safe drinking water automatically?</h3>
              <p className="text-gray-700 leading-relaxed">
                Most reputable lodges and camps supply bottled or filtered water as standard, so it
                usually isn't something you need to arrange yourself.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is street food safe to try in Kenya?</h3>
              <p className="text-gray-700 leading-relaxed">
                It carries more variability than lodge meals. Stick to busy, visibly clean vendors
                with high turnover if you want to try it.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/vaccinations-for-kenya-yellow-fever-and-more" className="text-yellow-600 hover:text-yellow-700 font-semibold">Vaccinations for Kenya: Yellow Fever and What Else You Need</Link></li>
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria Prevention: Tablets, Repellents and Risk Areas</Link></li>
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
          </ul>
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
