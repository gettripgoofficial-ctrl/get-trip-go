import Image from "next/image"
import Link from "next/link"

const quickFactsTable = [
  { fact: "Known for", detail: "Rhino sanctuary, flamingo populations, compact size" },
  { fact: "Size", detail: "Roughly 188 km² — one of Kenya's smallest major parks" },
  { fact: "Access", detail: "About 3-hour drive from Nairobi" },
  { fact: "Best combined with", detail: "Other Rift Valley lakes like Naivasha" },
]

export default function LakeNakuruArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-1549366021-9.jpg"
          alt="Lake Nakuru shoreline with wildlife"
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
            Lake Nakuru National Park: Birds and Rhinos
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Lake Nakuru packs an unusual combination into a small, easily driveable park — a soda
          lake once famous for enormous flamingo flocks, and one of Kenya's most successful rhino
          sanctuaries, all within a compact enough area to explore thoroughly in a single day.
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
            The Flamingo Story
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lake Nakuru was once famous for flamingo flocks numbering in the hundreds of thousands,
            drawn by the algae that thrives in its alkaline waters. Water levels have fluctuated
            significantly in recent years, which has shifted flamingo numbers considerably — some
            seasons see large flocks, others far fewer, as the birds move between Rift Valley lakes
            depending on conditions. It's worth checking recent conditions before setting
            expectations.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-savanna-landscape.jpg"
            alt="Rhino grazing near Lake Nakuru"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            A Rhino Sanctuary Success Story
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lake Nakuru is fully fenced, which has made it one of Kenya's most effective rhino
            protection zones — both black and white rhinos are regularly spotted here, often at
            closer range than in larger, unfenced parks. This makes it a strong choice for
            travelers specifically hoping to see rhinos without the wider search a bigger park
            might require.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>The park's small size makes it ideal for a day trip from Nairobi or a short overnight stop.</li>
            <li>Combine with Lake Naivasha for a fuller Rift Valley lakes circuit.</li>
            <li>Check recent flamingo reports before your trip — numbers vary significantly by season and year.</li>
            <li>The park's fenced boundary also means good odds for leopard and lion sightings alongside rhinos.</li>
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
