import Image from "next/image"
import Link from "next/link"

const packingList = [
  { category: "Clothing", items: "4-5 lightweight, neutral-colored tops; 2-3 trousers/shorts; a fleece or light jacket; a warm layer for early mornings" },
  { category: "Footwear", items: "One pair of comfortable closed-toe shoes; sandals for camp downtime" },
  { category: "Sun & Bugs", items: "Wide-brimmed hat, SPF 30+ sunscreen, DEET-based insect repellent, sunglasses" },
  { category: "Health", items: "Malaria tablets, personal medications, basic first-aid kit, hand sanitizer" },
  { category: "Gear", items: "Binoculars, camera with a zoom lens, spare batteries or a power bank, headlamp" },
  { category: "Documents", items: "Passport, Kenya eTA printout, yellow fever certificate if required, travel insurance details" },
]

export default function WhatToPackForKenyaSafariArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-151782480670.jpg"
          alt="Packed duffel bag and safari gear laid out before a trip"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Travel Tips
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            What to Pack for a Kenya Safari
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 7 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          A Kenya safari packs a surprising amount of climate into one trip — dusty afternoons,
          cold pre-dawn game drives, and the occasional downpour, sometimes all in the same day.
          The good news is that packing well for it doesn't mean packing a lot. Most seasoned
          safari-goers travel lighter than they expect, and light aircraft transfers between parks
          often make that a requirement rather than a preference.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Bag type:</span> a soft duffel, not a hard-shell suitcase — most light aircraft require it.</li>
            <li><span className="font-semibold text-gray-900">Weight limit:</span> typically 15kg total on light aircraft transfers, including hand luggage.</li>
            <li><span className="font-semibold text-gray-900">Colors:</span> stick to khaki, olive, and neutral tones — skip bright colors, white, black, and camouflage prints.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Why a Duffel Bag, Not a Suitcase
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            If your itinerary includes any light aircraft transfers between parks — common on
            routes linking the Mara, Amboseli, and Samburu — your luggage needs to be soft-sided
            so it can be packed into small cargo holds. Most operators cap baggage at around 15kg
            per person, sometimes less, and hard-shell suitcases are usually turned away at check-in.
            A 50-60 litre soft duffel is the standard choice.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-143649186533.jpg"
            alt="Safari vehicle packed and ready for a game drive"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Clothing: Fewer Pieces, Right Colors
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Most camps offer next-day laundry, so five days' worth of clothing is usually enough
            for a two-week trip. Stick to khaki, olive, tan, and other neutral tones — they hide
            dust well and don't startle wildlife the way bright colors or white can. Camouflage-
            patterned clothing is best avoided too, since it's associated with military and
            paramilitary use in parts of East Africa and can draw unwanted attention.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Layering matters more than volume. Early morning game drives can dip close to freezing
            at higher-elevation camps, even though afternoons are warm, so a fleece or light jacket
            earns its space in the bag every single day of the trip.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            The Full Packing List
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Category</th>
                  <th className="py-2 font-semibold text-gray-900">What to Bring</th>
                </tr>
              </thead>
              <tbody>
                {packingList.map(row => (
                  <tr key={row.category} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.category}</td>
                    <td className="py-2 text-gray-600">{row.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Practical Tips
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Weigh your bag before you leave home — overweight duffels get repacked or left behind at the airstrip.</li>
            <li>Pack a change of clothes in your carry-on in case checked luggage is delayed.</li>
            <li>Bring a printed copy of your Kenya eTA and yellow fever certificate, not just digital copies.</li>
            <li>A lightweight rain jacket is worth the space year-round, even outside the rainy seasons.</li>
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
