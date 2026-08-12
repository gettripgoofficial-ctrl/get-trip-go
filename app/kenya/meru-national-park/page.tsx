import type { Metadata } from "next"
import MeruNationalParkArticle from "@/components/MeruNationalParkArticle"

export const metadata: Metadata = {
  title: "Meru National Park: Kenya's Quietest Big Game Country",
  description: "Meru's Born Free history, rhino sanctuary, and why it's one of Kenya's least crowded major parks.",
  openGraph: {
    title: "Meru National Park: Kenya's Quietest Big Game Country | Get Trip Go",
    description: "Meru's Born Free history, rhino sanctuary, and why it's one of Kenya's least crowded major parks.",
    url: "https://gettripgo.com/kenya/meru-national-park",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-151642612207.jpg", width: 1200, height: 630, alt: "Meru National Park: Kenya's Quietest Big Game Country" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meru National Park: Kenya's Quietest Big Game Country | Get Trip Go",
    description: "Meru's Born Free history, rhino sanctuary, and why it's one of Kenya's least crowded major parks.",
    images: ["/images/external/unsplash-151642612207.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/meru-national-park",
  },
  keywords: ["Meru National Park Kenya", "Born Free Meru", "quiet Kenya safari parks"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meru National Park: Kenya's Quietest Big Game Country",
  description: "Meru's Born Free history, rhino sanctuary, and why it's one of Kenya's least crowded major parks.",
  image: "/images/external/unsplash-151642612207.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/meru-national-park",
}

export default function MeruNationalParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MeruNationalParkArticle />
    </>
  )
}
