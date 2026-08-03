"use client"
import Image from "next/image"
import Link from "next/link"
import { kenyaWhoShouldGo, kenyaWhatToWear, kenyaTrending, kenyaHealthSafety } from "@/data/kenyaData"

export default function KenyaWhoShouldGoTrending() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
        {/* Health & Safety */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Health & Safety
          </h2>
          <div className="flex-1 flex flex-col justify-between gap-4 mt-4">
            {kenyaHealthSafety.map(article => (
              <Link key={article.id} href={`/kenya/${article.id}`} className="flex gap-3 cursor-pointer group">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-1">{article.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Who Should Go */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Who Should Go
          </h2>
          <div className="flex-1 flex flex-col justify-between gap-4 mt-4">
            {kenyaWhoShouldGo.map(article => (
              <div key={article.id} className="flex gap-3 cursor-pointer group">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-1">{article.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Wear */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            What to Wear
          </h2>
          <div className="flex-1 flex flex-col justify-between gap-4 mt-4">
            {kenyaWhatToWear.map(article => (
              <div key={article.id} className="flex gap-3 cursor-pointer group">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-1">{article.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Trending
          </h2>
          <div className="flex-1 flex flex-col justify-between gap-4 mt-4">
            {kenyaTrending.map(article => (
              <div key={article.id} className="flex gap-3 cursor-pointer group">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-1">{article.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
