import Image from "next/image"
import Link from "next/link"

const elevationTable = [
  { location: "Nairobi", elevation: "1,795m / 5,889ft", risk: "Low — moderate altitude, mild effects possible on arrival" },
  { location: "Masai Mara", elevation: "~1,500–2,100m", risk: "Low — within the safe range for most travelers" },
  { location: "Aberdare Range / Lake Elmenteita", elevation: "~1,800–2,500m", risk: "Low to moderate — worth pacing the first day" },
  { location: "Mau Escarpment", elevation: "Above 2,500m", risk: "Moderate — symptoms can begin here" },
  { location: "Mount Kenya trekking routes", elevation: "Up to 4,985m (Point Lenana)", risk: "High — genuine AMS risk, requires acclimatization" },
]

export default function AltitudeSicknessArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-1547721064-d.jpg"
          alt="Highland landscape near Mount Kenya at altitude"
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
            Altitude Sickness in the Kenyan Highlands
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 4 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Most Kenya itineraries never get high enough for real altitude sickness to be a concern
          — but a surprising number of travelers land in Nairobi and feel a bit off for a day
          without realizing why. The good news: for a standard safari circuit, it's a minor
          adjustment, not a medical risk. That changes if Mount Kenya is on your itinerary.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Nairobi and the standard safari circuit:</span> low risk — mild fatigue or shortness of breath on arrival is normal, not altitude sickness.</li>
            <li><span className="font-semibold text-gray-900">Real risk starts:</span> above roughly 2,500m, which most tourist itineraries never reach.</li>
            <li><span className="font-semibold text-gray-900">Genuine concern:</span> Mount Kenya treks, which climb as high as 4,985m at Point Lenana.</li>
            <li><span className="font-semibold text-gray-900">Anyone can get it:</span> fitness level doesn't determine who's affected.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why Nairobi Feels a Little Different
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Nairobi sits at about 1,795 meters (5,889 feet), noticeably higher than most people
            expect from a city near the equator. That's moderate altitude — high enough that
            travelers arriving straight from sea level sometimes notice mild shortness of breath
            or tiredness for the first day or two, but well below the threshold where altitude
            sickness typically sets in. It's a genuine adjustment, not a health risk, and it
            usually resolves on its own within a day of taking it easy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Elevation Across Kenya's Highlands
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Location</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Elevation</th>
                  <th className="py-2 font-semibold text-gray-900">Risk</th>
                </tr>
              </thead>
              <tbody>
                {elevationTable.map((row) => (
                  <tr key={row.location} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.location}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.elevation}</td>
                    <td className="py-2 text-gray-600">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-151681523156.jpg"
            alt="Mount Kenya peak visible above the highland landscape"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Where the Real Risk Begins: Mount Kenya
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Altitude sickness, medically known as Acute Mountain Sickness (AMS), becomes a genuine
            concern above roughly 2,500 meters, and Mount Kenya's trekking routes climb well past
            that — up to 4,985 meters at Point Lenana. Unlike Nairobi's mild adjustment, this is a
            real medical risk that affects trekkers regardless of fitness level, and it isn't
            something a strong hiker can simply push through. Symptoms include headache, nausea,
            dizziness, and fatigue, and can progress to more serious conditions like High Altitude
            Pulmonary Edema (HAPE) or High Altitude Cerebral Edema (HACE) if ignored.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The standard precaution is a slower ascent — most operators recommend a 5- to 6-day
            itinerary rather than rushing to the summit, with built-in acclimatization days. The
            local guiding principle, "pole pole" (Swahili for "slowly, slowly"), exists for exactly
            this reason. If symptoms do appear on a trek, the only real treatment is descent — rest
            at altitude doesn't resolve HAPE or HACE the way it can with mild AMS.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Who's More Likely to Feel It
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Anyone can develop altitude-related symptoms, and fitness level doesn't predict who's
            affected — but travelers flying in directly from a low-elevation home city tend to
            notice Nairobi's altitude more than those already used to living somewhere elevated.
            Rate of ascent matters more than overall fitness: someone who arrives and immediately
            pushes into a strenuous activity is more likely to feel it than someone who takes the
            first day easy, regardless of how fit they are.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Simple Precautions for a Standard Safari
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Take it easy on arrival day in Nairobi — skip strenuous activity for the first 24 hours if you're flying in from sea level.</li>
            <li>Stay well hydrated and go easy on alcohol in your first day or two.</li>
            <li>If your itinerary includes the Aberdares or Mau Escarpment, expect a bit more fatigue than at the coast — it's normal, not a warning sign.</li>
            <li>If you're adding a Mount Kenya trek, book an itinerary with built-in acclimatization days rather than the fastest option available.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common confusion is treating "Kenya's highlands" as one uniform altitude
            risk. Nairobi and the standard safari circuit sit at a moderate elevation that rarely
            causes more than mild, short-lived tiredness — genuinely different from the real AMS
            risk on a Mount Kenya trek above 2,500 meters. If your trip is a standard game-drive
            circuit, this isn't something to worry much about. If it includes a highland trek,
            it's worth planning around properly rather than assuming general fitness is enough.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is Nairobi's altitude dangerous for tourists?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. At around 1,795 meters, Nairobi's altitude is moderate and typically causes at
                most mild, short-lived fatigue for travelers arriving from sea level — not
                altitude sickness.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Will I get altitude sickness on a standard Masai Mara safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                Very unlikely. The Mara and most classic safari parks sit well below the elevation
                where altitude sickness typically begins.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is Mount Kenya trekking risky for altitude sickness?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Routes climb as high as 4,985 meters, well past the threshold where genuine
                AMS risk begins, and it can affect trekkers regardless of fitness level.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Does being physically fit protect against altitude sickness?</h3>
              <p className="text-gray-700 leading-relaxed">
                Not reliably. Altitude sickness can affect anyone regardless of fitness level —
                pace of ascent and individual susceptibility matter more than conditioning.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/vaccinations-for-kenya-yellow-fever-and-more" className="text-yellow-600 hover:text-yellow-700 font-semibold">Vaccinations for Kenya: Yellow Fever and What Else You Need</Link></li>
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria Prevention: Tablets, Repellents and Risk Areas</Link></li>
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
