import Image from "next/image"
import Link from "next/link"

const checklistTable = [
  { item: "Accessible vehicle", why: "Standard safari vehicles aren't wheelchair-friendly; you need one with a ramp or hydraulic lift confirmed in writing" },
  { item: "Roll-in bathroom", why: "Ask specifically about wheelchair clearance, not just 'grab bars' -- some tented camps have bars but no room to maneuver" },
  { item: "Room-to-vehicle path", why: "Check the terrain between your room and the vehicle -- gravel, steps, and sand are common even at otherwise accessible camps" },
  { item: "Private vehicle", why: "Almost always worth the added cost -- it controls pacing, boarding time, and route flexibility" },
  { item: "Airport and transfer accessibility", why: "Confirm accessible transport at Nairobi and any connecting airstrips, not just at the lodge itself" },
]

export default function SafariMobilityIssuesArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-156808468078.jpg"
          alt="Wheelchair-accessible safari vehicle with a ramp in Kenya"
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
            Safari for Travelers With Mobility Issues
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          A Kenya safari is genuinely possible for travelers using a wheelchair or with limited
          mobility, and accessibility here has improved meaningfully in recent years. But there's
          one thing worth knowing before you get excited about any single lodge's website: there's
          no central accessibility certification system for Kenya's safari industry, so every
          claim needs to be verified directly rather than taken at face value.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Big picture:</span> genuinely possible, with a growing number of camps offering wheelchair-adapted vehicles and roll-in rooms.</li>
            <li><span className="font-semibold text-gray-900">No certification system:</span> "accessible" claims vary widely in what they actually mean — verify specifics directly with each property.</li>
            <li><span className="font-semibold text-gray-900">Biggest single upgrade:</span> booking a private vehicle rather than a shared one.</li>
            <li><span className="font-semibold text-gray-900">Common gap:</span> grab bars exist, but wheelchair maneuvering space inside the bathroom often doesn't.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why "Accessible" Means Different Things at Different Camps
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kenya's safari accommodation ranges from bare-ground mobile camping to permanent lodges
            with tiled floors and full hotel-standard facilities, and accessibility infrastructure
            spans an equally wide range — from none at all to genuinely well-considered design.
            Because no unified standard or inspection body governs these claims, one lodge's
            "wheelchair accessible" might mean a step-free entrance and a wide doorway, while
            another's means a fully adapted roll-in bathroom with a properly cleared floor plan.
            The only reliable approach is asking specific questions of each property rather than
            trusting the label alone.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            The Bathroom Gap Most People Miss
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            A recurring, specific issue in tented camps: a bathroom might have a grab bar installed
            next to the toilet or shower, but no actual space for a wheelchair to pull in
            alongside it. Grab bars alone don't equal usability — ask directly about the clear
            floor space in the bathroom, in centimeters or inches if needed, rather than accepting
            "accessible bathroom" as a complete answer.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-148949388746.jpg"
            alt="Accessible safari lodge room with wide doorways"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Vehicles: The Other Half of the Equation
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Standard safari vehicles aren't built for wheelchair access, so this needs separate
            confirmation from your lodge booking. A small number of specialist operators run
            adapted 4x4 Land Cruisers with ramps or hydraulic lifts and secure wheelchair locking
            systems, built specifically for rugged park terrain. If your mobility needs go beyond
            a standard vehicle, book through an operator who can confirm the specific vehicle type
            in writing, rather than assuming any safari vehicle will work.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why a Private Vehicle Matters More Here
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The added cost of a private vehicle is one of the most worthwhile investments a
            traveler with mobility limitations can make. It removes the pressure of boarding
            quickly alongside other guests, lets you set your own pace between sightings, and gives
            you flexibility to adjust the route if a particular track turns out to be harder to
            navigate than expected.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Pre-Booking Checklist
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Check</th>
                  <th className="py-2 font-semibold text-gray-900">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {checklistTable.map((row) => (
                  <tr key={row.item} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium align-top">{row.item}</td>
                    <td className="py-2 text-gray-600">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Where to Focus Your Search
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The Masai Mara has the widest range of accessibility-considered lodges, along with
            Lake Nakuru and Amboseli, where several properties have made specific investments in
            barrier-free suites, wide pathways, and roll-in bathrooms. Nairobi itself is a
            reasonable starting point too — attractions like the Giraffe Centre and David
            Sheldrick Wildlife Trust are generally easier to navigate than remote bush camps, which
            makes the capital a good option for easing into the trip before heading to more remote
            parks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is booking based on a lodge's marketing description of
            "accessible" rooms without asking for specifics. Because there's no standardized
            accessibility rating system across Kenya's safari industry, the same word can describe
            very different levels of usability from one property to the next. A short, specific
            question list sent to the lodge directly — vehicle type, bathroom clearance, path
            terrain — resolves this far more reliably than a general accessibility label ever will.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Are Kenya safari vehicles wheelchair accessible?</h3>
              <p className="text-gray-700 leading-relaxed">
                Not standard ones. A small number of specialist operators offer adapted vehicles
                with ramps or lifts — this needs to be confirmed and booked specifically, not
                assumed.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is there an official accessibility rating for Kenya safari lodges?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. There's no central database or certification system, so "accessible" claims
                vary widely between properties and should be verified directly.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is a private vehicle necessary for travelers with mobility issues?</h3>
              <p className="text-gray-700 leading-relaxed">
                Not strictly required, but strongly recommended — it removes time pressure and
                gives you control over pacing and route flexibility that shared vehicles don't
                allow.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Which parks have the best accessibility infrastructure?</h3>
              <p className="text-gray-700 leading-relaxed">
                The Masai Mara, Lake Nakuru, and Amboseli currently have the widest range of lodges
                with specific accessibility investments, though this changes over time and should
                be confirmed per property.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/elderly-travelers-what-to-know" className="text-yellow-600 hover:text-yellow-700 font-semibold">Elderly Travelers: What to Know Before a Safari</Link></li>
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
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
