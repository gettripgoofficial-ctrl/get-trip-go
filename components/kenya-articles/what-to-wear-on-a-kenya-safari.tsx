import Link from "next/link"

export default function WhatToWearOnAKenyaSafariArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Safari packing lists tend to overcomplicate a simple idea: neutral colors, breathable
        layers, and clothes you don't mind getting dusty. Get those three things right and the
        rest of the list mostly takes care of itself.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Colors:</span> Khaki, olive, tan, brown — avoid bright colors, white, and black.</li>
          <li><span className="font-semibold text-gray-900">Fabric:</span> Lightweight cotton or technical safari fabric, not synthetic athletic wear.</li>
          <li><span className="font-semibold text-gray-900">Layers:</span> A warm layer is essential even in dry season — mornings are cold.</li>
          <li><span className="font-semibold text-gray-900">Avoid:</span> Blue and black clothing in tsetse fly areas (see our dedicated guide on that).</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Neutral Colors Actually Matter
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Khaki, olive, tan, and muted brown aren't a fashion choice on safari — they genuinely
          help you blend into dry grass and dust, which matters for both wildlife viewing and
          photography (bright colors show up jarringly in photos of an otherwise muted
          landscape). White gets dirty almost immediately and shows dust badly. Black absorbs
          heat in direct sun and, in certain regions, is one of two colors that specifically
          attracts tsetse flies — worth knowing before you pack a favorite black t-shirt for the
          whole trip.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Fabric: Why Cotton Beats Synthetic
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Technical athletic fabrics that work well for hiking or running tend to trap heat and
          odor on a multi-day safari where laundry access is limited. Lightweight cotton or
          cotton-blend safari fabric breathes better in dry heat, feels less sticky after a full
          day in an open vehicle, and generally handles repeated wear between camp laundry
          services more comfortably. Quick-dry fabric is still useful for anything you might need
          to hand-wash yourself, but it shouldn't be your only choice for the whole trip.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
          alt="Safari lodge interior with neutral tones"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Layering for Cold Mornings and Hot Afternoons
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The single most common packing mistake is underestimating how cold early morning game
          drives get, even during dry season and even close to the equator. Open safari vehicles
          moving at speed in pre-dawn temperatures can feel genuinely cold enough for a fleece or
          light jacket, gloves, and a warm hat — all of which usually come off entirely by
          mid-morning as temperatures climb into the 25–30°C (77–86°F) range. A simple three-layer
          system (base layer, warm mid-layer, and a light jacket or fleece) covers the full swing
          without overpacking.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What You Actually Need for a Week
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
          <li>3–4 short-sleeve shirts, neutral colors, breathable fabric</li>
          <li>2–3 long-sleeve shirts (sun and mosquito protection for dawn/dusk drives)</li>
          <li>2 pairs of lightweight trousers, ideally quick-dry</li>
          <li>1 fleece or light jacket for cold mornings</li>
          <li>1 warm hat and light gloves if traveling June–August</li>
          <li>A wide-brimmed sun hat</li>
          <li>Sleepwear and a change of casual clothes for evenings at camp</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most camps offer same-day or next-day laundry service, which is why packing for a full
          two weeks rarely makes sense — a well-chosen week's worth of clothing, supplemented by
          camp laundry, usually covers even a longer trip. For a complete day-by-day breakdown,
          see our{" "}
          <Link href="/kenya/packing-list-for-a-10-day-kenya-safari" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            10-day packing list
          </Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What colors should I avoid on a Kenya safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Avoid white (shows dust), black (absorbs heat and attracts tsetse flies), and bright
              colors (unnatural against the landscape and can startle wildlife at close range).
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do I really need a warm layer if I'm visiting in dry season?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — early morning game drives are cold even in peak dry season, especially at
              higher-elevation camps, regardless of how hot the afternoon gets.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is cotton or synthetic fabric better for safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Lightweight cotton or cotton-blend fabric generally performs better across a
              multi-day safari than synthetic athletic wear, which tends to trap heat and odor.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
