export default function CommonEtaMistakesArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        A rejected or invalid Kenya eTA usually isn't caught until check-in at your departure
        airport — at which point it's too late to fix before your flight. Almost every denial
        comes down to one of a small handful of avoidable mistakes, not bad luck.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Apply through:</span> The official eTA portal only — third-party sites often overcharge or mishandle data.</li>
          <li><span className="font-semibold text-gray-900">Processing time:</span> Usually 2–3 business days, sometimes longer.</li>
          <li><span className="font-semibold text-gray-900">Most common rejection cause:</span> Passport photo or document quality issues.</li>
          <li><span className="font-semibold text-gray-900">Fix window:</span> Apply at least a week before travel to leave room to correct errors.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Applying Through the Wrong Site
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The single most common mistake is applying through a third-party website that looks
          official but isn't. These sites often charge double or triple the real government fee,
          and because they act as an intermediary, any error in your submission takes longer to
          fix since you're not dealing with the source directly. Kenya's official eTA system is
          run through the government's own portal — always verify you're on it before entering
          passport details or paying any fee.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Poor-Quality Document Uploads
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          The eTA system requires a clear photo of your passport bio page and a passport-style
          photo of yourself. Blurry scans, glare across the page, cropped edges, or a photo that
          doesn't meet standard passport photo requirements (plain background, no glasses, direct
          gaze) are a leading cause of rejected or delayed applications. Use a proper scanner or a
          well-lit, flat photo rather than a rushed phone snapshot at an angle.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Passport Validity Too Short
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kenya requires your passport to be valid for at least six months beyond your planned
          entry date. Travelers sometimes apply successfully for the eTA itself, since the system
          doesn't always cross-check this at the application stage, only to be denied boarding at
          the airport when a check-in agent manually verifies passport validity against the
          six-month rule. Check your passport's expiry date against your travel dates before
          applying, not after.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Mismatched or Incorrect Personal Details
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Your eTA application must match your passport exactly — full legal name, passport
          number, date of birth, and nationality. A minor typo, a missing middle name, or using a
          nickname instead of your legal name can cause the eTA to be flagged as invalid at
          check-in, since the airline's system cross-references the eTA record against your
          passport data. Double-check every field against your actual passport before submitting,
          not from memory.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Applying Too Late
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Official processing time is usually two to three business days, but delays happen,
          especially during high-travel periods. Applying the day before a flight leaves no room
          to fix a rejected application or a document issue. A week of buffer before departure is
          a reasonable minimum, and travelers on tight connections or last-minute trips should
          apply as early as their travel plans are confirmed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Why was my Kenya eTA application rejected?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Most rejections come from blurry document uploads, mismatched personal details
              between the application and passport, or applying through an unofficial third-party
              site with different processing standards.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can I be denied boarding even with an approved eTA?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — if your passport doesn't meet the six-month validity requirement at check-in,
              airlines can deny boarding regardless of eTA approval status.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How early should I apply for my Kenya eTA?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At least a week before departure, to leave time to fix any document or detail
              errors if the application is flagged or rejected on the first attempt.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
