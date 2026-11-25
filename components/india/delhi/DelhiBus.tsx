import {
  delhiBusIntro,
  delhiBusNotes,
  delhiBusRoutes,
  delhiBusRoutesLead,
  delhiBusTitle,
} from "@/data/india/delhiTrainBus"

export default function DelhiBus() {
  return (
    <section aria-labelledby="bus-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <div className="rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100 sm:p-10">
        <h2 id="bus-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
          {delhiBusTitle}
        </h2>
        <div className="mt-3 max-w-3xl space-y-3">
          {delhiBusIntro.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-7 text-gray-700">{p}</p>
          ))}
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-wide text-orange-600">{delhiBusRoutesLead}</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {delhiBusRoutes.map((r) => (
            <li
              key={r}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1a2b49] shadow-sm ring-1 ring-amber-200"
            >
              <svg className="h-4 w-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="3" width="16" height="13" rx="2" /><path d="M4 11h16M7 19v2M17 19v2" />
              </svg>
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {delhiBusNotes.map((n, i) => (
            <div key={i} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm leading-6 text-gray-700">{n}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
