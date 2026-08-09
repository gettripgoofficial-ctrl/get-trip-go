import Image from "next/image"

export default function RareSightingsBlackRhinosArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Ol Pejeta Conservancy holds two rhino stories at once — a genuine conservation success and
        a race against extinction, both playing out on the same 90,000 acres of Laikipia
        grassland. It's East and Central Africa's largest black rhino sanctuary, and simultaneously
        the last home on Earth for the world's two remaining northern white rhinos.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Black rhino population:</span> Over 165 — the largest sanctuary population in East and Central Africa.</li>
          <li><span className="font-semibold text-gray-900">Northern white rhinos:</span> Just 2 individuals left on Earth, Najin and Fatu, both at Ol Pejeta.</li>
          <li><span className="font-semibold text-gray-900">Location:</span> Laikipia County, roughly 3.5-4.5 hours north of Nairobi by road.</li>
          <li><span className="font-semibold text-gray-900">Entry fee:</span> Around USD 110 per non-resident adult, with rhino-specific experiences priced separately.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          A Genuine Conservation Recovery Story
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Black rhino numbers collapsed by roughly 97.6% between 1960 and the 1990s, driven almost
          entirely by poaching — from an estimated 2,300 individuals left across the wild by 1993
          to what looked like a species heading toward extinction. Conservation efforts across
          Kenya and southern Africa have since pushed that number back above 6,000, and Ol Pejeta
          has been one of the biggest contributors to that recovery, now sheltering more than 165
          eastern black rhinos behind dedicated protection.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Najin and Fatu: The Last Northern White Rhinos
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Ol Pejeta is home to Najin and Fatu, the only two northern white rhinos left in
          existence, following the death of the last male, Sudan, in 2018. They arrived at Ol
          Pejeta in 2009 from a zoo in the Czech Republic, and today live in a secure,
          round-the-clock protected enclosure. A guided visit to meet them, priced separately from
          general park entry, is one of the more genuinely moving wildlife encounters available in
          Kenya — not a typical sighting, but a chance to stand in front of the literal end of a
          subspecies.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Neither Najin nor Fatu can carry a pregnancy naturally, which is why their survival now
          depends entirely on assisted reproduction. Scientists with the BioRescue Consortium have
          successfully created dozens of northern white rhino embryos using eggs harvested from
          Fatu, implanting them into southern white rhino surrogates at Ol Pejeta in an ongoing
          attempt to produce a viable pregnancy — a scientific effort with no guaranteed outcome,
          but one actively unfolding on the conservancy grounds you can visit.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="/images/external/unsplash-153456711024.jpg"
          alt="Black rhino grazing at Ol Pejeta Conservancy in Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Meeting Baraka, the Blind Black Rhino
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          At the Morani Information Centre, visitors can meet Baraka, a black rhino blinded years
          ago and unable to survive independently in the wild. Feeding him from a raised viewing
          platform is included in standard park admission, making it an accessible and popular
          stop for families and anyone who wants a close, safe rhino encounter without booking a
          separate paid activity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Rhino Tracking and Beyond the Rhinos
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Ol Pejeta also offers guided rhino tracking on foot alongside armed rangers, following
          radio-collared individuals for a closer, slower encounter than a standard game drive
          provides. Beyond its rhino programs, the conservancy holds the full Big Five, healthy
          predator populations, and Kenya's only chimpanzee sanctuary at Sweetwaters — home to
          orphaned and rescued chimpanzees cared for in partnership with the Jane Goodall
          Institute, making Ol Pejeta a worthwhile full-day stop even beyond its rhino programs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How many black rhinos live at Ol Pejeta?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Over 165, making it the largest black rhino sanctuary in East and Central Africa.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are there any northern white rhinos left in the world?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Only two, Najin and Fatu, both female, both living at Ol Pejeta Conservancy under
              round-the-clock protection.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can you get close to the rhinos at Ol Pejeta?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — guided visits to see Najin and Fatu are available, along with rhino tracking
              on foot and the chance to feed Baraka, a blind black rhino, from a viewing platform.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How far is Ol Pejeta from Nairobi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Roughly 3.5 to 4.5 hours by road, making it a feasible stop within a Kenya highlands
              or Mount Kenya-area itinerary rather than a standalone trip.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
