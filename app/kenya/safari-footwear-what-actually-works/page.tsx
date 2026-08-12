import type { Metadata } from "next"
import SafariFootwearArticle from "@/components/SafariFootwearArticle"

export const metadata: Metadata = {
  title: "Safari Footwear: What Actually Works",
  description: "What shoes to pack for game drives, walking safaris, and camp downtime — and when heavy boots are actually needed.",
  openGraph: {
    title: "Safari Footwear: What Actually Works | Get Trip Go",
    description: "What shoes to pack for game drives, walking safaris, and camp downtime — and when heavy boots are actually needed.",
    url: "https://gettripgo.com/kenya/safari-footwear-what-actually-works",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-148949388746.jpg", width: 1200, height: 630, alt: "Safari Footwear: What Actually Works" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Footwear: What Actually Works | Get Trip Go",
    description: "What shoes to pack for game drives, walking safaris, and camp downtime — and when heavy boots are actually needed.",
    images: ["/images/external/unsplash-148949388746.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/safari-footwear-what-actually-works",
  },
  keywords: ["safari footwear", "what shoes for safari", "Kenya safari packing shoes"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safari Footwear: What Actually Works",
  description: "What shoes to pack for game drives, walking safaris, and camp downtime — and when heavy boots are actually needed.",
  image: "/images/external/unsplash-148949388746.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/safari-footwear-what-actually-works",
}

export default function SafariFootwearPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SafariFootwearArticle />
    </>
  )
}
