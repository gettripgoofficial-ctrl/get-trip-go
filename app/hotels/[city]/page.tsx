import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getHotelDestinationBySlug, hotelDestinations } from "@/data/hotelDestinations"
import { hotelDestinationSeoContent } from "@/data/hotelDestinationSeoContent"

type Props = {
  params: { city: string }
}

export function generateStaticParams() {
  return hotelDestinations.map(({ slug }) => ({ city: slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const destination = getHotelDestinationBySlug(params.city)
  if (!destination) return { title: "Hotel destination not found" }

  return {
    title: `${destination.name} Travel Guide: Where to Stay, Eat & Visit`,
    description: `Plan your ${destination.name}, ${destination.country} trip with local area, sightseeing, food and transport tips from Get Trip Go.`,
    alternates: { canonical: `/hotels/${destination.slug}` },
  }
}

export default function HotelDestinationPage({ params }: Props) {
  const destination = getHotelDestinationBySlug(params.city)
  if (!destination) notFound()

  const seoSections = hotelDestinationSeoContent[destination.slug]
  if (!seoSections) notFound()

  return (
    <main className="min-h-screen bg-[#F8F9FF] pb-16">
      <Breadcrumbs
        items={[
          { label: "Hotels", href: "/hotels" },
          { label: destination.name },
        ]}
      />

      <section className="mx-auto max-w-5xl px-4 pt-5">
        <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-200 sm:h-80">
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 960px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <p className="text-sm font-semibold text-white/80">{destination.country}</p>
            <h1 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
              {destination.name} Travel Guide
            </h1>
          </div>
        </div>

        <section className="mt-5 rounded-2xl bg-white p-5 shadow-sm sm:p-7" aria-labelledby="city-guide-heading">
          <h2 id="city-guide-heading" className="text-xl font-bold text-gray-900">
            Know {destination.name}
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">{destination.guide.intro}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <section aria-labelledby="stay-areas-heading">
              <h3 id="stay-areas-heading" className="text-base font-bold text-gray-900">
                Where to stay in {destination.name}
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-2 text-sm leading-6 text-gray-600">
                {destination.guide.stayAreas.map((area) => <li key={area}>{area}</li>)}
              </ul>
            </section>

            <section aria-labelledby="places-heading">
              <h3 id="places-heading" className="text-base font-bold text-gray-900">
                Places to visit
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-2 text-sm leading-6 text-gray-600">
                {destination.guide.placesToVisit.map((place) => <li key={place}>{place}</li>)}
              </ul>
            </section>

            <section aria-labelledby="food-heading">
              <h3 id="food-heading" className="text-base font-bold text-gray-900">
                What to eat
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-2 text-sm leading-6 text-gray-600">
                {destination.guide.localFood.map((dish) => <li key={dish}>{dish}</li>)}
              </ul>
            </section>

            <section aria-labelledby="transport-heading">
              <h3 id="transport-heading" className="text-base font-bold text-gray-900">
                Getting around
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{destination.guide.gettingAround}</p>
            </section>
          </div>

          <div className="mt-7 space-y-6 border-t border-gray-100 pt-6">
            {seoSections.map((section) => (
              <section key={section.heading}>
                <h3 className="text-base font-bold text-gray-900">{section.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{section.content}</p>
              </section>
            ))}
          </div>
        </section>

      </section>
    </main>
  )
}
