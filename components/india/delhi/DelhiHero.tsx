import Image from "next/image"

export default function DelhiHero() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-4 md:px-10 md:pt-20">
      <div className="relative h-[420px] overflow-hidden rounded-3xl bg-slate-900 sm:h-[500px] md:h-[600px]">
        <Image
          src="/images/india/delhi/hero.jpg"
          alt="India Gate in Delhi, India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="relative flex h-full max-w-2xl flex-col justify-center px-6 sm:px-12">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Delhi Travel Guide
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg md:text-xl">
            Discover the Capital of India: History, Culture &amp; Unforgettable Experiences
          </p>
          <a
            href="#guide"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-base font-bold text-gray-900 shadow-lg transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
          >
            Explore Delhi
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
