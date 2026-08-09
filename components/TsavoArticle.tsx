import Image from "next/image"
import Link from "next/link"

const quickFactsTable = [
  { fact: "Size", detail: "Roughly 22,000 km² combined (Tsavo East + West) — Kenya's largest protected area" },
  { fact: "Known for", detail: "Red-dust elephants, vast open wilderness, fewer vehicles" },
  { fact: "Split", detail: "Tsavo East (open plains) and Tsavo West (hillier, more varied terrain)" },
  { fact: "Access", detail: "About 45 min flight from Nairobi, or 4-5 hour drive" },
]

export default function TsavoArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-1552083375-1.jpg"
          alt="Vast open plains of Tsavo National Park"
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
            Tsavo: Kenya's Largest and Wildest Park
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 7 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Tsavo is where Kenya's safari scene feels most genuinely wild — a park so large that
          entire days of driving barely cover a fraction of it, and elephants turn a distinctive
          rust-red from dusting themselves with the local soil. It's less polished than the Mara,
          and that's exactly its appeal.
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
            Two Parks in One
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Tsavo is split into Tsavo East and Tsavo West, technically separate parks though often
            treated as one destination. Tsavo East is flatter and drier, known for its open plains
            and large elephant herds. Tsavo West has more varied terrain — hills, natural springs,
            and volcanic features — along with denser vegetation that makes for different, closer-
            range wildlife encounters.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-157189634984.jpg"
            alt="Finch Hattons style luxury camp built around natural springs in Tsavo West"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Fewer Visitors Actually Go
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Tsavo's sheer size means wildlife is more spread out than in a compact park like the
            Mara, so sightings can require more patience. In exchange, you'll typically share those
            sightings with far fewer vehicles, and the sense of scale — driving for hours through
            genuinely untouched wilderness — is something smaller parks simply can't replicate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Plan for longer distances between sightings than you would in smaller, denser parks.</li>
            <li>Tsavo pairs well with a coastal extension to Diani or Mombasa, given its southern location.</li>
            <li>Tsavo West's Mzima Springs offers a rare chance to view hippos and fish underwater from a viewing chamber.</li>
            <li>Roads can be rough in places — factor in extra travel time, especially in the wet season.</li>
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
