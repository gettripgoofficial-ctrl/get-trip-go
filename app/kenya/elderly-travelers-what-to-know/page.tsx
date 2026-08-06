import type { Metadata } from "next"
import ElderlyTravelersArticle from "@/components/ElderlyTravelersArticle"

export const metadata: Metadata = {
  title: "Elderly Travelers: What to Know Before a Safari | Get Trip Go",
  description: "Comfort, pacing, and lodge choice matter more than fitness for most older travelers -- what to know before booking a Kenya safari.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Elderly Travelers: What to Know Before a Safari",
  description: "Comfort, pacing, and lodge choice matter more than fitness for most older travelers -- what to know before booking a Kenya safari.",
  image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1600&q=80",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an age limit for a Kenya safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There's no official age restriction, and travelers in their 80s and 90s go on safari regularly and comfortably.",
      },
    },
    {
      "@type": "Question",
      name: "Is a fly-in safari necessary for older travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily, since it's a comfort preference. Many older travelers enjoy road transfers as part of the experience, provided the itinerary allows for rest stops.",
      },
    },
    {
      "@type": "Question",
      name: "How should I pace an itinerary for elderly travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Favor longer stays of 3-5 nights at fewer camps rather than a fast-moving circuit, to cut down on transfer days while allowing enough rest between game drives.",
      },
    },
    {
      "@type": "Question",
      name: "What should I tell my operator in advance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any mobility aids, health conditions, or pacing preferences, so they can arrange the right vehicle, rooming, and itinerary structure before you arrive.",
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
      <ElderlyTravelersArticle />
    </>
  )
}
