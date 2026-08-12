import type { Metadata } from "next"
import WhatToPackForKenyaSafariArticle from "@/components/WhatToPackForKenyaSafariArticle"

export const metadata: Metadata = {
  title: "What to Pack for a Kenya Safari",
  description: "The full packing list for a Kenya safari — clothing colors, duffel bag rules, gear, and documents you actually need.",
  openGraph: {
    title: "What to Pack for a Kenya Safari | Get Trip Go",
    description: "The full packing list for a Kenya safari — clothing colors, duffel bag rules, gear, and documents you actually need.",
    url: "https://gettripgo.com/kenya/what-to-pack-for-a-kenya-safari",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-151642612207.jpg", width: 1200, height: 630, alt: "What to Pack for a Kenya Safari" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Pack for a Kenya Safari | Get Trip Go",
    description: "The full packing list for a Kenya safari — clothing colors, duffel bag rules, gear, and documents you actually need.",
    images: ["/images/external/unsplash-151642612207.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/what-to-pack-for-a-kenya-safari",
  },
  keywords: ["Kenya safari packing list", "what to pack safari", "safari duffel bag"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Pack for a Kenya Safari",
  description: "The full packing list for a Kenya safari — clothing colors, duffel bag rules, gear, and documents you actually need.",
  image: "/images/external/unsplash-151642612207.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/what-to-pack-for-a-kenya-safari",
}

export default function WhatToPackForKenyaSafariPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <WhatToPackForKenyaSafariArticle />
    </>
  )
}
