import type { Metadata } from "next"
import SafariMobilityIssuesArticle from "@/components/SafariMobilityIssuesArticle"

export const metadata: Metadata = {
  title: "Safari for Travelers With Mobility Issues",
  description: "Which lodges have step-free access and vehicles fitted for wheelchairs, and which don't -- what to confirm before you book a Kenya safari.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safari for Travelers With Mobility Issues",
  description: "Which lodges have step-free access and vehicles fitted for wheelchairs, and which don't -- what to confirm before you book a Kenya safari.",
  image: "/images/external/unsplash-156808468078.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are Kenya safari vehicles wheelchair accessible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not standard ones. A small number of specialist operators offer adapted vehicles with ramps or lifts, and this needs to be confirmed and booked specifically, not assumed.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an official accessibility rating for Kenya safari lodges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There's no central database or certification system, so accessible claims vary widely between properties and should be verified directly.",
      },
    },
    {
      "@type": "Question",
      name: "Is a private vehicle necessary for travelers with mobility issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not strictly required, but strongly recommended, since it removes time pressure and gives you control over pacing and route flexibility that shared vehicles don't allow.",
      },
    },
    {
      "@type": "Question",
      name: "Which parks have the best accessibility infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Masai Mara, Lake Nakuru, and Amboseli currently have the widest range of lodges with specific accessibility investments, though this changes over time and should be confirmed per property.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SafariMobilityIssuesArticle />
    </>
  )
}
