import type { Metadata } from "next"
import SafariHeartConditionsArticle from "@/components/SafariHeartConditionsArticle"

export const metadata: Metadata = {
  title: "Safari for People With Heart Conditions or Chronic Illness | Get Trip Go",
  description: "Altitude, heat, and access to medical care -- what to plan around before you book a Kenya safari with a heart condition or chronic illness.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safari for People With Heart Conditions or Chronic Illness",
  description: "Altitude, heat, and access to medical care -- what to plan around before you book a Kenya safari with a heart condition or chronic illness.",
  image: "https://images.unsplash.com/photo-1779216175784-a67b6da108bb?w=1600&q=80",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I go on safari if I have a heart condition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes, with your cardiologist's clearance and some adjustments, such as avoiding overexertion and extreme heat, and considering a fly-in safari to reduce physical strain.",
      },
    },
    {
      "@type": "Question",
      name: "What is a travel insurance look-back period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The window, typically starting from your first trip deposit, during which your pre-existing condition needs to have been stable for the insurer to cover it.",
      },
    },
    {
      "@type": "Question",
      name: "Is a fly-in safari better for chronic health conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes, since it reduces the physical strain of long road transfers and provides quicker access to medical facilities if needed.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I see a doctor before a safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 6-8 weeks before departure, with your specific itinerary in hand so the advice can be tailored to your actual trip.",
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
      <SafariHeartConditionsArticle />
    </>
  )
}
