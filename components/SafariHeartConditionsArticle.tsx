import Image from "next/image"
import Link from "next/link"

const conditionsTable = [
  { condition: "Heart conditions", consideration: "Avoid overexertion and extreme heat; discuss fitness to travel with your cardiologist" },
  { condition: "Diabetes", consideration: "Strict meal and medication timing needed around game drive schedules" },
  { condition: "Hypertension", consideration: "May need monitoring, since heat and activity levels can affect readings" },
  { condition: "Asthma / respiratory", consideration: "Dust and dry air on game drives can be a trigger" },
  { condition: "Severe allergies", consideration: "Confirm access to emergency medication (e.g. an EpiPen) at remote camps" },
]

export default function SafariHeartConditionsArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-177921617578.jpg"
          alt="Comfortable fly-in safari lodge suited for travelers with health conditions"
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
            Safari for People With Heart Conditions or Chronic Illness
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 7 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          A safari isn't just for the young and perfectly healthy. With the right planning —
          mainly a proper pre-travel medical consultation and a few adjustments to how you book —
          travelers managing heart conditions, diabetes, hypertension, asthma, or other chronic
          illness can enjoy Kenya safely. The preparation matters more here than for most trips,
          but it isn't a reason to rule it out.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">First step:</span> a doctor's consultation 6-8 weeks before travel, itinerary in hand.</li>
            <li><span className="font-semibold text-gray-900">Biggest single upgrade:</span> a fly-in safari over a road-based one — less physical strain, faster access to medical care.</li>
            <li><span className="font-semibold text-gray-900">Non-negotiable insurance detail:</span> check the pre-existing condition "look-back period" before you buy, not after.</li>
            <li><span className="font-semibold text-gray-900">Bring:</span> a written medical summary and your medications in original packaging, with generic names listed.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Start With a Proper Medical Consultation
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Book an appointment with your doctor 6-8 weeks before departure, and bring your actual
            itinerary rather than describing the trip in general terms — a short Nairobi stay is a
            very different medical conversation from a remote safari lodge with no clinic nearby,
            and a coastal extension carries its own separate considerations. Your doctor can review
            how well-managed your condition currently is, whether any medications or routines need
            adjusting for the heat, dust, or activity level, and whether malaria prevention is
            appropriate given your specific health profile.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Common Conditions and What to Watch For
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Condition</th>
                  <th className="py-2 font-semibold text-gray-900">Consideration</th>
                </tr>
              </thead>
              <tbody>
                {conditionsTable.map((row) => (
                  <tr key={row.condition} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium align-top">{row.condition}</td>
                    <td className="py-2 text-gray-600">{row.consideration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-157189634984.jpg"
            alt="Small aircraft used for fly-in safaris between camps"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Fly-In Safaris: Worth the Extra Cost
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Fly-in safaris, where light aircraft connect you between camps instead of long road
            transfers, meaningfully reduce physical strain compared to multi-hour drives on
            unpaved roads. They're commonly recommended specifically for travelers with mobility
            issues or chronic health concerns, and they carry a practical safety benefit too —
            faster access to medical facilities if something does come up, since you're not hours
            from the nearest airstrip by road.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Altitude: A Real Consideration for Heart and Respiratory Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Nairobi and Kenya's highlands sit at a moderate elevation that's manageable for most
            travelers, but altitude places extra demand on the cardiovascular and respiratory
            systems specifically, which matters more if you have an existing heart or lung
            condition. If your itinerary includes any higher-elevation stops, mention this
            explicitly to your doctor rather than assuming your safari won't involve altitude at
            all. For the general elevation picture across Kenya, see our{" "}
            <Link href="/kenya/altitude-sickness-in-the-kenyan-highlands" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              altitude sickness guide
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Insurance: Read the Pre-Existing Condition Clause Carefully
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            This is the detail that catches people out most often. Many policies cover
            pre-existing conditions only if they've been stable for a defined period before you
            bought the policy — commonly called the "look-back period," which typically starts
            from your first trip deposit. If you've had any health issues related to your
            condition, or a new symptom not yet formally diagnosed, during that window, it may not
            be covered. If this feels uncertain, look specifically for a policy offering a
            pre-existing condition waiver, and confirm it in writing before you rely on it. Our{" "}
            <Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              travel insurance guide
            </Link>{" "}
            covers the medical evacuation side of this in more depth.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What to Pack and Prepare
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>A written medical summary from your doctor, plus a list of medications using generic names.</li>
            <li>Copies of prescriptions, and medication in original packaging with enough spare supply for delays.</li>
            <li>Emergency contact information and proof of travel insurance, easily accessible, not buried in checked luggage.</li>
            <li>A direct question to your lodge or operator about what medical equipment and trained staff are on hand at each specific camp.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is treating this as a single "am I fit enough" question rather
            than a planning one. Whether a safari is a good idea with a chronic condition depends
            heavily on how well-managed the condition currently is, which specific camps and
            transfers are involved, and what insurance protection is actually in place — not a
            blanket rule based on the diagnosis alone. A short pre-travel consultation with your
            actual itinerary in hand answers this far more usefully than general guidance ever
            could.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Can I go on safari if I have a heart condition?</h3>
              <p className="text-gray-700 leading-relaxed">
                Often yes, with your cardiologist's clearance and some adjustments — avoiding
                overexertion and extreme heat, and considering a fly-in safari to reduce physical
                strain.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What is a travel insurance "look-back period"?</h3>
              <p className="text-gray-700 leading-relaxed">
                The window, typically starting from your first trip deposit, during which your
                pre-existing condition needs to have been stable for the insurer to cover it. Any
                related issues within that window can affect your coverage.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is a fly-in safari better for chronic health conditions?</h3>
              <p className="text-gray-700 leading-relaxed">
                Generally yes — it reduces the physical strain of long road transfers and provides
                quicker access to medical facilities if needed, compared to a fully road-based
                itinerary.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">How far in advance should I see a doctor before a safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                About 6-8 weeks before departure, with your specific itinerary in hand so the
                advice can be tailored to your actual trip rather than general guidance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
            <li><Link href="/kenya/altitude-sickness-in-the-kenyan-highlands" className="text-yellow-600 hover:text-yellow-700 font-semibold">Altitude Sickness in the Kenyan Highlands</Link></li>
            <li><Link href="/kenya/safari-first-aid-what-to-pack" className="text-yellow-600 hover:text-yellow-700 font-semibold">Safari First Aid: What to Pack in Your Kit</Link></li>
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
