import type { Metadata } from "next"
import HellsGateArticle from "@/components/HellsGateArticle"

export const metadata: Metadata = {
  title: "Hell's Gate: Kenya's Walking Safari Park",
  description: "Walking and cycling safaris through dramatic gorges at one of Kenya's few low-predator parks.",
  openGraph: {
    title: "Hell's Gate: Kenya's Walking Safari Park | Get Trip Go",
    description: "Walking and cycling safaris through dramatic gorges at one of Kenya's few low-predator parks.",
    url: "https://gettripgo.com/kenya/hells-gate-walking-safari-park",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-1549366021-9.jpg", width: 1200, height: 630, alt: "Hell's Gate: Kenya's Walking Safari Park" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell's Gate: Kenya's Walking Safari Park | Get Trip Go",
    description: "Walking and cycling safaris through dramatic gorges at one of Kenya's few low-predator parks.",
    images: ["/images/external/unsplash-1549366021-9.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/hells-gate-walking-safari-park",
  },
  keywords: ["Hell's Gate National Park", "walking safari Kenya", "cycling safari Kenya"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hell's Gate: Kenya's Walking Safari Park",
  description: "Walking and cycling safaris through dramatic gorges at one of Kenya's few low-predator parks.",
  image: "/images/external/unsplash-1549366021-9.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/hells-gate-walking-safari-park",
}

export default function HellsGatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HellsGateArticle />
    </>
  )
}
