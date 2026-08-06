import Image from "next/image"
export default function BasicSwahiliPhrasesAndKenyanEtiquetteArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        You don't need fluency to get real value out of a few Swahili words in Kenya — a
        greeting, a thank you, and a handful of safari-specific terms go further than most
        travelers expect, and open up warmer, easier exchanges with guides, lodge staff, and
        anyone else you meet along the way.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Official languages:</span> Swahili and English are both official; English is widely spoken in tourism, but Swahili greetings are genuinely appreciated.</li>
          <li><span className="font-semibold text-gray-900">Easiest phrase to start with:</span> "Jambo" (hello) or the more casual "Habari" (how are things).</li>
          <li><span className="font-semibold text-gray-900">Handshakes:</span> A common and expected greeting; a light handshake is standard in most first meetings.</li>
          <li><span className="font-semibold text-gray-900">Tipping:</span> Expected in the safari industry, generally handled in cash — separate from the room or package rate.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Everyday Phrases Worth Learning
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          "Jambo" is the standard hello most visitors pick up quickly, and it's understood
          everywhere, though "Habari" (literally "news," used to mean "how are things") is what
          Kenyans more commonly use with each other. "Asante" means thank you, and "Asante sana"
          adds "very much" for a warmer version. "Karibu" means welcome, and you'll hear it often
          when arriving somewhere or being offered something. "Pole pole" — slowly, slowly — is a
          phrase you'll hear guides use often, both literally and as a general attitude toward
          pacing a safari day.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          A few safari-specific words are worth knowing too: "simba" is lion, "tembo" is
          elephant, "twiga" is giraffe, and "kanga" or "duma" refer to zebra and cheetah
          respectively. Guides often use these naturally during a game drive, and recognizing a
          few makes the running commentary feel more like a conversation than a lecture.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Everyday Etiquette
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Greetings matter in Kenyan social interactions more than a quick nod does in many
          Western contexts — taking a moment to greet someone properly, even briefly, before
          jumping into a request or question is generally well received. A handshake is the
          standard greeting in most situations, including first meetings with lodge staff,
          drivers, and guides.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Modest dress is appreciated outside of camps and pools, particularly in towns, markets,
          and when visiting a village. Asking permission before photographing people — locals,
          market vendors, or anyone outside of a formal cultural visit — is both a courtesy and
          often expected, since a candid photo of someone without asking can come across as
          extractive rather than friendly.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1758558364489-e6b0a03d1fcf?w=1200&q=80"
          alt="Local market scene in Kenya"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Tipping in the Safari Industry
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tipping is a normal and expected part of the safari economy, separate from whatever
          you've already paid for the trip. Guides and drivers are typically tipped per day or per
          group, and lodges often have a shared staff tip box for the wider team — housekeeping,
          kitchen, and service staff — rather than individual tipping for each person. Camps
          usually post their own suggested tipping ranges at check-in or in a welcome folder,
          which is the most reliable guide since amounts can vary by region and lodge category.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Carrying local currency in smaller denominations for tips is worth planning ahead of
          time, since remote camps don't always have change on hand, and USD is accepted in some
          places but not universally.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do I need to speak Swahili to travel in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No — English is an official language and widely spoken in tourism, but even a few
              Swahili greetings are genuinely appreciated and make interactions warmer.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              What's the easiest Swahili phrase to start with?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              "Jambo" for hello or "Asante" for thank you are the simplest and most universally
              understood, and both get a warm reaction from locals.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How much should I tip guides and lodge staff?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Amounts vary by lodge and region, and most camps post their own suggested tipping
              guide at check-in, which is the most reliable reference to follow.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is it okay to photograph local people in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It's best to ask permission first — a quick request is a normal courtesy, and taking
              a photo without asking can come across as intrusive rather than friendly.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
