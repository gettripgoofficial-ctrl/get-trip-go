import Image from "next/image"
import Link from "next/link"

const trimesterTable = [
  { trimester: "First (weeks 1-12)", verdict: "Possible, often uncomfortable", note: "Morning sickness and fatigue are common; higher baseline miscarriage risk means some travelers prefer to wait" },
  { trimester: "Second (weeks 13-27)", verdict: "Generally the best window", note: "Often called the 'golden period' -- energy is back, symptoms have eased, mobility is still good" },
  { trimester: "Third (weeks 28+)", verdict: "Increasingly restricted", note: "Most airlines require a doctor's fitness-to-fly letter; many bush flights stop accepting passengers around 32-34 weeks" },
]

export default function SafariPregnancyArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-157189634984.jpg"
          alt="Pregnant traveler enjoying a view over the Kenya savanna"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Who Should Go
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Is a Kenya Safari Safe During Pregnancy
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          A safari during pregnancy isn't unusual, and plenty of expecting travelers do it
          comfortably — but the right answer depends heavily on which trimester you're in, how
          your specific pregnancy is going, and what your doctor says once they know your exact
          itinerary. This isn't a one-size-fits-all yes or no.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Best window:</span> the second trimester (13-27 weeks) — most comfortable and lowest-risk for travel generally.</li>
            <li><span className="font-semibold text-gray-900">Biggest Kenya-specific concern:</span> malaria risk, since the illness can be more severe during pregnancy.</li>
            <li><span className="font-semibold text-gray-900">Check before booking:</span> your airline's and bush-flight operator's specific week cutoffs — they vary and some require a doctor's letter well before the third trimester.</li>
            <li><span className="font-semibold text-gray-900">Non-negotiable:</span> a conversation with your OBGYN about your specific itinerary, not just "is safari safe" in the abstract.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Timing: Which Trimester Works Best
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Trimester</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Verdict</th>
                  <th className="py-2 font-semibold text-gray-900">Why</th>
                </tr>
              </thead>
              <tbody>
                {trimesterTable.map((row) => (
                  <tr key={row.trimester} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.trimester}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.verdict}</td>
                    <td className="py-2 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            The second trimester earns its "golden period" reputation for good reason — early
            nausea and exhaustion have usually passed, and the mobility limitations of a large
            third-trimester belly haven't arrived yet. It's also generally the lowest-risk window
            for travel overall, which is why most experienced safari operators and travel doctors
            point expecting travelers toward it specifically.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Airline and Bush Flight Rules
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Major international airlines flying into Nairobi typically allow travel up to around
            28-34 weeks without a medical certificate, and up to 36 weeks with one, though exact
            cutoffs vary by carrier — check your specific airline's policy rather than assuming.
            Where it gets more restrictive is the light aircraft transfers that connect Nairobi to
            remote camps in the Mara, Amboseli, or Samburu: many bush flight operators stop
            accepting pregnant passengers around 28-32 weeks regardless of what your international
            carrier allows, since smaller aircraft and rougher airstrips carry different
            considerations. Confirm this directly with your safari operator before booking, not
            just your airline.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-174185082115.jpg"
            alt="Smooth safari vehicle on a game drive in Kenya"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Malaria: The Biggest Kenya-Specific Concern
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Malaria is the health consideration that matters most for a Kenya trip specifically,
            since the illness can be more severe during pregnancy and some standard antimalarial
            medications aren't recommended for expecting travelers. This is a conversation to have
            with your doctor well before you book — they can advise on pregnancy-safe prevention
            options, or help you decide whether to adjust your itinerary toward lower-risk regions
            if malaria exposure is a significant concern for your specific pregnancy. For the
            general risk picture by region, see our{" "}
            <Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              malaria prevention guide
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Bumpy Roads and Physical Comfort
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Safari game drives on unpaved park roads can be genuinely bumpy, and this becomes more
            noticeable and less comfortable as pregnancy progresses, particularly from the second
            half onward. It doesn't typically pose a safety risk on short, controlled drives, but
            it's worth choosing camps with smoother access roads where possible, keeping game
            drives shorter, and telling your guide you'd prefer a gentler pace — a good guide will
            adjust without you needing to explain much further.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Before You Book: A Short Checklist
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Talk to your OBGYN about your specific itinerary and trimester, not travel in general.</li>
            <li>Confirm your airline's fitness-to-fly documentation requirements for your travel dates.</li>
            <li>Confirm your bush flight operator's pregnancy policy separately from your main airline.</li>
            <li>Ask your doctor about pregnancy-safe malaria prevention if your trip includes risk areas.</li>
            <li>Buy travel insurance that explicitly covers pregnancy-related care, not just standard medical evacuation.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            That last point is worth taking seriously — not every policy covers pregnancy-related
            complications by default. Our{" "}
            <Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              travel insurance guide
            </Link>{" "}
            covers what to check for before you buy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is treating this as a single yes-or-no question rather than a
            timing and logistics one. Whether a Kenya safari is a good idea during pregnancy
            depends heavily on which trimester, which specific camps and transfers are involved,
            and what your doctor says about your individual pregnancy — not a blanket rule that
            applies the same way to everyone.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What's the best trimester for a Kenya safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                The second trimester (roughly weeks 13-27) is generally considered the most
                comfortable and lowest-risk window, once early symptoms have eased and before
                mobility becomes more limited.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Can I take bush flights while pregnant?</h3>
              <p className="text-gray-700 leading-relaxed">
                Often yes earlier in pregnancy, but many operators stop accepting pregnant
                passengers around 28-32 weeks. Confirm the specific cutoff with your safari
                operator directly.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is malaria prevention different during pregnancy?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Some standard antimalarial medications aren't recommended during pregnancy,
                so this needs a specific conversation with your doctor rather than following
                general guidance.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Do I need a doctor's letter to fly to Kenya while pregnant?</h3>
              <p className="text-gray-700 leading-relaxed">
                Requirements vary by airline and typically kick in somewhere between 28-34 weeks.
                Check your specific carrier's policy well before booking.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria Prevention: Tablets, Repellents and Risk Areas</Link></li>
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
            <li><Link href="/kenya/vaccinations-for-kenya-yellow-fever-and-more" className="text-yellow-600 hover:text-yellow-700 font-semibold">Vaccinations for Kenya: Yellow Fever and What Else You Need</Link></li>
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
