"use client"
import Image from "next/image"
import { kenyaConservationCulture, kenyaFaqs } from "@/data/kenyaData"

function SmallCard({ article }: { article: (typeof kenyaConservationCulture)[number] }) {
  return (
    <div className="cursor-pointer group">
      <div className="relative rounded-lg overflow-hidden h-[90px] mb-2">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, 18vw"
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <p className="text-gray-800 font-bold text-sm leading-snug group-hover:text-yellow-600 transition-colors">
        {article.title}
      </p>
    </div>
  )
}

export default function KenyaConservationCultureSection() {
  const leftTop = kenyaConservationCulture.slice(0, 2)   // Left: 2
  const big = kenyaConservationCulture[3]                 // Mid: 1 big
  const rightTop = kenyaConservationCulture.slice(4, 6)   // Right: 2
  const leftBottom = kenyaConservationCulture[2]          // Bottom left: 1
  const rightBottom = kenyaConservationCulture[6]         // Bottom right: 1

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
        {/* Left: Conservation & Culture — 75% width */}
        <div className="lg:col-span-3 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Conservation &amp; Culture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 flex-1">
            {/* Left column: 2 top, then extra gap, 1 bottom */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                {leftTop.map(article => (
                  <SmallCard key={article.id} article={article} />
                ))}
              </div>
              <div className="mt-8">
                <SmallCard article={leftBottom} />
              </div>
            </div>

            {/* Middle: 1 big, spans full height */}
            {big && (
              <div className="cursor-pointer group flex flex-col">
                <div className="relative rounded-lg overflow-hidden flex-1 min-h-[280px] mb-3">
                  <Image
                    src={big.image}
                    alt={big.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-yellow-600 text-[11px] font-bold uppercase tracking-wide mb-1">
                  {big.category}
                </p>
                <p className="text-gray-900 font-bold text-lg leading-snug mb-1 group-hover:text-yellow-600 transition-colors">
                  {big.title}
                </p>
                <p className="text-gray-500 text-sm leading-snug">{big.excerpt}</p>
              </div>
            )}

            {/* Right column: 2 top, then extra gap, 1 bottom */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                {rightTop.map(article => (
                  <SmallCard key={article.id} article={article} />
                ))}
              </div>
              <div className="mt-8">
                <SmallCard article={rightBottom} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: FAQs — 25% width */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            FAQs
          </h2>
          <div className="flex-1 flex flex-col justify-between gap-3 mt-4">
            {kenyaFaqs.map(article => (
              <div key={article.id} className="flex gap-3 cursor-pointer group">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="48px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
