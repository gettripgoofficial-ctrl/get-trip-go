"use client"
import Image from "next/image"
import { kenyaTravelTips, kenyaSafariWildlife } from "@/data/kenyaData"

export default function KenyaTravelTipsWildlife() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: Travel Tips list */}
          <div className="lg:col-span-1">
            <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
              Travel Tips
            </h2>
            <div className="space-y-4 mt-4">
              {kenyaTravelTips.map(article => (
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
          </div>

          {/* Right: Safari & Wildlife, 3-column grid */}
          <div className="lg:col-span-3">
            <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
              Safari &amp; Wildlife
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {kenyaSafariWildlife.map(article => (
                <div key={article.id} className="cursor-pointer group">
                  <div className="relative rounded-lg overflow-hidden h-[160px] mb-3">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-gray-800 font-bold text-sm sm:text-base leading-snug mb-1 group-hover:text-yellow-600 transition-colors">
                    {article.title}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm leading-snug">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
