import Link from "next/link"
import Image from "next/image"

export default function KenyaBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Link
        href="/kenya"
        className="relative block rounded-2xl overflow-hidden shadow-lg group h-[220px] sm:h-[320px]"
      >
        <Image
          src="/images/kenya-highlands/hero-banner.jpg"
          alt="Discover Kenya - safari and wildlife holidays"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 1200px"
          className="object-cover brightness-90 group-hover:brightness-100 transition-all"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <h3 className="text-white font-bold text-xl sm:text-3xl">Discover Kenya</h3>
          <p className="text-gray-200 text-sm sm:text-base mt-1">Experience Africa's wild heart</p>
          <span className="inline-block mt-3 sm:mt-4 bg-yellow-400 text-gray-900 font-semibold text-sm sm:text-base px-4 py-2 rounded-lg">
            Explore Now
          </span>
        </div>
      </Link>
    </div>
  )
}
