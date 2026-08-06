import Image from "next/image"
export default function InternetAndPhoneSignalInTheBushArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Most lodges have WiFi in common areas, but signal drops fast once you're out on a drive.
        If you're picturing a fully connected safari where you can stream and video call from
        anywhere, it's worth resetting that expectation early — connectivity on safari is real
        but patchy, and part of the appeal for many travelers is exactly that disconnect.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Lodge WiFi:</span> Most established camps have WiFi in common areas or tents, usually good enough for messaging and light browsing.</li>
          <li><span className="font-semibold text-gray-900">On game drives:</span> Cell signal typically drops out entirely once you're away from camp, especially in remote conservancies.</li>
          <li><span className="font-semibold text-gray-900">Local SIM cards:</span> Widely available and cheap in Nairobi, and useful in towns and some lodges, but don't extend coverage into the bush itself.</li>
          <li><span className="font-semibold text-gray-900">Emergency communication:</span> Camps have their own radio or satellite communication systems for genuine emergencies, independent of cell coverage.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What Connectivity Actually Looks Like
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Established safari camps generally offer WiFi in shared spaces — the main lounge, dining
          area, sometimes individual tents — powered by satellite internet since most camps sit
          well outside standard cellular infrastructure. It's usually adequate for messaging,
          email, and light browsing, though video calls and large uploads can be hit or miss
          depending on how many guests are online at once and the specific camp's setup.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Once you leave camp for a game drive, connectivity essentially disappears in most
          conservancies and remote park areas — there's simply no cell tower infrastructure out
          on the plains. This is normal and expected rather than a sign anything's wrong; it's one
          of the defining features of being genuinely out in the bush rather than in a
          well-connected tourist zone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Local SIM Cards
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kenyan SIM cards are inexpensive and widely available at the airport and in Nairobi,
          typically requiring passport identification to register. A local SIM gives you good
          data coverage in cities and larger towns, and can be a genuinely useful backup for the
          portions of a trip spent in Nairobi or coastal areas — though it won't help once you're
          deep in a remote conservancy where there's no cellular network to connect to in the
          first place.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          If your itinerary mixes city time with remote camps, a local SIM for the city portions
          combined with relying on lodge WiFi for the remote stretches is a reasonable approach
          that covers most practical needs without expecting more coverage than actually exists.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=80"
          alt="Remote safari camp setting under open sky"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          How Camps Handle Emergencies Without Cell Coverage
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Lack of cell signal doesn't mean camps are cut off from help. Most established
          conservancy and park camps maintain their own radio networks connecting to a base
          station, other camps, and emergency response services, independent of commercial cell
          infrastructure. Serious medical situations are typically handled through flying-doctor
          evacuation services, which camps can coordinate via radio even with zero cell signal on
          site.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          This is worth knowing mainly so you can relax about being "unreachable" during game
          drives — the camp itself has reliable ways to reach outside help if something genuinely
          serious comes up, even though your personal phone won't have a signal.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Will I have phone signal on a game drive?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Generally no — cell signal typically disappears once you leave camp, since most
              conservancies and remote park areas have no cellular infrastructure at all.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do safari lodges have WiFi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Most established camps offer WiFi in common areas via satellite internet, usually
              sufficient for messaging and light browsing, though video calls can be unreliable.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Should I buy a local SIM card for a Kenya safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It's useful for time spent in Nairobi or coastal towns, but it won't extend coverage
              into remote conservancies where no cellular network exists to connect to.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What happens in an emergency with no phone signal?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Camps maintain their own radio networks and can coordinate emergency response,
              including flying-doctor evacuation, entirely independent of commercial cell
              coverage.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
