import Image from "next/image"
import Link from "next/link"

const gearTable = [
  { item: "Camera body", note: "Any mirrorless or DSLR with fast autofocus works well" },
  { item: "Zoom lens", note: "70-200mm minimum; 100-400mm or longer is ideal for distant subjects" },
  { item: "Memory cards", note: "Bring more than you think — 2-3x your usual storage" },
  { item: "Batteries", note: "At least 2 spares; cold mornings drain batteries faster" },
  { item: "Bean bag or mount", note: "Stabilizes shots against the vehicle window or roof hatch" },
  { item: "Lens cloth", note: "Dust is constant — clean your lens more often than you'd expect" },
]

export default function SafariPhotographyArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-153456711024.jpg"
          alt="Photographer capturing wildlife from a safari vehicle"
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
            Safari Photography: Camera Gear and Settings
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 9 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          You don't need professional gear to come home with genuinely good safari photos, but a
          few equipment choices and camera settings make a real difference — especially when a
          cheetah breaks into a sprint and you have about three seconds to react.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Lens:</span> a 100-400mm zoom covers nearly every safari situation.</li>
            <li><span className="font-semibold text-gray-900">Shutter speed:</span> 1/1000s or faster for moving animals.</li>
            <li><span className="font-semibold text-gray-900">Mode:</span> shoot in aperture priority or manual for consistent results.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Choosing the Right Lens
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Reach matters more than anything else on safari. A 70-200mm lens works for closer
            sightings, but a lot of the best moments — a leopard in a distant tree, a lion pride
            resting far from the track — happen well beyond that range. A 100-400mm or longer zoom
            is the sweet spot for most travelers, giving flexibility without the bulk of a
            professional wildlife lens.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="/images/external/unsplash-145692663137.jpg"
            alt="Leopard resting on a tree branch, photographed with a telephoto lens"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Camera Settings That Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            For anything moving — a running cheetah, birds in flight, an elephant flapping its ears
            — set your shutter speed to at least 1/1000s to avoid motion blur. For stationary
            subjects like a resting lion, 1/250s is usually enough. Continuous (burst) shooting
            mode helps capture the exact right moment in fast action, and continuous autofocus
            tracking keeps a moving subject sharp as it crosses the frame.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Early morning and late afternoon light — the same golden hours guides favor for game
            drives — also happen to be the best light for photography, so the timing works in your
            favor naturally.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Gear Checklist
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Item</th>
                  <th className="py-2 font-semibold text-gray-900">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {gearTable.map(row => (
                  <tr key={row.item} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="py-2 text-gray-600">{row.note}</td>
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
            <li>Keep your camera accessible, not packed away — good moments happen with no warning.</li>
            <li>A bean bag draped over the vehicle window frame stabilizes shots far better than handholding.</li>
            <li>Back up photos each evening to a laptop, external drive, or cloud storage if you have signal.</li>
            <li>Don't chase every sighting through the viewfinder — put the camera down occasionally and just watch.</li>
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
