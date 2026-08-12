import type { Metadata } from "next"
import SafariBudgetGuideArticle from "@/components/SafariBudgetGuideArticle"

export const metadata: Metadata = {
  title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget",
  description: "What actually changes as safari prices go up — accommodation, privacy, service — and what stays the same regardless of tier.",
  openGraph: {
    title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget | Get Trip Go",
    description: "What actually changes as safari prices go up — accommodation, privacy, service — and what stays the same regardless of tier.",
    url: "https://gettripgo.com/kenya/safari-budget-guide-luxury-vs-mid-range-vs-budget",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-153456711024.jpg", width: 1200, height: 630, alt: "Safari Budget Guide: Luxury vs Mid-Range vs Budget" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget | Get Trip Go",
    description: "What actually changes as safari prices go up — accommodation, privacy, service — and what stays the same regardless of tier.",
    images: ["/images/external/unsplash-153456711024.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/safari-budget-guide-luxury-vs-mid-range-vs-budget",
  },
  keywords: ["Kenya safari cost", "safari budget guide", "luxury vs budget safari"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safari Budget Guide: Luxury vs Mid-Range vs Budget",
  description: "What actually changes as safari prices go up — accommodation, privacy, service — and what stays the same regardless of tier.",
  image: "/images/external/unsplash-153456711024.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/safari-budget-guide-luxury-vs-mid-range-vs-budget",
}

export default function SafariBudgetGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SafariBudgetGuideArticle />
    </>
  )
}
