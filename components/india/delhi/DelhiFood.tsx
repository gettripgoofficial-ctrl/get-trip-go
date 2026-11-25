import Image from "next/image"
import {
  delhiFoodParagraphs,
  delhiFoodTip,
  delhiFoodTitle,
  delhiShopping,
  delhiShoppingLead,
} from "@/data/india/delhiFood"

export default function DelhiFood() {
  return (
    <section aria-labelledby="food-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <h2 id="food-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
        {delhiFoodTitle}
      </h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="relative aspect-[16/10] bg-gray-200">
            <Image
              src="/images/india/delhi/food.jpg"
              alt="Traditional Indian thali and dishes served in Delhi"
              fill
              sizes="(max-width: 1024px) 100vw, 580px"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="space-y-3 p-6">
            {delhiFoodParagraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-7 text-gray-700">{p}</p>
            ))}
          </div>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-base font-bold leading-7 text-[#1a2b49]">{delhiShoppingLead}</p>
          <ol className="mt-5 space-y-3">
            {delhiShopping.map((s, i) => (
              <li key={s.name} className="flex gap-4 rounded-2xl bg-[#F5F7FF] p-4">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-sm font-extrabold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-[#1a2b49]">{s.name}</h3>
                  <p className="text-sm leading-6 text-gray-700">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <div className="mt-6 flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
        <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-extrabold text-white">
          ✓
        </span>
        <p className="text-base font-medium leading-7 text-emerald-950">{delhiFoodTip}</p>
      </div>
    </section>
  )
}
