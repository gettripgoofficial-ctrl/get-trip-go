import Image from "next/image"
import Link from "next/link"
import { delhiStayAreas, delhiStayIntro, delhiStayNotes } from "@/data/india/delhiStay"

// TODO_OWNER: point this at your real hotel search or Delhi hotels page.
const HOTELS_HREF = "/hotels"

export default function DelhiStay() {
  return (
    <section aria-labelledby="stay-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <h2 id="stay-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
        Where to Stay in Delhi: Best Areas and Hotels
      </h2>
      <div className="mt-3 max-w-3xl space-y-2">
        {delhiStayIntro.map((p) => (
          <p key={p.slice(0, 20)} className="text-base leading-7 text-gray-700">{p}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {delhiStayAreas.map((a) => (
          <article key={a.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative aspect-[16/10] bg-gray-200">
              <Image
                src={a.image}
                alt={a.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" />
              <h3 className="absolute bottom-3 left-4 text-xl font-extrabold text-white">{a.name}</h3>
            </div>
            <p className="p-5 text-sm leading-6 text-gray-700">{a.text}</p>
          </article>
        ))}

        <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-sm">
          <p className="text-xl font-extrabold">Find your hotel in Delhi</p>
          <p className="mt-2 text-sm text-white/90">Compare locations, guest reviews and cancellation policies.</p>
          <Link
            href={HOTELS_HREF}
            className="mt-5 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1a2b49] transition hover:brightness-95"
          >
            Book Your Hotel
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-base leading-7 text-gray-700">{delhiStayNotes.options}</p>
          <p className="mt-3 text-base leading-7 text-gray-700">{delhiStayNotes.consider}</p>
        </div>
        <div className="rounded-2xl border-l-4 border-yellow-400 bg-[#1a2b49] p-6">
          <p className="text-base font-medium leading-7 text-white">{delhiStayNotes.advance}</p>
        </div>
      </div>
    </section>
  )
}
