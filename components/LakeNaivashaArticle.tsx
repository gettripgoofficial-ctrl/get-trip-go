import Image from "next/image"
import Link from "next/link"

const quickFactsTable = [
  { fact: "Known for", detail: "Boat safaris, hippos, Crescent Island walking safari" },
  { fact: "Water type", detail: "Freshwater — one of the few Rift Valley lakes that isn't a soda lake" },
  { fact: "Access", detail: "About 1.5-2 hour drive from Nairobi" },
  { fact: "Best paired with", detail: "Lake Nakuru or Hell's Gate for a Rift Valley circuit" },
]

export default function LakeNaivashaArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1600&q=80"
          alt="Boat on Lake Naivasha with hippos nearby"
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
            Lake Naivasha: Boat Safaris and Hippos
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Lake Naivasha offers something most Kenyan safari destinations don't: wildlife viewing
          from the water. As one of the Rift Valley's only freshwater lakes, it supports a dense
          hippo population and rich birdlife, best explored by boat rather than the usual vehicle
          game drive.
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
            Boat Safaris: A Different Perspective
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Naivasha's boat safaris get you close to hippo pods, fish eagles, and a wide variety of
            waterbirds, all from the safety and stillness of the water rather than a moving vehicle.
            It's a slower, quieter kind of wildlife viewing, and a welcome change of pace for
            travelers midway through a longer safari circuit.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
            alt="Wildlife grazing on Crescent Island near Lake Naivasha"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Crescent Island: Walk Among Wildlife
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Crescent Island, a private sanctuary on the lake with no predators present, allows
            visitors to walk freely among giraffes, zebras, and antelope — one of the few places in
            Kenya where an unguided walking safari like this is possible. It's a memorable, low-key
            addition to a Naivasha stop and works well for families with children.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Book boat safaris for early morning or late afternoon, when bird activity is highest.</li>
            <li>Bring a hat and sunscreen — there's little shade on the water.</li>
            <li>Naivasha's proximity to Nairobi makes it an easy first or last stop on a longer itinerary.</li>
            <li>Combine with nearby Hell's Gate for a walking or cycling safari on the same day.</li>
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
