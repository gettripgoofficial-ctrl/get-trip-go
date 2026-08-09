import type { Metadata } from "next"
import IsKenyaSafeArticle from "@/components/IsKenyaSafeArticle"

export const metadata: Metadata = {
  title: "Is Kenya Safe for Tourists? What You Should Know | Get Trip Go",
  description: "A realistic look at safety on safari, in Nairobi, and everywhere in between — what the real risks are and which areas to avoid.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Kenya Safe for Tourists? What You Should Know",
  description: "A realistic look at safety on safari, in Nairobi, and everywhere in between — what the real risks are and which areas to avoid.",
  image: "/images/external/unsplash-158451597995.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe to go on safari alone in Kenya?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — solo travelers are common on organized safaris, since you're always with a guide and vehicle. It's a different question from independent, unguided travel." },
    },
    {
      "@type": "Question",
      name: "Do I need travel insurance for Kenya?",
      acceptedAnswer: { "@type": "Answer", text: "Strongly recommended, specifically with medical evacuation coverage, given the remote location of many safari camps relative to hospitals." },
    },
    {
      "@type": "Question",
      name: "Is Nairobi safe for tourists?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, with normal precautions. Most visitors only pass through briefly and stick to hotel transport and well-known areas without issue." },
    },
  ],
}

export default function IsKenyaSafePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <IsKenyaSafeArticle />
    </>
  )
}
