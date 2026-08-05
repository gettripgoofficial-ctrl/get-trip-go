"use client"
import Image from "next/image"
import Link from "next/link"
import { kenyaStays, kenyaVisaEntry, kenyaVisaEntryExtra, kenyaParksReserves } from "@/data/kenyaData"

const PUBLISHED_PARKS_SLUGS = new Set<string>(["masai-mara-vs-serengeti", "masai-mara-reserve-vs-conservancies", "amboseli-national-park-guide", "tsavo-largest-wildest-park", "lake-nakuru-park-birds-rhinos"])

const PUBLISHED_VISA_SLUGS = new Set<string>([
  "kenya-eta-guide-how-to-apply-cost-and-processing",
  "yellow-fever-certificate-entry",
  "common-eta-mistakes-travelers-denied-boarding",
  "overstay-kenya-eta-what-happens",
  "visa-on-arrival-vs-eta-which-applies-to-you",
])

function ArticleList({ articles, publishedSlugs }: { articles: typeof kenyaStays; publishedSlugs?: Set<string> }) {
  return (
    <div className="space-y-4 mt-4">
      {articles.map(article => {
        const isPublished = publishedSlugs?.has(article.id)
        const cardInner = (
          <div className="flex gap-3 group">
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
              <p className={`font-semibold text-sm leading-snug transition-colors ${isPublished ? "text-gray-800 group-hover:text-yellow-600" : "text-gray-800"}`}>
                {article.title}
              </p>
              <p className="text-gray-400 text-[11px] mt-1">{article.meta}</p>
            </div>
          </div>
        )
        return isPublished ? (
          <Link key={article.id} href={`/kenya/${article.id}`} className="block cursor-pointer">
            {cardInner}
          </Link>
        ) : (
          <div key={article.id} className="cursor-default">
            {cardInner}
          </div>
        )
      })}
    </div>
  )
}

function VisaCard({ article, isPublished }: { article: typeof kenyaVisaEntry[number]; isPublished: boolean }) {
  const cardInner = (
    <>
      <div className="relative rounded-md overflow-hidden mb-2 flex-1 min-h-[160px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 1024px) 50vw, 16vw"
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <p className={`font-bold text-sm leading-snug mb-1 transition-colors ${isPublished ? "text-gray-900 group-hover:text-yellow-600" : "text-gray-900"}`}>
        {article.title}
      </p>
      <p className="text-gray-400 text-[11px]">{article.meta}</p>
    </>
  )

  return isPublished ? (
    <Link href={`/kenya/${article.id}`} className="cursor-pointer group flex flex-col h-full">
      {cardInner}
    </Link>
  ) : (
    <div className="cursor-default flex flex-col h-full">
      {cardInner}
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

        {/* Middle: Visa & Entry, 2x2 image-card grid + 1 big card below, same column width */}
        <div className="lg:col-span-2 h-full flex flex-col">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Visa &amp; Entry
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
            {kenyaVisaEntry.map(article => (
              <VisaCard key={article.id} article={article} isPublished={PUBLISHED_VISA_SLUGS.has(article.id)} />
            ))}
          </div>
          {kenyaVisaEntryExtra.map(article => (
            <div key={article.id} className="mt-4 flex-1">
              <VisaCard article={article} isPublished={PUBLISHED_VISA_SLUGS.has(article.id)} />
            </div>
          ))}
        </div>

        {/* Right: Parks & Reserves list */}
        <div className="lg:col-span-1">
          <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
            Parks &amp; Reserves
          </h2>
          <ArticleList articles={kenyaParksReserves} publishedSlugs={PUBLISHED_PARKS_SLUGS} />
        </div>
      </div>
    </div>
  )
}
