import Image from "next/image"
import Link from "next/link"

const coverageTable = [
  { item: "Emergency medical treatment", why: "Private hospital care in Nairobi isn't cheap, and standard policies sometimes cap it too low", minimum: "USD 100,000–500,000" },
  { item: "Medical evacuation", why: "A remote conservancy to a Nairobi hospital can run USD 15,000–40,000 by air", minimum: "USD 200,000–500,000, unlimited preferred" },
  { item: "Repatriation", why: "Getting you home after treatment is a separate cost from getting you to hospital", minimum: "Included in most comprehensive plans" },
  { item: "Adventure activity cover", why: "Game drives, hot air ballooning, and walking safaris are sometimes excluded by default", minimum: "Confirm explicitly, in writing" },
  { item: "Trip cancellation", why: "Non-refundable lodge deposits and park fees add up fast", minimum: "100% of prepaid trip cost" },
]

export default function TravelInsuranceSafariArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-152380500934.jpg"
          alt="Small aircraft on a remote airstrip near a Kenya safari camp"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Health &amp; Safety
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Travel Insurance for Safari: What It Should Cover
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          A safari isn't a city break, and the insurance policy that covers a European holiday
          often has gaps that matter a lot more once you're in the Masai Mara. The single biggest
          risk isn't the trip cost — it's what happens if you need to get from a remote camp to a
          hospital in a hurry.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Priority #1:</span> medical evacuation coverage — this matters more than trip cancellation for most safaris.</li>
            <li><span className="font-semibold text-gray-900">Minimum to look for:</span> USD 200,000+ in evacuation cover, ideally unlimited.</li>
            <li><span className="font-semibold text-gray-900">Check explicitly:</span> game drives, hot air ballooning, and walking safaris are sometimes excluded as "adventure activities."</li>
            <li><span className="font-semibold text-gray-900">Worth adding:</span> an AMREF Flying Doctors membership (~USD 25–50) as a dedicated evacuation safety net alongside your main policy.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Medical Evacuation Is the One That Matters Most
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Outside Nairobi, quality medical care thins out fast. A serious injury or illness at a
            remote conservancy in the Mara, Amboseli, or Samburu doesn't mean a short ambulance
            ride — it means an air evacuation to a Nairobi hospital, which can cost USD 15,000 to
            40,000 depending on distance and urgency. If your policy caps evacuation at a low
            figure, or excludes "remote or difficult-to-access areas" in the fine print, you could
            be left covering that difference yourself at the worst possible moment.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This is different from repatriation, which is the separate cost of getting you home
            afterward — comprehensive policies typically bundle both, but it's worth confirming
            rather than assuming.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Coverage Checklist
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Coverage</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Why it matters</th>
                  <th className="py-2 font-semibold text-gray-900">What to look for</th>
                </tr>
              </thead>
              <tbody>
                {coverageTable.map((row) => (
                  <tr key={row.item} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.item}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.why}</td>
                    <td className="py-2 text-gray-600">{row.minimum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-148949388746.jpg"
            alt="Safari vehicle on a remote track in a Kenya conservancy"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            The "Adventure Activity" Trap
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Standard travel insurance is built around conventional travel — flights, hotels,
            sightseeing — and many policies quietly exclude "adventure" or "hazardous" activities
            by default. On a Kenya itinerary, that can technically include game drives, hot air
            ballooning over the Mara, or a walking safari. Before you buy, get a written list of
            covered activities from the insurer and check it against your actual itinerary line by
            line, rather than assuming a "safari-friendly" label covers everything you've booked.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            AMREF Flying Doctors: A Worthwhile Add-On
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            AMREF Flying Doctors has been East Africa's primary air evacuation service for decades,
            covering Kenya, Tanzania, Uganda, Burundi, and Rwanda. Their tourist membership costs
            roughly USD 25–55 for 30 days and covers the emergency flight from a remote airstrip to
            a hospital. It's important to know what it isn't: it's transport only, not medical
            insurance, so it works as a supplement to your main policy rather than a replacement
            for it. Many safari travelers buy both — a comprehensive policy for the medical costs,
            and AMREF specifically to guarantee the evacuation flight itself.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Trip Cancellation: The Secondary Priority
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Between flights, lodge deposits, park fees, and permits, a Kenya safari often involves
            thousands of dollars in non-refundable costs booked well in advance. Trip cancellation
            cover reimburses these if you have to cancel or cut the trip short for a covered
            reason — typically illness or injury to you or a close family member, and sometimes
            specific events like job loss. It matters, but for a safari specifically, it's worth
            treating as the second priority behind medical evacuation, not the first thing you
            compare policies on.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Before You Buy: Three Things to Check
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Save the 24-hour emergency assistance number before you travel, not once you're already at camp trying to find a signal.</li>
            <li>If you have a pre-existing condition, confirm the disclosure process with the insurer before buying, not after a claim.</li>
            <li>Check whether evacuation requires prior authorization from the insurer, and how that works from a location with limited connectivity.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is buying a generic policy — through an airline checkout page
            or a credit card benefit — and assuming it covers a safari the same way it covers a
            beach holiday. These policies are built for conventional travel and routinely fall
            short exactly where a safari needs the most protection: evacuation limits and
            adventure-activity exclusions. A policy that looks comprehensive on price alone can
            still leave the one gap that actually matters unaddressed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What's the single most important coverage for a Kenya safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                Medical evacuation coverage. A remote-area air evacuation to Nairobi can cost
                USD 15,000–40,000, and standard policies often cap this too low or exclude remote
                areas entirely.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Does my regular travel insurance cover a safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                Not always. Many standard policies exclude "adventure" or "hazardous" activities by
                default, which can technically include game drives, ballooning, or walking
                safaris — always confirm the covered-activities list against your itinerary.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is AMREF Flying Doctors a replacement for travel insurance?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. AMREF covers the emergency evacuation flight itself, not medical treatment
                costs — it's meant to pair with a comprehensive travel insurance policy, not
                replace one.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">How much medical coverage should I look for?</h3>
              <p className="text-gray-700 leading-relaxed">
                Most safari-specific guidance recommends at least USD 100,000 in medical expense
                coverage and USD 200,000+ in evacuation coverage, with unlimited preferred where
                affordable.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/vaccinations-for-kenya-yellow-fever-and-more" className="text-yellow-600 hover:text-yellow-700 font-semibold">Vaccinations for Kenya: Yellow Fever and What Else You Need</Link></li>
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria Prevention: Tablets, Repellents and Risk Areas</Link></li>
            <li><Link href="/kenya/is-kenya-safe-for-tourists" className="text-yellow-600 hover:text-yellow-700 font-semibold">Is Kenya Safe for Tourists? What You Should Know</Link></li>
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
