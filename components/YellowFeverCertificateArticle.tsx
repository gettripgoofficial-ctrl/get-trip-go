import Image from "next/image"
import Link from "next/link"

export default function YellowFeverCertificateArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1600&q=80"
          alt="Vaccination record and travel documents"
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
            Do You Need a Yellow Fever Certificate to Enter Kenya
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 4 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Kenya's yellow fever requirement confuses a lot of travelers, mainly because it depends
          on where you're arriving from, not just whether you're visiting Kenya. Understanding this
          distinction early avoids an awkward conversation at the airport.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Required if:</span> arriving from or transiting through a yellow-fever-risk country.</li>
            <li><span className="font-semibold text-gray-900">Not required if:</span> flying directly from a country with no yellow fever risk.</li>
            <li><span className="font-semibold text-gray-900">When to check:</span> always verify against your exact routing, not just your home country.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why It Depends on Your Route
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kenya requires proof of yellow fever vaccination from travelers arriving from countries
            where the disease is present, as a way of preventing its spread. This means the
            requirement is about your itinerary, not your nationality — a traveler connecting
            through a risk-country airport, even briefly, may need the certificate, while someone
            flying direct from a non-risk country typically won't.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
            alt="Medical professional administering a vaccination"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            How to Check If You Need One
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The safest approach is to check the current list of yellow-fever-risk countries against
            every leg of your journey, including layovers, not just your final departure point.
            Requirements can change, so confirm this close to your travel dates rather than relying
            on information from a previous trip.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Get vaccinated at least 10 days before travel — the certificate isn't valid immediately after the shot.</li>
            <li>Carry the physical certificate, not just a photo of it, when required.</li>
            <li>Check requirements for every layover country on your route, not just your origin.</li>
            <li>The vaccination itself is valid for life once given, so keep the certificate for future trips.</li>
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
