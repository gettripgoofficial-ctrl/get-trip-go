import type { Metadata } from "next"
import GreatMigrationExplainedArticle from "@/components/GreatMigrationExplainedArticle"

export const metadata: Metadata = {
  title: "The Great Migration Explained: When, Where and Why",
  description: "A month-by-month breakdown of the Great Migration — where the herds are, when the Mara River crossings happen, and where to base yourself for the best odds.",
  openGraph: {
    title: "The Great Migration Explained: When, Where and Why | Get Trip Go",
    description: "A month-by-month breakdown of the Great Migration — where the herds are, when the Mara River crossings happen, and where to base yourself for the best odds.",
    url: "https://gettripgo.com/kenya/the-great-migration-explained",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-156410116053.jpg", width: 1200, height: 630, alt: "The Great Migration Explained: When, Where and Why" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Migration Explained: When, Where and Why | Get Trip Go",
    description: "A month-by-month breakdown of the Great Migration — where the herds are, when the Mara River crossings happen, and where to base yourself for the best odds.",
    images: ["/images/external/unsplash-156410116053.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/the-great-migration-explained",
  },
  keywords: ["Great Migration Kenya", "Mara river crossing", "wildebeest migration guide"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Great Migration Explained: When, Where and Why",
  description: "A month-by-month breakdown of the Great Migration — where the herds are, when the Mara River crossings happen, and where to base yourself for the best odds.",
  image: "/images/external/unsplash-156410116053.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Great Migration guaranteed if I visit in July?",
      acceptedAnswer: { "@type": "Answer", text: "No sighting in nature is guaranteed, but July through September in the Masai Mara is statistically the most reliable window for both the general migration and river crossings specifically." },
    },
    {
      "@type": "Question",
      name: "Can I see the migration in Kenya, or only Tanzania?",
      acceptedAnswer: { "@type": "Answer", text: "Both. The migration is a single circuit spanning both countries — Kenya's Masai Mara hosts the herds roughly July through October, while Tanzania's Serengeti hosts them the rest of the year, including calving season." },
    },
    {
      "@type": "Question",
      name: "How many days do I need to see a river crossing?",
      acceptedAnswer: { "@type": "Answer", text: "Most experienced guides recommend at least three to four days in the Mara during peak season to give yourself a realistic chance, since crossings can't be scheduled on demand." },
    },
  ],
}

export default function GreatMigrationExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GreatMigrationExplainedArticle />
    </>
  )
}
