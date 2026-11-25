import {
  delhiSafetyIntro,
  delhiSafetyLead,
  delhiSafetyTips,
  delhiSafetyTitle,
  delhiVisaLabel,
  delhiVisaText,
  delhiVisaUrl,
} from "@/data/india/delhiSafety"

export default function DelhiSafety() {
  return (
    <section aria-labelledby="safety-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-6 text-white sm:p-8">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" />
            </svg>
          </span>
          <h2 id="safety-title" className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">
            {delhiSafetyTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90">{delhiSafetyIntro}</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-teal-700">{delhiSafetyLead}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {delhiSafetyTips.map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-extrabold text-teal-800">
                  ✓
                </span>
                <p className="text-sm leading-6 text-gray-800">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border-l-4 border-yellow-400 bg-[#1a2b49] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-medium leading-7">{delhiVisaText}</p>
          <p className="mt-2 text-base leading-7">
            {delhiVisaLabel}{" "}
            <a href={delhiVisaUrl} target="_blank" rel="noopener noreferrer" className="break-all underline">
              {delhiVisaUrl}
            </a>
          </p>
        </div>
        <a
          href={delhiVisaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit shrink-0 items-center rounded-full bg-yellow-400 px-6 py-3 font-bold text-gray-900 transition hover:brightness-95"
        >
          Indian Visa Online
        </a>
      </div>
    </section>
  )
}
