import Image from "next/image"

export default function GiraffesOfKenyaArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Most first-time visitors assume "giraffe" is just one animal to check off the list. Kenya
        actually hosts three genetically distinct species — more than any other country on Earth
        — and once you know what to look for, telling them apart from a moving vehicle takes
        seconds, not guesswork.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Masai giraffe:</span> Southern and central Kenya — Mara, Amboseli, Tsavo. Messy, leaf-shaped spots down to the hooves.</li>
          <li><span className="font-semibold text-gray-900">Reticulated giraffe:</span> Northern Kenya — Samburu, Laikipia, Meru. Clean polygon patches divided by bright white lines.</li>
          <li><span className="font-semibold text-gray-900">Rothschild's giraffe:</span> Lake Nakuru, and Nairobi's Giraffe Centre. No markings below the knee — looks like it's wearing white socks.</li>
          <li><span className="font-semibold text-gray-900">Conservation status:</span> All three are classified as Endangered.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Masai Giraffe: The One Most Visitors See
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Masai giraffe is the giraffe most safari visitors actually encounter, since it
          ranges across the classic southern circuit — the Masai Mara, Amboseli, Tsavo, and
          Nairobi National Park. Its coat shows messy, ragged-edged spots that look almost like
          torn leaves, extending all the way down to the hooves rather than stopping partway up
          the leg. It's the most widespread of Kenya's three species, and the one that appears in
          most classic safari photographs against a Kilimanjaro or Mara backdrop.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Reticulated Giraffe: The Northern Specialist
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Also known as the Somali giraffe, the reticulated giraffe is confined to northern Kenya
          — Samburu, Buffalo Springs, Shaba, and the Laikipia conservancies are the reliable
          places to find it. Its pattern is the easiest of the three to identify at a glance: large,
          clean-edged liver-brown polygons separated by a bright white grid, giving the coat a
          distinctive net-like appearance. With an estimated 8,500-15,000 individuals left in the
          wild, seeing one in Samburu is a genuine highlight for travelers extending their trip
          north of the classic southern circuit.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1200&q=80"
          alt="Reticulated giraffe with distinctive net-pattern coat in northern Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Rothschild's Giraffe: The Rarest and the One With "Socks"
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Rothschild's giraffe, sometimes called the Baringo giraffe after Kenya's Lake Baringo
          region, is the rarest of the three, with roughly 1,600-2,000 individuals left in the
          wild as of recent counts. It's easy to confuse with the Masai giraffe at a distance,
          since both have jagged brown patches, but Rothschild's markings are paler, less ragged,
          and — the giveaway — the lower legs are completely unmarked, giving the impression of
          white stockings. Lake Nakuru National Park is the most reliable place to see them in
          the wild, and Nairobi's Giraffe Centre offers a close, hand-feeding encounter with the
          species for visitors who won't make it further afield.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Telling Them Apart at a Glance
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Location is often the fastest clue — Masai giraffes dominate the south, reticulated
          giraffes are a northern specialty, and Rothschild's are concentrated almost entirely
          around Lake Nakuru and Nairobi. When location alone isn't conclusive, look at the legs:
          spots running all the way to the hooves means Masai, a clean net pattern with sharp
          white lines means reticulated, and bare, unmarked lower legs mean Rothschild's. Each
          giraffe's individual pattern is also as unique as a fingerprint, which researchers use to
          identify specific animals across years of study.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Why All Three Are Endangered
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Giraffes generally receive far less conservation attention than lions, elephants, or
          rhinos, despite steep population declines across Africa — sometimes referred to as a
          "silent extinction" because the drop has been so under-reported. Habitat loss, poaching
          for meat and bones, and human-wildlife conflict as rangeland shrinks are the primary
          threats behind all three Kenyan species now carrying an Endangered classification.
          Organizations like the Giraffe Conservation Foundation work directly with community
          conservancies in giraffe range areas to stabilize numbers, particularly for the
          reticulated giraffe in the north.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How many giraffe species are in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Three — Masai, reticulated, and Rothschild's — more than any other country in the
              world.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's the easiest way to tell giraffe species apart?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Check the legs: spots to the hooves means Masai, a clean net pattern with sharp
              white lines means reticulated, and bare, unmarked lower legs mean Rothschild's.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Where can I see reticulated giraffes in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Samburu, Buffalo Springs, Shaba, and the Laikipia conservancies in northern Kenya
              are the most reliable locations.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are all Kenyan giraffe species endangered?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — Masai, reticulated, and Rothschild's giraffes are all currently classified as
              Endangered, driven mainly by habitat loss and poaching.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
