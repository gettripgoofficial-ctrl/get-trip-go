import Image from "next/image"
import Link from "next/link"

interface KenyaArticleShellProps {
  category: string
  title: string
  heroImage: string
  heroAlt: string
  readTime: string
  children: React.ReactNode
}

export default function KenyaArticleShell({
  category,
  title,
  heroImage,
  heroAlt,
  readTime,
  children,
}: KenyaArticleShellProps) {
  return (
    <article className="bg-white">
      {/* Hero */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image src={heroImage} alt={heroAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            {category}
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            {title}
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · {readTime}</p>
        </div>
      </div>

      {/* Centered article content, no sidebars for now */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        {children}
        <div className="border-t border-gray-200 pt-6 mt-10">
          <Link
            href="/kenya"
            className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors"
          >
            Back to the Kenya travel guide
          </Link>
        </div>
      </div>
    </article>
  )
}
