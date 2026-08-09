import type { Metadata } from "next"
import SafariFirstAidArticle from "@/components/SafariFirstAidArticle"

export const metadata: Metadata = {
  title: "Safari First Aid: What to Pack in Your Kit | Get Trip Go",
  description: "A compact kit for the common stuff -- what to bring on a Kenya safari, and why most lodges handle anything serious without you needing to worry.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safari First Aid: What to Pack in Your Kit",
  description: "A compact kit for the common stuff -- what to bring on a Kenya safari, and why most lodges handle anything serious without you needing to worry.",
  image: "/images/external/unsplash-177921617578.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to bring my own first aid kit if the camp has one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Camps handle genuine emergencies well, but a compact personal kit covers the everyday, minor stuff, such as headaches, upset stomachs, and small cuts, without relying on shared camp supplies.",
      },
    },
    {
      "@type": "Question",
      name: "What's the most commonly forgotten item on a safari packing list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Motion sickness tablets. Bush roads and light aircraft transfers are rougher than most travelers anticipate.",
      },
    },
    {
      "@type": "Question",
      name: "Should I pack my medication in checked luggage or my daypack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your daypack. Bush flights between camps can occasionally separate you from checked luggage for a few hours, so keep essentials with you.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a copy of my prescription for Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's good practice. Keep medication in its original packaging with a prescription copy in case a question comes up at customs or you need a local refill.",
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
      <SafariFirstAidArticle />
    </>
  )
}
