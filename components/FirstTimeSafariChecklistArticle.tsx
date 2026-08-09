import Image from "next/image"
import Link from "next/link"

const timeline = [
  { when: "3-6 months before", tasks: "Book flights, lodges, and confirm your itinerary; apply for Kenya eTA if travel dates are close" },
  { when: "1-2 months before", tasks: "Get travel vaccinations, buy travel insurance, start packing list" },
  { when: "2-3 weeks before", tasks: "Apply for Kenya eTA if not done, confirm yellow fever certificate if required" },
  { when: "1 week before", tasks: "Print documents, notify your bank of travel, weigh your luggage" },
  { when: "Day of departure", tasks: "Carry printed eTA, yellow fever certificate, and insurance details in hand luggage" },
]

export default function FirstTimeSafariChecklistArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-151693402474.jpg"
          alt="Traveler preparing for a first Kenya safari trip"
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
            First-Time Safari Checklist
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          A first safari involves more moving pieces than most trips — entry requirements, health
          precautions, and gear you might not own yet. None of it is complicated on its own, but
          it's easy to leave something until the last minute. Working backward from your departure
          date is the simplest way to make sure nothing gets missed.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Start early:</span> book flights and lodges 3-6 months ahead, especially in peak season.</li>
            <li><span className="font-semibold text-gray-900">eTA:</span> apply at least 3 days before travel, ideally 2-3 weeks.</li>
            <li><span className="font-semibold text-gray-900">Health:</span> check vaccination requirements 1-2 months out, not the week before.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Before You Book
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Decide on your rough budget tier and trip length first — these two choices shape
            everything else, from which parks make sense to how much flying versus driving you'll
            do. If you're traveling during peak season (July-October), book camps and light
            aircraft seats as early as possible, since well-known properties fill up six to twelve
            months in advance.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-148949388746.jpg"
            alt="Passport and travel documents laid out for a trip"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Entry Requirements Aren't Optional
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kenya requires nearly all visitors to hold an approved eTA (Electronic Travel
            Authorization) before boarding — there's no visa-on-arrival option anymore. Apply only
            through the official portal, at least a few days ahead, though earlier is safer during
            busy periods. A yellow fever certificate is only required if you're arriving from or
            transiting through a risk country, so check this against your actual routing rather
            than assuming.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Countdown Timeline
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">When</th>
                  <th className="py-2 font-semibold text-gray-900">What to Do</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map(row => (
                  <tr key={row.when} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.when}</td>
                    <td className="py-2 text-gray-600">{row.tasks}</td>
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
            <li>Photograph or scan every key document as a backup in case originals are lost.</li>
            <li>Confirm your accommodation booking is "confirmed," not "pending" — the eTA application may ask for this.</li>
            <li>Check your phone plan for international roaming or plan to buy a local SIM on arrival.</li>
            <li>Bring a printed itinerary in case you need to show it at any point during entry.</li>
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
