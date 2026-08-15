import { offers } from "@/data/offers"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import OfferActions from "./OfferActions"
import Script from "next/script"
import Breadcrumbs from "@/components/Breadcrumbs"
type Props = { params: { slug: string } }
export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }))
}
export function generateMetadata({ params }: Props): Metadata {
  const offer = offers.find((o) => o.slug === params.slug)
  if (!offer) return {}
  return {
    title: offer.title,
    description: offer.desc,
    alternates: { canonical: `/offers/${offer.slug}` },
    openGraph: {
      title: offer.title,
      description: offer.desc,
      images: [{ url: offer.image, width: 1200, height: 630, alt: offer.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: offer.title,
      description: offer.desc,
      images: [offer.image],
    },
  }
}
export default function OfferDetailPage({ params }: Props) {
  const offer = offers.find((o) => o.slug === params.slug)
  if (!offer) notFound()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offer.title,
    description: offer.desc,
    url: `https://gettripgo.com/offers/${offer.slug}`,
    image: offer.image,
    priceCurrency: "INR",
    validThrough: new Date(offer.validTill).toISOString(),
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Get Trip Go",
      url: "https://gettripgo.com",
    },
  }
  return (
    <div className="min-h-screen bg-gray-100 pb-32 sm:pb-10">
      <Script
        id="offer-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Offers", href: "/offers" },
          { label: offer.title },
        ]}
      />
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-110 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Link
          href="/offers"
          className="absolute top-16 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <span
            className="text-white text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-2"
            style={{ backgroundColor: offer.color }}
          >
            {offer.tag}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{offer.title}</h1>
          <p className="text-white/80 text-sm mt-1">Valid till {offer.validTill}</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="text-base font-bold text-gray-800 mb-2">About this Offer</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{offer.desc}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="text-base font-bold text-gray-800 mb-3">Terms & Conditions</h2>
          <div className="space-y-2">
            {offer.terms.map((term, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-xs font-bold mt-0.5 flex-shrink-0" style={{ color: offer.color }}>✓</span>
                <span className="text-sm text-gray-600">{term}</span>
              </div>
            ))}
          </div>
        </div>
        <OfferActions offer={offer} />
      </div>
    </div>
  )
}
