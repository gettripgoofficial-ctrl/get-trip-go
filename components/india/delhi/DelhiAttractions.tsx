import Image from "next/image"
import {
  delhiAttractions,
  delhiAttractionsIntro,
  delhiAttractionsOutro,
} from "@/data/india/delhiAttractions"

export default function DelhiAttractions() {
  return (
    <section id="guide" aria-labelledby="attractions-title" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 pt-14 md:px-10">
      <h2 id="attractions-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
        Top Tourist Attractions and Places to Visit in Delhi
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">{delhiAttractionsIntro}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {delhiAttractions.map((a, i) => {
          const textLeft = Math.floor(i / 2) % 2 === 0
          return (
            <article
              key={a.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm sm:flex-row"
            >
              <div
                className={`relative h-44 w-full shrink-0 bg-gray-200 sm:h-auto sm:min-h-[220px] sm:w-[40%] ${
                  textLeft ? "sm:order-2" : "sm:order-1"
                }`}
              >
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover"
                />
              </div>
              <div className={`p-4 sm:p-5 ${textLeft ? "sm:order-1" : "sm:order-2"}`}>
                <h3 className="text-lg font-extrabold text-[#1a2b49]">{a.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{a.text}</p>
              </div>
            </article>
          )
        })}
      </div>

      <p className="mt-8 max-w-3xl text-base leading-7 text-gray-700">{delhiAttractionsOutro}</p>
    </section>
  )
}
