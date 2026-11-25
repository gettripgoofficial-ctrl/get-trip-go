"use client"

import Image from "next/image"
import { usePrice } from "@/hooks/usePrice"
import {
  delhiRoutes,
  delhiRoutesIntro,
  delhiRoutesNote,
  delhiRoutesTitle,
} from "@/data/india/delhiRoutes"

export default function DelhiRoutes() {
  const { convert, currency } = usePrice()
  const range = (r: [number, number]) => `${convert(r[0])}–${convert(r[1])}`

  return (
    <section aria-labelledby="routes-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <h2 id="routes-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
        {delhiRoutesTitle}
      </h2>
      <div className="mt-3 max-w-3xl space-y-3">
        {delhiRoutesIntro.map((p) => (
          <p key={p.slice(0, 24)} className="text-base leading-7 text-gray-700">{p}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {delhiRoutes.map((r) => (
          <article key={r.slug} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative aspect-[16/10] bg-gray-200">
              <Image
                src={r.image}
                alt={`${r.name}, India`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-3 left-4 text-xl font-extrabold text-white">Delhi to {r.name}</h3>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm leading-6 text-gray-700">{r.description}</p>

              <dl className="mt-4 divide-y divide-gray-100 rounded-xl bg-[#F5F7FF] px-4 text-sm">
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="font-semibold text-[#1a2b49]">Approximate distance</dt>
                  <dd className="text-right text-gray-700">{r.distance}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="font-semibold text-[#1a2b49]">Train journey</dt>
                  <dd className="text-right text-gray-700">{r.trainTime}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="font-semibold text-[#1a2b49]">Road journey</dt>
                  <dd className="text-right text-gray-700">{r.roadTime}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="font-semibold text-[#1a2b49]">Approximate train fare</dt>
                  <dd className="text-right font-bold text-gray-900">
                    {range(r.trainFare)}
                    {r.trainFareNote && <span className="block text-xs font-normal text-gray-500">{r.trainFareNote}</span>}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="font-semibold text-[#1a2b49]">Approximate bus fare</dt>
                  <dd className="text-right font-bold text-gray-900">{range(r.busFare)}</dd>
                </div>
              </dl>

              <p className="mt-4 text-sm leading-6 text-gray-700">{r.closing}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border-l-4 border-yellow-400 bg-[#1a2b49] p-6">
        <p className="text-sm leading-6 text-white/90">{delhiRoutesNote}</p>
        {currency !== "INR" && (
          <p className="mt-2 text-xs text-white/70">
            Fares are converted from Indian rupees at the site’s current exchange rate and are approximate.
          </p>
        )}
      </div>
    </section>
  )
}
