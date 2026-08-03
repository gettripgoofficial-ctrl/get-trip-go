import Image from "next/image"
import Link from "next/link"

const difficultyTable = [
  { animal: "Elephant", difficulty: "Easy", bestTime: "Year-round near water", bestPark: "Amboseli, Tsavo" },
  { animal: "Lion", difficulty: "Easy", bestTime: "Dry season, midday rest", bestPark: "Masai Mara, Amboseli" },
  { animal: "Buffalo", difficulty: "Easy", bestTime: "Year-round, large herds", bestPark: "Masai Mara, Lake Nakuru" },
  { animal: "Rhino", difficulty: "Hard", bestTime: "Year-round, specific reserves only", bestPark: "Ol Pejeta, Lake Nakuru" },
  { animal: "Leopard", difficulty: "Very hard", bestTime: "Early morning, dusk", bestPark: "Serengeti (Seronera), Masai Mara" },
]

export default function BigFiveArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?w=1600&q=80"
          alt="Giraffe among trees in the African bush"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Safari & Wildlife
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 7 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The term "Big Five" dates back to colonial-era hunting, when these five animals were
          considered the most dangerous to track on foot — not the biggest or rarest. Today it's
          the checklist most first-time safari travelers carry, and knowing what actually
          distinguishes each animal, and where to look, makes a huge difference in how much you
          actually see.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Easiest to spot:</span> Lion and elephant — social, active by day.</li>
            <li><span className="font-semibold text-gray-900">Hardest to spot:</span> Leopard — solitary, nocturnal, and well camouflaged.</li>
            <li><span className="font-semibold text-gray-900">Best overall odds for all five:</span> 5–7 days between Masai Mara and Ol Pejeta Conservancy.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Where the Term "Big Five" Actually Comes From
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The phrase originated with big-game hunters in the 19th and early 20th centuries, who
            ranked animals by how dangerous they were to hunt on foot rather than by rarity or
            size — a buffalo or wounded lion charging at close range was, and still is, far more
            dangerous than an animal like the giraffe or hippo, despite either being larger or
            statistically more lethal overall. When photographic safaris replaced hunting safaris
            through the mid-20th century, the term stuck around, shifting from a hunting
            trophy list to a wildlife-viewing checklist.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            It's worth knowing the term isn't a conservation or scientific classification — it
            says nothing about which animals are endangered (rhinos are, lions increasingly are,
            buffalo are not) or which are most ecologically important. Guides use it mainly
            because travelers already know it, not because it's the most meaningful way to think
            about African wildlife.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Lion
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Lions are the easiest of the five to spot because they're social and lounge in the
            open, often in prides of five to fifteen. Look for tawny shapes under acacia trees
            during the heat of the day — they do most of their hunting at dawn, dusk, or night, and
            sleep up to 20 hours a day. Masai Mara and Amboseli have particularly high lion
            densities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Leopard
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Leopards are the hardest to find. They're solitary, mostly nocturnal, and spend
            daylight hours resting in trees or thick brush — a spotted tail hanging from a branch
            is often the first sign. Guides look for kills dragged up into trees, since leopards
            store food out of reach of hyenas and lions. Serengeti's Seronera area and the Mara's
            riverine forests are reliable spots.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
            alt="Rhino with calf on the savanna"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Rhino
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Both black and white rhinos are grazers rather than predators, but they're the rarest
            Big Five sighting due to decades of poaching. White rhinos are more sociable and graze
            in open grassland, distinguishable by a wide, flat mouth built for grazing. Black
            rhinos are solitary, browse from bushes with a pointed, prehensile lip, and are more
            likely in thicker vegetation. Ol Pejeta Conservancy and Lake Nakuru are the most
            consistent places to see both.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Elephant
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Elephants are the least difficult to find in areas where they're present — they travel
            in visible family herds and need to drink daily, so water sources are reliable viewing
            spots. Amboseli is famous for large herds photographed against Kilimanjaro's backdrop;
            Tsavo's elephants are known for their reddish color, a result of dust-bathing in the
            park's red soil.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Buffalo
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Cape buffalo are the most overlooked of the five, often dismissed as common, but
            they're genuinely unpredictable and account for more guide injuries than any other Big
            Five animal. They move in large herds, sometimes hundreds strong, and are common enough
            that most travelers see them without trying. Look for oxpecker birds riding on their
            backs, picking off ticks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Difficulty at a Glance
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Animal</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Difficulty</th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">Best Time</th>
                  <th className="py-2 font-semibold text-gray-900">Best Park</th>
                </tr>
              </thead>
              <tbody>
                {difficultyTable.map((row) => (
                  <tr key={row.animal} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium">{row.animal}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.difficulty}</td>
                    <td className="py-2 pr-4 text-gray-600">{row.bestTime}</td>
                    <td className="py-2 text-gray-600">{row.bestPark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Best Time and Place to See All Five
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            No single park guarantees all five, since rhino populations are so localized. The
            most reliable combination is a few days in the Masai Mara for lion, leopard, elephant,
            and buffalo, paired with a stop at Ol Pejeta Conservancy or Lake Nakuru National Park
            for rhino. Timing matters too — visiting during{" "}
            <Link href="/kenya/the-great-migration-explained" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              the Great Migration
            </Link>{" "}
            (July–September) concentrates wildlife density in the Mara, improving your odds
            across the board, not just for the migrating herds themselves.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            A Note on Expectations
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Seeing all five in one trip is realistic over five to seven days in a good park, but
            not guaranteed on a shorter trip — rhino sightings especially depend on which specific
            reserve you're in. A guide who asks what you most want to see, rather than driving a
            fixed route, will usually get you better odds than chasing all five equally.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Can I see all Big Five in one national park?</h3>
              <p className="text-gray-700 leading-relaxed">
                Rarely in a single park — rhino populations are concentrated in specific
                conservancies. Most travelers combine the Masai Mara with Ol Pejeta or Lake Nakuru
                to see all five on one trip.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Why is the leopard the hardest to see?</h3>
              <p className="text-gray-700 leading-relaxed">
                Leopards are solitary and mostly active at night, spending daylight hours hidden
                in trees or dense brush, unlike the more visible, social lion or elephant.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Is the Big Five term still accurate today?</h3>
              <p className="text-gray-700 leading-relaxed">
                It's a legacy hunting term, not a measure of rarity or importance, but it remains
                the standard reference point most safari itineraries and guides still use.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/the-great-migration-explained" className="text-yellow-600 hover:text-yellow-700 font-semibold">The Great Migration Explained: When, Where and Why</Link></li>
            <li><Link href="/kenya/best-time-to-visit-kenya" className="text-yellow-600 hover:text-yellow-700 font-semibold">Best Time to Visit Kenya: A Season-by-Season Guide</Link></li>
            <li><Link href="/kenya/is-kenya-safe-for-tourists" className="text-yellow-600 hover:text-yellow-700 font-semibold">Is Kenya Safe for Tourists? What You Should Know</Link></li>
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
