import Image from "next/image"
import Link from "next/link"

const quickFactsTable = [
  { fact: "Known for", detail: "Walking and cycling safaris, dramatic gorge scenery" },
  { fact: "Predators", detail: "Minimal — one of the few parks safe for unguided walking in places" },
  { fact: "Access", detail: "About 1.5-2 hour drive from Nairobi, near Lake Naivasha" },
  { fact: "Notable feature", detail: "Inspired the landscapes of Disney's The Lion King" },
]

export default function HellsGateArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80"
          alt="Dramatic gorge and cliff scenery at Hell's Gate National Park"
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
            Hell's Gate: Kenya's Walking Safari Park
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Hell's Gate flips the usual safari script. With few resident predators, this is one of
          the rare Kenyan parks where visitors can walk or cycle freely through dramatic gorges and
          towering cliffs, rather than staying confined to a vehicle for the entire visit.
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
            Why You Can Walk Here
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Hell's Gate has very few large predators, which is precisely why walking and cycling
            are allowed within much of the park — something almost unheard of elsewhere in Kenya.
            Visitors can hike through Hell's Gate Gorge on foot, guided or self-directed in some
            sections, past towering red cliffs and volcanic rock formations, while still spotting
            zebra, giraffe, buffalo, and antelope along the way.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=1200&q=80"
            alt="Hikers walking through Hell's Gate Gorge"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            A Lion King Connection
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Hell's Gate's dramatic cliffs and gorges are widely cited as an inspiration for the
            landscapes in Disney's The Lion King, giving the park a bit of extra novelty appeal for
            travelers familiar with the film. Whether or not the connection is entirely literal, the
            scenery genuinely lives up to the comparison.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Bring sturdy shoes and water — walking here is genuinely active, not a casual stroll.</li>
            <li>Bicycle rentals are available at the park entrance for a different way to cover ground.</li>
            <li>Combine with Lake Naivasha, just nearby, for a full day out from Nairobi.</li>
            <li>A guide is recommended for the gorge hike, even though some open areas allow unguided walking.</li>
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
