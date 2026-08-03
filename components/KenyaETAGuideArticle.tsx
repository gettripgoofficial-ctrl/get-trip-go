import Image from "next/image"
import Link from "next/link"

const etaFacts = [
  { fact: "Who needs it", detail: "Almost all nationalities, including infants — check the official list for exceptions" },
  { fact: "Cost", detail: "$30-32.50 USD, applied only through the official portal" },
  { fact: "Validity", detail: "Single entry, valid up to 90 days" },
  { fact: "Processing time", detail: "Often within 2-3 business days; apply earlier in peak season" },
  { fact: "Required documents", detail: "Passport, travel dates, confirmed accommodation details" },
]

export default function KenyaETAGuideArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
          alt="Passport and travel documents ready for a Kenya trip"
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
            Kenya eTA Guide: How to Apply, Cost and Processing Time
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 4 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Kenya replaced its old visa-on-arrival and eVisa system with a mandatory Electronic
          Travel Authorization (eTA) in January 2024. Nearly every visitor now needs one before
          boarding a flight, and getting it wrong — using an unofficial site, applying too late,
          or providing tentative accommodation details — is one of the most common reasons
          travelers get delayed at check-in.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Where:</span> apply only at the official portal, etakenya.go.ke.</li>
            <li><span className="font-semibold text-gray-900">Cost:</span> $30-32.50 USD — third-party sites often charge more.</li>
            <li><span className="font-semibold text-gray-900">Timing:</span> apply at least 3 days ahead, ideally 2-3 weeks before travel.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            How to Apply
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The application is entirely online through the official Kenyan government portal.
            You'll need your passport details, travel dates, and confirmed — not tentative —
            accommodation information for your stay. Applying earlier than the minimum gives you
            room to fix any errors before your flight, which matters most during the busy
            July-October season when processing can slow down.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Be careful of third-party websites that mimic the official portal and charge a
            significant markup. The only legitimate source for a Kenya eTA is the government's own
            site — bookmark it directly rather than searching for it each time.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1200&q=80"
            alt="Airport departure boards showing international flights"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What You Need to Know
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Detail</th>
                  <th className="py-2 font-semibold text-gray-900">Info</th>
                </tr>
              </thead>
              <tbody>
                {etaFacts.map(row => (
                  <tr key={row.fact} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.fact}</td>
                    <td className="py-2 text-gray-600">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            East African Community Exception
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Citizens of East African Community (EAC) member states can enter Kenya using a
            national ID card and don't need to apply for an eTA. If you're unsure whether this
            applies to you, check your specific country's status before assuming either way.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Print your approved eTA and carry a physical copy alongside the digital one.</li>
            <li>Double-check your accommodation details match your actual booking before submitting.</li>
            <li>Apply well before peak season travel dates, when processing queues can lengthen.</li>
            <li>Overstaying your eTA can result in fines or complications on future entries — track your departure date.</li>
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
