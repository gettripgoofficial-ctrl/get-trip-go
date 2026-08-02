"use client"
import Image from "next/image"
import { kenyaConservationCulture, kenyaFaqs } from "@/data/kenyaData"

export default function KenyaConservationCultureSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left: Conservation & Culture — simple 3x2 equal grid, 75% width */}
        <div className="lg:col-span-3">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Conservation &amp; Culture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {kenyaConservationCulture.map(article => (
              <div key={article.id} className="cursor-pointer group">
                <div className="relative rounded-lg overflow-hidden h-[180px] mb-3">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-gray-800 font-bold text-base leading-snug mb-1 group-hover:text-yellow-600 transition-colors">
                  {article.title}
                </p>
                <p className="text-gray-500 text-sm leading-snug">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: FAQs — 25% width */}
        <div className="lg:col-span-1">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            FAQs
          </h2>
          <div className="flex flex-col gap-4 mt-4">
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
