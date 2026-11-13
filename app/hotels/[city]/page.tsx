import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getHotelDestinationBySlug, hotelDestinations } from "@/data/hotelDestinations"

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
    title: `Hotels in ${destination.name}, ${destination.country} | Get Trip Go`,
    description: `Explore hotel options in ${destination.name}, ${destination.country}. Verified hotel listings for this destination are coming soon; contact Get Trip Go to enquire.`,
    alternates: { canonical: `/hotels/${destination.slug}` },
    robots: { index: false, follow: true },
  }
}

export default function HotelDestinationPage({ params }: Props) {
  const destination = getHotelDestinationBySlug(params.city)
  if (!destination) notFound()

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
              Hotels in {destination.name}
            </h1>
          </div>
        </div>

        <section className="mt-5 rounded-2xl bg-white p-5 shadow-sm sm:p-7" aria-labelledby="hotel-listings-heading">
          <h2 id="hotel-listings-heading" className="text-xl font-bold text-gray-900">
            Hotel listings coming soon
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            We&apos;re preparing verified hotel options in {destination.name}. Meanwhile, send us your dates and
            requirements and our team can help with an availability enquiry.
          </p>
          <Link
            href={`/hotels?destination=${encodeURIComponent(destination.name)}#hotel-search`}
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-xl bg-[#1A56F0] px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:inline-flex sm:w-auto"
          >
            Enquire about hotels in {destination.name}
          </Link>
        </section>

        <p className="mt-5 text-center text-sm text-gray-600">
          <Link href="/hotels" className="font-semibold text-[#2B3FDE] hover:underline">
            Browse other hotel destinations
          </Link>
        </p>
      </section>
    </main>
  )
}
