import type { Metadata } from "next"
import DrinkingWaterFoodSafetyArticle from "@/components/DrinkingWaterFoodSafetyArticle"

export const metadata: Metadata = {
  title: "Drinking Water and Food Safety on Safari",
  description: "Most lodges serve filtered or bottled water -- here's exactly what's safe to drink and eat on a Kenya safari, and what to check before you drink.",
  openGraph: {
    title: "Drinking Water and Food Safety on Safari | Get Trip Go",
    description: "Most lodges serve filtered or bottled water -- here's exactly what's safe to drink and eat on a Kenya safari, and what to check before you drink.",
    url: "https://gettripgo.com/kenya/drinking-water-and-food-safety-on-safari",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-156808468078.jpg", width: 1200, height: 630, alt: "Drinking Water and Food Safety on Safari" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drinking Water and Food Safety on Safari | Get Trip Go",
    description: "Most lodges serve filtered or bottled water -- here's exactly what's safe to drink and eat on a Kenya safari, and what to check before you drink.",
    images: ["/images/external/unsplash-156808468078.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/drinking-water-and-food-safety-on-safari",
  },
  keywords: ["Kenya food safety", "drinking water Kenya safari", "safari health tips"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Drinking Water and Food Safety on Safari",
  description: "Most lodges serve filtered or bottled water -- here's exactly what's safe to drink and eat on a Kenya safari, and what to check before you drink.",
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
      name: "Can I drink tap water in Nairobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's best avoided. Municipal treatment exists, but aging infrastructure and inconsistent supply mean it's not reliably safe for visitors, so stick to bottled or filtered water.",
      },
    },
    {
      "@type": "Question",
      name: "Is ice safe to have in drinks on safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes at reputable lodges, since it's typically made from boiled or filtered water. At budget venues or street vendors, it's safer to skip it.",
      },
    },
    {
      "@type": "Question",
      name: "Do lodges provide safe drinking water automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most reputable lodges and camps supply bottled or filtered water as standard, so it usually isn't something you need to arrange yourself.",
      },
    },
    {
      "@type": "Question",
      name: "Is street food safe to try in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It carries more variability than lodge meals. Stick to busy, visibly clean vendors with high turnover if you want to try it.",
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
      <DrinkingWaterFoodSafetyArticle />
    </>
  )
}
