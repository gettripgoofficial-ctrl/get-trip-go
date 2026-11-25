import type { ReactNode } from "react"
import {
  delhiTransport,
  delhiTransportIntro,
  delhiTransportTip,
} from "@/data/india/delhiTransport"

const svg = "h-7 w-7"
const ICONS: Record<string, ReactNode> = {
  metro: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3" width="14" height="14" rx="3" /><path d="M5 11h14M8 21l2-4M16 21l-2-4" />
      <circle cx="9" cy="14" r="0.6" /><circle cx="15" cy="14" r="0.6" />
    </svg>
  ),
  taxi: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 13l2-6h14l2 6v4H3v-4z" /><path d="M3 13h18" />
      <circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" />
    </svg>
  ),
  app: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" />
    </svg>
  ),
  auto: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 15V8h11l4 5h5v4" /><path d="M8 17h8" />
      <circle cx="6" cy="17" r="2" /><circle cx="18" cy="17" r="2" />
    </svg>
  ),
  private: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" /><path d="M3 12h7M14 12h7M12 14v7" />
    </svg>
  ),
}

export default function DelhiTransport() {
  return (
    <section aria-labelledby="transport-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <h2 id="transport-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
        How to Travel Around Delhi
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">{delhiTransportIntro}</p>

      <ul className="mt-8 divide-y divide-sky-200/70 overflow-hidden rounded-3xl bg-sky-50 ring-1 ring-sky-100">
        {delhiTransport.map((t) => (
          <li key={t.key} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#1a2b49] shadow-sm ring-1 ring-sky-100">
              {ICONS[t.key]}
            </span>
            <div className="sm:grid sm:flex-1 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-6">
              <h3 className="text-lg font-extrabold text-[#1a2b49]">{t.name}</h3>
              <p className="mt-1 text-base leading-7 text-gray-700 sm:mt-0">{t.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-start gap-4 rounded-2xl bg-gradient-to-r from-[#1a2b49] to-sky-800 p-6 text-white">
        <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-extrabold text-gray-900">
          i
        </span>
        <p className="text-base font-medium leading-7">{delhiTransportTip}</p>
      </div>
    </section>
  )
}
