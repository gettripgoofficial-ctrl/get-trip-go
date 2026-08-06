import Image from "next/image"
export default function KenyasBigCatsComparedArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Lion, leopard, and cheetah share the same plains, the same prey, and — from a distance —
        can look confusingly similar to a first-time visitor. Up close, though, they're built for
        completely different lives, and knowing what sets them apart makes every sighting easier to
        read and far more rewarding.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Fastest identifier:</span> Spot pattern — solid round spots (cheetah) vs. rosettes (leopard) vs. no spots, just a mane on males (lion).</li>
          <li><span className="font-semibold text-gray-900">Most social:</span> Lions, the only big cat that lives in family groups called prides.</li>
          <li><span className="font-semibold text-gray-900">Strongest:</span> Leopards, pound for pound — able to drag a kill heavier than themselves up a tree.</li>
          <li><span className="font-semibold text-gray-900">Fastest:</span> Cheetahs, by a wide margin, though only in short bursts.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Lions: Africa's Only Social Cat
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Lions are the only big cat that lives in true family groups, called prides — typically a
          handful of related females, their cubs, and one or more resident males. That social
          structure changes everything about how lions hunt: rather than relying purely on stealth
          or speed, prides coordinate, with lionesses doing most of the hunting cooperatively while
          males primarily defend territory and cubs from rival males and other predators.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Males are unmistakable thanks to their mane, which darkens and thickens with age and
          testosterone — a rough, informal way to judge a male's maturity in the field. Lions hunt
          mainly at dawn, dusk, and through the night, and spend a striking amount of daylight simply
          resting, often 16 to 20 hours a day.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Leopards: The Solitary Ambush Hunter
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Leopards are built almost opposite to lions in every way — solitary, stealthy, and
          intensely private. Their rosette-patterned coat (open circles with a darker center, unlike
          the cheetah's solid dots) provides near-perfect camouflage in dappled light, which suits
          their ambush hunting style: stalk as close as possible, then explode into a short, powerful
          charge rather than a long chase.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Leopards are also, pound for pound, the strongest of the three — strong enough to haul a
          kill significantly heavier than themselves up into a tree, safely out of reach of lions and
          hyenas. That single behavior is often the clearest giveaway of a leopard in the area, even
          when the cat itself is out of sight. They're the most adaptable of the three as well,
          equally at home in woodland, rocky kopjes, riverine forest, and even the edges of urban
          areas.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1554990772-0bea55d510d5?w=1200&q=80"
          alt="A pride of lions resting together on the plains of the Masai Mara, Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Cheetahs: Built for the Chase
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Cheetahs trade strength for pure speed — a lighter frame, longer legs, and a flexible spine
          that let them reach up to 100–120 km/h in short bursts, hunting almost entirely by daylight
          rather than competing with lions and leopards after dark. Unlike leopards, they're not
          strong climbers and can't defend a kill from a determined lion or hyena, which is why they
          eat quickly and abandon a carcass rather than risk a fight.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Females are largely solitary, raising cubs alone, while males often form small
          "coalitions" of two or three — usually brothers — that hunt and defend territory together.
          For a deeper look at cheetah behavior and where to find them, see our{" "}
          <a href="/kenya/cheetahs-of-the-mara" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            dedicated cheetah guide
          </a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          How to Tell Them Apart at a Glance
        </h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-4 font-semibold text-gray-900"></th>
                <th className="py-2 pr-4 font-semibold text-gray-900">Lion</th>
                <th className="py-2 pr-4 font-semibold text-gray-900">Leopard</th>
                <th className="py-2 font-semibold text-gray-900">Cheetah</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 text-gray-800 font-medium">Coat pattern</td>
                <td className="py-2 pr-4 text-gray-600">Plain tawny, no spots (adults)</td>
                <td className="py-2 pr-4 text-gray-600">Rosettes (open circles)</td>
                <td className="py-2 text-gray-600">Solid round spots + black tear lines</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 text-gray-800 font-medium">Social structure</td>
                <td className="py-2 pr-4 text-gray-600">Prides (social)</td>
                <td className="py-2 pr-4 text-gray-600">Solitary</td>
                <td className="py-2 text-gray-600">Mostly solitary; males in small coalitions</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 text-gray-800 font-medium">Active mainly</td>
                <td className="py-2 pr-4 text-gray-600">Dawn, dusk, night</td>
                <td className="py-2 pr-4 text-gray-600">Mostly night</td>
                <td className="py-2 text-gray-600">Daylight</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-800 font-medium">Signature trait</td>
                <td className="py-2 pr-4 text-gray-600">Male's mane</td>
                <td className="py-2 pr-4 text-gray-600">Kills stashed in trees</td>
                <td className="py-2 text-gray-600">Explosive short-range speed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where You're Most Likely to See Each One
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Lions are the easiest of the three to find, since prides are large, active by dawn and
          dusk, and roam open ground where vehicles can spot them easily — the Masai Mara, Amboseli,
          and Tsavo all hold healthy resident populations. Leopards are the hardest, precisely
          because they're solitary and often resting in thick cover or up a tree by day; riverine
          forest edges and rocky areas are the best places to scan carefully. Cheetahs sit in
          between — resident in open-plains conservancies like Naboisho and Mara North, and easier to
          spot than leopards simply because they're active in daylight.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Who Wins in a Conflict? The Pecking Order
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Among the three, lions dominate outright — prides will kill leopards and cheetahs given the
          chance, and routinely steal kills from both. Leopards generally avoid direct confrontation
          with lions but can usually hold their own against a cheetah, which is one reason cheetahs
          favor open plains where leopards rarely hunt. Cheetahs sit at the bottom of the hierarchy:
          too light to fight off either rival, they survive by avoiding confrontation entirely rather
          than winning it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's the easiest way to tell a leopard from a cheetah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Look at the spots and the build. Cheetahs have solid round spots, black "tear line"
              markings from the eyes to the mouth, and a slim, greyhound-like frame. Leopards have
              open rosette-shaped spots and a stockier, more muscular build.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Which is more dangerous to encounter: a lion, leopard, or cheetah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Lions, by a wide margin, given their size, strength, and social hunting behavior.
              Leopards can be dangerous if surprised or cornered. Cheetahs are generally the least
              aggressive toward humans of the three.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Why do leopards drag their kills into trees?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To protect the kill from lions and hyenas, which can't climb well enough to follow.
              It's one of the clearest field signs of a leopard's presence, even without seeing the
              cat itself.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Which of the three is easiest to spot on safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Lions, generally — they're social, active at dawn and dusk when game drives run, and
              rest in the open rather than hiding in cover the way leopards do.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
