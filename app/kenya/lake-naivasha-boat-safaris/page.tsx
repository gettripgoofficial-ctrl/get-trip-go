import type { Metadata } from "next"
import LakeNaivashaArticle from "@/components/LakeNaivashaArticle"

export const metadata: Metadata = {
  title: "Lake Naivasha: Boat Safaris and Hippos",
  description: "Boat safaris, hippos, and the walk-among-wildlife experience of Crescent Island on Lake Naivasha.",
  openGraph: {
    title: "Lake Naivasha: Boat Safaris and Hippos | Get Trip Go",
    description: "Boat safaris, hippos, and the walk-among-wildlife experience of Crescent Island on Lake Naivasha.",
    url: "https://gettripgo.com/kenya/lake-naivasha-boat-safaris",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-1547471080-7.jpg", width: 1200, height: 630, alt: "Lake Naivasha: Boat Safaris and Hippos" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lake Naivasha: Boat Safaris and Hippos | Get Trip Go",
    description: "Boat safaris, hippos, and the walk-among-wildlife experience of Crescent Island on Lake Naivasha.",
    images: ["/images/external/unsplash-1547471080-7.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/lake-naivasha-boat-safaris",
  },
  keywords: ["Lake Naivasha boat safari", "Crescent Island Kenya", "hippo safari Kenya"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lake Naivasha: Boat Safaris and Hippos",
  description: "Boat safaris, hippos, and the walk-among-wildlife experience of Crescent Island on Lake Naivasha.",
  image: "/images/external/unsplash-1547471080-7.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/lake-naivasha-boat-safaris",
}

export default function LakeNaivashaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LakeNaivashaArticle />
    </>
  )
}
