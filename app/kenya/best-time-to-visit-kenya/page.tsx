import type { Metadata } from "next"
import BestTimeToVisitKenyaArticle from "@/components/BestTimeToVisitKenyaArticle"

export const metadata: Metadata = {
  title: "Best Time to Visit Kenya: A Season-by-Season Guide",
  description: "When to go for the Great Migration, the driest skies, the lowest prices, or the quietest parks — a full season-by-season breakdown for planning a Kenya safari.",
  openGraph: {
    title: "Best Time to Visit Kenya: A Season-by-Season Guide | Get Trip Go",
    description: "When to go for the Great Migration, the driest skies, the lowest prices, or the quietest parks — a full season-by-season breakdown for planning a Kenya safari.",
    url: "https://gettripgo.com/kenya/best-time-to-visit-kenya",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-1547471080-7.jpg", width: 1200, height: 630, alt: "Best Time to Visit Kenya: A Season-by-Season Guide" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Time to Visit Kenya: A Season-by-Season Guide | Get Trip Go",
    description: "When to go for the Great Migration, the driest skies, the lowest prices, or the quietest parks — a full season-by-season breakdown for planning a Kenya safari.",
    images: ["/images/external/unsplash-1547471080-7.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/best-time-to-visit-kenya",
  },
  keywords: ["best time to visit Kenya", "Kenya safari season", "Great Migration timing"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Time to Visit Kenya: A Season-by-Season Guide",
  description: "When to go for the Great Migration, the driest skies, the lowest prices, or the quietest parks — a full season-by-season breakdown for planning a Kenya safari.",
  image: "/images/external/unsplash-1547471080-7.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the single best month to visit Kenya?",
      acceptedAnswer: { "@type": "Answer", text: "For most travelers, September offers the best balance — dry weather, the migration still concentrated in the Masai Mara, and slightly fewer crowds than the July–August peak." },
    },
    {
      "@type": "Question",
      name: "Is it worth visiting Kenya during the rainy season?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, if lower rates and lush scenery matter more to you than guaranteed dry game drives — April and May in particular offer the lowest prices of the year." },
    },
    {
      "@type": "Question",
      name: "When should I book if I want to see the migration?",
      acceptedAnswer: { "@type": "Answer", text: "Book six to twelve months ahead for July–September Masai Mara camps." },
    },
  ],
}

export default function BestTimeToVisitKenyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BestTimeToVisitKenyaArticle />
    </>
  )
}
