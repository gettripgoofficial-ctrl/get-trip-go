import type { Metadata } from "next"
import SafariPregnancyArticle from "@/components/SafariPregnancyArticle"

export const metadata: Metadata = {
  title: "Is a Kenya Safari Safe During Pregnancy",
  description: "What to check with your doctor, which trimester works best, and which activities to skip if you're planning a Kenya safari while pregnant.",
  openGraph: {
    title: "Is a Kenya Safari Safe During Pregnancy | Get Trip Go",
    description: "What to check with your doctor, which trimester works best, and which activities to skip if you're planning a Kenya safari while pregnant.",
    url: "https://gettripgo.com/kenya/is-a-kenya-safari-safe-during-pregnancy",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-157189634984.jpg", width: 1200, height: 630, alt: "Is a Kenya Safari Safe During Pregnancy" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is a Kenya Safari Safe During Pregnancy | Get Trip Go",
    description: "What to check with your doctor, which trimester works best, and which activities to skip if you're planning a Kenya safari while pregnant.",
    images: ["/images/external/unsplash-157189634984.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/is-a-kenya-safari-safe-during-pregnancy",
  },
  keywords: ["pregnancy safari Kenya", "safari while pregnant", "Kenya travel pregnancy safety"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is a Kenya Safari Safe During Pregnancy",
  description: "What to check with your doctor, which trimester works best, and which activities to skip if you're planning a Kenya safari while pregnant.",
  image: "/images/external/unsplash-157189634984.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the best trimester for a Kenya safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The second trimester (roughly weeks 13-27) is generally considered the most comfortable and lowest-risk window, once early symptoms have eased and before mobility becomes more limited.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take bush flights while pregnant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes earlier in pregnancy, but many operators stop accepting pregnant passengers around 28-32 weeks. Confirm the specific cutoff with your safari operator directly.",
      },
    },
    {
      "@type": "Question",
      name: "Is malaria prevention different during pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Some standard antimalarial medications aren't recommended during pregnancy, so this needs a specific conversation with your doctor rather than following general guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a doctor's letter to fly to Kenya while pregnant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Requirements vary by airline and typically kick in somewhere between 28-34 weeks. Check your specific carrier's policy well before booking.",
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
      <SafariPregnancyArticle />
    </>
  )
}
