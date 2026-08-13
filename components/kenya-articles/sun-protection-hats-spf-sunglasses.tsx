import Link from "next/link"
import Image from "next/image"

export default function SunProtectionHatsSpfSunglassesArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Kenya sits almost directly on the equator, and much of the safari circuit is at meaningful
        altitude on top of that — a combination that makes UV exposure noticeably stronger than
        most travelers expect, even on a mild, overcast-feeling day.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">SPF:</span> 30–50, reapplied every 2–3 hours during a game drive.</li>
          <li><span className="font-semibold text-gray-900">Hat:</span> Wide-brimmed, not just a cap — ears and neck burn too.</li>
          <li><span className="font-semibold text-gray-900">Sunglasses:</span> UV-blocking, polarized helps with glare off open plains.</li>
          <li><span className="font-semibold text-gray-900">Highest risk:</span> Midday game drives and higher-elevation camps like the Mara or Aberdares.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Equatorial Sun Is Different
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          UV intensity is highest near the equator because sunlight travels a more direct path
          through the atmosphere there than it does at higher or lower latitudes. Add altitude —
          many of Kenya's safari areas, including the Masai Mara, sit at 1,500–2,000 meters
          (5,000–6,500 feet) — and UV exposure climbs further, since thinner air at elevation
          filters out less radiation. The practical result is that travelers used to their home
          climate's sun regularly underestimate how fast they burn in Kenya, especially during an
          open-vehicle game drive with no real shade for hours at a time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Hats: Why a Wide Brim Beats a Cap
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          A baseball cap protects your scalp and forehead but leaves ears, the back of the neck,
          and the sides of your face exposed — all common sunburn spots on a multi-day safari. A
          wide-brimmed hat covers all of that, and a chin strap or cord is genuinely useful in an
          open vehicle moving at speed, where a loose hat is likely to blow off. Neutral colors
          matter here too, for the same reasons covered in our guide on{" "}
          <Link href="/kenya/what-to-wear-on-a-kenya-safari" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            what to wear on safari
          </Link>.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-1547721064-d.jpg"
          alt="Open plains under bright equatorial sun in Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Sunscreen: What Actually Holds Up on Safari
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          SPF 30 to 50 is a reasonable range for most skin types, but the bigger issue is
          reapplication — sweat, dust, and hours of continuous exposure during a game drive wear
          sunscreen down faster than a normal day at home would. Reapplying every two to three
          hours, and immediately after any water activity, matters more than chasing a slightly
          higher SPF number. A stick or spray formula is easier to reapply quickly in a moving
          vehicle than a lotion that needs rubbing in.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Sunglasses and Glare
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Open grassland and dry, light-colored earth reflect a surprising amount of glare,
          especially around midday. Polarized, UV-blocking sunglasses cut that glare significantly
          and make it easier to actually spot wildlife against a bright, washed-out landscape,
          which is a practical benefit beyond just eye protection. A retention strap is worth
          packing too, given how much time you'll spend in an open, bumpy vehicle.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is sun exposure really stronger in Kenya than at home?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, generally — equatorial location combined with the altitude of many safari areas
              increases UV intensity compared to most travelers' home climates.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How often should I reapply sunscreen on a game drive?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Roughly every two to three hours during extended sun exposure, and sooner if you're
              sweating heavily or the drive runs through the middle of the day.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do I need polarized sunglasses specifically?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Not strictly required, but polarized lenses noticeably cut glare off open grassland
              and dry ground, making it easier to spot wildlife as well as protecting your eyes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
