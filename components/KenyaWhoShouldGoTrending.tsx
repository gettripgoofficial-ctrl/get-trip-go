"use client"
import Image from "next/image"
import Link from "next/link"
import { kenyaWhoShouldGo, kenyaWhatToWear, kenyaTrending, kenyaHealthSafety } from "@/data/kenyaData"

// Trending articles don't have real pages built yet — add slugs here as they go live.
const PUBLISHED_TRENDING_SLUGS = new Set<string>([])

function ArticleCard({
  article,
  isPublished,
}: {
  article: { id: string; title: string; image: string; meta: string }
  isPublished: boolean
}) {
  const cardInner = (
    <>
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
        <p className={`font-bold text-sm leading-snug transition-colors ${isPublished ? "text-gray-900 group-hover:text-yellow-600" : "text-gray-900"}`}>
          {article.title}
        </p>
        <p className="text-gray-400 text-[11px] mt-1">{article.meta}</p>
      </div>
    </>
  )

  return isPublished ? (
    <Link href={`/kenya/${article.id}`} className="flex gap-3 cursor-pointer group">
      {cardInner}
    </Link>
  ) : (
    <div className="flex gap-3 cursor-default">
      {cardInner}
    </div>
  )
}

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
              <ArticleCard key={article.id} article={article} isPublished={true} />
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
              <ArticleCard key={article.id} article={article} isPublished={true} />
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
              <ArticleCard key={article.id} article={article} isPublished={true} />
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
              <ArticleCard key={article.id} article={article} isPublished={PUBLISHED_TRENDING_SLUGS.has(article.id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
