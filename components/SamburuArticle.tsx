import Image from "next/image"
import Link from "next/link"

const specialFive = [
  { animal: "Grevy's zebra", detail: "Larger, more narrowly striped than the common plains zebra" },
  { animal: "Reticulated giraffe", detail: "Sharp, geometric coat pattern distinct from the Masai giraffe further south" },
  { animal: "Somali ostrich", detail: "Blue-grey legs and neck, found only in this drier northern region" },
  { animal: "Beisa oryx", detail: "Striking straight horns and bold facial markings" },
  { animal: "Gerenuk", detail: "Long-necked antelope that stands on its hind legs to browse" },
]

export default function SamburuArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-151693402474.jpg"
          alt="Dry, rugged landscape of Samburu National Reserve"
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
            Samburu: The Special Five You Won't See Elsewhere
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Samburu sits in Kenya's drier, more rugged north, and its distance from the classic
          circuit means most travelers never make it here — which is exactly why its wildlife feels
          different. Alongside the usual predators, Samburu is home to five species adapted
          specifically to this arid landscape and rarely seen further south.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">The Special Five:</span> Grevy's zebra, reticulated giraffe, Somali ostrich, beisa oryx, gerenuk.</li>
            <li><span className="font-semibold text-gray-900">Best for:</span> travelers who've already done the Mara and want something different.</li>
            <li><span className="font-semibold text-gray-900">Access:</span> a short flight from Nairobi, often combined with a northern circuit.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Meet the Special Five
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            These five species have adapted specifically to Samburu's arid, semi-desert conditions,
            and each looks distinctly different from its southern-Kenya cousin. The gerenuk is
            probably the most striking — a slender antelope that stands upright on its hind legs to
            reach high branches most other browsers can't.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-1547721064-d.jpg"
            alt="Reticulated giraffe with distinctive geometric coat pattern"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Species Guide
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Animal</th>
                  <th className="py-2 font-semibold text-gray-900">What Makes It Distinct</th>
                </tr>
              </thead>
              <tbody>
                {specialFive.map(row => (
                  <tr key={row.animal} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.animal}</td>
                    <td className="py-2 text-gray-600">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Samburu works well as an add-on to a Mara or Amboseli trip, rather than a standalone destination.</li>
            <li>The Ewaso Nyiro River running through the reserve draws elephants, crocodiles, and predators reliably.</li>
            <li>Guides here are often skilled at spotting the Special Five specifically — mention your interest early in the drive.</li>
            <li>Temperatures run hotter than in higher-elevation parks — pack accordingly.</li>
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
