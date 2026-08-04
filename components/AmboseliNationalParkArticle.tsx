import Image from "next/image"
import Link from "next/link"

const quickFactsTable = [
  { fact: "Best for", detail: "Elephants, Kilimanjaro backdrop photography" },
  { fact: "Size", detail: "Roughly 392 km² — one of Kenya's smaller major parks" },
  { fact: "Best time to visit", detail: "Dry season (June-October, January-February) for clear Kilimanjaro views" },
  { fact: "Nearest access", detail: "About 1 hour flight from Nairobi, or a 4-5 hour drive" },
]

export default function AmboseliNationalParkArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
          alt="Elephants walking across Amboseli with Kilimanjaro in the background"
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
            Amboseli National Park: Complete Guide
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 8 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Amboseli is where Africa's most photographed backdrop meets some of its most reliable
          elephant viewing. Mount Kilimanjaro rises just across the border in Tanzania, and on a
          clear morning, herds of elephants moving across open plains with the snow-capped peak
          behind them produce one of the most recognizable images in African travel.
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
            Why Amboseli's Elephants Stand Out
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Amboseli is home to some of Africa's last "super tuskers" — elephants with tusks so
            large they nearly touch the ground, a genetic trait that's become increasingly rare
            elsewhere due to historical poaching. The park's long-running elephant research program,
            one of the longest continuous studies of any wild elephant population, means individual
            elephants here are often well known and closely monitored by researchers and guides
            alike.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1552083375-1447ce886485?w=1200&q=80"
            alt="Amboseli swamp landscape with wildlife grazing"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Getting the Kilimanjaro Shot
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kilimanjaro is frequently wrapped in cloud, especially in the afternoon, so early
            morning game drives offer the best odds of a clear view. Dry season months — roughly
            June through October, and again January through February — generally provide the
            clearest skies overall, though there's no guarantee on any single day.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Beyond Elephants
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Amboseli's swamps, fed by underground water from Kilimanjaro's melting snow, stay green
            and productive even in the dry season, drawing buffalo, hippos, and abundant birdlife
            alongside the elephants. The park is compact enough to cover thoroughly in two to three
            days without feeling rushed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Book early morning game drives specifically for the best chance at clear Kilimanjaro views.</li>
            <li>Dust can be significant in the dry season — pack a scarf or buff for game drives.</li>
            <li>Amboseli pairs naturally with the Masai Mara or Tsavo on a multi-park itinerary.</li>
            <li>Some camps sit just outside the park boundary, offering similar views with lower fees.</li>
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
