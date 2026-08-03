"use client"
import Image from "next/image"
import Link from "next/link"
import { kenyaSafariWildlife } from "@/data/kenyaData"

// Slugs with a published article at /kenya/[slug].
// Add each new slug here as its article is written.
const PUBLISHED_SLUGS = new Set<string>(["cheetahs-of-the-mara", "amboselis-last-super-tuskers", "lake-nakurus-flamingo-spectacle"])

export default function KenyaSafariWildlifeSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
        Safari &amp; Wildlife
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {kenyaSafariWildlife.map(article => {
          const isPublished = PUBLISHED_SLUGS.has(article.id)
          const cardInner = (
            <>
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
            </>
          )
          return isPublished ? (
            <Link key={article.id} href={`/kenya/${article.id}`} className="cursor-pointer group block">
              {cardInner}
            </Link>
          ) : (
            <div key={article.id} className="cursor-pointer group">
              {cardInner}
            </div>
          )
        })}
      </div>
    </div>
  )
}
