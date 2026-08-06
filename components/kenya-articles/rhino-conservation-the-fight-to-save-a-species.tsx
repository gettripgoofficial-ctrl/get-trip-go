import Image from "next/image"
export default function RhinoConservationTheFightToSaveASpeciesArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Kenya holds most of what's left of East Africa's black and white rhino population, and
        almost all of it is concentrated in a handful of intensively protected sanctuaries. Rhino
        conservation here isn't a background activity alongside general wildlife protection —
        it's a specific, resource-heavy effort built around fenced sanctuaries, round-the-clock
        monitoring, and, for the northern white rhino, a last-ditch scientific rescue.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Where to see them:</span> Ol Pejeta Conservancy and Lake Nakuru National Park hold most of Kenya's black and white rhino.</li>
          <li><span className="font-semibold text-gray-900">Two species, two stories:</span> Black rhino are critically endangered and browse on shrubs; white rhino are less endangered and graze on grass.</li>
          <li><span className="font-semibold text-gray-900">The northern white rhino:</span> Only two individuals remain worldwide, both female, both living under guard at Ol Pejeta.</li>
          <li><span className="font-semibold text-gray-900">Protection model:</span> Fenced sanctuaries, dedicated ranger units, and often armed guards assigned specifically to rhino, separate from general park security.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why Rhinos Need a Different Kind of Protection
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Rhino horn is worth more by weight than gold or cocaine in some black markets, driven by
          demand — mostly across parts of Asia — where it's used as a status symbol and marketed
          as a cure for various ailments despite being made of keratin, the same material as human
          fingernails. That price makes rhinos a uniquely high-value poaching target, which is why
          they typically get a level of dedicated, fenced protection that most other species in
          the same parks don't require.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Many sanctuaries also physically dehorn rhinos under sedation as a deterrent — the horn
          regrows over time, similar to a fingernail, but a hornless rhino is a far less
          attractive target for poachers in the interim. It's an uncomfortable-looking but
          effective practice, and one of several tools conservancies use alongside armed
          patrols and monitoring.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Black Rhino vs White Rhino
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The two species are easy to tell apart once you know the difference despite similar
          coloring. Black rhino have a pointed, hooked upper lip built for browsing on leaves and
          shrubs, tend to be more solitary, and are generally more skittish around vehicles. White
          rhino have a wide, flat lip suited to grazing on grass, are more commonly seen in small
          groups, and tend to be calmer around safari vehicles — which is part of why white rhino
          sightings often feel more relaxed and prolonged than black rhino ones.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Black rhino are classified as critically endangered, with numbers still recovering from
          a catastrophic population collapse in the late 20th century. White rhino numbers are
          considerably higher and classified as near threatened, though the northern white rhino
          subspecies specifically has effectively gone extinct in the wild.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1591952096943-38ec1d9dae02?w=1200&q=80"
          alt="White rhino grazing in a Kenyan conservancy"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          The Last Two Northern White Rhinos
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Ol Pejeta Conservancy is home to Najin and Fatu, a mother-and-daughter pair who are the
          only two northern white rhinos left on the planet, both under permanent armed guard.
          With no living males of the subspecies remaining, natural reproduction is impossible, so
          scientists have turned to advanced reproductive technology — harvesting eggs from Fatu
          and using stored sperm from deceased males to create embryos, which are then implanted
          into southern white rhino surrogate mothers in an attempt to keep the subspecies from
          disappearing entirely.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          It's a genuinely unusual thing to be able to see in person — visitors to Ol Pejeta can
          view Najin and Fatu under guard, making it one of the only places in the world where you
          can witness the final stage of a subspecies' story unfolding in real time, alongside the
          science trying to prevent its ending.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where to See Rhinos in Kenya
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Ol Pejeta Conservancy in Laikipia holds the largest black rhino sanctuary in East Africa
          alongside the northern white rhino pair, and is generally considered the most reliable
          place in Kenya for rhino sightings. Lake Nakuru National Park is fully fenced and also
          holds a substantial population of both black and white rhino, making it a strong option
          for travelers combining a rhino sighting with the park's other wildlife and its
          lakeside setting.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Where is the best place to see rhinos in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ol Pejeta Conservancy and Lake Nakuru National Park hold the majority of Kenya's
              black and white rhino population and are the most reliable places for sightings.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How many northern white rhinos are left in the world?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Only two — Najin and Fatu, a mother-and-daughter pair living under armed guard at Ol
              Pejeta Conservancy, both female, meaning natural reproduction is no longer possible.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's the difference between black and white rhinos?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Black rhino have a pointed lip for browsing shrubs and are more solitary and
              skittish; white rhino have a flat lip for grazing grass and are typically calmer and
              seen in small groups.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Does dehorning hurt the rhino?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No — it's done under sedation and the horn is made of keratin, similar to a
              fingernail, so it regrows over time without lasting harm to the animal.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
