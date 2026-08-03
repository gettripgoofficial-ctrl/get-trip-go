import Image from "next/image"
import Link from "next/link"

const riskTable = [
  { region: "Coast (Mombasa, Diani, Watamu, Lamu)", risk: "High", note: "Low altitude, year-round transmission" },
  { region: "Lake Victoria / Western Kenya (Kisumu, Kakamega)", risk: "High", note: "Low altitude, favorable climate for mosquitoes" },
  { region: "Masai Mara", risk: "Moderate", note: "Higher altitude than coast, but still commonly recommended" },
  { region: "Amboseli, Tsavo, Samburu", risk: "Moderate to High", note: "Below 2,500m, standard safari circuit" },
  { region: "Nairobi (central, urban)", risk: "Low", note: "Prophylaxis generally not required if staying only in the city center" },
  { region: "Highlands above 2,500m (Central, Rift Valley highlands)", risk: "Minimal", note: "Altitude limits mosquito activity" },
]

export default function MalariaPreventionArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=1600&q=80"
          alt="Mosquito net over a safari lodge bed in Kenya"
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
            Malaria Prevention: Tablets, Repellents and Risk Areas
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          There's no vaccine for malaria, which is exactly why it gets less attention than yellow
          fever — despite being the more relevant health risk for most Kenya itineraries.
          Prevention comes down to two things: prescription tablets and not getting bitten in the
          first place.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Highest risk:</span> the coast (Mombasa, Diani, Watamu) and western Kenya near Lake Victoria.</li>
            <li><span className="font-semibold text-gray-900">Moderate risk:</span> most classic safari parks — Mara, Amboseli, Tsavo, Samburu.</li>
            <li><span className="font-semibold text-gray-900">Lower risk:</span> central Nairobi and highlands above 2,500m.</li>
            <li><span className="font-semibold text-gray-900">Bottom line:</span> if your trip touches the coast or a safari park, discuss prophylaxis with a doctor — this isn't one to skip based on "it's just a short trip."</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Altitude Decides the Risk
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Malaria risk in Kenya tracks elevation more closely than region. The general rule
            doctors use: below roughly 2,500 meters, transmission risk is present; above that,
            it drops off sharply because the mosquitoes that carry malaria don't thrive in the
            cooler air. That's why Nairobi's highland setting keeps its risk lower than most
            people assume, while the coast and the western Lake Victoria basin — both low-lying
            and warm year-round — sit at the higher end.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Rain plays a role too. Transmission occurs year-round, but epidemics tend to spike
            during and just after the rainy season, when standing water gives mosquitoes more
            places to breed. If your trip lands in the long rains (March–May) or short rains
            (November), it's worth mentioning that timing specifically when you talk to a travel
            clinic.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Risk by Region
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Region</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Risk Level</th>
                  <th className="py-2 font-semibold text-gray-900">Note</th>
                </tr>
              </thead>
              <tbody>
                {riskTable.map((row) => (
                  <tr key={row.region} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.region}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.risk}</td>
                    <td className="py-2 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Most first-time visitors combine two or three of these zones in a single trip — a
            few nights in the Mara, a stretch on the coast, a night in Nairobi either side. Doctors
            generally base their recommendation on the riskiest stop in your full itinerary, not
            just the destination you'll spend the most nights in.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=80"
            alt="Insect repellent and long-sleeved clothing packed for a Kenya safari"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Prophylaxis Tablets: What Your Doctor Will Likely Discuss
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            There's no single "correct" malaria tablet — the right one depends on your health
            history, how long you're traveling, and how your body tolerates each option. The most
            commonly prescribed options for Kenya are atovaquone/proguanil, doxycycline, and
            mefloquine, each with a different start-before-travel window and a different length of
            time you need to continue taking it after you leave. This is a genuine
            prescription decision, not something to self-select — book a travel health consultation
            4–6 weeks before departure so there's time to start the course correctly and switch
            options if a particular one doesn't agree with you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Bite Prevention Matters Just as Much
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Tablets reduce your risk if you're bitten — they don't stop the bite itself, so
            avoiding mosquitoes is just as important a layer of protection. The basics: an
            insect repellent containing DEET or picaridin, applied to exposed skin especially from
            dusk onward, when the mosquitoes that carry malaria are most active. Long sleeves and
            long trousers in the evening help, and most safari lodges already provide treated
            mosquito nets over the bed — it's worth checking yours is properly tucked in rather
            than assuming it's sealed.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Loose, breathable, neutral-colored clothing does double duty here — it's also what
            keeps tsetse flies away in certain parks, which are drawn to dark blues and blacks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            If You Get Sick After Returning Home
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Malaria symptoms — fever, chills, headache, body aches — can appear well after you're
            back home, sometimes weeks later, since the parasite can have an incubation period
            longer than most people expect. If you develop a fever any time in the months after a
            Kenya trip, tell your doctor about the travel history specifically and ask about a
            malaria test; it's a fast, standard blood test, and treatable if caught early, but
            easy to mistake for flu if nobody knows to check for it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is judging risk by the country instead of the itinerary. "Am I
            going to Kenya" isn't the question that determines whether you need prophylaxis —
            "which parts of Kenya, at what elevation, in what season" is. A trip that's entirely
            Nairobi and the surrounding highlands carries meaningfully less risk than one that adds
            even a single night on the coast or in a lower-lying park, so it's worth mapping your
            actual route before deciding tablets aren't necessary.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Do I need malaria tablets if I'm only visiting Nairobi?</h3>
              <p className="text-gray-700 leading-relaxed">
                If you're staying strictly within central Nairobi, prophylaxis is generally not
                recommended, since the risk there is low. That changes as soon as your itinerary
                adds a safari park or the coast.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is the Masai Mara high risk for malaria?</h3>
              <p className="text-gray-700 leading-relaxed">
                It's moderate — higher altitude than the coast means lower transmission than
                Mombasa or Diani, but most travel clinics still recommend prophylaxis, especially
                since Mara itineraries are usually combined with lower-altitude stops.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Can a short 3-4 day safari skip the tablets?</h3>
              <p className="text-gray-700 leading-relaxed">
                Trip length doesn't remove the risk — even short stays in a risk area warrant the
                same conversation with a doctor as a longer trip would.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What if I get a fever after coming home?</h3>
              <p className="text-gray-700 leading-relaxed">
                See a doctor promptly and mention your travel history specifically — malaria
                symptoms can appear weeks after you return, and a blood test is the fastest way to
                rule it in or out.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/vaccinations-for-kenya-yellow-fever-and-more" className="text-yellow-600 hover:text-yellow-700 font-semibold">Vaccinations for Kenya: Yellow Fever and What Else You Need</Link></li>
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
            <li><Link href="/kenya/what-to-wear-on-a-kenya-safari" className="text-yellow-600 hover:text-yellow-700 font-semibold">What to Wear on a Kenya Safari: Colors, Fabrics and Layers</Link></li>
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
