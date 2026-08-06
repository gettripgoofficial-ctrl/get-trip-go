import Image from "next/image"
export default function CheetahsOfTheMaraArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        No animal in the Masai Mara draws a bigger gasp from a safari vehicle than a cheetah
        breaking into a full run. Unlike lions and leopards, which do most of their hunting after
        dark, cheetahs hunt in daylight — which means they're one of the few Big Cat sightings
        where you can actually watch the chase unfold in real time.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Top speed:</span> Up to 100–120 km/h in short bursts.</li>
          <li><span className="font-semibold text-gray-900">Best areas:</span> Naboisho, Olare Motorogi and Mara North conservancies, plus the Mara Triangle.</li>
          <li><span className="font-semibold text-gray-900">Best time:</span> Early morning and late afternoon, year-round — no single "cheetah season."</li>
          <li><span className="font-semibold text-gray-900">Conservation status:</span> Vulnerable, with an estimated 7,000–8,000 individuals left in Africa.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where to See Cheetahs in the Masai Mara
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Cheetahs favor open, short grass plains where they can spot prey from a distance and use
          their speed rather than cover to hunt — which makes the wide-open conservancies bordering
          the main Masai Mara National Reserve some of the most reliable places to find them.
          Naboisho, Olare Motorogi, and Mara North conservancies all have resident cheetah
          populations and, because vehicle numbers are capped, sightings tend to be calmer and less
          crowded than in the main reserve.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Inside the reserve itself, the Mara Triangle and the plains around Rhino Ridge and Paradise
          Plain are well known for cheetah activity, particularly mothers with cubs, who prefer open
          ground where they can watch for approaching lions and hyenas — the two predators most
          likely to kill cheetah cubs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Built for Speed, Not Strength: Hunting Style
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          A cheetah's entire body is a speed machine: a lightweight frame, an oversized heart and
          lungs, non-retractable claws for grip, and a long tail used as a rudder for sudden
          direction changes mid-chase. What it lacks is raw strength — a cheetah can't fight off a
          lion, and even a single hyena can steal a kill outright. That trade-off shapes everything
          about how it hunts.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Rather than stalking at night like a leopard, a cheetah stalks slowly by day, gets as close
          as it can — often within 30 to 60 meters — then commits to an explosive sprint that
          usually lasts under 30 seconds. If the chase runs longer than that, the cheetah typically
          gives up rather than risk overheating or injury. Because the kill itself leaves it
          exhausted and vulnerable, a cheetah often has only minutes to eat before losing the kill
          to a larger predator.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1755968835797-96c5e810242f?w=1200&q=80"
          alt="A cheetah running across grassy plains in the Masai Mara"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Best Time of Day and Season to Spot Them
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Unlike the Great Migration, cheetah sightings aren't tied to a specific season — resident
          cheetahs live in the Mara conservancies year-round. What matters more is time of day.
          Cheetahs are most active in the cooler hours shortly after sunrise and in the two or three
          hours before sunset, resting in shade through the heat of midday. A morning game drive
          that reaches open plains early gives you the best odds of catching a hunt in progress
          rather than a cheetah simply resting under a bush.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          July through October, when the wider Mara ecosystem is busiest with migration traffic,
          also brings more prey — and more competition from lions and hyenas — into cheetah
          territory, which can push cheetahs toward quieter conservancy land rather than the main
          reserve.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Photography Tips for Cheetah Sightings
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li>Use a fast shutter speed (1/1000s or faster) to freeze motion during a chase.</li>
          <li>Keep a lower ISO where light allows — cheetah hunts usually happen in good daylight, unlike leopard or lion sightings.</li>
          <li>Watch for tail-twitching and a lowered, focused stare — both are reliable signs a hunt is about to start.</li>
          <li>Ask your guide to position the vehicle ahead of the cheetah's likely path rather than directly behind it, for a cleaner side profile as it accelerates.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Conservation Status: A Species Under Pressure
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Cheetahs are classified as Vulnerable, with roughly 7,000 to 8,000 remaining across all of
          Africa — a fraction of historic numbers. Habitat fragmentation is the biggest threat: because
          cheetahs need large, open hunting ranges and don't compete well with lions and hyenas for
          territory, they're often pushed to the edges of protected areas, closer to farmland and
          livestock, where conflict with people becomes more likely.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Mara conservancies play an outsized role in cheetah conservation precisely because they
          extend the amount of open, low-conflict habitat available beyond the boundaries of the
          national reserve, giving cheetahs — and especially cubs — a better chance of survival.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are cheetahs the same as leopards?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No — cheetahs have a slimmer build, simple round black spots, and distinctive black
              "tear lines" running from the eyes to the mouth. Leopards are stockier, more muscular,
              have rosette-shaped spots, and hunt mainly at night from trees or thick cover, rather
              than in open daylight chases.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's the best time of year to see cheetahs in the Mara?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Any time of year works, since cheetahs are resident rather than migratory. Early
              morning game drives give the best chance of seeing an actual hunt, regardless of
              season.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How fast can a cheetah really run?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cheetahs can reach speeds of 100–120 km/h, but only in short bursts of around 20–30
              seconds — they rely on getting close before the chase begins rather than sustained
              speed over distance.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are Masai Mara cheetahs endangered?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cheetahs are classified as Vulnerable rather than Endangered, but numbers are
              declining across their range due to habitat loss, making protected conservancy land
              increasingly important to their survival.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
