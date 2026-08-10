import type { Metadata } from "next"
import MalariaPreventionArticle from "@/components/MalariaPreventionArticle"

export const metadata: Metadata = {
  title: "Malaria Prevention: Tablets, Repellents and Risk Areas",
  description: "Which parts of Kenya carry malaria risk, which tablets doctors recommend, and how to protect yourself on safari and the coast.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Malaria Prevention: Tablets, Repellents and Risk Areas",
  description: "Which parts of Kenya carry malaria risk, which tablets doctors recommend, and how to protect yourself on safari and the coast.",
  image: "/images/external/unsplash-174185082115.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need malaria tablets if I'm only visiting Nairobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're staying strictly within central Nairobi, prophylaxis is generally not recommended, since the risk there is low. That changes as soon as your itinerary adds a safari park or the coast.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Masai Mara high risk for malaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's moderate — higher altitude than the coast means lower transmission than Mombasa or Diani, but most travel clinics still recommend prophylaxis, especially since Mara itineraries are usually combined with lower-altitude stops.",
      },
    },
    {
      "@type": "Question",
      name: "Can a short 3-4 day safari skip the tablets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trip length doesn't remove the risk — even short stays in a risk area warrant the same conversation with a doctor as a longer trip would.",
      },
    },
    {
      "@type": "Question",
      name: "What if I get a fever after coming home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "See a doctor promptly and mention your travel history specifically — malaria symptoms can appear weeks after you return, and a blood test is the fastest way to rule it in or out.",
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
      <MalariaPreventionArticle />
    </>
  )
}
