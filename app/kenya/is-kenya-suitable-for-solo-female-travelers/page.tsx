import type { Metadata } from "next"
import SoloFemaleTravelersArticle from "@/components/SoloFemaleTravelersArticle"

export const metadata: Metadata = {
  title: "Is Kenya Suitable for Solo Female Travelers",
  description: "What solo travelers actually experience on the ground, from booking to game drives -- and where ordinary travel precautions actually matter.",
  openGraph: {
    title: "Is Kenya Suitable for Solo Female Travelers | Get Trip Go",
    description: "What solo travelers actually experience on the ground, from booking to game drives -- and where ordinary travel precautions actually matter.",
    url: "https://gettripgo.com/kenya/is-kenya-suitable-for-solo-female-travelers",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-152380500934.jpg", width: 1200, height: 630, alt: "Is Kenya Suitable for Solo Female Travelers" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Kenya Suitable for Solo Female Travelers | Get Trip Go",
    description: "What solo travelers actually experience on the ground, from booking to game drives -- and where ordinary travel precautions actually matter.",
    images: ["/images/external/unsplash-152380500934.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/is-kenya-suitable-for-solo-female-travelers",
  },
  keywords: ["solo female travel Kenya", "Kenya safari solo women", "safari safety women"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Kenya Suitable for Solo Female Travelers",
  description: "What solo travelers actually experience on the ground, from booking to game drives -- and where ordinary travel precautions actually matter.",
  image: "/images/external/unsplash-152380500934.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe for a woman to safari alone in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes, especially with reputable operators, since you're rarely actually alone on a guided safari -- you're with a driver-guide and often other guests for most of the trip.",
      },
    },
    {
      "@type": "Question",
      name: "What's the single supplement, and can it be avoided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's an added charge, typically 25-50% above per-person rates, for solo occupancy of a room or tent. Some properties waive it in shoulder season.",
      },
    },
    {
      "@type": "Question",
      name: "Are there women-only or women-staffed camps in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A small number exist regionally, though this concept is currently more established in neighboring Tanzania than in Kenya specifically.",
      },
    },
    {
      "@type": "Question",
      name: "What transport should solo women avoid in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matatus (shared public minibuses), especially at night. Registered taxis, ride-hailing apps, or pre-arranged private transfers are the safer standard.",
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
      <SoloFemaleTravelersArticle />
    </>
  )
}
