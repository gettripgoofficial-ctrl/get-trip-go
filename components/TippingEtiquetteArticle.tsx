import Image from "next/image"
import Link from "next/link"

const tippingTable = [
  { role: "Safari guide/driver", amount: "$15-20 USD per person, per day" },
  { role: "Camp/lodge staff (pooled)", amount: "$10-15 USD per person, per day" },
  { role: "Porters", amount: "$1-2 USD per bag" },
  { role: "Private drivers (non-safari)", amount: "10% of the fare, if not included" },
]

export default function TippingEtiquetteArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1600&q=80"
          alt="Safari guide and guests at a lodge"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Travel Tips
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Tipping Etiquette: Guides, Drivers and Lodge Staff
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 4 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Tipping in Kenya's safari industry is expected but not obligatory, and it makes up a
          meaningful part of many guides' and staff members' income. Knowing rough guidelines ahead
          of time makes the whole process far less awkward than trying to work it out on the spot.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Guide/driver:</span> $15-20 USD per person, per day.</li>
            <li><span className="font-semibold text-gray-900">Lodge staff:</span> $10-15 USD per person, per day, usually pooled.</li>
            <li><span className="font-semibold text-gray-900">Currency:</span> USD cash is widely accepted and preferred for tips.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Who You'll Typically Tip
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Your safari guide or driver is the person you'll tip most directly, usually at the end
            of your stay or trip. Many camps also maintain a communal staff tip box covering
            housekeeping, kitchen staff, and general camp team members, which is a simpler way to
            acknowledge everyone behind the scenes rather than tipping each person individually.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=80"
            alt="Lodge staff preparing a meal for guests"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Suggested Amounts
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Role</th>
                  <th className="py-2 font-semibold text-gray-900">Suggested Amount</th>
                </tr>
              </thead>
              <tbody>
                {tippingTable.map(row => (
                  <tr key={row.role} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.role}</td>
                    <td className="py-2 text-gray-600">{row.amount}</td>
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
            <li>Bring small USD bills specifically for tipping — breaking large notes at camps can be difficult.</li>
            <li>Ask your operator in advance if tips are pooled or given individually, since practices vary by camp.</li>
            <li>Tipping is customary but not mandatory — adjust based on service quality as you would anywhere else.</li>
            <li>Many camps provide tip envelopes at checkout, which is the easiest way to hand tips over discreetly.</li>
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
