import type { Metadata } from "next"
import KenyaETAGuideArticle from "@/components/KenyaETAGuideArticle"

export const metadata: Metadata = {
  title: "Kenya eTA Guide: How to Apply, Cost and Processing Time",
  description: "How to apply for Kenya's mandatory eTA — cost, processing time, official portal, and common mistakes to avoid.",
  openGraph: {
    title: "Kenya eTA Guide: How to Apply, Cost and Processing Time | Get Trip Go",
    description: "How to apply for Kenya's mandatory eTA — cost, processing time, official portal, and common mistakes to avoid.",
    url: "https://gettripgo.com/kenya/kenya-eta-guide-how-to-apply-cost-and-processing",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-153218814256.jpg", width: 1200, height: 630, alt: "Kenya eTA Guide: How to Apply, Cost and Processing Time" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya eTA Guide: How to Apply, Cost and Processing Time | Get Trip Go",
    description: "How to apply for Kenya's mandatory eTA — cost, processing time, official portal, and common mistakes to avoid.",
    images: ["/images/external/unsplash-153218814256.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/kenya-eta-guide-how-to-apply-cost-and-processing",
  },
  keywords: ["Kenya eTA guide", "Kenya visa application", "Kenya eTA cost"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kenya eTA Guide: How to Apply, Cost and Processing Time",
  description: "How to apply for Kenya's mandatory eTA — cost, processing time, official portal, and common mistakes to avoid.",
  image: "/images/external/unsplash-153218814256.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/kenya-eta-guide-how-to-apply-cost-and-processing",
}

export default function KenyaETAGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KenyaETAGuideArticle />
    </>
  )
}
