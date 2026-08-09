export default function IsItEthicalToGoOnSafariArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        How tourism revenue actually funds conservation, and what to look for in an operator — the
        short version is that safari tourism, done through the right operators and camps, is one
        of the strongest funding mechanisms conservation has, but the specifics of who you book
        with genuinely matter.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Funding mechanism:</span> Park entry fees and conservancy lease payments directly fund ranger salaries, anti-poaching efforts, and land protection.</li>
          <li><span className="font-semibold text-gray-900">Community impact:</span> Conservancy tourism gives local landowners a financial incentive to keep land wild rather than converting it.</li>
          <li><span className="font-semibold text-gray-900">Where to be selective:</span> Operator practices around vehicle crowding, animal disturbance, and community wages vary significantly.</li>
          <li><span className="font-semibold text-gray-900">Red flags:</span> Operators that allow off-road chasing of animals, excessive vehicle crowding at sightings, or unclear community benefit models.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          How Tourism Actually Funds Conservation
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          National park and reserve entry fees are a direct funding source for wildlife
          protection — covering ranger salaries, anti-poaching patrols, and park infrastructure. In
          private conservancies, the funding model runs even more directly: bed-night fees and
          conservation levies paid by guests are what fund the lease payments to Maasai and other
          landowners, which is what makes it financially viable for those communities to keep land
          as wildlife habitat instead of converting it to farming or development.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Put simply, a functioning safari tourism industry is one of the main reasons large areas
          of wildlife habitat in Kenya remain protected at all — without that revenue, both
          government park budgets and the conservancy leasing model that protects even more land
          outside the parks would struggle to sustain themselves.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where the Ethics Get More Complicated
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Not every operator or camp handles the human and animal welfare side equally well.
          Vehicle crowding at a single sighting — a dozen vehicles surrounding one leopard, for
          example — can genuinely stress animals and disrupt natural behavior, and it happens more
          in heavily-visited national reserves than in conservancies that cap vehicle numbers per
          sighting. Some operators also cut corners on how much of the tourism revenue actually
          reaches local communities and staff versus how much stays with the operator itself.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Off-road driving to get closer to an animal, letting engines idle near resting predators,
          or pursuing an animal that's clearly trying to move away are all practices a responsible
          guide should avoid — and they're reasonable things to watch for or ask about when
          evaluating an operator's approach.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <img
          src="/images/external/unsplash-156410116053.jpg"
          alt="Safari guide and vehicle observing wildlife respectfully at a distance"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What to Look for in a Responsible Operator
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Operators and camps that are transparent about community partnerships, employ local
          guides and staff in meaningful numbers, and operate within conservancies with vehicle
          caps and clear conservation fee structures tend to align well with genuinely responsible
          tourism. It's reasonable to ask a prospective operator directly how community lease
          payments work, what their vehicle policy is at sightings, and how they train guides on
          wildlife distance and disturbance protocols.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Choosing camps and conservancies over the most heavily-trafficked sections of the busiest
          national reserves is often the single biggest lever a traveler has — both for animal
          welfare and for ensuring tourism revenue reaches local communities directly through the
          lease and employment structures conservancies are built around.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Does safari tourism actually help conservation?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — park entry fees and conservancy lease payments are a direct funding source for
              ranger salaries, anti-poaching efforts, and keeping land protected as wildlife
              habitat rather than converted to other uses.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What should I look for in a responsible safari operator?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Transparency about community lease payments and employment, clear vehicle policies at
              sightings, and camps operating within conservancies that cap visitor and vehicle
              numbers.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is it more ethical to visit a conservancy than a national reserve?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Conservancies generally offer more direct community benefit through lease payments
              and lower vehicle crowding at sightings, though well-run operators exist in both
              settings.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What guide behaviors should raise concern during a game drive?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Off-road driving to approach animals, excessive vehicle crowding at a single
              sighting, and pursuing an animal that's clearly trying to move away are all signs of
              poor wildlife etiquette.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
