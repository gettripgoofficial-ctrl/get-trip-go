import Image from "next/image"
import Link from "next/link"

const quickFactsTable = [
  { fact: "Known for", detail: "Last two northern white rhinos on Earth, chimpanzee sanctuary" },
  { fact: "Type", detail: "Private, not-for-profit conservancy" },
  { fact: "Access", detail: "About 3-4 hour drive from Nairobi, or short flight" },
  { fact: "Unique activities", detail: "Rhino tracking on foot, chimp sanctuary visits, night drives" },
]

export default function OlPejetaArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1552083375-1447ce886485?w=1600&q=80"
          alt="Rhino grazing at Ol Pejeta Conservancy"
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
            Ol Pejeta Conservancy: A Model for Conservation
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Ol Pejeta is home to one of the most quietly significant stories in African conservation:
          the last two northern white rhinos on the planet, both female, living under armed
          protection within the conservancy's borders. It's also one of East Africa's most
          effective working examples of conservation funded directly by tourism.
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
            The Last Northern White Rhinos
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            With no male northern white rhino left alive, the subspecies is functionally extinct in
            the wild — but scientists at Ol Pejeta are working on advanced reproductive techniques
            using preserved genetic material, in partnership with international research
            institutions, to attempt to save the subspecies. Visiting is a rare chance to
            understand a conservation story playing out in real time, not just read about it
            afterward.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1584844115436-473887b1e6f5?w=1200&q=80"
            alt="Black rhino in the grasslands of Ol Pejeta"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            More Than Rhinos
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Ol Pejeta also hosts Kenya's only chimpanzee sanctuary, home to chimps rescued from
            conflict zones and illegal trafficking elsewhere in Africa — chimpanzees aren't native
            to Kenya, so this is a rehabilitation center rather than a wild population. The
            conservancy also has strong Big Five populations, including a healthy lion count, and
            offers activities like guided rhino tracking on foot that aren't available at most
            other parks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Book a specific visit to the northern white rhinos in advance — access is controlled for their protection.</li>
            <li>The chimp sanctuary has separate visiting hours from general game drives — check the schedule ahead.</li>
            <li>Ol Pejeta pairs naturally with Samburu or the Aberdares on a northern Kenya circuit.</li>
            <li>Night drives and rhino tracking on foot are both offered here — ask your camp to arrange them in advance.</li>
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
