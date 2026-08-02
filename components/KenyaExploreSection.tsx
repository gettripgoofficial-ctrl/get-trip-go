"use client"
import Image from "next/image"
import { kenyaStays, kenyaVisaEntry, kenyaParksReserves } from "@/data/kenyaData"

function ArticleList({ articles }: { articles: typeof kenyaStays }) {
  return (
    <div className="space-y-4 mt-4">
      {articles.map(article => (
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
            <p className="text-gray-800 font-semibold text-sm leading-snug group-hover:text-yellow-600 transition-colors">
              {article.title}
            </p>
            <p className="text-gray-400 text-[11px] mt-1">{article.meta}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function KenyaExploreSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Stays list */}
        <div className="lg:col-span-1">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Where To Stay
          </h2>
          <ArticleList articles={kenyaStays} />
        </div>

        {/* Middle: Visa & Entry, 2x2 image-card grid, stretched to match column height */}
        <div className="lg:col-span-2 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Visa &amp; Entry
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 flex-1">
            {kenyaVisaEntry.map(article => (
              <div key={article.id} className="cursor-pointer group flex flex-col h-full">
                <div className="relative rounded-md overflow-hidden mb-2 flex-1 min-h-[160px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-gray-900 font-bold text-sm leading-snug mb-1 group-hover:text-yellow-600 transition-colors">
                  {article.title}
                </p>
                <p className="text-gray-400 text-[11px]">{article.meta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Parks & Reserves list */}
        <div className="lg:col-span-1">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Parks &amp; Reserves
          </h2>
          <ArticleList articles={kenyaParksReserves} />
        </div>
      </div>
    </div>
  )
}
