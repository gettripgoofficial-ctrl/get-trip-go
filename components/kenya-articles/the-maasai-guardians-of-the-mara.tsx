import Image from "next/image"
export default function TheMaasaiGuardiansOfTheMaraArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        For much of the 20th century, conservation in Kenya meant pushing pastoralist communities
        off their land to make way for parks. The Maasai, whose traditional grazing lands overlap
        heavily with the Mara ecosystem, lived through that displacement — and are now, through
        the conservancy model, leading conservation on much of the same land rather than being
        shut out of it.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Traditional life:</span> Semi-nomadic pastoralists, historically organized around cattle herding across the Mara-Serengeti ecosystem.</li>
          <li><span className="font-semibold text-gray-900">The shift:</span> From being excluded when the Mara Reserve was created to now co-owning and leasing land as conservancy partners.</li>
          <li><span className="font-semibold text-gray-900">Where you'll meet Maasai guides:</span> Most conservancy camps around the Mara employ Maasai trackers, guides, and rangers.</li>
          <li><span className="font-semibold text-gray-900">Cultural visits:</span> Many camps offer optional visits to a working Maasai village (manyatta) as a paid, community-run add-on.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          A Complicated History With the Reserve
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          When the Maasai Mara National Reserve was formally established, Maasai communities that
          had grazed cattle across that land for generations were excluded from grazing and
          settlement inside its boundaries. It's a pattern repeated across much of colonial and
          early post-independence conservation in East Africa — land set aside for wildlife by
          removing the people who had lived alongside that wildlife the longest, on the
          assumption that human presence and conservation were incompatible.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          That exclusion left a legacy of tension: communities bearing the costs of living next to
          dangerous wildlife — lion attacks on livestock, elephants destroying crops — while
          receiving little of the tourism revenue that wildlife generated. The conservancy model
          that emerged decades later was, in part, a direct response to that imbalance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          From Excluded to Leading
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Conservancies bordering the Mara reserve reversed that relationship by leasing land
          directly from Maasai group ranches and individual landowners, turning wildlife habitat
          into a paying land use for the people who own it. Rather than being kept out, Maasai
          communities now often hold direct ownership stakes in conservancy land and sit on the
          boards that decide how it's managed — a structural shift from being conservation's
          subject to being one of its primary decision-makers.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Maasai men and women now work throughout the safari industry as guides, trackers,
          rangers, and lodge staff, often bringing generations of ecological knowledge about
          animal behavior and the landscape that goes beyond formal wildlife guide training. It's
          common on a conservancy game drive for a Maasai guide to point out signs — tracks,
          droppings, disturbed grass — that would go unnoticed by anyone without that inherited
          knowledge of the land.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
          alt="Maasai warriors in traditional dress near the Mara"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Visiting a Maasai Village
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Many camps near the Mara offer an optional visit to a manyatta — a Maasai homestead —
          typically run directly by the community as a paid experience, separate from the camp's
          own fees. A visit usually includes seeing the layout of a traditional homestead, a
          demonstration of the adumu (the well-known Maasai jumping dance), and time to see or buy
          beadwork made by local women.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          It's worth going in with the right expectations: some village visits near heavily
          touristed areas can feel staged or transactional, while others, especially those run
          through the conservancy a guest is actually staying on, feel more like a genuine
          exchange with income going directly to the community hosting it. Asking a guide how the
          visit is organized and where the money goes is a reasonable question to ask before
          booking one.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What the Partnership Still Has to Work Through
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The relationship between conservation and Maasai communities isn't fully settled.
          Younger generations increasingly balance traditional pastoralist life with formal
          education and wage employment in tourism, which shifts long-standing cultural patterns.
          Lease income and jobs vary significantly by conservancy, and not every community near
          protected land has benefited equally from the tourism economy built on it. The
          conservancy model is widely seen as a major improvement over outright exclusion, but
          it's an ongoing negotiation rather than a finished arrangement.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Were the Maasai forced off land to create the Mara Reserve?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — when the reserve was formally established, Maasai communities that had grazed
              cattle across that land for generations were excluded from settling or grazing
              inside its boundaries.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How are Maasai communities involved in conservation today?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Through the conservancy model, Maasai landowners lease land for wildlife use, often
              hold ownership stakes and board seats in conservancy management, and work widely as
              guides, trackers, and rangers.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is visiting a Maasai village worth doing?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It can be, especially through the conservancy a guest is staying on, though it's
              worth asking how the visit is organized and where the payment goes before booking
              one.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What does the adumu jumping dance mean?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It's a traditional Maasai dance historically performed by young warriors, where
              jumping height is a display of strength and skill, and it's a common part of a
              guided village visit.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
