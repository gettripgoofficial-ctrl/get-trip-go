import Image from "next/image"
export default function IloraRetreatsDesignLedLuxuryInTheMaraArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Ilora Retreats takes the classic Mara tented camp and runs it through a design-forward
        lens — an intimate, design-led property that trades the traditional heavy canvas-and-
        khaki look for something more contemporary, without losing the sense of being genuinely
        out in the bush.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Location:</span> Masai Mara ecosystem, positioned for easy access to game drive territory.</li>
          <li><span className="font-semibold text-gray-900">Style:</span> Intimate, design-led tented retreat with a contemporary rather than traditional safari aesthetic.</li>
          <li><span className="font-semibold text-gray-900">Best for:</span> Travelers who want a more design-conscious, boutique feel without sacrificing genuine wilderness access.</li>
          <li><span className="font-semibold text-gray-900">Size:</span> A small, intimate number of tents, keeping the guest experience personal rather than large-scale.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          A Different Take on the Mara Tented Camp
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most classic Mara camps lean into a traditional safari aesthetic — canvas tents,
          campaign furniture, a deliberately old-colonial feel. Ilora Retreats takes a more
          contemporary design approach instead, with cleaner lines, considered interiors, and an
          overall look that feels closer to a boutique design hotel than a period-piece safari
          camp, while still delivering the tented, canvas-walled experience of genuinely being out
          in the Mara.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          That design-forward approach tends to appeal particularly to travelers who want the
          wildlife and wilderness experience of a Mara safari without the more nostalgic,
          old-world styling that dominates much of the region's camp aesthetic — proof that a
          tented camp doesn't have to look like it stepped out of the 1920s to feel authentic to
          its setting.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Intimate Scale
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          With only a small number of tents, Ilora Retreats keeps the guest experience genuinely
          personal — staff-to-guest ratios stay high, and the camp doesn't feel like it's running
          multiple groups through a large-scale operation. This intimate footprint also tends to
          translate into more flexible, personalized game drive planning, since the camp isn't
          coordinating dozens of vehicles and guests at once.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          For travelers who find larger camps impersonal, a smaller design-led property like this
          one offers a different pace — quieter common areas, more one-on-one time with guides,
          and a stronger sense of the camp being tailored around the specific guests staying
          there.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-156808468078.jpg"
          alt="Design-forward tented suite interior in the Masai Mara"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Access to the Mara Ecosystem
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Being based in the Masai Mara ecosystem puts guests within reach of the region's
          headline draws — big cat sightings, the seasonal Great Migration herds, and the varied
          terrain that makes the Mara one of Africa's most consistently productive wildlife
          destinations. Game drives from the camp cover this territory with the same access most
          Mara-area properties offer, wrapped in a notably different design sensibility once
          you're back at camp.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What makes Ilora Retreats different from other Mara camps?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A contemporary, design-led aesthetic rather than the traditional colonial-style
              safari look most Mara camps use, combined with an intentionally intimate scale.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is Ilora Retreats a good fit for a first Mara safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — it offers full access to the Mara ecosystem's wildlife and migration territory,
              suited to travelers who also want a more design-conscious, boutique atmosphere.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Why does camp size matter for the guest experience?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A smaller camp typically means higher staff-to-guest ratios, more personalized game
              drive planning, and a quieter, less crowded overall pace.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What wildlife can you see from a camp based in the Mara ecosystem?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Big cats, resident plains game, and, seasonally, the Great Migration herds — the same
              headline sightings most Mara-area properties offer access to.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
