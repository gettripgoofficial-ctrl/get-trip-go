import Image from "next/image"
export default function PlasticBagBanWhatsIllegalToBringArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Kenya has one of the strictest single-use plastic bans in the world, and it genuinely
        catches travelers off guard — plastic bags brought in from home, even unintentionally
        packed inside luggage, can be confiscated at the border, and in more serious cases the ban
        carries real legal penalties.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Plastic bags:</span> Banned for use, sale, and import — plastic carrier and shopping bags are the primary target.</li>
          <li><span className="font-semibold text-gray-900">Single-use plastics in parks:</span> A separate, stricter ban covers single-use plastics (bottles, straws, cutlery) inside national parks and protected areas.</li>
          <li><span className="font-semibold text-gray-900">What's fine:</span> Reusable bags, most packaging plastic (like ziplock bags for personal items), and non-bag plastic items are generally not targeted.</li>
          <li><span className="font-semibold text-gray-900">Enforcement:</span> Bags found in luggage at the airport are typically confiscated rather than resulting in serious punishment for tourists.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What the Ban Actually Covers
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kenya's plastic bag ban prohibits the manufacture, sale, and use of plastic carrier and
          flat bags — the kind typically handed out at shops and supermarkets. This isn't a symbolic
          policy; it's actively enforced, and the law technically carries significant fines and
          even potential jail time for violations, though in practice enforcement against tourists
          typically means confiscation of bags found in luggage rather than legal consequences.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          A related but separate policy bans single-use plastics specifically within national
          parks, reserves, and protected conservation areas — meaning even if you've avoided
          plastic bags, single-use plastic water bottles, straws, and cutlery can still be
          restricted once you're inside a park boundary, regardless of whether you brought them
          from home or bought them locally.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What Travelers Actually Need to Watch For
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The most common way travelers run into this rule isn't intentional — it's the plastic
          bags airlines, retailers, or duty-free shops pack items in before departure, still sitting
          inside a suitcase on arrival. It's worth doing a quick check of checked and carry-on bags
          before landing in Kenya and removing any loose plastic shopping bags you might not have
          thought twice about at home.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Packaging like ziplock bags for toiletries, medication, or electronics, and other
          non-carrier plastic items generally aren't the target of enforcement and are fine to
          bring — the ban is specifically aimed at flat, handled plastic shopping and carrier bags,
          not plastic packaging in general.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-1547471080-7.jpg"
          alt="Reusable bags packed for travel to Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Practical Tips for Packing
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Packing a couple of reusable fabric or woven bags for the trip covers most of what you'd
          otherwise reach for a plastic bag for — laundry, wet swimwear, or shopping at a market.
          Most established hotels, lodges, and shops in Kenya are already fully adapted to the ban
          and will offer paper or reusable alternatives without you needing to ask, so the
          adjustment tends to be smaller in practice once you're actually in the country than the
          rule might initially suggest.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Will my plastic bags be confiscated at the Kenya border?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Plastic carrier and shopping bags found in luggage are typically confiscated at
              customs, so it's worth checking your bags for any loose plastic bags before arrival.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are ziplock bags and other plastic packaging banned too?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No — the ban targets flat, handled plastic carrier and shopping bags specifically,
              not general plastic packaging like ziplock bags for toiletries or electronics.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are single-use plastics banned in national parks too?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — a separate, stricter policy restricts single-use plastics like water bottles,
              straws, and cutlery within national parks, reserves, and protected areas.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What should I pack instead of plastic bags?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A couple of reusable fabric or woven bags cover most needs, like laundry or wet
              swimwear, and most hotels and shops already offer paper or reusable alternatives.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
