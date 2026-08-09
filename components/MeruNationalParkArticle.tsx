import Image from "next/image"
import Link from "next/link"

const quickFactsTable = [
  { fact: "Known for", detail: "Rhino sanctuary, rivers and lush terrain, very low visitor numbers" },
  { fact: "Notable history", detail: "Setting of the book and film Born Free" },
  { fact: "Access", detail: "About 1 hour flight from Nairobi, or a longer scenic drive" },
  { fact: "Best for", detail: "Travelers wanting a genuinely uncrowded park" },
]

export default function MeruNationalParkArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-151642612207.jpg"
          alt="Lush river landscape of Meru National Park"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Parks &amp; Reserves
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Meru National Park: Kenya's Quietest Big Game Country
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Meru rarely makes a first-time visitor's shortlist, and that's exactly what makes it
          worth considering. Lush, river-fed, and home to a strong rhino population, it delivers
          genuine Big Game country with a fraction of the vehicle traffic found in Kenya's more
          famous parks.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            {quickFactsTable.map(row => (
              <li key={row.fact}><span className="font-semibold text-gray-900">{row.fact}:</span> {row.detail}</li>
            ))}
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Born Free Country
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Meru is where the real-life events behind Born Free took place — the story of Elsa the
            lioness, raised and eventually returned to the wild by conservationists George and Joy
            Adamson. That history still shapes the park's identity, and it adds a layer of
            storytelling that pure wildlife-viewing parks don't always have.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-savanna-landscape.jpg"
            alt="Rhino in the grasslands of a Kenyan rhino sanctuary"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Lush, River-Fed Terrain
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Unlike the dry plains of Tsavo or Amboseli, Meru is crossed by numerous rivers and
            streams, giving it noticeably greener, denser vegetation year-round. A fenced rhino
            sanctuary within the park protects a growing black and white rhino population, while
            the wider park supports elephants, lions, leopards, and healthy numbers of plains game.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Meru suits travelers who've done a first safari already and want a quieter, more off-the-beaten-path experience.</li>
            <li>Camps here are fewer and further between — book ahead, as capacity is limited.</li>
            <li>Combine with nearby Samburu for a northern Kenya circuit away from the main tourist routes.</li>
            <li>The denser vegetation means game viewing can require more patience than in open-plains parks.</li>
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
