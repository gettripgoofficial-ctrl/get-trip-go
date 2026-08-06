import Image from "next/image"
export default function WhatHappensIfYouGetSickDuringASafariArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Camps have first-response protocols and access to flying-doctor evacuation if needed, so
        getting sick or injured on safari — while not something anyone plans for — isn't the
        crisis it might sound like when you're picturing being hours from the nearest hospital. It
        helps to know how the system actually works before you go, mainly so you can relax and
        enjoy the trip.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">First response:</span> Most camps have basic first aid supplies and staff trained to handle common issues on-site.</li>
          <li><span className="font-semibold text-gray-900">Serious cases:</span> Flying-doctor evacuation services can airlift guests from remote camps to Nairobi hospitals within hours.</li>
          <li><span className="font-semibold text-gray-900">Coverage:</span> Most flying-doctor services require membership or travel insurance that includes medical evacuation — worth confirming before you go.</li>
          <li><span className="font-semibold text-gray-900">Common issues:</span> Minor stomach upset, sunburn, and dehydration are the most frequent complaints; serious wildlife-related incidents are rare.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          What Camps Handle On-Site
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most established camps keep a basic first aid kit and have at least one staff member
          with first aid training, capable of managing minor cuts, stomach upset, dehydration, and
          the kind of everyday travel ailments that come up on any trip. For anything beyond that
          level, camps are generally well-practiced at assessing when a situation needs outside
          medical support rather than attempting to handle it entirely on-site.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The most common issues on safari tend to be fairly mundane — mild stomach upset from an
          unfamiliar diet or water source, sunburn from underestimating equatorial sun exposure,
          and dehydration from long, hot days out on game drives. Staying on top of hydration and
          sun protection prevents most of what actually comes up in practice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Flying-Doctor Evacuation for Serious Cases
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          For anything genuinely serious — a significant injury, a medical emergency, something
          beyond what camp staff can manage — Kenya's flying-doctor services can airlift a patient
          from a remote camp's airstrip to a Nairobi hospital, often within a few hours of the
          call going out. Most camps and conservancies have an established relationship with these
          services and know exactly how to trigger an evacuation quickly, using their own radio
          systems even in areas with no cell signal.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Coverage for this kind of evacuation typically comes through either a short-term
          membership with a flying-doctor service, purchased before your trip, or through travel
          insurance that specifically includes medical evacuation coverage. It's worth confirming
          which route your trip is covered under before you go, since evacuation costs without
          coverage can be substantial.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1779216175784-a67b6da108bb?w=1200&q=80"
          alt="Small aircraft on a remote airstrip in Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Preparing Before You Go
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Travel insurance that explicitly covers medical evacuation is worth prioritizing over a
          policy that only covers standard medical treatment, given how remote many camps are.
          Packing a personal first aid kit with any prescription medications, basic pain relief,
          and rehydration salts covers the gap between what you might need and what a camp
          typically stocks. Letting your operator or camp know about any existing medical
          conditions ahead of time also means staff can plan appropriately rather than being
          caught off guard in the field.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What happens if I get seriously injured on safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Camps coordinate flying-doctor evacuation to a Nairobi hospital using radio
              communication, even in areas with no cell signal, often getting a patient airlifted
              within a few hours.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do I need special insurance for a Kenya safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Travel insurance that specifically includes medical evacuation is strongly
              recommended, since standard medical coverage alone may not cover an airlift from a
              remote camp.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What are the most common health issues on safari?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mild stomach upset, sunburn, and dehydration are the most frequent complaints —
              serious injuries or wildlife-related incidents are rare.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Should I bring my own first aid supplies?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — a basic kit with any prescription medications, pain relief, and rehydration
              salts covers common needs that camps may not specifically stock for you.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
