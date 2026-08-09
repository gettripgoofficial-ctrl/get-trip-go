import type { Metadata } from "next"
import TravelInsuranceSafariArticle from "@/components/TravelInsuranceSafariArticle"

export const metadata: Metadata = {
  title: "Travel Insurance for Safari: What It Should Cover | Get Trip Go",
  description: "Medical evacuation cover matters more than trip cancellation for most safaris. Here's the exact checklist to compare before you buy.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Travel Insurance for Safari: What It Should Cover",
  description: "Medical evacuation cover matters more than trip cancellation for most safaris. Here's the exact checklist to compare before you buy.",
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
      name: "What's the single most important coverage for a Kenya safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medical evacuation coverage. A remote-area air evacuation to Nairobi can cost USD 15,000-40,000, and standard policies often cap this too low or exclude remote areas entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Does my regular travel insurance cover a safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Many standard policies exclude adventure or hazardous activities by default, which can technically include game drives, ballooning, or walking safaris.",
      },
    },
    {
      "@type": "Question",
      name: "Is AMREF Flying Doctors a replacement for travel insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AMREF covers the emergency evacuation flight itself, not medical treatment costs, so it's meant to pair with a comprehensive travel insurance policy, not replace one.",
      },
    },
    {
      "@type": "Question",
      name: "How much medical coverage should I look for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most safari-specific guidance recommends at least USD 100,000 in medical expense coverage and USD 200,000+ in evacuation coverage, with unlimited preferred where affordable.",
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
      <TravelInsuranceSafariArticle />
    </>
  )
}
