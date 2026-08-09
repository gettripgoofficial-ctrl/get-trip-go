import Image from "next/image"
export default function AntiPoachingEffortsInKenyasParksArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        A decade ago, Kenya's elephant and rhino populations were being cut down by poaching at a
        pace that put both species on a path toward local extinction. Since then, a mix of ranger
        capacity, technology, tougher penalties, and community reporting networks has driven
        poaching down sharply — though the pressure hasn't disappeared, and the systems that hold
        it back require constant funding and attention.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">The peak:</span> Elephant and rhino poaching hit crisis levels in the early-to-mid 2010s, driven mainly by ivory and rhino horn demand in Asian markets.</li>
          <li><span className="font-semibold text-gray-900">The turnaround:</span> Poaching numbers have fallen sharply since that peak, credited to ranger presence, tracking technology, and stiffer prosecution.</li>
          <li><span className="font-semibold text-gray-900">Who's involved:</span> Kenya Wildlife Service rangers, conservancy-employed local scouts, sniffer dog units, and community informant networks.</li>
          <li><span className="font-semibold text-gray-900">The ongoing risk:</span> Demand shifts, funding gaps, and poverty pressure on communities near parks keep the threat from fully disappearing.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          How Bad the Crisis Got
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Through the early 2010s, a surge in ivory and rhino horn demand — mainly across parts of
          Asia, where horn was marketed as a status symbol and a supposed medicinal cure — pushed
          poaching in Kenya and across Africa to levels that conservationists warned could wipe
          out wild rhino populations within a generation. Elephant losses climbed too, with entire
          herds targeted by organized poaching groups using automatic weapons and, in some cases,
          helicopters.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The crisis wasn't just about individual poachers. Much of the ivory and horn moved
          through organized trafficking networks that connected local poaching gangs to
          international smuggling routes and buyers, which is part of why the eventual response
          had to go beyond simply arming more rangers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What Actually Turned It Around
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Ranger numbers and training expanded significantly, backed by better equipment — GPS
          tracking collars on high-risk animals, camera traps, and in some conservancies, drones
          used to spot intrusions into remote areas that ground patrols can't cover as quickly.
          Sniffer dog units trained to detect ivory and firearms were deployed at airports and
          border crossings, targeting the trafficking side of the problem rather than only the
          poaching itself.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kenya also toughened penalties for wildlife crimes, moving poaching and trafficking
          offenses toward sentences that treat the activity as serious organized crime rather than
          a minor infraction. Alongside enforcement, conservancies and community programs built
          out informant and early-warning networks — local residents who report suspicious
          activity, sometimes for a reward, turning nearby communities into an extension of the
          protection effort rather than a source of poachers.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-156476005577.jpg"
          alt="Ranger on patrol in a Kenyan national park"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Community Involvement Matters So Much
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Parks and conservancies border communities that often live with real costs from
          wildlife — crop damage from elephants, livestock losses to predators — while getting
          comparatively little direct benefit from tourism revenue. Programs that pay local
          scouts, share conservancy lease income, and route conservation fees into schools and
          clinics change that equation, giving nearby communities a financial stake in an animal
          staying alive rather than being killed. That shift, more than any single security
          upgrade, is widely credited as central to the drop in poaching over the past decade.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Work That's Still Ongoing
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Lower poaching numbers don't mean the threat is gone. Ranger units, tracking technology,
          and community programs all depend on sustained funding, much of which is tied to
          tourism revenue and conservation donations — both vulnerable to downturns. Demand for
          ivory and horn can also shift rather than disappear, and traffickers adapt their routes
          and methods when one channel gets shut down. Most conservation groups describe current
          anti-poaching work as a system that has to keep running at full capacity indefinitely,
          not a problem that's been permanently solved.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How much has poaching in Kenya actually decreased?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Elephant and rhino poaching have fallen sharply since the crisis peak of the early-
              to-mid 2010s, driven by expanded ranger capacity, tracking technology, tougher
              penalties, and community reporting networks.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Who carries out anti-poaching work in Kenya's parks?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Kenya Wildlife Service rangers alongside conservancy-employed local scouts, sniffer
              dog units at borders and airports, and community informant networks that report
              suspicious activity.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Why did community involvement make such a difference?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Paying local scouts and sharing conservancy revenue gives nearby communities a
              direct financial stake in wildlife staying alive, turning former sources of poachers
              into an extension of the protection effort.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is poaching still a threat to Kenya's wildlife today?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — numbers are down significantly, but ranger units and community programs depend
              on sustained funding, and demand for ivory and horn can shift rather than disappear
              entirely.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
