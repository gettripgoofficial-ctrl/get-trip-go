import type { Metadata } from "next"
import Carousel from "@/components/india/Carousel"
import CityCard from "@/components/india/CityCard"
import AttractionCard from "@/components/india/AttractionCard"
import { attractions } from "@/data/india/attractions"
import { cities } from "@/data/india/cities"
import PackageCard from "@/components/india/PackageCard"
import { packages } from "@/data/india/packages"
import WhyBookWithUs from "@/components/india/WhyBookWithUs"
import GuideMosaic from "@/components/india/GuideMosaic"
import { guides } from "@/data/india/guides"

const TITLE = "India Tours & Packages for International Travellers | Get Trip Go"
const DESCRIPTION =
  "Plan your trip to India with Get Trip Go. Tours, packages and experiences across Delhi, Agra, Jaipur, Kerala, Goa and more, with local experts."
const URL = "https://gettripgo.com/India"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Get Trip Go",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Incredible India tours by Get Trip Go" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-default.jpg"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gettripgo.com" },
    { "@type": "ListItem", position: 2, name: "India", item: URL },
  ],
}

const destinationsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Popular destinations in India",
  itemListElement: cities.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    url: `https://gettripgo.com${c.link ?? `/India/${c.slug}`}`,
  })),
}

export default function IndiaHubPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationsSchema) }} />
      <section className="mx-4 mt-4 md:mt-20 overflow-hidden rounded-3xl relative bg-slate-900 bg-cover bg-center bg-[url(/india-hero.jpg)] sm:mx-6 md:mx-10">
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px] px-4 pb-16 pt-14 text-center sm:pb-20 sm:pt-20">
          <h1 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
            Discover India
          </h1>
          <h2 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
            Unforgettable Journeys, Extraordinary Experiences
          </h2>
          <form
            action="/India/search"
            method="get"
            role="search"
            className="mx-auto mt-8 flex w-full max-w-3xl items-center rounded-full bg-white p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] focus-within:ring-2 focus-within:ring-orange-400 sm:mt-10"
          >
            <label htmlFor="india-search" className="sr-only">
              Search destinations and experiences in India
            </label>
            <input
              id="india-search"
              name="q"
              type="search"
              autoComplete="off"
              placeholder="Where would you like to go?"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-gray-900 placeholder-gray-500 outline-none sm:px-6 sm:text-lg"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-base font-bold text-white transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 sm:px-8"
            >
              Explore Now
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:py-14 md:px-24">
        <h2 className="mb-6 text-xl font-extrabold text-[#1a2b49] sm:text-2xl">
          Explore India&apos;s Most Loved Destinations
        </h2>
        <Carousel
          label="Places in India"
          itemClassName="w-[44%] md:w-[calc((100%-5rem)/6)]"
        >
          {cities.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </Carousel>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-14 md:px-24">
        <h2 className="mb-6 text-xl font-extrabold text-[#1a2b49] sm:text-2xl">
          India&apos;s Iconic Landmarks &amp; Must-Visit Attractions
        </h2>
        <Carousel
          label="Attractions in India"
          itemClassName="w-[40%] sm:w-[28%] md:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-4rem)/5)]"
        >
          {attractions.map((a) => (
            <AttractionCard key={a.slug} attraction={a} />
          ))}
        </Carousel>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-14 md:px-24">
        <h2 className="mb-6 text-xl font-extrabold text-[#1a2b49] sm:text-2xl">
          Experience India Beyond the Ordinary
        </h2>
        <Carousel
          label="Culture and history tours in India"
          itemClassName="w-[72%] sm:w-[44%] md:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-4rem)/5)]"
        >
          {packages
            .filter((k) => k.category === "culture")
            .map((k) => (
              <PackageCard key={k.title} pkg={k} />
            ))}
        </Carousel>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-14 md:px-24">
        <h2 className="mb-6 text-xl font-extrabold text-[#1a2b49] sm:text-2xl">
          Unforgettable Adventures Across India
        </h2>
        <Carousel
          label="Adventure tours in India"
          itemClassName="w-[72%] sm:w-[44%] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
        >
          {packages
            .filter((k) => k.category === "adventure")
            .map((k) => (
              <PackageCard key={k.title} pkg={k} />
            ))}
        </Carousel>
      </section>

      <GuideMosaic guides={guides} />

      <WhyBookWithUs />
    </div>
  )
}
