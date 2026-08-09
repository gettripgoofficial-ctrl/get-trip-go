import Image from "next/image"
import Link from "next/link"

const ageTable = [
  { age: "Under 5", policy: "Most restricted", note: "Many classic Mara tented camps decline; some family-oriented lodges accept with a private vehicle" },
  { age: "5-7", policy: "Growing acceptance", note: "A rising number of camps accept from age 5, with shorter, sleep-schedule-friendly drives" },
  { age: "6-8 (shared drives)", policy: "Most common minimum", note: "The typical cutoff for joining a shared game-drive vehicle with other guests" },
  { age: "8-12", policy: "The 'sweet spot'", note: "Widely considered the best-fit age -- alert, capable, and genuinely engaged" },
  { age: "12+", policy: "Full activity access", note: "Usually the minimum for walking safaris, and often for hot air ballooning" },
]

export default function SafariYoungChildrenArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-178103986937.jpg"
          alt="Family with young children on a game drive vehicle in Kenya"
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
            Safari With Young Children: Age Limits and Lodge Policies
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 5 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Kenya has no national legal minimum age for a safari — the Kenya Wildlife Service
          doesn't restrict entry to parks based on a child's age. What actually determines
          whether your kids can join is each individual lodge and camp's own policy, and those
          vary widely enough that assuming "family-friendly" means "no restrictions" is the single
          most common planning mistake.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Most common minimum:</span> 6 years old for shared game drives at classic tented camps.</li>
            <li><span className="font-semibold text-gray-900">Sweet spot age:</span> 8-12 — alert, capable, and genuinely into it.</li>
            <li><span className="font-semibold text-gray-900">Under 5:</span> most restricted; look for family-oriented lodges offering private vehicles instead.</li>
            <li><span className="font-semibold text-gray-900">Golden rule:</span> get every age policy confirmed in writing before paying a deposit — third-party listings are often out of date.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Age Guidelines by Range
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Age</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Typical Policy</th>
                  <th className="py-2 font-semibold text-gray-900">Note</th>
                </tr>
              </thead>
              <tbody>
                {ageTable.map((row) => (
                  <tr key={row.age} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.age}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.policy}</td>
                    <td className="py-2 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why the Restrictions Exist
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Age limits aren't arbitrary. Open safari vehicles put children close to wildlife with
            limited physical barriers, and every passenger needs to follow instructions quickly
            during a sighting — sudden noise or movement from a restless toddler can affect safety
            and the experience for other guests sharing the vehicle. Game drives also run long, two
            to four hours at a stretch, often starting as early as 6am, which is genuinely
            demanding for very young children regardless of how well-behaved they normally are.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-152380500934.jpg"
            alt="Children watching wildlife from a lodge viewing deck"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Private Vehicles Solve Most Problems
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The single biggest workaround for young-children age limits is booking a private
            vehicle rather than a shared one. Many camps that restrict under-6s from shared game
            drives will make exceptions for families with their own vehicle, since it removes the
            concern about disrupting other guests entirely. A private vehicle also lets you set
            your own drive length and timing around nap schedules, rather than committing to a
            fixed multi-hour outing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Activity-Specific Age Limits
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Beyond standard game drives, other safari activities carry their own, usually stricter,
            minimums. Walking safaris typically require children to be at least 12-16, given the
            physical demands and closer proximity to wildlife on foot. Hot air balloon safaris
            commonly set a minimum around 7-8. None of these are negotiable the way a shared
            game-drive age limit sometimes is — safety equipment and insurance requirements are
            usually behind the cutoff, not just guide discretion.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Choosing the Right Park for Young Kids
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Not every Kenyan park suits families equally. The best options for young children
            combine reliable, easy wildlife sightings with shorter driving distances between camp
            and viewing areas, so a restless toddler isn't stuck in a vehicle for hours to see
            anything. Lodges with a natural waterhole visible from camp are particularly good for
            under-5s, since children can watch wildlife without needing a full game drive at all.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What to Confirm Before You Book
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>The exact minimum age for shared game drives at each specific camp on your itinerary.</li>
            <li>Whether a private vehicle is required, optional, or unavailable for your children's age.</li>
            <li>Age limits separately for any add-on activities like walking safaris or ballooning.</li>
            <li>Whether the camp is fenced or unfenced, and what the after-dark movement rules are for kids.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Get all of this in writing rather than relying on a lodge being labeled "family-friendly"
            in marketing material — third-party listings and outdated rate cards are a common
            source of incorrect age information, and policies do change year to year.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is assuming a lodge's general "family-friendly" branding means
            no age restrictions apply. In practice, most camps that welcome families still enforce
            a specific minimum age for shared game drives — the family-friendly label usually
            refers to accommodation and amenities, not blanket access to every activity. Always
            confirm the actual drive and activity policy separately from the accommodation policy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is there a legal minimum age for a Kenya safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. Kenya has no national legal minimum age enforced by the Kenya Wildlife Service
                — age limits come entirely from individual lodge and camp policies.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What's the best age for a first family safari?</h3>
              <p className="text-gray-700 leading-relaxed">
                Ages 8-12 are widely considered the sweet spot — old enough to follow safety
                instructions and stay engaged, without needing the accommodations younger children
                require.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Can toddlers go on safari in Kenya?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, with the right planning — a private vehicle, shorter drives timed around nap
                schedules, and a lodge that explicitly accepts young children rather than one that
                simply doesn't say otherwise.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Does a private vehicle remove age restrictions?</h3>
              <p className="text-gray-700 leading-relaxed">
                Often, yes for game drives specifically — many camps that restrict shared drives
                for young children will allow them with a private vehicle. It doesn't typically
                apply to walking safaris or ballooning, which have separate safety-based minimums.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/is-a-kenya-safari-safe-during-pregnancy" className="text-yellow-600 hover:text-yellow-700 font-semibold">Is a Kenya Safari Safe During Pregnancy</Link></li>
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
