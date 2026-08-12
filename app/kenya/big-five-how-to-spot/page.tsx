import type { Metadata } from "next"
import BigFiveArticle from "@/components/BigFiveArticle"

export const metadata: Metadata = {
  title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo",
  description: "How to identify each of the Big Five, where they're most commonly seen in Kenya, and realistic expectations for spotting all five on one safari.",
  openGraph: {
    title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo | Get Trip Go",
    description: "How to identify each of the Big Five, where they're most commonly seen in Kenya, and realistic expectations for spotting all five on one safari.",
    url: "https://gettripgo.com/kenya/big-five-how-to-spot",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-153456711024.jpg", width: 1200, height: 630, alt: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo | Get Trip Go",
    description: "How to identify each of the Big Five, where they're most commonly seen in Kenya, and realistic expectations for spotting all five on one safari.",
    images: ["/images/external/unsplash-153456711024.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/big-five-how-to-spot",
  },
  keywords: ["Big Five Kenya", "Kenya safari wildlife", "spot lion leopard rhino elephant buffalo"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo",
  description: "How to identify each of the Big Five, where they're most commonly seen in Kenya, and realistic expectations for spotting all five on one safari.",
  image: "/images/external/unsplash-153456711024.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I see all Big Five in one national park?",
      acceptedAnswer: { "@type": "Answer", text: "Rarely in a single park — rhino populations are concentrated in specific conservancies. Most travelers combine the Masai Mara with Ol Pejeta or Lake Nakuru to see all five on one trip." },
    },
    {
      "@type": "Question",
      name: "Why is the leopard the hardest to see?",
      acceptedAnswer: { "@type": "Answer", text: "Leopards are solitary and mostly active at night, spending daylight hours hidden in trees or dense brush, unlike the more visible, social lion or elephant." },
    },
    {
      "@type": "Question",
      name: "Is the Big Five term still accurate today?",
      acceptedAnswer: { "@type": "Answer", text: "It's a legacy hunting term, not a measure of rarity or importance, but it remains the standard reference point most safari itineraries and guides still use." },
    },
  ],
}

export default function BigFivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BigFiveArticle />
    </>
  )
}
