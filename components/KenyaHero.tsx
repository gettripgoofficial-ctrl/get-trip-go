import Image from "next/image"
import Link from "next/link"
import { kenyaHeroArticles } from "@/data/kenyaData"

export default function KenyaHero() {
  const [left, center, topRight, bottomRight] = kenyaHeroArticles

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left card */}
        <Link href={`/kenya/${left.id}`} className="lg:col-span-1 relative rounded-xl overflow-hidden h-[260px] lg:h-[440px] cursor-pointer group block">
          <Image
            src={left.image}
            alt={left.title}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block bg-yellow-500 text-gray-900 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded mb-2">
              {left.category}
            </span>
            <p className="text-white font-bold text-base leading-snug">{left.title}</p>
          </div>
        </Link>

        {/* Center wide card */}
        <Link href={`/kenya/${center.id}`} className="lg:col-span-2 relative rounded-xl overflow-hidden h-[320px] lg:h-[440px] cursor-pointer group block">
          <Image
            src={center.image}
            alt={center.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <span className="inline-block bg-yellow-500 text-gray-900 text-[10px] sm:text-xs font-bold uppercase tracking-wide px-2 py-1 rounded mb-3">
              {center.category}
            </span>
            <h1 className="text-white font-bold text-2xl sm:text-4xl leading-snug mb-3">{center.title}</h1>
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <span>GetTripGo Travel Desk</span>
              <span>·</span>
              <span>{center.meta}</span>
            </div>
          </div>
        </Link>

        {/* Right stacked cards */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-4">
          {[topRight, bottomRight].map(article => (
            <Link
              key={article.id}
              href={`/kenya/${article.id}`}
              className="relative rounded-xl overflow-hidden h-[200px] lg:h-[212px] cursor-pointer group block"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <span className="inline-block bg-yellow-500 text-gray-900 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded mb-1.5">
                  {article.category}
                </span>
                <p className="text-white font-semibold text-sm leading-snug">{article.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
