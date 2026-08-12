import type { Metadata } from "next"
import VaccinationsForKenyaArticle from "@/components/VaccinationsForKenyaArticle"

export const metadata: Metadata = {
  title: "Vaccinations for Kenya: Yellow Fever and What Else You Need",
  description: "Do Indian travelers need the yellow fever vaccine for Kenya? What's mandatory, what's recommended, and the one rule most people miss on the way back to India.",
  openGraph: {
    title: "Vaccinations for Kenya: Yellow Fever and What Else You Need | Get Trip Go",
    description: "Do Indian travelers need the yellow fever vaccine for Kenya? What's mandatory, what's recommended, and the one rule most people miss on the way back to India.",
    url: "https://gettripgo.com/kenya/vaccinations-for-kenya-yellow-fever-and-more",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-vaccine-syringe.jpg", width: 1200, height: 630, alt: "Vaccinations for Kenya: Yellow Fever and What Else You Need" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaccinations for Kenya: Yellow Fever and What Else You Need | Get Trip Go",
    description: "Do Indian travelers need the yellow fever vaccine for Kenya? What's mandatory, what's recommended, and the one rule most people miss on the way back to India.",
    images: ["/images/external/unsplash-vaccine-syringe.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/vaccinations-for-kenya-yellow-fever-and-more",
  },
  keywords: ["Kenya vaccinations", "yellow fever vaccine Kenya", "Kenya travel health India"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vaccinations for Kenya: Yellow Fever and What Else You Need",
  description: "Do Indian travelers need the yellow fever vaccine for Kenya? What's mandatory, what's recommended, and the one rule most people miss on the way back to India.",
  image: "/images/external/unsplash-vaccine-syringe.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need the yellow fever vaccine for a direct Delhi–Nairobi flight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Direct travel from India doesn't require a yellow fever certificate for entry into Kenya, since India isn't on the endemic-country list.",
      },
    },
    {
      "@type": "Question",
      name: "Will I need it if my flight connects through Addis Ababa or Entebbe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Transiting through a yellow-fever-endemic country, even for a short layover, can trigger the requirement at Kenyan immigration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need proof of vaccination to re-enter India after visiting Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because Kenya is itself yellow-fever-endemic, Indian immigration expects a valid certificate on your return, separate from whatever Kenya required on the way in.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance do I need the vaccine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At least 10 days before departure for the certificate to be valid. A single dose lasts for life.",
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
      <VaccinationsForKenyaArticle />
    </>
  )
}
