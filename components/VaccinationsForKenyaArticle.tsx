import Image from "next/image"
import Link from "next/link"

const vaccineTable = [
  { vaccine: "Yellow Fever", required: "Only if arriving from/transiting an endemic country", note: "Required for India → India return, since Kenya is endemic" },
  { vaccine: "Malaria prophylaxis", required: "Not required, strongly recommended", note: "~70% of Kenya is a risk zone below 2,500m" },
  { vaccine: "Typhoid & Hepatitis A", required: "Recommended", note: "Food and water exposure" },
  { vaccine: "Routine boosters (Tetanus, MMR)", required: "Recommended if not current", note: "Standard travel advice" },
  { vaccine: "Rabies (pre-exposure)", required: "Optional", note: "Worth it for rural stays or kids on safari" },
]

export default function VaccinationsForKenyaArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-vaccine-syringe.jpg"
          alt="Travel clinic vaccination certificate and passport for Kenya safari trip"
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
            Vaccinations for Kenya: Yellow Fever and What Else You Need
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Most vaccine confusion around Kenya comes down to one thing: people research whether
          Kenya requires the yellow fever shot, and stop there. The fuller picture depends on your
          exact routing — and, if you're flying from India, on a rule that only shows up on the
          way home.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Direct India → Kenya flight:</span> Yellow fever vaccine not required for entry.</li>
            <li><span className="font-semibold text-gray-900">Connecting via Addis Ababa, Entebbe, or similar:</span> Vaccine required, even for a short layover.</li>
            <li><span className="font-semibold text-gray-900">Returning to India:</span> A valid certificate is required on re-entry, since Kenya is yellow-fever-endemic.</li>
            <li><span className="font-semibold text-gray-900">Malaria:</span> No vaccine, but prophylaxis tablets are strongly advised for most safari routes.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Is Yellow Fever Vaccination Mandatory for Kenya?
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Not for most Indian travelers, and this is where a lot of pre-trip anxiety turns out
            to be misplaced. Kenya's Ministry of Health only requires a yellow fever certificate
            from travelers arriving from a country where yellow fever is actively transmitted.
            India isn't on that list, so a direct flight into Nairobi doesn't trigger the
            requirement.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Where it gets confusing is layovers. If your route connects through Addis Ababa,
            Entebbe, Kigali, or another endemic-list country — even for a few hours — Kenyan
            immigration can ask for your Yellow Card on arrival. Airlines increasingly check this
            at boarding, not just at the border, so confirm your exact routing before assuming
            you're exempt.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            The Rule Almost Everyone Misses: Coming Back to India
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kenya is itself classified as a yellow-fever-endemic country. That means the
            requirement flips on your way home — India's health authorities expect proof of
            yellow fever vaccination when you re-enter from Kenya, regardless of whether Kenya
            asked you for anything on the way in.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Travelers who skip the vaccine because "it's not required for Kenya" sometimes
            discover this at Mumbai or Delhi immigration, where the standard consequence is up to
            six days of quarantine at your own cost if you can't produce a valid certificate. It's
            enforced on departure from Kenya and arrival in India — not by Kenya itself — which is
            exactly why it's easy to miss if you've only researched "Kenya's" requirements.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-158451597995.jpg"
            alt="Doctor administering a travel vaccination before a Kenya trip"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Timing the Vaccine Correctly
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The vaccine needs to be administered at least 10 days before departure for the
            certificate to be considered valid — getting it the week of your flight won't count.
            A single dose is now considered valid for life under current WHO rules, so if you've
            been vaccinated for a previous trip to Africa or South America, you likely don't need
            another one. Check the date on your existing Yellow Card first.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            In India, the vaccine is only administered at government-authorized centers, not at a
            regular clinic or pharmacy. Book the appointment as soon as your trip is confirmed,
            since some centers run limited weekly slots.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Who Should Skip It (Medical Exemptions)
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The yellow fever vaccine is a live-virus vaccine, so it isn't given to everyone. You
            may qualify for a medical exemption if you are over 60, pregnant, severely allergic to
            eggs, immunocompromised, or an infant under 9 months old. If any of these apply, get a
            signed medical waiver letter from your doctor before you travel — border agents have
            the final say on accepting it, and it's not something to sort out for the first time
            at an airport counter.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Vaccines and Prevention at a Glance
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Vaccine</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Requirement</th>
                  <th className="py-2 font-semibold text-gray-900">Note</th>
                </tr>
              </thead>
              <tbody>
                {vaccineTable.map((row) => (
                  <tr key={row.vaccine} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.vaccine}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.required}</td>
                    <td className="py-2 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Malaria: Not a Vaccine, But the Bigger Real Risk
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            There's no vaccine requirement for malaria, but it's arguably the more relevant health
            risk for a Kenya trip — roughly 70% of the country falls in a malaria-risk zone below
            2,500 meters elevation, which includes most safari parks and the coast. Anti-malarial
            tablets, started before arrival and continued for a few weeks after you leave, are the
            standard precaution, alongside repellent and covering up in the evenings. This is
            worth its own conversation with a doctor, since the right medication depends on your
            health history and length of stay. For a full breakdown, see our{" "}
            <Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              malaria prevention guide
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake isn't skipping the vaccine — it's assuming "Kenya doesn't
            require it" is the end of the story. That only answers the entry question. The
            transit question (are you routing through an endemic country) and the return question
            (what does India require coming back) are separate rules that catch people at
            completely different checkpoints. Sorting out all three before you book connecting
            flights saves a scramble later.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Do I need the yellow fever vaccine for a direct Delhi–Nairobi flight?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. Direct travel from India doesn't require a yellow fever certificate for entry
                into Kenya, since India isn't on the endemic-country list.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Will I need it if my flight connects through Addis Ababa or Entebbe?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Transiting through a yellow-fever-endemic country, even for a short layover,
                can trigger the requirement at Kenyan immigration.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Do I need proof of vaccination to re-enter India after visiting Kenya?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Because Kenya is itself yellow-fever-endemic, Indian immigration expects a
                valid certificate on your return, separate from whatever Kenya required on the way
                in.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">How far in advance do I need the vaccine?</h3>
              <p className="text-gray-700 leading-relaxed">
                At least 10 days before departure for the certificate to be valid. A single dose
                lasts for life.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria Prevention: Tablets, Repellents and Risk Areas</Link></li>
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
            <li><Link href="/kenya/best-time-to-visit-kenya" className="text-yellow-600 hover:text-yellow-700 font-semibold">Best Time to Visit Kenya: A Season-by-Season Guide</Link></li>
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
