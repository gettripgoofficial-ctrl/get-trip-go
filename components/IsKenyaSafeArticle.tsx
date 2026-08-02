import Image from "next/image"
import Link from "next/link"

export default function IsKenyaSafeArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1600&q=80"
          alt="Healthcare worker administering a vaccination"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Health & Safety
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Is Kenya Safe for Tourists? What You Should Know
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 6 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Safety questions come up more for Kenya than for many destinations, partly due to
          outdated media coverage from the 2000s and 2010s. The realistic picture today is more
          nuanced: safari areas are very safe, Nairobi requires normal city awareness, and a
          handful of border regions are best avoided — which is exactly how most experienced
          travelers already plan their trips.
        </p>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            On Safari
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Safari camps and lodges are among the safest environments you'll be in on the entire
            trip. Game drives are guided, vehicles are experienced with wildlife behavior, and
            camps in the Mara, Amboseli, Tsavo, and similar parks see a huge volume of tourists
            every year without incident. The main real risks are more mundane than people expect:
            sunburn, dehydration, and motion sickness on bumpy roads, not crime or wildlife
            attacks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            In Nairobi and Other Cities
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Nairobi is a large African capital and carries the same risks as any major city —
            petty theft, pickpocketing in crowded areas, and opportunistic crime, particularly
            after dark. Most tourists pass through Nairobi only briefly, between the airport and a
            safari transfer, and don't experience issues. Standard precautions apply: use
            registered taxis or your hotel's transport, keep valuables out of sight, and avoid
            walking alone at night in unfamiliar areas.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80"
            alt="Lodge suite overlooking the Masai Mara"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Areas to Avoid
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kenya's government and most foreign offices advise against travel to areas near the
            Somali border (the northeast) and some parts of the coast near the Somali border
            region, due to a history of terrorism-related incidents. These areas are not part of
            any standard safari itinerary, so for the vast majority of travelers this simply isn't
            relevant — it only matters if you're planning independent travel far off the typical
            tourist routes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Health and Wildlife
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Malaria risk exists in most safari regions (though not at higher elevations like
            Nairobi), so prophylaxis is generally recommended. Wildlife-related injuries are rare
            precisely because reputable operators enforce strict rules — staying in the vehicle,
            keeping a safe distance, and following guide instructions. Injuries almost always trace
            back to someone ignoring those rules, not bad luck.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            The Practical Takeaway
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Kenya's safari circuit — the Mara, Amboseli, Tsavo, Samburu, and similar parks — has an
            excellent safety record and is what almost every tourist actually experiences. The
            perception gap exists because "Kenya" as a country includes regions tourists never
            visit, the same way "is the US safe" would be a strange question if you were only
            asking about a resort town. Book with a reputable operator, buy proper travel
            insurance, and the actual on-the-ground risk is low.
          </p>
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
