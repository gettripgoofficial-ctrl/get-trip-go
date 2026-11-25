"use client"

import Image from "next/image"
import { usePrice } from "@/hooks/usePrice"
import {
  delhiPackagesIntro,
  delhiPackagesNote,
  delhiPackagesTitle,
  delhiTours,
} from "@/data/india/delhiPackages"

function splitStep(step: string) {
  const i = step.indexOf(": ")
  return i === -1 ? { label: "", text: step } : { label: step.slice(0, i), text: step.slice(i + 2) }
}

export default function DelhiPackages() {
  const { convert } = usePrice()

  return (
    <section aria-labelledby="packages-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <h2 id="packages-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
        {delhiPackagesTitle}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">{delhiPackagesIntro}</p>

      <div className="mt-8 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {delhiTours.map((t) => (
          <article key={t.title} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] bg-gray-200">
              <Image
                src={t.image}
                alt={t.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{t.label}</p>
              <h3 className="mt-1 text-xl font-extrabold leading-snug text-[#1a2b49]">{t.title}</h3>
              <p className="mt-1 text-sm text-gray-700">{t.days}</p>

              <p className="mt-5 text-right text-sm text-gray-700">
                {t.price ? (
                  <>
                    From <span className="text-base font-extrabold text-[#1a2b49]">{convert(t.price)}</span>
                  </>
                ) : (
                  <span className="font-bold text-[#1a2b49]">Price on request</span>
                )}
              </p>

              <details className="group mt-4 border-t border-gray-100 pt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-orange-600">
                  View suggested itinerary
                  <span aria-hidden="true" className="transition group-open:rotate-180">⌄</span>
                </summary>

                {t.intro && <p className="mt-3 text-sm leading-6 text-gray-700">{t.intro}</p>}
                <p className="mt-3 text-sm font-bold text-[#1a2b49]">Suggested itinerary:</p>

                <ol className="relative ml-1.5 mt-3 space-y-3 border-l-2 border-gray-200">
                  {t.itinerary.map((step) => {
                    const { label, text } = splitStep(step)
                    return (
                      <li key={step} className="relative pl-5">
                        <span aria-hidden="true" className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-orange-500 ring-4 ring-orange-100" />
                        <p className="text-sm leading-6 text-gray-700">
                          {label && <span className="font-extrabold text-[#1a2b49]">{label}: </span>}
                          {text}
                        </p>
                      </li>
                    )
                  })}
                </ol>

                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-gray-500">Route</p>
                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-bold text-[#1a2b49]">
                  {t.route.map((city, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <span className="rounded-full bg-[#F5F7FF] px-3 py-1 ring-1 ring-gray-200">{city}</span>
                      {i < t.route.length - 1 && <span aria-hidden="true" className="text-orange-500">→</span>}
                    </span>
                  ))}
                </p>
              </details>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-yellow-400 bg-[#1a2b49] p-6">
        <p className="text-base font-medium leading-7 text-white">{delhiPackagesNote}</p>
      </div>
    </section>
  )
}
